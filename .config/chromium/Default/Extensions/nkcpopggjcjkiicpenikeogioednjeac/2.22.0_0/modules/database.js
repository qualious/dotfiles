Database = function () {
    "use strict";
    var db = null;
    return createModule("Database", {
        open: function Database_Open(callback) {
            sklad.open("visualbookmarks", {
                version: 3,
                migration: {
                    "1": function (database) {
                        database.createObjectStore("thumbs", { keyPath: "url" });
                        database.createObjectStore("unsafe_domains", { keyPath: "domain" });
                        database.createObjectStore("cloud_data", { keyPath: "domain" });
                        database.createObjectStore("thumbs_shown", { keyPath: "position" });
                        database.createObjectStore("blacklist", { keyPath: "domain" });
                        var usageHistoryStore = database.createObjectStore("week_usage", { autoIncrement: true });
                        usageHistoryStore.createIndex("action", "action");
                    },
                    "2": function (database) {
                        database.createObjectStore("users", { keyPath: "uid" });
                    },
                    "3": function (database) {
                        database.createObjectStore("pickup", { keyPath: "url" });
                    }
                }
            }, function (err, database) {
                db = database;
                callback(err);
            });
        },
        get conn() {
            return db;
        }
    });
}();
DbError = function (err) {
    this.message = err.name + ": " + err.message;
};
DbError.prototype = new Error();
