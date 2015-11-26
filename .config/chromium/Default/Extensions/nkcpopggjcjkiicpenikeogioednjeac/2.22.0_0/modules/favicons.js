Favicons = function () {
    "use strict";
    var FAVICON_URL = "https://favicon.yandex.net/favicon/";
    return createModule("Favicons", {
        getChromeIcon: function Favicons_getChromeIcon(url) {
            return /^https?/.test(url) ? "chrome://favicon/" + url : "";
        },
        requestData: function Favicons_requestData(url, callback) {
            var locationObj = parseUrl(url);
            var defaultURL = /\.yandex\-team\.ru$/.test(locationObj.host) ? "http://" + locationObj.host + "/favicon.ico" : FAVICON_URL + locationObj.host;
            if (!/^http/.test(locationObj.protocol))
                return;
            loadImage(defaultURL, function (err, img) {
                if (err) {
                    return;
                }
                if (img.width > 1 && img.height > 1) {
                    return callback(defaultURL, Colors.getDominant(img));
                }
                HtmlLoader.get(locationObj.url, function (doc) {
                    if (!doc) {
                        return;
                    }
                    var iconElem = doc.querySelector("link[rel='icon'], link[rel='shortcut icon']");
                    if (!iconElem)
                        return;
                    var iconURL = resolveURL(locationObj.url, iconElem.getAttribute("href"));
                    if (/\.svg$/i.test(iconURL))
                        return;
                    loadImage(iconURL, function (err, img) {
                        if (err)
                            return;
                        callback(iconURL, Colors.getDominant(img));
                    });
                });
            });
        }
    });
}();
