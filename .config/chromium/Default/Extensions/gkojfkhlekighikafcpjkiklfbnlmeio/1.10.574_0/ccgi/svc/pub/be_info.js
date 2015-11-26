// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', 'backbone', '/svc/pub/be_backbone.js',
    '/util/etask.js', '/svc/pub/be_ext.js', '/svc/pub/be_util.js',
    '/util/zerr.js', '/svc/pub/be_rule.js', '/svc/pub/be_browser.js',
    '/svc/pub/be_lib.js', '/util/date.js', '/util/ajax.js', '/util/storage.js',
    '/svc/pub/be_features.js', '/svc/pub/be_svc.js', '/svc/pub/be_mode.js'],
    function($, _, Backbone, be_backbone, etask, be_ext, be_util, zerr,
    be_rule, B, be_lib, date, ajax, storage, be_features, be_svc, be_mode){
B.assert_bg('be_info');
var conf = window.conf;
var E = new (be_backbone.task_model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_info');
	    uninit();
	});
	B.backbone.server.start(this, 'be_info');
    },
}))();

E.init = function(rmt){
    if (E.get('inited'))
	return;
    E.rmt = rmt;
    E.set('inited', true);
    E.set('vpn_work_yes', storage.get_int('vpn_work_yes'));
    E.set('vpn_last_rating', storage.get_int('vpn_last_rating'));
    E.sp = etask('be_info', [function(){ return this.wait(); }]);
    E.on('recover', E.fetch_info);
    E.on('change:location', _.debounce(function(){
	var location = E.get('location');
	E.set('country', location ? location.country : null);
	storage.set('src_country', E.get('country'));
    }));
    be_ext.on_init('change:r.vpn.on change:uuid', E.fetch_info);
    be_ext.on_init('change:session_key', E.set_cid);
    be_mode.on_init('change:svc.cid', E.set_cid);
    be_ext.on_init('change:session_key', E.set_sync_uuid);
    be_ext.on_init('change:user_id', E.set_user_id);
    be_mode.on('change:svc.protocol_enabled', E.accel_update);
};

function uninit(){
    if (!E.get('inited'))
	return;
    E.sp.ereturn();
    be_ext.off('change:r.vpn.on change:uuid', E.fetch_info);
    be_mode.off('change:svc.cid', E.set_cid);
    be_ext.off('change:session_key', E.set_cid);
    be_ext.off('change:session_key', E.set_sync_uuid);
    be_ext.off('change:user_id', E.set_user_id);
}

E.epopup_new = function(root_url){
    return etask([function(){ zerr.notice('epopup_new');
    }, function(){
	var src_country_fake = storage.get('src_country_fake');
        return ajax.json({url: conf.url_ccgi+'/popup_new.json',
	    qs: be_ext.auth(), data: {src_country_fake: src_country_fake,
            root_url: root_url}, slow: 500});
    }, function(info){
	E.set('location', info.req);
	storage.set_json('location', info.req);
	return info;
    }, function catch$(err){
	be_lib.err('be_info_epopup_new_err', '', err);
	throw err;
    }]);
};

// test code for adblocker
function check_for_adblocker(country, limit, err){
    var err2, result;
    return etask([function(){
    }, function(){
	var http = conf.url_ccgi.replace('https://', 'http://');
	var https = conf.url_ccgi.replace('http://', 'https://');
	return etask.all({
	    client_cgi: ajax.json({type: 'GET', no_throw: true,
		url: http+'/background_init'}),
	    client_cgi_ssl: ajax.json({type: 'GET', no_throw: true,
		url: https+'/background_init'}),
	    rate_ping: ajax.json({type: 'GET', no_throw: true,
		url: http+'/unblocking_rate?ping=1'}),
	    rate_ping_ssl: ajax.json({type: 'GET',
		no_throw: true, url: https+'/unblocking_rate?ping=1'}),
	    rate: ajax.json({type: 'GET', no_throw: true,
		data: be_ext.qs_ajax({src_country: country, limit: limit}),
		    url: http+'/unblocking_rate'}),
	    rate_ssl: ajax.json({type: 'GET', no_throw: true,
		data: be_ext.qs_ajax({src_country: country, limit: limit}),
		    url: https+'/unblocking_rate'}),
	});
    }, function(e){ result = e;
    }, function catch$(_err){ err2 = _err;
    }, function ensure$(){
	var summary = '', e = result||{};
	summary += (e.client_cgi||{}).error ? 'client_cgi ' : '';
	summary += (e.client_cgi_ssl||{}).error ? 'client_cgi_ssl ' : '';
	summary += (e.rate_ping||{}).error ?  'rate_ping ' : '';
	summary += (e.rate_ping_ssl||{}).error ?  'rate_ping_ssl ' : '';
	summary += (e.rate||{}).error ? 'rate ' : '';
	summary += (e.rate_ssl||{}).error ? 'rate_ssl ' : '';
	summary = summary||'ok';
	be_lib.perr_err({id: 'be_unblocking_rate_adblocker',
	    info: {summary: summary, proto: be_util.get_proto(),
		err: err2 ? ''+err2 : undefined,
		result: _.filter(result, function(i, key){
		    if (!i)
			return true;
		    i.test = key;
		    return i.error;
		})}});
	throw err;
    }]);
}

