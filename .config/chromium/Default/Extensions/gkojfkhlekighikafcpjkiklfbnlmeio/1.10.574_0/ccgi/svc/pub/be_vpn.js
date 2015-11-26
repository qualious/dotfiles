// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', 'backbone', '/svc/pub/be_backbone.js',
    '/util/etask.js', '/util/string.js', '/svc/pub/be_ext.js',
    '/svc/pub/be_util.js', '/util/zerr.js', '/svc/pub/be_rule.js',
    '/svc/pub/be_info.js', '/svc/pub/be_browser.js', '/svc/pub/be_tabs.js',
    '/svc/pub/be_lib.js', '/svc/util.js', '/util/version_util.js',
    '/svc/pub/be_tpopup.js', '/util/escape.js', '/util/url.js',
    '/svc/pub/be_tab_unblocker.js', '/util/ajax.js', '/util/storage.js',
    '/svc/pub/be_vpn_util.js', '/util/date.js', 'be_ver',
    '/svc/pub/be_agent.js', '/svc/pub/be_svc.js', '/svc/pub/be_pac.js',
    window.no_chrome_mp ? undefined : '/svc/pub/be_mp.js',
    '/svc/pub/be_mode.js', '/svc/pub/be_rules.js', '/svc/pub/be_tab_perr.js'],
    function($, _, Backbone, be_backbone, etask, string, be_ext, be_util, zerr,
    be_rule, be_info, B, be_tabs, be_lib, svc_util, version_util, be_tpopup,
    zescape, zurl, be_tab_unblocker, ajax, storage, be_vpn_util, date,
    be_ver, be_agent, be_svc, be_pac, be_mp, be_mode, be_rules, be_tab_perr){
B.assert_bg('be_vpn');
var chrome = window.chrome, conf = window.conf;
var E = new (be_backbone.model.extend({
    tabs: {}, active_tab_id: 0, unblocked_urls: {}, history: {},
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_vpn');
	    uninit();
	});
	B.backbone.server.start(this, 'be_vpn');
    },
}))();

var active_tab_timer_ms = date.ms.HOUR;

function uninit(){
    if (!E.get('inited'))
        return;
    E.sp.ereturn();
    if (chrome)
	chrome.webRequest.onAuthRequired.removeListener(zagent_conn_lob_cb);
    clearTimeout(status_cb.timer);
    E.be_rule.off('change:status', status_cb);
    E.be_info.off('change:status', status_cb);
    be_tabs.off('change:active.id', tab_vpn_on_change_active);
    be_tabs.off('created', tab_vpn_on_created);
    be_tabs.off('updated', tab_vpn_on_updated);
    be_tabs.off('removed', tab_vpn_on_removed);
    be_tabs.off('replaced', tab_vpn_on_replaced);
    be_tabs.off('error_occured', tab_vpn_on_error_occured);
    proxy_settings_monitor.uninit();
    E.be_tpopup._destroy();
    E.be_rule._destroy();
    E.be_tab_unblocker._destroy();
    E.be_tab_perr._destroy();
    if (E.be_mp)
        E.be_mp._destroy();
    E.be_agent._destroy();
    E.be_pac._destroy();
    E.be_svc._destroy();
    E.be_mode._destroy();
    E.be_info._destroy();
    E.be_rules._destroy();
}

var proxy_settings_monitor = {};
proxy_settings_monitor.init = function(){
    if (this.inited)
	return;
    this.inited = true;
    /* XXX arik/bahaa BACKWARD: backward code for extensions < 1.1.812.
     * this functionality used to be in local and was moved to remote code */
    this.backward_1_1_812 = (chrome && !conf.new_ui) ||
	version_util.version_cmp(be_util.version(), '1.1.812')<0;
    if (this.backward_1_1_812)
	return;
    B.extension.is_allowed_incognito_access(function(is_allowed){
	be_ext._set('settings_scope',
	    is_allowed ? 'regular' : 'regular_only');
    });
    if (!chrome)
        return;
    B.proxy.settings.get({}, this.changed_cb);
    B.proxy.settings.on_change.add_listener(this.changed_cb);
};
proxy_settings_monitor.uninit = function(){
    if (!this.inited)
	return;
    this.inited = false;
    if (this.backward_1_1_812 || !chrome)
	return;
    B.proxy.settings.on_change.del_listener(this.changed_cb);
};
proxy_settings_monitor.changed_cb = function(details){
    if (!details)
	return zerr('proxy_changed no details');
    var conflict = details.levelOfControl=='controlled_by_other_extensions';
    zerr[conflict ? 'err' : 'debug'](
	'proxy changed: %s control: %s',
	!details.value.pacScript || details.value.pacScript.url ?
	zerr.json(details.value) : 'pacScript-data', details.levelOfControl);
    be_ext._set({'proxy.effective.control_level': details.levelOfControl,
        'proxy.effective.value': details.value, 'ext.conflict': conflict});
};

