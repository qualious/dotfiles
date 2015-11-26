// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/svc/pub/be_browser.js', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/util/zerr.js', '/svc/pub/be_svc.js', 'underscore',
    '/util/version_util.js', '/svc/pub/be_plugin.js', '/svc/pub/be_lib.js',
    '/util/storage.js', '/util/date.js'],
    function(B, be_backbone, etask, zerr, be_svc, _,
    version_util, be_plugin, be_lib, storage, date){
var be_bg_main = window.be_bg_main; /* XXX arik: rm and use require */
var E = new (be_backbone.task_model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_mode');
	    E.uninit();
	});
	B.backbone.server.start(this, 'be_mode');
    },
}))();
var svc_modes = {dll: 1, exe: 1}, chrome = window.chrome;

function update_pending(new_mode, change){
    var last_mode = storage.get('last_mode'), pending;
    if (new_mode=='ext' && last_mode)
        pending = last_mode;
    if (pending==E.get('pending'))
        return;
    change.pending = pending;
    zerr.info('pending mode set to '+pending);
}

var disconnections = [], ignore_svc;

function maybe_ignore_svc(){
    if (be_svc.get('status.protocol.connected') || !svc_modes[E.get('mode')])
        return;
    disconnections.push(date());
    disconnections = disconnections.slice(-2);
    if (disconnections.length==2 &&
        Date.now()-disconnections[0] < date.ms.SEC*10)
    {
        zerr.info('Too frequent disconnections - ignoring svc');
        ignore_svc = true;
    }
}

function update_mode(){
    var new_mode = 'ext', change = {}, mode_changed;
    var svc_type = be_svc.get('type');
    if (be_svc.get('cid') && be_svc.get('session_key_cid') &&
        be_svc.get('status.protocol.connected') && !ignore_svc)
    {
        new_mode = svc_type;
    }
    if (new_mode!==E.get('mode'))
        mode_changed = true;
    maybe_ignore_svc();
    update_pending(new_mode, change);
    _.extend(change, {
        mode: new_mode,
        is_svc: svc_modes[new_mode],
        is_ext: new_mode==='ext',
        'svc.detected': !!be_svc.get('version'),
        'svc.version': be_svc.get('version'),
        'svc.cid': be_svc.get('cid'),
        'svc.session_key_cid': be_svc.get('session_key_cid'),
        'svc.info': be_svc.get('info'),
        'svc.type': be_svc.get('type'),
        'svc.ws_port': be_svc.get('ws_port'),
        'svc.callback_raw': be_svc.get('callback_raw'),
        'svc.callback_ts': be_svc.get('callback_ts'),
        // XXX amir: confusing name, maybe rename to svc_accel_enabled
        'svc.protocol_enabled': be_svc.get('status.protocol.enabled'),
        'plugin.final_error': !!be_plugin.get('final_error'),
    });
    if (mode_changed)
        change.ts = Date.now();
    E.safe_set(change);
    be_bg_main.safe_set(change);
    if (mode_changed)
    {
        if (new_mode!='ext')
            storage.set('last_mode', new_mode);
        zerr.info('mode set to '+new_mode);
        be_lib.perr_err({id: 'mode_change', info: {
            new_mode: new_mode,
            protocol_connected: be_svc.get('status.protocol.connected'),
            session_key_cid: be_svc.get('session_key_cid'),
            cid: be_svc.get('cid'),
            svc_type: svc_type,
        }});
        E.set('mode_change_count', (E.get('mode_change_count') || 0) + 1);
    }
    be_svc.stop_collect_stats();
    if (E.get('svc.detected'))
        be_svc.start_collect_stats();
}

E.init = function(){
    E.listenTo(be_svc, 'all', update_mode);
    E.listenTo(be_plugin, 'change:running change:final_error', update_mode);
    update_mode();
};

E.svc = {};
E.svc.version_cmp = function(ver){
    return version_util.version_cmp(E.get('svc.version')||'', ver); };

E.uninit = function(){
    E.stopListening(); };

return E; });
