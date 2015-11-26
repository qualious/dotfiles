Metrika = function () {
    "use strict";
    var QUEUE_REQUEST_TIMEOUT_MS = 3000;
    var QUEUE_INTERVAL_RUN_MS = 5000;
    var paramsQueue = {};
    var sendParamsTimeoutId;
    function sendParamRequest(data, totalEvents) {
        var addonVersion = chrome.runtime.getManifest().version;
        var msgWithLine = data.msg + (data.line ? ":" + data.line : "");
        var platform = getNavigator().platform;
        if (platform.toLowerCase().indexOf("win") === 0)
            platform = "winnt";
        if (platform.toLowerCase().indexOf("mac") == 0)
            platform = "darwin";
        var bvMatches = getNavigator().userAgent.match(/Chrome\/([\d|\.]+)/);
        var paramData = JSON.stringify({
            id: Statistics.guid,
            lang: getCurrentLocale(),
            os: platform,
            bv: bvMatches && bvMatches[1] || "",
            module: data.module || "",
            file: data.file || "",
            trace: data.trace || ""
        });
        var siteInfo = {};
        siteInfo[addonVersion] = {};
        siteInfo[addonVersion][msgWithLine] = {};
        siteInfo[addonVersion][msgWithLine][paramData] = totalEvents;
        var postData = {
            "browser-info": [
                "ar:1",
                "en:utf-8",
                "i:" + formatDate(new Date(), "%Y%M%D%H%N%S"),
                "js:1",
                "la:" + getCurrentLocale(),
                "rn:" + Math.round(Math.random() * 100000),
                "wmode:1"
            ].join(":"),
            "site-info": JSON.stringify(siteInfo)
        };
        var sendData = [];
        for (var key in postData) {
            sendData.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
        }
        loadResource({
            method: "POST",
            url: "http://mc.yandex.ru/watch/" + Settings.get("metrikaCounter") + "/1?" + sendData.join("&")
        });
    }
    function observePendingData() {
        Object.keys(paramsQueue).forEach(function (serializedData) {
            var data = JSON.parse(serializedData);
            var counter = paramsQueue[serializedData];
            sendParamRequest(data, counter);
        });
        paramsQueue = {};
    }
    chrome.runtime.onSuspend.addListener(observePendingData);
    return createModule("Metrika", {
        param: function Metrika_param(msg, line, data) {
            var serializedData;
            data = data || {};
            try {
                data.msg = msg;
                data.line = line || 0;
                serializedData = JSON.stringify(data);
            } catch (ex) {
                this.logger.error("Data could not be serialized: %s", ex.message);
            }
            if (!serializedData)
                return;
            paramsQueue[serializedData] = paramsQueue[serializedData] || 0;
            paramsQueue[serializedData] += 1;
            if (sendParamsTimeoutId) {
                window.clearTimeout(sendParamsTimeoutId);
            }
            sendParamsTimeoutId = window.setTimeout(observePendingData, QUEUE_INTERVAL_RUN_MS);
        }
    });
}();