E.init = function(rmt){
    if (this.get('inited'))
	return;
    E.sp = etask('be_vpn', [function(){ return this.wait(); }]);
    this.set('inited', true);
    this.on('recover', function(){
	if (E.get('need_recover'))
	    return;
	E.set('need_recover', true);
	status_cb();
    });
    zerr.on_unhandled_exception = function(err){
        be_lib.perr_err({id: 'unhandled_exception', err: err}); };
    /* XXX arik: need be_collection to unite group of be_backbone */
    E.rmt = rmt;
    E.be_pac = be_pac;
    E.be_tab_unblocker = be_tab_unblocker;
    E.be_tab_perr = be_tab_perr;
    if (be_mp)
        E.be_mp = be_mp;
    E.be_rule = be_rule;
    E.be_tpopup = be_tpopup;
    E.be_info = be_info;
    E.be_svc = be_svc;
    E.be_agent = be_agent;
    E.be_mode = be_mode;
    E.be_rules = be_rules;
    be_info.init(rmt);
    be_svc.init();
    be_mode.init();
    be_pac.init();
    be_agent.init();
    be_tab_unblocker.init();
    be_tab_perr.init(E);
    if (be_mp)
        be_mp.init();
    be_rules.init();
    be_rule.init();
    be_tpopup.init();
    proxy_settings_monitor.init();
    E.be_rule.on('change:status', status_cb);
    E.be_info.on('change:status', status_cb);
    be_tabs.on('change:active.id', tab_vpn_on_change_active);
    be_tabs.on('created', tab_vpn_on_created);
    be_tabs.on('updated', tab_vpn_on_updated);
    be_tabs.on('removed', tab_vpn_on_removed);
    be_tabs.on('replaced', tab_vpn_on_replaced);
    be_tabs.on('error_occured', tab_vpn_on_error_occured);
    B.tabs.query({}, function(tabs){
	for (var i=0; i<tabs.length; i++)
	    tab_vpn_on_created({tab: tabs[i]});
    });
    E.used_vpn = true;
    if (chrome)
    {
	chrome.webRequest.onAuthRequired.addListener(zagent_conn_lob_cb,
	    {urls: ['<all_urls>']});
    }
    E.sp.spawn(etask({cancel: true}, [function(){
        return load_conf();
    }, function(){
        B.tabs.query({lastFocusedWindow: true, active: true}, function(tabs){
            first_run(tabs&&tabs[0]&&tabs[0].url); });
	return be_lib.storage_local_get('used_vpn');
    }, function(res){
	E.used_vpn = res.used_vpn;
        return be_info.get_ext_conf();
    }]));
};

function load_conf(){
    return etask({cancel: true, name: 'load_conf'}, [function try_catch$(){
        return ajax.json({timeout: 20000,
            url: conf.url_ccgi+'/win_install_init.json'});
    }, function(e){
        if (this.error || e.err)
        {
            be_ext.set('install_conf', null);
            if (this.error)
                be_lib.perr_err({id: 'be_load_conf_err', err: this.error});
            return;
        }
        be_ext.set('install_conf', e);
    }]);
}

