(function(d, e, c, r) {e = d.documentElement;c = "className";r = "replace";e[c] = e[c][r]("i-ua_js_no", "i-ua_js_yes");if (d.compatMode != "CSS1Compat")e[c] = e[c][r]("i-ua_css_standart", "i-ua_css_quirks")})(document);

// This file was automatically generated from "chromium.lmd.json"
(function (global, main, modules, modules_options, options) {
    var initialized_modules = {},
        global_eval = function (code) {
            return global.Function('return ' + code)();
        },
        
        global_document = global.document,
        local_undefined,
        /**
         * @param {String} moduleName module name or path to file
         * @param {*}      module module content
         *
         * @returns {*}
         */
        register_module = function (moduleName, module) {
            lmd_trigger('lmd-register:before-register', moduleName, module);
            // Predefine in case of recursive require
            var output = {'exports': {}};
            initialized_modules[moduleName] = 1;
            modules[moduleName] = output.exports;

            if (!module) {
                // if undefined - try to pick up module from globals (like jQuery)
                // or load modules from nodejs/worker environment
                module = lmd_trigger('js:request-environment-module', moduleName, module)[1] || global[moduleName];
            } else if (typeof module === 'function') {
                // Ex-Lazy LMD module or unpacked module ("pack": false)
                var module_require = lmd_trigger('lmd-register:decorate-require', moduleName, lmd_require)[1];

                // Make sure that sandboxed modules cant require
                if (modules_options[moduleName] &&
                    modules_options[moduleName].sandbox &&
                    typeof module_require === 'function') {

                    module_require = local_undefined;
                }

                module = module(module_require, output.exports, output) || output.exports;
            }

            module = lmd_trigger('lmd-register:after-register', moduleName, module)[1];
            return modules[moduleName] = module;
        },
        /**
         * List of All lmd Events
         *
         * @important Do not rename it!
         */
        lmd_events = {},
        /**
         * LMD event trigger function
         *
         * @important Do not rename it!
         */
        lmd_trigger = function (event, data, data2, data3) {
            var list = lmd_events[event],
                result;

            if (list) {
                for (var i = 0, c = list.length; i < c; i++) {
                    result = list[i](data, data2, data3) || result;
                    if (result) {
                        // enable decoration
                        data = result[0] || data;
                        data2 = result[1] || data2;
                        data3 = result[2] || data3;
                    }
                }
            }
            return result || [data, data2, data3];
        },
        /**
         * LMD event register function
         *
         * @important Do not rename it!
         */
        lmd_on = function (event, callback) {
            if (!lmd_events[event]) {
                lmd_events[event] = [];
            }
            lmd_events[event].push(callback);
        },
        /**
         * @param {String} moduleName module name or path to file
         *
         * @returns {*}
         */
        lmd_require = function (moduleName) {
            var module = modules[moduleName];

            var replacement = lmd_trigger('*:rewrite-shortcut', moduleName, module);
            if (replacement) {
                moduleName = replacement[0];
                module = replacement[1];
            }

            lmd_trigger('*:before-check', moduleName, module);
            // Already inited - return as is
            if (initialized_modules[moduleName] && module) {
                return module;
            }

            lmd_trigger('*:before-init', moduleName, module);

            // Lazy LMD module not a string
            if (typeof module === 'string' && module.indexOf('(function(') === 0) {
                module = global_eval(module);
            }

            return register_module(moduleName, module);
        },
        output = {'exports': {}},

        /**
         * Sandbox object for plugins
         *
         * @important Do not rename it!
         */
        sandbox = {
            'global': global,
            'modules': modules,
            'modules_options': modules_options,
            'options': options,

            'eval': global_eval,
            'register': register_module,
            'require': lmd_require,
            'initialized': initialized_modules,

            
            'document': global_document,
            
            

            'on': lmd_on,
            'trigger': lmd_trigger,
            'undefined': local_undefined
        };

    for (var moduleName in modules) {
        // reset module init flag in case of overwriting
        initialized_modules[moduleName] = 0;
    }



    main(lmd_trigger('lmd-register:decorate-require', 'main', lmd_require)[1], output.exports, output);
})/*DO NOT ADD ; !*/
(this,(function main(require) {
    require('channels');
    // Инициируем блоки страницы
    require('bem');

    // Инициируем глобальные модули
    require('scroll');

    require('scroll');

    require('transit');
}),{
"lib": (function (require) { /* wrapped by builder */
var Lib = {
    _THUMB_SIZE_BIG: 300,
    _THUMB_SIZE_NORMAL: 250,
    _THUMB_SIZE_SMALL: 200,
    _THUMB_SIZE_TINY: 100,
    _sizeNames: ['BIG', 'NORMAL', 'SMALL', 'TINY'],

    _HISTORY_SUGGEST_MAX_LENGTH: 50,
    _CONTENT_SIZE_SMALL: 1024,

    _calculateLayoutsOfThumbs: function(x, y) {
        var sizes = [];

        var MARGIN = 20;

        [this._THUMB_SIZE_SMALL, this._THUMB_SIZE_NORMAL].forEach(function(thumbSize) {
            sizes.push({
                width: (x * thumbSize) + ((x - 1) * MARGIN),
                height: (y * (thumbSize / 2)) + ((y - 1) * MARGIN),
                thumbSize: thumbSize
            });
        });
        return sizes;
    },

    getThumbSize: function(customLayout) {
        var sizes = this._calculateLayoutsOfThumbs.apply(this, [].slice.call(customLayout || page().getLayout())),
            $win = $(window),
            maxWidth = Math.max($win.width(), this._CONTENT_SIZE_SMALL),
            maxHeight = $win.height() - ($('.b-vb-foot:visible').height() || 0) - $('.b-vb-foot').height(),
            index = 0; //индекс из массива размеров(sizes): 0 - tiny, 1 - small, 2 - normal, 3 - big

        // учитываем скрол
        if ($win.height() == $(document).height())
            maxWidth = maxWidth - 20;

        sizes.some(function(thumbSize, i) {
            if (thumbSize.width < maxWidth && thumbSize.height < maxHeight) {
                index = i;
                return false;
            }

            return true;
        });

        return sizes[index].thumbSize;
    },

    getSuggestedThumbSize: function() {
        return this._THUMB_SIZE_SMALL;
    },

    _sizeRound: function(size) {
        for (var i = 0; i < this._sizeNames.length; ++i) {
            var knownSize = this['_THUMB_SIZE_' + this._sizeNames[i]];
            var delta = Math.abs(size - knownSize);
            if (delta < 10) {
                return knownSize;
            }
        }
        return size;
    },

    getThumbSizeMod: function(size) {
        var modSize;
        switch (this._sizeRound(size)) {
            case this._THUMB_SIZE_BIG:
                modSize = 'big';
                break;
            case this._THUMB_SIZE_NORMAL:
                modSize = 'normal';
                break;
            case this._THUMB_SIZE_SMALL:
                modSize = 'small';
                break;
            case this._THUMB_SIZE_TINY:
                modSize = 'tiny';
                break;
        }
        return modSize;
    },

    //типы тумб
    //0 - пустая
    //1 - нет ни фона ни фавиконки
    //2 - есть фон
    //3 - есть фон + внутренняя страница
    //4 - есть фавиконка
    //5 - есть фавиконка + внутренняя страница
    //6 - есть скриншот
    getThumbType: function  (item) {
        if (!item) {
            return 0;
        } else if (item.screenshot) {
            return 6;
        } else if (!item.backgroundImage && !item.favicon) {
            return 1;
        } else if (item.backgroundImage) {
            return (!item.isIndexPage) ? 3 : 2;
        } else {
            if (!item.isIndexPage) {
                // тумба может оказаться с пустым тайтлом
                if (item.title)
                    return 5;
                else
                    return 4;
            } else {
                return 4;
            }
        }
    },

    getThumbTitleMaxLength: function(size) {
        var len;
        switch (this._sizeRound(size)) {
            case this._THUMB_SIZE_BIG:
                len = 40;
                break;
            case this._THUMB_SIZE_NORMAL:
                len = 30;
                break;
            case this._THUMB_SIZE_SMALL:
                len = 15;
                break;
            case this._THUMB_SIZE_TINY:
                len = 15;
                break;
        }
        return len;
    },

    getThumbSubTitleMaxLength: function(size, type) {
        switch (this._sizeRound(size)) {
            case this._THUMB_SIZE_BIG:
                if (type == 1) return 40;
                return 20;
            case this._THUMB_SIZE_NORMAL:
                if (type == 1) return 27;
                return 15;
            case this._THUMB_SIZE_SMALL:
                if (type == 1) return 10;
                return 7;
            case this._THUMB_SIZE_TINY:
                if (type == 1) return 10;
                return 7;
        }
    },

    getThumbSizeFromMod: function(modSize) {
        switch (modSize) {
            case 'big':
                return this._THUMB_SIZE_BIG;
            case 'normal':
                return this._THUMB_SIZE_NORMAL;
            case 'small':
                return this._THUMB_SIZE_SMALL;
            case 'tiny':
                return this._THUMB_SIZE_TINY;
        }
        throw new ReferenceError('Unknown modsize ' + modSize);
    },

    getThumbUrlMaxLength: function(size) {
        var len;
        switch (this._sizeRound(size)) {
            case this._THUMB_SIZE_BIG:
                len = 20;
                break;
            case this._THUMB_SIZE_NORMAL:
                len = 18;
                break;
            case this._THUMB_SIZE_SMALL:
                len = 7;
                break;
            case this._THUMB_SIZE_TINY:
                len = 7;
                break;
        }
        return len;
    },

    getHistorySuggestMaxLength: function() {
        return this._HISTORY_SUGGEST_MAX_LENGTH;
    },

    _suggestTypesWeight: {
        weather: 6,
        traffic: 5,
        market: 4,
        lingvo: 3,
        maps: 2,
        units_converter: 1
    },

    _parseSuggestData: function(responseText) {
        var parsedData = {},
            res,
            typesWeight = this._suggestTypesWeight,
            infoObject,
            parseJSON = JSON.parse || $.parseJSON;

        try {
            res = parseJSON(responseText);
        } catch(e) {}

        if (!$.isArray(res))
            res = [];

        if (typeof res[0] === 'string')
            parsedData.query = res[0];

        parsedData.suggestionResults = $.isArray(res[1]) ? res[1] : [];

        if ($.isArray(res[2]))
            parsedData.comments = res[2];

        if (res[4] && 'object' == typeof res[4])
            infoObject = parsedData.infoObject = res[4];

        if (infoObject && $.isArray(infoObject['google:suggesttype']))
            parsedData.suggestTypes = infoObject['google:suggesttype'];
        var answers = new Array(parsedData.suggestionResults.length);

        if (infoObject && $.isArray(infoObject['yandex:answer'])) {
            infoObject['yandex:answer'].forEach(function(answer) {
                if (!(answer
                        && (typeof answer == 'object')
                        && (typeof answer.answer == 'object')
                        && (answer.type in typesWeight)
                        && answer.position))
                    return;

                var position = parseInt(answer.position, 10) - 1;
                if (position < 0 || position > parsedData.suggestionResults.length)
                    return;

                var a = answers[position] || null;

                if (!a || (typesWeight[a.type] < typesWeight[answer.type]))
                    answers[position] = answer;
            });
        }

        return $.extend({
            query: '',
            suggestionResults: [],
            comments: [],
            infoObject: {},
            suggestTypes: [],
            answers: answers
        }, parsedData);
    },

  /**
    * Парсинг саджестовой ручки
    * На вход принимает ответ бекенда
    *
    * @link сейчас это http://api.browser.yandex.ru/suggest/get?part=%D0%B4%D0%BB%D0%B8%D0%BD%D0%B0
    * @param {String} raw
    * @returns {Object}
    */
    getAllSuggests: function(responseText) {
        // ошибка
        if (!responseText)
            return null;

        var parsedData = this._parseSuggestData(responseText),
            suggestionResults = parsedData.suggestionResults;

        if (!suggestionResults.length)
            return null;

        var comments = parsedData.comments,
            infoObject = parsedData.infoObject,
            suggestTypes = parsedData.suggestTypes,
            answers = parsedData.answers,
            query = parsedData.query;

        function minifyURL(url) {
            if (!url)
                return '';

            var link = document.createElement('a');

            link.setAttribute('href', url);

            return link.hostname;
        }

        var typesWeight = this._suggestTypesWeight,
            suggestions = [],
            usedTypes = {};

        suggestionResults.forEach(function(res, index) {
            var answerData = answers[index] || null,
                type = answerData && answerData.type || 'text',
                url = answerData && answerData.answer.url || null,
                showingText,
                image,
                showingURL = url;

            if (answerData) {
                if (showingURL) {
                    showingURL = minifyURL(showingURL);
                }

                switch (answerData.type) {
                    case 'units_converter':
                        showingText = suggestionResults[index];
                        break;

                    case 'weather':
                        if (answerData.answer.image) {
                            image = answerData.answer.image;
                        }
                        break;

                    case 'traffic':
                        if (['green', 'red', 'yellow'].indexOf(answerData.answer.semaphore) != -1) {
                            //var url = this.api.Package.resolvePath('/icons/traffic/' + answerData.answer.semaphore + '.png');
                            image = answerData.answer.semaphore;
                        }
                        break;
                }
            }

            var suggest = {
                value: showingText || showingURL || res,
                title: answerData && answerData.answer.title,
                text: answerData && answerData.answer.text,
                image: image,
                type: type
            };

            if (url) {
                suggest.action = {
                    type: 'openurl',
                    value: url
                };
            }

            // навигационная подсказка
            if (index === 0 && suggestTypes[0] === 'NAVIGATION' && type === 'text') {
                suggest.text = comments[0];
                suggest.action = {
                    type: 'openurl',
                    value: suggest.value
                };
            }

            // факты
            if (type === 'text' && comments[index] && !suggest.action) {
                suggest.type = 'fact';
                suggest.text = comments[index];
            }

            if (usedTypes[type]) {
                suggestions.push({type: 'text', value: res});
            } else {
                suggestions.push(suggest);
            }

            if (type !== 'text')
                usedTypes[type] = true;

        }, this);

        return {
            suggestions: suggestions,
            query: query
        };
    },

    /**
     * Навигационная подсказка для саджеста тумб
     *
     * @param responseText ответ бекенда
     * @returns {Object|null} вида
     * {
     *     url: 'http://ya.ru',
     *     title: 'я.ру'
     * }
     */
    getNavigationSuggest: function(responseText) {
        // ошибка
        if (!responseText)
            return null;

        var parsedData = this._parseSuggestData(responseText),
            suggestText = parsedData.suggestionResults[0],
            answer = parsedData.answers[0];

        if (suggestText) {
            if (!/^http:\/\//.test(suggestText)) {
                suggestText = 'http://' + suggestText;
            }
        } else {
            return null;
        }
        if (parsedData.suggestTypes[0] === 'NAVIGATION' && (!answer || answer.type === 'text')) {
            return {
                url: suggestText,
                title: parsedData.comments[0] || ''
            };
        }

        return null;
    },

    highlightText: function(substr) {
        substr = substr.trim();

        return function(text) {
            text = text.replace(new RegExp(substr, 'i'), '<span class="b-page__hl">$&</span>');
            return text;
        };
    },

    markdownLinkToHTML: function(md, newWindow) {
        var linkReg =  /(\[(.+)\]\((.+)\))/g,
            attrs = newWindow ? 'target="_blank"' : '';

        return md.replace(linkReg, '<a ' + attrs + ' href="$3">$2</a>');
    },

    hexToRGB: function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]  : null;
    },

    // http://stackoverflow.com/a/6969486/1687058
    // экранирование символов регулярных выражений
    escapeRegExpSymbols: function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    },

    getUnicodedURL: (function(url) {
        var punycode = require('punycode');

        return punycode ?
            punycode.toUnicode.bind(punycode) :
            function(url) {
                return url;
            };
    })()

};


/* added by builder */
return Lib;
}),
"bemhtml": (function (require) { /* wrapped by builder */
var BH = (function() {
/**
 * dirtyDev указывает на то, что прототип объекта не пустой.
 * @type {Boolean}
 */
var dirtyEnv = false;
for (var i in {}) {
    dirtyEnv = true;
    break;
}
/**
 * BH: BEMJSON -> HTML процессор.
 * @constructor
 */
function BH() {
    /**
     * Используется для идентификации матчеров.
     * Каждому матчеру дается уникальный id для того, чтобы избежать повторного применения
     * матчера к одному и тому же узлу BEMJSON-дерева.
     * @type {Number}
     * @private
     */
    this._lastMatchId = 0;
    /**
     * Плоский массив для хранения матчеров.
     * Каждый элемент — массив с двумя элементами: [{String} выражение, {Function} матчер}]
     * @type {Array}
     * @private
     */
    this._matchers = [];
    /**
     * Флаг, включающий автоматическую систему поиска зацикливаний. Следует использовать в development-режиме,
     * чтобы определять причины зацикливания.
     * @type {Boolean}
     * @private
     */
    this._infiniteLoopDetection = false;

    /**
     * Неймспейс для библиотек. Сюда можно писать различный функционал для дальнейшего использования в матчерах.
     * ```javascript
     * bh.lib.objects = bh.lib.objects || {};
     * bh.lib.objects.inverse = bh.lib.objects.inverse || function(obj) { ... };
     * ```
     * @type {Object}
     */
    this.lib = {};
    this._inited = false;
    /**
     * Опции BH. Задаются через setOptions.
     * @type {Object}
     */
    this._options = {};
    this._optJsAttrName = 'onclick';
    this._optJsAttrIsJs = true;
    this.utils = {
        _lastGenId: 0,
        bh: this,
        /**
         * Расширяет один объект свойствами другого (других).
         * Аналог jQuery.extend.
         * ```javascript
         * obj = ctx.extend(obj, {a: 1});
         * ```
         * @param {Object} target
         * @returns {Object}
         */
        extend: function(target) {
            if (typeof target !== 'object') {
                target = {};
            }
            for (var i = 1, len = arguments.length; i < len; i++) {
                var obj = arguments[i], key;
                if (obj) {
                    if (dirtyEnv) {
                        for (key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                target[key] = obj[key];
                            }
                        }
                    } else {
                        for (key in obj) {
                            target[key] = obj[key];
                        }
                    }
                }
            }
            return target;
        },
        /**
         * Возвращает позицию элемента в рамках родителя.
         * Отсчет производится с 1 (единицы).
         * ```javascript
         * bh.match('list__item', function(ctx) {
         *     ctx.mod('pos', ctx.position());
         * });
         * ```
         * @returns {Number}
         */
        position: function () {
            var node = this.node;
            return node.index === 'content' ? 1 : node.index + 1;
        },
        /**
         * Возвращает true, если текущий bemjson-элемент первый в рамках родительского bemjson-элемента.
         * ```javascript
         * bh.match('list__item', function(ctx) {
         *     if (ctx.isFirst()) {
         *         ctx.mod('first', 'yes');
         *     }
         * });
         * ```
         * @returns {Boolean}
         */
        isFirst: function () {
            var node = this.node;
            return node.index === 'content' || node.index === 0;
        },
        /**
         * Возвращает true, если текущий bemjson-элемент последний в рамках родительского bemjson-элемента.
         * ```javascript
         * bh.match('list__item', function(ctx) {
         *     if (ctx.isLast()) {
         *         ctx.mod('last', 'yes');
         *     }
         * });
         * ```
         * @returns {Boolean}
         */
        isLast: function () {
            var node = this.node;
            return node.index === 'content' || node.index === node.arr.length - 1;
        },
        /**
         * Передает параметр вглубь BEMJSON-дерева. Например:
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.content({
         *         elem: 'control'
         *     }, true);
         *     ctx.tParam('value', ctx.param('value'));
         * });
         * bh.match('input__control', function(ctx) {
         *     ctx.attr('value', ctx.tParam('value'));
         * });
         * ```
         * @param {String} key
         * @param {*} value
         * @returns {*|Ctx}
         */
        tParam: function (key, value) {
            var keyName = '__tp_' + key;
            if (arguments.length === 2) {
                this.node[keyName] = value;
                return this;
            } else {
                var node = this.node;
                while (node) {
                    if (node.hasOwnProperty(keyName)) {
                        return node[keyName];
                    }
                    node = node.parentNode;
                }
                return undefined;
            }
        },
        /**
         * Применяет матчинг для переданного фрагмента BEMJSON.
         * Возвращает результат преобразований.
         * @param {Object|Array} bemjson
         * @returns {Object|Array}
         */
        apply: function (bemjson) {
            var prevCtx = this.ctx,
                prevNode = this.node;
            var res = this.bh.processBemjson(bemjson, prevCtx.block);
            this.ctx = prevCtx;
            this.node = prevNode;
            return res;
        },
        /**
         * Выполняет преобразования данного bemjson-элемента остальными матчерами.
         * Метод был переименован в applyBase.
         * @deprecated
         */
        applyCtx: function (changes) {
            return this.applyBase.apply(this, arguments);
        },
        /**
         * Выполняет преобразования данного bemjson-элемента остальными матчерами. Может понадобиться, например, чтобы добавить элемент в самый конец содержимого, если в базовых шаблонах в конец содержимого добавляются другие элементы.
         * Пример:
         * ```javascript
         * bh.match('header', function(ctx) {
         *    ctx.content([
         *        ctx.content(),
         *        { elem: 'under' }
         *    ], true);
         * });
         * bh.match('header_float_yes', function(ctx) {
         *    ctx.applyBase();
         *    ctx.content([
         *        ctx.content(),
         *        { elem: 'clear' }
         *    ], true);
         * });
         * ```
         * @param {Object} [changes]
         * @returns {Ctx}
         */
        applyBase: function (changes) {
            var prevCtx = this.ctx,
                prevNode = this.node,
                prevValues,
                key;
            if (changes) {
                prevValues = {};
                for (key in changes) {
                    if (dirtyEnv && !changes.hasOwnProperty(key)) continue;
                    prevValues[key] = prevCtx[key];
                    prevCtx[key] = changes[key];
                }
            }
            var res = this.bh.processBemjson(this.ctx, this.ctx.block, true);
            if (res !== prevCtx) {
                this.newCtx = res;
            }
            if (changes) {
                for (key in changes) {
                    if (dirtyEnv && !changes.hasOwnProperty(key)) continue;
                    prevCtx[key] = prevValues[key];
                }
            }
            this.ctx = prevCtx;
            this.node = prevNode;
            return this;
        },
        /**
         * Останавливает выполнение прочих матчеров для данного bemjson-элемента.
         * Пример:
         * ```javascript
         * bh.match('button', function(ctx) {
         *     ctx.tag('button', true);
         * });
         * bh.match('button', function(ctx) {
         *     ctx.tag('span');
         *     ctx.stop();
         * });
         * ```
         * @returns {Ctx}
         */
        stop: function () {
            this.ctx._stop = true;
            return this;
        },
        /**
         * Возвращает уникальный идентификатор. Может использоваться, например,
         * чтобы задать соответствие между `label` и `input`.
         * @returns {String}
         */
        generateId: function () {
            return 'uniq' + (this._lastGenId++);
        },
        /**
         * Возвращает/устанавливает модификатор в зависимости от аргументов.
         * **force** — задать модификатор даже если он был задан ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.mod('native', 'yes');
         * });
         * bh.match('input_islands_yes', function(ctx) {
         *     ctx.mod('native', '', true);
         * });
         * ```
         * @param {String} key
         * @param {String} [value]
         * @param {Boolean} [force]
         * @returns {String|undefined|Ctx}
         */
        mod: function(key, value, force) {
            var mods;
            if (value !== undefined) {
                mods = this.ctx.mods || (this.ctx.mods = {});
                mods[key] = mods[key] === undefined || force ? value : mods[key];
                return this;
            } else {
                mods = this.ctx.mods;
                return mods ? mods[key] : undefined;
            }
        },
        /**
         * Возвращает/устанавливает модификаторы в зависимости от аргументов.
         * **force** — задать модификаторы даже если они были заданы ранее.
         * ```javascript
         * bh.match('paranja', function(ctx) {
         *     ctx.mods({
         *         theme: 'normal',
         *         state: 'close'
         *     });
         * });
         * ```
         * @param {Object} [values]
         * @param {Boolean} [force]
         * @returns {Object|Ctx}
         */
        mods: function(values, force) {
            var mods = this.ctx.mods || (this.ctx.mods = {});
            if (values !== undefined) {
                for (var key in values) {
                    if (dirtyEnv && !values.hasOwnProperty(key)) continue;
                    mods[key] = mods[key] === undefined || force ? values[key] : mods[key];
                }
                return this;
            } else {
                return mods;
            }
        },
        /**
         * Возвращает/устанавливает тег в зависимости от аргументов.
         * **force** — задать значение тега даже если оно было задано ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.tag('input');
         * });
         * ```
         * @param {String} [tagName]
         * @param {Boolean} [force]
         * @returns {String|undefined|Ctx}
         */
        tag: function(tagName, force) {
            if (tagName !== undefined) {
                this.ctx.tag = this.ctx.tag === undefined || force ? tagName : this.ctx.tag;
                return this;
            } else {
                return this.ctx.tag;
            }
        },
        /**
         * Возвращает/устанавливает значение mix в зависимости от аргументов.
         * При установке значения, если force равен true, то переданный микс заменяет прежнее значение,
         * в противном случае миксы складываются.
         * ```javascript
         * bh.match('button_pseudo_yes', function(ctx) {
         *     ctx.mix([{block: 'b-link'}]);
         * });
         * ```
         * @param {Array} [mix]
         * @param {Boolean} [force]
         * @returns {Array|undefined|Ctx}
         */
        mix: function(mix, force) {
            if (mix !== undefined) {
                if (force) {
                    this.ctx.mix = mix;
                } else {
                    if (this.ctx.mix) {
                        this.ctx.mix = this.ctx.mix.concat(mix);
                    } else {
                        this.ctx.mix = mix;
                    }
                }
                return this;
            } else {
                return this.ctx.mix;
            }
        },
        /**
         * Возвращает/устанавливает значение атрибута в зависимости от аргументов.
         * **force** — задать значение атрибута даже если оно было задано ранее.
         * @param {String} key
         * @param {String} [value]
         * @param {Boolean} [force]
         * @returns {String|undefined|Ctx}
         */
        attr: function(key, value, force) {
            var attrs;
            if (value !== undefined) {
                attrs = this.ctx.attrs || (this.ctx.attrs = {});
                attrs[key] = attrs[key] === undefined || force ? value : attrs[key];
                return this;
            } else {
                attrs = this.ctx.attrs;
                return attrs ? attrs[key] : undefined;
            }
        },
        /**
         * Возвращает/устанавливает значение bem в зависимости от аргументов.
         * **force** — задать значение bem даже если оно было задано ранее.
         * Если `bem` имеет значение `true`, то для элемента не будут генерироваться BEM-классы.
         * ```javascript
         * bh.match('meta', function(ctx) {
         *     ctx.bem(false);
         * });
         * ```
         * @param {Boolean} [bem]
         * @param {Boolean} [force]
         * @returns {Boolean|undefined|Ctx}
         */
        bem: function(bem, force) {
            if (bem !== undefined) {
                this.ctx.bem = this.ctx.bem === undefined || force ? bem : this.ctx.bem;
                return this;
            } else {
                return this.ctx.bem;
            }
        },
        /**
         * Возвращает/устанавливает значение `js` в зависимости от аргументов.
         * **force** — задать значение `js` даже если оно было задано ранее.
         * Значение `js` используется для инициализации блоков в браузере через `BEM.DOM.init()`.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.js(true);
         * });
         * ```
         * @param {Boolean|Object} [js]
         * @param {Boolean} [force]
         * @returns {Boolean|Object|Ctx}
         */
        js: function(js, force) {
            if (js !== undefined) {
                this.ctx.js = this.ctx.js === undefined || force ? js : this.ctx.js;
                return this;
            } else {
                return this.ctx.js;
            }
        },
        /**
         * Возвращает/устанавливает значение CSS-коасс в зависимости от аргументов.
         * **force** — задать значение CSS-класса даже если оно было задано ранее.
         * ```javascript
         * bh.match('b-page', function(ctx) {
         *     ctx.cls('i-ua_js_no i-ua_css_standard');
         * });
         * ```
         * @param cls
         * @param force
         * @returns {*}
         */
        cls: function(cls, force) {
            if (cls !== undefined) {
                this.ctx.cls = this.ctx.cls === undefined || force ? cls : this.ctx.cls;
                return this;
            } else {
                return this.ctx.cls;
            }
        },
        /**
         * Возвращает/устанавливает параметр текущего BEMJSON-элемента.
         * **force** — задать значение параметра, даже если оно было задано ранее.
         * Например:
         * ```javascript
         * // Пример входного BEMJSON: { block: 'search', action: '/act' }
         * bh.match('search', function(ctx) {
         *     ctx.attr('action', ctx.param('action') || '/');
         * });
         * ```
         * @param {String} key
         * @param {*} [value]
         * @param {Boolean} [force]
         * @returns {*|Ctx}
         */
        param: function(key, value, force) {
            if (value !== undefined) {
                this.ctx[key] = this.ctx[key] === undefined || force ? value : this.ctx[key];
                return this;
            } else {
                return this.ctx[key];
            }
        },
        /**
         * Возвращает/устанавливает содержимое в зависимости от аргументов.
         * **force** — задать содержимое даже если оно было задано ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.content({ elem: 'control' });
         * });
         * ```
         * @param {String} [value]
         * @param {Boolean} [force]
         * @returns {*|Ctx}
         */
        content: function(value, force) {
            if (arguments.length > 0) {
                this.ctx.content = this.ctx.content === undefined || force ? value : this.ctx.content;
                return this;
            } else {
                return this.ctx.content;
            }
        },
        /**
         * Возвращает текущий фрагмент BEMJSON-дерева.
         * Может использоваться в связке с `return` для враппинга и подобных целей.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     return {
         *         elem: 'wrapper',
         *         content: ctx.json()
         *     };
         * });
         * ```
         * @returns {Object|Array}
         */
        json: function() {
            return this.newCtx || this.ctx;
        }
    };
}

BH.prototype = {

    /**
     * Задает опции шаблонизации.
     *
     * @param {Object} options
     *        {String} options[jsAttrName] Атрибут, в который записывается значение поля `js`. По умолчанию, `onclick`.
     *        {String} options[jsAttrScheme] Схема данных для `js`-значения.
     *                 Форматы:
     *                     `js` — значение по умолчанию. Получаем `return { ... }`.
     *                     `json` — JSON-формат. Получаем `{ ... }`.
     * @returns {BH}
     */
    setOptions: function(options) {
        var i;
        var bhOptions = this._options;
        if (dirtyEnv) {
            for (i in options) {
                if (options.hasOwnProperty(i)) {
                    bhOptions[i] = bhOptions;
                }
            }
        } else {
            for (i in options) {
                bhOptions[i] = bhOptions;
            }
        }
        if (options.jsAttrName) {
            this._optJsAttrName = options.jsAttrName;
        }
        if (options.jsAttrScheme) {
            this._optJsAttrIsJs = options.jsAttrScheme === 'js';
        }
        return this;
    },

    /**
     * Возвращает опции шаблонизации.
     *
     * @returns {Object}
     */
    getOptions: function() {
        return this._options;
    },

    /**
     * Включает/выключает механизм определения зацикливаний.
     *
     * @param {Boolean} enable
     * @returns {BH}
     */
    enableInfiniteLoopDetection: function(enable) {
        this._infiniteLoopDetection = enable;
        return this;
    },

    /**
     * Преобразует BEMJSON в HTML-код.
     * @param {Object|Array|String} bemjson
     */
    apply: function (bemjson) {
        return this.toHtml(this.processBemjson(bemjson));
    },

    /**
     * Объявляет матчер.
     * ```javascript
     * bh.match('b-page', function(ctx) {
     *     ctx.mix([{ block: 'i-ua' }]);
     *     ctx.cls('i-ua_js_no i-ua_css_standard');
     * });
     * bh.match('block_mod_modVal', function(ctx) {
     *     ctx.tag('span');
     * });
     * bh.match('block__elem', function(ctx) {
     *     ctx.attr('disabled', 'disabled');
     * });
     * bh.match('block__elem_elemMod_elemModVal', function(ctx) {
     *     ctx.mod('active', 'yes');
     * });
     * bh.match('block_blockMod_blockModVal__elem', function(ctx) {
     *     ctx.content({
     *         elem: 'wrapper',
     *         content: ctx
     *     };
     * });
     * ```
     * @param {String} expr
     * @param {Function} matcher
     */
    match: function (expr, matcher) {
        matcher.__id = '__func' + (this._lastMatchId++);
        this._matchers.push([expr, matcher]);
        this._fastMatcher = null;
    },

    /**
     * Вспомогательный метод для компиляции матчеров с целью их быстрого дальнейшего исполнения.
     * @returns {String}
     */
    buildMatcher: function () {

        function groupBy(data, key) {
            var res = {};
            for (var i = 0, l = data.length; i < l; i++) {
                var item = data[i];
                var value = item[key] || '__no_value__';
                (res[value] || (res[value] = [])).push(item);
            }
            return res;
        }

        var i, j, l;
        var res = [''];
        var vars = ['bh = this'];
        var allMatchers = this._matchers;
        var decl, expr, matcherInfo;
        var declarations = [], exprBits, blockExprBits;
        for (i = allMatchers.length - 1; i >= 0; i--) {
            matcherInfo = allMatchers[i];
            expr = matcherInfo[0];
            if (expr) {
                vars.push('_m' + i + ' = ms[' + i + '][1]');
                decl = { fn: matcherInfo[1], index: i };
                if (~expr.indexOf('__')) {
                    exprBits = expr.split('__');
                    blockExprBits = exprBits[0].split('_');
                    decl.block = blockExprBits[0];
                    if (blockExprBits.length > 1) {
                        decl.blockMod = blockExprBits[1];
                        decl.blockModVal = blockExprBits[2];
                    }
                    exprBits = exprBits[1].split('_');
                    decl.elem = exprBits[0];
                    if (exprBits.length > 1) {
                        decl.mod = exprBits[1];
                        decl.modVal = exprBits[2];
                    }
                } else {
                    exprBits = expr.split('_');
                    decl.block = exprBits[0];
                    if (exprBits.length > 1) {
                        decl.mod = exprBits[1];
                        decl.modVal = exprBits[2];
                    }
                }
                declarations.push(decl);
            }
        }
        var declByBlock = groupBy(declarations, 'block');
        res.push('var ' + vars.join(', ') + ';');
        res.push('function applyMatchers(ctx, json) {');
        res.push('var subRes, newCtx;');

        res.push('switch (json.block) {');
        for (var blockName in declByBlock) {
            if (dirtyEnv && !declByBlock.hasOwnProperty(blockName)) continue;
            res.push('case "' + escapeStr(blockName) + '":');
            var declsByElem = groupBy(declByBlock[blockName], 'elem');

            res.push('switch (json.elem) {');
            for (var elemName in declsByElem) {
                if (dirtyEnv && !declsByElem.hasOwnProperty(elemName)) continue;

                if (elemName === '__no_value__') {
                    res.push('case undefined:');
                } else {
                    res.push('case "' + escapeStr(elemName) + '":');
                }
                var decls = declsByElem[elemName];
                for (j = 0, l = decls.length; j < l; j++) {
                    decl = decls[j];
                    var fn = decl.fn;
                    var conds = [];
                    conds.push('!json.' + fn.__id);
                    if (decl.mod) {
                        conds.push('json.mods');
                        if (decl.modVal) {
                            conds.push('json.mods["' + escapeStr(decl.mod) + '"] === "' + escapeStr(decl.modVal) + '"');
                        } else {
                            conds.push('json.mods["' + escapeStr(decl.mod) + '"]');
                        }
                    }
                    if (decl.blockMod) {
                        conds.push('json.blockMods');
                        if (decl.blockModVal) {
                            conds.push('json.blockMods["' + escapeStr(decl.blockMod) + '"] === "' + escapeStr(decl.blockModVal) + '"');
                        } else {
                            conds.push('json.blockMods["' + escapeStr(decl.blockMod) + '"]');
                        }
                    }
                    res.push('if (' + conds.join(' && ') + ') {');
                    res.push('json.' + fn.__id + ' = true;');
                    res.push('subRes = _m' + decl.index + '(ctx, json);');
                    res.push('if (subRes) { return subRes; }');
                    res.push('if (newCtx = ctx.newCtx) { ctx.newCtx = null; return newCtx; }');
                    res.push('if (json._stop) return;');
                    res.push('}');
                }
                res.push('return;');
            }
            res.push('}');

            res.push('return;');
        }
        res.push('}');
        res.push('};');
        res.push('return applyMatchers;');
        return res.join('\n');
    },

    /**
     * Раскрывает BEMJSON, превращая его из краткого в полный.
     * @param {Object|Array} bemjson
     * @param {String} [blockName]
     * @param {Boolean} [ignoreContent]
     * @returns {Object|Array}
     */
    processBemjson: function (bemjson, blockName, ignoreContent) {
        if (!this._inited) {
            this._init();
        }
        var resultArr = [bemjson];
        var nodes = [{ json: bemjson, arr: resultArr, index: 0, blockName: blockName, blockMods: bemjson.mods || {} }];
        var node, json, block, blockMods, i, l, p, child, subRes;
        var compiledMatcher = (this._fastMatcher || (this._fastMatcher = Function('ms', this.buildMatcher())(this._matchers)));
        var processContent = !ignoreContent;
        var infiniteLoopDetection = this._infiniteLoopDetection;
        function Ctx() {
            this.ctx = null;
            this.newCtx = null;
        }
        Ctx.prototype = this.utils;
        var ctx = new Ctx();
        while (node = nodes.shift()) {
            json = node.json;
            block = node.blockName;
            blockMods = node.blockMods;
            if (Array.isArray(json)) {
                for (i = 0, l = json.length; i < l; i++) {
                    child = json[i];
                    if (child !== false && child != null && typeof child === 'object') {
                        nodes.push({ json: child, arr: json, index: i, blockName: block, blockMods: blockMods, parentNode: node });
                    }
                }
            } else {
                var content, stopProcess = false;
                if (json.elem) {
                    block = json.block = json.block || block;
                    blockMods = json.blockMods = json.blockMods || blockMods;
                    if (json.elemMods) {
                        json.mods = json.elemMods;
                    }
                } else if (json.block) {
                    block = json.block;
                    blockMods = json.mods || (json.mods = {});
                }

                if (json.block) {

                    if (infiniteLoopDetection) {
                        json.__processCounter = (json.__processCounter || 0) + 1;
                        if (json.__processCounter > 100) {
                            throw new Error('Infinite loop detected at "' + json.block + (json.elem ? '__' + json.elem : '') + '".');
                        }
                    }

                    subRes = null;

                    if (!json._stop) {
                        ctx.node = node;
                        ctx.ctx = json;
                        subRes = compiledMatcher(ctx, json);
                        if (subRes) {
                            json = subRes;
                            node.json = json;
                            node.blockName = block;
                            node.blockMods = blockMods;
                            nodes.push(node);
                            stopProcess = true;
                        }
                    }

                }
                if (!stopProcess) {
                    if (Array.isArray(json)) {
                        node.json = json;
                        node.blockName = block;
                        node.blockMods = blockMods;
                        nodes.push(node);
                    } else {
                        if (processContent && (content = json.content)) {
                            if (Array.isArray(content)) {
                                var flatten;
                                do {
                                    flatten = false;
                                    for (i = 0, l = content.length; i < l; i++) {
                                        if (Array.isArray(content[i])) {
                                            flatten = true;
                                            break;
                                        }
                                    }
                                    if (flatten) {
                                        json.content = content = content.concat.apply([], content);
                                    }
                                } while (flatten);
                                for (i = 0, l = content.length, p = l - 1; i < l; i++) {
                                    child = content[i];
                                    if (child !== false && child != null && typeof child === 'object') {
                                        nodes.push({ json: child, arr: content, index: i, blockName: block, blockMods: blockMods, parentNode: node });
                                    }
                                }
                            } else {
                                nodes.push({ json: content, arr: json, index: 'content', blockName: block, blockMods: blockMods, parentNode: node });
                            }
                        }
                    }
                }
            }
            node.arr[node.index] = json;
        }
        return resultArr[0];
    },

    /**
     * Превращает раскрытый BEMJSON в HTML.
     * @param {Object|Array|String} json
     * @returns {String}
     */
    toHtml: function (json) {
        var res, i, l, item;
        if (json === false || json == null) return '';
        if (typeof json !== 'object') {
            return json;
        } else if (Array.isArray(json)) {
            res = '';
            for (i = 0, l = json.length; i < l; i++) {
                item = json[i];
                if (item !== false && item != null) {
                    res += this.toHtml(item);
                }
            }
            return res;
        } else {
            var cls = json.bem !== false && json.block ? toBEMCssClasses(json, json.block) : '',
                jattr, attrs = '', jsParams, hasMixJsParams = false;

            if (jattr = json.attrs) {
                if (dirtyEnv) {
                    for (i in jattr) {
                        if (jattr.hasOwnProperty(i) && jattr[i] !== null) {
                            attrs += ' ' + i + '="' + escapeAttr(jattr[i]) + '"';
                        }
                    }
                } else {
                    for (i in jattr) {
                        if (jattr[i] !== null) {
                            attrs += ' ' + i + '="' + escapeAttr(jattr[i]) + '"';
                        }
                    }
                }
            }

            if (json.js) {
                (jsParams = {})[json.block + (json.elem ? '__' + json.elem : '')] = json.js === true ? {} : json.js;
            }

            var mixes = json.mix;
            if (mixes && mixes.length) {
                for (i = 0, l = mixes.length; i < l; i++) {
                    var mix = mixes[i];
                    if (mix.js) {
                        (jsParams = jsParams || {})[(mix.block || json.block) + (mix.elem ? '__' + mix.elem : '')] = mix.js === true ? {} : mix.js;
                        hasMixJsParams = true;
                    }
                }
            }

            if (jsParams) {
                if (json.bem !== false) {
                    cls = cls + ' i-bem';
                }
                var jsData = (!hasMixJsParams && json.js === true ?
                    '{&quot;' + json.block + (json.elem ? '__' + json.elem : '') + '&quot;:{}}' :
                    escapeAttr(JSON.stringify(jsParams)));
                attrs += ' ' + (json.jsAttr || this._optJsAttrName) + '="' +
                    (this._optJsAttrIsJs ? 'return ' + jsData + ';' : jsData) + '"';
            }

            if (json.cls) {
                cls = cls ? cls + ' ' + json.cls : json.cls;
            }

            var content, tag = (json.tag || 'div');
            res = '<' + tag + (cls ? ' class="' + escapeAttr(cls) + '"' : '') + (attrs ? attrs : '');

            if (selfCloseHtmlTags[tag]) {
                res += '/>';
            } else {
                res += '>';
                if (content = json.content) {
                    if (Array.isArray(content)) {
                        for (i = 0, l = content.length; i < l; i++) {
                            item = content[i];
                            if (item !== false && item != null) {
                                res += this.toHtml(item);
                            }
                        }
                    } else {
                        res += this.toHtml(content);
                    }
                }
                res += '</' + tag + '>';
            }
            return res;
        }
    },

    /**
     * Инициализация BH.
     */
    _init: function() {
        this._inited = true;
        /*
            Копируем ссылку на BEM.I18N в bh.lib.i18n, если это возможно.
        */
        if (typeof BEM !== 'undefined' && typeof BEM.I18N !== 'undefined') {
            this.lib.i18n = this.lib.i18n || BEM.I18N;
        }
    }
};

var selfCloseHtmlTags = {
    area: 1,
    base: 1,
    br: 1,
    col: 1,
    command: 1,
    embed: 1,
    hr: 1,
    img: 1,
    input: 1,
    keygen: 1,
    link: 1,
    meta: 1,
    param: 1,
    source: 1,
    wbr: 1
};

var escapeAttr = function (attrVal) {
    attrVal += '';
    if (~attrVal.indexOf('&')) {
        attrVal = attrVal.replace(/&/g, '&amp;');
    }
    if (~attrVal.indexOf('"')) {
        attrVal = attrVal.replace(/"/g, '&quot;');
    }
    return attrVal;
};

var escapeStr = function (str) {
    str += '';
    if (~str.indexOf('\\')) {
        str = str.replace(/\\/g, '\\\\');
    }
    if (~str.indexOf('"')) {
        str = str.replace(/"/g, '\\"');
    }
    return str;
};

var toBEMCssClasses = function (json, blockName) {
    var mods, res,
        base = (json.block || blockName) + (json.elem ? '__' + json.elem : ''),
        mix, i, l;
    res = base;
    if (mods = json.mods) {
        if (dirtyEnv) {
            for (i in mods) {
                if (mods.hasOwnProperty(i) && mods[i]) {
                    res += ' ' + base + '_' + i + '_' + mods[i];
                }
            }
        } else {
            for (i in mods) {
                if (mods[i]) {
                    res += ' ' + base + '_' + i + '_' + mods[i];
                }
            }
        }
    }
    if ((mix = json.mix) && (l = mix.length)) {
        for (i = 0; i < l; i++) {
            res += ' ' + toBEMCssClasses(mix[i], blockName);
        }
    }
    return res;
};

return BH;
})();

if (typeof module !== 'undefined') {
    module.exports = BH;
}

var bh = new BH();
/* begin: ../../blocks-desktop/b-page/b-page.bh.js */
bh.setOptions({
    jsAttrName: 'data-bem',
    jsAttrScheme: 'json'
});

/* end: ../../blocks-desktop/b-page/b-page.bh.js */
/* begin: ../../blocks-desktop/b-popupa/b-popupa.bh.js */
bh.match('b-popupa', function(ctx) {

    ctx.js(true, true);

    ctx.mods({
        theme: 'ffffff',
        direction: 'down'
    });

    if (ctx.tParam('_inBDropdowna')) {
        ctx.mix([
            {
                block: 'b-dropdowna',
                elem: 'popup',
                mods: ctx.tParam('_dropdownaColor') && {
                    color: ctx.tParam('_dropdownaColor')
                }
            }
        ]);
        ctx.tParam('_inBDropdowna', false);
        ctx.tParam('_dropdownaColor', false);
    }
});

/* end: ../../blocks-desktop/b-popupa/b-popupa.bh.js */
/* begin: ../../blocks-desktop/b-popupa/__shadow/b-popupa__shadow.bh.js */
bh.match('b-popupa__shadow', function(ctx) {
    ctx.tag('i');
});

/* end: ../../blocks-desktop/b-popupa/__shadow/b-popupa__shadow.bh.js */
/* begin: ../../blocks-desktop/b-popupa/_has-close/b-popupa_has-close_yes.bh.js */
bh.match('b-popupa_has-close_yes', function(ctx) {
    ctx.content([
        ctx.content(),
        {elem: 'close'}
    ], true);
});

/* end: ../../blocks-desktop/b-popupa/_has-close/b-popupa_has-close_yes.bh.js */
/* begin: ../../blocks-desktop/b-popupa/__close/b-popupa__close.bh.js */
bh.match('b-popupa__close', function(ctx) {
    ctx.content({
        block: 'krestik',
        mods: {
            size: 'small',
            color: 'black'
        }
    });
});

/* end: ../../blocks-desktop/b-popupa/__close/b-popupa__close.bh.js */
/* begin: ../../blocks-desktop/b-popupa/_type/b-popupa_type_tooltip.bh.js */
bh.match('b-popupa_type_tooltip', function(ctx) {
    ctx.mod('theme', 'fff1bf');
    ctx.mod('autoclosable', 'no');
});

/* end: ../../blocks-desktop/b-popupa/_type/b-popupa_type_tooltip.bh.js */
/* begin: ../../blocks-desktop/stat-popup/stat-popup.bh.js */
bh.match('stat-popup', function(ctx) {
    ctx.js(true);
});

bh.match('stat-popup__header', function(ctx) {
    ctx.tag('strong');
});

bh.match('stat-popup__logo-link', function(ctx) {
    ctx.attr('href', ctx.param('url'));
    ctx.tag('a');
});

bh.match('stat-popup__logo', function(ctx) {
    ctx.attr('src', ctx.param('url'));
    ctx.tag('img');
});

bh.match('stat-popup__paragraph', function(ctx) {
    ctx.tag('p');
});

bh.match('stat-popup__list', function(ctx) {
    ctx.tag('ul');
});

/* end: ../../blocks-desktop/stat-popup/stat-popup.bh.js */
/* begin: ../../blocks-desktop/b-tumb/b-tumb.bh.js */
bh.match('b-tumb', function(ctx) {
    var isSuggest = ctx.mod('suggest');
    if (isSuggest === 'yes') {
        ctx.tag('div');
    } else {
        ctx.tag('a');
    }
    ctx.js(true);
    ['title', 'target'].forEach(function(attr) {
        ctx.param(attr) && ctx.attr(attr, ctx.param(attr));
    });

    var url = ctx.param('url'),
        bg =  ctx.param('bg'),
        clickAttrs = isSuggest ? {
            draggable: 'false'
        } : {};

    !isSuggest && url && ctx.attr('href', url);
    bg && ctx.attr('style', 'background-color:' + bg);
    ctx.content([
        ctx.content(),
        {
            elem: 'click',
            tag: 'i',
            attrs: clickAttrs
        }
    ], true);
});

/* end: ../../blocks-desktop/b-tumb/b-tumb.bh.js */
/* begin: ../../blocks-desktop/b-tumb/__control-item/b-tumb__control-item.bh.js */
bh.match('b-tumb__control-item', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-tumb/__control-item/b-tumb__control-item.bh.js */
/* begin: ../../blocks-desktop/b-tumb/__control/b-tumb__control.bh.js */
bh.match('b-tumb__control', function(ctx) {
    ctx.tag('span');
    ctx.attr('aria-label', 'thumb-control-items');
});

/* end: ../../blocks-desktop/b-tumb/__control/b-tumb__control.bh.js */
/* begin: ../../blocks-desktop/b-tumb/__desc/b-tumb__desc.bh.js */
bh.match('b-tumb__desc', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-tumb/__desc/b-tumb__desc.bh.js */
/* begin: ../../blocks-desktop/svg/svg.bh.js */
bh.match('svg', function(ctx) {
    ctx.tag('svg');
    ctx.attr('xmlns', 'http://www.w3.org/2000/svg');
    ctx.attr('vesion', '1.1');
    ctx.attr('width', '100%');
    ctx.attr('height', '100%');
});

bh.match('svg__filter', function(ctx) {
    ctx.tag('filter');
    ctx.attr('id', 'blur_ie');
    ctx.content(
        '<feGaussianBlur in="SourceGraphic" stdDeviation="' + ctx.param('value') + '"></feGaussianBlur>'
    );
});

bh.match('svg__image', function(ctx) {
    ctx.tag('image');
    ctx.attr('x', '0');
    ctx.attr('y', '0');
    ctx.attr('width', '100%');
    ctx.attr('height', '100%');
    ctx.attr('xlink:href', ctx.param('url'));
    ctx.attr('style', 'filter:url(#blur_ie)');

});

/* end: ../../blocks-desktop/svg/svg.bh.js */
/* begin: ../../blocks-desktop/b-link/b-link.bh.js */
bh.match('b-link', function(ctx){
    ctx.tag('a');
    ctx.param('url') && ctx.attr('href', ctx.param('url'));
    ['title', 'target'].forEach(function(prop){
        ctx.param(prop) && ctx.attr(prop, ctx.param(prop));
    });
});

/* end: ../../blocks-desktop/b-link/b-link.bh.js */
/* begin: ../../blocks-desktop/button/button.bh.js */
bh.match('button', function(ctx) {
    ctx.tag('button');
    ctx.js(true);
    ctx.attr('role', 'button');
    ctx.content({
        elem: 'text',
        tag: 'span',
        content: ctx.content()
    }, true);
});

/* end: ../../blocks-desktop/button/button.bh.js */
/* begin: ../../blocks-desktop/b-form-button/b-form-button.bh.js */
bh.match('b-form-button', function(ctx) {
    ctx.tag('span');
    ctx.js(true, true);
    ctx.content([
        {elem: 'left'},
        {elem: 'content', content: [
            {
                elem: 'text', content: ctx.content()
            }
        ]},
        {elem: 'input'}
    ], true);
});

/* end: ../../blocks-desktop/b-form-button/b-form-button.bh.js */
/* begin: ../../blocks-desktop/b-form-button/__input/b-form-button__input.bh.js */
bh.match('b-form-button__input', function(ctx) {
    var content = ctx.content() || '';
    if (typeof content === 'string')
        ctx.attr('value', content);
    else
        ctx.attr('value', '');

    ctx.tag('input');
    ctx.attr('hidefocus', 'true');
    ctx.attr('tabindex', '');
    ctx.attr('type', 'button');
});

/* end: ../../blocks-desktop/b-form-button/__input/b-form-button__input.bh.js */
/* begin: ../../blocks-desktop/b-form-button/__left/b-form-button__left.bh.js */
bh.match('b-form-button__left', function(ctx) {
    ctx.tag('i');
});

/* end: ../../blocks-desktop/b-form-button/__left/b-form-button__left.bh.js */
/* begin: ../../blocks-desktop/b-form-button/__content/b-form-button__content.bh.js */
bh.match('b-form-button__content', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-form-button/__content/b-form-button__content.bh.js */
/* begin: ../../blocks-desktop/b-form-button/__text/b-form-button__text.bh.js */
bh.match('b-form-button__text', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-form-button/__text/b-form-button__text.bh.js */
/* begin: ../../blocks-desktop/b-menu-horiz/b-menu-horiz.bh.js */
bh.match('b-menu-horiz', function(ctx) {
    var content = ctx.content();

    if (content) {
        content = [].concat(content).map(function(child) {
            return {elem: 'layout-unit', content: child};
        });

        if (content.length > 0) {
            content[0].mods = {position: 'first'};
        }

        if (content.length > 1) {
            content[content.length - 1].mods = {position: 'last'};
        }
    }

    ctx.content({elem: 'layout', content: content}, true);
});

/* end: ../../blocks-desktop/b-menu-horiz/b-menu-horiz.bh.js */
/* begin: ../../blocks-desktop/b-menu-horiz/__item/b-menu-horiz__item.bh.js */
bh.match('b-menu-horiz__item', function(ctx) {
    ctx.tag('div');
});

/* end: ../../blocks-desktop/b-menu-horiz/__item/b-menu-horiz__item.bh.js */
/* begin: ../../blocks-desktop/b-menu-horiz/__layout/b-menu-horiz__layout.bh.js */
bh.match('b-menu-horiz__layout', function(ctx) {
    ctx.tag('ul', true);
});

/* end: ../../blocks-desktop/b-menu-horiz/__layout/b-menu-horiz__layout.bh.js */
/* begin: ../../blocks-desktop/b-menu-horiz/__layout-unit/b-menu-horiz__layout-unit.bh.js */
bh.match('b-menu-horiz__layout-unit', function(ctx) {
    ctx.tag('li', true);
});

/* end: ../../blocks-desktop/b-menu-horiz/__layout-unit/b-menu-horiz__layout-unit.bh.js */
/* begin: ../../blocks-desktop/b-menu-vert/b-menu-vert.bh.js */
bh.match('b-menu-vert', function(ctx) {
    var content = ctx.content();

    if (content) {
        content = [].concat(content).map(function(child) {
            return {elem: 'layout-unit', content: child};
        });

        content[0].mods = {position: 'first'};
        if (content.length > 1) {
            content[content.length - 1].mods = {position: 'last'};
        }
    }
    ctx.content({elem: 'layout', content: content || null}, true);
});

/* end: ../../blocks-desktop/b-menu-vert/b-menu-vert.bh.js */
/* begin: ../../blocks-desktop/b-head-search/__arr-i/b-head-search__arr-i.bh.js */
bh.match('b-head-search__arr-i', function(ctx) {
    ctx.tag('i', true);
});

/* end: ../../blocks-desktop/b-head-search/__arr-i/b-head-search__arr-i.bh.js */
/* begin: ../../blocks-desktop/app/app.bh.js */
bh.match('app__icon', function(ctx) {
    var url = ctx.param('url');
    if (url) {
        ctx.tag('img');
        ctx.attr('src', ctx.param('url'));
        ctx.attr('alt', ctx.param('alt'));
    }
    ctx.js(true);
    ctx.param('alt') && ctx.attr('title', ctx.param('alt'));
});

bh.match('app__btn', function(ctx) {
    ctx.tag('i');
    ctx.content({
        block: 'krestik',
        mods: {
            size: 'small',
            color: 'black'
        }
    });
});

/* end: ../../blocks-desktop/app/app.bh.js */
/* begin: ../../blocks-desktop/apps/__arrow/apps__arrow.bh.js */
bh.match('apps__arrow', function(ctx) {
    ctx.tag('a');
    ctx.attr('href', '#');
});

/* end: ../../blocks-desktop/apps/__arrow/apps__arrow.bh.js */
/* begin: ../../blocks-desktop/popup/popup.bh.js */
bh.match('popup', function(ctx) {
    var mods = ctx.mods();
    ctx.mods({
        theme: mods.theme || 'ffffff',
        autoclosable: mods.hasOwnProperty('autoclosable') && mods.autoclosable || 'yes',
        animate: mods.hasOwnProperty('animate') && mods.animate || 'yes'
    });

    var zIndex = ctx.param('zIndex');

    if (zIndex) {
        var style = ctx.attr('style') || '';

        ctx.attr('style', style + 'z-index:' + zIndex);
    }

    ctx.content([
        {
            elem: 'under',
            mods: ctx.param('underMods') || {}
        },
        ctx.content(),
        ctx.mod('has-close') && {
            elem: 'close',
            tag: 'i'
        }
    ], true);

});

/* end: ../../blocks-desktop/popup/popup.bh.js */
/* begin: ../../blocks-desktop/b-icon/b-icon.bh.js */
bh.match('b-icon', function(ctx) {
    if (!ctx.param('url')) {
        ctx.tag('div');
    } else {
        ctx.tag('img');
        ctx.attr('src', ctx.param('url'));

        ['alt', 'width', 'height'].forEach(function(attr) {
            var param = ctx.param(attr);

            param && ctx.attr(attr, param);
            if (!param && attr === 'alt') {
                ctx.attr('alt', '');
            }
        });
    }
});

/* end: ../../blocks-desktop/b-icon/b-icon.bh.js */
/* begin: ../../blocks-desktop/b-icon/_type/b-icon_type_dolan.bh.js */
bh.match('b-icon_type_dolan', function(ctx) {
    ctx.tag('div', true);
});

/* end: ../../blocks-desktop/b-icon/_type/b-icon_type_dolan.bh.js */
/* begin: ../../blocks-desktop/krestik/krestik.bh.js */
bh.match('krestik', function(ctx) {
    ctx.tag('i');
});

/* end: ../../blocks-desktop/krestik/krestik.bh.js */
/* begin: ../../blocks-desktop/auth/auth.bh.js */
bh.match('auth', function(ctx) {
    var escapeHTML = BEM.blocks['i-common__string'].escapeHTML;
    var displayName = ctx.param('username') || '';

    ctx.tag('a');
    ctx.attr('aria-expanded', 'false');
    ctx.attr('aria-haspopup', 'true');
    ctx.attr('role', 'button');
    ctx.attr('href', 'https://passport.yandex.ru/passport?mode=passport');
    ctx.content([{
        elem: 'icon',
        userpic: ctx.param('userpic')
    }, {
        elem: 'name',
        content: [
            {
                elem: 'first-letter',
                content: escapeHTML(displayName.charAt(0))
            },
            escapeHTML(displayName.substring(1, displayName.length))
        ]
    }]);
});

bh.match('auth__icon', function(ctx) {
    ctx.tag('span');
    ctx.attr('style', 'background-image: url(' + ctx.param('userpic') + ');');
});

bh.match('auth__name', function(ctx) {
    ctx.tag('span');
});

bh.match('auth__first-letter', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/auth/auth.bh.js */
/* begin: ../../blocks-desktop/menu/menu.bh.js */
bh.match('menu', function(ctx) {
    ctx.content({
        elem: 'content',
        content: ctx.content()
    }, true);
});

bh.match('menu__content', function(ctx) {
    ctx.tag('ul');
});

bh.match('menu__item', function(ctx) {

    ctx.tag('li');
    ctx.content({
        elem: 'item-content',
        content: ctx.content()
    }, true);

});

bh.match('menu__item-content', function(ctx) {
    ctx.content() && ctx.content({
        elem: 'link',
        content: ctx.content()
    }, true);
});

bh.match('menu__link', function(ctx) {
    ctx.tag('a');
});

bh.match('menu__hr', function(ctx) {
    ctx.tag('li');
});

bh.match('menu__tick', function(ctx) {
    ctx.tag('span');
});
bh.match('menu__icon', function(ctx) {
    ctx.tag('img');
    ctx.attr('src', ctx.param('url'));
});
bh.match('menu__name', function(ctx) {
    ctx.tag('span');
});
bh.match('menu__inner', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/menu/menu.bh.js */
/* begin: ../../blocks-desktop/b-restore-tumbs-popup/b-restore-tumbs-popup.bh.js */
bh.match('b-restore-tumbs-popup__text', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-restore-tumbs-popup/b-restore-tumbs-popup.bh.js */
/* begin: ../../blocks-desktop/b-spin/b-spin.bh.js */
bh.match('b-spin', function(ctx) {
    var theme = ctx.mod('theme') || 'grey-27';

    ctx.mods({
        size: ctx.mod('size') || theme && /[\d]+/.exec(theme)[0] || 27,
        theme: theme
    }, true);

    ctx.js(true);

    ctx.content({
        block: 'b-icon',
        mix: [{block: 'b-spin', elem: 'icon'}]
    });

});

/* end: ../../blocks-desktop/b-spin/b-spin.bh.js */
/* begin: ../../blocks-desktop/b-dropdowna/b-dropdowna.bh.js */
bh.match('b-dropdowna', function(ctx) {
    ctx.mods({'is-bem': 'yes'}, true);
    ctx.js(true, true);
});

/* end: ../../blocks-desktop/b-dropdowna/b-dropdowna.bh.js */
/* begin: ../../blocks-desktop/b-popupa/__tail/b-popupa__tail.bh.js */
bh.match('b-popupa__tail', function(ctx) {
    ctx.tag('i');
});

/* end: ../../blocks-desktop/b-popupa/__tail/b-popupa__tail.bh.js */
/* begin: ../../blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.bh.js */
bh.match('b-link_pseudo_yes', function(ctx){
    ctx.tag(ctx.param('url') ? 'a' : 'span');
    ctx.js(true);
    var mods = ctx.mods();
    if (!mods.inner) {
        ctx.content({
            elem: 'inner',
            content: ctx.content()
        }, true);
    }
});

/* end: ../../blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.bh.js */
/* begin: ../../blocks-desktop/b-link/__inner/b-link__inner.bh.js */
bh.match('b-link__inner', function(ctx){
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-link/__inner/b-link__inner.bh.js */
/* begin: ../../blocks-desktop/b-dropdowna/__arr/b-dropdowna__arr.bh.js */
bh.match('b-dropdowna__arr', function(ctx) {
    ctx.tag('span', true);
});

/* end: ../../blocks-desktop/b-dropdowna/__arr/b-dropdowna__arr.bh.js */
/* begin: ../../blocks-desktop/b-popupa/__content/b-popupa__content.bh.js */
bh.match("b-popupa__content", function(ctx) {
    return [
        {
            elem: 'shadow'
        },
        {
            elem: 'wrap',
            content: ctx.json()
        }
    ];
});

/* end: ../../blocks-desktop/b-popupa/__content/b-popupa__content.bh.js */
/* begin: ../../blocks-desktop/b-vb/b-vb.bh.js */
bh.match('b-vb', function(ctx) {
    ctx.tag('table');
    ctx.attr('cellpadding', '0');
    ctx.attr('cellspacing', '0');
});

/* end: ../../blocks-desktop/b-vb/b-vb.bh.js */
/* begin: ../../blocks-desktop/b-vb/__content/b-vb__content.bh.js */
bh.match('b-vb__content', function(ctx) {
    ctx.tag('tr');
    ctx.content([
        {elem: 'td', tag: 'td', content: ctx.content()}
    ], true);
});

/* end: ../../blocks-desktop/b-vb/__content/b-vb__content.bh.js */
/* begin: ../../blocks-desktop/advert/advert.bh.js */
bh.match('advert__skin', function(ctx) {
    ctx.tag('img');
    ctx.attr('src', ctx.param('url'));
});

/* end: ../../blocks-desktop/advert/advert.bh.js */
/* begin: ../../blocks-desktop/b-vb/__head/b-vb__head.bh.js */
bh.match('b-vb__head', function(ctx) {
    ctx.tag('tr');
    ctx.content([
        {elem: 'td', tag: 'td', content: ctx.content()}
    ], true);
});

/* end: ../../blocks-desktop/b-vb/__head/b-vb__head.bh.js */
/* begin: ../../blocks-desktop/b-head-logo/b-head-logo.bh.js */
bh.match('b-head-logo', function(ctx) {
    ctx.attr('role', 'header');
});

/* end: ../../blocks-desktop/b-head-logo/b-head-logo.bh.js */
/* begin: ../../blocks-desktop/b-head-logo/__imgdark/b-head-logo__imgdark.bh.js */
bh.match('b-head-logo__imgdark', function(ctx) {
    ctx.tag('img');
    ctx.attr('src', ctx.param('url'));
    ctx.attr('alt', 'yandex');
    ctx.attr('style', 'border: 0;');
});

/* end: ../../blocks-desktop/b-head-logo/__imgdark/b-head-logo__imgdark.bh.js */
/* begin: ../../blocks-desktop/b-head-logo/__link/b-head-logo__link.bh.js */
bh.match('b-head-logo__link', function(ctx) {
    ctx.tag('a');
    ctx.attr('href', ctx.param('url'));
});

/* end: ../../blocks-desktop/b-head-logo/__link/b-head-logo__link.bh.js */
/* begin: ../../blocks-desktop/b-head-logo/__img/b-head-logo__img.bh.js */
bh.match('b-head-logo__img', function(ctx) {
    ctx.tag('img');
    ctx.attr('src', ctx.param('url'));
    ctx.attr('alt', 'yandex');
    ctx.attr('style', 'border: 0;');
});

/* end: ../../blocks-desktop/b-head-logo/__img/b-head-logo__img.bh.js */
/* begin: ../../blocks-desktop/b-head-search/b-head-search.bh.js */
bh.match('b-head-search', function(ctx) {
    ctx.content([
        {elem: 'wrap', mix: [{elem: 'arrow'}], content: [
            {elem: 'arr', tag: 'i', content: [{elem: 'arr-i'}]},
            ctx.content()
        ]}
    ], true);
});

/* end: ../../blocks-desktop/b-head-search/b-head-search.bh.js */
/* begin: ../../blocks-desktop/b-form-input/b-form-input.bh.js */
bh.match('b-form-input', function(ctx) {
    ctx.tag('span');

    window.uniqId = window.uniqId || 0;

    var placeholder = ctx.param('placeholder'),
        inputId = 'uniq' + (window.uniqId++),
        role = ctx.param('role'),
        aria = ctx.param('aria'),
        inputAttrs = {
            id: inputId,
            name: ctx.param('name') || '',
            value: '',
            autocomplete: 'off'
        };

    if (role) {
        inputAttrs.role = role;
    }

    if (aria) {
        inputAttrs['aria-label'] = aria;
    }

    ctx.content([
        placeholder && {
            elem: 'hint-wrap',
            tag: 'span',
            content: {
                elem: 'hint',
                tag: 'label',
                mods: {
                    visibility: 'visible'
                },
                attrs: {
                    'for': inputId
                },
                content: placeholder
            }
        },
        {
            elem: 'box',
            tag: 'span',
            content: [{
                elem: 'input',
                tag: 'input',
                attrs: inputAttrs
            }]
        }
    ], true);
});

/* end: ../../blocks-desktop/b-form-input/b-form-input.bh.js */
/* begin: ../../blocks-desktop/b-search/b-search.bh.js */
bh.match('b-search', function(ctx) {
    ctx.tag('form');
    ctx.content([
        {elem: 'table', tag: 'table', content: ctx.content()}
    ], true);
});

/* end: ../../blocks-desktop/b-search/b-search.bh.js */
/* begin: ../../blocks-desktop/b-search/__row/b-search__row.bh.js */
bh.match('b-search__row', function(ctx) {
    ctx.tag('tr');
});

/* end: ../../blocks-desktop/b-search/__row/b-search__row.bh.js */
/* begin: ../../blocks-desktop/b-search/__col/b-search__col.bh.js */
bh.match('b-search__col', function(ctx) {
    ctx.tag('td');
});

/* end: ../../blocks-desktop/b-search/__col/b-search__col.bh.js */
/* begin: ../../blocks-desktop/b-tumb/__fav/b-tumb__fav.bh.js */
bh.match('b-tumb__fav', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-tumb/__fav/b-tumb__fav.bh.js */
/* begin: ../../blocks-desktop/b-vb-foot/b-vb-foot.bh.js */
bh.match('b-vb-foot', function(ctx) {
    ctx.content([
        {elem: 'wrapper', content: ctx.content()}
    ], true);
});

/* end: ../../blocks-desktop/b-vb-foot/b-vb-foot.bh.js */
/* begin: ../../blocks-desktop/b-icon/_type/b-icon_type_plus.bh.js */
bh.match('b-icon_type_plus', function(ctx) {
    ctx.tag('i');
});

/* end: ../../blocks-desktop/b-icon/_type/b-icon_type_plus.bh.js */
/* begin: ../../blocks-desktop/b-properties-popup/b-properties-popup.bh.js */
bh.match('b-properties-popup__select-title', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/b-properties-popup/b-properties-popup.bh.js */
/* begin: ../../blocks-desktop/b-form-select/b-form-select.bh.js */
bh.match('b-form-select', function(ctx) {
    ctx.tag('span');
    ctx.js(true);
});

bh.match('b-form-select__select', function(ctx) {
    ctx.tag('select');
});

bh.match('b-form-select__option', function(ctx) {
    ctx.tag('option');
});

/* end: ../../blocks-desktop/b-form-select/b-form-select.bh.js */
/* begin: ../../blocks-desktop/b-form-slider/b-form-slider.bh.js */
bh.match('b-form-slider', function(ctx) {
    ctx.mod('input', 'hidden');
    ctx.content([
        ctx.content(),
        {
            elem: 'body',
            mods: {origin: 'x'},
            content: {elem: 'click'}
        }
    ], true);
});

/* end: ../../blocks-desktop/b-form-slider/b-form-slider.bh.js */
/* begin: ../../blocks-desktop/b-select-theme/b-select-theme.bh.js */
bh.match('b-select-theme', function(ctx) {
    ctx.content([
        {elem: 'arrow', elemMods: {type: 'left'}},
        {elem: 'arrow', elemMods: {type: 'right'}},
        {elem: 'slider', content: {elem: 'box', content: ctx.content()}},
        {elem: 'input'}
    ], true);
});

bh.match('b-select-theme__input', function(ctx) {
    ctx.tag('input');
    ctx.attr('type', 'file');
    ctx.attr('style', 'position:fixed; left: -999px;');
    ctx.attr('accept', 'image/*');
});

/* end: ../../blocks-desktop/b-select-theme/b-select-theme.bh.js */
/* begin: ../../blocks-desktop/b-form-checkbox/b-form-checkbox.bh.js */
bh.match('b-form-checkbox', function(ctx) {
    ctx.tag('span');
    var attrs = ctx.param('checkboxAttrs');
    var checked = ctx.mod('checked');
    if (checked)
        attrs.checked = 'checked';
    ctx.content([
        {
            tag: 'span', elem: 'inner', content: [
                {
                    elem: 'checkbox',
                    attrs: attrs
                },
                {
                    elem: 'bg',
                    tag: 'i',
                    content: [{
                        elem: 'tick', tag: 'img'
                    }]
                }
            ]
        }
    ], true);
    ctx.js(true, true);
});

/* end: ../../blocks-desktop/b-form-checkbox/b-form-checkbox.bh.js */
/* begin: ../../blocks-desktop-chromium/b-form-checkbox/b-form-checkbox.bh.js */
bh.match('b-form-checkbox__tick', function(ctx) {
    ctx.attr('src', '/layout/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif', true);
    ctx.attr('title', '', true);
});

/* end: ../../blocks-desktop-chromium/b-form-checkbox/b-form-checkbox.bh.js */
/* begin: ../../blocks-desktop/b-form-checkbox/__checkbox/b-form-checkbox__checkbox.bh.js */
bh.match('b-form-checkbox__checkbox', function(ctx) {
    ctx.tag('input', true);
    ctx.attr('type', 'checkbox', true);
});

/* end: ../../blocks-desktop/b-form-checkbox/__checkbox/b-form-checkbox__checkbox.bh.js */
/* begin: ../../blocks-desktop/b-form-checkbox/_type/b-form-checkbox_type_islands.bh.js */
bh.match('b-form-checkbox_type_islands', function(ctx) {
    ctx.tag('span');
    var attrs = ctx.param('checkboxAttrs');
    attrs.type = 'checkbox';
    var checked = ctx.mod('checked');
    var boxMods = {};
    if (checked) {
        attrs.checked = 'checked';
        boxMods.checked = 'yes';
        ctx.mod('checked', 'yes', true);
    }
    ctx.content({
            elem: 'box',
            tag: 'span',
            mods: boxMods,
            content: [
                {
                    elem: 'control',
                    tag: 'input',
                    attrs: attrs
                },
                {
                    elem: 'tick',
                    tag: 'i'
                }
            ]
    });
    ctx.stop();
});

/* end: ../../blocks-desktop/b-form-checkbox/_type/b-form-checkbox_type_islands.bh.js */
/* begin: ../../blocks-desktop/b-setting/b-setting.bh.js */
bh.match('b-setting', function(ctx) {
    ctx.tag('form');
    ctx.attr('action', '');
    ctx.attr('method', 'post');
});

/* end: ../../blocks-desktop/b-setting/b-setting.bh.js */
/* begin: ../../blocks-desktop/radio-button/__radio/radio-button__radio.bh.js */
bh.match('radio-button__radio', function(ctx) {
    ctx.tag('label');

    var controlAttrs = ctx.param('controlAttrs') || {},
        modsDisabled = ctx.tParam('modsDisabled'),
        nextForChecked = ctx.tParam('nextForChecked'),
        controlMods = ctx.mods() || {};

    // Если на всём контроле стоит disabled: yes
    if (modsDisabled) {
        controlMods.disabled = 'yes';
    }

    if (nextForChecked && !controlMods.checked) {
        controlMods['next-for-pressed'] = 'yes';
        nextForChecked = false;
    }

    // value блока совпало с value в controlAttrs элемента radio
    if (controlAttrs.value !== undefined && controlAttrs.value == ctx.tParam('value')) {
        controlMods.pressed = 'yes';
        controlMods.checked = 'yes';
        nextForChecked = true;
    }

    // Определяем какую из сторон выбрать
    if (!controlMods.side) {
        controlMods.side = ctx.isFirst() ?
            ctx.isLast() ?
                'both' :
                'left'
            : ctx.isLast() ?
            'right' :
            '';
    }

    controlAttrs.id = controlAttrs.id || ctx.generateId();
    controlAttrs['for'] = controlAttrs.id;

    Object.keys(controlAttrs).forEach(function(attrName) {
       var attrVal = controlAttrs[attrName];
       ctx.attr(attrName, attrVal);
    });

    ctx.mods(controlMods);

    ctx.tParam('nextForChecked', nextForChecked);
    ctx.tParam('controlAttrs', controlAttrs);
    ctx.tParam('controlMods', controlMods);

    ctx.content([
        {elem: 'control'},
        {
            elem: 'text',
            tag: 'span',
            content: ctx.content()
        }
    ], true);

});

/* end: ../../blocks-desktop/radio-button/__radio/radio-button__radio.bh.js */
/* begin: ../../blocks-desktop/radio-button/__control/radio-button__control.bh.js */
bh.match('radio-button__control', function(ctx) {
    ctx.tag('input');

    var controlAttrs = ctx.tParam('controlAttrs'),
        controlMods = ctx.tParam('controlMods');

    if (controlMods.checked) {
        controlAttrs.checked = 'checked';
    }

    if (controlMods.disabled) {
        controlAttrs.disabled = 'disabled';
        controlAttrs.tabindex = '-1';
    }

    controlAttrs.type = 'radio';
    controlAttrs.name = ctx.tParam('name');

    Object.keys(controlAttrs).forEach(function(attrName) {
        var attrVal = controlAttrs[attrName];
        ctx.attr(attrName, attrVal);
    });

});

/* end: ../../blocks-desktop/radio-button/__control/radio-button__control.bh.js */
/* begin: ../../blocks-desktop/radio-button/__text/radio-button__text.bh.js */
bh.match('radio-button__text', function(ctx) {
    ctx.tag('span');
});

/* end: ../../blocks-desktop/radio-button/__text/radio-button__text.bh.js */
/* begin: ../../blocks-desktop/radio-button/radio-button.bh.js */
bh.match('radio-button', function(ctx) {
    ctx.mod('theme', 'normal');

    ctx.tParam('name', ctx.param('name'));
    ctx.tParam('value', ctx.param('value'));
    ctx.tParam('nextForChecked', false);
    ctx.tParam('modsDisabled', ctx.mod('disabled'));

    ctx.tag('span');
    ctx.js(true);
});

/* end: ../../blocks-desktop/radio-button/radio-button.bh.js */
/* begin: ../../blocks-desktop/b-setting/__close/b-setting__close.bh.js */
bh.match('b-setting__close', function(ctx) {
    ctx.content({
        block: 'krestik',
        mods: {
            size: 'normal',
            color: 'black'
        }
    });
});

/* end: ../../blocks-desktop/b-setting/__close/b-setting__close.bh.js */
/* begin: ../../blocks-desktop/b-tumbs-lib/__arrow/b-tumbs-lib__arrow.bh.js */
bh.match('b-tumbs-lib__arrow', function(ctx) {
    ctx.tag('a');
    ctx.attr('href', '#');
});

/* end: ../../blocks-desktop/b-tumbs-lib/__arrow/b-tumbs-lib__arrow.bh.js *//** BEMHTML mimic */var BEMHTML = bh;

/* added by builder */
return BEMHTML;
}),
"bem": (function (require) { /* wrapped by builder */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js */
/**
 * Inheritance plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.3.5
 */

(function($) {

var hasIntrospection = (function(){_}).toString().indexOf('_') > -1,
    emptyBase = function() {},
    objCreate = Object.create || function(ptp) {
        var inheritance = function() {};
        inheritance.prototype = ptp;
        return new inheritance();
    },
    needCheckProps = true,
    testPropObj = { toString : '' };

for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
    testPropObj.hasOwnProperty(i) && (needCheckProps = false);
}

var specProps = needCheckProps? ['toString', 'valueOf'] : null;

function override(base, result, add) {

    var hasSpecProps = false;
    if(needCheckProps) {
        var addList = [];
        $.each(specProps, function() {
            add.hasOwnProperty(this) && (hasSpecProps = true) && addList.push({
                name : this,
                val  : add[this]
            });
        });
        if(hasSpecProps) {
            $.each(add, function(name) {
                addList.push({
                    name : name,
                    val  : this
                });
            });
            add = addList;
        }
    }

    $.each(add, function(name, prop) {
        if(hasSpecProps) {
            name = prop.name;
            prop = prop.val;
        }
        if($.isFunction(prop) &&
           (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {

            var baseMethod = base[name] || function() {};
            result[name] = function() {
                var baseSaved = this.__base;
                this.__base = baseMethod;
                var result = prop.apply(this, arguments);
                this.__base = baseSaved;
                return result;
            };

        }
        else {
            result[name] = prop;
        }

    });

}

$.inherit = function() {

    var args = arguments,
        hasBase = $.isFunction(args[0]),
        base = hasBase? args[0] : emptyBase,
        props = args[hasBase? 1 : 0] || {},
        staticProps = args[hasBase? 2 : 1],
        result = props.__constructor || (hasBase && base.prototype.__constructor)?
            function() {
                return this.__constructor.apply(this, arguments);
            } : function() {};

    if(!hasBase) {
        result.prototype = props;
        result.prototype.__self = result.prototype.constructor = result;
        return $.extend(result, staticProps);
    }

    $.extend(result, base);

    var basePtp = base.prototype,
        resultPtp = result.prototype = objCreate(basePtp);

    resultPtp.__self = resultPtp.constructor = result;

    override(basePtp, resultPtp, props);
    staticProps && override(base, result, staticProps);

    return result;

};

$.inheritSelf = function(base, props, staticProps) {

    var basePtp = base.prototype;

    override(basePtp, basePtp, props);
    staticProps && override(base, base, staticProps);

    return base;

};

})(jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js */
/**
 * Identify plugin
 *
 * @version 1.0.0
 */

(function($) {

var counter = 0,
    expando = '__' + (+new Date),
    get = function() {
        return 'uniq' + ++counter;
    };

/**
 * Makes unique ID
 * @param {Object} [obj] Object that needs to be identified
 * @param {Boolean} [onlyGet=false] Return a unique value only if it had already been assigned before
 * @returns {String} ID
 */
$.identify = function(obj, onlyGet) {

    if(!obj) return get();

    var key = 'uniqueID' in obj? 'uniqueID' : expando; // Use when possible. native uniqueID for elements in IE

    return onlyGet || key in obj?
        obj[key] :
        obj[key] = get();

};

})(jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js */
(function($) {

$.isEmptyObject || ($.isEmptyObject = function(obj) {
        for(var i in obj) return false;
        return true;
    });

})(jQuery);

/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js */
/**
 * Debounce and throttle function's decorator plugin 1.0.6
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.extend({

    debounce : function(fn, timeout, invokeAsap, ctx) {

        if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }

        var timer;

        return function() {

            var args = arguments;
            ctx = ctx || this;

            invokeAsap && !timer && fn.apply(ctx, args);

            clearTimeout(timer);

            timer = setTimeout(function() {
                invokeAsap || fn.apply(ctx, args);
                timer = null;
            }, timeout);

        };

    },

    throttle : function(fn, timeout, ctx) {

        var timer, args, needInvoke;

        return function() {

            args = arguments;
            needInvoke = true;
            ctx = ctx || this;

            timer || (function() {
                if(needInvoke) {
                    fn.apply(ctx, args);
                    needInvoke = false;
                    timer = setTimeout(arguments.callee, timeout);
                }
                else {
                    timer = null;
                }
            })();

        };

    }

});

})(jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js */
/**
 * Observable plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 * @requires $.identify
 * @requires $.inherit
 */

(function($) {

var storageExpando = '__' + (+new Date) + 'storage',
    getFnId = function(fn, ctx) {
        return $.identify(fn) + (ctx? $.identify(ctx) : '');
    },
    Observable = /** @lends $.observable.prototype */{

        /**
         * Builds full event name
         * @protected
         * @param {String} e Event type
         * @returns {String}
         */
        buildEventName : function(e) {

            return e;

        },

        /**
         * Adding event handler
         * @param {String} e Event type
         * @param {Object} [data] Additional data that the handler gets as e.data
         * @param {Function} fn Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        on : function(e, data, fn, ctx, _special) {

            if(typeof e == 'string') {
                if($.isFunction(data)) {
                    ctx = fn;
                    fn = data;
                    data = undefined;
                }

                var id = getFnId(fn, ctx),
                    storage = this[storageExpando] || (this[storageExpando] = {}),
                    eList = e.split(' '),
                    i = 0,
                    eStorage;

                while(e = eList[i++]) {
                    e = this.buildEventName(e);
                    eStorage = storage[e] || (storage[e] = { ids : {}, list : {} });

                    if(!(id in eStorage.ids)) {
                        var list = eStorage.list,
                            item = { fn : fn, data : data, ctx : ctx, special : _special };
                        if(list.last) {
                            list.last.next = item;
                            item.prev = list.last;
                        } else {
                            list.first = item;
                        }

                        eStorage.ids[id] = list.last = item;
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.on(e, fn, data, _special);
                });
            }

            return this;

        },

        onFirst : function(e, data, fn, ctx) {

            return this.on(e, data, fn, ctx, { one : true });

        },

        /**
         * Removing event handler(s)
         * @param {String} [e] Event type
         * @param {Function} [fn] Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        un : function(e, fn, ctx) {

            if(typeof e == 'string' || typeof e == 'undefined') {
                var storage = this[storageExpando];
                if(storage) {
                    if(e) { // if event type was passed
                        var eList = e.split(' '),
                            i = 0,
                            eStorage;
                        while(e = eList[i++]) {
                            e = this.buildEventName(e);
                            if(eStorage = storage[e]) {
                                if(fn) {  // if specific handler was passed
                                    var id = getFnId(fn, ctx),
                                        ids = eStorage.ids;
                                    if(id in ids) {
                                        var list = eStorage.list,
                                            item = ids[id],
                                            prev = item.prev,
                                            next = item.next;

                                        if(prev) {
                                            prev.next = next;
                                        }
                                        else if(item === list.first) {
                                            list.first = next;
                                        }

                                        if(next) {
                                            next.prev = prev;
                                        }
                                        else if(item === list.last) {
                                            list.last = prev;
                                        }

                                        delete ids[id];
                                    }
                                } else {
                                    delete this[storageExpando][e];
                                }
                            }
                        }
                    } else {
                        delete this[storageExpando];
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.un(e, fn, ctx);
                });
            }

            return this;

        },

        /**
         * Fires event handlers
         * @param {String|$.Event} e Event
         * @param {Object} [data] Additional data
         * @returns {$.observable}
         */
        trigger : function(e, data) {

            var _this = this,
                storage = _this[storageExpando],
                rawType;

            typeof e === 'string'?
                e = $.Event(_this.buildEventName(rawType = e)) :
                e.type = _this.buildEventName(rawType = e.type);

            e.target || (e.target = _this);

            if(storage && (storage = storage[e.type])) {
                var item = storage.list.first,
                    ret;
                while(item) {
                    e.data = item.data;
                    ret = item.fn.call(item.ctx || _this, e, data);
                    if(typeof ret !== 'undefined') {
                        e.result = ret;
                        if(ret === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }

                    item.special && item.special.one &&
                        _this.un(rawType, item.fn, item.ctx);
                    item = item.next;
                }
            }

            return this;

        }

    };

$.observable = $.inherit(Observable, Observable);

})(jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-bem/i-bem.js */
/** @requires jquery.inherit */
/** @requires jquery.isEmptyObject */
/** @requires jquery.identify */
/** @requires jquery.observable */

(function($, undefined) {

/**
 * Storage for deferred functions
 * @private
 * @type Array
 */
var afterCurrentEventFns = [],

/**
 * Storage for block declarations (hash by block name)
 * @private
 * @type Object
 */
    blocks = {},

/**
 * Communication channels
 * @static
 * @private
 * @type Object
 */
    channels = {};

/**
 * Builds the name of the handler method for setting a modifier
 * @static
 * @private
 * @param {String} elemName Element name
 * @param {String} modName Modifier name
 * @param {String} modVal Modifier value
 * @returns {String}
 */
function buildModFnName(elemName, modName, modVal) {

    return (elemName? '__elem_' + elemName : '') +
           '__mod' +
           (modName? '_' + modName : '') +
           (modVal? '_' + modVal : '');

}

/**
 * Transforms a hash of modifier handlers to methods
 * @static
 * @private
 * @param {Object} modFns
 * @param {Object} props
 * @param {String} [elemName]
 */
function modFnsToProps(modFns, props, elemName) {

    $.isFunction(modFns)?
        (props[buildModFnName(elemName, '*', '*')] = modFns) :
        $.each(modFns, function(modName, modFn) {
            $.isFunction(modFn)?
                (props[buildModFnName(elemName, modName, '*')] = modFn) :
                $.each(modFn, function(modVal, modFn) {
                    props[buildModFnName(elemName, modName, modVal)] = modFn;
                });
        });

}

function buildCheckMod(modName, modVal) {

    return modVal?
        Array.isArray(modVal)?
            function(block) {
                var i = 0, len = modVal.length;
                while(i < len)
                    if(block.hasMod(modName, modVal[i++]))
                        return true;
                return false;
            } :
            function(block) {
                return block.hasMod(modName, modVal);
            } :
        function(block) {
            return block.hasMod(modName);
        };

}

/** @namespace */
this.BEM = $.inherit($.observable, /** @lends BEM.prototype */ {

    /**
     * @class Base block for creating BEM blocks
     * @constructs
     * @private
     * @param {Object} mods Block modifiers
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(mods, params, initImmediately) {

        var _this = this;

        /**
         * Cache of block modifiers
         * @private
         * @type Object
         */
        _this._modCache = mods || {};

        /**
         * Current modifiers in the stack
         * @private
         * @type Object
         */
        _this._processingMods = {};

        /**
         * The block's parameters, taking into account the defaults
         * @protected
         * @type Object
         */
        _this._params = params; // это нужно для правильной сборки параметров у блока из нескольких нод
        _this.params = null;

        initImmediately !== false?
            _this._init() :
            _this.afterCurrentEvent(function() {
                _this._init();
            });

    },

    /**
     * Initializes the block
     * @private
     */
    _init : function() {

        if(!this._initing && !this.hasMod('js', 'inited')) {
            this._initing = true;

            if(!this.params) {
                this.params = $.extend(this.getDefaultParams(), this._params);
                delete this._params;
            }

            this.setMod('js', 'inited');
            delete this._initing;
            this.hasMod('js', 'inited') && this.trigger('init');
        }

        return this;

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx=this] Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Executes the function in the context of the block, after the "current event"
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx] Context
     */
    afterCurrentEvent : function(fn, ctx) {

        this.__self.afterCurrentEvent(this.changeThis(fn, ctx));

    },

    /**
     * Executes the block's event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .__self.trigger(e, data);

        return this;

    },

    buildEvent : function(e) {

        typeof e == 'string' && (e = $.Event(e));
        e.block = this;

        return e;

    },

    /**
     * Checks whether a block or nested element has a modifier
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {Boolean}
     */
    hasMod : function(elem, modName, modVal) {

        var len = arguments.length,
            invert = false;

        if(len == 1) {
            modVal = '';
            modName = elem;
            elem = undefined;
            invert = true;
        }
        else if(len == 2) {
            if(typeof elem == 'string') {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
            else {
                modVal = '';
                invert = true;
            }
        }

        var res = this.getMod(elem, modName) === modVal;
        return invert? !res : res;

    },

    /**
     * Returns the value of the modifier of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {String} Modifier value
     */
    getMod : function(elem, modName) {

        var type = typeof elem;
        if(type === 'string' || type === 'undefined') { // elem either omitted or undefined
            modName = elem || modName;
            var modCache = this._modCache;
            return modName in modCache?
                modCache[modName] :
                modCache[modName] = this._extractModVal(modName);
        }

        return this._getElemMod(modName, elem);

    },

    /**
     * Returns the value of the modifier of the nested element
     * @private
     * @param {String} modName Modifier name
     * @param {Object} elem Nested element
     * @param {Object} [elem] Nested element name
     * @returns {String} Modifier value
     */
    _getElemMod : function(modName, elem, elemName) {

        return this._extractModVal(modName, elem, elemName);

    },

    /**
     * Returns values of modifiers of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} [modName1, ..., modNameN] Modifier names
     * @returns {Object} Hash of modifier values
     */
    getMods : function(elem) {

        var hasElem = elem && typeof elem != 'string',
            _this = this,
            modNames = [].slice.call(arguments, hasElem? 1 : 0),
            res = _this._extractMods(modNames, hasElem? elem : undefined);

        if(!hasElem) { // caching
            modNames.length?
                modNames.forEach(function(name) {
                    _this._modCache[name] = res[name];
                }):
                _this._modCache = res;
        }

        return res;

    },

    /**
     * Sets the modifier for a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(typeof modVal == 'undefined') {
            modVal = modName;
            modName = elem;
            elem = undefined;
        }

        var _this = this;

        if(!elem || elem[0]) {

            var modId = (elem && elem[0]? $.identify(elem[0]) : '') + '_' + modName;

            if(this._processingMods[modId]) return _this;

            var elemName,
                curModVal = elem?
                    _this._getElemMod(modName, elem, elemName = _this.__self._extractElemNameFrom(elem)) :
                    _this.getMod(modName);

            if(curModVal === modVal) return _this;

            this._processingMods[modId] = true;

            var needSetMod = true,
                modFnParams = [modName, modVal, curModVal];

            elem && modFnParams.unshift(elem);

            [['*', '*'], [modName, '*'], [modName, modVal]].forEach(function(mod) {
                needSetMod = _this._callModFn(elemName, mod[0], mod[1], modFnParams) !== false && needSetMod;
            });

            !elem && needSetMod && (_this._modCache[modName] = modVal);

            needSetMod && _this._afterSetMod(modName, modVal, curModVal, elem, elemName);

            delete this._processingMods[modId];
        }

        return _this;

    },

    /**
     * Function after successfully changing the modifier of the block/nested element
     * @protected
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {Object} [elem] Nested element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {},

    /**
     * Sets a modifier for a block/nested element, depending on conditions.
     * If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
     * If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal1 First modifier value
     * @param {String} [modVal2] Second modifier value
     * @param {Boolean} [condition] Condition
     * @returns {BEM}
     */
    toggleMod : function(elem, modName, modVal1, modVal2, condition) {

        if(typeof elem == 'string') { // if this is a block
            condition = modVal2;
            modVal2 = modVal1;
            modVal1 = modName;
            modName = elem;
            elem = undefined;
        }
        if(typeof modVal2 == 'undefined') {
            modVal2 = '';
        } else if(typeof modVal2 == 'boolean') {
            condition = modVal2;
            modVal2 = '';
        }

        var modVal = this.getMod(elem, modName);
        (modVal == modVal1 || modVal == modVal2) &&
            this.setMod(
                elem,
                modName,
                typeof condition === 'boolean'?
                    (condition? modVal1 : modVal2) :
                    this.hasMod(elem, modName, modVal1)? modVal2 : modVal1);

        return this;

    },

    /**
     * Removes a modifier from a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {BEM}
     */
    delMod : function(elem, modName) {

        if(!modName) {
            modName = elem;
            elem = undefined;
        }

        return this.setMod(elem, modName, '');

    },

    /**
     * Executes handlers for setting modifiers
     * @private
     * @param {String} elemName Element name
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {Array} modFnParams Handler parameters
     */
    _callModFn : function(elemName, modName, modVal, modFnParams) {

        var modFnName = buildModFnName(elemName, modName, modVal);
        return this[modFnName]?
           this[modFnName].apply(this, modFnParams) :
           undefined;

    },

    /**
     * Retrieves the value of the modifier
     * @private
     * @param {String} modName Modifier name
     * @param {Object} [elem] Element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem) {

        return '';

    },

    /**
     * Retrieves name/value for a list of modifiers
     * @private
     * @param {Array} modNames Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by name
     */
    _extractMods : function(modNames, elem) {

        return {};

    },

    /**
     * Returns a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        return this.__self.channel(id, drop);

    },

    /**
     * Returns a block's default parameters
     * @returns {Object}
     */
    getDefaultParams : function() {

        return {};

    },

    /**
     * Helper for cleaning up block properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var args = [].slice.call(arguments);
        typeof obj == 'string' && args.unshift(this);
        this.__self.del.apply(this.__self, args);
        return this;

	},

    /**
     * Deletes a block
     */
    destruct : function() {}

}, /** @lends BEM */{

    _name : 'i-bem',

    /**
     * Storage for block declarations (hash by block name)
     * @static
     * @protected
     * @type Object
     */
    blocks : blocks,

    /**
     * Declares blocks and creates a block class
     * @static
     * @protected
     * @param {String|Object} decl Block name (simple syntax) or description
     * @param {String} decl.block|decl.name Block name
     * @param {String} [decl.baseBlock] Name of the parent block
     * @param {String} [decl.modName] Modifier name
     * @param {String} [decl.modVal] Modifier value
     * @param {Object} [props] Methods
     * @param {Object} [staticProps] Static methods
     */
    decl : function(decl, props, staticProps) {

        if(typeof decl == 'string')
            decl = { block : decl };
        else if(decl.name) {
            decl.block = decl.name;
        }

        if(decl.baseBlock && !blocks[decl.baseBlock])
            throw('baseBlock "' + decl.baseBlock + '" for "' + decl.block + '" is undefined');

        props || (props = {});

        if(props.onSetMod) {
            modFnsToProps(props.onSetMod, props);
            delete props.onSetMod;
        }

        if(props.onElemSetMod) {
            $.each(props.onElemSetMod, function(elemName, modFns) {
                modFnsToProps(modFns, props, elemName);
            });
            delete props.onElemSetMod;
        }

        var baseBlock = blocks[decl.baseBlock || decl.block] || this;

        if(decl.modName) {
            var checkMod = buildCheckMod(decl.modName, decl.modVal);
            $.each(props, function(name, prop) {
                $.isFunction(prop) &&
                    (props[name] = function() {
                        var method;
                        if(checkMod(this)) {
                            method = prop;
                        } else {
                            var baseMethod = baseBlock.prototype[name];
                            baseMethod && baseMethod !== props[name] &&
                                (method = this.__base);
                        }
                        return method?
                            method.apply(this, arguments) :
                            undefined;
                    });
            });
        }

        if(staticProps && typeof staticProps.live === 'boolean') {
            var live = staticProps.live;
            staticProps.live = function() {
                return live;
            };
        }

        var block;
        decl.block == baseBlock._name?
            // makes a new "live" if the old one was already executed
            (block = $.inheritSelf(baseBlock, props, staticProps))._processLive(true) :
            (block = blocks[decl.block] = $.inherit(baseBlock, props, staticProps))._name = decl.block;

        return block;

    },

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        return false;

    },

    /**
     * Factory method for creating an instance of the block named
     * @static
     * @param {String|Object} block Block name or description
     * @param {Object} [params] Block parameters
     * @returns {BEM}
     */
    create : function(block, params) {

        typeof block == 'string' && (block = { block : block });

        return new blocks[block.block](block.mods, params);

    },

    /**
     * Returns the name of the current block
     * @static
     * @protected
     * @returns {String}
     */
    getName : function() {

        return this._name;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {Object} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {},

    /**
     * Adds a function to the queue for executing after the "current event"
     * @static
     * @protected
     * @param {Function} fn
     * @param {Object} ctx
     */
    afterCurrentEvent : function(fn, ctx) {

        afterCurrentEventFns.push({ fn : fn, ctx : ctx }) == 1 &&
            setTimeout(this._runAfterCurrentEventFns, 0);

    },

    /**
     * Executes the queue
     * @private
     */
    _runAfterCurrentEventFns : function() {

        var fnsLen = afterCurrentEventFns.length;
        if(fnsLen) {
            var fnObj,
                fnsCopy = afterCurrentEventFns.splice(0, fnsLen);

            while(fnObj = fnsCopy.shift()) fnObj.fn.call(fnObj.ctx || this);
        }

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} ctx Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Helper for cleaning out properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var delInThis = typeof obj == 'string',
            i = delInThis? 0 : 1,
            len = arguments.length;
        delInThis && (obj = this);

        while(i < len) delete obj[arguments[i++]];

        return this;

	},

    /**
     * Returns/destroys a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        if(typeof id == 'boolean') {
            drop = id;
            id = undefined;
        }

        id || (id = 'default');

        if(drop) {
            if(channels[id]) {
                channels[id].un();
                delete channels[id];
            }
            return;
        }

        return channels[id] || (channels[id] = new $.observable());

    }

});

})(jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-bem/i-bem.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js */
(function() {

/**
 * Возвращает массив свойств объекта
 * @param {Object} obj объект
 * @returns {Array}
 */
Object.keys || (Object.keys = function(obj) {
    var res = [];

    for(var i in obj) obj.hasOwnProperty(i) &&
        res.push(i);

    return res;
});

})();
/* end: ../../libs/lego/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js */
(function() {

var ptp = Array.prototype,
    toStr = Object.prototype.toString,
    methods = {

        /**
         * Finds the index of an element in an array
         * @param {Object} item
         * @param {Number} [fromIdx] Starting from index (length - 1 - fromIdx, if fromIdx < 0)
         * @returns {Number} Element index or -1, if not found
         */
        indexOf : function(item, fromIdx) {

            fromIdx = +(fromIdx || 0);

            var t = this, len = t.length;

            if(len > 0 && fromIdx < len) {
                fromIdx = fromIdx < 0? Math.ceil(fromIdx) : Math.floor(fromIdx);
                fromIdx < -len && (fromIdx = 0);
                fromIdx < 0 && (fromIdx = fromIdx + len);

                while(fromIdx < len) {
                    if(fromIdx in t && t[fromIdx] === item)
                        return fromIdx;
                    ++fromIdx;
                }
            }

            return -1;

        },

        /**
         * Calls the callback for each element
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         */
        forEach : function(callback, ctx) {

            var i = -1, t = this, len = t.length;
            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

        },

        /**
         * Creates array B from array A so that B[i] = callback(A[i])
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         * @returns {Array}
         */
        map : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = new Array(len);

            while(++i < len) i in t &&
                (res[i] = ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

            return res;

        },

        /**
         * Creates an array containing only the elements from the source array that the callback returns true for. 
         * @param {Function} callback Called for each element
         * @param {Object} [ctx] Callback context
         * @returns {Array}
         */
        filter : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = [];

            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)) && res.push(t[i]);

            return res;

        },

        /**
         * Wraps the array using an accumulator
         * @param {Function} callback Called for each element
         * @param {Object} [initialVal] Initial value of the accumulator
         * @returns {Object} Accumulator
         */
        reduce : function(callback, initialVal) {

            var i = -1, t = this, len = t.length,
                res;

            if(arguments.length < 2) {
                while(++i < len) {
                    if(i in t) {
                        res = t[i];
                        break;
                    }
                }
            }
            else {
                res = initialVal;
            }

            while(++i < len) i in t &&
                (res = callback(res, t[i], i, t));

            return res;

        },

        /**
         * Checks whether at least one element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Callback context
         * @returns {Boolean}
         */
        some : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && (ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return true;

            return false;

        },

        /**
         * Checks whether every element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Context of the callback call
         * @returns {Boolean}
         */
        every : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && !(ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return false;

            return true;

        }

    };

for(var name in methods)
    ptp[name] || (ptp[name] = methods[name]);

Array.isArray || (Array.isArray = function(obj) {
    return toStr.call(obj) === '[object Array]';
});

})();
/* end: ../../libs/lego/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js */
(function() {

var slice = Array.prototype.slice;

Function.prototype.bind || (Function.prototype.bind = function(ctx) {

    var fn = this,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(ctx, args.concat(slice.call(arguments)));
    }

});

})();
/* end: ../../libs/lego/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js */
/** @fileOverview Module for internal BEM helpers */
/** @requires BEM */

(function(BEM, $, undefined) {

/**
 * Separator for modifiers and their values
 * @const
 * @type String
 */
var MOD_DELIM = '_',

/**
 * Separator between names of a block and a nested element
 * @const
 * @type String
 */
    ELEM_DELIM = '__',

/**
 * Pattern for acceptable element and modifier names
 * @const
 * @type String
 */
    NAME_PATTERN = '[a-zA-Z0-9-]+';

function buildModPostfix(modName, modVal, buffer) {

    buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);

}

function buildBlockClass(name, modName, modVal, buffer) {

    buffer.push(name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

function buildElemClass(block, name, modName, modVal, buffer) {

    buildBlockClass(block, undefined, undefined, buffer);
    buffer.push(ELEM_DELIM, name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

BEM.INTERNAL = {

    NAME_PATTERN : NAME_PATTERN,

    MOD_DELIM : MOD_DELIM,
    ELEM_DELIM : ELEM_DELIM,

    buildModPostfix : function(modName, modVal, buffer) {

        var res = buffer || [];
        buildModPostfix(modName, modVal, res);
        return buffer? res : res.join('');

    },

    /**
     * Builds the class of a block or element with a modifier
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClass : function(block, elem, modName, modVal, buffer) {

        var typeOf = typeof modName;
        if(typeOf == 'string') {
            if(typeof modVal != 'string' && typeof modVal != 'number') {
                buffer = modVal;
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
        } else if(typeOf != 'undefined') {
            buffer = modName;
            modName = undefined;
        } else if(elem && typeof elem != 'string') {
            buffer = elem;
            elem = undefined;
        }

        if(!(elem || modName || buffer)) { // оптимизация для самого простого случая
            return block;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, modName, modVal, res) :
            buildBlockClass(block, modName, modVal, res);

        return buffer? res : res.join('');

    },

    /**
     * Builds full classes for a buffer or element with modifiers
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifiers
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClasses : function(block, elem, mods, buffer) {

        if(elem && typeof elem != 'string') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, undefined, undefined, res) :
            buildBlockClass(block, undefined, undefined, res);

        mods && $.each(mods, function(modName, modVal) {
            if(modVal) {
                res.push(' ');
                elem?
                    buildElemClass(block, elem, modName, modVal, res) :
                    buildBlockClass(block, modName, modVal, res);
            }
        });

        return buffer? res : res.join('');

        /*var typeOf = typeof elem;
        if(typeOf != 'string' && typeOf != 'undefined') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }
        if($.isArray(mods)) {
            buffer = mods;
            mods = undefined;
        }

        var res = buffer || [];
        buildClasses(block, elem, mods, res);
        return buffer? res : res.join('');*/

    }

}

})(BEM, jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js */
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__cookie/i-jquery__cookie.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js */
/**
 * Plugin for decoding URI-escaped strings in CP1251 encoding
 *
 * Copyright (c) 2011-2012 Roman Rozhdestvenskiy (sbmaxx@gmail.com)
 */
(function($) {

// Equivalency table for cp1251 and utf8.
var map = { "%D0": "%D0%A0","%C0": "%D0%90","%C1": "%D0%91","%C2": "%D0%92","%C3": "%D0%93","%C4": "%D0%94","%C5": "%D0%95","%A8": "%D0%81","%C6": "%D0%96","%C7": "%D0%97","%C8": "%D0%98","%C9": "%D0%99","%CA": "%D0%9A","%CB": "%D0%9B","%CC": "%D0%9C","%CD": "%D0%9D","%CE": "%D0%9E","%CF": "%D0%9F","%D1": "%D0%A1","%D2": "%D0%A2","%D3": "%D0%A3","%D4": "%D0%A4","%D5": "%D0%A5","%D6": "%D0%A6","%D7": "%D0%A7","%D8": "%D0%A8","%D9": "%D0%A9","%DA": "%D0%AA","%DB": "%D0%AB","%DC": "%D0%AC","%DD": "%D0%AD","%DE": "%D0%AE","%DF": "%D0%AF","%E0": "%D0%B0","%E1": "%D0%B1","%E2": "%D0%B2","%E3": "%D0%B3","%E4": "%D0%B4","%E5": "%D0%B5","%B8": "%D1%91","%E6": "%D0%B6","%E7": "%D0%B7","%E8": "%D0%B8","%E9": "%D0%B9","%EA": "%D0%BA","%EB": "%D0%BB","%EC": "%D0%BC","%ED": "%D0%BD","%EE": "%D0%BE","%EF": "%D0%BF","%F0": "%D1%80","%F1": "%D1%81","%F2": "%D1%82","%F3": "%D1%83","%F4": "%D1%84","%F5": "%D1%85","%F6": "%D1%86","%F7": "%D1%87","%F8": "%D1%88","%F9": "%D1%89","%FA": "%D1%8A","%FB": "%D1%8B","%FC": "%D1%8C","%FD": "%D1%8D","%FE": "%D1%8E","%FF": "%D1%8F" };

function convert(str) {
    // Symbol code in cp1251 (hex) : symbol code in utf8)
    return str.replace(/%.{2}/g, function($0) { return map[$0] || $0; });
}

function decode(func, str) {

    var decoded = '';
    // try/catch block for getting the encoding of the source string
    // error is thrown if a non-UTF8 string is input
    // if the string was not decoded, it is returned without changes
    try {
        decoded = func(str);
    } catch (e) {
        try {
            decoded = func(convert(str));
        } catch (e) {
            decoded = str;
        }
    }
    return decoded;

}

$.extend({

    decodeURI : function(str) {
        return decode(decodeURI, str);
    },

    decodeURIComponent : function(str) {
        return decode(decodeURIComponent, str);
    }

});

})(jQuery);

/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__decodeuri/i-jquery__decodeuri.js */
/* begin: ../../libs/lego/blocks-desktop/i-bem/html/i-bem__html.js */
/** @requires BEM */
/** @requires BEM.INTERNAL */
/** @requires jquery.stringify */

(function(BEM, $, undefined) {

var INTERNAL = BEM.INTERNAL,
    ELEM_DELIM = INTERNAL.ELEM_DELIM,
    SHORT_TAGS = { // хэш для быстрого определения, является ли тэг коротким
        area : 1, base : 1, br : 1, col : 1, command : 1, embed : 1, hr : 1, img : 1,
        input : 1, keygen : 1, link : 1, meta : 1, param : 1, source : 1, wbr : 1 },
    buildClass = INTERNAL.buildClass,
    buildClasses = INTERNAL.buildClasses,
    decls = {};

function addPropToDecl(decl, name, fn) {

    (decl[name] || (decl[name] = [])).unshift(fn);

}

function buildDeclFn(fn, desc) {

    return desc.modName?
        function(ctx) {
            (ctx._curBlock.mods || {})[desc.modName] === desc.modVal && fn(ctx);
        } :
        fn;

}

function join(a, b) {

    var isArrayB = $.isArray(b),
        res;

    $.isArray(a)?
        isArrayB? res = a.concat(b) : (res = a).push(b) :
        isArrayB? (res = b).unshift(a) : res = [a, b];

    return res;

}

var attrEscapes = { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' },
    attrEscapesRE = /["&<>]/g;
function escapeAttr(attrVal) {
    return attrVal.replace(attrEscapesRE, function(needToEscape) {
        return attrEscapes[needToEscape];
    });
}

/**
 * @namespace
 * @name BEM.HTML
 */
BEM.HTML = {

    /**
     * Декларация
     * @protected
     * @param {String|Object} decl имя блока (простой синтаксис) или описание
     * @param {String} decl.block имя блока
     * @param {String} [decl.modName] имя модификатора
     * @param {String} [decl.modVal] значение модификатора
     * @param {Object} props свойства
     */
    decl : function(desc, props) {

        typeof desc == 'string' && (desc = { block : desc });
        desc.name && (desc.block = desc.name);

        var decl = decls[desc.block] || (decls[desc.block] = {});

        props.onBlock && addPropToDecl(decl, '_block', buildDeclFn(props.onBlock, desc));

        if(props.onElem) {
            $.isFunction(props.onElem)?
                addPropToDecl(decl, '_elem', buildDeclFn(props.onElem, desc)) :
                $.each(props.onElem, function(elem, fn) {
                    addPropToDecl(decl, '_elem' + (elem === '*'? '' : ELEM_DELIM + elem), buildDeclFn(fn, desc));
                });
        }

    },

    /**
     * Строит HTML-представление
     * @param {Object|Array} params JSON-описание
     */
    build : function(params) {

        var builder = new this.Ctx(params);
        builder._buildAll();
        return builder._flush();

    },

    Ctx : $.inherit(/** @lends BEM.HTML.Ctx.prototype */{
        /**
         * @class Внутренний класс контекста билдера HTML-представления
         * @constructs
         * @param {Object|Array|String} params параметры
         */
        __constructor : function(params) {

            /**
             * буфер
             * @private
             * @type Array
             */
            this._buffer = [];

            /**
             * текущие параметры
             * @private
             * @type Object
             */
            this._params = params;

            /**
             * туннелированные параметры
             * @private
             * @type Object
             */
            this._tParams = null;

            this._tParamsChanges = null;

            /**
             * имя текущего блока
             * @private
             * @type String
             */
            this._curBlock = undefined;

        },

        /**
         * Возвращает позицию контекста
         * @returns {Number}
         */
        pos : function() {

            return this._params._pos;

        },

        /**
         * Проверяет, является ли текущий контекст первым
         * @returns {Boolean}
         */
        isFirst : function() {

            return this._params._pos === 1;

        },

        /**
         * Проверяет, является ли текущий контекст последним
         * @returns {Boolean}
         */
        isLast : function() {

            var params = this._params;
            return params._pos === params._siblingsCount;

        },

        /**
         * Возвращает/устанавливает параметры контекста
         * @param {Object} [params] параметры
         */
        params : function(params) {

            var _this = this;
            if(typeof params == 'undefined') return _this._params;

            _this._params = params;
            return _this;

        },

        /**
         * Возвращает/устанавливает один параметр контекста
         * @param {String} name имя параметра
         * @param {String} [val] значение параметра
         * @param {Boolean} [force=false] установить параметр независимо от его наличия в контексте
         * @param {Boolean} [needExtend=false] расширять параметр
         */
        param : function(name, val, force, needExtend) {

            var _this = this,
                params = _this._params;

            if(typeof val == 'undefined') return params[name];

            if(force || !(name in params)) {
                params[name] = val;
            } else if(needExtend) {
                params[name] = $.extend(val, params[name]);
            }

            return _this;

        },

        /**
         * Возвращает/устанавливает html-атрибуты контекста (шорткат к params('attrs', val))
         * @param {Object} [val] хэш атрибутов
         * @param {Boolean} [force=false]
         */
        attrs : function(val, force) {

            return this.param('attrs', val, force, true);

        },

        /**
         * Возвращает/устанавливает один html-атрибут контекста
         * @param {String} name имя атрибута
         * @param {String} [val] значение атрибута
         * @param {Boolean} [force=false]
         */
        attr : function(name, val, force) {

            var _this = this;
            if(typeof val == 'undefined') return (_this._params.attrs || {})[name];

            var attrs = _this._params.attrs;
            attrs?
                (force || !(name in attrs)) && (attrs[name] = val) :
                (_this._params.attrs = {})[name] = val;

            return _this;

        },

        /**
         * Возвращает/устанавливает имя html-тэга контекста (шорткат к params('tag', val))
         * @param {String} [val] тэг
         * @param {Boolean} [force=false]
         */
        tag : function(val, force) {

            return this.param('tag', val, force);

        },

        /**
         * Возвращает/устанавливает дополнительные CSS-классы контекста (шорткат к params('cls', val))
         * @param {String} [val] CSS-класс
         * @param {Boolean} [force=false]
         */
        cls : function(val, force) {

            return this.param('cls', val, force);

        },

        /**
         * Возвращает/устанавливает модификаторы контекста (шорткат к params('mods', val))
         * @param {Object} [val] хэш модификаторов
         * @param {Boolean} [force=false]
         */
        mods : function(val, force) {

            return this.param('mods', val, force, true);

        },

        /**
         * Возвращает/устанавливает один модификатор контекста
         * @param {String} name имя модификатора
         * @param {String} [val] значение модификатора
         * @param {Boolean} [force=false]
         */
        mod : function(name, val, force) {

            var _this = this;
            if(typeof val == 'undefined') return (_this._params.mods || {})[name];

            var mods = _this._params.mods;
            mods?
                (force || !(name in mods)) && (mods[name] = val) :
                (_this._params.mods = {})[name] = val;

            return _this;

        },

        /**
         * Возвращает/добавляет/устанавливает миксы
         * @param {Array} [val] миксы
         * @param {Boolean} [force=false]
         */
        mix : function(val, force) {

            var _this = this,
                params = _this._params;

            if(typeof val == 'undefined') return params.mix;

            if(force || !('mix' in params)) {
                params.mix = val;
            } else {
                params.mix = params.mix.concat(val);
            }

            return _this;

        },

        /**
         * Возвращает/устанавливает js-параметры контекста (шорткат к params('js', val))
         * @param {Boolean|Object} [val] параметры
         */
        js : function(val) {

            return this.param('js', val);

        },

        /**
         * Возвращает/устанавливает контент контекста (шорткат к params('content', val))
         * @param {String|Object|Array} [val] контент
         * @param {Boolean} [force=false] установить контент независимо от его наличия
         */
        content : function(val, force) {

            return this.param('content', val, force);

        },

        /**
         * Оборачивает контент контекста (например, другим элементом)
         * @param {Object} obj
         */
        wrapContent : function(obj) {

            var _this = this,
                params = _this._params;

            obj.content = params.content;
            params.content = obj;

            return _this;

        },

        /**
         * Добавляет контент перед контентом контекста (например, еще один элемент)
         * @param {Object|Array} obj
         */
        beforeContent : function(obj) {

            var _this = this,
                params = _this._params;

            params.content = join(obj, params.content);

            return _this;

        },

        /**
         * Добавляет контент после контента контекста (например, еще один элемент)
         * @param {Object|Array} obj
         */
        afterContent : function(obj) {

            var _this = this,
                params = _this._params;

            params.content = join(params.content, obj);

            return _this;

        },

        /**
         * Оборачивает контекста (например, другим элементом или блоком)
         * @param {Object} obj
         */
        wrap : function(obj) {

            var _this = this,
                params = _this._params;

            obj.block || (obj._curBlock = _this._curBlock);
            obj.content = params._wrapper? params._wrapper : params;
            params._wrapper = obj;

            return _this;

        },

        /**
         * Возвращает/устанавливает один туннелированный параметр контекста
         * @param {String} name имя параметра
         * @param {String} [val] значение параметра
         */
        tParam : function(name, val) {

            var _this = this,
                tParams = _this._tParams || (_this._tParams = {});

            if(typeof val == 'undefined') return tParams[name];

            var tParamsChanges = _this._tParamsChanges || (_this._tParamsChanges = {});

            name in tParamsChanges || (tParamsChanges[name] = tParams[name]);

            tParams[name] = val;

            return _this;

        },

        /**
         * Генерирует уникальный идентификатор
         * returns {String}
         */
        generateId : function() {

            return $.identify();

        },

        /**
         * Останавливает применение более базовых шаблонов
         */
        stop : function() {

            this._params._isStopped = true;

        },

        /**
         * Выполняет одну итерацию билда в зависимости от типа контекста
         * @private
         */
        _buildAll : function() {

            var _this = this,
                buffer = _this._buffer,
                params = _this._params,
                paramsType = typeof params;

            if(paramsType == 'string' || paramsType == 'number') {
                buffer.push(params);
            } else if($.isArray(params)) {
                var i = 0, len = params.length, currParams, currParamsType;
                while(i < len) {
                     _this._params = currParams = params[i++];
                    currParamsType = typeof currParams;
                    if(currParamsType == 'string' || currParamsType == 'number') {
                        buffer.push(currParams);
                    } else if(currParams) {
                        currParams._pos = i;
                        currParams._siblingsCount = len;
                        _this._buildByDecl();
                    }
                }
            } else if(params) {
                _this._params._pos = _this._params._siblingsCount = 1;
                _this._buildByDecl();
            }

        },

        /**
         * Дефолтный билд
         * @private
         */
        _build : function() {

            var _this = this,
                buffer = _this._buffer,
                params = _this._params,
                tag = params.tag || 'div',
                jsParams,
                isBEM = params.block || params.elem,
                curBlock = isBEM && (params.block || _this._curBlock.block),
                addInitingCls = false;

            if(params.js) {
                (jsParams = {})[buildClass(curBlock, params.elem)] = params.js === true? {} : params.js;
                addInitingCls = !params.elem;
            }

            buffer.push('<', tag);

            if(isBEM || params.cls) {
                buffer.push(' class="');
                if(isBEM) {
                    buildClasses(curBlock, params.elem, params.mods, buffer);
                    params.mix && $.each(params.mix, function(i, mix) {
                        if(mix) {
                            buffer.push(' ');
                            buildClasses(mix.block, mix.elem, mix.mods, buffer);
                            if(mix.js) {
                                (jsParams || (jsParams = {}))[buildClass(mix.block, mix.elem)] = mix.js === true? {} : mix.js;
                                addInitingCls || (addInitingCls = !mix.elem);
                            }
                        }
                    });
                }

                params.cls && buffer.push(isBEM? ' ' : '', params.cls);

                addInitingCls && buffer.push(' i-bem');
                buffer.push('"');
            }

            jsParams && buffer.push(
                ' data-bem="',
                escapeAttr(JSON.stringify(jsParams)),
                '"');

            params.attrs && $.each(params.attrs, function(name, val) {
                typeof val != 'undefined' && val !== null && val !== false && buffer.push(
                    ' ',
                    name,
                    '="',
                    val.toString().replace(/"/g, "&quot;"),
                    '"');
            });

            if(SHORT_TAGS[tag]) {
                buffer.push('/>');
            } else {
                buffer.push('>');

                if(typeof params.content != 'undefined') {
                    _this._params = params.content;
                    _this._buildAll();
                }

                buffer.push('</', tag, '>');
            }

        },

        /**
         * Очищает буфер и возвращает его содержимое
         * @private
         * @returns {String} содержимое буфера
         */
        _flush : function() {

            var res = this._buffer.join('');
            delete this._buffer;
            return res;

        },

        _buildByDecl : function() {

            var _this = this,
                currBlock = _this._curBlock,
                params = _this._params;

            params._curBlock && (_this._curBlock = params._curBlock);
            params.block && (_this._curBlock = params);

            if(!params._wrapper) {
                if(params.block || params.elem) {
                    var decl = decls[_this._curBlock.block];
                    if(decl) {
                        var fns;
                        if(params.elem) {
                            fns = decl['_elem' + ELEM_DELIM + params.elem];
                            decl._elem && (fns = (fns? fns.concat(decl._elem) : decl._elem));
                        } else {
                            fns = decl._block;
                        }

                        if(fns) {
                            var i = 0, fn;
                            while(fn = fns[i++]) {
                                fn(_this);
                                if(params._isStopped) break;
                            }
                        }
                    }
                }

                if(params._wrapper) {
                    params._curBlock = _this._curBlock;
                    _this._params = params._wrapper;
                    return _this._buildAll();
                }
            }

            var tParamsChanges = _this._tParamsChanges;
                _this._tParamsChanges = null;

            _this._build();

            _this._curBlock = currBlock;

            if(tParamsChanges) {
                var tParams = _this._tParams;
                $.each(tParamsChanges, function(name, val) {
                    typeof val == 'undefined'?
                        delete tParams[name] :
                        tParams[name] = val;
                });
            }

        }

    })

};

})(BEM, jQuery);

/* end: ../../libs/lego/blocks-desktop/i-bem/html/i-bem__html.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js */
(function(undefined) {

if(window.JSON) return;

var _toString = Object.prototype.toString,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    meta = {
        '\b' : '\\b',
        '\t' : '\\t',
        '\n' : '\\n',
        '\f' : '\\f',
        '\r' : '\\r',
        '"'  : '\\"',
        '\\' : '\\\\'
    },
    stringify;

window.JSON = {
    stringify : stringify = function(val) {
        if(val === null) {
            return 'null';
        }
        if(typeof val === 'undefined') {
            return undefined;
        }
        switch(_toString.call(val)) {
            case '[object String]':
                escapable.lastIndex = 0;
                return '"' +
                    (escapable.test(val)?
                        val.replace(escapable, function(a) {
                            var c = meta[a];
                            return typeof c === 'string'? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                        }) :
                        val) +
                    '"';
            case '[object Number]':
            case '[object Boolean]':
                return '' + val;
            case '[object Array]':
                var res = '[', i = 0, len = val.length, strVal;
                while(i < len) {
                    strVal = stringify(val[i]);
                    res += (i++? ',' : '') + (typeof strVal === 'undefined'? 'null' : strVal);
                }
                return res + ']';
            case '[object Object]':
                if(_toString.call(val.toJSON) === '[object Function]') {
                    return stringify(val.toJSON());
                }
                var res = '{', i = 0, strVal;
                for(var key in val) {
                    if(val.hasOwnProperty(key)) {
                        strVal = stringify(val[key]);
                        typeof strVal !== 'undefined' && (res += (i++? ',' : '') + '"' + key + '":' + strVal);
                    }
                }
                return res + '}';
            default:
                return undefined;
        }
    }
};
})();

/* end: ../../libs/lego/bem-bl/blocks-common/i-ecma/__json/i-ecma__json.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js */
/** @requires BEM */
/** @requires BEM.INTERNAL */

(function(BEM, $, undefined) {

var win = $(window),
    doc = $(document),

/**
 * Storage for DOM elements by unique key
 * @private
 * @type Object
 */
    uniqIdToDomElems = {},

/**
 * Storage for blocks by unique key
 * @static
 * @private
 * @type Object
 */
    uniqIdToBlock = {},

/**
 * Storage for block parameters
 * @private
 * @type Object
 */
    domElemToParams = {},

/**
 * Storage for liveCtx event handlers
 * @private
 * @type Object
 */
    liveEventCtxStorage = {},

/**
 * Storage for liveClass event handlers
 * @private
 * @type Object
 */
    liveClassEventStorage = {},

    blocks = BEM.blocks,

    INTERNAL = BEM.INTERNAL,

    NAME_PATTERN = INTERNAL.NAME_PATTERN,

    MOD_DELIM = INTERNAL.MOD_DELIM,
    ELEM_DELIM = INTERNAL.ELEM_DELIM,

    buildModPostfix = INTERNAL.buildModPostfix,
    buildClass = INTERNAL.buildClass;

/**
 * Initializes blocks on a DOM element
 * @private
 * @param {jQuery} domElem DOM element
 * @param {String} uniqInitId ID of the "initialization wave"
 */
function init(domElem, uniqInitId) {

    var domNode = domElem[0];
    $.each(getParams(domNode), function(blockName, params) {
        processParams(params, domNode, blockName, uniqInitId);
        var block = uniqIdToBlock[params.uniqId];
        if(block) {
            if(block.domElem.index(domNode) < 0) {
                block.domElem = block.domElem.add(domElem);
                $.extend(block._params, params);
            }
        } else {
            initBlock(blockName, domElem, params);
        }
    });

}

/**
 * Initializes a specific block on a DOM element, or returns the existing block if it was already created
 * @private
 * @param {String} blockName Block name
 * @param {jQuery} domElem DOM element
 * @param {Object} [params] Initialization parameters
 * @param {Boolean} [forceLive] Force live initialization
 * @param {Function} [callback] Handler to call after complete initialization
 */
function initBlock(blockName, domElem, params, forceLive, callback) {

    if(typeof params == 'boolean') {
        callback = forceLive;
        forceLive = params;
        params = undefined;
    }

    var domNode = domElem[0];
    params = processParams(params || getParams(domNode)[blockName], domNode, blockName);

    var uniqId = params.uniqId;
    if(uniqIdToBlock[uniqId]) {
        return uniqIdToBlock[uniqId]._init();
    }

    uniqIdToDomElems[uniqId] = uniqIdToDomElems[uniqId]?
        uniqIdToDomElems[uniqId].add(domElem) :
        domElem;

    var parentDomNode = domNode.parentNode;
    if(!parentDomNode || parentDomNode.nodeType === 11) { // jquery doesn't unique disconnected node
        $.unique(uniqIdToDomElems[uniqId]);
    }

    var blockClass = blocks[blockName] || DOM.decl(blockName, {}, { live : true });
    if(!(blockClass._liveInitable = !!blockClass._processLive()) || forceLive || params.live === false) {
        var block = new blockClass(uniqIdToDomElems[uniqId], params, !!forceLive);
        delete uniqIdToDomElems[uniqId];
        callback && callback.apply(block, Array.prototype.slice.call(arguments, 4));
        return block;
    }

}

/**
 * Processes and adds necessary block parameters
 * @private
 * @param {Object} params Initialization parameters
 * @param {HTMLElement} domNode DOM node
 * @param {String} blockName Block name
 * @param {String} [uniqInitId] ID of the "initialization wave"
 */
function processParams(params, domNode, blockName, uniqInitId) {

    (params || (params = {})).uniqId ||
        (params.uniqId = (params.id? blockName + '-id-' + params.id : $.identify()) + (uniqInitId || $.identify()));

    var domUniqId = $.identify(domNode),
        domParams = domElemToParams[domUniqId] || (domElemToParams[domUniqId] = {});

    domParams[blockName] || (domParams[blockName] = params);

    return params;

}

/**
 * Helper for searching for a DOM element using a selector inside the context, including the context itself
 * @private
 * @param {jQuery} ctx Context
 * @param {String} selector CSS selector
 * @param {Boolean} [excludeSelf=false] Exclude context from search
 * @returns {jQuery}
 */
function findDomElem(ctx, selector, excludeSelf) {

    var res = ctx.find(selector);
    return excludeSelf?
       res :
       res.add(ctx.filter(selector));

}

/**
 * Returns parameters of a block's DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function getParams(domNode) {

    var uniqId = $.identify(domNode);
    return domElemToParams[uniqId] ||
           (domElemToParams[uniqId] = extractParams(domNode));

}

/**
 * Retrieves block parameters from a DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function extractParams(domNode) {
    var data = domNode.dataset && domNode.dataset.bem || domNode.getAttribute('data-bem');

    return data && $.parseJSON(data) || {};
}

/**
 * Cleans up all the BEM storages associated with a DOM node
 * @private
 * @param {HTMLElement} domNode DOM node
 */
function cleanupDomNode(domNode) {

    delete domElemToParams[$.identify(domNode)];

}

/**
 * Uncople DOM node from the block. If this is the last node, then destroys the block.
 * @private
 * @param {BEM.DOM} block block
 * @param {HTMLElement} domNode DOM node
 */
function removeDomNodeFromBlock(block, domNode) {

    block.domElem.length === 1?
        block.destruct(true) :
        block.domElem = block.domElem.not(domNode);

}

/**
 * Returns a DOM node for calculating the window size in IE
 * @returns {HTMLElement}
 */
function getClientNode() {

    return doc[0][$.support.boxModel? 'documentElement' : 'body'];

}

/**
 * Returns a block on a DOM element and initializes it if necessary
 * @param {String} blockName Block name
 * @param {Object} params Block parameters
 * @returns {BEM}
 */
$.fn.bem = function(blockName, params) {
    return initBlock(blockName, this, params, true);
};

/**
 * @namespace
 * @name BEM.DOM
 */
var DOM = BEM.DOM = BEM.decl('i-bem__dom',/** @lends BEM.DOM.prototype */{
    /**
     * @class Base block for creating BEM blocks that have DOM representation
     * @constructs
     * @private
     * @param {jQuery} domElem DOM element that the block is created on
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(domElem, params, initImmediately) {

        var _this = this;

        /**
         * Block's DOM elements
         * @protected
         * @type jQuery
         */
        _this.domElem = domElem;

        /**
         * Cache for names of events on DOM elements
         * @private
         * @type Object
         */
        _this._eventNameCache = {};

        /**
         * Cache for elements
         * @private
         * @type Object
         */
        _this._elemCache = {};

        /**
         * Unique block ID
         * @private
         * @type String
         */
        uniqIdToBlock[_this._uniqId = params.uniqId || $.identify(_this)] = _this;

        /**
         * Flag for whether it's necessary to unbind from the document and window when destroying the block
         * @private
         * @type Boolean
         */
        _this._needSpecialUnbind = false;

        _this.__base(null, params, initImmediately);

    },

    /**
     * Finds blocks inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksInside : function(elem, block) {

        return this._findBlocks('find', elem, block);

    },

    /**
     * Finds the first block inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockInside : function(elem, block) {

        return this._findBlocks('find', elem, block, true);

    },

    /**
     * Finds blocks outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOutside : function(elem, block) {

        return this._findBlocks('parents', elem, block);

    },

    /**
     * Finds the first block outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOutside : function(elem, block) {

        return this._findBlocks('closest', elem, block)[0] || null;

    },

    /**
     * Finds blocks on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOn : function(elem, block) {

        return this._findBlocks('', elem, block);

    },

    /**
     * Finds the first block on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOn : function(elem, block) {

        return this._findBlocks('', elem, block, true);

    },

    _findBlocks : function(select, elem, block, onlyFirst) {

        if(!block) {
            block = elem;
            elem = undefined;
        }

        var ctxElem = elem?
                (typeof elem == 'string'? this.findElem(elem) : elem) :
                this.domElem,
            isSimpleBlock = typeof block == 'string',
            blockName = isSimpleBlock? block : (block.block || block.blockName),
            selector = '.' +
                (isSimpleBlock?
                    buildClass(blockName) :
                    buildClass(blockName, block.modName, block.modVal)) +
                (onlyFirst? ':first' : ''),
            domElems = ctxElem.filter(selector);

        select && (domElems = domElems.add(ctxElem[select](selector)));

        if(onlyFirst) {
            return domElems[0]? initBlock(blockName, domElems.eq(0), true) : null;
        }

        var res = [],
            uniqIds = {};

        $.each(domElems, function(i, domElem) {
            var block = initBlock(blockName, $(domElem), true);
            if(!uniqIds[block._uniqId]) {
                uniqIds[block._uniqId] = true;
                res.push(block);
            }
        });

        return res;

    },

    /**
     * Adds an event handler for any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event will be listened for
     * @param {String|Object} event Event name or event object
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDomElem : function(domElem, event, fn) {

        var _this = this;

        fn?
            domElem.bind(
                _this._buildEventName(event),
                function(e) {
                    (e.data || (e.data = {})).domElem = $(this);
                    return fn.apply(_this, arguments);
                }
            ) :
            $.each(event, function(event, fn) {
                _this.bindToDomElem(domElem, event, fn);
            });

        return _this;

    },

    /**
     * Adds an event handler to the document
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDoc : function(event, fn) {

        this._needSpecialUnbind = true;
        return this.bindToDomElem(doc, event, fn);

    },

    /**
     * Adds an event handler to the window
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToWin : function(event, fn) {

        var _fn = fn,
            currentHeight,
            currentWidth;

        if (event === 'resize') {

            fn = function() {

                var height = win.height(),
                    width = win.width();

                if (currentHeight !== height || currentWidth !== width) {

                    currentHeight = height;
                    currentWidth = width;

                    _fn.apply(this, arguments);

                }


            }

        }

        this._needSpecialUnbind = true;
        return this.bindToDomElem(win, event, fn);

    },

    /**
     * Adds an event handler to the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Element
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindTo : function(elem, event, fn) {

        if(!event || $.isFunction(event)) { // if there is no element
            fn = event;
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.bindToDomElem(elem, event, fn);

    },

    /**
     * Removes event handlers from any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event was being listened for
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDomElem : function(domElem, event) {

        domElem.unbind(this._buildEventName(event));
        return this;

    },

    /**
     * Removes event handler from document
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDoc : function(event) {

        return this.unbindFromDomElem(doc, event);

    },

    /**
     * Removes event handler from window
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromWin : function(event) {

        return this.unbindFromDomElem(win, event);

    },

    /**
     * Removes event handlers from the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Nested element
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFrom : function(elem, event) {

        if(!event) {
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.unbindFromDomElem(elem, event);

    },

    /**
     * Builds a full name for an event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildEventName : function(event) {

        var _this = this;
        return event.indexOf(' ') > 1?
            event.split(' ').map(function(e) {
                return _this._buildOneEventName(e);
            }).join(' ') :
            _this._buildOneEventName(event);

    },

    /**
     * Builds a full name for a single event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildOneEventName : function(event) {

        var _this = this,
            eventNameCache = _this._eventNameCache;

        if(event in eventNameCache) return eventNameCache[event];

        var uniq = '.' + _this._uniqId;

        if(event.indexOf('.') < 0) return eventNameCache[event] = event + uniq;

        var lego = '.bem_' + _this.__self._name;

        return eventNameCache[event] = event.split('.').map(function(e, i) {
            return i == 0? e + lego : lego + '_' + e;
        }).join('') + uniq;

    },

    /**
     * Triggers block event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .domElem && this._ctxTrigger(e, data);

        return this;

    },

    _ctxTrigger : function(e, data) {

        var _this = this,
            storage = liveEventCtxStorage[_this.__self._buildCtxEventName(e.type)],
            ctxIds = {};

        storage && _this.domElem.each(function() {
            var ctx = this,
                counter = storage.counter;
            while(ctx && counter) {
                var ctxId = $.identify(ctx, true);
                if(ctxId) {
                    if(ctxIds[ctxId]) break;
                    var storageCtx = storage.ctxs[ctxId];
                    if(storageCtx) {
                        $.each(storageCtx, function(uniqId, handler) {
                            handler.fn.call(
                                handler.ctx || _this,
                                e,
                                data);
                        });
                        counter--;
                    }
                    ctxIds[ctxId] = true;
                }
                ctx = ctx.parentNode;
            }
        });

    },

    /**
     * Sets a modifier for a block/nested element
     * @protected
     * @param {jQuery} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(elem && typeof modVal != 'undefined' && elem.length > 1) {
            var _this = this;
            elem.each(function() {
                var item = $(this);
                item.__bemElemName = elem.__bemElemName;
                _this.setMod(item, modName, modVal);
            });
            return _this;
        }
        return this.__base(elem, modName, modVal);

    },

    /**
     * Retrieves modifier value from the DOM node's CSS class
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery} [elem] Nested element
     * @param {String} [elemName] Name of the nested element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem, elemName) {

        var domNode = (elem || this.domElem)[0],
            matches;

        domNode &&
            (matches = domNode.className
                .match(this.__self._buildModValRE(modName, elemName || elem)));

        return matches? matches[2] : '';

    },

    /**
     * Retrieves a name/value list of modifiers
     * @private
     * @param {Array} [modNames] Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by names
     */
    _extractMods : function(modNames, elem) {

        var res = {},
            extractAll = !modNames.length,
            countMatched = 0;

        ((elem || this.domElem)[0].className
            .match(this.__self._buildModValRE(
                '(' + (extractAll? NAME_PATTERN : modNames.join('|')) + ')',
                elem,
                'g')) || []).forEach(function(className) {
                    var iModVal = (className = className.trim()).lastIndexOf(MOD_DELIM),
                        iModName = className.substr(0, iModVal - 1).lastIndexOf(MOD_DELIM);
                    res[className.substr(iModName + 1, iModVal - iModName - 1)] = className.substr(iModVal + 1);
                    ++countMatched;
                });

        // empty modifier values are not reflected in classes; they must be filled with empty values
        countMatched < modNames.length && modNames.forEach(function(modName) {
            modName in res || (res[modName] = '');
        });

        return res;

    },

    /**
     * Sets a modifier's CSS class for a block's DOM element or nested element
     * @private
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {jQuery} [elem] Element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {

        var _self = this.__self,
            classPrefix = _self._buildModClassPrefix(modName, elemName),
            classRE = _self._buildModValRE(modName, elemName),
            needDel = modVal === '';

        (elem || this.domElem).each(function() {
            var className = this.className;
            className.indexOf(classPrefix) > -1?
                this.className = className.replace(
                    classRE,
                    (needDel? '' : '$1' + classPrefix + modVal)) :
                needDel || $(this).addClass(classPrefix + modVal);
        });

        elemName && this
            .dropElemCache(elemName, modName, oldModVal)
            .dropElemCache(elemName, modName, modVal);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String|jQuery} [ctx=this.domElem] Element where search is being performed
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    findElem : function(ctx, names, modName, modVal) {

        if(arguments.length % 2) { // if the number of arguments is one or three
            modVal = modName;
            modName = names;
            names = ctx;
            ctx = this.domElem;
        } else if(typeof ctx == 'string') {
            ctx = this.findElem(ctx);
        }

        var _self = this.__self,
            selector = '.' +
                names.split(' ').map(function(name) {
                    return buildClass(_self._name, name, modName, modVal);
                }).join(',.');
        return findDomElem(ctx, selector);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String} name Nested element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    _elem : function(name, modName, modVal) {

        var key = name + buildModPostfix(modName, modVal),
            res;

        if(!(res = this._elemCache[key])) {
            res = this._elemCache[key] = this.findElem(name, modName, modVal);
            res.__bemElemName = name;
        }

        return res;

    },

    /**
     * Lazy search for elements nested in a block (caches results)
     * @protected
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    elem : function(names, modName, modVal) {

        if(modName && typeof modName != 'string') {
            modName.__bemElemName = names;
            return modName;
        }

        if(names.indexOf(' ') < 0) {
            return this._elem(names, modName, modVal);
        }

        var res = $([]),
            _this = this;
        names.split(' ').forEach(function(name) {
            res = res.add(_this._elem(name, modName, modVal));
        });
        return res;

    },

    /**
     * Clearing the cache for elements
     * @protected
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {BEM}
     */
    dropElemCache : function(names, modName, modVal) {

        if(names) {
            var _this = this,
                modPostfix = buildModPostfix(modName, modVal);
            names.indexOf(' ') < 0?
                delete _this._elemCache[names + modPostfix] :
                names.split(' ').forEach(function(name) {
                    delete _this._elemCache[name + modPostfix];
                });
        } else {
            this._elemCache = {};
        }

        return this;

    },

    /**
     * Retrieves parameters of a block element
     * @param {String|jQuery} elem Element
     * @returns {Object} Parameters
     */
    elemParams : function(elem) {

        var elemName;
        if(typeof elem ==  'string') {
            elemName = elem;
            elem = this.elem(elem);
        } else {
            elemName = this.__self._extractElemNameFrom(elem);
        }

        return extractParams(elem[0])[buildClass(this.__self.getName(), elemName)] || {};

    },

    /**
     * Elemify given element
     * @param {jQuery} elem Element
     * @param {String} elemName Name
     * @returns {jQuery}
     */
    elemify : function(elem, elemName) {
        (elem = $(elem)).__bemElemName = elemName;
        return elem;
    },

    /**
     * Checks whether a DOM element is in a block
     * @protected
     * @param {jQuery} domElem DOM element
     * @returns {Boolean}
     */
    containsDomElem : function(domElem) {

        var res = false;

        this.domElem.each(function() {
            return !(res = domElem.parents().andSelf().index(this) > -1);
        });

        return res;

    },

    /**
     * Builds a CSS selector corresponding to a block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return this.__self.buildSelector(elem, modName, modVal);

    },

    /**
     * Deletes a block
     * @param {Boolean} [keepDOM=false] Whether to keep the block's DOM nodes in the document
     */
    destruct : function(keepDOM) {

        var _this = this,
            _self = _this.__self;

        _this._isDestructing = true;

        _this._needSpecialUnbind && _self.doc.add(_self.win).unbind('.' + _this._uniqId);

        _this.dropElemCache().domElem.each(function(i, domNode) {
            var params = getParams(domNode);
            $.each(params, function(blockName, blockParams) {
                var block = uniqIdToBlock[blockParams.uniqId];
                block?
                    block._isDestructing || removeDomNodeFromBlock(block, domNode) :
                    delete uniqIdToDomElems[blockParams.uniqId];
            });
            cleanupDomNode(domNode);
        });

        keepDOM || _this.domElem.remove();

        delete uniqIdToBlock[_this.un()._uniqId];
        delete _this.domElem;
        delete _this._elemCache;

        _this.__base();

    },

    findAndDestruct: function(bl) {
        this.findBlocksInside(bl).forEach(function(block) {
            block.destruct();
        });
    }


}, /** @lends BEM.DOM */{

    /**
     * Scope
     * Will be set on onDomReady to tag `body`
     * @protected
     * @type jQuery
     */
    scope : null,

    /**
     * Document shortcut
     * @protected
     * @type jQuery
     */
    doc : doc,

    /**
     * Window shortcut
     * @protected
     * @type jQuery
     */
    win : win,

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        var _this = this,
            res = _this._liveInitable;

        if('live' in _this) {
            var noLive = typeof res == 'undefined';

            if(noLive ^ heedLive) {
                res = _this.live() !== false;
                _this.live = function() {};
            }
        }

        return res;

    },

    /**
     * Initializes blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {jQuery} [ctx=document] Root DOM node
     * @returns {jQuery} ctx Initialization context
     */
    init : function(ctx, callback, callbackCtx) {

        if(!ctx || $.isFunction(ctx)) {
            callbackCtx = callback;
            callback = ctx;
            ctx = doc;
        }

        var uniqInitId = $.identify();
        findDomElem(ctx, '.i-bem').each(function() {
            init($(this), uniqInitId);
        });

        callback && this.afterCurrentEvent(
            function() {
                callback.call(callbackCtx || this, ctx);
            });

        // makes initialization completely synchronous
        this._runAfterCurrentEventFns();

        return ctx;

    },

    /**
     * Destroys blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {Boolean} [keepDOM=false] Whether to keep DOM nodes in the document
     * @param {jQuery} ctx Root DOM node
     * @param {Boolean} [excludeSelf=false] Exclude the context
     */
    destruct : function(keepDOM, ctx, excludeSelf) {

        if(typeof keepDOM != 'boolean') {
            excludeSelf = ctx;
            ctx = keepDOM;
            keepDOM = undefined;
        }

        findDomElem(ctx, '.i-bem', excludeSelf).each(function(i, domNode) {
            var params = getParams(this);
            $.each(params, function(blockName, blockParams) {
                if(blockParams.uniqId) {
                    var block = uniqIdToBlock[blockParams.uniqId];
                    block?
                        removeDomNodeFromBlock(block, domNode) :
                        delete uniqIdToDomElems[blockParams.uniqId];
                }
            });
            cleanupDomNode(this);
        });
        keepDOM || (excludeSelf? ctx.empty() : ctx.remove());

    },

    /**
     * Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones
     * @static
     * @protected
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content New content
     * @param {Function} [callback] Handler to be called after initialization
     * @param {Object} [callbackCtx] Handler's context
     */
    update : function(ctx, content, callback, callbackCtx) {

        this.destruct(ctx, true);
        this.init(ctx.html(content), callback, callbackCtx);

    },

    /**
     * Changes a fragment of the DOM tree including the context and initializes blocks.
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    replace : function(ctx, content) {

        this.destruct(true, ctx);
        this.init($(content).replaceAll(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the end of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    append : function(ctx, content) {

        this.init($(content).appendTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the beginning of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    prepend : function(ctx, content) {

        this.init($(content).prependTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree before the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    before : function(ctx, content) {

        this.init($(content).insertBefore(ctx));

    },

    /**
     * Adds a fragment of the DOM tree after the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    after : function(ctx, content) {

        this.init($(content).insertAfter(ctx));

    },

    /**
     * Builds a full name for a live event
     * @static
     * @private
     * @param {String} e Event name
     * @returns {String}
     */
    _buildCtxEventName : function(e) {

        return this._name + ':' + e;

    },

    _liveClassBind : function(className, e, callback, invokeOnInit) {

        var _this = this;
        if(e.indexOf(' ') > -1) {
            e.split(' ').forEach(function(e) {
                _this._liveClassBind(className, e, callback, invokeOnInit);
            });
        }
        else {
            var storage = liveClassEventStorage[e],
                uniqId = $.identify(callback);

            if(!storage) {
                storage = liveClassEventStorage[e] = {};
                doc.bind(e, _this.changeThis(_this._liveClassTrigger, _this));
            }

            storage = storage[className] || (storage[className] = { uniqIds : {}, fns : [] });

            if(!(uniqId in storage.uniqIds)) {
                storage.fns.push({ uniqId : uniqId, fn : _this._buildLiveEventFn(callback, invokeOnInit) });
                storage.uniqIds[uniqId] = storage.fns.length - 1;
            }
        }

        return this;

    },

    _liveClassUnbind : function(className, e, callback) {

        var storage = liveClassEventStorage[e];
        if(storage) {
            if(callback) {
                if(storage = storage[className]) {
                    var uniqId = $.identify(callback);
                    if(uniqId in storage.uniqIds) {
                        var i = storage.uniqIds[uniqId],
                            len = storage.fns.length - 1;
                        storage.fns.splice(i, 1);
                        while(i < len) storage.uniqIds[storage.fns[i++].uniqId] = i - 1;
                        delete storage.uniqIds[uniqId];
                    }
                }
            } else {
                delete storage[className];
            }
        }

        return this;

    },

    _liveClassTrigger : function(e) {

        var storage = liveClassEventStorage[e.type];
        if(storage) {
            var node = e.target, classNames = [];
            for(var className in storage) storage.hasOwnProperty(className) && classNames.push(className);
            do {
                var nodeClassName = ' ' + node.className + ' ', i = 0;
                while(className = classNames[i++]) {
                    if(nodeClassName.indexOf(' ' + className + ' ') > -1) {
                        var j = 0, fns = storage[className].fns, fn, stopPropagationAndPreventDefault = false;
                        while(fn = fns[j++])
                            if(fn.fn.call($(node), e) === false) stopPropagationAndPreventDefault = true;

                        stopPropagationAndPreventDefault && e.preventDefault();
                        if(stopPropagationAndPreventDefault || e.isPropagationStopped()) return;

                        classNames.splice(--i, 1);
                    }
                }
            } while(classNames.length && (node = node.parentNode));
        }

    },

    _buildLiveEventFn : function(callback, invokeOnInit) {

        var _this = this;
        return function(e) {
            var args = [
                    _this._name,
                    ((e.data || (e.data = {})).domElem = $(this)).closest(_this.buildSelector()),
                    true ],
                block = initBlock.apply(null, invokeOnInit? args.concat([callback, e]) : args);

            if(block && !invokeOnInit && callback)
                return callback.apply(block, arguments);
        };

    },

    /**
     * Helper for live initialization for an event on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elemName] Element name or names (separated by spaces)
     * @param {String} event Event name
     * @param {Function} [callback] Handler to call after successful initialization
     */
    liveInitOnEvent : function(elemName, event, callback) {

        return this.liveBindTo(elemName, event, callback, true);

    },

    /**
     * Helper for subscribing to live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String|Object} [to] Description (object with modName, modVal, elem) or name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveBindTo : function(to, event, callback, invokeOnInit) {

        if(!event || $.isFunction(event)) {
            callback = event;
            event = to;
            to = undefined;
        }

        if(!to || typeof to == 'string') {
            to = { elem : to };
        }

        to.elemName && (to.elem = to.elemName);

        var _this = this;

        if(to.elem && to.elem.indexOf(' ') > 0) {
            to.elem.split(' ').forEach(function(elem) {
                _this._liveClassBind(
                    buildClass(_this._name, elem, to.modName, to.modVal),
                    event,
                    callback,
                    invokeOnInit);
            });
            return _this;
        }

        return _this._liveClassBind(
            buildClass(_this._name, to.elem, to.modName, to.modVal),
            event,
            callback,
            invokeOnInit);

    },

    /**
     * Helper for unsubscribing from live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elem] Name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveUnbindFrom : function(elem, event, callback) {

        var _this = this;

        if(elem.indexOf(' ') > 1) {
            elem.split(' ').forEach(function(elem) {
                _this._liveClassUnbind(
                    buildClass(_this._name, elem),
                    event,
                    callback);
            });
            return _this;
        }

        return _this._liveClassUnbind(
            buildClass(_this._name, elem),
            event,
            callback);

    },

    /**
     * Helper for live initialization when a different block is initialized
     * @static
     * @private
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     * @param {String} findFnName Name of the method for searching
     */
    _liveInitOnBlockEvent : function(event, blockName, callback, findFnName) {

        var name = this._name;
        blocks[blockName].on(event, function(e) {
            var args = arguments,
                blocks = e.block[findFnName](name);

            callback && blocks.forEach(function(block) {
                callback.apply(block, args);
            });
        });
        return this;

    },

    /**
     * Helper for live initialization for a different block's event on the current block's DOM element
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOn');

    },

    /**
     * Helper for live initialization for a different block's event inside the current block
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOutside');

    },

    /**
     * Helper for live initialization when a different block is initialized on a DOM element of the current block
     * @deprecated - use liveInitOnBlockEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInit : function(blockName, callback) {

        return this.liveInitOnBlockEvent('init', blockName, callback);

    },

    /**
     * Helper for live initialization when a different block is initialized inside the current block
     * @deprecated - use liveInitOnBlockInsideEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideInit : function(blockName, callback) {

        return this.liveInitOnBlockInsideEvent('init', blockName, callback);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler's context
     */
    on : function(ctx, e, data, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxBind(ctx, e, data, fn, fnCtx) :
            this.__base(ctx, e, data, fn);

    },

    /**
     * Removes the live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    un : function(ctx, e, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxUnbind(ctx, e, fn, fnCtx) :
            this.__base(ctx, e, fn);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        return this._liveCtxBind(ctx, e, data, fn, fnCtx);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e  Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        var _this = this;

        if(typeof e == 'string') {
            if($.isFunction(data)) {
                fnCtx = fn;
                fn = data;
                data = undefined;
            }

            if(e.indexOf(' ') > -1) {
                e.split(' ').forEach(function(e) {
                    _this._liveCtxBind(ctx, e, data, fn, fnCtx);
                });
            } else {
                var ctxE = _this._buildCtxEventName(e),
                    storage = liveEventCtxStorage[ctxE] ||
                        (liveEventCtxStorage[ctxE] = { counter : 0, ctxs : {} });

                ctx.each(function() {
                    var ctxId = $.identify(this),
                        ctxStorage = storage.ctxs[ctxId];
                    if(!ctxStorage) {
                        ctxStorage = storage.ctxs[ctxId] = {};
                        ++storage.counter;
                    }
                    ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')] = {
                        fn   : fn,
                        data : data,
                        ctx  : fnCtx
                    };
                });
            }
        } else {
            $.each(e, function(e, fn) {
                _this._liveCtxBind(ctx, e, fn, data);
            });
        }

        return _this;

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        return this._liveCtxUnbind(ctx, e, fn, fnCtx);

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        var _this = this,
            storage = liveEventCtxStorage[e =_this._buildCtxEventName(e)];

        if(storage) {
            ctx.each(function() {
                var ctxId = $.identify(this, true),
                    ctxStorage;
                if(ctxId && (ctxStorage = storage.ctxs[ctxId])) {
                    fn && delete ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')];
                    if(!fn || $.isEmptyObject(ctxStorage)) {
                        storage.counter--;
                        delete storage.ctxs[ctxId];
                    }
                }
            });
            storage.counter || delete liveEventCtxStorage[e];
        }

        return _this;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {jQuery} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {

        if(elem.__bemElemName) return elem.__bemElemName;

        var matches = elem[0].className.match(this._buildElemNameRE());
        return matches? matches[1] : undefined;

    },

    /**
     * Retrieves block parameters from a DOM element
     * @static
     * @param {HTMLElement} domNode DOM node
     * @returns {Object}
     */
    extractParams : extractParams,

    /**
     * Builds a prefix for the CSS class of a DOM element or nested element of the block, based on modifier name
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @returns {String}
     */
    _buildModClassPrefix : function(modName, elem) {

        return buildClass(this._name) +
               (elem?
                   ELEM_DELIM + (typeof elem === 'string'? elem : this._extractElemNameFrom(elem)) :
                   '') +
               MOD_DELIM + modName + MOD_DELIM;

    },

    /**
     * Builds a regular expression for extracting modifier values from a DOM element or nested element of a block
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @param {String} [quantifiers] Regular expression quantifiers
     * @returns {RegExp}
     */
    _buildModValRE : function(modName, elem, quantifiers) {

        return new RegExp('(\\s|^)' + this._buildModClassPrefix(modName, elem) + '(' + NAME_PATTERN + ')(?=\\s|$)', quantifiers);

    },

    /**
     * Builds a regular expression for extracting names of elements nested in a block
     * @static
     * @private
     * @returns {RegExp}
     */
    _buildElemNameRE : function() {

        return new RegExp(this._name + ELEM_DELIM + '(' + NAME_PATTERN + ')(?:\\s|$)');

    },

    /**
     * Builds a CSS selector corresponding to the block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return '.' + buildClass(this._name, elem, modName, modVal);

    },

    /**
     * Returns a block instance by unique ID
     * @deprecated
     * @param {String} [uniqId]
     * @returns {BEM.DOM}
     */
    getBlockByUniqId : function(uniqId) {

        return uniqIdToBlock[uniqId];

    },

    /**
     * Returns the size of the current window
     * @returns {Object} Object with width and height fields
     */
    getWindowSize : function() {

        return {
            width  : win.width(),
            height : win.height()
        };

    }

});

/**
 * Set default scope after DOM ready
 */
$(function() {
    BEM.DOM.scope = $('body');
});

})(BEM, jQuery);

/* end: ../../libs/lego/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js */
(function() {

String.prototype.trim || (String.prototype.trim = function () {

    var str = this.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;

    while(ws.test(str.charAt(--i)));

    return str.slice(0, i + 1);

});

})();
/* end: ../../libs/lego/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js */
/* begin: ../../blocks-desktop/i-ecma/__string/i-ecma__string.js */
(function() {

    String.prototype.capitalize || (String.prototype.capitalize = function () {

        return this.substring(0, 1).toUpperCase() + this.substring(1);

    });

})();
/* end: ../../blocks-desktop/i-ecma/__string/i-ecma__string.js */
/* begin: ../../libs/lego/blocks-common/i-common/check-session/i-common__check-session.js */
(function(Lego){
if (!Lego) Lego = window.Lego = {};
/**
 * Проверяет жива ли сессия пользователя (наличие куки yandex_login).
 *
 * @return  true, если сессия пользователя живая.
 */
Lego.isSessionValid = function() {
    return !!Lego.getCookie('yandex_login');
}
})(window.Lego);

/* end: ../../libs/lego/blocks-common/i-common/check-session/i-common__check-session.js */
/* begin: ../../libs/lego/blocks-common/i-global/i-global.js */

BEM.DOM.decl('i-global', {

    onSetMod : {

        'js' : function() {

            // удаляем системные свойства
            this.del(this.__self._params = $.extend({}, this.params), 'uniqId', 'name');

            var params = this.__self._params;

            params['passport-msg'] || (params['passport-msg'] = params.id);

            if(params['show-counters'] === undefined) {
                params['show-counters'] = Math.round(Math.random() * 100) <= params['show-counters-percent'];
            }
            params.locale = params.lang;

            $(function(){
                params.oframebust && Lego.oframebust(params.oframebust);
            });

        }

    },

    getDefaultParams : function() {

        return {
            id : '',
            login : Lego.isSessionValid() ? $.cookie('yandex_login') || '' : '',
            yandexuid : $.cookie('yandexuid'),
            lang : 'ru',
            tld : 'ru',
            retpath : encodeURI($.decodeURI(location.href)), // LEGO-8443 + LEGO-9226
            'passport-host' : 'https://passport.yandex.ru',
            'pass-host' : '//pass.yandex.ru',
            'social-host' : '//social.yandex.ru',
            'lego-path' : '/lego',
            'show-counters-percent' : 100
        };

    }

}, {

    param  : function(name) {

        return (this._params || {})[name];

    }

});

/* end: ../../libs/lego/blocks-common/i-global/i-global.js */
/* begin: ../../libs/lego/blocks-common/i-counter/i-counter.js */
(function(Lego){
if (!Lego) Lego = window.Lego = {};

!Lego.params && (Lego.params = {});


/**
 * Хелпер удаляющий протокол из переданного хоста, для приведения
 * к каноническому виду.
 *
 * @param h {String}
 * @returns {String}
 */
function preparseHost(h) {
    return h.replace(/^(?:https?:)?\/\//, '');
}

/**
 * Счётчик клика на ссылку или просто показа.
 *
 * В случае клика подменяет href на redir'овский, потом по таймауту возвращает его обратно.
 *
 * В случае учёта показа динамически создаёт скрипт с URL системы учёта.
 *
 * Пример использования:
 *
 * <a href="http://meteoinfo.ru" onmousedown="Lego.c('stred/pid=7/cid=433',this)">Гидрометцентр</a>
 *
 * или
 *
 * < script type="text/javascript">Lego.c('stred/pid=7/cid=433')< /script>
 *
 * @param w     параметры счётчика
 * @param a     (optional) ссылка, клик на которую надо учитывать
 * @param opts  (optional) opts.noRedirect = true обрабатывает клик по обычной ссылке, как по b-link_pseudo_yes
 */ /**/
Lego.c = function(w, a, opts) {
/*
    new Image().src = location.protocol + '//clck.yandex.ru/click/dtype=' + w +
        '/rnd=' + ((new Date()).getTime() + Math.round(Math.random()*100)) +
        '/*' + (a ? (a.href || location.href) : '');
*/

    var host = preparseHost((opts && opts.host) || BEM.blocks['i-global'].param('click-host') || 'clck.yandex.ru'),
        url = function(w, h, t, a) {

            h = h.replace("'", "%27"); //см. LEGO-6428

            return h.indexOf('/dtype=') > -1?
                h :
                location.protocol + '//' + host + '/' + t + '/dtype=' + w +
                    '/rnd=' + ((new Date()).getTime() + Math.round(Math.random()*100)) +
                    (a?
                        '/*' + (h.match(/^http/) ? h : location.protocol + '//' + location.host + (h.match('^/') ? h : '/' + h)) :
                        '/*data=' + encodeURIComponent('url='+ encodeURIComponent((h.match(/^http/) ? h : location.protocol + '//' + location.host + (h.match('^/') ? h : '/' + h)))));
        },
        click = function() {
            var head = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.setAttribute('src', url(w, location.href, 'jclck'));
            head.insertBefore(script, head.firstChild);
        };

    if (a) {
        // для псевдоссылки и ссылки mailto просто считаем click, создавая iframe и в него грузим счётчик
        if (a.className.match(/b-link_pseudo_yes/) || (a.href && a.href.match(/^mailto:/)) || (opts && opts.noRedirect === true)) {
            click();
        } else if (a.href) { // клик на ссылку, подменяем href на redir'овский, потом по таймауту обратно
            var h = a.href;
            a.href = url(w, h, "redir");
            setTimeout(function() { a.href = h }, 500);
        } else if (a.form) { // клик на элемент формы
            if (a.type.match(/submit|button|image/)) { // клик на кнопку, подменяем action на redir'овский, потом по таймауту обратно
                var h = a.form.action;
                a.form.action = url(w, h, "redir", true);
                setTimeout(function() { a.form.action = h }, 500);
            } else { // просто считаем click, создавая iframe и в него грузим счётчик
                click();
            }
        } else if (a.action) { //случай сабмита формы - подменяем его action на redir'овский, назад нам его менять не нужно
            a.action = url(w, a.action, "redir", true);
        } else {
            throw "counter.js: not link and not form!";
        }
    } else { // ссылки нет, просто учёт показа, создаём iframe и в него грузим счётчик
        click();
    }
}

})(window.Lego);

(function(Lego, undefined){
if (!Lego) Lego = window.Lego = {};

/**
 * Параметризованный счётчик клика на ссылку или просто показа.
 * Перевызывает Lego.c(w, a) из counter.js
 *
 * В случае клика подменяет href на redir'овский, потом по таймауту возвращает его обратно.
 *
 * В случае учёта показа динамически создаёт iframe с URL системы учёта.
 *
 * Пример использования:
 *
 * < a href="http://meteoinfo.ru" onclick="Lego.cp(0,1917,'weather.tabs.fotki',this)">Гидрометцентр< /a>
 *
 * или
 *
 * < script type="text/javascript">Lego.cp(0,1917,'weather.tabs.fotki')< /script>
 *
 * или даже
 *
 * < a href="http://meteoinfo.ru" onclick="Lego.cp(0,1917,'weather.tabs.fotki','84=85,732=87')">Гидрометцентр< /a>
 *
 * @param pi    номер проекта (pid)
 * @param ci    номер счётчика (cid)
 * @param p     (optional) path
 * @param v     (optional) vars
 * @param a     (optional) ссылка, клик на которую надо учитывать
 * @param opts  (optional) opts.noRedirect = true обрабатывает клик по обычной ссылке, как по b-link_pseudo_yes
 */
Lego.cp = function(pi, ci, p, v, a, opts) {
    typeof v === 'string' ||
        (opts = a, a = v, v = undefined);
    Lego.c('stred/pid=' + pi + '/cid=' + ci + (p ? '/path=' + p + (v ? '/vars=' + v : '') : ''), a, opts);
};

})(window.Lego);

(function(Lego){
if (!Lego) Lego = window.Lego = {};

/**
 * Параметризованный счётчик клика на ссылку в шапке. Перевызывает cp(w, a) из counter-cp.js
 * Используется для уменьшения веса страницы.
 *
 * Пример использования:
 *
 * < a href="http://meteoinfo.ru" onclick="ch('weather.tabs.fotki',this)">Гидрометцентр< /a>
 *
 * или
 *
 * < script type="text/javascript">ch('weather')< /script>
 *
 * @param p     path
 * @param v     (optional) vars
 * @param a     (optional) ссылка, клик на которую надо учитывать
 */
Lego.ch = function(p, v, a) {
    BEM.blocks['i-global'].param('show-counters') && Lego.cp(0, 2219, p, v, a);
};

})(window.Lego);

/* end: ../../libs/lego/blocks-common/i-counter/i-counter.js */
/* begin: ../../libs/lego/blocks-common/i-common/cookie/i-common__cookie.js */
(function(Lego){
if (!Lego) Lego = window.Lego = {};

Lego.getCookie = function(n) {
    var c = document.cookie;
    if (c.length < 1) return false;

    var b = c.indexOf(n + '=');
    if (b == -1) return false;

    b += (n.length + 1);
    var e = c.indexOf(';', b);

    return decodeURIComponent((e == -1) ? c.substring(b) : c.substring(b, e));
}

})(window.Lego);

/* end: ../../libs/lego/blocks-common/i-common/cookie/i-common__cookie.js */
/* begin: ../../libs/lego/blocks-common/i-common/init/i-common__init.js */
(function($, Lego){
if (!Lego) Lego = window.Lego = {};
// Использует cookie.js и check-session.js. Без них не работает.

/**
 * Инициализирует Лего некоторыми параметрами (для вариативности в пределах разных страниц).
 *
 * @param params объект Лего-параметров, необходимые параметры инициализируются умолчательными значениями
 *        params.login логин текущего пользователя ('' для неавторизованного)
 *        params.locale двухбуквенный код локали в нижнем регистре
 *        params.id идентификатор сервиса
 *        params['show-counters-percent'] процент срабатывания счётчиков Lego.ch() (по умолчанию 100)
 *
 * @return возвращает установленные параметры с учетом умолчательных значений
 */
Lego.init || (Lego.init = function(params) {
    (params = Lego.params = $.extend(
        {
            id : '',
            login : Lego.isSessionValid() ? Lego.getCookie('yandex_login') || '' : '',
            yandexuid : Lego.getCookie('yandexuid'),
            locale : 'ru',
            retpath : window.location.toString(),
            'passport-host' : '//passport.yandex.ru',
            'pass-host' : '//pass.yandex.ru',
            'passport-msg' : params.id,
            'social-host' : '//social.yandex.ru',
            'lego-path' : '/lego',
            'show-counters-percent' : 100
        },
        params,
        Lego.params))
        ['show-counters'] = Math.round(Math.random() * 100) <= params['show-counters-percent'];

    BEM.blocks['i-global']._params || $.extend(BEM.blocks['i-global']._params = {}, params);

    $(function(){
        params.oframebust && Lego.oframebust(params.oframebust);
    });

    return params;
});

Lego.block || (Lego.block = {});

Lego.blockInit || (Lego.blockInit = function(context, blockSelector) {
    context = context || document;
    blockSelector = blockSelector || '.g-js';
    $(context).find(blockSelector).each(function(){
        var block = $(this),
            params = this.onclick ? this.onclick() : {},
            name = params.name || '',
            init = Lego.block[name];
        if (init && !block.data(name)) {
            init.call(block, params);
            block
                .data(name, true)
                .addClass(name + '_js_inited');
        }
    });
});

Lego.blockInitBinded || (Lego.blockInitBinded = !!$(document).ready(function(){ Lego.blockInit() }));

})(jQuery, window.Lego);

/* end: ../../libs/lego/blocks-common/i-common/init/i-common__init.js */
/* begin: ../../libs/lego/blocks-common/i-common/i-common.js */
(function(Lego){
if (!Lego) Lego = window.Lego = {};

Lego.messages = Lego.messages || {};

Lego.message = function(id, text) {
    return Lego.params.locale == 'ru' ? text : (Lego.messages[id] || text);
};

})(window.Lego);
/* end: ../../libs/lego/blocks-common/i-common/i-common.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js */
/* дефолтная инициализация */
$(function() {
    BEM.DOM.init();
});
/* end: ../../libs/lego/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js */
/* begin: ../../blocks-desktop/b-page/b-page.js */
window.blocks = {};

blocks['b-page'] = function(settings, background, width, height) {
    var blocks = require('bem').blocks;

    var result = [
        blocks['b-background'](background),
        blocks['blocker'](),
        blocks['b-content'](settings, width, height),
        blocks['gradient'](),
        blocks['b-paranja'](),
        blocks['b-popupa_type_properties']()
    ];
    if (vb.navigator == 'chromium') {
        result.push(blocks['b-right-choice']());
    }
    return result;
};

function onError(msg, url, line, symbol, error) {
    vb.log('error', msg, url || '', line || '', error && error.stack || '');
    throw new Error(msg);
}

function bindToErrors() {
    if (vb.navigator !== 'ie') {
        window.onerror = onError;
    }
}

window.page = function() {
    var _page = $('body').bem('b-page');

    this.page = function() {
        return _page;
    };

    return _page;
};

(function($, BEM, undefined) {

// FIXME
var initHandler;

channels('api').on('historyThumbChanged', function(thumb) {
    var historyThumbs = cache.get('historyThumbs') || {};

    historyThumbs[thumb.url] = thumb;

    cache.set('historyThumbs', historyThumbs);
});

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-page', /** @lends Block.prototype */ {
    _timer: null,
    _winResizeTimerId: null,
    _windowWidth: 0,
    _windowHeight: 0,
    _scrollbarWidth: 17,
    _scrollbarHeight: 17,
    _boundListeners: {},

    // сколько раз подряд сработал алерт о плохом интернете
    _badConnectionAlertCount: 0,

    _apiEvents: [
        'showRightChoicePopup',
        'thumbChanged',
        'backgroundChanged',
        'historyThumbChanged',
        'bookmarksStateChanged',
        'appsListChanged',
        'closedTabsListChanged',
        'modifierPressed',
        'statisticsModal',
        'action',
        'advertisement',
        'auth'
    ],

    getSuggestMarginLeft: function() {
        return ($('.b-form-input').offset().left + 10) + 'px';
    },

    onSetMod: {
        js: function() {
            var self = this;

            window.cache = new (require('cache').Cache)();
            window.globals = new (require('cache').Cache)();
            // Страница полностью загрузилась
            $(function() {
                self._onLoad();
            });

            // Ресайзим страницу
            this.bindToWin('resize', $.throttle(self._onWinResize, 50));

            this.bindToDoc('contextmenu', this._onContextmenu, this);

            // VB-2723
            this.bindTo('mousedown', function(e) {
                var link = $(e.target).closest('a');

                if (link.length)
                    vb.onLinkClicked(link.attr('href') || '');
            });

            // Подписываемся на специфичные для Fx события (JIRA#VB-2230)
            this.bindToWin('pagehide', self._onPageHide.bind(self));

            // нельзя не подписываться на событие, хотя оно нужно только для ие,
            // ибо иначе придется вставлять проверки на браузер при вызове этой ф-и
            //
            // TODO сделать stopDnD и startDnD невлияющими на не-ие браузеры,
            // чтобы эта подписка была ненужна
            this.bindToWin('mouseup', function() {
                this.startDnD();
            });
        },

        'settings-shown': function(modName, modVal) {
            if (modVal === 'yes') {
                this.findBlockInside('blocker').delMod('disabled');
            } else {
                this.findBlockInside('blocker').setMod('disabled', 'yes');
            }
        },

        page: {
            index: function() {
                var self = this,
                    winSize = this.__self.getWindowSize(),
                    Lib = require('lib'),
                    BEMHTML = require('bemhtml'),
                    blocks = require('bem').blocks,
                    BEM = require('bem').BEM,
                    init = false,
                    document = require('document'),
                    window = require('window'),
                    screen = require('screen'),
                    $de = $(document.documentElement);

                if (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9) {
                    $(document).on("keydown keypress", function(e) {
                        if (e.keyCode !== 13)
                            return true;

                        var classes = $(document.activeElement).attr('class');

                        var matched = [
                            'b-decor',
                            'b-vb-head',
                            'b-vb__td',
                            'b-tumbs',
                            'b-sync',
                            'i-ua',
                            'b-content',
                            'b-page',
                            'b-vb-foot__content'
                        ].some(function(className) {
                            return classes.indexOf(className) !== -1;
                        });

                        return !matched;
                    });
                }

                // Выставляем класс на тег <html/>
                $de.addClass('page_index');

                // IE10
                if (vb.navigatorMajorVersion === 10) {
                    $de.addClass('ie10');
                    this.setMod('ie', '10');
                }

                var settings = cache.get('settings'),
                    background = cache.get('background'),
                    BEMJSON = blocks['b-page'](settings, background, winSize.width, winSize.height);

                if (settings.experiments && settings.experiments.some(function(exp) { 
                    return (exp.id == 'search-bar-design') && !!exp.type;
                })) {
                    this.setMod('searchbox', 'custo');
                }

                // VB-314
                this.setMod('bookmarks', !settings.showBookmarks && 'no' || '');

                this.setMod('search', (settings.searchStatus === 2) ? 'yes' : '');

                this.setMod('banner', (settings.searchStatus === 3) ? 'yes' : '');

                // VB-711
                this.setMod('os', vb.osName);

                this.setMod('theme', cache.get('background').color);

                var html = BEMHTML.apply(BEMJSON);
                this.domElem.html(html);

                // nextTick используем, чтобы нарисовать тумбы в новом потоке
                this.afterCurrentEvent(function () {
                    BEM.DOM.init();
                });
            }
        }
    },

    showSettings: function () {
        $('.b-tumb').trigger('mouseleave');

        var popupa = this.getSettingsBlock(),
            _this = this;

        vb.requestSettings(function(settings) {
            page().saveSettings(settings, true);

            var blocks = require('bem').blocks,
                BEMHTML = require('bemhtml'),
                json  = blocks['b-properties-popup'](settings),
                html = BEMHTML.apply(json);

            popupa.setContent(html, function() {
                popupa.show(_this.findBlockOn('i-action').findElem('settings'));
            });
            _this.setMod('settings-shown', 'yes');
        });
    },

    offerRestoreThumbs: function() {
        var thumbsToRestore = cache.get('thumbsToRestore');
        cache.set('thumbsToRestore', null);
        this.findBlockInside('b-restore-tumbs-popup').showPopup(thumbsToRestore);

        if (thumbsToRestore) {
            this._lastShowRestorePopupTime = (new Date()).valueOf();
        } else {
            this._lastShowRestorePopupTime = 0;
        }
    },

    hideRestoreThumbsPopup: function(reason, testTime) {
        if (!this.hasMod('restorepopup')) {
            return;
        }

        if (testTime && ((this._lastShowRestorePopupTime || 0) > (new Date()).valueOf() - 1000)) {
            return;
        }

        this._lastShowRestorePopupTime = 0;
        this.delMod('restorepopup');

        var statParam = 'thumbdelnotify.';

        switch (reason) {
            case 'accept':
            case 'undo':
                statParam += reason;
                this.setStatisticsTimer(statParam, statParam, 0);
                break;
        }
    },

    updateWidth: function() {
        this.setMod('width', this.getLayout().x >= 5 ? 'big' : 'normal');
    },

    stopDnD: function() {
        this.findBlockInside('b-tumb').stopDnD();

        return this;
    },

    startDnD: function() {
        var thumb = this.findBlockInside('b-tumb');

        if (thumb) {
            thumb.startDnD();
        }

        return this;
    },

    hideSettings: function () {
        var popup = this.findBlockInside({
            block: 'b-popupa',
            modName: 'type',
            modVal: 'properties'
        });

        if (popup && popup.isShowed()) {
            popup.hide();
        }
    },

    afterInit: function() {
        this.afterInit = function() {};

        setTimeout(function() {
            vb.scrollInfo($.pageHasVerticalScroll());
            require('preloader').load(
                {
                    block: 'b-spin',
                    mods: {
                        progress: 'yes'
                    }
                },
                {
                    block: 'app',
                    elem: 'btn'
                },
                {
                    block: 'app',
                    elem: 'btn',
                    elemMods: {
                        hovered: 'yes'
                    }
                }
            );
        }, 0);

        this.afterCurrentEvent(function() {
            try {
                this._apiChannel.emit('advertisement', cache.get('advertisement'));
            } catch (err) {
                vb.log('error', err.message, 'advertisement');
            }

            try {
                this._apiChannel.emit('auth', cache.get('auth'));
            } catch (err) {
                vb.log('error', err.message, 'auth');
            }
        });
    },

    /**
     * показаны ли настройки вз
     *
     * @returns {Boolean}
     */
    isSettingsShown: function () {
        var settings = this.getSettingsBlock();

        return settings && settings.isShowed() || false;
    },

    getSettingsBlock: function() {
        return this.findBlockInside({block: 'b-popupa', modName: 'type', modVal: 'properties'});
    },

    showStatPopup: function() {
        var popup = this.findBlockInside('stat-popup');

        if (popup) {
            return popup.show();
        }

        var BEMHTML = require('bemhtml'),
            blocks = require('bem').blocks,
            _this = this;

        BEM.DOM.append(_this.domElem, BEMHTML.apply(blocks['stat-popup'](cache.get('settings'))));

        this.findBlockInside('b-paranja').delMod('hide');
    },

    /**
     * Значения текущих чекбоксов/слайдера
     *
     * @returns {Object}
     */
    getCurrentSettings: function () {
        var Lib = require('lib'),
            settings = {},
            bSelectTheme = this.findBlockInside('b-select-theme'),
            currentImage = bSelectTheme.findElem('item', 'state', 'current'),
            userImage = bSelectTheme.findElem('item', 'user', 'yes'),
            bgImage = '';

        if (currentImage && currentImage.length) {
            bgImage = bSelectTheme.elemParams(currentImage).id;
        }

        if (userImage && userImage.length)
            settings.selectedBgImage = bSelectTheme.getMod(userImage, 'state') === 'current' ? 'user' : bgImage;
        else
            settings.selectedBgImage = bgImage;

        settings.thumbsCount = this.findBlockInside({block: 'b-form-slider'}).val();

        try {
            settings.showSearchForm = this.findBlockInside({block: 'b-form-checkbox', modName: 'name', modVal: 'show-search'}).isChecked();
            settings.showBookmarks = this.findBlockInside({block: 'b-form-checkbox', modName: 'name', modVal: 'show-bookmarks'}).isChecked();
            settings.showAdvertisement = this.findBlockInside({block: 'b-form-checkbox', modName: 'name', modVal: 'show-advertisement'}).isChecked();
            settings.thumbStyle = parseInt(this.findBlockInside({block: 'b-form-select', modName: 'action', modVal: 'set-thumbs-style'}).val(), 10);
        } catch (err) {
            // чекбоксы скрыты, берем дефолтные значения
            settings = $.extend(cache.get('settings'), settings);
        }

        return settings;
    },

    /**
     * Отправка настроек в бекенд
     *
     * @param {Boolean} setInitFlag ставить ли флаг о том, что ожидается init
     */
    applySettings: function (setInitFlag) {
        if (!this.isSettingsShown())
            return;

        var settings = this.getCurrentSettings();

        // ставим флаг, чтобы при ответе бекенда настройки не закрылись
        setInitFlag && this.initFlag.inc();
        vb.applySettings(settings.showBookmarks, settings.showSearchForm, settings.showAdvertisement, settings.thumbStyle);
    },

    _onLoad: function() {
        bindToErrors();

        var self = this,
            BEM = require('bem').BEM;

        initHandler = function(settings) {
            self._onInit(settings);
        };
        // Инициализация страницы
        vb.onRequest.addListener('init', initHandler);

        var apiChannel = this._apiChannel = channels('api');

        this._apiEvents.forEach(function(eventName) {
            var listener = function() {
                apiChannel.emit(eventName, arguments, true);

            };
            this._boundListeners[eventName] = listener;
            vb.onRequest.addListener(eventName, listener);

            var methodName = '_on' + eventName.charAt(0).toUpperCase() + eventName.substr(1);

            if (this[methodName]) {
                apiChannel.on(eventName, this[methodName], this);
            }
        }, this);

        window.onbeforeunload = function() {
            var tasks = page()._statisticTasks;

            for (var taskName in tasks) {
                page().sendStat(taskName);
            }

            if (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9) {
                $('*').remove();
                BEM.DOM.destruct($('body'));
                BEM.DOM.destruct($(document).unbind());
                if (typeof(window.CollectGarbage) === "function") {
                    window.CollectGarbage();
                }
            }
        };
        // Принудительно запрашиваем инициализацию
        vb.requestInit();
    },

    _onContextmenu: function(e) {
        var $target = $(e.target),
            index = -1,
            thumb = $target.closest('.b-tumb'),
            bThumb = thumb.length && thumb.bem('b-tumb') || null,
            state = 0,
            thumbParams = {};

        if (bThumb && !bThumb.isSuggest && !bThumb.params.empty && (bThumb.getMod('editing') != 'yes')) {
            thumbParams = bThumb.params;

            // клон тумбы для драгндропа не содержит params
            if (thumbParams) {
                index = thumbParams.index;
            }
        }

        if (page().isSettingsShown()) {
            state = 1;
        }

        if (state === 0) {
            if (bThumb) {
                if (bThumb.__self.isSettingsShown()) {
                    state = 2;
                }
            } else {
                var setting = page().findBlockInside('b-setting');

                if (setting && !setting.hasMod('hide', 'yes')) {
                    state = 2;
                }
            }
        }

        var p = page();
        p.findBlocksInside('i-popup').concat(p.findBlocksInside('popup')).forEach(function (popup) {
            popup.hide();
        });

        vb.onContextmenu(index, state, (thumbParams || {}).item);
    },

    _onPageShow: function() {
        bindToErrors();
        this._onLoad();
        this.unbindFromWin('pageshow');
    },

    _onPageHide: function() {
        var apiChannel = this._apiChannel;

        this._apiEvents.forEach(function(evtName) {
            var methodName = '_on' + evtName.charAt(0).toUpperCase() + evtName.substr(1);
            vb.onRequest.removeListener(evtName, this._boundListeners[evtName]);
            apiChannel.off(evtName, this[methodName]);
        }, this);

        window.onerror = null;

        this._boundListeners['pageshow'] = this._boundListeners['pageshow'] || this._onPageShow.bind(this);
        this.bindToWin('pageshow', this._boundListeners['pageshow']);
    },

    _onWinResize: function() {
        var settings = cache.get('settings');

        // в windows может прилететь ресайз, когда настройки еще не пришли
        if (!settings)
            return;

        var self = this,
            winSize = self.__self.getWindowSize(),
            isNull = !self._windowWidth && !self._windowHeight;

        // Проверяем изменились ли размеры окна
        // Из-за особенностей ИЕ проверяем так же размеры окна с и без учета скролбара
        if ((self._windowWidth !== winSize.width && self._windowWidth !== (winSize.width + self._scrollbarWidth) && self._windowWidth !== (winSize.width - self._scrollbarWidth))
            || (self._windowHeight !== winSize.height && self._windowHeight !== (winSize.height + self._scrollbarHeight) && self._windowHeight !== (winSize.height - self._scrollbarHeight))
            || isNull) {
            self._windowWidth = winSize.width;
            self._windowHeight = winSize.height;

            vb.scrollInfo($.pageHasVerticalScroll());

            var bSetting = this.findBlockInside('b-setting'),
                Lib = require('lib'),
                BEMHTML = require('bemhtml'),
                size = Lib.getThumbSize(),
                thumbModSize = Lib.getThumbSizeMod(size),
                thumbs = this.findBlocksInside('b-tumb');

            thumbs && thumbs.forEach(function(thumb) {
                !thumb.isSuggest && thumb.setMod('size', thumbModSize);
            });

            if (bSetting) {
                bSetting.positionTail();
                bSetting.findParanja();
            }

            channels('dom').emit('resize');
        }
    },

    saveSettings: function(settings, isUserSettings) {
        [
            'thumbs',
            'background',
            'sync',
            'auth',
            'advertisement'
        ].forEach(function(propName) {
            if (propName in settings) {
                cache.set(propName, settings[propName]);
                delete settings[propName];
            }
        });

        cache.set('settings', $.extend(cache.get('settings'), settings));
    },

    _redraw: function(settings) {
        if (!this.initFlag.get()) {
            this.hideSettings();
        } else {
            this.initFlag.dec();
        }

        this.updateWidth();

        var oldSettings = cache.get('settings'),
            oldThumbs = cache.get('thumbs'),
            blocks = require('bem').blocks,
            BEMHTML = require('bemhtml'),
            Lib = require('lib'),
            isSearchChanged = this._isSearchChanged(oldSettings, settings),
            isBookmarksChanged = this._isBookmarksChanged(oldSettings, settings),
            winSize = this.__self.getWindowSize();

        this.saveSettings(settings);

        var newThumbs = cache.get('thumbs'),
            layout = this.getLayout();

        // Нужно учитывать, что в настройках количество тумб может быть указано меньше,
        // чем количество тумб, пришедших от бэкенда.
        // Если настройки открыты, то тумбы для отрисовки обрезаем по тому значению,
        // которое установлено ползунком соответствующей настройки.
        if (this.isSettingsShown()) {
            var settingsThumbsCount = this.getCurrentSettings().thumbsCount;
            Object.keys(newThumbs).forEach(function (key, index) {
                if (index >= settingsThumbsCount) {
                    delete newThumbs[key];
                }
            });
        }

        if (isBookmarksChanged) {
            if (settings.showBookmarks) {
                this.setMod('bookmarks', 'yes');
                BEM.DOM.prepend(this.findBlockInside('b-content').domElem, BEMHTML.apply(blocks['b-bookmarks'](settings, winSize.width, winSize.height)));
            } else {
                this.setMod('bookmarks', 'no');
                this.findAndDestruct('b-bookmarks');
            }
        }

        if (isSearchChanged) {
            var bHead = this.findBlockInside('b-vb-head');
            // не показывать
            if (settings.searchStatus === 1) {
                bHead.findElem('logo').remove();
                bHead.findElem('search').remove();
                this.findAndDestruct('b-question');
                this.setMod('banner', 'no');
                this.delMod('search');
            // показывать
            } else if (settings.searchStatus === 2) {
                this.delMod('banner');
                BEM.DOM.append(
                    this.findBlockInside('b-vb-head').domElem,
                    BEMHTML.apply(blocks['b-vb-head__content'](settings))
                );
                this.setMod('search', 'yes');
                this.findAndDestruct('b-question');
            // обучалка
            } else {
                if (!$('.b-question').length) {
                    BEM.DOM.append(bHead.domElem, BEMHTML.apply(blocks['b-question']()));
                }

                this.setMod('banner', 'yes');
                bHead.findElem('logo').remove();
                bHead.findElem('search').remove();
                this.delMod('search');
            }
        }

        this.findAndDestruct('b-tumbs');
        var td = this.findBlockInside('b-vb').findElem('content').find('td');

        BEM.DOM.prepend(td, BEMHTML.apply(blocks['b-tumbs'](newThumbs, settings)));
        blocks['b-tumb'].saveRendered(newThumbs);

        this.findBlockInside('b-vb-foot').repaint();

        if (this.isSettingsShown() && !this.getMod('slider-clicked')) {
            this.getSettingsBlock().pos();
        }

        var thumbSettings = this.findBlockInside('b-setting');

        if (thumbSettings) {
            thumbSettings.setMod('hide', 'yes');
        }

        vb.scrollInfo($.pageHasVerticalScroll());
        channels('dom').emit('redraw');
    },

    _onInit: function(settings) {
        globals.set('initedWithBackgroundId', settings.background.id);
        cache.reset('editingThumb', true);

        var self = this,
            BEM = require('bem').BEM;

        // Локализуем заголовок
        this.__self.doc[0].title = vb.getLocalizedString('app.name');

        // Выставляем текущие настройки пришедшие в init и сохраняем в кэш настройки пользователя
        for (var key in settings.thumbs) {
            if ($.isEmptyObject(settings.thumbs[key]))
                delete settings.thumbs[key];
        }

        this.saveSettings(settings);
        this.updateWidth();

        self.delMod('page');
        self.setMod('page', 'index');
        this.setMod('bookmarks', settings.showBookmarks ? 'yes' : 'no');

        //прячем обучалку
        if (settings.searchStatus === 1 ) {
            self.setMod('banner', 'no');
            this.delMod('search');
        }

        vb.onRequest.removeListener('init', initHandler);
        vb.onRequest.addListener('init', this._redraw.bind(this));
        blocks['b-tumb'].saveRendered(cache.get('thumbs'));
    },

    _isSearchChanged: function (oldSettings, settings) {
        return oldSettings.searchStatus !== settings.searchStatus;
    },

    _isBookmarksChanged: function (oldSettings, settings) {
        return oldSettings.showBookmarks !== settings.showBookmarks;
    },

    // FIXME
    initFlag: {
        inc: function() {
            var val = parseInt(page().getMod(this._modName) || 0, 10);
            val++;
            page().setMod(this._modName, String(val));
            return val;
        },

        dec: function() {
            var val = parseInt(page().getMod(this._modName) || 0, 10);

            val--;
            val = val < 0 ? 0 : val;
            page().setMod(this._modName, String(val));
            return val;
        },

        get: function() {
            return parseInt(page().getMod(this._modName) || 0, 10);
        },

        _modName: 'init-waiting-count'
    },

    _statisticTasks: {},

    setStatisticsTimer: function(name, statParam, ms) {
        var _this = this,
            task = this._statisticTasks[name] = this._statisticTasks[name] || {};

        if (task && task.timerId)
            clearTimeout(task.timerId);

        task.fn = function() {
            _this.sendStat(name);
        };

        task.param = statParam;

        task.timerId = setTimeout(task.fn, ms);
    },

    sendStat: function(name) {
        var task = this._statisticTasks[name];

        if (task)
            clearTimeout(task.timerId);

        vb.stat(task.param);
        delete this._statisticTasks[name];
    },

    createThumb: function(fromContextMenu) {
        var layout = this.getLayout(),
            thumb = this.findBlockInside('b-tumbs').findBlockInside({
            block: 'b-tumb',
            modName: 'index',
            modVal: '' + layout.thumbsCount
        });

        if (thumb) {
            thumb.add(fromContextMenu || false);
        } else {
            var BEMHTML = require('bemhtml'),
                blocks = require('bem').blocks,
                thumbsHTML = BEMHTML.apply(blocks['b-tumbs'](cache.get('thumbs'), true, this.getLayoutOfThumbsNumber(layout.thumbsCount + 1)));

            this.findAndDestruct('b-tumbs');
            $('.b-vb__content .b-vb__td').prepend(thumbsHTML);
            BEM.DOM.init();
            thumb = this.findBlockInside('b-tumbs').findBlockInside({
                block: 'b-tumb',
                modName: 'index',
                modVal: '' + layout.thumbsCount
            });
            thumb.add(fromContextMenu || false);
        }
        channels('dom').emit('layoutChanged');
    }
});

}(jQuery, BEM));

/* end: ../../blocks-desktop/b-page/b-page.js */
/* begin: ../../libs/lego/blocks-desktop/i-oframebust/i-oframebust.js */
(function(Lego) {

    Lego = Lego || {};

    Lego.oframebustMatchDomain = function(whitelist, domain) {
        whitelist = Object.prototype.toString.call(whitelist) === "[object Array]" ? whitelist : (function() {
            var arr = [];
            for (var k in whitelist) {
                whitelist.hasOwnProperty(k) && arr.push(k);
            }
            return arr;
        }());

        for (var i = 0, l = whitelist.length; i < l; i++) {
            var d = whitelist[i];
            if (typeof(d) == 'string') {
                //поддержка wildcard
                if (/(\?|\*)/.test(d)) {
                    var re = d.replace(/\./g, '\\.').replace(/\*/g, '.*').replace(/\?/g, '\.{1}');
                    if ((new RegExp('^' + re + '$')).test(domain)) return true;
                } else if (domain == d) {
                    return true; //обычная строка
                }
            } else {
                //предполагаем, что d -- regexp
                try {
                    if (d.test(domain)) return true;
                } catch(e) {}
            }
        }
    }

})(window.Lego);

/* end: ../../libs/lego/blocks-desktop/i-oframebust/i-oframebust.js */
/* begin: ../../libs/lego/blocks-desktop/i-oframebust/_type/i-oframebust_type_referrer.js */
(function(Lego) {

    Lego = Lego || {};

    Lego.oframebust = function(whitelist) {
        if (window.top.location != window.location) {
            var match = document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);

            //не выпрыгиваем для тех, у кого скрыт referrer
            if (!match) return;

            !Lego.oframebustMatchDomain(whitelist, match[1]) && (window.top.location = window.location);
        }
    };

})(window.Lego);

/* end: ../../libs/lego/blocks-desktop/i-oframebust/_type/i-oframebust_type_referrer.js */
/* begin: ../../blocks-desktop/b-page/api/b-page__api.js */
BEM.DOM.decl('b-page', {

    _onStatisticsModal: function() {
        this.showStatPopup();
    },

    _onBackgroundChanged: function(background) {
        var selectTheme = this.findBlockInside('b-select-theme');

        if (background.error) {
            this._badConnectionAlertCount++;

            // на 10 раз показываем веселого Долана
            // в linux не красиво рисуется картинка
            if (
                    this._badConnectionAlertCount === 10 &&
                    vb.locale === 'ru' &&
                    (vb.navigator !== 'ie' || vb.navigatorMajorVersion > 8) &&
                    vb.osName !== 'linux'
                ) {
                require('modals').alert({
                    block: 'b-icon',
                    mods: {
                        type: 'dolan'
                    }
                });
            } else {
                require('modals').alert(vb.getLocalizedString('app.noInternet'));
            }
            selectTheme && selectTheme.rejectBackground();
            return;
        }

        this._badConnectionAlertCount = 0;

        this.delMod('theme');
        this.setMod('theme', background.color);

        var BEMHTML = require('bemhtml');

        this.findBlockInside('b-background').change(background);

        cache.set('background', background);

        selectTheme && selectTheme.selectBackground();
    },

    _onAppsListChanged: function(params) {
        var link = this.findBlockInside({
            block: 'b-link',
            modName: 'open',
            modVal: 'apps'
        });

        // событие пришло до отрисовки страницы
        if (!link)
            return;

        if (params.empty) {
            link.setMod('disabled', 'yes');
        } else {
            link.delMod('disabled');
        }
    },

    _onClosedTabsListChanged: function (params) {
        var link = this.findBlockInside({
            block: 'b-link',
            modName: 'open',
            modVal: 'bookmark'
        });

        if (!link)
            return;

        if (params.empty) {
            link.setMod('disabled', 'yes');
        } else {
            link.delMod('disabled');
        }
    },

    /**
     * Получаем различия между тумбой из хранлища и пришедшей в thumbChanged
     *
     * @param {Object} originalThumb Тумба из хранилища
     * @param {Object} newThumb Новая тумба для сравнения
     * @private
     * @return {Object}
     */
    _thumbChangesDiff: function(originalThumb, newThumb) {
        var diff = {},
            keys, key, i, len;

        if ((originalThumb && originalThumb.url && !originalThumb.pinned && newThumb.pinned && !newThumb.url))
            return originalThumb;

        // Проходимся по всем ключам из newThumb
        for (i = 0, keys = Object.keys(newThumb || {}), len = keys.length; i < len; i++) {
            key = keys[i];

            // Если его нет в оригинальном объекте, то считаем что он добавился
            if (!originalThumb || !originalThumb.hasOwnProperty(key)) {
                diff[key] = newThumb[key];

            // Если параметр есть в обоих объектах сравниваем изменился ли он
            } else if (originalThumb.hasOwnProperty(key) && newThumb.hasOwnProperty(key)) {
                if (originalThumb[key] !== newThumb[key]) {
                    diff[key] = newThumb[key];
                }
            }
        }

        // убрались скриншоты
        if (originalThumb && originalThumb.screenshot && !newThumb.screenshot)
            diff.screenshot = true;

        return diff;
    },

    _onBookmarksStateChanged: function(bookmarks) {
        var BEM = require('bem').BEM;

        // Сохраняем загруженные заградки в кэш
        cache.set('bookmarks', bookmarks);

        // Вызываем кастомное событие из-под b-page`а
        this.trigger('bookmarksStateChanged');
    },

    _onAction: function(e) {
        var thumb,
            settings;

        switch (e.type) {
            case 'closePopups':
                settings = page().findBlockInside('b-setting');
                if (settings && !settings.hasMod('hide', 'yes')) {
                    settings.setMod('hide', 'yes');
                }
                require('modals').hideModals();
                break;

            case "openSettings":
                if (!this.isSettingsShown()) {
                    this.showSettings();
                }

                break;

            case "editThumb":
                var thumbs = cache.get('thumbs');

                if (!thumbs[e.thumb]) {
                    settings = page().findBlockInside('b-setting');

                    if (settings && !settings.hasMod('hide', 'yes')) {
                        return;
                    }

                    page().createThumb(true);
                    return;
                }

                thumb = this.findBlockInside({
                    block: 'b-tumb',
                    modName: 'index',
                    modVal: '' + e.thumb
                });

                if (thumb) {
                    if (thumb.__self.isSettingsShown()) {
                        return;
                    }

                    if (thumb.params.empty) {
                        thumb.add(true);
                    } else {
                        thumb.set(true);
                    }
                }

                break;

            case "removeThumb":
                thumb = this.findBlockInside({
                    block: 'b-tumb',
                    modName: 'index',
                    modVal: '' + e.thumb
                });

                if (thumb) {
                    thumb.remove(true);
                    this.hideRestoreThumbsPopup('removeThumb');
                }

                break;

            case "closeSettings":
                this.hideSettings();
                var settingsBlock = this.findBlockInside({block: 'b-setting'});
                if (settingsBlock) {
                    settingsBlock.setMod('hide', 'yes');
                }

                break;
        }

    }

});

/* end: ../../blocks-desktop/b-page/api/b-page__api.js */
/* begin: ../../blocks-desktop/b-content/b-content.js */
blocks['b-content'] = function(data, width, height) {
    var blocks = require('bem').blocks;

    return {
        block: 'b-content',
        js: true,
        mods: {
            type: 'index'
        },
        content: [
            blocks['b-decor'](data),
            {
                block: 'b-auth'
            },
            blocks['b-bookmarks'](data, width, height),
            blocks['b-vb'](data, width, height),
            blocks['b-vb-foot'](data),
            {
                block: 'b-content',
                elem: 'bg'
            }
        ]
    };
};

BEM.DOM.decl('b-content',{});

/* end: ../../blocks-desktop/b-content/b-content.js */
/* begin: ../../blocks-desktop/b-background/b-background.js */
(function() {

// VB-238
function fixURL(URL) {
    return URL.replace(/\\/g, '/');
}

blocks['b-background'] = function(background) {
    return [
        {
            block: 'b-background',
            mods: {
                ff: 'yes'
            },
            js: {
                backgroundImage: background.image
            }
        },
        // TODO добавить условие на ие
        '<!--[if lt IE 8]><v:rect id="bg" stroked="false" class="vml b-background b-background_ie_yes"><v:fill type="frame" aspect="atleast" src="' + background.image + '" class="vml" style="position:absolute;left:0;top:0;width:100%;height:100%;"></v:fill></v:rect><![endif]-->'
    ];
};

BEM.DOM.decl({block: 'b-background', modName: 'ff', modVal: 'yes'}, {
    onSetMod: {
        js: function() {
            var url = fixURL(this.params.backgroundImage);

            this.domElem.css({
                'background-image': 'url("' + url + '")'
            });
        }
    },

    /**
     * Смена фона
     *
     * @param {Background} background новый фон
     */
    change: function(background) {
        var newURL = fixURL(background.image);

        this.domElem.css({
            'background-image': 'url("' + newURL + '")'
        });
        $('fill').attr('src', newURL);
    },

    destruct: function() {
        $('rect').remove();
        this.__base.apply(this, arguments);
    }
});
})();

/* end: ../../blocks-desktop/b-background/b-background.js */
/* begin: ../../blocks-desktop/b-tumbs/b-tumbs.js */
blocks['b-tumbs'] = function(thumbs, withEmptyRow, customLayout) {
    var blocks = require('bem').blocks,
        Lib = require('lib'),
        layout = page().getLayout(),
        size = Lib.getThumbSize(customLayout);

    if (withEmptyRow === true) {
        layout = page().getLayoutOfThumbsNumber(layout.thumbsCount + 1);
    }

    return {
        block: 'b-tumbs',
        js: true,
        mods: {
            type: 'index',
            'empty-row': withEmptyRow === true ? 'yes' : ''
        },
        content: (function() {
            var rows = [],
                i = 0,
                row,
                item;

            for (var y = 0; y < layout.y; y++) {
                row = [];

                for (var x = 0; x < layout.x; x++) {
                    item = null;
                    if (thumbs[i]) {
                        item = thumbs[i];
                    }
                    row.push({
                        elem: 'item',
                        mods: {
                            editing: (cache.get('editingThumb') || {}).index == i ? 'yes' : 'no',
                            index: i + ''
                        },
                        content: blocks['b-tumb'](item, i, size)
                    });
                    i++;
                }

                rows.push({
                    elem: 'row',
                    content: row
                });
            }

            return rows;
        })()
    };
};

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-tumbs', /** @lends Block.prototype */ {
    onSetMod: {
        js: function() {
            /**
             *
             * @type {Block}
             */
            var self = this,
                BEM = require('bem').BEM,
                bPage = self.findBlockOutside('b-page'),
                ie78 = (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9);

            channels('api').on('modifierPressed', this._onModifierPressed, this);
        },

        'show-hint': function(modName, modVal, oldVal) {
            // TODO вынести подсказки из тумб!
            if (modVal === 'yes') {
                this.findBlocksInside('b-tumb').forEach(function(thumb) {
                    thumb.setMod('show-hint', 'yes');
                });
            } else if (modVal === '') {
                this.findBlocksInside('b-tumb').forEach(function(thumb) {
                    thumb.delMod('show-hint');
                });
            }
        }

    },

    _onModifierPressed: function(data) {
        if (data.pressed) {
            this.showHints();
        } else {
            this.hideHints();
        }
    },

    destruct: function() {
        var BEM = require('bem').BEM;

        this.findBlocksInside('b-tumb').some(function(block) {
            block.__self._bThumbs = null;
            return true;
        });

        channels('api').off('modifierPressed', this._onModifierPressed);

        // Вызывавем базовый метод
        this.__base.apply(this, arguments);
    },

    showHints: function() {
        this.setMod('show-hint', 'yes');
    },

    hideHints: function() {
        this.delMod('show-hint');
    }
});

/* end: ../../blocks-desktop/b-tumbs/b-tumbs.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-jquery/__leftclick/i-jquery__leftclick.js */
/**
 * leftClick event plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 */

(function($) {

var leftClick = $.event.special.leftclick = {

    setup : function() {

        $(this).bind('click', leftClick.handler);

    },

    teardown : function() {

        $(this).unbind('click', leftClick.handler);

    },

    handler : function(e) {

        if(!e.button) {
            e.type = 'leftclick';
            $.event.handle.apply(this, arguments);
            e.type = 'click';
        }

    }

};

})(jQuery);
/* end: ../../libs/lego/bem-bl/blocks-common/i-jquery/__leftclick/i-jquery__leftclick.js */
/* begin: ../../libs/lego/blocks-desktop/b-popupa/b-popupa.js */
(function($) {

var ALLOWED_DIRECTIONS = [
        'down-right', 'down', 'down-left', 'up', 'up-right', 'up-left',
        'right-down', 'right', 'right-up', 'left-down', 'left', 'left-up'
    ];

/**
 @namespace JS-API блока b-popupa
 @name block */

BEM.DOM.decl('b-popupa',  /** @lends block.prototype */ {

    onSetMod : {

        'js' : function() {

            /**
             * DOM-элемент, для которого открывается попап
             * @private
             * @type jQuery
             */
            this._owner = null;

            /**
             * Состояние видимости
             * @private
             * @type Boolean
             */
            this._isShowed = false;

            /**
             * Приоритетное направление для открытия попапа
             * @private
             * @type String
             */
            this._direction = this.getMod('direction') || 'down';

            /**
             * Последнее удачное направление открытия (когда попап полностью попал в окно)
             * @private
             * @type String
             */
            this._lastDirection = null;

            /**
             * Наличие/Отсутствие хвостика у блока
             * @private
             * @type Boolean
             */
            this._hasTail = !!this.elem('tail').length;

            if(!this._hasTail){
                // Обнуляем размеры хвостика в js параметрах блока при его отсутствии
                Object.keys(this.params).forEach(function(key){
                    (key.indexOf('tail') === 0) && (this.params[key] = 0);
                }, this);
            }

        }

    },

    /**
     * Показывает попап
     * @param {jQuery|Object} owner DOM-элемент или координаты { left : x, top : y }, относительно которых рассчитывается положение
     */
    show : function(owner) {

        if(!this._isShowed || this._owner !== owner) {
            this._owner = owner;
            this._getUnder().show({ left : -10000, top : -10000 });
            this.pos();
            this._getUnder().setMod('animate','yes');
        }

        return this;

    },

    /**
     * Скрывает попап
     */
    hide : function() {

        this._isShowed && this._getUnder().hide();
        return this;

    },

    /**
     * Показывает/скрывает попап в зависимости от текущего состояния
     * @param {jQuery|Object} owner DOM-элемент или координаты { left : x, top : y }, относительно которых рассчитывается положение
     */
    toggle : function(owner) {

        return this.isShowed()?
            this.hide() :
            this.show(owner);

    },

    /**
     * Позиционирует попап
     */
    _pos : function() {

        var params = this._calcParams(this._owner);

        this._hasTail && this.elem('tail').css(params.tailOffsets);

        this
            .setMod('direction', params.direction)
            ._getUnder().show(params.offsets);

        return this;

    },

    /**
     * Позиционирует попап, если он виден
     */
    pos : function() {

        if (!this._isShowed)
            return this;

        return this._pos();
    },

    /**
     * Возвращает состояние видимости попапа
     * @returns {Boolean}
     */
    isShowed : function() {

        return this._isShowed;

    },

    /**
     * Устанавливает приоритетное направление открытия попапа
     * @param {String} direction направление (up|right|down|left)
     */
    setDirection : function(direction) {

        if(this._direction != direction) {
            this._direction = direction;
            this.isShowed() && this.pos();
        }

    },

    /**
     * Устанавливает контент попапа
     * @param {String|jQuery} content контент
     * @param {Function} [callback] обработчик, вызываемый после инициализации
     * @param {Object} [callbackCtx] контекст обработчика
     */
    setContent : function(content, callback, callbackCtx) {

        BEM.DOM.update(this.elem('content'), content, callback, callbackCtx);
        return this.isShowed()? this.pos() : this;

    },

    /**
     * Проверяет, является ли владелец попапа DOM-элементом
     * @returns {Boolean}
     */
    _isOwnerNode : function() {

        return !!(this._owner && this._owner.jquery);

    },

    /**
     * Вычисляет необходимые метрики для расчета направления открытия попапа
     * @private
     * @returns {Object}
     */
    _calcDimensions : function() {

        var posElem = this._getUnder().domElem,
            underElem = this._getUnder()._getUnder(),
            win = this.__self.win,
            owner = this._owner,
            isOwnerNode = this._isOwnerNode(),
            ownerOffset = isOwnerNode? owner.offset() : owner,
            ownerWidth = isOwnerNode? owner.outerWidth() : 0,
            ownerHeight = isOwnerNode? owner.outerHeight() : 0,
            scrollLeft = win.scrollLeft(),
            scrollTop = win.scrollTop(),
            winSize = this.__self.getWindowSize(),
            borderWidth = parseInt(this.elem('content').css('border-top-width'), 10);

        return {
            ownerWidth: ownerWidth,
            ownerHeight: ownerHeight,
            ownerLeft: ownerOffset.left,
            ownerTop: ownerOffset.top,
            ownerRight: ownerOffset.left + ownerWidth,
            ownerBottom: ownerOffset.top + ownerHeight,
            ownerHorizMiddle: ownerOffset.left + ownerWidth / 2,
            ownerVertMiddle: ownerOffset.top + ownerHeight / 2,
            posWidth: posElem.outerWidth(),
            posHeight: posElem.outerHeight(),
            underWidth: underElem.outerWidth(),
            underHeight: underElem.outerHeight(),
            borderWidth: isNaN(borderWidth)? 0: borderWidth,
            windowLeft: scrollLeft,
            windowRight: scrollLeft + winSize.width,
            windowTop: scrollTop,
            windowBottom: scrollTop + winSize.height
        };

    },

    /**
     * Вычисляет параметры открытия попапа
     * @private
     * @returns {Object} хэш вида { direction, offset.left, offset.top }
     */
    _calcParams : function() {

        var d = this._calcDimensions();

        if(this.hasMod('adjustable', 'no'))
            return this.calcDirectionParams(this._direction, d);

        var checkedDirections = {},
            allowedDirections = this.params.directions,
            currentDirectionIdx = $.inArray(this._direction, allowedDirections);

        // обработка случая когда текущее направление открытия не является допустимым
        currentDirectionIdx > -1 || (currentDirectionIdx = 0);

        var priorityDirectionIdx = currentDirectionIdx,
            currentDirection, params;

        do {
            currentDirection = allowedDirections[currentDirectionIdx];
            params = checkedDirections[currentDirection] = this.calcDirectionParams(currentDirection, d);
            if(!params.factor) {// значит полностью попал в окно
                this._lastDirection = currentDirection;
                return params;
            }

            // находим следующее возможное направление открытия, если оно есть
            ++currentDirectionIdx == allowedDirections.length && (currentDirectionIdx = 0);

        } while(currentDirectionIdx !== priorityDirectionIdx);

        return checkedDirections[this._lastDirection || allowedDirections[0]];

    },


    /**
     * Рассчитывает параметры открытия попапа в заданном направлении
     * @private
     * @param {String} direction направление
     * @param {Object} d метрики
     * @returns {Object}
     */
    calcDirectionParams: function(direction, d) {

        var factor, // фактор попадания в окно

            // Кэш параметров
            params = this.params,

            // смещение попапа
            offsets = {
                top: 0,
                left: 0
            },

            // отступы для хвостика
            tailOffsets = {
                marginLeft: 0,
                marginTop: 0
            },

            // генеральное направление (up, down, left, right)
            calcDirection = direction.split('-')[0],

            // коррекция на тот случай, если owner меньше хвостика
            correctionHoriz = (this._hasTail && d.ownerWidth < params.tailWidthVertical) ?
                (params.tailWidthVertical - d.ownerWidth)/2 : 0,

            correctionVert = (this._hasTail && d.ownerHeight < params.tailHeightHorizontal) ?
                (params.tailHeightHorizontal - d.ownerHeight)/2 : 0;

        switch(direction) {
            case 'up':
            case 'down':

                offsets.left = d.ownerHorizMiddle - d.posWidth / 2;

                offsets.top = direction == 'down'
                    ? d.ownerBottom + params.tailHeightVertical
                    : d.ownerTop - d.posHeight - params.tailHeightVertical;

                tailOffsets.marginLeft = d.posWidth / 2 - params.tailWidthVertical / 2;

                tailOffsets.marginTop = direction == 'down'
                    ? 0 - params.tailHeightVertical
                    : 0;
            break;

            case 'up-left':
            case 'up-right':
            case 'down-left':
            case 'down-right':

                offsets.left = direction == 'down-right' || direction == 'up-right'
                    ? d.ownerLeft - correctionHoriz
                    : d.ownerRight - d.posWidth + correctionHoriz;

                offsets.top = calcDirection == 'down'
                    ? d.ownerBottom + params.tailHeightVertical
                    : d.ownerTop - d.posHeight - params.tailHeightVertical;

                tailOffsets.marginLeft = d.ownerWidth > d.posWidth
                    ? d.posWidth / 2 - params.tailWidthVertical / 2
                    : d.ownerHorizMiddle - offsets.left - params.tailWidthVertical / 2;

                tailOffsets.marginTop = calcDirection == 'down'
                    ? d.borderWidth - params.tailHeightVertical
                    : 0 - d.borderWidth;
            break;

            case 'left-down':
            case 'right-down':

                offsets.left = direction == 'left-down'
                    ? d.ownerLeft - d.posWidth - params.tailWidthHorizontal
                    : d.ownerRight + params.tailWidthHorizontal;

                offsets.top = d.ownerTop - correctionVert;

                tailOffsets.marginLeft = direction == 'left-down'
                    ? 0 - d.borderWidth
                    : d.borderWidth - params.tailWidthHorizontal;

                tailOffsets.marginTop = d.ownerHeight < d.posHeight
                    ? d.ownerVertMiddle - offsets.top - params.tailHeightHorizontal / 2
                    : d.posHeight / 2 - params.tailHeightHorizontal / 2;
            break;

            case 'left':
            case 'right':

                offsets.left = direction == 'left'
                    ? d.ownerLeft - d.posWidth - params.tailWidthHorizontal
                    : d.ownerRight + params.tailWidthHorizontal;

                offsets.top = d.ownerVertMiddle - d.posHeight / 2;

                tailOffsets.marginLeft = direction == 'left'
                    ? 0 - d.borderWidth
                    : d.borderWidth - params.tailWidthHorizontal;

                tailOffsets.marginTop = d.posHeight / 2 - params.tailHeightHorizontal / 2;
            break;

            case 'left-up':
            case 'right-up':

                offsets.left = direction == 'left-up'
                    ? d.ownerLeft - d.posWidth - params.tailWidthHorizontal
                    : d.ownerRight + params.tailWidthHorizontal;

                offsets.top = d.ownerBottom - d.posHeight + correctionVert;

                tailOffsets.marginLeft = calcDirection == 'left'
                    ? 0 - d.borderWidth
                    : d.borderWidth - params.tailWidthHorizontal;

                tailOffsets.marginTop = d.ownerHeight > d.posHeight
                    ? d.posHeight / 2 - params.tailHeightHorizontal / 2
                    : d.ownerVertMiddle - offsets.top - params.tailHeightHorizontal / 2;
        }

        factor = this.calcInWindowFactor(offsets, d);

        return {
            direction : calcDirection,
            factor : factor,
            offsets : offsets,
            tailOffsets : tailOffsets
        };
    },

    /**
     * Вычисляет фактор попадания объекта в окно
     * @param {Object} pos параметры объекта
     * @param {Object} d метрики
     * @returns {Number} фактор попадания (0 - полностью попадает, далее чем больше, тем хуже)
     */
    calcInWindowFactor: function(pos, d) {

        var res = 0;

        d.windowTop > pos.top && (res += d.windowTop - pos.top);
        pos.top + d.underHeight > d.windowBottom && (res += pos.top + d.underHeight - d.windowBottom);
        d.windowLeft > pos.left && (res += d.windowLeft - pos.left);
        pos.left + d.underWidth > d.windowRight && (res += pos.left + d.underWidth - d.windowRight);

        return res;

    },

    getDefaultParams : function() {

        return {
            tailOffset: 19,
            tailWidthHorizontal: 9,
            tailWidthVertical: 19,
            tailHeightHorizontal: 19,
            tailHeightVertical: 10,
            shadowSize: 7,
            directions : ALLOWED_DIRECTIONS
        };

    },

    destruct : function() {

        var under = this._under;
        if(!under) {
            this.__base.apply(this, arguments);
        }
        else if(!this._destructing) {
            this._destructing = true;
            this.hide();
            BEM.DOM.destruct(false, under.domElem);
            this.__base(true);
        }

    },

    /**
     * Возвращает подложку
     * @private
     * @returns {BEM.DOM.blocks['i-popup']}
     */
    _getUnder : function() {

        if(!this._under) {
            var under = $(BEM.HTML.build({
                block : 'i-popup',
                zIndex : this.params.zIndex,
                mods : {
                    autoclosable : this.getMod('autoclosable') || 'yes',
                    fixed : this.hasMod('direction', 'fixed') && 'yes',
                    type: this.getMod('type')
                },
                underMods : this.params.underMods,
                underMix : [{ block : 'b-popupa', elem : 'under' }]
            }));

            (this._under = this.findBlockOn(under, 'i-popup'))
                .on(
                    {
                        'show'          : this._onUnderShowed,
                        'hide'          : this._onUnderHidden,
                        'outside-click' : this._onUnderOutsideClicked
                    },
                    this)
                .elem('content').append(this.domElem);

        }

        return this._under;

    },

    _onUnderShowed : function() {

        this._isShowed = true;

        this.bindToResize();

        this.trigger('show');

    },

    _onUnderHidden : function() {

        this._isShowed = false;

        this.unbindFromResize();

        this.trigger('hide');
    },

    bindToResize : function() {
        this
            .bindToWin('resize', this.pos)
            ._isOwnerNode() &&
                this.bindToDomElem(
                    this._owner.parents().add(this.__self.win),
                    'scroll',
                    this.pos);
    },

    unbindFromResize: function() {
        this
            .unbindFromWin('resize')
            ._isOwnerNode() &&
                this.unbindFromDomElem(
                    this._owner.parents().add(this.__self.win),
                    'scroll');
    },

    _onUnderOutsideClicked : function() {

        this.trigger.apply(this, arguments);

    }

}, /** @lends block */ {

    live : function() {

        this.liveBindTo('close', 'leftclick', function() {
            this.hide();
        });

    }

});

BEM.HTML.decl('b-popupa', {

    onBlock : function(ctx) {

        var hasClose = false;
        $.each(ctx.param('content'), function(i, item) {
            return !(hasClose = item.elem == 'close');
        });
        ctx
            .mods({ theme : 'ffffff', direction : 'down', 'has-close' : hasClose && 'yes' })
            .js(true)
            .afterContent({ elem : 'shadow' });

    },

    onElem : {

        'content' : function(ctx) {

            ctx
                .wrap({ elem : 'wrap-cell', tag : 'td' })
                .wrap({ tag : 'tr' })
                .wrap({ elem : 'wrap', tag : 'table' });

        },

        'close' : function(ctx) {

            ctx.tag('i');

        },

        'shadow' : function(ctx) {

            ctx.tag('i');

        },

        'tail' : function(ctx) {

            ctx
                .tag('i')
                .wrapContent({ elem : 'tail-i', tag : 'i' });

        }

    }

});

})(jQuery);

/* end: ../../libs/lego/blocks-desktop/b-popupa/b-popupa.js */
/* begin: ../../libs/lego/blocks-desktop/i-popup/i-popup.js */
(function($) {

/**
 * Шаблон для подложки
 * @private
 * @type jQuery
 */
var template,

/**
 * Пул подложек
 * @private
 * @type Array
 */
    underPool = [],

    browser = $.browser;

/**
 * Достает подложку из пула, при необходимости создает новую
 * @private
 * @returns jQuery
 */
function getUnder() {

    return underPool.length?
        underPool.shift() :
        template?
            template.clone() :
            template = createUnder();

}

/**
 * Возвращает подложку в пул
 * @private
 * @param {jQuery} under
 */
function putUnder(under) {

    underPool.push(under);

}

/**
 * Создает подложку
 * @private
 * @returns {jQuery}
 */
function createUnder() {

    // TODO пока только для мобильного сафари отдаем div, нужно сделать более умно для тех браузеров, которым достаточно div
    return $((browser.safari || browser.webkit) && navigator.userAgent.toLowerCase().indexOf('mobile') > -1?
        '<div/>' :
        '<iframe' + (browser.msie && browser.version < 9? ' frameborder="0"' : '') + '/>');

}

BEM.DOM.decl('i-popup', {

    onSetMod : {

        'js': function() {

            var bro = $.browser;

            // LEGO-8464
            if(bro.msie && parseInt(bro.version) >= 9) {
                this.domElem[0].onresize = function() {
                    this.className += '';
                }
            }
        },

        'visibility' : {

            'visible' : function() {

                var under = this._getUnder(),
                    underParent = under.parent();

                this.hasMod(under, 'type', 'paranja')?
                    underParent.is('body') || under.appendTo('body') :
                    (underParent[0] !== this.domElem[0]) && under.prependTo(this.domElem);

                this._inBody || (this._inBody = !!this.domElem.appendTo('body'));

                this.trigger('show');

            },

            '' : function() {
                var under = this._getUnder();

                this.hasMod(under, 'type', 'paranja') && under.remove();
                this._putUnder();
                this.trigger('hide');

            }

        }

    },

    /**
     * Получает элемент подложки
     * @private
     * @returns {jQuery}
     */
    _getUnder : function() {

        return this._under ||
            (this._under = getUnder().attr(
                'class',
                this._underClass || (this._underClass = this.findElem('under').remove().attr('class'))));

    },

    /**
     * Возвращает элемент подложки
     * @private
     */
    _putUnder : function() {

        putUnder(this._under);
        delete this._under;

    },

    /**
     * Открывает попап
     * @param {Object} css объект css-свойств, описывающих положение попапа
     * @returns {BEM.DOM}
     */
    show : function(css) {
        css && this.domElem.css(css);
        return this.setMod('visibility', 'visible');

    },

    /**
     * Закрывает попап
     * @returns {BEM.DOM}
     */
    hide : function() {

        return this.delMod('animate').delMod('visibility');

    }

}, {

    live : true

});

})(jQuery);

BEM.HTML.decl('i-popup', {

    onBlock : function(ctx) {

        ctx
            .mod('autoclosable', 'yes')
            .js(true)
            .wrapContent({ elem : 'content' })
            .afterContent({
                elem : 'under',
                mods : ctx.param('underMods'),
                mix : ctx.param('underMix')})
            .param('zIndex') &&
                ctx.attr('style', 'z-index:' + (32700 + ctx.param('zIndex')));


    }

});

/* end: ../../libs/lego/blocks-desktop/i-popup/i-popup.js */
/* begin: ../../blocks-desktop/i-popup/i-popup.js */
BEM.DOM.decl('i-popup', {
    hide: function(e) {
        //  волшебный костыль, см. lego/blocks-desktop/b-form-select/b-form-select.js
        if (window.selectClosing === 2) {
            window.selectClosing--;
        } else if (window.selectClosing === 1) {
            window.selectClosing = 0;
            return;
        }

        var hide = true;

        if (this.findBlockInside({block: 'b-popupa', modName: 'type', modVal: 'apps'})) {
            var _this = this;
            this.afterCurrentEvent(function() {
                _this.findBlockOutside('b-page').findBlockInside({
                    block: 'b-link',
                    modName: 'open',
                    modVal: 'apps'
                }).bindClick();
            });
        }

        if (this.hasMod('type', 'tooltip')) {
            hide = false;
        }

        if (this.hasMod('type', 'properties') && !$('.b-paranja').bem('b-paranja').hasMod('hide', 'yes'))
            hide = false;

        if (this.hasMod('type', 'search')) {
            page().delMod('search-suggest');
            this.findBlocksInside('b-autocomplete-item').forEach(function(item) {
                item.delMod('hovered');
            });
        }

        hide && this.__base.apply(this, arguments);
    },

    show: function() {
        if (this.hasMod('type', 'search')) {
            page().setMod('search-suggest', 'shown');
        }

        this.__base.apply(this, arguments);
    }
});

/* end: ../../blocks-desktop/i-popup/i-popup.js */
/* begin: ../../libs/lego/blocks-desktop/i-popup/_autoclosable/i-popup_autoclosable_yes.js */
(function($) {

var KEYDOWN_EVENT = ($.browser.opera && $.browser.version < 12.10) ? 'keypress' : 'keydown';

BEM.DOM.decl({ name : 'i-popup', modName : 'autoclosable', modVal : 'yes' }, {

    onSetMod : {

        'visibility' : {

            'visible' : function() {

                this.afterCurrentEvent(function() {
                    // Из-за асинхронности, модификатор уже может быть снят
                    // в этот момент, поэтому нужно его еще раз
                    // проверить, чтобы не оказалось "повисших" подписок.
                    if (this.hasMod('visibility', 'visible')) {

                        var under = this._under;

                        this.bindToDoc('leftclick', function(e) {
                                var $target = $(e.target);

                                if (
                                    !this.containsDomElem($target) &&
                                    // .select__popup - хак для select'a, так как его попапа по факту не содержиться в i-popup
                                    !$target.parents('.b-form-select__popup').length &&
                                    // VB-2633 тригерится клик, настройки закрываются, applySettings не вызывается
                                    !$(document.activeElement).is('.b-form-slider__runner')
                                ) {
                                    this._onOutClick(e);
                                    e.stopPropagation();
                                }
                            })
                            .bindToDoc(KEYDOWN_EVENT, function(e) {
                                // на Escape закрываем
                                e.keyCode == 27 && this.hide();
                            });

                        if (under && under.is('iframe') && this.hasMod(under, 'type', 'paranja')) {

                            // NOTE Предусматривать отвязку не нужно, т.к. после
                            //      вызова метода hide сам элемент (паранжа) удаляется.
                            // NOTE У пустого iframe:
                            //      IE7-8 ловят клик на contentWindow.document
                            //      Другие браузеры ловят только на contentWindow.
                            this.bindToDomElem(
                                $([under[0].contentWindow, under[0].contentWindow.document]),
                                'leftclick',
                                this._onOutClick
                            );
                        }
                    }
                });
                this.__base.apply(this, arguments);

            },

            '' : function() {

                return this
                    .unbindFromDoc('leftclick ' + KEYDOWN_EVENT)
                    .__base.apply(this, arguments);

            }

        }

    },

    _onOutClick : function(domEvent) {

        var e = $.Event('outside-click');
        this.trigger(e, { domEvent : domEvent });
        e.isDefaultPrevented() || this.hide();

    }

});
})(jQuery);

/* end: ../../libs/lego/blocks-desktop/i-popup/_autoclosable/i-popup_autoclosable_yes.js */
/* begin: ../../blocks-desktop/i-popup/_autoclosable/i-popup_autoclosable_yes.js */
BEM.DOM.decl({name: 'i-popup', modName: 'autoclosable', modVal: 'yes'}, {

    _onOutClick: function(domEvent) {
        var link = $(domEvent.target).closest('.b-link'),
            popupa = this.findBlockInside('b-popupa');

        if (link.length && popupa._owner && popupa._owner.get(0) === link.get(0) && this.getMod('type') === 'bookmarks')
            return;

        this.__base.apply(this, arguments);
    }
});

/* end: ../../blocks-desktop/i-popup/_autoclosable/i-popup_autoclosable_yes.js */
/* begin: ../../blocks-desktop/b-popupa/_name/b-popupa_name_add-thumb.js */
(function() {
    var shown = false;

    channels('api').on('advertisement', function(advertisement) {
        var popupa;
        if (!advertisement || advertisement.id !== 'vbaddthumb') {
            if (shown) {
                popupa = $('.b-popupa_name_add-thumb').bem('b-popupa');
                popupa.destruct();
            }

            return;
        }

        var blocks = require('bem').blocks,
            BEMHTML = require('bemhtml');

        vb.advertisement.getLocalizedString('text', function(translate) {
            popupa = $(BEMHTML.apply(blocks['b-popupa_name_add-thumb'](translate)));
            popupa.appendTo('body');

            popupa = popupa.bem('b-popupa');
            popupa.show($('.b-vb-foot__add-thumb .b-link__inner'));
            setTimeout(function() {
                popupa.pos();
            }, 0);

            shown = true;
        });
    });

    BEM.DOM.decl({block: 'b-popupa', modName: 'name', modVal: 'add-thumb'}, {
        onSetMod: {
            js: function() {
                this.__base.apply(this, arguments);
                channels('dom').on('layoutChanged', this.pos, this);
                channels('dom').on('resize', this._nextTickPos, this);
            }
        },

        hide: function() {
            shown = false;
            this.__base.apply(this, arguments);
            vb.advertisement.stat('close');
            vb.advertisement.refuse(0);
            this.destruct();
        },

        destruct: function() {
            channels('dom').off('layoutChanged', this.pos, this);
            channels('dom').off('resize', this._nextTickPos, this);
            this.unbindFromResize();

            var under = this._under;
            if (!under) {
                this.__base.apply(this, arguments);
            } else if (!this._destructing) {
                this._destructing = true;
                BEM.DOM.destruct(false, under.domElem);
                this.__base(true);
            }
        },

        // VB-4287
        // Попап не хочет ставиться ровно к _owner без таймаута
        _nextTickPos: function() {
            this.afterCurrentEvent(function() {
                this.pos();
            });
        },

        _calcDimensions: function() {
            // VB-4321
            // в jquery неправильно считается offset().left
            function getOffsetRecursively(el) {
                var pos = {
                    left: 0,
                    top: 0
                };

                do {
                    pos.left += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                    pos.top += (el.offsetTop - el.scrollTop + el.clientTop);
                } while (el = el.offsetParent);

                return pos;
            }

            var owner = this._owner,
                rightOffset = null;

            if (owner.jquery) {
                rightOffset = getOffsetRecursively(owner[0]);
            }

            var posElem = this._getUnder().domElem,
                underElem = this._getUnder()._getUnder(),
                win = this.__self.win,
                isOwnerNode = this._isOwnerNode(),
                ownerOffset = isOwnerNode ? owner.offset() : owner,
                ownerWidth = isOwnerNode ? owner.outerWidth() : 0,
                ownerHeight = isOwnerNode ? owner.outerHeight() : 0,
                scrollLeft = win.scrollLeft(),
                scrollTop = win.scrollTop(),
                winSize = this.__self.getWindowSize(),
                borderWidth = parseInt(this.elem('content').css('border-top-width'), 10);

            return {
                ownerWidth: ownerWidth,
                ownerHeight: ownerHeight,
                ownerLeft: rightOffset || ownerOffset.left,
                ownerTop: ownerOffset.top,
                ownerRight: ownerOffset.left + ownerWidth,
                ownerBottom: ownerOffset.top + ownerHeight,
                ownerHorizMiddle: ownerOffset.left + ownerWidth / 2,
                ownerVertMiddle: ownerOffset.top + ownerHeight / 2,
                posWidth: posElem.outerWidth(),
                posHeight: posElem.outerHeight(),
                underWidth: underElem.outerWidth(),
                underHeight: underElem.outerHeight(),
                borderWidth: isNaN(borderWidth) ? 0: borderWidth,
                windowLeft: scrollLeft,
                windowRight: scrollLeft + winSize.width,
                windowTop: scrollTop,
                windowBottom: scrollTop + winSize.height
            };

        }
    });

    blocks['b-popupa_name_add-thumb'] = function(text) {
        return {
            block: 'b-popupa',
            mods: {
                'only-direction': 'up-left',
                type: 'tooltip',
                name: 'add-thumb'
            },
            js: true,
            content: [
                {
                    elem: 'close'
                },
                {
                    elem: 'tail'
                },
                {
                    elem: 'content',
                    content: text
                }
            ]
        };
    };
})();

/* end: ../../blocks-desktop/b-popupa/_name/b-popupa_name_add-thumb.js */
/* begin: ../../blocks-desktop/b-popupa/_type/b-popupa_type_bookmarks.js */
BEM.DOM.decl({block: 'b-popupa', modName: 'type', modVal: 'bookmarks'}, {
    show: function() {
        vb.stat('panel.bookpanel.folder');
        this.__base.apply(this, arguments);
    }
});

/* end: ../../blocks-desktop/b-popupa/_type/b-popupa_type_bookmarks.js */
/* begin: ../../blocks-desktop/b-popupa/_type/b-popupa_type_apps.js */
blocks['b-popupa_type_apps'] = function(apps) {
    return {
        block: 'b-popupa',
        mods: {
            'only-direction': 'up',
            direction: 'up',
            theme: 'ffffff',
            type: 'apps'
        },
        content: [
            {
                elem: 'close'
            },
            {
                elem: 'tail'
            },
            {
                elem: 'content',
                content: [
                    blocks['apps'](apps)
                ]
            }
        ]
    };
};

BEM.DOM.decl({block: 'b-popupa', modName: 'type', modVal: 'apps'},  /** @lends block.prototype */ {

    show: function() {
        var _this = this;

        this.__base.apply(this, arguments);
        this.afterCurrentEvent(function() {
            _this._pos();
        });

        return this;
    },

    _calcDimensions: function() {
        var posElem = this._getUnder().domElem,
            underElem = this._getUnder()._getUnder(),
            win = this.__self.win,
            owner = this._owner,
            isOwnerNode = this._isOwnerNode(),
            ownerOffset = isOwnerNode ? owner.offset() : owner,
            ownerWidth = isOwnerNode ? owner.outerWidth() : 0,
            ownerHeight = isOwnerNode ? owner.outerHeight() : 0,
            scrollLeft = win.scrollLeft(),
            scrollTop = win.scrollTop(),
            winSize = this.__self.getWindowSize(),
            borderWidth = parseInt(this.elem('content').css('border-top-width'), 10);

        var result = {
            ownerWidth: ownerWidth,
            ownerHeight: ownerHeight,
            ownerTop: ownerOffset.top,
            // ownerRight: ownerOffset.left + ownerWidth,
            ownerBottom: ownerOffset.top + ownerHeight,
            ownerLeft: 0,
            ownerRight: 0,
            ownerHorizMiddle: ownerOffset.left + ownerWidth / 2,
            ownerVertMiddle: ownerOffset.top + ownerHeight / 2,
            posWidth: posElem.outerWidth(),
            posHeight: posElem.outerHeight(),
            underWidth: underElem.outerWidth(),
            underHeight: underElem.outerHeight(),
            borderWidth: isNaN(borderWidth) ? 0: borderWidth,
            windowLeft: scrollLeft,
            windowRight: scrollLeft + winSize.width,
            windowTop: scrollTop,
            windowBottom: scrollTop + winSize.height
        };
        return result;
    }

});

/* end: ../../blocks-desktop/b-popupa/_type/b-popupa_type_apps.js */
/* begin: ../../blocks-desktop/b-popupa/_only-direction/b-popupa_only-direction_up.js */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({block: 'b-popupa', modName: 'only-direction', modVal: 'up'}, {

    calcDirectionParams: function(direction, d) {
        direction = 'up-right';
        var factor, // фактор попадания в окно

            // Кэш параметров
            params = this.params,

            // смещение попапа
            offsets = {
                top: 0,
                left: 0
            },

            // отступы для хвостика
            tailOffsets = {
                marginLeft: 0,
                marginTop: 0
            },

            // генеральное направление (up, down, left, right)
            calcDirection = direction.split('-')[0],

            // коррекция на тот случай, если owner меньше хвостика
            correctionHoriz = (this._hasTail && d.ownerWidth < params.tailWidthVertical) ?
                (params.tailWidthVertical - d.ownerWidth) / 2 : 0,

            correctionVert = (this._hasTail && d.ownerHeight < params.tailHeightHorizontal) ?
                (params.tailHeightHorizontal - d.ownerHeight) / 2 : 0;

               offsets.left = direction == 'down-right' || direction == 'up-right'
                    ? d.ownerLeft - correctionHoriz
                    : d.ownerRight - d.posWidth + correctionHoriz;

                offsets.top = calcDirection == 'down'
                    ? d.ownerBottom + params.tailHeightVertical
                    : d.ownerTop - d.posHeight - params.tailHeightVertical;

                tailOffsets.marginLeft = d.ownerWidth > d.posWidth
                    ? d.posWidth / 2 - params.tailWidthVertical / 2
                    : d.ownerHorizMiddle - offsets.left - params.tailWidthVertical / 2;

                tailOffsets.marginTop = calcDirection == 'down'
                    ? d.borderWidth - params.tailHeightVertical
                    : 0 - d.borderWidth;

                factor = this.calcInWindowFactor(offsets, d);

        return {
            direction: calcDirection,
            factor: factor,
            offsets: offsets,
            tailOffsets: tailOffsets
        };
    }

 });
})();

(function(undefined) {

BEM.DOM.decl({block: 'b-popupa', modName: 'only-direction', modVal: 'up-left'}, {

    calcDirectionParams: function(direction, d) {
        direction = 'up-left';
        var factor, // фактор попадания в окно

            // Кэш параметров
            params = this.params,

            // смещение попапа
            offsets = {
                top: 0,
                left: 0
            },

            // отступы для хвостика
            tailOffsets = {
                marginLeft: 0,
                marginTop: 0
            },

            // генеральное направление (up, down, left, right)
            calcDirection = direction.split('-')[0],

            // коррекция на тот случай, если owner меньше хвостика
            correctionHoriz = (this._hasTail && d.ownerWidth < params.tailWidthVertical) ?
                (params.tailWidthVertical - d.ownerWidth) / 2 : 0,

            correctionVert = (this._hasTail && d.ownerHeight < params.tailHeightHorizontal) ?
                (params.tailHeightHorizontal - d.ownerHeight) / 2 : 0;

               offsets.left = direction == 'down-right' || direction == 'up-right'
                    ? d.ownerLeft - correctionHoriz
                    : d.ownerRight - d.posWidth + correctionHoriz;

                offsets.top = calcDirection == 'down'
                    ? d.ownerBottom + params.tailHeightVertical
                    : d.ownerTop - d.posHeight - params.tailHeightVertical;

                tailOffsets.marginLeft = d.ownerWidth > d.posWidth
                    ? d.posWidth / 2 - params.tailWidthVertical / 2
                    : d.ownerHorizMiddle - offsets.left - params.tailWidthVertical / 2;

                tailOffsets.marginTop = calcDirection == 'down'
                    ? d.borderWidth - params.tailHeightVertical
                    : 0 - d.borderWidth;

                factor = this.calcInWindowFactor(offsets, d);

        return {
            direction: calcDirection,
            factor: factor,
            offsets: offsets,
            tailOffsets: tailOffsets
        };
    }

 });
})();

/* end: ../../blocks-desktop/b-popupa/_only-direction/b-popupa_only-direction_up.js */
/* begin: ../../blocks-desktop/stat-popup/stat-popup.js */
blocks['stat-popup'] = function(data) {
    return {
        block: 'stat-popup',
        content: [
            {
                elem: 'logo-wrapper',
                content: {
                    elem: 'logo-link',
                    url: data.branding.logo.url,
                    content: {
                        elem: 'logo',
                        url: data.branding.logo.img
                    }
                }
            },
            {
                elem: 'header',
                content: vb.getLocalizedString('modalStat.header')
            },
            {
                elem: 'paragraph',
                tag: 'p',
                content: vb.getLocalizedString('modalStat.text')
                    .replace(
                        /\[([^\]]+)\]/,
                        '<a href="' + vb.getLocalizedString('modalStat.moreInfoLink') + '" target="_blank">$1</a>'
                    )
            },
            {
                elem: 'paragraph',
                tag: 'p',
                content: vb.getLocalizedString('modalStat.list.collect') + ':'
            },
            {
                elem: 'list',
                content: [
                        vb.getLocalizedString('modalStat.list.item.history'),
                        vb.getLocalizedString('modalStat.list.item.bookmarks'),
                        vb.getLocalizedString('modalStat.list.item.addon')
                    ].map(function (text) {
                        return '<li>' + text + '</li>';
                    })
            },
            {
                block: 'b-form-button',
                mods: {
                    theme: 'islands',
                    size: 'big',
                    'color': 'yellow',
                    name: 'accept-send-stat'
                },
                content: vb.getLocalizedString('modalStat.accept')
            },
            {
                block: 'b-form-button',
                mods: {
                    theme: 'islands',
                    size: 'big',
                    name: 'deny-send-stat'
                },
                content: vb.getLocalizedString('modalStat.cancel')
            }
        ]
    };
};

// В хроме попапа сделана не на рекламном апи, поэтому здесь и далее
// костыли для хрома
channels('api').on('advertisement', function(advertisement) {
    if (advertisement && advertisement.id === 'vbsendstat') {
        page().showStatPopup();
    } else {
        var isChromium = vb.navigator === 'chromium';

        if (!isChromium) {
            var popup = page().findBlockInside('stat-popup');

            if (popup) {
                popup.hide();
            }
        }
    }
});

BEM.DOM.decl('stat-popup', {
    onSetMod: {
        js: function() {
            this.show();

            var _this = this,
                isChromium = vb.navigator === 'chromium';

            this.findBlockInside({
                block: 'b-form-button',
                modName: 'name',
                modVal: 'accept-send-stat'
            }).on('click', function() {
                vb.setSendStatistics(true, true);
                // VB-4450 навсякий случай таймаут
                setTimeout(function() {
                    vb.stat('settings.statdialog.ok');
                }, 100);
                _this.delMod('visibility');
                if (!isChromium) {
                    vb.advertisement.hide(0);
                }
            });

            this.findBlockInside({
                block: 'b-form-button',
                modName: 'name',
                modVal: 'deny-send-stat'
            }).on('click', function() {
                vb.stat('settings.statdialog.cancel');
                vb.setSendStatistics(false, true);
                _this.delMod('visibility');
                if (!isChromium) {
                    vb.advertisement.refuse(0);
                }
            });
        },

        visibility: {
            '': function() {
                $('.b-paranja').bem('b-paranja').setMod('hide', 'yes');
            }
        }
    },

    /* API */

    show: function() {
        if (vb.navigator === 'chromium') {
            vb.stat('settings.statdialog.show');
        }

        this.setMod('visibility', 'visible');
    },

    hide: function() {
        this.delMod('visibility');
    }
});

/* end: ../../blocks-desktop/stat-popup/stat-popup.js */
/* begin: ../../blocks-desktop/b-tumb/b-tumb.js */
(function() {

var DEFAULT_THUMB_BGCOLOR = 'f2f2f2',
    DEFAULT_SCREENSHOT_BGCOLOR = '#f9f9f9',
    DEFAULT_SCREENSHOT_COLOR = 'ffffff';

function getEmptyThumbColor(color) {
    return 'add-' + (color || cache.get('background').color || '808080');
}

// сделать тумбу пустой
function makeThumbEmpty(index, size) {
    var BEMHTML = require('bemhtml'),
        blocks = require('bem').blocks,
        thumb = BEMHTML.apply(blocks['b-tumb'](null, index, size)),
        thumbs = page().findBlockInside('b-tumbs'),
        thumbBlock = thumbs.findBlockInside({
            block: 'b-tumb',
            modName: 'index',
            modVal: '' + index
        }),
        parent = thumbBlock.domElem.parent();

    thumbBlock.destruct();
    parent.html(thumb);
    BEM.DOM.init();
}

function createEmptyThumb(index, size) {
    var BEMHTML = require('bemhtml'),
        blocks = require('bem').blocks,
        thumb = BEMHTML.apply(blocks['b-tumb'](null, index, size)),
        thumbs = page().findBlockInside('b-tumbs');

    thumbs.findElem('item', 'index', '' + index).html(thumb);
    BEM.DOM.init();
}

/**
 * Метод построения BEM-дерева тумбы
 *
 * @param {Object} item Данные о конкретной тумбе
 * @param {Number} index Порядковый номер тумбы начиная с 0-ля
 * @param {Number} size Ширина тумбы в px, высота считается как size / 2
 * @param {Boolean} isSuggest тип тумбы - саджестная или нет. Флаг будет отражатся свойством isSuggest
 *
 * @return {Object} bemjson структура
 */
blocks['b-tumb'] = function(item, index, size, isSuggest) {
    index = parseInt(index, 10);

    if (item && isSuggest) {
        delete item.screenshot;
    }

    var blocks = require('bem').blocks,
        BEM = require('bem').BEM,
        Lib = require('lib'),
        parseURL = require('parseURL'),
        thumbType = Lib.getThumbType(item),
        modSize = Lib.getThumbSizeMod(size);

    // Возвращаем заглушку если данных нет
    if (!item || !item.url) {
        return blocks['b-tumb_state_empty'].apply(this, arguments);
    }

    // чтобы свободно изменять item
    item = $.extend({}, item);

    var backgroundColor = (item.backgroundColor || '').trim() || DEFAULT_THUMB_BGCOLOR;

    var bgColor = item.backgroundColor,
        rgb = bgColor && bgColor.match(/(\w{2})(\w{2})(\w{2})/).slice(1).map(function(color) {
            return parseInt(color, 16);
        }) || null,
        almostWhite = 253,
        isWhite = '';

    if (isSuggest && rgb && (rgb[0] > almostWhite || rgb[1] > almostWhite || rgb[2] > almostWhite)) {
        isWhite = 'yes';
    }

    var colorTheme = item.fontColor ?  'ffffff' : '000000',
        title = BEM.blocks['i-common__string'].escapeHTML((item.title || '').trim());

    if (thumbType === 6) {
        colorTheme = '000000';
    }

    return {
        block: 'b-tumb',
        url: item.url,
        bg: thumbType === 6 && item.screenshot.color ? 'transparent' : '#' + backgroundColor,
        mods: {
            size: modSize,
            iswhite: isWhite,
            index: '' + index,
            pinned: item.pinned ? 'yes' : 'no',
            color: colorTheme,
            editing: !isSuggest && (cache.get('editingThumb') || {}).index == index ? 'yes' : 'no',
            type: thumbType,
            'suggest': isSuggest ? 'yes' : ''
        },
        attrs: {
            draggable: true,
            // VB-2233
            'aria-label': 'thumb' + (index + 1)
        },
        js: {
            index: index,
            item: item
        },
        content: [
            (function() {
                    var url = BEM.blocks['i-common__string'].escapeHTML(
                            Lib.getUnicodedURL(
                                parseURL(item.url).host ?
                                parseURL(item.url).host :
                                item.url
                            )
                        );

                    if (url === 'clck.yandex.ru') {
                        url = title;
                        title = '';
                    }

                    if (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9) {
                        url = url.slice(0, 40);
                        title = title.slice(0, 40);
                    }

                    // VB-2393
                    if (vb.navigator === 'firefox') {
                        url = url.slice(0, 98);
                        title = title.slice(0, 98);
                    }

                    url = url.replace(/^www\./, '');
                    url = url.charAt(0).toUpperCase() + url.slice(1);

                    switch (thumbType) {
                        //про thumbType см. lib.js
                        case 1:
                            return [
                                {
                                    elem: 'text',
                                    content: url
                                },
                                !item.isIndexPage && title && {
                                    elem: 'desc',
                                    content: title
                                }
                            ];
                        case 2:
                        case 3:
                            return [
                                {
                                    block: 'b-icon',
                                    mix: [{
                                        block: 'b-tumb',
                                        elem: 'bg-image'
                                    }],
                                    url: item.backgroundImage,
                                    alt: title
                                },
                                thumbType === 3 && {
                                    elem: 'desc',
                                    content: title
                                }
                            ];
                        case 4:
                        case 5:
                            return [
                                {
                                    elem: 'brand',
                                    content: [
                                    {
                                        elem: 'brand-fav',
                                        content: {
                                            block: 'b-icon',
                                            mix: [{
                                                block: 'b-tumb',
                                                elem: 'fav-image'
                                            }],
                                            url: item.favicon,
                                            alt: title

                                        }
                                    },
                                    {
                                        elem: 'brand-url',
                                        content: [{
                                            elem: 'brand-url_wrap',
                                            content: url
                                        }]
                                    }

                                    ]
                                },
                                thumbType === 5 && {
                                    elem: 'desc',
                                    content: title
                                }
                            ];
                        case 6:
                            var fontColor;

                            // не белый
                            if (rgb && (rgb[0] < almostWhite || rgb[1] < almostWhite || rgb[2] < almostWhite)) {
                                bgColor = item.backgroundColor;
                                fontColor = item.fontColor;
                            // белый, берем цвет скриншота
                            } else {
                                bgColor = item.screenshot.color;
                                fontColor = item.screenshot.fontColor;
                            }

                            return [
                                {
                                    block: 'b-icon',
                                    mix: [{
                                        block: 'b-tumb',
                                        elem: 'screenshot-image'
                                    }],
                                    url: item.screenshot.url,
                                    alt: title
                                },
                                {
                                    elem: 'crop',
                                    content: (function() {
                                        if (vb.navigator === 'ie' && vb.navigatorMajorVersion > 10) {
                                            return {
                                                block: 'b-tumb',
                                                elem: 'screenshot-image-blur',
                                                content: [{
                                                    block: 'svg',
                                                    content: [{
                                                        elem: 'filter',
                                                        value: '3'
                                                    },
                                                    {
                                                        elem: 'image',
                                                        url: item.screenshot.url
                                                    }]
                                                }]
                                            };
                                        } else {
                                            return {
                                                block: 'b-icon',
                                                mix: [{
                                                    block: 'b-tumb',
                                                    elem: 'screenshot-image-blur'
                                                }],
                                                url: item.screenshot.url,
                                                alt: title
                                            };
                                        }
                                    })()
                                },
                                {
                                    elem: 'screenshot-color',
                                    attrs: {style: 'background-color: #' + (bgColor || DEFAULT_SCREENSHOT_COLOR)}
                                },
                                {
                                    elem: 'text',
                                    attrs: {style: 'color: #' + (fontColor && 'ffffff' || '000000')},
                                    content: [
                                        item.isIndexPage && {
                                            elem: 'site-name',
                                            content: url
                                        },
                                        !item.isIndexPage && {
                                            elem: 'site-title',
                                            content: title || url
                                        }
                                    ]
                                }
                            ];
                    }
                })(),
                {
                    elem: 'helper'
                },
                {
                    elem: 'hint'
                },
                !isSuggest && thumbType === 6 && {
                    elem: 'control-bg',
                    elemMods: {
                        hide: 'yes'
                    }
                },
                !isSuggest && {
                    elem: 'control',
                    elemMods: {
                        hide: 'yes'
                    },
                    content: (function() {
                        var control = [
                            {
                                elem: 'control-item-click',
                                content: {
                                    elem: 'control-item',
                                    attrs: {
                                        title: item.pinned ? vb.getLocalizedString('app.unpinThumb') : vb.getLocalizedString('app.pinThumb')
                                    },
                                    elemMods: {
                                        type: item.pinned ? 'unpin' : 'pin'
                                    },
                                    js: {
                                        index: index
                                    }
                                }
                            },
                            {
                                elem: 'control-item-click',
                                content: {
                                    elem: 'control-item',
                                    attrs: {
                                        title: vb.getLocalizedString('app.editThumb')
                                    },
                                    elemMods: {
                                        type: 'set'
                                    },
                                    js: {
                                        index: index
                                    }
                                }
                            },
                            {
                                elem: 'control-item-click',
                                content: {
                                    elem: 'control-item',
                                    attrs: {
                                        title: vb.getLocalizedString('app.removeThumb')
                                    },
                                    elemMods: {
                                        type: 'del'
                                    },
                                    js: {
                                        index: index
                                    }
                                }
                            }
                        ];

                    return control;
                })()
            }
        ]
    };
};

// {} -> {pinned: false}
// null -> {pinned: false}
function normalizeThumb(raw) {
    return $.extend({pinned: false}, raw);
}

// 0 - equal, 1 - visual, 2 - repin, >2 - change params
var CMP_RESULT_EQUAL = 0;
var CMP_RESULT_VISUAL = 1;
var CMP_RESULT_REPIN = 2;
var CMP_RESULT_PARAMS = 3;

function cmpTumbs(tumb1, tumb2) {
    if (!tumb1 || !tumb2) {
        return (!tumb1) == (!tumb2) ? CMP_RESULT_EQUAL : CMP_RESULT_PARAMS;
    }
    var eqPin = (tumb1.pinned == tumb2.pinned) ? CMP_RESULT_EQUAL : CMP_RESULT_REPIN;
    var eqParams = (tumb1.url == tumb2.url) && (tumb1.title == tumb2.title) ? CMP_RESULT_EQUAL : CMP_RESULT_PARAMS;
    var eqImg = ((!tumb1.screenshot) == (!tumb2.screenshot))
            && (!tumb1.screenshot || (tumb1.screenshot.url == tumb2.screenshot.url)) ? CMP_RESULT_EQUAL : CMP_RESULT_VISUAL;
    return eqImg + eqPin + eqParams;
}

function getMaxIndex(thumbs) {
    thumbs = thumbs || {};
    var max = -1;
    for (var i in thumbs) {
        if (thumbs.hasOwnProperty(i)) {
            max = Math.max(max, parseInt(i, 10));
        }
    }
    return max;
}

var _renderedThumbs = {};
var _renderedThumbsMaxIndex = -1;

blocks['b-tumb'].saveRendered = function(thumbs) {
    _renderedThumbs = $.extend({}, thumbs);
    _renderedThumbsMaxIndex = getMaxIndex(_renderedThumbs);
}

channels('api').on('thumbChanged', function(newThumbs) {
    var savedThumbs = cache.get('thumbs') || {};
    for (var i in newThumbs) {
        if (newThumbs.hasOwnProperty(i)) {
            if (!newThumbs[i] || !newThumbs[i].url) {
                delete savedThumbs[i];
            } else {
                var pg = page();
                if (pg.isSettingsShown()) {
                    var maxThumbIndex = pg.findBlockInside({block: 'b-form-slider'}).val();
                    if (maxThumbIndex <= parseInt(i, 10)) {
                        continue;
                    }
                }
                savedThumbs[i] = newThumbs[i];
            }
        }
    }
    cache.set('thumbs', savedThumbs);
    debouncedUpdate();
});

var debouncedUpdate = $.debounce(updateThumbs, 100);

function updateThumbs() {
    setTimeout(function() {
        channels('dom').emit('layoutChanged');
    }, 0);

    var BEM = require('bem').BEM;
    var blocks = require('bem').blocks;
    var BEMHTML = require('bemhtml');
    var newThumbs = $.extend({}, cache.get('thumbs'));
    var maxIndex = getMaxIndex(newThumbs);

    function updateThumb(index, item, oldItem, cmpResult) {
        var thumb = page().findBlockInside({block: 'b-tumb', modName: 'index', modVal: '' + index});

        if (thumb) {
            var size = parseInt(thumb.domElem.width(), 10),
                html = BEMHTML.apply(blocks['b-tumb'](item, index, size));

            // изменился скриншот, сначала грузим его
            if (oldItem && item && oldItem.screenshot && item.screenshot && oldItem.screenshot.url !== item.screenshot.url) {
                (function(html, thumb) {
                    $('<img style="top: -1000px; left: -1000px; opacity:0; position:absolute;" src="' + item.screenshot.url + '">')
                        .prependTo('body')
                        .on('load', function() {
                            if (thumb.domElem) {
                                BEM.DOM.update(thumb.domElem.parent(), BEMHTML.apply(html));
                            }
                            $(this).remove();
                        })
                        .on('error', function() {
                            if (thumb.domElem) {
                                BEM.DOM.update(thumb.domElem.parent(), BEMHTML.apply(html));
                            }
                            $(this).remove();
                        });
                })(html, thumb);
            } else {
                BEM.DOM.update(thumb.domElem.parent(), html);
            }
        }
    }

    function repinThumb(index, item) {
        var pinned = (item || {}).pinned;
        var thumb = page().findBlockInside({block: 'b-tumb', modName: 'index', modVal: '' + index});
        var item = thumb && thumb.findElem('control-item', 'type', (pinned ? 'pin' : 'unpin'));

        if (thumb && item) {
            thumb.setMod(item, 'type', (pinned ? 'unpin' : 'pin'));
        }
    }

    // увеличилось или уменьшилось количество тумб, перерисовываем все
    if (maxIndex !== _renderedThumbsMaxIndex) {
        _renderedThumbs = newThumbs;
        _renderedThumbsMaxIndex = maxIndex;
        page().hideRestoreThumbsPopup('thumbsChanged', true);
        
        var thumbsHTML = BEMHTML.apply(blocks['b-tumbs'](newThumbs));

        page().findAndDestruct('b-tumbs');
        $('.b-vb__content .b-vb__td').prepend(thumbsHTML);
        BEM.DOM.init();
        page().updateWidth();
        return;
    }

    var isSameObjects = require('utils').isSameObjects;

    var restorePopupClosed = false;
    var rendered = {};

    for (var index = 0; index <= maxIndex; ++index) {

        var newThumb = normalizeThumb(newThumbs[index]);
        var oldThumb = normalizeThumb(_renderedThumbs[index]);
        rendered[index] = newThumb;

        // statParam - неучитываем при изменении тумбы
        delete newThumb.statParam;
        delete oldThumb.statParam;

        // ничего не изменилось
        if (isSameObjects(newThumb, oldThumb)) {
            continue;
        }

        var cmp = cmpTumbs(newThumb, oldThumb);

        if (!restorePopupClosed && (cmp > CMP_RESULT_VISUAL)) {
            page().hideRestoreThumbsPopup('thumbsChanged');
            restorePopupClosed = true;
        }

        if (cmp == CMP_RESULT_REPIN) {
            repinThumb(index, newThumb);
        } else {
            updateThumb(index, newThumb, oldThumb, cmp);
        }
    };

    _renderedThumbs = rendered;
}

/**
 * Метод построения BEM-дерева пустой прозрачной тумбы заглушки
 *
 * @param {Object} item Данные о конкретной тумбе
 * @param {Number} index Порядковый номер тумбы начиная с 0-ля
 * @param {Number} size Ширина тумбы в px, высота считается как size / 2
 * @param {Boolean} isSuggest тип тумбы - саджестная или нет. Флаг будет отражатся свойством isSuggest
 *
 * @return {Object} bemjson структура
 */
blocks['b-tumb_state_empty'] = function(item, index, size, isSuggest) {
    index = parseInt(index, 10);

    var Lib = require('lib'),
        modSize = Lib.getThumbSizeMod(size);

    item = item || {pinned: false};

    return {
        block: 'b-tumb',
        mods: {
            size: modSize,
            index: '' + index,
            color: '000000',
            theme: !isSuggest ? getEmptyThumbColor() : '',
            editing: (cache.get('editingThumb') || {}).index == index ? 'yes' : 'no',
            state: 'empty',
            'suggest': isSuggest ? 'yes' : ''
        },
        js: {
            index: index,
            empty: 'yes',
            item: item
        },
        attrs: {
            draggable: false,
            // VB-2233
            'aria-label': 'thumb' + (index + 1)
        }
    };
};

channels('api').on('historyThumbChanged', function(item) {
    var editingThumb = cache.get('editingThumb') || {};

    if (editingThumb.data && editingThumb.data.url === item.url) {
        editingThumb.data = item;

        cache.set('editingThumb', editingThumb);
    }
});

channels('cache').on('editingThumb', function(newVal, oldVal) {
    var editingThumb = $('.b-tumb').bem('b-tumb').__self.getEditingThumb();

    if (editingThumb) {
        if (newVal.data) {
            editingThumb.beAnotherThumb(newVal.data);
        } else {
            editingThumb.beNormal();
        }
    }
});

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-tumb', /** @lends Block.prototype */ {

    _timerId: null,

    onSetMod: {

        js: function() {
            this.isSuggest = this.getMod('suggest') === 'yes';

            if (!this.params.item.backgroundColor) {
                this.setMod('white', 'yes');
            }

            if (!this.isSuggest) {
                this.updateWidth(this.getMod('size'));
            }

            var _self = this.__self,
                _this = this,
                $img = this.domElem.find('img');

            if (!_self._bThumbs || !_self._bThumbs.domElem) {
                _self._bThumbs = this.findBlockOutside('b-tumbs');
            }

            if (!$img.length)
                return;

            $img.on('error', function(e) {
                _this._onImageCorrupted(e);
            });

            $img.on('load', function(e) {
                if ($img.width() === 1 && $img.height() === 1) {
                    _this._onImageCorrupted(e);
                }
            });
        },

        'show-hint': function(modName, modVal, oldVal) {
            // вынести подсказки из тумб!
            if (modVal === 'yes') {
                this.findElem('hint').text(parseInt(this.params.index, 10) + 1);
            } else if (modVal === '') {
                this.findElem('hint').text('');
            }
        },

        index: function(modName, modVal, oldVal) {
            if (this.params) {
                (this.params || {}).index = parseInt(modVal, 10);
            }
        },

        size: function(modName, modVal) {
            this.updateWidth(modVal);
        }
    },

    onElemSetMod: {
        'control-item': {
            type: {
                pin: function(elem) {
                    elem.attr('title', vb.getLocalizedString('app.pinThumb'));
                },

                unpin: function(elem) {
                    elem.attr('title', vb.getLocalizedString('app.unpinThumb'));
                }
            }
        }
    },

    updateWidth: function(modVal) {
        this.findBlockOutside('b-tumbs').setMod(this.domElem.parent(), 'size', modVal);
    },

    _onImageCorrupted: function(e) {
        var bgClass = this.buildSelector('bg-image').slice(1),
            favClass = this.buildSelector('fav-image').slice(1),
            screenshotClass = this.buildSelector('screenshot-image').slice(1),
            index = this.params.index,
            $target = $(e.target),
            thumbs = cache.get('thumbs'),
            updateThumb = false;

        if ($target.hasClass(bgClass)) {
            updateThumb = true;
            delete thumbs[index].backgroundImage;
        } else if ($target.hasClass(favClass)) {
            updateThumb = true;
            delete thumbs[index].favicon;
        } else if ($target.hasClass(screenshotClass)) {
            updateThumb = true;
            delete thumbs[index].screenshot;
        }

        if (updateThumb) {
            cache.set('thumbs', thumbs);
            this.__self.repaintThumbs([index]);
        }
    },

    _openSpeculativeConnect: function () {
        vb.openSpeculativeConnect(this.params.item.url);
    },

    _repin: function(newPin) {
        var index = parseInt(this.getMod('index'), 10);

        this.__base.apply(this, arguments);
        newPin ? vb.pinThumb(index) : vb.unpinThumb(index);
        vb.stat('thumb.pin.' + (newPin ? 'on' : 'off'));

        return this;
    },

    beAnotherThumb: function(item) {
        if (!this.domElem) {
            return;
        }

        this.beNormal();

        this.setMod('fake', 'yes');
        var blocks = require('bem').blocks,
            settings = cache.get('settings'),
            bemjson = blocks['b-tumb'](item, this.params.index, this.domElem.width(), false),
            html = require('bemhtml').apply(bemjson);

        this.domElem.after(html);
        var newThumb = this.domElem.next();
        newThumb.css({
            position: 'absolute',
            left: 0,
            top: 0
        });
        this.beFakeTransparent();
    },

    _onMouseDown: function(e) {
        return this._initDragAndDrop(e);
    },

    _onMouseOver: function(e) {
        if (page().isSettingsShown())
            return;

        if (this.isSuggest) {
            if (!this.params.empty) {
                var editingThumb = cache.get('editingThumb');

                if (!editingThumb) {
                    return;
                }

                editingThumb.data = $.extend({}, this.params.item);
                cache.set('editingThumb', editingThumb);
            }
            return;
        }

        this._timerId = setTimeout((function() {
            if (!this.params)
                return;

            if (this.domElem && !this.params.empty) {
                this._onControlShow();
            }
        }).bind(this), 700);
    },

    _onMouseOut: function() {
        if (page().isSettingsShown())
            return;

        if (this.isSuggest) {
            var editingThumb = cache.get('editingThumb');

            if (!editingThumb) {
                return;
            }

            // при открытии настроек вызывается _onMouseOut
            if (editingThumb) {
                delete editingThumb.data;
                cache.set('editingThumb', editingThumb);
            }

            return;
        }

        if (this.domElem) {
            var settingsBlock = page().findBlockInside('b-setting');

            this.setMod(this.findElem('control'), 'hide', 'yes');
            if (this.hasMod('type', '6')) {
                this.setMod(this.findElem('control-bg'), 'hide', 'yes');
            }
        }

        if (this._timerId) {
            clearTimeout(this._timerId);
        }
    },

    _onControlShow: function() {
        if (this.__self.isSettingsShown())
            return;

        try {
            if (this.hasMod('type', '6')) {
                this.delMod(this.findElem('control-bg'), 'hide');
            }
            this.delMod(this.findElem('control'), 'hide');
        } catch(e) {}
    },

    _onControlItemClick: function(e, type) {
        e.stopPropagation();
        e.preventDefault();

        if (this.__self.isSettingsShown())
            return;

        var handler = '_on' + type.capitalize(),
            bThumbs = this.findBlockOutside('b-tumbs'),
            item = bThumbs.findElem('item', 'index', this.getMod('index'));

        bThumbs.delMod(item, 'state');

        if (!(handler in this)) {
            throw ReferenceError('No handler for control item type "' + type + '" need implementation of method "' + handler + '"');
        }
        this[handler].apply(this);
    },

    _onPin: function(e) {
        this.pin();
    },

    _onUnpin: function(e) {
        this.unpin();
    },

    // settingsMod = "add" || "set"
    _onSet: function(settingsMod, fromContextMenu) {
        this._set.apply(this, arguments);
    },

    _onDel: function(fromContextMenu) {
        this.remove(fromContextMenu);
    },

    _set: function(settingsMod, fromContextMenu) {
        // при клике на шестеренку будет срабатывать сразу _onSet, settingsMod придет пустой
        settingsMod = settingsMod || this.params.empty ? 'add' : 'set';

        if (!fromContextMenu) {
            vb.stat('thumb.' + settingsMod);
        }

        var bPage = page(),
            bThumbs = bPage.findBlockInside('b-tumbs'),
            bSetting = bPage.findBlockInside('b-setting'),
            index = this.getMod('index');

        //создаем b-setting и паранжу если их еще нет
        if (!bSetting) {
            var blocks = require('bem').blocks,
                newJson = [
                    blocks['b-setting']()
                ],
                BEMHTML = require('bemhtml');

            BEM.DOM.append(bPage.domElem, BEMHTML.apply(newJson));
            bSetting = bPage.findBlockInside('b-setting');
        }

        // Выставляем флаги того что тумба текущая и что ее начали редактировать
        bThumbs.findBlocksInside(this.__self.getName()).forEach(function(block) {
            block.delMod('state').delMod('editing');
        });
        bThumbs.delMod(bThumbs.findElem('item'), 'editing', 'no');
        bThumbs.setMod(bThumbs.findElem('item', 'index', index), 'editing', 'yes');
        this.setMod('editing', 'yes');
        cache.set('editingThumb', {
            index: index
        });

        // Выставляем значения в полях из параметров тумбы
        var item = cache.get('thumbs')[this.params.index],
            title = item && item.title || '';

        bSetting.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'url'}).val(item && item.url || '');
        bSetting.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'title'}).val(title.trim());
        bSetting.delMod('hide');
        bSetting.setMod('action', settingsMod);
    },

    hasHttpURL: function() {
        return (/^https?:\/\/.+/).test(this.params.item.url);
    },

    beFakeEmpty: function() {
        if (this.params.empty)
            return;

        if (!this.domElem)
            return;

        this.setMod('pseudo-empty', 'yes');
        this.setMod('theme', getEmptyThumbColor());

        var $this = this.domElem;

        $this.attr('data-style', $this.attr('style'));
        $this.removeAttr('style');
    },

    beFakeTransparent: function() {
        if (this.params.empty)
            return;

        this.setMod('pseudo-transparent', 'yes');

        var $this = this.domElem;

        $this.attr('data-style', $this.attr('style'));
        $this.removeAttr('style');
    },

    beNormal: function() {
        if (!this.domElem)
            return;

        this.delMod('fake');
        var fakeThumb = this.domElem.next();

        if (fakeThumb.length && fakeThumb.is('.b-tumb')) {
            fakeThumb.remove();
        }

        if (this.params.empty)
            return;

        this.delMod('pseudo-empty');
        this.delMod('pseudo-transparent');
        this.delMod('theme');
        var $this = this.domElem;

        $this.attr('style', $this.attr('data-style'));
        $this.removeAttr('data-style');
    },

    _onClick: function (e) {
        if ($(e.target).attr('class').indexOf('control-item') > 0) {
            return;
        }

        if (this.getMod('editing') === 'yes') {
            e.preventDefault();
            return;
        }

        if (!this.params)
            return;

        // для тумб-саджестов
        if (this.isSuggest) {
            if (e.which === 3)
                return;

            if (!this.hasMod('state', 'empty')) {
                var radio = this.findBlockOutside('b-setting').findBlockInside('radio-button'),
                    param = (radio.val() === 'top-sites') ? 'thumb.adddone.popular.' : 'thumb.adddone.recent.',
                    offset = parseInt(page().findBlockInside('b-tumbs-lib').getMod('offset'), 10),
                    thumbIndex = parseInt(this.getMod('index'), 10) + 1 + offset;
                page().findBlockInside('b-setting').submitThumb(param + thumbIndex, this.params.item);
            }
            return;
        }

        if (this.findBlockOutside('b-page').isSettingsShown()) {
            e.preventDefault();
            return;
        }

        if (!this.hasMod('state', 'empty') && !this.params.empty) {
            vb.openThumb(this.domElem.attr('href'), parseInt(this.params.index, 10), this.__self._getNavigateCode(e));
        } else {
            if (this.hasMod('show-plus', 'yes') && e.which !== 2 && e.which !== 3)
                this.add();
        }

        // FIXME
        // поменять в 2.9
        // https://st.yandex-team.ru/VBCHROME-87
        if (vb.navigator === 'chromium')
            e.preventDefault();

        // тк живем в одном фрейме, то после перехода убираем фокус
        if (vb.navigator === 'ie') {
            this.domElem && this.domElem.blur();
        }

        if (!this.hasMod('state', 'empty') && !this.params.empty) {
            var index = this.params.index,
                statParam = (cache.get('thumbs')[index] || {}).statParam;

            if (statParam && e.which !== 3)
                vb.stat('thumb.click.' + (index + 1) + '.' + statParam);
        }

        return true;
    },

    // остановить драгндроп
    stopDnD: function() {
        // FIXME
        return this;
    },

    // вернуть драгндроп
    startDnD: function() {
        // FIXME
        return this;
    },

    // отпинить тумбу
    unpin: function() {
        this._repin(false);

        return this;
    },

    // запинить тумбу
    pin: function() {
        this._repin(true);

        return this;
    },

    // удалить тумбу
    remove: function(fromContextMenu) {
        if (!fromContextMenu) {
            vb.stat('thumb.del');
        }

        var index = parseInt(this.params.index, 10);

        require('modals').confirm(vb.getLocalizedString('app.confirmRemoveThumb'), function(confirmed) {
            if (!confirmed)
                return;

            vb.stat('thumb.deldone');
            // VB-3386
            // нельзя использовать this, так как тумба может перерисоваться
            var thumbToRemove = $('.b-tumb_index_' + index).bem('b-tumb'),
                removingIndex = index,
                currentLayout = page().getLayout(),
                newLayout = page().getLayoutOfThumbsNumber(currentLayout.thumbsCount - 1),
                lastIndex = currentLayout.thumbsCount - 1,
                size = thumbToRemove.domElem.width(),
                needFullRepaint = currentLayout[0] !== newLayout[0],
                promises = [];

            function callback() {
                setTimeout(function() {
                    vb.removeThumb(index);
                }, 0);
                page().findBlocksInside('b-tumb').forEach(function(thumb) {
                    thumb.delMod('in-motion');
                });

                page().updateWidth();
            }

            thumbToRemove.beFakeTransparent();

            if (!needFullRepaint) {
                if (index !== currentLayout.thumbsCount - 1) {
                    do {
                        promises.push(window.swapThumbs(++removingIndex, removingIndex - 1, false));
                    } while (removingIndex !== lastIndex);

                    $.when.apply($, promises).then(function() {
                        createEmptyThumb(newLayout.thumbsCount, size);
                        callback();
                    });
                } else {
                    makeThumbEmpty(index, thumbToRemove.domElem.width());
                    callback();
                }

                if (currentLayout[1] !== newLayout[1]) {
                    BEM.DOM.destruct($('.b-tumbs .b-tumbs__row:last'));
                }
            }

            var thumbs = cache.get('thumbs'),
                i = index;

            while (i !== lastIndex + 1) {
                thumbs[i] = thumbs[i + 1];
                i++;
            }

            // 5x3 -> 4x3 нужно перерисовать всю сетку
            if (needFullRepaint) {
                page().findAndDestruct('b-tumbs');

                var BEMHTML = require('bemhtml'),
                    blocks = require('bem').blocks,
                    thumbsHTML = BEMHTML.apply(blocks['b-tumbs'](thumbs));

                $('.b-vb__content .b-vb__td').prepend(thumbsHTML);
                BEM.DOM.init();
                callback();
            }

            channels('dom').emit('layoutChanged');

            cache.set('thumbs', thumbs);
            page().hideRestoreThumbsPopup('removeThumb');
        }.bind(this));

        return this;
    },

    // включить настройки тумбы
    set: function(fromContextMenu) {
        this._set('set', fromContextMenu);

        return this;
    },

    add: function(fromContextMenu) {
        this._set('add', fromContextMenu);

        return this;
    },

    // саджестная тумба или обычная
    isSuggest: null

}, /** @lend Block */ {
    _getNavigateCode: function(e /** {Event} */) {
        var code = 1;

        // Открываем в новом окне
        if (e.shiftKey) {
            code = 2;
            // Открываем в новом табе
        } else if (e.ctrlKey || e.metaKey) {
            code = 3;
        }

        if (e.which === 2) {
            code = 3;
        }
        return code;
    },

    isSettingsShown: function() {
        var setting = $('.b-page').bem('b-page').findBlockInside('b-setting');

        if (setting && setting.getMod('hide') !== 'yes')
            return true;

        return false;
    },

    clean: function() {
        this._clone && this._clone.remove();
        this._clone = null;
        this._dragged = null;
        this._dropzone = null;
        this._cursor = null;
        this._draggingIndex = null;
        this._enteredIndex = null;
    },

    /*
     * днд начался (только для ие)
     */
    _dndStarted: false,

    /*
     * через сколько мс можно показать клон тумбы для ие
     */
    _showCloneTime: 400,

    /*
     * через сколько мс считаем, что начался днд
     */
    _dragTimeout: 400,

    /**
     * показана ли кратинка днд
     */
    _dragImageShown: false,

    /**
     * допустимое изменение позиции мыши для того, чтобы не учитывать dnd в ie
     *
     * @type {Number}
     */
    _maxDelta: 30,

    /**
     * Позиция курсора в момент начала dnd
     *
     * @type {Object|null}
     */
    _cursor: null,

    /**
     * Флаг останавливающий механизм драгндропа
     *
     * @type {Boolean}
     */
    stopDnD: false,

    /**
     * Позиция копии перетаскиваемой тумбы для css3 днд
     *
     * @param {Object} dropCursor позиция курсора в момент дропа {x:x, y:y}
     * @param {Object} self jQuery объект текущего блока
     * @returns {Object} {left: x, top: y}
     */
    _cloneOfDraggingThumbPosition: function(dropCursor, self) {
        var navigator = vb.navigator;

        return {
            left: dropCursor.x - (self.width() / 2),
            top: dropCursor.y - (self.height() / 2)
        };
    },

    /**
     * Красивый драгндроп или обычный
     *
     * @returns {Boolean}
     */
    _isTransitionedDnd: function() {
        return ( (vb.navigator === 'ie' && vb.navigatorMajorVersion > 9) || (vb.navigator === 'firefox') || (vb.navigator === 'chromium'));
    },

    /**
     * Перетаскиваемая тумба
     *
     * @type {Object|null}
     */
    _dragged: null,

    /**
     * Тумба на место которой бросают тумбу
     *
     * @type {Object|null}
     */
    _dropzone: null,

    dragTimeouts: [],

    /**
     * Браузерный префикс, не привязанный к стилям
     *
     * TODO replaced var
     */
    prefix: function() {
        switch (vb.navigator) {
            case 'ie':
                return '-ms-';
            case 'firefox':
                return '-moz-';
            case 'chromium':
                return '-webkit-';
        }
        return '';
    },

    /**
     * Клон перетаскиваемого блока для отображения
     *
     * @type {Object|null}
     */
    _bThumbs: null,

    /**
     * Ссылка на таймаут vb.saveThumbs во время днд с transition
     * Если тумбу дропнули, а потом сразу начали тащить другую, то очищаем этот таймаут
     */
    _saveThumbsTimeoutId: null,

    getEditingThumb: function() {
        var index = (cache.get('editingThumb') || {}).index,
            editingThumb = null;

        if (typeof index === 'string') {
            editingThumb = page().findBlockInside('b-tumbs').findBlockInside({block: 'b-tumb', modName: 'index', modVal: index});
        }

        return editingThumb;
    },

    live: function() {
        var ie78 = (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9);

        this.liveBindTo('control-item-click', 'leftclick', function(e) {
                var itemClass = this.buildSelector('control-item'),
                    item = $(e.target).closest(itemClass);

                if (!item.length)
                    item = $(e.target).children(itemClass);

                e.preventDefault();

                this._onControlItemClick(e, this.getMod(item, 'type'));
                return false;
            })
            .liveBindTo('click', function(e) {
                if (this.isSuggest)
                    return this._onClick(e);

                if ($(e.target).hasClass(this.buildSelector('click').slice(1)) || vb.navigator === 'ie')
                    this._onClick(e);
            });

        this.liveBindTo('drag dragstart', function(e) {
            e.preventDefault();
        });

        this.liveBindTo('mouseover', function() {
            // если клон тумбы, то ничего не делать
            if (!this.params)
                return;

            this._onMouseOver.apply(this, arguments);

            if (this.params.empty === 'yes' || this._connected)
                return;

            this._openSpeculativeConnect(this.params.item.url);
            this._connected = true;
        });

        this.liveBindTo('mouseout', function() {
            this._onMouseOut.apply(this, arguments);
        });

        this.liveBindTo('control', 'mouseover', function() {
            this._onControlShow.apply(this, arguments);
        });

        this.liveBindTo('mousedown', function(e) {
            this._onMouseDown(e);
        });

        return false;
    },

    // перерисовать тумбы в независимости от того, изменилось что-то в структуре тумб или нет
    repaintThumbs: function(indexes) {
        if (!indexes.length)
            return;

        var BEM = require('bem').BEM,
            blocks = require('bem').blocks,
            BEMHTML = require('bemhtml'),
            winSize = page().__self.getWindowSize(),
            thumbs = cache.get('thumbs'),
            Lib = require('lib');

        indexes.forEach(function(index) {
            var item = thumbs[index],
                thumb = page().findBlockInside({block: 'b-tumb', modName: 'index', modVal: '' + index});

            if (thumb) {
                var size = parseInt(thumb.domElem.width(), 10),
                    oldItem = thumb.params.item,
                    html = BEMHTML.apply(blocks['b-tumb'](item, index, size));

                // изменился скриншот, сначала грузим его
                if (oldItem && item && oldItem.screenshot && item.screenshot && oldItem.screenshot.url !== item.screenshot.url) {
                    (function(html, thumb) {
                        $('<img style="top: -1000px; left: -1000px; opacity:0; position:absolute;" src="' + item.screenshot.url + '">')
                            .prependTo('body')
                            .on('load', function() {
                                BEM.DOM.update(thumb.domElem.parent(), BEMHTML.apply(html));
                                $(this).remove();
                            })
                            .on('error', function() {
                                $(this).remove();
                            });
                    })(html, thumb);
                } else {
                    BEM.DOM.update(thumb.domElem.parent(), html);
                }
            }
        });
    }
});

})();

/* end: ../../blocks-desktop/b-tumb/b-tumb.js */
/* begin: ../../blocks-desktop/b-tumb/__dnd/b-tumb__dnd.js */
// Драгндроп тумб

(function(undefined) {
    var ANIMATION_SPEED = 200;
    // сколько времени должна тащиться тумба, чтобы понять, что это драгндроп, а не кривой клик
    var DRAG_START_TIMEOUT = 200;
    var SWAP_TIMEOUT = 100;

    var swappingThumbs = {},
        swappingTargets = {},
        // из-за текущей реализации доезжание тумб может одновременно работать только в одну сторону иначе вот:
        // http://jing.yandex-team.ru/files/megatolya/2015-02-02_1908.swf?width=994&height=768
        swappingSide = 0,
        swappingCounts = 0;

    // можно вызывать только от большей к меньшей, например
    // swapThumbs(2,3, false);swapThumbs(1,2, false);
    window.swapThumbs = function(from, to, moveTarget) {

        if (moveTarget !== false) {
            moveTarget = true;
        }

        var promise = $.Deferred();

        function callback() {
            delete swappingThumbs[from];
            delete swappingTargets[from];
            swappingCounts--;

            if (swappingCounts === 0) {
                swappingSide = 0;
                page().findBlocksInside('b-tumb').forEach(function(thumb) {
                    thumb.delMod('in-motion');
                });
            }
            promise.resolve();
        }

        if (from in swappingThumbs) {
            return;
        }

        swappingThumbs[from] = true;
        swappingCounts++;

        from = '' + from;
        to = '' + to;

        var bThumbs = page().findBlockInside('b-tumbs'),
            fromThumb = bThumbs.findBlockInside({block: 'b-tumb', modName: 'index', modVal: from}),
            toThumb = bThumbs.findBlockInside({block: 'b-tumb', modName: 'index', modVal: to});

        if (!toThumb) {
            if (!fromThumb) {
                return;
            }

            createEmptyThumb(to, fromThumb.domElem.width());
            toThumb = page().findBlockInside({block: 'b-tumb', modName: 'index', modVal: to});

            if (!toThumb) {
                return;
            }
        }

        var toParent = bThumbs.findElem('item', 'index', to).eq(0),
            toOffset = toParent.offset();

        fromThumb.domElem
            .css($.extend({
                position: 'absolute',
                zIndex: 9999 * parseInt(from, 10)
            }, fromThumb.domElem.offset()))
            .appendTo('body');

        fromThumb.domElem.transition(toOffset, ANIMATION_SPEED, function() {
            if (!toThumb.hasMod('in-motion', 'yes')) {
                toThumb.destruct();
            }

            fromThumb.domElem.appendTo(toParent).css({
                position: 'static'
            });
            fromThumb.setMod('index', to);

            BEM.DOM.init();
            callback();
            promise.resolve();
        });

        fromThumb.setMod('in-motion', 'yes');

        return promise;
    };

    var draggingIndex = -1;
    var draggingItem = null;
    var hoveredIndex = -1;
    var prevHovered = -1;
    var draggingClone = null;
    var $doc = $(document);
    // [[100, 300], [320, 520]]
    // массив координат тумб по x вида [от, до]
    // нужно, чтобы понять, попал ли курсор в тумбу
    var thumbsCoordsX = null;
    // тоже самое только y
    var thumbsCoordsY = null;

    // позиция курсора - позиция тумбы
    var posDiff = null;

    function getThumbIndexByEvent(e, fromDragEnd) {
        var indexX = -1,
            indexY = -1,
            x = e.clientX,
            y = e.clientY;

        thumbsCoordsX.some(function(fromTo, index) {
            var from = fromTo[0],
                to = fromTo[1];

            if (x > from && x < to) {
                indexX = index;
                return true;
            }

            return false;
        });

        thumbsCoordsY.some(function(fromTo, index) {
            var from = fromTo[0],
                to = fromTo[1];

            if (y > from && y < to) {
                indexY = index;
                return true;
            }

            return false;
        });

        if (indexX !== -1 && indexY !== -1) {
            var currentHoveredIndex = (indexY * page().getLayout().x) + indexX;

            if (currentHoveredIndex in swappingTargets) {
                return -1;
            }

            if (currentHoveredIndex !== previouslyEntered || fromDragEnd) {
                var item = cache.get('thumbs')[currentHoveredIndex];

                if (!item || !item.url) {
                    return -1;
                }

                previouslyEntered = currentHoveredIndex;
                return currentHoveredIndex;
            } else {
                return -1;
            }
        } else {
            if (hoveredIndex !== -1) {
                onDragLeave(e);
            }

            return -1;
        }
    }

    function createEmptyThumb(index, size) {
        var BEMHTML = require('bemhtml'),
            blocks = require('bem').blocks,
            thumb = BEMHTML.apply(blocks['b-tumb'](null, index, size)),
            thumbs = page().findBlockInside('b-tumbs');

        thumbs.findElem('item', 'index', '' + index).html(thumb);
        BEM.DOM.init();
    }

    var previouslyEntered = -1;

    function onDrag(e) {
        var x = e.clientX,
            y = e.clientY;

        draggingClone.offset({
            left: x - posDiff.left,
            top: y - posDiff.top
        });

        var thumbIndex = getThumbIndexByEvent(e);

        if (thumbIndex !== -1) {
            onDragEnter(e, thumbIndex);
        }
    }

    var swapTimeout;

    function onDragEnter(e, currentHoveredIndex) {
        if (hoveredIndex === currentHoveredIndex) {
            return;
        }

        swapTimeout = setTimeout(function() {
            var newSwappingSide = hoveredIndex < currentHoveredIndex ? -1 : 1;

            if (swappingSide && newSwappingSide !== swappingSide) {
                return;
            }

            prevHovered = hoveredIndex;
            hoveredIndex = currentHoveredIndex;

            var thumbIndex = prevHovered;
            swappingTargets[currentHoveredIndex] = true;
            if (prevHovered < hoveredIndex) {
                swappingSide = -1;
                do {
                    window.swapThumbs(++thumbIndex, thumbIndex - 1, false);
                } while (thumbIndex !== hoveredIndex);
            } else if (prevHovered > hoveredIndex) {
                swappingSide = 1;
                do {
                    window.swapThumbs(--thumbIndex, thumbIndex + 1,  false);
                } while (thumbIndex !== hoveredIndex);
            }
        }, SWAP_TIMEOUT);
    }

    function onDragLeave(e) {
        clearTimeout(swapTimeout);
    }

    function onDragEnd(e) {
        function asyncClean() {
            draggingClone.remove();
            draggingClone = null;
            draggingItem = null;
            channels('api').invoke('thumbChanged');
        }

        page().delMod('dnd');

        var thumbIndex = getThumbIndexByEvent(e, true),
            targetIndex = thumbIndex;

        if (thumbIndex === -1) {
            targetIndex = hoveredIndex;
        }

        if (previouslyEntered !== hoveredIndex) {
            targetIndex = hoveredIndex;
        }

        var bThumbs = page().findBlockInside('b-tumbs');
        var thumb = bThumbs.findElem('item', 'index', '' + targetIndex);

        draggingClone.transition(thumb.offset(), ANIMATION_SPEED, function() {
            var BEMHTML = require('bemhtml'),
                blocks = require('bem').blocks,
                html = BEMHTML.apply(blocks['b-tumb'](draggingItem, targetIndex, thumb.width()));

            thumb.html(html);
            BEM.DOM.init();

            if (draggingIndex !== targetIndex) {
                setTimeout(function() {
                    vb.stat('thumb.dnd');
                    // VB-4325
                    // Строго integer
                    vb.swapThumbs(parseInt(draggingIndex, 10), parseInt(targetIndex, 10));
                    draggingIndex = -1;
                }, 0);
            }

            asyncClean();
        });

        onDndFinished();
    }

    function onDndFinished() {
        $doc.off('mousemove', onDrag);
        $doc.off('mouseup', onDragEnd);

        clearTimeout(swapTimeout);

        prevHovered = -1;
        hoveredIndex = -1;
        previouslyEntered = -1;
        posDiff = null;
        thumbsCoordsX = null;
        thumbsCoordsY = null;
        swapTimeout = null;
    }

    function calcThumbsCoords() {
        var layout = page().getLayout(),
            thumbs = page().findBlockInside('b-tumbs'),
            thumb,
            $win = $(window),
            scrollLeft = $win.scrollLeft(),
            scrollTop = $win.scrollTop(),
            i;

        thumbsCoordsX = [];
        thumbsCoordsY = [];

        for (i = 0; i < layout.x; i++) {
            thumb = thumbs.findBlockInside({
                block: 'b-tumb',
                modName: 'index',
                modVal: '' + i
            });

            if (!thumb || !thumb.domElem) {
                continue;
            }

            thumbsCoordsX.push(thumb.domElem.offset().left - scrollLeft);
        }

        for (i = 0; i < layout.y; i++) {
            thumb = thumbs.findBlockInside({
                block: 'b-tumb',
                modName: 'index',
                modVal: '' + (i * layout.x)
            });

            if (!thumb || !thumb.domElem) {
                continue;
            }

            thumbsCoordsY.push(thumb.domElem.offset().top - scrollTop);
        }

        var thumbWidth = thumb.domElem.width(),
            thumbHeight = thumb.domElem.height();

        thumbsCoordsX = thumbsCoordsX.map(function(left) {
            return [left, left + thumbWidth];
        });

        thumbsCoordsY = thumbsCoordsY.map(function(top) {
            return [top, top + thumbHeight];
        });
    }

    BEM.DOM.decl('b-tumb', {
        _onDragStart: function(e) {
            if (!this.domElem || !this.params) {
                return;
            }

            page().findBlocksInside('b-tumb').forEach(function(thumb) {
                thumb.delMod('in-motion');
            });

            if (Object.keys(swappingThumbs).length > 0) {
                return;
            }

            channels('api').revoke('thumbChanged', true);

            page().setMod('dnd', 'yes');
            prevHovered = hoveredIndex = draggingIndex = this.params.index;
            draggingItem = this.params.item;
            draggingClone = this.domElem.clone(false);
            draggingClone.removeClass('b-tumb_index_ ' + draggingIndex);
            draggingClone.css({
                position: 'absolute',
                zIndex: 9999999
            });
            draggingClone.appendTo('body');
            draggingClone.find('.b-tumb__control-bg').remove();
            draggingClone.find('.b-tumb__control').remove();

            var offset = this.domElem.offset();
            posDiff = {
                left: e.clientX - offset.left,
                top: e.clientY - offset.top
            };

            draggingClone.offset({
                left: e.clientX - posDiff.left,
                top: e.clientY - posDiff.top
            });

            var index = this.params.index;
            var width = this.domElem.width();

            this.destruct();
            createEmptyThumb(index, width);

            $doc.on('mousemove', onDrag);
            $doc.on('mouseup', onDragEnd);

            // вычисление thumbsCoordsX/thumbsCoordsY
            calcThumbsCoords();
        },

        _initDragAndDrop: function(e) {
            if (e.which !== 1) {
                return true;
            }

            if (this.isSuggest) {
                return false;
            }

            if (this.params.empty) {
                return false;
            }

            if (this.hasMod('editing', 'yes')) {
                return true;
            }

            var _this = this,
                dndTimeout = setTimeout(function() {
                    clearTimeoutFn();
                    _this._onDragStart(e);
                }, DRAG_START_TIMEOUT),
                clearTimeoutFn = function() {
                    clearTimeout(dndTimeout);
                    $doc.off('mouseup', clearTimeoutFn);
                };

            $doc.one('mouseup', clearTimeoutFn);
            return false;
        }
    });
})();

/* end: ../../blocks-desktop/b-tumb/__dnd/b-tumb__dnd.js */
/* begin: ../../libs/lego/blocks-desktop/b-link/b-link.js */
/** @requires BEM */
/** @requires BEM.HTML */

BEM.HTML.decl('b-link', {
    onBlock: function(ctx) {
        ctx
            .tag('a')
            .attr('href', ctx.param('url'));

        var props = ['title', 'target'], p;
        while(p = props.pop()) ctx.param(p) && (ctx.attr(p, ctx.param(p)));
    }
});

/* end: ../../libs/lego/blocks-desktop/b-link/b-link.js */
/* begin: ../../blocks-desktop/b-link/_open/b-link_open_bookmark.js */
BEM.DOM.decl({block: 'b-link', modName: 'open', modVal: 'bookmark'}, {
    _popupa: null,

    TITLE_MAX_LENGTH: 70,
    CLOSED_WINDOWS_DELIMETER: ', ',

    onSetMod: {
        js: function() {
            var self = this;

            self.__base.apply(self, arguments);
            self._popupa = self._popupa || self.findBlockOutside({block: 'b-dropdowna', modName: 'type', modVal: 'closed-bookmarks'})
                                               .findBlockInside('b-popupa');

            self.on('click', self._requestClosedPagesList, self);
        }
    },

    destruct: function() {
        this.un('click', this._requestClosedPagesList, this);
        this.__base.apply(this, arguments);
    },

    _requestClosedPagesList: function() {
        var titleMaxLength = this.TITLE_MAX_LENGTH,
            delimeter = this.CLOSED_WINDOWS_DELIMETER,
            popupa = this._popupa,
            BEMHTML = require('bemhtml'),
            Lib = require('lib'),
            BEM = require('bem').BEM;

        if (!popupa.isShowed())
            return;

        vb.stat('panel.closedtabs');
        vb.requestClosedPagesList(function(closed) {
            var items = [];

            closed.forEach(function(item) {
                var title;

                if (!item.isWindow) {
                    title = BEM.blocks['i-common__string'].escapeHTML(item.title && item.title.trim() || '');
                    items.push({
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            js: {
                                id: item.id
                            },
                            mix: [{
                                block: 'i-action',
                                elem: 'restore-tab'
                            }],
                            mods: {
                                inner: 'yes',
                                pseudo: 'yes'
                            },
                            content: [
                                {
                                    block: 'b-wrap',
                                    content: {
                                        block: 'b-icon',
                                        mix: [{
                                            block: 'b-link',
                                            elem: 'icon'
                                        }],
                                        url: item.favicon || '',
                                        width: 16,
                                        height: 16,
                                        alt: title
                                    }
                                },
                                {
                                    elem: 'inner',
                                    content: [
                                        title,
                                        title.length > titleMaxLength && {
                                            elem: 'gradient'
                                        }
                                    ],
                                    attrs: {
                                        title: title
                                    }
                                }
                            ]
                        }
                    });
                } else {
                    var domainsStr = item.domains.map(function(domain) {
                        return BEM.blocks['i-common__string'].escapeHTML(Lib.getUnicodedURL(domain));
                    }).join(', ');

                    title = vb.getLocalizedString('app.closedWindow') + ': ' + domainsStr;

                    items.push({
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            js: {
                                id: item.id
                            },
                            mix: [{
                                block: 'i-action',
                                elem: 'restore-tab'
                            }],
                            mods: {
                                inner: 'yes',
                                restore: 'windows',
                                pseudo: 'yes'
                            },
                            content: [
                                {
                                    elem: 'inner',
                                    content: [
                                        title,
                                        title.length > titleMaxLength && {
                                            elem: 'gradient',
                                            mods: {
                                                'closed-pages': 'yes'
                                            }
                                        } || null
                                    ],
                                    attrs: {
                                        title: title
                                    }
                                }
                            ]
                        }
                    });
                }
            });

            if (!closed.length) {
                items.push({
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        mods: {
                            inner: 'yes',
                            pseudo: 'yes',
                            disabled: 'yes'
                        },
                        content: vb.getLocalizedString('app.empty')
                    }
                });
            }

            popupa.setContent(BEMHTML.apply({
                block: 'b-menu-vert',
                mods: {
                    type: 'close-bookmark'
                },
                js: true,
                content: items
            }));

            /*
            // отрезаем текст так, чтобы влез.
            popupa
                .findBlocksInside({
                    block: 'b-link',
                    modName: 'restore',
                    modVal: 'windows'
                })
                .forEach(function(link) {
                    link.domElem.each(function() {
                        var inner = $(this).find(link.buildSelector('inner')),
                            popupaWidth = popupa.domElem.width(),
                            i = 0,
                            prevLength = 0;

                        while (inner.width() > popupaWidth) {
                            var text = inner.text().split(delimeter);

                            if (text.length <= 1)
                                break;

                            prevLength = text.length;
                            text.pop();
                            inner.text(text.join(delimeter));
                        }
                    });
                });
            */

        });
    }
});

/* end: ../../blocks-desktop/b-link/_open/b-link_open_bookmark.js */
/* begin: ../../blocks-desktop/i-action/i-action.js */
/** @requires BEM */
/** @requires BEM */
(function($, BEM, undefined) {
    function sendStat(e, param) {
        if (e.which !== 3)
            vb.stat(param);
    }

    BEM.DOM.decl('i-action', {
        hidePopups: function(e) {
            if (e.which === 3)
                return;

            $(':focus').blur();

            this
                .findBlocksInside('b-form-input')
                .forEach(function(input) {
                    input.clear();
                });

            this
                .findBlocksInside('i-popup')
                .forEach(function(block) {
                    if (!block.hasMod('type', 'tooltip')) {
                        block.hide();
                    }
                });

        },

        _onThumbListArrowClick: function (direction) {
            var bTumbsLib = this.findBlockInside('b-tumbs-lib'),
                currentOffset = parseInt(bTumbsLib.getMod('offset'), 10),
                state = bTumbsLib.getMod(bTumbsLib.findElem('arrow', 'type', direction), 'state'),
                offset;

            if (state === 'disabled')
                return;

            if (direction === 'right') {
                offset = currentOffset + 10;
            } else {
                if (currentOffset < 10)
                    offset = 0;
                else
                    offset = currentOffset - 10;

            }

            bTumbsLib.drawThumbsByOffset(offset);
        }
    }, {
        live: function() {
            //кнопка настройки
            this.liveBindTo('settings', 'leftclick', function (e) {
                var page = this.findBlockOn('b-page');

                if (!page.isSettingsShown()) {
                    vb.stat('panel.settings');
                    page.showSettings();
                } else {
                    page.hideSettings();
                }
            });

            //кнопка отмена
            this.liveBindTo('index', 'click', function() {
                this.trigger('config_cancel');
            });

            this.liveBindTo('upload-background-image', 'click', function (e) {
                if (e.which !== 3) {
                        this.findBlockInside('b-select-theme').uploadUserBackground();
                }
            });

            this.liveBindTo('close-search-tutorial', 'click', function () {
                this.findBlockOn('b-page').setMod('banner', 'no');
                vb.search.suppressTutorial();
            });

            this.liveBindTo('try-tutorial', 'click', function (e) {
                var text = this.findBlockInside({block: 'b-link', modName: 'omni', modVal: 'yes'}).domElem.text();

                e.preventDefault();
                vb.search.useExample(text);
            });

            this.liveBindTo('sync-vb', 'click', function(e) {
                var button = e.data.domElem.bem('b-form-button');

                if (button.hasMod('disabled', 'yes'))
                    return;

                button
                    .delMod('focused')
                    .setMod('disabled', 'yes');

                // VB-2616
                setTimeout(function() {
                    if (button && button.domElem) {
                        button.delMod('disabled');
                    }
                }, 3000);
                vb.stat('settings.synconvb');
                vb.sync.enableSyncVB();
            });

            this.liveBindTo('show-bookmarks', 'click', function (e) {
                sendStat(e, 'panel.bookmarks');
                if (e.which !== 3) {
                    vb.openExternalWindow('bookmarks');
                }
            });

            this.liveBindTo('bookmark', 'click', function (e) {
                sendStat(e, 'panel.bookpanel.link');
            });

            this.liveBindTo('show-history', 'click', function (e) {
                sendStat(e, 'panel.history');
                if (e.which !== 3) {
                    vb.openExternalWindow('history');
                }
            });

            this.liveBindTo('show-downloads', 'click', function (e) {
                sendStat(e, 'panel.downloads');
                if (e.which !== 3) {
                    vb.openExternalWindow('downloads');
                }
            });

            this.liveBindTo('hide-popup', 'click', function(e) {
                this.hidePopups(e);
            });

            this.liveBindTo('restore-tab', 'leftclick', function(e) {
                e.preventDefault();

                var bLinkClassName = 'b-link',
                    $link = $(e.target).closest('.' + bLinkClassName),
                    id = $link.bem(bLinkClassName).params.id;

                vb.stat('panel.closedtabs.' + ($('.i-action__restore-tab').index($link) + 1));
                this.hidePopups(e);
                vb.restoreTab(id);
            });

            this.liveBindTo('more-tumbs-right', 'click', function (e) {
                e.preventDefault();
                this._onThumbListArrowClick('right');
            });

            this.liveBindTo('more-tumbs-left', 'click', function (e) {
                e.preventDefault();
                this._onThumbListArrowClick('left');
            });

            this.liveBindTo('open-sync-page', 'click', function (e) {
                this.hidePopups(e);

                var statParam = 'settings.syncon';

                if (cache.get('sync').status === 3) {
                    statParam = 'settings.syncfix';
                }

                sendStat(e, statParam);
                vb.sync.openWP();
            });

            this.liveBindTo('turn-on-vb-sync', 'click', function (e) {
                vb.sync.enableSyncVB();
                return false;
            });

            this.liveBindTo('sync-settings-link', 'click', function (e) {
                sendStat(e, 'settings.syncset');
                vb.sync.openWP();
            });

            this.liveBindTo('login', 'leftclick', function (e) {
                e.preventDefault();
                vb.stat('auth.loginclick');
                vb.auth.login();
            });

            this.__base.apply(this, arguments);
        }
    });
})(jQuery, BEM);

/* end: ../../blocks-desktop/i-action/i-action.js */
/* begin: ../../libs/islands-components/common.blocks/button/button.js */
/**
 * Кнопка
 *
 * Может быть обычной кнопкой, кнопкой действия, кнопкой-ссылкой (если указать свойство `url` в BEMJSON),
 * кнопкой со счетчиком, псевдо-кнопкой, содержать иконку.
 */
BEM.DOM.decl('button', {

    /**
     * Генерируется, когда кнопка нажата.
     *
     * @event button#press
     */

    /**
     * Генерируется, когда кнопка отпущена.
     *
     * @event button#release
     */

    /**
     * @private
     */
    onSetMod: {

        'js': function() {

            var disabled = this.isDisabled(),
                domElem = this.domElem;

            (this._href = domElem.attr('href')) && disabled &&
                domElem.removeAttr('href');

        },

        'disabled': function(modName, modVal) {

            var isDisabled = modVal === 'yes',
                domElem = this.domElem;

            this._href && (isDisabled
                ? domElem.removeAttr('href')
                : domElem.attr('href', this._href));

            this.afterCurrentEvent(function() {
                domElem.attr('disabled', isDisabled);
            });

        },

        'pressed': function(modName, modVal) {

            if(this.isDisabled()) {
                return false;
            }

            this.trigger(modVal === 'yes' ? 'press' : 'release');

        }

    },

    /**
     * Проверяет состояние кнопки "Включена"/"Заблокирована".
     *
     * @public
     * @returns {Boolean} Возвращает `true`, если кнопка выключена.
     */
    isDisabled: function() {

        return this.hasMod('disabled', 'yes');

    },

    /**
     * Для кнопки-ссылки получает или устанавливает URL.
     *
     * @public
     * @param {String} [val] Адрес (URL) страницы для кнопки-ссылки. Если не задан, метод возвращает
     * текущее значение.
     * @returns {String|BEM.DOM} При установке значения, возвращает сам объект. При получении возвращает
     * текущее значение.
     */
    url: function(val) {

        if(typeof val === 'undefined') {
            return this._href;
        } else {
            this._href = val;
            this.isDisabled() || this.domElem.attr('href', val);
            return this;
        }

    },

    /**
     * @private
     */
    _onClick: function(e) {
        this.isDisabled()
            ? e.preventDefault()
            : this.afterCurrentEvent(function() {
                this.trigger('click');
            });
    }

}, {

    live: function() {
        this.liveBindTo('leftclick tap', function(e) {
            this._onClick(e);
        });
    }

});

/* end: ../../libs/islands-components/common.blocks/button/button.js */
/* begin: ../../libs/islands-components/desktop.blocks/button/button.js */
BEM.DOM.decl('button', {

    /**
     * Генерируется, когда кнопка получает фокус.
     *
     * @event button#focus
     */

    /**
     * Генерируется, когда кнопка теряет фокус.
     *
     * @event button#blur
     */

    onSetMod: {

        'js': function() {

            this.__base.apply(this, arguments);

        },

        'focused': {

            'yes': function() {

                if(this.isDisabled()) {
                    return false;
                }

                this
                    .bindToWin('unload', function() {
                        this.delMod('focused');
                    })
                    .bindTo('keydown', this._onKeyDown);

                this._isControlFocused() || this._getControl().focus();

                this.afterCurrentEvent(function() {
                    this.trigger('focus');
                });

            },

            '': function() {

                this
                    .unbindFromWin('unload')
                    .unbindFrom('keydown');

                this._isControlFocused() && this._getControl().blur();

                this.afterCurrentEvent(function() {
                    this.trigger('blur');
                });

            }

        },

        'disabled': function(modName, modVal) {

            this.__base.apply(this, arguments);

            modVal === 'yes' && this.domElem.keyup();

        },

        'hovered': function(modName, modVal) {

            if(this.isDisabled()) {
                return false;
            }

            modVal === '' && this.delMod('pressed');

        },

        'pressed': function() {

            this.isDisabled() || this.setMod('focused', 'yes');

            return this.__base.apply(this, arguments);

        }

    },

    /**
     * @private
     */
    '_getControl': function() {
        return this.elem('control').length && this.elem('control') || this.domElem;
    },

    /**
     * @private
     */
    _isControlFocused: function() {

        try {
            return this.containsDomElem($(this.__self.doc[0].activeElement));
        } catch(e) {
            return false;
        }

    },

    /**
     * @private
     */
    _onKeyDown: function(e) {

        var keyCode = e.keyCode;
        // имитируем state_pressed по нажатию на enter и space
        // 13 - enter, 32 - space
        if((keyCode === 13 || keyCode === 32) && !this._keyDowned) {
            this._keyDowned = true;
            this
                .setMod('pressed', 'yes')
                .bindTo('keyup', function() {
                    this
                        .delMod('pressed')
                        .unbindFrom('keyup');

                    delete this._keyDowned;

                    // делаем переход по ссылке по space
                    if(keyCode === 32 && this.domElem.attr('href')) {
                        document.location = this.domElem.attr('href');
                    }
                });
        }

    },

    /**
     * @protected
     */
    destruct: function() {

        this.delMod('focused');
        this.__base.apply(this, arguments);

    }

}, {

    live: function() {
        this.__base.apply(this, arguments);

        var eventsToMods = {
                'mouseover': {name: 'hovered', val: 'yes'},
                'mouseout': {name: 'hovered'},
                'mousedown': {name: 'pressed', val: 'yes'},
                'mouseup': {name: 'pressed'},
                'focusin': {name: 'focused', val: 'yes'},
                'focusout': {name: 'focused'}
            },
            isIE8 = $.browser.msie && $.browser.version === '8.0';

        this
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');

                /* https://st.yandex-team.ru/ISLCOMPONENTS-1104
                   Делаем reflow для IE8, восстанавливая сдвиг текста в кнопке (с тегом BUTTON) после клика.
                   Хак должен выполняется в тике события.
                 */
                if(isIE8 && !this._href && (e.type === 'mouseup' || e.type === 'mouseout')) {
                    this.domElem.height();
                }
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which === 1 && this.setMod(mod.name, mod.val || '');
            });
    }

});

/* end: ../../libs/islands-components/desktop.blocks/button/button.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-button/b-form-button.js */
BEM.DOM.decl('b-form-button', {

    onSetMod : {

        'js' : function() {

            var disabled = this.isDisabled();

            (this._href = this.domElem.attr('href')) && disabled &&
                this.domElem.removeAttr('href');

            this.elem('input').attr('disabled', disabled);

        },

        'focused' : {

            'yes' : function() {

                var _this = this;

                if(_this.isDisabled())
                    return false;

                _this
                    .bindTo('keydown', this._onKeyDown)
                    .elem('input').is(':focus') || _this.elem('input').focus();

                _this._unloadInited ||
                    (_this._unloadInited = $(window).bind('unload', function() {
                        _this.delMod('focused');
                    }));

            },

            '' : function() {

                this
                    .unbindFrom('keydown')
                    .elem('input').blur();

            }

        },

        'disabled' : function(modName, modVal) {

            var disable = modVal == 'yes';

            this._href && (disable?
                this.domElem.removeAttr('href') :
                this.domElem.attr('href', this._href));

            disable && this.domElem.keyup();

            this.afterCurrentEvent(function() {
                this.domElem && this.elem('input').attr('disabled', disable);
            });

        },

        'pressed' : function(modName, modVal) {

            this.isDisabled() || this.trigger(modVal == 'yes'? 'press' : 'release');
            this.isDisabled() || this.setMod('focused', 'yes');

        },

        'hovered' : {

            '' : function() {

                this.delMod('pressed');

            }

        },

        '*' : function(modName) {

            if(this.isDisabled() && 'hovered pressed'.indexOf(modName) > -1)
                return false;

        }

    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {

        return this.hasMod('disabled', 'yes');

    },

    /**
     * Получение/установка урла (для кнопки-ссылки)
     * @param {String} [val] урл
     */
    url : function(val) {

        if(typeof val == 'undefined') {
            return this._href;
        } else {
            this._href = val;
            this.isDisabled() || this.domElem.attr('href', val);
            return this;
        }

    },

    _onKeyDown : function(e) {

        var keyCode = e.keyCode;
        // имитируем state_pressed по нажатию на enter и space
        if((keyCode == 13 || keyCode == 32) && !this._keyDowned) {
            this._keyDowned = true;
            this
                .setMod('pressed', 'yes')
                .bindTo('keyup', function() {
                    this
                        .delMod('pressed')
                        .unbindFrom('keyup');
                    delete this._keyDowned;
                    // делаем переход по ссылке по space
                    if(keyCode == 32 && this.domElem.attr('href')) {
                        document.location = this.domElem.attr('href');
                    }
                });
        }

    },

    _onClick : function(e) {

        this.isDisabled()?
            e.preventDefault() :
            this.afterCurrentEvent(function() {
                this.trigger('click');
            });
    },
    destruct : function () {
        this.delMod('focused');
        this.__base.apply(this, arguments);
    }

}, {

    live : function() {

        var eventsToMods = {
            'mouseover' : { name : 'hovered', val : 'yes' },
            'mouseout' : { name : 'hovered' },
            'mousedown' : { name : 'pressed', val : 'yes' },
            'mouseup' : { name : 'pressed' },
            'focusin' : { name : 'focused', val : 'yes' },
            'focusout' : { name : 'focused' }
        };

        this
            .liveBindTo('leftclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which == 1 && this.setMod(mod.name, mod.val || '');
            });
    }

});

BEM.HTML.decl('b-form-button', {

    onBlock : function(ctx) {

        ctx
            .tag(ctx.param('url')? 'a' : 'span')
            .attrs({ href : ctx.param('url'), target : ctx.param('target') })
            .mods({
                size : ctx.mod('size'),
                theme : ctx.mod('theme')
            })
            .content(
                [
                    { elem : 'left', tag : 'i' },
                    {
                        elem : 'content',
                        tag : 'span',
                        content : {
                            elem : 'text',
                            tag : 'span',
                            content : ctx.content()
                        }
                    }
                ],
                true)
            .afterContent(
                ctx.param('type')?
                    {
                        elem : 'input',
                        attrs : {
                            value : ctx.param('value') || '',
                            type : ctx.param('type'),
                            name : ctx.param('name'),
                            disabled : ctx.mod('disabled') && 'disabled'
                        }
                    } :
                    { elem : 'click' })
            .js(true);

    },

    onElem : {

       'input' : function(ctx) {

           ctx.tag('input');

       },

       'click' : function(ctx) {

           ctx.tag('i');

       }

    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-button/b-form-button.js */
/* begin: ../../blocks-desktop/b-form-button/b-form-button.js */
// FIXME в текущем варианте будет работать, но нужно решить нормально на уровне библиотеки
BEM.DOM.decl('b-form-button', {
    onSetMod: {
        js: function() {
            this.bindToDoc('mousedown', function(e) {
                if (!$(e.target).is(this.buildSelector('input')))
                    this.delMod('focused');
            });
        }
    }
});

/* end: ../../blocks-desktop/b-form-button/b-form-button.js */
/* begin: ../../blocks-desktop/b-form-button/_action/b-form-button_action_set-as-homepage.js */
BEM.DOM.decl({block: 'b-form-button', modName: 'action', modVal: 'set-as-homepage'}, {
    _onClick: function(e) {
        vb.setAsHomePage();

        var $this = this.domElem,
            page = this.findBlockOutside('b-page');

        setTimeout(function() {
            $this
                .after(vb.getLocalizedString('settings.isHomePage'))
                .end()
                .remove();
            page.getSettingsBlock()._pos();
        }, 0);
        vb.stat('settings.home');
    }
});

/* end: ../../blocks-desktop/b-form-button/_action/b-form-button_action_set-as-homepage.js */
/* begin: ../../libs/lego/bem-bl/blocks-desktop/i-menu/i-menu.js */
/** @requires BEM */
/** @requires BEM */

(function() {

BEM.DOM.decl('i-menu', {

    onElemSetMod : {

        'item' : {

            'state': {

                'current' : function(elem, modName, modVal, oldModVal) {

                    if (oldModVal == 'disabled') return false;

                    var prev = this.elem('item', 'state', 'current');
                    this
                        .delMod(prev, 'state')
                        .trigger('current', {
                            prev    : prev,
                            current : elem
                        });
                }
            }
        }
    },
    onItemSelectorClick : function(e) {

        var item = this._getItemByEvent(e);
        this.setMod(item, 'state', 'current');

    },

    _getItemByEvent : function(e) {
        return e.data.domElem.closest(this.buildSelector('item'));
    }

}, {

    live : function() {
        this.liveBindTo('item-selector', 'leftclick', function(e) {
            this.onItemSelectorClick(e);
        });
    }

});

})();

/* end: ../../libs/lego/bem-bl/blocks-desktop/i-menu/i-menu.js */
/* begin: ../../libs/lego/bem-bl/blocks-desktop/b-menu-horiz/b-menu-horiz.js */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-menu-horiz', baseBlock: 'i-menu' });

})();

/* end: ../../libs/lego/bem-bl/blocks-desktop/b-menu-horiz/b-menu-horiz.js */
/* begin: ../../libs/lego/bem-bl/blocks-desktop/b-menu-vert/b-menu-vert.js */
/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ name: 'b-menu-vert', baseBlock: 'i-menu' }, {}, {

    live : function() {
        this.__base();
    }

});

})();

/* end: ../../libs/lego/bem-bl/blocks-desktop/b-menu-vert/b-menu-vert.js */
/* begin: ../../blocks-desktop/blocker/blocker.js */
blocks['blocker'] = function() {
    return {
        block: 'blocker',
        mods: {
            disabled: 'yes'
        }
    };
};

/* end: ../../blocks-desktop/blocker/blocker.js */
/* begin: ../../blocks-desktop/gradient/gradient.js */
blocks['gradient'] = function() {
    return {
        block: 'gradient'
    };
};

/* end: ../../blocks-desktop/gradient/gradient.js */
/* begin: ../../blocks-desktop/apps/apps.js */
(function() {

/**
 * Сколько вычитать из ширины окна, чтобы получить шиирину попапы
 * @const
 */
var WIN_WIDTH_DELTA = 19;

/**
 * Максимальная ширина блока app
 * @const
 */
var MAX_APP_WIDTH = 140;

/**
 * padding у блока apps (не css)
 * @const
 */
var APPS_SIDE_PADDING = 55;

function getWidth() {
    return $('.b-vb-foot').width();
}

blocks['apps'] = function(apps) {

    return {
        block: 'apps',
        js: {
            apps: apps
        },
        content: [
            {
                elem: 'arrow',
                mods: {
                    type: 'left',
                    state: 'disabled'
                }
            },
            {
                elem: 'list'
            },
            {
                elem: 'arrow',
                mods: {
                    type: 'right',
                    state: 'disabled'
                }
            }
        ]
    };
};

BEM.DOM.decl('apps', {
    onSetMod: {
        js: function() {
            var arrows = this.getArrows();

            this.setMod('offset', 0);
            this.domElem.width(getWidth() - WIN_WIDTH_DELTA);
            this.bindToWin('resize', $.throttle(this._onWinResize, 300));
            this.bindTo(arrows.left, 'click', function() {
                if (this.getMod(arrows.left, 'state') == 'disabled')
                    return;
                this.drawApps(parseInt(this.getMod('offset'), 10) - this.getAppsCount());
            });
            this.bindTo(arrows.right, 'click', function() {
                if (this.getMod(arrows.right, 'state') == 'disabled')
                    return;
                this.drawApps(parseInt(this.getMod('offset'), 10) + this.getAppsCount());
            });
            this.apps = this.params.apps;
            this.drawApps(0);
        }
    },

    getArrows: function() {
        return {
            left: this.findElem('arrow', 'type', 'left'),
            right: this.findElem('arrow', 'type', 'right')
        };
    },

    redrawApps: function() {
        var offset = 0,
            _this = this;

        vb.apps.requestList(function(apps) {
            _this.apps = apps;

            if ($('.app').length > 1) {
                offset = parseInt(_this.getMod('offset'), 10);
            } else {
                _this.setMod('offset', '0');
            }

            _this.drawApps(offset);
        });
    },

    drawApps: function(offset) {
        var BEMHTML = require('bemhtml'),
            appsCount = this.getAppsCount(),
            apps = this.apps.slice(offset, offset + appsCount),
            list = this.findElem('list'),
            arrows = this.getArrows(),
            blockRightArrow = (this.apps.slice(offset + appsCount, offset + appsCount + 1).length === 0),
            blockLeftArrow = (offset === 0),
            appsBlocks;

        if (apps.length) {
            appsBlocks = apps.map(function(app, i) {
                return {
                    block: 'app',
                    js: {
                        id: app.id
                    },
                    content: [
                        {
                            elem: 'icon',
                            url: app.icon,
                            alt: app.title
                        },
                        {
                            elem: 'title',
                            content: app.title
                        },
                        {
                            elem: 'btn'
                        }
                    ]
                };
            });
        } else {
            appsBlocks = [{
                block: 'app',
                mods: {
                    empty: 'yes'
                },
                content: [
                    {
                        elem: 'icon'
                    },
                    {
                        elem: 'title',
                        content: vb.getLocalizedString('footer.apps.missing')
                    }
                ]
            }];
        }

        blockRightArrow &&
            this.setMod(arrows.right, 'state', 'disabled') ||
            this.delMod(arrows.right, 'state');
        blockLeftArrow &&
            this.setMod(arrows.left, 'state', 'disabled') ||
            this.delMod(arrows.left, 'state');

        list.html(BEMHTML.apply(appsBlocks));
        BEM.DOM.init(list);
        this.setMod('offset', offset);
        this.popupa().pos();
    },

    getAppsCount: function() {
        var normalWidth = getWidth(),
            count = 1,
            currentAppsWidth = APPS_SIDE_PADDING * 2;
        while (normalWidth > (currentAppsWidth)) {
            currentAppsWidth += MAX_APP_WIDTH;
            count++;
        }

        return count - 1;
    },

    popupa: function() {
        if (this._popupa && this._popupa.domElem) {
            return this._popupa;
        }

        return this._popupa = this.findBlockOutside('b-popupa');
    },

    _onWinResize: function() {
        this.domElem.width(getWidth() - WIN_WIDTH_DELTA);
        this.drawApps(this.getMod('offset'));
    }
});

})();

/* end: ../../blocks-desktop/apps/apps.js */
/* begin: ../../blocks-desktop/app/app.js */
BEM.DOM.decl('app', {
    _timer: null,

    onSetMod: {
        js: function() {
            this.bindTo('mouseenter', function() {
                var _this = this;

                this._timer = setTimeout(function() {
                    _this.setMod('show-btn', 'yes');
                }, 400);
            });
            this.bindTo('mouseleave', function(e) {
                this._timer && clearTimeout(this._timer);
                this.delMod('show-btn');
            });
        }
    }
}, {
    live: function() {
        this.liveBindTo('click', function() {
            vb.apps.launch(this.params.id);
        });

        this.liveBindTo('btn', 'click', function() {
            var _this = this;

            vb.apps.uninstall(this.params.id, function() {
                _this.findBlockOutside('apps').redrawApps();
            });

            return false;
        });

        return false;
    }
});

/* end: ../../blocks-desktop/app/app.js */
/* begin: ../../libs/islands-components/common.blocks/popup/popup.js */
(function($) {

var bro = $.browser,
    isOpera = bro.opera && bro.version < 13,
    KEYDOWN_EVENT = (bro.opera && bro.version < 12.10) ? 'keypress' : 'keydown',
    /**
     * Шоткаты для некоторых методов.
     */
    hasOwn = Object.prototype.hasOwnProperty,
    BEMDOM = BEM.DOM,

    // NOTE: Используется _generateDirections.
    generateDirectionsCache,

    // https://st.yandex-team.ru/ISLCOMPONENTS-180
    needRepaintShadow = bro.msie && bro.version >= 9 && bro.version < 10,

    getActiveElement = function(doc) {
        try {
            return doc.activeElement;
        } catch(e) {
        }
    };

/**
 * Popup - блок для создания выпадающих элементов интерфейса или модальных окон.
 *
 * @param {String|Object} [directions]                 Может быть строкой,
 *                                                     устанавливающей направление раскрытия попапа или
 *                                                     объектом с параметрами.
 *
 * @param {String}        [directions='bottom']        Если указана строка, то будет задано напрвление раскрытия попапа.
 *                                                     Допустимые значения: 'top', 'bottom', 'right', 'left'.
 *
 * @param {Object}        [directions]                 Направления раскрытия попапа
 *                                                     (не учитывается для модального окна).
 * @param {String}         directions.to               Сторона раскрытия попапа.
 *                                                     Допустимые значения: `top`, `bottom`, `left`, `right`.
 * @param {String}        [directions.axis]            Ось попапа. Допустимые значения:
 *                                                    `left`, `right`, `center`, `middle`, `bottom`, `top`.
 * @param {Object|Number} [directions.offset]          Смещение попапа по направлениям `top`, `right`, `bottom`, `left`
 *                                                     относительно центра `owner`.
 *                                                     Если указано число, то это значение будет раскрыто для
 *                                                     всех направлений.
 *
 * @param {String}        [directions.tail]            Параметры хвоста в контексте направления раскрытия.
 * @param {String}        [directions.width=24.04]     Ширина хвоста.
 * @param {String}        [directions.height=12.02]    Высота хвоста.
 * @param {String}        [directions.tail.axis]       Ось хвоста попапа.
 * @param {Object|Number} [directions.tail.offset]     Смещение хвоста по направлениям `top`, `right`, `bottom`, `left`
 *                                                     относительно центра `owner`.
 *                                                     Если указано число, то это значение будет раскрыто для
 *                                                     всех направлений.
 *
 * @param {Object}        [directions.position]        Фиксированное положение попапа.
 * @param {Number}        [directions.position.top]    Фиксированное положение попапа по вертикали.
 * @param {Number}        [directions.position.left]   Фиксированное положение попапа по горизонтали.
 */
BEM.DOM.decl('popup',  {

    /**
     * Генерируется при показе блока.
     *
     * Если включена анимация, то генерируется сразу
     * в момент ее начала.
     *
     * @event popup#show
     */

    /**
     * Генерируется при скрытии блока.
     *
     * Если включена анимация, то генерируется по ее
     * окончании.
     *
     * @event popup#hide
     */

    /**
     * Возвращает параметры блока по умолчанию.
     *
     * @protected
     * @returns {Object}
     */
    getDefaultParams: function() {

        var tailOffset = {
                left: 15,
                right: 15,

                top: 15,
                bottom: 15
            };

        return {
            directions: [ // FIXME: Острова 2.0 выпилить в пользу _generateDirections при мердже параметров
                {
                    to: 'bottom',
                    axis: 'center',
                    tail: {axis: 'center'}
                },
                {
                    to: 'top',
                    axis: 'center',
                    tail: {axis: 'center'}
                },
                {
                    to: 'right',
                    axis: 'middle',
                    tail: {axis: 'middle'}
                },
                {
                    to: 'left',
                    axis: 'middle',
                    tail: {axis: 'middle'}
                }
            ],
            tail: {
                // Размеры указываются такими, какими они будут если попап будет открыт вниз.
                // Тоесть хвост будет наверху.
                // В направлениях left, right они свапаются.
                width: 24.04,
                height: 12.02,
                offset: tailOffset
            },
            duration: 150
        };

    },

    /**
     * @private
     */
    onSetMod: {

        'js': function() {

            /**
             * Кэш размеров и позиций
             *
             * @private
             * @type {Object}
             */
            this._cache = {};

            /**
             * Вьюпорт для попапа, в котором он должен быть виден (DOM-нода или window).
             * Блок будет менять направление раскрытия на наилучшее по фактору попадания в _viewport.
             *
             * @private
             * @type {jQuery}
             */
            this._viewport = BEMDOM.win;

            /**
             * Ссылка на скоуп (по умолчанию `body`).
             * Когда блок показывается он смотрит, является ли он последним
             * потомком скоупа.
             *
             * @private
             * @type {BEM}
             */
            this._scope = BEMDOM.scope;

            /**
             * Канал для управления всеми открытыми блоками на странице.
             *
             * @private
             */
            this._channel = BEM.channel('popups');

            /**
             * Перенесен ли попап в контейнер.
             * По умолчанию все попапы переносятся в скоуп (`body` или `div`),
             * но есть исключения. Например, фиксированный попап.
             * Если блок обнаруживает, что его родитель — фиксированный попап,
             * то он переместит себя внутрь элемента `content` родителя.
             *
             * @private
             * @type {Boolean}
             */
            this._inContainer = false;

            /**
             * У родительского попапа фиксированное позиционирование?
             * @private
             * @type {Boolean}
             */
            this._isParentFixed = false;

            /**
             * DOM-элемент, для которого открывается блок.
             * @private
             * @type {jQuery}
             */
            this._owner = null;

            /**
             * Переданные пользователем координаты для отображения блока.
             * @private
             * @type {Object}
             */
            this._userPosition = null;

            /**
             * Родитель блока.
             * @private
             * @type {BEM}
             */
            this._parent = null;

            /**
             * Потомки блока.
             * @private
             * @type {Array}
             */
            this._childs = [];

            /**
             * Состояние видимости.
             * @private
             * @type Boolean
             */
            this._isShown = false;

            /**
             * Находится ли блок в состоянии анимированного скрытия.
             * (Анимация асинхронна)
             * @private
             * @type {Boolean}
             */
            this._isHiding = false;

            /**
             * Посчитанные позиции блока на странице(без учета полного помещения во вьюпорт).
             * @private
             * @type {Object}
             */
            this._positions = {};

            /**
             * Содержит текущую позицию, которая была рассчитана или передана пользователем явно.
             * @private
             * @type {Object}
             */
            this._currPos = {};

            /**
             * Текущий показатель видимости.
             * @private
             * @type {Nubmer}
             */
            this._visibilityFactor = null;

            /**
             * Направление раскрытия.
             * @private
             * @type {Boolean|Object}
             */
            this._direction = false;

            /**
             * Направления открытия блока.
             * @private
             * @type {Object}
             */
            this._directions = {};

            var defaultParams = this.getDefaultParams(),
                userParams = this.params,

                defaults = this._repackDirParams(defaultParams.directions),
                directions = userParams.generateDirections ? this._generateDirections: userParams.directions,
                user = this._repackDirParams(directions);
                // FIXME: Острова 2.0
                // Если направления не указаны, то вызываем _generateDirections не смотря на наличие
                // userParams.generateDirections

            if(userParams.tail) {
                this.params.tail = this._mergeParams(defaultParams.tail, userParams.tail);
            }

            /**
             * Направления открытия блока по приоритету.
             * @private
             * @type {String[]}
             */
            this._order = user.keys.map(function(key) {
                var userDirection = user.directions[key],
                    defaultDirection = defaults.directions[key];

                defaultDirection ||
                    (defaultDirection = defaults.directions[userDirection.to]);

                this._directions[key] = this._mergeParams(defaultDirection, userDirection, {
                    tail: this._tailParamsHook
                });

                return key;

            }, this);

        },

        'visibility': {

            'visible': function() {
                this._onShown();
            },

            '': function() {
                this._onHidden();
            }

        }

    },

    /**
     * Показывает popup.
     *
     * В зависимости от переданных параметров может быть показан как выпадающий элемент
     * либо как модальное окно.
     *
     * Показ блока относительно другого блока:
     *
     * ```javascript
     * popup.show(otherBlock);
     * ```
     *
     * Показ блока относительно DOM-элемента:
     *
     * ```javascript
     * popup.show($('.some-class');)
     * ```
     *
     * Показ блока, в заданной позиции:
     *
     * ```javascript
     * popup.show({top: 100, left: 100});
     * ```
     *
     * Если параметры не переданы, просто завершает работу не показывая блок.
     *
     * В случае, если установлен модификатор `_animate_yes` и не
     * установлен модификатор `_fade-in_no`, проигрывает анимацию.
     *
     * Устанавливает модификатор `_visibility_visible` и генерирует событие `show`
     * до начала анимации.
     *
     * @public
     * @param {jQuery|BEM|Object} [params] Объект jQuery, i-bem блок или позиция
     * попапа. В первых двух случаях позиция расчитывается соответственно параметру directions
     * относительно DOM-элемента или блока.
     * @param {Number} params.top Отступ сверху, в пикселях
     * @param {Number} params.left Отступ слева, в пикселях
     * @returns {BEM.DOM}
     */
    show: function(params) {

        var owner;

        if(params instanceof BEM) {
            owner = params.domElem.eq(0);
        } else if(params instanceof $) {
            owner = params;
        } else if(!params) {
            return;
        }

        /**
         * NOTE: Если нет `owner`, то в `params` хэш с left, top
         */
        if(owner) {
            if(this._owner && owner[0] !== this._owner[0]) {
                this.delMod('visibility');
            }

            this._owner = owner;

            var parent = this._findParent(owner);
            parent && this.setParent(parent);
        } else {
            this._userPosition = params;
        }

        /**
         * NOTE: Необходимо показать блок для подсчета его размеров.
         */
        return this.setMod('visibility', 'outside').repaint();

    },

    /**
     * Скрывает popup и все его дочерние попапы.
     *
     * В случае, если установлен модификатор `_animate_yes` и не
     * установлен модификатор `_fade-out_no`, проигрывает анимацию.
     *
     * Удаляет модификатор `visibility` и генерирует событие `hide`
     * по окончании анимации, если анимация включена, или моментально,
     * если анимация выключена.
     *
     * @public
     * @returns {BEM.DOM}
     */
    hide: function() {

        if(this._isHiding) {
            return this;
        }

        if(this._isShown) {
            this._isHiding = true;

            this._childs.forEach(function(child) {
                child.hide();
            });

            if(this.hasMod('animate', 'yes') && !this.hasMod('fade-out', 'no')) {
                var _this = this;

                this.beforeHide(function() {
                    _this.domElem && _this.delMod('visibility');
                });

                return this;
            }
        }

        return this.delMod('visibility');

    },

    /**
     * Показывает блок, если он скрыт или скрывает его, если он показан.
     *
     * В зависимости от текущего соcтояния, вызывает либо `show`, либо `hide`.
     *
     * Если установлен модификатор _animate_yes, прогрывает анимацию. По отдельности
     * анимацию показа и скрытия можно также отключить при помощи модификаторов
     * `_fade-in_no` и `_fade-out_no` соответственно.
     *
     * Устанавливает модификатор `visibility` в значение `visible` или удаляет его по окончании
     * анимации (или моментально, если соответствующая анимация отключена).
     *
     * @public
     * @param {jQuery|BEM|Object} [owner] DOM-элемент или блок относительно которых расчитывается позиция
     * блока или явно заданные координаты { left : x, top : y }. Используется только при показе.
     * Если не передан, будет использовано предыдущее значение DOM-элемента или блока,
     * использованное при вызове popup#show или popup#toggle. Если это первый вызов или
     * предыдущий вызов использовал координаты для задания позиции, метод завершит выполнение
     * и не покажет блок (будет исправлено в [ISLCOMPONENTS-546](http://st/ISLCOMPONENTS-546)).
     * @param {Number} param.top отступ сверху, в пикселях
     * @param {Number} param.left отступ слева, в пикселях
     */
    toggle: function(owner) {

        return (this._isShown && !this._isHiding)
            ? this.hide()
            : this.show(owner || this._owner);

    },

    /**
     * Перерисовывает блок.
     *
     * При вызове направление раскрытия будет выбрано заново согласно
     * js-параметрам блока и текущему `viewport`.
     *
     * Eсли блок в момент вызова скрыт, он будет показан в своей предыдущей позиции.
     *
     * @public
     * @returns {BEM.DOM}
     */
    repaint: function() {

        this._moveToContainer();

        var direction = this._pickDirection();

        this.setMod('to', direction.to)
            ._show(
                this._positions[direction.key],
                this._tailPos && this._tailPos[direction.key]);

        return this;

    },

    /**
     * Вызывает перерисовку для тени в IE9.
     *
     * Нужно вызвать сразу после смены контента в попапе (в текущем тике eventloop, не в следующем).
     * https://st.yandex-team.ru/ISLCOMPONENTS-180
     *
     * @public
     * @returns {BEM.DOM}
     */
    repaintShadowIfNeeded: function() {

        needRepaintShadow && this._repaintShadow();

        return this;

    },

    /**
     * Возвращает текущую позицию блока.
     *
     * @public
     * @returns {Object} Объект с координатами `left`, `top`, которые содержат координаты
     * блока в пикселях.
     *
     */
    getCurrPos:  function() {
        return this._currPos;
    },

    /**
     * Возвращает настройки текущего направления раскрытия.
     *
     * @public
     * @returns {Object|Boolean} Возвращает `false` если направление не было рассчитано
     * или у этого блока нет направления(пример: popup_position_fixed)
     */
    getCurrDirection: function() {
        return this._direction;
    },

    /**
     * Устанавливает содержимое блока.
     *
     * @public
     * @param {String|jQuery} content jQuery-элемент или строка, используемые в качестве содержимого.
     * @returns {BEM.DOM}
     */
    setContent: function(content) {

        BEMDOM.update(this.elem('content'), content);
        this._resetDefault();
        this._isShown && this.repaint();

        return this;

    },

    /**
     * Возвращает `true`, если блок в данный момент видим.
     *
     * Блок считается видимым начиная с момента начала
     * fade-in анимации и перстает быть видимым в момент
     * окончания fade-out анимации.
     *
     * @public
     * @returns {Boolean}
     */
    isShown: function() {
        return this._isShown;
    },

    /**
     * Устанавливает родительский попап.
     *
     * Дочерние попапы автоматически закрываются при закрытии родителя.
     * Связь автоматически удалится при скрытии дочернего попапа.
     *
     * @public
     * @param {BEM.DOM} parent родительский попап
     * @returns {BEM.DOM}
     */
    setParent: function(parent) {
        this._parent = parent;

        this._isParentFixed = parent.hasMod('position', 'fixed');

        parent.addChild(this);

        return this;
    },

    /**
     * Добавляет дочерний попап к этому блоку.
     *
     * Дочерние попапы автоматически закрываются при закрытии родителя.
     * Связь автоматически удалится при скрытии дочернего попапа.
     *
     * @public
     * @param {BEM.DOM} child Дочерний попап.
     * @return {BEM.DOM} Дочерний попап.
     */
    addChild: function(child) {

        var childs = this._childs,
            len = childs.length,
            i = 0;

        for(; i < len; i++) {
            if(childs[i]._uniqId === child._uniqId) {
                return;
            }
        }

        // FIXME: отписываться от событий дочернего попапа
        child.on('hide', function() {
            this.removeChild(child);
        }, this);

        childs.push(child);

    },

    /**
     * Разрывает связь с дочерним попапом.
     *
     * При этом дочерний попап становится независимым и больше не будет
     * автоматически скрываться при скрытии родителя.
     *
     * @public
     * @param {BEM.DOM} child дочерний попап
     */
    removeChild: function(child) {

        var childs = this._childs,
            len = childs.length,
            i = 0;

        for(; i < len; i++) {
            if(childs[i]._uniqId === child._uniqId) {
                childs.splice(i, 1);
                return;
            }
        }

    },

    /**
     * Устанавливает заданные размеры попапа
     *
     * @public
     * @param {Object} dimensions хэш с параметрами
     * @returns {BEM.DOM}
     */
    setSize: function(dimensions) {
        if(dimensions){
            this._resetDefault();
            this.domElem.css(dimensions);
            if(this._isShown && !this._isHiding) {
                this.repaint();
            }
        }
        return this;
    },

    /**
     * Делает блок видимым.
     *
     * @private
     * @param {Object} position CSS-свойства, описывающие положение popup.
     * @param {Object} [tailPos] CSS-свойства, описывающие положение хвоста.
     * @returns {BEM.DOM}
     */
    _show: function(position, tailPos) {

        this._currPos = position;

        tailPos &&
            this.elem('tail').removeAttr('style').css(tailPos);

        this.domElem.css(position);

        (!this._isShown || this._isHiding) &&
            (this.hasMod('animate', 'yes') && !this.hasMod('fade-in', 'no')) &&
                this.afterShow();

        this._isHiding = false;
        this.setMod('visibility', 'visible');

        return this;
    },

    /**
     * Обработчик показа блока.
     *
     * @private
     */
    _onShown: function() {

        this.bindToDoc(KEYDOWN_EVENT, function(e) {
            if(e.which === 27) {
                if(this._childs.length === 0) {
                    this.hide();
                }
            }
        });

        this._bindFocusEvents();

        this._attachUnder();

        this._isShown = true;

        /*
         * Нужно чтобы предотвратить мгновенное закрытие
         * фиксированного попапа с паранджой, если он открылся
         * по событию на кнопке, например.
         */
        if(this.hasMod('autoclosable', 'yes')) {
            this.afterCurrentEvent(function() {
                this._enableAutoclosable();
            });
        }

        if(this.hasMod('adaptive', 'yes')) {
            this._enableAdaptive();
        }

        this._channel.on('hide', this.hide, this);

        this.trigger('show');

    },

    /**
     * Обработчик скрытия блока.
     *
     * @private
     */
    _onHidden: function() {

        this._unbindFocusEvents();

        this.unbindFromDoc(KEYDOWN_EVENT);

        this._detachUnder();

        if(this.hasMod('autoclosable', 'yes')) {
            this._disableAutoclosable();
        }

        if(this.hasMod('adaptive', 'yes')) {
            this._disableAdaptive();
        }

        this._cache = {};
        this._isShown = false;
        this._isHiding = false;

        this._channel.un('hide');

        this._returnFocus();

        this.trigger('hide');

    },

    /**
     * Привязывает события слежения за фокусом.
     *
     * @protected
     */
    _bindFocusEvents: function() {

        this._lastFocused = $(getActiveElement(document) || this._scope);

        var focusable = this.__self._getFocusable(this.elem('content'));
        this._firstFocusable = focusable.first();
        this._lastFocusable = focusable.last();

        /* Фокус не должен оставаться внутри popup после его скрытия!
         *
         * При скрытии выпадушки нажатием на Escape или программно,
         * возвращаем фокус в то место, откуда его сняли при показе;
         * при клике во вне — не возвращаем. */
        this._skipReturnFocus = false;

        /* Если внутри выпадушки нет элементов, на которые можно поставить фокус,
         * то не применяем всю эту магию с зацикливанием фокуса. */
        if(this._firstFocusable.length === 0) {
            this._skipReturnFocus = true;
            return;
        }

        this
            .bindTo(this._lastFocused, 'keydown', this._onLastFocusedKeyDown)
            .bindTo(this._firstFocusable, 'keydown', this._onFirstFocusableKeyDown)
            .bindTo(this._lastFocusable, 'keydown', this._onLastFocusableKeyDown);

    },

    /**
     * Отвязывает от элемента ранее установленные события.
     *
     * Обратная функция для _bindFocusEvents().
     *
     * @protected
     */
    _unbindFocusEvents: function() {

        this.unbindFrom(this._firstFocusable, 'keydown');
        this.unbindFrom(this._lastFocusable, 'keydown');
        this.unbindFrom(this._lastFocused, 'keydown');

    },

    /**
     * Вызывается на нажатие клавиши на последнем элементе, на котором стоял фокус до того,
     * как началась магия с зацикливанием.
     *
     * @protected
     * @param {Event} e DOM-событие
     */
    _onLastFocusedKeyDown: function(e) {

        if(e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.which === 9) { /* SHIFT+TAB */
            e.preventDefault();
            this[e.shiftKey ? '_lastFocusable' : '_firstFocusable'].focus();
        }

    },

    /**
     * Вызывается на нажатие клавиши на первом элементе, на который можно поставить фокус
     * внутри выпадушки.
     *
     * Переопределяется на модификаторе popup_position_fixed.
     *
     * @protected
     * @param {Event} e DOM-событие
     */
    _onFirstFocusableKeyDown: function(e) {

        if(e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.shiftKey && e.which === 9) { /* SHIFT+TAB */
            e.preventDefault();
            this._lastFocused.focus();
        }

    },

    /**
     * Вызывается на нажатие клавиши на последнем элементе, на который можно поставить фокус
     * внутри выпадушки.
     *
     * Переопределяется на модификаторе popup_position_fixed.
     *
     * @protected
     * @param {Event} e DOM-событие
     */
    _onLastFocusableKeyDown: function(e) {

        if(e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.which === 9) { /* TAB */
            e.preventDefault();
            this._lastFocused.focus();
        }

    },

    /**
     * Возвращает фокус на элемент, имевший фокус до открытия выпадушки.
     *
     * @protected
     */
    _returnFocus: function() {

        /* Если popup-родитель не возвращает фокус, то и popup-потомок тоже
         * не должен возвращать. */
        var skipReturnFocus = (this._parent || {})._skipReturnFocus || this._skipReturnFocus;

        if(!skipReturnFocus) {
            this._lastFocused.focus();
        }

    },

    /**
     * DeepMerge для доопределения параметров блока
     * Доопределяет дефолтные параметры пользовательскими
     *
     * @private
     * @param {Object} defaultParams
     * @param {Object} userParams
     * @param {Object} hooks         Список хуков, которые могут быть
     * задействованы в процессе слияния хэшей. Хук будет вызван
     * при совпадении его ключа с ключем во вливаемом хэше
     * @returns {Object}
     */
    _mergeParams: function(defaultParams, userParams, hooks) {

        var res = {};

        hooks || (hooks = {});

        if(defaultParams && typeof defaultParams === 'object') {
            Object.keys(defaultParams).forEach(function(key) {
                res[key] = defaultParams[key];
            });
        }

        Object.keys(userParams).forEach(function(key) {
            var hookRes = hasOwn.call(hooks, key)
                ? hooks[key].call(this, defaultParams[key], userParams[key])
                : userParams[key];

            if(!hookRes || typeof hookRes !== 'object' || Array.isArray(hookRes)) {
                res[key] = hookRes;
            } else if(defaultParams[key]) {
                res[key] = this._mergeParams(defaultParams[key], hookRes, hooks);
            } else {
                res[key] = hookRes;
            }

        }, this);

        return res;
    },

    /**
     * Обработчик для поля `tail` в параметрах направлений раскрытия.
     * Отвечает за наследование дефолтных отступов для элемента `tail`.
     *
     * @private
     * @param {*}    defaultParams
     * @param {*}    userParams
     * @returns {*}  userParams
     */
    _tailParamsHook: function(defaultParams, userParams) {

        if(!userParams.offset) {
            userParams.offset = this.params.tail.offset;
        }

        return typeof userParams.offset === 'number'
            ? {
                offset: {
                    left: userParams.offset,
                    top: userParams.offset
                }
            }
            : userParams;
    },

    /**
     * Генерирует список возможных направлений раскрытия.
     * Потребность возникла для popup в произвольном месте страницы
     * из-за необходимости показывать его с наибольшим попаданием во `viewport`
     * ISLCOMPONENTS-106
     *
     * @private
     * @returns [Array{Object}]
     */
    _generateDirections: function() {
        if(generateDirectionsCache) {
            return generateDirectionsCache;
        }

        var directions = [
                ['bottom', 'top'], ['left', 'right']
            ],
            axises = [
                ['center', 'left', 'right'],
                ['middle', 'top', 'bottom']
            ],
            tailAxises = axises,
            directionsLen = directions.length,
            res = [];

        for(var tier = 0; tier < directionsLen; tier++) {
            var directionsTier = directions[tier],
                tierLen = directionsTier.length;

            for(var j = 0; j < tierLen; j++) {
                var axisesTier = axises[tier],
                    axisesTierLen = axisesTier.length;

                for(var k = 0; k < axisesTierLen; k++) {
                var tailAxisesTier = tailAxises[tier],
                    tailAxisesTierLen = tailAxisesTier.length;

                    for(var l = 0; l < tailAxisesTierLen; l++) {
                        res.push({
                            direction: directionsTier[j],
                            axis: axisesTier[k],
                            tail: {
                                axis: tailAxisesTier[l]
                            }
                        });
                    }
                }
            }
        }

        generateDirectionsCache = res;
        return res;

    },

    /**
     * Переупаковывает настройки направлений из массива в объект.
     *
     * @private
     * @param {Array} dirParams
     * @returns {Object.directions} Направления раскрытия
     * @returns {Object.keys} Массив ключей направлений по убыванию приоритета
     */
    _repackDirParams: function(dirParams) {

        // XXX: Нужно как-то упростить этот метод,
        // возможно через внесение некой внутренней терминологии.

        var directions = {},
            keys = [];

        /**
         * 'bottom-left'
         * { to: 'bottom' }
         */
        if(typeof dirParams === 'string' || $.isPlainObject(dirParams)) {
            dirParams = [dirParams];
        }

        keys = dirParams.map(function(direction) {

            /**
             * [ 'bottom', 'top' ]
             */
            if(typeof direction === 'string') {
                var keys = direction.split('-');

                direction = {to: keys[0], tail: {}};
                keys[1] && (direction.axis = keys[1]);
                keys[2] && (direction.tail.axis = keys[2]);
            }

            var key = direction.to;

            if(!directions[key]) {
                directions[key] = direction;
            }

            if(direction.axis) {
                key += '-' + direction.axis;
            }

            direction.key = key;
            directions[key] = direction;

            return key;

        }, this);

        return {directions: directions, keys: keys};

    },

    /**
     * Устанавливает элемент-"окно", в которое попап должен быть вмещен.
     *
     * Если элемент задан, то при показе будет выбрано такое
     * направление раскрытия (из разрешенных), при котором максимальная
     * площадь попапа уместится внутри окна.
     *
     * Метод НЕ вызывает перерисовку. В случае, если на момент вызова блок
     * уже показывается позиция пересчитана не будет.
     *
     * @public
     * @param {jQuery} viewport DOM-элемент, в который должен вместиться попап.
     * @returns {BEM.DOM}
     */
    setViewport: function(viewport) {
        this._viewport = viewport;
        return this;
    },

    /**
     * Выбирает направление для раскрытия.
     *
     * @private
     * @returns {Object} Направление раскрытия.
     */
    _pickDirection: function() {

        // FIXME: Подумать как можно красивее и правильней реализовать этот метод

        var order = this._order,
            len = this.hasMod('adaptive', 'yes') ? order.length : 1,
            i;

        /**
         * NOTE: Нужно обнулить, потому что мы не знаем, на сколько изменилось окно браузера.
         */
        this._visibilityFactor = 0;

        for(i = 0; i < len; i++) {
            var key = order[i],
                direction = this._directions[key];

            this
                ._resetPos(key)
                ._pushPos(key, this._calcPos(direction))
                ._pushPos(key, this._calcOffsets(direction));

            this._hasTail() &&
                this
                    ._resetTailPos(key)
                    ._pushTailPos(key, this._calcTailPos(direction))
                    ._pushTailPos(key, this._calcTailOffset(direction))
                    ._pushPos(key, this._calcOffsetByTail(direction));

            this._pushPos(key, this._getParentOffset());

            var visibilityFactor = this._calcVisibilityFactor(direction);

            if(visibilityFactor > this._visibilityFactor || !this._direction) {
                this._visibilityFactor = visibilityFactor;
                this._direction = this._directions[key];
                this.size = this.getPlacingSize();
                if(visibilityFactor === 100) {
                    break;
                }
            }

        }

        return this._direction;

    },

    /**
     * Если у родительского элемента есть смещение, то возвращает его.
     * Относительное позиционирование ломает отображение если у body есть margin, например
     * LEGO-8709
     *
     * @private
     * @returns {Object}
     */
    _getParentOffset: function() {

        var offset = this.domElem.offsetParent().offset();
            //position = parent.position();

        //if(position.left > 0 && position.top > 0) {
            /**
             * NOTE: Фикс для IE7, в котором offset() при наличии margin удваивается о_О
             * а position при этом больше 0
             */
            //offset.left = position.left;
            //offset.top = position.top;
        //}

        offset.left *= -1;
        offset.top *= -1;

        return offset;

    },

    /**
     * Подсчитывает позицию блока в указанном направлении.
     *
     * @private
     * @param {Object} direction Параметры открытия блока
     * @returns {Object}
     */
    _calcPos: function(direction) {
        this._calcPlacingSize(direction);

        var ownerPos = this.getOwnerPos(),
            ownerSize = this.getOwnerSize(),
            popupSize = this.getPlacingSize(),

            axis = direction.axis,

            userPos = this.params.position || {},

            position = {};

        switch(direction.to) {
            case 'bottom' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : ownerPos.top + ownerSize.height,
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : this._calcLeft(axis)
                };

                break;

            case 'top' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : ownerPos.top - popupSize.height,
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : this._calcLeft(axis)
                };

                break;

            case 'left' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : this._calcTop(axis),
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : ownerPos.left - popupSize.width
                };

                break;

            case 'right' :
                position = {
                    top: hasOwn.call(userPos, 'top')
                        ? userPos.top
                        : this._calcTop(axis),
                    left: hasOwn.call(userPos, 'left')
                        ? userPos.left
                        : ownerPos.left + ownerSize.width
                };

                break;

        }

        return position;

    },

    /**
     * Подсчитывает вертикальную координату по оси.
     *
     * @private
     * @param {String} axis Имя оси для рассчетов.
     * @returns {Number}
     */
    _calcTop: function(axis) {

        var top = 0,
            popupSize = this.getPlacingSize(),
            ownerPos = this.getOwnerPos(),
            ownerSize = this.getOwnerSize();

        if(axis === 'top') {
            top += ownerPos.top;
        } else if(axis === 'middle') {
            top += (ownerPos.top + ownerSize.height / 2) - popupSize.height / 2;
        } else if(axis === 'bottom') {
            top += (ownerPos.top + ownerSize.height) - popupSize.height;
        }

        return top;

    },

    /**
     * Подсчитывает горизонтальную координату по оси.
     *
     * @private
     * @param {String} axis Имя оси для рассчетов.
     * @returns {Number}
     */
    _calcLeft: function(axis) {

        var left = 0,
            popupSize = this.getPlacingSize(),
            ownerPos = this.getOwnerPos(),
            ownerSize = this.getOwnerSize();

        if(axis === 'left') {
            left += ownerPos.left;
        } else if(axis === 'center') {
            left += (ownerPos.left + ownerSize.width / 2) - popupSize.width / 2;
        } else if(axis === 'right') {
            left += (ownerPos.left + ownerSize.width) - popupSize.width;
        }

        return left;

    },

    /**
    * Возвращает размер области, на которую необходимо разместить попаа
    * @public
    * @returns {Object} Размеры
    */
    getPlacingSize: function() {
        return this.getPopupSize();
    },

    /**
     * Подсчитывает и кэширует смещение блока по указанным параметрам.
     *
     * @private
     * @param {Object} direction
     * @returns {Object} Отступы.
     */
    _calcOffsets: function(direction) {

        var cache = this._cache.offset || (this._cache.offset = {}),
            key = direction.key,
            offsetParams = direction.offset,
            offset;

        if(cache[key]) {
            return cache[key];
        }

        if(!offsetParams) {
            return false;
        }

        offset = {
            left: 0,
            top: 0
        };

        if(typeof offsetParams === 'number') {
            switch(key){
                case 'left':
                    offset.left += offsetParams;
                    break;

                case 'right':
                    offset.left -= offsetParams;
                    break;

                case 'top':
                    offset.top += offsetParams;
                    break;

                case 'bottom':
                    offset.top -= offsetParams;
                    break;
            }
        } else {
            if(offsetParams.left) {
                offset.left += offsetParams.left;
            }

            if(offsetParams.right) {
                offset.left -= offsetParams.right;
            }

            if(offsetParams.top) {
                offset.top += offsetParams.top;
            }

            if(offsetParams.bottom) {
                offset.top -= offsetParams.bottom;
            }

        }
        cache[key] = offset;

        return offset;

    },

    /**
     * Проверяет, есть ли у блока хвост.
     *
     * @private
     * @returns {Boolean}
     */
    _hasTail: function() {
        return this.elem('tail').length !== 0;
    },

    /**
     * Перемещает попап в конец скоупа.
     * По умолчанию это скоуп (`body` или `div`), но наш родитель — модальное окно
     * (фиксированный попап), то контейнером будет он.
     *
     * @param {jQuery} [container] Контейнер для блока.
     * @private
     */
    _moveToContainer: function(container) {

        if(container) {
            // если передан контейнер сбрасываем флаг о нахождении попапа в контейнере
            this._inContainer = false;
        } else {
            if(this._isShown) {
                // если попап уже показан, не нужно пытаться перенести его в конец _старого_ скоупа
                // https://st.yandex-team.ru/ISLCOMPONENTS-1064
                return;
            }

            container = this._parent ? this._parent.domElem : this._scope;
        }

        this.domElem.appendTo(container);
        this._inContainer = true;

    },

    /**
     * Обнуляет позицию во внутреннем хранилище.
     *
     * @private
     * @param {String} key Ключ позиции.
     * @returns {BEM.DOM}
     */
    _resetPos: function(key) {

        key ? this._positions[key] = null : this._positions = {};

        return this;
    },

    /**
     * Смещает начало координат на указанную величину.
     *
     * @private
     * @param {Object} target   Координаты, к которым применяется смещение.
     * @param {String} [key]    Уникальный ключ направления.
     * @param {Object} offset   Объект, описывающий позицию для смещения.
     */
    _pushPosTo: function(target, key, offset) {

        if(offset === false) {
            return;
        }

        if(typeof key === 'string') {
            this._sum(target[key] || (target[key] = {}), offset);
        } else {
            offset = key;

            Object.keys(target).forEach(function(key) {
                this._sum(target[key], offset);
            }, this);
        }

    },

    /**
     * Смещает позицию блока на указанные во втором аргументе координаты с учётом текущей позиции.
     *
     * @private
     * @param {String} [key]   Уникальный ключ направления.
     * @param {Object} offset  Объект, описывающий позицию для смещения.
     * @returns {BEM.DOM}
     */
    _pushPos: function(key, offset) {

        this._pushPosTo(this._positions, key, offset);

        return this;

    },

    /**
     * Складывает числовые значения в объектах.
     *
     * @private
     * @param {Object} source   Объект с исходными числами.
     * @param {Object} adds     Объект с прибавляемыми числами.
     */
    _sum: function(source, adds) {

        Object.keys(adds).forEach(function(key) {
            source[key] = (source[key] || 0) + adds[key];
        });

    },

    /**
     * Получает размер указанного DOM-элемента.
     *
     * @private
     * @param {jQuery} domElem
     * @returns {Object}
     */
    _getSizeOf: function(domElem) {

        return {
            height: domElem.outerHeight(),
            width: domElem.outerWidth()
        };

    },

    /**
     * Получает и кэширует размер owner.
     *
     * @private
     * @returns {Object}
     */
    getOwnerSize: function() {

        return this._owner
            ? this._cache.ownerSize || (this._cache.ownerSize = this._getSizeOf(this._owner))
            : {
                height: 0,
                width: 0
            };

    },

    /**
     * Получает и кэширует размер popup.
     *
     * @private
     * @returns {Object}
     */
    getPopupSize: function() {

        return this._getSizeOf(this.domElem);

    },

    /**
     * Получает позицию указанного DOM-элемента.
     *
     * @private
     * @param {jQuery} domElem
     * @returns {Object}
     */
    _getPosOf: function(domElem) {

        /**
         * XXX: Если брать offset window, то возвращается null
         */
        return domElem.offset() || {
            left: 0,
            top: 0
        };

    },

    /**
     * Получает позицию owner.
     *
     * @private
     * @returns {Object}
     */
    getOwnerPos: function() {

        var pos;

        if(this._owner) {
            pos = this._getPosOf(this._owner);

            //XXX: IE 10 Scale fix (https://st.yandex-team.ru/ISLCOMPONENTS-13)
            if('pageYOffset' in window) {
                //Обычно эти разности равны 0, так что не IE и не заметит.
                pos.top -= (window.pageYOffset - (document.documentElement.scrollTop || document.body.scrollTop));
                pos.left -= (window.pageXOffset - (document.documentElement.scrollLeft || document.body.scrollLeft));
            }
        }

        return pos || this._userPosition;

    },

    /**
     * Подсчитывает "видимость" блока на странице.
     *
     * @private
     * @param {Object} direction   Параметры направления раскрытия.
     * @returns {Number}
     */
    _calcVisibilityFactor: function(direction) {

        var viewport = this._viewport,
            viewportSize = this._getSizeOf(viewport),
            popupSize = this.getPopupSize(),
            popupPos = this._positions[direction.key],

            parentOffset = this._parent ? this._parent.domElem.offset() : {
                top: 0,
                left: 0
            },

            top = popupPos.top + (this._isParentFixed ? parentOffset.top : -viewport.scrollTop()),
            left = popupPos.left + (this._isParentFixed ? parentOffset.left : -viewport.scrollLeft()),
            right = (left + popupSize.width) - viewportSize.width,
            bottom = (top + popupSize.height) - viewportSize.height,

            visibleRect = {
                height: popupSize.height,
                width: popupSize.width
            },

            popupArea,
            visibleArea,
            visibility = 100;

        if(bottom > 0) {
            visibleRect.height -= bottom;
        }

        if(top < 0) {
            visibleRect.height += top;
        }

        if(left < 0) {
            visibleRect.width += left;
        }

        if(right > 0) {
            visibleRect.width -= right;
        }

        if(visibleRect.height < 0 || visibleRect.width < 0) {
            visibility = 0;
        } else {
            visibleArea = Math.abs(visibleRect.height * visibleRect.width);
            popupArea = popupSize.height * popupSize.width;

            popupArea !== visibleArea &&
                (visibility = (visibleArea / popupArea) * 100);
        }

        return visibility;

    },

    /**
     * @private
     */
    _repaintShadow: function() {

        if(typeof this._repaintShadowCounter === 'undefined') {
            this._repaintShadowCounter = 0;
        }

        this.domElem.css('zoom', ++this._repaintShadowCounter & 1);

    },

    /**
     * @protected
     */
    _findParent: function(owner) {
        return this.findBlockOutside(owner, 'popup');
    },

    /**
     * Уничтожает блок и его потомков.
     *
     * @public
     * @returns {BEM.DOM}
     */
    destruct: function() {

        var args = arguments;

        this._channel.un('hide');

        this._childs.forEach(function(child) {
            child.destruct.apply(child, args);
        });

        return this.__base.apply(this, args);

    },

    /**
     * Заглушки для модификатора autosize
     *
     * @private
     */
    _resetDefault: function(){},
    _calcPlacingSize: function(){}

}, {

    live: function() {

        this.liveBindTo('close', 'leftclick tap', function() {
            this.hide();
        });

    },

    /**
     * Возвращает список элементов, на которые можно поставить фокус.
     *
     * При открытом popup, нажатием TAB, необходимо поставить фокус на любой элемент, который
     * может получить фокус внутри popup.
     *
     * @private
     * @param {jQuery} domElem откуда начать поиск элементов, на которые можно сфокусироваться.
     * @return {jQuery}
     */
    _getFocusable: function(domElem) {

        /* Ставим на domElem какой-нибудь id, чтобы знать, что выше этого элемента не следует искать
         * родителей с display:none. */
        var id = $.data(domElem, 'popup-getFocusable-id');
        if(!id) {
            id = $.identify();
            $.data(domElem, 'popup-getFocusable-id', id);
        }

        id = '*[data-popup-getFocusable-id="' + id + '"]';

        var link = isOpera ? '' : 'a[href], link, ';

        return domElem.find(link + '*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem')
            .filter(function() {
                var $this = $(this),
                    res = true;

                /* На элементы с отрицательным tabindex нельзя поставить фокус.
                 * visibility наследуется. */
                if(parseInt($this.prop('tabindex'), 10) < 0 || $this.css('visibility') === 'hidden') {
                    return false;
                }

                /* Нельзя поставить фокус в скрытый родителем элемент. */
                $(this).parentsUntil(id).each(function() {
                    var $this = $(this);
                    if($this.css('display') === 'none') {
                        res = false;
                        return res;
                    }
                });

                return res;
            });

    }
});

})(jQuery);

/* end: ../../libs/islands-components/common.blocks/popup/popup.js */
/* begin: ../../libs/islands-components/common.blocks/popup/_autoclosable/popup_autoclosable_yes.js */
/**
 * Попап, автоматически закрывающийся при нажатии за его пределами.
 *
 */
BEM.DOM.decl('popup', {

    /**
     * Генерируется при клике за пределами попапа.
     *
     * По окончании обработки события блок будет скрыт. Для того, чтобы
     * отменить это поведение и оставить блок видимым, можно воспользоваться
     * методом event.preventDefault().
     *
     * @event popup_autoclosable_yes#click-outside
     * @param {DOMEvent} domEvent DOM-событие нажатия
     */

    /**
     * @private
     */
    onSetMod: {
        autoclosable: {
            yes: function() {
                this._enableAutoclosable();
            },
            '': function() {
                this._disableAutoclosable();
            }
        }
    },

    /**
     * Биндится на события, прячет блок при клике по не связанным элементам\блокам.
     *
     * @private
     */
    _enableAutoclosable: function() {

        var under = this._under;

        if(this.hasMod(under, 'type', 'paranja')) {
            /*
             * NOTE: contentWindow, contentWindow.document для разных браузеров
             * Некоторые не обрабатывают клик на contentWindow
             * Отписываться от события leftclick здесь не нужно
             */
            under.is('iframe') &&
                (under = $([under[0].contentWindow, under[0].contentWindow.document]));

            this.bindTo(under, 'leftclick tap', function(e) {
                e.stopPropagation();
                this.hide();
            });

            this.bindTo(under, 'mousedown', function() {
                /* Не возвращаем фокус после клика или касания. */
                this._skipReturnFocus = true;
            });
        }

        this.bindToDoc('leftclick tap', function(domEvent) {
            if(this._isRelatedNode($(domEvent.target))) {
                return;
            }

            var e = $.Event('outside-click');
            this.trigger(e, domEvent);
            if(!e.isDefaultPrevented()) {
                this.hide();
            }
        });

        this.bindToDoc('mousedown', function() {
            /* Не возвращаем фокус после клика или касания.
             *
             * Используем mousedown, поскольку фокус может быть установлен
             * в input, находящийся вне popup (например, suggest),
             * с которого blur придёт раньше, чем click (клик во вне
             * снимет фокус, а мы его обратно вернём). */
            this._skipReturnFocus = true;
        });

    },

    /**
     * Отписывается от событий.
     *
     * @private
     */
    _disableAutoclosable: function() {

        if(this.hasMod(this._under, 'type', 'paranja')) {
            this.unbindFrom(this._under, 'leftclick tap mousedown');
        }

        this.unbindFromDoc('leftclick tap mousedown');

    },

    /**
     * Проверяет, является ли нода родственной.
     * Метод ищет в потомках блока, owner и самом себе.
     * Применяется для предотвращения закрытия блока при
     * клике на родственных ему блоках\элементах.
     *
     * @private
     * @param {jQuery} node - что искать
     * @return {Boolean}
     */
    _isRelatedNode: function(node) {
        var isSimpleRelation = this.containsDomElem(node);

        if(!isSimpleRelation) {
            isSimpleRelation = Boolean(this._owner) && this.containsDomElem.call({
                domElem: this._owner
            }, node);
        }

        if(isSimpleRelation) {
            return true;
        }

        var len = this._childs.length,
            i;

        for(i = 0; i < len; i++) {
            if(this.containsDomElem.call({
                domElem: this._childs[i].domElem
            }, node)) {
                return true;
            }
        }

        return false;
    }

});

/* end: ../../libs/islands-components/common.blocks/popup/_autoclosable/popup_autoclosable_yes.js */
/* begin: ../../libs/islands-components/common.blocks/popup/_adaptive/popup_adaptive_yes.js */
/**
 * Попап, автоматически меняющий направление
 * раскрытия при изменении размеров окна браузера или прокрутке.
 *
 * Направление выбирается из js-параметра `directions` таким образом, чтобы
 * на экране отображалась максимум содержимого попапа.
 */
BEM.DOM.decl({
    block: 'popup',
    modName: 'adaptive',
    modVal: 'yes'
}, {

    onSetMod: {

        'adaptive': {
            'yes': function() {
                this._enableAdaptive();
            },

            'no': function() {
                this._disableAdaptive();
            }
        },

        'watch-scroll': {
            'yes': function() {
                this._watchScroll();
            },
            'no': function() {
                this._unwatchScroll();
            }
        }

    },

    /**
     * Включает адаптивность блока.
     *
     * @private
     */
    _enableAdaptive: function() {
        // NOTE: Подписываемся в afterCurrentEvent() потому что в IE8 происходит ресайз сразу после открытия селекта,
        // если он не вмещается в экран изначально. https://st.yandex-team.ru/ISLCOMPONENTS-1241
        this.afterCurrentEvent(function() {
            this.domElem && this.bindToWin('resize', this.onResize);
        });

        this._watchScroll();
    },

    /**
     * Отключает адаптивность блока.
     *
     * @private
     */
    _disableAdaptive: function() {
        this.unbindFromWin('resize')
            ._unwatchScroll();
    },

    /**
     * Возвращает массив с именами событий скрола.
     * Сделал так для удобного доопределения с уровня тачей.
     *
     * @protected
     * @returns {Array}
     */
    getScrollEvents: function() {
        return ['scroll'];
    },

    /**
     * Подписывается на событие `scroll` если у блока отстутствует модификатор
     * `watch-scroll_no`.
     *
     * @private
     */
    _watchScroll: function() {
        if(this._owner && !this.hasMod('watch-scroll', 'no')) {
            this.bindTo(
                this._owner.parents().add(this._viewport),
                this.getScrollEvents().join(' '),
                this.onScroll,
                this);
        }
    },

    /**
     * Отписывается от получения событий `scroll`.
     *
     * @private
     */
    _unwatchScroll: function() {
        this._owner &&
            this.unbindFromDomElem(
                this._owner.parents().add(this._viewport),
                this.getScrollEvents().join(' '));

    },

    /**
     * Обработчик события `resize`
     * Подчищает кэши, инициирует перерисовку блока.
     *
     * @param {Event} e
     * @private
     */
    onResize: function(e) {
        this._cache = {};

        if(this._isShown && !this._isHiding) {
            this.repaint();
        }

    },

    /**
     * Обработчик события `scroll`.
     * Подчищает кэши, инициирует перерисовку блока.
     *
     * @param {Event} e
     * @public
     */
    onScroll: function(e) {
        this._cache = {};

        if(this._isShown && !this._isHiding) {
            this.repaint();
        }
    },

    /**
     * Уничтожает блок, выключает адаптивность (отписывается от события `scroll` на DOM-элементе блока).
     */
    destruct: function() {
        this._disableAdaptive();
        this.__base.apply(this, arguments);
    }

});

/* end: ../../libs/islands-components/common.blocks/popup/_adaptive/popup_adaptive_yes.js */
/* begin: ../../libs/islands-components/common.blocks/popup/_animate/popup_animate_yes.js */
/**
 * Анимированный попап.
 *
 * При показе и скрытии проигрывает анимацию.
 */
BEM.DOM.decl({
    block: 'popup',
    modName: 'animate',
    modVal: 'yes'
}, {

    /**
     * Метод предназначен для проигрывания анимации показа блока.
     *
     * Выполняется при показе блока, когда модификатор
     * `_visibility_visible` уже установлен.
     *
     * По умолчанию проигрывает fade-in анимацию.
     * Переопределите этот метод для реализации другой анимации.
     *
     * @protected
     */
    afterShow: function() {

        var direction = this.getCurrDirection();

        if(!direction) {
            return;
        }

        var to = direction.to,
            position = this.getCurrPos(),
            animateOpts = {
                opacity: 1,
                top: position.top,
                left: position.left
            },
            cssOpts = {
                opacity: 0,
                top: position.top,
                left: position.left
            };

        if(to === 'bottom') {
            cssOpts.top += 10;
        } else if(to === 'top') {
            cssOpts.top -= 10;
        } else if(to === 'left') {
            cssOpts.left -= 10;
        } else if(to === 'right') {
            cssOpts.left += 10;
        }

        this
            .domElem
            .stop(true) // NOTE: Не нужно, чтобы выполнялся callback
            .css(cssOpts)
            .animate(animateOpts, this.params.duration);

    },

    /**
     * Метод предназначен для проигрывания анимации скрытия блока.
     *
     * Выполняется перед скрытием блока. В момент вызова
     * модификатор `_visibility_visible` еще не снят.
     *
     * По умолчанию проигрывает fade-out анимацию.
     * Переопределите этот метод для реализации другой анимации.
     *
     * **ВАЖНО:** при реализации нестандартной анимации, необходимо
     * вызвать callback по ее окончании.
     *
     * @protected
     * @param {Function} callback функция, которую необходимо вызвать
     * по окончании анимации. Не принимает аргументов и не возвращает
     * никаких значений.
     */
    beforeHide: function(callback) {

        var direction = this.getCurrDirection();

        if(!direction) {
            return callback();
        }

        var to = direction.to,
            position = this.getCurrPos(),
            domElem = this.domElem,
            animateOpts = {
                top: position.top,
                left: position.left,
                opacity: 0
            };

        if(to === 'bottom') {
            animateOpts.top += 10;
        } else if(to === 'top') {
            animateOpts.top -= 10;
        } else if(to === 'left') {
            animateOpts.left -= 10;
        } else if(to === 'right') {
            animateOpts.left += 10;
        }

        return domElem
            .stop(true, true)
            .animate(animateOpts, this.params.duration, function() {

                callback();

                domElem.css('opacity', '');

            }); // NOTE: нужно убрать модификатор visibility_visible только по окончанию эффекта

    }

});

/* end: ../../libs/islands-components/common.blocks/popup/_animate/popup_animate_yes.js */
/* begin: ../../libs/islands-components/common.blocks/popup/__under/popup__under.js */
(function() {

/**
 * Пулл подложек блока.
 * Используется чтобы не создавать iframe'ы для каждого инстанса блока на странице.
 *
 * @type {Array}
 */
var underPool = [];

BEM.DOM.decl('popup', {

    onSetMod: {

        'js': function() {

            this.__base.call(this);

            var under = this.findElem('under').first();

            /**
             * Наименование классов оригинальной подложки из DOM.
             *
             * @private
             * @type {String}
             */
            this._underClassAttr = under.attr('class');

            /**
             * NOTE: Изначально присутствует div подложка,
             * если её не достаточно, то нужно её удалить,
             * чтобы _getUnder создал iframe подложку
             */
            if(this.isDivEnough()) {
                this._under = under;
            } else {
                under.remove();
                this._under = null;
            }

            /**
             * Сигнализирует наличие подложки от инстанса этого блока в пуле.
             *
             * @private
             * @type {Boolean}
             */
            this._underInPool = false;

        }

    },

    /**
     * Метод, позволяющий выбрать между `div` и `iframe`
     * по кастомным факторам.
     *
     * @public
     * @returns {Boolean}
     */
    isDivEnough: function() {

        // На десктопе пока(LEGO-8537) используем только iframe
        return false;

    },

    /**
     * Создаёт `iframe` подложку.
     *
     * @return {jQuery}
     */
    _createUnder: function() {

        /*
         * NOTE: frameBorder для IE
         */

        return $('<iframe frameBorder="0" tabindex="-1" src="' + 'about:blank' + '"/>');

    },

    /**
     * Получить подложку из пула или создать новую.
     *
     * @private
     * @return {jQuery}
     */
    _getUnder: function() {

        if(this._under) {
            return this._under;
        }

        var fromPool = underPool.pop();

        fromPool && (this._underInPool = false);

        /**
         * Подложка popup
         * @private
         * @type {jQuery}
         */
        /*jshint boss:true */
        return this._under = fromPool ||
            this._createUnder();

    },

    /**
     * Получает подложку из _getUnder, добавляет в DOM.
     *
     * @private
     */
    _attachUnder: function() {

        var under = this._under = this._getUnder();

        under
            .attr('class', this._underClassAttr);

        this.hasMod(under, 'type', 'paranja')
            ? under.detach().insertBefore(this.domElem)
            : under.prependTo(this.domElem);

    },

    /**
     * Извлекает подложку из DOM, откладывает её в пул.
     *
     * @private
     */
    _detachUnder: function() {

        var under = this._under;

        underPool.push(under.detach());

        this._under = null;
        this._underInPool = true;

    },

    /**
     * Убирает подложку из пула, если этот блок
     * её туда положил.
     */
    destruct: function() {

        this._underInPool && underPool.pop();
        this._under && this._under.remove();

        return this.__base.apply(this, arguments);

    }
});

})();

/* end: ../../libs/islands-components/common.blocks/popup/__under/popup__under.js */
/* begin: ../../blocks-desktop/popup/__under/popup__under.js */

BEM.DOM.decl('popup', {
    isDivEnough: function() {
        return true;
    }
});

/* end: ../../blocks-desktop/popup/__under/popup__under.js */
/* begin: ../../libs/islands-components/common.blocks/popup/__tail/popup__tail.js */
BEM.DOM.decl('popup', {

    onSetMod: {
        'js': function() {

            this.__base();

            /**
             * Посчитанные позиции хвостика внутри(относительно) блока.
             *
             * @private
             * @type {Object}
             */
            this._tailPos = {};

        }
    },

    /**
     * Высчитывает позицию хвостика внутри блока с учётом направления.
     *
     * @private
     * @param {Object} direction  Параметры открытия блока.
     * @return {Object}
     */
    _calcTailPos: function(direction) {

        var to = direction.to,
            currentPos = this._positions[direction.key],
            axis = direction.tail.axis,
            position = {};

            if(to === 'top' || to === 'bottom') {
                position.left = this._calcTailLeft(axis, currentPos);
            } else if(to === 'left' || to === 'right') {
                position.top = this._calcTailTop(axis, currentPos);
            }

        return position;

    },

    /**
     * Высчитывает координату хвостика по вертикальной оси.
     *
     * @private
     * @param {String} axis      Имя оси для рассчетов.
     *                           Допустимые значения: `middle`, `bottom`, `top`.
     * @param {Object} popupPos  Текущие координаты блока.
     * @return {Number}
     */
    _calcTailTop: function(axis, popupPos) {

        var top = 0,

            ownerSize = this.getOwnerSize(),
            ownerPos = this.getOwnerPos(),

            tailHeight = this.params.tail.width,

            popupSize = this.getPopupSize(),

            chunk = popupSize.height,
            topOffset = ownerPos.top - popupPos.top,
            bottomOffset = (popupPos.top + popupSize.height) -
                (ownerPos.top + ownerSize.height);

        if(topOffset > 0) {
            top += topOffset;
            chunk -= topOffset;
        }

        bottomOffset > 0 && (chunk -= bottomOffset);

        if(axis === 'middle') {
            chunk -= tailHeight;
            top += chunk / 2;
        } else if(axis === 'bottom') {
            chunk -= tailHeight;
            top += chunk;
        }

        top < 0 && (top = 0);

        return top;

    },

    /**
     * Высчитывает координату по горизонтальной оси.
     *
     * @private
     * @param {String} axis       Имя оси для рассчетов. Допустимые значения: `left`, `right`, `center`.
     * @param {Object} popupPos   Текущие координаты блока.
     * @return {Number}
     */
    _calcTailLeft: function(axis, popupPos) {

        var left = 0,

            ownerSize = this.getOwnerSize(),
            ownerPos = this.getOwnerPos(),

            tailWidth = this.params.tail.width,

            popupSize = this.getPopupSize(),

            leftOffset = ownerPos.left - popupPos.left,
            chunk = popupSize.width,
            rightOffset = (popupPos.left + popupSize.width) -
                (ownerPos.left + ownerSize.width);

        if(leftOffset > 0) {
            left += leftOffset;
            chunk -= leftOffset;
        }

        rightOffset > 0 && (chunk -= rightOffset);

        if(axis === 'center') {
            chunk -= tailWidth;
            left += chunk / 2;
        } else if(axis === 'right') {
            chunk -= tailWidth;
            left += chunk;
        }

        return left;

    },

    /**
     * Вычисляет насколько нужно сместить начало
     * координат для нормального отображения хвостика.
     *
     * @private
     * @param {Object} params Параметры открытия блока.
     * @return {Object}
     */
    _calcOffsetByTail: function(params) {
        var tail = this.params.tail,

            height = tail.height,

            position = {};

        switch(params.to) {
            case 'top' :
                position = {top: -height};

                break;

            case 'bottom' :
                position = {top: height};

                break;

            case 'right' :
                position = {left: height};

                break;

            case 'left' :
                position = {left: -height};

                break;
        }

        return position;
    },

    /**
     * Возвращает смещение хвостика для текущего направления раскрытия
     * и оси, по которой позиционируется хвост.
     *
     * @private
     * @param {Object} direction Параметры направления раскрытия
     * @return {Object} Смещение координат
     */
    _calcTailOffset: function(direction) {

        var offset = {},
            to = direction.to,

            tailParams = direction.tail,
            tailOffset = tailParams.offset,
            tailAxis = tailParams.axis;

        if(!tailOffset) {
            return false;
        }

        if(to === 'top' || to === 'bottom') {
            offset.left = 0;

            if(tailAxis === 'left') {
                offset.left += tailOffset.left;
            } else if(tailAxis === 'center') {
                tailOffset.left && (offset.left += tailOffset.left);
                tailOffset.right && (offset.left -= tailOffset.right);
            } else if(tailAxis === 'right') {
                offset.left -= tailOffset.right;
            }
        } else if(to === 'left' || to === 'right') {
            offset.top = 0;

            if(tailAxis === 'top') {
                offset.top += tailOffset.top;
            } else if(tailAxis === 'middle') {
                tailOffset.top && (offset.top += tailOffset.top);
                tailOffset.bottom && (offset.top -= tailOffset.bottom);
            } else if(tailAxis === 'bottom') {
                offset.top -= tailOffset.bottom;
            }
        }

        return offset;

    },

    /**
     * Обнуляет позицию хвостика.
     *
     * @private
     * @param {String} key Ключ направления.
     * @return {block}
     */
    _resetTailPos: function(key) {

        key ? (this._tailPos[key] = null) : (this._tailPos = {});

        return this;

    },

    /**
     * Смещает позицию хвостика на указанные во втором аргументе координаты с учётом текущей позиции.
     *
     * @param {String} [key] Уникальный ключ направления
     * @param {Object} offset Объект, описывающий позицию для смещения
     * @return {block}
     */
    _pushTailPos: function(key, offset) {

        this._pushPosTo(this._tailPos, key, offset);

        return this;

    }

});

/* end: ../../libs/islands-components/common.blocks/popup/__tail/popup__tail.js */
/* begin: ../../libs/islands-components/common.blocks/popup/_type/popup_type_modal.js */
BEM.DOM.decl({
    block: 'popup',
    modName: 'type',
    modVal: 'modal'
}, {

    getDefaultParams: function() {
        var params = this.__base();

        params.top = '50%';
        params.left = '50%';

        return params;
    },

    /**
     * Проверяет значение переменной на соответствие строковому типу и
     * наличие знака `%`.
     *
     * @private
     * @param {*} val
     * @returns {Boolean}
     */
    _isPercentVal: function(val) {
        return typeof val === 'string' && val.indexOf('%') > 0;
    },

    /**
     * Показывает попап как модальное окно.
     *
     * @public
     * @param {Object} [position] - Координаты `left`, `top` и отступы `marginLeft`, `marginTop`.
     * @return {BEM}
     */
    show: function(position) {
        this._moveToContainer();

        /**
         * XXX: Необходимо показать блок для подсчета его размеров
         */
        this.setMod('visibility', 'outside')
            .setMod('adaptive', 'no');

        this.repaint(position);

        return this;
    },

    /**
     * Перерисовывает блок с перерасчетом позиции
     * @protected
     * @overrides common.blocks/popup/popup.js#repaint
     * @return {BEM}
     */
    repaint: function(position) {
        this._moveToContainer();

        if(!position) {
            position = {
                left: this.params.left,
                top: this.params.top
            };
        }

        var popupSize = this.getPopupSize();

        if(this._isPercentVal(position.left) && !position.marginLeft) {
            position.marginLeft = popupSize.width / (-100 / parseInt(position.left, 10));
        }

        if(this._isPercentVal(position.top) && !position.marginTop) {
            position.marginTop = popupSize.height / (-100 / parseInt(position.top, 10));
        }

        this._show(position);

        return this;
    }

});

/* end: ../../libs/islands-components/common.blocks/popup/_type/popup_type_modal.js */
/* begin: ../../blocks-desktop/popup/_type/popup_type_modal.js */
/**
 * Построение модальной попапы
 *
 * @param {String} name [confirm]
 */
blocks['popup_type_modal'] = function(name, text) {
    text = text || '';

    var buttonSize = 'normal';

    var buttonsConfirm = [{
        block: 'b-form-button',
        mods: {
            size: buttonSize,
            theme: 'islands',
            name: 'confirm-ok'
        },
        content: vb.getLocalizedString('dialog.yes')
    }, {
        block: 'b-form-button',
        mods: {
            size: buttonSize,
            theme: 'islands',
            name: 'confirm-cancel'
        },
        content: vb.getLocalizedString('dialog.no')
    }];

    var buttonAlert = {
        block: 'b-form-button',
        mods: {
            size: buttonSize,
            theme: 'islands',
            name: 'alert-ok'
        },
        content: vb.getLocalizedString('dialog.ok')
    };

    if (vb.osName !== 'windows') {
        buttonsConfirm.reverse();
    }

    return {
        block: 'popup',
        mods: {
            type: 'modal',
            position: 'fixed',
            modal: name
        },

        content: [
            {
                elem: 'content',
                content: (function() {
                    if (name === 'confirm') {
                        return [{
                            elem: 'header',
                            tag: 'h3',
                            content: text
                        }, {
                            elem: 'buttons',
                            content: buttonsConfirm
                        }];
                    }

                    if (name === 'alert') {
                        return [{
                            elem: 'header',
                            tag: 'h3',
                            content: text
                        }, {
                            elem: 'buttons',
                            content: buttonAlert
                        }];
                    }
                })()
            }
        ]
    };
};

BEM.DOM.decl({block: 'popup', modName: 'type', modVal: 'modal'}, {

    onSetMod: {
        js: function() {
            this.__base.apply(this, arguments);

            var _this = this,
                modName = _this.getMod('modal');

            this.findBlocksInside('b-form-button').forEach(function(block) {
                block.bindTo('leftclick', function($e) {
                    $e.stopPropagation();
                    var name = this.getMod('name'),
                        data = name && name.split('-') || null;

                    if (!data)
                        return true;

                    name = data[1];

                    if (modName === 'confirm') {
                        if (name === 'ok') {
                            _this.execListener(true);
                        }

                        if (name === 'cancel') {
                            _this.execListener(false);
                        }

                    }

                    if (modName === 'alert') {
                        _this.execListener();
                    }

                });

            });
            if (modName === 'confirm') {
                setTimeout(function() {
                    $('.b-form-button_name_confirm-ok').bem('b-form-button').setMod('focused', 'yes');
                }, 0);
            }

            if (modName === 'alert') {
                setTimeout(function() {
                    $('.b-form-button_name_alert-ok').bem('b-form-button').setMod('focused', 'yes');
                }, 0);
            }
        }
    },

    /**
     * Переопределение лего
     */
    _enableAutoclosable: function() {},

    addListener: function(handler) {
        if (!handler)
            return;

        this._handlers = this._handlers || [];
        this._handlers.push(handler);
    },

    execListener: function(data) {
        var modalName = this.getMod('modal');

        this._handlers && this._handlers.forEach(function(handler) {
            handler(data);
        });
        if (modalName === 'confirm' || modalName === 'alert') {
            require('modals').hideModals();
        }
    },

    destruct: function() {
        this._handlers = null;
        $('.b-paranja').bem('b-paranja').setMod('hide', 'yes');
        this.__base.apply(this, arguments);
    },

    hide: function() {
        this.__base.apply(this, arguments);
        this.destruct();
    }

});

/* end: ../../blocks-desktop/popup/_type/popup_type_modal.js */
/* begin: ../../libs/islands-components/common.blocks/popup/_position/popup_position_fixed.js */
BEM.DOM.decl({
    block: 'popup',
    modName: 'position',
    modVal: 'fixed'
}, {

    /**
     * Отключает у дочернего попапа слежение за скролом страницы.
     *
     * @public
     * @param {BEM.DOM} child Дочерний попап.
     */
    addChild: function(child) {
        this.__base.apply(this, arguments);

        child.setMod('watch-scroll', 'no');
    },

    _onFirstFocusableKeyDown: function(e) {
        if(e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.shiftKey && e.which === 9) { /* SHIFT+TAB */
            e.preventDefault();
            this._lastFocusable.focus();
        }
    },

    _onLastFocusableKeyDown: function(e) {
        if(e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        if(e.which === 9) { /* TAB */
            e.preventDefault();
            this._firstFocusable.focus();
        }
    }

});

/* end: ../../libs/islands-components/common.blocks/popup/_position/popup_position_fixed.js */
/* begin: ../../libs/islands-components/desktop.blocks/popup/_position/popup_position_fixed.js */
BEM.DOM.decl({
    block: 'popup',
    modName: 'position',
    modVal: 'fixed'
}, {

    /**
     * Получает позицию owner.
     *
     * Ожидаем что .owner position : fixed
     *
     * @private
     * @returns {Object}
     */
    getOwnerPos: function() {
        var pos = this.__base.apply(this, arguments);

        if(this._owner) {
            var viewport = this._viewport;

            pos.top -= viewport.scrollTop();
            pos.left -= viewport.scrollLeft();
        }

        return pos;
    }

});

/* end: ../../libs/islands-components/desktop.blocks/popup/_position/popup_position_fixed.js */
/* begin: ../../blocks-desktop/b-icon/b-icon.js */
BEM.HTML.decl('b-icon', {
    onBlock: function(ctx) {
        if (!ctx.param('url')) {
            ctx.tag('div');
        } else {
            ctx.tag('img');
            ctx.attr('src', ctx.param('url'));
        }
    }
});

/* end: ../../blocks-desktop/b-icon/b-icon.js */
/* begin: ../../blocks-desktop/auth/auth.js */
blocks.auth = function(auth) {
    if (!auth)
        return null;

    if (!auth.users || !auth.users.length) {
        return {
            block: 'b-link',
            mods: {
                type: 'auth'
            },
            mix: [{
                block: 'i-action',
                elem: 'login'
            }],
            content: {
                elem: 'inner',
                content: vb.getLocalizedString('auth.signin')
            }
        };
    }

    var displayName = auth.users[0].displayName,
        loginMaxLength = 19;

    displayName = displayName.length > loginMaxLength
        ? displayName.substr(0, loginMaxLength) + '…'
        : displayName;

    return {
        block: 'auth',
        js: true,
        mods: {
            login: 'yes'
        },
        userpic: auth.users[0].avatarURL,
        username: displayName
    };
};

channels('api').on('auth', function(auth) {
    page().findAndDestruct('auth');
    page().findAndDestruct({block: 'b-link', modName: 'type', modVal: 'auth'});
    page().findAndDestruct({block: 'popup', modName: 'type', modVal: 'auth'});

    cache.set('auth', auth);

    var bemjson = blocks.auth(auth),
        BEMHTML = require('bemhtml');

    $('.b-content .b-auth').html(BEMHTML.apply(bemjson));
    BEM.DOM.init();

    redrawAuth();
});

var redrawAuth = $.throttle(function() {
    var authWrapper = page().findBlockInside('b-auth'),
        bLink = page().findBlockInside({block: 'b-link', modName: 'type', modVal: 'auth'}),
        authBlock = page().findBlockInside({block: 'auth', modName: 'login', modVal: 'yes'}),
        arrow = $('.b-head-search'),
        headSearch = $('.b-vb-head'),
        minMargin = 40,
        arrowMinWidth = 666,
        pageWidth = $('.b-content').width(),
        // сколько есть места под авторизацию, если не двигать поиск
        freeSpace = (pageWidth - headSearch.width()) / 2,
        searchMargin;

    var searchboxStyle = page().getMod('searchbox');
    var custo = (searchboxStyle == 'custo');

    if (bLink) {
        authWrapper.setMod('type', 'auth');

        var inner = bLink.findElem('inner');

        inner.show();

        if (!arrow.length)
            return;

        searchMargin = authWrapper.domElem.width() - freeSpace + minMargin;

        searchMargin = searchMargin >= 0 ? searchMargin : 0;

        if (!custo) {
            $('.b-vb-head__search').css('margin-right', searchMargin);
        }

        if (arrow.width() < arrowMinWidth) {
            inner.hide();
            if (!custo) {
                $('.b-vb-head__search').css('margin-right', minMargin);
            }
        } else {
            inner.show();
        }
    }

    if (authBlock) {
        var userName = authBlock.findElem('name');

        userName.show();

        if (!arrow.length)
            return;

        searchMargin = authBlock.domElem.width() - freeSpace + minMargin;

        searchMargin = searchMargin >= 0 ? searchMargin : 0;

        if (!custo) {
            $('.b-vb-head__search').css('margin-right', searchMargin);
        }

        if (arrow.width() < arrowMinWidth) {
            userName.hide();
            if (!custo) {
                $('.b-vb-head__search').css('margin-right', minMargin);
            }
        } else {
            userName.show();
        }
    }
}, 50);

channels('dom').on('resize', redrawAuth);
channels('dom').on('layoutChanged', redrawAuth);
channels('dom').on('redraw', redrawAuth);

BEM.DOM.decl('auth', {
    _popup: null,

    onSetMod: {
        js: function() {
            this.bindTo('click', function(e) {
                e.preventDefault();
                var BEMHTML = require('bemhtml');

                if (!this._popup) {
                    this._popup = $(BEMHTML.apply(blocks['popup_type_auth'](cache.get('auth')))).bem('popup');
                }

                page().hideSettings();
                page().findBlocksInside('i-popup').concat(page().findBlocksInside('popup')).forEach(function(popup) {
                    popup.hide();
                });

                if (this._popup.isShown()) {
                    this.domElem.attr('aria-expanded', 'false');
                    this._popup.hide();
                } else {
                    this.domElem.attr('aria-expanded', 'true');
                    vb.stat('auth.menu.open');
                    this._popup.show(this);
                }

                this.afterCurrentEvent(function() {
                    this._bindPopupEvents();
                });

                return false;
            });

            this.afterCurrentEvent(function() {
                redrawAuth();
            });

        }
    },

    redraw: function() {
        redrawAuth();
    },

    _bindPopupEvents: function() {
        this._bindPopupEvents = function() {};

        var _this = this,
            menu = this._popup.findBlockInside('menu');

        menu.bindTo(menu.findElem('item', 'name', 'passport'), 'click', function() {
            _this._popup.hide();
            vb.stat('auth.menu.passport');
            vb.auth.openPassport();
        });

        menu.bindTo(menu.findElem('item', 'name', 'tune'), 'click', function() {
            _this._popup.hide();
            vb.stat('auth.menu.settings');
            vb.auth.openTune();
        });

        menu.bindTo(menu.findElem('item', 'name', 'logout'), 'click', function() {
            _this._popup.hide();
            vb.stat('auth.menu.logout');
            vb.auth.logout();
        });

        menu.bindTo(menu.findElem('item', 'name', 'login'), 'click', function() {
            _this._popup.hide();
            vb.stat('auth.menu.enternewname');
            vb.auth.login();
        });

        menu.bindTo(menu.findElem('item', 'user', 'yes'), 'click', function(e) {
            _this._popup.hide();
            var domElem = e.data.domElem,
                user = menu.elemParams(domElem);

            vb.stat('auth.menu.loginlist.' + menu.getMod(domElem, 'number'));
            vb.auth.login(user.id);
        });
    },

    destruct: function() {
        if (this._popup) {
            this._popup.destruct();
            this._popup = null;
        }

        this.__base.apply(this, arguments);
    }
});

/* end: ../../blocks-desktop/auth/auth.js */
/* begin: ../../blocks-desktop/popup/_type/popup_type_auth.js */
blocks['popup_type_auth'] = function(auth) {
    return {
        block: 'popup',
        mods: {
            adaptive: 'yes',
            type: 'auth'
        },
        js: {
            directions: [
                {
                    to: 'bottom',
                    axis: 'right'
                }
            ]
        },
        content: [
            {
                elem: 'tail'
            },
            {
                elem: 'content',
                content: blocks['menu_type_auth'](auth)
            }
        ]
    };
};

/* end: ../../blocks-desktop/popup/_type/popup_type_auth.js */
/* begin: ../../blocks-desktop/menu/_type/menu_type_auth.js */
blocks['menu_type_auth'] = function(auth) {
    var users = [],
        i = 0;

    auth.users.forEach(function(user) {
        var authorized = user.state !== 0;
        var selected = user.state === 2 ? 'yes' : '';

        users.push({
            elem: 'item',
            content: [
                {
                    elem: 'icon',
                    url: user.avatarURL
                },
                {
                    elem: 'name',
                    content: {
                        elem: 'inner',
                        content: BEM.blocks['i-common__string'].escapeHTML(user.displayName)
                    }
                },
                selected && {
                    elem: 'tick'
                }
            ],
            mods: {
                authorized: authorized ? 'yes' : '',
                user: 'yes',
                number: ++i
            },
            js: user
        });
    });

    users.push({
        elem: 'item',
        content: vb.getLocalizedString('auth.addUser'),
        mods: {
            name: 'login'
        }
    });

    var json = {
        block: 'menu',
        mods: {
            type: 'auth'
        },
        content: [{
            elem: 'hr'
        }, {
            elem: 'item',
            mods: {
                name: 'tune'
            },
            content: vb.getLocalizedString('auth.tune')
        }, {
            elem: 'item',
            mods: {
                name: 'passport'
            },
            content: vb.getLocalizedString('auth.passport')
        }, {
            elem: 'item',
            mods: {
                name: 'logout'
            },
            content: vb.getLocalizedString('auth.signout'),
            action: 'quit-auth'
        }]
    };

    json.content.unshift(users);

    return json;
};

/* end: ../../blocks-desktop/menu/_type/menu_type_auth.js */
/* begin: ../../blocks-desktop/b-page/layout/b-page__layout.js */
BEM.DOM.decl('b-page', /** @lends Block.prototype */ {
    getLayout: function() {
        var thumbs = cache.get('thumbs'),
            thumbsCount = 0;

        Object.keys(thumbs).forEach(function(index) {
            var thumb = thumbs[index]; 
            if (thumb && thumb.url) {
                thumbsCount++;
            }
        });

        return this.getLayoutOfThumbsNumber(thumbsCount);
    },

    /*
     * @param {Number} thumbsCount
     * @returns [x, y]
     */
    getLayoutOfThumbsNumber: function(thumbsCount) {
        var layout = [7, 7];

        if (thumbsCount <= 1) {
            layout = [1, 1];
        }

        if (thumbsCount === 2) {
            layout = [2, 1];
        }

        if (thumbsCount === 3) {
            layout = [3, 1];
        }

        if (thumbsCount === 4) {
            layout = [4, 1];
        }

        if (thumbsCount >= 5 && thumbsCount <= 8) {
            layout = [4, 2];
        }

        if (thumbsCount >= 9 && thumbsCount <= 12) {
            layout = [4, 3];
        }

        if (thumbsCount >= 9 && thumbsCount <= 12) {
            layout = [4, 3];
        }

        if (thumbsCount >= 13 && thumbsCount <= 15) {
            layout = [5, 3];
        }

        if (thumbsCount >= 16 && thumbsCount <= 20) {
            layout = [5, 4];
        }

        if (thumbsCount >= 21 && thumbsCount <= 25) {
            layout = [5, 5];
        }

        if (thumbsCount >= 26 && thumbsCount <= 30) {
            layout = [5, 6];
        }

        if (thumbsCount >= 31 && thumbsCount <= 35) {
            layout = [5, 7];
        }

        if (thumbsCount >= 36 && thumbsCount <= 40) {
            layout = [5, 8];
        }

        if (thumbsCount >= 41 && thumbsCount <= 45) {
            layout = [5, 9];
        }

        if (thumbsCount >= 46) {
            layout = [5, 10];
        }

        return {
            x: layout[0],
            y: layout[1],
            0: layout[0],
            1: layout[1],
            length: 2,
            thumbsCount: thumbsCount
        };
    }
});

/* end: ../../blocks-desktop/b-page/layout/b-page__layout.js */
/* begin: ../../blocks-desktop/advert-popup/advert-popup.js */
blocks['advert-popup'] = function(advertisement, translated, callback) {
    callback({
        block: 'advert-popup',
        js: {
            advertisement: advertisement,
            textForReplacement: translated.text2
        },
        content: [{
            elem: 'img',
            tag: 'img',
            attrs: {
                src: translated.flag
            }
        }, {
            elem: 'text',
            content: translated.text.replace(/\[(.*)\]/, '<a class="advert-popup__link" href="#">$1</a>')
        }, {
            elem: 'close',
            mix: [{
                block: 'krestik',
                mods: {
                    color: 'black',
                    size: 'small'
                }
            }]
        }]
    });
};

BEM.DOM.decl('advert-popup', {
    onSetMod: {
        js: function () {
            this.bindTo('link', 'leftclick', function(e) {
                e.preventDefault();

                var _this = this;

                this.elem('text').text(this.params.textForReplacement);

                setTimeout(function() {
                    _this.hide(function() {
                        vb.advertisement.hide();
                    });
                }, 2000);

                if (this.params.advertisement.id === 'vbsetsearch') {
                    vb.advertisement.setYandexAsCurrentSearchEngine();
                } else {
                    vb.advertisement.setYandexAsHomePage();
                }

                vb.advertisement.stat('accept');
            });

            this.bindTo('close', 'leftclick', function(e) {
                this.hide(function() {
                    vb.advertisement.stat('close');
                    vb.advertisement.refuse(0);
                });
            });
        }
    },

    hide: function(callback) {
        var _this = this;

        this.domElem.animate({
            left: -1000
        }, 200, function() {
            _this.destruct();

            if (callback) {
                callback();
            }
        });
    }
});

/* end: ../../blocks-desktop/advert-popup/advert-popup.js */
/* begin: ../../blocks-desktop/b-restore-tumbs-popup/b-restore-tumbs-popup.js */
blocks['b-restore-tumbs-popup'] = function () {

    return {
        block: 'b-restore-tumbs-popup',
        js: true,
        content: [{
            elem: 'inner',
            content: [{
                elem: 'text',
                content: ''
            }, {
                block: 'b-link',
                mods: {
                    pseudo: 'yes'
                },
                mix: [{
                    block: 'b-restore-tumbs-popup',
                    elem: 'restore'
                }],
                content: vb.getLocalizedString('restorepopup.button')
            }, {
                elem: 'close',
                mix: [{
                    block: 'krestik',
                    mods: {
                        theme: 'dynamic',
                        size: 'small'
                    }
                }]
            }]
        }]
    };
};

BEM.DOM.decl('b-restore-tumbs-popup', {
    onSetMod: {
        js: function () {
            this.bindTo('restore', 'leftclick', function () {
                if (this._thumbsToRestore) {
                    vb.restoreThumbs(this._thumbsToRestore.thumbs);
                }
                this._thumbsToRestore = null;
                page().hideRestoreThumbsPopup('undo');
            });

            this.bindTo('close', 'leftclick', function(e) {
                this._thumbsToRestore = null;
                page().hideRestoreThumbsPopup('accept');
            });
        }
    },

    showPopup: function(thumbsToRestore) {
        if (!thumbsToRestore) {
            return;
        }

        this._thumbsToRestore = thumbsToRestore;

        var text = (thumbsToRestore.deleted == 1)
            ? vb.getLocalizedString('restorepopup.tumb')
            : require('plural')
                .form(thumbsToRestore.deleted, vb.getLocalizedString('restorepopup.tumbs'))
                .replace('{N}', thumbsToRestore.deleted);
        this.elem('text').text(text);

        var pg = page();

        pg.findAndDestruct('advert');
        pg.findAndDestruct('advert-popup');
        pg.delMod('advert');
        cache.set('advertisement', null);

        if (pg.hasMod('restorepopup')) {
            return;
        }

        pg.setMod('restorepopup', 'yes');

        pg.setStatisticsTimer('thumbdelnotify.showsliderdel', 'thumbdelnotify.showsliderdel', 0);
    }
});

/* end: ../../blocks-desktop/b-restore-tumbs-popup/b-restore-tumbs-popup.js */
/* begin: ../../blocks-desktop/b-right-choice/b-right-choice.js */
blocks['b-right-choice'] = function () {

    return {
        block: 'b-right-choice',
        js: true,
        mods: {
            type: '0'
        },
        content: [{
            elem: 'text',
            content: vb.getLocalizedString('rightchoice.text')
        },{
            elem: 'lightpopup'
        }]
    };
};

BEM.DOM.decl('b-right-choice', {
    _documentHideEvents: [
        'click',
        'mousedown',
        'mouseup',
        'keydown',
        'keyup',
        'contextmenu'
    ],
    _timer: null,
    _type: -1,

    onSetMod: {
        js: function () {
            channels('api').on('showRightChoicePopup', function(data) {
                if (data.type) {
                    var settings = cache.get('settings');
                    var brid = settings && settings.branding && settings.branding.id;
                    if (brid) {
                        this.setMod('brid', brid);
                    }
                    this._showPopup(data.type);
                }
            }, this);
            channels('api').on('action', function(data) {
                if (data.type == 'closeSettings') {
                    this._hidePopup();
                }
            }, this);
            this._hideFunc = this._hidePopup.bind(this);
            this._bindCloseEvents();
            this._bindHoverEvent();
        }
    },

    _showPopup: function(type, notimer) {
        if (type == this._type) {
            return;
        }
        this._type = type;
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null;
        }
        this.setMod("type", type);
        if (type && !notimer) {
            this._timer = setTimeout(this._hideFunc, 15000);
        }
    },
    
    _hidePopup: function() {
        this._showPopup(0);
    },

    _bindCloseEvents: function () {
        this._documentHideEvents.forEach(function (type) {
            document.addEventListener(type, this._hideFunc);
        }, this);
    },

    _bindHoverEvent: function () {
        this.elem('lightpopup').on('mouseout', this._hideFunc).on('mousemove', this._hideFunc);
    }
});

/* end: ../../blocks-desktop/b-right-choice/b-right-choice.js */
/* begin: ../../blocks-desktop/b-decor/b-decor.js */
blocks['b-decor'] = function(data) {
    return {
        block: 'b-decor',
        mods: {
            theme: 'white'
        }
    };
};

/* end: ../../blocks-desktop/b-decor/b-decor.js */
/* begin: ../../blocks-desktop/b-bookmarks/b-bookmarks.js */
blocks['b-bookmarks'] = function() {
    return {
        block: 'b-bookmarks',
        mods: {
            state: 'ready'
        },
        js: true,
        content: {
            block: 'b-menu-horiz',
            mods: {
                layout: 'normal',
                type: 'bookmarks'
            },
            js: false
        }
    };
};

var TITLE_MAX_LENGTH = 19,
    BOOKMARKS_MARGIN = 50,
    OTHERS_RESERVERD_WIDTH = 150,
    OTHER_BOOKMARKS_ID = 'others-id';

function getBookmarks() {
    return $('.b-menu-horiz__layout-unit_type_bookmarks:not(.b-menu-horiz__layout-unit_name_others)');
}

function getOtherBookmarks() {
    var $bookmarks = getBookmarks(),
        bookmarks = cache.get('bookmarks'),
        lengthBeforeSlice = bookmarks.length;

    return bookmarks.slice($bookmarks.length, bookmarks.length);
}

function repaintBookmarks(force) {
    function enoughSpace() {
        return innerWidth > container.width();
    }

    var bookmarks = cache.get('bookmarks'),
        showOtherPopup = false,
        BEMHTML = require('bemhtml');

    if (force || !bookmarks) {
        page().findAndDestruct('b-bookmarks');
        page().findAndDestruct({block: 'b-popupa', modName: 'type', modVal: 'bookmarks'});

        if (bookmarks) {
            BEM.DOM.prepend($('.b-content'), BEMHTML.apply(blocks['b-bookmarks']()));
        }
    }

    if (!bookmarks) {
        return;
    }

    var container = $('.b-bookmarks .b-menu-horiz__layout'),
        lengthBeforeSlice = bookmarks.length;

    if (!force) {
        // отрезаем от bookmarks то, что уже показано
        bookmarks = bookmarks.slice(getBookmarks().length, bookmarks.length);
    } else {
        bookmarks = bookmarks.slice();
    }

    var bookmark,
        windowWidth = $(window).width(),
        innerWidth = windowWidth - OTHERS_RESERVERD_WIDTH - BOOKMARKS_MARGIN,
        removed = false;

    if (!force) {
        while (!enoughSpace()) {
            bookmark = getBookmarks();

            if (!bookmark.length) {
                break;
            }

            // TODO popup hide?
            bookmark.eq(bookmark.length - 1).remove();
            removed = true;
            showOtherPopup = true;
        }
    }

    if (!removed) {
        while ((bookmark = bookmarks.shift()) && enoughSpace()) {
            container.append(BEMHTML.apply(bookmark.isFolder ? folderItem(bookmark) : linkItem(bookmark)));
        }

        if (!enoughSpace()) {
            bookmarks = getBookmarks();
            bookmarks.eq(bookmarks.length - 1).remove();
            showOtherPopup = true;
        }
    }

    var others = $('.b-menu-horiz__layout-unit_name_others');

    if (showOtherPopup) {
        if (!others.length) {
            container.append(BEMHTML.apply(folderItem({
                title: vb.getLocalizedString('bookmarks.otherBookmarks'),
                id: OTHER_BOOKMARKS_ID,
                specialMod: 'others'
            })));
        } else {
            // всегде в конец
            others.appendTo(container);
        }
    } else {
        others.remove();
    }

    BEM.DOM.init();
}

/**
    * Возвращает bemjson с градиентом или без, взависимости от длины title
    * @param title {String}
    * @param cut {String} обрезать ли исходный текст, учитывая максимальную длину
    * @return {Object} bemjson
    */
function getTitleWithGradient(title, cut) {
    var cuttedTitle = cut ? title.slice(0, TITLE_MAX_LENGTH) : title;

    return title.length > TITLE_MAX_LENGTH ? [cuttedTitle || title,  {
        elem: 'gradient'
    }] : title;
}

function linkItem(item) {
    var content;

    if (!item.title.trim()) {
        content = {
            block: 'b-icon',
            url: item.favicon
        };
    } else {
        item.title = item.title.trim();

        content = getTitleWithGradient(item.title, true);
    }

    return {
        block: 'b-menu-horiz',
        elem: 'layout-unit',
        elemMods: {
            type: 'bookmarks'
        },
        content: {
            block: 'b-menu-horiz',
            elem: 'item',
            content: {
                block: 'b-link',
                mix: [{
                    block: 'i-action',
                    elem: 'hide-popup'
                }, {
                    block: 'i-action',
                    elem: 'bookmark'
                }],
                url: item.url,
                content: {
                    elem: 'inner',
                    content: content
                },
                attrs: {
                    title: item.title,
                    draggable: false
                }
            }
        }
    };
}

function folderItem(item) {
    item.title = item.title.trim();
    return {
            block: 'b-menu-horiz',
            elem: 'layout-unit',
            elemMods: {
                type: 'bookmarks',
                name: item.specialMod
            },
            content: {
                elem: 'item',
                content: [{
                    block: 'b-link',
                    mods: {
                        pseudo: 'yes',
                        border: 'none',
                        type: 'folder',
                        action: 'open-folder'
                    },
                    js: {
                        id: item.id
                    },
                    mix: [
                        {
                            block: 'b-bookmarks',
                            elem: 'folder',
                            js: {
                                id: item.id
                            }
                        }

                    ],
                    url: item.url,
                    content: [
                        getTitleWithGradient(item.title, true),
                        ' ',
                        {
                            block: 'b-dropdowna',
                            elem: 'arr',
                            content: '&#x25BC;' // ▼ BLACK DOWN-POINTING TRIANGLE Unicode: U+25BC, UTF-8: E2 96 BC
                        }
                    ],
                    attrs: {
                        title: item.title
                    }
                }
            ]
        }
    };
}

function vertLinkItem(item) {
    var BEM = require('bem').BEM;

    item.title = item.title.trim();

    return {
        elem: 'item',
        content: {
            block: 'b-link',
            mods: {
                inner: 'yes'
            },
            url: item.url,
            mix: [{
                block: 'i-action',
                elem: 'hide-popup'
            }, {
                block: 'i-action',
                elem: 'bookmark'
            }],
            content: [
                {
                    block: 'b-icon',
                    mix: [{
                        block: 'b-link',
                        elem: 'icon'
                    }],
                    url: item.favicon || '',
                    width: 16,
                    height: 16,
                    alt: item.title
                },
                {
                    elem: 'inner',
                    content: getTitleWithGradient(item.title),
                    attrs: {
                        title: item.title
                    }
                }
            ],
            attrs: {
                draggable: false
            }
        }
    };
}

function vertFolderItem(item) {
    var BEM = require('bem').BEM;

    item.title = item.title.trim();

    return {
        elem: 'item',
        content: [
            {
                block: 'b-link',
                mods: {
                    pseudo: 'yes',
                    inner: 'yes',
                    border: 'none',
                    action: 'open-folder',
                    type: 'open-sub-folder'
                },
                mix: [{
                    block: 'b-menu-vert',
                    elem: 'item-selector'
                }],
                js: {
                    id: item.id
                },
                url: item.url,
                content: [
                    {
                        block: 'b-icon',
                        mods: {
                            type: 'folder'
                        },
                        mix: [
                            {
                                block: 'b-link',
                                elem: 'icon'
                            }
                        ]
                    },
                    {
                        elem: 'inner',
                        content: getTitleWithGradient(item.title),
                        attrs: {
                            title: item.title,
                            draggable: false
                        }
                    }
                ]
            }
        ]
    };
}

channels('dom').on('resize', function() {
    var ie8 = vb.navigator === 'ie' && vb.navigatorMajorVersion < 9;

    if (ie8) {
        setTimeout(function() {
            repaintBookmarks();
        }, 500);
    } else {
        repaintBookmarks();
    }
});

channels('api').on('bookmarksStateChanged', function(bookmarks) {
    cache.set('bookmarks', bookmarks);
    repaintBookmarks(true);
});

BEM.DOM.decl('b-bookmarks', {
    onSetMod: {
        js: function() {
            BEM.blocks['b-link'].on('open-folder', this._openFolder, this);
            channels('dom').on('resize', this._onResize, this);
        }
    },

     destruct: function() {
        channels('dom').off('resize', this._onResize, this);
        BEM.blocks['b-link'].un('open-folder', this._openFolder, this);

        if (this._popupa) {
            this._popupa.destruct();
        }

        this._popupa = null;

        this.__base.apply(this, arguments);
    },

     _onResize: function() {
         this._getPopup().hide();
     },

    _getPopup: function() {
        if (!this._popupa) {
            var popupaJSON = {
                block: 'b-popupa',
                mods: {
                    theme: 'ffffff',
                    type: 'bookmarks'
                },
                content: [
                    {
                        elem: 'tail'
                    },
                    {
                        elem: 'content',
                        content: {
                            block: 'b-menu-vert',
                            mods: {
                                type: 'bookmarks'
                            },
                            js: true
                        }
                    }
                ]
            };

            var BEMHTML = require('bemhtml');
            this._popupa = $(BEMHTML.apply(popupaJSON)).appendTo('body').bem('b-popupa');
        }

        return this._popupa;
    },

    _updateOthers: function() {
        var BEMHTML = require('bemhtml');

        this._getPopup().setContent(BEMHTML.apply({
            block: 'b-menu-vert',
            mods: {
                type: 'bookmarks'
            },
            js: true,
            content: getOtherBookmarks().map(function(bookmark) {
                return bookmark.isFolder ? vertFolderItem(bookmark) : vertLinkItem(bookmark);
            })
        }));
    },

    _openFolder: function(e) {
        var self = this,
            link = e.target,
            BEMHTML = require('bemhtml');
            self._popupa = this._getPopup();

        // Тоглим попапу, только если кликаем по закладкам верхнего уровня
        if (!link.hasMod('type', 'open-sub-folder')) {
            // Если кликаем по той же ссылке закрываем попапу
            if (link.domElem === self._popupa._owner) {
                self._popupa.toggle(link.domElem);
            } else {
                // Вставляем прелоадер на время загрузки данных
                self._popupa.setContent(BEMHTML.apply({
                    block: 'b-spin',
                    mods: {
                        progress: 'yes'
                    }
                }));
                self._popupa.show(link.domElem);
            }
        }

        if (link.params.id === OTHER_BOOKMARKS_ID) {
            this._updateOthers();
            return;
        }

        vb.requestBookmarksBranch(link.params.id, function(bookmarks) {
            function scrollUpdate() {
                var popup = self._popupa,
                    otherBookmarks = self._othersBookmarks;

                popup.setMod('has-scroll', popup.elem('content').hasScroll() && vb.osName === 'windows' ? 'yes' : '');
                // TODO разобраться, почему не нужна проверка на скролл
                otherBookmarks && otherBookmarks.setMod('has-scroll', otherBookmarks.elem('content').hasScroll() && vb.osName === 'windows' ? 'yes' : '');
            }

            var items = [],
                len = bookmarks.length;

            // Есть вложенные объекты
            if (len) {
                for (var i = 0; i < len; i++) {
                    var item = bookmarks[i];

                    if (item)
                        items.push(item.isFolder ? vertFolderItem(item) : vertLinkItem(item));
                }

            // Папка пуста
            } else {
                items.push({
                    elem: 'item',
                    content: {
                        block: 'b-link',
                        attrs: {
                            draggable: false
                        },
                        mods: {
                            inner: 'yes',
                            pseudo: 'yes',
                            disabled: 'yes'
                        },
                        content: vb.getLocalizedString('app.empty')
                    }
                });
            }
            var menu;

            if (link.hasMod('type', 'open-sub-folder')) {
                link.toggleMod('opened', 'yes');

                if (link.hasMod('opened', 'yes')) {
                    var submenu = BEMHTML.apply({
                        block: 'b-menu-vert',
                        elem: 'item-content',
                        elemMods: {
                            visibility: 'visible'
                        },
                        content: {
                            elem: 'submenu',
                            content: items
                        }
                    });

                    link.domElem.after(submenu);
                    link.setMod('loaded', 'yes');
                    scrollUpdate();
                    vb.stat('panel.bookpanel.folder');
                } else {
                    menu = link.findBlockOutside('b-menu-vert');
                    menu.toggleMod(menu.findElem(link.domElem.parent(), 'item-content'), 'visibility', 'visible');
                    scrollUpdate();
                }
            } else {
                menu = BEMHTML.apply({
                    block: 'b-menu-vert',
                    mods: {
                        type: 'bookmarks'
                },
                    js: true,
                    content: items
                });
                self._popupa.setContent(menu, function() {
                    scrollUpdate();
                }, self._popupa);
            }
        });
        self.findBlockOutside('b-page').findBlocksInside('b-popupa').forEach(function(block){
            self.afterCurrentEvent(function() {
                block.pos();
            });
        });
    }
});

/* end: ../../blocks-desktop/b-bookmarks/b-bookmarks.js */
/* begin: ../../libs/lego/blocks-desktop/b-spin/b-spin.js */
BEM.DOM.decl('b-spin', {

    onSetMod : {

        'js' : function() {

            this._size = this.getMod('size') || /[\d]+/.exec(this.getMod('theme'))[0];

            this._bgProp = 'background-position';
            this._posPrefix = '0 -';

            if (this.elem('icon').css('background-position-y')) { /* В IE нельзя получить свойство background-position, только background-position-y, поэтому костыляем */
                this._bgProp = 'background-position-y';
                this._posPrefix = '-';
            }

            this._curFrame = 0;

            this.hasMod('progress') && this.channel('sys').on('tick', this._onTick, this);

        },

        'progress' : {

            'yes' : function() {

                this.channel('sys').on('tick', this._onTick, this);

            },

            '' : function() {

                this.channel('sys').un('tick', this._onTick, this);

            }

        }
    },

    _onTick: function(){

        var y = ++this._curFrame * this._size;

        (y >= this._size * 36) && (this._curFrame = y = 0);

        this.elem('icon').css(this._bgProp, this._posPrefix + y +'px');

    },

    destruct : function() {

        this.channel('sys').un('tick', this._onTick, this);
        this.__base.apply(this, arguments);

    }

});

/* end: ../../libs/lego/blocks-desktop/b-spin/b-spin.js */
/* begin: ../../libs/lego/bem-bl/blocks-common/i-system/i-system.js */
(function() {

var timer,
    counter = 0,
    isIdle = false,
    idleInterval = 0,
    channel = BEM.channel('sys'),
    TICK_INTERVAL = 50;

BEM.decl('i-system', {}, {

    start : function() {

        $(document).bind('mousemove keydown', function() {
            idleInterval = 0;
            if(isIdle) {
                isIdle = false;
                channel.trigger('wakeup');
            }
        });

        this._tick();

    },

    _tick : function() {

        var _this = this;

        channel.trigger('tick', { counter : counter++ });

        if(!isIdle && (idleInterval += TICK_INTERVAL) > 3000) {
            isIdle = true;
            channel.trigger('idle');
        }

        timer = setTimeout(function() {
            _this._tick();
        }, TICK_INTERVAL);

    }

}).start();

})();
/* end: ../../libs/lego/bem-bl/blocks-common/i-system/i-system.js */
/* begin: ../../blocks-desktop/b-link/_action/b-link_action_open-folder.js */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({block: 'b-link', modName: 'action', modVal: 'open-folder'}, {
    onSetMod: {
        js: function() {
            var self = this;
            self.on('click', function(e) {
                this.trigger('open-folder', e);
            });
        }
    }
});

})();

/* end: ../../blocks-desktop/b-link/_action/b-link_action_open-folder.js */
/* begin: ../../libs/lego/blocks-desktop/b-dropdowna/b-dropdowna.js */
(function($) {
BEM.DOM.decl('b-dropdowna', {

    onSetMod : {

        'js' : function() {

            this._getSwitcher().on('click', this._toggle, this);

        },

        'disabled' : function(modName, modVal) {

            this._getSwitcher().setMod(modName, modVal);
            modVal == 'yes' && this.getPopup().hide();

        }

    },

    /**
     * Возвращает блок свитчера
     * @private
     */
    _getSwitcher : function() {

        return this._switcher ||
            (this._switcher =
                this.findBlockInside('b-' + (this.getMod(this.elem('switcher'), 'type') || 'link' )));

    },

    _toggle : function() {

        this.getPopup().toggle(this.elem('switcher'));

    },

    getPopup : function() {

        return this._popup || (this._popup = this.findBlockInside('b-popupa'))
            .on('outside-click', function(e, data) {
                this._getSwitcher().containsDomElem($(data.domEvent.target)) && e.preventDefault();
            }, this);

    },

    destruct : function() {

        var popup = this._popup;
        popup && popup.destruct();

        this.__base.apply(this, arguments);

    }

}, {

    live : function() {

        this.liveInitOnEvent('switcher', 'leftclick', function() {});

    }

});
})(jQuery);

BEM.HTML.decl('b-dropdowna', {

    onBlock: function (ctx) {
        ctx.js(true);
    }

});

/* end: ../../libs/lego/blocks-desktop/b-dropdowna/b-dropdowna.js */
/* begin: ../../libs/lego/blocks-desktop/b-dropdowna/switcher/b-dropdowna__switcher.js */
BEM.HTML.decl('b-dropdowna', {

    onElem: {

        'switcher': function (ctx) {
            ctx.tag('span');
        }

    }

});

/* end: ../../libs/lego/blocks-desktop/b-dropdowna/switcher/b-dropdowna__switcher.js */
/* begin: ../../libs/lego/bem-bl/blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.js */
BEM.DOM.decl({'name': 'b-link', 'modName': 'pseudo', 'modVal': 'yes'}, {

    _onClick : function(e) {

        e.preventDefault();

        this.hasMod('disabled', 'yes') || this.afterCurrentEvent(function() {
            this.trigger('click');
        });

    }

}, {

    live : function() {

        this.__base.apply(this, arguments);

        this.liveBindTo({ modName : 'pseudo', modVal : 'yes' }, 'leftclick', function(e) {
            this._onClick(e);
        });

    }

});

/* end: ../../libs/lego/bem-bl/blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.js */
/* begin: ../../libs/lego/blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.js */
/** @requires BEM */
/** @requires BEM.HTML */

BEM.HTML.decl({name: 'b-link', modName: 'pseudo', modVal: 'yes'}, {
    onBlock: function(ctx) {
        ctx.tag(ctx.param('url') ? 'a': 'span');

        ctx.wrapContent({ elem : 'inner' });

        ctx.js(true);
    },

    onElem : {
        'inner': function(ctx) {
            ctx.tag('span');
        }
     }
});


/* end: ../../libs/lego/blocks-desktop/b-link/_pseudo/b-link_pseudo_yes.js */
/* begin: ../../blocks-desktop/b-vb/b-vb.js */
blocks['b-vb'] = function(data, width, height) {
    var Lib = require('lib'),
        blocks = require('bem').blocks;

    return {
        block: 'b-vb',
        js: true,
        content: [
            {
                elem: 'head',
                content: [
                    blocks['b-vb-head'](data)
                ]
            },
            {
                elem: 'content'
            }
        ]
    };
};

BEM.DOM.decl('b-vb', {
    onSetMod: {
        js: function() {
            var blocks = require('bem').blocks,
                BEMHTML = require('bemhtml'),
                thumbs = blocks['b-tumbs'](cache.get('thumbs'), cache.get('settings')),
                content = this.findElem('content');

            content.find(this.buildSelector('td')).prepend(BEMHTML.apply(thumbs));
            BEM.DOM.init();
            // TODO попробовать вынести в nextTick внутри b-page
            page().afterInit();
        }
    }
});

/* end: ../../blocks-desktop/b-vb/b-vb.js */
/* begin: ../../blocks-desktop/advert/advert.js */
blocks.advert = function(advertisement, callback) {
    if (!advertisement || !advertisement.id)
        return null;

    function formatDate(date) {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();

        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        return [
            day,
            month,
            year
        ].join('.');
    }

    var promises,
        leftBlock,
        textBlock,
        today = formatDate(new Date()),
        openInBrowser,
        buttonText,
        translated = {};

    advertisement.data = advertisement.data || {};

    function getURL(key) {
        var promise = $.Deferred();

        vb.advertisement.getLocalizedURL(key, function(val) {
            promise.resolve([key, val]);
        });

        return promise;
    }

    function getTranslate(key) {
        var promise = $.Deferred();

        vb.advertisement.getLocalizedString(key, function(val) {
            promise.resolve([key, val]);
        });

        return promise;
    }

    switch (advertisement.id) {
        case "vbadbbnewver":
        case "vbadbbnewverrun":
            promises = [
                getURL('logo_smallest'),
                getURL('name'),
                getURL('name-white'),
                getURL('name-black'),
                getTranslate('advertisement.yandexBrowser.updated'),
                advertisement.id === 'vbadbbnewver' && getTranslate('advertisement.yandexBrowser.open'),
                advertisement.id === 'vbadbbnewver' && getURL('open-in-yb'),
                advertisement.id === 'vbadbbnewverrun' && getTranslate('advertisement.yandexBrowser.download'),
                advertisement.id === 'vbadbbnewverrun' && getURL('yb-dl-link')
            ];
            advertisement.data.yandexBrowserInstalled = true;

            if (advertisement.id === 'vbadbbnewverrun')
                advertisement.data.yandexBrowserInstalled = false;

            break;

        case "vbadbbdoc":
            promises = [
                getURL('docs'),
                getTranslate('advertisement.yandexBrowser.docs')
            ];

            if (advertisement.data.yandexBrowserInstalled)
                promises.push(getURL('open-in-yb'));
            else
                promises.push(getURL('yb-dl-link'));

            if (advertisement.data.yandexBrowserInstalled)
                promises.push(getTranslate('advertisement.yandexBrowser.open'));
            else
                promises.push(getTranslate('advertisement.yandexBrowser.download'));

            break;

        case "vbadsyncon":
            promises = [
                getTranslate('advertisement.yandexSyncon.on'),
                getURL('sync-on')
            ];
            break;

        case 'newbackground':
        case 'setbackground':
            promises = [
                getTranslate('text')
            ];
            break;

        case 'vbsetsearch':
        case 'vbsethome':
            promises = [
                getTranslate('text'),
                getTranslate('text2'),
                getURL('flag')
            ];
            break;

        default:
            return null;
    }

    promises.forEach(function(promise) {
        if (!promise)
            return;

        var escapeHTML = BEM.blocks['i-common__string'].escapeHTML;

        promise.then(function(keyAndVal) {
            translated[keyAndVal[0]] = escapeHTML(keyAndVal[1]);
        });
    });

    var color = (cache.get('background').color === '000000') ? 'black' : 'white';

    $.when.apply($, promises).then(function(results) {
        switch (advertisement.id) {
            case "vbadbbnewverrun":
            case "vbadbbnewver":
                openInBrowser = advertisement.data.yandexBrowserInstalled ? translated['open-in-yb'] : translated['yb-dl-link'];
                leftBlock = [
                    {
                        block: 'b-icon',
                        url: translated['logo_smallest'],
                        mix: [{
                            block: 'advert',
                            elem: 'logo'
                        }]
                    },
                    {
                        block: 'b-icon',
                        url: translated['name-' + color ],
                        mix: [{
                            block: 'advert',
                            elem: 'name'
                        }]
                    }
                ];

                textBlock = translated['advertisement.yandexBrowser.updated'];
                buttonText = translated[advertisement.id === 'vbadbbnewver'
                    ? 'advertisement.yandexBrowser.open'
                    : 'advertisement.yandexBrowser.download'
                ];
                break;

            case "vbadbbdoc":
                openInBrowser = advertisement.data.yandexBrowserInstalled ? translated['open-in-yb'] : translated['yb-dl-link'];
                leftBlock = [
                    {
                        block: 'b-icon',
                        url: translated.docs,
                        mix: [{block: 'advert', elem: 'docs'}]
                    }
                ];
                textBlock = translated['advertisement.yandexBrowser.docs'];
                buttonText = advertisement.data.yandexBrowserInstalled
                    ? translated['advertisement.yandexBrowser.open']
                    : translated['advertisement.yandexBrowser.download'];
                break;

            case 'newbackground':
            case 'setbackground':
                var currentId = globals.get('initedWithBackgroundId'),
                    isNewBackgrounds = advertisement.id === 'newbackground',
                    backgrounds = isNewBackgrounds
                        ? advertisement.data.newBackgrounds
                        : advertisement.data.backgrounds;

                if (!backgrounds || backgrounds.length === 0) {
                    return null;
                }

                callback({
                    block: 'advert',
                    mods: {
                        type: 'skins',
                        hide: 'yes',
                        id: advertisement.id
                    },
                    js: {
                        currentId: currentId,
                        advertisement: advertisement
                    },
                    content: [
                        {
                            elem: 'info',
                            content: translated.text
                        },
                        {
                            elem: 'list',
                            content: (function() {
                                return backgrounds.map(function(bg) {
                                    return {
                                        elem: 'skin',
                                        url: bg.preview,
                                        js: {
                                            id: bg.id
                                        }
                                    };
                                });
                            })()
                        },
                        {
                            block: 'krestik',
                            mods: {
                                size: 'big',
                                theme: 'dynamic'
                            }
                        },
                        {
                            elem: 'buttons',
                            content: [{
                                elem: 'done',
                                mods: {
                                    hide: 'yes'
                                },
                                content: {
                                    block: 'b-link',
                                    mods: {
                                        pseudo: 'yes'
                                    },
                                    content: vb.getLocalizedString('advertisement.backgrounds.done')
                                }
                            },
                            {
                                elem: 'cancel',
                                mods: {
                                    hide: 'yes'
                                },
                                content: {
                                    block: 'b-link',
                                    mods: {
                                        pseudo: 'yes'
                                    },
                                    content: vb.getLocalizedString('settings.cancel')
                                }
                            }]
                        }
                    ]
                });

                return;

            case 'vbsetsearch':
            case 'vbsethome':
                require('bem').blocks['advert-popup'](advertisement, translated, callback);
                return;
        }

        callback({
            block: 'advert',
            mods: {
                type: 'text',
                hide: 'yes',
                id: advertisement.id,
                nosetbg: 'yes'
            },
            js: {
                openInBrowser: openInBrowser,
                advertisement: advertisement
            },
            content: [
                leftBlock && {
                    elem: 'block',
                    content: leftBlock
                },
                {
                    elem: 'info',
                    mix: [{block: 'advert', elem: 'block'}],
                    content: textBlock
                },
                {
                    elem: 'btn',
                    mix: [{block: 'advert', elem: 'block'}],
                    content: [{
                        block: 'b-form-button',
                        mods: {
                            theme: 'islands',
                            size: 'normal'
                        },
                        content: buttonText
                    }]
                },

                {
                    block: 'krestik',
                    mix: [{block: 'advert', elem: 'block'}],
                    mods: {
                        size: 'big',
                        theme: 'dynamic'
                    }
                }
            ]
        });
    });
};

channels('api').on('advertisement', function(advertisement) {
    page().findAndDestruct('advert');
    page().findAndDestruct('advert-popup');
    page().delMod('advert');
    cache.set('advertisement', advertisement);

    if (!advertisement || !advertisement.id) {
        return;
    }

    var blocks = require('bem').blocks,
        BEMHTML = require('bemhtml');

    blocks.advert(advertisement, function(bemjson) {
        var html = bemjson && BEMHTML.apply(bemjson) || '';

        if (advertisement.id === 'vbsetsearch' || advertisement.id === 'vbsethome') {
            $('.b-decor').after(html);
        } else if (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9) {
            $('.b-vb__content .b-vb__td').append(html);
        } else {
            $('.b-vb-foot').prepend(html);
        }

        BEM.DOM.init();

        var advert = page().findBlockInside('advert');

        if (advert) {
            page().setMod('advert', 'yes');
            if (advert.getMod('type') === 'skins')
            {
                page().setMod('advert_skins', 'yes');
            }
        } else {
            page().delMod('advert');
        }
    });
});

BEM.DOM.decl('advert', {
    onSetMod: {
        js: function() {
            var images = this.domElem.find('img');

            if (!images.length) {
                this.show();
                return;
            }

            var loaded = 0,
                _this = this,
                needToLoad = images.length;

            images.each(function(index, img) {
                var $this = $(this);

                $this.load(onLoad);
            });

            function onLoad() {
                loaded++;

                if (needToLoad === loaded) {
                    _this.show();
                }
            }
        }
    },

    show: function() {
        this.delMod('hide');
    }
});

BEM.DOM.decl({block: 'advert', modName: 'type', modVal: 'text'}, {
    onSetMod: {
        js: function() {
            this.__base();
            var blocks = require('bem').blocks,
                _this = this;

            this.findBlockInside('krestik').bindTo('click', function() {
                var params = _this.params,
                    advertisement = params.advertisement,
                    param;

                if (advertisement.id === 'vbadbbdoc') {
                    if (advertisement.data.yandexBrowserInstalled) {
                        param = 'runclose';
                    } else {
                        param = 'installclose';
                    }
                } else if (advertisement.id === 'vbadbbnewver') {
                    param = 'runclose';
                } else if (advertisement.id === 'vbadbbnewverrun') {
                    param = 'installclose';
                }

                if (param)
                    vb.advertisement.stat(param);

                vb.advertisement.refuse(0);
            });
            this.findBlockInside('b-form-button').on('click', function() {
                var params = _this.params,
                    advertisement = params.advertisement,
                    param;

                if (advertisement.id === 'vbadbbdoc') {
                    if (advertisement.data.yandexBrowserInstalled) {
                        param = 'run';
                    } else {
                        param = 'install';
                    }
                } else if (advertisement.id === 'vbadbbnewver') {
                    param = 'run';
                } else if (advertisement.id === 'vbadbbnewverrun') {
                    param = 'install';
                }

                if (param)
                    vb.advertisement.stat(param);

                if (advertisement.data.yandexBrowserInstalled)
                    vb.advertisement.openYandexBrowser(params.openInBrowser);
                else
                    location.href = params.openInBrowser;

                vb.advertisement.refuse(0);
            });

            channels('api').on('backgroundChanged', this._onBackgroundChanged, this);
        }
    },

    _onBackgroundChanged: function(background) {
        var elem  = this.findElem('name'),
            color = (background.color === 'ffffff') ? 'white' : 'black';

        vb.advertisement.getLocalizedURL('name-' + color, function(newSrc) {
            elem.attr('src', newSrc);
        });
    },

    destruct: function() {
        channels('api').off('backgroundChanged', this._onBackgroundChanged);
        this.__base.apply(this, arguments);
    }
});

BEM.DOM.decl({block: 'advert', modName: 'type', modVal: 'skins'}, {
    onSetMod: {
        js: function() {
            this.__base();

            var cancel = this.findElem('cancel'),
                done = this.findElem('done');

            this.bindTo(this.findElem('skin'), 'click', function(e) {
                vb.advertisement.stat('select');
                var params = this.elemParams($(e.target));

                vb.advertisement.hide(1000 * 60 * 5);

                this.delMod(cancel, 'hide');
                this.delMod(done, 'hide');

                vb.setBackgroundImage(params.id);
            });

            this.findBlockInside('krestik').bindTo('click', function() {
                vb.advertisement.stat('close');
                vb.advertisement.refuse(0);
            });

            this.bindTo(cancel, 'click', function() {
                vb.advertisement.stat('rollback');
                this.setMod(cancel, 'hide', 'yes');
                this.setMod(done, 'hide', 'yes');
                vb.setBackgroundImage(this.params.currentId);
            });

            this.bindTo(done, 'click', function() {
                vb.advertisement.stat('okclose');
                vb.advertisement.hide(0);
            });
        }
    }
});

/* end: ../../blocks-desktop/advert/advert.js */
/* begin: ../../blocks-desktop/b-vb-head/b-vb-head.js */
blocks['b-vb-head'] = function(data) {
    var blocks = require('bem').blocks;

    return {
        block: 'b-vb-head',
        mix: [{block: 'i-clearfix'}],
        content: blocks['b-vb-head__content'](data)
    };
};

/*
 * Содержимое b-vb-head
 *
 * Может быть переопределено на уровне experiments/no-logo
 */
blocks['b-vb-head__content'] = function(data) {
    var blocks = require('bem').blocks;

    // Показывается поисковая форма
    return data.searchStatus === 2 ? [
        blocks['b-vb-head__logo'](data),
        blocks['b-vb-head__search'](data)
    ] : blocks['b-question']();
};

blocks['b-vb-head__logo'] = function (data) {
    // VB-3085
    if (!data || !data.branding || !data.branding.logo || !data.branding.search) {
        return;
    }

    return {
        block: 'b-vb-head',
        elem: 'logo',
        content: [
            blocks['b-head-logo'](data)
        ]
    };
};

blocks['b-vb-head__search'] = function (data) {
    // VB-3085
    if (!data || !data.branding || !data.branding.search || !data.branding.logo) {
        return;
    }

    return {
        block: 'b-vb-head',
        elem: 'search',
        content: [
            blocks['b-head-search'](data)
        ]
    };
};

/* end: ../../blocks-desktop/b-vb-head/b-vb-head.js */
/* begin: ../../blocks-desktop/b-question/b-question.js */
blocks['b-question'] = function () {
    return {
        block: 'b-question',
        content: [
            {
                block: 'b-icon',
                tag: 'div',
                mods: {
                    quest: 'top'
                }
            },
            {
                elem: 'quest-text',
                content: [
                    vb.getLocalizedString('app.searchTutorial.description') + ' ' + vb.getLocalizedString('app.searchExampleTitle') + ', ',
                    {
                        block: 'b-link',
                        mix: [{
                            block: 'i-action',
                            elem: 'try-tutorial'
                        }],
                        mods: {
                            pseudo: 'yes',
                            omni: 'yes'
                        },
                        js: true,
                        url: '#',
                        content: vb.getLocalizedString('app.searchTutorial.example')
                    }
                ]
            },
            {
                elem: 'quest-close',
                mix: [{
                    block: 'i-action',
                    elem: 'close-search-tutorial'
                }],
                content: {
                    block: 'krestik',
                    mods: {
                        size: 'big',
                        color: 'black'
                    }
                }
            }
        ]
    };
};

/* end: ../../blocks-desktop/b-question/b-question.js */
/* begin: ../../blocks-desktop/b-head-logo/b-head-logo.js */
/** @requires BEM.DOM */

blocks['b-head-logo'] = function(data) {
    return {
        block: 'b-head-logo',
        js: true,
        mix: [{
            block: 'i-action',
            elem: 'head-logo'
        }],
        content: [
            {
                elem: 'logo',
                content: {
                    elem: 'link',
                    content: [{
                        elem: 'img',
                        url: data.branding.logo.img
                    }, {
                        elem: 'imgdark',
                        url: data.branding.logo.imgDark || data.branding.logo.img//.replace(/(?=.[a-z]*$)/, '-dark')
                    }],
                    attrs: {
                        title: data.branding.logo.title
                    },
                    url: data.branding.logo.url
                }
            }
        ]
    };
};

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-head-logo', /** @lends Block.prototype */ {

    _onFocus: function() {
        this.setMod('hide-focus', 'yes');
        var logo = this;
        $(document).one('mouseup', function() {
            logo._onBlur();
        });
    },

    _onBlur: function() {
        this.setMod('hide-focus', 'none');
    }

}, {
    live: function() {
        if (vb.navigator === "ie" && vb.navigatorMajorVersion === 9) {
            this.liveBindTo('mousedown', function(e) {
                e.preventDefault();
                this._onFocus();
            });
        }
        this.liveBindTo('click', function(e) {
            if (e.which !== 3)
                vb.stat('panel.logo');
        });
    }
});

/* end: ../../blocks-desktop/b-head-logo/b-head-logo.js */
/* begin: ../../libs/lego/blocks-common/i-statface/i-statface.js */
BEM.decl('i-statface', {

    onSetMod : {

        'js' : function() {

            this._data = {};
            this._needSend = false;
            this.hasMod('send', 'manual') || $(window).unload(this.changeThis(this.send));

        }

    },

    /**
     * @param {Object|string} name
     * @param {string} [val]
     */
    set : function(name, val) {

        this._needSend = true;
        var data = this._data;
        if(typeof name == 'object') {
            $.each(name, function(key, value) {
                data[key] = value;
            })
        } else {
            data[name] = val;
        }

        return this;
    },

    reset : function() {

        var _this = this;
        arguments[0]?
            $.each(arguments, function(i, key) {
                delete _this._data[key];
            }) :
            this._data = {};
        $.isEmptyObject(this._data) && (this._needSend = false);
        return this;

    },

    serialize : function() {

        var _this = this;

        return $.map(_this.params.keys, function(val) {
            return _this._data[val];
        }).join('.') + (_this.params.customKeys?
            $.map(_this.params.customKeys, function(key) {
                var val = _this._data[key];
                return '/' + key + '=' + (val == undefined ? '' : val)
            }).join('') :
            '');

    },

    /**
     * @param {Function} [onComplete]
     */
    send : function(onComplete) {

        if(this._needSend) {
            var params = this.params,
                url = ['//', params.host,
                    '/', params.path,
                    '/dtype=stred',
                    '/pid=', params.pid,
                    '/cid=', params.cid,
                    '/path=', this.serialize(),
                    '/*data=', encodeURIComponent('url=' + encodeURIComponent(params.url))
                ].join('');

            params.path == 'click' ?
                document.createElement('IMG').src = url :
                $.ajax({
                    type: 'GET',
                    url: url,
                    data: null,
                    complete: onComplete || $.noop,
                    dataType: 'script',
                    timeout: 500
                });

            this._needSend = false;
        }
        return this;

    },

    getDefaultParams : function() {

        return {
            host : 'clck.yandex.ru',
            path : 'jclck',
            url : location.href
        };

    }

});

/* end: ../../libs/lego/blocks-common/i-statface/i-statface.js */
/* begin: ../../blocks-desktop/b-head-search/b-head-search.js */
/** @requires BEM.DOM */

blocks['b-head-search'] = function(data) {
    var url = data.branding.search.url,
        matches = url.match(/([\w_\-]+)\=\{searchTerms\}/),
        defaultAction = url.replace(matches[0], ''),
        placeholder = data.branding.search.placeholder;

    return {
        block: 'b-head-search',
        mods: {
            theme: 'islands'
        },
        content: [
            {
                block: 'b-search',
                attrs: {
                    action: defaultAction
                },
                js: {
                    url: url
                },
                content: [
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'col',
                                mix: [{
                                    elem: 'input'
                                }],
                                content: {
                                    block: 'b-form-input',
                                    mods: {
                                        theme: 'grey',
                                        size: 'l',
                                        type: 'search',
                                        autocomplete: 'yes'
                                    },
                                    mix: [{
                                        block: 'b-search',
                                        elem: 'input'
                                    }],
                                    js: {
                                        dataprovider: {
                                            name: 'i-vb-search-suggest-dataprovider'
                                        },
                                        popupMods: {
                                            size: 'l'
                                        }
                                    },
                                    name: matches[1],
                                    placeholder: placeholder,
                                    role: 'search',
                                    aria: 'textbox'
                                }
                            },
                            {
                                elem: 'col',
                                mix: [{
                                    elem: 'button'
                                }],
                                content: [
                                    {
                                        block: 'b-form-button',
                                        mods: {
                                            size: 'big',
                                            theme: 'islands'
                                        },
                                        mix: [{
                                            block: 'b-search',
                                            elem: 'button'
                                        }, {
                                            block: 'i-action',
                                            elem: 'search-button'
                                        }],
                                        content: vb.getLocalizedString('app.searchButtonTitle')
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

        ]
    };
};

/* end: ../../blocks-desktop/b-head-search/b-head-search.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-input/b-form-input.js */
(function() {

var instances,
    sysChannel,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) instance.val(instance.elem('input').val());
    },
    getActiveElement = function (doc) {
        // В iframe в IE9: "Error: Unspecified error."
        try { return doc.activeElement } catch (e) {}
    };

BEM.DOM.decl('b-form-input', {

    onSetMod : {

        'js' : function() {

            var _this = this,
                input = _this.elem('input'),
                activeElement = getActiveElement(_this.__self.doc[0]),
                haveToSetAutoFocus =
                    _this.params.autoFocus &&
                    !(activeElement && $(activeElement).is('input, textarea'));

            _this._val = input.val();
            // Кешируем, чтобы сравнивать с document.activeElement
            // LEGO-9049
            _this._input0 = input[0];

            if (activeElement === _this._input0 || haveToSetAutoFocus) {
                _this._autoFocus = true;
                _this.setMod('focused', 'yes')._focused = true;
                delete _this._autoFocus;
            }

            // факт подписки
            if(!sysChannel) {
                instances = [];
                sysChannel = _this.channel('sys')
                    .on({
                        'tick' : update,
                        'idle' : function() {
                            sysChannel.un('tick', update);
                        },
                        'wakeup' : function() {
                            sysChannel.on('tick', update);
                        }});
            }

            // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
            _this._instanceIndex = instances.push(
                _this.bindTo(input, {
                    focus : _this._onFocus,
                    blur  : _this._onBlur
                })
            ) - 1;

            // шорткат для перехода в инпут - crtl+стрелка вверх
            _this.params.shortcut && _this.bindToDoc('keydown', function(e) {
                if(e.ctrlKey && e.keyCode == 38 && !$(e.target).is('input, textarea')) {
                    _this.setMod('focused', 'yes');
                }
            });
        },

        'disabled' : function(modName, modVal) {

            this.elem('input').attr('disabled', modVal == 'yes');

        },

        'focused' : function(modName, modVal) {

            if(this.hasMod('disabled', 'yes'))
                return false;

            var focused = modVal == 'yes';

            focused?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.afterCurrentEvent(function() {
                this.trigger(focused? 'focus' : 'blur');
            });

        }

    },

    onElemSetMod : {

        'message' : {

            'visibility' : function(elem, modName, modVal) {

                var _this = this,
                    type = _this.getMod(elem, 'type');

                if(type) {
                    var needSetMod = true;
                    modVal || _this.elem('message', 'type', type).each(function() {
                        this != elem[0] && _this.hasMod($(this), 'visibility', 'visible') && (needSetMod = false);
                    });
                    needSetMod && _this.toggleMod('message-' + type, 'yes', '', modVal === 'visible');
                }

            }

        }

    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {

        if(typeof val == 'undefined') return this._val;

        if(this._val != val) {
            var input = this.elem('input');
            input.val() != val && input.val(val);
            this._val = val;
            this.trigger('change', data);
        }

        return this;

    },

    /**
     * @see http://stackoverflow.com/questions/4185821#4186100
     * @return {Number} Позиция конца выделения. Если ничего не выделено, то возвращается 0.
     */
    getSelectionEnd : function() {
        var input = this.elem('input')[0],
            end = 0;
        if(typeof(input.selectionEnd) == 'number') {
            end = input.selectionEnd;
        } else {
            var range = document.selection.createRange();
            if(range && range.parentElement() == input) {
                var len = input.value.length,
                    textInputRange = input.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());

                var endRange = input.createTextRange();
                endRange.collapse(false);
                end = textInputRange.compareEndPoints('EndToEnd', endRange) > -1 ?
                    len :
                    -textInputRange.moveEnd('character', -len);
            }
        }
        return end;
    },

    name : function(name) {
        return this.elem('input').attr('name');
    },

    _onFocus : function() {

        this._focused = true;
        return this.setMod('focused', 'yes');

    },

    _onBlur : function(e) {

        var _this = this;

        // LEGO-9049
        if(getActiveElement(document) === _this._input0) return;

        if(_this._preventBlur) {
            // LEGO-8557
            setTimeout(function() { _this._focus() }, 0);

            return _this;
        }

        _this._focused = false;

        return _this.delMod('focused');

    },

    /**
     * Нормализует установку фокуса для IE
     * @private
     */
    _focus : function() {

        var input = this.elem('input')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }

    },

    _blur : function() {

        this.elem('input').blur();

    },

    destruct : function() {

        this.__base.apply(this, arguments);

        this.params.shortcut && this.unbindFromDoc('keydown');
        instances.splice(this._instanceIndex, 1);

        var i = this._instanceIndex,
            instance;

        while(instance = instances[i++]) --instance._instanceIndex;

    }

});

})();

/* end: ../../libs/lego/blocks-desktop/b-form-input/b-form-input.js */
/* begin: ../../blocks-desktop/b-form-input/b-form-input.js */
BEM.DOM.decl('b-form-input', {
    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * если в data передан параметр noTrigger === true, то change тригериться на блоке не будет
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val: function(val, data) {

        if (typeof val === 'undefined')
            return this._val;

        if (this._val != val) {
            var input = this.elem('input');

            input.val() != val && input.val(val);
            this._val = val;

            if (!data || data.noTrigger !== true)
                this.trigger('change', data);

            if (!data || data.magicVal !== true)
                clearInterval(this._magicInterval);
        }

        return this;
    },

    // плавный набор текста
    magicVal: function(text) {
        var len = text.length,
            i = 1,
            _this = this;

        function iterate() {
            _this.val(text.substr(0, i), {
                noTrigger: true,
                magicVal: true
            });

            if (i === len) {
                clearInterval(_this._magicInterval);
                return;
            }
            i++;
        }

        this._magicInterval && clearInterval(this._magicInterval);
        iterate();
        this._updateHint();
        this._magicInterval = setInterval(iterate, 30);

    },

    // Очищает и снимает фокус и инпута
    clear: function() {
        this.val('');
        this.domElem.find('input').blur();
        this.delMod('focused');
    },

    focus: function() {
        this._focus();
    }
});

/* end: ../../blocks-desktop/b-form-input/b-form-input.js */
/* begin: ../../libs/lego/blocks-common/i-request/i-request.js */
(function() {

var cache = {};

BEM.decl('i-request', {

    onSetMod : {

        'js' : function() {

            this._preventCache = false;

        }

    },

    get : function(request, onSuccess, onError, params) {

        if(!$.isFunction(onError)) {
            params = onError;
            onError = this.params.onError;
        }

        this._get(request, onSuccess, onError, $.extend({}, this.params, params));

    },

    _get : function(request, onSuccess, onError, params) {

        var key = this._buildCacheKey(request, params),
            cacheGroup = cache[params.cacheGroup];

        params.cache && cacheGroup && key in cacheGroup.data?
            this.afterCurrentEvent(function() {
                onSuccess.call(this.params.callbackCtx, cacheGroup.data[key])
            }, this) :
            this._do(request, onSuccess, onError, params);
    },

    _do : function(request, onSuccess, onError, params) {},

    _onSuccess : function(requestKey, request, data, params) {

        params.cache && !this._preventCache && this.putToCache(params, requestKey, data);
        this._preventCache = false;

    },

    _buildCacheKey : function(obj, params) {

        return typeof obj == 'string' ? obj : $.param(obj);

    },

    putToCache : function(params, request, data) {

        var cacheGroup = cache[params.cacheGroup] || (cache[params.cacheGroup] = { keys : [], data : {}});

        if(cacheGroup.keys.length >= params.cacheSize) {
            delete cacheGroup.data[cacheGroup.keys.shift()];
        }

        var key = this._buildCacheKey(request, params);

        cacheGroup.data[key] = data;
        cacheGroup.keys.push(key);
    },

    dropCache : function() {

        delete cache[this.params.cacheGroup];

    },

    getDefaultParams : function() {

        return {
            cache : false,
            cacheGroup : 'default',
            cacheSize : 100,
            callbackCtx : this
        };

    }

}, {

    _cache: cache

});

})();
/* end: ../../libs/lego/blocks-common/i-request/i-request.js */
/* begin: ../../libs/lego/blocks-common/i-request/_type/i-request_type_ajax.js */
BEM.decl({ block : 'i-request_type_ajax', baseBlock : 'i-request' }, {

    onSetMod : {

        'js' : function() {

            this.__base();
            this._requestNumber = this._number = this._preventNumber = this._retryCount = 0;

        }

    },

    _get : function(request, onSuccess, onError, params) {

        this._number++;
        this._requestNumber++;
        this._retryCount = params.retryCount;

        this.__base.apply(this, arguments);

    },

    _do : function(request, onSuccess, onError, params) {

        var _this = this;
        if(_this._number > _this._preventNumber) { // условие на случай, если кто-то синхронно позовет preventCallbacks
            var args = arguments,
                settings = {
                    data : params.data? $.extend({}, params.data, request) : request
                },
                done = _this._wrapCallback(function(respArgs, requestNumber, number) {
                    _this._onSuccess(_this._buildCacheKey(request, params), request, respArgs[0], params);
                    _this._allowCallback(requestNumber, number) &&
                    onSuccess.apply(params.callbackCtx, respArgs);
                }),
                fail = _this._wrapCallback(function(respArgs, requestNumber, number) {
                    _this._allowCallback(requestNumber, number) &&
                    (_this._retryCount-- > 0?
                        setTimeout(
                            function() {
                                _this._do.apply(_this, args);
                            },
                            params.retryInterval) :
                        onError && onError.apply(params.callbackCtx, respArgs));
                });

            $.each(['url', 'dataType', 'timeout', 'type', 'jsonp', 'jsonpCallback'].concat(params.paramsToSettings || []), function(i, name) {
                settings[name] = params[name];
            });

            $.ajax(settings).done(done).fail(fail);
        }

    },

    _wrapCallback : function(callback) {

        var requestNumber = this._requestNumber,
            number = this._number;

        return function(data) {
            data !== null && callback(arguments, requestNumber, number);
        };

    },

    _allowCallback : function(requestNumber, number) {

        return number > this._preventNumber && this._requestNumber == requestNumber;

    },

    _buildCacheKey : function(obj, params) {

        return typeof obj == 'string'?
            obj :
            this.__base(obj) + params.url;

    },

    abort : function() {

        this._preventNumber = ++this._number;

    },

    /**
     * @deprecated использовать abort
     */
    preventCallbacks : function() {

        this.abort();

    },

    getDefaultParams : function() {

        return $.extend(
            this.__base(),
            {
                cache         : true,
                type          : 'GET',
                dataType      : 'jsonp',
                timeout       : 20000,
                retryCount    : 0,
                retryInterval : 2000
            });

    }

});

/* end: ../../libs/lego/blocks-common/i-request/_type/i-request_type_ajax.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-input/dataprovider/b-form-input__dataprovider.js */
BEM.decl({ name : 'b-form-input__dataprovider', baseBlock : 'i-request_type_ajax' }, {

    get : function(request, callback) {

        return this.__base(
            { part : request },
            function(data) {
                callback.call(this, { items: data[1], metainfo: data[2] })
            });

    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-input/dataprovider/b-form-input__dataprovider.js */
/* begin: ../../blocks-desktop/b-form-input/__dataprovider/_type/b-form-input__dataprovider_type_vb.js */
BEM.decl({name: 'i-vb-search-suggest-dataprovider', baseBlock: 'i-request_type_ajax'}, {

    cache: {},

    get: function(request, callback) {
        var self = this,
            input = $('.b-form-input_type_search').bem('b-form-input');

        if (request) {
            var requestCallback = function() {
                if (!self.cache[request])
                    self.cache[request] = arguments;

                var actualVal = input.val(),
                    suggest = self.cache[actualVal] || self.cache[request];

                self._onSuccess.apply(self, Array.prototype.slice.call(suggest).concat(callback));
            };

            if (self.cache[request])
                requestCallback.apply(self, self.cache[request]);
            else
                vb.search.suggest(request, requestCallback);
        } else {
            input._getPopup().hide();
        }
    },

    _onSuccess: function(data, callback) {
        function hideSuggestPopup() {
            input.getPopup().hide();
        }

        var lib = require('lib'),
            input = $('.b-form-input_type_search').bem('b-form-input'),
            query = input.val(),
            parsedData = lib.getAllSuggests(data);

        // не пришли правильные данные или строка уже пустая
        if (!query || !parsedData || !parsedData.suggestions) {
            hideSuggestPopup();
            return;
        }

        var suggests = parsedData.suggestions,
            hl = lib.highlightText(query);

        if (!suggests || !suggests.length) {
            hideSuggestPopup();
            return;
        }

        var navigateTitleUsed = false;

        var BEMJSON = suggests.map(function(suggest) {
            var suggestJSON,
                navigateTitle = cache.get('settings').branding.search.navigateTitle;

            switch (suggest.type) {

                case 'text':
                    if (suggest.action && suggest.action.type === 'openurl') {
                        suggestJSON = [
                            'nav',
                            suggest.text,
                            suggest.value,
                            suggest.action.value,
                            // если тут вставить что-то, то
                            // лего думает, что это текст
                            undefined,
                            hl
                        ];
                    } else {
                        suggestJSON = ['text', suggest.value];
                    }
                    break;

                case 'weather':
                    suggestJSON = [
                        'weather',
                        suggest.value,
                        suggest.title,
                        suggest.text,
                        suggest.image,
                        suggest.action.value,
                        hl
                    ];
                    break;

                case 'market':
                case 'lingvo':
                case 'maps':
                    suggestJSON = [
                        suggest.type,
                        suggest.value,
                        suggest.title,
                        suggest.text,
                        suggest.action.value,
                        hl
                    ];
                    break;

                case 'units_converter':
                    suggestJSON = [
                        'promo',
                        suggest.value,
                        navigateTitleUsed ? null : navigateTitle,
                        suggest.text,
                        hl
                    ];
                    navigateTitleUsed = true;
                    break;

                case 'traffic':
                    suggestJSON = [
                        'traffic',
                        suggest.value,
                        suggest.title,
                        suggest.text,
                        suggest.image,
                        suggest.action.value,
                        hl
                    ];
                    break;

                case 'fact':
                    suggestJSON = [
                        'fact',
                        suggest.value,
                        suggest.text,
                        navigateTitleUsed ? null : navigateTitle,
                        hl
                    ];
                    navigateTitleUsed = true;
                    break;

                default:
                    suggestJSON = suggest.value;
            }

            return suggestJSON;
        });

        callback.call(this, {
            items: BEMJSON
        });
    }
});

BEM.decl({name: 'i-vb-search-history-suggest-dataprovider', baseBlock: 'i-request_type_ajax'}, {

    cache: {},

    get: function(request, callback) {
        var _this = this,
            parseURL = require('parseURL'),
            bSetting = $('.b-page').bem('b-page').findBlockInside('b-setting'),
            input = bSetting.findBlockInside({blockName: 'b-form-input', modName: 'type', modVal: 'url'}),
            newURL = parseURL(input._val);

        bSetting.suggestedUrl = false;

        if (!request) {
            input.getPopup().hide();
            return;
        }

        if (input.getMod('block-request') === 'yes') {
            input.delMod('block-request');
            return;
        }

        this._freeze = true;
        this._requestURLsSuggest(request, callback);
    },

    _requestURLsSuggest: function(request, callback) {
        if (this._allAnsweredCache[request]) {
            callback.call(this, this._allAnsweredCache[request]);
            return;
        }

        vb.search.suggestURLs(request, function() {
            var args = [].slice.call(arguments);
            args.push(callback);
            this._handleResponse.apply(this, args);
        }.bind(this));
        clearTimeout(this._timer);
        this._timer = setTimeout(function() {
            this._freeze = false;
            this._showSuggest(callback, this.getInput()._val);
        }.bind(this), 100);
    },

    _timer: null,

    _handleResponse: function(val, source, data, callback) {
        // callback.call(this, {items: [[url, title, val, val]]})
        // кеш имеет следующий вид:
        // {
        //   "vk": {
        //     "bookmarks": [{url, title, weight}]
        //     "web": []
        //     "history": []
        //     "tabs": []
        //   }
        // }
        // 0 -> history
        source = this._sources[source];

        this._saveToCache(source, val, data);

        this._showSuggest(callback, val);
    },

    getPopup: function() {
        return this.getInput().getPopup();
    },

    getInput: function() {
        var input = $('.b-form-input_type_url').bem('b-form-input');
        this.getInput = function() {
            return input;
        };
        return input;
    },

    _sources: ['history', 'bookmarks', 'tabs', 'web'],

    _allAnsweredCache: {},

    _showSuggest: function(callback, val) {
        if (page().findBlockInside('b-setting').hasMod('hide', 'yes'))
            return;

        var actualVal = this.getInput()._val,
            stringHelper = BEM.blocks['i-common__string'],
            escapeHTML = stringHelper.escapeHTML.bind(stringHelper);

        if (!actualVal) {
            this.getPopup().hide();
            return;
        }

        var cachedData = this._getFromCache(actualVal);
        var usedVal = actualVal;

        if (!cachedData) {
            cachedData = this._getFromCache(val);
            usedVal = val;
        }

        if (!cachedData) {
            this.getPopup().hide();
            return;
        }

        var allAnswered = this._sources.every(function(key) {
            return Boolean(cachedData[key]);
        });

        if (allAnswered) {
            clearTimeout(this._timer);
            if (this._sources.every(function(key) {
                return cachedData[key] && cachedData[key].length === 0;
            })) {
                this.getPopup().hide();
                return;
            }
        } else if (this._freeze) {
            return;
        }

        var all = [];

        this._sources.forEach(function(source) {
            var pages = cachedData[source] || [];
            pages.forEach(function(page) {
                page.source = source;
            });

            all = all.concat(pages);
        });
        all.sort(function(a, b) {
            return b.weight - a.weight;
        });

        var usedDomains = {};

        all = all.filter(function(page) {
            page.domain = page.domain.replace(/^www\./, '');

            if (page.domain in usedDomains) {
                return false;
            }

            usedDomains[page.domain] = true;
            return true;
        });

        var usedUrls = {};

        if (all.length > 1) {
            all = all.reduce(function(res, page) {
                if (page.url in usedUrls) {
                    return res;
                }

                usedUrls[page.url] = true;
                res.push(page);
                return res;
            }, []);
        }

        var results = all.slice(0, 8);

        if (results.length === 8) {
            var fromWeb = 0;
            results.forEach(function(result) {
                if (result.source === 'web') {
                    fromWeb++;
                }
            });

            if (fromWeb < 2) {
                var otherResults = all.slice(8, all.length),
                    othersFromWeb = otherResults.filter(function(page) {
                        return page.source === 'web';
                    });

                othersFromWeb.length = Math.min(othersFromWeb.length, 2);
                results.length = results.length - othersFromWeb.length;
                results = results.concat(othersFromWeb);
            }
        }

        var stringHelper = BEM.blocks['i-common__string'];
        var res = {
            items: results.map(function(page) {
                page.title = stringHelper.unescapeHTML(page.title.replace(/\u0007$/, ''));

                return ['history', page.url, page.title, val, val];
            })
        };

        if (allAnswered) {
            this._allAnsweredCache[usedVal] = res;
            if (results.length) {
                // запрос содержит точку, значит вбивается урл, скорее всего он есть в саджесте
                // уже можно грузить для него данные
                if (val.indexOf('.') !== -1) {
                    vb.requestThumbData(results[0].url);
                }
            }
        }

        callback.call(this, res);
    },

    _saveToCache: function(source, val, data) {
        var cachedData = cache.get('thumbsSuggest') || {},
            valObj = cachedData[val] = cachedData[val] || {};

        var oldData = valObj[source] || [];
        oldData = oldData.concat(data);
        valObj[source] = oldData;
        cache.set('thumbsSuggest', cachedData);
    },

    _getFromCache: function(val) {
        var cachedData = cache.get('thumbsSuggest') || {};

        return cachedData[val] || null;
    },

    // query = yandex.
    // ищем ответ на yandex, yande, yand и тд
    _findWebResponseForPreviousQueries: function(query) {
        var originalQuery = query;

        while (query = query.slice(0, query.length - 1)) {
            var cache = this.cache[query];

            if (!cache)
                continue;

            var web = cache.web;

            if (web && web.url.indexOf(originalQuery) !== -1) {
                return cache.web;
            }
        }

        return null;
    }
});

/* end: ../../blocks-desktop/b-form-input/__dataprovider/_type/b-form-input__dataprovider_type_vb.js */
/* begin: ../../blocks-desktop/b-form-input/_type/b-form-input_type_search.js */
BEM.DOM.decl({block: 'b-form-input', modName: 'type', modVal: 'search'}, {
    onSetMod: {
        js: function() {
            this.bindToDoc('keydown', this._onPress, this);
            this.__base.apply(this, arguments);
        }
    },

    _onPress: function(e) {
        if (this.hasMod('focused', 'yes')) {
            if (e.keyCode == 13) {
                e.stopPropagation();
                e.preventDefault();

                var selected = this
                    ._getPopup()
                    .findBlockInside(
                        {
                            blockName: 'b-autocomplete-item',
                            modName: 'hovered',
                            modVal: 'yes'
                        }
                    );

                var val = this.val();

                if (selected) {
                    selected.navigate();
                } else if (val) {
                    this.findBlockOutside('b-search').submitQuery("enter");
                    this.afterCurrentEvent(function() {
                        this.clear();
                    });
                }
            }
        }
    }

});

/* end: ../../blocks-desktop/b-form-input/_type/b-form-input_type_search.js */
/* begin: ../../blocks-desktop/b-search/b-search.js */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-search', {
    _input: null,

    onSetMod: {
        js: function() {
            var _this = this;

            this._input = this.findBlockInside('b-form-input');
            this.findBlockInside('b-form-button').bindTo('click', function() {
                _this.submitQuery('button');
                _this._input.clear();
            });
            this.bindTo('submit', this._onSubmit, this);
        }
    },

    // TODO проверить нужна ли подписка вообще
    _onSubmit: function(e) {
        return false;
    },

    destruct: function() {
        this._input = null;
        this.__base.apply(this, arguments);
    },

    /**
     * Отправка запроса в серп
     *
     * @statType {enum of "enter", "button"|undefined} statType для отправки статистики. Если не задан, не отправляется
     */
    submitQuery: function(statType, val) {
        val = val || this.findBlockInside('b-form-input').val();

        var queryUrl = this.params.url.replace('{searchTerms}', encodeURIComponent(val));

        if (!(val || '').trim())
            return;

        if (statType === 'enter')
            vb.stat('panel.search.enter');
        else if (statType === 'button')
            vb.stat('panel.search.button');

        window.location.href = queryUrl;

        // включаем драгндроп не сразу, чтобы нельзя было
        // таскать тумбы
        setTimeout(function() {
            page().startDnD();
        }, vb.navigator === 'ie' ? 1000 : 0);
    }
});

})();

/* end: ../../blocks-desktop/b-search/b-search.js */
/* begin: ../../libs/lego/blocks-desktop/b-search/input/b-search__input.js */
BEM.DOM.decl('b-search__input', {

    onSetMod : {

        js : function() {

            Lego.block['b-search__input'].call(this.domElem, this.params);

        }

    }

});


(function($, Lego){

Lego.block['b-search__input'] = function(params){

    var _this = this;
    var _params = $.extend({focus: false, shortcut: false}, params);

    if(_params.focus || _this.data('lego:focused')) {
        if(!_this.data('lego:focused')) {
            var activeNode = document.activeElement;
            (activeNode && 'input textarea'.indexOf(activeNode.tagName.toLowerCase()) > -1) ||
                setTimeout(function() {
                    _this.focus();
                    if(_this[0].createTextRange) { // ставим каретку в конец для opera и ie
                        var range = _this[0].createTextRange(),
                        len = _this.val().length;

                        range.collapse();
                        range.moveStart('character', len);
                        range.moveEnd('character', len);
                        range.select();
                    }
                    _this.data('lego:focused', true);
                }, 0);
        }
        if(!!window.history.length && !$.trim(_this.val())) { // только если есть хистори и пустое поле
            _this.bind('keydown', function(e) {
                if(e.keyCode == 8) { // если первое нажатие Backspace
                    if (!$.trim(_this.val())) return window.history.back();
                }
                _this.unbind('keydown', arguments.callee);
            });
        }
        _this.blur(function() {
            _this.data('lego:focused', false);
        }).focus(function() { //b-suggest делает blur-focus для установки autocomplete=off, это может сломать инициализацию клавиатуры
            _this.data('lego:focused', true);
        });
    }

    if(_params.shortcut) {
        $(document).keydown(function(e) {
            if(!e.ctrlKey || $(e.target).is('input, textarea')) {
                return;
            }

            if(e.keyCode == 38) {
                _this.focus().select();
            }
        });
    }

};

})(jQuery, window.Lego);

/* end: ../../libs/lego/blocks-desktop/b-search/input/b-search__input.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-input/_autocomplete/b-form-input_autocomplete_yes.js */
(function($) {

var HTML = BEM.HTML,
    DOM = BEM.DOM,

    /** {HTMLElement} */
    activeNode;

// LEGO-3098
$(function() {
    $(window).bind('focus', function() {
        activeNode = document.activeElement;
    });
});

DOM.decl({ name : 'b-form-input', modName : 'autocomplete', modVal : 'yes' }, {

    onSetMod : {

        'js' : function() {

            var _this = this;

            _this.params.foot && (_this.foot = _this.params.foot); // упячка!

            _this._preventRequest = true;
            _this._preventPopupShow = false;
            _this._isPopupShown = false;

            _this.__base.apply(_this, arguments);

            // последнее значение, введенное пользователем с клавиатуры
            _this._userVal = _this.val();

            // выключаем браузерный автокомплит
            var focused = _this._focused,
                autoFocused = _this._autoFocus;
            focused && _this.delMod('focused');

            /**
             * Про filter: http://st.yandex-team.ru/ROMOCHKA-75
             */
            _this._input0 = _this.elem('input').filter('input[autocomplete]').attr('autocomplete', 'off')[0];
            _this._preventRequest = false;
            _this._autoFocus = true;
            focused && _this.setMod('focused', 'yes');
            autoFocused || (delete _this._autoFocus);

            _this._items = [];
            _this._curItemIndex = -1;

            _this._doRequest = $.debounce(_this._doRequest, _this.params.debounceDelay);

        },

        'focused' : {

            'yes' : function() {

                this.__base();

                // Не открывать автокомплит по фокусу при наличии параметра `showListOnFocus`
                var onChangeFn = this.params.showListOnFocus && !this._autoFocus ?
                    this._onChange() : this._onChange;
                this.on('change', onChangeFn);

            },

            '' : function() {

                this.__base();
                this
                    .un('change', this._onChange)
                    ._preventHide || this._getPopup().hide();

            }

        }

    },

    onElemSetMod : {

        'popup' : {

            'fixed' : {

                'yes' : function() {
                    this._isPopupShown && this.afterCurrentEvent(function() {
                        this._updatePopupPos();
                    });
                },

                '' : function() {
                    this._isPopupShown && this.afterCurrentEvent(function() {
                        this._updatePopupPos();
                    });
                }

            }

        }

    },

    /**
     * Возвращает dataprovider
     */
    getDataprovider: function() {

        var url = this.params.dataprovider.url;

        return this._dataprovider || (this._dataprovider = BEM.create(
            this.params.dataprovider.name || this.__self.getName() + '__dataprovider',
            $.extend(this.params.dataprovider, {
                url: url,
                callbackCtx : this
            })));

    },

    _onChange : function() {

        /**
         * (LEGO-3098) Не отправлять запрос и не показывать попап
         * при переключении между вкладками
         */
        activeNode === this._input0 ?
            activeNode = null :
            this._preventRequest || this._doRequest();

        return this._onChange;

    },

    _onKeyDown : function(e) {

        var self = this,
            isArrow = e.keyCode == 38 || e.keyCode == 40;

        if(isArrow && !e.shiftKey) {

            e.preventDefault();

            // LEGO-8399
            if(!self._isPopupShown) {

                self._getHiddenPopup();
            }
            else {

                var len = self._items.length,
                    out = false;

                if(len) {

                    var direction = e.keyCode - 39, // пользуемся особенностями кодов клавиш "вверх"/"вниз" ;-)
                        index = self._curItemIndex,
                        i = 0;

                    do {
                        // если выбор перемещается с крайнего элемента вовне списка,
                        // то ставим фокус на инпут и возвращаем в него пользовательское значение
                        out = ((index == 0 && direction == -1) || (index + direction >= len)) && self._onLeaveItem(self._items[index], true);

                        index += direction;
                        index = index < 0? len - 1 : index >= len? 0 : index;
                    } while(!out && self._onEnterItem(self._items[index], true) === false && ++i < len);
                }
            }
        }
    },

    _onKeyPress : function(e) {

        if(e.keyCode == 13) {
            if(this._curItemIndex > -1 && this._isCurItemEnteredByKeyboard) {
                e.preventDefault();
                this._onSelectItem(this._items[this._curItemIndex], true);
            }

            this._getPopup().hide();
        }

    },

    //Метод показывает попап по клику, если инпут в фокусе
    _getHiddenPopup : function() {

        this._preventRequest || this._focused && !this._isPopupShown && this._doRequest()

    },

    /**
     * Ленивое получение попапа
     * @returns {BEM} блок попапа
     */
    _getPopup : function() {

        var _this = this;
        if(!_this._popup) {
            var keyDownEvent = ($.browser.opera && $.browser.version < 12.10) ? 'keypress' : 'keydown',
                block = _this.__self.getName(),
                content = [{ elem : 'items', tag : 'ul', mix : [{ block : block, elem : 'popup-items' }]},
                    { block: 'b-form-input', elem: 'shadow', tag: 'i' }
                ];

            _this._hasPopupFade() && content.push({ block : block, elem : 'fade' });

            _this._popup = $(HTML.build({
                    block : 'i-popup',
                    mix : [
                        {
                            block : block,
                            elem : 'popup',
                            mods : _this.params.popupMods,
                            js : { uniqId: _this._uniqId }
                        }
                    ],
                    content : content
                })).bem('i-popup')
                    .on({
                        'show' : function() {
                            _this
                                .trigger('popup-shown')
                                .bindTo('keypress', _this._onKeyPress)
                                .bindToWin('resize', _this._updatePopupPos)
                                .unbindFrom('input', 'click')
                                ._isPopupShown = true;
                        },
                        'outside-click' : function(e, data) {
                            _this.containsDomElem($(data.domEvent.target)) && e.preventDefault();
                        },
                        'hide' : function() {
                            _this
                                .trigger('popup-hidden')
                                .unbindFrom('keypress')
                                .unbindFromWin('resize')
                                .bindTo('input', 'click', _this._getHiddenPopup)
                                ._curItemIndex = -1;
                            _this._isPopupShown = false;
                        }
                    });

            // LEGO-8399
            _this.bindTo(keyDownEvent, _this._onKeyDown);

            // при первом создании попапа подписываемся на live-события его элементов
            $.each({
                    mouseover : _this._onEnterItem,
                    mouseout  : _this._onLeaveItem,
                    mousedown : _this._onSelectItem,
                    mouseup   : _this._onItemMouseUp
                }, function(e, fn) {
                    BEM.blocks['b-autocomplete-item'].on(_this._popup.domElem, e, function(e) {
                        fn.call(_this, e.block);
                    });
                });

            DOM.init(_this._popup.domElem);
        }

        return _this._popup;

    },

    getPopup : function() {

        return this._getPopup();

    },

    _hasPopupFade : function() {

        return (this.params.popupMods || {}).fade == 'yes';

    },

    _updatePopupPos : function() {
        var box = this.elem('box');
        var css;
        var root = $('body').bem('b-page');

        if (this.hasMod('type', 'search')) {
            css = {
                left: 0,
                top: $('.b-decor').outerHeight()
            };
            $('.b-autocomplete-item').css('paddingLeft', root.getSuggestMarginLeft());
            $('.alt-search').css('marginLeft', root.getSuggestMarginLeft());
        } else {
            css = box.offset();
            css.top += box.outerHeight();
        }

        this.hasMod(this.elem('popup'), 'fixed') && (css.top -= DOM.win.scrollTop());
        this._hasPopupFade() && (css.width = box.outerWidth());

        this._preventPopupShow || this._getPopup().show(css);

    },

    _onEnterItem : function(item, byKeyboard) {

        if(item.hasMod('enterable', 'no')) return false;

        var items = this._items,
            index = this._curItemIndex;

        index > -1 && items[index].delMod('hovered');
        index = this._getItemIndex(item);
        index > -1 && items[index].setMod('hovered', 'yes');

        this._curItemIndex = index;
        this._isCurItemEnteredByKeyboard = !!byKeyboard;

        if(byKeyboard && this.params.updateOnEnter) {
            this._preventRequest = true;
            this
                .val(
                    item.enter() !== false? item.val() : this._userVal,
                    { source : 'autocomplete', itemIndex: this._curItemIndex })
                .del('_preventRequest');
        }

    },

    _onLeaveItem : function(item, byKeyboard) {

        var index = this._curItemIndex;
        if(index > -1 && index == this._getItemIndex(item)) {
            this._items[index].delMod('hovered');
            this._curItemIndex = -1;
        }

        byKeyboard && this.val(this._userVal);

        return true;

    },

    _onSelectItem : function(item, byKeyboard) {

        var selectResult = item.select(byKeyboard || false),
            needUpdate = (typeof selectResult == 'object')
                             ? selectResult.needUpdate
                             : selectResult !== false,
            needEvent = (typeof selectResult == 'object') && selectResult.needEvent;

        this._preventRequest = true;
        this._preventBlur = !byKeyboard; // только для мыши

        needUpdate && this.val(this._userVal = item.val(), {
            source : 'autocomplete',
            itemIndex: this._curItemIndex
        });

        if(byKeyboard) {
            this.del('_preventRequest');
        } else {
            needUpdate || (this._preventHide = true);
            this.afterCurrentEvent(function() {
                this
                    .setMod('focused', 'yes')
                    .del('_preventRequest', '_preventHide');
            });
        }

        (needUpdate || needEvent) && this.trigger('select', { item: item, byKeyboard: byKeyboard });

    },

    _onItemMouseUp : function() {

        this
            .del('_preventBlur')
            ._getPopup().hide();

    },

    _getItemIndex : function(item) {

        return $.inArray(item, this._items);

    },

    _doRequest : function() {

        var _this = this;
        _this.enablePopup();
        _this._userVal = _this.val();
        _this
            .trigger('data-requested')
            .getDataprovider().get(
                _this.val(),
                function(data) {
                    // FIXME vb посмотреть, что здесь делается с dataItems
                    _this.trigger('data-received', data);

                    var popup = _this._getPopup(),
                        dataItems = data.items || data;

                    _this.foot && dataItems.length && ($.inArray(_this.foot, dataItems) == -1) && dataItems.push(_this.foot);

                    if (dataItems.length && _this._userVal) {
                        _this._curItemIndex = -1;
                        DOM.update(popup.elem('items'), _this._buildItemsHtml(dataItems), function() {
                            _this._updatePopupPos();
                            _this._items = popup.findBlocksInside('b-autocomplete-item');
                            _this.trigger('update-items');
                        });
                    } else {
                        popup.hide();
                    }
                });

    },

    _buildItemsHtml : function(data) {

        var _this = this;

        return HTML.build($.map(data, function(data, i) {

            var autocompleteItem = {
                    block : 'b-autocomplete-item',
                    data  : data,
                    mods  : { type : $.isArray(data)? data[0] : 'text', index: i.toString() },
                    suggestVersion: _this.params.dataprovider.version
                },
                prefs;

            ($.isArray(data)) && $.isPlainObject(prefs = data.concat().pop()) && $.extend(autocompleteItem, prefs);

            return autocompleteItem;

        }));

    },

    setFoot : function(data) {

        return this.foot = data;

    },

    getDefaultParams : function() {

        return $.extend(this.__base(), {
            updateOnEnter : true,
            debounceDelay : 50,
            showListOnFocus: true
        });

    },

    enablePopup : function() {

        this._preventPopupShow = false;

    },

    disablePopup : function() {

        this._preventPopupShow = true;

    }

});

})(jQuery);

/* end: ../../libs/lego/blocks-desktop/b-form-input/_autocomplete/b-form-input_autocomplete_yes.js */
/* begin: ../../blocks-desktop/b-form-input/_autocomplete/b-form-input_autocomplete_yes.js */
(function(undefined) {

    /**
    * @const
    * @type {Number} px
    */
    var SUGGESTS_RIGHT_PADDING = 28;

    BEM.DOM.decl({name: 'b-form-input', modName: 'autocomplete', modVal: 'yes'}, {

        onSetMod: {
            js: function() {
                var _this = this,
                    type = this.getMod('type');

                this.__base.apply(this, arguments);

                if (this.getMod('autoclosable') === 'no') {
                    this.getPopup().setMod('autoclosable', 'no');
                }

                this.getPopup().setMod('type', type || '');

                // FIXME перенести в лего
                if (this._input0.oninput === null) {
                    this.elem('input').on('input', function() {
                        _this._doRequest();
                    });
                }

                BEM.blocks['b-autocomplete-item'].on('mouseover', function(e) {
                    if (e.block.hasMod('type', 'history')) {
                        e.block.changeEditingThumb();
                    }
                });

                BEM.blocks['b-autocomplete-item'].on('mouseout', function(e) {
                    if (e.block.hasMod('type', 'history')) {
                        e.block.resetEditingThumb();
                    }
                });

                this.on('popup-shown', function() {
                    this.setMod('popupvisible', 'yes');
                });

                this.on('popup-hidden', function() {
                    this.delMod('popupvisible');
                });
            }
        },
        
        _searchBoxCusto: function() {
            return page().getMod('searchbox') == 'custo';
        },

        _updatePopupPos: function() {
            var box = this.elem('box');
            var css;
            var root = $('body').bem('b-page');
            var useCusto = this._searchBoxCusto();
            var isSearch = this.hasMod('type', 'search');

            if (!useCusto && isSearch) {
                css = {
                    left: 0,
                    top: $('.b-decor').outerHeight()
                };
                $('.b-autocomplete-item').css('paddingLeft', root.getSuggestMarginLeft());
                $('.alt-search').css('marginLeft', root.getSuggestMarginLeft());
            } else {
                css = box.offset();
                css.top += box.outerHeight();
            }

            this.hasMod(this.elem('popup'), 'fixed') && (css.top -= DOM.win.scrollTop());
            if (this._hasPopupFade() || (isSearch && useCusto)) {
                css.width = box.outerWidth();
            } else {
                css.width = '';
            }

            this._preventPopupShow || this._getPopup().show(css);

            if (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9) {
                return;
            }

            if (isSearch && useCusto) {
                return;
            }

            var popupa = this._getPopup(),
                maxWidth = $('.b-content').width() - popupa.domElem.offset().left - SUGGESTS_RIGHT_PADDING,
                items = popupa.findBlocksInside('b-autocomplete-item');

            items.forEach(function(item) {
                item.domElem.css('maxWidth', maxWidth);
            });
        },

        _onKeyPress: function(e) {
            // input_type_search обрабатываем по своему
            // см. input_type_search.js
            if (!this.hasMod('type', 'search')) {
                this._onKeyPress = this.__base.bind(this);
                this.__base.apply(this, arguments);
            } else {
                this._onKeyPress = function() {};
            }
        },

        _onSelectItem: function(item, byKeyboard) {
            if (this.getMod('type') !== 'search') {
                this.__base.apply(this, arguments);
            }

            if (this.getMod('type') === 'url') {
                var index = parseInt(item.getMod('index'), 10) + 1;
                page().findBlockInside('b-setting').submitThumb('thumb.adddone.suggest.' + index,{
                    url: item.params.url,
                    title: item.params.title,
                    pinned: true
                });
            }
        }

    });
})();

/* end: ../../blocks-desktop/b-form-input/_autocomplete/b-form-input_autocomplete_yes.js */
/* begin: ../../libs/lego/blocks-common/i-common/string/i-common__string.js */
BEM.decl('i-common__string', {}, {

    /**
     * Обрезать входную строку `str` до `maxLength` символов.
     * Порт функции `lego:clever-substring()` из i-common.xsl.
     *
     * @param {String} str строка на вход
     * @param {Nubmer} maxLength максимальная длина в символах
     * @param {Number} maxLengthRelative погрешность при обрезе сверх макс. длины
     *
     * @return {String}
     */
    cleverSubstring : (function() {

        var ellipsisChar = '…';

        return function(str, maxLength, maxLengthRelative) {
            return (str.length > maxLength + maxLengthRelative) ? str.substring(0, maxLength - 1) + ellipsisChar : str;
        }

    })(),


    /**
     * Экранирование специальных символов HTML
     *
     * @param {String} string экранируемая строка
     *
     * @return {String}
     */
    escapeHTML : (function() {

        var map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': '&quot;',
                "'": '&#39;'
            },
            f = function(t) { return map[t] || t };

        return function(string) {
            return String(string).replace(/&(?!\w+;)|[<>"']/g, function(s) {
                return map[s] || s
            });
        }

    })(),

    /**
     * Экранирование специальных символов регулярных выражений в строке
     *
     * @param {String} string
     *
     * @return {String}
     */
    escapeRegExp : function(string) {

        return string.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

    },

    /**
     * Подсветка частей строки по заданным позициям.
     * Изначально подоразумевается для использования в поисквых подсказках.
     *
     * @param {String} text Исходная экранированная строка.
     * @param {Array} ranges Массив пар начала-конца диапазонов выделения.
     *
     * @return {String|Array} Массив строк и бэм-сущностей, предназначающийся для вставки в bemjson, либо исходная строка.
     */
    highlight  : function(text, ranges) {

        if (!$.isArray(ranges)) return text;

        var emphasized = [],
            cursor = 0, index,
            _ranges = ranges.sort(function(a, b) {
                return a[0] - b[0];
            }),
            entities = [],
            encodeChar = '?',
            hasEncode = ~text.indexOf(encodeChar),
            // заменяем экранированные символы на знаки вопроса
            decodeEntity = function() {
                var symbol, entityCode = /\&#\d+;/gi;

                while((symbol = entityCode.exec(text))) {
                    entities.push(symbol[0]);
                    text = text.replace(symbol[0], encodeChar);
                }

            },
            // заменяем знаки вопроса обратно на сохраненные символы
            encodeEntity = function(decodeText) {
                if (hasEncode) return decodeText;

                while (~decodeText.indexOf(encodeChar) && entities.length) {
                    decodeText = decodeText.replace(encodeChar, entities[0]);
                    entities.shift();
                }
                return decodeText;
            };

        !hasEncode && decodeEntity();

        _ranges.forEach(function(range) {
            index = (cursor > range[0]) ? cursor : range[0];
            emphasized.push({
                tag: 'span',
                elem: 'span',
                content: encodeEntity(text.slice(cursor, index))
            });
            emphasized.push({
                tag: 'em',
                elem: 'em',
                content: encodeEntity(text.slice(index, cursor = range[1]))
            });
        }, this);

        emphasized.push({
            tag: 'span',
            elem: 'span',
            content: encodeEntity(text.slice(cursor))
        });

        return emphasized;

    }

});

/* end: ../../libs/lego/blocks-common/i-common/string/i-common__string.js */
/* begin: ../../blocks-desktop/i-common/__string/i-common__string.js */
/** @requires BEM */
/** @requires BEM */

(function(undefined) {

BEM.decl('i-common__string', {}, {

    /**
     * Обрезать входную строку `str` до `maxLength` символов.
     * Порт функции `lego:clever-substring()` из i-common.xsl.
     *
     * @param {String} str строка на вход
     * @param {Nubmer} maxLength максимальная длина в символах
     * @param {Number} maxLengthRelative погрешность при обрезе сверх макс. длины
     *
     * @return {String}
     */
    cleverSubstring : (function() {

        var ellipsisChar = '&#x2026;'; // … HORIZONTAL ELLIPSIS  Unicode: U+2026, UTF-8: E2 80 A6

        return function(str, maxLength, maxLengthRelative) {
            return (str.length > maxLength + maxLengthRelative) ? str.substring(0, maxLength - 1) + ellipsisChar : str;
        };


    })(),
    unescapeHTML : (function() {
            var map = {
                '&amp;': '&',
                '&nbsp;': ' ',
                '&lt;': '<',
                '&gt;': '>',
                '&quot;': '"',
                '&apos;': "'",
                '&#39;': "'"
            };
            var f = function(t) { return map[t] || t; };
            var rx = /&(amp|nbsp|lt|gt|quot|apos|#39);/g;

            return function(string) {
                return String(string).replace(rx, f);
            };

        })(),
    escapeHTML : (function() {
            var map = {
                '&': '&amp;',
                '  ': '&nbsp; ',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            var f = function(t) { return map[t] || t; };
            var rx = /&|  |<|>|"|'/g;

            return function(string) {
                return String(string).replace(rx, f);
            };

        })()
});

})();

/* end: ../../blocks-desktop/i-common/__string/i-common__string.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/b-autocomplete-item.js */
BEM.DOM.decl('b-autocomplete-item', {

    /**
     * Возвращает значение, которое надо вставить в input.
     * @returns {String}
     */
    val : function() {
        return this.params.val || this.elem('text').text() || this.domElem.text();
    },

    /**
     * Действие на наведение на пункт клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит подставлять значение пункта не надо
     */
    enter : function() {},

    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит пункт сам сделал все необходимые действия
     */
    select : function(byKeyboard) {}

}, {

    live : function() {

        this.liveBindTo('mouseover mouseout mousedown mouseup', function(e) {
            if (/(down|up)/.test(e.type) && e.which !== 1)
                return false;

            this.trigger(e.type);
        });

    }

});

BEM.HTML.decl('b-autocomplete-item', {

    onBlock : function(ctx) {

        var data = ctx.param('data'),
            text = BEM.blocks['i-common__string'].escapeHTML($.isArray(data) ? data[1] : data);

        $.isArray(ctx.param('search_cgi')) && ctx.js({ cgi: ctx.param('search_cgi') });

        ctx
            .tag('li')
            .mod('pers', ctx.param('pers') ? 'yes' : false)
            .content(BEM.blocks['i-common__string'].highlight(text, ctx.param('hl')))
            .js(true);

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/b-autocomplete-item.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/b-autocomplete-item.js */
BEM.HTML.decl('b-autocomplete-item', {

    onBlock: function(ctx) {

        var data = ctx.param('data'),
            hl = typeof data[2] === 'function' ? data[2] : function(s){
                return s;
            },
            text = BEM.blocks['i-common__string'].escapeHTML($.isArray(data) ? data[1] : data);

        $.isArray(ctx.param('search_cgi')) && ctx.js({cgi: ctx.param('search_cgi')});
        var useCusto = (page().getMod('searchbox') == 'custo');
        var isSearch = (ctx.mod('type') !== 'history');

        ctx
            .tag('li')
            .attr('style', isSearch && !useCusto ? ('padding-left: ' + page().getSuggestMarginLeft()) : '')
            .mod('pers', ctx.param('pers') ? 'yes' : false)
            .content(hl(text))
            .js(true);

    }

});

/* end: ../../blocks-desktop/b-autocomplete-item/b-autocomplete-item.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type.js */
var types = [
    'text',
    'fact',
    'lingvo',
    'maps',
    'market',
    'nav',
    'promo',
    'traffic',
    'weather'
];

types.forEach(function(modVal) {
    var declObject = {
        onSetMod: {
            js: function() {
                this._formInput = $('.b-form-input_type_search').bem('b-form-input');
                this._headSearch = this._formInput.findBlockOutside('b-head-search');
                this.bindTo('mousedown', function(e) {
                    // startDnD есть. в b-search.js
                    page().stopDnD();
                    if (/MSIE\s+8/.test(navigator.userAgent)) {
                        this.navigate();
                    }
                    if (e.which != 3) {
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        } else {
                            e.cancelBubble = true;
                        }
                        return false;
                    }
                });
                this.bindTo('mouseup', function(e) {
                    if (/MSIE\s+8/.test(navigator.userAgent)) {
                        return false;
                    }
                    if (e.which != 3) {
                        this.navigate();
                    }
                });
            }
        },

        navigate: function() {
            var thisUrl = this.params.url;

            vb.stat('panel.search.suggest');
            if (this.hasMod('type', 'nav')) {
                vb.navigateUrlWithReferer(thisUrl, 1);
            } else if (thisUrl) {
                window.location.href = thisUrl;
            } else {
                this._headSearch.findBlockInside('b-search').submitQuery(null, this.val());
            }

            this._formInput.clear();
            // VB-2624
            if (vb.navigator === 'ie') {
                var headSearch = this._headSearch.domElem.parent(),
                    blocks = require('bem').blocks,
                    BEMHTML = require('bemhtml');

                this.afterCurrentEvent(function() {
                    BEM.DOM.update(headSearch, BEMHTML.apply(blocks['b-head-search'](cache.get('settings'))));
                });
            }
        },

        destruct: function() {
            this._formInput = null;
            this.__base.apply(this, arguments);
        }

    };

    BEM.DOM.decl({block: 'b-autocomplete-item', modName: 'type', modVal: modVal}, declObject);
});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_history.js */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'history'}, {
    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true|Object} Если возвращается false, значит пункт сам сделал все необходимые действия
     */
    select: function(byKeyboard) {
        var self = this,
            parseURL = require('parseURL'),
            bSetting = this.findBlockOutside('b-page').findBlockInside('b-setting');

        var input = bSetting.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'url'});
        input.setMod('block-request', 'yes');
        return {
            needUpdate: true
        };
    },

    val: function () {
        return this.params.url;
    },

    enter: function() {
        this.__base.apply(this, arguments);
        this.changeEditingThumb();
    },

    changeEditingThumb: function() {
        var editingThumb = cache.get('editingThumb') || {},
            params = this.params,
            cachedThumbData = (cache.get('historyThumbs') || {})[params.url];

        editingThumb.data = $.extend(cachedThumbData || {}, {
            url: params.url,
            title: params.title
        });

        cache.set('editingThumb', editingThumb);

        if (!cachedThumbData) {
            this.afterCurrentEvent(function() {
                vb.requestThumbData(params.url);
            });
        }
    },

    resetEditingThumb: function() {
        var editingThumb = cache.get('editingThumb') || {};

        delete editingThumb.data;

        cache.set('editingThumb', editingThumb);
    }
});

function makeBold (str) {
    return '<b>' + str + '</b>';
}

// @link http://deer.org.ua/2013/08/05/1/
function decodeURIComponentSafe(str) {
    var out = '',
        arr,
        x;

    arr = str.split(/(%(?:D0|D1)%.{2})/);

    for (var i = 0; i < arr.length; i++) {
        try {
            x = decodeURIComponent(arr[i]);
        } catch (e) {
            x = arr[i];
        }

        out += x;
    }

    return out;
}

BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'history'}, {

    onBlock: function(ctx) {
        var BEM = require('bem').BEM,
            Lib = require('lib'),
            data = ctx.param('data').slice(1),
            originalURL = data[0],
            url,
            parseURL = require('parseURL'),
            stringHelper = BEM.blocks['i-common__string'],
            clearTitle = stringHelper.unescapeHTML(data[1]),
            searchingStr = new RegExp(Lib.escapeRegExpSymbols(data[2]), 'i');

        var parsedURL = parseURL(originalURL);

        // VBCHROME-324
        if (parsedURL.host) {
            url = BEM.blocks['i-common__string'].escapeHTML(
                Lib.getUnicodedURL(parsedURL.host)
            );

            url += parsedURL.path === '/' ? '' : decodeURIComponentSafe(parsedURL.path);
            url += decodeURIComponent(parsedURL.query);

            if (parsedURL.hash) {
                url += '#' + parsedURL.hash;
            }
        } else {
            originalURL = url = 'http://' + originalURL;
        }

        url = url.replace(/^\w+:\/\//, ''),

        url = BEM.blocks['i-common__string'].cleverSubstring(
            url.substr(0, url.length - 5),
            Lib.getHistorySuggestMaxLength(),
            0
        ) + url.substr(url.length - 5);
        url = url
            .replace(/^www\./, '')
            .replace(searchingStr, makeBold);

        clearTitle = clearTitle.replace(searchingStr, makeBold);

        ctx
            .content([
                {
                    tag: 'span',
                    elem: 'text',
                    content: BEM.blocks['i-common__string'].highlight(url, ctx.param('hl'))
                },
                {
                    tag: 'span',
                    elem: 'fact',
                    content: [' ', clearTitle]
                }
            ])
            .js({
                url: originalURL,
                title: data[1]
            });
    }

});

})();

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_history.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_nav.js */
BEM.DOM.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'nav'}, {
    val: function() {
        return this.findElem('link-url').text();
    }
});

BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'nav'}, {

    onBlock: function(ctx) {

        var data = ctx.param('data'),
            urlData = data[3],
            hl = data[5],
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            url = (urlData.match(/^\w[\w\-]*:\/\//g) ? '' : 'http://') + urlData;

        ctx
            .js({url: url})
            .content({
                elem: 'vb-link',
                title: escapeHTML(data[2]),
                description: hl(escapeHTML(data[1]))
            });

    },

    onElem: {
        'vb-link': function(ctx) {
            ctx
                .tag('span')
                .content([
                {
                    elem: 'link-url',
                    tag: 'span',
                    content: ctx.param('title')
                },
                {
                    elem: 'link-info',
                    tag: 'span',
                    content: ['&nbsp;&mdash; '].concat(ctx.param('description'))
                }
            ]);
        }
    }
});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_nav.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_market.js */
BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'market'}, {

    onBlock: function(ctx) {

        var data = ctx.param('data').slice(1),
            hl = data[4],
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            urlData = data[3],
            url = urlData && (urlData.match(/^\w[\w\-]*:\/\//g) ? '' : 'http://') + urlData;

        url && ctx.js({url: url});

        ctx.content([
            data[0] && {
                elem: 'vb-link',
                title: escapeHTML(data[0])
            },
            data[1] && {
                tag: 'span',
                elem: 'text',
                content: hl(escapeHTML(data[1]))
            },
            data[2] && {
                elem: 'link-info',
                tag: 'span',
                content: '&nbsp;&mdash; '
            },
            data[2] && {
                tag: 'span',
                elem: 'description',
                content: escapeHTML(data[2])
            }
        ]);

    },

    onElem: {
        'vb-link': function(ctx) {
            ctx
                .tag('span')
                .content([
                {
                    elem: 'link-url',
                    tag: 'span',
                    content: ctx.param('title')
                },
                {
                    elem: 'link-info',
                    tag: 'span',
                    content: ['&nbsp;&mdash; '].concat(ctx.param('description'))
                }
            ]);
        }
    }

});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_market.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'lingvo' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data')[1];
        
        ctx.content([
            { tag : 'span', elem : 'text', content : data.text },
            { tag : 'span', elem : 'translation', content : [' — ', data.translation] }
        ]);

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js */
BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'lingvo'}, {

    onBlock: function(ctx) {

        var escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            data = ctx.param('data').slice(1),
            urlData = data[3],
            hl = data[4],
            url = urlData && (urlData.match(/^\w[\w\-]*:\/\//g) ? '' : 'http://') + urlData;

        url && ctx.js({url: url});
        ctx.content([
            data[0] && {
                elem: 'vb-link',
                title: escapeHTML(data[0])
            },
            data[1] && {
                tag: 'span',
                elem: 'text',
                content:  hl(BEM.blocks['i-common__string'].escapeHTML(data[1]))
            },
            data[2] && {
                tag: 'span',
                elem: 'translation',
                content: [' — ', data[2]]
            }
        ]);

    },

    onElem: {
        'vb-link': function(ctx) {
            ctx
                .tag('span')
                .content([
                {
                    elem: 'link-url',
                    tag: 'span',
                    content: ctx.param('title')
                },
                {
                    elem: 'link-info',
                    tag: 'span',
                    content: ['&nbsp;&mdash; '].concat(ctx.param('description'))
                }
            ]);
        }
    }

});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_lingvo.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_maps.js */
BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'maps'}, {

    onBlock: function(ctx) {

        var data = ctx.param('data').slice(1),
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            hl = data[4],
            urlData = data[3],
            url = urlData && (urlData.match(/^\w[\w\-]*:\/\//g) ? '' : 'http://') + urlData;

        url && ctx.js({url: url});
        ctx.content([
            data[0] && {
                elem: 'vb-link',
                title: escapeHTML(data[0])
            },
            data[1] && {
                tag: 'span',
                elem: 'text',
                content: hl(escapeHTML(data[1]))
            },
            data[2] && {
                elem: 'link-info',
                tag: 'span',
                content: ['&nbsp;&mdash; ']
            },
            data[2] && {
                tag: 'span',
                elem: 'description',
                content: hl(escapeHTML(data[2]))
            }
        ]);

    },

    onElem: {
        'vb-link': function(ctx) {
            ctx
                .tag('span')
                .content([
                {
                    elem: 'link-url',
                    tag: 'span',
                    content: ctx.param('title')
                },
                {
                    elem: 'link-info',
                    tag: 'span',
                    content: ['&nbsp;&mdash; '].concat(ctx.param('description'))
                }
            ]);
        }
    }

});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_maps.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_promo.js */
BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'promo'}, {

    onBlock: function(ctx) {

        var data = ctx.param('data').slice(1),
            hl = data[3];

        ctx.content([
            data[0] && {
                tag: 'span',
                mods: {
                    color: 'black'
                },
                elem: 'text',
                content: hl(data[0])
            },
            !data[1] && {
                tag: 'span',
                elem: 'devider',
                content: ' '
            },
            data[2] && {
                tag: 'span',
                elem: 'text',
                mods: {
                    color: 'gray'
                },
                content: hl(data[2])
            },
            data[1] && {
                tag: 'span',
                elem: 'devider',
                content: ' — '
            },
            data[1] && {
                tag: 'span',
                elem: 'engine',
                content: BEM.blocks['i-common__string'].escapeHTML(data[1])
            }
        ]);

    }

});

BEM.DOM.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'promo'}, {
    val: function() {
        return this.findElem('text').eq(0).text();
    }
});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_promo.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_hl.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'hl' }, {

    onBlock : function(ctx) {

        ctx.content($.map(ctx.param('data').slice(1), function(chunk) {
            return $.isArray(chunk)?
                { tag : 'span', elem : 'highlight', content : chunk[0] } :
                chunk;
        }));

    }

});


/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_hl.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_fact.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'fact' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1);

        ctx.content([
            { tag : 'span', elem : 'text', content : BEM.blocks['i-common__string'].highlight(data[0], ctx.param('hl')) },
            { tag : 'span', elem : 'fact', content : [' — ', BEM.blocks['i-common__string'].escapeHTML(data[1])] }
        ]);

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_fact.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_fact.js */
BEM.DOM.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'fact'}, {
    val: function() {
        return this.findElem('text').eq(0).text();
    }
});

BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'fact'}, {

    onBlock: function(ctx) {
        var data = ctx.param('data').slice(1),
            hl = data[3];

        ctx.content([
            {
                tag: 'span',
                elem: 'text',
                content: BEM.blocks['i-common__string'].escapeHTML(data[0])
            },
            {
                tag: 'span',
                elem: 'fact',
                content: [
                    ' — ',
                    hl(BEM.blocks['i-common__string'].escapeHTML(data[1]))
                ]
            },
            data[2] && {
                tag: 'span',
                elem: 'text',
                mods: {
                    promo: 'yes'
                },
                content: [
                    ' — ',
                    BEM.blocks['i-common__string'].escapeHTML(data[2])
                ]
            }

        ]);

    }
});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_fact.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_nah.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'nah' }, {
    onBlock : function(ctx) {

        ctx.content(ctx.param('data')[1])

    }
});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_nah.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_href.js */
BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'href' }, {

    url : function() {
        
        return this.findBlockInside('b-link').domElem.attr('href');

    },

    enter : function() {

        return false;

    },

    /**
     * Действие на выбор пункта
     * @param {Boolean} [byKeyboard=false] выбор осуществлен клавиатурой
     * @returns {Boolean=true} Если возвращается false, значит пункт сам сделал все необходимые действия
     */
    select : function(byKeyboard) {
        // открываем ссылку только когда выбрали с помощью клавиатуры, если выбрали мышкой, то сработает обычная ссылка
//        byKeyboard && $('<form style="display:none" method="get" action="' + this.url() + '" />')
//            .appendTo('body')
//            .submit()
//            .remove();
        
        byKeyboard && (location.href = this.url());

        return false;

    }

});

BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'href' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1);

        ctx.content(
            { block: 'b-link', content : data[0], url: data[1] }
        );

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_href.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_weather.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'weather' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1),
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML;

        ctx.content([
            { tag: 'span', elem: 'text', content: escapeHTML(data[0]) },
            {
                tag: 'i', elem: 'icon', mods: {
                    weather: data[2]
                                 .replace('-', 'minus-')
                                 .replace('+', 'plus-')
                                 .replace(/_/g, '-')
                }
            },
            { tag: 'span', elem: 'value', content: escapeHTML(data[1].replace('-', '&ndash;')) }
        ]);

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_weather.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_weather.js */
BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'weather'}, {

    onBlock: function(ctx) {

        // ctx.param('data') == ['weather', 'weather.yandex.ru', 'Погода в москве', '+100500', 'bl']
        var data = ctx.param('data').slice(1),
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            urlData = data[4],
            hl = data[5],
            url = urlData && (urlData.match(/^\w[\w\-]*:\/\//g) ? '' : 'http://') + urlData;

        url && ctx.js({url: url});
        ctx.content([
            {
                elem: 'vb-link',
                title: escapeHTML(data[0])
            },
            {
                tag: 'span',
                elem: 'text', content: hl(escapeHTML(data[1]))
            },
            {
                tag: 'i',
                elem: 'icon',
                mods: {
                    weather: data[3]
                        .replace('-', 'minus-')
                        .replace('+', 'plus-')
                        .replace(/_/g, '-')
                }
            },
            {
                tag: 'span',
                elem: 'value',
                content: hl(escapeHTML(data[2].replace('-', '&ndash;')))
            }
        ]);

    },

    onElem: {
        'vb-link': function(ctx) {
            ctx
                .tag('span')
                .content([
                {
                    elem: 'link-url',
                    tag: 'span',
                    content: ctx.param('title')
                },
                {
                    elem: 'link-info',
                    tag: 'span',
                    content: ['&nbsp;&mdash; '].concat(ctx.param('description'))
                }
            ]);
        }
    }
});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_weather.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_traffic.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'traffic' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1),
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML;

        ctx.content([
            { tag: 'span', elem: 'text', content: escapeHTML(data[0]) },
            { tag: 'i', elem: 'icon', mods: { traffic: data[2] } },
            { tag: 'span', elem: 'value', content: escapeHTML(data[1]) }
        ]);

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_traffic.js */
/* begin: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_traffic.js */
BEM.HTML.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'traffic'}, {

    onBlock: function(ctx) {

        var data = ctx.param('data').slice(1),
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            urlData = data[4],
            hl = data[5],
            url = urlData && (urlData.match(/^\w[\w\-]*:\/\//g) ? '' : 'http://') + urlData;

        ctx.js({url: url});
        ctx.content([
            {
                elem: 'vb-link',
                title: escapeHTML(data[0])
            },
            {
                tag: 'span',
                elem: 'text', content: hl(escapeHTML(data[1]))
            },
            {
                tag: 'i',
                elem: 'icon',
                mods: {
                    traffic: data[3]
                }
            },
            {
                tag: 'span',
                elem: 'text', content: hl(escapeHTML(data[2]))
            }
        ]);

    },

    onElem: {
        'vb-link': function(ctx) {
            ctx
                .tag('span')
                .content([
                {
                    elem: 'link-url',
                    tag: 'span',
                    content: ctx.param('title')
                },
                {
                    elem: 'link-info',
                    tag: 'span',
                    content: ['&nbsp;&mdash; '].concat(ctx.param('description'))
                }
            ]);
        }
    }

});

BEM.DOM.decl({block: 'b-autocomplete-item', modName: 'type', modVal: 'traffic'}, {
    val: function() {
        return this.findElem('text').eq(0).text();
    }
});

/* end: ../../blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_traffic.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_foot.js */
BEM.DOM.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'foot' }, {

    select : function() {
        return false;
    }

});

BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'foot' }, {

    onBlock : function(ctx) {

        ctx
            .mod('enterable', 'no')
            .content($.map(ctx.param('data').slice(1), function(chunk) {
                return $.isArray(chunk)?
                    { tag : 'span', elem : 'foot', content : chunk[0] } :
                    chunk;
            }));

    }

});


/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_foot.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/nav/b-autocomplete-item__nav.js */
BEM.HTML.decl('b-autocomplete-item', {

    onElem : {

        'nav' : function(ctx) {

            var getUrl = BEM.blocks['b-autocomplete-item'].getUrl;

            ctx
                .tag('a')
                .attrs({ href: getUrl(ctx.param('url')), target: '_blank' })
                .content(ctx.content);

        }

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/nav/b-autocomplete-item__nav.js */
/* begin: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_icon.js */
BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'icon' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data').slice(1),
            text = data[0] || '',
            info = data[1] || {},
            escapeHTML = BEM.blocks['i-common__string'].escapeHTML,
            getUrl = BEM.blocks['b-autocomplete-item'].getUrl;

        // Если иконки нет
        if(!info.icon) return;

        var icons = {};

        // Если иконок несколько
        if(Array.isArray(info.icon[0])) {
            info.icon.forEach(function(icon) {
                icons[icon[0]] = icon[1];
            });
        } else { // Иначе иконка одна
            icons[info.icon[0]] = info.icon[1];
        }

        var svg = icons['svg'] ? 'background-image:none,url(' + icons['svg'] + ')' : '',
            png = icons['png'] ? 'background-image:url(' + icons['png'] + ');' : '';

        var content = [
            { tag: 'span', elem: 'text', content: escapeHTML(text) },
            {
                tag: 'i', elem: 'icon', attrs: {
                    style: png + svg
                }
            },
            { tag: 'span', elem: 'value', content: info.fact && escapeHTML(info.fact.replace('-', '&ndash;')) }
        ];

        if(info.url) {

            ctx
                .mod('nav', 'yes')
                .js({ val : getUrl(info.url) })
                .content({
                    block: 'b-autocomplete-item',
                    elem: 'nav',
                    url: info.url,
                    content: content
                });

        } else {
            ctx.content(content);
        }

    }

});

/* end: ../../libs/lego/blocks-desktop/b-autocomplete-item/_type/b-autocomplete-item_type_icon.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-input/hint/b-form-input__hint.js */
BEM.DOM.decl('b-form-input', {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);
            (this._hasHint = !!this.elem('hint')[0]) &&
                this
                    .on('change', this._updateHint)
                    ._updateHint();

        },

        'focused' : function() {

            this.__base.apply(this, arguments);
            this._hasHint && this._updateHint();

        }

    },

    /**
     * Показывает/скрывает хинт
     * @private
     */
    _updateHint : function() {

        this.toggleMod(this.elem('hint-wrap'), 'visibility', 'visible', !(this._focused || this.val()));

    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-input/hint/b-form-input__hint.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-input/input/b-form-input__input.js */
BEM.DOM.decl('b-form-input', {

    onSetMod : {

        'focused' : {

            'yes' : function() {

                this.__base.apply(this, arguments);

                var input = this.elem('input');
                this._focusedID = input[0].id;

                this.bindTo('label', 'mousedown', function() {

                    var labelID = _this.elem('label')[0].htmlFor;

                    if(labelID == _this._focusedID) return false;

                });

            },

            '' : function() {

                this.__base.apply(this, arguments);

                this._focusedID = null;

                this.unbindFrom('label', 'mousedown');

            }

        }

    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-input/input/b-form-input__input.js */
/* begin: ../../libs/lego/blocks-desktop/b-search/sample/b-search__sample.js */
BEM.DOM.decl('b-search__sample', {

    onSetMod : {

        js : function() {

            Lego.block['b-search__sample'].call(this.domElem, this.params);

        }

    }

});


(function($, Lego){

/*
 * @param params.for имя поля для подстановки примера, если не указан "text"
 * @param params.nl cоздавать ли параметр nl=1 (используется для статистики)
 */
Lego.block['b-search__sample'] = function(params){
    var $this = this,
        form = $this.closest('form'),
        input = form.find("input[name='"+ (params['for'] || 'text') +"']"),
        nl;

    $this.find('.b-link_pseudo_yes').click(function(e){
        input
            .focus()
            .attr('value', params['text'] || $(e.target).text());
        nl = form.find("input[name='nl']");
        if (params.nl && !nl.length) nl = $('<input type="hidden" name="nl" value="1"/>').insertAfter(input);
        $(document).trigger('popupsClose.lego');
        e.preventDefault();
    });
};

})(jQuery, window.Lego);

/* end: ../../libs/lego/blocks-desktop/b-search/sample/b-search__sample.js */
/* begin: ../../blocks-desktop/b-vb-foot/b-vb-foot.js */
BEM.DOM.decl('b-vb-foot', {
    onSetMod: {
        js: function() {
            this.bindToWin('resize', this.repaint, this);
            channels('dom').on('layoutChanged', this.repaint, this);
            this.repaint();

            var button = this.elem('add-thumb').bem('b-link');

            button.bindTo('leftclick', function() {
                if (!this.hasMod('disabled')) {
                    var advertisement = cache.get('advertisement');

                    if (advertisement && advertisement.id === 'vbaddthumb') {
                        vb.advertisement.refuse(0);
                    }

                    page().createThumb();
                }
            });

            var blocks = require('bem').blocks;
            var BEMHTML = require('bemhtml');
            var json = blocks['b-restore-tumbs-popup']();
            var html = BEMHTML.apply(json);
            this.domElem.prepend(html);
            BEM.DOM.init();
        }
    },

    repaint: function() {
        this.elem('content').css('maxWidth', $('.b-vb').width());

        var button = this.elem('add-thumb').bem('b-link'),
            settings = cache.get('settings'),
            layout = page().getLayout(),
            maxAchieved = layout.thumbsCount >= settings.x * settings.y;

        if (!maxAchieved) {
            button.delMod('disabled');
        } else {
            button.setMod('disabled', 'yes');
        }

        var text = button.elem('hint');
        if ($(document).width() < 1150) {
            text.hide();
        } else {
            text.show();
        }
    },

    destruct: function() {
        channels('dom').off('layoutChanged', this.repaint, this);
        this.unbindFromWin('resize', this.repaint, this);
        this.__base.apply(this, arguments);
    }
});

blocks['b-vb-foot'] = function(data) {
    var ie78 = (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9),
        blocks = require('bem').blocks;

    if (data.hasClosedTabs === undefined)
        data.hasClosedTabs = true;

    if (data.hasApps === undefined)
        data.hasApps = true;

    return {
        block: 'b-vb-foot',
        js: true,
        content: [
            {
                elem: 'content',
                content: [
                    {
                        block: 'b-menu-horiz',
                        mods: {
                            layout: 'normal',
                            type: 'foot',
                            pos: 'left'
                        },
                        js: false,
                        content: [
                            {
                                block: 'b-dropdowna',
                                mods: {
                                    type: 'closed-bookmarks'
                                },
                                content: [
                                    {
                                        elem: 'switcher',
                                        content: [
                                            {
                                                block: 'b-link',
                                                mods: {
                                                    pseudo: 'yes',
                                                    open: 'bookmark',
                                                    disabled: data.hasClosedTabs ? '' : 'yes'
                                                },
                                                content: vb.getLocalizedString('footer.closedTabs')
                                            }
                                        ]
                                    },
                                    {
                                        block: 'b-popupa',
                                        mods: {
                                            theme: 'ffffff',
                                            type: 'closed-bookmarks',
                                            'only-direction': 'up'
                                        },
                                        content: [
                                            {
                                                elem: 'tail'
                                            },
                                            {
                                                elem: 'content',
                                                content: [
                                                    {
                                                        block: 'b-spin',
                                                        mods: {
                                                            progress: 'yes'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            !ie78 && {
                                elem: 'item',
                                mix: [{
                                    block: 'i-action',
                                    elem: 'show-downloads'
                                }, {
                                    block: 'i-action',
                                    elem: 'vlinksdown'
                                }],
                                content: {
                                    block: 'b-link',
                                    mods: {
                                        pseudo: 'yes'
                                    },
                                    content: vb.getLocalizedString('footer.downloads')
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    mix: [{
                                        block: 'i-action',
                                        elem: 'show-bookmarks'
                                    }],
                                    mods: {
                                        pseudo: 'yes'
                                    },
                                    content: vb.getLocalizedString('footer.bookmarks')
                                }
                            },
                            {
                                elem: 'item',
                                mix: [{
                                    block: 'i-action',
                                    elem: 'show-history'
                                }],
                                content: {
                                    block: 'b-link',
                                    mods: {
                                        pseudo: 'yes',
                                        action: ''
                                    },
                                    content: vb.getLocalizedString('footer.history')
                                }
                            },
                            vb.navigator === 'chromium' && {
                                elem: 'item',
                                content: {
                                    block: 'b-link',
                                    mods: {
                                        pseudo: 'yes',
                                        disabled: data.hasApps ? '' : 'yes',
                                        open: 'apps'
                                    },
                                    content: vb.getLocalizedString('footer.apps')
                                }
                            }
                        ].filter(function(item){ return Boolean(item);})
                    }
                ]
            },
            {
                elem: 'links',
                content: [
                    {
                        block: 'b-link',
                        mods: {
                            pseudo: 'yes'
                        },
                        mix: [{
                            block: 'b-vb-foot',
                            elem: 'add-thumb'
                        }],
                        content: [
                            {
                                block: 'b-icon',
                                mods: {
                                    type: 'plus'
                                }
                            },
                            {
                                elem: 'hint',
                                tag: 'span',
                                content: vb.getLocalizedString('footer.addThumb')
                            }
                        ]
                    },
                    {
                        block: 'b-link',
                        mix: [{
                            block: 'i-action',
                            elem: 'settings'
                        }],
                        mods: {
                            pseudo: 'yes'
                        },
                        content: vb.getLocalizedString('settings')
                    }
                ]
            }
        ]
    };
};

/* end: ../../blocks-desktop/b-vb-foot/b-vb-foot.js */
/* begin: ../../blocks-desktop/b-popupa/_type/b-popupa_type_properties.js */

blocks['b-popupa_type_properties'] = function() {
    return {
        block: 'b-popupa',
        mods: {
            'only-direction': 'up-left',
            theme: 'ffffff',
            type: 'properties'
        },
        content: [
            {
                elem: 'close'
            },
            {
                elem: 'tail'
            },
            {
                elem: 'content'
            }
        ]
    };
};

BEM.DOM.decl({block: 'b-popupa', modName: 'type', modVal: 'properties'}, {

    onSetMod: {
        js: function() {
            this.on('hide', function() {
                this.findBlockOutside('b-page').delMod('settings-shown');
            });
            this.__base.apply(this, arguments);
        }
    },

    _onUnderHidden: function() {
        this.__base.apply(this, arguments);
        // force hide blocker
        this.findBlockOutside('b-page').findBlockInside('blocker').setMod('disabled', 'yes');
    }
});

/* end: ../../blocks-desktop/b-popupa/_type/b-popupa_type_properties.js */
/* begin: ../../blocks-desktop/b-properties-popup/b-properties-popup.js */
blocks['b-properties-popup'] = function (userSettings) {
    function formatDate(date) {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();

        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        return [
            day,
            month,
            year
        ].join('.');
    }

    var blocks = require('bem').blocks,
        reg = /(.*)\[(.+)\]\((.+)\)(.*)/i,
        bCopyright = userSettings.copyright + ',';

    userSettings.copyright.replace(reg, function(str, pretext, title, link, posttext) {
        if (!pretext)
            return;

        bCopyright = [
            pretext,
            {
                block: 'b-link',
                mix: [{
                    block: 'i-action',
                    elem: 'hide-popup'
                }],
                url: link,
                mods: {
                    underline: 'yes'
                },
                content: title
            }
        ];
        if (posttext)
            bCopyright.push(posttext + ',');
        else
            bCopyright.push(',');
    });

    return [{
        block: 'b-properties-popup',
        js: true,
        content: [
            {
                elem: 'group',
                elemMods: {
                    type: 'count'
                },
                content: [
                    {
                        elem: 'title',
                        content: vb.getLocalizedString('settings.thumbsNum') + ': '
                    },
                    {
                        block: 'b-form-slider',
                        mods: {
                            theme: 'grey',
                            size: 'l',
                            orientation: 'horiz',
                            set: 'thumbs-layout',
                            input: 'hidden'
                        },
                        js: {},
                        content: {
                            elem: 'info',
                            elemMods: {
                                preset: 'inline'
                            },
                            content: [
                                {
                                    block: 'b-form-input',
                                    mods: {
                                        theme: 'grey'
                                    },
                                    content: {
                                        elem: 'input'
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            {
                elem: 'group',
                elemMods: {
                    type: 'bg'
                },
                content: [
                    {
                        block: 'b-select-theme',
                        elem: 'load',
                        elemMods: {
                            type: 'button'
                        },
                        content: [
                            {
                                block: 'b-form-button',
                                mods: {
                                    theme: 'islands',
                                    size: 'normal'
                                },
                                mix: [{
                                    block: 'i-action',
                                    elem: 'upload-background-image'
                                }],
                                content: vb.getLocalizedString('settings.upload')
                            }
                        ]
                    },
                    {
                        elem: 'title',
                        content: vb.getLocalizedString('settings.backgroundImage') + ': '
                    },
                    blocks['b-select-theme'](userSettings)
                ]
            },
            {
                elem: 'group',
                elemMods: {
                    type: 'option'
                },
                content: blocks['b-properties-popup__group_type_option'](userSettings, false)
            },
            {
                elem: 'group',
                elemMods: {
                    type: 'licence'
                },
                content: [
                    {
                        elem: 'line',
                        content: [
                            vb.getLocalizedString('app.name'),
                            ' ',
                            {
                                elem: 'version',
                                content: userSettings.rev,
                                attrs: {
                                    title: userSettings.build
                                },
                                tag: 'span'
                            },
                            ', ',
                            vb.getLocalizedString('settings.releaseDate'),
                            ' ',
                            formatDate(new Date(userSettings.buildDate * 1000)),
                            '.'
                        ]
                    },
                    userSettings.softURL && {
                        elem: 'line',
                        mods: {
                            align: 'top'
                        },
                        content: [{
                            block: 'b-link',
                            mix: [{
                                block: 'i-action',
                                elem: 'hide-popup'
                            }],
                            url: userSettings.softURL,
                            mods: {
                                underline: 'yes'
                            },
                            content: vb.getLocalizedString('settings.otherSoft')
                        }, '.']
                    },
                    {
                        elem: 'line',
                        content: [
                            {
                                elem: 'copyright',
                                tag: 'span',
                                content: bCopyright
                            },
                            {
                                block: 'b-link',
                                mix: [{
                                    block: 'i-action',
                                    elem: 'hide-popup'
                                }],
                                mods: {
                                    underline: 'yes'
                                }, url: userSettings.licenseURL,
                                content: vb.getLocalizedString('settings.licenseAgreement.title')
                            },
                            '.'
                        ]
                    }
                ]
            }
        ]
    },
    {
        block: 'dropdown-blocker',
        js: true
    }];
};

blocks['b-properties-popup__group_type_option'] = function(userSettings, withCheckboxes) {
    var syncBlock = cache.get('sync') && cache.get('sync').status !== 4 ? {
            block: 'sync-properties-wrapper',
            content: blocks['sync-properties'](cache.get('sync'))
        } : null,
        isChromium = vb.navigator === 'chromium',
        ie78 = vb.navigator === 'ie' && vb.navigatorMajorVersion < 9;

    return [
        syncBlock,
        !withCheckboxes && {
            block: 'b-form-button',
            mods: {
                theme: 'islands',
                size: 'normal'
            },
            mix: [{
                block: 'b-properties-popup',
                elem: 'other-settings-params'
            }],
            content: vb.getLocalizedString('settings.collapsed')
        },
        {
            block: 'b-vb-config',
            elem: 'properties',
            content: [
                withCheckboxes && {
                    block: 'b-vb-config',
                    elem: 'text',
                    content: [{
                        block: 'b-properties-popup',
                            elem: 'select-title',
                            content: vb.getLocalizedString('settings.showSites')
                        },
                        blocks['b-form-select'](userSettings.thumbStyle)
                    ]
                },
                withCheckboxes && {
                    block: 'b-vb-config',
                    elem: 'text',
                    elemMods: {
                        chbox: 'yes'
                    },
                    tag: 'label',
                    attrs: {
                        'for': 'nnn0'
                    },
                    content: [
                        {
                            block: 'b-form-checkbox',
                            mods: {
                                type: ie78 ? '' : 'islands',
                                first: 'yes',
                                name: 'show-search',
                                theme: 'grey-m',
                                size: 'm',
                                checked: userSettings.showSearchForm ? 'yes' : ''
                            },
                            checkboxAttrs: {
                                id: 'nnn0',
                                value: 'iu',
                                name: 'text'
                            }
                        }, ' ' + vb.getLocalizedString('settings.showSearchForm')
                    ]
                },
                withCheckboxes && {
                    block: 'b-vb-config',
                    elem: 'text',
                    elemMods: {
                        chbox: 'yes'
                    },
                    tag: 'label',
                    attrs: {
                        'for': 'nnn'
                    },
                    content: [
                        {
                            block: 'b-form-checkbox',
                            mods: {
                                type: ie78 ? '' : 'islands',
                                name: 'show-bookmarks',
                                theme: 'grey-m',
                                size: 'm',
                                checked: userSettings.showBookmarks ? 'yes' : ''
                            },
                            checkboxAttrs: {
                                id: 'nnn',
                                value: 'iu',
                                name: 'text'
                            }
                        }, ' ' + vb.getLocalizedString('settings.showBookmarksPanel')
                    ]
                },
                withCheckboxes && {
                    block: 'b-vb-config',
                    elem: 'text',
                    elemMods: {
                        chbox: 'yes'
                    },
                    tag: 'label',
                    attrs: {
                        'for': 'nnn2'
                    },
                    content: [
                        {
                            block: 'b-form-checkbox',
                            mods: {
                                type: ie78 ? '' : 'islands',
                                theme: 'grey-m',
                                name: 'send-stat',
                                size: 'm',
                                checked: userSettings.sendStat ? 'yes' : ''
                            },
                            checkboxAttrs: {
                                id: 'nnn2',
                                value: 'iu',
                                name: 'text'
                            }
                        }, ' ' + vb.getLocalizedString('settings.sendstat')
                    ]
                },
                withCheckboxes && {
                    block: 'b-vb-config',
                    elem: 'text',
                    elemMods: {
                        chbox: 'yes'
                    },
                    tag: 'label',
                    attrs: {
                        'for': 'ss2'
                    },
                    content: [
                        {
                            block: 'b-form-checkbox',
                            mods: {
                                type: ie78 ? '' : 'islands',
                                theme: 'grey-m',
                                name: 'show-advertisement',
                                size: 'm',
                                checked: userSettings.showAdvertisement ? 'yes' : ''
                            },
                            checkboxAttrs: {
                                id: 'ss2',
                                value: 'iu',
                                name: 'text'
                            }
                        }, ' ' + vb.getLocalizedString('settings.showAdvertisement')
                    ]
                },
                !userSettings.isHomePage && withCheckboxes && !isChromium && {
                    block: 'b-homepage-wrapper',
                    tag: 'div',
                    content: {
                        block: 'b-form-button',
                        mods: {
                            size: 'normal',
                            theme: 'islands',
                            action: 'set-as-homepage'
                        },
                        content: vb.getLocalizedString('settings.setAsHomePage')
                    }
                }
            ]
        }
    ];
};

BEM.DOM.decl('b-properties-popup', {
    onSetMod: {
        js: function () {
            this.bindTo('other-settings-params', 'click', function () {
                this.showAllSettings();
            });
        }
    },

    showAllSettings: function() {
        var blocks = require('bem').blocks,
            BEMHTML = require('bemhtml'),
            html = BEMHTML.apply(blocks['b-properties-popup__group_type_option'](cache.get('settings'), true)),
            popupa = $('.b-popupa_type_properties').bem('b-popupa'),
            oldPos = popupa._pos;

        // временно затираем _pos, меняем top на bottom, ставим нужный контент,
        // возвращаем top, убираем bottom, включаем _pos обратно
        popupa._pos = function() {};

        var ipopup = popupa._getUnder(),
            oldTop = parseInt(ipopup.domElem.css('top'), 10),
            oldHeight = ipopup.domElem.height(),
            bottom = $(document).height() - oldTop - oldHeight;

        ipopup.domElem.css({
            top: '',
            bottom: bottom
        });
        this.findElem('group', 'type', 'option').append(html);
        this.findElem('other-settings-params').hide();
        BEM.DOM.init();

        var deltaHeight = ipopup.domElem.height() - oldHeight;

        ipopup.domElem.css({
            top: oldTop - deltaHeight,
            bottom: ''
        });
        popupa._pos = oldPos;

        this.findBlocksInside('b-form-checkbox').forEach(function (checkbox, index) {
            checkbox.on('change', function() {
                var name = this.getMod('name'),
                    isChecked = this.isChecked();

                if (name === 'send-stat') {
                    vb.setSendStatistics(isChecked, false);
                } else {
                    page().applySettings(true);
                }

                switch (name) {
                    case 'show-search':
                        vb.stat('settings.search.' + (isChecked ? 'show' : 'hide'));
                        break;

                    case 'show-bookmarks':
                        vb.stat('settings.bookmarkspanel.' + (isChecked ? 'show' : 'hide'));
                        break;

                    case 'send-stat':
                        vb.stat('settings.stat.send' + (isChecked ? 'on' : 'off'));
                        break;

                    case 'show-advertisement':
                        vb.stat('settings.adv.' + (isChecked ? 'on' : 'off'));
                        break;
                }

            }, checkbox);
        });

        this.findBlockInside('b-form-select').on('change', function() {
            page().applySettings(true);
        });
    }
});

/* end: ../../blocks-desktop/b-properties-popup/b-properties-popup.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-select/b-form-select.js */
(function($, BEM, undefined) {

var DOM = BEM.DOM,
    HTML = BEM.HTML,

    KEYDOWN_EVENT = ($.browser.opera && $.browser.version < 12.10) ? 'keypress' : 'keydown',
    IS_MSIE = $.browser.msie && $.browser.version <= 10,

    /** {String} */
    BLOCK_NAME = 'b-form-select';

/**
  Вариант данных для API
  @example
  var data = [
   {
       item: 'optgroup',
       label: 'Russia',
       disabled: 1,    // optional
       content: [
         { item: 'option', value: '1', content: 'Moscow' },
         { item: 'option', value: '1', content: 'Saint-Peterburg', disabled: 1 }
       ]
   },
   { item: 'option', value: '3', content: 'Paris', selected: 1 },
   { item: 'option', value: '7', content: 'California', disabled: 1 }
  ];

  formSelect.setOptions(data);
 */

/**
 * @param {Object} item
 * @param {Number} i
 * @param {Object} [params]
 * @returns {BEMJSON}
 */
function buildOption(item, i, params) {
    var it = {};

    if(item.item === 'option') {

        it = {
            block: BLOCK_NAME,
            elem: 'option',
            tag: 'option',
            attrs: { value: item.value },
            content: item.content
        };

        item.disabled && (it.attrs.disabled = 'disabled');
        item.selected && (it.attrs.selected = 'selected');

    } else if(item.item === 'optgroup') {

        it = {
            elem: 'option-group',
            tag: 'optgroup',
            attrs: { label: item.label }
        };

        item.disabled && (it.attrs.disabled = 'disabled');

        it.content = Array.isArray(item.content) ?
            item.content.map(function(node, i) {
                return buildOption(node, i);
            })
            : item.content;

    }

    it.block = BLOCK_NAME;

    if(params) {
        for(var p in params) if(params.hasOwnProperty(p)) it[k] = val;
    }

    return it;
}

/**
 * @private
 * @param {JQuery} node
 * @param {String|Object|Array} content
 * @param {Object} elMods
 * @returns {BEMJSON} BEMJSON-представление элемента
 */
function buildItemJson(node, content, elMods) {
    var item = {
            block: BLOCK_NAME,
            elem: 'item',
            content: {
                elem: 'text',
                tag: 'span',
                content: content || ' &nbsp; '
            },
            mods: {}
        };

    elMods && (item.mods = elMods);

    return item;
}

/**
 * @private
 * @param {Array} data
 * @returns {String}
 */
function buildItemsHtml(data) {
    /** {String} Имя блока */
    var block = BLOCK_NAME,
        /** {BEMJSON} разделитель в списке элементов */
        separatorItem = { block: block, elem: 'separator', tag: 'i' },
        items = [{ block: block, elem: 'fade', tag: 'i' }],
        inGroup = false;

    /**
     * @param {jQuery|[HTMLElement]} data
     * @param {Object} mods
     */
    function iterateNodes(data, mods) {
        var len = data.length;
        if(len) {
            var i = 0;

            do {
                var item = $(data[i]),
                    isDisabled = item.attr('disabled') && { disabled: 'yes' };

                if(item.is('optgroup')) {
                    inGroup = true;

                    !item.prev().is('optgroup') && items.push(separatorItem);
                    items.push(buildItemJson(item, item.attr('label'),
                        $.extend({ label: 'yes' }, isDisabled, mods)));

                    iterateNodes(item.children(), $.extend({ inner: 'yes' }, isDisabled, mods));
                } else {
                    items.push(buildItemJson(item, item.text(),
                        $.extend(isDisabled, item.is(':selected') && { selected: 'yes' }, mods)));
                }
            } while(++i < len || (inGroup && (items.push(separatorItem), inGroup = false)));
        }
    }

    iterateNodes(data);

    return HTML.build(items);
}


DOM.decl('b-form-select', {

    onSetMod : {

        'js': function() {

            this._items = [];
            this._curItemIndex = -1;

            /** {Number} Высота строки в списке по-умолчанию */
            this._rowHeight = 22;

            // тригерим `change` у select-а, для синхронизации надписи на кнопке и выбранного пункта
            this._getSelectedText() !== this._buttonText() &&
                this.elem('select').trigger('change');

            this._onChangeTimerId = 0;
        },

        'disabled' : function(modName, modVal) {

            var disabled = modVal === 'yes';

            this.elem('select').attr('disabled', disabled);
            this._getButton().setMod(modName, modVal);

            disabled && this.delMod('opened').delMod('focused');

        },

        'opened' : {

            'yes' : function() {

                if(this.hasMod('disabled', 'yes'))
                    return false;

                this._focus()._drawPopup();

                this.bindToWin('scroll resize', this._updatePopupPos)

            },

            '' : function() {

                this._getPopup().hide();

                this.unbindFromWin('scroll resize');

            }

        }

    },


    'focused' : {

        'yes' : function(modName, modVal) {

            if(this.hasMod('disabled', 'yes'))
                return false;

            this._getButton().setMod(modName, modVal);

            this
                .bindTo('keypress', function(e) {
                        this._onKeyPress(e);
                    })
                .bindTo(KEYDOWN_EVENT, function(e) {
                        this._onKeyDown(e);
                    })
                .trigger('focusin');

        },

'' : function(modName) {

            this
                .delMod('opened')
                ._getButton().delMod(modName);

            this
                .unbindFrom('keypress ' + KEYDOWN_EVENT)
                .trigger('focusout');

        }

    },

    open : function() {

        return this.setMod('opened', 'yes');

    },

    close : function() {

        return this.delMod('opened');

    },

    isOpened : function() {

        return this.hasMod('opened', 'yes');

    },

    /**
     * Устанавливает/возвращает выбранное значение
     * @param {String} [val]
     * @returns {String|BEM.DOM}
     */
    val : function(val) {

        if(typeof val === 'undefined') {
            return this.elem('select').val();
        }

        // NOTE: `$(select).val('value')` позволяет выбрать за-disable-нный элемент
        var valIndex = -1, optgroup;
        this.findElem('option').each(function(idx) {
            this.value === val && !this.disabled &&
                (optgroup = $(this).parent('optgroup')[0], !(optgroup && optgroup.disabled)) &&
                (valIndex = idx);
        });

        valIndex > -1 && this._selectedIndex(valIndex);

        return this;
    },

    /**
     * Устанавливает/возвращает номер выбранного элемента
     * @private
     * @param {Number} [index]
     * @returns {Number}
     */
    _selectedIndex : function(index) {

        var prevIdx = this._getSelectedIndex();
        if(typeof index === 'undefined' || index === prevIdx) {
            // LEGO-7139: не тригерить `change` если значение не изменилось
            return prevIdx;
        }

        // jQuery 1.6+ only
        //this.elem('select').prop('selectedIndex', index);
        this.elem('select')[0].selectedIndex = index;

        this._buttonText(this._getSelectedText());

        if(this._items[0]) {
            var current = this._items.eq(index);
            this
                .delMod(this._items, 'selected')
                .setMod(current, 'selected', 'yes');
        }

        this.trigger('change', { index: index, prev: prevIdx });

        return index;

    },

    /**
     * Устанавливает новое содержимое select-а
     * @param {[Object]} data
     * @returns {BEM.DOM}
     */
    setOptions : function(data) {

        if(!data) return;

        DOM.update(this.elem('select'), HTML.build($.map(data, buildOption)));

        return this.updateItems();

    },

    /**
     * Обновить контент попапа
     */
    updateItems : function() {

        this._popup && this._redrawList();

        this.elem('select').trigger('change');

        return this;

    },

    _focus : function() {

        return this.setMod('focused', 'yes');

    },

    _blur : function() {

        return this.delMod('focused');

    },

    /**
     * Хелпер для чтения/обновления текста кнопки
     * @private
     * @param {String} [text]
     */
    _buttonText : function(text) {

        if(typeof text === 'undefined') {
            return this._getButton().elem('text').text();
        }

        text = text || '';
        text += vb.navigator === 'ie' && vb.navigatorMajorVersion < 9 && ' <span class="b-form-select__arrow">▼</span>' || '';

        return this._getButton().elem('text').html(text || ' &nbsp; ');

    },


    /* Events */

    _onClick : function(e) {

        this.toggleMod('opened', 'yes', '');

    },

    _onFocus : function(e) {

        this.toggleMod('focused', 'yes', '', e.type === 'focusin');

    },

    _onSelectChange : function(e) {
        var _this = this;

        _this._buttonText(_this._getSelectedText());

        // XXX: иначе неверно работает в IE
        clearTimeout(_this._onChangeTimerId);
        _this._onChangeTimerId = setTimeout(function() {
            _this.trigger('change', {
                index: _this._getSelectedIndex(),
                prev: -1
            });
        }, 1);
    },

    _onKeyPress : function(e) {

        if(e.keyCode === 13) {
            e.preventDefault();

            if(this.isOpened()) {
                this._curItemIndex > -1 ?
                    this._onSelectItem(this._items.eq(this._curItemIndex)) : this.close();
            } else {
                // LEGO-6711
                return this._getButton().delMod('pressed');
            }
        }

    },

    _onKeyDown : function(e) {

        var keyCode = e.keyCode;

        if(keyCode === 38 || keyCode === 40) {
            e.preventDefault();

            if(!this.isOpened())
                return this.open(e);

            var len = this._items.length;
            if(len) {
                var direction = keyCode - 39, // пользуемся особенностями кодов клавиш "вверх"/"вниз" ;-)
                    idx = this._curItemIndex,
                    i = 0;

                do {
                    idx += direction;
                } while(idx >= 0 && idx < len &&
                    this._onEnterItem(this._items.eq(idx), true) === false && ++i < len);
            }
        } else if(keyCode === 32 && !this._keyPressed) {

            this._keyPressed = true;
            this._onClick();

            // XXX: LEGO-6757
            this.bindTo('keyup', function() {
                this.unbindFrom('keyup');
                this._keyPressed = false;
            });

        }

    },

    _onEnterItem : function(item, byKeyboard) {

        if(!this._isSelectableItem(item)) {
            return false;
        }

        var items = this._items,
            idx = this._curItemIndex;

        idx > -1 && this.delMod(items.eq(idx), 'hovered');
        idx = this._getItemIndex(item);
        idx > -1 && this.setMod(items.eq(this._curItemIndex = idx), 'hovered', 'yes');

        if(byKeyboard) {
            this._selectedIndex(this._curItemIndex);

            this._scrollToCurrent();
        }

    },

    _onLeaveItem : function(item) {

        var idx = this._curItemIndex;
        if(idx > -1 && idx === this._getItemIndex(item)) {
            this.delMod(this._items.eq(idx), 'hovered')._curItemIndex = -1;
        }

    },

    _onSelectItem : function(item) {

        if(this._isSelectableItem(item))
            this._selectedIndex(this._curItemIndex);

        // (HACK): Превентим сброс фокуса у b-form-button после выбора элемента
        this.afterCurrentEvent(function() {
            this._getButton().setMod('focused', 'yes');
        });

        return this.close();

    },

    _isOutsideClicked : function(e, data) {

        return this.containsDomElem($(data.domEvent.target));

    },


    /* Helpers */

    _getItemIndex : function(item) {

        return $.inArray(item.get(0), this._items);

    },

    _getSelectedText : function() {

        return this.elem('select').find(':selected').text();

    },

    _getSelectedIndex : function() {

        return this.elem('select')[0].selectedIndex;

    },

    /**
     * @private
     * @param {jQuery} item
     * @returns {Boolean}
     */
    _isSelectableItem : function(item) {

        return !(this.hasMod(item, 'disabled', 'yes') || this.hasMod(item, 'label', 'yes'));

    },

    /**
     * Ленивый поиск кнопки
     * @private
     * @returns {BEM.DOM}
     */
    _getButton : function() {

        return this._button || (this._button = this.findBlockInside('b-form-button'));

    },

    /**
     * Ленивое построение попапа
     * @private
     * @returns {BEM.DOM}
     */
    _getPopup : function() {

        if(this._popup) return this._popup;

        var _this = this,
            blockName = _this.__self.getName(),
            list = {
                block: blockName,
                elem: 'list'
            },
            popupMix = {
                block: blockName,
                elem: 'popup',
                mods: {}
            };

        // пробрасываем нужные модификаторы из блока в popup
        ['size', 'layout', 'theme', 'width'].forEach(function(mod, i) {
            _this.hasMod(mod) && (popupMix.mods[mod] = _this.getMod(mod));
        });

        var popup = $(HTML.build({
                block: 'i-popup',
                underMix : [{ block : 'b-popupa', elem : 'under' }],
                content: {
                    block: 'b-popupa',
                    mods: _this.params.popupMods,
                    mix: [
                        {
                            block: blockName
                        },
                        popupMix
                    ],
                    content: {
                        elem: 'content',
                        content: list
                    }
                }
            }));

        (_this._popup = _this.findBlockOn(popup, 'i-popup'))
            .on({
                'show' : function() {

                    _this._curItemIndex = _this._getSelectedIndex();

                    var current = _this._items.eq(_this._curItemIndex);
                    _this
                        .delMod(_this._items, 'selected')
                        .setMod(current, 'hovered', 'yes')
                        .setMod(current, 'selected', 'yes')
                        .bindToDoc('keydown', function(e) {
                            // Ловим `focusout` select-а с клавиатуры
                            if(e.keyCode === 9 && _this.isOpened()) {
                                _this._blur();
                            }
                        });

                },

                'outside-click' : function(e, data) {

                    _this._isOutsideClicked(e, data) ?
                            e.preventDefault() : _this._blur();

                },

                'hide' : function() {

                    _this._curItemIndex = -1;

                    _this
                        .delMod('opened')
                        .delMod(_this._items, 'hovered')
                        .delMod(_this.findElem(_this._popup.domElem, 'popup'), 'scrollable')
                        .unbindFromDoc('keydown');

                }
            })
            .bindTo('mousedown', function(e) {
                e.preventDefault();
            });

        BEM.DOM.append('body', _this._popup.domElem);

        _this._redrawList();

        /*
         * (HACK, LEGO-7251)
         */
        _this._outPopup = _this.findBlockOutside('button', 'b-popupa');
        _this._outPopup && _this._outPopup.on('outside-click', function(e, data) {
                _this._popup.containsDomElem($(data.domEvent.target)) &&
                    e.preventDefault();
            });

        return this._popup;
    },

    _redrawList : function() {

        var _this = this,
            popup = _this._getPopup().domElem,
            items;

        DOM.update(this.findElem(popup, 'list'), buildItemsHtml(this.elem('select').children()));

        items = this.findElem(popup, 'item');

        this._curItemIndex = -1;
        this._items = items.filter(function() {
            return !_this.hasMod($(this), 'label', 'yes');
        });

        // (XXX, LEGO-7889): Результат отказа от связки попапы и селекта через `_uniqId`
        this.bindTo(items, {
            'mouseup' : function(e) {
                if (e.which === 1) {
                    // попапа селекта не умеет закрываться, не закрывая другие попапы
                    window.selectClosing = 2;
                    this.afterCurrentEvent(function() {
                        window.selectClosing = 0;
                    });
                    _this._onSelectItem(e.data.domElem);
                    e.stopPropagation();
                }
            },
            'mouseover' : function(e) {
                _this._onEnterItem(e.data.domElem);
            },
            'mouseout' : function(e) {
                _this._onLeaveItem(e.data.domElem);
            }
        });

        return this;

    },

    _popupPos : function() {

        var btn = this._getButton().domElem,
            css = btn.offset();

        css.top += btn.outerHeight();

        css.top += 10;
        css.left -= 4;

        if (vb.navigator === 'ie' && vb.navigatorMajorVersion < 9)
            css.left -= 10;

        return css;

    },

    _updatePopupPos : function() {

        var css = this._popupPos();

        css && this._getPopup().domElem.css(css);

    },

    _drawPopup : function() {
        var css = this._popupPos(),
            popup = this._getPopup();

        popup.domElem.addClass('b-form-select__popup');
        popup.domElem.addClass('b-form-select__popup_theme_grey');
        popup.show(css);

        this._calcPopupDimensions();

        this._scrollToCurrent();

    },

    _getRowHeight : function() {

        return this.findElem(this._getPopup().domElem, 'item').outerHeight();

    },

    _calcPopupDimensions : function () {

        if(!this._popupContent)
            this._popupContent = this._getPopup().findBlockInside('b-popupa').elem('content');

        var rows = parseInt(this.params.rows, 10) || false;
        if(rows && this.findElem(this._popupContent, 'item').size() > rows) {
            this._rowHeight = this._getRowHeight();

            this._popupContent.css('height', rows * this._rowHeight);

            this.setMod(this.findElem(this._getPopup().domElem, 'popup'), 'scrollable', 'yes');
        }

    },

    _scrollToCurrent : function() {

        if(!this._popupContent || this._curItemIndex < 0) return;

        var curOffsetTop = this.findElem(
                this._getPopup().domElem, 'item', 'selected', 'yes').get(0).offsetTop,
            popContent = this._popupContent,
            popScrollTop = popContent.scrollTop(),

            disp = curOffsetTop - popScrollTop,
            fact = this._rowHeight * 2,
            newScrollTop;

        if(disp > popContent.height() - fact) {
            newScrollTop = curOffsetTop - fact;
        } else if(popScrollTop && disp < fact) {
            newScrollTop = curOffsetTop - popContent.height() + fact;
        }

        newScrollTop && popContent.scrollTop(newScrollTop);

    },

    destruct : function() {
        clearTimeout(this._onChangeTimerId);

        this._outPopup && this._outPopup.un('outside-click');

        var popup = this._popup;
        popup && popup.destruct();

        this.__base.apply(this, arguments);

    },

    getDefaultParams : function() {

        return {
            rows: 13,
            popupMods: {
                direction: 'down'
            }
        };

    }

}, {

    live : function() {

        this
            .liveBindTo('button', 'focusin focusout', function(e) {

                // LEGO-8208
                // LEGO-8749
                if(IS_MSIE && e.type == 'focusout') {
                    return;
                }

                this._onFocus(e);
            })
            .liveBindTo('button', 'mousedown', function(e) {
                e.which === 1 &&
                    (e.preventDefault(), this._onClick(e));
            })
            .liveBindTo('select', 'change', function(e) {
                this._onSelectChange();
            });

        return false;

    }

});

}(jQuery, BEM));

/* end: ../../libs/lego/blocks-desktop/b-form-select/b-form-select.js */
/* begin: ../../blocks-desktop/b-form-select/b-form-select.js */
blocks['b-form-select'] = function(selected) {
    function getAttrs(val) {
        var attrs = {
            value: val
        };

        if (val === selected)
            attrs.selected = 'selected';

        return attrs;
    }

    return {
        block: 'b-form-select',
        mods: {
            size: 's',
            theme: 'islands',
            action: 'set-thumbs-style'
        },
        content: [
            {
                block: 'b-form-button',
                mods: {
                    theme: 'islands',
                    size: 'normal',
                    arrow: 'down'
                },
                mix: [{
                    block: 'b-form-select',
                    elem: 'button'
                }]
            },
            {
                elem: 'select',
                content: [
                    {
                        elem: 'option',
                        attrs: getAttrs(1),
                        content: vb.getLocalizedString('settings.thumbStyle.logosAndTitles')
                    },
                    {
                        elem: 'option',
                        attrs: getAttrs(2),
                        content: vb.getLocalizedString('settings.thumbStyle.logosAndScreenshots')
                    },
                    {
                        elem: 'option',
                        attrs: getAttrs(3),
                        content: vb.getLocalizedString('settings.thumbStyle.screenshots')
                    }
                ]
            }
        ]
    };
};

/* end: ../../blocks-desktop/b-form-select/b-form-select.js */
/* begin: ../../blocks-desktop/b-form-select/_action/b-form-select_action_set-thumbs-style.js */
BEM.DOM.decl({block: 'b-form-select', modName: 'action', modVal: 'set-thumbs-style'}, {
    onSetMod: {
        js: function() {
            this.__base.apply(this, arguments);

            // первое событие тригерит сам блок, его нужно игнорировать
            var skip = true;

            this.on('change', function() {
                if (skip)
                    return skip = false;

                switch (parseInt(this.val(), 10)) {
                    case 1:
                        vb.stat('settings.thumbviewmode.logotitle');
                        break;
                    case 2:
                        vb.stat('settings.thumbviewmode.logoscreen');
                        break;
                    case 3:
                        vb.stat('settings.thumbviewmode.screen');
                        break;
                }
            });
        }
    }
});

/* end: ../../blocks-desktop/b-form-select/_action/b-form-select_action_set-thumbs-style.js */
/* begin: ../../blocks-desktop/dropdown-blocker/dropdown-blocker.js */
(function() {

function getBlocker() {
    return $('.dropdown-blocker').bem('dropdown-blocker');
}

function getPopup() {
    return $('.b-form-select__popup.i-popup').bem('i-popup');
}

BEM.DOM.decl('dropdown-blocker', {
    visible: {
        '': function() {
            getPopup().hide();
        }
    }
}, {
    live: function() {

        BEM.blocks['i-popup'].on('show', function(e) {
            if (e.block.domElem.hasClass('b-form-select__popup')) {
                getBlocker().setMod('visible', 'yes');
            }
        });
        BEM.blocks['i-popup'].on('hide', function(e) {
            if (e.block.domElem.hasClass('b-form-select__popup')) {
                getBlocker().delMod('visible');
            }
        });

        this.liveBindTo('click', function() {
            this.delMod('visible');
        });
    }
});

})();

/* end: ../../blocks-desktop/dropdown-blocker/dropdown-blocker.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-slider/b-form-slider.js */
/**
 * @requires BEM
 * @requires BEM.DOM
 */

(function($, BEM, undefined) {

var KEYDOWN_EVENT = ($.browser.opera && $.browser.version < 12.10) ? 'keypress' : 'keydown',

    /** @const Number проценты */
    RENDER_THROTTLING = 0.25,

    percentsCache = [],
    valsCache = [];


/**
 * Хелпер для обновления кешей значений слайдера во время движения
 * @private
 * @this {BEM.DOM}
 * @param {Number} idx Индекс активного ползунка
 * @param {Number} val Расчетное значение ползунка к координатах
 * @param {Number} percent Расчетное значение в процентах
 * @param {Array} vals Значения слайдера
 */
function dropCache(idx, val, percent, vals) {
    // троттлинг
    if(Math.abs(percent - percentsCache[idx]) < RENDER_THROTTLING)
        return;

    var inc = percent > percentsCache[idx] ? 1 : 0,
        i = 0,
        n = percentsCache.length,
        next;

    percentsCache[idx] = percent;

    if(n === 1) return;

    do {
        if(i === idx) continue;

        next = percentsCache[i];

        if(inc) {
            if(i > idx) {
                next < percent && (percentsCache[i] = percent);
                val >= vals[i] && (valsCache[i] = vals[i]);
            } else {
                percentsCache[i] = val < valsCache[i] ? percent : this._calcPercentByValue(valsCache[i]);
            }
        } else {
            if(i < idx) {
                next > percent && (percentsCache[i] = percent);
                val <= vals[i] && (valsCache[i] = vals[i]);
            } else {
                percentsCache[i] = val > valsCache[i] ? percent : this._calcPercentByValue(valsCache[i]);
            }
        }
    } while(++i < n);

}


/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-form-slider', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {
            this._setScale();

            this._setVals();

            this.on('change', this._onChange, this);
        },

        'disabled' : function(modName, modVal) {
            this.setMod(this.elem('runner'), modName, modVal);
        }

    },

    onElemSetMod : {

        'runner' : {

            'disabled' : function(elem, modName, modVal) {
                var isDisabled = modVal === 'yes';

                isDisabled && this.delMod(elem, 'focused');

                elem.attr('tabindex', ((isDisabled)? '-1' : '0'));

                this._getInputs()[this._getRunnerIdx(elem)].toggleMod(modName, 'yes', '', isDisabled);
            },

            'focused' : {

                'yes' : function(elem, modName, value) {
                    if(this.isRunnerDisabled(elem) || this.isDisabled())
                        return false;

                    this.delMod(this.elem('runner'), modName);

                    this.bindToDoc(KEYDOWN_EVENT, function(e){
                        switch(e.keyCode) {

                        case 40:
                        case 37:
                            e.preventDefault();
                            this.prev();
                            break;

                        case 38:
                        case 39:
                            e.preventDefault();
                            this.next();
                            break;

                        }
                    });

                    this._interval = this._getIntervalByValue(this._vals[this._getRunnerIdx(elem)]);

                    elem.focus();
                },

                '' : function(elem, modName, value, prev) {
                    this.unbindFromDoc(KEYDOWN_EVENT);

                    elem.eq(this._activeRunner) && (this._activeRunner = null);
                }

            }

        }

    },

    _setScale : function() {
        var scale = this._scale = this.params.scale;

        scale[0].percent = 0;
        scale.length > 1 && (scale[scale.length - 1].percent = 100);
    },

    _setVals : function() {
        var _this = this;

        this._vals = this._getInputs().map(function(block) {
            var v = parseFloat(block.val());
            return isNaN(v) ? _this.min() : v;
        });
    },

    _getInputs : function() {
        return this._inputs || (this._inputs = this.findBlocksInside('b-form-input'));
    },

    _getInputIdx : function(input) {
        return $.inArray(input, this._getInputs());
    },

    _getRunnerIdx : function(runner) {
        return this.hasMod(runner, 'pos') ?
                this.getMod(runner, 'pos') - 1 : 0;
    },

    _getActiveRunner : function() {
        return this._activeRunner || (this._activeRunner = this.elem('runner', 'focused', 'yes'));
    },

    /* Events */

    _onMouseDown : function(e) {
        e.preventDefault();
        // при touchstart e.which = 0
        if((e.type === 'mousedown' && e.which !== 1) || this.isDisabled() || this.isRunnerDisabled(e.data.domElem))
            return;

        this._getOffsetPointerCoord(e);

        valsCache = this._vals.slice(0);
        percentsCache = this._calcPercentsByValue(valsCache);

        this
            .bindToDoc('mousemove touchmove',this._onMouseMove)
            .bindToDoc('mouseup', this._onMouseUp)
            .setMod(e.data.domElem, 'focused', 'yes');
    },

    _onMouseMove : function(e) {
        var idx = this._getRunnerIdx(this._getActiveRunner()),
            val = this._calcValueByEvent(e);

        dropCache.call(this, idx, val,
            this._calcPercentByValue(this.toAllowedRange(idx, val)), this._vals);

        this._render(percentsCache);

        this._val(idx, Math.round(val)) && this.trigger('change');
    },

    _onMouseUp : function(e) {
        this.unbindFromDoc('mousemove touchmove mouseup touchend');

        valsCache = [];
        percentsCache = [];

        this._render();
    },

    _onTrackClick : function(e) {
        if(this.isDisabled()) return;

        var val = this._calcValueByEvent(e),
            runner = this._getClosestRunnerByValue(val);

        if(runner) {
            this.vals(this._getRunnerIdx(runner), val);
        }
    },

    _onChange : function() {
        var inputs = this._getInputs();

        this._vals.forEach(function(val, i) {
            inputs[i].val(val);
        });

        return this;
    },

    _onInputChange : function(e) {
        var idx = this.elem('input').index(e.data.domElem),
            prev = this._vals[idx],
            input = this._getInputs()[idx];

        this.vals(idx, input.val());

        prev === this._vals[idx] && input.val(this._vals[idx]);
    },

    /* API */

    /**
     * Выставить значение `val` в индекс `idx`
     * @private
     * @param {Numner} idx Индекс ползунка
     * @param {Number} val Значение
     * @returns {Boolean} Измелилось ли значение?
     */
    _val : function(idx, val) {
        val = parseFloat(val);

        // автовалидация ввода «не числа»
        if(isNaN(val)) return true;

        this._interval = this._getIntervalByValue(val);

        var step = this._scale[this._interval].step,
            mod = val % step;

        // пересчет значения в соответствии с шагом шкалы
        mod && ( val = val - mod + (step - mod > parseFloat((step/2).toFixed()) ? 0 : step) );

        val = this.toAllowedRange(idx, parseFloat(val.toFixed(2)));

        var i = 0,
            vals = this._vals,
            n = vals.length,
            prev = vals[idx],
            inc, next;

        if(vals[idx] === val ? false : (vals[idx] = val, true)) {
            if(n === 1) return true;

            /** {Boolean} двигаем ползунок вперед */
            inc = prev > val ? 0 : 1;

            // обновляем значения соседних ползунков если неоходимо
            do{
                if(i === idx) continue;

                next = vals[i];

                if(inc) {
                    i > idx ? (next < val && (vals[i] = val)) : (val <= valsCache[i] && (vals[i] = val));
                } else {
                    i < idx ? (next > val && (vals[i] = val)) : (val >= valsCache[i] && (vals[i] = val));
                }
            } while(++i < n);

            return true;
        }

        return false;
    },

    /**
     * Валидация значения `val` в области возможных значений рельсы.
     * В базовой реализации слайдера, областью возможных значений рельсы
     * является весь слайдер.
     * @protected
     * @param {Number} idx
     * @param {Number} val
     * @returns {Number}
     */
    toAllowedRange : function(idx, val) {
        var scale = this._scale,
            min = scale[0].value,
            max = scale[scale.length - 1].value;

        /*
        min = this._vals[idx - 1] || this._scale[this._interval].value;
        min < this.min() && (min = this.min());

        max = this._vals[idx + 1] || this._scale[this._interval + 1].value;
        max > this.max() && (max = this.max());
        */

        val > max && (val = max);
        val < min && (val = min);

        return val;
    },

    /**
     * Выставить/получить значение первого ползунка
     * @param {Number} [val] Выставляемое значение
     * @param {Object} [data] Дополнительные данные пробрасываемые в событие `change` блока
     * @returns {BEM.DOM|Number}
     */
    val : function(val, data) {
        return this.vals(0, val, data);
    },

    /**
     * Выставить/получить значения ползунков
     *
     * @example
     * this.vals([1,2,3])   -> [1, 2, 3]
     * this.vals()          -> [1, 2, 3]
     * this.vals(0)         -> 1
     * this.vals(0, 12)     -> [12, 2, 3]
     *
     * @param {Number} [idx=0]
     * @param {Number|Number[]} [val]
     * @param {Object} [data]
     * @returns {BEM.DOM|Number}
     */
    vals : function(idx, val, data) {
        var idxType = typeof idx;
        if(typeof val === 'undefined') {
            if(idxType !== 'object')
                return idxType === 'number' ? this._vals[idx] : this._vals;

            val = idx;
        }

        var _this = this,
            isChanged = false;

        if($.isArray(val)) {
            if(val.length < this._vals.length)
                return _this;

            this._vals.forEach(function(v, i) {
                _this._val(i, val[i]) && !isChanged && (isChanged = true);
            });
        } else {
            isChanged = _this._val(idx, val);
        }

        if(isChanged) {
            this._render();
            this.trigger('change', data);
        }

        return this;
    },

    /**
     * Получить/установить минимальное допустимое значение
     * @param {Number} [min]
     * @returns {Number|BEM.DOM}
     */
    min : function(min) {
        var params = this.params;

        if(typeof min === 'undefined')
            return params.min ? params.min : this._scale[0].value;

        return this.range(min, this.max());
    },

    /**
     * Получить/установить максимальное допустимое значение
     * @param {Number} [max]
     * @returns {Number|BEM.DOM}
     */
    max : function(max) {
        var params = this.params;

        if(typeof max === 'undefined')
            return params.max ? params.max : this._scale[this._scale.length - 1].value;

        return this.range(this.min(), max);
    },

    /**
     * Получить/установить допустимые значения
     * @param {Number} [min]
     * @param {Number} [max]
     * @returns {Array|BEM.DOM}
     */
    range : function(min, max) {
        if(typeof min === 'undefined')
            return [this.min(), this.max()];

        min < max || (max = this._scale[this._scale.length - 1].value);

        this.params.min = min;
        this.params.max = max;

        this._updateRange();
        this._render();

        return this;
    },

    /**
     * Сдвинуть активный ползунок на «шаг» назад
     */
    prev : function() {
        var idx = this._getRunnerIdx(this._getActiveRunner());
        if(typeof idx === 'undefined' || !this._vals[idx])
            return;

        var val = this._vals[idx] - this._scale[this._interval].step,
            interval = this._getIntervalByValue(val);

        // в случае «скачка» в соседний интервал, пересчитываем значение для него
        interval < this._interval &&
            (val = this._vals[idx] - this._scale[interval].step);

        return this.vals(idx, val);
    },

    /**
     * Сдвигает ативный ползунок на «шаг» вперед
     */
    next : function() {
        var idx = this._getRunnerIdx(this._getActiveRunner());
        if(typeof idx === 'undefined' ||
                this._vals[idx] >= this._scale[this._scale.length - 1].value)
            return;

        var val = this._vals[idx] + this._scale[this._interval].step,
            interval = this._getIntervalByValue(val);

        // в случае «скачка» в соседний интервал, пересчитываем значение для него
        interval > this._interval && (val = this._scale[interval].value);

        return this.vals(idx, val);
    },

    /**
     * @param runner {Number|jQuery}
     * @returns {Boolean}
     */
    isRunnerDisabled : function(runner) {
        if(typeof runner === 'number')
            runner = this.elem('runner').eq(runner);
        return this.hasMod(runner, 'disabled');
    },

    /**
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled');
    },

    /**
     * Возвращает текущий для активного ползунка интервал на шкале
     * @returns {Number}
     */
    getInterval : function() {
        return this._interval;
    },

    getDefaultParams : function() {
        return {
            scale: [
                { percent: 0, value: 0, step: 1, label: '' },
                { percent: 100, value: 100, step: 1, label: '' }
            ]
        };
    }

}, /** @lend Block */ {

    live : function() {

        this
            .liveBindTo('click', 'leftclick', function(e){
                this._onTrackClick(e);
            })
            .liveBindTo('runner', 'focusin', function(e) {
                this.setMod($(e.target), 'focused', 'yes');
            })
            .liveBindTo('focusout', function(e){
                this.delMod(this.elem('runner'), 'focused');
            })
            .liveBindTo('runner', 'mousedown touchstart', function(e){
                this._onMouseDown(e);
            })
            .liveBindTo('input', 'focusout', function(e) {
                this._onInputChange(e);
            })
            .liveBindTo('input', 'keypress', function(e) {
                e.keyCode === 13 && this._onInputChange(e);
            });

        return false;
    }

});

}(jQuery, BEM));

/* end: ../../libs/lego/blocks-desktop/b-form-slider/b-form-slider.js */
/* begin: ../../blocks-desktop/b-form-slider/b-form-slider.js */
(function() {
BEM.DOM.decl('b-form-slider', {

    onSetMod: {
        js: function () {
            var settings = cache.get('settings');
            var x = settings.x || 1;
            var y = settings.y || 1;

            var thumbsCount = this.getVal();

            // От бэкенда должны приходить [x,y] либо [5,5], либо [7,7],
            // но на всякий случай делаем более общую логику определения
            // максимального значения тумб для бегунка.
            var maxThumbsCount = Math.max(x * y, thumbsCount) > 25 ? 49 : 25;

            this.params.scale = [
                {value: Math.min(thumbsCount, 1), step: 1},
                {value: maxThumbsCount}
            ];

            if (!this._onPopupHideBinded) {
                this._onPopupHideBinded = this._onPopupHide.bind(this);
            }

            this._thumbsOnStart = $.extend({}, cache.get('thumbs'));
            this._maxDrawedThumbs = {};

            this.__base.apply(this);
            this._startThumbsCount = thumbsCount;
            this._maxThumbsCount = 0;

            this._getSettingsBlock().on('hide', this._onPopupHideBinded);
        }
    },

    getVal: function() {
        return Object.keys(cache.get('thumbs')).length;
    },

    _getSettingsBlock: function() {
        return this.findBlockOutside({
            block: 'b-popupa',
            modName: 'type',
            modVal: 'properties'
        });
    },

    _onMouseUp: function(e) {
        page().delMod('slider-clicked');

        var popupa = this.findBlockOutside('b-popupa');

        if (popupa) {
            this.afterCurrentEvent(function() {
                popupa.pos();
            });
            popupa.bindToResize();
        }

        $('.b-vb-foot').width('100%');
        $('.b-decor').width('100%');
        $('html').removeClass('hide-scroll_x');

        page().findBlockInside('b-content').domElem.removeAttr('style');
        this.__base.apply(this, arguments);
    },

    _onMouseDown: function(e) {
        var isHorizScroll = $.isHorizontalScroll(),
            $doc = $(document),
            docWidth = $doc.width();

        if (!isHorizScroll) {
            $('html').addClass('hide-scroll_x');
        } else {
            $('.b-vb-foot').width(docWidth);
            $('.b-decor').width(docWidth);
        }

        page().setMod('slider-clicked', 'yes');

        var popupa = this.findBlockOutside('b-popupa');

        if (popupa) {
            popupa.unbindFromResize();
        }

        var docHeight = $doc.height();

        page().findBlockInside('b-content').domElem.attr('style','height:' + docHeight + 'px' + ';');

        this.__base.apply(this, arguments);
    },

    _onChange: function() {
        var runner = this.findElem('runner'),
            val = this.val();

        runner.text(val);

        var allThumbs = $.extend({}, cache.get('thumbs'));
        $.extend(allThumbs, this._thumbsOnStart);
        $.extend(allThumbs, this._maxDrawedThumbs);
        this._maxDrawedThumbs = $.extend({}, allThumbs);

        // В `allThumbs` есть информация обо всех тумбах, которые были отрисованы
        // на фронтенде после открытия диалога настроек. Сначала отрисовываем их,
        // т.е. всё то, что фронтенд может отрисовать без участия бэкенда.
        for (var index in allThumbs) {
            if (index >= val) {
                delete allThumbs[index];
            }
        }

        this._redrawThumbs(allThumbs);

        // Если тумб теперь больше, чем фронтенд может отрисовать самостоятельно,
        // то уведомляем бэкенд об изменении количества тумб.
        if (Object.keys(allThumbs).length < val) {
            vb.setThumbsCount(val);
            this._maxThumbsCount = Math.max(val, this._maxThumbsCount);
        }

        this.__base.apply(this, arguments);
    },

    _setVals: function() {
        this._vals = [this.getVal()];
    },

    _redrawThumbs: function(thumbs) {
        thumbs = thumbs || this._thumbsOnStart;

        cache.set('thumbs', thumbs);

        $('.b-tumb').bem('b-tumbs').destruct();

        var BEMHTML = require('bemhtml'),
            blocks = require('bem').blocks,
            thumbsHTML = BEMHTML.apply(blocks['b-tumbs'](cache.get('thumbs')));

        BEM.DOM.update($('.b-vb__content .b-vb__td'), thumbsHTML);
    },

    _onPopupHide: function() {
        var newThumbsCount = this.val();
        var delta = newThumbsCount - this._startThumbsCount;

        if ((delta != 0) || (this._maxThumbsCount > newThumbsCount)) {
            vb.setThumbsCount(newThumbsCount);
        }

        if (delta != 0) {
            if (delta < 0) {
                cache.set('thumbsToRestore', {deleted: -delta, thumbs: this._thumbsOnStart});
            } else {
                cache.set('thumbsToRestore', null);
            }

            page().setStatisticsTimer('numberchange', 'settings.numberchange.' + newThumbsCount, 0);
        }

        this._thumbsOnStart = null;

        setTimeout(function() {
            page().offerRestoreThumbs();
        }, 120);
    },

    destruct: function() {
        this._getSettingsBlock().un('hide', this._onPopupHideBinded);

        this.__base.apply(this, arguments);

        this._thumbsOnStart = null;
        this._maxDrawedThumbs = null;
        this._vals = null;
    }
});

BEM.HTML.decl('b-form-slider', {
    onElem: {
        runner: function(ctx) {
            var val = Object.keys(cache.get('thumbs')).length;

            ctx.tag('a').attrs({hideFocus: true}).content(val);
        }
    }
});

})();

/* end: ../../blocks-desktop/b-form-slider/b-form-slider.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-slider/ui/b-form-slider__ui.js */
/**
 * @requires BEM
 * @requires BEM.DOM
 * @requires BEM.blocks['b-form-slider']
 */

(function(BEM) {

// @const Number Заляпа, для LEGO-7371
var UI_DEVIATION = 0.2;

/*
 * @namespace Описывает процесс построения интерфейса слайдера
 * @name Block
 */
BEM.DOM.decl('b-form-slider', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {
            this.__base();

            this._build();

            // «выключаем» внутренние элементы
            this.hasMod('disabled', 'yes') &&
                this.setMod(this.elem('runner'), 'disabled', 'yes');

            if(typeof this.elem('body')[0].onselectstart !== 'undefined')
                this.elem('body')[0].onselectstart = function() { return false };

            this.afterCurrentEvent(function() {
                this.setMod('animation', 'yes');
            });
        },

        'animation' : {

            'yes' : function() {
                return !this._activeRunner;
            }

        }

    },

    onElemSetMod : {

        'runner' : {

            'focused' : {

                'yes' : function() {
                    if(this.__base.apply(this, arguments) === false)
                        return false;

                    this.delMod('animation');
                },

                '' : function() {
                    this.__base.apply(this, arguments);

                    this.setMod('animation', 'yes');
                }

            }

        }

    },

    _updateOne : function(idx, percent) {
        var st = this._scale,
            runner = this.elem('runner').eq(idx);

        /** {Number} Определяет крайние состояния ползунка (__runner_state_left/_right) */
        st = this._vals[idx] === st[0].value ?
                -1 : (this._vals[idx] === st[st.length - 1].value ? 1 : 0);

        runner.css(this.__POS_UNIT, percent + '%');
        this
            .toggleMod(runner, 'state', 'start', '', st < 0)
            .toggleMod(runner, 'state', 'end', '', st > 0);
    },

    _updateRanges : function(percents) {
        var posUnit = this.__POS_UNIT,
            dimUnit = this.__DIM_UNIT,
            idx = percents.length,
            pos,
            dim = (100 - percents[idx-1] - UI_DEVIATION).toFixed(1),
            ranges = this.elem('range');

        function render(range, pos, dim) {
            var css = {};

            css[posUnit] = typeof pos === 'undefined' ? 'auto' : pos + '%';
            css[dimUnit] = (dim > 0 ? dim : 0) + '%';

            range.css(css);
        }

        do{
            render(ranges.eq(idx--), pos, dim);

            pos = parseFloat((percents[idx-1] || 0).toFixed(1));
            dim = parseFloat((percents[idx] - pos + UI_DEVIATION).toFixed(1));
        } while(idx);

        render(ranges.eq(0), 0, percents[0]);
    },

    _updateRange : function() {
        var min = this._calcPercentByValue(this.min()),
            max = this.max(),
            css = {};

        css[this.__POS_UNIT] = min + '%';
        css[this.__DIM_UNIT] = ((max ? this._calcPercentByValue(max) : 100) - min) + '%';

        this.elem('allowed-range').css(css);
    },

    _render : function(percents) {
        var _this = this;
        percents || (percents = this._calcPercentsByValue(this._vals));

        percents.forEach(function(percent, idx){
            _this._updateOne(idx, percent);
        });

        this._updateRanges(percents);

        return percents;
    },

    /**
     * Шкала значений
     * @private
     */
    _buildScale : function(block) {
        var posUnit = this.__POS_UNIT,
            marks = this._scale.map(function(mark) {
                return {
                    block: block,
                    elem: 'mark',
                    mods: {},
                    attrs: { style: posUnit + ':' + mark.percent + '%' },
                    content: mark.label || ''
                };
            }),
            hasMarks = 0,
            m = marks.length;

        while(hasMarks < m && !marks[hasMarks++].content.length);

        if(hasMarks < m) {
            /** __mark_postion_(first/last) */
            marks[0].mods.position = 'first';
            marks[this._scale.length - 1].mods.position = 'last';

            return {
                block: block,
                elem: 'scale',
                content: marks
            };
        }

    },

    /**
     * Ползунок
     * @private
     */
    _buildRunner : function(block, pos, percent) {
        var mods = { pos: pos },
            s = this._scale;

        // проверяем крайнии значени, для выставления модификатора `_state_start/end`
        pos = pos - 1;
        s = this._vals[pos] === s[0].value ?
                -1 : (this._vals[pos] === s[s.length - 1].value ? 1 : 0);

        s === 0 || (mods.state = s > 0 ? 'end' : 'start');

        return {
            block: block,
            elem: 'runner',
            mods: mods,
            attrs: {
                tabindex: 0,
                style: this.__POS_UNIT + ':' + percent + '%'
            }
        };
    },

    /**
     * Область допустимых значений
     * @private
     */
    _buildAllowedRange : function(block) {
        var min = this._calcPercentByValue(this.min()),
            max = this.max();

        return {
            block: block,
            elem: 'allowed-range',
            attrs: {
                style: this.__POS_UNIT + ':' + min + '%;' +
                    this.__DIM_UNIT + ':' + ((max ? this._calcPercentByValue(max) : 100) - min) + '%;'
            }
        };
    },

    _build : function() {
        var _this = this,
            /** @const String */
            blockName = this.__self.getName(),
            /** @const String */
            posUnit = this.__POS_UNIT,
            /** @const String */
            dimUnit = this.__DIM_UNIT,

            /** BEMJSON[] Шкала */
            scale = this._buildScale(blockName),

            /** BEMJSON[] */
            percents = this._vals.map(function(val) {
                return _this._calcPercentByValue(val);
            }),
            n = percents.length - 1,

            /** BEMJSON[] */
            range = [
                {
                    block: blockName,
                    elem: 'range',
                    mods: { pos: 1, position: 'first' },
                    attrs: {
                        style: posUnit + ':0%;' + dimUnit + ':' + (percents[0]) + '%'
                    }
                }
            ],

            /** BEMJSON[] */
            runners = [],

            /** Boolean */
            isCollapsed = false;

        percents.forEach(function(percent, i) {
            runners.push(_this._buildRunner(blockName, i + 1, percent));

            range.push({
                    block: blockName,
                    elem: 'range',
                    mods: { pos: i + 2 },
                    attrs: {
                        style: posUnit + ':' + (i < n ? (percent + '%;') : 'auto;') +
                            dimUnit + ':' +
                            ( (i < n ? (percents[i + 1] + UI_DEVIATION) : 100) - percent ).toFixed(1) + '%'
                    }
                });

            isCollapsed ||
                (i && percent === percents[i-1] && (isCollapsed = true));
        });

        range[range.length - 1].mods.position = 'last';

        /** Выставляем модификаторы `__runner_position_(first/last)`*/
        if(runners.length > 1) {
            runners[0].mods.position = 'first';
            runners[runners.length - 1].mods.position = 'last';
        } else {
            // XXX: не использовать модификатор `__runner_pos` для одного ползунка
            runners[0].mods.pos = null;
            delete runners[0].mods.pos;
        }

        range.push(this._buildAllowedRange(blockName));

        // TODO:
//        this.hasMod('off-switcher') &&
//            marks.push({ block: block, elem: 'mark', attrs: { style: 'right: 5px' }, content: '∞' });

        isCollapsed && this.setMod('collapsed', 'yes');

        this.domElem.append(BEM.HTML.build(scale));

        this.elem('body').append(BEM.HTML.build(range.concat(runners)));

        // TODO: Runner label
        //this._popupa = this.findBlockInside('b-popupa');
    }

});


BEM.HTML.decl('b-form-slider', {

    onElem : {

        'runner' : function(ctx) {

            ctx.tag('a').attrs({ hideFocus: true });

        }

    }

});

}(BEM));

/* end: ../../libs/lego/blocks-desktop/b-form-slider/ui/b-form-slider__ui.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-slider/math/b-form-slider__math.js */
/**
 * @requires BEM
 * @requires BEM.DOM
 * @requires BEM.blocks['b-form-slider']
 */
(function(BEM, undefined) {

function calcPercentForInterval(a, b, val) {
    return (b.percent - a.percent) * (val - a.value) / (b.value - a.value) + a.percent;
}

function calcValueForInterval(a, b, percent) {
    return (b.value - a.value) * (percent - a.percent) / (b.percent - a.percent) + a.value;
}

/**
 * @namespace Описывает логику преобразований координат
 */
BEM.DOM.decl('b-form-slider', {

    /**
     * @protected
     */
    getPointerDirrection : function() {
        return this._dirrection;
    },

    /**
     * @protected
     */
    getOrientation : function() {
        return this.__ORIGIN === 'Y' ? 'vert' : 'hor';
    },

    /**
     * @param e
     * @throws {NOT_IMPLEMENTED} реализация метода унесена в модификатор `_orientation`
     */
    _getCoordFromEvent : function(e) {
        throw "NOT_IMPLEMENTED";
    },

    /**
     * @param e
     * @throws {NOT_IMPLEMENTED} реализация метода унесена в модификатор `_orientation`
     */
    _getOffsetPointerCoord : function(e) {
        throw "NOT_IMPLEMENTED";
    },

    _getDirrectionFromCoord : function(coord) {
        this._dirrection = coord > (this._dirrectionCoord || 0) ? 1 : -1;
        this._dirrectionCoord = coord;
        return this._dirrection;
    },

    _calcPercentByValue : function(val) {
        var scale = this._scale,
            it = (scale.length > 2) ? this._getIntervalByValue(val) : 0;
        return parseFloat(calcPercentForInterval(scale[it], scale[it + 1], val).toFixed(1));
    },

    _calcPercentsByValue : function(vals) {
        var t = this;
        return vals.map(function(val){
            return t._calcPercentByValue(val);
        });
    },

    _calcPercentByCoord : function(coord) {
        return parseFloat((coord * 100 / this.elem('body')[this.__DIM_UNIT]()).toFixed(1));
    },

    _calcValueByPercent : function(percent) {
        var scale = this._scale,
            it = (scale.length > 2) ? this._getIntervalByPercent(percent) : 0;
        return calcValueForInterval(scale[it], scale[it + 1], percent);
    },

    /**
     * @param e
     * @throws {NOT_IMPLEMENTED} реализация метода унесена в модификатор `_orientation`
     */
    _calcPercentByEvent : function(e) {
        throw "NOT_IMPLEMENTED";
    },

    _calcValueByEvent : function(e) {
        return this._calcValueByPercent(this._calcPercentByEvent(e));
    },

    /**
     * Возвращает интревал на шкале в который попадает значение `val`
     * @private
     * @param val {Number} Значение в единицах
     * @returns {Number}
     */
    _getIntervalByValue : function(val) {
        var scale = this._scale,
            n = scale.length, i = 1;

        if(val <= scale[0].value) return 0;
        else if(val >= scale[n - 1].value) return n - 2;

        for(i = 1; i < n; i++) {
            if(val < scale[i].value)
                return i - 1;
        }

        return n - 2;
    },

    /**
     * Возвращает интревал на шкале в который попадает значение `percent`
     * @private
     * @param percent {Number} Значение в процентах
     * @returns {Number}
     */
    _getIntervalByPercent : function(percent) {
        if(percent <= 0) return 0;
        else if(percent >= 100) return this._scale.length - 2;

        var scale = this._scale,
            n = scale.length, i;

        for(i = 0; i < n; i++) {
            if(( percent >= scale[i].percent ) &&
                    ( percent < (scale[i + 1] ? scale[i + 1].percent : 100) ))
                return i;
        }

        return n - 2;
    },

    _getClosestRunnerByValue : function(val) {
        var sc = this._scale,
            distance = sc[sc.length - 1].value - sc[0].value,
            runner;

        this._vals.forEach(function(value, i) {
            var valDistance = value - val,
                absDistance = Math.abs(valDistance),
                cRunner;

            if(absDistance <= distance) {
                // проверяем случай если ползунки схлопнуты
                if(runner && absDistance === distance && valDistance > 0) return;

                distance = absDistance;

                cRunner = this.elem('runner').eq(i);
                this.isRunnerDisabled(cRunner) || (runner = cRunner);
            }
        }, this);

        return runner;
    }

});

}(BEM));

/* end: ../../libs/lego/blocks-desktop/b-form-slider/math/b-form-slider__math.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-slider/_orientation/b-form-slider_orientation_horiz.js */
/**
 * @require BEM
 * @require BEM.DOM
 * @require BEM.blocks['b-form-slider']
 */

BEM.DOM.decl({ block: 'b-form-slider', modName: 'orientation', modVal: 'horiz' }, {

    onSetMod : {

        'js' : function() {
            /** @const */
            this.__POS_UNIT = 'left';
            /** @const */
            this.__DIM_UNIT = 'width';
            /** @const */
            this.__ORIGIN = 'X';

            this.__base.apply(this, arguments);
        }

    },

    _getCoordFromEvent : function(e) {
        return typeof e.clientX === 'number' ?
            e.clientX : e.originalEvent.touches[0].clientX;
    },

    _getOffsetPointerCoord : function(e) {
        var runner = e.data.domElem;
        return this._offsetPointer = this._dirrectionCoord = (
            this._getCoordFromEvent(e) - runner.offset().left +
            parseInt(runner.css('margin-left'), 10)).toFixed(2);
    },

    _calcPercentByEvent : function(e) {
        var t = this,
            coord = t._getCoordFromEvent(e);

        t._getDirrectionFromCoord(coord);

        return t._calcPercentByCoord(
            coord - t.elem('body').offset().left - (t._offsetPointer || 0));
    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-slider/_orientation/b-form-slider_orientation_horiz.js */
/* begin: ../../blocks-desktop/b-select-theme/b-select-theme.js */
blocks['b-select-theme'] = function(settings) {
    var blocks = require('bem').blocks;

    return {
        block: 'b-select-theme',
        js: true,
        content: [
            (function() {
                var bemjson = [],
                    bgImages = settings.bgImages.slice(),
                    sortedBgImages = [];

                if (bgImages.length > 5) {
                    // фоны змейкой VB-2807
                    bgImages.forEach(function(image, i) {
                        if (i % 2 === 0)
                            sortedBgImages.push(image);
                    });
                    bgImages.forEach(function(image, i) {
                        if (i % 2 === 1)
                            sortedBgImages.push(image);
                    });
                } else {
                    // если в один ряд, то перемешивать не нужно
                    sortedBgImages = bgImages;
                }

                sortedBgImages.forEach(function(imageObj, i) {
                    var isCurrent = imageObj.id === settings.selectedBgImage,
                        isUser = imageObj.isUser || false;

                    bemjson.push(blocks['b-select-theme__item'](imageObj.id, imageObj.preview, isCurrent, i + 1, isUser));
                });

                return bemjson;
            })()
        ]
    };
};

blocks['b-select-theme__item'] = function(url, iconURL, isCurrent, index, isUser) {
    var item = {
        block: 'b-select-theme',
        elem: 'item',
        js: {
            id: isUser ? 'user' : url
        },
        elemMods: {
            type: 'img',
            index: index,
            user: isUser ? 'yes' : 'no'
        },
        attrs: {
            tabindex: index
        },
        content: [
            {
                block: 'b-select-theme',
                elem: 'select'
            },
            {
                block: 'b-select-theme',
                elem: 'glow'
            },
            {
                elem: 'loader',
                mods: {
                    // у ие все превью лежат локально, троббер здесь не нужен
                    hide: 'yes'
                },
                content: {
                    block: 'b-spin',
                    mods: {
                        progress: 'yes',
                        theme: 'light',
                        size: '30'
                    }
                }
            },
            iconURL && {
                block: 'b-icon',
                mods: {
                    img: 'yes'
                },
                url: iconURL,
                width: 60,
                height: 60
            }
        ]
    };

    if (isCurrent) {
        item.elemMods.state = 'current';
    }
    return item;
};

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('b-select-theme', /** @lends Block.prototype */ {
    _step: 120,

    _animationTime: 200,

    _itemWidth: 60,

    _itemHeight: 60,

    //TODO вводим магическую цифру для вычисления количества обоев
    _maxCount: 5,

    onSetMod: {
        js: function () {
            var _this = this,
                aleft = this.findElem('arrow', 'type', 'left'),
                aright = this.findElem('arrow', 'type', 'right'),
                box = this.findElem('box'),
                slider = this.findElem('slider');

            aleft.hide();
            this.bindTo(aright, 'click', function() {
                if (this.hasMod('ignore-arrows'))
                    return;
                this.setMod('ignore-arrows', 'yes');
                var diff = this._lengthDifference('right'),
                    step = diff === -1 ? this._step : diff;

                box.animate({left: '-=' + step}, _this._animationTime, function () {
                    _this.delMod('ignore-arrows');
                    _this._checkArrows();
                });
            });

            this.bindTo(aleft, 'click', function() {
                if (this.hasMod('ignore-arrows'))
                    return;

                this.setMod('ignore-arrows', 'yes');
                var diff = this._lengthDifference('left'),
                    step = diff === -1 ? this._step : diff;

                box.animate({left: '+=' + step}, _this._animationTime, function () {
                    _this.delMod('ignore-arrows');
                    _this._checkArrows();
                });
            });

            this._checkPics();
            this._redraw();

            // без nextTick не работает
            this.afterCurrentEvent(function() {
                this._checkArrows();
            });
        }
    },

    onElemSetMod: {
        item: {
            state: {

                current: function(elem, modName, modVal, oldVal) {
                    // удаляем галки у остальных
                    this.delMod(this.findElem('item', modName, modVal), modName);
                    // удаляем все тробберы
                    this.setMod(this.findElem('loader'), 'hide', 'yes');
                },

                loading: function(elem, modName, modVal, oldVal) {
                    // удаляем loading у остальных
                    this.delMod(this.findElem('item', modName, modVal), modName);
                    // удаляем троббер у остальных
                    this.setMod(this.findElem('loader'), 'hide', 'yes');
                    // показываем на текущем троббер
                    this.delMod(elem.find(this.buildSelector('loader')), 'hide');

                    // без таймаута на уже загруженные обои слишком рано
                    // прилетит модификатор current, нужен nextTick
                    this.afterCurrentEvent(function() {
                        vb.setBackgroundImage(this.elemParams(elem).id);
                    });

                    var id = this.elemParams(elem).id;
                    vb.stat('settings.bgchange.' + (id === 'user' ? 'userown' : id));
                }
            }
        }
    },

    /*
     * Считаем индекс фона по горизонтали относительного обычного индекса
     * @param {Number} staticIndex обычный индекс
     * @returns {Number} индекс по горизонтали
     *
     * пример:
     * Если всего 8 фонов, то седьмой будет вторым, а пятый - пятым
     */
    _calcHorizontalIndexFromStaticIndex: function(staticIndex) {
        var horizontalIndex,
            count = this.getItemsCount(),
            maxInRowCount = this._maxCount;

        if (count <= maxInRowCount) {
            horizontalIndex = staticIndex;
        } else {
            var countInFirstRow = Math.round(count / 2);

            // 6 vs 5
            if (staticIndex > countInFirstRow) {
                horizontalIndex = staticIndex - countInFirstRow;
            // 4 vs 5
            } else if (staticIndex <= countInFirstRow) {
                horizontalIndex = staticIndex;
            }
        }

        return horizontalIndex;
    },

    _redraw: function() {
        this._recalcWidth();
        this._recalcHeight();
    },

    // удаляет не загрузившиеся превьюшки
    _checkPics: function() {
        var _this = this;

        this.findElem('item').each(function(i, item) {
            var $item = $(item);

            // если будет тригериться раньше времени, можно попробовать так
            // https://github.com/desandro/imagesloaded/issues/50#issuecomment-23354042
            $item.find('.b-icon_img_yes')
                .error(function() {
                    $item.remove();
                    $item = null;
                    _this._redraw();
                    var $current = _this.findElem('item', 'state', 'current'),
                        $first = _this.findElem('item').eq(0),
                        // если текущий пропал, мотаем в начало
                        $elemToScroll = $current.length ? $current : $first;

                    // без nextTick не работает
                    _this.afterCurrentEvent(function() {
                        this._checkArrows();
                    });
                });
        });
    },

    // разница между позицией box и slider
    _lengthDifference: function (direction) {
        var box = this.findElem('box');
        var slider = this.findElem('slider');

        var boxPos = {
            left: box.offset().left,
            right: box.offset().left + box.width()
        };
        var sliderPos = {
            left: slider.offset().left,
            right: slider.offset().left + slider.width()
        };

        if (direction === 'right') {
            if (boxPos[direction] - this._step > sliderPos[direction])
                return -1;
            else
                return boxPos[direction] - sliderPos[direction];
        } else {
            if (boxPos[direction] + this._step < sliderPos[direction])
                return -1;
            else
                return sliderPos[direction] - boxPos[direction];
        }
    },

    _checkArrows: function () {
        var aleft = this.findElem('arrow', 'type', 'left'),
            aright = this.findElem('arrow', 'type', 'right'),
            offset = this._calcRelativePos();

        if (offset.left <= 0)
            aleft.hide();
        else
            aleft.show();

        if (offset.right >= 0)
            aright.hide();
        else
            aright.show();
    },

    _calcRelativePos: function () {
        var box = this.findElem('box');
        var slider = this.findElem('slider');

        var boxPos = {
            left: box.offset().left,
            right: box.offset().left + box.width()
        };
        var sliderPos = {
            left: slider.offset().left,
            right: slider.offset().left + slider.width()
        };

        return {
            left:  Math.round(sliderPos.left - boxPos.left),
            right:  Math.round(sliderPos.right - boxPos.right)
        };

    },

    _recalcWidth: function() {
        var imagesCount = this.getItemsCount(),
            newWidth;

        if (imagesCount <= this._maxCount) {
            newWidth = imagesCount * this._itemWidth; // TODO считать _itemWidth
        } else {
            newWidth = Math.round(imagesCount / 2) * this._itemWidth;
        }

        this.findElem('box').css('width', newWidth);
    },

    _recalcHeight: function() {
        var imagesCount = this.getItemsCount(),
            newHeight;

        if (imagesCount > this._maxCount)
            newHeight =  this._itemHeight * 2;
        else
            newHeight = this._itemHeight;

        this.findElem('slider').css('height', newHeight);
    },

    getItemsCount: function() {
        return $(this.buildSelector('item')).length;
    },

    uploadUserBackground: function() {
        var BEMHTML = require('bemhtml'),
            _this = this,
            blocks = require('bem').blocks;

        vb.stat('settings.bgupload');

        vb.uploadUserBackground(function(newImage) {
            if (!newImage)
                return;

            vb.setBackgroundImage('user');
            vb.stat('settings.bgchange.userown');

            _this.findElem('item', 'user', 'yes').remove();

            // единственный способ узнать, где будет пользовательский фон - перезапросить настройки
            vb.requestSettings(function(settings) {

                var userIndex = 0;

                page().saveSettings(settings, true);
                settings.bgImages.some(function(preview, index) {
                    if (preview.isUser) {
                        userIndex = index;
                        return true;
                    }

                    return false;
                });

                var html = BEMHTML.apply(blocks['b-select-theme__item'](newImage, newImage, true, userIndex, true));

                _this.delMod(_this.findElem('item', 'state', 'current'), 'state');
                _this.findElem('item').eq(userIndex - 2).after(html);
                _this._redraw();
                _this._scrollToElem(_this.findElem('item', 'state', 'current'));
                _this._checkArrows();
            });
        });
    },

    _scrollToElem: function($elem) {
            // номер фона
        var index = parseInt(this.getMod($elem, 'index'), 10),
            box = this.findElem('box'),
            // номер по горизонтали
            horizontalIndex = this._calcHorizontalIndexFromStaticIndex(index),
            // максимальное количество по горизонтали
            horizontalMax = box.width() / this._itemWidth,
            // к какому элементу скролить вплотную по левому краю
            scrollToIndex;

        // TODO хардкодно
        if (horizontalIndex <= 3) {
            scrollToIndex = 1;
        } else if (horizontalIndex + 2 <= horizontalMax && horizontalMax - 2 > 0) {
            scrollToIndex = horizontalIndex - 2;
        } else {
            scrollToIndex = horizontalMax - 4;
        }

        box.css('left', -1 * (scrollToIndex - 1) * this._itemWidth);
    },

    // убираем все тробберы
    rejectBackground: function() {
        this.delMod(this.findElem('item', 'state', 'loading'), 'state');
        this.setMod(this.findElem('loader'), 'hide', 'yes');
    },

    // превью, которая загружается становится текущей
    selectBackground: function() {
        this.setMod(this.findElem('item', 'state', 'loading'), 'state', 'current');
    }

}, /** @lend Block */ {

    live: function() {
        this.liveBindTo({elem: 'item', modName: 'type', modVal: 'img'}, 'focusin click', function(/* Event */ e) {
            var domElem = e.data.domElem,
                // если уже был выбран, то не тригерить событие
                state = this.getMod(domElem, 'state'),
                changed = state !== 'current' && state !== 'loading';

            changed && this.setMod(domElem, 'state', 'loading');
        });

        return false;
    }
});

/* end: ../../blocks-desktop/b-select-theme/b-select-theme.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-button/_type/b-form-button_type_simple.js */
BEM.HTML.decl({ name: 'b-form-button', modName: 'type', modVal: 'simple' }, {

    onBlock : function(ctx) {

        ctx
            .tag(ctx.param('url')? 'a' : 'span')
            .attrs({ href : ctx.param('url'), target : ctx.param('target') })
            .mods({
                size : ctx.mod('size') || 's',
                theme : ctx.mod('theme') || (ctx.mod('type') + '-grey')
            })
            .content(
                {
                    tag : 'span',
                    elem : 'simple',
                    content : ctx.content()
                },
                true)
            .afterContent(
                ctx.param('type')?
                    {
                        elem : 'input',
                        attrs : {
                            value : ctx.param('value') || '',
                            type : ctx.param('type'),
                            name : ctx.param('name'),
                            disabled : ctx.mod('disabled') && 'disabled'
                        }
                    } :
                    { elem : 'click' })
            .js(true)
            .stop();

    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-button/_type/b-form-button_type_simple.js */
/* begin: ../../libs/lego/blocks-desktop/b-form-checkbox/b-form-checkbox.js */
BEM.DOM.decl('b-form-checkbox', {

    onSetMod : {

        'js' : function() {

            var _this = this,
                checkboxElem = _this.elem('checkbox');

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            _this.setMod('checked', checkboxElem.attr('checked')? 'yes' : '');
            activeNode === checkboxElem[0] && _this.setMod('focused', 'yes');

        },

        'focused' : {

            'yes' : function() {

                if(this.isDisabled())
                    return false;

                this.elem('checkbox').focus();

            },

            '' : function() {

                this.elem('checkbox').blur();

            }

        },

        'checked' : function(modName, modVal) {
            this.elem('checkbox').attr('checked', modVal == 'yes');
            this.elem('tick').attr('alt', ((modVal == 'yes')? ' v' : ''));
            this.afterCurrentEvent(function(){
               this.trigger('change');
            });
        },

        'disabled' : function(modName, modVal) {
            this.elem('checkbox').attr('disabled', modVal == 'yes');
        }

    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled', 'yes');
    },

    isChecked : function() {
        return this.hasMod('checked', 'yes');
    },

    toggle : function() {
        this.toggleMod('checked', 'yes', '');
    },

    val : function(val) {
        var checkbox = this.elem('checkbox');
        return val == undefined?
            checkbox.val() :
            checkbox.val(val);
    },

    _onClick : function(e) {
        // Нам нужен только клик левой кнопки мыши и нажатие пробела
        if (e.button) return;

        this.isDisabled() || this.setMod('focused', 'yes');
    },

    _onChange : function(e) {
        e.target.checked?
            this.setMod('checked', 'yes') :
            this.delMod('checked');
    }

}, {

    live : function() {

        this
            .liveBindTo('checkbox', 'click', function(e) {
                this._onClick(e);
            })
            .liveBindTo('checkbox', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('checkbox', 'focusin focusout', function(e) {
                this.setMod('focused', e.type == 'focusin'? 'yes' : '');
            });

        return false;
    }

});

BEM.HTML.decl('b-form-checkbox', {

    onBlock: function(ctx){
        var checkboxAttrs = ctx.param('checkboxAttrs') || {};
        ctx
            .js(true)
            .mix(!ctx.mod('size') ? [{ block: 'b-form-checkbox', mods: { size: 'm' } }] : '')
            .tag('span')
            .tParam('checkboxAttrs', $.extend(checkboxAttrs || {}, {
                id: ctx.param('id') || checkboxAttrs.id || $.identify(),
                checked: ctx.mod('checked') ? 'checked' : undefined,
                disabled: ctx.mod('disabled') ? 'disabled' : undefined
            }))
            .beforeContent({
                elem: 'inner',
                content: [
                    {
                        elem: 'checkbox',
                        attrs: ctx.tParam('checkboxAttrs')
                    },
                    { elem: 'bg' }
                ]
            });
    },

    onElem: {

        'label': function(ctx) {
            ctx
                .tag('label')
                .attr('for', ctx.tParam('checkboxAttrs').id)
        },

        'checkbox': function(ctx){
            ctx
                .tag('input')
                .attrs($.extend(ctx.attrs(), { type: 'checkbox' }))
        },

        'bg': function(ctx){
            ctx
                .tag('i')
                .content({elem: 'tick'})
        },

        'tick': function(ctx){
            ctx.tag('i')
        },

        'inner': function(ctx){
            ctx.tag('span')
        }

    }

});

/* end: ../../libs/lego/blocks-desktop/b-form-checkbox/b-form-checkbox.js */
/* begin: ../../blocks-desktop/b-form-checkbox/_type/b-form-checkbox_type_islands.js */
BEM.DOM.decl({block: 'b-form-checkbox', modName: 'type', modVal: 'islands'}, {
    onSetMod: {
        js: function() {
            this
                .bindTo('leftclick', function(e) {
                    this._onClick(e);
                })
                .bindTo('control', 'change', function(e) {
                    this._onChange(e);
                })
                .bindTo('control', 'focusin focusout', function(e) {
                    this._onFocusInFocusOut(e);
                })
                .bindTo('mouseover mouseout', function(e) {
                    this._onMouseOverMouseOut(e);
                });

            this.setMod('checked', this.elem('control').prop('checked') ? 'yes' : '');
            this._isControlFocused() && this.setMod('focused', 'yes');
        },

        focused: {
            yes: function() {
                if (this.isDisabled())
                    return false;

                this._isControlFocused() || this.elem('control').focus();

                this.setMod(this.elem('box'), 'focused', 'yes');

                this.afterCurrentEvent(function() {
                    this.trigger('focus');
                });
            },

            '': function() {
                this._isControlFocused() && this.elem('control').blur();

                this.delMod(this.elem('box'), 'focused');

                this.afterCurrentEvent(function() {
                    this.trigger('blur');
                });
            }
        },

        checked: function(modName, modVal) {
            this.elem('control').prop('checked', modVal === 'yes');

            this.afterCurrentEvent(function(){
               this.trigger('change');
            });

            this.setMod(this.elem('box'), 'checked', modVal);
        },

        disabled: function(modName, modVal) {
            this.elem('control').prop('disabled', modVal === 'yes');
        }

    },

    /**
     * Шорткат для проверки модификатора `_disabled_yes`
     * @returns {Boolean}
     */
    isDisabled: function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Шоткат для проверки модификатора `_checked_yes`
     * @returns {Boolean}
     */
    isChecked: function() {
        return this.hasMod('checked', 'yes');
    },

    /**
     * Хелпер для переключения модификатора `_checked_yes`
     */
    toggle: function() {
        this.toggleMod('checked', 'yes', '');
    },

    /**
     * Получить/установить значение контрола
     * @param {String} [val] значение которое нужно установить
     * @returns {String|BEM.DOM}
     */
    val: function(val) {
        var checkbox = this.elem('control');

        if (typeof val === 'undefined')
            return checkbox.val();

        checkbox.val(val);

        return this;
    },

    _onClick: function(e) {
        if (this.isDisabled())
            return;

        // для клика по всему, кроме самого инпута, отменяем действие по умолчанию и перекючаем чекбокс сами
        // иначе, при нескольких кликах подряд, чекбокс залипает в неправильном состоянии
        if (e.target !== this.elem('control')[0]) {
            e.preventDefault();

            this.toggle();
        }

        this.setMod('focused', 'yes');
    },

    _onChange: function(e) {
        e.target.checked ?
            this.setMod('checked', 'yes') :
            this.delMod('checked');
    },

    /**
     * Обработчик события получения/потери фокуса
     * @param e
     * @private
     */
    _onFocusInFocusOut: function(e) {
        this.setMod('focused', e.type === 'focusin' ? 'yes' : '');
    },

    _onMouseOverMouseOut: function(e) {
        this.isDisabled() ||
            this.setMod('hovered', e.type === 'mouseover' ? 'yes' : '');
    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @returns {Boolean}
     */
    _isControlFocused: function() {
        try {
            return this.containsDomElem($(this.__self.doc[0].activeElement));
        } catch(e) {
            return false;
        }
    }
});

/* end: ../../blocks-desktop/b-form-checkbox/_type/b-form-checkbox_type_islands.js */
/* begin: ../../blocks-desktop/b-link/_open/b-link_open_apps.js */
BEM.DOM.decl({block: 'b-link', modName: 'open', modVal: 'apps'}, {
    onSetMod: {
        js: function() {
            this.on('click', this._openApps, this);
        }
    },

    destruct: function() {
        this.un('click', this._openApps, this);
        this.__base.apply(this, arguments);
    },

    _openApps: function() {
        vb.stat('panel.apps');
        var link = this.domElem;

        page().findAndDestruct({block: 'b-popupa', modName: 'type', modVal: 'apps'});

        vb.apps.requestList(function(apps) {
            var blocks = require('bem').blocks,
                BEMHTML = require('bemhtml'),
                appsBlock,
                json  = blocks['b-popupa_type_apps'](apps);

            BEM.DOM.append(page().domElem, BEMHTML.apply(json));
            appsBlock = page().findBlockInside({block: 'b-popupa', modName: 'type', modVal: 'apps'});
            appsBlock.show(link);
        });
        this.un('click', this._openApps, this);
    },

    bindClick: function() {
        this.on('click', this._openApps, this);
    }
});

/* end: ../../blocks-desktop/b-link/_open/b-link_open_apps.js */
/* begin: ../../blocks-desktop/b-paranja/b-paranja.js */
blocks['b-paranja'] = function() {
    return {
        block: 'b-paranja',
        js: true,
        mods: {
            hide: cache.get('editingThumb') ? 'no' : 'yes'
        }
    };
};

BEM.DOM.decl('b-paranja', {}, {
    live: function() {
        this.liveBindTo('click', function(){
            if (this.hasMod('hide', 'yes'))
                return;

            var page = this.findBlockOutside('b-page'),
                setting = page.findBlockInside('b-setting'),
                modal = page.findBlockInside({
                    block: 'popup',
                    modName: 'type',
                    modVal: 'modal'
                }),
                statPopup = page.findBlockInside('stat-popup');

            if (statPopup && statPopup.hasMod('visibility', 'visible'))
                return;

            if (modal)
                return;

            setting && setting.setMod('hide', 'yes');

            this.setMod('hide', 'yes');
            channels('dom').emit('paranjaIsHidden');
        });
    }
});

/* end: ../../blocks-desktop/b-paranja/b-paranja.js */
/* begin: ../../blocks-desktop/b-setting/b-setting.js */
blocks['b-setting'] = function() {
    var blocks = require('bem').blocks;

    return {
        block: 'b-setting',
        mods: {
            hide: 'yes',
            arrow: 'yes'
        },
        js: true,
        content: [
            {
                elem: 'tail'
            },
            {
                elem: 'wrapper',
                content: [
                    {
                        elem: 'close'
                    },
                    {
                        elem: 'content',
                        content: [
                            {
                                block: 'b-form-input',
                                mods: {
                                    theme: 'grey',
                                    size: 'l',
                                    type: 'url',
                                    autocomplete: 'yes',
                                    'block-request': 'yes',
                                    autoclosable: 'no'
                                },
                                aria: 'url',
                                js: {
                                    dataprovider: {
                                        name: 'i-vb-search-history-suggest-dataprovider'
                                    },
                                    popupMods: {
                                        size: 'l'
                                    }
                                },
                                placeholder: vb.getLocalizedString('settings.urlInput.placeholder'),
                                content: [
                                    {
                                        elem: 'input'
                                    }
                                ]
                            },
                            {
                                block: 'b-form-input',
                                mods: {
                                    theme: 'grey',
                                    size: 'l',
                                    type: 'title'
                                },
                                role: 'textbox',
                                aria: 'title',
                                placeholder: vb.getLocalizedString('settings.titleInput.placeholder'),
                                content: [
                                    {
                                        elem: 'input'
                                    }
                                ]
                            },
                            {
                                block: 'b-form-button',
                                mods: {
                                    theme: 'islands',
                                    size: 'normal',
                                    name: 'change-thumb-title'
                                },
                                content: vb.getLocalizedString('settings.editTitle')
                            },
                            {
                                block: 'radio-button',
                                js: {id: 'show_to'},
                                mods: {
                                    size: 'm',
                                    theme: 'normal',
                                    name: 'thumb-suggest-source'
                                },
                                name: 'show_to',
                                value: 'top-sites',
                                content: [
                                    {
                                        elem: 'radio',
                                        controlAttrs: {value: 'top-sites', id: 'uniq100'},
                                        content: vb.getLocalizedString('settings.popularSites')
                                    },
                                    {
                                        elem: 'radio',
                                        controlAttrs: {value: 'last-visited', id: 'uniq101'},
                                        content: vb.getLocalizedString('settings.lastVisited')
                                    }
                                ]
                            },
                            blocks['b-tumbs-lib']()
                        ]
                    }
                ]
            }
        ]
    };
};

BEM.DOM.decl('b-setting', {

    _paranja: null,
    _inputUrl: null,
    _inputTitle: null,
    parsedUrl: null,
    _url: null,
    titleManuallyChanged: false,

    onSetMod: {
        js: function() {
            //VB-555
            this._inputUrl = this.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'url'});
            this._inputTitle = this.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'title'});
            this.findParanja();
            this.bindTo('close', 'click', function(){
                this.setMod('hide', 'yes');
            });

            this.parsedUrl = '';

            this._inputTitle.setMod('hide', 'yes');

            //для ИЕ нужно отменить действие по умолчанию при нажатии на Esc
            //Скрываем паранжу по ESC
            this.bindToDoc('keyup', function(e){
                if (e.keyCode == 27) {
                    var popup = this._inputUrl.getPopup();
                    if (popup.hasMod('visibility', 'visible')) {
                        popup.hide();
                    } else {
                        this.setMod('hide', 'yes');
                    }

                }
            });

            this.findBlockOutside('b-page').findBlockInside({
                block: 'b-popupa',
                modName: 'type',
                modVal: 'properties'
            }).hide();

            channels('api').on('action', this._onAction, this);

            this._inputUrl.on('change', this._onInputUrlChange, this);
        },

        hide: {
            '': function() {
                var _this = this,
                    bFormInput = this.findBlockInside({
                        blockName: 'b-form-input',
                        modName: 'type',
                        modVal: 'url'
                    }),
                    bFormInputTitle = this.findBlockInside({
                        blockName: 'b-form-input',
                        modName: 'type',
                        modVal: 'title'
                    });

                page().setMod('width', 'big');

                var changeTitleButton = this.findBlockInside({
                    block: 'b-form-button',
                    modName: 'name',
                    modVal: 'change-thumb-title'
                });

                changeTitleButton.domElem.show();
                bFormInputTitle.setMod('hide', 'yes');

                changeTitleButton.bindTo('click', function() {
                    bFormInputTitle.delMod('hide');
                    changeTitleButton.domElem.hide();
                });

                this.bindToDoc('keydown', function(e) {
                    // В ИЕ по умолчанию при нажатии на esc очищается поле input
                    if (e.keyCode == 27)
                        e.preventDefault();
                    if (e.keyCode == 13) {
                        if (this.getMod('action') === 'add') {
                            var hoveredSuggestItem = bFormInput._getPopup().findBlockInside({
                                blockName: 'b-autocomplete-item',
                                modName: 'hovered',
                                modVal: 'yes'
                            });
                            if (hoveredSuggestItem) {
                                var index = parseInt(hoveredSuggestItem.getMod('index'), 10) + 1;
                                this._submit('thumb.adddone.suggest.' + index);
                            } else {
                                this._submit('thumb.adddone.text');
                            }
                        } else {
                            this._submit();
                        }
                    }
                });
                this._url = this._inputUrl && this._inputUrl.val() || '';
                this.titleManuallyChanged = false;
                this.parsedUrl = require('parseURL')(this._url);
                this._inputUrl.setMod('block-request', 'yes');
                this.afterCurrentEvent(function() {
                    var bPage = _this.findBlockOutside('b-page');

                    $(bFormInput.domElem).find('input').select();
                    $('html, body').scrollTop(_this.domElem.offset().top - 80);
                    _this._paranja.delMod('hide');
                });
                this.positionTail();

                channels('dom').emit('thumbSettingsShown');
                channels('api').revoke('thumbChanged', true);
            },

            yes: function() {
                var bPage = page(),
                    thumbs = bPage.findBlockInside('b-tumbs');
                if (cache.get('settings').x < 5) {
                    page().delMod('width');
                }
                bPage.findBlocksInside('b-tumb').forEach(function(thumb) {
                    thumb.delMod('state');
                });
                thumbs.delMod(thumbs.findElem('item', 'editing', 'yes'), 'editing');
                thumbs.findBlockInside({block: 'b-tumb', modName: 'editing', modVal: 'yes'}).delMod('editing');
                this._inputUrl.domElem.find('input').blur();
                if (vb.navigator === 'ie') {
                    this._inputTitle.domElem.find('input').blur();
                }
                this._paranja.setMod('hide', 'yes');
                this.unbindFromDoc('keydown');
                this._inputUrl.getPopup().hide();

                var editingThumb = cache.get('editingThumb');
                delete editingThumb.data;
                // сначала ставим статус {index: номер_тумбы}, затем сбрасываем совсем,
                // чтобы тумба сначала перерисовалась обратно, а затем потеряла статус редактируемой
                cache.set('editingThumb', editingThumb);
                cache.reset('editingThumb');

                page().findBlockInside('b-tumb')
                    .startDnD();
                this.findBlockInside('radio-button').val('top-sites');
                channels('dom').emit('thumbSettingsHidden');
                this.findBlockInside('b-tumbs-lib').drawThumbsByData(0, null, new Array(10));

                $('.b-tumbs').bem('b-tumbs').destruct();

                var BEMHTML = require('bemhtml'),
                    blocks = require('bem').blocks,
                    thumbsHTML = BEMHTML.apply(blocks['b-tumbs'](cache.get('thumbs')));

                BEM.DOM.prepend($('.b-vb__content .b-vb__td'), (thumbsHTML));
                channels('api').invoke('thumbChanged');
                channels('dom').emit('layoutChanged');
            }
        }
    },

    destruct: function() {
        this._inputUrl.un('change', this._onInputUrlChange, this);
        this._paranja = null;
        this._inputUrl = null;
        this._inputTitle = null;
        this.parsedUrl = null;
        this._url = null;

        channels('api').off('action', this._onAction);
        this.__base.apply(this, arguments);
    },

    findParanja: function() {
        this._paranja = this.findBlockOutside('b-page').findBlockInside('b-paranja');
    },

    positionTail: function() {
        var tail = this.findElem('tail'),
            editingThumb = this.findBlockOutside('b-page').findBlockInside({block: 'b-tumb', modName: 'editing', modVal: 'yes'});

        if (!editingThumb || !editingThumb.domElem)
            return;

        var $editingThumb = editingThumb.domElem,
            position = $editingThumb.offset(),
            height = parseInt($editingThumb.height(), 10),
            width = parseInt($editingThumb.width(), 10);

        this.domElem.css('top', Math.round(position.top + height) + 'px');
        tail.css('left', Math.round(position.left - 14 + width / 2) + 'px');
    },

    _onAction: function(e) {
        if (e.type === 'openSettings' || e.type === 'removeThumb')
            this.setMod('hide', 'yes');
    },

    _onInputUrlChange: function(e) {
        // VB-530
        // Дизейблим кнопку если текущее значение пустое
        var url = this._inputUrl && this._inputUrl.val() || '';

        if (!url.trim()) {
            this._inputTitle.val('');
        }

        if (!this.titleManuallyChanged) {
            this._inputTitle.val('');
        }
    },

    /**
     * Обработчик отправки формы редактирования параметров тумбы
     */
    _submit: function(statparam) {
        var url = this.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'url'}).val().trim(),
            title = this.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'title'}).val(),
            newItem = {
                pinned: true,
                url: url,
                title: title || ''
            };

        this.submitThumb(statparam, newItem);
    },

    submitThumb: function(statparam, newItem) {
        var BEM = require('bem').BEM,
            BEMHTML = require('bemhtml'),
            blocks = require('bem').blocks,
            bPage = page(),
            thumbs = cache.get('thumbs'),
            bThumb = bPage.findBlockInside({
                block: 'b-tumb',
                modName: 'editing',
                modVal: 'yes'
            }),
            index = parseInt(bThumb.getMod('index'), 10);

        $('.b-tumbs').bem('b-tumbs').delMod('empty-row');
        // если нет урла или он начинается с двоеточия либо в нем есть пробелы, то просто закрываем
        var invalidURL = (/^:|\s/).test(newItem.url);
        if (invalidURL || !newItem.url ) {
            this.setMod('hide', 'yes');
            return;
        }

        if (this._url === newItem.url) {
            newItem = $.extend({}, bThumb.params.item, {pinned: true, title: newItem.title || '', url: newItem.url});
        }

        // Заменяем тумбу тумбой полученной после редактирования
        BEM.DOM.update(bThumb.domElem.parent(), BEMHTML.apply(
            blocks['b-tumb'](newItem, index, bThumb.domElem.width())
        ));

        thumbs[index] = $.extend({}, newItem);

        this.setMod('hide', 'yes');
        vb.saveThumb(index, {
            title: thumbs[index].title,
            url: thumbs[index].url
        });

        if (this.getMod('action') === 'add') {
            vb.stat(statparam);
        } else {
            // только при изменении урла/тайтла отправляем статистику
            if (bThumb.params.item.url !== newItem.url || bThumb.params.item.title !== newItem.title)
                vb.stat('thumb.setdone');
        }

        cache.set('thumbs', thumbs);
    }
});

/* end: ../../blocks-desktop/b-setting/b-setting.js */
/* begin: ../../blocks-desktop/b-tumbs-lib/b-tumbs-lib.js */
blocks['b-tumbs-lib'] = function() {
    var rows = [],
        Lib = require('lib'),
        size = 200,
        blocks = require('bem').blocks,
        z = 0;

    for (var i = 0; i < 2; i++) {
        var items = [];

        for (var j = 0; j < 5; j++) {
            items.push({
                elem: 'item',
                content: blocks['b-tumb'](null, z, size, true)
            });
            z++;
        }

        rows.push({
            elem: 'row',
            content: items
        });
    }

    return {
        block: 'b-tumbs-lib',
        js: true,
        content: [
            {
                elem: 'arrow',
                elemMods: {type: 'left', state: 'disabled'},
                mix: [{
                    block: 'i-action',
                    elem: 'more-tumbs-left'
                }]
            },
            {
                elem: 'arrow',
                elemMods: {type: 'right'},
                mix: [{
                    block: 'i-action',
                    elem: 'more-tumbs-right'
                }]
            },
            {
                elem: 'wrap',
                content: {
                    elem: 'content',
                    content: rows
                }
            }
        ]
    };
};

BEM.DOM.decl('b-tumbs-lib', {
    // еще бывает 'last-visited'
    _defaultSuggestMode: 'top-sites',

    onSetMod: {
        js: function() {
            var self = this,
                radio = this._radio = this.findBlockOutside('b-setting').findBlockInside('radio-button');

            radio.on('change', function(e, data) {
                // API:
                // data.current instanceof jQuery
                // data.prev instanceof jQuery
                self._mode = radio.val();
                self.drawThumbsByOffset(0, self._mode);
            });

            channels('api').on('historyThumbChanged', this._onHistoryThumbChanged, this);
            channels('dom').on('thumbSettingsShown', this._onSettingsShown, this);
            channels('dom').on('thumbSettingsHidden', this._onSettingHidden, this);
        }
    },

    destruct: function() {
        var BEM = require('bem').BEM;

        // Удаляем  обработчики вместе с уничтожением объекта
        channels('api').off('historyThumbChanged', this._onHistoryThumbChanged);
        channels('dom').off('thumbSettingsShown', this._onSettingsShown);
        channels('dom').off('thumbSettingsHidden', this._onSettingHidden);

        // Вызывавем базовый метод
        this.__base.apply(this, arguments);
    },

    _onSettingHidden: function() {
        this._radio.val(this._defaultSuggestMode);
        this._mode = this._defaultSuggestMode;
    },

    _onSettingsShown: function() {
        this._radio.val(this._defaultSuggestMode);
        this._mode = this._defaultSuggestMode;
        this.drawThumbsByOffset(0);
    },

    drawThumbsByOffset: function (offset, newMode) {
        newMode = newMode || this._mode;
        var _this = this;

        vb[this._mode === 'top-sites' ? 'requestPopularSites' : 'requestLastVisited'](offset, function(items) {
            _this.drawThumbsByData(offset, newMode, items);
        });
    },

    drawThumbsByData: function(offset, newMode, items) {
        newMode = newMode || this._mode;
        var Lib = require('lib'),
            BEM = require('bem').BEM,
            blocks = require('bem').blocks,
            BEMHTML = require('bemhtml'),
            elems = this.findElem('item'),
            blockRightArrow = items.length < 11,
            z = 0,
            i,
            rows = [];

        // VB-3325
        var maxItemsLength = 10;

        items.length = Math.min(items.length, 10);

        var shuffledItems = [],
            shuffledIndexes = [];

        for (i = 0; i < maxItemsLength; i++) {
            if (i % 2 === 0) {
                shuffledItems.push(items[i]);
                shuffledIndexes.push(i);
            }
        }
        for (i = 0; i < maxItemsLength; i++) {
            if (i % 2 !== 0) {
                shuffledItems.push(items[i]);
                shuffledIndexes.push(i);
            }
        }

        for (i = 0; i < 2; i++) {
            var thumbs = [];

            for (var j = 0; j < 5; j++) {
                if (!shuffledItems[z] || !shuffledItems[z].url) {
                    shuffledItems[z] = null;
                    blockRightArrow = true;
                }

                thumbs.push({
                    elem: 'item',
                    content: blocks['b-tumb'](shuffledItems[z], shuffledIndexes[z], 200, true)
                });
                z++;
            }

            rows.push({
                elem: 'row',
                content: thumbs
            });
        }

        var html = BEMHTML.apply({
            block: 'b-tumbs-lib',
            elem: 'content',
            content: rows
        });

        var prevOffset = this.getMod('offset');
        this._prevMode = this._prevMode || this._defaultSuggestMode;

        var animatedTransition = false;

        prevOffset = prevOffset || 0;

        if (newMode === this._prevMode && prevOffset !== offset) {
            prevOffset = parseInt(prevOffset, 10);
            animatedTransition = true;
        }

        this._prevMode = newMode;

        var leftArrow = this.findElem('arrow', 'type', 'left'),
            rightArrow = this.findElem('arrow', 'type', 'right');

        this.setMod(leftArrow, 'state', 'disabled');
        this.setMod(rightArrow, 'state', 'disabled');
        this._appendContainerHTML(html, animatedTransition, prevOffset < offset ? 'left' : 'right', function() {
            this.setMod('offset', offset);
            if (offset > 0) {
                this.delMod(leftArrow, 'state');
            } else {
                this.setMod(leftArrow, 'state', 'disabled');
            }

            if (blockRightArrow) {
                this.setMod(rightArrow, 'state', 'disabled');
            } else {
                this.delMod(rightArrow, 'state');
            }

            setTimeout(function() {
                BEM.DOM.init();
            }, 0);
        }.bind(this));
    },

    _appendContainerHTML: function(html, animatedTransition, direction, callback) {
        var content = this.findElem('content');

        if (!animatedTransition) {
            content.replaceWith(html);
            callback();
        } else {
            var BEMHTML = require('bemhtml'),
                animationContainer = $(BEMHTML.apply({
                    block: 'b-tumbs-lib',
                    elem: 'animation-container'
                })),
                wrap = this.elem('wrap'),
                THUMBS_MARGIN = 20,
                contentWidth = content.width() + THUMBS_MARGIN,
                $html = $(html);

            animationContainer.appendTo(wrap);
            animationContainer.css({
                position: 'absolute',
                left: direction === 'left' ? 0 : -contentWidth
            });
            content.appendTo(animationContainer);
            $html.css({
                left: direction === 'left' ? contentWidth : 0
            });
            content.css({
                left: direction === 'left' ? 0 : contentWidth
            });
            $html.appendTo(animationContainer);
            animationContainer.animate({
                left: direction === 'left' ? -contentWidth : 0
            }, 500, function() {
                $html.appendTo(wrap);
                $html.css('left', 0);
                BEM.DOM.destruct(animationContainer);
                callback();
            });
        }
    },

    _onHistoryThumbChanged: function(item) {
        var self = this,
            thumbs = this.findBlocksInside('b-tumb').filter(function(thumb) {
                if (thumb.params.item.url === item.url)
                    return true;
            });

        if (!thumbs.length)
            return;

        var blocks = require('bem').blocks,
            BEM = require('bem').BEM,
            BEMHTML = require('bemhtml'),
            Lib = require('lib'),
            size = Lib.getSuggestedThumbSize(),
            thumb = thumbs[0],
            BEMJSON = blocks['b-tumb'](item, thumb.getMod('index'), size, true);

        BEM.DOM.update(thumb.domElem.parent(), BEMHTML.apply(BEMJSON));
    }
});

/* end: ../../blocks-desktop/b-tumbs-lib/b-tumbs-lib.js */
/* begin: ../../libs/islands-components/common.blocks/radiobox/radiobox.js */
(function(BEM, undefined) {

/**
 * Блок `radiobox` – «радио-группа», состоящая из набора зависимых переключателей
 * «радио-кнопок» (элементы блока `radio`).
 */
BEM.DOM.decl('radiobox', {

    /**
     * @private
     */
    onSetMod: {

        js: function() {

            var _this = this;

            _this._val = _this.findElem(_this.elem('radio', 'checked', 'yes'), 'control').val();

            _this.elem('control').each(function(i, control) {
                var mods = [];

                if(_this._isControlFocused($(control))) {
                    mods.push('focused');
                }

                if(control.checked) {
                    mods.push('checked');
                }

                if(mods[0]) {
                    var radio = _this.__self._getRadioByElem($(control));

                    mods.forEach(function(modName) {
                        _this.setMod(radio, modName, 'yes');
                    });
                }
            });

        },

        disabled: {

            'yes': function() {
                this.setMod(this.elem('radio'), 'disabled', 'yes');
            },

            '': function() {
                this.delMod(this.elem('radio'), 'disabled');
            }

        }

    },

    /**
     * @private
     */
    onElemSetMod: {

        radio: {

            focused: {

                yes: function(elem) {
                    this.delMod(this.elem('radio', 'focused', 'yes'), 'focused');

                    var control = this.findElem(elem, 'control');

                    this._isControlFocused(control) || control.focus();

                    this.afterCurrentEvent(function() {
                        this.trigger('focus', {current: elem});
                    });
                },

                '': function(elem) {
                    this.afterCurrentEvent(function() {
                        this.trigger('blur', {prev: elem});
                    });
                }

            },

            checked: {

                yes: function(elem) {
                    this._val = this.findElem(elem, 'control')
                        .prop('checked', true)
                        .val();

                    var prev = this.elem('radio', 'checked', 'yes');
                    this.delMod(prev, 'checked');

                    this.trigger('change', {
                        current: elem,
                        prev: prev
                    });
                }

            },

            hovered: function(elem) {

                return !this.isDisabled(elem);

            },

            disabled: function(elem, modName, modVal) {

                elem.find(this.buildSelector('control')).prop('disabled', modVal === 'yes');

            }

        }

    },

    /**
     * Проверяет в фокусе ли контрол.
     *
     * @private
     * @param {jQuery} control
     * @returns {Boolean}
     */
    _isControlFocused: function(control) {

        try {
            return control[0] === this.__self.doc[0].activeElement;
        } catch(e) {
            return false;
        }

    },

    /**
     * Шорткат для проверки модификатора `_disabled_yes`.
     *
     * @public
     * @param {jQuery} radio кнопка, состояние которой необнодимо проверить
     * @returns {Boolean}
     */
    isDisabled: function(radio) {

        return this.hasMod(radio, 'disabled', 'yes');

    },

    /**
     * Метод можно вызывать с параметром и без.
     * Вызвав без парамерта получаем значение аттрибута value элемента radio, соответствующего активной кнопке.
     * Вызвав с парамертом, в котором передаем значение аттрибута value произвольного элемента radio,
     * делаем активной кнопку, соответствующую этому элементу radio.
     *
     * @public
     * @param {String} [val] Значение аттрибута value какого-либо элемента radio данного блока.
     * @returns {String|BEM.DOM} Аттрибут value активного элемента radio, либо объект блока
     */
    val: function(val) {

        if(typeof val === 'undefined') {
            return this._val;
        }

        var _this = this;
        this.elem('control').each(function(i, control) {
            if(control.value === val) {
                _this.setMod(_this.__self._getRadioByElem($(control)), 'checked', 'yes');
                return false;
            }
        });
        return _this;

    },

    /**
     * Возвращает/устанавливает имя нативного контрола.
     *
     * @public
     * @param {String} [val] Новое имя для контрола.
     * @returns {String|BEM.DOM}
     */
    name: function(val) {
        var control = this.elem('control');

        if(!arguments.length) {
            return control.attr('name');
        }

        control.attr('name', val);

        return this;
    },

    /**
     * Метод позволяет получить активный элемент radio блока.
     *
     * @public
     * @returns {jQuery} DOM elements
     */
    getCurrent: function() {

        return this.findElem('radio', 'checked', 'yes');

    },

    /**
     * Метод позволяет перевести все кнопки блока в ненажатое состояние.
     *
     * @public
     * @returns {BEM.DOM} Объект блока
     */
    uncheckAll: function() {

        var prevRadio = this.elem('radio', 'checked', 'yes');

        this.delMod(prevRadio, 'checked')
            .findElem(prevRadio, 'control')
            .prop('checked', false);

        this._val = undefined;

        this.trigger('change', {
            current: undefined,
            prev: prevRadio
        });

        return this;

    },

    /**
     * Обработчик клика левой кнопки мыши по radio.
     *
     * @private
     * @param {jQuery.Event} e
     */
    _onLeftClick: function(e) {

        this.isDisabled(e.data.domElem) || this.setMod(e.data.domElem, 'focused', 'yes');

    },

    /**
     * Обработчик изменения значения контрола.
     *
     * @private
     * @param {jQuery.Event} e
     */
    _onChange: function(e) {

        // Событие change тригерится только при свойстве checked === true
        this.setMod(this.__self._getRadioByElem(e.data.domElem), 'checked', 'yes');

    }

}, {

    live: function() {

        this
            .liveBindTo('radio', 'leftclick tap', function(e) {
                this._onLeftClick(e);
            })
            .liveBindTo('control', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('radio', 'mouseover mouseout', function(e) {
                this.setMod(e.data.domElem, 'hovered', e.type === 'mouseover' ? 'yes' : '');
            })
            .liveBindTo('control', 'focusin focusout', function(e) {
                this.setMod(
                    this.__self._getRadioByElem(e.data.domElem),
                    'focused',
                    e.type === 'focusin' ? 'yes' : '');
            });

        return false;
    },

    /**
     * Позволяет получить элемент radio (radiobox__radio) по какому-либо потомку этого элемента в DOM-дереве.
     */
    _getRadioByElem: function(elem) {
        // метод вынесен в статические методы класса, так как он никак не зависит от инстансов

        return elem.closest(this.buildSelector('radio'));

    }

});

})(BEM);

/* end: ../../libs/islands-components/common.blocks/radiobox/radiobox.js */
/* begin: ../../libs/islands-components/common.blocks/radio-button/radio-button.js */
(function(BEM, undefined) {

/**
 * Блок `radio-button` – «радио-группа», состоящая из набора зависимых
 * переключателей «радио-кнопок» (элементы блока `radio`) в виде кнопок.
 */
BEM.DOM.decl({block: 'radio-button', baseBlock: 'radiobox'}, {

    /**
     * @private
     */
    onElemSetMod: {

        'radio': {

            'checked': function(elem, modName, modVal) {
                this.__base.apply(this, arguments);

                this.setMod(elem, 'pressed', modVal);
            },

            'next-for-pressed': {

                'yes': function() {
                    this.delMod(this.elem('radio', 'next-for-pressed', 'yes'), 'next-for-pressed');
                }

            },

            'pressed': {

                'yes': function(elem) {
                    this
                        .delMod(this.elem('radio'), 'pressed')
                        .setMod(elem.next(), 'next-for-pressed', 'yes');
                },

                '': function(elem) {
                    this.delMod(elem.next(), 'next-for-pressed');
                }

            }

        }

    },

    /**
     * @private
     */
    _onMouseDown: function(e) {

        var radio = e.data.domElem;

        if(this.isDisabled(radio) || this.hasMod(radio, 'checked', 'yes')) {
            return;
        }

        this.setMod(radio, 'pressed', 'yes');

        this.bindToDoc('mouseup touchend', function(e) {
            this.afterCurrentEvent(function() {

                var control = this.findElem(radio, 'control');

                if(!control.prop('checked')) {
                    if(radio.find(e.target).add(radio).length) {

                        /*
                         * Если mouseup произошел на элементе radio или его потомке, но активация соответствующего
                         * control'a не произошла, то форсим ее.
                         * https://st.yandex-team.ru/ISLCOMPONENTS-482
                         */
                        control.trigger('change').focus();
                    } else {
                        this
                            .delMod(radio, 'pressed')
                            .setMod(this.elem('radio', 'checked', 'yes'), 'pressed', 'yes');
                    }
                }

            });

            this.unbindFromDoc('mouseup touchend');
        });

    }

}, {

    live: function() {
        this.__base.apply(this, arguments);

        this.liveBindTo('radio', 'mousedown', function(e) {
            this._onMouseDown(e);
        });

        return false;
    }

});

})(BEM);

/* end: ../../libs/islands-components/common.blocks/radio-button/radio-button.js */
/* begin: ../../blocks-desktop/b-form-input/_type/b-form-input_type_url.js */
/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({block: 'b-form-input', modName: 'type', modVal: 'url'}, {

    onSetMod: {
        js: function() {
            this.on('select', this._onAutocompleteSelect, this);
            this.__base.apply(this, arguments);
        }
    },

    destruct: function() {
        this.un('select', this._onAutocompleteSelect, this);
        this.__base.apply(this, arguments);
    },

    _onAutocompleteSelect: function(e, data) {
        var block = e.block,
            bSetting = block.findBlockOutside('b-setting'),
            bTitle = bSetting.findBlockInside({block: 'b-form-input', modName: 'type', modVal: 'title'});

        // Выставляем url и заголовок в соответствующие поля формы
        block.val(data.item.params.url);
        if (bTitle) {
            bTitle.val(data.item.params.title);
        }
        return true;
    }

});

})();

/* end: ../../blocks-desktop/b-form-input/_type/b-form-input_type_url.js */
/* begin: ../../blocks-desktop/b-form-input/_type/b-form-input_type_title.js */
(function(undefined) {

BEM.DOM.decl({block: 'b-form-input', modName: 'type', modVal: 'title'}, {

    onSetMod: {
        js: function() {
            this.on('change', this._onChange, this);
            this.__base.apply(this, arguments);
        },

        focused: function() {
            this
                .findBlockOutside('b-setting')
                .findBlockInside({block: 'b-form-input',modName: 'type', modVal: 'url'})
                .delMod('focused');
            this.__base.apply(this, arguments);
        }
    },

    _onChange: function () {
        var self = this,
            bSetting = self.findBlockOutside('b-setting');

        bSetting.titleManuallyChanged = true;
    }

});

})();

/* end: ../../blocks-desktop/b-form-input/_type/b-form-input_type_title.js */

/* added by builder */
return {
    "BEM": BEM,
    "blocks": blocks
};
}),
"parseURL": (function (require) { /* wrapped by builder */
// This function creates a new anchor element and uses location
// properties (inherent) to get the desired URL data. Some String
// operations are used (to normalize results across browsers).

var cache = {};

function parseURL(url) {
    if (cache[url])
        return cache[url];

    var a =  document.createElement('a');
    a.href = url;

    var res;

    try {
        res = {
            source: url,
            protocol: a.protocol.replace(':',''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function(){
                var ret = {},
                    seg = a.search.replace(/^\?/,'').split('&'),
                    len = seg.length, i = 0, s;
                for (;i<len;i++) {
                    if (!seg[i]) { continue; }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
            hash: a.hash.replace('#',''),
            path: a.pathname.replace(/^([^\/])/,'/$1'),
            relative: (a.href.match(/tp:\/\/[^\/]+(.+)/) || [,''])[1],
            segments: a.pathname.replace(/^\//,'').split('/')
        };
    } catch (e) {
        res = url;
    }

    cache[url] = res;

    return res;
}


/* added by builder */
return parseURL;
}),
"scroll": (function (require, exports, module) { /* wrapped by builder */
$.fn.hasScroll = function() {
    return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : false;
};

$.pageHasVerticalScroll = function() {
    return $(document).height() > $(window).height();
};

$.isHorizontalScroll = function() {
    var $doc = $(document),
        scrollLeft = $doc.scrollLeft();

    if (scrollLeft > 0)
        return true;

    $doc.scrollLeft(1);

    if ($doc.scrollLeft() > 0)
        return true;

    $doc.scrollLeft(0);

    return false;
};

}),
"modals": (function (require) { /* wrapped by builder */
// запрещаем фокус у всех элементов страницы
function removeTabIndexes() {
    $('*').each(function(i, elem) {
        var $elem = $(elem),
            attr = $elem.attr('tabIndex');

        if (attr) {
            $elem
                .attr('tabIndex', '-1')
                .data('oldIndex', attr);
        } else {
            $elem.attr('tabIndex', '-1');
        }
    });
}

// возвращаем фокус
function recoverTabIndexes() {
    $('[tabIndex]').removeAttr('tabIndex');
    $('[oldIndex]').each(function(i, elem) {
        var $elem = $(elem);

        $elem.attr('tabIndex', $elem.attr('oldIndex'));
    });
}

/**
 * Модуль работы с модальными окнами
 */
var modals = {

    /**
     * Показать модальное окно
     *
     * @param {String} name уникальный идентификатор окна ['confirm']
     * @param {String|Null} text (необяз.)
     * @param {Function|Null} handler (необяз.)
     */
    showModal: function(name, text, handler) {
        removeTabIndexes();
        // TODO правильнее делать очередь появления окон
        // но сейчас это не нужно, поэтому просто скрываем
        this.hideModals();

        var blocks = require('bem').blocks,
            BEMHTML = require('bemhtml'),
            bemjson = blocks['popup_type_modal'](name, text),
            html = BEMHTML.apply(bemjson);

        BEM.DOM.append($('.b-content'), html);
        var popup = $('.popup_type_modal').bem('popup');
        popup.show();
        $('.b-paranja').bem('b-paranja').delMod('hide');
        popup.addListener(handler);
    },

    confirm: function(text, handler) {
        this.showModal('confirm', text || null, function(res) {
            recoverTabIndexes();
            handler && handler(res);
        });
    },

    alert: function(text, handler) {
        this.showModal('alert', text || null, function() {
            recoverTabIndexes();
            handler && handler();
        });
    },

    hideModals: function() {
        BEM.DOM.destruct($('.popup_type_modal'));
        $('.b-paranja').bem('b-paranja').setMod('hide', 'yes');
    }
};


/* added by builder */
return modals;
}),
"preloader": (function (require) { /* wrapped by builder */

var preloader = {
    load: function() {
        load([].slice.call(arguments));
    }
};

var container;

function load(bemjson) {
    var html = require('bemhtml').apply(bemjson);

    container = container || $('<div>')
        .css({
            position: 'absolute',
            left: '-9999px',
            top: '-9999px',
            opacity: '0'
        })
        .html(html)
        .appendTo($(document.body));

    var imagesToLoad = [];

    container.find('*').each(function(i, elem) {
        var $elem = $(elem),
            rule = $elem.css('backgroundImage');

        $elem.show();
        if (rule && rule !== 'none' && /url/.test(rule)) {
            // TODO можно сделать изящнее и лучше
            // url("chrome://blabla.png") -> chrome://blabla.png
            var url = /url\("?'?([^"\s]+)"?'?\)/.exec(rule)[1];

            if (url)
                imagesToLoad.push(url);
        }
    });

    var imagesCount = imagesToLoad.length;

    imagesToLoad.forEach(function(url) {
        $('<img>')
            .attr('src', url)
            .appendTo(container)
            .load(function() {
                imagesCount--;

                if (imagesCount <= 0) {
                    container.remove();
                    container = null;
                }
            });
    });

}


/* added by builder */
return preloader;
}),
"cache": (function (require, exports, module) { /* wrapped by builder */
/* global exports */

function Cache () {
    this._storage = {};
}

function prepareThumbs(thumbs) {
    var filteredThumbs = {};

    Object.keys(thumbs).forEach(function(index) {
        var thumb = thumbs[index];

        if (thumb && thumb.url) {
            filteredThumbs[index] = thumb;
        }
    });

    return filteredThumbs;
}

Cache.prototype = {
    set: function(key, value) {
        var oldVal = this._storage[key];

        if (key === 'thumbs') {
            value = prepareThumbs(value);
        }

        this._storage[key] = value;
        channels('cache').emit(key, [value, oldVal], true);
    },

    get: function(key) {
        return this._storage[key];
    },

    reset: function(key, dontEmit) {
        var prevVal = this._storage[key];

        delete this._storage[key];

        if (!dontEmit) {
            channels('cache').emit(key, [undefined, prevVal], true);
        }
    }
};

exports.Cache = Cache;

}),
"channels": (function (require, exports, module) { /* wrapped by builder */
(function() {
    var listeners = {};
    var _channels = {};

    function Channel(name) {
        this.name = name;

        this._eventCache = {};

        this._revoked = {};
        this._accumulate = {};
    }

    Channel.prototype = {
        constructor: Channel,

        emit: function(eventName, data, applyData) {
            var handlers = listeners[this.name];

            if (this._revoked[eventName]) {
                if (this._accumulate[eventName]) {
                    this._eventCache[eventName].push({data: data, applyData: applyData});
                }
                return;
            }

            if (handlers && handlers[eventName]) {
                handlers[eventName].forEach(function(handlerData) {
                    handlerData.callback[applyData ? 'apply' : 'call'](handlerData.ctx, data);
                });
            }
        },

        on: function(eventName, callback, ctx) {
            listeners[this.name] = listeners[this.name] || {};
            listeners[this.name][eventName] = listeners[this.name][eventName] || [];
            listeners[this.name][eventName].push({callback: callback, ctx: ctx || {}});
        },

        /**
         * Игнорировать emit для события
         * @param {String} eventName
         * @param {Boolean} [accumulate=false]
         */
        revoke: function(eventName, accumulate) {
            this._revoked[eventName] = true;
            this._eventCache[eventName] = [];
            this._accumulate[eventName] = accumulate || false;
        },

        invoke: function(eventName) {
            this._revoked[eventName] = false;
            this._accumulate[eventName] = false;

            this._eventCache[eventName].forEach(function(cachedData) {
                this.emit(eventName, cachedData.data, cachedData.applyData);
            }, this);

            this._eventCache[eventName] = [];
        },

        off: function(eventName, callback) {
            listeners[this.name] = listeners[this.name] || {};
            var eventListeners = listeners[this.name][eventName] = listeners[this.name][eventName] || [];
            var indexes = [];

            eventListeners.forEach(function(listenerData, i) {
                if (listenerData.callback === callback) {
                    indexes.push(i);
                }
            });

            var removedCount = 0;

            indexes.forEach(function(index) {
                index -= removedCount;
                eventListeners.splice(index, 1);
                removedCount++;
            }, this);
        }
    };

    window.channels = function (name) {
        if (!name) {
            throw new Error('Name of channel should be provided');
        }

        var channel = _channels[name] = _channels[name] || new Channel(name);

        return channel;
    };
})();

}),
"utils": (function (require, exports, module) { /* wrapped by builder */
/* global exports */

function isSameObjects(obj1, obj2) {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        if (obj1 === null || obj2 === null) {
            return obj1 === obj2;
        }

        for (var key in obj1) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                if (!isSameObjects(obj1[key], obj2[key]))
                    return false;
            } else {
                if (obj1[key] !== obj2[key])
                    return false;
            }
        }
        return Object.keys(obj1).length === Object.keys(obj2).length;
    } else {
        return obj1 === obj2;
    }
}

exports.isSameObjects = isSameObjects;

}),
"transit": (function (require, exports, module) { /* wrapped by builder */
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2014 Rico Sta. Cruz
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

/* jshint expr: true */

;(function (root, factory) {

    factory(root.jQuery);

}(this, function($) {

  $.transit = {
    version: "0.9.12",

    // Map of $.css() keys to values for 'transitionProperty'.
    // See https://developer.mozilla.org/en/CSS/CSS_transitions#Properties_that_can_be_animated
    propertyMap: {
      marginLeft    : 'margin',
      marginRight   : 'margin',
      marginBottom  : 'margin',
      marginTop     : 'margin',
      paddingLeft   : 'padding',
      paddingRight  : 'padding',
      paddingBottom : 'padding',
      paddingTop    : 'padding'
    },

    // Will simply transition "instantly" if false
    enabled: true,

    // Set this to false if you don't want to use the transition end property.
    useTransitionEnd: false
  };

  var div = document.createElement('div');
  var support = {};

  // Helper function to get the proper vendor property name.
  // (`transition` => `WebkitTransition`)
  function getVendorPropertyName(prop) {
    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) return prop;

    var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

    for (var i=0; i<prefixes.length; ++i) {
      var vendorProp = prefixes[i] + prop_;
      if (vendorProp in div.style) { return vendorProp; }
    }
  }

  // Helper function to check if transform3D is supported.
  // Should return true for Webkits and Firefox 10+.
  function checkTransform3dSupport() {
    div.style[support.transform] = '';
    div.style[support.transform] = 'rotateY(90deg)';
    return div.style[support.transform] !== '';
  }

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  // Check for the browser's transitions support.
  support.transition      = getVendorPropertyName('transition');
  support.transitionDelay = getVendorPropertyName('transitionDelay');
  support.transform       = getVendorPropertyName('transform');
  support.transformOrigin = getVendorPropertyName('transformOrigin');
  support.filter          = getVendorPropertyName('Filter');
  support.transform3d     = checkTransform3dSupport();

  var eventNames = {
    'transition':       'transitionend',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  // Detect the 'transitionend' event needed.
  var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

  // Populate jQuery's `$.support` with the vendor prefixes we know.
  // As per [jQuery's cssHooks documentation](http://api.jquery.com/jQuery.cssHooks/),
  // we set $.support.transition to a string of the actual property name used.
  for (var key in support) {
    if (support.hasOwnProperty(key) && typeof $.support[key] === 'undefined') {
      $.support[key] = support[key];
    }
  }

  // Avoid memory leak in IE.
  div = null;

  // ## $.cssEase
  // List of easing aliases that you can use with `$.fn.transition`.
  $.cssEase = {
    '_default':       'ease',
    'in':             'ease-in',
    'out':            'ease-out',
    'in-out':         'ease-in-out',
    'snap':           'cubic-bezier(0,1,.5,1)',
    // Penner equations
    'easeInCubic':    'cubic-bezier(.550,.055,.675,.190)',
    'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
    'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // ## 'transform' CSS hook
  // Allows you to use the `transform` property in CSS.
  //
  //     $("#hello").css({ transform: "rotate(90deg)" });
  //
  //     $("#hello").css('transform');
  //     //=> { rotate: '90deg' }
  //
  $.cssHooks['transit:transform'] = {
    // The getter returns a `Transform` object.
    get: function(elem) {
      return $(elem).data('transform') || new Transform();
    },

    // The setter accepts a `Transform` object or a string.
    set: function(elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      // We've seen the 3D version of Scale() not work in Chrome when the
      // element being scaled extends outside of the viewport.  Thus, we're
      // forcing Chrome to not use the 3d transforms as well.  Not sure if
      // translate is affectede, but not risking it.  Detection code from
      // http://davidwalsh.name/detecting-google-chrome-javascript
      if (support.transform === 'WebkitTransform' && !isChrome) {
        elem.style[support.transform] = value.toString(true);
      } else {
        elem.style[support.transform] = value.toString();
      }

      $(elem).data('transform', value);
    }
  };

  // Add a CSS hook for `.css({ transform: '...' })`.
  // In jQuery 1.8+, this will intentionally override the default `transform`
  // CSS hook so it'll play well with Transit. (see issue #62)
  $.cssHooks.transform = {
    set: $.cssHooks['transit:transform'].set
  };

  // ## 'filter' CSS hook
  // Allows you to use the `filter` property in CSS.
  //
  //     $("#hello").css({ filter: 'blur(10px)' });
  //
  $.cssHooks.filter = {
    get: function(elem) {
      return elem.style[support.filter];
    },
    set: function(elem, value) {
      elem.style[support.filter] = value;
    }
  };

  // jQuery 1.8+ supports prefix-free transitions, so these polyfills will not
  // be necessary.
  if ($.fn.jquery < "1.8") {
    // ## 'transformOrigin' CSS hook
    // Allows the use for `transformOrigin` to define where scaling and rotation
    // is pivoted.
    //
    //     $("#hello").css({ transformOrigin: '0 0' });
    //
    $.cssHooks.transformOrigin = {
      get: function(elem) {
        return elem.style[support.transformOrigin];
      },
      set: function(elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transition' CSS hook
    // Allows you to use the `transition` property in CSS.
    //
    //     $("#hello").css({ transition: 'all 0 ease 0' });
    //
    $.cssHooks.transition = {
      get: function(elem) {
        return elem.style[support.transition];
      },
      set: function(elem, value) {
        elem.style[support.transition] = value;
      }
    };
  }

  // ## Other CSS hooks
  // Allows you to rotate, scale and translate.
  registerCssHook('scale');
  registerCssHook('scaleX');
  registerCssHook('scaleY');
  registerCssHook('translate');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotate3d');
  registerCssHook('perspective');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('x', true);
  registerCssHook('y', true);

  // ## Transform class
  // This is the main class of a transformation property that powers
  // `$.fn.css({ transform: '...' })`.
  //
  // This is, in essence, a dictionary object with key/values as `-transform`
  // properties.
  //
  //     var t = new Transform("rotate(90) scale(4)");
  //
  //     t.rotate             //=> "90deg"
  //     t.scale              //=> "4,4"
  //
  // Setters are accounted for.
  //
  //     t.set('rotate', 4)
  //     t.rotate             //=> "4deg"
  //
  // Convert it to a CSS string using the `toString()` and `toString(true)` (for WebKit)
  // functions.
  //
  //     t.toString()         //=> "rotate(90deg) scale(4,4)"
  //     t.toString(true)     //=> "rotate(90deg) scale3d(4,4,0)" (WebKit version)
  //
  function Transform(str) {
    if (typeof str === 'string') { this.parse(str); }
    return this;
  }

  Transform.prototype = {
    // ### setFromString()
    // Sets a property from a string.
    //
    //     t.setFromString('scale', '2,4');
    //     // Same as set('scale', '2', '4');
    //
    setFromString: function(prop, val) {
      var args =
        (typeof val === 'string')  ? val.split(',') :
        (val.constructor === Array) ? val :
        [ val ];

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    // ### set()
    // Sets a property.
    //
    //     t.set('scale', 2, 4);
    //
    set: function(prop) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function(prop) {
      if (this.getter[prop]) {
        return this.getter[prop].apply(this);
      } else {
        return this[prop] || 0;
      }
    },

    setter: {
      // ### rotate
      //
      //     .css({ rotate: 30 })
      //     .css({ rotate: "30" })
      //     .css({ rotate: "30deg" })
      //     .css({ rotate: "30deg" })
      //
      rotate: function(theta) {
        this.rotate = unit(theta, 'deg');
      },

      rotateX: function(theta) {
        this.rotateX = unit(theta, 'deg');
      },

      rotateY: function(theta) {
        this.rotateY = unit(theta, 'deg');
      },

      // ### scale
      //
      //     .css({ scale: 9 })      //=> "scale(9,9)"
      //     .css({ scale: '3,2' })  //=> "scale(3,2)"
      //
      scale: function(x, y) {
        if (y === undefined) { y = x; }
        this.scale = x + "," + y;
      },

      // ### skewX + skewY
      skewX: function(x) {
        this.skewX = unit(x, 'deg');
      },

      skewY: function(y) {
        this.skewY = unit(y, 'deg');
      },

      // ### perspectvie
      perspective: function(dist) {
        this.perspective = unit(dist, 'px');
      },

      // ### x / y
      // Translations. Notice how this keeps the other value.
      //
      //     .css({ x: 4 })       //=> "translate(4px, 0)"
      //     .css({ y: 10 })      //=> "translate(4px, 10px)"
      //
      x: function(x) {
        this.set('translate', x, null);
      },

      y: function(y) {
        this.set('translate', null, y);
      },

      // ### translate
      // Notice how this keeps the other value.
      //
      //     .css({ translate: '2, 5' })    //=> "translate(2px, 5px)"
      //
      translate: function(x, y) {
        if (this._translateX === undefined) { this._translateX = 0; }
        if (this._translateY === undefined) { this._translateY = 0; }

        if (x !== null && x !== undefined) { this._translateX = unit(x, 'px'); }
        if (y !== null && y !== undefined) { this._translateY = unit(y, 'px'); }

        this.translate = this._translateX + "," + this._translateY;
      }
    },

    getter: {
      x: function() {
        return this._translateX || 0;
      },

      y: function() {
        return this._translateY || 0;
      },

      scale: function() {
        var s = (this.scale || "1,1").split(',');
        if (s[0]) { s[0] = parseFloat(s[0]); }
        if (s[1]) { s[1] = parseFloat(s[1]); }

        // "2.5,2.5" => 2.5
        // "2.5,1" => [2.5,1]
        return (s[0] === s[1]) ? s[0] : s;
      },

      rotate3d: function() {
        var s = (this.rotate3d || "0,0,0,0deg").split(',');
        for (var i=0; i<=3; ++i) {
          if (s[i]) { s[i] = parseFloat(s[i]); }
        }
        if (s[3]) { s[3] = unit(s[3], 'deg'); }

        return s;
      }
    },

    // ### parse()
    // Parses from a string. Called on constructor.
    parse: function(str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    // ### toString()
    // Converts to a `transition` CSS property string. If `use3d` is given,
    // it converts to a `-webkit-transition` CSS property string instead.
    toString: function(use3d) {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          // Don't use 3D transformations if the browser can't support it.
          if ((!support.transform3d) && (
            (i === 'rotateX') ||
            (i === 'rotateY') ||
            (i === 'perspective') ||
            (i === 'transformOrigin'))) { continue; }

          if (i[0] !== '_') {
            if (use3d && (i === 'scale')) {
              re.push(i + "3d(" + this[i] + ",1)");
            } else if (use3d && (i === 'translate')) {
              re.push(i + "3d(" + this[i] + ",0)");
            } else {
              re.push(i + "(" + this[i] + ")");
            }
          }
        }
      }

      return re.join(" ");
    }
  };

  function callOrQueue(self, queue, fn) {
    if (queue === true) {
      self.queue(fn);
    } else if (queue) {
      self.queue(queue, fn);
    } else {
      self.each(function () {
                fn.call(this);
            });
    }
  }

  // ### getProperties(dict)
  // Returns properties (for `transition-property`) for dictionary `props`. The
  // value of `props` is what you would expect in `$.css(...)`.
  function getProperties(props) {
    var re = [];

    $.each(props, function(key) {
      key = $.camelCase(key); // Convert "text-align" => "textAlign"
      key = $.transit.propertyMap[key] || $.cssProps[key] || key;
      key = uncamel(key); // Convert back to dasherized

      // Get vendor specify propertie
      if (support[key])
        key = uncamel(support[key]);

      if ($.inArray(key, re) === -1) { re.push(key); }
    });

    return re;
  }

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  // Example:
  //
  //     getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //     //=> 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, delay) {
    // Get the CSS properties needed.
    var props = getProperties(properties);

    // Account for aliases (`in` => `ease-in`).
    if ($.cssEase[easing]) { easing = $.cssEase[easing]; }

    // Build the duration/easing/delay attributes for it.
    var attribs = '' + toMS(duration) + ' ' + easing;
    if (parseInt(delay, 10) > 0) { attribs += ' ' + toMS(delay); }

    // For more properties, add them this way:
    // "margin 200ms ease, padding 200ms ease, ..."
    var transitions = [];
    $.each(props, function(i, name) {
      transitions.push(name + ' ' + attribs);
    });

    return transitions.join(', ');
  }

  // ## $.fn.transition
  // Works like $.fn.animate(), but uses CSS transitions.
  //
  //     $("...").transition({ opacity: 0.1, scale: 0.3 });
  //
  //     // Specific duration
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500);
  //
  //     // With duration and easing
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');
  //
  //     // With callback
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, function() { ... });
  //
  //     // With everything
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() { ... });
  //
  //     // Alternate syntax
  //     $("...").transition({
  //       opacity: 0.1,
  //       duration: 200,
  //       delay: 40,
  //       easing: 'in',
  //       complete: function() { /* ... */ }
  //      });
  //
  $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
    var self  = this;
    var delay = 0;
    var queue = true;

    var theseProperties = $.extend(true, {}, properties);

    // Account for `.transition(properties, callback)`.
    if (typeof duration === 'function') {
      callback = duration;
      duration = undefined;
    }

    // Account for `.transition(properties, options)`.
    if (typeof duration === 'object') {
      easing = duration.easing;
      delay = duration.delay || 0;
      queue = typeof duration.queue === "undefined" ? true : duration.queue;
      callback = duration.complete;
      duration = duration.duration;
    }

    // Account for `.transition(properties, duration, callback)`.
    if (typeof easing === 'function') {
      callback = easing;
      easing = undefined;
    }

    // Alternate syntax.
    if (typeof theseProperties.easing !== 'undefined') {
      easing = theseProperties.easing;
      delete theseProperties.easing;
    }

    if (typeof theseProperties.duration !== 'undefined') {
      duration = theseProperties.duration;
      delete theseProperties.duration;
    }

    if (typeof theseProperties.complete !== 'undefined') {
      callback = theseProperties.complete;
      delete theseProperties.complete;
    }

    if (typeof theseProperties.queue !== 'undefined') {
      queue = theseProperties.queue;
      delete theseProperties.queue;
    }

    if (typeof theseProperties.delay !== 'undefined') {
      delay = theseProperties.delay;
      delete theseProperties.delay;
    }

    // Set defaults. (`400` duration, `ease` easing)
    if (typeof duration === 'undefined') { duration = $.fx.speeds._default; }
    if (typeof easing === 'undefined')   { easing = $.cssEase._default; }

    duration = toMS(duration);

    // Build the `transition` property.
    var transitionValue = getTransition(theseProperties, duration, easing, delay);

    // Compute delay until callback.
    // If this becomes 0, don't bother setting the transition property.
    var work = $.transit.enabled && support.transition;
    var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;

    // If there's nothing to do...
    if (i === 0) {
      var fn = function(next) {
        self.css(theseProperties);
        if (callback) { callback.apply(self); }
        if (next) { next(); }
      };

      callOrQueue(self, queue, fn);
      return self;
    }

    // Save the old transitions of each element so we can restore it later.
    var oldTransitions = {};

    var run = function(nextCall) {
      var bound = false;

      // Prepare the callback.
      var cb = function() {
        if (bound) { self.unbind(transitionEnd, cb); }

        if (i > 0) {
          self.each(function() {
            this.style[support.transition] = (oldTransitions[this] || null);
          });
        }

        if (typeof callback === 'function') { callback.apply(self); }
        if (typeof nextCall === 'function') { nextCall(); }
      };

      if ((i > 0) && (transitionEnd) && ($.transit.useTransitionEnd)) {
        // Use the 'transitionend' event if it's available.
        bound = true;
        self.bind(transitionEnd, cb);
      } else {
        // Fallback to timers if the 'transitionend' event isn't supported.
        window.setTimeout(cb, i);
      }

      // Apply transitions.
      self.each(function() {
        if (i > 0) {
          this.style[support.transition] = transitionValue;
        }
        $(this).css(theseProperties);
      });
    };

    // Defer running. This allows the browser to paint any pending CSS it hasn't
    // painted yet before doing the transitions.
    var deferredRun = function(next) {
        this.offsetWidth; // force a repaint
        run(next);
    };

    // Use jQuery's fx queue.
    callOrQueue(self, queue, deferredRun);

    // Chainability.
    return this;
  };

  function registerCssHook(prop, isPixels) {
    // For certain properties, the 'px' should not be implied.
    if (!isPixels) { $.cssNumber[prop] = true; }

    $.transit.propertyMap[prop] = support.transform;

    $.cssHooks[prop] = {
      get: function(elem) {
        var t = $(elem).css('transit:transform');
        return t.get(prop);
      },

      set: function(elem, value) {
        var t = $(elem).css('transit:transform');
        t.setFromString(prop, value);

        $(elem).css({ 'transit:transform': t });
      }
    };

  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  // (`marginLeft` => `margin-left`)
  function uncamel(str) {
    return str.replace(/([A-Z])/g, function(letter) { return '-' + letter.toLowerCase(); });
  }

  // ### unit(number, unit)
  // Ensures that number `number` has a unit. If no unit is found, assume the
  // default is `unit`.
  //
  //     unit(2, 'px')          //=> "2px"
  //     unit("30deg", 'rad')   //=> "30deg"
  //
  function unit(i, units) {
    if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return "" + i + units;
    }
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  // toMS('fast') => $.fx.speeds[i] => "200ms"
  // toMS('normal') //=> $.fx.speeds._default => "400ms"
  // toMS(10) //=> '10ms'
  // toMS('100ms') //=> '100ms'  
  //
  function toMS(duration) {
    var i = duration;

    // Allow string durations like 'fast' and 'slow', without overriding numeric values.
    if (typeof i === 'string' && (!i.match(/^[\-0-9\.]+/))) { i = $.fx.speeds[i] || $.fx.speeds._default; }

    return unit(i, 'ms');
  }

  // Export some functions for testable-ness.
  $.transit.getTransitionValue = getTransition;

  return $;
}));


}),
"plural": (function (require, exports, module) { /* wrapped by builder */
var plural = (function() {
    function getLang() {
        return vb.locale;
    }

    var DEF_RULE_NUM = 1;

    var config = [
        // 0: Asian
        ["kk,ka,km,ms,my,su,tt,th,ug,tr,zh,ja,vi,fa,tut,ko,lo,hi,id", 1, function(n) { return 0; }],
        // 1: English
        ["en,de,et,no,el,it", 2, function(n) { return n!=1?1:0; }],
        // 2: French
        ["fr,uz,tg", 2, function(n) { return n>1?1:0; }],
        // 3: Latvian
        ["lv", 3, function(n) { return n%10==1&&n%100!=11?1:(n!=0?2:0); }],
        // 4: Scottish Gaelic
        ["gd", 4, function(n) { return n==1||n==11?0:(n==2||n==12?1:(n>0&&n<20?2:3)); }],
        // 5: Romanian
        ["ro", 3, function(n) { return n==1?0:(n==0||n%100>0&&n%100<20?1:2); }],
        // 6: Lithuanian
        ["lt", 3, function(n) { return n%10==1&&n%100!=11?0:(n%10>=2&&(n%100<10||n%100>=20)?2:1); }],
        // 7: Russian
        ["ru,uk,be,hr,sr,bs", 3, function(n) { return n%10==1&&n%100!=11?0:(n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2); }],
        // 8: Slovak
        ["sk,cs", 3, function(n) { return n==1?0:(n>=2&&n<=4?1:2); }],
        // 9: Polish
        ["pl", 3, function(n) { return n==1?0:(n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2); }],
        // 10: Slovenian
        ["sl", 4, function(n) { return n%100==1?0:(n%100==2?1:(n%100==3||n%100==4?2:3)); }],
        // 11: Irish Gaeilge
        ["ga", 5, function(n) { return n==1?0:(n==2?1:(n>=3&&n<=6?2:(n>=7&&n<=10?3:4))); }],
        // 12: Arabic
        ["ar", 6, function(n) { return n==0?5:(n==1?0:(n==2?1:(n%100>=3&&n%100<=10?2:(n%100>=11&&n%100<=99?3:4)))); }],
        // 13: Maltese
        ["mt", 4, function(n) { return n==1?0:(n==0||n%100>0&&n%100<=10?1:(n%100>10&&n%100<20?2:3)); }],
        // 14: Macedonian
        ["mk", 3, function(n) { return n%10==1?0:(n%10==2?1:2); }],
        // 15: Icelandic
        ["is", 2, function(n) { return n%10==1&&n%100!=11?0:1; }],
        // 16: Breton
        ["br", 5, function(n) { return n%10==1&&n%100!=11&&n%100!=71&&n%100!=91?0:(n%10==2&&n%100!=12&&n%100!=72&&n%100!=92?1:((n%10==3||n%10==4||n%10==9)&&n%100!=13&&n%100!=14&&n%100!=19&&n%100!=73&&n%100!=74&&n%100!=79&&n%100!=93&&n%100!=94&&n%100!=99?2:(n%1000000==0&&n!=0?3:4))); }]
    ];

    var rule = null;

    function getRule() {
        if (!rule) {
            var lang = "," + getLang() + ",";
            for (var i = 0; i < config.length; ++i) {
                if (("," + config[i][0] + ",").indexOf(lang) >= 0) {
                    rule = config[i];
                    break;
                }
            }
            rule = rule || config[DEF_RULE_NUM];
        }
        return rule;
    }

    return {
        index: function (n) {
            return getRule()[2](n);
        },
        form: function (n, forms, splitter) {
            if (typeof forms == "string") {
                forms = forms.split(splitter || ";");
            }
            var idx = Math.min(forms.length - 1, getRule()[2](n));
            return forms[idx];
        },
        formCount: function() {
            return getRule()[1];
        }
    };
})();

exports.index = plural.index;
exports.form = plural.form;
exports.formCount = plural.formCount;
 
}),
"punycode": (function (require, exports, module) { /* wrapped by builder */
/*! http://mths.be/punycode v1.2.3 by @mathias */
/*! https://raw.github.com/bestiejs/punycode.js/master/punycode.js */

    /** Detect free variables */
    var freeExports = typeof exports == 'object' && exports;
    var freeModule = typeof module == 'object' && module &&
        module.exports == freeExports && module;
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
    }

    /**
     * The `punycode` object.
     * @name punycode
     * @type Object
     */
    var punycode,

    /** Highest positive signed 32-bit float value */
    maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

    /** Bootstring parameters */
    base = 36,
    tMin = 1,
    tMax = 26,
    skew = 38,
    damp = 700,
    initialBias = 72,
    initialN = 128, // 0x80
    delimiter = '-', // '\x2D'

    /** Regular expressions */
    regexPunycode = /^xn--/,
    regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
    regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

    /** Error messages */
    errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    },

    /** Convenience shortcuts */
    baseMinusTMin = base - tMin,
    floor = Math.floor,
    stringFromCharCode = String.fromCharCode,

    /** Temporary variable */
    key;

    /*--------------------------------------------------------------------------*/

    /**
     * A generic error utility function.
     * @private
     * @param {String} type The error type.
     * @returns {Error} Throws a `RangeError` with the applicable error message.
     */
    function error(type) {
        throw RangeError(errors[type]);
    }

    /**
     * A generic `Array#map` utility function.
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function that gets called for every array
     * item.
     * @returns {Array} A new array of values returned by the callback function.
     */
    function map(array, fn) {
        var length = array.length;
        while (length--) {
            array[length] = fn(array[length]);
        }
        return array;
    }

    /**
     * A simple `Array#map`-like wrapper to work with domain name strings.
     * @private
     * @param {String} domain The domain name.
     * @param {Function} callback The function that gets called for every
     * character.
     * @returns {Array} A new string of characters returned by the callback
     * function.
     */
    function mapDomain(string, fn) {
        return map(string.split(regexSeparators), fn).join('.');
    }

    /**
     * Creates an array containing the numeric code points of each Unicode
     * character in the string. While JavaScript uses UCS-2 internally,
     * this function will convert a pair of surrogate halves (each of which
     * UCS-2 exposes as separate characters) into a single code point,
     * matching UTF-16.
     * @see `punycode.ucs2.encode`
     * @see <http://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode.ucs2
     * @name decode
     * @param {String} string The Unicode input string (UCS-2).
     * @returns {Array} The new array of code points.
     */
    function ucs2decode(string) {
        var output = [],
            counter = 0,
            length = string.length,
            value,
            extra;
        while (counter < length) {
            value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else {
                output.push(value);
            }
        }
        return output;
    }

    /**
     * Creates a string based on an array of numeric code points.
     * @see `punycode.ucs2.decode`
     * @memberOf punycode.ucs2
     * @name encode
     * @param {Array} codePoints The array of numeric code points.
     * @returns {String} The new Unicode string (UCS-2).
     */
    function ucs2encode(array) {
        return map(array, function(value) {
            var output = '';
            if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
            }
            output += stringFromCharCode(value);
            return output;
        }).join('');
    }

    /**
     * Converts a basic code point into a digit/integer.
     * @see `digitToBasic()`
     * @private
     * @param {Number} codePoint The basic numeric code point value.
     * @returns {Number} The numeric value of a basic code point (for use in
     * representing integers) in the range `0` to `base - 1`, or `base` if
     * the code point does not represent a value.
     */
    function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
            return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
            return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
            return codePoint - 97;
        }
        return base;
    }

    /**
     * Converts a digit/integer into a basic code point.
     * @see `basicToDigit()`
     * @private
     * @param {Number} digit The numeric value of a basic code point.
     * @returns {Number} The basic code point whose value (when used for
     * representing integers) is `digit`, which needs to be in the range
     * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
     * used; else, the lowercase form is used. The behavior is undefined
     * if `flag` is non-zero and `digit` has no uppercase form.
     */
    function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }

    /**
     * Bias adaptation function as per section 3.4 of RFC 3492.
     * http://tools.ietf.org/html/rfc3492#section-3.4
     * @private
     */
    function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
            delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }

    /**
     * Converts a Punycode string of ASCII-only symbols to a string of Unicode
     * symbols.
     * @memberOf punycode
     * @param {String} input The Punycode string of ASCII-only symbols.
     * @returns {String} The resulting string of Unicode symbols.
     */
    function decode(input) {
        // Don't use UCS-2
        var output = [],
            inputLength = input.length,
            out,
            i = 0,
            n = initialN,
            bias = initialBias,
            basic,
            j,
            index,
            oldi,
            w,
            k,
            digit,
            t,
            /** Cached calculation results */
            baseMinusT;

        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.

        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
            basic = 0;
        }

        for (j = 0; j < basic; ++j) {
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) {
                error('not-basic');
            }
            output.push(input.charCodeAt(j));
        }

        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.

        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

                if (index >= inputLength) {
                    error('invalid-input');
                }

                digit = basicToDigit(input.charCodeAt(index++));

                if (digit >= base || digit > floor((maxInt - i) / w)) {
                    error('overflow');
                }

                i += digit * w;
                t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

                if (digit < t) {
                    break;
                }

                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                    error('overflow');
                }

                w *= baseMinusT;

            }

            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);

            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) {
                error('overflow');
            }

            n += floor(i / out);
            i %= out;

            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);

        }

        return ucs2encode(output);
    }

    /**
     * Converts a string of Unicode symbols to a Punycode string of ASCII-only
     * symbols.
     * @memberOf punycode
     * @param {String} input The string of Unicode symbols.
     * @returns {String} The resulting Punycode string of ASCII-only symbols.
     */
    function encode(input) {
        var n,
            delta,
            handledCPCount,
            basicLength,
            bias,
            j,
            m,
            q,
            k,
            t,
            currentValue,
            output = [],
            /** `inputLength` will hold the number of code points in `input`. */
            inputLength,
            /** Cached calculation results */
            handledCPCountPlusOne,
            baseMinusT,
            qMinusT;

        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);

        // Cache the length
        inputLength = input.length;

        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;

        // Handle the basic code points
        for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < 0x80) {
                output.push(stringFromCharCode(currentValue));
            }
        }

        handledCPCount = basicLength = output.length;

        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.

        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
            output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {

            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for (m = maxInt, j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                }
            }

            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error('overflow');
            }

            delta += (m - n) * handledCPCountPlusOne;
            n = m;

            for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];

                if (currentValue < n && ++delta > maxInt) {
                    error('overflow');
                }

                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for (q = delta, k = base; /* no condition */; k += base) {
                        t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                        if (q < t) {
                            break;
                        }
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(
                            stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                        );
                        q = floor(qMinusT / baseMinusT);
                    }

                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }

            ++delta;
            ++n;

        }
        return output.join('');
    }

    /**
     * Converts a Punycode string representing a domain name to Unicode. Only the
     * Punycoded parts of the domain name will be converted, i.e. it doesn't
     * matter if you call it on a string that has already been converted to
     * Unicode.
     * @memberOf punycode
     * @param {String} domain The Punycode domain name to convert to Unicode.
     * @returns {String} The Unicode representation of the given Punycode
     * string.
     */
    function toUnicode(domain) {
        return mapDomain(domain, function(string) {
            return regexPunycode.test(string)
                ? decode(string.slice(4).toLowerCase())
                : string;
        });
    }

    /**
     * Converts a Unicode string representing a domain name to Punycode. Only the
     * non-ASCII parts of the domain name will be converted, i.e. it doesn't
     * matter if you call it with a domain that's already in ASCII.
     * @memberOf punycode
     * @param {String} domain The domain name to convert, as a Unicode string.
     * @returns {String} The Punycode representation of the given domain name.
     */
    function toASCII(domain) {
        return mapDomain(domain, function(string) {
            return regexNonASCII.test(string)
                ? 'xn--' + encode(string)
                : string;
        });
    }

    /*--------------------------------------------------------------------------*/

    /** Define the public API */
    punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        'version': '1.2.3',
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <http://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        'ucs2': {
            'decode': ucs2decode,
            'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
    };

module.exports = punycode;


})
},{},{});
