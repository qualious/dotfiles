// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('../util/require_node.js').define(module, '../');
define(['/util/browser.js'], function quine(browser){

var E = {};
// XXX shachar: remove this and everything that uses it
E.def_ext = ['gif', 'png', 'jpg', 'mp3', 'css', 'mp4', 'wmv', 'flv', 'swf',
    'mkv', 'ico', 'f4v', 'h264', 'webp', 'webm'];

/* XXX note that console.log cannot be used in the pac file since it causes
 * IE10 to reject the pac file */
var g_pac_engine = {};

function pac_redir(url, host, do_redir){
    if (!do_redir || !g_pac_engine.redir_direct)
	return {proxy: false, str: 'DIRECT'};
    var ip = E.dns_resolver(host);
    if (browser.isInNet(ip, '10.0.0.0', '255.0.0.0') ||
	browser.isInNet(ip, '172.16.0.0', '255.240.0.0') ||
	browser.isInNet(ip, '192.168.0.0', '255.255.0.0') ||
	browser.isInNet(ip, '127.0.0.0', '255.0.0.0'))
    {
	return {proxy: false, str: 'DIRECT'};
    }
    if (browser.isPlainHostName(host))
	return {proxy: false, str: 'DIRECT'};
    var m = url.match(/^.+:([0-9]+)\/.*$/);
    if (m && m.length==2 && m[1]!=='80')
        return {proxy: false, str: 'DIRECT'};
    if (url.match(/^https:.*$/))
	return {proxy: false, str: 'DIRECT'};
    return {proxy: false,
	str: 'PROXY 127.0.0.1:'+g_pac_engine.redir_port+'; DIRECT'};
}

/* arrays indexOf is missing in ie10. Didn't modify to pass jshint not to
 * change the code functionality. Taken from
 * https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf */
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elm, from_index){
	/*jshint eqnull:true*/
	if (this==null)
            throw new TypeError();
        var t = Object(this);
        var len = t.length|0;
        if (!len)
            return -1;
        var n = 0;
        if (arguments.length > 1)
	{
            n = Number(from_index);
            if (n != n) /* shortcut for verifying if it's NaN */
                n = 0;
            else if (n!==0 && n != Infinity && n != -Infinity)
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
        if (n >= len)
            return -1;
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++)
	{
            if (t[k]===elm)
                return k;
        }
        return -1;
    };
}

function get_ext(url){
    var ext = '', index = url.indexOf('?');
    if (index>=0)
	url = url.slice(0, index);
    var ext_index = url.lastIndexOf('.', url.length);
    var _ext_index = url.lastIndexOf('/', url.length);
    if (ext_index>=0 && ext_index>_ext_index)
	ext = url.slice(ext_index+1);
    else if (_ext_index>=0)
	ext = url.slice(_ext_index+1);
    return ext;
}

function is_ip(host){ return /^\d+\.\d+\.\d+\.\d+$/.test(host); }

function handle_then(value, url, host, do_redir, exception){
    if (value=='DIRECT')
	return pac_redir(url, host, do_redir);
    var n = value.split(' ');
    if (exception && n.length==1 && n[0]=='PROXY')
	return null;
    if (n.length<2)
	return pac_redir(url, host, do_redir);
    else if (!{PROXY: 1, SOCKS: 1, SOCKS5: 1}[n[0]])
	return pac_redir(url, host, do_redir);
    if (g_pac_engine.ext)
        return {proxy: true, str: value};
    return {proxy: true, str: 'PROXY 127.0.0.1:'+g_pac_engine.proxy_port};
}

function host_cb(name, rule, cmd, url, host, do_redir, opt){
    if (!cmd['if'])
    {
	if (cmd.dst_dns)
	    return handle_then(cmd.then, url, host, do_redir, opt.exception);
	cmd['if'] = [{ext: 'def-ext', type: 'in', then: 'DIRECT'}];
    }
    var ext = get_ext(url);
    for (var i=0; i<cmd['if'].length; i++)
    {
	var _if = cmd['if'][i];
	var arg = null, value = null;
	var type = '==';
	if (!_if.then)
	    continue;
	if (_if.type)
	    type = _if.type;
	if (_if.host)
	{
	    arg = host;
	    value = _if.host;
	}
	else if (_if.url)
	{
	    arg = url;
	    value = _if.url;
	}
	else if (_if.ext)
	{
	    arg = ext;
	    value = _if.ext;
	    if (value=='def-ext' && !(value = rule['def-ext']))
                value = E.def_ext;
	}
	else if (_if.main)
	{
	    arg = opt.is_main;
	    value = _if.main;
	}
	else
	    continue;
	var cmp;
	switch (type)
	{
	case '==': cmp = arg==value; break;
	case '!=': cmp = arg!=value; break;
	case '=~': cmp = arg.match(value); break;
	case '!~': cmp = !arg.match(value); break;
	case '=a':
	case 'in': cmp = value.indexOf(arg)!=-1; break;
	case '!a':
	case 'not_in': cmp = value.indexOf(arg)==-1; break;
	case '=o': cmp = !!value[arg]; break;
	case '!o': cmp = !value[arg]; break;
	default: continue;
	}
	if (cmp)
	    return handle_then(_if.then, url, host, do_redir, opt.exception);
	if (_if['else'])
	{
	    return handle_then(_if['else'], url, host, do_redir,
		opt.exception);
	}
    }
    return handle_then(cmd.then, url, host, do_redir, opt.exception);
}

