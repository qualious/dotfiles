// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {};

E.chrome_tabs = function(chrome){
    return {
        add_connection_listener: function(cb){
            chrome.extension.onConnect.addListener(cb); },
        remove_connection_listener: function(cb){
            chrome.extension.onConnect.removeListener(cb); },
        add_listener: function(cb){
            chrome.extension.onMessage.addListener(cb); },
        remove_listener: function(cb){
            chrome.extension.onMessage.removeListener(cb); },
        send: function(data){
            if (!data._tab_id)
                throw new Error('no _tab_id');
            data._type = 'tpopup';
            chrome.tabs.sendMessage(data._tab_id, data);
        },
        get_data: function(e){ return e; },
        is_valid: function(e){ return e && e._tab_id && e._type==='tpopup'; },
    };
};

E.tpopup = function(src, dst){
    return {
	add_listener: function(cb){ src.addEventListener('message', cb); },
	remove_listener: function(cb){
	    src.removeEventListener('message', cb); },
	send: function(data){
            data._type = 'tpopup';
            dst.postMessage(data, '*');
        },
	get_data: function(e){ return e.data; },
	is_valid: function(e){ return e && e.data; },
    };
};

/* XXX bahaa BACKWARD: */
E.firefox_bg_to_addon_1_1_629 = function(src, dst){
    return {
	add_listener: function(cb){ src.addEventListener('message', cb); },
	remove_listener: function(cb){
	    src.removeEventListener('message', cb); },
	send: function(data){
            dst.postMessage({target: 'addon', data: data}, '*'); },
	get_data: function(e){ return e.data && e.data.data; },
	is_valid: function(e){
            return e && e.data && e.data.target!=='addon'; },
    };
};

/* XXX arik/bahaa: protect all with try/catch for debugging */
/* XXX arik: copy in be_bg */
E.firefox_bg_to_addon = function(src, dst){
    return {
	add_listener: function(cb){ src.addEventListener('message', cb); },
	remove_listener: function(cb){
	    src.removeEventListener('message', cb); },
	send: function(data){
            dst.postMessage({target: 'addon', data: JSON.stringify(data)},
                '*');
        },
	get_data: function(e){
            if (!e.data)
                return null;
            // XXX bahaa HACK: use same format for all
            return e.data._connection_id ? e.data :
                e.data.data && JSON.parse(e.data.data);
        },
	is_valid: function(e){
            return e && e.data && e.data.target!=='addon';
        },
    };
};

return E; });
