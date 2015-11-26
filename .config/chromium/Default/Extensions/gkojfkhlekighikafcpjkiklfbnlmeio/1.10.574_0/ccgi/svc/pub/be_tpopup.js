// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', 'backbone', '/svc/pub/be_backbone.js',
    '/util/etask.js', '/svc/pub/be_util.js', '/svc/pub/be_tabs.js',
    '/svc/pub/be_ext.js', '/svc/pub/be_browser.js', '/svc/util.js',
    '/util/escape.js', '/svc/pub/be_lib.js', '/util/url.js',
    '/svc/pub/be_tab_unblocker.js', '/svc/pub/be_info.js',
    '/svc/pub/be_rule.js', '/svc/pub/be_premium.js', 'be_ver',
    '/util/zerr.js', '/svc/pub/be_features.js', '/util/storage.js',
    '/util/date.js', '/svc/pub/torch_whitelist.js',
    '/svc/pub/be_iframe.js',
    window.no_chrome_mp ? undefined : '/svc/pub/be_mp.js',
    '/util/user_agent.js'],
    function($, _, Backbone, be_backbone, etask, be_util, be_tabs, be_ext,
    B, svc_util, zescape, be_lib, zurl, be_tab_unblocker, be_info, be_rule,
    be_premium, be_ver, zerr, be_features, storage, date, torch_whitelist,
    be_iframe, be_mp, user_agent){
B.assert_bg('be_tpopup');
var chrome = window.chrome, conf = window.conf, zconf = window.zon_config;
var zopts = be_util.zopts;
var be_bg_main = window.be_bg_main;
var os = user_agent.guess().os;
var E = new (be_backbone.model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    this.uninit();
	}.bind(this));
    },
}))();

function tpopup_user_check_old(root_url){
    var turl = E.tpopup_user[root_url];
    if (!turl || typeof turl!=='boolean')
	return turl;
    turl = E.tpopup_user[root_url] = {show: turl};
    return turl;
}

function tpopup_user_get(root_url){
    var turl = tpopup_user_check_old(root_url);
    if (!turl)
	turl = E.tpopup_user[root_url] = {};
    return turl;
}

