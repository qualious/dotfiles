﻿//<a class="popup_menu_item header_notification_comments active_inbox_item" href="http://steamcommunity.com/id/vplghost/commentnotifications/">
//<span class="notification_icon"></span>1 new comment			</a>
//<a class="popup_menu_item header_notification_invites active_inbox_item" href="http://steamcommunity.com/id/vplghost/home/invites/">
//<span class="notification_icon"></span>1 new invite			</a>

var apiExp = /WebAPI = new CWebAPI('http:\/\/api.steampowered.com\/', 'https:\/\/api.steampowered.com\/', "([^"]+?)")/;
var msgExp = /<a class="popup_menu_item header_notification_comments active_inbox_item" href="http:\/\/steamcommunity\.com\/.+?\/commentnotifications\/">/g;
var invitesExp = /<a class="popup_menu_item header_notification_invites active_inbox_item" href="http:\/\/steamcommunity\.com\/.+?\/home\/invites\/">/g;
var steamOfferExp = /<div class="link_overlay" onclick="ShowTradeOffer\( '(\d+)' \);"><\/div>[\s\S]+?<img src="(.+)">[\s\S]+?">([\s\S]+?)[：:]/g;
var steamOfferAllExp = /\<div class=\"tradeoffer\" id=\"tradeofferid_(\d+)\"\>/g;
var inviteLvlExp = /<a class="linkStandard" href="javascript:FriendAccept\( '(\d+)', 'block' \)">/g;
var processURLExp = /var processURL = '(.+)';/;
var sessionIDExp = /<input type="hidden" name="sessionID" value="(.+)" id="sessionID">/;
var sessionIDJSExp = /g_sessionID = \"(.+)\";/;
var soundFile = '';
var _oHistory = {};

chrome.runtime.onInstalled.addListener(function (details) {
    startUp();
    if (details.reason && details.reason === 'update') {
        var oldVer = details.previousVersion.split('.');
        var newVer = chrome.runtime.getManifest().version.split('.');
        var majorChanges = false;
        for (var i = 0; i < 3; i++) {
            if (oldVer[i] != newVer[i])
                majorChanges = true;
        }

        chrome.storage.sync.get({
            bookmarks: null
        }, function (items) {
            if (items.bookmarks) {
                chrome.storage.local.set({
                    bookmarks: items.bookmarks
                });
                chrome.storage.sync.remove('bookmarks');
            }
        });

        if (!majorChanges) return;

        chrome.browserAction.setPopup({
            popup: "html/newupdate.html"
        });
        chrome.browserAction.setBadgeText({ text: "" });

        var options = {
            type: "basic",
            title: "Steam inventory helper",
            message: "Extension is updated from version " + details.previousVersion + " to version " + chrome.runtime.getManifest().version + ", click here to check the changelogs",
            iconUrl: 'assets/icon128.png'
        };

        chrome.notifications.create("update", options, function (id) {
        });
    }
});

chrome.runtime.onStartup.addListener(function () {
    startUp();
});

chrome.alarms.onAlarm.addListener(function (alarm) {
    chrome.storage.sync.get({
        sound: 'offersound.mp3',
        soundvolumn: 100,
        shownotify: true,
        shownotify_friend: false,
        shownotify_comment: false,
        quickbuybuttons: true,
        lastIdx: 0,
        customsound: '',
        ignorefriend: 0,
        blockfriend: 0,
        privateblock: false,
        privateignore: false,
        ignoredfriends: 0,
        blockedfriends: 0,
        autodecline: true

    }, function (items) {
        if (items.shownotify || items.shownotify_friend || items.shownotify_comment)
            checkSteamOffers(items);
        checkFriendInvites(items);
        //GetPriceHistory(items.lastIdx);
    });
});

