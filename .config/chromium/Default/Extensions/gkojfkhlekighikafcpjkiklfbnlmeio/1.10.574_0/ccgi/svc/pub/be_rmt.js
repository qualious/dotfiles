// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
/* XXX arik BACKWARD: extension <= 1.1.834 didn't set require_is_remote */
window.require_is_remote = true;
// XXX arik: get list (dynamically). need to check all main versions
if (require.support_path)
{
    // XXX zhu hack: fix RMT usage. need to create new window.hola.be_rmt_ext
    define(['be_rmt_ext'], function(be_rmt_ext){ return be_rmt_ext; });
}
else
{
// workaround for old extensions (<1.4.263), old extensions have local copy of
// some modules
define(['jquery', 'purl', 'spin', 'underscore', 'backbone', 'bootstrap',
    'be_config', 'be_ver'],
    function($, purl, spin, underscore, backbone, bootstrap, be_config,
    be_ver){
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
    window.RMT = undefined;
    define('jquery', function(){ return $; });
    define('purl', function(){ return purl; });
    define('spin', function(){ return spin; });
    define('underscore', function(){ return underscore; });
    define('backbone', function(){ return backbone; });
    define('bootstrap', function(){ return bootstrap; });
    define('be_config', function(){ return be_config; });
    define('be_ver', function(){ return be_ver; });
    require.config(be_config.config);
    require(['/svc/pub/be_rmt_ext.js'], function(be_rmt_ext){
        window.RMT = be_rmt_ext;
	be_rmt_ext.init();
    });
};
// XXX zhu hack: use MD5 and cdn
script[0].src = 'https://client.hola.org/bext/require.js?ver='+be_ver.ver;
E.init = function(){};
return E; });
}

