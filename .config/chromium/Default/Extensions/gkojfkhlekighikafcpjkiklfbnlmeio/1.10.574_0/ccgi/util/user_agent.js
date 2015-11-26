// LICENSE_CODE ZON
'use strict'; /*jshint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = function(setup){ module.exports = setup(); };
define(function(){
var E = {};

// XXX arik: sync: util/user_agent.js <-> svc/cdn/pub/play_loader.js
/* XXX mikhail: unify with OS version parsing from hola_service */
var win_versions = {
    '10.0': '10.0',
    '6.3': '8.1',
    '6.2': '8',
    '6.1': '7',
    '6.0': 'vista',
    '5.2': '2003',
    '5.1': 'xp',
    '5.0': '2000'
};

var arch_mapping = {
    'x86_64': '64',
    'i686': '32',
    'arm': 'arm'
};

var check_hola = /\bhola_android\b/i;
var check_opera = /\bOPR\b\/(\d+)/i;
var check_edge = /\bEdge\b\/(\d+)/i;
var check_xbox = /\bxbox\b/i;
var check_ucbrowser = /\bUCBrowser\b\/(\d+)/i;

E.guess_browser = function(ua){
    var res;
    ua = ua || (!is_node ? self.navigator.userAgent : '');
    var ucbrowser = check_ucbrowser.exec(ua);
    if ((res = /[( ]MSIE ([6789]|10).\d[);]/.exec(ua)))
	return {browser: 'ie', version: res[1], xbox: check_xbox.test(ua)};
    if ((res = /[( ]Trident\/\d+(\.\d)+.*rv:(\d\d)(\.\d)+[);]/.exec(ua)))
	return {browser: 'ie', version: res[2], xbox: check_xbox.test(ua)};
    if ((res = / Chrome\/(\d+)(\.\d+)+.* Safari\/\d+(\.\d+)+/.exec(ua)))
    {
        var opera = check_opera.exec(ua);
        var edge;
        if ((edge = check_edge.exec(ua)))
            return {browser: 'ie', version: edge[1]};
	return {browser: 'chrome', version: res[1],
	    android: ua.match(/Android/),
	    webview: ua.match(/ Version\/(\d+)(\.\d)/),
	    hola_android: check_hola.test(ua),
	    opera: opera && !!opera[1],
	    opera_version: opera ? opera[1] : undefined,
	    ucbrowser: ucbrowser && !!ucbrowser[1],
	    ucbrowser_version: ucbrowser ? ucbrowser[1] : undefined};
    }
    if ((res = / QupZilla\/(\d+\.\d+\.\d+).* Safari\/\d+.\d+/.exec(ua)))
	return {browser: 'qupzilla', version: res[1]};
    if ((res = /\(PlayStation (\d+) (\d+\.\d+)\).* AppleWebKit\/\d+.\d+/
        .exec(ua)))
    {
	return {browser: 'playstation'+res[1], version: res[2]};
    }
    if ((res = / Version\/(\d+)(\.\d)+.* Safari\/\d+.\d+/.exec(ua)))
    {
	if (!ua.match(/Android/))
            return {browser: 'safari', version: res[1]};
        return {browser: 'chrome', version: res[1], android: true,
            webview: true, hola_android: check_hola.test(ua),
	    ucbrowser: ucbrowser && !!ucbrowser[1],
	    ucbrowser_version: ucbrowser ? ucbrowser[1] : undefined};
    }
    if ((res = / (Firefox|PaleMoon)\/(\d+).\d/.exec(ua)))
    {
	return {browser: 'firefox', version: res[2],
            palemoon: res[1]=='PaleMoon'};
    }
    if ((res = /\(iPad; CPU OS ([\d_]+) like Mac OS X\) AppleWebKit\/\d+\.\d+\.\d+.* Safari\/\d+\.\d+\.\d+/.exec(ua)))
    {
        return {browser: 'safari', version: res[1], ios: true};
    }
    if (/Hola\/\d+\.\d+./.exec(ua))
        return {browser: 'safari', version: 'Hola'};
    return {};
};

