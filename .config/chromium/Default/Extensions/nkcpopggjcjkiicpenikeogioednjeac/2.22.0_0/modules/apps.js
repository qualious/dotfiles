Apps = function () {
    "use strict";
    var GOOGLE_WALLET_ID = "nmmhkkegccagdldgiimedpiccmgmieda";
    function getIcon(extensionInfo, size) {
        var icon = extensionInfo.icons && extensionInfo.icons.filter(function (iconInfo) {
            return iconInfo.size == size;
        })[0];
        return icon && icon.url || "";
    }
    function onAppsStateChanged() {
        Apps.hasActive(function (hasActive) {
            notifyTabs("appsListChanged", { empty: !hasActive });
        });
    }
    function isApp(extensionInfo) {
        return extensionInfo.isApp || extensionInfo.type && [
            "extension",
            "theme"
        ].indexOf(extensionInfo.type) === -1;
    }
    chrome.management.onEnabled.addListener(onAppsStateChanged);
    chrome.management.onDisabled.addListener(onAppsStateChanged);
    return createModule("Apps", {
        onMessage: function Apps_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "requestAppsList":
                chrome.management.getAll(function (list) {
                    var output = [];
                    list.forEach(function (extensionInfo) {
                        if (!extensionInfo.enabled || !isApp(extensionInfo) || extensionInfo.id === GOOGLE_WALLET_ID)
                            return;
                        output.push({
                            id: extensionInfo.id,
                            title: extensionInfo.name,
                            icon: getIcon(extensionInfo, 48) || getIcon(extensionInfo, 128) || ""
                        });
                    });
                    sendResponse(output);
                });
                return true;
                break;
            }
        },
        hasActive: function Apps_hasActive(callback) {
            chrome.management.getAll(function (list) {
                var output = list.some(function (extensionInfo) {
                    return extensionInfo.enabled && isApp(extensionInfo);
                });
                callback(output);
            });
        }
    });
}();
