// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', '/util/etask.js', '/util/zerr.js', '/svc/pub/be_msg.js',
    '/svc/pub/be_backbone.js', '/svc/pub/be_chrome.js', 'underscore',
    '/util/string.js', '/util/version_util.js', '/svc/pub/be_transport.js',
    '/util/user_agent.js', '/util/util.js'],
    function($, etask, zerr, be_msg, be_backbone, be_chrome, _, string,
    version_util, be_transport, user_agent, zutil){
// XXX bahaa: rm
var chrome = window.chrome, firefox = !chrome;
var is_popup = window.is_popup, is_tpopup = window.is_tpopup;
var use_msg = firefox || is_tpopup;
var use_backbone_over_msg = use_msg || firefox;
var bg = is_tpopup ? null : chrome ? chrome.extension.getBackgroundPage() :
    is_popup ? null : window;
var conf = window.conf, zconf = window.zon_config;
var E = new (be_backbone.model.extend({
    _defaults: function(){
        this.is_rmt = !!window.require_is_remote;
	this.use_msg = use_msg;
	this.bg = bg;
	this.msg = new be_msg();
	this.on('destroy', function(){
	    if (!E.inited)
                return;
            E.inited = false;
            be_chrome._destroy();
	    this.msg._destroy();
	});
    },
}))();

E.be_chrome = be_chrome; // debugging

E.init = function(opt){
    if (E.inited)
	return;
    E.inited = true;
    E.browser_version = user_agent.guess_browser().version;
    E.os = user_agent.guess().os;
    opt = opt||{};
    var rpc = firefox ? E.rpc_types.firefox_msg : use_msg ?
        E.rpc_types.chrome_msg : E.rpc_types.chrome_native;
    E.msg.init(get_transport(),
        {context: opt.context!==undefined ? opt.context : {rmt: E.is_rmt},
        is_popup: E.is_popup()});
    E.rpc = rpc;
    E.rpc.init();
    E.have = chrome ? chrome_have() : firefox_have();
};

function get_transport(){
    if (is_tpopup)
        return be_transport.tpopup(window, parent);
    if (chrome)
        return be_transport.chrome_tabs(chrome);
    if (vcmp('1.1.629')<=0)
        return be_transport.firefox_bg_to_addon_1_1_629(top, top);
    return be_transport.firefox_bg_to_addon(top, top);
}

function vcmp(v){ return version_util.version_cmp(zconf.ZON_VERSION, v); }

function chrome_have(){
    var have = {};
    if (!conf.new_ui)
        have['be.proxy.refresh'] = true;
    if (chrome.runtime)
    {
        if (chrome.runtime.requestUpdateCheck)
            have['runtime.request_update_check'] = true;
        if (chrome.runtime.setUninstallURL)
            have['runtime.set_uninstall_url'] = true;
    }
    if (chrome.webNavigation)
    {
        if (chrome.webNavigation.onBeforeNavigate)
            have['web_navigation.on_before_navigate'] = true;
        if (chrome.webNavigation.onCompleted)
            have['web_navigation.on_completed'] = true;
        if (chrome.webNavigation.onCommitted)
            have['web_navigation.on_committed'] = true;
        if (chrome.webNavigation.onErrorOccurred)
            have['web_navigation.on_error_occured'] = true;
    }
    if (chrome.webRequest)
    {
        if (chrome.webRequest.onHeadersReceived)
            have['web_request.on_headers_received'] = true;
    }
    if (vcmp('1.3.90')>=0)
        have['runtime.get_install_details'] = true;
    if (window.be_bg && vcmp('1.2.676')>=0)
        have.auth_listener = true;
    if (vcmp('1.3.183')>=0)
    {
        have.tpopup = true;
        have['tabs.disconnect'] = true;
    }
    if (E.browser_version>=39)
        have['tabs.executeScript.matchAboutBlank'] = true;
    have['tabs.send_message'] = true;
    // XXX mikhail: change to version check after fully implementing B.cookies
    if (chrome.cookies)
        have.cookies = true;
    if (!conf.browser.torch && vcmp('1.6.745')>=0)
    {
        have.cs_inject = true;
        have.mp = true;
    }
    if (window.is_local_ccgi && vcmp('1.8.282')>=0)
        have.mp = false;
    if (window.no_chrome_mp!==undefined)
        have.mp = !window.no_chrome_mp;
    have.management = conf.type!=='cws';
    return have;
}

function firefox_have(){
    var have = {};
    if (vcmp('1.1.892')>=0)
        have['be.mem_info'] = true;
    if (vcmp('1.1.678')<0)
        have['be.proxy.refresh'] = true;
    if (vcmp('1.1.626')<0)
        have['be.proxy.set_pac_options'] = true;
    else if (vcmp('1.1.762')<0)
        have['be.proxy.set_rules'] = true;
    if (vcmp('1.2.600')>=0)
        have['firefox.panel.close'] = true;
    if (vcmp('1.4.917')>=0)
        have['firefox.panel.is_showing'] = true;
    if (vcmp('1.2.113')>=0)
        have['runtime.request_update_check'] = true;
    if (vcmp('1.1.759')>=0)
        have.req_listeners = true;
    if (vcmp('1.1.737')>=0)
        have['runtime.set_uninstall_url'] = true;
    if (vcmp('1.3.90')>=0)
    {
        have['runtime.get_install_details'] = true;
        have['be.gen_uuid'] = true;
        have['storage.remove'] = true;
    }
    if (window.be_bg && vcmp('1.3.172')>=0)
        have.auth_listener = true;
    if (vcmp('1.3.230')>=0 && E.browser_version>21)
        have.tpopup = true;
    if (vcmp('1.3.207')>=0)
        have.management = true;
    if (vcmp('1.4.756')>=0)
        have.req_headers_listeners = true;
    if (vcmp('1.3.427')>=0)
        have['cookies.get'] = true;
    if (vcmp('1.3.630')>=0 && E.browser_version>=28)
    {
        have['be.download'] = true;
        have['be.md5sum'] = true;
        if (E.os=='windows' || conf.plugin_enabled)
        {
            if (vcmp('1.5.414')>=0)
                have['be.plugin'] = true;
            if (vcmp('1.3.838')>=0)
                have['be.plugin.perr'] = true;
        }
    }
    if (vcmp('1.3.920')>=0)
        have['tabs.disconnect'] = true;
    if (vcmp('1.5.733')>=0)
    {
        have['web_request.on_headers_received'] = true;
        have['web_navigation.on_error_occured'] = true;
    }
    if (vcmp('1.6.69')>=0)
        have['be.plugin.enabled_state'] = true;
    if (vcmp('1.6.461')>=0)
        have['be.registry'] = true;
    if (vcmp('1.6.578')>=0)
        have['tabs.send_message'] = true;
    if (vcmp('1.6.726')>=0)
        have['tabs.on_message'] = true;
    if (vcmp('1.6.765')>=0)
    {
        have.cs_inject = true;
        have.mp = true;
    }
    if (vcmp('1.6.782')>=0)
    {
        have['be.file_size'] = true;
        have['be.sha1sum'] = true;
    }
    if (vcmp('1.8.351')>=0)
        have['be.getenv'] = true;
    return have;
}

E.is_popup = function(){ return is_popup; };
E.assert_popup = function(f){
    zerr.assert(!window.hola || window.hola.disable_assert_popup ||
        E.is_popup(), 'file '+f+' can only be included in popup');
};
E.assert_bg = function(f){
    zerr.assert(!E.is_popup(),
        'file '+f+' can only be included in background');
};

/* XXX arik: normalize api usage (eg, use opt instead of arguments, review
 * api namin conventions, handle errors) */
E.rpc_types = {
    chrome_native: {
        init: function(){
	    if (this.inited)
		return;
	    this.inited = true;
	    be_chrome.init(E.msg);
	    be_chrome.impl.init();
	    E.runtime.id = be_chrome.impl.id;
	    E.runtime.url = be_chrome.impl.url;
	    E.runtime.manifest = be_chrome.impl.manifest;
	},
	call_api: function(obj, sub, func, args, cb, ms, error_cb){
	    /* XXX arik: implment ms/error_cb */
	    var _this = this, _cb = !cb ? null : function(){
	        E.runtime.last_error = _this.last_error =
		    chrome.runtime.lastError;
		return cb.apply(null, arguments);
	    };
	    return be_chrome.impl.call_api(obj, sub, func, args, _cb);
	},
	add_listener: function(obj, sub, cb, opt, extra){
	    be_chrome.impl.add_listener(obj, sub, cb, opt, extra); },
	del_listener: function(obj, sub, cb){
	    be_chrome.impl.del_listener(obj, sub, cb); },
    },
    chrome_msg: {
	init: function(){ /* XXX arik: init should get cb for done init */
	    if (this.inited)
		return;
	    this.inited = true;
            be_chrome.init(E.msg);
	    E.rpc.call_api('impl', '', 'init', [], function(o){
	        E.runtime.id = o.id;
	        E.runtime.manifest = o.manifest;
                if ((E.runtime.url = o.url))
                    return;
                // XXX bahaa BACKWARD: v<1.3.141
                E.runtime.url = chrome ? 'chrome-extension://'+o.id :
                    'resource://'+o.id.replace('@', '-at-').toLowerCase()
                    +'/hola_firefox_ext';
	    });
        },
	call_api: function(obj, sub, func, args, cb, ms, error_cb){
	    var _this = this;
	    return E.msg.send({msg: 'call_api', obj: obj, sub: sub,
		func: func, args: args, has_cb: !!cb}, function(ret){
		if (!cb)
		    return;
	        /* XXX arik hack: rm from here */
		E.runtime.last_error = _this.last_error = ret.last_error;
		if (ret.error)
		{
		    if (error_cb)
		        error_cb(ret);
		    return;
		}
	        cb.apply(null, ret.args);
	    }, ms);
	},
	add_listener: function(obj, sub, cb){
	    E.msg.add_listener({obj: obj, sub: sub}, cb);
	},
	del_listener: function(obj, sub, cb){
	    E.msg.del_listener({obj: obj, sub: sub}, cb);
	},
    },
};
E.rpc_types.firefox_msg = E.rpc_types.chrome_msg;

E.browser_action = {
    set_icon: function(details, cb){
	E.rpc.call_api('browserAction', '', 'setIcon', [details], cb); },
    set_badge_text: function(details){
        E.rpc.call_api('browserAction', '', 'setBadgeText', [details]); },
    set_badge_background_color: function(details){
        E.rpc.call_api( 'browserAction', '', 'setBadgeBackgroundColor',
            [details]);
    },
    enable: function(id){
	E.rpc.call_api('browserAction', '', 'enable', [id]); },
    disable: function(id){
	E.rpc.call_api('browserAction', '', 'disable', [id]); },
    set_popup: function(details){
	E.rpc.call_api('browserAction', '', 'setPopup', [details]); },
    set_title: function(details){
	E.rpc.call_api('browserAction', '', 'setTitle', [details]); },
};
E.tabs = {
    get: function(tab_id, cb){
	E.rpc.call_api('tabs', '', 'get', [tab_id], cb); },
    remove: function(tab_id, cb){
	E.rpc.call_api('tabs', '', 'remove', [tab_id], cb); },
    query: function(details, cb){
	E.rpc.call_api('tabs', '', 'query', [details], cb); },
    create: function(details, cb){
	E.rpc.call_api('tabs', '', 'create', [details], cb); },
    update: function(tab_id, details, cb){
	E.rpc.call_api('tabs', '', 'update', [tab_id, details], cb); },
    reload: function(tab_id, details, cb){
	E.rpc.call_api('tabs', '', 'reload', [tab_id, details], cb); },
    data_url: function(file, cb){
        E.rpc.call_api('tabs', '', 'data_url', [file], cb); },
    execute_script: function(tab_id, details, cb){
        E.rpc.call_api('tabs', '', 'executeScript', [tab_id, details], cb); },
    insert_css: function(tab_id, details, cb){
        E.rpc.call_api('tabs', '', 'insertCSS', [tab_id, details], cb); },
    disconnect: function(tab_id, cb){
        if (use_msg)
            return E.rpc.call_api('tabs', '', 'disconnect', [tab_id], cb);
        var m = bg.be_bg_main.be_browser.msg;
        _.each(m.tab_connections[tab_id],
            function(id){
            var connection = m.connections[id];
            if (connection)
                connection.disconnect();
        });
        if (cb)
            cb();
    },
    send_message: function(id, msg, cb){
        E.rpc.call_api('tabs', '', 'sendMessage', [id, msg], cb); },
    on_created: {
	add_listener: function(cb){
	    E.rpc.add_listener('tabs', 'onCreated', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('tabs', 'onCreated', cb); },
    },
    on_updated: {
	add_listener: function(cb){
	    E.rpc.add_listener('tabs', 'onUpdated', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('tabs', 'onUpdated', cb); },
    },
    on_activated: {
	add_listener: function(cb){
	    E.rpc.add_listener('tabs', 'onActivated', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('tabs', 'onActivated', cb); },
    },
    on_removed: {
	add_listener: function(cb){
	    E.rpc.add_listener('tabs', 'onRemoved', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('tabs', 'onRemoved', cb); },
    },
    on_replaced: {
	add_listener: function(cb){
	    E.rpc.add_listener('tabs', 'on_replaced', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('tabs', 'on_replaced', cb); },
    },
    on_message: {
	add_listener: function(cb){
	    E.rpc.add_listener('tabs', 'on_message', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('tabs', 'on_message', cb); },
    },
    is_connected: function(tab_id){ return !!E.msg.tab_connections[tab_id]; },
};
E.windows = {
    get_last_focused: function(details, cb){
        E.rpc.call_api('windows', '', 'getLastFocused', [details], cb); },
    on_focus_changed: {
	add_listener: function(cb){
	    E.rpc.add_listener('windows', 'onFocusChanged', cb); },
	del_listener: function(cb){
	    E.rpc.del_listener('windows', 'onFocusChanged', cb); },
    },
    WINDOW_ID_NONE: chrome ? -1 : null, // XXX bahaa: fix
};
E.storage = {
    local: {
	get: function(keys, cb){
            E.rpc.call_api('storage', 'local', 'get', [keys], cb); },
	set: function(items, cb){
            E.rpc.call_api('storage', 'local', 'set', [items], cb); },
	remove: function(keys, cb){
            E.rpc.call_api('storage', 'local', 'remove', [keys], cb); },
    },
    sync: {
	get: function(keys, cb){
            E.rpc.call_api('storage', 'sync', 'get', [keys], cb); },
	set: function(items, cb){
            E.rpc.call_api('storage', 'sync', 'set', [items], cb); },
	remove: function(keys, cb){
            E.rpc.call_api('storage', 'sync', 'remove', [keys], cb); },
    },
};
E.extension = {
    is_allowed_incognito_access: function(cb){
        E.rpc.call_api('extension', '', 'isAllowedIncognitoAccess', [], cb); },
};
E.proxy = {
    settings: {
	get: function(opt, cb){
            E.rpc.call_api('proxy', 'settings', 'get', [opt], cb); },
	set: function(opt, cb){
            E.rpc.call_api('proxy', 'settings', 'set', [opt], cb); },
	clear: function(opt, cb){
            E.rpc.call_api('proxy', 'settings', 'clear', [opt], cb); },
	on_change: {
	    add_listener: function(cb){
		E.rpc.add_listener('proxy.settings.onChange', '', cb); },
	    del_listener: function(cb){
		E.rpc.del_listener('proxy.settings.onChange', '', cb); },
	},
    }
};
E.runtime = {
    set_uninstall_url: function(url, cb){
	E.rpc.call_api('runtime', '',
            chrome ? 'setUninstallURL' : 'setUninstallUrl', [url], cb);
    },
    request_update_check: function(cb){
	E.rpc.call_api('runtime', '', 'requestUpdateCheck', [], cb); },
    get_install_details: function(cb){
	E.rpc.call_api('runtime', '', 'get_install_details', [], cb); },
};
E.be = {
    proxy: {
        refresh: function(cb){ /* XXX bahaa BACKWARD: v<=1.1.678 */
            E.rpc.call_api('be', 'proxy', 'refresh', [], cb); },
        add_tab: function(tabid, details, cb){
            E.rpc.call_api('be', 'proxy', 'add_tab', [tabid, details], cb); },
        del_tab: function(tabid, cb){
            E.rpc.call_api('be', 'proxy', 'del_tab', [tabid], cb); },
        /* XXX bahaa BACKWARD: v<1.1.626 */
	set_pac_options: function(opt, cb){
	    E.rpc.call_api('be', 'proxy', 'set_pac_options', [opt], cb); },
        /* XXX bahaa BACKWARD: v<1.1.762 */
	set_rules: function(rules, opt, cb){
	    E.rpc.call_api('be', 'proxy', 'set_rules', [rules, opt], cb); },
        on_before_request: {
            set_listener: function(cb_name, cb){
                E.rpc.call_api('be.proxy.on_before_request', '',
                    'set_listener', [cb_name], cb);
            },
            clear_listener: function(cb){
                E.rpc.call_api('be.proxy.on_before_request', '',
                    'clear_listener', [], cb);
            },
        },
        on_before_send_headers: {
            set_listener: function(cb_name, cb){
                E.rpc.call_api('be.proxy.on_before_send_headers', '',
                    'set_listener', [cb_name], cb);
            },
            clear_listener: function(cb){
                E.rpc.call_api('be.proxy.on_before_send_headers', '',
                    'clear_listener', [], cb);
            },
        },
        on_headers_received: {
            set_listener: function(cb_name, cb){
                E.rpc.call_api('be.proxy.on_headers_received', '',
                    'set_listener', [cb_name], cb);
            },
            clear_listener: function(cb){
                E.rpc.call_api('be.proxy.on_headers_received', '',
                    'clear_listener', [], cb);
            },
        },
        on_completed: {
            set_listener: function(cb_name, cb){
                E.rpc.call_api('be.proxy.on_completed', '',
                    'set_listener', [cb_name], cb);
            },
            clear_listener: function(cb){
                E.rpc.call_api('be.proxy.on_completed', '',
                    'clear_listener', [], cb);
            },
        },
        on_find_proxy_for_url: {
            set_listener: function(cb_name, cb){
                E.rpc.call_api('be.proxy.on_find_proxy_for_url', '',
                    'set_listener', [cb_name], cb);
            },
            clear_listener: function(cb){
                E.rpc.call_api('be.proxy.on_find_proxy_for_url', '',
                    'clear_listener', [], cb);
            },
        },
	on_auth_required: {
            set_listener: function(cb_name, cb){
                E.rpc.call_api('be.proxy.on_auth_required', '',
                    'set_listener', [cb_name], cb);
            },
            clear_listener: function(cb){
                E.rpc.call_api('be.proxy.on_auth_required', '',
                    'clear_listener', [], cb);
            },
        },
    },
    unblocker: {
        check: function(cb){
            E.rpc.call_api('be', 'unblocker', 'check', [], cb);
        },
        parse_obj: function(obj, cb){
            E.rpc.call_api('be', 'unblocker', 'parse_obj', [obj], cb);
        },
    },
    route: {
        check: function(cb){
            E.rpc.call_api('be', 'route', 'check', [], cb);
        },
        get_path: function(s, cb){
            E.rpc.call_api('be', 'route', 'get_path', [s], cb);
        },
        set_path: function(s, cb){
            E.rpc.call_api('be', 'route', 'set_path', [s], cb);
        },
    },
    plugin: {
        is_init_fail_and_cb: function(info, cb){
            if (E.runtime.last_error && E.runtime.last_error!='already inited')
            {
                cb(null);
                return 1;
            }
            if (info)
                E.plugin_info = info;
            return 0;
        },
        conf_conv: function(s, cb){
            E.rpc.call_api('be', 'plugin', 'conf_conv', [s], cb);
        },
        init: function(opt, cb){
            if (typeof opt=='function')
            {
                cb = opt;
                opt = {};
            }
            E.rpc.call_api('be', 'plugin', 'init', [opt], cb);
        },
        start: function(cb){
            E.rpc.call_api('be', 'plugin', 'init', [], function(info){
                if (E.be.plugin.is_init_fail_and_cb(info, cb))
                    return;
                E.rpc.call_api('be', 'plugin', 'start', [], cb);
            });
        },
        stop: function(cb){
            E.rpc.call_api('be', 'plugin', 'init', [], function(info){
                if (E.be.plugin.is_init_fail_and_cb(info, cb))
                    return;
                E.rpc.call_api('be', 'plugin', 'stop', [], cb);
            });
        },
        get_info: function(cb){
            E.rpc.call_api('be', 'plugin', 'init', [], function(info){
                if (E.be.plugin.is_init_fail_and_cb(info, cb))
                    return;
                E.rpc.call_api('be', 'plugin', 'get_info', [], cb);
            });
        },
        perr: function(opt, cb){
            E.rpc.call_api('be', 'plugin', 'init', [], function(info){
                if (E.be.plugin.is_init_fail_and_cb(info, cb))
                    return;
                E.rpc.call_api('be', 'plugin', 'perr', [opt], cb);
            });
        },
        exec: function(exe, args, cb){
            E.rpc.call_api('be', 'plugin', 'init', [], function(info){
                if (E.be.plugin.is_init_fail_and_cb(info, cb))
                    return;
                E.rpc.call_api('be', 'plugin', 'exec', [exe, args], cb);
            });
        },
	add_listener: function(cb){ E.rpc.add_listener('be', 'plugin', cb); },
	del_listener: function(cb){ E.rpc.del_listener('be', 'plugin', cb); },
        // state one of enabled/disabled/clicktoplay
        enabled_state: function(mime, state, cb){
            E.rpc.call_api('be', 'plugin', 'init', [], function(info){
                if (E.be.plugin.is_init_fail_and_cb(info, cb))
                    return;
                E.rpc.call_api('be', 'plugin', 'enabled_state', [mime, state],
                    cb);
            });
        },
    },
    reload_ext: function(){ E.rpc.call_api('be', '', 'reload_ext', []); },
    ccgi: {
	add_listener: function(cb){ E.rpc.add_listener('be', 'ccgi', cb); },
	del_listener: function(cb){ E.rpc.del_listener('be', 'ccgi', cb); },
        send: function(msg, target, cb){
            E.rpc.call_api('be', 'ccgi', 'send', [msg, target], cb); },
    },
    mem_info: function(opt, cb){
        E.rpc.call_api('be', '', 'mem_info', [opt], cb); },
    gen_uuid: function(cb){
        E.rpc.call_api('be', '', 'gen_uuid', [], cb); },
    download: function(opt, cb){
        E.rpc.call_api('be', '', 'download', [opt], cb); },
    md5sum: function(path, cb){
        E.rpc.call_api('be', '', 'md5sum', [path], cb); },
    getenv: function(name, cb){
        E.rpc.call_api('be', '', 'getenv', [name], cb); },
    sha1sum: function(path, cb){
        E.rpc.call_api('be', '', 'sha1sum', [path], cb); },
    file_size: function(path, cb){
        E.rpc.call_api('be', '', 'file_size', [path], cb); },
    reg: {
        init: function(cb){
            E.rpc.call_api('be', 'reg', 'init', [], cb); },
        const: function(cb){
            E.rpc.call_api('be', 'reg', 'const', [], cb); },
        get: function(opt, cb){
            E.rpc.call_api('be', 'reg', 'get', [opt], cb); },
        set: function(opt, cb){
            E.rpc.call_api('be', 'reg', 'set', [opt], cb); },
        del: function(opt, cb){
            E.rpc.call_api('be', 'reg', 'del', [opt], cb); },
    }
};
E.firefox = {
    panel: {
        resize: function(w, h, cb){
            E.rpc.call_api('firefox', 'panel', 'resize', [w, h], cb);
        },
        close: function(cb){
            E.rpc.call_api('firefox', 'panel', 'close', [], cb);
        },
        is_showing: function(cb){
            E.rpc.call_api('firefox', 'panel', 'is_showing', [], cb);
        },
    },
};
E.web_navigation = {
    on_before_navigate: {
        add_listener: function(cb){
            E.rpc.add_listener('webNavigation', 'onBeforeNavigate', cb); },
        del_listener: function(cb){
            E.rpc.del_listener('webNavigation', 'onBeforeNavigate', cb); },
    },
    on_completed: {
        add_listener: function(cb){
            E.rpc.add_listener('webNavigation', 'onCompleted', cb); },
        del_listener: function(cb){
            E.rpc.del_listener('webNavigation', 'onCompleted', cb); },
    },
    on_committed: {
        add_listener: function(cb){
            E.rpc.add_listener('webNavigation', 'onCommitted', cb); },
        del_listener: function(cb){
            E.rpc.del_listener('webNavigation', 'onCommitted', cb); },
    },
    on_error_occured: {
        add_listener: function(cb){
            E.rpc.add_listener('webNavigation', 'onErrorOccurred', cb); },
        del_listener: function(cb){
            E.rpc.del_listener('webNavigation', 'onErrorOccurred', cb); },
    }
};
E.web_request = {
    on_headers_received: {
        add_listener: function(cb, opt, extra){
            E.rpc.add_listener('webRequest', 'onHeadersReceived', cb, opt,
                extra);
        },
        del_listener: function(cb){
            E.rpc.del_listener('webRequest', 'onHeadersReceived', cb); },
    }
};
E.management = {
    get_all: function(cb){
        E.rpc.call_api('management', '', 'getAll', [], cb); },
    get: function(id, cb){
        E.rpc.call_api('management', '', 'get', [id], cb); },
};
E.cookies = {
    get: function(details, cb){
        E.rpc.call_api('cookies', '', 'get', [details], cb); },
};

/* XXX arik: add generic api */
function get_backbone_obj(id){
    /* XXX arik: need better way */
    var main = E.is_rmt ? bg.RMT : bg.be_bg_main;
    return main && main.be_browser.backbone.server.obj[id];
}

E.backbone = {client: {obj: {}}, server: {obj: {}, cb: {}}};
E.backbone.client.ping = function(id, ms, cb){
    if (!use_backbone_over_msg)
    {
	if (get_backbone_obj(id))
	    return setTimeout(function(){ cb({}); });
	setTimeout(function(){
	    var o = get_backbone_obj(id);
	    cb(o ? {} : {error: 'no_object'});
	}, ms);
	return;
    }
    E.rpc.call_api('backbone', 'server', 'ping', [id], cb, ms, cb);
};
E.backbone.client.start = function(id){
    zerr.debug('backbone.client.start '+id);
    if (!use_backbone_over_msg)
	return get_backbone_obj(id);
    var o = this.obj[id], _this = this;
    zerr.assert(!o, 'client '+id+' already started');
    /* XXX arik: overload set api so we throw exception on local change */
    o = this.obj[id] = new be_backbone.model();
    E.msg.on_backbone_event = function(info){ /* XXX arik: rm from here */
	var o = _this.obj[info.id];
        if (!o)
	    return;
	var ename = info.ename;
        if (string.contains(ename, 'change:'))
	{
	    var attr = ename.replace('change:', ''), val = info.args[0];
            o.set(attr, val);
	}
	else
            o.trigger(ename);
    };
    o.fcall = function(func, args){
        E.rpc.call_api('backbone.server.obj.'+id, 'fcall', func, args); };
    o.ecall = function(func, args){
        return etask([function(){
            return etask.cb_apply(E.rpc, '.call_api',
                ['backbone.server.obj.'+id, 'ecall', func, args]);
        }, function(ret){
            if (ret && ret._error)
                return etask.err(ret._error);
            return ret;
        }]);
    };
    E.rpc.call_api('backbone', 'server', 'connect', [id], function(ret){
	var o = _this.obj[id];
        if (!o)
	    return zerr('client %s got connected after stop', id);
        if (ret.error)
            return zerr('backbone.client.start error: '+ret.error);
        o.set(ret.attributes);
        o.set('_backbone_client_started', true);
    });
    return o;
};
E.backbone.client.stop = function(id){
    zerr.debug('backbone.client.stop '+id);
    /* XXX arik: handle cases where client.stop is not called */
    if (!use_backbone_over_msg)
	return;
    var o = this.obj[id];
    zerr.assert(o, 'client '+id+' not started');
    E.rpc.call_api('backbone', 'server', 'disconnect',
        [id, o.get('_backbone_client_id')]);
    o._destroy();
    delete this.obj[id];
};
E.backbone.server.start = function(obj, id){
    zerr.debug('backbone.server.start '+id+' cid '+obj.cid);
    zerr.assert(!this.obj[id], 'server '+id+' already started');
    this.obj[id] = obj;
};
E.backbone.server.stop = function(id){
    zerr.debug('backbone.server.stop '+id);
    var o = this.obj[id];
    zerr.assert(o, 'server '+id+' not started');
    delete this.obj[id];
};

E.tabid2api = function(tabid){
    if (chrome && typeof tabid=='string')
	tabid = +tabid;
    return tabid;
};

return E; });
