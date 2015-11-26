(function (globalScope) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([
            "flat/utils",
            "flat/event",
            "flat/yauth-cookies"
        ], factory);
    } else {
        globalScope.flat.yauth = factory(globalScope.flat.utils, globalScope.flat.Event, globalScope.flat.yauthCookies);
    }
    function factory(utils, Event, yauthCookies) {
        var tld;
        var postRequest;
        var lastLogin;
        var lastAction;
        var debug = false;
        var lastRedirectDetails;
        var FAKE_RETPATH_URL = "http://api.browser.yandex.{tld}/elements/embeddedauth.html";
        var EMBEDED_URL = "https://passport.yandex.{tld}/passport?mode=embeddedauth";
        var LOGIN_URL = "https://passport.yandex.{tld}/auth";
        var LOGOUT_URL = "https://passport.yandex.{tld}/passport?mode=logout";
        var PASSPORT_URL = "https://passport.yandex.{tld}/passport?mode=passport";
        function getUrl(tpl, params) {
            var url = tpl.replace("{tld}", tld);
            if (debug) {
                url = url.replace("https://passport.", "https://passport-rc.");
            }
            if (params) {
                var sep = url.indexOf("?") >= 0 ? "&" : "?";
                url += sep + utils.encodeQueryParams(params);
            }
            return url;
        }
        function uidAction(tabId, uid, action) {
            yauthCookies.getYandexuidCookie(function (yandexuid) {
                if (!yandexuid) {
                    return;
                }
                var params = {
                    uid: uid,
                    action: action,
                    yu: yandexuid,
                    retpath: getUrl(FAKE_RETPATH_URL)
                };
                postRequest(tabId, getUrl(EMBEDED_URL), params);
            });
        }
        function catchRetpath(details) {
            if (!tld) {
                lastRedirectDetails = details;
                return;
            }
            chrome.history.deleteUrl({ url: details.url }, utils.noop);
            if (details.transitionQualifiers.indexOf("forward_back") >= 0) {
                module.onChanged.dispatchToListener(null);
                return;
            }
            var result = {
                action: lastAction,
                tabId: details.tabId,
                url: details.url
            };
            var query = details.url.split("?")[1];
            if (query) {
                result.response = utils.parseQueryParams(query);
            }
            module.onChanged.dispatchToListener(result);
        }
        function openUrl(url, tabId) {
            if (tabId) {
                chrome.tabs.update(tabId, { url: url });
            } else {
                chrome.tabs.create({ url: url });
            }
        }
        var module = {
            init: function (params) {
                params = params || {};
                tld = params.tld;
                postRequest = params.postRequest;
                debug = params.debug;
                if (FAKE_RETPATH_URL) {
                    if (lastRedirectDetails) {
                        catchRetpath(lastRedirectDetails);
                        lastRedirectDetails = null;
                    } else {
                        chrome.tabs.query({ active: true }, function (tabs) {
                            var tab = tabs[0];
                            if (tab && tab.url.indexOf(getUrl(FAKE_RETPATH_URL)) === 0) {
                                catchRetpath({
                                    url: tab.url,
                                    tabId: tab.id,
                                    transitionQualifiers: []
                                });
                            }
                        });
                    }
                }
            },
            login: function (tabId, login) {
                lastLogin = login;
                lastAction = "login";
                var params = {
                    login: login || "",
                    retpath: getUrl(FAKE_RETPATH_URL),
                    domik: 1
                };
                var url = getUrl(LOGIN_URL, params);
                openUrl(url, tabId);
            },
            logoutAll: function (tabId) {
                lastAction = "logoutAll";
                yauthCookies.getYandexuidCookie(function (yandexuid) {
                    if (!yandexuid) {
                        return;
                    }
                    var params = {
                        yu: yandexuid,
                        retpath: getUrl(FAKE_RETPATH_URL)
                    };
                    var url = getUrl(LOGOUT_URL, params);
                    openUrl(url, tabId);
                });
            },
            logout: function (tabId, uid, login) {
                lastLogin = login;
                lastAction = "logout";
                uidAction(tabId, uid, lastAction);
            },
            setActive: function (tabId, uid, login) {
                lastLogin = login;
                lastAction = "change_default";
                uidAction(tabId, uid, lastAction);
            },
            setRetpath: function (retpath) {
                if (chrome.webNavigation.onCommitted.hasListener(catchRetpath)) {
                    chrome.webNavigation.onCommitted.removeListener(catchRetpath);
                }
                FAKE_RETPATH_URL = retpath;
                if (FAKE_RETPATH_URL) {
                    var urlRules = FAKE_RETPATH_URL.indexOf("{tld}") === -1 ? [{ urlPrefix: FAKE_RETPATH_URL }] : [
                        { urlPrefix: FAKE_RETPATH_URL.replace("{tld}", "ru") },
                        { urlPrefix: FAKE_RETPATH_URL.replace("{tld}", "ua") },
                        { urlPrefix: FAKE_RETPATH_URL.replace("{tld}", "com.tr") },
                        { urlPrefix: FAKE_RETPATH_URL.replace("{tld}", "com") }
                    ];
                    chrome.webNavigation.onCommitted.addListener(catchRetpath, { url: urlRules });
                }
            },
            onChanged: new Event("auth.onChanged")
        };
        module.setRetpath(FAKE_RETPATH_URL);
        return module;
    }
}(typeof window !== "undefined" ? window : global));
