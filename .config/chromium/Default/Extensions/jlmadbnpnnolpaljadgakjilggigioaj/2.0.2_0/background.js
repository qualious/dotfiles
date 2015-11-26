var shift;

chrome.runtime.onMessage.addListener(function(message) {
    shift = message.shift;
});

chrome.tabs.onCreated.addListener(function(newTab) {
    if (newTab.url == 'chrome://newtab/') {
        return;
    }
    if (typeof newTab.openerTabId == 'undefined') {
        chrome.bookmarks.search(newTab.url, function(bookmarks) {
            if (bookmarks.length > 0) {
                chrome.tabs.update(newTab.id, {
                    active: true
                });
            }
        });
        return;
    }
    if (!shift) {
        chrome.tabs.get(newTab.openerTabId, function(oldTab) {
            chrome.tabs.move(newTab.id, {
                index: oldTab.index + 1
            });
        });
        chrome.tabs.update(newTab.id, {
            active: true
        });
    } else {
        chrome.tabs.move(newTab.id, {
            index: -1
        });
        chrome.tabs.update(newTab.openerTabId, {
            active: true
        });
    }
});