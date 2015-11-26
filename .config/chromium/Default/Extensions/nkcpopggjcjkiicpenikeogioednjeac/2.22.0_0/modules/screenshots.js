Screenshots = function () {
    "use strict";
    var WIDTH = 300;
    var HEIGHT = 150;
    var SCROLL_WIDTH = 10;
    var SCREENSHOTS_UPDATE_TIME_MS = 24 * 60 * 60 * 1000;
    var SCREENSHOT_DELAY_MS = 2000;
    var ACTIVATE_DELAY_MS = 500;
    var REDIRECT_DELAY_MS = 500;
    var queue = {};
    var tabsNavigation = {};
    var onCompleteTimer;
    var onActivateTimer;
    function info() {
        Screenshots.logger.info.apply(Screenshots.logger, arguments);
    }
    function requestFsRoot(callback) {
        (window.webkitRequestFileSystem || window.requestFileSystem)(window.PERSISTENT, 0, function (windowFsLink) {
            callback(windowFsLink.root);
        });
    }
    function requestStoreDirectory(callback) {
        requestFsRoot(function (fsRoot) {
            fsRoot.getDirectory("screenshots", {
                create: true,
                exclusive: false
            }, callback);
        });
    }
    function getFileName(url) {
        return md5(url) + ".png";
    }
    function saveScreenshotFromDataURL(url, dataURL) {
        var img = new Image();
        parallel({
            storeDir: requestStoreDirectory,
            img: function (callback) {
                img.onload = callback;
                img.onerror = callback;
                img.src = dataURL;
            }
        }, function (res) {
            var oc = document.createElement("canvas");
            var octx = oc.getContext("2d");
            oc.width = img.width * 0.5;
            oc.height = img.height * 0.5;
            octx.drawImage(img, 0, 0, oc.width, oc.height);
            var canvas = document.createElement("canvas");
            canvas.width = WIDTH;
            canvas.height = HEIGHT;
            var ctx = canvas.getContext("2d");
            var dw = Math.ceil(oc.height * WIDTH / oc.width);
            ctx.drawImage(oc, 0, 0, oc.width - SCROLL_WIDTH, oc.height, 0, 0, WIDTH, dw);
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            if (isBlack(imageData))
                throw new Error("Captured screenshot is black");
            var resizedDataUrl = canvas.toDataURL("image/png");
            var blob = dataUriToBlob(resizedDataUrl);
            res.storeDir.getFile(getFileName(url), {
                create: true,
                exclusive: false
            }, function (fileEntry) {
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        calcScreenshotData(fileEntry, function (data) {
                            if (data) {
                                info("Saved screenshot for %s %s", url, fileEntry.name);
                                saveScreenshotData(url, data);
                                FrontendHelper.notify("thumbChanged");
                            }
                        });
                    };
                    fileWriter.onerror = function (error) {
                        throw new Error("FileWriter error: " + error.message);
                    };
                    fileWriter.write(blob);
                });
            });
        });
    }
    function removeScreenshotFile(fileEntry) {
        info("Remove screenshot %s", fileEntry.name);
        fileEntry.remove(function () {
        }, function (err) {
            throw new Error("Delete screenshot error: " + err.message);
        });
    }
    function saveScreenshotData(url, data) {
        InternalStructure.iterate({ nonempty: true }, function (item, index) {
            if (url === normalizeUrl(item.location.source)) {
                item.thumb.screenshot = data;
                InternalStructure.setItem(index, { thumb: item.thumb });
            }
        });
    }
    function calcScreenshotData(fileEntry, callback) {
        if (!fileEntry) {
            return callback();
        }
        var img = new Image();
        img.onload = function () {
            var bgColor = Colors.getDominant(img, {
                bottomQuarter: false,
                preventSkipColors: false
            });
            var fontColor = Colors.getFontColorByBackgroundColor(bgColor);
            callback({
                bgColor: bgColor,
                fontColor: fontColor
            });
        };
        img.onerror = callback;
        img.src = fileEntry.toURL();
    }
    function getScreenshotFile(url, successCallback, errorCallback) {
        requestStoreDirectory(function (storeDir) {
            storeDir.getFile(getFileName(url), { create: false }, successCallback, errorCallback);
        });
    }
    function tryCaptureActiveTab(windowId) {
        chrome.tabs.query({
            windowId: windowId,
            active: true
        }, function (arr) {
            var tabInfo = arr[0];
            if (!tabInfo || tabInfo.incognito) {
                return;
            }
            if (tabInfo.url.indexOf("chrome://newtab") === 0) {
                return;
            }
            var tn = tabsNavigation[tabInfo.id];
            var shouldCapture = tn && tn.inQueue && tn.loaded && Date.now() - tn.loaded > SCREENSHOT_DELAY_MS;
            if (shouldCapture) {
                chrome.tabs.captureVisibleTab(windowId, { format: "png" }, function (dataURL) {
                    if (!dataURL || chrome.runtime.lastError) {
                        var errMessage = chrome.runtime.lastError ? "Screenshot capture error: " + JSON.stringify(chrome.runtime.lastError) : "Screenshot capture error: dataURL is empty";
                        throw new Error(errMessage);
                    }
                    tn.urls.forEach(function (url) {
                        if (url in queue) {
                            saveScreenshotFromDataURL(url, dataURL);
                        }
                    });
                });
            }
        });
    }
    function getIndexByXY(x, y, imgPixels) {
        return 4 * (imgPixels.width * y + x);
    }
    function isBlack(imgPixels) {
        var halfX = Math.floor(imgPixels.width / 2);
        var halfY = Math.floor(imgPixels.height / 2);
        var listToCheck = [];
        for (var x = 0; x < imgPixels.width - 1; x++) {
            listToCheck.push(getIndexByXY(x, halfY, imgPixels));
        }
        for (var y = 0; y < imgPixels.height - 1; y++) {
            listToCheck.push(getIndexByXY(halfX, y, imgPixels));
        }
        listToCheck.push(getIndexByXY(0, 0, imgPixels));
        listToCheck.push(getIndexByXY(imgPixels.width - 1, 0, imgPixels));
        listToCheck.push(getIndexByXY(0, imgPixels.height - 1, imgPixels));
        listToCheck.push(getIndexByXY(imgPixels.width - 1, imgPixels.height - 1, imgPixels));
        return listToCheck.every(function (index) {
            var red = imgPixels.data[index];
            var green = imgPixels.data[index + 1];
            var blue = imgPixels.data[index + 2];
            var opacity = imgPixels.data[index + 3];
            return red === 0 && green === 0 && blue === 0 && (opacity === 255 || opacity === 0);
        });
    }
    chrome.tabs.onActivated.addListener(function (activeInfo) {
        if (onActivateTimer) {
            clearTimeout(onActivateTimer);
        }
        onActivateTimer = setTimeout(function () {
            onActivateTimer = null;
            tryCaptureActiveTab(activeInfo.windowId);
        }, ACTIVATE_DELAY_MS);
    });
    chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
        delete tabsNavigation[tabId];
    });
    chrome.tabs.onReplaced.addListener(function (addedTabId, removedTabId) {
        info("onReplaced");
        tabsNavigation[addedTabId] = tabsNavigation[removedTabId];
        delete tabsNavigation[removedTabId];
    });
    chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
        if (details.frameId === 0) {
            var tn = tabsNavigation[details.tabId];
            var isNewNavigation = !tn || tn.loaded && Date.now() - tn.loaded > REDIRECT_DELAY_MS;
            if (isNewNavigation) {
                tabsNavigation[details.tabId] = { urls: [details.url] };
            } else {
                tn.urls.push(details.url);
            }
        }
    });
    chrome.webNavigation.onCompleted.addListener(function (details) {
        var tn = tabsNavigation[details.tabId];
        if (details.frameId === 0 && tn) {
            tn.loaded = Date.now();
            tn.urls.push(details.url);
            tn.urls = tn.urls.map(normalizeUrl);
            tn.urls = tn.urls.filter(function (url, pos, self) {
                return self.indexOf(url) === pos;
            });
            tn.inQueue = tn.urls.some(function (url) {
                return url in queue;
            });
            if (tn.inQueue) {
                chrome.tabs.get(details.tabId, function (tabInfo) {
                    if (!tabInfo || !tabInfo.active || tabInfo.incognito) {
                        return;
                    }
                    if (onCompleteTimer) {
                        clearTimeout(onCompleteTimer);
                    }
                    onCompleteTimer = setTimeout(function () {
                        onCompleteTimer = null;
                        tryCaptureActiveTab(tabInfo.windowId);
                    }, SCREENSHOT_DELAY_MS + 100);
                });
            }
        }
    });
    return createModule("Screenshots", {
        addToQueue: function Screenshots_addToQueue(url) {
            url = normalizeUrl(url);
            queue[url] = 1;
        },
        syncQueue: function Screenshots_syncQueue() {
            this.logger.info("Sync screenshots queue...");
            queue = {};
            var actualNames = [];
            InternalStructure.iterate({ nonempty: true }, function (item) {
                var url = item.location.source;
                Screenshots.addToQueue(url);
                actualNames.push(getFileName(normalizeUrl(url)));
            });
            PickupCache.get(function (items) {
                items.forEach(function (item) {
                    var url = item.url;
                    Screenshots.addToQueue(url);
                    actualNames.push(getFileName(normalizeUrl(url)));
                });
                requestStoreDirectory(function (storeDir) {
                    var r = storeDir.createReader();
                    r.readEntries(function (entries) {
                        entries = toArray(entries);
                        entries = entries.filter(function (entry) {
                            return actualNames.indexOf(entry.name) === -1;
                        });
                        entries.forEach(function (entry) {
                            removeScreenshotFile(entry);
                        });
                    });
                });
            });
        },
        requestData: function Screenshots_requestData(url, callback) {
            url = normalizeUrl(url);
            getScreenshotFile(url, function (fileEntry) {
                fileEntry.getMetadata(function (metaData) {
                    var out = { url: fileEntry.toURL() + "?uniqid=" + metaData.modificationTime.getTime() };
                    var item = InternalStructure.getByUrl(url, true);
                    var data = item && item.thumb && item.thumb.screenshot;
                    if (data) {
                        copyOwnProperties(data, out);
                        callback(out);
                    } else {
                        calcScreenshotData(fileEntry, function (calcData) {
                            if (calcData) {
                                saveScreenshotData(url, calcData);
                                copyOwnProperties(calcData, out);
                            }
                            callback(out);
                        });
                    }
                });
            }, function () {
                callback(null);
            });
        },
        migrateOld: function Screenshots_migrateOld(url, dataURL) {
            saveScreenshotFromDataURL(normalizeUrl(url), dataURL);
        },
        drop: function Screenshots_drop(url) {
            url = normalizeUrl(url);
            var fileName = getFileName(url);
            requestStoreDirectory(function (storeDir) {
                storeDir.getFile(fileName, { create: false }, function (fileEntry) {
                    info("drop screenshot for %s", url);
                    removeScreenshotFile(fileEntry);
                });
            });
        },
        rename: function Screenshots_rename(oldUrl, newUrl, callback) {
            callback = callback || noop;
            var oldFileName = getFileName(oldUrl);
            requestStoreDirectory(function (storeDir) {
                storeDir.getFile(oldFileName, { create: false }, function (fileEntry) {
                    if (fileEntry) {
                        var newFileName = getFileName(newUrl);
                        Screenshots.logger.info("Renaming: %s --> %s", oldUrl, newUrl);
                        fileEntry.moveTo(storeDir, newFileName, callback, callback);
                    } else {
                        callback();
                    }
                }, function (err) {
                    callback();
                });
            });
        }
    });
}();
