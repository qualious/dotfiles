(function () {
    function typesCheck(args, types) {
        for (var i = 0; i < types.length; i++) {
            if (types[i] !== null && typeof args[i] !== types[i]) {
                throw new TypeError("Wrong value passed: " + args[i] + ", expected: " + types[i]);
            }
        }
    }
    var listeners = {};
    var i18n = {};
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    var selfTabId;
    var api = {
        navigator: "chromium",
        get navigatorMajorVersion() {
            var position = navigator.userAgent.indexOf("Chrome");
            var version = navigator.userAgent.substring(position + 7).split(".")[0];
            delete this.navigatorMajorVersion;
            return this.navigatorMajorVersion = parseInt(version, 10);
        },
        get osName() {
            var osName;
            if (navigator.appVersion.indexOf("Win") !== -1)
                osName = "windows";
            else if (navigator.appVersion.indexOf("Mac") !== -1)
                osName = "mac";
            else
                osName = "linux";
            delete this.osName;
            return this.osName = osName;
        },
        get locale() {
            return chrome.i18n.getMessage("@@ui_locale").split("_")[0];
        },
        getLocalizedString: function (key) {
            typesCheck(arguments, ["string"]);
            if (!i18n || typeof i18n[key] === "undefined")
                throw new Error("Unknown i18n key: " + key);
            return i18n[key];
        },
        requestSettings: function (callback) {
            typesCheck(arguments, ["function"]);
            chrome[runtimeNamespace].sendMessage({ action: "requestSettings" }, callback);
        },
        setBackgroundImage: function (bgImageId) {
            typesCheck(arguments, ["string"]);
            chrome[runtimeNamespace].sendMessage({
                action: "setBackgroundImage",
                id: bgImageId
            });
        },
        pinThumb: function (index) {
            typesCheck(arguments, ["number"]);
            chrome[runtimeNamespace].sendMessage({
                action: "pinThumb",
                index: index
            });
        },
        unpinThumb: function (index) {
            typesCheck(arguments, ["number"]);
            chrome[runtimeNamespace].sendMessage({
                action: "unpinThumb",
                index: index
            });
        },
        apps: {
            requestList: function (callback) {
                typesCheck(arguments, ["function"]);
                chrome[runtimeNamespace].sendMessage({ action: "requestAppsList" }, callback);
            },
            launch: function (id) {
                typesCheck(arguments, ["string"]);
                chrome.management.launchApp(id);
            },
            uninstall: function (id, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                chrome.management.uninstall(id, callback);
            }
        },
        requestClosedPagesList: function (callback) {
            typesCheck(arguments, ["function"]);
            chrome[runtimeNamespace].sendMessage({ action: "requestClosedPagesList" }, callback);
        },
        restoreTab: function (id) {
            typesCheck(arguments, ["string"]);
            chrome[runtimeNamespace].sendMessage({
                action: "restoreTab",
                id: id
            });
        },
        requestLastVisited: function (offset, callback) {
            typesCheck(arguments, [
                "number",
                "function"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "requestLastVisited",
                offset: offset
            }, callback);
        },
        requestPopularSites: function (offset, callback) {
            typesCheck(arguments, [
                "number",
                "function"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "requestPopularSites",
                offset: offset
            }, callback);
        },
        requestThumbData: function (url) {
            typesCheck(arguments, ["string"]);
            chrome[runtimeNamespace].sendMessage({
                action: "requestThumbData",
                url: url
            });
        },
        applySettings: function (showBookmarks, showSearchForm, showAdvertisement, thumbStyle) {
            typesCheck(arguments, [
                "boolean",
                "boolean",
                "boolean",
                "number"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "applySettings",
                showBookmarks: showBookmarks,
                showSearchForm: showSearchForm,
                showAdvertisement: showAdvertisement,
                thumbStyle: thumbStyle
            });
        },
        setSendStatistics: function (sendStat, isModalChoice) {
            typesCheck(arguments, [
                "boolean",
                "boolean"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "applyStatSettings",
                sendStat: sendStat,
                modal: isModalChoice
            });
        },
        saveThumb: function (index, data) {
            typesCheck(arguments, [
                "number",
                "object"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "saveThumb",
                index: index,
                data: data
            });
        },
        removeThumb: function (index) {
            typesCheck(arguments, ["number"]);
            chrome[runtimeNamespace].sendMessage({
                action: "removeThumb",
                index: index
            });
        },
        setThumbsCount: function (count) {
            typesCheck(arguments, ["number"]);
            chrome[runtimeNamespace].sendMessage({
                action: "setThumbsCount",
                count: count
            });
        },
        restoreThumbs: function (thumbs) {
            typesCheck(arguments, ["object"]);
            chrome[runtimeNamespace].sendMessage({
                action: "restoreThumbs",
                thumbs: thumbs
            });
        },
        swapThumbs: function (oldIndex, newIndex) {
            typesCheck(arguments, [
                "number",
                "number"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "swapThumbs",
                oldIndex: oldIndex,
                newIndex: newIndex
            });
        },
        requestInit: function () {
            chrome[runtimeNamespace].sendMessage({ action: "init" });
        },
        uploadUserBackground: function (callback) {
            function handleErr(err) {
                throw err;
            }
            function onChange() {
                input.onchange = null;
                var file = this.files[0];
                var URL = window.URL || window.webkitURL;
                if (!file) {
                    callback("");
                }
                var objectURL = URL.createObjectURL(file);
                chrome[runtimeNamespace].sendMessage({
                    action: "uploadUserBackground",
                    url: objectURL
                }, function (newImageURL) {
                    URL.revokeObjectURL(objectURL);
                    callback(newImageURL);
                });
            }
            var input = document.querySelector(".b-select-theme__input");
            input.onchange = onChange;
            input.click();
        },
        requestBookmarksBranch: function (id, callback) {
            typesCheck(arguments, [
                "string",
                "function"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "requestBookmarksBranch",
                id: id
            }, callback);
        },
        openThumb: function (url, index, navigateCode) {
            typesCheck(arguments, [
                "string",
                "number",
                "number"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "openThumb",
                url: url,
                index: index,
                navigateCode: navigateCode
            });
        },
        openSpeculativeConnect: function (url) {
        },
        navigateUrlWithReferer: function (url, navigateCode) {
            typesCheck(arguments, [
                "string",
                "number"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "navigateURLWithReferer",
                url: url,
                code: navigateCode
            });
        },
        setAsHomePage: function () {
        },
        log: function (level, msg, url, line, trace) {
            typesCheck(arguments, [
                "string",
                "string"
            ]);
            chrome[runtimeNamespace].sendMessage({
                action: "logFrontendData",
                level: level,
                msg: msg,
                url: url,
                line: line,
                trace: trace
            });
        },
        openExternalWindow: function (windowName) {
            typesCheck(arguments, ["string"]);
            if ([
                    "bookmarks",
                    "history",
                    "downloads"
                ].indexOf(windowName) === -1)
                throw new Error("Wrong window name used");
            chrome.tabs.create({ url: "chrome://" + windowName });
        },
        stat: function (param) {
            typesCheck(arguments, ["string"]);
            chrome[runtimeNamespace].sendMessage({
                action: "sendFrontendStat",
                param: param
            });
        },
        logError: function (msg, url, line, trace) {
        },
        search: {
            suggest: function (query, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                chrome[runtimeNamespace].sendMessage({
                    action: "searchMain",
                    query: query
                }, callback);
            },
            suggestURLs: function (query, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                query = query.trim().toLowerCase().replace(/^https?:\/\/(www\.)?/, "");
                if (query === "") {
                    return;
                }
                var words = query.split(/\s+/);
                [
                    "searchWeb",
                    "searchHistory",
                    "searchBookmarks",
                    "searchOpenedTabs"
                ].forEach(function (action) {
                    chrome[runtimeNamespace].sendMessage({
                        action: action,
                        query: query
                    }, function (response) {
                        callback(response.query, response.source, response.data);
                    });
                });
                if (words.length > 1) {
                    words.forEach(function (word) {
                        chrome[runtimeNamespace].sendMessage({
                            action: "searchWeb",
                            query: query,
                            word: word
                        }, function (response) {
                            callback(response.query, response.source, response.data);
                        });
                    });
                }
            },
            suppressTutorial: function () {
            },
            useExample: function (query) {
            },
            requestAlternativeEngines: function (callback) {
            }
        },
        onRequest: {
            addListener: function (command, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                if (this.hasListener(command, callback))
                    return false;
                listeners[command] = listeners[command] || [];
                listeners[command].push(callback);
            },
            removeListener: function (command, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                listeners[command] = listeners[command] || [];
                var index = listeners[command].indexOf(callback);
                if (index !== -1) {
                    listeners[command].splice(index, 1);
                }
            },
            hasListener: function (command, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                return listeners[command] && listeners[command].indexOf(callback) !== -1;
            }
        },
        onContextmenu: function (thumbId, state, thumbData) {
            typesCheck(arguments, [
                "number",
                "number"
            ]);
            contextMenu.setMenuItem(thumbId, state, thumbData);
        },
        onLinkClicked: function (url) {
        },
        scrollInfo: function (pageHasVerticalScroll) {
            chrome[runtimeNamespace].sendMessage({
                action: "setScrollState",
                value: pageHasVerticalScroll
            });
        },
        advertisement: {
            refuse: function (timeout) {
                chrome[runtimeNamespace].sendMessage({
                    action: "Advertisement.refuse",
                    timeout: timeout
                });
            },
            hide: function (timeout) {
                chrome[runtimeNamespace].sendMessage({
                    action: "Advertisement.hide",
                    timeout: timeout
                });
            },
            getLocalizedString: function (key, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                chrome[runtimeNamespace].sendMessage({
                    action: "Advertisement.getLocalizedString",
                    key: key
                }, callback);
            },
            getLocalizedURL: function (key, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                chrome[runtimeNamespace].sendMessage({
                    action: "Advertisement.getLocalizedURL",
                    key: key
                }, callback);
            },
            openYandexBrowser: function (url) {
            },
            stat: function (param) {
                chrome[runtimeNamespace].sendMessage({
                    action: "Advertisement.stat",
                    param: param
                });
            },
            setYandexAsHomePage: function () {
                chrome[runtimeNamespace].sendMessage({ action: "AdvStartpageSearch.setYandexAsHomePage" });
            },
            setYandexAsCurrentSearchEngine: function () {
                chrome[runtimeNamespace].sendMessage({ action: "AdvStartpageSearch.setYandexAsCurrentSearchEngine" });
            }
        },
        auth: {
            login: function (userId) {
                chrome[runtimeNamespace].sendMessage({
                    action: "Auth.login",
                    userId: userId
                });
            },
            logout: function () {
                chrome[runtimeNamespace].sendMessage({ action: "Auth.logout" });
            },
            openPassport: function () {
                chrome[runtimeNamespace].sendMessage({
                    action: "Auth.navigate",
                    type: "passport"
                });
            },
            openTune: function () {
                chrome[runtimeNamespace].sendMessage({
                    action: "Auth.navigate",
                    type: "tune"
                });
            }
        }
    };
    chrome[runtimeNamespace].onMessage.addListener(function (message, sender, sendResponse) {
        if (message.type === "init" && message.data.i18n) {
            i18n = message.data.i18n;
            selfTabId = message.data.tabId;
        }
        if (Object.keys(i18n).length) {
            (listeners[message.type] || []).forEach(function (callback) {
                callback(message.data);
            });
        }
    });
    window.vb = api;
    api.onRequest.addListener("post", function (data) {
        var form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("action", data.url);
        var params = data.params;
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);
                form.appendChild(hiddenField);
            }
        }
        document.body.appendChild(form);
        form.submit();
    });
    chrome[runtimeNamespace].sendMessage({
        action: "logFrontendStat",
        param: "show"
    });
    var contextMenu = function () {
        "use strict";
        var URL_PATTERNS = ["chrome-extension://" + chrome.runtime.id + "/layout/newtab.html"];
        var OVER_BG = 1;
        var OVER_THUMB = 2;
        var ITEM_ID = "1";
        var noop = function () {
        };
        var itemData = {};
        function storeItemData(options) {
            if (chrome.runtime.lastError) {
                return;
            }
            itemData.type = options.type;
            itemData.thumbId = options.thumbId;
            itemData.isFilled = options.isFilled;
        }
        function removeItem(callback) {
            callback = callback || noop;
            chrome.contextMenus.removeAll(function () {
                itemData = {};
                callback();
            });
        }
        function getItemDetails(title, id) {
            var result = {
                type: "normal",
                contexts: ["all"],
                documentUrlPatterns: URL_PATTERNS,
                title: title
            };
            if (id) {
                result.id = id;
            }
            return result;
        }
        function setItem(options) {
            var title = api.getLocalizedString(options.title);
            var cb = storeItemData.bind(null, options);
            chrome.contextMenus.create(getItemDetails(title, ITEM_ID), cb);
            chrome.contextMenus.update(ITEM_ID, getItemDetails(title), cb);
        }
        chrome.contextMenus.onClicked.addListener(function (data, tab) {
            if (tab.id !== selfTabId) {
                return;
            }
            var msgBody = {
                action: "frontend.action",
                tabId: tab.id
            };
            if (itemData.type === OVER_BG) {
                msgBody.type = "openSettings";
                msgBody.thumbId = null;
                chrome[runtimeNamespace].sendMessage(msgBody);
                api.stat("contextmenu.setbgclick");
            }
            if (itemData.type === OVER_THUMB) {
                msgBody.type = "editThumb";
                msgBody.thumbId = itemData.thumbId;
                chrome[runtimeNamespace].sendMessage(msgBody);
                api.stat("contextmenu." + (itemData.isFilled ? "setthumb" : "addthumbclick"));
            }
        });
        return {
            setMenuItem: function (thumbId, state, thumbData) {
                if (state !== 0) {
                    removeItem();
                    return;
                }
                if (thumbId >= 0) {
                    var isFilled = thumbData && thumbData.url;
                    setItem({
                        title: isFilled ? "contextmenu.editThumb" : "contextmenu.addThumb",
                        type: OVER_THUMB,
                        thumbId: thumbId,
                        isFilled: isFilled
                    });
                    api.stat("contextmenu.cmshow");
                } else if (thumbId === -1) {
                    setItem({
                        title: "contextmenu.openSettings",
                        type: OVER_BG,
                        thumbId: null
                    });
                    api.stat("contextmenu.cmshow");
                } else {
                    removeItem();
                }
            }
        };
    }();
}());
