"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [6521], {
        6521: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return z
                }
            });
            var n = r(64467),
                o = r(98587),
                i = r(58168),
                a = r(27565),
                s = r(44672),
                u = r(67874),
                c = r(18210),
                l = r(49360),
                f = r(60436),
                v = r(5544),
                d = r(75957),
                p = r(46325),
                m = r(15514),
                h = ["ownerState"],
                y = ["variants"],
                A = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];

            function S(e) {
                return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
            }

            function k(e, t) {
                return t && e && "object" === typeof e && e.styles && !e.styles.startsWith("@layer") && (e.styles = "@layer ".concat(t, "{").concat(String(e.styles), "}")), e
            }
            var w = (0, p.A)();

            function g(e) {
                var t, r = e.defaultTheme,
                    n = e.theme,
                    o = e.themeId;
                return t = n, 0 === Object.keys(t).length ? r : n[o] || n
            }

            function b(e, t, r) {
                var n = t.ownerState,
                    a = (0, o.A)(t, h),
                    s = "function" === typeof e ? e((0, i.A)({
                        ownerState: n
                    }, a)) : e;
                if (Array.isArray(s)) return s.flatMap(function(e) {
                    return b(e, (0, i.A)({
                        ownerState: n
                    }, a), r)
                });
                if (s && "object" === typeof s && Array.isArray(s.variants)) {
                    var u = s.variants,
                        c = void 0 === u ? [] : u,
                        l = (0, o.A)(s, y);
                    return c.forEach(function(e) {
                        var t = !0;
                        if ("function" === typeof e.props ? t = e.props((0, i.A)({
                                ownerState: n
                            }, a, n)) : Object.keys(e.props).forEach(function(r) {
                                (null == n ? void 0 : n[r]) !== e.props[r] && a[r] !== e.props[r] && (t = !1)
                            }), t) {
                            Array.isArray(l) || (l = [l]);
                            var o = "function" === typeof e.style ? e.style((0, i.A)({
                                ownerState: n
                            }, a, n)) : e.style;
                            l.push(r ? k((0, d.internal_serializeStyles)(o), r) : o)
                        }
                    }), l
                }
                return r ? k((0, d.internal_serializeStyles)(s), r) : s
            }
            var _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.themeId,
                        r = e.defaultTheme,
                        n = void 0 === r ? w : r,
                        a = e.rootShouldForwardProp,
                        s = void 0 === a ? S : a,
                        c = e.slotShouldForwardProp,
                        l = void 0 === c ? S : c,
                        p = function(e) {
                            return (0, m.A)((0, i.A)({}, e, {
                                theme: g((0, i.A)({}, e, {
                                    defaultTheme: n,
                                    themeId: t
                                }))
                            }))
                        };
                    return p.__mui_systemSx = !0,
                        function(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            (0, d.internal_processStyles)(e, function(e) {
                                return e.filter(function(e) {
                                    return !(null != e && e.__mui_systemSx)
                                })
                            });
                            var a, c, m = r.name,
                                h = r.slot,
                                y = r.skipVariantsResolver,
                                k = r.skipSx,
                                w = r.overridesResolver,
                                _ = void 0 === w ? (a = (c = h) ? c.charAt(0).toLowerCase() + c.slice(1) : c) ? function(e, t) {
                                    return t[a]
                                } : null : w,
                                x = (0, o.A)(r, A),
                                C = m && m.startsWith("Mui") || h ? "components" : "custom",
                                R = void 0 !== y ? y : h && "Root" !== h && "root" !== h || !1,
                                j = k || !1;
                            var T = S;
                            "Root" === h || "root" === h ? T = s : h ? T = l : function(e) {
                                return "string" === typeof e && e.charCodeAt(0) > 96
                            }(e) && (T = void 0);
                            var N = (0, d.default)(e, (0, i.A)({
                                    shouldForwardProp: T,
                                    label: undefined
                                }, x)),
                                I = function(e) {
                                    return "function" === typeof e && e.__emotion_real !== e || (0, u.Q)(e) ? function(r) {
                                        var o = g({
                                            theme: r.theme,
                                            defaultTheme: n,
                                            themeId: t
                                        });
                                        return b(e, (0, i.A)({}, r, {
                                            theme: o
                                        }), o.modularCssLayers ? C : void 0)
                                    } : e
                                },
                                F = function(r) {
                                    for (var o = I(r), a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) s[u - 1] = arguments[u];
                                    var c = s ? s.map(I) : [];
                                    m && _ && c.push(function(e) {
                                        var r = g((0, i.A)({}, e, {
                                            defaultTheme: n,
                                            themeId: t
                                        }));
                                        if (!r.components || !r.components[m] || !r.components[m].styleOverrides) return null;
                                        var o = r.components[m].styleOverrides,
                                            a = {};
                                        return Object.entries(o).forEach(function(t) {
                                            var n = (0, v.A)(t, 2),
                                                o = n[0],
                                                s = n[1];
                                            a[o] = b(s, (0, i.A)({}, e, {
                                                theme: r
                                            }), r.modularCssLayers ? "theme" : void 0)
                                        }), _(e, a)
                                    }), m && !R && c.push(function(e) {
                                        var r, o = g((0, i.A)({}, e, {
                                            defaultTheme: n,
                                            themeId: t
                                        }));
                                        return b({
                                            variants: null == o || null == (r = o.components) || null == (r = r[m]) ? void 0 : r.variants
                                        }, (0, i.A)({}, e, {
                                            theme: o
                                        }), o.modularCssLayers ? "theme" : void 0)
                                    }), j || c.push(p);
                                    var l = c.length - s.length;
                                    if (Array.isArray(r) && l > 0) {
                                        var d = new Array(l).fill("");
                                        (o = [].concat((0, f.A)(r), (0, f.A)(d))).raw = [].concat((0, f.A)(r.raw), (0, f.A)(d))
                                    }
                                    var h = N.apply(void 0, [o].concat((0, f.A)(c)));
                                    return e.muiName && (h.muiName = e.muiName), h
                                };
                            return N.withConfig && (F.withConfig = N.withConfig), F
                        }
                }(),
                x = _,
                C = r(3802),
                R = r(85800),
                j = r(60129),
                T = r(3742),
                N = r(27929),
                I = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"],
                F = (0, p.A)(),
                M = x("div", {
                    name: "MuiStack",
                    slot: "Root",
                    overridesResolver: function(e, t) {
                        return t.root
                    }
                });

            function O(e) {
                return (0, C.A)({
                    props: e,
                    name: "MuiStack",
                    defaultTheme: F
                })
            }

            function W(e, t) {
                var r = a.Children.toArray(e).filter(Boolean);
                return r.reduce(function(e, n, o) {
                    return e.push(n), o < r.length - 1 && e.push(a.cloneElement(t, {
                        key: "separator-".concat(o)
                    })), e
                }, [])
            }
            var L = function(e) {
                var t = e.ownerState,
                    r = e.theme,
                    o = (0, i.A)({
                        display: "flex",
                        flexDirection: "column"
                    }, (0, j.NI)({
                        theme: r
                    }, (0, j.kW)({
                        values: t.direction,
                        breakpoints: r.breakpoints.values
                    }), function(e) {
                        return {
                            flexDirection: e
                        }
                    }));
                if (t.spacing) {
                    var a = (0, T.LX)(r),
                        s = Object.keys(r.breakpoints.values).reduce(function(e, r) {
                            return ("object" === typeof t.spacing && null != t.spacing[r] || "object" === typeof t.direction && null != t.direction[r]) && (e[r] = !0), e
                        }, {}),
                        c = (0, j.kW)({
                            values: t.direction,
                            base: s
                        }),
                        l = (0, j.kW)({
                            values: t.spacing,
                            base: s
                        });
                    "object" === typeof c && Object.keys(c).forEach(function(e, t, r) {
                        if (!c[e]) {
                            var n = t > 0 ? c[r[t - 1]] : "column";
                            c[e] = n
                        }
                    });
                    o = (0, u.A)(o, (0, j.NI)({
                        theme: r
                    }, l, function(e, r) {
                        return t.useFlexGap ? {
                            gap: (0, T._W)(a, e)
                        } : {
                            "& > :not(style):not(style)": {
                                margin: 0
                            },
                            "& > :not(style) ~ :not(style)": (0, n.A)({}, "margin".concat((o = r ? c[r] : t.direction, {
                                row: "Left",
                                "row-reverse": "Right",
                                column: "Top",
                                "column-reverse": "Bottom"
                            }[o])), (0, T._W)(a, e))
                        };
                        var o
                    }))
                }
                return o = (0, j.iZ)(r.breakpoints, o)
            };
            var E = r(93725),
                P = r(23153),
                G = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.createStyledComponent,
                        r = void 0 === t ? M : t,
                        n = e.useThemeProps,
                        u = void 0 === n ? O : n,
                        f = e.componentName,
                        v = void 0 === f ? "MuiStack" : f,
                        d = r(L),
                        p = a.forwardRef(function(e, t) {
                            var r = u(e),
                                n = (0, R.A)(r),
                                a = n.component,
                                f = void 0 === a ? "div" : a,
                                p = n.direction,
                                m = void 0 === p ? "column" : p,
                                h = n.spacing,
                                y = void 0 === h ? 0 : h,
                                A = n.divider,
                                S = n.children,
                                k = n.className,
                                w = n.useFlexGap,
                                g = void 0 !== w && w,
                                b = (0, o.A)(n, I),
                                _ = {
                                    direction: m,
                                    spacing: y,
                                    useFlexGap: g
                                },
                                x = (0, l.A)({
                                    root: ["root"]
                                }, function(e) {
                                    return (0, c.Ay)(v, e)
                                }, {});
                            return (0, N.jsx)(d, (0, i.A)({
                                as: f,
                                ownerState: _,
                                ref: t,
                                className: (0, s.A)(x.root, k)
                            }, b, {
                                children: A ? W(S, A) : S
                            }))
                        });
                    return p
                }({
                    createStyledComponent: (0, E.Ay)("div", {
                        name: "MuiStack",
                        slot: "Root",
                        overridesResolver: function(e, t) {
                            return t.root
                        }
                    }),
                    useThemeProps: function(e) {
                        return (0, P.b)({
                            props: e,
                            name: "MuiStack"
                        })
                    }
                }),
                z = G
        }
    }
]);
//# sourceMappingURL=6521.f0b4778e.chunk.js.map