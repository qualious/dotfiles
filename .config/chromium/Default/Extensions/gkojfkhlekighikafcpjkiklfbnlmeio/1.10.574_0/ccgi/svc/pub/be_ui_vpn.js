// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/svc/pub/be_vpn_util.js', '/svc/util.js',
    '/util/version_util.js', '/util/zerr.js', '/svc/pub/be_util.js',
    '/svc/pub/be_locale.js', '/svc/pub/be_social.js',
    '/svc/pub/be_browser.js', '/util/url.js', '/util/string.js',
    '/svc/pub/be_popup_lib.js', '/util/country.js', '/protocol/countries.js',
    '/svc/pub/be_user_nav.js', '/svc/pub/search.js',
    '/util/date.js', 'backbone', '/util/user_agent.js', '/util/storage.js',
    '/svc/pub/be_defines.js', '/util/util.js', '/util/zdot.js',
    'text!views/share', 'text!views/cross_sale', '/util/escape.js'],
    function($, _, be_backbone, etask, be_vpn_util, svc_util,
    version_util, zerr, be_util, T, be_social, B, zurl, string, be_popup_lib,
    zcountry, pcountries, be_user_nav, zsearch, date, Backbone,
    user_agent, storage, be_defines, zutil, zdot, share, cross_sale,
    zescape){
B.assert_popup('be_ui_vpn');
var browser = be_util.browser();
var is_mp_ui = !window.is_tpopup;
var SEC = date.ms.SEC;
var DAY = date.ms.DAY;
var chrome = window.chrome;
var animation_time = 300;
var E = new (be_backbone.model.extend({
    _defaults: function(){ this.$el = $('<div>', {class: 'be_ui_vpn'}); },
}))();
var countries;
var is_tpopup = window.is_tpopup;
var heavy_censor_countries = zutil.bool_lookup('CN SA AE TR YE KW IR');
var light_censor_countries = zutil.bool_lookup('BH BY MM CU VN UZ TM SY KP TN '
    +'TH LK RU MY TZ IN ER EG UK');
var zopts = be_util.zopts;

function ff_dropdown_resize_cb(){
    var opened = $('.dropdown.open').length||$('.navbar-nav li.open').length;
    if (!opened)
	$('.f_ff_dropdown_fixup').remove();
    else if (!$('.f_ff_dropdown_fixup').length)
	$('<div>', {class: 'f_ff_dropdown_fixup'}).appendTo($('body'));
    ff_dropdown_resize();
}

/* XXX arik/bahaa BACKWARD: ugly hack to fix popup resize on ff. the dropdown
 * is absulte position and in firefox we have a bug where it doesn't take
 * absolute elements into account when resizing the popup */
function ff_dropdown_resize(){
    if (chrome || version_util.version_cmp(be_util.version(), '1.2.726')>=0)
        return;
    setTimeout(ff_dropdown_resize_cb, 500);
}

function g_switch_cb(){
    // XXX alexeym: unify this check with similar in be_ui_popup_ext.js
    if (E.be_ext.get('ext.conflict'))
        return;
    zerr.notice('on/off clicked');
    set_user_cmd({label: 'g_switch', cmd: 'on_off', country: ''});
}

E.get_enabled_rule = function(){
    var rules = be_vpn_util.get_rules(E.be_rule.get('rules'), E.get_url());
    if (!rules || !rules[0] || !rules[0].enabled || !E.be_ext.get('r.vpn.on'))
	return null;
    return rules[0];
};

function msg_handler(msg){
    // no origin check, this message triggered for site on-click
    // to close tpopup
    if (msg.data && msg.data.id=='cs_tpopup.hide_anim')
	$('body').addClass('hide_anim');
}

E.init = function(ui_popup){
    if (E.inited)
        return;
    window.addEventListener('message', msg_handler, false);
    E.on('destroy', function(){
        E.sp.ereturn();
        window.removeEventListener('message', msg_handler, false);
    });
    E.inited = true;
    E.sp = etask('be_ui_vpn', [function(){ return this.wait(); }]);
    E.ui_popup = ui_popup;
    E.R = ui_popup.R;
    E.be_vpn = ui_popup.be_vpn;
    E.be_tpopup = E.be_vpn.be_tpopup;
    E.be_rule = ui_popup.be_rule;
    E.be_info = ui_popup.be_info;
    E.be_tabs = ui_popup.be_tabs;
    E.be_ext = ui_popup.be_ext;
    E.be_svc = ui_popup.be_svc;
    E.be_mode = ui_popup.be_mode;
    E.be_premium = ui_popup.be_premium;
    E.conf = E.R.get('conf');
    ff_dropdown_resize();
    countries = _.sortBy(pcountries.proxy_countries.bext.map(function(c){
	return {proxy_country: c, name: T(c)}; }), 'name');
    countries.get = function(c){
        return {proxy_country: c, name: T(c.toUpperCase())}; };
    init_footer();
    init_status();
    init_accel_button();
    init_state();
    init_country();
    init_verify_proxy();
    init_tpopup();
    if (!is_tpopup && E.be_tpopup)
    {
        E.listenTo(E.be_tpopup, 'change:tpopup_type', function(){
            if (E.be_tpopup.get('tpopup_type')=='svc_require')
                on_close_button();
        });
    }
    E.be_rule.trigger('fetch_rules');
    // XXX arik NOW: review all listeners below
    E.on_init('change:country change:active.root_url', _.debounce(E.ui_init));
    E.on_init('change:country change:active.url', _.debounce(rule_rating_cb));
    E.on('change:status', _.debounce(busy_slow_cb));
    E.listen_to(E.be_tabs, 'change:active.status', loading_site_slow_cb);
    E.on('change:active.user_url', active_url_cb);
    E.listen_to(E.be_tabs, 'change:active.url', active_url_cb);
    E.listenTo(E.be_tabs, 'completed error_occured', function(info){
        if (!info || !info.tabId)
            return;
        var fix_task = fix_tasks[info.tabId];
        if (!fix_task)
            return;
        if (!fix_task.at_wait)
            return;
        fix_task.econtinue();
    });
    E.listenTo(E.be_info, 'change:status', status_cb);
    E.listenTo(E.be_rule, 'change:status', status_cb);
    E.listenTo(E.be_info, 'change:status_opt', status_cb);
    E.listenTo(E.be_rule, 'change:status_opt', status_cb);
    setTimeout(function(){
	E.on_init('change:state change:status change:rule_ratings.root_url '+
	    'change:rule_ratings.groups change:unblocking_rate', E.render);
	E.listenTo(E.be_rule, 'change:verify_proxy_ret', E.render);
	E.listenTo(E.be_tabs, 'change:active.status', E.render);
    }, 10);
    E.listen_to(E.be_ext, 'change:metro', render_warnings);
    add_user_nav();
    E.sp.spawn(etask({cancel: true}, [function(){
        return E.be_premium.ecall('is_active', []);
    }, function(have_premium){ E.set('have_premium', !!have_premium); }]));
    $('#g_switch').click(g_switch_cb);
    E.on('destroy', function(){ $('#g_switch').off('click', g_switch_cb); });
};

E.ui_init = function(){
    set_user_cmd({label: 'ui_init', cmd: '', country: '', no_busy: true}); };

var status_cb = _.debounce(function(){
    var prev = E.get('status');
    var s1 = E.be_rule.get('status'), s2 = E.be_info.get('status');
    var _new = [s1, s2].indexOf('error')!=-1 ? 'error' :
        [s1, s2].indexOf('busy')!=-1 ? 'busy' : 'ready';
    zerr.notice('status %s > %s (%s %s)', prev, _new, s1, s2);
    E.set({prev_status: prev, 'status': _new,
	status_opt: E.be_rule.get('status_opt')||E.be_info.get('status_opt')});
});

function busy_slow_cb(){
    busy_slow_cb.timer = clearTimeout(busy_slow_cb.timer);
    if (E.get('status')!='busy')
	return;
    // XXX arik: need to reduce time
    busy_slow_cb.timer = setTimeout(function(){
	be_popup_lib.perr_err({id: 'be_ui_vpn_busy_slow'});
        busy_slow_cb.timer = setTimeout(function(){
	    be_popup_lib.perr_err({id: 'be_ui_vpn_busy_very_slow'});
	}, 13*SEC);
    }, 7*SEC);
}

function loading_site_slow_cb(){
    if (!chrome) // XXX arik/bahaa: add tab status support for firefox
	return;
    loading_site_slow_cb.timer = clearTimeout(loading_site_slow_cb.timer);
    if (E.be_tabs.get('active.status')=='complete')
	return;
    loading_site_slow_cb.timer = setTimeout(function(){
        delete loading_site_slow_cb.timer;
	var r = E.get_enabled_rule();
	if (!r)
	    return;
	be_popup_lib.perr_err({id: 'be_ui_vpn_loading_slow', info: {
	    root_url: E.get_root(), url: E.get_url(),
	    rule: {name: r.name, country: r.country}}});
    }, 15*SEC);
}

function active_url_cb(){
    var prev = E.get_root();
    var tpopup_url = window.hola && window.hola.tpopup_opt &&
	window.hola.tpopup_opt.url;
    var qs = !is_tpopup && (zurl.parse(top.location.href).search||'');
    var url = tpopup_url || E.get('active.user_url') ||
        (qs && zurl.qs_parse(qs).url) || E.be_tabs.get('active.url') || '';
    E.set({'active.url': url, 'active.root_url': svc_util.get_root_url(url)});
    if (prev && prev!=E.get_root() && !E.get('active.user_url'))
    {
	var info = {root_url: E.get_root(), root_url_prev: prev,
	    ext_enabled: E.be_ext.get('r.ext.enabled')};
	if (window.hola)
	    info.t = Date.now()-window.hola.t.l_start;
	be_popup_lib.perr_err({id: 'be_ui_vpn_root_url_changed', info: info});
    }
}

// XXX arik/eilam: need test
E.get_url = function(){ return E.get('active.url')||''; };
E.get_root = function(){ return E.get('active.root_url')||''; };
E.get_host = function(){ return zurl.get_host(E.get_url()); };

function set_active_url(url, country, disable){
    url = 'http://'+url+'/';// arik: need url_from_domain
    E.set('active.user_url', url);
    return etask([function(){
	// XXX arik bug: rule_ratings_cb may be called twice in this scenrio
	// (once we call explicity and one auto-called by change:active.url
	return rule_rating_cb();
    }, function(){
	var rule_enabled = E.get_enabled_rule();
	var popular = get_popular_country();
        return set_country_rule(country || popular[0].proxy_country, !!disable,
            rule_enabled);
    }, function(){
	if (E.get('status')!='busy')
	    return;
	E.once('change:status', function(){ this.econtinue(); }.bind(this));
	return this.wait(5*SEC);
    }, function catch$(err){
	be_popup_lib.perr_err({id: 'be_set_active_url_err', info: url,
	    err: err});
    }, function ensure$(){
	B.tabs.update(E.be_tabs.get('active.id'), {url: url, active: true});
    }]);
}

function init_search(search_container, opt){
    var country = (E.get('country')||'us').toLowerCase();
    var search = new zsearch.search({country: country, settings: $.extend({},
        opt, {no_redir: true, suggest_remote: E.conf.url_ccgi+
        '/autocomplete?src_country='+(country||'us')+'&search=%QUERY'}),
        on_select: function(s){
	    if (!zurl.is_valid_domain(s))
		return E.set('active.user_url', '');
	    search.$input.blur();
	    set_active_url(s);
	    be_popup_lib.perr_ok({id: 'be_search', info: s}); }});
    search.render(search_container);
    return search;
}

function get_is_reminder(){
    return window.hola && window.hola.tpopup_opt &&
        window.hola.tpopup_opt.is_reminder;
}

function get_unblocking_rate(){
    var limit = 6;
    return etask([function(){
	return E.be_info.ecall('get_unblocking_rate', [limit]);
    }, function(unblocking_rate){ E.set('unblocking_rate', unblocking_rate);
    }]);
}

function rule_rating_cb(){
    var root_url, rule_ratings;
    return etask([function(){
        if (!E.get('country'))
	    return this.ereturn();
        root_url = E.get_root();
        if (E.skip_url()||get_is_reminder())
            return this.ereturn(get_unblocking_rate());
        if (E.get('rule_ratings.root_url')==root_url)
            return this.ereturn();
	var rule_enabled = E.get_enabled_rule();
        return E.be_rule.ecall('get_rule_ratings',
	    [{root_url: root_url, src_country: E.get('country'), limit: 20,
	    proxy_country: rule_enabled&&rule_enabled.country,
            vpn_only: true}]);
    }, function(ratings){
	rule_ratings = ratings;
	E.set({rule_ratings: ratings, 'rule_ratings.root_url': root_url});
	if (!ratings)
            return this.ereturn();
        return E.be_rule.ecall('get_groups_from_ratings', [ratings]);
    }, function(groups){
	// XXX arik: add groups, don't replace
	E.set({'rule_ratings.groups': groups});
	if (!rule_ratings||!groups)
	    return;
	rule_ratings.forEach(function(country_ratings){
	    _.forEach(country_ratings.rules, function(r){
		if (r.rating<=0||!groups)
		    return;
		if (!svc_util.find_rule(groups.unblocker_rules, r))
		{
		    be_popup_lib.perr_err({id: 'be_ui_vpn_rating_no_rule',
			info: {rule: r, ratings: rule_ratings,
			groups: groups}});
		    return;
		}
	    });
	});
    }, function catch$(err){
	E.set({rule_ratings: undefined, 'rule_ratings.root_url': root_url});
	be_popup_lib.perr_err({id: 'be_ui_vpn_rule_ratings_err',err: err,
	    info: root_url});
    }]);
}

E.set_err = function(id, err){
    E.set('error', id);
    E.ui_popup.set_err(id, err);
};

function init_footer(){
    var cb = _.debounce(function(){
        E.footer_inited = true;
        update_footer();
    });
    E.listenTo(E.be_rule, 'change:rules', cb);
    E.on_init('change:active.url', cb);
}

function init_status(){
    if (!E.loader)
    {
        var $status = $('<div>', {'class': 'popup-status'});
        E.loader = new loader_view_class();
        E.loader.render($status);
        $status.insertBefore('#popup');
    }
    var loader_options = {timeout: 15*SEC};
    var cb = _.debounce(function(){
        if (!E.loader)
            return;
        var verify_proxy_ret = E.be_rule.get('verify_proxy_ret')||{};
        var ui_status = E.get('ui_status');
        var loading = chrome && E.be_tabs.get('active.status')!='complete';
        if (E.get('status')=='busy' || ui_status=='busy')
            E.loader.start(loader_options);
        else if (verify_proxy_ret.error && E.get('state')=='enable')
            E.loader.finish();
        else if (loading && E.get('state')=='enable')
            E.loader.start(loader_options);
        else
            E.loader.finish();
    });
    E.on_init('change:status change:status_opt change:ui_status '+
        'change:ui_status_opt change:state', cb);
    E.listenTo(E.be_rule, 'change:verify_proxy_ret', cb);
    E.listenTo(E.be_tabs, 'change:active.status', cb);
}

function init_accel_button(){
    var accel_popup_displayed = storage.get('accel_popup_displayed') ||
        storage.get('accel_popup_last_reject');
    // XXX alexeym/ron: turn it off for now
    if (true || is_tpopup || !accel_popup_displayed || E.be_mode.get('is_svc'))
        return;
    be_popup_lib.perr_ok({id: 'be_popup_acceleration_button'});
    var download_page_version = Math.random();
    download_page_version = download_page_version < 0.33 ? 0 :
        (download_page_version < 0.66 ? 1 : 2);
    var download_link = 'http://hola.org/download?accel='+download_page_version
        +'&media_accelerator=1&win_exe=1';
    $('<span>', {'class': 'tpopup_link tpopup_link_install'})
    .text(T('Get Hola Accelerator'))
    .click(function(){
        be_popup_lib.perr_ok({id: 'be_popup_acceleration_button_click'});
        var a = document.createElement('a');
        a.href = download_link;
        a.target = '_blank';
        a.click();
    }).insertBefore('#popup');
}

function update_footer(){
    if (!E.footer_inited || !E.is_visible)
        return;
    var rule_enabled = E.get_enabled_rule();
    var root_url = rule_enabled ? E.get_root() : null;
    var $td;
    $td = $('#footer .r_ui_premium').empty();
    $('<a>', {href: 'https://hola.org/access/popular', target: '_blank'})
    .text(T('Popular sites')).appendTo($td);
    $('#content').show();
    if (is_mp_ui)
        return;
    $td = $('#footer .r_ui_share').empty();
    add_footer_sharing($td, root_url, rule_enabled);
}

function add_footer_sharing($td, root_url, rule_enabled){
    if (version_util.version_cmp(be_util.version(), '1.1.777')<=0)
        return;
    var link = get_sharing_link(rule_enabled);
    be_social.init_globals(root_url, E.get('country'), link);
    E.social_sharing = new be_social.SocialSharing({
        tooltip: false,
        mailto_frame: !!chrome,
        perr: function(id, share){
            be_popup_lib.perr_ok({id: id, info: _.extend({share: share,
                root_url: E.get_root(), url: E.get_url(),
	        src_country: E.get('country').toLowerCase(),
		proxy_country:
		    (rule_enabled&&rule_enabled.country||'').toLowerCase()},
		_.pick(rule_enabled||{}, 'name', 'type', 'md5'))});
        }
    });
    $td.prepend(E.social_sharing.$el);
}

function get_sharing_link(rule_enabled){
    var root_url = E.get_root();
    var proto = E.be_ext.get('use_http') ? 'http' : 'https';
    var link = proto+'://hola.org/access/popular';
    var rule = rule_enabled;
    if (rule)
    {
        // XXX arik: reuse www/unblock/util.js:E.rule_unblock_url
        link = proto+'://hola.org/access/'+root_url+'/using/vpn-'
        +rule.country.toLowerCase();
    }
    return link;
}

function update_nav_mode(){
    var nav = E.ui_popup && E.ui_popup.nav;
    if (!E.connection_switch && !nav)
        return;
    var r = E.get_enabled_rule();
    var nav_switch = E.connection_switch;
    if (nav)
    {
        nav.update_mode(r);
        nav_switch = E.connection_switch = nav && nav.connection_switch;
    }
    else if (nav_switch)
        nav_switch.update_mode(r);
    if (E.mode_listening)
        return;
    E.mode_listening = true;
    // XXX alexeym: should never happens
    if (!nav_switch)
        return be_popup_lib.perr_err({id: 'be_ui_vpn_nav_switch_missing'});
    nav_switch.listenTo(nav_switch.mode,
        'change:premium change:premium_timeout', _.debounce(set_vpn_mode));
}

function set_vpn_mode(mode){
    var r = E.get_enabled_rule();
    if (!r)
        return;
    set_vpn_fast();
}

function set_vpn_safe(premium_timeout){
    var r = get_rule(true);
    if (!r)
        return;
    var expire = (premium_timeout||1)*DAY;
    E.script_set(r, {enabled: true, premium: true, root_url: E.get_root(),
        expire: expire});
}

// XXX colin: can probably remove as well
function set_vpn_fast(){
    var r = get_rule(false);
    if (!r)
        return;
    E.be_rule.ecall('reset_safe_mode', [E.get_root()]);
    E.script_set(r, {enabled: true, premium: false, root_url: E.get_root()});
}

function add_user_nav(){
    if (is_tpopup && !E.connection_switch)
    {
        E.connection_switch = new be_user_nav.connection_switch();
        E.connection_switch.listenTo(E.be_rule, 'change:status',
            update_nav_mode);
        update_nav_mode();
        return;
    }
    if (version_util.version_cmp(be_util.version(), '1.1.609')<=0)
        return;
    var user_status = E.ui_popup.nav && E.ui_popup.nav.model;
    var nav = be_user_nav.new_user_nav({upgrade: true, login: true,
        be_premium: E.be_premium, user_status: user_status,
        settings_handler: E.ui_popup.open_settings,
        social_sharing: E.ui_popup.social_sharing});
    E.on('destroy', function(){ nav.remove(); });
    if (window.popup_main && window.popup_main.uninit_user_nav)
        window.popup_main.uninit_user_nav();
    if (E.ui_popup.nav)
        E.ui_popup.nav.remove();
    E.ui_popup.nav = nav;
    E.connection_switch = nav.connection_switch;
    E.mode_listening = false;
    nav.listenTo(E.be_rule, 'change:status', update_nav_mode);
    update_nav_mode();
    $('#header .popup-header-controls').prepend(nav.$el);
}

function set_country_rule(proxy_country, disable, rule_enabled){
    var rule;
    return etask([function(){
	proxy_country = (proxy_country||'').toLowerCase();
	var cmd = disable ? 'disable' : 'enable';
        var root_url = E.get_root();
        E.be_rule.ecall('reset_safe_mode', [root_url]);
	if (!disable)
	{
            if (rule_enabled && rule_enabled.country==proxy_country)
		return this.ereturn();
	    var all_rules = get_all_rules(proxy_country);
	    rule = all_rules[0];
	    set_user_cmd({label: 'set_country_enable', cmd: cmd,
		country: proxy_country, name: rule.name});
	    return E.script_set(rule, {enabled: true, root_url: root_url});
	}
	else
	{
	    set_user_cmd({label: 'set_country_disable', cmd: cmd,
		country: proxy_country, no_busy: !rule_enabled});
	    if (!rule_enabled)
            {
		be_popup_lib.perr_err({id: 'be_ui_vpn_set_country_nothing',
                    info: {proxy_country: proxy_country, disable: disable,
                    name: rule_enabled&&rule_enabled.name}});
	    }
	    else
	    {
		return E.script_set(rule_enabled, {enabled: false,
		    root_url: root_url});
	    }
	}
    }, function catch$(err){ E.set_err('be_ui_vpn_set_country_rule', err); }]);
}

function get_all_rules(proxy_country){
    return be_vpn_util.get_all_rules({proxy_country: proxy_country,
	rules: E.be_rule.get('rules'), url: E.get_url(),
        root_url: E.get_root(), rule_ratings: E.get('rule_ratings'),
	groups: E.get('rule_ratings.groups')});
}

function get_popular_country(host){
    return be_vpn_util.get_popular_country({host: host||E.get_host(),
	rule_ratings: !host&&E.get('rule_ratings')});
}

function set_working(){
    var rule_enabled = E.get_enabled_rule();
    var root_url = E.get_root();
    /* XXX arik: need limit on number of entries */
    var j = storage.get_json('vpn_working')||{};
    j[root_url] = {working: 1, name: rule_enabled.name};
    storage.set_json('vpn_working', j);
    refresh_sharing();
}

function clr_working(){
    var root_url = E.get_root();
    var j = storage.get_json('vpn_working')||{};
    delete j[root_url];
    storage.set_json('vpn_working', j);
    refresh_sharing();
}

function is_working(){
    var root_url = E.get_root();
    var rule_enabled = E.get_enabled_rule();
    var j = (storage.get_json('vpn_working')||{})[root_url];
    return rule_enabled && j && j.working && j.name==rule_enabled.name;
}

function refresh_sharing($o){
    if (is_working())
    {
        $('.sharing-obj').show();
	if ($o)
	    $o.show();
    }
    else
    {
        $('.sharing-obj').hide();
	if ($o)
	    $o.hide();
    }
}

function init_state(){
    var cb = _.debounce(state_cb);
    E.on_init('change:user.cmd change:user.country change:status '+
        'change:active.root_url change:country', cb);
    E.listenTo(E.be_rule, 'change:rules', cb);
    E.listenTo(E.be_ext, 'change:r.vpn.on', cb);
}

function init_verify_proxy(){
    var cb = _.debounce(function(){
        var rule_enabled = E.get_enabled_rule();
	if (E.get('user.cmd')||rule_enabled)
	{
	    E.off('change:user.cmd', cb);
	    E.stopListening(E.be_rule, 'change:rules', cb);
	}
	if (!E.get('user.cmd') && rule_enabled)
	    E.verify_proxy(rule_enabled, 'popup_open');
    });
    E.on_init('change:user.cmd', cb);
    E.listenTo(E.be_rule, 'change:rules', cb);
}

// XXX alexeym: merge with be_ui_mp & move into be_ui_popup_ext
function on_close_button(e){
    if (e)
        e.stopPropagation();
    if (!E.ui_popup)
    {
        if (is_tpopup)
            parent.postMessage({id: 'tpopup.close'}, '*');
        return;
    }
    if (!is_tpopup)
        return E.ui_popup.close_popup();
    E.ui_popup.set_dont_show_again({root_url: E.get_root(),
        period: 'session', src: 'x_btn',
        tab_id: window.hola.tpopup_opt.tab_id,
        type: window.hola.tpopup_opt.type});
}

function init_tpopup(){
    if (!is_tpopup)
	return;
    // XXX arik/mark: need proper tooltip api and mv styles to css
    var $el, $x, $hint, timer;
    var root_url = E.get_root();
    function dont_show_for_current_url(e){
        e.stopPropagation();
        E.ui_popup.set_dont_show_again({root_url: root_url, src: 'x_tooltip',
            period: 'default', type: window.hola.tpopup_opt.type});
    }
    function dont_show_for_all(e){
        e.stopPropagation();
        E.ui_popup.set_dont_show_again({root_url: 'all', period: 'default',
            src: 'x_tooltip', type: window.hola.tpopup_opt.type});
    }
    $el = $('#tpopup_close').off('click mouseenter mouseleave');
    $hint = $('#tpopup_close_hint').on({mouseenter: function(){
        timer = clearTimeout(timer);
        $hint.fadeIn();
    }, mouseleave: function(){
        timer = setTimeout(function(){ $hint.fadeOut(); }, animation_time);
    }});
    $el.on({click: on_close_button,
        mouseenter: function(){
            var new_root_url = E.get_root();
            timer = clearTimeout(timer);
            if (root_url != new_root_url)
            {
                root_url = new_root_url;
                $hint.empty();
                $('<li>').text(T('Don\'t show again for $1 for one week',
                    [root_url])).click(dont_show_for_current_url)
                .appendTo($hint);
                $('<li>').click(dont_show_for_all)
                .text(T('Don\'t show again for any site for one week'))
                .appendTo($hint);
            }
            $hint.fadeIn();
        },
        mouseleave: function(){
            timer = setTimeout(function(){ $hint.fadeOut(); },
                animation_time);
        }
    });
}

function init_country(){
    var sent_perr;
    E.on('destroy', function(){
	init_country.timer = clearTimeout(init_country.timer); });
    E.listen_to(E.be_info, 'change:location', function location_cb(){
	var loc = E.be_info.get('location');
	var c = loc&&loc.country;
	E.set('country', c||'');
	if (!c)
	    return;
	E.stopListening(E.be_info, 'change:location', location_cb);
	init_country.timer = clearTimeout(init_country.timer);
	if (E.get('country')&&sent_perr)
	{
	    be_popup_lib.perr_err({id: 'be_ui_vpn_no_country_recover',
		info: {country: E.get('country')}});
	}
    });
    init_country.timer = setTimeout(function(){
	if (!E.get('country')&&!sent_perr)
	{
	    sent_perr = true;
	    be_popup_lib.perr_err({id: 'be_ui_vpn_no_country',
		info: {url: E.get_url(),
		be_info: {country: E.be_info.get('country'),
		    location: E.be_info.get('location')},
		status: {
		    rmt: E.R.get('status')+' '+
			(E.R.get('inited') ? 'inited' : 'not_inited'),
		    be_vpn: E.be_vpn.get('status'),
		    be_rule: E.be_rule.get('status'),
		    be_info: E.be_info.get('status'),
		}
	    }});
	}
    }, 3*SEC);
}

// XXX arik: need test
function state_cb(){
    var rule_enabled = E.get_enabled_rule();
    var curr = E.get('state'), next;
    var status = E.get('status');
    var cmd = E.get('user.cmd'), user_opt = E.get('user.opt');
    var info = {state: curr, url: E.get_url(), root_url: E.get_root(),
	prev_url: E.get('prev_url'), prev_root: E.get('prev_root'),
        user_opt: user_opt, status: status};
    if (rule_enabled)
    {
	info.name = rule_enabled.name;
	info.country = rule_enabled.country;
    }
    if (E.skip_url())
	next = 'skip_url';
    else if (status=='error')
	next = 'error';
    else if ({enable: 1, disable: 1}[cmd])
	next = cmd;
    else if (rule_enabled)
        next = 'enable';
    else
        next = E.get('active.url') ? E.get('state') : 'disable';
    E.set('prev_url', E.get_url());
    E.set('prev_root', E.get_root());
    E.set('state', next);
    if (curr!=next)
	zerr.notice('state %s > %s', curr, next);
    if (status!='busy')
    {
	var send_perr;
	info.next = next;
        info.ext_enabled = E.be_ext.get('r.ext.enabled');
	if (rule_enabled)
	{
	    info.rule_enabled = {name: rule_enabled.name,
                country: rule_enabled.country};
	}
	if (cmd=='enable'&&!rule_enabled)
	    send_perr = true;
	if (cmd=='disable'&&rule_enabled)
	    send_perr = true;
	if (cmd=='enable' && rule_enabled &&
	    rule_enabled.country!=user_opt.country.toLowerCase())
	{
	    send_perr = true;
	    info.mismatch_country = rule_enabled.country;
	}
	// XXX arik NOW: send perr if root_url doesn't match current rule
	if (send_perr)
	{
	    if (window.hola)
		info.t = Date.now()-window.hola.t.l_start;
	    be_popup_lib.perr_err({id: 'be_ui_vpn_state_mismatch_user_action',
		info: info});
	}
    }
}

// XXX arik/eilam: need test
E.skip_url = function(){
    var url = E.get_url();
    if (!url)
	return true;
    var protocol = zurl.get_proto(url);
    var host = E.get_host();
    return !E.get_root() || host.search(/^(.*\.)?hola.org$/)!=-1 ||
	zurl.is_ip_port(host) || protocol.search(/^(http|https)$/)==-1 ||
	host=='localhost' || !zurl.is_valid_domain(host);
};

// XXX arik: need generic hanlding of ui_status
E.change_proxy = function(rule, desc){
    return etask('change_proxy', [function(){
	E.set('ui_status', 'busy');
	E.set('ui_status_opt', {desc: 'Finding new peers...'});
	var verify_proxy_ret = E.be_rule.get('verify_proxy_ret')||{};
	return E.be_rule.ecall('change_proxy_wait', [{
	    rule: rule, desc: desc, root_url: E.get_root(),
	    zgettunnels_retry: be_defines.ZGETTUNNELS_RETRY,
	    verify_proxy_ret: verify_proxy_ret}]);
    }, function(ret){
	// XXX arik/shachar hack: temporary hack till fixing tab_unblocker
	// to reload relevant tabs after zagent update
	B.tabs.reload(E.be_tabs.get('active.id'));
	E.unset('ui_status');
	E.unset('ui_status_opt');
    }, function catch$(err){
	E.unset('ui_status');
	E.unset('ui_status_opt');
	be_popup_lib.perr_err({id: 'be_change_proxy_err', err: err});
    }]);
};

E.verify_proxy = function(rule, desc){
    return etask('verify_proxy', [function(){
	E.set('ui_status', 'busy');
	E.set('ui_status_opt', {desc: 'Testing connection...'});
	return E.be_rule.ecall('verify_proxy_wait', [{rule: rule,
	    desc: desc, zgettunnels_retry: be_defines.ZGETTUNNELS_RETRY,
	    root_url: E.get_root()}]);
    }, function(){
	E.unset('ui_status');
	E.unset('ui_status_opt');
    }, function catch$(err){
	E.unset('ui_status');
	E.unset('ui_status_opt');
	be_popup_lib.perr_err({id: 'be_verify_proxy_err', err: err});
    }]);
};

function render_warnings(){
    $('.r_warnings').remove();
    var $error_holder = $('#popup');
    var $el = $('<div>', {class: 'r_warnings'}).insertBefore($error_holder);
    var $msg, br_ver = user_agent.guess_browser().version;
    var ff_upgrade = !chrome && version_util.version_cmp(br_ver, '23')<0;
    /* XXX mikhail enable once FF and Torch are figured out */
    if (false && be_util.old_unsupported_ext())
    {
        $msg = $('<div>', {class: 'r_ui_vpn_compat'})
        .appendTo($el).append($('<span>'+
            T('Your version of Hola is not supported anymore. '+
            'Press <a>here</a> to upgrade.')
            +'</span>'));
        $msg.find('a').attr('target', '_blank').attr('href',
            '//hola.org/upgrade_old_unsupported_ext?utm_sousrce=holaext');
        $('#content').hide();
        $('#footer').hide();
        return;
    }
    if (false && be_util.old_ext())
    {
        $msg = $('<div>', {class: 'r_ui_vpn_compat'})
        .appendTo($el).append($('<span>'+
            T('Your version of Hola is old and will cease to work soon. '+
            'Press <a>here</a> to upgrade.')
            +'</span>'));
        $msg.find('a').attr('target', '_blank').attr('href',
            '//hola.org/upgrade_old_ext?utm_source=holaext');
    }
    if (ff_upgrade)
    {
	$msg = $('<div>', {class: 'r_ui_vpn_compat'})
	.appendTo($el).append($('<span>'+
	    T('Old version of Firefox. Press <a>here</a> to upgrade.')
	    +'</span>'),
	    $('<div>').text(T(
		'(some Hola features are not available on your version)')));
	$msg.find('a').attr('target', '_blank').attr('href',
	    'http://www.mozilla.org/en-US/firefox/update/');
    }
    if (E.be_ext.get('metro'))
    {
	$('<div>', {class: 'r_ui_vpn_compat'})
	.appendTo($el).append($('<span>'+T(
	    'Hola does not work well in Windows 8 mode. Please switch to '+
	    'desktop mode. Click <a>here</a> for instructions')+'</span>'))
	.find('a').attr('target', '_blank').attr('href',
	    'https://support.google.com/chrome/answer/2762879?hl='+T.locale);
    }
    if (chrome && chrome.extension && E.be_tabs.get('active.incognito'))
    {
	$('<div>', {class: 'r_ui_vpn_compat'})
	.appendTo($el).append($('<span>'+T(
            'Sorry, Hola does not work in Incognito mode.<br>'+
            'Please switch to regular mode to view this site')+'</span>'));
    }
}

function $new_popular(p){
    var $ret = $('<tr>', {class: 'r_ui_option f32'})
    .click(function(){ set_active_url(p.root_url); });
    var $td_url = $('<td>'), $td_icon = $('<td>'), $td_go = $('<td>');
    $ret.append($td_icon).append($td_url).append($td_go);
    var $icon_div = $('<div>', {class: 'r_ui_option_favicon_div'})
    .appendTo($td_icon);
    var $span = $('<span>', {class: 'r_ui_option_name'}).text(p.root_url)
    .appendTo($td_url);
    var icon = new Image();
    icon.src = zurl.add_proto(p.root_url)+'/favicon.ico';
    icon.className = 'r_ui_option_icon_favicon';
    icon.onload = function(){ $icon_div.empty().append(icon); };
    $('<span>', {class: 'btn go-btn'}).text(T('Go')+' ►').appendTo($td_go);
    return $ret;
}

function $new_popular_block(p){
    var custom_icon = p.root_url.replace(/\./g, '-');
    var $ret = $('<div>', {'class': 'popup-popular-item', 'title': p.root_url})
    .click(function(){ set_active_url(p.root_url); });
    var $icon_div = $('<i>', {'class': 'popup-popular-item-image icon-'
        +custom_icon})
    .appendTo($ret);
    var $span = $('<span>', {'class': 'popup-popular-item-name'})
    .text(p.root_url).appendTo($ret);
    var icon = new Image();
    icon.src = zurl.add_proto(p.root_url)+'/favicon.ico';
    icon.className = 'popup-popular-item-icon';
    icon.onload = function(){ $icon_div.append(icon); };
    return $ret;
}

function get_popular_url(){
    var urls = {}, country = E.get('country');
    var proto = E.be_ext.get('use_http') ? 'http' : 'https';
    return proto+'://hola.org/access/popular'+
	(country ? '/'+country : '')+'?utm_source=holaext';
}

var country_list_head_view_class = Backbone.View.extend({
    el: '<span>',
    initialize: function(options){
	var $el = this.$el;
	var opt = this.options = options||{};
	var $c, $s;
        var size = 'f' + (opt.size ? opt.size : '64');
        var $a = $('<a>', {class: size}).appendTo($el);
	this.$flag = $('<span>', {class: 'flag'}).appendTo($a);
	this.$label = $('<div>', {class: 'r_list_head_label'}).appendTo($el);
    },
    render: function(opt){
	var c = opt.country ? opt.country.proxy_country : '';
	this.$flag.attr('class', 'flag')
        .addClass(c.toLowerCase()||'flag_other');
        if (this.options.fade_head)
	    this.$flag.addClass('flag_fade');
        var uc = c.toUpperCase();
        var label_text = uc && T(uc);
	this.$label.text(label_text||T('More...'));
    },
});

function $country_list_item(c, disable, rule_enabled){
    var $li = $('<li>', {class: 'country'}).data({country: c.proxy_country,
        disable: disable, rule_enabled: rule_enabled});
    var $a = $('<a>', {class: 'f32 ui_lock_parent'}).appendTo($li);
    var $f = $('<span>', {class: 'ui_lock_container flag '
        +c.proxy_country.toLowerCase()}).appendTo($a);
    if (disable)
        $f.addClass('flag_fade ui_lock_revert');
    $('<span>', {class: 'flag_name'}).text(' '+c.name).appendTo($a);
    return $li;
}

var country_list_view_class = Backbone.View.extend({
    el: '<span>',
    className: 'r_country_list_view',
    events: {
        'click .list_head': 'toggle_list'
    },
    initialize: function(options){
	options = options||{};
	this.no_dropdown = options.no_dropdown;
	var $el = this.$el;
        var $list = this.$list = $('<span>', {class: 'dropdown r_country_list'+
            (this.no_dropdown ? '' : ' r_country_list_dropdown')});
        $el.append($list);
	var $head = $('<a>', {class: 'list_head btn '+
	    'r_btn-trans r_btn-rm-border '+
	    (this.no_dropdown ? 'no-dropdown' : ''),
	    'data-toggle': this.no_dropdown || options.on_click ?
	        undefined : 'dropdown'}).appendTo($list);
	if (options.on_click)
	    $head.click(options.on_click);
	this.country_list_head_view = new country_list_head_view_class({
            fade_head: options.fade_head,
            show_lock: options.show_lock,
            size: options.flag_size
	});
        if (!this.no_dropdown)
        {
            var $caret_parent = this.country_list_head_view.$('.flag')
                .parent();
            var $caret = $('<span>', {'class': 'caret'});
            $caret.click(function(){ ff_dropdown_resize(); })
            .appendTo($caret_parent);
        }
	$head.append(this.country_list_head_view.$el);
        if (this.no_dropdown)
            return;
        $('body').on('click.country_list_click', this.hide_list.bind(this));
        this.$ul = $('<ul>', {'class': 'dropdown-menu country-selection',
            role: 'menu'});
    },
    render: function(opt){
        var _this = this;
	opt = opt||{};
	var active_country = opt.active_country;
	this.country_list_head_view.render({country:
	    active_country ? countries.get(active_country) : undefined});
	if (this.no_dropdown)
	    return;
        this.rendered = false;
        _this.render_timeout = clearTimeout(_this.render_timeout);
        function render_country_list(){ _this.render_list(opt); }
        this.$list.one('show.bs.dropdown', function(){
            render_country_list(); });
        this.render_timeout = setTimeout(function(){
            render_country_list(); }, 500);
    },
    toggle_list: function(e){
        if (this.no_dropdown || !this.$ul)
            return;
        e.stopPropagation();
        this.$ul.toggleClass('dropdown-menu-open');
    },
    hide_list: function(e){
        if (!this.$ul)
            return;
        e.stopPropagation();
        this.$ul.removeClass('dropdown-menu-open');
    },
    remove: function(){
        if (this.$ul)
            this.$ul.remove();
        $('body').off('click.country_list_click');
        Backbone.View.prototype.remove.call(this);
    },
    render_list: function(opt){
        if (this.rendered || this.no_dropdown)
            return;
        var _this = this;
        this.rendered = true;
        opt = opt||{};
        var active_country = opt.active_country;
        var p = get_popular_country(opt.host);
        var rule_enabled = !opt.host ? E.get_enabled_rule() : null;
        var src_country = E.get('country');
        var $ul = this.$ul.empty();
        if (active_country && !opt.no_back)
        {
            var src = countries.get(src_country);
            $ul.append($country_list_item({
                proxy_country: src.proxy_country,
                name: T('Back to $1', [src.name])}, true, rule_enabled));
        }
        _.forEach(p, function(p){
            $ul.append($country_list_item(countries.get(p.proxy_country),
                false, rule_enabled));
        });
        $ul.append($('<li>', {'class': 'divider'}));
        countries.forEach(function(c){
            $ul.append($country_list_item(c), false, rule_enabled); });
        $('li.country', $ul).click(function(){
            var info = $(this).data();
            _this.trigger('select', info.country);
            if (opt.host)
                set_active_url(opt.host, info.country, info.disable);
            else
            {
                set_country_rule(info.country, info.disable,
                    info.rule_enabled);
            }
        });
    }
});

var country_selection_view_class = Backbone.View.extend({
    className: 'r_country_selection_view',
    host: null,
    active_country: null,
    initialize: function(opt){
	var _this = this;
        opt = opt||{};
        this.host = opt.host;
        this.active_country = opt.active_country;
        var $el = this.$el;
	var $row;
	$row = $('<div>').appendTo($el);
	if (is_tpopup)
	{
	    this.list_all = new country_list_view_class({fade_head: true,
	        show_lock: true,
		on_click: function(){
		    this.trigger('select', this.p0);
                    this._set_country_rule(this.p0, E.get_enabled_rule());
		}.bind(this)});
	    this.list_all.$el.addClass('country_selection_opt').appendTo($row);
	}
	else
	{
            this.is_multiselect = true;
	    $row = $('<div>').appendTo($el);
	    this.list_p0 = new country_list_view_class({caret: false,
                no_dropdown: true, className: 'country_selection_opt'});
            this.list_p0.$el.addClass('country_selection_opt '+
                'country_selection_left').appendTo($row)
            .click(function(){
		this.trigger('select', this.p0);
                this._set_country_rule(this.p0, null);
            }.bind(this));
	    this.list_p1 = new country_list_view_class({caret: false,
                no_dropdown: true, className: 'country_selection_opt'});
            this.list_p1.$el.addClass('country_selection_opt '+
                'country_selection_center').appendTo($row)
            .click(function(){
                this.trigger('select', this.p1);
		this._set_country_rule(this.p1, null);
            }.bind(this));
            $row.append(this.list_p0.$el).append(this.list_p1.$el);
            this.list_all = new country_list_view_class();
            this.list_all.$el.addClass('country_selection_opt '+
                'country_selection_right')
            .appendTo($row);
            var country_events = {
                'mouseenter': function(){
                    var $this = $(this);
                    var $other = $row.find('.country_selection_opt')
                        .not(this);
                    $other.removeClass('popup-multiselect-hover')
                    .addClass('popup-multiselect-blur');
                    $this.removeClass('popup-multiselect-hover')
                    .addClass('popup-multiselect-hover');
                },
                'mouseleave': function(){
                    $row.find('.country_selection_opt')
                    .removeClass('popup-multiselect-hover')
                    .removeClass('popup-multiselect-blur');
                }
            };
            this.list_p0.$el.on(country_events);
            this.list_p1.$el.on(country_events);
            this.list_all.$el.on(country_events);
	}
        if (this.list_all && this.list_all.$ul)
            this.list_all.$ul.appendTo($el);
        this.list_all.on('select', function(){
            _this.trigger('select'); });
	return $el;
    },
    _set_country_rule: function(country, rule_enabled){
        if (this.host)
            set_active_url(this.host, country);
        else
            set_country_rule(country, false, rule_enabled);
    },
    render: function(){
	var popular_countries = get_popular_country(this.host);
	var tld = be_vpn_util.get_tld_country(this.host||E.get_host());
        // XXX: alexeym: for new UI country multi-country view
        // order should be "second, main, other"
        var main = this.is_multiselect ? 1 : 0;
        var second = this.is_multiselect ? 0 : 1;
        var ratings = [popular_countries[0], popular_countries[1]];
        if (tld && tld!==ratings[0].proxy_country &&
            tld!==ratings[1].proxy_country)
        {
            ratings.push({proxy_country: tld, rating: 0.1});
            ratings.sort(function(a, b){ return b.rating-a.rating; });
        }
        this['p'+main] = ratings[0].proxy_country;
        this['p'+second] = ratings[1].proxy_country;
	if (is_tpopup)
	    this.list_all.render({active_country: this.p0, no_back: true});
	else
	{
	    this.list_p0.render({active_country: this.p0});
	    this.list_p1.render({active_country: this.p1});
	    this.list_all.render({active_country: this.active_country, host:
                this.host});
	}
        return this;
    },
});
var disable_view_class = Backbone.View.extend({
    className: 'popup-enabled popup-multiselect',
    hover_title: null,
    initialize: function(opt){
        opt = opt||{};
        var $el = this.$el;
        this.hover_title = opt.title_view || new title_view_class({
            title: T('Select a Country')});
        var $title = this.hover_title.$el;
        this.country_selection_view = opt.country_selection_view ||
            new country_selection_view_class();
        if (this.country_selection_view.is_multiselect)
        {
            this.hover_title.$title.append([
                '<i class="popup-multiselect-arrow ',
                'popup-multiselect-arrow-left"></i>',
                '<i class="popup-multiselect-arrow ',
                'popup-multiselect-arrow-right"></i>'].join(''));
        }
        $el.append($title, this.country_selection_view.$el);
    },
    render: function(){
        this.hover_title.render();
        this.country_selection_view.render();
        $('body').addClass('is-popup-disabled');
        return this;
    }
});
var turned_off_view_class = Backbone.View.extend({
    className: 'popup-disabled',
    initialize: function(){
        var className = this.className;
        var html = [
            '<div class="'+className+'-head '+className+'-head-active" ',
                // XXX alexeym: remove display:none after extension update
                'style="display:none;">',
                '<svg height="105px" width="75px" viewBox="0 0 74 102">',
                    '<path fill="#00B7F1" d="M69.8,39.8c-2-6.2,2.1-13.6,',
                        '2.1-13.6s-1.9,0.1-6.7,4.3c-4.7,4.1-4.9,10-4.9,',
                        '10C54.7,27.2,43.3,18.8,39,13.1 ',
                        'C34.7,7.4,37.8,0,37.8,0c-8.5,3.7-13,12.9-14.2,',
                        '23.8c-1.3,10.9-8.2,15-8.2,15C14.2,28.5,2.6,',
                        '25.9,2.6,25.9 ',
                        'c2.4,0.9,6.6,12.6,2.1,21.2C1.7,52.8,0,59,0,65.',
                        '1C0,85.5,12.9,102,37,102c21.9,0,37-16.5,37-36.',
                        '9C74.4,57.9,71.8,46,69.8,39.8z"/>',
                    '<path fill="#FFFFFF" d="M37,94.8c-14.2,0-25.7-11.5-',
                        '25.7-25.6c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,',
                        '1.7,1.7 ',
                        'c0,12.3,10,22.2,22.3,22.2c12.3,0,22.3-10,22.',
                        '3-22.2c0-0.9,0.8-1.7,1.7-1.7s1.7,0.8,1.7,1.',
                        '7C62.6,83.3,51.1,94.8,37,94.8z"/>',
                    '<path fill="#FFFFFF" d="M25.6,59.3c-3.7,0-6.6-1.2-6.',
                        '8-1.3c-0.7-0.3-1.1-1.2-0.8-1.9c0.3-0.7,1.2-1.1,',
                        '1.9-0.8c0.1,0,5.6,2.3,10.8,0 c0.7-0.3,1.6,0,1.9,',
                        '0.7c0.3,0.7,0,1.6-0.7,1.9C29.7,59,27.6,59.3,',
                        '25.6,59.3z"/>',
                    '<path fill="#FFFFFF" d="M48.5,59.3c-3.7,0-6.6-1.2-',
                        '6.8-1.3c-0.7-0.3-1.1-1.2-0.8-1.9c0.3-0.7,1.2-',
                        '1.1,1.9-0.8l0,0 ',
                        'c0.1,0,5.6,2.3,10.8,0c0.7-0.3,1.6,0,1.9,0.7c0.3,',
                        '0.7,0,1.6-0.7,1.9C52.7,59,50.5,59.3,48.5,59.3z"/>',
                '</svg>',
            '</div>',
            // XXX alexeym: remove display:none after extension update
            '<div class="'+className+'-snore" style="display:none;">',
                '<div>',
                   '<svg width="16px" height="18px" viewBox="0 0 16 18">',
                       '<path id="zed" fill="#00B7F1" d="M15.5,0H4.3C3.9,',
                            '0,3.5-0.1,3.4,0.3l-0.5,2c-0.1,0.3,0,0.9,0.1,',
                            '1.1C3.2,3.8,3.6,4,3.8,4h5.6l-8.7,9.5 ',
                            'c-0.1,0.1-0.3,0.3-0.3,0.4C0.3,14.5,0,16.1,',
                            '0,16.1c-0.1,0.3,0,0.9,0.1,1.2C0.3,17.6,0.7,',
                            '18,0.9,18h10.8c0.4,0,0.8-0.8,0.9-1.2 ',
                            'l0.4-2.4c0.1-0.3,0-0.7-0.2-0.9c-0.2-0.2-0.4-',
                            '0.5-0.7-0.5H6.5L15.3,3c0.1-0.1,0.2-0.3,',
                            '0.2-0.4l0.5-2C16,0.3,15.8,0,15.5,0z" />',
                    '</svg>',
                '</div>',
                '<div>',
                   '<svg width="16px" height="18px" viewBox="0 0 16 18">',
                       '<use x="0" y="0" xlink:href="#zed"/>',
                    '</svg>',
                '</div>',
                '<div>',
                   '<svg width="16px" height="18px" viewBox="0 0 16 18">',
                       '<use x="0" y="0" xlink:href="#zed"/>',
                    '</svg>',
                '</div>',
            '</div>',
            '<div class="'+className+'-caption">',
                T('Hola is off, click it to turn it on'),
            '</div>'].join('');
        this.$el.css({'padding': '0'}).html(html);
        this.$head = this.$el.find('.'+className+'-head');
        this.$snore = this.$el.find('.'+className+'-snore');
    },
    render: function(){
        var _this = this;
        var className = this.className;
        this.$head.addClass(className+'-head-active')
        .off('click').one('click', function(){
            _this.$head.addClass(className+'-head-active');
            setTimeout(function(){
                $('#g_switch').click(); }, animation_time);
        });
        $('body').addClass('is-popup-off');
        setTimeout(function(){
            _this.$head.removeClass(className+'-head-active'); }, 13);
    }
});

var country_selected_view_class = Backbone.View.extend({
    className: 'country_selected',
    initialize: function(){
	var $el = this.$el, $row;
	if (is_tpopup)
        {
            // XXX shachar: remove _virt_track_activation as it seems to be
            // used only for tracking number of tpopup activations using
            // google-analytics, it's better to just use perr
            //$('<iframe width=0 height=0 style="display:none" src="//hola.org'
            //    +'/_virt_track_activation"><iframe>').appendTo($el);
            be_popup_lib.perr_ok({id: 'be_tpopup_open'});
        }
        else
        {
	    $row = $('<div>').appendTo($el);
	    $('<div>', {class: 'icon_arrow'}).appendTo($row);
	}
	$row = $('<div>').appendTo($el);
	this.list_view = new country_list_view_class();
	$row.append(this.list_view.$el);
        if (this.list_view && this.list_view.$ul)
            this.list_view.$ul.appendTo($el);
    },
    render: function(){
	var status = E.get('status');
	var rule_enabled = E.get_enabled_rule();
	var user_country = E.get('user.country');
	if (status!='busy')
        {
	    this.country = (rule_enabled ?
	        rule_enabled.country : user_country)||'';
	}
	else
	{
	    this.country = user_country ? user_country :
	        rule_enabled ? rule_enabled.country : '';
	}
        this.list_view.render({active_country: this.country});
    },
});
var loader_view_class = Backbone.View.extend({
    className: 'popup-loader',
    initialize: function(){
        this.$el.addClass('g-hidden');
        this.$el.html(['<div class="popup-loader-spinner popup-loader-back">',
            '<svg width="100%" height="100%" viewBox="-1 -1 202 202">',
                '<path class="popup-loader-rail" d="M 180,100 A 80,80 0 0,',
                    '1 100,180 A 80,80 0 0,1 20,100 A 80,80 0 0,1 100,20 A ',
                    '80,80 0 0,1 180,100" style="fill:none"/>',
            '</svg>',
        '</div>',
        '<div class="popup-loader-spinner popup-loader-bubble-container">',
            '<svg width="100%" height="100%" viewBox="-1 -1 202 202">',
                '<path class="popup-loader-bubble" d="M 180,100 A 80,80 0 0,1',
                    '100,180 A 80,80 0 0,1 20,100 A 80,80 0 0,1 100,20 A 80,',
                    '80 0 0,1 180,100" style="fill:none"/>',
            '</svg>',
        '</div> ',
        '<div class="popup-loader-spinner popup-loader-fore">',
            '<svg width="100%" height="100%" viewBox="-1 -1 202 202">',
                '<path class="popup-loader-spincircle" d="M 1,100" ',
                    'style="fill:none"/>',
            '</svg>',
        '</div>'].join(''));
        this.loader_init();
    },
    render: function(parent){
        $(parent).append(this.$el);
    },
    loader_init: function(){
        var _this = this;
        var intId = 0, int2Id = 0, angle = 0, aperture = 0, d_aperture = 1.5;
        var d_angle = 15, need_finish = false;
        var transform_func = chrome ? '-webkit-transform' : 'transform';
        var arc = this.$('.popup-loader-spincircle')[0];
        var spinner = this.$('.popup-loader-fore')[0];
        var bubble = this.$('.popup-loader-bubble-container')[0];
        function setAperture(ang){
            ang %= 360;
            var angle = 6.28318531*ang/360.0;
            var ex = 100+Math.round(80*Math.cos(angle));
            var ey = 100+Math.round(80*Math.sin(angle));
            if (ang<=90)
                arc.setAttribute('d', 'M 180,100 A 80,80 0 0,1 '+ex+','+ey);
            else if (ang<=180)
            {
                arc.setAttribute('d', 'M 180,100 A 80,80 0 0,1 100,180 A 80,'+
                    '80 0 0,1 '+ex+','+ey);
            }
            else if (ang<=270)
            {
                arc.setAttribute('d', 'M 180,100 A 80,80 0 0,1 100,180 A 80,'+
                    '80 0 0,1 20,100 A 80,80 0 0,1 '+ex+','+ey);
            }
            else
            {
                arc.setAttribute('d', 'M 180,100 A 80,80 0 0,1 100,180 A 80,'+
                    '80 0 0,1 20,100 A 80,80 0 0,1 100,20 A 80,80 0 0,1 '+ex+
                    ','+ey);
            }
        }
        function burstBubble(){
            var iterations = 1, bubbleInt = 0;
            function startBurst(){
                bubble.setAttribute('class', 'popup-loader-spinner '+
                    'popup-loader-burst');
                setTimeout(function(){
                    bubble.setAttribute('class', 'popup-loader-spinner '+
                        'popup-loader-bubble-container');
                    if (!iterations)
                    {
                        _this.stop_timeout = setTimeout(function(){
                            _this.stop();
                        }, 400);
                    }
                }, 50);
                iterations -= 1;
                if (!iterations && bubbleInt)
                    clearInterval(bubbleInt);
            }
            startBurst();
            if (iterations)
                bubbleInt = setInterval(startBurst, 400);
        }
        function make_frame(){
            if (need_finish && aperture < 350)
                d_aperture = 10;
            else if (need_finish)
            {
                clearInterval(intId);
                aperture = 359.9;
                burstBubble();
            }
            else if (aperture > 200)
                d_aperture = (300 - aperture) / 50;
            else
                d_aperture = 1.5;
            setAperture(aperture);
            aperture = (aperture+d_aperture)%360;
        }
        this.start = function(opt){
            var _this = this;
            this.timeout = clearTimeout(this.timeout);
            if (opt && opt.timeout)
                setTimeout(function(){ _this.stop(); }, opt.timeout);
            need_finish = false;
            if (this.working)
                return;
            this.stop_timeout = clearTimeout(this.stop_timeout);
            this.working = true;
            this.$el.removeClass('g-hidden');
            setTimeout(function(){
                _this.$el.removeClass('g-transparent');
            }, 13);
            $('body').addClass('is-popup-loading');
            if (E.curr_view && E.curr_view.hide_search)
                E.curr_view.hide_search();
            if (intId)
                clearInterval(intId);
            intId = setInterval(make_frame, 50);
            int2Id = setInterval(function(){
                spinner.style[transform_func]='rotate('+angle+'deg)';
                angle=(angle+d_angle)%360;
            }, 50);
        };
        this.stop = function(){
            this.$el.addClass('g-transparent');
            clearInterval(int2Id);
            this.timeout = clearTimeout(this.timeout);
            this.stop_timeout = setTimeout(function(){
                setAperture(0);
                _this.$el.addClass('g-hidden');
                $('body').removeClass('is-popup-loading');
            }, animation_time);
            this.working = false;
        };
        this.finish = function(){
            if (need_finish)
                return;
            need_finish = true;
            this.timeout = clearTimeout(this.timeout);
            if (intId)
                clearInterval(intId);
            intId = setInterval(make_frame, 13);
        };
    }
});
var cross_sale_view_class = Backbone.View.extend({
    className: 'cross-sale',
    events: {'click .button': 'on_go'},
    template: zdot.template(cross_sale),
    render: function(){
        this.$el.html(this.template({T: T}));
        be_popup_lib.perr_err({id: 'be_vpn_cross_sale_view'});
        return this;
    },
    on_go: function(event){
        var store = $(event.currentTarget).data('store');
        be_popup_lib.perr_err({id: 'be_vpn_cross_sale_'+store+'_click'});
    }
});
var share_view_class = Backbone.View.extend({
    className: 'share-container',
    events: {'click .share': 'on_share'},
    template: zdot.template(share),
    render: function(){
        this.$el.html(this.template({T: T}));
        be_popup_lib.perr_err({id: 'be_vpn_share_view'});
        return this;
    },
    on_share: function(event){
        var rule_enabled = E.get_enabled_rule();
        var root_url = rule_enabled ? E.get_root() : null;
        var link = get_sharing_link(rule_enabled);
        be_social.init_globals(root_url, E.get('country'), link, '');
        this.share_links = {
            facebook: (be_util.browser=='torch' ?
                be_social.sharer.facebook_no_app : be_social.sharer.facebook)
                +zescape.qs(be_social.share.facebook),
            twitter: be_social.sharer.twitter
            +zescape.qs(be_social.share.twitter)
        };
        var service = $(event.target).data('service');
        be_popup_lib.perr_err({id: 'be_vpn_share_'+service+'_click'});
        window.open(this.share_links[service], '_blank',
            'height=500,width=1000');
        this.trigger('chosen');
    }
});
var share_control_view_class = Backbone.View.extend({
    className: 'share-control',
    initialize: function(){
        var _this = this;
        var random = Math.floor(Math.random()*2); // 0 or 1
        this.child_view = random ? new share_view_class() :
            new cross_sale_view_class();
        this.child_view.on('chosen', function(){ _this.trigger('chosen'); });
    },
    render: function(){
        this.$el.html(this.child_view.render().el);
        return this;
    }
});
var rating_view_class = Backbone.View.extend({
    className: 'popup-rating',
    events: {
        'mouseenter .popup-rating-star': 'on_hover',
        'click .popup-rating-star': 'on_click'
    },
    hints: [
        '',
        'Hate it',
        'Disliked it',
        'It was okay',
        'Like it',
        'Love it',
    ],
    initialize: function(opt){
        opt = opt||{};
        if (opt.hidden)
            this.$el.addClass('popup-rating-hidden');
        var $cont = $('<div>', {'class': 'popup-rating-container'});
        var count = 5;
        var i = count;
        while (i--)
        {
            var num = count-i;
            $cont.append($('<span>', {'class': 'popup-rating-star '+
                'popup-rating-star-'+num, 'data-num': num}));
        }
        this.$hint = $('<span>', {'class': 'popup-rating-hint'})
        .appendTo($cont);
        $('<h3>', {'class': 'popup-rating-title popup-more-title'})
        .text(T('Rate us'))
        .appendTo(this.$el);
        $('<div>', {'class': 'popup-rating-msg'})
        .text(T('Thank you!'))
        .appendTo(this.$el);
        this.$el.append($cont);
    },
    show: function(){
        this.$el.removeClass('popup-rating-hidden');
        be_popup_lib.perr_ok({id: 'be_media_mp_vpn_rating_display'});
    },
    get_num: function(target){
        var $star = $(target);
        if (!$star.hasClass('popup-rating-star'))
            return;
        return $star.data('num');
    },
    on_hover: function(e){
        var num = this.get_num(e.target);
        if (!num)
            return;
        this.$el.removeClass(this.active_class);
        this.active_class = 'popup-rating-active-'+num;
        this.$el.addClass(this.active_class);
        this.$hint.text(T(this.hints[num])||'');
    },
    on_click: function(e){
        var num = this.get_num(e.target);
        if (!num)
            return;
        be_popup_lib.perr_ok({id: 'be_media_mp_vpn_rating_rate'});
        be_popup_lib.perr_ok({id: 'be_media_mp_vpn_rating_rate_'+num});
        E.be_info.ecall('set_vpn_last_rating', [num]);
        // for now send to reviews page only chrome users with 5 stars
        if (num<5 || browser!='chrome')
            return this.thanks();
        var rate_url = 'https://chrome.google.com/webstore/detail'+
            '/hola-better-internet/gkojfkhlekighikafcpjkiklfbnlmeio/reviews';
        if (browser=='opera')
        {
            rate_url = 'https://addons.opera.com/en/extensions/details'+
                '/hola-better-internet/#feedback-container';
        }
        be_util.open_new_tab({url: rate_url});
        this.trigger('chosen');
    },
    thanks: function(){
        var _this = this;
        this.$el.addClass('popup-rating-thanks');
        setTimeout(function(){ _this.trigger('chosen'); }, 2000);
    }
});
var no_fix_it_count = {};
var recommend_show = {'youtube.com': true, 'bbc.com': true, 'bbc.co.uk': true,
    'svtplay.se': true};
function is_recommend(is_click){
    var tab_id = E.be_tabs.get('active.id');
    return no_fix_it_count[tab_id]>=(is_click ? 2 : 1)
        && recommend_show[E.get_root()];
}
var more_opt_view_class = Backbone.View.extend({
    className: 'popup-more',
    initialize: function(){
        var _this = this;
        var opt = this.opt = {};
        opt.active_classname = 'popup-button-active';
        opt.yes_text = T('Oh, yes!');
        opt.yes_active_text = T('Awesome!');
        opt.no_text = T('No, fix it');
        opt.no_active_text = T('Try safe mode');
        opt.recommend_text = T('No, I need help');
        var $el = this.$el;
        this.$title = $('<h3>', {'class': 'popup-more-title'})
        .text(T('Did it work?')).appendTo($el);
        this.$buttons = $('<div>', {'class': 'popup-more-row'}).appendTo($el);
        this.$btn_yes = $('<button>', {'class':
            'popup-button popup-button-yes'})
        .text(opt.yes_text).appendTo(this.$buttons)
        .click(function(e){
            e.stopPropagation();
            _this.on_yes();
        });
        this.$btn_no = $('<button>', {'class': 'popup-button popup-button-no'})
        .text(opt.no_text).appendTo(this.$buttons)
        .click(function(e){
            var root_url = E.get_root();
            var tab_id = E.be_tabs.get('active.id');
            no_fix_it_count[tab_id] = +(no_fix_it_count[tab_id]||0)+1;
            var rule_enabled = E.get_enabled_rule();
            var country = rule_enabled ? rule_enabled.country.toLowerCase() :
                undefined;
            be_popup_lib.perr_err({id: 'be_ui_vpn_click_no_fix_it',
                info: _.extend({src_country: E.get('country').toLowerCase(),
                url: E.get_url(), root_url: E.get_root(),
                proxy_country: country},
                _.pick(rule_enabled, 'name', 'type', 'md5'))});
            _this.update_yes(false);
            if (_this.$support_link)
                _this.$support_link.show();
            if (_this.$btn_no.hasClass('popup-button-recommend'))
            {
                var url = zescape.uri('https://hola.org/recommend', {}, {
                    src: 'bext', browser: browser,
                    reason: 'domain_geoip_never_worked', root_url: root_url,
                    bext_ver: be_util.version(), url: E.get_url()
                });
                return void window.open(url);
            }
            E.sp.spawn(fix_vpn());
        });
        if (browser=='chrome')
        {
            this.rating = this.rating||new rating_view_class({hidden: true});
            this.rating.$el.appendTo($el);
            this.rating.on('chosen', on_close_button);
        }
        this.share_control = new share_control_view_class();
        this.share_control.on('chosen', on_close_button);
        this.$share_wrapper = $('<div>', {'class':
            'vpn-share-control-container'}).appendTo($el);
        $('#servers_list').remove();
        var $more = this.$more = $('<div>', {id: 'servers_list', 'class':
            'popup-more-servers g-hidden'})
        .insertAfter('#popup');
    },
    on_yes: function(){
        var _this = this;
        var rule_enabled = E.get_enabled_rule();
        if (!rule_enabled || this.poll_voted)
            return;
        var c = rule_enabled.country.toLowerCase();
        var root_url = E.get_root(), url = E.get_url();
        set_working();
        this.update_yes(true);
        be_popup_lib.perr_err({id: 'be_vpn_ok', info: _.extend({
            src_country: E.get('country').toLowerCase(), url: url,
            root_url: root_url, proxy_country: c},
            _.pick(rule_enabled, 'name', 'type', 'md5'))});
        this.poll_voted = true;
        var rating = E.be_info && E.be_info.get('vpn_last_rating') || 0;
        var vpn_work_yes = E.be_info &&  E.be_info.get('vpn_work_yes') || 0;
        vpn_work_yes++;
        if (E.be_info)
            E.be_info.ecall('increment_vpn_work_yes', []);
        this.$title.addClass('g-hidden');
        this.$buttons.hide(animation_time, function(){
            if (_this.rating && (!rating || rating<5 && vpn_work_yes%4==1))
                _this.rating.show();
            else
                _this.$share_wrapper.html(_this.share_control.render().el);
        });
    },
    update_yes: function(active){
        var $yes = this.$btn_yes;
        var $no = this.$btn_no;
        $yes.toggleClass(this.opt.active_classname, active)
        .text(active ? this.opt.yes_active_text : this.opt.yes_text);
        if (!active)
            return;
        $no.addClass('g-transparent');
        this.$title.addClass('g-transparent');
        setTimeout(function(){
            $no.addClass('g-hidden');
            $yes.addClass('popup-button-response');
        }, animation_time);
    },
    remove: function(){
        this.hide();
        this.hide_more();
        $('#servers_list').remove();
        Backbone.View.prototype.remove.call(this);
    },
    render: function(){
        var _this = this;
        var tab_id = E.be_tabs.get('active.id');
        var $no = this.$btn_no;
        $no.toggleClass('popup-button-recommend', is_recommend());
        $no.text(is_recommend() ? this.opt.recommend_text : this.opt.no_text);
        if (!this.poll_voted)
            this.show();
        E.sp.spawn(etask({cancel: true}, [function(){
            return be_util.get_www_config();
        }, function(data){
            if (!data || !data.popup_need_help ||
                !data.popup_need_help.enabled)
            {
                return;
            }
            var countries = data.popup_need_help.countries;
            if (countries && countries.length &&
                countries.indexOf(E.get('country')) === -1)
            {
                return;
            }
            if (_this.$support_link)
                _this.$support_link.remove();
            _this.$support_link = $('<a>', {target: '_blank'})
            .attr('href', 'https://hola.org/support')
            .text(' '+T('Need Help?'))
            .click(function(e){
                be_popup_lib.perr_ok({id: 'be_ui_vpn_number_of_need_help'});
            }).hide()
            .appendTo(_this.$buttons);
        }]));
    },
    show_more: function(){
        $('body').addClass('is-popup-servers');
        this.$more.removeClass('g-hidden');
    },
    hide_more: function(){
        $('body').removeClass('is-popup-servers');
        this.$more.addClass('g-hidden');
    },
    show: function(){
        this.$el.removeClass('g-hidden');
        $('body').addClass('is-popup-mini');
    },
    hide: function(){
        this.$el.addClass('g-hidden');
        this.hide_more();
        $('body').removeClass('is-popup-mini');
    }
});
var title_view_class = Backbone.View.extend({
    className: 'popup-hover-title',
    initialize: function(opt){
        this.opt = opt||{};
        var _this = this;
        if (this.opt.no_search)
            this.$el.addClass('no-search');
        var title_text = this.opt.title||T('Browsing')+' '+T('From');
        this.$title = $('<div>', {'class': 'popup-enabled-title'});
        this.$title.append($('<h2>', {'class': 'popup-title'})
            .text(title_text));
        this.$el.append(this.$title);
        if (this.opt.no_search)
            return;
        this.$search_container = $('<div>', {'class':
            'popup-search-container'});
        this.$search = $('<div>', {'class': 'popup-search'})
        .appendTo(this.$search_container);
        this.search = init_search(this.$search);
        this.search.$('.twitter-typeahead').append($('<span>', {'class':
            'popup-search-trigger'}).click(function(){
                _this.search.select();
            }));
        this.$search.addClass('popup-search-advanced g-hidden');
        this.search.$el.addClass('g-transparent');
        this.$search.prepend($('<div>', {'class': 'popup-search-title'})
            .html(T('Browsing')+'<span>&nbsp;'+T('From')+'</span>'));
        this.$search.append($('<div>', {'class': 'popup-search-title-bottom'})
            .html('<span>'+T('Browsing')+'&nbsp;</span>'+T('From')));
        var events = {'mouseenter': function(){ _this.show_search(); },
            'mouseleave': function(){ _this.hide_search(); }};
        this.$title.on(events);
        this.$search.on(events);
        this.$el.prepend(this.$search_container);
    },
    render: function(){
        if (this.opt.no_search)
            return;
        if (this.search.$input.typeahead)
            this.search.$input.typeahead('val', E.get_root());
        else
            this.search.$input.val(E.get_root());
    },
    show_search: function(){
        var _this = this;
        var $body = $('body');
        if ($body.hasClass('is-popup-loading'))
            return;
        this.search_hide_timer = clearTimeout(this.search_hide_timer);
        this.$title.addClass('g-hidden');
        this.$search.removeClass('g-hidden');
        this.search.$el.removeClass('g-transparent');
        this.search_show = setTimeout(function(){
            _this.$search.addClass('popup-search-hover');
        }, 13);
    },
    hide_search: function(){
        if (this.search_hide_timer)
            return;
        var _this = this;
        this.search.off('blur');
        if (this.$search.find('.js-search-active').length > 0 && this.search)
            this.search.on('blur', function(){ _this.hide_search(); });
        else
        {
            this.search_show = clearTimeout(this.search_show);
            this.search.$el.addClass('g-transparent');
            this.$search.removeClass('popup-search-hover');
            this.search_hide_timer = setTimeout(function(){
                _this.$title.removeClass('g-hidden');
                _this.$search.addClass('g-hidden');
            }, animation_time);
        }
    }
});
var enable_view_class = Backbone.View.extend({
    className: 'popup-enabled',
    initialize: function(){
        var _this = this;
        var $container = $('<div>', {'class': 'popup-enabled-content'});
        var hover_title = this.hover_title = new title_view_class();
        this.$search = hover_title.$search;
        this.search = hover_title.search;
        this.country_selected_view = new country_selected_view_class();
        this.more_opt = new more_opt_view_class();
        $container.append(hover_title.$el, this.country_selected_view.$el);
        this.$el.append($container, this.more_opt.$el);
        this.$safe = $('<div>', {'class': 'g-hidden'})
        .text(T('Safe mode'))
        .click(function(){
            var nav = E.ui_popup && E.ui_popup.nav;
            var nav_switch = E.connection_switch ||
                (nav && nav.connection_switch);
            if (!nav_switch)
                return;
            nav_switch.toggle();
        })
        .appendTo($container);
    },
    render: function(){
        this.hover_title.render();
        var prev_country = this.country_selected_view.country;
        this.country_selected_view.render();
        this.more_opt.render();
        if (this.country_selected_view.country!=prev_country)
            this.more_opt.hide_more();
        var rule_enabled = E.get_enabled_rule();
        this.$safe.toggleClass('g-hidden', !rule_enabled ||
            rule_enabled.md5!='premium');
    },
    remove: function(){
        if (this.more_opt)
        {
            this.more_opt.remove();
            this.more_opt = null;
        }
        Backbone.View.prototype.remove.call(this);
    }
});
var popular_view_class = Backbone.View.extend({
    className: 'r_popular_view',
    initialize: function(){
        var _this = this;
        this.$search = $('<div>', {'class': 'r_ui_search'});
        this.search = init_search(this.$search);
        this.search.$('.twitter-typeahead').append($('<span>', {'class':
            'popup-search-trigger'}).click(function(){
                _this.search.select();
            }));
    },
    render: function(){
        var _this = this;
        var $popular = $('<div>', {'class': 'popup-popular'});
        this.$title = $('<h2>', {'class': 'popup-title'})
        .text(T('Top popular sites'));
        var $search_container = $('<div>', {'class':
            'popup-search-container'});
        this.$search.addClass('popup-search g-transparent')
        .removeClass('r_ui_search').appendTo($search_container);
        $popular.append($search_container);
        $popular.append(this.$title);
        var events = {'mouseenter': function(){ _this.show_search(); },
            'mouseleave': function(){ _this.hide_search(); }};
        var list = (E.get('unblocking_rate')||[]);
        this.$popular_list = $('<div>', {'class': 'popup-popular-list'})
        .appendTo($popular);
        list.forEach(function(p){
            _this.$popular_list.append($new_popular_block(p));
        });
        this.$title.on(events);
        this.$search.on(events);
        this.$el.empty().append($popular);
        $('body').addClass('is_popular_view');
    },
    show_search: function(){
        this.$title.addClass('g-transparent');
        this.$popular_list.addClass('popup-popular-list-blur');
        this.$search.removeClass('g-transparent');
    },
    hide_search: function(){
        var _this = this;
        this.search.off('blur');
        if (this.$search.find('.js-search-active').length > 0 && this.search)
            this.search.on('blur', function(){ _this.hide_search(); });
        else
        {
            this.$title.removeClass('g-transparent');
            this.$popular_list.removeClass('popup-popular-list-blur');
            this.$search.addClass('g-transparent');
        }
    }
});

var redirect_view_class = Backbone.View.extend({
    className: 'popup-redirect hidden-until-reload',
    links : null,
    current_root: null,
    rule_enabled: null,
    disable_view: null,
    selected_host: null,
    events: {
        'change .sites-list .link input': '_on_site_change'
    },
    initialize: function(opt){
        this.current_root = svc_util.get_root_url(E.be_tabs.get('active.url'));
        this.links = opt.links;
        this.links.push(this.current_root);
        this.selected_host = this.links[0];
        this.rule_enabled = E.get_enabled_rule();
    },
    render: function(){
        var _this = this;
        if (this.disable_view)
            this.disable_view.remove();
        this.$el.empty();
        // XXX alexeym: remove display: none after extension update
        // (when most of users will use version with new be_popup.css)
        var $el = this.$el.css('display', 'none');
        $('body').addClass('is-redirect-suggest');
        $el.append($('<h2>', {'class': 'popup-title title'})
            .text(T('Select site to unblock')));
        var $list = $('<ul>', {'class': 'sites-list'});
        $el.append($list);
        _.forEach(this.links, function(link){
            _this.create_item(link, 'unblock', link==_this.selected_host)
            .data('link', link).appendTo($list);
        });
        var title_view = new title_view_class({title: T('Select a Country'),
            no_search: true});
        var country_selection_view = new country_selection_view_class({
            active_country: !!this.rule_enabled&&E.get('country'),
            host: this.selected_host
        });
        country_selection_view.on('select', this._on_country_select, this);
        this.disable_view = new disable_view_class({title_view: title_view,
            country_selection_view: country_selection_view});
        $el.append(this.disable_view.render().$el);
    },
    _on_country_select: function(country){
        E.redirect_view_closed = true;
        var info = {current_root: this.current_root, links: this.links,
            country: country};
        if (E.get('country')==country)
        {
            be_popup_lib.perr_ok({id: 'be_ui_vpn_redirect_reject', info:
                info});
        }
        else
        {
            info.unblock = this.selected_host;
            be_popup_lib.perr_ok({id: 'be_ui_vpn_redirect_unblock',
                info: info});
        }
    },
    _on_site_change: function(e){
        this.selected_host = $(e.target).closest('.link').data('link');
        this.render();
    },
    create_item: function(text, class_name, checked){
        var $text = $('<span>', {'class': 'text'}).text(text);
        var $radio = $('<input>', {type: 'radio', name: 'country',
            checked: !!checked});
        var $label = $('<label>').append($radio).append($text);
        return $('<li>', {'class': 'link f32 '+class_name}).append($label);
    }
});

function $unblock_options(){
    var rule_enabled = E.get_enabled_rule();
    var user_country = E.get('user.country');
    var $table = $('<div>', {'class': 'popup-more-servers-content'});
    var $list_title = $('<div>', {'class': 'popup-more-servers-title'})
    .text(T('Try another server'));
    $('<div>', {'class': 'popup-more-servers-close'}).prependTo($list_title);
    var $ret = $('<div>', {'class': 'r_ui_options_div'})
    .append($list_title, $table);
    var proxy_country = rule_enabled ? rule_enabled.country : user_country;
    if (!proxy_country)
    {
        be_popup_lib.perr_err({id: 'be_ui_vpn_options_err',
            filehead: zerr.log_tail(),
            info: {user_country: user_country, rule_enabled: rule_enabled,
                proxy_country: proxy_country},
        });
    }
    var all_rules = get_all_rules(proxy_country||'');
    append_rules_list($table, all_rules);
    return $ret;
}

function get_rule(premium){
    var rule_enabled = E.get_enabled_rule();
    var user_country = E.get('user.country');
    var proxy_country = rule_enabled ? rule_enabled.country : user_country;
    var all_rules;
    var r = rule_enabled;
    if (!r)
    {
        all_rules= get_all_rules(proxy_country||'');
        r = all_rules[0];
    }
    if (!r)
    {
        be_popup_lib.perr_err({id: 'be_ui_vpn_no_rule_found',
            info: {proxy_country: proxy_country,
            enabled_name: rule_enabled&&rule_enabled.name,
            searching_premium: premium}});
    }
    return r;
}

function fix_vpn_perr(opt){
    if (!opt)
        return;
    var url = opt.url;
    var rule_enabled = opt.rule;
    if (!rule_enabled)
        return;
    var root_url = opt.root_url;
    var p = E.be_rule.get('verify_proxy_ret')||{};
    var c = rule_enabled.country.toLowerCase();
    var info = _.extend({
        src_country: E.get('country').toLowerCase(),
        url: url,
        root_url: root_url,
        proxy_country: c,
        tunnel: p.tunnel&&p.tunnel.tunnel,
        proxy_error: p.error,
        agent: p.basic&&p.basic.agent,
        zagent_log: E.be_vpn.get('zagent_conn_log')||[],
        callback_raw: E.be_mode.get('svc.callback_raw'),
        callback_ts: E.be_mode.get('svc.callback_ts'),
        mode_change_count: E.be_mode.get('mode_change_count'),
        multiple_mode_changes: E.be_mode.get('mode_change_count')>2,
        real_url: E.be_tabs.get('active.url'),
        status: E.be_tabs.get('active.status'),
    }, _.pick(rule_enabled, 'name', 'type', 'md5'));
    return etask([function(){
        return E.be_tabs.ecall('get_trace', [E.be_tabs.get('active.id')]);
    }, function(trace){
        info.page_load = trace && trace.length &&
            trace[trace.length-1].duration;
        return info;
    }, function ensure$(){
        be_popup_lib.perr_err({
            id: 'be_ui_vpn_script_not_work', info: info, });
    }]);
}
var fix_tasks = {};
function fix_vpn(){
    var rule_enabled = E.get_enabled_rule();
    var root_url = E.get_root(), url = E.get_url();
    if (!rule_enabled||!root_url)
    {
        be_popup_lib.perr_err({id: 'be_ui_vpn_no_rule',
            info: {country: E.get('country'), root_url: root_url, url: url}});
        return;
    }
    var info;
    var timeout = Date.now();
    var tab_id = E.be_tabs.get('active.id');
    if (fix_tasks[tab_id])
        fix_tasks[tab_id].ereturn();
    return (fix_tasks[tab_id] = etask({cancel: true}, [function(){
        return fix_vpn_perr({rule: rule_enabled, root_url: root_url,
            url: url});
    }, function(perr_info){
        info = perr_info;
        return E.change_proxy(rule_enabled, 'not_working');
    }, function(){
        var proxy_timeout = Date.now()-timeout;
        if (proxy_timeout<10*SEC)
            return true;
        return this.ereturn();
    }, function get_trace(){
         return E.be_tabs.ecall('get_trace', [tab_id]);
    }, function(trace){
        var _this = this;
        var last_trace = trace && trace.length && trace[trace.length-1];
        var status = last_trace && last_trace.status;
        // XXX alexeym : if you assume status is array, should check !status
        if (!status)
            return this.wait(20*SEC);
        info.page_load = last_trace && last_trace.duration;
        if (info.page_load<20*SEC && !{'4': 1, '5': 1}[status[0]])
            return this.ereturn(true);
        return this.ereturn();
    }, function(){
        return this.egoto('get_trace');
    }, function catch$(err){
        be_popup_lib.perr_err({id: 'be_ui_vpn_script_fix_rule', info: info,
            err: err});
    }]));
}

function more_options_click(o, $more){
    clr_working();
    var opened = !$more.hasClass('g-hidden');
    if (opened)
	return;
    o.show_more();
    $more.empty().append($unblock_options());
    var rule_enabled = E.get_enabled_rule();
    var root_url = E.get_root(), url = E.get_url();
    fix_vpn_perr({rule: rule_enabled, root_url: root_url, url: url});
    if (!rule_enabled)
        return;
    E.change_proxy(rule_enabled, 'not_working');
}

function append_rules_list($table, list){
    for (var i in list)
        $table.append($new_autorule(list[i]));
}

function append_rating($ratings, rating){
    var stars_on, i;
    if (!rating||rating.rating===undefined)
        return;
    var $users = $('<span>', {'class': 'popup-more-servers-item-votes'})
    .appendTo($ratings);
    $users.append($('<span>', {'class': 'popup-more-servers-item-votes-yes',
        title: T('Number of users that use this option', [])})
        .append(rating.vote_up||0));
    $users.append($('<span>', {'class': 'popup-more-servers-item-votes-no',
        title: T('Number of users that pressed not working', [])})
        .append(rating.vote_down||0));
    stars_on = Math.ceil(rating.rating*5)||1;
    /* XXX amir: support half star */
    var $stars = $('<span>', {'class': 'popup-more-servers-item-stars'})
    .appendTo($ratings);
    var star_class = 'popup-more-servers-item-star';
    var star_on = stars_on < 3 ? '-red' : '-on';
    for (i=0; i<5; i++)
    {
        $stars.append($('<span>', {'class': star_class+' '+
            (i<stars_on ? star_class+star_on : star_class+'off')}));
    }
}

function $new_rule(enabled, c, title, ratings, onclick){
    var $ret = $('<div>', {'class': 'popup-more-servers-item'});
    var $title = $('<span>', {'class': 'popup-more-servers-item-title'});
    var $rating = $('<div>', {'class': 'popup-more-servers-item-ratings'});
    $ret.append($title).append($rating);
    var selected_class = 'popup-more-servers-item-selected';
    if (enabled)
        $ret.addClass(selected_class);
    $ret.click(function(){
        $('.'+selected_class).removeClass(selected_class);
        $ret.addClass(selected_class);
        if (onclick)
            onclick.call(this);
    });
    if (!c)
        return $ret;
    $title.text(title||'');
    append_rating($rating, ratings);
    return $ret;
}

function $new_autorule(r){
    var rating, c = r.country||'';
    return $new_rule(r.enabled, c, r.description,
	r.md5=='premium' ? null : r.ratings, function(e){
	if (r.md5=='premium' && !E.get('have_premium'))
	{
	    var proto = E.be_ext.get('use_http') ? 'http' : 'https';
	    window.open(proto+'://hola.org/access/'+E.get_root()+
		'/using/vpn-full-'+c.toLowerCase()+'?utm_source=holaext',
		'_blank');
	    return;
	}
	set_user_cmd({label: 'set_script', cmd: 'enable',
	    country: r.country, name: r.name});
	E.script_set(r, {enabled: true, root_url: E.get_root()});
    });
}

E.on_show = function(){
    E.is_visible = true;
    update_footer();
    on_ext_display();
};

E.on_hide = function(){
    E.is_visible = false;
};

function on_ext_display(){
    if (E.is_visible && !E.displayed && !is_tpopup && E.curr_view)
    {
        E.displayed = true;
        be_popup_lib.perr_ok({id: 'be_media_mp_ui_display_ext_vpn'});
    }
}

E.render = _.debounce(function(){
    return etask([function(){
        var be_bg_main = window.be_popup_main.be_bg_main;
        var $up, state = E.get('state'), enabled = be_bg_main.get('enabled');
        // XXX arik/mark hack: need a nicer way to handle removal from DOM
        if (state=='error')
            return E.set_err('be_ui_vpn_render_state_err');
        state = !enabled ? 'turned_off' : state;
        if (!E.curr_view||E.curr_view.state!=state)
        {
            if (E.curr_view && E.curr_view.remove)
            {
                E.curr_view.remove();
                E.curr_view = null;
            }
            $('body').removeClass('is_popular_view is-popup-off '+
                'is-popup-disabled is-popup-error is-redirect-suggest');
            if (!enabled)
                E.curr_view = new turned_off_view_class();
            else if (state=='skip_url'||get_is_reminder())
                E.curr_view = new popular_view_class();
            else
            {
                E.curr_view = null;
                if (chrome && !is_tpopup && E.be_tabs &&
                    E.be_tabs.get_redirect_list)
                {
                    var active_tab = E.be_tabs.get('active.id');
                    var redirect_list = E.be_tabs
                        .get_redirect_list(active_tab);
                    var redirect_view = !E.redirect_view_closed;
                    if (redirect_view && redirect_list &&
                        redirect_list.length)
                    {
                        if (E.loader)
                        {
                            E.loader.finish();
                            E.loader.stop();
                        }
                        E.curr_view = new redirect_view_class({links:
                            redirect_list});
                    }
                }
                if (!E.curr_view)
                {
                    if (state=='enable')
                        E.curr_view = new enable_view_class();
                    else
                        E.curr_view = new disable_view_class();
                }
            }
            E.curr_view.state = state;
            $up = $('<div>', {class: 'r_ui_up'}).append(E.curr_view.$el);
            E.$el.empty().append($up);
        }
        E.curr_view.render();
        update_footer();
        on_ext_display();
    }, function(){ E.trigger('render_done');
    }, function catch$(err){ E.set_err('be_ui_vpn_render_err', err); }]);
});

function set_user_cmd(opt){
    zerr.notice('user action %s cmd %s country %s', opt.label, opt.cmd,
	opt.country);
    var new_state;
    if (E.get_enabled_rule())
        new_state = {};
    else
        new_state = {state: 'disable'};
    // XXX arik NOW: need better way to set status
    E.set(_.extend({'user.country': opt.country, 'user.cmd': opt.cmd,
        'user.opt': opt}, opt.no_busy ? new_state :
        {status: 'busy', status_opt: {desc: 'Connecting...'}}));
}

E.script_set = function(rule, val){
    return etask([function(){
	clr_working();
	return E.be_ext.ecall('set_enabled', [true]);
    }, function(){
        if (!E.be_ext.get('r.ext.enabled'))
	    be_popup_lib.perr_err({id: 'be_ui_vpn_set_enabled_mismatch'});
	if (!E.be_ext.get('r.vpn.on'))
	    return E.be_vpn.ecall('enable', []);
    }, function(){
        var new_rule = {name: rule.name, enabled: +val.enabled,
            country: val.country||rule.country, type: rule.type,
            root_url: val.root_url};
        if (val.expire)
            new_rule.expire = val.expire;
        new_rule.premium = !!val.premium;
        return E.be_rule.fcall('trigger', ['set_rule', new_rule]);
    }, function(){
        // XXX alexeym/shachar: check if we need to force tab refresh here
	// XXX arik: need to wait till not busy before sending perr
	be_popup_lib.perr_ok({id: 'be_ui_vpn_script_set_ok', info:
	    {name: rule.name, src_country: E.get('country').toLowerCase(),
	    root_url: val.root_url, enabled: val.enabled, premium: val.premium}});
    }, function catch$(err){
	E.set_err('be_ui_vpn_script_set_err', err);
    }]);
};

return E; });
