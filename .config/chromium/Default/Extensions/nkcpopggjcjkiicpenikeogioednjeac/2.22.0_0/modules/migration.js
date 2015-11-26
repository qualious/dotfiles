Migration = function () {
    "use strict";
    var DEFAULT_BACKGROUND_IMAGES_1X = [
        "socks.jpg",
        "robot.jpg",
        "red.jpg",
        "permanent_transparent.png",
        "lunohod.jpg",
        "hameleon.jpg",
        "green.jpg",
        "gray.jpg",
        "easy.jpg",
        "blue.jpg",
        "baloons.jpg"
    ];
    var COOKIE_NAME = "ys";
    var COOKIE_VALUE_1X = "vb.chrome";
    var TRUSTED_DOMAINS = [
        ".yandex.ru",
        ".yandex.kz",
        ".yandex.ua",
        ".yandex.by",
        ".yandex.net",
        ".yandex.com",
        ".yandex.com.tr",
        ".ya.ru",
        ".moikrug.ru",
        ".narod.ru"
    ];
    var WEBDATABASE_NAME_1X = "storage";
    var WEBDATABASE_VERSION_1X = "1.0";
    var INIT_TIMEOUT_MS = 15000;
    var LEGACY_SENDSTAT_PREF = "application.tab.opinions.enabled";
    var CLICKR_1X_URL = "http://clck.yandex.ru/click/dtype=stred/pid=12/cid=70328/path=migr1to2.%data%/*http://yandex.ru";
    var periodicalAlarms = {
        cleanHistoryThumbs: {
            periodInMinutes: 24 * 60,
            delay: true
        },
        dayusePoll: {
            periodInMinutes: 2 * 60,
            delay: true
        },
        weekuse: {
            periodInMinutes: 7 * 24 * 60,
            delay: true
        },
        blacklistSync: {
            periodInMinutes: 24 * 60,
            delay: false
        },
        showStatModal: {
            periodInMinutes: 3 * 24 * 60,
            delay: true
        },
        cloudBackgrounds: {
            periodInMinutes: 24 * 60,
            delay: false
        },
        advertisement: {
            periodInMinutes: 24 * 60,
            delay: false
        }
    };
    var migrations = [];
    function info() {
        Migration.logger.info.apply(Migration.logger, arguments);
    }
    function error() {
        Migration.logger.error.apply(Migration.logger, arguments);
    }
    function from1x(callback) {
        var currentVersion = chrome.runtime.getManifest().version;
        Migration.logger.info("Run migration from 1.x version");
        var parallelTasks = {};
        try {
            var showBookmarks = JSON.parse(localStorage["visual-bookmarks.bookmarks.enable"] || "true");
            Settings.set("showBookmarks", showBookmarks);
        } catch (ex) {
        }
        try {
            var guid = JSON.parse(localStorage["yandex.statistics.ui"]);
            Statistics.guid = guid;
        } catch (ex) {
        }
        Settings.set("showSearchForm", true);
        try {
            var brandingData = JSON.parse(localStorage["remote-resource:branding.config"]);
            Settings.set("appInstallTime", Math.round(brandingData.timestamp / 1000));
        } catch (ex) {
        }
        dropOldYSCookie();
        var selectedBgImage = localStorage["visual-bookmarks.background.image"];
        var configURI = localStorage["visual-bookmarks.branding.config-uri"];
        Migration.logger.info("Current background image setting: %s", selectedBgImage);
        var db = window.openDatabase(WEBDATABASE_NAME_1X, WEBDATABASE_VERSION_1X, null, 0);
        try {
            selectedBgImage = JSON.parse(selectedBgImage);
            var brandingUUID = configURI ? JSON.parse(configURI).match(/branding\/(.+?)\/config\.json$/)[1] : null;
            if (DEFAULT_BACKGROUND_IMAGES_1X.indexOf(selectedBgImage) === -1) {
                parallelTasks.bgImage = function (callback) {
                    db.readTransaction(function (tx) {
                        var key = "background:" + selectedBgImage;
                        tx.executeSql("SELECT value FROM storage WHERE key = ?", [key], function (tx, resultSet) {
                            if (!resultSet.rows.length) {
                                Migration.logger.error("No background key in the database: %s", key);
                                return callback();
                            }
                            try {
                                var value = JSON.parse(resultSet.rows.item(0).value);
                            } catch (ex) {
                                Migration.logger.error("Not a valid background key in the database: %s", ex.message);
                                return callback();
                            }
                            if (/^chrome\-extension/.test(value) || /^filesystem:chrome\-extension/.test(value)) {
                                if (/^chrome\-extension/.test(value))
                                    value = "filesystem:" + value;
                                loadResource({
                                    url: value,
                                    responseType: "blob",
                                    onload: function (evt) {
                                        if (!this.response) {
                                            Migration.logger.error("Error (no data) while loading blob background image file: %s", value);
                                            return callback();
                                        }
                                        var URL = window.URL || window.webkitURL;
                                        var objectURL = URL.createObjectURL(this.response);
                                        BackgroundImages.upload(objectURL, function () {
                                            Settings.set("backgroundImage", "user");
                                            URL.revokeObjectURL(objectURL);
                                            callback();
                                        });
                                    },
                                    onerror: function (evt) {
                                        Migration.logger.info("Error (%s) while loading blob background image file: %s", evt.type, value);
                                        callback();
                                    }
                                });
                            } else if (/^data:image/.test(value)) {
                                var byteString = atob(value.split(",")[1]);
                                var buffer = new ArrayBuffer(byteString.length);
                                var intArray = new Uint8Array(buffer);
                                for (var i = 0; i < byteString.length; i++) {
                                    intArray[i] = byteString.charCodeAt(i);
                                }
                                var URL = window.URL || window.webkitURL;
                                var blob = new Blob([intArray], { type: "image/jpg" });
                                var objectURL = URL.createObjectURL(blob);
                                BackgroundImages.upload(objectURL, function () {
                                    Settings.set("backgroundImage", "user");
                                    URL.revokeObjectURL(objectURL);
                                    callback();
                                });
                            } else {
                                Migration.logger.info("Not a valid background image value: %s", value);
                                callback();
                            }
                        }, function (tx, err) {
                            Migration.logger.error("Read transaction error: %s", err.message);
                            callback();
                        });
                    });
                };
            } else {
                parallelTasks.bgImage = function (callback) {
                    if (!brandingUUID) {
                        Migration.logger.info("Error (no branding id) to load blob of default background image file: %s", selectedBgImage);
                        callback();
                        return;
                    }
                    loadResource({
                        url: "filesystem:chrome-extension://" + chrome.runtime.id + "/persistent/branding/" + brandingUUID + "/backgrounds/" + selectedBgImage,
                        responseType: "blob",
                        onload: function (evt) {
                            if (!this.response) {
                                Migration.logger.error("Error (no data) while loading blob of default background image file: %s", selectedBgImage);
                                return callback();
                            }
                            var URL = window.URL || window.webkitURL;
                            var objectURL = URL.createObjectURL(this.response);
                            BackgroundImages.upload(objectURL, function () {
                                Settings.set("backgroundImage", "user");
                                URL.revokeObjectURL(objectURL);
                                callback();
                            });
                        },
                        onerror: function (evt) {
                            Migration.logger.info("Error (%s) while loading blob of default background image file: %s", evt.type, selectedBgImage);
                            callback();
                        }
                    });
                };
            }
        } catch (ex) {
            Migration.logger.warn("Exception caught while migrating background image: %s", ex.message);
            Migration.logger.warn(ex.stack);
        }
        db.readTransaction(function (tx) {
            tx.executeSql("SELECT * FROM storage WHERE key LIKE 'thumbnail:%'", [], function (tx, resultSet) {
                var item;
                var dataUrl;
                var url;
                Migration.logger.info("Screenshots found: %i", resultSet.rows.length);
                for (var i = 0; i < resultSet.rows.length; i++) {
                    item = resultSet.rows.item(i);
                    try {
                        url = item.key.replace(/^thumbnail:/, "");
                        dataUrl = JSON.parse(resultSet.rows.item(i).value).image;
                        if (!dataUrl || /^chrome\-extension/.test(dataUrl))
                            continue;
                        Migration.logger.info("Extract screenshot for url: %s", url);
                        Screenshots.migrateOld(url, dataUrl);
                    } catch (ex) {
                        Migration.logger.error("Iterator error: %s", ex.message);
                    }
                }
            });
        }, function (tx, err) {
            Migration.logger.error("Read transaction error: %s", err.message);
        });
        Settings.set("uiThumbsType", 2);
        var now = Math.round(Date.now() / 1000);
        try {
            var tabs = JSON.parse(localStorage["visual-bookmarks.tabs"]);
            var gridPrefValue = localStorage["visual-bookmarks.tabs.count"] || localStorage["visual-bookmarks.tabs.count:default"];
            var backbonePrefValue = JSON.parse(gridPrefValue);
            var backbone = [
                backbonePrefValue.cols,
                backbonePrefValue.rows
            ];
            var totalPagesNum = backbone[0] * backbone[1];
            var thumbs = {};
            var dbRecords = {
                thumbs: [],
                thumbs_shown: []
            };
            var thumbShown;
            var emptyThumbs = 0;
            var hiddenThumbs = 0;
            Settings.set("layoutX", backbone[0]);
            Settings.set("layoutY", backbone[1]);
            Settings.set("oldThumbsLayout", backbone);
            Settings.set("emptyLastThumb", false);
            if (totalPagesNum > 25)
                Settings.set("maxAvailableIncreased", true);
            for (var i = 0; i < totalPagesNum; i++) {
                tabs[i] = tabs[i] || {};
                if (tabs[i].visible === false)
                    hiddenThumbs += 1;
                thumbShown = {
                    pinned: 1,
                    position: i
                };
                if (tabs[i].url) {
                    thumbs[tabs[i].url] = thumbs[tabs[i].url] || {};
                    thumbs[tabs[i].url].url = tabs[i].url;
                    thumbs[tabs[i].url].title = tabs[i].title || null;
                    thumbShown.url = tabs[i].url;
                } else {
                    emptyThumbs += 1;
                }
                dbRecords.thumbs_shown.push(thumbShown);
            }
            for (var url in thumbs)
                dbRecords.thumbs.push(thumbs[url]);
            if (currentVersion === "2.11.1") {
                loadResource({ url: CLICKR_1X_URL.replace("%data%", "setka." + backbone[0] + backbone[1]) });
                loadResource({ url: CLICKR_1X_URL.replace("%data%", "emptythumb." + backbone[0] + backbone[1] + "." + emptyThumbs) });
                loadResource({ url: CLICKR_1X_URL.replace("%data%", "invthumb." + backbone[0] + backbone[1] + "." + hiddenThumbs) });
            }
            parallelTasks.thumbs = function (callback) {
                Migration.logger.info("Thumbs data: %j", dbRecords);
                Database.conn.upsert(dbRecords, function (err) {
                    if (err) {
                        Migration.logger.error("Error while migrating database: %s", err);
                        return callback();
                    }
                    Migration.logger.info("Successfully migrated all thumbs");
                    callback();
                });
            };
        } catch (ex) {
            Migration.logger.warn("Exception caught while migrating tabs structure: %s", ex.message);
            Migration.logger.warn(ex.stack);
        }
        parallel(parallelTasks, function () {
            localStorage.removeItem("application.version");
            InternalStructure.load(callback);
        });
    }
    function dropOldYSCookie() {
        TRUSTED_DOMAINS.forEach(function (trustedDomain) {
            var url = "http://" + trustedDomain;
            chrome.cookies.get({
                url: url,
                name: COOKIE_NAME
            }, function (cookie) {
                if (!cookie || !cookie.value)
                    return;
                var cookieValueParts = cookie.value.split("#").filter(function (ysPart) {
                    return ysPart.indexOf(COOKIE_VALUE_1X) !== 0;
                });
                chrome.cookies.set({
                    url: url,
                    name: COOKIE_NAME,
                    value: cookieValueParts.join("#")
                });
            });
        });
    }
    function migrateBranding(brandingPackageData) {
        Migration.logger.info("Migrate branding... (vbchrome=%s, vbch=%s)", brandingPackageData.vbchrome, brandingPackageData.vbch);
        var brandingPackage = "default";
        if ([
                "yandex",
                "tb"
            ].indexOf(brandingPackageData.vbchrome) !== -1) {
            Migration.logger.info("Choose old branding data");
            if (brandingPackageData.vbchrome === "yandex") {
                brandingPackage = "default";
            } else {
                var backgrounds;
                try {
                    backgrounds = JSON.parse(localStorage["visual-bookmarks.backgrounds"]);
                    if (!Array.isArray(backgrounds)) {
                        backgrounds = [];
                    }
                } catch (ex) {
                    backgrounds = [];
                }
                switch (backgrounds[0]) {
                case "gs.jpg":
                    brandingPackage = "turkey_galatasaray";
                    break;
                case "bjk.jpg":
                    brandingPackage = "turkey_besiktas";
                    break;
                case "fb.jpg":
                    brandingPackage = "turkey_fenerbahce";
                    break;
                default:
                    brandingPackage = "turkey_elements";
                }
            }
        } else {
            Migration.logger.info("Choose new branding data");
            switch (brandingPackageData.vbch) {
            case "ua":
                brandingPackage = "ua";
                break;
            case "tb":
                brandingPackage = "turkey_elements";
                break;
            default:
                brandingPackage = "default";
            }
        }
        Settings.set("brandingPackage", brandingPackage);
        Migration.logger.info("Branding package saved: %s", brandingPackage);
        switch (brandingPackage) {
        case "ua":
            chrome.tabs.create({ url: "http://element.yandex.ua/welcome/updatevbch" });
            break;
        case "turkey_galatasaray":
        case "turkey_besiktas":
        case "turkey_fenerbahce":
        case "turkey_elements":
            chrome.tabs.create({ url: "http://element.yandex.com.tr/welcome/updatevbch" });
            break;
        default:
            chrome.tabs.create({ url: "http://element.yandex.ru/welcome/updatevbch" });
        }
    }
    function recreateAlarm(alarmName, runImmediately) {
        if (!periodicalAlarms[alarmName])
            return;
        Migration.logger.info("Create alarm %s with periodInMinutes %i", alarmName, periodicalAlarms[alarmName].periodInMinutes);
        chrome.alarms.create(alarmName, {
            periodInMinutes: periodicalAlarms[alarmName].periodInMinutes,
            delayInMinutes: periodicalAlarms[alarmName].periodInMinutes
        });
        if (!periodicalAlarms[alarmName].delay || runImmediately) {
            Migration.logger.info("Run alarm immediately after creation: %s", alarmName);
            (window.internalAlarmListeners || []).forEach(function (alarmListener) {
                alarmListener({
                    name: alarmName,
                    scheduledTime: Date.now(),
                    periodInMinutes: periodicalAlarms[alarmName].periodInMinutes
                });
            });
        }
    }
    function processAlarms(firedAlarmsQueue) {
        firedAlarmsQueue.forEach(function (alarmInfo) {
            Migration.logger.info("Run alarm fired before startup: %s", alarmInfo.name);
            (window.internalAlarmListeners || []).forEach(function (alarmListener) {
                alarmListener(alarmInfo);
            });
        });
        firedAlarmsQueue.length = 0;
        (window.internalAlarmListeners || []).forEach(function (alarmListener) {
            chrome.alarms.onAlarm.addListener(alarmListener);
        });
    }
    function scheduleCheckAlarms() {
        window.setTimeout(function () {
            chrome.alarms.getAll(function (alarms) {
                Migration.logger.info("Existing alarms in browser: %j", alarms.map(function (a) {
                    return a.name;
                }));
                Object.keys(periodicalAlarms).forEach(function (alarmName) {
                    var alarmExists = alarms.some(function (alarmInfo) {
                        return alarmInfo.name === alarmName;
                    });
                    if (alarmExists)
                        return;
                    Migration.logger.info("Missing alarm: %s", alarmName);
                    recreateAlarm(alarmName);
                });
                Migration.logger.info("Checking for overslept alarms.");
                alarms.forEach(function (alarmInfo) {
                    if (Date.now() > alarmInfo.scheduledTime) {
                        alarmInfo.planned = formatDate(new Date(alarmInfo.scheduledTime), "%Y-%M-%D %H:%N:%S");
                        Migration.logger.info("Alarm has overslept: %j", alarmInfo);
                        if (alarmInfo.periodInMinutes) {
                            recreateAlarm(alarmInfo.name, true);
                        } else {
                            (window.internalAlarmListeners || []).forEach(function (alarmListener) {
                                alarmListener({
                                    name: alarmInfo.name,
                                    scheduledTime: Date.now()
                                });
                            });
                        }
                    }
                });
                delete window.internalAlarmListeners;
            });
        }, INIT_TIMEOUT_MS);
    }
    function versionCompare(v1, v2, options) {
        var lexicographical = options && options.lexicographical, zeroExtend = options && options.zeroExtend, v1parts = v1.split("."), v2parts = v2.split(".");
        function isValidPart(x) {
            return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
        }
        if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
            return NaN;
        }
        if (zeroExtend) {
            while (v1parts.length < v2parts.length)
                v1parts.push("0");
            while (v2parts.length < v1parts.length)
                v2parts.push("0");
        }
        if (!lexicographical) {
            v1parts = v1parts.map(Number);
            v2parts = v2parts.map(Number);
        }
        for (var i = 0; i < v1parts.length; ++i) {
            if (v2parts.length == i) {
                return 1;
            }
            if (v1parts[i] == v2parts[i]) {
                continue;
            } else if (v1parts[i] > v2parts[i]) {
                return 1;
            } else {
                return -1;
            }
        }
        if (v1parts.length != v2parts.length) {
            return -1;
        }
        return 0;
    }
    return createModule("Migration", {
        start: function Migration_start(firedAlarmsQueue, brandingPackageData) {
            var self = this;
            var installCase1 = localStorage["application.version"] !== undefined;
            var installCase2 = Settings.get("appInstallTime") === 0;
            var isCleanInstall = installCase2 && !installCase1;
            var versionsHistory = Settings.get("versionsHistory");
            var currentVersion = chrome.runtime.getManifest().version;
            var previousVersion;
            if (installCase1) {
                try {
                    previousVersion = JSON.parse(localStorage["application.version"]);
                    versionsHistory = [previousVersion];
                    Settings.set("versionsHistory", versionsHistory);
                } catch (ex) {
                    this.logger.error("Wrong application.version settings in localStorage: %s. Migration failed", localStorage["application.version"]);
                }
            } else {
                previousVersion = versionsHistory.length ? versionsHistory[versionsHistory.length - 1] : null;
            }
            var isUpgrade = previousVersion && currentVersion !== previousVersion;
            if (isUpgrade && versionCompare(currentVersion, "2.11", { zeroExtend: true }) >= 0 && versionCompare(previousVersion, "2.11", { zeroExtend: true }) < 0) {
                migrateBranding(brandingPackageData);
            }
            var backgroundImageNode = Branding.getXMLDocument("fastdial/config.xml").querySelector("background");
            var forceBackgroundChange = backgroundImageNode.getAttribute("force") === "true";
            var backgroundImage = backgroundImageNode.getAttribute("file");
            if (installCase2) {
                this.logger.info("installCase2 - чистая установка и обновление поверх 1.x");
                Settings.set("appInstallTime", Math.round(Date.now() / 1000));
                BackgroundImages.initialSelect(backgroundImage);
            }
            if (isCleanInstall || isUpgrade) {
                versionsHistory.push(currentVersion);
                Settings.set("versionsHistory", versionsHistory);
                if (isCleanInstall) {
                    this.logger.info("Clean install app %s", currentVersion);
                } else {
                    this.logger.info("Upgrade app from %s to %s", previousVersion, currentVersion);
                    BackgroundImages.migrateToCloudOnUpdate(forceBackgroundChange);
                }
            } else {
                this.logger.info("Starting app %s", currentVersion);
                Pickup.updatePickupAlarm();
            }
            this.logger.info("Build %s dated %s", Config.buildInfo.revision, new Date(Config.buildInfo.date * 1000));
            this.logger.info("Browser %s", getNavigator().userAgent);
            this.logger.info("Versions history %s", versionsHistory.join(", "));
            this.logger.info("Startup fired alarms: %i", firedAlarmsQueue.length);
            processAlarms(firedAlarmsQueue);
            scheduleCheckAlarms();
            if (isCleanInstall) {
                Primaries.onChanged.addListener(function onChangedListener(isSelected, selectedUI) {
                    Statistics.sendDayUseRequest(true);
                    Primaries.onChanged.removeListener(onChangedListener);
                });
                var sendUsageStat = localStorage[LEGACY_SENDSTAT_PREF];
                if (sendUsageStat !== "true") {
                    localStorage.removeItem(LEGACY_SENDSTAT_PREF);
                }
            }
            if (isUpgrade && !installCase1) {
                if (forceBackgroundChange) {
                    BackgroundImages.initialSelect(backgroundImage);
                }
            }
            if (isUpgrade) {
                var selectedBgImage = Settings.get("backgroundImage");
                var newSelectedBgImageId;
                Settings.get("backgroundImagesList").forEach(function (skinData) {
                    var leafName = skinData.image.split("/").pop();
                    if (selectedBgImage === leafName) {
                        newSelectedBgImageId = skinData.id;
                    }
                });
                if (newSelectedBgImageId) {
                    BackgroundImages.initialSelect(newSelectedBgImageId);
                }
            }
            var runOptions = {
                isCleanInstall: isCleanInstall,
                isUpgrade: isUpgrade
            };
            if (installCase1) {
                this.logger.info("installCase1 - обновление поверх 1.x и 2.0.1. Running from1x()..");
                from1x(function () {
                    Migration.migratePerFiles(previousVersion, currentVersion, function () {
                        Pickup.run({
                            withForceThumbs: true,
                            setAlarm: true,
                            firstRun: true
                        }, function () {
                            self.finalize(runOptions);
                        });
                    });
                });
            } else if (isUpgrade) {
                Migration.migratePerFiles(previousVersion, currentVersion, this.finalize.bind(this, runOptions));
            } else if (isCleanInstall) {
                CookieBackup.get(function (cookies) {
                    if (cookies && cookies.length) {
                        CookieBackup.restore(cookies);
                        Migration.finalize(runOptions);
                    } else {
                        Pickup.run({
                            withForceThumbs: true,
                            firstRun: true
                        }, Migration.finalize.bind(Migration, runOptions));
                    }
                });
            } else {
                this.finalize(runOptions);
            }
        },
        add: function (version, fn) {
            migrations.push({
                version: version,
                fn: fn
            });
        },
        migratePerFiles: function (previousVersion, currentVersion, callback) {
            callback = callback || noop;
            info("Start migration per files from %s to %s", previousVersion, currentVersion);
            if (!previousVersion) {
                return callback();
            }
            var tasks = [];
            tasks.push(function (callback) {
                callback(null, {
                    previousVersion: previousVersion,
                    currentVersion: currentVersion
                });
            });
            migrations.sort(function (a, b) {
                return a.version > b.version ? 1 : -1;
            });
            info("Migration files found: %s", migrations.map(function (m) {
                return m.version;
            }).join(" --> "));
            for (var i = 0; i < migrations.length; i++) {
                var m = migrations[i];
                if (versionCompare(m.version, previousVersion, { zeroExtend: true }) > 0 && versionCompare(m.version, currentVersion, { zeroExtend: true }) <= 0) {
                    tasks.push(m.fn);
                    info("Migration planned: %s", m.version);
                }
            }
            waterfall(tasks, function (err, data) {
                if (err) {
                    error("Error %j", err);
                    callback();
                    return;
                }
                info("All migrations finished.");
                callback();
            });
        },
        finalize: function (runOptions) {
            Screenshots.syncQueue();
            Advertisement.check();
        }
    });
}();
