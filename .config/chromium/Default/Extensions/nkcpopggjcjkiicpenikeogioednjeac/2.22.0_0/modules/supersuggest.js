SuperSuggest = function () {
    "use strict";
    var tabs = [];
    var tmpTabs = [];
    function onTabCreated(tab) {
        tmpTabs.push(tab);
    }
    function navigateURLWithReferer(url, navigateCode, tabId) {
        switch (navigateCode) {
        case 1:
            chrome.tabs.update(tabId, { url: url });
            tabs.push(tabId);
            break;
        case 2:
            chrome.tabs.onCreated.addListener(onTabCreated);
            chrome.windows.create({ url: url }, function (windowElem) {
                chrome.tabs.onCreated.removeListener(onTabCreated);
                tmpTabs.forEach(function (tab) {
                    if (tab.windowId === windowElem.id) {
                        tabs.push(tab.id);
                    }
                });
                tmpTabs.length = 0;
            });
            break;
        case 3:
            chrome.tabs.create({ url: url }, function (tab) {
                tabs.push(tab.id);
            });
            break;
        }
    }
    function isRefererChangeNeeded(tabId) {
        var index = tabs.indexOf(tabId);
        if (index === -1)
            return false;
        tabs.splice(index, 1);
        return true;
    }
    return createModule("SuperSuggest", {
        onMessage: function SuperSuggest_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "navigateURLWithReferer":
                sender.tab && navigateURLWithReferer(req.url, req.code, sender.tab.id);
                break;
            case "contentScriptInjected":
                if (sender.tab) {
                    var brandingLogoURL = Branding.getXMLDocument("fastdial/config.xml").querySelector("logo").getAttribute("url");
                    brandingLogoURL = Branding.expandURL(brandingLogoURL);
                    try {
                        sendResponse({
                            referer: brandingLogoURL,
                            needsWrite: isRefererChangeNeeded(sender.tab.id)
                        });
                    } catch (e) {
                    }
                }
                break;
            }
        }
    });
}();
