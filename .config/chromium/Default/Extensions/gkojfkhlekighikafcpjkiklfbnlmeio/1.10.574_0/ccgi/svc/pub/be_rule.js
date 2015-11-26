// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', 'backbone', '/svc/pub/be_backbone.js',
    '/util/etask.js', '/svc/pub/be_ext.js', '/svc/pub/be_util.js',
    '/util/zerr.js', '/svc/pub/be_browser.js', '/svc/pub/be_vpn_util.js',
    '/svc/pub/be_lib.js', '/util/version_util.js',
    '/svc/pub/be_tab_unblocker.js', '/util/url.js', '/util/escape.js',
    '/util/ajax.js', '/util/array.js', '/svc/pub/be_defines.js',
    '/svc/util.js', '/svc/pub/be_agent.js', '/svc/pub/be_mode.js',
    '/util/storage.js', '/svc/pub/be_rules.js', '/svc/pub/be_tabs.js'],
    function($, _, Backbone, be_backbone, etask, be_ext, be_util, zerr, B,
    be_vpn_util, be_lib, version_util, be_tab_unblocker, zurl, zescape, ajax,
    array, be_defines, svc_util, be_agent, be_mode, storage, be_rules,
    be_tabs){
var be_bg_main = window.be_bg_main, be_bg = window.be_bg||{};
B.assert_bg('be_rule');
var chrome = window.chrome, conf = window.conf;
var E = new (be_backbone.task_model.extend({
    rules: undefined,
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_rule');
	    uninit();
	});
	B.backbone.server.start(this, 'be_rule');
    },
}))();
// XXX amir: temp workaround for mutual dependency
be_tab_unblocker.be_rule = E;

E.tasks = [];

// XXX arik: how to properly cancel tasks;
E.task_cancel_all = function(){
    _.forEach(E.tasks, function(task){ task.ereturn(); }); };
E.task_insert = function(task){ E.tasks.push(task); };
E.task_remove = function(task){ array.rm_elm(E.tasks, task); };

function uninit(){
    if (!E.get('inited'))
        return;
    E.sp.ereturn();
    E.off();
    E.stopListening();
    E.task_cancel_all();
    E.rules = undefined;
    safe_mode_urls = undefined;
}

E.init = function(){
    if (E.get('inited'))
	return;
    E.set('inited', true);
    E.sp = etask('be_rule', [function(){ return this.wait(); }]);
    E.agent_auth_listener_add();
    E.on('recover', function(){ E.trigger('fetch_rules', true); });
    E.listen_to(be_ext, 'change:r.vpn.on change:r.ext.enabled '+
        'change:auth.stamp',
	_.debounce(function(){ E.trigger('fetch_rules'); }));
};

E.get_rules = function(url){ return be_vpn_util.get_rules(E.rules, url); };

E.get_rule_ratings = function(args){
    return ajax.json({slow: 2000, type: 'GET',
	url: conf.url_ccgi+'/rule_ratings', data: be_ext.qs_ajax(args),
	perr: function(opt){ return be_lib.perr_err(opt); }});
};

E.get_groups_from_ratings = function(ratings){
    return etask({name: 'get_groups_from_ratings', cancel: true}, [function(){
	var groups = [];
	ratings.forEach(function(cr){
	    cr.rules.forEach(function(r){
		if (r.rating<=0)
		    return;
		groups.push(_.pick(r, 'name', 'type', 'md5', 'country'));
	    });
	});
	if (!groups.length)
            return;
        return be_rules.get_groups(groups);
    }, function(groups){
	if (!groups || !groups.unblocker_rules)
	    return groups;
	_.forEach(groups.unblocker_rules, function(r){ delete r.enabled; });
	return groups;
    }]);
};

// XXX arik BACKWARD:
E.refresh_proxy = function(){
    if (B.have['be.proxy.refresh'])
	return B.be.proxy.refresh();
    be_bg_main.trigger('refresh_proxy');
};

function _fetch_rules_rmt(){
    E.task_cancel_all();
    E.unset('verify_proxy_ret');
    return etask([function(){
	zerr.notice('be_rule: fetch_rules');
        if (!be_ext.get('r.ext.enabled'))
	{
	    E.rules = undefined;
	    return this.egoto('done');
	}
    }, function(){
        // XXX shachar: change to min rules request
	var opt = {url: conf.url_ccgi+'/rules_get_vpn.json', qs: be_ext.auth(),
	    data: {}, retry: 1};
	return ajax.json(opt);
    }, function(rules){
        be_rules.set_rules(rules);
        E.rules = be_rules.get_rules();
        E.set('rules', E.rules);
    }, function done(){
	return be_tab_unblocker.update_rule_urls(E.rules);
    }, function(){ E.set('stamp', E.rules ? E.rules.stamp : 0);
    }]);
}

