// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/svc/pub/be_browser.js', '/util/zerr.js', '/svc/pub/be_util.js',
    '/svc/pub/be_lib.js', '/util/version_util.js', '/util/escape.js',
    '/util/string.js', '/util/util.js', '/util/storage.js'],
    function($, _, be_backbone, etask, B, zerr, be_util, be_lib, version_util,
    zescape, string, zutil, storage){
B.assert_bg('be_ext');
var chrome = window.chrome, conf = window.conf;
var be_bg_main = window.be_bg_main; /* XXX arik: rm and use require */
var E = new (be_backbone.model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_ext');
	    uninit();
	});
	B.backbone.server.start(this, 'be_ext');
    },
    mem_monitor: {},
}))();

E.mem_monitor.init = function(){
    if (!B.have['be.mem_info'])
        return;
    var MB = 1024*1024, SEC = 1000, limit = 100*MB, sleep = SEC;
    E.sp.spawn(etask({name: 'mem_monitor.init', cancel: true},
    [function loop(){
        E.mem_monitor.monitor = this;
        return etask.cb_apply(B.be, '.mem_info', [{verbose_above: limit}]);
    }, function(r){
        if (!r || B.runtime.last_error)
            throw new Error(B.runtime.last_error||'empty result');
        if (!r.total) /* memory reporting is not supported, stop trying */
            return E.mem_monitor.uninit();
        if (r.total<limit)
            return;
        limit = r.total*2;
        return be_lib.perr(zerr.L.NOTICE, {id: 'mem_high', info: r.total,
            filehead: JSON.stringify(r)});
    }, function catch$(e){ zerr('mem_monitor_err %s', e.stack||e);
    }, function(){
        var s = etask.sleep(sleep);
        sleep = Math.min(2*sleep, 60*SEC);
        return this.egoto('loop', s);
    }]));
};

E.mem_monitor.uninit = function(){
    if (this.monitor)
    {
        this.monitor.ereturn();
        this.monitor = null;
    }
};

E.init = function(){
    if (E.get('inited'))
	return;
    E.sp = etask('be_ext', [function(){ return this.wait(); }]);
    E.set('inited', true);
    E.set_perr(function(opt){ be_lib.perr_err(opt); });
    bg_main_to_ext_init();
    ext_init();
    vpn_init();
    E.mem_monitor.init();
};

E._set = function(key, val){
    return be_bg_main.set.apply(be_bg_main, arguments); };

function uninit(){
    if (!E.get('inited'))
	return;
    E.sp.ereturn();
    bg_main_to_ext_uninit();
    E.mem_monitor.uninit();
}

var bb_keys = zutil.bool_lookup('uuid browser session_key enabled ccgi_url '
    +'cid plugin.version sync_uuid '
    +'plugin.running status.unblocker.effective_pac_url use_http ext.slave '
    +'settings_scope ext.conflict '
    +'install_details proxy.effective.control_level '
    +'info agent_key');
function bg_main_to_ext_init(){
    var change = {};
    _.each(bb_keys, function(v, k){ change[k] = be_bg_main.get(k); });
    E.safe_set(change);
    change = {};
    function commit_change(){
        if (_.isEmpty(change))
            return;
        var t = change;
        change = {};
        E.safe_set(t);
    }
    be_bg_main.on('all', function(key){
        if (key==='change')
            return commit_change();
        if (!string.startsWith(key, 'change:'))
            return;
        key = key.substr(7); /* 'change:'.length */
        if (!bb_keys[key])
            return;
        change[key] = be_bg_main.get(key);
    });
    E.on_init('change:enabled', function(){
        E.set('state', E.get('enabled') ? 'on' : 'off'); });
    if (version_util.version_cmp(be_util.version(), '1.1.699')<0)
	E.set('ext.slave', false);
}

function bg_main_to_ext_uninit(){ E.stopListening(); }

