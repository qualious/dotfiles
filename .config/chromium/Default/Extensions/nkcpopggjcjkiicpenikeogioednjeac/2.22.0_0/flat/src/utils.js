(function (globalScope) {
    "use strict";
    var module = {
        noop: function () {
        },
        uuid: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = c == "x" ? r : r & 3 | 8;
                return v.toString(16);
            });
        },
        escapeRegExp: function (str) {
            return str.replace(/([\|\!\[\]\^\$\(\)\{\}\+\=\?\.\*\\])/g, "\\$1");
        },
        loadResource: function (options, ctx) {
            var xhr = new XMLHttpRequest();
            var method = options.body ? "POST" : "GET";
            var timeoutId;
            if (options.responseType) {
                xhr.responseType = options.responseType;
            }
            if (options.withCredentials) {
                try {
                    xhr.withCredentials = true;
                } catch (ex) {
                }
            }
            xhr.open(method, options.url, true);
            xhr.onload = function (evt) {
                if (!/^2/.test(xhr.status) && !/^3/.test(xhr.status)) {
                    xhr.onerror(evt);
                } else {
                    window.clearTimeout(timeoutId);
                    if (options.onload) {
                        options.onload.call(ctx || this, evt);
                    }
                }
            };
            xhr.onabort = xhr.onerror = function (evt) {
                window.clearTimeout(timeoutId);
                if (options.onerror) {
                    options.onerror.call(ctx || this, evt);
                }
            };
            if (options.bypassCache) {
                xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2005 00:00:00 GMT");
            }
            if (options.body) {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            }
            xhr.send(options.body || null);
            timeoutId = window.setTimeout(function () {
                xhr.abort();
            }, options.timeout || 25000);
            return xhr;
        },
        encodeQueryParams: function (obj, sep, eq) {
            sep = sep || "&";
            eq = eq || "=";
            var parts = [];
            var mapFn = function (val) {
                val = val || "";
                return key + eq + val;
            };
            for (var key in obj) {
                if (Array.isArray(obj[key])) {
                    obj[key] = obj[key].map(mapFn);
                    parts.push.apply(parts, obj[key]);
                } else {
                    if (obj[key] === undefined || obj[key] === null) {
                        obj[key] = "";
                    }
                    parts.push(encodeURIComponent(key) + eq + encodeURIComponent(obj[key]));
                }
            }
            return parts.join(sep);
        },
        parseQueryParams: function (str, sep, eq) {
            sep = sep || "&";
            eq = eq || "=";
            var parts = str.split(sep);
            var output = {};
            if (!str.length) {
                return output;
            }
            var filterFn = function (val) {
                return val && val.length > 0;
            };
            for (var i = 0; i < parts.length; i++) {
                var splitted = parts[i].split(eq);
                var key = splitted.shift();
                var value = splitted.filter(filterFn).join(eq);
                if (!output[key]) {
                    output[key] = value;
                } else if (Array.isArray(output[key])) {
                    output[key].push(value);
                } else {
                    output[key] = [
                        output[key],
                        value
                    ];
                }
            }
            return output;
        }
    };
    if (typeof define === "function" && define.amd) {
        define(module);
    } else {
        globalScope.flat = globalScope.flat || {};
        globalScope.flat.utils = module;
    }
}(typeof window !== "undefined" ? window : global));