chrome.notifications.onClicked.addListener(function (idN) {
    if (idN.indexOf('ido') >= 0) {
        var idO = idN.substring(3);
        window.open('http://steamcommunity.com/tradeoffer/' + idO + '/');
    }
    else if (idN === 'update') {
        window.open('http://steamcommunity.com/groups/SteamInventoryHelper#announcements', '_blank');
    }
    else if (idN === 'comInvites') {
        window.open('http://steamcommunity.com/my/home/invites/', '_blank');
    }
    else if (idN === 'comMessages') {
        window.open('http://steamcommunity.com/my/commentnotifications/', '_blank');
    }

    chrome.notifications.clear(idN, function () { });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

});

var isLatest = function (version) {
    if (!version) return false;

    var oldVer = version.split('.');
    var newVer = chrome.runtime.getManifest().version.split('.');
    var majorChanges = false;
    for (var i = 0; i < 3; i++) {
        if (oldVer[i] != newVer[i])
            return false;
    }

    return true;
}

var startUp = function () {
    chrome.storage.sync.get({
        soundvolumn: 100,
        shownotify: true,
        shownotify_friend: false,
        shownotify_comment: false,
        sound: 'offersound.mp3',
        customsound: '',
        ignorefriend: 0,
        blockfriend: 0,
        privateblock: false,
        privateignore: false,
        ignoredfriends: 0,
        blockedfriends: 0,
        autodecline: true
    }, function (items) {
        soundFile = items.sound;
        if (items.shownotify)
            checkSteamOffers(items);
        checkFriendInvites(items);
    });

    chrome.storage.local.get({
        latestver: null
    }, function (items) {
        if (!isLatest(items.latestver)) {
            chrome.browserAction.setBadgeText({ text: "new" });

            chrome.browserAction.setPopup({
                popup: "html/newupdate.html"
            });
        }
    });


    chrome.alarms.create('main', {
        delayInMinutes: 1.0,
        periodInMinutes: 1.0
    });

}

var checkSteamOffers = function (items) {
    //console.log('Get offers');
    $.ajax({
        method: "GET",
        url: 'http://steamcommunity.com/my/tradeoffers/',
        success: function (response, textStatus, jqXHR) {
            var res = response;
            //console.log('Get offers done');

            var lastOId = null;
            var m;
            var haveOffers = false;
            var num = 0;
            if (items.shownotify) {
                var offeridarr = new Array();
                var sessionID = sessionIDJSExp.exec(res);
                if (sessionID) sessionID = sessionID[1];
                while (m = steamOfferExp.exec(res)) {
                    num++;
                    offeridarr.push(m[1]);
                    if (!_oHistory[m[1]]) {
                        if (lastOId != m[1]) {
                            nofSteam(m[1], m[2], m[3]);
                        }
                        lastOId = m[1];
                        haveOffers = true;
                        _oHistory[m[1]] = true;
                    }
                }

                if (items.autodecline) {
                    while (m = steamOfferAllExp.exec(res)) {
                        if (offeridarr.indexOf(m[1]) == -1) {
                            DeclineTradeOffer(m[1], sessionID);
                        }
                    }
                }
            }

            if (items.shownotify_comment && (msgExp.exec(res))) {
                nofMsg('comMessages', 'You have new comments.');
                haveOffers = true;
            }

            if (haveOffers && soundFile != '') {
                var soundA = null;
                if (soundFile == 'custom') {
                    soundA = new Audio(items.customsound);
                }
                else {
                    soundA = new Audio(chrome.extension.getURL('assets/' + soundFile));
                }

                soundA.volume = items.soundvolumn / 100.0;
                soundA.play();
            }

            if (m = invitesExp.exec(res) && items.shownotify_friend) {
                nofMsg('comInvites', 'You have new friends invites.');
                haveOffers = true;
            }

            chrome.storage.local.get({
                latestver: null
            }, function (items) {
                if (isLatest(items.latestver)) {
                    if (num > 0)
                        chrome.browserAction.setBadgeText({ text: "" + num });
                    else {
                        chrome.browserAction.setBadgeText({ text: "" });
                    }
                }
            });

        }
    });
}

