"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [9369], {
        5802: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return w
                }
            });
            var r = n(98587),
                i = n(58168),
                a = n(27565),
                o = n(26660),
                l = n(85800),
                u = n(49360),
                c = n(93725),
                s = n(23153),
                d = n(23637),
                f = n(22458),
                v = n(18210);

            function h(e) {
                return (0, v.Ay)("MuiTypography", e)
            }(0, f.A)("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
            var g = n(27929),
                p = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
                b = (0, c.Ay)("span", {
                    name: "MuiTypography",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [t.root, n.variant && t[n.variant], "inherit" !== n.align && t["align".concat((0, d.A)(n.align))], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
                    }
                })(function(e) {
                    var t = e.theme,
                        n = e.ownerState;
                    return (0, i.A)({
                        margin: 0
                    }, "inherit" === n.variant && {
                        font: "inherit"
                    }, "inherit" !== n.variant && t.typography[n.variant], "inherit" !== n.align && {
                        textAlign: n.align
                    }, n.noWrap && {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }, n.gutterBottom && {
                        marginBottom: "0.35em"
                    }, n.paragraph && {
                        marginBottom: 16
                    })
                }),
                m = {
                    h1: "h1",
                    h2: "h2",
                    h3: "h3",
                    h4: "h4",
                    h5: "h5",
                    h6: "h6",
                    subtitle1: "h6",
                    subtitle2: "h6",
                    body1: "p",
                    body2: "p",
                    inherit: "p"
                },
                y = {
                    primary: "primary.main",
                    textPrimary: "text.primary",
                    secondary: "secondary.main",
                    textSecondary: "text.secondary",
                    error: "error.main"
                },
                w = a.forwardRef(function(e, t) {
                    var n = (0, s.b)({
                            props: e,
                            name: "MuiTypography"
                        }),
                        a = function(e) {
                            return y[e] || e
                        }(n.color),
                        c = (0, l.A)((0, i.A)({}, n, {
                            color: a
                        })),
                        f = c.align,
                        v = void 0 === f ? "inherit" : f,
                        w = c.className,
                        A = c.component,
                        x = c.gutterBottom,
                        C = void 0 !== x && x,
                        R = c.noWrap,
                        D = void 0 !== R && R,
                        E = c.paragraph,
                        k = void 0 !== E && E,
                        S = c.variant,
                        M = void 0 === S ? "body1" : S,
                        N = c.variantMapping,
                        T = void 0 === N ? m : N,
                        I = (0, r.A)(c, p),
                        L = (0, i.A)({}, c, {
                            align: v,
                            color: a,
                            className: w,
                            component: A,
                            gutterBottom: C,
                            noWrap: D,
                            paragraph: k,
                            variant: M,
                            variantMapping: T
                        }),
                        O = A || (k ? "p" : T[M] || m[M]) || "span",
                        B = function(e) {
                            var t = e.align,
                                n = e.gutterBottom,
                                r = e.noWrap,
                                i = e.paragraph,
                                a = e.variant,
                                o = e.classes,
                                l = {
                                    root: ["root", a, "inherit" !== e.align && "align".concat((0, d.A)(t)), n && "gutterBottom", r && "noWrap", i && "paragraph"]
                                };
                            return (0, u.A)(l, h, o)
                        }(L);
                    return (0, g.jsx)(b, (0, i.A)({
                        as: O,
                        ref: t,
                        ownerState: L,
                        className: (0, o.A)(B.root, w)
                    }, I))
                })
        },
        8171: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return b
                }
            });
            var r = n(58168),
                i = n(98587),
                a = n(27565),
                o = n(26660),
                l = n(49360),
                u = n(93725),
                c = n(23153),
                s = n(20240),
                d = n(22458),
                f = n(18210);

            function v(e) {
                return (0, f.Ay)("MuiCard", e)
            }(0, d.A)("MuiCard", ["root"]);
            var h = n(27929),
                g = ["className", "raised"],
                p = (0, u.Ay)(s.A, {
                    name: "MuiCard",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        return t.root
                    }
                })(function() {
                    return {
                        overflow: "hidden"
                    }
                }),
                b = a.forwardRef(function(e, t) {
                    var n = (0, c.b)({
                            props: e,
                            name: "MuiCard"
                        }),
                        a = n.className,
                        u = n.raised,
                        s = void 0 !== u && u,
                        d = (0, i.A)(n, g),
                        f = (0, r.A)({}, n, {
                            raised: s
                        }),
                        b = function(e) {
                            var t = e.classes;
                            return (0, l.A)({
                                root: ["root"]
                            }, v, t)
                        }(f);
                    return (0, h.jsx)(p, (0, r.A)({
                        className: (0, o.A)(b.root, a),
                        elevation: s ? 8 : void 0,
                        ref: t,
                        ownerState: f
                    }, d))
                })
        },
        20720: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return R
                }
            });
            var r = n(64467),
                i = n(98587),
                a = n(58168),
                o = n(27565),
                l = n(26660),
                u = n(49360),
                c = n(72599),
                s = n(6521),
                d = n(5802),
                f = n(23637),
                v = n(93725),
                h = n(23153),
                g = n(22458),
                p = n(18210);

            function b(e) {
                return (0, p.Ay)("MuiFormControlLabel", e)
            }
            var m = (0, g.A)("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]),
                y = n(21045),
                w = n(27929),
                A = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"],
                x = (0, v.Ay)("label", {
                    name: "MuiFormControlLabel",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        var n = e.ownerState;
                        return [(0, r.A)({}, "& .".concat(m.label), t.label), t.root, t["labelPlacement".concat((0, f.A)(n.labelPlacement))]]
                    }
                })(function(e) {
                    var t = e.theme,
                        n = e.ownerState;
                    return (0, a.A)((0, r.A)({
                        display: "inline-flex",
                        alignItems: "center",
                        cursor: "pointer",
                        verticalAlign: "middle",
                        WebkitTapHighlightColor: "transparent",
                        marginLeft: -11,
                        marginRight: 16
                    }, "&.".concat(m.disabled), {
                        cursor: "default"
                    }), "start" === n.labelPlacement && {
                        flexDirection: "row-reverse",
                        marginLeft: 16,
                        marginRight: -11
                    }, "top" === n.labelPlacement && {
                        flexDirection: "column-reverse",
                        marginLeft: 16
                    }, "bottom" === n.labelPlacement && {
                        flexDirection: "column",
                        marginLeft: 16
                    }, (0, r.A)({}, "& .".concat(m.label), (0, r.A)({}, "&.".concat(m.disabled), {
                        color: (t.vars || t).palette.text.disabled
                    })))
                }),
                C = (0, v.Ay)("span", {
                    name: "MuiFormControlLabel",
                    slot: "Asterisk",
                    overridesResolver: function(e, t) {
                        return t.asterisk
                    }
                })(function(e) {
                    var t = e.theme;
                    return (0, r.A)({}, "&.".concat(m.error), {
                        color: (t.vars || t).palette.error.main
                    })
                }),
                R = o.forwardRef(function(e, t) {
                    var n, r, v = (0, h.b)({
                            props: e,
                            name: "MuiFormControlLabel"
                        }),
                        g = v.className,
                        p = v.componentsProps,
                        m = void 0 === p ? {} : p,
                        R = v.control,
                        D = v.disabled,
                        E = v.disableTypography,
                        k = v.label,
                        S = v.labelPlacement,
                        M = void 0 === S ? "end" : S,
                        N = v.required,
                        T = v.slotProps,
                        I = void 0 === T ? {} : T,
                        L = (0, i.A)(v, A),
                        O = (0, c.A)(),
                        B = null != (n = null != D ? D : R.props.disabled) ? n : null == O ? void 0 : O.disabled,
                        P = null != N ? N : R.props.required,
                        z = {
                            disabled: B,
                            required: P
                        };
                    ["checked", "name", "onChange", "value", "inputRef"].forEach(function(e) {
                        "undefined" === typeof R.props[e] && "undefined" !== typeof v[e] && (z[e] = v[e])
                    });
                    var W = (0, y.A)({
                            props: v,
                            muiFormControl: O,
                            states: ["error"]
                        }),
                        F = (0, a.A)({}, v, {
                            disabled: B,
                            labelPlacement: M,
                            required: P,
                            error: W.error
                        }),
                        Y = function(e) {
                            var t = e.classes,
                                n = e.disabled,
                                r = e.labelPlacement,
                                i = e.error,
                                a = e.required,
                                o = {
                                    root: ["root", n && "disabled", "labelPlacement".concat((0, f.A)(r)), i && "error", a && "required"],
                                    label: ["label", n && "disabled"],
                                    asterisk: ["asterisk", i && "error"]
                                };
                            return (0, u.A)(o, b, t)
                        }(F),
                        j = null != (r = I.typography) ? r : m.typography,
                        K = k;
                    return null == K || K.type === d.A || E || (K = (0, w.jsx)(d.A, (0, a.A)({
                        component: "span"
                    }, j, {
                        className: (0, l.A)(Y.label, null == j ? void 0 : j.className),
                        children: K
                    }))), (0, w.jsxs)(x, (0, a.A)({
                        className: (0, l.A)(Y.root, g),
                        ownerState: F,
                        ref: t
                    }, L, {
                        children: [o.cloneElement(R, z), P ? (0, w.jsxs)(s.A, {
                            display: "block",
                            children: [K, (0, w.jsxs)(C, {
                                ownerState: F,
                                "aria-hidden": !0,
                                className: Y.asterisk,
                                children: ["\u2009", "*"]
                            })]
                        }) : K]
                    }))
                })
        },
        33618: function(e, t, n) {
            n.d(t, {
                $$: function() {
                    return m
                },
                Es: function() {
                    return p
                },
                KG: function() {
                    return w
                },
                Ks: function() {
                    return N
                },
                Ll: function() {
                    return s
                },
                Re: function() {
                    return k
                },
                Sw: function() {
                    return u
                },
                TW: function() {
                    return g
                },
                WQ: function() {
                    return E
                },
                YG: function() {
                    return R
                },
                YN: function() {
                    return y
                },
                ZC: function() {
                    return x
                },
                _q: function() {
                    return b
                },
                ag: function() {
                    return I
                },
                e_: function() {
                    return M
                },
                jn: function() {
                    return l
                },
                kx: function() {
                    return S
                },
                l6: function() {
                    return c
                },
                lk: function() {
                    return A
                },
                sb: function() {
                    return v
                },
                wz: function() {
                    return f
                },
                xZ: function() {
                    return h
                },
                zk: function() {
                    return d
                }
            });
            var r = n(89379),
                i = n(5544),
                a = n(60436),
                o = n(27565);

            function l() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, o.useMemo)(function() {
                    return function(e) {
                        t.forEach(function(t) {
                            return t(e)
                        })
                    }
                }, t)
            }
            var u = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;

            function c(e) {
                var t = Object.prototype.toString.call(e);
                return "[object Window]" === t || "[object global]" === t
            }

            function s(e) {
                return "nodeType" in e
            }

            function d(e) {
                var t, n;
                return e ? c(e) ? e : s(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView) ? t : window : window
            }

            function f(e) {
                return e instanceof d(e).Document
            }

            function v(e) {
                return !c(e) && e instanceof d(e).HTMLElement
            }

            function h(e) {
                return e instanceof d(e).SVGElement
            }

            function g(e) {
                return e ? c(e) ? e.document : s(e) ? f(e) ? e : v(e) || h(e) ? e.ownerDocument : document : document : document
            }
            var p = u ? o.useLayoutEffect : o.useEffect;

            function b(e) {
                var t = (0, o.useRef)(e);
                return p(function() {
                    t.current = e
                }), (0, o.useCallback)(function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return null == t.current ? void 0 : t.current.apply(t, n)
                }, [])
            }

            function m() {
                var e = (0, o.useRef)(null);
                return [(0, o.useCallback)(function(t, n) {
                    e.current = setInterval(t, n)
                }, []), (0, o.useCallback)(function() {
                    null !== e.current && (clearInterval(e.current), e.current = null)
                }, [])]
            }

            function y(e, t) {
                void 0 === t && (t = [e]);
                var n = (0, o.useRef)(e);
                return p(function() {
                    n.current !== e && (n.current = e)
                }, t), n
            }

            function w(e, t) {
                var n = (0, o.useRef)();
                return (0, o.useMemo)(function() {
                    var t = e(n.current);
                    return n.current = t, t
                }, (0, a.A)(t))
            }

            function A(e) {
                var t = b(e),
                    n = (0, o.useRef)(null),
                    r = (0, o.useCallback)(function(e) {
                        e !== n.current && (null == t || t(e, n.current)), n.current = e
                    }, []);
                return [n, r]
            }

            function x(e) {
                var t = (0, o.useRef)();
                return (0, o.useEffect)(function() {
                    t.current = e
                }, [e]), t.current
            }
            var C = {};

            function R(e, t) {
                return (0, o.useMemo)(function() {
                    if (t) return t;
                    var n = null == C[e] ? 0 : C[e] + 1;
                    return C[e] = n, e + "-" + n
                }, [e, t])
            }

            function D(e) {
                return function(t) {
                    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                    return a.reduce(function(t, n) {
                        for (var r = 0, a = Object.entries(n); r < a.length; r++) {
                            var o = (0, i.A)(a[r], 2),
                                l = o[0],
                                u = o[1],
                                c = t[l];
                            null != c && (t[l] = c + e * u)
                        }
                        return t
                    }, (0, r.A)({}, t))
                }
            }
            var E = D(1),
                k = D(-1);

            function S(e) {
                if (!e) return !1;
                var t = d(e.target).KeyboardEvent;
                return t && e instanceof t
            }

            function M(e) {
                if (function(e) {
                        if (!e) return !1;
                        var t = d(e.target).TouchEvent;
                        return t && e instanceof t
                    }(e)) {
                    if (e.touches && e.touches.length) {
                        var t = e.touches[0];
                        return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                    if (e.changedTouches && e.changedTouches.length) {
                        var n = e.changedTouches[0];
                        return {
                            x: n.clientX,
                            y: n.clientY
                        }
                    }
                }
                return function(e) {
                    return "clientX" in e && "clientY" in e
                }(e) ? {
                    x: e.clientX,
                    y: e.clientY
                } : null
            }
            var N = Object.freeze({
                    Translate: {
                        toString: function(e) {
                            if (e) {
                                var t = e.x,
                                    n = e.y;
                                return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)"
                            }
                        }
                    },
                    Scale: {
                        toString: function(e) {
                            if (e) return "scaleX(" + e.scaleX + ") scaleY(" + e.scaleY + ")"
                        }
                    },
                    Transform: {
                        toString: function(e) {
                            if (e) return [N.Translate.toString(e), N.Scale.toString(e)].join(" ")
                        }
                    },
                    Transition: {
                        toString: function(e) {
                            return e.property + " " + e.duration + "ms " + e.easing
                        }
                    }
                }),
                T = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";

            function I(e) {
                return e.matches(T) ? e : e.querySelector(T)
            }
        },
        61611: function(e, t, n) {
            n.d(t, {
                Mp: function() {
                    return lt
                },
                vL: function() {
                    return fe
                },
                uN: function() {
                    return Ae
                },
                AN: function() {
                    return Ee
                },
                fp: function() {
                    return Y
                },
                y$: function() {
                    return j
                },
                Sj: function() {
                    return V
                },
                Vy: function() {
                    return W
                },
                sl: function() {
                    return $
                },
                fF: function() {
                    return ft
                },
                PM: function() {
                    return dt
                },
                zM: function() {
                    return gt
                },
                MS: function() {
                    return T
                },
                FR: function() {
                    return I
                }
            });
            var r = n(91212),
                i = n(10467),
                a = n(80045),
                o = n(5182),
                l = n(50531),
                u = n(64467),
                c = n(39874),
                s = n(85501),
                d = n(60436),
                f = n(92901),
                v = n(23029),
                h = n(89379),
                g = n(24765),
                p = n(5544),
                b = n(27565),
                m = n(86396),
                y = n(33618),
                w = {
                    display: "none"
                };

            function A(e) {
                var t = e.id,
                    n = e.value;
                return b.createElement("div", {
                    id: t,
                    style: w
                }, n)
            }

            function x(e) {
                var t = e.id,
                    n = e.announcement,
                    r = e.ariaLiveType,
                    i = void 0 === r ? "assertive" : r;
                return b.createElement("div", {
                    id: t,
                    style: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1,
                        margin: -1,
                        border: 0,
                        padding: 0,
                        overflow: "hidden",
                        clip: "rect(0 0 0 0)",
                        clipPath: "inset(100%)",
                        whiteSpace: "nowrap"
                    },
                    role: "status",
                    "aria-live": i,
                    "aria-atomic": !0
                }, n)
            }
            var C = ["transform"],
                R = ["id", "accessibility", "autoScroll", "children", "sensors", "collisionDetection", "measuring", "modifiers"],
                D = (0, b.createContext)(null);
            var E, k = {
                    draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
                },
                S = {
                    onDragStart: function(e) {
                        return "Picked up draggable item " + e.active.id + "."
                    },
                    onDragOver: function(e) {
                        var t = e.active,
                            n = e.over;
                        return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area."
                    },
                    onDragEnd: function(e) {
                        var t = e.active,
                            n = e.over;
                        return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped."
                    },
                    onDragCancel: function(e) {
                        return "Dragging was cancelled. Draggable item " + e.active.id + " was dropped."
                    }
                };

            function M(e) {
                var t = e.announcements,
                    n = void 0 === t ? S : t,
                    r = e.container,
                    i = e.hiddenTextDescribedById,
                    a = e.screenReaderInstructions,
                    o = void 0 === a ? k : a,
                    l = function() {
                        var e = (0, b.useState)(""),
                            t = (0, p.A)(e, 2),
                            n = t[0],
                            r = t[1];
                        return {
                            announce: (0, b.useCallback)(function(e) {
                                null != e && r(e)
                            }, []),
                            announcement: n
                        }
                    }(),
                    u = l.announce,
                    c = l.announcement,
                    s = (0, y.YG)("DndLiveRegion"),
                    d = (0, b.useState)(!1),
                    f = (0, p.A)(d, 2),
                    v = f[0],
                    h = f[1];
                if ((0, b.useEffect)(function() {
                        h(!0)
                    }, []), function(e) {
                        var t = (0, b.useContext)(D);
                        (0, b.useEffect)(function() {
                            if (!t) throw new Error("useDndMonitor must be used within a children of <DndContext>");
                            return t(e)
                        }, [e, t])
                    }((0, b.useMemo)(function() {
                        return {
                            onDragStart: function(e) {
                                var t = e.active;
                                u(n.onDragStart({
                                    active: t
                                }))
                            },
                            onDragMove: function(e) {
                                var t = e.active,
                                    r = e.over;
                                n.onDragMove && u(n.onDragMove({
                                    active: t,
                                    over: r
                                }))
                            },
                            onDragOver: function(e) {
                                var t = e.active,
                                    r = e.over;
                                u(n.onDragOver({
                                    active: t,
                                    over: r
                                }))
                            },
                            onDragEnd: function(e) {
                                var t = e.active,
                                    r = e.over;
                                u(n.onDragEnd({
                                    active: t,
                                    over: r
                                }))
                            },
                            onDragCancel: function(e) {
                                var t = e.active,
                                    r = e.over;
                                u(n.onDragCancel({
                                    active: t,
                                    over: r
                                }))
                            }
                        }
                    }, [u, n])), !v) return null;
                var g = b.createElement(b.Fragment, null, b.createElement(A, {
                    id: i,
                    value: o.draggable
                }), b.createElement(x, {
                    id: s,
                    announcement: c
                }));
                return r ? (0, m.createPortal)(g, r) : g
            }

            function N() {}

            function T(e, t) {
                return (0, b.useMemo)(function() {
                    return {
                        sensor: e,
                        options: null != t ? t : {}
                    }
                }, [e, t])
            }

            function I() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, b.useMemo)(function() {
                    return [].concat(t).filter(function(e) {
                        return null != e
                    })
                }, [].concat(t))
            }! function(e) {
                e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable"
            }(E || (E = {}));
            var L = Object.freeze({
                x: 0,
                y: 0
            });

            function O(e, t) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }

            function B(e, t) {
                return e.data.value - t.data.value
            }

            function P(e, t) {
                var n = e.data.value;
                return t.data.value - n
            }

            function z(e) {
                var t = e.left,
                    n = e.top,
                    r = e.height,
                    i = e.width;
                return [{
                    x: t,
                    y: n
                }, {
                    x: t + i,
                    y: n
                }, {
                    x: t,
                    y: n + r
                }, {
                    x: t + i,
                    y: n + r
                }]
            }

            function W(e, t) {
                if (!e || 0 === e.length) return null;
                var n = (0, p.A)(e, 1)[0];
                return t ? n[t] : n
            }

            function F(e, t, n) {
                return void 0 === t && (t = e.left), void 0 === n && (n = e.top), {
                    x: t + .5 * e.width,
                    y: n + .5 * e.height
                }
            }
            var Y = function(e) {
                    var t, n = e.collisionRect,
                        r = e.droppableRects,
                        i = e.droppableContainers,
                        a = F(n, n.left, n.top),
                        o = [],
                        l = (0, g.A)(i);
                    try {
                        for (l.s(); !(t = l.n()).done;) {
                            var u = t.value,
                                c = u.id,
                                s = r.get(c);
                            if (s) {
                                var d = O(F(s), a);
                                o.push({
                                    id: c,
                                    data: {
                                        droppableContainer: u,
                                        value: d
                                    }
                                })
                            }
                        }
                    } catch (f) {
                        l.e(f)
                    } finally {
                        l.f()
                    }
                    return o.sort(B)
                },
                j = function(e) {
                    var t, n = e.collisionRect,
                        r = e.droppableRects,
                        i = e.droppableContainers,
                        a = z(n),
                        o = [],
                        l = (0, g.A)(i);
                    try {
                        var u = function() {
                            var e = t.value,
                                n = e.id,
                                i = r.get(n);
                            if (i) {
                                var l = z(i),
                                    u = a.reduce(function(e, t, n) {
                                        return e + O(l[n], t)
                                    }, 0),
                                    c = Number((u / 4).toFixed(4));
                                o.push({
                                    id: n,
                                    data: {
                                        droppableContainer: e,
                                        value: c
                                    }
                                })
                            }
                        };
                        for (l.s(); !(t = l.n()).done;) u()
                    } catch (c) {
                        l.e(c)
                    } finally {
                        l.f()
                    }
                    return o.sort(B)
                };

            function K(e, t) {
                var n = Math.max(t.top, e.top),
                    r = Math.max(t.left, e.left),
                    i = Math.min(t.left + t.width, e.left + e.width),
                    a = Math.min(t.top + t.height, e.top + e.height),
                    o = i - r,
                    l = a - n;
                if (r < i && n < a) {
                    var u = t.width * t.height,
                        c = e.width * e.height,
                        s = o * l;
                    return Number((s / (u + c - s)).toFixed(4))
                }
                return 0
            }
            var U = function(e) {
                var t, n = e.collisionRect,
                    r = e.droppableRects,
                    i = e.droppableContainers,
                    a = [],
                    o = (0, g.A)(i);
                try {
                    for (o.s(); !(t = o.n()).done;) {
                        var l = t.value,
                            u = l.id,
                            c = r.get(u);
                        if (c) {
                            var s = K(c, n);
                            s > 0 && a.push({
                                id: u,
                                data: {
                                    droppableContainer: l,
                                    value: s
                                }
                            })
                        }
                    }
                } catch (d) {
                    o.e(d)
                } finally {
                    o.f()
                }
                return a.sort(P)
            };

            function q(e, t) {
                return e && t ? {
                    x: e.left - t.left,
                    y: e.top - t.top
                } : L
            }

            function X(e) {
                return function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return r.reduce(function(t, n) {
                        return (0, h.A)((0, h.A)({}, t), {}, {
                            top: t.top + e * n.y,
                            bottom: t.bottom + e * n.y,
                            left: t.left + e * n.x,
                            right: t.right + e * n.x
                        })
                    }, (0, h.A)({}, t))
                }
            }
            var G = X(1);

            function _(e) {
                if (e.startsWith("matrix3d(")) {
                    var t = e.slice(9, -1).split(/, /);
                    return {
                        x: +t[12],
                        y: +t[13],
                        scaleX: +t[0],
                        scaleY: +t[5]
                    }
                }
                if (e.startsWith("matrix(")) {
                    var n = e.slice(7, -1).split(/, /);
                    return {
                        x: +n[4],
                        y: +n[5],
                        scaleX: +n[0],
                        scaleY: +n[3]
                    }
                }
                return null
            }
            var H, J = {
                ignoreTransform: !1
            };

            function V(e, t) {
                void 0 === t && (t = J);
                var n = e.getBoundingClientRect();
                if (t.ignoreTransform) {
                    var r = (0, y.zk)(e).getComputedStyle(e),
                        i = r.transform,
                        a = r.transformOrigin;
                    i && (n = function(e, t, n) {
                        var r = _(t);
                        if (!r) return e;
                        var i = r.scaleX,
                            a = r.scaleY,
                            o = r.x,
                            l = r.y,
                            u = e.left - o - (1 - i) * parseFloat(n),
                            c = e.top - l - (1 - a) * parseFloat(n.slice(n.indexOf(" ") + 1)),
                            s = i ? e.width / i : e.width,
                            d = a ? e.height / a : e.height;
                        return {
                            width: s,
                            height: d,
                            top: c,
                            right: u + s,
                            bottom: c + d,
                            left: u
                        }
                    }(n, i, a))
                }
                var o = n;
                return {
                    top: o.top,
                    left: o.left,
                    width: o.width,
                    height: o.height,
                    bottom: o.bottom,
                    right: o.right
                }
            }

            function Q(e) {
                return V(e, {
                    ignoreTransform: !0
                })
            }

            function $(e, t) {
                var n = [];
                return e ? function r(i) {
                    if (null != t && n.length >= t) return n;
                    if (!i) return n;
                    if ((0, y.wz)(i) && null != i.scrollingElement && !n.includes(i.scrollingElement)) return n.push(i.scrollingElement), n;
                    if (!(0, y.sb)(i) || (0, y.xZ)(i)) return n;
                    if (n.includes(i)) return n;
                    var a = (0, y.zk)(e).getComputedStyle(i);
                    return i !== e && function(e, t) {
                            void 0 === t && (t = (0, y.zk)(e).getComputedStyle(e));
                            var n = /(auto|scroll|overlay)/;
                            return ["overflow", "overflowX", "overflowY"].some(function(e) {
                                var r = t[e];
                                return "string" === typeof r && n.test(r)
                            })
                        }(i, a) && n.push(i),
                        function(e, t) {
                            return void 0 === t && (t = (0, y.zk)(e).getComputedStyle(e)), "fixed" === t.position
                        }(i, a) ? n : r(i.parentNode)
                }(e) : n
            }

            function Z(e) {
                var t = $(e, 1),
                    n = (0, p.A)(t, 1)[0];
                return null != n ? n : null
            }

            function ee(e) {
                return y.Sw && e ? (0, y.l6)(e) ? e : (0, y.Ll)(e) ? (0, y.wz)(e) || e === (0, y.TW)(e).scrollingElement ? window : (0, y.sb)(e) ? e : null : null : null
            }

            function te(e) {
                return (0, y.l6)(e) ? e.scrollX : e.scrollLeft
            }

            function ne(e) {
                return (0, y.l6)(e) ? e.scrollY : e.scrollTop
            }

            function re(e) {
                return {
                    x: te(e),
                    y: ne(e)
                }
            }

            function ie(e) {
                return !(!y.Sw || !e) && e === document.scrollingElement
            }

            function ae(e) {
                var t = {
                        x: 0,
                        y: 0
                    },
                    n = ie(e) ? {
                        height: window.innerHeight,
                        width: window.innerWidth
                    } : {
                        height: e.clientHeight,
                        width: e.clientWidth
                    },
                    r = {
                        x: e.scrollWidth - n.width,
                        y: e.scrollHeight - n.height
                    };
                return {
                    isTop: e.scrollTop <= t.y,
                    isLeft: e.scrollLeft <= t.x,
                    isBottom: e.scrollTop >= r.y,
                    isRight: e.scrollLeft >= r.x,
                    maxScroll: r,
                    minScroll: t
                }
            }! function(e) {
                e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward"
            }(H || (H = {}));
            var oe = {
                x: .2,
                y: .2
            };

            function le(e, t, n, r, i) {
                var a = n.top,
                    o = n.left,
                    l = n.right,
                    u = n.bottom;
                void 0 === r && (r = 10), void 0 === i && (i = oe);
                var c = ae(e),
                    s = c.isTop,
                    d = c.isBottom,
                    f = c.isLeft,
                    v = c.isRight,
                    h = {
                        x: 0,
                        y: 0
                    },
                    g = {
                        x: 0,
                        y: 0
                    },
                    p = t.height * i.y,
                    b = t.width * i.x;
                return !s && a <= t.top + p ? (h.y = H.Backward, g.y = r * Math.abs((t.top + p - a) / p)) : !d && u >= t.bottom - p && (h.y = H.Forward, g.y = r * Math.abs((t.bottom - p - u) / p)), !v && l >= t.right - b ? (h.x = H.Forward, g.x = r * Math.abs((t.right - b - l) / b)) : !f && o <= t.left + b && (h.x = H.Backward, g.x = r * Math.abs((t.left + b - o) / b)), {
                    direction: h,
                    speed: g
                }
            }

            function ue(e) {
                if (e === document.scrollingElement) {
                    var t = window,
                        n = t.innerWidth,
                        r = t.innerHeight;
                    return {
                        top: 0,
                        left: 0,
                        right: n,
                        bottom: r,
                        width: n,
                        height: r
                    }
                }
                var i = e.getBoundingClientRect();
                return {
                    top: i.top,
                    left: i.left,
                    right: i.right,
                    bottom: i.bottom,
                    width: e.clientWidth,
                    height: e.clientHeight
                }
            }

            function ce(e) {
                return e.reduce(function(e, t) {
                    return (0, y.WQ)(e, re(t))
                }, L)
            }

            function se(e, t) {
                if (void 0 === t && (t = V), e) {
                    var n = t(e),
                        r = n.top,
                        i = n.left,
                        a = n.bottom,
                        o = n.right;
                    Z(e) && (a <= 0 || o <= 0 || r >= window.innerHeight || i >= window.innerWidth) && e.scrollIntoView({
                        block: "center",
                        inline: "center"
                    })
                }
            }
            var de, fe, ve = [
                    ["x", ["left", "right"], function(e) {
                        return e.reduce(function(e, t) {
                            return e + te(t)
                        }, 0)
                    }],
                    ["y", ["top", "bottom"], function(e) {
                        return e.reduce(function(e, t) {
                            return e + ne(t)
                        }, 0)
                    }]
                ],
                he = (0, f.A)(function e(t, n) {
                    var r = this;
                    (0, v.A)(this, e), this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
                    var i = $(n),
                        a = ce(i);
                    this.rect = (0, h.A)({}, t), this.width = t.width, this.height = t.height;
                    for (var o = function() {
                            var e, t = (0, p.A)(u[l], 3),
                                n = t[0],
                                o = t[1],
                                c = t[2],
                                s = (0, g.A)(o);
                            try {
                                var d = function() {
                                    var t = e.value;
                                    Object.defineProperty(r, t, {
                                        get: function() {
                                            var e = c(i),
                                                o = a[n] - e;
                                            return r.rect[t] + o
                                        },
                                        enumerable: !0
                                    })
                                };
                                for (s.s(); !(e = s.n()).done;) d()
                            } catch (f) {
                                s.e(f)
                            } finally {
                                s.f()
                            }
                        }, l = 0, u = ve; l < u.length; l++) o();
                    Object.defineProperty(this, "rect", {
                        enumerable: !1
                    })
                }),
                ge = function() {
                    return (0, f.A)(function e(t) {
                        var n = this;
                        (0, v.A)(this, e), this.target = void 0, this.listeners = [], this.removeAll = function() {
                            n.listeners.forEach(function(e) {
                                var t, r;
                                return null == (r = n.target) ? void 0 : (t = r).removeEventListener.apply(t, (0, d.A)(e))
                            })
                        }, this.target = t
                    }, [{
                        key: "add",
                        value: function(e, t, n) {
                            var r;
                            null == (r = this.target) || r.addEventListener(e, t, n), this.listeners.push([e, t, n])
                        }
                    }])
                }();

            function pe(e, t) {
                var n = Math.abs(e.x),
                    r = Math.abs(e.y);
                return "number" === typeof t ? Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t && r > t.y
            }

            function be(e) {
                e.preventDefault()
            }

            function me(e) {
                e.stopPropagation()
            }! function(e) {
                e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange"
            }(de || (de = {})),
            function(e) {
                e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab"
            }(fe || (fe = {}));
            var ye = {
                    start: [fe.Space, fe.Enter],
                    cancel: [fe.Esc],
                    end: [fe.Space, fe.Enter, fe.Tab]
                },
                we = function(e, t) {
                    var n = t.currentCoordinates;
                    switch (e.code) {
                        case fe.Right:
                            return (0, h.A)((0, h.A)({}, n), {}, {
                                x: n.x + 25
                            });
                        case fe.Left:
                            return (0, h.A)((0, h.A)({}, n), {}, {
                                x: n.x - 25
                            });
                        case fe.Down:
                            return (0, h.A)((0, h.A)({}, n), {}, {
                                y: n.y + 25
                            });
                        case fe.Up:
                            return (0, h.A)((0, h.A)({}, n), {}, {
                                y: n.y - 25
                            })
                    }
                },
                Ae = function() {
                    return (0, f.A)(function e(t) {
                        (0, v.A)(this, e), this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
                        var n = t.event.target;
                        this.props = t, this.listeners = new ge((0, y.TW)(n)), this.windowListeners = new ge((0, y.zk)(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach()
                    }, [{
                        key: "attach",
                        value: function() {
                            var e = this;
                            this.handleStart(), this.windowListeners.add(de.Resize, this.handleCancel), this.windowListeners.add(de.VisibilityChange, this.handleCancel), setTimeout(function() {
                                return e.listeners.add(de.Keydown, e.handleKeyDown)
                            })
                        }
                    }, {
                        key: "handleStart",
                        value: function() {
                            var e = this.props,
                                t = e.activeNode,
                                n = e.onStart,
                                r = t.node.current;
                            r && se(r), n(L)
                        }
                    }, {
                        key: "handleKeyDown",
                        value: function(e) {
                            if ((0, y.kx)(e)) {
                                var t = this.props,
                                    n = t.active,
                                    r = t.context,
                                    i = t.options,
                                    a = i.keyboardCodes,
                                    o = void 0 === a ? ye : a,
                                    l = i.coordinateGetter,
                                    u = void 0 === l ? we : l,
                                    c = i.scrollBehavior,
                                    s = void 0 === c ? "smooth" : c,
                                    d = e.code;
                                if (o.end.includes(d)) return void this.handleEnd(e);
                                if (o.cancel.includes(d)) return void this.handleCancel(e);
                                var f = r.current.collisionRect,
                                    v = f ? {
                                        x: f.left,
                                        y: f.top
                                    } : L;
                                this.referenceCoordinates || (this.referenceCoordinates = v);
                                var h = u(e, {
                                    active: n,
                                    context: r.current,
                                    currentCoordinates: v
                                });
                                if (h) {
                                    var p, b = (0, y.Re)(h, v),
                                        m = {
                                            x: 0,
                                            y: 0
                                        },
                                        w = r.current.scrollableAncestors,
                                        A = (0, g.A)(w);
                                    try {
                                        for (A.s(); !(p = A.n()).done;) {
                                            var x = p.value,
                                                C = e.code,
                                                R = ae(x),
                                                D = R.isTop,
                                                E = R.isRight,
                                                k = R.isLeft,
                                                S = R.isBottom,
                                                M = R.maxScroll,
                                                N = R.minScroll,
                                                T = ue(x),
                                                I = {
                                                    x: Math.min(C === fe.Right ? T.right - T.width / 2 : T.right, Math.max(C === fe.Right ? T.left : T.left + T.width / 2, h.x)),
                                                    y: Math.min(C === fe.Down ? T.bottom - T.height / 2 : T.bottom, Math.max(C === fe.Down ? T.top : T.top + T.height / 2, h.y))
                                                },
                                                O = C === fe.Right && !E || C === fe.Left && !k,
                                                B = C === fe.Down && !S || C === fe.Up && !D;
                                            if (O && I.x !== h.x) {
                                                var P = x.scrollLeft + b.x,
                                                    z = C === fe.Right && P <= M.x || C === fe.Left && P >= N.x;
                                                if (z && !b.y) return void x.scrollTo({
                                                    left: P,
                                                    behavior: s
                                                });
                                                m.x = z ? x.scrollLeft - P : C === fe.Right ? x.scrollLeft - M.x : x.scrollLeft - N.x, m.x && x.scrollBy({
                                                    left: -m.x,
                                                    behavior: s
                                                });
                                                break
                                            }
                                            if (B && I.y !== h.y) {
                                                var W = x.scrollTop + b.y,
                                                    F = C === fe.Down && W <= M.y || C === fe.Up && W >= N.y;
                                                if (F && !b.x) return void x.scrollTo({
                                                    top: W,
                                                    behavior: s
                                                });
                                                m.y = F ? x.scrollTop - W : C === fe.Down ? x.scrollTop - M.y : x.scrollTop - N.y, m.y && x.scrollBy({
                                                    top: -m.y,
                                                    behavior: s
                                                });
                                                break
                                            }
                                        }
                                    } catch (Y) {
                                        A.e(Y)
                                    } finally {
                                        A.f()
                                    }
                                    this.handleMove(e, (0, y.WQ)((0, y.Re)(h, this.referenceCoordinates), m))
                                }
                            }
                        }
                    }, {
                        key: "handleMove",
                        value: function(e, t) {
                            var n = this.props.onMove;
                            e.preventDefault(), n(t)
                        }
                    }, {
                        key: "handleEnd",
                        value: function(e) {
                            var t = this.props.onEnd;
                            e.preventDefault(), this.detach(), t()
                        }
                    }, {
                        key: "handleCancel",
                        value: function(e) {
                            var t = this.props.onCancel;
                            e.preventDefault(), this.detach(), t()
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.listeners.removeAll(), this.windowListeners.removeAll()
                        }
                    }])
                }();

            function xe(e) {
                return Boolean(e && "distance" in e)
            }

            function Ce(e) {
                return Boolean(e && "delay" in e)
            }
            Ae.activators = [{
                eventName: "onKeyDown",
                handler: function(e, t, n) {
                    var r = t.keyboardCodes,
                        i = void 0 === r ? ye : r,
                        a = t.onActivation,
                        o = n.active,
                        l = e.nativeEvent.code;
                    if (i.start.includes(l)) {
                        var u = o.activatorNode.current;
                        return (!u || e.target === u) && (e.preventDefault(), null == a || a({
                            event: e.nativeEvent
                        }), !0)
                    }
                    return !1
                }
            }];
            var Re = function() {
                    return (0, f.A)(function e(t, n, r) {
                        var i;
                        (0, v.A)(this, e), void 0 === r && (r = function(e) {
                            return e instanceof(0, y.zk)(e).EventTarget ? e : (0, y.TW)(e)
                        }(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
                        var a = t.event,
                            o = a.target;
                        this.props = t, this.events = n, this.document = (0, y.TW)(o), this.documentListeners = new ge(this.document), this.listeners = new ge(r), this.windowListeners = new ge((0, y.zk)(o)), this.initialCoordinates = null != (i = (0, y.e_)(a)) ? i : L, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach()
                    }, [{
                        key: "attach",
                        value: function() {
                            var e = this.events,
                                t = this.props.options,
                                n = t.activationConstraint,
                                r = t.bypassActivationConstraint;
                            if (this.listeners.add(e.move.name, this.handleMove, {
                                    passive: !1
                                }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(de.Resize, this.handleCancel), this.windowListeners.add(de.DragStart, be), this.windowListeners.add(de.VisibilityChange, this.handleCancel), this.windowListeners.add(de.ContextMenu, be), this.documentListeners.add(de.Keydown, this.handleKeydown), n) {
                                if (null != r && r({
                                        event: this.props.event,
                                        activeNode: this.props.activeNode,
                                        options: this.props.options
                                    })) return this.handleStart();
                                if (Ce(n)) return this.timeoutId = setTimeout(this.handleStart, n.delay), void this.handlePending(n);
                                if (xe(n)) return void this.handlePending(n)
                            }
                            this.handleStart()
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), null !== this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null)
                        }
                    }, {
                        key: "handlePending",
                        value: function(e, t) {
                            var n = this.props,
                                r = n.active;
                            (0, n.onPending)(r, e, this.initialCoordinates, t)
                        }
                    }, {
                        key: "handleStart",
                        value: function() {
                            var e = this.initialCoordinates,
                                t = this.props.onStart;
                            e && (this.activated = !0, this.documentListeners.add(de.Click, me, {
                                capture: !0
                            }), this.removeTextSelection(), this.documentListeners.add(de.SelectionChange, this.removeTextSelection), t(e))
                        }
                    }, {
                        key: "handleMove",
                        value: function(e) {
                            var t, n = this.activated,
                                r = this.initialCoordinates,
                                i = this.props,
                                a = i.onMove,
                                o = i.options.activationConstraint;
                            if (r) {
                                var l = null != (t = (0, y.e_)(e)) ? t : L,
                                    u = (0, y.Re)(r, l);
                                if (!n && o) {
                                    if (xe(o)) {
                                        if (null != o.tolerance && pe(u, o.tolerance)) return this.handleCancel();
                                        if (pe(u, o.distance)) return this.handleStart()
                                    }
                                    return Ce(o) && pe(u, o.tolerance) ? this.handleCancel() : void this.handlePending(o, u)
                                }
                                e.cancelable && e.preventDefault(), a(l)
                            }
                        }
                    }, {
                        key: "handleEnd",
                        value: function() {
                            var e = this.props,
                                t = e.onAbort,
                                n = e.onEnd;
                            this.detach(), this.activated || t(this.props.active), n()
                        }
                    }, {
                        key: "handleCancel",
                        value: function() {
                            var e = this.props,
                                t = e.onAbort,
                                n = e.onCancel;
                            this.detach(), this.activated || t(this.props.active), n()
                        }
                    }, {
                        key: "handleKeydown",
                        value: function(e) {
                            e.code === fe.Esc && this.handleCancel()
                        }
                    }, {
                        key: "removeTextSelection",
                        value: function() {
                            var e;
                            null == (e = this.document.getSelection()) || e.removeAllRanges()
                        }
                    }])
                }(),
                De = {
                    cancel: {
                        name: "pointercancel"
                    },
                    move: {
                        name: "pointermove"
                    },
                    end: {
                        name: "pointerup"
                    }
                },
                Ee = function(e) {
                    function t(e) {
                        (0, v.A)(this, t);
                        var n = e.event,
                            r = (0, y.TW)(n.target);
                        return (0, c.A)(this, t, [e, De, r])
                    }
                    return (0, s.A)(t, e), (0, f.A)(t)
                }(Re);
            Ee.activators = [{
                eventName: "onPointerDown",
                handler: function(e, t) {
                    var n = e.nativeEvent,
                        r = t.onActivation;
                    return !(!n.isPrimary || 0 !== n.button) && (null == r || r({
                        event: n
                    }), !0)
                }
            }];
            var ke, Se = {
                move: {
                    name: "mousemove"
                },
                end: {
                    name: "mouseup"
                }
            };
            ! function(e) {
                e[e.RightClick = 2] = "RightClick"
            }(ke || (ke = {})), (function(e) {
                function t(e) {
                    return (0, v.A)(this, t), (0, c.A)(this, t, [e, Se, (0, y.TW)(e.event.target)])
                }
                return (0, s.A)(t, e), (0, f.A)(t)
            }(Re)).activators = [{
                eventName: "onMouseDown",
                handler: function(e, t) {
                    var n = e.nativeEvent,
                        r = t.onActivation;
                    return n.button !== ke.RightClick && (null == r || r({
                        event: n
                    }), !0)
                }
            }];
            var Me, Ne, Te = {
                    cancel: {
                        name: "touchcancel"
                    },
                    move: {
                        name: "touchmove"
                    },
                    end: {
                        name: "touchend"
                    }
                },
                Ie = function(e) {
                    function t(e) {
                        return (0, v.A)(this, t), (0, c.A)(this, t, [e, Te])
                    }
                    return (0, s.A)(t, e), (0, f.A)(t, null, [{
                        key: "setup",
                        value: function() {
                            return window.addEventListener(Te.move.name, e, {
                                    capture: !1,
                                    passive: !1
                                }),
                                function() {
                                    window.removeEventListener(Te.move.name, e)
                                };

                            function e() {}
                        }
                    }])
                }(Re);

            function Le(e) {
                var t = e.acceleration,
                    n = e.activator,
                    r = void 0 === n ? Me.Pointer : n,
                    i = e.canScroll,
                    a = e.draggingRect,
                    o = e.enabled,
                    l = e.interval,
                    c = void 0 === l ? 5 : l,
                    s = e.order,
                    f = void 0 === s ? Ne.TreeOrder : s,
                    v = e.pointerCoordinates,
                    h = e.scrollableAncestors,
                    m = e.scrollableAncestorRects,
                    w = e.delta,
                    A = e.threshold,
                    x = function(e) {
                        var t = e.delta,
                            n = e.disabled,
                            r = (0, y.ZC)(t);
                        return (0, y.KG)(function(e) {
                            if (n || !r || !e) return Pe;
                            var i = {
                                x: Math.sign(t.x - r.x),
                                y: Math.sign(t.y - r.y)
                            };
                            return {
                                x: (0, u.A)((0, u.A)({}, H.Backward, e.x[H.Backward] || -1 === i.x), H.Forward, e.x[H.Forward] || 1 === i.x),
                                y: (0, u.A)((0, u.A)({}, H.Backward, e.y[H.Backward] || -1 === i.y), H.Forward, e.y[H.Forward] || 1 === i.y)
                            }
                        }, [n, t, r])
                    }({
                        delta: w,
                        disabled: !o
                    }),
                    C = (0, y.$$)(),
                    R = (0, p.A)(C, 2),
                    D = R[0],
                    E = R[1],
                    k = (0, b.useRef)({
                        x: 0,
                        y: 0
                    }),
                    S = (0, b.useRef)({
                        x: 0,
                        y: 0
                    }),
                    M = (0, b.useMemo)(function() {
                        switch (r) {
                            case Me.Pointer:
                                return v ? {
                                    top: v.y,
                                    bottom: v.y,
                                    left: v.x,
                                    right: v.x
                                } : null;
                            case Me.DraggableRect:
                                return a
                        }
                    }, [r, a, v]),
                    N = (0, b.useRef)(null),
                    T = (0, b.useCallback)(function() {
                        var e = N.current;
                        if (e) {
                            var t = k.current.x * S.current.x,
                                n = k.current.y * S.current.y;
                            e.scrollBy(t, n)
                        }
                    }, []),
                    I = (0, b.useMemo)(function() {
                        return f === Ne.TreeOrder ? (0, d.A)(h).reverse() : h
                    }, [f, h]);
                (0, b.useEffect)(function() {
                    if (o && h.length && M) {
                        var e, n = (0, g.A)(I);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var r = e.value;
                                if (!1 !== (null == i ? void 0 : i(r))) {
                                    var a = h.indexOf(r),
                                        l = m[a];
                                    if (l) {
                                        for (var u = le(r, l, M, t, A), s = u.direction, d = u.speed, f = 0, v = ["x", "y"]; f < v.length; f++) {
                                            var p = v[f];
                                            x[p][s[p]] || (d[p] = 0, s[p] = 0)
                                        }
                                        if (d.x > 0 || d.y > 0) return E(), N.current = r, D(T, c), k.current = d, void(S.current = s)
                                    }
                                }
                            }
                        } catch (b) {
                            n.e(b)
                        } finally {
                            n.f()
                        }
                        k.current = {
                            x: 0,
                            y: 0
                        }, S.current = {
                            x: 0,
                            y: 0
                        }, E()
                    } else E()
                }, [t, T, i, E, o, c, JSON.stringify(M), JSON.stringify(x), D, h, I, m, JSON.stringify(A)])
            }
            Ie.activators = [{
                    eventName: "onTouchStart",
                    handler: function(e, t) {
                        var n = e.nativeEvent,
                            r = t.onActivation;
                        return !(n.touches.length > 1) && (null == r || r({
                            event: n
                        }), !0)
                    }
                }],
                function(e) {
                    e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect"
                }(Me || (Me = {})),
                function(e) {
                    e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder"
                }(Ne || (Ne = {}));
            var Oe, Be, Pe = {
                x: (0, u.A)((0, u.A)({}, H.Backward, !1), H.Forward, !1),
                y: (0, u.A)((0, u.A)({}, H.Backward, !1), H.Forward, !1)
            };
            ! function(e) {
                e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging"
            }(Oe || (Oe = {})),
            function(e) {
                e.Optimized = "optimized"
            }(Be || (Be = {}));
            var ze = new Map;

            function We(e, t) {
                return (0, y.KG)(function(n) {
                    return e ? n || ("function" === typeof t ? t(e) : e) : null
                }, [t, e])
            }

            function Fe(e) {
                var t = e.callback,
                    n = e.disabled,
                    r = (0, y._q)(t),
                    i = (0, b.useMemo)(function() {
                        if (!n && "undefined" !== typeof window && "undefined" !== typeof window.ResizeObserver) return new(0, window.ResizeObserver)(r)
                    }, [n]);
                return (0, b.useEffect)(function() {
                    return function() {
                        return null == i ? void 0 : i.disconnect()
                    }
                }, [i]), i
            }

            function Ye(e) {
                return new he(V(e), e)
            }

            function je(e, t, n) {
                void 0 === t && (t = Ye);
                var r = (0, b.useState)(null),
                    i = (0, p.A)(r, 2),
                    a = i[0],
                    o = i[1];

                function l() {
                    o(function(r) {
                        if (!e) return null;
                        var i;
                        if (!1 === e.isConnected) return null != (i = null != r ? r : n) ? i : null;
                        var a = t(e);
                        return JSON.stringify(r) === JSON.stringify(a) ? r : a
                    })
                }
                var u = function(e) {
                        var t = e.callback,
                            n = e.disabled,
                            r = (0, y._q)(t),
                            i = (0, b.useMemo)(function() {
                                if (!n && "undefined" !== typeof window && "undefined" !== typeof window.MutationObserver) return new(0, window.MutationObserver)(r)
                            }, [r, n]);
                        return (0, b.useEffect)(function() {
                            return function() {
                                return null == i ? void 0 : i.disconnect()
                            }
                        }, [i]), i
                    }({
                        callback: function(t) {
                            if (e) {
                                var n, r = (0, g.A)(t);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var i = n.value,
                                            a = i.type,
                                            o = i.target;
                                        if ("childList" === a && o instanceof HTMLElement && o.contains(e)) {
                                            l();
                                            break
                                        }
                                    }
                                } catch (u) {
                                    r.e(u)
                                } finally {
                                    r.f()
                                }
                            }
                        }
                    }),
                    c = Fe({
                        callback: l
                    });
                return (0, y.Es)(function() {
                    l(), e ? (null == c || c.observe(e), null == u || u.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })) : (null == c || c.disconnect(), null == u || u.disconnect())
                }, [e]), a
            }
            var Ke = [];

            function Ue(e, t) {
                void 0 === t && (t = []);
                var n = (0, b.useRef)(null);
                return (0, b.useEffect)(function() {
                    n.current = null
                }, t), (0, b.useEffect)(function() {
                    var t = e !== L;
                    t && !n.current && (n.current = e), !t && n.current && (n.current = null)
                }, [e]), n.current ? (0, y.Re)(e, n.current) : L
            }

            function qe(e) {
                return (0, b.useMemo)(function() {
                    return e ? function(e) {
                        var t = e.innerWidth,
                            n = e.innerHeight;
                        return {
                            top: 0,
                            left: 0,
                            right: t,
                            bottom: n,
                            width: t,
                            height: n
                        }
                    }(e) : null
                }, [e])
            }
            var Xe = [];

            function Ge(e) {
                if (!e) return null;
                if (e.children.length > 1) return e;
                var t = e.children[0];
                return (0, y.sb)(t) ? t : e
            }
            var _e = [{
                    sensor: Ee,
                    options: {}
                }, {
                    sensor: Ae,
                    options: {}
                }],
                He = {
                    current: {}
                },
                Je = {
                    draggable: {
                        measure: Q
                    },
                    droppable: {
                        measure: Q,
                        strategy: Oe.WhileDragging,
                        frequency: Be.Optimized
                    },
                    dragOverlay: {
                        measure: V
                    }
                },
                Ve = function(e) {
                    function t() {
                        return (0, v.A)(this, t), (0, c.A)(this, t, arguments)
                    }
                    return (0, s.A)(t, e), (0, f.A)(t, [{
                        key: "get",
                        value: function(e) {
                            var n;
                            return null != e && null != (n = (0, o.A)(t, "get", this, 3)([e])) ? n : void 0
                        }
                    }, {
                        key: "toArray",
                        value: function() {
                            return Array.from(this.values())
                        }
                    }, {
                        key: "getEnabled",
                        value: function() {
                            return this.toArray().filter(function(e) {
                                return !e.disabled
                            })
                        }
                    }, {
                        key: "getNodeFor",
                        value: function(e) {
                            var t, n;
                            return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0
                        }
                    }])
                }((0, l.A)(Map)),
                Qe = {
                    activatorEvent: null,
                    active: null,
                    activeNode: null,
                    activeNodeRect: null,
                    collisions: null,
                    containerNodeRect: null,
                    draggableNodes: new Map,
                    droppableRects: new Map,
                    droppableContainers: new Ve,
                    over: null,
                    dragOverlay: {
                        nodeRef: {
                            current: null
                        },
                        rect: null,
                        setRef: N
                    },
                    scrollableAncestors: [],
                    scrollableAncestorRects: [],
                    measuringConfiguration: Je,
                    measureDroppableContainers: N,
                    windowRect: null,
                    measuringScheduled: !1
                },
                $e = {
                    activatorEvent: null,
                    activators: [],
                    active: null,
                    activeNodeRect: null,
                    ariaDescribedById: {
                        draggable: ""
                    },
                    dispatch: N,
                    draggableNodes: new Map,
                    over: null,
                    measureDroppableContainers: N
                },
                Ze = (0, b.createContext)($e),
                et = (0, b.createContext)(Qe);

            function tt() {
                return {
                    draggable: {
                        active: null,
                        initialCoordinates: {
                            x: 0,
                            y: 0
                        },
                        nodes: new Map,
                        translate: {
                            x: 0,
                            y: 0
                        }
                    },
                    droppable: {
                        containers: new Ve
                    }
                }
            }

            function nt(e, t) {
                switch (t.type) {
                    case E.DragStart:
                        return (0, h.A)((0, h.A)({}, e), {}, {
                            draggable: (0, h.A)((0, h.A)({}, e.draggable), {}, {
                                initialCoordinates: t.initialCoordinates,
                                active: t.active
                            })
                        });
                    case E.DragMove:
                        return null == e.draggable.active ? e : (0, h.A)((0, h.A)({}, e), {}, {
                            draggable: (0, h.A)((0, h.A)({}, e.draggable), {}, {
                                translate: {
                                    x: t.coordinates.x - e.draggable.initialCoordinates.x,
                                    y: t.coordinates.y - e.draggable.initialCoordinates.y
                                }
                            })
                        });
                    case E.DragEnd:
                    case E.DragCancel:
                        return (0, h.A)((0, h.A)({}, e), {}, {
                            draggable: (0, h.A)((0, h.A)({}, e.draggable), {}, {
                                active: null,
                                initialCoordinates: {
                                    x: 0,
                                    y: 0
                                },
                                translate: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        });
                    case E.RegisterDroppable:
                        var n = t.element,
                            r = n.id,
                            i = new Ve(e.droppable.containers);
                        return i.set(r, n), (0, h.A)((0, h.A)({}, e), {}, {
                            droppable: (0, h.A)((0, h.A)({}, e.droppable), {}, {
                                containers: i
                            })
                        });
                    case E.SetDroppableDisabled:
                        var a = t.id,
                            o = t.key,
                            l = t.disabled,
                            u = e.droppable.containers.get(a);
                        if (!u || o !== u.key) return e;
                        var c = new Ve(e.droppable.containers);
                        return c.set(a, (0, h.A)((0, h.A)({}, u), {}, {
                            disabled: l
                        })), (0, h.A)((0, h.A)({}, e), {}, {
                            droppable: (0, h.A)((0, h.A)({}, e.droppable), {}, {
                                containers: c
                            })
                        });
                    case E.UnregisterDroppable:
                        var s = t.id,
                            d = t.key,
                            f = e.droppable.containers.get(s);
                        if (!f || d !== f.key) return e;
                        var v = new Ve(e.droppable.containers);
                        return v.delete(s), (0, h.A)((0, h.A)({}, e), {}, {
                            droppable: (0, h.A)((0, h.A)({}, e.droppable), {}, {
                                containers: v
                            })
                        });
                    default:
                        return e
                }
            }

            function rt(e) {
                var t = e.disabled,
                    n = (0, b.useContext)(Ze),
                    r = n.active,
                    i = n.activatorEvent,
                    a = n.draggableNodes,
                    o = (0, y.ZC)(i),
                    l = (0, y.ZC)(null == r ? void 0 : r.id);
                return (0, b.useEffect)(function() {
                    if (!t && !i && o && null != l) {
                        if (!(0, y.kx)(o)) return;
                        if (document.activeElement === o.target) return;
                        var e = a.get(l);
                        if (!e) return;
                        var n = e.activatorNode,
                            r = e.node;
                        if (!n.current && !r.current) return;
                        requestAnimationFrame(function() {
                            for (var e = 0, t = [n.current, r.current]; e < t.length; e++) {
                                var i = t[e];
                                if (i) {
                                    var a = (0, y.ag)(i);
                                    if (a) {
                                        a.focus();
                                        break
                                    }
                                }
                            }
                        })
                    }
                }, [i, t, a, l, o]), null
            }

            function it(e, t) {
                var n = t.transform,
                    r = (0, a.A)(t, C);
                return null != e && e.length ? e.reduce(function(e, t) {
                    return t((0, h.A)({
                        transform: e
                    }, r))
                }, n) : n
            }
            var at, ot = (0, b.createContext)((0, h.A)((0, h.A)({}, L), {}, {
                scaleX: 1,
                scaleY: 1
            }));
            ! function(e) {
                e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized"
            }(at || (at = {}));
            var lt = (0, b.memo)(function(e) {
                    var t, n, o, l, u, c = e.id,
                        s = e.accessibility,
                        f = e.autoScroll,
                        v = void 0 === f || f,
                        w = e.children,
                        A = e.sensors,
                        x = void 0 === A ? _e : A,
                        C = e.collisionDetection,
                        k = void 0 === C ? U : C,
                        S = e.measuring,
                        N = e.modifiers,
                        T = (0, a.A)(e, R),
                        I = (0, b.useReducer)(nt, void 0, tt),
                        O = (0, p.A)(I, 2),
                        B = O[0],
                        P = O[1],
                        z = function() {
                            var e = (0, b.useState)(function() {
                                    return new Set
                                }),
                                t = (0, p.A)(e, 1)[0],
                                n = (0, b.useCallback)(function(e) {
                                    return t.add(e),
                                        function() {
                                            return t.delete(e)
                                        }
                                }, [t]);
                            return [(0, b.useCallback)(function(e) {
                                var n = e.type,
                                    r = e.event;
                                t.forEach(function(e) {
                                    var t;
                                    return null == (t = e[n]) ? void 0 : t.call(e, r)
                                })
                            }, [t]), n]
                        }(),
                        F = (0, p.A)(z, 2),
                        Y = F[0],
                        j = F[1],
                        K = (0, b.useState)(at.Uninitialized),
                        X = (0, p.A)(K, 2),
                        _ = X[0],
                        H = X[1],
                        J = _ === at.Initialized,
                        Q = B.draggable,
                        te = Q.active,
                        ne = Q.nodes,
                        ae = Q.translate,
                        oe = B.droppable.containers,
                        le = null != te ? ne.get(te) : null,
                        ue = (0, b.useRef)({
                            initial: null,
                            translated: null
                        }),
                        se = (0, b.useMemo)(function() {
                            var e;
                            return null != te ? {
                                id: te,
                                data: null != (e = null == le ? void 0 : le.data) ? e : He,
                                rect: ue
                            } : null
                        }, [te, le]),
                        de = (0, b.useRef)(null),
                        fe = (0, b.useState)(null),
                        ve = (0, p.A)(fe, 2),
                        ge = ve[0],
                        pe = ve[1],
                        be = (0, b.useState)(null),
                        me = (0, p.A)(be, 2),
                        ye = me[0],
                        we = me[1],
                        Ae = (0, y.YN)(T, Object.values(T)),
                        xe = (0, y.YG)("DndDescribedBy", c),
                        Ce = (0, b.useMemo)(function() {
                            return oe.getEnabled()
                        }, [oe]),
                        Re = (u = S, (0, b.useMemo)(function() {
                            return {
                                draggable: (0, h.A)((0, h.A)({}, Je.draggable), null == u ? void 0 : u.draggable),
                                droppable: (0, h.A)((0, h.A)({}, Je.droppable), null == u ? void 0 : u.droppable),
                                dragOverlay: (0, h.A)((0, h.A)({}, Je.dragOverlay), null == u ? void 0 : u.dragOverlay)
                            }
                        }, [null == u ? void 0 : u.draggable, null == u ? void 0 : u.droppable, null == u ? void 0 : u.dragOverlay])),
                        De = function(e, t) {
                            var n = t.dragging,
                                r = t.dependencies,
                                i = t.config,
                                a = (0, b.useState)(null),
                                o = (0, p.A)(a, 2),
                                l = o[0],
                                u = o[1],
                                c = i.frequency,
                                s = i.measure,
                                f = i.strategy,
                                v = (0, b.useRef)(e),
                                h = function() {
                                    switch (f) {
                                        case Oe.Always:
                                            return !1;
                                        case Oe.BeforeDragging:
                                            return n;
                                        default:
                                            return !n
                                    }
                                }(),
                                m = (0, y.YN)(h),
                                w = (0, b.useCallback)(function(e) {
                                    void 0 === e && (e = []), m.current || u(function(t) {
                                        return null === t ? e : t.concat(e.filter(function(e) {
                                            return !t.includes(e)
                                        }))
                                    })
                                }, [m]),
                                A = (0, b.useRef)(null),
                                x = (0, y.KG)(function(t) {
                                    if (h && !n) return ze;
                                    if (!t || t === ze || v.current !== e || null != l) {
                                        var r, i = new Map,
                                            a = (0, g.A)(e);
                                        try {
                                            for (a.s(); !(r = a.n()).done;) {
                                                var o = r.value;
                                                if (o)
                                                    if (l && l.length > 0 && !l.includes(o.id) && o.rect.current) i.set(o.id, o.rect.current);
                                                    else {
                                                        var u = o.node.current,
                                                            c = u ? new he(s(u), u) : null;
                                                        o.rect.current = c, c && i.set(o.id, c)
                                                    }
                                            }
                                        } catch (d) {
                                            a.e(d)
                                        } finally {
                                            a.f()
                                        }
                                        return i
                                    }
                                    return t
                                }, [e, l, n, h, s]);
                            return (0, b.useEffect)(function() {
                                v.current = e
                            }, [e]), (0, b.useEffect)(function() {
                                h || w()
                            }, [n, h]), (0, b.useEffect)(function() {
                                l && l.length > 0 && u(null)
                            }, [JSON.stringify(l)]), (0, b.useEffect)(function() {
                                h || "number" !== typeof c || null !== A.current || (A.current = setTimeout(function() {
                                    w(), A.current = null
                                }, c))
                            }, [c, h, w].concat((0, d.A)(r))), {
                                droppableRects: x,
                                measureDroppableContainers: w,
                                measuringScheduled: null != l
                            }
                        }(Ce, {
                            dragging: J,
                            dependencies: [ae.x, ae.y],
                            config: Re.droppable
                        }),
                        Ee = De.droppableRects,
                        ke = De.measureDroppableContainers,
                        Se = De.measuringScheduled,
                        Me = function(e, t) {
                            var n = null != t ? e.get(t) : void 0,
                                r = n ? n.node.current : null;
                            return (0, y.KG)(function(e) {
                                var n;
                                return null == t ? null : null != (n = null != r ? r : e) ? n : null
                            }, [r, t])
                        }(ne, te),
                        Ne = (0, b.useMemo)(function() {
                            return ye ? (0, y.e_)(ye) : null
                        }, [ye]),
                        Te = function() {
                            var e = !1 === (null == ge ? void 0 : ge.autoScrollEnabled),
                                t = "object" === typeof v ? !1 === v.enabled : !1 === v,
                                n = J && !e && !t;
                            if ("object" === typeof v) return (0, h.A)((0, h.A)({}, v), {}, {
                                enabled: n
                            });
                            return {
                                enabled: n
                            }
                        }(),
                        Ie = function(e, t) {
                            return We(e, t)
                        }(Me, Re.draggable.measure);
                    ! function(e) {
                        var t = e.activeNode,
                            n = e.measure,
                            r = e.initialRect,
                            i = e.config,
                            a = void 0 === i || i,
                            o = (0, b.useRef)(!1),
                            l = "boolean" === typeof a ? {
                                x: a,
                                y: a
                            } : a,
                            u = l.x,
                            c = l.y;
                        (0, y.Es)(function() {
                            if ((u || c) && t) {
                                if (!o.current && r) {
                                    var e = null == t ? void 0 : t.node.current;
                                    if (e && !1 !== e.isConnected) {
                                        var i = q(n(e), r);
                                        if (u || (i.x = 0), c || (i.y = 0), o.current = !0, Math.abs(i.x) > 0 || Math.abs(i.y) > 0) {
                                            var a = Z(e);
                                            a && a.scrollBy({
                                                top: i.y,
                                                left: i.x
                                            })
                                        }
                                    }
                                }
                            } else o.current = !1
                        }, [t, u, c, r, n])
                    }({
                        activeNode: null != te ? ne.get(te) : null,
                        config: Te.layoutShiftCompensation,
                        initialRect: Ie,
                        measure: Re.draggable.measure
                    });
                    var Be, Pe = je(Me, Re.draggable.measure, Ie),
                        Ye = je(Me ? Me.parentElement : null),
                        Ve = (0, b.useRef)({
                            activatorEvent: null,
                            active: null,
                            activeNode: Me,
                            collisionRect: null,
                            collisions: null,
                            droppableRects: Ee,
                            draggableNodes: ne,
                            draggingNode: null,
                            draggingNodeRect: null,
                            droppableContainers: oe,
                            over: null,
                            scrollableAncestors: [],
                            scrollAdjustedTranslate: null
                        }),
                        Qe = oe.getNodeFor(null == (t = Ve.current.over) ? void 0 : t.id),
                        $e = function(e) {
                            var t = e.measure,
                                n = (0, b.useState)(null),
                                r = (0, p.A)(n, 2),
                                i = r[0],
                                a = r[1],
                                o = Fe({
                                    callback: (0, b.useCallback)(function(e) {
                                        var n, r = (0, g.A)(e);
                                        try {
                                            var i = function() {
                                                var e = n.value.target;
                                                if ((0, y.sb)(e)) return a(function(n) {
                                                    var r = t(e);
                                                    return n ? (0, h.A)((0, h.A)({}, n), {}, {
                                                        width: r.width,
                                                        height: r.height
                                                    }) : r
                                                }), 1
                                            };
                                            for (r.s(); !(n = r.n()).done && !i(););
                                        } catch (o) {
                                            r.e(o)
                                        } finally {
                                            r.f()
                                        }
                                    }, [t])
                                }),
                                l = (0, b.useCallback)(function(e) {
                                    var n = Ge(e);
                                    null == o || o.disconnect(), n && (null == o || o.observe(n)), a(n ? t(n) : null)
                                }, [t, o]),
                                u = (0, y.lk)(l),
                                c = (0, p.A)(u, 2),
                                s = c[0],
                                d = c[1];
                            return (0, b.useMemo)(function() {
                                return {
                                    nodeRef: s,
                                    rect: i,
                                    setRef: d
                                }
                            }, [i, s, d])
                        }({
                            measure: Re.dragOverlay.measure
                        }),
                        lt = null != (n = $e.nodeRef.current) ? n : Me,
                        ut = J ? null != (o = $e.rect) ? o : Pe : null,
                        ct = Boolean($e.nodeRef.current && $e.rect),
                        st = q(Be = ct ? null : Pe, We(Be)),
                        dt = qe(lt ? (0, y.zk)(lt) : null),
                        ft = function(e) {
                            var t = (0, b.useRef)(e),
                                n = (0, y.KG)(function(n) {
                                    return e ? n && n !== Ke && e && t.current && e.parentNode === t.current.parentNode ? n : $(e) : Ke
                                }, [e]);
                            return (0, b.useEffect)(function() {
                                t.current = e
                            }, [e]), n
                        }(J ? null != Qe ? Qe : Me : null),
                        vt = function(e, t) {
                            void 0 === t && (t = V);
                            var n = (0, p.A)(e, 1)[0],
                                r = qe(n ? (0, y.zk)(n) : null),
                                i = (0, b.useState)(Xe),
                                a = (0, p.A)(i, 2),
                                o = a[0],
                                l = a[1];

                            function u() {
                                l(function() {
                                    return e.length ? e.map(function(e) {
                                        return ie(e) ? r : new he(t(e), e)
                                    }) : Xe
                                })
                            }
                            var c = Fe({
                                callback: u
                            });
                            return (0, y.Es)(function() {
                                null == c || c.disconnect(), u(), e.forEach(function(e) {
                                    return null == c ? void 0 : c.observe(e)
                                })
                            }, [e]), o
                        }(ft),
                        ht = it(N, {
                            transform: {
                                x: ae.x - st.x,
                                y: ae.y - st.y,
                                scaleX: 1,
                                scaleY: 1
                            },
                            activatorEvent: ye,
                            active: se,
                            activeNodeRect: Pe,
                            containerNodeRect: Ye,
                            draggingNodeRect: ut,
                            over: Ve.current.over,
                            overlayNodeRect: $e.rect,
                            scrollableAncestors: ft,
                            scrollableAncestorRects: vt,
                            windowRect: dt
                        }),
                        gt = Ne ? (0, y.WQ)(Ne, ae) : null,
                        pt = function(e) {
                            var t = (0, b.useState)(null),
                                n = (0, p.A)(t, 2),
                                r = n[0],
                                i = n[1],
                                a = (0, b.useRef)(e),
                                o = (0, b.useCallback)(function(e) {
                                    var t = ee(e.target);
                                    t && i(function(e) {
                                        return e ? (e.set(t, re(t)), new Map(e)) : null
                                    })
                                }, []);
                            return (0, b.useEffect)(function() {
                                var t = a.current;
                                if (e !== t) {
                                    r(t);
                                    var n = e.map(function(e) {
                                        var t = ee(e);
                                        return t ? (t.addEventListener("scroll", o, {
                                            passive: !0
                                        }), [t, re(t)]) : null
                                    }).filter(function(e) {
                                        return null != e
                                    });
                                    i(n.length ? new Map(n) : null), a.current = e
                                }
                                return function() {
                                    r(e), r(t)
                                };

                                function r(e) {
                                    e.forEach(function(e) {
                                        var t = ee(e);
                                        null == t || t.removeEventListener("scroll", o)
                                    })
                                }
                            }, [o, e]), (0, b.useMemo)(function() {
                                return e.length ? r ? Array.from(r.values()).reduce(function(e, t) {
                                    return (0, y.WQ)(e, t)
                                }, L) : ce(e) : L
                            }, [e, r])
                        }(ft),
                        bt = Ue(pt),
                        mt = Ue(pt, [Pe]),
                        yt = (0, y.WQ)(ht, bt),
                        wt = ut ? G(ut, ht) : null,
                        At = se && wt ? k({
                            active: se,
                            collisionRect: wt,
                            droppableRects: Ee,
                            droppableContainers: Ce,
                            pointerCoordinates: gt
                        }) : null,
                        xt = W(At, "id"),
                        Ct = (0, b.useState)(null),
                        Rt = (0, p.A)(Ct, 2),
                        Dt = Rt[0],
                        Et = Rt[1],
                        kt = function(e, t, n) {
                            return (0, h.A)((0, h.A)({}, e), {}, {
                                scaleX: t && n ? t.width / n.width : 1,
                                scaleY: t && n ? t.height / n.height : 1
                            })
                        }(ct ? ht : (0, y.WQ)(ht, mt), null != (l = null == Dt ? void 0 : Dt.rect) ? l : null, Pe),
                        St = (0, b.useRef)(null),
                        Mt = (0, b.useCallback)(function(e, t) {
                            var n = t.sensor,
                                a = t.options;
                            if (null != de.current) {
                                var o = ne.get(de.current);
                                if (o) {
                                    var l = e.nativeEvent,
                                        u = new n({
                                            active: de.current,
                                            activeNode: o,
                                            event: l,
                                            options: a,
                                            context: Ve,
                                            onAbort: function(e) {
                                                if (ne.get(e)) {
                                                    var t = Ae.current.onDragAbort,
                                                        n = {
                                                            id: e
                                                        };
                                                    null == t || t(n), Y({
                                                        type: "onDragAbort",
                                                        event: n
                                                    })
                                                }
                                            },
                                            onPending: function(e, t, n, r) {
                                                if (ne.get(e)) {
                                                    var i = Ae.current.onDragPending,
                                                        a = {
                                                            id: e,
                                                            constraint: t,
                                                            initialCoordinates: n,
                                                            offset: r
                                                        };
                                                    null == i || i(a), Y({
                                                        type: "onDragPending",
                                                        event: a
                                                    })
                                                }
                                            },
                                            onStart: function(e) {
                                                var t = de.current;
                                                if (null != t) {
                                                    var n = ne.get(t);
                                                    if (n) {
                                                        var r = Ae.current.onDragStart,
                                                            i = {
                                                                activatorEvent: l,
                                                                active: {
                                                                    id: t,
                                                                    data: n.data,
                                                                    rect: ue
                                                                }
                                                            };
                                                        (0, m.unstable_batchedUpdates)(function() {
                                                            null == r || r(i), H(at.Initializing), P({
                                                                type: E.DragStart,
                                                                initialCoordinates: e,
                                                                active: t
                                                            }), Y({
                                                                type: "onDragStart",
                                                                event: i
                                                            }), pe(St.current), we(l)
                                                        })
                                                    }
                                                }
                                            },
                                            onMove: function(e) {
                                                P({
                                                    type: E.DragMove,
                                                    coordinates: e
                                                })
                                            },
                                            onEnd: c(E.DragEnd),
                                            onCancel: c(E.DragCancel)
                                        });
                                    St.current = u
                                }
                            }

                            function c(e) {
                                return function() {
                                    var t = (0, i.A)((0, r.A)().m(function t() {
                                        var n, i, a, o, u, c, s;
                                        return (0, r.A)().w(function(t) {
                                            for (;;) switch (t.n) {
                                                case 0:
                                                    if (n = Ve.current, i = n.active, a = n.collisions, o = n.over, u = n.scrollAdjustedTranslate, c = null, !i || !u) {
                                                        t.n = 2;
                                                        break
                                                    }
                                                    if (s = Ae.current.cancelDrop, c = {
                                                            activatorEvent: l,
                                                            active: i,
                                                            collisions: a,
                                                            delta: u,
                                                            over: o
                                                        }, e !== E.DragEnd || "function" !== typeof s) {
                                                        t.n = 2;
                                                        break
                                                    }
                                                    return t.n = 1, Promise.resolve(s(c));
                                                case 1:
                                                    t.v && (e = E.DragCancel);
                                                case 2:
                                                    de.current = null, (0, m.unstable_batchedUpdates)(function() {
                                                        P({
                                                            type: e
                                                        }), H(at.Uninitialized), Et(null), pe(null), we(null), St.current = null;
                                                        var t = e === E.DragEnd ? "onDragEnd" : "onDragCancel";
                                                        if (c) {
                                                            var n = Ae.current[t];
                                                            null == n || n(c), Y({
                                                                type: t,
                                                                event: c
                                                            })
                                                        }
                                                    });
                                                case 3:
                                                    return t.a(2)
                                            }
                                        }, t)
                                    }));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }()
                            }
                        }, [ne]),
                        Nt = (0, b.useCallback)(function(e, t) {
                            return function(n, r) {
                                var i = n.nativeEvent,
                                    a = ne.get(r);
                                if (null === de.current && a && !i.dndKit && !i.defaultPrevented) {
                                    var o = {
                                        active: a
                                    };
                                    !0 === e(n, t.options, o) && (i.dndKit = {
                                        capturedBy: t.sensor
                                    }, de.current = r, Mt(n, t))
                                }
                            }
                        }, [ne, Mt]),
                        Tt = function(e, t) {
                            return (0, b.useMemo)(function() {
                                return e.reduce(function(e, n) {
                                    var r = n.sensor.activators.map(function(e) {
                                        return {
                                            eventName: e.eventName,
                                            handler: t(e.handler, n)
                                        }
                                    });
                                    return [].concat((0, d.A)(e), (0, d.A)(r))
                                }, [])
                            }, [e, t])
                        }(x, Nt);
                    ! function(e) {
                        (0, b.useEffect)(function() {
                            if (y.Sw) {
                                var t = e.map(function(e) {
                                    var t = e.sensor;
                                    return null == t.setup ? void 0 : t.setup()
                                });
                                return function() {
                                    var e, n = (0, g.A)(t);
                                    try {
                                        for (n.s(); !(e = n.n()).done;) {
                                            var r = e.value;
                                            null == r || r()
                                        }
                                    } catch (i) {
                                        n.e(i)
                                    } finally {
                                        n.f()
                                    }
                                }
                            }
                        }, e.map(function(e) {
                            return e.sensor
                        }))
                    }(x), (0, y.Es)(function() {
                        Pe && _ === at.Initializing && H(at.Initialized)
                    }, [Pe, _]), (0, b.useEffect)(function() {
                        var e = Ae.current.onDragMove,
                            t = Ve.current,
                            n = t.active,
                            r = t.activatorEvent,
                            i = t.collisions,
                            a = t.over;
                        if (n && r) {
                            var o = {
                                active: n,
                                activatorEvent: r,
                                collisions: i,
                                delta: {
                                    x: yt.x,
                                    y: yt.y
                                },
                                over: a
                            };
                            (0, m.unstable_batchedUpdates)(function() {
                                null == e || e(o), Y({
                                    type: "onDragMove",
                                    event: o
                                })
                            })
                        }
                    }, [yt.x, yt.y]), (0, b.useEffect)(function() {
                        var e = Ve.current,
                            t = e.active,
                            n = e.activatorEvent,
                            r = e.collisions,
                            i = e.droppableContainers,
                            a = e.scrollAdjustedTranslate;
                        if (t && null != de.current && n && a) {
                            var o = Ae.current.onDragOver,
                                l = i.get(xt),
                                u = l && l.rect.current ? {
                                    id: l.id,
                                    rect: l.rect.current,
                                    data: l.data,
                                    disabled: l.disabled
                                } : null,
                                c = {
                                    active: t,
                                    activatorEvent: n,
                                    collisions: r,
                                    delta: {
                                        x: a.x,
                                        y: a.y
                                    },
                                    over: u
                                };
                            (0, m.unstable_batchedUpdates)(function() {
                                Et(u), null == o || o(c), Y({
                                    type: "onDragOver",
                                    event: c
                                })
                            })
                        }
                    }, [xt]), (0, y.Es)(function() {
                        Ve.current = {
                            activatorEvent: ye,
                            active: se,
                            activeNode: Me,
                            collisionRect: wt,
                            collisions: At,
                            droppableRects: Ee,
                            draggableNodes: ne,
                            draggingNode: lt,
                            draggingNodeRect: ut,
                            droppableContainers: oe,
                            over: Dt,
                            scrollableAncestors: ft,
                            scrollAdjustedTranslate: yt
                        }, ue.current = {
                            initial: ut,
                            translated: wt
                        }
                    }, [se, Me, At, wt, ne, lt, ut, Ee, oe, Dt, ft, yt]), Le((0, h.A)((0, h.A)({}, Te), {}, {
                        delta: ae,
                        draggingRect: wt,
                        pointerCoordinates: gt,
                        scrollableAncestors: ft,
                        scrollableAncestorRects: vt
                    }));
                    var It = (0, b.useMemo)(function() {
                            return {
                                active: se,
                                activeNode: Me,
                                activeNodeRect: Pe,
                                activatorEvent: ye,
                                collisions: At,
                                containerNodeRect: Ye,
                                dragOverlay: $e,
                                draggableNodes: ne,
                                droppableContainers: oe,
                                droppableRects: Ee,
                                over: Dt,
                                measureDroppableContainers: ke,
                                scrollableAncestors: ft,
                                scrollableAncestorRects: vt,
                                measuringConfiguration: Re,
                                measuringScheduled: Se,
                                windowRect: dt
                            }
                        }, [se, Me, Pe, ye, At, Ye, $e, ne, oe, Ee, Dt, ke, ft, vt, Re, Se, dt]),
                        Lt = (0, b.useMemo)(function() {
                            return {
                                activatorEvent: ye,
                                activators: Tt,
                                active: se,
                                activeNodeRect: Pe,
                                ariaDescribedById: {
                                    draggable: xe
                                },
                                dispatch: P,
                                draggableNodes: ne,
                                over: Dt,
                                measureDroppableContainers: ke
                            }
                        }, [ye, Tt, se, Pe, P, xe, ne, Dt, ke]);
                    return b.createElement(D.Provider, {
                        value: j
                    }, b.createElement(Ze.Provider, {
                        value: Lt
                    }, b.createElement(et.Provider, {
                        value: It
                    }, b.createElement(ot.Provider, {
                        value: kt
                    }, w)), b.createElement(rt, {
                        disabled: !1 === (null == s ? void 0 : s.restoreFocus)
                    })), b.createElement(M, (0, h.A)((0, h.A)({}, s), {}, {
                        hiddenTextDescribedById: xe
                    })))
                }),
                ut = (0, b.createContext)(null),
                ct = "button",
                st = "Draggable";

            function dt(e) {
                var t = e.id,
                    n = e.data,
                    r = e.disabled,
                    i = void 0 !== r && r,
                    a = e.attributes,
                    o = (0, y.YG)(st),
                    l = (0, b.useContext)(Ze),
                    u = l.activators,
                    c = l.activatorEvent,
                    s = l.active,
                    d = l.activeNodeRect,
                    f = l.ariaDescribedById,
                    v = l.draggableNodes,
                    h = l.over,
                    g = null != a ? a : {},
                    m = g.role,
                    w = void 0 === m ? ct : m,
                    A = g.roleDescription,
                    x = void 0 === A ? "draggable" : A,
                    C = g.tabIndex,
                    R = void 0 === C ? 0 : C,
                    D = (null == s ? void 0 : s.id) === t,
                    E = (0, b.useContext)(D ? ot : ut),
                    k = (0, y.lk)(),
                    S = (0, p.A)(k, 2),
                    M = S[0],
                    N = S[1],
                    T = (0, y.lk)(),
                    I = (0, p.A)(T, 2),
                    L = I[0],
                    O = I[1],
                    B = function(e, t) {
                        return (0, b.useMemo)(function() {
                            return e.reduce(function(e, n) {
                                var r = n.eventName,
                                    i = n.handler;
                                return e[r] = function(e) {
                                    i(e, t)
                                }, e
                            }, {})
                        }, [e, t])
                    }(u, t),
                    P = (0, y.YN)(n);
                return (0, y.Es)(function() {
                    return v.set(t, {
                            id: t,
                            key: o,
                            node: M,
                            activatorNode: L,
                            data: P
                        }),
                        function() {
                            var e = v.get(t);
                            e && e.key === o && v.delete(t)
                        }
                }, [v, t]), {
                    active: s,
                    activatorEvent: c,
                    activeNodeRect: d,
                    attributes: (0, b.useMemo)(function() {
                        return {
                            role: w,
                            tabIndex: R,
                            "aria-disabled": i,
                            "aria-pressed": !(!D || w !== ct) || void 0,
                            "aria-roledescription": x,
                            "aria-describedby": f.draggable
                        }
                    }, [i, w, R, D, x, f.draggable]),
                    isDragging: D,
                    listeners: i ? void 0 : B,
                    node: M,
                    over: h,
                    setNodeRef: N,
                    setActivatorNodeRef: O,
                    transform: E
                }
            }

            function ft() {
                return (0, b.useContext)(et)
            }
            var vt = "Droppable",
                ht = {
                    timeout: 25
                };

            function gt(e) {
                var t = e.data,
                    n = e.disabled,
                    r = void 0 !== n && n,
                    i = e.id,
                    a = e.resizeObserverConfig,
                    o = (0, y.YG)(vt),
                    l = (0, b.useContext)(Ze),
                    u = l.active,
                    c = l.dispatch,
                    s = l.over,
                    d = l.measureDroppableContainers,
                    f = (0, b.useRef)({
                        disabled: r
                    }),
                    v = (0, b.useRef)(!1),
                    g = (0, b.useRef)(null),
                    m = (0, b.useRef)(null),
                    w = (0, h.A)((0, h.A)({}, ht), a),
                    A = w.disabled,
                    x = w.updateMeasurementsFor,
                    C = w.timeout,
                    R = (0, y.YN)(null != x ? x : i),
                    D = Fe({
                        callback: (0, b.useCallback)(function() {
                            v.current ? (null != m.current && clearTimeout(m.current), m.current = setTimeout(function() {
                                d(Array.isArray(R.current) ? R.current : [R.current]), m.current = null
                            }, C)) : v.current = !0
                        }, [C]),
                        disabled: A || !u
                    }),
                    k = (0, b.useCallback)(function(e, t) {
                        D && (t && (D.unobserve(t), v.current = !1), e && D.observe(e))
                    }, [D]),
                    S = (0, y.lk)(k),
                    M = (0, p.A)(S, 2),
                    N = M[0],
                    T = M[1],
                    I = (0, y.YN)(t);
                return (0, b.useEffect)(function() {
                    D && N.current && (D.disconnect(), v.current = !1, D.observe(N.current))
                }, [N, D]), (0, b.useEffect)(function() {
                    return c({
                            type: E.RegisterDroppable,
                            element: {
                                id: i,
                                key: o,
                                disabled: r,
                                node: N,
                                rect: g,
                                data: I
                            }
                        }),
                        function() {
                            return c({
                                type: E.UnregisterDroppable,
                                key: o,
                                id: i
                            })
                        }
                }, [i]), (0, b.useEffect)(function() {
                    r !== f.current.disabled && (c({
                        type: E.SetDroppableDisabled,
                        id: i,
                        key: o,
                        disabled: r
                    }), f.current.disabled = r)
                }, [i, o, r, c]), {
                    active: u,
                    rect: g,
                    isOver: (null == s ? void 0 : s.id) === i,
                    node: N,
                    over: s,
                    setNodeRef: T
                }
            }
        },
        94818: function(e, t, n) {
            n.d(t, {
                JR: function() {
                    return E
                },
                be: function() {
                    return u
                },
                gB: function() {
                    return p
                },
                gl: function() {
                    return C
                },
                m$: function() {
                    return f
                }
            });
            var r = n(5544),
                i = n(89379),
                a = n(27565),
                o = n(61611),
                l = n(33618);

            function u(e, t, n) {
                var r = e.slice();
                return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r
            }

            function c(e, t) {
                return e.reduce(function(e, n, r) {
                    var i = t.get(n);
                    return i && (e[r] = i), e
                }, Array(e.length))
            }

            function s(e) {
                return null !== e && e >= 0
            }
            var d = {
                    scaleX: 1,
                    scaleY: 1
                },
                f = function(e) {
                    var t, n = e.rects,
                        r = e.activeNodeRect,
                        a = e.activeIndex,
                        o = e.overIndex,
                        l = e.index,
                        u = null != (t = n[a]) ? t : r;
                    if (!u) return null;
                    var c = function(e, t, n) {
                        var r = e[t],
                            i = e[t - 1],
                            a = e[t + 1];
                        if (!r || !i && !a) return 0;
                        if (n < t) return i ? r.left - (i.left + i.width) : a.left - (r.left + r.width);
                        return a ? a.left - (r.left + r.width) : r.left - (i.left + i.width)
                    }(n, l, a);
                    if (l === a) {
                        var s = n[o];
                        return s ? (0, i.A)({
                            x: a < o ? s.left + s.width - (u.left + u.width) : s.left - u.left,
                            y: 0
                        }, d) : null
                    }
                    return l > a && l <= o ? (0, i.A)({
                        x: -u.width - c,
                        y: 0
                    }, d) : l < a && l >= o ? (0, i.A)({
                        x: u.width + c,
                        y: 0
                    }, d) : (0, i.A)({
                        x: 0,
                        y: 0
                    }, d)
                };
            var v = function(e) {
                var t = e.rects,
                    n = e.activeIndex,
                    r = e.overIndex,
                    i = e.index,
                    a = u(t, r, n),
                    o = t[i],
                    l = a[i];
                return l && o ? {
                    x: l.left - o.left,
                    y: l.top - o.top,
                    scaleX: l.width / o.width,
                    scaleY: l.height / o.height
                } : null
            };
            var h = "Sortable",
                g = a.createContext({
                    activeIndex: -1,
                    containerId: h,
                    disableTransforms: !1,
                    items: [],
                    overIndex: -1,
                    useDragOverlay: !1,
                    sortedRects: [],
                    strategy: v,
                    disabled: {
                        draggable: !1,
                        droppable: !1
                    }
                });

            function p(e) {
                var t = e.children,
                    n = e.id,
                    r = e.items,
                    i = e.strategy,
                    u = void 0 === i ? v : i,
                    s = e.disabled,
                    d = void 0 !== s && s,
                    f = (0, o.fF)(),
                    p = f.active,
                    b = f.dragOverlay,
                    m = f.droppableRects,
                    y = f.over,
                    w = f.measureDroppableContainers,
                    A = (0, l.YG)(h, n),
                    x = Boolean(null !== b.rect),
                    C = (0, a.useMemo)(function() {
                        return r.map(function(e) {
                            return "object" === typeof e && "id" in e ? e.id : e
                        })
                    }, [r]),
                    R = null != p,
                    D = p ? C.indexOf(p.id) : -1,
                    E = y ? C.indexOf(y.id) : -1,
                    k = (0, a.useRef)(C),
                    S = ! function(e, t) {
                        if (e === t) return !0;
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0
                    }(C, k.current),
                    M = -1 !== E && -1 === D || S,
                    N = function(e) {
                        return "boolean" === typeof e ? {
                            draggable: e,
                            droppable: e
                        } : e
                    }(d);
                (0, l.Es)(function() {
                    S && R && w(C)
                }, [S, C, R, w]), (0, a.useEffect)(function() {
                    k.current = C
                }, [C]);
                var T = (0, a.useMemo)(function() {
                    return {
                        activeIndex: D,
                        containerId: A,
                        disabled: N,
                        disableTransforms: M,
                        items: C,
                        overIndex: E,
                        useDragOverlay: x,
                        sortedRects: c(C, m),
                        strategy: u
                    }
                }, [D, A, N.draggable, N.droppable, M, C, E, m, x, u]);
                return a.createElement(g.Provider, {
                    value: T
                }, t)
            }
            var b = function(e) {
                    var t = e.id;
                    return u(e.items, e.activeIndex, e.overIndex).indexOf(t)
                },
                m = function(e) {
                    var t = e.containerId,
                        n = e.isSorting,
                        r = e.wasDragging,
                        i = e.index,
                        a = e.items,
                        o = e.newIndex,
                        l = e.previousItems,
                        u = e.previousContainerId;
                    return !(!e.transition || !r) && ((l === a || i !== o) && (!!n || o !== i && t === u))
                },
                y = {
                    duration: 200,
                    easing: "ease"
                },
                w = "transform",
                A = l.Ks.Transition.toString({
                    property: w,
                    duration: 0,
                    easing: "linear"
                }),
                x = {
                    roleDescription: "sortable"
                };

            function C(e) {
                var t = e.animateLayoutChanges,
                    n = void 0 === t ? m : t,
                    u = e.attributes,
                    c = e.disabled,
                    d = e.data,
                    f = e.getNewIndex,
                    v = void 0 === f ? b : f,
                    h = e.id,
                    p = e.strategy,
                    C = e.resizeObserverConfig,
                    R = e.transition,
                    D = void 0 === R ? y : R,
                    E = (0, a.useContext)(g),
                    k = E.items,
                    S = E.containerId,
                    M = E.activeIndex,
                    N = E.disabled,
                    T = E.disableTransforms,
                    I = E.sortedRects,
                    L = E.overIndex,
                    O = E.useDragOverlay,
                    B = E.strategy,
                    P = function(e, t) {
                        var n, r;
                        if ("boolean" === typeof e) return {
                            draggable: e,
                            droppable: !1
                        };
                        return {
                            draggable: null != (n = null == e ? void 0 : e.draggable) ? n : t.draggable,
                            droppable: null != (r = null == e ? void 0 : e.droppable) ? r : t.droppable
                        }
                    }(c, N),
                    z = k.indexOf(h),
                    W = (0, a.useMemo)(function() {
                        return (0, i.A)({
                            sortable: {
                                containerId: S,
                                index: z,
                                items: k
                            }
                        }, d)
                    }, [S, d, z, k]),
                    F = (0, a.useMemo)(function() {
                        return k.slice(k.indexOf(h))
                    }, [k, h]),
                    Y = (0, o.zM)({
                        id: h,
                        data: W,
                        disabled: P.droppable,
                        resizeObserverConfig: (0, i.A)({
                            updateMeasurementsFor: F
                        }, C)
                    }),
                    j = Y.rect,
                    K = Y.node,
                    U = Y.isOver,
                    q = Y.setNodeRef,
                    X = (0, o.PM)({
                        id: h,
                        data: W,
                        attributes: (0, i.A)((0, i.A)({}, x), u),
                        disabled: P.draggable
                    }),
                    G = X.active,
                    _ = X.activatorEvent,
                    H = X.activeNodeRect,
                    J = X.attributes,
                    V = X.setNodeRef,
                    Q = X.listeners,
                    $ = X.isDragging,
                    Z = X.over,
                    ee = X.setActivatorNodeRef,
                    te = X.transform,
                    ne = (0, l.jn)(q, V),
                    re = Boolean(G),
                    ie = re && !T && s(M) && s(L),
                    ae = !O && $,
                    oe = ae && ie ? te : null,
                    le = ie ? null != oe ? oe : (null != p ? p : B)({
                        rects: I,
                        activeNodeRect: H,
                        activeIndex: M,
                        overIndex: L,
                        index: z
                    }) : null,
                    ue = s(M) && s(L) ? v({
                        id: h,
                        items: k,
                        activeIndex: M,
                        overIndex: L
                    }) : z,
                    ce = null == G ? void 0 : G.id,
                    se = (0, a.useRef)({
                        activeId: ce,
                        items: k,
                        newIndex: ue,
                        containerId: S
                    }),
                    de = k !== se.current.items,
                    fe = n({
                        active: G,
                        containerId: S,
                        isDragging: $,
                        isSorting: re,
                        id: h,
                        index: z,
                        items: k,
                        newIndex: se.current.newIndex,
                        previousItems: se.current.items,
                        previousContainerId: se.current.containerId,
                        transition: D,
                        wasDragging: null != se.current.activeId
                    }),
                    ve = function(e) {
                        var t = e.disabled,
                            n = e.index,
                            i = e.node,
                            u = e.rect,
                            c = (0, a.useState)(null),
                            s = (0, r.A)(c, 2),
                            d = s[0],
                            f = s[1],
                            v = (0, a.useRef)(n);
                        return (0, l.Es)(function() {
                            if (!t && n !== v.current && i.current) {
                                var e = u.current;
                                if (e) {
                                    var r = (0, o.Sj)(i.current, {
                                            ignoreTransform: !0
                                        }),
                                        a = {
                                            x: e.left - r.left,
                                            y: e.top - r.top,
                                            scaleX: e.width / r.width,
                                            scaleY: e.height / r.height
                                        };
                                    (a.x || a.y) && f(a)
                                }
                            }
                            n !== v.current && (v.current = n)
                        }, [t, n, i, u]), (0, a.useEffect)(function() {
                            d && f(null)
                        }, [d]), d
                    }({
                        disabled: !fe,
                        index: z,
                        node: K,
                        rect: j
                    });
                return (0, a.useEffect)(function() {
                    re && se.current.newIndex !== ue && (se.current.newIndex = ue), S !== se.current.containerId && (se.current.containerId = S), k !== se.current.items && (se.current.items = k)
                }, [re, ue, S, k]), (0, a.useEffect)(function() {
                    if (ce !== se.current.activeId) {
                        if (null == ce || null != se.current.activeId) {
                            var e = setTimeout(function() {
                                se.current.activeId = ce
                            }, 50);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                        se.current.activeId = ce
                    }
                }, [ce]), {
                    active: G,
                    activeIndex: M,
                    attributes: J,
                    data: W,
                    rect: j,
                    index: z,
                    newIndex: ue,
                    items: k,
                    isOver: U,
                    isSorting: re,
                    isDragging: $,
                    listeners: Q,
                    node: K,
                    overIndex: L,
                    over: Z,
                    setNodeRef: ne,
                    setActivatorNodeRef: ee,
                    setDroppableNodeRef: q,
                    setDraggableNodeRef: V,
                    transform: null != ve ? ve : le,
                    transition: function() {
                        if (ve || de && se.current.newIndex === z) return A;
                        if (ae && !(0, l.kx)(_) || !D) return;
                        if (re || fe) return l.Ks.Transition.toString((0, i.A)((0, i.A)({}, D), {}, {
                            property: w
                        }));
                        return
                    }()
                }
            }

            function R(e) {
                if (!e) return !1;
                var t = e.data.current;
                return !!(t && "sortable" in t && "object" === typeof t.sortable && "containerId" in t.sortable && "items" in t.sortable && "index" in t.sortable)
            }
            var D = [o.vL.Down, o.vL.Right, o.vL.Up, o.vL.Left],
                E = function(e, t) {
                    var n = t.context,
                        r = n.active,
                        i = n.collisionRect,
                        a = n.droppableRects,
                        u = n.droppableContainers,
                        c = n.over,
                        s = n.scrollableAncestors;
                    if (D.includes(e.code)) {
                        if (e.preventDefault(), !r || !i) return;
                        var d = [];
                        u.getEnabled().forEach(function(t) {
                            if (t && (null == t || !t.disabled)) {
                                var n = a.get(t.id);
                                if (n) switch (e.code) {
                                    case o.vL.Down:
                                        i.top < n.top && d.push(t);
                                        break;
                                    case o.vL.Up:
                                        i.top > n.top && d.push(t);
                                        break;
                                    case o.vL.Left:
                                        i.left > n.left && d.push(t);
                                        break;
                                    case o.vL.Right:
                                        i.left < n.left && d.push(t)
                                }
                            }
                        });
                        var f = (0, o.y$)({
                                active: r,
                                collisionRect: i,
                                droppableRects: a,
                                droppableContainers: d,
                                pointerCoordinates: null
                            }),
                            v = (0, o.Vy)(f, "id");
                        if (v === (null == c ? void 0 : c.id) && f.length > 1 && (v = f[1].id), null != v) {
                            var h = u.get(r.id),
                                g = u.get(v),
                                p = g ? a.get(g.id) : null,
                                b = null == g ? void 0 : g.node.current;
                            if (b && p && h && g) {
                                var m = (0, o.sl)(b).some(function(e, t) {
                                        return s[t] !== e
                                    }),
                                    y = k(h, g),
                                    w = function(e, t) {
                                        if (!R(e) || !R(t)) return !1;
                                        if (!k(e, t)) return !1;
                                        return e.data.current.sortable.index < t.data.current.sortable.index
                                    }(h, g),
                                    A = m || !y ? {
                                        x: 0,
                                        y: 0
                                    } : {
                                        x: w ? i.width - p.width : 0,
                                        y: w ? i.height - p.height : 0
                                    },
                                    x = {
                                        x: p.left,
                                        y: p.top
                                    };
                                return A.x && A.y ? x : (0, l.Re)(x, A)
                            }
                        }
                    }
                };

            function k(e, t) {
                return !(!R(e) || !R(t)) && e.data.current.sortable.containerId === t.data.current.sortable.containerId
            }
        }
    }
]);
//# sourceMappingURL=9369.8f6aaff0.chunk.js.map