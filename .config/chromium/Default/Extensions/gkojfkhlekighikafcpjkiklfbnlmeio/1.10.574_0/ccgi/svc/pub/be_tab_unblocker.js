// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
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
B.assert_bg('be_tab_unblocker');
var chrome, has_res_hdrs_url_redir, curr_rmt_ver;
var zopts = be_util.zopts;
var proxy_debug_timing = zopts.get('proxy_debug_timing');
var proxy_debug = zopts.get('proxy_debug')||proxy_debug_timing;
var new_unblocker_api = zopts.get('unblocker_api_new');
var E = new (be_backbone.model.extend({tab_unblockers: {},
    cookies_cleanup_urls: [], ff_proxy_for_url: {}, requests: {},
    agent_requests: {}, internal_reqs: {}, hosts_cache: {}, routing_reqs: {},
    routing_trace: {},
    _defaults: function(){ this.on('destroy', function(){ E.uninit(); }); },
}))();
var cb_wrapper = zerr.catch_unhandled_exception;
var SEC = date.ms.SEC, MIN = date.ms.MIN, HOUR = date.ms.HOUR;

var ff_exported = []; // exported so they can be called by ff privileged code
function ff_cb_wrapper(name){
    var args = array.args(arguments).slice(1);
    var wrapped = zerr.catch_unhandled_exception.apply(zerr, args);
    ff_exported.push({fn: wrapped, name: name});
    return wrapped;
}

function is_main_frame(details){
    return chrome ? !details.frameId && details.type=='main_frame' :
        details.is_main;
}

var hola_req_id = 0;
function make_internal_request(url, hdrs, opt){
    var req_url;
    // XXX alexeym/shachar: find a way to make .redirectUrl work in FF
    if (chrome)
        req_url = 'http://internal.hola/'+(++hola_req_id);
    else
        req_url = url;
    E.internal_reqs[req_url] = {url: url, hdrs: hdrs, opt: opt};
    return req_url;
}
function hola_XMLHttpRequest(url, method, hdrs, opt){
    var xhr = new XMLHttpRequest();
    var req_url = make_internal_request(url, hdrs, opt);
    xhr.hola_url = req_url;
    xhr.open(method, req_url);
    return xhr;
}

function hdrs_arr_to_obj(hdrs){
    var _hdrs = {};
    for (var i=0; i<hdrs.length; i++)
	_hdrs[hdrs[i].name] = hdrs[i].value;
    return _hdrs;
}

function routing_reqs_set_timer(url){
    E.routing_reqs[url].to = setTimeout(function(){
        delete E.routing_reqs[url]; }, 10000);
}

function send_direct_ajax(req){
    if (req.direct_req)
	return;
    req.hdrs = hdrs_arr_to_obj(req.hdrs);
    req.hdrs['Cache-Control'] = 'no-cache';
    try {
        var xhr = req.direct_req = hola_XMLHttpRequest(req.url, req.method,
            req.hdrs, {force: 'direct', ignore_redir: true, no_routing: true});
        trace_req(req, 'sending direct');
	xhr.onreadystatechange = cb_wrapper(function(){
            if (xhr.readyState===xhr.DONE)
            {
                var ir = E.internal_reqs[req.url]||{};
                if (!req.direct_resp && ir.res)
                    req.direct_resp = {code: ir.res.code, error: ir.res.error};
                if (new_unblocker_api)
                    req.strategy(req.direct_resp, req.proxy_resp);
                delete E.internal_reqs[req.url];
                delete E.internal_reqs[xhr.hola_url];
            }
	    if (xhr.readyState!=xhr.HEADERS_RECEIVED)
		return;
	    req.direct_resp = {
		code: xhr.status,
		len: xhr.getResponseHeader('Content-Length'),
		te: xhr.getResponseHeader('Transfer-Encoding'),
		lmod: xhr.getResponseHeader('Last-Modified'),
		etag: xhr.getResponseHeader('Etag'),
                type: xhr.getResponseHeader('Content-Type'),
	    };
            if (new_unblocker_api)
            {
                if (req.direct_timeout)
                    clearTimeout(req.direct_timeout);
                var cmd = req.strategy(req.direct_resp, req.proxy_resp);
                if (cmd.proxy.serve && !cmd.direct.serve)
                {
                    trace_req(req, 'aborting direct');
                    req.direct_req.abort();
                    return;
                }
            }
            else
            {
                if (req.algo=='direct_first_discover')
                    direct_first_discover_test_res(req, req.host_cache);
                if (req.proxy_resp)
                {
                    trace_req(req, 'aborting direct');
                    req.direct_req.abort();
                    return;
                }
            }
	    /* abort request if no chance of using this response as cache */
	    var cc = xhr.getResponseHeader('Cache-Control');
	    if (cc && (/no-store/.test(cc)
		|| (/(no-cache|must-revalidate|max-age)/.test(cc)
		&& !req.direct_resp.lmod && !req.direct_resp.etag)))
	    {
                trace_req(req, 'aborting direct');
		req.direct_req.abort();
	    }
	});
	xhr.send();
    } catch(e){}
}

E.parse_route_str = function(route_str, no_prot){
    var p = {full: route_str}, n;
    if (route_str=='DIRECT')
    {
	p.direct = 1;
	return p;
    }
    if (no_prot)
	n = ['', route_str];
    else
    {
	n = route_str.split(' ');
	p.prot = n[0];
    }
    n = n[1].split('.');
    p.country = n[0];
    p.algo = null;
    if (n.length>1)
    {
	n = n[1].split(',');
	for (var i=0; i<n.length; i++)
	{
	    if (n[i]=='PEER')
		p.peer = true;
	    else
		p.algo = n[i];
	}
    }
    return p;
};

E.gen_route_str = function(route_opt, opt){
    opt = opt||{};
    if (route_opt.direct)
	return 'DIRECT';
    var s = route_opt.country.toUpperCase(), r = [];
    if (route_opt.peer)
	r.push('PEER');
    if (!opt.no_algo && route_opt.algo)
        r.push(route_opt.algo);
    if (r.length)
	s += '.'+r.join(',');
    return s;
};

function route_opt_fixup(route_opt, opt, host_cache){
    if (host_cache && host_cache['allow_domain_'+route_opt.country]===false)
        return (route_opt.direct = true);
    if (opt.no_direct_filter || opt.no_routing)
	return (route_opt.algo = null);
    if (opt.algo)
	return (route_opt.algo = opt.algo);
    if (host_cache)
    {
        if (host_cache.direct_first=='proxy' &&
            route_opt.algo=='direct_first')
        {
            route_opt.algo = null;
        }
        else if (host_cache.direct_first_discover &&
            route_opt.algo=='direct_first_discover')
        {
            switch (host_cache.direct_first_discover)
            {
            case 'direct': route_opt.direct = 1; break;
            case 'proxy': route_opt.algo = null; break;
            }
        }
    }
    else
    {
        if (route_opt.algo==='direct_first' && !has_res_hdrs_url_redir)
            route_opt.direct = 1;
    }
}

function nodify_res(details){
    var ret, n = details.statusLine.match(/^HTTP\/(\d\.\d) (\d{3}) (.*)$/);
    if (!n)
    {
        be_lib.perr_err({id: 'bad_status_line', rate_limit: {count: 2},
            info: {statusLine: details.statusLine, url: details.url,
                method: details.method, statusCode: details.statusCode}});
        // XXX bahaa HACK: untill we find the reason for bad status line
        n = [null, '1.1', details.statusCode, ''];
    }
    ret = {
        httpVersion: n[1],
        statusCode: +n[2],
        reasonPhrase: n[3],
        headers: {},
    };
    if (!details.responseHeaders)
        return ret;
    try {
        // XXX alexeym/shachar/bahaa: sometimes it fails in Firefox,
        // need to find why: Permission denied to access property "forEach"
        details.responseHeaders.forEach(function(hdr){
            ret.headers[hdr.name.toLowerCase()] = hdr.value; });
    } catch(e){}
    return ret;
}

E.dfd_delay = 100;
E.dfd_tries = 1;

function _on_before_send_headers2(details, opt){
    var url = details.url, req = E.requests[details.requestId];
    var req_hdrs = details.requestHeaders;
    var modified = false;
    var is_http = url.substr(0, 5)==='http:' && url.indexOf(':443/')==-1;
    if (!req)
        return void trace_req(details, 'no req');
    var int_req = req.opt.int_req;
    if (int_req && int_req.hdrs)
    {
	var hdrs = int_req.hdrs;
	for (var h in hdrs)
        {
            modified = true;
	    req_hdrs.push({name: h, value: hdrs[h]});
        }
    }
    var cmd = req.strategy(req.direct_resp, req.proxy_resp);
    if (req.serving);
    else if (cmd.proxy)
    {
        if (cmd.direct && cmd.direct.start && !req.direct_req)
        {
            req.hdrs = req_hdrs;
            send_direct_ajax(req);
        }
        if (cmd.proxy.start)
        {
            for (var i=0; i<req_hdrs.length; i++)
            {
                if (req_hdrs[i].name.toLowerCase()!='x-hola-version')
                    continue;
                req_hdrs.splice(i, 1);
            }
            if (is_http)
            {
                req_hdrs.push({name: 'X-Hola-Version',
                    value: be_util.version()+' '+
                    ((chrome&&be_util.get_product())||be_util.browser())});
                modified = true;
            }
            if (cmd.proxy.hdrs_only && is_http)
            {
                req_hdrs.push({name: 'X-Hola-Headers-Only', value: '1'});
                modified = true;
            }
        }
    }
    else if (cmd.direct); // remove
    if (!modified)
        return;
    trace_req(details, 'hdrs modified');
    return void(details.ret.requestHeaders = req_hdrs);
}