var first_run_timer;
function first_run(active){
    var details = be_ext.get('install_details');
    if (!details)
        return;
    be_ext._set('install_details', null);
    var install = details=='install';
    var dl_page = /https?:\/\/hola\.org\/(player(_download|_torrents)|play)\b/
        .test(active);
    var old_ff_update = !chrome && details=='update' &&
        /^https?:\/\/hola\.org\/old_ff_chrome(\.html)?/.test(active);
    var inst_conf = be_ext.get('install_conf');
    var br = inst_conf && inst_conf.browser && inst_conf.browser.browser;
    // during svc installation, we use bext_install.html for
    // installing the extension - don't show first-run in this case
    var svc_install = (inst_conf && inst_conf.name=='exe' && br &&
        (br=='chrome')==!!chrome) ||
        /^https?:\/\/hola\.org\/bext_install(\.html)?/.test(active);
    var ext_skip_first_run = inst_conf && inst_conf.item &&
        inst_conf.item.ext_skip_first_run;
    var skip_first_run = !!(conf.browser.torch || svc_install ||
	(!install && !old_ff_update) || dl_page || ext_skip_first_run);
    be_lib.perr_ok({id: 'be_first_run', info: {
	svc_install: svc_install, skip_first_run: skip_first_run,
        active: active}});
    if (skip_first_run)
	return;
    first_run_timer = setTimeout(function(){
        be_lib.perr_err({id: 'be_first_run_never'});
	first_run_stop();
    }, 5*date.ms.MIN);
    E.listenTo(be_mode, 'change:is_svc', first_run_cb);
    E.listen_to(be_ext, 'change:enabled', first_run_cb);
}
function first_run_stop(){
    E.stopListening(be_mode, 'change:is_svc', first_run_cb);
    E.stopListening(be_ext, 'change:enabled', first_run_cb);
    first_run_timer = clearTimeout(first_run_timer);
}
function first_run_cb(){
    if (!be_mode.get('is_svc') && !be_ext.get('enabled'))
	return;
    var url = '://hola.org/access/install';
    be_lib.perr_ok({id: 'be_first_run_open_tab'});
    first_run_stop();
    be_util.open_hola_tab(
        {url: zescape.uri(be_util.get_proto()+url, be_ext.auth())});
}

function zagent_conn_lob_cb(details){
    if (details.isProxy && details.realm==='Hola Unblocker')
    {
	var conn_log = E.get('zagent_conn_log')||[];
	conn_log.push({host: details.challenger.host,
	    port: details.challenger.port, ts: Date.now()});
	if (conn_log.length>5)
	    conn_log.shift();
	E.set('zagent_conn_log', conn_log);
    }
    return {};
}

// XXX arik: rm api
E.enable = function(reload){
    return;
};

function status_cb(){
    var script = E.be_rule.get('status');
    var info = E.be_info.get('status');
    var status = [script, info];
    if (status.indexOf('error')!=-1)
	E.set('status', 'error');
    else if (status.indexOf('busy')!=-1)
	E.set('status', 'busy');
    else
    {
	E.set('status', 'ready');
	tabs_update();
    }
    if (status.indexOf('busy')!=-1 || !E.get('need_recover'))
	return;
    if (E.get('status')=='ready')
	return E.set('need_recover', false);
    clearTimeout(status_cb.timer);
    status_cb.timer = setTimeout(function(){
	zerr.notice('be_vpn try recover');
	E.set('need_recover', false);
        if (E.be_rule.get('status')=='error')
	    E.be_rule.recover();
        if (E.be_info.get('status')=='error')
	    E.be_info.recover();
    });
}

function active_stop_measure(tab){
    if (!tab.active_ts)
	return;
    tab.active_time += Date.now()-tab.active_ts;
    tab.active_ts = 0;
    active_timer_clr(tab);
}

function active_reset(tab){
    active_stop_measure(tab);
    tab.active_time = 0;
}

function active_start_measure(tab){
    if (tab.active_ts)
	return;
    tab.active_ts = Date.now();
    active_timer_add(tab, active_tab_timer_ms);
}

function active_timer_clr(tab){
    if (!tab.active_timer)
	return;
    tab.active_timer = clearTimeout(tab.active_timer);
}

function active_timer_add(tab, ms){
    active_timer_clr(tab);
    tab.active_timer = setTimeout(function(){
	tab.active_timer = null;
	total_active_report(tab);
    }, ms);
}

