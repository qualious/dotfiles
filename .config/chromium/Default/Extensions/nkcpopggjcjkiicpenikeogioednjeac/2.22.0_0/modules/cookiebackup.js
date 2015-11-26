CookieBackup = function () {
    "use strict";
    var DOMAIN = ".vb.yandex.addons";
    var KEY_VALUE_SEPARATOR = ".";
    var ITEMS_SEPARATOR = "#";
    var THUMB_COOKIE_NAME_PREFIX = "thumb";
    var SETTINGS_COOKIE_NAME = "settings";
    var MAX_COOKIE_SIZE = 5000;
    var MAX_TOTAL_COOKIE_SIZE_PER_DOMAIN = 10000;
    var EXPIRE_PERIOD = 3 * 24 * 60 * 60;
    var THUMB_TYPE_MAP = {
        def: InternalStructure.THUMB_TYPE.DEF_THUMB,
        user: InternalStructure.THUMB_TYPE.USER_THUMB,
        auto: InternalStructure.THUMB_TYPE.AUTO_THUMB
    };
    var DISPLAY_MODE_MAP = {
        titles: 1,
        logos: 2,
        screenshots: 3
    };
    function info() {
        CookieBackup.logger.info.apply(CookieBackup.logger, arguments);
    }
    function getThumbCookieValue(data) {
        var thumbTypeMap = getReversedMap(THUMB_TYPE_MAP);
        var objValue = {
            pin: data.pinned ? 1 : 0,
            visits: data.thumb && data.thumb.visits || 0,
            type: thumbTypeMap[data.type] || "auto",
            url: data.location && data.location.source || "",
            title: data.thumb && data.thumb.title || ""
        };
        var strValue = makeCookieValue(objValue);
        if (strValue.length > MAX_COOKIE_SIZE) {
            delete objValue.title;
            strValue = makeCookieValue(objValue);
        }
        return strValue;
    }
    function getSettingsCookieValue() {
        var displayMode = getReversedMap(DISPLAY_MODE_MAP);
        return makeCookieValue({ displayMode: displayMode[Settings.get("uiThumbsType")] || "titles" });
    }
    function makeCookieValue(obj) {
        obj = obj || {};
        var result = [];
        Object.keys(obj).forEach(function (key) {
            result.push(key + KEY_VALUE_SEPARATOR + encodeURIComponent(obj[key]));
        });
        return result.join(ITEMS_SEPARATOR);
    }
    function parseCookieValue(str) {
        str = str || "";
        var parts = str.split(ITEMS_SEPARATOR);
        var result = {};
        parts.forEach(function (part) {
            var firstSeparatorPosition = part.indexOf(KEY_VALUE_SEPARATOR);
            if (firstSeparatorPosition) {
                var key = part.substring(0, firstSeparatorPosition);
                result[key] = decodeURIComponent(part.substring(firstSeparatorPosition + KEY_VALUE_SEPARATOR.length));
            }
        });
        return result;
    }
    function makeThumbCookies() {
        var cookies = {};
        InternalStructure.iterate({}, function (item, index) {
            var cookieName = THUMB_COOKIE_NAME_PREFIX + index;
            cookies[cookieName] = getThumbCookieValue(item);
        });
        return cookies;
    }
    function saveCookies(cookies) {
        var savedBytesForDomain = 0;
        var domainIndex = 1;
        var expirationDate = Math.round(Date.now() / 1000) + EXPIRE_PERIOD;
        Object.keys(cookies).forEach(function (key) {
            var value = cookies[key];
            if (value.length > MAX_COOKIE_SIZE) {
                return;
            }
            savedBytesForDomain += value.length;
            if (savedBytesForDomain > MAX_TOTAL_COOKIE_SIZE_PER_DOMAIN) {
                domainIndex++;
                savedBytesForDomain = value.length;
            }
            var url = "http://backup" + domainIndex + DOMAIN;
            chrome.cookies.set({
                url: url,
                name: key,
                value: value,
                expirationDate: expirationDate
            });
        });
        info("Saved %i cookies on %i domain(s)", Object.keys(cookies).length, domainIndex);
    }
    function restoreThumbs(cookies) {
        var thumbCookies = cookies.filter(function (cookie) {
            return cookie.name.indexOf(THUMB_COOKIE_NAME_PREFIX) === 0;
        });
        thumbCookies.sort(function (a, b) {
            var indexA = parseInt(a.name.replace(THUMB_COOKIE_NAME_PREFIX, ""), 10);
            var indexB = parseInt(b.name.replace(THUMB_COOKIE_NAME_PREFIX, ""), 10);
            return indexA - indexB;
        });
        var newStructure = {};
        thumbCookies.forEach(function (cookie, index) {
            var parsedValue = parseCookieValue(cookie.value);
            newStructure[index] = {
                thumb: {
                    title: parsedValue.title,
                    visits: parseInt(parsedValue.visits, 10),
                    url: parsedValue.url
                },
                cloud: {},
                pinned: Boolean(parseInt(parsedValue.pin, 10)),
                type: THUMB_TYPE_MAP[parsedValue.type],
                location: parseUrl(parsedValue.url)
            };
            info("Restored thumb %i %s", index, parsedValue.url);
        });
        InternalStructure.clear();
        InternalStructure.setItem(newStructure);
        InternalStructure.iterate({ nonempty: true }, function (thumbData) {
            Thumbs.getMissingData(thumbData, { force: true });
        });
    }
    function restoreSettings(cookies) {
        var settingsCookie = cookies.filter(function (cookie) {
            return cookie.name === SETTINGS_COOKIE_NAME;
        })[0];
        if (settingsCookie) {
            var parsedValue = parseCookieValue(settingsCookie.value);
            var uiThumbsType = parseInt(DISPLAY_MODE_MAP[parsedValue.displayMode], 10);
            if (!isNaN(uiThumbsType)) {
                info("Restored setting %s: %i", "uiThumbsType", uiThumbsType);
                Settings.set("uiThumbsType", uiThumbsType);
            }
        }
    }
    return createModule("CookieBackup", {
        save: function () {
            var cookies = makeThumbCookies();
            cookies[SETTINGS_COOKIE_NAME] = getSettingsCookieValue();
            this.clear(function () {
                saveCookies(cookies);
            });
        },
        get: function (callback) {
            chrome.cookies.getAll({ domain: DOMAIN }, function (items) {
                callback(items || []);
            });
        },
        restore: function (cookies) {
            if (!cookies || !Array.isArray(cookies)) {
                throw new Error("Cookies not passed in CookieBackup.restore()");
            }
            info("Restoring...");
            restoreThumbs(cookies);
            restoreSettings(cookies);
            Settings.set("maxAvailableIncreased", InternalStructure.length > 25);
        },
        view: function () {
            this.get(function (items) {
                items.forEach(function (item) {
                    logj({
                        name: item.name,
                        domain: item.domain,
                        value: item.value
                    });
                });
            });
        },
        clear: function (callback) {
            callback = callback || noop;
            this.get(function (items) {
                var tasks = [];
                items.forEach(function (item) {
                    tasks.push(function (callback) {
                        chrome.cookies.remove({
                            url: "http://" + item.domain,
                            name: item.name
                        }, callback);
                    });
                });
                parallel(tasks, callback);
            });
        }
    });
}();
