// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['underscore', '/util/etask.js', '/svc/pub/be_browser.js',
    '/util/zerr.js', '/svc/pub/be_util.js', '/util/storage.js'],
    function(_, etask, B, zerr, be_util, storage){
B.assert_popup('be_popup_lib');
var chrome = window.chrome, conf = window.conf;
var E = {};

/* XXX arik: mv to be_util so we can reuse code with be_lib.js */
E.perr = function(level, opt){
    var bg_main, ver;
    var id = opt.id, info = opt.info, bt = opt.bt, filehead = opt.filehead;
    var qs = {ext_ver: be_util.version(), product: be_util.get_product()};
    var ui_popup = window.ui_popup;
    var R = ui_popup && ui_popup.R;
    bg_main = window.popup_main ? window.popup_main.be_bg_main : null;
    ver = be_util.version();
    opt.data = {bt: bt, info: info, filehead: filehead, ver: ver,
	build: be_util.build()};
    if (R)
        qs.rmt_ver = R.get('ver');
    if (bg_main)
    {
	qs.uuid = bg_main.get('uuid');
	qs.cid = bg_main.get('svc.cid');
	qs.browser = bg_main.get('browser');
	qs.session_key = bg_main.get('session_key');
    }
    else
	zerr('cannot get information for perr %s %s', id, info);
    if (!qs.uuid)
	qs.uuid = storage.get('uuid');
    if (!qs.browser)
	qs.browser = be_util.browser();
    qs.id = be_util.perr_id(id);
    opt.qs = qs;
    opt.level = level;
    return etask([function(){ return zerr.perr(qs.id, info, opt);
    }, function(r){
        be_util.do_op(r&&r.do_op);
        return r;
    }]);
};

/* XXX arik: obsolete api, rm */
E.ok = function(id, info){ return E.perr_ok({id: id, info: info}); };
E.perr_ok = function(opt){ return E.perr(zerr.L.NOTICE, opt); };
/* XXX arik: obsolete api, rm */
E.err = function(id, info, err){
    return E.perr_err({id: id, info: info, err: err}); };
E.perr_err = function(opt){
    var err = opt.err;
    if ((err&&err.message)=='load_new_ver')
	return zerr.notice('drop perr %s %s', opt.id, zerr.json(opt.info));
    opt.bt = err ? err.stack : opt.bt;
    opt.filehead = opt.filehead;
    E.perr(zerr.L.ERR, opt);
};

E.serr = function(with_log){
    return be_util.serr({with_log: with_log,
        rmt: window.ui_popup ? window.ui_popup.R : null,
        bg_main: window.popup_main ? window.popup_main.be_bg_main : null});
};

E.reload_ext = function(opt){
    setTimeout(function(){ E.reload_ext.force(); }, 500);
    E.perr_err({id: 'be_popup_reload_ext', rate_limit: {count: 20},
        info: (window.require_is_remote ? 'r.' : 'l.')+opt.info},
	new Error(''));
};

E.reload_ext.force = function(){
    try { zerr.notice('going for full reload'); } catch(err){}
    B.be.reload_ext();
};

return E; });