function total_active_report(tab){
    active_stop_measure(tab);
    if (tab.active_reported)
	return;
    tab.active_reported = true;
    var rule;
    if ((rule = tab.rule))
    {
	var first_per_time =
	    Date.now()-(E.unblocked_urls[tab.root_url]||0)>24*3600000;
        var stats = _.extend(_.pick(rule, 'name', 'type', 'md5'),
	    {proxy_country: (rule.country||'').toLowerCase()});
	be_lib.stats('be_vpn_total_active_time', JSON.stringify(
	    _.extend(stats, {root_url: tab.root_url,
	    src_country: be_info.get('location').country.toLowerCase(),
	    total_active_time: tab.active_time/1000,
	    first_per_time: first_per_time})));
	if (first_per_time)
	    E.unblocked_urls[tab.root_url] = Date.now();
	return;
    }
    /* root_url indicates normal url (not chrome://...) */
    if (!tab.root_url || tab.had_rule || Math.random()*50>=1)
	return;
    be_lib.stats('be_total_active_time', JSON.stringify(
	{root_url: tab.root_url,
	src_country: be_info.get('location').country.toLowerCase(),
	total_active_time: tab.active_time/1000}));
}

function vpn_first_use_report(tab){
    if (!tab.rule || E.used_vpn)
	return;
    be_lib.stats('be_vpn_first_use');
    be_lib.storage_local_set({used_vpn: true});
    E.used_vpn = true;
}

function tab_vpn_add(tab, rule){
    tab.had_rule = true;
    tab.rule = _.clone(rule);
    active_reset(tab);
    if (E.active_tab_id==tab.id)
	active_start_measure(tab);
    vpn_first_use_report(tab);
}

function tab_add(tabid, url){
    var tab = E.tabs[tabid];
    var rule = E.rule_get(url);
    if (tab)
	return;
    zerr.debug('tab_add '+tabid+' url '+url+' root '+
	svc_util.get_root_url(url));
    tab = {url: url, root_url: svc_util.get_root_url(url),
	active: 0, active_time: 0, rule: rule, id: tabid};
    E.tabs[tabid] = tab;
    if (E.active_tab_id==tabid)
	active_start_measure(tab);
    if (rule)
	tab_vpn_add(tab, rule);
}

function tab_vpn_del(tab){
    if (!tab.rule)
        return;
    total_active_report(tab);
    tab.rule = null;
}

function tab_del(tabid){
    var tab = E.tabs[tabid];
    if (!tab)
	return;
    total_active_report(tab);
    tab_vpn_del(tab);
    delete E.tabs[tabid];
}

function tab_update(tab){
    var rule = E.rule_get(tab.url);
    zerr.debug('tab_update '+tab.id+' url '+tab.root_url+' is_vpn '+
	!!rule);
    if (rule && !tab.rule)
	tab_vpn_add(tab, rule);
    else if (!rule && tab.rule)
	tab_vpn_del(tab);
}

function tabs_update(){
    for (var tab in E.tabs)
	tab_update(E.tabs[tab]);
}

E.rule_get = function(url){
    var rule;
    if (!be_ext.get('r.vpn.on'))
	return null;
    if ((rule = be_rule.get_rules(url)[0]) && rule.enabled)
	return rule;
    return null;
};

var MAX_HISTORY = 5;
function tab_history_update(id, url, del){
    var tab = E.history[id];
    if (!tab)
    {
	if (del)
	    return;
	tab = E.history[id] = {history: []};
    }
    else if (del)
	return void(delete E.history[id]);
    var host = zurl.get_host(url);
    if (!host)
	return;
    if (tab.history.length && host==tab.history[0])
	return;
    tab.history.unshift(host);
    if (tab.history.length>MAX_HISTORY)
	tab.history.pop();
}

E.tab_history_get = function(id){
    if (!(id = id||be_tabs.get('active.id')))
	return;
    var t = E.history[id];
    if (!t)
	return;
    return t.history;
};

function tab_vpn_on_created(o){
    var tab = o.tab;
    if (!tab.url)
	return;
    tab_history_update(tab.id, tab.url);
    tab_add(tab.id, tab.url);
}

function tab_vpn_on_updated(o){
    var id = o.id, info = o.info;
    if (!info || !info.url)
	return;
    tab_history_update(id, info.url);
    var tab = E.tabs[id];
    var root_url = svc_util.get_root_url(info.url);
    if (tab && tab.root_url==root_url)
    {
	tab.url = info.url;
	return;
    }
    if (tab)
	tab_del(id);
    tab_add(id, info.url);
}

function tab_vpn_on_removed(tab){
    tab_history_update(tab.id, null, true);
    tab_del(tab.id);
}

