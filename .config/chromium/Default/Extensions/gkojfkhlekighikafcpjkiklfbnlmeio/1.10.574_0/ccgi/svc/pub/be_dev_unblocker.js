// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/js/jquery.min.js', '/js/util/url.js'], function($, zurl){
$ = $||window.jQuery;
var chrome = window.chrome;
var E = {events: [], selected: undefined, show_hola: false};
E.fetch_headers = function(id, cb){
    chrome.extension.sendMessage({get_trace: id}, function(response){
        cb(response); });
};

function build_trace_string(req_id, trace){
    return 'reqid '+req_id+': '+trace.join(', ');
}

function is_hola(url){
    var domain = zurl.parse(url);
    domain = domain && domain.hostname;
    if (!domain)
        return;
    return zurl.is_hola_domain(domain);
}

E.draw_url = function(req, data){
    if (!E.events.length)
        E.$events.empty();
    var $e = $('<div class="event event-'+req.req_id+'"></div>')
    .data('reqid', req.req_id)
    .html('<h4 class="event-url">'+req.url+'</h4>'+
        '<div class="event-body">'+build_trace_string(req.req_id, data)+
        '</div>')
    .appendTo(E.$events);
    if (E.selected && req.req_id!=E.selected)
        $e.addClass('event-blur');
    if (is_hola(req.url))
    {
        $e.addClass('event-hola');
        if (!E.show_hola)
            $e.hide();
    }
    E.events.push({$node: $e, url: req.url});
};

E.highlight = function(req_id){
    if (req_id && E.selected==req_id)
        return E.highlight(false);
    E.selected = req_id;
    if (req_id)
    {
        E.$events.find('.event').addClass('event-blur');
        E.$events.find('.event-'+req_id).removeClass('event-blur');
        return;
    }
    E.$events.find('.event').removeClass('event-blur');
};

var btn_template = '<button class="controls-button"></button>';
E.make_controls = function(){
    var $controls = $('<div class="controls"></div>');
    var $btn_clear = $(btn_template).html('Clear')
    .click(function(e){
        e.preventDefault();
        e.stopPropagation();
        E.clear();
    });
    E.$btn_switch = $(btn_template).html('Start')
    .click(function(e){
        e.preventDefault();
        e.stopPropagation();
        if (E.started)
            E.stop();
        else
            E.start();
    });
    var $show_hola = $('<span class="controls-block"><label>'+
        '<input type="checkbox">Show hola.org</label></span>');
    var $show_hola_switch = $show_hola.find('input')
    .change(function(){
        E.show_hola = $(this).is(':checked');
        E.filter();
    });
    $controls.append($btn_clear, E.$btn_switch, $show_hola);
    return $controls;
};

E.clear = function(){
    E.events = [];
    E.$events.html('No data received yet, please try to refresh the page');
    E.highlight();
};

function request_handler (HAR){
    var req = HAR.request;
    var headers = req.headers;
    var request_id;
    for (var i=0; i<headers.length; i+=1)
    {
        if (headers[i].name.toLowerCase()!='x-hola-request-id')
            continue;
        request_id = headers[i].value;
    }
    if (!request_id)
        return;
    req.req_id = request_id;
    E.fetch_headers(request_id, function(data){
        if (!data.trace.length)
            return;
        E.draw_url(req, data.trace);
    });
}
function get_net_api(){
    var net = chrome.devtools.network;
    if (!net)
    {
        E.set_state('error');
        E.$events.html('No devtools.network API found!');
        return;
    }
    return net;
}
E.start = function(){
    if (E.started)
        return;
    get_net_api().onRequestFinished.addListener(request_handler);
    E.$btn_switch.html('Stop');
    E.set_state('running');
    E.started = true;
};

E.stop = function(){
    if (!E.started)
        return;
    get_net_api().onRequestFinished.removeListener(request_handler);
    E.$btn_switch.html('Start');
    E.set_state('stopped');
    E.started = false;
};

E.filter = function(){
    if (E.show_hola)
        E.$events.find('.event-hola').show();
    else
        E.$events.find('.event-hola').hide();
};

E.init = function(){
    $('body').prepend(E.make_controls());
    var $div = $('#content').empty();
    $div.append('<h2>hola unblocker debugger: <span></span></h2>');
    E.$state = $div.find('h2>span');
    E.set_state('loading');
    E.$events = $('<div id="events"></div>').appendTo($div);
    E.$events.on('click', '.event', function(e){
        e.preventDefault();
        e.stopPropagation();
        var req_id = $(this).data('reqid');
        E.highlight(req_id);
    });
    $div.click(function(e){
        e.preventDefault();
        E.highlight(false);
    });
    E.clear();
    E.start();
};

E.set_state = function(state){
    E.$state.html(state);
};

E.init();
});
