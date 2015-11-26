(function (exports) {
    "use strict";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    exports.NTP_DEFAULT_URL = "chrome://newtab/";
    exports.parallel = function (tasks, callback, ctx) {
        if (!(this instanceof exports.parallel))
            return new exports.parallel(tasks, callback, ctx);
        var isNamedQueue = !Array.isArray(tasks);
        var tasksKeys = isNamedQueue ? Object.keys(tasks) : new Array(tasks.length);
        this.completed = false;
        this.result = isNamedQueue ? {} : [];
        this.ctx = ctx;
        if (typeof callback === "function")
            this.addListener(callback);
        if (!tasksKeys.length) {
            while (callback = this._listeners.shift())
                callback.call(this.ctx, this.result);
            return;
        }
        var tasksTotalNum = tasksKeys.length;
        var tasksProcessedNum = 0;
        (function processTasks() {
            if (!tasksKeys.length)
                return;
            var self = this;
            var ctx = this.ctx;
            var taskIndex = tasksKeys.shift() || tasks.length - tasksKeys.length - 1;
            tasks[taskIndex].call(ctx, function (data) {
                self.result[taskIndex] = data;
                tasksProcessedNum += 1;
                if (tasksProcessedNum < tasksTotalNum)
                    return processTasks.call(self);
                self.completed = true;
                while (callback = self._listeners.shift()) {
                    callback.call(ctx, self.result);
                }
            });
            processTasks.call(this);
        }.call(this));
    };
    exports.parallel.prototype = {
        completed: false,
        result: null,
        ctx: undefined,
        addListener: function listenerObj_addListener(callback) {
            if (typeof callback !== "function")
                return;
            if (this.completed)
                return callback.call(this.ctx, this.result);
            this._listeners = this._listeners || [];
            if (this._listeners.indexOf(callback) === -1)
                this._listeners.push(callback);
        },
        removeListener: function listenerObj_removeListener(callback) {
            if (typeof callback !== "function")
                return;
            this._listeners = this._listeners || [];
            var index = this._listeners.indexOf(callback);
            if (index !== -1)
                this._listeners.splice(index, 1);
        }
    };
    exports.waterfall = function () {
        "use strict";
        var nextTick = function (fn) {
            setTimeout(fn, 0);
        };
        var makeIterator = function (tasks) {
            var makeCallback = function (index) {
                var fn = function () {
                    if (tasks.length) {
                        tasks[index].apply(null, arguments);
                    }
                    return fn.next();
                };
                fn.next = function () {
                    return index < tasks.length - 1 ? makeCallback(index + 1) : null;
                };
                return fn;
            };
            return makeCallback(0);
        };
        var waterfall = function (tasks, callback) {
            callback = callback || function () {
            };
            if (!Array.isArray(tasks)) {
                var err = new Error("First argument to waterfall must be an array of functions");
                return callback(err);
            }
            if (!tasks.length) {
                return callback();
            }
            var wrapIterator = function (iterator) {
                return function (err) {
                    if (err) {
                        callback.apply(null, arguments);
                        callback = function () {
                        };
                    } else {
                        var args = Array.prototype.slice.call(arguments, 1);
                        var next = iterator.next();
                        if (next) {
                            args.push(wrapIterator(next));
                        } else {
                            args.push(callback);
                        }
                        nextTick(function () {
                            iterator.apply(null, args);
                        });
                    }
                };
            };
            wrapIterator(makeIterator(tasks))();
        };
        return waterfall;
    }();
    exports.createModule = function (moduleName, exportedObject) {
        var moduleObj = Object.create(exportedObject, {
            logger: {
                configurable: false,
                enumerable: false,
                writable: false,
                value: new Logger(moduleName)
            }
        });
        if (typeof exportedObject.onAlarm === "function") {
            exports.internalAlarmListeners = exports.internalAlarmListeners || [];
            exports.internalAlarmListeners.push(exportedObject.onAlarm.bind(moduleObj));
        }
        if (typeof exportedObject.onMessage === "function") {
            exports.internalMessageListeners = exports.internalMessageListeners || [];
            exports.internalMessageListeners.push(exportedObject.onMessage.bind(moduleObj));
        }
        return moduleObj;
    };
    exports.uuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c == "x" ? r : r & 3 | 8;
            return v.toString(16);
        });
    };
    exports.notifyTabs = function (command, data, tabId) {
        var msgBody = {
            type: command,
            data: data
        };
        if (tabId) {
            Logger.info("Message sent to tab %i: %s %j", tabId, msgBody && msgBody.type, msgBody);
            chrome.tabs.sendMessage(parseInt(tabId, 10), msgBody);
        } else {
            Logger.info("Message sent to every tab: %s %j", msgBody && msgBody.type, msgBody);
            chrome[runtimeNamespace].sendMessage(msgBody);
        }
    };
    exports.iterateVBTabs = function (callback) {
        chrome.windows.getAll({ populate: true }, function (windows) {
            windows.forEach(function (window) {
                window.tabs.forEach(function (tab) {
                    if (tab.url === exports.NTP_DEFAULT_URL) {
                        callback(tab);
                    }
                });
            });
        });
    };
    exports.isYandexHost = function (hostName) {
        return /(^|\.)(yandex\.(ru|ua|by|kz|net|com(\.tr)?)|(ya|narod|moikrug)\.ru)$/i.test(hostName);
    };
    exports.getNavigator = function () {
        return window.navigator;
    };
    exports.getVersionForStat = function () {
        return chrome.runtime.getManifest().version.replace(/\./g, "_");
    };
    exports.getCurrentLocale = function (fallbackToExisting) {
        var locale = chrome.i18n.getMessage("@@ui_locale").split("_")[0];
        if (fallbackToExisting === true) {
            if ([
                    "be",
                    "en",
                    "kk",
                    "ru",
                    "tr",
                    "uk"
                ].indexOf(locale) === -1) {
                locale = chrome.runtime.getManifest().default_locale;
            }
            ;
        }
        return locale;
    };
    exports.parseUrl = function (url, initialURL) {
        var output;
        var a = document.createElement("a");
        a.href = url;
        var normalUrl = a.href;
        if (!a.search.length) {
            normalUrl = normalUrl.replace(/\?$/, "");
            if (a.pathname === "/") {
                normalUrl = normalUrl.replace(/\/$/, "");
            }
        }
        if (a.hostname === "clck.yandex.ru") {
            var clickrMatches = url.match(/.+?\*(.+)/);
            if (clickrMatches) {
                return parseUrl(clickrMatches[1], url);
            }
            var clckrItem = Branding.getXMLDocument("fastdial/clckr.xml").querySelector("item[url='" + url + "']");
            if (clckrItem) {
                output = {
                    source: initialURL || url,
                    url: "http://" + clckrItem.getAttribute("domain"),
                    protocol: "http",
                    host: clckrItem.getAttribute("domain"),
                    path: "/",
                    port: 80,
                    query: "",
                    hash: ""
                };
            }
        }
        output = output || {
            source: initialURL || url,
            url: normalUrl,
            protocol: a.protocol.replace(":", ""),
            host: a.hostname.replace(/^www\./, ""),
            path: a.pathname,
            port: a.port || 80,
            query: a.search,
            hash: a.hash.replace("#", "")
        };
        return output;
    };
    exports.normalizeUrl = function (url) {
        return parseUrl(url).url;
    };
    exports.copyOwnProperties = function (from, to, deep) {
        if (typeof from !== "object" || typeof to !== "object")
            throw new TypeError("Not an object");
        for (var prop in from) {
            if (from.hasOwnProperty(prop)) {
                if (deep && typeof from[prop] === "object" && from[prop] !== null) {
                    if (!to[prop]) {
                        to[prop] = {};
                    }
                    copyOwnProperties(from[prop], to[prop]);
                } else {
                    to[prop] = from[prop];
                }
            }
        }
        return to;
    };
    exports.copyObj = function (src, deep) {
        if (typeof src !== "object" || !src) {
            throw new TypeError("Not an object");
        }
        if (Array.isArray(src)) {
            return src.map(function (el) {
                return deep ? copyObj(el, deep) : el;
            });
        }
        var result = {};
        for (var key in src) {
            result[key] = deep && typeof src[key] === "object" && src[key] !== null ? copyObj(src[key], deep) : src[key];
        }
        return result;
    };
    exports.loadResource = function (options, ctx) {
        var xhr = new XMLHttpRequest();
        var method = options.body ? "POST" : "GET";
        var timeoutId;
        if (options.responseType)
            xhr.responseType = options.responseType;
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
                options.onload && options.onload.call(ctx || this, evt);
            }
        };
        xhr.onabort = xhr.onerror = function (evt) {
            window.clearTimeout(timeoutId);
            options.onerror && options.onerror.call(ctx || this, evt);
        };
        if (options.bypassCache)
            xhr.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2005 00:00:00 GMT");
        if (options.body)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send(options.body || null);
        timeoutId = window.setTimeout(function () {
            xhr.abort();
        }, options.timeout || 25000);
        return xhr;
    };
    exports.resolveURL = function (baseURL, relativeURL) {
        var html = document.implementation.createHTMLDocument("");
        var base = html.createElement("base");
        base.setAttribute("href", baseURL);
        var img = html.createElement("img");
        img.setAttribute("src", relativeURL);
        html.head.appendChild(base);
        html.body.appendChild(img);
        return img.src;
    };
    exports.encodeQueryParams = function (obj, sep, eq) {
        sep = sep || "&";
        eq = eq || "=";
        var parts = [];
        for (var key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key] = obj[key].map(function (val) {
                    val = val || "";
                    return key + eq + val;
                });
                parts.push.apply(parts, obj[key]);
            } else {
                if (obj[key] === undefined || obj[key] === null)
                    obj[key] = "";
                parts.push(encodeURIComponent(key) + eq + encodeURIComponent(obj[key]));
            }
        }
        return parts.join(sep);
    };
    exports.parseQueryParams = function (str, sep, eq) {
        sep = sep || "&";
        eq = eq || "=";
        var parts = str.split(sep);
        var output = {};
        if (!str.length)
            return output;
        for (var i = 0; i < parts.length; i++) {
            var splitted = parts[i].split(eq);
            var key = splitted.shift();
            var value = splitted.filter(function (val) {
                return val && val.length > 0;
            }).join(eq);
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
    };
    exports.formatDate = function (date, format) {
        function leadZero(str) {
            return str.length > 1 ? str : "0" + str;
        }
        function formatCode(match, code) {
            switch (code) {
            case "d":
                return date.getDate();
            case "D":
                return leadZero("" + date.getDate());
            case "m":
                return date.getMonth() + 1;
            case "M":
                return leadZero("" + (date.getMonth() + 1));
            case "y":
                return ("" + date.getFullYear()).substr(2, 2);
            case "Y":
                return date.getFullYear();
            case "h":
                return date.getHours();
            case "H":
                return leadZero("" + date.getHours());
            case "n":
                return date.getMinutes();
            case "N":
                return leadZero("" + date.getMinutes());
            case "s":
                return date.getSeconds();
            case "S":
                return leadZero("" + date.getSeconds());
            case "%":
                return "%";
            default:
                return code;
            }
        }
        return format.replace(/%([dDmMyYhHnNsS%])/g, formatCode);
    };
    exports.dataUriToBlob = function (dataURI) {
        var byteString;
        if (dataURI.split(",")[0].indexOf("base64") >= 0) {
            byteString = atob(dataURI.split(",")[1]);
        } else {
            byteString = decodeURIComponent(dataURI.split(",")[1]);
        }
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var intArray = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i += 1) {
            intArray[i] = byteString.charCodeAt(i);
        }
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        return new Blob([intArray], { type: mimeString });
    };
    exports.toArray = function (list) {
        return Array.prototype.slice.call(list || [], 0);
    };
    exports.skladArray2Object = function (arr) {
        arr = Array.isArray(arr) ? arr : [];
        var result = {};
        arr.forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    exports.loadImage = function (url, callback) {
        var image = new Image();
        image.onload = function () {
            callback(null, image);
        };
        image.onerror = function (evt) {
            callback(evt.type);
        };
        image.src = url;
    };
    exports.getReversedMap = function (map) {
        var result = {};
        Object.keys(map).forEach(function (key) {
            result[map[key]] = key;
        });
        return result;
    };
    exports.removeDublicates = function (arr, prop) {
        if (!prop) {
            throw new Error("You should pass `prop` to removeDublicates()");
        }
        var existingValues = [];
        var result = [];
        arr.forEach(function (item) {
            var value = item[prop];
            if (existingValues.indexOf(value) === -1) {
                result.push(item);
                existingValues.push(value);
            }
        });
        return result;
    };
    exports.noop = function () {
    };
}(window));
