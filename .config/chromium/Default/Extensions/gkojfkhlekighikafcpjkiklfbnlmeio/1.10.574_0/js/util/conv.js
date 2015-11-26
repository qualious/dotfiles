// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define, crypto, assert, zerr, vm;
var is_node = typeof module=='object' && module.exports;
var is_ff_addon = typeof module=='object' && module.uri &&
    !module.uri.indexOf('resource://');
if (is_ff_addon)
{
    var util = require('./util');
    define = function(req, setup){
	module.exports = setup.call(this, util); };
}
else if (!is_node)
{
    define = self.define;
    assert = function(){}; // XXX romank: add proper assert
    // XXX romank: use zerr.js
    if (self.hola && self.hola.zerr)
        zerr = self.hola.zerr;
    else
    {
        // IE8 does not support console.log.bind(console)
        zerr = function(){ console.log.apply(console, arguments); };
        zerr.perr = zerr;
    }
}
else
{
    require('./config.js');
    zerr = require('./zerr.js');
    crypto = require('crypto');
    assert = require('assert');
    vm = require('vm');
    define = require('./require_node.js').define(module, '../');
}
define(['/util/util.js'], function(zutil){
var E = {};

E.cache_str_fn = function(fn){
    var cache = {};
    return function(s){
        if (s in cache)
            return cache[s];
        return cache[s] = fn(s);
    };
};
E.cache_str_fn2 = function(fn){
    var cache = {};
    return function(s1, s2){
        var cache2 = cache[s1] = cache[s1]||{};
        if (s2 in cache2)
            return cache2[s2];
        return cache2[s2] = fn(s1, s2);
    };
};

E.o = function(oct_str){ return parseInt(oct_str, 8); };

// XXX vladimir: only nodejs
E.md5_zero = function(hash_len, key){
    assert(hash_len<=16, 'invalid hash len'+hash_len);
    if (!key || !key.length)
    {
	return new Buffer('00000000000000000000000000000000', 'hex')
	.slice(0, hash_len);
    }
    return crypto.createHash('md5').update(key).digest().slice(0, hash_len);
};

E.md5_etag = function(buf){
    return crypto.createHash('md5').update(buf).digest('hex').substr(0, 8);
};

E.inet_ntoa_t = function(ip){
    return ((ip & 0xff000000)>>>24)+'.'+((ip & 0xff0000)>>>16)+'.'
    +((ip & 0xff00)>>>8)+'.'+(ip & 0xff);
};

E.inet_addr = function(ip){
    var parts = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(ip);
    if (parts===null)
	return null;
    if (parts[1]>255 || parts[2]>255 || parts[3]>255 || parts[4]>255)
        return null; // not an IP address
    return ((parts[1]<<24)+(parts[2]<<16)+(parts[3]<<8)+(parts[4]|0))>>>0;
};

function flags_to_str_once(flags, conv){
    var f = 'var s = "";\n';
    f += 'if (!flags) return "";\n';
    for (var i in conv)
    {
	if (!conv.hasOwnProperty(i))
	    continue;
	f += 'if (flags & '+conv[i]+') '
	    +'{ s += '+JSON.stringify(i.toLowerCase())+'+" ";'
	    +' flags &= ~'+conv[i]+'; }\n';
    }
    f += 'if (flags && conv.__conv_to_str.err) '
	+'conv.__conv_to_str.err(flags, conv);\n';
    f += 'return s.slice(0, s.length-1);\n';
    var func = new Function(['flags', 'conv'], f);
    Object.defineProperty(conv, '__conv_to_str',
	{enumerable: false, writable: true});
    conv.__conv_to_str = func;
    func.err = function(flags, conv){
	zerr.perr('flags_str_invalid', 'flags '+flags+' '
	    +JSON.stringify(conv).slice(0, 30));
    };
    return conv.__conv_to_str(flags, conv);
}
E.flags_to_str = function(flags, conv){
    if (conv.__conv_to_str)
	return conv.__conv_to_str(flags, conv);
    return flags_to_str_once(flags, conv);
};

function flags_from_str_once(s, conv){
    var f = 'var flags = 0, a, i;\n';
    f += 'if (!s) return 0;\n';
    f += 's = s.toUpperCase();\n';
    f += 'a = s.split(",");\n';
    f += 'for (i=0; i<a.length; i++)\n';
    f += '{\n';
    f += '    if (!conv[a[i]])\n';
    f += '    {\n';
    f += '        if (flags && conv.__conv_from_str.err) '
	+'conv.__conv_from_str.err(flags, conv);\n';
    f += '        return -1;\n';
    f += '    }\n';
    f += '    flags |= conv[a[i]];\n';
    f += '}\n';
    f += 'return flags;\n';
    var func = new Function(['s', 'conv'], f);
    Object.defineProperty(conv, '__conv_from_str',
	{enumerable: false, writable: true});
    conv.__conv_from_str = func;
    func.err = function(s, conv){
	zerr.perr('flags_str_invalid', 'flags '+s+' '
	    +JSON.stringify(conv).slice(0, 30));
    };
    return conv.__conv_from_str(s, conv);
}
E.flags_from_str = function(s, conv){
    if (conv.__conv_from_str)
	return conv.__conv_from_str(s, conv);
    return flags_from_str_once(s, conv);
};
E.scale_vals = {'P': 1e15, 'T': 1e12, 'G': 1e9, 'M': 1e6, 'K': 1e3, '': 1};
(function(){
    E._scale_vals = {};
    for (var i in E.scale_vals)
        E._scale_vals[E.scale_vals[i]] = i;
})();
E.scaled_number = function(num, scale, per, nan_str){
    var sign = '';
    if (num<0)
    {
        sign = '-';
        num = -num;
    }
    if (scale==null)
    {
        for (scale in E.scale_vals)
        {
            if (num>=E.scale_vals[scale])
                break;
        }
        scale = scale||'';
    }
    if (num===undefined)
	return '';
    if (isNaN(num))
	return nan_str||'x';
    if (num==Infinity)
        return sign+'\u221e';
    var _scale = E.scale_vals[scale];
    num /= _scale;
    if (num<0.001)
	return '0'+(per ? E.format_per(per) : '');
    var str = num.toFixed(num<1 ? 3 : num<10 ? 2 : 1);
    if (per=='ms' && _scale>1)
    {
        per = 's';
        _scale /= 1000;
        scale = E._scale_vals[_scale];
    }
    return sign+str.replace(/\.0*$/, '')+scale+(per ? E.format_per(per) : '');
};
E.format_per = function(per){
    return !per ? '' : per=='%' || per=='s' || per=='ms' ? per : '/'+per[0]; };
function date_stringify(d){ return {__ISODate__: d.toISOString()}; }
E.JSON_stringify = function(obj, opt){
    var s, prev_date, _date, prev_func, prev_re;
    var date_class, func_class, re_class;
    opt = opt||{};
    if (opt.date)
        _date = typeof opt.date=='function' ? opt.date : date_stringify;
    if (opt.mongo)
        _date = date_stringify;
    if (_date)
    {
        date_class = opt.vm_context ?
            vm.runInContext('Date', opt.vm_context) : Date;
        prev_date = date_class.prototype.toJSON;
        date_class.prototype.toJSON = function(){ return _date(this); };
    }
    if (opt.func)
    {
        func_class = opt.vm_context ?
            vm.runInContext('Function', opt.vm_context) : Function;
        prev_func = func_class.prototype.toJSON;
        func_class.prototype.toJSON = function(){
            return {__Function__: this.toString()}; };
    }
    if (opt.re)
    {
        re_class = opt.vm_context ?
            vm.runInContext('RegExp', opt.vm_context) : RegExp;
        prev_re = re_class.prototype.toJSON;
        re_class.prototype.toJSON = function(){
            return {__RegExp__: this.toString()}; };
    }
    try { s = JSON.stringify(obj, opt.replacer, opt.spaces); }
    finally {
        if (_date)
            date_class.prototype.toJSON = prev_date;
        if (opt.func)
            func_class.prototype.toJSON = prev_func;
        if (opt.re)
            re_class.prototype.toJSON = prev_re;
    }
    if (opt.mongo)
        s = s.replace(/\{"__ISODate__":("[0-9TZ:.-]+")\}/g, 'ISODate($1)');
    return s;
};
function parse_leaf(v){
    var parsed;
    if (!v || typeof v!='object' || Object.keys(v).length!=1)
        return v;
    if (v.__ISODate__)
        return new Date(v.__ISODate__);
    if (v.__Function__)
    {
        parsed = /^function\s*([^(]*)\(([^)]*)\)\s*\{([\s\S]*)\}$/
            .exec(v.__Function__);
        if (!parsed)
            throw new Error('failed parsing function');
        return new Function(parsed[2], parsed[3]);
    }
    if (v.__RegExp__)
    {
        parsed = /^\/(.*)\/(\w*)$/.exec(v.__RegExp__);
        if (!parsed)
            throw new Error('failed parsing regexp');
        return new RegExp(parsed[1], parsed[2]);
    }
    return v;
}
E.JSON_parse = function(s){
    return JSON.parse(s, function(k, v){ return parse_leaf(v); });
};
E.JSON_parse_obj = function(v){
    if (!v || typeof v!='object')
        return v;
    if (Array.isArray(v))
    {
        for (var i = 0; i<v.length; i++)
            v[i] = E.JSON_parse_obj(v[i]);
        return v;
    }
    var v2 = parse_leaf(v);
    if (v2!==v)
        return v2;
    for (var key in v)
        v[key] = E.JSON_parse_obj(v[key]);
    return v;
};
E.hex2bin = function(hex, opt){
    var byte_array = opt && opt.byte_array;
    var bin = byte_array ? new Uint8Array() : [];
    var re = /('.)|([0-9a-f][0-9a-f]?)|\s+|[.-]|(.)/gi;
    var m, v;
    for (re.lastIndex = 0; (m = re.exec(hex));)
    {
        if (m[1])
            v = m[1].charCodeAt(1);
        else if (m[2])
            v = parseInt(m[2], 16);
        else if (m[3])
            return null; // throw new Error('invalid hex code');
        else
            continue;
        bin.push(v);
    }
    return bin;
};
E.bin2hex = function(arr){
    var s = '', v, i;
    for (i=0; i<arr.length; i++)
    {
        v = (arr[i]&0xff).toString(16).toUpperCase();
        s += (v.length<2 ? '0' : '')+v+' ';
    }
    return s.trim();
};
E.bytearray_from_str8 = function(str){
    var arr = [], i;
    for (i=0; i<str.length; i++)
        arr[i] = str.charCodeAt(i)&0xff;
    return arr;
};
E.bytearray_to_str8 = function(arr){
    var str = '', i;
    for (i=0; i<arr.length; i++)
        str += String.fromCharCode(arr[i]);
    return str;
};
E.bytearray_from_str16 = function(str, len){
    var arr = [], i, j, v;
    for (i=0, j=0; j<len-1; i++, j+=2)
    {
        v = str.charCodeAt(i);
        arr[j] = v&0xff;
        arr[j+1] = v>>8;
    }
    if (j<len)
        arr[j] = str.charCodeAt(i)&0xff;
    return arr;
};
E.bytearray_to_str16 = function(arr){
    var str = '', i;
    for (i=0; i<arr.length; i+=2)
        str += String.fromCharCode(arr[i] | arr[i+1]<<8);
    return str;
};
E.bytearray_from_str15 = function(str, len){
    var arr = [], i, j, v = 0, bits = 0;
    for (i=0, j=0; i<len; i++)
    {
        if (bits<8)
        {
            v |= str.charCodeAt(j++)<<bits;
            bits += 15;
        }
        arr[i] = v&0xff;
        v >>= 8;
        bits -= 8;
    }
    return arr;
};
E.bytearray_to_str15 = function(arr){
    var str = '', i, v = 0, bits = 0;
    for (i=0; i<arr.length; i++)
    {
        v |= arr[i]<<bits;
        bits += 8;
        if (bits>=15)
        {
            str += String.fromCharCode(v&0x7fff);
            v >>= 15;
            bits -= 15;
        }
    }
    if (bits)
        str += String.fromCharCode(v);
    return str;
};

return E; }); }());
