// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'underscore', '/util/etask.js', '/svc/pub/be_browser.js',
    '/svc/mp/pub/msg.js'],
    function($, _, etask, B, mp_msg){
var E = {};

function iframe_int(mp_msg){
    var E_int = {mp_msg: mp_msg}, $frame, msg_cb;
    var $;

    E_int.init_jquery = function(){ return $ = window.$.noConflict(true); };

    function set_fullscreen(){
        $frame.attr('allowfullscreen', 'true');
        $frame.attr('webkitallowfullscreen', 'true');
        $frame.attr('mozallowfullscreen', 'true');
    }
    E_int.add = function(opt){
        if ($frame)
            return $frame;
        if (typeof opt.cb=='function')
        {
            msg_cb = function(e){
                if (!$frame || e.source!==$frame[0].contentWindow)
                    return;
                opt.cb.call($frame, e.data, e);
            };
            window.addEventListener('message', msg_cb);
        }
        if (opt.$frame)
        {
            $frame = opt.$frame;
            // XXX arik/alexeym: enable after fixing fullscreen while in
            // progress bug
            if (0)
                set_fullscreen();
            $frame[0].contentWindow.location.replace(opt.url);
            return $frame;
        }
        $frame = $('<iframe>').css(
            {position: 'absolute', border: 'none', overflow: 'hidden',
            visibility: 'visibile', zIndex: 100000}).appendTo(document.body);
        // XXX arik/alexeym: enable after fixing fullscreen while in
        // progress bug
        if (0)
            set_fullscreen();
        $frame.attr('src', opt.url);
        return $frame;
    };

    E_int.resize = function(opt){
        if (!$frame)
            return;
        $frame.width(opt.width).height(opt.height);
        if (opt.top)
            $frame.css({top: opt.top});
        if (opt.left)
            $frame.css({left: opt.left});
        if (opt.position)
            $frame.css({position: opt.position});
        if (opt.fullscreen)
            set_fullscreen();
    };

    E_int.position_by_el = function($el, mouseevent, optional_offset){
        if (!$frame)
            return;
        var offset = $el.offset();
        var height = $el.height(), width = $el.width();
        var frame_width = $frame.width();
        var frame_height = $frame.height();
        var new_left = mouseevent ? mouseevent.pageX :
            Math.max(offset.left+width/2-frame_width/2, 0);
        var new_top = offset.top;
        if (optional_offset)
        {
            new_left += optional_offset.left||0;
            new_top += optional_offset.top||0;
        }
        var $win = $(window);
        var doc = document.documentElement, body = document.body;
        var scroll_left = body.scrollLeft||doc.scrollLeft||0;
        var scroll_top = body.scrollTop||doc.scrollTop||0;
        if (new_left+frame_width > $win.width()+scroll_left)
            new_left = $win.width()+scroll_left-frame_width;
        if (new_top+height+frame_height <= $win.height()+scroll_top)
            new_top += height;
        else
            new_top -= frame_height;
        $frame.css({position: 'absolute', left: new_left, top: new_top});
    };

    E_int.send = function(msg, origin){
        if (!$frame || !$frame[0].contentWindow)
            return;
        $frame[0].contentWindow.postMessage(msg, origin||'*');
    };

    E_int.mp_send = function(msg, origin){
        if (!$frame || !$frame[0].contentWindow)
            return;
        mp_msg.send('ifr', msg,
            {remote: $frame[0].contentWindow, origin: origin});
    };

    E_int.remove = function(){
        if (!$frame)
            return;
        if (msg_cb)
            window.removeEventListener('message', msg_cb);
        $frame.remove();
        $frame = null;
        msg_cb = null;
    };

    return E_int;
}

E.get_inject_code = function(func, opt){
    return '('+func.toString()+')'+
        '(('+iframe_int.toString()+')(('+mp_msg.code.toString()+')()),'
        +JSON.stringify(opt||{})+')';
};

E.inject = function(tab_id, func, opt, details){
    details = details||{};
    var tabapi = B.tabid2api(tab_id);
    var code = E.get_inject_code(func, opt);
    if (B.have['tabs.executeScript.matchAboutBlank'])
        details.matchAboutBlank = true;
    if (!window.chrome)
    {
        return etask({cancel: true}, [function(){
            return etask.cb_apply(B.tabs, '.execute_script', [tabapi,
                _.extend({file: ['jquery.min.js'], code: code}, details)]);
        }]);
    }
    return etask({cancel: true}, [function(){
        return etask.cb_apply(B.tabs, '.execute_script', [tabapi,
            _.extend({file: 'js/jquery.min.js'}, details)]);
    }, function(){
        return etask.cb_apply(B.tabs, '.execute_script', [tabapi,
            _.extend({code: code}, details)]);
    }]);
};

// script will stay in memory and will never be removed, be careful when
// calling many times
E.execute = function(tab_id, func, opt){
    B.tabs.execute_script(B.tabid2api(tab_id), {allFrames: true,
        code: '('+func.toString()+')('+JSON.stringify(opt||{})+')'});
};

return E;
});