function _on_before_send_headers(details, host, proxy_str, opt){
    var url = details.url, req = E.requests[details.requestId];
    var req_hdrs = details.requestHeaders;
    if (!req)
	return;
    if (opt.proxy_req && opt.proxy_req.hdrs)
    {
	var hdrs = opt.proxy_req.hdrs;
	for (var h in hdrs)
	    req_hdrs.push({name: h, value: hdrs[h]});
	if (req.route_opt.direct)
        {
            trace_req(details, 'proxy_req route_opt.direct');
	    return void(details.ret.requestHeaders = req_hdrs);
        }
    }
    if (req.route_opt.direct)
    {
        trace_req(details, 'route_opt.direct');
	return;
    }
    for (var i=0; i<req_hdrs.length; i++)
    {
        if (req_hdrs[i].name.toLowerCase()!='x-hola-version')
            continue;
        req_hdrs.splice(i, 1);
    }
    var is_main = is_main_frame(details);
    var is_http = url.substr(0, 5)==='http:';
    var use_x_hola = !is_main && is_http && E.x_hola_country_supported;
    if (is_http)
    {
        req_hdrs.push({name: 'X-Hola-Version', value: be_util.version()+' '+
            ((chrome&&be_util.get_product())||be_util.browser())});
    }
    if (req.hola_routing && !req.hdrs_sent)
    {
        trace_req(details, 'hola_routing use algorithm: '+req.algo);
        switch (req.algo)
        {
        case 'dns_only':
            req_hdrs.push({name: 'X-Hola-Dns-Only', value: '1'});
            break;
        case 'direct_first':
            if (has_res_hdrs_url_redir)
                break;
            // Send direct on Chrome <v35
            req.hdrs = req_hdrs;
            req.sp = send_direct_ajax(req);
            if (is_http)
                req_hdrs.push({name: 'X-Hola-Direct-First', value: '1'});
            break;
        case 'direct_first_discover':
            var host_cache = E.hosts_cache[host];
            if (!host_cache)
                host_cache = E.hosts_cache[host] = {timers: {}};
            var dfd = host_cache.direct_first_discover;
            if (dfd=='proxy')
                break;
            if (is_http && (dfd=='direct' || host_cache.direct_first_test_req))
            {
                // direct: we just want to ping the agent and go direct
                req_hdrs.push({name: 'X-Hola-Direct-First', value: '1'});
                if (!dfd)
                {
                    trace_req(details, 'delay '+E.dfd_delay+'ms');
                    req.count = E.dfd_tries;
                    req.hdrs = req_hdrs;
                    req.sp = send_direct_ajax(req);
                    req_hdrs.push({name: 'X-Hola-Delay',
                        value: E.dfd_delay.toString()});
                }
                break;
            }
            if (is_http)
                host_cache.direct_first_test_req = req;
            req.hdrs = req_hdrs;
            req.sp = send_direct_ajax(req);
            if (is_http)
                req_hdrs.push({name: 'X-Hola-Direct-Discover', value: '1'});
            break;
        case 'direct_discover':
            req.hdrs = req_hdrs;
            req.sp = send_direct_ajax(req);
            if (is_http)
                req_hdrs.push({name: 'X-Hola-Direct-Discover', value: '1'});
            break;
        default:
            trace_req(details, 'algorithm not supported: '+req.algo);
            zerr('algorithm not supported: '+req.algo);
            return;
        }
        req.hdrs_sent = true;
        return void(details.ret.requestHeaders = req_hdrs);
    }
    return void(details.ret.requestHeaders = req_hdrs);
}

function direct_first_discover_set(host_cache, decision, reason, req){
    trace_req(req, 'direct_first_discover set '+decision+' ('+reason+')');
    host_cache.direct_first_discover = decision;
    clearTimeout(host_cache.timers.direct_first_discover);
    host_cache.timers.direct_first_discover = setTimeout(function(){
        host_cache.direct_first_discover = null; }, 5*MIN);
}

function direct_first_discover_test_res(req, host_cache, res){
    var p, d;
    if (!host_cache)
        return;
    // direct ajax hasn't started yet, can't make decision
    if (!(d=req.direct_resp))
        return;
    // agent proxy request failed or completed by agent (small)
    if (res)
    {
        req.proxy_resp = {
            code: res.statusCode,
            len: res.headers['content-length'],
            te: res.headers['transfer-encoding'],
            lmod: res.headers['last-modified'],
            etag: res.headers.etag,
            type: res.headers['content-type'],
            error: res.headers['x-hola-error']
        };
    }
    // agent proxy response missing for some reason, can't make decision
    if (!(p=req.proxy_resp))
        return;
    // proxy failed or both failed
    if (p.error)
    {
        return direct_first_discover_set(host_cache, 'direct', 'proxy error',
            req);
    }
    if (!p.code || !d.code)
        return;
    var match = unblocker_lib.resp_match(req.proxy_resp, req.direct_resp);
    if (!match)
        return;
    var decision = match.match ? 'direct' : 'proxy';
    return direct_first_discover_set(host_cache, decision,
        match.basis+' '+(match.match ? 'match' : 'mismatch'), req);
}

function get_strategy_resp(res){
    var resp;
    if (res.headers['x-hola-response'])
    {
        resp = {
            code: res.headers['x-hola-status-code'],
            len: res.headers['x-hola-content-length'],
            te: res.headers['x-hola-transfer-encoding'],
            lmod: res.headers['x-hola-last-modified'],
            etag: res.headers['x-hola-etag'],
            type: res.headers['x-hola-content-type'],
            error: res.headers['x-hola-error'],
        };
    }
    else
    {
        resp = {
            code: res.statusCode,
            len: res.headers['content-length'],
            te: res.headers['transfer-encoding'],
            lmod: res.headers['last-modified'],
            etag: res.headers.etag,
            type: res.headers['content-type'],
            error: res.headers['x-hola-error']
        };
    }
    resp.policy = res.headers['x-hola-policy'];
    return resp;
}

function _on_headers_received2(details, host){
    var req_id = details.requestId;
    var req = E.requests[req_id];
    var res = nodify_res(details);
    if (!req)
        return void trace_req(details, 'no req');
    if (!res)
        return void trace_req(details, 'invalid res '+details.statusLine);
    var tab_unblocker = details.tabId && E.tab_unblockers[details.tabId];
    var hola_warn = res.headers['x-hola-warning'];
    var hola_agent = res.statusCode==407 &&
        res.headers['proxy-authenticate']=='Basic realm=\"Hola Unblocker\"';
    if (req.opt.int_req && req.opt.ignore_redir && !req.opt.int_req.res &&
        !hola_agent)
    {
        req.opt.int_req.res = res;
        req.cancel = true;
    }
    // Since the agent ping and verification mechanism is currently tied to
    // rules and rules are assigned to tabs, we don't intiate an agent change
    // if there is no tab associated with this webRequest
    if (hola_warn && tab_unblocker && !tab_unblocker.rule.changing_proxy)
    {
        trace_req(details, hola_warn+' warning from agent', {level: 'warn'});
        change_agent(details, req, hola_warn);
    }
    var resp = get_strategy_resp(res);
    if (req.proxy_req)
    {
        if (hola_agent) // ignore 407 authenticate from agent
            return void trace_req(details, 'agent 407');
        req.proxy_resp = resp;
        if (!req.direct_resp)
            req.direct_resp = {slow: true}; // timeout
    }
    else if (req.direct_req)
        req.direct_resp = resp;
    var cmd = req.strategy(req.direct_resp, req.proxy_resp);
    if (cmd.proxy)
    {
        // if the proxy is head_only, it returned a 302 and will rerun as full
        // proxy, otherwise just serve what we got
        if (cmd.proxy.serve)
        {
            trace_req(details, 'serving proxy '+cmd.log);
            return void(req.serving = 'proxy');
        }
        if (cmd.direct)
        {
            if (cmd.direct.serve)
            {
                trace_req(details, 'serving direct '+cmd.log);
                req.serving = 'direct';
                if ({302: 1, 303: 1, 307: 1}[res.statusCode])
                    return;
                return void(details.ret.redirectUrl = req.url);
            }
        }
    }
    else if (cmd.direct)
    {
        if (cmd.direct.serve)
        {
            trace_req(details, 'serving direct '+cmd.log);
            return void(req.serving = 'direct');
        }
        return void(details.ret.redirectUrl = req.url);
    }
    // if resp from proxy and no decision yet, serve it as we can't wait
    // any longer
    if (req.proxy_resp)
    {
        if (req.direct_req && !req.direct_resp)
        {
            req.direct_timeout = setTimeout(function(){
                trace_req(details, 'aborting direct timeout');
                req.direct_req.abort();
            }, 5000);
        }
        trace_req(details, 'serving proxy direct timeout');
        return void(req.serving = 'proxy');
    }
}

