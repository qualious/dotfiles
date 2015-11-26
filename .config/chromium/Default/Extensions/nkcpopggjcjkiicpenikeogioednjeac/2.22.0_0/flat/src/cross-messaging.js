(function (globalScope) {
    "use strict";
    if (typeof define !== "undefined" && define.amd) {
        define(["flat/extensions"], factory);
    } else {
        globalScope.crossMessaging = factory(globalScope.extensions);
    }
    function factory(extensions) {
        var CrossMessaging = function () {
            this.info = {
                id: chrome.runtime.id,
                enabled: true,
                protocol: this.PROTOCOL_VER
            };
            this.protocol = this.PROTOCOL_VER;
            this.extinfo = {};
        };
        CrossMessaging.prototype = {
            PROTOCOL_VER: 2,
            HELLO_EVENT: "application.hello",
            WELCOME_EVENT: "application.welcome",
            set: function (key, value) {
                this.info[key] = value;
            },
            updateExtInfo: function (key, value) {
                var self = this;
                Object.keys(this.extinfo).forEach(function (extensionId) {
                    if (self.extinfo[extensionId].hasOwnProperty(key)) {
                        self.extinfo[extensionId][key] = value;
                    }
                });
            },
            run: function () {
                this._observeHelloMessages();
                this._observeWelcomeMessages();
                this._observeDisableEvent();
                extensions.notify(this.HELLO_EVENT, this.info, { transmit: true });
            },
            addExtInfo: function (receivedData) {
                if (receivedData) {
                    receivedData.protocol = receivedData.protocol || 0;
                    receivedData.enabled = "enabled" in receivedData ? receivedData.enabled : true;
                    if (!receivedData.yasoft && receivedData.uninstallUrl) {
                        receivedData.yasoft = (receivedData.uninstallUrl.match(/yasoft=([\w\-]*)/i) || [])[1];
                    }
                    this.extinfo[receivedData.id] = receivedData;
                }
            },
            getFeaturedExtensions: function (feature, enabledOnly) {
                var searchExtensions = enabledOnly ? this.enabledExtensions : this.extinfo;
                var featured = {};
                Object.keys(searchExtensions).forEach(function (extensionId) {
                    if (searchExtensions[extensionId][feature]) {
                        featured[extensionId] = searchExtensions[extensionId];
                    }
                });
                return featured;
            },
            _observeHelloMessages: function () {
                extensions.observe(this.HELLO_EVENT, this._helloMessageHandler.bind(this));
            },
            _helloMessageHandler: function (topic, data) {
                this.addExtInfo(data);
                extensions.notify(this.WELCOME_EVENT, this.info, { transmit: true });
            },
            _observeWelcomeMessages: function () {
                extensions.observe(this.WELCOME_EVENT, this._welcomeMessageHandler.bind(this));
            },
            _welcomeMessageHandler: function (topic, data) {
                this.addExtInfo(data);
            },
            _observeDisableEvent: function () {
                chrome.management.onDisabled.addListener(this._disabledHandler.bind(this));
            },
            _disabledHandler: function (info) {
                if (this.extinfo[info.id]) {
                    this.extinfo[info.id].enabled = false;
                }
            },
            get enabledExtensions() {
                var self = this;
                var enabledExtensions = {};
                Object.keys(this.extinfo).forEach(function (extensionId) {
                    if (self.extinfo[extensionId].enabled) {
                        enabledExtensions[extensionId] = self.extinfo[extensionId];
                    }
                });
                return enabledExtensions;
            }
        };
        return new CrossMessaging();
    }
}(typeof window !== "undefined" ? window : global));
