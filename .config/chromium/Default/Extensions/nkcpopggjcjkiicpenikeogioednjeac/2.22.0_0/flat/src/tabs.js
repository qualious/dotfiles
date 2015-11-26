(function (globalScope) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([
            "flat/utils",
            "flat/event"
        ], createModule);
    } else {
        globalScope.Tabs = createModule(globalScope.flat.utils, globalScope.flat.Event);
    }
    function createModule(utils, Event) {
        var JS_REDIRECTS_WAIT_MS = 1000;
        var JS_REDIRECTS_WAIT_INACTIVE_MS = 3000;
        var tabs = {};
        function initEmptyTabObject() {
            return {
                urls: [],
                possibleReferrers: [],
                uuid: utils.uuid()
            };
        }
        function populate(windows) {
            windows.forEach(function (window) {
                if (!window.incognito) {
                    window.tabs.forEach(function (tab) {
                        if (!tab || !tab.id || tab.incognito) {
                            return;
                        }
                        var mytab = tabs[tab.id] = initEmptyTabObject();
                        mytab.urls = [tab.url];
                        mytab.status = "complete";
                        mytab.windowId = tab.windowId;
                        mytab.title = tab.title;
                        mytab.favIconUrl = tab.favIconUrl;
                    });
                }
            });
        }
        function isBadReferrer(referrer) {
            return ["chrome://newtab/"].indexOf(referrer) !== -1;
        }
        function onReferrerMessage(message, sender) {
            if (message.topic === "real-referrer" && message.url && sender.tab) {
                var tabId = sender.tab.id;
                tabs[tabId] = tabs[tabId] || initEmptyTabObject();
                tabs[tabId].possibleReferrers.push(message.url);
            }
        }
        function onUpdated(tabId, updateInfo, tabData) {
            if (tabData.incognito) {
                return;
            }
            var url = tabData.url;
            if (updateInfo.status === "loading") {
                tabs[tabId] = tabs[tabId] || initEmptyTabObject();
                var stackRef;
                var possibleRef;
                if (!tabs[tabId].status) {
                    tabs[tabId].urls = [url];
                    var opener = tabs[tabData.openerTabId];
                    if (opener) {
                        stackRef = opener.urls[opener.urls.length - 1];
                        possibleRef = opener.possibleReferrers[opener.possibleReferrers.length - 1];
                        if (stackRef === possibleRef) {
                            tabs[tabId].realRef = stackRef;
                            opener.possibleReferrers.pop();
                        } else {
                            tabs[tabId].realRef = null;
                        }
                    }
                } else if (tabs[tabId].status === "complete") {
                    stackRef = tabs[tabId].urls.pop();
                    possibleRef = tabs[tabId].possibleReferrers.pop();
                    if (stackRef === possibleRef) {
                        tabs[tabId].realRef = stackRef;
                    } else {
                        tabs[tabId].realRef = null;
                    }
                    tabs[tabId].urls = [url];
                    tabs[tabId].possibleReferrers = [];
                    tabs[tabId].navInExistingTab = true;
                } else {
                    if (tabs[tabId].urls.indexOf(url) === -1) {
                        tabs[tabId].urls.push(url);
                    }
                }
                if (isBadReferrer(tabs[tabId].realRef)) {
                    tabs[tabId].realRef = null;
                }
                tabs[tabId].status = "loading";
                if (tabs[tabId].timeout) {
                    clearTimeout(tabs[tabId].timeout);
                }
                delete tabs[tabId].timeout;
            } else if (updateInfo.status === "complete") {
                tabs[tabId] = tabs[tabId] || initEmptyTabObject();
                if (tabs[tabId].urls.indexOf(url) === -1) {
                    tabs[tabId].urls.push(url);
                }
                if (tabs[tabId].timeout) {
                    clearTimeout(tabs[tabId].timeout);
                }
                tabs[tabId].windowId = tabData.windowId;
                tabs[tabId].favIconUrl = tabData.favIconUrl;
                tabs[tabId].title = tabData.title;
                tabs[tabId].status = "loading";
                tabs[tabId].timeout = setTimeout(function (tabId) {
                    if (!tabs[tabId]) {
                        return;
                    }
                    delete tabs[tabId].timeout;
                    tabs[tabId].status = "complete";
                    tabs[tabId].possibleReferrers = [];
                    module.onComplete.dispatchToListener(tabId, tabs[tabId]);
                }.bind(null, tabId), tabData.active ? JS_REDIRECTS_WAIT_MS : JS_REDIRECTS_WAIT_INACTIVE_MS);
            }
        }
        function onRemoved(tabId, removeInfo) {
            if (!tabs[tabId]) {
                return;
            }
            if (tabs[tabId].status === "complete") {
                module.onClosed.dispatchToListener(tabId, tabs[tabId], removeInfo);
            }
            delete tabs[tabId];
        }
        function onReplaced(addedTabId, removedTabId) {
            tabs[addedTabId] = tabs[removedTabId];
            delete tabs[removedTabId];
        }
        var module = {
            inited: false,
            init: function () {
                if (!this.inited) {
                    chrome.windows.getAll({ populate: true }, populate);
                    chrome.tabs.onUpdated.addListener(onUpdated);
                    chrome.tabs.onRemoved.addListener(onRemoved);
                    chrome.tabs.onReplaced.addListener(onReplaced);
                    chrome.runtime.onMessage.addListener(onReferrerMessage);
                    this.inited = true;
                }
            },
            stop: function () {
                chrome.tabs.onUpdated.removeListener(onUpdated);
                chrome.tabs.onRemoved.removeListener(onRemoved);
                chrome.tabs.onReplaced.removeListener(onReplaced);
                chrome.runtime.onMessage.removeListener(onReferrerMessage);
            },
            log: utils.noop,
            getTabInfo: function (tabId) {
                return tabId ? tabs[tabId] : tabs;
            },
            onComplete: new Event("Tabs.onComplete"),
            onClosed: new Event("Tabs.onClosed")
        };
        return module;
    }
}(typeof window !== "undefined" ? window : global));