function _on_headers_received(details, host){
    var req_id = details.requestId;
    var req = E.requests[req_id];
    var host_cache = E.hosts_cache[host];
    var res = nodify_res(details);
    if (!res)
        return; // XXX bahaa TEMP: remove
    var is2xx = res.statusCode>=200 && res.statusCode<300;
    var tab_unblocker = details.tabId && E.tab_unblockers[details.tabId];
    var hola_warn = res.headers['x-hola-warning'];
    var hola_agent = res.statusCode==407 &&
        res.headers['proxy-authenticate']=='Basic realm=\"Hola Unblocker\"';
    // XXX colin/shachar: add perr with all information need to !req
    if (!req)
        return void trace_req(details, 'no req found');
    switch (res.headers['x-hola-policy'])
    {
    case 'blocked':
        req.route_opt.direct = true;
        return;
    case 'blocked domain':
        if (!host_cache)
            host_cache = E.hosts_cache[host] = {timers: {}};
        req.route_opt.direct = true;
        var ad = 'allow_domain_'+req.route_opt.country;
        host_cache[ad] = false;
        clearTimeout(host_cache.timers[ad]);
        host_cache.timers[ad] = setTimeout(function(){
            host_cache[ad] = undefined; }, HOUR);
        return;
    }
    if (req.opt.proxy_req && req.opt.ignore_redir && !req.opt.proxy_req.res &&
        !hola_agent)
    {
        req.opt.proxy_req.res = res;
    }
    if (req.route_opt.direct)
        return void trace_req(details, 'route_opt.direct');
    // Since the agent ping and verification mechanism is currently tied to
    // rules and rules are assigned to tabs, we don't intiate an agent change
    // if there is no tab associated with this webRequest
    if (hola_warn && tab_unblocker && !tab_unblocker.rule.changing_proxy)
    {
        trace_req(details, hola_warn+' warning from agent', {level: 'warn'});
        change_agent(details, req, hola_warn);
    }
    // Handle response for full proxy requests and internal requests marked
    // ignore_redir
    if (!req.hola_routing)
    {
	// XXX colin: this is where we can modify the response headers of
	// hola_trigger requests in case they are invalid (not from agent)
        if (req.opt.ignore_redir && !hola_agent)
            req.cancel_req = true;
        trace_req(details, 'no hola_routing'+(details.statusLine ? ' status: '+
            details.statusLine : ''));
        return;
    }
    if (has_res_hdrs_url_redir)
    {
        // XXX alexey: reuse (move logic to shared function): use direct_first
        // decision/caching algorithm.
        // Handle direct first response on Chrome >=v35
        // Non-2xx direct response (or 304 Not Modified)
        if (req.algo=='direct_first' && !is2xx && res.statusCode!=304)
        {
            req.test_direct_block = {code: res.statusCode,
                headers: res.headers};
            req.route_opt.algo = null;
            trace_req(details, 'direct_first redirect');
            return void(details.ret.redirectUrl = req.url);
        }
        // Agent 2xx response after direct non-2xx response
        // XXX amir: if we get 403 or invalid redirect, try with another agent,
        // also needed for direct_discover and full proxy
        if (req.test_direct_block)
        {
            if (!host_cache)
                host_cache = E.hosts_cache[host] = {timers: {}};
            if (is2xx || res.statusCode==304)
            {
                trace_req(details, 'test_direct_block');
                host_cache.direct_first = 'proxy';
                clearTimeout(host_cache.timers.direct_first);
                host_cache.timers.direct_first = setTimeout(function(){
                    host_cache.direct_first = null; }, 5*MIN);
            }
            // if we got the same redirect on proxy then the original direct
            // was probably successful
            else if (res.statusCode>=300 && res.statusCode<400 &&
                res.statusCode==req.test_direct_block.code)
            {
                req.route_opt.algo = 'direct_first';
            }
            req.test_direct_block = null;
        }
    }
    // Finalize request if we received an unrecoverable error reponse or when
    // a direct_discover request for a small file was completed by the agent
    var x_hola_resp = res.headers['x-hola-response'];
    if (!(res.statusCode===302 && +x_hola_resp))
    {
        trace_req(details, 'direct response status: '+res.statusCode+
            (x_hola_resp ? ' x-hola-response: '+x_hola_resp : ''));
        req.hola_routing = false;
        delete E.agent_requests[req.url];
        if (req.algo=='direct_first_discover')
        {
            trace_req(details, 'direct_first_discover');
            direct_first_discover_test_res(req, host_cache, res);
            if (host_cache.direct_first_test_req)
                host_cache.direct_first_test_req = null;
            if (req.direct_resp)
            {
                trace_req(details, 'aborting direct discover request');
                req.direct_req.abort();
            }
        }
        else if (req.direct_req)
        {
            trace_req(details, 'aborting direct request');
            req.direct_req.abort();
        }
        return;
    }
    // Agent response
    switch (req.algo)
    {
    case 'dns_only':
        req.hdrs_recv = true;
        req.dns_ip = res.headers['x-hola-dns-ip'];
        break;
    case 'direct_first': req.hdrs_recv = true; break;
    case 'direct_first_discover':
    case 'direct_discover':
        req.proxy_resp = {
            code: res.headers['x-hola-status-code'],
            len: res.headers['x-hola-content-length'],
            te: res.headers['x-hola-transfer-encoding'],
            lmod: res.headers['x-hola-last-modified'],
            etag: res.headers['x-hola-etag'],
            type: res.headers['x-hola-content-type'],
            error: res.headers['x-hola-error'],
        };
        if (req.proxy_resp.code)
            req.hdrs_recv = true;
        break;
    }
    if (!E.routing_reqs[req.url])
    {
        trace_req(details, 'set routing req');
        E.routing_reqs[req.url] = {req: req};
    }
    routing_reqs_set_timer(req.url);
}

function _on_before_request2(details, opt){
    var url = details.url;
    var req = E.requests[details.requestId];
    if (!req)
    {
        var force = opt.force ||
            (opt.rule && opt.rule.md5=='premium' ? 'proxy' : null);
	req = E.requests[details.requestId] = {
	    id: details.requestId,
	    url: url,
            strategy: unblocker_lib.handle_request(url, {force: force,
                top_url: opt.rule ? zurl.add_proto(opt.rule.name)+'/' :
                    opt.int_req && opt.int_req.hdrs ?
                    opt.int_req.hdrs.Referer : null,
                type: details.type, rigid_serve: !has_res_hdrs_url_redir}),
	    method: details.method,
            opt: opt,
        };
        trace_req(details, 'new req '+req.strategy.desc);
    }

    function gen_proxy_req(req, cmd){
        req.route_opt = {prot: 'PROXY',
            country: req.opt.country||req.opt.rule.country};
        if (cmd.proxy.peer)
            req.route_opt.peer = true;
        var proxy_str = build_proxy_string(req);
        if (proxy_str=='DIRECT')
        {
            trace_req(details, 'setting proxy failed');
            req.proxy_resp = {code: 0, error: 'failed set proxy'};
        }
        trace_req(details, 'setting proxy to '+proxy_str);
        if (!chrome)
        {
            E.ff_proxy_for_url[url] = _.extend({str: proxy_str,
                t: ff_proxy_timer(url)}, {});
        }
        else
            be_pac.set_proxy_for_url(details.url, proxy_str);
    }

    if (req.cancel)
    {
        trace_req(details, 'canceling req');
        return void(details.ret.cancel = true);
    }
    var cmd = req.strategy(req.direct_resp, req.proxy_resp);
    if (!cmd)
        return void trace_req(details, 'no strategy command');
    if (req.serving)
    {
        if (req.serving=='proxy')
            gen_proxy_req(req, cmd);
    }
    else if (cmd.proxy)
    {
        req.proxy_req = false;
        if (cmd.proxy.serve || (cmd.direct && cmd.direct.serve))
        {
            // before request we prefer to serve direct (easier)
            req.serving = cmd.direct && cmd.direct.serve ? 'direct' : 'proxy';
            trace_req(details, 'serving '+req.serving+' '+cmd.log);
            if (req.serving=='direct')
                return;
            gen_proxy_req(req, cmd);
        }
        else if (cmd.proxy.start && !req.proxy_req)
        {
            req.proxy_req = true;
            gen_proxy_req(req, cmd);
        }
        else if (cmd.proxy.abort)
        {
            trace_req(details, 'aborting proxy '+cmd.log);
            return void(details.ret.cancel = true);
        }
        if (cmd.direct && cmd.direct.abort && req.direct_req)
        {
            trace_req(details, 'aborting direct '+cmd.log);
            req.direct_req.abort();
        }
    }
    else if (cmd.direct)
    {
        if (cmd.direct.serve)
        {
            trace_req(details, 'serving direct '+cmd.log);
            req.serving = 'direct';
        }
        else if (cmd.direct.start)
            req.direct_req = true;
        else if (cmd.direct.abort)
        {
            trace_req(details, 'aborting direct '+cmd.log);
            return void(details.ret.cancel = true);
        }
    }
}

