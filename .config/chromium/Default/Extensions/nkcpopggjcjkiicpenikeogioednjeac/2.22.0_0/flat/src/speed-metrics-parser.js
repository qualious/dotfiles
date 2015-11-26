(function (globalScope) {
    "use strict";
    var metrics = {
        names: [
            "dns",
            "tcp",
            "ttfb",
            "html",
            "html-total",
            "ttfp",
            "ttfp-total"
        ],
        ids: [
            "1037",
            "1038",
            "1039",
            "1040",
            "1040.906",
            "1041",
            "1041.906"
        ]
    };
    var serializeSpeedMetrics = function (timingData) {
        if (!timingData) {
            return null;
        }
        var result = [];
        for (var i = 0, len = metrics.names.length; i < len; i++) {
            var paramName = metrics.names[i];
            var paramId = metrics.ids[i];
            if (timingData.hasOwnProperty(paramName)) {
                result.push(paramId + "-" + timingData[paramName]);
            }
        }
        return result.join("_");
    };
    if (typeof define === "function" && define.amd) {
        define(function () {
            return serializeSpeedMetrics;
        });
    } else {
        globalScope.serializeSpeedMetrics = serializeSpeedMetrics;
    }
}(typeof window !== "undefined" ? window : global));
