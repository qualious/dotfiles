// LICENSE_CODE ZON
'use strict'; /*jslint browser:true, node:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
var is_ff_addon = typeof module=='object' && module.uri &&
    !module.uri.indexOf('resource://');
if (is_ff_addon)
{
    /* in firefox require() argument cannot be a variable */
    var sprintf = require('sprintf');
    var zutil = require('util');
    define = function(req, setup){
	module.exports = setup.call(this, sprintf, zutil); };
}
else if (!is_node)
    define = self.define;
else
    define = require('../util/require_node.js').define(module, '../');
define(['/util/sprintf.js', '/util/util.js'], function(sprintf, zutil){
var E = {};

var generic_2ld = zutil.bool_lookup('com biz net org xxx edu gov '+
    'ac co or ne kr jp jpn cn');

E.get_root_domain = function(domain){
    var s = domain.split('.'), root = s, len = s.length;
    if (len>2) /* www.abc.com abc.com.tw www.abc.com.tw,... */
    {
	var hd = 0;
	if (s[len-1]=='hola')
	{
	    hd = 2; /* domain.us.hola */
	    if (s[len-2].match(/^\d+$/))
		hd = 3; /* domain.us.23456.hola */
	}
	if (generic_2ld[s[len-2-hd]])
	    root = s.slice(-3-hd, len-hd); // abc.com.tw
	else
	    root = s.slice(-2-hd, len-hd); // abc.com
    }
    return root.join('.');
};

/* taken from http://www.caslon.com.au/cctldnote.htm where 2LDs is '--' */
var cctld_2ld_commercial = zutil.bool_lookup(
    'af dz as ao an am aw ac az bh bd '+
    'bj bm bt bo ba bw bv io bn bg bi cm '+
    'ca cv cf td cl km cc km cg cd ci cz '+
    'dk dj dm ie gq er et fo fi fr fx gf '+
    'pf tf ga de gi gl gp gt gw gy ht hm '+
    'hn is iq it ki kp ls li lt lu mk mw '+
    'mv ml mh mq mr mu yt fm md mc mn ms '+
    'mz np nl nc ne mp pw pe pt re ru rw '+
    'sh vc sm st sn sl sk si so gs es sd '+
    'sr ch tj tg tk to tt tm tc tv us uz '+
    'va vn vg wf eh ye');
E.get_root_domain_any = function(domain){
    var s = domain.split('.'), len = s.length, specific = -1, s0;
    if (len<=1)
	return domain;
    s0 = s[len-1];
    if (s0.length>=3) /* abc.com www.abc.info */
	specific = 1;
    else if (s0.length==2) /* abc.fr abc.co.il */
	specific = cctld_2ld_commercial[s0] ? 1 : 2;
    if (specific>0)
	s = s.slice(len-specific-1);
    return s.join('.');
};

E.get_root_url = function(url){
    var n = (url||'').match(/^https?:\/\/([^\/]+)\/.*$/);
    if (!n)
	return null;
    return E.get_root_domain(n[1]);
};

E.ends_in_root_url = function(pattern){
    var n = pattern.match(/^((.*):\/\/)?([^\/]+)(\/.*)?$/);
    if (!n)
        return false;
    var h = n[3].match(/[A-Za-z0-9-]+\.([A-Za-z0-9-]+)$/);
    if (h && (h[1].length>2 || cctld_2ld_commercial[h[1]]))
        return true;
    return !!n[3].match(/[A-Za-z0-9-]+\.[A-Za-z0-9-]+\.[A-Za-z0-9-]+$/);
};

E.find_rule = function(rules, opt){
    if (!rules)
	return;
    for (var i in rules)
    {
	var r = rules[i];
	if (opt.name==r.name
	    && (opt.type===undefined || opt.type==r.type)
	    && (opt.md5===undefined || opt.md5==r.md5)
	    && (opt.country===undefined
	    || opt.country.toLowerCase()==r.country.toLowerCase()))
	{
	    return r;
	}
    }
    return null;
};

return E; }); }());
