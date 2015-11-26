Title = function () {
    "use strict";
    function getTitleFromOpenedTabs(normalUrl, callback) {
        chrome.windows.getAll({ populate: true }, function (windows) {
            var title;
            windows.forEach(function (windowElem) {
                windowElem.tabs.forEach(function (tab) {
                    var tabNormalUrl = parseUrl(tab.url).url;
                    if (normalUrl === tabNormalUrl) {
                        title = tab.title;
                    }
                });
            });
            callback(title);
        });
    }
    function getTitleFromTopSites(normalUrl, callback) {
        chrome.topSites.get(function (topSites) {
            var title;
            topSites.forEach(function (topSiteData) {
                var topSiteNormalUrl = parseUrl(topSiteData.url).url;
                if (topSiteNormalUrl === normalUrl) {
                    title = topSiteData.title;
                }
            });
            callback(title);
        });
    }
    function getTitleFromHistory(normalUrl, callback) {
        chrome.history.search({ text: normalUrl }, function (historyItems) {
            var title;
            historyItems.forEach(function (historyItem) {
                var historyNormalUrl = parseUrl(historyItem.url).url;
                if (historyNormalUrl === normalUrl) {
                    title = historyItem.title;
                }
            });
            callback(title);
        });
    }
    function getTitleFromRemoteHtml(normalUrl, callback) {
        HtmlLoader.get(normalUrl, function (html) {
            var titleNode = html.querySelector("title");
            callback(titleNode ? titleNode.textContent.substr(0, 1000) : normalUrl);
        });
    }
    return createModule("Title", {
        get: function (normalUrl, callback) {
            parallel({
                tabs: function (callback) {
                    getTitleFromOpenedTabs(normalUrl, callback);
                },
                topSites: function (callback) {
                    getTitleFromTopSites(normalUrl, callback);
                },
                history: function (callback) {
                    getTitleFromHistory(normalUrl, callback);
                }
            }, function (results) {
                var titleFound = results.tabs || results.topSites || results.history;
                if (titleFound) {
                    callback(titleFound);
                } else {
                    getTitleFromRemoteHtml(normalUrl, callback);
                }
            });
        }
    });
}();
