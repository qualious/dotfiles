// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', 'backbone', 'spin', '/svc/pub/be_popup_lib.js',
    '/svc/pub/be_locale.js', '/svc/pub/be_browser.js', '/util/zerr.js',
    '/util/storage.js', 'bootstrap'],
    function($, _, Backbone, spin, be_popup_lib, T, B, zerr, storage){
B.assert_popup('be_ui_obj');
var chrome = window.chrome;
var E = {};

/* XXX arik: need be_view that will auto-destroy view when removed from dom
 * and clear timers */
/* XXX arik: fix all css/id styles */

E.spin_view = Backbone.View.extend({
    className: 'ui_obj_spin',
    initialize: function(options){
	options = options||{};
	var _this = this;
	var length = options.length===undefined ? 3 : options.length;
	var width = options.width===undefined ? 3 :  options.width;
	var radius = options.radius===undefined ? 4 : options.radius;
        var corners = options.corners===undefined ? 1 : options.corners;
	var opts = {
	    className: _this.className+'_spinner',
	    lines: 8, /* the number of lines to draw */
	    length: length, /* the length of each line */
	    width: width, /* the line thickness */
	    radius: radius, /* the radius of the inner circle */
	    corners: corners, /* corner roundness (0..1) */
	    rotate: 0, /* the rotation offset */
	    color: '#777', /* #rgb or #rrggbb */
	    speed: 2, /* rounds per second */
	    trail: 60, /* afterglow percentage */
	    shadow: false, /* whether to render a shadow */
	    hwaccel: false, /* whether to use hardware acceleration */
	    zIndex: 2e9, /* the z-index (defaults to 2000000000) */
	    top: 'auto', /* top position relative to parent in px */
	    left: 'auto' /* left position relative to parent in px */
	};
	new spin(opts).spin(_this.el);
    },
});

E.err_view = Backbone.View.extend({
    className: 'popup-error',
    initialize: function(opt){
        opt = opt||{};
        $('body').addClass('is-popup-error');
        var title = opt.title || T('Hola is not available right now, but '+
            'we are working on it.');
        var text = opt.text || ['<ol class="popup-error-list">',
                '<li class="popup-error-list-item">',
                    '<a href="#" class="popup-error-reload">',
                        T('Reload Hola'),
                    '</a>',
                '</li>',
                '<li class="popup-error-list-item">',
                    T('Check your Internet connection'),
                '</li>',
                '<li class="popup-error-list-item">',
                    T('Talk to us on $1',
                        ['<strong>Skype: hola.support</strong>']),
                '</li>',
            '</ol>'].join('');
        this.$el.html([
            '<h2 class="popup-title popup-error-title">',
                title,
            '</h2>',
            '<div class="popup-error-text">', text, '</div>'
        ].join(''));
        this.$('.popup-error-reload').click(function(e){
            e.stopPropagation();
            e.preventDefault();
            be_popup_lib.reload_ext({info: 'error'});
        });
    }
});

/* XXX arik: rm _class (and simplify css) */
function $err_msg(_class){
    var $div;
    $div = (new E.err_view()).$el;
    setTimeout(function(){
	if (!$div.parents('body')[0])
	    return;
        var devtools_is_open = false;
        function make_ext_reload(){
            if (devtools_is_open)
            {
                window.console.log('Ext auto-reload suppressed because of '+
                    'console opened');
                return;
            }
            be_popup_lib.reload_ext({info: 'auto_reload'});
        }
        if (window.chrome && window.chrome.tabs && window.chrome.tabs.query)
        {
            window.chrome.tabs.query({url: 'chrome-devtools://*/*',
                title: '*chrome-extension*'},
                function(tabs){
                    if (tabs.length > 0)
                        devtools_is_open = true;
                    make_ext_reload();
                });
        }
        else
            make_ext_reload();
    }, 10000);
    if (B.have['runtime.request_update_check'])
    {
        B.runtime.request_update_check(function(status){
            zerr.notice('update check: '+status); });
    }
    return $div;
}

/* XXX arik: need something similar for manual reload perr and send
 * perr on success if there was popup error before.
 * delete info on update and send perr on first success */
function init_err_info(){
    var s ='';
    storage.set('ui_popup_init_err',
	storage.get_int('ui_popup_init_err')+1);
    if (!storage.get_int('ui_popup_inited'))
	s += ' never';
    if (storage.get_int('ui_popup_init_err')>1)
	s += ' errors '+storage.get_int('ui_popup_init_err');
    if (storage.get_int('ajax_timeout'))
	s += ' timeout '+storage.get_int('ajax_timeout');
    return s ? 'popup'+s : '';
}

E.init_view = Backbone.View.extend({
    className: 'ui_obj_init',
    initialize: function(options){
        this.options = options;
	var _this = this;
	this.$spin = $('<span>', {style: 'position: relative; display: '
	+'inline-block; width: 20px; height: 20px; top: 13px; left: 5px;'});
	this.$msg = $('<span>').text(this.options.text||T('Initializing...'));
	this.$el.append(this.$spin, this.$msg);
        this.$spin.append((new E.spin_view()).$el);
        var timeout = 10000;
	// XXX arik: fine-tune timers
        // XXX bahaa: temp increase timeout
        if (1 || this.options.pure_connection)
            timeout = 20000;
	setTimeout(function(){
	    if (!this.$el.parents('body')[0])
	        return;
	    this.$error = $err_msg(this.className);
	    this.$el.append(this.$error);
            this.$spin.hide();
            this.$msg.hide();
	    be_popup_lib.perr_err({id: 'be_ui_obj_init_err',
                filehead: zerr.log_tail(), info: init_err_info()});
	}.bind(this), timeout);
	if (this.options.show_after)
	{
	    this.$el.hide();
	    setTimeout(function(){ this.$el.fadeIn(1000); }.bind(this),
		this.options.show_after);
	}
    },
});

E.error_view = Backbone.View.extend({
    className: 'ui_obj_error',
    initialize: function(){
	var _this = this;
	this.$error = $err_msg(this.className);
	this.$el.append(this.$error);
        be_popup_lib.perr_err({id: 'be_ui_obj_error_view',
            filehead: zerr.log_tail(), info: init_err_info()});
    },
});

E.changing_view = Backbone.View.extend({
    className: 'ui_obj_busy',
    initialize: function(options){
        this.options = options;
	var $el = this.$el;
	var changing = this.options.changing || {src: '', dst: ''};
	/* XXX arik: normalize country usage (default should be all capital) */
	var src = changing ? changing.src.toUpperCase() : '';
	var dst = changing ? changing.dst.toUpperCase() : '';
	var $spinner = $('<div>', {class: 'r_ui_spinner'});
	var $div = $('<div>', {class: 'r_ui_in_progress'}).appendTo($el)
	.append($spinner)
	.append($('<span>').text(src && dst ? T('changing...') :
	    T('Initializing...')));
        $spinner.append((new E.spin_view()).$el);
	if (src && dst)
	{
            var rtl = T.is_rtl(), arrow = rtl ? ' &larr; ' : ' &rarr; ';
	    var $countries = $('<div>', {class: 'r_ui_in_progress f32'})
            .appendTo($el)
	    .append($('<span>', {class: 'flag '+src.toLowerCase()}),
		$('<span>').text(' '+T(src)),
		$('<span>', {class: 'arrow'}).html(arrow),
		$('<span>', {class: 'flag '+dst.toLowerCase()}),
		$('<span>').text(' '+T(dst)));
            if (rtl)
                $countries.addClass('rtl');
	}
	if (this.options.reload)
	{
            this.timer = setTimeout(function(){
		var $reload = $('<div>', {class: 'r_ui_obj_reload'})
		.text(T('Reload'))
		.click(function(e){ be_popup_lib.reload_ext({
		    info: 'changing'}); });
		$el.append($reload);
	    }, this.options.reload);
	}
    },
});

E.error_message = Backbone.View.extend({
    className: 'ui_obj_error_message',
    set_msg: function($msg){
	this.$el.empty().append($msg);
	return this;
    },
});

/* XXX arik/mark: need to use bootstrap popup */
E.tooltip = Backbone.View.extend({
    className: 'ui_obj_tooltip',
    initialize: function(options){
	var opt = this.options = options||{};
	this.hide();
	this.delay = opt.delay||250;
	this.$el.click(function(e){ e.stopPropagation(); });
	if (opt.$parent)
            this.append_to(opt.$parent);
        if (opt.$content)
            this.$el.append(opt.$content);
    },
    append_to: function($parent){
	$parent.append(this.$el);
	$parent.mouseenter(function(){ this.mouseenter(); }.bind(this))
	.mouseleave(function(){ this.mouseleave(); }.bind(this));
    },
    mouseenter: function(){
	clearTimeout(this.timer);
        this.timer = setTimeout(function(){ this.show(); }.bind(this),
	    this.delay);
    },
    mouseleave: function(){
	clearTimeout(this.timer);
        this.timer = setTimeout(function(){ this.hide(); }.bind(this));
    },
    hide: function(){
	this.timer = clearTimeout(this.timer);
	this.trigger('hide');
	this.$el.hide(); },
    show: function(){
	this.timer = clearTimeout(this.timer);
	this.trigger('show');
	this.$el.show();
    },
});

E.select = Backbone.View.extend({
    className: 'ui_obj_select',
    initialize: function(options){
        this.options = options;
	var $el = this.$el;
	var lr = this.options.local_css ? 'l_' : 'r_';
	$el.addClass('btn-group '+lr+'btn-group');
	if (this.options.dropup)
            $el.addClass('dropup');
	this.$btn = $('<div>', {class: 'btn '+lr+'btn-trans dropdown-toggle',
	    'data-toggle': 'dropdown'}).appendTo($el);
	this.$val = $('<span>').appendTo(this.$btn);
	$('<span>', {class: 'caret'}).appendTo(this.$btn);
	this.$ul = $('<ul>', {class: 'dropdown-menu'}).appendTo($el);
	if (this.options.pull_right)
	    this.$ul.addClass('pull-right');
        if (!chrome) // XXX arik BACKWARD: force resize of popup on firefox
	    $el.click(function(){ window.popup_main.resize(100); });
    },
    add_item: function($item, val){
	$('<li>').appendTo(this.$ul).append($item).prop('val', val)
	.click(function(){
	    this.curr_val = val;
	    this.redraw();
	    this.trigger('select:change', val);
	}.bind(this));
    },
    redraw: function(){
	var $items = this.$ul.children('li');
	for (var i=0; i<$items.length; i++)
	{
	    var $i = $($items[i]);
	    if ($i.prop('val')!=this.curr_val)
		continue;
	    this.set_label($i.children().clone());
	    break;
	}
    },
    set_label: function($l){ this.$val.empty().append($l); },
    val: function(val){
	if (val===undefined)
            return this.curr_val;
        this.curr_val = val;
	this.redraw();
    },
});

E.modal_select = Backbone.View.extend({
    className: 'ui_obj_modal_select dropdown',
    template: '\
<button class="dropdown-toggle lang_dropdown_toggle" data-toggle="dropdown" style="display: none;"></button>\
<ul class="dropdown-menu l_lang_dropdown_menu" role="menu" aria-labelledby="dLabel"></ul>',
    initialize: function(options){
        this.$el.html(this.template);
	this.$ul = this.$('.dropdown-menu');
        this.options = options;
    },
    add_item: function($item, val){
	$('<li>').appendTo(this.$ul).append($item).prop('val', val)
	.click(function(){
	    this.curr_val = val;
	    this.redraw();
	    this.trigger('select:change', val);
	}.bind(this));
    },
    redraw: function(){
	var $items = this.$ul.children('li'), i;
	for (i = 0; i<$items.length; i++)
	{
	    var $i = $($items[i]);
	    if ($i.prop('val')!=this.curr_val)
		continue;
	    this.set_label($i.children().clone());
	    break;
	}
    },
    set_label: function($l){
        var text = $l.text();
        var code = '';
        text = text.split(' ');
        if (text[0].length<7)
            code = text.shift();
        text = text.join(' ');
        var $code = ('<span class="lang_dropdown_code">'+code+'</span>');
        this.options.label.empty().append(text, $code);
    },
    val: function(val){
	if (val===undefined)
            return this.curr_val;
        this.curr_val = val;
	this.redraw();
    },
});

E.lang_list = Backbone.View.extend({
    className: 'l_ui_obj_lang_list',
    initialize: function(options){
	var $el = this.$el, _this = this;
	if (T.locales.length==1)
	    return;
	var select = new E.modal_select(_.extend({local_css: true}, options));
        this.select = select;
        this.$dropdown = select.$el.find('.lang_dropdown_toggle');
	select.$el.appendTo($el);
	select.val(T.locale);
	select.on('select:change', function(){
	    this.lang_timer = clearTimeout(this.lang_timer);
	    if (select.val()==T.locale)
		return;
	    if (select.val()=='more')
	    {
		select.val(T.locale);
		B.tabs.create({url: 'https://hola.org/translate'
                    +'?utm_source=holaext#more'});
		return;
	    }
	    var new_locale = select.val();
	    be_popup_lib.perr_ok({id: 'be_popup_lang', info: new_locale,
		rate_limit: {count: 20}});
	    this.lang_timer = setTimeout(function(){
                storage.set('locale', new_locale);
		window.location.reload();
	    }, 50);
	}.bind(this));
        function render_country_list(){ _this.render_list(); }
        var dropdown_menu = this.$dropdown.find('.dropdown-menu');
        dropdown_menu.one('show.bs.dropdown', function(){
            render_country_list(); });
        setTimeout(function(){
            render_country_list(); }, 500);
    },
    toggle: function(){ this.$dropdown.dropdown('toggle'); },
    render_list: function(){
        if (this.rendered)
            return;
        this.rendered = true;
        var select = this.select;
        select.add_item($('<a>', {text: T('locale_en_en')+' '}), 'en');
        for (var i=0; i<T.locales.length; i++)
        {
            var l = T.locales[i];
            select.add_item($('<a>', {text: T('locale_en_'+l)+' '}), l);
        }
        select.add_item($('<a>', {text: T('More...', null, 'en')}), 'more');
        select.redraw();
    }
});

// XXX arik/alexeym: unite www/hola/pub/ui.js and svc/pub/be_ui_obj.js
E.lock_glyph = Backbone.View.extend({
    tagName: 'span',
    className: 'ui_sitepic_lock',
    initialize: function(options){
        if (options && options.visible)
            this.$el.addClass('ui_sitepic_lock_visible');
        this.render();
    },
    render: function(){
        $('<span>', {'class': 'ui_sitepic_lock_body'}).appendTo(this.$el);
        $('<span>', {'class': 'ui_sitepic_lock_arm'}).appendTo(this.$el);
    }
});

return E; });
