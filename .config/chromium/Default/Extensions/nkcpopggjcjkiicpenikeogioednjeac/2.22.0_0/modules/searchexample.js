SearchExample = function () {
    "use strict";
    var REQUEST_TIMEOUT_MS = 5000;
    var UPDATE_API_ERROR_INTERVAL_MS = 3600 * 1000;
    function updateCurrentIndex() {
        var searchExample = Settings.get("searchExample");
        if (!searchExample.examples.length)
            return;
        searchExample.index = searchExample.index + 1 >= searchExample.examples.length ? 0 : searchExample.index + 1;
        Settings.set("searchExample", searchExample);
    }
    function updateExamples() {
        SearchExample.logger.info("Update search examples");
        var exampleDomain = Branding.getXMLDocument("fastdial/config.xml").querySelector("search").getAttribute("example_domain");
        var requestURL = exampleDomain + "/search-samples?lang=" + getCurrentLocale();
        loadResource({
            url: requestURL,
            timeout: REQUEST_TIMEOUT_MS,
            onload: function (evt) {
                var responseText = evt.target.responseText;
                try {
                    var json = JSON.parse(responseText);
                } catch (ex) {
                    SearchExample.logger.error("Response is not a valid JSON: " + responseText);
                    chrome.alarms.create("searchExampleData", {
                        when: Date.now() + UPDATE_API_ERROR_INTERVAL_MS,
                        periodInMinutes: 24 * 60
                    });
                    return;
                }
                var samples = json.data.map(function (example) {
                    return example.text;
                });
                var weights = {};
                json.data.forEach(function (example) {
                    weights[example.text] = example.text;
                });
                samples.sort(function (a, b) {
                    return weights[a] - weights[b];
                });
                Settings.set("searchExample", {
                    examples: samples,
                    index: 0
                });
            },
            onerror: function (evt) {
                SearchExample.logger.error("Error while loading search examples (%s)", evt.type);
                chrome.alarms.create("searchExampleData", {
                    when: Date.now() + UPDATE_API_ERROR_INTERVAL_MS,
                    periodInMinutes: 24 * 60
                });
            }
        });
    }
    return createModule("SearchExample", {
        onAlarm: function SearchExample_onAlarm(alarmInfo) {
        },
        get currentValue() {
            var searchExample = Settings.get("searchExample");
            return searchExample.examples.length && searchExample.examples[searchExample.index] ? searchExample.examples[searchExample.index] : "";
        }
    });
}();
