// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
define(['jquery'], function($){
var E = {};
/**
 * source: https://github.com/henrya/js-jquery/tree/master/BinaryTransport
 * jquery.binarytransport.js
 *
 * @description. jQuery ajax transport for making binary data type requests.
 * @version 1.0
 * @author Henry Algus <henryalgus@gmail.com>
 *
 */
// use this transport for 'binary' data type
$.ajaxTransport('+binary', function(options, originalOptions, jqXHR){
    // check for conditions and support for blob / arraybuffer response type
    if (window.FormData && ((options.dataType &&
        (options.dataType == 'binary')) || (options.data &&
        ((window.ArrayBuffer && options.data instanceof ArrayBuffer) ||
        (window.Blob && options.data instanceof Blob)))))
    {
        return {
            // create new XMLHttpRequest
            send: function(headers, callback){
		// setup all variables
                var xhr = new XMLHttpRequest();
		var url = options.url, type = options.type;
		var async = options.async || true;
		// blob or arraybuffer. Default is blob
		var dataType = options.responseType=='arraybuffer' ?
                    'arraybuffer' : 'blob';
		var data = options.data || null;
		var username = options.username || null;
		var password = options.password || null;
                xhr.addEventListener('load', function(){
                    var data = {};
		    if (options.responseType=='dataurl')
                    {
                        var reader = new FileReader();
                        reader.onload = function(){
                            data[options.dataType] = reader.result;
                            callback(xhr.status, xhr.statusText, data,
                                xhr.getAllResponseHeaders());
                        };
                        reader.readAsDataURL(xhr.response);
                        return;
                    }
                    data[options.dataType] = xhr.response;
                    // make callback and send data
                    callback(xhr.status, xhr.statusText, data,
                        xhr.getAllResponseHeaders());
                });

                xhr.open(type, url, async, username, password);
		// setup custom headers
		for (var i in headers)
                {
                    xhr.setRequestHeader(i, headers[i]);
		}
                xhr.responseType = dataType;
                xhr.send(data);
            },
            abort: function(){}
        };
    }
});
return E; }); })();
