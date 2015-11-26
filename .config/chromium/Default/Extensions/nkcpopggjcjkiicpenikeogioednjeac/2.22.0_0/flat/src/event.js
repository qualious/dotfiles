(function (globalScope) {
    "use strict";
    var Event = function (name) {
        if (typeof name !== "string") {
            throw new Error("Argument error. You should specify event name");
        }
        this.name = name;
        this.listeners = [];
        this.onAddedTrigger = null;
        this.onRemovedTrigger = null;
    };
    Event.prototype = {
        addListener: function (callback) {
            if (!this.hasListener(callback)) {
                this.listeners.push(callback);
                if (typeof this.onAddedTrigger === "function") {
                    this.onAddedTrigger.call(null, callback);
                }
            }
        },
        removeListener: function (callback) {
            var index = this.listeners.indexOf(callback);
            if (index >= 0) {
                this.listeners.splice(index, 1);
                if (typeof this.onRemovedTrigger === "function") {
                    this.onRemovedTrigger.call(null, callback);
                }
            }
        },
        hasListener: function (callback) {
            return this.listeners.indexOf(callback) >= 0;
        },
        hasListeners: function () {
            return this.listeners.length > 0;
        },
        dispatchToListener: function () {
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; ++i) {
                args[i] = arguments[i];
            }
            this.listeners.forEach(function (listener) {
                listener.apply(null, args);
            });
        },
        onAdded: function (callback) {
            this.onAddedTrigger = callback;
        },
        onRemoved: function (callback) {
            this.onRemovedTrigger = callback;
        }
    };
    if (typeof define === "function" && define.amd) {
        define(function () {
            return Event;
        });
    } else {
        globalScope.flat = globalScope.flat || {};
        globalScope.flat.Event = Event;
    }
}(typeof window !== "undefined" ? window : global));
