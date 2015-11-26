CloudSource = function () {
    "use strict";
    var CLOUD_API_URL = "https://api.browser.yandex.ru/dashboard3/get/";
    var MAX_LOGO_WIDTH = 150;
    var MAX_LOGO_HEIGHT = 60;
    function validateImageAgainstSize(imgSource, callback) {
        var image = new Image();
        image.onload = function imgOnLoad() {
            callback(image.width <= MAX_LOGO_WIDTH && image.height <= MAX_LOGO_HEIGHT);
        };
        image.onerror = function imgOnError() {
            callback(false);
        };
        image.src = imgSource;
    }
    function validatePageManifest(manifestURL, callback) {
        loadResource({
            url: manifestURL,
            onload: function () {
                try {
                    var json = JSON.parse(this.responseText);
                } catch (ex) {
                    return;
                }
                if (!json.api_version || !json.layout || !json.layout.logo || !json.layout.color)
                    return;
                var currentLocale = getCurrentLocale();
                var color = typeof json.layout.color === "object" ? json.layout.color[currentLocale] || json.layout.color.default : json.layout.color;
                var logo = typeof json.layout.logo === "object" ? json.layout.logo[currentLocale] || json.layout.logo.default : json.layout.logo;
                if (!logo || !color || !/^#/.test(color) || [
                        4,
                        7
                    ].indexOf(color.length) === -1)
                    return;
                color = color.substr(1);
                if (color.length === 3)
                    color = color.split("").map(function (symbol) {
                        return symbol + symbol;
                    }).join("");
                callback(resolveURL(manifestURL, logo), color);
            }
        });
    }
    return createModule("CloudSource", {
        requestDataYBrowserAPI: function CloudSource_requestDataYBrowserAPI(domain, callback) {
            var cloudURL = CLOUD_API_URL + "?nodes=" + encodeURIComponent(domain) + "&brandID=" + Branding.id + "&lang=" + getCurrentLocale(true) + "&scale=0.43";
            loadResource({
                url: cloudURL,
                onload: function () {
                    try {
                        var json = JSON.parse(this.responseText);
                    } catch (ex) {
                        return;
                    }
                    if (json.error || !json || !json[0] || !json[0].bgcolor || !json[0].resources) {
                        return;
                    }
                    var res = json[0].resources;
                    if (!res.logo_main && !res.logo_sub) {
                        return;
                    }
                    var backgroundImage = res.logo_main;
                    var backgroundColor = json[0].bgcolor.replace(/^#/, "");
                    var backgroundImageSub;
                    if (res.logo_sub && res.logo_sub !== res.logo_main) {
                        backgroundImageSub = res.logo_sub;
                    }
                    callback(backgroundImage, backgroundColor, backgroundImageSub);
                }
            });
        },
        saveData: function (data) {
            var cloudData = {
                domain: data.domain,
                backgroundImage: data.backgroundImage,
                backgroundColor: data.backgroundColor
            };
            if (data.backgroundImageSub) {
                cloudData.backgroundImageSub = data.backgroundImageSub;
            }
            Database.conn.upsert("cloud_data", cloudData, function (err) {
                if (err)
                    throw new Error("Error updating cloud_data store: " + err);
            });
        },
        requestDataTableauAPI: function CloudSource_requestDataTableauAPI(url, callback) {
            var locationObj = parseUrl(url);
            HtmlLoader.get(locationObj.url, function (doc) {
                if (!doc)
                    return;
                var link = doc.querySelector("link[rel='yandex-tableau-widget']");
                if (!link) {
                    return;
                }
                var base = doc.querySelector("base");
                var baseUrl = base && base.getAttribute("href") || url;
                var manifestURL = resolveURL(baseUrl, link.getAttribute("href"));
                validatePageManifest(manifestURL, function (logoURL, color) {
                    validateImageAgainstSize(logoURL, function (isOK) {
                        if (isOK)
                            callback(logoURL, color);
                    });
                });
            });
        }
    });
}();
