(function (globalScope) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["flat/event"], factory);
    } else {
        globalScope.redirectCatcherXHR = factory(globalScope.flat.Event);
    }
    function factory(FlatEvent) {
        var logger;
        var urlPatterns = [];
        var blockingUrlsMap = {};
        var requests = {};
        function findUrl(list, urlToFind) {
            for (var i = 0, l = list.length; i < l; i++) {
                var urlFromList = list[i];
                if (urlToFind.indexOf(urlFromList) === 0) {
                    return urlFromList;
                }
            }
            return null;
        }
        function onBeforeRequestXHR(details) {
            var request = requests[details.requestId];
            var resolution = { cancel: false };
            var initialUrl;
            if (!request) {
                initialUrl = findUrl(urlPatterns, details.url);
                if (initialUrl) {
                    requests[details.requestId] = {
                        initialUrl: initialUrl,
                        urls: [details.url]
                    };
                    logger.log("onBeforeRequest, id: " + details.requestId + ", url: " + details.url);
                }
            } else {
                initialUrl = request.initialUrl;
                if (blockingUrlsMap[initialUrl] && details.method === "GET") {
                    resolution.cancel = true;
                }
                request.urls.push(details.url);
                logger.log("onBeforeRequest, id: " + details.requestId + ", url: " + details.url);
            }
            return resolution;
        }
        function onCompletedXHR(details) {
            var request = requests[details.requestId];
            if (request) {
                logger.log("onCompletedXHR, id: " + details.requestId + ", url: " + details.url);
                redirect.onCompleted.dispatchToListener(request, details);
                delete requests[details.requestId];
            }
        }
        var redirect = {
            init: function (params) {
                urlPatterns = [];
                requests = {};
                params = params || {};
                logger = params.logger || {
                    log: function () {
                    }
                };
            },
            startFor: function (initialUrl, blockRedirects) {
                var filter = {
                    urls: ["<all_urls>"],
                    types: ["xmlhttprequest"]
                };
                if (urlPatterns.length === 0) {
                    chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestXHR, filter, ["blocking"]);
                    chrome.webRequest.onCompleted.addListener(onCompletedXHR, filter);
                    chrome.webRequest.onErrorOccurred.addListener(onCompletedXHR, filter);
                }
                if (blockRedirects) {
                    blockingUrlsMap[initialUrl] = true;
                }
                urlPatterns.push(initialUrl);
            },
            stopFor: function (initialUrl) {
                for (var i = urlPatterns.length; i--;) {
                    if (urlPatterns[i] === initialUrl) {
                        urlPatterns.splice(i, 1);
                        break;
                    }
                }
                delete blockingUrlsMap[initialUrl];
                if (urlPatterns.length === 0) {
                    chrome.webRequest.onBeforeRequest.removeListener(onBeforeRequestXHR);
                    chrome.webRequest.onCompleted.removeListener(onCompletedXHR);
                    chrome.webRequest.onErrorOccurred.removeListener(onCompletedXHR);
                }
            },
            onCompleted: new FlatEvent("redirectXHR.onCompleted")
        };
        return redirect;
    }
}(typeof window !== "undefined" ? window : global));
