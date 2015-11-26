(function (globalScope) {
    "use strict";
    var PROTOCOL_VERSION = 2;
    var ELECTIONS_TIMEOUT_MS = 1500;
    var STORAGE_KEY_OUREXTENSIONS = "flat.primaryselection";
    var BROWSER_SUPPORTS_GOODBYE_PAGES = typeof chrome.runtime.setUninstallURL === "function";
    var EVT_START_WELCOME = "application.welcome";
    var EVT_START_HELLO = "application.hello";
    var EVT_LEGACY_SELECT = "wdgt.primary.select";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    var pendingCallbacks = [];
    var onChangedListeners = [];
    var electionsTimeoutId;
    var isCurrentDataReady = false;
    var installDate;
    var uninstallPageURL;
    var uninstallRequestURL;
    var ui;
    var yasoft;
    chrome[runtimeNamespace].onMessageExternal.addListener(function (req, sender, sendResponse) {
        var isAsyncResponse = false;
        switch (req.topic) {
        case EVT_START_HELLO:
        case EVT_START_WELCOME:
            chrome.storage.local.get(STORAGE_KEY_OUREXTENSIONS, function (records) {
                var ourExtensions = records[STORAGE_KEY_OUREXTENSIONS] || {};
                ourExtensions[req.data.id] = {
                    enabled: true,
                    protocol: req.data.protocol || 0,
                    ui: req.data.ui || "",
                    uninstallUrl: req.data.uninstallUrl,
                    installDate: req.data.installDate || 0
                };
                var saveData = {};
                saveData[STORAGE_KEY_OUREXTENSIONS] = ourExtensions;
                chrome.storage.local.set(saveData, function () {
                    startElections(ourExtensions);
                });
            });
            if (req.topic === EVT_START_WELCOME) {
                return;
            }
            if (isCurrentDataReady) {
                sayHelloToExtension(req.data.id);
            } else {
                isAsyncResponse = true;
                runOnStateReady(function () {
                    sayHelloToExtension(req.data.id);
                });
            }
            break;
        case EVT_LEGACY_SELECT:
            sendResponse(true);
            break;
        }
        return isAsyncResponse;
    });
    chrome.management.onEnabled.addListener(function (extensionInfo) {
        if (extensionInfo.id === chrome.runtime.id) {
            return;
        }
        chrome.storage.local.get(STORAGE_KEY_OUREXTENSIONS, function (records) {
            var ourExtensions = records[STORAGE_KEY_OUREXTENSIONS] || {};
            var saveData = {};
            if (!ourExtensions[extensionInfo.id]) {
                return;
            }
            ourExtensions[extensionInfo.id].enabled = true;
            saveData[STORAGE_KEY_OUREXTENSIONS] = ourExtensions;
            chrome.storage.local.set(saveData, function () {
                startElections(ourExtensions);
            });
        });
    });
    chrome.management.onDisabled.addListener(function (extensionInfo) {
        chrome.storage.local.get(STORAGE_KEY_OUREXTENSIONS, function (records) {
            var ourExtensions = records[STORAGE_KEY_OUREXTENSIONS] || {};
            var saveData = {};
            if (!ourExtensions[extensionInfo.id]) {
                return;
            }
            ourExtensions[extensionInfo.id].enabled = false;
            saveData[STORAGE_KEY_OUREXTENSIONS] = ourExtensions;
            chrome.storage.local.set(saveData, function () {
                startElections(ourExtensions);
            });
        });
    });
    chrome.management.onUninstalled.addListener(function (extensionId) {
        chrome.storage.local.get(STORAGE_KEY_OUREXTENSIONS, function (records) {
            var ourExtensions = records[STORAGE_KEY_OUREXTENSIONS] || {};
            var saveData = {};
            var uninstallURL;
            var ysPartForRemove;
            var uninstalledExt = ourExtensions[extensionId];
            if (!uninstalledExt) {
                return;
            }
            uninstallURL = uninstalledExt.uninstallUrl;
            if (!uninstalledExt.yasoft) {
                uninstalledExt.yasoft = (uninstalledExt.uninstallUrl.match(/yasoft=([\w\-]*)/i) || [])[1];
            }
            if (!uninstalledExt.version) {
                uninstalledExt.version = (uninstalledExt.uninstallUrl.match(/ver=([\d\.]*)/i) || [])[1];
            }
            if (uninstalledExt.yasoft && uninstalledExt.version) {
                ysPartForRemove = uninstalledExt.yasoft + "." + uninstalledExt.version;
            }
            delete ourExtensions[extensionId];
            saveData[STORAGE_KEY_OUREXTENSIONS] = ourExtensions;
            chrome.storage.local.set(saveData, function () {
                startElections(ourExtensions, function (isCurrentSelectedAsPrimary) {
                    if (isCurrentSelectedAsPrimary) {
                        if (ysPartForRemove) {
                            YCookie.deleteCookiePart(ysPartForRemove);
                        }
                        var tmpAnchor = document.createElement("a");
                        tmpAnchor.href = uninstallURL;
                        var hasUI = false;
                        var searchChunks = [];
                        tmpAnchor.search.split("&").forEach(function (searchPart) {
                            if (!searchPart.length) {
                                return;
                            }
                            var chunks = searchPart.split("=", 1);
                            if (chunks[0] !== "ui") {
                                searchChunks.push(searchPart);
                            } else {
                                hasUI = true;
                                searchChunks.push("ui=" + encodeURIComponent(ui));
                            }
                        });
                        if (!hasUI) {
                            searchChunks.push("ui=" + encodeURIComponent(ui));
                        }
                        tmpAnchor.search = searchChunks.join("&");
                        uninstallURL = tmpAnchor.href;
                        var xhr = new XMLHttpRequest();
                        xhr.withCredentials = true;
                        xhr.open("GET", uninstallURL, true);
                        xhr.send();
                    }
                });
            });
        });
    });
    function startElections(ourExtensions, callback) {
        window.clearTimeout(electionsTimeoutId);
        electionsTimeoutId = window.setTimeout(function () {
            var allExtensionsSupportNewProtocol = true;
            var primaryExtensionId;
            var isSelected;
            var selectedUIExtensionId;
            var selectedUI;
            for (var extensionId in ourExtensions) {
                if (ourExtensions[extensionId].protocol < 1) {
                    allExtensionsSupportNewProtocol = false;
                    break;
                }
            }
            if (isCurrentDataReady) {
                ourExtensions[chrome.runtime.id] = {
                    enabled: true,
                    protocol: PROTOCOL_VERSION,
                    ui: ui,
                    uninstallUrl: "",
                    installDate: installDate
                };
            }
            Object.keys(ourExtensions).forEach(function (extensionId) {
                var extensionData = ourExtensions[extensionId];
                if (!extensionData.enabled) {
                    return;
                }
                if (allExtensionsSupportNewProtocol) {
                    if (!primaryExtensionId || extensionData.installDate < ourExtensions[primaryExtensionId].installDate) {
                        primaryExtensionId = extensionId;
                    } else if (ourExtensions[primaryExtensionId].installDate === extensionData.installDate && extensionId < primaryExtensionId) {
                        primaryExtensionId = extensionId;
                    }
                } else {
                    if (!primaryExtensionId || extensionId < primaryExtensionId) {
                        primaryExtensionId = extensionId;
                    }
                }
            });
            Object.keys(ourExtensions).forEach(function (extensionId) {
                var extensionData = ourExtensions[extensionId];
                if (!extensionData.ui) {
                    return;
                }
                if (!selectedUIExtensionId || extensionData.installDate < ourExtensions[selectedUIExtensionId].installDate) {
                    selectedUIExtensionId = extensionId;
                }
            });
            isSelected = primaryExtensionId === chrome.runtime.id;
            selectedUI = selectedUIExtensionId ? ourExtensions[selectedUIExtensionId].ui : "";
            ui = selectedUI;
            onChangedListeners.forEach(function (callback) {
                callback(isSelected, selectedUI);
            });
            if (callback) {
                callback(isSelected, selectedUI);
            }
        }, ELECTIONS_TIMEOUT_MS);
    }
    function sayHelloToExtension(extensionId) {
        var uninstallUrl = BROWSER_SUPPORTS_GOODBYE_PAGES && uninstallPageURL ? "" : uninstallRequestURL;
        chrome[runtimeNamespace].sendMessage(extensionId, {
            topic: EVT_START_HELLO,
            data: {
                id: chrome.runtime.id,
                enabled: true,
                protocol: PROTOCOL_VERSION,
                ui: ui,
                version: chrome.runtime.getManifest().version,
                yasoft: yasoft,
                uninstallUrl: uninstallUrl || "",
                installDate: installDate
            }
        });
    }
    function runOnStateReady(callback) {
        if (isCurrentDataReady) {
            callback();
        } else {
            pendingCallbacks.push(callback);
        }
    }
    function onCurrentPropertySet() {
        var uninstallDataSet = uninstallRequestURL !== undefined || uninstallPageURL !== undefined;
        if (uninstallDataSet && installDate !== undefined && ui !== undefined && yasoft !== undefined) {
            isCurrentDataReady = true;
            pendingCallbacks.forEach(function (callback) {
                callback();
            });
            pendingCallbacks.length = 0;
            chrome.storage.local.get(STORAGE_KEY_OUREXTENSIONS, function (records) {
                var ourExtensions = records[STORAGE_KEY_OUREXTENSIONS] || {};
                startElections(ourExtensions);
            });
        }
    }
    runOnStateReady(function () {
        chrome.management.getAll(function (list) {
            list.forEach(function (extensionInfo) {
                if (extensionInfo.type !== "extension" || !extensionInfo.enabled || extensionInfo.id === chrome.runtime.id) {
                    return;
                }
                sayHelloToExtension(extensionInfo.id);
            });
        });
    });
    var Primaries = {
        setYasoft: function (value) {
            yasoft = value;
            onCurrentPropertySet();
        },
        setInstallDate: function Primaries_setInstallDate(ts) {
            installDate = ts;
            onCurrentPropertySet();
        },
        setUI: function Primaries_setUI(currentUI) {
            ui = currentUI;
            onCurrentPropertySet();
        },
        setUninstallURL: function Primaries_setUninstallURL(requestURL, pageURL) {
            if (requestURL) {
                uninstallRequestURL = requestURL;
            }
            if (pageURL) {
                uninstallPageURL = pageURL;
            }
            if (BROWSER_SUPPORTS_GOODBYE_PAGES && uninstallPageURL) {
                chrome.runtime.setUninstallURL(uninstallPageURL);
            }
            onCurrentPropertySet();
        },
        onChanged: {
            addListener: function Opinions_onChanged_addListener(callback) {
                if (!this.hasListener(callback)) {
                    onChangedListeners.push(callback);
                }
            },
            removeListener: function Opinions_onChanged_removeListener(callback) {
                var index = onChangedListeners.indexOf(callback);
                if (index !== -1) {
                    onChangedListeners.splice(index, 1);
                }
            },
            hasListener: function Opinions_onChanged_hasListener(callback) {
                return onChangedListeners.indexOf(callback) !== -1;
            }
        }
    };
    if (typeof define === "function" && define.amd) {
        define(Primaries);
    } else {
        globalScope.Primaries = Primaries;
    }
}(typeof window !== "undefined" ? window : global));
