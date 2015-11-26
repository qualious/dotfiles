DebugInfo = function () {
    "use strict";
    var SYSTEM_DEBUG_URL = "http://visualbookmarks.log/";
    var timeout;
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (tab.url === SYSTEM_DEBUG_URL) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                collect(tabId);
            }, 100);
        }
    });
    function collect(tabId) {
        parallel({
            log: function (callback) {
                var regDate = /^\d{4}\-\d{2}\-\d{2}/;
                LogFileAppender.get(function (contents) {
                    var records = contents.split("\n").slice(1);
                    records = records.map(function (record) {
                        record = record.replace(/\t/g, "    ");
                        if (regDate.test(record)) {
                            record = "<b style=\"color: blue\">" + record + "</b>";
                        }
                        return record;
                    });
                    callback(records);
                });
            },
            management: function (callback) {
                chrome.management.getAll(function (list) {
                    var output = {};
                    list.forEach(function (extensionInfo) {
                        if (!extensionInfo.enabled)
                            return;
                        output[extensionInfo.id] = {
                            name: extensionInfo.name,
                            version: extensionInfo.version,
                            permissions: extensionInfo.permissions,
                            hostPermissions: extensionInfo.hostPermissions,
                            installType: extensionInfo.installType
                        };
                    });
                    callback(output);
                });
            },
            structure: function (callback) {
                var dbTasks = {};
                [
                    "thumbs",
                    "blacklist",
                    "cloud_data",
                    "thumbs_shown"
                ].forEach(function (storeName) {
                    dbTasks[storeName] = function (callback) {
                        Database.conn.get(storeName, {}, function (err, records) {
                            if (err)
                                throw new DbError(err);
                            callback(skladArray2Object(records));
                        });
                    };
                });
                parallel(dbTasks, callback);
            },
            settings: function (callback) {
                callback(Settings.dump());
            },
            alarms: function (callback) {
                chrome.alarms.getAll(function (alarms) {
                    alarms.forEach(function (alarmInfo) {
                        alarmInfo.scheduledTime = new Date(alarmInfo.scheduledTime) + "";
                    });
                    callback(alarms);
                });
            },
            memory: function (callback) {
                chrome.system.memory.getInfo(callback);
            }
        }, function (results) {
            var logData = results.log.join("\n");
            delete results.log;
            var stringData = JSON.stringify(results, null, "	");
            var downloadUrl = createHtmlAndGetUrl({
                logData: logData,
                stringData: stringData
            });
            var viewUrl = createHtmlAndGetUrl({
                logData: logData,
                stringData: stringData,
                downloadUrl: downloadUrl
            });
            if (tabId) {
                chrome.tabs.update(tabId, { url: viewUrl });
            } else {
                chrome.tabs.create({ url: viewUrl });
            }
        });
    }
    function createHtmlAndGetUrl(params) {
        var html = "<head><title>visualbookmarks.log</title><meta charset=\"utf-8\"></head></head><body>" + (params.downloadUrl ? "<div><a href=\"" + params.downloadUrl + "\" download=\"log.html\" style=\"font-weight: bold\">Download log</a></div>" : "") + "<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">" + params.logData + "</pre>" + "<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">" + params.stringData + "</pre>" + "</body>";
        var blob = new Blob([html], { type: "text/html" });
        return (window.URL || window.webkitURL).createObjectURL(blob);
    }
    return createModule("DebugInfo", {
        onMessage: function DebugInfo_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "debugInfo":
                collect();
                break;
            }
        }
    });
}();
