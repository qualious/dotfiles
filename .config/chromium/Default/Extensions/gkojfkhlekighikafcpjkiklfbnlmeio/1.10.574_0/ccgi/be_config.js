// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define([window.hola && window.hola.no_be_ver ? null : 'be_ver'],
    function(be_ver){
var chrome = window.chrome;
if (!window.conf || !window.zon_config)
{
    // XXX bahaa BACKWARD: old chrome versions
    var BG = chrome.extension.getBackgroundPage();
    window.conf = window.conf||BG.conf;
    window.zon_config = window.zon_config||BG.zon_config||BG;
}
var conf = window.conf, zconf = window.zon_config;
var perr_url = '{[=1]}'==='1' && '{[=it.perr_url]}' || 'perr.hola.org';
conf.url_perr = conf.url_perr||'https://'+perr_url+'/client_cgi';
var is_local = require_is_local();
var is_local_ccgi = window.is_local_ccgi;
var no_chrome_mp = window.no_chrome_mp;
var E = {modules: {be_ver: {name: 'be_ver'}, be_config: {name: 'be_config'}}};

function require_is_local(){
    return !window.require_is_remote && is_local_url(location.href); }

function is_local_url(url){
    return /^(chrome-extension|resource|file):\/\//.test(url); }

function extend(obj){
    for (var i=1; i<arguments.length; i++)
    {
	var source = arguments[i];
	if (!source)
	    continue;
        for (var prop in source)
	    obj[prop] = source[prop];
    }
    return obj;
}

function get_paths(cdn, base_url, ver, alt_cdn){
    function c(){ return arguments[alt_cdn]; }
    function fix_file_paths(files){
        // XXX romank: for FF we cannot place files in root directory
        // for chrome changing this path will break injections on old version
        // since we inject local file (js/jquery.min) from remote script
        // (be_iframe), need version comparasion
        var name, l = !chrome ? '/hola_firefox_ext/data' : '/js';
        var root = is_local ? l : is_local_ccgi ? '/ccgi' : base_url;
        var re = /^BASE(?:{\[MD5 (\/.*?)\]})?(.*)?$/;
        for (name in files)
            files[name] = files[name].replace(re, root+'$1$2');
        return files;
    }
    var f = {
        local: {
            typeahead: 'typeahead',
            text: 'BASE/requirejs.text.js',
            // XXX romank: baseUrl ignored for absolute path
            events: 'BASE/util/events',
            // XXX romank: entry points/injections, check later
            '/svc/pub/be_popup.js': 'BASE/be_popup.js',
            '/svc/pub/be_bg.js': 'BASE/be_bg.js',
            '/svc/pub/cs_hola.js': 'BASE/cs_hola.js',
            // http://stackoverflow.com/a/15392880
            'views/share': 'BASE/views/share.html?noext',
            'views/cross_sale': 'BASE/views/cross_sale.html?noext',
        },
        local_ccgi: {
            typeahead: 'typeahead.bundle.min',
            jschardet: 'BASE/svc/pub/jschardet.min.js',
        },
        local_common: {
            jquery: 'jquery.min',
            jquery_cookie: 'jquery.cookie.min',
            spin: 'spin.min',
            purl: 'purl',
            underscore: 'underscore.min',
            backbone: 'backbone.min',
            bootstrap: 'bootstrap',
        },
        remote: {
            jquery: c(cdn+'/jquery/1.11.1/jquery.min',
                cdn+'{[MD5 /jquery.min.js]}'),
            jquery_cookie: c(cdn+'/jquery-cookie/1.4.0/jquery.cookie.min',
                cdn+'{[MD5 /jquery.cookie.min.js]}'),
            spin: c(cdn+'/spin.js/1.2.7/spin.min',
                cdn+'{[MD5 /spin.min.js]}'),
            purl: c(cdn+'/jquery-url-parser/2.2.1/purl.min',
                cdn+'{[MD5 /purl.min.js]}'),
            underscore: c(cdn+'/underscore.js/1.4.4/underscore-min',
                cdn+'{[MD5 /underscore-min.js]}'),
            backbone: c(cdn+'/backbone.js/1.0.0/backbone-min',
                cdn+'{[MD5 /backbone-min.js]}'),
            bootstrap: c(cdn+'/twitter-bootstrap/3.1.1/js/bootstrap.min',
                cdn+'{[MD5 /bootstrap.min.js]}'),
            typeahead: c(cdn+'/typeahead.js/0.10.2/typeahead.bundle.min',
                cdn+'{[MD5 /typeahead.bundle.min.js]}'),
            // XXX arik: get from cdn
            jschardet: base_url+'{[MD5 /svc/pub/jschardet.min.js]}',
            text: 'BASE{[MD5 /requirejs.text.js]}',
            'views/share': 'BASE{[MD5 /svc/pub/views/share.html]}',
            'views/cross_sale': 'BASE{[MD5 /svc/pub/views/cross_sale.html]}',
        },
        remote_common: {
            // be_ver should never be required from cdn
            be_ver: conf.url_bext+'/be_ver',
            zon_config: 'BASE{[MD5 /zon_config.js]}',
            '/protocol/countries.js': 'BASE{[MD5 /protocol/countries.js]}',
            '/protocol/pac_engine.js': 'BASE{[MD5 /protocol/pac_engine.js]}',
            '/util/country.js': 'BASE{[MD5 /util/country.js]}',
            '/util/events.js': 'BASE{[MD5 /util/events.js]}',
            '/util/hash.js': 'BASE{[MD5 /util/hash.js]}',
            '/util/lang.js': 'BASE{[MD5 /util/lang.js]}',
            '/svc/account/membership.js':
                'BASE{[MD5 /svc/account/membership.js]}',
            '/svc/pub/jquery.xmlrpc.js':
                'BASE{[MD5 /svc/pub/jquery.xmlrpc.js]}',
            '/svc/mp/pub/msg.js': 'BASE{[MD5 /svc/mp/pub/msg.js]}',
            '/svc/mp/pub/www_storage.js':
                'BASE{[MD5 /svc/mp/pub/www_storage.js]}',
            '/svc/pub/background.js': 'BASE{[MD5 /svc/pub/background.js]}',
            '/svc/pub/be_about.js': 'BASE{[MD5 /svc/pub/be_about.js]}',
            '/svc/pub/be_about_main.js':
                'BASE{[MD5 /svc/pub/be_about_main.js]}',
            '/svc/pub/be_agent.js': 'BASE{[MD5 /svc/pub/be_agent.js]}',
            '/svc/pub/be_auto_rule.js': 'BASE{[MD5 /svc/pub/be_auto_rule.js]}',
            '/svc/pub/be_base.js': 'BASE{[MD5 /svc/pub/be_base.js]}',
            '/svc/pub/be_bg.js': 'BASE{[MD5 /svc/pub/be_bg.js]}',
            '/svc/pub/be_ccgi.js': 'BASE{[MD5 /svc/pub/be_ccgi.js]}',
            '/svc/pub/be_defines.js': 'BASE{[MD5 /svc/pub/be_defines.js]}',
            '/svc/pub/be_ext.js': 'BASE{[MD5 /svc/pub/be_ext.js]}',
            '/svc/pub/be_features.js': 'BASE{[MD5 /svc/pub/be_features.js]}',
            '/svc/pub/be_firefox.js': 'BASE{[MD5 /svc/pub/be_firefox.js]}',
            '/svc/pub/be_icon.js': 'BASE{[MD5 /svc/pub/be_icon.js]}',
            '/svc/pub/be_iframe.js': 'BASE{[MD5 /svc/pub/be_iframe.js]}',
            '/svc/pub/be_info.js': 'BASE{[MD5 /svc/pub/be_info.js]}',
            '/svc/pub/be_main.js': 'BASE{[MD5 /svc/pub/be_main.js]}',
            '/svc/pub/be_pac.js': 'BASE{[MD5 /svc/pub/be_pac.js]}',
            '/svc/pub/be_plugin.js': 'BASE{[MD5 /svc/pub/be_plugin.js]}',
            '/svc/pub/be_ff_plugin.js': 'BASE{[MD5 /svc/pub/be_ff_plugin.js]}',
            '/svc/pub/be_popup.js': 'BASE{[MD5 /svc/pub/be_popup.js]}',
            '/svc/pub/be_premium.js': 'BASE{[MD5 /svc/pub/be_premium.js]}',
            '/svc/pub/be_rmt.js': 'BASE{[MD5 /svc/pub/be_rmt.js]}',
            '/svc/pub/be_rmt_ext.js': 'BASE{[MD5 /svc/pub/be_rmt_ext.js]}',
            '/svc/pub/be_rule.js': 'BASE{[MD5 /svc/pub/be_rule.js]}',
            '/svc/pub/be_rules.js': 'BASE{[MD5 /svc/pub/be_rules.js]}',
            '/svc/pub/be_slave.js': 'BASE{[MD5 /svc/pub/be_slave.js]}',
            '/svc/pub/be_social.js': 'BASE{[MD5 /svc/pub/be_social.js]}',
            '/svc/pub/be_svc.js': 'BASE{[MD5 /svc/pub/be_svc.js]}',
            '/svc/pub/be_mode.js': 'BASE{[MD5 /svc/pub/be_mode.js]}',
            '/svc/pub/be_tabs.js': 'BASE{[MD5 /svc/pub/be_tabs.js]}',
            '/svc/pub/be_tab_perr.js': 'BASE{[MD5 /svc/pub/be_tab_perr.js]}',
            '/svc/pub/be_tab_unblocker.js':
                'BASE{[MD5 /svc/pub/be_tab_unblocker.js]}',
            '/svc/pub/be_tpopup.js': 'BASE{[MD5 /svc/pub/be_tpopup.js]}',
            '/svc/pub/be_ui_popup_ext.js':
                'BASE{[MD5 /svc/pub/be_ui_popup_ext.js]}',
            '/svc/pub/be_ui_vpn.js': 'BASE{[MD5 /svc/pub/be_ui_vpn.js]}',
            '/svc/pub/be_ui_svc_require.js':
                'BASE{[MD5 /svc/pub/be_ui_svc_require.js]}',
            '/svc/pub/be_ui_accel.js': 'BASE{[MD5 /svc/pub/be_ui_accel.js]}',
            '/svc/pub/be_vpn.js': 'BASE{[MD5 /svc/pub/be_vpn.js]}',
            '/svc/pub/be_vpn_util.js': 'BASE{[MD5 /svc/pub/be_vpn_util.js]}',
            '/svc/pub/be_rule_rating.js':
                'BASE{[MD5 /svc/pub/be_rule_rating.js]}',
            '/svc/pub/be_zerr.js': 'BASE{[MD5 /svc/pub/be_zerr.js]}',
            '/svc/pub/unblocker_lib.js':
                'BASE{[MD5 /svc/pub/unblocker_lib.js]}',
            '/svc/pub/cs_hola.js': 'BASE{[MD5 /svc/pub/cs_hola.js]}',
            '/svc/pub/ga.js': 'BASE{[MD5 /svc/pub/ga.js]}',
            '/svc/pub/popup.js': 'BASE{[MD5 /svc/pub/popup.js]}',
            '/svc/pub/torch_whitelist.js':
                'BASE{[MD5 /svc/pub/torch_whitelist.js]}',
            '/svc/pub/search.js': 'BASE{[MD5 /svc/pub/search.js]}',
            '/svc/pub/sharing.js': 'BASE{[MD5 /svc/pub/sharing.js]}',
            '/svc/pub/wbm_flags.js': 'BASE{[MD5 /svc/pub/wbm_flags.js]}',
        },
        common: {
            '/util/ajax.js': 'BASE{[MD5 /util/ajax.js]}',
            '/util/array.js': 'BASE{[MD5 /util/array.js]}',
            '/util/attrib.js': 'BASE{[MD5 /util/attrib.js]}',
            '/util/browser.js': 'BASE{[MD5 /util/browser.js]}',
            '/util/conv.js': 'BASE{[MD5 /util/conv.js]}',
            '/util/csrf.js': 'BASE{[MD5 /util/csv.js]}',
            '/util/csv.js': 'BASE{[MD5 /util/csv.js]}',
            '/util/date.js': 'BASE{[MD5 /util/date.js]}',
            '/util/es6_shim.js': 'BASE{[MD5 /util/es6_shim.js]}',
            '/util/escape.js': 'BASE{[MD5 /util/escape.js]}',
            '/util/etask.js': 'BASE{[MD5 /util/etask.js]}',
            '/util/hash.js': 'BASE{[MD5 /util/hash.js]}',
            '/util/jquery_ajax_ie.js': 'BASE{[MD5 /util/jquery_ajax_ie.js]}',
            '/util/jquery_ajax_binary.js':
                'BASE{[MD5 /util/jquery_ajax_binary.js]}',
            '/util/match.js': 'BASE{[MD5 /util/match.js]}',
            '/util/rand.js': 'BASE{[MD5 /util/rand.js]}',
            '/util/rate_limit.js': 'BASE{[MD5 /util/rate_limit.js]}',
            '/util/sprintf.js': 'BASE{[MD5 /util/sprintf.js]}',
            '/util/storage.js': 'BASE{[MD5 /util/storage.js]}',
            '/util/strftime.js': 'BASE{[MD5 /util/strftime.js]}',
            '/util/string.js': 'BASE{[MD5 /util/string.js]}',
            '/util/typedarray_shim.js': 'BASE{[MD5 /util/typedarray_shim.js]}',
            '/util/url.js': 'BASE{[MD5 /util/url.js]}',
            '/util/user_agent.js': 'BASE{[MD5 /util/user_agent.js]}',
            '/util/util.js': 'BASE{[MD5 /util/util.js]}',
            '/util/version_util.js': 'BASE{[MD5 /util/version_util.js]}',
            '/util/zdot.js': 'BASE{[MD5 /util/zdot.js]}',
            '/util/zerr.js': 'BASE{[MD5 /util/zerr.js]}',
            '/svc/svc_ipc.js': 'BASE{[MD5 /svc/svc_ipc.js]}',
            '/svc/util.js': 'BASE{[MD5 /svc/util.js]}',
            '/svc/pub/be_about_main.js':
                'BASE{[MD5 /svc/pub/be_about_main.js]}',
            '/svc/pub/be_backbone.js': 'BASE{[MD5 /svc/pub/be_backbone.js]}',
            '/svc/pub/be_bg_main.js': 'BASE{[MD5 /svc/pub/be_bg_main.js]}',
            '/svc/pub/be_browser.js': 'BASE{[MD5 /svc/pub/be_browser.js]}',
            '/svc/pub/be_chrome.js': 'BASE{[MD5 /svc/pub/be_chrome.js]}',
            '/svc/pub/be_lib.js': 'BASE{[MD5 /svc/pub/be_lib.js]}',
            '/svc/pub/be_locale.js': 'BASE{[MD5 /svc/pub/be_locale.js]}',
            '/svc/pub/be_msg.js': 'BASE{[MD5 /svc/pub/be_msg.js]}',
            '/svc/pub/be_popup_main.js':
                'BASE{[MD5 /svc/pub/be_popup_main.js]}',
            '/svc/pub/be_popup_lib.js': 'BASE{[MD5 /svc/pub/be_popup_lib.js]}',
            '/svc/pub/be_transport.js': 'BASE{[MD5 /svc/pub/be_transport.js]}',
            '/svc/pub/be_ui_obj.js': 'BASE{[MD5 /svc/pub/be_ui_obj.js]}',
            '/svc/pub/be_ui_popup.js': 'BASE{[MD5 /svc/pub/be_ui_popup.js]}',
            '/svc/pub/be_user_nav.js': 'BASE{[MD5 /svc/pub/be_user_nav.js]}',
            '/svc/pub/be_util.js': 'BASE{[MD5 /svc/pub/be_util.js]}',
            '/svc/pub/cs_inject.js': 'BASE{[MD5 /svc/pub/cs_inject.js]}',
            '/svc/pub/locale/be_af.js': 'BASE{[MD5 /svc/pub/locale/be_af.js]}',
            '/svc/pub/locale/be_ar.js': 'BASE{[MD5 /svc/pub/locale/be_ar.js]}',
            '/svc/pub/locale/be_az.js': 'BASE{[MD5 /svc/pub/locale/be_az.js]}',
            '/svc/pub/locale/be_be.js': 'BASE{[MD5 /svc/pub/locale/be_be.js]}',
            '/svc/pub/locale/be_bg.js': 'BASE{[MD5 /svc/pub/locale/be_bg.js]}',
            '/svc/pub/locale/be_bn.js': 'BASE{[MD5 /svc/pub/locale/be_bn.js]}',
            '/svc/pub/locale/be_bs.js': 'BASE{[MD5 /svc/pub/locale/be_bs.js]}',
            '/svc/pub/locale/be_ca.js': 'BASE{[MD5 /svc/pub/locale/be_ca.js]}',
            '/svc/pub/locale/be_cs.js': 'BASE{[MD5 /svc/pub/locale/be_cs.js]}',
            '/svc/pub/locale/be_cy.js': 'BASE{[MD5 /svc/pub/locale/be_cy.js]}',
            '/svc/pub/locale/be_da.js': 'BASE{[MD5 /svc/pub/locale/be_da.js]}',
            '/svc/pub/locale/be_de.js': 'BASE{[MD5 /svc/pub/locale/be_de.js]}',
            '/svc/pub/locale/be_el.js': 'BASE{[MD5 /svc/pub/locale/be_el.js]}',
            '/svc/pub/locale/be_en.js': 'BASE{[MD5 /svc/pub/locale/be_en.js]}',
            '/svc/pub/locale/be_es.js': 'BASE{[MD5 /svc/pub/locale/be_es.js]}',
            '/svc/pub/locale/be_et.js': 'BASE{[MD5 /svc/pub/locale/be_et.js]}',
            '/svc/pub/locale/be_eu.js': 'BASE{[MD5 /svc/pub/locale/be_eu.js]}',
            '/svc/pub/locale/be_fa.js': 'BASE{[MD5 /svc/pub/locale/be_fa.js]}',
            '/svc/pub/locale/be_fi.js': 'BASE{[MD5 /svc/pub/locale/be_fi.js]}',
            '/svc/pub/locale/be_fr.js': 'BASE{[MD5 /svc/pub/locale/be_fr.js]}',
            '/svc/pub/locale/be_ga.js': 'BASE{[MD5 /svc/pub/locale/be_ga.js]}',
            '/svc/pub/locale/be_gl.js': 'BASE{[MD5 /svc/pub/locale/be_gl.js]}',
            '/svc/pub/locale/be_gu.js': 'BASE{[MD5 /svc/pub/locale/be_gu.js]}',
            '/svc/pub/locale/be_he.js': 'BASE{[MD5 /svc/pub/locale/be_he.js]}',
            '/svc/pub/locale/be_hi.js': 'BASE{[MD5 /svc/pub/locale/be_hi.js]}',
            '/svc/pub/locale/be_hr.js': 'BASE{[MD5 /svc/pub/locale/be_hr.js]}',
            '/svc/pub/locale/be_ht.js': 'BASE{[MD5 /svc/pub/locale/be_ht.js]}',
            '/svc/pub/locale/be_hu.js': 'BASE{[MD5 /svc/pub/locale/be_hu.js]}',
            '/svc/pub/locale/be_hy.js': 'BASE{[MD5 /svc/pub/locale/be_hy.js]}',
            '/svc/pub/locale/be_id.js': 'BASE{[MD5 /svc/pub/locale/be_id.js]}',
            '/svc/pub/locale/be_is.js': 'BASE{[MD5 /svc/pub/locale/be_is.js]}',
            '/svc/pub/locale/be_it.js': 'BASE{[MD5 /svc/pub/locale/be_it.js]}',
            '/svc/pub/locale/be_ja.js': 'BASE{[MD5 /svc/pub/locale/be_ja.js]}',
            '/svc/pub/locale/be_ka.js': 'BASE{[MD5 /svc/pub/locale/be_ka.js]}',
            '/svc/pub/locale/be_km.js': 'BASE{[MD5 /svc/pub/locale/be_km.js]}',
            '/svc/pub/locale/be_kn.js': 'BASE{[MD5 /svc/pub/locale/be_kn.js]}',
            '/svc/pub/locale/be_ko.js': 'BASE{[MD5 /svc/pub/locale/be_ko.js]}',
            '/svc/pub/locale/be_lt.js': 'BASE{[MD5 /svc/pub/locale/be_lt.js]}',
            '/svc/pub/locale/be_lv.js': 'BASE{[MD5 /svc/pub/locale/be_lv.js]}',
            '/svc/pub/locale/be_mk.js': 'BASE{[MD5 /svc/pub/locale/be_mk.js]}',
            '/svc/pub/locale/be_mr.js': 'BASE{[MD5 /svc/pub/locale/be_mr.js]}',
            '/svc/pub/locale/be_ms.js': 'BASE{[MD5 /svc/pub/locale/be_ms.js]}',
            '/svc/pub/locale/be_mt.js': 'BASE{[MD5 /svc/pub/locale/be_mt.js]}',
            '/svc/pub/locale/be_nl.js': 'BASE{[MD5 /svc/pub/locale/be_nl.js]}',
            '/svc/pub/locale/be_no.js': 'BASE{[MD5 /svc/pub/locale/be_no.js]}',
            '/svc/pub/locale/be_pl.js': 'BASE{[MD5 /svc/pub/locale/be_pl.js]}',
            '/svc/pub/locale/be_pt_BR.js':
                'BASE{[MD5 /svc/pub/locale/be_pt_BR.js]}',
            '/svc/pub/locale/be_pt.js': 'BASE{[MD5 /svc/pub/locale/be_pt.js]}',
            '/svc/pub/locale/be_ro.js': 'BASE{[MD5 /svc/pub/locale/be_ro.js]}',
            '/svc/pub/locale/be_ru.js': 'BASE{[MD5 /svc/pub/locale/be_ru.js]}',
            '/svc/pub/locale/be_sk.js': 'BASE{[MD5 /svc/pub/locale/be_sk.js]}',
            '/svc/pub/locale/be_sl.js': 'BASE{[MD5 /svc/pub/locale/be_sl.js]}',
            '/svc/pub/locale/be_sq.js': 'BASE{[MD5 /svc/pub/locale/be_sq.js]}',
            '/svc/pub/locale/be_sr.js': 'BASE{[MD5 /svc/pub/locale/be_sr.js]}',
            '/svc/pub/locale/be_sv.js': 'BASE{[MD5 /svc/pub/locale/be_sv.js]}',
            '/svc/pub/locale/be_sw.js': 'BASE{[MD5 /svc/pub/locale/be_sw.js]}',
            '/svc/pub/locale/be_ta.js': 'BASE{[MD5 /svc/pub/locale/be_ta.js]}',
            '/svc/pub/locale/be_te.js': 'BASE{[MD5 /svc/pub/locale/be_te.js]}',
            '/svc/pub/locale/be_th.js': 'BASE{[MD5 /svc/pub/locale/be_th.js]}',
            '/svc/pub/locale/be_tl.js': 'BASE{[MD5 /svc/pub/locale/be_tl.js]}',
            '/svc/pub/locale/be_tr.js': 'BASE{[MD5 /svc/pub/locale/be_tr.js]}',
            '/svc/pub/locale/be_uk.js': 'BASE{[MD5 /svc/pub/locale/be_uk.js]}',
            '/svc/pub/locale/be_ur.js': 'BASE{[MD5 /svc/pub/locale/be_ur.js]}',
            '/svc/pub/locale/be_vi.js': 'BASE{[MD5 /svc/pub/locale/be_vi.js]}',
            '/svc/pub/locale/be_zh_CN.js':
                'BASE{[MD5 /svc/pub/locale/be_zh_CN.js]}',
            '/svc/pub/locale/be_zh_TW.js':
                'BASE{[MD5 /svc/pub/locale/be_zh_TW.js]}',
        },
        mp: {
            '/svc/mp/pub/util.js': 'BASE{[MD5 /svc/mp/pub/util.js]}',
            '/svc/pub/be_mp.js': 'BASE{[MD5 /svc/pub/be_mp.js]}',
            '/svc/pub/be_ui_mp.js': 'BASE{[MD5 /svc/pub/be_ui_mp.js]}',
            '/svc/pub/be_inject.js': 'BASE{[MD5 /svc/pub/be_inject.js]}',
        },
    };
    var p = {};
    if ('{[=1]}'!=='1') // extension init or local ccgi "download"
    {
        if (is_local)
            extend(p, f.local, f.local_common, f.common);
        else if (is_local_ccgi)
        {
            extend(p, f.local_ccgi, f.local_common, f.remote_common, f.common);
            if (!no_chrome_mp)
                extend(p, f.mp);
        }
        return {paths: fix_file_paths(p)};
    }
    // remote ccgi download
    var config = {};
    // XXX romank: do a simplier check for cdn fallback available
    var cdn_list = JSON.parse('{[=json it.cdn_list||[]]}');
    if (cdn_list.length && require.s && require.s.contexts &&
        require.s.contexts._ && require.s.contexts._.config &&
        require.s.contexts._.config.cdn)
    {
        config.cdn = cdn_list;
        base_url = '';
    }
    extend(p, f.remote, f.remote_common, f.common, f.mp);
    config.paths = fix_file_paths(p);
    config.map = {
        events: '/util/events.js',
        '/svc/be_rmt_ext.js': '/svc/pub/be_rmt_ext.js',
        '/svc/be_ui_popup_ext.js': '/svc/pub/be_ui_popup_ext.js',
        // XXX romank: used by old extensions
        pcountries: '/protocol/countries.js',
        pac_engine: '/protocol/pac_engine.js',
        membership: '/svc/account/membership.js',
        svc_util: '/svc/util.js',
        svc_ipc: '/svc/svc_ipc.js',
        ajax: '/util/ajax.js',
        array: '/util/array.js',
        browser: '/util/browser.js',
        country: '/util/country.js',
        conv: '/util/conv.js',
        date: '/util/date.js',
        escape: '/util/escape.js',
        etask: '/util/etask.js',
        hash: '/util/hash.js',
        rand: '/util/rand.js',
        rate_limit: '/util/rate_limit.js',
        sprintf: '/util/sprintf.js',
        storage: '/util/storage.js',
        string: '/util/string.js',
        url: '/util/url.js',
        user_agent: '/util/user_agent.js',
        util: '/util/util.js',
        version_util: '/util/version_util.js',
        zerr: '/util/zerr.js',
        attrib: '/util/attrib.js',
        jquery_ajax_ie: '/util/jquery_ajax_ie.js',
    };
    return config;
}

E.init = function(ver, country){
    if (E.inited)
        return console.error('be_config already inited');
    E.inited = true;
    require.onError = require_on_error;
    require.onResourceLoad = function(context, map, depArray){
        if (E.modules[map.name] && !{be_ver: 1, be_config: 1}[map.name])
        {
            console.error('module %s already loaded. id: %s, url: %s',
                map.name, map.id, map.url);
        }
        E.modules[map.name] = map;
    };
    E.ver = ver;
    var cdn_prefix = 'https://cdnjs.cloudflare.com/ajax/libs';
    var alt_cdn = 0;
    if (['CN', 'IQ', 'RU'].indexOf(country)!=-1)
    {
	cdn_prefix = 'https://holaalt-holanetworksltd.netdna-ssl.com';
	alt_cdn = 1;
    }
    var base_url = zconf._RELEASE ? conf.url_bext_cdn4||conf.url_bext :
        conf.url_bext;
    var require_config = get_paths(cdn_prefix, base_url, ver, alt_cdn);
    E.config = {
        enforceDefine: true,
        ver: ver,
	country: country,
	baseUrl: is_local || is_local_ccgi ? '' : base_url,
	urlArgs: is_local ? 'ver='+ver : '',
	waitSeconds: is_local ? 0 : 30,
        paths: require_config.paths,
	shim: {
	    purl: {deps: ['jquery']},
	    jquery: {exports: '$'},
	    jquery_cookie: {deps: ['jquery']},
	    underscore: {exports: '_'},
	    backbone: {deps: ['jquery', 'underscore'], exports: 'Backbone'},
	    bootstrap: {deps: ['jquery'], exports: 'jQuery.fn.popover'},
	    typeahead: {deps: ['jquery'], exports: 'jQuery.fn.typeahead'},
            '/svc/pub/jquery.xmlrpc.js': {deps: ['jquery'],
                exports: 'jQuery.xmlrpc'},
	},
        config: {
            text: {
                // https://github.com/requirejs/text#xhr-restrictions
                useXhr: function(){ return true; }
            }
        }
    };
    if (require_config.map)
        E.config.map = {'*': require_config.map};
    if (require_config.cdn)
        E.config.cdn = require_config.cdn;
    require.config(E.config);
    define('virt_jquery_all', ['jquery', '/util/jquery_ajax_ie.js',
        '/util/jquery_ajax_binary.js', '/svc/pub/jquery.xmlrpc.js'],
        function(j){ return j; });
};

E.no_undef = ['jquery', 'purl', 'spin', 'underscore', 'backbone',
    'conf', 'zon_config', 'be_bg_main', 'be_popup_main', 'bootstrap',
    'be_main', 'be_plugin'];
E.undef = function(){
    for (var m in E.modules)
    {
	var name = E.modules[m].name;
	if (E.no_undef.indexOf(name)!=-1)
	    continue;
	require.undef(name);
	delete E.modules[m];
    }
};

function perr(opt){
    if (window.be_bg_main && window.be_bg_main.be_lib &&
        window.be_bg_main.be_lib.perr_err)
    {
	return window.be_bg_main.be_lib.perr_err(opt);
    }
    if (window.be_popup_main && window.be_popup_main.be_popup_lib &&
        window.be_popup_main.be_popup_lib.perr_err)
    {
	return window.be_popup_main.be_popup_lib.perr_err(opt);
    }
    if (!window.hola || !window.hola.base)
        return;
    opt.bt = opt.err && opt.err.stack;
    delete opt.err;
    window.hola.base.perr(opt);
}
// XXX romank: merge with be_base.js somehow
function require_on_error(err){
    err = err||{};
    var retries = 3;
    var i, modules = err.requireModules;
    var id = require_is_local() ? 'be_int_require_err' : 'be_require_err';
    require_on_error.err = require_on_error.err||{};
    var perr_sent = require.perr_sent||(require.perr_sent = []);
    err.require_handled = true;
    if (window.hola)
    {
	window.hola.err = window.hola.err||{};
	window.hola.err.require=(window.hola.err.require||0)+1;
    }
    if (!modules)
    {
        id += '_fin';
	console.error('require fatal error '+err.stack);
        if (perr_sent.indexOf(id)<0)
        {
            perr({id: id, info: 'no_modules '+err, err: err});
            perr_sent.push(id);
        }
	return;
    }
    // don't make require retry for local ccgi
    if (!is_local_ccgi)
        return;
    for (i=0; i<modules.length; i++)
    {
	var m = modules[i];
        var filehead = require.toUrl(m);
        // XXX romank: simplify
        var cdn_fallback = require.s && require.s.contexts &&
            require.s.contexts._ && require.s.contexts._.config &&
            require.s.contexts._.config.cdn;
        var path = E.config.paths[m]||m;
        if (/^(http(s)?:)?\/\//.test(path))
            cdn_fallback = false;
        var e = require_on_error.err[m] = require_on_error.err[m]||{failed: 0};
        e.failed++;
	// XXX arik/bahaa hack: rm ver/tpopup from here. need to send it in
	// build in all cases
	var info = m+' failed '+e.failed+' err '+err.requireType
	+(window.is_tpopup ? ' tpopup' : '')+' ver '+E.ver;
        // first perr
        if ((err.fallback===true || e.failed<retries) &&
            perr_sent.indexOf(id)<0)
        {
            perr({id: id, info: info, err: err, filehead: filehead});
            perr_sent.push(id);
        }
        // no fallback available
        if (!cdn_fallback && e.failed<retries)
        {
            require.undef(m);
            require([m]);
        }
        // second perr on third retry or if fallback is not available
        if ((!cdn_fallback && e.failed<retries) || err.fallback)
            return;
        E.test_all(m, function(ret){
            if (ret)
            {
                if (ret.timeout)
                    info += ' tests_timeout';
                if (ret.url && ret.url.status == '200 OK')
                    info += ' url_ok';
                if (ret.cc_url && ret.cc_url.status == '200 OK')
                    info += ' cc_url_ok';
                if (ret.ms_url && ret.ms_url.status == '200 OK')
                    info += ' ms_url_ok';
                info += ' '+filehead;
                filehead = JSON.stringify(ret, null, '\t')+'\n';
            }
            if (perr_sent.indexOf(id)<0)
            {
                perr({id: id+'_fin', info: info, err: err,
                    filehead: filehead});
                perr_sent.push(id+'_fin');
            }
        });
    }
}

// XXX arik: WIP
E.test_url = function(url, done_cb, opt){
    opt = opt||{};
    console.log('testing '+url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    if (opt.no_cache)
    {
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.setRequestHeader('Pragma', 'no-cache');
        xhr.setRequestHeader('If-None-Match', '"-- bad etag --"');
        xhr.setRequestHeader('If-Modified-Since',
            'Thu Jan 01 1970 02:00:00 GMT');
    }
    var t0 = Date.now();
    // XXX arik: add timeout/ontimeout
    xhr.onreadystatechange = function(){
	var DONE = 4;
	if (xhr.readyState!=DONE)
	    return;
	var res = (xhr.responseText||'');
	done_cb(xhr, {url: url, status: xhr.status+' '+xhr.statusText,
	    duration: (Date.now()-t0)+'ms', responseType: xhr.responseType,
	    responseLen: res.length,
	    response: '0..64:\n'+res.substr(0, 64)+'\n-64..'+res.length+':'+
	        res.substr(-64)});
    };
    xhr.send();
};

// XXX arik todo: send results of
// - wget of m
// - wget of small png in microsoft cdn
// - wget of m with clear-cache
E.test_all = function(module, done_cb){
    var ms_url = '//www.microsoft.com/library/errorpages/Images/'+
	'Microsoft_logo.png';
    var url = require.toUrl(module);
    if (!url)
        return void done_cb();
    // XXX romank: temp hack for old toUrl, remove when all bext updated to
    // require 2.1.14-9
    if (!/\.js(\?|$)/.test(url) && (module=='be_ver' || module=='be_config'))
    {
        url = url.replace(new RegExp(module+'(\\?|$)'), module+'.js$1');
    }
    var ret = {timeout: false};
    var tests_timeout = setTimeout(function(){
        console.error('require tests timeouted');
        ret.timeout = true;
        done_cb(ret);
    }, 60000);
    function check_return(){
	if (ret.url && ret.ms_url && ret.cc_url && !ret.timeout)
        {
            clearTimeout(tests_timeout);
	    done_cb(ret);
        }
    }
    E.test_url(url, function(xhr, e){
        ret.url = e;
        check_return();
    });
    E.test_url(url, function(xhr, e){
        ret.cc_url = e;
        check_return();
    }, {no_cache: true});
    E.test_url(ms_url, function(xhr, e){
	delete e.response;
        ret.ms_url = e;
	check_return();
    });
};

// XXX arik: WIP
function test_and_recover(m){
    // XXX arik: take urlArgs into account
    // consider to use only-if-cached
    var url = E.config.paths[m];
    console.log('test_and_recover '+m+' '+url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // XXX arik: timeout/ontimeout
    xhr.onreadystatechange = function(){
	var DONE = 4;
	if (xhr.readyState!=DONE)
	    return;
	console.log('status '+xhr.status);
	console.log('statusText '+xhr.statusText);
	console.log('responseType '+xhr.responseType);
	console.log('responseText len '+(xhr.responseText||'').length);
	console.log('responseText '+(xhr.responseText||'').substr(0, 128));
    };
    //xhr.setRequestHeader('cache-control', 'no-cache')
    xhr.send();
}

if (be_ver)
    E.init(be_ver.ver);

return E; });
