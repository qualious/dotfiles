// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/svc/pub/be_util.js', '/util/zerr.js', '/svc/pub/be_browser.js',
    '/svc/pub/be_lib.js', '/util/escape.js', '/util/version_util.js',
    '/util/string.js', 'be_config', 'bootstrap', '/util/storage.js',
    'jquery_cookie'],
    function($, _, be_backbone, etask, be_util, zerr, B, be_lib, zescape,
    version_util, string, be_config, bootstrap, storage){
B.assert_bg('be_bg_main');
zerr.set_exception_handler('be', be_lib.err);
var chrome = window.chrome, conf = window.conf, zon_config = window.zon_config;
var browser = be_util.browser();
var local_ccgi_chrome = !!chrome && browser!='torch' && browser!='opera';

var E = new (be_backbone.model.extend({
    _defaults: function(){
	this.on('install', on_install);
	this.on('update', on_update);
	this.on('up', on_up);
	this.on('destroy', function(){ E.uninit(); });
    },
}))();

E.be_util = be_util;
E.zerr = window.hola.zerr = zerr;
E.be_browser = B;
E.be_lib = be_lib;

function on_install(){
    storage.set('install_ts', window.hola.t.l_start);
    E.set('ext.first_run', true);
    be_lib.ok('install');
}
function on_update(prev){
    /* XXX arik BACKWARD: < 1.2.346 used storage_local api to save
     * enabled/disabled state */
    if (version_util.version_valid(prev) &&
	version_util.version_cmp(prev, '1.2.346')<0)
    {
	etask([function(){ return be_lib.storage_local_get({enabled: true});
	}, function(e){ return E.set_enabled(!!e.enabled); }]);
    }
    be_lib.ok('update', prev+' > '+be_util.version());
}
function on_up(){
    be_lib.ok('up');
    if (chrome)
        return;
    etask([function(){ return be_lib.storage_local_get({be_disabled: false});
    }, function(ret){
        if (!ret.be_disabled)
            return;
	be_lib.ok(be_util.is_plugin() ? 'be_plugin_enable' : 'be_ext_enable');
        return be_lib.storage_local_remove('be_disabled');
    }, function catch$(err){ zerr('on_up err: '+err); }]);
}

function ccgi_resp(msg, sender){
    _.defer(B.be.ccgi.send, msg, sender);
    return true;
}

function ccgi_ipc_handler(msg, sender){
    if (msg.id!='ping')
	return;
    msg.data = {
	uuid: E.get('uuid'),
	session_key: E.get('session_key')||0,
	ver: be_util.version(),
	type: conf.type,
	cid: E.get('svc.cid'),
	browser: E.get('browser'),
        plugin: E.get('mode')==='dll',
        build_info: {browser_build: window.conf.browser.name}
    };
    return ccgi_resp(msg, sender);
}

function ccgi_init(){
    B.be.ccgi.add_listener(ccgi_ipc_handler);
    if (!chrome)
        return;
    // attach to existing hola tabs
    B.tabs.query({url: conf.hola_match}, function(tabs){
        _.each(tabs, function(tab){
            B.tabs.execute_script(tab.id, {file: 'js/cs_hola.js',
                runAt: 'document_start'});
        });
    });
}

function ccgi_uninit(){ B.be.ccgi.del_listener(ccgi_ipc_handler); }

E.on_ccgi_url_change = _.debounce(function(){
    var qs = {browser: E.get('browser'), ver: be_util.version(),
        plugin: +(E.get('mode')==='dll')||undefined, uuid: E.get('uuid')};
    var proto = be_util.get_proto();
    var ccgi_url_new = proto+'://hola.org/access/my/settings'
        +'?utm_source=holaext&'+zescape.qs(qs);
    E.set('ccgi_url', ccgi_url_new);
});

function get_uuid(){
    return etask({name: 'get_uuid', cancel: true}, [function(){
        return etask.all({allow_fail: true}, {
            sync: chrome && be_lib.storage_sync_get('uuid'),
            local: be_lib.storage_local_get('uuid'),
            localStorage:
                etask([function(){ return localStorage.getItem('uuid'); }]),
            cookie: etask([function(){ return $.cookie('uuid'); }]),
            ccgi: !chrome && etask.cb_apply(B.cookies, '.get',
                [{url: conf.url_ccgi, name: 'uuid'}]),
        });
    }, function(ret){
        get_uuid.last_error = collect_errors(ret);
        var uuid = (ret.local && ret.local.uuid) || ret.localStorage ||
            ret.cookie || (ret.ccgi && ret.ccgi.value);
        return ensure_uniq_uuid(ret.sync && ret.sync.uuid, uuid);
    }, function catch$(err){
        be_lib.perr_err({id: 'unreachable', info: 'get_uuid', err: err});
    }]);
}

// versions < 1.6.644 used to save uuid in chrome.storage.sync so signed-in
// users would have same uuid on all their devices.
// this is meant to generate new uuid in these cases
function ensure_uniq_uuid(syncd, uuid){
    if (!syncd) // nothing syncd, no problem
        return uuid;
    if (!uuid)
    {
        // there is a syncd uuid that is not stored locally, so we generate a
        // new one
        E.set('sync_uuid', syncd);
        return null;
    }
    if (syncd!=uuid) // we already broke conflict
        return uuid;
    return etask({name: 'ensure_uniq_uuid', cancel: true}, [function(){
        return etask.all({allow_fail: true}, {
            sync: be_lib.storage_sync_get('uuid2'),
            local: be_lib.storage_local_get('uuid2'),
            localStorage:
                etask([function(){ return localStorage.getItem('uuid2'); }]),
            gen: E.gen_uuid(),
        });
    }, function(ret){
        var uuid2 = (ret.local && ret.local.uuid2) || ret.localStorage ||
            ret.gen;
        var syncd2 = ret.sync && ret.sync.uuid2;
        if (syncd2==uuid2) // we already own the syncd uuid
            return uuid;
        persist_uuid2(uuid2);
        if (!syncd2) // syncd uuid is not taken, so we take ownership
        {
            be_lib.storage_sync_set({uuid2: uuid2});
            return uuid;
        }
        // syncd uuid is already taken so we need to generate new one
        E.set('sync_uuid', uuid);
        return null;
    }]);
}

function persist_uuid(uuid){
    return etask({name: 'persist_uuid'}, [function(){
        return etask.all({allow_fail: true}, {
            local: be_lib.storage_local_set({uuid: uuid}),
            localStorage:
                etask([function(){ localStorage.setItem('uuid', uuid); }]),
            cookie: etask([function(){
                $.cookie('uuid', uuid, {expires: 365, path: '/'}); }]),
        });
    }, function(ret){
        persist_uuid.last_error = collect_errors(ret);
        return _.isEmpty(ret);
    }, function catch$(err){
        be_lib.perr_err({id: 'unreachable', info: 'persist_uuid', err: err});
    }]);
}

function persist_uuid2(uuid2){
    return etask.all({allow_fail: true}, {
        local: be_lib.storage_local_set({uuid2: uuid2}),
        localStorage:
            etask([function(){ localStorage.setItem('uuid2', uuid2); }]),
    });
}

function collect_errors(ret){
    var arr = [];
    _.each(ret, function(v, k){
        if (!etask.is_err(v))
            return;
        delete ret[k];
        var e = {};
        e[k] = ''+v.error;
        arr.push(e);
    });
    return arr;
}

E.gen_uuid = function(){
    if (!window.crypto || !window.crypto.getRandomValues)
    {
        // FF v<21 missing this function, we use uuid generated by addon
        return etask.cb_apply(B.be, '.gen_uuid', []);
    }
    var buf = new Uint8Array(16), uuid = '';
    window.crypto.getRandomValues(buf);
    for (var i=0; i<buf.length; i++)
        uuid += (buf[i]<=0xf ? '0' : '')+buf[i].toString(16);
    return uuid;
};

function ensure_uuid(){
    var uuid;
    return etask({name: 'ensure_uuid', cancel: true}, [function(){
	return get_uuid();
    }, function(_uuid){
        if (_uuid)
        {
            E.sp.spawn(persist_uuid(_uuid));
            return this.ereturn(_uuid);
        }
        E.set('new_uuid', true);
        return E.gen_uuid();
    }, function(_uuid){
        zerr.assert(_uuid, 'gen_uuid() returned: '+_uuid);
        return persist_uuid(uuid = _uuid);
    }, function(ret){
        if (!ret)
            return uuid;
        // could not persist a new uuid, consider it temporary
        uuid = 't.'+uuid.substr(2);
        be_lib.perr_err({id: 'init_tmp_uuid'}); // XXX bahaa: info
        return uuid;
    }]);
}

function handle_install(){
    return etask({name: 'handle_install', cancel: true}, [function(){
        return etask.cb_apply(B.runtime, '.get_install_details', []);
    }, function(details){
        var reason = details&&details.reason;
        zerr.notice('be_bg_main up reason: '+reason);
        if (E.get('new_uuid') && reason!=='install')
            be_lib.perr_err({id: 'switch_uuid_err'}); // XXX bahaa: info
        if (E.get('sync_uuid'))
        {
            be_lib.perr_err({id: 'switch_sync_uuid',
                info: {uuid: E.get('sync_uuid'), reason: reason}});
        }
        if (!{install: 1, update: 1}[reason])
            return;
        E.set('install_details', reason); // XXX bahaa: actually install_reason
        E.trigger(reason, storage.get('ver'));
        storage.set('ver', be_util.version());
    }, function catch$(err){
        be_lib.perr_err({id: 'handle_install_err', err: err});
    }]);
}

E.uninstall_url_cb = function(){
    var url = conf.url_ccgi+'/uninstall?'+zescape.qs({perr: 1,
	uuid: E.get('uuid'), cid: E.get('svc.cid'), browser: E.get('browser'),
        version: be_util.version(), plugin: +!!be_util.is_plugin()});
    url = url.substr(0, 255); /* max uninstall url is 255 chars */
    B.runtime.set_uninstall_url(url);
};

// XXX colin: change all etask to have name and cancel if possible
E.init = function(){
    if (E.inited)
	return;
    E.set_perr(function(opt){ be_lib.perr_err(opt); });
    E.inited = true;
    E.sp = etask('be_bg_main', [function(){ return this.wait(); }]);
    /* XXX arik: rm all unload from the code, instead listen to
     * change:reload */
    $(window).unload(function(){ E._destroy(); });
    B.init();
    ccgi_init();
    B.backbone.server.start(E, 'be_bg_main');
    storage.clr('ajax_timeout');
    if (storage.get('ext_slave'))
    {
	E.set('ext.slave', true);
        storage.clr('ext_slave');
    }
    zerr.notice('be_bg_main_init');
    E.on('change:inited', inited_cb);
    E.on_init('change:ext.slave', E.on_slave_change);
    E.set('browser', browser);
    E.on_init('change:browser change:uuid change:use_http change:mode',
        E.on_ccgi_url_change);
    if (B.have['runtime.set_uninstall_url'])
        E.on_init('change:uuid change:cid change:browser', E.uninstall_url_cb);
    E.sp.spawn(etask([function(){ return ensure_uuid();
    }, function(uuid){
        zerr.notice('uuid: '+uuid);
        E.set('uuid', uuid);
        return handle_install();
    }, function(e){
	E.trigger('up');
	E.set('inited', true);
    }, function catch$(err){ be_lib.err('init2_err', null, err);
    }, function ensure$(){
        var get = get_uuid.last_error||[];
        var set = persist_uuid.last_error||[];
        if (!get.length && !set.length)
            return;
        be_lib.perr_err({id: 'uuid_storage_err',
            info: zerr.json({get: get, set: set})});
    }]));
};

E.uninit = function(){
    if (!E.inited)
	return;
    E.sp.ereturn();
    B.backbone.server.stop('be_bg_main');
    ccgi_uninit();
    B._destroy();
    E.inited = false;
};

var icon = {
    gray: {'19': 'img/icon19_gray.png', '38': 'img/icon38_gray.png'},
    blank: {'19': 'img/icon19_blank.png', '38': 'img/icon38_blank.png'},
};

E.on_slave_change = function(){
    try {
        var slave = E.get('ext.slave');
        B.browser_action[slave ? 'disable' : 'enable']();
        B.browser_action.set_popup(
            {popup: slave ? '' : conf.default_popup});
        if (slave || !E.get('popup.disable_icon'))
        {
            B.browser_action.set_icon(
                {path: icon[slave ? 'blank' : 'gray']});
            if (slave)
                B.browser_action.set_title({title: ''});
        }
    } catch(e){
        be_lib.perr_err({id: 'set_icon_err', rate_limit: {count: 1}}, e); }
};

function inited_cb(){
    if (!E.get('inited'))
	return;
    E.off('change:inited', inited_cb);
    etask([function(){ return storage.get('ext_state');
    }, function(state){ E.set('enabled', state!=='disabled');
    }, function(){ return E.load_rmt();
    }, function catch$(err){ be_lib.err('be_bg_main_init_err', '', err); }]);
}

E.ok = function(id, info){ return be_lib.ok(id, info); };
E.err = function(id, info, err){ return be_lib.err(id, info, err); };

E.set_enabled = function(on){
    if (!!E.get('enabled')==!!on)
	return;
    return etask([function(){
	E.set('enabled', !!on);
        return storage.set('ext_state', on ? 'enabled' : 'disabled');
    }, function catch$(err){
	be_lib.err('be_bg_main_set_enable_err', null, err);
    }]);
};

function load_config(be_ver){
    define('be_ver', function(){ return be_ver; });
    require.config({baseUrl: conf.url_bext, waitSeconds: 30,
        urlArgs: 'ext_ver='+be_util.version()+'&ver='+be_ver.ver});
    require(['be_config'], function(_be_config){
        _be_config.init(be_ver.ver, be_ver.country);
        require(['/svc/pub/be_rmt_ext.js'], function(be_rmt){
            if (E.get('rmt_loaded'))
                return;
            E.set('rmt_loaded', true);
            window.RMT = be_rmt;
            window.RMT.init();
        });
    });
}

// XXX arik: review
E.load_local = function(){
    window.is_local_ccgi = true;
    var be_ver = {ver: zon_config.ZON_VERSION};
    be_config.undef();
    window.require_is_remote = true; /* XXX arik: try to rm/rename */
    require.config({baseUrl: '/ccgi/'});
    define('be_ver', function(){ return be_ver; });
    require(['be_config'], function(_be_config){
        _be_config.init(be_ver.ver);
        require(['/svc/pub/be_rmt_ext.js'], function(be_rmt){
            if (E.get('rmt_loaded'))
                return;
            E.set('rmt_loaded', true);
            window.RMT = be_rmt;
            window.RMT.init();
        });
    });
};

// XXX arik: renam to load_ccgi
E.load_rmt = function(){
    if (!E.get('inited') || E.get('rmt_loaded'))
	return;
    window.no_chrome_mp = chrome && (
        (browser=='chrome' && !zon_config.CONFIG_MP_CHROME)
        || (browser=='torch' && !zon_config.CONFIG_MP_TORCH)
        || (browser=='opera' && !zon_config.CONFIG_MP_OPERA));
    if (zon_config.CONFIG_LOCAL_CCGI_CHROME && local_ccgi_chrome)
        return E.load_local();
    be_config.undef();
    // XXX arik: rename is_remote to is_ccgi
    window.require_is_remote = true; /* XXX arik hack: find better way */
    var be_ver = storage.get_json('be_ver_json');
    var on_ver_load;
    var no_cache_require = require.config({context: 'no_cache',
        baseUrl: conf.url_bext, waitSeconds: 30,
        urlArgs: 'ext_ver='+be_util.version()+'&rand='+Math.random()});
    // XXX alexeym: replace with ajax request
    no_cache_require.undef('be_ver');
    no_cache_require(['be_ver'], function(_be_ver){
        storage.set_json('be_ver_json', _be_ver);
        if (be_ver && be_ver.ver!==_be_ver.ver)
            return void be_lib.reload_ext();
        be_ver = _be_ver;
        if (on_ver_load)
            on_ver_load(be_ver);
    });
    if (be_ver)
        return void load_config(be_ver);
    on_ver_load = load_config;
};

E.get_rmt_config = function(){
    return window.RMT && window.RMT.be_config && window.RMT.be_config.config;
};

E.open_ccgi = function(opt){
    return be_lib.open_ccgi(_.extend({ccgi_url: E.get('ccgi_url')}, opt)); };

var F = E.flags = {
    DEV: 0x40,
    REL1: 0x80,
    NO_UPDATE: 0x200,
    TMP_UUID: 0x400,
    PLUGIN: 0x8000,
    TORCH: 0x20000,
    APK_ANDROID: 0x40000,
};
function lset(bits, logic){ return logic ? bits : 0; }

E.get_flags = function(){
    var manifest = chrome && B.runtime.manifest;
    return lset(F.PLUGIN, E.get('plugin.enabled') || be_util.is_plugin())|
	lset(F.TMP_UUID, string.startsWith(E.get('uuid')||'', 't.'))|
        lset(F.TORCH, E.get('browser')=='torch')|lset(F.DEV,
            !zon_config._RELEASE)|lset(F.REL1, zon_config._RELEASE_LEVEL===1)|
        lset(F.NO_UPDATE, manifest && !manifest.update_url);
};

return E; });