function _on_before_request(details, host, route_str, opt){
    var url = details.url, route_opt, proxy_str;
    var req = E.requests[details.requestId];
    // XXX alexey: move hosts caching to shared logic
    var host_cache = E.hosts_cache[host];
    if (!req)
    {
	req = E.requests[details.requestId] = {
	    id: details.requestId,
	    url: url,
	    host: host,
	    route_opt: E.parse_route_str(route_str),
	    method: details.method,
	    opt: opt,
	};
	route_opt_fixup(req.route_opt, opt, host_cache);
    }
    route_opt = req.route_opt;
    if (route_opt.direct)
	return;
    if (req.cancel_req)
	return void(details.ret.cancel = true);
    var is_main = is_main_frame(details);
    var is_http = url.substr(0, 5)==='http:';
    if (!chrome)
    {
        // direct first is treated as direct for Firefox
	E.ff_proxy_for_url[url] = _.extend({route_opt: route_opt,
	    t: ff_proxy_timer(url)}, {});
	return;
    }
    var use_x_hola = !is_main && is_http && E.x_hola_country_supported;
    // XXX amir: exit immediately for svc
    // XXX alexey: move to shared logic
    if (req.hola_routing)
    {
	req.hola_routing = false;
	delete E.agent_requests[req.url];
        trace_req(details, 'routing algorithm: '+req.algo);
	switch (req.algo)
	{
	case 'dns_only':
	    if (!req.hdrs_sent || !req.hdrs_recv)
		return;
	    var ips = req.dns_ip.split(',');
            // XXX shachar: it seems that we assign a string to 'route_opt',
            // while this function uses this var as an object
	    route_opt = ips[0]+':80';
	    break;
	case 'direct_first':
	    if (has_res_hdrs_url_redir)
	    {
		req.algo = null;
		req.hola_routing = true;
		E.agent_requests[url] = E.requests[details.requestId] = req;
	    }
            // Chrome <v35 logic (in direct_first_discover case)
	    else if (req.hdrs_sent && req.hdrs_recv && req.direct_resp.code)
	    {
		if (req.direct_resp.code>=200 && req.direct_resp.code<300)
		    return;
	    }
	    else
	    {
		req.hdrs_sent = req.hdrs_recv = false;
		if (req.count==3)
		    req.algo = 'direct_discover';
		req.count++;
		req.hola_routing = true;
		E.agent_requests[url] = E.requests[details.requestId] = req;
	    }
	    break;
	case 'direct_first_discover':
            if (!host_cache)
                break;
            var dfd_req = host_cache.direct_first_test_req;
            if (dfd_req)
            {
                if (dfd_req==req)
                {
                    direct_first_discover_test_res(req, host_cache);
                    host_cache.direct_first_test_req = null;
                }
                else
                {
                    if (!--req.count)
                    {
                        trace_req(details, 'no more delaying');
                        req.algo = null;
                    }
                    else
                    {
                        req.hdrs_sent = req.hdrs_recv = false;
                        req.hola_routing = true;
                        E.agent_requests[url] =
                            E.requests[details.requestId] = req;
                    }
                }
            }
            var dfd = host_cache.direct_first_discover;
            if (dfd=='direct')
            {
                route_opt.direct = true;
                return;
            }
            if (dfd=='proxy')
            {
                req.algo = null;
                if (req.direct_req)
                {
                    trace_req(details, 'aborting direct');
                    req.direct_req.abort();
                }
                break;
            }
            if (!req.direct_req)
                break;
            if (req.direct_resp)
            {
                trace_req(details, 'aborting direct');
                req.direct_req.abort();
            }
            break;
	case 'direct_discover':
	    if (req.hdrs_sent && req.hdrs_recv && req.direct_resp &&
                req.direct_resp.code)
	    {
		var p = req.proxy_resp, d = req.direct_resp;
		var cond = p.code==d.code && p.len && d.len && p.len==d.len;
		/* XXX shachar: check adding etag/lmod check for chunked
		 * encoding
		var cond = p.code==l.code && ((p.len && l.len && p.len==l.len)
		    || (p.te && l.te && p.te==l.te
		    && ((p.lmod && l.lmod && p.lmod==l.lmod)
		    || (p.etag && l.etag && p.etag==l.etag)))); */
		if (cond)
		    return;
	    }
	    if (req.direct_req)
            {
                trace_req(details, 'aborting direct');
		req.direct_req.abort();
            }
	    break;
	default:
            trace_req(details, 'algorithm not supported: '+req.algo);
	    return void zerr('algorithm not supported: '+req.algo);
	}
    }
    else if (route_opt.algo && details.method=='GET' &&
        !E.agent_requests[url])
    {
	E.agent_requests[url] = req;
	// Mark the request as interesting to our algorithms, e.g. we have to
        // look at its headers later
        req.hola_routing = true;
	req.algo = route_opt.algo;
	switch (req.algo)
        {
        case 'direct_first':
            if (!has_res_hdrs_url_redir)
                req.count = 0;
            break;
        case 'direct_first_discover':
            if (!host_cache)
                host_cache = E.hosts_cache[host] = {timers: {}};
            break;
        }
    }
    if (has_res_hdrs_url_redir && route_opt.algo=='direct_first')
        return void(trace_req(details, 'direct_first'));
    proxy_str = build_proxy_string(req);
    trace_req(details, 'setting proxy to '+proxy_str);
    be_pac.set_proxy_for_url(details.url, proxy_str);
}

E.is_vpn_allowed = function(_url, is_main){
    var url = zurl.parse(_url);
    var protocol = url.protocol;
    var hostname = url.hostname;
    var port = url.port;
    if (!protocol || !hostname)
    {
        be_lib.perr_err({id: 'url_parsing_failed', info: url});
        return false;
    }
    // XXX alexeym: need to find a way to check complex intranet domains
    // like http://local.web/
    if (hostname.indexOf('.')==-1)
        return false;
    if (be_agent.is_agent(hostname))
        return false;
    if (!{'http:': 1, 'https:': 1}[protocol])
        return false;
    if (port && !{'http:80': 1, 'https:443': 1}[protocol+port])
        return false;
    if (zurl.is_ip(hostname))
    {
        if (is_main)
            return false;
        if (zbrowser.isInNet(hostname, '10.0.0.0', '255.0.0.0') ||
            zbrowser.isInNet(hostname, '172.16.0.0', '255.240.0.0') ||
            zbrowser.isInNet(hostname, '192.168.0.0', '255.255.0.0') ||
            zbrowser.isInNet(hostname, '127.0.0.0', '255.0.0.0'))
        {
            return false;
        }
    }
    if (zurl.get_top_level_domain(hostname)=='localhost' ||
        zurl.is_hola_domain(hostname))
    {
        return false;
    }
    return true;
};

// We must use cb_wrapper() when defining the callbacks rather than when
// registering them, because on unregisteration, we must provide the exact same
// functions we used for registration.

var on_before_request = ff_cb_wrapper('on_before_request', function(d){
    trace_req(d, 'before request');
    // provided d obj is not extinsible in firefox
    tab_unblocker_cb(d = _.extend({}, d, {handler: new_unblocker_api ?
        _on_before_request2 : _on_before_request,
        cbname: 'on_before_request', ret: {}}));
    return d.ret;
});

function build_trace_string(req_id, trace){
    return 'reqid '+req_id+': '+trace.join(', ');
}

var on_before_send_headers = ff_cb_wrapper('on_before_send_headers',
    function(d){
    trace_req(d, 'send headers');
    tab_unblocker_cb(d = _.extend({}, d, {handler: new_unblocker_api ?
        _on_before_send_headers2 : _on_before_send_headers,
        cbname: 'on_before_send_headers', ret: {}}));
    var trace = proxy_debug && E.routing_trace[d.requestId];
    if (trace)
    {
        trace = trace.trace;
        d.ret.requestHeaders = d.ret.requestHeaders||d.requestHeaders||[];
        d.ret.requestHeaders.push({name: 'X-Hola-Unblocker-Bext',
            value: build_trace_string(d.requestId, trace)});
        d.ret.requestHeaders.push({name: 'X-Hola-Request-Id',
            value: d.requestId});
    }
    return d.ret;
});

var on_headers_received = ff_cb_wrapper('on_headers_received', function(d){
    trace_req(d, 'headers received');
    tab_unblocker_cb(d = _.extend({}, d, {handler: new_unblocker_api ?
        _on_headers_received2 : _on_headers_received,
        cbname: 'on_headers_received', ret: {}}));
    var trace = proxy_debug && E.routing_trace[d.requestId];
    if (trace)
    {
        trace = trace.trace;
        d.ret.responseHeaders = d.ret.responseHeaders||d.responseHeaders||[];
        d.ret.responseHeaders.push({name: 'X-Hola-Unblocker-Bext',
            value: build_trace_string(d.requestId, trace)});
        d.ret.responseHeaders.push({name: 'X-Hola-Request-Id',
            value: d.requestId});
    }
    return d.ret;
});

