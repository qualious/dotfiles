// LICENSE_CODE ZON
'use strict'; /*jslint browser:true*/
define(['jquery', 'underscore', '/util/etask.js', '/util/ajax.js',
    '/util/version_util.js', '/util/util.js', '/util/user_agent.js',
    '/util/storage.js'],
    function($, _, etask, ajax, version_util, zutil, zua, storage){

var port_no_load_from_storage = 1;
function port_get(){
    var is_dev;
    try { is_dev = storage.get_json('hola_opts').developer_mode; } catch(err){}
    if (port_no_load_from_storage || is_dev)
        return;
    try { return storage.get_int('svc_ipc_port'); } catch(err){}
}

function port_set(port, up, info){
    if (up)
        return void (E.port_up = port||undefined);
    if (!port)
    {
        try { storage.clr('svc_ipc_port'); } catch(err){}
        delete E.svc_port;
        return;
    }
    try { storage.set_int('svc_ipc_port', port); } catch(err){}
    E.svc_port = port;
    E.svc_has_ssl = port && info && info.ssl;
}

var is_ie = zua.guess_browser().browser=='ie';
// XXX colin: remove old_port once version bellow will be less than 1%
var svc_old_port = 6853;
var up_old_port = 6864;
var E = {
    svc_ports:
    [svc_old_port, 6880, 6881, 6882, 6883, 6884, 6885, 6886, 6887, 6888, 6889],
    up_ports:
    [up_old_port, 6890, 6891, 6892, 6893, 6894, 6895, 6896, 6897, 6898, 6899]
};
E.svc_port = port_get();
E.svc_has_ssl = false;
E.up_port = undefined;

function old_port(up){
    return up ? up_old_port : svc_old_port; }

function Eport(up){
    return up ? E.up_port : E.svc_port; }

function Eports(up){
    return up ? E.up_ports : E.svc_ports; }

function get_url(cmd, opt){
    opt = opt||{};
    var https = location.protocol=='https:' && !opt.http;
    return (https ? 'https://localhost.h-local.org' : 'http://127.0.0.1')+':'+
        (opt.port||Eport(opt.up))+'/'+cmd;
}

function exe2order(e){
    if (e.os_ver=='NaCl')
        return 1;
    if (/^hola_updater/.test(e.exe))
        return 1;
    if (/^hola_svc/.test(e.exe))
        return 2;
    if (/^hola_plugin/.test(e.exe))
        return 3;
    return 0;
}

// XXX mikhail: temporary until hola_svc is upgraded everywhere
E.$ajax_try_post = function(url, opt){
    opt = opt||{};
    if (typeof url==='object')
        opt = url;
    else if (typeof url==='string')
    {
        opt = zutil.clone(opt);
        opt.url = url;
    }
    var xhr;
    return etask([function(){
        return xhr = $.ajax(zutil.extend({}, opt, {method: 'POST'}));
    }, function catch$(err){
        if (opt.data)
            return this.egoto('fail');
        return this.egoto('get');
    }, function(ret){
        if (!this.error)
            return this.ereturn({xhr: xhr, ret: ret});
    }, function get(){
        return xhr = $.ajax(opt);
    }, function catch$(err){
        return this.egoto('fail');
    }, function exit(ret){
        if (this.error)
            return this.ethrow(this.error);
        return this.ereturn({xhr: xhr, ret: ret});
    }, function fail(){
        if (opt.no_throw)
            return this.egoto('exit', {error: xhr.statusText||'no_status'});
        throw new Error(xhr.statusText);
    }]);
};

var sp_find_port;
E.find_port = function(up){
    // XXX colin: is ie can take up to 5000 seconds to get answer for post
    var opt = {dataType: 'json', cache: false, no_throw: 1,
        timeout: is_ie ? 2000 : 500};
    var q = [];
    return etask({cancel: true}, [function(){
        if (sp_find_port)
            return this.eloop(sp_find_port);
        sp_find_port = this;
    }, function try_catch$(){
        if (Eport(up))
            return this.ereturn(Eport(up));
    }, function try_catch$(){
        var _this = this;
        _.each(Eports(up), function(port){
            var sp;
            var func = port==old_port(up) ? E.$ajax_try_post : post;
            _this.spawn((sp=func(get_url('callback.json?find_port=1',
                {port: port, up: up}), opt)));
            sp.data = sp.data ? sp.data : {};
            sp.data.port = port;
            q.push(sp);
        });
        return etask.all(q);
    }, function(arr){
        var best, port, best_is_old;
        _.each(arr, function(e, i){
            if (e.ret.error)
                return;
            var is_old = q[i].data.port==old_port(up);
            if (!best)
            {
                best = e;
                best_is_old = is_old;
                port = q[i].data.port;
                return;
            }
            var e_order = exe2order(e.ret.exe);
            var best_order = exe2order(best.ret.exe);
            if (!best_is_old && (e_order<best_order || e_order==best_order
                && version_util.version_cmp(e.ret.ver, best.ret.ver)<=0))
            {
                return;
            }
            best = e;
            best_is_old = is_old;
            port = q[i].data.port;
        });
        port_set(port, up, best&&best.ret);
        if (!best)
            return this.ereturn(undefined);
        return this.ereturn(port);
    }, function ensure$(){
        if (this==sp_find_port)
            sp_find_port = null;
    }]);
};

E.init = function(port){
    etask([function(){
        // XXX colin: maybe add here www_storage.init
        if (port)
        {
            port_set(port);
            return port;
        }
        return E.find_port();
    }, function(port){
        if (!port)
            return -1;
        return 0;
    }]);
};

function post(url, opt){
    opt = opt||{};
    if (typeof url==='object')
        opt = url;
    else if (typeof url==='string')
    {
        opt = zutil.clone(opt);
        opt.url = url;
    }
    var xhr;
    return etask([function(){
        return xhr = $.ajax(zutil.extend({}, opt, {method: 'POST'}));
    }, function catch$(err){
        if (opt.no_throw)
        {
            return this.ereturn({xhr: xhr,
                ret: {error: xhr.statusText||'no_status'}});
        }
        throw new Error(xhr.statusText);
    }, function(ret){
        if (this.error)
            return this.ethrow(this.error);
        return {xhr: xhr, ret: ret};
    }]);
}

E.ajax = function(_opt){
    var cmd, timeout = 500, up;
    var opt = {dataType: 'json', cache: false, no_throw: 1};
    if (typeof _opt=='string')
        cmd = _opt;
    else if (typeof _opt=='object')
    {
        cmd = _opt.cmd;
        opt.data = _opt.data;
        timeout = _opt.timeout||timeout;
        up = _opt.up;
    }
    var tested, q = [];
    if (timeout>-1)
        opt.timeout = timeout;
    return etask([function try_catch$ajax(){
        if (Eport(up))
        {
            if (Eport(up)==old_port(up))
                return E.$ajax_try_post(get_url(cmd, {up: up}), opt);
            return post(get_url(cmd, {up: up}), opt);
        }
        return this.egoto('find_port');
    }, function(res){
        var error = res.ret.error;
        if (error && tested)
            throw new Error(error);
        if (error)
        {
            port_set(0);
            return this.egoto('find_port');
        }
        return this.ereturn(res);
    }, function try_catch$find_port(){
        return E.find_port(up);
    }, function(port){
        if (!port)
            throw new Error('none_found');
        tested = 1;
        return this.egoto('ajax');
    }]);
};

E.cmd2url = function(cmd, opt){
    if (!Eport())
        throw new Error('svc_ipc not inited, no port detected');
    return get_url(cmd, opt);
};

E.hola_ff_args_get = function(opt){
    // XXX colin: firefox is missing the following:
    // - move to top
    // - set window position (as center ontop of our progress window
    // - plugin support
    // -foreground and -url cancelles out -chrome
    // XXX ittai: -chrome is used for setting XUL UI components.
    // XUL is the Mozilla XML User interface Language as defined in
    // https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL.
    // For now we will use -chrome because it works
    opt = opt||{};
    var width = opt.width||868;
    var height = opt.height||532;
    var url = opt.url||'https://hola.org';
    return '-height '+height+' -width '+width+' -foreground '+
        (opt.mp ? '-chrome' : '-url')+' "'+url+'"';
};

function hola_ff_start(opt){
    var args = E.hola_ff_args_get(opt);
    return E.ajax({cmd: 'hola_ff_start.json',
        data: {args: args, env: 'HOLA_FF=1'}});
}

E.hola_br_start = function(opt){
    return etask([function(){
        return E.ajax('callback.json');
    }, function(result){
        if (!result.ret || version_util.version_cmp(result.ret.ver,
            '1.9.294') < 0)
        {
            return hola_ff_start(opt);
        }
        return E.ajax({cmd: 'hola_browser_start.json',
            data: {args: '"'+(opt.url||'https://hola.org')+'"'}});
    }]);
};

// XXX colin: move ext ping into it's own file
E.ext = {};
function test_img(links){
    return etask([function(){
        var _this = this, errs = 0;
        _.each(links, function(e, i){
            $("<img>").load(function(){ this.ereturn(); }.bind(_this))
            .error(function(){
                errs++;
                if (errs==links.length)
                    this.ethrow('ext not found'); }.bind(_this))
            .attr("src", e+'?rc='+Date.now());
        });
        return this.wait(1000);
    }]);
}

E.ext.lean_ping = function(){
    if (!window.chrome)
    {
        // XXX colin: change to use zconf.BEXT_FF_ORIGIN and
        // zconf.BEXT_FF_ORIGIN_SIGNED
        return test_img(['resource://ff_ext-at-hola-dot-org/'
            +'hola_firefox_ext/data/img/logo.png',
            'resource://jid1-4p0kohsjxu1qgg-at-jetpack/'
            +'hola_firefox_ext/data/img/logo.png']);
    }
    var old = 'chrome-extension://gkojfkhlekighikafcpjkiklfbnlmeio/icon.png';
    var _new = 'chrome-extension://mhcmfkkjmkcfgelgdpndepmimbmkbpfp/icon.png';
    return etask({name: 'lean_check_ext'}, [function(){
        return etask.all({allow_fail: true},
            {old: test_img([old]), _new: test_img([_new])});
    }, function(e){
        if (etask.is_err(e.old) && etask.is_err(e._new))
            throw e._new.error;
    }]);
};

return E; });
