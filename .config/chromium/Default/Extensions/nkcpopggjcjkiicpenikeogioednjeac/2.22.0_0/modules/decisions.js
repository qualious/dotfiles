Decisions = function () {
    "use strict";
    var tabsNavigateHistory = {};
    var tabsGone = {};
    var NAVIGATE_CODE = {
        CURRENT_TAB: 1,
        NEW_WINDOW: 2,
        NEW_TAB: 3
    };
    chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
        delete tabsNavigateHistory[tabId];
        delete tabsGone[tabId];
    });
    chrome.tabs.onReplaced && chrome.tabs.onReplaced.addListener(function (addedTabId, removedTabId) {
        delete tabsNavigateHistory[removedTabId];
        delete tabsGone[removedTabId];
    });
    chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
        tabsNavigateHistory[details.tabId] = tabsNavigateHistory[details.tabId] || [];
        tabsNavigateHistory[details.tabId].push(normalizeUrl(details.url));
    });
    function onThumbOpened(tabId, index, url, navigateCode) {
        if (navigateCode === NAVIGATE_CODE.CURRENT_TAB) {
            chrome.tabs.update(tabId, { url: url });
            tabsGone[tabId] = {
                url: normalizeUrl(url),
                vtbNum: index + 1
            };
        } else if (navigateCode === NAVIGATE_CODE.NEW_WINDOW) {
            chrome.windows.create({
                url: url,
                focused: true
            }, function (windowObj) {
                var newTabId = windowObj.tabs[0].id;
                tabsGone[newTabId] = {
                    url: normalizeUrl(url),
                    vtbNum: index + 1
                };
                tabsNavigateHistory[newTabId] = tabsNavigateHistory[tabId];
            });
        } else {
            chrome.tabs.create({
                url: url,
                active: false,
                openerTabId: tabId
            }, function (data) {
                tabsGone[data.id] = {
                    url: normalizeUrl(url),
                    vtbNum: index + 1
                };
                tabsNavigateHistory[data.id] = tabsNavigateHistory[tabId];
            });
        }
    }
    return createModule("Decisions", {
        onMessage: function Decisions_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "openThumb":
                sender.tab && onThumbOpened(sender.tab.id, req.index, req.url, req.navigateCode);
                break;
            }
        },
        getURLStat: function Decisions_getURLStat(tabId) {
            if (!tabsGone[tabId] || !tabsNavigateHistory[tabId])
                return {};
            var tabURL = normalizeUrl(tabsGone[tabId].url);
            if (tabsNavigateHistory[tabId].indexOf(tabURL) === -1) {
                delete tabsNavigateHistory[tabId];
                delete tabsGone[tabId];
                return {};
            }
            var output = { vtbNum: tabsGone[tabId].vtbNum };
            delete tabsGone[tabId];
            return output;
        }
    });
}();