E.fetch_rules = function(){
    var rules;
    if (!(rules=be_rules.get_rules()))
        return _fetch_rules_rmt();
    zerr.notice('be_rule: fetch_rules local');
    if (!E.fetch_once)
    {
        E.fetch_once = true;
        _fetch_rules_rmt(); // background fetch
    }
    if (!be_ext.get('r.ext.enabled'))
        E.rules = undefined;
    else
    {
        E.rules = rules;
        E.set('rules', E.rules);
    }
    return etask([function(){
        return be_tab_unblocker.update_rule_urls(E.rules);
    }, function(){ E.set('stamp', E.rules ? E.rules.stamp : 0);
    }]);
};

/* XXX arik: rm refresh_proxy (make it another event) */
E.on('fetch_rules', function(refresh_proxy){
    if (!E.get('inited'))
        return;
    E.task_cancel_all();
    if (!E.set_busy({desc: 'Changing country...'}))
        return E.schedule_clr(['fetch_rules', refresh_proxy]);
    var auth = be_ext.auth();
    if (!auth.uuid || !auth.session_key)
        return E.clr_busy();
    E.sp.spawn(etask({name: 'fetch_rules', cancel: true}, [function(){
	zerr.notice('be_rule: fetch_rules '+refresh_proxy);
	if (refresh_proxy)
	    return E.refresh_proxy();
    }, function(){ return E.fetch_rules();
    }, function(){ E.clr_busy();
    }, function catch$(err){
	E.set_err();
	be_lib.err('be_script_fetch_rules_err', '', err);
    }]));
});

E.set_rules_cond = function(opt){
    be_rules.set_rules_cond(opt); };

E.set_rule = function(opt){
    be_rules.set_rule(opt);
    E.sp.spawn(etask({cancel: true}, [function(){
        E.task_insert(this);
	zerr.notice('set_rule '+zerr.json(opt));
	be_tab_unblocker.setup_cookies_cleanup(opt);
	return ajax.json({qs: be_ext.auth(),
	    url: conf.url_ccgi+'/rule_set.json', data: opt});
    }, function(e){
        var login_url = e.login_url;
        if (login_url)
        {
            var active_url = be_tabs.get('active.url');
            if (active_url && svc_util.get_root_url(active_url)==opt.name)
                B.tabs.update(be_tabs.get('active.id'), {url: login_url});
        }
        return E.refresh_proxy();
    }, function ensure$(){ E.task_remove(this); }]));
};

E.on('set_rule', function(opt){
    if (!E.get('inited'))
        throw new Error('set_rule failed, be_rule not inited');
    E.task_cancel_all();
    if (!E.set_busy({desc: opt.enabled ? 'Finding peers...' :
        'Stopping peer routing...'}))
    {
        return E.schedule(['set_rule', opt]);
    }
    E.sp.spawn(etask({name: 'set_rule', cancel: true}, [function(){
	return E.set_rule(opt);
    }, function(){
	E.update_progress({desc: 'Changing country...'});
	return E.fetch_rules();
    }, function(){
	var r = svc_util.find_rule(E.rules&&E.rules.unblocker_rules, opt);
        var is_enabled = r&&r.enabled;
	if (!!is_enabled != !!opt.enabled)
	{
	    be_lib.perr_err({id: 'be_set_rule_mismatch',
		info: {opt: opt, r: r}});
	}
	if (!opt.enabled)
	    return;
	return E.verify_proxy({desc: 'rule_set', rule: opt,
	    zgettunnels_retry: be_defines.ZGETTUNNELS_RETRY,
	    root_url: opt.root_url});
    }, function(){
	E.clr_busy();
	be_lib.perr_ok({id: 'be_set_rule_ok', info: {name: opt.name,
            type: opt.type, md5: opt.md5, country: opt.country,
	    enabled: opt.enabled}});
    }, function catch$(err){
	E.set_err();
	be_lib.err('be_script_set_rule_err', '', err);
    }]));
});

