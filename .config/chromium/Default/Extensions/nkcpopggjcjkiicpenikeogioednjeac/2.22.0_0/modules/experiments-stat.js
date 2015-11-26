window.ExperimentsStat = function () {
    "use strict";
    var statUrl = "http://clck.yandex.ru/click/";
    var defaultStatConfig = {
        dtype: "elduse",
        path: "tech.yaelements.dayuse",
        slots: [
            0,
            0,
            0
        ],
        vars: {
            "ui": "",
            "bro": "chrome",
            "clid1": "",
            "dayuse": 0,
            "productname": "vbch",
            "ver": chrome.runtime.getManifest().version.replace(/\./g, "-")
        }
    };
    return createModule("ExperimentsStat", {
        onMessage: function (req) {
            if (req.action === "sendDayuse") {
                this.send();
            }
        },
        send: function () {
            this._sendRequest({
                slots: this._getSlots(),
                vars: {
                    "dayuse": ProductDayUse.getDayuseCount(),
                    "clid1": Branding.getClid(1),
                    "ui": Statistics.guid
                }
            });
        },
        _getSlots: function () {
            var expList = window.Experiments ? window.Experiments.getExperimentsList() : [];
            var currentExp = expList[0];
            var slot = currentExp ? currentExp.testId : 0;
            var bucket = currentExp ? currentExp.bucket : 0;
            return [
                slot,
                slot,
                bucket
            ];
        },
        _sendRequest: function (config) {
            var xhr = new XMLHttpRequest();
            var mergedConfig = this._mergeConfig(config);
            xhr.open("GET", this._createStatUrl(mergedConfig));
            xhr.send();
        },
        _mergeConfig: function (newConfig) {
            return copyOwnProperties(newConfig, defaultStatConfig, true);
        },
        _createStatUrl: function (config) {
            return Object.keys(config).reduce(function (result, configKey) {
                return result + this._processConfigParam(configKey, config[configKey]) + "/";
            }.bind(this), statUrl) + "*";
        },
        _processConfigParam: function (name, value) {
            var resultPart = name + "=";
            if (Array.isArray(value)) {
                return resultPart + this._processArrayValue(value);
            } else if (typeof value === "object" && value !== null) {
                return resultPart + this._processObjectValue(value);
            }
            return resultPart + value;
        },
        _processArrayValue: function (array) {
            return array.join(",");
        },
        _processObjectValue: function (object) {
            return Object.keys(object).map(function (key) {
                return "-" + key + "=" + object[key];
            }).join(",");
        }
    });
}();
