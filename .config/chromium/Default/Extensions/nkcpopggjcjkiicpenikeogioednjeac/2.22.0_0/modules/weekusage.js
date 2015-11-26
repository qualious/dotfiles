WeekUsage = function () {
    "use strict";
    var SECONDS_IN_WEEK = 86400 * 7;
    return createModule("WeekUsage", {
        onMessage: function WeekUsage_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "logFrontendStat":
                this.logAction(req.param);
                break;
            }
        },
        onAlarm: function WeekUsage_onAlarm(alarmInfo) {
            if (alarmInfo.name === "weekuse") {
                this.send = true;
                this.logger.info("Ready to send statistics");
            }
        },
        logAction: function UsageHistory_logAction(action, info) {
            info = info || {};
            info.action = action;
            Database.conn && Database.conn.insert("week_usage", info, function (err) {
                if (err)
                    throw new DbError(err);
            });
        },
        requestData: function UsageHistory_requestData(callback) {
            if (!this.send) {
                callback({});
                return;
            }
            this.send = false;
            var self = this;
            Database.conn.get("week_usage", {}, function (err, records) {
                if (err)
                    throw new DbError(err);
                records = skladArray2Object(records);
                var now = Math.round(Date.now() / 1000);
                var appInstallTime = Settings.get("appInstallTime");
                var numberOfFilled = 0;
                InternalStructure.iterate({
                    visible: true,
                    nonempty: true
                }, function () {
                    numberOfFilled += 1;
                });
                var pinnedPositions = [];
                var emptyLastThumb = Settings.get("emptyLastThumb");
                var thumbsNumX = Settings.get("layoutX");
                var currentLayout = Layout.getCurrent();
                var currentThumbsNum = currentLayout[0] * currentLayout[1];
                InternalStructure.iterate({ visible: true }, function (thumbData, index) {
                    if (!thumbData || !thumbData.pinned)
                        return;
                    var yPosition = Math.floor(parseInt(index, 10) / thumbsNumX);
                    var xPosition = parseInt(index, 10) - yPosition * thumbsNumX;
                    pinnedPositions.push(yPosition + "." + xPosition);
                });
                if (emptyLastThumb) {
                    var lastPosition = currentLayout[1] - 1 + "." + (currentLayout[0] - 1);
                    if (pinnedPositions.indexOf(lastPosition) === -1) {
                        pinnedPositions.push(lastPosition);
                    }
                }
                var output = {
                    vshow: 0,
                    vpinned: pinnedPositions.join("-"),
                    vsearchform: Number(Settings.get("showSearchForm")),
                    vweek: Math.floor(Math.max(now - appInstallTime, 0) / SECONDS_IN_WEEK),
                    vcountstbX: Settings.get("layoutX"),
                    vcountstbY: Settings.get("layoutY"),
                    vfill: numberOfFilled
                };
                for (var id in records) {
                    switch (records[id].action) {
                    case "show":
                        output.vshow += 1;
                        break;
                    }
                }
                self.logger.info("Week data: %j", output);
                Database.conn.clear("week_usage", function (err) {
                    if (err)
                        throw new DbError(err);
                });
                callback(output);
            });
        },
        get send() {
            return Settings.get("sendWeekUsage");
        },
        set send(val) {
            Settings.set("sendWeekUsage", val);
            return val;
        }
    });
}();
