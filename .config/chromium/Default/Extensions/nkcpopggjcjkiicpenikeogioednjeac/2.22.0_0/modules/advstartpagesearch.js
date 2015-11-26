AdvStartpageSearch = function () {
    var DAY_MS = 24 * 60 * 60 * 1000;
    var SEARCH_REDIR_URL = "http://set.yandex.{tld}/?from=vb";
    var STARTPAGE_REDIR_URL = "http://home.yandex.{tld}/?from=vb";
    var yandexSearchIDs = [
        "cncgohepihcekklokhbhiblhfcmipbdh",
        "aminlpmkfcdibgpgfajlgnamicjckkjf",
        "bkjpmnbenanmfadohbgmenmdgjfanlpc",
        "magddadchihfapfmihhafjbencdaekoi",
        "cpimfcfpokkicebcgjimeeemfjkhfplk",
        "laddjijkcfpakbbnnedbhnnciecidncp",
        "ijbepmfgphlcbokeedcnmbedhckonlin"
    ];
    var yandexStartpageIDs = [
        "cdlgdffkkjdoglbioephbahjkkmmpdhi",
        "gehngeifmelphpllncobkmimphfkckne",
        "jdkihdhlegcdggknokfekoemkjjnjhgi",
        "nbmnllhadpgckepmjpeekfcfhhfbfmcm",
        "hjecpldjaibcodmpkmancoljlbkgodgg",
        "lalfiodohdgaejjccfgfmmngggpplmhp",
        "lpedlkoodagolnaladgccadeahpjgblg",
        "dkipfjephaclinnhbbpmjigimebkpmbk",
        "ecalfoflieekeegboemfckkhlgfmgldo",
        "keoelcjgdedmhlojlhlhiogfomadpfkh",
        "bfacnjhhlonddplapoikenaalhekaabg"
    ];
    function info() {
        AdvStartpageSearch.logger.info.apply(AdvStartpageSearch.logger, arguments);
    }
    function detectTld() {
        switch (Branding.id) {
        case "tb":
            return "com.tr";
        case "ua":
            return "ua";
        default:
            return "ru";
        }
    }
    function isEnabledByExtension(callback) {
        chrome.management.getAll(function (items) {
            items = items.filter(function (item) {
                return item.enabled;
            });
            var isYandexSearch = items.some(function (item) {
                return yandexSearchIDs.indexOf(item.id) >= 0;
            });
            var isYandexStartpage = items.some(function (item) {
                return yandexStartpageIDs.indexOf(item.id) >= 0;
            });
            callback({
                isYandexSearch: isYandexSearch,
                isYandexStartpage: isYandexStartpage
            });
        });
    }
    return createModule("AdvStartpageSearch", {
        check: function () {
            var timePassed = Date.now() - Settings.get("appInstallTime") * 1000;
            if (timePassed < 3 * DAY_MS) {
                return;
            }
            isEnabledByExtension(function (info) {
                if (!info.isYandexSearch) {
                    Advertisement.triggered("vbsetsearch");
                } else {
                    Advertisement.untriggered("vbsetsearch");
                }
                if (!info.isYandexStartpage) {
                    Advertisement.triggered("vbsethome");
                } else {
                    Advertisement.untriggered("vbsethome");
                }
            });
        },
        onMessage: function Advertisement_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "AdvStartpageSearch.setYandexAsHomePage":
                var url = STARTPAGE_REDIR_URL.replace("{tld}", detectTld());
                chrome.tabs.create({ url: url }, noop);
                break;
            case "AdvStartpageSearch.setYandexAsCurrentSearchEngine":
                var url = SEARCH_REDIR_URL.replace("{tld}", detectTld());
                chrome.tabs.create({ url: url }, noop);
                break;
            }
        }
    });
}();
