// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
// XXX arik/mark: review together backbone usage
define(['jquery', 'underscore', '/util/etask.js', '/svc/pub/be_backbone.js',
    '/svc/pub/be_browser.js', '/util/string.js', '/util/zerr.js',
    '/svc/util.js', '/util/date.js', '/util/storage.js', '/svc/pub/be_util.js',
    '/util/url.js', '/svc/pub/be_ext.js'],
    function($, _, etask, be_backbone, B, string, zerr, svc_util, date,
    storage, be_util, zurl, be_ext){
B.assert_bg('be_tabs');
var chrome = window.chrome;
var E = new (be_backbone.model.extend({
    _defaults: function(){ this.on('destroy', function(){ E.uninit(); }); },
}))();

function active_cb(){
    etask({name: 'active_cb', cancel: true}, [function(){
	return E.get_tab(E.get('active.real.id'));
    }, function(tab){
	if (tab && chrome)
	{
	    // don't change tab if new tab is developer tools
	    if (string.startsWith(tab.url||'',
		'chrome-devtools://devtools/bundled/devtools.html'))
	    {
		return;
	    }
	}
        E.set({'active.id': tab ? tab.id : undefined,
            'active.url': tab ? tab.url : '',
            'active.status': tab ? tab.status : '',
            'active.incognito': tab ? tab.incognito : false
        });
    }, function catch$(err){
        zerr('be_tabs_active_cb_err: '+err);
    }]);
}

function is_active(id){ return id===E.get('active.real.id'); }

var tab_trace = {};
function page_trace(details, msg, clear){
    if (!details)
        return;
    var is_main = chrome ? !details.frameId && (!details.type ||
        details.type=='main_frame') : details.is_main;
    if (!is_main)
        return;
    var tab_id = details.tabId;
    if (clear)
        page_trace_del(tab_id);
    var trace = tab_trace[tab_id] = tab_trace[tab_id]||[];
    var ts = details.timeStamp;
    var from_start = trace[0] ? ts-trace[0].ts : 0;
    var prev = trace.length ? trace[trace.length-1] : null;
    if (prev)
        prev.duration = ts-prev.ts;
    var status = details.statusCode||(prev&&prev.status)||'0';
    trace.push({ts: ts, real_ts: Date.now(), from_start: from_start, msg: msg,
        status: status});
}

function page_trace_del(tab_id){
    delete tab_trace[tab_id];
}

E.get_trace = function(tab_id){
    var trace = tab_trace[tab_id];
    if (!trace || !trace.length)
        return trace;
    trace[trace.length-1].duration = Date.now()-trace[trace.length-1].real_ts;
    return trace;
};

function on_created(tab){
    set_url(tab.id, tab.url);
    E.trigger('created', {tab: tab});
}

function on_updated(id, info, tab){
    if (!info.url && !info.status) // other changes aren't interesting
	return;
    set_url(id, info.url);
    if (is_active(id))
        E.sp.spawn(active_cb());
    E.trigger('updated', {id: id, info: info, tab: tab});
}

function on_activated(info){ E.set('active.real.id', info.tabId); }

function on_removed(id, info){
    del_url(id);
    track_redirect_del(id);
    page_trace_del(id);
    E.trigger('removed', {id: id, info: info});
}

function on_replaced(added, removed){
    del_url(removed);
    track_redirect_del(removed);
    page_trace_del(removed);
    if (is_active(removed))
        E.set('active.real.id', added);
    E.trigger('replaced', {added: added, removed: removed});
}

// alexeym: handler for network/DNS errors
// XXX alexeym: need to check these errors
var chrome_error_list = ['ACCESS_DENIED', 'BLOCKED_BY_ADMINISTRATOR',
    'CONNECTION_REFUSED', 'CONNECTION_FAILED', 'NAME_NOT_RESOLVED',
    'ADDRESS_UNREACHABLE', 'CERT_ERROR_IN_SSL_RENEGOTIATION',
    'NAME_RESOLUTION_FAILED', 'NETWORK_ACCESS_DENIED',
    'SSL_HANDSHAKE_NOT_COMPLETED', 'SSL_SERVER_CERT_CHANGED',
    'CERT_COMMON_NAME_INVALID', 'CERT_AUTHORITY_INVALID',
    'CERT_CONTAINS_ERRORS', 'CERT_INVALID', 'INVALID_RESPONSE',
    'EMPTY_RESPONSE', 'INSECURE_RESPONSE', 'DNS_MALFORMED_RESPONSE',
    'DNS_SERVER_FAILED', 'DNS_SEARCH_EMPTY'];
function on_error_occured(info){
    if (info.frameId!==0)
        return;
    var err = info.error||'';
    err = err.split('::ERR_')[1];
    if (chrome && (!err || chrome_error_list.indexOf(err)==-1))
        return;
    info.http_status_code = 0;
    E.trigger('error_occured', {id: info.tabId, info: info});
}

// alexeym: handler for 'normal' error states (404, 502, etc)
var status_rx = /^HTTP\/[^\s]+\s(\d\d\d)\s/;
function on_headers_received(details){
    if (!details)
        return;
    var is_main = chrome ? !details.frameId && details.type=='main_frame' :
        details.is_main;
    if (!is_main)
        return;
    var status = details.statusCode;
    if (status===undefined)
    {
        status = details.statusLine;
        if (typeof status!='string')
            return;
        status = status.match(status_rx);
        status = status && status[1] ? status[1] : null;
        if (status===null)
            return; // XXX alexeym: never should happen, need to add perr
    }
    else
        status+='';
    details.statusCode = status;
    page_trace(details, 'on_headers_received');
    if (status=='301' || status=='302')
    {
        track_redirect({id: details.tabId, url: details.url, info: details});
        return;
    }
    if (!{'4': 1, '5': 1}[status[0]])
        return;
    E.trigger('error_occured', {id: details.tabId, info:
        {http_status_code: status, type: details.type}});
}

function on_focused(id){
    if (id===B.windows.WINDOW_ID_NONE)
        return;
    E.set('active.window.id', id);
    B.tabs.query({active: true, windowId: id}, function(tabs){
        if (tabs.length)
            E.set('active.real.id', tabs[0].id);
    });
}

function on_before_navigate(info){
    page_trace(info, 'before_navigate', true);
    if (!info.frameId && is_active(info.tabId)) // main frame of active
        active_cb();
}

function on_completed(info){
    page_trace(info, 'completed');
    if (is_active(info.tabId))
        active_cb();
    E.trigger('completed', info);
}

function on_committed(details){
    page_trace(details, 'committed');
    E.trigger('committed', {id: details.tabId, info: details});
    if (!details.frameId && details.tabId && details.url)
    {
        var qualifiers = details.transitionQualifiers;
        if (qualifiers && qualifiers.indexOf('client_redirect')!=-1)
        {
            track_redirect({id: details.tabId, url: details.url,
                info: details});
        }
        last_committed[details.tabId] = get_root_url(details.url);
    }
    // XXX arik/shachar: enable and use be_tabs.on('reload') to verify proxy if
    // reloading a tab with rule enabled
    if (false && details.transitionType=='reload')
        E.trigger('reload', details);
}

function get_root_url(url){
    url = zurl.parse(url);
    if (!url.hostname || !url.protocol)
        return;
    url = url.protocol+'//'+url.hostname+'/';
    return svc_util.get_root_url(url);
}

var tabs_redirect = {}, last_committed = {};
function track_redirect(tab){
    if (!chrome || !tab || tab.id===undefined || !tab.url)
        return;
    var list = tabs_redirect[tab.id];
    if (!list)
        list = tabs_redirect[tab.id] = {};
    var last_url = last_committed[tab.id];
    var from_url = get_root_url(tab.url);
    var to_url;
    var headers = tab.info && tab.info.responseHeaders;
    if (headers)
    {
        _.each(headers, function(header){
            if (header.name.toLowerCase()=='location')
                to_url = header.value;
        });
        to_url = to_url ? get_root_url(to_url) : undefined;
    }
    if (!to_url && tab.info && tab.info.transitionQualifiers)
    {
        to_url = get_root_url(tab.url);
        from_url = last_url;
    }
    if (!from_url || !to_url || from_url==to_url)
        return;
    var now = Date.now();
    list[to_url] = {from: from_url, ts: now};
    setTimeout(function(){
        var url = list[to_url];
        if (url && url.ts==now)
            delete list[to_url];
    }, 120*date.ms.SEC);
}

// 'limit' is used only for recursion, don't specify it
function get_redirect_sequence(tab_id, url, ts_limit, limit){
    var result = [];
    var list = tabs_redirect[tab_id];
    if (!list || limit>5)
        return result;
    var parent_url = list[url];
    if (!parent_url)
        return result;
    if (parent_url.ts>ts_limit)
    {
        limit = limit||0;
        result = get_redirect_sequence(tab_id, parent_url.from, ts_limit,
            limit+1);
        result.push(parent_url.from);
        return result;
    }
    return result;
}

function track_redirect_del(tab_id){
    if (tab_id===undefined)
        return;
    delete last_committed[tab_id];
    delete tabs_redirect[tab_id];
}

E.get_redirect_list = function(tab_id){
    var time_limit = Date.now()-(120*date.ms.SEC);
    var active_url = E.get('active.url');
    active_url = active_url && get_root_url(active_url);
    return get_redirect_sequence(tab_id, active_url, time_limit);
};

E.init = function(){
    if (E.inited)
        return;
    E.sp = etask('be_tabs', [function(){ return this.wait(); }]);
    E.listen_to(be_ext, 'change:r.ext.enabled', update_state);
    E.urls = {};
    B.tabs.query({}, function(tabs){
        if (!tabs)
            return;
        for (var i=0; i<tabs.length; i++)
            set_url(tabs[i].id, tabs[i].url);
    });
    B.windows.get_last_focused({}, function(win){
        if (win)
            on_focused(win.id);
    });
    B.tabs.on_created.add_listener(on_created);
    B.tabs.on_updated.add_listener(on_updated);
    B.tabs.on_activated.add_listener(on_activated);
    B.tabs.on_removed.add_listener(on_removed);
    B.tabs.on_replaced.add_listener(on_replaced);
    B.windows.on_focus_changed.add_listener(on_focused);
    set_navigation_listeners();
    E.on_init('change:active.real.id', active_cb);
    B.backbone.server.start(E, (B.is_rmt ? 'r.' : '')+'be_tabs');
    E.inited = true;
};

E.uninit = function(){
    if (!E.inited)
        return;
    E.sp.ereturn();
    B.backbone.server.stop((B.is_rmt ? 'r.' : '')+'be_tabs');
    B.tabs.on_created.del_listener(on_created);
    B.tabs.on_updated.del_listener(on_updated);
    B.tabs.on_activated.del_listener(on_activated);
    B.tabs.on_removed.del_listener(on_removed);
    B.tabs.on_replaced.del_listener(on_replaced);
    B.windows.on_focus_changed.del_listener(on_focused);
    del_navigation_listeners();
    E.stopListening(be_ext);
    E.inited = false;
    E.urls = undefined;
};

function set_navigation_listeners(){
    if (E.nav_listening)
        return;
    E.nav_listening = true;
    // XXX bahaa: implement for firefox
    if (B.have['web_navigation.on_before_navigate'])
        B.web_navigation.on_before_navigate.add_listener(on_before_navigate);
    if (B.have['web_navigation.on_completed'])
        B.web_navigation.on_completed.add_listener(on_completed);
    if (B.have['web_navigation.on_error_occured'])
        B.web_navigation.on_error_occured.add_listener(on_error_occured);
    if (B.have['web_navigation.on_committed'])
        B.web_navigation.on_committed.add_listener(on_committed);
    if (B.have['web_request.on_headers_received'])
    {
        B.web_request.on_headers_received.add_listener(on_headers_received,
            {urls: ['<all_urls>']}, ['responseHeaders']);
    }
}

function del_navigation_listeners(){
    if (!E.nav_listening)
        return;
    E.nav_listening = false;
    if (B.have['web_navigation.on_before_navigate'])
        B.web_navigation.on_before_navigate.del_listener(on_before_navigate);
    if (B.have['web_navigation.on_completed'])
        B.web_navigation.on_completed.del_listener(on_completed);
    if (B.have['web_navigation.on_committed'])
        B.web_navigation.on_committed.del_listener(on_committed);
    if (B.have['web_navigation.on_error_occured'])
        B.web_navigation.on_error_occured.del_listener(on_error_occured);
    if (B.have['web_request.on_headers_received'])
        B.web_request.on_headers_received.del_listener(on_headers_received);
}

E.get_tab = function(tab_id){
    if (!tab_id)
	return null;
    return etask.cb_apply(B.tabs, '.get', [tab_id]);
};

function del_url(id){
    if (!E.urls[id])
        return;
    delete E.urls[id];
    E.trigger('url_updated', id);
}

function set_url(id, url){
    if (!url || url===E.urls[id])
        return;
    E.urls[id] = url;
    E.trigger('url_updated', id, url);
}

function update_state(){
    var is_enabled = be_ext.get('r.ext.enabled');
    if (E.is_enabled==is_enabled)
        return;
    E.is_enabled = is_enabled;
    del_navigation_listeners();
    if (!E.is_enabled)
        return;
    set_navigation_listeners();
}

E.get_url = function(tab_id){ return E.urls && E.urls[tab_id]; };

E.active = function(){ return E.get_tab(E.get('active.id')); };

return E; });