function inet_aton(str){
    var laddr = 0, i, parts = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(str);
    if (!parts)
	return null;
    parts.shift();
    for (i=0; i<parts.length; i++)
    {
	laddr *= 256;
        laddr += +parts[i];
    }
    return laddr;
}

function set_rule(name, rule, cmd, hosts){
    var _cif = cmd['if'], i;
    if (_cif)
    {
	for (i=0; i<_cif.length; i++)
	{
	    var _if = _cif[i];
	    if (_if.type=='=~' || _if.type=='!~')
	    {
		if (_if.host)
		    _if.host = new RegExp(_if.host);
		else if (_if.url)
		    _if.url = new RegExp(_if.url);
		else if (_if.ext)
		    _if.ext = new RegExp(_if.ext);
	    }
	}
    }
    if (!cmd.hosts)
    {
	hosts.hosts['*'] = function(url, host, do_redir, opt){
	    return host_cb(name, rule, cmd, url, host, do_redir, opt); };
	return;
    }
    for (i=0; i<cmd.hosts.length; i++)
    {
	var _host = cmd.hosts[i], n;
	if ((n = _host.match(/^((\d{1,3}\.){3}\d{1,3})(\/(\d+))?$/)))
	{
	    if (!cmd.ips)
		cmd.ips = [];
	    var bits = 32 - (n[4] ? +n[4] : 32);
	    if (bits<0)
		bits = 0;
	    var mask = inet_aton(n[1]) >>> bits << bits;
	    hosts.ips.push({mask: mask, bits: bits,
		func: function(url, host, do_redir, exception){
		    return host_cb(name, rule, cmd, url, host, do_redir,
			exception);
		}});
	    continue;
	}
	hosts.hosts[_host] = function(url, host, do_redir, opt){
	    return host_cb(name, rule, cmd, url, host, do_redir, opt); };
    }
}

function parse_cmds(name, rule, rules, hosts, by_rules){
    var cmds = rule.cmds;
    if (!cmds)
        return;
    for (var i=0; i<cmds.length; i++)
    {
	var cmd = cmds[i];
	if (cmd.rule)
	{
	    var _name = cmd.rule;
	    return parse_cmds(_name, rules[_name], rules, hosts);
	}
	if (!cmd.hosts && !by_rules)
	    continue;
	if (!cmd.then)
	    continue;
	set_rule(name, rule, cmd, hosts);
    }
}

function local_hola_cb(url){
    var n = url.match(
        /^http:\/\/local.hola\/\?proxy=([^&]+)&set=(.+)&key=(.*)$/);
    if (!n || decodeURIComponent(n[3])!=g_pac_engine.key)
        return {proxy: 0, str: 'PROXY 127.0.0.1:0'};
    if (!g_pac_engine.local_redir)
    {
        g_pac_engine.local_redir = {};
        g_pac_engine.local_counter = 0;
    }
    g_pac_engine.local_redir[decodeURIComponent(n[2])] = {
        ts: Date.now(),
        proxy: decodeURIComponent(n[1])
    };
    return {proxy: 0, str: 'PROXY 127.0.0.1:0'};
}

E.init = function(json, options){
    options = options||{};
    g_pac_engine = {
	hosts: {
	    hosts: {},
	    ips: [],
	    hosts_cache: {},
	    hosts_counter: 0
	},
	exceptions: {
	    hosts: {},
	    ips: [],
	    hosts_cache: {},
	    hosts_counter: 0
	},
	ext: options.ext||0,
	by_rules: options.by_rules||0,
	do_redir: options.do_redir||0,
	redir_direct: options.redir_direct===undefined || options.redir_direct,
	proxy_port: options.proxy_port||6857,
	redir_port: options.redir_port||6850,
        key: options.key
    };
    if (!json.unblocker_rules)
	return -1;
    var rules = json.unblocker_rules, rule, i;
    if (!g_pac_engine.by_rules)
    {
	for (i in rules)
	{
	    rule = rules[i];
	    if (rule.internal || (g_pac_engine.ext && !rule.enabled))
		continue;
	    parse_cmds(i, rule, rules, g_pac_engine.hosts);
	}
    }
    else
    {
	g_pac_engine.rules = {};
	for (i in rules)
	{
	    rule = rules[i];
	    if (rule.internal || (g_pac_engine.ext && !rule.enabled))
		continue;
	    if (!rule.root_url)
	    {
		parse_cmds(i, rule, rules, g_pac_engine.hosts);
		continue;
	    }
	    if (!rule.cmds)
		continue;
	    g_pac_engine.rules[i] = {hosts: {}, ips: [], hosts_cache: {},
		hosts_counter: 0};
	    parse_cmds(i, rule, rules, g_pac_engine.rules[i], 1);
	}
    }
    g_pac_engine.hosts.hosts['local.hola'] = local_hola_cb;
    g_pac_engine.hosts.hosts['127.255.255.255'] = function(url, host){
	return {proxy: 0, str: 'PROXY '+host+':0'}; };
    if (json.unblocker_globals)
    {
	rules = json.unblocker_globals;
	for (i in rules)
	{
	    rule = rules[i];
	    parse_cmds(i, rule, rules, g_pac_engine.exceptions);
	}
    }
    return 0;
};