// on_completed and on_error_occurred are merged in firefox, so this will also
// be called for errors
var on_completed = ff_cb_wrapper('on_completed', function(d){
    trace_req(d, 'completed');
    tab_unblocker_end_cb(d = _.extend({}, d, {cbname: 'on_completed',
        ret: {}}));
    return d.ret;
});

var on_error_occurred = cb_wrapper(function(d){
    tab_unblocker_end_cb(_.extend(d, {cbname: 'on_error_occurred', ret: {}}));
    return d.ret;
});

function trace_req(req, msg, opt){
    if (!proxy_debug && !opt)
        return;
    // XXX shachar: quick hack to avoid exception, need to trace root cause
    if (!req)
        return;
    opt = _.defaults(opt||{}, {level: 'debug'});
    zerr[opt.level]('be_tab_unblocker: '+(req.requestId||req.id)+' '+
        req.url+' '+msg);
    var trace = E.routing_trace[req.requestId||req.id];
    if (!trace)
    {
        trace = E.routing_trace[req.requestId||req.id] = {trace: [],
            ts: Date.now(), url: req.url};
    }
    if (req.url!=trace.url)
    {
        msg+=' '+req.url;
        trace.url = req.url;
    }
    if (proxy_debug_timing)
    {
        var current_time = Date.now();
        var ts_diff = current_time-trace.ts;
        trace.ts = current_time;
        msg = '+'+ts_diff+'ms '+msg;
    }
    trace.trace.push(msg);
}

function ff_proxy_timer(url){
    return setTimeout(function(){ delete E.ff_proxy_for_url[url]; }, 10000); }

// XXX colin: remove once found bug of reload
function dbg_rmt_ver_load_cb_old_ver(){
    if (!window.RMT || window.RMT.ver==curr_rmt_ver)
	return;
    be_lib.perr_err({id: 'rmt_ver_load_cb_old_ver',
	info: (new Error()).stack});
}

function tab_unblocker_cb(details){
    // XXX shachar: quick hack to avoid exception, need to trace root cause
    if (!details.url)
        return;
    dbg_rmt_ver_load_cb_old_ver();
    var url = details.url;
    var host = zurl.get_host(url);
    var tab_unblocker = details.tabId && E.tab_unblockers[details.tabId];
    var is_main = is_main_frame(details);
    var rule_info, req = E.requests[details.requestId];
    var handler = details.handler ||
        (new_unblocker_api ? _on_before_request2 : _on_before_request);
    var route_str;
    if (chrome && !be_pac.has_pac)
    {
        trace_req(details, 'no pac'+(details.statusLine ? ' status: '+
            details.statusLine : ''));
        return;
    }
    if (req)
    {
        // Got webRequest event on existing browser request
        if (new_unblocker_api)
            return handler(details, req.opt);
	return handler(details, host, req.route_str, req.opt);
    }
    if ((req=E.routing_reqs[url]))
    {
        // Got webRequest for a routing request we already handled but was
        // canceled by chrome kernel before redirect so we load the old request
        // data and continue as if it was redirected
        delete E.routing_reqs[url];
        clearTimeout(req.to);
        req = req.req;
        req.id = details.requestId;
        E.requests[details.requestId] = req;
        if (new_unblocker_api)
            return handler(details, req.opt);
	return handler(details, host, req.route_str, req.opt);
    }
    if ((req=E.internal_reqs[url]))
    {
        // Got webRequest for a request that we initiated internally
        // XXX alexeym/shachar: find a way to make it work in FF
        if (chrome && host=='internal.hola')
        {
            req.reqid = details.requestId;
            E.internal_reqs[req.url] = req;
            delete E.internal_reqs[url];
            return void(details.ret.redirectUrl = req.url);
        }
        if (!chrome || req.reqid==details.requestId)
        {
            if (new_unblocker_api)
                return handler(details, _.extend({}, req.opt, {int_req: req}));
            route_str = E.gen_route_str(zutil.extend({},
                req.opt.force=='direct' ? {direct: true} : {},
                _.pick(req.opt, 'country', 'peer')));
            if (req.opt.force!='direct')
                route_str = 'PROXY '+route_str;
            return handler(details, host, route_str,
                _.extend({}, req.opt, {proxy_req: req}));
        }
    }
    // we can only make proxy decisions onBeforeRequest
    if (details.requestHeaders || details.responseHeaders)
    {
        if (details.statusLine)
            trace_req(details, 'status: '+details.statusLine);
        return;
    }
    /* when the root_url changes on a tab the request is send before we are
     * able to enable/disable the tab unblocking, so we make sure that when
     * loading main_frame urls they are still within the root_url domain */
    if (is_main)
    {
	rule_info = get_rule_info_from_url(url);
	if (!tab_unblocker)
	{
	    if (rule_info && details.tabId!=-1)
		return void tab_unblocker_add(details.tabId, rule_info, url);
	}
	else if (!rule_info || rule_info.root_url!=tab_unblocker.root_url)
	{
	    tab_unblocker_del(details.tabId);
	    if (rule_info)
		tab_unblocker_add(details.tabId, rule_info, url);
	    return;
	}
    }
    if (!E.is_vpn_allowed(url, is_main))
	return void(trace_req(details, 'vpn is not allowed'));
    var rule = tab_unblocker && tab_unblocker.rule;
    var country = tab_unblocker && tab_unblocker.country;
    if (!tab_unblocker)
    {
	// XXX arik/shachar hack: need to find a way to send background
	// requests through proxy (and rm ?ping...)
	if ((details.tabId==-1 && details.frameId==-1) ||
	    (details.tabId==-1 && (url||'').search('hola_trigger?ping')==-1))
	{
	    if (rule_info || (rule_info = get_rule_info_from_url(url)))
	    {
		rule = rule_info.rule;
		country = rule_info.rule.country;
	    }
	    else if ((tab_unblocker =
                E.tab_unblockers[be_tabs.get('active.id')]))
	    {
		rule = tab_unblocker.rule;
		country = tab_unblocker.country;
	    }
	}
    }
    if (!rule)
	return;
    if (!be_ext.get('agent_key'))
    {
        be_lib.perr_err({id: 'be_no_agent_key2', rate_limit: {count: 2}});
        return; // not proxying requests if we don't have a key
    }
    if (new_unblocker_api)
        return _on_before_request2(details, {rule: rule});
    route_str = pac_engine.find_proxy_for_url_rule(rule.id, url,
	host, is_main, rule.no_direct_filter);
    trace_req(details, 'routing '+route_str);
    if (route_str==='DIRECT')
	return;
    return _on_before_request(details, host, route_str,
	{no_direct_filter: rule.no_direct_filter});
}

function change_agent(details, req, reason){
    var bad_agents = be_agent.agents[E.gen_route_str(req.route_opt,
        {no_algo: true}).toLowerCase()];
    var tab_unblocker = details.tabId && E.tab_unblockers[details.tabId];
    if (!bad_agents)
    {
        be_lib.perr_err({id: 'debug_null_agents', info: {
            agents: be_agent.agents,
            req: req,
            details: details,
        }});
    }
    be_lib.perr_ok({id: 'be_tab_unblocker_change_agent',
        info: {reason: reason, bad_agents: _.pluck(bad_agents, 'host')}});
    return E.be_rule.change_proxy({
        rule: tab_unblocker.rule,
        zgettunnels_retry: be_defines.ZGETTUNNELS_RETRY,
        exclude: _.pluck(bad_agents, 'host'),
    });
}

function ext_on_err(details, req){
    return etask([function(){
        var tab_unblocker = details.tabId && E.tab_unblockers[details.tabId];
        if (tab_unblocker.rule.changing_proxy)
            return this.ereturn;
        return change_agent(details, req, details.error);
    }, function(){ B.tabs.reload(details.tabId); }]);
}

