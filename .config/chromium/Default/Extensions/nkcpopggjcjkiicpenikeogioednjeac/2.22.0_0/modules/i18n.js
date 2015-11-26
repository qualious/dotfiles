I18N = function () {
    "use strict";
    var messages;
    return createModule("I18N", {
        getMessage: function I18N_getMessage(key) {
            var value = chrome.i18n.getMessage(key);
            if (value.length)
                return value;
            if (messages)
                return messages[key].message || value;
            var req = new XMLHttpRequest();
            req.open("GET", chrome.runtime.getURL("_locales/" + getCurrentLocale() + "/messages.json"), false);
            req.send(null);
            if (req.status !== 200)
                return value;
            try {
                messages = JSON.parse(req.responseText);
                return messages[key].message || value;
            } catch (ex) {
                return value;
            }
        }
    });
}();