function get_agents_for_rule(rule){
    var rule_info = be_tab_unblocker.get_rule_info(rule);
    var agents = {};
    agents[rule_info.country_str] = be_agent.agents[rule_info.country_str];
    return _.reduce(agents, function(res, a){ return res.concat(a); }, []);
}

E.get_agent = function(rule){
    var agents = get_agents_for_rule(rule);
    var info = {proxy_country: rule.country, agents: be_agent.agents};
    // XXX amir: check if both conditions are necessary
    if  (!agents || !agents.length)
	be_lib.perr_err({id: 'be_invalid_agents', info: info});
    // XXX arik/shachar: handle (!agents || !agents.length)
    // XXX arik: need to test all zagents (not only the first one) and check
    // with shachar how to handle protocol prefix (eg. HTTP).
    // also how to decide if need to check country or country.peer?
    // how to know which agents to use for a given rule?
    return agents[0];
};

function verify_proxy_ext(ping_id, rule){
    var _agent, agent_host, t0 = Date.now();
    var ret = {proxy_country: rule.country};
    return etask({name: 'verify_proxy_ext', cancel: true}, [function(){
	if (!(_agent = E.get_agent(rule)))
	    return this.ereturn(_.extend(ret, {error: 'no_agent'}));
	ret.agent = _agent.ip;
	ret.agent_host = agent_host = _agent.host;
	// XXX arik/shachar: change port to country port
	return ajax.json({timeout: 10000, slow: 2000, type: 'GET',
	    url: 'http://'+_agent.ip+':'+_agent.port+'/ping',
	    data: be_ext.qs_ajax({proxy_country: rule.country})});
    }, function(e){
	ret.t = Date.now()-t0;
        if (e.error||e.warn)
	    return _.extend(ret, {error: 'svc_error', ping_resp: e});
	return ret;
    }, function catch$(err){
	return _.extend(ret, {error: 'json_failed', err: ''+err,
	    t: Date.now()-t0});
    }]);
}

function verify_proxy_basic(ping_id, rule){
    return verify_proxy_ext(ping_id, rule);
}

// XXX arik/ron: mv to other place + test
function parse_hola_trigger(s){
    var ret = {};
    if (!s)
	return ret;
    var a = zescape.parse.http_words(s);
    a.forEach(function(e){ ret[e[0]] = e[1]; });
    return ret;
}

function verify_proxy_tunnel(ping_id, opt){
    var root_url = opt.root_url;
    if (!root_url)
	return;
    var t0 = Date.now();
    var info = {root_url: root_url, proxy_country: opt.rule.country,
        agent: E.get_agent(opt.rule)};
    return etask({name: 'verify_proxy_tunnel', cancel: true}, [function(){
	return be_tab_unblocker.ajax_via_proxy({type: 'GET', timeout: 7000,
	    rule: opt.rule,
	    url: 'http://'+root_url+'/hola_trigger?ping=tunnel&_='+ping_id+
	    (opt.prot ? '&prot='+opt.prot : '')});
    }, function(ret){
	var xhr = ret.xhr;
	info.t = Date.now()-t0;
	if (xhr.status!=204)
	{
	    return _.extend(info, {error: 'status',
		err: 'unexpected status '+xhr.status});
	}
        var _h = xhr.getResponseHeader('X-Hola-Trigger');
        var h = parse_hola_trigger(_h);
	info.response = _h;
	info.tunnel = h.tunnel;
	if (h.tunnel=='none')
	    return info;
	if (!+h.svc)
	    info.error = 'no_svc';
	else if (h.tunnel=='failed'||!+h.tunnel)
	    info.error = 'tunnel';
	return info;
    }, function catch$(err){
	return _.extend(info, {t: Date.now()-t0, error: 'catch', err: ''+err});
    }]);
}

E.is_enabled = function(rule){
    if (!rule) // XXX arik: should never happen
	return true;
    if (!E.rules || !E.rules.unblocker_rules)
	return false;
    var r = svc_util.find_rule(E.rules.unblocker_rules, rule);
    return r && r.enabled;
};