function script_data(iframe_int, opt){
    var mp_msg = iframe_int.mp_msg;
    var $ = iframe_int.init_jquery();
    var $window = $(window);
    var chrome = window.chrome, $frame, cid = opt.connection_id, port, self;
    var origin = opt.origin, inited = false;
    var _init = chrome ? chrome_init : firefox_init;
    var _uninit = chrome ? chrome_uninit : firefox_uninit;
    var new_tpopup_width = 380;
    function add_iframe(){
	if (document.getElementById('_hola_popup_iframe__'))
	    return void console.error('frame already exists');
        if (!document.body) // XXX bahaa: wait for it
            return void console.error('document not ready');
        var tpopup_html;
        switch (opt.type)
        {
        case 'mplayer_new': tpopup_html = 'be_tpopup_new.html'; break;
        case 'svc_require': tpopup_html = 'engine_update.html'; break;
        default: tpopup_html = 'be_tpopup.html'; break;
        }
        var f = iframe_int.add({url: opt.base_url+'/'+tpopup_html+'?ver='
            +opt.ver});
        // XXX arik/alexeym hack: need something better than just z-index
        // alexeym: 99999 because need to be undex MPlayer overlay (100000)
        var styles = {position: 'fixed', top: '5px', right: '20px',
            'background-color': 'transparent', 'z-index': 99999,
            overflow: 'hidden', visibility: 'hidden', border: 'none'};
        if (opt.type=='mplayer_new')
        {
            styles.top = '0px';
            styles.right = '0px';
            styles.height = $window.height();
            styles.width = new_tpopup_width+'px';
        }
        if (opt.type=='svc_require')
        {
            styles.top = '0px';
            styles.right = '0px';
            styles.height = '100%';
            styles.width = '100%';
        }
        f.css(styles).attr('id', '_hola_popup_iframe__');
	document.body.addEventListener('mousedown', mousedown_cb);
        window.addEventListener('message', on_tab_msg, false);
        return f;
    }
    function rm_iframe(){
        try {
            if (!$frame)
                return;
            if (document.body)
                document.body.removeEventListener('mousedown', mousedown_cb);
            rm_msg_listener();
            $frame = null;
            iframe_int.remove();
        } catch(e){
            // in firefox when navigate to different page we get error:
            // "Permission denied to access property 'document'"
            console.error('rm_iframe error: '+e);
        }
    }
    function rm_msg_listener(forced){
        if (opt.persistent && !forced)
            return;
        window.removeEventListener('message', on_tab_msg, false);
    }
    function mousedown_cb(){
        if (!$frame)
            return;
	// XXX arik/bahaa hack: best solution is to ask be_ui_vpn to call
	// set_dont_show_again
	if (!opt.type)
        {
            ext_send_msg({type: 'be_msg_req', id: Math.random(),
                _type: 'tpopup', _tab_id: opt.tab_id, context: {rmt: true},
                msg: {msg: 'call_api', obj: 'tpopup',
                func: 'set_dont_show_again', args: [{tab_id: opt.tab_id,
                period: 'session', root_url: opt.root_url,
                src: 'ext_click'}]}});
        }
	// XXX arik/bahaa hack: need generic way to pass messages to tpopup
        iframe_int.send({id: 'cs_tpopup.hide_anim'});
        // XXX arik/alexeym hack: we set 500 to allow tpopup close animation
        // to finish
        setTimeout(uninit, 500);
    }
    function ext_send_msg(msg){
        if (chrome)
            return void chrome.extension.sendMessage(msg);
        self.postMessage(msg);
    }
    function on_ext_msg(msg){
	if (!msg || msg._connection_id!==cid)
            return;
        iframe_int.send(msg, origin);
    }
    function on_tab_msg(e){
        if (mp_msg.parse(e.data))
            return; // be_inject will handle
        var msg = e.data;
        if (msg && msg.id=='enable_root_url')
        {
            msg.no_resp = true;
            msg.opt = msg.opt||{};
            if (!msg.opt.root_url)
                msg.opt.root_url = opt.root_url;
            if (!msg.opt.country)
                msg.opt.country = 'US';
            ext_send_msg(msg);
            rm_msg_listener(true);
            return;
        }
        if (!msg || e.origin!==origin || !$frame)
            return;
        switch (msg.id)
        {
        case 'tpopup.show': $frame.css('visibility', 'visible'); break;
        case 'tpopup.hide': $frame.css('visibility', 'hidden'); break;
        case 'tpopup.init':
	    // XXX arik/bahaa: need to send opt as is to popup
            msg = {id: msg.id, conf: opt.conf, zon_config: opt.zon_config,
                ver: opt.ver, tab_id: opt.tab_id, root_url: opt.root_url,
                url: opt.url, type: opt.type,
                is_reminder: opt.is_reminder, zopts: opt.zopts};
            if (opt.screenshot)
                msg.screenshot = opt.screenshot;
            iframe_int.send(msg, origin);
            break;
        case 'tpopup.resize':
            on_resize(msg);
            break;
	case 'tpopup.close': uninit(); break;
        default: // forward to extension
            msg._tab_id = opt.tab_id;
            msg._connection_id = cid;
            ext_send_msg(msg);
            break;
        }
    }
    function on_resize(msg){
        var height = msg && msg.height;
        var width = msg && msg.width;
        if (opt.type=='mplayer_new')
        {
            height = $window.height();
            width = new_tpopup_width;
        }

        if (opt.type=='svc_require')
        {
            height = '100%';
            width = '100%';
        }
        iframe_int.resize({width: width, height: height});
    }
    function init(){
        if (inited)
            return;
        // url might change between the time BG called tabs.executeScript and
        // this point (happens consistently on some sites)
        if (opt.url!=location.href)
        {
            console.error('expected url: '+opt.url+' actual: '+location.href);
            return;
        }
        if (opt.type=='mplayer_new')
            $window.on('resize', on_resize);
        inited = true;
        if (!($frame = add_iframe()))
            return;
        _init();
    }
    function uninit(){
        if (!inited)
            return;
        rm_iframe();
        if (opt.type=='mplayer_new')
            $window.off('resize', on_resize);
        _uninit();
        inited = false;
    }
    function on_disconnect(){
        uninit();
        rm_msg_listener(true);
    }
    function chrome_init(){
        port = chrome.extension.connect({name: cid});
        chrome.extension.onMessage.addListener(on_ext_msg);
        port.onDisconnect.addListener(on_disconnect);
    }
    function chrome_uninit(){
        chrome.extension.onMessage.removeListener(on_ext_msg);
        port.onDisconnect.removeListener(on_disconnect);
        port = null;
    }
    function firefox_init(){
        self = window.self;
        self.on('message', on_ext_msg);
        self.on('detach', on_disconnect); // FF<30
        self.port.on('detach', on_disconnect); // FF>=30
    }
    function firefox_uninit(){
        self.removeListener('message', on_ext_msg);
        self.removeListener('detach', on_disconnect);
        self.port.removeListener('detach', on_disconnect);
        self = null;
    }
    init();
}

