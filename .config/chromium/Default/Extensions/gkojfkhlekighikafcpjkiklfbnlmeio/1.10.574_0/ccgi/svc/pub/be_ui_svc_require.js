// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/svc/pub/be_backbone.js', '/util/etask.js',
    '/svc/util.js', '/util/zerr.js', '/svc/pub/be_locale.js',
    '/svc/pub/be_browser.js', '/util/url.js', 'backbone',
    '/svc/pub/be_util.js', '/util/user_agent.js', '/util/escape.js',
    '/svc/pub/be_popup_lib.js'],
    function($, _, be_backbone, etask, svc_util, zerr, T, B, zurl,
    Backbone, be_util, user_agent, zescape, be_popup_lib){
B.assert_popup('be_ui_svc_require');
var chrome = window.chrome;
var animation_time = 300;
var E = new (be_backbone.model.extend({
    _defaults: function(){
        this.$el = $('<div>', {'class': 'be_ui_svc_require'}); },
}))();
var is_tpopup = window.is_tpopup;

// XXX alexeym/michaelg: dummy for svc install popup
var svc_require_view_class = Backbone.View.extend({
    className: 'popup-svc',
    initialize: function(){

    },
    render: function(){

    }
});

// XXX alexeym: merge with be_ui_vpn & move into be_ui_popup_ext
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
    return;
    // XXX alexeym: do we need to show this tpopup always, or only once?
    E.ui_popup.set_dont_show_again({root_url: E.get_root(),
        period: 'session', src: 'x_btn',
        tab_id: window.hola.tpopup_opt.tab_id,
        type: window.hola.tpopup_opt.type});
}

function msg_handler(msg){
    // no origin check, this message triggered for site on-click
    // to close tpopup
    if (msg.data && msg.data.id=='cs_tpopup.hide_anim')
        on_close_button();
}

E.init = function(ui_popup){
    if (E.inited)
        return;
    window.addEventListener('message', msg_handler, false);
    E.on('destroy', function(){
        window.removeEventListener('message', msg_handler, false); });
    E.inited = true;
    E.ui_popup = ui_popup;
    $('body').attr('class', 'tpopup-svc');

};

function init_close_button(){
    $('#tpopup_close').off('click').on('click', on_close_button);
}

function get_root_url(){
    var tpopup_url = window.hola && window.hola.tpopup_opt &&
        window.hola.tpopup_opt.url;
    return svc_util.get_root_url(tpopup_url);
}

function get_tab(){
    return is_tpopup ? window.hola && window.hola.tpopup_opt &&
        window.hola.tpopup_opt.tab_id : E.be_tabs.get('active.id');
}

E.get_url = function(){
    return is_tpopup ? window.hola && window.hola.tpopup_opt &&
        window.hola.tpopup_opt.url : E.be_tabs.get('active.url');
};

E.render = _.debounce(function(){
    return etask([function(){
        E.state = E.enabled;
        if (!E.curr_view)
        {
            E.curr_view = new svc_require_view_class();
            E.$el.empty().append(E.curr_view.$el);
        }
        E.curr_view.render();
        if (is_tpopup)
            init_close_button();
    }, function(){ E.trigger('render_done');
    }, function catch$(err){
        E.set_err('be_ui_svc_require_render_err', err);
        if (is_tpopup)
            parent.postMessage({id: 'tpopup.close'}, '*');
    }]);
});

E.set_err = function(id, err){
    E.set('error', id);
    if (E.ui_popup)
        E.ui_popup.set_err(id, err);
};

return E; });
