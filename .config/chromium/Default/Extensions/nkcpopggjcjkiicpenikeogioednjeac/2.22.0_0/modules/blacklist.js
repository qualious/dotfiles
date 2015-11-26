Blacklist = function () {
    "use strict";
    var SERVER_URL = "http://download.cdn.yandex.net/bar/vb/bl.xml";
    function sync() {
        Blacklist.logger.info("Sync blacklist data");
        loadResource({
            url: SERVER_URL,
            timeout: 5000,
            onload: function (evt) {
                var responseText = evt.target.responseText;
                var responseXML = evt.target.responseXML;
                var syncedBlacklist = Settings.get("blacklist");
                syncedBlacklist.domains.length = 0;
                syncedBlacklist.regexps.length = 0;
                if (!responseXML || responseXML.documentElement.nodeName !== "list") {
                    Blacklist.logger.error("Not valid XML: " + responseText);
                    chrome.alarms.create("blacklist", {
                        delayInMinutes: 60,
                        periodInMinutes: 24 * 60
                    });
                    return;
                }
                [].forEach.call(responseXML.querySelectorAll("list > item"), function (item) {
                    var domain = item.getAttribute("domain");
                    var regexp = item.getAttribute("url_regex");
                    if (domain) {
                        syncedBlacklist.domains.push(domain);
                    } else if (regexp) {
                        syncedBlacklist.regexps.push(regexp);
                    }
                });
                Blacklist.logger.info("Blacklist updated");
                Settings.set("blacklist", syncedBlacklist);
            },
            onerror: function (evt) {
                Blacklist.logger.error("Sync error: " + evt.type);
                chrome.alarms.create("blacklist", {
                    delayInMinutes: 60,
                    periodInMinutes: 24 * 60
                });
            }
        });
    }
    return createModule("Blacklist", {
        onAlarm: function Blacklist_onAlarm(alarmInfo) {
            if (alarmInfo.name === "blacklistSync") {
                sync();
            }
        },
        requestTotal: function Blacklist_requestTotal(callback) {
            var output = {
                domains: [],
                regexps: []
            };
            var blacklistXML = Branding.getXMLDocument("fastdial/blacklist.xml");
            [].forEach.call(blacklistXML.querySelectorAll("list > item"), function (item) {
                var domain = item.getAttribute("domain");
                var regexp = item.getAttribute("url_regex");
                if (domain) {
                    output.domains.push(domain);
                } else if (regexp) {
                    output.regexps.push(regexp);
                }
            });
            var syncedBlacklist = Settings.get("blacklist");
            output.domains = output.domains.concat(syncedBlacklist.domains);
            output.regexps = output.regexps.concat(syncedBlacklist.regexps);
            Database.conn.get("blacklist", {}, function (err, records) {
                if (err)
                    throw new DbError(err);
                records = skladArray2Object(records);
                output.domains = output.domains.concat(Object.keys(records));
                callback(output);
            });
        },
        upsertOne: function Blacklist_upsertOne(domain, callback) {
            Database.conn.upsert("blacklist", { domain: domain }, function (err) {
                if (err)
                    throw new Error("Error updating blacklist store: " + err);
                callback && callback();
            });
        },
        deleteOne: function Blacklist_deleteOne(domain, callback) {
            Database.conn.delete("blacklist", domain, function (err) {
                if (err)
                    throw new DbError(err);
                callback && callback();
            });
        }
    });
}();
