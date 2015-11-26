// LICENSE_CODE ZON
'use strict'; /*jslint browser:true*/
(function(){
var deps = ['jquery', 'backbone', '/util/escape.js', '/util/url.js',
    'typeahead', '/util/user_agent.js', 'underscore', '/util/etask.js'];
if (window.is_popup)
    deps.push('/svc/pub/be_locale.js');
else
{
    deps.push('/www/util/pub/localize.js', '/www/hola/pub/be.js',
        '/www/hola/pub/ui.js');
}
define(deps, function($, Backbone, zescape, zurl, typeahead, user_agent, _,
    etask, T, be, ui){
var E = new Backbone.Model();
var $html = $('html');
/* XXX alexeym: this came from typeahead plugin */
var Bloodhound = window.Bloodhound.noConflict();
var popular_sites = [];
if (be)
    be.on('change:unblocking_rate', function(){
        var unblocking_rate = be.get('unblocking_rate');
        popular_sites = unblocking_rate.map(function(a){ return a.root_url; });
    });

function suggest_html(s){
    // XXX arik/mark hack: someone is adding white-space: normal to style of
    // p. need to rm the white-space from span and from p
    return '<p><span style="white-space: nowrap;">'
    // XXX alexeym: need to make some API for getting favicons.
    // Google's one not so good
    +'<span class="ui_favicon"><img class="ui_favicon" src="'
    +(window.is_popup ? 'http:' : window.location.protocol || '')
    +'//'+s+'/favicon.ico" onerror="this.style.display=\'none\'"></span> '
    +zescape.html(s)+'</span></p>';
}

function suggest_remote(country){
    return '/access/autocomplete?src_country='
	+(country||'cn')+'&search=%QUERY';
}
var www_check = /^www\./i;
function get_domain(s){
    if (/^https?:/.test(s))
	s = zurl.get_host(s);
    return s.replace(www_check, '');
}

function redir(s){ location.href = '/access/'+(s.value||s)+'?go=1'; }

function send_ga_event(){ /*jslint -W021*/
    if (window.ga)
        window.ga('send', 'event', 'Search (unblock pages)', 'Active',
            {'nonInteraction': 1});
    send_ga_event = $.noop;
}

function queryTokenizer(query){
    var tokens = [query];
    var without_www = query.replace(www_check, '');
    if (without_www != query)
        tokens.push(without_www);
    return tokens;
}

E.search = Backbone.View.extend({
    tagName: 'form',
    className: 'unblock-search navbar-form navbar-left',
    events: {
        'keyup .tt-input': 'on_keyup',
        'keypress .tt-input': 'on_keypress',
        'focus .tt-input': 'on_focus',
        'blur .tt-input': 'on_blur',
        'click .tt-input': 'input_select'
    },
    on_select_default: function(s){
        var domain = get_domain(s);
        if (this.show_modal(domain))
            return;
        redir(zurl.is_valid_url(s) && zurl.is_valid_domain(domain) ?
            domain : 'search?'+zescape.qs({q: s}));
    },
    default_validator: function(s){
        s = zurl.get_host_gently(s);
        return zurl.is_valid_domain(s) && !zurl.is_hola_domain(s);
    },
    initialize: function(opt){
        this.on_select = opt.on_select||this.on_select_default;
        var _this = this;
        var country = opt.country;
        this.country_select = opt.country_select;
        var settings = this.settings = opt.settings||{};
        settings.placeholder = settings.placeholder||T('Enter site to access');
        settings.validationError = settings.validationError||
            T('Please enter a web site address, like facebook.com');
        this.validator = settings.validator||this.default_validator;
        if (settings.typeahead === undefined)
            settings.typeahead = true;
        settings.country = country;
        if (settings.show_modal === undefined)
        {
            var browser = user_agent.guess_browser().browser;
            settings.show_modal = !window.is_popup &&
                user_agent.guess().os!='android' &&
                (browser=='chrome' || browser=='firefox' || browser=='ie');
        }
        if (settings.show_modal)
            be.init();
        var $search_form = this.$el;
        if (settings.typeahead)
        {
            var suggest = this.suggest = new Bloodhound({
                name: 'hosts',
                limit: 9,
                local: popular_sites,
                remote: settings.suggest_remote||suggest_remote(country),
                datumTokenizer: function(d){ return [d]; },
                queryTokenizer: queryTokenizer});
            suggest.initialize();
        }
        $search_form.attr('role', 'search');
        var $container = $('<div>', {'class': 'form-group'});
        this.$input = $(settings.inputTag||'<input>',
            {'class': 'form-control search auto', required: ''})
        .attr('placeholder', settings.placeholder).appendTo($container);
        this.$error = $('<span class="validation-error">'
            +settings.validationError+'</span>').appendTo($search_form);
        $container.appendTo($search_form);
    },
    render: function(parent){
        var _this = this;
        this.$el.appendTo(parent);
        // XXX alexeym: hack for cases if typeahead isn't exists, or we can
        // diable it from settings
        if (!this.$input.typeahead || !this.settings.typeahead)
        {
            this.$input.addClass('tt-input')
            .wrap($('<span>', {'class': 'twitter-typeahead'}));
            return void this.on_render();
        }
        this.$input.typeahead({
	    hint: this.settings.hint === undefined ? true : this.settings.hint,
	    minLength: this.settings.keep_placeholder ? 1 : 0},
            {templates: {suggestion: suggest_html},
            source: function(query, cb){
                var lower_case_query = $.trim(query.toLowerCase());
                if (!lower_case_query ||
                    !lower_case_query.replace(www_check, ''))
                {
                    cb(popular_sites);
                }
                else
                    return _this.suggest.get(lower_case_query, cb);
            },
            displayKey: function(value){ return value; }})
        .on('typeahead:selected', function(event, s){ _this.on_search(s); });
        this.on_render();
    },
    on_render: function(){
        this.$typeahead = this.$el.find('.twitter-typeahead')
        .addClass('popup-search-box');
        this.$hint = this.$typeahead.find('.tt-hint');
        if (this.settings.auto_focus)
        {
            this.$input.focus();
            setTimeout(this.on_focus.bind(this), 500);
        }
    },
    on_search: function(url){
        url = url.toLowerCase();
        if (this.validator(url))
            this.on_select(url);
        else
            this.error();
    },
    on_keyup: function(event){
        this.$el[this.$input.val() ? 'addClass' : 'removeClass']('dirty'); },
    on_keypress: function(event){
        if (event.which==0xd)
        {
            event.preventDefault();
            this.select();
        }
        send_ga_event();
    },
    select: function(){
        var s = $.trim(this.$hint.val()) || $.trim(this.$input.val());
        this.on_search(s);
    },
    on_focus: function(event){
        if (!this.settings.keep_placeholder)
            this.$input.attr('placeholder', '');
        if (this.$typeahead)
            this.$typeahead.addClass('js-search-active');
        // XXX alexeym: hack until merge typeahead #719 pull request
        // https://github.com/twitter/typeahead.js/pull/719
        if (!this.$input.val())
        {
            var ev = $.Event('keydown');
            ev.keycode = ev.which = 40;
            this.$input.trigger(ev);
        }
        this.trigger('focus');
        var _this = this;
        setTimeout(function(){ _this.$input.select(); }, 0);
    },
    input_select: function(){
        this.$input.select();
    },
    on_blur: function(event){
        if (this.$typeahead)
            this.$typeahead.removeClass('js-search-active');
        this.$input.attr('placeholder', this.settings.placeholder);
        this.trigger('blur');
    },
    show_modal: function(domain){
        if (this.settings.show_modal)
        {
            var country = this.country_select ? this.country_select.country :
                this.settings.country;
            this.modal = (new ui.sitepic_install_modal({root_url: domain,
                country: country}));
            this.modal.show();
            return true;
        }
    },
    error: function(){
        var _this = this;
        var inputErrorClass = 'js-validation-error';
        this.$input.addClass(inputErrorClass);
        this.$error.fadeIn();
        clearTimeout(this.timer);
        this.timer = setTimeout(function(){
            _this.$input.removeClass(inputErrorClass);
            _this.$error.fadeOut();
        }, 3000);
    }
});

E.filter = Backbone.View.extend({
    tagName: 'form',
    className: 'nodes-filter',
    events: {
        'keyup .nodes-filter-input': 'on_keyup',
        'keydown .nodes-filter-input': 'on_keydown',
        'focus .nodes-filter-input': 'on_focus',
        'blur .nodes-filter-input': 'on_blur'
    },
    initialize: function(opt){
        opt = opt||{};
        this.index = new search_index();
        this.nodes = [];
        this.$empty = opt.empty_node;
        if (this.$empty)
            this.$empty.addClass('nodes-filter-item-first');
        this.text_selector = opt.selector||null;
        this.dont_move_title = opt.dont_move_title||false;
        this.$container = $('<span>', {'class': 'popup-search-box'});
        this.$input = $('<input>', {'class': 'nodes-filter-input',
            placeholder: opt.placeholder})
        .appendTo(this.$container);
        this.$container.append($('<span>', {'class': 'popup-search-trigger'}));
        this.$container.appendTo(this.$el);
        this.empty_text = '$1 not found';
    },
    render: function(){
        this.$input.focus();
    },
    update: _.debounce(function(options){
        var _this = this;
        options = options||{};
        var list = this.list = options ? options.results : null;
        var search_text = options ? options.text : '';
        var selector = this.text_selector;
        var dont_move_title = this.dont_move_title;
        var on_hover = _.debounce(function(){
            _this.on_hover(this); });
        var on_leave = this.on_leave.bind(this);
        var $nodes = $(this.nodes)
        .off('mouseenter.filter mouseleave.filter').on({
            'mouseenter.filter': on_hover, 'mouseleave.filter': on_leave});
        if (this.$empty)
            this.$empty.detach();
        $nodes.removeClass('nodes-filter-item-first');
        if (list)
        {
            $nodes.addClass('g-hidden');
            var $list = $(list);
            $list.removeClass('g-hidden');
            if (selector)
            {
                search_text = search_text.replace(/\/:.$@&?\s_\-(){}[\]]/g,
                    '');
                var match = new RegExp(search_text, 'i');
                $list.each(function(index){
                    var $this = $(this);
                    if (index===0)
                        $this.addClass('nodes-filter-item-first');
                    var $text = $(selector, this);
                    var text = $text.data('filter_text')||$text.text();
                    $text.data('filter_text', text);
                    var term = text.match(match);
                    if (!term || !term[0])
                        return;
                    term = term[0];
                    text = text.split(match);
                    var result = text.join('<span class="nodes-filter-'+
                        'match">'+term+'</span>');
                    $text.html(result).addClass('nodes-filter-matched');
                    if (dont_move_title)
                        return;
                    var $match = $('.nodes-filter-match', $text);
                    var pos = $match.position();
                    pos = pos && pos.left;
                    if (!pos)
                        return;
                    var width = $match.width()+40;
                    var item_width = $this.width();
                    pos = Math.max(0, (pos-item_width+width));
                    $text.css({'left': -pos});
                });
                search_text = options.text;
                if (search_text.length>25)
                    search_text = search_text.slice(0, 25)+'...';
                search_text = '<span class="nodes-filter-match">'+search_text+
                    '</span>';
                $(selector, this.$empty).html(T(this.empty_text,
                    [search_text]));
            }
            if (list.length)
                return void _this.on_hover(list[0]);
            if (this.$empty)
            {
                $nodes.parent().append(this.$empty);
                _this.on_hover();
            }
            return;
        }
        if (selector)
        {
            $nodes.each(function(){
                var $this = selector ? $(selector, this) : $(this);
                var text = $this.data('filter_text');
                $this.removeClass('nodes-filter-matched').css('left', 0);
                if (text)
                    $this.html(text);
            });
        }
        this.on_hover();
        $nodes.removeClass('g-hidden');
    }),
    clear: function(){
        this.index.clear();
        if (this.nodes && this.nodes.length)
        {
            $(this.nodes).removeClass('g-hidden');
            this.nodes = [];
        }
    },
    add: function(opt){
        this.index.add(opt.text, opt.node);
        this.nodes.push(opt.node);
        this.update();
    },
    on_focus: function(){
        this.active = true;
        this.$container.addClass('js-search-active');
        this.trigger('focus');
    },
    on_blur: function(){
        this.active = false;
        this.$container.removeClass('js-search-active');
        this.trigger('blur');
    },
    on_keydown: function(e){
        var _this = this;
        switch (e.which)
        {
        case 0xd:
            e.preventDefault();
            break;
        case 38:
        case 40:
            e.preventDefault();
            var key = e.which;
            var list = this.list||this.nodes;
            var l = list && list.length;
            var shift = key==38 ? -1 : 1;
            var index;
            if (this.selected)
                index = list.indexOf(this.selected);
            else if (key==38)
                index = l;
            else
                index = -1;
            index += shift;
            if (index<0)
                index = l-1;
            else if (index>l-1)
                index = 0;
            this.on_hover(list[index]);
            break;
        }
    },
    on_keyup: _.debounce(function(e){
        switch (e.which)
        {
        case 0xd:
            e.preventDefault();
            this.select();
            return;
        case 27:
            e.preventDefault();
            this.$input.val('');
            break;
        case 37:
        case 38:
        case 39:
        case 40:
            e.preventDefault();
            return;
        }
        var text = $.trim(this.$input.val());
        if (text)
            this.update({results: this.index.find(text), text: text});
        else
            this.update();
    }, 100),
    on_hover: function(node){
        if (this.selected)
            $(this.selected).removeClass('nodes-filter-selected');
        if (node && (this.list==null || this.list.length))
        {
            this.selected = node;
            $(this.selected).addClass('nodes-filter-selected');
            this.scroll_to(node);
        }
        else
            this.selected = null;
    },
    on_leave: function(){
        if (this.selected)
            $(this.selected).removeClass('nodes-filter-selected');
    },
    scroll_to: function(node){
        var $node = $(node);
        var $holder = $node.parents('.nodes-filter-holder');
        if (!$node.length || !$holder.length)
            return;
        var pos = $node.position().top||0;
        var scroll_pos = $holder.scrollTop();
        pos = pos+scroll_pos;
        var holder_height = $holder.height();
        var height = $node.outerHeight();
        if (pos>scroll_pos && pos+height<scroll_pos+holder_height)
            return;
        if (pos<scroll_pos)
            $holder.scrollTop(pos);
        else
            $holder.scrollTop(pos+height-holder_height);
    },
    select: function(){
        if (this.selected)
        {
            var link_selector = '.nodes-filter-link';
            var link = $(this.selected).find(link_selector)
                .addBack(link_selector)[0];
            if (link)
                link.click();
        }
    }
});

var search_index = function(){
    this.index = {};
    this.nodes = [];
};

search_index.prototype.process_text = function(text, need_cut){
    text = text.toLowerCase().replace(/[\/:.$@&?\s_\-(){}[\]]/g, '');
    // XXX alexeym: hack, need to use better fuzzy-search algorithm
    if (need_cut && text.length > 50)
        text = text.substr(0, 50);
    return text.split('');
};

search_index.prototype.update = function(text, item){
    if (!text)
        return;
    text = this.process_text(text, true);
    function add_level(level, text_array){
        var val = text_array.shift(0);
        if (level[val])
        {
            if (level[val].nodes.indexOf(item)==-1)
                level[val].nodes.push(item);
        }
        else
            level[val] = {nodes: [item]};
        if (text_array.length>0)
            add_level(level[val], text_array);
    }
    for (var i=0; i<text.length; i+=1)
        add_level(this.index, text.slice(i));
};

search_index.prototype.find = function(text){
    // XXX alexeym: need to update match hightlight:
    // add support for multiple .nodes-filter-match
    var allow_multiple_terms = false;
    if (!text)
        return [];
    function find_result(index, str){
        var result, val = str.shift(0);
        result = index[val];
        if (result && result.nodes)
        {
            result = result.nodes || [];
            if (!str.length || !result)
                return result;
            return find_result(index[val], str);
        }
        return [];
    }
    var results = [];
    var _this = this;
    if (allow_multiple_terms)
        text = text.split(/\s/);
    else
        text = [text];
    text.forEach(function(text){
        text = _this.process_text(text);
        if (text)
            results.push(find_result(_this.index, text));
    });
    if (results.length>1)
        results = _.intersection.apply(_, results);
    else
        results = results[0];
    return results;
};

search_index.prototype.add = function(text, item){
    this.update(text, item);
};

search_index.prototype.clear = function(){
    this.index = {};
};

return E;
});
}());
