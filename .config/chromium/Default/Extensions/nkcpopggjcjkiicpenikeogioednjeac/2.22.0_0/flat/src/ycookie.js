(function (globalScope) {
    "use strict";
    var TRUSTED_DOMAINS = [
        ".yandex.ru",
        ".yandex.kz",
        ".yandex.ua",
        ".yandex.by",
        ".yandex.net",
        ".yandex.com",
        ".yandex.com.tr",
        ".ya.ru",
        ".moikrug.ru",
        ".narod.ru"
    ];
    var COOKIE_NAME = "ys";
    var NAME_VERSION_SEPARATOR = ".";
    var APP_VERSION = chrome.runtime.getManifest().version.replace(/\./g, "-");
    var appName;
    function forEachDomain(callback, domain) {
        TRUSTED_DOMAINS.forEach(function (trustedDomain) {
            if (domain && trustedDomain !== domain) {
                return;
            }
            var url = "http://" + trustedDomain;
            chrome.cookies.get({
                url: url,
                name: COOKIE_NAME
            }, function (cookie) {
                callback(cookie, url);
            });
        });
    }
    function deleteCookiePart(partForDelete) {
        forEachDomain(function (cookie, url) {
            if (!cookie || !cookie.value || cookie.value.indexOf(partForDelete) === -1) {
                return;
            }
            var parts = cookie.value.split("#").filter(function (value) {
                return value !== partForDelete;
            });
            chrome.cookies.set({
                url: url,
                name: COOKIE_NAME,
                value: parts.join("#")
            });
        });
    }
    function updateYsCookies(domain) {
        forEachDomain(function (cookie, url) {
            var cookieValue = cookie && cookie.value ? injectCookieValue(cookie.value) : appName + NAME_VERSION_SEPARATOR + APP_VERSION;
            chrome.cookies.set({
                url: url,
                name: COOKIE_NAME,
                value: cookieValue
            });
        }, domain);
    }
    function injectCookieValue(currentValue) {
        var injected = false;
        var cookieValue = appName + NAME_VERSION_SEPARATOR + APP_VERSION;
        var parts = currentValue.split("#").map(function (ysPart) {
            if (ysPart.indexOf(appName) === 0) {
                injected = true;
                return cookieValue;
            } else {
                return ysPart;
            }
        });
        if (!injected) {
            parts.push(cookieValue);
        }
        return parts.join("#");
    }
    chrome.cookies.onChanged.addListener(function (changeInfo) {
        if (!appName) {
            return;
        }
        if (changeInfo.cause === "explicit" || changeInfo.cause === "overwrite" || !changeInfo.removed) {
            return;
        }
        if (TRUSTED_DOMAINS.indexOf(changeInfo.cookie.domain) === -1) {
            return;
        }
        updateYsCookies(changeInfo.cookie.domain);
    });
    var YCookie = {
        setAppName: function YCookie_setAppName(name) {
            appName = name;
            updateYsCookies();
        },
        deleteCookiePart: deleteCookiePart
    };
    if (typeof define === "function" && define.amd) {
        define(YCookie);
    } else {
        globalScope.YCookie = YCookie;
    }
}(typeof window !== "undefined" ? window : global));
