// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('../../util/require_node.js').define(module, '../');
define(['underscore', '/util/etask.js', '/util/url.js',
    '/protocol/countries.js', '/svc/util.js', '/util/version_util.js'],
    function(_, etask, zurl, pcountries, svc_util, version_util){
var E = {};
var chrome = is_node ? false : self.chrome;

// XXX arik/shachar NOW: hack to handle cases where we have enabled rule
// that is not supported (we get unsupported rules from rule rating and
// then we apply it succefully and we get in get_rules that rule is enabled
E.is_supported = function(r){
    if (r.supported!==undefined)
	return r.supported;
    return !!r.root_apk;
};

E.get_rules = function(_rules, url){
    url = url||'';
    var _r, rules, ret = [], r_enabled = null;
    if (!_rules || !(rules = _rules.unblocker_rules))
	return [];
    for (_r in rules)
    {
	var r = rules[_r];
	if (!r.supported)
	    continue;
	var urls = r.root_url;
	if (urls && urls.some(function(rurl){ return url.match(rurl); }))
	{
	    if (r.enabled)
		r_enabled = r;
	    else
		ret.push(r);
	}
    }
    if (r_enabled)
	ret.unshift(r_enabled);
    return ret;
};

function verify_country(then, countries){
    if (then.substr(0, 6)!='PROXY ')
	return;
    /* eg. PROXY GB.PEER */
    then = then.substr(6).split('.')[0].split(':')[0];
    if (countries.indexOf(then)!=-1)
	return then;
}

// XXX arik: rm proxy_countries, just use protocol/countries.js
E.get_country_from_rule = function(rule, proxy_countries){
    if (!rule || !proxy_countries)
	return '';
    if (rule.country)
	return rule.country;
    var val, countries = proxy_countries.bext;
    if ((val=rule.then) && (val=verify_country(val, countries)))
	return val;
    if (!rule.cmds)
	return '';
    for (var i=0; i<rule.cmds.length; i++)
    {
	var cmds = rule.cmds[i];
	for (var cmd in cmds)
	{
	    val = cmds[cmd];
	    if (cmd=='then' && (val=verify_country(val, countries)))
		return val;
	}
    }
    return '';
};

E.new_vpn = function(opt){
    var r = {};
    r.name = opt.root_url;
    r.country = opt.country;
    r.link = opt.root_url;
    // XXX arik/shachar: need r.root_url based on root_url_orig
    r.root_url_orig = ['**.'+opt.root_url];
    r.os = ['windows'];
    r.type = opt.type||'url';
    r.md5 = opt.md5||'vpn';
    // XXX shachar: hack to add missing vpn information, until rule rating
    // fixed to return all vpns
    r.className = r.md5=='premium' ? 'icon-premium' : 'icon-vpn';
    r.description = r.country.toUpperCase()+' VPN'
	+(r.md5=='premium' ? ' Premium' : '');
    r.supported = opt.supported;
    if (opt.ratings)
	r.ratings = opt.ratings;
    return r;
};

function is_link_in_root(link, root_url){
    var n = link.match(/^(https?:\/\/)?[^\/]+(\/.*)?$/);
    if (!n)
	return null;
    var _link = (n[1] ? '' : 'http://')+link+(n[2] ? '' : '/');
    for (var i=0; i<root_url.length; i++)
    {
	var ru = root_url[i];
	if (typeof ru=='string')
	    ru = new RegExp(ru);
	if (ru.test(_link))
	    return _link;
    }
    return null;
}

E.get_root_link = function(rule, href){
    return (href&&zurl.add_proto(zurl.get_host(href)))||rule.link; };

function add_rule_ratings(opt){
    var proxy_country = opt.proxy_country, rules = opt.rules;
    var rule_ratings = opt.rule_ratings||[];
    var groups = opt.groups;
    var country_ratings = _.find(rule_ratings, function(cr){
	return cr.proxy_country==proxy_country; });
    if (country_ratings)
    {
	_.forEach(country_ratings.rules, function(r){
	    if (r.rating<=0)
		return;
	    // XXX arik: simplify logic once shachar's code handles
	    // no_direct_filter as different rules
            var r_rule = _.clone(svc_util.find_rule(rules, r)
		|| svc_util.find_rule(groups && groups.unblocker_rules, r));
	    if (!r_rule)
	    {
		r_rule = E.new_vpn({root_url: r.name, type: r.type, md5: r.md5,
		    country: r.country, supported: true});
		// XXX arik/shachar hack: new_vpn should create
		// root_url using zurl.http_glob_url
		r_rule.root_url = [r.name];
	    }
	    var rule = svc_util.find_rule(rules, r_rule);
	    if (!rule)
	    {
		if (!r_rule.root_url)
		    return;
		rule = _.clone(r_rule);
		rules.push(rule);
	    }
	    rule.ratings = r;
	});
    }
    rules.forEach(function(r){
	if (!r.ratings)
	    r.ratings = {rating: 0, vote_up: 0, vote_down: 0};
    });
    rules.sort(function(r1, r2){
	return r1.ratings.rating-r2.ratings.rating>0 ? -1 : 1; });
    return rules;
}

E.get_all_rules = function(opt){
    var proxy_country = opt.proxy_country.toLowerCase();
    var rule_ratings = opt.rule_ratings;
    var all_rules = opt.rules, url = opt.url, root_url = opt.root_url;
    var rules = _.clone(E.get_rules(all_rules, url)||[]);
    rules = _.filter(rules, function(r){ return r.country==proxy_country; });
    rules = add_rule_ratings({proxy_country: proxy_country, rules: rules,
	root_url: root_url, url: url, rule_ratings: rule_ratings,
	groups: opt.groups});
    if (!_.find(rules, function(r){
	return r.type=='url' && r.name==root_url && r.md5!='premium'; }))
    {
	rules.push(E.new_vpn({root_url: root_url, country: proxy_country,
	    supported: true, ratings: {rating: 0, vote_up: 0, vote_down: 0}}));
    }
    return rules;
};

E.get_tld_country = function(host){
    if (!host)
	return '';
    var tld = zurl.get_top_level_domain(host);
    if (!tld)
	return '';
    tld = tld.toUpperCase();
    if (tld=='COM')
	return 'US';
    if (tld=='UK')
	tld = 'GB';
    var skip_domain = ['TV', 'FM', 'IO', 'AM'];
    if (skip_domain.indexOf(tld)!=-1)
	return '';
    if (!_.find(pcountries.proxy_countries.bext,
	function(c){ return c==tld; }))
    {
	return '';
    }
    return tld;
};

E.get_popular_country = function(opt){
    // XXX arik/mikhail: decide if to rm hard-coded us/gb when rule ratings
    // works well
    var c0, c1, tld = E.get_tld_country(opt.host);
    var p = {};
    c0 = tld||'US';
    c1 = c0=='US' ? 'GB' : 'US';
    p[c0] = {proxy_country: c0, rating: 0.02};
    p[c1] = {proxy_country: c1, rating: 0.01};
    var rule_ratings = opt.rule_ratings||[];
    rule_ratings.forEach(function(country_ratings){
	// XXX arik/mikhail hack: need to fix rule rating
	if (country_ratings.rating<0.1)
	    return;
	var country = country_ratings.proxy_country.toUpperCase();
	var ratings = {proxy_country: country,
	    rating: country_ratings.rating};
        p[country] = ratings;
    });
    var popular_array = [];
    _.forEach(p, function(r){ popular_array.push(r); });
    popular_array.sort(function(a, b){
	return a.rating-b.rating > 0 ? -1 : 1; });
    return popular_array;
};

return E; }); }());
