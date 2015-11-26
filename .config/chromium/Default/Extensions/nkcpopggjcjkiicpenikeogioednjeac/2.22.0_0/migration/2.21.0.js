(function () {
    "use strict";
    var VERSION = "2.21.0";
    var logger = new Logger("Migration " + VERSION);
    function removeDayuseAlarm(callback) {
        chrome.alarms.clear("dayuse", callback);
    }
    Migration.add(VERSION, function (data, callback) {
        logger.info("Starting...");
        removeDayuseAlarm(function () {
            data[VERSION] = "done";
            logger.info("done");
            callback();
        });
    });
}());
