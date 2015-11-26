// LICENSE_CODE ZON
'use strict'; /*jslint browser:true*/
// XXX bahaa/alexk: use be_base.is_be() if available
var be_test_page;
try { be_test_page = top.be_test_page; } catch(e){}
var is_be = window.is_tpopup || be_test_page ||
    /^(chrome-extension|resource):\/\//.test(location.href);
var is_wbm = /^http:\/\/zs-wbm/.test(location.href);
var requires = ['backbone', 'underscore', 'jquery', 'jquery_cookie',
    '/util/etask.js'];
if (is_be)
{
    requires = requires.concat(['/svc/pub/be_locale.js', '/svc/pub/be_util.js',
        '/util/version_util.js', '/svc/pub/be_ui_obj.js',
        '/svc/pub/be_popup_lib.js']);
}
else if (!is_wbm)
    requires = requires.concat(['/www/util/pub/localize.js']);
define(requires,
    function(Backbone, _, $, $cookie, etask, T, be_util, version_util,
     be_ui_obj, be_popup_lib){
if (is_wbm)
    T = function(s){ return s; };
var zopts = be_util && be_util.zopts;
var E = {};
var get_premium_html =
    '<li class="hidden-xs"><a href="https://hola.org/referral?ref=home" '
    +'class="navbar-link upgrade_to_premium user_link">'
    +T('Get Free Premium')+'</a></li>';
var sign_up_html =
    '<li><button type="button" class="btn btn-signup-trans navbar-btn" '
    +'id="sign_up">'+T('Sign up')+'</button></li>';

E.user_status = Backbone.Model.extend({
    initialize: function(options){
        this.options = _.defaults(options||{}, {cookie: 'user'});
        if ($.cookie(this.options.cookie))
            return void this.update_from_cookie();
        this.refresh();
    },
    refresh: function(){
	var _this = this;
	etask('user_status_refresh', [function(){
	    return $.get('/users/get_user?source=user_status');
	}, function(){
            _this.update_from_cookie();
	}]);
    },
    update_from_cookie: function(){
        var cookie = JSON.parse($.cookie(this.options.cookie));
        this.set('display_name', cookie.display_name);
        this.set('is_member', cookie.is_member);
        this.set('verified', cookie.verified);
        this.set('is_paid', cookie.is_paid);
    }
});

// Extension handles user status differently because it can't read hola.org
// cookies
E.be_user_status = Backbone.Model.extend({
    initialize: function(options){
        this.options = options||{};
        this.refresh();
    },
    refresh: function(){
	var _this = this;
        return $.ajax({
            url: 'https://hola.org/users/get_user?source=be_user_nav',
            xhrFields: {withCredentials: true}})
       .done(function(res){ _this.update(res.user); });
    },
    update: function(user){
        var _this = this, is_member, be_premium = _this.options.be_premium;
        return etask([function(){
            if (!user)
            {
                _this.clear();
                _this.set('is_found', 0);
                return this.ereturn();
            }
            _this.set('is_found', 1);
            return be_premium ? be_premium.ecall('is_active') : null;
        }, function(_is_member){
            is_member = _is_member;
            return be_premium ? be_premium.ecall('is_paid') : null;
        }, function(is_paid){
            _this.set('display_name', user.displayName);
            _this.set('verified', user.verified);
            _this.set('is_member', is_member);
            _this.set('is_paid', is_paid);
        }]);
    }
});

E.user_links = Backbone.View.extend({
    tagName: 'ul',
    className: 'user-status nav navbar-nav navbar-right',
    login_link: function(){
        return $('<a class="user_link" id="sign_in"></a>')
            .text(T('Log in'))
            .attr('href', this.prot+'//'+this.domain+'/signin'
                +'?utm_source=holaext');
    }
});

/* XXX amir: create base object and move common www and be code to it */
E.www_user_links = E.user_links.extend({
    initialize: function(options){
        this.options = _.defaults(options||{}, {premium_link: false,
            my_settings: true, my_account_url: 'https://hola.org/my_account'});
        _.bindAll(this, 'logout');
        this.listenTo(this.model, 'change', this.render);
        this.prot = '';
        this.domain = options.domain||'hola.org';
        this.render();
    },
    get_logout_url: function(){
        var logout_url = this.options.logout_url ||
            (this.domain=='luminati.io' ?
                '//luminati.io/users/logout/inline' :
                '//hola.org/users/logout/inline');
        return this.prot+logout_url;
    },
    logout: function(event){
        var _this = this;
        if (event)
            event.preventDefault();
        return $.ajax({url: this.get_logout_url(), type: 'POST',
            xhrFields: {withCredentials: true}})
	.done(function(){
            location.href = _this.options.logout_redir_url||'/'; });
    },
    add_lang: function($ul){
        var lang_list, $a, $li;
        if (!this.options.lang_select ||
            version_util.version_cmp(be_util.version(), '1.2.672')<0)
        {
            return;
        }
        $li = $('<li>');
        $a = $('<a href="#">'+T('Language')+'</a>').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            lang_list.toggle();
        }).appendTo($li);
        $ul.append($li);
        lang_list = new be_ui_obj.lang_list({label: $a});
        $('.l_ui_obj_lang_list').remove();
        $('body').append(lang_list.$el);
    },
    render: function(){
        var display_name = this.model.get('display_name');
        var is_member = this.model.get('is_member');
        var is_paid = this.model.get('is_paid');
        var $li, $ul, $dropdown, $a;
        this.$el.empty();
        if (this.options.premium_link)
            this.$el.append(get_premium_html);
        if (!display_name)
        {
            $('<li>').append(this.login_link().addClass('navbar-link'))
            .appendTo(this.$el);
            this.$el.append(sign_up_html);
        }
        else
        {
            var name = display_name ? display_name : T('Account');
            /* XXX amir: find a better way to link to https pages */
            $dropdown = $('<li class="dropdown">');
            $a = $('<a class="dropdown-toggle navbar-link" '
                +'data-toggle="dropdown" href="#">').text(name);
            if (display_name)
                $a.attr('title', name);
            $a.append(' <span class="caret">');
            $ul = $('<ul class="dropdown-menu pull-right" role="menu">');
            $dropdown.append($a, $ul);
            if (display_name)
            {
                $ul.append('<li class="disabled"><a role="menuitem" '
                    +'tabindex="-1" '
                    +'href="#" style="cursor: context-menu;">'+
                    T('Account type')+': '+
                    (is_member ? T('Premium') : T('Free'))+'</li>');
                $ul.append('<li><a class="user_link" target="_self" href="'
                    +this.options.my_account_url+'">'+T('My Account')
		    +'</a></li>');
            }
            else if (this.options.login)
                $('<li>').append(this.login_link()).appendTo($ul);
            if (this.options.my_settings)
            {
                $li = $('<li><a class="user_link">'+T('My Settings')
                    +'</a></li>').appendTo($ul);
                $li.find('a').attr('href', this.domain=='luminati.io' ?
                    '//luminati.io/cp/settings' :
                    '//hola.org/access/my/settings');
                if (this.options.version_tooltip)
                    this.options.version_tooltip.append_to($li.find('a'));
            }
            if (this.options.upgrade)
            {
                $ul.append(!is_paid ? '<li><a class="user_link" '
                    +'href="https://hola.org/premium?'
                    +'ref=user_nav">Upgrade</a></li>' : '');
            }
            this.add_lang($ul);
            if (display_name)
            {
                $('<li><a href="?" class="user_link" id=logout_lnk>'
                    +T('Log out')+'</a></li>').click(this.logout)
                .appendTo($ul);
            }
	    this.$el.append($dropdown);
            this.$('.upgrade_to_premium').css('visibility',
                is_member&&is_paid ? 'hidden' : 'visible');
        }
    }
});