var checkFriendInvites = function (items) {
    if (items.ignorefriend > 0 || items.blockfriend > 0 || items.privateblock || items.privateignore) {
        $.ajax({
            method: "GET",
            url: 'http://steamcommunity.com/my/home/invites',
            success: function (response, textStatus, jqXHR) {
                var sessionID = sessionIDExp.exec(response);
                var processURL = processURLExp.exec(response);
                if (sessionID) sessionID = sessionID[1];
                if (processURL) processURL = processURL[1];

                var m = null;
                ignoredfriends = items.ignoredfriends;
                blockedfriends = items.blockedfriends;
                while (m = inviteLvlExp.exec(response)) {
                    var friendID = m[1];
                    var idx = m.index;
                    var idx2 = response.indexOf('<span class="friendPlayerLevelNum">', idx);
                    idx2 += 35;
                    var len = response.indexOf('</span>', idx2) - idx2;
                    var lvl = parseInt(response.substr(idx2, len));

                    if (items.blockfriend > lvl) {
                        FriendAccept(friendID, 'block', sessionID, processURL);
                        blockedfriends++;
                    } else if (items.ignorefriend > lvl) {
                        FriendAccept(friendID, 'ignore', sessionID, processURL);
                        ignoredfriends++;
                    } else if (items.privateblock || items.privateignore) {

                        $.ajax({
                            url: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/',
                            data: {
                                steamids: friendID,
                                key: '7A7F40B1E5754373A1A75C8A00B911DC'
                            },
                            success: function (data) {
                                //console.log('API loaded');
                                if (data && data.response && data.response.players) {
                                    if (data.response.players[0].communityvisibilitystate == 1) {
                                        if (items.privateblock) {
                                            FriendAccept(data.response.players[0].steamid, 'block', sessionID, processURL);
                                            blockedfriends++;
                                        }
                                        else {
                                            FriendAccept(data.response.players[0].steamid, 'ignore', sessionID, processURL);
                                            ignoredfriends++;
                                        }
                                    }
                                }
                            },
                            error: function () {
                                //console.log('Load API error');
                            }
                        });
                        //http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7A7F40B1E5754373A1A75C8A00B911DC&steamids=76561198151192612
                    }
                }
                chrome.storage.sync.set({
                    ignoredfriends: ignoredfriends,
                    blockedfriends: blockedfriends
                });
            }
        });
    }
}

var FriendAccept = function (friendID64, action, sessionID, processURL) {
    var postData = {
        "json": 1,
        "xml": 1,
        "action": "approvePending",
        "itype": "friend",
        "perform": action,
        "id": friendID64,
        "sessionID": sessionID
    };
    $.ajax({
        method: 'POST',
        url: processURL,
        data: postData,
        success: function (response, textStatus, jqXHR) {
            console.log('friend action success');
            console.log(response);
        }
    });

}

