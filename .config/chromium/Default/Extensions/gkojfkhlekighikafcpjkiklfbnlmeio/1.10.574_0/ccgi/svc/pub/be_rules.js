// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', 'backbone', '/svc/pub/be_backbone.js',
    '/svc/pub/be_browser.js', '/svc/pub/unblocker_lib.js', '/svc/util.js',
    '/util/string.js', '/util/util.js', '/util/storage.js', '/util/date.js',
    '/svc/pub/be_info.js', '/svc/pub/be_premium.js'],
    function($, _, Backbone, be_backbone, B, unblocker_lib, svc_util, string,
    zutil, storage, date, be_info, be_premium){
B.assert_bg('be_rules');
var chrome = window.chrome, conf = window.conf;
var E = new (be_backbone.model.extend({
    _defaults: function(){ this.on('destroy', function(){ E.uninit(); }); },
}))();

function gen_stamp(){ return _.random(0xffffffff); }

function gen_limited(){
    E.limited = _.map(E.exceptions.limited, function(site){
        return {re: new RegExp(site.re), time: site.time}; });
}

function commit_rules(){
    E.stamp = gen_stamp();
    storage.set('be_rules_stamp', E.stamp);
    storage.set_json('be_rules', E.rules);
    gen_rules(E.rules);
}

function rules_fixup(){
    var now = new Date();
    var change = false;
    var country = (be_info.get('country')||'').toLowerCase();
    for (var i in E.rules)
    {
        var r = E.rules[i];
        var diff = now-(r.ts||0);
        if (!r.enabled)
            continue;
        if (r.country==country && diff>date.ms.DAY)
        {
            change = true;
            r.enabled = false;
            continue;
        }
        if (E.limited)
        {
            for (var j=0; j<E.limited.length; j++)
            {
                var l = E.limited[j];
                if (l.re.test(r.name) && diff>l.time)
                {
                    change = true;
                    r.enabled = false;
                    continue;
                }
            }
        }
        if (r.premium && !be_premium.is_active() &&
            diff>(r.expire||date.ms.DAY))
        {
            change = true;
            r.premium = false;
            continue;
        }
    }
    if (change)
        commit_rules();
}

function _set_rule(opt, pair){
    var r, i;
    if (!opt.name || !opt.country)
        return;
    if (!E.gen_rules)
        E.gen_rules = {};
    if (!E.rules)
        E.rules = {};
    for (i in E.rules)
    {
        r = E.rules[i];
        if (r.name!=opt.name)
            continue;
        delete E.gen_rules[i];
        delete E.rules[i];
    }
    if (!opt.del)
    {
        // take mode config from existing rule
        if (!opt.md5 && opt.premium===undefined && r)
            opt.premium = r.premium;
        r = unblocker_lib.gen_rule(opt);
        E.gen_rules[r.id] = zutil.clone_deep(r);
        E.rules[r.id] = {name: r.name, country: r.country, enabled: r.enabled,
            premium: r.md5=='premium', expire: opt.expire, cond: r.cond,
            ts: opt.ts ? new Date(opt.ts) : new Date()};
    }
    if (pair || !E.exceptions)
        return;
    for (i=0; i<E.exceptions.pairs.length; i++)
    {
        var p = E.exceptions.pairs[i];
        var idx = p.indexOf(opt.name);
        if (idx==-1)
            continue;
        for (var j=0; j<p.length; j++)
        {
            if (j==idx)
                continue;
            _set_rule(zutil.extend({}, opt, {name: p[j]}), true);
        }
    }
}

E.set_rule = function(opt){
    _set_rule(zutil.extend({ts: new Date()}, opt));
    commit_rules();
};

function gen_rules(rules){
    E.gen_rules = null;
    E.rules = null;
    for (var i in rules)
        _set_rule(rules[i]);
}

function rules_min_fmt(rules){
    var _rules = {};
    for (var i in rules)
    {
        var r = rules[i];
        _rules[unblocker_lib.get_rule_id(r)] = {
            name: r.name,
            country: r.country,
            enabled: r.enabled,
            premium: !!(r.md5=='premium' || r.premium),
        };
    }
    return _rules;
}

function is_equal_rules(r1, r2){
    var _r1 = rules_min_fmt(r1);
    var _r2 = rules_min_fmt(r2);
    return _.isEqual(_r1, _r2);
}

E.set_rules = function(rules){
    if (!_.isEqual(E.globals, rules.unblocker_globals))
    {
        E.globals = rules.unblocker_globals;
        storage.set_json('be_rules_globals', E.globals);
    }
    if (!_.isEqual(E.exceptions, rules.exceptions))
    {
        E.exceptions = rules.exceptions;
        storage.set_json('be_rules_exceptions', E.exceptions);
        unblocker_lib.set_peer_sites(E.exceptions.peer);
        gen_limited();
        gen_rules(E.rules);
    }
    if (E.enable!=rules.enable)
    {
        E.enable = rules.enable;
        storage.set('be_rules_enable', +E.enable);
    }
    if (_.isEmpty(E.rules||{}) &&
        !is_equal_rules(E.rules, rules.unblocker_rules))
    {
        if (E.stamp!=rules.stamp)
        {
            E.stamp = rules.stamp;
            storage.set('be_rules_stamp', E.stamp);
        }
        gen_rules(rules_min_fmt(rules.unblocker_rules));
        storage.set_json('be_rules', E.rules);
    }
};

E.set_rules_cond = function(opt){
    if (!opt.cond || opt.set===undefined)
        return;
    var i;
    if (opt.set)
    {
        for (i in E.rules)
        {
            if (!E.rules[i].enabled)
                continue;
            E.rules[i].enabled = false;
            E.rules[i].cond = opt.cond;
        }
    }
    else
    {
        for (i in E.rules)
        {
            if (E.rules[i].cond!=opt.cond)
                continue;
            E.rules[i].enabled = true;
            E.rules[i].cond = null;
        }
    }
    commit_rules();
};

E.get_rules = function(){
    rules_fixup();
    if (_.isEmpty(E.gen_rules||{}) || !E.globals)
        return null;
    var json = {unblocker_rules: E.gen_rules||{}, unblocker_globals: E.globals,
        stamp: E.stamp, enable: E.enable};
    return zutil.clone_deep(json);
};

E.get_groups = function(groups){
    var ret = {unblocker_rules: {}};
    for (var i=0; i<groups.length; i++)
    {
        var r = unblocker_lib.gen_rule(groups[i]);
        ret.unblocker_rules[r.id] = r;
    }
    return zutil.clone_deep(ret);
};

E.init = function(){
    if (E.inited)
        return;
    E.inited = true;
    E.globals = storage.get_json('be_rules_globals');
    if ((E.exceptions=storage.get_json('be_rules_exceptions')))
    {
        unblocker_lib.set_peer_sites(E.exceptions.peer);
        gen_limited();
    }
    E.stamp = storage.get_int('be_rules_stamp');
    E.enable = !!storage.get_int('be_rules_enable');
    E.rules = storage.get_json('be_rules');
    gen_rules(E.rules);
};

E.uninit = function(){
    if (!E.inited)
        return;
    E.inited = false;
    E.rules = null;
    E.gen_rules = null;
    E.globals = null;
    E.exceptions = null;
    E.stamp = null;
    E.enable = null;
};

return E; });
