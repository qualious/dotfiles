window.vb = function () {
    function typesCheck(args, types) {
        for (var i = 0; i < types.length; i++) {
            if (types[i] !== null && typeof args[i] !== types[i]) {
                throw new TypeError("Wrong value passed: " + args[i] + ", expected: " + types[i]);
            }
        }
    }
    function sendMessage(data, callback) {
        chrome.runtime.sendMessage(data, callback);
    }
    var browserInfo = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return [
                "IE ",
                tem[1] || ""
            ];
        }
        M = M[2] ? [
            M[1],
            M[2]
        ] : [
            navigator.appName,
            navigator.appVersion,
            "-?"
        ];
        if ((tem = ua.match(/version\/(\d+)/i)) != null)
            M.splice(1, 1, tem[1]);
        return M;
    }();
    var listeners = {};
    var i18n = {};
    var api = {
        navigator: function () {
            switch (browserInfo[0]) {
            case "Chrome":
                return "chromium";
            case "Firefox":
                return "firefox";
            default:
                return "ie";
            }
        }(),
        navigatorMajorVersion: browserInfo[1],
        osName: function () {
            if (navigator.appVersion.indexOf("Win") !== -1)
                return "windows";
            else if (navigator.appVersion.indexOf("Mac") !== -1)
                return "mac";
            else
                return "linux";
        }(),
        locale: "ru",
        getLocalizedString: function (key) {
            typesCheck(arguments, ["string"]);
            if (!i18n || typeof i18n[key] === "undefined")
                throw new Error("Unknown i18n key: " + key);
            return i18n[key];
        },
        requestSettings: function (callback) {
            typesCheck(arguments, ["function"]);
            sendMessage({ action: "requestSettings" }, callback);
        },
        setBackgroundImage: function (bgImageId) {
            typesCheck(arguments, ["string"]);
            sendMessage({
                action: "setBackgroundImage",
                id: bgImageId
            });
        },
        pinThumb: function (index) {
            typesCheck(arguments, ["number"]);
            sendMessage({
                action: "pinThumb",
                index: index
            });
        },
        unpinThumb: function (index) {
            typesCheck(arguments, ["number"]);
            sendMessage({
                action: "unpinThumb",
                index: index
            });
        },
        apps: {
            requestList: function (callback) {
                typesCheck(arguments, ["function"]);
                sendMessage({ action: "requestAppsList" }, callback);
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
            sendMessage({ action: "requestClosedPagesList" }, callback);
        },
        restoreTab: function (id) {
            typesCheck(arguments, ["string"]);
            sendMessage({
                action: "restoreTab",
                id: id
            });
        },
        requestLastVisited: function (offset, callback) {
            typesCheck(arguments, [
                "number",
                "function"
            ]);
            sendMessage({
                action: "requestLastVisited",
                offset: offset
            }, callback);
        },
        requestPopularSites: function (offset, callback) {
            typesCheck(arguments, [
                "number",
                "function"
            ]);
            sendMessage({
                action: "requestPopularSites",
                offset: offset
            }, callback);
        },
        requestThumbData: function (url) {
            typesCheck(arguments, ["string"]);
            sendMessage({
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
            sendMessage({
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
            sendMessage({
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
            sendMessage({
                action: "saveThumb",
                index: index,
                data: data
            });
        },
        removeThumb: function (index) {
            typesCheck(arguments, ["number"]);
            sendMessage({
                action: "removeThumb",
                index: index
            });
        },
        setThumbsCount: function (count) {
            typesCheck(arguments, ["number"]);
            sendMessage({
                action: "setThumbsCount",
                count: count
            });
        },
        restoreThumbs: function (thumbs) {
            typesCheck(arguments, ["object"]);
            sendMessage({
                action: "restoreThumbs",
                thumbs: thumbs
            });
        },
        swapThumbs: function (oldIndex, newIndex) {
            typesCheck(arguments, [
                "number",
                "number"
            ]);
            sendMessage({
                action: "swapThumbs",
                oldIndex: oldIndex,
                newIndex: newIndex
            });
        },
        requestInit: function () {
            sendMessage({ action: "init" });
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
                sendMessage({
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
            sendMessage({
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
            sendMessage({
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
            sendMessage({
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
            sendMessage({
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
                ].indexOf(windowName) === -1) {
                throw new Error("Wrong window name used");
            }
            chrome.tabs.create({ url: "chrome://" + windowName });
        },
        stat: function (param) {
            typesCheck(arguments, ["string"]);
            sendMessage({
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
                sendMessage({
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
                    sendMessage({
                        action: action,
                        query: query
                    }, function (response) {
                        callback(response.query, response.source, response.data);
                    });
                });
                if (words.length > 1) {
                    words.forEach(function (word) {
                        sendMessage({
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
        },
        onLinkClicked: function (url) {
        },
        scrollInfo: function (pageHasVerticalScroll) {
            sendMessage({
                action: "setScrollState",
                value: pageHasVerticalScroll
            });
        },
        advertisement: {
            refuse: function (timeout) {
                sendMessage({
                    action: "Advertisement.refuse",
                    timeout: timeout
                });
            },
            hide: function (timeout) {
                sendMessage({
                    action: "Advertisement.hide",
                    timeout: timeout
                });
            },
            getLocalizedString: function (key, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                sendMessage({
                    action: "Advertisement.getLocalizedString",
                    key: key
                }, callback);
            },
            getLocalizedURL: function (key, callback) {
                typesCheck(arguments, [
                    "string",
                    "function"
                ]);
                sendMessage({
                    action: "Advertisement.getLocalizedURL",
                    key: key
                }, callback);
            },
            openYandexBrowser: function (url) {
            },
            stat: function (param) {
                sendMessage({
                    action: "Advertisement.stat",
                    param: param
                });
            },
            setYandexAsHomePage: function () {
                sendMessage({ action: "AdvStartpageSearch.setYandexAsHomePage" });
            },
            setYandexAsCurrentSearchEngine: function () {
                sendMessage({ action: "AdvStartpageSearch.setYandexAsCurrentSearchEngine" });
            }
        },
        auth: {
            login: function (userId) {
                sendMessage({
                    action: "Auth.login",
                    userId: userId
                });
            },
            logout: function () {
                sendMessage({ action: "Auth.logout" });
            },
            openPassport: function () {
                sendMessage({
                    action: "Auth.navigate",
                    type: "passport"
                });
            },
            openTune: function () {
                sendMessage({
                    action: "Auth.navigate",
                    type: "tune"
                });
            }
        }
    };
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.type === "init" && message.data.i18n) {
            i18n = message.data.i18n;
            api.locale = i18n["@@ui_locale"];
        }
        if (Object.keys(i18n).length) {
            (listeners[message.type] || []).forEach(function (callback) {
                callback(message.data);
            });
        }
    });
    return api;
}();
