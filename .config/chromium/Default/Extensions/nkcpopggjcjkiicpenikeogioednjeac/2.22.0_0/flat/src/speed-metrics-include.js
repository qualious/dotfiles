(function () {
    "use strict";
    function checkDataAndNotify(data, callback) {
        var timing = performance.timing;
        if (timing.navigationStart <= 0 || data.html <= 0) {
            data = null;
        }
        for (var key in data) {
            if (data.hasOwnProperty(key) && (data[key] < 0 || data[key] >= 1000000)) {
                data = null;
                break;
            }
        }
        callback(data);
    }
    function getSpeedMetrics(callback) {
        if ((document.visibilityState || document.webkitVisibilityState) === "prerender") {
            checkDataAndNotify(null, callback);
        }
        var timing = performance.timing;
        var data = {
            dns: timing.domainLookupEnd - timing.domainLookupStart,
            tcp: timing.connectEnd - timing.connectStart,
            ttfb: timing.responseStart - timing.connectEnd,
            html: timing.responseEnd - timing.responseStart,
            "html-total": timing.responseEnd - timing.domainLookupStart
        };
        var tryAgain = true;
        requestAnimationFrame(calcFirstPaintTime, null);
        requestAnimationFrame(function () {
            setTimeout(function () {
                tryAgain = false;
            }, 1000);
        }, null);
        function calcFirstPaintTime() {
            var fp = chrome && chrome.loadTimes().firstPaintTime;
            if (fp) {
                fp = Math.floor(fp * 1000);
                data.ttfp = fp - timing.responseStart;
                data["ttfp-total"] = fp - timing.domainLookupStart;
                checkDataAndNotify(data, callback);
            } else if (tryAgain) {
                requestAnimationFrame(calcFirstPaintTime, null);
            } else {
                checkDataAndNotify(data, callback);
            }
        }
    }
    window.getSpeedMetrics = getSpeedMetrics;
}());
