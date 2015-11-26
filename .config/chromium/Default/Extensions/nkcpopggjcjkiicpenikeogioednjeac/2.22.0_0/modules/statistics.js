Statistics = function () {
    "use strict";
    var STAT_BASEURL = "https://soft.export.yandex.ru/status.xml";
    var GOODBYE_PAGE_URL = "https://element.yandex.{tld}/goodbye/vb/";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    var enableSendStat = true;
    var electionsTimeoutId;
    var clickerURL = "https://clck.yandex.ru/click/dtype=stred/pid={pid}/cid={cid}/path={path}/*http://yandex.ru";
    var PID = 12;
    var CID = 72482;
    var CLOSED_TABS_TIMEOUT_MS = 5000;
    var closedTimeout;
    var closedTabs = [];
    function info() {
        Statistics.logger.info.apply(Statistics.logger, arguments);
    }
    function isGoodUrl(url) {
        return url && /^(http|ftp)s?:\/\//.test(url);
    }
    function addMainBarnavigParams(params) {
        params = params || {};
        params.ver = chrome.runtime.getManifest().version;
        params.clid = Branding.getClid(4) || Branding.getClid(1);
        params.yasoft = "vbch";
        params.brandID = Branding.id;
        params.ui = Statistics.guid;
        params.show = 1;
        params.urlinfo = 0;
        params.r1 = Statistics.r1;
        return params;
    }
    function sendBarnavigRequest(params, isBackupServer) {
        var statNode = Branding.getXMLDocument("statistics/statistics.xml").querySelector("Statistics > BarNavigDomain");
        var requestURL = isBackupServer ? "https://" + statNode.getAttribute("backup") + "/u" : "https://" + statNode.getAttribute("primary") + "/u";
        loadResource({
            url: requestURL,
            withCredentials: true,
            body: encodeQueryParams(params),
            onload: function (evt) {
                if (!evt.target.responseXML) {
                    if (!isBackupServer)
                        sendBarnavigRequest(params, true);
                    return;
                }
                var r1Node = evt.target.responseXML.querySelector("urlinfo > r1");
                if (!r1Node)
                    return;
                Statistics.r1 = r1Node.textContent;
            },
            onerror: function () {
                if (!isBackupServer) {
                    sendBarnavigRequest(params, true);
                }
            }
        });
    }
    function getSoftRequestParams(additionalParams) {
        additionalParams = additionalParams || {};
        var platform = getNavigator().platform;
        if (platform.toLowerCase().indexOf("win") === 0) {
            platform = "winnt";
        }
        if (platform.toLowerCase().indexOf("mac") == 0) {
            platform = "darwin";
        }
        var bvMatches = getNavigator().userAgent.match(/Chrome\/([\d|\.]+)/);
        var output = {
            ui: Statistics.guid,
            ver: chrome.runtime.getManifest().version,
            lang: getCurrentLocale(),
            bv: bvMatches && bvMatches[1] || "",
            os: platform,
            yasoft: "vbch",
            brandID: Branding.id,
            fd: formatDate(new Date(Settings.get("appInstallTime") * 1000), "%Y.%M.%D")
        };
        var lastDayUseSendTime = Settings.get("lastDayUseSendTime");
        if (lastDayUseSendTime) {
            output.tl = lastDayUseSendTime;
        }
        var portalClid = Branding.getPortalClid(1);
        if (portalClid) {
            output.clid = portalClid;
        }
        copyOwnProperties(additionalParams, output);
        return output;
    }
    Tabs.onComplete.addListener(function (tabId, tabData) {
        var url = tabData.urls[tabData.urls.length - 1];
        if (!isGoodUrl(url)) {
            return;
        }
        chrome.tabs.sendMessage(tabId, "getTabLoadData", function (params) {
            if (params) {
                if (tabData.realRef) {
                    params["real-referer"] = tabData.realRef;
                }
                if (tabData.uuid) {
                    params["tab-id"] = tabData.uuid.replace(/\-/g, "");
                }
                params["target"] = tabData.navInExistingTab ? "c" : "t";
                Statistics.sendBarnavigRequest(params, tabId);
            }
        });
    });
    Tabs.onClosed.addListener(function (tabId, tabData, removeInfo) {
        if (!Settings.get("sendUsageStat")) {
            return;
        }
        var url = tabData.urls[tabData.urls.length - 1];
        if (!isGoodUrl(url)) {
            return;
        }
        closedTabs.push(tabData.uuid.replace(/\-/g, ""));
        if (closedTimeout) {
            clearTimeout(closedTimeout);
        }
        closedTimeout = setTimeout(function () {
            if (closedTabs.length) {
                var params = addMainBarnavigParams();
                params["ctab-ids"] = closedTabs.join(".");
                info("Send closed tabs, count: %i", closedTabs.length);
                sendBarnavigRequest(params, false);
            }
            closedTabs = [];
            closedTimeout = null;
        }, CLOSED_TABS_TIMEOUT_MS);
    });
    function sendDayUseMessage() {
        chrome.runtime.sendMessage({ action: "sendDayuse" });
    }
    return createModule("Statistics", {
        onAlarm: function Statistics_onAlarm(alarmInfo) {
            if (alarmInfo.name === "dayusePoll") {
                this.trySendDayUseRequest();
            }
            if (alarmInfo.name === "showStatModal") {
                Settings.set("showStatModal", true);
            }
        },
        onMessage: function Statistics_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "sendFrontendStat":
                this.sendClickerRequest(req.param);
                break;
            }
        },
        get uninstallRequestURL() {
            var params = getSoftRequestParams({ stat: "uninstall" });
            return STAT_BASEURL + "?" + encodeQueryParams(params);
        },
        get goodbyePageURL() {
            var tld;
            switch (Branding.id) {
            case "tb":
                tld = "com.tr";
                break;
            case "ua":
                tld = "ua";
                break;
            default:
                var locale = getCurrentLocale();
                if (locale === "tr") {
                    tld = "com.tr";
                } else if (locale === "uk") {
                    tld = "ua";
                } else {
                    tld = "ru";
                }
            }
            var url = GOODBYE_PAGE_URL.replace("{tld}", tld);
            var params = getSoftRequestParams({ stat: "uninstall" });
            return url + "?" + encodeQueryParams(params);
        },
        get enabled() {
            return enableSendStat && Settings.get("sendUsageStat");
        },
        set enabled(value) {
            enableSendStat = value;
            return value;
        },
        get guid() {
            var currentUI = Settings.get("statUID");
            if (!currentUI) {
                currentUI = "{" + uuid() + "}";
                Settings.set("statUID", currentUI);
            }
            return currentUI;
        },
        set guid(val) {
            Settings.set("statUID", val);
            return val;
        },
        get r1() {
            var r1 = Settings.get("r1String");
            return r1.length ? r1 : null;
        },
        set r1(value) {
            Settings.set("r1String", value);
        },
        sendClickerRequest: function Statistics_sendClickerRequest(param) {
            if (param === null || param === undefined) {
                return;
            }
            if (typeof param === "string") {
                param = { path: param };
            }
            if (!param.ignoreVersion) {
                param.path = getVersionForStat() + "." + param.path;
            }
            var url = clickerURL.replace("{path}", param.path).replace("{pid}", param.pid || PID).replace("{cid}", param.cid || CID);
            loadResource({
                withCredentials: true,
                bypassCache: true,
                url: url
            });
        },
        sendBarnavigRequest: function Statistics_sendBarnavigRequest(params, tabId) {
            if (!this.enabled) {
                return;
            }
            params = addMainBarnavigParams(params);
            if (params.t) {
                params.t = serializeSpeedMetrics(params.t);
                params.tv = 6;
            }
            parallel({
                decisions: function (callback) {
                    callback(Decisions.getURLStat(tabId));
                },
                stat: function (callback) {
                    chrome.storage.local.get("statsend", callback);
                }
            }, function (sources) {
                for (var sourceName in sources)
                    copyOwnProperties(sources[sourceName], params);
                if (params.statsend !== undefined)
                    chrome.storage.local.remove("statsend");
                for (var key in params) {
                    if (params[key] === undefined || params[key] === null) {
                        delete params[key];
                    }
                }
                sendBarnavigRequest(params, false);
            }, this);
        },
        END_OF_DAY_HOUR: 3,
        getEndOfDayTime: function (currentTime) {
            var now = new Date(currentTime * 1000);
            var dateNumber = now.getHours() < this.END_OF_DAY_HOUR ? now.getDate() - 1 : now.getDate();
            var treeAMDate = new Date(now.getFullYear(), now.getMonth(), dateNumber, this.END_OF_DAY_HOUR);
            return parseInt(treeAMDate / 1000, 10);
        },
        canSendDayuse: function () {
            var last = Settings.get("lastDayUseSendTime");
            var now = Date.now() / 1000;
            return last < this.getEndOfDayTime(now);
        },
        trySendDayUseRequest: function Statistics_trySendDayUseRequest(isInstall) {
            if (isInstall || this.canSendDayuse()) {
                this.sendDayUseRequest(isInstall);
            }
        },
        sendDayUseRequest: function (isInstall) {
            var stat = isInstall ? "install" : "dayuse";
            var params = getSoftRequestParams({ stat: stat });
            var url = STAT_BASEURL + "?" + encodeQueryParams(params);
            this.logger.info("Send %s statistics: %s", stat, url);
            loadResource({
                withCredentials: true,
                bypassCache: true,
                url: url,
                onload: function () {
                    var now = Math.round(Date.now() / 1000);
                    Settings.set("lastDayUseSendTime", now);
                    sendDayUseMessage();
                }
            });
        }
    });
}();
