// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
(function(){
var chrome = window.chrome;
var E = {install_details: {}};

function install_listener_add(){
    if (!chrome)
	return;
    if (!chrome.runtime)
    {
        // XXX bahaa/shachar: debugging wierd perrs
        window.hola.base.perr({id: 'be_no_runtime',
            info: location.href+' '+Object.keys(chrome)});
        return;
    }
    chrome.runtime.onInstalled.addListener(function(details){
        E.install_details.reason = details.reason; });
}

function _init(conf, zon_config){
    var now = Date.now();
    window.hola.t = {l_start: now};
    try { localStorage.setItem('up_ts', now); } catch(e){}
    /* XXX arik BACKWARD: <1.2.27 extensions required be_ver in be_config */
    window.hola.no_be_ver = true;
    window.conf = conf;
    window.zon_config = zon_config;
    window.be_bg = E;
    try {
        // XXX bahaa BACKWARD: this is no longer used. just remove if
        // previously set by older version
        localStorage.removeItem('tmp_not_plugin');
        localStorage.removeItem('set_tmp_not_plugin');
    } catch(err){}
    require(['be_config', 'be_ver'], function(be_config, be_ver){
	be_config.init(be_ver.ver, '');
	require(['/svc/pub/be_bg_main.js'], function(be_bg_main){
	    window.be_bg_main = be_bg_main; /* XXX arik: rm */
	    be_bg_main.init();
	});
    });
}

function init(){
    install_listener_add();
    require.config({waitSeconds: 0, enforceDefine: true});
    require.onError = window.hola.base.require_on_error;
    if (top.be_test_page)
        return void _init(top.hola.conf, top.hola.zon_config);
    require(['conf', 'zon_config'], _init);
}

init();

})();
