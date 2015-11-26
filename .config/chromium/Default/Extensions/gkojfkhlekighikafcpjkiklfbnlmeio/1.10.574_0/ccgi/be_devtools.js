// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
(function(){
var chrome = window.chrome;
if (!chrome)
    return;
chrome.extension.sendMessage({devtool_pane: true}, function(response){
    if (!response || !response.create)
        return;
    var panels = chrome.devtools && chrome.devtools.panels;
    panels.create('Unblocker', '/img/logo.png',
        '/js/svc/pub/be_dev_unblocker.html', function(panel){});
});

})();
