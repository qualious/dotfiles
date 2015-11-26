(function () {
    "use strict";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    chrome[runtimeNamespace].sendMessage({ action: "contentScriptInjected" }, function (res) {
        if (!res || !res.needsWrite) {
            return;
        }
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.innerHTML = "Object.defineProperty(document,\"referrer\",{get:function(){return \"" + res.referer + "\"}});";
        try {
            document.documentElement.appendChild(script);
            document.documentElement.removeChild(script);
        } catch (ex) {
        }
    });
    chrome[runtimeNamespace].onMessage.addListener(function (req, sender, sendResponse) {
        if (req === "getTabLoadData") {
            var data = {
                referer: document.referrer || null,
                title: document.title || "",
                url: window.location.href
            };
            if (isYandexHost(window.location.host)) {
                data.yamm = getYamm();
            }
            getSpeedMetrics(function (speedData) {
                if (speedData) {
                    data.t = speedData;
                }
                try {
                    sendResponse(data);
                } catch (e) {
                }
            });
            return true;
        }
    });
    function isYandexHost(hostName) {
        return /(^|\.)(yandex\.(ru|ua|by|kz|net|com(\.tr)?)|(ya|narod|moikrug)\.ru)$/i.test(hostName);
    }
    function getYamm() {
        var metaNodes = document.getElementsByTagName("meta");
        for (var i = 0, len = metaNodes.length; i < len; i++) {
            var metaName = (metaNodes[i].name || "").toLowerCase();
            if (metaName == "yamm" && metaNodes[i].content) {
                return ("" + metaNodes[i].content).substr(0, 10);
                break;
            }
        }
    }
}());