function ext_init(){
    // XXX bahaa: auth.* abstraction is not needed anymore
    E.on_init('change:uuid change:session_key', function(){
	var id = E.get('uuid'), key = E.get('session_key');
        var stamp = E.get('auth.stamp')||0;
        var change = {'auth.id': id, 'auth.key': key}, diff;
        if (!(diff = E.changedAttributes(change)))
            return;
        diff['auth.stamp'] = stamp+1;
        E.safe_set(diff);
    });
    E.on('change:metro', function(){
        if (E.get('metro'))
            be_lib.ok('metro');
    });
    E.on_init('change:ext.conflict', function(){
        if (E.get('ext.conflict'))
            be_lib.perr_err({id: 'be_ext_conflict'});
    });
    E.on('change:use_http', function(){
        var http = E.get('use_http');
	conf.url_ccgi = conf.url_ccgi.replace(
            http ? /^https:\/\// : /^http:\/\//,
            http ? 'http://' : 'https://');
    });
    // Local code of old extensions still uses be_ext for "mode" info
    if (version_util.version_cmp(be_util.version(), '1.5.720')<0)
    {
        E.listen_to(be_bg_main,
            'change:plugin.enabled change:svc.version '
            +'change:mode change:svc.cid', function(){
            E.set({
                'cid': be_bg_main.get('svc.cid'),
                'plugin.enabled': be_bg_main.get('plugin.enabled'),
                'plugin.version': be_bg_main.get('mode')==='dll' ?
                    be_bg_main.get('svc.version') : undefined,
                'plugin.cid': be_bg_main.get('mode')==='dll' ?
                    be_bg_main.get('svc.cid') : undefined,
                'exe.version': be_bg_main.get('svc.version'),
                'exe.is_plugin': be_bg_main.get('mode')==='dll',
                'svc.info': be_bg_main.get('svc.info'),
                'svc_mode': be_bg_main.get('mode'),
            });
        });
    }
}

function vpn_init(){
    E.on_init('change:session_key change:state change:ext.conflict '+
	'change:ext.slave change:uuid', function(){
	var vpn_on, vpn_enabled, ext_enabled;
	if (E.get('ext.slave')||E.get('ext.conflict'))
	    vpn_on = vpn_enabled = ext_enabled = false;
	else
	{
	    vpn_enabled = ext_enabled = E.get('state')==='on';
	    vpn_on = ext_enabled && E.get('uuid') && E.get('session_key');
	}
        E.safe_set({'r.vpn.on': !!vpn_on, 'r.vpn.enabled': !!vpn_enabled,
            'r.ext.enabled': !!ext_enabled});
    });
}

E.set_enabled = function(on){
    try {
	on = !!on;
        // XXX amir: do we need this condition
	if (be_bg_main)
	    be_bg_main.set_enabled(on);
	if (!!E.get('r.ext.enabled')!=on)
	{
	    var attributes = _.clone(E.attributes);
	    delete attributes['status.unblocker.effective_pac_url'];
	    be_lib.perr_err({id: 'be_set_enabled_mismatch',
		info: {on: on, attributes: attributes}});
	}
    } catch(e){
	be_lib.perr_err({id: 'be_set_enabled_err', err: e});
	throw e;
    }
};

E.qs_ver_str = function(){ return "ver="+E.get('rmt_ver'); };

E.qs_ajax = function(o){
    var info = {rmt_ver: E.get('rmt_ver'), ext_ver: be_util.version(),
        browser: E.get('browser'), product: be_util.get_product(),
        lccgi: +!!window.is_local_ccgi};
    $.extend(info, o);
    return info;
};

E.auth = function(o){
    var info = E.qs_ajax();
    if (be_bg_main.get('is_svc')) /* XXX bahaa: needed? */
        info.svc_ver = be_bg_main.get('svc.version');
    info.uuid = E.get('auth.id');
    info.session_key = E.get('auth.key')||0;
    return $.extend(info, o);
};

/* XXX arik: change to opt */
E.open_ccgi = function(host, hash){
    return be_lib.open_ccgi({ccgi_url: E.get('ccgi_url'), host: host,
        hash: hash});
};

return E; });
