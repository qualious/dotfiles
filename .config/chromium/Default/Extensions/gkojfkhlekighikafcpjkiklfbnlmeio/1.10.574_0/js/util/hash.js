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

// See http://burtleburtle.net/bob/hash/integer.html
E.hash_int = function(x){
    x = x|0;
    x -= x<<6;
    x ^= x>>>17;
    x -= x<<9;
    x ^= x<<4;
    x -= x<<3;
    x ^= x<<10;
    x ^= x>>>15;
    return x;
};

// See http://bit.ly/dqECUC
E.hash_string = function(x){
    if (!x.length)
        return 0;
    var hash = 0;
    for (var i = 0; i<x.length; i++)
        hash = (((hash<<5)-hash)+x.charCodeAt(i))>>0;
    return hash;
};

E.sum_parse = function(str){
    // sha1sum format is 'hash [ |*]filename'
    var parts = /([0-9a-f]+)\s+([ *]?)(.*)/i.exec(str);
    if (!parts)
        return null;
    return {hash: parts[1], type: parts[2]=='*' ? 'binary' : 'text',
        file: parts[3]};
};

return E; }); }());

