(function (globalScope) {
    var storage = window.localStorage;
    var Migration = {
        migrations: [],
        migrationKey: "application.migration.state",
        state: storage.getItem(this.migrationKey),
        add: function (version, migrationHandler) {
            this.migrations.push({
                version: version,
                handler: migrationHandler
            });
            this.migrations = this.migrations.sort(this._sortMigrations);
        },
        up: function () {
            var needMigrations = this.getMigrations();
            this.apply(needMigrations);
        },
        apply: function (migrations, callback) {
            var self = this;
            var index = 0;
            next(index);
            function next() {
                if (migrations[index]) {
                    self.applyMigration(index, onComplete);
                } else {
                    if (typeof callback === "function") {
                        callback.call();
                    }
                }
            }
            function onComplete() {
                index++;
                next();
            }
        },
        applyMigration: function (index, onComplete) {
            var migration = this.migrations[index];
            var self = this;
            if (migration && typeof migration.handler === "function") {
                migration.handler(function () {
                    storage.setItem(self.migrationKey, migration.version);
                    if (typeof onComplete === "function") {
                        onComplete.call();
                    }
                });
            }
        },
        getMigrations: function () {
            var lastVersion = storage.getItem(this.migrationKey);
            var startIndex = 0;
            if (lastVersion) {
                this.migrations.forEach(function (migration, index) {
                    if (migration.version === lastVersion) {
                        startIndex = index + 1;
                    }
                });
            }
            return this.migrations.slice(startIndex);
        },
        _sortMigrations: function (m1, m2) {
            return m1.version.localeCompare(m2.version);
        }
    };
    if (typeof define !== "undefined" && define.amd) {
        define(Migration);
    } else {
        globalScope.Migration = Migration;
    }
}(typeof window !== "undefined" ? window : global));
