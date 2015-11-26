(function (root, factory) {
    if (typeof module !== "undefined" && typeof module.exports === "object") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        root.sklad = factory();
    }
}(this, function () {
    "use strict";
    if (!window.indexedDB)
        window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if (!window.IDBTransaction)
        window.IDBTransaction = window.mozIDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    if (!window.IDBKeyRange)
        window.IDBKeyRange = window.mozIDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    if (!window.IDBCursor)
        window.IDBCursor = window.mozIDBCursor || window.webkitIDBCursor || window.msIDBCursor;
    var TRANSACTION_READONLY = window.IDBTransaction.READ_ONLY || "readonly";
    var TRANSACTION_READWRITE = window.IDBTransaction.READ_WRITE || "readwrite";
    var skladAPI = {};
    skladAPI.ASC = window.IDBCursor.NEXT || "next";
    skladAPI.ASC_UNIQUE = window.IDBCursor.NEXT_NO_DUPLICATE || "nextunique";
    skladAPI.DESC = window.IDBCursor.PREV || "prev";
    skladAPI.DESC_UNIQUE = window.IDBCursor.PREV_NO_DUPLICATE || "prevunique";
    function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c == "x" ? r : r & 3 | 8;
            return v.toString(16);
        });
    }
    var skladKeyValueContainer = Object.create(null);
    function checkSavedData(objStore, data) {
        var keyValueContainer = Object.prototype.isPrototypeOf.call(skladKeyValueContainer, data);
        var key = keyValueContainer ? data.key : undefined;
        var value = keyValueContainer ? data.value : data;
        if (objStore.keyPath === null) {
            if (!objStore.autoIncrement && key === undefined) {
                key = uuid();
            }
        } else {
            if (typeof data !== "object")
                return false;
            if (!objStore.autoIncrement && data[objStore.keyPath] === undefined) {
                data[objStore.keyPath] = uuid();
            }
        }
        return key ? [
            value,
            key
        ] : [value];
    }
    var skladConnection = {
        insert: function skladConnection_insert() {
            var isMulti = arguments.length === 2;
            var objStoreNames = isMulti ? Object.keys(arguments[0]) : [arguments[0]];
            var callback = isMulti ? arguments[1] : arguments[2];
            var result = {};
            var callbackRun = false;
            var data, abortErr;
            if (isMulti) {
                data = arguments[0];
            } else {
                data = {};
                data[arguments[0]] = [arguments[1]];
            }
            var contains = DOMStringList.prototype.contains.bind(this.database.objectStoreNames);
            if (!objStoreNames.every(contains)) {
                var err = new DOMError("NotFoundError", "Database " + this.database.name + " (version " + this.database.version + ") doesn't contain all needed stores");
                callback(err);
                return;
            }
            var transaction = this.database.transaction(objStoreNames, TRANSACTION_READWRITE);
            transaction.oncomplete = transaction.onerror = transaction.onabort = function skladConnection_insert_onFinish(evt) {
                if (callbackRun) {
                    return;
                }
                var err = abortErr || evt.target.error;
                var isSuccess = !err && evt.type === "complete";
                if (isSuccess) {
                    callback(null, isMulti ? result : result[objStoreNames[0]][0]);
                } else {
                    callback(err);
                }
                callbackRun = true;
                if (evt.type === "error") {
                    evt.preventDefault();
                }
            };
            for (var objStoreName in data) {
                var objStore = transaction.objectStore(objStoreName);
                for (var i = 0; i < data[objStoreName].length; i++) {
                    var checkedData = checkSavedData(objStore, data[objStoreName][i]);
                    if (!checkedData) {
                        abortErr = new DOMError("InvalidStateError", "You must supply objects to be saved in the object store with set keyPath");
                        return;
                    }
                    (function (objStoreName, i) {
                        try {
                            var req = objStore.add.apply(objStore, checkedData);
                        } catch (ex) {
                            abortErr = ex;
                            return;
                        }
                        req.onsuccess = function (evt) {
                            result[objStoreName] = result[objStoreName] || [];
                            result[objStoreName][i] = evt.target.result;
                        };
                    }(objStoreName, i));
                }
            }
        },
        upsert: function skladConnection_upsert() {
            var isMulti = arguments.length === 2;
            var objStoreNames = isMulti ? Object.keys(arguments[0]) : [arguments[0]];
            var callback = isMulti ? arguments[1] : arguments[2];
            var result = {};
            var callbackRun = false;
            var data, abortErr;
            if (isMulti) {
                data = arguments[0];
            } else {
                data = {};
                data[arguments[0]] = [arguments[1]];
            }
            var contains = DOMStringList.prototype.contains.bind(this.database.objectStoreNames);
            if (!objStoreNames.every(contains)) {
                var err = new DOMError("NotFoundError", "Database " + this.database.name + " (version " + this.database.version + ") doesn't contain all needed stores");
                callback(err);
                return;
            }
            var transaction = this.database.transaction(objStoreNames, TRANSACTION_READWRITE);
            transaction.oncomplete = transaction.onerror = transaction.onabort = function skladConnection_upsert_onFinish(evt) {
                if (callbackRun) {
                    return;
                }
                var err = abortErr || evt.target.error;
                var isSuccess = !err && evt.type === "complete";
                if (isSuccess) {
                    callback(null, isMulti ? result : result[objStoreNames[0]][0]);
                } else {
                    callback(err);
                }
                callbackRun = true;
                if (evt.type === "error") {
                    evt.preventDefault();
                }
            };
            for (var objStoreName in data) {
                var objStore = transaction.objectStore(objStoreName);
                for (var i = 0; i < data[objStoreName].length; i++) {
                    var checkedData = checkSavedData(objStore, data[objStoreName][i]);
                    if (!checkedData) {
                        abortErr = new DOMError("InvalidStateError", "You must supply objects to be saved in the object store with set keyPath");
                        return;
                    }
                    (function (objStoreName, i) {
                        try {
                            var req = objStore.put.apply(objStore, checkedData);
                        } catch (ex) {
                            abortErr = ex;
                            return;
                        }
                        req.onsuccess = function (evt) {
                            result[objStoreName] = result[objStoreName] || [];
                            result[objStoreName][i] = evt.target.result;
                        };
                    }(objStoreName, i));
                }
            }
        },
        delete: function skladConnection_delete() {
            var isMulti = arguments.length === 2;
            var objStoreNames = isMulti ? Object.keys(arguments[0]) : [arguments[0]];
            var callback = isMulti ? arguments[1] : arguments[2];
            var callbackRun = false;
            var data, abortErr;
            if (isMulti) {
                data = arguments[0];
            } else {
                data = {};
                data[arguments[0]] = [arguments[1]];
            }
            var contains = DOMStringList.prototype.contains.bind(this.database.objectStoreNames);
            if (!objStoreNames.every(contains)) {
                var err = new DOMError("NotFoundError", "Database " + this.database.name + " (version " + this.database.version + ") doesn't contain all needed stores");
                callback(err);
                return;
            }
            var transaction = this.database.transaction(objStoreNames, TRANSACTION_READWRITE);
            transaction.oncomplete = transaction.onerror = transaction.onabort = function skladConnection_delete_onFinish(evt) {
                if (callbackRun) {
                    return;
                }
                var err = abortErr || evt.target.error;
                var isSuccess = !err && evt.type === "complete";
                callback(isSuccess ? undefined : err);
                callbackRun = true;
                if (evt.type === "error") {
                    evt.preventDefault();
                }
            };
            for (var objStoreName in data) {
                var objStore = transaction.objectStore(objStoreName);
                for (var i = 0; i < data[objStoreName].length; i++) {
                    try {
                        objStore.delete(data[objStoreName][i]);
                    } catch (ex) {
                        abortErr = ex;
                        return;
                    }
                }
            }
        },
        clear: function skladConnection_clear(objStoreNames, callback) {
            var objStoreNames = Array.isArray(objStoreNames) ? objStoreNames : [objStoreNames];
            var callbackRun = false;
            var abortErr;
            var contains = DOMStringList.prototype.contains.bind(this.database.objectStoreNames);
            if (!objStoreNames.every(contains)) {
                var err = new DOMError("NotFoundError", "Database " + this.database.name + " (version " + this.database.version + ") doesn't contain all needed stores");
                callback(err);
                return;
            }
            var transaction = this.database.transaction(objStoreNames, TRANSACTION_READWRITE);
            transaction.oncomplete = transaction.onerror = transaction.onabort = function skladConnection_clear_onFinish(evt) {
                if (callbackRun) {
                    return;
                }
                var err = abortErr || evt.target.error;
                var isSuccess = !err && evt.type === "complete";
                callback(isSuccess ? undefined : err);
                callbackRun = true;
                if (evt.type === "error") {
                    evt.preventDefault();
                }
            };
            for (var i = 0; i < objStoreNames.length; i++) {
                var objStore = transaction.objectStore(objStoreNames[i]);
                try {
                    objStore.clear();
                } catch (ex) {
                    abortErr = ex;
                    return;
                }
            }
        },
        get: function skladConnection_get() {
            var isMulti = arguments.length === 2 && typeof arguments[0] === "object" && typeof arguments[1] === "function";
            var objStoreNames = isMulti ? Object.keys(arguments[0]) : [arguments[0]];
            var callback = isMulti ? arguments[1] : arguments[2] || arguments[1];
            var result = {};
            var callbackRun = false;
            var data, abortErr;
            if (isMulti) {
                data = arguments[0];
            } else {
                data = {};
                data[arguments[0]] = typeof arguments[1] === "function" ? null : arguments[1];
            }
            var contains = DOMStringList.prototype.contains.bind(this.database.objectStoreNames);
            if (!objStoreNames.every(contains)) {
                var err = new DOMError("NotFoundError", "Database " + this.database.name + " (version " + this.database.version + ") doesn't contain all needed stores");
                callback(err);
                return;
            }
            objStoreNames.forEach(function (objStoreName) {
                result[objStoreName] = [];
            });
            var transaction = this.database.transaction(objStoreNames, TRANSACTION_READONLY);
            transaction.oncomplete = transaction.onerror = transaction.onabort = function skladConnection_get_onFinish(evt) {
                if (callbackRun) {
                    return;
                }
                var err = abortErr || evt.target.error;
                var isSuccess = !err && evt.type === "complete";
                if (isSuccess) {
                    callback(null, isMulti ? result : result[objStoreNames[0]]);
                } else {
                    callback(err);
                }
                callbackRun = true;
                if (evt.type === "error") {
                    evt.preventDefault();
                }
            };
            for (var objStoreName in data) {
                var objStore = transaction.objectStore(objStoreName);
                var options = data[objStoreName] || {};
                var direction = options.direction || skladAPI.ASC;
                var range = options.range instanceof window.IDBKeyRange ? options.range : null;
                var iterateRequest;
                if (options.index) {
                    if (!objStore.indexNames.contains(options.index)) {
                        abortErr = new DOMError("NotFoundError", "Object store " + objStore.name + " doesn't contain \"" + options.index + "\" index");
                        return;
                    }
                    try {
                        iterateRequest = objStore.index(options.index).openCursor(range, direction);
                    } catch (ex) {
                        abortErr = ex;
                        return;
                    }
                } else {
                    try {
                        iterateRequest = objStore.openCursor(range, direction);
                    } catch (ex) {
                        abortErr = ex;
                        return;
                    }
                }
                (function (objStoreName, options) {
                    var cursorPositionMoved = false;
                    iterateRequest.onsuccess = function (evt) {
                        var cursor = evt.target.result;
                        if (!cursor) {
                            return;
                        }
                        if (options.offset && !cursorPositionMoved) {
                            cursorPositionMoved = true;
                            cursor.advance(options.offset);
                            return;
                        }
                        result[objStoreName].push({
                            key: cursor.key,
                            value: cursor.value
                        });
                        if (options.limit && options.limit === result[objStoreName].length) {
                            return;
                        }
                        cursor.continue();
                    };
                }(objStoreName, options));
            }
        },
        count: function skladConnection_count() {
            var isMulti = arguments.length === 2 && typeof arguments[0] === "object" && typeof arguments[1] === "function";
            var objStoreNames = isMulti ? Object.keys(arguments[0]) : [arguments[0]];
            var callback = isMulti ? arguments[1] : arguments[2] || arguments[1];
            var callbackRun = false;
            var result = {};
            var countRequest, data, abortErr;
            if (isMulti) {
                data = arguments[0];
            } else {
                data = {};
                data[arguments[0]] = typeof arguments[1] === "function" ? null : arguments[1];
            }
            var contains = DOMStringList.prototype.contains.bind(this.database.objectStoreNames);
            if (!objStoreNames.every(contains)) {
                var err = new DOMError("NotFoundError", "Database " + this.database.name + " (version " + this.database.version + ") doesn't contain all needed stores");
                callback(err);
                return;
            }
            var transaction = this.database.transaction(objStoreNames, TRANSACTION_READONLY);
            transaction.oncomplete = transaction.onerror = transaction.onabort = function skladConnection_count_onFinish(evt) {
                if (callbackRun) {
                    return;
                }
                var err = abortErr || evt.target.error;
                var isSuccess = !err && evt.type === "complete";
                if (isSuccess) {
                    callback(null, isMulti ? result : result[objStoreNames[0]]);
                } else {
                    callback(err);
                }
                callbackRun = true;
                if (evt.type === "error") {
                    evt.preventDefault();
                }
            };
            for (var objStoreName in data) {
                var objStore = transaction.objectStore(objStoreName);
                var options = data[objStoreName] || {};
                var range = options.range instanceof window.IDBKeyRange ? options.range : null;
                if (options.index) {
                    if (!objStore.indexNames.contains(options.index)) {
                        abortErr = new DOMError("NotFoundError", "Object store " + objStore.name + " doesn't contain \"" + options.index + "\" index");
                        return;
                    }
                    try {
                        countRequest = objStore.index(options.index).count(range);
                    } catch (ex) {
                        abortErr = ex;
                        return;
                    }
                } else {
                    try {
                        countRequest = objStore.count(range);
                    } catch (ex) {
                        abortErr = ex;
                        return;
                    }
                }
                (function (objStoreName) {
                    countRequest.onsuccess = function (evt) {
                        result[objStoreName] = evt.target.result || 0;
                    };
                }(objStoreName));
            }
        },
        close: function skladConnection_close() {
            this.database.close();
            delete this.database;
        }
    };
    skladAPI.open = function sklad_open(dbName, options, callback) {
        if (!window.indexedDB) {
            var err = new DOMError("NotSupportedError", "Your browser doesn't support IndexedDB");
            callback(err);
            return;
        }
        if (typeof options === "function") {
            callback = options;
            options = {};
        }
        options.version = options.version || 1;
        var openConnRequest = window.indexedDB.open(dbName, options.version);
        var callbackRun = false;
        openConnRequest.onupgradeneeded = function (evt) {
            if (callbackRun) {
                return;
            }
            options.migration = options.migration || {};
            for (var i = evt.oldVersion + 1; i <= evt.newVersion; i++) {
                if (!options.migration[i])
                    continue;
                options.migration[i].call(this, this.result);
            }
        };
        openConnRequest.onerror = function (evt) {
            if (callbackRun) {
                return;
            }
            evt.preventDefault();
            callback(evt.target.error);
            callbackRun = true;
        };
        openConnRequest.onsuccess = function (evt) {
            if (callbackRun) {
                return;
            }
            var database = this.result;
            var oldVersion = parseInt(database.version || 0, 10);
            if (typeof database.setVersion === "function" && oldVersion < options.version) {
                var changeVerRequest = database.setVersion(options.version);
                changeVerRequest.onsuccess = function (evt) {
                    var customUpgradeNeededEvt = new Event("upgradeneeded");
                    customUpgradeNeededEvt.oldVersion = oldVersion;
                    customUpgradeNeededEvt.newVersion = options.version;
                    openConnRequest.onupgradeneeded.call({ result: evt.target.source }, customUpgradeNeededEvt);
                    database.close();
                    skladAPI.open(dbName, options, callback);
                };
                changeVerRequest.onerror = function (evt) {
                    var err = evt.target.errorMessage || evt.target.webkitErrorMessage || evt.target.mozErrorMessage || evt.target.msErrorMessage || evt.target.error.name;
                    callback(err);
                };
                return;
            }
            callback(null, Object.create(skladConnection, {
                database: {
                    configurable: true,
                    enumerable: false,
                    value: database,
                    writable: false
                }
            }));
            callbackRun = true;
        };
        openConnRequest.onblocked = function (evt) {
            if (callbackRun) {
                return;
            }
            evt.preventDefault();
            var err = new DOMError("InvalidStateError", "Database " + dbName + " is blocked");
            callback(err);
            callbackRun = true;
        };
    };
    skladAPI.deleteDatabase = function sklad_deleteDatabase(dbName, callback) {
        if (!window.indexedDB) {
            var err = new DOMError("NotSupportedError", "Your browser doesn't support IndexedDB");
            callback(err);
            return;
        }
        var openDbRequest = window.indexedDB.deleteDatabase(dbName);
        var callbackRun = false;
        openDbRequest.onsuccess = openDbRequest.onerror = openDbRequest.onblocked = function sklad_deleteDatabase_onFinish(evt) {
            if (callbackRun) {
                return;
            }
            var err = evt.type === "blocked" ? new DOMError("InvalidStateError", "Database " + dbName + " is blocked") : evt.target.error;
            callback(err || null);
            callbackRun = true;
            if (evt.type !== "success") {
                evt.preventDefault();
            }
        };
    }, skladAPI.keyValue = function sklad_keyValue(key, value) {
        return Object.create(skladKeyValueContainer, {
            key: {
                value: key,
                configurable: false,
                writable: false
            },
            value: {
                value: value,
                configurable: false,
                writable: false
            }
        });
    };
    return skladAPI;
}));
