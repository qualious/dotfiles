Branding = function () {
    "use strict";
    var LEGACY_PREFIX_CLID = "yandex.statistics.clid.";
    var xmlDocuments = {};
    var vendorXMLDocument;
    var packageStructure = {};
    function replaceSpecialCharacters(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    }
    return createModule("Branding", {
        getXMLDocument: function Branding_getXMLDocument(path) {
            var packageName = this.packageName;
            if (!packageName)
                throw new Error("You needn't call Branding.getXMLDocument() until extension is loaded");
            if (!Config.brandings[packageName]) {
                Branding.logger.error("Branding not found in config: %s", packageName);
                return null;
            }
            if (!Config.brandings[packageName].xml[path])
                return null;
            if (!xmlDocuments[path]) {
                var xmlString = Config.brandings[packageName].xml[path].replace(/&(.+?);/gm, function (total, match) {
                    var output;
                    return [
                        "quot",
                        "amp",
                        "apos",
                        "lt",
                        "gt"
                    ].indexOf(match) === -1 ? replaceSpecialCharacters(I18N.getMessage("branding_" + packageName + "_" + match.replace(/\.|\-/g, "_"))) : total;
                });
                var parser = new DOMParser();
                xmlDocuments[path] = parser.parseFromString(xmlString, "text/xml");
            }
            return xmlDocuments[path];
        },
        findFile: function Branding_findFile(path) {
            if (packageStructure[path])
                return packageStructure[path];
            var parts = path.split("/");
            var pathValue = Config.brandings[this.packageName].structure;
            while (parts.length && pathValue !== undefined)
                pathValue = pathValue[parts.shift()];
            if (typeof pathValue !== "boolean")
                return packageStructure[path] = null;
            if (!pathValue)
                path = [
                    "locale",
                    getCurrentLocale(true),
                    path
                ].join("/");
            return packageStructure[path] = chrome.runtime.getURL("/brandings/" + this.packageName + "/" + path);
        },
        expandURL: function Branding_expandURL(url, params, encodeParams) {
            var brandingId = this.id;
            params = params || {};
            encodeParams = encodeParams || false;
            var encode = function (value) {
                return encodeParams ? encodeURIComponent(value) : value;
            };
            return url.replace(/\{(.+?)\}/g, function (total, match) {
                if (match === "vbID")
                    return "vb-chrome";
                if (match === "brandID")
                    return encode(brandingId);
                if (params[match])
                    return encode(params[match]);
                if (/^clid[\d]+$/.test(match))
                    return encode(Branding.getClid(match.substr(4)));
                var namesRe = /^(product[12]|vendor)\.(\w+)$/;
                var matchNames = match.match(namesRe);
                if (matchNames) {
                    try {
                        switch (matchNames[1]) {
                        case "product1":
                            return encode(Branding.getXMLDocument("about/product.xml").querySelector("ProductName1").getAttribute(matchNames[2]) || "");
                        case "product2":
                            return encode(Branding.getXMLDocument("about/product.xml").querySelector("ProductName2").getAttribute(matchNames[2]) || "");
                        case "vendor":
                            return encode(Branding.getXMLDocument("about/product.xml").querySelector("VendorName").getAttribute(matchNames[2]) || "");
                        }
                    } catch (ex) {
                        return "";
                    }
                }
                return total;
            });
        },
        getClidFromXml: function (clidNum) {
            if (!vendorXMLDocument) {
                var parser = new DOMParser();
                vendorXMLDocument = parser.parseFromString(Config.vendor, "text/xml");
            }
            var node = vendorXMLDocument && vendorXMLDocument.querySelector("clid" + clidNum);
            return node ? node.textContent : "";
        },
        getClidFromStorage: function (clidNum) {
            var legacyKey = LEGACY_PREFIX_CLID + clidNum;
            if (localStorage[legacyKey] !== undefined) {
                try {
                    return JSON.parse(localStorage[legacyKey]);
                } catch (ex) {
                    Branding.logger.error("Can not parse clid from storage");
                }
            }
            return "";
        },
        getClid: function Branding_getClid(clidNum) {
            var clidFromXml = this.getClidFromXml(clidNum);
            var clidFromStorage = this.getClidFromStorage(clidNum);
            if (clidFromStorage) {
                return clidFromStorage;
            }
            return clidFromXml;
        },
        getPortalClid: function (clidNum) {
            var storageClid = this.getClidFromStorage(clidNum);
            if (!storageClid) {
                return this.getClidFromXml(clidNum);
            }
            return "";
        },
        get id() {
            return this.getXMLDocument("about/product.xml").querySelector("Product > BrandID").textContent;
        },
        get packageName() {
            return Settings.get("brandingPackage");
        }
    });
}();
