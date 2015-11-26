// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('./require_node.js').define(module, '../');
define([], function(){
var E = {};

E.push = function(a){
    for (var i=1; i<arguments.length; i++)
    {
        var arg = arguments[i];
        if (Array.isArray(arg))
            a.push.apply(a, arg);
        else
            a.push(arg);
    }
    return a.length;
};
E.unshift = function(a){
    for (var i=arguments.length-1; i>0; i--)
    {
        var arg = arguments[i];
        if (Array.isArray(arg))
            a.unshift.apply(a, arg);
        else
            a.unshift(arg);
    }
    return a.length;
};

/* converting arguments to array using slice is slow.
 * http://jsperf.com/arguments-to-array/7 */
function args_slice(args, from, to){
    var _to = to>=0 ? to : args.length+to;
    var ret = new Array(Math.max(0, _to-from));
    for (var i = from; i < _to; i++)
	ret[i-from] = args[i];
    return ret;
}

/* a can also be arguments. avoid doing slow manipulations on arguments.
 * faster than Array.prototype.slice.call(a, from, to) */
E.slice = function(a, from, to){
    if (from===undefined && to===undefined)
	return E.copy(a);
    return args_slice(a, from, to!==undefined ? to : a.length);
};

// can use new Array() constructor for coping only with 2 args or more
// http://jsperf.com/arguments-to-array/12
E.copy = function(a){
    return !a.length ? [] : a.length==1 ? [a[0]] : Array.apply(null, a); };
E.args = E.copy;
// faster: dup only if needed
E._args = function(a){
    return a instanceof Array ? a :
	!a.length ? [] : a.length==1 ? [a[0]] : Array.apply(null, a);
};

// a.slice() is slow for arguments, but fast for arrays
// http://jsperf.com/array-clone-slice-vs-for-loop/5
E.compact = function(a){
    return E.compact_self(a.slice()); };
E.compact_self = function(a){
    var i, j, n = a.length;
    for (i=0; i<n && a[i]; i++);
    if (i==n)
	return a;
    for (j=i; i<n; i++)
    {
	if (!a[i])
	    continue;
	a[j++] = a[i];
    }
    a.length = j;
    return a;
};

// same as _.flatten(a, true)
E.flatten_shallow = function(a){
    return Array.prototype.concat.apply([], a); };
E.flatten = function(a){
    var _a = [], i;
    for (i=0; i<a.length; i++)
    {
        if (Array.isArray(a[i]))
            Array.prototype.push.apply(_a, E.flatten(a[i]));
        else
            _a.push(a[i]);
    }
    return _a;
};
E.unique = function(a){
    var _a = [];
    for (var i=a.length-1; i>=0; i--)
    {
        if (_a.indexOf(a[i])<0)
            _a.unshift(a[i]);
    }
    return _a;
};
E.to_nl = function(a, sep){
    if (!a || !a.length)
	return '';
    if (sep===undefined)
	sep = '\n';
    return a.join(sep)+sep;
};
E.sed = function(a, regex, replace){
    var _a = new Array(a.length), i;
    for (i=0; i<a.length; i++)
	_a[i] = a[i].replace(regex, replace);
    return _a;
};
E.grep = function(a, regex, replace){
    var _a = [], i;
    for (i=0; i<a.length; i++)
    {
	// dont use regex.test() since with //g sticky tag it does not reset
	if (a[i].search(regex)<0)
	    continue;
	if (replace!==undefined)
	    _a.push(a[i].replace(regex, replace));
	else
	    _a.push(a[i]);
    }
    return _a;
};

E.rm_elm = function(a, elm){
    var i = a.indexOf(elm);
    if (i<0)
	return;
    a.splice(i, 1);
    return elm;
};

E.rm_elm_tail = function(a, elm){
    if (elm===a[a.length-1]) // fast-path
    {
	a.pop();
	return elm;
    }
    for (var i=a.length-1; i>=0 && elm!==a[i]; i--);
    if (i<0)
	return;
    a.splice(i, 1);
    return elm;
};

E.split_every = function(a, n){
    var ret = [];
    for (var i=0; i<a.length; i+=n)
        ret.push(a.slice(i, i+n));
    return ret;
};

E.rotate = function(a, n){
    if (a && a.length>1 && (n = n%a.length))
        E.unshift(a, a.splice(n));
    return a;
};

E.to_array = function(v){ return Array.isArray(v) ? v : v==null ? [] : [v]; };

var proto = {};
proto.sed = function(regex, replace){
    return E.sed(this, regex, replace); };
proto.grep = function(regex, replace){
    return E.grep(this, regex, replace); };
proto.to_nl = function(sep){ return E.to_nl(this, sep); };
proto.push_a = function(){
    return E.push.apply(null, [this].concat(E.copy(arguments))); };
proto.unshift_a = function(){
    return E.unshift.apply(null, [this].concat(E.copy(arguments))); };
var installed;
E.prototype_install = function(){
    if (installed)
        return;
    installed = true;
    for (var i in proto)
    {
        Object.defineProperty(Array.prototype, i, {
            value: proto[i], configurable: true,
            enumberable: false});
    }
};
E.prototype_uninstall = function(){
    if (!installed)
        return;
    installed = false;
    // XXX sergey: store orig proto, then load it back
    for (var i in proto)
        delete Array.prototype[i];
};
return E; }); }());
