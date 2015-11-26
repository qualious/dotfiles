Colors = function () {
    "use strict";
    var DEFAULT_BGCOLOR = "e5e5e5";
    var FONT_COLOR_THRESHOLD = 170;
    var COLOR_BLACK = 0;
    var COLOR_WHITE = 1;
    var CANVAS_SIZE_THRESHOLD = 800;
    var MAX_THRESHOLD = 238;
    var MIN_THRESHOLD = 20;
    var PASTEL_THRESHOLD = 92;
    function toRGB(num) {
        return (num < 16 ? "0" : "") + num.toString(16);
    }
    function isAcidColor(red, green, blue) {
        var sum = red + green + blue;
        if (sum >= MAX_THRESHOLD * 2 && (red <= MIN_THRESHOLD || green <= MIN_THRESHOLD || blue <= MIN_THRESHOLD))
            return true;
        if (sum <= MAX_THRESHOLD + MIN_THRESHOLD * 2 && (red >= MAX_THRESHOLD || green >= MAX_THRESHOLD || blue >= MAX_THRESHOLD))
            return true;
        return false;
    }
    function isAlmostTransparent(opacity) {
        return opacity < 230;
    }
    function isAlmostWhite(rgb) {
        return rgb[0] > 253 && rgb[1] > 253 && rgb[2] > 253;
    }
    function isAlmostBlack(rgb) {
        return rgb[0] < 10 && rgb[1] < 10 & rgb[2] < 10;
    }
    function isLightGrey(rgb) {
        var meanValue = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return Math.abs(meanValue - rgb[0]) + Math.abs(meanValue - rgb[1]) + Math.abs(meanValue - rgb[2]) < 15;
    }
    return createModule("Colors", {
        getFontColorByBackgroundColor: function Colors_getFontColorByBackgroundColor(bgColor) {
            bgColor = bgColor || DEFAULT_BGCOLOR;
            var red = parseInt(bgColor.substr(0, 2), 16);
            var green = parseInt(bgColor.substr(2, 2), 16);
            var blue = parseInt(bgColor.substr(4, 2), 16);
            var tone = (red + green + blue) / 3;
            return tone < FONT_COLOR_THRESHOLD && (red < FONT_COLOR_THRESHOLD || green < FONT_COLOR_THRESHOLD) ? COLOR_WHITE : COLOR_BLACK;
        },
        getDominant: function Colors_getDominant(img, options) {
            options = options || {};
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            var canvasWidth = img.width;
            var canvasHeight = img.height;
            if (img.width > img.height) {
                if (options.minifyCanvas && img.width > CANVAS_SIZE_THRESHOLD) {
                    canvasWidth = CANVAS_SIZE_THRESHOLD;
                    canvasHeight = Math.round(canvasWidth * img.height / img.width);
                }
            } else {
                if (options.minifyCanvas && img.height > CANVAS_SIZE_THRESHOLD) {
                    canvasHeight = CANVAS_SIZE_THRESHOLD;
                    canvasWidth = Math.round(canvasHeight * img.width / img.height);
                }
            }
            canvas.setAttribute("width", canvasWidth);
            canvas.setAttribute("height", canvasHeight);
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var maxValueKey = null;
            var colorsContainer = {};
            var pixelColorData = new Array(4);
            var startY = options.bottomQuarter ? Math.round(imgPixels.height * 0.75) : 0;
            var startX = options.rightHalf ? Math.round(imgPixels.width / 2) : 0;
            for (var y = startY; y < imgPixels.height; y++) {
                for (var x = startX; x < imgPixels.width; x++) {
                    var index = y * 4 * imgPixels.width + x * 4;
                    if (isAlmostTransparent(imgPixels.data[index + 3]))
                        continue;
                    pixelColorData[0] = imgPixels.data[index];
                    pixelColorData[1] = imgPixels.data[index + 1];
                    pixelColorData[2] = imgPixels.data[index + 2];
                    pixelColorData[3] = imgPixels.data[index + 3];
                    if (pixelColorData[3] !== 255) {
                        for (var z = 0; z < 3; z++) {
                            var colorStep = (255 - pixelColorData[z]) / 255;
                            pixelColorData[z] = Math.round(255 - colorStep * pixelColorData[3]);
                        }
                    }
                    if (!options.preventSkipColors && (isAlmostWhite(pixelColorData) || isAlmostBlack(pixelColorData) || isLightGrey(pixelColorData)))
                        continue;
                    var color = toRGB(pixelColorData[0]) + toRGB(pixelColorData[1]) + toRGB(pixelColorData[2]);
                    colorsContainer[color] = colorsContainer[color] || 0;
                    colorsContainer[color] += 1;
                    if (maxValueKey === null || colorsContainer[maxValueKey] < colorsContainer[color]) {
                        maxValueKey = color;
                    }
                }
            }
            if (maxValueKey) {
                var red = parseInt(maxValueKey.substr(0, 2), 16);
                var green = parseInt(maxValueKey.substr(2, 2), 16);
                var blue = parseInt(maxValueKey.substr(4, 2), 16);
                if (isAcidColor(red, green, blue)) {
                    red = Math.max(red, PASTEL_THRESHOLD);
                    green = Math.max(green, PASTEL_THRESHOLD);
                    blue = Math.max(blue, PASTEL_THRESHOLD);
                    maxValueKey = toRGB(red) + toRGB(green) + toRGB(blue);
                }
            }
            return maxValueKey || DEFAULT_BGCOLOR;
        }
    });
}();
