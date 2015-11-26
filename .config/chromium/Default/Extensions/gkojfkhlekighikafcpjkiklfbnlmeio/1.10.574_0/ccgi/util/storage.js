// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', 'jquery_cookie'], function($, jquery_cookie){
var E = {};
var storage;

function have_local_storage(){
    try {
        var _ = localStorage;
        return true;
    } catch(e){}
}

function select_local_storage(){ storage = localStorage; }

function select_cookies(){
    var cookie_opt = {domain: '.hola.org', path: '/', expires: 30};
    storage = {getItem: $.cookie,
        setItem: function(key, val){ $.cookie(key, val, cookie_opt); },
        removeItem: function(key){ $.removeCookie(key, cookie_opt); },
    };
}

function init(){
    if (have_local_storage())
        return select_local_storage();
    console.error('cannot use localStorage, using cookies instead');
    select_cookies();
}
init();

E.on_err = function(){};

E.set = function(key, val){
    try { storage.setItem(key, val); }
    catch(err){ E.on_err('storage_set', key, err); }
};

E.get = function(key){
    try { return storage.getItem(key); }
    catch(err){ E.on_err('storage_get', key, err); }
};

E.get_int = function(key){ return +E.get(key)||0; };

E.clr = function(key){
    try { storage.removeItem(key); }
    catch(err){ E.on_err('storage_clr', key, err); }
};

E.set_json = function(key, val){
    try { return E.set(key, JSON.stringify(val||null)); }
    catch(err){ E.on_err('storage_set_json', key, err); }
};

E.get_json = function(key){
    var val = E.get(key);
    if (!val)
	return val;
    try { val = JSON.parse(val); }
    catch(err){ console.log('err '+err); }
    return val;
};

return E; });
