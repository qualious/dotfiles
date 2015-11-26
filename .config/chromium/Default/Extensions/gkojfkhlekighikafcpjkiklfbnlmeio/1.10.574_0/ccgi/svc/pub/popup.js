// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
// XXX arik BACKWARD: rm this file. old extensions used it to load but new
// extensions use be_ui_popup directly
(function(){
var chrome = window.chrome;
var BG = (chrome && chrome.extension.getBackgroundPage())||{};
var RMT = BG.RMT, util = BG.util;
var conf = window.conf = window.conf||BG.conf;
window.zon_config = window.zon_config||BG.zon_config||BG;
window.is_popup = true;

function load_js(url, onload_cb){
    var timer, scripts = document.getElementsByTagName('script');
    if (!scripts) /* XXX arik: decide what to do */
	return null;
    var s = document.createElement('script');
    s.async = true;
    s.className = 'script_not_loaded';
    /* XXX arik: handle error in loading/auto-reload */
    s.src = url;
    scripts[0].parentNode.appendChild(s);
    s.onload = function(){
	console.log(url+' was loaded');
        s.className = 'script_loaded';
	timer = clearTimeout(timer);
	if (onload_cb)
	    onload_cb();
    };
    /* XXX arik: need perrs for failing to load js also in local bext */
    timer = setTimeout(function(){ throw new Error('rmt_load_js_err'+url); },
	20000);
    return s;
}

function reload_ext_local(){
    if (util && util.is_plugin() && chrome.runtime.reload)
	return chrome.runtime.reload();
    BG.location.reload();
    window.close();
}

function load_popup(){
    require.config({baseUrl: conf.url_bext, waitSeconds: 30,
	urlArgs: 'rand='+Math.random()});
    if (RMT)
    {
        if (!RMT.be_config) /* XXX arik BACKWARD: < 1.1.524 */
	    reload_ext_local();
        require.config(RMT.be_config.config);
	require(['/svc/pub/be_ui_popup.js'], function(be_ui_popup){
            be_ui_popup.init(); });
	return;
    }
    require(['be_ver'], function(be_ver){
	require.config({baseUrl: conf.url_bext, waitSeconds: 30,
	    urlArgs: 'ver='+be_ver.ver});
        require(['be_config'], function(be_config){
	    require(['/svc/pub/be_ui_popup.js'], function(be_ui_popup){
		be_ui_popup.init(); });
	});
    });
}

/* XXX arik BACKWARD: duplicated code from be_config.js for old chrome ext */
function require_on_error(err){
    var i, modules = err.requireModules;
    require_on_error.err = require_on_error.err||{};
    for (i=0; i<modules.length; i++)
    {
	var m = modules[i];
	if (require_on_error.err[m])
	{
	    console.error('require fatal error, module '+m+'\n'+err.stack);
	    /* XXX arik: send perr */
	    throw err;
	}
	console.error('require module '+m+' failed retry in 2 sec');
	require_on_error.err[m] = {failed: 1};
	require.undef(m);
	setTimeout(function(){ require([m], function(){}); }, 2000);
    }
}

function onload(){
    require.onError = require_on_error;
    load_popup();
}

if (!window.require)
{
    load_js('https://holaalt-holanetworksltd.netdna-ssl.com/require.js',
        onload);
}
else
    onload();

})();
