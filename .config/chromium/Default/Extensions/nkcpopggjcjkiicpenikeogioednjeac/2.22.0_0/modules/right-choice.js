RightChoice = function () {
    "use strict";
    return createModule("RightChoice", {
        SHOW_DELAY: 1000 * 5,
        SHOW_EVENT: "showRightChoicePopup",
        SHOW_FLAG: "showRightChoicePopup",
        POPUP_TYPE: "rightChoicePopupType",
        init: function () {
            this.popupType = this._initPopupType();
        },
        popupType: null,
        tryShowPopup: function (tabId) {
            var showFlag = this._getShowFlag();
            this.logger.info("Checking show conditions: %s", showFlag);
            if (showFlag) {
                this.logger.info("Conditions met, set show timeout");
                this._setNotifyTimeout(tabId);
                this._setShowFlag();
            }
        },
        _initPopupType: function () {
            var type = Settings.get(this.POPUP_TYPE);
            if (type === null) {
                type = this._generatePopupType();
                Settings.set(this.POPUP_TYPE, type);
            }
            return type;
        },
        _generatePopupType: function () {
            var platform = getNavigator().platform;
            if (platform.toLowerCase().indexOf("win") === 0) {
                return Math.round(Math.random() * 3);
            }
            return 0;
        },
        _timeoutId: null,
        _setNotifyTimeout: function (tabId) {
            this.logger.info("Timeout delay: %s", this.SHOW_DELAY);
            if (!this._timeoutId) {
                this._timeoutId = setTimeout(this._tryNotifyUI.bind(this, tabId), this.SHOW_DELAY);
            }
        },
        _tryNotifyUI: function (tabId) {
            this.logger.info("Try notify UI, active Tab check...");
            this._checkActiveTab(tabId, function () {
                var data = { type: this.popupType };
                this.logger.info("Notify UI: %j", data);
                notifyTabs(this.SHOW_EVENT, data, tabId);
            }.bind(this));
        },
        _checkActiveTab: function (tabId, callback) {
            chrome.tabs.query({ active: true }, function (tabs) {
                (tabs || []).forEach(function (tab) {
                    if (tab.id === tabId) {
                        callback();
                    }
                });
            });
        },
        _setShowFlag: function () {
            Settings.set(this.SHOW_FLAG, false);
        },
        _getShowFlag: function () {
            return Settings.get(this.SHOW_FLAG);
        }
    });
}();
