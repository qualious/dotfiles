(function (globalScope) {
    "use strict";
    if (typeof define !== "undefined" && define.amd) {
        define([
            "flat/tabs",
            "flat/speed-metrics-parser"
        ], factory);
    } else {
        globalScope.BarNavig = factory(globalScope.tabs, globalScope.serializeSpeedMetrics);
    }
    function factory(tabs, serializeSpeedMetrics) {
        var BarNavig = function (params) {
            this.params = params;
            this.closedTabs = [];
            this._assertParams();
        };
        BarNavig.prototype = {
            CONTENT_MESSAGE: "getTabLoadData",
            CLOSED_TABS_TIMEOUT_MS: 5000,
            URL: {
                yandex: "bar-navig.yandex.ru/u",
                ua: "bar-navig.yandex.ru/u",
                tb: "bar-navig.yandex.com.tr/u"
            },
            closedTimeout: 0,
            excludes: [
                /^https:\/\/www\.google\.[a-z]+\/_\/chrome\/newtab.*/i,
                /^https:\/\/www\.google\.[a-z]+\/webhp\?sourceid=chrome-instant/i,
                /^chrome:\/\/newtab.*/i
            ],
            run: function () {
                tabs.init();
                tabs.onComplete.addListener(this._onNavigateComplete.bind(this));
                tabs.onClosed.addListener(this._tabCloseHandler.bind(this));
            },
            isEnabled: function () {
                return true;
            },
            updateParams: function (newParams) {
                Object.keys(newParams).forEach(function (paramName) {
                    this.params[paramName] = newParams[paramName];
                }, this);
            },
            _onNavigateComplete: function (tabId, tabData) {
                var url = tabData.urls[tabData.urls.length - 1];
                if (this._isGoodUrl(url) && this.isEnabled()) {
                    this._getDataFromContentScript(tabId, tabData);
                }
            },
            _getDataFromContentScript: function (tabId, tabData) {
                chrome.tabs.sendMessage(tabId, this.CONTENT_MESSAGE, function (params) {
                    if (params) {
                        if (tabData.realRef) {
                            params["real-referer"] = tabData.realRef;
                        }
                        if (tabData.uuid) {
                            params["tab-id"] = tabData.uuid.replace(/\-/g, "");
                        }
                        this._sendStats(tabId, params);
                    }
                }.bind(this));
            },
            _tabCloseHandler: function (tabId, tabData) {
                var url = tabData.urls[tabData.urls.length - 1];
                if (this._isGoodUrl(url) && this.isEnabled()) {
                    this.closedTabs.push(tabData.uuid.replace(/\-/g, ""));
                }
                if (this.closedTimeout) {
                    clearTimeout(this.closedTimeout);
                }
                this.closedTimeout = setTimeout(this._sendClosedStats.bind(this), this.CLOSED_TABS_TIMEOUT_MS);
            },
            _sendClosedStats: function () {
                if (this.closedTabs.length) {
                    var params = this._getParams();
                    params = this._clearCloseParams(params);
                    params["ctab-ids"] = this.closedTabs.join(".");
                    this._send(params);
                }
                this.closedTabs = [];
                this.closedTimeout = null;
            },
            _clearCloseParams: function (params) {
                delete params.brandID;
                delete params.post;
                params.tv = 6;
                return params;
            },
            _sendStats: function (tabId, params) {
                if (params.t) {
                    params.t = serializeSpeedMetrics(params.t);
                    params.tv = 6;
                }
                params = this._mix(params, this._getParams());
                if (this.isEnabled()) {
                    this._send(params);
                }
            },
            _send: function (params) {
                var request = new XMLHttpRequest();
                var url = this._getUrl();
                request.open("POST", url, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(this._serialize(this._clearParams(params)));
            },
            _getParams: function () {
                return {
                    ver: chrome.runtime.getManifest().version,
                    clid: this.params.clid,
                    yasoft: this.params.yasoft,
                    brandID: this.params.brid,
                    ui: this.params.ui,
                    show: 1,
                    post: 0,
                    urlinfo: this.params.urlinfo || 0,
                    status: 0,
                    r1: null
                };
            },
            _mix: function (obj, mixin) {
                Object.keys(mixin).forEach(function (key) {
                    if (!obj[key] && mixin[key] !== null && typeof mixin[key] !== "undefined") {
                        obj[key] = mixin[key];
                    }
                });
                return this._clearParams(obj);
            },
            _clearParams: function (obj) {
                Object.keys(obj).forEach(function (key) {
                    if (obj[key] === null || typeof obj[key] === "undefined" || obj[key] === "") {
                        delete obj[key];
                    }
                });
                return obj;
            },
            _serialize: function (obj) {
                var params = Object.keys(obj).map(function (key) {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
                });
                return params.join("&");
            },
            _assertParams: function () {
                var required = [
                    "clid",
                    "yasoft",
                    "ver",
                    "ui",
                    "brid"
                ];
                var self = this;
                required.forEach(function (param) {
                    if (typeof self.params[param] === "undefined") {
                        throw new Error("Param " + param + " is required for Bar-navig");
                    }
                });
            },
            _isGoodUrl: function (url) {
                return !this.excludes.some(function (excludePattern) {
                    return excludePattern.test(url);
                });
            },
            _getUrl: function () {
                var url = this.URL.yandex;
                var protocol = "https://";
                if (this.URL[this.params.brid]) {
                    url = this.URL[this.params.brid];
                }
                return protocol + url;
            }
        };
        return BarNavig;
    }
}(typeof window !== "undefined" ? window : global));