var header_nav_button_html = [
    '<svg class="hamburger-top" height="100%" width="100%" ',
    'viewBox="0 0 20 20" style="display:none;">',
        '<path d="M 2.0338983,2.9661012 18.050847,2.8813562" />',
    '</svg>',
    '<svg class="hamburger-middle" height="100%" width="100%" ',
    'viewBox="0 0 20 20" style="display:none;">',
        '<path d="M 2.0338983,10 17.966102,10" />',
    '</svg>',
    '<svg class="hamburger-bottom" height="100%" width="100%" ',
    'viewBox="0 0 20 20" style="display:none;">',
        '<path d="M 2.0338983,17.118644 18.050847,17.033899" />',
    '</svg>'].join('');

// XXX alexeym: need to make this code more simple and more clear
// to make it possible change items order, etc
E.be_user_links = E.user_links.extend({
    tagName: 'div',
    className: 'popup-header-controls-item dropdown',
    initialize: function(options){
        this.options = options||{};
        _.bindAll(this, 'logout');
        this.listenTo(this.model, 'change', this.render);
        this.prot = 'https:';
        this.domain = options.domain||'hola.org';
        if (version_util.version_cmp(be_util.version(), '1.2.672')>=0)
            this.$el.addClass('pull-right');
        this.render();
    },
    logout: function(event){
        var _this = this;
        event.preventDefault();
        return $.ajax({url: this.prot+'//hola.org/users/logout/inline',
            type: 'POST', xhrFields: {withCredentials: true}})
	.done(function(){ _this.model.refresh(); });
    },
    add_lang: function($ul){
        var $a, $li;
        var _this = this;
        if (!this.options.lang_select ||
            version_util.version_cmp(be_util.version(), '1.2.672')<0)
        {
            return;
        }
        $li = $('<li>', {'class':
            'l_menuitem_lang popup-header-menu-item-lang'});
        this.$lang = $a = this.$lang;
        if (!this.$lang)
            this.$lang = $a = $('<a href="#">'+T('Language')+'</a>');
        this.lang_list = this.lang_list||new be_ui_obj.lang_list({label: $a});
        $a.off('click').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            _this.lang_list.toggle();
        }).appendTo($li);
        $ul.append($li);
        $('body').append(this.lang_list.$el);
    },
    update_mode: function(r){
        this.rule_enabled = !!r;
        var is_premium = r && r.md5=='premium';
        if (this.is_premium==is_premium)
            return;
        this.is_premium = is_premium;
        this.render();
    },
    render: function(){
        var item_class = 'popup-header-menu-item';
        var display_name = this.model.get('display_name');
        var is_member = this.model.get('is_member');
        var is_paid = this.model.get('is_paid');
        var is_premium = this.is_premium;
        var $li, $dropdown, _this = this;
        var $ul = $('<ul>', {'class': 'popup-header-menu dropdown-menu',
            id: 'popup_menu'});
        $ul.addClass('popup-header-mp-menu');
        if (display_name)
        {
            $li = $('<li>', {'class': 'disabled '+item_class+'-user'});
            $ul.append($li);
            $li.append($('<span>').text(display_name));
        }
        else if (this.options.login)
        {
            $('<li class="'+item_class+'-user">').append(this.login_link())
            .appendTo($ul);
        }
        this.add_lang($ul);
        $('<li class="'+item_class+'-help">'
            +'<a class="user_link" href="https://hola.org/faq?'
            +'ref=be_user_nav&utm_source=holaext">'
            +T('Help')+'</a></li>')
        .appendTo($ul);
        $li = $('<li><a href="//hola.org/access/my/settings">'+T('Settings')+
            '</a></li>')
        .click(function(e){
            e.preventDefault();
            _this.options.settings_handler();
        }).appendTo($ul);
        if (this.options.version_tooltip)
            this.options.version_tooltip.append_to($li.find('a'));
        if (zopts && zopts.get('developer_mode'))
        {
            $li = $('<li><a>'+T('Media Player Log')+'</a></li>')
            .appendTo($ul);
            $li.click(function(e){
                e.preventDefault();
                if (window.ui_popup && window.ui_popup.be_mp)
                    window.ui_popup.be_mp.ecall('open_mplog');
            }).attr('href', '#');
            $li = $('<li><a>'+T('Erase MP Cache')+'</a></li>')
            .appendTo($ul);
            $li.click(function(e){
                e.preventDefault();
                if (window.ui_popup && window.ui_popup.be_mp)
                    window.ui_popup.be_mp.ecall('clear_mp_cache');
            }).attr('href', '#');
        }
        if (version_util.version_cmp(be_util.version(), '1.2.661')>=0)
        {
            $('<li><a>'+T('About')+'</a></li>').click(function(e){
                e.preventDefault();
                be_util.open_be_tab({url: 'be_about.html'});
            }).appendTo($ul);
        }
        if (false && this.options.upgrade)
        {
            $ul.append(!is_member ? '<li><a class="user_link" '
                +'href="https://hola.org/premium?'
                +'ref=be_user_nav&utm_source=holaext">'+T('Upgrade')
                +'</a></li>' : '');
        }
        this.connection_switch = this.connection_switch ||
            new E.connection_switch({nav: this});
        if (this.rule_enabled)
        {
            this.connection_switch.mode.set('premium', is_premium);
            if (is_premium)
            {
                $('<li><a>'+T(is_premium ? 'Safe' : 'Fast')+'&nbsp;'+T('mode')+
                    '</span></li>')
                .click(function(e){
                    e.stopPropagation();
                    _this.toggle(false);
                    _this.connection_switch.toggle();
                })
                .appendTo($ul);
            }
        }
        if (display_name)
        {
            $('<li><a>'+T('Log out')+'</a></li>').click(this.logout)
            .appendTo($ul);
        }
        if (this.options.render_cb)
            this.options.render_cb.call(this);
        if (this.options.social_sharing)
        {
            $ul.append($('<li>', {'class': 'divider '+
                item_class+'-last'}));
            $('<li>', {'class': item_class+'-social'})
            .append(this.options.social_sharing)
            .append($('<span>'+T('Share')+'</span>'))
            .appendTo($ul);
        }
        $ul.find('li').addClass(item_class);
        this.append_menu($ul);
    },
    toggle: function(visible){
        var _this = this;
        this.$el.toggleClass('open', visible);
        $('.lang_dropdown_toggle').parent().removeClass('open');
        if (this.connection_switch)
            this.connection_switch.hide();
        if (this.$el.hasClass('open'))
        {
            this.$toggle.addClass('hamburger-active');
            $('body').on('click.header-menu', function(e){
                if (!e || !e.target ||
                    !$(e.target).parents('.popup-header-menu').length)
                {
                    _this.$toggle.trigger('click');
                }
            });
        }
        else
        {
            this.$toggle.removeClass('hamburger-active');
            $('body').off('click.header-menu');
        }
    },
    append_menu: function($ul){
        var _this = this;
        this.$toggle = $('<i>', {'class': 'popup-header-controls-button '+
            'popup-header-nav'}).attr('title', T('Menu'))
        .html(header_nav_button_html);
        this.$toggle.off('click').click(function(e){
            e.stopPropagation();
            if (_this.connection_switch && _this.connection_switch.visible)
                _this.connection_switch.hide();
            else
                _this.toggle();
        });
        this.$el.empty().append(this.$toggle, $ul);
        this.$('.user_link').attr('target', '_blank');
    },
    remove: function(){
        $('.l_ui_obj_lang_list').remove();
        if (this.connection_switch)
            this.connection_switch.remove();
        E.user_links.prototype.remove.apply(this);
    }
});

