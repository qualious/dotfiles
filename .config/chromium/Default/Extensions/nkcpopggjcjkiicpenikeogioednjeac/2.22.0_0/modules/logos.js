Logos = function () {
    "use strict";
    var MAX_DOWNLOAD_TIMEOUT_MS = 30000;
    function info() {
        Logos.logger.info.apply(Logos.logger, arguments);
    }
    function requestFsRoot(callback) {
        (window.webkitRequestFileSystem || window.requestFileSystem)(window.PERSISTENT, 0, function (windowFsLink) {
            callback(windowFsLink.root);
        });
    }
    function requestStoreDirectory(directoryName, callback) {
        requestFsRoot(function (fsRoot) {
            fsRoot.getDirectory(directoryName, {
                create: true,
                exclusive: false
            }, callback);
        });
    }
    function getFileName(str) {
        return md5(str) + ".png";
    }
    return createModule("Logos", {
        DIR_LOGO_MAIN: "logo",
        DIR_LOGO_SUB: "logo-sub",
        DIR_LOGO_TABLEAU: "logo-tableau",
        download: function Logos_save(host, directory, logoUrl, callback) {
            var filename = getFileName(host);
            requestStoreDirectory(directory, function (storeDir) {
                loadResource({
                    url: logoUrl,
                    responseType: "blob",
                    timeout: MAX_DOWNLOAD_TIMEOUT_MS,
                    onload: function (evt) {
                        var isImageDownloaded = this.getResponseHeader("content-type").indexOf("image/") === 0;
                        var isDownloadOK = this.response.size > 0;
                        if (isImageDownloaded && isDownloadOK) {
                            storeDir.getFile(filename, {
                                create: true,
                                exclusive: false
                            }, function (fileEntry) {
                                fileEntry.createWriter(function (fileWriter) {
                                    fileWriter.write(evt.target.response);
                                    var localUrl = fileEntry.toURL();
                                    callback(localUrl);
                                });
                            });
                        } else {
                            callback(null);
                        }
                    },
                    onerror: function (evt) {
                        Logos.logger.warn("Download failed: %s", evt.type);
                        callback(null);
                    }
                });
            });
        }
    });
}();
