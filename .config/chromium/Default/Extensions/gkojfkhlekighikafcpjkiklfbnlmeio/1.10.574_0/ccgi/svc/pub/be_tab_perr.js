// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
// XXX colin: clean unused require
define(['jquery', 'underscore', 'backbone', '/svc/pub/be_backbone.js',
    '/util/etask.js', '/svc/pub/be_util.js', '/svc/pub/be_tabs.js',
    '/svc/pub/be_ext.js', '/protocol/pac_engine.js', '/svc/pub/be_browser.js',
    '/svc/util.js', '/util/version_util.js',
    '/util/escape.js', '/svc/pub/be_lib.js', '/util/url.js', '/util/date.js',
    '/util/zerr.js', '/util/browser.js', '/svc/pub/be_vpn_util.js',
    '/svc/pub/be_defines.js', '/util/ajax.js', '/util/user_agent.js',
    '/svc/pub/be_agent.js', '/util/util.js', '/svc/pub/be_pac.js',
    '/util/array.js', '/util/attrib.js', '/svc/pub/unblocker_lib.js'],
    function($, _, Backbone, be_backbone, etask, be_util, be_tabs, be_ext,
    pac_engine, B, svc_util, version_util, zescape, be_lib, zurl,
    date, zerr, zbrowser, be_vpn_util, be_defines, ajax,
    user_agent, be_agent, zutil, be_pac, array, attrib, unblocker_lib){
B.assert_bg('be_tab_perr');
var E = new (be_backbone.model.extend({
    _defaults: function(){ this.on('destroy', function(){ E.uninit(); }); },
}))();
var cb_wrapper = zerr.catch_unhandled_exception;

function google_captcha_send_perr(url){
    var _url = url.split('.'), id;
    if (_url[1]!='google' && _url[2]!='google')
        return;
    var m = url.match(/[^?#]*/);
    if (/\/sorry\/IndexRedirect$/.test(m[0]))
        id = 'google_cap_indexredirect';
    if (/\/websearch\/answer\/86640$/.test(m[0]))
        id = 'google_cap_support';
    if (id && be_vpn.rule_get(url))
        id = id+'_enabled_google_rule';
    if (id)
        be_lib.perr_err({id: id});
}

var on_tab_created = cb_wrapper(function(o){
    var tab = o.tab;
    if (tab.url)
	return;
    google_captcha_send_perr(tab.url);
});

var on_tab_updated = cb_wrapper(function(o){
    var info = o.info;
    if (!info || !info.url)
	return;
    google_captcha_send_perr(info.url);
});

var on_tab_replaced = cb_wrapper(function(o){
    var added = o.added;
    B.tabs.get(added, function(tab){
	if (!tab || !tab.url)
	    return;
        google_captcha_send_perr(tab.url);
    });
});

// XXX colin: copied from be_tab_unblocker
function update_state(){
    var is_enabled = be_ext.get('r.ext.enabled');
    if (is_enabled==E.is_enabled)
        return;
    E.is_enabled = is_enabled;
    E.stopListening(be_tabs);
    if (!E.is_enabled)
        return;
    E.listenTo(be_tabs, 'created', on_tab_created);
    E.listenTo(be_tabs, 'updated', on_tab_updated);
    E.listenTo(be_tabs, 'replaced', on_tab_replaced);
}

E.uninit = function(){
    if (!E.inited)
	return;
    E.sp.ereturn();
    E.inited = 0;
    E.stopListening();
    be_vpn = null;
};

var be_vpn;
E.init = function(_be_vpn){
    if (E.inited)
	return;
    be_vpn = _be_vpn;
    E.sp = etask('be_tab_perr', [function(){ return this.wait(); }]);
    E.inited = 1;
    E.listen_to(be_ext, 'change:r.ext.enabled', update_state);
};

return E; });