// XXX shachar/colin: verify proxy code is called from various places, need to
// make sure that ping requests are synced with actual site being unblocked by
// be_tab_unblocker (see mail from me and be_tab_unblocker.ajax_via_proxy).
// - sending ajax without rule being unblocked or having an agent causes it to
//   be sent direct.
// - need to make sure only one verify proxy is running for a root_url.
//
// talk with arik when starting to get additional comments and pointers about
// the required changes to the verify code.
function _verify_proxy(opt){
    if (!E.is_enabled(opt.rule))
	return void zerr('verify_proxy cancelled', opt);
    var ping_id = Math.random(); // XXX arik: create shorter id
    E.unset('verify_proxy_ret');
    return etask({name: '_verify_proxy', cancel: true}, [function(){
        E.task_insert(this);
	E.update_progress({desc: 'Testing connection...'});
        return etask.all({
            basic: verify_proxy_basic(ping_id, opt.rule),
	    tunnel: verify_proxy_tunnel(ping_id, opt),
        });
    }, function(e){
	var basic = e.basic, tunnel = e.tunnel;
	var ret = {basic: basic, tunnel: tunnel,
            proxy_country: opt.rule.country};
        ret.rule = _.omit(opt.rule, 'cmds');
	ret.error = basic.error&&(tunnel||{}).error ? 'basic_tunnel_error' :
	    basic.error ? 'basic_error' : (tunnel||{}).error ? 'tunnel_error' :
	    undefined;
	E.set('verify_proxy_ret', ret);
	var agent_host = basic.agent_host||'none';
        var info = {agent: agent_host, desc: opt.desc, ping_id: ping_id,
	    prev_desc: opt.prev_desc, proxy_country: opt.rule.country,
	    zgettunnels_retry: opt.zgettunnels_retry,
	    root_url: opt.root_url, basic: basic, tunnel: tunnel,
            rule: ret.rule};
	_verify_proxy.total = (_verify_proxy.total||0)+1;
	if (!ret.error)
	    be_lib.perr_ok({id: 'be_verify_proxy_ok', info: info});
	else
        {
	    _verify_proxy.errors = (_verify_proxy.errors||0)+1;
	    info.proxy_errors = _verify_proxy.errors;
	    info.proxy_total = _verify_proxy.total;
	    if (be_ext.get('use_http'))
		info.use_http = true;
            info.ext_enabled = be_ext.get('r.ext.enabled');
	    info.error = ret.error;
	    info.exclude = opt.exclude;
            info.is_rule_enabled = !!E.is_enabled(opt.rule);
	    if (opt.zgettunnels_retry)
	    {
		be_lib.perr_err({id: 'be_verify_proxy_err', info: info});
		zerr('verify_proxy failed, trying auto-recover');
		return _change_proxy({rule: opt.rule, desc: 'auto_recover',
		    prev_desc: opt.desc,
		    zgettunnels_retry: opt.zgettunnels_retry-1,
		    exclude: (opt.exclude||[]).concat(agent_host),
		    root_url: opt.root_url, verify_proxy_ret: ret});
	    }
	    else
		be_lib.perr_err({id: 'be_verify_proxy_err_final', info: info});
	}
	return ret;
    }, function ensure$(){ E.task_remove(this); }]);
}

// XXX arik/bahaa: fix status handling and use etask instead of schedule
E.verify_proxy_wait = function(opt){
    return etask({name: 'verify_proxy_wait', cancel: true}, [function(){
	if (E.get('status')!='busy')
	    return E.verify_proxy(opt);
	E.once('change:status', function(){
	    this.econtinue(E.verify_proxy(opt)); }.bind(this));
	return this.wait();
    }]);
};

function delete_tunnel(opt){
    return etask({name: 'delete_tunnel', cancel: true}, [function(){
	return be_tab_unblocker.ajax_via_proxy({type: 'GET', timeout: 10000,
	    rule: opt.rule,
	    url: 'http://'+opt.root_url+'/hola_trigger?proxy_tunnel_del&_='+
	    Math.random()});
    }, function catch$(err){
	be_lib.perr_err({id: 'be_delete_tunnel_err', info: opt, err: err});
    }]);
}

function change_proxy_ext(opt){
    var agent = E.get_agent(opt.rule);
    // XXX amir: check if conditions are necessary
    if (!agent||!agent.host)
    {
	be_lib.perr_err({id: 'missing_agent', info: {opt: opt}});
	zerr('missing agent '+opt.rule.country);
	return E.fetch_rules();
    }
    opt.exclude = _.union(opt.exclude||[], [agent.host]);
    return be_tab_unblocker.refresh_agent(agent.host, opt.rule, opt.exclude);
}

