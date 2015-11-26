// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('./require_node.js').define(module, '../');
define(['/util/array.js'], function(array){
var E = {};

E.rm_empty_last = function(a){
    if (a[a.length-1]==='')
	a.pop();
    return a;
};
E.split_trim = function(s, sep, limit){
    return array.compact_self(s.split(sep, limit)); };
E.split_ws = function(s){ return E.split_trim(s, /[ \r\n\t]/); };
E.qw = E.split_ws;
E.chomp = function(s){ return s.replace(/\n$/, ''); };
E.split_crlf = function(s){
    return E.rm_empty_last(s.split(/\r?\n/)); };
E.split_nl = function(s){
    return E.rm_empty_last(s.split('\n')); };
E.startsWith = String.prototype.startsWith ?
    function(s, head){ return s.startsWith(head); } :
    function(s, head){
	return s.length>=head.length && s.slice(0, head.length)===head; };
E.endsWith = String.prototype.endsWith ?
    function(s, tail){ return s.endsWith(tail); } :
    function(s, tail){
	return s.length>=tail.length && s.slice(s.length-tail.length)===tail;
    };
E.contains = String.prototype.contains ?
    function(s, sub){ return s.contains(sub); } :
    function(s, sub){ return s.indexOf(sub)>=0; };
E.to_array_buffer = function(s){
    var buf = new ArrayBuffer(s.length), buf_view = new Uint8Array(buf), i;
    for (i=0; i<s.length; i++)
        buf_view[i] = s.charCodeAt(i);
    return buf;
};
E.from_array_buffer = function(buf){
    return String.fromCharCode.apply(null, new Uint8Array(buf)); };

return E; }); }());
