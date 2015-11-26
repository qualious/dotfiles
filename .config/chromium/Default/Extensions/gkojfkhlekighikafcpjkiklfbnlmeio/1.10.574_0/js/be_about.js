// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
// XXX bahaa HACK: unite with be_popup.js
(function(){

function _init(conf, zon_config){
    window.hola.t = {l_start: Date.now()};
    // XXX arik BACKWARD: <1.1.895 old extensions required be_ver in be_config
    window.hola.no_be_ver = true;
    // XXX arik: try to avoid using globals
    window.conf = conf;
    window.zon_config = zon_config;
    window.is_popup = true; // XXX arik: review
    require(['be_config', 'be_ver'], function(be_config, be_ver){
        be_config.init(be_ver.ver, '');
        require(['/svc/pub/be_about_main.js'], function(be_about_main){
            window.be_about_main = be_about_main;
            be_about_main.init();
        });
    });
}

function init(){
    require.config({waitSeconds: 0});
    require.onError = window.hola.base.require_on_error;
    require(['conf', 'zon_config'], _init);
}

init();

})();
