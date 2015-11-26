PickupSuggest = function () {
    "use strict";
    function info() {
        PickupSuggest.logger.info.apply(PickupSuggest.logger, arguments);
    }
    var MAX_RESULT_COUNT = 40;
    var PAGE_SIZE = 10;
    var BOOKMARK_BOOST = 6;
    var requestThumbData_debounce = 200;
    var requestThumbData_timeout;
    var historyThumbs = {};
    function getOpenedTabs(callback) {
        chrome.windows.getAll({ populate: true }, function (windows) {
            var tabs = [];
            windows.forEach(function (windowElem) {
                windowElem.tabs.forEach(function (tab) {
                    if (!/^(http|ftp)s?/.test(tab.url)) {
                        return;
                    }
                    var tabData = {
                        url: tab.url,
                        title: tab.title
                    };
                    if (tab.favIconUrl) {
                        tabData.favicon = tab.favIconUrl;
                    }
                    tabs.push(tabData);
                });
            });
            callback(tabs);
        });
    }
    function getVisibleDomains() {
        var output = [];
        InternalStructure.iterate({}, function (thumbData, i) {
            output.push(thumbData.location.host);
        });
        return output;
    }
    function getPickupCache(callback) {
        PickupCache.get(function (items) {
            items = items.map(function (item) {
                return {
                    url: item.url,
                    title: item.title,
                    visits: item.visits || 0
                };
            });
            callback(items);
        });
    }
    function addHistoryThumb(pageData, pageLocationObj) {
        pageLocationObj = pageLocationObj || parseUrl(pageData.url);
        historyThumbs[pageLocationObj.url] = {
            location: pageLocationObj,
            pinned: false,
            thumb: {
                url: pageData.url,
                title: pageData.title,
                favicon: pageData.favicon
            },
            cloud: {}
        };
        if (pageLocationObj.source !== pageLocationObj.url) {
            historyThumbs[pageLocationObj.source] = historyThumbs[pageLocationObj.url];
        }
        Thumbs.getMissingData(historyThumbs[pageLocationObj.url], { historyOnly: true });
    }
    function buildOutput(data, callback) {
        var pages = data.pages || [];
        var excludeDomains = data.excludeDomains || [];
        var blacklistRe = data.blacklistRegexp || [];
        var offset = data.offset || 0;
        var output = [];
        pages.every(function (page) {
            var pageLocationObj = parseUrl(page.url);
            if (Pickup.isDomainInList(pageLocationObj.host, excludeDomains)) {
                return true;
            }
            var isDeniedByRegexp = blacklistRe.some(function (regexpString) {
                var regex = new RegExp(regexpString);
                return regex.test(page.url);
            });
            if (isDeniedByRegexp) {
                return true;
            }
            output.push(pageLocationObj.url);
            excludeDomains.push(pageLocationObj.host);
            if (!historyThumbs[pageLocationObj.url]) {
                addHistoryThumb(page, pageLocationObj);
            }
            if (output.length >= MAX_RESULT_COUNT) {
                return false;
            }
            return true;
        });
        if (offset) {
            output = output.splice(offset, PAGE_SIZE + 1);
        } else {
            output.length = Math.min(output.length, PAGE_SIZE + 1);
        }
        var tasks = [];
        output.forEach(function (url) {
            tasks.push(function (callback) {
                var historyThumb = PickupSuggest.getHistoryThumb(url);
                if (historyThumb) {
                    FrontendHelper.requestDataForThumb(historyThumb, callback);
                }
            });
        });
        parallel(tasks, callback);
    }
    function requestLastVisited(offset, callback) {
        parallel({
            blacklist: function (callback) {
                Blacklist.requestTotal(callback);
            },
            tabs: function (callback) {
                getOpenedTabs(callback);
            },
            visibleDomains: function (callback) {
                callback(getVisibleDomains());
            },
            history: function (callback) {
                Pickup.getHistory(2, "lastVisitTime", callback);
            }
        }, function (results) {
            buildOutput({
                pages: results.tabs.concat(results.history),
                excludeDomains: results.visibleDomains.concat(results.blacklist.domains),
                blacklistRe: results.blacklist.regexps,
                offset: offset
            }, callback);
        });
    }
    function requestPopularSites(offset, callback) {
        parallel({
            blacklist: function (callback) {
                Blacklist.requestTotal(callback);
            },
            visibleDomains: function (callback) {
                callback(getVisibleDomains());
            },
            pickupCache: function (callback) {
                getPickupCache(callback);
            },
            bookmarks: function (callback) {
                Bookmarks.requestAll(callback);
            }
        }, function (results) {
            var pages = results.pickupCache;
            results.bookmarks.forEach(function (bookmark) {
                var found = false;
                pages.forEach(function (page) {
                    if (page.url === bookmark.url) {
                        page.visits += BOOKMARK_BOOST;
                    }
                });
                if (!found) {
                    bookmark.visits = BOOKMARK_BOOST;
                    pages.push(bookmark);
                }
            });
            pages.sort(function (a, b) {
                return b.visits - a.visits;
            });
            buildOutput({
                pages: pages,
                excludeDomains: results.visibleDomains.concat(results.blacklist.domains),
                blacklistRe: results.blacklist.regexps,
                offset: offset
            }, callback);
        });
    }
    return createModule("PickupSuggest", {
        onMessage: function PickupSuggest_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "requestLastVisited":
                requestLastVisited(req.offset, sendResponse);
                return true;
                break;
            case "requestPopularSites":
                requestPopularSites(req.offset, sendResponse);
                return true;
                break;
            case "requestThumbData":
                clearTimeout(requestThumbData_timeout);
                requestThumbData_timeout = setTimeout(function () {
                    var parsedUrl = parseUrl(req.url);
                    if (historyThumbs[req.url]) {
                        FrontendHelper.notify("historyThumbChanged", historyThumbs[req.url]);
                        Thumbs.getMissingData(historyThumbs[req.url], { historyOnly: false });
                    } else {
                        addHistoryThumb({ url: parsedUrl.url }, parsedUrl);
                    }
                }, requestThumbData_debounce);
                break;
            }
        },
        onAlarm: function PickupSuggest_onAlarm(alarmInfo) {
            if (alarmInfo.name === "cleanHistoryThumbs") {
                historyThumbs = {};
            }
        },
        updateHistoryThumb: function (normalUrl, callback) {
            if (historyThumbs[normalUrl]) {
                callback(historyThumbs[normalUrl]);
                FrontendHelper.notify("historyThumbChanged", historyThumbs[normalUrl]);
            }
        },
        getHistoryThumb: function (normalUrl) {
            return historyThumbs[normalUrl];
        }
    });
}();
