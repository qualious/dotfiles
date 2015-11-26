SearchSuggest = function () {
    "use strict";
    var SOURCE = {
        HISTORY: {
            ENUM: 0,
            COUNT: 10,
            NAME: "History"
        },
        BOOKMARKS: {
            ENUM: 1,
            COUNT: 7,
            NAME: "Bookmarks"
        },
        OPENEDTABS: {
            ENUM: 2,
            COUNT: 0,
            NAME: "Openedtabs"
        },
        WEB: {
            ENUM: 3,
            COUNT: 10,
            NAME: "Web"
        }
    };
    var HISTORY_RESULTS_MAX_COUNT = 100;
    var SEARCH_MAIN_TIMEOUT_MS = 5000;
    var searchMainXhr;
    var searchWebXhr = {};
    function info() {
        SearchSuggest.logger.info.apply(SearchSuggest.logger, arguments);
    }
    function getWebUrl() {
        var tpl = "http://suggest-internal.yandex.{tld}/suggest-v-tablo";
        var tld;
        switch (Branding.id) {
        case "tb":
            tld = "com.tr";
            break;
        case "ua":
            tld = "ua";
            break;
        default:
            tld = "ru";
        }
        return tpl.replace("{tld}", tld);
    }
    function searchMain(queryString, callback) {
        var suggestURL = Branding.getXMLDocument("fastdial/config.xml").querySelector("search").getAttribute("suggest");
        suggestURL = Branding.expandURL(suggestURL, { searchTerms: queryString }, true);
        if (searchMainXhr) {
            searchMainXhr.abort();
        }
        info("Loading suggest for query: %s", queryString);
        searchMainXhr = loadResource({
            url: suggestURL,
            timeout: SEARCH_MAIN_TIMEOUT_MS,
            onload: function () {
                searchMainXhr = null;
                try {
                    callback(this.responseText);
                } catch (e) {
                }
            },
            onerror: function () {
                searchMainXhr = null;
                try {
                    callback("");
                } catch (e) {
                }
            }
        });
    }
    function searchWeb(query, word, callback) {
        Object.keys(searchWebXhr).forEach(function (q) {
            if (q !== query && searchWebXhr[q]) {
                searchWebXhr[q].forEach(function (xhr) {
                    if (xhr.readyState !== 4) {
                        xhr.abort();
                    }
                });
                searchWebXhr[q] = null;
            }
        });
        searchWebXhr[query] = searchWebXhr[query] || [];
        var xhr = loadResource({
            url: getWebUrl() + "?part=" + encodeURIComponent(word || query),
            onload: function () {
                try {
                    var arr = JSON.parse(this.responseText);
                } catch (e) {
                }
                var items = [];
                if (arr && arr.length === 3) {
                    items = arr[1].map(function (url, i) {
                        if (!/^https?:\/\//.test(url)) {
                            url = "http://" + url;
                        }
                        return {
                            url: url,
                            title: arr[2][i] || "",
                            weight: Math.max(0.9 - i / 10, 0.1).toFixed(1)
                        };
                    });
                }
                respond({
                    query: query,
                    source: SOURCE.WEB,
                    word: word,
                    items: items
                }, callback);
            },
            onerror: function (evt) {
                respond({
                    query: query,
                    source: SOURCE.WEB,
                    word: word,
                    items: [],
                    error: evt.type
                }, callback);
            }
        });
        searchWebXhr[query].push(xhr);
    }
    function searchHistory(query, callback) {
        chrome.history.search({
            text: "",
            maxResults: HISTORY_RESULTS_MAX_COUNT
        }, function (items) {
            items = items.map(function (item) {
                return {
                    url: item.url,
                    title: item.title,
                    weight: 2 * item.typedCount + item.visitCount
                };
            });
            respond({
                query: query,
                source: SOURCE.HISTORY,
                items: items
            }, callback);
        });
    }
    function searchBookmarks(query, callback) {
        Bookmarks.requestAll(function (items) {
            items = items.filter(function (item) {
                return !item.isFolder;
            }).map(function (item) {
                return {
                    url: item.url,
                    title: item.title,
                    weight: 1
                };
            });
            respond({
                query: query,
                source: SOURCE.BOOKMARKS,
                items: items
            }, callback);
        });
    }
    function searchOpenedTabs(query, callback) {
        chrome.windows.getAll({ populate: true }, function (windows) {
            var items = [];
            windows.forEach(function (win) {
                win.tabs.forEach(function (tab) {
                    items.push({
                        url: tab.url,
                        title: tab.title,
                        weight: 1
                    });
                });
            });
            respond({
                query: query,
                source: SOURCE.OPENEDTABS,
                items: items
            }, callback);
        });
    }
    function respond(details, callback) {
        var resItems = commonThumbsSuggest.calcWeight(details.query, details.items, details.source.COUNT, details.source !== SOURCE.WEB);
        if (Settings.get("debug") && console.table) {
            console.log(details.source.NAME + ": " + (details.word || details.query));
            if (details.error) {
                console.log("Error: " + details.error);
            } else {
                console.table(resItems, [
                    "weight",
                    "url",
                    "title",
                    "log"
                ]);
            }
        }
        callback({
            query: details.query,
            source: details.source.ENUM,
            data: resItems
        });
    }
    return createModule("SearchSuggest", {
        init: function SearchSuggest_init() {
            commonThumbsSuggest.init(Settings.get("debug"));
        },
        onMessage: function SearchSuggest_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "searchMain":
                searchMain(req.query, sendResponse);
                return true;
                break;
            case "searchWeb":
                searchWeb(req.query, req.word, sendResponse);
                return true;
                break;
            case "searchHistory":
                searchHistory(req.query, sendResponse);
                return true;
                break;
            case "searchBookmarks":
                searchBookmarks(req.query, sendResponse);
                return true;
                break;
            case "searchOpenedTabs":
                searchOpenedTabs(req.query, sendResponse);
                return true;
                break;
            }
        }
    });
}();