function _is_dont_show(tab, val, type, root_url){
    if (!val)
	return false;
    // XXX arik BACKWARD: < 1.3.265 didn't save user ts. need to fix db
    // entries and rm "||val.ts".
    var ts_diff = new Date() - date.from_sql(val.ts_user||val.ts);
    var dont_show_tabs = be_info.get('dont_show_tabs')||{};
    var tab_data = dont_show_tabs[tab.id];
    var type_check = !type || (type && tab_data && tab_data.type == type);
    if (val.period=='never')
        return type_check && is_torch_reminder(root_url);
    if (val.period=='default')
	return type_check && (ts_diff < date.ms.WEEK);
    if (val.period=='session')
    {
	if (tab && dont_show_tabs[tab.id] && type_check)
	    return true;
    }
    return false;
}

function is_dont_show(tab, root_url, type){
    var settings = be_info.get('settings');
    if (!settings||!settings.dont_show)
	return false;
    if (tab && tab.id && redirect_tabs[tab.id])
        return false;
    if (_is_dont_show(tab, settings.dont_show.all, type, root_url) ||
	_is_dont_show(tab, settings.dont_show[root_url], type, root_url))
    {
	return true;
    }
    return false;
}

function is_torch_reminder(root_url){
    // XXX mark: this is a test run, WIP
    return storage.get_int('torch_reminder')||(be_util.browser()=='torch' &&
        root_url=='netflix.com' && /^f/.test(be_ext.get('uuid')));
    return be_util.browser()=='torch' && torch_whitelist.indexOf(root_url)!=-1;
}

function popup_showing(){
    if (chrome)
    {
        var views = chrome.extension.getViews({type: 'popup'});
        return views && views.length>0;
    }
    return B.have['firefox.panel.is_showing'] &&
        etask.cb_apply(B.firefox.panel, '.is_showing', []);
}

function is_disabled(){
    return !be_ext.get('r.ext.enabled');
}

// Minimum unblocking rate to suggest unblocking via tpopup
var min_suggest_rate=0.3;

