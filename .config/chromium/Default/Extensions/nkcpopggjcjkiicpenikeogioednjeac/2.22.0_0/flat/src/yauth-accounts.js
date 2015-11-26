(function (globalScope) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([
            "flat/utils",
            "flat/yauth-cookies"
        ], createModule);
    } else {
        globalScope.flat.yauthAccounts = createModule(globalScope.flat.utils, globalScope.flat.yauthCookies);
    }
    function createModule(utils, yauthCookies) {
        var tld;
        var debug = false;
        var reconnectTimeout;
        function getUrl(yandexuid) {
            var url = "https://pass.yandex.{tld}/accounts?yu={yandexuid}";
            if (debug) {
                url = url.replace("https://pass.", "https://pass-rc.");
            }
            return url.replace("{tld}", tld).replace("{yandexuid}", yandexuid);
        }
        function updateAfterTimeout(callback, error) {
            if (reconnectTimeout === undefined) {
                callback(error ? error.type : "error");
                return;
            }
            setTimeout(update.bind(null, callback), reconnectTimeout);
        }
        function update(callback) {
            yauthCookies.getYandexuidCookie(function (yandexuid) {
                if (!yandexuid) {
                    updateAfterTimeout(callback);
                    return;
                }
                utils.loadResource({
                    url: getUrl(yandexuid),
                    onload: function () {
                        var json;
                        try {
                            json = JSON.parse(this.responseText);
                        } catch (ex) {
                            updateAfterTimeout(callback);
                            return;
                        }
                        callback(json);
                    },
                    onerror: function (error) {
                        updateAfterTimeout(callback, error);
                    }
                });
            });
        }
        var module = {
            init: function (params) {
                params = params || {};
                tld = params.tld;
                debug = params.debug;
                reconnectTimeout = params.reconnectTimeout;
            },
            update: function (callback) {
                callback = callback || utils.noop;
                update(callback);
            }
        };
        return module;
    }
}(typeof window !== "undefined" ? window : global));
