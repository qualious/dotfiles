(function () {
    function l(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = d.slice();
            c.push.apply(c, arguments);
            return a.apply(b, c)
        }
    }

    function aa(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments, 1);
            try {
                return a.apply(null, c)
            } catch (d) {
                return d
            }
        }
    }

    function m(a, b) {
        if (document.createEvent) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent("spf" + a, !0, !0, b);
            return document.dispatchEvent(c)
        }
        return!0
    }

    function n() {
        return(new Date).getTime()
    };
    function p(a, b) {
        return q[a] = b
    }

    var q = window._spf_state || {};
    window._spf_state = q;
    var ba = {"animation-class": "spf-animate", "animation-duration": 425, "cache-lifetime": 6E5, "cache-max": 50, "cache-unified": !1, "link-class": "spf-link", "nolink-class": "spf-nolink", "navigate-limit": 20, "navigate-lifetime": 864E5, "prefetch-on-mousedown": !1, "process-async": !1, "request-timeout": 0, "url-identifier": "?spf=__type__"};

    function r(a) {
        return ca()[a]
    }

    function ca(a) {
        return!a && "config"in q ? q.config : p("config", a || {})
    };
    function da(a) {
        var b = s();
        a in b && delete b[a]
    }

    function ea() {
        var a = s(), b;
        for (b in a)ga(a[b]) || delete a[b]
    }

    function ga(a) {
        if (!(a && "data"in a))return!1;
        var b = a.life, b = isNaN(b) ? Infinity : b, c = n() - a.time, d = parseInt(r("cache-max"), 10), d = isNaN(d) ? Infinity : d;
        a = (parseInt(q["cache-counter"], 10) || 0) - a.count;
        return c < b && a < d
    }

    function s() {
        return"cache-storage"in q ? q["cache-storage"] : p("cache-storage", {})
    };
    function ha(a) {
        return a.classList ? a.classList : a.className && a.className.match(/\S+/g) || []
    }

    function t(a, b) {
        if (a.classList)return a.classList.contains(b);
        for (var c = ha(a), d = 0, e = c.length; d < e; d++)if (c[d] == b)return!0;
        return!1
    }

    function ia(a, b) {
        a.classList ? a.classList.add(b) : t(a, b) || (a.className += " " + b)
    }

    function ja(a, b) {
        if (a.classList)a.classList.remove(b); else {
            for (var c = ha(a), d = [], e = 0, f = c.length; e < f; e++)c[e] != b && d.push(c[e]);
            a.className = d.join(" ")
        }
    };
    function ka(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType)if (a.removeNode)a.removeNode(!1); else {
            for (; b = a.firstChild;)c.insertBefore(b, a);
            c.removeChild(a)
        }
    }

    function la(a, b, c) {
        for (; a;) {
            if (b(a))return a;
            if (c && a == c)break;
            a = a.parentNode
        }
        return null
    }

    function ma(a, b) {
        var c = a || "", d = document, e = d.createElement("iframe");
        e.id = c;
        e.src = 'javascript:""';
        e.style.display = "none";
        b && (e.onload = l(b, null, e));
        d.body.appendChild(e);
        return e
    };
    function na(a, b, c, d) {
        var e = window.history.state;
        d && e && (b = b || e);
        oa(!0, a, b, c)
    }

    function oa(a, b, c, d) {
        if (b || c) {
            b = b || window.location.href;
            c = c || {};
            var e = n();
            p("history-timestamp", e);
            c["spf-timestamp"] = e;
            if (a)pa(c, b); else if ("function" == typeof qa)qa.call(window.history, c, "", b); else throw Error("history.pushState is not a function.");
            p("history-url", b);
            d && (a = q["history-callback"]) && a(b, c)
        }
    }

    function ra(a) {
        var b = window.location.href;
        if (a.state) {
            a = a.state;
            var c = a["spf-timestamp"];
            b == q["history-url"] ? (p("history-timestamp", c), pa(a, b)) : (a["spf-back"] = c < parseInt(q["history-timestamp"], 10), a["spf-current"] = q["history-url"], p("history-timestamp", c), p("history-url", b), (c = q["history-callback"]) && c(b, a))
        }
    }

    function pa(a, b) {
        if ("function" == typeof sa)sa.call(window.history, a, "", b); else throw Error("history.replaceState is not a function");
    }

    var qa = "undefined" != typeof History ? History.prototype.pushState : null, sa = "undefined" != typeof History ? History.prototype.replaceState : null;

    function v(a, b, c) {
        c = c || 0;
        return a.lastIndexOf(b, c) == c
    }

    function w(a) {
        return"[object String]" == Object.prototype.toString.call(a)
    }

    var x = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    };

    function ta(a) {
        a = a.split("#");
        return[a[0], a.slice(1).join("#")]
    };
    function y(a, b, c) {
        var d = z[a];
        return a && b ? (d || (d = z[a] = {items: [], j: 0, m: 1}), d.items.push({D: b, C: c || 0})) : d && d.items.length || 0
    }

    function A(a, b) {
        var c = z[a];
        if (c) {
            var d = 0 < c.j;
            0 < c.m && (b || !d) && ua(a, b)
        }
    }

    function B(a) {
        (a = z[a]) && a.m--
    }

    function C(a, b) {
        var c = z[a];
        c && (c.m++, A(a, b))
    }

    function va(a) {
        var b = z[a];
        b && (clearTimeout(b.j), delete z[a])
    }

    function wa(a) {
        var b = (parseInt(q.uid, 10) || 0) + 1;
        return a["spf-key"] || (a["spf-key"] = "" + p("uid", b))
    }

    function ua(a, b) {
        var c = z[a];
        if (c && (clearTimeout(c.j), c.j = 0, 0 < c.m)) {
            var d = c.items.shift();
            if (d) {
                var e = l(function (a, b) {
                    a();
                    b()
                }, null, d.D, l(ua, null, a, b));
                b ? e() : c.j = setTimeout(e, d.C)
            }
        }
    }

    var z = {};

    function D(a) {
        var b = document.createElement("a");
        b.href = a;
        return ta(b.href)[0]
    }

    function xa(a) {
        var b = document.createElement("a");
        b.href = a;
        return(a = b.pathname) && "/" == a[0] ? a : "/" + a
    };
    function ya(a, b, c, d) {
        var e = d || {}, f = !1, g = 0, k, h = new XMLHttpRequest;
        h.open(a, b, !0);
        h.timing = {};
        var u = h.abort;
        h.abort = function () {
            clearTimeout(k);
            h.onreadystatechange = null;
            u.call(h)
        };
        h.onreadystatechange = function () {
            var a = h.timing;
            if (2 == h.readyState) {
                a.responseStart = a.responseStart || n();
                f = -1 < (h.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked");
                if (!f) {
                    var a = h.getResponseHeader("X-Firefox-Spdy"), b = window.chrome && chrome.loadTimes && chrome.loadTimes(), b = b && b.wasFetchedViaSpdy;
                    f = !(!a && !b)
                }
                e.u && e.u(h)
            } else 3 == h.readyState ? f && e.k && (a = h.responseText.substring(g), g = h.responseText.length, e.k(h, a)) : 4 == h.readyState && (a.responseEnd = a.responseEnd || n(), f && e.k && h.responseText.length > g && (a = h.responseText.substring(g), g = h.responseText.length, e.k(h, a)), clearTimeout(k), e.t && e.t(h))
        };
        a = "POST" == a;
        if (e.headers)for (var fa in e.headers)h.setRequestHeader(fa, e.headers[fa]), "content-type" == fa.toLowerCase() && (a = !1);
        a && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        0 < e.w && (k = setTimeout(function () {
            h.abort();
            e.v && e.v(h)
        }, e.w));
        h.timing.fetchStart = n();
        h.send(c);
        return h
    };
    function E(a, b) {
        if (a.forEach)a.forEach(b, void 0); else for (var c = 0, d = a.length; c < d; c++)c in a && b.call(void 0, a[c], c, a)
    }

    function F(a, b) {
        if (a.every)return a.every(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)if (c in a && !b.call(void 0, a[c], c, a))return!1;
        return!0
    }

    function za(a, b) {
        if (a.map)return a.map(b, void 0);
        var c = [];
        c.length = a.length;
        E(a, function (a, e, f) {
            c[e] = b.call(void 0, a, e, f)
        });
        return c
    }

    function G(a) {
        return"[object Array]" == Object.prototype.toString.call(a) ? a : [a]
    };
    function Aa(a, b) {
        a && b && (a in H || (H[a] = []), H[a].push(b))
    }

    function Ba(a, b) {
        a in H && b && F(H[a], function (a, d, e) {
            return a == b ? (e[d] = null, !1) : !0
        })
    }

    function Ca(a) {
        a in H && E(H[a], function (a, c, d) {
            d[c] = null;
            a && a()
        })
    }

    var H = {};
    "ps-s"in q || p("ps-s", {});
    H = q["ps-s"];
    function Da(a, b, c, d) {
        function e() {
            I[b] && (I[b] = 2);
            c && setTimeout(c, 0);
            return null
        }

        var f = "js" == a;
        b = J(a, b);
        I[b] = 1;
        if (!b)return e();
        d = d || document;
        var g = d.createElement(f ? "script" : "link"), k = K(b);
        g.className = a + "-" + k;
        "onload"in g ? g.onerror = g.onload = e : g.onreadystatechange = function () {
            /^c|loade/.test(g.readyState) && e()
        };
        a = d.getElementsByTagName("head")[0];
        f ? (g.async = !0, g.src = b, a.insertBefore(g, a.firstChild)) : (g.rel = "stylesheet", g.href = b, a.appendChild(g));
        return g
    }

    function Ea(a, b) {
        b = J(a, b);
        var c = K(b), c = document.querySelectorAll ? document.querySelectorAll("." + (a + "-" + c)) : [];
        E(c, function (a) {
            a.parentNode && a.parentNode.removeChild(a)
        });
        delete I[b]
    }

    function Fa(a) {
        var b = "js" == a, c = [];
        E(document.querySelectorAll ? document.querySelectorAll(b ? "script[src]" : 'link[rel~="stylesheet"]') : [], function (d) {
            var e = b ? d.src : d.href, e = J(a, e);
            I[e] || (I[e] = 2, e = K(e), ia(d, a + "-" + e), c.push(d))
        });
        return c
    }

    function Ga(a, b) {
        if (b && (b = J(a, b), !I[b])) {
            var c = K(b), d = a + "-" + c, e = a + "-prefetch", c = document.getElementById(e);
            if (!c)c = ma(e, function (a) {
                a.title = e;
                A(e, !0)
            }); else if (c.contentWindow.document.getElementById(d))return;
            d = l(Ha, null, c, a, b, d);
            c.title ? d() : y(e, d)
        }
    }

    function Ha(a, b, c, d) {
        a = a.contentWindow.document;
        "js" == b ? (b = a.createElement("object"), Ia ? a.createElement("script").src = c : b.data = c, b.id = d, a.body.appendChild(b)) : (b = Da(b, c, null, a), b.id = d)
    }

    function J(a, b) {
        var c = "rsrc-p-" + a;
        if (b) {
            var d = b.indexOf("//");
            if (0 > d) {
                c = q[c] || "";
                if (w(c))b = c + b; else for (var e in c)b = b.replace(e, c[e]);
                b = 0 > b.indexOf("." + a) ? b + "." + a : b;
                b = D(b)
            } else 0 == d && (b = D(b))
        }
        return b
    }

    function Ja(a, b) {
        b = J(a, b);
        return!!I[b]
    }

    function Ka(a, b) {
        b = J(a, b);
        return 2 == I[b]
    }

    function K(a) {
        return a ? a.replace(/[^\w]/g, "") : ""
    }

    function L(a, b, c) {
        var d = a + "-" + b;
        M[d] = [];
        E(c, function (b) {
            b = J(a, b);
            M[d].push(b)
        })
    }

    function N(a, b) {
        delete M[a + "-" + b]
    }

    var I = {}, M = {}, Ia = -1 != navigator.userAgent.indexOf(" Trident/");
    "rsrc-s"in q || p("rsrc-s", {});
    I = q["rsrc-s"];
    "rsrc-u"in q || p("rsrc-u", {});
    M = q["rsrc-u"];
    function O(a, b, c) {
        a = G(a);
        var d = w(b), e = d ? b : "", f = d ? c : b;
        b = f;
        if (e) {
            c = F(a, La);
            var g = M["js-" + e];
            !c && g && (m("jsbeforeunload", {name: e, urls: g}), N("js", e), b = function () {
                Ma(e, g);
                f && f()
            })
        }
        c = e || "^" + a.sort().join("^");
        L("js", c, a);
        c = P(c);
        Aa(c, b);
        E(a, function (a) {
            Ja("js", a) ? Na() : (a = Oa(a, Na), e && a.setAttribute("name", e))
        })
    }

    function Pa(a) {
        var b = M["js-" + a] || [];
        N("js", a);
        Ma(a, b)
    }

    function Ma(a, b) {
        b.length && (m("jsunload", {name: a, urls: b}), E(b, function (a) {
            Ea("js", a)
        }))
    }

    function Qa() {
        var a = Fa("js");
        E(a, function (a) {
            var c = a.getAttribute("name");
            c && L("js", c, [a.src])
        })
    }

    function Oa(a, b) {
        return Da("js", a, b)
    }

    function Ra(a, b, c) {
        a = G(a);
        var d = [];
        E(a, function (a) {
            a && !M["js-" + a] && d.push(a)
        });
        var e = !d.length;
        if (b) {
            var f = F(a, Sa);
            e && f ? b() : (a = P(a.sort().join("|")), Aa(a, b))
        }
        c && !e && c(d)
    }

    function Ta(a, b) {
        a = G(a);
        E(a, function (a) {
            a && Ua(a, Q[a] || a) && Va(a)
        });
        Ra(a, b, Wa)
    }

    function Wa(a) {
        E(a, function (a) {
            function c() {
                O(e, a)
            }

            var d = R[a], e = Q[a] || a;
            d ? Ta(d, c) : c()
        })
    }

    function Va(a) {
        a = G(a);
        E(a, function (a) {
            var c = [], d;
            for (d in R) {
                var e = R[d], e = G(e);
                E(e, function (e) {
                    e == a && c.push(d)
                })
            }
            E(c, function (a) {
                Va(a)
            });
            Pa(a)
        })
    }

    function Na() {
        var a = P(""), b;
        for (b in H)0 == b.indexOf(a) && F(b.substring(a.length).split("|"), Sa) && Ca(b)
    }

    function Xa(a) {
        a = G(a);
        E(a, function (a) {
            Ga("js", a)
        })
    }

    function Ya(a, b) {
        if (a = x(a))if (window.execScript)window.execScript(a); else if (v(a, "use strict", 1)) {
            var c = document.createElement("script");
            c.text = a;
            var d = document.getElementsByTagName("head")[0] || document.body;
            d.appendChild(c);
            d.removeChild(c)
        } else(0, eval)(a);
        b && b()
    }

    function P(a) {
        return"js-" + a
    }

    function La(a) {
        return Ka("js", a)
    }

    function Sa(a) {
        var b = M["js-" + a];
        return!a || !!b && F(b, La)
    }

    function Ua(a, b) {
        var c = M["js-" + a];
        return c ? (b = G(b), !F(c, function (a, e) {
            return c[e] == J("js", b[e])
        })) : !1
    }

    var R = {};
    "js-d"in q || p("js-d", {});
    var R = q["js-d"], Q = {};
    "js-u"in q || p("js-u", {});
    Q = q["js-u"];
    function Za(a, b, c) {
        a = G(a);
        var d = w(b), e = d ? b : "", f = d ? c : b;
        b = f;
        if (e) {
            c = F(a, $a);
            var g = M["css-" + e];
            !c && g && (m("cssbeforeunload", {name: e, urls: g}), N("css", e), b = function () {
                ab(e, g);
                f && f()
            })
        }
        c = e || "^" + a.sort().join("^");
        L("css", c, a);
        Aa("css-" + c, b);
        E(a, function (a) {
            Ja("css", a) ? bb() : (a = cb(a, bb), e && a.setAttribute("name", e))
        })
    }

    function ab(a, b) {
        b.length && (m("cssunload", {name: a, urls: b}), E(b, function (a) {
            Ea("css", a)
        }))
    }

    function db() {
        var a = Fa("css");
        E(a, function (a) {
            var c = a.getAttribute("name");
            c && L("css", c, [a.href])
        })
    }

    function cb(a, b) {
        return Da("css", a, b)
    }

    function bb() {
        for (var a in H)0 == a.indexOf("css-") && F(a.substring(4).split("|"), eb) && Ca(a)
    }

    function fb(a) {
        a = G(a);
        E(a, function (a) {
            Ga("css", a)
        })
    }

    function $a(a) {
        return Ka("css", a)
    }

    function eb(a) {
        var b = M["css-" + a];
        return!a || !!b && F(b, $a)
    };
    function gb(a, b, c) {
        if (b) {
            var d = [], e;
            b = 0;
            c && (a += "\r\n");
            var f = a.indexOf("[\r\n", b);
            for (-1 < f && (b = f + 3); -1 < (f = a.indexOf(",\r\n", b));)e = x(a.substring(b, f)), b = f + 3, e && d.push(JSON.parse(e));
            f = a.indexOf("]\r\n", b);
            -1 < f && (e = x(a.substring(b, f)), b = f + 3, e && d.push(JSON.parse(e)));
            e = "";
            if (a.length > b) {
                e = a.substring(b);
                if (a = c)a = e.length - 2, a = 0 <= a && e.indexOf("\r\n", a) == a;
                a && (e = e.substring(0, e.length - 2))
            }
            return{i: d, b: e}
        }
        a = JSON.parse(a);
        "number" == typeof a.length ? d = a : d = [a];
        return{i: d, b: ""}
    }

    function S(a, b, c, d, e) {
        var f = "process " + D(a), g = !r("process-async"), k;
        k = 0;
        b.timing || (b.timing = {});
        b.title && (document.title = b.title);
        d && b.url && D(b.url) != D(window.location.href) && na(b.url + window.location.hash, null, !1, !0);
        if (b.head || b.css)k = l(function (a, b) {
            var c = hb(a);
            if (!(0 >= c.a.length))for (var d = 0, e = c.a.length; d < e; d++) {
                var f = c.a[d];
                if (f.url)Za(f.url, f.name); else if (f.text && (f = f.text, f = x(f))) {
                    var g = document.createElement("style");
                    (document.getElementsByTagName("head")[0] || document.body).appendChild(g);
                    "styleSheet"in g ? g.styleSheet.cssText = f : g.appendChild(document.createTextNode(f))
                }
            }
            b.spfProcessCss = n()
        }, null, b.head || b.css, b.timing), k = y(f, k);
        b.attr && (k = l(function (a, b) {
            for (var c in a) {
                var d = document.getElementById(c);
                if (d) {
                    var e = a[c], f = void 0;
                    for (f in e) {
                        var g = e[f];
                        "class" == f ? d.className = g : "style" == f ? d.style.cssText = g : d.setAttribute(f, g)
                    }
                }
            }
            b.spfProcessAttr = n()
        }, null, b.attr, b.timing), k = y(f, k));
        d = b.html || {};
        var h = k, u;
        for (u in d)k = l(function (a, b) {
            var c = document.getElementById(a);
            if (c) {
                var d = T(b), h =
                    r("animation-class");
                if (ib && t(c, h)) {
                    B(f);
                    var k = wa(c);
                    A(k, !0);
                    d = {r: d, reverse: !!e, e: null, g: null, f: c, A: h + "-old", B: h + "-new", s: e ? h + "-reverse-start" : h + "-forward-start", q: e ? h + "-reverse-end" : h + "-forward-end"};
                    c = l(function (a) {
                        ia(a.f, a.s);
                        a.e = document.createElement("div");
                        a.e.className = a.A;
                        var b = a.f, c = a.e;
                        if (c) {
                            for (var d; d = b.firstChild;)c.appendChild(d);
                            b.appendChild(c)
                        }
                        a.g = document.createElement("div");
                        a.g.className = a.B;
                        a.g.innerHTML = a.r.d;
                        a.reverse ? (b = a.e, b.parentNode.insertBefore(a.g, b)) : (b = a.e, b.parentNode.insertBefore(a.g,
                            b.nextSibling))
                    }, null, d);
                    y(k, c, 0);
                    c = l(function (a) {
                        ja(a.f, a.s);
                        ia(a.f, a.q)
                    }, null, d);
                    y(k, c, 0);
                    c = l(function (a) {
                        a.f.removeChild(a.e);
                        ja(a.f, a.q);
                        ka(a.g);
                        B(k);
                        jb(a.r, function () {
                            C(k)
                        })
                    }, null, d);
                    y(k, c, parseInt(r("animation-duration"), 10));
                    c = l(function (a, b) {
                        C(b)
                    }, null, d, f);
                    y(k, c);
                    A(k)
                } else c.innerHTML = d.d, B(f), jb(d, function () {
                    C(f, g)
                })
            }
        }, null, u, d[u], b.timing), k = y(f, k);
        u = k - h;
        b.foot || b.js ? (k = l(function (a, b, c) {
                c && (b.spfProcessHtml = n());
                B(f);
                jb(T(a), function () {
                    b.spfProcessJs = n();
                    C(f, g)
                })
            }, null, b.foot || b.js, b.timing,
            u), k = y(f, k)) : u && (k = l(function (a) {
            a.spfProcessHtml = n()
        }, null, b.timing), k = y(f, k));
        c && (k = y(f, l(c, null, a, b)));
        A(f, g)
    }

    function kb(a, b, c) {
        var d = "preprocess " + D(a), e;
        if (b.head || b.css)e = l(function (a) {
            lb(hb(a))
        }, null, b.head || b.css), y(d, e);
        var f = b.body || b.html || {}, g;
        for (g in f)f[g] && (e = l(function (a, b) {
            mb(T(b))
        }, null, g, f[g]), y(d, e));
        if (b.foot || b.js)e = l(function (a) {
            mb(T(a))
        }, null, b.foot || b.js), y(d, e);
        c && y(d, l(c, null, a, b));
        A(d)
    }

    function T(a) {
        var b = new nb;
        if (!a)return b;
        if (!w(a))return a.scripts && E(a.scripts, function (a) {
            b.a.push({url: a.url || "", text: a.text || "", name: a.name || "", async: a.async || !1})
        }), b.d = a.html || "", b;
        a = a.replace(ob, function (a, d, e) {
            a = (a = d.match(pb)) ? a[1] : "";
            var f = d.match(qb), f = f ? f[1] : "";
            d = rb.test(d);
            b.a.push({url: a, text: e, name: f, async: d});
            return""
        });
        b.d = a;
        return b
    }

    function jb(a, b) {
        if (0 >= a.a.length)b && b(); else {
            var c = -1, d = function () {
                c++;
                if (c < a.a.length) {
                    var e = a.a[c];
                    e.url ? e.async ? (O(e.url, e.name), d()) : O(e.url, e.name, d) : e.text ? Ya(e.text, d) : d()
                } else b && b()
            };
            d()
        }
    }

    function mb(a) {
        0 >= a.a.length || (a = za(a.a, function (a) {
            return a.url
        }), Xa(a))
    }

    function hb(a) {
        var b = new sb;
        if (!a)return b;
        if (!w(a))return a.styles && E(a.styles, function (a) {
            b.a.push({url: a.url || "", text: a.text || "", name: a.name || ""})
        }), b.d = a.html || "", b;
        a = a.replace(tb, function (a, d) {
            if (-1 != d.indexOf('rel="stylesheet"')) {
                var e = d.match(ub), e = e ? e[1] : "", f = d.match(qb), f = f ? f[1] : "";
                b.a.push({url: e, text: "", name: f});
                return""
            }
            return a
        });
        a = a.replace(vb, function (a, d, e) {
            b.a.push({url: "", text: e, name: ""});
            return""
        });
        b.d = a;
        return b
    }

    function lb(a) {
        0 >= a.a.length || (a = za(a.a, function (a) {
            return a.url
        }), fb(a))
    }

    function sb() {
        this.d = "";
        this.a = []
    }

    function nb() {
        this.d = "";
        this.a = []
    }

    var ib = function () {
        var a = document.createElement("div");
        if ("transition"in a.style)return!0;
        for (var b = ["webkit", "Moz", "Ms", "O", "Khtml"], c = 0, d = b.length; c < d; c++)if (b[c] + "Transition"in a.style)return!0;
        return!1
    }(), ob = /\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig, vb = /\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style\x3e/ig, tb = /\x3clink([\s\S]*?)\x3e/ig, ub = /href="([\S]+)"/, pb = /src="([\S]+)"/, qb = /name="([\S]+)"/, rb = /(?:\s|^)async(?:\s|=|$)/i;

    function wb(a, b) {
        var c = b || {};
        c.method = ((c.method || "GET") + "").toUpperCase();
        c.type = c.type || "request";
        var d = a, e = c.type, f = r("url-identifier") || "";
        if (f) {
            var g = "";
            -1 != d.indexOf("#") && (g = ta(d), d = g[0], g = "#" + g[1]);
            f = f.replace("__type__", e || "");
            d = v(f, "?") && -1 != d.indexOf("?") ? d + f.replace("?", "&") : d + f;
            d += g
        }
        d = D(d);
        e = {};
        e.startTime = n();
        e.fetchStart = e.startTime;
        n:{
            var g = xb(a, c.current, null, c.type, !1), k = c.current, f = [];
            k && (f.push(g + " previous " + k), f.push(g + " previous " + xa(k)));
            f.push(g);
            g = 0;
            for (k = f.length; g < k; g++) {
                var h;
                r:{
                    h = f[g];
                    var u = s();
                    if (h in u) {
                        u = u[h];
                        if (ga(u)) {
                            h = u.data;
                            break r
                        }
                        da(h)
                    }
                    h = void 0
                }
                if (h) {
                    f = {key: f[g], response: h};
                    break n
                }
            }
            f = null
        }
        if (f)return setTimeout(l(yb, null, a, c, e, f.key, f.response), 0), null;
        f = {};
        void 0 != c.p && (f["X-SPF-Referer"] = c.p);
        c.current && (f["X-SPF-Previous"] = c.current);
        h = {o: !1, b: "", complete: []};
        g = l(zb, null, a, h);
        k = l(Ab, null, a, c, h);
        e = l(Bb, null, a, c, e, h);
        e = {headers: f, w: r("request-timeout"), u: g, k: k, t: e, v: e};
        return"POST" == c.method ? ya("POST", d, c.n, e) : ya("GET", d, null, e)
    }

    function yb(a, b, c, d, e) {
        var f = !1;
        c.responseStart = c.responseEnd = n();
        b.type && v(b.type, "navigate") && (c.navigationStart = c.startTime, c.spfPrefetchType = "cache", r("cache-unified") || (da(d), f = !0));
        if (b.c && "multipart" == e.type) {
            d = e.parts;
            for (var g = 0; g < d.length; g++)b.c(a, d[g])
        }
        Cb(a, b, c, e, f)
    }

    function zb(a, b, c) {
        a = c.getResponseHeader("X-SPF-Response-Type") || "";
        b.o = -1 != a.toLowerCase().indexOf("multipart")
    }

    function Ab(a, b, c, d, e, f) {
        if (c.o) {
            e = c.b + e;
            var g;
            try {
                g = gb(e, !0, f)
            } catch (k) {
                d.abort();
                b.h && b.h(a, k);
                return
            }
            if (b.c)for (d = 0; d < g.i.length; d++)b.c(a, g.i[d]);
            c.complete = c.complete.concat(g.i);
            c.b = g.b
        }
    }

    function Bb(a, b, c, d, e) {
        if (e.timing)for (var f in e.timing)c[f] = e.timing[f];
        "navigate" == b.type && (c.navigationStart = c.startTime);
        d.complete.length && (d.b = x(d.b), d.b && Ab(a, b, d, e, "", !0));
        var g;
        try {
            g = gb(e.responseText).i
        } catch (k) {
            b.h && b.h(a, k);
            return
        }
        if (b.c && 1 < g.length)for (d = d.complete.length; d < g.length; d++)b.c(a, g[d]);
        if (1 < g.length) {
            var h;
            d = 0;
            for (e = g.length; d < e; d++)f = g[d], f.cacheType && (h = f.cacheType);
            g = {parts: g, type: "multipart"};
            h && (g.cacheType = h)
        } else g = 1 == g.length ? g[0] : {};
        Cb(a, b, c, g, !0)
    }

    function Cb(a, b, c, d, e) {
        if (e && "POST" != b.method && (e = xb(a, b.current, d.cacheType, b.type, !0))) {
            var f = r("cache-lifetime"), f = parseInt(f, 10), g = parseInt(r("cache-max"), 10);
            if (!(0 >= f || 0 >= g)) {
                var g = s(), k = (parseInt(q["cache-counter"], 10) || 0) + 1;
                p("cache-counter", k);
                g[e] = {data: d, life: f, time: n(), count: k};
                setTimeout(ea, 1E3)
            }
        }
        d.timing = c;
        b.l && b.l(a, d)
    }

    function xb(a, b, c, d, e) {
        a = D(a);
        var f;
        r("cache-unified") ? f = a : "navigate-back" == d || "navigate-forward" == d ? f = "history " + a : "navigate" == d ? f = (e ? "history " : "prefetch ") + a : "prefetch" == d && (f = e ? "prefetch " + a : "");
        b && "url" == c ? f += " previous " + b : b && "path" == c && (f += " previous " + xa(b));
        return f || ""
    };
    function Db(a) {
        return la(a, function (a) {
            return t(a, r("link-class"))
        })
    }

    function Eb(a) {
        return la(a, function (a) {
            return t(a, r("nolink-class"))
        })
    }

    function Fb(a, b) {
        return la(a, function (a) {
            return a.href && "img" != a.tagName.toLowerCase()
        }, b)
    }

    function Gb(a) {
        if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || 0 < a.button)return null;
        var b = Db(a.target);
        return!b || r("nolink-class") && Eb(a.target) ? null : (a = Fb(a.target, b)) ? a.href : null
    }

    function Hb() {
        if (!q["nav-init"])return!1;
        var a = (parseInt(q["nav-counter"], 10) || 0) + 1, b = parseInt(r("navigate-limit"), 10), b = isNaN(b) ? Infinity : b;
        if (a > b)return!1;
        a = n() - (parseInt(q["nav-time"], 10) - 1);
        b = parseInt(r("navigate-lifetime"), 10);
        b = isNaN(b) ? Infinity : b;
        return a > b ? !1 : !0
    }

    function Ib(a) {
        if (!a.defaultPrevented) {
            var b = Gb(a);
            null !== b && (b && b != window.location.href ? Hb() && (Jb(b), a.preventDefault()) : a.preventDefault())
        }
    }

    function Kb(a) {
        var b = Gb(a);
        b && b != window.location.href && setTimeout(function () {
            Lb(b, void 0)
        }, 0)
    }

    function Mb(a, b) {
        var c = !(!b || !b["spf-back"]), d = b && b["spf-referer"], e = b && b["spf-current"];
        Hb() ? Jb(a, null, e, d, !0, c) : U(a)
    }

    function Jb(a, b, c, d, e, f) {
        b = b || {};
        p("nav-counter", (parseInt(q["nav-counter"], 10) || 0) + 1);
        p("nav-time", n());
        d = void 0 == d ? window.location.href : d;
        p("nav-referer", d);
        c = e ? c : window.location.href;
        V();
        Nb(a);
        var g = D(a), k = "preprocess " + D(g), h;
        for (h in z)k != h && v(h, "preprocess") && va(h);
        h = W()[g];
        p("nav-request", h);
        p("nav-promote", null);
        p("nav-promote-time", null);
        h && 4 != h.readyState ? (f = !!e, e = "preprocess " + D(a), c = "promote " + D(a), p("nav-promote", a), p("nav-promote-time", n()), va(e), A(c, !0), f || Ob(a, d, l(X, null, b))) : (e = !!e,
            h = !!f, f = l(X, null, b), b = wb(a, {method: b.method, c: l(Pb, null, b, h), h: f, l: l(Qb, null, b, h, ""), n: b.postData, type: "navigate" + (e ? h ? "-back" : "-forward" : ""), current: c, p: d}), p("nav-request", b), e || Ob(a, d, f));
        m("requested", {url: a}) || U(a)
    }

    function Ob(a, b, c) {
        try {
            oa(!1, a, {"spf-referer": b}, void 0)
        } catch (d) {
            V(), c(a, d)
        }
    }

    function X(a, b, c) {
        p("nav-request", null);
        a = !Y(a.onError, {url: b, err: c});
        a || (a = !Rb(b, c)) || U(b)
    }

    function Rb(a, b) {
        return m("error", {url: a, err: b})
    }

    function Pb(a, b, c, d) {
        if (m("partreceived", {url: c, part: d}))if (d.redirect)Sb(a, d.redirect); else try {
            S(c, d, function () {
                var b = !Y(a.onPart, {url: c, part: d});
                b ? U(c) : (b = !m("partprocessed", {url: c, part: d})) && U(c)
            }, !0, b)
        } catch (e) {
            X(a, c, e)
        } else U(c)
    }

    function Qb(a, b, c, d, e) {
        p("nav-request", null);
        q["nav-promote"] == c && (c = e.timing || {}, c.navigationStart = q["nav-promote-time"], c.spfPrefetchType = "promote");
        if (m("received", {url: d, response: e}))if (e.redirect)Sb(a, e.redirect); else {
            c = "multipart" == e.type ? {} : e;
            try {
                S(d, c, function () {
                    Y(a.onSuccess, {url: d, response: e}) && m("processed", {url: d, response: e})
                }, !0, b)
            } catch (f) {
                X(a, d, f)
            }
        } else U(d)
    }

    function Sb(a, b) {
        try {
            b += window.location.hash, na(b, null, !0, !0)
        } catch (c) {
            V(), X(a, b, c)
        }
    }

    function V() {
        var a = q["nav-request"];
        a && (a.abort(), p("nav-request", null))
    }

    function Y(a, b) {
        "string" == typeof a && (a = r(a));
        var c = Array.prototype.slice.call(arguments);
        c[0] = a;
        return!1 !== aa.apply(null, c)
    }

    function U(a) {
        V();
        Nb();
        window.location.href = a
    }

    function Tb(a, b, c) {
        b = b || {};
        c = c || a;
        wb(a, {method: b.method, c: l(Ub, null, !1, b, c), h: l(Vb, null, !1, b, c), l: l(Wb, null, !1, b, c), n: b.postData, type: "load"})
    }

    function Lb(a, b, c) {
        b = b || {};
        c = c || a;
        c = wb(a, {method: b.method, c: l(Ub, null, !0, b, c), h: l(Vb, null, !0, b, c), l: l(Wb, null, !0, b, c), n: b.postData, type: "prefetch", current: window.location.href});
        a = D(a);
        W()[a] = c
    }

    function Vb(a, b, c, d, e) {
        Y(b.onError, {url: d, err: e});
        a && (Xb(d), q["nav-promote"] == c && X(b, d, e))
    }

    function Ub(a, b, c, d, e) {
        if (e.redirect)Yb(a, b, c, e.redirect); else {
            if (a) {
                var f = l(Pb, null, b, !1, d, e), g = "promote " + D(c);
                y(g, f);
                if (q["nav-promote"] == c) {
                    A(g, !0);
                    return
                }
            }
            (a ? kb : S)(d, e, function () {
                Y(b.onPart, {url: d, part: e})
            })
        }
    }

    function Wb(a, b, c, d, e) {
        if (e.redirect)Yb(a, b, c, e.redirect); else {
            var f = "promote " + D(c);
            if (a) {
                Xb(d);
                if (q["nav-promote"] == c) {
                    y(f, l(Qb, null, b, !1, c, d, e));
                    A(f, !0);
                    return
                }
                va(f)
            }
            (a ? kb : S)(d, "multipart" == e.type ? {} : e, function () {
                Y(b.onSuccess, {url: d, response: e})
            })
        }
    }

    function Yb(a, b, c, d) {
        (a ? Lb : Tb)(d, {onSuccess: b.onSuccess, onPart: b.onPart, onError: b.onError}, c)
    }

    function Xb(a) {
        a = D(a);
        var b = W(), c = b[a];
        c && c.abort();
        delete b[a]
    }

    function Nb(a) {
        var b = W();
        a = a && D(a);
        for (var c in b)a != c && Xb(c)
    }

    function W() {
        return"nav-prefetches"in q ? q["nav-prefetches"] : p("nav-prefetches", {})
    };
    function Z() {
        Qa();
        db();
        "complete" == document.readyState && (document.removeEventListener ? document.removeEventListener("DOMContentLoaded", Z, !1) : document.detachEvent && document.detachEvent("onreadystatechange", Z))
    }

    document.addEventListener ? document.addEventListener("DOMContentLoaded", Z, !1) : document.attachEvent && document.attachEvent("onreadystatechange", Z);
    Z();
    var Zb = {init: function (a) {
        var b = !("undefined" == typeof History || !History.prototype.pushState);
        a = a || {};
        for (var c in ba) {
            var d = c, e = c in a ? a[c] : ba[c];
            ca()[d] = e
        }
        if (b) {
            c = Rb;
            if (!q["history-init"] && window.addEventListener) {
                a = window.location.href;
                window.addEventListener("popstate", ra, !1);
                p("history-init", !0);
                p("history-callback", Mb);
                p("history-error-callback", c);
                p("history-listener", ra);
                p("history-url", a);
                p("history-timestamp", n());
                d = {"spf-referer": document.referrer};
                try {
                    na(a, d)
                } catch (f) {
                    c && c(a, f)
                }
            }
            !q["nav-init"] &&
            document.addEventListener && (document.addEventListener("click", Ib, !1), !r("prefetch-on-mousedown") || "ontouchstart"in window || 0 < window.navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints || (document.addEventListener("mousedown", Kb, !1), p("prefetch-listener", Kb)), p("nav-init", !0), p("nav-counter", 0), p("nav-time", n()), p("nav-listener", Ib))
        }
        return b
    }, dispose: function () {
        "undefined" != typeof History && History.prototype.pushState && (V(), q["nav-init"] && (document.removeEventListener && (document.removeEventListener("click",
            q["nav-listener"], !1), r("prefetch-on-mousedown") && document.removeEventListener("mousedown", q["prefetch-listener"], !1)), p("nav-init", !1), p("nav-counter", null), p("nav-time", null), p("nav-listener", null)), q["history-init"] && (window.removeEventListener && window.removeEventListener("popstate", q["history-listener"], !1), p("history-init", !1), p("history-callback", null), p("history-error-callback", null), p("history-listener", null), p("history-url", null), p("history-timestamp", 0)));
        ca({})
    }, navigate: function (a, b) {
        a &&
            a != window.location.href && (Hb() ? Jb(a, b) : U(a))
    }, load: function (a, b) {
        Tb(a, b)
    }, process: S, prefetch: function (a, b) {
        Lb(a, b)
    }}, $b = {script: {load: O, get: Oa, ready: Ra, done: function (a) {
        L("js", a, []);
        Na()
    }, require: Ta, declare: function (a, b) {
        if (a) {
            for (var c in a)R[c] = a[c];
            if (b)for (c in b)Q[c] = b[c]
        }
    }, path: function (a) {
        p("rsrc-p-js", a)
    }, unload: Pa, ignore: function (a, b) {
        a = G(a);
        var c = P(a.sort().join("|"));
        Ba(c, b)
    }, unrequire: Va, prefetch: Xa}, style: {load: Za, get: cb, unload: function (a) {
        var b = M["css-" + a] || [];
        N("css", a);
        ab(a, b)
    }, path: function (a) {
        p("rsrc-p-css",
            a)
    }, prefetch: fb}};
    window.spf = window.spf || {};
    for (var ac in Zb)window.spf[ac] = Zb[ac];
    for (var $ in $b)for (var bc in $b[$])window.spf[$] = window.spf[$] || {}, window.spf[$][bc] = $b[$][bc];
    m("ready");
})();
