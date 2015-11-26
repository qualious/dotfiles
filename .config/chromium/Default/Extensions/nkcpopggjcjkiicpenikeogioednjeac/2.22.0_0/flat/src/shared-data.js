(function (globalScope) {
    var notify = chrome.runtime.sendMessage || chrome.extension.sendRequest;
    var observer = chrome.runtime.onMessageExternal || chrome.extension.onRequestExternal;
    var logger = {
        info: function () {
        },
        log: function () {
        },
        error: function () {
        }
    };
    var save = function () {
    };
    var messages = {
        SUCCESS: "success",
        NOT_MODIFIED: "not modified",
        INCORRECT_DATA: "incorrect data",
        INCORRECT_TOPIC: "incorrect topic",
        REJECTED: "rejected",
        TIMEOUT: "timeout",
        SYNC_RESPONSE: "sync response",
        UNKNOWN: "unknown"
    };
    var sharedData = {
        init: function (options, callback) {
            if (options) {
                if (options.logger !== undefined) {
                    logger = options.logger;
                }
                if (options.save !== undefined) {
                    save = options.save;
                }
                if (options.syncTimeout !== undefined) {
                    this._syncTimeout = options.syncTimeout;
                }
            }
            this._observe();
            this._pull(callback);
        },
        weakSet: function (name, value) {
            if (this.get(name) === undefined) {
                this.set(name, value);
            }
        },
        set: function (name, value, saveData, setTimestamp) {
            var updatedData;
            if (typeof name === "string") {
                updatedData = this.setByName(name, value);
            } else {
                updatedData = this.setObject(name);
            }
            if (updatedData) {
                if (saveData !== false) {
                    save(updatedData);
                }
                if (setTimestamp !== false) {
                    this._data._timestamp = updatedData._timestamp = Date.now();
                }
                logger.log("Start notification logic for update: ", updatedData);
                this._notifyLocal({
                    topic: "yandex.shared.updated.local",
                    data: updatedData
                });
                this._push({
                    topic: "yandex.shared.updated.remote",
                    data: updatedData
                }, this._pushById.bind(this));
            }
        },
        setByName: function (name, value) {
            logger.log("Setting data by name: ", name, value);
            this._data[name] = value;
            var updatedData = {};
            updatedData[name] = value;
            return updatedData;
        },
        setObject: function (data) {
            logger.log("Setting batch data: ", data);
            var emptyObject = true;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    emptyObject = false;
                    this.setByName(key, data[key]);
                }
            }
            return emptyObject ? null : data;
        },
        get: function (name) {
            return this._data[name];
        },
        addListener: function (listener) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i] === listener) {
                    return;
                }
            }
            this._listeners.push(listener);
            logger.log("Add listener: ", this._listeners.length);
        },
        removeListener: function (listener) {
            for (var i = 0; i < this._listeners.length; i++) {
                if (this._listeners[i] === listener) {
                    this._listeners.splice(i, 1);
                    return;
                }
            }
        },
        _data: {},
        _listeners: [],
        _syncTimeout: 500,
        _pull: function (callback) {
            logger.log("Start pull logic");
            var results = {};
            this._push({ topic: "yandex.shared.sync-request" }, function (id, options) {
                notify(id, options, function (response) {
                    if (!response || response.message !== messages.SYNC_RESPONSE) {
                        return;
                    }
                    logger.log("Sync response from: ", id, response);
                    results[id] = response.data || {};
                }.bind(this));
            }.bind(this));
            setTimeout(function () {
                var resultId;
                for (var id in results) {
                    if (results.hasOwnProperty(id)) {
                        if (!resultId) {
                            resultId = id;
                        }
                        if (results[id]._timestamp > results[resultId]._timestamp) {
                            resultId = id;
                        }
                    }
                }
                var resultData = results[resultId];
                logger.info("Sync result data: ", resultData);
                this.set(resultData, null, true, false);
                if (callback) {
                    callback();
                }
            }.bind(this), this._syncTimeout);
        },
        _merge: function (received) {
            var notModified = true;
            var error = false;
            var message = messages.SUCCESS;
            var updatedData;
            if (!received) {
                error = true;
                message = messages.INCORRECT_DATA;
            } else if (!this._data) {
                this._data = updatedData = received;
            } else {
                updatedData = {};
                for (var name in received) {
                    if (received.hasOwnProperty(name)) {
                        var newValue = received[name];
                        logger.log("Merging new data: ", name, newValue, this._data[name]);
                        if (this._data[name] !== newValue) {
                            if (name !== "_timestamp") {
                                notModified = false;
                            }
                            this._data[name] = updatedData[name] = newValue;
                        }
                    }
                }
                message = notModified ? messages.NOT_MODIFIED : messages.SUCCESS;
            }
            if (message === messages.SUCCESS) {
                save(updatedData);
                this._notifyLocal({
                    topic: "yandex.shared.updated.remote",
                    data: updatedData
                });
            }
            return {
                error: error,
                message: message,
                updatedData: updatedData
            };
        },
        _observe: function () {
            observer.addListener(function (request, sender, sendResponse) {
                if (sender.id === chrome.runtime.id) {
                    return false;
                }
                switch (request.topic) {
                case "yandex.shared.updated.remote":
                    this._onNewDataReceived(request.data, sendResponse);
                    break;
                case "yandex.shared.sync-request":
                    logger.log("Response on sync request: ", this._data);
                    sendResponse({
                        message: messages.SYNC_RESPONSE,
                        data: this._data
                    });
                    break;
                }
                return true;
            }.bind(this));
        },
        _onNewDataReceived: function (data, sendResponse) {
            logger.log("Receive new data: ", data);
            var mergeResult = this._merge(data);
            sendResponse({
                error: mergeResult.error,
                message: mergeResult.message
            });
        },
        _notifyLocal: function (options) {
            logger.log("Notify local listeners: ", this._listeners.length, options);
            this._listeners.forEach(function (listener) {
                listener(options);
            });
        },
        _push: function (options, notifyMethod) {
            chrome.management.getAll(function (exts) {
                var actual = this._getActualExtensions(exts);
                logger.log("Remote extensions: ", actual.length);
                for (var i = actual.length; i--;) {
                    notifyMethod(actual[i].id, options);
                }
            }.bind(this));
        },
        _pushById: function (id, options, repeat) {
            logger.log("Send notification to: ", id, options.topic, options.data);
            notify(id, options, function (response) {
                if (failedByTimeout) {
                    return;
                }
                logger.log("Response from: ", id, response);
                clearTimeout(failTimeout);
                if (!response || response.error) {
                    this._onPushFail(id, options, response ? response.message : messages.UNKNOWN, repeat);
                    return;
                }
                switch (response.message) {
                case messages.SUCCESS:
                case messages.NOT_MODIFIED:
                    this._onPushSuccess(id);
                    break;
                default:
                    this._onPushFail(id, options, response.message || messages.UNKNOWN, repeat);
                }
            }.bind(this));
            var failedByTimeout = false;
            var failTimeout = setTimeout(function () {
                failedByTimeout = true;
                this._onPushFail(id, options, messages.TIMEOUT, repeat);
            }.bind(this), 3000);
        },
        _onPushSuccess: function (id) {
            logger.log("Successful update for id: ", id);
        },
        _onPushFail: function (id, options, message, repeat) {
            logger.log("Failed update:", message, "; for id: ", id);
            switch (message) {
            case messages.UNKNOWN:
            case messages.TIMEOUT:
                if (repeat !== false) {
                    setTimeout(this._pushById.bind(this, id, options, false), 100);
                }
                break;
            default:
                logger.error("Can't handle this fail!");
            }
        },
        _getActualExtensions: function (exts) {
            var actual = [];
            for (var i = exts.length; i--;) {
                var ext = exts[i];
                if (ext.id !== chrome.runtime.id && ext.type === "extension" && ext.enabled) {
                    actual.push(ext);
                }
            }
            return actual;
        }
    };
    if (typeof define === "function" && define.amd) {
        define(sharedData);
    } else {
        globalScope.sharedData = sharedData;
    }
}(typeof window !== "undefined" ? window : global));