var tab_unblocker_end_cb = cb_wrapper(function(details){
    dbg_rmt_ver_load_cb_old_ver();
    if (be_pac.metro_test_cb)
	be_pac.metro_test_cb(details);
    var reqid = details.requestId;
    var req = E.requests[reqid];
    if (req)
    {
	delete E.requests[reqid];
        delete_trace_req(reqid);
	var agent_req = E.agent_requests[req.url];
	if (agent_req && agent_req.id==req.id)
	    delete E.agent_requests[req.url];
        if (new_unblocker_api)
        {
            var resp;
            if (details.error)
                resp = {code: 0, error: details.error};
            else
            {
                // chrome is supposed to give us the responseHeaders here (but
                // supposed to is a name of a fish)
                if (details.responseHeaders)
                    resp = get_strategy_resp(nodify_res(details));
            }
            if (resp && !req.serving)
            {
                if (req.proxy_req)
                    req.proxy_resp = resp;
                else if (req.direct_req)
                    req.direct_resp = resp;
            }
            var cmd = req.strategy(req.direct_resp, req.proxy_resp);
        }
	var int_req = E.internal_reqs[req.url];
        if (int_req)
        {
            if (details.error)
            {
                int_req.error = details.error;
                if (!int_req.res)
                    int_req.res = {code: 0, error: int_req.error};
            }
            else if (!int_req.res)
                int_req.res = nodify_res(details);
        }
	if (!new_unblocker_api && req.direct_req &&
            req.algo!=='direct_first_discover')
        {
            trace_req(details, 'aborting direct');
	    req.direct_req.abort();
        }
    }
    var tab_unblocker = details.tabId && E.tab_unblockers[details.tabId];
    var is_main = is_main_frame(details);
    if (!tab_unblocker || !req || !details.error)
        return;
    trace_req(details, 'error '+details.error, {level: 'err'});
    if (!zutil.bool_lookup('net::ERR_PROXY_CONNECTION_FAILED '
        +'net::ERR_CONNECTION_CLOSED net::ERR_CONNECTION_RESET '
        +'net::ERR_TIMED_OUT')[details.error])
    {
        return;
    }
    be_lib.perr_err({id: 'webrequest_error', info: {url: req.url}});
    return ext_on_err(details, req);
});

var ff_find_proxy_for_url = ff_cb_wrapper('ff_find_proxy_for_url',
    function(url, host){
    var proxy = E.ff_proxy_for_url[url];
    if (!proxy)
	return 'DIRECT';
    delete E.ff_proxy_for_url[url];
    clearTimeout(proxy.t);
    if (proxy.str)
        return proxy.str;
    return build_proxy_string(proxy, proxy.port);
});

function build_proxy_string(req, port){
    var country, agents, proxy_string;
    if (port)
        return 'PROXY 127.0.0.1:'+port;
    agents = be_agent.agents[E.gen_route_str(req.route_opt,
        {no_algo: true}).toLowerCase()];
    if (!agents || !agents.length)
    {
        be_lib.perr_err({id: 'be_debug_no_agents',
            info: zerr.json({route_opt: req.route_opt,
            agents: be_agent.agents})});
        return 'DIRECT';
    }
    var use_ip = chrome ||
        version_util.version_cmp(be_util.version(), '1.4.151')>=0;
    req.agent = agents[req.agent_failures||0];
    return req.route_opt.prot+' '+(use_ip ? req.agent.ip : req.agent.host)+
        ':'+req.agent.port;
}

function get_rule_info_from_url(url, root_url){
    var rule_info, r;
    root_url = root_url||svc_util.get_root_url(url);
    for (r in E.url_to_rule_infos)
    {
	rule_info = E.url_to_rule_infos[r];
	if (rule_info.url_re && rule_info.url_re.test(url))
	    return rule_info;
    }
    return null;
}

E.get_rule_info = function(rule){
    var rule_info, r = rule;
    if (!E.rules)
	return null;
    if (r.root_url && (rule_info = E.url_to_rule_infos[r.root_url[0]]))
	return rule_info;
    if ((r = svc_util.find_rule(E.rules.unblocker_rules, r)) && r.root_url)
	rule_info = E.url_to_rule_infos[r.root_url[0]];
    return rule_info;
};

var tab_listeners, tab_listeners_n;
function be_tabs_del_listener(tab_unblocker, tabid){
    var id = tabid||'all';
    if (!tab_listeners[id])
	return;
    tab_listeners[id] = false;
    tab_listeners_n--;
    if (!chrome)
    {
        if (tabid)
            B.be.proxy.del_tab(tabid);
        if (tab_listeners_n || !B.have.req_listeners)
            return;
        B.be.proxy.on_before_request.clear_listener();
        if (B.have.req_headers_listeners)
        {
            B.be.proxy.on_before_send_headers.clear_listener();
            B.be.proxy.on_headers_received.clear_listener();
        }
        B.be.proxy.on_completed.clear_listener();
        B.be.proxy.on_find_proxy_for_url.clear_listener();
        return;
    }
    chrome.webRequest.onBeforeRequest.removeListener(tab_unblocker
	? tab_unblocker.on_before_request : on_before_request);
    chrome.webRequest.onBeforeSendHeaders.removeListener(tab_unblocker
	? tab_unblocker.on_before_send_headers : on_before_send_headers);
    chrome.webRequest.onHeadersReceived.removeListener(tab_unblocker
	? tab_unblocker.on_headers_received : on_headers_received);
    chrome.webRequest.onCompleted.removeListener(tab_unblocker
	? tab_unblocker.on_completed : on_completed);
    chrome.webRequest.onErrorOccurred.removeListener(tab_unblocker
	? tab_unblocker.on_error_occurred : on_error_occurred);
}

function be_tabs_add_listener(tab_unblocker, tabid){
    var id = tabid||'all';
    // XXX alexeym/shachar/bahaa: here is a typeerror in Torch – sometimes
    // tab_listeners is undefined here
    if (!tab_listeners || tab_listeners[id])
	return;
    tab_listeners[id] = true;
    tab_listeners_n++;
    if (!chrome)
    {
        if (tabid)
            B.be.proxy.add_tab(tabid, {});
        if (tab_listeners_n>1 || !B.have.req_listeners)
            return;
        B.be.proxy.on_before_request.set_listener('on_before_request');
        if (B.have.req_headers_listeners)
        {
            B.be.proxy.on_before_send_headers.set_listener(
                'on_before_send_headers');
            B.be.proxy.on_headers_received.set_listener('on_headers_received');
        }
        B.be.proxy.on_completed.set_listener('on_completed');
        B.be.proxy.on_find_proxy_for_url.set_listener('ff_find_proxy_for_url');
	return;
    }
    var opt = {urls: ['<all_urls>']};
    if (tabid)
	opt.tabId = tabid;
    var extra_opt = ['blocking'];
    if (+user_agent.guess_browser().version>=23)
        extra_opt.push('requestBody');
    chrome.webRequest.onBeforeRequest.addListener(tab_unblocker ?
	tab_unblocker.on_before_request : on_before_request, opt, extra_opt);
    chrome.webRequest.onBeforeSendHeaders.addListener(tab_unblocker ?
	tab_unblocker.on_before_send_headers : on_before_send_headers, opt,
	['blocking', 'requestHeaders']);
    chrome.webRequest.onHeadersReceived.addListener(tab_unblocker
	? tab_unblocker.on_headers_received :
        on_headers_received, opt, ['blocking', 'responseHeaders']);
    chrome.webRequest.onCompleted.addListener(tab_unblocker ?
        tab_unblocker.on_completed : on_completed, opt);
    chrome.webRequest.onErrorOccurred.addListener(tab_unblocker
	? tab_unblocker.on_error_occurred : on_error_occurred, opt);
}

function tab_unblocker_del(tabid, refresh){
    var tab_unblocker = E.tab_unblockers[tabid];
    if (!tab_unblocker)
	return;
    var rule_info = E.url_to_rule_infos[tab_unblocker.root_url];
    delete E.tab_unblockers[tabid];
    if (!rule_info)
    {
	be_lib.perr_err({id: 'be_rule_info_missing', info: {tabid: tabid,
	    tab_unblocker: tab_unblocker, rule_infos: E.url_to_rule_infos}});
    }
    else
	delete rule_info.tabs[tabid];
    be_tabs_del_listener(tab_unblocker, tabid);
    if (!refresh || be_tabs.get('active.id')!=tabid)
	return;
    B.tabs.get(B.tabid2api(tabid), function(tab){
	if (tab)
	    B.tabs.update(tab.id, {url: tab.url});
    });
}

function clean_cookies(root_url){
    function cookie_set(name, value, days, domain){
	var expires;
	if (days)
	{
	    var date = new Date();
	    date.setTime(+date + (days * 24 * 60 * 60 * 1000));
	    expires = '; expires=' + date.toGMTString();
	}
	else
	    expires = '';
	document.cookie = escape(name) + '=' + escape(value) + expires +
	    (domain ? '; domain=' + domain : '')+'; path=/';
    }
    function cookie_get(name){
	var key = escape(name) + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
	    var c = ca[i];
	    while (c.charAt(0)===' ')
		c = c.substring(1, c.length);
	    if (!c.indexOf(key))
		return unescape(c.substring(key.length, c.length));
	}
	return null;
    }
    function cookie_keys(){
	var keys = document.cookie.replace(
	    /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
	    .split(/\s*(?:\=[^;]*)?;\s*/);
	for (var i = 0; i < keys.length; i++)
	    keys[i] = decodeURIComponent(keys[i]);
	return keys;
    }
    function cookie_erase(name, domain){ cookie_set(name, '', -1, domain); }
    cookie_keys().map(function(key){ cookie_erase(key, '.'+root_url); });
}

function tab_reload(tabid, tab_url){
    B.tabs.update(tabid, {url: tab_url});
    B.tabs.get(tabid, function(tab){
	/* XXX bahaa/shachar: implement tab.status in FF */
	if (!tab || tab.status!='complete')
	    return;
	B.tabs.reload(tabid);
    });
}

