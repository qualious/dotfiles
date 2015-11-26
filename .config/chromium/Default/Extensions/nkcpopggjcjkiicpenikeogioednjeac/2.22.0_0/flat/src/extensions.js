(function (globalScope) {
    "use strict";
    if (typeof define !== "undefined" && define.amd) {
        define(factory);
    } else {
        globalScope.extensions = factory();
    }
    function factory() {
        var Extensions = function () {
            this._listeners = {};
            this._listenExternalMessages();
        };
        Extensions.prototype = {
            observe: function (topic, listener, options) {
                if (!(topic in this._listeners)) {
                    this._listeners[topic] = [];
                }
                options = options || {};
                this._listeners[topic].push({
                    listener: listener,
                    once: Boolean(options.once),
                    filter: Boolean(options.filter)
                });
            },
            notify: function (topic, data, options) {
                data = data === undefined ? {} : data;
                options = options || {};
                if (!options.senderId) {
                    options.senderId = chrome.runtime.id;
                }
                if (this._listeners[topic]) {
                    this._listeners[topic] = this._listeners[topic].filter(function (observer) {
                        if (typeof observer.listener === "function") {
                            if (observer.filter) {
                                callFilter(observer.listener, [
                                    topic,
                                    data,
                                    options
                                ], 10);
                            } else {
                                observer.listener(topic, data, options);
                            }
                        }
                        return !observer.once;
                    });
                }
                if (options.transmit !== false) {
                    this.transmit(topic, data, options);
                }
            },
            transmit: function (topic, data) {
                var self = this;
                var args = {
                    topic: topic,
                    data: data,
                    transmitter: this.id
                };
                chrome.management.getAll(function (all) {
                    var extensions = self._getActualExtensions(all);
                    extensions.forEach(function (extension) {
                        chrome.runtime.sendMessage(extension.id, args);
                    });
                });
            },
            flush: function () {
                this._listeners = {};
            },
            _listenExternalMessages: function () {
                var onMessageExternal = chrome.runtime.onMessageExternal || chrome.extension.onMessageExternal;
                onMessageExternal.addListener(this._externalMessageHandler.bind(this));
            },
            _externalMessageHandler: function (request, sender) {
                if (sender.id !== chrome.runtime.id) {
                    this.notify(request.topic, request.data, {
                        transmit: false,
                        senderId: sender.id
                    });
                }
            },
            _getActualExtensions: function (extensions) {
                return extensions.filter(function (extension) {
                    return extension.id !== chrome.runtime.id && extension.type === "extension" && extension.enabled;
                });
            },
            get listeners() {
                return this._listeners;
            }
        };
        function callFilter(func, params, timeout) {
            if (typeof func === "function") {
                setTimeout(function () {
                    func.apply(null, params);
                }, timeout);
            }
        }
        return new Extensions();
    }
}(typeof window !== "undefined" ? window : global));
