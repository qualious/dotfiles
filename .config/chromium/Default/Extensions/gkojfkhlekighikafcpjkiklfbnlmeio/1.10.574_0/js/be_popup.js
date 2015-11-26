// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define([], function(){

function _init(conf, zon_config, opt){
    opt = opt||{};
    window.hola.t = {l_start: Date.now()};
    window.hola.tpopup_opt = opt;
    // XXX arik BACKWARD: <1.1.895 old extensions required be_ver in be_config
    window.hola.no_be_ver = true;
    // XXX arik: try to avoid using globals
    // XXX bahaa HACK: fix CORS properly
    if (window.is_tpopup && location.protocol==='https:')
        conf.url_ccgi = conf.url_ccgi.replace(/^http:/, 'https:');
    window.conf = conf;
    window.zon_config = zon_config;
    window.is_popup = true; // XXX arik: review
    if (opt.ver)
        require.config({urlArgs: 'ver='+opt.ver});
    require(['be_config'].concat(opt.ver ? [] : 'be_ver'),
        function(be_config, be_ver){
	be_config.init(opt.ver||be_ver.ver, '');
	require(['/svc/pub/be_popup_main.js'], function(be_popup_main){
	    window.be_popup_main = be_popup_main;
	    be_popup_main.init();
	});
    });
}

function conf_by_msg(){
    window.addEventListener('message', function cb(e){
        // XXX alexeym: find a way to load extension id for tpopup
        // to check e.origin
        var msg = e.data;
        if (!msg || msg.id!=='tpopup.init')
            return;
        window.removeEventListener('message', cb);
        _init(msg.conf, msg.zon_config, msg);
    }, false);
    parent.postMessage({id: 'tpopup.init'}, '*');
}

function init(){
    if (!window.is_tpopup)
        window.hola.base.perr({id: 'be_popup_create'});
    require.config({waitSeconds: 0, enforceDefine: true});
    require.onError = window.hola.base.require_on_error;
    if (window.is_tpopup)
        return void conf_by_msg();
    if (top.be_test_page)
        return void _init(top.hola.conf, top.hola.zon_config);
    require(['conf', 'zon_config'], _init);
}

init(); });
