Layout = function () {
    "use strict";
    var MAX_DIMENSION = 7;
    var REGULAR_DIMENSION = 5;
    function getMaxLayout() {
        return Settings.get("maxAvailableIncreased") ? MAX_DIMENSION : REGULAR_DIMENSION;
    }
    return createModule("Layout", {
        getCurrent: function Layout_getCurrent() {
            return [
                getMaxLayout(),
                getMaxLayout()
            ];
        },
        getTotalThumbs: function Layout_getTotalThumbs() {
            var currentLayout = this.getCurrent();
            return currentLayout[0] * currentLayout[1];
        }
    });
}();