function tab_vpn_on_replaced(o){
    var added = o.added, removed = o.removed;
    tab_history_update(removed, null, true);
    tab_vpn_del(removed);
    B.tabs.get(added, function(tab){
	if (!tab || !tab.url)
	    return;
	tab_history_update(added, tab.url);
	var root_url = svc_util.get_root_url(tab.url);
	if (!root_url)
	    return;
	tab_add(added, tab.url);
    });
}

function tab_vpn_on_change_active(){
    var id = be_tabs.get('active.id');
    if (!id)
	return;
    var tab = E.active_tab_id ? E.tabs[E.active_tab_id] : null;
    if (tab)
	active_stop_measure(tab);
    E.active_tab_id = id;
    if ((tab = E.tabs[id]))
	active_start_measure(tab);
}

function tab_vpn_on_error_occured(o){
    var info = o.info||{};
    if (info.http_status_code!==0)
        return;
    var last = tab_vpn_on_error_occured.info||{};
    if (last.error==info.error && last.url==info.url && last.tabId==info.tabId)
        return;
    tab_vpn_on_error_occured.info = info;
    var domain = zurl.get_host(''+info.url);
    if (!zurl.is_valid_domain(domain))
        return;
    var rule = E.rule_get(info.url);
    var perr_info = {domain: domain, err: info.error||''};
    if (rule)
        perr_info.proxy_country = rule.country;
    be_lib.perr(zerr.L.INFO, {id: 'be_dns_mistake', info: perr_info,
        rate_limit: {count: 100}});
}

// XXX arik: unite with code in be_ui_vpn.js
E.script_set = function(rule, val){
    return etask({name: 'script_set', cancel: true}, [function(){
	return be_ext.set_enabled(true);
    }, function(){
	if (!be_ext.get('r.vpn.on'))
	    return E.enable();
    }, function(){
        be_rule.trigger('set_rule', {
	    name: rule.name, enabled: +val.enabled,
            country: val.country||rule.country, type: rule.type,
	    md5: rule.md5, root_url: val.root_url});
    }]);
};

// XXX arik: reuse code in be_ui_vpn.js
E.enable_root_url = function(opt){
    var root_url = opt.root_url, rule_ratings, rule, enabled = true;
    // XXX arik: get link from selected rule
    var host = zurl.get_host('http://'+root_url+'/');
    return etask({name: 'enable_root_url', cancel: true}, [function(){
	be_info.set_force_tpopup(root_url);
	if (opt.rule)
	{
	    if (opt.rule.name)
            {
		rule = opt.rule;
                if (rule.enabled!==undefined)
                    enabled = rule.enabled;
		return this.egoto('set');
	    }
            // XXX arik/shachar: we should never get here. this is due to
	    // shachar's changes of taking rule into account in
	    // enable_root_url. need to call api with valid rule or don't
	    // specify it
            be_lib.perr_err({id: 'be_enable_root_url_invalid_rule',
		info: opt});
	}
        return be_rule.get_rule_ratings({root_url: root_url,
	    src_country: be_info.get('country'), limit: 20,
	    proxy_country: opt.country, vpn_only: true});
    }, function(_rule_ratings){
	rule_ratings = _rule_ratings;
	if (!rule_ratings)
	    return;
        return be_rule.get_groups_from_ratings(rule_ratings);
    }, function(groups){
	var popular = be_vpn_util.get_popular_country({host: host,
	    rule_ratings: rule_ratings});
	var proxy_country =
	    (opt.country||popular[0].proxy_country||'').toLowerCase();
	// XXX arik: get url from rule and add url_from_root_url)
	var url = 'http://'+root_url+'/';
	var rules = be_rule.get('rules');
	var all_rules = be_vpn_util.get_all_rules({
	    proxy_country: proxy_country, rules: rules, url: url,
	    root_url: root_url,  rule_ratings: rule_ratings, groups: groups});
	rule = all_rules[0];
    }, function set(){
	return E.script_set(rule, {enabled: enabled, root_url: root_url});
    }, function(){
	be_lib.perr_ok({id: 'be_enable_root_url', info:
	    {name: rule.name, root_url: root_url,
	    src_country: (be_info.get('country')||'').toLowerCase()}});
	return rule; }]);
};

E.tpopup_is_connected = function(id, tpopup_type){
    if (!E.be_tpopup)
        return;
    return E.be_tpopup.is_connected(id, tpopup_type);
};

return E; });
