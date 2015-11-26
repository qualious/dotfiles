(function () {
    "use strict";
    function handleClick(event) {
        if (checkElement(event.target)) {
            chrome.runtime.sendMessage({
                topic: "real-referrer",
                url: window.location.href
            });
        }
    }
    var elements = [
        "A",
        "IMG"
    ];
    function checkElement(element) {
        if (!element) {
            return false;
        }
        var tagName = element.tagName;
        var parentTagName = element.parentElement ? element.parentElement.tagName : "";
        return elements.indexOf(tagName) !== -1 || elements.indexOf(parentTagName) !== -1;
    }
    document.addEventListener("click", handleClick);
}());
