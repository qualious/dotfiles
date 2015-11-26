SafeBrowsing = function () {
    "use strict";
    var SBA_API_URL = "https://sba.yandex.net/cp?pver=4.0&client=yabrbookmarks&json=1&url=";
    return createModule("SafeBrowsing", {
        listUnsafeDomains: function Safebrowsing_listUnsafeDomains(callback) {
            Database.conn.get("unsafe_domains", {}, function (err, records) {
                if (err)
                    throw new DbError(err);
                records = skladArray2Object(records);
                callback(Object.keys(records));
            });
        },
        checkDomains: function SafeBrowsing_checkDomains(domains, runFast, callback) {
            if (!Array.isArray(domains) || !domains.length) {
                callback([]);
                return;
            }
            var sbaURL = SBA_API_URL + domains.map(function (domain) {
                return encodeURIComponent(domain);
            }).join(",");
            loadResource({
                url: sbaURL,
                timeout: 5000,
                onload: function (evt) {
                    try {
                        var jsonResponse = JSON.parse(evt.target.responseText);
                    } catch (ex) {
                        this.logger.info("Invalid SBA json response: %s", evt.target.responseText);
                        return callback([]);
                    }
                    var dbRecords = [];
                    var domains = [];
                    for (var domain in jsonResponse) {
                        if (jsonResponse[domain] === "adult") {
                            dbRecords.push({ domain: domain });
                            domains.push(domain);
                        }
                    }
                    if (!dbRecords.length) {
                        this.logger.info("No adult domains found");
                        return callback([]);
                    }
                    this.logger.info("Adult domains found: %j", domains);
                    Database.conn.upsert({ unsafe_domains: dbRecords }, function (err, keys) {
                        if (err)
                            throw new DbError(err);
                        callback(domains);
                    });
                },
                onerror: function (evt) {
                    this.logger.info("Error while waiting for SBA response: %s", evt.type);
                    callback([]);
                }
            }, this);
        }
    });
}();
