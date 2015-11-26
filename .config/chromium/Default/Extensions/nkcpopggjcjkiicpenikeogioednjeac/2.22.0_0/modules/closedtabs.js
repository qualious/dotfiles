ClosedTabs = function () {
    "use strict";
    var NTP_DEFAULT_URL = "chrome://newtab/";
    var MAX_CLOSED_WINDOWS_COUNT = 5;
    var MAX_CLOSED_TABS_COUNT = 10;
    var MAX_CLOSED_COUNT = MAX_CLOSED_WINDOWS_COUNT + MAX_CLOSED_TABS_COUNT;
    var CLOSED_WINDOWS_PREFIX = "win-";
    var closedTabs = [];
    function loadClosedTabs() {
        chrome.storage.local.get({ closedTabs: [] }, function (records) {
            closedTabs = records.closedTabs;
            notifyUI();
        });
    }
    function listenSuspend() {
        chrome.runtime.onSuspend.addListener(function () {
            chrome.storage.local.set({ closedTabs: closedTabs });
        });
    }
    function notifyUI() {
        chrome.windows.getAll({ populate: true }, function (windows) {
            windows.forEach(function (window) {
                var closedTabsInWindow = getClosedTabsForWindow(window.id);
                var hasClosed = Boolean(closedTabsInWindow.length);
                window.tabs.forEach(function (tab) {
                    if (tab.url === NTP_DEFAULT_URL) {
                        notifyTabs("closedTabsListChanged", { empty: !hasClosed }, tab.id);
                    }
                });
            });
        });
    }
    function restoreItem(itemId) {
        if (itemId.indexOf(CLOSED_WINDOWS_PREFIX) > -1) {
            restoreWindow(itemId);
        } else {
            restoreTab(itemId);
        }
    }
    function restoreTab(tabId) {
        var tabIndex;
        closedTabs.forEach(function (tab, index) {
            if (tab.id === tabId) {
                chrome.tabs.create({ url: tab.url });
                tabIndex = index;
            }
        });
        if (typeof tabIndex === "number") {
            closedTabs.splice(tabIndex, 1);
            notifyUI();
        }
    }
    function restoreWindow(windowId) {
        var closedWindowIndex;
        var urls = closedTabs.filter(function (tab, i) {
            if (tab.id === windowId) {
                closedWindowIndex = i;
                return true;
            }
            return false;
        })[0].urls;
        chrome.windows.create({
            url: urls,
            focused: true
        }, function (window) {
            closedTabs = closedTabs.map(function (tab) {
                var windowId = parseInt(tabId.replace(CLOSED_WINDOWS_PREFIX, ""), 10);
                if (tab.windowId === windowId) {
                    tab.windowId = window.id;
                }
                return tab;
            });
        });
        closedTabs.splice(closedWindowIndex, 1);
        notifyUI();
    }
    function sortClosed(tabs, windowId) {
        var shownUrls = {};
        var sortedWindows = [];
        var sortedTabs = [];
        var sorted;
        tabs.forEach(function (tab) {
            if (tab.isWindow) {
                tab.domains = [];
                tab.urls.forEach(function (url) {
                    tab.domains.push(parseUrl(url).host);
                });
                if (tab.domains.length) {
                    sortedWindows.push(tab);
                }
            } else {
                if (windowId && tab.windowId !== windowId) {
                    return;
                }
                if (shownUrls[tab.url]) {
                    return;
                }
                shownUrls[tab.url] = true;
                sortedTabs.push(tab);
            }
        });
        sortedWindows.sort(function (a, b) {
            return b.closedTime - a.closedTime;
        });
        sortedTabs.sort(function (a, b) {
            return b.closedTime - a.closedTime;
        });
        while (sortedTabs.length + sortedWindows.length > MAX_CLOSED_COUNT) {
            if (sortedTabs.length > MAX_CLOSED_TABS_COUNT) {
                sortedTabs.pop();
            } else if (sortedWindows.length > MAX_CLOSED_WINDOWS_COUNT) {
                sortedWindows.pop();
            }
        }
        sorted = sortedTabs.concat(sortedWindows);
        return sorted.map(function (tab) {
            tab = copyObj(tab);
            delete tab.closedWithWindow;
            delete tab.windowId;
            delete tab.closedTime;
            return tab;
        });
    }
    function getClosedTabsForWindow(windowId) {
        var tabs = closedTabs.map(function (tab) {
            return tab;
        });
        return sortClosed(tabs, windowId);
    }
    function requestClosedTabs(tabId, callback) {
        chrome.tabs.get(tabId, function (targetTab) {
            if (chrome.runtime.lastError || !targetTab) {
                ClosedTabs.logger.info("VB tab no exists");
            } else {
                callback(getClosedTabsForWindow(targetTab.windowId));
            }
        });
    }
    function isWatchingUrl(url) {
        return /^(http|ftp)s?:\/\//.test(url);
    }
    function listenTabClose() {
        Tabs.onClosed.addListener(function (tabId, tabData, removeInfo) {
            var url = tabData.urls[tabData.urls.length - 1];
            if (!isWatchingUrl(url)) {
                return;
            }
            closedTabs.unshift({
                id: uuid(),
                url: url,
                title: tabData.title || url,
                favicon: tabData.favIconUrl || Favicons.getChromeIcon(url),
                windowId: tabData.windowId,
                closedTime: Date.now(),
                closedWithWindow: removeInfo.isWindowClosing
            });
            if (!removeInfo.isWindowClosing) {
                notifyUI();
            }
        });
    }
    function listenWindowClose() {
        chrome.windows.onRemoved.addListener(function (windowId) {
            var closedWindowTabs = [];
            closedTabs = closedTabs.filter(function (tab) {
                if (tab.windowId === windowId && tab.closedWithWindow) {
                    closedWindowTabs.push(tab);
                    return false;
                } else {
                    return true;
                }
            });
            var urls = [];
            closedWindowTabs.forEach(function (tab) {
                if (urls.indexOf(tab.url) === -1) {
                    urls.push(tab.url);
                }
            });
            closedTabs.unshift({
                id: CLOSED_WINDOWS_PREFIX + windowId,
                isWindow: true,
                urls: urls,
                closedTime: Date.now()
            });
            notifyUI();
        });
    }
    function setListeners() {
        listenSuspend();
        listenTabClose();
        listenWindowClose();
    }
    loadClosedTabs();
    setListeners();
    return createModule("ClosedTabs", {
        onMessage: function Tabs_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "requestClosedPagesList":
                requestClosedTabs(sender.tab.id, sendResponse);
                return true;
                break;
            case "restoreTab":
                restoreItem(req.id);
                break;
            }
        },
        hasClosed: function Tabs_hasClosed(tabId, callback) {
            requestClosedTabs(tabId, function (tabsList) {
                callback(Boolean(tabsList.length));
            });
        }
    });
}();
