(function () {
    var VERSION = "2.13.0";
    var logger = new Logger("Migration " + VERSION);
    function Layout_getBaseList() {
        var isLandScape = window.screen.width > window.screen.height;
        return [
            {
                x: 3,
                y: 3
            },
            {
                x: isLandScape ? 4 : 3,
                y: isLandScape ? 3 : 4
            },
            {
                x: 4,
                y: 4
            },
            {
                x: isLandScape ? 5 : 4,
                y: isLandScape ? 4 : 5
            },
            {
                x: 5,
                y: 5
            }
        ];
    }
    Migration.add(VERSION, function (data, callback) {
        logger.info("Starting...");
        var tasks = {};
        var old = Settings.get("oldThumbsLayout");
        if (old && old[0] === 0 && old[1] === 0) {
            var layouts = Layout_getBaseList();
            var currentX = Settings.get("layoutX");
            var currentY = Settings.get("layoutY");
            var hasCurrent = layouts.some(function (l) {
                return l.x === currentX && l.y === currentY;
            });
            if (!hasCurrent) {
                logger.info("Saving non-standart layout %ix%i...", currentX, currentY);
                Settings.set("oldThumbsLayout", [
                    currentX,
                    currentY
                ]);
            }
        }
        logger.info("Set thumb types...");
        InternalStructure.iterate({}, function (item, index) {
            if (item.location && item.location.source) {
                var a = document.createElement("a");
                a.href = item.location.source;
                if (a.hostname === "clck.yandex.ru") {
                    item.type = InternalStructure.THUMB_TYPE.DEF_THUMB;
                    logger.info("Thumb #%i %s %s", index, item.type, item.location.source);
                    return;
                }
            }
            if (item.pinned) {
                item.type = InternalStructure.THUMB_TYPE.USER_THUMB;
                logger.info("Thumb #%i %s %s", index, item.type, item.location && item.location.source);
                return;
            }
            item.type = InternalStructure.THUMB_TYPE.AUTO_THUMB;
            logger.info("Thumb #%i %s %s", index, item.type, item.location && item.location.source);
        });
        logger.info("Add `url` field to location of current thumbs...");
        InternalStructure.iterate({}, function (item, index) {
            if (item && item.location && item.location.source) {
                var parsed = parseUrl(item.location.source);
                logger.info("Thumb #%i: %s ", index, parsed.url);
                item.location.url = parsed.url;
            }
        });
        logger.info("Replace clck thumbs...");
        var replacements = {};
        InternalStructure.iterate({}, function (item, index) {
            if (item && item.location && item.location.source) {
                var a = document.createElement("a");
                a.href = item.location.source;
                if (a.hostname === "clck.yandex.ru") {
                    var realUrl = parseUrl(item.location.source).url;
                    if (item.location.source !== realUrl) {
                        logger.info("Thumb #%i, %s -> %s", index, item.location.source, realUrl);
                        replacements[item.location.source] = realUrl;
                        item.location.source = realUrl;
                    }
                }
            }
        });
        logger.info("Rename screenshots...");
        for (var k in replacements) {
            tasks[k] = Screenshots.rename.bind(Screenshots, k, replacements[k]);
        }
        parallel(tasks, function () {
            InternalStructure.dump();
            data[VERSION] = "done";
            callback(null, data);
        });
    });
}());
