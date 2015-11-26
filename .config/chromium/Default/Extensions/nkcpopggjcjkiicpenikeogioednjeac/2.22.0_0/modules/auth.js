Auth = function () {
    "use strict";
    function info() {
        Auth.logger.info.apply(Auth.logger, arguments);
    }
    var PASSPORT_URL = "https://passport.yandex.{tld}";
    var TUNE_URL = "https://tune.yandex.{tld}";
    var MAIL_URL = "https://mail.yandex.{tld}";
    var MORDA_URL = "https://yandex.{tld}";
    var NEWTAB_URL = "chrome://newtab";
    var tld = "";
    var passportTld = "";
    var USER_STATUS = {
        NO_AUTH: 0,
        AUTH: 1,
        AUTH_ACTIVE: 2
    };
    var users = {};
    var NOTIF_UI_TIMEOUT_MS = 400;
    var avatarRnd = Math.random();
    function detectTld() {
        switch (Branding.id) {
        case "tb":
            passportTld = tld = "com.tr";
            break;
        case "ua":
            passportTld = "ru";
            tld = "ua";
            break;
        default:
            passportTld = tld = "ru";
        }
    }
    function getUrl(tpl) {
        return tpl.replace("{tld}", tld || "ru");
    }
    function getPassportUrl(tpl) {
        return tpl.replace("{tld}", passportTld || "ru");
    }
    function loadUsers(callback) {
        callback = callback || noop;
        Database.conn.get("users", {}, function (err, records) {
            if (err) {
                throw new DbError(err);
            }
            records = records || {};
            users = skladArray2Object(records);
            info("Loaded local users: %s", Object.keys(users).map(function (uid) {
                return users[uid].login + " (" + users[uid].status + ")";
            }).join(", "));
            callback();
        });
    }
    function saveUsers(callback) {
        callback = callback || noop;
        Database.conn.clear("users", function (err) {
            if (err) {
                throw new DbError(err);
            }
            var usersArr = Object.keys(users).map(function (uid) {
                return users[uid];
            });
            usersArr = usersArr.filter(function (user) {
                return user.login;
            });
            Database.conn.insert({ users: usersArr }, function (err) {
                if (err) {
                    Auth.logger.error("Error while inserting users %j", usersArr);
                    throw new DbError(err);
                }
                callback();
            });
        });
    }
    function setStatusNoAuth() {
        Object.keys(users).forEach(function (uid) {
            if (users[uid].status !== USER_STATUS.NO_AUTH) {
                users[uid].status = USER_STATUS.NO_AUTH;
                sendClickerRequest("auth.exit.total");
            }
        });
    }
    function updateUsersStatus(callback) {
        info("Updating accounts info...");
        flat.yauthAccounts.update(function (result) {
            if (!result || typeof result === "string") {
                info("Accounts error: %s", result);
                return;
            }
            if (!result.accounts) {
                info("Accounts error: response is empty %j", result);
                return;
            }
            info("Accounts response %j", result);
            Object.keys(users).forEach(function (uid) {
                var account = result.accounts.filter(function (a) {
                    return a.uid === uid;
                })[0];
                var wasAuthorized = users[uid].status !== USER_STATUS.NO_AUTH;
                if (account) {
                    users[uid].login = account.login;
                    users[uid].displayName = account.displayName && account.displayName.name || account.login;
                    users[uid].status = uid === result.default_uid ? USER_STATUS.AUTH_ACTIVE : USER_STATUS.AUTH;
                } else {
                    users[uid].status = USER_STATUS.NO_AUTH;
                }
                var isAuthorized = users[uid].status !== USER_STATUS.NO_AUTH;
                if (users[uid].status === USER_STATUS.AUTH_ACTIVE) {
                    users[uid].lastAuthTime = Date.now();
                }
                if (wasAuthorized !== isAuthorized) {
                    sendClickerRequest(isAuthorized ? "auth.done.total" : "auth.exit.total");
                }
            });
            result.accounts.forEach(function (account) {
                if (!users[account.uid]) {
                    users[account.uid] = {
                        uid: account.uid,
                        login: account.login,
                        displayName: account.displayName && account.displayName.name || account.login,
                        status: account.uid === result.default_uid ? USER_STATUS.AUTH_ACTIVE : USER_STATUS.AUTH.AUTH
                    };
                    if (users[account.uid].status === USER_STATUS.AUTH_ACTIVE) {
                        users[account.uid].lastAuthTime = Date.now();
                    }
                    sendClickerRequest("auth.done.total");
                }
            });
            info("Users authorized: %s", result.accounts.map(function (account) {
                return account.login + (account.uid === result.default_uid ? " (active)" : "");
            }).join(", "));
            saveUsers();
            notifyUI();
        });
    }
    function notifyUI() {
        setTimeout(function () {
            notifyTabs("auth", Auth.getState());
        }, NOTIF_UI_TIMEOUT_MS);
    }
    function postRequest(tabId, url, params) {
        notifyTabs("post", {
            url: url,
            params: params
        }, tabId);
    }
    function navigate(tabId, urlTpl) {
        chrome.tabs.update(tabId, { url: getUrl(urlTpl) }, noop);
    }
    function yauthChanged(data) {
        data = data || {};
        if (data.action === "change_default" || data.action === "logout") {
            var response = data.response || {};
            var status = response.status;
            if (status === "other") {
                navigate(data.tabId, response.url || NEWTAB_URL);
            } else if (status === "ok") {
                navigate(data.tabId, data.action === "change_default" ? MAIL_URL : NEWTAB_URL);
            } else if (status === "action-not-required") {
                navigate(data.tabId, NEWTAB_URL);
            } else {
                flat.yauth.login(data.tabId, data.login);
            }
        } else {
            navigate(data.tabId, NEWTAB_URL);
            if (data.action === "login") {
                sendClickerRequest("auth.done.vb");
            }
        }
    }
    function onCookiesChanged(cookieExists) {
        if (cookieExists) {
            updateUsersStatus();
        } else {
            setStatusNoAuth();
            saveUsers();
            notifyUI();
        }
    }
    function sendClickerRequest(path) {
        Statistics.sendClickerRequest({
            pid: 12,
            cid: 72482,
            path: path
        });
    }
    return createModule("Auth", {
        init: function Auth_init() {
            loadUsers(function () {
                detectTld();
                flat.yauth.onChanged.addListener(yauthChanged);
                flat.yauthCookies.onChanged.addListener(onCookiesChanged);
                flat.yauth.init({
                    tld: passportTld,
                    postRequest: postRequest,
                    debug: false
                });
                flat.yauthAccounts.init({
                    tld: passportTld,
                    debug: false
                });
                flat.yauthCookies.init({
                    tld: passportTld,
                    debug: false
                });
                flat.yauthCookies.check();
            });
        },
        onMessage: function Auth_onMessage(req, sender, sendResponse) {
            switch (req.action) {
            case "Auth.login":
                var user = users[req.userId] || {};
                if (user.status === USER_STATUS.AUTH_ACTIVE) {
                    navigate(sender.tab.id, user.login ? MAIL_URL : MORDA_URL);
                } else if (user.status === USER_STATUS.AUTH) {
                    info("Change active user to: %s", user.login);
                    flat.yauth.setActive(sender.tab.id, user.uid, user.login);
                } else {
                    info("Open login page for user: %s", user.login);
                    flat.yauth.login(sender.tab.id, user && user.login || "");
                }
                break;
            case "Auth.logout":
                var activeUid = Object.keys(users).filter(function (uid) {
                    return users[uid].status === USER_STATUS.AUTH_ACTIVE;
                })[0];
                var authUids = Object.keys(users).filter(function (uid) {
                    return users[uid].status === USER_STATUS.AUTH;
                });
                if (activeUid && !authUids.length) {
                    info("Logout all users");
                    flat.yauth.logoutAll(sender.tab.id);
                }
                if (activeUid && authUids.length) {
                    info("Logout user: %i", activeUid);
                    flat.yauth.logout(sender.tab.id, activeUid, users[activeUid].login);
                }
                break;
            case "Auth.navigate":
                var url = getPassportUrl(req.type === "tune" ? TUNE_URL : PASSPORT_URL);
                chrome.tabs.update(sender.tab.id, { url: url }, noop);
                break;
            }
        },
        getState: function () {
            var hasAuthUsers = Object.keys(users).some(function (uid) {
                return users[uid].status !== USER_STATUS.NO_AUTH;
            });
            return {
                users: !hasAuthUsers ? [] : Object.keys(users).filter(function (uid) {
                    var noAuthSocial = users[uid].status === USER_STATUS.NO_AUTH && !users[uid].login;
                    return !noAuthSocial;
                }).sort(function (a, b) {
                    return users[b].status - users[a].status || (users[b].lastAuthTime || 0) - (users[a].lastAuthTime || 0);
                }).map(function (uid) {
                    return {
                        id: uid,
                        displayName: users[uid].displayName,
                        state: users[uid].status,
                        avatarURL: "https://yapic.yandex.ru/get/" + uid + "/islands-middle?rnd=" + avatarRnd
                    };
                })
            };
        }
    });
}();
