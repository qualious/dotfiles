InternalStructure = function () {
    "use strict";
    var DUMP_STORAGE_KEY = "fullStructure";
    var DUMP_ALARM_NAME = "dumpStructure";
    var chromeVersionMatches = getNavigator().userAgent.match(/Chrome\/([\d]+)/);
    var majorChromeVersion = chromeVersionMatches ? chromeVersionMatches[1] : 1;
    var DUMP_ALERT_INTERVAL_MINUTES = majorChromeVersion < 30 ? 5 : 1;
    var thumbs = {};
    var DUMP_TIMEOUT_MS = 500;
    var dumpTimeout;
    function info() {
        InternalStructure.logger.info.apply(InternalStructure.logger, arguments);
    }
    function dump(runImmediately) {
        var records = {};
        records[DUMP_STORAGE_KEY] = thumbs;
        chrome.storage.local.set(records);
        chrome.alarms.create(DUMP_ALARM_NAME, { delayInMinutes: DUMP_ALERT_INTERVAL_MINUTES });
    }
    function compactItems(items) {
        var newItems = {};
        var index = 0;
        var keys = Object.keys(items);
        keys.sort(function (a, b) {
            return parseInt(a, 10) - parseInt(b, 10);
        });
        keys.forEach(function (key) {
            var item = items[key];
            if (item && item.location) {
                newItems[index] = item;
                index++;
            }
        });
        return newItems;
    }
    return createModule("InternalStructure", {
        onAlarm: function InternalStructure_onAlarm(alarmInfo) {
            if (alarmInfo.name !== DUMP_ALARM_NAME)
                return;
            InternalStructure.logger.info("Dumping thumbs to IndexedDB...");
            CookieBackup.save();
            chrome.storage.local.get(DUMP_STORAGE_KEY, function (records) {
                if (!records[DUMP_STORAGE_KEY]) {
                    InternalStructure.logger.warn("No thumbs to dump!");
                    return;
                } else {
                    InternalStructure.logger.info("%i thumbs to dump", Object.keys(records[DUMP_STORAGE_KEY]).length);
                }
                var dbThumbs = [];
                var dbThumbsShown = [];
                var thumbItem;
                var shownItem;
                for (var position in records[DUMP_STORAGE_KEY]) {
                    var thumbData = records[DUMP_STORAGE_KEY][position];
                    var thumbURL = thumbData.location && thumbData.location.source;
                    shownItem = {
                        position: parseInt(position, 10),
                        pinned: Number(thumbData.pinned),
                        type: thumbData.type
                    };
                    if (thumbURL) {
                        thumbItem = thumbData.thumb;
                        thumbItem.url = thumbURL;
                        dbThumbs.push(thumbItem);
                        shownItem.url = thumbURL;
                    }
                    dbThumbsShown.push(shownItem);
                }
                parallel({
                    thumbs: function (callback) {
                        Database.conn.upsert({ thumbs: dbThumbs }, function (err) {
                            if (err)
                                throw new DbError(err);
                            callback();
                        });
                    },
                    thumbs_shown: function (callback) {
                        Database.conn.clear("thumbs_shown", function (err) {
                            if (err)
                                throw new DbError(err);
                            Database.conn.insert({ thumbs_shown: dbThumbsShown }, function (err) {
                                if (err)
                                    throw new DbError(err);
                                callback();
                            });
                        });
                    }
                }, function (err) {
                    InternalStructure.logger.info("Thumbs structure synced");
                    chrome.storage.local.remove(DUMP_STORAGE_KEY);
                });
            });
        },
        setItem: function InternalStructure_setItem(index, value, dodump) {
            if (arguments.length === 1) {
                InternalStructure.logger.info("Internal structure rewrite!");
                var newItems = arguments[0];
                newItems = compactItems(newItems);
                for (var index in newItems) {
                    this.setItem(index, newItems[index]);
                }
            } else {
                if (!value)
                    return;
                thumbs[index] = thumbs[index] || {};
                copyOwnProperties(value, thumbs[index]);
                if (dodump !== false) {
                    dump();
                }
            }
        },
        overwriteItem: function InternalStructure_overwriteItem(index, value, dodump) {
            thumbs[index] = copyObj(value, true);
            if (dodump !== false) {
                dump();
            }
        },
        getItem: function InternalStructure_getItem(index) {
            return thumbs[index];
        },
        removeItem: function InternalStructure_removeItem(index) {
            InternalStructure.logger.info("Remove item #%i", index);
            delete thumbs[index];
            dump();
        },
        dump: function () {
            clearTimeout(dumpTimeout);
            dumpTimeout = setTimeout(dump, DUMP_TIMEOUT_MS);
        },
        clear: function InternalStructure_clear() {
            InternalStructure.logger.info("Clear");
            thumbs = {};
            dump();
        },
        shiftLeft: function (startIndex, endIndex) {
            if (startIndex == 0) {
                return;
            }
            this.iterate({}, function (item, index) {
                if (endIndex !== undefined && index > endIndex) {
                    return;
                }
                if (index >= startIndex) {
                    this.overwriteItem(index - 1, item, false);
                    delete thumbs[index];
                }
            }, this);
            this.dump();
        },
        shiftRight: function (startIndex, endIndex) {
            var buffer;
            var tmp;
            this.iterate({}, function (item, index) {
                if (index == startIndex) {
                    buffer = this.getItem(index);
                    delete thumbs[index];
                }
                if (index >= startIndex + 1 && index <= endIndex) {
                    tmp = this.getItem(index);
                    this.overwriteItem(index, buffer, false);
                    buffer = tmp;
                }
                if (index == endIndex + 1) {
                    this.overwriteItem(index, buffer, false);
                }
            }, this);
            this.dump();
        },
        get length() {
            return Object.keys(thumbs).length;
        },
        getByUrl: function (url, normalized) {
            var normalUrl = normalized ? url : normalizeUrl(url);
            for (var index in thumbs) {
                var thumbUrl = thumbs[index] && thumbs[index].location && thumbs[index].location.source;
                if (thumbUrl && normalizeUrl(thumbUrl) === normalUrl) {
                    return thumbs[index];
                }
            }
            return null;
        },
        log: function () {
            this.iterate({}, function (thumb, index) {
                info("#%i: %s", index, thumb.location && thumb.location.source);
            });
        },
        iterate: function InternalStructure_iterate(options, callback, ctx) {
            options = options || {};
            for (var index in thumbs) {
                if (options.visible === false) {
                    break;
                }
                if (options.pinned && (!thumbs[index] || !thumbs[index].pinned))
                    continue;
                if (options.url && (!thumbs[index] || !thumbs[index].location || !thumbs[index].location.source || thumbs[index].location.source !== options.url))
                    continue;
                callback.call(ctx, thumbs[index], index);
            }
        },
        load: function InternalStructure_load(callback) {
            var self = this;
            parallel({
                idb: function (callback) {
                    Database.conn.get("thumbs_shown", { direction: sklad.ASC }, function (err, records) {
                        if (err)
                            throw new DbError(err);
                        records = skladArray2Object(records);
                        callback(records);
                    });
                },
                cache: function (callback) {
                    chrome.storage.local.get(DUMP_STORAGE_KEY, callback);
                }
            }, function (res) {
                var newThumbsStructure = {};
                var tasks = {};
                var locationObj;
                var records = res.idb || {};
                if (res.cache[DUMP_STORAGE_KEY]) {
                    thumbs = res.cache[DUMP_STORAGE_KEY];
                    self.logger.info("Structure loaded from storage:");
                    self.log();
                    FrontendHelper.mute = false;
                    FrontendHelper.notify("thumbChanged");
                    callback && callback();
                    return;
                }
                for (var position in records) {
                    locationObj = records[position].url ? parseUrl(records[position].url) : null;
                    newThumbsStructure[position] = {
                        pinned: Boolean(records[position].pinned),
                        thumb: {},
                        cloud: {}
                    };
                    if (records[position].type) {
                        newThumbsStructure[position].type = records[position].type;
                    }
                    if (!locationObj) {
                        continue;
                    }
                    newThumbsStructure[position].location = locationObj;
                    (function (position) {
                        tasks[position] = function (callback) {
                            self.loadThumbInfo(newThumbsStructure[position], callback);
                        };
                    }(position));
                }
                parallel(tasks, function (results) {
                    thumbs = newThumbsStructure;
                    self.logger.info("Structure loaded from DB");
                    self.log();
                    FrontendHelper.mute = false;
                    FrontendHelper.notify("thumbChanged");
                    callback && callback();
                });
            });
        },
        loadThumbInfo: function (thumbData, callback) {
            var locationObj = thumbData.location;
            parallel({
                thumb: function (callback) {
                    var url = locationObj.source;
                    Database.conn.get("thumbs", { range: IDBKeyRange.only(url) }, function (err, records) {
                        if (err)
                            throw new DbError(err);
                        records = skladArray2Object(records);
                        var output = records && records[url] ? records[url] : null;
                        thumbData.thumb = output || thumbData.thumb;
                        callback();
                    });
                },
                cloud: function (callback) {
                    var domain = locationObj.host;
                    Database.conn.get("cloud_data", { range: IDBKeyRange.only(domain) }, function (err, records) {
                        if (err)
                            throw new DbError(err);
                        records = skladArray2Object(records);
                        var output = records && records[domain] ? records[domain] : null;
                        thumbData.cloud = output || thumbData.cloud;
                        callback();
                    });
                }
            }, callback);
        },
        THUMB_TYPE: {
            DEF_THUMB: "defthumb",
            USER_THUMB: "userthumb",
            AUTO_THUMB: "autothumb"
        }
    });
}();
