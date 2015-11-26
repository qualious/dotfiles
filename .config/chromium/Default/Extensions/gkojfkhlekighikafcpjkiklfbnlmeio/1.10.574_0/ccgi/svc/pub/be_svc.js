// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/svc/pub/be_browser.js', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/util/ajax.js', '/svc/pub/be_lib.js', '/svc/pub/be_ext.js',
    '/svc/pub/be_defines.js', '/util/version_util.js', '/svc/pub/be_util.js',
    'underscore', '/util/storage.js', '/util/date.js', '/util/zerr.js',
    'jquery', '/svc/svc_ipc.js'],
    function(B, be_backbone, etask, ajax, be_lib, be_ext, be_defines,
    version_util, be_util, _, storage, date, zerr, $, svc_ipc){
var conf = window.conf, chrome = window.chrome, zconf = window.zon_config;
var E = new (be_backbone.task_model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_svc');
	    E.uninit();
	});
	B.backbone.server.start(this, 'be_svc');
    },
}))();

E.init = function(){
    E.country_ports = {};
    E.svc_monitor.init();
};

E.uninit = function(){
    E.svc_monitor.uninit();
    E.stopListening(be_ext);
};

E.svc_monitor = (function(){
var EE = {}, inited = false, monitor, ipc, waiting;
var cmd = 'set_notify_multi /svc/ram/protocol/connected '
+'/svc/ram/protocol/unblocker/rules/set /svc/ram/protocol/pac_url '
+'/svc/conf/protocol/unblocker/disable /svc/conf/protocol/disable '
+'/svc/conf/protocol/network /svc/conf/protocol/auth/md5 '
+'/svc/conf/protocol/cid';
// We want frequent polling to detect the svc quickly. It results in many error
// messages in the console that make debugging difficult, so we provide an easy
// way to disable it.
EE.interval = 1000;
EE.init = function(){
    if (inited)
        return;
    waiting = false;
    ipc = null;
    etask('svc_init', [function wait(info){
        monitor = this;
        // WebSocket is undefined for a few FF users, perhaps they disabled it?
        if (!window.WebSocket || !(info && info.ws_port))
        {
            waiting = true;
            return this.wait(EE.interval);
        }
        ipc = ipc || new E.ipc_cmd(info.ws_port, cmd, {qlen: 1});
        return ipc.recv(30*date.ms.SEC);
    }, function catch$(err){
        if (!ipc)
            return;
        ipc.destroy();
        ipc = null;
        waiting = true;
        return this.wait(EE.interval);
    }, function catch$(){
    }, function req(info){
        waiting = false;
        return this.egoto('wait', info && info.svc_result || E.update_info());
    }]);
    inited = true;
};

EE.econtinue = function(info){
    if (monitor && waiting)
        monitor.econtinue(info);
};

EE.uninit = function(){
    if (!inited)
        return;
    if (monitor)
    {
        monitor.ereturn();
        monitor = null;
    }
    ipc = null;
    inited = false;
};

return EE; })();

E.update_info = function(){
    return etask('update_info', [function(){
        return E.callback({plugin_enabled: storage.get_int('plugin.enabled')});
    }, function(info){
        if (_.isEqual(info, E.get('info')))
            return info;
        var change = {};
        change.info = info;
        change.ws_port = info.ws_port;
        if (info.status && info.status.protocol)
        {
            change['status.protocol.enabled'] = info.status.protocol.enabled;
            change['status.protocol.connected'] =
                info.status.protocol.connected;
        }
        if (info.status && info.status.unblocker)
        {
            change['status.unblocker.enabled'] = info.status.unblocker.enabled;
            change['status.unblocker.connected'] = info.plugin ?
                info.status.unblocker.enabled :
                info.status.unblocker.connected;
        }
        change.cid = info.cid;
        change.version = info.version;
        change.session_key_cid = info.session_key;
        change.type = info.plugin ? 'dll' : 'exe';
        change.callback_raw = info.raw;
        change.callback_ts = date();
        if (E.get('status.protocol.connected') &&
            !change['status.protocol.connected'])
        {
            be_lib.perr_err({id: 'protocol_disconnect'});
        }
        E.safe_set(change);
        E.svc_monitor.econtinue({svc_result: info});
        return info;
    }, function catch$(){
        E.safe_set({
            info: null,
            ws_port: 0,
            'status.protocol.enabled': false,
            'status.protocol.connected': false,
            'status.unblocker.enabled': false,
            'status.unblocker.connected': false,
            cid: 0,
            session_key_cid: 0,
            running: false,
            type: null,
            callback_raw: null,
            callback_ts: null,
            version: null,
        });
    }]);
};

function padhex(num){ return ('000000000'+num.toString(16)).substr(-8); }

