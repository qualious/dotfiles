Bookmarks = function () {
    "use strict";
    function getTree(callback) {
        chrome.bookmarks.getTree(function (treeNode) {
            var panelBookmarks = treeNode[0].children[0].children;
            callback(beautifyBookmarks(panelBookmarks));
        });
    }
    function getChildren(branchId, callback) {
        chrome.bookmarks.getSubTree(branchId, function (treeNode) {
            callback(beautifyBookmarks(treeNode[0].children));
        });
    }
    function getAll(callback) {
        chrome.bookmarks.getTree(function (treeNode) {
            var panelBookmarks = treeNode[0].children;
            var result = [];
            (function getSubItems(items) {
                items.forEach(function (item) {
                    if (item.children) {
                        getSubItems(item.children);
                    } else {
                        result.push(item);
                    }
                });
            }(panelBookmarks));
            callback(beautifyBookmarks(result));
        });
    }
    function beautifyBookmarks(bookmarks) {
        if (!bookmarks) {
            return [];
        }
        return bookmarks.map(function (bookmark) {
            return {
                favicon: Favicons.getChromeIcon(bookmark.url),
                url: bookmark.url,
                title: bookmark.title,
                id: bookmark.id,
                isFolder: bookmark.children ? true : false
            };
        });
    }
    [
        "onCreated",
        "onRemoved",
        "onChanged",
        "onMoved",
        "onChildrenReordered",
        "onImportEnded"
    ].forEach(function (eventName) {
        chrome.bookmarks[eventName].addListener(function () {
            getTree(function (panel) {
                notifyTabs("bookmarksStateChanged", panel);
            });
        });
    });
    return createModule("Bookmarks", {
        onMessage: function Bookmarks_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "requestBookmarksBranch":
                this.requestBranch(req.id, sendResponse);
                return true;
                break;
            }
        },
        requestBranch: function Bookmarks_requestBranch(branchId, callback) {
            if (branchId === 0) {
                getTree(callback);
            } else {
                getChildren(branchId, callback);
            }
        },
        requestAll: function Bookmarks_requestAll(callback) {
            getAll(callback);
        }
    });
}();
