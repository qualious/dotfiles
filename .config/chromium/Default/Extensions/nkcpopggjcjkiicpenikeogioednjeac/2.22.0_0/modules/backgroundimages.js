BackgroundImages = function () {
    "use strict";
    var SYNC_JSON_URL = "https://download.cdn.yandex.net/bar/vb/bgs.json";
    var USER_IMAGE_LEAFNAME = "user.jpg";
    var USER_IMAGE_ID = "user";
    var PREV_SELECTED_FILENAME = "prev.jpg";
    var TEMP_SELECTED_FILENAME = "_selected.jpg";
    var OVERLAY_COLOR_WHITE = "ffffff";
    var OVERLAY_COLOR_BLACK = "000000";
    var MODIFICATOR_OVERLAY_NEEDS_BLACK = "vb-sync_status-bg";
    var MAX_DOWNLOAD_BACKGROUND_MS = 30000;
    var TYPE_PREV = 1;
    var TYPE_BRANDING = 2;
    var TYPE_CLOUD = 3;
    var TYPE_USER = 4;
    var downloadTasks = {};
    var bgRandParam;
    var waitingForBackground;
    function info() {
        BackgroundImages.logger.info.apply(BackgroundImages.logger, arguments);
    }
    function requestFsRoot(callback) {
        (window.webkitRequestFileSystem || window.requestFileSystem)(window.PERSISTENT, 0, function (windowFsLink) {
            callback(windowFsLink.root);
        });
    }
    function requestStoreDirectory(callback) {
        requestFsRoot(function (fsRoot) {
            fsRoot.getDirectory("backgrounds", {
                create: true,
                exclusive: false
            }, callback);
        });
    }
    function getCloudSkins() {
        var cloudSkins = Settings.get("backgroundImagesList");
        var output = {};
        cloudSkins.forEach(function (skinData, index) {
            if (skinData.id && skinData.preview && skinData.image) {
                output[skinData.id] = {
                    id: skinData.id,
                    preview: skinData.preview,
                    image: skinData.image,
                    index: index,
                    downloadDate: skinData.downloadDate,
                    color: Array.isArray(skinData.modificators) && skinData.modificators[0] === MODIFICATOR_OVERLAY_NEEDS_BLACK ? OVERLAY_COLOR_BLACK : OVERLAY_COLOR_WHITE
                };
            }
        });
        return output;
    }
    function getBrandingSkins() {
        var output = {};
        Object.keys(Config.brandings[Branding.packageName].structure.fastdial.backgrounds).forEach(function (path) {
            var url = Config.brandings[Branding.packageName].structure.fastdial.backgrounds[path] ? chrome.runtime.getURL("/brandings/" + Branding.packageName + "/fastdial/backgrounds/" + path) : chrome.runtime.getURL("/brandings/" + Branding.packageName + "/" + getCurentLocale() + "/fastdial/backgrounds/" + path);
            output[path] = url;
        });
        return output;
    }
    function getLocalFiles(callback) {
        requestStoreDirectory(function (storeDir) {
            var dirReader = storeDir.createReader();
            dirReader.readEntries(function (entries) {
                var output = {};
                [].forEach.call(entries, function (entry) {
                    if (!entry.isFile || entry.name.indexOf(".") === 0) {
                        return;
                    }
                    output[entry.name] = entry.toURL();
                });
                callback(output);
            });
        });
    }
    function sync() {
        info("Sync background images");
        loadResource({
            url: SYNC_JSON_URL,
            timeout: 10000,
            onload: function (evt) {
                var json;
                try {
                    json = JSON.parse(evt.target.responseText);
                } catch (ex) {
                    BackgroundImages.logger.error("Not valid JSON: %s", evt.target.responseText);
                }
                if (!json || !Array.isArray(json.skins)) {
                    BackgroundImages.logger.error("Not valid response: %s", evt.target.responseText);
                    return;
                }
                var lastVersion = Settings.get("backgroundImagesVersion");
                var newVersion = json.version || 1;
                if (newVersion > lastVersion) {
                    var oldSkins = Settings.get("backgroundImagesList") || [];
                    var newSkins = Array.isArray(json.skins) ? json.skins : [];
                    info("Newer version of skins.json (%i against %i). Replace skins.json: %j", newVersion, lastVersion, newSkins);
                    if (lastVersion > 0) {
                        var now = Date.now();
                        var actualNewSkinsCount = 0;
                        newSkins.forEach(function (item) {
                            var oldItems = oldSkins.filter(function (v) {
                                return v.image === item.image;
                            });
                            if (oldItems.length) {
                                if (oldItems[0].downloadDate) {
                                    item.downloadDate = oldItems[0].downloadDate;
                                }
                            } else {
                                item.downloadDate = now;
                                actualNewSkinsCount++;
                            }
                        });
                        if (actualNewSkinsCount >= 3) {
                            Advertisement.triggered("newbackground");
                        }
                    } else {
                        Advertisement.triggered("setbackground");
                    }
                    Settings.set("backgroundImagesVersion", newVersion);
                    Settings.set("backgroundImagesList", newSkins);
                    var selectedBgImage = Settings.get("backgroundImage");
                    requestStoreDirectory(function (storeDir) {
                        var dirReader = storeDir.createReader();
                        dirReader.readEntries(function (entries) {
                            var tasks = {};
                            [].forEach.call(entries, function (entry) {
                                if (!entry.isFile || entry.name === USER_IMAGE_LEAFNAME || entry.name === selectedBgImage) {
                                    return;
                                }
                                BackgroundImages.logger.info("removing bg '%s'", entry.name);
                                tasks[entry.name] = entry.remove.bind(entry);
                            });
                            parallel(tasks, noop);
                        });
                    });
                }
            },
            onerror: function (evt) {
                BackgroundImages.logger.error("Couldn't load skins.json file: %s", evt.type);
            }
        });
    }
    function requestTypeById(id, callback) {
        if (id === USER_IMAGE_ID) {
            callback(TYPE_USER);
            return;
        }
        var cloudSkins = getCloudSkins();
        for (var cloudSkinId in cloudSkins) {
            if (cloudSkinId === id) {
                callback(TYPE_CLOUD);
                return;
            }
        }
        var brandingSkins = getBrandingSkins();
        if (brandingSkins[id]) {
            callback(TYPE_BRANDING);
            return;
        }
        requestStoreDirectory(function (storeDir) {
            var dirReader = storeDir.createReader();
            dirReader.readEntries(function (entries) {
                var entry;
                for (var i = 0, len = entries.length; i < len; i++) {
                    entry = entries[i];
                    if (entry.isFile && entry.name === id) {
                        callback(TYPE_PREV);
                        return;
                    }
                }
                throw new Error("Unknown background id: " + id);
            });
        });
    }
    function select(tabId, id) {
        BackgroundImages.logger.info("Select %s as background, tabId: %s", id, tabId);
        var fontColors = Settings.get("backgroundImagesFontColors");
        waitingForBackground = null;
        if (id === USER_IMAGE_ID) {
            BackgroundImages.requestUserImageURL(function (userImageURL) {
                if (!userImageURL) {
                    BackgroundImages.logger.error("User-uploaded image needs to be set as background, but it does not exist");
                    return;
                }
                Settings.set("backgroundImage", "user");
                notifyTabs("backgroundChanged", {
                    image: userImageURL,
                    color: fontColors[USER_IMAGE_LEAFNAME] || OVERLAY_COLOR_BLACK
                });
                if (fontColors[USER_IMAGE_LEAFNAME] === undefined) {
                    calculateFontColor("user");
                }
            });
            return;
        }
        requestTypeById(id, function (bgType) {
            if (bgType === TYPE_BRANDING) {
                var brandingSkins = getBrandingSkins();
                var brandingImageURL = brandingSkins[id];
                Settings.set("backgroundImage", id);
                notifyTabs("backgroundChanged", {
                    image: brandingImageURL,
                    color: fontColors[id] || OVERLAY_COLOR_BLACK
                });
                if (fontColors[id] === undefined) {
                    calculateFontColor(id);
                }
                return;
            }
            if (bgType === TYPE_PREV) {
                Settings.set("backgroundImage", id);
                requestStoreDirectory(function (storeDir) {
                    storeDir.getFile(id, { create: false }, function (fileEntry) {
                        notifyTabs("backgroundChanged", {
                            image: fileEntry.toURL(),
                            color: fontColors[id] || OVERLAY_COLOR_BLACK
                        });
                        if (fontColors[id] === undefined) {
                            calculateFontColor(id);
                        }
                    }, function () {
                        throw new Error("Missing prev image selected: " + id);
                    });
                });
                return;
            }
            if (downloadTasks[id]) {
                return;
            }
            var cloudSkins = getCloudSkins();
            requestStoreDirectory(function (storeDir) {
                storeDir.getFile(id, { create: false }, function (fileEntry) {
                    BackgroundImages.logger.info("Background '%s' has already been downloaded", id);
                    Settings.set("backgroundImage", id);
                    notifyTabs("backgroundChanged", {
                        image: fileEntry.toURL(),
                        color: cloudSkins[id] && cloudSkins[id].color || fontColors[id] || OVERLAY_COLOR_BLACK
                    });
                }, function () {
                    var skinSelectedData;
                    for (var cloudSkinId in cloudSkins) {
                        if (cloudSkinId === id) {
                            skinSelectedData = cloudSkins[cloudSkinId];
                            break;
                        }
                    }
                    waitingForBackground = skinSelectedData.image;
                    downloadTasks[id] = loadResource({
                        url: skinSelectedData.image,
                        responseType: "blob",
                        timeout: MAX_DOWNLOAD_BACKGROUND_MS,
                        onload: function (evt) {
                            delete downloadTasks[id];
                            var isImageDownloaded = this.getResponseHeader("content-type").indexOf("image/") === 0;
                            var isDownloadOK = isImageDownloaded && this.response.size > 0;
                            storeDir.getFile(id, {
                                create: true,
                                exclusive: false
                            }, function (fileEntry) {
                                fileEntry.createWriter(function (fileWriter) {
                                    fileWriter.write(evt.target.response);
                                    BackgroundImages.logger.info("Background '%s' downloaded", id);
                                    if (waitingForBackground === skinSelectedData.image) {
                                        Settings.set("backgroundImage", id);
                                        notifyTabs("backgroundChanged", {
                                            image: fileEntry.toURL(),
                                            color: skinSelectedData.color
                                        });
                                    }
                                });
                            });
                        },
                        onerror: function (evt) {
                            BackgroundImages.logger.warn("Background %s download process failed: %s", id, evt.type);
                            delete downloadTasks[id];
                            notifyTabs("backgroundChanged", { error: true }, tabId);
                        }
                    });
                });
            });
        });
    }
    function fitImageToScreen(url, callback) {
        var maxSizeWidth = screen.width;
        var maxSizeHeight = screen.height;
        var maxSizeRatio = maxSizeWidth / maxSizeHeight;
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var imgRatio = img.width / img.height;
            var width;
            var height;
            if (img.width < maxSizeWidth && img.height < maxSizeHeight) {
                width = img.width;
                height = img.height;
            } else if (imgRatio > maxSizeRatio) {
                width = maxSizeWidth;
                height = maxSizeWidth * img.height / img.width;
            } else if (imgRatio < maxSizeRatio) {
                width = maxSizeHeight * img.width / img.height;
                height = maxSizeHeight;
            } else if (imgRatio == maxSizeRatio) {
                height = maxSizeHeight;
                width = maxSizeWidth;
            }
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            var blob = dataUriToBlob(canvas.toDataURL());
            callback(blob);
        };
        img.src = url;
    }
    function calculateFontColor(id, dontNotify) {
        BackgroundImages.logger.info("Calculating font color for background `%s`", id);
        var onImageURL = function (imageURL) {
            var img = new Image();
            img.onload = function () {
                var color = Colors.getDominant(img, {
                    bottomQuarter: true,
                    rightHalf: true,
                    minifyCanvas: true,
                    preventSkipColors: true
                });
                var fontColorNum = Colors.getFontColorByBackgroundColor(color);
                var fontColor = fontColorNum === 1 ? OVERLAY_COLOR_WHITE : OVERLAY_COLOR_BLACK;
                var fontColors = Settings.get("backgroundImagesFontColors");
                var backgroundImagePref = Settings.get("backgroundImage");
                requestTypeById(id, function (bgType) {
                    var fontColorKey;
                    switch (bgType) {
                    case TYPE_USER:
                        fontColorKey = USER_IMAGE_LEAFNAME;
                        break;
                    default:
                        fontColorKey = id;
                    }
                    fontColors[fontColorKey] = fontColor;
                    Settings.set("backgroundImagesFontColors", fontColors);
                    if (backgroundImagePref === id && dontNotify !== true) {
                        notifyTabs("backgroundChanged", {
                            image: imageURL,
                            color: fontColor
                        });
                    }
                });
            };
            img.src = imageURL;
        };
        if (id === USER_IMAGE_ID) {
            BackgroundImages.requestUserImageURL(onImageURL);
        } else {
            BackgroundImages.requestList(function (imagesList) {
                var imageURL;
                for (var i = 0, len = imagesList.length; i < len; i++) {
                    if (imagesList[i].id === id) {
                        imageURL = imagesList[i].image;
                        break;
                    }
                }
                onImageURL(imageURL);
            });
        }
    }
    function prepareForAdv(output, cloudSkins) {
        if (output.length >= 3) {
            output.sort(function (a, b) {
                return cloudSkins[a.id].index > cloudSkins[b.id].index ? 1 : -1;
            });
            return output.slice(0, 6);
        } else {
            return [];
        }
    }
    function addRandomParamToUserUrl(url) {
        bgRandParam = bgRandParam || Math.floor(Math.random() * Date.now());
        return url + "?rnd=" + bgRandParam;
    }
    return createModule("BackgroundImages", {
        onMessage: function BackgroundImages_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "uploadUserBackground":
                this.upload(req.url, sendResponse);
                return true;
                break;
            case "setBackgroundImage":
                if (sender.tab && sender.tab.id) {
                    select(sender.tab.id, req.id);
                }
                break;
            }
        },
        onAlarm: function BackgroundImages_onAlarm(alarmInfo) {
            if (alarmInfo.name === "cloudBackgrounds") {
                sync();
            }
        },
        migrateToCloudOnUpdate: function BackgroundImages_migrateToCloudOnUpdate(forceBackgroundChange) {
            parallel({
                storeDir: requestStoreDirectory,
                root: requestFsRoot
            }, function (res) {
                res.root.getFile(USER_IMAGE_LEAFNAME, { create: false }, function (fileEntry) {
                    fileEntry.moveTo(res.storeDir, USER_IMAGE_LEAFNAME);
                });
                if (forceBackgroundChange)
                    return;
                var selectedBgImage = Settings.get("backgroundImage");
                res.root.getFile(TEMP_SELECTED_FILENAME, { create: false }, function (fileEntry) {
                    if (selectedBgImage === "user") {
                        fileEntry.remove(function () {
                        });
                    } else {
                        fileEntry.moveTo(res.storeDir, selectedBgImage);
                    }
                });
            });
        },
        upload: function BackgroundImages_upload(url, callback) {
            bgRandParam = null;
            fitImageToScreen(url, function (blob) {
                requestStoreDirectory(function (storeDir) {
                    storeDir.getFile(USER_IMAGE_LEAFNAME, {
                        create: true,
                        exclusive: false
                    }, function (fileEntry) {
                        fileEntry.createWriter(function (fileWriter) {
                            fileWriter.onwriteend = function (evt) {
                                var fontColors = Settings.get("backgroundImagesFontColors");
                                delete fontColors[USER_IMAGE_LEAFNAME];
                                Settings.set("backgroundImagesFontColors", fontColors);
                                BackgroundImages.requestUserImageURL(callback);
                            };
                            fileWriter.write(blob);
                        });
                    });
                });
            });
        },
        requestList: function BackgroundImages_requestList(callback) {
            var brandingSkins = getBrandingSkins();
            var cloudSkins = getCloudSkins();
            var cloudOldSkins = {};
            for (var id in cloudSkins) {
                var leafName = cloudSkins[id].image.split("/").pop();
                cloudOldSkins[leafName] = cloudSkins[id];
            }
            getLocalFiles(function (files) {
                var userSkin;
                var selectedSkins = {};
                for (var name in files) {
                    var localUrl = files[name];
                    if (name === USER_IMAGE_LEAFNAME) {
                        userSkin = {
                            id: USER_IMAGE_ID,
                            preview: addRandomParamToUserUrl(localUrl),
                            image: addRandomParamToUserUrl(localUrl),
                            isUser: true
                        };
                        continue;
                    }
                    if (cloudSkins[name]) {
                        cloudSkins[name].image = localUrl;
                    } else if (cloudOldSkins[name]) {
                        cloudSkins[cloudOldSkins[name].id].image = localUrl;
                    } else {
                        selectedSkins[name] = {
                            id: name,
                            preview: localUrl,
                            image: localUrl
                        };
                    }
                }
                var output = [];
                for (var path in brandingSkins) {
                    output.push({
                        preview: brandingSkins[path],
                        image: brandingSkins[path],
                        id: path
                    });
                }
                var xmlDoc = Branding.getXMLDocument("fastdial/backgrounds.xml");
                var xmlItems = {};
                toArray(xmlDoc.querySelectorAll("backgrounds > background")).forEach(function (item) {
                    xmlItems[item.getAttribute("filename")] = item.getAttribute("index");
                });
                output.sort(function (a, b) {
                    var v1 = xmlItems[a.id] || 10;
                    var v2 = xmlItems[b.id] || 10;
                    return v1 > v2 ? 1 : -1;
                });
                if (userSkin) {
                    output.push(userSkin);
                }
                for (var id in selectedSkins) {
                    if (brandingSkins[id]) {
                        continue;
                    }
                    output.push({
                        preview: selectedSkins[id].preview,
                        image: selectedSkins[id].image,
                        id: id
                    });
                }
                var cloudOutput = [];
                for (var id in cloudSkins) {
                    if (brandingSkins[id]) {
                        continue;
                    }
                    cloudOutput.push({
                        preview: cloudSkins[id].preview,
                        image: cloudSkins[id].image,
                        id: id,
                        color: cloudSkins[id].color
                    });
                }
                cloudOutput.sort(function (a, b) {
                    return cloudSkins[a.id].index > cloudSkins[b.id].index ? 1 : -1;
                });
                output = output.concat(cloudOutput);
                callback(output);
            });
        },
        requestNew: function BackgroundImages_requestNew() {
            var cloudSkins = getCloudSkins();
            var output = [];
            var now = Date.now();
            for (var id in cloudSkins) {
                if (cloudSkins[id].downloadDate && now - cloudSkins[id].downloadDate < 24 * 60 * 60 * 1000) {
                    output.push({
                        preview: cloudSkins[id].preview,
                        id: id
                    });
                }
            }
            return prepareForAdv(output, cloudSkins);
        },
        requestCloud: function BackgroundImages_requestNew() {
            var cloudSkins = getCloudSkins();
            var output = [];
            for (var id in cloudSkins) {
                output.push({
                    preview: cloudSkins[id].preview,
                    id: id
                });
            }
            return prepareForAdv(output, cloudSkins);
        },
        requestUserImageURL: function Background_requestUserImageURL(callback) {
            requestStoreDirectory(function (storeDir) {
                storeDir.getFile(USER_IMAGE_LEAFNAME, { create: false }, function (fileEntry) {
                    var outputURL = addRandomParamToUserUrl(fileEntry.toURL());
                    callback(outputURL);
                }, function () {
                    callback(null);
                });
            });
        },
        requestCurrentSelected: function BackgroundImages_requestCurrentSelected(callback) {
            var prefValue = Settings.get("backgroundImage");
            var fontColors = Settings.get("backgroundImagesFontColors");
            if (prefValue === "user") {
                this.requestUserImageURL(function (userImageURL) {
                    var output = {
                        id: "",
                        color: OVERLAY_COLOR_BLACK,
                        image: "",
                        preview: ""
                    };
                    if (userImageURL) {
                        output.id = USER_IMAGE_ID;
                        output.image = output.preview = userImageURL;
                        if (fontColors[USER_IMAGE_LEAFNAME]) {
                            output.color = fontColors[USER_IMAGE_LEAFNAME];
                        } else {
                            calculateFontColor(output.id);
                        }
                    }
                    callback(output);
                });
                return;
            }
            this.requestList(function (imagesList) {
                var brandingSkins = getBrandingSkins();
                var imageFound;
                imagesList.forEach(function (image) {
                    if (image.id === prefValue) {
                        imageFound = image;
                        return;
                    }
                    if (imageFound)
                        return;
                    if (brandingSkins[image.id]) {
                        imageFound = image;
                    }
                });
                if (imageFound && !imageFound.color) {
                    if (fontColors[imageFound.id]) {
                        imageFound.color = fontColors[imageFound.id];
                    } else {
                        calculateFontColor(imageFound.id);
                    }
                }
                callback(imageFound);
            });
        },
        initialSelect: function BackgroundImages_initialSelect(id) {
            this.logger.info("Set backgroundImage to \"%s\"", id);
            Settings.set("backgroundImage", id);
            calculateFontColor(id, true);
        },
        isCurrentFromAdv: function () {
            var curerntId = Settings.get("backgroundImage");
            return this.requestNew().some(function (el) {
                return el.id === curerntId;
            });
        },
        isCurrentFromCloud: function () {
            var curerntId = Settings.get("backgroundImage");
            return this.requestCloud().some(function (el) {
                return el.id === curerntId;
            });
        }
    });
}();