E.new_user_nav = function(opt){
    var user_status = opt.user_status ||
        new E.be_user_status({be_premium: opt.be_premium});
    var be_bg_main = window.popup_main&&window.popup_main.be_bg_main;
    var nav = new E.be_user_links({
        model: user_status,
        bext: true,
        upgrade: opt.upgrade,
        login: opt.login,
        lang_select: true,
        settings_handler: opt.settings_handler,
        social_sharing: opt.social_sharing
    });
    if (be_bg_main)
        nav.listenTo(be_bg_main, 'change:is_svc', nav.render.bind(nav));
    return nav;
};

var tpopup_menu = E.be_user_links.extend({
    initialize: function(options){
        this.options = options||{};
        this.prot = 'https:';
        this.domain = options.domain||'hola.org';
        this.render();
    },
    render: function(){
        var _this = this;
        var $ul = $('<ul>', {'class': 'popup-header-menu dropdown-menu',
            id: 'popup_menu'});
        $ul.addClass('popup-header-mp-menu');
        $ul.append('<li><a class="user_link" '+
            'href="https://hola.org/my_account?utm_source=holatpopup">'+
            T('My Account')+'</a></li>');
        this.add_lang($ul);
        $('<li><a href="//hola.org/access/my/settings">'+T('Library')+
            '</a></li>')
        .click(function(e){
            e.preventDefault();
            _this.options.settings_handler();
        }).appendTo($ul);
        this.append_menu($ul);
    }
});

