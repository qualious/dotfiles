HtmlLoader = function () {
    "use strict";
    var ADDITIONAL_SEARCHPARAM = Config.constants.additional_search_param + chrome.runtime.getManifest().version;
    var cache = {};
    return createModule("HtmlLoader", {
        get: function (normalUrl, successCallback) {
            cache[normalUrl] = cache[normalUrl] || {};
            var cacheItem = cache[normalUrl];
            cacheItem.callbacks = cacheItem.callbacks || [];
            if (!/^http/.test(normalUrl)) {
                return;
            }
            if (cacheItem.loading) {
                cacheItem.callbacks.push(successCallback);
                return;
            }
            if (cacheItem.document) {
                successCallback(cacheItem.document);
                return;
            }
            var url = normalUrl;
            var anchor = document.createElement("a");
            anchor.href = url;
            if (isYandexHost(anchor.host)) {
                anchor.search = anchor.search.length ? anchor.search + "&" + ADDITIONAL_SEARCHPARAM : ADDITIONAL_SEARCHPARAM;
                url = anchor.href;
            }
            cacheItem.loading = true;
            cacheItem.callbacks.push(successCallback);
            loadResource({
                url: url,
                responseType: "document",
                onload: function () {
                    cacheItem.loading = false;
                    cacheItem.document = this.responseXML;
                    if (cacheItem.document) {
                        cacheItem.callbacks.forEach(function (cb) {
                            cb(cacheItem.document);
                        });
                    }
                    cacheItem.callbacks.length = 0;
                },
                onerror: function () {
                    cacheItem.loading = false;
                    cacheItem.document = null;
                    cacheItem.callbacks.length = 0;
                }
            });
        },
        clearCache: function (normalUrl) {
            delete cache[normalUrl];
        }
    });
}();
