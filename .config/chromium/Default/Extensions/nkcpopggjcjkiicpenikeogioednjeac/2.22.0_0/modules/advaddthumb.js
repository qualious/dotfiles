AdvAddThumb = function () {
    return createModule("AdvAddThumb", {
        check: function () {
            var hasFreeSpace = true;
            if (!Settings.get("maxAvailableIncreased") && InternalStructure.length === 25) {
                hasFreeSpace = false;
            }
            if (Settings.get("maxAvailableIncreased") && InternalStructure.length === 49) {
                hasFreeSpace = false;
            }
            if (!Settings.get("hasUserAddedThumb") && hasFreeSpace) {
                Advertisement.triggered("vbaddthumb");
            }
        }
    });
}();
