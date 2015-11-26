Pickup = function () {
    "use strict";
    function info() {
        Pickup.logger.info.apply(Pickup.logger, arguments);
    }
    var BRANDING_PAGES_BOOST = 5;
    var HISTORY_SEARCH_MAX_RESULTS = 100;
    var PICKUP_ALARM_NAME = "pickup";
    var PICKUP_INTERVAL_SHORT_MINUTES = 60;
    var PICKUP_INTERVAL_LONG_MINUTES = 60 * 24;
    var PICKUP_MAX_LENGTH = 60;
    var domaingroups;
    function mergeForceAndPinned(existingPinnedThumbs) {
        var xmlDoc = Branding.getXMLDocument("fastdial/config.xml");
        var output = {};
        var emptyPositions = [];
        var domains = {};
        for (var i = 0; i < Pickup.FIRST_PICKUP_COUNT; i++) {
            if (existingPinnedThumbs[i]) {
                output[i] = existingPinnedThumbs[i];
                if (existingPinnedThumbs[i].url) {
                    domains[parseUrl(output[i].url).host] = 1;
                }
            } else {
                emptyPositions.push(i);
            }
        }
        Array.prototype.forEach.call(xmlDoc.querySelectorAll("pages > page[force='true']"), function (page) {
            var pageURL = Branding.expandURL(page.getAttribute("url"));
            var pageDomain = parseUrl(pageURL).host;
            if (domains[pageDomain])
                return;
            var index = parseInt(page.getAttribute("index"), 10) - 1;
            var pageTitle = page.getAttribute("custom_title");
            var forceIndex;
            if (output[index] === undefined) {
                forceIndex = index;
            } else {
                forceIndex = emptyPositions.length ? emptyPositions.shift() : undefined;
            }
            if (forceIndex !== undefined) {
                output[forceIndex] = {
                    url: pageURL,
                    title: pageTitle,
                    pinned: 1,
                    type: InternalStructure.THUMB_TYPE.DEF_THUMB
                };
            }
        }, this);
        return output;
    }
    function mergeBrandedAndHistory(exclude, regexps, branded, historyEntries, unpinned) {
        var output = [];
        while (branded.length || historyEntries.length || unpinned.length || output.length < PICKUP_MAX_LENGTH) {
            var brandedPage = branded.length ? branded[0] : null;
            var historyPage = historyEntries.length ? historyEntries[0] : null;
            var unpinnedPage = unpinned.length ? unpinned[0] : null;
            if (!historyPage && !brandedPage && !unpinnedPage) {
                break;
            }
            var list = !historyPage || brandedPage && brandedPage.visits >= historyPage.visits ? branded : historyEntries;
            list = !list[0] || unpinnedPage && unpinnedPage.visits >= list[0].visits ? unpinned : list;
            var page = list.shift();
            var domain = parseUrl(page.url).host;
            if (!domain || Pickup.isDomainInList(domain, exclude)) {
                continue;
            }
            var isDeniedByRegexp = regexps.some(function (regexpString) {
                var regex = new RegExp(regexpString);
                return regex.test(page.url);
            });
            if (isDeniedByRegexp) {
                continue;
            }
            exclude.push(domain);
            page.pinned = false;
            output.push(page);
        }
        return output;
    }
    function checkUnsafeDomains(options, callback) {
        var domains = {};
        InternalStructure.iterate({
            nonempty: true,
            visible: true
        }, function (thumbData) {
            if (thumbData.pinned) {
                return;
            }
            var locationObj = parseUrl(thumbData.location.source);
            domains[locationObj.host] = 1;
        });
        SafeBrowsing.checkDomains(Object.keys(domains), options.firstRun, callback);
    }
    function getBranded() {
        var configXMLDocument = Branding.getXMLDocument("fastdial/config.xml");
        var xmlPages = configXMLDocument.querySelectorAll("pages > page");
        var results = [];
        Array.prototype.forEach.call(xmlPages, function (page) {
            var boost = page.getAttribute("boost");
            boost = boost === null ? BRANDING_PAGES_BOOST : parseInt(boost, 10);
            results.push({
                url: Branding.expandURL(page.getAttribute("url")),
                title: page.getAttribute("custom_title"),
                pinned: 0,
                index: page.getAttribute("index"),
                visits: boost,
                type: InternalStructure.THUMB_TYPE.DEF_THUMB
            });
        });
        results.sort(function (pageA, pageB) {
            return pageA.index - pageB.index;
        });
        return results;
    }
    function getPinned() {
        var pinned = {};
        InternalStructure.iterate({ pinned: true }, function (thumbData, index) {
            pinned[index] = {
                position: index,
                pinned: true,
                type: thumbData.type === undefined ? InternalStructure.THUMB_TYPE.USER_THUMB : thumbData.type,
                url: thumbData.location && thumbData.location.source ? thumbData.location.source : null,
                visits: thumbData.thumb && thumbData.thumb.visits || 0
            };
        });
        return pinned;
    }
    function getUnpinned() {
        var unpinned = [];
        InternalStructure.iterate({ pinned: false }, function (thumbData, index) {
            unpinned.push({
                position: index,
                pinned: false,
                type: thumbData.type === undefined ? InternalStructure.THUMB_TYPE.AUTO_THUMB : thumbData.type,
                url: thumbData.location && thumbData.location.source ? thumbData.location.source : null,
                visits: thumbData.thumb && thumbData.thumb.visits || 0
            });
        });
        unpinned.sort(function (a, b) {
            return b.visits - a.visits;
        });
        return unpinned;
    }
    return createModule("Pickup", {
        FIRST_PICKUP_COUNT: 12,
        onMessage: function Pickup_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            }
        },
        onAlarm: function Pickup_onAlarm(alarmInfo) {
            if (alarmInfo.name === PICKUP_ALARM_NAME) {
                this.run();
            }
        },
        run: function Pickup_run(options, callback) {
            options = options || {};
            options.withForceThumbs = options.withForceThumbs || false;
            options.firstRun = options.firstRun || false;
            options.num = options.num || 1;
            callback = callback || noop;
            if (options.num > 3) {
                FrontendHelper.mute = false;
                FrontendHelper.notify("thumbChanged");
                callback();
                return;
            }
            options.guid = options.guid || uuid();
            info("Pickup session %s%s:%i started...", options.firstRun ? "[first] " : "", options.guid, options.num);
            parallel({
                pinned: function (callback) {
                    callback(getPinned());
                },
                unpinned: function (callback) {
                    callback(getUnpinned());
                },
                branded: function (callback) {
                    callback(getBranded());
                },
                blacklist: function (callback) {
                    Blacklist.requestTotal(callback);
                },
                history: function (callback) {
                    Pickup.getHistory(3, "visits", callback);
                },
                unsafe: function (callback) {
                    SafeBrowsing.listUnsafeDomains(callback);
                }
            }, function (results) {
                var existingPinnedThumbs = results.pinned;
                var brandedThumbs = results.branded;
                var blockedDomains = results.unsafe.concat(results.blacklist.domains);
                info("Pickup: pinned thumbs %j", existingPinnedThumbs);
                var pinnedList = options.withForceThumbs ? mergeForceAndPinned(existingPinnedThumbs) : existingPinnedThumbs;
                var pinnedDomains = [];
                for (var position in pinnedList) {
                    if (pinnedList[position].url) {
                        pinnedDomains.push(parseUrl(pinnedList[position].url).host);
                    }
                }
                var excludeDomains = blockedDomains.concat(pinnedDomains);
                results.history.map(function (item) {
                    var isBranded = brandedThumbs.some(function (v) {
                        return v.url === item.url;
                    });
                    item.type = isBranded ? InternalStructure.THUMB_TYPE.DEF_THUMB : InternalStructure.THUMB_TYPE.AUTO_THUMB;
                    return item;
                });
                var mostVisitedList = mergeBrandedAndHistory(excludeDomains, results.blacklist.regexps, brandedThumbs, results.history, results.unpinned);
                mostVisitedList.map(function (item) {
                    item.location = parseUrl(item.url);
                    return item;
                });
                var oldLength = InternalStructure.length;
                var newThumbIndexes = Thumbs.saveNewStructure(pinnedList, mostVisitedList, options);
                if (options.firstRun) {
                    Settings.set("pickupFirstCount", InternalStructure.length);
                }
                var now = Date.now();
                var weekMs = 7 * 24 * 60 * 60 * 1000;
                var refreshTime = Settings.get("refreshThumbsBackgroundsTime");
                var updateBackgroundImage = options.withForceThumbs || now - refreshTime > weekMs;
                InternalStructure.iterate({ nonempty: true }, function (thumbData, index) {
                    var force = newThumbIndexes.indexOf(index) >= 0 ? true : updateBackgroundImage;
                    Thumbs.getMissingData(thumbData, { force: force });
                });
                if (updateBackgroundImage) {
                    Settings.set("refreshThumbsBackgroundsTime", now);
                }
                if (InternalStructure.length < oldLength) {
                    for (var i = InternalStructure.length; i < oldLength; i++) {
                        FrontendHelper.notify("thumbChanged", i);
                    }
                }
                info("Pickup session ended.");
                Pickup.updatePickupAlarm();
                checkUnsafeDomains(options, function (unsafeDomains) {
                    if (unsafeDomains && unsafeDomains.length) {
                        Pickup.run({
                            guid: options.guid,
                            num: ++options.num,
                            firstRun: options.firstRun
                        }, callback);
                    } else {
                        FrontendHelper.mute = false;
                        FrontendHelper.notify("thumbChanged");
                        callback();
                    }
                });
            }, this);
        },
        updatePickupAlarm: function () {
            var intervalMinutes = PICKUP_INTERVAL_LONG_MINUTES;
            chrome.alarms.getAll(function (alarms) {
                var alarm = alarms.filter(function (a) {
                    return a.name === PICKUP_ALARM_NAME;
                })[0];
                if (alarm && alarm.periodInMinutes === intervalMinutes) {
                    return;
                }
                info("Update PICKUP alarm interval from %i to %i", alarm && alarm.periodInMinutes, intervalMinutes);
                chrome.alarms.create(PICKUP_ALARM_NAME, {
                    delayInMinutes: intervalMinutes,
                    periodInMinutes: intervalMinutes
                });
            });
        },
        isDomainInList: function (domain, list) {
            if (list.indexOf(domain) !== -1) {
                return true;
            }
            if (!domaingroups) {
                domaingroups = {};
                var xmlDoc = Branding.getXMLDocument("fastdial/domaingroups.xml");
                var groups = toArray(xmlDoc.querySelectorAll("domainGroups > group"));
                groups.forEach(function (group) {
                    var domains = toArray(group.querySelectorAll("domain"));
                    domains.forEach(function (domain) {
                        domaingroups[domain.textContent] = group.getAttribute("name");
                    });
                });
            }
            var group = domaingroups[domain];
            if (group) {
                for (var i = 0; i < list.length; i++) {
                    var listgroup = domaingroups[list[i]];
                    if (listgroup === group) {
                        return true;
                    }
                }
            }
            return false;
        },
        getHistory: function (minVisitCount, sortBy, callback) {
            chrome.history.search({
                text: "",
                maxResults: HISTORY_SEARCH_MAX_RESULTS,
                startTime: 0
            }, function (records) {
                var output = [];
                records.forEach(function (historyItem) {
                    var totalVisits = historyItem.visitCount || 0;
                    if (totalVisits < minVisitCount) {
                        return;
                    }
                    if (!/^(http|ftp)s?/.test(historyItem.url)) {
                        return;
                    }
                    if (!historyItem.title) {
                        return;
                    }
                    output.push({
                        url: historyItem.url,
                        title: historyItem.title,
                        lastVisitTime: historyItem.lastVisitTime,
                        visits: totalVisits
                    });
                });
                output.sort(function (a, b) {
                    return b[sortBy] - a[sortBy];
                });
                callback(output);
            });
        },
        getBranded: getBranded
    });
}();
