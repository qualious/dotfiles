(function (globalScope) {
    "use strict";
    if (typeof define !== "undefined" && define.amd) {
        define([], factory);
    } else {
        globalScope.clckStatistics = factory();
    }
    function factory() {
        var appVersion = "2-9-0";
        var appVersionShort = "2-9";
        var ClckStatistics = function (params) {
            this.pid = 12;
            this.cid = 72359;
            this.feature = "mail";
            this.platform = "chrome";
            if (typeof params === "object") {
                this._setup(params);
            }
        };
        ClckStatistics.prototype = {
            urlPattern: "https://clck.yandex.ru/click/dtype=stred/pid={pid}/cid={cid}/path={path}/*",
            pathPattern: "{platform}.{feature}.{version}.{action}",
            versionPattern: /(\d+)(?:\.|-)(\d+)(?:\.|-)(\d+)/i,
            sendAction: function (action, useFullVersionFormat) {
                var pathParams = {
                    platform: this.platform,
                    feature: this.feature,
                    version: useFullVersionFormat ? appVersion : appVersionShort,
                    action: action,
                    common: Boolean(this.common)
                };
                var params = {
                    pid: this.pid,
                    cid: this.cid,
                    path: this._processPattern(pathParams, this.pathPattern)
                };
                var url = this._processPattern(params, this.urlPattern);
                this._send(url);
            },
            sendPath: function (path) {
                var params = {
                    pid: this.pid,
                    cid: this.cid,
                    path: path
                };
                var url = this._processPattern(params, this.urlPattern);
                this._send(url);
            },
            _setup: function (params) {
                var self = this;
                Object.keys(params).forEach(function (key) {
                    self[key] = params[key];
                });
            },
            _send: function (url) {
                var request = new XMLHttpRequest();
                request.open("GET", url, true);
                request.send();
            },
            _processPattern: function (params, pattern) {
                var url = pattern;
                if (pattern === this.pathPattern && params.common) {
                    url = url.replace("{feature}.", "");
                }
                Object.keys(params).forEach(function (key) {
                    url = url.replace("{" + key + "}", params[key]);
                });
                return url;
            },
            _getFormattedVersion: function (version) {
                var matches = version.match(this.versionPattern);
                var versions = {};
                if (matches && matches.length > 3) {
                    versions.full = matches.slice(1, 4).join("-");
                    versions.short = matches.slice(1, 3).join("-");
                }
                return versions;
            },
            set version(value) {
                if (!this.versionPattern.test(value)) {
                    throw new Error("Invalid version format. You must use X.X.X or X-X-X");
                }
                var versions = this._getFormattedVersion(value);
                appVersion = versions.full;
                appVersionShort = versions.short;
            },
            get version() {
                return appVersion;
            }
        };
        return ClckStatistics;
    }
}(typeof window !== "undefined" ? window : global));