function _change_proxy(opt){
    if (!E.is_enabled(opt.rule))
	return void zerr('change_proxy cancelled', opt);
    var tunnel = (opt.verify_proxy_ret||{}).tunnel;
    var tunnel_error = tunnel && tunnel.error=='tunnel';
    return etask({name: '_change_proxy', cancel: true}, [function(){
        E.task_insert(this);
	E.update_progress({desc: 'Trying another peer...'});
	if (tunnel_error)
	    return delete_tunnel(opt);
    }, function(){ return change_proxy_ext(opt);
    }, function(){ return _verify_proxy(opt);
    }, function ensure$(){ E.task_remove(this); }]);
}

E.verify_proxy = function(opt){
    if (opt.rule.changing_proxy)
        return;
    opt.rule.changing_proxy = true;
    return etask({name: 'verify_proxy', cancel: true}, [function(){
	return _verify_proxy(opt);
    }, function ensure$(){ opt.rule.changing_proxy = false; }]);
};

E.change_proxy = function(opt){
    if (opt.rule.changing_proxy)
        return;
    opt.rule.changing_proxy = true;
    return etask({name: 'change_proxy', cancel: true}, [function(){
	return _change_proxy(opt);
    }, function ensure$(){ opt.rule.changing_proxy = false; }]);
};

// XXX arik/bahaa: fix status handling and use etask instead of schedule
E.change_proxy_wait = function(opt){
    return etask({name: 'change_proxy_wait', cancel: true}, [function(){
	if (E.get('status')!='busy')
	    return E.change_proxy(opt);
	E.once('change:status', function(){
	    this.econtinue(E.change_proxy(opt)); }.bind(this));
	return this.wait();
    }]);
};

function gen_user_login(){
    var cid = be_mode.get('svc.cid'), uuid = be_ext.get('uuid');
    return 'user-'+(cid ? 'cid-'+cid+'-' : '')+'uuid-'+uuid;
}

function _agent_auth_listener_cb(){
    var _key = be_ext.get('agent_key'), key = _key||storage.get('agent_key');
    var err = _key ? null : key ? 'be_agent_key_fallback' : 'be_no_agent_key';
    if (err)
        be_lib.perr_err({id: err, rate_limit: {count: 2}});
    if (key)
        return {username: gen_user_login(), password: key};
}

function agent_auth_listener_cb(details){
    if (!details.isProxy || details.realm!=='Hola Unblocker')
	return {};
    return {authCredentials: _agent_auth_listener_cb()};
}

function on_auth_required_cb(host){
    if (!/\.hola\.org$/.test(host) && !be_agent.is_agent(host))
	return;
    var auth = _agent_auth_listener_cb();
    return window.btoa(auth.username+':'+auth.password);
}

E.agent_auth_listener_del = function(){
    // XXX bahaa BACKWARD: rm default auth listener for v<1.7.910
    if (be_bg.def_auth_listener_del)
        be_bg.def_auth_listener_del();
    if (!be_bg.agent_auth_listener)
        return;
    if (!chrome)
    {
        B.be.proxy.on_auth_required.clear_listener();
	window.on_auth_required_cb = null;
    }
    else
    {
        chrome.webRequest.onAuthRequired.removeListener(
            be_bg.agent_auth_listener);
    }
    be_bg.agent_auth_listener = null;
};

E.agent_auth_listener_add = function(){
    // - extension version is too old. auth handler is set locally
    if (!B.have.auth_listener)
	return;
    E.agent_auth_listener_del();
    if (!chrome)
    {
	// exported so it can be called by ff privileged code
	be_bg.agent_auth_listener = window.on_auth_required_cb =
            on_auth_required_cb;
        B.be.proxy.on_auth_required.set_listener('on_auth_required_cb');
	return;
    }
    be_bg.agent_auth_listener = agent_auth_listener_cb;
    chrome.webRequest.onAuthRequired.addListener(agent_auth_listener_cb,
	{urls: ['<all_urls>']}, ['blocking']);
};

var safe_mode_urls = {};
E.set_safe_mode = function(root_url, ready){
    if (!root_url || !safe_mode_urls)
        return;
    safe_mode_urls[root_url] = ready||false;
};

E.is_safe_mode = function(root_url){
    if (!root_url || !safe_mode_urls)
        return;
    return safe_mode_urls[root_url];
};

E.reset_safe_mode = function(root_url){
    if (!root_url || !safe_mode_urls)
        return;
    delete safe_mode_urls[root_url];
};

return E; });
