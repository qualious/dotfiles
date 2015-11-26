(function (globalScope) {
    "use strict";
    var EVT_SENDSTAT_INIT = "yandex.opinions.init";
    var EVT_SENDSTAT_SYNC = "application.opinions.pref.changed";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    var onChangedListeners = [];
    var pendingExtensions = [];
    var currentSendStatValue;
    function requestAllExtensions(iteratorCallback) {
        chrome.management.getAll(function (list) {
            list.forEach(function (extensionInfo) {
                if (extensionInfo.type !== "extension" || !extensionInfo.enabled || extensionInfo.id === chrome.runtime.id) {
                    return;
                }
                iteratorCallback(extensionInfo);
            });
        });
    }
    function sendPrefChangedData(extensionId) {
        chrome[runtimeNamespace].sendMessage(extensionId, {
            topic: EVT_SENDSTAT_SYNC,
            data: currentSendStatValue
        });
    }
    chrome[runtimeNamespace].onMessageExternal.addListener(function (req, sender, sendResponse) {
        switch (req.topic) {
        case EVT_SENDSTAT_INIT:
            if (currentSendStatValue === undefined) {
                pendingExtensions.push(sender.id);
            } else {
                sendPrefChangedData(sender.id);
            }
            break;
        case EVT_SENDSTAT_SYNC:
            currentSendStatValue = req.data;
            onChangedListeners.forEach(function (callback) {
                callback(currentSendStatValue);
            });
            break;
        }
    });
    var Opinions = {
        set send(value) {
            if (typeof value !== "boolean") {
                throw new TypeError("Opinions send value must be boolean");
            }
            var isFirstTime = currentSendStatValue === undefined;
            currentSendStatValue = value;
            if (isFirstTime) {
                pendingExtensions.forEach(sendPrefChangedData);
                pendingExtensions.length = 0;
                requestAllExtensions(function (extensionInfo) {
                    chrome[runtimeNamespace].sendMessage(extensionInfo.id, {
                        topic: EVT_SENDSTAT_INIT,
                        data: null
                    });
                });
            } else {
                requestAllExtensions(function (extensionInfo) {
                    sendPrefChangedData(extensionInfo.id);
                });
            }
            return value;
        },
        get send() {
            return currentSendStatValue;
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
        define(Opinions);
    } else {
        globalScope.Opinions = Opinions;
    }
}(typeof window !== "undefined" ? window : global));
