Settings = function () {
    "use strict";
    var LEGACY_SENDSTAT_PREF = "application.tab.opinions.enabled";
    var SHAREDDATA_SENDSTAT_PREF = "application.tab.opinions.enabled";
    var currentPrefs = {};
    var throttlePickupTimeoutId;
    function info() {
        Settings.logger.info.apply(Settings.logger, arguments);
    }
    chrome.storage.onChanged.addListener(function (changes, areaName) {
        for (var key in changes) {
            if (!/^settings\./.test(key))
                continue;
            if (!currentPrefs[key])
                throw new Error("Can't set preference (" + key + ") which was not described in config.js settings part");
            if (currentPrefs[key].storageType !== areaName)
                throw new Error("Preference storage types differ (current: " + currentPrefs[key].storageType + ", new: " + areaName + ")");
            currentPrefs[key].value = changes[key].newValue;
        }
    });
    function sendCloseSettings() {
        if (FrontendHelper) {
            FrontendHelper.action("closeSettings", null);
        }
    }
    chrome.tabs.onActivated.addListener(sendCloseSettings);
    chrome.windows.onFocusChanged.addListener(sendCloseSettings);
    function applySettings(showBookmarks, showSearchForm, showAdvertisement, thumbStyle) {
        var hasChanges = false;
        var ignoreBookmarks;
        if (!Settings.get("showBookmarks") && showBookmarks) {
            ignoreBookmarks = false;
        } else {
            ignoreBookmarks = true;
        }
        if (Settings.get("showBookmarks") !== showBookmarks) {
            Settings.set("showBookmarks", showBookmarks);
            hasChanges = true;
        }
        if (Settings.get("showSearchForm") !== showSearchForm) {
            Settings.set("showSearchForm", showSearchForm);
            hasChanges = true;
        }
        thumbStyle = [
            1,
            2,
            3
        ].indexOf(thumbStyle) === -1 ? 1 : thumbStyle;
        if (Settings.get("uiThumbsType") !== thumbStyle) {
            Settings.set("uiThumbsType", thumbStyle);
            CookieBackup.save();
            hasChanges = true;
        }
        if (Settings.get("showAdvertisement") !== showAdvertisement) {
            Settings.set("showAdvertisement", showAdvertisement);
            notifyTabs("advertisement", showAdvertisement ? Advertisement.getCurrent() : null);
            hasChanges = true;
        }
        if (hasChanges) {
            Thumbs.requestInit(null, ignoreBookmarks);
        }
    }
    function listenSharedData() {
        sharedData.addListener(function (event) {
            var isRemote = event.topic === "yandex.shared.updated.remote";
            var value = event.data[SHAREDDATA_SENDSTAT_PREF];
            if (isRemote && value !== undefined) {
                info("Set sendUsageStat from sharedData to %s", value);
                Settings.set("sendUsageStat", value);
            }
        });
    }
    return createModule("Settings", {
        load: function Settings_load(callback) {
            parallel({
                local: function (callback) {
                    var keys = Object.keys(Config.default_settings_local).map(function (key) {
                        return "settings." + key;
                    });
                    chrome.storage.local.get(keys, callback);
                },
                sync: function (callback) {
                    var keys = Object.keys(Config.default_settings_sync).map(function (key) {
                        return "settings." + key;
                    });
                    chrome.storage.sync.get(keys, callback);
                }
            }, function (settings) {
                [
                    "local",
                    "sync"
                ].forEach(function (storageType) {
                    for (var key in Config["default_settings_" + storageType]) {
                        var storageKey = "settings." + key;
                        var defaultValue = Config["default_settings_" + storageType][key];
                        var isDefault = settings[storageType][storageKey] === undefined;
                        currentPrefs[storageKey] = {
                            value: isDefault ? defaultValue : settings[storageType][storageKey],
                            storageType: storageType,
                            isDefault: isDefault
                        };
                        var sendUsageStat = key === "sendUsageStat" && storageType === "local";
                        if (sendUsageStat && isDefault) {
                            var legacyValue;
                            if (localStorage[LEGACY_SENDSTAT_PREF] !== undefined) {
                                try {
                                    legacyValue = JSON.parse(localStorage[LEGACY_SENDSTAT_PREF]);
                                } catch (ex) {
                                }
                            }
                            if (legacyValue !== undefined) {
                                currentPrefs[storageKey] = {
                                    value: legacyValue,
                                    storageType: storageType,
                                    isDefault: false
                                };
                            }
                        }
                    }
                });
                listenSharedData();
                callback();
            });
        },
        get: function Settings_get(key) {
            key = "settings." + key;
            return currentPrefs[key] ? currentPrefs[key].value : null;
        },
        set: function Settings_set(key, value) {
            key = "settings." + key;
            if (!currentPrefs[key]) {
                throw new Error("Can't set preference (" + key + ") which was not described in config.js settings part");
            }
            currentPrefs[key].value = value;
            currentPrefs[key].isDefault = false;
            var storageData = {};
            storageData[key] = value;
            chrome.storage[currentPrefs[key].storageType].set(storageData);
        },
        hasUserValue: function Settings_hasUserValue(key) {
            key = "settings." + key;
            if (!currentPrefs[key])
                throw new Error("Can't get preference (" + key + ") which was not described in config.js settings part");
            return !currentPrefs[key].isDefault;
        },
        dump: function Settings_dump() {
            var output = {
                local: {},
                sync: {}
            };
            for (var key in currentPrefs)
                output[currentPrefs[key].storageType][key] = currentPrefs[key].value;
            return output;
        },
        syncSendUsageStat: function () {
            sharedData.set(SHAREDDATA_SENDSTAT_PREF, this.get("sendUsageStat"));
        },
        initSendUsageStat: function () {
            var sharedValue = sharedData.get(SHAREDDATA_SENDSTAT_PREF);
            var localValue = this.get("sendUsageStat");
            if (sharedValue !== undefined) {
                if (sharedValue !== localValue) {
                    info("Initially set sendUsageStat from sharedData to %s", sharedValue);
                    this.set("sendUsageStat", sharedValue);
                }
            } else {
                sharedData.set(SHAREDDATA_SENDSTAT_PREF, localValue);
            }
        },
        onMessage: function Settings_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "applySettings":
                applySettings(req.showBookmarks, req.showSearchForm, req.showAdvertisement, req.thumbStyle);
                break;
            case "requestSettings":
                var self = this;
                var output = {
                    showBookmarks: this.get("showBookmarks"),
                    sendStat: this.get("sendUsageStat"),
                    isHomePage: false,
                    showSearchForm: this.get("showSearchForm"),
                    licenseURL: Branding.getXMLDocument("about/product.xml").querySelector("LicenseURL").getAttribute("fx"),
                    copyright: Branding.getXMLDocument("about/product.xml").querySelector("Copyright").getAttribute("fx"),
                    rev: chrome.runtime.getManifest().version,
                    build: Config.buildInfo.revision,
                    buildDate: Config.buildInfo.date,
                    thumbStyle: Settings.get("uiThumbsType") || 1,
                    showAdvertisement: Settings.get("showAdvertisement")
                };
                parallel({
                    bgImages: function (callback) {
                        BackgroundImages.requestList(callback);
                    },
                    selectedBgImage: function (callback) {
                        BackgroundImages.requestCurrentSelected(function (data) {
                            callback(data.id);
                        });
                    }
                }, function (bgImagesData) {
                    copyOwnProperties(bgImagesData, output);
                    sendResponse(output);
                });
                return true;
                break;
            case "applyStatSettings":
                Settings.set("sendUsageStat", req.sendStat);
                Settings.syncSendUsageStat();
                if (req.modal) {
                    chrome.storage.local.set({ statsend: Number(req.sendStat) });
                }
                break;
            }
        }
    });
}();
