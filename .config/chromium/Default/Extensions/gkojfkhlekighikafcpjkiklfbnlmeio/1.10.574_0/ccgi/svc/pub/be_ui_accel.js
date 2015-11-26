// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/svc/pub/be_backbone.js',
    '/svc/pub/be_locale.js', '/svc/pub/be_browser.js', 'backbone',
    '/svc/util.js'],
    function($, _, be_backbone, T, B, Backbone,
    svc_util){
B.assert_popup('be_ui_accel');
var E = new (be_backbone.model.extend({
    _defaults: function(){ this.$el = $('<div>', {class: 'be_ui_accel'}); },
}))();

function msg_handler(msg){
    if (msg.data && msg.data.id=='cs_tpopup.hide_anim' && E.view)
        E.view.close();
}

E.init = function(ui_popup){
    if (E.inited)
        return;
    window.addEventListener('message', msg_handler, false);
    E.on('destroy', function(){
        window.removeEventListener('message', msg_handler, false); });
    E.inited = true;
    E.ui_popup = ui_popup;
    E.be_stream = B.backbone.client.start('be_stream');
    var accel_type = '6' || get_accel_type();
    if (tpopup_accelerator_views[accel_type])
        E.view = new tpopup_accelerator_views[accel_type]();
    else
        E.view = new tpopup_accelerator_views['0']();
};

function get_root_url(){
    var tpopup_url = window.hola && window.hola.tpopup_opt &&
        window.hola.tpopup_opt.url;
    return svc_util.get_root_url(tpopup_url);
}

var tpopup_accelerator_view = Backbone.View.extend({
    text: {
        message: T('$1 Buffering?', [T('Video')]),
        main_button: T('Install Free Hola Accelerator'),
        second_button: T('No, Thanks'),
        third_button: T('I did not experience any buffering'),
        checkbox: T('Never ask me again'),
        download: T('Downloading'),
        poll_header: T('Please help us get better'),
        poll_question: T('Did you experience any buffering?'),
        poll_yes: T('Yes'),
        poll_no: T('No'),
        poll_result: T('Thank you!')
    },
    events: {
        'change .js_yes_checkbox': 'on_yes_button',
        'change .js_no_checkbox': 'on_no_button'
    },
    initialize: function(type){
        this.type = '0';
        parent.postMessage({id: 'tpopup.resize', width: 241, height: 341},
            '*');
        if (window.hola.tpopup_opt && window.hola.tpopup_opt.accel
            && window.hola.tpopup_opt.accel.text)
        {
            _.extend(this.text, window.hola.tpopup_opt.accel.text);
        }
        this.$main = $('<div>', {'class': 'tpopup_main'}).appendTo(this.$el);
        this.$bottom = $('<div>', {'class': 'tpopup_bottom'})
        .appendTo(this.$el);
        this.init_main_block();
        $('#tpopup_close').off('click').click(this.close.bind(this));
        this.$poll = $('<div>', {'class': 'accel_poll'});
        $('<p>', {'class': 'accel_poll_header'}).text(this.text.poll_header)
        .appendTo(this.$poll);
        $('<p>').text(this.text.poll_question).appendTo(this.$poll);
        $('<p>')
        .append(this.make_checkbox(this.text.poll_yes, 'js_yes_checkbox'))
        .append(this.make_checkbox(this.text.poll_no, 'js_no_checkbox'))
        .appendTo(this.$poll);
        this.$poll.appendTo(this.$bottom);
        this.$poll_result = $('<h5>', {'class': 'accel_poll_result'})
        .text(this.text.poll_result).appendTo(this.$bottom);
    },
    make_checkbox: function(label, className){
        return ($('<label>', {'class': 'tpopup_label'})
        .append($('<input>', {'class': 'tpopup_checkbox '+(className||''),
            type: 'checkbox'})).append('<span>'+label+'</span>'));
    },
    render: function(target){
        $('body').addClass('is-popup-accel');
        E.be_stream.ecall('tpopup_cb', [{type: 'display',
            tab_id: window.hola.tpopup_opt.tab_id,
            accel: window.hola.tpopup_opt.accel,
            url: window.hola.tpopup_opt.url, view_type: this.type}]);
        this.$el.appendTo(target);
    },
    close: function(already_fired){
        if (this.closed)
            return;
        this.closed = true;
        if (this.never_show_again())
            this.set_dont_show();
        else
            this.set_dont_show(true);
        $('body').addClass('hide_anim');
        setTimeout(function(){
            parent.postMessage({id: 'tpopup.close'}, '*');
        }, 1000);
        if (already_fired!==true)
        {
            E.be_stream.ecall('tpopup_cb', [{type: 'close',
                tab_id: window.hola.tpopup_opt.tab_id,
                accel: window.hola.tpopup_opt.accel,
                url: window.hola.tpopup_opt.url, view_type: this.type}]);
        }
    },
    never_show_again: function(){
        return this.$el.find('.js_never_checkbox').is(':checked');
    },
    set_dont_show: function(session){
        E.ui_popup.set_dont_show_again({root_url: get_root_url(),
            src: session ? 'x_btn' : 'x_accel_checkbox',
            period: session ? 'session' : 'default',
            tab_id: window.hola.tpopup_opt.tab_id,
            type: window.hola.tpopup_opt.type});
    },
    on_main_button: function(){
        E.be_stream.ecall('tpopup_cb', [{type: 'install',
            tab_id: window.hola.tpopup_opt.tab_id, view_type: this.type}]);
        this.set_dont_show();
        if (window.hola.tpopup_opt && window.hola.tpopup_opt.accel
            && window.hola.tpopup_opt.accel.download)
        {
            var a = document.createElement('a');
            a.href = window.hola.tpopup_opt.accel.download;
            a.target = '_blank';
            a.click();
        }
        this.close(true);
    },
    hide_poll: function(){
        var _this = this;
        this.$poll.fadeOut(200, function(){
            _this.$poll_result.fadeIn(200);
        });
    },
    on_yes_button: function(){
        E.be_stream.ecall('tpopup_cb', [{type: 'poll_yes',
            tab_id: window.hola.tpopup_opt.tab_id, view_type: this.type}]);
        this.hide_poll();
    },
    on_no_button: function(){
        E.be_stream.ecall('tpopup_cb', [{type: 'poll_no',
            tab_id: window.hola.tpopup_opt.tab_id, view_type: this.type}]);
        this.hide_poll();
    }
});

function get_accel_type(){
    var seed = Math.random();
    var views_count = 7;
    var test_view = window.hola.tpopup_opt.accel_type;
    if (test_view || test_view===0)
        return test_view;
    for (var type=1; type<=views_count; type+=1)
    {
        if (seed<type/views_count)
            return ''+(type-1);
    }
}
var tpopup_accelerator_views = {
    '0': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: default one
            this.type = '0';
            $('#tpopup_body').addClass('tpopup_accel');
            this.$main.append('<h4>'+this.text.message+'</h4>');
            $('<span>', {'class': 'download-button'})
            .text(this.text.main_button)
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
            this.make_checkbox(this.text.checkbox, 'js_never_checkbox')
            .appendTo(this.$main);
        }
    }),
    '1': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: 01.psd
            this.type = '1';
            $('#tpopup_body').addClass('tpopup_accel tpopup_accel_1');
            this.$main.append($('<div>', {'class': 'buffering_block'}));
            this.$main.append('<h4>'+T('Buffering problems?')+'</h4>');
            this.$main.append($('<div>', {'class': 'tpopup_button_title'})
                .text(T('Install')));
            $('<span>', {'class': 'download-button'})
            .text(T('Hola Accelerator'))
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
        }
    }),
    '2': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: 02.psd
            this.type = '2';
            $('#tpopup_body').addClass('tpopup_accel tpopup_accel_2');
            this.$main.append('<h4>'+T('Video stuck?')+'</h4>');
            this.$main.append($('<div>', {'class': 'tpopup_button_title'})
                .text(T('Blast off with')));
            $('<span>', {'class': 'download-button'})
            .text(T('Hola Accelerator'))
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
        }
    }),
    '3': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: 03.psd
            this.type = '3';
            $('#tpopup_body').addClass('tpopup_accel tpopup_accel_3');
            this.$main.append($('<div>', {'class': 'buffering_block'}));
            this.$main.append($('<div>', {'class': 'tpopup_button_title'})
                .text(T('Solve buffering')));
            $('<span>', {'class': 'download-button'})
            .text(T('Hola Accelerator'))
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
        }
    }),
    '4': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: 04.psd
            this.type = '4';
            $('#tpopup_body').addClass('tpopup_accel tpopup_accel_4');
            this.$main.append('<h4>'+T('Buffering?')+'</h4>');
            $('<span>', {'class': 'download-button'})
            .text(T('Hola Accelerator'))
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
            this.$main.append($('<div>', {'class': 'tpopup_button_title'})
                .text(T('Solves it')));
        }
    }),
    '5': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: 05.psd
            this.type = '5';
            $('#tpopup_body').addClass('tpopup_accel tpopup_accel_5');
            this.$main.append('<h4>'+T('Using Hola')+
                '<span class="tpopup-title-small">'+T('Unblocker?')+
                '</span></h4>');
            this.$main.append($('<div>', {'class': 'tpopup_button_title'})
                .text(T('Solve buffering problems with')));
            $('<span>', {'class': 'download-button'})
            .text(T('Hola Accelerator'))
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
        }
    }),
    '6': tpopup_accelerator_view.extend({
        init_main_block: function(){
            // XXX alexeym: 06.psd
            this.type = '6';
            $('#tpopup_body').addClass('tpopup_accel_6');
            this.$main.append('<h4>'+T('Click to solve buffering')+'</h4>');
            $('<div>', {'class': 'icon_arrow'}).appendTo(this.$main);
            $('<span>', {'class': 'download-button'})
            .click(this.on_main_button.bind(this)).appendTo(this.$main);
            this.$main.append($('<div>', {'class': 'tpopup_button_title'})
                .text(T('Install Accelerator')));
        }
    })
};
return E; });