var forced_urls = {}, connected_tpopups = {};
function is_connected(tab_id, tpopup_type){
    if (tpopup_type=='svc_require')
        return false;
    var tab_connected = B.tabs.is_connected(tab_id);
    return tab_connected && tpopup_type ?
        connected_tpopups[tab_id]==tpopup_type :
        tab_connected && connected_tpopups[tab_id];
}
E.is_connected = is_connected;
function is_current_tab(tab_id){
    return be_tabs.get('active.id')==tab_id;
}
// XXX arik/alexeym: need to mv logic out and add a test
function do_tpopup(tab, tpopup_opt, retry){
    if (!tab || !tab.url || (chrome && tab.incognito) || is_disabled())
    {
        return;
    }
    var root_url, url = tab.url, id = tab.id;
    tpopup_opt = tpopup_opt||{};
    var tpopup_type = tpopup_opt.type||'';
    var is_reminder = false;
    var deactivated_rules;
    E.unset('tpopup_type');
    return etask({name: 'do_tpopup', cancel: true}, [function(){
        root_url = svc_util.get_root_url(url);
        deactivated_rules = root_url && get_deactivated_rule(root_url);
        var enabled_rules = root_url && get_enabled_rule(root_url);
        var has_rules = deactivated_rules||enabled_rules;
        return !tpopup_type && has_rules ? check_activation() : false;
    }, function(check_activation){
        if (check_activation && deactivated_rules)
            tpopup_type = 'svc_require';
	// fast path. rechecked before attach
	if (is_connected(id, tpopup_type) && !redirect_tabs[id])
	    return this.ereturn(zerr.notice('tab already attached'));
        connected_tpopups[id] = tpopup_type ? tpopup_type : true;
        E.set('tpopup_type', tpopup_type);
        if (tpopup_type=='svc_require')
            return this.egoto('render');
    }, function(){
	if (be_info.is_force_tpopup(root_url))
        {
	    forced_urls[root_url] = true;
	    be_info.unset_force_tpopup(root_url);
	    return this.egoto('check_ver');
	}
	if (is_dont_show(tab, root_url, tpopup_type))
	{
	    zerr.notice('tab is dont show');
            return this.ereturn();
	}
        if ((is_reminder = is_torch_reminder(root_url)))
	    return this.egoto('check_ver');
	if (tpopup_type)
	    return this.egoto('render');
        if (forced_urls[root_url])
	    return this.egoto('check_ver');
	// XXX arik: decide if to call with root_url and if to mv logic
	// to server-side
	return be_info.get_unblocking_rate(200);
    }, function(unblocking_rate){
	if (!unblocking_rate)
            return false;
	for (var i=0, r, rate; !rate && (r = unblocking_rate[i]); i++)
	{
	    if (r.root_url==root_url && r.unblocking_rate>min_suggest_rate)
	        rate = r;
	}
        if (!rate)
            return false;
        return true;
    }, function(unblock_by_rate){
        if (unblock_by_rate)
            return true;
        return redirect_tabs[id] || (error_tabs[id] ? error_tabs[id].etask ||
            error_tabs[id].is_blocked : undefined);
    },
    function(need_unblock){
        if (!need_unblock)
            return this.ereturn();
    }, function check_ver(){ return window.RMT.check_ver();
    }, function render(e){
	if (e && e.load_ver)
            return this.ereturn(zerr('skip tpopup, load new ver'+e.load_ver));
        if (!tpopup_type)
            return popup_showing();
    }, function(showing){
        if (showing && !redirect_tabs[id])
            return this.ereturn(zerr.notice('extension popup is opened'));
        return be_tabs.get_tab(id);
    }, function(tab){
        // while we decide if need to insert tpopup, the tab can be removed,
        // replaced, changed url, already injected with tpopup
        if (!tab)
        {
            return this.ereturn(zerr('tpopup tab disappeared'));
        }
        if (tab.url!==url && !(error_tabs[id] && error_tabs[id].redirect))
        {
            zerr('tpopup tab changed url '+url+' -> '+tab.url);
            return this.ereturn();
        }
	if (is_connected(id, tpopup_type) && !redirect_tabs[id])
	    return this.ereturn(zerr.notice('tab already attached'));
	zerr.notice('applying tpopup to tab id %s', id);
        var proto = zurl.get_proto(url);
        var base_url = zconf._RELEASE ? conf.url_bext_cdn4||conf.url_bext :
            conf.url_bext;
        var zhost = zurl.get_host(base_url);
        if (tpopup_type=='svc_require')
        {
            base_url = conf.url_site;
            // XXX michaelg/alexeym get_host requires slash at the end
            zhost = zurl.get_host(base_url+'/');
	}
        var opt = {conf: conf, zon_config: zconf,
            base_url: base_url.replace(/^https?/, proto),
	    tab_id: id, connection_id: id+':tpopup:'+_.random(0xffff),
	    root_url: root_url, url: url, ver: be_ver.ver,
            origin: proto+'://'+zhost,
            is_reminder: is_reminder,
            persistent: !!redirect_tabs[id], zopts: zopts.table};
        if (tpopup_type)
            opt.type = tpopup_type;
        if (tpopup_opt.reason)
        {
            be_lib.perr_ok({id: 'be_tpopup_inject', info: {url: tab.url,
                reason: tpopup_opt.reason}});
        }
        etask([function(){
            if (tpopup_type=='svc_require' && chrome && chrome.tabs)
            {
                var current_tab = is_current_tab(opt.tab_id);
                var econt = this.econtinue_fn();
                setTimeout(function(){
                    if (current_tab)
                        current_tab = is_current_tab(opt.tab_id);
                    chrome.tabs.captureVisibleTab(tab.windowId, null,
                        function(url){
                        if (current_tab)
                            current_tab = is_current_tab(opt.tab_id);
                        // XXX alexeym/michaelg: need to be sure
                        // the screenshot is taken from tpopup tab
                        if (current_tab)
                            opt.screenshot = url;
                        econt();
                    });
                }, 1000);
                return this.wait();
            }
            return;
        }, function(){
            if (redirect_tabs[id])
                delete redirect_tabs[id];
            return be_iframe.inject(id, script_data, opt,
                chrome ? {} : {tpopup: 1, connection_id: opt.connection_id});
        }, function(){
            if ((tpopup_type=='mplayer' || tpopup_type=='mplayer_new') &&
                mplayer_tabs[id] && mplayer_tabs[id]==tab.url)
            {
                return;
            }
            if (tpopup_type=='mplayer' || tpopup_type=='mplayer_new')
            {
                mplayer_tabs[id] = tab.url;
                be_lib.perr_ok({id: 'be_media_mp_ui_tpopup_inject',
                    info: {url: tab.url}});
            }
            if (tpopup_type=='svc_require')
            {
                E.listenTo(be_bg_main, 'change:is_svc', function(){
                    var is_svc = be_bg_main.get('is_svc');
                    if (!is_svc)
                        return;
                    E.stopListening(be_bg_main);
                    B.tabs.update(opt.tab_id, {url: tab.url});
                });
            }
        }]);
	return opt;
    }, function cancel$(){
        delete connected_tpopups[id];
	return this.ereturn();
    }, function catch$(err){
        var ok = err.message==='OK';
	be_lib.perr_err({id: 'be_tpopup2_err', err: err,
            info: ok ? 'src_country: '+be_ver.country : null,
            filehead: ok ? zerr.log_tail() : ''});
        delete connected_tpopups[id];
    }, function ensure$(){
        if (error_tabs[id])
            delete error_tabs[id];
    }]);
}

