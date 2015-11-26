// LICENSE_CODE ZON
'use strict'; /*jshint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('./require_node.js').define(module, '../');
define(['/util/escape.js', '/util/util.js'], function(zescape, zutil){
var E = {};

E.glob_to_regex_str = function(glob){
    return '^('
    +glob.replace(/([?*])|([^?*]+)/g, function(m){
	return m=='?' ? '.' : m=='*' ? '.*' : zescape.regex(m); })
    +')$';
};
E.glob_to_regex = function(glob){
    return new RegExp(E.glob_to_regex_str(glob)); };
E.glob_fn = function(glob){
    var re = E.glob_to_regex(glob);
    return function(s){ return re.test(s); };
};
E.glob = function(glob, value){ return E.glob_fn(glob)(value); };
E.match_fn = function(filter, opt){
    var res = [], o = {s: filter}, cmp = [], match, i, _plugin;
    var eat_token = zescape.parse.eat_token;
    opt = opt||{};
    var plugin = opt.plugin||[];
    var join = opt.join||'||'; // default join operator
    var logical = opt.logical===undefined || opt.logical;
    token:
    while (o.s.length)
    {
	if (eat_token(o, /^\s+/))
	    continue;
	for (i=0; plugin && i<plugin.length; i++)
	{
	    _plugin = plugin[i];
	    if ((match = eat_token(o, _plugin.re)))
	    {
		var cmd_fn = _plugin.cmp ? _plugin.cmp.bind(null, match) :
		    _plugin.cmp_fn(match);
		cmp.push(cmd_fn);
		continue token;
	    }
	}
	if ((match = eat_token(o, /^\/((\\.|[^\\/])+)\/([i]?)(\s|$)/)))
        {
	    try {
		var re = new RegExp(match[1], match[3]);
		cmp.push(function(re, s){ return re.test(s); }.bind(null, re));
	    }
	    catch (e){ E.match_last_error = e; }
	    continue;
	}
	if ((match = eat_token(o, /^\S+/)))
	{
	    var m = match[0], l;
	    var _logical = {'&&': {join: '&&'}, '||': {join: '||'},
		'!': {fn: '!'}, '+': {join: '||'},
		'-': {fn: '!', join: '&&', wrap_join: true},
		'(': {fn: '(', depth: 1},
		')': {fn: ')', depth: -1, join: ''}};
	    if (logical && (l = _logical[m]))
	    {
		if (l.wrap_join)
		{
		    var depth = 0;
		    for (i=cmp.length; i>=0 && depth>=0; i--)
			depth += -(l.depth||0);
		    i++;
		    if (i<cmp.length)
		    {
			cmp.splice(i, 0, _logical['(']);
			cmp.push(_logical[')']);
		    }
		}
		cmp.push(l);
	    }
	    else if (opt.glob)
		cmp.push(E.glob_fn(m));
	    else
	    {
		cmp.push(function(m, s){ return s===m; }
		    .bind(null, m));
	    }
	    continue;
	}
	E.match_last_error = new Error('invalid token '+o.s);
    }
    var func = 'return', have_val = false;
    for (i=0; i<cmp.length; i++)
    {
	var _cmp = cmp[i], add, _join = have_val ? join : '', _have_val = true;
	if (typeof _cmp=='function')
	{
	    add = 'cmp['+i+'](s)';
	    have_val = true;
	}
	else if (_cmp instanceof Object)
	{
	    add = _cmp.fn;
	    if (_cmp.join!==undefined)
		_join = _cmp.join;
	    have_val = false;
	}
	else
	    throw new Error();
	if (_join)
	    func += ' '+_join;
	if (add)
	    func += ' '+add;
    }
    if (!cmp.length)
	func += ' false';
    func += ';';
    return new Function(['cmp', 's'], func).bind(null, cmp);
};
E.match = function(filter, value, opt){
    return E.match_fn(filter, opt)(value); };

E.cmp_norm = function(cmp){ return cmp>0 ? 1 : cmp<0 ? -1 : 0; };
E.strcmp = function(a, b){ return a>b ? 1 : a<b ? -1 : 0; };
E.strverscmp = function(a, b){
    var _a, _b, diff, skip_digit = 0;
    for (_a=0, _b=0; _a<a.length && _b<b.length; _a++, _b++)
    {
	if (a[_a]==b[_b] && !zutil.isdigit(a[_b])) // fast-path
	    continue;
	if (skip_digit)
	    skip_digit--;
	if (zutil.isdigit(a[_a]) && zutil.isdigit(b[_b]))
	{
	    var ma = a.substr(_a).match(/\d+/)[0];
	    var mb = b.substr(_b).match(/\d+/)[0];
	    if ((diff = +ma - +mb))
		return diff;
	    skip_digit = ma.length;
	}
	if ((diff = a[_a].charCodeAt()-b[_b].charCodeAt()))
	    return diff;
    }
    return a.length-b.length;
};

E.regexp_merge = function(a){
    var re = [], i;
    for (i=0; i<a.length; i++)
	re.push(a[i] instanceof RegExp ? a[i].source : zescape.regex(''+a[i]));
    return new RegExp('('+re.join(')|(')+')');
};
return E; }); }());
