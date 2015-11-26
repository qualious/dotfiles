Thumbs = function () {
    "use strict";
    var TITLE_ADDITIONAL_SEARCHPARAM = Config.constants.additional_search_param + chrome.runtime.getManifest().version;
    var NOTIFY_THUMB_CHANGED_TIMEOUT_MS = 500;
    var notifyThumbChangedTimeout;
    function info() {
        Thumbs.logger.info.apply(Thumbs.logger, arguments);
    }
    function initTab(tabId, sendBookmarksState, requestData) {
        ClosedTabs.hasClosed(tabId, function (hasClosed) {
            requestData.hasClosedTabs = hasClosed;
            notifyTabs("init", requestData, tabId);
            if (sendBookmarksState) {
                Bookmarks.requestBranch(0, function (bookmarks) {
                    notifyTabs("bookmarksStateChanged", bookmarks, tabId);
                });
            }
            if (Settings.get("showStatModal") && !Settings.hasUserValue("sendUsageStat") && !Settings.get("sendUsageStat")) {
                Settings.set("showStatModal", false);
                notifyTabs("statisticsModal", null, tabId);
            }
        });
    }
    function updateThumbsWithMissingData(source, callback) {
        var foundThumbsWithSource = false;
        var normalUrl;
        InternalStructure.iterate({ nonempty: true }, function (thumbData, index) {
            if (thumbData.location.source === source) {
                foundThumbsWithSource = true;
                normalUrl = thumbData.location.url;
                callback(thumbData, index);
            }
        });
        if (foundThumbsWithSource) {
            InternalStructure.dump();
            notifyThumbChanged();
        }
        PickupSuggest.updateHistoryThumb(normalUrl || source, callback);
    }
    function notifyThumbChanged() {
        clearTimeout(notifyThumbChangedTimeout);
        notifyThumbChangedTimeout = setTimeout(function () {
            FrontendHelper.notify("thumbChanged");
        }, NOTIFY_THUMB_CHANGED_TIMEOUT_MS);
    }
    return createModule("Thumbs", {
        onMessage: function Thumbs_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "init":
                this.requestInit(sender.tab && sender.tab.id);
                break;
            case "pinThumb":
                this.pin(req.index);
                break;
            case "unpinThumb":
                this.unpin(req.index);
                break;
            case "swapThumbs":
                this.swap(req.oldIndex, req.newIndex);
                break;
            case "removeThumb":
                this.remove(req.index);
                break;
            case "saveThumb":
                this.save(req.index, req.data);
                break;
            case "setThumbsCount":
                this.setThumbsCount(req.count);
                break;
            case "restoreThumbs":
                this.restoreThumbs(req.thumbs);
                break;
            }
        },
        saveNewStructure: function Thumbs_saveNewStructure(pinnedList, mostVisitedList, options) {
            var currentThumbsCache = {};
            InternalStructure.iterate({ nonempty: true }, function (thumbData, index) {
                var url = thumbData.location.url;
                if (!currentThumbsCache[url]) {
                    currentThumbsCache[url] = thumbData;
                } else {
                    [
                        "thumb",
                        "cloud"
                    ].forEach(function (field) {
                        currentThumbsCache[url][field] = currentThumbsCache[url][field] || {};
                        if (thumbData[field]) {
                            copyOwnProperties(thumbData[field], currentThumbsCache[url][field]);
                        }
                    });
                }
            });
            mostVisitedList.forEach(function (historyItem) {
                var url = historyItem.location.url;
                var cacheItem = currentThumbsCache[url];
                if (cacheItem && cacheItem.thumb) {
                    var newVisits = historyItem.visits || 0;
                    if (!cacheItem.thumb.visits || cacheItem.thumb.visits < newVisits) {
                        cacheItem.thumb.visits = newVisits;
                    }
                }
            });
            var newThumbsStructure = {};
            for (var position in pinnedList) {
                Thumbs.logger.info("Pickup: keep pinned: #%i %s", position, pinnedList[position] && pinnedList[position].url);
                newThumbsStructure[position] = {
                    thumb: {},
                    cloud: {},
                    pinned: 1,
                    _data: pinnedList[position]
                };
            }
            var visibleCount = options.firstRun ? Pickup.FIRST_PICKUP_COUNT : InternalStructure.length;
            var currentPickedUpThumbs = {};
            var topCount = 0;
            for (var i = 0; i < visibleCount; i++) {
                if (newThumbsStructure[i]) {
                    continue;
                }
                topCount++;
                var thumb = InternalStructure.getItem(i);
                if (thumb && thumb.location && thumb.location.url) {
                    currentPickedUpThumbs[thumb.location.url] = {
                        thumb: thumb,
                        position: i
                    };
                }
            }
            mostVisitedList.sort(function (a, b) {
                var weightA = a.visits || 0;
                var weightB = b.visits || 0;
                if (weightA !== weightB) {
                    return weightA > weightB ? -1 : 1;
                } else {
                    var existsA = currentPickedUpThumbs[a.location.url];
                    var existsB = currentPickedUpThumbs[b.location.url];
                    if (existsA && !existsB) {
                        return -1;
                    } else if (!existsA && existsB) {
                        return 1;
                    } else if (existsA && existsB) {
                        return existsB.position - existsA.position;
                    } else {
                        var indexA = a.index || 0;
                        var indexB = b.index || 0;
                        return indexA - indexB;
                    }
                }
            });
            info("Pickup list: visits | URL");
            for (var i = 0; i < mostVisitedList.length; i++) {
                var weight = mostVisitedList[i].visits;
                info("%i | %s", weight, mostVisitedList[i].url);
            }
            var topMostVisitedList = mostVisitedList.splice(0, topCount);
            Thumbs.logger.info("Most visited sliced on visible and invisible parts: %i | %i", topMostVisitedList.length, mostVisitedList.length);
            for (var i = 0; i < visibleCount; i++) {
                if (newThumbsStructure[i]) {
                    continue;
                }
                var thumb = InternalStructure.getItem(i);
                if (thumb && thumb.location && thumb.location.url) {
                    for (var j = topMostVisitedList.length; j--;) {
                        if (topMostVisitedList[j].location.url === thumb.location.url) {
                            Thumbs.logger.info("Pickup: same pos: #%i %s", i, topMostVisitedList[j] && topMostVisitedList[j].url);
                            newThumbsStructure[i] = {
                                thumb: {},
                                cloud: {},
                                pinned: 0,
                                _data: topMostVisitedList[j]
                            };
                            topMostVisitedList.splice(j, 1);
                            break;
                        }
                    }
                }
            }
            var newThumbIndexes = [];
            for (var i = 0;; i++) {
                if (newThumbsStructure[i]) {
                    continue;
                }
                var page;
                if (topMostVisitedList.length) {
                    page = topMostVisitedList.shift();
                    newThumbIndexes.push(String(i));
                } else {
                    page = null;
                }
                if (page) {
                    Thumbs.logger.info("Pickup: add new: #%i %s", i, page && page.url);
                    newThumbsStructure[i] = {
                        thumb: {},
                        cloud: {},
                        pinned: 0,
                        _data: page
                    };
                } else {
                    break;
                }
            }
            for (var position in newThumbsStructure) {
                var newThumb = newThumbsStructure[position];
                var thumbData = newThumb._data;
                if (thumbData.url) {
                    newThumb.location = parseUrl(thumbData.url);
                    if (thumbData.title) {
                        newThumb.thumb.title = thumbData.title;
                    }
                    var url = newThumb.location.url;
                    if (currentThumbsCache[url]) {
                        newThumb.thumb = copyObj(currentThumbsCache[url].thumb, true);
                        newThumb.cloud = copyObj(currentThumbsCache[url].cloud, true);
                    }
                }
                newThumb.type = newThumb._data.type;
                if (newThumb.thumb) {
                    if (!newThumb.thumb.visits || newThumb.thumb.visits < thumbData.visits) {
                        newThumb.thumb.visits = thumbData.visits;
                    }
                }
                delete newThumb._data;
            }
            InternalStructure.clear();
            InternalStructure.setItem(newThumbsStructure);
            PickupCache.save(mostVisitedList, function () {
                Screenshots.syncQueue();
            });
            return newThumbIndexes;
        },
        getMissingData: function Thumbs_getMissingData(data, options) {
            var stopValues = [
                undefined,
                null
            ];
            if (!data.cloud || !data.thumb) {
                Thumbs.logger.warn("getMissingData: incorrect input %j", data);
            }
            var cloudDataMissing = stopValues.indexOf(data.cloud.backgroundImage) !== -1;
            var tableauDataMissing = stopValues.indexOf(data.thumb.tableau) !== -1 || stopValues.indexOf(data.thumb.tableau.image) !== -1;
            var bothBackgroundImagesMissing = cloudDataMissing && tableauDataMissing;
            var thumbDataMerged = data.thumb;
            var source = data.location.source;
            var self = this;
            if (!data.location || !data.location.source)
                return;
            options = options || {};
            if (stopValues.indexOf(data.thumb.title) !== -1) {
                Title.get(data.location.url, function (title) {
                    updateThumbsWithMissingData(source, function (thumbData, index) {
                        thumbData.thumb.title = title;
                    });
                });
            }
            if (stopValues.indexOf(data.thumb.favicon) !== -1 || options.force) {
                Favicons.requestData(source, function (faviconURL, dominantColor) {
                    updateThumbsWithMissingData(source, function (thumbData, index) {
                        thumbData.thumb.favicon = faviconURL;
                        thumbData.thumb.backgroundColor = dominantColor;
                    });
                });
            } else if (stopValues.indexOf(data.thumb.favicon) === -1 && stopValues.indexOf(data.thumb.backgroundColor) !== -1) {
                var img = new Image();
                img.onload = function () {
                    var dominantColor = Colors.getDominant(img);
                    updateThumbsWithMissingData(source, function (thumbData, index) {
                        thumbData.thumb.backgroundColor = dominantColor;
                    });
                };
                img.src = data.thumb.favicon;
            }
            if (bothBackgroundImagesMissing || options.force) {
                CloudSource.requestDataYBrowserAPI(data.location.host, function (logoURL, color, logoURLSub) {
                    var tasks = {
                        localUrl: function (callback) {
                            Logos.download(data.location.host, Logos.DIR_LOGO_MAIN, logoURL, callback);
                        },
                        localUrlSub: function (callback) {
                            if (logoURLSub) {
                                Logos.download(data.location.host, Logos.DIR_LOGO_SUB, logoURLSub, callback);
                            } else {
                                callback(null);
                            }
                        }
                    };
                    parallel(tasks, function (res) {
                        var backgroundImage = res.localUrl || logoURL;
                        var backgroundImageSub = res.localUrlSub || logoURLSub;
                        updateThumbsWithMissingData(data.location.source, function (thumbData, index) {
                            thumbData.cloud.backgroundImage = backgroundImage;
                            thumbData.cloud.backgroundColor = color;
                            if (backgroundImageSub) {
                                thumbData.cloud.backgroundImageSub = backgroundImageSub;
                            }
                        });
                        var cloudData = {
                            domain: data.location.host,
                            backgroundImage: backgroundImage,
                            backgroundColor: color
                        };
                        if (backgroundImageSub) {
                            cloudData.backgroundImageSub = backgroundImageSub;
                        }
                        CloudSource.saveData(cloudData);
                    });
                });
                if (!isYandexHost(data.location.host) && (options.force || options.historyOnly)) {
                    CloudSource.requestDataTableauAPI(source, function (logoURL, color) {
                        Logos.download(data.location.host, Logos.DIR_LOGO_TABLEAU, logoURL, function (localURL) {
                            updateThumbsWithMissingData(data.location.source, function (thumbData, index) {
                                thumbData.thumb.tableau = {
                                    image: localURL || logoURL,
                                    color: color
                                };
                            });
                            if (localURL) {
                                InternalStructure.dump();
                            }
                        });
                    });
                }
            }
        },
        requestInit: function Thumbs_requestInit(tabId, ignoreBookmarks) {
            info("Request init into tab %i", tabId);
            var currentLayout = Layout.getCurrent();
            var showBookmarks = Settings.get("showBookmarks");
            var configXMLDocument = Branding.getXMLDocument("fastdial/config.xml");
            var requestData = {
                debug: Settings.get("debug"),
                x: currentLayout[0],
                y: currentLayout[1],
                showBookmarks: showBookmarks,
                searchStatus: Settings.get("showSearchForm") ? 2 : 1,
                sync: { status: 4 }
            };
            var brandingLogo = configXMLDocument.querySelector("logo");
            var brandingSearch = configXMLDocument.querySelector("search");
            requestData.branding = {
                id: Branding.id,
                logo: {
                    url: Branding.expandURL(brandingLogo.getAttribute("url")),
                    img: Branding.findFile("fastdial/" + brandingLogo.getAttribute("img_clear")) || "",
                    imgDark: Branding.findFile("fastdial/" + brandingLogo.getAttribute("img_dark")) || "",
                    alt: brandingLogo.getAttribute("alt"),
                    title: brandingLogo.getAttribute("title")
                },
                search: {
                    url: Branding.expandURL(brandingSearch.getAttribute("url")),
                    placeholder: brandingSearch.getAttribute("placeholder"),
                    navigateTitle: brandingSearch.getAttribute("navigate_title") || ""
                }
            };
            if (tabId) {
                requestData.i18n = {};
                Config.frontend_i18n_keys.forEach(function (key) {
                    var i18nKey = "layout_" + key.replace(/\./g, "_");
                    requestData.i18n[key] = Branding.expandURL(I18N.getMessage(i18nKey));
                });
                requestData.tabId = tabId;
            }
            parallel({
                hasApps: Apps.hasActive.bind(Apps),
                background: BackgroundImages.requestCurrentSelected.bind(BackgroundImages),
                thumbs: function (callback) {
                    if (FrontendHelper.mute) {
                        callback({});
                    } else {
                        FrontendHelper.requestFullStructure(callback);
                    }
                }
            }, function (results) {
                requestData.advertisement = Advertisement.getCurrent();
                requestData.auth = Auth.getState();
                copyOwnProperties(results, requestData);
                var sendBookmarksState = showBookmarks && !ignoreBookmarks;
                if (tabId) {
                    initTab(tabId, sendBookmarksState, requestData);
                } else {
                    iterateVBTabs(function (tab) {
                        initTab(tab.id, sendBookmarksState, requestData);
                    });
                }
                var data = {
                    visibleCount: Layout.getTotalThumbs(),
                    pinned: Object.keys(results.thumbs).map(function (pos) {
                        var item = results.thumbs[pos];
                        return item.pinned && item.url ? {
                            position: parseInt(pos, 10),
                            url: item.url,
                            title: item.title
                        } : false;
                    }).filter(Boolean),
                    bg: results.background.image
                };
                chrome.storage.local.set({ ybimport: data });
            });
        },
        pin: function Thumbs_pin(index) {
            this.logger.info("Pin thumb #%i", index);
            InternalStructure.setItem(index, {
                pinned: true,
                type: InternalStructure.THUMB_TYPE.USER_THUMB
            });
            FrontendHelper.notify("thumbChanged", index);
        },
        unpin: function Thumbs_unpin(index) {
            this.logger.info("Unpin thumb #%i", index);
            var current = InternalStructure.getItem(index);
            var currentLayout = Layout.getCurrent();
            var currentThumbsNum = currentLayout[0] * currentLayout[1];
            var isLastThumb = index === currentThumbsNum - 1;
            if (isLastThumb)
                Settings.set("emptyLastThumb", false);
            if (current && current.pinned) {
                if (current.location) {
                    InternalStructure.setItem(index, {
                        pinned: false,
                        type: InternalStructure.THUMB_TYPE.USER_THUMB
                    });
                } else {
                    InternalStructure.removeItem(index);
                }
            }
            FrontendHelper.notify("thumbChanged", index);
        },
        swap: function Thumbs_swap(oldIndex, newIndex) {
            var pos1ThumbData = InternalStructure.getItem(oldIndex);
            if (!pos1ThumbData || !pos1ThumbData.location)
                return;
            this.logger.info("Swap thumbs #%i and #%i", oldIndex, newIndex);
            if (newIndex === Layout.getTotalThumbs() - 1) {
                Settings.set("emptyLastThumb", false);
            }
            pos1ThumbData.pinned = true;
            pos1ThumbData.type = InternalStructure.THUMB_TYPE.USER_THUMB;
            if (oldIndex < newIndex) {
                InternalStructure.shiftLeft(oldIndex + 1, newIndex);
            }
            if (oldIndex > newIndex) {
                InternalStructure.shiftRight(newIndex, oldIndex - 1);
            }
            InternalStructure.overwriteItem(newIndex, pos1ThumbData);
            FrontendHelper.notify("thumbChanged");
            FrontendHelper.closePopups();
        },
        remove: function Thumbs_remove(index) {
            var currentThumbData = InternalStructure.getItem(index);
            if (!currentThumbData) {
                return;
            }
            this.logger.info("Remove thumb #%i", index);
            InternalStructure.removeItem(index);
            InternalStructure.shiftLeft(index + 1);
            FrontendHelper.notify("thumbChanged");
            FrontendHelper.notify("thumbChanged", InternalStructure.length);
            FrontendHelper.closePopups();
            if (currentThumbData.location) {
                var thumbHost = currentThumbData.location.host;
                var hasSameDomain = false;
                var hasSameURL = false;
                InternalStructure.iterate({
                    nonempty: true,
                    visible: true
                }, function (thumbData, thumbIndex) {
                    if (thumbIndex === index)
                        return;
                    if (thumbData.location.source === currentThumbData.location.source)
                        hasSameURL = true;
                    var host = parseUrl(thumbData.location.source).host;
                    if (host === thumbHost) {
                        hasSameDomain = true;
                    }
                });
                if (!hasSameDomain) {
                    Blacklist.upsertOne(thumbHost);
                }
                if (!hasSameURL) {
                    Screenshots.drop(currentThumbData.location.source);
                }
            }
        },
        save: function Thumbs_save(index, data) {
            data.url = data.url.trim();
            data.title = data.title.trim() || "";
            if (data.url.indexOf(" ") !== -1 || /^[\.,-\/#!$%\^&\*;:{}=\-_`~()\\'"]+$/.test(data.url)) {
                this.logger.warn("Saved URL is not valid: " + data.url);
                FrontendHelper.notify("thumbChanged", index);
                return;
            }
            if (!/^[a-z\-]+:\/\/.+/.test(data.url)) {
                data.url = "http://" + data.url;
            }
            var locationObj = parseUrl(data.url);
            this.logger.info("Save thumb #%i with data %j", index, data);
            var currentThumbData = InternalStructure.getItem(index);
            var isAdd = !currentThumbData;
            if (isAdd) {
                Advertisement.untriggered("vbaddthumb");
                Settings.set("hasUserAddedThumb", true);
            }
            if (isYandexHost(locationObj.host) && locationObj.query !== "") {
                var anchor = document.createElement("a");
                anchor.href = locationObj.source;
                var queryStr = (anchor.search || "").replace("?", "");
                var queryObj = parseQueryParams(queryStr);
                var keyname = TITLE_ADDITIONAL_SEARCHPARAM.split("=")[0];
                delete queryObj[keyname];
                queryStr = encodeQueryParams(queryObj);
                anchor.search = queryStr !== "" ? "?" + queryStr : "";
                locationObj = parseUrl(anchor.href);
            }
            Screenshots.addToQueue(data.url);
            var thumbData = {
                pinned: true,
                thumb: {},
                cloud: {},
                type: InternalStructure.THUMB_TYPE.USER_THUMB,
                location: locationObj
            };
            if (data.title) {
                thumbData.thumb.title = data.title;
            }
            InternalStructure.setItem(index, thumbData);
            FrontendHelper.notify("thumbChanged", index);
            FrontendHelper.closePopups();
            this.getMissingData(thumbData, { force: true });
            Blacklist.deleteOne(locationObj.host);
        },
        setThumbsCount: function (count) {
            var indexes = [];
            var cacheItem;
            if (count > InternalStructure.length) {
                PickupCache.get(function (cacheItems) {
                    while (cacheItem = cacheItems.shift()) {
                        var exists = InternalStructure.getByUrl(cacheItem.url);
                        if (!exists) {
                            var hasThumbCloud = cacheItem.thumb && cacheItem.cloud;
                            var thumbData = {
                                pinned: cacheItem.pinned,
                                thumb: cacheItem.thumb || { visits: cacheItem.visits || 0 },
                                cloud: cacheItem.cloud || {},
                                type: cacheItem.type,
                                location: cacheItem.location
                            };
                            InternalStructure.setItem(InternalStructure.length, thumbData);
                            Screenshots.addToQueue(cacheItem.url);
                            Thumbs.getMissingData(thumbData, { force: !hasThumbCloud });
                            if (InternalStructure.length === count) {
                                break;
                            }
                        }
                    }
                    FrontendHelper.notify("thumbChanged");
                    PickupCache.save(cacheItems);
                });
            } else if (count < InternalStructure.length) {
                PickupCache.get(function (cacheItems) {
                    for (var i = InternalStructure.length - 1; i >= count; i--) {
                        var thumbData = InternalStructure.getItem(i);
                        cacheItems.unshift({
                            url: thumbData.location.source,
                            location: thumbData.location,
                            title: thumbData.thumb.title,
                            visits: thumbData.thumb.visits,
                            type: thumbData.type,
                            pinned: thumbData.pinned,
                            thumb: thumbData.thumb,
                            cloud: thumbData.cloud
                        });
                        InternalStructure.removeItem(i);
                        indexes.push(i);
                    }
                    FrontendHelper.notify("thumbChanged", indexes);
                    PickupCache.save(cacheItems);
                });
            }
        },
        restoreThumbs: function (allThumbs) {
            var l = InternalStructure.length;
            var restoredUrls = [];
            Object.keys(allThumbs).forEach(function (key, index) {
                if (index >= l) {
                    var frontendThumb = allThumbs[key];
                    info("Restore removed thumb %i %s", index, frontendThumb.url);
                    var thumbData = {
                        pinned: Boolean(frontendThumb.pinned),
                        thumb: {},
                        cloud: {},
                        type: frontendThumb.statParam,
                        location: parseUrl(frontendThumb.url)
                    };
                    Screenshots.addToQueue(frontendThumb.url);
                    InternalStructure.loadThumbInfo(thumbData, function () {
                        InternalStructure.setItem(index, thumbData);
                        FrontendHelper.notify("thumbChanged", index);
                        Thumbs.getMissingData(thumbData, { force: false });
                    });
                    restoredUrls.push(frontendThumb.url);
                }
            });
            PickupCache.get(function (cacheItems) {
                var newCacheItems = cacheItems.filter(function (item) {
                    return restoredUrls.indexOf(item.url) === -1;
                });
                if (newCacheItems.length !== cacheItems.length) {
                    PickupCache.save(newCacheItems);
                }
            });
        }
    });
}();
