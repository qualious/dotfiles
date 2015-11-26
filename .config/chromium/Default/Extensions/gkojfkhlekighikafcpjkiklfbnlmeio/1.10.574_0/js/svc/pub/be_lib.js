// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['underscore', '/util/etask.js', '/svc/pub/be_browser.js',
    '/util/zerr.js', '/svc/pub/be_util.js', '/util/escape.js'],
    function(_, etask, B, zerr, be_util, zescape){
B.assert_bg('be_lib');
var chrome = window.chrome;
var E = {};

function storage_err(name, items, err){
    var msg = name+' '+zerr.json(items)+' failed '+(err && err.message);
    zerr(msg);
    throw new Error(msg);
}

function storage_get_fn(area){
    return function(items){
        return etask([function(){
            return etask.cb_apply(B.storage[area], '.get', [items]);
        }, function(items){
            var e = B.runtime.last_error;
            if (e || !items)
                storage_err('storage_'+area+'_get', items, e);
            return items;
        }]);
    };
}

function storage_set_fn(area){
    return function(items){
        return etask([function(){
            return etask.cb_apply(B.storage[area], '.set', [items]);
        }, function(){
            var e = B.runtime.last_error;
            if (e)
                storage_err('storage_'+area+'_set', items, e);
            return items;
        }]);
    };
}

function storage_remove_fn(area){
    return function(items){
        return etask([function(){
            return etask.cb_apply(B.storage[area], '.remove', [items]);
        }, function(){
            var e = B.runtime.last_error;
            if (e)
                storage_err('storage_'+area+'_remove', items, e);
        }]);
    };
}

E.storage_local_get = storage_get_fn('local');
E.storage_local_set = storage_set_fn('local');
E.storage_local_remove = storage_remove_fn('local');
E.storage_sync_get = storage_get_fn('sync');
E.storage_sync_set = storage_set_fn('sync');
E.storage_sync_remove = storage_remove_fn('sync');

E.reload_ext = function(opt){
    zerr.notice('reload_ext '+zerr.json(opt));
    if (opt && opt.force)
	return E.reload_ext.force();
    return etask([function(){
	/* XXX arik: use localStorage */
	return E.storage_local_get('reload');
    }, function(items){
	var info = items.reload||{};
	info.reload_ext = info.reload_ext||{};
	var ts = info.reload_ext.ts ? new Date(info.reload_ext.ts) :
	    new Date();
	var count = info.reload_ext.count||0;
	var diff = new Date() - ts;
	if (diff>60000 || diff<0)
	{
	    ts = new Date();
	    count = 1;
	}
	else if (count<2)
	    count++;
	else
	{
	    zerr('too many reload_ext '+count);
	    throw new Error('too many reload_ext '+count);
	}
        info.reload_ext.ts = ''+ts; /* cannot save objects to storage */
        info.reload_ext.count = count;
	return E.storage_local_set({'reload': info});
    }, function(){
	return E.reload_ext.force();
    }]);
};

E.reload_ext.force = function(){
    try { zerr.notice('going for full reload'); } catch(err){}
    B.be.reload_ext();
};

E.get_flags = function(){
    var bg_main = window.be_bg_main;
    if (bg_main && bg_main.get_flags)
	return bg_main.get_flags();
    if (window.util && window.util.get_flags)
	return window.util.get_flags();
    return 0;
};

E.perr = function(level, opt){
    var RMT, bg_main, ver;
    var id = opt.id, info = opt.info, bt = opt.bt, filehead = opt.filehead;
    var skip_ver_check = opt.skip_ver_check, flags = E.get_flags();
    var qs = {ext_ver: be_util.version(), product: be_util.get_product()};
    RMT = window.RMT;
    bg_main = window.be_bg_main;
    ver = be_util.version();
    opt.data = {bt: bt, info: info, filehead: filehead, ver: ver, flags: flags,
	build: be_util.build()};
    if (RMT)
        qs.rmt_ver = RMT.get('ver');
    if (bg_main)
    {
	qs.uuid = bg_main.get('uuid');
	qs.cid = bg_main.get('svc.cid');
	qs.browser = bg_main.get('browser');
	qs.session_key = bg_main.get('session_key');
    }
    else
	zerr('cannot get information for perr %s %s', id, info);
    qs.id = be_util.perr_id(id);
    opt.qs = qs;
    opt.level = level;
    return etask([function(){ return zerr.perr(qs.id, info, opt);
    }, function(r){
        be_util.do_op(r&&r.do_op);
        return r;
    }]);
};

/* XXX arik: obsolete api, rm */
E.ok = function(id, info){ return E.perr_ok({id: id, info: info}); };
E.perr_ok = function(opt){ return E.perr(zerr.L.NOTICE, opt); };
E.stats = function(id, info){ return E.perr(zerr.L.NOTICE,
    {id: id, info: info, rate_limit: {count: 20}}); };
/* XXX arik: obsolete api, rm */
E.err = function(id, info, err){
    return E.perr_err({id: id, info: info, err: err}); };
E.perr_err = function(opt){
    var err = opt.err;
    if ((err&&err.message)=='load_new_ver')
	return zerr.notice('drop perr %s %s', opt.id, zerr.json(opt.info));
    opt.bt = err ? err.stack : opt.bt;
    return E.perr(zerr.L.ERR, opt);
};

E.serr = function(with_log){
    return be_util.serr({with_log: with_log, rmt: window.RMT,
	bg_main: window.be_bg_main, be_local: window.be_local});
};

/* XXX arik: rename to open_my_settings and mv to be_util */
E.open_ccgi = function(opt){
    /* XXX arik/mark: check encoding of hash */
    var url = opt.ccgi_url+(opt.host ? '&'+zescape.qs({url: opt.host}) :
	'')+(opt.hash ? '#'+opt.hash : '');
    return be_util.open_hola_tab({url: url});
};

return E; });
