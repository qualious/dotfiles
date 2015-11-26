(function (globalScope) {
    "use strict";
    var logger = console;
    var navigations = {};
    var fireEvent;
    var TIME_FOR_JS_REDIRECTS = 300;
    function isMainFrame(details) {
        return details.frameId === 0;
    }
    function onBeforeRequest(details) {
        if (!isMainFrame(details)) {
            return;
        }
        var id = details.tabId;
        var nav = navigations[id] = navigations[id] || {
            urls: [],
            timeout: null
        };
        clearTimeout(nav.timeout);
        nav.urls.push(details.url);
        logger.log("onBeforeRequest, id: " + id + ", url: " + details.url);
    }
    function onPossiblyCompleted(details) {
        if (!isMainFrame(details)) {
            return;
        }
        var id = details.tabId;
        var nav = navigations[id];
        if (nav) {
            logger.log("onPossiblyCompleted, id: " + id);
            nav.timeout = setTimeout(onCompleted.bind(null, id), TIME_FOR_JS_REDIRECTS);
        }
    }
    function onErrorOccurred(details) {
        if (!isMainFrame(details)) {
            return;
        }
        var id = details.tabId;
        var nav = navigations[id];
        if (nav) {
            logger.log("onErrorOccurred, id: " + id);
            clearTimeout(nav.timeout);
            onCompleted(id);
        }
    }
    function onCompleted(id) {
        var nav = navigations[id];
        logger.log("onCompleted, id: " + id);
        if (nav && fireEvent) {
            fireEvent({
                tabId: id,
                urls: nav.urls
            });
        }
        delete navigations[id];
    }
    var redirect = {
        init: function (logModule, fireEventMethod) {
            navigations = {};
            if (logModule) {
                logger = logModule;
            }
            if (fireEventMethod) {
                fireEvent = fireEventMethod;
            }
        },
        start: function () {
            chrome.webNavigation.onBeforeNavigate.addListener(onBeforeRequest);
            chrome.webNavigation.onCompleted.addListener(onPossiblyCompleted);
            chrome.webNavigation.onErrorOccurred.addListener(onErrorOccurred);
        },
        stop: function () {
            chrome.webNavigation.onBeforeNavigate.removeListener(onBeforeRequest);
            chrome.webNavigation.onCompleted.removeListener(onPossiblyCompleted);
            chrome.webNavigation.onErrorOccurred.removeListener(onErrorOccurred);
        }
    };
    if (typeof define === "function" && define.amd) {
        define(redirect);
    } else {
        globalScope.redirectCatcherTab = redirect;
    }
}(typeof window !== "undefined" ? window : global));
