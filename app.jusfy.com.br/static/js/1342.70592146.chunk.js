"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [1342], {
        51342: function(e, a, o) {
            o.d(a, {
                A: function() {
                    return w
                }
            });
            var t = o(64467),
                c = o(98587),
                l = o(58168),
                n = o(27565),
                r = o(26660),
                i = o(49360),
                s = o(32388),
                d = o(85804),
                p = o(27929),
                v = (0, d.A)((0, p.jsx)("path", {
                    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                }), "Cancel"),
                u = o(84847),
                m = o(23637),
                b = o(28571),
                A = o(23153),
                g = o(93725),
                f = o(22458),
                h = o(18210);

            function C(e) {
                return (0, h.Ay)("MuiChip", e)
            }
            var y = (0, f.A)("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]),
                k = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"],
                S = (0, g.Ay)("div", {
                    name: "MuiChip",
                    slot: "Root",
                    overridesResolver: function(e, a) {
                        var o = e.ownerState,
                            c = o.color,
                            l = o.iconColor,
                            n = o.clickable,
                            r = o.onDelete,
                            i = o.size,
                            s = o.variant;
                        return [(0, t.A)({}, "& .".concat(y.avatar), a.avatar), (0, t.A)({}, "& .".concat(y.avatar), a["avatar".concat((0, m.A)(i))]), (0, t.A)({}, "& .".concat(y.avatar), a["avatarColor".concat((0, m.A)(c))]), (0, t.A)({}, "& .".concat(y.icon), a.icon), (0, t.A)({}, "& .".concat(y.icon), a["icon".concat((0, m.A)(i))]), (0, t.A)({}, "& .".concat(y.icon), a["iconColor".concat((0, m.A)(l))]), (0, t.A)({}, "& .".concat(y.deleteIcon), a.deleteIcon), (0, t.A)({}, "& .".concat(y.deleteIcon), a["deleteIcon".concat((0, m.A)(i))]), (0, t.A)({}, "& .".concat(y.deleteIcon), a["deleteIconColor".concat((0, m.A)(c))]), (0, t.A)({}, "& .".concat(y.deleteIcon), a["deleteIcon".concat((0, m.A)(s), "Color").concat((0, m.A)(c))]), a.root, a["size".concat((0, m.A)(i))], a["color".concat((0, m.A)(c))], n && a.clickable, n && "default" !== c && a["clickableColor".concat((0, m.A)(c), ")")], r && a.deletable, r && "default" !== c && a["deletableColor".concat((0, m.A)(c))], a[s], a["".concat(s).concat((0, m.A)(c))]]
                    }
                })(function(e) {
                    var a = e.theme,
                        o = e.ownerState,
                        c = "light" === a.palette.mode ? a.palette.grey[700] : a.palette.grey[300];
                    return (0, l.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)({
                        maxWidth: "100%",
                        fontFamily: a.typography.fontFamily,
                        fontSize: a.typography.pxToRem(13),
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 32,
                        color: (a.vars || a).palette.text.primary,
                        backgroundColor: (a.vars || a).palette.action.selected,
                        borderRadius: 16,
                        whiteSpace: "nowrap",
                        transition: a.transitions.create(["background-color", "box-shadow"]),
                        cursor: "unset",
                        outline: 0,
                        textDecoration: "none",
                        border: 0,
                        padding: 0,
                        verticalAlign: "middle",
                        boxSizing: "border-box"
                    }, "&.".concat(y.disabled), {
                        opacity: (a.vars || a).palette.action.disabledOpacity,
                        pointerEvents: "none"
                    }), "& .".concat(y.avatar), {
                        marginLeft: 5,
                        marginRight: -6,
                        width: 24,
                        height: 24,
                        color: a.vars ? a.vars.palette.Chip.defaultAvatarColor : c,
                        fontSize: a.typography.pxToRem(12)
                    }), "& .".concat(y.avatarColorPrimary), {
                        color: (a.vars || a).palette.primary.contrastText,
                        backgroundColor: (a.vars || a).palette.primary.dark
                    }), "& .".concat(y.avatarColorSecondary), {
                        color: (a.vars || a).palette.secondary.contrastText,
                        backgroundColor: (a.vars || a).palette.secondary.dark
                    }), "& .".concat(y.avatarSmall), {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: a.typography.pxToRem(10)
                    }), "& .".concat(y.icon), (0, l.A)({
                        marginLeft: 5,
                        marginRight: -6
                    }, "small" === o.size && {
                        fontSize: 18,
                        marginLeft: 4,
                        marginRight: -4
                    }, o.iconColor === o.color && (0, l.A)({
                        color: a.vars ? a.vars.palette.Chip.defaultIconColor : c
                    }, "default" !== o.color && {
                        color: "inherit"
                    }))), "& .".concat(y.deleteIcon), (0, l.A)({
                        WebkitTapHighlightColor: "transparent",
                        color: a.vars ? "rgba(".concat(a.vars.palette.text.primaryChannel, " / 0.26)") : (0, s.X4)(a.palette.text.primary, .26),
                        fontSize: 22,
                        cursor: "pointer",
                        margin: "0 5px 0 -6px",
                        "&:hover": {
                            color: a.vars ? "rgba(".concat(a.vars.palette.text.primaryChannel, " / 0.4)") : (0, s.X4)(a.palette.text.primary, .4)
                        }
                    }, "small" === o.size && {
                        fontSize: 16,
                        marginRight: 4,
                        marginLeft: -4
                    }, "default" !== o.color && {
                        color: a.vars ? "rgba(".concat(a.vars.palette[o.color].contrastTextChannel, " / 0.7)") : (0, s.X4)(a.palette[o.color].contrastText, .7),
                        "&:hover, &:active": {
                            color: (a.vars || a).palette[o.color].contrastText
                        }
                    })), "small" === o.size && {
                        height: 24
                    }, "default" !== o.color && {
                        backgroundColor: (a.vars || a).palette[o.color].main,
                        color: (a.vars || a).palette[o.color].contrastText
                    }, o.onDelete && (0, t.A)({}, "&.".concat(y.focusVisible), {
                        backgroundColor: a.vars ? "rgba(".concat(a.vars.palette.action.selectedChannel, " / calc(").concat(a.vars.palette.action.selectedOpacity, " + ").concat(a.vars.palette.action.focusOpacity, "))") : (0, s.X4)(a.palette.action.selected, a.palette.action.selectedOpacity + a.palette.action.focusOpacity)
                    }), o.onDelete && "default" !== o.color && (0, t.A)({}, "&.".concat(y.focusVisible), {
                        backgroundColor: (a.vars || a).palette[o.color].dark
                    }))
                }, function(e) {
                    var a = e.theme,
                        o = e.ownerState;
                    return (0, l.A)({}, o.clickable && (0, t.A)((0, t.A)({
                        userSelect: "none",
                        WebkitTapHighlightColor: "transparent",
                        cursor: "pointer",
                        "&:hover": {
                            backgroundColor: a.vars ? "rgba(".concat(a.vars.palette.action.selectedChannel, " / calc(").concat(a.vars.palette.action.selectedOpacity, " + ").concat(a.vars.palette.action.hoverOpacity, "))") : (0, s.X4)(a.palette.action.selected, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity)
                        }
                    }, "&.".concat(y.focusVisible), {
                        backgroundColor: a.vars ? "rgba(".concat(a.vars.palette.action.selectedChannel, " / calc(").concat(a.vars.palette.action.selectedOpacity, " + ").concat(a.vars.palette.action.focusOpacity, "))") : (0, s.X4)(a.palette.action.selected, a.palette.action.selectedOpacity + a.palette.action.focusOpacity)
                    }), "&:active", {
                        boxShadow: (a.vars || a).shadows[1]
                    }), o.clickable && "default" !== o.color && (0, t.A)({}, "&:hover, &.".concat(y.focusVisible), {
                        backgroundColor: (a.vars || a).palette[o.color].dark
                    }))
                }, function(e) {
                    var a = e.theme,
                        o = e.ownerState;
                    return (0, l.A)({}, "outlined" === o.variant && (0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)((0, t.A)({
                        backgroundColor: "transparent",
                        border: a.vars ? "1px solid ".concat(a.vars.palette.Chip.defaultBorder) : "1px solid ".concat("light" === a.palette.mode ? a.palette.grey[400] : a.palette.grey[700])
                    }, "&.".concat(y.clickable, ":hover"), {
                        backgroundColor: (a.vars || a).palette.action.hover
                    }), "&.".concat(y.focusVisible), {
                        backgroundColor: (a.vars || a).palette.action.focus
                    }), "& .".concat(y.avatar), {
                        marginLeft: 4
                    }), "& .".concat(y.avatarSmall), {
                        marginLeft: 2
                    }), "& .".concat(y.icon), {
                        marginLeft: 4
                    }), "& .".concat(y.iconSmall), {
                        marginLeft: 2
                    }), "& .".concat(y.deleteIcon), {
                        marginRight: 5
                    }), "& .".concat(y.deleteIconSmall), {
                        marginRight: 3
                    }), "outlined" === o.variant && "default" !== o.color && (0, t.A)((0, t.A)((0, t.A)({
                        color: (a.vars || a).palette[o.color].main,
                        border: "1px solid ".concat(a.vars ? "rgba(".concat(a.vars.palette[o.color].mainChannel, " / 0.7)") : (0, s.X4)(a.palette[o.color].main, .7))
                    }, "&.".concat(y.clickable, ":hover"), {
                        backgroundColor: a.vars ? "rgba(".concat(a.vars.palette[o.color].mainChannel, " / ").concat(a.vars.palette.action.hoverOpacity, ")") : (0, s.X4)(a.palette[o.color].main, a.palette.action.hoverOpacity)
                    }), "&.".concat(y.focusVisible), {
                        backgroundColor: a.vars ? "rgba(".concat(a.vars.palette[o.color].mainChannel, " / ").concat(a.vars.palette.action.focusOpacity, ")") : (0, s.X4)(a.palette[o.color].main, a.palette.action.focusOpacity)
                    }), "& .".concat(y.deleteIcon), {
                        color: a.vars ? "rgba(".concat(a.vars.palette[o.color].mainChannel, " / 0.7)") : (0, s.X4)(a.palette[o.color].main, .7),
                        "&:hover, &:active": {
                            color: (a.vars || a).palette[o.color].main
                        }
                    }))
                }),
                I = (0, g.Ay)("span", {
                    name: "MuiChip",
                    slot: "Label",
                    overridesResolver: function(e, a) {
                        var o = e.ownerState.size;
                        return [a.label, a["label".concat((0, m.A)(o))]]
                    }
                })(function(e) {
                    var a = e.ownerState;
                    return (0, l.A)({
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        paddingLeft: 12,
                        paddingRight: 12,
                        whiteSpace: "nowrap"
                    }, "outlined" === a.variant && {
                        paddingLeft: 11,
                        paddingRight: 11
                    }, "small" === a.size && {
                        paddingLeft: 8,
                        paddingRight: 8
                    }, "small" === a.size && "outlined" === a.variant && {
                        paddingLeft: 7,
                        paddingRight: 7
                    })
                });

            function x(e) {
                return "Backspace" === e.key || "Delete" === e.key
            }
            var w = n.forwardRef(function(e, a) {
                var o = (0, A.b)({
                        props: e,
                        name: "MuiChip"
                    }),
                    t = o.avatar,
                    s = o.className,
                    d = o.clickable,
                    g = o.color,
                    f = void 0 === g ? "default" : g,
                    h = o.component,
                    y = o.deleteIcon,
                    w = o.disabled,
                    z = void 0 !== w && w,
                    R = o.icon,
                    O = o.label,
                    D = o.onClick,
                    L = o.onDelete,
                    T = o.onKeyDown,
                    V = o.onKeyUp,
                    N = o.size,
                    P = void 0 === N ? "medium" : N,
                    M = o.variant,
                    E = void 0 === M ? "filled" : M,
                    X = o.tabIndex,
                    F = o.skipFocusWhenDisabled,
                    K = void 0 !== F && F,
                    W = (0, c.A)(o, k),
                    j = n.useRef(null),
                    U = (0, u.A)(j, a),
                    B = function(e) {
                        e.stopPropagation(), L && L(e)
                    },
                    H = !(!1 === d || !D) || d,
                    q = H || L ? b.A : h || "div",
                    G = (0, l.A)({}, o, {
                        component: q,
                        disabled: z,
                        size: P,
                        color: f,
                        iconColor: n.isValidElement(R) && R.props.color || f,
                        onDelete: !!L,
                        clickable: H,
                        variant: E
                    }),
                    J = function(e) {
                        var a = e.classes,
                            o = e.disabled,
                            t = e.size,
                            c = e.color,
                            l = e.iconColor,
                            n = e.onDelete,
                            r = e.clickable,
                            s = e.variant,
                            d = {
                                root: ["root", s, o && "disabled", "size".concat((0, m.A)(t)), "color".concat((0, m.A)(c)), r && "clickable", r && "clickableColor".concat((0, m.A)(c)), n && "deletable", n && "deletableColor".concat((0, m.A)(c)), "".concat(s).concat((0, m.A)(c))],
                                label: ["label", "label".concat((0, m.A)(t))],
                                avatar: ["avatar", "avatar".concat((0, m.A)(t)), "avatarColor".concat((0, m.A)(c))],
                                icon: ["icon", "icon".concat((0, m.A)(t)), "iconColor".concat((0, m.A)(l))],
                                deleteIcon: ["deleteIcon", "deleteIcon".concat((0, m.A)(t)), "deleteIconColor".concat((0, m.A)(c)), "deleteIcon".concat((0, m.A)(s), "Color").concat((0, m.A)(c))]
                            };
                        return (0, i.A)(d, C, a)
                    }(G),
                    Q = q === b.A ? (0, l.A)({
                        component: h || "div",
                        focusVisibleClassName: J.focusVisible
                    }, L && {
                        disableRipple: !0
                    }) : {},
                    Y = null;
                L && (Y = y && n.isValidElement(y) ? n.cloneElement(y, {
                    className: (0, r.A)(y.props.className, J.deleteIcon),
                    onClick: B
                }) : (0, p.jsx)(v, {
                    className: (0, r.A)(J.deleteIcon),
                    onClick: B
                }));
                var Z = null;
                t && n.isValidElement(t) && (Z = n.cloneElement(t, {
                    className: (0, r.A)(J.avatar, t.props.className)
                }));
                var $ = null;
                return R && n.isValidElement(R) && ($ = n.cloneElement(R, {
                    className: (0, r.A)(J.icon, R.props.className)
                })), (0, p.jsxs)(S, (0, l.A)({
                    as: q,
                    className: (0, r.A)(J.root, s),
                    disabled: !(!H || !z) || void 0,
                    onClick: D,
                    onKeyDown: function(e) {
                        e.currentTarget === e.target && x(e) && e.preventDefault(), T && T(e)
                    },
                    onKeyUp: function(e) {
                        e.currentTarget === e.target && (L && x(e) ? L(e) : "Escape" === e.key && j.current && j.current.blur()), V && V(e)
                    },
                    ref: U,
                    tabIndex: K && z ? -1 : X,
                    ownerState: G
                }, Q, W, {
                    children: [Z || $, (0, p.jsx)(I, {
                        className: (0, r.A)(J.label),
                        ownerState: G,
                        children: O
                    }), Y]
                }))
            })
        }
    }
]);
//# sourceMappingURL=1342.70592146.chunk.js.map