E.get_unblocking_rate = function(limit){
    var country = (E.get('country')||'').toLowerCase();
    if (!country)
	return;
    var n = 0;
    return etask({name: 'get_unblocker_rate', cancel: true}, [function start(){
	n++;
    }, function try_catch$(){
	// XXX arik/derry: 20% of the requests succeed after a failure.
	// ~75% of the failures are with http and https succeed
	// (probaby some kind of adblocker/spam filter
	var url = conf.url_ccgi+'/unblocking_rate';
	if (n>1)
	    url = url.replace('http://', 'https://');
	return ajax.json({type: 'GET', url: url,
	    data: be_ext.qs_ajax({src_country: country, limit: limit})});
    }, function(e){
	if (this.error)
	{
	    if (n>1)
		throw this.error;
	    return this.egoto('start');
	}
	if (be_features.have(be_ext, 'rule_rating_control'))
	    be_lib.perr_err({id: 'be_unblocking_rate_ok', info: {n: n}});
	return e;
    }, function catch$(err){
	be_lib.perr_err({id: 'be_unblocking_rate_err', err: err});
    }]);
};

E.efetch_info = function(){
    return etask({name: 'efetch_info', cancel: true}, [function(){
	zerr.notice('be_info: fetch_info');
    }, function(){ /* XXX arik: rename popup_new.json to vpn_info */
	var src_country_fake = storage.get('src_country_fake');
        return ajax.json({url: conf.url_ccgi+'/fetch_info',
	    qs: be_ext.auth(), retry: 1,
	       data: {src_country_fake: src_country_fake, settings: 1}});
    }, function(info){
        if (!window.is_local_ccgi && info.ver!=E.rmt.ver)
	{
	    E.rmt.load_new_ver(info.ver);
	    throw new Error('load_new_ver');
	}
	E.set('location', info.req);
	storage.set_json('location', info.req);
        E.set('settings', info.settings);
    }, function catch$(err){
	be_lib.err('be_info_fetch_info_err', '', err);
	throw err;
    }]);
};
E.fetch_info = function(){ E.trigger('fetch_info'); };
E.on('fetch_info', function(){
    if (!E.set_busy({desc: 'Configuring...'}))
        return E.schedule_clr(['fetch_info']);
    return E.sp.spawn(etask({name: 'fetch_info', cancel: true}, [function(){
	return E.efetch_info();
    }, function(){ E.clr_busy();
    }, function catch$(err){
        E.set_err();
	be_lib.err('be_info_on_fetch_info_err', '', err);
    }]));
});

var cids = [];
if (window.hola)
    cids = window.hola.cids||(window.hola.cids = []);
E.set_cid = function(){ E.trigger('set_cid'); };
E.on('set_cid', function(){
    return E.sp.spawn(etask({name: 'set_cid'}, [function(){
        var cid = +be_mode.get('svc.cid')||0, key = be_ext.get('session_key'),
	    uuid = be_ext.get('uuid');
        if (!key || !(cid>0) || _.contains(cids, cid))
	    return this.ereturn();
        cids.push(cid);
        return ajax.json({timeout: 20000, data: {session_key: key},
            url: conf.url_ccgi+'/set_cid?uuid='+uuid+'&browser='
            +be_ext.get('browser')+'&ver='+be_util.version()+'&cid='+cid});
    }, function catch$(err){ be_lib.err('be_info_set_cid_err', '', err); }]));
});

E.set_sync_uuid = function(){
    var key = be_ext.get('session_key'), uuid = be_ext.get('uuid');
    if (!key)
        return;
    E.sp.spawn(etask({name: 'set_sync_uuid'}, [function(){
        return be_lib.storage_sync_get('uuid');
    }, function(ret){
        var sync_uuid = ret && ret.uuid;
        if (!sync_uuid || sync_uuid==uuid)
            return;
        ajax.json({timeout: 20000, data: {session_key: key},
            url: conf.url_ccgi+'/set_sync_uuid?uuid='+uuid
            +'&browser='+be_ext.get('browser')+'&ver='+be_util.version()
            +'&sync_uuid='+sync_uuid});
    }]));
};

