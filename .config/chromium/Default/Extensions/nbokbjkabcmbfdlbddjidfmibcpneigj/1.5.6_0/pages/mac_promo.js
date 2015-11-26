(function () {

function onInstallStatusChanged(details) {
    //var chances = {install:1.1, update:0.36};
    if (/update|install/i.test(details.reason) &&
        localStorage.mac_promo_shown != 'true' /*&&
        Math.random() < chances[details.reason]*/) {
        // show mac page
        localStorage.mac_promo_shown   = 'true';        
        localStorage.mac_promo_counter = 1;
        localStorage.mac_promo_date    = +new Date;
        chrome.tabs.create({ url: 'http://www.smoothscroll.net/mac/' });
    }
}

var userAgent = window.navigator.userAgent;
if (userAgent.indexOf('Macintosh') == -1) 
    return;

var osVersionParts = /OS X ([0-9_]+)/i.exec(userAgent)[1].split('_');
if (+osVersionParts[1] < 9)  // supported: 10.9.0+
    return;

chrome.runtime.onInstalled.addListener(onInstallStatusChanged);

// e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.132 Safari/537.36

})();