var tab_unblocker_add = cb_wrapper(function(tabid, rule_info, tab_url,
    fix_url){
    if (!rule_info || rule_info.tabs[tabid])
	return;
    var tab_unblocker = E.tab_unblockers[tabid];
    if (tab_unblocker)
	return;
    tab_unblocker = {country: rule_info.rule.country, rule: rule_info.rule,
	root_url: rule_info.root_url,
	on_before_request: function(d){ return on_before_request(d); },
	on_before_send_headers: function(d){
            return on_before_send_headers(d); },
	on_headers_received: function(d){ return on_headers_received(d); },
	on_completed: function(d){ return on_completed(d); },
	on_error_occurred: function(d){ return on_error_occurred(d); }};
    E.tab_unblockers[tabid] = tab_unblocker;
    rule_info.tabs[tabid] = true;
    if (!chrome)
	be_tabs_add_listener(tab_unblocker, tabid);
    // in firefox we recheck if the tab is active because sometimes we get the
    // main-request event before tab-activated event. happens consistenly when
    // opening unblocked site in new tab
    var is_active_retry = !chrome;
    E.sp.spawn(etask([function(){
        if (be_tabs.get('active.id')==tabid)
            return;
        if (!is_active_retry)
            return this.ereturn();
        is_active_retry = false;
        return this.eloop(etask.sleep(100));
    }, function(){
        if (fix_url)
        {
            tab_url = be_vpn_util.get_root_link(rule_info.rule, tab_url)||
                tab_url;
        }
        if (!tab_url)
            return;
        if (get_clr_cookies_cleanup(rule_info.rule))
        {
            var root_url = svc_util.get_root_url(tab_url)||
                svc_util.get_root_url(tab_url+'/');
            B.tabs.execute_script(tabid, {code: '('+
                clean_cookies.toString()+')("'+root_url+'")'},
                function(){ tab_reload(tabid, tab_url); });
        }
        else
            tab_reload(tabid, tab_url);
    }]));
});

var on_tab_created = cb_wrapper(function(o){
    var tab = o.tab;
    if (!tab.url)
	return;
    var rule_info = get_rule_info_from_url(tab.url);
    tab_unblocker_add(tab.id, rule_info, tab.url);
});

var on_tab_updated = cb_wrapper(function(o){
    var id = o.id, info = o.info;
    /* firefox delays its on_updated reports which cause bugs,
     * new versions can safely use the request listener instead */
    if (!chrome && version_util.version_cmp(be_util.version(), '1.1.834')>=0)
	return;
    if (!info || !info.url)
	return;
    var tab_unblocker = E.tab_unblockers[id];
    var rule_info = get_rule_info_from_url(info.url);
    if (tab_unblocker &&
        rule_info && tab_unblocker.root_url==rule_info.root_url)
    {
	return;
    }
    if (tab_unblocker)
	tab_unblocker_del(id);
    tab_unblocker_add(id, rule_info, info.url);
});

var on_tab_removed = cb_wrapper(function(o){ tab_unblocker_del(o.id); });

var on_tab_replaced = cb_wrapper(function(o){
    var added = o.added, removed = o.removed;
    tab_unblocker_del(removed);
    B.tabs.get(added, function(tab){
	if (!tab || !tab.url)
	    return;
	var rule_info = get_rule_info_from_url(tab.url);
	tab_unblocker_add(added, rule_info, tab.url);
    });
});

E.setup_cookies_cleanup = function(rule){
    E.cookies_cleanup_urls.push(_.extend({}, rule)); };

function get_clr_cookies_cleanup(rule){
    for (var i=0; i<E.cookies_cleanup_urls.length; i++)
    {
	var c = E.cookies_cleanup_urls[i];
	if (rule.name==c.name)
	{
	    E.cookies_cleanup_urls.splice(i, 1);
	    return c;
	}
    }
    return null;
}

function unset_rule_for_url(root_url, refresh){
    var rule_info = E.url_to_rule_infos[root_url];
    if (!rule_info)
	return;
    for (var tab in rule_info.tabs)
	tab_unblocker_del(tab, refresh);
    delete E.url_to_rule_infos[root_url];
}

function set_rule_for_url(root_url, rule, fix_url){
    var rule_info = E.url_to_rule_infos[root_url];
    if (rule_info)
	unset_rule_for_url(root_url, 0);
    rule_info = E.url_to_rule_infos[root_url] = {
        rule: rule,
        root_url: root_url,
	tabs: {},
        url_re: new RegExp(root_url),
        country_str: rule.country+(rule.peer ? '.peer' : ''),
    };
    B.tabs.query(chrome ? {} : {url_re: root_url},
        cb_wrapper(function(tabs){
	// XXX colin: firefox will send null tabs sometimes, remove once
	// ff ext is passed version 1.4.658
	if (!tabs)
	    return;
	for (var i=0; i<tabs.length; i++)
	{
	    if (rule_info.url_re && !rule_info.url_re.test(tabs[i].url))
		continue;
	    tab_unblocker_add(tabs[i].id, rule_info, tabs[i].url, fix_url);
	}
    }));
}

function update_rules(urls){
    var url, rule;
    for (url in E.url_to_rule_infos)
    {
	rule = urls[url];
        if (!rule)
	    unset_rule_for_url(url, 1);
        else if (rule.id!=E.url_to_rule_infos[url].rule.id)
	    set_rule_for_url(url, rule, 0);
    }
    for (url in urls)
    {
	rule = urls[url];
	if (!E.url_to_rule_infos[url])
	    set_rule_for_url(url, rule, 1);
    }
}

function update_tab_listener(){ be_tabs_add_listener(); }
// XXX amir: temp workaround for cyclic dependency
be_pac.update_tab_listener = update_tab_listener;

E.update_rule_urls = function(rules){
    dbg_rmt_ver_load_cb_old_ver();
    var url_to_rule_infos = {};
    return etask([function(){
        if (!E.inited)
            return this.ereturn();
        be_pac.rules = E.rules = rules;
        update_tab_listener();
        be_pac.load_pac_file();
        if (!rules)
            return this.ereturn(update_rules(url_to_rule_infos));
        for (var r in rules.unblocker_rules)
        {
            var rule = rules.unblocker_rules[r];
            if (!rule.enabled)
                continue;
            rule.root_url_re = [];
            for (var i=0; i<rule.root_url.length; i++)
            {
                // skip astrix '**' root_urls which match everything
                if (rule.root_url_orig && rule.root_url_orig[i].match(/^\*+$/))
                    continue;
                rule.root_url_re.push(new RegExp(rule.root_url[i]));
                url_to_rule_infos[rule.root_url[i]] = rule;
            }
            if (!rule.root_url_re.length)
            {
                delete rules.unblocker_rules[r];
                continue;
            }
            var agent_spec = E.gen_route_str({country: rule.country,
                peer: rule.peer}).toLowerCase();
            be_agent.agents[agent_spec] = be_agent.agents[agent_spec]||[];
        }
        return be_agent.resolve_agents();
    }, function(){
	update_rules(url_to_rule_infos);
        if (new_unblocker_api)
            return;
	// init pac_engine only after we actually set the tab listeners
        pac_engine.init(E.rules||{}, {by_rules: 1, ext: 1});
    }]);
};

E.ajax_via_proxy = function(url, _opt){
    var opt = {};
    _opt = _opt||{};
    if (typeof url=='object')
	opt = url;
    else
	opt = {type: 'POST', url: url};
    var _this, xhr, xhr_resp, complete;
    return etask([function(){
        _this = this;
	if ((opt.rule || _opt.force=='proxy') && !_opt.country)
	{
	    var rule_info, rule = opt.rule;
	    if (opt.rule)
                _opt.country = rule.country;
            else if ((rule_info=get_rule_info_from_url(opt.url)))
                _opt.country = rule_info.country;
            else
		throw new Error('proxy rule not found for '+opt.url);
            _opt.force = 'proxy';
	}
        var req_opts = {force: _opt.force, country: _opt.country,
            no_routing: true};
        if (_opt.ignore_redir!==false)
            req_opts.ignore_redir = true;
        if (_opt.prot)
            req_opts.prot = _opt.prot;
        xhr = hola_XMLHttpRequest(opt.url, opt.type, _opt.hdrs, req_opts);
	xhr.onreadystatechange = cb_wrapper(function(){
            if (xhr.readyState==xhr.DONE)
                return void _this.econtinue();
	    if (xhr.readyState==xhr.HEADERS_RECEIVED)
            {
                var headers_s = xhr.getAllResponseHeaders();
                xhr_resp = {
                    statusCode: xhr.status,
                    reasonPhrase: xhr.statusText,
                    headers: attrib.to_obj_lower(attrib.from_str(headers_s,
                        {allow_invalid: true})),
                };
                if (_opt.hdrs_abort)
                    xhr.abort();
            }
	});
        xhr.onerror = function(ev){
            _this.ethrow('XMLHttpRequest error'); };
	xhr.send(_opt.data);
        return this.wait(opt.timeout);
    }, function cont(){
        var req = E.internal_reqs[opt.url];
        complete = true;
        delete E.internal_reqs[xhr.hola_url];
        if (!req)
            req = {};
        if (!req.res)
        {
            if (xhr_resp)
                req.res = xhr_resp;
            else
            {
                var headers_s = xhr.getAllResponseHeaders();
                req.res = xhr_resp = {
                    statusCode: xhr.status,
                    reasonPhrase: xhr.statusText,
                    headers: attrib.to_obj_lower(attrib.from_str(headers_s,
                        {allow_invalid: true})),
                };
            }
        }
        else if (!xhr_resp)
            xhr_resp = req.res;
        return {data: xhr.responseText, xhr: xhr,
            status: xhr_resp.statusCode, orig_res: req.res};
    }, function catch$(err){
        if (_opt.always && xhr && !complete)
            return this.egoto('cont');
        throw new Error(err.statusText||''+err);
    }, function ensure$(){
        if (xhr)
            delete E.internal_reqs[xhr.hola_url];
        delete E.internal_reqs[opt.url];
    }]);
};