function get_enabled_rule(root_url){
    var rules = be_rule.get_rules('http://'+root_url+'/');
    var r = rules && rules[0];
    return r && r.enabled ? r : undefined;
}

function get_deactivated_rule(root_url){
    var rules = be_rule.get_rules('http://'+root_url+'/');
    var r = rules && rules[0];
    return r && (r.enabled || r.cond=='svc_check_flow') ? true : false;
}

function tpopup_on_updated(o){
    do_tpopup(o.tab);
}

function tpopup_on_replaced(o){
    B.tabs.get(o.added, function(tab){
        do_tpopup(tab);
    });
}

function tpopup_on_error(o){
    if (!be_features.have(be_ext, 'completely_blocked'))
        return;
    if (!o || !o.id || is_disabled())
        return;
    var url;
    etask([function(){ return be_tabs.get_tab(o.id);
    }, function(tab){
        if (!tab)
            return this.ereturn();
        url = tab.url;
        var root_url = svc_util.get_root_url(url);
        if (get_enabled_rule(root_url))
            return this.ereturn();
        return check_gov_block(url, o.id);
    }, function(is_blocked){
        if (!is_blocked)
            return this.ereturn();
        return be_tabs.get_tab(o.id);
    }, function(tab){
        if (!tab || tab.url!=url)
            return this.ereturn();
        // alexeym: chrome doesn't allow to inject scripts for internal pages
        if (chrome && o.info && o.info.http_status_code===0)
            redirect_to_unblock(o.id);
        else
            do_tpopup(tab, {reason: 'gov_block'});
    }]);
}

var error_tabs = {};
function check_gov_block(url, tab_id){
    if (!url)
        return;
    if (error_tabs[tab_id] && error_tabs[tab_id].url==url)
        return;
    var keep_redirect = error_tabs[tab_id] && error_tabs[tab_id].redirect;
    error_tabs[tab_id] = {url: url};
    if (keep_redirect)
    {
        error_tabs[tab_id].redirect = keep_redirect;
        error_tabs[tab_id].is_blocked = true;
        return;
    }
    error_tabs[tab_id].etask = etask([function(){
        return be_tab_unblocker.check_gov_blocking(url);
    }, function(is_blocked){
        if (is_blocked===undefined)
            return this.ereturn();
        var tab_url = be_tabs.get_url(tab_id);
        if (is_blocked && tab_url==url)
            return be_tabs.get_tab(tab_id);
        return this.ereturn(is_blocked);
    }, function(tab){
        if (!error_tabs[tab_id])
        {
            if (tab && tab.url==url)
                error_tabs[tab_id] = {url: url};
            else
                return;
        }
        error_tabs[tab_id].is_blocked = true;
        delete error_tabs[tab_id].etask;
        return true;
    }]);
    return error_tabs[tab_id].etask;
}

