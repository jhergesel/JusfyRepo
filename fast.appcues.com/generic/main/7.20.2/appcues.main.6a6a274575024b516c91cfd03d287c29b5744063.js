var Appcues = (function() {
    "use strict";

    function Pe(e) {
        return e.reduce((t, n) => Object.assign(t, {
            [n]: n
        }), {})
    }
    const Gd = ["_hostname", "_lastBrowserLanguage", "_lastPageTitle", "_lastPageUrl", "_currentPageTitle", "_currentPageUrl", "_localId", "_sessionPageviews", "_updatedAt", "_userAgent", "_appcuesId", "_sessionRandomizer", "_testContentId", "_showChecklist", "_doNotTrack", "_lastSeenAt", "_timezoneCode", "_timezoneOffset", "_appId"],
        jd = ["flow_started", "flow_completed", "flow_skipped", "flow_aborted", "step_started", "step_completed", "step_skipped", "step_interacted", "step_aborted", "form_submitted", "form_field_submitted", "nps_feedback", "nps_score", "nps_clicked_update_nps_score", "nps_ask_me_later_selected_at", "nps_survey_started", "checklist_shown", "checklist_completed", "checklist_skipped", "checklist_dismissed", "checklist_item_started", "checklist_item_completed", "appcues_custom", "experiment_entered", "v2:experience_started", "v2:step_seen", "v2:icon_seen", "v2:step_interaction", "v2:button_pin_seen"],
        qd = "_appcuesForm_",
        xn = "_appcuesSatisfaction_",
        Xi = "AppcuesSettings",
        Ji = "apc_user_id",
        ur = "apc_group_id",
        Qi = "apc_local_id",
        Dn = "apc_next_content_id",
        nn = "apc_user",
        Zi = "apc_debug_enabled",
        ec = "apc_debug_url",
        qr = "apc_ann_errors",
        Kt = "apc_curr_flow",
        Kr = "apc_curr_checklist",
        eo = "apc_cl:",
        to = "apc_followed_test_link",
        xe = "localStorage",
        Ie = "sessionStorage",
        Kd = 720 * 60 * 60,
        rn = {
            PAGE_VIEW: "appcues:page_view"
        },
        Un = {
            NPS: "nps",
            FLOW: "flow"
        },
        Yd = ["v2:experience_completed", "v2:experience_skipped", "v2:experience_snoozed"],
        Q = Pe(["PENDING", "STARTED", "CALCULATING_POSITIONS", "READY", "WILL_SHOW", "SHOWING", "WILL_CLOSE", "ERROR", "FETCHING", "RUNNING", "DISMISSED", "HIDING"]),
        no = [Q.READY, Q.WILL_SHOW, Q.SHOWING, Q.WILL_CLOSE],
        vt = Pe(["COMPLETED", "SKIPPED", "SHOWING_OTHER_CONTENT", "CLEAR"]),
        tc = {
            EVENT_TRIGGER: "event_trigger",
            PAGE_VIEW: "page_view"
        },
        X = {
            MODAL: "modal",
            HOTSPOTS: "hotspot-group",
            SEQUENTIAL_HOTSPOTS: "hotspot-group-sequential",
            DEBUGGER: "debugger",
            JOURNEY: "journey",
            ACTION: "action",
            SATISFACTION_SURVEY: "satisfaction-survey",
            CHECKLIST: "checklist",
            TEST_MODE: "test-mode",
            WIDGET: "widget",
            ANNOTATION: ["hotspot-group"]
        },
        gt = {
            REDIRECT: "redirect",
            WAIT_FOR_PAGE: "wait-for-page",
            SHOW_FLOW: "show_flow"
        },
        ro = 2,
        Fn = {
            COMPLETED: "completed",
            DISMISSED: "dismissed",
            SHOWN_MANUALLY: "shown_manually"
        },
        Yt = {
            EXPANDED: "expanded",
            COLLAPSED: "collapsed",
            FIRSTVIEW: "first_view"
        },
        io = {
            OPENED: "opened",
            CLOSED: "closed",
            OPEN_ONCE: "open_once"
        },
        zd = ["identify", "track", "page", "anonymous", "show", "on", "off", "once", "reset", "debug", "user", "settings", "content", "injectContent", "injectStyles", "start", "initMixpanel", "initHeap", "initIntercom", "initCIO", "initVero", "initWoopra", "initAmplitude", "initKlaviyo", "initCalq", "initTD", "initLl", "initKM", "initGA", "initGTM", "initSegment", "initRudderstack", "initBraze", "initFullStory", "initHotjar", "initLogRocket", "loadLaunchpad", "group"],
        nc = 20,
        Xd = 300,
        Jd = 700,
        Hn = 2147483647,
        yt = 24,
        Qd = 20,
        Zd = 10,
        ef = 1,
        oo = 3,
        rc = {
            CALCULATE: "CALCULATE"
        },
        Mn = Pe(["WAIT_FOR_ONE_ELEMENT", "WAIT_FOR_MOUSE_EVENT"]),
        on = 200,
        Y = Pe(["STEP_ATTEMPTED", "STEP_SHOWN", "STEP_COMPLETED", "STEP_SKIPPED", "STEP_END", "STEP_INTERACTED", "STEP_ERRORED", "CHILD_ACTIVATED", "CHILD_DEACTIVATED", "CHILDREN_ERRORED", "CHILDREN_RECOVERED", "CHILD_NEXT", "CHILD_RUN", "CSS_LOADED", "STEP_REVEALED"]),
        tf = 1e3,
        so = 300,
        nf = 500,
        rf = 50,
        co = 3e3,
        lo = {
            TEXT: "text",
            EXIT_SYMBOL: "exit-symbol"
        },
        dr = {
            LABEL_TOOLTIP: "Tooltip",
            LABEL_CHECKLIST: "Contextual help checklist present on screen",
            ROLE_CONTAINER: "alert",
            ROLE_TOOLTIP: "alertdialog",
            HASPOPUP_TOOLTIP: "dialog"
        },
        ic = 6e4,
        Yr = "apc_session",
        of = 30,
        ao = "launchpad_kb_search";
    var sf = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        oc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        sn = function(t) {
            return "@@redux-saga/" + t
        },
        sc = sn("TASK"),
        cc = sn("HELPER"),
        uo = sn("MATCH"),
        lc = sn("CANCEL_PROMISE"),
        ac = sn("SAGA_ACTION"),
        uc = sn("SELF_CANCELLATION"),
        cf = function(t) {
            return function() {
                return t
            }
        },
        dc = cf(!0),
        De = function() {},
        fc = function(t) {
            return t
        };

    function ge(e, t, n) {
        if (!t(e)) throw hc("error", "uncaught at check", n), new Error(n)
    }
    var lf = Object.prototype.hasOwnProperty;

    function fo(e, t) {
        return B.notUndef(e) && lf.call(e, t)
    }
    var B = {
            undef: function(t) {
                return t == null
            },
            notUndef: function(t) {
                return t != null
            },
            func: function(t) {
                return typeof t == "function"
            },
            number: function(t) {
                return typeof t == "number"
            },
            string: function(t) {
                return typeof t == "string"
            },
            array: Array.isArray,
            object: function(t) {
                return t && !B.array(t) && (typeof t > "u" ? "undefined" : oc(t)) === "object"
            },
            promise: function(t) {
                return t && B.func(t.then)
            },
            iterator: function(t) {
                return t && B.func(t.next) && B.func(t.throw)
            },
            iterable: function(t) {
                return t && B.func(Symbol) ? B.func(t[Symbol.iterator]) : B.array(t)
            },
            task: function(t) {
                return t && t[sc]
            },
            observable: function(t) {
                return t && B.func(t.subscribe)
            },
            buffer: function(t) {
                return t && B.func(t.isEmpty) && B.func(t.take) && B.func(t.put)
            },
            pattern: function(t) {
                return t && (B.string(t) || (typeof t > "u" ? "undefined" : oc(t)) === "symbol" || B.func(t) || B.array(t))
            },
            channel: function(t) {
                return t && B.func(t.take) && B.func(t.close)
            },
            helper: function(t) {
                return t && t[cc]
            },
            stringableFunc: function(t) {
                return B.func(t) && fo(t, "toString")
            }
        },
        po = {
            assign: function(t, n) {
                for (var r in n) fo(n, r) && (t[r] = n[r])
            }
        };

    function zr(e, t) {
        var n = e.indexOf(t);
        n >= 0 && e.splice(n, 1)
    }
    var af = {
        from: function(t) {
            var n = Array(t.length);
            for (var r in t) fo(t, r) && (n[r] = t[r]);
            return n
        }
    };

    function uf() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = sf({}, e),
            n = new Promise(function(r, i) {
                t.resolve = r, t.reject = i
            });
        return t.promise = n, t
    }

    function Xr(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
            n = void 0,
            r = new Promise(function(i) {
                n = setTimeout(function() {
                    return i(t)
                }, e)
            });
        return r[lc] = function() {
            return clearTimeout(n)
        }, r
    }

    function df() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return function() {
            return ++e
        }
    }
    var pc = df(),
        ff = function(t) {
            throw t
        },
        pf = function(t) {
            return {
                value: t,
                done: !0
            }
        };

    function ho(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ff,
            n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "",
            r = arguments[3],
            i = {
                name: n,
                next: e,
                throw: t,
                return: pf
            };
        return r && (i[cc] = !0), typeof Symbol < "u" && (i[Symbol.iterator] = function() {
            return i
        }), i
    }

    function hc(e, t) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ""
    }

    function mo(e, t) {
        return function() {
            return e.apply(void 0, arguments)
        }
    }
    var mc = function(t) {
            return new Error(`
  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug
  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.
  Error: ` + t + `
`)
        },
        Ec = function(t, n) {
            return (t ? t + "." : "") + "setContext(props): argument " + n + " is not a plain object"
        },
        hf = function(t) {
            return function(n) {
                return t(Object.defineProperty(n, ac, {
                    value: !0
                }))
            }
        },
        gc = sn("IO"),
        Jr = "TAKE",
        Eo = "PUT",
        yc = "ALL",
        Sc = "RACE",
        Tc = "CALL",
        mf = "CPS",
        go = "FORK",
        Cc = "JOIN",
        _c = "CANCEL",
        Ic = "SELECT",
        vc = "ACTION_CHANNEL",
        Ac = "CANCELLED",
        bc = "FLUSH",
        wc = "GET_CONTEXT",
        Ef = "SET_CONTEXT",
        Nc = `
(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)`,
        Je = function(t, n) {
            var r;
            return r = {}, r[gc] = !0, r[t] = n, r
        },
        gf = function(t) {
            return ge(Ve.fork(t), B.object, "detach(eff): argument must be a fork effect"), t[go].detached = !0, t
        };

    function j() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "*";
        if (arguments.length && ge(arguments[0], B.notUndef, "take(patternOrChannel): patternOrChannel is undefined"), B.pattern(e)) return Je(Jr, {
            pattern: e
        });
        if (B.channel(e)) return Je(Jr, {
            channel: e
        });
        throw new Error("take(patternOrChannel): argument " + String(e) + " is not valid channel or a valid pattern")
    }
    j.maybe = function() {
        var e = j.apply(void 0, arguments);
        return e[Jr].maybe = !0, e
    }, j.maybe;

    function C(e, t) {
        return arguments.length > 1 ? (ge(e, B.notUndef, "put(channel, action): argument channel is undefined"), ge(e, B.channel, "put(channel, action): argument " + e + " is not a valid channel"), ge(t, B.notUndef, "put(channel, action): argument action is undefined")) : (ge(e, B.notUndef, "put(action): argument action is undefined"), t = e, e = null), Je(Eo, {
            channel: e,
            action: t
        })
    }
    C.resolve = function() {
        var e = C.apply(void 0, arguments);
        return e[Eo].resolve = !0, e
    }, C.sync = mo(C.resolve);

    function ft(e) {
        return Je(yc, e)
    }

    function We(e) {
        return Je(Sc, e)
    }

    function Oc(e, t, n) {
        ge(t, B.notUndef, e + ": argument fn is undefined");
        var r = null;
        if (B.array(t)) {
            var i = t;
            r = i[0], t = i[1]
        } else if (t.fn) {
            var o = t;
            r = o.context, t = o.fn
        }
        return r && B.string(t) && B.func(r[t]) && (t = r[t]), ge(t, B.func, e + ": argument " + t + " is not a function"), {
            context: r,
            fn: t,
            args: n
        }
    }

    function g(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Je(Tc, Oc("call", e, n))
    }

    function F(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Je(go, Oc("fork", e, n))
    }

    function At(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return gf(F.apply(void 0, [e].concat(n)))
    }

    function cn() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (t.length > 1) return ft(t.map(function(i) {
            return cn(i)
        }));
        var r = t[0];
        return ge(r, B.notUndef, "join(task): argument task is undefined"), ge(r, B.task, "join(task): argument " + r + " is not a valid Task object " + Nc), Je(Cc, r)
    }

    function st() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (t.length > 1) return ft(t.map(function(i) {
            return st(i)
        }));
        var r = t[0];
        return t.length === 1 && (ge(r, B.notUndef, "cancel(task): argument task is undefined"), ge(r, B.task, "cancel(task): argument " + r + " is not a valid Task object " + Nc)), Je(_c, r || uc)
    }

    function A(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return arguments.length === 0 ? e = fc : (ge(e, B.notUndef, "select(selector,[...]): argument selector is undefined"), ge(e, B.func, "select(selector,[...]): argument " + e + " is not a function")), Je(Ic, {
            selector: e,
            args: n
        })
    }

    function yf(e, t) {
        return ge(e, B.notUndef, "actionChannel(pattern,...): argument pattern is undefined"), arguments.length > 1 && (ge(t, B.notUndef, "actionChannel(pattern, buffer): argument buffer is undefined"), ge(t, B.buffer, "actionChannel(pattern, buffer): argument " + t + " is not a valid buffer")), Je(vc, {
            pattern: e,
            buffer: t
        })
    }

    function Qr() {
        return Je(Ac, {})
    }

    function yo(e) {
        return ge(e, B.channel, "flush(channel): argument " + e + " is not valid channel"), Je(bc, e)
    }

    function Sf(e) {
        return ge(e, B.string, "getContext(prop): argument " + e + " is not a string"), Je(wc, e)
    }
    var Ke = function(t) {
            return function(n) {
                return n && n[gc] && n[t]
            }
        },
        Ve = {
            take: Ke(Jr),
            put: Ke(Eo),
            all: Ke(yc),
            race: Ke(Sc),
            call: Ke(Tc),
            cps: Ke(mf),
            fork: Ke(go),
            join: Ke(Cc),
            cancel: Ke(_c),
            select: Ke(Ic),
            actionChannel: Ke(vc),
            cancelled: Ke(Ac),
            flush: Ke(bc),
            getContext: Ke(wc),
            setContext: Ke(Ef)
        },
        kc = {
            done: !0,
            value: void 0
        },
        Zr = {};

    function Tf(e) {
        return B.channel(e) ? "channel" : Array.isArray(e) ? String(e.map(function(t) {
            return String(t)
        })) : String(e)
    }

    function Cf(e, t) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "iterator",
            r = void 0,
            i = t;

        function o(s, c) {
            if (i === Zr) return kc;
            if (c) throw i = Zr, c;
            r && r(s);
            var l = e[i](),
                a = l[0],
                d = l[1],
                f = l[2];
            return i = a, r = f, i === Zr ? kc : d
        }
        return ho(o, function(s) {
            return o(null, s)
        }, n, !0)
    }
    var _f = "Channel's Buffer overflow!",
        Rc = 1,
        If = 2,
        Lc = 3,
        Pc = 4,
        vf = {
            isEmpty: dc,
            put: De,
            take: De
        };

    function ei() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
            t = arguments[1],
            n = new Array(e),
            r = 0,
            i = 0,
            o = 0,
            s = function(d) {
                n[i] = d, i = (i + 1) % e, r++
            },
            c = function() {
                if (r != 0) {
                    var d = n[o];
                    return n[o] = null, r--, o = (o + 1) % e, d
                }
            },
            l = function() {
                for (var d = []; r;) d.push(c());
                return d
            };
        return {
            isEmpty: function() {
                return r == 0
            },
            put: function(d) {
                if (r < e) s(d);
                else {
                    var f = void 0;
                    switch (t) {
                        case Rc:
                            throw new Error(_f);
                        case Lc:
                            n[i] = d, i = (i + 1) % e, o = i;
                            break;
                        case Pc:
                            f = 2 * e, n = l(), r = n.length, i = n.length, o = 0, n.length = f, e = f, s(d);
                            break
                    }
                }
            },
            take: c,
            flush: l
        }
    }
    var Dt = {
            none: function() {
                return vf
            },
            fixed: function(t) {
                return ei(t, Rc)
            },
            dropping: function(t) {
                return ei(t, If)
            },
            sliding: function(t) {
                return ei(t, Lc)
            },
            expanding: function(t) {
                return ei(t, Pc)
            }
        },
        xc = [],
        ti = 0;

    function Af(e) {
        try {
            So(), e()
        } finally {
            Uc()
        }
    }

    function Dc(e) {
        xc.push(e), ti || (So(), Fc())
    }

    function So() {
        ti++
    }

    function Uc() {
        ti--
    }

    function Fc() {
        Uc();
        for (var e = void 0; !ti && (e = xc.shift()) !== void 0;) Af(e)
    }
    var bf = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Hc = "@@redux-saga/CHANNEL_END",
        fr = {
            type: Hc
        },
        ni = function(t) {
            return t && t.type === Hc
        };

    function wf() {
        var e = [];

        function t(r) {
            return e.push(r),
                function() {
                    return zr(e, r)
                }
        }

        function n(r) {
            for (var i = e.slice(), o = 0, s = i.length; o < s; o++) i[o](r)
        }
        return {
            subscribe: t,
            emit: n
        }
    }
    var Nf = "invalid buffer passed to channel factory function",
        Of = "Saga was provided with an undefined action";

    function ri() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dt.fixed(),
            t = !1,
            n = [];
        ge(e, B.buffer, Nf);

        function r() {
            if (t && n.length) throw mc("Cannot have a closed channel with pending takers");
            if (n.length && !e.isEmpty()) throw mc("Cannot have pending takers with non empty buffer")
        }

        function i(l) {
            if (r(), ge(l, B.notUndef, Of), !t) {
                if (!n.length) return e.put(l);
                for (var a = 0; a < n.length; a++) {
                    var d = n[a];
                    if (!d[uo] || d[uo](l)) return n.splice(a, 1), d(l)
                }
            }
        }

        function o(l) {
            r(), ge(l, B.func, "channel.take's callback must be a function"), t && e.isEmpty() ? l(fr) : e.isEmpty() ? (n.push(l), l.cancel = function() {
                return zr(n, l)
            }) : l(e.take())
        }

        function s(l) {
            if (r(), ge(l, B.func, "channel.flush' callback must be a function"), t && e.isEmpty()) {
                l(fr);
                return
            }
            l(e.flush())
        }

        function c() {
            if (r(), !t && (t = !0, n.length)) {
                var l = n;
                n = [];
                for (var a = 0, d = l.length; a < d; a++) l[a](fr)
            }
        }
        return {
            take: o,
            put: i,
            flush: s,
            close: c,
            get __takers__() {
                return n
            },
            get __closed__() {
                return t
            }
        }
    }

    function ln(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt.none(),
            n = arguments[2];
        arguments.length > 2 && ge(n, B.func, "Invalid match function passed to eventChannel");
        var r = ri(t),
            i = function() {
                r.__closed__ || (o && o(), r.close())
            },
            o = e(function(s) {
                if (ni(s)) {
                    i();
                    return
                }
                n && !n(s) || r.put(s)
            });
        if (r.__closed__ && o(), !B.func(o)) throw new Error("in eventChannel: subscribe should return a function to unsubscribe");
        return {
            take: r.take,
            flush: r.flush,
            close: i
        }
    }

    function kf(e) {
        var t = ln(function(n) {
            return e(function(r) {
                if (r[ac]) {
                    n(r);
                    return
                }
                Dc(function() {
                    return n(r)
                })
            })
        });
        return bf({}, t, {
            take: function(r, i) {
                arguments.length > 1 && (ge(i, B.func, "channel.take's matcher argument must be a function"), r[uo] = i), t.take(r)
            }
        })
    }

    function Rf(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = {
                done: !1,
                value: j(e)
            },
            s = function(d) {
                return {
                    done: !1,
                    value: F.apply(void 0, [t].concat(r, [d]))
                }
            },
            c = void 0,
            l = function(d) {
                return c = d
            };
        return Cf({
            q1: function() {
                return ["q2", o, l]
            },
            q2: function() {
                return c === fr ? [Zr] : ["q1", s(c)]
            }
        }, "q1", "takeEvery(" + Tf(e) + ", " + t.name + ")")
    }

    function $n(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        return F.apply(void 0, [Rf, e, t].concat(r))
    }
    const Lf = Object.prototype.toString,
        Pf = ["Object", "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
        oe = {};

    function Mc(e) {
        return t => Lf.call(t) === `[object ${e}]`
    }
    Pf.forEach(e => {
        oe[e.toLowerCase()] = Mc(e)
    }), oe.array = Array.isArray || Mc("Array"), oe.undefined = e => typeof e > "u", oe.defined = e => !oe.undefined(e) && e !== null, oe.inArray = (e, t) => {
        let n = e.length;
        for (; n--;)
            if (e[n] === t) return !0;
        return !1
    };

    function D(e, t = null) {
        return (...n) => {
            try {
                const r = e(...n);
                return oe.defined(r) ? r : t
            } catch {
                return t
            }
        }
    }

    function ct(e, t) {
        const n = new Object(e),
            r = n.length >>> 0;
        if (typeof t != "function") throw new TypeError("predicate must be a function");
        let i = 0;
        for (; i < r;) {
            const o = n[i];
            if (t(o, i, n)) return o;
            i += 1
        }
        return null
    }
    const Bn = e => e && e.type === X.JOURNEY,
        Wn = D(e => Bn(e) ? e.attributes.steps : {
            [e.id]: e
        }, {}),
        $c = D(e => Bn(e) ? Object.keys(Wn(e)).length : 1, 0),
        an = D(e => {
            const t = e.attributes;
            return t.children || t.steps || t.hotspots || t.annotations
        }, []),
        un = D((e, t) => {
            let n = -1;
            return an(e).forEach((r, i) => {
                r.id === t && (n = i)
            }), n
        }, -1),
        To = D((e, t) => an(e)[t]),
        Bc = D((e, t) => {
            const n = e.step || e;
            return ct(an(n), r => r.id === t)
        }),
        Vn = D(e => e.attributes.sequential, !1),
        Wc = D((e, t) => {
            const n = To(e, t);
            return e.type === X.HOTSPOTS && Vn(e) && n.ui_conditions && n.ui_conditions.next && n.ui_conditions.next.type === Mn.WAIT_FOR_MOUSE_EVENT
        }, !1),
        pr = D(e => e.type === X.ACTION && e.attributes.action_type === gt.REDIRECT, !1),
        zt = D(e => e.type === X.ACTION && e.attributes.action_type === gt.WAIT_FOR_PAGE, !1),
        xf = D(e => e.type === X.ACTION, !1),
        Gn = D(e => e.type !== X.SATISFACTION_SURVEY),
        Ut = D((e, t) => {
            if (Bn(e)) {
                let n;
                const r = Wn(e);
                return Object.keys(r).forEach(i => {
                    const o = r[i];
                    o.index === t && (n = o)
                }), n.step
            }
            return e
        }),
        lt = D((e, t) => Bn(e) ? Wn(e)[t].step : e),
        jn = D((e, t) => Bn(e) ? Wn(e)[t].index : t === e.id ? 0 : -1, -1),
        Vc = D((e, t) => {
            let n = e;
            return n = Object.keys(n || {}).map(r => n[r]), ct(n, r => Bc(r, t))
        }),
        Df = D((e, t) => {
            let n = e;
            return n = Object.keys(n || {}).map(r => n[r]), ct(n, r => {
                const i = Wn(r);
                return Vc(i, t)
            })
        });

    function Co(e = {}) {
        const {
            selector: t,
            selector_settings: n,
            backup_selectors: r
        } = e, i = Object.keys(n || {}).length > 0 ? n : t;
        return oe.array(r) ? [i, ...r] : [i]
    }
    const dn = D(e => e.currentContent.flowId),
        Qe = D(e => e.content[e.currentContent.flowId]),
        ue = D(e => e.currentContent.stepId),
        Gc = D(e => e.previousActiveElement),
        Uf = D(e => e.forceFocus, !0),
        Te = D(e => lt(Qe(e), ue(e))),
        Ff = D(e => e.settings.styling, {}),
        Ye = D(e => e),
        Hf = D(e => e.settings.accountId),
        bt = D(e => e.reporter),
        Mf = D((e, t) => e.eventListeners[t], []),
        we = D(e => e.user, {}),
        jc = D(e => e.userIdentified, !1),
        $f = D(e => ({
            groupId: e.groupId,
            groupProps: e.groupProps
        }), !1),
        qc = D(e => e.settings.account.skipAutoProperties, !1),
        Bf = D(e => e.settings.account.gates.enableCTTEventIntegrations, !1),
        Wf = D(e => e.settings.account.gates.responseFormatV2Enabled, !1),
        wt = D(e => e.session.id),
        Xt = D(e => e.session, {}),
        Vf = D(e => e.settings, {}),
        ii = D((e, t) => e.tasks[t]),
        Gf = D((e, t) => e.pendingEvents[t], []),
        _o = e => e.lastCheckedForInitialContent || {},
        hr = D(e => e.content),
        jf = D(e => e.orderedContent),
        Io = D((e, t) => hr(e)[t]),
        vo = D(e => e.styles, {}),
        qn = D(e => Te(e).type),
        Ge = D(e => e.currentContent.status),
        mr = D(e => e.currentContent.state),
        qf = D(e => e.currentContent.shownUrl),
        Ao = D(e => Te(e).attributes.style),
        Kc = D(e => e.styles[Te(e).attributes.style]),
        Kf = D(e => e.currentContent.eventChannel),
        at = D(e => mr(e).currentStepChildId),
        Jt = D((e, t) => un(Te(e), t), -1),
        Ze = D(e => an(Te(e)), []),
        Nt = D(e => e.currentContent.state.children, {}),
        Yf = D(e => Object.keys(e.currentContent.state.children).length, 0),
        oi = D((e, t) => Ze(e)[t].id),
        zf = D(e => mr(e).isScrollingToAnnotation),
        Yc = D((e, t) => {
            const n = Jt(e, t);
            return oe.defined(n) ? oi(e, n + 1) : !1
        }),
        bo = D((e, t) => {
            const n = Jt(e, t);
            return oe.defined(n) ? oi(e, n - 1) : !1
        }),
        Xf = D((e, t, n) => {
            const r = Jt(e, t),
                i = Jt(e, n),
                o = Math.min(r, i),
                s = Math.max(r, i);
            if (oe.defined(r) && oe.defined(i)) {
                const [, ...c] = Ze(e).slice(o, s).map(({
                    id: l
                }) => l);
                return c
            }
            return !1
        }),
        zc = D((e, t) => Nt(e)[t].activatedAt),
        wo = D((e, t) => oe.defined(zc(e, t)), !1),
        si = D(e => e.reportedErrors.child, {}),
        Kn = D(e => e.currentContent.state.activeAnnotations, []),
        Xc = D(e => e.transport.initialized, !1),
        Jf = D(e => e.transport.details.socket),
        Yn = e => e.debugger || null,
        Jc = D(e => Yn(e).viewState),
        Qf = D(e => Jc(e).rowState),
        Qc = D(e => Yn(e).currentPage),
        Zc = D(e => Yn(e).lastTrackedPage),
        Zf = D(e => Yn(e).contentErrors, []),
        ep = D(e => Yn(e).childErrors, {}),
        fn = D(e => e.checklists, []),
        pn = D((e, t) => ct(fn(e), n => n.id === t), {}),
        No = D((e, t) => fn(e).filter(n => n.status === t)),
        tp = D((e, t, n) => {
            const r = pn(e, t);
            return ct(r.attributes.items, i => i.id === n)
        }),
        np = D((e, t) => ct(fn(e), n => n.id === t).status),
        rp = D(e => e.widget.history, {}),
        ip = D(e => e.widget.flows, []),
        el = D(e => e.widget.selector, null),
        op = D(e => e.widget.position, "default"),
        sp = D(e => e.widget.header, null),
        cp = D(e => e.widget.footer, null),
        Oo = D(e => e.widget.expanded, !1),
        lp = D(e => e.widget.icon, null),
        tl = D(e => Qe(e).format_version, 1),
        ap = D(e => e.settings.isInjectableSDK, !1),
        ko = D(e => e.Appcues, null),
        up = D(e => e.initializingOpenBuilder, !1),
        dp = D(e => e.experiments, []),
        fp = D(e => e.onHold.launchpads, []);

    function pp(e, t) {
        return document.createElement(e, t)
    }

    function hp(e, t, n) {
        return document.createElementNS(e, t, n)
    }

    function mp() {
        return hn(document.createDocumentFragment())
    }

    function Ep(e) {
        return document.createTextNode(e)
    }

    function gp(e) {
        return document.createComment(e)
    }

    function yp(e, t, n) {
        if (Ft(e)) {
            let r = e;
            for (; r && Ft(r);) r = hn(r).parent;
            e = r ? ? e
        }
        Ft(t) && (t = hn(t, e)), n && Ft(n) && (n = hn(n).firstChildNode), e.insertBefore(t, n)
    }

    function Sp(e, t) {
        e.removeChild(t)
    }

    function Tp(e, t) {
        Ft(t) && (t = hn(t, e)), e.appendChild(t)
    }

    function nl(e) {
        if (Ft(e)) {
            for (; e && Ft(e);) e = hn(e).parent;
            return e ? ? null
        }
        return e.parentNode
    }

    function Cp(e) {
        var t;
        if (Ft(e)) {
            const n = hn(e),
                r = nl(n);
            if (r && n.lastChildNode) {
                const i = Array.from(r.childNodes),
                    o = i.indexOf(n.lastChildNode);
                return (t = i[o + 1]) !== null && t !== void 0 ? t : null
            }
            return null
        }
        return e.nextSibling
    }

    function _p(e) {
        return e.tagName
    }

    function Ip(e, t) {
        e.textContent = t
    }

    function vp(e) {
        return e.textContent
    }

    function Ap(e) {
        return e.nodeType === 1
    }

    function bp(e) {
        return e.nodeType === 3
    }

    function wp(e) {
        return e.nodeType === 8
    }

    function Ft(e) {
        return e.nodeType === 11
    }

    function hn(e, t) {
        var n, r, i;
        const o = e;
        return (n = o.parent) !== null && n !== void 0 || (o.parent = t ? ? null), (r = o.firstChildNode) !== null && r !== void 0 || (o.firstChildNode = e.firstChild), (i = o.lastChildNode) !== null && i !== void 0 || (o.lastChildNode = e.lastChild), o
    }
    const Ro = {
        createElement: pp,
        createElementNS: hp,
        createTextNode: Ep,
        createDocumentFragment: mp,
        createComment: gp,
        insertBefore: yp,
        removeChild: Sp,
        appendChild: Tp,
        parentNode: nl,
        nextSibling: Cp,
        tagName: _p,
        setTextContent: Ip,
        getTextContent: vp,
        isElement: Ap,
        isText: bp,
        isComment: wp,
        isDocumentFragment: Ft
    };

    function je(e, t, n, r, i) {
        const o = t === void 0 ? void 0 : t.key;
        return {
            sel: e,
            data: t,
            children: n,
            text: r,
            elm: i,
            key: o
        }
    }
    const zn = Array.isArray;

    function mn(e) {
        return typeof e == "string" || typeof e == "number" || e instanceof String || e instanceof Number
    }
    const Lo = je("", {}, [], void 0, void 0);

    function Er(e, t) {
        var n, r;
        const i = e.key === t.key,
            o = ((n = e.data) === null || n === void 0 ? void 0 : n.is) === ((r = t.data) === null || r === void 0 ? void 0 : r.is),
            s = e.sel === t.sel,
            c = !e.sel && e.sel === t.sel ? typeof e.text == typeof t.text : !0;
        return s && i && o && c
    }

    function Np() {
        throw new Error("The document fragment is not supported on this platform.")
    }

    function Op(e, t) {
        return e.isElement(t)
    }

    function kp(e, t) {
        return e.isDocumentFragment(t)
    }

    function Rp(e, t, n) {
        var r;
        const i = {};
        for (let o = t; o <= n; ++o) {
            const s = (r = e[o]) === null || r === void 0 ? void 0 : r.key;
            s !== void 0 && (i[s] = o)
        }
        return i
    }
    const Lp = ["create", "update", "remove", "destroy", "pre", "post"];

    function Xn(e, t, n) {
        const r = {
                create: [],
                update: [],
                remove: [],
                destroy: [],
                pre: [],
                post: []
            },
            i = t !== void 0 ? t : Ro;
        for (const E of Lp)
            for (const h of e) {
                const y = h[E];
                y !== void 0 && r[E].push(y)
            }

        function o(E) {
            const h = E.id ? "#" + E.id : "",
                y = E.getAttribute("class"),
                I = y ? "." + y.split(" ").join(".") : "";
            return je(i.tagName(E).toLowerCase() + h + I, {}, [], void 0, E)
        }

        function s(E) {
            return je(void 0, {}, [], void 0, E)
        }

        function c(E, h) {
            return function() {
                if (--h === 0) {
                    const I = i.parentNode(E);
                    I !== null && i.removeChild(I, E)
                }
            }
        }

        function l(E, h) {
            var y, I, S, T, v;
            let _;
            const N = E.data,
                L = N ? .hook;
            (y = L ? .init) === null || y === void 0 || y.call(L, E);
            const R = E.children,
                O = E.sel;
            if (O === "!")(I = E.text) !== null && I !== void 0 || (E.text = ""), E.elm = i.createComment(E.text);
            else if (O === "") E.elm = i.createTextNode(E.text);
            else if (O !== void 0) {
                const M = O.indexOf("#"),
                    $ = O.indexOf(".", M),
                    ee = M > 0 ? M : O.length,
                    w = $ > 0 ? $ : O.length,
                    q = M !== -1 || $ !== -1 ? O.slice(0, Math.min(ee, w)) : O,
                    se = N ? .ns,
                    Z = se === void 0 ? i.createElement(q, N) : i.createElementNS(se, q, N);
                for (E.elm = Z, ee < w && Z.setAttribute("id", O.slice(ee + 1, w)), $ > 0 && Z.setAttribute("class", O.slice(w + 1).replace(/\./g, " ")), _ = 0; _ < r.create.length; ++_) r.create[_](Lo, E);
                if (mn(E.text) && (!zn(R) || R.length === 0) && i.appendChild(Z, i.createTextNode(E.text)), zn(R))
                    for (_ = 0; _ < R.length; ++_) {
                        const ie = R[_];
                        ie != null && i.appendChild(Z, l(ie, h))
                    }
                L !== void 0 && ((S = L.create) === null || S === void 0 || S.call(L, Lo, E), L.insert !== void 0 && h.push(E))
            } else if (!((T = n ? .experimental) === null || T === void 0) && T.fragments && E.children) {
                for (E.elm = ((v = i.createDocumentFragment) !== null && v !== void 0 ? v : Np)(), _ = 0; _ < r.create.length; ++_) r.create[_](Lo, E);
                for (_ = 0; _ < E.children.length; ++_) {
                    const M = E.children[_];
                    M != null && i.appendChild(E.elm, l(M, h))
                }
            } else E.elm = i.createTextNode(E.text);
            return E.elm
        }

        function a(E, h, y, I, S, T) {
            for (; I <= S; ++I) {
                const v = y[I];
                v != null && i.insertBefore(E, l(v, T), h)
            }
        }

        function d(E) {
            var h, y;
            const I = E.data;
            if (I !== void 0) {
                (y = (h = I ? .hook) === null || h === void 0 ? void 0 : h.destroy) === null || y === void 0 || y.call(h, E);
                for (let S = 0; S < r.destroy.length; ++S) r.destroy[S](E);
                if (E.children !== void 0)
                    for (let S = 0; S < E.children.length; ++S) {
                        const T = E.children[S];
                        T != null && typeof T != "string" && d(T)
                    }
            }
        }

        function f(E, h, y, I) {
            for (var S, T; y <= I; ++y) {
                let v;
                const _ = h[y];
                if (_ != null)
                    if (_.sel !== void 0) {
                        d(_), v = r.remove.length + 1;
                        const N = c(_.elm, v);
                        for (let R = 0; R < r.remove.length; ++R) r.remove[R](_, N);
                        const L = (T = (S = _ ? .data) === null || S === void 0 ? void 0 : S.hook) === null || T === void 0 ? void 0 : T.remove;
                        L !== void 0 ? L(_, N) : N()
                    } else _.children ? (d(_), f(E, _.children, 0, _.children.length - 1)) : i.removeChild(E, _.elm)
            }
        }

        function m(E, h, y, I) {
            let S = 0,
                T = 0,
                v = h.length - 1,
                _ = h[0],
                N = h[v],
                L = y.length - 1,
                R = y[0],
                O = y[L],
                M, $, ee, w;
            for (; S <= v && T <= L;) _ == null ? _ = h[++S] : N == null ? N = h[--v] : R == null ? R = y[++T] : O == null ? O = y[--L] : Er(_, R) ? (p(_, R, I), _ = h[++S], R = y[++T]) : Er(N, O) ? (p(N, O, I), N = h[--v], O = y[--L]) : Er(_, O) ? (p(_, O, I), i.insertBefore(E, _.elm, i.nextSibling(N.elm)), _ = h[++S], O = y[--L]) : Er(N, R) ? (p(N, R, I), i.insertBefore(E, N.elm, _.elm), N = h[--v], R = y[++T]) : (M === void 0 && (M = Rp(h, S, v)), $ = M[R.key], $ === void 0 ? (i.insertBefore(E, l(R, I), _.elm), R = y[++T]) : M[O.key] === void 0 ? (i.insertBefore(E, l(O, I), i.nextSibling(N.elm)), O = y[--L]) : (ee = h[$], ee.sel !== R.sel ? i.insertBefore(E, l(R, I), _.elm) : (p(ee, R, I), h[$] = void 0, i.insertBefore(E, ee.elm, _.elm)), R = y[++T]));
            T <= L && (w = y[L + 1] == null ? null : y[L + 1].elm, a(E, w, y, T, L, I)), S <= v && f(E, h, S, v)
        }

        function p(E, h, y) {
            var I, S, T, v, _, N, L, R;
            const O = (I = h.data) === null || I === void 0 ? void 0 : I.hook;
            (S = O ? .prepatch) === null || S === void 0 || S.call(O, E, h);
            const M = h.elm = E.elm;
            if (E === h) return;
            if (h.data !== void 0 || h.text !== void 0 && h.text !== E.text) {
                (T = h.data) !== null && T !== void 0 || (h.data = {}), (v = E.data) !== null && v !== void 0 || (E.data = {});
                for (let w = 0; w < r.update.length; ++w) r.update[w](E, h);
                (L = (N = (_ = h.data) === null || _ === void 0 ? void 0 : _.hook) === null || N === void 0 ? void 0 : N.update) === null || L === void 0 || L.call(N, E, h)
            }
            const $ = E.children,
                ee = h.children;
            h.text === void 0 ? $ !== void 0 && ee !== void 0 ? $ !== ee && m(M, $, ee, y) : ee !== void 0 ? (E.text !== void 0 && i.setTextContent(M, ""), a(M, null, ee, 0, ee.length - 1, y)) : $ !== void 0 ? f(M, $, 0, $.length - 1) : E.text !== void 0 && i.setTextContent(M, "") : E.text !== h.text && ($ !== void 0 && f(M, $, 0, $.length - 1), i.setTextContent(M, h.text)), (R = O ? .postpatch) === null || R === void 0 || R.call(O, E, h)
        }
        return function(h, y) {
            let I, S, T;
            const v = [];
            for (I = 0; I < r.pre.length; ++I) r.pre[I]();
            for (Op(i, h) ? h = o(h) : kp(i, h) && (h = s(h)), Er(h, y) ? p(h, y, v) : (S = h.elm, T = i.parentNode(S), l(y, v), T !== null && (i.insertBefore(T, y.elm, i.nextSibling(S)), f(T, [h], 0, 0))), I = 0; I < v.length; ++I) v[I].data.hook.insert(v[I]);
            for (I = 0; I < r.post.length; ++I) r.post[I]();
            return y
        }
    }

    function ci(e, t, n) {
        if (e.ns = "http://www.w3.org/2000/svg", n !== "foreignObject" && t !== void 0)
            for (let r = 0; r < t.length; ++r) {
                const i = t[r];
                if (typeof i == "string") continue;
                const o = i.data;
                o !== void 0 && ci(o, i.children, i.sel)
            }
    }

    function li(e, t, n) {
        let r = {},
            i, o, s;
        if (n !== void 0 ? (t !== null && (r = t), zn(n) ? i = n : mn(n) ? o = n.toString() : n && n.sel && (i = [n])) : t != null && (zn(t) ? i = t : mn(t) ? o = t.toString() : t && t.sel ? i = [t] : r = t), i !== void 0)
            for (s = 0; s < i.length; ++s) mn(i[s]) && (i[s] = je(void 0, void 0, void 0, i[s], void 0));
        return e.startsWith("svg") && (e.length === 3 || e[3] === "." || e[3] === "#") && ci(r, i, e), je(e, r, i, o, void 0)
    }

    function Pp(e) {
        let t, n;
        if (zn(e) ? t = e : mn(t) ? n = e : t && t.sel && (t = [e]), t !== void 0)
            for (let r = 0; r < t.length; ++r) mn(t[r]) && (t[r] = je(void 0, void 0, void 0, t[r], void 0));
        return je(void 0, {}, t, n, void 0)
    }

    function ai(e, t) {
        var n;
        const r = (n = t.data) === null || n === void 0 ? void 0 : n.ns;
        e.data.fn = t.data.fn, e.data.args = t.data.args, t.data = e.data, t.children = e.children, t.text = e.text, t.elm = e.elm, r && ci(t.data, t.children, t.sel)
    }

    function xp(e) {
        const t = e.data,
            n = t.fn(...t.args);
        ai(n, e)
    }

    function Dp(e, t) {
        let n;
        const r = e.data,
            i = t.data,
            o = r.args,
            s = i.args;
        if (r.fn !== i.fn || o.length !== s.length) {
            ai(i.fn(...s), t);
            return
        }
        for (n = 0; n < s.length; ++n)
            if (o[n] !== s[n]) {
                ai(i.fn(...s), t);
                return
            }
        ai(e, t)
    }
    const Up = function(t, n, r, i) {
        return i === void 0 && (i = r, r = n, n = void 0), li(t, {
            key: n,
            hook: {
                init: xp,
                prepatch: Dp
            },
            fn: r,
            args: i
        })
    };

    function Fp(e, t) {
        const n = e.data.attachData;
        t.data.attachData.placeholder = n.placeholder, t.data.attachData.real = n.real, e.elm = e.data.attachData.real
    }

    function Hp(e, t) {
        t.elm = t.data.attachData.placeholder
    }

    function Mp(e) {
        e.elm !== void 0 && e.elm.parentNode.removeChild(e.elm), e.elm = e.data.attachData.real
    }

    function $p(e, t) {
        const n = t.elm,
            r = t.data.attachData,
            i = document.createElement("span");
        t.elm = i, r.target.appendChild(n), r.real = n, r.placeholder = i
    }

    function Bp(e, t) {
        t.data === void 0 && (t.data = {}), t.data.hook === void 0 && (t.data.hook = {});
        const n = t.data,
            r = t.data.hook;
        return n.attachData = {
            target: e,
            placeholder: void 0,
            real: void 0
        }, r.create = $p, r.prepatch = Fp, r.postpatch = Hp, r.destroy = Mp, t
    }

    function Wp(e) {
        return e.slice(5).replace(/-([a-z])/g, (t, n) => n.toUpperCase())
    }

    function rl(e, t) {
        var n;
        const r = t !== void 0 ? t : Ro;
        let i;
        if (r.isElement(e)) {
            const o = e.id ? "#" + e.id : "",
                s = (n = e.getAttribute("class")) === null || n === void 0 ? void 0 : n.match(/[^\t\r\n\f ]+/g),
                c = s ? "." + s.join(".") : "",
                l = r.tagName(e).toLowerCase() + o + c,
                a = {},
                d = {},
                f = {},
                m = [];
            let p, E, h;
            const y = e.attributes,
                I = e.childNodes;
            for (E = 0, h = y.length; E < h; E++) p = y[E].nodeName, p.startsWith("data-") ? d[Wp(p)] = y[E].nodeValue || "" : p !== "id" && p !== "class" && (a[p] = y[E].nodeValue);
            for (E = 0, h = I.length; E < h; E++) m.push(rl(I[E], t));
            return Object.keys(a).length > 0 && (f.attrs = a), Object.keys(d).length > 0 && (f.dataset = d), l.startsWith("svg") && (l.length === 3 || l[3] === "." || l[3] === "#") && ci(f, m, l), je(l, f, m, void 0, e)
        } else return r.isText(e) ? (i = r.getTextContent(e), je(void 0, void 0, void 0, i, e)) : r.isComment(e) ? (i = r.getTextContent(e), je("!", {}, [], i, e)) : je("", {}, [], void 0, e)
    }
    const Vp = "http://www.w3.org/1999/xlink",
        Gp = "http://www.w3.org/2000/xmlns/",
        jp = "http://www.w3.org/XML/1998/namespace",
        il = 58,
        qp = 120,
        Kp = 109;

    function ol(e, t) {
        let n;
        const r = t.elm;
        let i = e.data.attrs,
            o = t.data.attrs;
        if (!(!i && !o) && i !== o) {
            i = i || {}, o = o || {};
            for (n in o) {
                const s = o[n];
                i[n] !== s && (s === !0 ? r.setAttribute(n, "") : s === !1 ? r.removeAttribute(n) : n.charCodeAt(0) !== qp ? r.setAttribute(n, s) : n.charCodeAt(3) === il ? r.setAttributeNS(jp, n, s) : n.charCodeAt(5) === il ? n.charCodeAt(1) === Kp ? r.setAttributeNS(Gp, n, s) : r.setAttributeNS(Vp, n, s) : r.setAttribute(n, s))
            }
            for (n in i) n in o || r.removeAttribute(n)
        }
    }
    const Jn = {
        create: ol,
        update: ol
    };

    function sl(e, t) {
        let n, r;
        const i = t.elm;
        let o = e.data.class,
            s = t.data.class;
        if (!(!o && !s) && o !== s) {
            o = o || {}, s = s || {};
            for (r in o) o[r] && !Object.prototype.hasOwnProperty.call(s, r) && i.classList.remove(r);
            for (r in s) n = s[r], n !== o[r] && i.classList[n ? "add" : "remove"](r)
        }
    }
    const Qn = {
            create: sl,
            update: sl
        },
        cl = /[A-Z]/g;

    function ll(e, t) {
        const n = t.elm;
        let r = e.data.dataset,
            i = t.data.dataset,
            o;
        if (!r && !i || r === i) return;
        r = r || {}, i = i || {};
        const s = n.dataset;
        for (o in r) o in i || (s ? o in s && delete s[o] : n.removeAttribute("data-" + o.replace(cl, "-$&").toLowerCase()));
        for (o in i) r[o] !== i[o] && (s ? s[o] = i[o] : n.setAttribute("data-" + o.replace(cl, "-$&").toLowerCase(), i[o]))
    }
    const Yp = {
        create: ll,
        update: ll
    };

    function al(e, t, n) {
        if (typeof e == "function") e.call(t, n, t);
        else if (typeof e == "object")
            for (let r = 0; r < e.length; r++) al(e[r], t, n)
    }

    function zp(e, t) {
        const n = e.type,
            r = t.data.on;
        r && r[n] && al(r[n], t, e)
    }

    function Xp() {
        return function e(t) {
            zp(t, e.vnode)
        }
    }

    function Po(e, t) {
        const n = e.data.on,
            r = e.listener,
            i = e.elm,
            o = t && t.data.on,
            s = t && t.elm;
        let c;
        if (n !== o) {
            if (n && r)
                if (o)
                    for (c in n) o[c] || i.removeEventListener(c, r, !1);
                else
                    for (c in n) i.removeEventListener(c, r, !1);
            if (o) {
                const l = t.listener = e.listener || Xp();
                if (l.vnode = t, n)
                    for (c in o) n[c] || s.addEventListener(c, l, !1);
                else
                    for (c in o) s.addEventListener(c, l, !1)
            }
        }
    }
    const Zn = {
        create: Po,
        update: Po,
        destroy: Po
    };

    function ul(e, t) {
        let n, r, i;
        const o = t.elm;
        let s = e.data.props,
            c = t.data.props;
        if (!(!s && !c) && s !== c) {
            s = s || {}, c = c || {};
            for (n in c) r = c[n], i = s[n], i !== r && (n !== "value" || o[n] !== r) && (o[n] = r)
        }
    }
    const er = {
            create: ul,
            update: ul
        },
        dl = typeof window ? .requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : setTimeout,
        Jp = e => {
            dl(() => {
                dl(e)
            })
        };
    let xo = !1;

    function Qp(e, t, n) {
        Jp(() => {
            e[t] = n
        })
    }

    function fl(e, t) {
        let n, r;
        const i = t.elm;
        let o = e.data.style,
            s = t.data.style;
        if (!o && !s || o === s) return;
        o = o || {}, s = s || {};
        const c = "delayed" in o;
        for (r in o) r in s || (r[0] === "-" && r[1] === "-" ? i.style.removeProperty(r) : i.style[r] = "");
        for (r in s)
            if (n = s[r], r === "delayed" && s.delayed)
                for (const l in s.delayed) n = s.delayed[l], (!c || n !== o.delayed[l]) && Qp(i.style, l, n);
            else r !== "remove" && n !== o[r] && (r[0] === "-" && r[1] === "-" ? i.style.setProperty(r, n) : i.style[r] = n)
    }

    function Zp(e) {
        let t, n;
        const r = e.elm,
            i = e.data.style;
        if (!(!i || !(t = i.destroy)))
            for (n in t) r.style[n] = t[n]
    }

    function eh(e, t) {
        const n = e.data.style;
        if (!n || !n.remove) {
            t();
            return
        }
        xo || (e.elm.offsetLeft, xo = !0);
        let r;
        const i = e.elm;
        let o = 0;
        const s = n.remove;
        let c = 0;
        const l = [];
        for (r in s) l.push(r), i.style[r] = s[r];
        const d = getComputedStyle(i)["transition-property"].split(", ");
        for (; o < d.length; ++o) l.indexOf(d[o]) !== -1 && c++;
        i.addEventListener("transitionend", f => {
            f.target === i && --c, c === 0 && t()
        })
    }

    function th() {
        xo = !1
    }
    const tr = {
        pre: th,
        create: fl,
        update: fl,
        destroy: Zp,
        remove: eh
    };

    function nh(e, ...t) {
        const n = Do(t, []);
        return n.length === 1 && !n[0].sel && n[0].text ? je(void 0, void 0, void 0, n[0].text, void 0) : je(void 0, e ? ? {}, n, void 0, void 0)
    }

    function Do(e, t) {
        for (const n of e) n != null && n !== !1 && n !== "" && (Array.isArray(n) ? Do(n, t) : typeof n == "string" || typeof n == "number" || typeof n == "boolean" ? t.push(je(void 0, void 0, void 0, String(n), void 0)) : t.push(n));
        return t
    }

    function rh(e, t, ...n) {
        const r = Do(n, []);
        return typeof e == "function" ? e(t, r) : r.length === 1 && !r[0].sel && r[0].text ? li(e, t, r[0].text) : li(e, t, r)
    }
    const ih = Object.freeze(Object.defineProperty({
        __proto__: null,
        Fragment: nh,
        array: zn,
        attachTo: Bp,
        attributesModule: Jn,
        classModule: Qn,
        datasetModule: Yp,
        eventListenersModule: Zn,
        fragment: Pp,
        h: li,
        htmlDomApi: Ro,
        init: Xn,
        jsx: rh,
        primitive: mn,
        propsModule: er,
        styleModule: tr,
        thunk: Up,
        toVNode: rl,
        vnode: je
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    var pl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Uo(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function oh(e) {
        if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
        var t = e.default;
        if (typeof t == "function") {
            var n = function r() {
                var i = !1;
                try {
                    i = this instanceof r
                } catch {}
                return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(r) {
            var i = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, i.get ? i : {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }), n
    }
    var Fo, hl;

    function sh() {
        if (hl) return Fo;
        hl = 1;
        var e = "http://www.w3.org/2000/svg",
            t = ["hook", "on", "style", "class", "props", "attrs", "dataset"],
            n = Array.prototype.slice;

        function r(f) {
            return typeof f == "string" || typeof f == "number" || typeof f == "boolean" || typeof f == "symbol" || f === null || f === void 0
        }

        function i(f, m, p, E) {
            for (var h = {
                    ns: m
                }, y = 0, I = E.length; y < I; y++) {
                var S = E[y];
                f[S] && (h[S] = f[S])
            }
            for (var T in f)
                if (T !== "key" && T !== "classNames" && T !== "selector") {
                    var v = T.indexOf("-");
                    v > 0 ? _(T.slice(0, v), T.slice(v + 1), f[T]) : h[T] || _(p, T, f[T])
                }
            return h;

            function _(N, L, R) {
                var O = h[N] || (h[N] = {});
                O[L] = R
            }
        }

        function o(f, m, p, E, h, y) {
            if (h.selector && (E = E + h.selector), h.classNames) {
                var I = h.classNames;
                E = E + "." + (Array.isArray(I) ? I.join(".") : I.replace(/\s+/g, "."))
            }
            return {
                sel: E,
                data: i(h, f, m, p),
                children: y.map(function(S) {
                    return r(S) ? {
                        text: S
                    } : S
                }),
                key: h.key
            }
        }

        function s(f, m, p, E, h, y) {
            var I;
            if (typeof E == "function") I = E(h, y);
            else if (E && typeof E.view == "function") I = E.view(h, y);
            else if (E && typeof E.render == "function") I = E.render(h, y);
            else throw "JSX tag must be either a string, a function or an object with 'view' or 'render' methods";
            return I.key = h.key, I
        }

        function c(f, m, p) {
            for (var E = m, h = f.length; E < h; E++) {
                var y = f[E];
                Array.isArray(y) ? c(y, 0, p) : p.push(y)
            }
        }

        function l(f) {
            if (f) {
                for (var m = 0, p = f.length; m < p; m++)
                    if (Array.isArray(f[m])) {
                        var E = f.slice(0, m);
                        c(f, m, E), f = E;
                        break
                    }
            }
            return f
        }

        function a(f, m, p, E, h, y) {
            return h = h || {}, y = l(y), typeof E == "string" ? o(f, m, p, E, h, y) : s(f, m, p, E, h, y)
        }

        function d(f, m, p) {
            return function(h, y, I) {
                return (arguments.length > 3 || !Array.isArray(I)) && (I = n.call(arguments, 2)), a(f, m || "props", p || t, h, y, I)
            }
        }
        return Fo = {
            html: d(void 0),
            svg: d(e, "attrs"),
            JSX: d
        }, Fo
    }
    var u = sh(),
        gr = {},
        ml;

    function ch() {
        if (ml) return gr;
        ml = 1, Object.defineProperty(gr, "__esModule", {
            value: !0
        }), gr.createApi = n;
        var e = "textContent";

        function t(i, o) {
            var s = i;
            return s.parent == null && (s.parent = null), s.firstChildNode == null && (s.firstChildNode = i.firstChild), s.lastChildNode == null && (s.lastChildNode = i.lastChild), s
        }

        function n(i) {
            var o = void 0;

            function s() {
                if (o && o.defaultView) return o;
                if (i && i.clean) {
                    var c = document.createElement("iframe");
                    document.head.appendChild(c), o = c.contentDocument, i.trustedTypesPolicy && c.contentWindow.trustedTypes.createPolicy("default", {
                        createHTML: function(a) {
                            return i.trustedTypesPolicy.createHTML(a).toString()
                        },
                        createScript: function(a) {
                            return i.trustedTypesPolicy.createScript(a).toString()
                        },
                        createScriptURL: function(a) {
                            return i.trustedTypesPolicy.createScriptURL(a).toString()
                        }
                    })
                } else o = document;
                return o
            }
            return s(), {
                createElement: function(l) {
                    return s().createElement(l)
                },
                createElementNS: function(l, a) {
                    return s().createElementNS(l, a)
                },
                createTextNode: function(l) {
                    return s().createTextNode(l)
                },
                appendChild: function(l, a) {
                    r("appendChild", l, a)
                },
                removeChild: function(l, a) {
                    r("removeChild", l, a)
                },
                insertBefore: function(l, a, d) {
                    r("insertBefore", l, a, d)
                },
                parentNode: function(l) {
                    return l.parentNode
                },
                nextSibling: function(l) {
                    return l.nextSibling
                },
                tagName: function(l) {
                    return l.tagName
                },
                setTextContent: function(l, a) {
                    r(e, l, a)
                },
                isElement: function(l) {
                    return l.nodeType === 1
                },
                isText: function(l) {
                    return l.nodeType === 3
                },
                isComment: function(l) {
                    return l.nodeType === 8
                },
                isDocumentFragment: function(l) {
                    return l.nodeType === 11
                },
                createDocumentFragment: function() {
                    return t(s().createDocumentFragment())
                },
                createComment: function(l) {
                    return s().createComment(l)
                },
                getTextContent: function(l) {
                    return l.textContent || null
                }
            }
        }
        gr.default = n();

        function r(i, o, s, c) {
            if (o.tagName !== "IFRAME") i === e ? o[e] = s : o[i](s, c);
            else {
                var l = function() {
                    r(i, o.contentDocument.body, s, c)
                };
                o.contentDocument && o.contentDocument.readyState === "complete" ? l() : o.addEventListener("load", l)
            }
        }
        return gr
    }
    var ui = ch(),
        Ho = {
            exports: {}
        },
        El;

    function lh() {
        return El || (El = 1, (function(e) {
            function t(o) {
                var s = typeof o == "object" && !!o.composed;
                return s ? n(this) : r(this)
            }

            function n(o) {
                var s = r(o);
                return i(s) ? n(s.host) : s
            }

            function r(o) {
                return o.parentNode != null ? r(o.parentNode) : o
            }

            function i(o) {
                return o.nodeName === "#document-fragment" && o.constructor.name === "ShadowRoot"
            }
            e.exports && (e.exports = t)
        })(Ho)), Ho.exports
    }
    var ah = lh();
    const uh = Uo(ah),
        gl = "|shadow-root|",
        yl = "|iframe|",
        di = (e, t = document) => e.includes(gl) || e.includes(yl) ? e.split(gl).flatMap(n => n.split(yl)).reduce((n, r) => n === null ? [...t.querySelectorAll(r)] : n.flatMap(i => i.shadowRoot ? [...i.shadowRoot.querySelectorAll(r)] : i.tagName === "IFRAME" ? [...i.contentDocument.querySelectorAll(r)] : []), null) ? ? [] : [...t.querySelectorAll(e)];

    function fi(e, t, n) {
        const r = e.data || {};
        Object.assign(e, {
            data: Object.assign(r, {
                [t]: { ...r[t],
                    ...n
                }
            })
        })
    }

    function dh(e, t, n) {
        const r = e.data || {};
        Object.assign(e, {
            data: Object.assign(r, {
                [t]: n
            })
        })
    }

    function nr(e, t) {
        return new RegExp(`(?:^${t}[#.]|^${t}$)`, "i").test(e.sel)
    }

    function Oe(e, t) {
        try {
            return e.data.attrs[t] || null
        } catch {
            return null
        }
    }

    function ye(e, t, n) {
        fi(e, "attrs", {
            [t]: n
        })
    }

    function Sl(e, t) {
        if (!Object.prototype.hasOwnProperty.call(e.data, "attrs")) return;
        const {
            [t]: n = null, ...r
        } = e.data.attrs;
        dh(e, "attrs", r)
    }

    function St(e, t, n) {
        fi(e, "on", {
            [t]: n
        })
    }

    function fh(e, t) {
        fi(e, "class", {
            [t]: !0
        })
    }

    function Mo(e, t, n) {
        fi(e, "hook", {
            [t]: n
        })
    }

    function En(e, t) {
        try {
            return e.data.class[t] === !0
        } catch {
            return !1
        }
    }

    function Tl(e) {
        return nr(e, "a")
    }

    function Cl(e) {
        return nr(e, "img")
    }

    function ph(e) {
        return nr(e, "input")
    }

    function hh(e) {
        return nr(e, "form")
    }

    function mh(e) {
        return nr(e, "video")
    }

    function _l(e, t) {
        const n = /window\.parent\.Appcues\.show\('(.*)'\)/,
            i = (Oe(e, "onclick") ? ? "").match(n);
        if (!i) return !0;
        const [, o] = i;
        return o && (Sl(e, "onclick"), t(function() {
            window.Appcues ? .show ? .(o)
        })), !0
    }
    const Il = e => e.tagName === "IFRAME",
        pi = e => {
            const t = e.getRootNode(e),
                n = t.parentWindow || t.defaultView;
            return n && n !== window ? n.frameElement : null
        };

    function gn(e) {
        return {
            error: !0,
            errorMessage: e
        }
    }

    function Eh() {
        return Object.prototype.hasOwnProperty.call(Node.prototype, "getRootNode")
    }

    function gh(e) {
        return Eh() ? e.getRootNode() : uh.call(e)
    }

    function vl(e) {
        return e && ["appcues-container", "appcues-layer", "appcues-checklists", "appcues-debugger"].some(n => e ? .tagName ? .toLowerCase().includes(n)) ? !0 : e && e !== document.body && e !== document.documentElement ? vl(e.parentElement) : !1
    }
    const yh = e => {
            let t = 0;
            for (let n = 0; n < e.length && !(e[n].nodeName !== "APPCUES-EXPERIENCE-CONTAINER" || e[n].nodeName !== "APPCUES-EXPERIENCE-CONTAINER-BUILDER"); n++) t = n;
            return e.slice(t + 1)
        },
        Sh = (e, t = window.document) => {
            try {
                const n = /^((body\s(>?\s?))?)(?<tagName>[\da-z]+):nth-child\((?<index>\d+)\)(?<remainingSelector>.*)/i,
                    r = e.match(n),
                    i = t.body.firstChild ? .nodeName === "APPCUES-EXPERIENCE-CONTAINER" || t.body.firstChild ? .nodeName === "APPCUES-EXPERIENCE-CONTAINER-BUILDER";
                if (!r || !i) return [];
                const {
                    tagName: o,
                    index: s,
                    remainingSelector: c
                } = r.groups, l = Number.parseInt(s, 10) - 1, a = yh([...document.body.children]), d = a[l] ? .nodeName === o.toUpperCase() ? a[l] : null;
                return c ? d ? di(`* ${c}`, d) : [] : [d]
            } catch {
                return []
            }
        };

    function Al(e, t) {
        const n = typeof e == "string" && e || typeof e == "object" && e.selector;
        if (!n) return gn("Missing selector.");
        const r = Sh(n, t);
        let i = r.length > 0 ? r : di(n, t ? .documentElement ? ? t);
        const o = e.text_filter || e.textFilter,
            s = !!o,
            c = typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "order_filter"),
            l = e.order_filter;
        if (s && o.length >= 0 && (i = Array.prototype.slice.call(i).filter(a => a.innerText == null ? !1 : a.innerText.replace(/\r\n|\r|\n/g, " ").toLowerCase().trim() === o.toString().toLowerCase().trim())), c && l >= 0 && (i = i[l] ? [i[l]] : []), i.length === 0) {
            let a = "",
                d = "";
            return s && (a = ` with text filter "${o}"`), c && (d = ` with order value ${l}`), gn(`Could not find element for selector "${n}"${s?a:""}${s&&c?" and":""}${c?d:""}.`)
        }
        return i = [...i].filter(a => !vl(a)), i.length > 1 ? gn(`Found ${i.length} elements for selector ${e.selector}.`) : i.length === 0 ? gn(`Could not find element for selector "${n}"`) : i[0]
    }

    function Th(e, t) {
        if (e.length === 0) return gn("Missing selector.");
        let n;
        for (const r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
                const i = Al(e[r], t);
                if (i && !i.error) {
                    n = i;
                    break
                }
            }
        return n || gn("Could not find an element for list of selectors.")
    }

    function $o(e, t = window.document) {
        let n = e;
        if (n && typeof n == "object" && n.length > 0) {
            if (n.length > 1) return Th(n, t);
            [n] = n
        }
        return Al(n, t)
    }

    function Bo(e, t = {}) {
        return !!(!(t.display !== "contents") || e && (e.offsetWidth || e.offsetHeight) && e.offsetWidth > 0 && e.offsetHeight > 0)
    }

    function Wo(e, t) {
        if (Il(e)) {
            const n = e.contentDocument.body;
            return n.scrollHeight > n.clientHeight
        }
        return t !== "visible" && e.scrollHeight > e.clientHeight
    }

    function Vo(e) {
        return e === "fixed" || e === "relative" || e === "absolute" || e === "sticky"
    }

    function bl(e) {
        return e.display === "flex" || e.display === "inline-flex"
    }

    function wl(e, t, n, r, i = {}) {
        const o = i;
        let s = t.zIndex;
        const c = t.position,
            a = pi(e) || e.parentElement,
            d = a ? r.getComputedStyle(a) : {};
        if (o.fixed || (o.fixed = c === "fixed" || c === "sticky"), o.absolute || (o.absolute = c === "absolute"), o.opacity = Number.parseFloat(oe.defined(o.opacity) ? o.opacity : 1) * Number.parseFloat(t.opacity), o.hiddenOverflow || (o.hiddenOverflow = !Bo(e, t) && t.overflow === "hidden" && !o.fixed && !o.absolute), o.hasScrollableParent || (o.hasScrollableParent = Wo(e, t.overflowY)), s !== "" && s !== "auto" && !Vo(c) && !bl(d) && (s = "auto"), (oe.undefined(o.zIndex) || s !== "" && s !== "auto" && (Vo(c) || bl(d))) && (o.zIndex = s), a && a !== n.body && a !== n.documentElement) return wl(a, d, n, r, o);
        if (/^\d+$/.test(o.zIndex)) {
            let f = Number.parseInt(o.zIndex, 10);
            f += 1, o.zIndex = f
        }
        return o
    }

    function Ch(e, t) {
        const {
            documentElement: n
        } = e;
        return {
            xOffset: (t.pageXOffset || 0) - n.clientLeft,
            yOffset: (t.pageYOffset || 0) - n.clientTop
        }
    }

    function Go({
        left: e,
        top: t,
        right: n,
        bottom: r
    }, {
        xOffset: i,
        yOffset: o
    }) {
        return {
            left: e + i,
            top: t + o,
            right: n + i,
            bottom: r + o
        }
    }

    function _h(e) {
        const t = e.getRootNode(),
            n = t.parentWindow || t.defaultView;
        if (n !== window && n) {
            const {
                frameElement: i
            } = n, {
                top: o,
                left: s
            } = i.getBoundingClientRect();
            return {
                top: o,
                left: s
            }
        }
        return {
            top: 0,
            left: 0
        }
    }

    function Nl(e, t, n = window.document) {
        let r = e;
        const i = $o(t, n);
        if (i.error) return i;
        r = i;
        const o = pi(r),
            s = {
                element: r
            },
            c = r.ownerDocument || document,
            l = c.defaultView || window,
            a = _h(r),
            {
                left: d,
                top: f,
                right: m,
                bottom: p
            } = r.getBoundingClientRect(),
            E = {
                left: d,
                top: f,
                right: m,
                bottom: p
            };
        let h = {
            left: d,
            top: f,
            right: m,
            bottom: p
        };
        const y = l.getComputedStyle(r),
            {
                fixed: I,
                zIndex: S,
                opacity: T,
                hiddenOverflow: v,
                hasScrollableParent: _
            } = wl(r, y, c, l);
        if (!I && !o) {
            const R = c.body,
                O = Ch(c, l);
            if (h = Go(h, O), Vo(l.getComputedStyle(R).position)) {
                const {
                    documentElement: M
                } = c, {
                    overflowY: $
                } = l.getComputedStyle(M), {
                    overflowY: ee
                } = l.getComputedStyle(R);
                Wo(R, ee) && $ !== "visible" && (O.yOffset -= R.scrollTop);
                const w = Go(R.getBoundingClientRect(), O);
                h = Go(h, {
                    xOffset: -1 * w.left,
                    yOffset: -1 * w.top
                })
            }
        }
        const N = (h.right < 0 || h.bottom < 0) && !_;
        return !Bo(r) || y.visibility === "hidden" || T === 0 || v || N ? gn("Targeted element is present but not visible.") : Object.assign(s, {
            boundingRect: h,
            fixed: I,
            zIndex: S,
            relativeBoundingRect: E,
            viewport: {
                width: c.documentElement.clientWidth,
                height: c.documentElement.clientHeight
            },
            iframeParent: o,
            padding: a
        })
    }

    function Ih(e, t, n, r) {
        return {
            xRegion: Math.floor(Math.min(Math.max(e, 0), n - 1) / (n / 4)),
            yRegion: Math.floor(Math.min(Math.max(t, 0), r - 1) / (r / 4))
        }
    }

    function vh(e, t) {
        return Math.min(Jd, Math.max(Xd, (e - t) / 2))
    }

    function Ah(e) {
        const {
            documentElement: t
        } = e;
        return t.scrollTop > 0 || t.clientHeight < t.scrollHeight ? t : e.body
    }

    function bh(e, t, n, r, i, o, s) {
        const c = Math.ceil(r + e + i - n - s * o);
        let l = !1;
        c > e && c < e + r && (l = !0);
        const a = c - r / 2,
            d = t - r;
        return {
            idealScrollTop: Math.max(0, Math.min(a, d)),
            visibleInContainer: l
        }
    }
    const Ol = e => {
        if (e.assignedSlot) {
            const {
                host: r
            } = e.assignedSlot.parentNode;
            return r ? ? e.assignedSlot.parentNode
        }
        const t = pi(e);
        return t || (e.parentNode ? .host ? .tagName ? .includes("-") ? e.parentNode ? .host : e.parentElement)
    };

    function wh(e, t) {
        const n = [];
        let r = Ol(e);
        const i = t || document,
            {
                documentElement: o,
                body: s
            } = i;
        let c = window.getComputedStyle(e).position === "fixed";
        for (; !c && r && r !== s;) {
            const {
                overflowY: a,
                position: d
            } = window.getComputedStyle(r);
            Wo(r, a) && (Il(r) ? n.push(r.contentDocument.body) : n.push(r)), c = d === "fixed", r = Ol(r)
        }
        const l = Ah(i);
        return !c && (o.scrollHeight > o.clientHeight || l.scrollHeight > l.clientHeight) && n.push(l), n
    }

    function kl(e, t, n, r) {
        const i = r || document,
            o = e.getBoundingClientRect(),
            {
                height: s
            } = o;
        let {
            bottom: c
        } = o;
        return n.map(l => {
            let {
                bottom: a
            } = l.getBoundingClientRect();
            const {
                scrollTop: d,
                scrollHeight: f
            } = l;
            let {
                clientHeight: m
            } = l;
            (l === i.documentElement || l === i.body) && (m = Math.min(i.documentElement.clientHeight || Number.POSITIVE_INFINITY, i.body.clientHeight || Number.POSITIVE_INFINITY), m = m === Number.POSITIVE_INFINITY ? window.innerHeight : m, a = m);
            const {
                idealScrollTop: p,
                visibleInContainer: E
            } = bh(d, f, a, m, c, s, t);
            return c += d - p, {
                el: l,
                scrollTop: p,
                visibleInContainer: E
            }
        })
    }

    function hi(e, t) {
        return e && t ? Object.keys(e).every(n => e[n] === t[n]) : !1
    }

    function Nh(e, t) {
        return e.error || t.error ? e.error && t.error && e.errorMessage === t.errorMessage : e.fixed === t.fixed && e.zIndex === t.zIndex && e.element === t.element && hi(e.boundingRect || {}, t.boundingRect || {}) && hi(e.relativeBoundingRect || {}, t.relativeBoundingRect || {}) && hi(e.viewport || {}, t.viewport || {}) && hi(e.padding || {}, t.padding || {})
    }

    function jo(e) {
        const t = e.ownerDocument;
        return t && t.documentElement.contains(e)
    }

    function Oh(e) {
        const {
            height: t,
            width: n,
            top: r,
            left: i
        } = e.getBoundingClientRect(), o = n / 2 + i, s = -1 * (t / 2 + r);
        return {
            originX: o,
            originY: s,
            majorAxis: n / 2 - .5,
            minorAxis: t / 2 - .5
        }
    }

    function kh(e, t, n) {
        const {
            originX: r,
            originY: i,
            majorAxis: o,
            minorAxis: s
        } = n, c = e, l = -1 * t;
        return (c - r) ** 2 / o ** 2 + (l - i) ** 2 / s ** 2 <= 1
    }

    function Rh(e, t, n) {
        return [(-1 * t + Math.sqrt(t ** 2 - 4 * e * n)) / (2 * e), (-1 * t - Math.sqrt(t ** 2 - 4 * e * n)) / (2 * e)]
    }

    function Rl(e, t) {
        return Math.hypot(e.x - t.x, e.y - t.y)
    }

    function Lh(e, t, n) {
        const {
            originX: r,
            originY: i,
            majorAxis: o,
            minorAxis: s
        } = n, c = e, l = -1 * t, a = (l - i) / (c - r), d = l - a * c, f = s ** 2 + o ** 2 * a ** 2, m = 2 * (o ** 2 * a * (d - i) - s ** 2 * r), p = s ** 2 * r ** 2 + o ** 2 * (d - i) ** 2 - s ** 2 * o ** 2, E = Rh(f, m, p).map(h => {
            const y = a * h + d;
            return {
                x: h,
                y
            }
        }).reduce((h, y) => !h || Rl({
            x: c,
            y: l
        }, y) < Rl({
            x: c,
            y: l
        }, h) ? y : h, null);
        return { ...E,
            y: -1 * E.y
        }
    }

    function Ll(e, t, n) {
        const r = n ? .ownerDocument ? ? window.document;
        let i = (n ? gh(n) : null) ? ? r;
        i.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && i.nodeType !== Node.DOCUMENT_NODE && (i = r);
        const o = getComputedStyle(n).pointerEvents === "none",
            {
                pointerEvents: s
            } = n.style;
        o && (n.style.pointerEvents = "auto");
        const c = i.msElementsFromPoint ? i.msElementsFromPoint(e, t) : i.elementsFromPoint(e, t);
        if (o && (n.style.pointerEvents = s), !c) return !1;
        const l = r.documentElement.querySelector("appcues-layer"),
            a = ct(c, d => !(l && l.contains(d)));
        return n.contains(a)
    }

    function Ph({
        xOffset: e,
        yOffset: t,
        element: n
    }) {
        if (!n) return !1;
        if (document.fullscreenElement && /appcues-/.test(document.fullscreenElement.className)) return !0;
        const {
            left: r,
            top: i,
            right: o,
            bottom: s
        } = n.getBoundingClientRect(), c = o - r, l = s - i, a = Math.min(Math.max(1, e * c), c - 1) + r, d = Math.min(Math.max(1, t * l), l - 1) + i;
        if (Ll(a, d, n)) return !0;
        const f = Oh(n);
        if (kh(a, d, f) || f.majorAxis <= 0 || f.minorAxis <= 0) return !1;
        const {
            x: m,
            y: p
        } = Lh(a, d, f);
        return Ll(m, p, n)
    }

    function xh(e, t) {
        const n = e,
            r = n.className.split(" ");
        r.includes(t) || (n.className = [...r, t].filter(i => i).join(" "))
    }

    function Dh(e, t) {
        const n = e,
            r = n.className.split(" "),
            i = r.indexOf(t);
        i !== -1 && (r.splice(i, 1), n.className = r.join(" "))
    }

    function yr(e) {
        return (e.readyState === "interactive" || e.readyState === "complete") && e.body
    }

    function mi(e, t, n) {
        const r = t.lastIndexOf("/") + 1,
            i = t.slice(r);
        Array.prototype.some.call([...e.styleSheets], o => (o ? .href ? ? "").indexOf(i) !== -1) ? setTimeout(() => n(), 5) : setTimeout(() => mi(e, t, n), 5)
    }

    function Uh(e, t) {
        e.requestAnimationFrame(() => {
            e.requestAnimationFrame(() => {
                t()
            })
        })
    }

    function Fh(e, t, n) {
        let r;
        const i = new Promise(o => {
            r = s => {
                n && !n(s) || (e.removeEventListener(t, r), o(!0))
            }, e.addEventListener(t, r)
        });
        return {
            listener: r,
            promise: i
        }
    }

    function ut(e, t = 5) {
        const n = e.ownerDocument;
        t <= 0 || e && n.activeElement !== e && (e.focus({
            preventScroll: !0
        }), setTimeout(() => {
            n.documentElement.contains(e) && ut(e, t - 1)
        }, 200))
    }

    function Pl(e) {
        e && e.tagName === "BODY" ? e.hasAttribute("tabindex") ? e.focus({
            preventScroll: !0
        }) : (e.setAttribute("tabindex", -1), e.focus({
            preventScroll: !0
        }), setTimeout(() => {
            e.removeAttribute("tabindex")
        }, 500)) : e && e.focus({
            preventScroll: !0
        })
    }

    function Ei(e) {
        return [...e.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(t => !t.hasAttribute("disabled"))
    }
    const Ot = D(e => e.target.textContent, "");

    function Hh(e = "", t = !0) {
        const n = ["h1", "h2", "h3", "h4", "h5", "h6"];
        let o = !1;
        return s => {
            n.some(c => nr(s, c)) && !o && (o = !0, ye(s, "tabindex", "0"), e && ye(s, "id", e), St(s, "blur", c => {
                setTimeout(() => {
                    c.target.removeAttribute("tabindex"), Sl(s, "tabindex")
                }, 400)
            }), Mo(s, "insert", c => {
                c.elm && t && setTimeout(() => {
                    ut(c.elm)
                }, 500)
            }))
        }
    }

    function Mh() {
        return u.svg("svg", {
            width: "16px",
            height: "13px",
            viewBox: "0 0 16 13"
        }, u.svg("defs", null), u.svg("g", {
            id: "Icon-Check-Mark",
            stroke: "none",
            "stroke-width": "1",
            fill: "white",
            "fill-rule": "evenodd"
        }, u.svg("path", {
            d: "M5.4375,12.4668236 L0.21875,7.27932363 C0.0729165077,7.13349013 0,6.94599013 0,6.71682363 C0,6.48765712 0.0729165077,6.30015712 0.21875,6.15432363 L1.375,5.02932363 C1.52083349,4.86265712 1.703125,4.77932363 1.921875,4.77932363 C2.140625,4.77932363 2.33333349,4.86265712 2.5,5.02932363 L6,8.52932363 L13.5,1.02932363 C13.6666665,0.86265712 13.859375,0.779323627 14.078125,0.779323627 C14.296875,0.779323627 14.4791665,0.86265712 14.625,1.02932363 L15.78125,2.15432363 C15.9270835,2.30015712 16,2.48765712 16,2.71682363 C16,2.94599013 15.9270835,3.13349013 15.78125,3.27932363 L6.5625,12.4668236 C6.41666651,12.6334901 6.22916651,12.7168236 6,12.7168236 C5.77083349,12.7168236 5.58333349,12.6334901 5.4375,12.4668236 Z",
            id: "",
            fill: "#ffffff"
        })))
    }

    function $h({
        color: e = "#039be5"
    }) {
        return u.svg("svg", {
            width: "16px",
            height: "16px",
            viewBox: "0 0 16 16"
        }, u.svg("defs", null), u.svg("g", {
            id: "Icon-Caret-Right",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, u.svg("path", {
            d: "M6.82142857,1.03571182 L7.60714286,0.249999404 C7.77380971,0.083332953 7.97619029,0 8.21428571,0 C8.45238113,0 8.65476172,0.083332953 8.82142857,0.249999404 L15.75,7.17855431 C15.9166668,7.34522076 16,7.54760087 16,7.78569572 C16,8.02379058 15.9166668,8.22617068 15.75,8.39283713 L8.82142857,15.321392 C8.65476172,15.4880585 8.45238113,15.5713914 8.21428571,15.5713914 C7.97619029,15.5713914 7.77380971,15.4880585 7.60714286,15.321392 L6.82142857,14.5356796 C6.63095256,14.3690132 6.54166685,14.1666331 6.55357143,13.9285382 C6.56547601,13.6904434 6.65476172,13.4880633 6.82142857,13.3213968 L11.1071429,9.21426375 L0.857142857,9.21426375 C0.619047437,9.21426375 0.416666848,9.13093079 0.25,8.96426434 C0.0833331517,8.79759789 0,8.59521778 0,8.35712293 L0,7.21426851 C0,6.97617366 0.0833331517,6.77379356 0.25,6.6071271 C0.416666848,6.44046065 0.619047437,6.3571277 0.857142857,6.3571277 L11.1071429,6.3571277 L6.82142857,2.24999464 C6.65476172,2.08332818 6.56547601,1.88094808 6.55357143,1.64285323 C6.54166685,1.40475837 6.63095256,1.20237827 6.82142857,1.03571182 Z",
            id: "",
            fill: e
        })))
    }

    function Bh({
        color: e = "#999"
    }) {
        return u.svg("svg", {
            width: "16px",
            height: "16px",
            viewBox: "0 0 16 16"
        }, u.svg("defs", null), u.svg("g", {
            id: "Icon-Arrow-Down",
            stroke: "none",
            "stroke-width": "1",
            fill: e,
            "fill-rule": "evenodd"
        }, u.svg("path", {
            d: "M7.18944314,11.1875067 L3.20507764,7.20314121 C3.06835906,7.06642263 3,6.9004077 3,6.70509552 C3,6.50978333 3.06835906,6.3437684 3.20507764,6.20704983 L3.87890415,5.56252012 C4.01562273,5.42580154 4.18163766,5.35744248 4.37694984,5.35744248 C4.57226203,5.35744248 4.73827696,5.42580154 4.87499553,5.56252012 L7.68748882,8.37501341 L10.4999821,5.56252012 C10.6367007,5.42580154 10.8027156,5.35744248 10.9980278,5.35744248 C11.19334,5.35744248 11.3593549,5.42580154 11.4960735,5.56252012 L12.1699,6.20704983 C12.3066186,6.3437684 12.3749776,6.50978333 12.3749776,6.70509552 C12.3749776,6.9004077 12.3066186,7.06642263 12.1699,7.20314121 L8.18553451,11.1875067 C8.04881594,11.3242253 7.88280101,11.3925843 7.68748882,11.3925843 C7.49217664,11.3925843 7.32616171,11.3242253 7.18944314,11.1875067 Z",
            id: "",
            fill: e
        })))
    }

    function Wh({
        width: e,
        height: t,
        color: n
    }) {
        return u.svg("svg", {
            "attrs-width": e,
            "attrs-height": t,
            "attrs-viewBox": "0 0 24.7 22.8"
        }, u.svg("title", null, "checkmark"), u.svg("path", {
            "attrs-fill": n,
            class: "cls-1",
            d: "M18.4,17.4l-.3.3-.3.3h0a8.54,8.54,0,0,1-5.4,2,8.5,8.5,0,0,1,0-17,8.66,8.66,0,0,1,5.4,1.9l2.1-2.1A11.55,11.55,0,0,0,12.4,0,11.4,11.4,0,1,0,23.8,11.9Zm-5.8.5L6.1,11.4a1,1,0,0,1,0-1.4L7.5,8.6a1.08,1.08,0,0,1,.7-.3.91.91,0,0,1,.7.3L13.2,13l9.3-9.4a1,1,0,0,1,1.4,0L25.4,5a1,1,0,0,1,0,1.4L14,17.9a1,1,0,0,1-1.4,0Z",
            transform: "translate(-1 0)"
        }))
    }

    function Vh({
        width: e,
        height: t,
        color: n
    }) {
        return u.svg("svg", {
            width: e,
            height: t,
            viewBox: "0 0 77 77",
            fill: "blue"
        }, u.svg("title", null, "Artboard"), u.svg("desc", null, "Created with Sketch."), u.svg("defs", null), u.svg("g", {
            id: "Artboard",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
        }, u.svg("g", {
            id: "Group",
            transform: "translate(2.000000, 2.000000)",
            fill: n
        }, u.svg("path", {
            d: "M36.5,72.5 C16.617749,72.5 0.5,56.382251 0.5,36.5 C0.5,16.617749 16.617749,0.5 36.5,0.5 C56.382251,0.5 72.5,16.617749 72.5,36.5 C72.5,56.382251 56.382251,72.5 36.5,72.5 Z M36.5,69.5 C54.7253967,69.5 69.5,54.7253967 69.5,36.5 C69.5,18.2746033 54.7253967,3.5 36.5,3.5 C18.2746033,3.5 3.5,18.2746033 3.5,36.5 C3.5,54.7253967 18.2746033,69.5 36.5,69.5 Z M32.7096583,27.0197504 C32.3597576,27.0197504 32.0723398,26.9364171 31.8474039,26.7697504 C31.622468,26.6030837 31.51,26.390121 31.51,26.1308615 L31.51,23.9086393 C31.51,23.6493797 31.622468,23.4364171 31.8474039,23.2697504 C32.0723398,23.1030837 32.3597576,23.0197504 32.7096583,23.0197504 L54.3035083,23.0197504 C54.653409,23.0197504 54.9408268,23.1030837 55.1657627,23.2697504 C55.3906987,23.4364171 55.5031667,23.6493797 55.5031667,23.9086393 L55.5031667,26.1308615 C55.5031667,26.390121 55.3906987,26.6030837 55.1657627,26.7697504 C54.9408268,26.9364171 54.653409,27.0197504 54.3035083,27.0197504 L32.7096583,27.0197504 Z M32.7096583,39.1382527 C32.3597576,39.1382527 32.0723398,39.0549194 31.8474039,38.8882527 C31.622468,38.7215861 31.51,38.5086234 31.51,38.2493638 L31.51,36.0271416 C31.51,35.7678821 31.622468,35.5549194 31.8474039,35.3882527 C32.0723398,35.2215861 32.3597576,35.1382527 32.7096583,35.1382527 L54.3035083,35.1382527 C54.653409,35.1382527 54.9408268,35.2215861 55.1657627,35.3882527 C55.3906987,35.5549194 55.5031667,35.7678821 55.5031667,36.0271416 L55.5031667,38.2493638 C55.5031667,38.5086234 55.3906987,38.7215861 55.1657627,38.8882527 C54.9408268,39.0549194 54.653409,39.1382527 54.3035083,39.1382527 L32.7096583,39.1382527 Z M32.7096583,51.2567551 C32.3597576,51.2567551 32.0723398,51.1734217 31.8474039,51.0067551 C31.622468,50.8400884 31.51,50.6271257 31.51,50.3678662 L31.51,48.1456439 C31.51,47.8863844 31.622468,47.6734217 31.8474039,47.5067551 C32.0723398,47.3400884 32.3597576,47.2567551 32.7096583,47.2567551 L54.3035083,47.2567551 C54.653409,47.2567551 54.9408268,47.3400884 55.1657627,47.5067551 C55.3906987,47.6734217 55.5031667,47.8863844 55.5031667,48.1456439 L55.5031667,50.3678662 C55.5031667,50.6271257 55.3906987,50.8400884 55.1657627,51.0067551 C54.9408268,51.1734217 54.653409,51.2567551 54.3035083,51.2567551 L32.7096583,51.2567551 Z M23.2982062,28.2493526 L22.1735266,29.4602668 C21.9735831,29.6116311 21.7486472,29.6873132 21.4987187,29.6873132 C21.2487903,29.6873132 21.0238544,29.6116311 20.8239109,29.4602668 L17.2999146,25.8275243 C17.0999711,25.6761601 17,25.4743407 17,25.2220673 C17,24.9697939 17.0749786,24.7427475 17.2249359,24.5409281 L18.4245943,23.405696 C18.6245377,23.2038766 18.8494736,23.1029675 19.0994021,23.1029675 C19.3493305,23.1029675 19.549274,23.2038766 19.6992312,23.405696 L21.4237401,25.070703 L26.2223734,20.2270464 C26.3723307,20.0756821 26.5722742,20 26.8222026,20 C27.072131,20 27.297067,20.0756821 27.4970104,20.2270464 L28.7716474,21.5136427 C28.9216047,21.7154621 28.9965833,21.9298944 28.9965833,22.1569408 C28.9965833,22.3839872 28.8966122,22.5984196 28.6966687,22.800239 L28.7716474,22.800239 L23.2982062,28.2493526 Z M23.2982062,40.4435371 L22.1735266,41.5787691 C21.9735831,41.7805885 21.7486472,41.8814977 21.4987187,41.8814977 C21.2487903,41.8814977 21.0238544,41.7805885 20.8239109,41.5787691 L17.2999146,38.0217088 C17.0999711,37.8198894 17,37.6054571 17,37.3784107 C17,37.1513643 17.0749786,36.9369319 17.2249359,36.7351125 L18.4245943,35.5241984 C18.6245377,35.3728341 18.8494736,35.297152 19.0994021,35.297152 C19.3493305,35.297152 19.549274,35.3728341 19.6992312,35.5241984 L21.4237401,37.1892053 L26.2223734,32.4212309 C26.3723307,32.2194115 26.5722742,32.1185023 26.8222026,32.1185023 C27.072131,32.1185023 27.297067,32.2194115 27.4970104,32.4212309 L28.7716474,33.7078272 C28.9216047,33.8591914 28.9965833,34.0610108 28.9965833,34.3132842 C28.9965833,34.5655576 28.8966122,34.792604 28.6966687,34.9944234 L28.7716474,34.9944234 L23.2982062,40.4435371 Z M23.2982062,52.5620394 L22.1735266,53.6972715 C21.9735831,53.8990909 21.7486472,54 21.4987187,54 C21.2487903,54 21.0238544,53.8990909 20.8239109,53.6972715 L17.2999146,50.1402111 C17.0999711,49.9383917 17,49.7239594 17,49.496913 C17,49.2698666 17.0749786,49.0554343 17.2249359,48.8536149 L18.4245943,47.6427007 C18.6245377,47.4913364 18.8494736,47.4156543 19.0994021,47.4156543 C19.3493305,47.4156543 19.549274,47.4913364 19.6992312,47.6427007 L21.4237401,49.3077077 L26.2223734,44.5397332 C26.3723307,44.3379138 26.5722742,44.2370047 26.8222026,44.2370047 C27.072131,44.2370047 27.297067,44.3379138 27.4970104,44.5397332 L28.7716474,45.8263295 C28.9216047,45.9776938 28.9965833,46.1795132 28.9965833,46.4317866 C28.9965833,46.68406 28.8966122,46.9111064 28.6966687,47.1129258 L28.7716474,47.1129258 L23.2982062,52.5620394 Z",
            id: ""
        }))))
    }
    const Gh = e => {
            const {
                label: t,
                items_remaining: n,
                onBeaconClicked: r,
                setWidth: i,
                isBottomRight: o,
                styles: s,
                percentComplete: c,
                isChecklistExpanded: l,
                controls: a,
                setRef: d
            } = e, {
                beacon_background_color: f,
                beacon_text_color: m
            } = s, p = E => {
                E.key === "Tab" && (E.currentTarget.style.outline = ""), (E.key === " " || E.key === "Enter") && r()
            };
            return u.html("div", {
                "attrs-role": "button",
                "attrs-aria-expanded": l ? "true" : "false",
                "attrs-aria-controls": a,
                "class-beacon": !0,
                "class-right": o,
                "hook-update": E => i(E.elm),
                "attrs-tabindex": "0",
                "attrs-aria-label": `${t} ${n} items remaining, ${c} complete`,
                "on-keyup": p,
                "hook-insert": d,
                "on-mousedown": E => {
                    E.currentTarget.style.outline = "none"
                },
                "on-click": r,
                style: {
                    backgroundColor: f
                }
            }, u.html("div", {
                "attrs-aria-hidden": "true"
            }, u.html("div", {
                "class-icon": !0,
                style: {
                    color: m
                }
            }), u.html(Wh, {
                height: "20px",
                width: "20px",
                color: m || "#FFFFFF"
            }), u.html("div", {
                "class-label": !0,
                style: {
                    color: m
                }
            }, t), u.html("div", {
                "class-badge": !0,
                style: {
                    color: f
                }
            }, n)))
        },
        jh = e => {
            const {
                actions: t,
                label: n,
                state: r,
                onItemClicked: i,
                styles: o,
                itemNumberLabel: s,
                isSequential: c,
                depends_on: l,
                items: a,
                isChecklistExpanded: d,
                setRef: f
            } = e, m = r === "complete", p = t ? t.length === 0 : !1, E = a.reduce((_, N) => ({ ..._,
                [N.id]: N
            }), {}), h = (l || []).filter(_ => E[_] && E[_].state === "incomplete").map(_ => E[_].label), y = h.length === 0, I = c && !y && !m, S = _ => {
                (_.key === " " || _.key === "Enter") && i()
            }, T = t ? t.some(_ => _.attributes.action_type === "redirect") : !1;
            let v = ` - ${m?"completed":"incomplete"}`;
            return I && (v = ` - locked, complete ${h.join(", ")} first`), u.html("li", {
                "class-item": !0,
                "class-completed": m,
                "class-locked": I,
                "class-actionless": p,
                "on-click": I ? () => {} : i,
                "attrs-tabindex": d ? "0" : "-1",
                "on-keyup": I ? () => {} : S,
                "attrs-role": T ? "link" : "button",
                "attrs-type": T ? "" : "button",
                "attrs-aria-disabled": I ? "true" : void 0,
                "hook-insert": s === "1" ? f : void 0
            }, u.html("a", null, u.html("span", {
                "class-checkmark": !0
            }, u.html("span", {
                "class-sequential-label": c && !m
            }, s), u.html(Mh, null)), u.html("p", null, n, u.html("span", {
                "class-sr-only": !0
            }, v)), u.html($h, {
                color: o.beacon_background_color
            })))
        };

    function de() {
        return je(void 0, {}, void 0, "")
    }

    function qo({
        onLoad: e = () => null,
        styling: t
    }) {
        return u.html("style", {
            classNames: "appcues-global-styling",
            "attrs-type": "text/css",
            "on-load": e
        }, t || "")
    }

    function xl(e) {
        return e.replace(/\/+$/, "")
    }

    function Ht(e) {
        if (window.AppcuesBundleSettings ? .ASSETS_PATH) {
            const t = e.split("/").pop();
            return `${xl(window.AppcuesBundleSettings.ASSETS_PATH)}/styles/${t}`
        }
        if (window.AppcuesBundleSettings && window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN) {
            const {
                GENERIC_BUNDLE_DOMAIN: t
            } = window.AppcuesBundleSettings;
            return `${t}${e}`
        }
        return `https://fast.appcues.com${e}`
    }
    const qh = "/generic/main/7.20.2/checklist.6a6a274575024b516c91cfd03d287c29b5744063.css",
        Kh = "sha256-B3IM66R3am8teThQaWvlSxHaPUFXo+mNdS8RK5z2nsw=",
        Ko = Ht(qh),
        Yo = 30,
        Yh = -300,
        zh = "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/";
    let Sr = null,
        Tr = null,
        Cr = null,
        gi = null;
    const Xh = e => {
        const {
            id: t,
            name: n,
            styles: r,
            text_tokens: i,
            items: o,
            is_checklist_expanded: s,
            is_first_view: c,
            frameHeight: l,
            beaconWidth: a,
            onBeaconClicked: d,
            onItemClicked: f,
            onOutsideClicked: m,
            onDismissClicked: p,
            onDismissCanceled: E,
            onDismissConfirmed: h,
            onCSSLoaded: y,
            onMinimizedClicked: I,
            shouldShowConfirmDismiss: S,
            onExpandChecklistResize: T,
            onCollapseBeaconResize: v,
            status: _,
            progress_state: N,
            is_sequential: L,
            is_dismissable: R,
            showBadge: O,
            collisionMode: M,
            collisionCoordinates: $,
            isInjectableSDK: ee,
            styling: w
        } = e, q = me => {
            ee || setTimeout(() => {
                ut(me.elm)
            }, 300)
        }, se = i.beacon_text || "Get Started", Z = 60, {
            length: ie
        } = o.length > 0 ? o.filter(me => me && me.state && me.state !== "complete") : [], Se = "appcues-checklist-main", Be = `${Math.floor((o.length-ie)/o.length*100)||0}%`, ke = ie === 0, V = i.header_text || "Getting Started", z = i.description_text || "Here are a few things to do first.", le = i.completion_dismiss_text || "I'm done", ve = i.completion_title || "Congratulations!", he = i.completion_text || "You’ve completed the first few steps. You can always come back if you need more help.", ae = N === "shown_manually" ? ke : N === "completed", k = i.dismiss_text || "No thanks", x = i.dismiss_prompt_text || "Are you sure you want to dismiss this list?", P = i.dismiss_cancel_text || "Keep it", J = i.dismiss_confirm_text || "Dismiss it", ne = `.checklist .checklist-body .item:hover:not(.completed):not(.locked) a,
    .checklist .checklist-header.checklist-congrats:hover .dismiss-link,
    .checklist .skip-link:hover,
    .checklist .checklist-main .powered-by-appcues:hover {
        color: ${r.beacon_background_color};
      }
      .checklist .checklist-body .item:hover:not(.completed):not(.locked) a .checkmark {
        border-color: ${r.beacon_background_color};
      }
      .checklist .checklist-body .item:hover:not(.completed):not(.locked) a .checkmark .sequential-label{
        color: ${r.beacon_background_color};
      }
      .checklist .checklist-body .item.completed a .checkmark {
        background-color: ${r.success_color};
        border-color: ${r.success_color};
      }
      .checklist .checklist-header.checklist-congrats h1 {
        color: ${r.success_color};
      }`, te = `
    @keyframes checkAppear {
      0% {
        border-color: inherit;
        background-color: inherit;
        -webkit-transform: none;
                transform: none;
      }
      20% {
        border-color: #555555;
      }
      35% {
        -webkit-transform: none;
                transform: none;
      }
      45% {
        border-color: #555555;
        background-color: white;
        -webkit-transform: scale(0.7);
                transform: scale(0.7);
      }
      58% {
        border-color: ${r.success_color};
        background-color: ${r.success_color};
        -webkit-transform: scale(1.25);
                transform: scale(1.25);
      }
      64% {
        -webkit-transform: scale(1.25);
                transform: scale(1.25);
      }
      100% {
        border-color: ${r.success_color};
        background-color: ${r.success_color};
        -webkit-transform: none;
                transform: none;
      }
    }
    .checklist .checklist-body .item.completed a .checkmark {
      animation-name: checkAppear;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0, 0, 0.23, 1.27);
      animation-iteration-count: 1;
    }
  `, {
            position: K
        } = r, G = K === "Bottom Right", Le = s ? {
            height: `${l}px`,
            width: "364px"
        } : {
            height: `${Z}px`,
            width: `${a}px`,
            transition: "all 0s linear 1s"
        }, Ue = 12, ar = 12, {
            beacon_vertical_offset: Ln,
            beacon_horizontal_offset: xt
        } = r, qi = G ? "right" : "left", SA = c ? Yh : Yo, TA = {
            opacity: 0,
            delayed: {
                opacity: 100
            },
            remove: {
                opacity: 0
            },
            destroy: {
                opacity: 0
            },
            bottom: M ? `${$.y}px` : `${Yo+Ln}px`,
            [qi]: M ? `${$.x}px` : `${SA+xt}px`
        }, Pn = me => {
            const qt = M ? $.y : Yo + Ln,
                Yi = window.innerHeight - qt;
            if (me) {
                const Vd = me.getBoundingClientRect().height + Z + Ue + ar,
                    zi = Math.min(Vd, Yi);
                Math.ceil(zi) !== l && window.requestAnimationFrame(() => T(t, zi))
            } else {
                const zi = Math.min(359, Yi);
                window.requestAnimationFrame(() => T(t, zi))
            }
        };
        gi = Pn;
        const CA = 18,
            _A = me => {
                if (me) {
                    const qt = me.getBoundingClientRect().width + CA;
                    Math.ceil(qt) !== a && window.requestAnimationFrame(() => {
                        v(t, qt)
                    })
                }
            },
            Md = me => {
                me.target.nodeName !== "APPCUES-EXPERIENCE-CONTAINER" && !M && m(t)
            },
            Ki = r.font,
            $d = r.font_url,
            IA = `
    .checklist-main .title, .desc, .completed-caption, .sequential-label,
    .item a, .skip-link, .dismiss-text, .button-default {
      font-family: ${Ki};
    }

    .checklist-main .checklist-congrats h1, p, .dismiss-link {
      font-family: ${Ki};
    }

    .beacon .label, .badge {
      font-family: ${Ki};
    }
  `,
            Bd = r.custom_background_color,
            vA = `
    .checklist-main,
    .checklist-main .checklist-body .item .checkmark,
    .checklist-main .checklist-body .dismiss-container,
    .checklist-main .checklist-header.checklist-congrats
     {
      background-color: ${Bd};
    }
  `,
            jr = r.custom_font_color,
            AA = `
    .checklist-main .title, .desc, .completed-caption, .sequential-label,
    .item a, .skip-link, .dismiss-text, .button-default,
    .checklist-main .checklist-header.checklist-congrats p,
    .checklist-main .checklist-body .item p,
    .checklist-main .checklist-body .item .checkmark,
    .checklist-main .checklist-body .item .checkmark > span,
    .checklist-main .checklist-footer .skip-link,
    .checklist-main .checklist-footer .powered-by-appcues {
      color: ${jr};
    }
    .checklist-main .checklist-header {
      border-bottom: 1px solid ${jr};
    }
    .checklist-main .checklist-body .item .checkmark {
      border: 2px solid ${jr};
    }
    .checklist-main .checklist-footer .skip-link:hover,
    .checklist-main .checklist-footer .powered-by-appcues:hover,
    .checklist-main .checklist-body .item:hover:not(.actionless) p
     {
      color: ${r.beacon_background_color};
    }
  `,
            Wd = r.custom_hover_state_color,
            bA = `
    .checklist-main .checklist-body .item:hover:not(.actionless) {
      background-color: ${Wd};
    }
  `;
        return u.html("appcues-checklist", {
            "class-apcl-right": G,
            "class-apcl-left": !G,
            "class-first-view": c,
            key: t,
            "hook-remove": () => {
                document.removeEventListener("click", Md), Cr && (window.removeEventListener("resize", Cr), Cr = null), gi = null
            },
            style: TA
        }, u.html("iframe", {
            "attrs-title": V,
            "style-border": "none",
            style: Le,
            "style-color-scheme": "none"
        }, u.html("link", {
            "attrs-href": Ko,
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "attrs-integrity": Kh,
            "attrs-crossorigin": "anonymous",
            "on-load": () => {
                y(t, Ko, !0), document.addEventListener("click", Md), Cr = () => {
                    const me = document.querySelector("appcues-checklist iframe");
                    if (!me || !me.contentDocument) return;
                    const qt = me.contentDocument.querySelector(".checklist-main.expanded");
                    qt && gi && gi(qt)
                }, window.addEventListener("resize", Cr)
            },
            "on-error": () => {
                y(t, Ko, !1)
            }
        }), $d ? u.html("link", {
            "attrs-href": $d,
            "attrs-rel": "stylesheet"
        }) : u.html(de, null), w ? .globalStyling ? u.html(qo, {
            styling: w.globalStyling
        }) : u.html(de, null), u.html("style", {
            "attrs-type": "text/css"
        }, ne), u.html("style", {
            "attrs-type": "text/css"
        }, te), Ki ? u.html("style", {
            "attrs-type": "text/css"
        }, IA) : u.html(de, null), Bd ? u.html("style", {
            "attrs-type": "text/css"
        }, vA) : u.html(de, null), jr ? u.html("style", {
            "attrs-type": "text/css"
        }, AA) : u.html(de, null), Wd ? u.html("style", {
            "attrs-type": "text/css"
        }, bA) : u.html(de, null), _ === Q.SHOWING ? u.html("div", {
            "class-checklist": !0
        }, r.type === "beacon" && !M ? u.html(Gh, {
            styles: r,
            label: se,
            items_remaining: ie,
            onBeaconClicked: () => {
                d(t), Pn()
            },
            setWidth: _A,
            isBottomRight: G,
            percentComplete: Be,
            isChecklistExpanded: s,
            controls: Se,
            setRef: me => {
                Tr = me
            }
        }) : u.html(de, null), u.html("div", {
            "attrs-id": Se,
            "class-checklist-main": !0,
            "class-expanded": s,
            "hook-update": me => Pn(me.elm)
        }, u.html("div", {
            "class-checklist-container": !0
        }, u.html("div", {
            "class-checklist-header": !0,
            "class-checklist-congrats": ae
        }, ae ? u.html("div", {
            "class-header-content": !0
        }, u.html("span", {
            "class-emoji": !0
        }, u.html(Jh, {
            successImageCode: r.success_image_code,
            customSuccessImageUrl: r.custom_success_image_url,
            successColor: r.success_color
        })), u.html("h1", null, ve), u.html("p", null, he)) : u.html("div", {
            "class-header-content": !0
        }, u.html("h1", {
            "class-title": !0
        }, V), u.html("div", {
            "class-desc": !0
        }, z), u.html("div", {
            "class-progress-container": !0
        }, u.html("span", {
            "class-completed-caption": !0
        }, Be), u.html("span", {
            "class-progress-bar": !0
        }, u.html("span", {
            "class-progress-bar-complete": !0,
            "class-progress-bar-done": ke,
            "style-width": Be,
            "style-backgroundColor": r.beacon_background_color
        })))), ae ? u.html("button", {
            type: "button",
            "class-dismiss-link": !0,
            "attrs-tabindex": "0",
            "on-keyup": me => {
                (me.key === " " || me.key === "Enter") && h(t, n, ae)
            },
            "on-click": () => h(t, n, ae)
        }, le) : s ? u.html("div", {
            style: {
                visibility: s ? "visible" : "hidden"
            },
            "attrs-role": "button",
            "attrs-aria-expanded": s ? "true" : "false",
            "attrs-aria-controls": Se,
            "attrs-aria-label": "Minimize checklist",
            "class-minimize": !0,
            "attrs-tabindex": "0",
            "hook-insert": q,
            "on-keyup": me => {
                (me.key === " " || me.key === "Enter") && (I(t), Tr && q(Tr))
            },
            "on-click": () => {
                I(t), Tr && q(Tr)
            }
        }, u.html("div", {
            "attrs-aria-hidden": "true"
        }, u.html(Bh, {
            color: jr || "#999"
        }))) : u.html(de, null)), u.html("div", {
            "class-checklist-body": !0,
            "class-show-confirm": S
        }, S ? u.html(de, null) : u.html("ul", {
            "class-items": !0
        }, o.map((me, qt) => u.html(jh, { ...me,
            checklistId: t,
            items: o,
            onItemClicked: () => s && f(t, me.id),
            styles: r,
            isSequential: L,
            itemNumberLabel: `${qt+1}`,
            isChecklistExpanded: s,
            setRef: Yi => {
                Sr = Yi
            }
        }))), S ? u.html("div", {
            "class-dismiss-container": !0
        }, u.html("div", {
            "class-content-container": !0
        }, u.html("div", {
            "class-dismiss-content": !0
        }, u.html("div", {
            "class-dismiss-text": !0
        }, x), u.html("div", {
            "class-button-container": !0
        }, u.html("div", {
            "class-button-row": !0
        }, u.html("a", {
            "class-button-default": !0,
            "class-alt": !0,
            "class-cancel-dismiss": !0,
            "attrs-tabindex": "0",
            role: "button",
            type: "button",
            "hook-insert": q,
            "on-keyup": me => {
                (me.key === " " || me.key === "Enter") && (E(t), Pn(), Sr && q(Sr))
            },
            "on-click": () => {
                E(t), Pn(), Sr && q(Sr)
            }
        }, P), u.html("a", {
            "class-button-default": !0,
            "attrs-tabindex": "0",
            role: "button",
            type: "button",
            "on-keyup": me => {
                (me.key === " " || me.key === "Enter") && h(t, n, ke)
            },
            "on-click": () => h(t, n, ke)
        }, u.html("strong", null, "×"), " ", J)))))) : u.html(de, null)), u.html("div", {
            "class-checklist-footer": !0
        }, R && s && !ae && !S ? u.html("button", {
            type: "button",
            "class-skip-link": !0,
            "class-left": G,
            "attrs-tabindex": "0",
            "on-keyup": me => {
                (me.key === " " || me.key === "Enter") && (p(t), document.querySelector("appcues-checklist iframe").contentDocument.documentElement.querySelector(".cancel-dismiss").focus(), Pn())
            },
            "on-click": () => {
                p(t), Pn()
            }
        }, k) : u.html(de, null), s && ae && O ? u.html("a", {
            "class-powered-by-appcues": !0,
            "class-left": G,
            "attrs-href": "http://www.appcues.com",
            "attrs-target": "_blank"
        }, "Brought to you by Appcues") : u.html(de, null))))) : u.html(de, null)))
    };

    function Jh({
        successImageCode: e,
        customSuccessImageUrl: t,
        successColor: n
    }) {
        if (t) return u.html("img", {
            alt: "Success!",
            src: `${t}`,
            style: {
                height: "60px",
                width: "60px"
            }
        });
        if (e === "none") return u.html(de, null);
        if (!e || e === "default") return u.html(Vh, {
            width: "60px",
            height: "60px",
            color: n
        });
        if (e && e !== "none") return u.html("img", {
            alt: "",
            src: `https:${zh}${e}.svg`,
            style: {
                height: "60px",
                width: "60px"
            }
        })
    }
    const Qh = e => {
        const {
            id: t,
            attributes: n,
            beaconWidth: r,
            viewState: i,
            frameHeight: o,
            shouldShowConfirmDismiss: s,
            callbacks: c,
            showBadge: l,
            status: a,
            collisionMode: d,
            collisionCoordinates: f,
            isInjectableSDK: m,
            styling: p
        } = e;
        return u.html(Xh, {
            id: t,
            status: a,
            styles: n.styles || {},
            beaconWidth: r,
            frameHeight: o,
            items: n.items || [],
            is_checklist_expanded: i === Yt.EXPANDED,
            is_first_view: i === Yt.FIRSTVIEW,
            text_tokens: n.text_tokens || {},
            name: n.name || "Untitled Checklist",
            shouldShowConfirmDismiss: s,
            progress_state: n.progress_state,
            is_sequential: n.is_sequential || !1,
            is_dismissable: n ? .is_dismissable ? ? !0,
            showBadge: l,
            collisionMode: d,
            collisionCoordinates: f,
            isInjectableSDK: m,
            styling: p,
            ...c
        })
    };

    function yi() {
        return !1
    }

    function Zh(e) {
        let t = document.body;
        if (window.AppcuesSettings && window.AppcuesSettings.customContainer) {
            const r = document.documentElement.querySelector(window.AppcuesSettings.customContainer);
            r && (t = r)
        }
        const n = document.createElement("div");
        return t.appendChild(n), e(n, u.html("div", {
            "class-appcues": !0
        }))
    }

    function em() {
        const e = Xn([er, Zn, Qn, tr, Jn], ui.createApi({
            clean: !0,
            trustedTypesPolicy: window.trustedTypes ? .defaultPolicy
        }));
        let t = null;
        return function(r) {
            if (yr(document)) {
                const i = Te(r) || {},
                    {
                        status: o
                    } = r.currentContent || {},
                    s = ap(r),
                    c = i.type && oe.inArray(no, o),
                    l = fn(r),
                    a = ct(l, f => no.includes(f.status)),
                    d = yi(r.settings);
                if (c || a) {
                    (!t || !jo(t.elm)) && (t = Zh(e));
                    const f = r.views.callbacks[X.CHECKLIST],
                        m = a ? .attributes ? .style,
                        p = m ? vo(r)[m] : void 0;
                    t = e(t, u.html("div", {
                        "class-appcues": !0,
                        "class-injectable": s
                    }, c && r.views.renderers[i.type] ? r.views.renderers[i.type](r) : u.html(de, null), a ? u.html("appcues-checklists", {
                        "attrs-role": dr.ROLE_CONTAINER,
                        "attrs-aria-label": dr.LABEL_CHECKLIST
                    }, Qh({ ...a,
                        styling: p,
                        showBadge: d,
                        callbacks: f,
                        collisionMode: r.collisionMode,
                        collisionCoordinates: r.collisionCoordinates,
                        isInjectableSDK: s
                    })) : u.html(de, null)))
                } else t && (t = e(t, u.html("div", {
                    "class-appcues": !0
                })))
            }
        }
    }
    var Si = {},
        zo, Dl;

    function tm() {
        return Dl || (Dl = 1, zo = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }), zo
    }
    var Xo, Ul;

    function nm() {
        if (Ul) return Xo;
        Ul = 1;
        var e = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g,
            t = tm();
        return Xo = function(n) {
            var r = 0,
                i, o = !0,
                s = {
                    type: "tag",
                    name: "",
                    voidElement: !1,
                    attrs: {},
                    children: []
                };
            return n.replace(e, function(c) {
                if (c === "=") {
                    o = !0, r++;
                    return
                }
                o ? r === 0 ? ((t[c] || n.charAt(n.length - 2) === "/") && (s.voidElement = !0), s.name = c) : (s.attrs[i] = c.replace(/^['"]|['"]$/g, ""), i = void 0) : (i && (s.attrs[i] = i), i = c), r++, o = !1
            }), s
        }, Xo
    }
    var Jo, Fl;

    function rm() {
        if (Fl) return Jo;
        Fl = 1;
        var e = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"|'[^']*'|[^'">])+>)/g,
            t = nm(),
            n = Object.create ? Object.create(null) : {};

        function r(i, o, s, c, l) {
            var a = o.indexOf("<", c),
                d = o.slice(c, a === -1 ? void 0 : a);
            /^\s*$/.test(d) && (d = " "), (!l && a > -1 && s + i.length >= 0 || d !== " ") && i.push({
                type: "text",
                content: d
            })
        }
        return Jo = function(o, s) {
            s || (s = {}), s.components || (s.components = n);
            var c = [],
                l, a = -1,
                d = [],
                f = {},
                m = !1;
            return o.replace(e, function(p, E) {
                if (m) {
                    if (p !== "</" + l.name + ">") return;
                    m = !1
                }
                var h = p.charAt(1) !== "/",
                    y = p.indexOf("<!--") === 0,
                    I = E + p.length,
                    S = o.charAt(I),
                    T;
                h && !y && (a++, l = t(p), l.type === "tag" && s.components[l.name] && (l.type = "component", m = !0), !l.voidElement && !m && S && S !== "<" && r(l.children, o, a, I, s.ignoreWhitespace), f[l.tagName] = l, a === 0 && c.push(l), T = d[a - 1], T && T.children.push(l), d[a] = l), (y || !h || l.voidElement) && (y || a--, !m && S !== "<" && S && (T = a === -1 ? c : d[a].children, r(T, o, a, I, s.ignoreWhitespace)))
            }), !c.length && o.length && r(c, o, 0, 0, s.ignoreWhitespace), c
        }, Jo
    }
    const Hl = oh(ih);
    var rr = {},
        Ml;

    function im() {
        if (Ml) return rr;
        Ml = 1, Object.defineProperty(rr, "__esModule", {
            value: !0
        }), rr.createTextVNode = t, rr.transformName = n, rr.unescapeEntities = o;
        var e = Hl;

        function t(s, c) {
            return (0, e.vnode)(void 0, void 0, void 0, o(s, c))
        }

        function n(s) {
            s = s.replace(/-(\w)/g, function(a, d) {
                return d.toUpperCase()
            });
            var c = s.charAt(0).toLowerCase();
            return "" + c + s.substring(1)
        }
        var r = new RegExp("&[a-z0-9#]+;", "gi"),
            i = null;

        function o(s, c) {
            return i || (i = c.createElement("div")), s.replace(r, function(l) {
                return i.innerHTML = l, i.textContent
            })
        }
        return rr
    }
    var $l;

    function om() {
        if ($l) return Si;
        $l = 1, Object.defineProperty(Si, "__esModule", {
            value: !0
        }), Si.default = function(f) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                p = m.context || document;
            if (!f) return null;
            var E = [],
                h = s((0, t.default)(f), E, p),
                y = void 0;
            return h ? h.length === 1 ? y = h[0] : y = h : y = c({
                type: "text",
                content: f
            }, E, p), m.hooks && m.hooks.create && E.forEach(function(I) {
                m.hooks.create(I)
            }), y
        };
        var e = rm(),
            t = i(e),
            n = Hl,
            r = im();

        function i(f) {
            return f && f.__esModule ? f : {
                default: f
            }
        }

        function o(f, m, p) {
            return m in f ? Object.defineProperty(f, m, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : f[m] = p, f
        }

        function s(f, m, p) {
            if (f instanceof Array && f.length > 0) return f.map(function(E) {
                return c(E, m, p)
            })
        }

        function c(f, m, p) {
            var E = void 0;
            return f.type === "text" ? E = (0, r.createTextVNode)(f.content, p) : E = (0, n.h)(f.name, l(f, p), s(f.children, m, p)), m.push(E), E
        }

        function l(f, m) {
            var p = {};
            if (!f.attrs) return p;
            var E = Object.keys(f.attrs).reduce(function(I, S) {
                if (S !== "style" && S !== "class") {
                    var T = (0, r.unescapeEntities)(f.attrs[S], m);
                    I ? I[S] = T : I = o({}, S, T)
                }
                return I
            }, null);
            E && (p.attrs = E);
            var h = a(f);
            h && (p.style = h);
            var y = d(f);
            return y && (p.class = y), p
        }

        function a(f) {
            try {
                return f.attrs.style.split(";").reduce(function(m, p) {
                    var E = p.split(":"),
                        h = (0, r.transformName)(E[0].trim());
                    if (h) {
                        var y = E[1].replace("!important", "").trim();
                        m ? m[h] = y : m = o({}, h, y)
                    }
                    return m
                }, null)
            } catch {
                return null
            }
        }

        function d(f) {
            try {
                return f.attrs.class.split(" ").reduce(function(m, p) {
                    return p = p.trim(), p && (m ? m[p] = !0 : m = o({}, p, !0)), m
                }, null)
            } catch {
                return null
            }
        }
        return Si
    }
    var Qo, Bl;

    function sm() {
        return Bl || (Bl = 1, Qo = om()), Qo
    }
    var cm = sm();
    const Mt = Uo(cm);

    function lm(e, t, n) {
        let r = 0,
            i = 0,
            o = e;
        if (o.offsetParent)
            for (; r += o.offsetLeft, i += o.offsetTop, !!(o = o.offsetParent););
        return {
            left: r + e.offsetWidth / 2 + t,
            top: i + e.offsetHeight + 10 + n
        }
    }

    function am(e) {
        const t = e.includes("top"),
            n = e.includes("left"),
            r = e.includes("right");
        return n ? t ? -140 : -135 : r ? t ? 130 : 135 : 0
    }

    function Wl(e) {
        return window.getComputedStyle(e).position === "fixed" ? !0 : e.parentElement !== null && e.parentElement !== document.body ? Wl(e.parentElement) : !1
    }

    function um(e, t) {
        const n = e.includes("top"),
            r = am(e),
            i = n ? -70 : 0,
            o = t.elm.parentElement;
        return lm(o, r, i)
    }

    function dm() {
        const {
            body: e
        } = document, t = document.documentElement;
        return {
            width: Math.max.apply(Math, [e.scrollWidth, e.offsetWidth, t.clientWidth, t.scrollWidth, t.offsetWidth]),
            height: Math.max.apply(Math, [e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight])
        }
    }

    function Vl(e) {
        e.setAttribute("tabindex", "0"), e.focus()
    }
    const Gl = (e, t, n) => {
            const r = e.currentTarget.querySelector('[tabindex="0"]');
            if (!r && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
                e.currentTarget.firstElementChild.setAttribute("tabindex", "0"), e.currentTarget.firstElementChild.focus();
                return
            }
            switch (e.key) {
                case "Tab":
                    {
                        if (n) {
                            e.currentTarget.lastElementChild.focus();
                            break
                        }
                        const i = document.documentElement.querySelector("#appcues-widget-icon");t(),
                        i.focus();
                        break
                    }
                case "ArrowDown":
                    {
                        const i = r.nextElementSibling || e.target.parentElement.firstElementChild;Vl(i);
                        break
                    }
                case "ArrowUp":
                    {
                        const i = r.previousElementSibling || e.target.parentElement.lastElementChild;Vl(i);
                        break
                    }
            }
            r ? .setAttribute("tabindex", "-1")
        },
        fm = {
            left: "appcues-widget-left",
            right: "appcues-widget-right",
            center: "appcues-widget-center",
            bottom: "appcues-widget-bottom",
            "bottom-left": "appcues-widget-bottom-left",
            "bottom-right": "appcues-widget-bottom-right",
            "bottom-center": "appcues-widget-bottom-center",
            top: "appcues-widget-top",
            "top-left": "appcues-widget-top-left",
            "top-right": "appcues-widget-top-right",
            "top-center": "appcues-widget-top-center",
            default: "appcues-widget-center"
        },
        pm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function hm(e) {
        const t = new Date(e);
        return `${pm[t.getMonth()]} ${t.getDate()}`
    }
    const mm = e => {
        const {
            flows: t,
            history: n,
            position: r,
            header: i,
            footer: o,
            expanded: s,
            onClose: c,
            onOutsideClick: l,
            onItemClick: a,
            dropdownPositioning: d,
            hasFixedAncestor: f
        } = e, m = t.sort((h, y) => y.version_id - h.version_id).map(h => {
            const y = h.migrated_from_step_id ? !!n[h.id] || !!n[h.migrated_from_step_id] : !!n[h.id];
            return { ...h,
                seen: y
            }
        }), [p, E] = m.reduce((h, y) => (h[y.seen ? 1 : 0].push(y), h), [
            [],
            []
        ]);
        return u.html("div", {
            classNames: `appcues-widget-container ${s?"appcues-active":""}`,
            style: s ? {
                height: dm().height
            } : {}
        }, u.html("div", {
            "on-click": l,
            classNames: "appcues-widget-backdrop"
        }), u.html("div", {
            classNames: `appcues-widget-dropdown ${f?"appcues-widget-fixed":""} ${fm[r]}`,
            style: s ? {
                top: `${d.top}px`,
                left: `${d.left}px`
            } : {}
        }, i ? u.html("div", {
            classNames: "appcues-widget-header"
        }, Mt(i)) : u.html(de, null), u.html("div", {
            classNames: "appcues-widget-content",
            id: "appcues-widget-content",
            "attrs-tabindex": "-1"
        }, u.html("ul", {
            classNames: "appcues-widget-list",
            "attrs-tabindex": "0",
            "on-keydown": h => Gl(h, c, E.length > 0),
            "attrs-aria-activedescendant": "appcues-widget-listitem-0"
        }, !p || p.length === 0 ? u.html("li", {
            classNames: "appcues-nothing-new"
        }, "There's nothing new to see here!") : p.map((h, y) => u.html(jl, {
            index: y,
            item: h,
            onItemClick: a,
            hasBeenSeen: !1
        }))), u.html("ul", {
            classNames: "appcues-widget-list",
            id: "appcues-widget-list-unseen",
            "attrs-tabindex": "0",
            "on-keydown": h => Gl(h, c, !1),
            "attrs-aria-activedescendant": "appcues-widget-listitem-0"
        }, !E || E.length === 0 ? u.html(de, null) : E.map((h, y) => u.html(jl, {
            index: y,
            item: h,
            onItemClick: a,
            hasBeenSeen: !0
        })))), o ? u.html("div", {
            classNames: "appcues-widget-footer"
        }, Mt(o)) : u.html(de, null)))
    };

    function jl({
        index: e,
        item: t,
        onItemClick: n,
        hasBeenSeen: r
    }) {
        const i = (o, {
            id: s
        }, c) => {
            (o.key === " " || o.key === "Enter") && n(o, s, c)
        };
        return u.html("li", {
            classNames: r ? "appcues-read" : "appcues-unread",
            "attrs-tabindex": "-1",
            id: `appcues-widget-listitem-${e}`,
            "on-keyup": o => i(o, t, r)
        }, u.html("a", {
            "attrs-data-itemid": t.id,
            "attrs-data-isread": r,
            "on-click": o => n(o, t.id, r)
        }, t.name, u.html("time", null, hm(t.version_id))))
    }
    const Em = ({
        expanded: e,
        flows: t,
        history: n,
        onClick: r,
        onClose: i,
        icon: o
    }) => {
        const s = l => {
                l.key === "Tab" && (l.currentTarget.style.outline = "", e && i())
            },
            c = t.filter(l => !n[l.id]).length;
        return u.html("button", {
            "attrs-tabindex": "0",
            classNames: `${o?"":"appcues-icon-bell"} appcues-widget-icon appcues-icon appcues-icon-visible appcues-in appcues-slide`,
            "attrs-data-appcues-count": c,
            id: "appcues-widget-icon",
            "on-keyup": s,
            "on-mousedown": l => {
                l.currentTarget.style.outline = "none"
            },
            "on-click": r,
            "attrs-aria-controls": "appcues-widget-list",
            "attrs-aria-expanded": e,
            "attrs-aria-haspopup": "true",
            "attrs-aria-label": `${c} unseen flows`,
            type: "button"
        }, o ? u.html("img", {
            alt: "",
            src: o
        }) : u.html("i", null))
    };

    function gm(e, t) {
        const n = document.createElement("div");
        t.classList.add("appcues-widget"), t.appendChild(n);
        const r = document.createElement("link");
        return r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("href", Ht("/widget.css")), document.head.appendChild(r), e(n, u.html("div", null))
    }

    function ym(e) {
        const t = document.createElement("div");
        return document.body.appendChild(t), e(t, u.html("div", null))
    }

    function Sm() {
        const e = Xn([er, Zn, Qn, tr, Jn]);
        let t = null,
            n = null;
        return function(i) {
            const o = el(i),
                s = rp(i),
                c = ip(i),
                l = op(i) || "default",
                a = sp(i),
                d = cp(i),
                f = Oo(i),
                m = lp(i),
                p = i.views.callbacks[X.WIDGET],
                E = document.documentElement.querySelector(o),
                h = () => {
                    p.onToggled(), document.documentElement.querySelector("#appcues-widget-content > ul").focus()
                };
            E && ((!t || !jo(t.elm)) && (t = gm(e, E)), (!n || !jo(n.elm)) && (n = ym(e)), t = e(t, u.html("div", {
                "class-appcues": !0
            }, u.html("style", null, `
              .appcues-widget-icon {
                border: none;
                background: none;
                overflow: visible;
              }
            `), Em({
                expanded: f,
                flows: c,
                history: s,
                onClose: p.onClose,
                onClick: h,
                icon: m
            }))), n = e(n, u.html("div", {
                "class-appcues": !0
            }, mm({
                flows: c,
                history: s,
                position: l,
                header: a,
                footer: d,
                expanded: f,
                onClose: p.onClose,
                onOutsideClick: p.onToggled,
                onItemClick: p.onItemClicked,
                dropdownPositioning: um(l, t),
                hasFixedAncestor: Wl(t.elm.parentElement)
            }))))
        }
    }
    const W = Pe(["START_INITIALIZE", "START_IDENTIFY", "START_HANDLE_MESSAGE", "MESSAGE_TIMEOUT", "START_EVENT", "START_OPEN_BUILDER_EVENT", "FINISHED_EVENT", "START_ACTIVITY", "START_ANONYMOUS", "INJECT_CONTENT", "INJECT_STYLES", "PREPARE_CONTENT", "CLEANUP_STEP", "START_CONTENT", "START_RESET", "START_DEBUG", "START_FORM_SUBMISSION", "START_SHOW", "STOP_TASKS", "START_CHECK", "START_FLOW", "START_STEP", "CANCEL_ATTEMPTS", "SEND_LIFECYCLE_EVENT", "CLOSE_CHANNEL", "START_IDENTIFY_GROUP", "START_GROUP_ACTIVITY"]),
        H = Pe(["INITIALIZE", "CONFIGURE_TRANSPORT", "IDENTIFY", "SENT_REQUEST", "UPDATE_USER", "RESET", "UPDATE_CONTENT", "UPDATE_SETTINGS", "UPDATE_STYLES", "WILL_SHOW_CONTENT", "SHOW_CONTENT", "WILL_CLOSE_CONTENT", "FETCHING_CONTENT", "REGISTER_RENDERER", "REGISTER_CALLBACKS", "ADD_EVENT_LISTENER", "REMOVE_EVENT_LISTENER", "WAIT_IDENTIFY", "COMPLETED_IDENTIFY", "STORE_TASK", "CLEAR_TASKS", "CLEAR_TASK", "CLEAR_CURRENT_CONTENT", "RUN_ACTION", "RESUME_ACTION", "CHECKED_FOR_INITIAL_CONTENT", "SENT_ACTIVITY_UPDATE", "STARTED_FLOW_IMM", "SET_BODY_READY", "SAVE_OPEN_BUILDER_INSTANCE", "SAVE_EXPERIMENTS", "EXPERIMENT_STARTED", "SAVE_GROUP_PROPS", "PREFETCH_FLOWS", "INITIALIZE_OPEN_BUILDER", "OPEN_BUILDER_INITIALIZED"]),
        pe = Pe(["INVALIDATE_FORM", "LOADED_CSS", "RESIZE_CONTENT", "ACTIVATED_STEP_CHILD", "DEACTIVATED_STEP_CHILD", "SET_CURRENT_STEP_CHILD", "CLEAR_CURRENT_STEP_CHILD", "SET_CURRENT_STEP", "ADVANCE_STEP_CHILD", "CLOSE_FLOW", "CLOSE_STEP", "CANCEL_STEP", "SET_PREVIOUS_ACTIVE_ELEMENT", "SET_NEXT_CONTENT_ID_COOKIE", "RUN_PREV_STEP_CHILD", "CLEAR_CONTENT_STATE_CHILD", "SET_FORCE_FOCUS"]),
        Ti = Pe(["PREPARE_MODAL", "RESIZE_MODAL_CONTENT"]),
        Ae = Pe(["PREPARE_SATISFACTION_SURVEY", "START_COLLAPSING_SATISFACTION_SURVEY", "COLLAPSE_SATISFACTION_SURVEY", "EXPAND_SATISFACTION_SURVEY", "SHOW_SATISFACTION_SURVEY_TOAST", "HIDE_SATISFACTION_SURVEY_TOAST", "QUANTITATIVE_QUESTION_SUBMITTED", "CLICKED_UPDATE_NPS_SCORE", "QUALITATIVE_QUESTION_SUBMITTED", "ASK_ME_LATER_SELECTED", "FEEDBACK_TEXT_CHANGED"]),
        Ee = Pe(["ADD_ACTIVE_ANNOTATIONS", "REMOVE_ACTIVE_ANNOTATIONS", "START_CALCULATE_POSITIONS", "START_HANDLE_POSITION_UPDATES", "SET_ANNOTATIONS_POSITIONS", "SET_ANNOTATIONS_READY", "SAVE_POSITION_DETAILS", "REPORTED_ANNOTATIONS_ERRORS", "REPORTED_ANNOTATIONS_RECOVERY", "SET_EXISTING_ANNOTATIONS_ERRORS", "SET_TOOLTIP_SETTLED", "SET_ACTIVE_ANNOTATIONS_WILL_CLOSE", "HIDE_AND_REMOVE_ACTIVE_ANNOTATIONS", "GO_TO_STEP", "SET_IS_SCROLLING_TO_ANNOTATION", "CONFIRM_SCROLLING"]),
        Qt = Pe(["EXPAND_HOTSPOT", "PREPARE_HOTSPOTS", "SET_BEACON_SETTLED", "CLOSE_LAST_HOTSPOT"]),
        ce = Pe(["UPDATE_CHECKLISTS", "ANIMATE_IN_CHECKLIST", "EXPAND_CHECKLIST", "COLLAPSE_CHECKLIST", "SHOW_DISMISS_CONFIRMATION", "CANCEL_DISMISS_CONFIRMATION", "CONFIRM_DISMISS_CHECKLIST", "LOADED_CHECKLIST_CSS", "START_CHECKLIST", "SET_CHECKLIST_STATUS", "START_CHECKLIST_ITEM", "START_CHECKLIST_ACTION", "COMPLETED_CHECKLIST_ACTION", "SEND_CHECKLIST_ERROR", "SET_CHECKLIST_HEIGHT", "SET_CHECKLIST_WIDTH", "HIDE_CHECKLISTS", "UNHIDE_CHECKLISTS", "CLEAR_FORCE_SHOWN_CHECKLIST", "SET_EXPAND_CHECKLIST_LATER", "SEND_CHECKLIST_SHOWN_EVENT"]),
        ze = Pe(["TOGGLE_ROW_DETAILS", "TOGGLE_COLLAPSED", "SET_CURRENT_PAGE", "TRACK_PAGE", "ADD_CONTENT_ERROR", "ADD_CHILD_ERROR", "CLOSE_DEBUGGER"]),
        ir = Pe(["CANCEL_TEST", "RESET_TEST", "LOADED_TEST_MODE_CSS"]),
        kt = Pe(["LOADED_LAUNCHPAD", "UPDATED_WIDGET_HISTORY", "UPDATED_WIDGET_FLOWS", "TOGGLED_WIDGET"]),
        et = Pe(["PAUSE_EXPERIENCE", "SHOW_EXPERIENCES", "RESUME_EXPERIENCE", "SAVE_ON_HOLD_LAUNCHPADS", "UNHIDE_LAUNCHPADS", "HIDE_LAUNCHPADS"]),
        Tt = Pe(["SET_SESSION", "SESSION_STARTED", "START_SESSION"]),
        Ci = Pe(["SET_COLLISION_MODE"]),
        _i = Pe(["LAUNCHPAD_SEARCH_RESPONSE", "LAUNCHPAD_SEARCH_ERROR"]);

    function b(e, t = n => n) {
        return (...n) => {
            const r = {
                type: e
            };
            if (n.length > 0 && n[0] instanceof Error) {
                const [i] = n;
                r.error = !0, r.payload = i
            } else n.length > 0 && (r.payload = t(...n));
            return r
        }
    }
    const Tm = b(W.START_INITIALIZE, (e, t, n, r) => ({
            settings: e,
            dispatchMessage: t,
            transportModule: n,
            reporter: r
        })),
        or = b(W.START_IDENTIFY, (e, t = {}, n = []) => ({
            userId: e,
            properties: t,
            events: n
        })),
        Cm = b(W.START_HANDLE_MESSAGE),
        _m = b(W.MESSAGE_TIMEOUT),
        He = b(W.START_EVENT, (e, t) => ({
            flowId: e,
            event: t
        })),
        Im = b(W.START_OPEN_BUILDER_EVENT, (e, t) => ({
            type: e,
            event: t
        })),
        vm = b(W.FINISHED_EVENT, (e, t) => ({
            flowId: e,
            event: t
        })),
        Ne = b(W.START_ACTIVITY, (e = {}, t = [], n = !1) => n ? {
            properties: e,
            events: t,
            trigger: !0
        } : {
            properties: e,
            events: t,
            trigger: !1
        }),
        Am = b(W.START_GROUP_ACTIVITY, (e, t = {}) => ({
            groupId: e,
            groupProperties: t
        })),
        bm = b(W.START_ANONYMOUS);
    b(W.INJECT_CONTENT, e => ({
        content: e
    })), b(W.INJECT_STYLES, (e, t) => ({
        defaultStyles: e,
        styles: t
    }));
    const wm = b(W.PREPARE_CONTENT),
        Nm = b(W.CLEANUP_STEP),
        Om = b(W.START_CONTENT),
        km = b(W.START_RESET),
        Rm = b(W.START_DEBUG),
        Lm = b(W.START_FORM_SUBMISSION, (e, t, n, r) => ({
            formId: e,
            fields: t,
            onSuccess: n,
            ignoreValidation: r
        })),
        _r = b(W.START_SHOW),
        Pm = b(W.STOP_TASKS),
        ql = b(W.START_CHECK, (e, t, n) => ({
            currentUrl: e,
            shouldOverrideCurrentFlow: t,
            requestId: n
        })),
        Zo = b(W.START_FLOW, (e, t, n, r, i = null) => ({
            flowId: e,
            stepId: t,
            url: n,
            eventChannel: r,
            status: i
        })),
        Kl = b(W.START_STEP, (e, t, n = null) => ({
            step: e,
            url: t,
            status: n
        })),
        Ir = b(W.CANCEL_ATTEMPTS),
        fe = b(W.SEND_LIFECYCLE_EVENT, (e, t = null) => ({
            event: e,
            eventChannel: t
        })),
        xm = b(W.CLOSE_CHANNEL),
        Dm = b(W.START_IDENTIFY_GROUP, (e, t) => ({
            groupId: e,
            groupProperties: t
        })),
        Um = b(H.INITIALIZE, e => ({
            transport: e
        })),
        Fm = b(H.IDENTIFY),
        Yl = b(H.SENT_REQUEST, (e, t) => ({
            requestId: e,
            pageViewEvent: t
        })),
        zl = b(H.CONFIGURE_TRANSPORT),
        vr = b(H.UPDATE_USER, (e, t) => ({
            profile: e,
            merge: t
        })),
        Hm = b(H.RESET),
        es = b(H.UPDATE_CONTENT, (e, t) => ({
            orderedContent: e,
            content: t
        })),
        Xl = b(H.UPDATE_STYLES),
        sr = b(H.WILL_SHOW_CONTENT),
        Mm = b(H.SHOW_CONTENT),
        $m = b(H.WILL_CLOSE_CONTENT),
        Bm = b(H.FETCHING_CONTENT, (e, t) => ({
            contentId: e,
            url: t
        })),
        Wm = b(H.REGISTER_RENDERER),
        Jl = b(H.REGISTER_CALLBACKS),
        Ql = b(H.ADD_EVENT_LISTENER, (e, t, n) => ({
            name: e,
            callback: t,
            context: n
        })),
        Zl = b(H.REMOVE_EVENT_LISTENER, (e, t, n) => ({
            name: e,
            callback: t,
            context: n
        })),
        Vm = b(H.WAIT_IDENTIFY),
        Gm = b(H.COMPLETED_IDENTIFY),
        jm = b(H.STORE_TASK, (e, t) => ({
            key: e,
            task: t
        })),
        qm = b(H.CLEAR_TASKS),
        Km = b(H.CLEAR_TASK, (e, t) => ({
            key: e,
            id: t
        })),
        ea = b(H.CLEAR_CURRENT_CONTENT),
        Ym = b(H.RUN_ACTION),
        ta = b(H.RESUME_ACTION, (e, t) => ({
            action: e,
            status: t
        })),
        na = b(H.CHECKED_FOR_INITIAL_CONTENT, (e, t) => ({
            url: e,
            complete: t
        })),
        zm = b(H.SENT_ACTIVITY_UPDATE),
        Xm = b(H.STARTED_FLOW_IMM),
        ra = b(H.SET_BODY_READY),
        Jm = b(H.SAVE_OPEN_BUILDER_INSTANCE),
        Qm = b(H.INITIALIZE_OPEN_BUILDER),
        Zm = b(H.OPEN_BUILDER_INITIALIZED),
        eE = b(H.SAVE_EXPERIMENTS),
        Ii = b(H.EXPERIMENT_STARTED, (e, t) => ({
            id: e,
            type: t
        })),
        tE = b(H.SAVE_GROUP_PROPS);
    b(H.UPDATE_SETTINGS);

    function tt(e) {
        return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
    }
    var nE = typeof Symbol == "function" && Symbol.observable || "@@observable",
        ia = nE,
        oa = () => Math.random().toString(36).substring(7).split("").join("."),
        rE = {
            INIT: `@@redux/INIT${oa()}`,
            REPLACE: `@@redux/REPLACE${oa()}`
        },
        sa = rE;

    function iE(e) {
        if (typeof e != "object" || e === null) return !1;
        let t = e;
        for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
    }

    function ca(e, t, n) {
        if (typeof e != "function") throw new Error(tt(2));
        if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(tt(0));
        if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
            if (typeof n != "function") throw new Error(tt(1));
            return n(ca)(e, t)
        }
        let r = e,
            i = t,
            o = new Map,
            s = o,
            c = 0,
            l = !1;

        function a() {
            s === o && (s = new Map, o.forEach((y, I) => {
                s.set(I, y)
            }))
        }

        function d() {
            if (l) throw new Error(tt(3));
            return i
        }

        function f(y) {
            if (typeof y != "function") throw new Error(tt(4));
            if (l) throw new Error(tt(5));
            let I = !0;
            a();
            const S = c++;
            return s.set(S, y),
                function() {
                    if (I) {
                        if (l) throw new Error(tt(6));
                        I = !1, a(), s.delete(S), o = null
                    }
                }
        }

        function m(y) {
            if (!iE(y)) throw new Error(tt(7));
            if (typeof y.type > "u") throw new Error(tt(8));
            if (typeof y.type != "string") throw new Error(tt(17));
            if (l) throw new Error(tt(9));
            try {
                l = !0, i = r(i, y)
            } finally {
                l = !1
            }
            return (o = s).forEach(S => {
                S()
            }), y
        }

        function p(y) {
            if (typeof y != "function") throw new Error(tt(10));
            r = y, m({
                type: sa.REPLACE
            })
        }

        function E() {
            const y = f;
            return {
                subscribe(I) {
                    if (typeof I != "object" || I === null) throw new Error(tt(11));

                    function S() {
                        const v = I;
                        v.next && v.next(d())
                    }
                    return S(), {
                        unsubscribe: y(S)
                    }
                },
                [ia]() {
                    return this
                }
            }
        }
        return m({
            type: sa.INIT
        }), {
            dispatch: m,
            subscribe: f,
            getState: d,
            replaceReducer: p,
            [ia]: E
        }
    }

    function oE(e, t, n) {
        return ca(e, t, n)
    }

    function sE(...e) {
        return e.length === 0 ? t => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)))
    }

    function cE(...e) {
        return t => (n, r) => {
            const i = t(n, r);
            let o = () => {
                throw new Error(tt(15))
            };
            const s = {
                    getState: i.getState,
                    dispatch: (l, ...a) => o(l, ...a)
                },
                c = e.map(l => l(s));
            return o = sE(...c)(i.dispatch), { ...i,
                dispatch: o
            }
        }
    }
    var la = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        lE = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

    function aE(e, t) {
        for (var n in t) {
            var r = t[n];
            r.configurable = r.enumerable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, n, r)
        }
        return e
    }
    var uE = "proc first argument (Saga function result) must be an iterator",
        vi = {
            toString: function() {
                return "@@redux-saga/CHANNEL_END"
            }
        },
        yn = {
            toString: function() {
                return "@@redux-saga/TASK_CANCEL"
            }
        },
        Ar = {
            wildcard: function() {
                return dc
            },
            default: function(t) {
                return (typeof t > "u" ? "undefined" : lE(t)) === "symbol" ? function(n) {
                    return n.type === t
                } : function(n) {
                    return n.type === String(t)
                }
            },
            array: function(t) {
                return function(n) {
                    return t.some(function(r) {
                        return ts(r)(n)
                    })
                }
            },
            predicate: function(t) {
                return function(n) {
                    return t(n)
                }
            }
        };

    function ts(e) {
        return (e === "*" ? Ar.wildcard : B.array(e) ? Ar.array : B.stringableFunc(e) ? Ar.default : B.func(e) ? Ar.predicate : Ar.default)(e)
    }

    function dE(e, t, n) {
        var r = [],
            i = void 0,
            o = !1;
        c(t);

        function s(a) {
            l(), n(a, !0)
        }

        function c(a) {
            r.push(a), a.cont = function(d, f) {
                o || (zr(r, a), a.cont = De, f ? s(d) : (a === t && (i = d), r.length || (o = !0, n(i))))
            }
        }

        function l() {
            o || (o = !0, r.forEach(function(a) {
                a.cont = De, a.cancel()
            }), r = [])
        }
        return {
            addTask: c,
            cancelAll: l,
            abort: s,
            getTasks: function() {
                return r
            },
            taskNames: function() {
                return r.map(function(d) {
                    return d.name
                })
            }
        }
    }

    function fE(e) {
        var t = e.context,
            n = e.fn,
            r = e.args;
        if (B.iterator(n)) return n;
        var i = void 0,
            o = void 0;
        try {
            i = n.apply(t, r)
        } catch (s) {
            o = s
        }
        return B.iterator(i) ? i : ho(o ? function() {
            throw o
        } : (function() {
            var s = void 0,
                c = {
                    done: !1,
                    value: i
                },
                l = function(d) {
                    return {
                        done: !0,
                        value: d
                    }
                };
            return function(a) {
                return s ? l(a) : (s = !0, c)
            }
        })())
    }
    var pE = function(t) {
        return {
            fn: t
        }
    };

    function ns(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
                return De
            },
            n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : De,
            r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : De,
            i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {},
            o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0,
            c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "anonymous",
            l = arguments[8];
        ge(e, B.iterator, uE);
        var a = mo(Se),
            d = o.sagaMonitor,
            f = o.logger,
            m = o.onError,
            p = f || hc,
            E = function(x) {
                var P = x.sagaStack;
                !P && x.stack && (P = x.stack.split(`
`)[0].indexOf(x.message) !== -1 ? x.stack : "Error: " + x.message + `
` + x.stack), p("error", "uncaught at " + c, P || x.message || x)
            },
            h = kf(t),
            y = Object.create(i);
        N.cancel = De;
        var I = ae(s, c, e, l),
            S = {
                name: c,
                cancel: v,
                isRunning: !0
            },
            T = dE(c, S, L);

        function v() {
            S.isRunning && !S.isCancelled && (S.isCancelled = !0, N(yn))
        }

        function _() {
            e._isRunning && !e._isCancelled && (e._isCancelled = !0, T.cancelAll(), L(yn))
        }
        return l && (l.cancel = _), e._isRunning = !0, N(), I;

        function N(k, x) {
            if (!S.isRunning) throw new Error("Trying to resume an already finished generator");
            try {
                var P = void 0;
                x ? P = e.throw(k) : k === yn ? (S.isCancelled = !0, N.cancel(), P = B.func(e.return) ? e.return(yn) : {
                    done: !0,
                    value: yn
                }) : k === vi ? P = B.func(e.return) ? e.return() : {
                    done: !0
                } : P = e.next(k), P.done ? (S.isMainRunning = !1, S.cont && S.cont(P.value)) : R(P.value, s, "", N)
            } catch (J) {
                S.isCancelled && E(J), S.isMainRunning = !1, S.cont(J, !0)
            }
        }

        function L(k, x) {
            e._isRunning = !1, h.close(), x ? (k instanceof Error && Object.defineProperty(k, "sagaStack", {
                value: "at " + c + ` 
 ` + (k.sagaStack || k.stack),
                configurable: !0
            }), I.cont || (k instanceof Error && m ? m(k) : E(k)), e._error = k, e._isAborted = !0, e._deferredEnd && e._deferredEnd.reject(k)) : (e._result = k, e._deferredEnd && e._deferredEnd.resolve(k)), I.cont && I.cont(k, x), I.joiners.forEach(function(P) {
                return P.cb(k, x)
            }), I.joiners = null
        }

        function R(k, x) {
            var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "",
                J = arguments[3],
                ne = pc();
            d && d.effectTriggered({
                effectId: ne,
                parentEffectId: x,
                label: P,
                effect: k
            });
            var te = void 0;

            function K(Le, Ue) {
                te || (te = !0, J.cancel = De, d && (Ue ? d.effectRejected(ne, Le) : d.effectResolved(ne, Le)), J(Le, Ue))
            }
            K.cancel = De, J.cancel = function() {
                if (!te) {
                    te = !0;
                    try {
                        K.cancel()
                    } catch (Le) {
                        E(Le)
                    }
                    K.cancel = De, d && d.effectCancelled(ne)
                }
            };
            var G = void 0;
            return B.promise(k) ? O(k, K) : B.helper(k) ? se(pE(k), ne, K) : B.iterator(k) ? M(k, ne, c, K) : B.array(k) ? a(k, ne, K) : (G = Ve.take(k)) ? $(G, K) : (G = Ve.put(k)) ? ee(G, K) : (G = Ve.all(k)) ? Se(G, ne, K) : (G = Ve.race(k)) ? Be(G, ne, K) : (G = Ve.call(k)) ? w(G, ne, K) : (G = Ve.cps(k)) ? q(G, K) : (G = Ve.fork(k)) ? se(G, ne, K) : (G = Ve.join(k)) ? Z(G, K) : (G = Ve.cancel(k)) ? ie(G, K) : (G = Ve.select(k)) ? ke(G, K) : (G = Ve.actionChannel(k)) ? V(G, K) : (G = Ve.flush(k)) ? le(G, K) : (G = Ve.cancelled(k)) ? z(G, K) : (G = Ve.getContext(k)) ? ve(G, K) : (G = Ve.setContext(k)) ? he(G, K) : K(k)
        }

        function O(k, x) {
            var P = k[lc];
            B.func(P) ? x.cancel = P : B.func(k.abort) && (x.cancel = function() {
                return k.abort()
            }), k.then(x, function(J) {
                return x(J, !0)
            })
        }

        function M(k, x, P, J) {
            ns(k, t, n, r, y, o, x, P, J)
        }

        function $(k, x) {
            var P = k.channel,
                J = k.pattern,
                ne = k.maybe;
            P = P || h;
            var te = function(G) {
                return G instanceof Error ? x(G, !0) : ni(G) && !ne ? x(vi) : x(G)
            };
            try {
                P.take(te, ts(J))
            } catch (K) {
                return x(K, !0)
            }
            x.cancel = te.cancel
        }

        function ee(k, x) {
            var P = k.channel,
                J = k.action,
                ne = k.resolve;
            Dc(function() {
                var te = void 0;
                try {
                    te = (P ? P.put : n)(J)
                } catch (K) {
                    if (P || ne) return x(K, !0);
                    E(K)
                }
                if (ne && B.promise(te)) O(te, x);
                else return x(te)
            })
        }

        function w(k, x, P) {
            var J = k.context,
                ne = k.fn,
                te = k.args,
                K = void 0;
            try {
                K = ne.apply(J, te)
            } catch (G) {
                return P(G, !0)
            }
            return B.promise(K) ? O(K, P) : B.iterator(K) ? M(K, x, ne.name, P) : P(K)
        }

        function q(k, x) {
            var P = k.context,
                J = k.fn,
                ne = k.args;
            try {
                var te = function(G, Le) {
                    return B.undef(G) ? x(Le) : x(G, !0)
                };
                J.apply(P, ne.concat(te)), te.cancel && (x.cancel = function() {
                    return te.cancel()
                })
            } catch (K) {
                return x(K, !0)
            }
        }

        function se(k, x, P) {
            var J = k.context,
                ne = k.fn,
                te = k.args,
                K = k.detached,
                G = fE({
                    context: J,
                    fn: ne,
                    args: te
                });
            try {
                So();
                var Le = ns(G, t, n, r, y, o, x, ne.name, K ? null : De);
                K ? P(Le) : G._isRunning ? (T.addTask(Le), P(Le)) : G._error ? T.abort(G._error) : P(Le)
            } finally {
                Fc()
            }
        }

        function Z(k, x) {
            if (k.isRunning()) {
                var P = {
                    task: I,
                    cb: x
                };
                x.cancel = function() {
                    return zr(k.joiners, P)
                }, k.joiners.push(P)
            } else k.isAborted() ? x(k.error(), !0) : x(k.result())
        }

        function ie(k, x) {
            k === uc && (k = I), k.isRunning() && k.cancel(), x()
        }

        function Se(k, x, P) {
            var J = Object.keys(k);
            if (!J.length) return P(B.array(k) ? [] : {});
            var ne = 0,
                te = void 0,
                K = {},
                G = {};

            function Le() {
                ne === J.length && (te = !0, P(B.array(k) ? af.from(la({}, K, {
                    length: J.length
                })) : K))
            }
            J.forEach(function(Ue) {
                var ar = function(xt, qi) {
                    te || (qi || ni(xt) || xt === vi || xt === yn ? (P.cancel(), P(xt, qi)) : (K[Ue] = xt, ne++, Le()))
                };
                ar.cancel = De, G[Ue] = ar
            }), P.cancel = function() {
                te || (te = !0, J.forEach(function(Ue) {
                    return G[Ue].cancel()
                }))
            }, J.forEach(function(Ue) {
                return R(k[Ue], x, Ue, G[Ue])
            })
        }

        function Be(k, x, P) {
            var J = void 0,
                ne = Object.keys(k),
                te = {};
            ne.forEach(function(K) {
                var G = function(Ue, ar) {
                    if (!J) {
                        if (ar) P.cancel(), P(Ue, !0);
                        else if (!ni(Ue) && Ue !== vi && Ue !== yn) {
                            var Ln;
                            P.cancel(), J = !0;
                            var xt = (Ln = {}, Ln[K] = Ue, Ln);
                            P(B.array(k) ? [].slice.call(la({}, xt, {
                                length: ne.length
                            })) : xt)
                        }
                    }
                };
                G.cancel = De, te[K] = G
            }), P.cancel = function() {
                J || (J = !0, ne.forEach(function(K) {
                    return te[K].cancel()
                }))
            }, ne.forEach(function(K) {
                J || R(k[K], x, K, te[K])
            })
        }

        function ke(k, x) {
            var P = k.selector,
                J = k.args;
            try {
                var ne = P.apply(void 0, [r()].concat(J));
                x(ne)
            } catch (te) {
                x(te, !0)
            }
        }

        function V(k, x) {
            var P = k.pattern,
                J = k.buffer,
                ne = ts(P);
            ne.pattern = P, x(ln(t, J || Dt.fixed(), ne))
        }

        function z(k, x) {
            x(!!S.isCancelled)
        }

        function le(k, x) {
            k.flush(x)
        }

        function ve(k, x) {
            x(y[k])
        }

        function he(k, x) {
            po.assign(y, k), x()
        }

        function ae(k, x, P, J) {
            var ne, te, K;
            return P._deferredEnd = null, te = {}, te[sc] = !0, te.id = k, te.name = x, ne = "done", K = {}, K[ne] = K[ne] || {}, K[ne].get = function() {
                if (P._deferredEnd) return P._deferredEnd.promise;
                var G = uf();
                return P._deferredEnd = G, P._isRunning || (P._error ? G.reject(P._error) : G.resolve(P._result)), G.promise
            }, te.cont = J, te.joiners = [], te.cancel = _, te.isRunning = function() {
                return P._isRunning
            }, te.isCancelled = function() {
                return P._isCancelled
            }, te.isAborted = function() {
                return P._isAborted
            }, te.result = function() {
                return P._result
            }, te.error = function() {
                return P._error
            }, te.setContext = function(Le) {
                ge(Le, B.object, Ec("task", Le)), po.assign(y, Le)
            }, aE(te, K), te
        }
    }
    var hE = "runSaga(storeInterface, saga, ...args)",
        aa = hE + ": saga argument must be a Generator function!";

    function mE(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o = void 0;
        B.iterator(e) ? (o = e, e = t) : (ge(t, B.func, aa), o = t.apply(void 0, r), ge(o, B.iterator, aa));
        var s = e,
            c = s.subscribe,
            l = s.dispatch,
            a = s.getState,
            d = s.context,
            f = s.sagaMonitor,
            m = s.logger,
            p = s.onError,
            E = pc();
        f && (f.effectTriggered = f.effectTriggered || De, f.effectResolved = f.effectResolved || De, f.effectRejected = f.effectRejected || De, f.effectCancelled = f.effectCancelled || De, f.actionDispatched = f.actionDispatched || De, f.effectTriggered({
            effectId: E,
            root: !0,
            parentEffectId: 0,
            effect: {
                root: !0,
                saga: t,
                args: r
            }
        }));
        var h = ns(o, c, hf(l), a, d, {
            sagaMonitor: f,
            logger: m,
            onError: p
        }, E, t.name);
        return f && f.effectResolved(E, h), h
    }

    function EE(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function gE() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = e.context,
            n = t === void 0 ? {} : t,
            r = EE(e, ["context"]),
            i = r.sagaMonitor,
            o = r.logger,
            s = r.onError;
        if (B.func(r)) throw new Error("Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead");
        if (o && !B.func(o)) throw new Error("`options.logger` passed to the Saga middleware is not a function!");
        if (s && !B.func(s)) throw new Error("`options.onError` passed to the Saga middleware is not a function!");
        if (r.emitter && !B.func(r.emitter)) throw new Error("`options.emitter` passed to the Saga middleware is not a function!");

        function c(l) {
            var a = l.getState,
                d = l.dispatch,
                f = wf();
            return f.emit = (r.emitter || fc)(f.emit), c.run = mE.bind(null, {
                    context: n,
                    subscribe: f.subscribe,
                    dispatch: d,
                    getState: a,
                    sagaMonitor: i,
                    logger: o,
                    onError: s
                }),
                function(m) {
                    return function(p) {
                        i && i.actionDispatched && i.actionDispatched(p);
                        var E = m(p);
                        return f.emit(p), E
                    }
                }
        }
        return c.run = function() {
            throw new Error("Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware")
        }, c.setContext = function(l) {
            ge(l, B.object, Ec("sagaMiddleware", l)), po.assign(n, l)
        }, c
    }

    function U(e) {
        return (t, {
            error: n,
            payload: r
        }) => n ? t : e(t, r)
    }
    const yE = {
        [Tt.SET_SESSION]: U((e, t) => ({ ...e,
            session: { ...e.session,
                ...t
            }
        })),
        [Tt.START_SESSION]: U(e => ({ ...e,
            session: {}
        }))
    };

    function SE({
        getState: e
    }) {
        return t => n => {
            try {
                n.error && bt(e())(n.payload, {
                    extra: n.payload.extra || {}
                })
            } catch {} finally {
                t(n)
            }
        }
    }
    const TE = e => (t, n) => Object.prototype.hasOwnProperty.call(e, n.type) ? e[n.type](t, n) : t;

    function nt(e, t) {
        return { ...e,
            currentContent: { ...e.currentContent,
                ...t
            }
        }
    }

    function Ct(e, t) {
        return nt(e, {
            state: { ...e.currentContent.state,
                ...t
            }
        })
    }

    function $t(e, t, n) {
        const r = Nt(e);
        return Ct(e, {
            children: { ...r,
                [t]: { ...r[t],
                    ...n
                }
            }
        })
    }

    function CE(e, t) {
        const n = Nt(e);
        return Ct(e, {
            children: { ...n,
                [t]: {}
            }
        })
    }
    const _E = {
        [W.START_INITIALIZE]: U((e, t) => ({ ...e,
            settings: { ...e.settings,
                ...t.settings
            },
            reporter: t.reporter
        })),
        [W.PREPARE_CONTENT]: U(e => e.currentContent && e.currentContent.status === Q.PENDING ? nt(e, {
            status: Q.STARTED
        }) : e),
        [W.START_FLOW]: U((e, {
            flowId: t,
            url: n,
            eventChannel: r
        }) => nt(e, {
            flowId: t,
            shownUrl: n,
            eventChannel: r
        })),
        [W.START_STEP]: U((e, {
            step: t,
            url: n
        }) => nt(e, {
            stepId: t.id,
            shownUrl: n
        })),
        [W.START_EVENT]: U((e, {
            flowId: t,
            event: n
        }) => {
            if (t) {
                const r = e.pendingEvents || {};
                return { ...e,
                    pendingEvents: { ...r,
                        [t]: [...r[t] || [], n]
                    }
                }
            }
            return e
        }),
        [W.FINISHED_EVENT]: U((e, {
            flowId: t,
            event: n
        }) => {
            if (t && e.pendingEvents && e.pendingEvents[t]) {
                const r = e.pendingEvents[t],
                    i = r.indexOf(n);
                if (i !== -1) return { ...e,
                    pendingEvents: { ...e.pendingEvents,
                        [t]: [...r.slice(0, i), ...r.slice(i + 1, r.length)]
                    }
                }
            }
            return e
        }),
        [W.START_FORM_SUBMISSION]: U((e, {
            formId: t,
            fields: n
        }) => {
            const {
                state: r
            } = e.currentContent, {
                currentStepChildId: i,
                forms: o = {}
            } = r;
            return Ct(e, {
                forms: { ...o,
                    [i]: {
                        formId: t,
                        fields: n
                    }
                }
            })
        }),
        [Ci.SET_COLLISION_MODE]: U((e, t) => ({ ...e,
            collisionMode: t.collisionMode,
            collisionCoordinates: t ? .collisionCoordinates ? ? {
                x: 0,
                y: 0
            }
        })),
        [et.SAVE_ON_HOLD_LAUNCHPADS]: U((e, t) => ({ ...e,
            onHold: {
                launchpads: t
            }
        }))
    };

    function* IE(e) {
        try {
            yield cn(e)
        } catch (t) {
            const n = yield A(bt);
            try {
                n(t)
            } catch {}
        }
    }

    function* vE(e, ...t) {
        const n = yield At(e, ...t);
        return yield At(IE, n), n
    }

    function pt(e, ...t) {
        return g(vE, e, ...t)
    }

    function* AE(e, t) {
        try {
            yield cn(t)
        } finally {
            yield C(Km(e, t.id))
        }
    }

    function ua(e, t) {
        return `${e}-step:${t}`
    }

    function* da(e, t, n, ...r) {
        for (;;) {
            const i = yield j(e), o = yield pt(t, ...r, i);
            if (n) {
                const s = typeof n == "function" ? yield g(n): n;
                yield C(jm(s, o)), yield At(AE, s, o)
            }
        }
    }

    function* re(e, t, ...n) {
        yield* da(e, t, !1, ...n)
    }

    function* bE(e, t, n, ...r) {
        let i;
        for (;;) {
            const o = yield j(e);
            i && (yield st(i)), i = yield pt(t, ...r, o)
        }
    }

    function* rt(e, t, ...n) {
        yield* bE(e, t, !1, ...n)
    }

    function* wE(e) {
        yield We(e)
    }

    function Rt(e, t, n) {
        let r = n;
        return oe.defined(r) || (r = Date.now()), {
            name: e,
            attributes: t,
            timestamp: r
        }
    }

    function qe(e) {
        const t = { ...e
            },
            {
                id: n,
                timestamp: r
            } = t;
        return delete t.timestamp, delete t.id, delete t.actionId, delete t.name, Rt(`appcues:${n}`, t, r)
    }
    const ht = (e, t, n) => {
            const r = e.context && Object.keys(e.context) && e.context.locale_name,
                i = e.context && Object.keys(e.context) && e.context.locale_id,
                {
                    workflow_id: o,
                    workflow_task_id: s
                } = e;
            return {
                flowId: e.id,
                flowName: e.name,
                flowType: e.type,
                flowVersion: e.version_id,
                ...o ? {
                    workflowId: o
                } : {},
                ...s ? {
                    workflowTaskId: s
                } : {},
                timestamp: Date.now(),
                sessionId: t,
                localeName: r,
                localeId: i,
                ...n
            }
        },
        NE = e => ({
            timestamp: Date.now(),
            sessionId: e.id
        });

    function br(e, t, n) {
        return {
            checklistId: e.id,
            checklistName: e.internal_name,
            timestamp: Date.now(),
            sessionId: t,
            ...n
        }
    }

    function fa(e, t, n, r) {
        return {
            checklistId: e.id,
            checklistName: e.internal_name,
            checklistVersion: e.version_id,
            itemId: t.id,
            itemIndex: t.index,
            itemLabel: t.label,
            timestamp: Date.now(),
            sessionId: n,
            ...r
        }
    }

    function Sn(e, t, n, r) {
        const i = ht(e, n);
        return Object.assign(i, {
            stepId: t.id,
            stepType: t.type,
            stepNumber: jn(e, t.id)
        }, r)
    }

    function wr(e, t, n, r, i) {
        const o = un(t, n);
        return Sn(e, t, r, {
            stepChildId: n,
            stepChildNumber: o,
            ...i
        })
    }

    function rs(e, t, n, r, i, o) {
        return wr(e, t, n, o, {
            interactionType: r,
            interaction: i
        })
    }

    function OE(e) {
        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }

    function kE(e, t = "_") {
        return e.split(t).map(n => n.toLowerCase().charAt(0).toUpperCase() + n.slice(1)).join(" ")
    }

    function Ce(e, t, n) {
        const r = n || kE(e);
        return {
            id: e,
            name: r,
            ...t
        }
    }

    function RE(e, t) {
        return Ce("flow_attempted", ht(e, t))
    }

    function pa(e, t) {
        return Ce("flow_started", ht(e, t))
    }

    function LE(e, t) {
        return Ce("nps_survey_started", ht(e, t), "NPS Survey Started")
    }

    function PE(e, t) {
        return Ce("flow_completed", ht(e, t))
    }

    function xE(e, t, n) {
        return Ce("flow_skipped", ht(e, n, {
            stepId: t,
            stepNumber: jn(e, t)
        }))
    }

    function DE(e, t) {
        return Ce("flow_aborted", ht(e, t))
    }

    function UE(e, t, n) {
        return Ce("step_attempted", Sn(e, t, n))
    }

    function ha(e, t, n) {
        return Ce("step_started", Sn(e, t, n))
    }

    function FE(e, t, n) {
        return Ce("step_completed", Sn(e, t, n))
    }

    function HE(e, t, n, r) {
        return Ce("step_skipped", Sn(e, t, r, {
            stepChildId: n,
            stepChildNumber: un(t, n)
        }))
    }

    function ME(e, t, n) {
        return Ce("step_aborted", Sn(e, t, n))
    }

    function $E(e, t, n, r) {
        return Ce("step_child_activated", wr(e, t, n, r))
    }

    function BE(e, t, n, r, i) {
        return Ce("step_child_deactivated", wr(e, t, n, i, {
            timeSpent: r
        }))
    }

    function ma(e, t, n, r, i, o) {
        return Ce("step_interacted", rs(e, t, n, r, i, o))
    }

    function WE(e, t, n, r) {
        return Ce("flow_error", ht(e, r, {
            error: t,
            details: n
        }))
    }

    function VE(e, t, n, r, i) {
        return Ce("step_error", Sn(e, t, i, {
            error: n,
            details: r
        }))
    }

    function GE(e, t, n, r, i) {
        return Ce("step_child_error", wr(e, t, n, i, {
            error: r
        }))
    }

    function jE(e, t, n, r) {
        return Ce("step_child_recovered", wr(e, t, n, r))
    }

    function qE(e, t, n, r, i) {
        return Ce("form_submitted", rs(e, t, n, "submit", r, i))
    }

    function KE(e, t, n, r, i) {
        return Ce("form_field_submitted", rs(e, t, n, "submit", r, i))
    }

    function YE(e, t) {
        return Ce("checklist_shown", br(e, t))
    }

    function zE(e, t) {
        return Ce("checklist_completed", br(e, t))
    }

    function XE(e, t) {
        return Ce("checklist_skipped", br(e, t))
    }

    function JE(e, t) {
        return Ce("checklist_dismissed", br(e, t))
    }

    function QE(e, t) {
        return Ce("checklist_shown_manually", br(e, t))
    }

    function ZE(e, t, n) {
        return Ce("checklist_item_started", fa(e, t, n))
    }

    function eg(e, t, n) {
        return Ce("checklist_item_completed", fa(e, t, n))
    }

    function tg(e) {
        return Ce("session_started", NE(e))
    }

    function ng(e) {
        return Ce("experiment_entered", {
            experimentId: e.experiment_id,
            group: e.group
        })
    }
    const it = {
        EXPERIENCES: "experiences",
        FLOWS: "flows"
    };

    function* Ea(e, t) {
        return (yield A(dp))[t] ? .[e]
    }

    function* ga(e, t) {
        return (yield g(Ea, e, t)) ? .group === "control"
    }

    function* rg({
        payload: {
            id: e,
            type: t
        }
    }) {
        const n = yield g(Ea, e, t);
        if (!n) return;
        const r = ng(n);
        yield C(He(n.flow_id, r)), yield C(Ne({}, [qe(r)], !1))
    }

    function* ig() {
        yield [F(re, H.EXPERIMENT_STARTED, rg)]
    }

    function og(e, t) {
        const n = {
            callback: e
        };
        return t && (n.context = t), n
    }

    function sg(e, t, n) {
        let r = e;
        for (let i = 0; i < r.length; r++)
            if (t.call(n, r[i], i, r)) return i;
        return -1
    }

    function ya(e, t) {
        return e.callback === t.callback && e.context === t.context
    }

    function Sa(e, t) {
        let n = {};
        return n = t.type === X.ACTION ? {
            status: Q.RUNNING,
            stepId: t.id
        } : {
            status: Q.ERROR,
            error: "Tried to run a non-action step."
        }, nt(e, n)
    }
    const cg = {
            [H.INITIALIZE]: U((e, t) => ({ ...e,
                transport: { ...e.transport,
                    ...t.transport,
                    initialized: !0
                }
            })),
            [H.IDENTIFY]: U((e, t) => e.user.userId === t ? e : t == null ? { ...e,
                user: {}
            } : oe.defined(e.user.userId) ? { ...e,
                user: {
                    userId: t
                }
            } : { ...e,
                user: { ...e.user,
                    userId: t
                }
            }),
            [H.CONFIGURE_TRANSPORT]: U((e, t) => ({ ...e,
                transport: { ...e.transport,
                    details: { ...e.transport.details,
                        ...t
                    }
                }
            })),
            [H.UPDATE_USER]: U((e, t) => {
                const n = we(e);
                let r;
                return r = t.merge ? { ...n,
                    ...t.profile
                } : t.profile, n.userId && (r = { ...r,
                    userId: n.userId
                }), { ...e,
                    user: r
                }
            }),
            [H.RESET]: U(e => ({ ...e,
                content: {},
                checklists: [],
                orderedContent: [],
                currentContent: null,
                user: {},
                requestId: null,
                debugger: null,
                lastCheckedForInitialContent: {},
                experiments: {
                    [it.FLOWS]: {},
                    [it.EXPERIENCES]: {}
                }
            })),
            [H.UPDATE_CONTENT]: U((e, {
                content: t,
                orderedContent: n
            }) => {
                let r = t;
                return r && (r = Object.keys(r).reduce((i, o) => {
                    let s = r[o];
                    if (Bn(s))
                        for (let c = 0; c < $c(s); c++) {
                            const l = Ut(s, c),
                                a = an(l);
                            if (Wc(l, a.length - 1)) {
                                const d = Ut(s, c + 1);
                                if (pr(d) && !oe.defined(d.attributes.params.initiated_by_user)) {
                                    const f = s.attributes.steps[d.id];
                                    s = { ...s,
                                        ...s.attributes && {
                                            attributes: { ...s.attributes,
                                                steps: { ...s.attributes.steps,
                                                    [d.id]: { ...f,
                                                        step: { ...f.step,
                                                            attributes: { ...f.step.attributes,
                                                                params: { ...f.step.attributes.params,
                                                                    initiated_by_user: !0
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    return { ...i,
                        [o]: s
                    }
                }, {})), { ...e,
                    content: { ...e.content,
                        ...r
                    },
                    orderedContent: n
                }
            }),
            [H.UPDATE_SETTINGS]: U((e, t) => ({ ...e,
                settings: { ...e.settings,
                    ...t
                }
            })),
            [H.UPDATE_STYLES]: U((e, t) => ({ ...e,
                styles: { ...e.styles,
                    ...t
                }
            })),
            [H.WILL_SHOW_CONTENT]: (e, t) => {
                const n = ue(e);
                if (t.error) {
                    let {
                        orderedContent: r
                    } = e;
                    r && (r = r.filter(o => o !== dn(e)));
                    const i = { ...e,
                        currentContent: { ...e.currentContent,
                            status: Q.ERROR,
                            error: t.payload.message
                        },
                        orderedContent: r
                    };
                    return delete i.currentContent.shownUrl, i
                }
                return n && t.payload === n ? nt(e, {
                    status: Q.WILL_SHOW
                }) : e
            },
            [H.SHOW_CONTENT]: U(e => nt(e, {
                status: Q.SHOWING
            })),
            [H.WILL_CLOSE_CONTENT]: U(e => Ge(e) === Q.SHOWING ? nt(e, {
                status: Q.WILL_CLOSE
            }) : e),
            [H.FETCHING_CONTENT]: (e, t) => {
                const {
                    contentId: n,
                    url: r
                } = t.payload || {};
                return n ? nt(e, {
                    status: Q.FETCHING,
                    flowId: n,
                    shownUrl: r
                }) : e
            },
            [H.REGISTER_RENDERER]: U((e, t) => ({ ...e,
                views: { ...e.views,
                    renderers: { ...e.views.renderers,
                        ...t
                    }
                }
            })),
            [H.REGISTER_CALLBACKS]: U((e, t) => ({ ...e,
                views: { ...e.views,
                    callbacks: { ...e.views.callbacks,
                        ...t
                    }
                }
            })),
            [H.ADD_EVENT_LISTENER]: U((e, t) => {
                const n = { ...e.eventListeners
                    },
                    {
                        name: r
                    } = t,
                    i = og(t.callback, t.context),
                    o = n[r];
                if (o) {
                    if (o.some(s => ya(s, i))) return e;
                    n[r] = [...o, i]
                } else n[r] = [i];
                return { ...e,
                    eventListeners: n
                }
            }),
            [H.REMOVE_EVENT_LISTENER]: U((e, t) => {
                const {
                    name: n
                } = t, r = (e.eventListeners || {})[n] || [];
                if (t.callback) {
                    const i = sg(r, o => ya(o, {
                        callback: t.callback,
                        context: t.context
                    }));
                    return i > -1 ? { ...e,
                        eventListeners: { ...e.eventListeners,
                            [n]: [...r.slice(0, i), ...r.slice(i + 1)]
                        }
                    } : e
                }
                return { ...e,
                    eventListeners: { ...e.eventListeners,
                        [n]: []
                    }
                }
            }),
            [H.COMPLETED_IDENTIFY]: U(e => ({ ...e,
                userIdentified: !0
            })),
            [H.STORE_TASK]: U((e, t) => ({ ...e,
                tasks: { ...e.tasks,
                    [t.key]: [...ii(e, t.key) || [], t.task]
                }
            })),
            [H.CLEAR_TASKS]: U((e, t) => ii(e, t) ? { ...e,
                tasks: { ...e.tasks,
                    [t]: null
                }
            } : e),
            [H.CLEAR_TASK]: U((e, t) => {
                const {
                    key: n,
                    id: r
                } = t, i = ii(e, n);
                return i ? { ...e,
                    tasks: { ...e.tasks,
                        [n]: i.filter(o => o.id !== r)
                    }
                } : e
            }),
            [H.CLEAR_CURRENT_CONTENT]: U(e => ({ ...e,
                currentContent: null
            })),
            [H.RUN_ACTION]: U((e, t) => Sa(e, t)),
            [H.RESUME_ACTION]: U((e, t) => Sa(e, t.action)),
            [H.CHECKED_FOR_INITIAL_CONTENT]: U((e, t) => ({ ...e,
                lastCheckedForInitialContent: t
            })),
            [H.SAVE_OPEN_BUILDER_INSTANCE]: U((e, t) => ({ ...e,
                Appcues: t,
                initializingOpenBuilder: !1
            })),
            [H.INITIALIZE_OPEN_BUILDER]: U(e => ({ ...e,
                initializingOpenBuilder: !0
            })),
            [H.SAVE_EXPERIMENTS]: U((e, t) => {
                const n = t.reduce((r, i) => (i.flow_id && (r[it.FLOWS][i.flow_id] = i), i.experience_id && (r[it.EXPERIENCES][i.experience_id] = i), r), {
                    [it.FLOWS]: { ...e.experiments ? .[it.FLOWS]
                    },
                    [it.EXPERIENCES]: { ...e.experiments ? .[it.EXPERIENCES]
                    }
                });
                return { ...e,
                    experiments: n
                }
            }),
            [H.SAVE_GROUP_PROPS]: U((e, t) => ({ ...e,
                ...t
            }))
        },
        lg = {
            [pe.INVALIDATE_FORM]: U((e, t) => {
                if (Array.isArray(t)) {
                    const n = t.reduce((r, i) => (r[i.fieldId] = i.messages, r), {});
                    return Ct(e, {
                        formErrors: n
                    })
                }
                return e
            }),
            [pe.LOADED_CSS]: U((e, t) => {
                switch (qn(e)) {
                    case X.MODAL:
                    case X.SATISFACTION_SURVEY:
                        {
                            const n = ue(e);
                            if (t === n) return Ct(e, {
                                cssLoaded: !0
                            });
                            break
                        }
                    case X.HOTSPOTS:
                        {
                            if (Nt(e)[t]) return $t(e, t, {
                                cssLoaded: !0
                            });
                            break
                        }
                }
                return e
            }),
            [pe.RESIZE_CONTENT]: U((e, t) => {
                if (e.currentContent) {
                    const {
                        currentContent: n
                    } = e, r = n.state, i = Math.ceil(t.height) + 2, o = Math.ceil(t.width) + 2;
                    let s = {};
                    if (r && r.children && (s = r.children[t.id] || {}), s.height !== i || s.width !== o) return $t(e, t.id, {
                        height: i,
                        width: o,
                        lastResizeTs: t.ts
                    })
                }
                return e
            }),
            [pe.ACTIVATED_STEP_CHILD]: U((e, t) => e.currentContent && at(e) === t.stepChildId ? $t(e, t.stepChildId, {
                activatedAt: t.timestamp
            }) : e),
            [pe.DEACTIVATED_STEP_CHILD]: U((e, t) => wo(e, t) ? $t(e, t, {
                activatedAt: null
            }) : e),
            [pe.SET_CURRENT_STEP_CHILD]: U((e, t) => ue(e) ? Ct(e, {
                currentStepChildId: t,
                formErrors: null
            }) : e),
            [pe.CLEAR_CURRENT_STEP_CHILD]: U(e => ue(e) ? Ct(e, {
                currentStepChildId: null
            }) : e),
            [pe.SET_CURRENT_STEP]: U((e, t) => nt(e, {
                stepId: t,
                status: Q.PENDING
            })),
            [pe.CLOSE_STEP]: U((e, t) => dn(e) === t.flowId && ue(e) === t.stepId ? nt(e, {
                stepId: null,
                status: null,
                state: {}
            }) : e),
            [pe.CLOSE_FLOW]: U((e, t) => t.flowId === dn(e) ? t.type === vt.CLEAR ? { ...e,
                currentContent: null
            } : { ...e,
                orderedContent: e.orderedContent.slice(1),
                currentContent: null
            } : e),
            [pe.SET_PREVIOUS_ACTIVE_ELEMENT]: U((e, t) => ({ ...e,
                previousActiveElement: t.element
            })),
            [pe.SET_FORCE_FOCUS]: U((e, t) => ({ ...e,
                forceFocus: t.forceFocus
            })),
            [pe.CLEAR_CONTENT_STATE_CHILD]: U((e, t) => CE(e, t.stepChildId))
        },
        ag = {
            [Ti.PREPARE_MODAL]: U(e => Te(e).type === X.MODAL ? { ...e,
                currentContent: { ...e.currentContent,
                    state: {
                        currentStepChildId: Ze(e)[0].id
                    },
                    status: Q.READY
                }
            } : e),
            [Ti.RESIZE_MODAL_CONTENT]: U((e, t) => {
                const n = mr(e);
                return e.currentContent ? { ...e,
                    currentContent: { ...e.currentContent,
                        state: { ...n,
                            height: Math.ceil(t.height),
                            width: Math.ceil(t.width)
                        }
                    }
                } : e
            })
        },
        ug = {
            [Ae.PREPARE_SATISFACTION_SURVEY]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: {
                        currentStepChildId: Ze(e)[0] && Ze(e)[0].id,
                        surveyCollapsed: !1,
                        askMeLaterSelected: !1,
                        toastVisible: !1
                    },
                    status: Q.READY
                }
            } : e),
            [Ae.COLLAPSE_SATISFACTION_SURVEY]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        surveyCollapsed: !0,
                        toastVisible: !1
                    }
                }
            } : e),
            [Ae.EXPAND_SATISFACTION_SURVEY]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        surveyCollapsed: !1,
                        toastVisible: !1
                    }
                }
            } : e),
            [Ae.ASK_ME_LATER_SELECTED]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        askMeLaterSelected: !0,
                        toastVisible: !1
                    }
                }
            } : e),
            [Ae.SHOW_SATISFACTION_SURVEY_TOAST]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        toastVisible: !0
                    }
                }
            } : e),
            [Ae.HIDE_SATISFACTION_SURVEY_TOAST]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        toastVisible: !1
                    }
                }
            } : e),
            [Ae.QUANTITATIVE_QUESTION_SUBMITTED]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        lastSubmitted: "quantitative",
                        toastVisible: !1
                    }
                }
            } : e),
            [Ae.QUALITATIVE_QUESTION_SUBMITTED]: U(e => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        lastSubmitted: "qualitative",
                        toastVisible: !1
                    }
                }
            } : e),
            [Ae.FEEDBACK_TEXT_CHANGED]: U((e, t) => Te(e).type === X.SATISFACTION_SURVEY ? { ...e,
                currentContent: { ...e.currentContent,
                    state: { ...e.currentContent.state,
                        feedbackText: t.feedback,
                        toastVisible: !1
                    }
                }
            } : e)
        };

    function Nr() {
        return Date.now()
    }

    function is(e, t, n) {
        if (t.length > 0) {
            let r = si(e);
            return t.forEach(i => {
                r = { ...r,
                    [i]: { ...r[i],
                        ...n(i)
                    }
                }
            }), { ...e,
                reportedErrors: { ...e.reportedErrors,
                    child: r
                }
            }
        }
        return e
    }
    const dg = {
            [Ee.ADD_ACTIVE_ANNOTATIONS]: U((e, t) => {
                if (e.currentContent) {
                    const n = (e.currentContent.state || {}).activeAnnotations || [];
                    return Ct(e, {
                        activeAnnotations: [...n, ...t]
                    })
                }
                return e
            }),
            [Ee.CONFIRM_SCROLLING]: U((e, t) => Ct(e, {
                isScrollingToAnnotation: t
            })),
            [Ee.SET_ACTIVE_ANNOTATIONS_WILL_CLOSE]: U((e, t) => {
                let n = e;
                return t.forEach(r => {
                    n = $t(n, r, {
                        willClose: !0
                    })
                }), n
            }),
            [Ee.REMOVE_ACTIVE_ANNOTATIONS]: U((e, t) => {
                if (e.currentContent) {
                    const n = (e.currentContent.state || {}).activeAnnotations || [];
                    return Ct(e, {
                        activeAnnotations: n.filter(r => !t.includes(r))
                    })
                }
                return e
            }),
            [Ee.SET_ANNOTATIONS_POSITIONS]: U((e, t) => {
                const n = {},
                    r = Nt(e);
                return Object.keys(t).forEach(i => {
                    const o = { ...r[i],
                        lastRepositionedTs: Nr()
                    };
                    delete o.error, delete o.errorMessage, n[i] = Object.assign(o, t[i])
                }), Ct(e, {
                    children: n
                })
            }),
            [Ee.SET_ANNOTATIONS_READY]: U(e => e.currentContent.state ? nt(e, {
                status: Q.READY,
                state: { ...e.currentContent.state,
                    retries: 0
                }
            }) : e),
            [Ee.SAVE_POSITION_DETAILS]: U((e, t) => {
                let n = e;
                return Object.keys(t).forEach(r => {
                    n = $t(n, r, {
                        _prevPosition: t[r]
                    })
                }), n
            }),
            [Ee.REPORTED_ANNOTATIONS_ERRORS]: U((e, t) => is(e, t, () => ({
                errorReported: !0
            }))),
            [Ee.REPORTED_ANNOTATIONS_RECOVERY]: U((e, t) => is(e, t, () => ({
                recoveryReported: !0
            }))),
            [Ee.SET_EXISTING_ANNOTATIONS_ERRORS]: U((e, t) => is(e, Object.keys(t || {}), n => ({
                existingError: t[n]
            }))),
            [Ee.SET_TOOLTIP_SETTLED]: U((e, t) => $t(e, t.id, {
                isTooltipSettled: t.isTooltipSettled
            }))
        },
        fg = {
            [Qt.EXPAND_HOTSPOT]: U((e, t) => ue(e) ? $t(e, t, {
                expanded: !0
            }) : e),
            [Qt.PREPARE_HOTSPOTS]: U(e => {
                const t = Te(e);
                if (t.type === X.HOTSPOTS) {
                    const n = Ze(e);
                    let r = [];
                    return n && n.length > 0 ? (r = n.map(i => i.id), Vn(t) && (r = []), nt(e, {
                        state: { ...e.currentContent.state,
                            activeAnnotations: r
                        },
                        status: Q.CALCULATING_POSITIONS
                    })) : nt(e, {
                        status: Q.ERROR,
                        error: "Empty list of hotspots.",
                        state: { ...e.currentContent.state,
                            activeAnnotations: r
                        }
                    })
                }
                return e
            }),
            [Qt.SET_BEACON_SETTLED]: U((e, t) => $t(e, t.id, {
                isBeaconSettled: t.isBeaconSettled
            }))
        };

    function Or(e, t, n) {
        return { ...e,
            debugger: { ...e.debugger,
                [t]: n
            }
        }
    }

    function Ta(e, t, n) {
        return Or(e, "viewState", { ...D(r => r.debugger.viewState, {})(e),
            [t]: n
        })
    }

    function pg(e, t, n) {
        return Ta(e, "rowState", { ...D(r => r.debugger.viewState.rowState, {})(e),
            [t]: n
        })
    }
    const hg = {
        [ze.TOGGLE_ROW_DETAILS]: U((e, t) => {
            const n = D(r => r.debugger.viewState.rowState[t], !1)(e);
            return pg(e, t, !n)
        }),
        [ze.TOGGLE_COLLAPSED]: U(e => Ta(e, "isCollapsed", e.debugger.viewState ? !e.debugger.viewState.isCollapsed : !0)),
        [ze.SET_CURRENT_PAGE]: U((e, t) => Or(e, "currentPage", t)),
        [ze.TRACK_PAGE]: U((e, t) => Or(e, "lastTrackedPage", t)),
        [ze.ADD_CONTENT_ERROR]: U((e, t) => Or(e, "contentErrors", [...Zf(e), t])),
        [ze.ADD_CHILD_ERROR]: U((e, t) => {
            const n = ep(e);
            return Or(e, "childErrors", { ...n,
                [t.contentId]: { ...n[t.contentId],
                    [t.childId]: {
                        errorMessage: t.errorMessage
                    }
                }
            })
        }),
        [ze.CLOSE_DEBUGGER]: U(e => ({ ...e,
            debugger: null
        }))
    };

    function Ca(e, t) {
        return ct(t, n => n.id === e)
    }

    function Bt(e, t, n) {
        const i = { ...Ca(t, e.checklists),
            ...n
        };
        return { ...e,
            checklists: (e.checklists || []).map(o => o.id === t ? i : o)
        }
    }
    const mg = {
            [ce.UPDATE_CHECKLISTS]: U((e, t) => {
                const n = e.checklists || [];
                return t ? { ...e,
                    checklists: t.map(r => ({ ...Ca(r.id, n),
                        id: r.id,
                        internal_name: r.internal_name,
                        attributes: r,
                        status: r.status
                    }))
                } : e
            }),
            [ce.SET_CHECKLIST_STATUS]: U((e, t) => {
                const n = e.checklists || [];
                return { ...e,
                    checklists: n.map(r => r.id === t.id ? { ...r,
                        status: t.status
                    } : r)
                }
            }),
            [ce.ANIMATE_IN_CHECKLIST]: U((e, t) => Bt(e, t.id, {
                viewState: Yt.FIRSTVIEW
            })),
            [ce.EXPAND_CHECKLIST]: U((e, t) => Bt(e, t.checklistId, {
                viewState: Yt.EXPANDED
            })),
            [ce.SET_EXPAND_CHECKLIST_LATER]: U((e, t) => Bt(e, t.checklistId, {
                shouldTryExpandChecklist: t.shouldTryExpandChecklist
            })),
            [ce.COLLAPSE_CHECKLIST]: U((e, t) => Bt(e, t.checklistId, {
                viewState: Yt.COLLAPSED
            })),
            [ce.SHOW_DISMISS_CONFIRMATION]: U((e, t) => Bt(e, t.checklistId, {
                shouldShowConfirmDismiss: !0
            })),
            [ce.CANCEL_DISMISS_CONFIRMATION]: U((e, t) => Bt(e, t.checklistId, {
                shouldShowConfirmDismiss: !1
            })),
            [ce.CONFIRM_DISMISS_CHECKLIST]: U((e, t) => Bt(e, t.checklistId, {
                status: Q.DISMISSED,
                shouldShowConfirmDismiss: !1
            })),
            [ce.SET_CHECKLIST_HEIGHT]: U((e, t) => Bt(e, t.checklistId, {
                frameHeight: Math.ceil(t.height)
            })),
            [ce.SET_CHECKLIST_WIDTH]: U((e, t) => Bt(e, t.checklistId, {
                beaconWidth: Math.ceil(t.width)
            }))
        },
        Eg = {
            [ir.LOADED_TEST_MODE_CSS]: U(e => ({ ...e,
                test: {
                    cssLoaded: !0
                }
            }))
        },
        gg = {
            [kt.LOADED_LAUNCHPAD]: U((e, {
                selector: t,
                position: n,
                header: r,
                footer: i,
                icon: o
            }) => ({ ...e,
                widget: {
                    selector: t,
                    position: n,
                    header: r,
                    footer: i,
                    icon: o,
                    expanded: !1
                }
            })),
            [kt.UPDATED_WIDGET_HISTORY]: U((e, {
                history: t
            }) => ({ ...e,
                widget: { ...e.widget,
                    history: t
                }
            })),
            [kt.UPDATED_WIDGET_FLOWS]: U((e, {
                flows: t
            }) => ({ ...e,
                widget: { ...e.widget,
                    flows: t
                }
            })),
            [kt.TOGGLED_WIDGET]: U((e, {
                expanded: t
            }) => ({ ...e,
                widget: { ...e.widget,
                    expanded: t
                }
            }))
        };

    function yg(e, t) {
        const n = TE({ ..._E,
                ...cg,
                ...lg,
                ...ag,
                ...dg,
                ...fg,
                ...ug,
                ...mg,
                ...hg,
                ...Eg,
                ...gg,
                ...yE
            }),
            r = gE(),
            o = cE(...[SE, r])(oE)(n, e);
        return t.forEach(s => {
            r.run(s)
        }), r.setContext({
            dispatch: o.dispatch
        }), o
    }
    const _a = ({
            width: e,
            height: t
        }) => u.svg("svg", {
            "attrs-viewBox": "0 0 38 45",
            "attrs-width": e,
            "attrs-height": t
        }, u.svg("g", {
            "attrs-fill": "#bebebe"
        }, u.svg("polygon", {
            "attrs-points": "15.939 25.197 28.904 45.567 35.71 45.567 35.71 0 15.939 25.197"
        }), u.svg("polygon", {
            "attrs-points": "0 45.567 12.516 45.567 12.516 29.466 0 45.567"
        }))),
        Sg = "http://www.appcues.com/powered-by?utm_medium=embed-script&utm_campaign=powered-by-appcues",
        Tg = "https://www.appcues.com/nps-survey-software?utm_medium=branding&utm_campaign=powered-by";

    function os({
        accountId: e,
        isNPS: t
    }) {
        const n = `${t?Tg:Sg}&utm_source=${e}`;
        return u.html("div", {
            classNames: "appcues-powered-by-text"
        }, u.html("a", {
            href: n,
            target: "_blank",
            rel: "noreferrer"
        }, u.html(_a, {
            width: "10px",
            height: "10px"
        }), u.html("span", null, "Powered by Appcues")))
    }

    function ss({
        text: e,
        success: t,
        hidden: n,
        onClick: r,
        attrs: i,
        style: o
    }) {
        let s = "appcues-button";
        t && (s = `${s} appcues-button-success`);
        let c = o || {};
        n && (c = { ...o,
            display: "none"
        });
        const l = d => {
                (d.key === " " || d.key === "Enter") && r(d)
            },
            a = {};
        return r && (a.click = r, a.keyup = l), u.html("a", {
            classNames: s,
            attrs: i,
            style: c,
            on: a
        }, e)
    }
    var cs, Ia;

    function Cg() {
        return Ia || (Ia = 1, cs = function(t, n) {
            if (n = n.split(":")[0], t = +t, !t) return !1;
            switch (n) {
                case "http":
                case "ws":
                    return t !== 80;
                case "https":
                case "wss":
                    return t !== 443;
                case "ftp":
                    return t !== 21;
                case "gopher":
                    return t !== 70;
                case "file":
                    return !1
            }
            return t !== 0
        }), cs
    }
    var Ai = {},
        va;

    function _g() {
        if (va) return Ai;
        va = 1;
        var e = Object.prototype.hasOwnProperty,
            t;

        function n(s) {
            try {
                return decodeURIComponent(s.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function r(s) {
            try {
                return encodeURIComponent(s)
            } catch {
                return null
            }
        }

        function i(s) {
            for (var c = /([^=?#&]+)=?([^&]*)/g, l = {}, a; a = c.exec(s);) {
                var d = n(a[1]),
                    f = n(a[2]);
                d === null || f === null || d in l || (l[d] = f)
            }
            return l
        }

        function o(s, c) {
            c = c || "";
            var l = [],
                a, d;
            typeof c != "string" && (c = "?");
            for (d in s)
                if (e.call(s, d)) {
                    if (a = s[d], !a && (a === null || a === t || isNaN(a)) && (a = ""), d = r(d), a = r(a), d === null || a === null) continue;
                    l.push(d + "=" + a)
                }
            return l.length ? c + l.join("&") : ""
        }
        return Ai.stringify = o, Ai.parse = i, Ai
    }
    var ls, Aa;

    function Ig() {
        if (Aa) return ls;
        Aa = 1;
        var e = Cg(),
            t = _g(),
            n = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
            r = /[\n\r\t]/g,
            i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            o = /:\d+$/,
            s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            c = /^[a-zA-Z]:/;

        function l(S) {
            return (S || "").toString().replace(n, "")
        }
        var a = [
                ["#", "hash"],
                ["?", "query"],
                function(T, v) {
                    return m(v.protocol) ? T.replace(/\\/g, "/") : T
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d*)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            d = {
                hash: 1,
                query: 1
            };

        function f(S) {
            var T;
            typeof window < "u" ? T = window : typeof pl < "u" ? T = pl : typeof self < "u" ? T = self : T = {};
            var v = T.location || {};
            S = S || v;
            var _ = {},
                N = typeof S,
                L;
            if (S.protocol === "blob:") _ = new h(unescape(S.pathname), {});
            else if (N === "string") {
                _ = new h(S, {});
                for (L in d) delete _[L]
            } else if (N === "object") {
                for (L in S) L in d || (_[L] = S[L]);
                _.slashes === void 0 && (_.slashes = i.test(S.href))
            }
            return _
        }

        function m(S) {
            return S === "file:" || S === "ftp:" || S === "http:" || S === "https:" || S === "ws:" || S === "wss:"
        }

        function p(S, T) {
            S = l(S), S = S.replace(r, ""), T = T || {};
            var v = s.exec(S),
                _ = v[1] ? v[1].toLowerCase() : "",
                N = !!v[2],
                L = !!v[3],
                R = 0,
                O;
            return N ? L ? (O = v[2] + v[3] + v[4], R = v[2].length + v[3].length) : (O = v[2] + v[4], R = v[2].length) : L ? (O = v[3] + v[4], R = v[3].length) : O = v[4], _ === "file:" ? R >= 2 && (O = O.slice(2)) : m(_) ? O = v[4] : _ ? N && (O = O.slice(2)) : R >= 2 && m(T.protocol) && (O = v[4]), {
                protocol: _,
                slashes: N || m(_),
                slashesCount: R,
                rest: O
            }
        }

        function E(S, T) {
            if (S === "") return T;
            for (var v = (T || "/").split("/").slice(0, -1).concat(S.split("/")), _ = v.length, N = v[_ - 1], L = !1, R = 0; _--;) v[_] === "." ? v.splice(_, 1) : v[_] === ".." ? (v.splice(_, 1), R++) : R && (_ === 0 && (L = !0), v.splice(_, 1), R--);
            return L && v.unshift(""), (N === "." || N === "..") && v.push(""), v.join("/")
        }

        function h(S, T, v) {
            if (S = l(S), S = S.replace(r, ""), !(this instanceof h)) return new h(S, T, v);
            var _, N, L, R, O, M, $ = a.slice(),
                ee = typeof T,
                w = this,
                q = 0;
            for (ee !== "object" && ee !== "string" && (v = T, T = null), v && typeof v != "function" && (v = t.parse), T = f(T), N = p(S || "", T), _ = !N.protocol && !N.slashes, w.slashes = N.slashes || _ && T.slashes, w.protocol = N.protocol || T.protocol || "", S = N.rest, (N.protocol === "file:" && (N.slashesCount !== 2 || c.test(S)) || !N.slashes && (N.protocol || N.slashesCount < 2 || !m(w.protocol))) && ($[3] = [/(.*)/, "pathname"]); q < $.length; q++) {
                if (R = $[q], typeof R == "function") {
                    S = R(S, w);
                    continue
                }
                L = R[0], M = R[1], L !== L ? w[M] = S : typeof L == "string" ? (O = L === "@" ? S.lastIndexOf(L) : S.indexOf(L), ~O && (typeof R[2] == "number" ? (w[M] = S.slice(0, O), S = S.slice(O + R[2])) : (w[M] = S.slice(O), S = S.slice(0, O)))) : (O = L.exec(S)) && (w[M] = O[1], S = S.slice(0, O.index)), w[M] = w[M] || _ && R[3] && T[M] || "", R[4] && (w[M] = w[M].toLowerCase())
            }
            v && (w.query = v(w.query)), _ && T.slashes && w.pathname.charAt(0) !== "/" && (w.pathname !== "" || T.pathname !== "") && (w.pathname = E(w.pathname, T.pathname)), w.pathname.charAt(0) !== "/" && m(w.protocol) && (w.pathname = "/" + w.pathname), e(w.port, w.protocol) || (w.host = w.hostname, w.port = ""), w.username = w.password = "", w.auth && (O = w.auth.indexOf(":"), ~O ? (w.username = w.auth.slice(0, O), w.username = encodeURIComponent(decodeURIComponent(w.username)), w.password = w.auth.slice(O + 1), w.password = encodeURIComponent(decodeURIComponent(w.password))) : w.username = encodeURIComponent(decodeURIComponent(w.auth)), w.auth = w.password ? w.username + ":" + w.password : w.username), w.origin = w.protocol !== "file:" && m(w.protocol) && w.host ? w.protocol + "//" + w.host : "null", w.href = w.toString()
        }

        function y(S, T, v) {
            var _ = this;
            switch (S) {
                case "query":
                    typeof T == "string" && T.length && (T = (v || t.parse)(T)), _[S] = T;
                    break;
                case "port":
                    _[S] = T, e(T, _.protocol) ? T && (_.host = _.hostname + ":" + T) : (_.host = _.hostname, _[S] = "");
                    break;
                case "hostname":
                    _[S] = T, _.port && (T += ":" + _.port), _.host = T;
                    break;
                case "host":
                    _[S] = T, o.test(T) ? (T = T.split(":"), _.port = T.pop(), _.hostname = T.join(":")) : (_.hostname = T, _.port = "");
                    break;
                case "protocol":
                    _.protocol = T.toLowerCase(), _.slashes = !v;
                    break;
                case "pathname":
                case "hash":
                    if (T) {
                        var N = S === "pathname" ? "/" : "#";
                        _[S] = T.charAt(0) !== N ? N + T : T
                    } else _[S] = T;
                    break;
                case "username":
                case "password":
                    _[S] = encodeURIComponent(T);
                    break;
                case "auth":
                    var L = T.indexOf(":");
                    ~L ? (_.username = T.slice(0, L), _.username = encodeURIComponent(decodeURIComponent(_.username)), _.password = T.slice(L + 1), _.password = encodeURIComponent(decodeURIComponent(_.password))) : _.username = encodeURIComponent(decodeURIComponent(T))
            }
            for (var R = 0; R < a.length; R++) {
                var O = a[R];
                O[4] && (_[O[1]] = _[O[1]].toLowerCase())
            }
            return _.auth = _.password ? _.username + ":" + _.password : _.username, _.origin = _.protocol !== "file:" && m(_.protocol) && _.host ? _.protocol + "//" + _.host : "null", _.href = _.toString(), _
        }

        function I(S) {
            (!S || typeof S != "function") && (S = t.stringify);
            var T, v = this,
                _ = v.host,
                N = v.protocol;
            N && N.charAt(N.length - 1) !== ":" && (N += ":");
            var L = N + (v.protocol && v.slashes || m(v.protocol) ? "//" : "");
            return v.username ? (L += v.username, v.password && (L += ":" + v.password), L += "@") : v.password ? (L += ":" + v.password, L += "@") : v.protocol !== "file:" && m(v.protocol) && !_ && v.pathname !== "/" && (L += "@"), (_[_.length - 1] === ":" || o.test(v.hostname) && !v.port) && (_ += ":"), L += _ + v.pathname, T = typeof v.query == "object" ? S(v.query) : v.query, T && (L += T.charAt(0) !== "?" ? "?" + T : T), v.hash && (L += v.hash), L
        }
        return h.prototype = {
            set: y,
            toString: I
        }, h.extractProtocol = p, h.location = f, h.trimLeft = l, h.qs = t, ls = h, ls
    }
    var vg = Ig();
    const Ag = Uo(vg);

    function be(e) {
        return new Promise(t => {
            setTimeout(t, e)
        })
    }

    function bg(e, t) {
        if (/^https?:\/\//i.test(t)) return t;
        try {
            return new URL(t, e.location.origin).href
        } catch {
            return t
        }
    }

    function Zt(e, t, n) {
        return be(10).then(() => {
            const r = bg(e, t);
            n ? e.open(r) : e.location.href = r
        })
    }
    const wg = /[$()+.?[\\\]^{|}]/g,
        Ng = /\*/g,
        Og = /\\{\\{.*?\\}\\}/g,
        ba = ".+",
        kg = /(\/$|\/(\?|#))$/,
        Rg = /(\/\*)$/,
        Lg = /^(https?:)\/\//i;

    function Pg(e) {
        const {
            pathname: t,
            query: n,
            hash: r
        } = Ag(e);
        return `${t}${n}${r}`
    }

    function wa(e) {
        return e ? .replace(kg, "$2")
    }

    function xg(e = "", t = "") {
        return e.toLowerCase().trim() === t.toLowerCase().trim()
    }

    function Dg(e = "", t) {
        const n = e.replace(wg, String.raw `\$&`).replace(Ng, ba).replace(Og, ba);
        return Lg.test(n) ? new RegExp(`${n}$`, "i").test(t) : new RegExp(`^/?${n}$`, "i").test(Pg(t))
    }

    function _t(e = "/", t = "/") {
        const [n, r] = Rg.test(e) ? [e, t] : [wa(e), wa(t)];
        return xg(n, r) || Dg(n, r)
    }

    function Ug() {
        return window.location.href
    }

    function Na(e) {
        Oe(e, "target") !== "_blank" && ye(e, "target", "_parent")
    }

    function Oa(e, t) {
        const n = Oe(e, "href");
        if (n) {
            const r = i => {
                if (i.type === "keyup" && i.key !== " " && i.key !== "Enter") return;
                t(i, n);
                const o = Oe(e, "target");
                o !== "_blank" ? (i.preventDefault(), window.setTimeout(() => {
                    const s = (c => {
                        switch (c) {
                            case "_parent":
                                {
                                    const l = !!window.parent.location;
                                    return typeof window.parent == "string" || !l ? window : window.parent
                                }
                            case "_top":
                                return window.top;
                            default:
                                return window
                        }
                    })(o);
                    Zt(s, n)
                }, 200)) : i.type === "keyup" && o === "_blank" && Zt(window, n, !0)
            };
            St(e, "click", r), St(e, "keyup", r)
        } else St(e, "click", t), St(e, "keyup", r => {
            (r.key === " " || r.key === "Enter") && t(r)
        })
    }
    const ka = "//twemoji.maxcdn.com/2/svg/",
        Fg = "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/",
        Ra = new Set(["skip", "skip-and-end-flow", "end", "prev", "end-flow"]);

    function Hg(e) {
        return [...e.querySelectorAll("form.step-action-form .field[data-field-id]")]
    }

    function Mg(e) {
        const t = e.querySelector("form.step-action-form");
        return t ? t.getAttribute("data-form-id") : null
    }
    const $g = "pattern-title",
        Bg = e => {
            setTimeout(() => {
                const [t] = Ei(e.elm);
                if (t) {
                    ut(t);
                    return
                }
                ut(e.elm)
            }, 500)
        };

    function as(e) {
        Mo(e, "update", t => {
            t.elm && t.elm.focus()
        })
    }

    function Wg(e) {
        const {
            step: t,
            currentState: n,
            showBadge: r,
            accountId: i,
            isFirst: o,
            isLast: s,
            onComplete: c,
            onCompleteFlow: l,
            onNextStep: a,
            onPrevStep: d,
            onJumpStep: f,
            onLinkClick: m,
            onFormSubmission: p,
            onContentChange: E,
            onSkip: h,
            onHandleProfileUpdate: y,
            onHandleUserEvent: I,
            formatVersion: S,
            onSetNextContentIdCookie: T,
            showBackdrop: v
        } = e, _ = {
            LEFT: "LEFT",
            RIGHT: "RIGHT"
        }, N = {
            NEXT: "NEXT",
            BACK: "BACK"
        }, L = {
            NEXT: "Next",
            LAST: "OK, got it",
            BACK: "Back"
        }, R = S === 1;
        let O = t.step_buttons;
        (O == null || O.length === 0) && (O = [{
            text: Mt(t.next_text),
            type: N.NEXT,
            align: _.RIGHT
        }, {
            text: Mt(t.prev_text),
            type: N.BACK,
            align: _.LEFT
        }]);
        let M = !1;
        const $ = (V, z, le = s, ve = !1, he = !1) => {
                if (!M) {
                    z();
                    return
                }
                const ae = V.ownerDocument.documentElement.querySelector("cue.active > section");
                p(Mg(ae), Hg(ae), z, le, ve, he)
            },
            ee = V => {
                const z = s ? () => c(V) : () => a(V, t.id);
                $(V.target, z)
            },
            w = (V, z, le, ve) => {
                $(z, () => f(V, le, ve))
            },
            q = ({
                ignoreValidation: V
            }) => z => {
                $(z.target, () => l(z), !1, V)
            },
            se = V => {
                d(V, t.id)
            },
            Z = V => {
                switch (V) {
                    case N.BACK:
                        return se;
                    case N.NEXT:
                        return ee;
                    default:
                        return null
                }
            },
            ie = () => {
                const z = (n.forms || {})[n.currentStepChildId] || {},
                    {
                        fields: le = []
                    } = z;
                return le
            },
            Se = Object.keys(n.formErrors || {}).reduce((V, z) => {
                const le = ie().findIndex(ve => ve.fieldId === z);
                return V < 0 ? le : Math.min(V, le)
            }, -1),
            Be = V => {
                if (Tl(V)) {
                    const z = Oe(V, "data-step"),
                        le = Oe(V, "href"),
                        ve = Oe(V, "data-attrs-event"),
                        he = Oe(V, "data-attrs-profile-update"),
                        ae = En(V, "appcues-button"),
                        k = Oe(V, "data-next-content-id"),
                        x = [];
                    if (k && x.push(() => T(k)), le ? (Na(V), x.push(P => m(P, t.id, le))) : (ye(V, "role", "button"), ye(V, "tabindex", "0")), he) try {
                        const P = JSON.parse(he);
                        Object.keys(P).length > 0 && x.push(J => {
                            $(J.currentTarget, () => y(P), !1, Ra.has(z), !0)
                        })
                    } catch {}
                    if (ve) try {
                        const P = JSON.parse(ve);
                        Object.keys(P).length > 0 && x.push(J => {
                            $(J.currentTarget, () => I(P.event, P.properties), !1, Ra.has(z), !0)
                        })
                    } catch {}
                    if (/^\d+$/.test(z)) x.push(P => {
                        w(P, V.elm, t.id, Number.parseInt(z, 10))
                    });
                    else if (z) {
                        const P = {
                            end: c,
                            next: ee,
                            prev: se,
                            skip: h,
                            "skip-and-end-flow": q({
                                ignoreValidation: !0
                            }),
                            "end-flow": q({
                                ignoreValidation: !1
                            })
                        }[z];
                        P && x.push(P)
                    }
                    ae && ye(V, "tabindex", "0"), _l(V, P => {
                        x.push(J => {
                            $(J.currentTarget, P, !1)
                        })
                    }), x.length > 0 && Oa(V, (P, J) => {
                        x.forEach(ne => {
                            ne(P, J)
                        })
                    })
                }
                if (Cl(V)) {
                    ye(V, "crossOrigin", "anonymous"), Oe(V, "alt") || (ye(V, "alt", ""), ye(V, "role", "presentation"));
                    const le = Oe(V, "src");
                    if (le ? .includes(ka)) {
                        const ve = le.replace(ka, Fg);
                        ye(V, "src", ve)
                    }
                    St(V, "load", ve => {
                        if (E) {
                            const he = ve.target.ownerDocument;
                            window.requestAnimationFrame(() => {
                                E(he.documentElement.querySelector("modal-container"))
                            })
                        }
                    })
                }
                if (hh(V) && St(V, "keypress", z => {
                        if (z.key === "Enter" && z.target.tagName !== "TEXTAREA" && z.target.type !== "radio" && z.target.type !== "checkbox" && !(z.target.classList.contains("rating-options") || z.target.classList.contains("rating-option"))) {
                            const {
                                currentTarget: le
                            } = z;
                            $(le, s ? () => c(z) : () => a(z, t.id)), z.preventDefault ? z.preventDefault() : z.returnValue = !1
                        }
                    }), En(V, "form-field")) {
                    const z = ie();
                    let le;
                    V.children.forEach(ve => {
                        ve.children && ve.children.forEach(he => {
                            En(he, "label-display") && (le = Oe(he, "for"), ye(he, "id", `label-${le}`));
                            const ae = z.find(k => k.fieldId === le);
                            if (En(he, "form-control") && (ye(he, "aria-invalid", "false"), le && ye(he, "id", le), ae ? .value && ye(he, "value", ae.value), le === z[Se] ? .fieldId && as(he), M || Mo(he, "insert", k => {
                                    k.elm && k.elm.focus()
                                })), En(he, "field-options")) {
                                const k = Oe(he, "data-type-role"),
                                    x = Oe(V, "data-max-selection");
                                if (ye(he, "role", k ? ? "radiogroup"), le && (ye(he, "aria-labelledby", `label-${le}`), ye(he, "tabindex", "0")), z) {
                                    const P = he.children.filter(J => J.children && J.children.find(({
                                        sel: ne
                                    }) => ne === "input"));
                                    P.forEach(J => {
                                        St(J, "keypress", ne => {
                                            if (ne.key === "Enter") {
                                                const te = J.children.find(({
                                                    sel: K
                                                }) => K === "input");
                                                te && te.elm && te.elm.click()
                                            }
                                        })
                                    }), x && Number.parseInt(x, 10) > 0 && P.forEach(J => {
                                        St(J, "change", () => {
                                            const ne = P.filter(te => te.children.find(({
                                                sel: G
                                            }) => G === "input").elm.checked);
                                            P.forEach(te => {
                                                const K = te.children.find(({
                                                    sel: G
                                                }) => G === "input");
                                                !K.elm.checked && ne.length >= x ? K.elm.setAttribute("disabled", !0) : K.elm.checked || K.elm.removeAttribute("disabled")
                                            })
                                        })
                                    })
                                }
                                if (z && ae ? .value) {
                                    const P = he.children.find(J => J.children && J.children.find(({
                                        sel: ne
                                    }) => ne === "input").data ? .attrs ? .value === ae.value);
                                    if (P) {
                                        const J = P.children.find(({
                                            sel: ne
                                        }) => ne === "input");
                                        ye(J, "checked", !0)
                                    }
                                }
                                le === z[Se] ? .fieldId && as(he)
                            }
                            En(he, "rating-options") && (ye(he, "role", "radiogroup"), le && (ye(he, "aria-labelledby", `label-${le}`), ye(he, "tabindex", "0")), he.children.forEach(k => {
                                ye(k, "tabindex", "0"), ye(k, "role", "radio"), St(k, "keydown", x => {
                                    if ((x.key === " " || x.key === "Enter") && (x.stopPropagation(), k.children.forEach(P => {
                                            ph(P) && P && P.elm && P.elm.click()
                                        })), x.key === "ArrowRight" || x.key === "ArrowDown") {
                                        x.preventDefault();
                                        const P = k.elm.nextElementSibling;
                                        P ? P.focus() : he.children[0] ? .elm.focus()
                                    }
                                    if (x.key === "ArrowLeft" || x.key === "ArrowUp") {
                                        x.preventDefault();
                                        const P = k.elm.previousElementSibling;
                                        P ? P.focus() : he.children[he.children.length - 1] ? .elm.focus()
                                    }
                                })
                            }), le === z[Se] ? .fieldId && as(he))
                        })
                    }), le && n.formErrors && n.formErrors[le] && (fh(V, "appcues-error"), V.children = [...V.children, u.html(Vg, {
                        vnodeFormField: V.children,
                        messages: n.formErrors[le],
                        fieldId: le
                    })]), M = !0
                }
            },
            ke = Mt(t.html, {
                hooks: {
                    create: Be
                }
            });
        return u.html("cue", {
            classNames: `active 
        ${t.actions_hidden?"appcues-actions-hidden":""}
        ${R?"":"full-buttons"}
      `
        }, u.html("section", {
            "attrs-role": "dialog",
            "attrs-aria-modal": v ? "true" : "false",
            "attrs-aria-describedby": $g,
            "hook-insert": Bg,
            "attrs-tabindex": "-1"
        }, ke || ""), R ? u.html("div", {
            classNames: `appcues-actions ${t.actions_hidden?"hidden":""}`
        }, !t.prev_button_hidden && !t.is_button_centered ? u.html("div", {
            classNames: `appcues-actions-left ${t.next_button_hidden?"appcues-actions-full-row":""} `
        }, O.filter(V => V.align === _.LEFT && V.isVisible !== !1).map(V => u.html(ss, {
            style: V.style ? JSON.parse(V.style) : void 0,
            text: V.text || L.BACK,
            hidden: o,
            attrs: {
                "data-step": "prev",
                role: "button",
                tabindex: "0"
            },
            onClick: Z(V.type)
        }))) : u.html(de, null), t.next_button_hidden ? u.html(de, null) : u.html("div", {
            classNames: `appcues-actions-right ${t.prev_button_hidden||t.is_button_centered?"appcues-actions-full-row":""} ${t.is_button_centered?"appcues-actions-align-center":""}`
        }, O.filter(V => V.align === _.RIGHT && V.isVisible !== !1).map(V => u.html(ss, {
            success: !0,
            style: V.style ? JSON.parse(V.style) : void 0,
            text: V.text || (s ? L.LAST : L.NEXT),
            attrs: {
                "data-step": s ? "end" : "next",
                role: "button",
                tabindex: "0"
            },
            onClick: Z(V.type)
        })))) : u.html(de, null), r ? u.html(os, {
            accountId: i
        }) : u.html(de, null))
    }

    function Vg({
        messages: e,
        fieldId: t,
        vnodeFormField: n
    }) {
        const r = n.find(o => o.data ? .class["field-controls"]);
        let i = "";
        return e.forEach((o, s) => {
            i += `error-for-${t}-${s} `
        }), r && (r.children[0].data.attrs["aria-invalid"] = "true", r.children[0].data.attrs["aria-describedBy"] = i), u.html("ul", {
            classNames: "messages"
        }, e.map((o, s) => u.html("li", null, u.html("span", {
            id: `error-for-${t}-${s}`
        }, o))))
    }
    const us = ".appcues-content-outline-styling",
        ds = ({
            key: e,
            target: t
        }) => {
            const n = t.ownerDocument || t,
                r = n.documentElement ? .querySelector(us) ? ? n.querySelector(us);
            e === "Tab" && (r.innerHTML = "", n.removeEventListener("keydown", ds))
        },
        Gg = e => {
            setTimeout(() => {
                e.elm.ownerDocument.addEventListener("keydown", ds)
            }, 200)
        },
        jg = e => {
            e.elm.ownerDocument.removeEventListener("keydown", ds)
        },
        qg = `
  appcues cue > section *, .content * {
    outline: none;
  }
`;

    function La() {
        return u.html("style", {
            selector: us,
            "attrs-type": "text/css",
            "hook-insert": Gg,
            "hook-destroy": jg
        }, qg)
    }

    function Pa(e, t) {
        const n = o => {
            o.key === "Escape" && t()
        };
        return {
            addEscapeEventListener: o => {
                if (!e || !o) return;
                const {
                    elm: s
                } = o, c = s.ownerDocument;
                c && c.addEventListener("keyup", n, !0), s.tagName === "IFRAME" && setTimeout(() => {
                    const l = s.contentDocument;
                    l && l.addEventListener("keyup", n, !0)
                }, 100)
            },
            removeEscapeEventListener: o => {
                if (!e || !o) return;
                const {
                    elm: s
                } = o, c = s.ownerDocument;
                if (c && c.removeEventListener("keyup", n, !0), s.tagName === "IFRAME") {
                    const l = s.contentDocument;
                    l && l.removeEventListener("keyup", n, !0)
                }
            }
        }
    }

    function fs(e, t, n, r) {
        if (e.defaultView !== null && r) {
            const i = () => r(t, e.documentElement.querySelector(n));
            Uh(e.defaultView, i), window.setTimeout(i, 200)
        }
    }
    const Kg = "/generic/main/7.20.2/modal.6a6a274575024b516c91cfd03d287c29b5744063.css",
        Yg = "/generic/main/7.20.2/modal-step-legacy-render.6a6a274575024b516c91cfd03d287c29b5744063.css",
        zg = "sha256-4/hpW9ONoiD80NHCgX4Nn/iogB1Wblm1nx1DUXqgDZk=",
        Xg = "sha256-Ea5gC5g6QacVSWApI6ApmuZheqr4EDl50hD7GyRsaz0=",
        Jg = Ht(Yg),
        bi = Ht(Kg),
        xa = new Set(["shorty", "slideout"]);

    function Da(e) {
        if (!e) return;
        const {
            style: t
        } = e, n = t.transform;
        t.transform = n === "scale(1) translateZ(0)" ? "scale(1)" : "scale(1) translateZ(0)", e.offsetHeight
    }

    function Ua(e) {
        setTimeout(() => {
            e.focus()
        }, 100)
    }
    const ps = e => {
        if (e.key === "Tab") {
            const t = document.documentElement.querySelector("appcues-container iframe").contentWindow.document,
                {
                    activeElement: n
                } = t,
                r = Ei(t.documentElement),
                i = r.length,
                o = r.indexOf(n);
            if (n === t.body) {
                e.shiftKey && (e.preventDefault(), Ua(r[i - 1]));
                return
            }(e.shiftKey && o === 0 || !e.shiftKey && o === i - 1) && (e.preventDefault(), Ua(r[0]))
        }
    };

    function Qg(e) {
        const t = Te(e),
            n = mr(e),
            r = Ge(e),
            i = Ze(e),
            o = at(e),
            s = Jt(e, o),
            c = i[s],
            l = t.attributes.pattern_type,
            a = t.attributes.is_progress_bar_hidden,
            {
                position: d
            } = t.attributes,
            {
                backdrop: f
            } = t.attributes,
            {
                skippable: m
            } = t.attributes,
            p = e.views.callbacks[X.MODAL],
            E = n.cssLoaded,
            h = Ff(e),
            y = Kc(e),
            I = tl(e),
            S = y || h,
            v = ["modal", "left", "fullscreen"].includes(l),
            _ = v || f,
            N = yi(e.settings),
            L = I === 1,
            R = E && oe.inArray([Q.SHOWING, Q.WILL_CLOSE], r),
            O = r !== Q.SHOWING,
            M = {},
            $ = {};
        _ || (M.height = (n.height || 0) > 2 ? `${n.height}px` : "150px", M.width = (n.width || 0) > 2 ? `${n.width}px` : "400px"), R || (M.opacity = "0", M.visibility = "hidden"), xa.has(l) && ($.overflow = "auto");
        const ee = Math.round((s + 1) / i.length * 1e3) / 10,
            w = {},
            q = [];
        for (const [ae, k] of i.entries()) {
            w[`cue-step-${ae}`] = ae === s;
            const x = /<style.*?>((?:.|[\n\r])*?)<\/style>/g;
            let P;
            for (;
                (P = x.exec(k.html)) !== null;) P.index === x.lastIndex && (x.lastIndex += 1), q.push(P[1])
        }
        const se = ae => {
                ae.target.tagName === "APPCUES" && m && l !== "fullscreen" && p.onSkip()
            },
            Z = (ae, k) => {
                const x = ae.target.ownerDocument;
                k ? mi(x, bi, () => {
                    p.onCSSLoaded(t.id, bi, !0), v || fs(x, t.id, "modal-container", p.onContentChange)
                }) : p.onCSSLoaded(t.id, bi, !1)
            },
            ie = ae => {
                Object.keys(n.formErrors || {}).length > 0 && xa.has(l) || !v && ae && Math.abs(ae.getBoundingClientRect().height - Number.parseInt(n.height, 10)) > 2 && p.onContentChange && window.requestAnimationFrame(() => p.onContentChange(t.id, ae))
            },
            {
                addEscapeEventListener: Se,
                removeEscapeEventListener: Be
            } = Pa(m, p.onSkip),
            ke = ae => {
                window.requestAnimationFrame(p.onShow), _ && xh(document.documentElement.querySelector("body"), "appcues-noscroll"), window.requestAnimationFrame(() => {
                    ut(ae.elm), Da(ae.elm)
                }), Se(ae)
            },
            V = ae => {
                Pl(Gc(e)), Dh(document.documentElement.querySelector("body"), "appcues-noscroll"), Be(ae)
            },
            z = u.html(ey, {
                percentComplete: ee,
                isProgressBarHidden: a,
                numberOfSteps: i.length,
                currentStep: s + 1
            }),
            le = u.html(Zg, {
                skippable: m,
                onClick: p.onSkip
            }),
            ve = u.html(de, null),
            he = u.html(Wg, {
                step: c,
                key: `modal-step-${s}`,
                currentState: n,
                showBadge: N,
                accountId: e.settings.accountId,
                isFirst: s === 0,
                isLast: s === i.length - 1,
                onComplete: p.onComplete,
                onCompleteFlow: p.onCompleteFlow,
                onNextStep: p.onNextStep,
                onPrevStep: p.onPrevStep,
                onJumpStep: p.onJumpStep,
                onLinkClick: p.onLinkClick,
                onStepChildActivated: p.onStepChildActivated,
                onStepChildDeactivated: p.onStepChildDeactivated,
                onFormSubmission: p.onFormSubmission,
                onSetNextContentIdCookie: p.onSetNextContentIdCookie,
                onContentChange: ie,
                onSkip: p.onSkip,
                onHandleProfileUpdate: p.onHandleProfileUpdate,
                onHandleUserEvent: p.onHandleUserEvent,
                formatVersion: I,
                showBackdrop: _
            });
        return u.html("appcues-container", {
            "attrs-data-pattern-type": l,
            "attrs-data-position": d,
            "attrs-tabindex": "0",
            "class-appcues-ontop": !0,
            "class-appcues-fullscreen": _,
            "class-apc-hidden": O,
            classNames: `appcues--theme-${Ao(e)||S.id||"-default"}`,
            style: M,
            "on-keydown": ps
        }, u.html("iframe", {
            "style-border": "none",
            "style-display": "block",
            "style-height": "100%",
            "style-width": "100%",
            "style-color-scheme": "none",
            srcdoc: '<meta name="referrer" content="origin" />',
            src: "about:blank",
            "hook-insert": ke,
            "hook-update": ae => Da(ae.elm),
            "hook-destroy": V,
            "attrs-allowfullscreen": !0,
            "attrs-mozallowfullscreen": !0,
            "attrs-webkitallowfullscreen": !0,
            "attrs-msallowfullscreen": !0
        }, u.html("meta", {
            name: "referrer",
            content: "origin"
        }), u.html("link", {
            "attrs-href": bi,
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "attrs-integrity": zg,
            "attrs-crossorigin": "anonymous",
            "on-load": ae => {
                Z(ae, !0)
            },
            "on-error": ae => {
                Z(ae, !1)
            }
        }), L ? u.html("link", {
            "attrs-href": Jg,
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "attrs-integrity": Xg,
            "attrs-crossorigin": "anonymous"
        }) : u.html(de, null), u.html(La, null), u.html(qo, {
            styling: S.globalStyling
        }), u.html("style", {
            "attrs-type": "text/css",
            classNames: "extracted-step-styles"
        }, q.join(`
`)), _ ? u.html(ty, {
            patternType: l,
            hidden: O
        }) : u.html(de, null), (() => {
            let ae = u.html(de, null);
            return ae = v ? u.html("appcues", {
                "class-active": !0,
                "class-apc-hidden": O,
                "class-fullscreen": _,
                class: w,
                "attrs-data-pattern-type": l,
                "on-click": se,
                "on-keydown": ps
            }, z, le, ve, he) : u.html("appcues", {
                "class-active": !0,
                "class-apc-hidden": O,
                "class-fullscreen": _,
                class: w,
                "attrs-data-pattern-type": l,
                "attrs-data-position": d,
                "on-click": se,
                "on-keydown": ps,
                style: $
            }, u.html("modal-container", {
                "class-fullscreen": _,
                "hook-update": k => {
                    ie(k.elm)
                }
            }, z, le, he)), ae
        })()))
    }

    function Zg({
        skippable: e,
        onClick: t
    }) {
        if (e) {
            const n = r => {
                (r.key === " " || r.key === "Enter") && t()
            };
            return u.html("div", {
                classNames: "appcues-skip"
            }, u.html("a", {
                "attrs-data-step": "skip",
                "on-keyup": n,
                "on-click": t,
                "attrs-aria-label": "Close modal",
                "attrs-role": "button",
                "attrs-tabindex": "0"
            }, String.fromCodePoint(215)))
        }
        return u.html(de, null)
    }

    function ey({
        currentStep: e,
        numberOfSteps: t,
        percentComplete: n,
        isProgressBarHidden: r
    }) {
        return r ? u.html(de, null) : u.html("div", {
            classNames: "appcues-progress"
        }, u.html("div", {
            classNames: "appcues-progress-bar appcues-progress-bar-success",
            "attrs-role": "progressbar",
            "attrs-aria-label": "current step",
            "attrs-aria-valuemin": 1,
            "attrs-aria-valuemax": t,
            "attrs-aria-valuenow": e,
            "attrs-aria-valuetext": `You are on step ${e} of ${t}`,
            style: {
                width: `${n}%`
            }
        }))
    }

    function ty({
        patternType: e,
        hidden: t
    }) {
        return u.html("div", {
            "class-appcues-backdrop": !0,
            "class-apc-hidden": t,
            "attrs-data-pattern-type": e
        })
    }
    const ny = "/generic/main/7.20.2/tooltip.6a6a274575024b516c91cfd03d287c29b5744063.css",
        ry = "sha256-9y1o/fRpWDU82ZWAjihfIJSZnx+knnDTkr5DYPSqYhg=",
        wi = Ht(ny),
        Fa = "//twemoji.maxcdn.com/2/svg/",
        iy = "//cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/",
        kr = "hs",
        Ha = "pattern-title",
        Ma = "Hide these tips";

    function oy(e, t) {
        return {
            skippable: e.skippable,
            skipText: e.skipText,
            skippableDisplayType: e.skippableDisplayType || lo.TEXT,
            onSkip: t.onSkip
        }
    }

    function hs(e) {
        return !(!e || !e.skippable)
    }

    function $a(e, t) {
        return e ? e === t : !1
    }

    function Ba(e) {
        return hs(e) ? $a(e.skippableDisplayType, lo.TEXT) : !1
    }

    function sy(e) {
        return hs(e) ? $a(e.skippableDisplayType, lo.EXIT_SYMBOL) : !1
    }

    function Wa(e, t) {
        if (!t) return {
            focusableElements: [],
            isBoundaryElement: () => !1
        };
        const {
            activeElement: n,
            documentElement: r
        } = t, i = Ei(r), o = i.indexOf(n);
        return {
            focusableElements: i,
            isBoundaryElement: () => {
                const s = i.length;
                return e.shiftKey && o === 0 || !e.shiftKey && o === s - 1
            }
        }
    }
    const Va = e => {
        const t = Hh(Ha, !0),
            n = e.styling || {},
            r = e.width || 0,
            i = e.height || 0,
            o = Number.parseInt(e.zIndex, 10),
            s = {
                position: e.fixed ? "fixed" : "absolute",
                height: `${i}px`,
                width: `${r}px`,
                zIndex: Number.isNaN(o) ? e.zIndex || "" : o + 1,
                border: "none"
            },
            c = e.callbacks || {},
            l = e.formatVersion === 1,
            a = e.isTooltipSettled && !e.willClose && e.stepVisible && e.isElementVisible,
            d = w => {
                c.onNextButtonClick(w, e.id, e.isLast)
            },
            f = w => {
                c.onPrevButtonClick(w, e.id)
            },
            m = w => {
                c.onComplete(w, e.id)
            },
            p = w => {
                c.onCompleteFlow(w, e.id)
            },
            E = (w, q) => {
                const se = w.target.ownerDocument;
                q ? mi(se, wi, () => {
                    c.onCSSLoaded && c.onCSSLoaded(e.id, wi, !0), fs(se, e.id, ".tooltip", c.onContentChange)
                }) : c.onCSSLoaded && c.onCSSLoaded(e.id, wi, !1)
            },
            h = w => {
                if (t(w), Tl(w)) {
                    const q = Oe(w, "data-step"),
                        se = Oe(w, "href"),
                        Z = En(w, "appcues-button"),
                        ie = Oe(w, "data-attrs-event"),
                        Se = Oe(w, "data-attrs-profile-update"),
                        Be = Oe(w, "data-next-content-id"),
                        ke = [];
                    if (Be && ke.push(() => c.onSetNextContentIdCookie(Be)), se ? (Na(w), ke.push((z, le) => {
                            c.onLinkClick(e.id, le)
                        })) : (ye(w, "role", "button"), ye(w, "tabindex", "0")), Se) try {
                        const z = JSON.parse(Se);
                        Object.keys(z).length > 0 && ke.push(() => c.onHandleProfileUpdate(z))
                    } catch {}
                    if (ie) try {
                        const z = JSON.parse(ie);
                        Object.keys(z).length > 0 && ke.push(() => c.onHandleUserEvent(z.event, z.properties))
                    } catch {}
                    const V = z => (le, ve) => {
                        window.setTimeout(() => z(le, ve), 1)
                    };
                    if (/^\d+$/.test(q)) ke.push(z => {
                        c.onJumpStep(z, e.id, Number.parseInt(q, 10))
                    });
                    else if (q) {
                        const z = {
                            end: m,
                            next: d,
                            prev: f,
                            skip: c.onSkip,
                            "skip-and-end-flow": p,
                            "end-flow": p
                        }[q];
                        z && ke.push(V(z))
                    }
                    Z && ye(w, "tabindex", "0"), _l(w, z => {
                        ke.push(z)
                    }), ke.length > 0 && Oa(w, (z, le) => {
                        ke.forEach(ve => {
                            ve(z, le)
                        })
                    })
                }
                if (Cl(w)) {
                    ye(w, "crossOrigin", "anonymous"), Oe(w, "alt") || (ye(w, "alt", ""), ye(w, "role", "presentation"));
                    const se = Oe(w, "src");
                    if (se ? .includes(Fa)) {
                        const Z = se.replace(Fa, iy);
                        ye(w, "src", Z)
                    }
                    St(w, "load", Z => {
                        if (c.onContentChange) {
                            const ie = Z.target.ownerDocument;
                            window.requestAnimationFrame(() => {
                                c.onContentChange(e.id, ie.documentElement.querySelector(".tooltip"))
                            })
                        }
                    })
                }
            },
            y = Mt(e.html, {
                hooks: {
                    create: h
                }
            });
        let I = e.tooltipAlignment;
        if (!I) {
            let w = "bottom";
            e.yRegion > 1 && (w = "top");
            let q = "";
            e.xRegion === 0 ? q = "-right" : e.xRegion === 3 && (q = "-left"), I = `${w}${q}`
        }
        const S = {
                [`align-${I}`]: !0
            },
            T = {
                [`content-${I}`]: !0
            };
        (I === "top" || I === "bottom") && (s.left = `${e.x+yt/2-r/2}px`), (I === "left" || I === "right") && (s.top = `${e.y-(i-yt-oo)/2}px`);
        const v = ef + oo + Qd / 2 + Zd - yt / 2;
        I.indexOf("left") > 0 ? s.left = `${e.x-r+v+yt}px` : I.indexOf("right") > 0 ? s.left = `${e.x-v}px` : I.indexOf("left") === 0 ? s.left = `${e.x-r}px` : I.indexOf("right") === 0 && (s.left = `${e.x+yt}px`), I.indexOf("top") > 0 ? s.top = `${e.y-i+v+yt}px` : I.indexOf("bottom") > 0 ? s.top = `${e.y-v+oo}px` : I.indexOf("top") === 0 ? s.top = `${e.y-i}px` : I.indexOf("bottom") === 0 && (s.top = `${e.y+yt}px`);
        const _ = w => {
                if (c.onContentChange) {
                    const {
                        target: q
                    } = w;
                    window.requestAnimationFrame(() => {
                        document.documentElement.contains(q) && c.onContentChange(e.id, q.contentDocument.documentElement.querySelector(".tooltip"))
                    })
                }
            },
            N = oy(e, c),
            {
                addEscapeEventListener: L,
                removeEscapeEventListener: R
            } = Pa(hs(N), N.onSkip),
            O = w => {
                if (w.key === "Tab" || [38, 40, 37, 39].includes(w.keyCode)) {
                    w.stopPropagation();
                    const se = (c.onClickOut || e.backdropSolidEdge ? document.documentElement.querySelector(`#${kr}-${e.id}`) : document.documentElement) ? .querySelector(".appcues-tooltip-container");
                    if (se) {
                        const {
                            contentDocument: Z
                        } = se, {
                            focusableElements: ie,
                            isBoundaryElement: Se
                        } = Wa(w, Z);
                        if (Se())
                            if (c.onClickOut) c.onClickOut(e.isLast);
                            else {
                                if (e.backdropSolidEdge) {
                                    w.preventDefault(), ut(e.element);
                                    return
                                }
                                ie.some(ke => ke.classList.contains("appcues-button")) || ut(e.element)
                            }!ie.includes(w.target) && e.isElementVisible && (w.preventDefault(), ut(ie[0]))
                    }
                }
            };
        let M;
        const $ = w => {
                L(w), window.requestAnimationFrame(() => ut(w.elm)), M = q => {
                    const Z = (c.onClickOut || e.backdropSolidEdge ? document.documentElement.querySelector(`#${kr}-${e.id}`) : document.documentElement) ? .querySelector(".appcues-tooltip-container");
                    if (Z) {
                        const {
                            contentDocument: ie
                        } = Z, {
                            focusableElements: Se
                        } = Wa(q, ie);
                        Se.length > 0 && ut(Se[0])
                    }
                }, e.element ? .addEventListener("blur", M)
            },
            ee = w => {
                !c.onClickOut && e.element !== document.activeElement && Pl(e.previousActiveElement), R(w), e.element ? .removeEventListener("blur", M)
            };
        return u.html("iframe", {
            src: "about:blank",
            classNames: "appcues-tooltip-container",
            style: s,
            class: S,
            "attrs-seamless": !0,
            "class-appcues-tooltip-hidden": e.hidden,
            "class-apc-hidden": !a,
            "on-load": _,
            "attrs-allowfullscreen": !0,
            "attrs-mozallowfullscreen": !0,
            "attrs-webkitallowfullscreen": !0,
            "attrs-msallowfullscreen": !0,
            "hook-insert": $,
            "hook-destroy": ee,
            "attrs-aria-hidden": !1,
            "style-color-scheme": "none"
        }, u.html("link", {
            "attrs-href": wi,
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "attrs-integrity": ry,
            "attrs-crossorigin": "anonymous",
            "on-load": w => {
                E(w, !0)
            },
            "on-error": w => {
                E(w, !1)
            }
        }), u.html(La, null), u.html(qo, {
            styling: n.globalStyling,
            onLoad: w => {
                E(w, !0)
            }
        }), u.html("div", {
            "on-keydown": O,
            classNames: "tooltip",
            "attrs-aria-label": dr.LABEL_TOOLTIP,
            "attrs-aria-modal": e.backdropSolidEdge,
            "attrs-aria-labelledby": Ha,
            "attrs-role": "dialog",
            "attrs-tabindex": "-1"
        }, u.html("div", {
            classNames: "content",
            class: T
        }, u.html("div", {
            classNames: "panel panel-default"
        }, u.html("div", {
            classNames: "panel-content"
        }, sy(N) ? u.html(ay, {
            skipText: N.skipText,
            onClick: N.onSkip
        }) : "", y || ""), l ? u.html(cy, {
            skipOptions: N,
            buttonText: e.buttonText,
            onButtonClick: d
        }) : u.html(de, null), e.showPoweredBy ? u.html(os, {
            accountId: e.accountId
        }) : u.html(de, null)))))
    };

    function cy({
        skipOptions: e,
        buttonText: t,
        onButtonClick: n
    }) {
        return !Ba(e) && !t ? u.html(de, null) : u.html("div", {
            classNames: "panel-content panel-content-actions"
        }, Ba(e) ? u.html("div", {
            classNames: "appcues-actions-left"
        }, u.html(ly, {
            skipText: e.skipText,
            onClick: e.onSkip
        })) : u.html(de, null), u.html("div", {
            classNames: "appcues-actions-right"
        }, t ? u.html(ss, {
            text: Mt(t),
            success: !0,
            onClick: n,
            attrs: {
                role: "button",
                tabindex: "0"
            }
        }) : u.html(de, null)))
    }
    const Ga = (e, t) => {
        (e.key === " " || e.key === "Enter") && t()
    };

    function ly({
        skipText: e,
        onClick: t
    }) {
        return u.html("small", {
            "on-keyup": n => {
                Ga(n, t)
            },
            "attrs-role": "button",
            "attrs-tabindex": "0",
            "on-click": t,
            classNames: "text-muted appcues-skip",
            "attrs-aria-label": e || Ma
        }, u.html("span", {
            "attrs-aria-hidden": "true"
        }, String.fromCodePoint(8856), " "), e ? Mt(e) : Ma)
    }

    function ay({
        onClick: e
    }) {
        return u.html("div", {
            "attrs-role": "button",
            "on-keyup": t => {
                Ga(t, e)
            },
            "attrs-tabindex": "0",
            classNames: "exit-tooltip-container",
            "on-click": e,
            "attrs-aria-label": "Close tooltip"
        }, u.html("a", {
            classNames: "exit-tooltip",
            "attrs-aria-hidden": "true"
        }, "×"))
    }

    function uy({
        color: e,
        zIndex: t
    }) {
        return u.svg("svg", {
            "class-beacon": !0,
            "attrs-width": `${yt}px`,
            "attrs-height": `${yt}px`,
            "attrs-viewBox": "0 0 24 24",
            style: {
                zIndex: t
            }
        }, u.svg("g", {
            "attrs-stroke": "none",
            "attrs-stroke-width": "1",
            "attrs-fill": "none",
            "attrs-fill-rule": "evenodd",
            "attrs-transform": "translate(3, 3)"
        }, u.svg("circle", {
            "attrs-fill": e,
            "attrs-cx": "9",
            "attrs-cy": "9",
            "attrs-r": "9"
        }), u.svg("path", {
            "attrs-d": "M9.8 9.7L9.8 10.7C9.8 11.1 9.5 11.5 9 11.5L9 11.5C8.6 11.5 8.2 11.1 8.2 10.7L8.2 9.1C8.2 8.7 8.5 8.3 8.9 8.3L9 8.2C10.7 7.9 11.4 7.4 11.4 6.6 11.4 5.8 10.3 5 9 5 7.7 5 6.7 5.7 6.6 6.5 6.6 7 6.2 7.3 5.7 7.3 5.3 7.2 4.9 6.8 5 6.4 5.1 4.7 6.9 3.4 9 3.4 11.2 3.4 13.1 4.8 13.1 6.6 13.1 8.2 12 9.2 9.8 9.7L9.8 9.7Z",
            "attrs-fill": "#FFFFFF"
        }), u.svg("path", {
            "attrs-d": "M9.6 14.5C9.4 14.6 9.2 14.7 9 14.7 8.8 14.7 8.6 14.6 8.5 14.5 8.3 14.3 8.2 14.1 8.2 13.9 8.2 13.7 8.3 13.5 8.5 13.3 8.8 13 9.3 13 9.6 13.3 9.7 13.5 9.8 13.7 9.8 13.9 9.8 14.1 9.7 14.3 9.6 14.5L9.6 14.5Z",
            "attrs-fill": "#FFFFFF"
        })))
    }

    function dy({
        color: e,
        outerBeaconClasses: t,
        zIndex: n,
        visibility: r
    }) {
        return u.svg("svg", {
            "class-beacon": !0,
            "attrs-width": `${yt}px`,
            "attrs-height": `${yt}px`,
            "attrs-viewBox": "0 0 24 24",
            style: {
                zIndex: n,
                visibility: r
            }
        }, u.svg("g", {
            "attrs-stroke": "none",
            "attrs-stroke-width": "1",
            "attrs-fill": "none",
            "attrs-fill-rule": "evenodd"
        }, u.svg("circle", {
            "class-beacon-inner": !0,
            "attrs-fill": e,
            "attrs-cx": "12",
            "attrs-cy": "12",
            "attrs-r": "6"
        }), u.svg("circle", {
            "class-beacon-outer": !0,
            class: t,
            "attrs-stroke": e,
            "attrs-stroke-width": "2",
            "attrs-cx": "12",
            "attrs-cy": "12",
            "attrs-r": "11"
        })))
    }

    function fy(e = {}) {
        if (e.iconType === "question") return uy(e);
        const t = e.iconType === "hidden" ? "hidden" : "visible";
        return dy({
            visibility: t,
            ...e
        })
    }

    function py(e) {
        const t = e.styling || {},
            n = e.color || t.globalBeaconColor || "#FF765C",
            r = e[e.settledKey] && !e.willClose && e.stepVisible && e.isElementVisible;
        let i = e.zIndexOverride || (!e.fixed && (e.zIndex === "auto" || e.zIndex === "") ? Hn - 1 : e.zIndex || "");
        i = e.backdrop ? Hn - 1 : i;
        const o = {
                position: e.fixed ? "fixed" : "absolute",
                left: `${e.x}px`,
                top: `${e.y}px`,
                zIndex: i
            },
            s = e.callbacks || {},
            c = () => {
                !e.isActivated && s.onFirstInsert && window.requestAnimationFrame(() => s.onFirstInsert(e.id, e.isFirst))
            },
            l = h => {
                if (h.key === "Tab") {
                    const I = document.documentElement.querySelector(`#${kr}-${e.id}`).querySelector(".appcues-tooltip-container").contentDocument,
                        {
                            activeElement: S
                        } = I,
                        T = Ei(I.documentElement);
                    S === I.body && T.length === 0 && e.callbacks.onClickOut(e.isLast)
                }
            },
            a = h => {
                if (s.onBeaconClick) {
                    const y = h.target.ownerDocument.documentElement.querySelector(`#${kr}-${e.id} iframe`);
                    let I = null;
                    y && y.contentDocument && (I = y.contentDocument.documentElement.querySelector(".tooltip")), s.onBeaconClick(e.id, I, e.isLast, e.isLastUnexpanded), h.stopPropagation(), e.callbacks.onClickOut && y.contentDocument.addEventListener("keydown", l)
                }
            },
            d = {
                [t.hotspotClass || "hotspot"]: !0
            },
            f = {
                [t.globalHotspotAnimation || "hotspot-animation-none"]: !0
            },
            m = e.beaconStyle || t.globalBeaconStyle || "hotspot",
            p = m === "hidden",
            E = h => {
                (h.key === " " || h.key === "Enter") && (h.preventDefault(), a(h))
            };
        return u.html("div", {
            class: d,
            "class-apc-hidden": !r,
            "class-apc-beacon-hidden": p,
            "attrs-id": `${kr}-${e.id}`,
            "attrs-aria-haspopup": dr.HASPOPUP_TOOLTIP,
            role: dr.ROLE_TOOLTIP,
            "attrs-aria-label": "Hotspot (open by clicking or pressing space/enter)",
            "hook-insert": c
        }, u.html("div", {
            "attrs-tabindex": "0",
            classNames: "beacon-container",
            style: o,
            "on-keydown": E,
            "on-mouseup": a
        }, u.html(fy, {
            iconType: m,
            color: n,
            outerBeaconClasses: f,
            zIndex: i
        })), u.html(Va, { ...e,
            zIndex: i,
            hidden: !e.expanded || !e.cssLoaded
        }))
    }
    const Rr = 1500,
        hy = e => {
            const t = "apc-spotlight",
                n = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight, window.innerHeight),
                r = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth),
                i = document && document.body && document.body.scrollTop ? document.body.scrollTop : 0,
                o = e.backdropSolidEdgeBorderRadius || 0,
                s = e.backdropSolidEdgeXPadding || 0,
                c = e.backdropSolidEdgeYPadding || 0,
                l = e.elementBoundingRect || {
                    height: 0,
                    width: 0
                },
                a = (m, p, E, h) => ({
                    top: `${m}px`,
                    left: `${p}px`,
                    width: `${E}px`,
                    height: `${h}px`,
                    background: `rgba(0,0,0,${e.backdropSolidEdgeOpacity})`,
                    position: "absolute",
                    pointerEvents: "all"
                }),
                d = e.boundingRect || {
                    top: 0,
                    left: 0
                },
                f = {
                    container: {
                        position: e.fixed ? "fixed" : "absolute",
                        zIndex: Hn - 1e3,
                        top: "0",
                        left: "0",
                        pointerEvents: "none",
                        height: `${n}px`,
                        width: `${r}px`
                    },
                    elemContainer: {
                        position: "absolute",
                        top: `${d.top-c}px`,
                        left: `${d.left-s}px`,
                        width: `${l.width+2*s}px`,
                        height: `${l.height+2*c}px`,
                        overflow: "hidden",
                        pointerEvents: "none"
                    },
                    elemWrapper: {
                        position: "relative",
                        width: `${l.width+2*s}px`,
                        height: `${l.height+2*c}px`,
                        boxShadow: `0px 0px 0px 2000px rgba(0,0,0,${e.backdropSolidEdgeOpacity})`,
                        borderRadius: `${o}px`,
                        pointerEvents: "none"
                    },
                    backdropLeftPanel: a(0, 0, d.left - s, n + i),
                    backdropTopPanel: a(0, d.left - s, l.width + 2 * s, d.top - c),
                    backdropRightPanel: a(0, d.right + s, r - (d.right + s), n + i),
                    backdropBottomPanel: a(d.bottom + c, d.left - s, l.width + 2 * s, n + i - (d.bottom + c))
                };
            return u.html("div", {
                style: f.container,
                classNames: "apc-solid-edge apc-sequential-backdrop",
                key: e.id
            }, u.html("div", {
                style: f.elemContainer
            }, u.html("div", {
                style: f.elemWrapper,
                classNames: "apc-spotlight"
            })), u.html("div", {
                style: f.backdropLeftPanel,
                classNames: t
            }), u.html("div", {
                style: f.backdropRightPanel,
                classNames: t
            }), u.html("div", {
                style: f.backdropTopPanel,
                classNames: t
            }), u.html("div", {
                style: f.backdropBottomPanel,
                classNames: t
            }))
        },
        my = ({
            annotation: e,
            isScrollingToAnnotation: t
        }) => {
            const {
                backdrop: n,
                backdropSolidEdge: r,
                backdropSolidEdgeOpacity: i,
                cssLoaded: o,
                isActivated: s,
                isElementVisible: c
            } = e;
            if (!n) return u.html(de, null);
            if (t) return u.html("div", {
                className: "apc-full-backdrop apc-sequential-backdrop",
                "data-testid": "full-backdrop",
                style: {
                    top: "0",
                    left: "0",
                    width: "100vw",
                    height: "100vh",
                    background: `rgba(0,0,0,${i})`,
                    position: "fixed",
                    pointerEvents: r ? "all" : "none",
                    zIndex: Hn
                }
            });
            const l = e.boundingRect || {
                    top: 0,
                    left: 0
                },
                a = e.elementBoundingRect || {
                    height: 0,
                    width: 0
                },
                d = {
                    position: e.fixed ? "fixed" : "absolute",
                    pointerEvents: "none",
                    top: "0px",
                    left: "0px",
                    overflow: "hidden",
                    height: `${Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight,window.innerHeight)}px`,
                    width: `${Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth)}px`,
                    zIndex: Hn - 1e3
                },
                f = a.width ? a.width + 2 * Rr : 0,
                m = a.height ? a.height + 2 * Rr : 0,
                p = {
                    position: "relative",
                    top: `${l.top-Rr}px`,
                    left: `${l.left-Rr}px`,
                    height: `${m}px`,
                    width: `${f}px`,
                    boxSizing: "border-box",
                    border: `${Rr}px solid transparent`,
                    pointerEvents: "none",
                    borderImage: `radial-gradient(transparent 2%, rgba(0, 0, 0, ${i}) 28%) 49% 49% 49% 49%`,
                    boxShadow: `0 0 0 2500px rgba(0, 0, 0, ${i})`,
                    zIndex: Hn - 1e3
                };
            return o && s && c ? r ? hy(e) : u.html("div", {
                style: d
            }, u.html("div", {
                style: p,
                classNames: "apc-animated-backdrop apc-spotlight apc-sequential-backdrop"
            })) : u.html(de, null)
        };

    function Ey(e) {
        return e.annotations.map(t => {
            let n = t;
            return n = { ...n,
                ...e.annotationsState[n.id],
                html: n.html,
                showPoweredBy: yi(e.settings),
                accountId: e.settings.accountId,
                styling: n.style || e.settings.styling
            }, e.activeAnnotations.includes(n.id) && !n.error ? n.type === "hotspot" ? u.html("div", {
                classNames: "apc-sequential-hotspot"
            }, u.html(my, {
                annotation: n,
                isScrollingToAnnotation: e.isScrollingToAnnotation
            }), u.html(py, { ...n,
                key: n.id,
                callbacks: e.callbacks,
                previousActiveElement: e.previousActiveElement,
                shouldForceFocus: e.shouldForceFocus
            })) : u.html(Va, { ...n,
                key: n.id,
                callbacks: e.callbacks
            }) : null
        }).filter(t => t !== null)
    }
    const ja = ".appcues-beacon-outline-styling",
        ms = ({
            key: e
        }) => {
            const t = document.documentElement.querySelector(ja);
            e === "Tab" && (t.innerHTML = "", document.removeEventListener("keydown", ms))
        },
        gy = () => {
            document.addEventListener("keydown", ms)
        },
        yy = () => {
            document.removeEventListener("keydown", ms)
        },
        Sy = `
  .beacon-container:focus, .beacon:focus {
    outline: none;
  }
`;

    function Ty() {
        return u.html("style", {
            selector: ja,
            "attrs-type": "text/css",
            "hook-insert": gy,
            "hook-destroy": yy
        }, Sy)
    }

    function qa(e, t) {
        const n = Kn(e);
        return n.length === 1 && n.indexOf(t) === 0
    }

    function Cy(e) {
        const t = Kn(e),
            n = Nt(e);
        return t.filter(r => n[r] && !n[r].activatedAt)
    }

    function Ka(e, t, n) {
        if (t) {
            const r = i => {
                const o = i.target.ownerDocument.documentElement.querySelector("appcues-layer .hotspots");
                o && !o.contains(i.target) && t(qa(n, at(n)))
            };
            e.data.onClickOut = r, document.addEventListener("click", r)
        }
    }

    function Ya(e) {
        e.data.onClickOut && document.removeEventListener("click", e.data.onClickOut)
    }

    function za(e, t, n) {
        const r = Te(e),
            i = Ge(e),
            o = e.settings || {},
            s = Kc(e) || o.styling || {},
            c = tl(e),
            l = Ze(e).map(f => ({
                id: f.id,
                type: "hotspot",
                beaconStyle: r.attributes.beacon_style,
                skippable: r.attributes.skippable,
                skippableDisplayType: r.attributes.skippable_display_type,
                backdrop: r.attributes.backdrop,
                backdropSolidEdge: r.attributes.backdrop_solid_edge,
                backdropSolidEdgeBorderRadius: f.backdrop_solid_edge_border_radius,
                backdropSolidEdgeXPadding: f.backdrop_solid_edge_x_padding,
                backdropSolidEdgeYPadding: f.backdrop_solid_edge_y_padding,
                backdropSolidEdgeOpacity: r.attributes.backdrop_solid_edge_opacity,
                stepVisible: i === Q.SHOWING,
                tooltipAlignment: f.tooltip_alignment,
                skipText: f.skip_text,
                html: f.html,
                style: s,
                isActivated: wo(e, f.id),
                settledKey: r.attributes.sequential ? "isTooltipSettled" : "isBeaconSettled",
                zIndexOverride: f.z_index_override,
                formatVersion: c,
                ...n(f)
            })),
            a = f => {
                Ka(f, t.onClickOut, e), window.requestAnimationFrame(t.onShow)
            },
            d = (f, m) => {
                Ya(f), Ka(m, t.onClickOut, e)
            };
        return u.html("appcues-layer", {
            classNames: `appcues--theme-${Ao(e)||s.id||"-default"}`
        }, u.html("style", {
            classNames: "appcues-global-hotspot-styling",
            "attrs-type": "text/css"
        }, s.globalHotspotStyling || ""), u.html("style", null, `
          .apc-sequential-hotspot ~ .apc-sequential-hotspot .apc-sequential-backdrop {
            opacity: 0;
            visibility: hidden;
            display: none;
          }
          `), u.html(Ty, null), u.html("div", {
            classNames: "hotspots appcues-hotspots",
            "hook-insert": a,
            "hook-destroy": f => {
                Ya(f)
            },
            "hook-update": d
        }, u.html(Ey, {
            annotations: l,
            previousActiveElement: Gc(e),
            shouldForceFocus: Uf(e),
            annotationsState: Nt(e),
            activeAnnotations: Kn(e),
            callbacks: t,
            settings: o,
            isScrollingToAnnotation: zf(e)
        })))
    }

    function _y(e) {
        const t = Cy(e);
        return za(e, e.views.callbacks[X.HOTSPOTS], n => ({
            isLast: qa(e, n.id),
            isLastUnexpanded: t.length === 1 && t.indexOf(n.id) === 0
        }))
    }

    function Xa(e, t) {
        return Jt(e, t) === Ze(e).length - 1
    }

    function Iy(e) {
        return za(e, e.views.callbacks[X.SEQUENTIAL_HOTSPOTS], t => {
            const n = t.next_text || (Xa(e, t.id) ? "Close" : "Next");
            return {
                stepsInGroup: Yf(e),
                buttonText: t.hide_next_button ? null : n,
                isLast: Xa(e, t.id),
                isFirst: Jt(e, t.id) === 0
            }
        })
    }

    function vy(e) {
        const t = Te(e);
        return Vn(t) ? Iy(e) : _y(e)
    }
    const Ay = {
        click: e => {
            e.stopPropagation(), e.preventDefault(), e.target.control.checked = !0, e.target.form.requestSubmit()
        }
    };

    function by(e) {
        const {
            optionNumber: t,
            ctaStyles: n
        } = e, r = `option-#${t}`;
        return u.html("div", {
            classNames: "nps-number-option"
        }, u.html("input", {
            name: "nps-options",
            classNames: "nps-number-input",
            id: r,
            value: t,
            type: "radio"
        }), u.html("label", {
            classNames: "nps-number-link",
            style: n,
            test: "test",
            attrs: {
                for: r
            },
            on: Ay
        }, t))
    }
    const Ja = {
        click: e => {
            e.stopPropagation(), e.preventDefault()
        }
    };

    function wy(e) {
        const {
            onNextStep: n,
            onStartCollapsing: r,
            onCollapse: i,
            onQuantitativeQuestionSubmitted: o,
            onAskMeLaterSelected: s,
            step: c,
            askMeLaterTextOverride: l,
            notLikelyTextOverride: a,
            veryLikelyTextOverride: d,
            doCollapseBeforeNextStep: f
        } = e, m = l || "Ask Me Later", p = a || "Not likely", E = d || "Very likely", h = v => {
            f && r(), o(v), n()
        }, y = v => {
            v.preventDefault();
            const N = new FormData(v.target).get("nps-options");
            N !== null && h(Number.parseInt(N, 10))
        }, I = {
            click: () => {
                i(), s()
            },
            keydown: v => {
                (v.key === " " || v.key === "Enter") && (i(), s())
            }
        }, S = [];
        for (let v = 0; v <= 10; v++) S.push(v);
        const T = c.question_text;
        return u.html("div", null, u.html("div", null, u.html("a", {
            "attrs-role": "button",
            classNames: "ask-me-later",
            id: "ask-me-later",
            on: I,
            "attrs-tabindex": "0"
        }, u.html("div", {
            classNames: "close-icon"
        }, "✕"), u.html("div", {
            classNames: "ask-me-later-text"
        }, m))), u.html("div", {
            classNames: "quantitative-question",
            id: "quantitative-question"
        }, u.html("div", {
            classNames: "question-text",
            id: "quantitative-question-text"
        }, T), u.html("form", {
            name: "NPS options",
            "on-submit": y
        }, u.html("fieldset", {
            classNames: "nps-options",
            "attrs-aria-labelledby": "quantitative-question-text",
            role: "radiogroup",
            on: {
                change: v => {
                    v.type !== "submit" && (v.preventDefault(), v.stopPropagation())
                }
            }
        }, S.map(v => u.html(by, { ...e,
            optionNumber: v
        })), u.html("input", {
            type: "submit",
            value: "Submit",
            hidden: !0
        }))), u.html("div", {
            classNames: "context-hints"
        }, u.html("label", {
            classNames: "not-likely-hint",
            htmlFor: "option-#0",
            on: Ja
        }, p), u.html("label", {
            classNames: "very-likely-hint",
            htmlFor: "option-#10",
            on: Ja
        }, E))))
    }

    function Ny(e) {
        const {
            onPrevStep: t,
            onCollapse: n,
            onQualitativeQuestionSubmitted: r,
            onFeedbackTextChanged: i,
            onStartCollapsing: o,
            ctaStyles: s,
            step: c,
            updateTextOverride: l,
            cancelTextOverride: a,
            submitTextOverride: d,
            textAreaStyles: f,
            feedbackText: m,
            accountId: p,
            showBadge: E,
            isCollapsed: h
        } = e, y = l || "Update Your Score", I = a || "Close", S = d || "Submit", T = {
            click: () => {
                t()
            },
            keydown: $ => {
                ($.key === " " || $.key === "Enter") && t()
            }
        }, v = {
            click: () => {
                n()
            },
            keydown: $ => {
                ($.key === " " || $.key === "Enter") && n()
            }
        }, _ = {
            click: () => {
                r(m), o()
            },
            keydown: $ => {
                $.repeat || ($.key === " " || $.key === "Enter") && (r(m), o())
            }
        }, N = {
            change: $ => {
                i($.target.value)
            },
            keyup: $ => {
                i($.target.value)
            }
        }, L = 500, R = !m || m.trim().length <= 0, O = m ? m.length : 0, M = O > L;
        return u.html("div", null, u.html("div", null, u.html("a", {
            "attrs-role": "button",
            classNames: "ask-me-later",
            tabIndex: h ? "-1" : "0",
            on: v
        }, u.html("div", {
            classNames: "close-icon"
        }, "✕"), u.html("div", {
            classNames: "ask-me-later-text"
        }, I)), u.html("a", {
            "attrs-role": "button",
            tabIndex: h ? "-1" : "0",
            classNames: "back-to-nps",
            id: "back-to-nps",
            on: T
        }, y)), u.html("div", {
            classNames: "qualitative-question",
            id: "qualitative-question"
        }, u.html("div", {
            classNames: "question-text",
            id: "qualitative-question-text"
        }, c.question_text), u.html("div", null, u.html("textarea", {
            tabIndex: h ? "-1" : "0",
            "attrs-aria-labelledby": "qualitative-question-text",
            id: "feedback-box",
            style: f,
            value: m,
            on: N
        })), u.html("div", {
            classNames: "buttons"
        }, u.html("div", {
            classNames: "appcues-powdered-by-wrapper"
        }, E ? u.html(os, {
            isNPS: !0,
            accountId: p
        }) : u.html(de, null)), u.html("div", null, u.html("div", {
            classNames: "character-count"
        }, u.html("span", {
            classNames: `numerator-character-count ${M||R?"disabled":""}`
        }, O), " ", "/ ", L), u.html("a", {
            "attrs-role": "button",
            tabIndex: h ? "-1" : "0",
            on: _,
            classNames: `submit-button ${M?"disabled":""}`,
            style: s
        }, S)))))
    }

    function Oy(e) {
        const {
            lastSubmitted: t,
            inlineStyles: n,
            toastMessage: r,
            show: i
        } = e, o = "Thanks!", s = {
            quantitative: "← Thanks! Have any additional feedback?",
            qualitative: o
        }, c = u.html("span", null, " ", r || s[t] || o, " ");
        return u.html("div", {
            classNames: "confirmation-toast",
            id: "confirmation-toast",
            style: i ? { ...n,
                opacity: "0",
                transition: "opacity 0.4s",
                delayed: {
                    opacity: "1"
                }
            } : { ...n,
                transition: "opacity 0.2s",
                delayed: {
                    opacity: "0"
                }
            }
        }, c)
    }

    function ky(e) {
        const {
            accountId: t,
            step: n,
            onNextStep: r,
            onPrevStep: i,
            onStartCollapsing: o,
            onCollapse: s,
            onUpdate: c,
            onExpand: l,
            onShowToast: a,
            onHideToast: d,
            onQuantitativeQuestionSubmitted: f,
            onQualitativeQuestionSubmitted: m,
            onFeedbackTextChanged: p,
            onAskMeLaterSelected: E,
            currentState: h,
            showBadge: y
        } = e, I = n.background_color || "#FFFFFF", S = n.foreground_color || "#000000", T = Number.parseInt(I.replace("#", ""), 16), v = Number.parseInt(S.replace("#", ""), 16), _ = T < v, N = {
            backgroundColor: I,
            color: S
        }, L = {
            color: _ ? "#FFFFFF" : "#000000"
        }, R = {
            backgroundColor: n.foreground_color || "#FFFFFF",
            color: n.background_color || "#000000"
        }, $ = {
            onNextStep: () => r(n.id),
            onPrevStep: () => i(n.id),
            onStartCollapsing: o,
            onCollapse: s,
            onExpand: l,
            onShowToast: a,
            onHideToast: d,
            onQuantitativeQuestionSubmitted: f,
            onQualitativeQuestionSubmitted: m,
            onFeedbackTextChanged: p,
            onAskMeLaterSelected: E,
            collapsed: h.surveyCollapsed,
            step: n,
            accountId: t,
            doCollapseBeforeNextStep: n.collapse_before_next_step,
            updateTextOverride: n.update_text_override,
            cancelTextOverride: n.cancel_text_override,
            submitTextOverride: n.submit_text_override,
            askMeLaterTextOverride: n.ask_me_later_text_override,
            notLikelyTextOverride: n.not_likely_text_override,
            veryLikelyTextOverride: n.very_likely_text_override,
            inlineStyles: N,
            ctaStyles: R,
            textAreaStyles: L,
            showBadge: y
        };
        let ee = !1,
            w;
        switch (n.step_number) {
            case 1:
                ee = !1, w = u.html(wy, { ...$
                });
                break;
            case 2:
                ee = !0, w = u.html(Ny, { ...$,
                    feedbackText: h.feedbackText,
                    isCollapsed: h.surveyCollapsed
                });
                break;
            default:
                w = null
        }
        const q = {
            click: l,
            keydown: se => {
                (se.key === " " || se.key === "Enter") && l()
            }
        };
        return u.html("cue", {
            classNames: "active"
        }, u.html("div", null, u.html("section", null, u.html("div", {
            classNames: "appcues-nps",
            "hook-update": c,
            style: h.surveyCollapsed ? { ...N,
                opacity: "0",
                delayed: {
                    "transform-origin": "100% 100%",
                    animation: "nps-complete 0s cubic-bezier(0.42, 0, 0.04, 1.03) forwards"
                }
            } : { ...N,
                display: "block",
                opacity: 0,
                delayed: {
                    animation: "nps-enter 0.2s ease-out forwards"
                }
            }
        }, u.html("div", {
            classNames: `nps-modal ${ee?"qualitative":""}`,
            id: "nps-modal"
        }, w))), u.html("div", {
            classNames: `feedback-tab ${h.surveyCollapsed?"collapsed":""}`
        }, h.lastSubmitted === "quantitative" ? u.html("a", {
            "attrs-tabindex": "0",
            "hook-insert": se => {
                window.requestAnimationFrame(() => ut(se.elm))
            },
            classNames: "feedback-link",
            on: q
        }, u.html("div", {
            classNames: "satisfaction-feedback",
            id: "satisfaction-overlay",
            style: h.surveyCollapsed ? { ...N,
                display: "block",
                opacity: 0,
                delayed: {
                    animation: "nps-enter 0.2s ease-out forwards"
                }
            } : { ...N,
                opacity: "1",
                delayed: {
                    "transform-origin": "100% 100%",
                    animation: "nps-complete 0.4s cubic-bezier(0.42, 0, 0.04, 1.03) forwards"
                }
            }
        }, "Feedback")) : "", u.html(Oy, { ...$,
            show: h.toastVisible,
            lastSubmitted: h.lastSubmitted,
            toastMessage: n.completion_toast_copy
        }))))
    }
    const Ry = "/generic/main/7.20.2/satisfaction-survey.6a6a274575024b516c91cfd03d287c29b5744063.css",
        Ly = "sha256-sxJdJpfLXrOLqMGRB1bfYQKkawXgstmlKYOqA1Z9CPo=",
        Es = Ht(Ry);
    let Qa, Ni;

    function Py(e) {
        const t = Te(e),
            n = mr(e),
            r = Ge(e),
            i = Ze(e),
            o = at(e),
            s = Jt(e, o),
            c = i[s],
            l = t.attributes.pattern_type,
            {
                position: a
            } = t.attributes,
            d = e.views.callbacks[X.SATISFACTION_SURVEY],
            f = n.cssLoaded,
            m = yi(e.settings),
            p = r !== Q.SHOWING;
        let E = {};
        const h = f && oe.inArray([Q.SHOWING, Q.WILL_CLOSE], r);
        h || (E = {
            display: "none"
        }), E = { ...E,
            position: "fixed",
            bottom: "0px",
            left: "0px",
            width: "100%"
        };
        let y = "0px",
            I = "100%",
            S = "0px";
        const {
            askMeLaterSelected: T,
            surveyCollapsed: v,
            toastVisible: _,
            lastSubmitted: N
        } = n, L = !T && v;
        L && (y = "40px", _ || (I = "125px", S = "296px"), !_ && N === "qualitative" && (y = "0px", I = "0px"));
        const R = q => {
                Qa = q.elm, window.requestAnimationFrame(() => {
                    d.onShow(), ut(q.elm)
                })
            },
            O = q => {
                if (q) {
                    const se = q.getBoundingClientRect().height,
                        Z = Number.parseInt(n.height, 10);
                    Math.abs(se - Z) > 2 && d.onContentChange && window.requestAnimationFrame(() => d.onContentChange(t.id, q))
                }
            },
            M = q => {
                if (T || N === "qualitative" || L || !h) return;
                const se = q.elm.scrollHeight,
                    Z = window.innerHeight;
                if (se) {
                    Ni = Ni || se + 15;
                    const ie = se > Z ? Z : Ni;
                    Qa.style.height = `${ie}px`, q.elm.children[0].style.height = `${ie}px`
                }
            },
            $ = (q, se) => {
                (q === "next" ? d.onNextStep : d.onPrevStep)(se), Ni = null
            },
            ee = (q, se) => {
                const Z = q.target.ownerDocument;
                mi(Z, Es, () => {
                    d.onCSSLoaded(t.id, Es, !0), fs(Z, t.id, "survey-container", d.onContentChange)
                })
            },
            w = u.html(ky, {
                step: c,
                key: `survey-step-${s}`,
                currentState: n,
                showBadge: m,
                accountId: e.settings.accountId,
                isFirst: s === 0,
                isLast: s === i.length - 1,
                onNextStep: q => $("next", q),
                onPrevStep: q => $("prev", q),
                onCollapse: d.onCollapse,
                onStartCollapsing: d.onStartCollapsing,
                onExpand: d.onExpand,
                onShowToast: d.onShowToast,
                onHideToast: d.onHideToast,
                onJumpStep: d.onJumpStep,
                onLinkClick: d.onLinkClick,
                onQuantitativeQuestionSubmitted: d.onQuantitativeQuestionSubmitted,
                onQualitativeQuestionSubmitted: d.onQualitativeQuestionSubmitted,
                onFeedbackTextChanged: d.onFeedbackTextChanged,
                onAskMeLaterSelected: d.onAskMeLaterSelected,
                onStepChildActivated: d.onStepChildActivated,
                onStepChildDeactivated: d.onStepChildDeactivated,
                onFormSubmission: d.onFormSubmission,
                onUpdate: M,
                onSkip: d.onSkip
            });
        return u.html("appcues-container", {
            "attrs-data-pattern-type": l,
            "attrs-data-position": a,
            "class-appcues-ontop": !0,
            "class-apc-hidden": p,
            style: E
        }, u.html("iframe", {
            style: {
                position: "fixed",
                bottom: "0",
                border: "none",
                height: y,
                width: I,
                right: "0",
                marginRight: S
            },
            "hook-insert": R,
            "hook-destroy": () => {},
            "attrs-aria-label": "NPS Survey",
            "style-color-scheme": "none"
        }, u.html("link", {
            "attrs-href": Es,
            "attrs-integrity": Ly,
            "attrs-crossorigin": "anonymous",
            "attrs-type": "text/css",
            "attrs-rel": "stylesheet",
            "on-load": q => {
                ee(q)
            },
            "on-error": q => {
                ee(q)
            }
        }), u.html("appcues", {
            "class-active": !0,
            "class-apc-hidden": p,
            "attrs-data-pattern-type": l,
            "attrs-data-position": a
        }, u.html("survey-container", {
            "hook-update": q => {
                O(q.elm)
            }
        }, w))))
    }
    const xy = b(pe.INVALIDATE_FORM),
        Dy = b(pe.LOADED_CSS),
        Uy = b(pe.RESIZE_CONTENT, (e, t, n) => ({
            id: e,
            height: t.height,
            width: t.width,
            ts: n
        })),
        Fy = b(pe.ACTIVATED_STEP_CHILD, (e, t) => ({
            stepChildId: e,
            timestamp: t
        })),
        Hy = b(pe.DEACTIVATED_STEP_CHILD),
        Tn = b(pe.SET_CURRENT_STEP_CHILD),
        My = b(pe.CLEAR_CURRENT_STEP_CHILD),
        $y = b(pe.SET_CURRENT_STEP),
        Za = b(pe.ADVANCE_STEP_CHILD, (e, t, n, r, i = !1) => ({
            contentType: e,
            step: t,
            childId: n,
            nextChildId: r,
            shouldEndFlow: i
        })),
        By = b(pe.RUN_PREV_STEP_CHILD, (e, t) => ({
            step: e,
            stepChildId: t
        })),
        Wy = b(pe.CLOSE_STEP, (e, t) => ({
            flowId: e,
            stepId: t
        })),
        en = b(pe.CLOSE_FLOW, (e, t) => ({
            flowId: e,
            type: t
        })),
        Vy = b(pe.CANCEL_STEP, (e, t) => ({
            flowId: e,
            stepId: t
        })),
        eu = b(pe.SET_PREVIOUS_ACTIVE_ELEMENT, e => ({
            element: e
        })),
        Gy = b(pe.SET_FORCE_FOCUS, e => ({
            forceFocus: e
        })),
        tu = b(pe.SET_NEXT_CONTENT_ID_COOKIE, e => ({
            nextContentId: e
        })),
        gs = b(pe.CLEAR_CONTENT_STATE_CHILD),
        jy = b(Ti.PREPARE_MODAL),
        qy = b(Ti.RESIZE_MODAL_CONTENT, (e, t) => ({
            id: e,
            height: t.height,
            width: t.width
        }));

    function _e(e, t, n) {
        return {
            type: e,
            params: {
                stepId: t,
                ...n
            }
        }
    }

    function mt(e, t, n, r) {
        return _e(e, t, {
            stepChildId: n,
            ...r
        })
    }

    function tn(e, t, n, r, i = {}) {
        return mt(Y.STEP_INTERACTED, e, t, {
            interactionType: "click",
            interaction: {
                category: n,
                destination: r,
                ...i
            }
        })
    }
    const Ky = (e, t) => n => {
        e(fe(mt(Y.CHILD_DEACTIVATED, ue(t()), n, {
            ts: Date.now()
        })))
    };

    function nu(e, t, n, r = {}) {
        return tn(ue(e), t, "internal", n, r)
    }

    function Oi(e, t) {
        const n = Ky(e, t);
        return {
            onContentChange(r, i) {
                Bo(i) && e(Uy(r, i.getBoundingClientRect(), Nr()))
            },
            onShow() {
                const r = t();
                e(sr(ue(r))), e(fe(_e(Y.STEP_SHOWN, ue(r))))
            },
            onCSSLoaded(r, i, o = !0) {
                if (o) {
                    const s = t();
                    e(Dy(r)), e(fe(_e(Y.CSS_LOADED, ue(s))))
                } else if (ue(t()) === r) {
                    const s = new Error("Failed to load CSS.");
                    s.extra = {
                        url: i
                    }, e(sr(s)), e(fe(_e(Y.STEP_ERRORED, r, {
                        error: s,
                        details: JSON.stringify({
                            url: i
                        })
                    })))
                }
            },
            onStepChildActivated(r) {
                e(fe(mt(Y.CHILD_ACTIVATED, ue(t()), r, {
                    ts: Date.now()
                })))
            },
            onStepChildDeactivated: n,
            onComplete(r) {
                const i = t(),
                    o = at(i),
                    s = {
                        text: Ot(r)
                    };
                e(fe(nu(i, o, "end", s))), n(o), e(fe(_e(Y.STEP_COMPLETED, ue(t())))), e(fe(_e(Y.STEP_END, ue(i))))
            },
            onCompleteFlow(r) {
                const i = t(),
                    o = at(i),
                    s = {
                        text: Ot(r)
                    };
                e(fe(nu(i, o, "end-flow", s))), n(o), e(fe(_e(Y.STEP_COMPLETED, ue(t()), {
                    shouldEndFlow: !0
                }))), e(fe(_e(Y.STEP_END, ue(i), {
                    shouldEndFlow: !0
                })))
            },
            onSkip() {
                const r = t();
                e(fe(mt(Y.STEP_SKIPPED, ue(r), at(r))))
            },
            onLinkClick(r, i, o) {
                e(fe(tn(ue(t()), r, "link", i, o)))
            },
            onHandleUserEvent(r, i = {}) {
                e(Ne({}, [Rt(r, i)], !0))
            },
            onHandleProfileUpdate(r) {
                const i = r;
                i.userId && delete i.userId;
                const o = we(t()).userId || null;
                oe.defined(o) && e(or(o, i))
            },
            onSetNextContentIdCookie(r) {
                e(tu(r))
            }
        }
    }

    function Yy(e) {
        return e === "" || !oe.defined(e)
    }

    function zy(e, {
        value: t,
        minSelection: n,
        maxSelection: r,
        required: i
    }) {
        switch (e) {
            case "number":
                return /^\d+$/.test(t) || "This field should be a number.";
            case "date":
                return /^\d{4}(?:-\d{1,2}){2}$/.test(t) || "Please enter a valid date.";
            case "email":
                return /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/.test(t) || "This field should be an email address.";
            case "tel":
                return /^(?!\b(0)\1+\b)(\+?\d{1,3}[ .-]?)?\(?\d{3}\)?([ .-]?)\d{3}\3\d{4}$/.test(t) || "This field should be a phone number.";
            case "url":
                return /^(?:https?:\/\/)?[\d.a-z-]+\.[.a-z]{2,6}(?:[\w ./-]*)*\/?(?:\?[\w&/=-]*)?(?:#[\w/-]*)?$/.test(t) || "This field should be a URL.";
            case "checkbox":
                {
                    if (t) {
                        const o = t.split(`
`),
                            s = Number.parseInt(n, 10),
                            c = Number.parseInt(r, 10);
                        if (!i && o.length > c) return `Select a maximum of ${c} items`;
                        if (s > o.length && s > 0 || o.length > c) return `Select between ${s} and ${c} items`
                    }
                    return !0
                }
            default:
                return !0
        }
    }

    function ru(e) {
        const t = [];
        return e.forEach(n => {
            const r = [],
                i = Yy(n.value);
            n.required && i && r.push("This field is required.");
            const o = n.validation,
                s = zy(o, n);
            s !== !0 && (o !== "date" && (!i || i && n.required) || o === "date" && i && !n.required) && r.push(s), r.length > 0 && t.push({
                fieldId: n.fieldId,
                messages: r
            })
        }), t.length > 0 ? {
            result: !1,
            errors: t
        } : {
            result: !0
        }
    }

    function ys(e, t, n, r = {}) {
        return tn(ue(e), t, "internal", n, r)
    }

    function Xy(e) {
        const t = e.querySelectorAll("input, textarea, select"),
            n = [];
        for (const r of t) r.type.search(/^(?:checkbox|radio)$/) > -1 ? r.checked && n.push(r) : n.push(r);
        return n
    }
    const Jy = e => e.length > 1 ? e.map(t => t.value).join(`
`) : e[0] ? .value || null;

    function Qy(e, t) {
        const n = Oi(e, t);

        function r(i, o) {
            const s = t(),
                c = {
                    text: Ot(i)
                };
            e(fe(ys(s, o, "next", c))), n.onStepChildDeactivated(o);
            const l = Yc(s, o);
            l && (e(Tn(l)), n.onStepChildActivated(l))
        }
        return {
            onSkip: n.onSkip,
            onStepChildActivated: n.onStepChildActivated,
            onStepChildDeactivated: n.onStepChildDeactivated,
            onCSSLoaded: n.onCSSLoaded,
            onHandleUserEvent: n.onHandleUserEvent,
            onHandleProfileUpdate: n.onHandleProfileUpdate,
            onCompleteFlow: n.onCompleteFlow,
            onComplete: n.onComplete,
            onSetNextContentIdCookie: n.onSetNextContentIdCookie,
            onNextStep: r,
            onShow() {
                n.onShow(), n.onStepChildActivated(at(t()))
            },
            onFormSubmission(i, o, s, c, l = !1, a = !1) {
                const d = o.map((m, p) => {
                        const E = Xy(m) || {},
                            h = m.querySelector(".form-field");
                        let y = null,
                            I = !1,
                            S = null;
                        h && (y = h.getAttribute("data-appcues-validation"), I = h.getAttribute("data-appcues-required") === "true", S = h.getAttribute("data-custom-reporting-label"), (!S || S === "undefined") && (S = null));
                        const T = m.querySelector(".field-label label"),
                            v = h.getAttribute("data-min-selection"),
                            _ = h.getAttribute("data-max-selection");
                        let N = E[0] ? .name ? ? null,
                            L = null;
                        const R = T ? .textContent ? .trim() === "*" ? null : T ? .textContent;
                        if ((m.getAttribute("data-form-field") || !N) && (N = m.getAttribute("data-field-id")), T && R) L = R, N = N || T.getAttribute("for");
                        else {
                            const [, O] = (h.getAttribute("class") || "").split(" ");
                            L = O.replace("form-field-", ""), O.includes("radio") && h.querySelector(".rating-options") && (L = L.replace("radio", "rating")), L += `-${m.getAttribute("data-field-id")}`
                        }
                        return {
                            required: I,
                            validation: y,
                            fieldId: N,
                            label: L,
                            value: Jy(E),
                            formFieldIndex: p,
                            customReportingLabel: S,
                            minSelection: v,
                            maxSelection: _
                        }
                    }),
                    f = () => {
                        if (c) n.onComplete();
                        else if (s) s();
                        else {
                            const m = at(t());
                            r(null, m)
                        }
                    };
                if (a) {
                    (ru(d).result || l) && s();
                    return
                }
                e(Lm(i, d, f, l))
            },
            onPrevStep(i, o) {
                const s = t(),
                    c = {
                        text: Ot(i)
                    };
                e(fe(ys(s, o, "previous", c))), n.onStepChildDeactivated(o);
                const l = bo(s, o);
                l && (e(Tn(l)), n.onStepChildActivated(l))
            },
            onJumpStep(i, o, s) {
                const c = t(),
                    l = {
                        text: Ot(i)
                    };
                e(fe(ys(c, o, `step_${s}`, l))), n.onStepChildDeactivated(o);
                const a = oi(c, s);
                a && (e(Tn(a)), n.onStepChildActivated(a))
            },
            onLinkClick(i, o, s) {
                const c = {
                    text: Ot(i)
                };
                n.onLinkClick(o, s, c)
            },
            onContentChange(i, o) {
                e(qy(i, o.getBoundingClientRect()))
            }
        }
    }
    const Zy = b(Qt.EXPAND_HOTSPOT),
        eS = b(Qt.PREPARE_HOTSPOTS),
        tS = b(Qt.SET_BEACON_SETTLED, (e, t) => ({
            id: e,
            isBeaconSettled: t
        })),
        ki = b(Qt.CLOSE_LAST_HOTSPOT, (e, t, n = {}) => ({
            stepId: e,
            childId: t,
            params: n
        })),
        nS = b(Ee.ADD_ACTIVE_ANNOTATIONS),
        rS = b(Ee.REMOVE_ACTIVE_ANNOTATIONS),
        Ss = b(Ee.HIDE_AND_REMOVE_ACTIVE_ANNOTATIONS),
        iS = b(Ee.SET_ACTIVE_ANNOTATIONS_WILL_CLOSE),
        oS = b(Ee.START_CALCULATE_POSITIONS),
        iu = b(Ee.START_HANDLE_POSITION_UPDATES),
        sS = b(Ee.SET_ANNOTATIONS_POSITIONS),
        cS = b(Ee.SET_ANNOTATIONS_READY),
        ou = b(Ee.SET_IS_SCROLLING_TO_ANNOTATION, (e, t) => ({
            annotationId: e,
            isScrolling: t
        })),
        lS = b(Ee.SAVE_POSITION_DETAILS),
        aS = b(Ee.REPORTED_ANNOTATIONS_ERRORS),
        uS = b(Ee.REPORTED_ANNOTATIONS_RECOVERY),
        dS = b(Ee.SET_EXISTING_ANNOTATIONS_ERRORS),
        fS = b(Ee.SET_TOOLTIP_SETTLED, (e, t) => ({
            id: e,
            isTooltipSettled: t
        })),
        pS = b(Ee.GO_TO_STEP, (e, t, n) => ({
            stepId: e,
            currentStepChildId: t,
            nextStepChildIndex: n
        }));

    function su(e, t) {
        const n = Oi(e, t);

        function r() {
            const s = t(),
                c = at(s);
            return c && wo(s, c) ? c : null
        }

        function i(s) {
            s && (e(Ss([s])), e(My()), n.onStepChildDeactivated(s))
        }
        const o = (s = {}) => () => {
            const c = r(),
                l = ue(t());
            e(fe(_e(Y.STEP_COMPLETED, l, s))), i(c), oe.defined(c) && e(ki(l, c, s))
        };
        return {
            onSkip: n.onSkip,
            onLinkClick: n.onLinkClick,
            onCSSLoaded: n.onCSSLoaded,
            onContentChange: n.onContentChange,
            onShow: n.onShow,
            onHandleUserEvent: n.onHandleUserEvent,
            onHandleProfileUpdate: n.onHandleProfileUpdate,
            onSetNextContentIdCookie: n.onSetNextContentIdCookie,
            onActivate(s) {
                e(Zy(s)), n.onStepChildActivated(s), e(ou(s, !1))
            },
            onBeaconClick(s, c, l, a) {
                const d = r(),
                    f = d !== s,
                    m = ue(t());
                f && e(fe(tn(m, s, "beacon", s))), i(d), f ? (e(Tn(s)), this.onActivate(s), setTimeout(() => {
                    n.onContentChange(s, c)
                }, 50), a && e(fe(_e(Y.STEP_COMPLETED, ue(t()))))) : l && e(ki(m, d))
            },
            onClickOut(s) {
                const c = r();
                i(c), s && oe.defined(c) && e(ki(ue(t()), c))
            },
            onComplete: o({
                shouldEndFlow: !1
            }),
            onCompleteFlow: o({
                shouldEndFlow: !0
            })
        }
    }

    function hS(e, t) {
        const n = su(e, t),
            r = Oi(e, t),
            i = (o, s = {}) => (c, l) => {
                const a = t(),
                    d = ue(a),
                    f = Qe(a),
                    m = d ? lt(f, d) : null,
                    p = {
                        text: Ot(c)
                    };
                e(fe(tn(d, l, "internal", o, p))), e(Za(X.SEQUENTIAL_HOTSPOTS, m, l, null, s.shouldEndFlow))
            };
        return {
            onSkip: r.onSkip,
            onLinkClick: r.onLinkClick,
            onCSSLoaded: r.onCSSLoaded,
            onContentChange: r.onContentChange,
            onHandleUserEvent: r.onHandleUserEvent,
            onHandleProfileUpdate: r.onHandleProfileUpdate,
            onSetNextContentIdCookie: r.onSetNextContentIdCookie,
            onShow: () => {},
            onNextButtonClick(o, s, c) {
                const l = t(),
                    a = ue(l),
                    d = {
                        text: Ot(o)
                    };
                e(fe(tn(a, s, "internal", c ? "end" : "next", d))), e(fe(mt(Y.CHILD_NEXT, a, s)))
            },
            onComplete: i("end", {
                shouldEndFlow: !1
            }),
            onCompleteFlow: i("end-flow", {
                shouldEndFlow: !0
            }),
            onFirstInsert(o, s) {
                s && r.onShow(), n.onActivate(o)
            },
            onPrevButtonClick(o, s) {
                const c = t(),
                    l = ue(c),
                    a = {
                        text: Ot(o)
                    };
                e(fe(tn(l, s, "internal", "previous", a))), e(By(l, s))
            },
            onJumpStep: (o, s, c) => {
                const l = t(),
                    a = ue(l),
                    d = {
                        text: Ot(o)
                    };
                e(fe(tn(a, s, "internal", `step_${c}`, d))), e(pS(a, s, c))
            },
            onHandleBlur(o, s) {
                e(Gy(o.target === s))
            }
        }
    }
    const mS = b(Ae.PREPARE_SATISFACTION_SURVEY),
        ES = b(Ae.START_COLLAPSING_SATISFACTION_SURVEY),
        cu = b(Ae.COLLAPSE_SATISFACTION_SURVEY),
        gS = b(Ae.EXPAND_SATISFACTION_SURVEY),
        lu = b(Ae.SHOW_SATISFACTION_SURVEY_TOAST),
        au = b(Ae.HIDE_SATISFACTION_SURVEY_TOAST),
        yS = b(Ae.QUANTITATIVE_QUESTION_SUBMITTED, e => ({
            score: e
        })),
        SS = b(Ae.CLICKED_UPDATE_NPS_SCORE),
        TS = b(Ae.QUALITATIVE_QUESTION_SUBMITTED, e => ({
            feedback: e
        })),
        CS = b(Ae.FEEDBACK_TEXT_CHANGED, e => ({
            feedback: e
        })),
        _S = b(Ae.ASK_ME_LATER_SELECTED);

    function IS(e, t) {
        const n = Oi(e, t);

        function r(h) {
            const y = t(),
                I = Yc(y, h);
            I && e(Tn(I))
        }

        function i(h) {
            e(yS(h))
        }

        function o(h) {
            e(TS(h))
        }

        function s(h) {
            e(CS(h))
        }

        function c() {
            e(_S())
        }

        function l() {
            e(cu())
        }

        function a() {
            e(ES())
        }

        function d() {
            e(gS())
        }

        function f() {
            e(lu())
        }

        function m() {
            e(au())
        }

        function p(h) {
            const y = t(),
                I = bo(y, h);
            I && (Bc(Te(y), I).step_type === "quantitative-question" && e(SS()), e(Tn(I)))
        }

        function E() {
            n.onShow(), n.onStepChildActivated(at(t()))
        }
        return {
            onShow: E,
            onNextStep: r,
            onPrevStep: p,
            onStartCollapsing: a,
            onCollapse: l,
            onExpand: d,
            onShowToast: f,
            onHideToast: m,
            onQuantitativeQuestionSubmitted: i,
            onQualitativeQuestionSubmitted: o,
            onFeedbackTextChanged: s,
            onAskMeLaterSelected: c,
            onSkip: n.onSkip,
            onStepChildActivated: n.onStepChildActivated,
            onStepChildDeactivated: n.onStepChildDeactivated,
            onLinkClick: n.onLinkClick,
            onCSSLoaded: n.onCSSLoaded
        }
    }
    const uu = b(ce.START_CHECKLIST),
        Cn = b(ce.SET_CHECKLIST_STATUS, (e, t) => ({
            id: e,
            status: t
        })),
        du = b(ce.UPDATE_CHECKLISTS),
        Ri = b(ce.HIDE_CHECKLISTS),
        Lr = b(ce.UNHIDE_CHECKLISTS),
        fu = b(ce.ANIMATE_IN_CHECKLIST),
        Pr = b(ce.EXPAND_CHECKLIST, e => ({
            checklistId: e
        })),
        _n = b(ce.COLLAPSE_CHECKLIST, e => ({
            checklistId: e
        })),
        pu = b(ce.SET_EXPAND_CHECKLIST_LATER, (e, t) => ({
            checklistId: e,
            shouldTryExpandChecklist: t
        })),
        vS = b(ce.SHOW_DISMISS_CONFIRMATION, e => ({
            checklistId: e
        })),
        AS = b(ce.CANCEL_DISMISS_CONFIRMATION, e => ({
            checklistId: e
        })),
        bS = b(ce.CONFIRM_DISMISS_CHECKLIST, (e, t, n) => ({
            checklistId: e,
            checklistName: t,
            didCompleteChecklist: n
        })),
        wS = b(ce.LOADED_CHECKLIST_CSS, e => ({
            checklistId: e
        })),
        hu = b(ce.SEND_CHECKLIST_ERROR),
        mu = b(ce.START_CHECKLIST_ITEM, (e, t, n = 0, r = {}) => ({
            checklistId: e,
            itemId: t,
            actionIndex: n,
            checklist: r
        })),
        NS = b(ce.START_CHECKLIST_ACTION, (e, t, n, r) => ({
            action: e,
            checklistId: t,
            itemId: n,
            actionIndex: r
        })),
        Ts = b(ce.COMPLETED_CHECKLIST_ACTION, (e, t, n) => ({
            checklistId: e,
            itemId: t,
            actionIndex: n
        })),
        OS = b(ce.SET_CHECKLIST_HEIGHT, (e, t) => ({
            checklistId: e,
            height: t
        })),
        kS = b(ce.SET_CHECKLIST_WIDTH, (e, t) => ({
            checklistId: e,
            width: t
        })),
        RS = b(ce.CLEAR_FORCE_SHOWN_CHECKLIST),
        Eu = b(ce.SEND_CHECKLIST_SHOWN_EVENT, e => ({
            checklist: e
        }));

    function LS(e, t) {
        let n = !1;
        return {
            onBeaconClicked(r) {
                const i = t(),
                    o = pn(i, r);
                o.viewState === Yt.EXPANDED ? e(_n(r)) : (e(Pr(r)), o.attributes.open_behavior === "closed" && !n && (n = !0, e(Eu(o))))
            },
            onOutsideClicked(r) {
                const i = t();
                pn(i, r).viewState === Yt.EXPANDED && e(_n(r))
            },
            onItemClicked(r, i) {
                e(mu(r, i))
            },
            onDismissClicked(r) {
                e(vS(r))
            },
            onDismissCanceled(r) {
                e(AS(r))
            },
            onDismissConfirmed(r, i, o = !1) {
                e(bS(r, i, o))
            },
            onMinimizedClicked(r) {
                e(_n(r))
            },
            onCSSLoaded(r, i, o = !0) {
                if (o) e(wS(r));
                else {
                    const s = new Error(`Failed to load CSS for checklist ${r}`);
                    s.extra = {
                        url: i
                    }, e(hu(s))
                }
            },
            onExpandChecklistResize(r, i) {
                e(OS(r, i))
            },
            onCollapseBeaconResize(r, i) {
                e(kS(r, i))
            }
        }
    }

    function PS(e) {
        return {
            onCancelClicked() {
                e({
                    type: ir.CANCEL_TEST
                })
            },
            onResetClicked() {
                e({
                    type: ir.RESET_TEST
                })
            },
            onCssLoaded() {
                e({
                    type: ir.LOADED_TEST_MODE_CSS
                })
            }
        }
    }
    const xS = b(kt.LOADED_LAUNCHPAD, ({
            selector: e,
            position: t,
            header: n,
            footer: r,
            icon: i
        }) => ({
            selector: e,
            position: t,
            header: n,
            footer: r,
            icon: i
        })),
        DS = b(kt.UPDATED_WIDGET_HISTORY, e => ({
            history: e
        })),
        US = b(kt.UPDATED_WIDGET_FLOWS, e => ({
            flows: e
        })),
        Cs = b(kt.TOGGLED_WIDGET, e => ({
            expanded: e
        }));

    function FS(e, t) {
        function n() {
            if (Oo(t())) {
                e(Cs(!1));
                const i = {
                    id: "widget_closed",
                    timestamp: Date.now()
                };
                e(He("widget_closed", i)), e(Ne({}, [qe(i)], !1))
            }
        }

        function r() {
            if (Oo(t())) {
                e(Cs(!1));
                const i = {
                    id: "widget_closed",
                    timestamp: Date.now()
                };
                e(He("widget_closed", i)), e(Ne({}, [qe(i)], !1))
            } else {
                e(Cs(!0));
                const i = {
                    id: "widget_opened",
                    timestamp: Date.now()
                };
                e(He("widget_opened", i)), e(Ne({}, [qe(i)], !1))
            }
        }
        return {
            onClose: n,
            onToggled: r,
            onItemClicked(i, o, s) {
                r(), i.preventDefault(), i.stopPropagation();
                try {
                    window.Appcues.show(o);
                    const c = {
                        id: "widget_item_clicked",
                        flowId: o,
                        hasBeenSeen: s,
                        timestamp: Date.now()
                    };
                    e(He("widget_item_clicked", c)), e(Ne({}, [qe(c)], !1))
                } catch (c) {
                    bt(t())(c, {
                        extra: c.extra
                    })
                }
            }
        }
    }

    function HS({
        settings: e,
        sagas: t,
        onStateChange: n
    }) {
        const r = em(),
            i = Sm(),
            o = yg({
                orderedContent: [],
                content: {},
                currentContent: null,
                session: {},
                settings: e,
                transport: {
                    initialized: !1
                },
                user: {},
                views: {
                    callbacks: {},
                    renderers: {}
                },
                reporter: null,
                styles: {},
                tasks: {},
                test: {},
                widget: {}
            }, t);
        if (o.dispatch(Jl({
                [X.MODAL]: Qy(o.dispatch, o.getState),
                [X.HOTSPOTS]: su(o.dispatch, o.getState),
                [X.SEQUENTIAL_HOTSPOTS]: hS(o.dispatch, o.getState),
                [X.SATISFACTION_SURVEY]: IS(o.dispatch, o.getState),
                [X.CHECKLIST]: LS(o.dispatch, o.getState),
                [X.TEST_MODE]: PS(o.dispatch, o.getState),
                [X.WIDGET]: FS(o.dispatch, o.getState)
            })), o.dispatch(Wm({
                [X.MODAL]: Qg,
                [X.HOTSPOTS]: vy,
                [X.SATISFACTION_SURVEY]: Py
            })), o.subscribe(() => {
                const s = o.getState();
                switch (Ge(s)) {
                    case Q.PENDING:
                        o.dispatch(wm());
                        break;
                    case Q.ERROR:
                        o.dispatch(ea()), o.dispatch(ql(window.location.href, !1, null));
                        break
                }
                r(s), i(s), n && n(s)
            }), yr(document)) o.dispatch(ra());
        else {
            const s = () => {
                yr(document) && (o.dispatch(ra()), document.removeEventListener("readystatechange", s))
            };
            document.addEventListener("readystatechange", s)
        }
        return o
    }
    var xr = e => typeof e == "function" ? e : function() {
            return e
        },
        MS = typeof self < "u" ? self : null,
        Dr = typeof window < "u" ? window : null,
        In = MS || Dr || In,
        $S = "2.0.0",
        Lt = {
            connecting: 0,
            open: 1,
            closing: 2,
            closed: 3
        },
        BS = 1e4,
        WS = 1e3,
        dt = {
            closed: "closed",
            errored: "errored",
            joined: "joined",
            joining: "joining",
            leaving: "leaving"
        },
        Wt = {
            close: "phx_close",
            error: "phx_error",
            join: "phx_join",
            reply: "phx_reply",
            leave: "phx_leave"
        },
        _s = {
            longpoll: "longpoll",
            websocket: "websocket"
        },
        VS = {
            complete: 4
        },
        Li = class {
            constructor(e, t, n, r) {
                this.channel = e, this.event = t, this.payload = n || function() {
                    return {}
                }, this.receivedResp = null, this.timeout = r, this.timeoutTimer = null, this.recHooks = [], this.sent = !1
            }
            resend(e) {
                this.timeout = e, this.reset(), this.send()
            }
            send() {
                this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                    topic: this.channel.topic,
                    event: this.event,
                    payload: this.payload(),
                    ref: this.ref,
                    join_ref: this.channel.joinRef()
                }))
            }
            receive(e, t) {
                return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
                    status: e,
                    callback: t
                }), this
            }
            reset() {
                this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1
            }
            matchReceive({
                status: e,
                response: t,
                _ref: n
            }) {
                this.recHooks.filter(r => r.status === e).forEach(r => r.callback(t))
            }
            cancelRefEvent() {
                this.refEvent && this.channel.off(this.refEvent)
            }
            cancelTimeout() {
                clearTimeout(this.timeoutTimer), this.timeoutTimer = null
            }
            startTimeout() {
                this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, e => {
                    this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = e, this.matchReceive(e)
                }), this.timeoutTimer = setTimeout(() => {
                    this.trigger("timeout", {})
                }, this.timeout)
            }
            hasReceived(e) {
                return this.receivedResp && this.receivedResp.status === e
            }
            trigger(e, t) {
                this.channel.trigger(this.refEvent, {
                    status: e,
                    response: t
                })
            }
        },
        gu = class {
            constructor(e, t) {
                this.callback = e, this.timerCalc = t, this.timer = null, this.tries = 0
            }
            reset() {
                this.tries = 0, clearTimeout(this.timer)
            }
            scheduleTimeout() {
                clearTimeout(this.timer), this.timer = setTimeout(() => {
                    this.tries = this.tries + 1, this.callback()
                }, this.timerCalc(this.tries + 1))
            }
        },
        GS = class {
            constructor(e, t, n) {
                this.state = dt.closed, this.topic = e, this.params = xr(t || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new Li(this, Wt.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new gu(() => {
                    this.socket.isConnected() && this.rejoin()
                }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(this.socket.onOpen(() => {
                    this.rejoinTimer.reset(), this.isErrored() && this.rejoin()
                })), this.joinPush.receive("ok", () => {
                    this.state = dt.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(r => r.send()), this.pushBuffer = []
                }), this.joinPush.receive("error", () => {
                    this.state = dt.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                }), this.onClose(() => {
                    this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`), this.state = dt.closed, this.socket.remove(this)
                }), this.onError(r => {
                    this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, r), this.isJoining() && this.joinPush.reset(), this.state = dt.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                }), this.joinPush.receive("timeout", () => {
                    this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout), new Li(this, Wt.leave, xr({}), this.timeout).send(), this.state = dt.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout()
                }), this.on(Wt.reply, (r, i) => {
                    this.trigger(this.replyEventName(i), r)
                })
            }
            join(e = this.timeout) {
                if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
                return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush
            }
            onClose(e) {
                this.on(Wt.close, e)
            }
            onError(e) {
                return this.on(Wt.error, t => e(t))
            }
            on(e, t) {
                let n = this.bindingRef++;
                return this.bindings.push({
                    event: e,
                    ref: n,
                    callback: t
                }), n
            }
            off(e, t) {
                this.bindings = this.bindings.filter(n => !(n.event === e && (typeof t > "u" || t === n.ref)))
            }
            canPush() {
                return this.socket.isConnected() && this.isJoined()
            }
            push(e, t, n = this.timeout) {
                if (t = t || {}, !this.joinedOnce) throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
                let r = new Li(this, e, function() {
                    return t
                }, n);
                return this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r
            }
            leave(e = this.timeout) {
                this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = dt.leaving;
                let t = () => {
                        this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(Wt.close, "leave")
                    },
                    n = new Li(this, Wt.leave, xr({}), e);
                return n.receive("ok", () => t()).receive("timeout", () => t()), n.send(), this.canPush() || n.trigger("ok", {}), n
            }
            onMessage(e, t, n) {
                return t
            }
            isMember(e, t, n, r) {
                return this.topic !== e ? !1 : r && r !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
                    topic: e,
                    event: t,
                    payload: n,
                    joinRef: r
                }), !1) : !0
            }
            joinRef() {
                return this.joinPush.ref
            }
            rejoin(e = this.timeout) {
                this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = dt.joining, this.joinPush.resend(e))
            }
            trigger(e, t, n, r) {
                let i = this.onMessage(e, t, n, r);
                if (t && !i) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
                let o = this.bindings.filter(s => s.event === e);
                for (let s = 0; s < o.length; s++) o[s].callback(i, n, r || this.joinRef())
            }
            replyEventName(e) {
                return `chan_reply_${e}`
            }
            isClosed() {
                return this.state === dt.closed
            }
            isErrored() {
                return this.state === dt.errored
            }
            isJoined() {
                return this.state === dt.joined
            }
            isJoining() {
                return this.state === dt.joining
            }
            isLeaving() {
                return this.state === dt.leaving
            }
        },
        Pi = class {
            static request(e, t, n, r, i, o, s) {
                if (In.XDomainRequest) {
                    let c = new In.XDomainRequest;
                    return this.xdomainRequest(c, e, t, r, i, o, s)
                } else {
                    let c = new In.XMLHttpRequest;
                    return this.xhrRequest(c, e, t, n, r, i, o, s)
                }
            }
            static xdomainRequest(e, t, n, r, i, o, s) {
                return e.timeout = i, e.open(t, n), e.onload = () => {
                    let c = this.parseJSON(e.responseText);
                    s && s(c)
                }, o && (e.ontimeout = o), e.onprogress = () => {}, e.send(r), e
            }
            static xhrRequest(e, t, n, r, i, o, s, c) {
                return e.open(t, n, !0), e.timeout = o, e.setRequestHeader("Content-Type", r), e.onerror = () => c && c(null), e.onreadystatechange = () => {
                    if (e.readyState === VS.complete && c) {
                        let l = this.parseJSON(e.responseText);
                        c(l)
                    }
                }, s && (e.ontimeout = s), e.send(i), e
            }
            static parseJSON(e) {
                if (!e || e === "") return null;
                try {
                    return JSON.parse(e)
                } catch {
                    return null
                }
            }
            static serialize(e, t) {
                let n = [];
                for (var r in e) {
                    if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
                    let i = t ? `${t}[${r}]` : r,
                        o = e[r];
                    typeof o == "object" ? n.push(this.serialize(o, i)) : n.push(encodeURIComponent(i) + "=" + encodeURIComponent(o))
                }
                return n.join("&")
            }
            static appendParams(e, t) {
                if (Object.keys(t).length === 0) return e;
                let n = e.match(/\?/) ? "&" : "?";
                return `${e}${n}${this.serialize(t)}`
            }
        },
        jS = e => {
            let t = "",
                n = new Uint8Array(e),
                r = n.byteLength;
            for (let i = 0; i < r; i++) t += String.fromCharCode(n[i]);
            return btoa(t)
        },
        Ur = class {
            constructor(e) {
                this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = new Set, this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {}, this.onerror = function() {}, this.onmessage = function() {}, this.onclose = function() {}, this.pollEndpoint = this.normalizeEndpoint(e), this.readyState = Lt.connecting, setTimeout(() => this.poll(), 0)
            }
            normalizeEndpoint(e) {
                return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + _s.websocket), "$1/" + _s.longpoll)
            }
            endpointURL() {
                return Pi.appendParams(this.pollEndpoint, {
                    token: this.token
                })
            }
            closeAndRetry(e, t, n) {
                this.close(e, t, n), this.readyState = Lt.connecting
            }
            ontimeout() {
                this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1)
            }
            isActive() {
                return this.readyState === Lt.open || this.readyState === Lt.connecting
            }
            poll() {
                this.ajax("GET", "application/json", null, () => this.ontimeout(), e => {
                    if (e) {
                        var {
                            status: t,
                            token: n,
                            messages: r
                        } = e;
                        this.token = n
                    } else t = 0;
                    switch (t) {
                        case 200:
                            r.forEach(i => {
                                setTimeout(() => this.onmessage({
                                    data: i
                                }), 0)
                            }), this.poll();
                            break;
                        case 204:
                            this.poll();
                            break;
                        case 410:
                            this.readyState = Lt.open, this.onopen({}), this.poll();
                            break;
                        case 403:
                            this.onerror(403), this.close(1008, "forbidden", !1);
                            break;
                        case 0:
                        case 500:
                            this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
                            break;
                        default:
                            throw new Error(`unhandled poll status ${t}`)
                    }
                })
            }
            send(e) {
                typeof e != "string" && (e = jS(e)), this.currentBatch ? this.currentBatch.push(e) : this.awaitingBatchAck ? this.batchBuffer.push(e) : (this.currentBatch = [e], this.currentBatchTimer = setTimeout(() => {
                    this.batchSend(this.currentBatch), this.currentBatch = null
                }, 0))
            }
            batchSend(e) {
                this.awaitingBatchAck = !0, this.ajax("POST", "application/x-ndjson", e.join(`
`), () => this.onerror("timeout"), t => {
                    this.awaitingBatchAck = !1, !t || t.status !== 200 ? (this.onerror(t && t.status), this.closeAndRetry(1011, "internal server error", !1)) : this.batchBuffer.length > 0 && (this.batchSend(this.batchBuffer), this.batchBuffer = [])
                })
            }
            close(e, t, n) {
                for (let i of this.reqs) i.abort();
                this.readyState = Lt.closed;
                let r = Object.assign({
                    code: 1e3,
                    reason: void 0,
                    wasClean: !0
                }, {
                    code: e,
                    reason: t,
                    wasClean: n
                });
                this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", r)) : this.onclose(r)
            }
            ajax(e, t, n, r, i) {
                let o, s = () => {
                    this.reqs.delete(o), r()
                };
                o = Pi.request(e, this.endpointURL(), t, n, this.timeout, s, c => {
                    this.reqs.delete(o), this.isActive() && i(c)
                }), this.reqs.add(o)
            }
        },
        xi = {
            HEADER_LENGTH: 1,
            META_LENGTH: 4,
            KINDS: {
                push: 0,
                reply: 1,
                broadcast: 2
            },
            encode(e, t) {
                if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e)); {
                    let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
                    return t(JSON.stringify(n))
                }
            },
            decode(e, t) {
                if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e)); {
                    let [n, r, i, o, s] = JSON.parse(e);
                    return t({
                        join_ref: n,
                        ref: r,
                        topic: i,
                        event: o,
                        payload: s
                    })
                }
            },
            binaryEncode(e) {
                let {
                    join_ref: t,
                    ref: n,
                    event: r,
                    topic: i,
                    payload: o
                } = e, s = this.META_LENGTH + t.length + n.length + i.length + r.length, c = new ArrayBuffer(this.HEADER_LENGTH + s), l = new DataView(c), a = 0;
                l.setUint8(a++, this.KINDS.push), l.setUint8(a++, t.length), l.setUint8(a++, n.length), l.setUint8(a++, i.length), l.setUint8(a++, r.length), Array.from(t, f => l.setUint8(a++, f.charCodeAt(0))), Array.from(n, f => l.setUint8(a++, f.charCodeAt(0))), Array.from(i, f => l.setUint8(a++, f.charCodeAt(0))), Array.from(r, f => l.setUint8(a++, f.charCodeAt(0)));
                var d = new Uint8Array(c.byteLength + o.byteLength);
                return d.set(new Uint8Array(c), 0), d.set(new Uint8Array(o), c.byteLength), d.buffer
            },
            binaryDecode(e) {
                let t = new DataView(e),
                    n = t.getUint8(0),
                    r = new TextDecoder;
                switch (n) {
                    case this.KINDS.push:
                        return this.decodePush(e, t, r);
                    case this.KINDS.reply:
                        return this.decodeReply(e, t, r);
                    case this.KINDS.broadcast:
                        return this.decodeBroadcast(e, t, r)
                }
            },
            decodePush(e, t, n) {
                let r = t.getUint8(1),
                    i = t.getUint8(2),
                    o = t.getUint8(3),
                    s = this.HEADER_LENGTH + this.META_LENGTH - 1,
                    c = n.decode(e.slice(s, s + r));
                s = s + r;
                let l = n.decode(e.slice(s, s + i));
                s = s + i;
                let a = n.decode(e.slice(s, s + o));
                s = s + o;
                let d = e.slice(s, e.byteLength);
                return {
                    join_ref: c,
                    ref: null,
                    topic: l,
                    event: a,
                    payload: d
                }
            },
            decodeReply(e, t, n) {
                let r = t.getUint8(1),
                    i = t.getUint8(2),
                    o = t.getUint8(3),
                    s = t.getUint8(4),
                    c = this.HEADER_LENGTH + this.META_LENGTH,
                    l = n.decode(e.slice(c, c + r));
                c = c + r;
                let a = n.decode(e.slice(c, c + i));
                c = c + i;
                let d = n.decode(e.slice(c, c + o));
                c = c + o;
                let f = n.decode(e.slice(c, c + s));
                c = c + s;
                let m = e.slice(c, e.byteLength),
                    p = {
                        status: f,
                        response: m
                    };
                return {
                    join_ref: l,
                    ref: a,
                    topic: d,
                    event: Wt.reply,
                    payload: p
                }
            },
            decodeBroadcast(e, t, n) {
                let r = t.getUint8(1),
                    i = t.getUint8(2),
                    o = this.HEADER_LENGTH + 2,
                    s = n.decode(e.slice(o, o + r));
                o = o + r;
                let c = n.decode(e.slice(o, o + i));
                o = o + i;
                let l = e.slice(o, e.byteLength);
                return {
                    join_ref: null,
                    ref: null,
                    topic: s,
                    event: c,
                    payload: l
                }
            }
        },
        qS = class {
            constructor(e, t = {}) {
                this.stateChangeCallbacks = {
                    open: [],
                    close: [],
                    error: [],
                    message: []
                }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = t.timeout || BS, this.transport = t.transport || In.WebSocket || Ur, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = t.longPollFallbackMs, this.fallbackTimer = null, this.sessionStore = t.sessionStorage || In && In.sessionStorage, this.establishedConnections = 0, this.defaultEncoder = xi.encode.bind(xi), this.defaultDecoder = xi.decode.bind(xi), this.closeWasClean = !1, this.disconnecting = !1, this.binaryType = t.binaryType || "arraybuffer", this.connectClock = 1, this.transport !== Ur ? (this.encode = t.encode || this.defaultEncoder, this.decode = t.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
                let n = null;
                Dr && Dr.addEventListener && (Dr.addEventListener("pagehide", r => {
                    this.conn && (this.disconnect(), n = this.connectClock)
                }), Dr.addEventListener("pageshow", r => {
                    n === this.connectClock && (n = null, this.connect())
                })), this.heartbeatIntervalMs = t.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = r => t.rejoinAfterMs ? t.rejoinAfterMs(r) : [1e3, 2e3, 5e3][r - 1] || 1e4, this.reconnectAfterMs = r => t.reconnectAfterMs ? t.reconnectAfterMs(r) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][r - 1] || 5e3, this.logger = t.logger || null, !this.logger && t.debug && (this.logger = (r, i, o) => {}), this.longpollerTimeout = t.longpollerTimeout || 2e4, this.params = xr(t.params || {}), this.endPoint = `${e}/${_s.websocket}`, this.vsn = t.vsn || $S, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new gu(() => {
                    this.teardown(() => this.connect())
                }, this.reconnectAfterMs)
            }
            getLongPollTransport() {
                return Ur
            }
            replaceTransport(e) {
                this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = e
            }
            protocol() {
                return location.protocol.match(/^https/) ? "wss" : "ws"
            }
            endPointURL() {
                let e = Pi.appendParams(Pi.appendParams(this.endPoint, this.params()), {
                    vsn: this.vsn
                });
                return e.charAt(0) !== "/" ? e : e.charAt(1) === "/" ? `${this.protocol()}:${e}` : `${this.protocol()}://${location.host}${e}`
            }
            disconnect(e, t, n) {
                this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
                    this.disconnecting = !1, e && e()
                }, t, n)
            }
            connect(e) {
                e && (this.params = xr(e)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Ur ? this.connectWithFallback(Ur, this.longPollFallbackMs) : this.transportConnect())
            }
            log(e, t, n) {
                this.logger && this.logger(e, t, n)
            }
            hasLogger() {
                return this.logger !== null
            }
            onOpen(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.open.push([t, e]), t
            }
            onClose(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.close.push([t, e]), t
            }
            onError(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.error.push([t, e]), t
            }
            onMessage(e) {
                let t = this.makeRef();
                return this.stateChangeCallbacks.message.push([t, e]), t
            }
            ping(e) {
                if (!this.isConnected()) return !1;
                let t = this.makeRef(),
                    n = Date.now();
                this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: t
                });
                let r = this.onMessage(i => {
                    i.ref === t && (this.off([r]), e(Date.now() - n))
                });
                return !0
            }
            transportConnect() {
                this.connectClock++, this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = e => this.onConnError(e), this.conn.onmessage = e => this.onConnMessage(e), this.conn.onclose = e => this.onConnClose(e)
            }
            getSession(e) {
                return this.sessionStore && this.sessionStore.getItem(e)
            }
            storeSession(e, t) {
                this.sessionStore && this.sessionStore.setItem(e, t)
            }
            connectWithFallback(e, t = 2500) {
                clearTimeout(this.fallbackTimer);
                let n = !1,
                    r = !0,
                    i, o, s = c => {
                        this.log("transport", `falling back to ${e.name}...`, c), this.off([i, o]), r = !1, this.replaceTransport(e), this.transportConnect()
                    };
                if (this.getSession(`phx:fallback:${e.name}`)) return s("memorized");
                this.fallbackTimer = setTimeout(s, t), o = this.onError(c => {
                    this.log("transport", "error", c), r && !n && (clearTimeout(this.fallbackTimer), s(c))
                }), this.onOpen(() => {
                    if (n = !0, !r) return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${e.name}`, "true"), this.log("transport", `established ${e.name} fallback`);
                    clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(s, t), this.ping(c => {
                        this.log("transport", "connected to primary after", c), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer)
                    })
                }), this.transportConnect()
            }
            clearHeartbeats() {
                clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer)
            }
            onConnOpen() {
                this.hasLogger() && this.log("transport", `${this.transport.name} connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(([, e]) => e())
            }
            heartbeatTimeout() {
                this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.triggerChanError(), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS, "heartbeat timeout"))
            }
            resetHeartbeat() {
                this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs))
            }
            teardown(e, t, n) {
                if (!this.conn) return e && e();
                let r = this.connectClock;
                this.waitForBufferDone(() => {
                    r === this.connectClock && (this.conn && (t ? this.conn.close(t, n || "") : this.conn.close()), this.waitForSocketClosed(() => {
                        r === this.connectClock && (this.conn && (this.conn.onopen = function() {}, this.conn.onerror = function() {}, this.conn.onmessage = function() {}, this.conn.onclose = function() {}, this.conn = null), e && e())
                    }))
                })
            }
            waitForBufferDone(e, t = 1) {
                if (t === 5 || !this.conn || !this.conn.bufferedAmount) {
                    e();
                    return
                }
                setTimeout(() => {
                    this.waitForBufferDone(e, t + 1)
                }, 150 * t)
            }
            waitForSocketClosed(e, t = 1) {
                if (t === 5 || !this.conn || this.conn.readyState === Lt.closed) {
                    e();
                    return
                }
                setTimeout(() => {
                    this.waitForSocketClosed(e, t + 1)
                }, 150 * t)
            }
            onConnClose(e) {
                let t = e && e.code;
                this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), this.clearHeartbeats(), !this.closeWasClean && t !== 1e3 && this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(([, n]) => n(e))
            }
            onConnError(e) {
                this.hasLogger() && this.log("transport", e);
                let t = this.transport,
                    n = this.establishedConnections;
                this.stateChangeCallbacks.error.forEach(([, r]) => {
                    r(e, t, n)
                }), (t === this.transport || n > 0) && this.triggerChanError()
            }
            triggerChanError() {
                this.channels.forEach(e => {
                    e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(Wt.error)
                })
            }
            connectionState() {
                switch (this.conn && this.conn.readyState) {
                    case Lt.connecting:
                        return "connecting";
                    case Lt.open:
                        return "open";
                    case Lt.closing:
                        return "closing";
                    default:
                        return "closed"
                }
            }
            isConnected() {
                return this.connectionState() === "open"
            }
            remove(e) {
                this.off(e.stateChangeRefs), this.channels = this.channels.filter(t => t !== e)
            }
            off(e) {
                for (let t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(([n]) => e.indexOf(n) === -1)
            }
            channel(e, t = {}) {
                let n = new GS(e, t, this);
                return this.channels.push(n), n
            }
            push(e) {
                if (this.hasLogger()) {
                    let {
                        topic: t,
                        event: n,
                        payload: r,
                        ref: i,
                        join_ref: o
                    } = e;
                    this.log("push", `${t} ${n} (${o}, ${i})`, r)
                }
                this.isConnected() ? this.encode(e, t => this.conn.send(t)) : this.sendBuffer.push(() => this.encode(e, t => this.conn.send(t)))
            }
            makeRef() {
                let e = this.ref + 1;
                return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
            }
            sendHeartbeat() {
                this.pendingHeartbeatRef && !this.isConnected() || (this.pendingHeartbeatRef = this.makeRef(), this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef,
                    join_ref: ""
                }), this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs))
            }
            flushSendBuffer() {
                this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()), this.sendBuffer = [])
            }
            onConnMessage(e) {
                this.decode(e.data, t => {
                    let {
                        topic: n,
                        event: r,
                        payload: i,
                        ref: o,
                        join_ref: s
                    } = t;
                    o && o === this.pendingHeartbeatRef && (this.clearHeartbeats(), this.pendingHeartbeatRef = null, this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs)), this.hasLogger() && this.log("receive", `${i.status||""} ${n} ${r} ${o&&"("+o+")"||""}`, i);
                    for (let c = 0; c < this.channels.length; c++) {
                        const l = this.channels[c];
                        l.isMember(n, r, i, s) && l.trigger(r, i, o, s)
                    }
                    for (let c = 0; c < this.stateChangeCallbacks.message.length; c++) {
                        let [, l] = this.stateChangeCallbacks.message[c];
                        l(t)
                    }
                })
            }
            leaveOpenTopic(e) {
                let t = this.channels.find(n => n.topic === e && (n.isJoined() || n.isJoining()));
                t && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${e}"`), t.leave())
            }
        };

    function Di() {
        let e = Date.now();
        return typeof Date.now() != "number" && (e = new Date().getTime()), window.performance && oe.function(window.performance.now) && (e += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, n => {
            const r = Math.trunc((e + Math.random() * 16) % 16);
            return e = Math.floor(e / 16), (n === "x" ? r : r & 3 | 8).toString(16)
        })
    }

    function KS(e, t, n = {}) {
        return new Promise((r, i) => {
            const o = new XMLHttpRequest;
            o.addEventListener("readystatechange", ({
                currentTarget: s
            }) => {
                const c = s || o;
                if (c.readyState === 4) switch (c.status) {
                    case 200:
                        try {
                            r(JSON.parse(c.responseText))
                        } catch (l) {
                            i(l)
                        }
                        break;
                    case 404:
                        r(null);
                        break;
                    default:
                        {
                            const l = new Error(`${c.status} ${c.statusText}`);l.extra = {
                                url: t,
                                response: c.responseText
                            },
                            i(l)
                        }
                }
            }), o.open(e, t), n.headers && Object.entries(n.headers).forEach(([s, c]) => o.setRequestHeader(s, c)), o.send()
        })
    }

    function vn(e, t) {
        return KS("GET", e, t)
    }
    const Is = e => t => {
            const n = Array.isArray(t) ? [] : {};
            let r, i, o;
            for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (r = e[i], o = typeof r, n[i] = o === "function" ? r(t[i]) : r && o === "object" ? Is(r)(t[i]) : t[i]);
            return n
        },
        YS = e => t => t.map(e),
        zS = (e, t, n) => n ? t.reduce((r, i) => r[i] || e, n) : e,
        cr = e => e.split("?")[0],
        XS = Is({
            attributes: {
                url: cr,
                _identity: {
                    _lastPageUrl: cr,
                    _currentPageUrl: cr
                }
            },
            context: {
                url: cr
            }
        }),
        JS = Is({
            profile_update: {
                _lastPageUrl: cr,
                _currentPageUrl: cr
            },
            events: YS(XS)
        }),
        QS = (e, t) => zS(!1, ["account", "stripQueryParams"], e) ? JS(t) : t,
        Fr = D(() => window.AppcuesBundleSettings.API_HOSTNAME && `https://${window.AppcuesBundleSettings.API_HOSTNAME}/v1`, "https://api.appcues.net/v1"),
        ZS = D(() => window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN && `${window.AppcuesBundleSettings.GENERIC_BUNDLE_DOMAIN}/v1`, "https://fast.appcues.com/v1"),
        Hr = () => {
            const e = window[Xi] || {};
            let t = {};
            return e.userIdSignature && (t = {
                Authorization: `Bearer ${e.userIdSignature}`
            }), t
        },
        Mr = {
            UserActivity: "USER_ACTIVITY"
        };

    function eT(e, t, n, r) {
        return new Promise((i, o) => {
            try {
                n.create(e, t, r, (s, c) => {
                    c ? o(c) : i(s)
                })
            } catch (s) {
                o(s)
            }
        })
    }

    function vs(e) {
        return e.transport.module.isConfigured(e)
    }

    function tT(e) {
        return new Promise((t, n) => {
            e.transport.module.configure(e, (r, i) => {
                i ? n(i) : t(r)
            })
        })
    }

    function yu(e, t, n, r = "event") {
        return new Promise((i, o) => {
            try {
                e.transport.module.send(e, t, n, (s, c) => {
                    c ? o(c) : i(s)
                }, r)
            } catch (s) {
                o(s)
            }
        })
    }
    const nT = (e, t, n) => yu(e, Mr.UserActivity, n, t);

    function Su(e, t, n, r, i = null, o = null, s = null, c = {}) {
        const l = r ? Di() : null;
        return yu(e, Mr.UserActivity, QS(window.AppcuesBundleSettings, {
            source: "web",
            request_id: l,
            user_id: e.user.userId,
            group_id: i,
            session_id: o,
            account_id: e.settings.accountId,
            profile_update: t,
            group_update: s,
            events: n,
            context: c
        })).then(() => l)
    }

    function Tu(e, t) {
        return e.transport.module.sendMetrics(e, Mr.UserActivity, t)
    }

    function Cu(e, t) {
        const {
            settings: {
                accountId: n
            },
            user: {
                userId: r,
                _localId: i
            }
        } = e;
        return vn(`${Fr()}/accounts/${encodeURIComponent(n)}/users/${encodeURIComponent(r||i)}/content/${encodeURIComponent(t)}`, {
            headers: Hr()
        })
    }

    function rT(e, t) {
        const {
            settings: {
                accountId: n
            },
            user: {
                userId: r,
                _localId: i
            }
        } = e;
        return vn(`${Fr()}/accounts/${encodeURIComponent(n)}/users/${encodeURIComponent(r||i)}/experience_content/${encodeURIComponent(t)}`, {
            headers: Hr()
        })
    }

    function iT(e, t) {
        const {
            settings: {
                accountId: n
            },
            user: {
                userId: r,
                _localId: i
            }
        } = e;
        return vn(`${Fr()}/accounts/${encodeURIComponent(n)}/users/${encodeURIComponent(r||i)}/checklist/${encodeURIComponent(t)}`, {
            headers: Hr()
        })
    }

    function _u(e, t) {
        if (window.AppcuesBundleSettings ? .ASSETS_PATH) {
            const n = xl(window.AppcuesBundleSettings.ASSETS_PATH);
            return vn(`${n}/themes/${encodeURIComponent(t)}.json`)
        }
        return vn(`${ZS()}/accounts/${encodeURIComponent(e.settings.accountId)}/styles/${encodeURIComponent(t)}`)
    }

    function oT(e) {
        const {
            userId: t,
            _localId: n
        } = we(e);
        return vn(`${Fr()}/accounts/${encodeURIComponent(e.settings.accountId)}/users/${encodeURIComponent(t||n)}/history`, {
            headers: Hr()
        })
    }

    function sT(e) {
        const {
            userId: t,
            _localId: n
        } = we(e);
        return vn(`${Fr()}/accounts/${encodeURIComponent(e.settings.accountId)}/users/${encodeURIComponent(t||n)}/widget?url=${encodeURIComponent(window.location.href)}`, {
            headers: Hr()
        })
    }
    const cT = "access forbidden",
        lT = "unauthorized",
        aT = D(() => window.AppcuesBundleSettings.API_HOSTNAME && `wss://${window.AppcuesBundleSettings.API_HOSTNAME}/v1/socket`, "wss://api.appcues.net/v1/socket"),
        As = [{
            endpoint: Mr.UserActivity,
            name: e => `sdk:${e.settings.accountId}:${e.user.userId}`
        }];

    function Ui(e, t) {
        let n;
        for (const r of As)
            if (r.endpoint === t) {
                n = r;
                break
            }
        try {
            return e.transport.details.channels[n.name(e)]
        } catch {
            return null
        }
    }

    function uT(e, t) {
        let n = null;
        return e && e.channels && e.channels.forEach(r => {
            r.topic === t && (n = r)
        }), n
    }

    function Iu(e) {
        window.APPCUES_TEST_IDENTITY_VERIFICATION && window.console.log(`Appcues Identity Verification Test: ${e}`)
    }

    function dT(e, t, n, r) {
        function i() {
            const o = window[Xi] || {},
                s = {
                    response_format: r
                };
            return window.APPCUES_TEST_IDENTITY_VERIFICATION || o.userIdSignature !== void 0 && o.userIdSignature !== null ? { ...s,
                token: o.userIdSignature || ""
            } : s
        }
        return new Promise((o, s) => {
            let c = uT(t, n);

            function l(a, d) {
                a.receive("ok", () => {
                    a.channel.state !== "errored" ? (Iu("Succeeded - sent update to API using User ID Signature"), o({
                        topic: n,
                        channel: a.channel
                    })) : s(new Error("Channel is in an errored state."))
                }).receive("error", f => {
                    if (f === cT || f === lT) {
                        const {
                            token: m
                        } = i();
                        Iu(`Failed - ${m?`invalid User ID Signature ${m}`:"no User ID Signature present"}`), !a.channel.isLeaving() && !a.channel.isClosed() && a.channel.leave(), d && d()
                    } else s(new Error(f))
                })
            }
            c && c.canPush() ? o({
                topic: n,
                channel: c
            }) : c && !c.canPush() ? l(c.joinPush, () => {
                l(t.channel(n, i).join())
            }) : (c = t.channel(n, i), l(c.join()))
        })
    }
    const fT = {
            create: (e, t, n, r) => {
                const i = new qS(aT(), {
                    reportError: n
                });
                i.onOpen(() => {
                    r({
                        type: "WS",
                        details: {
                            socket: i,
                            onMessage: e,
                            onTimeout: t
                        }
                    })
                }), i.onError(() => {
                    r(null, new Error("Error connecting to WebSocket."))
                }), i.connect()
            },
            send: (e, t, n, r, i = "event") => {
                const o = Ui(e, t);
                if (o && o.canPush()) o.push(i, n).receive("ok", s => e.transport.details.onMessage({
                    request_id: n.request_id,
                    type: i,
                    ...s
                })).receive("timeout", () => e.transport.details.onTimeout(n.request_id)).receive("error", s => e.transport.details.onMessage({
                    request_id: n.request_id,
                    type: i,
                    status: "error",
                    ...s
                })), r(n);
                else {
                    const s = new Error("Channel was not configured.");
                    s.extra = {
                        endpoint: t,
                        message: n
                    }, r(null, s)
                }
            },
            subscribeToError: (e, t, n) => {
                Ui(t, n).onError(e)
            },
            sendMetrics: (e, t, n) => {
                const r = Ui(e, t);
                r && r.canPush() && r.push("sdk_metrics", n)
            },
            isConfigured: e => As.every(t => {
                const n = Ui(e, t.endpoint);
                return n ? n.canPush() : !1
            }),
            configure: (e, t) => {
                const n = Jf(e);
                n.isConnected() || n.connect();
                const r = Wf(e) ? "v2" : "v1";
                return Promise.all(As.map(i => dT(e.transport, n, i.name(e), r))).then(i => {
                    const o = {};
                    i.forEach(s => {
                        o[s.topic] = s.channel
                    }), t({
                        channels: o
                    })
                }, i => {
                    t(null, i)
                })
            }
        },
        Xe = {
            init: () => "apc_init",
            request: e => `apc_req_start_${e}`,
            attempt: e => `apc_attempted_${e}`,
            response: e => `apc_resp_end_${e}`,
            render: e => `apc_rendered_${e}`,
            css: e => `apc_css_loaded_${e}`,
            shown: e => `apc_shown_${e}`
        },
        vu = "apc_flow_performance";

    function An(e) {
        try {
            document.visibilityState === "visible" && window.performance.mark(e)
        } catch {}
    }

    function bn(e, t) {
        try {
            return window.performance.measure(vu, {
                start: e,
                end: t,
                detail: `${e} to ${t}`
            }).duration
        } catch {
            return Number.NaN
        }
    }
    const pT = () => An(Xe.init()),
        hT = e => An(Xe.request(e)),
        mT = e => An(Xe.response(e)),
        ET = e => An(Xe.attempt(e)),
        gT = e => An(Xe.render(e)),
        yT = e => An(Xe.css(e)),
        ST = e => An(Xe.shown(e));

    function TT(e) {
        return !(e.css_load_time < 0 || ["api_response_duration", "time_to_attempt", "time_to_render", "css_load_time", "time_to_reveal", "time_to_show"].some(n => Number.isNaN(e[n])))
    }

    function CT(e) {
        try {
            Object.values(Xe).forEach(t => {
                window.performance.clearMarks(t(e))
            }), window.performance.clearMeasures(vu)
        } catch {}
    }

    function _T(e, t) {
        try {
            const n = Xe.request(e),
                r = Xe.response(e),
                i = Xe.attempt(e),
                o = Xe.render(e),
                s = Xe.css(e),
                c = Xe.shown(e);
            let l = Number.NaN;
            try {
                l = bn(0, Xe.init())
            } catch {}
            const a = { ...Number.isNaN(l) ? {} : {
                    init_time: l
                },
                api_response_duration: bn(n, r),
                time_to_attempt: bn(r, i),
                time_to_render: bn(i, o),
                css_load_time: bn(o, s),
                time_to_reveal: bn(s, c),
                time_to_show: bn(n, c),
                step_type: t,
                request_id: e
            };
            return CT(e), TT(a) ? a : null
        } catch {
            return null
        }
    }

    function IT(e) {
        return {
            onMessage(t) {
                t.request_id && mT(t.request_id), e.dispatch(Cm(t))
            },
            onTimeout(t) {
                e.dispatch(_m(t))
            }
        }
    }

    function vT(e, t) {
        return () => {}
    }
    const AT = b(ze.TOGGLE_ROW_DETAILS),
        bT = b(ze.TOGGLE_COLLAPSED),
        wT = b(ze.SET_CURRENT_PAGE),
        Au = b(ze.TRACK_PAGE),
        NT = b(ze.ADD_CONTENT_ERROR, (e, t) => ({
            contentId: e,
            errorMessage: t
        })),
        OT = b(ze.ADD_CHILD_ERROR, (e, t, n) => ({
            contentId: e,
            childId: t,
            errorMessage: n
        })),
        bu = b(ze.CLOSE_DEBUGGER),
        kT = b(et.PAUSE_EXPERIENCE),
        RT = b(et.RESUME_EXPERIENCE),
        bs = b(et.SHOW_EXPERIENCES),
        $r = b(et.SAVE_ON_HOLD_LAUNCHPADS),
        Br = b(et.UNHIDE_LAUNCHPADS),
        wu = b(et.HIDE_LAUNCHPADS),
        Nu = "EVENTS_TRIGGERED",
        LT = b(Nu),
        ws = b(Tt.SET_SESSION),
        Ns = b(Tt.START_SESSION),
        PT = b(Tt.SESSION_STARTED);

    function* Ou() {
        let e = null;
        try {
            const t = yield A(Ye);
            e = yield g(oT, t)
        } catch (t) {
            const n = yield A(bt);
            yield g(n, t, {
                extra: t.extra
            })
        }
        e && (yield C(DS(e.journeys)))
    }

    function* ku() {
        let e = null;
        try {
            const t = yield A(Ye);
            e = yield g(sT, t)
        } catch (t) {
            const n = yield A(bt);
            yield g(n, t, {
                extra: t.extra
            })
        }
        e && (yield C(US(e.contents)))
    }

    function* xT() {
        yield F(re, kt.LOADED_LAUNCHPAD, Ou), yield F(re, kt.LOADED_LAUNCHPAD, ku)
    }

    function Me(e, t, n) {
        try {
            window[e].setItem(t, n)
        } catch {}
    }

    function Re(e, t) {
        try {
            return window[e].getItem(t)
        } catch {
            return null
        }
    }

    function Fe(e, t) {
        try {
            window[e].removeItem(t)
        } catch {}
    }

    function DT(e, t) {
        try {
            Object.keys(window[e]).forEach(r => {
                r.startsWith(t) && window[e].removeItem(r)
            })
        } catch {}
    }

    function UT(e) {
        return X.ANNOTATION.includes(e)
    }

    function* Fi() {
        const e = yield g(Re, xe, qr);
        try {
            return JSON.parse(e)
        } catch {
            return null
        }
    }

    function FT(e, t, n, r) {
        let i = e;
        return (i /= r / 2) < 1 ? n / 2 * i * i + t : -n / 2 * (--i * (i - 2) - 1) + t
    }

    function* HT(e, t) {
        if (window.document ? .documentMode) {
            const n = e,
                r = n.scrollTop;
            if (r !== t) {
                const i = yield g(vh, t, r);
                let o = 0;
                for (; o < i;) o += nc, n.scrollTop = FT(Math.min(o, i), r, t - r, i), yield g(be, nc)
            }
            return !0
        }
        return e.scroll({
            top: t,
            behavior: "smooth"
        }), !0
    }

    function* MT(e, t, n, r) {
        for (;;) {
            const i = kl(e, t, n);
            if (i.some((s, c) => s.scrollTop !== r[c].scrollTop)) return i;
            yield g(be, 200)
        }
    }

    function* $T(e, t, n, r) {
        const i = [];
        if (r.every(s => s.visibleInContainer)) return {
            doneScrolling: r.map(() => !0)
        };
        for (const {
                el: s,
                scrollTop: c
            } of r) i.push(g(HT, s, c));
        return yield We({
            doneScrolling: i,
            scrollTargetsChanged: g(MT, e, t, n, r)
        })
    }

    function* BT({
        payload: e
    }) {
        yield C(iS(e)), yield g(be, so), yield C(rS(e))
    }

    function* WT(e) {
        const t = yield* Fi();
        yield g(Me, xe, qr, JSON.stringify({ ...t,
            ...e
        }))
    }

    function* Ru(e, t, n) {
        if (Object.keys(e).length > 0) {
            const r = yield A(si), i = Object.keys(e).filter(o => !r[o] || !r[o].errorReported);
            if (i.length > 0) {
                const o = {};
                i.forEach(s => {
                    o[s] = e[s]
                }), yield C(fe(_e(Y.CHILDREN_ERRORED, t, {
                    errors: o
                }), n)), yield C(aS(i)), yield g(WT, i.reduce((s, c) => ({ ...s,
                    [c]: {
                        ts: Date.now()
                    }
                }), {}))
            }
        }
    }

    function* VT(e) {
        const t = yield* Fi();
        t && Object.keys(t).length > 0 && (e.forEach(n => {
            delete t[n]
        }), yield g(Me, xe, qr, JSON.stringify(t)))
    }

    function* GT(e) {
        const t = yield A(si), r = Object.keys(t).filter(i => t[i].errorReported || t[i].existingError).filter(i => e[i] && !e[i].error && t[i] && !t[i].recoveryReported);
        if (r.length > 0) {
            const i = yield A(ue);
            yield C(fe(_e(Y.CHILDREN_RECOVERED, i, {
                children: r
            }))), yield C(uS(r)), yield g(VT, r)
        }
    }

    function* jT() {
        let e, t = Nr();
        for (;
            (e = yield A(Ge)) && e !== Q.ERROR;) {
            const n = yield A(Ze), r = yield A(Nt), o = (yield n.map(c => g(Nl, (r[c.id] || {}).element || null, Co(c)))).reduce((c, l, a) => (c[n[a].id] = l, c), {});
            let s = !1;
            if (Object.keys(o).forEach(c => {
                    const l = o[c],
                        {
                            _prevPosition: a
                        } = r[c] || {};
                    Nh(l, a || {}) || (s = !0)
                }), s) {
                yield C(iu(o)), yield C(lS(o)), t = Nr();
                const c = Object.keys(o).filter(a => o[a].error).reduce((a, d) => Object.assign(a, {
                        [d]: o[d].errorMessage
                    }), {}),
                    l = yield A(ue);
                yield g(Ru, c, l), yield g(GT, o)
            } else {
                const c = Nr();
                c - t > 1e3 && (yield C(iu(o)), t = c);
                for (const l in r)
                    if (Object.prototype.hasOwnProperty.call(r, l)) {
                        const a = r[l];
                        if (a.isBeaconSettled || c - a.lastRepositionedTs > on && (yield C(tS(l, !0))), a.expanded && !a.isTooltipSettled) {
                            const d = c - a.lastResizeTs > on,
                                f = c - a.lastExpandedTs > tf;
                            (d || f) && (yield C(fS(l, !0)))
                        }
                    }
            }
            yield g(be, on)
        }
    }

    function* qT() {
        const e = yield A(Ge);
        oe.inArray([Q.READY, Q.WILL_SHOW, Q.SHOWING, Q.WILL_CLOSE], e) || (yield C(cS()))
    }

    function* KT() {
        const e = yield* Fi();
        if (e) {
            const t = Date.now(),
                n = Object.keys(e).reduce((r, i) => (e[i].ts + Kd > t && (r[i] = e[i]), r), {});
            yield g(Me, xe, qr, JSON.stringify(n))
        }
    }

    function* YT(e) {
        let t = yield A(Nt);
        const n = yield A(Ze);
        let r = t[e] || {};
        const i = ct(n, p => p.id === e);
        let {
            element: o,
            error: s
        } = r;
        const {
            offset_y_percentage: c
        } = i, l = 1 - Number.parseFloat(c);
        for (; !o || s;) yield j(Ee.SET_ANNOTATIONS_POSITIONS), t = yield A(Nt), r = t[e] || {}, o = r.element, s = r.error;
        const a = yield g(wh, o);
        if (pi(o)) {
            if (window.document ? .documentMode) return;
            setTimeout(() => {
                o.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }, 0);
            return
        }
        let f = yield g(kl, o, l, a), m = {};
        for (; !m.doneScrolling;) m = yield g($T, o, l, a, f), f = m.scrollTargetsChanged
    }

    function* zT({
        payload: e
    }) {
        UT(e.type) && (yield C(Pm(ua(rc.CALCULATE, e.id))))
    }

    function* XT() {
        const e = (yield g(Fi)) || {};
        Object.keys(e).length > 0 && (yield C(dS(e)))
    }

    function* JT({
        payload: e
    }) {
        let t = yield A(Kn);
        const {
            annotationId: n,
            isScrolling: r
        } = e;
        if (r) yield C({
            type: Ee.CONFIRM_SCROLLING,
            payload: r
        });
        else {
            for (; t.length > 1 && t[0] !== n;) yield g(be, 200), t = yield A(Kn);
            yield g(be, so), yield C({
                type: Ee.CONFIRM_SCROLLING,
                payload: !1
            })
        }
    }

    function* QT() {
        yield [F(re, W.CLEANUP_STEP, zT), F(da, Ee.START_CALCULATE_POSITIONS, jT, function*() {
            const e = yield A(ue);
            return ua(rc.CALCULATE, e)
        }), F(re, Ee.SET_IS_SCROLLING_TO_ANNOTATION, JT), F(re, Ee.HIDE_AND_REMOVE_ACTIVE_ANNOTATIONS, BT), F(KT), F(XT)]
    }

    function Lu(e) {
        const t = {};
        if (e) {
            const n = e.replace(/^\?/, "").split("&");
            for (let r = 0, i = n.length; r < i; r++) {
                const o = n[r].split("=");
                try {
                    t[o[0]] = decodeURIComponent(o[1])
                } catch {
                    const [, s] = o;
                    t[o[0]] = s
                }
            }
        }
        return t
    }

    function Pu(e) {
        return Lu(e.location.search).appcuesTestContentId || null
    }

    function Wr(e, t = "appcue") {
        return Lu(e.location.search)[t] || null
    }

    function wn(e, t = "appcue") {
        if (!e) return e;
        const n = new RegExp(`(\\?)?(&)?((?:${t})=[^&#]+)(&)?`);
        return e.replace(n, (r, i, o, s, c) => i && c ? "?" : o && c ? "&" : "")
    }
    const ZT = e => ["Enter", " "].includes(e.key);

    function* xu(e) {
        const t = yield e.map(r => g(Nl, null, r)), n = t.filter(r => r.error);
        return n.length === t.length ? {
            result: !1,
            failures: n.map(r => r.errorMessage)
        } : {
            result: !0
        }
    }

    function* eC(e) {
        for (; !(yield g(xu, e)).result;) yield g(be, on);
        return {
            result: !0
        }
    }

    function* tC(e, t, n = null) {
        const {
            promise: r,
            listener: i
        } = yield g(Fh, e, t, n);
        let o, s;
        try {
            o = yield g(() => r), s = !0
        } finally {
            return !s && i && (yield Qr()) && (yield g([e, e.removeEventListener], t, i)), o
        }
    }

    function Hi(e, t = null, n = null) {
        return {
            result: e,
            task: t,
            failures: n
        }
    }

    function* nC(e) {
        const {
            result: t,
            failures: n
        } = yield g(xu, e);
        if (t) return Hi(!0);
        const r = yield At(eC, e);
        return Hi(!1, r, n)
    }

    function* Du(e, t, n) {
        let r, i;
        for (;;) try {
            const o = yield g($o, t);
            if (o.error) yield g(be, on);
            else {
                if ((r !== o || !i) && (i && (yield st(i)), r = o, i = yield F(tC, r, e, n)), i && i.result()) return {
                    result: !0
                };
                const {
                    eventOccurred: s
                } = yield We({
                    timeout: g(be, on),
                    eventOccurred: cn(i)
                });
                if (s) return {
                    result: !0
                }
            }
        } catch {
            yield g(be, on)
        }
    }

    function* rC(e) {
        return (yield We([g(Du, e.params.event, e.params.selector), g(Du, "keydown", e.params.selector, ZT)])).find(n => n && n.result)
    }

    function* Uu(e) {
        switch (e ? e.type : null) {
            case Mn.WAIT_FOR_ONE_ELEMENT:
                return yield g(nC, e.params.selectors);
            case Mn.WAIT_FOR_MOUSE_EVENT:
                {
                    const n = yield At(rC, e);
                    return Hi(!1, n)
                }
            default:
                return Hi(!0)
        }
    }

    function* iC(e, t, ...n) {
        const {
            result: r,
            task: i
        } = yield g(Uu, e);
        let o = r;
        if (!r && i) try {
            o = (yield cn(i)).result
        } finally {
            i.isRunning() && (yield Qr()) && (yield st(i))
        }
        o && (yield At(t, ...n))
    }

    function oC(e, t, n) {
        return {
            type: e,
            params: t,
            context: n
        }
    }

    function Os(e, t) {
        return oC(Mn.WAIT_FOR_ONE_ELEMENT, {
            selectors: e
        }, t)
    }

    function sC(e) {
        let t = "unknown",
            n = {};
        switch (e.type) {
            case Mn.WAIT_FOR_MOUSE_EVENT:
                t = e.params.event, n = {
                    category: "element",
                    element: e.params.selector
                };
                break;
            case Mn.WAIT_FOR_ONE_ELEMENT:
                t = "ui_modified", n = {
                    category: "insertion",
                    elements: e.params.selectors
                };
                break
        }
        return {
            interactionType: t,
            interaction: n
        }
    }

    function* Et(e, t) {
        for (const n of t) yield C(He(e, n));
        yield C(Ne({}, t.map(n => qe(n))))
    }

    function* Fu(e, t, n) {
        const r = yield* Vt();
        yield* Pt({ ...r,
            flowId: e.id,
            stepId: t.id,
            status: n
        })
    }

    function* cC(...e) {
        for (const t of e) yield C(fe(t))
    }

    function* lC(e, t, n) {
        (yield j(({
            type: i,
            payload: o
        }) => i === pe.ACTIVATED_STEP_CHILD && o.stepChildId === n.id || i === pe.CLOSE_FLOW && o.flowId === e.id)).type === pe.ACTIVATED_STEP_CHILD && (yield We({
            wait: g(iC, n.ui_conditions.next, cC, mt(Y.STEP_INTERACTED, t.id, n.id, sC(n.ui_conditions.next)), mt(Y.CHILD_NEXT, t.id, n.id)),
            cancel: j(({
                type: i,
                payload: o
            }) => i === pe.CLOSE_FLOW && o.flowId === e.id)
        }))
    }

    function Hu(e, t) {
        return t ? { ...e,
            _sdkMetrics: t
        } : e
    }

    function* aC(e, t, n) {
        const r = yield A(wt);
        for (;;) {
            const i = yield j(t), o = i.params || {}, s = o.stepId ? lt(e, o.stepId) : null;
            let c, l;
            const a = s ? (c = Ut(e, 0)) && c.id === s.id : !1,
                f = (s ? (l = Ut(e, $c(e) - 1)) && l.id === s.id : !1) || o.shouldEndFlow;
            switch (i.type) {
                case Y.STEP_ATTEMPTED:
                    if (s && Gn(s)) {
                        if (zt(s)) {
                            const p = [];
                            a && p.push(pa(e, r)), p.push(ha(e, s, r)), yield* Et(e.id, p);
                            const {
                                page_check_limit: E
                            } = s.attributes.params, h = yield* Vt(), {
                                remainingPagesToCheck: y
                            } = h || {};
                            yield* Pt({ ...h,
                                remainingPagesToCheck: typeof y == "number" ? y : typeof E == "number" ? E : ro
                            })
                        }
                        const m = [];
                        a && m.push(RE(e, r)), m.push(UE(e, s, r)), yield* Et(e.id, m), yield* Fu(e, s, Y.STEP_ATTEMPTED)
                    }
                    break;
                case Y.STEP_SHOWN:
                    if (s) {
                        if (Gn(s)) {
                            const m = yield* Vt(), p = a || !m ? Di() : m.submissionId, E = a || !m ? yield g(Wr, window, "appcue"): m.fromPermalink;
                            yield* Pt({ ...m,
                                submissionId: p,
                                status: Y.STEP_SHOWN,
                                fromPermalink: !!E
                            })
                        }
                        a && !xf(s) && n && (yield g(gT, n))
                    }
                    break;
                case Y.STEP_COMPLETED:
                    if (s) {
                        const m = [FE(e, s, r)];
                        if (f && m.push(PE(e, r)), yield* Et(e.id, m), zt(s)) {
                            const p = yield* Vt(), {
                                remainingPagesToCheck: E,
                                navByADTT: h,
                                ...y
                            } = p || {};
                            yield* Pt({ ...y,
                                flowId: e.id,
                                stepId: s.id,
                                status: Y.STEP_COMPLETED
                            })
                        } else yield* Fu(e, s, Y.STEP_COMPLETED)
                    }
                    break;
                case Y.STEP_SKIPPED:
                    s && (yield* Et(e.id, [HE(e, s, o.stepChildId, r), xE(e, o.stepId, r)]), yield* Gt(e, s), yield C(en(e.id, vt.SKIPPED)), yield C(Lr()), yield C(Br()));
                    break;
                case Y.STEP_END:
                    if (s) {
                        const m = yield A(ue);
                        if (m === s.id && (yield* Gt(e, s)), f) yield C(en(e.id, vt.COMPLETED));
                        else {
                            const p = Ut(e, jn(e, s.id) + 1);
                            p.type === X.HOTSPOTS && (yield C(Lr()), yield C(Br())), m === s.id && (yield C(t, _e(Y.STEP_ATTEMPTED, p.id)), yield C(Kl(p, document.location.href)))
                        }
                    }
                    break;
                case Y.STEP_INTERACTED:
                    if (s) {
                        const m = [],
                            p = o.interaction || {};
                        if (o.interactionType === "submit" && p.category === "form") {
                            const E = {
                                category: p.category,
                                formId: p.formId
                            };
                            m.push(ma(e, s, o.stepChildId, "submit", { ...E,
                                response: p.fields
                            }, r), qE(e, s, o.stepChildId, { ...E,
                                submissionId: p.submissionId,
                                response: p.fields
                            }, r), ...p.fields.map(h => KE(e, s, o.stepChildId, { ...E,
                                submissionId: p.submissionId,
                                ...h
                            }, r)))
                        } else m.push(ma(e, s, o.stepChildId, o.interactionType, p, r));
                        yield* Et(e.id, m)
                    }
                    break;
                case Y.STEP_ERRORED:
                    if (s) {
                        const m = [VE(e, s, o.error, o.details, r), ME(e, s, r), DE(e, r)];
                        a && m.splice(1, 0, WE(e, o.error, o.details, r)), yield* Et(e.id, m)
                    }
                    break;
                case Y.CHILD_ACTIVATED:
                    yield C(Fy(o.stepChildId, o.ts)), s && Gn(s) && (yield* Et(e.id, [$E(e, s, o.stepChildId, r)]));
                    break;
                case Y.CHILD_DEACTIVATED:
                    {
                        const {
                            stepChildId: m
                        } = o,
                        p = yield A(zc, m);yield C(Hy(m)),
                        s && Gn(s) && (yield* Et(e.id, [BE(e, s, m, o.ts - p, r)]));
                        break
                    }
                case Y.CHILDREN_ERRORED:
                    {
                        const m = Object.keys(o.errors || {});m.length > 0 && (yield* Et(e.id, m.map(p => GE(e, s, p, o.errors[p], r))));
                        break
                    }
                case Y.CHILDREN_RECOVERED:
                    {
                        const m = o.children || [];m.length > 0 && (yield* Et(e.id, m.map(p => jE(e, s, p, r))));
                        break
                    }
                case Y.CHILD_NEXT:
                    if (s) {
                        const m = un(s, o.stepChildId);
                        let p = null;
                        m > -1 && (p = (To(s, m + 1) || {}).id || null);
                        let E = s.type;
                        E === X.HOTSPOTS && Vn(s) && (E = X.SEQUENTIAL_HOTSPOTS, yield C(ou(p, !0))), yield C(Za(E, s, o.stepChildId, p))
                    }
                    break;
                case Y.CHILD_RUN:
                    {
                        const m = To(s, un(s, o.stepChildId));yield C(Tn(o.stepChildId)),
                        m && m.ui_conditions && m.ui_conditions.next && (yield At(lC, e, s, m));
                        break
                    }
                case Y.CSS_LOADED:
                    {
                        a && n && yT(n);
                        break
                    }
                case Y.STEP_REVEALED:
                    {
                        if (s) {
                            let m = null;
                            a && n && (yield g(ST, n), m = yield g(_T, n, s.type));
                            const p = [];
                            Gn(s) ? (a && p.push(Hu(pa(e, r), m)), p.push(ha(e, s, r)), yield* Et(e.id, p)) : a && (p.push(Hu(LE(e, r), m)), yield* Et(e.id, p))
                        }
                        break
                    }
            }
        }
    }

    function ks(e) {
        Fe("localStorage", e), Fe("localStorage", `${e}_timeout`)
    }

    function Mu(e) {
        if (!e) return !1;
        const t = Re("localStorage", e),
            n = JSON.parse(Re("localStorage", `${e}_timeout`)) ? ? 0;
        return Date.now() > n || !t ? (ks(e), !1) : !0
    }

    function uC(e) {
        return !e || !Mu(e) ? null : Re("localStorage", e)
    }

    function $u(e, t, n) {
        Me("localStorage", e, t), Me("localStorage", `${e}_timeout`, Date.now() + n)
    }

    function* dC(e, t) {
        yield j(n => n.type === pe.CANCEL_STEP && n.payload.flowId === e), yield st(t)
    }

    function* Bu(e, t) {
        const n = yield g(Dt.expanding, 5), r = yield g(ri, n), i = yield At(aC, e, r, t);
        return yield At(dC, e.id, i), r
    }

    function fC(e) {
        if (e.uiConditions && e.uiConditions.start) return e.uiConditions;
        let t;
        switch (e.type) {
            case X.HOTSPOTS:
                {
                    const n = an(e);
                    if (Vn(e)) {
                        const [r] = n;
                        if (r) {
                            const i = [r.id],
                                o = [Co(r)];
                            t = Os(o, {
                                stepChildIds: i
                            })
                        } else t = Os([], {
                            stepChildIds: []
                        })
                    } else {
                        const r = n.reduce((i, o) => [...i, Co(o)], []);
                        t = Os(r, {
                            stepChildIds: n.map(i => i.id)
                        })
                    }
                    break
                }
            case X.MODAL:
            default:
                t = null
        }
        return { ...e.uiConditions,
            start: t
        }
    }

    function* pC(e, t, n, r, i) {
        let o = !1;
        try {
            o = (yield cn(e)).result, o && (yield C(Ii(n, it.FLOWS)), yield C(Zo(n, r, i, t)))
        } finally {
            (yield Qr()) && (yield st(e)), o || (yield C(t, fr))
        }
    }

    function* Mi(e) {
        for (;
            (yield A(Gf, e)).length > 0;) yield j(W.FINISHED_EVENT)
    }

    function* Wu(e, t, n, r, i = !0) {
        const o = yield g(Bu, e, r), s = t ? lt(e, t) : Ut(e, 0);
        Gn(s) && s.attributes.action_type !== gt.WAIT_FOR_PAGE && (yield C(o, _e(Y.STEP_ATTEMPTED, s.id)));
        const l = fC(s).start,
            {
                result: a,
                task: d,
                failures: f
            } = yield g(Uu, l);
        if (a) return yield C(Xm(e.id)), yield C(Ii(e.id, it.FLOWS)), yield C(Zo(e.id, s.id, n, o)), !0;
        const m = (l.context || {}).stepChildIds || [];
        if (f && f.length > 0 && m.length === f.length) {
            const E = f.reduce((h, y, I) => y ? Object.assign(h, {
                [l.context.stepChildIds[I]]: y
            }) : h, {});
            yield g(Ru, E, s.id, o)
        }
        const p = [W.START_FLOW];
        return i !== !1 && p.push(W.CANCEL_ATTEMPTS), yield At(wE, {
            wait: g(pC, d, o, e.id, s.id, n),
            cancel: j(p)
        }), !1
    }

    function* Vu(e, t, n, r) {
        const i = yield g(Bu, e, null);
        yield C(Zo(e.id, t, n, i, r))
    }

    function* hC(e) {
        const {
            flowId: t,
            stepId: n,
            url: r,
            eventChannel: i,
            status: o
        } = e.payload, s = yield A(Io, t), c = lt(s, n);
        c && (c.type === X.HOTSPOTS && (yield C(Lr()), yield C(Br())), yield C(Kl(c, r, o)));
        const {
            payload: l
        } = yield j(a => a.type === pe.CLOSE_FLOW && a.payload.flowId === t);
        yield g(Fe, Ie, Kt), yield C(xm(i)), yield We({
            wait: g(Mi, t),
            cancel: g(be, co)
        }), !s.redirect_url && !s.next_content_id && (yield C(Lr()), yield C(Br())), l.type === vt.COMPLETED && (s.redirect_url ? (s.next_content_id && (yield g($u, Dn, s.next_content_id, ic)), yield g(Zt, window, s.redirect_url, s.redirect_new_tab)) : s.next_content_id && (yield C(_r(s.next_content_id))))
    }

    function* Vt() {
        try {
            return JSON.parse(yield g(Re, Ie, Kt))
        } catch {
            return {}
        }
    }

    function* Pt(e) {
        yield g(Me, Ie, Kt, JSON.stringify(e))
    }

    function* Rs(e, t) {
        const n = yield A(ue);
        yield C(sr(e)), yield C(fe(_e(Y.STEP_ERRORED, n, {
            error: e.message,
            details: t
        })))
    }

    function* mC(e) {
        const {
            step: t,
            status: n
        } = e.payload;
        switch (t.type) {
            case X.MODAL:
            case X.HOTSPOTS:
            case X.SATISFACTION_SURVEY:
                yield C(n ? fe(_e(Y.STEP_END, t.id)) : $y(t.id));
                break;
            case X.ACTION:
                if (n) yield C(ta(t, n));
                else if (t.attributes.action_type === gt.WAIT_FOR_PAGE) {
                    const r = yield* Vt(), i = n || r && r.status || Y.STEP_ATTEMPTED;
                    yield C(ta(t, i))
                } else yield C(Ym(t));
                break;
            default:
                yield g(Rs, new Error("Unknown step type."), JSON.stringify({
                    type: t.type
                }))
        }
    }

    function* Gt(e, t) {
        if (!t) return;
        (yield A(Ge)) === Q.SHOWING && (yield C($m()), yield g(be, nf)), yield C(Nm(t)), yield C(Wy(e.id, t.id))
    }

    function* EC({
        payload: e
    }) {
        const t = e.eventChannel || (yield A(Kf));
        t && (yield C(t, e.event))
    }

    function* gC({
        payload: e
    }) {
        yield g([e, e.close])
    }

    function* yC() {
        yield [F(rt, W.START_FLOW, hC), F(rt, W.START_STEP, mC), F(re, W.SEND_LIFECYCLE_EVENT, EC), F(re, W.CLOSE_CHANNEL, gC)]
    }

    function SC() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        } catch {
            return null
        }
    }

    function TC(e, t, n = {}) {
        let r = n;
        r = r === null ? {} : r;
        const i = e.location.href;
        let o = r._sessionPageviews || 0;
        (r._currentPageUrl !== i || t) && (o += 1);
        const s = Pu(e),
            c = e.navigator,
            l = c.languages ? c.languages[0] : c.language || c.userLanguage;
        let {
            referrer: a
        } = e.document, d = Math.floor(Math.random() * 100);
        t ? a || (a = r._currentPageUrl) : (a = r._currentPageUrl === i ? r._lastPageUrl : r._currentPageUrl, r._sessionRandomizer && (d = r._sessionRandomizer));
        const f = {
            _hostname: e.location.hostname,
            _lastBrowserLanguage: l,
            _lastPageTitle: r._currentPageTitle || "",
            _lastPageUrl: a || "",
            _updatedAt: Date.now(),
            _lastSeenAt: Date.now(),
            _userAgent: e.navigator.userAgent,
            _currentPageTitle: e.document.title,
            _currentPageUrl: i,
            _sessionRandomizer: d,
            _sessionPageviews: o,
            _timezoneCode: SC(),
            _timezoneOffset: new Date().getTimezoneOffset(),
            _appId: e.AppcuesBundleSettings ? .defaultAppId || null
        };
        return s ? (f._testContentId = s, f._testContentUrl = i, Me(Ie, to, !0)) : r._testContentId && r._testContentUrl && (f._testContentId = r._testContentId, f._testContentUrl = r._testContentUrl), Re(Ie, to) || (f._testContentId = null, f._testContentUrl = null), f
    }

    function Gu() {
        return {
            _lastSeenAt: Date.now()
        }
    }

    function CC(e) {
        return Object.keys(e).reduce((t, n) => (Gd.includes(n) && (t[n] = e[n]), t), {})
    }

    function _C(e) {
        if (!e || !e.traits || !Array.isArray(e.traits)) return null;
        const t = e.traits.find(n => n && n.type === "@appcues/inline");
        return !t || !t.config || !t.config.target ? null : t.config.target
    }

    function IC(e, t) {
        if (!e) return "no-selector";
        if (!t || typeof t != "object") return JSON.stringify({
            selector: e
        });
        const n = {};
        return typeof t.order == "number" && (n.order = t.order), typeof t.text == "string" && t.text.trim() !== "" && (n.text = t.text.trim()), Object.keys(n).length === 0 ? JSON.stringify({
            selector: e
        }) : JSON.stringify({
            selector: e,
            filters: n
        })
    }

    function vC(e) {
        if (!e || !Array.isArray(e)) return [];
        if (e.length === 0) return [];
        const t = new Map;
        return e.forEach(n => {
            const r = _C(n);
            if (!r) return;
            const i = IC(r.selector, r.filters);
            t.has(i) || t.set(i, n)
        }), [...t.values()]
    }
    const ot = {
        OVERLAY: "overlay",
        BACKGROUND: "background",
        FLOATING: "floating",
        CONTAINER: "container"
    };

    function AC(e) {
        const {
            type: t,
            attributes: n
        } = e;
        return n && n.steps || t === "nps" || t === "flow" ? ot.OVERLAY : t === "banner" || t === "persistent" ? ot.BACKGROUND : t === "launchpad" ? ot.FLOATING : t === "embed" ? ot.CONTAINER : ot.OVERLAY
    }

    function bC(e) {
        return e.reduce((t, n) => {
            const r = AC(n);
            return t[r] || (t[r] = []), t[r].push(n), t
        }, {
            [ot.OVERLAY]: [],
            [ot.BACKGROUND]: [],
            [ot.FLOATING]: [],
            [ot.CONTAINER]: []
        })
    }

    function Ls(e) {
        const t = bC(e);
        return Object.keys(t).reduce((n, r) => {
            const i = t[r] || [];
            if (i.length === 0) return n;
            switch (r) {
                case ot.OVERLAY:
                    {
                        const {
                            attributes: o
                        } = i[0];o && o.steps ? n.contents = i.filter(s => s.attributes && s.attributes.steps) : n.experiences = [...n.experiences, i[0]];
                        break
                    }
                case ot.BACKGROUND:
                    n.experiences = [...n.experiences, ...i];
                    break;
                case ot.FLOATING:
                    n.experiences = [...n.experiences, ...i];
                    break;
                case ot.CONTAINER:
                    {
                        const o = vC(i);n.experiences = [...n.experiences, ...o];
                        break
                    }
            }
            return n
        }, {
            contents: [],
            experiences: []
        })
    }
    const wC = Xn([er, Zn, Jn, Qn, tr], ui.createApi({
            clean: !0,
            trustedTypesPolicy: window.trustedTypes ? .defaultPolicy
        })),
        NC = e => {
            if (mh(e)) {
                if (!Oe(e, "autoplay")) return;
                const {
                    autoplay: n,
                    ...r
                } = e.data.attrs;
                e.data.attrs = r
            }
        };

    function* ju(e) {
        const t = [];
        let n, r;
        const i = new Error("Invalid HTML.");
        i.extra = {};
        const o = "";
        for (const [s, c] of e.entries()) {
            r = c;
            try {
                wC(document.createElement("div"), Mt(`<div>${r.html}</div>`, {
                    hooks: {
                        create: NC
                    }
                }))
            } catch (l) {
                n || (n = yield A(ue)), t.push({
                    childNumber: s,
                    stepChildId: r.id,
                    error: l
                })
            }
        }
        return t.length === 0 ? !0 : (yield g(Rs, Object.assign(i, {
            extra: {
                stepId: n,
                errors: t
            }
        }), o), !1)
    }

    function* OC({
        payload: {
            nextContentId: e
        }
    }) {
        yield g($u, Dn, e, ic)
    }
    const kC = () => {
        const {
            sessionDuration: e = of
        } = window.AppcuesSettings || {};
        return {
            id: Di(),
            timestamp: Date.now(),
            duration: e * 6e4
        }
    };

    function* RC() {
        try {
            const e = yield g(Re, xe, Yr), t = JSON.parse(e);
            if (!t.id || !t.timestamp) throw yield g(Fe, xe, Yr), new Error("Invalid session");
            return t
        } catch {
            return {}
        }
    }

    function* LC() {
        const e = kC();
        yield C(ws(e)), yield C(PT())
    }

    function* PC() {
        const e = yield A(we);
        (!e || !e.userId) && (yield j(H.IDENTIFY));
        const t = yield g(RC);
        if (!t.id || t ? .id ? .includes("NaN")) {
            yield C(Ns());
            return
        }
        yield C(ws(t))
    }

    function* xC() {
        const e = yield A(Xt);
        yield g(Me, xe, Yr, JSON.stringify(e))
    }

    function* qu() {
        const e = yield A(Xt);
        return !e.id || Date.now() - e.duration > e.lastEventTimestamp
    }

    function* DC() {
        if (yield g(qu)) {
            yield C(Ns()), yield j(({
                type: n
            }) => n === Tt.SESSION_STARTED);
            const e = yield A(Xt);
            return qe(tg(e))
        }
        return null
    }

    function* UC({
        payload: e
    }) {
        (yield A(jc)) || (yield j(H.COMPLETED_IDENTIFY)), (yield A(Xt)).id || (yield j(Tt.SET_SESSION));
        const {
            userId: r
        } = e;
        if (!r) return;
        const i = yield A(we), s = (i && i.userId && i.userId.toString()) !== r.toString(), c = yield g(qu);
        (s || c) && (yield C(Ns()))
    }

    function* FC() {
        return yield [F(rt, H.INITIALIZE, PC), F(rt, Tt.SET_SESSION, xC), F(rt, Tt.START_SESSION, LC), F(re, W.START_IDENTIFY, UC)]
    }

    function* $i() {
        return yield A(Xc)
    }

    function* Ps(e = !1) {
        if (yield A(qc)) return null;
        let n = yield g(Re, Ie, nn);
        try {
            n = JSON.parse(n)
        } catch {
            n = null
        }
        const r = yield g(TC, window, e, n);
        if (yield g(Me, Ie, nn, JSON.stringify(r)), (yield g(Pu, window)) && window.history && window.location) {
            const l = yield g(wn, window.location.href, "appcuesTestContentId");
            yield g([window.history, window.history.replaceState], window.history.state, "", l), window.location.reload()
        }
        let o = yield g(Re, xe, Qi);
        o || (o = yield g(Di), yield g(Me, xe, Qi, o));
        const s = yield A(Hf), c = CC({
            _localId: o,
            _appcuesId: s,
            ...r
        });
        return yield C(vr(c, !0)), c
    }

    function* Ku() {
        yield C(Hm()), yield g(Fe, Ie, nn), yield g(Fe, xe, Qi), yield g(Fe, xe, Ji), yield g(Fe, xe, ur), yield g(ks, Dn), yield g(Fe, Ie, Kt), yield g(Fe, xe, Yr), yield g(DT, Ie, eo), yield g(Ps, !0)
    }

    function* Yu(e) {
        const {
            properties: t,
            events: n
        } = e.payload, {
            _isAnonymous: r
        } = t, {
            userId: i
        } = e.payload, o = yield A(we), s = o && o.userId && o.userId.toString(), c = s !== i ? .toString();
        s && c && !r && (yield g(Ku)), yield C(Fm(i)), oe.defined(i) && (yield g(Me, xe, Ji, i)), yield C(vr({
            _doNotTrack: `${window.navigator&&window.navigator.doNotTrack}` [0] === "1",
            ...t
        }, !0));
        const l = yield A(we);
        yield C(Ne(l, n, !0))
    }

    function* zu() {
        const e = yield A(Ye);
        try {
            const t = yield g(tT, e);
            yield C(zl(t))
        } catch (t) {
            yield C(zl(t))
        }
    }
    const Xu = e => e.type === W.START_IDENTIFY && oe.defined(e.payload.userId);

    function* HC() {
        const e = yield j(Xu);
        yield F(re, Xu, Yu), yield g(Yu, e), yield C(Gm())
    }

    function* xs() {
        yield F(zu);
        let e = yield j(H.CONFIGURE_TRANSPORT), t = 0;
        for (; e.error && t < 5;) yield g(be, 100), yield F(zu), e = yield j(({
            type: n
        }) => n === H.CONFIGURE_TRANSPORT), t += 1
    }

    function* MC(e) {
        const t = e.filter(n => n ? .attributes ? ._builderButtonEvent);
        yield ft(t.map(n => C(He(n.id, n))))
    }

    function* Ds({
        properties: e,
        events: t,
        trigger: n,
        groupId: r = null,
        groupProperties: i = null
    }) {
        let o = yield A(Ye);
        (yield g(vs, o)) || (yield g(xs), o = yield A(Ye));
        const c = yield A(we), {
            id: l
        } = yield A(Xt), a = {
            url: window.location.href,
            sdk_version: window.AppcuesBundleSettings && window.AppcuesBundleSettings.VERSION
        }, d = t.map(m => ({ ...m,
            context: a,
            attributes: { ...m.attributes,
                sessionId: l,
                _identity: c
            }
        })), f = t.find(m => m.name === rn.PAGE_VIEW);
        try {
            const m = yield g(Su, o, e, d, n, r, l, i, a);
            m && (yield C(Yl(m, f)), hT(m)), yield C(ws({
                lastEventTimestamp: t[t.length - 1].timestamp
            })), yield C(zm())
        } catch (m) {
            yield C(Yl(m))
        }
    }

    function Us(e) {
        for (const t of e)
            if (t.name === rn.PAGE_VIEW) try {
                if (oe.string(t.attributes.url) && t.attributes.url.length > 0) return t
            } catch {}
        return null
    }

    function Ju(e) {
        return zt(e) && _t(e.attributes.params.url, window.location.href)
    }

    function* Qu(e) {
        let t = e,
            n = null,
            r = null,
            i = null,
            o = null,
            s = null;
        const c = yield A(Qe);
        if (t && (!c || c.id !== t && (!c.migrated_from_step_id || c.migrated_from_step_id !== t))) {
            if (r = window.location.href, yield C(Ir()), c && oe.defined(c.id)) {
                const a = yield A(ue), d = lt(c, a);
                d && (yield* Gt(c, d)), yield C(en(c.id, vt.SHOWING_OTHER_CONTENT))
            }
            const l = yield A(hr);
            if (l && l[t]) n = l[t];
            else {
                yield C(Bm(t, r));
                const a = yield A(Ye), d = yield A(bt);
                try {
                    n = yield g(Cu, a, t)
                } catch (f) {
                    yield g(d, f, {
                        extra: f.extra
                    }), n = null
                }
                if (!n) try {
                    i = yield g(iT, a, t), o = i ? i.checklist : null
                } catch (f) {
                    yield g(d, f, {
                        extra: f.extra
                    }), i = null
                }
                if (!n && !o) try {
                    s = yield g(rT, a, t)
                } catch (f) {
                    yield g(d, f, {
                        extra: f.extra
                    }), s = null
                }
            }
            n && (t = n.id), yield C(es([t], {
                [t]: n
            })), !n && !o && !s ? yield C(sr(new Error("No content returned."))): n && (n = yield A(Io, t))
        }
        return {
            shownUrl: r,
            content: n,
            checklistContent: o,
            experience: s
        }
    }

    function $C(e) {
        return pr(e) && _t(e.attributes.params.url, window.location.href)
    }

    function BC(e, t) {
        return !pr(e) && t === Y.STEP_COMPLETED
    }

    function* WC() {
        const e = JSON.parse(yield g(Re, Ie, Kt));
        if (e) {
            let t = e;
            const n = yield A(Qe), r = n && n.id === e.flowId, i = lt(n, e.stepId);
            let o = window.location.href;
            if (zt(i)) {
                if (yield g(Ju, i)) return yield pt(Vu, n, i.id, o, null), !0;
                const a = e.remainingPagesToCheck;
                return a === 1 ? (yield C(Ir()), yield g(Gt, n, i), yield C(en(n.id, vt.CLEAR)), !1) : (yield g(Pt, { ...e,
                    remainingPagesToCheck: a - 1
                }), !0)
            }
            e.fromPermalink || (yield g(Fe, Ie, Kt));
            let c;
            if (r) c = n, o = window.location.href;
            else {
                const l = yield g(Qu, e.flowId);
                c = l.content, o = l.shownUrl, c && (yield C(ea()))
            }
            if (c) {
                const l = lt(c, e.stepId),
                    a = e.status,
                    d = $C(l),
                    f = zt(l),
                    m = e.navByADTT;
                if (d || m || f) {
                    let p = l,
                        E = a;
                    if (BC(l, a) && (p = Ut(c, jn(c, e.stepId) + 1), E = Y.STEP_ATTEMPTED), pr(p) || zt(p)) {
                        if (E === Y.STEP_COMPLETED && (p = Ut(c, jn(c, p.id) + 1), E = null), zt(p)) {
                            const {
                                flowId: I,
                                remainingPagesToCheck: S
                            } = t, {
                                page_check_limit: T
                            } = p.attributes.params, v = typeof S == "number" ? S : typeof T == "number" ? T : ro;
                            if (v <= 1) return yield C(Ir()), yield g(Gt, c, p), yield C(en(c.id, vt.CLEAR)), t.fromPermalink || (yield g(Fe, Ie, Kt)), !1;
                            t = { ...t,
                                flowId: I,
                                stepId: p.id,
                                status: Y.STEP_ATTEMPTED,
                                remainingPagesToCheck: v - 1
                            }, yield g(Pt, t)
                        }
                        r && (yield C(Vy(c.id, l.id)), yield g(Gt, c, l));
                        const {
                            flowId: h,
                            submissionId: y
                        } = t;
                        return yield g(Pt, { ...t,
                            flowId: h,
                            submissionId: y
                        }), yield pt(Vu, c, p.id, o, E), !0
                    }
                }
            }
        }
        return !1
    }

    function* Zu() {
        yield C(na(window.location.href, !1));
        const e = yield A(Qe);
        if (e) {
            const r = JSON.parse(yield g(Re, Ie, Kt)),
                i = r ? lt(e, r.stepId) : null;
            i && Ju(i) && (yield g(Pt, { ...r,
                status: Y.STEP_SHOWN
            }))
        }
        const t = yield g(WC);
        let n = t;
        if (!t) {
            let r;
            if (yield g(Wr, window, "showappcue")) {
                if (r = yield g(Wr, window, "showappcue"), window.history) {
                    const i = yield g(wn, window.location.href, "showappcue");
                    yield g([window.history, window.history.replaceState], window.history.state, "", i)
                }
            } else(yield g(Wr, window, "appcue")) && (r = yield g(Wr, window, "appcue"));
            (yield g(Mu, Dn)) && (r || (r = yield g(uC, Dn)), yield g(ks, Dn)), r && (yield C(_r(r)), n = !0)
        }
        return yield C(na(window.location.href, !0)), n
    }

    function* VC(e) {
        const t = yield A(Qe), n = yield A(ue), r = lt(t, n), i = Us(e);
        if (i && i.attributes.url && t !== null) {
            const o = yield A(qf);
            wn(i.attributes.url) !== wn(o) && (r && (yield* Gt(t, r)), yield C(en(t.id, vt.CLEAR)))
        }
    }

    function* GC({
        properties: e,
        events: t,
        groupProperties: n,
        groupId: r
    }) {
        let i = e,
            o = n;
        if (Us(t)) {
            const s = yield g(Ps);
            i = { ...i,
                ...s
            }, r != null && (o = { ...o,
                ...Gu()
            });
            const c = yield A(_o);
            if (!_t(c.url, window.location.href)) {
                (yield A(Ge)) === Q.WILL_CLOSE && (yield j(pe.CLOSE_STEP)), yield C(Ir());
                const d = yield A(ko);
                d && d.stopAll(), (yield g(Zu)) || (yield g(VC, t)), (yield A(el)) && (yield ft([g(Ou), g(ku)]))
            }
        }
        return [i, o]
    }

    function* jC({
        properties: e,
        events: t,
        trigger: n,
        groupId: r,
        groupProperties: i
    }) {
        (yield g($i)) || (yield j(H.INITIALIZE), yield j(Tt.SET_SESSION), yield j(H.CHECKED_FOR_INITIAL_CONTENT));
        const s = yield g(Re, xe, ur), [c, l] = yield* GC({
            properties: e,
            events: t,
            groupProperties: i,
            groupId: r ? ? s
        });
        let a = t;
        const d = yield g(DC);
        if (d) {
            const f = t[0];
            f && (d.timestamp = f.timestamp), a = [d, ...t]
        }
        yield g(Ds, {
            properties: c,
            events: a,
            trigger: n,
            groupId: r ? ? s,
            groupProperties: l
        })
    }

    function* qC() {
        const e = yield g(Dt.expanding, 10), t = yield yf([W.START_ACTIVITY, W.START_GROUP_ACTIVITY], e), n = yield A(we);
        (!n || !n.userId) && (yield j(H.IDENTIFY));
        let r = [];
        yield F(function*() {
            for (;;) {
                const {
                    payload: s
                } = yield j(W.START_IDENTIFY), c = yield A(we);
                s.userId !== c ? .userId && r.length > 0 && (yield st(...r), r = [])
            }
        });
        let i;
        for (;;) {
            i = yield j(t), yield g(be, rf);
            const o = yield yo(t);
            let s = i.payload.properties || {},
                c = i.payload.events || [],
                l = i.payload.trigger || !1,
                a = i.payload.groupId || null,
                d = i.payload.groupProperties || null;
            o.forEach(p => {
                const {
                    payload: E
                } = p;
                s = { ...s,
                    ...E.properties
                }, E.events && (c = [...c, ...E.events]), E.trigger && (l = !0), E.groupId != null && (a = E.groupId), E.groupProperties && (d = { ...d,
                    ...E.groupProperties
                })
            });
            let f = !1,
                m = !1;
            if (c = c.filter(p => Us([p]) ? wn(p.attributes.url) !== wn(window.location.href) || f ? !1 : (f = !0, !0) : (m = l, !0)), l = f || m, Object.keys(s).length > 0 || c.length > 0 || Object.keys(d ? ? {}).length > 0 || a != null) {
                const p = yield F(jC, {
                    properties: s,
                    events: c,
                    trigger: l,
                    groupId: a,
                    groupProperties: d
                }), E = yield F(MC, c);
                r.push(p, E)
            }
        }
    }

    function* ed(e, t) {
        const n = yield A(Mf, e);
        if (n && n.length > 0)
            for (const r of n) {
                let i = [t];
                e === "all" && (i = [t.id, ...i]), yield g([r.context || window, r.callback], ...i)
            }
    }

    function* KC({
        payload: e
    }) {
        const {
            flowId: t,
            event: n
        } = e, r = yield pt(ed, n.id, n), i = yield pt(ed, "all", n);
        yield cn(r, i), yield C(vm(t, n))
    }

    function* YC({
        payload: e
    }) {
        const t = yield g(ru, e.fields);
        if (t.result || e.ignoreValidation) {
            if (!e.fields.some(c => c.value)) {
                yield g(e.onSuccess);
                return
            }
            const r = yield A(ue), i = yield A(at), {
                submissionId: o
            } = yield* Vt();
            yield C(fe(mt(Y.STEP_INTERACTED, r, i, {
                interactionType: "submit",
                interaction: {
                    category: "form",
                    formId: e.formId,
                    submissionId: o,
                    fields: e.fields.map(c => ({
                        fieldId: c.fieldId,
                        fieldType: c.validation,
                        fieldRequired: c.required,
                        label: c.label,
                        value: c.value,
                        formFieldIndex: c.formFieldIndex,
                        customReportingLabel: c.customReportingLabel
                    }))
                }
            }))), yield g(e.onSuccess);
            const s = e.fields.reduce((c, l) => {
                if (l.label) {
                    const a = qd + OE(l.label);
                    return Object.assign(c, {
                        [a]: l.value
                    })
                }
                return c
            }, {});
            Object.keys(s).length > 0 && (yield C(Ne(s, [], !1)))
        } else yield C(xy(t.errors))
    }

    function* zC({
        payload: e
    }) {
        const {
            shownUrl: t,
            content: n,
            checklistContent: r,
            experience: i
        } = yield g(Qu, e);
        if (i && (yield C(bs([i]))), n && (yield g(Wu, n, null, t, null, !1)), r && !(yield A(No, Q.SHOWING)).map(c => c.id).includes(r.id)) {
            const {
                userId: c
            } = yield A(we);
            yield g(Fe, Ie, `${eo}${r.id}`), yield C(or(c, {
                _showChecklist: r.id
            }))
        }
    }

    function* XC() {
        const e = yield A(Ge);
        if (oe.inArray([Q.READY, Q.WILL_SHOW], e)) {
            if (e !== Q.WILL_SHOW && (yield j(H.WILL_SHOW_CONTENT)).error) return;
            yield g(be, so), yield C(Mm());
            const t = yield A(ue);
            yield C(fe(_e(Y.STEP_REVEALED, t)))
        }
    }

    function* JC() {
        const e = yield We({
            cancel: j(W.CANCEL_ATTEMPTS),
            result: g(XC)
        }), t = yield A(Ge);
        if (e.cancel && t === Q.WILL_SHOW) {
            const n = yield A(Qe);
            if (n && oe.defined(n.id)) {
                const r = yield A(ue), i = lt(n, r);
                i && (yield* Gt(n, i)), yield C(en(n.id, vt.SHOWING_OTHER_CONTENT))
            }
        }
    }

    function* QC() {
        if (yield A(dn)) {
            (yield A(Te)).type === X.HOTSPOTS || (yield C(Ri()), yield C(wu()));
            const r = yield A(Ao), i = yield A(vo);
            if (r && !i[r]) {
                let o;
                try {
                    const s = yield A(Ye);
                    o = yield g(_u, s, r)
                } catch (s) {
                    const c = yield A(bt);
                    yield g(c, s.message, {
                        extra: s.extra
                    })
                }
                o && (yield C(Xl({
                    [r]: o
                })))
            }
            yield C(Om())
        }
    }

    function* ZC() {
        let e = yield A(we);
        const {
            _localId: t
        } = e;
        t || (yield j(({
            type: r,
            payload: i
        }) => r === H.UPDATE_USER && oe.defined(i.profile._localId)), e = yield A(we));
        const {
            _localId: n
        } = e;
        yield C(or(`anon:${n}`, {
            _isAnonymous: !0
        }, [Rt(rn.PAGE_VIEW, {
            url: window.location.href
        })]))
    }

    function* e_({
        payload: e
    }) {
        const t = yield A(jc), n = yield A(qc);
        t || (yield j(H.COMPLETED_IDENTIFY));
        let r = yield A(we), {
            _appcuesId: i
        } = r;
        for (; !i && !n;) yield j(H.UPDATE_USER), r = yield A(we), {
            _appcuesId: i
        } = r;
        try {
            r = JSON.parse(JSON.stringify(r))
        } catch {}
        yield g(e, r)
    }

    function* t_({
        payload: e
    }) {
        const t = yield A(ii, e);
        t && t.length > 0 && (yield C(qm(e)), yield t.map(n => st(n)))
    }

    function n_(e) {
        return e === null || e === Q.ERROR
    }

    function r_(e, t) {
        return !!(e && t)
    }

    function* i_() {
        const e = yield A(Qe), t = yield A(ue), n = lt(e, t);
        yield C(Ir()), yield g(Gt, e, n), yield C(en(e.id, vt.CLEAR))
    }

    function* o_(e) {
        const {
            currentUrl: t,
            shouldOverrideCurrentFlow: n,
            requestId: r
        } = e.payload, i = yield A(jf), o = yield A(Ge), s = yield A(dn);
        if (!(!i || i.length === 0) && (n_(o) || r_(o, n))) {
            let c = !0;
            const l = yield A(hr);
            for (const a of i) {
                const d = l[a];
                if (s === d.id) return;
                const f = yield g(ga, d.id, it.FLOWS);
                if (f && (yield C(Ii(d.id, it.FLOWS))), o && n && (yield g(i_)), !f) {
                    if (yield g(Wu, d, null, t, r)) {
                        c && (yield g(ET, r));
                        return
                    }
                    c = !1
                }
            }
        }
    }

    function* td(e, t, n, r) {
        const i = yield A(Ye), o = e.getEntriesByType("resource").filter(s => s.name.match(/fast\.appcues\./)).map(s => s.toJSON());
        yield g(Tu, i, {
            api_request_start: Math.round(n - t),
            api_response_duration: Math.round(r - n),
            timing: o,
            sdk_version: window.AppcuesBundleSettings.VERSION
        })
    }

    function* s_() {
        try {
            yield j(Tt.SET_SESSION);
            const e = window.performance,
                n = (yield A(Xt)).timestamp % 100 === 0;
            if (e.getEntriesByName) {
                const r = e.getEntriesByName("apc-init", "mark")[0].startTime,
                    {
                        payload: {
                            requestId: i
                        }
                    } = yield j(a => a.type === H.SENT_REQUEST && a.payload), o = e.now(), {
                        payload: s
                    } = yield j(a => a.type === W.START_HANDLE_MESSAGE && a.payload.request_id === i), c = e.now();
                (s.contents && s.contents.length > 0 || s.content && s.content.length > 0 && Ls(s.content).contents.length > 0) && document.visibilityState === "visible" && (yield j(W.START_CHECK), yield pt(function*() {
                    const d = yield We({
                        imm: j(H.STARTED_FLOW_IMM),
                        show: j(H.SHOW_CONTENT),
                        start: j(W.START_FLOW),
                        check: j(W.START_CHECK)
                    });
                    if (!d.imm) return;
                    const f = yield A(Io, d.imm.payload), m = Ut(f, 0);
                    if (zt(m) || pr(m) || (yield j(H.WILL_SHOW_CONTENT)).error) return;
                    const h = e.now();
                    yield j(pe.LOADED_CSS);
                    const y = e.now();
                    yield j(H.SHOW_CONTENT);
                    const I = yield A(qn), S = yield A(Ye);
                    yield g(Tu, S, {
                        render_time: Math.round(h - c),
                        css_load_time: Math.round(y - h),
                        time_to_show: Math.round(e.now() - r),
                        content_type: I,
                        sdk_version: window.AppcuesBundleSettings.VERSION
                    }), n || (yield* td(e, r, o, c))
                })), n && (yield* td(e, r, o, c))
            }
        } catch {}
    }

    function* c_() {
        const e = JSON.parse(yield g(Re, Ie, Kr));
        if (e) {
            const {
                checklistId: t,
                itemId: n,
                actionIndex: r,
                checklist: i
            } = e;
            yield g(Fe, Ie, Kr), yield C(mu(t, n, r + 1, i))
        }
        return !1
    }

    function* l_() {
        const e = yield j(W.START_INITIALIZE);
        if (!(yield g($i))) {
            const n = yield g(Re, xe, Ji);
            n !== null && (yield C(or(n, {}, [Rt(rn.PAGE_VIEW, {
                url: window.location.href
            })])));
            const r = yield g(eT, e.payload.dispatchMessage.onMessage, e.payload.dispatchMessage.onTimeout, e.payload.transportModule);
            yield g(Ps, !0), yield C(Um({
                type: r.type,
                module: e.payload.transportModule,
                details: r.details
            })), yield g(Zu), yield g(c_)
        }
    }

    function* a_({
        payload: {
            groupId: e,
            groupProperties: t
        }
    }) {
        const n = { ...t,
            ...Gu()
        };
        yield C(Am(e, n)), yield g(Me, xe, ur, e), yield C(tE({
            groupId: e,
            groupProps: n
        }))
    }

    function* u_({
        payload: e
    }) {
        const t = yield A(hr);
        if (Object.prototype.hasOwnProperty.call(t, e)) return;
        const n = yield A(Ye), r = yield g(Cu, n, e);
        yield C(es([e], {
            [e]: r
        }))
    }

    function* d_() {
        yield [pt(l_), pt(HC), pt(s_), F(re, W.START_EVENT, KC), F(qC), F(re, W.START_ANONYMOUS, ZC), F(re, W.START_FORM_SUBMISSION, YC), F(rt, W.START_SHOW, zC), F(rt, pe.LOADED_CSS, JC), F(re, W.PREPARE_CONTENT, QC), F(re, W.START_RESET, Ku), F(re, H.WAIT_IDENTIFY, e_), F(re, W.STOP_TASKS, t_), F(rt, W.START_CHECK, o_), F(re, pe.SET_NEXT_CONTENT_ID_COOKIE, OC), F(re, W.START_IDENTIFY_GROUP, a_), F(re, H.PREFETCH_FLOWS, u_)]
    }

    function nd(e, t) {
        return e.innerText == null ? !1 : t ? e.innerText.replace(/\r\n|\r|\n/g, " ").toLowerCase().trim() === t.toLowerCase().trim() : !0
    }

    function rd(e, t) {
        if (Object.prototype.hasOwnProperty.call(t, "order_filter")) {
            const n = $o(t);
            return e === n
        }
        return !0
    }

    function f_(e, t) {
        try {
            return !e.includes("|shadow-root|") && !e.includes("|iframe|") && (t.matches ? t.matches(e) : t.msMatchesSelector(e)) ? t : ct(di(e), n => n.contains(t))
        } catch {
            return null
        }
    }

    function Fs({
        events: e,
        $element: t,
        eventType: n
    }) {
        return e.map(r => {
            const {
                targets: i
            } = r;
            for (const {
                    event: o,
                    selector: s
                } of i)
                if (o === n) {
                    const {
                        selector: c,
                        text_filter: l
                    } = s, a = f_(c, t);
                    if (a && nd(a, l) && rd(a, s)) return [r, a]
                }
            return null
        }).filter(r => r)
    }

    function Hs({
        events: e,
        matchSelector: t
    }) {
        try {
            return e.flatMap(n => n.targets).filter(({
                selector: n
            }) => t(n.selector)).flatMap(({
                selector: n
            }) => {
                const {
                    selector: r,
                    text_filter: i
                } = n;
                return di(r).filter(o => nd(o, i) && rd(o, n))
            })
        } catch {
            return []
        }
    }

    function Bi(e) {
        return e.composedPath ? e.composedPath() : [e.target]
    }

    function p_({
        events: e,
        onEventsTriggered: t,
        stopPropagation: n
    }) {
        const r = e.filter(({
                targets: s
            }) => s.some(({
                event: c
            }) => c === "click")),
            i = s => {
                const [c] = Bi(s), l = Fs({
                    events: r,
                    $element: c,
                    eventType: "click"
                }).map(([a]) => a);
                n && l.length > 0 && (s.preventDefault(), s.stopImmediatePropagation()), t(l)
            },
            o = s => {
                (s.key === " " || s.key === "Enter") && i(s)
            };
        try {
            const s = Hs({
                events: r,
                matchSelector: c => c.includes("|iframe|")
            });
            return s.forEach(c => {
                c.addEventListener("click", i, !0), c.addEventListener("keyup", o, !0)
            }), document.addEventListener("click", i, !0), document.addEventListener("keyup", o, !0), () => {
                s.forEach(c => {
                    c.removeEventListener("click", i, !0), c.removeEventListener("keyup", o, !0)
                }), document.removeEventListener("click", i, !0), document.removeEventListener("keyup", o, !0)
            }
        } catch {
            return null
        }
    }
    const h_ = (e, t) => e.includes(t);

    function m_({
        events: e,
        onEventsTriggered: t
    }) {
        const n = e.filter(({
            targets: s
        }) => s.some(({
            event: c
        }) => c === "input"));
        let r = [];
        const i = s => {
                const [c] = Bi(s), a = Fs({
                    events: n,
                    $element: c,
                    eventType: "input"
                }).map(([d]) => d).filter(d => !h_(r, d));
                r = [...r, ...a], t(a)
            },
            o = () => {
                r = []
            };
        try {
            const s = Hs({
                events: n,
                matchSelector: c => c.includes("|iframe|")
            });
            return s.forEach(c => {
                c.addEventListener("input", i), c.addEventListener("blur", o, !0)
            }), document.addEventListener("input", i), document.addEventListener("blur", o, !0), () => {
                s.forEach(c => {
                    c.removeEventListener("input", i), c.removeEventListener("blur", o, !0)
                }), document.removeEventListener("input", i), document.removeEventListener("blur", o, !0)
            }
        } catch {
            return null
        }
    }

    function id(e, t) {
        let n;
        const r = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, i => i.shadowRoot && i.nodeName !== "APPCUES-EXPERIENCE-CONTAINER" && i.nodeName !== "APPCUES-EXPERIENCE-CONTAINER-BUILDER" && i.nodeName !== "APPCUES-BUILDER" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT);
        for (;
            (n = r.nextNode()) !== null;) t(n.shadowRoot)
    }

    function E_({
        events: e,
        onEventsTriggered: t
    }) {
        const n = e.filter(({
                targets: o
            }) => o.some(({
                event: s
            }) => s === "hover")),
            r = new Set,
            i = o => {
                const [s] = Bi(o), c = Fs({
                    events: n,
                    $element: s,
                    eventType: "hover"
                });
                c.length > 0 && c.reduce((a, [d, f]) => (a.has(f) ? a.set(f, [...a.get(f), d]) : a.set(f, [d]), a), new Map).forEach((a, d) => {
                    if (r.has(d)) return;
                    r.add(d);
                    const f = window.setTimeout(() => {
                            t(a)
                        }, 500),
                        m = p => {
                            const [E] = Bi(p);
                            E === d && (window.clearTimeout(f), r.delete(d), d.removeEventListener("mouseleave", m))
                        };
                    d.addEventListener("mouseleave", m)
                })
            };
        if (n.length > 0) try {
            document.addEventListener("mouseover", i);
            const o = Hs({
                events: n,
                matchSelector: s => s.includes("|iframe|")
            });
            return o.forEach(s => {
                s.addEventListener("mouseover", i)
            }), id(document.body, s => s.addEventListener("mouseover", i)), () => {
                document.removeEventListener("mouseover", i), o.forEach(s => {
                    s.removeEventListener("mouseover", i)
                }), id(document.body, s => s.removeEventListener("mouseover", i))
            }
        } catch {
            return null
        }
        return () => {}
    }
    const od = "appcues/click-to-track";

    function g_({
        name: e,
        timestamp: t,
        attributes: {
            url: n,
            interaction: r,
            selector: i
        }
    }) {
        return {
            source: od,
            id: e,
            name: e,
            timestamp: t,
            url: n,
            interaction: r,
            ...Object.keys(i).reduce((o, s) => ({ ...o,
                [`selector.${s}`]: i[s]
            }), {})
        }
    }
    const sd = (e, t) => Object.prototype.hasOwnProperty.call(e, t);

    function* y_(e = [], t = !1) {
        const n = Ug(),
            r = e.filter(({
                urls: o
            }) => o.some(s => s === "*" || _t(s, n))),
            i = ln(o => {
                const s = p_({
                        events: r,
                        onEventsTriggered: o,
                        stopPropagation: t
                    }),
                    c = m_({
                        events: r,
                        onEventsTriggered: o
                    }),
                    l = E_({
                        events: r,
                        onEventsTriggered: o
                    });
                return () => {
                    s(), c(), l()
                }
            }, Dt.expanding(5));
        try {
            for (;;) {
                const o = yield j(i);
                o.length > 0 && (yield C(LT(o.map(({
                    name: s,
                    targets: [{
                        event: c,
                        selector: l
                    }]
                }) => Rt(s, {
                    url: n,
                    interaction: c,
                    selector: {
                        css: l.selector,
                        ...sd(l, "text_filter") ? {
                            textFilter: l.text_filter
                        } : {},
                        ...sd(l, "order_filter") ? {
                            orderFilter: l.order_filter
                        } : {}
                    }
                })))))
            }
        } finally {
            (yield Qr()) && i.close()
        }
    }

    function* S_(e = []) {
        const [t, n] = yield [F(function*() {
            try {
                if (!e || e.length === 0) return;
                for (;;) {
                    const i = yield F(y_, e);
                    yield j(({
                        type: o,
                        payload: s
                    }) => o === W.START_ACTIVITY && s.events.some(c => c.name === rn.PAGE_VIEW)), yield st(i)
                }
            } catch {}
        }), F($n, Nu, function*({
            payload: i
        }) {
            try {
                (yield g($i)) || (yield j(H.INITIALIZE));
                const s = yield g(Re, xe, ur);
                yield g(Ds, {
                    properties: {},
                    events: i,
                    trigger: !0,
                    groupId: s ? ? null
                }), (yield A(Bf)) && (yield i.map(l => {
                    const a = g_({ ...l,
                        name: l.name.replace("appcues_custom:", "")
                    });
                    return C(He(a.id, a))
                }))
            } catch {}
        })];
        t.isRunning() || n.cancel()
    }

    function cd({
        attributes: e
    }) {
        return e ? !!e._builderButtonEvent : !1
    }

    function T_(e) {
        const t = cd(e),
            n = jd.some(i => e ? .id ? .startsWith(i)),
            r = e ? .source === od;
        return !t && !n && !r
    }

    function C_(e) {
        return `${e.name} (Appcues)`
    }

    function __(e, t) {
        return { ...e,
            user: t
        }
    }

    function Ms(e, t, n, r, i) {
        e(t, "event", n, r, i, {
            nonInteraction: !0
        })
    }

    function I_(e, t = {}) {
        if (e === "Form Field Submitted (Appcues)") {
            const {
                user: n,
                interaction: r,
                interaction: {
                    category: i,
                    destination: o,
                    formId: s,
                    fieldId: c,
                    label: l,
                    value: a
                } = {},
                ...d
            } = t;
            return { ...d,
                category: i,
                destination: o,
                formId: s,
                fieldId: c,
                label: l,
                value: a
            }
        } else return t
    }

    function v_(e) {
        if (!e.user) return e;
        const t = Object.entries(e.user).reduce((n, [r, i]) => {
            if (r.startsWith("_")) {
                const o = r.slice(1);
                n[o] = i
            } else n[r] = i;
            return n
        }, {});
        return { ...e,
            user: t
        }
    }
    const ld = e => {
        const t = new Set(["string", "boolean", "number"]);
        return Array.isArray(e) ? e.every(n => t.has(typeof n)) : t.has(typeof e)
    };

    function A_(e) {
        const {
            user: t,
            ...n
        } = e, r = Object.entries(n).reduce((o, [s, c]) => (ld(c) && (o[s] = c), o), {});
        if (!t) return r;
        const i = Object.entries(t).reduce((o, [s, c]) => (ld(c) && (o[`user.${s}`] = c), o), {});
        return { ...r,
            ...i
        }
    }

    function b_(e, t) {
        const {
            settings: n
        } = t(), r = i => () => {
            e.on("all", (o, s) => {
                if (T_(s)) return;
                const c = C_(s),
                    l = cd(s) ? s.name : o;
                try {
                    if (l && c) {
                        const a = __(s, t().user);
                        i(l, c, a)
                    }
                } catch {}
            })
        };
        return {
            initMixpanel: r((i, o, s) => {
                window.mixpanel.track(o, s)
            }),
            initHeap: r((i, o, s) => {
                const c = I_(o, s);
                window.heap.addUserProperties({
                    appcuesUserID: we(t()).userId
                }), window.heap.track(o, c, "appcues")
            }),
            initIntercom: r((i, o, s) => {
                window.Intercom("trackEvent", o, s)
            }),
            initCIO: r((i, o, s) => {
                window._cio.track(o, s)
            }),
            initVero: r((i, o, s) => {
                window._veroq.push(["track", o, s])
            }),
            initWoopra: r((i, o, s) => {
                window.woopra.track(o, s)
            }),
            initAmplitude: r((i, o, s) => {
                window.amplitude.logEvent(o, s)
            }),
            initKlaviyo: r((i, o, s) => {
                window._learnq.push(["track", o, s])
            }),
            initTD: r((i, o, s) => {
                window.td.trackEvent(o, s)
            }),
            initLl: r((i, o, s) => {
                window.ll("tagEvent", o, s)
            }),
            initCalq: r((i, o, s) => {
                window.calq.action.track(o, s)
            }),
            initKM: r((i, o, s) => {
                window._kmq.push(["record", o, s])
            }),
            initGA: r((i, o, s) => {
                const {
                    flowId: c,
                    checklistId: l,
                    name: a
                } = s, d = c || l || a, f = "appcues";
                let m = "";
                try {
                    m = n.integrations.ga.trackerName || ""
                } catch {}
                if (d) {
                    const p = window[window.GoogleAnalyticsObject];
                    oe.function(p) ? p(E => {
                        if (m) Ms(p, `${m}.send`, f, i, d);
                        else if (E) Ms(p, "send", f, i, d);
                        else {
                            const h = p.getAll().reduce((y, I) => ({ ...y,
                                [I.get("trackingId")]: I.get("name")
                            }), {});
                            Object.keys(h).forEach(y => {
                                Ms(p, `${h[y]}.send`, f, i, d)
                            })
                        }
                    }) : window._gaq ? window._gaq.push(["_trackEvent", f, i, d, void 0, !0]) : window.gtag && (s.checklistName ? window.gtag("event", o, {
                        appcues_event_id: i,
                        appcues_checklist_id: s.checklistId,
                        appcues_checklist_name: s.checklistName
                    }) : window.gtag("event", o, {
                        appcues_event_id: i,
                        appcues_flow_id: d,
                        appcues_flow_name: s.flowName
                    }))
                }
            }),
            initGTM: r((i, o, s) => {
                window.dataLayer.push({
                    event: o,
                    appcues_event_id: i,
                    appcues_flow_id: s.flowId,
                    appcues_flow_name: s.flowName
                })
            }),
            initSegment: r((i, o, s) => {
                window.analytics.track(o, s, {
                    integrations: {
                        Appcues: !1
                    }
                })
            }),
            initRudderstack: r((i, o, {
                id: s,
                timestamp: c,
                ...l
            }) => {
                window.rudderanalytics.track(o, l, {
                    integrations: {
                        Appcues: !1
                    }
                })
            }),
            initBraze: r((i, o, s) => {
                window.braze.logCustomEvent(o, s)
            }),
            initFullStory: r((i, o, s) => {
                const c = v_(s);
                window.FS.event(o, c)
            }),
            initHotjar: r((i, o) => {
                window.hj("event", o)
            }),
            initLogRocket: r((i, o, s) => {
                const c = A_(s);
                window.LogRocket.track(o, c)
            })
        }
    }

    function ad(e, t) {
        const n = { ...t,
            url: e
        };
        return Rt(rn.PAGE_VIEW, n)
    }

    function w_({
        dispatch: e,
        getState: t
    }) {
        const n = {
            identify(i, o = {}) {
                let s = i,
                    c = o;
                if (!oe.object(c)) {
                    c = {};
                    try {
                        bt(t())(new Error("Appcues.identify() called with invalid user properties"))
                    } catch {}
                }
                oe.object(s) ? (c = s, s = c.userId || we(t()).userId || null) : (oe.undefined(s) || s === null) && (s = c.userId || we(t()).userId || null), delete c.userId, oe.defined(s) ? e(or(s, c, [ad(window.location.href)])) : e(vr(c, !0))
            },
            track(i, o = {}) {
                i && e(Ne({}, [Rt(i, o)], !0))
            },
            page(i, o = {}) {
                let s = o;
                oe.object(i) ? s = i : oe.string(i) && (s = { ...s,
                    name: i
                }), e(Ne({}, [ad(window.location.href, s)], !0))
            },
            anonymous() {
                e(bm())
            },
            show(i) {
                e(_r(i))
            },
            clearShow() {
                e(RS())
            },
            on(i, o, s) {
                e(Ql(i, o, s))
            },
            off(i, o, s) {
                e(Zl(i, o, s))
            },
            once(i, o, s) {
                const c = function(...a) {
                    o.apply(this, a), e(Zl(i, c, s))
                };
                e(Ql(i, c, s))
            },
            reset() {
                e(km())
            },
            debug(i = !0) {
                e(i ? Rm() : bu())
            },
            loadLaunchpad(i, o) {
                e(xS({
                    selector: i,
                    ...o
                }))
            },
            group(i, o) {
                let s = i,
                    c = o;
                if (!oe.object(c)) {
                    c = {};
                    try {
                        bt(t())(new Error("Appcues.group() called with invalid group properties"))
                    } catch {}
                }
                oe.object(s) && (c = s), (oe.object(s) || s == null || s === "") && (s = c.groupId || we(t()).groupId || null), delete c.groupId, s == null && (c = {}), e(Dm(s, c))
            }
        };
        Object.assign(n, {
            user(i = !0) {
                if (i) return new Promise(s => {
                    e(Vm(s))
                });
                const o = we(t());
                try {
                    return JSON.parse(JSON.stringify(o))
                } catch {
                    return o
                }
            },
            settings() {
                return { ...t().settings
                }
            },
            content() {
                const i = t();
                return {
                    content: { ...i.content
                    },
                    orderedContent: [...i.orderedContent],
                    currentContent: { ...i.currentContent,
                        ...Te(i)
                    }
                }
            }
        });
        const r = b_(n, t);
        return Object.assign(n, r), Object.assign(n, {
            start() {
                n.page()
            },
            experience: {
                pause: i => e(kT(i)),
                resume: i => e(RT(i)),
                show: i => e(bs([i]))
            }
        }), n
    }
    const ud = "https://studio.appcues.com",
        N_ = e => {
            switch (e.type) {
                case X.MODAL:
                    switch (e.attributes.pattern_type) {
                        case "shorty":
                            return "Slideout Group";
                        case "fullscreen":
                            return "Full Screen Modal Group";
                        case "left":
                            return "Sidebar Group";
                        default:
                            return "Modal Group"
                    }
                case X.HOTSPOTS:
                    return e.attributes.sequential ? "Tooltip Group" : "Hotspot Group";
                case X.ACTION:
                    return e.attributes.action_type === gt.WAIT_FOR_PAGE ? "Wait For Matching Page" : null;
                default:
                    return null
            }
        };

    function O_(e) {
        return !!(e && e.attributes && e.attributes.params && e.attributes.params.url)
    }

    function k_(e) {
        return !!(e && e.type === X.ACTION && e.attributes.action_type === gt.WAIT_FOR_PAGE)
    }
    const dd = (e, t, n) => {
        const r = lt(e || {}, t),
            i = un(r, n);
        return u.html("div", null, u.html("div", null, `${(e||{}).name}, Step ${jn(e,t)+1} (${N_(r||{})})${i>-1?`, Part ${i+1}`:""}`), k_(r) && O_(r) ? u.html("div", null, `Page to match: ${r.attributes.params.url}`) : "")
    };

    function R_(e) {
        const {
            lastTrackedPage: t,
            currentPage: n,
            currentContent: r,
            currentFlow: i,
            currentContentStatus: o,
            currentStepId: s,
            currentStepChildId: c,
            stepChildErrors: l,
            user: a,
            group: d,
            settings: f,
            isTransportInitialized: m,
            rowState: p,
            onToggleRowDetails: E,
            onToggleCollapsed: h,
            onCloseDebugger: y
        } = e, I = t && n, S = t === n, T = a && oe.defined(a.userId), v = d && oe.defined(d.groupId), _ = Object.keys(l || {}).reduce((L, R) => {
            const O = l[R];
            return O.errorReported && !O.recoveryReported ? [...L, { ...O,
                stepChildId: R
            }] : L
        }, []), N = f.accountId && a.userId;
        return u.html("debugger", null, u.html("div", {
            "class-header": !0,
            "on-click": h
        }, u.html("div", {
            "class-logo": !0
        }, u.html("a", {
            "attrs-href": ud,
            "attrs-target": "_blank"
        }, u.html(_a, {
            width: "20px",
            height: "20px"
        }))), u.html("div", {
            "class-title": !0
        }, "Appcues Status"), u.html("div", {
            "class-version": !0
        }, f.VERSION ? `SDK Version: ${f.VERSION}` : "SDK Version Pending"), u.html("div", {
            "class-close-button": !0
        }, u.html("a", {
            "on-click": y,
            role: "button",
            "aria-label": "Close debugger"
        }, "×"))), u.html("div", {
            "class-panel": !0
        }, u.html(Nn, {
            status: f && f.accountId ? "check" : "alert",
            category: "Installed",
            description: `Account ID: ${f&&f.accountId?f.accountId:"Unknown"}`
        }), u.html(Nn, {
            status: m ? "check" : "alert",
            category: `${m?"":"Not "}Connected to Appcues`
        }), u.html(Nn, {
            status: I ? S ? "check" : "alert" : "pending",
            category: "Tracking Pages",
            description: I ? S ? "Current URL matches last tracked" : "URL has changed since last tracked" : "Navigate to another page to test",
            showDetails: (p || {})["track-data"],
            onToggleRowDetails: () => E("track-data"),
            details: u.html("span", null, u.html("b", null, "Last Tracked URL:"), u.html("br", null), t, u.html("br", null), u.html("br", null), u.html("b", null, "Current URL:"), u.html("br", null), n)
        }), u.html(Nn, {
            status: T ? "check" : "alert",
            category: `User ${T?"":"Not "}Identified`,
            description: T ? a._isAnonymous ? "Anonymous User" : `User ID: ${a.userId}` : "Have you called `identify`?",
            showDetails: (p || {})["user-data"],
            onToggleRowDetails: () => E("user-data"),
            details: T ? u.html(fd, {
                user: a
            }) : u.html("span", null, "Please identify the current user by providing a userId and tracked properties")
        }), v ? u.html(Nn, {
            status: "check",
            category: "Group Identified",
            description: `Group ID: ${d.groupId}`,
            showDetails: (p || {})["group-data"],
            onToggleRowDetails: () => E("group-data"),
            details: u.html(fd, {
                user: d.groupProps
            })
        }) : u.html(de, null), r ? u.html(Nn, {
            status: o === "SHOWING" ? "check" : "pending",
            category: "Showing Flow",
            description: i.name,
            showDetails: (p || {})["flow-details"],
            onToggleRowDetails: () => E("flow-details"),
            details: dd(i, s, c)
        }) : u.html(de, null), _.length > 0 ? u.html(Nn, {
            status: "warn",
            category: "Content Omitted",
            description: "Some content isn't showing",
            showDetails: (p || {})["omit-content"],
            onToggleRowDetails: () => E("omit-content"),
            details: u.html("div", null, "Some of the content this user is eligible for isn't showing. If there are dynamic elements on your page, this may be expected. Otherwise, please double-check your selectors.", u.html("ul", null, _.map(L => {
                const {
                    stepChildId: R,
                    flow: O
                } = L, M = Vc(Wn(O), R) || {};
                return u.html("li", null, dd(O, M.id, R))
            })))
        }) : u.html(de, null)), u.html("div", {
            "class-footer": !0
        }, u.html("a", {
            href: `${ud}/diagnostics?view_as=${f.accountId}&context=${window.btoa(JSON.stringify({userId:a.userId,url:t}))}`,
            classNames: N ? "" : "disabled",
            target: "_blank",
            rel: "noreferrer"
        }, u.html("div", {
            "class-launch-diagnostics": !0
        }, N ? "View Flow Eligibility for User" : "Identify User to View Flow Eligibility"))))
    }

    function Nn({
        status: e,
        active: t,
        category: n,
        description: r,
        details: i,
        showDetails: o,
        onToggleRowDetails: s
    }) {
        return u.html("div", {
            classNames: `row ${t?"active":""}`
        }, u.html("div", {
            classNames: `category-container ${e}`
        }, u.html("div", {
            "class-icon": !0
        }), u.html("div", {
            "class-name": !0
        }, n), r ? u.html("div", {
            "class-description": !0
        }, r) : u.html(de, null), i ? u.html("div", {
            classNames: `toggle-details ${o?"open":"closed"}`,
            "on-click": s
        }, "DETAILS") : u.html(de, null)), o ? u.html("div", {
            "class-details": !0
        }, i) : u.html(de, null))
    }

    function fd({
        user: e
    }) {
        const t = /^_.*/,
            n = Object.keys(e).map(i => ({
                name: i,
                value: e[i]
            })),
            r = (i, o) => {
                if (!t.test(i.name) || !t.test(o.name)) {
                    if (t.test(i.name)) return -1;
                    if (t.test(o.name)) return 1
                } else return i.name.toLowerCase() < o.name.toLowerCase() ? -1 : 1;
                return 0
            };
        return u.html("table", null, u.html("thead", null, u.html("tr", null, u.html("th", null, "Property"), u.html("th", null, "Value"))), u.html("tbody", null, n.sort(r).map(i => u.html("tr", null, u.html("td", null, i.name), u.html("td", null, JSON.stringify(i.value))))))
    }
    const L_ = "/generic/main/7.20.2/debugger.6a6a274575024b516c91cfd03d287c29b5744063.css",
        P_ = "sha256-LMjol9lu4iFfr9P6lIri9GX+onG7x+pqiR+EzoaK2sU=",
        x_ = Ht(L_),
        $s = Xn([er, Zn, Jn, Qn, tr], ui.createApi({
            clean: !0,
            trustedTypesPolicy: window.trustedTypes ? .defaultPolicy
        }));
    let On = null;
    const D_ = e => {
            const t = hr(e) || {},
                n = si(e);
            return Object.keys(n || {}).reduce((r, i) => {
                const o = Df(t, i);
                return o ? { ...r,
                    [i]: { ...n[i],
                        flow: o
                    }
                } : r
            }, {})
        },
        U_ = (e, t) => u.html(R_, {
            lastTrackedPage: Zc(e),
            currentPage: Qc(e),
            currentContent: Te(e),
            currentFlow: Qe(e),
            currentStepId: ue(e),
            currentStepChildId: at(e),
            currentContentStatus: Ge(e),
            stepChildErrors: D_(e),
            user: we(e),
            group: $f(e),
            settings: Vf(e),
            isTransportInitialized: Xc(e),
            rowState: Qf(e),
            onToggleRowDetails: t.onToggleRowDetails,
            onToggleCollapsed: t.onToggleCollapsed,
            onCloseDebugger: t.onCloseDebugger
        });

    function F_(e) {
        if (yr(document)) {
            const t = e.views.callbacks[X.DEBUGGER],
                n = Jc(e),
                r = n && n.isCollapsed;
            if (!On) {
                const i = document.createElement("appcues-debugger");
                document.body.appendChild(i), On = $s(i, u.html("appcues-debugger", null))
            }
            Yn(e) && t ? On = $s(On, u.html("appcues-debugger", {
                classNames: r ? "collapsed" : "expanded"
            }, u.html("iframe", {
                "style-border": "none",
                "style-height": "450px",
                "style-width": "600px",
                scrolling: "no",
                "style-color-scheme": "none"
            }, u.html("link", {
                "attrs-href": x_,
                "attrs-type": "text/css",
                "attrs-rel": "stylesheet",
                "attrs-integrity": P_,
                "attrs-crossorigin": "anonymous"
            }), U_(e, t)))) : On && (On = $s(On, u.html("div", null)))
        }
    }
    const H_ = "https://docs.appcues.com/user-experiences-faq/faq-test-mode",
        M_ = e => {
            const {
                testModeCallbacks: t
            } = e;
            return u.html("div", {
                "class-banner-wrapper": !0
            }, u.html("div", {
                "class-banner-background": !0
            }, u.html("div", {
                "class-banner-content": !0
            }, u.html("span", {
                "class-banner-header": !0
            }, "Appcues Test Mode"), u.html("a", {
                href: H_,
                "class-clickable": !0,
                "class-doc-link": !0,
                target: "_blank",
                rel: "noreferrer"
            }, "Learn More")), u.html("div", {
                "class-banner-content": !0
            }, u.html("div", {
                "class-restart": !0,
                "class-clickable": !0,
                "on-click": t.onResetClicked
            }, "Restart"), u.html("div", {
                "class-clickable": !0,
                "on-click": t.onCancelClicked
            }, "End Test"))))
        },
        $_ = "/generic/main/7.20.2/test-mode.6a6a274575024b516c91cfd03d287c29b5744063.css",
        B_ = "sha256-nd0yl8XfotWCT+9jaAUZdIayDPvnbBNhrvbhzXcWLNs=",
        W_ = Ht($_),
        Bs = Xn([er, Zn, Jn, Qn, tr], ui.createApi({
            clean: !0,
            trustedTypesPolicy: window.trustedTypes ? .defaultPolicy
        }));
    let kn = null;

    function V_(e) {
        if (yr(document)) {
            const t = e.views && e.views.callbacks && e.views.callbacks[X.TEST_MODE],
                {
                    _testContentId: n
                } = e.user || {},
                r = n,
                i = e.test && e.test.cssLoaded;
            if (!kn) {
                const o = document.createElement("appcues-test-banner");
                document.body.appendChild(o), kn = Bs(o, u.html("appcues-test-banner", null))
            }
            r && t ? kn = Bs(kn, u.html("div", {
                "class-appcues": !0
            }, u.html("appcues-test-banner", {
                style: {
                    display: "flex",
                    justifyContent: "center"
                }
            }, u.html("iframe", {
                style: {
                    height: "50px",
                    width: "595px",
                    position: "fixed",
                    bottom: "0",
                    border: "0"
                }
            }, u.html("link", {
                "attrs-href": W_,
                "attrs-integrity": B_,
                "attrs-crossorigin": "anonymous",
                "attrs-type": "text/css",
                "attrs-rel": "stylesheet",
                "on-load": t.onCssLoaded
            }), i ? u.html(M_, {
                testModeCallbacks: t
            }) : u.html(de, null))))) : kn && (kn = Bs(kn, u.html("div", null)))
        }
    }

    function G_(e) {
        return {
            onToggleRowDetails(t) {
                e(AT(t))
            },
            onToggleCollapsed() {
                e(bT())
            },
            onCloseDebugger() {
                e(bu())
            }
        }
    }

    function* j_() {
        if ((yield A(qn)) === X.MODAL && (yield A(Ge)) === Q.STARTED) {
            const e = yield A(Ze);
            (yield g(ju, e)) && (yield C(eu(document.activeElement)), yield C(jy()))
        }
    }

    function* q_() {
        yield F(re, W.START_CONTENT, j_)
    }

    function* Ws(e, t) {
        yield g(YT, t), yield C(fe(mt(Y.CHILD_RUN, e, t))), yield C(nS([t]))
    }

    function* K_() {
        if ((yield A(qn)) === X.HOTSPOTS && (yield A(Ge)) === Q.STARTED) {
            const e = yield A(Te), t = an(e);
            t.length > 0 ? (yield g(ju, t)) && (yield C(eu(document.activeElement)), yield C(eS()), yield C(oS()), Vn(e) && (yield* Ws(e.id, t[0].id))) : yield g(Rs, new Error("Trying to show an empty list of hotspots."))
        }
    }

    function* Y_({
        payload: e
    }) {
        if ((yield A(qn)) === X.HOTSPOTS) {
            const n = (yield A(Ze)).reduce((r, i) => {
                let o = e[i.id];
                if (!o.error) {
                    const {
                        viewport: s,
                        fixed: c,
                        zIndex: l,
                        element: a,
                        boundingRect: d,
                        relativeBoundingRect: f,
                        padding: m,
                        iframeParent: p
                    } = o, {
                        left: E,
                        top: h,
                        right: y,
                        bottom: I
                    } = d, S = f.left, T = f.top, v = i.offset_x_percentage * (y - E), _ = i.offset_y_percentage * (I - h), {
                        scrollX: N,
                        scrollY: L
                    } = p ? window : {
                        scrollX: 0,
                        scrollY: 0
                    };
                    o = {
                        x: E + v + (m ? .left || 0) + N,
                        y: h + _ + (m ? .top || 0) + L,
                        fixed: c,
                        zIndex: l,
                        element: a,
                        boundingRect: d,
                        elementBoundingRect: a.getBoundingClientRect(),
                        isElementVisible: Ph({
                            xOffset: i.offset_x_percentage,
                            yOffset: i.offset_y_percentage,
                            element: a
                        }),
                        ...Ih(S + v, T + _, s.width, s.height)
                    }
                }
                return r[i.id] = o, r
            }, {});
            yield C(sS(n)), yield g(qT)
        }
    }

    function* z_() {
        yield g(be, 1e4);
        const e = yield* Vt();
        e && (delete e.navByADTT, yield* Pt(e))
    }

    function* pd({
        payload: e
    }) {
        (yield A(Kn)).length > 0 && (yield We({
            continue: j(r => r.type === Ee.REMOVE_ACTIVE_ANNOTATIONS && r.payload[0] === e.childId),
            cancel: j(r => r.type === pe.CANCEL_STEP && r.payload.stepId === e.stepId)
        })).cancel || (yield C(fe(_e(Y.STEP_END, e.stepId, e.params))))
    }

    function* X_(e) {
        const {
            contentType: t,
            step: n,
            childId: r,
            nextChildId: i,
            shouldEndFlow: o
        } = e.payload;
        if (t === X.SEQUENTIAL_HOTSPOTS)
            if (yield C(Ss([r])), yield C(fe(mt(Y.CHILD_DEACTIVATED, n.id, r, {
                    ts: Date.now()
                }))), i) yield* Ws(n.id, i);
            else {
                if (yield C(fe(_e(Y.STEP_COMPLETED, n.id, {
                        shouldEndFlow: o
                    }))), Wc(n, un(n, r))) {
                    const s = yield* Vt();
                    yield* Pt({ ...s,
                        navByADTT: !0
                    }), yield F(z_)
                }
                yield g(pd, ki(n.id, r, {
                    shouldEndFlow: o
                }))
            }
    }

    function* hd({
        stepId: e,
        currentStepChildId: t,
        nextStepChildId: n
    }) {
        yield C(Ss([t])), yield C(fe(mt(Y.CHILD_DEACTIVATED, e, t, {
            ts: Date.now()
        }))), yield C(gs({
            stepChildId: t
        })), yield C(gs({
            stepChildId: n
        })), yield C(fe(mt(Y.CHILD_ACTIVATED, e, n, {
            ts: Date.now()
        }))), yield* Ws(e, n)
    }

    function* J_(e) {
        const {
            step: t,
            stepChildId: n
        } = e.payload, r = yield A(bo, n);
        r && (yield g(hd, {
            stepId: t,
            currentStepChildId: n,
            nextStepChildId: r
        }))
    }

    function* Q_(e) {
        const {
            stepId: t,
            currentStepChildId: n,
            nextStepChildIndex: r
        } = e.payload, i = yield A(oi, r);
        if (!i || n === i) return;
        yield(yield A(Xf, n, i)).map(s => C(gs({
            stepChildId: s
        }))), yield g(hd, {
            stepId: t,
            currentStepChildId: n,
            nextStepChildId: i
        })
    }

    function* Z_() {
        yield [F(re, W.START_CONTENT, K_), F(re, Ee.START_HANDLE_POSITION_UPDATES, Y_), F(re, pe.ADVANCE_STEP_CHILD, X_), F(re, Qt.CLOSE_LAST_HOTSPOT, pd), F(re, pe.RUN_PREV_STEP_CHILD, J_), F(re, Ee.GO_TO_STEP, Q_)]
    }

    function* eI() {
        for (;;) {
            const e = window.location.href;
            (yield A(Qc)) !== e && (yield C(wT(e))), yield g(Xr, 1e3)
        }
    }

    function* tI(e) {
        let t = null;
        if (e.payload.events.forEach(n => {
                n.name === rn.PAGE_VIEW && (t = n)
            }), t) {
            const n = t.attributes.url,
                r = yield A(Zc);
            n !== r && (yield C(Au(n)), yield g(Me, "localStorage", ec, n))
        }
    }

    function* nI(e) {
        if (e.error) {
            const n = (e.payload && e.payload.extra ? e.payload.extra.id : null) || (yield A(ue));
            yield C(NT(n, e.payload.message))
        }
    }

    function* rI(e) {
        const t = Object.keys(e.payload).filter(n => e.payload[n].error);
        if (t.length > 0) {
            const n = yield A(ue);
            for (const r of t) yield C(OT(n, r, e.payload[r].errorMessage))
        }
    }

    function* iI() {
        for (;;) {
            (yield g(Re, "localStorage", Zi)) || (yield j(W.START_DEBUG)), yield g(Me, "localStorage", Zi, !0);
            const t = yield g(Re, "localStorage", ec);
            yield C(Au(t));
            const n = yield pt(eI), r = yield F(re, [W.START_ACTIVITY, W.START_IDENTIFY], tI), i = yield F(re, H.WILL_SHOW_CONTENT, nI), o = yield F(re, Ee.SET_ANNOTATIONS_POSITIONS, rI);
            yield j(ze.CLOSE_DEBUGGER), yield st(n), yield st(r), yield st(i), yield st(o), yield g(Fe, "localStorage", Zi)
        }
    }

    function* oI() {
        yield F(iI)
    }

    function* sI({
        payload: e
    }) {
        switch (yield C(fe(_e(Y.STEP_SHOWN, e.id))), e.attributes.action_type) {
            case gt.REDIRECT:
                {
                    const t = window.location.href,
                        {
                            url: n,
                            new_tab: r,
                            initiated_by_user: i
                        } = e.attributes.params;
                    if (i) return;
                    if (_t(n, t)) yield C(fe(_e(Y.STEP_COMPLETED, e.id))), yield C(fe(_e(Y.STEP_END, e.id)));
                    else {
                        yield We({
                            wait: j(H.SENT_ACTIVITY_UPDATE),
                            cancel: g(be, 1500)
                        });
                        const o = yield A(dn);
                        yield We({
                            wait: g(Mi, o),
                            cancel: g(be, co)
                        }), yield g(Zt, window, n, r)
                    }
                    break
                }
            default:
                yield C(sr(new Error("Unknown step type.")))
        }
    }

    function* cI({
        payload: {
            action: e,
            status: t
        }
    }) {
        switch (e.attributes.action_type) {
            case gt.WAIT_FOR_PAGE:
                {
                    const n = window.location.href,
                        {
                            url: r
                        } = e.attributes.params,
                        i = yield* Vt(), o = yield A(_o), s = _t(r, o.url), c = _t(o.url, n), l = t === Y.STEP_SHOWN || s && c, a = t === Y.STEP_ATTEMPTED && i && i.remainingPagesToCheck !== ro;l || a && _t(r, n) ? (yield C(fe(_e(Y.STEP_COMPLETED, e.id))), yield C(fe(_e(Y.STEP_END, e.id)))) : yield C(fe(_e(Y.STEP_ATTEMPTED, e.id)));
                    break
                }
            case gt.REDIRECT:
                {
                    let n = [_e(Y.STEP_SHOWN, e.id), _e(Y.STEP_COMPLETED, e.id), _e(Y.STEP_END, e.id)].filter(r => t !== r.type);t === Y.STEP_ATTEMPTED && (n = [_e(Y.STEP_ATTEMPTED, e.id), ...n]);
                    for (const r of n) yield C(fe(r));
                    break
                }
            default:
                yield C(sr(new Error("Unknown step type.")))
        }
    }

    function* md(e, t) {
        const n = window.location.href;
        _t(e, n) ? t && (yield g(t)) : (yield g(be, 500), yield g(md, e, t))
    }

    function* lI({
        payload: {
            action: e,
            checklistId: t,
            itemId: n,
            actionIndex: r
        }
    }) {
        switch (e.attributes.action_type) {
            case gt.REDIRECT:
                {
                    const i = window.location.href,
                        {
                            url: o,
                            new_tab: s
                        } = e.attributes.params;
                    if (_t(o, i)) yield C(Ts(t, n, r));
                    else {
                        const c = yield A(dn);
                        yield We({
                            wait: ft([g(Mi, c), g(Mi, t)]),
                            cancel: g(be, co)
                        });
                        const l = yield A(pn, t);
                        yield g(Me, Ie, Kr, JSON.stringify({
                            checklistId: t,
                            itemId: n,
                            actionIndex: r,
                            checklist: l
                        })), yield g(Zt, window, o, s), yield g(md, o, function*() {
                            yield C(Ts(t, n, r)), yield g(Fe, Ie, Kr)
                        })
                    }
                    break
                }
            case gt.SHOW_FLOW:
                {
                    const {
                        flowId: i
                    } = e.attributes.params;i && (yield C(_r(i))),
                    yield C(Ts(t, n, r));
                    break
                }
            default:
                {
                    const i = new Error("Checklist action has an invalid action_type.");i.extra = {
                        action: e,
                        checklistId: t,
                        itemId: n,
                        actionIndex: r
                    },
                    yield C(hu(i))
                }
        }
    }

    function* aI() {
        yield [F(re, H.RUN_ACTION, sI), F(re, H.RESUME_ACTION, cI), F(re, ce.START_CHECKLIST_ACTION, lI)]
    }
    const uI = 500,
        dI = 5e3;

    function* fI() {
        (yield A(qn)) === X.SATISFACTION_SURVEY && (yield A(Ge)) === Q.STARTED && (yield C(mS()))
    }

    function* pI(e) {
        const {
            score: t
        } = e.payload, n = yield A(Qe), r = yield A(wt), o = ht(n, r, {
            score: t,
            name: "NPS Score",
            id: "nps_score"
        });
        yield C(He(o.flowId, o)), yield C(Ne({
            [`${xn}MostRecentNPSScore`]: t,
            [`${xn}NPSLastCollectedAt`]: Date.now()
        }, [qe(o)], !1))
    }

    function* hI(e) {
        const {
            feedback: t
        } = e.payload, n = yield A(Qe), r = yield A(wt), i = ht(n, r, {
            feedback: t,
            name: "NPS Feedback",
            id: "nps_feedback"
        });
        yield C(He(i.flowId, i)), yield C(Ne({
            [`${xn}MostRecentFeedback`]: t,
            [`${xn}NPSFeedbackLastCollectedAt`]: Date.now()
        }, [qe(i)], !1))
    }

    function* mI() {
        const e = {},
            t = `${xn}ClickedUpdateNPSScore`;
        e[t] = Date.now();
        const n = yield A(Qe), r = yield A(wt), i = ht(n, r, {
            clickedUpdateNPSScore: e[t],
            name: "NPS Clicked Update NPS Score",
            id: "nps_clicked_update_nps_score"
        });
        yield C(He(i.flowId, i)), yield C(Ne(e, [qe(i)], !1))
    }

    function* EI() {
        const e = {},
            t = `${xn}AskMeLaterSelectedAt`;
        e[t] = Date.now();
        const n = yield A(Qe), r = yield A(wt), i = ht(n, r, {
            askMeLaterSelectedAt: e[t],
            name: "NPS Ask Me Later Selected At",
            id: "nps_ask_me_later_selected_at"
        });
        yield C(He(i.flowId, i)), yield C(Ne(e, [qe(i)], !1))
    }

    function* gI() {
        yield C(cu()), yield Xr(uI), yield C(lu()), yield Xr(dI), yield C(au())
    }

    function* yI() {
        yield [F(re, Ae.QUANTITATIVE_QUESTION_SUBMITTED, pI), F(re, Ae.QUALITATIVE_QUESTION_SUBMITTED, hI), F(re, Ae.ASK_ME_LATER_SELECTED, EI), F(re, Ae.CLICKED_UPDATE_NPS_SCORE, mI), F(re, Ae.START_COLLAPSING_SATISFACTION_SURVEY, gI), F(re, W.START_CONTENT, fI)]
    }

    function* SI(e) {
        if (!(!e || (yield A(vo))[e])) try {
            const n = yield A(Ye), r = yield g(_u, n, e);
            r && (yield C(Xl({
                [e]: r
            })))
        } catch (n) {
            const r = yield A(bt);
            yield g(r, n.message, {
                extra: n.extra
            })
        }
    }

    function* Vs(e) {
        yield C(Cn(e.id, Q.READY)), yield j(r => r.type === ce.LOADED_CHECKLIST_CSS && e.id), yield g(SI, e.style);
        const t = yield A(Te);
        yield t && t.type !== X.HOTSPOTS ? C(Ri()) : C(Cn(e.id, Q.SHOWING)), (e.attributes && e.attributes.progress_state) !== Fn.COMPLETED && (yield C(_n(e.id)))
    }

    function* TI({
        payload: e
    }) {
        const {
            open_behavior: t
        } = e;
        switch (t) {
            case io.CLOSED:
                {
                    yield g(Vs, e);
                    break
                }
            case io.OPENED:
                {
                    yield C(fu(e));
                    break
                }
            case io.OPEN_ONCE:
            default:
                {
                    const n = `${eo}${e.id}`;Re(Ie, n) ? yield g(Vs, e): (Me(Ie, n, "1"), yield C(fu(e)));
                    break
                }
        }
    }

    function* CI({
        payload: e
    }) {
        yield g(Vs, e), yield g(be, 1e3), yield C(Pr(e.id)), yield C(Eu(e))
    }

    function* _I(e) {
        const {
            checklist: t
        } = e.payload, n = yield A(wt), r = YE(t, n);
        yield C(He(t.id, r)), yield C(Ne(null, [qe(r)], !1))
    }

    function* II(e) {
        const {
            checklistId: t,
            didCompleteChecklist: n
        } = e.payload, r = yield A(wt), i = yield A(pn, t);
        yield C(Cn(i.id, Q.DISMISSED));
        const o = n ? JE(i, r) : XE(i, r);
        yield C(He(o.checklistId, o)), yield C(Ne({}, [qe(o)], !1))
    }

    function* vI() {
        const {
            userId: e
        } = yield A(we);
        yield C(or(e, {
            _showChecklist: null
        }))
    }

    function* AI(e) {
        const {
            checklistId: t,
            itemId: n,
            actionIndex: r
        } = e.payload;
        yield C(_n(t));
        const i = yield A(wt);
        let o, s;
        if (o = yield A(pn, t), s = yield A(tp, t, n), s || (o = e.payload.checklist, s = yield g(ct, o.attributes.items, ({
                id: c
            }) => c === n)), r === 0) {
            try {
                const l = s.conditions ? .and[0] ? .properties,
                    a = `_checklist_item_${n}_completed`;
                s.state === "incomplete" && l ? .property === a && l ? .value === "true" && (yield C(Ne({
                    [`_checklist_item_${n}_completed`]: !0
                }, [], !0)))
            } catch {}
            const c = ZE(o, s, i);
            yield C(He(c.checklistId, c)), yield C(Ne({}, [qe(c)], !1))
        }
        for (let c = r; c < s.actions.length; c++) yield C(NS(s.actions[c], t, n, c)), yield j(({
            type: l,
            payload: a
        }) => l === ce.COMPLETED_CHECKLIST_ACTION && a.itemId === n)
    }

    function* bI() {
        const e = yield A(fn);
        e.length > 0 && (yield ft(e.filter(t => no.includes(t.status)).map(t => C(Cn(t.id, Q.HIDING)))))
    }

    function* wI() {
        const e = yield A(No, Q.HIDING);
        e.length > 0 && (yield ft(e.map(t => C(Cn(t.id, Q.READY)))), yield C(Cn(e[0].id, Q.SHOWING)), e[0].shouldTryExpandChecklist && (yield C(Pr(e[0].id)), yield C(pu(e[0].id, !1))))
    }

    function* NI() {
        yield [F(re, ce.START_CHECKLIST, TI), F(re, ce.HIDE_CHECKLISTS, bI), F(re, ce.UNHIDE_CHECKLISTS, wI), F(re, ce.ANIMATE_IN_CHECKLIST, CI), F(re, ce.CONFIRM_DISMISS_CHECKLIST, II), F(rt, ce.START_CHECKLIST_ITEM, AI), F(rt, ce.CLEAR_FORCE_SHOWN_CHECKLIST, vI), F(re, ce.SEND_CHECKLIST_SHOWN_EVENT, _I)]
    }

    function* OI({
        payload: e
    }) {
        const {
            type: t,
            event: n
        } = e, r = yield A(wt), i = { ...n,
            sessionId: r
        };
        yield C(He(t, i))
    }

    function* kI() {
        yield [F(re, W.START_OPEN_BUILDER_EVENT, OI)]
    }

    function RI() {
        const e = Re(Ie, nn);
        let t;
        if (e) try {
            t = JSON.parse(e)
        } catch {
            return {}
        }
        if (t) {
            const {
                _testContentId: n,
                _testContentUrl: r,
                ...i
            } = t;
            return Fe(Ie, nn), Fe(Ie, to), Me(Ie, nn, JSON.stringify(i)), {
                _testContentId: null
            }
        }
        return {}
    }

    function LI() {
        const e = Re(Ie, nn);
        let t;
        if (e) try {
            t = JSON.parse(e)
        } catch {
            return window.location.href
        }
        if (t) {
            const {
                _testContentUrl: n
            } = t;
            return n
        }
        return window.location.href
    }

    function* PI() {
        const e = RI();
        yield C(vr(e, !0)), yield g(Ds, e, [], !1);
        const t = wn(window.location.href, "appcuesTestContentId");
        yield g(Zt, window, t)
    }

    function* xI() {
        const e = LI();
        yield g(Zt, window, e)
    }

    function* DI() {
        yield [F(re, ir.CANCEL_TEST, PI), F(re, ir.RESET_TEST, xI)]
    }

    function* UI(e) {
        if (e.checklists && e.checklists.length > 0) {
            const t = yield A(wt), n = [], i = ((yield A(fn)) || []).reduce((d, f) => ({ ...d,
                [f.id]: f
            }), {}), o = e.checklists.map(({
                checklist: d,
                state: f
            }) => {
                if (f.status === Fn.DISMISSED) return {
                    checklist: d
                };
                const m = i[d.id];
                if (f.changed && (f.status === Fn.COMPLETED || f.status === Fn.SHOWN_MANUALLY && f.items.every(y => y.is_completed))) {
                    const y = zE(d, t);
                    n.push({
                        checklistId: d.id,
                        event: y
                    })
                }
                const p = m && m.attributes && m.attributes.progress_state;
                let E = m && m.status;
                if (f.status === Fn.SHOWN_MANUALLY && p !== Fn.SHOWN_MANUALLY) {
                    const y = QE(d, t);
                    n.push({
                        checklistId: d.id,
                        event: y
                    }), E = null
                }
                const h = (d.items || []).map((y, I) => {
                    const S = f.items[I];
                    if (S.is_completed && S.changed) {
                        const _ = eg(d, y, t);
                        n.push({
                            checklistId: d.id,
                            event: _
                        })
                    }
                    const T = S.is_completed ? "complete" : "incomplete",
                        v = S.changed ? S.is_completed ? "incomplete" : "complete" : T;
                    return { ...y,
                        prev_state: v,
                        state: T
                    }
                });
                return { ...d,
                    status: E,
                    progress_state: f.status,
                    items: h
                }
            });
            for (const d of n) yield(yield A(np, d.checklistId)) === Q.HIDING ? C(pu(d.checklistId, !0)) : C(Pr(d.checklistId)), yield C(He(d.checklistId, d.event)), yield C(Ne({}, [qe(d.event)], !1));
            yield C(du(o));
            let s = e.contents;
            if (e.content && e.content.length > 0) {
                const {
                    contents: d
                } = Ls(e.content);
                s = d
            }
            if (s && s.length > 0) {
                const d = s[0].attributes && s[0].attributes.steps,
                    f = ct(Object.keys(d || {}), m => d[m].index === 0);
                d && d[f] && d[f].step_type && d[f].step_type !== X.HOTSPOTS && (yield j(ce.HIDE_CHECKLISTS))
            }
            const c = yield A(fn), l = yield A(No, Q.SHOWING), a = l[0] && l[0].attributes && l[0].attributes.id;
            if (c.every(d => d.status === Q.HIDING)) return;
            c.every(d => !d.status) && (yield C(uu(o[0]))), a && a !== o[0].id && (yield C(Cn(a, Q.READY)), o[0] && o[0].status !== Q.SHOWING && (yield C(uu(o[0]))))
        } else yield C(du([]))
    }

    function* FI() {
        let e = [],
            t = {};
        const n = new Map;
        yield $n(H.SENT_REQUEST, ({
            payload: {
                requestId: r,
                pageViewEvent: i
            }
        }) => {
            e = [r, ...e], i && (t = { ...t,
                [r]: i ? .attributes ? .url
            })
        }), yield $n([W.START_HANDLE_MESSAGE, W.MESSAGE_TIMEOUT], function*({
            type: i,
            payload: o
        }) {
            const s = i === W.MESSAGE_TIMEOUT ? {
                request_id: o
            } : o;
            if (s.type === ao) {
                const {
                    type: d,
                    status: f = "success",
                    ...m
                } = s;
                yield C(f === "error" ? {
                    type: _i.LAUNCHPAD_SEARCH_ERROR
                } : {
                    type: _i.LAUNCHPAD_SEARCH_RESPONSE,
                    payload: m
                })
            } else i === W.START_HANDLE_MESSAGE && (yield F(UI, s));
            const c = yield A(_o), l = s.qualification_reason === tc.EVENT_TRIGGER;
            (c.url !== window.location.href || !c.complete) && !l && (yield j(d => d.type === H.CHECKED_FOR_INITIAL_CONTENT && d.payload.url === window.location.href && d.payload.complete));
            const a = s.request_id;
            a && (n.set(a, s), yield We({
                cancel: j([W.START_HANDLE_MESSAGE, W.MESSAGE_TIMEOUT]),
                handleMessage: g(function*() {
                    if (e[0] === a)
                        for (; e.length > 0;) {
                            const [f, ...m] = e;
                            e = m;
                            const p = n.get(f) || {};
                            n.delete(f);
                            const {
                                experiences: E = [],
                                experiments: h = [],
                                profile: y,
                                contents: I,
                                content: S,
                                performed_qualification: T
                            } = p;
                            yield C(eE(h)), y && Object.keys(y).length > 0 && (yield C(vr(y, !0)));
                            let v = I,
                                _ = E;
                            if (S && S.length > 0) {
                                const {
                                    contents: O,
                                    experiences: M
                                } = Ls(S);
                                v = O, _ = M
                            }
                            _.some(O => O.type === Un.NPS || O.type === Un.FLOW) && (yield C(Ri()), yield C(wu()));
                            const L = p.qualification_reason === tc.PAGE_VIEW;
                            _.length > 0 && !window.document ? .documentMode && (!L || window.location.href === t[f]) && (yield C(bs(_)));
                            const R = T && v && v.length > 0;
                            if (L && R && window.location.href === t[f] || !L && R) {
                                e = [], n.clear();
                                const O = v.map($ => $.id),
                                    M = v.reduce(($, ee) => ($[ee.id] = ee, $), {});
                                return yield C(es(O, M)), yield C(ql(window.location.href, l, f))
                            }
                        }
                })
            }))
        })
    }

    function HI(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function MI(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {},
                r = Object.keys(n);
            typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
                return Object.getOwnPropertyDescriptor(n, i).enumerable
            }))), r.forEach(function(i) {
                HI(e, i, n[i])
            })
        }
        return e
    }
    var $I = "appcues:checklist_ready",
        BI = "appcues:checklist_close",
        Gs = "appcues:toggle_checklist",
        js = "appcues:confirm_checklist_ready",
        WI = "appcues:launchpad_close",
        VI = "appcues:launchpad_search",
        GI = "appcues:launchpad_search_error",
        jI = "appcues:launchpad_search_response",
        qs = function(e, t) {
            return window.addEventListener(e, t),
                function() {
                    return window.removeEventListener(e, t)
                }
        },
        qI = function(e) {
            var t = e.name,
                n = e.id,
                r = e.totalItems,
                i = e.completedItems,
                o = new CustomEvent($I, {
                    detail: {
                        name: t,
                        id: n,
                        totalItems: r,
                        completedItems: i
                    }
                });
            window.dispatchEvent(o)
        },
        KI = function() {
            var e = new CustomEvent(BI);
            window.dispatchEvent(e)
        },
        YI = function(e) {
            return qs(Gs, e)
        },
        zI = function(e) {
            return qs(js, e)
        },
        XI = function() {
            var e = new CustomEvent(WI);
            window.dispatchEvent(e)
        },
        JI = function(e) {
            return qs(VI, e)
        },
        QI = function(e, t) {
            var n = new CustomEvent("".concat(jI, ":").concat(e), {
                detail: MI({}, t)
            });
            window.dispatchEvent(n)
        },
        Ed = function(e) {
            var t = new CustomEvent("".concat(GI, ":").concat(e));
            window.dispatchEvent(t)
        };

    function* gd() {
        let e = yield A(Ye);
        return (yield g(vs, e)) || (yield g(xs), e = yield A(Ye)), e
    }
    let Ks = [];
    const Ys = () => {
        const [e, ...t] = Ks;
        return Ks = t, e
    };

    function* ZI() {
        (yield g($i)) || (yield j(H.INITIALIZE));
        const t = yield A(we);
        oe.defined(t.userId) || (yield j(H.COMPLETED_IDENTIFY));
        let n = yield g(gd);
        const r = ln(i => (JI(o => {
            const {
                experienceId: s,
                integrationId: c,
                query: l
            } = o.detail;
            Ks.push(s), i({
                type: ao,
                data: {
                    integration_id: c,
                    query: l,
                    experience_id: s
                }
            })
        }), () => {}));
        for (n.transport.module.subscribeToError(() => {
                const i = Ys();
                Ed(i)
            }, n, Mr.UserActivity);;) {
            const {
                data: i
            } = yield j(r);
            n = yield g(gd), yield g(nT, n, ao, i)
        }
    }

    function ev({
        payload: e
    }) {
        const t = Ys();
        QI(t, e)
    }

    function tv() {
        const e = Ys();
        Ed(e)
    }

    function* nv() {
        yield [pt(ZI), F(rt, _i.LAUNCHPAD_SEARCH_RESPONSE, ev), F(rt, _i.LAUNCHPAD_SEARCH_ERROR, tv)]
    }
    const zs = {},
        yd = {},
        rv = e => {
            const {
                GENERIC_BUNDLE_DOMAIN: t,
                VERSION: n,
                RELEASE_ID: r
            } = window ? .AppcuesBundleSettings ? ? {};
            return `${t}/generic/main/${n}/${e}.${r}.js`
        },
        Sd = e => new Promise(t => {
            const n = `appcues-${e}`;

            function r() {
                yd[n] = !0, t()
            }
            if (zs[n]) {
                if (yd[n]) {
                    r();
                    return
                }
                zs[n].addEventListener("load", r);
                return
            }
            const i = rv(e),
                o = window.document.createElement("script");
            o.type = "text/javascript", o.src = i, o.async = !0, o.addEventListener("load", r), o.id = `appcues-${e}`, o.crossOrigin = "anonymous", zs[n] = o, window.document.body.append(o)
        }),
        iv = "v2",
        ov = e => {
            const t = window.AppcuesBundleSettings ? .ASSETS_PATH,
                n = {
                    sendEvent: (r, i) => {
                        const o = `${iv}:${r}`,
                            s = { ...i,
                                id: o
                            };
                        e(Im(o, s)), e(Ne({}, [qe(s)]))
                    },
                    sendCustomEvent: (r, i) => {
                        const o = { ...i,
                            id: r
                        };
                        e(Ne({}, [Rt(r, o)], !0))
                    },
                    updateUserProfile: (r = {}) => {
                        Object.keys(r).length !== 0 && e(Ne(r, [], !0))
                    },
                    showFlow({
                        flowId: r,
                        url: i,
                        prefetch: o
                    }) {
                        if (o) {
                            e({
                                type: H.PREFETCH_FLOWS,
                                payload: r
                            });
                            return
                        }
                        if (!i || _t(window.location.href, i)) {
                            e(_r(r));
                            return
                        }
                        e(tu(r)), Zt(window, i)
                    },
                    ...t && {
                        apiOverrides: {
                            fastBaseUrl: t,
                            useAssetsPath: !0
                        }
                    }
                };
            return window.createAppcues(n)
        },
        sv = async () => (await Sd("open-builder"), ov);

    function* cv() {
        const e = yield Sf("dispatch"), n = (yield g(sv))(e);
        yield C(Jm(n)), yield C(Zm())
    }

    function* jt() {
        const e = yield A(ko), t = yield A(up);
        return t && (yield j(({
            type: n
        }) => n === H.OPEN_BUILDER_INITIALIZED)), !e && !t && (yield C(Qm()), yield j(({
            type: n
        }) => n === H.OPEN_BUILDER_INITIALIZED)), yield A(ko)
    }

    function* Xs({
        payload: e
    }) {
        const t = yield g(jt);
        t && (yield g(t.pause, e))
    }

    function* Td({
        payload: e
    }) {
        const t = yield g(jt);
        t && (yield g(t.resume, e))
    }

    function* Cd(e, t) {
        yield C(Ii(e.id, it.EXPERIENCES)), !(yield g(ga, e.id, it.EXPERIENCES)) && t.show(e)
    }

    function Wi(e) {
        const t = {
            experiences: [],
            launchpads: []
        };
        return e.forEach(n => {
            const r = n.type === "launchpad" ? "launchpads" : "experiences";
            t[r].push(n)
        }), t
    }

    function* lv({
        payload: e
    }) {
        const t = yield g(jt);
        let n = e;
        const r = n.some(o => o.type === Un.NPS || o.type === Un.FLOW),
            i = n.some(o => o.type === "launchpad");
        if (i) {
            yield g(Sd, "open-builder-components");
            const o = yield A(Te);
            if (!(o ? .type === X.HOTSPOTS) && o) {
                const {
                    experiences: c,
                    launchpads: l
                } = Wi(n);
                n = c, yield C($r(l))
            }
        }
        if (r && i) {
            const {
                experiences: o,
                launchpads: s
            } = Wi(n);
            yield C($r(s)), n = o
        }
        r && (yield C(Ri())), yield ft(n.map(o => g(Cd, o, t)))
    }

    function* av() {
        const e = yield g(jt);
        e && e.stopAll()
    }

    function* uv(e, t) {
        yield(yield g(t.isExperiencePaused, e.id)) ? g(Td, {
            payload: e.id
        }) : g(Cd, e, t)
    }

    function* dv() {
        const e = yield A(fp);
        if (e.length <= 0) return;
        const t = yield g(jt);
        yield ft(e.map(n => g(uv, n, t))), yield C($r([]))
    }

    function* fv() {
        const e = yield g(jt), t = yield g(e.getRunningExperiences), {
            launchpads: n
        } = Wi(t);
        n.length <= 0 || (yield ft(n.map(r => g(Xs, {
            payload: r.id
        }))), yield C($r(n)))
    }

    function* pv() {
        if ((yield A(Te)).type === X.HOTSPOTS) return;
        const n = yield g(jt), r = yield g(n.getRunningExperiences), {
            launchpads: i
        } = Wi(r);
        i.length <= 0 || (yield ft(i.map(o => g(Xs, {
            payload: o.id
        }))), yield C($r(i)))
    }

    function* hv({
        payload: e
    }) {
        const {
            type: t,
            event: n
        } = e, r = n.experienceType === Un.NPS || n.experienceType === Un.FLOW, i = Yd.includes(t);
        if (r && i) {
            const o = yield g(jt);
            yield g(o.stop, n.experienceId), yield C(Br()), yield C(Lr())
        }
    }

    function* mv() {
        yield [F(rt, H.INITIALIZE_OPEN_BUILDER, cv), F(re, et.PAUSE_EXPERIENCE, Xs), F(re, et.RESUME_EXPERIENCE, Td), F(rt, et.SHOW_EXPERIENCES, lv), F(re, W.START_RESET, av), F(re, et.UNHIDE_LAUNCHPADS, dv), F(re, et.HIDE_LAUNCHPADS, fv), F(re, W.PREPARE_CONTENT, pv), F(re, W.START_OPEN_BUILDER_EVENT, hv)]
    }

    function* Ev() {
        if (window.AppcuesSettings) {
            let e = window.location.href;
            const {
                enableURLDetection: t
            } = window.AppcuesSettings;
            for (; t;) window.location.href !== e && (window.Appcues.page(), e = window.location.href), yield g(be, 500)
        }
    }

    function* gv() {
        yield [F(Ev)]
    }
    const _d = b(Ci.SET_COLLISION_MODE),
        yv = "launchpad-button-wrapper",
        Sv = (e, t) => e.checklist ? e.checklist.payload[0] : t.payload[0],
        Tv = (e, t) => (e.experiences ? e.experiences.payload : t.payload).find(i => i.type === "launchpad"),
        Cv = e => {
            const n = e.steps[0].traits.filter(c => c.type === "@appcues/floating").find(c => c.config ? .target ? .selector === yv),
                {
                    xPosition: r,
                    yPosition: i,
                    xOffset: o,
                    yOffset: s
                } = n.config;
            return {
                position: `${i} ${r}`,
                xOffset: o,
                yOffset: s
            }
        };

    function* Id(e, t) {
        if (!e || !t) {
            yield C(_d({
                collisionMode: !1,
                checklist: null
            }));
            return
        }
        const n = e.styles.position.toLowerCase(),
            {
                position: r,
                xOffset: i,
                yOffset: o
            } = Cv(t);
        yield C(_d({
            collisionMode: n === r,
            checklist: e,
            collisionCoordinates: {
                x: i,
                y: o
            }
        }))
    }

    function* _v() {
        const e = yield We({
            checklist: j(ce.UPDATE_CHECKLISTS),
            experiences: j(et.SHOW_EXPERIENCES)
        }), t = yield e.checklist ? j(et.SHOW_EXPERIENCES) : j(ce.UPDATE_CHECKLISTS), n = Sv(e, t), r = Tv(e, t);
        yield g(Id, n, r)
    }

    function* Iv({
        payload: {
            checklistId: e,
            forceClose: t
        }
    }) {
        const n = yield A(pn, e);
        if (t) {
            yield C(_n(e));
            return
        }
        const r = n.viewState === Yt.EXPANDED;
        r || (yield g(XI)), yield C(r ? _n(e) : Pr(e))
    }

    function* vd({
        payload: {
            collisionMode: e,
            checklist: t
        }
    }) {
        if (!e) {
            yield g(KI);
            return
        }
        const n = t.items.filter(i => i.state === "complete").length,
            r = yield We({
                received: ft([j(js), g(qI, {
                    name: t.text_tokens.beacon_text,
                    id: t.id,
                    totalItems: t.items.length,
                    completedItems: n
                })]),
                cancel: g(be, 100)
            });
        Object.prototype.hasOwnProperty.call(r, "cancel") && (yield g(vd, {
            payload: {
                collisionMode: e,
                checklist: t
            }
        }))
    }

    function* vv() {
        const e = ln(t => (YI(n => {
            t({
                type: Gs,
                payload: {
                    checklistId: n.detail.checklistId,
                    forceClose: n.detail.forceClose
                }
            })
        }), zI(() => {
            t({
                type: js
            })
        }), () => {}));
        for (;;) {
            const t = yield j(e);
            yield C(t)
        }
    }

    function* Av() {
        for (yield j(Ci.SET_COLLISION_MODE);;) {
            const {
                payload: [e]
            } = yield j(ce.UPDATE_CHECKLISTS), t = yield g(jt);
            if (!t) return;
            let n = null,
                r = 0;
            const i = 10;
            for (; !n && r <= i;) yield be(100), n = t.getRunningExperiences().find(s => s.type === "launchpad"), r += 1;
            n && (yield g(Id, e, n))
        }
    }

    function* bv() {
        yield [F(vv), F(Av), F(_v), F($n, Gs, Iv), F($n, Ci.SET_COLLISION_MODE, vd)]
    }
    var Vi = {
            exports: {}
        },
        wv = Vi.exports,
        Ad;

    function Nv() {
        return Ad || (Ad = 1, (function(e, t) {
            (function(r, i) {
                e.exports = i()
            })(wv, function() {
                return (function(n) {
                    var r = {};

                    function i(o) {
                        if (r[o]) return r[o].exports;
                        var s = r[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return n[o].call(s.exports, s, s.exports, i), s.l = !0, s.exports
                    }
                    return i.m = n, i.c = r, i.i = function(o) {
                        return o
                    }, i.d = function(o, s, c) {
                        i.o(o, s) || Object.defineProperty(o, s, {
                            configurable: !1,
                            enumerable: !0,
                            get: c
                        })
                    }, i.n = function(o) {
                        var s = o && o.__esModule ? function() {
                            return o.default
                        } : function() {
                            return o
                        };
                        return i.d(s, "a", s), s
                    }, i.o = function(o, s) {
                        return Object.prototype.hasOwnProperty.call(o, s)
                    }, i.p = "", i(i.s = 6)
                })([function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.convertNodeList = o, r.escapeValue = s;

                    function o(c) {
                        for (var l = c.length, a = new Array(l), d = 0; d < l; d++) a[d] = c[d];
                        return a
                    }

                    function s(c) {
                        return c && c.replace(/['"`\\/:\?&!#$%^()[\]{|}*+;,.<=>@~]/g, "\\$&").replace(/\n/g, "A")
                    }
                }, function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.getCommonAncestor = o, r.getCommonProperties = s;

                    function o(c) {
                        var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                            a = l.root,
                            d = a === void 0 ? document : a,
                            f = [];
                        c.forEach(function(S, T) {
                            for (var v = []; S !== d;) S = S.parentNode, v.unshift(S);
                            f[T] = v
                        }), f.sort(function(S, T) {
                            return S.length - T.length
                        });
                        for (var m = f.shift(), p = null, E = function() {
                                var T = m[h],
                                    v = f.some(function(_) {
                                        return !_.some(function(N) {
                                            return N === T
                                        })
                                    });
                                if (v) return "break";
                                p = T
                            }, h = 0, y = m.length; h < y; h++) {
                            var I = E();
                            if (I === "break") break
                        }
                        return p
                    }

                    function s(c) {
                        var l = {
                            classes: [],
                            attributes: {},
                            tag: null
                        };
                        return c.forEach(function(a) {
                            var d = l.classes,
                                f = l.attributes,
                                m = l.tag;
                            if (d !== void 0) {
                                var p = a.getAttribute("class");
                                p ? (p = p.trim().split(" "), d.length ? (d = d.filter(function(h) {
                                    return p.some(function(y) {
                                        return y === h
                                    })
                                }), d.length ? l.classes = d : delete l.classes) : l.classes = p) : delete l.classes
                            }
                            if (f !== void 0 && (function() {
                                    var h = a.attributes,
                                        y = Object.keys(h).reduce(function(T, v) {
                                            var _ = h[v],
                                                N = _.name;
                                            return _ && N !== "class" && (T[N] = _.value), T
                                        }, {}),
                                        I = Object.keys(y),
                                        S = Object.keys(f);
                                    I.length ? S.length ? (f = S.reduce(function(T, v) {
                                        var _ = f[v];
                                        return _ === y[v] && (T[v] = _), T
                                    }, {}), Object.keys(f).length ? l.attributes = f : delete l.attributes) : l.attributes = y : delete l.attributes
                                })(), m !== void 0) {
                                var E = a.tagName.toLowerCase();
                                m ? E !== m && delete l.tag : l.tag = E
                            }
                        }), l
                    }
                }, function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.default = a;
                    var o = i(3),
                        s = l(o),
                        c = i(0);

                    function l(m) {
                        return m && m.__esModule ? m : {
                            default: m
                        }
                    }

                    function a(m, p) {
                        var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                        if (Array.isArray(p) || (p = p.length ? (0, c.convertNodeList)(p) : [p]), !p.length || p.some(function(L) {
                                return L.nodeType !== 1
                            })) throw new Error('Invalid input - to compare HTMLElements its necessary to provide a reference of the selected node(s)! (missing "elements")');
                        var h = (0, s.default)(p[0], E),
                            y = m.replace(/> /g, ">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                        if (y.length < 2) return d("", m, "", p);
                        for (var I = [y.pop()]; y.length > 1;) {
                            var S = y.pop(),
                                T = y.join(" "),
                                v = I.join(" "),
                                _ = T + " " + v,
                                N = document.querySelectorAll(_);
                            N.length !== p.length && I.unshift(d(T, S, v, p))
                        }
                        return I.unshift(y[0]), y = I, y[0] = d("", y[0], y.slice(1).join(" "), p), y[y.length - 1] = d(y.slice(0, -1).join(" "), y[y.length - 1], "", p), h && delete!0, y.join(" ").replace(/>/g, "> ").trim()
                    }

                    function d(m, p, E, h) {
                        if (m.length && (m = m + " "), E.length && (E = " " + E), /\[*\]/.test(p)) {
                            var y = p.replace(/=.*$/, "]"),
                                I = "" + m + y + E,
                                S = document.querySelectorAll(I);
                            if (f(S, h)) p = y;
                            else
                                for (var T = document.querySelectorAll("" + m + y), v = function() {
                                        var Z = T[_];
                                        if (h.some(function(Se) {
                                                return Z.contains(Se)
                                            })) {
                                            var ie = Z.tagName.toLowerCase();
                                            return I = "" + m + ie + E, S = document.querySelectorAll(I), f(S, h) && (p = ie), "break"
                                        }
                                    }, _ = 0, N = T.length; _ < N; _++) {
                                    var I, S, L = v();
                                    if (L === "break") break
                                }
                        }
                        if (/>/.test(p)) {
                            var R = p.replace(/>/, ""),
                                I = "" + m + R + E,
                                S = document.querySelectorAll(I);
                            f(S, h) && (p = R)
                        }
                        if (/:nth-child/.test(p)) {
                            var O = p.replace(/nth-child/g, "nth-of-type"),
                                I = "" + m + O + E,
                                S = document.querySelectorAll(I);
                            f(S, h) && (p = O)
                        }
                        if (/\.\S+\.\S+/.test(p)) {
                            for (var M = p.trim().split(".").slice(1).map(function(se) {
                                    return "." + se
                                }).sort(function(se, Z) {
                                    return se.length - Z.length
                                }); M.length;) {
                                var $ = p.replace(M.shift(), "").trim(),
                                    I = ("" + m + $ + E).trim();
                                if (!I.length || I.charAt(0) === ">" || I.charAt(I.length - 1) === ">") break;
                                var S = document.querySelectorAll(I);
                                f(S, h) && (p = $)
                            }
                            if (M = p && p.match(/\./g), M && M.length > 2)
                                for (var ee = document.querySelectorAll("" + m + p), w = function() {
                                        var Z = ee[_];
                                        if (h.some(function(Se) {
                                                return Z.contains(Se)
                                            })) {
                                            var ie = Z.tagName.toLowerCase();
                                            return I = "" + m + ie + E, S = document.querySelectorAll(I), f(S, h) && (p = ie), "break"
                                        }
                                    }, _ = 0, N = ee.length; _ < N; _++) {
                                    var I, S, q = w();
                                    if (q === "break") break
                                }
                        }
                        return p
                    }

                    function f(m, p) {
                        var E = m.length;
                        return E === p.length && p.every(function(h) {
                            for (var y = 0; y < E; y++)
                                if (m[y] === h) return !0;
                            return !1
                        })
                    }
                    n.exports = r.default
                }, function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.default = o;

                    function o(s, c) {
                        return !1
                    }
                    n.exports = r.default
                }, function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    });
                    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
                        return typeof T
                    } : function(T) {
                        return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
                    };
                    r.getSingleSelector = h, r.getMultiSelector = y, r.default = S;
                    var s = i(3),
                        c = E(s),
                        l = i(5),
                        a = E(l),
                        d = i(2),
                        f = E(d),
                        m = i(0),
                        p = i(1);

                    function E(T) {
                        return T && T.__esModule ? T : {
                            default: T
                        }
                    }

                    function h(T) {
                        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (T.nodeType === 3 && (T = T.parentNode), T.nodeType !== 1) throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "' + (typeof T > "u" ? "undefined" : o(T)) + '")');
                        var _ = (0, c.default)(T, v),
                            N = (0, a.default)(T, v),
                            L = (0, f.default)(N, T, v);
                        return _ && delete!0, L
                    }

                    function y(T) {
                        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        if (Array.isArray(T) || (T = (0, m.convertNodeList)(T)), T.some(function(ee) {
                                return ee.nodeType !== 1
                            })) throw new Error("Invalid input - only an Array of HTMLElements or representations of them is supported!");
                        var _ = (0, c.default)(T[0], v),
                            N = (0, p.getCommonAncestor)(T, v),
                            L = h(N, v),
                            R = I(T),
                            O = R[0],
                            M = (0, f.default)(L + " " + O, T, v),
                            $ = (0, m.convertNodeList)(document.querySelectorAll(M));
                        if (T.every(function(ee) {
                                return $.some(function(w) {
                                    return w === ee
                                })
                            })) return _ && delete!0, M
                    }

                    function I(T) {
                        var v = (0, p.getCommonProperties)(T),
                            _ = v.classes,
                            N = v.attributes,
                            L = v.tag,
                            R = [];
                        if (L && R.push(L), _) {
                            var O = _.map(function($) {
                                return "." + $
                            }).join("");
                            R.push(O)
                        }
                        if (N) {
                            var M = Object.keys(N).reduce(function($, ee) {
                                return $.push("[" + ee + '="' + N[ee] + '"]'), $
                            }, []).join("");
                            R.push(M)
                        }
                        return [R.join("")]
                    }

                    function S(T) {
                        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        return T.length && !T.name ? y(T, v) : h(T, v)
                    }
                }, function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.default = c;
                    var o = i(0),
                        s = {
                            attribute: function(y) {
                                return ["style", "data-reactid", "data-react-checksum"].indexOf(y) > -1
                            }
                        };

                    function c(h, y) {
                        var I = y.root,
                            S = I === void 0 ? document : I,
                            T = y.skip,
                            v = T === void 0 ? null : T,
                            _ = y.priority,
                            N = _ === void 0 ? ["id", "class", "href", "src"] : _,
                            L = y.ignore,
                            R = L === void 0 ? {} : L,
                            O = [],
                            M = h,
                            $ = O.length,
                            ee = !1,
                            w = v && (Array.isArray(v) ? v : [v]).map(function(Z) {
                                return typeof Z != "function" ? function(ie) {
                                    return ie === Z
                                } : Z
                            }),
                            q = function(ie) {
                                return v && w.some(function(Se) {
                                    return Se(ie)
                                })
                            };
                        for (Object.keys(R).forEach(function(Z) {
                                Z === "class" && (ee = !0);
                                var ie = R[Z];
                                typeof ie != "function" && (typeof ie == "number" && (ie = ie.toString()), typeof ie == "string" && (ie = new RegExp((0, o.escapeValue)(ie).replace(/\\/g, "\\\\"))), typeof ie == "boolean" && (ie = ie ? /(?:)/ : /.^/), R[Z] = function(Se, Be) {
                                    return ie.test(Be)
                                })
                            }), ee && (function() {
                                var Z = R.attribute;
                                R.attribute = function(ie, Se, Be) {
                                    return R.class(Se) || Z && Z(ie, Se, Be)
                                }
                            })(); M !== S;) {
                            if (q(M) !== !0) {
                                if (l(N, M, R, O, S) || d(M, R, O, S)) break;
                                l(N, M, R, O), O.length === $ && d(M, R, O), O.length === $ && m(N, M, R, O)
                            }
                            M = M.parentNode, $ = O.length
                        }
                        if (M === S) {
                            var se = p(N, M, R);
                            O.unshift(se)
                        }
                        return O.join(" ")
                    }

                    function l(h, y, I, S) {
                        var T = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : y.parentNode,
                            v = a(h, y, I);
                        if (v) {
                            var _ = T.querySelectorAll(v);
                            if (_.length === 1) return S.unshift(v), !0
                        }
                        return !1
                    }

                    function a(h, y, I) {
                        for (var S = y.attributes, T = Object.keys(S).sort(function(q, se) {
                                var Z = h.indexOf(S[q].name),
                                    ie = h.indexOf(S[se].name);
                                return ie === -1 ? Z === -1 ? 0 : -1 : Z - ie
                            }), v = 0, _ = T.length; v < _; v++) {
                            var N = T[v],
                                L = S[N],
                                R = L.name,
                                O = (0, o.escapeValue)(L.value),
                                M = I[R] || I.attribute,
                                $ = s[R] || s.attribute;
                            if (!E(M, R, O, $)) {
                                var ee = "[" + R + '="' + O + '"]';
                                if (/\b\d/.test(O) === !1 && (R === "id" && (ee = "#" + O), R === "class")) {
                                    var w = O.trim().replace(/\s+/g, ".");
                                    ee = "." + w
                                }
                                return ee
                            }
                        }
                        return null
                    }

                    function d(h, y, I) {
                        var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : h.parentNode,
                            T = f(h, y);
                        if (T) {
                            var v = S.getElementsByTagName(T);
                            if (v.length === 1) return I.unshift(T), !0
                        }
                        return !1
                    }

                    function f(h, y) {
                        var I = h.tagName.toLowerCase();
                        return E(y.tag, null, I) ? null : I
                    }

                    function m(h, y, I, S) {
                        for (var T = y.parentNode, v = T.childTags || T.children, _ = 0, N = v.length; _ < N; _++) {
                            var L = v[_];
                            if (L === y) {
                                var R = p(h, L, I);
                                if (!R) return;
                                var O = "> " + R + ":nth-child(" + (_ + 1) + ")";
                                return S.unshift(O), !0
                            }
                        }
                        return !1
                    }

                    function p(h, y, I) {
                        var S = a(h, y, I);
                        return S || (S = f(y, I)), S
                    }

                    function E(h, y, I, S) {
                        if (!I) return !0;
                        var T = h || S;
                        return T ? T(y, I, S) : !1
                    }
                    n.exports = r.default
                }, function(n, r, i) {
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.default = r.common = r.optimize = r.getMultiSelector = r.getSingleSelector = r.select = void 0;
                    var o = i(4);
                    Object.defineProperty(r, "getSingleSelector", {
                        enumerable: !0,
                        get: function() {
                            return o.getSingleSelector
                        }
                    }), Object.defineProperty(r, "getMultiSelector", {
                        enumerable: !0,
                        get: function() {
                            return o.getMultiSelector
                        }
                    });
                    var s = m(o),
                        c = i(2),
                        l = m(c),
                        a = i(1),
                        d = f(a);

                    function f(p) {
                        if (p && p.__esModule) return p;
                        var E = {};
                        if (p != null)
                            for (var h in p) Object.prototype.hasOwnProperty.call(p, h) && (E[h] = p[h]);
                        return E.default = p, E
                    }

                    function m(p) {
                        return p && p.__esModule ? p : {
                            default: p
                        }
                    }
                    r.select = s.default, r.optimize = l.default, r.common = d, r.default = s.default
                }])
            })
        })(Vi)), Vi.exports
    }
    var Ov = Nv();
    const Js = /\d{2,}/,
        bd = /(ember(\d+))/,
        wd = /(appcues)/,
        Nd = /(ng-.+)/,
        kv = /GCP/,
        Rv = /(sc-.+)/,
        Lv = /^(class)$/,
        Pv = /{/,
        xv = /^\s+$/,
        Dv = [Js, bd],
        Uv = [Js, wd, Nd, kv, Rv, xv],
        Fv = [Nd, Lv],
        Hv = [Js, wd, bd, Pv],
        Mv = "|shadow-root|",
        $v = "|iframe|";

    function Vr(e, t = {}) {
        return Ov.select(e, {
            ignore: {
                id: (n, r) => Dv.some(i => i.test(r)),
                class: (n, r) => Uv.some(i => i.test(r)),
                attribute: (n, r, i) => Fv.some(o => o.test(n)) || Hv.some(o => o.test(r)) || i(n, r)
            },
            ...t
        })
    }

    function Gi(e, t = "") {
        const [n] = e;
        if (!n) return t;
        const r = n.getRootNode();
        if (r === document) return t ? `${Vr(n)} ${t}` : Vr(n);
        if (r instanceof ShadowRoot) {
            const s = e.indexOf(r);
            return Gi(e.slice(s + 1), `${Mv} ${Vr(n,{root:e[s-1]})} ${t}`)
        }
        const i = r.parentWindow || r.defaultView;
        if (i !== window) {
            const s = e.indexOf(r);
            return Gi(e.slice(s + 1), `${Vr(i.frameElement)} ${$v} ${Vr(n,{root:e[s-1]})} ${t}`)
        }
        return t
    }

    function Bv(e) {
        return ["href", "src", "alt", "title", "type", "name", "placeholder", "id"].reduce((t, n) => {
            const r = e.getAttribute(n);
            return r && (t[n] = r), t
        }, {})
    }

    function Wv(e) {
        const t = [];
        let n = e;
        for (; n && n.nodeType === Node.ELEMENT_NODE;) {
            let r = n.tagName.toLowerCase();
            if (n.id) {
                r += `#${n.id}`, t.unshift(r);
                break
            } else {
                let i = n,
                    o = 1;
                for (; i.previousElementSibling;) i = i.previousElementSibling, i.tagName === n.tagName && (o += 1);
                (o > 1 || n.nextElementSibling) && (r += `:nth-of-type(${o})`), t.unshift(r)
            }
            n = n.parentElement
        }
        return t.join(" > ")
    }

    function Od(e) {
        const t = e.tagName.toLowerCase(),
            n = {
                tagName: e.tagName,
                path: Wv(e),
                ...e.classList.length > 0 ? {
                    class: [...e.classList]
                } : {},
                ...Bv(e)
            };
        if (t === "button" || t === "input" && ["submit", "button"].includes(e.getAttribute("type"))) {
            const s = e.value || e.getAttribute("value");
            s && (n.value = s)
        }
        if (t === "select" && e.selectedIndex !== void 0 && (n.selectedIndex = e.selectedIndex), !(t === "input" && !["button", "submit"].includes(e.getAttribute("type"))) && !(t === "textarea") && !(t === "select")) {
            const s = e.innerText || e.textContent;
            s && s.trim() && (n.text = s.trim())
        }
        return n
    }
    const $e = "[redacted]",
        Vv = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        Gv = new RegExp("(?<![\\w/.-])(\\+?1[\\s\\-.]?)?\\(?\\d{3}\\)?[\\s\\-.]?\\d{3}[\\s\\-.]?\\d{4}\\b", "g"),
        jv = new RegExp("(?<![\\d/])\\d{3}[-\\s]?\\d{2}[-\\s]?\\d{4}\\b(?!\\/)", "g"),
        qv = new RegExp("(?<![\\w/.-])(?:\\d[ -]?){13,16}\\b(?!\\/)", "g"),
        Kv = new RegExp("(?<!\\/)(?:\\b\\d{1,2}[/-]\\d{1,2}[/-]\\d{4}\\b|\\b\\d{4}[/-]\\d{2}[/-]\\d{2}\\b|\\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\\s+\\d{1,2},?\\s+\\d{4}\\b|\\b\\d{1,2}\\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\\s+\\d{4}\\b)(?!\\/)", "gi"),
        Yv = new RegExp("(?<!\\/)\\b[1-9][ACDEFGHJKMNPQRTUVWXY][ACDEFGHJKMNPQRTUVWXY0-9][0-9][ACDEFGHJKMNPQRTUVWXY][ACDEFGHJKMNPQRTUVWXY0-9][0-9][ACDEFGHJKMNPQRTUVWXY]{2}[0-9]{2}\\b(?!\\/)", "gi"),
        zv = new RegExp("(?<!\\/)\\b\\d{2}\\.\\d{2}\\.\\d{2}-\\d{3}\\.\\d{2}\\b(?!\\/)", "g"),
        Xv = /\b\d{2}(?:0[1-9]|1[0-2])\d{2}[-+]\d{4}\b/g,
        Jv = /\b\d{2}\.?(?:0[1-9]|1[0-2])\.?\d{2}[-+A]\d{3}[A-Z]\b/gi,
        Qv = /\b\d{7}[A-W]W?\b/gi,
        Zv = /\b[A-Z]{6}\d{2}[ABCDEHLMPRST]\d{2}[A-Z0-9]{5}\b/gi,
        eA = /\b[0-9XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]\b/gi,
        tA = /\b756\.?\d{4}\.?\d{4}\.?\d{2}\b/g,
        nA = /\b[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z]\d{6}[A-D]\b/g,
        rA = /\b[A-Z]{2}[ ]?\d{2}(?:[ ]?[A-Z0-9]{4}){3,8}(?:[ ]?[A-Z0-9]{1,3})?\b/g,
        kd = new Set(["email", "ssn", "password", "credit_card", "creditcard", "phone", "dob", "birthday", "birthdate", "birth_date", "cc", "card", "pass", "passwd", "mrn", "medical_record", "insurance_id", "diagnosis", "patient_id", "npi"]),
        iA = ["href", "src"],
        oA = ["text", "href", "src", "alt", "title", "placeholder", "selector", "name", "id", "value", "path"];

    function sA(e) {
        return typeof e != "string" ? e : e.replace(Vv, $e).replace(rA, $e).replace(Gv, $e).replace(jv, $e).replace(qv, $e).replace(Kv, $e).replace(Yv, $e).replace(zv, $e).replace(Xv, $e).replace(Jv, $e).replace(Qv, $e).replace(Zv, $e).replace(eA, $e).replace(tA, $e).replace(nA, $e)
    }

    function cA(e) {
        if (typeof e != "string") return e;
        try {
            const t = new URL(e);
            return t.protocol !== "https:" && t.protocol !== "http:" ? e : t.origin + t.pathname + t.hash
        } catch {
            return e.replace(/\?[^#]*/, "")
        }
    }

    function lA(e) {
        const {
            attributes: t = {}
        } = e, n = (t.name || "").toLowerCase(), r = (t.id || "").toLowerCase(), i = kd.has(n) || kd.has(r), o = { ...t
        };
        for (const s of iA) o[s] !== void 0 && (o[s] = cA(o[s]));
        for (const s of oA) o[s] !== void 0 && (o[s] = sA(o[s]));
        return o.identifier !== void 0 && o.selector !== void 0 && (o.identifier = `selector=${encodeURIComponent(o.selector)}`), i && (o.text !== void 0 && (o.text = $e), o.value !== void 0 && (o.value = $e)), { ...e,
            attributes: o
        }
    }
    const aA = 3e4,
        uA = new Set(["INPUT", "TEXTAREA", "SELECT"]),
        dA = new Set(["BUTTON", "A", "INPUT", "SELECT"]);

    function Rd(e) {
        return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.host : e.parentNode
    }

    function Ld(e) {
        if (e.length === 0) return null;
        const [t] = e;
        return t.tagName === "SLOT" ? Ld(e.slice(1)) : e
    }

    function Pd(e) {
        const t = [e];
        let n = Rd(e);
        for (; n;) t.push(n), n = Rd(n);
        return Ld(t)
    }

    function xd() {
        return {
            url: window.location.href,
            sdk_version: window.AppcuesBundleSettings && window.AppcuesBundleSettings.VERSION
        }
    }

    function fA(e) {
        const [t] = e.composedPath(), n = Pd(t), [r] = n, i = Od(r), o = Gi(n), s = `selector=${encodeURIComponent(o)}`;
        return Rt("appcues:clickstream", {
            interaction: "click",
            identifier: s,
            selector: o,
            ...i
        })
    }

    function pA(e) {
        const [t] = e.composedPath();
        if (!t || !uA.has(t.tagName)) return null;
        const n = Pd(t),
            [r] = n,
            i = Od(r),
            o = Gi(n),
            s = `selector=${encodeURIComponent(o)}`;
        return Rt("appcues:clickstream", {
            interaction: "input-change",
            identifier: s,
            selector: o,
            ...i
        })
    }

    function* Dd(e) {
        let t = yield A(Ye);
        (yield g(vs, t)) || (yield g(xs), t = yield A(Ye));
        const {
            id: r
        } = yield A(Xt), i = yield g(Re, xe, ur);
        yield g(Su, t, {}, e, !1, i, r, {}, xd())
    }

    function hA() {
        return ln(e => {
            const t = r => {
                    e(fA(r))
                },
                n = r => {
                    (r.key === " " || r.key === "Enter") && !dA.has(r.target.tagName) && t(r)
                };
            try {
                return document.addEventListener("click", t, !0), document.addEventListener("keyup", n, !0), () => {
                    document.removeEventListener("click", t, !0), document.removeEventListener("keyup", n, !0)
                }
            } catch {
                return null
            }
        }, Dt.expanding(10))
    }

    function mA() {
        return ln(e => {
            const t = n => {
                const r = pA(n);
                r && e(r)
            };
            try {
                return document.addEventListener("change", t, !0), () => {
                    document.removeEventListener("change", t, !0)
                }
            } catch {
                return null
            }
        }, Dt.expanding(10))
    }

    function* Ud(e, t) {
        yield $n(e, function*(n) {
            const {
                id: r
            } = yield A(Xt);
            yield C(t, lA({ ...n,
                context: xd(),
                attributes: { ...n.attributes,
                    sessionId: r
                }
            }))
        })
    }

    function* EA() {
        const e = yield g(ri, Dt.expanding(10)), t = yield g(ri), n = hA();
        yield* Ud(n, e);
        const r = mA();
        yield* Ud(r, e);
        const i = () => {
            t.put("INTERRUPT")
        };
        window.addEventListener("beforeunload", i);
        try {
            for (;;) {
                yield We({
                    delay: Xr(aA),
                    force: j(t)
                });
                const o = yield yo(e);
                if (o.length > 0) try {
                    yield g(Dd, o)
                } catch {}
            }
        } finally {
            window.removeEventListener("beforeunload", i), n.close(), r.close();
            const o = yield yo(e);
            o.length > 0 && (yield g(Dd, o)), e.close(), t.close()
        }
    }
    const gA = "/generic/main/7.20.2/container.6a6a274575024b516c91cfd03d287c29b5744063.css",
        yA = "sha256-hDvMQUFhRDDvNjMfTY9We9v9kJw7VBaXX8yL5nYcIcA=";
    window.performance && window.performance.mark && window.performance.mark("apc-init"), pT();
    const It = window.AppcuesBundleSettings;
    [...document.documentElement.querySelectorAll("link")].forEach(e => {
        /\/appcues(\.min|\.debug)?\.css$/.test(e.href) && e.parentElement && e.parentElement.removeChild(e)
    });
    const lr = document.createElement("link");
    lr.setAttribute("rel", "stylesheet"), lr.setAttribute("type", "text/css"), lr.setAttribute("integrity", yA), lr.setAttribute("crossorigin", "anonymous"), lr.setAttribute("href", Ht(gA)), document.head.appendChild(lr);
    const Qs = window[Xi];
    oe.object(Qs) && oe.defined(Qs.gaTracker) && It.integrations.ga && (It.integrations.ga.trackerName = Qs.gaTracker);
    let Zs = null;
    const Fd = document.documentElement.querySelector('script[src*="fast.appcues"]');
    Fd && (Zs = Fd.getAttribute("data-user-id"));
    const Rn = HS({
        settings: It,
        sagas: [d_, yC, q_, QT, Z_, yI, aI, NI, kI, DI, oI, FI, xT, nv, mv, ig, gv, FC, bv, function*() {
            yield F(S_, It.events)
        }, function*() {
            It.account ? .clickstreamEnabled === !0 && (yield F(EA))
        }],
        onStateChange: e => {
            F_(e), V_(e)
        }
    });
    Rn.dispatch(Jl({
        [X.DEBUGGER]: G_(Rn.dispatch, Rn.getState)
    })), Rn.dispatch(Tm(It, IT(Rn), fT, vT(It, Rn.getState)));
    const ji = w_(Rn);
    It && It.integrations && Object.keys(It.integrations).forEach(e => {
        if (It.integrations[e].isEnabled) {
            const t = ji[`init${{mixpanel:"Mixpanel",heap:"Heap",intercom:"Intercom",customerio:"CIO",vero:"Vero",woopra:"Woopra",amplitude:"Amplitude",klaviyo:"Klaviyo",calq:"Calq",localytics:"Ll",segment:"Segment",rudderstack:"Rudderstack",braze:"Braze",treasuredata:"TD",kissmetrics:"KM",ga:"GA",gtm:"GTM",fullstory:"FullStory",hotjar:"Hotjar",logrocket:"LogRocket"}[e]}`];
            t && t()
        }
    }), /hey_appcues/i.test(window.location.search) && ji.debug(), Zs !== null && ji.identify(Zs);
    const Hd = window.AppcuesBundleSettings;
    let Gr;
    if (window.Appcues && !window.Appcues.SNIPPET_VERSION) Gr = window.Appcues;
    else if (window.requestAnimationFrame && window.WebSocket && Hd.accountId && /^\d+$/.test(Hd.accountId)) window.Appcues = ji, Gr = window.Appcues;
    else {
        const e = () => {};
        Gr = {}, zd.forEach(t => {
            Gr[t] = e
        })
    }
    return Gr
})();