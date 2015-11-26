// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = function(setup){ module.exports = setup(); };
define(function(){
var E = {t: {}};

E.t.startsWith = function(head){
    head = ''+head;
    return this.length>=head.length && this.slice(0, head.length)===head;
};
if (!String.prototype.startsWith)
    String.prototype.startsWith = E.t.startsWith;

E.t.endsWith = function(tail){
    tail = ''+tail;
    return this.length>=tail.length &&
        this.slice(this.length-tail.length)===tail;
};
if (!String.prototype.endsWith)
    String.prototype.endsWith = E.t.endsWith;

E.t.contains = function(search, index){
    return this.indexOf(search, index)>=0; };
if (!String.prototype.contains)
    String.prototype.contains = E.t.contains;
if (!String.prototype.includes)
    String.prototype.includes = E.t.contains;

E.t.isArray = function(arg){
    return Object.prototype.toString.call(arg)==='[object Array]'; };
if (!Array.isArray)
    Array.isArray = E.t.isArray;

E.t.forEach = function(callback, thisArg){
    if (!thisArg)
        thisArg = this;
    for (var i=0; i<this.length; i++)
        callback.apply(thisArg, [this[i], i, this]);
};
if (!Array.prototype.forEach)
    Array.prototype.forEach = E.t.forEach;

E.t.indexOf = function(searchElement, fromIndex){
    if (this==null)
	throw new TypeError('"this" is null or not defined');
    var length = this.length>>>0; // Hack to convert object.length to a UInt32
    fromIndex = +fromIndex||0;
    if (Math.abs(fromIndex)===Infinity)
	fromIndex = 0;
    if (fromIndex<0)
    {
	fromIndex += length;
	if (fromIndex<0)
	    fromIndex = 0;
    }
    for (; fromIndex<length; fromIndex++)
    {
	if (this[fromIndex]===searchElement)
	    return fromIndex;
    }
    return -1;
};
if (!Array.prototype.indexOf)
    Array.prototype.indexOf = E.t.indexOf;
E.t.find = function(predicate) {
    var list = Object(this);
    var length = list.length<0 ? 0 : list.length >>> 0; // ES.ToUint32;
    if (length===0)
        return undefined;
    if (typeof predicate!=='function' ||
        Object.prototype.toString.call(predicate)!=='[object Function]')
    {
        throw new TypeError('Array#find: predicate must be a function');
    }
    var this_arg = arguments[1];
    for (var i=0, value; i<length; i++)
    {
        value = list[i];
        if (predicate.call(this_arg, value, i, list))
            return value;
    }
    return undefined;
};
// do not enable - still not working
if (0 && !Array.prototype.find)
    Array.prototype.find = E.t.find;
E.t.map = function(fn, this_){
    if (this===undefined || this==null)
        throw TypeError('Wrong this in Array.prototype.map');
    if (typeof fn!='function')
        throw TypeError('Wrong fn in Array.prototype.map');
    var res = [], t = Object(this), len = t.length|0;
    res.length = len;
    for (var i=0; i<len; i++)
    {
        if (i in t)
            res[i] = fn.call(this_, t[i], i, t);
    }
    return res;
};
if (!Array.prototype.map)
    Array.prototype.map = E.t.map;

E.t.slice = function(begin, end){
    begin = begin|0;
    end = (end||this.byteLength)|0;
    if (begin<0)
        begin += this.byteLength;
    if (end<0)
        end += this.byteLength;
    begin = Math.min(Math.max(0, begin), this.byteLength);
    end = Math.min(Math.max(0, end), this.byteLength);
    if (end-begin<=0)
        return new ArrayBuffer(0);
    var result = new ArrayBuffer(end-begin);
    var resultBytes = new Uint8Array(result);
    var sourceBytes = new Uint8Array(this, begin, end-begin);
    resultBytes.set(sourceBytes);
    return result;
};
if (!ArrayBuffer.prototype.slice)
    ArrayBuffer.prototype.slice = E.t.slice;

// new Date().getTime() is 2x faster than +new Date()
// http://jsperf.com/date-now-shim-test
E.t.now = function(){ return new Date().getTime(); };
if (!Date.now)
    Date.now = E.t.now;
E.t.keys = function(obj){
    var keys = [];
    for (var i in obj)
    {
	if (obj.hasOwnProperty(i))
	    keys.push(i);
    }
    return keys;
};
if (!Object.keys)
    Object.keys = E.t.keys;
E.t.object_create = (function(){
    function tmp(){}
    var has_own = Object.prototype.hasOwnProperty;
    return function(o){
        if (typeof o!='object')
            throw TypeError('Object prototype is not an Object');
        tmp.prototype = o;
        var obj = new tmp();
        tmp.prototype = null;
        if (arguments.length>1)
        {
            var props = Object(arguments[1]);
            for (var prop in props)
            {
                if (has_own.call(props, prop))
                    obj[prop] = props[prop];
            }
        }
        return obj;
    };
})();
if (0 && !Object.prototype.create)
    Object.prototype.create = E.t.object_create;
/*jslint -W103:false*/
if (0 && !Object.getPrototypeOf && "".constructor && "".costructor.prototype)
    Object.getPrototypeOf = function(o){ return o.constructor.prototype; };
function number_epsilon(){
    if (typeof window!='object')
        return;
    if (!window.Number)
        window.Number = {};
    if (!window.Number.EPSILON)
        window.Number.EPSILON = Math.pow(2, -52);
}
number_epsilon();
E.t.math_sign = function(x){
    if (typeof x!='number')
        return NaN;
    if (x!==x)
        return NaN;
    if (!x)
        return x;
    return x<0 ? -1 : 1;
};
if (!Math.sign)
    Math.sign = E.t.math_sign;
E.t.reduce = function(fn){
    if (this==null)
        throw new TypeError('Wrong this in Array.prototype.reduce');
    if (typeof fn!='function')
        throw new TypeError('Wrong fn in Array.prototype.reduce');
    var t = Object(this), len=t.length|0, k=0, value;
    if (arguments.length==2)
        value = arguments[1];
    else
    {
        while (k<len && !(k in t))
            k++;
        if (k>=len)
            throw new TypeError('Reduce of empty array with no initial');
        value = t[k++];
    }
    for (; k<len; k++)
    {
        if (k in t)
            value = fn(value, t[k], k, t);
    }
    return value;
};
if (!Array.prototype.reduce)
    Array.prototype.reduce = E.t.reduce;
// in ie9 console is undefined if no dev console open
function ie9_console(){
    if (typeof window!='object' || window.console)
        return;
    var console = window.console = {};
    ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
        'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info',
        'log', 'markTimeline', 'profile', 'profiles', 'profileEnd', 'show',
        'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp',
        'trace', 'warn'
    ].forEach(function(p){ console[p] = function(){}; });
    ['memory'].forEach(function(p){ console[p] = {}; });
}
ie9_console();
// ie9 doesn't have requestAnimationFrame
function ie9_animFrame(){
    if (typeof window!='object' || window.requestAnimationFrame)
        return;
    var start = Date.now();
    window.requestAnimationFrame = function(callback){
        window.setTimeout(function(){ callback(Date.now()-start); }, 16); };
}
ie9_animFrame();
// ie9 doesn't have working CustomEvent
function ie9_custom_event(){
    if (typeof window!='object')
        return;
    var error;
    try { var e = new window.CustomEvent('test_event'); }
    catch(e){ error = 1; }
    if (!error)
        return;
    var custom_event = function(event, params){
        params = params || {bubbles: false, cancelable: false,
            detail: undefined};
        var e = document.createEvent('CustomEvent');
        e.initCustomEvent(event, params.bubbles, params.cancelable,
            params.detail);
        return e;
    };
    custom_event.prototype = window.Event.prototype;
    window.CustomEvent = custom_event;
}
ie9_custom_event();
// ie8 does not have Function.prototype.bind
function ie8_function_bind(){
    var bind = E.t.bind = function(this_){
        if (typeof this!="function")
            throw new TypeError("bind polyfill -- 'this' is not callable");
        var args = Array.prototype.slice.call(arguments, 1);
        var callee = this;
        var nil = function(){};
        var fn = function(){
            return callee.apply(this instanceof nil ? this : this_,
                args.concat(Array.prototype.slice.call(arguments)));
        };
        nil.prototype = this.prototype;
        fn.prototype = new nil();
        return fn;
    };
    if (typeof window!='object' || Function.prototype.bind)
        return;
    Function.prototype.bind = bind;
}
ie8_function_bind();
function hola_br_init(){
    if (typeof window!='object' || !window.external)
        return;
    var inited, error;
    try { inited = window.external.hola_br_inited(); }
    catch(e){ error = 1; }
    if (error || !inited)
        return;
    var ver_int = 0;
    try { ver_int = +window.external.hola_br_get_version_int(); }
    catch(e){}
    if (ver_int<1)
        return void console.error('hola_br invalid version');
    window.hola_br = {ver_int: ver_int, supp: {}};
    if (ver_int>=5)
        window.hola_br.supp.set_size = true;
    window.hola_br.fullscreenchange = function(){
        var e = new CustomEvent('webkitfullscreenchange',
            {detail: !!document.fullscreenElement, bubbles: true,
            cancelable: true});
        document.dispatchEvent(e);
    };
    // using webkit prefixs because of bug in videojs using fullscreenchange
    // name and it's own trigger
    document.webkitExitFullscreen = function(){
        document.webkitFullscreenElement = null;
        window.external.hola_br_fullscreen(false, window);
        window.hola_br.fullscreenchange();
    };
    document.webkitFullscreenElement = null;
    document.webkitFullscreenEnabled = true;
    Node.prototype.webkitRequestFullscreen = function(){
        document.webkitFullscreenElement = this;
        window.external.hola_br_fullscreen(true, window);
        window.hola_br.fullscreenchange();
    };
}
hola_br_init();
return E; }); }());