E.browser_to_string = function(browser){
    if (typeof browser!='object' || !browser.browser)
        return 'unknown';
    var s = browser.browser;
    if (browser.version)
        s += ' '+browser.version;
    if (browser.xbox)
        s += ' xbox';
    if (browser.android)
        s += ' android';
    if (browser.webview)
        s += ' webview';
    if (browser.opera)
    {
        s += ' opera';
        if (browser.opera_version)
            s += '-'+browser.opera_version;
    }
    if (browser.hola_android)
        s += ' hola_android';
    if (browser.palemoon)
        s += ' palemoon';
    if (browser.ios)
        s += ' ios';
    return s ? s : 'unknown';
};

E.guess = function(ua, platform){
    var res;
    ua = ua || (!is_node ? self.navigator.userAgent : '');
    platform = platform || (!is_node ? self.navigator.platform : '');
    if (check_xbox.exec(ua))
        return {os: 'xbox'};
    if ((res = /Windows(?: NT(?: (.*?))?)?[);]/.exec(ua)))
    {
        return {
            os: 'windows',
            version: win_versions[res[1]],
            release_version: res[1],
            arch: ua.match(/WOW64|Win64|x64/) ? '64' : '32'
        };
    }
    if ((res = /Macintosh.*; (?:Intel|PPC) Mac OS X (\d+[._]\d+)/.exec(ua)))
        return {os: 'macos', version: res[1].replace('_', '.')};
    if (/Macintosh/.exec(ua))
        return {os: 'macos'};
    if ((res = /Android(?: (\d+\.\d+))?/.exec(ua)))
        return {os: 'android', version: res[1]};
    if ((res = /(Linux|CrOS|OpenBSD|FreeBSD)(?: (x86_64|i686|arm))?/.exec(ua)))
    {
        if (check_opera.test(ua) && res[1]=='Linux' && res[2]=='x86_64' &&
            /^Linux arm/.test(platform))
        {
            // Opera Mobile bug
            return {os: 'android'};
        }
        return {
            os: res[1].toLowerCase(),
            arch: arch_mapping[res[2]],
            nix: true
        };
    }
    if ((res = /(?:iPhone|iPad|iPod|iPod touch);.*?OS (\d+[._]\d+)/.exec(ua)))
        return {os: 'ios', version: res[1].replace('_', '.')};
    if (/iPhone|iPad|iPod/.exec(ua))
        return {os: 'ios'};
    if (/PLAYSTATION/.exec(ua))
        return {os: 'ps'};
    if (/Windows Phone/.exec(ua))
        return {os: 'winphone'};
    // HitLeap Viewer (whatever it is) is Windows-only
    if (/HitLeap Viewer/.exec(ua))
        return {os: 'windows'};
    return {};
};

E.guess_device = function(ua){
    var res;
    ua = ua || (!is_node ? self.navigator.userAgent : '');
    if ((res = /(iPhone|iPad|iPod)/.exec(ua)))
        return {device: res[1].toLowerCase()};
    return {};
};

// Guesses platform based on navigator.platform
E.guess_platform = function(platform){
    platform = platform || (!is_node ? self.navigator.platform : '');
    // XXX mikhail: many Android browsers report 'Linux xyz' as platform
    if (/^(Linux|Android|null)/.exec(platform))
        return 'android';
    if (/^Mac/.exec(platform))
        return 'macos';
    // XXX mikhail: detect Windows Phone
    if (/xbox/i.exec(platform))
        return 'xbox';
    if (/^Win/.exec(platform))
        return 'windows';
    if (/^(iPhone|iPod|iPad|Pike v)/.exec(platform))
        return 'ios';
    if (/playstation/i.exec(platform))
        return 'playstation';
};

if (!is_node){
E.support_fullscreen = function(){
    return !!(document.fullscreenEnabled||document.mozFullScreenEnabled||
        document.webkitFullscreenEnabled||document.msFullscreenEnabled);
};
}
return E; }); }());
