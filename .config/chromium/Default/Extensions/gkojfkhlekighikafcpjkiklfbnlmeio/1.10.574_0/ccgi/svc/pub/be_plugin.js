// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/util/zerr.js', '/svc/pub/be_util.js', '/svc/pub/be_browser.js',
    '/util/date.js', '/util/array.js', '/svc/pub/be_lib.js',
    '/util/storage.js', '/util/escape.js', '/util/ajax.js',
    '/util/version_util.js', 'be_ver', '/util/rate_limit.js',
    '/svc/pub/be_svc.js', '/util/hash.js', '/svc/mp/pub/www_storage.js'],
    function($, _, be_backbone, etask, zerr, be_util, B, date, array, be_lib,
    storage, zescape, ajax, version_util, be_ver, rate_limit, be_svc, hash,
    www_storage){
B.assert_bg('be_plugin');
var chrome = window.chrome, conf = window.conf, zconf = window.zon_config;
var E = new be_backbone.model();
var be_bg_main;

function dll_crashed(info){
    if (E.get('dll_crashed'))
        return;
    try { be_lib.err('dll_crashed', info); } catch(e){}
    E.set('dll_crashed', true);
}

function _plugin_event_cb(e, ret){
    zerr.notice('plugin event: %s ret: %s', e, ret);
    switch (e)
    {
    case 'inited':
	if (E.get('pid') && E.get('pid')!==ret)
	{
            dll_crashed('expected pid: '+E.get('pid')+' got: '+ret);
	    break;
	}
	E.set('pid', ret);
	if (E.get('inited'))
	    break;
	E.set('inited', true);
	E.sp.spawn(etask([function(){
	    if (!zp_ok())
                dll_crashed(E.dll_err);
	    return this.eloop(etask.sleep(30*date.ms.SEC));
	}]));
	break;
    case 'uninited': dll_crashed('uninited'); break;
    case 'started':
        E.set({slave: false, 'ret.start': ret, running: ret>0});
        break;
    case 'started_slave':
        E.set({slave: true, 'ret.start': ret, running: true});
	break;
    case 'exist_link': E.set('ret.exist_link', !!ret); break;
    case 'create_link': E.set('ret.create_link', ret); break;
    case 'add_fw': E.set('ret.add_fw_rules', ret); break;
    case 'kill': E.set('ret.kill', ret); break;
    case 'stopped': E.set({'ret.stop': ret, running: false}); break;
    case 'enabled': break;
    default: zerr('unexpected plugin event: %s, ret: %s', e, ret);
    }
}

function plugin_event_cb(e, ret){
    // defer handling and return immediately since this is sometims called
    // by dll while mutex held
    var _e = e, _ret = ret;
    E.sp.spawn(etask([function(){ return etask.sleep(1);
    }, function(){ _plugin_event_cb(_e, _ret); }]));
}

function firefox_listener(e){
    zerr.notice('plugin event:', zerr.json(e));
    if (e.stopped)
        E.set('running', false);
    else
        zerr('unknown plugin event:', JSON.stringify(e));
}

function cb_apply(){ // XXX bahaa: move to B
    var args = arguments;
    return etask([function(){ return etask.cb_apply.apply(etask, args);
    }, function(ret){
        var err = B.runtime.last_error;
        if (!err)
            return ret;
        if (typeof err!=='string') // XXX bahaa hack: review
            err.toString = function(){ return err.message; };
        return etask.err(err);
    }]);
}

function validate_plugin(info, version){
    return !info.exists ? 'plugin doesn\'t exist' :
        !info.executable ? 'plugin not executable' :
        version && info.version!=version ?
        'version old '+info.version+' < '+version : null;
}

function setup_url(info, version){
    var os = info.os, x64 = info.x64;
    var url = os=='winnt' ? conf.url_site+'/hola_setup' : null;
    if (!url)
        throw new Error('unsupported platform os: '+os+' x64: '+x64);
    return zescape.uri(url, {cors_ff: 1, arch: x64 ? 'x64' : undefined,
        dev_key: conf.dev_key||undefined, ver: version,
    });
}

function validate_setup(version, filename, len, sha1, perr){
    if (!E.have_sz_sha1_validation)
    {
        return etask([function(){
            return cb_apply(B.be.plugin, '.get_info', []);
        }, function(e){
            var basic = !e.setup_exists ? 'setup doesnt exist' :
                !e.setup_executable ? 'setup not executable' :
                version && e.setup_version!=version ?
                'version old '+e.setup_version : null;
            if (basic && perr)
                be_lib.perr(zerr.L.ERR, {id: 'setup_invalid', info: filename});
            return basic;
        }]);
    }
    return etask([function(){
        return cb_apply(B.be, '.file_size', [filename]);
    }, function(e){
        var _len = e;
        if (_len==-1)
        {
            if (perr)
            {
                be_lib.perr(zerr.L.ERR, {id: 'setup_not_found',
                    info: filename});
            }
            return this.ereturn('setup not found');
        }
        if (_len!=len)
        {
            if (perr)
            {
                be_lib.perr(zerr.L.ERR,
                    {id: 'setup_invalid_sz_'+(_len>len ? 'big' : 'small'),
                    info: {file: filename, actual: _len, expected: len}});
            }
            return this.ereturn('setup invalid size '+
                (_len>len ? 'big' : 'small'));
        }
        return cb_apply(B.be, '.sha1sum', [filename]);
    }, function(e){
        var _sha1 = e;
        if (_sha1!=sha1)
        {
            if (perr)
            {
                be_lib.perr(zerr.L.ERR, {id: 'setup_invalid_sha1',
                    info: {file: filename, actual: _sha1, expected: sha1}});
            }
            return this.ereturn('setup invalid sha1');
        }
        return null;
    }]);
}

function do_download_setup(url, info, path, exe, version, force){
    var xhr, len, sha1, filename = path+'\\'+exe;
    return etask([function try_catch$(){
        zerr.notice('validating download url '+url);
	return xhr = $.ajax({type: 'HEAD', url: url+'?cors_ff=2',
	    timeout: 20*date.ms.SEC});
    }, function(e){
        if (xhr.status==200 && (len=xhr.getResponseHeader('Content-Length')) &&
            +len>0)
        {
            return;
        }
        return this.ethrow('validate download invalid response '+url+' '+
            xhr.status+' '+len);
    }, function try_catch$(e){
	return xhr = $.ajax({type: 'GET', url: url+'.sha1?cors_ff=2',
	    timeout: 20*date.ms.SEC});
    }, function(e){
        if (this.error)
        {
            return this.ethrow('validate download failed sha1 '+url+'.sha1 '+
                xhr.status);
        }
        sha1 = hash.sum_parse(e);
        if (!sha1 || sha1.file!=exe)
        {
            return this.ethrow('validate download invalid response '+url+
                ' ('+e.substr(0, 100)+')');
        }
        if (force)
            return 'force';
        return validate_setup(version, filename, len, sha1.hash, false);
    }, function(e){
        if (!e)
            return this.ereturn(true);
        zerr.notice('downloading setup from '+url+' '+e);
        return cb_apply(B.be, '.download', [{url: url+'?cors_ff=2', path: path,
            file: exe, permissions: info.os=='winnt' ? '0744' : '0544'}]);
    }, function try_catch$(e){
        return be_lib.storage_local_set({setup_version: version,
            setup_exe: exe});
    }, function(e){
        return validate_setup(version, filename, len, sha1.hash, true);
    }, function(e){
        if (e)
            return this.ethrow(e);
        zerr.notice('setup saved to '+filename+' '+len+' '+sha1.hash);
        return false;
    }]);
}

function download_setup(info, version, force){
    var ts = Date.now(), link;
    var url = setup_url(info, version);
    var path;
    zerr.notice('get setup download link from '+url);
    return etask([function try_catch$(){
        return ajax.json({type: 'GET', url: url, retry: 2});
    }, function try_catch$(e){
        link = e;
        if (this.error || !link || !link.url || !link.exe)
            return this.ethrow('invalid response or no url/exe '+this.error);
        version = link.version;
        url = link.url;
        return do_download_setup(url, info, info.tmp_path, link.exe, version,
            force);
    }, function(e){
        if (!this.error)
            return e;
        if (!link || !link.url2)
            return this.ethrow(this.error);
        url = link.url2;
        return do_download_setup(url, info, info.tmp_path, link.exe, version,
            force);
    }, function catch$(err){
        be_lib.perr_err({id: 'setup_download_err', err: err,
            filehead: zerr.json({url: url, path: info.tmp_path,
            file: link&&link.exe, time: (Date.now()-ts)+'ms'})});
        return this.ereturn(etask.err('be.download: '+err));
    }, function(e){
        be_lib.ok('setup_download_'+(e ? 'valid' : 'ok'),
            url+' '+(Date.now()-ts)+'ms');
        return cb_apply(B.be.plugin, '.get_info', []);
    }, function catch$(err){
        return this.ereturn(etask.err('plugin.get_info: '+err));
    }]);
}

var new_p;
function firefox_init(plugin_ver){
    E.have_sz_sha1_validation = B.have['be.file_size'] && B.have['be.sha1sum'];
    var retry = false;
    return etask([function try_catch$(){
        B.be.plugin.add_listener(firefox_listener);
        if ((version_util.version_cmp(be_util.version(), '1.9.600')<0)
            || !new_p)
        {
            return this.egoto('init');
        }
        return cb_apply(B.be.plugin, '.init', [{mode: '_detect_serv',
            type: 'full_path', name: 'proto', ver_s: 'conversion structreader '
            +'or ver '+plugin_ver}]);
    }, function try_catch$(){
        return ajax.json({type: 'GET',
            url: conf.url_ccgi+'/update_route.json'});
    }, function try_catch$(res){
        if (this.error)
            return this.egoto('init');
        return cb_apply(B.be.route, '.get_path', [res.data]);
    }, function try_catch$(){
        if (this.error)
            return this.egoto('init');
        return cb_apply(B.be.unblocker, '.parse_obj', [{}]);
    }, function try_catch$init(){
        return cb_apply(B.be.plugin, '.init', []);
    }, function(e){
        if (this.error && this.error!='already inited')
            return this.ereturn(etask.err('plugin.init: '+this.error));
        E.plugin_info = this.error ? B.plugin_info : e;
        if (!E.plugin_info)
        {
            be_lib.perr_err({id: 'firefox_init_dbg', info:
                {'B.plugin_info': B.plugin_info, err: this.error, e: e},
                err: 'missing plugin_info'});
            return this.ereturn(etask.err('plugin.init: missing plugin_info'));
        }
        if (!(e = validate_plugin(E.plugin_info, plugin_ver)))
            return this.ereturn();
        zerr.notice(e);
    }, function download(){
        return download_setup(E.plugin_info, plugin_ver, retry);
    }, function try_catch$(e){
        E.plugin_info = e;
        if (!E.plugin_info.setup_exec)
            return this.ethrow('missing setup exec');
        return cb_apply(B.be.plugin, '.exec', [E.plugin_info.setup_exec,
            ['--silent', '--plugin', 'firefox', '--no-rmt-conf']]);
    }, function try_catch$(e){
        if (this.error)
        {
            if (!retry)
            {
                retry = true;
                return this.egoto('download');
            }
            return this.ereturn(etask.err('plugin.exec: '+this.error));
        }
        be_lib.ok('setup_install_ok', E.plugin_info.setup_exe);
        if (plugin_ver)
            return be_lib.storage_local_set({svc_version: plugin_ver});
    }, function try_catch$(){
        // re-scan available plugins and enable in case installer
        // installed/updated a plugin
        navigator.plugins.refresh(false);
        if (B.have['be.plugin.enabled_state'])
        {
            return cb_apply(B.be.plugin, '.enabled_state',
                ['application/x-hola-vlc-plugin', 'enabled']);
        }
    }, function(){
        if (this.error)
            be_lib.perr_err({id: 'be_enable_vlc_plugin_err', err: this.error});
        return cb_apply(B.be.plugin, '.get_info', []);
    }, function(e){
        if (this.error)
            return this.ereturn(etask.err('plugin.get_info: '+this.error));
        E.plugin_info = e;
        if (!(e = validate_plugin(E.plugin_info, plugin_ver)))
            return this.ereturn();
        zerr.notice(e);
        return this.ereturn(etask.err('validate_plugin: '+e));
    }, function catch$(err){ return this.ereturn(etask.err(err)); }]);
}

function chrome_init(){
    // plugin_event_cb is global because it is called from dll
    window.plugin_event_cb = plugin_event_cb;
    var zp = E.zp = document.getElementById('zplugin') ||
        $('<embed>').attr({id: 'zplugin', type: 'application/x-hola-plugin'})
        .appendTo($('body'))[0];
    return etask([function try_catch$(){
        if (!zp || !zp.inited)
            return this.ereturn(etask.err(zp ? 'zp null' : 'zp.inited null'));
        return zp.inited();
    }, function(ret){
        if (this.error || ret<0)
            return this.ereturn(etask.err('zp.inited() failed'));
        _plugin_event_cb('inited', ret);
        zp_call('set_browser', be_util.browser());
        return ensure_link();
    }, function(){ E.inited = true;
    }]);
}

E.init = function(plugin_ver){
    if (E.inited)
	return;
    E.dll_have_status = version_util.version_cmp(be_util.version(),
        '1.4.764')>=0;
    E.sp = etask('be_plugin', [function(){ return this.wait(); }]);
    return etask('be_plugin_init', [function(){
        // XXX colin: move all www_storage and be_util init out of here
        return www_storage.init({ver: be_ver.ver});
    }, function(){
        return www_storage.get_json('hola_opts');
    }, function(opts){
        storage.set_json('hola_opts', opts);
        be_util.zopts.init();
        if (chrome)
            return chrome_init();
        return firefox_init(plugin_ver);
    }]);
};

E.uninit = function(){
    if (!E.inited)
        return;
    E.sp.ereturn();
    if (0) // XXX bahaa: does not support re-initializing
        E.inited = false;
    if (!chrome)
        B.be.plugin.del_listener(firefox_listener);
    if (window.plugin_event_cb===plugin_event_cb)
        delete window.plugin_event_cb;
    E.stopListening();
    E.off();
};

function check_val(opt){
    if (opt.val===undefined)
	return E.has(opt.path);
    if (E.get(opt.path)===opt.val)
        return true;
}

// XXX arik: make it generic to be_backbone
function wait_for(opt){
    if (check_val(opt))
        return E.get(opt.path);
    return etask([function(){
	E.on('change:'+opt.path, this.change_cb = function(){
	    if (check_val(opt))
	        this.econtinue();
	}.bind(this));
	return this.wait(opt.timeout||20*date.ms.SEC);
    }, function(){ return E.get(opt.path);
    }, function ensure$(){ E.off('change:'+opt.path, this.change_cb); }]);
}

function zp_ok(){
    try {
        if (!E.dll_have_status)
            return E.zp.inited()>0;
        if (E.zp.status())
            return true;
        E.dll_err = E.zp.get_err();
    } catch(e){}
    return false;
}

var zp_call = E.zp_call = function(func/*, ...*/){
    var zp = E.zp, args = array.args(arguments).slice(1);
    var s = 'zp.'+func+'('+zerr.json(args)+')';
    zerr.notice(s);
    if (zp_ok() && zp[func])
        try { return zp[func].apply(zp, args); } catch(e){}
    dll_crashed(E.dll_err||s);
    throw new Error('dll crashed cannot call '+s);
};

function ezp_call(func/*, ...*/){
    E.unset('ret.'+func);
    zp_call.apply(E, arguments);
    return wait_for({path: 'ret.'+func});
}

function do_kill(){
    return etask([function(){ return ezp_call('kill');
    }, function(ret){ zerr.assert(!ret, 'failed to kill'); }]);
}

function create_link(){
    var tries = 0;
    return etask([function loop(){
	tries++;
	return ezp_call('create_link');
    }, function(ret){
	if (!ret)
	    return this.ereturn();
        zerr('create links try '+tries+' failed '+ret);
	if (tries<50)
	    return this.egoto('loop', etask.sleep(100));
        if (tries==50)
	    return do_kill();
	throw new Error('create_link');
    }, function(){
	return this.egoto('loop', etask.sleep(100));
    }]);
}

function ensure_link(){
    var link_ver = storage.get('plugin_link_version');
    return etask([function(){ return ezp_call('exist_link');
    }, function(exist){
	if (exist && link_ver==be_util.version())
	    return this.ereturn();
	return create_link();
    }, function(){ storage.set('plugin_link_version', be_util.version()); }]);
}

var reg_const;
E.start = function(first_run){
    zerr.notice('plugin.start('+first_run+')');
    if (!chrome)
    {
        if (!B.have['be.registry'])
        {
            return etask([function(){
                this.alarm(10000, {ethrow: 'timeout'});
                return cb_apply(B.be.plugin, '.start', []);
            }, function(){ E.set({running: true, start_ts: Date.now()});
            }]);
        }
        return etask([function(){
            if (reg_const)
                return reg_const;
            return cb_apply(B.be.reg, '.const', []);
        }, function try_catch$(e){
            reg_const = e;
            return cb_apply(B.be.reg, '.get',
                [{root: reg_const.ROOT_KEY_CURRENT_USER,
                path: 'software\\hola', attrib: 'svc_wait',
                type: reg_const.TYPE_INT}]);
        }, function(e){
            // regkey might not exist at all, so assume no svc_wait on failure
            if (!this.error && e)
                return this.ereturn(1);
            this.alarm(10000, {ethrow: 'timeout'});
            return cb_apply(B.be.plugin, '.start', []);
        }, function(){ E.set({running: true, start_ts: Date.now()});
        }, function catch$(err){
            be_lib.perr_err({id: 'be_plugin_start_err', err: this.error});
        }, function ensure$(){
            cb_apply(B.be.reg, '.del', [{root: reg_const.ROOT_KEY_CURRENT_USER,
                path: 'software\\hola', attrib: 'svc_wait'}]);
        }]);

    }
    return etask([function(){
    }, function(){ return ezp_call('add_fw_rules', be_util.browser());
    }, function(){
	if (zp_call('reg_get_int', 'software\\hola', 'svc_wait'))
	    return this.ereturn(1);
        var ret = ezp_call('start',
	    first_run && !E.handled_first_run ? '1' : '0');
	E.handled_first_run = true;
	return ret;
    }, function(ret){
	zerr.assert(ret>=0, 'plugin failed to start %d', ret);
	E.set('start_ts', Date.now());
    }, function ensure$(){
        zp_call('reg_del', 'software\\hola', 'svc_wait');
    }]);
};

E.stop = function(ws_port){
    zerr.notice('plugin.stop('+ws_port+')');
    var ipc;
    return etask([function(){
        if (!E.get('running') || E.get('slave') ||
            be_bg_main.get('svc.type')!='dll' || !ws_port ||
            !window.WebSocket) // WebSocket is undefined on shutdown in FF
        {
            return;
        }
        // XXX colin/bahaa: change to use quit.json instead
        ipc = new be_svc.ipc_cmd(ws_port, 'quit');
        return ipc.recv(6000);
    }, function catch$(){ // ignore ipc failure
    }, function(){
        if (chrome)
        {
            zp_call('stop');
	    if (E.get('slave'))
	        return;
            // 1sec more than dll waits
            return wait_for({path: 'running', val: false, timeout: 12*1000});
        }
        this.alarm(5000, {ethrow: 'timeout'});
	return cb_apply(B.be.plugin, '.stop', []);
    }, function ensure$(){
        E.set('running', false);
        if (ipc)
            ipc.destroy();
    }]);
};

E.log_tail = function(size){
    if (!chrome)
        throw new Error('log_tail unimplemented for firefox');
    return zp_call('file_tail', zp_call('get_workdir')+'/../../svc.log',
        ''+size);
};

// XXX amir: find a better name
E.main_init = function(_be_bg_main){
    if (E.main_inited)
        return;
    be_bg_main = _be_bg_main;
    // XXX bahaa HACK: be_main does not support being upgraded, so do nothing
    // if it's already loaded
    if (be_main_loaded())
        return;
    be_bg_main.set('be_main_ver', be_ver.ver);
    E.main_inited = true;
    if (chrome && !be_util.is_plugin())
        return;
    if (chrome)
        return main_init();
    E.listen_to(be_bg_main, 'change:plugin.enabled', function(){
        var enabled = be_bg_main.get('plugin.enabled');
        if (enabled===true)
            return main_init();
        if (enabled===false)
            return E.main_uninit();
    });
};

function be_main_loaded(){
    return be_bg_main.get('be_main_ver') ||
        (window.hola && window.hola.t.new_ver);
}

// XXX amir: too many init functions
function main_init(){
    var crash_rl = {}, many_crashes;
    var fail = 0, max_try = 3, ts, first = true;
    etask([function(){
        E.main_loop = this;
        ts = Date.now();
        E.clear('final_error');
        return plugin_init();
    }, function catch$(err){
        zerr('plugin_init_err: '+err);
        be_lib.err('be_main_init_err', '', err);
        // XXX amir: is it OK to destroy now that it's merged with be_plugin?
        E._destroy();
        E.set('final_error', true);
        return this.ereturn();
    }, function off(){
        var t = Date.now()-ts, slow = t>2*date.ms.SEC;
        if (first)
        {
            first = false;
            be_lib.ok('be_main_init_ok', t+'ms');
        }
        else
        {
            zerr.notice('stopped');
            be_lib.perr(zerr.L[slow ? 'ERR' : 'NOTICE'],
                {id: 'be_main_stop_'+(slow ? 'slow' : 'ok'), info: t+'ms'});
        }
	// using _this and not bind because signiture must stay the same to
	// delete cb
	var l, _this = this;
        E.set('state', 'off');
        if (many_crashes)
        {
            zerr('too many svc crashes. giving up');
            be_lib.err('many_svc_crash',
                crash_rl.count+' in '+(Date.now()-crash_rl.ts)+'ms');
            // XXX amir: is it OK to destroy now that it's merged with
            // be_plugin?
            E._destroy();
            E.set('final_error', true);
            return this.ereturn();
        }
        E.listen_to(be_bg_main, l = 'change:svc.detected change:svc.type '
            +'change:enabled change:ext.slave', function cb(){
            if (be_bg_main.get('enabled') &&
                !(be_bg_main.get('svc.detected') &&
                be_bg_main.get('svc.type')!=='dll') &&
                be_bg_main.get('ext.slave')===false)
            {
                E.stopListening(be_bg_main, l, cb);
                _this.econtinue();
            }
        });
        return this.wait();
    }, function(){
        zerr.notice('starting');
        E.set('state', 'starting');
        ts = Date.now();
        return this.egoto('on', plugin_enable());
    }, function catch$(err){
	fail++;
        be_lib.perr_err({id: 'be_main_start_err',
            info: 'err: '+err+' fail: '+fail, err: err,
            filehead: err=='plugin already started' ? zerr.log_tail() : ''});
	if (fail!=max_try)
            return this.egoto('off');
        zerr('failed to start plugin after %d attempts', fail);
        if (err==='plugin crashed')
            send_plugin_log('svc_crash', 'retval: '+E.get('ret.stop'));
        E._destroy();
        E.set('final_error', true);
        return this.ereturn();
    }, function on(){
        var v = be_bg_main.get('svc.version');
	var t = Date.now()-ts, slow = t>2*date.ms.SEC;
	if (window.hola)
	    window.hola.t.plugin = t;
        be_lib.perr(zerr.L[slow ? 'ERR' : 'NOTICE'],
	    {id: 'be_main_start_'+(slow ? 'slow' : 'ok'), info: v+' '+t+'ms'});
	fail = 0;
	// using _this and not bind because signiture must stay the same to
	// delete cb
	var l, _this = this;
        E.set('state', 'on');
        zerr.notice('started');
        E.listen_to(be_bg_main, l = 'change:svc.detected change:svc.type '
            +'change:enabled change:ext.slave change:plugin.running',
            function cb(){
            var crashed = !be_bg_main.get('plugin.running');
            if (crashed)
                many_crashes = !rate_limit(crash_rl, date.ms.MIN, 2);
            if (!be_bg_main.get('enabled') ||
                (be_bg_main.get('svc.detected') &&
                be_bg_main.get('svc.type')!=='dll') ||
                be_bg_main.get('ext.slave') || crashed)
            {
                E.stopListening(be_bg_main, l, cb);
                _this.econtinue();
            }
        });
        return this.wait();
    }, function(){
        E.set('state', 'stopping');
        zerr.notice('stopping');
        ts = Date.now();
        return this.egoto('off', plugin_disable());
    }, function catch$(err){
	be_lib.err('be_main_stop_err', '', err);
        return this.egoto('off');
    }]);
    E.on('change:state', function(){
        wait_cid_stop();
        if (E.get('state')==='on')
            return wait_cid_start();
    });
}

var wait_cid_timer;
function wait_cid_start(){
    wait_cid_timer = setTimeout(function(){
        wait_cid_timer = null;
        if (be_bg_main.get('svc.cid'))
            return;
        var t = Date.now()-E.get('start_ts');
        send_plugin_log('no_cid', t+'ms');
    }, date.ms.MIN);
}
function wait_cid_stop(){
    wait_cid_timer = clearTimeout(wait_cid_timer); }

E.main_uninit = function(){
    if (!E.main_inited)
        return;
    if (0) /* XXX bahaa: does not support re-initializing */
        E.main_inited = false;
    wait_cid_stop();
    return etask([function(){
        if (E.main_loop)
            E.main_loop.ereturn();
        E.main_loop = undefined;
        return plugin_uninit();
    }, function ensure$(){
        if (version_util.version_cmp(be_util.version(), '1.2.439')>=0)
            return;
        zerr('reloading without plugin...');
        storage.set('set_tmp_not_plugin', 1);
        be_lib.reload_ext({force: true});
    }]);
};

function plugin_init(){
    return etask([function(){ return E.init(be_bg_main.get('plugin.new_ver'));
    }, function(){
        E.listen_to(E, 'change:running', function(){
            // XXX amir: remove when new mode detection code is ready
            be_bg_main.set('plugin.running', E.get('running'));
            be_svc.update_info();
        });
        E.listen_to(E, 'change:dll_crashed', function(){
            if (E.get('dll_crashed'))
                E._destroy();
        });
    }]);
}

function plugin_uninit(){
    return etask([function(){
        E.stopListening();
        return plugin_disable();
    }, function catch$(err){ zerr('plugin_uninit: disable failed '+err);
    }, function(){
        // XXX amir: remove when new mode detection code is ready
        be_bg_main.set('plugin.running', false);
        return E.uninit();
    }]);
}

function plugin_enable(){
    var started = false, err;
    return etask([function(){
	if (E.get('running')) /* XXX bahaa: consider perr */
	    zerr('plugin_enable: unexpected plugin running');
        return E.start(be_bg_main.get('ext.first_run'));
    }, function(svc_wait){
        started = true;
        var tries = 0;
        return etask([function check(){
            if (!be_bg_main.get('enabled'))
                return this.ereturn(etask.err('canceled'));
            if (be_bg_main.get('ext.slave'))
                return this.ereturn(etask.err('slave extension'));
            if (!E.get('running') && !svc_wait)
                return this.ereturn(etask.err('plugin crashed'));
            return be_svc.update_info();
        }, function(r){
            if (!r)
                throw new Error('not running');
        }, function catch$(){
            zerr.assert(tries++ <= 40, 'unable to connect to plugin');
            return this.egoto('check', etask.sleep(500));
        }]);
    }, function catch$(e){
        /* cleanup and return original error when done */
        return etask([function(){
            if (started || e=='timeout')
                return plugin_disable();
        }, function catch$(err){ zerr('stop after failed start failed '+err);
        }, function(){ throw e; }]);
    }]);
}

function plugin_disable(){ return E.stop(be_svc.get('ws_port')); }

function send_plugin_log(id, info){
    if (chrome)
        return send_plugin_log_chrome(id, info);
    return send_plugin_log_firefox(id, info);
}

function send_plugin_log_chrome(id, info){
    if (1) // XXX bahaa: broken. fix
        return;
    if (storage.get('sent_plugin_log')===be_util.version())
        return;
    storage.set('sent_plugin_log', be_util.version());
    return etask([function(){
        var log = E.log_tail(65*1024);
        return be_lib.perr(zerr.L.ERR, {id: id, info: info||'',
            filehead: log, timeout: 30*date.ms.SEC});
    }, function catch$(e){
        be_lib.err('svc_log_tail_err', 'id: '+id+' info: '+info, e); }]);
}

function send_plugin_log_firefox(id, info){
    if (!B.have['be.plugin.perr'])
        return;
    var v = E.plugin_info && E.plugin_info.version;
    if (!v || storage.get('sent_plugin_log')===v)
        return;
    storage.set('sent_plugin_log', v);
    var binfo = be_util.build_info();
    binfo.plugin_version = v;
    return etask.cb_apply(B.be.plugin, '.perr',
        [{id: be_util.perr_id(id), info: info, build: be_util.build(binfo)}]);
}

return E; });