var redirect_tabs = {};
function redirect_to_unblock(tab_id){
    if (!be_features.have(be_ext, 'completely_blocked') ||
        !be_features.have(be_ext, 'completely_blocked_rewrite'))
    {
        return;
    }
    if (!chrome)
        return;
    etask([function(){ return be_tabs.get_tab(tab_id);
    }, function(tab){
        if (!tab||!tab.url)
            return this.ereturn();
        var tab_url = tab.url;
        if (!be_tab_unblocker.is_vpn_allowed(tab_url, true))
            return this.ereturn();
        tab_url = svc_util.get_root_url(tab_url);
        if (!tab_url)
            return this.ereturn();
        if (get_enabled_rule(tab_url))
            return this.ereturn();
        be_lib.perr_ok({id: 'be_tpopup_rewrite', info: {url: tab.url,
            reason: 'http_code_0'}});
        be_tab_unblocker.rewrite_to_proxy(tab.url, tab_id);
        redirect_tabs[tab_id] = true;
    }]);
}

E.uninit = function(){
    if (!E.inited)
	return;
    E.inited = 0;
    E.sp.ereturn();
    E.stopListening();
};

function set_rules_cond(set){
    console.log('set rules cond', set);
    return etask([function(){
        return be_rule.set_rules_cond({cond: 'svc_check_flow', set: set});
    }, function(){
        // XXX alexeym/shachar: check if we need to fetch it here
        return be_rule.fetch_rules();
    }]);
}

function check_activation(){
    var svc_require;
    return etask([function(){
        return be_util.check_activation();
    }, function(check_activation){
        svc_require = check_activation;
        if (svc_require===true)
            return set_rules_cond(true);
        if (svc_require===false)
            return set_rules_cond(false);
    }, function(){
        return svc_require;
    }]);
}

function clear_timeout(o){ o.timer = clearTimeout(o.timer); }

E.init = function(){
    if (E.inited)
	return;
    E.inited = 1;
    E.sp = etask('be_tpopup', [function(){ return this.wait(); }]);
    if (!be_features.have(be_ext, 'tpopup2'))
        return;
    try { E.tpopup_user = storage.get_json('tpopup_user')||{}; }
    catch(e){ E.tpopup_user = {}; }
    if (E.tpopup_user==='false') /* old fmt */
	E.tpopup_user = {};
    E.listenTo(be_tabs, 'updated', tpopup_on_updated);
    E.listenTo(be_tabs, 'replaced', tpopup_on_replaced);
    E.listenTo(be_tabs, 'error_occured', tpopup_on_error);
    if (!be_mp)
        return;
    E.listenTo(be_mp, 'torrents', function(o){
        var forced_mp_tpopup = zopts.get('mp_tpopup');
        var is_new_tpopup = zopts.get('mp_tpopup_new');
        var mp_tpopup_available = os=='windows' || forced_mp_tpopup;
        if (!mp_tpopup_available)
            return;
        var url = be_tabs.get_url(o.tab_id);
        url = zurl.parse(url);
        // alexeym: just to be sure, disable MP tpopup for hola player pages
        // except these
        var enable_mp_tpopup = ['/mp_fun', '/player_torrents'];
        if (url.hostname=='hola.org' &&
            enable_mp_tpopup.indexOf(url.pathname)==-1)
        {
            return;
        }
        E.show_tpopup({tab_id: o.tab_id, type: is_new_tpopup ? 'mplayer_new' :
            'mplayer'});
    });
};

var mplayer_tabs = {};
E.show_tpopup = function(opt){
    return etask({name: 'show_tpopup', cancel: true}, [function(){
	return be_tabs.get_tab(opt.tab_id);
    }, function(tab){
        if (!tab)
            return;
        if (!tab.url)
            return;
        if (chrome && tab.incognito)
            return;
        return do_tpopup(tab, {type: opt.type});
    }]);
};

return E; });