E.ipc_cmd = function(port, cmd, opt){
    if (!(this instanceof E.ipc_cmd))
        return new E.ipc_cmd(port, cmd, opt);
    opt = this.opt = opt||{};
    this.timer = null;
    this.n = 0;
    var q = this.q = [];
    var ws = this.ws = new WebSocket('ws://127.0.0.1:'+port+'/');
    var _this = this;
    ws.onopen = function(){
        var argv = cmd.split(' ');
        var msg = padhex(4)+' '+padhex(argv.length);
        for (var i=0; i<argv.length; i++)
            msg += ' '+padhex(argv[i].length)+' '+argv[i];
        ws.send(msg);
    };
    ws.onmessage = function(e){
        this.n++;
        zerr.debug('ipc %s', e.data);
        var argv = e.data.split(' '), ret = parseInt(argv[1], 16);
        q.push({ret: ret, data: argv});
        if (opt.qlen && q.length>opt.qlen)
            q.shift();
        _this._notify();
    };
    ws.onclose = function(e){
        zerr.debug('ipc closed code: %d reason: %s clean: %s', e.code,
            e.reason, e.wasClean);
        _this.closed = true;
        _this._notify(new Error('connection closed'));
    };
    ws.onerror = function(e){
        zerr.debug('ipc error %O', e);
        _this.closed = true;
        _this._notify(e);
    };
};

E.ipc_cmd.prototype.recv = function(timeout){
    var e = this.d = etask('recv', [function(){ return this.wait(); }]);
    if (this.q.length)
        this._notify();
    else if (this.closed)
        this._notify(new Error('connection closed'));
    else if (timeout)
        this.timer = setTimeout(this._notify.bind(this, 'timeout'), timeout);
    return e;
};

E.ipc_cmd.prototype._notify = function(err){
    var d = this.d;
    if (!d)
        return;
    if (err==='timeout')
        d.econtinue(null);
    else if (err)
        d.ethrow(err);
    else
        d.econtinue(this.q.shift());
    this._clear_timer();
    delete this.d;
};

E.ipc_cmd.prototype._clear_timer = function(){
    this.timer = clearTimeout(this.timer); };

E.ipc_cmd.prototype.destroy = function(){
    try { this.ws.close(); }
    catch(err){ zerr(err); }
    this._clear_timer();
    delete this.q;
    delete this.d;
};

E.callback = function(opt){
    opt = opt||{};
    window.disable_svc_polling = window.disable_svc_polling||0;
    return etask('callback', [function try_catch$(){
        if (window.disable_svc_polling || !be_ext.get('r.ext.enabled'))
            return this.ereturn(etask.err('not running'));
	return svc_ipc.ajax('callback.json');
    }, function(ret){
        var data, xhr;
        if (ret)
        {
            data = ret.ret;
            xhr = ret.xhr;
        }
	if (this.error || !data || !xhr || xhr.status!==200 ||
            typeof data.cid!=='number')
        {
            console.log('Use window.disable_svc_polling = 1 to stop polling');
            return this.ereturn(etask.err('not running'));
        }
        if (opt.raw)
            return this.ereturn(data);
        var is_svc = !data.exe ||
            data.exe.toLowerCase().replace(/\.exe$/, '')!==
            zconf.PLUGIN_EXE.toLowerCase().replace(/\.exe$/, '');
        /* if a plugin is running under different user or browser,
         * we ignore it */
        var plugin_mode = chrome ? be_util.is_plugin() : opt.plugin_enabled;
	if (!plugin_mode && !is_svc)
	    is_svc = true;
        ret = {status: {}};
        ret.raw = data;
        if (data.player)
            ret.player = data.player;
        if (data.torrent_stream)
            ret.torrent_stream = data.torrent_stream;
        if (data.ws_port>0)
            ret.ws_port = data.ws_port;
        if (data.has_internet!==undefined)
            ret.status.has_internet = data.has_internet;
        if (data.protocol)
        {
            ret.status.protocol = {enabled: !data.protocol.disable,
                connected: !!data.protocol.connected};
        }
        if (data.unblocker)
        {
            ret.status.unblocker = {enabled: !data.unblocker.disable,
                connected: !!data.unblocker.connected,
                pac_url: data.unblocker.pac_url};
        }
        _.extend(ret, {
            cid: data.cid,
            version: data.ver||'0.0.0',
            os_ver: data.os_ver,
            /* svc returns this string when there's no session_key,
             * consider it null */
            session_key:
                data.session_key==='00000000000000000000000000000000' ? null :
                data.session_key,
            ui_type: data.ui_type,
        }, is_svc ? {svc: 1} : {plugin: 1});
        return this.ereturn(ret);
    }]);
};

var stats_interval = 6*date.ms.HOUR, collect_stats_timeout;

function collect_stats()
{
    etask([function try_catch$(){
	return svc_ipc.ajax({cmd: 'stats.json', timeout: -1});
    }, function(stats){
        if (this.error)
            return zerr('failed collecting stats', this.error);
        stats = stats.ret;
        be_lib.perr(zerr.L.INFO, {id: 'client_stats',
            filehead: JSON.stringify(stats)});
    }, function ensure$(){ schedule_collect_stats(); }]);
}

function schedule_collect_stats()
{
    // Stats are collected every stats_interval, with a time offset set to
    // 'cid' seconds % stats_interval in seconds. E.g. if cid is 50 and the
    // interval is 6h, stats are collected at 00:00:50, 06:00:50, 12:00:50,
    // etc.
    var time_offset = E.get('cid')*date.ms.SEC % stats_interval;
    var next = Math.floor(Date.now()/stats_interval) * stats_interval
        + time_offset;
    if (next<Date.now())
        next += stats_interval;
    collect_stats_timeout = setTimeout(collect_stats, next-Date.now());
}

E.start_collect_stats = function(){ schedule_collect_stats(); };

E.stop_collect_stats = function(){
    collect_stats_timeout = clearTimeout(collect_stats_timeout); };

return E; });
