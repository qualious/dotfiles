Advertisement = function () {
    function info() {
        Advertisement.logger.info.apply(Advertisement.logger, arguments);
    }
    var ALARM_REFUSE_NAME = "advertisement-refuse";
    var ALARM_NEWBG_CHECK = "advertisement-newbg-check";
    var ALARM_SETBG_CHECK = "advertisement-setbg-check";
    var CLOUD_CONFIG_DEV_URL = "https://download.cdn.yandex.net/bar/vb/ad.json";
    var CLOUD_CONFIG_URL = "https://download.cdn.yandex.net/bar/vb/ad.json";
    var blockStatMap = {
        defaults: {
            show: "show",
            close: "close",
            timeoutclose: "timeoutclose"
        },
        vbadbbdoc: {
            show: "adbbinstall",
            close: "installclose",
            timeoutclose: "installtime"
        },
        vbadbbnewverrun: {
            show: "adbbinstall",
            close: "installclose",
            timeoutclose: "installtime"
        }
    };
    var newBlock = {
        lastShown: 0,
        triggered: false,
        refuseCount: 0,
        shownCount: 0
    };
    function setYBFilesListener(isWin) {
        if (isWin) {
            info("Attached YB files listener");
            chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
                if (commonAdvertisement.isFileForYB(details.url)) {
                    Advertisement.triggered("vbadbbdoc");
                }
            });
        } else {
            info("NOT attached YB files listener");
        }
    }
    function getStatParam(blockId, param) {
        var value = blockStatMap[blockId] && blockStatMap[blockId][param];
        var defaultValue = blockStatMap["defaults"][param];
        return value || defaultValue;
    }
    var state = { blocks: {} };
    chrome.runtime.onSuspend.addListener(saveState);
    function saveState() {
        Settings.set("advertisementState", state);
    }
    function loadState() {
        state = Settings.get("advertisementState");
        info("State loaded %j", state);
    }
    function updateCommonAdvertisement() {
        var cloudConfig = Settings.get("advertisementConfig");
        if (cloudConfig && cloudConfig.ads) {
            commonAdvertisement.setConfig({
                cloudData: cloudConfig,
                locale: getCurrentLocale(true),
                brandId: Branding.id
            });
        }
    }
    function updateCloudConfig() {
        var url = Settings.get("debug") ? CLOUD_CONFIG_DEV_URL : CLOUD_CONFIG_URL;
        info("Loading cloud config from %s", url);
        loadResource({
            url: url,
            timeout: 10000,
            onload: function (evt) {
                var responseText = evt.target.responseText;
                try {
                    var json = JSON.parse(responseText);
                } catch (ex) {
                    Advertisement.logger.error("Not valid JSON: %s", responseText);
                }
                if (!json || !json.ads) {
                    Advertisement.logger.error("Not valid response: %s", responseText);
                    return;
                }
                info("Cloud config loaded %j", json);
                Settings.set("advertisementConfig", json);
                updateCommonAdvertisement();
                for (var key in json.ads) {
                    if (key === "vbadbbnewver") {
                        continue;
                    }
                    if (!state.blocks[key]) {
                        state.blocks[key] = copyObj(newBlock);
                    }
                }
                saveState();
                key = "vbadbbnewverrun";
                if (json.ads[key] && json.ads[key].enabled) {
                    Advertisement.triggered(key);
                }
            },
            onerror: function (evt) {
                Advertisement.logger.error("Couldn't load %s, error: %s", CLOUD_CONFIG_URL, evt.type);
            }
        });
    }
    function close(notify) {
        if (hasVisibleBlock()) {
            state.refused = true;
            saveState();
            if (notify !== false) {
                notifyTabs("advertisement", null);
            }
        }
    }
    function closeByTimeout(notify) {
        if (hasVisibleBlock()) {
            info("Close block by timeout: %s", state.lastShownBlockId);
            sendClickerRequest(getStatParam(state.lastShownBlockId, "timeoutclose"));
            close(notify);
        }
    }
    function firstShow(id) {
        recreateRefuseAlarm();
        info("First show of block %s", id);
        updateStateForFirstShow(id);
        sendClickerRequest(getStatParam(id, "show"));
    }
    function updateStateForFirstShow(id) {
        state.lastShownBlockId = id;
        state.refused = false;
        state.blocks[id].lastShown = Date.now();
        state.blocks[id].shownCount++;
        state.blocks[id].triggered = false;
    }
    function recreateRefuseAlarm() {
        chrome.alarms.create(ALARM_REFUSE_NAME, { delayInMinutes: Math.ceil(commonAdvertisement.getSilentPeriodMs() / (60 * 1000)) });
    }
    function hasVisibleBlock() {
        return state && state.lastShownBlockId && !state.refused;
    }
    function sendClickerRequest(param, blockId) {
        if (state.lastShownBlockId) {
            Statistics.sendClickerRequest({
                pid: 12,
                cid: 72582,
                path: [
                    "chrome",
                    getVersionForStat(),
                    blockId || state.lastShownBlockId,
                    param
                ].join("."),
                ignoreVersion: true
            });
        }
    }
    function sendStatIfBgSelected(blockId) {
        var isSelected = blockId === "newbackground" ? BackgroundImages.isCurrentFromAdv() : BackgroundImages.isCurrentFromCloud();
        if (isSelected) {
            info("New bg selected from adv: " + blockId);
            sendClickerRequest("backchanged", blockId);
        }
    }
    return createModule("Advertisement", {
        init: function Advertisement_init() {
            info("Init");
            loadState();
            updateCommonAdvertisement();
            var isWin = Settings.get("debug") ? true : getNavigator().platform.toLowerCase().indexOf("win") === 0;
            setYBFilesListener(isWin);
        },
        onAlarm: function Advertisement_onAlarm(alarmInfo) {
            if (alarmInfo.name === "advertisement") {
                updateCloudConfig();
                this.check();
            }
            if (alarmInfo.name === ALARM_REFUSE_NAME) {
                closeByTimeout();
            }
            if (alarmInfo.name === ALARM_NEWBG_CHECK) {
                sendStatIfBgSelected("newbackground");
                if (hasVisibleBlock() && state.lastShownBlockId === "newbackground") {
                    close();
                }
            }
            if (alarmInfo.name === ALARM_SETBG_CHECK) {
                sendStatIfBgSelected("setbackground");
                if (hasVisibleBlock() && state.lastShownBlockId === "setbackground") {
                    close();
                }
            }
        },
        onMessage: function Advertisement_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "Advertisement.hide":
                if (hasVisibleBlock()) {
                    if (req.timeout) {
                        info("Hide block: %s with timeout %i", state.lastShownBlockId, req.timeout);
                    } else {
                        info("Hide block: %s", state.lastShownBlockId);
                    }
                    if (state.lastShownBlockId === "newbackground" || state.lastShownBlockId === "setbackground") {
                        var alarmName = state.lastShownBlockId === "newbackground" ? ALARM_NEWBG_CHECK : ALARM_SETBG_CHECK;
                        if (req.timeout) {
                            chrome.alarms.create(alarmName, { delayInMinutes: Math.ceil(req.timeout / (60 * 1000)) });
                            return;
                        } else {
                            sendStatIfBgSelected(state.lastShownBlockId);
                            chrome.alarms.clear(alarmName);
                        }
                    }
                    close();
                }
                break;
            case "Advertisement.refuse":
                if (hasVisibleBlock()) {
                    info("Refuse block: %s", state.lastShownBlockId);
                    state.blocks[state.lastShownBlockId].refuseCount++;
                    close();
                }
                break;
            case "Advertisement.getLocalizedString":
                if (!hasVisibleBlock()) {
                    throw new Error("Called `getLocalizedString` without visible ad block");
                }
                sendResponse(req.key ? commonAdvertisement.getLocalizedString(state.lastShownBlockId, req.key) : "");
                break;
            case "Advertisement.getLocalizedURL":
                if (!hasVisibleBlock()) {
                    throw new Error("Called `getLocalizedURL` without visible ad block");
                }
                sendResponse(req.key ? commonAdvertisement.getLocalizedURL(state.lastShownBlockId, req.key) : "");
                break;
            case "Advertisement.stat":
                sendClickerRequest(req.param);
                break;
            }
        },
        getCurrent: function Advertisement_getCurrent() {
            if (!getNavigator().onLine) {
                return null;
            }
            if (!this.isEnabled()) {
                return null;
            }
            var isSilentPeriod = true;
            try {
                isSilentPeriod = commonAdvertisement.isSilentPeriod(state);
            } catch (e) {
            }
            if (!isSilentPeriod) {
                if (hasVisibleBlock()) {
                    closeByTimeout(false);
                    chrome.alarms.clear(ALARM_REFUSE_NAME);
                }
                if (!hasVisibleBlock()) {
                    var cleanState = copyObj(state, true);
                    for (var key in cleanState.blocks) {
                        if (cleanState.blocks[key].triggered) {
                            delete cleanState.blocks[key].triggered;
                            cleanState.blocks[key].showCount = cleanState.blocks[key].shownCount;
                            delete cleanState.blocks[key].shownCount;
                        } else {
                            delete cleanState.blocks[key];
                        }
                    }
                    delete cleanState.lastShownBlockId;
                    delete cleanState.refused;
                    info("Trying to show new block. Candidates: %j", Object.keys(cleanState.blocks));
                    var id = commonAdvertisement.calcShownBlockId(cleanState);
                    if (id) {
                        firstShow(id);
                    }
                }
                saveState();
            }
            if (hasVisibleBlock()) {
                var data = {};
                if (state.lastShownBlockId === "newbackground") {
                    data.newBackgrounds = BackgroundImages.requestNew();
                }
                if (state.lastShownBlockId === "setbackground") {
                    data.backgrounds = BackgroundImages.requestCloud();
                }
                return {
                    id: state.lastShownBlockId,
                    data: data
                };
            } else {
                return null;
            }
        },
        isEnabled: function Advertisement_isEnabled() {
            return Settings.get("showAdvertisement");
        },
        triggered: function (blockId) {
            if (!state.blocks[blockId]) {
                state.blocks[blockId] = copyObj(newBlock);
            }
            info("Triggered block %s", blockId);
            state.blocks[blockId].triggered = true;
            saveState();
        },
        untriggered: function (blockId) {
            if (state && state.blocks && state.blocks[blockId] && state.blocks[blockId].triggered) {
                state.blocks[blockId].triggered = false;
                saveState();
            }
        },
        check: function () {
            info("Checking block conditions...");
            AdvStartpageSearch.check();
            AdvAddThumb.check();
        }
    });
}();
