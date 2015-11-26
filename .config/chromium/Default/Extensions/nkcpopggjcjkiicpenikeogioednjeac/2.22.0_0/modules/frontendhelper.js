FrontendHelper = function () {
    "use strict";
    var muteFrontendMessages = true;
    function logMessage(level, msg, url, line, trace) {
        if ([
                "info",
                "error",
                "warn"
            ].indexOf(level) === -1)
            throw new Error("Unknown debug level: " + level);
        FrontendHelper.logger[level]("%s on line %i in %s (%s)", msg, line || 0, url || "<unknown>", trace || "no trace");
    }
    return createModule("FrontendHelper", {
        onMessage: function FrontendHelper_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "logFrontendData":
                logMessage(req.level, req.msg, req.url, req.line, req.trace);
                break;
            case "frontend.action":
                this.action(req.type, req.thumbId, req.tabId);
                break;
            }
        },
        notify: function FrontendHelper_notify(msgType, data, tabId) {
            if (typeof data === "number") {
                this.requestDataForIndex(data, function (thumbData) {
                    var evtData = {};
                    evtData[data] = thumbData;
                    notifyTabs(msgType, evtData, tabId);
                });
                return;
            }
            if (Array.isArray(data)) {
                if (data.length) {
                    this.requestDataForArray(data, function (evtData) {
                        notifyTabs(msgType, evtData, tabId);
                    });
                }
                return;
            }
            if (data !== undefined) {
                this.requestDataForThumb(data, function (thumbData) {
                    notifyTabs(msgType, thumbData, tabId);
                });
                return;
            }
            if (data === undefined) {
                this.requestFullStructure(function (fullStructure) {
                    notifyTabs(msgType, fullStructure, tabId);
                });
                return;
            }
            throw new Error("Unknown notify data: " + typeof data);
        },
        requestDataForThumb: function FrontendHelper_requestDataForThumb(thumbData, callback) {
            var output = { pinned: thumbData.pinned || false };
            if (!thumbData.location) {
                callback(output);
                return;
            }
            output.url = thumbData.location.source;
            output.isIndexPage = thumbData.location.path === "/";
            output.title = thumbData.thumb && thumbData.thumb.title || "";
            output.statParam = thumbData.type;
            if (thumbData.thumb && thumbData.thumb.favicon) {
                output.favicon = thumbData.thumb.favicon;
                output.backgroundColor = thumbData.thumb.backgroundColor;
                output.fontColor = Colors.getFontColorByBackgroundColor(thumbData.thumb.backgroundColor);
            }
            if (thumbData.thumb && thumbData.thumb.tableau && thumbData.thumb.tableau.image) {
                output.backgroundImage = thumbData.thumb.tableau.image;
                output.backgroundColor = thumbData.thumb.tableau.color;
                output.fontColor = Colors.getFontColorByBackgroundColor(thumbData.thumb.tableau.color);
            } else if (thumbData.cloud && thumbData.cloud.backgroundImage) {
                if (output.isIndexPage) {
                    output.backgroundImage = thumbData.cloud.backgroundImage;
                } else {
                    output.backgroundImage = thumbData.cloud.backgroundImageSub || thumbData.cloud.backgroundImage;
                }
                output.backgroundColor = thumbData.cloud.backgroundColor;
                output.fontColor = Colors.getFontColorByBackgroundColor(thumbData.cloud.backgroundColor);
            }
            var uiThumbsType = Settings.get("uiThumbsType");
            if (uiThumbsType === 2 && !output.backgroundImage || uiThumbsType === 3) {
                Screenshots.requestData(thumbData.location.source, function (data) {
                    if (data) {
                        output.screenshot = {
                            url: data.url,
                            color: data.bgColor,
                            fontColor: data.fontColor
                        };
                    }
                    callback(output);
                });
            } else {
                callback(output);
            }
        },
        requestDataForIndex: function FrontendHelper_requestDataForIndex(index, callback) {
            var thumbData = InternalStructure.getItem(index);
            if (!thumbData) {
                callback({});
                return;
            }
            this.requestDataForThumb(thumbData, callback);
        },
        requestDataForArray: function FrontendHelper_requestDataForArray(arr, callback) {
            var self = this;
            var tasks = {};
            arr.forEach(function (index) {
                (function (thumbIndex) {
                    tasks[thumbIndex] = function (callback) {
                        self.requestDataForIndex(thumbIndex, callback);
                    };
                }(index));
            });
            parallel(tasks, callback);
        },
        requestFullStructure: function FrontendHelper_requestFullStructure(callback) {
            var indexes = [];
            InternalStructure.iterate({}, function (item, index) {
                indexes.push(index);
            });
            this.requestDataForArray(indexes, callback);
        },
        action: function (type, data, tabId) {
            notifyTabs("action", {
                type: type,
                thumb: data
            }, tabId);
        },
        closePopups: function () {
            this.action("closePopups");
        },
        get mute() {
            return muteFrontendMessages;
        },
        set mute(val) {
            muteFrontendMessages = val;
        }
    });
}();
