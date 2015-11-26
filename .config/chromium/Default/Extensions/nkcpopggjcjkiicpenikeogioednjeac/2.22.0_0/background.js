window.onerror = function (msg, url, line, symbol, exception) {
    var msgError = msg + " in " + url + " (line: " + line + ", symbol: " + symbol + ", trace:" + (exception && exception.trace) + ")";
    Logger.error(msgError);
    Metrika.param(msg, line + ":" + symbol, {
        module: "Core",
        trace: exception && exception.trace
    });
    if (Settings.get("debug")) {
        alert(msgError);
    } else {
        console.error(msgError);
    }
};
(function () {
    "use strict";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    var processMessagesQueue = [];
    var processAlarmsQueue = [];
    parallel({
        db: function (callback) {
            Database.open(function (err) {
                if (err)
                    throw new DbError(err);
                callback();
            });
        },
        settings: function (callback) {
            Settings.load(callback);
        },
        branding: function (callback) {
            chrome.storage.local.get("brandingId", function (records) {
                var oldBrandPackage = "";
                try {
                    oldBrandPackage = JSON.parse(localStorage["yandex.statistics.brandID"]);
                } catch (ex) {
                }
                callback({
                    "vbch": records.brandingId,
                    "vbchrome": oldBrandPackage
                });
            });
        },
        hasAnother: function (callback) {
            var ids = [
                "nnocenhcebpnchagbafojaflmekcfhfe",
                "fokmmljcdhjdlbcigmognkhaigkkickc",
                "oamfbfpgoecoikonlbjojjchlacmoame",
                "nkcpopggjcjkiicpenikeogioednjeac",
                "gbaboimfhjmdflnpkooeinbpigncgbhp",
                "mhoginfgkdilnncbigagbkpfccbokgib",
                "pchfckkccldkbclgdepkaonamkignanh"
            ].filter(function (id) {
                return id !== chrome.runtime.id;
            });
            chrome.management.getAll(function (items) {
                items = items.filter(function (item) {
                    return item.enabled && ids.indexOf(item.id) >= 0;
                });
                callback(!!items.length);
            });
        }
    }, function (res) {
        if (res.hasAnother) {
            Statistics.sendClickerRequest("system.chromeselfremove");
            chrome.management.uninstallSelf({ showConfirmDialog: false });
            return;
        }
        Logger.info("------------------------ LOG SESSION STARTED ------------------------");
        YCookie.setAppName(Config.constants.ycookie_name);
        Tabs.init();
        Auth.init();
        SearchSuggest.init();
        Advertisement.init();
        sharedData.init({ syncTimeout: 500 });
        InternalStructure.load(function () {
            Primaries.onChanged.addListener(function (isSelected, selectedUI) {
                Statistics.logger.info("Primaries results: %i, %s", Number(isSelected), selectedUI);
                Statistics.enabled = isSelected;
                Statistics.guid = selectedUI;
                Settings.initSendUsageStat();
            });
            chrome.alarms.onAlarm.removeListener(onAlarmListener);
            Migration.start(processAlarmsQueue, res.branding);
            Primaries.setInstallDate(Settings.get("appInstallTime"));
            Primaries.setUninstallURL(Statistics.uninstallRequestURL, Statistics.goodbyePageURL);
            Primaries.setUI(Statistics.guid);
            Primaries.setYasoft("vbch");
            chrome[runtimeNamespace].onMessage.removeListener(onMessageListener);
            processMessagesQueue.forEach(function (msgData) {
                (window.internalMessageListeners || []).forEach(function (onMessageListener) {
                    onMessageListener(msgData.req, msgData.sender, msgData.sendResponse);
                });
            });
            processMessagesQueue.length = 0;
            (window.internalMessageListeners || []).forEach(function (onMessageListener) {
                chrome[runtimeNamespace].onMessage.addListener(onMessageListener);
            });
            delete window.internalMessageListeners;
        });
    });
    chrome.runtime.onInstalled.addListener(function (details) {
    });
    chrome[runtimeNamespace].onMessage.addListener(onMessageListener);
    chrome.alarms.onAlarm.addListener(onAlarmListener);
    function onMessageListener(req, sender, sendResponse) {
        processMessagesQueue.push({
            req: req,
            sender: sender,
            sendResponse: sendResponse
        });
        return true;
    }
    function onAlarmListener(alarmInfo) {
        processAlarmsQueue.push(alarmInfo);
    }
    chrome.alarms.onAlarm.addListener(function (alarmInfo) {
        Logger.info("Run %s alarm: %j", alarmInfo.name, alarmInfo);
    });
    chrome.runtime.onSuspend.addListener(function () {
        Logger.info("Suspending...");
    });
}());
