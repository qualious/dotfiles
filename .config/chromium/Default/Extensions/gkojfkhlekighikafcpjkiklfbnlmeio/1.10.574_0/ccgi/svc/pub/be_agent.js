// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/svc/pub/be_browser.js', '/svc/pub/be_backbone.js', 'underscore',
    '/util/etask.js', '/util/zerr.js', '/util/ajax.js', '/svc/pub/be_lib.js',
    '/svc/pub/be_ext.js', '/util/storage.js', '/util/date.js'],
    function(B, be_backbone, _, etask, zerr, ajax, be_lib, be_ext, storage,
    date){
var conf = window.conf;
var E = new (be_backbone.task_model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_agent');
	    uninit();
	});
	B.backbone.server.start(this, 'be_agent');
    },
}))();

E.init = function(){
    E.agents = {};
    schedule_refresh();
};

function schedule_refresh(timeout){
    schedule_refresh.timer = clearTimeout(schedule_refresh.timer);
    schedule_refresh.timer = setTimeout(refresh_key, timeout||12*date.ms.HOUR);
}

function refresh_key(){
    schedule_refresh.timer = null;
    return etask([function try_catch$(){
        return E.resolve_agents({xx: 1}, null, {key_only: 1});
    }, function(){
        schedule_refresh(this.error ? 10*date.ms.MIN : 0);
    }]);
}

function uninit(){
    schedule_refresh.timer = clearTimeout(schedule_refresh.timer); }

E.is_agent = function(ip){
    return !!_.find(E.agents, function(country_agents){
        return _.findWhere(country_agents, {ip: ip}); });
};

E.resolve_agents = function(agent_specs, exclude, opt){
    var zgettunnels = {}, new_only = !agent_specs;
    opt = opt||{};
    agent_specs = agent_specs || E.agents;
    return etask([function(){
        if (_.isEmpty(agent_specs))
            return this.ereturn();
	// sites have different algorithms for the various urls, we need
	// to make sure that we always choose the same agent
        _.keys(agent_specs).forEach(function(agent_spec){
	    if (new_only && E.agents[agent_spec].length)
		return;
	    zgettunnels[agent_spec] = 1;
	});
	if (!(zgettunnels=_.keys(zgettunnels)).length)
	    return this.ereturn();
	return ajax.json({url: conf.url_ccgi+'/zgettunnels',
            qs: be_ext.auth({country: zgettunnels.join(';')}),
	    data: {exclude: exclude ? exclude.join(',') : undefined},
            retry: 1});
    }, function(ret){
        be_ext._set('agent_key', ret.agent_key);
        storage.set('agent_key', ret.agent_key);
        if (opt.key_only)
            return;
	for (var z in ret.ztun)
        {
            if (!ret.ztun[z].length)
            {
                be_lib.perr_ok({id: 'all_agents_failed',
                    info: {country_str: z}});
            }
            E.agents[z.toLowerCase()] = ret.ztun[z].map(function(str){
                var match = str.match(/.* (.*):(.*)/);
		var host = match[1];
		if (exclude && _.contains(exclude, host))
		{
		    be_lib.perr_err({id: 'exclude_peer_ignored',
			info: {country_str: z, host: host}});
		}
                return {
                    host: host,
                    port: match[2],
                    ip: ret.ip_list[match[1]],
                };
            });
        }
        zerr.info('agents set to', JSON.stringify(E.agents));
    }]);
};

return E; });
