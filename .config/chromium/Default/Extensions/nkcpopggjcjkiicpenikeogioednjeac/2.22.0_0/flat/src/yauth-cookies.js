(function (globalScope) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([
            "flat/utils",
            "flat/event"
        ], factory);
    } else {
        globalScope.flat.yauthCookies = factory(globalScope.flat.utils, globalScope.flat.Event);
    }
    function factory(utils, Event) {
        var DOMAIN_TEMPLATE = ".yandex.{tld}";
        var SESSION_COOKIE_DOMAIN = ".yandex.ru";
        var SESSION_COOKIE_NAME = "Session_id";
        var SESSION_COOKIE_PATH = "/";
        var RECHECK_COOKIE_TIMEOUT = 10000;
        var COOKIE_TIMEOUT_MS = 100;
        var cookieChangeTimeout;
        var debug;
        function attachCookieListener() {
            if (!chrome.cookies.onChanged.hasListener(onCookieChanged)) {
                chrome.cookies.onChanged.addListener(onCookieChanged);
            }
        }
        function onCookieChanged(changeInfo) {
            var cookie = changeInfo.cookie;
            if (cookie.name === SESSION_COOKIE_NAME && cookie.domain === SESSION_COOKIE_DOMAIN && cookie.path === SESSION_COOKIE_PATH) {
                processSessionCookie(!changeInfo.removed);
            }
        }
        function processSessionCookie(cookieExists) {
            clearTimeout(cookieChangeTimeout);
            cookieChangeTimeout = setTimeout(function () {
                module.onChanged.dispatchToListener(cookieExists);
            }, COOKIE_TIMEOUT_MS);
        }
        function checkCookie(domain) {
            chrome.cookies.getAll({
                name: SESSION_COOKIE_NAME,
                domain: domain,
                path: SESSION_COOKIE_PATH
            }, function (cookies) {
                var error = chrome.runtime.lastError;
                if (error || !cookies) {
                    checkCookieAfterTimeout(domain);
                    return;
                }
                processSessionCookie(cookies.length > 0);
            });
        }
        function checkCookieAfterTimeout(domain) {
            setTimeout(checkCookie.bind(null, domain), RECHECK_COOKIE_TIMEOUT);
        }
        function processDomain(tld, template) {
            return template.replace("{tld}", tld || "ru");
        }
        var module = {
            init: function (params) {
                params = params || {};
                SESSION_COOKIE_DOMAIN = processDomain(params.tld, DOMAIN_TEMPLATE);
                debug = params.debug;
                attachCookieListener();
            },
            check: function () {
                checkCookie(SESSION_COOKIE_DOMAIN);
            },
            checkForCustomDomain: function (tld) {
                checkCookie(processDomain(tld, DOMAIN_TEMPLATE));
            },
            getYandexuidCookie: function (callback) {
                chrome.cookies.getAll({
                    name: "yandexuid",
                    domain: SESSION_COOKIE_DOMAIN,
                    path: "/"
                }, function (cookies) {
                    var value;
                    if (cookies && cookies[0]) {
                        value = cookies[0].value;
                    }
                    callback(value);
                });
            },
            onChanged: new Event("yauthCookies.onChanged")
        };
        return module;
    }
}(typeof window !== "undefined" ? window : global));