E.get_tpopup_menu = function(opt){
    return new tpopup_menu({
        lang_select: true,
        settings_handler: opt.settings_handler
    });
};

function be_perr_ok(id){
    if (!be_popup_lib)
        return;
    be_popup_lib.perr_ok({id: id});
}

E.connection_switch = Backbone.View.extend({
    className: 'popup-connection-switch popup-header-menu dropdown-menu '+
        'g-hidden',
    tagName: 'ul',
    initialize: function(opt){
        var _this = this;
        opt = opt||{};
        this.nav = opt.nav;
        this.mode = new Backbone.Model({});
        this.$el.on('click', function(e){ e.stopPropagation(); });
        this.active = 'popup-connection-switch-item-active';
        this.$fast = $('<li>', {'class': 'popup-header-menu-item '+
            'popup-connection-switch-item'})
        .appendTo(this.$el);
        this.$el.append($('<li>', {'class': 'divider'}));
        this.$safe = this.$fast.clone().appendTo(this.$el);
        var fast_text = '<strong>'+T('Fast')+'</strong>&nbsp;'+T('mode');
        this.$fast.append('<div class="popup-connection-switch-item-line">'+
            fast_text+'</div>')
        .append('<div class="popup-connection-switch-item-line '+
            'popup-connection-switch-item-hint">'+
            T('Might not work on all sites')+'</div>');
        var safe_text = '<strong>'+T('Safe')+'</strong>&nbsp;'+T('mode');
        this.$safe.append('<div class="popup-connection-switch-item-line">'+
            safe_text+'</div>')
        .append('<div class="popup-connection-switch-item-line '+
            'popup-connection-switch-item-hint">'+
            T('Works on all sites but slower')+'</div>');
        this.$fast.click(function(){
            var mode = _this.mode.get('premium');
            if (mode)
                be_perr_ok('be_ui_vpn_set_mode_fast');
            _this.mode.set('premium', false);
        });
        this.$safe.click(function(){
            var mode = _this.mode.get('premium');
            if (!mode)
                be_perr_ok('be_ui_vpn_set_mode_safe');
            _this.mode.set('premium', true);
        });
        this.listenTo(this.mode, 'change:premium', this.on_switch);
    },
    set_timeout: function(days){
        this.mode.set('premium_timeout', days);
        if (!this.mode.get('premium'))
            this.mode.set('premium', true);
        else
            this.on_switch();
    },
    toggle: function(visible){
        this.visible = visible===undefined ? !this.visible : visible;
        if (this.visible)
        {
            be_perr_ok('be_ui_vpn_show_switch_'+
                (this.mode.get('premium') ? 'safe' : 'fast'));
            this.show();
        }
        else
            this.hide();
    },
    show: function(){
        this.visible = true;
        this.hide_timer = clearTimeout(this.hide_timer);
        $('body').one('click', this.hide);
        if (this.nav && this.nav.$toggle)
            this.nav.$toggle.addClass('hamburger-active');
        this.$el.removeClass('g-hidden');
    },
    hide: function(){
        this.visible = false;
        if (!this.$el)
            return;
        this.hide_timer = clearTimeout(this.hide_timer);
        $('body').off('click', this.hide);
        if (this.nav && this.nav.$toggle)
            this.nav.$toggle.removeClass('hamburger-active');
        this.$el.addClass('g-hidden');
    },
    on_switch: function(){
        var _this = this;
        this.render();
        this.hide_timer = setTimeout(function(){
            _this.hide();
        }, 1000);
    },
    update_mode: function(r){
        this.rule_enabled = !!r;
        var is_premium = r && r.md5=='premium';
        if (this.is_premium==is_premium)
            return;
        this.mode.set('premium', is_premium);
    },
    render: function(){
        var is_premium = this.mode.get('premium');
        if (is_premium)
        {
            this.$safe.addClass(this.active);
            this.$fast.removeClass(this.active);
        }
        else
        {
            this.$fast.addClass(this.active);
            this.$safe.removeClass(this.active);
        }
        $('body').append(this.$el);
    }
});
return E; });
