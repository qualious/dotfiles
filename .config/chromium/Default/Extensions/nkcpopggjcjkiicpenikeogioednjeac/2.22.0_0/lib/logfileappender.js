(function (exports) {
    "use strict";
    var DEBUG_FILENAME = "debug.log";
    var DEBUG_FILENAME_OLD = "debug-old.log";
    var DEBUG_MAX_SIZE = 2 * 1024 * 1024;
    var isRunning = false;
    var messagesQueue = [];
    function copyFile(path, fileEntry, fileName, callback) {
        fileEntry.copyTo(path, fileName, function () {
            callback();
        }, function (err) {
            callback(err);
        });
    }
    function writeBuffer(root, fileEntry) {
        if (!messagesQueue.length) {
            isRunning = false;
            return;
        }
        fileEntry.createWriter(function (fileWriter) {
            fileWriter.seek(fileWriter.length);
            fileWriter.onwriteend = function (e) {
                if (fileWriter.length > DEBUG_MAX_SIZE) {
                    copyFile(root, fileEntry, DEBUG_FILENAME_OLD, function (err) {
                        if (!err) {
                            fileWriter.truncate(0);
                        }
                        writeBuffer(root, fileEntry);
                    });
                } else {
                    writeBuffer(root, fileEntry);
                }
            };
            var blob = new Blob(["\n" + messagesQueue.join("\n")], { type: "text/plain" });
            fileWriter.write(blob);
            messagesQueue.length = 0;
        });
    }
    function getLog(root, filename, callback) {
        root.getFile(filename, {}, function (fileEntry) {
            fileEntry.getMetadata(function (metadata) {
                if (metadata.size > 2 * DEBUG_MAX_SIZE) {
                    callback("");
                    return;
                }
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        callback(this.result || "");
                    };
                    reader.readAsText(file);
                }, function (error) {
                    callback("");
                });
            });
        }, function (error) {
            callback("");
        });
    }
    function concatLogs(root, callback) {
        getLog(root, DEBUG_FILENAME, function (debug) {
            getLog(root, DEBUG_FILENAME_OLD, function (debugOld) {
                if (debugOld) {
                    debugOld = debugOld + "\n======= DEBUG-OLD END =======\n";
                }
                callback(debugOld + debug);
            });
        });
    }
    exports.LogFileAppender = {
        push: function (resultStr) {
            messagesQueue.push(resultStr);
            if (isRunning) {
                return;
            }
            isRunning = true;
            FS.request(function (windowFsLink) {
                windowFsLink.root.getFile(DEBUG_FILENAME, {
                    create: true,
                    exclusive: false
                }, function (fileEntry) {
                    writeBuffer(windowFsLink.root, fileEntry);
                });
            });
        },
        get: function (callback) {
            FS.request(function (windowFsLink) {
                concatLogs(windowFsLink.root, callback);
            });
        }
    };
}(window));
