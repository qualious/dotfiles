(function (exports) {
    "use strict";
    exports.debug = {
        storage: function () {
            chrome.storage.local.get(console.log.bind(console));
        },
        thumbs: function () {
            InternalStructure.iterate(null, console.log.bind(console));
        },
        dumpdb: function () {
            InternalStructure.onAlarm({ name: "dumpStructure" });
        },
        syncbg: function () {
            BackgroundImages.onAlarm({ name: "cloudBackgrounds" });
        },
        ad: function () {
            Advertisement.onAlarm({ name: "advertisement" });
        },
        pickup: function (options) {
            Pickup.run(options);
        },
        files: function () {
            (window.webkitRequestFileSystem || window.requestFileSystem)(window.PERSISTENT, 0, function (fs) {
                function getAll(dir) {
                    var r = dir.createReader();
                    r.readEntries(function (entries) {
                        entries.forEach(function (entry) {
                            if (entry.isFile) {
                                console.log("[file]", dir.fullPath, entry.toURL());
                            } else {
                                console.log("[dir] " + entry.fullPath);
                                getAll(entry);
                            }
                        });
                    });
                }
                getAll(fs.root);
            });
        },
        logsize: function () {
            FS.request(function (fs) {
                [
                    "debug.log",
                    "debug-old.log"
                ].forEach(function (filename) {
                    fs.root.getFile(filename, {}, function (fileEntry) {
                        fileEntry.getMetadata(function (metadata) {
                            console.log(filename, metadata.size, "bytes");
                        });
                    }, function () {
                        console.log(filename, "not exists");
                    });
                });
            });
        },
        weekuse: function () {
            WeekUsage.onAlarm({ name: "weekuse" });
            return "weekuse ready to send";
        },
        dayuse: function () {
            ProductDayUse.onAlarm({ name: "dayuse" });
        },
        migrate: function (previousVersion, currentVersion) {
            previousVersion = previousVersion || "2.12.0";
            currentVersion = currentVersion || chrome.runtime.getManifest().version;
            Migration.migratePerFiles(previousVersion, currentVersion);
        },
        history: function () {
            if (!arguments.length) {
                chrome.history.search({ text: "" }, console.log.bind(console));
                return;
            }
            var start = 0;
            if (arguments[0] === false) {
                chrome.history.deleteAll(exports.noop);
                start = 1;
            }
            var ids = [];
            for (var i = start; i < arguments.length; i++) {
                var url = arguments[i];
                var count = 3;
                if (typeof arguments[i + 1] === "number") {
                    count = arguments[i + 1];
                    i++;
                }
                if (url.indexOf("http://") !== 0) {
                    url = "http://" + url;
                }
                for (var j = 0; j < count; j++) {
                    chrome.tabs.create({
                        url: url,
                        active: false
                    }, function (tab) {
                        ids.push(tab.id);
                    });
                }
            }
        },
        clearBackup: function () {
            CookieBackup.clear();
        },
        pickupCache: function () {
            PickupCache.get(log);
        },
        test: function () {
            chrome.tabs.create({
                url: chrome.runtime.getURL("test/index.html"),
                active: true
            }, noop);
        },
        get: function (type) {
            chrome.runtime.sendMessage({
                action: "debugInfo",
                type: type
            });
        }
    };
    exports.log = console.log.bind(console);
    exports.logj = function () {
        var args = [].map.call(arguments, function (a) {
            return typeof a === "object" ? JSON.stringify(a, false, 2) : a;
        });
        console.log.apply(console, args);
    };
}(window));
