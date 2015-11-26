PickupCache = function () {
    "use strict";
    var itemsInMemory;
    var timeout;
    var DELAY_MS = 1000;
    function save(items, callback) {
        Database.conn.clear("pickup", function (err) {
            if (err) {
                throw new DbError(err);
            }
            Database.conn.insert({ pickup: items }, function (err) {
                if (err) {
                    throw new DbError(err);
                }
                callback();
            });
        });
    }
    return createModule("PickupCache", {
        save: function (items, callback) {
            callback = callback || noop;
            items = items || [];
            itemsInMemory = removeDublicates(items, "url");
            clearTimeout(timeout);
            timeout = setTimeout(save.bind(null, itemsInMemory, callback), DELAY_MS);
        },
        get: function (callback) {
            if (itemsInMemory) {
                callback(itemsInMemory.slice());
            } else {
                Database.conn.get("pickup", {}, function (err, records) {
                    if (err) {
                        throw new DbError(err);
                    }
                    records = records.map(function (record) {
                        return record.value;
                    });
                    itemsInMemory = records;
                    callback(records.slice());
                });
            }
        }
    });
}();
