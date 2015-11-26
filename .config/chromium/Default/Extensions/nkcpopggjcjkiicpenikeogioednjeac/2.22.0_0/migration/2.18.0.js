(function () {
    var VERSION = "2.18.0";
    var logger = new Logger("Migration " + VERSION);
    function compactThumbs() {
        var newStructure = {};
        var newIndex = 0;
        var thumbsNumX = Settings.get("layoutX");
        var thumbsNumY = Settings.get("layoutY");
        var maxIndex = thumbsNumX * thumbsNumY - (Settings.get("emptyLastThumb") ? 1 : 0) - 1;
        var invisibleList = [];
        logger.info("max index for moving thumbs:%i", maxIndex);
        InternalStructure.iterate({}, function (item, index) {
            if (!item.location || !item.location.source) {
                return;
            }
            var isVisible = index <= maxIndex;
            if (isVisible) {
                logger.info("move thumb from %i to %i %s", index, newIndex, item.location.url);
                newStructure[newIndex] = item;
                newIndex++;
            } else {
                logger.info("put thumb to pickup cache %s", item.location.url);
                invisibleList.push({
                    index: index,
                    location: item.location,
                    title: item.thumb && item.thumb.title,
                    type: item.type,
                    url: item.location.url,
                    visits: item.thumb && item.thumb.visits || 0
                });
            }
        });
        InternalStructure.clear();
        InternalStructure.setItem(newStructure);
        return invisibleList;
    }
    Migration.add(VERSION, function (data, callback) {
        logger.info("Starting...");
        var tasks = {};
        var invisibleList = compactThumbs();
        Settings.set("pickupFirstCount", InternalStructure.length);
        tasks.pickupcache = function (callback) {
            PickupCache.save(invisibleList, callback);
        };
        parallel(tasks, function () {
            data[VERSION] = "done";
            callback(null, data);
        });
    });
}());
