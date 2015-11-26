// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
(function(){ // XXX BACKWARD: fixups for old versions
    var chrome = window.chrome;
    window.is_popup = window.is_popup ||
        (chrome && chrome.extension.getBackgroundPage &&
        chrome.extension.getBackgroundPage()!==window);
    if (!window.is_popup) // XXX arik BACKWARD: popup cache preload in bg
        return;
    // XXX arik BACKWARD: extension <= 1.1.834 didn't set require_is_remote
    window.require_is_remote = true;
    // XXX arik BACKWARD: old extensions (before 1.1.834) didn't define
    // that purl depends on jquery so somtimes it was loaded before jquery
    // and we don't have $.url
    if (!window.$ || !window.$.url)
	require.undef('purl');
})();

if (require.support_path)
{
    define(['be_ui_popup_ext'], function(be_ui_popup_ext){
	return be_ui_popup_ext; });
}
else
{
// workaround for old extensions (<1.4.263), old extensions have local copy of
// some modules
define(['jquery', 'purl', 'spin', 'underscore', 'backbone', 'bootstrap',
    'be_config', 'be_ver'], function($, purl, spin, underscore, backbone,
    bootstrap, be_config, be_ver){
var E = {};
window.requirejs = window.require = window.define = undefined;
// remove scripts to prevent them from being loaded again
$('script').each(function(){ this.remove(); });
var script = $('<script>');
// the order below is important
// 1. add to DOM tree
// 2. set onload
// 3. set src
$('head').append(script);
script[0].onload = function(){
    define('jquery', function(){ return $; });
    define('purl', function(){ return purl; });
    define('spin', function(){ return spin; });
    define('underscore', function(){ return underscore; });
    define('backbone', function(){ return backbone; });
    define('bootstrap', function(){ return bootstrap; });
    define('be_config', function(){ return be_config; });
    define('be_ver', function(){ return be_ver; });
    require.config(be_config.config);
    require(['be_ui_popup_ext'], function(be_ui_popup){
        be_ui_popup.init();
    });
};
// XXX zhu hack: use MD5 and cdn
script[0].src = 'https://client.hola.org/bext/require.js?ver='+be_ver.ver;
E.init = function(){};
return E; });
}