var DeclineTradeOffer = function (tradeOfferID, g_sessionID) {
    console.log(tradeOfferID, g_sessionID);
    var strAction = 'decline';
    return $.ajax({
        url: 'https://steamcommunity.com/tradeoffer/' + tradeOfferID + '/' + strAction,
        data: { sessionid: g_sessionID },
        type: 'POST',
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function (data) {

    }).fail(function () {

    });
}

var nofSteam = function (idOffer, img, name) {
    name = name.trim();
    name = name.replace(/<span.+?>/g, '').replace(/<\/span>/g, '');
    var path = img.replace('.jpg', '_full.jpg');// chrome.runtime.getURL("/icon64.png");
    var options = {
        type: "basic",
        title: "Steam community",
        message: name + " (" + idOffer + ")",
        expandedMessage: "Check out the offers"
    };
    options.iconUrl = path;

    chrome.notifications.create("ido" + idOffer, options, function (id) {
    });
}

var nofMsg = function (idnof, msg) {

    var path = chrome.runtime.getURL("assets/icon128.png");
    var options = {
        type: "basic",
        title: "Steam community",
        message: msg,
        expandedMessage: "Check out the offers"
    };
    options.iconUrl = path;

    chrome.notifications.create(idnof, options, function (id) {
    });
}

var setOptions = function (opt) {
    soundFile = opt.sound;
}


chrome.webRequest.onHeadersReceived.addListener(function (details) {
    var noACAO = true;
    console.log(details);
    for (var i = 0; i < details.responseHeaders.length; i++) {
        if (details.responseHeaders[i].name == 'Access-Control-Allow-Origin') {
            noACAO = false;
            details.responseHeaders[i].value = '*';
        }
    }
    if (noACAO) {
        details.responseHeaders.push({
            'name': 'Access-Control-Allow-Origin',
            'value': '*'
        });
    }

    return { // Return the new HTTP header
        responseHeaders: details.responseHeaders
    };
}, {
    urls: ["https://api.steampowered.com/*", "https://steamcommunity.com/*/json/753/1"]
}, ["blocking", "responseHeaders"]);


//chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {

//    if (details.requestHeaders && details.requestHeaders.length) {

//        for (var i = 0; i < details.requestHeaders.length; i++) {
//            if (details.requestHeaders[i].name == 'Origin') {
//                console.log('Origin', details.requestHeaders[i].value);
//                details.requestHeaders[i].value = 'https://api.steampowered.com';
//            }
//        }
//    }

//    return {
//        requestHeaders: details.requestHeaders
//    };
//}, {
//    urls: ["https://api.steampowered.com/*"]
//}, ['blocking', 'requestHeaders']);

function isCSPHeader(headerName) {
    return (headerName == 'CONTENT-SECURITY-POLICY') || (headerName == 'X-WEBKIT-CSP');
}

/*---------------------------------------------------------------------*/
var regHis = /<div class="market_listing_left_cell market_listing_gainorloss">\s+?([\+\-])\s+?<\/div>[\s\S]+?<span class="market_listing_price">([\s\S]+?)<\/span>[\s\S]+?<div class="market_listing_right_cell market_listing_listed_date">([\s\S]+?)<\/div>/gmi;
var ProcessPriceData = function (res) {
    if (!res.total_count) return;
    var m;
    var htmlres = res.results_html;
    var totalMinus = 0, totalPlus = 0;
    while (m = regHis.exec(htmlres)) {
        var sign = m[1].trim(), price = m[2].trim(), date = m[3].trim();

        var pp = /([\d\.,]+)/.exec(price.replace(/\&#.+?;/g, '').replace(' p&#1091;&#1073;.', '').replace(/\s/, ''));

        if (pp)
            pp = pp[1].replace(/,(\d\d)$/g, '.$1').replace(/.(\d\d\d)/g, '$1');
        else
            pp = 0;

        if (sign === '-') {
            totalMinus += parseFloat(pp);
        }
        else
            totalPlus += parseFloat(pp);
    }
    chrome.storage.sync.get({
        totalMinus: 0,
        totalPlus: 0,
    }, function (items) {
        var nTotalM = Math.round((items.totalMinus + totalMinus) * 100) / 100, nTotalP = Math.round((items.totalPlus + totalPlus) * 100) / 100;
        chrome.storage.sync.set({
            totalMinus: nTotalM,
            totalPlus: nTotalP,
            lastIdx: res.total_count - res.start,
            totalRows: res.total_count
        });
    });
    console.log(res.total_count + ' ' + res.start);
}
var numOfRowGet = 200;
var GetPriceHistory = function (startIdx) {
    console.log('start get history', startIdx);
    if (typeof (startIdx) != 'undefined') {
        $.ajax({
            url: 'http://steamcommunity.com/market/myhistory/render/',
            data: { start: 0, count: 1 },
            success: function (sres) {
                console.log('sample', sres);
                if (sres.success) {
                    var start = sres.total_count - numOfRowGet - startIdx, pcount = numOfRowGet;
                    if (start < 0) {
                        pcount = numOfRowGet + start;
                        start = 0;
                    }
                    if (pcount > 0) {
                        $.ajax({
                            url: 'http://steamcommunity.com/market/myhistory/render/',
                            data: { start: start, count: pcount },
                            success: function (res) {
                                if (res.success) {
                                    ProcessPriceData(res);
                                }
                            }
                        });
                    }
                }
            }
        });
    }
}