E.refresh_agent = function(agent, rule, exclude){
    var rule_info = E.get_rule_info(rule);
    var refresh_list = {};
    refresh_list[rule_info.country_str] = [];
    return be_agent.resolve_agents(refresh_list, exclude);
};

var on_tab_ready = cb_wrapper(function(o){
    var url = o && o.info ? o.info.url : undefined;
    if (!url)
        return;
    if (url_check[url])
    {
        url_check[url]();
        delete url_check[url];
    }
});

var url_check = {};
function is_blocked_site(direct_resp, proxy_resp){
    var p = proxy_resp, d = direct_resp;
    // proxy request failed, can't make a decision so just assume it's not
    // blocked to avoid false positives
    if (!p.statusCode || p.error || p.headers['x-hola-error'])
        return false;
    // direct request failed, probably blocked
    if (!d.statusCode || d.error)
    {
        // XXX shachar: this check was in the original code, check with
        // alexeym why it's needed
        if (p.statusCode==502)
            return false;
        return true;
    }
    if (d.statusCode==p.statusCode)
    {
        // request failed with the same status, probably 404 if no favicon,
        // no reason to suspect blocking
        if (d.statusCode!=200)
            return false;
        // make sure that either they have the same length or are chunked
        // encoding
        if (d.statusCode==200 &&
            d.headers['content-length']==p.headers['content-length'] &&
            d.headers['transfer-encoding']==p.headers['transfer-encoding'])
        {
            return false;
        }
        // we got 200 but the content was different, looks like someone inject
        // an invalid response to us
        return true;
    }
    // direct response was different than proxy:
    // - proxy success: means direct was simply blocked.
    // - direct success: means direct was blocked by sending a generic 200
    //   success response.
    // - both failed: but failure was different, means favicon doesn't
    //   exist but the block returned a different indication.
    // no matter how we look at it, site plobably blocked.
    return true;
}

E.check_gov_blocking = function(url, route){
    if (typeof url!='string' || !E.is_vpn_allowed(url, true))
        return;
    var host = zurl.get_host(url);
    var host_cache = E.hosts_cache[host];
    if (!host_cache)
        host_cache = E.hosts_cache[host] = {timers: {}};
    if (host_cache.gov_blocked!==undefined)
        return host_cache.gov_blocked;
    if (host_cache.gov_blocked_testing)
        return;
    host_cache.gov_blocked_testing = true;
    url = zurl.add_proto(host)+'/favicon.ico';
    route = route||'PROXY US';
    be_pac.load_pac_file(undefined, true);
    var direct_resp, proxy_resp, gov_blocked;
    return etask([function(){
        return E.ajax_via_proxy({url: url, type: 'GET'}, {force: 'direct',
            always: true, hdrs_abort: true, ignore_redir: false,
            hdrs: {'Cache-Control': 'no-cache,no-store,must-revalidate,'+
            'max-age=-1'}});
    }, function(resp){
        direct_resp = resp.orig_res;
        return etask.sleep(1000);
    }, function(){
        return E.ajax_via_proxy({url: url, type: 'GET'}, {force: 'proxy',
            country: 'us', always: true, hdrs_abort: true, ignore_redir: false,
            hdrs: {'Cache-Control': 'no-cache,no-store,must-revalidate,'+
            'max-age=-1'}});
    }, function(resp){
        proxy_resp = resp.orig_res;
        if (!(gov_blocked=is_blocked_site(direct_resp, proxy_resp)))
            return this.ereturn(false);
        return etask.sleep(1000);
    }, function(){
        // alexeym: in case of proxy success, need to check direct status
        // one more time – to be sure in case of non-stable connection
        return E.ajax_via_proxy({url: url, type: 'GET'}, {force: 'direct',
            always: true, hdrs_abort: true, ignore_redir: false,
            hdrs: {'Cache-Control': 'no-cache,no-store,must-revalidate,'+
            'max-age=-1'}});
    }, function(resp){
        direct_resp = resp.orig_res;
        return (gov_blocked=is_blocked_site(direct_resp, proxy_resp));
    }, function catch$(err){
        gov_blocked = undefined;
        return false;
    }, function ensure$(){
        host_cache.gov_blocked_testing = false;
        host_cache.gov_blocked = gov_blocked;
        clearTimeout(host_cache.timers.gov_blocked);
        host_cache.timers.gov_blocked = setTimeout(function(){
            host_cache.gov_blocked = undefined; }, HOUR);
    }]);
};

E.rewrite_to_proxy = function(url, tab_id, country){
    country = country||'us';
    be_pac.load_pac_file(undefined, true);
    url = zurl.add_proto(url);
    url = url.replace(/^https:/, 'http:');
    var req_url = make_internal_request(url, {
        'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=-1',
        'X-Hola-Blocked-Response': '1'},
        {ignore_redir: true, once: true, force: 'proxy', country: country});
    B.tabs.update(tab_id, {url: req_url});
};

E.uninit = function(){
    if (!E.inited)
	return;
    E.sp.ereturn();
    E.update_rule_urls();
    be_pac.set_pac(null);
    // XXX amir: temp workaround for circular dependency with be_pac.js
    be_pac.rules = E.rules = null;
    ff_exported.forEach(function(o){ window[o.name] = null; });
    E.inited = 0;
    if (!chrome)
    {
        for (var tabid in tab_listeners)
            be_tabs_del_listener(null, tabid);
    }
    be_tabs_del_listener();
    tab_listeners = {};
    E.requests = {};
    E.routing_reqs = {};
    if (chrome && chrome.extension)
        chrome.extension.onMessage.removeListener(on_devtools_pane);
    for (var hc in E.hosts_cache)
    {
        for (var t in E.hosts_cache[hc].timers)
            clearTimeout(E.hosts_cache[hc].timers[t]);
    }
    E.hosts_cache = {};
    E.stopListening();
    has_res_hdrs_url_redir = undefined;
    chrome = undefined;
};

function on_devtools_pane(req, sender, callback){
    if (req.devtool_pane)
        return void callback({create: true});
    if (req.get_trace)
    {
        var trace = E.routing_trace[req.get_trace];
        delete_trace_req(req.get_trace);
        return void callback(trace);
    }
}

function delete_trace_req(id){
    var trace = E.routing_trace[id];
    if (!trace)
        return;
    if (trace.handled)
        delete E.routing_trace[id];
    else
        trace.handled = true;
}

E.init = function(){
    if (E.inited)
	return;
    if (window.RMT)
	curr_rmt_ver = window.RMT.ver;
    chrome = window.chrome;
    if (chrome && chrome.extension && proxy_debug)
        chrome.extension.onMessage.addListener(on_devtools_pane);
    E.sp = etask('be_tab_unblocker', [function(){ return this.wait(); }]);
    has_res_hdrs_url_redir = !chrome || +user_agent.guess_browser().version>=35;
    tab_listeners = {};
    tab_listeners_n = 0;
    E.url_to_rule_infos = {};
    // XXX bahaa: move to window.hola.*
    ff_exported.forEach(function(o){ window[o.name] = o.fn; });
    E.inited = 1;
    be_ext.set('no_pac_url', true);
    E.listen_to(be_ext, 'change:settings_scope change:r.vpn.on',
        be_pac.load_pac_cb);
    E.listen_to(be_ext, 'change:r.ext.enabled', update_state);
    be_agent.agents.us = be_agent.agents.us||[];
    be_agent.resolve_agents();
};

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
    E.listenTo(be_tabs, 'removed', on_tab_removed);
    E.listenTo(be_tabs, 'replaced', on_tab_replaced);
    E.listenTo(be_tabs, 'committed', on_tab_ready);
    E.listenTo(be_tabs, 'error_occured', on_tab_ready);
}

E.t = {
    on_before_request: on_before_request,
    on_before_send_headers: on_before_send_headers,
    on_headers_received: on_headers_received,
    on_error_occurred: on_error_occurred,
    tab_unblocker_cb: tab_unblocker_cb,
    ff_find_proxy_for_url: ff_find_proxy_for_url,
};

return E; });