E.set_user_id = function(){ E.trigger('set_user_id'); };
E.on('set_user_id', function(){
    return etask([function(){
	var user_id = be_ext.get('user_id');
	if (!user_id)
	    return;
	return ajax.json({qs: be_ext.auth(),
	    url: conf.url_ccgi+'/set_user_client.json',
	    data: {user_id: user_id}});
    }, function catch$(err){ be_lib.err('be_info_set_user_id_err', '', err);
    }]);
});

E.accel_update = function(){ E.trigger('accel_update'); };
E.on('accel_update', function(){
    if (!be_mode.get('is_svc'))
	return;
    return E.sp.spawn(etask([function(){
	zerr.notice('be_info: accel_update');
        return ajax.json({timeout: 20000, retry: 1,
            url: conf.url_ccgi+'/accel_update.json',
            data: be_ext.auth({enabled: be_mode.get('svc.protocol_enabled')})});
    }, function catch$(err){
	be_lib.err('be_info_accel_update_err', '', err);
    }]));
});

E.set_dont_show_again = function(opt){
    opt = _.clone(opt);
    return etask({name: 'set_dont_show_again', cancel: true}, [function(){
	var tabs = E.get('dont_show_tabs')||{};
	var tab = tabs[''+opt.tab_id] = tabs[''+opt.tab_id] || {};
	if (opt.period=='session')
	    tab.period = 'session';
	if (opt.type)
	    tab.type = opt.type;
	E.set('dont_show_tabs', tabs);
        opt.ts_user = opt.ts_user||date.to_sql(new Date());
        return ajax.json({url: conf.url_ccgi+'/set_dont_show_again',
	    qs: be_ext.auth(), data: opt});
    }, function(){ return E.efetch_info();
    }, function(){
	be_lib.perr_ok({id: 'be_set_dont_show_again', info: opt});
    }, function catch$(err){
	be_lib.perr_err({id: 'be_set_dont_show_again_err', err: err});
    }]);
};

E.set_force_tpopup = function(root_url){
    var force = E.get('force_tpopup')||storage.get_json('force_tpopup')||{};
    force[root_url] = {ts: date.to_sql(new Date())};
    E.set('force_tpopup', force);
    storage.set_json('force_tpopup', force);
};

E.unset_force_tpopup = function(root_url){
    var force = E.get('force_tpopup')||storage.get_json('force_tpopup')||{};
    delete force[root_url];
    E.set('force_tpopup', force);
    storage.set_json('force_tpopup', force);
};

E.is_force_tpopup = function(root_url){
    var force = E.get('force_tpopup')||storage.get_json('force_tpopup')||{};
    if (!force||!force[root_url])
	return false;
    var _ts = force[root_url].ts;
    if (!_ts)
	return false;
    var ts = date.from_sql(_ts);
    return Date.now()-ts < 30*date.ms.MIN;
};

E.check_email = function(email){
    return etask({name: 'check_email'}, [function(){
        return ajax.json({url: 'https://hola.org/users/check_email',
	    type: 'GET', qs: be_ext.auth(), data: {email: email}});
    }, function catch$(err){
	be_lib.perr_err({id: 'be_check_email_err', err: err});
    }]);
};

E.signup = function(email, password){
    return etask({name: 'signup'}, [function(){
        return ajax.json({url: 'https://hola.org/users/auth/json/signup',
	    data: {username: email, password: password}});
    }, function catch$(err){
	be_lib.perr_err({id: 'be_signup_err', err: err});
	return this.ethrow('Signup error');
    }]);
};

E.increment_vpn_work_yes = function(){
    var counter = E.get('vpn_work_yes') + 1;
    storage.set('vpn_work_yes', counter);
    E.set('vpn_work_yes', counter);
};

E.set_vpn_last_rating = function(rating){
    storage.set('vpn_last_rating', rating);
    E.set('vpn_last_rating', rating);
};

E.get_ext_conf = function(){
    return etask({name: 'ext_conf'}, [function(){
        return ajax.json({url:
            conf.url_ccgi.replace('http://', 'https://')+'/ext_conf.json',
            qs: be_ext.auth(), retry: 1});
    }, function(e){
        E.ext_conf = e;
        if (e.do_conf)
        {
            /*jshint evil:true*/
            try { eval(e.do_conf); }
            catch(err){ zerr.notice('be_info.ext_conf do_conf failed '+err); }
        }
    }]);
};

return E; });
