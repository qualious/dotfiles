// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['virt_jquery_all', '/util/etask.js'],
    function($, etask){
var E = {};

var pending = [];
function wait_ready(){
    return etask({name: 'wait_ready', cancel: true}, [function(){
        if (E.ready)
            return;
        pending.push(this);
        return this.wait();
    }]);
}

var iframe;
var www_url = '{[=1]}'==='1' && '{[=it.www_url]}' || 'hola.org';
var url = 'https://'+www_url+'/be_mp_storage', origin = 'https://'+www_url;
function from_iframe(e){ return e.source===iframe && e.origin===origin; }

function send(msg){ iframe.postMessage(msg, origin); }

E.init = function(opt){
    if (E.inited)
        return wait_ready();
    E.inited = true;
    opt = opt||{};
    E.ver = opt.ver;
    return etask({name: 'init', cancel: true}, [function(){
        var _this = this;
        window.addEventListener('message', function cb(e){
            if (!from_iframe(e) || e.data.id!='hola_iframe.mp.ready')
                return;
            E.ready = true;
            window.removeEventListener('message', cb);
            _this.econtinue();
        });
        iframe = $('<iframe>',
            {src: url+'?ver='+E.ver, style: 'display:none;'})
        .appendTo('body')[0].contentWindow;
        return this.wait();
    }, function(){
        for (var i = 0; i<pending.length; i++)
            pending[i].econtinue();
        pending = [];
    }]);
};

E.get = function(key){
    return etask({name: 'get', cancel: true}, [function(){
        return wait_ready();
    }, function(){
        var _this = this;
        window.addEventListener('message', function cb(e){
            if (!from_iframe(e) || e.data.id!='hola_iframe.mp.storage' ||
                e.data.key!=key)
            {
                return;
            }
            window.removeEventListener('message', cb);
            _this.econtinue(e.data.val);
        });
        send({id: 'get_from_storage', key: key});
        return this.wait();
    }]);
};

E.get_json = function(key){
    return etask({name: 'get_json', cancel: true}, [function(){
        return E.get(key);
    }, function(val){
        if (!val)
            return val;
        return JSON.parse(val);
    }]);
};

E.set = function(key, val){
    // XXX arik/alexeym: wait for success from iframe
    return etask({name: 'set', cancel: true}, [function(){
        return wait_ready();
    }, function(){
        send({id: 'save_to_storage', key: key, val: val});
    }]);
};

E.set_json = function(key, val){
    return E.set(key, JSON.stringify(val||null));
};

return E; });
