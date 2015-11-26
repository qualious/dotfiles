// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
(function(){
/* XXX arik BACKWARD: rm this file. old extensions used it to load but new
 * extensions use be_rmt directly */
/* XXX arik: rm popup.update_rules, before doing it need to fix ccgi.js so it
 * will not send update_rules message to the extension. currently we call
 * popup.update_rules() from pkg/bext/chrome/js/background.js - need to rm
 * it from there and implement RMT message handler */
/* XXX arik: grep all usage of window.* and try to rm all */
window.popup = {
    update_rules: function(){ return window.RMT.update_rules(false); } };
/* XXX arik BACKWARD: extensions < 1.1.326 used bg_rmt to detect that
 * background.js was loaded succesfuly. new extensions use RMT instead */
window.bg_rmt = {};
var conf = window.conf;
function load_js(url, onload_cb){
    var timer, scripts = document.getElementsByTagName('script');
    if (!scripts)
        throw new Error('no scripts section');
    var s = document.createElement('script');
    s.async = true;
    s.className = 'script_not_loaded';
    s.src = url;
    scripts[0].parentNode.appendChild(s);
    s.onload = function(){
	console.log(url+' was loaded');
        s.className = 'script_loaded';
	timer = clearTimeout(timer);
	if (onload_cb)
	    onload_cb();
    };
    timer = setTimeout(function(){ console.error('rmt_load_js_err '+url); },
	20000);
    return s;
}

function load_rmt(){
    require.config({baseUrl: conf.url_bext, waitSeconds: 30,
	urlArgs: 'rand='+Math.random()});
    require(['be_ver'], function(be_ver){
	require.config({baseUrl: conf.url_bext, waitSeconds: 30,
	    urlArgs: 'ver='+be_ver.ver});
        require(['be_config'], function(be_config){
	    require(['/svc/pub/be_rmt.js'], function(be_rmt){
		window.RMT = be_rmt;
		window.RMT.init();
	    });
	});
    });
}

if (!window.require)
{
    /* XXX arik BACKWARD: old extensions (< 1.1.367) didn't use require */
    load_js('https://holaalt-holanetworksltd.netdna-ssl.com/require.js',
        require_onload);
}
else
    require_onload();

function require_onload(){
    require.onError = function(err){
	console.error('rmt_require_err %s %s %o', err.message,
	    err.requireModules, err);
	throw err;
    };
    require.undef('be_tabs');
    require.undef('be_browser');
    require.undef('be_util');
    require.undef('be_ext');
    require.undef('zerr');
    require.undef('etask');
    load_rmt();
}

})();
