(function (exports) {
    "use strict";
    var FS = exports.FS = {
        request: function (callback) {
            (window.webkitRequestFileSystem || window.requestFileSystem)(window.PERSISTENT, 0, callback);
        }
    };
}(window));