function find_proxy_for_url(url, host, hosts, opt){
    opt = opt||{};
    var do_redir = g_pac_engine.do_redir;
    if (hosts.hosts_cache)
    {
	var c = hosts.hosts_cache[host];
	if (c && c.func)
	    return c.func(url, host, do_redir, opt);
	if (c)
	    return pac_redir(url, host, do_redir);
    }
    if (hosts.hosts_counter>5000)
    {
	hosts.hosts_counter = 0;
	hosts.hosts_cache = {};
    }
    if (is_ip(host))
    {
	var ip = inet_aton(host);
	var ips = hosts.ips;
	for (var i=0; i<ips.length; i++)
	{
	    var _ip = ips[i];
	    if ((ip >>> _ip.bits << _ip.bits)^_ip.mask)
		continue;
	    hosts.hosts_cache[host] = {func: _ip.func};
	    hosts.hosts_counter++;
	    return _ip.func(url, host, do_redir, opt);
	}
    }
    var index = -1;
    while (true)
    {
	var func = hosts.hosts['*']||hosts.hosts[host.substr(index+1)];
	if (func)
	{
	    hosts.hosts_cache[host] = {func: func};
	    hosts.hosts_counter++;
	    return func(url, host, do_redir, opt);
	}
	if ((index = host.indexOf('.', index+1))==-1)
	    break;
    }
    if (opt.exception)
	return null;
    hosts.hosts_cache[host] = {};
    hosts.hosts_counter++;
    return pac_redir(url, host, do_redir);
}

E.FindProxyForURL = function(url, host){
    var pac = g_pac_engine, locals = pac.local_redir, ret;
    if (locals && host!='local.hola')
    {
	var then = locals[url];
	if (then)
	{
	    delete locals[url];
	    ret = handle_then(then.proxy, url, host, pac.do_redir);
	}
	pac.local_counter++;
	if (!(pac.local_counter%1000))
	{
	    var cur_ts = Date.now();
	    for (var i in locals)
	    {
		var local = locals[i];
		if (cur_ts - local.ts > 10000)
		    delete locals[i];
	    }
	    pac.local_counter = 0;
	}
    }
    if (!ret)
	ret = find_proxy_for_url(url, host, pac.hosts);
    if (ret.proxy)
    {
	var ex = find_proxy_for_url(url, host, pac.exceptions, {exception: 1});
	if (ex)
	    ret = ex;
    }
    return ret.str;
};

E.find_proxy_for_url_rule = function(rule, url, host, is_main, no_global){
    var pac = g_pac_engine, ret;
    var r = pac.rules && rule ? pac.rules[rule] : pac.hosts;
    if (!r)
	return 'DIRECT';
    ret = find_proxy_for_url(url, host, r, {is_main: is_main});
    if (ret.proxy && !no_global)
    {
	var ex = find_proxy_for_url(url, host, pac.exceptions, {exception: 1});
	if (ex)
	    ret = ex;
    }
    return ret.str;
};

E.find_proxy_for_url_exception = function(url, host, orig){
    var ret = find_proxy_for_url(url, host, g_pac_engine.exceptions,
	{exception: 1});
    return ret ? ret.str : orig;
};

E.t = {
    global_var: function(){ return g_pac_engine; },
    pac_redir: pac_redir,
    get_ext: get_ext
};

E.gen_pac = function(json, options){
    return 'var pac_engine = ('+quine+')({\n'
        +'    isInNet: isInNet, isPlainHostName: isPlainHostName});\n'
        +'function FindProxyForURL(url, host){\n'
        +'    return pac_engine.FindProxyForURL(url, host);\n'
        +'}\n'
        +'pac_engine.dns_resolver = dnsResolve;\n'
        +'pac_engine.init('+JSON.stringify(json)+', '
            +JSON.stringify(options)+');\n';
};

return E; }); })();
