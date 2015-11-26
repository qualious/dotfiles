var ProductDayUse = function () {
    "use strict";
    var PRODUCT_STAT_URL = "https://clck.yandex.ru/click/dtype=elduse/product=vb/path=batch/*";
    var MAX_BOOKMARK_COUNT = 999999;
    var SECONDS_IN_DAY = 86400;
    function getStat(callback) {
        createStatArray(callback);
    }
    function createStatArray(callback) {
        var statArr = [
            getGridStat(),
            getDayUseCtag(),
            getInstallCtag(),
            getUIDCtag(),
            {
                ctag: "background",
                vars: getBackgroundStat()
            },
            { ctag: getSearchState() },
            { ctag: getThumbsViewState() },
            { ctag: getBookPanelState() },
            { ctag: getStatPermissionState() }
        ];
        if (Settings.get("sendUsageStat")) {
            appendUsageStat(statArr, callback);
        } else {
            callback(statArr);
        }
    }
    function appendUsageStat(statArr, callback) {
        chrome.bookmarks.getRecent(MAX_BOOKMARK_COUNT, function (data) {
            if (data) {
                statArr.push({
                    ctag: "bmcount",
                    vars: { count: roundBookmarksCount(data.length) }
                });
            }
            callback(statArr);
        });
    }
    function getInstallCtag() {
        return {
            ctag: "install",
            vars: { count: getDaysFromInstallCount() === 0 ? 1 : 0 }
        };
    }
    function getDayUseCtag() {
        return {
            ctag: "dayusevb",
            vars: {
                count: getDaysFromInstallCount(),
                clid1: Branding.getClid(1)
            }
        };
    }
    function getUIDCtag() {
        return {
            ctag: "uid",
            vars: { value: Statistics.guid }
        };
    }
    function getGridStat() {
        var childStatArr = [];
        InternalStructure.iterate({ visible: true }, function (thumb, index) {
            var thumbStatArr = [];
            index = +index + 1;
            if (thumb.type === InternalStructure.THUMB_TYPE.AUTO_THUMB) {
                thumbStatArr.push({ ctag: "thumbauto" });
            } else if (thumb.type === InternalStructure.THUMB_TYPE.DEF_THUMB) {
                thumbStatArr.push({ ctag: "thumbdef" });
            } else if (thumb.type === InternalStructure.THUMB_TYPE.USER_THUMB) {
                thumbStatArr.push({ ctag: "thumbuser" });
            } else {
            }
            thumbStatArr.push({ ctag: thumb.pinned ? "thumbpin" : "thumbpinoff" });
            childStatArr.push({
                ctag: index,
                children: thumbStatArr
            });
        });
        childStatArr.push({ ctag: getScrollStat() });
        childStatArr.push({ ctag: Settings.get("pickupFirstCount") === InternalStructure.length ? "grauto" : "gruser" });
        var gridStat = {
            ctag: "grid_" + InternalStructure.length,
            children: childStatArr
        };
        return gridStat;
    }
    function getScrollStat() {
        var currentTime = Date.now() / 1000;
        var scrollWasVisible = currentTime - Settings.get("lastScrollTimeOn") < SECONDS_IN_DAY;
        var scrollWasInvisible = currentTime - Settings.get("lastScrollTimeOff") < SECONDS_IN_DAY;
        if (!scrollWasInvisible && scrollWasVisible) {
            return "grscrollon";
        }
        return "grscrolloff";
    }
    function getBackgroundStat() {
        var set;
        var backImg = Settings.get("backgroundImage");
        var xmlDoc = Branding.getXMLDocument("fastdial/config.xml");
        var defBackImg = xmlDoc.querySelector("background").getAttribute("file");
        if (backImg === "user") {
            set = "userown";
        } else if (backImg === defBackImg) {
            set = "def";
        } else {
            set = "user";
        }
        return {
            name: backImg,
            set: set
        };
    }
    function getDaysFromInstallCount() {
        var installTime = Settings.get("appInstallTime") || Date.now() / 1000;
        var now = Date.now() / 1000;
        var endOfInstallDayTime = Statistics.getEndOfDayTime(installTime);
        return Math.floor((now - endOfInstallDayTime) / SECONDS_IN_DAY);
    }
    function roundBookmarksCount(count) {
        var roundStep;
        if (count < 101) {
            roundStep = 5;
        } else if (count < 201) {
            roundStep = 20;
        } else if (count < 501) {
            roundStep = 50;
        } else {
            return 501;
        }
        var remainder = count % roundStep;
        count = count - remainder + (remainder === 0 ? 0 : roundStep);
        return count;
    }
    function getSearchState() {
        return Settings.get("showSearchForm") ? "searchon" : "searchoff";
    }
    function getThumbsViewState() {
        var variants = {
            "1": "thumbviewlogo",
            "2": "thumbviewboth",
            "3": "thumbviewscreen"
        };
        return variants[Settings.get("uiThumbsType")];
    }
    function getBookPanelState() {
        return Settings.get("showBookmarks") ? "bookpanelon" : "bookpaneloff";
    }
    function getStatPermissionState() {
        return Settings.get("sendUsageStat") ? "stsendon" : "stsendoff";
    }
    return createModule("ProductDayUse", {
        onMessage: function Settings_onMessage(req) {
            if (req.action === "setScrollState") {
                Settings.set("lastScrollTime" + (req.value ? "On" : "Off"), Math.round(Date.now() / 1000));
            } else if (req.action === "sendDayuse") {
                this.sendDayUseRequest();
            }
        },
        sendDayUseRequest: function ProductDayUse_sendDayUseRequest() {
            getStat(function (statArr) {
                var counters = [{
                        "parent-path": "chrome",
                        children: [{
                                ctag: "vb",
                                children: [{
                                        ctag: getVersionForStat(),
                                        children: statArr
                                    }]
                            }]
                    }];
                try {
                    var countersStr = JSON.stringify(counters);
                } catch (error) {
                    this.logger.error("Can't stringify counters!");
                    return;
                }
                this.logger.info("Send stat to url: %s, %j", PRODUCT_STAT_URL, counters);
                var request = new XMLHttpRequest();
                request.open("POST", PRODUCT_STAT_URL, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send("path=" + encodeURIComponent("/batch") + "&counters=" + encodeURIComponent(countersStr));
            }.bind(this));
        },
        getDayuseCount: getDaysFromInstallCount
    });
}();
