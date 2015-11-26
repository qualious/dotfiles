// LICENSE_CODE ZON
'use strict'; /*jslint browser:true, es5:true*/
(function(){
var chrome = window.chrome, firefox = window.self, got_info, tries = 0;

if (firefox && firefox.options && firefox.options.ff_debug_page &&
    location.href.startsWith(firefox.options.ff_debug_page))
{
    return;
}

function hola_ext_present(){
    // Only <html> is present at document_start time, use it as a
    // storage to communicate presence of extension to web page.
    document.documentElement.setAttribute('hola_ext_present', 'true');
}
hola_ext_present();

function resp_cb(resp){
    resp.src = chrome ? 'hola_chrome' : 'hola_firefox';
    document.defaultView.postMessage(resp, '*');
}

function embed_info(resp){
    if (!chrome)
    {
        if ((resp.id!=='ping' && resp.id!=='callback') || got_info)
            return;
        got_info = true;
        firefox.port.removeListener('resp', embed_info);
    }
    resp.data = JSON.stringify(resp.data);
    /* inject a simple script to access the window object of the page */
    var el = document.createElement('script');
    el.innerHTML = 'window.hola_extension_info = '+resp.data+';';
    document.head.appendChild(el);
}

// This chain of callbacks is used for website<->bext communication only.

var allowed_origin = /^https?:\/\/(www\.)?hola\.org$/;

function message_cb(e){
    if (!(e.origin||'').match(allowed_origin))
        return;
    if (e.data.src!='hola_ccgi')
        return;
    if (chrome)
        return chrome.extension.sendMessage(e.data, resp_cb);
    firefox.port.emit('req', e.data);
}
window.addEventListener('message', message_cb , false);
if (chrome)
    return chrome.extension.sendMessage({id: 'ping'}, embed_info);

function get_info_ff(){
    if (got_info)
        return;
    if (tries++>10)
        return console.error('failed to get info from extensions');
    firefox.port.emit('req', {id: 'ping'});
    setTimeout(get_info_ff, 200);
}

function uninit(){
    window.removeEventListener('message', message_cb);
    firefox.port.removeListener('resp', resp_cb);
    firefox.port.removeListener('resp', embed_info);
    firefox.removeListener('detach', uninit);
    firefox.port.removeListener('detach', uninit);
}

firefox.port.on('resp', resp_cb);
firefox.port.on('resp', embed_info);
firefox.on('detach', uninit); // FF<30
firefox.port.on('detach', uninit); // FF>=30
get_info_ff();

})();
