// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['jquery', '/util/etask.js', '/util/date.js',
    '/util/escape.js', '/util/storage.js', '/util/zerr.js', '/util/util.js'],
    function($, etask, date, zescape, storage, zerr, util){
var E;

// XXX arik: need test
// XXX mikhail: should GET be the default method?
function ajax(opt){
    var timeout = opt.timeout||20*date.ms.SEC, slow = opt.slow||2*date.ms.SEC;
    var retry = opt.retry, data = opt.data, qs = zescape.qs(opt.qs);
    var url = zescape.uri(opt.url, qs), perr = opt.perr;
    // opt.type is deprecated
    var method = opt.method||opt.type||'POST';
    var data_type = opt.json ? 'json' : 'text';
    var t0 = date();
    var xhr;
    zerr.debug('ajax('+data_type+') url '+url+' retry '+retry);
    return etask([function(){
        var ajopt = {dataType: data_type, type: method, url: url,
            data: data, timeout: timeout, xhrFields: {}};
        if (opt.with_credentials)
            ajopt.xhrFields.withCredentials = true;
        if (opt.onprogress)
            ajopt.xhrFields.onprogress = opt.onprogress;
        return xhr = $.ajax(ajopt);
    }, function catch$(err){
        zerr('ajax('+data_type+') failed url '+url+' data '+
            zerr.json(data).substr(0, 200)+' status: '+xhr.status+' '+
            xhr.statusText+'\nresponseText: '+
            (xhr.responseText||'').substr(0, 200));
        if (retry)
            return this.ereturn(ajax(util.extend({}, opt, {retry: retry-1})));
        // XXX mikhail: is storage.set('ajax_timeout') in use?
        if (xhr.statusText=='timeout')
            storage.set('ajax_timeout', storage.get_int('ajax_timeout')+1);
        if (opt.no_throw)
            return {error: xhr.statusText||'no_status'};
        throw new Error(xhr.statusText);
    }, function(data){
        var t = date()-t0;
        zerr[t>slow ? 'err' : 'debug'](
            'ajax('+data_type+') '+(t>slow ? 'SLOW ' : 'ok ')+t+'ms url '+url);
        if (t>slow && perr)
            perr({id: 'be_ajax_slow', info: t+'ms '+url});
        if (E.do_op)
            E.do_op(data&&data.do_op);
        return this.ereturn(data);
    }, function abort(){
        // reachable only via E.abort
        xhr.abort();
    }]);
}
E = ajax;

E.json = function(opt){ return ajax(util.extend({}, opt, {json: 1})); };

E.abort = function(ajax){
    ajax.egoto('abort');
};

return E; });
