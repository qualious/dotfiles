(function () {
    "use strict";
    var runtimeNamespace = chrome.runtime && chrome.runtime.sendMessage ? "runtime" : "extension";
    var lastDate;
    function notifyConsole(level, data) {
        console[level].apply(console, data);
    }
    function passesLogLevel(level, type) {
        var key = "logLevel" + type.charAt(0).toUpperCase() + type.substr(1);
        var currentLevel = Settings.get(key);
        switch (currentLevel) {
        case "error":
            return level === "error";
        case "warn":
            return level === "error" || level === "warn";
        case "info":
            return true;
        }
    }
    function replacePlaceholders(data) {
        var resultStr = data[0];
        var hasPlaceholders;
        var placeholderIndex = 1;
        if (data.length > 1) {
            resultStr = data[0].replace(/%([s|i|d|f|j])/gm, function (total, match) {
                var replacer;
                switch (match) {
                case "s":
                    replacer = (data[placeholderIndex] || "") + "";
                    break;
                case "i":
                case "d":
                    replacer = parseInt(data[placeholderIndex], 10);
                    break;
                case "f":
                    replacer = parseFloat(data[placeholderIndex]);
                    break;
                case "j":
                    replacer = JSON.stringify(data[placeholderIndex] || "", function (key, value) {
                        var clck = "http://clck.yandex.ru/redir/";
                        if (typeof value === "string" && value.indexOf(clck) === 0) {
                            return value.substring(0, clck.length + 5) + "...";
                        } else {
                            return value;
                        }
                    }, 2);
                    break;
                }
                hasPlaceholders = true;
                placeholderIndex += 1;
                return replacer;
            });
        }
        return resultStr;
    }
    function replacePlaceholdersConsole(data) {
        var sourceStr = data[0];
        var regex = /%([s|i|d|f|j])/gm;
        var output = [];
        var matchNum = 1;
        var lastIndex = 0;
        var match, diffLen;
        if (data.length === 1)
            return sourceStr;
        while ((match = regex.exec(sourceStr)) !== null) {
            diffLen = regex.lastIndex - 2 - lastIndex;
            if (diffLen > 0)
                output.push(sourceStr.substring(lastIndex, regex.lastIndex - 2).trim());
            output.push(data[matchNum]);
            lastIndex = regex.lastIndex;
            matchNum += 1;
        }
        if (lastIndex !== sourceStr.length)
            output.push(sourceStr.substring(lastIndex).trim());
        return output;
    }
    function helper(level, args) {
        var formattedDateString = formatDate(new Date(), "%Y-%M-%D %H:%N:%S");
        if (lastDate === formattedDateString) {
            formattedDateString = "";
        } else {
            lastDate = formattedDateString;
        }
        var readableMessage = replacePlaceholders(args);
        var moduleName = this.module || "Core";
        var prefix;
        if (passesLogLevel(level, "console")) {
            if (formattedDateString) {
                notifyConsole("info", [
                    "%c" + formattedDateString,
                    "color: green; font-weight: bold"
                ]);
            }
            prefix = "[ " + moduleName + " ]";
            var consoleMessage = [prefix].concat(replacePlaceholdersConsole(args));
            notifyConsole(level, consoleMessage);
        }
        if (passesLogLevel(level, "file")) {
            if (formattedDateString) {
                LogFileAppender.push(formattedDateString);
            }
            prefix = "[ " + level.toUpperCase() + ": " + moduleName + " ]";
            var fileMessage = [
                prefix,
                readableMessage
            ].join(" ");
            LogFileAppender.push(fileMessage);
        }
        if (this.module && level === "error") {
            Metrika.param(readableMessage, null, { module: this.module });
        }
    }
    function Logger(moduleName) {
        this.module = moduleName;
    }
    Logger.prototype = {
        info: function Logger_info() {
            helper.call(this, "info", arguments);
        },
        error: function Logger_error() {
            helper.call(this, "error", arguments);
        },
        warn: function Logger_warn() {
            helper.call(this, "warn", arguments);
        }
    };
    Logger.__proto__ = Logger.prototype;
    window.Logger = Logger;
}());
