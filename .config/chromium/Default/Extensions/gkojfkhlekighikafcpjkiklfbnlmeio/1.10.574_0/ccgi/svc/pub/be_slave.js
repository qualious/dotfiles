// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['underscore', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/util/zerr.js', '/svc/pub/be_util.js', '/svc/pub/be_lib.js',
    '/svc/pub/be_browser.js', '/util/version_util.js', '/util/storage.js'],
    function(_, be_backbone, etask, zerr, be_util, be_lib, B, version_util,
    storage){
B.assert_bg('be_slave');
var chrome = window.chrome, conf = window.conf;
var E = new be_backbone.model();
E.be_bg_main = undefined;

// Handle two extensions with different IDs installed: put the older one into
// slave mode.

function set_slave(val){
    if (E.destroyed)
        return;
    E.be_bg_main.set('ext.slave', val);
    if (!chrome)
	return;
    if (val)
	storage.set('ext_slave', 1);
    else
	storage.clr('ext_slave');
}

function uninit(){
    E.sp.ereturn();
    E.be_bg_main = undefined;
    chrome.extension.onConnectExternal.removeListener(connect_cb);
    chrome.extension.onMessageExternal.removeListener(on_message);
}

/* XXX arik/bahaa: rm be_bg_main, better that parent will listen to
 * events on be_slave */
E.init = function(be_bg_main){
    if (E.inited)
        return;
    E.inited = true;
    E.be_bg_main = be_bg_main;
    if (!chrome)
        return set_slave(false);
    E.sp = etask('be_slave', [function(){ return this.wait(); }]);
    chrome.extension.onConnectExternal.addListener(connect_cb);
    chrome.extension.onMessageExternal.addListener(on_message);
    E.on('destroy', function(){ uninit(); });
    switch (conf.type)
    {
    case 'dll':
        E.sp.spawn(etask({name: 'dll', cancel: true}, [function(){
            return etask.all({www: msg_send(conf.ids.www, {id: 'stop'}),
                cws: msg_send(conf.ids.cws, {id: 'stop'}),
                cws_plugin: msg_send(conf.ids.cws_plugin, {id: 'stop'})});
        }, function(ret){
            set_slave(false);
	    zerr.notice('stop www %s cws %s cws_plugin %s',
                ret.www && ret.www.err, ret.cws && ret.cws.err,
                ret.cws_plugin && ret.cws_plugin.err);
	}, function catch$(err){
            set_slave(false);
	    be_lib.perr_err({id: 'be_slave_err'}, err);
        }]));
        break;
    case 'cws_plugin':
        E.sp.spawn(etask({name: 'cws_plugin', cancel: true}, [function(){
	    // XXX arik/bahaa: BACKWARD: old extensions before 1.1.834 didn't
            // use rmt be_slave, so if any one of them is installed remain
            // slave
            return etask.cb_apply(chrome.management, '.getAll', []);
        }, function(exts){
            if (!exts)
                return;
	    var id = chrome.runtime.id;
            for (var i=0; i<exts.length; i++)
            {
                var type = be_util.ext_type(exts[i].id);
                if (exts[i].id==id || !type)
                    continue;
                var v = exts[i].version;
                if (version_util.version_valid(v) &&
                    version_util.version_cmp(v, '1.1.834')<0)
                {
                    be_lib.perr_ok({id: 'be_slave',
                        info: conf.type+' '+type+' '+v});
                    set_slave(true);
                    return this.ereturn();
                }
            }
        }, function(){
            return ext_enabled(conf.ids.dll);
        }, function(enabled){
            if (!enabled)
                return;
            set_slave(true);
            return wait_disconnect(conf.ids.dll, 'cws_plugin>dll');
        }, function(){
	    return etask.all({cws: msg_send(conf.ids.cws, {id: 'stop'}),
		www: msg_send(conf.ids.www, {id: 'stop'})});
        }, function(ret){
            set_slave(false);
	    zerr.notice('stop www %s cws %s',
                ret.www && ret.www.err, ret.cws && ret.cws.err);
	}, function catch$(err){
            set_slave(false);
	    be_lib.perr_err({id: 'be_slave_err'}, err);
        }]));
        break;
    case 'www':
        E.sp.spawn(etask({name: 'www', cancel: true}, [function(){
            return ext_enabled([conf.ids.dll, conf.ids.cws_plugin]);
        }, function(enabled){
            if (!enabled)
                return;
            set_slave(true);
            return etask.all({dll: wait_disconnect(conf.ids.dll, 'www>dll'),
                cws_plugin: wait_disconnect(conf.ids.cws_plugin,
		'www>cws_plugin')});
        }, function(){ return msg_send(conf.ids.cws, {id: 'stop'});
        }, function(ret){
            set_slave(false);
	    zerr.notice('stop cws %s', ret && ret.err);
	}, function catch$(err){
            set_slave(false);
	    be_lib.perr_err({id: 'be_slave_err'}, err);
        }]));
        break;
    case 'cws':
        E.sp.spawn(etask({name: 'cws', cancel: true}, [function(){
            /* can't use ext_enabled() because we don't have management
             * permission. assume that if all extensions aren't enabled
             * then wait_disconnect() should return in 1sec */
	    this.alarm(1000, function(){ set_slave(true); });
            return etask.all({dll: wait_disconnect(conf.ids.dll, 'cws>dll'),
                www: wait_disconnect(conf.ids.www, 'cws>www'),
                cws_plugin: wait_disconnect(conf.ids.cws_plugin,
		'cws>cws_plugin')});
        }, function(ret){
	    this.del_alarm();
            set_slave(false);
	}, function catch$(err){
            set_slave(false);
	    be_lib.perr_err({id: 'be_slave_err'}, err);
        }]));
        break;
    default:
	zerr('unknown type: %s id: %s', conf.type, chrome.runtime.id);
        set_slave(false);
    }
};

function ext_enabled(id){
    return etask({name: 'ext_enabled', cancel: true}, [function(){
        if (_.isArray(id))
            return this.egoto('multi');
        return etask.cb_apply(chrome.management, '.get', [id]);
    }, function(ext){
	return this.ereturn(ext && ext.enabled);
    }, function multi(){
        return etask.cb_apply(chrome.management, '.getAll', []);
    }, function(exts){
	return this.ereturn(_.some(exts, function(ext){
	    return ext.enabled && id.indexOf(ext.id)>=0; }));
    }]);
}

function connect_cb(port){
    zerr.notice('accepted connection: %s from: %s', port.name, port.sender); }

function event_from_bext(sender){
    if (!sender)
        return;
    var k = Object.keys(conf.ids);
    for (var i=0; i<k.length; i++)
    {
        if (conf.ids[k[i]]==sender.id)
            return true;
    }
}

function on_message(msg, sender, resp){
    if (!event_from_bext(sender))
        return;
    var be_bg_main = E.be_bg_main;
    var sender_type = be_util.ext_type(sender.id)||sender.id;
    zerr.notice('msg %s: %s', sender_type, zerr.json(msg));
    switch (msg.id)
    {
    case 'info':
        msg.res = {
            uuid: be_bg_main.get('uuid'),
            cid: be_bg_main.get('svc.cid'),
            ver: be_util.version(),
            plugin: be_util.is_plugin(),
            type: conf.type,
        };
        break;
    case 'reload': reload(); break;
    case 'stop':
        E.sp.spawn(etask({name: 'stop', cancel: true}, [function(){
	    set_slave(true);
        }, function(){
	    be_lib.perr_ok({id: 'be_slave', info: conf.type+' '+sender_type});
        }, function(){
            msg.res = 'stopped';
            resp(msg);
	    return etask.sleep(100); /* wait to allow perr to be sent */
        }, function catch$(err){
            msg.err = 'stop err: '+err;
            resp(msg);
        }, function ensure$(){ reload(); }]));
        return true; /* signals that we will use the callback later */
    default: return;
    }
    resp(msg);
}

function msg_send(id, msg){
    return etask({name: 'msg_send', cancel: true}, [function(){
	this.alarm(6000, {ereturn: {err: 'timeout'}});
        return etask.cb_apply(chrome.extension, '.sendMessage', [id, msg]);
    }]);
}

function wait_disconnect(id, name){
    var cb, conn;
    return etask({name: 'wait_disconnect', cancel: true}, [function(){
        conn = chrome.extension.connect(id, {name: name});
	conn.onDisconnect.addListener(cb = this.ereturn_fn());
        return this.wait();
    }, function ensure$(){
	if (conn && cb)
	    conn.onDisconnect.removeListener(cb);
    }]);
}

function reload(){ _.defer(be_lib.reload_ext, {force: true}); }

return E; });

