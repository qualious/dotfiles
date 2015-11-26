// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['be_config', 'jquery', 'underscore', '/svc/pub/be_backbone.js',
    '/util/etask.js', '/svc/pub/be_browser.js', '/util/zerr.js',
    '/svc/pub/be_ui_obj.js', '/svc/pub/be_popup_lib.js',
    '/svc/pub/be_util.js', '/svc/pub/be_locale.js', '/util/version_util.js',
    '/svc/pub/be_user_nav.js'],
    function(be_config, $, _, be_backbone, etask, B, zerr, be_ui_obj,
    be_popup_lib, be_util, T, version_util, be_user_nav){
B.assert_popup('be_popup_main');
zerr.set_exception_handler('be', be_popup_lib.err);
var chrome = window.chrome, conf = window.conf;
var E = new (be_backbone.model.extend({nav: undefined,
    _defaults: function(){ this.on('destroy', function(){ E.uninit(); }); },
}))();
E.be_popup_lib = be_popup_lib;
E.zerr = window.hola.zerr = zerr;
var browser = be_util.browser();
var local_ccgi_chrome = !!chrome && browser!='torch' && browser!='opera';
var zon_config = window.zon_config;
// XXX alexeym BACKWARD: CONFIG_REMOTE_CCGI is used in previous local_ccgi ext
var use_remote_config = (zon_config.CONFIG_REMOTE_CCGI===false ||
    zon_config.CONFIG_LOCAL_CCGI_CHROME) &&
    window.is_tpopup && local_ccgi_chrome;

function set_on(on){
    var $checkbox = $('#g_switch');
    if (on)
    {
        $checkbox.addClass('enabled');
	$checkbox.attr('title', T('Stop Hola'));
    }
    else
    {
        $checkbox.removeClass('enabled');
	$checkbox.attr('title', T('Start Hola'));
    }
}

function switch_cb(){
    var $checkbox = $('#g_switch');
    $checkbox.css('visibility', 'visible');
    set_on(E.be_bg_main.get('enabled'));
}

E.open_ccgi = function(opt){
    /* XXX bahaa: handle case of no be_bg_main */
    E.be_bg_main.fcall('open_ccgi', [opt]);
};

E.uninit_user_nav = function(){
    if (E.nav)
        E.nav.remove();
    E.nav = undefined;
};

function user_nav(){
    E.nav = be_user_nav.new_user_nav({
	settings_handler: function(){ E.open_ccgi(); }});
    var $div = $('<div class="l_user_nav_container"></div>').append(E.nav.$el);
    return $div;
}

function create_ui(){
    $('body').addClass(browser);
    if (browser=='torch')
    {
        $('#header > a').attr('href',
            'http://torchbrowser.com/hola-for-torch');
    }
    if (window.is_tpopup)
        return $('body').addClass('tpopup');
    if (E.get('no_proxy'))
        return;
    E.listen_to(E.be_bg_main, 'change:enabled', switch_cb);
    window.hola.t.l_ui = Date.now();
}

E.init = function(){
    try {
        window.popup_main = E;
        E.inited = true;
        if (E.be_bg_main)
            return;
        // XXX alexeym: disable popup if no chrome.proxy in
        // chromium browser (Opera version < 20)
        E.set('no_proxy', be_util.no_proxy());
        if (!B.inited)
        {
            B.init();
            $(window).unload(function(){ E._destroy(); });
        }
        if (!E.$el)
        {
            E.$el = $('<div>', {class: 'be_popup_main'});
            $('#popup').empty().append(E.$el);
        }
        if (!E.start)
        {
            E.start = new Date();
            E.resize_handler_init();
            E.render_init();
        }
        if (B.use_msg && !E.bg_main_ping)
        {
            B.backbone.client.ping('be_bg_main', 500, function(ret){
                if (!ret.error)
                    E.bg_main_ping = true;
                else
                    zerr('l.popup ping bg failed %s', zerr.json(ret));
                return E.init();
            });
            return;
        }
        E.be_bg_main = B.backbone.client.start('be_bg_main');
        zerr.notice('l.popup got bg');
        if (B.use_msg)
        {
            E.listenTo(E.be_bg_main, 'change:_backbone_client_started',
                inited_cb);
        }
        E.listen_to(E.be_bg_main, 'change:inited', inited_cb);
    } catch(err){ E.set_err('be_popup_main_init_err', err); }
};

/* XXX arik: todo */
E.uninit = function(){
    if (!E.inited)
	return;
    zerr.notice('l.popup uninit');
    E.resize_handler_uninit();
    if (E.be_bg_main)
	B.backbone.client.stop('be_bg_main');
    E.uninit_user_nav();
    B._destroy();
    E.off();
    E.stopListening();
    E.inited = false;
};

E.set_err = function(err, _err){
    try {
	zerr('be_ui_set_err %s %s', err, _err.stack||_err);
	if (E.rmt)
	    E.be_bg_main.fcall('err', [err, '', _err]);
    } catch(e){ console.error('set_err error %s %s', err, e.stack||e); }
    E.render_error(err, _err);
};

function inited_cb(){
    if (B.use_msg && !E.be_bg_main.get('_backbone_client_started'))
	return;
    if (!E.be_bg_main.get('inited'))
        return zerr.notice('l.popup_main bg_main not inited');
    E.stopListening(E.be_bg_main, 'change:_backbone_client_started',
        inited_cb);
    zerr.notice('l.popup inited');
    create_ui();
    E.set('inited', true);
    load_rmt_popup();
}

function load_local(){
    var be_ver = {ver: zon_config.ZON_VERSION};
    be_config.undef();
    window.require_is_remote = true; /* XXX arik hack: find better way */
    window.is_local_ccgi = true;
    require.config({baseUrl: '/ccgi/'});
    require(['be_config'], function(_be_config){
        _be_config.init(be_ver.ver);
        require(['/svc/pub/be_ui_popup_ext.js'],
            function(be_ui_popup){ be_ui_popup.init(); });
    });
}

// XXX arik: renam to load_ccgi_popup
function load_rmt_popup(){
    window.no_chrome_mp = chrome && (
        (browser=='chrome' && !zon_config.CONFIG_MP_CHROME)
        || (browser=='torch' && !zon_config.CONFIG_MP_TORCH)
        || (browser=='opera' && !zon_config.CONFIG_MP_OPERA));
    if (zon_config.CONFIG_LOCAL_CCGI_CHROME && local_ccgi_chrome &&
        !window.is_tpopup)
    {
        return load_local();
    }
    zerr.notice('l.popup loading rmt');
    be_config.undef();
    window.require_is_remote = true; /* XXX arik hack: find better way */
    // XXX colin: make sure if needs cancel or not
    return etask({name: 'load_rmt_popup'}, [function(){
	return E.be_bg_main.ecall('get_rmt_config', []);
    }, function(config){
        // XXX alexeym: hack (use_remote_config), need to check
        if (!config || use_remote_config)
	    return this.ereturn(load_rmt_popup_slow());
	require.config(config);
        _load_rmt_popup(config.ver, config.country);
    }, function catch$(err){
	zerr('load_rmt_popup error %s', err.stack);
	load_rmt_popup_slow();
    }]);
}

function _load_rmt_popup(ver, country){
    require(['be_config'], function(be_config){
	/* XXX vladimir BACKWARD: country must be '' in old versions */
	if (version_util.version_cmp(be_util.version(), '1.2.166')<=0)
	    country = '';
        be_config.init(ver, country);
        require(['/svc/pub/be_ui_popup_ext.js'],
            function(be_ui_popup){ be_ui_popup.init(); });
    });
}

function load_rmt_popup_slow(){
    /* XXX arik hack: rm Math.random */
    zerr('load_rmt_popup_slow (no rmt config)');
    require.config({baseUrl: conf.url_bext, waitSeconds: 30,
	urlArgs: 'rand='+Math.random()});
    require(['be_ver'], function(be_ver){
        _load_rmt_popup(be_ver.ver, be_ver.country);
    });
}

E.render_init = function(){
    if (E.get('no_proxy'))
	return;
    E.$el.empty().append((new be_ui_obj.init_view({
	className: 'l_ui_obj_init', text: T('Starting...'), show_after: 2000,
        err: function(){
	if (!E.be_bg_main) /* XXX arik: need raw level api for perr */
	    return;
        E.be_bg_main.fcall('err', _.toArray(arguments));
    }})).$el);
};

E.render_error = function(msg, err){
    try {
	if (!this.ui_error)
	{
            E.be_bg_main.fcall('err', ['be_popup_main_render_error', msg||'',
                err]);
	    this.ui_error = new be_ui_obj.error_view({className:
		'l_ui_obj_error'});
	}
	E.$el.empty().append(this.ui_error.$el);
    } catch(e){
	console.error('render error %s', e.stack||e);
	E.be_bg_main.fcall('err', ['be_popup_main_render_error_err', '', e]);
    }
};

var resize_timer, mut_observer, default_timeout = 500;
var b = document.body;
var $b = $(b);
E.resize = function(t){
    // XXX alexeym hack: needs to find a generic solution for resizing
    var dropdown = $b.find('.r_country_list.dropdown'),
    dropdown_opened = dropdown.is('.open');
    if (dropdown_opened)
        $b.addClass('dropdown-opened');
    else
        $b.removeClass('dropdown-opened');
    // chrome and firefox: clientHeight doesn't include dropdowns.
    // chrome: scrollHeight includes dropdown, but it doesn't decrease when
    // they're closed.
    // firefox: scrollHeight is correct
    var h = dropdown_opened || !chrome ? b.scrollHeight : b.clientHeight;
    var w = dropdown_opened || !chrome ? b.scrollWidth : b.clientWidth;
    clearTimeout(resize_timer);
    resize_timer = setTimeout(E.resize, t||default_timeout);
    if (E.resize.width==w && E.resize.height==h)
	return;
    E.resize.width = w;
    E.resize.height = h;
    // XXX bahaa: mv to B.resize()
    if (window.is_tpopup)
        parent.postMessage({id: 'tpopup.resize', width: w, height: h}, '*');
    else if (top.be_test_page)
	top.$('iframe').width(w).height(h);
    else
	B.firefox.panel.resize(w, h);
};

E.resize_handler_init = function(){
    if (!E.should_resize() || resize_timer)
	return;
    E.resize();
    if (!window.MutationObserver)
        return;
    default_timeout = 1000;
    mut_observer = new window.MutationObserver(_.debounce(E.resize));
    mut_observer.observe(document.documentElement, {attributes: true,
        childList: true, characterData: true, subtree: true,
        attributeOldValue: false, characterDataOldValue: false});
};

E.resize_handler_uninit = function(){
    if (!E.should_resize())
	return;
    resize_timer = clearTimeout(resize_timer);
    if (mut_observer)
        mut_observer.disconnect();
    mut_observer = null;
};

E.should_resize = function(){ return !window.chrome || window.is_tpopup; };

return E; });
