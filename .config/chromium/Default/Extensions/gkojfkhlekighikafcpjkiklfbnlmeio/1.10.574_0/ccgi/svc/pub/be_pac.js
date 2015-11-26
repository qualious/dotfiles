// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/svc/pub/be_browser.js', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/svc/pub/be_lib.js', '/svc/pub/be_ext.js', '/util/version_util.js',
    '/protocol/pac_engine.js', '/svc/pub/be_util.js', 'underscore',
    '/svc/pub/be_svc.js', '/util/zerr.js', '/util/date.js', '/util/escape.js',
    '/util/util.js', '/svc/pub/be_mode.js'],
    function(B, be_backbone, etask, be_lib, be_ext, version_util, pac_engine,
    be_util, _, be_svc, zerr, date, zescape, zutil, be_mode){
var pac_file_set, pac_file_last, chrome;
var cb_wrapper = zerr.catch_unhandled_exception;
var E = new (be_backbone.task_model.extend({
    _defaults: function(){
	this.stats = {total: 0, slow: {10: 0, 100: 0, 1000: 0}};
	this.on('destroy', function(){ E.uninit(); });
    },
}))();

E.init = function(){
    chrome = window.chrome;
    E.metro = undefined;
    E.timer = setTimeout(function(){
	if (E.stats.slow['100'] || E.stats.slow['1000'])
	{
	    be_lib.perr_err({id: 'be_tab_unblocker_slow',
		info: zerr.json(E.stats)});
	}
    }, date.ms.HOUR);
};

E.uninit = function(){ E.timer = clearTimeout(E.timer); };

// XXX amir: scope param seems to be unused
E.set_pac = function(script, scope){
    if (E.metro)
	return;
    pac_file_set = !!script;
    if (script)
	pac_file_last = script;
    scope = scope||be_ext.get('settings_scope')||'regular_only';
    return etask([function(){
	this.alarm(5000, {ethrow: 'proxy.settings timeout'});
        if (script)
        {
            return etask.cb_apply(B.proxy.settings, '.set',
		[{scope: scope,
                value: {mode: 'pac_script', pacScript: {data: script}}}]);
        }
        // XXX arik/bahaa: need to clear settings on shutdown
	return etask.cb_apply(B.proxy.settings, '.clear', [{scope: scope}]);
    }, function(){
	be_ext.set('status.unblocker.effective_pac_url', script);
	E.has_pac = !!script;
	if (script)
	    check_metro_mode();
    }]);
};

// XXX amir: temp workaround for cyclic dependency, rules are from
// be_tab_unblcoker
function check_need_ext_settings(){
    if (E.rules && _.keys(E.rules.unblocker_rules).length &&
        be_ext.get('r.vpn.on'))
    {
	return true;
    }
    if (E.metro===undefined)
	return true;
    return false;
}

E.load_pac_file = function(last, force){
    if (!chrome || version_util.version_cmp(be_util.version(), '1.1.798')<0)
	return;
    if (!check_need_ext_settings() && !force)
	return E.set_pac(null);
    if (!E.rules && !pac_file_set && pac_file_last)
	return E.set_pac(pac_file_last);
    var arr = new Uint8Array(32), key = '';
    window.crypto.getRandomValues(arr);
    _.each(arr, function(a){ key += a.toString(16); });
    E.pac_key = key;
    var options = {do_redir: false, ext: 1, key: E.pac_key};
    E.set_pac(pac_engine.gen_pac({unblocker_rules: {}}, options));
};

E.load_pac_cb = cb_wrapper(function(){
    E.update_tab_listener();
    E.load_pac_file();
    /* clear settings of previous scope on change */
    var scope = be_ext.get('settings_scope');
    if (!scope || !chrome)
        return;
    B.proxy.settings.clear({scope: scope==='regular' ?
        'regular_only' : 'regular'});
});

E.metro_test_cb = null;
function check_metro_mode(){
    var metro_test_res;
    var metro_test_etask;
    if (E.metro!==undefined || E.metro_test_cb)
	return;
    if (!be_util.os_win8())
    {
	E.metro = false;
	return;
    }
    var metro_test_url = 'http://127.255.255.255:0/';
    return etask([function try_catch$(){
	E.metro_test_cb = _metro_test_cb;
	metro_test_res = null;
	metro_test_etask = this;
	var request = new XMLHttpRequest();
	request.open('POST', metro_test_url, false);
	request.send();
    }, function(e){
	if (!this.error)
	    throw 'failed metro test request (should fail)';
	return this.wait(1000);
    }, function catch$(err){
	be_lib.err('be_tab_unblocker_metro_test_err', '', err);
    }, function ensure$(){
	var metro = metro_test_res!='net::ERR_PROXY_CONNECTION_FAILED';
	be_ext.set('metro', metro);
	if (metro)
	    E.set_pac(null, null, {is_metro: true});
	E.metro = metro;
	E.load_pac_cb();
	E.metro_test_cb = null;
	metro_test_res = null;
	metro_test_etask = null;
    }]);

    function _metro_test_cb(details){
	if (!details.error || details.url!=metro_test_url)
	    return;
	metro_test_res = details.error;
	(metro_test_etask.econtinue_fn())();
    }
}

E.set_proxy_for_url = function(url, proxy_str){
    if (!E.pac_key && !zutil.is_mocha())
        return;
    var t0, diff, xhr = new XMLHttpRequest();
    /* we use sync request to make sure the url is set in the pac before we
     * proceed with the request, async requests work most of the time.
     * in test, the mock XMLHTTPRequest implements sync requests by spawning
     * another instance of node, which prevents us from using nock, which
     * needs to overrides node's Request, but doesn't override Request of the
     * spawned node, so we use async in this case. */
    xhr.open('POST', 'http://local.hola/?'+zescape.qs({
        proxy: proxy_str,
        set: url,
        key: E.pac_key||'1',
    }), zutil.is_mocha());
    E.stats.total++;
    t0 = Date.now();
    try { xhr.send(null); } catch(e){}
    if ((diff = Date.now()-t0) > 10)
    {
	E.stats.slow[diff>1000 ? '1000' : diff>100 ? '100' : '10']++;
	if (diff>100)
	    zerr('tab_unblocker slow %dms stats %s', diff, zerr.json(E.stats));
    }
};

return E; });
