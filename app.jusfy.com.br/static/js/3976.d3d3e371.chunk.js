"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [3976], {
        1120: function(n, e, t) {
            t.d(e, {
                c: function() {
                    return u
                }
            });
            t(27565);
            var i, a, o = t(57528),
                r = t(42506),
                l = t(43519),
                s = r.default.button(i || (i = (0, o.A)(["\n  display: flex;\n  height: 40px;\n  padding: 10px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  border: 1px solid #ceced2;\n  cursor: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  width: ", ";\n  background-color: ", ";\n  color: ", ";\n  opacity: ", ";\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function(n) {
                    return n.disabled ? "not-allowed" : "pointer"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    var e = n.width;
                    return "number" === typeof e ? "".concat(e, "px") : e || "100%"
                }, function(n) {
                    return n.disabled ? "#f5f5f5" : "#fff"
                }, function(n) {
                    return n.disabled ? "#9ca3af" : "#111"
                }, function(n) {
                    return n.disabled ? .6 : 1
                }, function(n) {
                    return n.disabled ? "#f5f5f5" : "#f0f0f0"
                }),
                c = (0, r.default)(l.A)(a || (a = (0, o.A)(["\n  width: ", "px;\n  height: ", "px;\n  cursor: pointer;\n"])), function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                }),
                d = t(27929),
                u = function(n) {
                    var e = n.text,
                        t = void 0 === e ? "Filtros" : e,
                        i = n.onClick,
                        a = void 0 === i ? function() {
                            return console.log("Defina a fun\xe7\xe3o")
                        } : i,
                        o = n.icon,
                        r = void 0 === o ? "" : o,
                        l = n.widthIcon,
                        u = void 0 === l ? 10 : l,
                        p = n.heightIcon,
                        f = void 0 === p ? 10 : p,
                        m = n.width,
                        h = void 0 === m ? "100%" : m,
                        x = n.loading,
                        g = void 0 !== x && x;
                    return (0, d.jsxs)(s, {
                        onClick: g ? void 0 : a,
                        "data-testid": "button",
                        width: h,
                        disabled: g,
                        children: [r && (0, d.jsx)(c, {
                            src: r,
                            width: u,
                            height: f
                        }), t]
                    })
                }
        },
        8926: function(n, e, t) {
            t.d(e, {
                D: function() {
                    return o
                }
            });
            var i = t(81658),
                a = t(27929),
                o = function(n) {
                    var e = n.children,
                        t = n.position,
                        o = void 0 === t ? "right" : t,
                        r = n.open,
                        l = void 0 !== r && r,
                        s = n.onClose,
                        c = void 0 === s ? function() {} : s;
                    return (0, a.jsx)(i.Ay, {
                        anchor: o,
                        open: l,
                        onClose: c,
                        children: e
                    })
                }
        },
        16832: function(n, e, t) {
            t.d(e, {
                A: function() {
                    return l
                }
            });
            var i, a = t(57528),
                o = t(42506).default.div(i || (i = (0, a.A)(["\n  margin-top: ", ";\n  padding: 40px 24px;\n\n  @media (min-width: 545px) {\n    padding: 40px;\n  }\n"])), function(n) {
                    return n.hasMargin ? "0px" : "75px"
                }),
                r = t(27929),
                l = function(n) {
                    var e = n.children,
                        t = n.hasMargin,
                        i = void 0 !== t && t;
                    return (0, r.jsx)(o, {
                        hasMargin: i,
                        children: e
                    })
                }
        },
        30058: function(n, e, t) {
            t.d(e, {
                S: function() {
                    return c
                }
            });
            t(27565);
            var i, a = t(43519),
                o = t(57528),
                r = t(42506).default.div(i || (i = (0, o.A)(["\n  display: flex;\n  align-items: center;\n  padding: 0px 0px 0px 16px;\n  width: ", ";\n  border-radius: 6px;\n  border: 1px solid #e7e8ec;\n  flex: ", ';\n  input {\n    width: 100%;\n    padding: 8px 16px;\n    border: none;\n    opacity: 0.8;\n    background: transparent;\n    outline: none;\n    font-weight: 400;\n    font-size: 14px;\n    font-style: initial;\n    font-family: "Noto Sans";\n    color: ', ";\n  }\n  svg {\n    min-width: 14px;\n  }\n"])), function(n) {
                    return n.width || "auto"
                }, function(n) {
                    return n.flex || "1"
                }, function(n) {
                    return n.theme.colors.black.primary
                }),
                l = t(84688),
                s = t(27929),
                c = function(n) {
                    var e = n.loading,
                        t = n.search,
                        i = void 0 === t ? "" : t,
                        o = n.onChange,
                        c = void 0 === o ? function() {} : o,
                        d = n.flex,
                        u = void 0 === d ? "" : d,
                        p = n.placeholder,
                        f = void 0 === p ? "Pesquise pelo documento" : p,
                        m = n.width;
                    return (0, s.jsxs)(r, {
                        flex: u,
                        width: m,
                        children: [(0, s.jsx)(a.A, {
                            src: (0, l.oK)("/media/casesManagement/search.svg")
                        }), (0, s.jsx)("input", {
                            placeholder: f,
                            type: "search",
                            value: i,
                            onChange: c,
                            disabled: e,
                            "aria-label": f
                        })]
                    })
                }
        },
        30090: function(n, e, t) {
            t.d(e, {
                c2: function() {
                    return p
                },
                $q: function() {
                    return c
                },
                WA: function() {
                    return l
                },
                td: function() {
                    return d
                },
                fk: function() {
                    return u
                },
                OL: function() {
                    return s
                },
                vt: function() {
                    return r
                }
            });
            var i = t(89379),
                a = t(95383),
                o = t(84688),
                r = (new Map([
                    ["CPF", {
                        title: "CPF consultado",
                        maskedDocument: function(n) {
                            return (0, a.Oy)(n)
                        }
                    }],
                    ["CNPJ", {
                        title: "CNPJ consultado",
                        maskedDocument: function(n) {
                            return (0, a.kE)(n)
                        }
                    }]
                ]), (0, o.oK)("/media/jusfinder/car-plate.svg"), (0, o.oK)("/media/jusfinder/model.svg"), (0, o.oK)("/media/jusfinder/city.svg"), function(n) {
                    return n.sort(function(n, e) {
                        return new Date(e.created_at) - new Date(n.created_at)
                    })
                }),
                l = function(n, e) {
                    n.credit ? e("QUERY_FORM_MODAL", {
                        queryOption: n
                    }) : e("BUY_CREDITS_MODAL", {
                        queryOption: n
                    })
                },
                s = function(n) {
                    var e = function(n) {
                        return "trademarks" === n.identification || "economic_group" === n.identification
                    }(n);
                    if (!e) return function(n) {
                        return {
                            product_id: n.identification,
                            description: n.description,
                            name: n.name,
                            online: n.online,
                            price: n.price
                        }
                    }(n)
                },
                c = function(n, e, t, a, o) {
                    "economic_group" !== n.identification ? window.analytics.track("Query Performed", (0, i.A)((0, i.A)({}, a), {}, {
                        context_queries: o || "jusfinder"
                    })) : e.forEach(function(n) {
                        window.analytics.track("Query Performed", {
                            query_type: n,
                            document_type: "CNPJ",
                            context_queries: o || "jusfinder"
                        })
                    })
                };

            function d(n, e) {
                var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") || "".concat(n, "s");
                return "".concat(e, " ").concat(1 === e ? n : t)
            }

            function u(n, e) {
                var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") || "".concat(n, "s");
                return "".concat(1 === e ? n : t)
            }
            var p = new Map([
                    ["CPF", {
                        title: "CPF consultado",
                        maskedDocument: function(n) {
                            return (0, a.Oy)(n)
                        }
                    }],
                    ["CNPJ", {
                        title: "CNPJ consultado",
                        maskedDocument: function(n) {
                            return (0, a.kE)(n)
                        }
                    }],
                    ["License Plate", {
                        title: "Placa consultada",
                        maskedDocument: function(n) {
                            return f(n)
                        }
                    }]
                ]),
                f = function() {
                    var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toUpperCase().replace(/[^a-zA-Z0-9-]/g, "").replace(/^([a-zA-Z]{3})([0-9][0-9]+)$/, "$1-$2"),
                        e = n.includes("-") ? 8 : 7;
                    return n.substring(0, e)
                }
        },
        33761: function(n, e, t) {
            t.d(e, {
                FS: function() {
                    return f
                },
                K0: function() {
                    return m
                },
                bQ: function() {
                    return h
                }
            });
            var i, a, o, r = t(89379),
                l = t(80045),
                s = t(57528),
                c = (t(27565), t(42506)),
                d = t(76465),
                u = t(27929),
                p = ["className"],
                f = (0, c.default)(function(n) {
                    var e = n.className,
                        t = (0, l.A)(n, p);
                    return (0, u.jsx)(d.Ay, (0, r.A)((0, r.A)({}, t), {}, {
                        classes: {
                            popper: e
                        }
                    }))
                })(i || (i = (0, s.A)(["\n  .MuiTooltip-tooltip {\n    background: #ffffff;\n    color: #5e5e60;\n    border: 1px solid #e7e8ec;\n    border-radius: 8px;\n    box-shadow: 0 6px 18px rgba(17, 18, 25, 0.12);\n\n    padding: 12px 14px;\n    font-size: 13px;\n    line-height: 140%;\n    font-weight: 400;\n    font-family: ", ";\n\n    max-width: 320px;\n    white-space: normal;\n  }\n\n  .MuiTooltip-arrow {\n    color: #ffffff;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                m = c.default.div(a || (a = (0, s.A)(["\n  width: 18px;\n  height: 18px;\n  border-radius: 6px;\n  background: rgba(244, 245, 249, 0.9);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n"]))),
                h = c.default.div(o || (o = (0, s.A)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n"])))
        },
        43976: function(n, e, t) {
            t.r(e), t.d(e, {
                JusfinderWrapper: function() {
                    return D_
                }
            });
            var i, a, o, r, l, s, c, d, u, p, f, m, h, x, g, v, y, b, A, _, j, C, w, k, S, P, E, R, M, O, T, N, D, z, q, L, I, F, U, Q, V, B, $, J, K, W, H, Y, G, X, Z, nn, en, tn, an, on, rn, ln, sn, cn, dn, un, pn, fn, mn, hn, xn, gn, vn, yn, bn, An, _n, jn, Cn, wn, kn, Sn, Pn, En, Rn, Mn, On = t(73933),
                Tn = t(16832),
                Nn = t(27565),
                Dn = t(43519),
                zn = t(84688),
                qn = t(69665),
                Ln = t(5544),
                In = new Map([
                    ["personal_data", {
                        documentType: "CPF"
                    }],
                    ["company_information", {
                        documentType: "CNPJ"
                    }],
                    ["company_partnership", {
                        documentType: "CPF"
                    }],
                    ["vehicle_data", {
                        documentType: "Placa de Ve\xedculo"
                    }],
                    ["economic_group", {
                        documentType: "CNPJ"
                    }],
                    ["vehicle_tracking", {
                        documentType: "Placa de Ve\xedculo"
                    }]
                ]),
                Fn = new Map([
                    ["EMPTY_ERROR", "*Por favor, preencha o campo para realizar sua consulta."],
                    ["DOCUMENT_ERROR", "*Por favor, se certifique de que esse \xe9 um documento v\xe1lido."],
                    ["TERMS_ACCEPTED_ERROR", "*Voc\xea precisa selecionar o campo de termos de uso para dar continuidade a sua consulta."],
                    ["EMPTY_QUERY", "Selecione pelo menos uma consulta"]
                ]),
                Un = new Map([
                    ["personal_data", ["CPF"]],
                    ["list_vehicles", ["CPF", "CNPJ"]],
                    ["company_information", ["CNPJ"]],
                    ["company_partnership", ["CPF"]],
                    ["vehicle_data", ["LICENSE_PLATE"]],
                    ["relationship_tree", ["CPF", "CNPJ"]],
                    ["credit_restriction", ["CPF", "CNPJ"]],
                    ["lawsuit", ["CPF", "CNPJ"]],
                    ["trademarks", ["CPF", "CNPJ"]],
                    ["professional_data", ["CPF"]],
                    ["cpf_registration_status", ["CPF"]],
                    ["economic_group", ["CNPJ"]],
                    ["vehicle_tracking", ["LICENSE_PLATE"]]
                ]),
                Qn = [{
                    value: "household_activity",
                    text: "Empresas com atividade semelhante no endere\xe7o"
                }, {
                    value: "household",
                    text: "Empresas de qualquer atividade no endere\xe7o"
                }, {
                    value: "rfcontact",
                    text: "Empresas com mesmo contato na Receita Federal"
                }, {
                    value: "owners",
                    text: "Empresas com o mesmo quadro societ\xe1rio"
                }, {
                    value: "legal_representative",
                    text: "Empresas com o mesmo representante legal"
                }],
                Vn = (new Map([
                    ["household_activity", "Economic_Group_Activities_Same_Address"],
                    ["household", " Economic_Group_Same_Address"],
                    ["rfcontact", "Economic_Group_Same Contact_FR"],
                    ["owners", " Economic_Group_Same_Ownership_Partners"],
                    ["legal_representative", " Economic_Group_Same_Legal_Representatives"]
                ]), ["relationship_tree", "professional_data", "personal_data", "company_information", "company_partnership", "vehicle_data", "trademarks"]),
                Bn = "lawsuit",
                $n = "economic_group",
                Jn = "vehicle_tracking",
                Kn = t(27929),
                Wn = (0, Nn.createContext)({}),
                Hn = {
                    open: !1,
                    type: null,
                    config: {}
                },
                Yn = function(n) {
                    var e = n.children,
                        t = (0, Nn.useState)(Hn),
                        i = (0, Ln.A)(t, 2),
                        a = i[0],
                        o = i[1],
                        r = (0, Nn.useState)("query"),
                        l = (0, Ln.A)(r, 2),
                        s = l[0],
                        c = l[1],
                        d = (0, Nn.useState)(!1),
                        u = (0, Ln.A)(d, 2),
                        p = u[0],
                        f = u[1],
                        m = (0, Nn.useState)([]),
                        h = (0, Ln.A)(m, 2),
                        x = h[0],
                        g = h[1],
                        v = (0, Nn.useState)(!1),
                        y = (0, Ln.A)(v, 2),
                        b = y[0],
                        A = y[1],
                        _ = (0, Nn.useState)(!1),
                        j = (0, Ln.A)(_, 2),
                        C = j[0],
                        w = j[1],
                        k = (0, Nn.useState)(!1),
                        S = (0, Ln.A)(k, 2),
                        P = S[0],
                        E = S[1],
                        R = (0, Nn.useState)(!1),
                        M = (0, Ln.A)(R, 2),
                        O = M[0],
                        T = M[1],
                        N = (0, Nn.useState)([]),
                        D = (0, Ln.A)(N, 2),
                        z = D[0],
                        q = D[1];
                    return (0, Kn.jsx)(Wn.Provider, {
                        value: {
                            modal: a,
                            page: s,
                            setPage: c,
                            openModal: function(n, e) {
                                o({
                                    open: !0,
                                    type: n,
                                    config: e
                                })
                            },
                            closeModal: function() {
                                o(Hn)
                            },
                            shouldReload: p,
                            setShouldReload: f,
                            fillQueries: function() {
                                g(Qn.map(function(n) {
                                    return n.value
                                }))
                            },
                            queries: x,
                            setQueries: g,
                            isLoading: P,
                            setIsLoading: E,
                            modalCheckout: b,
                            setModalCheckout: A,
                            loadingModalCheckout: C,
                            setLoadingModalCheckout: w,
                            modalSuggestion: O,
                            setModalSuggestion: T,
                            data: z,
                            setData: q
                        },
                        children: e
                    })
                },
                Gn = t(57528),
                Xn = t(42506),
                Zn = Xn.default.div(i || (i = (0, Gn.A)(["\n  display: ", ';\n  justify-content: space-between;\n  align-items: flex-end;\n\n  h1 {\n    margin: 4px 0 0;\n    font-weight: 700;\n    color: #111219;\n    font-family: "Noto Sans";\n  }\n\n  span {\n    font-family: "Noto Sans";\n    color: #655d79;\n  }\n\n  @media (max-width: 545px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 24px;\n\n    h1 {\n      font-size: 32px;\n    }\n  }\n'])), function(n) {
                    return n.isMultipleQueriesPage ? "none" : "flex"
                }),
                ne = Xn.default.div(a || (a = (0, Gn.A)(["\n  display: flex;\n  gap: 16px;\n"]))),
                ee = Xn.default.div(o || (o = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))),
                te = Xn.default.button(r || (r = (0, Gn.A)(["\n  border: 0;\n  border-radius: 5px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: ", ";\n  font-weight: 700;\n  padding: 0px 24px;\n  color: #fff;\n  background-color: #01ab7d;\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                ie = new Map([
                    ["query", {
                        title: "Nova Consulta",
                        subtitle: "Consulta",
                        buttonText: "Ver consultas realizadas",
                        pageRedirect: "history"
                    }],
                    ["history", {
                        title: "Consultas realizadas",
                        subtitle: "Consultas",
                        buttonText: "Voltar para nova consulta",
                        buttonIcon: "arrow-left",
                        pageRedirect: "query"
                    }],
                    ["batchQueries", {
                        title: "Consultas em lote",
                        subtitle: "Consultas",
                        pageRedirect: "query"
                    }],
                    ["history_batch", {
                        title: "Consultas em lote",
                        subtitle: "jusfinder",
                        pageRedirect: "batchQueries",
                        buttonText: "Criar consulta em lote",
                        buttonIcon: "add-button-jusfinder"
                    }],
                    ["MultipleQueriesPage", {
                        title: "Consultas em lote",
                        subtitle: "jusfinder",
                        buttonText: "",
                        pageRedirect: "query"
                    }]
                ]),
                ae = Xn.default.button(l || (l = (0, Gn.A)(['\n  display: flex;\n  height: 40px;\n  padding: 0 14px;\n  align-items: center;\n  gap: 8px;\n  border: none;\n  background: transparent;\n  width: fit-content;\n  color: #017858;\n  text-align: center;\n  font-family: "Noto Sans";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n\n  &:hover {\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.08);\n  }\n']))),
                oe = (0, Xn.default)(Dn.A)(s || (s = (0, Gn.A)([""]))),
                re = (Xn.default.span(c || (c = (0, Gn.A)([""]))), function(n) {
                    var e = n.onClick,
                        t = n.text,
                        i = void 0 === t ? "Sugest\xe3o" : t;
                    return (0, Kn.jsxs)(ae, {
                        onClick: e,
                        children: [(0, Kn.jsx)(oe, {
                            src: (0, zn.oK)("/media/jusfinder/chat-sugestion.svg")
                        }), i]
                    })
                }),
                le = function() {
                    var n = function() {
                            var n = (0, Nn.useContext)(Wn),
                                e = n.page,
                                t = n.setPage,
                                i = n.setModalSuggestion,
                                a = n.setData,
                                o = ie.get(e),
                                r = o.title,
                                l = o.subtitle,
                                s = o.buttonText,
                                c = o.buttonIcon,
                                d = o.pageRedirect,
                                u = (0, Nn.useCallback)(function() {
                                    d && (a([]), t(d))
                                }, [d, t]);
                            return {
                                title: r,
                                subtitle: l,
                                buttonText: s,
                                buttonIcon: c,
                                pageRedirect: d,
                                redirect: u,
                                openModalSuggestion: function() {
                                    i(!0)
                                }
                            }
                        }(),
                        e = n.title,
                        t = n.subtitle,
                        i = n.buttonText,
                        a = n.buttonIcon,
                        o = n.redirect,
                        r = n.openModalSuggestion,
                        l = (0, Nn.useContext)(Wn),
                        s = l.page,
                        c = l.isLoading,
                        d = "MultipleQueriesPage" === s;
                    return (0, Kn.jsxs)(Zn, {
                        isMultipleQueriesPage: d,
                        children: [(0, Kn.jsxs)("div", {
                            children: [(0, Kn.jsx)("span", {
                                children: t
                            }), (0, Kn.jsx)("h1", {
                                children: e
                            })]
                        }), (0, Kn.jsx)(ne, {
                            children: i && "history_batch" === s ? (0, Kn.jsxs)(te, {
                                onClick: o,
                                disabled: c,
                                children: [(0, Kn.jsx)(Dn.A, {
                                    width: "10px",
                                    height: "10px",
                                    fill: "#323232",
                                    src: (0, zn.oK)("/media/flat/".concat(a, ".svg"))
                                }), i]
                            }) : i && (0, Kn.jsxs)(Kn.Fragment, {
                                children: [(0, Kn.jsx)(re, {
                                    text: "Fazer sugest\xe3o",
                                    onClick: r
                                }), (0, Kn.jsx)(qn.A, {
                                    borderRadius: "5px",
                                    padding: "10px 40px",
                                    variant: "contained",
                                    onClick: o,
                                    disabled: c,
                                    children: (0, Kn.jsxs)(ee, {
                                        children: [a ? (0, Kn.jsx)(Dn.A, {
                                            width: "16px",
                                            height: "16px",
                                            fill: "#323232",
                                            src: (0, zn.oK)("/media/flat/".concat(a, ".svg"))
                                        }) : null, i]
                                    })
                                })]
                            })
                        })]
                    })
                },
                se = t(29863),
                ce = Xn.default.section(d || (d = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  background-color: #fff;\n  margin-top: ", ";\n  margin-bottom: -85px;\n  border-top: 1px solid var(--neutral-stroke-stroke-light, #e7e8ec);\n  border-bottom: 1px solid var(--neutral-stroke-stroke-light, #e7e8ec);\n  background: linear-gradient(93deg, #fff 44.91%, #fae4db 107.79%);\n"])), function(n) {
                    return n.isNewSidebarEnabled ? "0" : "85px"
                }),
                de = Xn.default.div(u || (u = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  padding: 24px 40px;\n\n  background-image: linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);\n  background-size: 24px 24px;\n"]))),
                ue = Xn.default.h2(p || (p = (0, Gn.A)(["\n  color: var(--neutral-text-text-darker, #131313);\n  font-family: var(--font-family-font-family, 'Noto Sans');\n  font-size: var(--font-size-font-size-3, 18px);\n  font-style: normal;\n  font-weight: 700;\n  line-height: 140%;\n"]))),
                pe = Xn.default.p(f || (f = (0, Gn.A)(["\n  color: var(--neutral-text-text-darker, #131313);\n  font-family: var(--font-family-font-family-text, 'Noto Sans');\n  font-size: var(--font-size-font-size-14, 14px);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  margin-bottom: 24px;\n"]))),
                fe = Xn.default.button(m || (m = (0, Gn.A)(["\n  border-radius: var(--large, 7px);\n  border: 1px solid var(--brand-secondary-secondary-main, #e94f0e);\n  background: var(--neutral-background-background-lighter, #fff);\n  display: flex;\n  height: 40px;\n  width: 120px;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n"]))),
                me = Xn.default.div(h || (h = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: end;\n  align-items: end;\n  padding-right: 35px;\n  padding-top: 24px;\n\n  background-image: linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),\n    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);\n  background-size: 24px 24px;\n  img {\n    height: 215px;\n  }\n"]))),
                he = t(34979),
                xe = t(38957),
                ge = t(99822),
                ve = t(90950),
                ye = function(n) {
                    var e = n.onButtonClick,
                        t = (0, xe.A)(ge.$.KILL_SWITCH.NEW_SIDEBAR).isFeatureFlagEnable,
                        i = (0, he.HW)().preferences.menuVersion === ve.I.v2 && t;
                    return (0, Kn.jsxs)(ce, {
                        isNewSidebarEnabled: i,
                        children: [(0, Kn.jsxs)(de, {
                            children: [(0, Kn.jsx)(ue, {
                                children: "Atendemos seu pedido: agora seus cr\xe9ditos v\xe3o valer para qualquer consulta!"
                            }), (0, Kn.jsx)(pe, {
                                children: "A partir de fevereiro, sua conta ser\xe1 migrada para o novo sistema de cr\xe9ditos. Voc\xea poder\xe1 utilizar seus cr\xe9ditos em qualquer tipo de consulta dispon\xedvel na plataforma, da forma que for mais \xfatil para voc\xea."
                            }), (0, Kn.jsx)(fe, {
                                onClick: e,
                                children: "Saiba mais"
                            })]
                        }), (0, Kn.jsx)(me, {
                            children: (0, Kn.jsx)("img", {
                                src: "/media/jusfinder/banner-universal.svg",
                                alt: "Banner"
                            })
                        })]
                    })
                },
                be = t(38668),
                Ae = Xn.default.div(x || (x = (0, Gn.A)(["\n  display: flex;\n  position: relative;\n  padding: 40px;\n  width: 500px;\n  @media screen and (max-width: 578px) {\n    width: 100%;\n  }\n"]))),
                _e = Xn.default.div(g || (g = (0, Gn.A)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  @media screen and (max-width: 578px) {\n    width: 100%;\n  }\n"]))),
                je = Xn.default.div(v || (v = (0, Gn.A)(["\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  cursor: pointer;\n"]))),
                Ce = Xn.default.p(y || (y = (0, Gn.A)(['\n  color: var(--neutral-text-text-darker, #131313);\n  text-align: center;\n  font-family: var(--font-family-font-family-title, "Noto Sans");\n  font-size: var(--font-size-font-size-20, 20px);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n  margin-top: 24px;\n']))),
                we = Xn.default.p(b || (b = (0, Gn.A)(['\n  color: var(--neutral-text-text-light, #5e5e60);\n  text-align: center;\n  font-family: var(--font-family-font-family-text, "Noto Sans");\n  font-size: var(--font-size-font-size-14, 14px);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n']))),
                ke = Xn.default.p(A || (A = (0, Gn.A)(['\n  margin-top: 24px;\n  margin-bottom: 8px;\n  color: var(--neutral-text-text-darker, #131313);\n  font-family: var(--font-family-font-family-title, "Noto Sans");\n  font-size: var(--font-size-font-size-18, 18px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%; /* 25.2px */\n']))),
                Se = Xn.default.img(_ || (_ = (0, Gn.A)(["\n  width: 13px;\n  height: 13px;\n  border-radius: 3px;\n  background: var(--brand-primary-primary-lighter, #e6f7f2);\n  margin-right: 8px;\n"]))),
                Pe = Xn.default.div(j || (j = (0, Gn.A)(['\n  color: var(--neutral-text-text-light, #5e5e60);\n  font-family: var(--font-family-font-family-text, "Noto Sans");\n  font-size: var(--font-size-font-size-14, 14px);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  margin-bottom: 8px;\n']))),
                Ee = function() {
                    var n = (0, Nn.useState)(!1),
                        e = (0, Ln.A)(n, 2),
                        t = e[0],
                        i = e[1],
                        a = (0, be.lc)().HandleEvent;
                    return (0, Nn.useEffect)(function() {
                        a("Preview Modal Universal Migration")
                    }, [a]), (0, Kn.jsxs)(Kn.Fragment, {
                        children: [(0, Kn.jsx)(ye, {
                            onButtonClick: function() {
                                a("Open Modal Universal Migration"), i(!0)
                            }
                        }), (0, Kn.jsx)(se.A, {
                            open: t,
                            children: (0, Kn.jsxs)(Ae, {
                                children: [(0, Kn.jsx)(je, {
                                    onClick: function() {
                                        return i(!1)
                                    },
                                    children: (0, Kn.jsx)("img", {
                                        src: "/media/flat/close.svg",
                                        alt: "icon"
                                    })
                                }), (0, Kn.jsxs)(_e, {
                                    children: [(0, Kn.jsx)("img", {
                                        src: "/media/jusfinder/modal-universal-migration.svg",
                                        alt: "icon"
                                    }), (0, Kn.jsx)(Ce, {
                                        children: "Seus cr\xe9ditos valendo para todas as consultas JusFinder"
                                    }), (0, Kn.jsx)(we, {
                                        children: "A partir de fevereiro, voc\xea ter\xe1 um saldo \xfanico de cr\xe9ditos para utilizar em qualquer consulta, como e quando precisar."
                                    }), (0, Kn.jsx)(ke, {
                                        children: "O que muda na pr\xe1tica?"
                                    }), (0, Kn.jsxs)(Pe, {
                                        children: [(0, Kn.jsx)(Se, {
                                            src: "/media/jusfinder/check-success.svg",
                                            alt: "icon"
                                        }), "Um ", (0, Kn.jsx)("strong", {
                                            children: "saldo \xfanico"
                                        }), " para todas as consultas da JusFinder."]
                                    }), (0, Kn.jsxs)(Pe, {
                                        children: [(0, Kn.jsx)(Se, {
                                            src: "/media/jusfinder/check-success.svg",
                                            alt: "icon"
                                        }), "Cada consulta ", (0, Kn.jsx)("strong", {
                                            children: "consome um peso em cr\xe9ditos"
                                        }), " (voc\xea v\xea antes de confirmar)."]
                                    }), (0, Kn.jsxs)(Pe, {
                                        children: [(0, Kn.jsx)(Se, {
                                            src: "/media/jusfinder/check-success.svg",
                                            alt: "icon"
                                        }), "Acompanhe tudo em tempo real:", " ", (0, Kn.jsx)("strong", {
                                            children: "saldo, peso por consulta e hist\xf3rico de uso."
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                Re = t(89379),
                Me = t(91207),
                Oe = t(50953),
                Te = t(13516),
                Ne = t(64698),
                De = Xn.default.div(C || (C = (0, Gn.A)(["\n  position: relative;\n  display: flex;\n  padding: 32px;\n  gap: 24px;\n  flex-direction: column;\n  max-width: 462px;\n\n  @media screen and (max-width: 545px) {\n    max-width: none;\n  }\n"]))),
                ze = Xn.default.div(w || (w = (0, Gn.A)(["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"]))),
                qe = Xn.default.span(k || (k = (0, Gn.A)(['\n  font-family: "Noto Sans";\n  font-weight: 600;\n  font-size: 14px;\n']))),
                Le = Xn.default.div(S || (S = (0, Gn.A)(['\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  font-family: "Noto Sans";\n\n  p {\n    color: #655d79;\n    font-weight: 400;\n    font-size: 14px;\n    margin: 0;\n  }\n\n  h1 {\n    color: #111219;\n    font-weight: 700;\n    font-size: 26px;\n    margin: 0;\n  }\n']))),
                Ie = Xn.default.label(P || (P = (0, Gn.A)(['\n  font-family: "Noto Sans";\n  font-size: 14px;\n  color: #111219;\n  font-weight: 400;\n  margin: 0;\n\n  span {\n    font-weight: 700;\n  }\n']))),
                Fe = Xn.default.input(E || (E = (0, Gn.A)(["\n  border: ", ';\n  border-radius: 5px;\n  outline: none;\n  padding: 10px 0 10px 12px;\n  font-family: "Noto Sans" !important;\n'])), function(n) {
                    return n.error ? "1px solid #D83143" : "1px solid #cac9cf"
                }),
                Ue = Xn.default.div(R || (R = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),
                Qe = Xn.default.div(M || (M = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n"]))),
                Ve = (0, Xn.default)(Ne.A)(O || (O = (0, Gn.A)(["\n  margin: 0 !important;\n  padding: 0 !important;\n  width: 18px;\n  height: 18px;\n"]))),
                Be = Xn.default.label(T || (T = (0, Gn.A)(['\n  font-family: "Noto Sans";\n  font-size: 12px;\n  color: #3f4254;\n  font-weight: 400;\n\n  a {\n    color: #01ab7d;\n    text-decoration: underline;\n    cursor: pointer;\n    font-weight: 700;\n  }\n']))),
                $e = Xn.default.div(N || (N = (0, Gn.A)(["\n  display: ", ';\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 4px;\n\n  span {\n    font-family: "Noto Sans";\n    font-size: 14px;\n    color: #111219;\n    font-weight: 400;\n    margin-top: -2px;\n  }\n\n  .step-document .flex {\n    display: flex !important;\n    flex-direction: row !important;\n    gap: 30px;\n\n    label {\n      margin-bottom: 0 !important;\n      font-family: "Noto Sans";\n    }\n\n    span {\n      font-family: "Noto Sans";\n      font-style: normal;\n      font-weight: 500;\n      font-size: 14px;\n      line-height: 18px;\n\n      color: ', ";\n    }\n  }\n"])), function(n) {
                    var e = n.type;
                    return ["list_vehicles", "relationship_tree", "credit_restriction", "lawsuit", "trademarks"].includes(e) ? "flex" : "none"
                }, function(n) {
                    return n.theme.colors.gray.secondary
                }),
                Je = Xn.default.div(D || (D = (0, Gn.A)(['\n  color: #e91229;\n  font-family: "Noto Sans";\n  font-size: 12px;\n  font-weight: 400;\n']))),
                Ke = Xn.default.div(z || (z = (0, Gn.A)(["\n  display: ", ';\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 4px;\n\n  h2 {\n    color: #131313;\n    font-family: "Noto Sans";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 140%;\n\n    span {\n      color: #d83143;\n    }\n  }\n'])), function(n) {
                    return n.isVisible ? "flex" : "none"
                }),
                We = Xn.default.div(q || (q = (0, Gn.A)(["\n  padding: 4px;\n  .MuiSvgIcon-root {\n    fill: ", ';\n  }\n\n  label {\n    .MuiTypography-body1 {\n      font-family: "Noto Sans" !important;\n      font-size: 14px !important;\n      color: #383839 !important;\n      font-weight: 400 !important;\n      margin-bottom: 4px !important;\n    }\n  }\n'])), function(n) {
                    return n.hasError ? "#D83143" : "#01AB7D"
                }),
                He = Xn.default.div(L || (L = (0, Gn.A)(["\n  display: ", ";\n  padding: 12px;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 3px;\n  background: ", ";\n  margin-top: 8px;\n\n  span {\n    color: #383839;\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n    flex: 1;\n  }\n"])), function(n) {
                    return n.isVisible ? "flex" : "none"
                }, function(n) {
                    return n.background || "#E6F3F7"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }),
                Ye = Xn.default.div(I || (I = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n"]))),
                Ge = Xn.default.button(F || (F = (0, Gn.A)(["\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: #806400;\n  font-family: ", ";\n  font-size: ", ';\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  position: relative;\n\n  &:after {\n    content: ">";\n    position: absolute;\n\n    right: -15px;\n    top: 1px;\n\n    height: 0px;\n    background: #806400;\n  }\n'])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }),
                Xe = (0, Xn.default)(Dn.A)(U || (U = (0, Gn.A)(["\n  margin-top: 3px;\n"]))),
                Ze = Xn.default.div(Q || (Q = (0, Gn.A)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  align-self: stretch;\n"]))),
                nt = Xn.default.div(V || (V = (0, Gn.A)(["\n  display: flex;\n  padding: 12px;\n  flex-direction: column;\n\n  align-items: flex-start;\n  gap: 10px;\n  align-self: stretch;\n\n  border-radius: 8px;\n  background: #fafbff;\n\n  span {\n    color: #5e5e60;\n\n    font-family: ", ";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n\n  strong {\n    font-weight: 600;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                et = Xn.default.button(B || (B = (0, Gn.A)(["\n  color: #017858;\n\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  text-decoration-line: underline;\n  text-decoration-style: solid;\n  text-decoration-skip-ink: none;\n  text-decoration-thickness: auto;\n  text-underline-offset: auto;\n  text-underline-position: from-font;\n\n  background: transparent;\n  border: none;\n  padding: 0;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                tt = t(60436),
                it = t(79943),
                at = t(95383),
                ot = t(73573),
                rt = t(8719),
                lt = "https://backend.jusfy.com.br/api",
                st = new Map([
                    ["vehicle_data", {
                        timeout: 3e5
                    }]
                ]),
                ct = new Map([
                    ["trademarks", {
                        url: "".concat(lt, "/trademarks")
                    }],
                    ["professional_data", {
                        url: "".concat(lt, "/professional_data_finder")
                    }],
                    ["cpf_registration_status", {
                        url: "".concat(lt, "/cpf_registration_status")
                    }],
                    ["economic_group", {
                        url: "".concat(lt, "/economic_group")
                    }],
                    ["queries", {
                        url: "".concat(lt, "/queries/checkout")
                    }],
                    ["vehicle_tracking", {
                        url: "".concat(lt, "/queries/schedule")
                    }]
                ]),
                dt = t(30090),
                ut = t(42784),
                pt = t(89390),
                ft = t(96907),
                mt = t(69424),
                ht = function(n) {
                    var e = (0, ut.A)("jusfinder-terms-accepted"),
                        t = e.getToken,
                        i = e.setToken,
                        a = (0, ut.A)("context_queries"),
                        o = a.getToken,
                        r = a.setToken,
                        l = (0, pt.g)(),
                        s = (0, pt.W6)(),
                        c = (0, Nn.useState)(l.type || "CPF"),
                        d = (0, Ln.A)(c, 2),
                        u = d[0],
                        p = d[1],
                        f = (0, Nn.useState)(""),
                        m = (0, Ln.A)(f, 2),
                        h = m[0],
                        x = m[1],
                        g = (0, Nn.useState)(l.document || ""),
                        v = (0, Ln.A)(g, 2),
                        y = v[0],
                        b = v[1],
                        A = (0, Nn.useState)(t()),
                        _ = (0, Ln.A)(A, 2),
                        j = _[0],
                        C = _[1],
                        w = (0, Nn.useState)(!1),
                        k = (0, Ln.A)(w, 2),
                        S = k[0],
                        P = k[1],
                        E = "ERROR_CREDIT" === h,
                        R = (0, Nn.useContext)(Wn),
                        M = R.openModal,
                        O = R.closeModal,
                        T = R.setShouldReload,
                        N = R.setQueries,
                        D = R.queries,
                        z = (0, be.lc)().HandleEvent,
                        q = (0, it.A)(O),
                        L = function() {
                            var e = In.get(n.identification) || null;
                            return (null === e || void 0 === e ? void 0 : e.documentType) || u
                        }(),
                        I = "vehicle_data" === n.identification ? "uma" : "o",
                        F = function(n) {
                            var e = n.toUpperCase().replace(/[^a-zA-Z0-9-]/g, "").replace(/^([a-zA-Z]{3})([0-9][0-9]+)$/, "$1-$2"),
                                t = e.includes("-") ? 8 : 7;
                            return e.substring(0, t)
                        },
                        U = function() {
                            return {
                                CPF: at.Oy,
                                CNPJ: at.kE
                            }[u]
                        },
                        Q = new Map([
                            ["personal_data", at.Oy],
                            ["list_vehicles", U()],
                            ["company_information", at.kE],
                            ["company_partnership", at.Oy],
                            ["vehicle_data", F],
                            ["relationship_tree", U()],
                            ["credit_restriction", U()],
                            ["lawsuit", U()],
                            ["trademarks", U()],
                            ["professional_data", at.Oy],
                            ["cpf_registration_status", at.Oy],
                            ["economic_group", at.kE],
                            ["vehicle_tracking", F]
                        ]),
                        V = function() {
                            return l.type === u && Un.get(n.identification).includes(l.type)
                        },
                        B = function() {
                            return {
                                CPF: J,
                                CNPJ: K
                            }[u]
                        },
                        $ = function() {
                            var n = y.replace("-", "");
                            return /^[A-Z]{3}[0-9]{4}$/.test(n) || function(n) {
                                return /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/.test(n)
                            }(n) ? (x(""), !0) : (x("DOCUMENT_ERROR"), !1)
                        },
                        J = function() {
                            return ot.If.isValid(y) ? (x(""), !0) : (x("DOCUMENT_ERROR"), !1)
                        },
                        K = function() {
                            return ot.qb.isValid(y) ? (x(""), !0) : (x("DOCUMENT_ERROR"), !1)
                        },
                        W = function() {
                            return "" === y ? (x("EMPTY_ERROR"), !1) : new Map([
                                ["personal_data", J],
                                ["list_vehicles", B()],
                                ["company_information", K],
                                ["company_partnership", J],
                                ["vehicle_data", $],
                                ["relationship_tree", B()],
                                ["credit_restriction", B()],
                                ["lawsuit", B()],
                                ["trademarks", B()],
                                ["professional_data", J],
                                ["cpf_registration_status", J],
                                ["economic_group", K],
                                ["vehicle_tracking", $]
                            ]).get(n.identification)()
                        },
                        H = function() {
                            j || x("TERMS_ACCEPTED_ERROR")
                        };
                    (0, Nn.useEffect)(function() {
                        b(function(e) {
                            return Q.get(n.identification)(e)
                        }), V() || b("")
                    }, [u]), (0, Nn.useEffect)(function() {
                        i(j)
                    }, [j]), (0, Nn.useEffect)(function() {
                        x("")
                    }, [D, y]);
                    var Y = "trademarks" === n.identification ? "trademarks_and_patents" : n.identification,
                        G = function() {
                            var e = {
                                query_type: Y
                            };
                            return ["list_vehicles", "relationship_tree", "credit_restriction", "lawsuit", "trademarks", "professional_data", "cpf_registration_status", "economic_group"].includes(n.identification) && (e.document_type = u), e
                        },
                        X = G(),
                        Z = function(e) {
                            var t = e.data,
                                i = t.payment_info,
                                a = t.query_info,
                                l = o();
                            if ("on_hold" === i.status) return (0, dt.$q)(n, D, u, X, l), void M("AVAILABLE_SOON_MODAL");
                            "approved" === i.status && "success" === a.status ? function() {
                                (0, dt.$q)(n, D, u, X, l);
                                var e = {
                                    relationship_tree: "/relation_query/".concat(u, "/").concat(a.id),
                                    professional_data: "/resultado/".concat(a.feature_type_name, "/").concat(a.id),
                                    personal_data: "/resultado/".concat(a.feature_type_name, "/").concat(a.id),
                                    company_information: "/resultado/".concat(a.feature_type_name, "/").concat(a.id),
                                    company_partnership: "/resultado/".concat(a.feature_type_name, "/").concat(a.id),
                                    vehicle_data: "/resultado/".concat(a.feature_type_name, "/").concat(a.id),
                                    trademarks: "/resultado/".concat(a.feature_type_name, "/").concat(a.id)
                                };
                                if (r(""), Vn.includes(a.feature_type_name)) M("SUCCESS_QUERY_MODAL", {
                                    type: "query",
                                    action: function() {
                                        s.push(e[a.feature_type_name])
                                    }
                                });
                                else {
                                    var t = a.pdf;
                                    M("SUCCESS_QUERY_MODAL", {
                                        type: "file",
                                        action: function() {
                                            window.open(t, "_BLANK")
                                        }
                                    })
                                }
                            }() : function() {
                                if ("no_credits" === i.status && "query failed" === a.status) return T(!0), void M("ERROR_QUERY_MODAL", {
                                    type: "BAD_REQUEST",
                                    action: O
                                });
                                var n = {
                                    query_failed: {
                                        condition: function() {
                                            return "approved" === i.status && "query failed" === a.status
                                        },
                                        modalConfig: {
                                            type: "ERROR_PROCESS",
                                            action: O
                                        }
                                    },
                                    limit_reached: {
                                        condition: function() {
                                            return "limit_reached" === i.status
                                        },
                                        modalConfig: {
                                            type: "LIMIT_REACHED",
                                            action: O
                                        }
                                    },
                                    error_lgpd: {
                                        condition: function() {
                                            return "ERROR_LGPD" === i.status && "query failed" === a.status
                                        },
                                        modalConfig: {
                                            type: "ERROR_LGPD",
                                            action: O
                                        }
                                    }
                                };
                                for (var e in n)
                                    if (n[e].condition()) {
                                        M("ERROR_QUERY_MODAL", n[e].modalConfig);
                                        break
                                    }
                            }()
                        },
                        nn = function(n) {
                            M("ERROR_QUERY_MODAL", {
                                type: "BAD_REQUEST",
                                action: O
                            })
                        },
                        en = ["EMPTY_ERROR", "DOCUMENT_ERROR", "EMPTY_QUERY", "ERROR_CREDIT"].includes(h);
                    (0, Nn.useEffect)(function() {
                        S && M("LOADING_QUERY_MODAL", {
                            name: n.name
                        })
                    }, [S]);
                    return {
                        closeModal: O,
                        modalRef: q,
                        documentTypeLabel: L,
                        documentTypeLabelPrefix: I,
                        maskLicensePlate: F,
                        getCpfOrCnpjMask: U,
                        MASKS: Q,
                        shouldAcceptAutofill: V,
                        onChangeQueryInput: function(e) {
                            var t = e.target.value;
                            b(Q.get(n.identification)(t))
                        },
                        validadeCpfOrCnpj: B,
                        validateLicensePlate: $,
                        validateCpf: J,
                        validateCNPJ: K,
                        validateDocument: W,
                        validateTermsAccepted: H,
                        getAnalyticsQueryTreats: G,
                        onQueryDocument: function() {
                            var e = W();
                            if (H(), ("economic_group" !== n.identification || function() {
                                    var e = 0 === D.length,
                                        t = D.length;
                                    return e ? (x("EMPTY_QUERY"), !1) : !(n.credit < t) || (x("ERROR_CREDIT"), !1)
                                }()) && e && j) {
                                x(""), P(!0);
                                var t = Un.get(n.identification),
                                    i = {
                                        CPF: function(n) {
                                            return n.replace(/\D/g, "")
                                        },
                                        CNPJ: function(n) {
                                            return n.replace(/\D/g, "")
                                        },
                                        LICENSE_PLATE: function(n) {
                                            return n.replace("-", "")
                                        }
                                    },
                                    a = t.find(function(n) {
                                        return i[n]
                                    });
                                (function(n, e, t) {
                                    var i = st.get(e.identification) || {},
                                        a = ct.get(e.identification) || ct.get("queries"),
                                        o = (0, dt.OL)(e, t),
                                        r = "economic_group" === e.identification,
                                        l = "vehicle_tracking" === e.identification,
                                        s = {
                                            document: n,
                                            product_selected: o,
                                            queries: r ? t : void 0
                                        },
                                        c = {
                                            document: n,
                                            query: e.identification,
                                            documentType: "plate"
                                        },
                                        d = l ? c : s;
                                    return rt.A.post(a.url, d, i)
                                })((i[a] || function(n) {
                                    return n
                                })(y), n, D).then(Z).catch(nn).finally(function() {
                                    T(!0), P(!1)
                                })
                            }
                        },
                        analyticsQueryTreats: X,
                        handleQueryResponse: Z,
                        handleQueryError: nn,
                        hasInputError: en,
                        isLoading: S,
                        setDocumentType: p,
                        setHasAcceptedterms: C,
                        documentType: u,
                        error: h,
                        queryDocument: y,
                        hasAcceptedTerms: j,
                        queries: D,
                        onChangeQueries: function(n, e) {
                            N(function(n) {
                                return n.includes(e) ? n.filter(function(n) {
                                    return n !== e
                                }) : [].concat((0, tt.A)(n), [e])
                            })
                        },
                        error_credit: E,
                        setQueries: N,
                        getDescriptionInfo: function() {
                            var e, t, i = null !== (e = null === D || void 0 === D ? void 0 : D.length) && void 0 !== e ? e : 0,
                                a = null !== (t = null === n || void 0 === n ? void 0 : n.credit) && void 0 !== t ? t : 0,
                                o = a < i,
                                r = (0, dt.td)("op\xe7\xe3o", i, "op\xe7\xf5es"),
                                l = (0, dt.td)("cr\xe9dito", a, "cr\xe9ditos"),
                                s = (0, dt.td)("cr\xe9dito", i, "cr\xe9ditos");
                            return {
                                message: o ? "Voc\xea possui apenas ".concat(l, ". Compre mais para conseguir consultar as ").concat(r, " marcadas.") : i > 0 ? "Ao fazer estas consultas, voc\xea utilizar\xe1 ".concat(s, " dos seus ").concat(l, ".") : "Selecione ao menos 1 op\xe7\xe3o para visualizar o consumo de cr\xe9ditos.",
                                hasCredit: o,
                                icon: (0, zn.oK)(o ? "/media/jusfinder/info-circle-down.svg" : "/media/jusfinder/info-circle-up-credits.svg")
                            }
                        },
                        openModalFromBox: function() {
                            z("Button Info Buy Credits Clicked"), M("BUY_CREDITS_MODAL", {
                                queryOption: n,
                                context: "box_info_buy_credits"
                            })
                        },
                        openExamplePdf: function() {
                            z("Open Example PDF Clicked");
                            var e = ft.Tw.get(n.identification);
                            e && window.open(e, "_blank", "noopener,noreferrer")
                        },
                        clickOnTheCameraQuantityButton: function() {
                            z("Button Camera Quantity Clicked", {
                                query_type: Y,
                                isUniversal: !1
                            }), window.open(mt.LV, "_blank", "noopener,noreferrer")
                        }
                    }
                },
                xt = t(9811),
                gt = function(n) {
                    var e = n.queryOption,
                        t = n.error,
                        i = n.hasInputError,
                        a = ht(e),
                        o = a.queries,
                        r = a.onChangeQueries,
                        l = e.credit > 5 ? 5 : e.credit,
                        s = {
                            ERROR_CREDIT: "Voc\xea tem apenas ".concat(e.credit, " cr\xe9ditos, escolha at\xe9 ").concat(l, " consultas a serem realizadas"),
                            EMPTY_QUERY: "Selecione pelo menos uma consulta"
                        }[t] || "";
                    return (0, Kn.jsxs)(Ke, {
                        isVisible: "economic_group" === e.identification,
                        children: [(0, Kn.jsxs)("h2", {
                            children: ["Consultas a serem realizadas (1 cr\xe9dito cada) ", (0, Kn.jsx)("span", {
                                children: "*"
                            })]
                        }), (0, Kn.jsx)(We, {
                            hasError: i && ("ERROR_CREDIT" === t || "EMPTY_QUERY" === t),
                            children: Qn.map(function(n, e) {
                                return (0, Kn.jsx)(Oe.A, {
                                    onChange: function(e) {
                                        return r(e, n.value)
                                    },
                                    control: (0, Kn.jsx)(xt.A, {
                                        checked: o.includes(n.value),
                                        name: n.value,
                                        color: "primary"
                                    }),
                                    label: n.text
                                }, e)
                            })
                        }), !i || "ERROR_CREDIT" !== t && "EMPTY_QUERY" !== t ? e.credit <= o.length || o.length < e.credit ? null : (0, Kn.jsx)(Je, {
                            children: Fn.get(t)
                        }) : (0, Kn.jsx)(Je, {
                            children: s
                        })]
                    })
                },
                vt = function(n) {
                    var e = n.isVisible,
                        t = n.message,
                        i = n.icon,
                        a = n.hasCredit,
                        o = n.openModal;
                    return (0, Kn.jsxs)(He, {
                        isVisible: e,
                        background: a && "#FFF9E6",
                        children: [(0, Kn.jsx)(Xe, {
                            src: i
                        }), (0, Kn.jsxs)(Ye, {
                            children: [(0, Kn.jsx)("span", {
                                children: t
                            }), a && (0, Kn.jsx)(Ge, {
                                onClick: o,
                                children: "Comprar cr\xe9ditos"
                            })]
                        })]
                    })
                },
                yt = t(31080),
                bt = t(40094),
                At = function(n) {
                    var e = n.queryOption,
                        t = ht(e),
                        i = t.closeModal,
                        a = t.modalRef,
                        o = t.documentTypeLabel,
                        r = t.documentTypeLabelPrefix,
                        l = t.onChangeQueryInput,
                        s = t.onQueryDocument,
                        c = t.hasInputError,
                        d = t.setHasAcceptedterms,
                        u = t.error,
                        p = t.queryDocument,
                        f = t.hasAcceptedTerms,
                        m = t.documentType,
                        h = t.setDocumentType,
                        x = t.getDescriptionInfo,
                        g = t.openModalFromBox,
                        v = t.openExamplePdf,
                        y = t.clickOnTheCameraQuantityButton,
                        b = x(),
                        A = b.message,
                        _ = b.hasCredit,
                        j = b.icon;
                    return (0, Kn.jsxs)(De, {
                        ref: a,
                        children: [(0, Kn.jsx)(ze, {
                            onClick: i,
                            children: (0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/close.svg")
                            })
                        }), (0, Kn.jsxs)(Le, {
                            children: [(0, Kn.jsx)("p", {
                                children: "Consulta"
                            }), (0, Kn.jsx)("h1", {
                                children: e.name
                            })]
                        }), (0, Kn.jsxs)(nt, {
                            children: [(0, Kn.jsxs)("span", {
                                children: [(0, Kn.jsx)("strong", {
                                    children: "Resultados poss\xedveis da busca: "
                                }), bt.KI[e.identification]]
                            }), e.identification === Jn && (0, Kn.jsx)(et, {
                                onClick: y,
                                children: "Confira a quantidade de c\xe2meras por estado"
                            })]
                        }), (0, Kn.jsxs)($e, {
                            type: e.identification,
                            children: [(0, Kn.jsxs)("span", {
                                children: ["Consulta dados de um:", (0, Kn.jsx)("span", {
                                    className: "text-danger",
                                    children: "\xa0*"
                                })]
                            }), (0, Kn.jsx)("div", {
                                className: "step-document",
                                children: (0, Kn.jsxs)(Me.A, {
                                    className: "flex",
                                    onChange: function(n) {
                                        return h(n.target.value)
                                    },
                                    value: m,
                                    children: [(0, Kn.jsx)(Oe.A, {
                                        value: "CPF",
                                        control: (0, Kn.jsx)(Te.A, {}),
                                        label: (0, Kn.jsx)("span", {
                                            className: "title",
                                            children: "CPF"
                                        })
                                    }), (0, Kn.jsx)(Oe.A, {
                                        value: "CNPJ",
                                        control: (0, Kn.jsx)(Te.A, {}),
                                        label: (0, Kn.jsx)("span", {
                                            className: "title",
                                            children: "CNPJ"
                                        })
                                    })]
                                })
                            })]
                        }), (0, Kn.jsx)(gt, {
                            queryOption: e,
                            error: u,
                            hasInputError: c
                        }), (0, Kn.jsxs)(Ue, {
                            children: [(0, Kn.jsxs)(Ie, {
                                children: ["Informe ", r, " ", (0, Kn.jsx)("span", {
                                    children: o
                                }), " ", "para consulta", (0, Kn.jsx)("span", {
                                    className: "text-danger",
                                    children: "\xa0*"
                                })]
                            }), (0, Kn.jsx)(Fe, {
                                value: p,
                                onChange: l,
                                placeholder: "Digite ".concat(r, " ").concat(o),
                                error: c && ("DOCUMENT_ERROR" === u || "EMPTY_ERROR" === u)
                            }), !c || "DOCUMENT_ERROR" !== u && "EMPTY_ERROR" !== u ? null : (0, Kn.jsx)(Je, {
                                children: Fn.get(u)
                            }), (0, Kn.jsx)(vt, {
                                isVisible: e.identification === $n,
                                message: A,
                                icon: j,
                                hasCredit: _,
                                openModal: g
                            })]
                        }), (0, Kn.jsxs)(Ze, {
                            children: [(0, Kn.jsx)(qn.A, {
                                width: "100%",
                                padding: "10px",
                                borderRadius: "5px",
                                onClick: s,
                                children: (0, Kn.jsx)(qe, {
                                    children: "Consultar agora"
                                })
                            }), e.identification !== Bn && (0, Kn.jsx)(yt.h, {
                                title: "Ver exemplo de relat\xf3rio",
                                background: "transparent",
                                padding: "10px 8px",
                                border: "none",
                                height: "40px",
                                fontWeight: 600,
                                fontSize: "14px",
                                width: "100%",
                                onClick: v
                            })]
                        }), (0, Kn.jsxs)(Qe, {
                            children: [(0, Kn.jsx)(Ve, {
                                checked: f,
                                onClick: function() {
                                    return d(function(n) {
                                        return !n
                                    })
                                }
                            }), (0, Kn.jsxs)(Be, {
                                children: ["Eu li e concordo com os", " ", (0, Kn.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "/terms",
                                    children: "termos de uso"
                                }), " ", "referentes a consulta de dados dentro do JusFinder."]
                            })]
                        }), "TERMS_ACCEPTED_ERROR" === u ? (0, Kn.jsx)(Je, {
                            children: Fn.get(u)
                        }) : null]
                    })
                },
                _t = Xn.default.div($ || ($ = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 32px;\n  width: 430px;\n\n  h1 {\n    color: #111219;\n    font-size: 22px;\n    font-family: "Noto Sans";\n    font-weight: 600;\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n    color: #535353;\n    font-size: 15px;\n    font-family: "Noto Sans";\n    font-weight: 400;\n  }\n\n  a {\n    text-align: center;\n    color: #555555;\n    font-size: 14px;\n    font-family: "Noto Sans";\n    font-weight: 400;\n    text-decoration: underline;\n  }\n\n  @media screen and (max-width: 545px) {\n    width: 100%;\n  }\n']))),
                jt = Xn.default.div(J || (J = (0, Gn.A)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),
                Ct = Xn.default.div(K || (K = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))),
                wt = Xn.default.span(W || (W = (0, Gn.A)(['\n  color: white;\n  font-size: 14px;\n  font-family: "Noto Sans";\n  font-weight: 600;\n  text-wrap: nowrap;\n\n  ', "\n  ", "\n"])), function(n) {
                    return n.secondary ? "color: #111219;" : null
                }, function(n) {
                    return n.tertiary ? "color: #01AB7D;" : null
                }),
                kt = Xn.default.div(H || (H = (0, Gn.A)(["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"]))),
                St = function(n) {
                    var e = n.type,
                        t = n.action,
                        i = (0, Nn.useContext)(Wn),
                        a = i.closeModal,
                        o = i.setPage,
                        r = (0, it.A)(a),
                        l = new Map([
                            ["query", {
                                message: "A consulta abrir\xe1 em uma nova aba do seu navegador, ou se preferir, clique em abrir consulta.",
                                buttonText: "Abrir consulta"
                            }],
                            ["file", {
                                message: "O PDF abrir\xe1 em uma nova aba do seu navegador, ou se preferir, clique em baixar o PDF.",
                                buttonText: "Baixar PDF agora"
                            }],
                            ["buy", {
                                message: "A sua consulta foi creditada no Jusfinder!",
                                buttonText: "Voltar para consulta"
                            }]
                        ]);
                    return (0, Nn.useEffect)(function() {
                        t()
                    }, []), (0, Kn.jsxs)(_t, {
                        ref: r,
                        children: [(0, Kn.jsx)(kt, {
                            onClick: a,
                            children: (0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/close.svg")
                            })
                        }), (0, Kn.jsxs)(jt, {
                            children: [(0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/check-rounded.svg")
                            }), (0, Kn.jsx)("h1", {
                                children: "Consulta realizada!"
                            })]
                        }), (0, Kn.jsx)("p", {
                            children: l.get(e).message
                        }), (0, Kn.jsx)(Ct, {
                            children: "buy" === e ? (0, Kn.jsx)(qn.A, {
                                onClick: t,
                                padding: "10px 40px",
                                width: "100%",
                                border: "1px solid #01AB7D",
                                backgroundColor: "#FDFDFF",
                                children: (0, Kn.jsx)(wt, {
                                    tertiary: !0,
                                    children: l.get(e).buttonText
                                })
                            }) : (0, Kn.jsxs)(Kn.Fragment, {
                                children: [(0, Kn.jsx)(qn.A, {
                                    padding: "10px 40px",
                                    width: "100%",
                                    backgroundColor: "#FDFDFF",
                                    border: "1px solid #CAC9CF",
                                    onClick: function() {
                                        a(), o("history")
                                    },
                                    children: (0, Kn.jsx)(wt, {
                                        secondary: !0,
                                        children: "Ver consultas"
                                    })
                                }), (0, Kn.jsx)(qn.A, {
                                    onClick: t,
                                    padding: "10px 40px",
                                    width: "100%",
                                    border: "1px solid #01AB7D",
                                    children: (0, Kn.jsx)(wt, {
                                        children: l.get(e).buttonText
                                    })
                                })]
                            })
                        })]
                    })
                },
                Pt = Xn.default.div(Y || (Y = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 32px;\n  width: 430px;\n\n  h1 {\n    color: #111219;\n    font-size: 22px;\n    font-family: "Noto Sans";\n    font-weight: 600;\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n    color: #535353;\n    font-size: 15px;\n    font-family: "Noto Sans";\n    font-weight: 400;\n    margin-bottom: 4px;\n  }\n\n  @media screen and (max-width: 545px) {\n    width: 100%;\n  }\n']))),
                Et = Xn.default.div(G || (G = (0, Gn.A)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),
                Rt = t(79263),
                Mt = t.n(Rt),
                Ot = function(n) {
                    var e = n.name,
                        t = n.isBuying,
                        i = (0, Kn.jsxs)("p", {
                            children: ["Em alguns segundos voc\xea ser\xe1 redirecionado para o resultado da consulta de ", e, "..."]
                        });
                    return (0, Kn.jsxs)(Pt, {
                        children: [(0, Kn.jsxs)(Et, {
                            children: [(0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/file.svg")
                            }), (0, Kn.jsx)("h1", {
                                children: "Processando..."
                            })]
                        }), t ? (0, Kn.jsx)("p", {
                            children: "Em alguns segundos a sua consulta ser\xe1 creditada..."
                        }) : i, (0, Kn.jsx)(Mt(), {
                            type: "spin",
                            color: "#9154DE",
                            width: "29px",
                            height: "29px"
                        })]
                    })
                },
                Tt = Xn.default.div(X || (X = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 32px;\n  width: 430px;\n\n  h1 {\n    color: #111219;\n    font-size: 22px;\n    font-family: "Noto Sans";\n    font-weight: 600;\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n    color: #535353;\n    font-size: 15px;\n    font-family: "Noto Sans";\n    font-weight: 400;\n  }\n\n  @media screen and (max-width: 545px) {\n    width: 100%;\n  }\n']))),
                Nt = Xn.default.div(Z || (Z = (0, Gn.A)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),
                Dt = Xn.default.span(nn || (nn = (0, Gn.A)(['\n  color: #111219;\n  font-size: 14px;\n  font-family: "Noto Sans";\n  font-weight: 600;\n']))),
                zt = new Map([
                    ["BAD_REQUEST", {
                        icon: "network-error",
                        title: "Problema na conex\xe3o...",
                        message: "Oi! Parece que tivemos um pequeno problema com a sua conex\xe3o agora. Que tal tentar novamente em alguns minutinhos? Estaremos aqui para ajudar!",
                        buttonText: "Ok. Entendi!"
                    }],
                    ["ERROR_PROCESS", {
                        icon: "network-error",
                        title: "Problema com instabilidade...",
                        message: "Desculpe-nos! Estamos enfrentando um probleminha de instabilidade com nosso fornecedor no momento. Que tal tentar novamente um pouco mais tarde? Agradecemos sua compreens\xe3o!",
                        buttonText: "Ok. Entendi!"
                    }],
                    ["LIMIT_REACHED", {
                        icon: "warning-rounded",
                        title: "J\xe1 realizamos essa consulta...",
                        message: "Ol\xe1! Parece que j\xe1 realizamos uma consulta com este documento hoje. Que tal dar uma olhadinha no hist\xf3rico de consultas? ",
                        buttonText: "Ok. Entendi!"
                    }],
                    ["ERROR_LGPD", {
                        icon: "warning-rounded",
                        title: "Resultado indispon\xedvel",
                        message: "Oi! Infelizmente, n\xe3o podemos exibir o resultado para este documento devido \xe0s diretrizes da LGPD. Se voc\xea tiver alguma d\xfavida ou precisar de mais informa\xe7\xf5es, por favor, entre em contato conosco. ",
                        buttonText: "Ok. Entendi!"
                    }],
                    ["FAIL_PURCHASE", {
                        icon: "network-error",
                        title: "Falha no pagamento",
                        message: "N\xe3o conseguimos processar o seu pagamento. Tente novamente em alguns minutos.",
                        buttonText: "Voltar para consulta"
                    }]
                ]),
                qt = function(n) {
                    var e = n.type,
                        t = n.action,
                        i = zt.get(e);
                    return (0, Kn.jsxs)(Tt, {
                        children: [(0, Kn.jsxs)(Nt, {
                            children: [(0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/".concat(i.icon, ".svg"))
                            }), (0, Kn.jsx)("h1", {
                                children: i.title
                            })]
                        }), (0, Kn.jsx)("p", {
                            children: i.message
                        }), (0, Kn.jsx)(qn.A, {
                            padding: "10px 40px",
                            width: "100%",
                            backgroundColor: "#FDFDFF",
                            border: "1px solid #CAC9CF",
                            onClick: t,
                            children: (0, Kn.jsx)(Dt, {
                                children: i.buttonText
                            })
                        })]
                    })
                },
                Lt = Xn.default.div(en || (en = (0, Gn.A)(["\n  display: flex;\n  gap: 24px;\n  position: relative;\n  padding: 32px;\n  width: 700px;\n  @media screen and (max-width: 578px) {\n    width: 100%;\n  }\n"]))),
                It = Xn.default.div(tn || (tn = (0, Gn.A)(["\n  position: relative;\n  display: flex;\n  gap: 24px;\n  flex-direction: column;\n  width: 100%;\n  @media screen and (max-width: 578px) {\n    width: 100%;\n  }\n"]))),
                Ft = Xn.default.span(an || (an = (0, Gn.A)(['\n  font-family: "Noto Sans";\n  font-weight: 600;\n  font-size: 14px;\n\n  ', "\n"])), function(n) {
                    return n.secondary ? "text-decoration: underline;" : null
                }),
                Ut = Xn.default.div(on || (on = (0, Gn.A)(["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"]))),
                Qt = Xn.default.div(rn || (rn = (0, Gn.A)(['\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  font-family: "Noto Sans";\n  margin-bottom: 8px;\n\n  p {\n    color: #655d79;\n    font-weight: 400;\n    font-size: 14px;\n    margin: 0;\n    line-height: 100%;\n  }\n\n  h1 {\n    color: #111219;\n    font-weight: 500;\n    font-size: 24px;\n    margin: 0;\n    line-height: 100%;\n  }\n']))),
                Vt = Xn.default.div(ln || (ln = (0, Gn.A)(["\n  display: flex;\n  align-items: end;\n  gap: 14px;\n"]))),
                Bt = Xn.default.span(sn || (sn = (0, Gn.A)(['\n  color: #111219;\n  font-size: 24px;\n  font-family: "Noto Sans";\n  font-weight: 600;\n  margin-bottom: -2px;\n\n  span {\n    font-size: 14px;\n  }\n\n  &:after {\n    content: "total";\n    font-size: 14px;\n    font-weight: 400;\n  }\n']))),
                $t = Xn.default.div(cn || (cn = (0, Gn.A)(['\n  display: flex;\n  padding: 24px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 16px;\n  border-radius: 5px;\n  border: 1px solid #f8cab7;\n  background: #fdede7;\n  width: 100%;\n\n  p {\n    color: #383839;\n\n    font-family: "Noto Sans";\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 140%;\n  }\n\n  @media screen and (max-width: 578px) {\n    display: none;\n  }\n']))),
                Jt = Xn.default.div(dn || (dn = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n"]))),
                Kt = Xn.default.div(un || (un = (0, Gn.A)(["\n  display: flex;\n  padding: 16px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 7px;\n  border: 1px solid #e7e8ec;\n  background: #fff;\n"]))),
                Wt = Xn.default.div(pn || (pn = (0, Gn.A)(['\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  span {\n    color: #383839;\n\n    font-family: "Noto Sans";\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 140%;\n  }\n']))),
                Ht = Xn.default.div(fn || (fn = (0, Gn.A)(['\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  color: #131313;\n  leading-trim: both;\n  text-edge: cap;\n\n  font-family: "Noto Sans";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n\n  border-radius: 2px;\n  background: #f8cab7;\n']))),
                Yt = Xn.default.div(mn || (mn = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n\n  span {\n  }\n"]))),
                Gt = Xn.default.div(hn || (hn = (0, Gn.A)(["\n  display: flex;\n  padding: 12px;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 3px;\n  background: #fff9e6;\n\n  span {\n    color: #383839;\n    font-family: ", ";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n    flex: 1 0 0;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Xt = Xn.default.div(xn || (xn = (0, Gn.A)(["\n  width: 1px;\n  background: #e7e8ec;\n\n  @media screen and (max-width: 578px) {\n    display: none;\n  }\n"]))),
                Zt = t(68426),
                ni = t(99966),
                ei = t(80940),
                ti = t(97450),
                ii = t(72061),
                ai = t(55035),
                oi = t(65774),
                ri = function(n) {
                    var e = n.queryOption,
                        t = n.context,
                        i = void 0 === t ? "" : t,
                        a = (0, Nn.useState)(1),
                        o = (0, Ln.A)(a, 2),
                        r = o[0],
                        l = o[1],
                        s = (0, Nn.useState)(!1),
                        c = (0, Ln.A)(s, 2),
                        d = c[0],
                        u = c[1],
                        p = (0, Nn.useState)(!1),
                        f = (0, Ln.A)(p, 2),
                        m = f[0],
                        h = f[1],
                        x = (0, Nn.useState)(""),
                        g = (0, Ln.A)(x, 2),
                        v = g[0],
                        y = g[1],
                        b = (0, ut.A)("context_queries").getToken,
                        A = (0, On.d4)(function(n) {
                            return n.subscription
                        }),
                        _ = (0, On.d4)(function(n) {
                            return n.auth.user
                        }),
                        j = window.location.pathname.split("/")[1],
                        C = (0, Nn.useContext)(Wn),
                        w = C.openModal,
                        k = C.closeModal,
                        S = C.setShouldReload,
                        P = C.setModalCheckout,
                        E = (0, it.A)(function() {
                            return null
                        }),
                        R = (0, be.lc)().HandleEvent,
                        M = d ? "new-credit-card" : "existing-credit-card",
                        O = function() {
                            return new Map([
                                ["trademarks", "trademarks_and_patents"],
                                ["professional_data", "professional_data"]
                            ]).get(e.identification) || e.identification
                        },
                        T = (0, Nn.useRef)(),
                        N = (0, ai.q$)(T),
                        D = (0, Ln.A)(N, 2),
                        z = D[0],
                        q = D[1];
                    (0, ai.xM)(T), (0, Nn.useEffect)(function() {
                        y(q.v3Token)
                    }, [q.v3Token]);
                    var L = function(n) {
                            var t = b();
                            h(!0), rt.A.post("".concat("https://backend.jusfy.com.br/api", "/queries/purchase_credits"), {
                                card_id: n.hash,
                                product_identification: e.identification,
                                purchased_credits_qty: Number(r),
                                recaptchaToken: v
                            }).then(function(n) {
                                S(!0), h(!1), ti.oR.success("Compra de cr\xe9ditos realizada!"), R("Query Credit Bought", {
                                    payment_option: M,
                                    query_type: O(),
                                    purchased_credits_qty: Number(r),
                                    context_queries: t || "jusfinder",
                                    context: i,
                                    isUniversal: !1
                                }), w("SUCCESS_QUERY_MODAL", {
                                    type: "buy",
                                    queryOption: e,
                                    action: function() {
                                        return w("QUERY_FORM_MODAL", {
                                            queryOption: e
                                        })
                                    }
                                })
                            }).catch(function(n) {
                                h(!1), w("ERROR_QUERY_MODAL", {
                                    type: "FAIL_PURCHASE",
                                    action: k
                                })
                            })
                        },
                        I = Number(e.price) * r;
                    (0, Nn.useEffect)(function() {
                        m && w("LOADING_QUERY_MODAL", {
                            isBuying: !0
                        })
                    }, [m]), (0, Nn.useEffect)(function() {
                        window.analytics.track("Buy Query Credit Modal Opened", {
                            context: "card-icon-button",
                            query_type: O()
                        })
                    }, []);
                    return (0, Kn.jsxs)(Lt, {
                        ref: E,
                        children: [(0, Kn.jsx)(Ut, {
                            onClick: k,
                            children: (0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/close.svg")
                            })
                        }), (0, Kn.jsxs)(It, {
                            children: [(0, Kn.jsxs)(Gt, {
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/jusfinder/info-jusfinder-circle.svg"),
                                    width: "16px",
                                    height: "16px"
                                }), (0, Kn.jsx)("span", {
                                    children: "Voc\xea n\xe3o possui cr\xe9ditos para esta consulta, compre mais para conseguir realiz\xe1-la ou contrate um plano com mais cr\xe9ditos"
                                })]
                            }), (0, Kn.jsxs)(Qt, {
                                children: [(0, Kn.jsx)("p", {
                                    children: "Comprar consultas avulsas de"
                                }), (0, Kn.jsx)("h1", {
                                    children: d ? "Novo cart\xe3o" : e.name
                                })]
                            }), (0, Kn.jsxs)(Vt, {
                                children: [(0, Kn.jsx)(Zt.A, {
                                    label: "N\xba de cr\xe9ditos",
                                    value: r,
                                    onChange: function(n) {
                                        var e = n.target.value;
                                        e >= 1 && e <= 99 && l(Number(e))
                                    },
                                    onDecrease: function() {
                                        l(r > 1 ? function(n) {
                                            return Number(n) - 1
                                        } : Number(1))
                                    },
                                    onIncrease: function() {
                                        l(r < 99 ? function(n) {
                                            return Number(n) + 1
                                        } : Number(99))
                                    }
                                }), (0, Kn.jsxs)(Bt, {
                                    children: ["R$", I.toFixed(2), (0, Kn.jsx)("span", {
                                        children: "/"
                                    })]
                                })]
                            }), (0, Kn.jsx)(ii.ReCaptchaProvider, {
                                siteKeyV3: "6Lc1YP8qAAAAAEPdzg4zAzJt7w4KVK3RZMFk5xhj",
                                children: (0, Kn.jsx)(ii.ReCaptchaV3, {
                                    callback: z
                                })
                            }), d ? (0, Kn.jsxs)(Kn.Fragment, {
                                children: [(0, Kn.jsx)(ni.A, {
                                    buttonText: "Finalizar compra",
                                    onLoading: function() {
                                        return h(!0)
                                    },
                                    onSubmit: L
                                }), (0, Kn.jsx)(qn.A, {
                                    color: "#01AB7D",
                                    backgroundColor: "transparent",
                                    onClick: function() {
                                        return u(!1)
                                    },
                                    width: "full",
                                    children: (0, Kn.jsx)(Ft, {
                                        secondary: !0,
                                        children: "Selecionar um cart\xe3o cadastrado"
                                    })
                                })]
                            }) : (0, Kn.jsx)(ei.A, {
                                buttonText: "Finalizar compra",
                                onNewCard: function() {
                                    return u(!0)
                                },
                                onSubmit: L
                            })]
                        }), (0, Kn.jsx)(Xt, {}), (0, Kn.jsxs)($t, {
                            children: [(0, Kn.jsx)("p", {
                                children: "Economize e tenha mais consultas dispon\xedveis todos os meses!"
                            }), (0, Kn.jsx)(Jt, {
                                children: Ua[e.identification].map(function(n, e) {
                                    return (0, Kn.jsxs)(Kt, {
                                        children: [(0, Kn.jsxs)(Wt, {
                                            children: [(0, Kn.jsx)("span", {
                                                children: n.name
                                            }), (0, Kn.jsx)(Ht, {
                                                children: n.price
                                            })]
                                        }), (0, Kn.jsxs)(Yt, {
                                            children: [(0, Kn.jsx)("span", {
                                                children: n.mainDescription
                                            }), (0, Kn.jsx)("span", {
                                                children: n.additionalDescription
                                            })]
                                        })]
                                    }, "".concat(n.name, "-").concat(e))
                                })
                            }), (0, Kn.jsxs)(qn.A, {
                                backgroundColor: "#E94F0E",
                                color: "#FFF",
                                padding: "10px 40px",
                                width: "100%",
                                borderRadius: "5px",
                                onClick: function() {
                                    P(!0), k(), R("About Information Plans Clicked"), oi.E.upgrade.trackUpgradeStarted(_, A.subscription_status, {}, {}, j)
                                },
                                children: ["Conhecer Planos", " ", (0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/flat/arrow-jusfinder-new.svg"),
                                    fill: "#fff"
                                })]
                            })]
                        })]
                    })
                },
                li = Xn.default.div(gn || (gn = (0, Gn.A)(["\n  padding: 32px;\n  ", "\n"])), function(n) {
                    return "choose_plan" === n.type ? "max-width: 430px;" : "max-width: 500px;"
                }),
                si = Xn.default.div(vn || (vn = (0, Gn.A)(['\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  font-family: "Noto Sans";\n\n  p {\n    color: #655d79;\n    font-weight: 400;\n    font-size: 14px;\n    margin: 0;\n  }\n\n  h1 {\n    color: #111219;\n    font-weight: 700;\n    font-size: 26px;\n    margin: 0;\n  }\n']))),
                ci = Xn.default.div(yn || (yn = (0, Gn.A)(["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"]))),
                di = Xn.default.div(bn || (bn = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),
                ui = Xn.default.p(An || (An = (0, Gn.A)(['\n  font-family: "Noto Sans";\n  font-size: 15px;\n  font-weight: 400;\n  margin: 0;\n\n  span {\n    font-family: "Noto Sans";\n    font-weight: 500;\n    color: #535353;\n\n    .highlight {\n      color: #5105be;\n    }\n  }\n']))),
                pi = Xn.default.div(_n || (_n = (0, Gn.A)(["\n  border-top: 1px solid #eaecf0;\n  padding: 24px 0;\n"]))),
                fi = Xn.default.div(jn || (jn = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 304px;\n  margin: 0 auto;\n"]))),
                mi = Xn.default.div(Cn || (Cn = (0, Gn.A)(["\n  background-color: #f9fafb;\n  border-radius: 5px;\n  border: 1px solid #eaecf0;\n  padding: 6px;\n  display: flex;\n  gap: 8px;\n"]))),
                hi = Xn.default.div(wn || (wn = (0, Gn.A)(["\n  border-radius: 5px;\n  padding: 14px 10px;\n  ", '\n  background-color: #fff;\n  font-family: "Noto Sans";\n  font-size: 16px;\n  font-weight: 400;\n  color: #667085;\n  cursor: pointer;\n  box-shadow: 0px 1px 3px 0px #1018281a;\n\n  ', "\n"])), function(n) {
                    return n.isGrow ? "flex-grow: 1;" : ""
                }, function(n) {
                    return n.selected ? "\n  font-family: 'Noto Sans';\n  font-size: 16px;\n  font-weight: 600;\n  padding: 14px 10px;\n  color: #5105BE;\n  background-color: #EEE3FF;\n  box-shadow: 0px 1px 2px 0px #1018280F;\n  " : ""
                }),
                xi = Xn.default.p(kn || (kn = (0, Gn.A)(["\n  font-family: Inter;\n  font-size: 48px;\n  font-weight: 600;\n  text-align: center;\n  margin: 0;\n\n  ", "\n"])), function(n) {
                    return n.isAnnually ? '\n  &::before {\n    content: "";\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 400;\n    text-align: center;\n    margin: 0;\n    width: fit-content;\n    color: #475467;\n    heigth: 16px;\n  }\n  ' : ""
                }),
                gi = Xn.default.p(Sn || (Sn = (0, Gn.A)(["\n  font-family: Inter;\n  font-size: 16px;\n  font-weight: 400;\n  text-align: center;\n  margin: 0;\n  color: #475467;\n"]))),
                vi = (Xn.default.ul(Pn || (Pn = (0, Gn.A)(["\n  list-style-type: none;\n  padding: 32px 0;\n  border-top: 1px solid #eaecf0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-width: 304px;\n  margin: 0 auto;\n\n  li {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    font-family: Inter;\n    font-size: 16px;\n    font-weight: 400;\n    color: #535353;\n  }\n"]))), t(947)),
                yi = t(41874),
                bi = t(69105),
                Ai = t(74395),
                _i = t.n(Ai),
                ji = t(88574),
                Ci = t(27948),
                wi = t(22088),
                ki = t(45219),
                Si = Xn.default.div(En || (En = (0, Gn.A)(["\n  input:focus {\n    border: 1px solid #41c78f !important;\n  }\n\n  span {\n    color: #2e3f75;\n    font-weight: bold;\n    font-size: 30px;\n  }\n  h3 {\n    color: #2e3f75;\n    font-size: 22px;\n    display: inline-block;\n  }\n  p {\n    width: 70%;\n    text-align: left;\n    color: #2e3f75;\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-bottom: 15px;\n  }\n  span.price {\n    font-size: 30px;\n    text-align: right;\n    display: inline-block;\n    float: right;\n    margin-top: -68px;\n  }\n  span.desc-payment {\n    font-weight: normal;\n    font-size: 12px;\n    width: 61%;\n    display: inline-block;\n    margin-top: 20px;\n  }\n  hr {\n    opacity: 0.1;\n    margin: 10px 0px 20px 0px;\n  }\n\n  label:not(.invalid-feedback) {\n    margin: 0;\n    padding: 0;\n    font-size: 13px;\n    opacity: 0.6;\n    color: #091d5c;\n    margin: 10px 0px;\n  }\n  input.form-control {\n    margin: 0;\n    padding: 9px;\n    outline: none;\n    box-shadow: none;\n    border: 1px solid #ccc;\n  }\n\n  .btn-primary {\n    background: #41c78f;\n    border: none;\n    display: inline-block;\n    border-radius: 50px;\n    padding: 12px 40px;\n    font-size: 16px;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-top: 13px;\n    float: right;\n  }\n  .btn-primary:hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n\n  @media only screen and (max-width: 899px) {\n    .row {\n      margin-top: 0px;\n    }\n    hr {\n      margin: 10px;\n    }\n    label {\n      margin: 5px 0px;\n    }\n    span {\n      font-size: 16px;\n    }\n    h3 {\n      font-size: 14px;\n    }\n    p {\n      font-size: 12px;\n      width: 100%;\n    }\n\n    span.price {\n      float: none;\n      margin: 0 auto;\n      text-align: center;\n      letter-spacing: -0.9;\n    }\n    input.form-control {\n      width: 100%;\n      margin-bottom: 10px;\n      padding: 4px;\n    }\n    span.desc-payment {\n      width: 100%;\n      margin-top: 0;\n      opacity: 0.6;\n      font-size: 10px;\n    }\n\n    .btn-primary {\n      padding: 10px 40px;\n      font-size: 14px;\n      width: 100%;\n      margin-top: 10px;\n    }\n  }\n"]))),
                Pi = Xn.default.img(Rn || (Rn = (0, Gn.A)(["\n  filter: brightness(0) saturate(100%) invert(58%) sepia(59%) saturate(452%)\n    hue-rotate(103deg) brightness(92%) contrast(83%);\n  cursor: pointer;\n  margin: 0 5px 5px 0;\n"]))),
                Ei = Xn.default.div(Mn || (Mn = (0, Gn.A)(["\n  position: relative;\n\n  img {\n    height: 23px;\n    position: absolute;\n    right: 9px;\n    top: 8px;\n  }\n"])));

            function Ri(n) {
                var e = function() {
                        n.formik.handleSubmit()
                    },
                    t = (0, ki.A)({
                        cardNumber: n.formik.values.card_number
                    }).svg,
                    i = (0, Nn.useRef)(),
                    a = (0, ai.q$)(i),
                    o = (0, Ln.A)(a, 2),
                    r = o[0],
                    l = o[1];
                return (0, ai.xM)(i), (0, Nn.useEffect)(function() {
                    n.formik.setFieldValue("recaptchaToken", l.v3Token)
                }, [l.v3Token]), (0, Kn.jsx)(Ci.Y, {
                    blocking: n.formik.isSubmitting,
                    children: null != n.formik.values.product_selected && (0, Kn.jsxs)(Si, {
                        children: [(0, Kn.jsx)(Pi, {
                            onClick: function() {
                                return n.back()
                            },
                            src: (0, zn.oK)("/media/svg/icons/Navigation/Arrow-left.svg")
                        }), (0, Kn.jsx)("span", {
                            children: "Checkout"
                        }), (0, Kn.jsx)("hr", {}), (0, Kn.jsx)("h3", {
                            children: n.formik.values.product_selected.name
                        }), (0, Kn.jsx)("p", {
                            children: n.formik.values.product_selected.description
                        }), (0, Kn.jsx)("span", {
                            className: "price",
                            children: n.isQuery ? "R$ ".concat((0, ji.A)(n.formik.values.totalPrice)) : "R$ ".concat((0, ji.A)(n.formik.values.product_selected.price))
                        }), (0, Kn.jsx)("hr", {}), (0, Kn.jsxs)("div", {
                            className: "row",
                            children: [(0, Kn.jsxs)("div", {
                                className: "col-12",
                                children: [(0, Kn.jsx)("label", {
                                    children: "Nome impresso no cart\xe3o"
                                }), (0, Kn.jsx)("input", {
                                    name: "cardholder_name",
                                    type: "text",
                                    className: "form-control " + (n.formik.errors.cardholder_name && n.formik.touched.cardholder_name ? "is-invalid" : ""),
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.cardholder_name
                                }), n.formik.errors.cardholder_name && n.formik.touched.cardholder_name && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.cardholder_name
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "N\xfamero do cart\xe3o"
                                }), (0, Kn.jsxs)(Ei, {
                                    children: [(0, Kn.jsx)(_i(), {
                                        name: "card_number",
                                        placeholder: "0000 0000 0000 0000",
                                        mask: "9999 9999 9999 9999",
                                        maskChar: null,
                                        className: "form-control " + (n.formik.errors.card_number && n.formik.touched.card_number ? "is-invalid" : ""),
                                        type: "tel",
                                        onChange: n.formik.handleChange,
                                        value: n.formik.values.card_number
                                    }), (0, Kn.jsx)("img", {
                                        alt: "bandeira do cart\xe3o de cr\xe9dito",
                                        src: t ? (0, zn.oK)(t) : wi.dH
                                    }), n.formik.errors.card_number && n.formik.touched.card_number && (0, Kn.jsx)("label", {
                                        className: "invalid-feedback",
                                        children: n.formik.errors.card_number
                                    })]
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-3 col-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "Vencimento"
                                }), (0, Kn.jsx)(_i(), {
                                    name: "card_expiration",
                                    placeholder: "MM / AA",
                                    mask: "99 / 99",
                                    maskChar: null,
                                    className: "form-control " + (n.formik.errors.card_expiration && n.formik.touched.card_expiration ? "is-invalid" : ""),
                                    type: "tel",
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.card_expiration
                                }), n.formik.errors.card_expiration && n.formik.touched.card_expiration && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.card_expiration
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-3 col-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "CVV"
                                }), (0, Kn.jsx)(_i(), {
                                    name: "card_cvv",
                                    placeholder: "000",
                                    mask: "9999",
                                    maskChar: null,
                                    className: "form-control " + (n.formik.errors.card_cvv && n.formik.touched.card_cvv ? "is-invalid" : ""),
                                    type: "tel",
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.card_cvv
                                }), n.formik.errors.card_cvv && n.formik.touched.card_cvv && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.card_cvv
                                })]
                            })]
                        }), (0, Kn.jsx)(ii.ReCaptchaProvider, {
                            siteKeyV3: "6Lc1YP8qAAAAAEPdzg4zAzJt7w4KVK3RZMFk5xhj",
                            children: (0, Kn.jsx)(ii.ReCaptchaV3, {
                                callback: r
                            })
                        }), (0, Kn.jsx)("span", {
                            className: "desc-payment",
                            children: "\xa0"
                        }), n.isQuery ? (0, Kn.jsx)(qn.A, {
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            onClick: e,
                            children: "Assinar Ultimate"
                        }) : (0, Kn.jsx)("button", {
                            style: {
                                width: n.isQuery ? "100%" : "fit-content"
                            },
                            className: "btn btn-primary",
                            type: "button",
                            onClick: e,
                            disabled: n.formik.isSubmitting,
                            children: "Assinar agora"
                        })]
                    })
                })
            }
            var Mi = t(60384),
                Oi = t.n(Mi),
                Ti = t(96584),
                Ni = (new Map([
                    ["annually", {
                        priceDisplay: "R$93,60",
                        price: 93.6,
                        totalPrice: 1123.2,
                        label: "Assinatura anual",
                        description: "Anual"
                    }],
                    ["monthly", {
                        priceDisplay: "R$117,00",
                        price: 117,
                        totalPrice: 117,
                        label: "Assinatura Mensal",
                        description: "Mensal"
                    }]
                ]), {
                    description: "Mensal",
                    id: "ultimate",
                    name: "Plano Ultimate",
                    periodicity: "monthly",
                    price: 97
                }),
                Di = "monthly",
                zi = "annually",
                qi = {
                    ultimate: {
                        monthly: {
                            priceDisplay: "R$117,00",
                            price: 117,
                            totalPrice: 117,
                            label: "Assinatura Mensal",
                            description: "Mensal",
                            title: "Assine o Plano Ultimate!",
                            gateway_id: "2.103.612",
                            name: "ULTIMATE"
                        },
                        annually: {
                            priceDisplay: "R$93,60",
                            price: 1123.2,
                            totalPrice: 1123.2,
                            label: "Assinatura anual",
                            description: "Anual",
                            title: "Assine agora!",
                            gateway_id: "4.405.859",
                            name: "ULTIMATE"
                        }
                    }
                },
                Li = {
                    50: {
                        ultimate: {
                            monthly: {
                                priceDisplay: "R$121,90",
                                price: 121.9,
                                totalPrice: 121.9,
                                label: "Assinatura mensal + JusProcessos at\xe9 50 processos",
                                description: "Mensal",
                                title: "Assine o Plano Ultimate!",
                                gateway_id: "5.766.992",
                                name: "ULTIMATE + JusProcessos at\xe9 50 processos"
                            },
                            annually: {
                                priceDisplay: "R$102,50",
                                price: 1230,
                                totalPrice: 1230,
                                label: "Assinatura anual + JusProcessos at\xe9 50 processos",
                                description: "Anual",
                                title: "Assine agora!",
                                gateway_id: "5.766.996",
                                name: "ULTIMATE + JusProcessos at\xe9 50 processos"
                            }
                        }
                    },
                    200: {
                        ultimate: {
                            monthly: {
                                priceDisplay: "R$196,90",
                                price: 196.9,
                                totalPrice: 196.9,
                                label: "Assinatura mensal + JusProcessos at\xe9 200 processos",
                                description: "Mensal",
                                title: "Assine o Plano Ultimate!",
                                gateway_id: "5.767.012",
                                name: "ULTIMATE + JusProcessos at\xe9 200 processos"
                            },
                            annually: {
                                priceDisplay: "R$177,50",
                                price: 2130,
                                totalPrice: 2130,
                                label: "Assinatura anual + JusProcessos at\xe9 200 processo",
                                description: "Anual",
                                title: "Assine agora!",
                                gateway_id: "5.767.015",
                                name: "ULTIMATE + JusProcessos at\xe9 200 processos"
                            }
                        }
                    },
                    500: {
                        ultimate: {
                            monthly: {
                                priceDisplay: "R$346,90",
                                price: 346.9,
                                totalPrice: 346.9,
                                label: "Assinatura mensal + JusProcessos at\xe9 500 processos",
                                description: "Mensal",
                                title: "Assine o Plano Ultimate!",
                                gateway_id: "5.767.046",
                                name: "ULTIMATE + JusProcessos at\xe9 500 processos"
                            },
                            annually: {
                                priceDisplay: "R$327,50",
                                price: 3930,
                                totalPrice: 3930,
                                label: "Assinatura anual + JusProcessos at\xe9 500 processos",
                                description: "Anual",
                                title: "Assine agora!",
                                gateway_id: "5.767.050",
                                name: "ULTIMATE + JusProcessos at\xe9 500 processos"
                            }
                        }
                    }
                };
            var Ii, Fi, Ui, Qi, Vi, Bi, $i, Ji, Ki, Wi, Hi, Yi, Gi, Xi, Zi, na, ea, ta, ia, aa, oa, ra, la, sa, ca, da, ua, pa, fa, ma, ha, xa, ga, va, ya, ba, Aa, _a, ja, Ca, wa, ka, Sa, Pa, Ea, Ra, Ma, Oa, Ta, Na = t(51143),
                Da = function() {
                    var n, e, t, i, a, o, r, l, s = (0, Nn.useState)("choose_plan"),
                        c = (0, Ln.A)(s, 2),
                        d = c[0],
                        u = c[1],
                        p = (0, On.d4)(function(n) {
                            return n.subscription
                        }),
                        f = ((null === p || void 0 === p ? void 0 : p.subscription_status.info) || {}).provider,
                        m = (0, Nn.useState)(!1),
                        h = (0, Ln.A)(m, 2)[1],
                        x = (0, Nn.useContext)(Wn),
                        g = x.closeModal,
                        v = x.setShouldReload,
                        y = function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                                t = (0, xe.A)(ge.$.KILL_SWITCH.USE_PLAN_ID_FROM_CLIENT).isFeatureFlagEnable,
                                i = (0, Nn.useState)(Di),
                                a = (0, Ln.A)(i, 2),
                                o = a[0],
                                r = a[1],
                                l = (0, Nn.useState)({
                                    ultimate: qi.ultimate.monthly
                                }),
                                s = (0, Ln.A)(l, 2),
                                c = s[0],
                                d = s[1];
                            (0, Nn.useEffect)(function() {
                                if (!t) {
                                    var i = qi;
                                    n && (i = Li[e]);
                                    var a = o === zi ? "annually" : "monthly";
                                    d({
                                        ultimate: i.ultimate[a]
                                    })
                                }
                            }, [o, n, e, t]);
                            var u = o === zi ? "annually" : "monthly",
                                p = (0, Ti.wQ)({
                                    plan_type: "ultimate",
                                    billingCycle: u,
                                    hasJusProcessos: n,
                                    jusprocessos_count: e,
                                    is_offer: !1
                                }),
                                f = t ? function() {
                                    var n = o === zi ? "annually" : "monthly";
                                    return {
                                        ultimate: (0, Ti.pB)(p) || qi.ultimate[n]
                                    }
                                }() : c;
                            return {
                                billingCycle: t ? o === zi ? "annually" : "monthly" : o,
                                toggleBillingCycle: function() {
                                    r(function(n) {
                                        return n === Di ? zi : Di
                                    })
                                },
                                planPrices: f
                            }
                        }(null === p || void 0 === p || null === (n = p.subscription_status) || void 0 === n ? void 0 : n.has_jusprocessos, null === p || void 0 === p || null === (e = p.subscription_status) || void 0 === e ? void 0 : e.jus_processos_qtd),
                        b = y.billingCycle,
                        A = y.toggleBillingCycle,
                        _ = y.planPrices,
                        j = null === p || void 0 === p ? void 0 : p.subscription_status,
                        C = (0, On.wA)(),
                        w = window.location.pathname.split("/")[1],
                        k = _.ultimate,
                        S = k.price,
                        P = k.priceDisplay,
                        E = k.label,
                        R = k.description,
                        M = k.totalPrice,
                        O = k.title,
                        T = k.gateway_id,
                        N = k.name,
                        D = (0, bi.Wx)({
                            initialValues: {
                                product_selected: Ni,
                                cardholder_name: "",
                                card_number: "",
                                card_payment_method: null,
                                card_cvv: "",
                                card_expiration: "",
                                recaptchaToken: ""
                            },
                            onSubmit: function(n, e) {
                                var t = e.setSubmitting,
                                    i = {};
                                i.card_holder_name = n.cardholder_name, i.card_expiration_date = n.card_expiration.substr(0, 2) + "/" + n.card_expiration.substr(n.card_expiration.length - 2), i.card_number = n.card_number, i.card_cvv = n.card_cvv;
                                var a = Oi().validate({
                                    card: i
                                });
                                if (!a.card.card_holder_name) return t(!1), ti.oR.error("Verifique o nome impresso no cart\xe3o."), !1;
                                if (!a.card.card_number) return t(!1), ti.oR.error("Verifique o n\xfamero do cart\xe3o."), !1;
                                if (!a.card.card_expiration_date) return t(!1), ti.oR.error("Verifique a data de expira\xe7\xe3o do cart\xe3o."), !1;
                                if (!a.card.card_cvv) return t(!1), ti.oR.error("Verifique o c\xf3digo de seguran\xe7a (CVV) do cart\xe3o."), !1;
                                var o = function(e) {
                                    C({
                                        type: "CREATE_SUBSCRIPTION",
                                        payload: {
                                            values: (0, Re.A)((0, Re.A)({}, n), {}, {
                                                card_hash: e
                                            }),
                                            callback: function(e) {
                                                var t, i, a, o, r, l, s, c, d, f, m, h = null === p || void 0 === p || null === (t = p.subscription_status) || void 0 === t ? void 0 : t.plan_details,
                                                    x = n.product_selected,
                                                    y = {
                                                        id: null === p || void 0 === p || null === (i = p.subscription_status) || void 0 === i || null === (a = i.info) || void 0 === a ? void 0 : a.client_id,
                                                        email: null === p || void 0 === p || null === (o = p.subscription_status) || void 0 === o || null === (r = o.info) || void 0 === r ? void 0 : r.email,
                                                        name: null === p || void 0 === p || null === (l = p.subscription_status) || void 0 === l || null === (s = l.info) || void 0 === s ? void 0 : s.name,
                                                        client_id: null === p || void 0 === p || null === (c = p.subscription_status) || void 0 === c || null === (d = c.info) || void 0 === d ? void 0 : d.client_id
                                                    };
                                                h && x && oi.E.upgrade.trackUpgradePaymentSuccess(y, j, x, {
                                                    status: "success"
                                                }, {
                                                    type: "card",
                                                    card_number: null === n || void 0 === n ? void 0 : n.card_number
                                                }, w), window.analytics.track("Plan Upgraded", {
                                                    context: "lawsuits_query",
                                                    current_plan: null === h || void 0 === h ? void 0 : h.name,
                                                    current_plan_id: null === h || void 0 === h ? void 0 : h.gateway_id,
                                                    new_plan_name: N,
                                                    new_plan_price: null === (f = n.product_selected) || void 0 === f ? void 0 : f.price,
                                                    current_plan_price: null === h || void 0 === h ? void 0 : h.amount,
                                                    new_plan_id: null === (m = n.product_selected) || void 0 === m ? void 0 : m.gateway_id
                                                }), C({
                                                    type: "LOAD_SUBSCRIPTION_STATUS",
                                                    payload: {
                                                        callback: function(n) {
                                                            C(vi.o1.updateUserProvider(n))
                                                        }
                                                    }
                                                }), v(!0), u("success"), g()
                                            },
                                            setSubmitting: t
                                        }
                                    })
                                };
                                "pagarme_v5" === f ? fetch("https://api.pagar.me/core/v5/tokens?appId=".concat("pk_yvrBvXfyGsLblq1d"), {
                                    method: "POST",
                                    headers: {
                                        accept: "application/json",
                                        "content-type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        type: "card",
                                        card: {
                                            number: i.card_number.replace(/\s/g, ""),
                                            holder_name: i.card_holder_name,
                                            exp_month: parseInt(i.card_expiration_date.substr(0, 2), 10),
                                            exp_year: parseInt(i.card_expiration_date.substr(3, 2), 10),
                                            cvv: i.card_cvv
                                        }
                                    })
                                }).then(function(n) {
                                    if (!n.ok) throw new Error("Erro ao processar o cart\xe3o: ".concat(n.status));
                                    return n.json()
                                }).then(function(e) {
                                    var t, a, r, l, s, c, d, u, f, m = null === p || void 0 === p || null === (t = p.subscription_status) || void 0 === t ? void 0 : t.plan_details,
                                        h = n.product_selected,
                                        x = {
                                            id: null === p || void 0 === p || null === (a = p.subscription_status) || void 0 === a || null === (r = a.info) || void 0 === r ? void 0 : r.client_id,
                                            email: null === p || void 0 === p || null === (l = p.subscription_status) || void 0 === l || null === (s = l.info) || void 0 === s ? void 0 : s.email,
                                            name: null === p || void 0 === p || null === (c = p.subscription_status) || void 0 === c || null === (d = c.info) || void 0 === d ? void 0 : d.name,
                                            client_id: null === p || void 0 === p || null === (u = p.subscription_status) || void 0 === u || null === (f = u.info) || void 0 === f ? void 0 : f.client_id
                                        };
                                    m && h && oi.E.upgrade.trackCardTokenizationSuccess(x, j, h, e, {
                                        card_number: i.card_number,
                                        card_holder_name: i.card_holder_name,
                                        card_expiration_date: i.card_expiration_date,
                                        card_cvv: i.card_cvv
                                    }, w), o(e.id)
                                }).catch(function(e) {
                                    var a, o, r, l, s, c, d, u, f;
                                    t(!1);
                                    var m = null === p || void 0 === p || null === (a = p.subscription_status) || void 0 === a ? void 0 : a.plan_details,
                                        h = n.product_selected,
                                        x = {
                                            id: null === p || void 0 === p || null === (o = p.subscription_status) || void 0 === o || null === (r = o.info) || void 0 === r ? void 0 : r.client_id,
                                            email: null === p || void 0 === p || null === (l = p.subscription_status) || void 0 === l || null === (s = l.info) || void 0 === s ? void 0 : s.email,
                                            name: null === p || void 0 === p || null === (c = p.subscription_status) || void 0 === c || null === (d = c.info) || void 0 === d ? void 0 : d.name,
                                            client_id: null === p || void 0 === p || null === (u = p.subscription_status) || void 0 === u || null === (f = u.info) || void 0 === f ? void 0 : f.client_id
                                        };
                                    m && h && oi.E.upgrade.trackCardTokenizationError(x, j, h, {
                                        message: e.message || "Erro ao processar o cart\xe3o",
                                        code: "TOKENIZATION_ERROR",
                                        type: "tokenization_error"
                                    }, {
                                        card_number: i.card_number,
                                        card_holder_name: i.card_holder_name,
                                        card_expiration_date: i.card_expiration_date,
                                        card_cvv: i.card_cvv
                                    }, w), ti.oR.error("Erro ao processar o cart\xe3o, tente novamente."), console.error("Erro ao processar o cart\xe3o:", e)
                                }) : Oi().client.connect({
                                    encryption_key: "ek_live_1k97whurxvoxNIX2laU2BHdzhWFcAK"
                                }).then(function(n) {
                                    return n.security.encrypt(i)
                                }).then(function(e) {
                                    var t, a, r, l, s, c, d, u, f, m = null === p || void 0 === p || null === (t = p.subscription_status) || void 0 === t ? void 0 : t.plan_details,
                                        h = n.product_selected,
                                        x = {
                                            id: null === p || void 0 === p || null === (a = p.subscription_status) || void 0 === a || null === (r = a.info) || void 0 === r ? void 0 : r.client_id,
                                            email: null === p || void 0 === p || null === (l = p.subscription_status) || void 0 === l || null === (s = l.info) || void 0 === s ? void 0 : s.email,
                                            name: null === p || void 0 === p || null === (c = p.subscription_status) || void 0 === c || null === (d = c.info) || void 0 === d ? void 0 : d.name,
                                            client_id: null === p || void 0 === p || null === (u = p.subscription_status) || void 0 === u || null === (f = u.info) || void 0 === f ? void 0 : f.client_id
                                        };
                                    m && h && oi.E.upgrade.trackCardTokenizationSuccess(x, j, h, {
                                        id: e
                                    }, {
                                        card_number: i.card_number,
                                        card_holder_name: i.card_holder_name,
                                        card_expiration_date: i.card_expiration_date,
                                        card_cvv: i.card_cvv
                                    }, w), o(e)
                                }).catch(function(e) {
                                    var a, o, r, l, s, c, d, u, f;
                                    t(!1);
                                    var m = null === p || void 0 === p || null === (a = p.subscription_status) || void 0 === a ? void 0 : a.plan_details,
                                        h = n.product_selected,
                                        x = {
                                            id: null === p || void 0 === p || null === (o = p.subscription_status) || void 0 === o || null === (r = o.info) || void 0 === r ? void 0 : r.client_id,
                                            email: null === p || void 0 === p || null === (l = p.subscription_status) || void 0 === l || null === (s = l.info) || void 0 === s ? void 0 : s.email,
                                            name: null === p || void 0 === p || null === (c = p.subscription_status) || void 0 === c || null === (d = c.info) || void 0 === d ? void 0 : d.name,
                                            client_id: null === p || void 0 === p || null === (u = p.subscription_status) || void 0 === u || null === (f = u.info) || void 0 === f ? void 0 : f.client_id
                                        };
                                    m && h && oi.E.upgrade.trackCardTokenizationError(x, j, h, {
                                        message: "Erro ao processar o cart\xe3o",
                                        code: "TOKENIZATION_ERROR",
                                        type: "tokenization_error"
                                    }, {
                                        card_number: i.card_number,
                                        card_holder_name: i.card_holder_name,
                                        card_expiration_date: i.card_expiration_date,
                                        card_cvv: i.card_cvv
                                    }, w), ti.oR.error("Erro ao processar o cart\xe3o, tente novamente."), console.error("Erro ao processar o cart\xe3o:", e)
                                })
                            },
                            validationSchema: yi.Ik().shape({
                                cardholder_name: yi.Yj().required("O nome do titular do cart\xe3o \xe9 obrigat\xf3rio."),
                                card_number: yi.Yj().required("O n\xfamero do cart\xe3o \xe9 obrigat\xf3rio."),
                                card_expiration: yi.Yj().required("O m\xeas/ano de expira\xe7\xe3o do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidExpiration", "O vencimento \xe9 inv\xe1lido.", function(n) {
                                    var e = n.replace(/\s/g, "");
                                    if (!e || !/^(0[1-9]|1[012])[/]\d{2}$/.test(e)) return !1;
                                    var t = new Date,
                                        i = String(t.getMonth() + 1).padStart(2, "0"),
                                        a = String(t.getFullYear()).substr(-2),
                                        o = e.split("/"),
                                        r = (0, Ln.A)(o, 2),
                                        l = r[0],
                                        s = r[1];
                                    return !(s < a || s === a && l < i)
                                }),
                                card_cvv: yi.Yj().required("O c\xf3digo de seguran\xe7a (CVV) do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidCVV", "N\xfamero do CVV inv\xe1lido.", function(n) {
                                    return n && /^[0-9]{3,4}$/.test(n)
                                })
                            })
                        });
                    return (0, Nn.useEffect)(function() {
                        D.setFieldValue("product_selected", (0, Re.A)((0, Re.A)({}, D.values.product_selected), {}, {
                            price: S,
                            description: R,
                            periodicity: b,
                            gateway_id: T,
                            name: N
                        })), D.setFieldValue("totalPrice", M)
                    }, [b, S, P, E, R, M, T, D, N]), (0, Kn.jsxs)(Kn.Fragment, {
                        children: ["choose_plan" === d && (0, Kn.jsxs)(li, {
                            type: d,
                            children: [(0, Kn.jsx)(ci, {
                                onClick: g,
                                children: (0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/flat/close.svg")
                                })
                            }), (0, Kn.jsx)(Kn.Fragment, {
                                children: (0, Kn.jsxs)(di, {
                                    children: [(0, Kn.jsxs)(si, {
                                        children: [(0, Kn.jsx)("p", {
                                            children: "Encontre processos com facilidade"
                                        }), (0, Kn.jsx)("h1", {
                                            children: O
                                        })]
                                    }), (0, Kn.jsx)(ui, {
                                        children: (0, Kn.jsx)("span", {
                                            children: "Maximize sua efici\xeancia: Plano Ultimate com acesso total ao Buscador Processual em todo o Brasil! Aproveite j\xe1 \ud83d\udd25"
                                        })
                                    }), (0, Kn.jsx)(pi, {
                                        children: (0, Kn.jsxs)(fi, {
                                            children: [(0, Kn.jsxs)(mi, {
                                                children: [(0, Kn.jsx)(hi, {
                                                    selected: "monthly" === b,
                                                    onClick: A,
                                                    children: "Mensal"
                                                }), (0, Kn.jsx)(hi, {
                                                    selected: "annually" === b,
                                                    onClick: A,
                                                    isGrow: !0,
                                                    children: "Anual 20% de desconto"
                                                })]
                                            }), (0, Kn.jsxs)("div", {
                                                children: [(0, Kn.jsx)(xi, {
                                                    isAnnually: "annually" === b,
                                                    children: P
                                                }), (0, Kn.jsx)(gi, {
                                                    children: E
                                                })]
                                            }), (0, Kn.jsx)(qn.A, {
                                                width: "100%",
                                                padding: "10px",
                                                borderRadius: "5px",
                                                onClick: function() {
                                                    "pagarme_v5" === f ? (h(!0), u("checkoutV5")) : u("checkout")
                                                },
                                                children: "Assine agora!"
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), "checkout" === d && (0, Kn.jsxs)(li, {
                            type: d,
                            children: [(0, Kn.jsx)(ci, {
                                onClick: g,
                                children: (0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/flat/close.svg")
                                })
                            }), (0, Kn.jsx)(Ri, {
                                screen: d,
                                setScreen: u,
                                formik: D,
                                back: function() {
                                    return u("choose_plan")
                                },
                                isQuery: !0
                            })]
                        }), "checkoutV5" === d && (0, Kn.jsx)(Na.A, {
                            isOpen: !0,
                            close: function() {
                                u("choose_plan"), h(!1), g(), "checkoutV5" !== d && "checkout" !== d && v(!0)
                            },
                            disableClose: !0,
                            back: function() {
                                u("choose_plan"), h(!1)
                            },
                            productSelected: {
                                id: null === (t = D.values.product_selected) || void 0 === t ? void 0 : t.id,
                                name: null === (i = D.values.product_selected) || void 0 === i ? void 0 : i.name,
                                description: null === (a = D.values.product_selected) || void 0 === a ? void 0 : a.description,
                                periodicity: null === (o = D.values.product_selected) || void 0 === o ? void 0 : o.periodicity,
                                price: null === (r = D.values.product_selected) || void 0 === r ? void 0 : r.price,
                                totalPrice: D.values.totalPrice,
                                gateway_id: null === (l = D.values.product_selected) || void 0 === l ? void 0 : l.gateway_id
                            },
                            isQuery: !0
                        })]
                    })
                },
                za = Xn.default.div(Ii || (Ii = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 32px;\n  width: 430px;\n\n  h1 {\n    color: #111219;\n    font-size: 22px;\n    font-family: "Noto Sans";\n    font-weight: 600;\n    margin: 0;\n  }\n\n  p {\n    margin: 0;\n    color: #535353;\n    font-size: 15px;\n    font-family: "Noto Sans";\n    font-weight: 400;\n    margin-bottom: 4px;\n  }\n\n  @media screen and (max-width: 545px) {\n    width: 100%;\n  }\n']))),
                qa = Xn.default.div(Fi || (Fi = (0, Gn.A)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),
                La = (Xn.default.span(Ui || (Ui = (0, Gn.A)(['\n  color: #111219;\n  font-size: 14px;\n  font-family: "Noto Sans";\n  font-weight: 600;\n']))), Xn.default.button(Qi || (Qi = (0, Gn.A)(["\n  background: ", ";\n  border: ", ";\n  padding: ", ";\n  width: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  height: 40px;\n"])), function(n) {
                    return n.backgroundColor || "#FDFDFF"
                }, function(n) {
                    return n.border || "1px solid #CECED2"
                }, function(n) {
                    return n.padding || "10px 40px"
                }, function(n) {
                    return n.width || "fit-content"
                }, function(n) {
                    return n.color || "#131313"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }, function(n) {
                    return n.fontWeight || "600"
                }, function(n) {
                    return n.padding || "10px 40px"
                }, function(n) {
                    return n.borderRadius || "5px"
                })),
                Ia = Xn.default.div(Vi || (Vi = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n"]))),
                Fa = new Map([
                    ["QUERY_FORM_MODAL", At],
                    ["SUCCESS_QUERY_MODAL", St],
                    ["LOADING_QUERY_MODAL", Ot],
                    ["ERROR_QUERY_MODAL", qt],
                    ["BUY_CREDITS_MODAL", ri],
                    ["CHOOSE_PLAN_MODAL", Da],
                    ["AVAILABLE_SOON_MODAL", function() {
                        var n = (0, Nn.useContext)(Wn),
                            e = n.setPage,
                            t = n.closeModal,
                            i = n.modal,
                            a = (0, pt.W6)(),
                            o = (0, ut.A)("context_queries").setToken,
                            r = function() {
                                o("")
                            };
                        return (0, Kn.jsxs)(za, {
                            children: [(0, Kn.jsxs)(qa, {
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/flat/clock.svg")
                                }), (0, Kn.jsx)("h1", {
                                    children: "Consulta em processamento"
                                })]
                            }), (0, Kn.jsx)("p", {
                                children: "Estamos processando a sua consulta, em breve ela estar\xe1 dispon\xedvel."
                            }), (0, Kn.jsxs)(Ia, {
                                children: [(0, Kn.jsx)(La, {
                                    padding: "0 32px",
                                    onClick: t,
                                    children: "Voltar"
                                }), (0, Kn.jsx)(La, {
                                    backgroundColor: "#01AB7D",
                                    color: "#fff",
                                    border: "none",
                                    onClick: function() {
                                        var n;
                                        if ("BatchQueriesPage" === (null === i || void 0 === i || null === (n = i.config) || void 0 === n ? void 0 : n.context)) return a.push("/jusfinder/history_batch"), r(), void t();
                                        e("history"), r(), t()
                                    },
                                    children: "Acompanhar"
                                })]
                            })]
                        })
                    }]
                ]),
                Ua = {
                    relationship_tree: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de relacionamentos",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "3 consultas de relacionamentos",
                        additionalDescription: "+ 47 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "5 consultas de relacionamentos",
                        additionalDescription: "+ 125 outras consultas mensais"
                    }],
                    credit_restriction: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de restri\xe7\xe3o de cr\xe9dito",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "3 consultas de restri\xe7\xe3o de cr\xe9dito",
                        additionalDescription: "+ 47 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "5 consultas de restri\xe7\xe3o de cr\xe9dito",
                        additionalDescription: "+ 125 outras consultas mensais"
                    }],
                    cpf_registration_status: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de situa\xe7\xe3o cadastral",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "5 consultas de situa\xe7\xe3o cadastral",
                        additionalDescription: "+ 45 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "10 consultas de situa\xe7\xe3o cadastral",
                        additionalDescription: "+ 120 outras consultas mensais"
                    }],
                    list_vehicles: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "Nenhuma consulta de ve\xedculos",
                        additionalDescription: "+ 7 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "2 consultas de ve\xedculos",
                        additionalDescription: "+ 48 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "5 consultas de ve\xedculos",
                        additionalDescription: "+ 125 outras consultas mensais"
                    }],
                    lawsuit: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "Nenhum buscador processual",
                        additionalDescription: "+ 7 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "Nenhum buscador processual",
                        additionalDescription: "+ 50 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "30 buscadores processuais",
                        additionalDescription: "+ 100 outras consultas mensais"
                    }],
                    professional_data: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de dados profissionais",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "5 consulta de dados profissionais",
                        additionalDescription: "+ 45 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "10 consulta de dados profissionais",
                        additionalDescription: "+ 120 outras consultas mensais"
                    }],
                    company_information: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "Nenhuma consulta de empresa",
                        additionalDescription: "+ 7 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "2 consultas de empresa completo",
                        additionalDescription: "+ 48 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "5 consultas de empresa completo",
                        additionalDescription: "+ 125 outras consultas mensais"
                    }],
                    company_partnership: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "Nenhuma consulta de sociedades",
                        additionalDescription: "+ 7 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "5 consulta de sociedades",
                        additionalDescription: "+ 45 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "10 consulta de sociedades",
                        additionalDescription: "+ 120 outras consultas mensais"
                    }],
                    vehicle_data: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "Nenhuma consulta de dados do ve\xedculo",
                        additionalDescription: "+ 7 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "5 consulta de dados do ve\xedculo",
                        additionalDescription: "+ 45 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "10 consulta de dados do ve\xedculo",
                        additionalDescription: "+ 120 outras consultas mensais"
                    }],
                    trademarks: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de marcas e patentes",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "5 consulta de marcas e patentes",
                        additionalDescription: "+ 45 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "10 consulta de marcas e patentes",
                        additionalDescription: "+ 120 outras consultas mensais"
                    }],
                    economic_group: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de grupo econ\xf4mico",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "5 consultas de grupo econ\xf4mico",
                        additionalDescription: "+ 45 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "10 consultas de grupo econ\xf4mico",
                        additionalDescription: "+ 120 outras consultas mensais"
                    }],
                    personal_data: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "1 consulta de localiza\xe7\xe3o",
                        additionalDescription: "+ 6 outras consultas mensais"
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "10 consultas de localiza\xe7\xe3o",
                        additionalDescription: "+ 40 outras consultas mensais"
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "20 consultas de localiza\xe7\xe3o",
                        additionalDescription: "+ 110 outras consultas mensais"
                    }],
                    vehicle_tracking: [{
                        name: "Plano Starter",
                        price: "R$ 77,00",
                        mainDescription: "",
                        additionalDescription: ""
                    }, {
                        name: "Plano Master",
                        price: "R$ 97,00",
                        mainDescription: "",
                        additionalDescription: ""
                    }, {
                        name: "Plano Ultimate",
                        price: "R$ 117,00",
                        mainDescription: "",
                        additionalDescription: ""
                    }]
                },
                Qa = function() {
                    var n = (0, Nn.useContext)(Wn).modal,
                        e = Fa.get(n.type) || null;
                    return e ? (0, Kn.jsx)(se.A, {
                        open: n.open,
                        children: (0, Kn.jsx)(e, (0, Re.A)({}, n.config))
                    }) : null
                },
                Va = t(91212),
                Ba = t(10467),
                $a = [{
                    value: "CPF",
                    title: "CPF"
                }, {
                    value: "CNPJ",
                    title: "CNPJ"
                }, {
                    value: "PLATE",
                    title: "Placa"
                }],
                Ja = [{
                    name: "Localiza\xe7\xe3o",
                    value: "personal_data",
                    type: ["CPF"]
                }, {
                    name: "Dados do ve\xedculo",
                    value: "vehicle_data",
                    type: ["PLATE"]
                }, {
                    name: "Sociedades",
                    value: "company_partnership",
                    type: ["CPF"]
                }, {
                    name: "Empresa completo",
                    value: "company_information",
                    type: ["CNPJ"]
                }, {
                    name: "Dados profissionais",
                    value: "professional_data",
                    type: ["CPF"]
                }, {
                    name: "Situa\xe7\xe3o cadastral de CPF",
                    value: "cpf_registration_status",
                    type: ["CPF"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com o mesmo representante legal",
                    value: "legal_representative",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com o mesmo quadro societ\xe1rio",
                    value: "owners",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com mesmo contato na Receita Federal",
                    value: "rfcontact",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas de qualquer atividade no endere\xe7o",
                    value: "household",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com atividade semelhante no endere\xe7o",
                    value: "household_activity",
                    type: ["CNPJ"]
                }, {
                    name: "Relacionamentos",
                    value: "relationship_tree",
                    type: ["CPF", "CNPJ"]
                }, {
                    name: "Marcas e patentes",
                    value: "trademarks",
                    type: ["CPF", "CNPJ"]
                }, {
                    name: "Restri\xe7\xe3o de cr\xe9dito",
                    value: "credit_restriction",
                    type: ["CPF", "CNPJ"]
                }, {
                    name: "Ve\xedculos",
                    value: "list_vehicles",
                    type: ["CPF", "CNPJ"]
                }],
                Ka = Xn.default.div(Bi || (Bi = (0, Gn.A)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),
                Wa = Xn.default.div($i || ($i = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),
                Ha = Xn.default.label(Ji || (Ji = (0, Gn.A)(["\n  color: #131313;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  margin: 0;\n\n  span {\n    color: #d83143;\n  }\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                Ya = Xn.default.div(Ki || (Ki = (0, Gn.A)(["\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n"]))),
                Ga = Xn.default.button(Wi || (Wi = (0, Gn.A)(["\n  display: flex;\n  height: 40px;\n  padding: 10px 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  background: #01ab7d;\n  color: #fff;\n  text-align: center;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 140%;\n  border: none;\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                Xa = Xn.default.div(Hi || (Hi = (0, Gn.A)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 64px;\n"]))),
                Za = Xn.default.div(Yi || (Yi = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: ", ' !important;\n  }\n\n  label {\n    .MuiTypography-body1 {\n      font-family: "Noto Sans" !important;\n      font-size: 14px !important;\n      color: #383839 !important;\n      font-weight: 400 !important;\n      margin-bottom: 4px !important;\n    }\n  }\n'])), function(n) {
                    var e = n.error,
                        t = n.checked;
                    return e ? "#D83143" : t ? "#01AB7D" : "#A0A0A0"
                }),
                no = Xn.default.div(Gi || (Gi = (0, Gn.A)(["\n  width: 100%;\n  margin-top: 4px;\n  display: flex;\n\n  gap: 16px;\n\n  @media (max-width: 578px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),
                eo = Xn.default.div(Xi || (Xi = (0, Gn.A)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media (max-width: 578px) {\n    grid-template-columns: 1fr;\n  }\n"]))),
                to = Xn.default.div(Zi || (Zi = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 5px;\n  background: ", ";\n\n  span {\n    color: #5e5e60;\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n"])), function(n) {
                    return n.theme.colors.white.senary
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }),
                io = Xn.default.button(na || (na = (0, Gn.A)(["\n  color: ", ";\n  text-align: center;\n  background: transparent;\n  border: none;\n  position: relative;\n  font-family: ", ";\n  font-size: ", ';\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  padding: 0;\n\n  &::before {\n    content: ">";\n    position: absolute;\n    top: 5%;\n    left: 80px;\n    right: 0;\n\n    height: 0;\n    background-color: ', ";\n  }\n"])), function(n) {
                    return n.theme.colors.green.quinary
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }, function(n) {
                    return n.theme.colors.green.quinary
                }),
                ao = Xn.default.div(ea || (ea = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n"]))),
                oo = (0, Xn.default)(Dn.A)(ta || (ta = (0, Gn.A)([""]))),
                ro = Xn.default.div(ia || (ia = (0, Gn.A)(["\n  width: 100%;\n  height: 152px;\n"]))),
                lo = Xn.default.div(aa || (aa = (0, Gn.A)(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  padding: 24px;\n  gap: ", ";\n  border-radius: 7px;\n  border: 1px solid #ebedf3;\n  background: #ffffff;\n"])), function(n) {
                    var e = n.sWidth;
                    return e || "100%"
                }, function(n) {
                    var e = n.sHeight;
                    return null !== e && void 0 !== e ? e : "fit-content"
                }, function(n) {
                    var e = n.gap;
                    return null !== e && void 0 !== e ? e : "16px"
                }),
                so = function(n) {
                    var e = n.children,
                        t = n.sWidth,
                        i = n.sHeight,
                        a = n.gap;
                    return (0, Kn.jsx)(lo, {
                        sWidth: t,
                        sHeight: i,
                        gap: a,
                        children: e
                    })
                },
                co = Xn.default.div(oa || (oa = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px !important;\n\n  .MuiButtonBase-root {\n    padding: 9px 4px 9px 9px !important;\n  }\n\n  .MuiIconButton-root.Mui-disabled {\n    color: #808080 !important;\n\n    .MuiSvgIcon-root,\n    .MuiRadio-root,\n    .Mui-disabled {\n      color: #808080 !important;\n    }\n  }\n\n  .MuiFormControlLabel-root {\n    margin: 0 2px 0 -11px !important;\n  }\n\n  .flex {\n    label {\n      margin-bottom: 0 !important;\n      height: 30px;\n    }\n\n    label {\n      color: #3f4254;\n      font: normal 400 14px ", ";\n      line-height: 19.6px;\n    }\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                uo = Xn.default.div(ra || (ra = (0, Gn.A)(["\n  display: flex;\n  flex-direction: ", ";\n  gap: ", ";\n\n  label {\n    color: #3f4254;\n    font: normal 400 14px ", ";\n    line-height: 18px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n"])), function(n) {
                    return "VERTICAL" === n.orientation ? "column" : "row"
                }, function(n) {
                    return "VERTICAL" === n.orientation ? "2px" : "20px"
                }, function(n) {
                    return n.theme.typography.secondary
                }),
                po = (Xn.default.span(la || (la = (0, Gn.A)(["\n  color: #f0431b;\n  font-family: Switzer;\n  font: normal 400 12px ", ";\n  line-height: 21px;\n  letter-spacing: -0.56px;\n"])), function(n) {
                    return n.theme.typography.primary
                }), Xn.default.div(sa || (sa = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: ", " !important;\n  }\n"])), function(n) {
                    return n.value ? "#01AB7D" : "#CECED2"
                })),
                fo = [{
                    value: "first",
                    title: "Primeira op\xe7\xe3o"
                }, {
                    value: "second",
                    title: "Segunda op\xe7\xe3o"
                }],
                mo = "VERTICAL",
                ho = "HORIZONTAL",
                xo = function(n) {
                    var e = n.onChange,
                        t = void 0 === e ? function(n) {
                            return n.target.value
                        } : e,
                        i = n.actived,
                        a = void 0 === i ? "first" : i,
                        o = n.orientation,
                        r = void 0 === o ? mo : o,
                        l = n.options,
                        s = void 0 === l ? fo : l,
                        c = n.error,
                        d = void 0 !== c && c,
                        u = n.disabled,
                        p = void 0 !== u && u;
                    return (0, Kn.jsx)(co, {
                        error: d,
                        disabled: p,
                        children: (0, Kn.jsx)(Me.A, {
                            className: "flex",
                            value: a,
                            onChange: t,
                            children: (0, Kn.jsx)(uo, {
                                orientation: r,
                                children: s.map(function(n, e) {
                                    var i = n.value,
                                        o = n.title;
                                    return (0, Kn.jsx)(po, {
                                        value: i === a,
                                        children: (0, Kn.jsx)(Oe.A, {
                                            value: i,
                                            control: (0, Kn.jsx)(Te.A, {}),
                                            label: (0, Kn.jsx)("label", {
                                                className: "title",
                                                onClick: p ? void 0 : function() {
                                                    return t({
                                                        target: {
                                                            value: i
                                                        }
                                                    })
                                                },
                                                children: o
                                            }),
                                            disabled: p
                                        }, e)
                                    }, e)
                                })
                            })
                        })
                    })
                },
                go = Xn.default.div(ca || (ca = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  border: 2px dashed ", ";\n  padding: ", ";\n  margin-bottom: 5px;\n  align-items: center;\n  border-radius: 10px;\n  background: ", ";\n\n  input {\n    display: none;\n  }\n\n  @media (max-width: 578px) {\n    width: 100%;\n    padding: 24px;\n  }\n"])), function(n) {
                    var e = n.hasFiles,
                        t = n.theme;
                    return n.hasError ? t.colors.red.quaternary : e ? t.colors.gray.undenary : t.colors.green.primary
                }, function(n) {
                    return n.hasFiles ? "24px 40px" : "40px"
                }, function(n) {
                    var e = n.hasFiles;
                    n.theme;
                    return e ? "rgba(160, 162, 169, 0.1)" : "rgba(65, 199, 143, 0.10)"
                }),
                vo = Xn.default.h3(da || (da = (0, Gn.A)(["\n  margin-top: 8px;\n  font-size: 16px;\n  font-weight: 500px;\n  line-height: 21.7px;\n  text-align: center;\n\n  color: ", ";\n  font-family: ", ";\n  @media (max-width: 578px) {\n    font-size: 14px;\n  }\n"])), function(n) {
                    return n.theme.colors.black.primary
                }, function(n) {
                    return n.theme.typography.secondary
                }),
                yo = Xn.default.span(ua || (ua = (0, Gn.A)(["\n  text-align: center;\n  display: block;\n  margin-top: -2px;\n  color: #4e4f5a;\n  font-family: ", ";\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                bo = Xn.default.p(pa || (pa = (0, Gn.A)(["\n  color: ", ";\n  font: normal 400 12px ", ";\n  margin: 0;\n\n  a {\n    color: ", ";\n    text-decoration: underline;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function(n) {
                    return n.theme.colors.red.quaternary
                }, function(n) {
                    return n.theme.typography.primary
                }, function(n) {
                    return n.theme.colors.red.quaternary
                }),
                Ao = t(84702),
                _o = t(1711),
                jo = function(n) {
                    var e = n.multiple,
                        t = void 0 !== e && e,
                        i = n.accept,
                        a = void 0 === i ? [".pdf"] : i,
                        o = n.sizeLimitMB,
                        r = void 0 === o ? 0 : o,
                        l = n.hasFile,
                        s = void 0 !== l && l,
                        c = n.alreadyTitle,
                        d = void 0 === c ? void 0 : c,
                        u = n.description,
                        p = void 0 === u ? void 0 : u,
                        f = n.onChange,
                        m = n.message,
                        h = void 0 === m ? "" : m,
                        x = n.onError,
                        g = void 0 === x ? function(n) {} : x,
                        v = (0, Nn.useState)([]),
                        y = (0, Ln.A)(v, 2),
                        b = y[0],
                        A = y[1],
                        _ = (0, Nn.useState)([]),
                        j = (0, Ln.A)(_, 2),
                        C = (j[0], j[1]),
                        w = (0, Nn.useState)(null),
                        k = (0, Ln.A)(w, 2),
                        S = k[0],
                        P = k[1],
                        E = (0, Nn.useState)(!1),
                        R = (0, Ln.A)(E, 2),
                        M = (R[0], R[1]),
                        O = 1024 * r * 1024,
                        T = (0, be.lc)().HandleEvent,
                        N = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                var t, i;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            if (t = e.map(function(n) {
                                                    return n.name.toLowerCase()
                                                }), t.some(function(n) {
                                                    return n.endsWith("xlsx") || n.endsWith("csv")
                                                })) {
                                                n.n = 1;
                                                break
                                            }
                                            return g("invalid_format"), T("Invalid File Format Uploaded Queries", {
                                                format: t[0] || ""
                                            }), n.a(2, D({
                                                error: "O arquivo deve ser no formato XLSX ou CSV (planilha)"
                                            }));
                                        case 1:
                                            if (!(r > 0)) {
                                                n.n = 2;
                                                break
                                            }
                                            if (e.every(function(n) {
                                                    return n.size <= O
                                                })) {
                                                n.n = 2;
                                                break
                                            }
                                            return g("size_too_large"), T("Upload Invalid File Size"), n.a(2, D({
                                                error: "O arquivo deve ter o tamanho de at\xe9 ".concat(r, "mb")
                                            }));
                                        case 2:
                                            return A(e), n.n = 3, f(e);
                                        case 3:
                                            if (!(i = n.v) || !(0, Ao.has)(i, "error")) {
                                                n.n = 4;
                                                break
                                            }
                                            return n.a(2, D(i));
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n)
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        D = function(n) {
                            if (A([]), console.error(n), Array.isArray(n)) {
                                var e = n.every(function(n) {
                                    return n.errors.find(function(n) {
                                        return "file-too-large" === n.code
                                    })
                                });
                                return e ? (g("size_too_large"), D({
                                    error: "O arquivo deve ter o tamanho de at\xe9 ".concat(r, "mb")
                                })) : D({
                                    error: "Erro ao processar o arquivo"
                                })
                            }
                            P(n)
                        },
                        z = (0, _o.VB)({
                            onDropAccepted: function(n) {
                                return P(null), (0, Ao.isEmpty)(b) && !s || !d ? N(n) : (C(n), M(!0))
                            },
                            onDropRejected: D,
                            accept: a,
                            multiple: t,
                            maxSize: r > 0 ? O : void 0
                        }),
                        q = z.getRootProps,
                        L = z.getInputProps,
                        I = z.isDragActive;
                    return (0, Kn.jsxs)(Kn.Fragment, {
                        children: [(0, Kn.jsxs)(go, (0, Re.A)((0, Re.A)({}, q()), {}, {
                            hasFiles: !(0, Ao.isEmpty)(b),
                            hasError: !!S || !!h,
                            children: [(0, Ao.isEmpty)(b) && (0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/svg/icons/Files/export.svg")
                            }), I ? (0, Kn.jsx)(vo, {
                                children: "Solte o arquivo aqui para anexar"
                            }) : (0, Kn.jsx)(vo, {
                                children: (0, Ao.isEmpty)(b) ? "Clique aqui para escolher ou Arraste o arquivo" : "Clique para escolher outro arquivo"
                            }), (0, Ao.isEmpty)(b) ? (0, Kn.jsxs)(Kn.Fragment, {
                                children: [!p && (0, Kn.jsxs)(yo, {
                                    children: ["arquivo em ", a.toUpperCase().replace(".", ""), " ", r > 0 ? "de at\xe9 ".concat(r, "mb") : ""]
                                }), p && (0, Kn.jsx)(yo, {
                                    children: p
                                })]
                            }) : b.map(function(n, e) {
                                return (0, Kn.jsx)(yo, {
                                    children: n.name
                                }, e)
                            }), (0, Kn.jsx)("input", (0, Re.A)((0, Re.A)({}, L()), {}, {
                                accept: a
                            }))]
                        })), S ? (0, Kn.jsx)(bo, {
                            children: (null === S || void 0 === S ? void 0 : S.error) || S
                        }) : h && (0, Kn.jsx)(bo, {
                            children: h
                        })]
                    })
                },
                Co = t(85517),
                wo = t(60279),
                ko = function() {
                    var n = (0, xe.A)(ge.$.PERMISSION.REPROCESS_BULK_QUERY).isFeatureFlagEnable,
                        e = (0, Nn.useState)(""),
                        t = (0, Ln.A)(e, 2),
                        i = t[0],
                        a = t[1],
                        o = (0, Nn.useState)(!1),
                        r = (0, Ln.A)(o, 2),
                        l = r[0],
                        s = r[1];
                    if (!n) return null;
                    var c = function() {
                        var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                            var t, a, o;
                            return (0, Va.A)().w(function(n) {
                                for (;;) switch (n.p = n.n) {
                                    case 0:
                                        if (null === e || void 0 === e || null === (t = e.preventDefault) || void 0 === t || t.call(e), i) {
                                            n.n = 1;
                                            break
                                        }
                                        return alert("Informe um ID de Bulk Query v\xe1lido."), n.a(2);
                                    case 1:
                                        return s(!0), n.p = 2, a = i.trim(), n.n = 3, rt.A.post("".concat("https://backend.jusfy.com.br/api", "/bulk-queries/").concat(encodeURIComponent(a), "/force-generate-result"), {}, {
                                            headers: {
                                                "x-trace-id": "reprocess-bulk-".concat(Date.now())
                                            }
                                        });
                                    case 3:
                                        n.v, n.n = 5;
                                        break;
                                    case 4:
                                        n.p = 4, o = n.v, console.error("Falha ao enfileirar export:", o);
                                    case 5:
                                        return n.p = 5, s(!1), n.f(5);
                                    case 6:
                                        return n.a(2)
                                }
                            }, n, null, [
                                [2, 4, 5, 6]
                            ])
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }();
                    return (0, Kn.jsxs)("form", {
                        onSubmit: c,
                        style: {
                            display: "grid",
                            gap: 8,
                            maxWidth: 480
                        },
                        children: [(0, Kn.jsx)(Co.A, {
                            label: "Bulk Query ID",
                            placeholder: "ex.: bq_123456",
                            variant: "outlined",
                            size: "small",
                            margin: "dense",
                            fullWidth: !0,
                            value: i,
                            onChange: function(n) {
                                return a(n.target.value)
                            }
                        }), (0, Kn.jsx)(wo.A, {
                            type: "submit",
                            disabled: l,
                            children: l ? "Publicando..." : "Reprocessar consulta"
                        })]
                    })
                },
                So = function(n) {
                    var e = n.document,
                        t = n.onChangeDocumentValue,
                        i = n.queries,
                        a = n.onChangeQueries,
                        o = n.submitQueries,
                        r = n.error,
                        l = n.onChooseFile,
                        s = n.emptyFileError,
                        c = n.isLoadingBatch,
                        d = n.leftColumn,
                        u = n.rightColumn,
                        p = n.openManual;
                    return (0, Kn.jsx)(Ci.Y, {
                        blocking: c,
                        children: (0, Kn.jsxs)(Ka, {
                            children: [(0, Kn.jsxs)(so, {
                                children: [(0, Kn.jsxs)(Wa, {
                                    children: [(0, Kn.jsxs)(Ha, {
                                        children: ["Formato dos documentos", (0, Kn.jsx)("span", {
                                            children: "*"
                                        })]
                                    }), (0, Kn.jsx)(xo, {
                                        options: $a,
                                        orientation: ho,
                                        actived: e,
                                        onChange: function(n) {
                                            return t(n.target.value)
                                        }
                                    })]
                                }), (0, Kn.jsxs)(Wa, {
                                    children: [(0, Kn.jsxs)(Ha, {
                                        children: ["Consultas a serem realizadas ", (0, Kn.jsx)("span", {
                                            children: "*"
                                        })]
                                    }), (0, Kn.jsxs)(eo, {
                                        children: [(0, Kn.jsx)(Ya, {
                                            children: null === d || void 0 === d ? void 0 : d.map(function(n, e) {
                                                return (0, Kn.jsx)(Za, {
                                                    error: r,
                                                    checked: i.includes(n.value),
                                                    "data-testid": "queries",
                                                    children: (0, Kn.jsx)(Oe.A, {
                                                        control: (0, Kn.jsx)(xt.A, {
                                                            checked: i.includes(n.value),
                                                            name: n.value,
                                                            color: "primary",
                                                            onChange: function(e) {
                                                                return a(e, n.value)
                                                            }
                                                        }),
                                                        label: n.name
                                                    })
                                                }, e)
                                            })
                                        }), (0, Kn.jsx)(Ya, {
                                            children: u.map(function(n, e) {
                                                return (0, Kn.jsx)(Za, {
                                                    error: r,
                                                    checked: i.includes(n.value),
                                                    "data-testid": "queries",
                                                    children: (0, Kn.jsx)(Oe.A, {
                                                        control: (0, Kn.jsx)(xt.A, {
                                                            checked: i.includes(n.value),
                                                            name: n.value,
                                                            color: "primary",
                                                            onChange: function(e) {
                                                                return a(e, n.value)
                                                            }
                                                        }),
                                                        label: n.name
                                                    })
                                                }, e)
                                            })
                                        })]
                                    }), r && (0, Kn.jsx)(Je, {
                                        children: r
                                    })]
                                }), (0, Kn.jsxs)(Wa, {
                                    children: [(0, Kn.jsxs)(Ha, {
                                        children: ["Anexar arquivo ", (0, Kn.jsx)("span", {
                                            children: "*"
                                        })]
                                    }), (0, Kn.jsxs)(no, {
                                        children: [(0, Kn.jsx)(ro, {
                                            children: (0, Kn.jsx)(jo, {
                                                accept: [".csv", ".xlsx"],
                                                sizeLimitMB: 50,
                                                description: "Escolha um arquivo .xlsx ou .csv",
                                                onChange: l,
                                                multiple: !0,
                                                "data-testid": "upload-file",
                                                message: s
                                            })
                                        }), (0, Kn.jsxs)(to, {
                                            children: [(0, Kn.jsxs)(ao, {
                                                children: [(0, Kn.jsx)(oo, {
                                                    src: (0, zn.oK)("/media/jusfinder/information-icon.svg")
                                                }), (0, Kn.jsx)(Ha, {
                                                    children: "Como deve estar seu arquivo"
                                                })]
                                            }), (0, Kn.jsx)("span", {
                                                children: "Os documentos a serem consultados devem estar em uma mesma coluna indicada com o t\xedtulo \u201cCPF\u201d, \u201cCNPJ\u201d ou \u201cPlaca\u201d."
                                            }), (0, Kn.jsx)("span", {
                                                children: "Planilhas mais antigas geralmente s\xe3o .xls e devem ser transformadas em .xlsx ou .csv."
                                            }), (0, Kn.jsx)(io, {
                                                onClick: p,
                                                children: "Saber mais"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, Kn.jsx)(Xa, {
                                children: (0, Kn.jsx)(Ga, {
                                    onClick: o,
                                    children: "Consultar"
                                })
                            }), (0, Kn.jsx)(ko, {})]
                        })
                    })
                },
                Po = function() {
                    var n = function() {
                        var n = (0, Nn.useContext)(Wn),
                            e = n.openModal,
                            t = (n.closeModal, (0, Nn.useState)("CPF")),
                            i = (0, Ln.A)(t, 2),
                            a = i[0],
                            o = i[1],
                            r = (0, Nn.useState)([]),
                            l = (0, Ln.A)(r, 2),
                            s = l[0],
                            c = l[1],
                            d = (0, Nn.useState)(""),
                            u = (0, Ln.A)(d, 2),
                            p = u[0],
                            f = u[1],
                            m = (0, Nn.useState)(""),
                            h = (0, Ln.A)(m, 2),
                            x = h[0],
                            g = h[1],
                            v = (0, Nn.useState)(null),
                            y = (0, Ln.A)(v, 2),
                            b = y[0],
                            A = y[1],
                            _ = (0, Nn.useState)(!1),
                            j = (0, Ln.A)(_, 2),
                            C = j[0],
                            w = j[1],
                            k = (0, be.lc)().HandleEvent,
                            S = (0, Nn.useCallback)(function() {
                                return Ja.filter(function(n) {
                                    return n.type.includes(a)
                                }).sort(function(n, e) {
                                    return n.name.localeCompare(e.name)
                                })
                            }, [a]),
                            P = S(),
                            E = Math.ceil(P.length / 2),
                            R = P.slice(0, E),
                            M = P.slice(E),
                            O = function() {
                                return 0 === s.length
                            },
                            T = function() {
                                return null === b
                            },
                            N = function() {
                                var n = new FormData;
                                return n.append("documentType", a), n.append("queries", JSON.stringify(s)), n.append("file", b), n
                            },
                            D = function() {
                                var n = O(),
                                    e = T();
                                return n && f("Selecione uma consulta."), e && g("Selecione um arquivo."), n || e
                            },
                            z = function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                    var t;
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                if (!D()) {
                                                    n.n = 1;
                                                    break
                                                }
                                                return n.a(2);
                                            case 1:
                                                return t = N(), n.p = 2, n.n = 3, rt.A.post("".concat("https://backend.jusfy.com.br/api", "/bulk-queries"), t);
                                            case 3:
                                                k("Submitted Queries", {
                                                    document_type: a,
                                                    queries: s
                                                }), e("AVAILABLE_SOON_MODAL", {
                                                    context: "BatchQueriesPage"
                                                }), n.n = 5;
                                                break;
                                            case 4:
                                                n.p = 4, n.v, ti.oR.error("Erro ao consultar documentos");
                                            case 5:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [2, 4]
                                    ])
                                }));
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }();
                        (0, Nn.useEffect)(function() {
                            f("")
                        }, [s]), (0, Nn.useEffect)(function() {
                            g("")
                        }, [b]);
                        var q = S().some(function(n) {
                            return s.includes(n.value)
                        });
                        return {
                            document: a,
                            setDocument: o,
                            onChangeDocumentValue: function(n) {
                                o(n), c("PLATE" !== n ? [] : ["vehicle_data"])
                            },
                            queriesFiltered: S,
                            queries: s,
                            setQueries: c,
                            onChangeQueries: function(n, e) {
                                c(function(n) {
                                    return n.includes(e) ? n.filter(function(n) {
                                        return n !== e
                                    }) : [].concat((0, tt.A)(n), [e])
                                })
                            },
                            submitQueries: z,
                            error: p,
                            hasChekedQueries: q,
                            onChooseFile: function(n) {
                                var e = (0, Ln.A)(n, 1)[0];
                                A(e), k("Upload File Queries Success")
                            },
                            emptyFileError: x,
                            isLoadingBatch: C,
                            setIsLoadingBatch: w,
                            leftColumn: R,
                            rightColumn: M,
                            validationQueries: O,
                            validationFile: T,
                            openManual: function() {
                                window.open("https://help.jusfy.com.br/manual-da-consulta-em-lote-jusfinder", "_blank"), k("Open Manual Button Clicked Queries")
                            }
                        }
                    }();
                    return (0, Kn.jsx)(So, (0, Re.A)({}, n))
                },
                Eo = t(9247),
                Ro = t(47854),
                Mo = t(67256),
                Oo = t(80045),
                To = (0, Xn.default)(Dn.A)(fa || (fa = (0, Gn.A)(["\n  width: ", ";\n  height: ", ";\n"])), function(n) {
                    return n.size
                }, function(n) {
                    return n.size
                }),
                No = Xn.default.button(ma || (ma = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  width: 26px;\n  height: 26px;\n  padding: 4px;\n  border: none;\n"]))),
                Do = ["favorited"],
                zo = function(n) {
                    var e = n.favorited,
                        t = (0, Oo.A)(n, Do);
                    return (0, Kn.jsx)(No, (0, Re.A)((0, Re.A)({}, t), {}, {
                        children: (0, Kn.jsx)(To, {
                            src: (0, zn.oK)("/media/jusfinderuniversal/".concat(e ? "star-filled.svg" : "star-empty.svg")),
                            size: "18px"
                        })
                    }))
                },
                qo = new Map([
                    ["personal_data", "person"],
                    ["list_vehicles", "car"],
                    ["company_information", "company"],
                    ["company_partnership", "company"],
                    ["vehicle_data", "car"],
                    ["relationship_tree", "people"],
                    ["credit_restriction", "dolar"],
                    ["lawsuit", "people"],
                    ["trademarks", "trademark"],
                    ["professional_data", "professional_data"],
                    ["cpf_registration_status", "cpf_status"],
                    ["economic_group", "economic-group"],
                    ["vehicle_tracking", "car-search"]
                ]),
                Lo = ["vehicle_tracking"],
                Io = [],
                Fo = [],
                Uo = t(19505),
                Qo = Xn.default.div(ha || (ha = (0, Gn.A)(["\n  position: relative;\n  width: 100%;\n\n  cursor: pointer;\n\n  display: ", ";\n\n  ", "\n"])), function(n) {
                    return n.visible ? "none" : "block"
                }, function(n) {
                    return n.isMaintenance ? "\npointer-events: none;\n" : ""
                }),
                Vo = Xn.default.div(xa || (xa = (0, Gn.A)(["\n  background: #fff9e6;\n  padding: 16px;\n  border-radius: 4px;\n\n  h3 {\n    color: #383839;\n    font-weight: 500;\n    font-family: 'Noto Sans' !important;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    gap: 4.5px;\n  }\n\n  p {\n    font-weight: 300;\n    font-family: 'Noto Sans' !important;\n    font-size: 14px;\n    color: #535353;\n    margin: 0px;\n    height: auto !important;\n  }\n"]))),
                Bo = Xn.default.div(ga || (ga = (0, Gn.A)(["\n  font-family: 'Noto Sans' !important;\n  padding: 24px;\n\n  h1 {\n    color: #111219;\n    font-weight: 500;\n    font-size: 20px;\n    margin: 0;\n  }\n\n  p {\n    color: #535353;\n    height: 64px;\n    font-weight: 400;\n    font-size: 14px;\n    opacity: 0.8;\n  }\n\n  ", "\n"])), function(n) {
                    return n.isMaintenance ? "\n  opacity: 0.3;\n  " : ""
                }),
                $o = Xn.default.div(va || (va = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  min-height: 48px;\n"]))),
                Jo = Xn.default.div(ya || (ya = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: ", ";\n  margin-top: 8px;\n\n  p.short {\n    color: #535353;\n    height: 18px;\n    font-weight: 400;\n    font-size: 14px;\n    opacity: 0.8;\n  }\n"])), function(n) {
                    var e = n.isShort,
                        t = n.unavailable;
                    return e ? "21px" : t ? "0px" : "24px"
                }),
                Ko = Xn.default.div(ba || (ba = (0, Gn.A)(["\n  background-color: rgba(228, 246, 239, 0.8);\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),
                Wo = Xn.default.div(Aa || (Aa = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"]))),
                Ho = (0, Xn.default)(Uo.A)(_a || (_a = (0, Gn.A)(["\n  font-family: 'Noto Sans' !important;\n\n  strong {\n    font-weight: 700;\n  }\n"]))),
                Yo = (Xn.default.div(ja || (ja = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n\n  span {\n    font-family: 'Noto Sans';\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n  }\n\n  span.highlight {\n    text-decoration: underline;\n  }\n\n  span.left {\n    text-align: left;\n  }\n"]))), t(94916)),
                Go = function(n) {
                    var e = n.queryOption,
                        t = n.hasUnlimitedCredits,
                        i = n.unavailable,
                        a = e.description,
                        o = (e.identification, e.credit);
                    return (0, Kn.jsxs)(Jo, {
                        unavailable: i,
                        children: [(0, Kn.jsx)("p", {
                            children: a
                        }), i && (0, Kn.jsxs)(Vo, {
                            children: [(0, Kn.jsxs)("h3", {
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/warning.svg")
                                }), "Momentaneamente indispon\xedvel"]
                            }), (0, Kn.jsx)("p", {
                                children: "Nosso fornecedor est\xe1 fora do ar, estamos trabalhando para normaliza\xe7\xe3o."
                            })]
                        }), !i && t ? (0, Kn.jsx)(Yo.A, {
                            text: "Cr\xe9ditos ilimitados"
                        }) : o ? (0, Kn.jsx)(Yo.A, {
                            text: "".concat((0, dt.td)("cr\xe9dito", o, "cr\xe9ditos"), " dispon\xedvel")
                        }) : (0, Kn.jsx)(Yo.A, {
                            color: "#D71D1D",
                            backgroundColor: "rgba(255, 229, 229, 0.8)",
                            text: "Voc\xea n\xe3o possui cr\xe9ditos"
                        }), !i && (0, Kn.jsxs)(qn.A, {
                            color: "#01AB7D",
                            backgroundColor: "transparent",
                            children: [o ? (0, Kn.jsx)("span", {
                                children: "Iniciar consulta"
                            }) : (0, Kn.jsx)("span", {
                                children: "Comprar consulta"
                            }), (0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/flat/arrow-right.svg")
                            })]
                        })]
                    })
                },
                Xo = t(49898),
                Zo = function() {
                    return (0, Kn.jsx)(Wo, {
                        children: (0, Kn.jsx)(Xo.A, {
                            placement: "top",
                            overlay: (0, Kn.jsxs)(Ho, {
                                id: "tooltip-top",
                                children: [(0, Kn.jsx)("strong", {
                                    children: "A pesquisa fornece dados apenas para at\xe9 10 ve\xedculos,"
                                }), " ", "independentemente do total vinculado ao CPF ou CNPJ, que pode ser superior a esse limite."]
                            }),
                            children: (0, Kn.jsx)("span", {
                                children: (0, Kn.jsx)(Dn.A, {
                                    width: "18px",
                                    height: "18px",
                                    title: "",
                                    fill: "#000000",
                                    src: (0, zn.oK)("/media/casesManagement/info.svg")
                                })
                            })
                        })
                    })
                },
                nr = Xn.default.div(Ca || (Ca = (0, Gn.A)(["\n  background-color: ", ';\n  position: absolute;\n  border-radius: 7px 7px 0px 0px;\n  font-family: "Noto Sans" !important;\n  color: ', ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 8px 0;\n  top: -16px;\n  height: 30px;\n  width: ", ";\n  z-index: 1;\n\n  span {\n    font-weight: 700;\n    font-size: 14px;\n  }\n\n  path {\n    fill: ", ";\n  }\n"])), function(n) {
                    return n.backgroundColor
                }, function(n) {
                    return n.color
                }, function(n) {
                    var e = n.width;
                    return "full" === e ? "100%" : e + "px"
                }, function(n) {
                    var e = n.color;
                    return "".concat(e, " !important")
                }),
                er = new Map([
                    ["new", {
                        text: "Novidade",
                        iconName: "star",
                        color: "#FDEDE7",
                        backgroundColor: "#E94F0E"
                    }],
                    ["plan", {
                        text: "Garanta cr\xe9ditos ilimitados",
                        iconName: "star",
                        color: "#610EE9",
                        backgroundColor: "#EBDEFF"
                    }],
                    ["maintenance", {
                        text: "Em manuten\xe7\xe3o",
                        iconName: "",
                        color: "#8b5742",
                        backgroundColor: "#FFDB58"
                    }]
                ]),
                tr = function(n) {
                    var e = n.type,
                        t = n.width,
                        i = void 0 === t ? "full" : t,
                        a = er.get(e),
                        o = a.text,
                        r = a.iconName,
                        l = a.color,
                        s = a.backgroundColor,
                        c = (0, zn.oK)("/media/flat/".concat(r, ".svg"));
                    return (0, Kn.jsxs)(nr, {
                        width: i,
                        color: l,
                        backgroundColor: s,
                        children: [(0, Kn.jsx)(Dn.A, {
                            src: c,
                            width: "12",
                            height: "14"
                        }), (0, Kn.jsx)("span", {
                            children: o
                        })]
                    })
                },
                ir = function(n) {
                    n.preventDefault(), n.stopPropagation()
                },
                ar = function(n) {
                    var e = n.queryOption,
                        t = n.onClick,
                        i = n.openModal,
                        a = n.onFavoriteClick,
                        o = n.isCardFavorited,
                        r = function(n, e, t) {
                            var i = (0, xe.A)("unavailable_lawsuit").isFeatureFlagEnable,
                                a = (0, xe.A)("unavailable_list_vehicles").isFeatureFlagEnable,
                                o = (0, Nn.useState)([]),
                                r = (0, Ln.A)(o, 2),
                                l = r[0],
                                s = r[1],
                                c = n.name,
                                d = n.identification,
                                u = n.credit,
                                p = (0, pt.g)(),
                                f = (0, On.d4)(function(n) {
                                    return n.auth.user.lawsuit_unlimited
                                }),
                                m = Fo.includes(d) || l.includes(d),
                                h = "lawsuit" === d && u > 1e4;
                            return (0, Nn.useEffect)(function() {
                                var n = l;
                                i && !l.includes("lawsuit") && (n = [].concat((0, tt.A)(l), ["lawsuit"])), !i && l.includes("lawsuit") && (n = l.filter(function(n) {
                                    return "lawsuit" !== n
                                })), a && !l.includes("list_vehicles") && (n = [].concat((0, tt.A)(l), ["list_vehicles"])), !a && l.includes("list_vehicles") && (n = l.filter(function(n) {
                                    return "list_vehicles" !== n
                                })), s(n)
                            }, [i, a]), (0, Nn.useEffect)(function() {
                                if (p.query === d) {
                                    if (p.query = "", !u) return t("BUY_CREDITS_MODAL", {
                                        queryOption: n
                                    }), void ti.oR.error("Voc\xea n\xe3o possui cr\xe9ditos para consulta de ".concat(c));
                                    e()
                                }
                            }, []), {
                                unavailableLawsuit: i,
                                unavailableListVehicles: a,
                                UNAVAILABLE_FEATURES: l,
                                setUnavailableFeatures: s,
                                isLawsuitUnlimited: f,
                                hasUnlimitedCredits: h,
                                identification: d,
                                credit: u,
                                name: c,
                                getCardBadge: function() {
                                    var n, e = null === (n = [{
                                        type: "maintenance",
                                        condition: Fo.includes(d)
                                    }, {
                                        type: "plan",
                                        condition: !u && Io.includes(d)
                                    }, {
                                        type: "new",
                                        condition: Lo.includes(d)
                                    }].find(function(n) {
                                        return n.condition
                                    })) || void 0 === n ? void 0 : n.type;
                                    return e ? (0, Kn.jsx)(tr, {
                                        type: e
                                    }) : null
                                },
                                isMaintenance: m
                            }
                        }(e, t, i),
                        l = r.UNAVAILABLE_FEATURES,
                        s = r.hasUnlimitedCredits,
                        c = r.identification,
                        d = r.getCardBadge,
                        u = r.name,
                        p = r.isMaintenance,
                        f = !!o && o(e.identification);
                    return (0, Kn.jsxs)(Qo, {
                        onClick: t,
                        isMaintenance: p,
                        children: [d(), (0, Kn.jsx)(Mo.A, {
                            children: (0, Kn.jsxs)(Bo, {
                                isMaintenance: p,
                                children: [(0, Kn.jsxs)($o, {
                                    children: [(0, Kn.jsx)(Ko, {
                                        children: (0, Kn.jsx)(Dn.A, {
                                            src: (0, zn.oK)("/media/flat/".concat(qo.get(c), ".svg"))
                                        })
                                    }), (0, Kn.jsx)("h1", {
                                        children: u
                                    }), (0, Kn.jsx)(zo, {
                                        onPointerDown: ir,
                                        onMouseDown: ir,
                                        onClick: function(n) {
                                            ir(n), a()
                                        },
                                        favorited: f
                                    }), "list_vehicles" === c && (0, Kn.jsx)(Zo, {})]
                                }), (0, Kn.jsx)(Go, {
                                    queryOption: e,
                                    unavailable: l.includes(c),
                                    hasUnlimitedCredits: s
                                })]
                            })
                        })]
                    })
                },
                or = t(23569),
                rr = t(1151),
                lr = [{
                    description: "5 C\xe1lculos Revisionais",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Atualiza\xe7\xe3o de Valores",
                    enabled: !0
                }, {
                    description: "1 C\xe1lculo Trabalhista",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Corre\xe7\xe3o do FGTS",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Pens\xe3o Aliment\xedcia",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Aluguel",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Superendividamento",
                    enabled: !0
                }, {
                    description: "3 C\xe1lculos PASEP",
                    enabled: !0
                }, {
                    description: "3 C\xe1lculos de Dosimetria da Pena",
                    enabled: !0
                }, {
                    description: "3 C\xe1lculos de Progress\xe3o de Regime",
                    enabled: !0
                }, {
                    description: "1 C\xe1lculo de RMC",
                    enabled: !0
                }, {
                    description: "5 Assinaturas digitais",
                    enabled: !0
                }, {
                    description: "5 Oportunidades de novos clientes",
                    enabled: !0
                }, {
                    description: "5 Cr\xe9ditos universais JusFinder",
                    enabled: !0
                }],
                sr = [{
                    description: "C\xe1lculos Revisionais - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Atualiza\xe7\xe3o de Valores - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos Trabalhistas",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Corre\xe7\xe3o do FGTS - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Pens\xe3o Aliment\xedcia - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Aluguel - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Superendividamento - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos PASEP - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Dosimetria da Pena",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Progress\xe3o de Regime",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de RMC",
                    enabled: !0
                }, {
                    description: "10 Assinaturas digitais",
                    enabled: !0
                }, {
                    description: "10 Oportunidades de novos clientes",
                    enabled: !0
                }, {
                    description: "15 Cr\xe9ditos universais JusFinder",
                    enabled: !0
                }],
                cr = [{
                    description: "C\xe1lculos Revisionais - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Atualiza\xe7\xe3o de Valores - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos Trabalhistas - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Corre\xe7\xe3o do FGTS - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Pens\xe3o Aliment\xedcia - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Aluguel - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Superendividamento - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos PASEP - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Dosimetria da Pena - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Progress\xe3o de Regime - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de RMC - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "20 Assinaturas digitais",
                    enabled: !0
                }, {
                    description: "20 Oportunidades de novos clientes",
                    enabled: !0
                }, {
                    description: "30 Cr\xe9ditos universais JusFinder",
                    enabled: !0
                }],
                dr = (0, Xn.default)(Dn.A)(wa || (wa = (0, Gn.A)(["\n  margin-left: 10px;\n  margin-top: 9px;\n"]))),
                ur = (Xn.default.div(ka || (ka = (0, Gn.A)(["\n  background: #41c78f;\n  display: inline-block;\n  padding: 10px 17px;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  color: #fff;\n  font-weight: bold;\n  border-radius: 50px;\n\n  :hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n"]))), (0, Xn.default)(or.A)(Sa || (Sa = (0, Gn.A)(["\n  .modal-body {\n    padding: 40px !important;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n\n  .modal-content {\n    border-radius: 10px !important;\n    max-height: 90vh;\n  }\n\n  .modal-dialog {\n    max-width: 700px !important;\n  }\n\n  @media screen and (max-width: 767px) {\n    .modal-content {\n      width: 90% !important;\n      margin: 0 auto !important;\n    }\n  }\n"]))), Xn.default.div(Pa || (Pa = (0, Gn.A)(["\n  width: 100%;\n  position: relative;\n\n  h3 {\n    text-align: center;\n    font-weight: bold;\n    color: #2e3f75;\n  }\n\n  > p:nth-child(2) {\n    text-align: center;\n  }\n"])))),
                pr = Xn.default.div(Ea || (Ea = (0, Gn.A)(["\n  cursor: pointer;\n  border: 2px solid #f1f1f1;\n  padding: 20px;\n  border-radius: 5px;\n  height: 100%;\n\n  :hover {\n    border: 2px solid #41c78f;\n    background: #fafafa;\n  }\n\n  span {\n    color: #2e3f75;\n    font-weight: bold;\n    font-size: 12px;\n    margin-bottom: 5px;\n  }\n\n  p.preco {\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: bold;\n    opacity: 0.7;\n    color: #2e3f75;\n  }\n\n  p.subtitulo {\n    margin-top: 5px !important;\n    height: 40px;\n    font-size: 12px;\n    line-height: 18px;\n    margin: 0;\n    color: #5f677d;\n    opacity: 0.6;\n    margin-bottom: 20px;\n  }\n\n  a {\n    color: #2e3f75;\n    font-weight: bold;\n    position: absolute;\n    bottom: 23px;\n    text-decoration: none;\n    font-size: 12px;\n    display: block;\n  }\n\n  a img {\n    display: inline-block;\n    width: 18px;\n    margin-left: 10px;\n    opacity: 0.5;\n    margin-bottom: 0px;\n  }\n\n  ul {\n    padding: 0 0 0 4px;\n    margin-bottom: 40px;\n  }\n\n  ul li {\n    list-style: none;\n  }\n\n  ul li i {\n    color: #41c78f;\n  }\n\n  ul li i.disabled {\n    color: #576574;\n  }\n\n  ul li span {\n    opacity: 0.4;\n    font-size: 11px;\n    color: #1c2e66;\n    margin-left: 5px;\n    line-height: 26px;\n  }\n\n  @media only screen and (max-width: 899px) {\n    width: 100%;\n    margin-bottom: 10px;\n    padding: 13px;\n    span {\n      color: #41c78f;\n    }\n\n    p {\n      display: none;\n    }\n\n    a {\n      position: relative;\n      margin-top: 15px;\n      bottom: 0px;\n    }\n  }\n"]))),
                fr = Xn.default.div(Ra || (Ra = (0, Gn.A)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-radius: 10px;\n  border: 2px solid #ebedf3;\n  background: #fff;\n  padding: 24px;\n"]))),
                mr = Xn.default.div(Ma || (Ma = (0, Gn.A)(["\n  input:focus {\n    border: 1px solid #41c78f !important;\n  }\n\n  span {\n    color: #2e3f75;\n    font-weight: bold;\n    font-size: 30px;\n  }\n\n  h3 {\n    color: #2e3f75;\n    font-size: 22px;\n    display: inline-block;\n  }\n\n  p {\n    width: 70%;\n    text-align: left;\n    color: #2e3f75;\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-bottom: 15px;\n  }\n\n  span.price {\n    font-size: 30px;\n    text-align: right;\n    display: inline-block;\n    float: right;\n    margin-top: -68px;\n  }\n\n  span.desc-payment {\n    font-weight: normal;\n    font-size: 12px;\n    width: 61%;\n    display: inline-block;\n    margin-top: 20px;\n  }\n\n  hr {\n    opacity: 0.1;\n    margin: 10px 0px 20px 0px;\n  }\n\n  label:not(.invalid-feedback) {\n    margin: 0;\n    padding: 0;\n    font-size: 13px;\n    opacity: 0.6;\n    color: #091d5c;\n    margin: 10px 0px;\n  }\n\n  input.form-control {\n    margin: 0;\n    padding: 9px;\n    outline: none;\n    box-shadow: none;\n    border: 1px solid #ccc;\n  }\n\n  .btn-primary {\n    background: #41c78f;\n    border: none;\n    display: inline-block;\n    border-radius: 50px;\n    padding: 12px 40px;\n    font-size: 16px;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-top: 13px;\n    float: right;\n  }\n\n  .btn-primary:hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n\n  @media only screen and (max-width: 899px) {\n    .row {\n      margin-top: 0px;\n    }\n\n    hr {\n      margin: 10px;\n    }\n\n    label {\n      margin: 5px 0px;\n    }\n\n    span {\n      font-size: 16px;\n    }\n\n    h3 {\n      font-size: 14px;\n    }\n\n    p {\n      font-size: 12px;\n      width: 100%;\n    }\n\n    span.price {\n      float: none;\n      margin: 0 auto;\n      text-align: center;\n      letter-spacing: -0.9;\n    }\n\n    input.form-control {\n      width: 100%;\n      margin-bottom: 10px;\n      padding: 4px;\n    }\n\n    span.desc-payment {\n      width: 100%;\n      margin-top: 0;\n      opacity: 0.6;\n      font-size: 10px;\n    }\n\n    .btn-primary {\n      padding: 10px 40px;\n      font-size: 14px;\n      width: 100%;\n      margin-top: 10px;\n    }\n  }\n"]))),
                hr = Xn.default.img(Oa || (Oa = (0, Gn.A)(["\n  filter: brightness(0) saturate(100%) invert(58%) sepia(59%) saturate(452%)\n    hue-rotate(103deg) brightness(92%) contrast(83%);\n  cursor: pointer;\n  margin: 0 5px 5px 0;\n"]))),
                xr = Xn.default.div(Ta || (Ta = (0, Gn.A)(["\n  position: relative;\n\n  img {\n    height: 23px;\n    position: absolute;\n    right: 9px;\n    top: 8px;\n  }\n"]))),
                gr = t(64467),
                vr = t(60222),
                yr = "monthly",
                br = "annual",
                Ar = "starter",
                _r = "master",
                jr = "ultimate",
                Cr = (0, gr.A)((0, gr.A)((0, gr.A)({}, Ar, {
                    monthly: {
                        title: "PLANO STARTER",
                        price: "R$ 77,00/mensal",
                        total: ""
                    },
                    annual: {
                        title: "PLANO STARTER",
                        price: "R$ 739,20 /anual",
                        total: "(totalizando R$ 739,20)"
                    }
                }), _r, {
                    monthly: {
                        title: "PLANO MASTER",
                        price: "R$ 97,00/mensal",
                        total: ""
                    },
                    annual: {
                        title: "PLANO MASTER",
                        price: "R$ 931,20 /anual",
                        total: "(totalizando R$ 931,20)"
                    }
                }), jr, {
                    monthly: {
                        title: "PLANO ULTIMATE",
                        price: "R$ 117,00/mensal",
                        total: ""
                    },
                    annual: {
                        title: "PLANO ULTIMATE",
                        price: "R$ 1.123,20 /anual",
                        total: "(totalizando R$ 1.123,20)"
                    }
                }),
                wr = {
                    50: (0, gr.A)((0, gr.A)((0, gr.A)({}, Ar, {
                        monthly: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 84,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 873,84 /anual",
                            total: "(totalizando R$ 873,84)"
                        }
                    }), _r, {
                        monthly: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 104,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 1.065,84 /anual",
                            total: "(totalizando R$ 1.065,84)"
                        }
                    }), jr, {
                        monthly: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 121,90 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 1.230,00 /anual",
                            total: "(totalizando R$ 1.230,00)"
                        }
                    }),
                    200: (0, gr.A)((0, gr.A)((0, gr.A)({}, Ar, {
                        monthly: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 159,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 1.773,84 /anual",
                            total: "(totalizando R$ 1.773,84)  "
                        }
                    }), _r, {
                        monthly: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 179,80 /mensal ",
                            total: ""
                        },
                        annual: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 1.965,84 /anual",
                            total: "(totalizando R$ 1.965,84) "
                        }
                    }), jr, {
                        monthly: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 196,90 /mensal ",
                            total: ""
                        },
                        annual: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 2.130,00 /anual",
                            total: "(totalizando R$ 2.130,00)"
                        }
                    }),
                    500: (0, gr.A)((0, gr.A)((0, gr.A)({}, Ar, {
                        monthly: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 309,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 3.573,84 /anual",
                            total: " (totalizando R$ 3.573,84)"
                        }
                    }), _r, {
                        monthly: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 329,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 3.765,84 /anual",
                            total: "(totalizando R$ 3.765,84) "
                        }
                    }), jr, {
                        monthly: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 346,90 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 3.930,00 /anual",
                            total: "(totalizando R$ 3.930,00)"
                        }
                    })
                };

            function kr(n) {
                var e, t, i, a, o, r, l, s, c, d, u, p, f = (0, On.d4)(function(n) {
                        return n.subscription
                    }),
                    m = null !== (e = null === f || void 0 === f || null === (t = f.subscription_status) || void 0 === t || null === (i = t.info) || void 0 === i ? void 0 : i.plan) && void 0 !== e ? e : null === f || void 0 === f || null === (a = f.subscription_status) || void 0 === a || null === (o = a.plan_details) || void 0 === o ? void 0 : o.name,
                    h = (0, vr.A)(ge.$.RELEASE.UPSELL_OAB_MG, {
                        plan: null !== m && void 0 !== m ? m : void 0
                    }).isFeatureFlagEnable,
                    x = null === f || void 0 === f || null === (r = f.subscription_status) || void 0 === r ? void 0 : r.has_jusprocessos,
                    g = null === f || void 0 === f || null === (l = f.subscription_status) || void 0 === l ? void 0 : l.jus_processos_qtd,
                    v = null === f || void 0 === f || null === (s = f.subscription_status) || void 0 === s ? void 0 : s.isOffer,
                    y = (null === f || void 0 === f || null === (c = f.subscription_status) || void 0 === c || c.isUniversalJusfinder, function() {
                        var n, e, t, i, a, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                            l = (0, xe.A)(ge.$.KILL_SWITCH.USE_PLAN_ID_FROM_CLIENT).isFeatureFlagEnable,
                            s = (0, On.d4)(function(n) {
                                return n.subscription
                            }),
                            c = null !== (n = null === s || void 0 === s || null === (e = s.subscription_status) || void 0 === e || null === (t = e.info) || void 0 === t ? void 0 : t.plan) && void 0 !== n ? n : null === s || void 0 === s || null === (i = s.subscription_status) || void 0 === i || null === (a = i.plan_details) || void 0 === a ? void 0 : a.name,
                            d = (0, vr.A)(ge.$.RELEASE.UPSELL_OAB_MG, {
                                plan: null !== c && void 0 !== c ? c : void 0
                            }).isFeatureFlagEnable,
                            u = (0, Nn.useState)(yr),
                            p = (0, Ln.A)(u, 2),
                            f = p[0],
                            m = p[1],
                            h = (0, Nn.useState)({
                                starter: Cr[Ar].monthly,
                                master: Cr[_r].monthly,
                                ultimate: Cr[jr].monthly
                            }),
                            x = (0, Ln.A)(h, 2),
                            g = x[0],
                            v = x[1];
                        (0, Nn.useEffect)(function() {
                            if (!l) {
                                var n = Cr;
                                if (o && (n = wr[r]), n) {
                                    var e = f === br ? "annual" : "monthly";
                                    v({
                                        starter: n[Ar][e],
                                        master: n[_r][e],
                                        ultimate: n[jr][e]
                                    })
                                }
                            }
                        }, [f, o, r, l]);
                        var y = f === br ? "annually" : "monthly",
                            b = d ? "caamg" : void 0,
                            A = (0, Ti.wQ)([{
                                plan_type: "starter",
                                billingCycle: y,
                                hasJusProcessos: o,
                                jusprocessos_count: r,
                                is_offer: !1,
                                affiliation_type: b
                            }, {
                                plan_type: "master",
                                billingCycle: y,
                                hasJusProcessos: o,
                                jusprocessos_count: r,
                                is_offer: !1,
                                affiliation_type: b
                            }, {
                                plan_type: "ultimate",
                                billingCycle: y,
                                hasJusProcessos: o,
                                jusprocessos_count: r,
                                is_offer: !1,
                                affiliation_type: b
                            }]),
                            _ = l ? function() {
                                var n = A.find(function(n) {
                                        return "starter" === n.plan_type
                                    }),
                                    e = A.find(function(n) {
                                        return "master" === n.plan_type
                                    }),
                                    t = A.find(function(n) {
                                        return "ultimate" === n.plan_type
                                    }),
                                    i = f === br ? "annual" : "monthly";
                                return {
                                    starter: (0, Ti.a9)(n) || Cr[Ar][i],
                                    master: (0, Ti.a9)(e) || Cr[_r][i],
                                    ultimate: (0, Ti.a9)(t) || Cr[jr][i]
                                }
                            }() : g;
                        return {
                            billingCycle: f,
                            toggleBillingCycle: function() {
                                m(function(n) {
                                    return n === yr ? br : yr
                                })
                            },
                            planPrices: _
                        }
                    }(x, g)),
                    b = y.billingCycle,
                    A = y.toggleBillingCycle,
                    _ = y.planPrices,
                    j = (0, be.lc)().HandleEvent,
                    C = function(e) {
                        var t = {
                                plan_type: e,
                                billingCycle: "annual" === b ? "annually" : "monthly",
                                hasJusProcessos: x,
                                jusprocessos_count: g,
                                is_offer: Boolean(v),
                                affiliation_type: h ? "caamg" : void 0
                            },
                            i = (0, Ti.wQ)(t),
                            a = !i,
                            o = i && ((0, Ao.isNil)(i.id) || (0, Ao.isNil)(i.gateway_id)),
                            r = i && "number" !== typeof i.id;
                        if (a || o || r) return ti.oR.error("Plano n\xe3o encontrado. Por favor, tente novamente ou contate o suporte."), void n.formik.setFieldValue("product_selected", null);
                        var l = {
                            id: i.id,
                            name: i.name,
                            description: i.description,
                            periodicity: i.billingCycle,
                            price: i.amount,
                            gateway_id: null != i.gateway_id ? String(i.gateway_id) : null
                        };
                        n.formik.setFieldValue("product_selected", l), j("Plan Selected", (0, Re.A)({}, l)), n.isPagarmeV5 ? n.setModalV5(!0) : n.setModalCheckout(!0)
                    };
                return (0, Kn.jsx)(fr, {
                    children: (0, Kn.jsxs)(ur, {
                        children: [(0, Kn.jsx)("h3", {
                            children: "Upgrade Plano"
                        }), (0, Kn.jsx)("p", {
                            children: "Basta escolher um plano para realizar o upgrade agora mesmo"
                        }), (0, Kn.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row"
                            },
                            children: [(0, Kn.jsx)("span", {
                                style: {
                                    fontSize: "12px",
                                    lineHeight: "36px",
                                    marginRight: "10px"
                                },
                                children: "Mensal"
                            }), (0, Kn.jsx)(Oe.A, {
                                style: {
                                    marginRight: "0px",
                                    paddingRight: "0px"
                                },
                                control: (0, Kn.jsx)(rr.A, {
                                    style: {
                                        marginRight: "0px",
                                        paddingRight: "0px"
                                    },
                                    color: "primary",
                                    checked: "annual" === b,
                                    onChange: A
                                })
                            }), (0, Kn.jsx)("span", {
                                style: {
                                    fontSize: "12px",
                                    lineHeight: "36px",
                                    marginLeft: ""
                                },
                                children: "Anual"
                            }), (0, Kn.jsx)(dr, {
                                src: (0, zn.oK)("/media/svg/tag-discount-20.svg")
                            })]
                        }), (0, Kn.jsxs)("div", {
                            className: "row",
                            children: [(0, Kn.jsx)("div", {
                                className: "col-lg-4 col-12 mb-5",
                                children: (0, Kn.jsxs)(pr, {
                                    onClick: function() {
                                        return C("starter")
                                    },
                                    children: [(0, Kn.jsx)("span", {
                                        children: null === _ || void 0 === _ ? void 0 : _.starter.title
                                    }), (0, Kn.jsxs)("p", {
                                        className: "preco",
                                        children: [null === _ || void 0 === _ ? void 0 : _.starter.price, " ", (0, Kn.jsx)("span", {
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: null === _ || void 0 === _ || null === (d = _.starter) || void 0 === d ? void 0 : d.total
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        className: "subtitulo",
                                        children: "Plano Inicial b\xe1sico para advogados iniciando a carreira."
                                    }), (0, Kn.jsx)("ul", {
                                        children: lr.map(function(n, e) {
                                            return (0, Kn.jsxs)("li", {
                                                children: [(0, Kn.jsx)("i", {
                                                    className: n.enabled ? "icon-lg fas fa-check" : "icon-lg fas fa-times disabled"
                                                }), " ", (0, Kn.jsx)("span", {
                                                    children: n.description
                                                })]
                                            }, e)
                                        })
                                    }), (0, Kn.jsxs)("a", {
                                        href: "#",
                                        children: ["Assinar agora", " ", (0, Kn.jsx)("img", {
                                            src: (0, zn.oK)("/media/icon-arrow.svg")
                                        })]
                                    })]
                                })
                            }), (0, Kn.jsx)("div", {
                                className: "col-lg-4 col-12 mb-5",
                                children: (0, Kn.jsxs)(pr, {
                                    onClick: function() {
                                        return C("master")
                                    },
                                    children: [(0, Kn.jsx)("span", {
                                        children: null === _ || void 0 === _ ? void 0 : _.master.title
                                    }), (0, Kn.jsxs)("p", {
                                        className: "preco",
                                        children: [null === _ || void 0 === _ ? void 0 : _.master.price, " ", (0, Kn.jsx)("span", {
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: null === _ || void 0 === _ || null === (u = _.master) || void 0 === u ? void 0 : u.total
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        className: "subtitulo",
                                        children: "Plano completo para voc\xea. Tenha acesso a todas ferramentas necess\xe1rias para o seu escrit\xf3rio."
                                    }), (0, Kn.jsx)("ul", {
                                        children: sr.map(function(n, e) {
                                            return (0, Kn.jsxs)("li", {
                                                children: [(0, Kn.jsx)("i", {
                                                    className: n.enabled ? "icon-lg fas fa-check" : "icon-lg fas fa-times disabled"
                                                }), " ", (0, Kn.jsx)("span", {
                                                    children: n.description
                                                })]
                                            }, e)
                                        })
                                    }), (0, Kn.jsxs)("a", {
                                        href: "#",
                                        children: ["Assinar agora", " ", (0, Kn.jsx)("img", {
                                            src: (0, zn.oK)("/media/icon-arrow.svg")
                                        })]
                                    })]
                                })
                            }), (0, Kn.jsx)("div", {
                                className: "col-lg-4 col-12 mb-5",
                                children: (0, Kn.jsxs)(pr, {
                                    onClick: function() {
                                        return C("ultimate")
                                    },
                                    children: [(0, Kn.jsx)("span", {
                                        children: null === _ || void 0 === _ ? void 0 : _.ultimate.title
                                    }), (0, Kn.jsxs)("p", {
                                        className: "preco",
                                        children: [null === _ || void 0 === _ ? void 0 : _.ultimate.price, " ", (0, Kn.jsx)("span", {
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: null === _ || void 0 === _ || null === (p = _.ultimate) || void 0 === p ? void 0 : p.total
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        className: "subtitulo",
                                        children: "Plano Ultimate. Tenha acesso a todas ferramentas com mais benef\xedcios ainda."
                                    }), (0, Kn.jsx)("ul", {
                                        children: cr.map(function(n, e) {
                                            return (0, Kn.jsxs)("li", {
                                                children: [(0, Kn.jsx)("i", {
                                                    className: n.enabled ? "icon-lg fas fa-check" : "icon-lg fas fa-times disabled"
                                                }), " ", (0, Kn.jsx)("span", {
                                                    children: n.description
                                                })]
                                            }, e)
                                        })
                                    }), (0, Kn.jsxs)("a", {
                                        href: "#",
                                        children: ["Assinar agora", " ", (0, Kn.jsx)("img", {
                                            src: (0, zn.oK)("/media/icon-arrow.svg")
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
            var Sr = t(77142);

            function Pr(n) {
                var e = (0, On.d4)(function(n) {
                        return n.app.cards
                    }),
                    t = ((0, On.d4)(function(n) {
                        return n.auth.user
                    }), (0, On.wA)()),
                    i = (0, Nn.useRef)(),
                    a = (0, ai.q$)(i),
                    o = (0, Ln.A)(a, 2),
                    r = o[0],
                    l = o[1];
                (0, ai.xM)(i), (0, Nn.useEffect)(function() {
                    n.formik.setFieldValue("recaptchaToken", l.v3Token)
                }, [l.v3Token]), (0, Nn.useEffect)(function() {
                    t({
                        type: "LOAD_CARDS"
                    })
                }, [t]);
                var s = (0, ki.A)({
                    cardNumber: n.formik.values.card_number
                }).svg;
                return (0, Kn.jsx)(Ci.Y, {
                    blocking: n.formik.isSubmitting,
                    children: null != n.formik.values.product_selected && (0, Kn.jsxs)(mr, {
                        children: [(0, Kn.jsx)(hr, {
                            onClick: function() {
                                return n.back()
                            },
                            src: (0, zn.oK)("/media/svg/icons/Navigation/Arrow-left.svg")
                        }), (0, Kn.jsx)("span", {
                            children: "Checkout"
                        }), (0, Kn.jsx)("hr", {}), (0, Kn.jsx)("h3", {
                            children: n.formik.values.product_selected.name
                        }), (0, Kn.jsx)("p", {
                            children: n.formik.values.product_selected.description
                        }), (0, Kn.jsxs)("span", {
                            className: "price",
                            children: ["R$ ", (0, zn.Zt)(n.formik.values.product_selected.price)]
                        }), (0, Kn.jsx)("div", {
                            className: "hr"
                        }), (0, Kn.jsxs)("div", {
                            className: "mb-3",
                            children: [e && e.map(function(e) {
                                return (0, Kn.jsx)(Sr.A.Check, {
                                    custom: !0,
                                    type: "checkbox",
                                    label: "Desejo utilizar meu cart\xe3o com final ".concat(e.last_digits),
                                    checked: n.formik.values.card_selected && n.formik.values.card_selected.hash === e.hash,
                                    onChange: function() {
                                        return n.formik.setFieldValue("card_selected", e)
                                    },
                                    id: "card-".concat(e.hash)
                                }, e.hash)
                            }), (0, Kn.jsx)(Sr.A.Check, {
                                custom: !0,
                                type: "checkbox",
                                label: "Desejo informar os dados do cart\xe3o manualmente",
                                checked: null === n.formik.values.card_selected,
                                onChange: function() {
                                    return n.formik.setFieldValue("card_selected", null)
                                },
                                id: "card-none"
                            })]
                        }, n.formik.values.card_selected), null === n.formik.values.card_selected && (0, Kn.jsxs)("div", {
                            className: "row",
                            children: [(0, Kn.jsxs)("div", {
                                className: "col-12",
                                children: [(0, Kn.jsx)("label", {
                                    children: "Nome impresso no cart\xe3o"
                                }), (0, Kn.jsx)("input", {
                                    name: "cardholder_name",
                                    type: "text",
                                    className: "form-control " + (n.formik.errors.cardholder_name && n.formik.touched.cardholder_name ? "is-invalid" : ""),
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.cardholder_name
                                }), n.formik.errors.cardholder_name && n.formik.touched.cardholder_name && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.cardholder_name
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "N\xfamero do cart\xe3o"
                                }), (0, Kn.jsxs)(xr, {
                                    children: [(0, Kn.jsx)(_i(), {
                                        name: "card_number",
                                        placeholder: "0000 0000 0000 0000",
                                        mask: "9999 9999 9999 9999",
                                        maskChar: null,
                                        className: "form-control " + (n.formik.errors.card_number && n.formik.touched.card_number ? "is-invalid" : ""),
                                        type: "tel",
                                        onChange: n.formik.handleChange,
                                        value: n.formik.values.card_number
                                    }), (0, Kn.jsx)("img", {
                                        src: s ? (0, zn.oK)(s) : wi.dH,
                                        alt: "Bandeira do cart\xe3o"
                                    }), n.formik.errors.card_number && n.formik.touched.card_number && (0, Kn.jsx)("label", {
                                        className: "invalid-feedback",
                                        children: n.formik.errors.card_number
                                    })]
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-3 col-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "Vencimento"
                                }), (0, Kn.jsx)(_i(), {
                                    name: "card_expiration",
                                    placeholder: "MM / AA",
                                    mask: "99 / 99",
                                    maskChar: null,
                                    className: "form-control " + (n.formik.errors.card_expiration && n.formik.touched.card_expiration ? "is-invalid" : ""),
                                    type: "tel",
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.card_expiration
                                }), n.formik.errors.card_expiration && n.formik.touched.card_expiration && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.card_expiration
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-3 col-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "CVV"
                                }), (0, Kn.jsx)(_i(), {
                                    name: "card_cvv",
                                    placeholder: "000",
                                    mask: "9999",
                                    maskChar: null,
                                    className: "form-control " + (n.formik.errors.card_cvv && n.formik.touched.card_cvv ? "is-invalid" : ""),
                                    type: "tel",
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.card_cvv
                                }), n.formik.errors.card_cvv && n.formik.touched.card_cvv && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.card_cvv
                                })]
                            })]
                        }), (0, Kn.jsx)(ii.ReCaptchaProvider, {
                            siteKeyV3: "6Lc1YP8qAAAAAEPdzg4zAzJt7w4KVK3RZMFk5xhj",
                            children: (0, Kn.jsx)(ii.ReCaptchaV3, {
                                callback: r
                            })
                        }), (0, Kn.jsx)("span", {
                            className: "desc-payment",
                            children: "\xa0"
                        }), (0, Kn.jsx)("button", {
                            className: "btn btn-primary",
                            type: "button",
                            onClick: function() {
                                n.formik.handleSubmit()
                            },
                            disabled: n.formik.isSubmitting,
                            children: "Assinar agora"
                        })]
                    })
                })
            }
            var Er, Rr, Mr, Or, Tr = t(61726),
                Nr = Xn.default.div(Er || (Er = (0, Gn.A)(["\n  span {\n    font-size: 40px;\n    display: block;\n    padding: 5px;\n    text-align: center;\n    color: #a1a8c1;\n  }\n\n  hr {\n    opacity: 0.1;\n    margin: 0;\n  }\n\n  small {\n    font-size: 16px;\n    display: block;\n    text-align: center;\n    opacity: 0.6;\n    margin-top: 20px;\n  }\n\n  .success {\n    color: #41c78f !important;\n  }\n\n  .warning {\n    color: #ffc107 !important;\n  }\n\n  .error {\n    color: #ff6245 !important;\n  }\n"]))),
                Dr = Xn.default.h2(Rr || (Rr = (0, Gn.A)(["\n  font-weight: bold;\n  font-size: 19px;\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 20px;\n"])));

            function zr(n) {
                var e = (0, On.wA)();
                return (0, Kn.jsxs)(Nr, {
                    children: [(0, Kn.jsx)(Dr, {
                        className: "success",
                        children: "Parab\xe9ns, sua assinatura foi atualizada com sucesso!"
                    }), (0, Kn.jsx)("button", {
                        type: "button",
                        className: "btn btn-primary",
                        style: {
                            width: "100%"
                        },
                        onClick: function() {
                            e({
                                type: "LOAD_SUBSCRIPTION_STATUS",
                                payload: {
                                    callback: function(n) {
                                        e(Tr.actions.updateUserProvider(n))
                                    }
                                }
                            }), e({
                                type: "CLOSE_MODAL_SUBSCRIPTION"
                            }), n.closeModal()
                        },
                        children: "CONTINUAR NAVEGANDO"
                    })]
                })
            }
            var qr = Xn.default.div(Mr || (Mr = (0, Gn.A)(["\n  background: #41c78f;\n  display: inline-block;\n  padding: 10px 17px;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  color: #fff;\n  font-weight: bold;\n  border-radius: 50px;\n  z-index: 9999;\n  :hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n"]))),
                Lr = (0, Xn.default)(or.A)(Or || (Or = (0, Gn.A)(["\n  .modal-body {\n    padding: 40px !important;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n\n  .modal-content {\n    border-radius: 10px !important;\n    max-height: 90vh;\n  }\n\n  .modal-dialog {\n    max-width: 1200px !important;\n  }\n\n  @media screen and (max-width: 767px) {\n    .modal-content {\n      width: 90% !important;\n      margin: 0 auto !important;\n    }\n  }\n"])));

            function Ir(n) {
                var e, t, i, a, o, r, l, s, c, d = (0, Nn.useState)("choose_plan"),
                    u = (0, Ln.A)(d, 2),
                    p = u[0],
                    f = u[1],
                    m = (0, On.d4)(function(n) {
                        return n.app.modal_subscription
                    }),
                    h = (0, On.d4)(function(n) {
                        return n.subscription
                    }),
                    x = ((0, On.d4)(function(n) {
                        return n.auth
                    }) || {}).provider,
                    g = (0, Nn.useState)(null !== (e = h.subscription_status.info) && void 0 !== e && e.has_error ? null === (t = h.subscription_status) || void 0 === t ? void 0 : t.subscription_info : null === (i = h.subscription_status) || void 0 === i || null === (a = i.info) || void 0 === a ? void 0 : a.plan),
                    v = (0, Ln.A)(g, 2),
                    y = v[0],
                    b = (v[1], (0, Nn.useState)(!1)),
                    A = (0, Ln.A)(b, 2),
                    _ = A[0],
                    j = A[1],
                    C = window.location.pathname.split("/")[1],
                    w = (0, Nn.useState)(C),
                    k = (0, Ln.A)(w, 2),
                    S = k[0],
                    P = (k[1], (0, be.lc)().LimitReachModal),
                    E = (0, On.wA)(),
                    R = function() {
                        var n = new Date,
                            e = String(n.getDate()).padStart(2, "0"),
                            t = String(n.getMonth() + 1).padStart(2, "0"),
                            i = n.getFullYear();
                        return "".concat(e, "/").concat(t, "/").concat(i)
                    },
                    M = (0, bi.Wx)({
                        initialValues: {
                            product_selected: null,
                            cardholder_name: "",
                            card_number: "",
                            card_payment_method: null,
                            card_cvv: "",
                            card_expiration: "",
                            card_selected: null,
                            recaptchaToken: ""
                        },
                        onSubmit: function(e, t) {
                            var i = t.setSubmitting;
                            if (null === e.card_selected) {
                                var a = {};
                                a.card_holder_name = e.cardholder_name, a.card_expiration_date = e.card_expiration.substr(0, 2) + "/" + e.card_expiration.substr(e.card_expiration.length - 2), a.card_number = e.card_number, a.card_cvv = e.card_cvv;
                                var o = Oi().validate({
                                    card: a
                                });
                                if (!o.card.card_holder_name) return i(!1), ti.oR.error("Verifique o nome impresso no cart\xe3o."), !1;
                                if (!o.card.card_number) return i(!1), ti.oR.error("Verifique o n\xfamero do cart\xe3o."), !1;
                                if (!o.card.card_expiration_date) return i(!1), ti.oR.error("Verifique a data de expira\xe7\xe3o do cart\xe3o."), !1;
                                if (!o.card.card_cvv) return i(!1), ti.oR.error("Verifique o c\xf3digo de seguran\xe7a (CVV) do cart\xe3o."), !1;
                                var r = function(t) {
                                    E({
                                        type: "CREATE_SUBSCRIPTION",
                                        payload: {
                                            values: (0, Re.A)((0, Re.A)({}, e), {}, {
                                                card_hash: t
                                            }),
                                            callback: function(t) {
                                                var i, a, o, r, l, s, c, d;
                                                f("success"), P("Plan Upgraded", {
                                                    current_plan: y || "STARTER",
                                                    new_plan: null === (i = e.product_selected) || void 0 === i ? void 0 : i.id,
                                                    context: S,
                                                    current_plan_id: null === h || void 0 === h || null === (a = h.subscription_status) || void 0 === a || null === (o = a.plan_details) || void 0 === o ? void 0 : o.gateway_id,
                                                    new_plan_name: null === (r = e.product_selected) || void 0 === r ? void 0 : r.name,
                                                    new_plan_id: null === (l = e.product_selected) || void 0 === l ? void 0 : l.gateway_id,
                                                    new_plan_price: null === (s = e.product_selected) || void 0 === s ? void 0 : s.price,
                                                    current_plan_price: null === h || void 0 === h || null === (c = h.subscription_status) || void 0 === c || null === (d = c.plan_details) || void 0 === d ? void 0 : d.amount,
                                                    querie: null === n || void 0 === n ? void 0 : n.identification,
                                                    dateUpgrade: R()
                                                })
                                            },
                                            setSubmitting: i
                                        }
                                    })
                                };
                                if ("pagarme_v5" === x) {
                                    var l = {
                                        method: "POST",
                                        headers: {
                                            accept: "application/json",
                                            "content-type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            type: "card",
                                            card: {
                                                number: a.card_number.replace(/\s/g, ""),
                                                holder_name: a.card_holder_name,
                                                exp_month: parseInt(a.card_expiration_date.substr(0, 2), 10),
                                                exp_year: parseInt(a.card_expiration_date.substr(3, 2), 10),
                                                cvv: a.card_cvv
                                            }
                                        })
                                    };
                                    fetch("https://api.pagar.me/core/v5/tokens?appId=".concat("pk_yvrBvXfyGsLblq1d"), l).then(function(n) {
                                        return n.json()
                                    }).then(function(n) {
                                        return r(n.id)
                                    }).catch(function(n) {
                                        i(!1), ti.oR.error("Erro ao processar o cart\xe3o. Tente novamente."), console.error("Erro na tokeniza\xe7\xe3o:", n)
                                    })
                                } else Oi().client.connect({
                                    encryption_key: "ek_live_1k97whurxvoxNIX2laU2BHdzhWFcAK"
                                }).then(function(n) {
                                    return n.security.encrypt(a)
                                }).then(function(n) {
                                    return r(n)
                                }).catch(function() {
                                    i(!1), ti.oR.error("Erro ao processar o cart\xe3o. Tente novamente.")
                                })
                            } else E({
                                type: "CREATE_SUBSCRIPTION",
                                payload: {
                                    values: (0, Re.A)({}, e),
                                    callback: function() {
                                        var t, i, a, o, r, l, s, c;
                                        f("success"), P("Plan Upgraded", {
                                            current_plan: y || "STARTER",
                                            new_plan: null === (t = e.product_selected) || void 0 === t ? void 0 : t.id,
                                            context: S,
                                            current_plan_id: null === h || void 0 === h || null === (i = h.subscription_status) || void 0 === i || null === (a = i.plan_details) || void 0 === a ? void 0 : a.gateway_id,
                                            new_plan_id: null === (o = e.product_selected) || void 0 === o ? void 0 : o.gateway_id,
                                            new_plan_name: null === (r = e.product_selected) || void 0 === r ? void 0 : r.name,
                                            new_plan_price: null === (l = e.product_selected) || void 0 === l ? void 0 : l.price,
                                            current_plan_price: null === h || void 0 === h || null === (s = h.subscription_status) || void 0 === s || null === (c = s.plan_details) || void 0 === c ? void 0 : c.amount,
                                            querie: null === n || void 0 === n ? void 0 : n.identification,
                                            dateUpgrade: R()
                                        })
                                    },
                                    setSubmitting: i
                                }
                            })
                        },
                        validationSchema: yi.Ik().shape({
                            cardholder_name: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O nome do titular do cart\xe3o \xe9 obrigat\xf3rio.")
                            }),
                            card_number: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O n\xfamero do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidCardNumber", "N\xfamero do cart\xe3o inv\xe1lido.", function(n) {
                                    return n && 19 === n.length
                                })
                            }),
                            card_expiration: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O m\xeas/ano de expira\xe7\xe3o do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidExpiration", "O vencimento \xe9 inv\xe1lido.", function(n) {
                                    return n && /^(0[1-9]|1[012]) [/] \d{2}/.test(n)
                                })
                            }),
                            card_cvv: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O c\xf3digo de seguran\xe7a (CVV) do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidCVV", "N\xfamero do CVV inv\xe1lido.", function(n) {
                                    return n && /^[0-9]{3,4}$/.test(n)
                                })
                            })
                        })
                    });
                (0, Nn.useEffect)(function() {
                    null !== M.values.product_selected && f("checkout")
                }, [M.values.product_selected]);
                var O = function() {
                    E({
                        type: "LOAD_SUBSCRIPTION_STATUS",
                        payload: {
                            callback: function(n) {
                                var e;
                                E(null === Tr || void 0 === Tr || null === (e = Tr.actions) || void 0 === e ? void 0 : e.updateUserProvider(n))
                            }
                        }
                    }), E({
                        type: "CLOSE_MODAL_SUBSCRIPTION"
                    }), n.setModalCheckout(!1), n.setLoadingCheckout(!0)
                };
                return (0, Kn.jsx)(Kn.Fragment, {
                    children: _ ? (0, Kn.jsx)(Na.A, {
                        isOpen: !0,
                        close: O,
                        back: O,
                        productSelected: {
                            id: null === (o = M.values.product_selected) || void 0 === o ? void 0 : o.id,
                            name: null === (r = M.values.product_selected) || void 0 === r ? void 0 : r.name,
                            description: "",
                            periodicity: null === (l = M.values.product_selected) || void 0 === l ? void 0 : l.periodicity,
                            price: null === (s = M.values.product_selected) || void 0 === s ? void 0 : s.price,
                            gateway_id: null === (c = M.values.product_selected) || void 0 === c ? void 0 : c.gateway_id
                        }
                    }) : (0, Kn.jsxs)(Lr, {
                        show: n.visible,
                        onHide: O,
                        centered: !0,
                        backdrop: "static",
                        keyboard: !1,
                        children: [(0, Kn.jsx)(qr, {
                            onClick: O,
                            children: "X"
                        }), (0, Kn.jsxs)(or.A.Body, {
                            children: ["choose_plan" === p && (0, Kn.jsx)(kr, {
                                screen: p,
                                setScreen: f,
                                visible: !0,
                                setModalCheckout: f,
                                url: S,
                                formik: M,
                                title: m.title,
                                subtitle: m.subtitle,
                                modalV5: _,
                                setModalV5: j,
                                isPagarmeV5: "pagarme_v5" === x
                            }), "checkout" === p && (0, Kn.jsx)(Pr, {
                                screen: p,
                                setScreen: f,
                                formik: M,
                                back: function() {
                                    return f("choose_plan")
                                },
                                loading: n.loadingCheckout,
                                setLoading: n.setLoadingCheckout
                            }), "success" === p && (0, Kn.jsx)(zr, {
                                screen: p,
                                setScreen: f,
                                loading: n.loadingCheckout,
                                setLoading: n.setLoadingCheckout,
                                closeModal: O
                            })]
                        })]
                    })
                })
            }
            var Fr, Ur, Qr, Vr, Br, $r, Jr, Kr, Wr, Hr, Yr, Gr, Xr, Zr, nl, el, tl, il, al, ol, rl, ll = (0, tt.A)(Array.from({
                    length: 12
                })),
                sl = ((0, tt.A)(Array.from({
                    length: 12
                })), t(8171)),
                cl = Xn.default.div(Fr || (Fr = (0, Gn.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 32px 16px;\n  margin-top: 24px;\n  position: relative;\n\n  @media (min-width: 545px) {\n    margin-top: 55px;\n  }\n"]))),
                dl = (Xn.default.div(Ur || (Ur = (0, Gn.A)(["\n  width: 275px;\n  flex-grow: 1;\n\n  @media (min-width: 1800px) {\n    width: 350px;\n  }\n"]))), Xn.default.div(Qr || (Qr = (0, Gn.A)(["\n  position: relative;\n  width: 275px;\n  flex-grow: 1;\n  cursor: pointer;\n\n  ", "\n\n  @media (min-width: 1800px) {\n    width: 350px;\n  }\n"])), function(n) {
                    return n.isMaintenance ? "\npointer-events: none;\n" : ""
                }), (0, Xn.default)(sl.A)(Vr || (Vr = (0, Gn.A)(["\n  box-shadow: none !important;\n  border-radius: 7px;\n  width: ", ";\n  position: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  flex-grow: ", ";\n  overflow: ", ' !important;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n  height: 281px;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    h5 {\n      margin: 0px;\n      color: #017858;\n      text-align: center;\n      font-family: "Noto Sans";\n      font-size: 20px;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 110%;\n    }\n\n    span {\n      color: #383839;\n      text-align: center;\n\n      font-family: "Noto Sans";\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 140%;\n    }\n  }\n\n  button {\n    display: flex;\n    height: 40px;\n    padding: 10px 40px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 5px;\n    background: #01ab7d;\n    border: none;\n\n    color: #fff;\n    text-align: center;\n    font-family: "Noto Sans";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 140%;\n\n    &:hover {\n      border-radius: 5px;\n      background: linear-gradient(\n          0deg,\n          rgba(0, 0, 0, 0.08) 0%,\n          rgba(0, 0, 0, 0.08) 100%\n        ),\n        #01ab7d;\n    }\n  }\n'])), function(n) {
                    var e = n.width;
                    return "full" === e ? "100%" : e
                }, function(n) {
                    return n.position
                }, function(n) {
                    var e = n.padding;
                    return e || "0"
                }, function(n) {
                    var e = n.border;
                    return e || "none"
                }, function(n) {
                    var e = n.borderRadius;
                    return e ? e + " !important" : "0"
                }, function(n) {
                    return n.grow
                }, function(n) {
                    return n.overflow
                }), Xn.default.p(Br || (Br = (0, Gn.A)(["\n  color: var(--gray-900, #131313);\n  font-family: var(--font-family-font-family-title, 'Noto Sans');\n  font-size: var(--font-size-font-size-20, 20px);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])))),
                ul = Xn.default.div($r || ($r = (0, Gn.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(2px);\n  z-index: 99;\n"])), function(n) {
                    return n.open ? "flex" : "none"
                }),
                pl = Xn.default.div(Jr || (Jr = (0, Gn.A)(["\n  width: 566px;\n  height: 800px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  background: #f2f3f7;\n  padding: 24px 24px 77px 24px;\n\n  @media (min-width: 1500px) {\n    width: 700px;\n  }\n"]))),
                fl = Xn.default.div(Kr || (Kr = (0, Gn.A)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),
                ml = Xn.default.div(Wr || (Wr = (0, Gn.A)(["\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  top: 40px;\n  background: #d9d9d9;\n"]))),
                hl = Xn.default.h3(Hr || (Hr = (0, Gn.A)(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 31.2px; /* 156% */\n  margin: 0;\n  padding: 0;\n"])), function(n) {
                    return n.theme.colors.black.primary
                }, function(n) {
                    return n.theme.typography.primary
                }),
                xl = (0, Xn.default)(Dn.A)(Yr || (Yr = (0, Gn.A)(["\n  cursor: pointer;\n"]))),
                gl = Xn.default.iframe(Gr || (Gr = (0, Gn.A)(["\n  width: 100%;\n  height: 641px;\n  margin-top: 26px;\n  border-radius: 3px;\n"]))),
                vl = function(n) {
                    var e = n.openModal,
                        t = n.setOpenModal,
                        i = n.url;
                    return (0, Kn.jsx)(ul, {
                        open: e,
                        children: (0, Kn.jsxs)(pl, {
                            children: [(0, Kn.jsxs)(fl, {
                                children: [(0, Kn.jsx)(hl, {
                                    children: "Sugerir uma nova consulta"
                                }), (0, Kn.jsx)(xl, {
                                    src: (0, zn.oK)("/media/calculadoras/close-modal.svg"),
                                    onClick: function() {
                                        return t(!e)
                                    }
                                }), (0, Kn.jsx)(ml, {})]
                            }), (0, Kn.jsx)(gl, {
                                src: i,
                                frameBorder: "0"
                            })]
                        })
                    })
                },
                yl = t(30058),
                bl = t(8926),
                Al = t(1120),
                _l = t(5802),
                jl = t(16274),
                Cl = (Xn.default.div(Xr || (Xr = (0, Gn.A)(["\n  display: flex;\n  height: 40px;\n  padding: 10px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  border: 1px solid #ceced2;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  width: 100%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(Zr || (Zr = (0, Gn.A)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 16px 0;\n  display: flex;\n  justify-content: space-evenly;\n"])))),
                wl = Xn.default.div(nl || (nl = (0, Gn.A)(["\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 10px 16px;\n  border-radius: 4px;\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  transition: background-color 0.2s;\n"]))),
                kl = (0, Xn.default)(wl)(el || (el = (0, Gn.A)(["\n  border: 1px solid #ceced2;\n  background-color: transparent;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]))),
                Sl = (0, Xn.default)(wl)(tl || (tl = (0, Gn.A)(["\n  background-color: #01ab7d;\n  color: #fff;\n  opacity: ", ";\n  pointer-events: ", ";\n"])), function(n) {
                    return n.disabled ? .5 : 1
                }, function(n) {
                    return n.disabled ? "none" : "auto"
                }),
                Pl = ((0, Xn.default)(jl.A)(il || (il = (0, Gn.A)(["\n  .MuiOutlinedInput-root.Mui-focused fieldset {\n    border-color: #01ab7d;\n  }\n"]))), (0, Xn.default)(Ne.A)(al || (al = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: #838486 !important;\n  }\n\n  &.Mui-checked .MuiSvgIcon-root {\n    color: #01ab7d !important;\n  }\n"]))), t(76670)),
                El = t(60867),
                Rl = t(84080),
                Ml = t(53767),
                Ol = t(51342),
                Tl = (0, Xn.default)(Ml.A)(ol || (ol = (0, Gn.A)(["\n  width: 100%;\n\n  .MuiInputLabel-root.Mui-focused {\n    color: #41c78f;\n  }\n"]))),
                Nl = (0, Xn.default)(Ol.A)(rl || (rl = (0, Gn.A)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  gap: 2px;\n  padding: 0 2px !important;\n\n  background-color: #f4f5f9 !important;\n  color: #5e5e60 !important;\n  font-weight: 500;\n  width: fit-content;\n  border-radius: 8px;\n  height: 25px !important;\n  & .MuiChip-deleteIcon {\n    font-size: 10px !important;\n    color: #383839 !important;\n  }\n"]))),
                Dl = [{
                    name: "cpf",
                    label: "CPF"
                }, {
                    name: "cnpj",
                    label: "CNPJ"
                }, {
                    name: "vehicle",
                    label: "Placa de ve\xedculo"
                }];

            function zl(n) {
                var e = n.values,
                    t = n.setValues,
                    i = e.map(function(n) {
                        return n.name
                    });
                return (0, Kn.jsxs)(Tl, {
                    fullWidth: !0,
                    children: [(0, Kn.jsx)(Pl.A, {
                        id: "status-label"
                    }), (0, Kn.jsx)(El.A, {
                        labelId: "status-label",
                        multiple: !0,
                        value: i,
                        onChange: function(n) {
                            var e = n.target.value,
                                i = Dl.filter(function(n) {
                                    return e.includes(n.name)
                                });
                            t(i)
                        },
                        renderValue: function(n) {
                            return (0, Kn.jsx)(Ro.A, {
                                sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: .5
                                },
                                children: n.map(function(n) {
                                    var e = Dl.find(function(e) {
                                        return e.name === n
                                    });
                                    return (0, Kn.jsx)(Nl, {
                                        label: (null === e || void 0 === e ? void 0 : e.label) || n,
                                        onDelete: function(n) {
                                            var i;
                                            n.stopPropagation(), i = e, t(function(n) {
                                                return n.filter(function(n) {
                                                    return n.name !== i.name
                                                })
                                            })
                                        },
                                        onMouseDown: function(n) {
                                            return n.stopPropagation()
                                        },
                                        deleteIcon: (0, Kn.jsx)("span", {
                                            children: "\xd7"
                                        })
                                    }, "chip-".concat(n))
                                })
                            })
                        },
                        children: Dl.map(function(n) {
                            return (0, Kn.jsx)(Rl.A, {
                                value: n.name,
                                selected: i.includes(n.name),
                                children: n.label
                            }, "select-item-".concat(n.name))
                        })
                    })]
                })
            }
            var ql, Ll, Il, Fl, Ul, Ql, Vl, Bl, $l, Jl, Kl, Wl, Hl, Yl, Gl, Xl, Zl, ns = t(75633),
                es = (0, Xn.default)(Ol.A)(ql || (ql = (0, Gn.A)(["\n  &.MuiChip-root {\n    background-color: #f4f5f9;\n    color: #5e5e60;\n    font-weight: 400;\n    width: fit-content;\n  }\n\n  .MuiChip-label {\n    font-size: ", ";\n    font-family: ", ";\n  }\n"])), function(n) {
                    return n.theme.fontSizes.xs
                }, function(n) {
                    return n.theme.typography.quaternary
                }),
                ts = (0, Xn.default)(ns.A)(Ll || (Ll = (0, Gn.A)(["\n  && {\n    color: ", ";\n    font-weight: 600;\n    font-size: ", ";\n    font-family: ", ";\n    text-transform: none;\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"])), function(n) {
                    return n.theme.colors.brand.primary.main
                }, function(n) {
                    return n.theme.fontSizes.xs
                }, function(n) {
                    return n.theme.typography.quaternary
                }, function(n) {
                    return n.theme.colors.brand.primary.quaternary
                }),
                is = function(n) {
                    var e = n.filtersApplied,
                        t = n.onClear;
                    if (!e || 0 === e.length) return null;
                    var i = e.map(function(n) {
                        return n.label
                    }).join(", ");
                    return (0, Kn.jsxs)(Ro.A, {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: 2,
                        children: [(0, Kn.jsx)(es, {
                            label: (0, Kn.jsxs)(Kn.Fragment, {
                                children: [(0, dt.fk)("Documento", e.length), ": ", " ", i]
                            })
                        }, "chip-features"), (0, Kn.jsx)(ts, {
                            variant: "text",
                            onClick: t,
                            children: "Limpar"
                        })]
                    })
                },
                as = function(n) {
                    var e = n.search,
                        t = n.setSearch,
                        i = n.documents,
                        a = n.setDocuments,
                        o = n.loading,
                        r = n.isUniversalJusfinder,
                        l = (0, Nn.useState)(!1),
                        s = (0, Ln.A)(l, 2),
                        c = s[0],
                        d = s[1],
                        u = (0, Nn.useState)([]),
                        p = (0, Ln.A)(u, 2),
                        f = p[0],
                        m = p[1],
                        h = (0, be.lc)().HandleEvent,
                        x = function() {
                            d(!1)
                        };
                    return (0, Kn.jsxs)(Kn.Fragment, {
                        children: [(0, Kn.jsx)(bl.D, {
                            open: c,
                            onClose: x,
                            children: (0, Kn.jsxs)(Ro.A, {
                                sx: {
                                    width: 380,
                                    p: 3
                                },
                                role: "presentation",
                                children: [(0, Kn.jsx)(_l.A, {
                                    variant: "h6",
                                    gutterBottom: !0,
                                    children: "Tipo de documento"
                                }), (0, Kn.jsx)(zl, {
                                    values: f,
                                    setValues: m
                                }), (0, Kn.jsx)(Ro.A, {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: 2,
                                    children: (0, Kn.jsxs)(Cl, {
                                        children: [(0, Kn.jsx)(kl, {
                                            onClick: function() {
                                                h("Smart filter clean drawer clicked", {
                                                    isUniversalJusfinder: r
                                                }), m([])
                                            },
                                            children: "Limpar"
                                        }), (0, Kn.jsx)(Sl, {
                                            onClick: function() {
                                                a((0, tt.A)(f)), f.length > 0 && h("Smart filter documents selected", {
                                                    isUniversalJusfinder: r,
                                                    documents: f.map(function(n) {
                                                        return n.label
                                                    })
                                                }), x()
                                            },
                                            children: "Aplicar"
                                        })]
                                    })
                                })]
                            })
                        }), (0, Kn.jsxs)("div", {
                            className: "d-flex flex-column w-100",
                            style: {
                                gap: 12,
                                opacity: 1,
                                padding: 24,
                                borderRadius: "var(--bs-border-radius-lg)",
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: "#E5E7EB",
                                backgroundColor: "#FFFFFF"
                            },
                            children: [(0, Kn.jsxs)("div", {
                                className: "d-flex w-100",
                                style: {
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 16
                                },
                                children: [(0, Kn.jsx)(yl.S, {
                                    loading: o,
                                    search: e,
                                    onChange: function(n) {
                                        return t(n.target.value)
                                    },
                                    placeholder: "Pesquisa pelo t\xedtulo, descri\xe7\xe3o ou resultados obtidos na consulta",
                                    flex: "1",
                                    width: "100%"
                                }), (0, Kn.jsx)(Al.c, {
                                    width: "10%",
                                    icon: (0, zn.oK)("/media/jusfinder/filter-2--funnel-filter-angle-oil.svg"),
                                    onClick: function() {
                                        m((0, tt.A)(i)), d(!0), h("Smart filter button clicked", {
                                            isUniversalJusfinder: r
                                        })
                                    },
                                    loading: o
                                })]
                            }), (0, Kn.jsx)(is, {
                                filtersApplied: i,
                                onClear: function() {
                                    return a([])
                                }
                            })]
                        })]
                    })
                },
                os = Xn.default.div(Il || (Il = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n"]))),
                rs = (0, Xn.default)(os)(Fl || (Fl = (0, Gn.A)(["\n  margin-top: 0;\n  gap: 16px;\n"]))),
                ls = Xn.default.h1(Ul || (Ul = (0, Gn.A)(["\n  color: ", ";\n  font-size: 20px;\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.colors.black.primary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                ss = (0, Xn.default)(ls)(Ql || (Ql = (0, Gn.A)(['\n  color: #5e5e60;\n  text-align: center;\n  font-family: "Noto Sans";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n']))),
                cs = Xn.default.span(Vl || (Vl = (0, Gn.A)(["\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                ds = (0, Xn.default)(cs)(Bl || (Bl = (0, Gn.A)(["\n  color: #5e5e60;\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n"]))),
                us = (0, Xn.default)(Dn.A)($l || ($l = (0, Gn.A)(["\n  width: ", "px;\n  height: ", "px;\n  cursor: pointer;\n"])), function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                }),
                ps = Xn.default.div(Jl || (Jl = (0, Gn.A)(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  padding: ", ";\n  gap: ", ";\n  border-radius: 7px;\n  border: 1px solid #ebedf3;\n  background: #ffffff;\n"])), function(n) {
                    var e = n.sWidth;
                    return e || "100%"
                }, function(n) {
                    var e = n.sHeight;
                    return null !== e && void 0 !== e ? e : "fit-content"
                }, function(n) {
                    var e = n.sPadding;
                    return null !== e && void 0 !== e ? e : "24px"
                }, function(n) {
                    var e = n.gap;
                    return null !== e && void 0 !== e ? e : "16px"
                }),
                fs = function(n) {
                    var e = n.children,
                        t = n.sWidth,
                        i = n.sHeight,
                        a = n.gap,
                        o = n.sPadding;
                    return (0, Kn.jsx)(ps, {
                        sWidth: t,
                        sHeight: i,
                        gap: a,
                        sPadding: o,
                        children: e
                    })
                },
                ms = function() {
                    return (0, Kn.jsx)(fs, {
                        sPadding: "64px 24px",
                        children: (0, Kn.jsxs)(rs, {
                            children: [(0, Kn.jsx)(us, {
                                src: (0, zn.oK)("/media/jusfinder/icon-filters-empty.svg"),
                                width: "266"
                            }), (0, Kn.jsxs)("div", {
                                children: [(0, Kn.jsx)(ss, {
                                    children: "Nenhuma consulta encontrada"
                                }), (0, Kn.jsxs)(ds, {
                                    children: [" ", "Ajuste os filtros aplicados e tente novamente."]
                                })]
                            })]
                        })
                    })
                },
                hs = Xn.default.div(Kl || (Kl = (0, Gn.A)(["\n  position: relative;\n  width: 100%;\n\n  flex-grow: 1;\n  cursor: pointer;\n\n  ", "\n\n  @media (max-width: 578px) {\n    width: 100%;\n  }\n"])), function(n) {
                    return n.isMaintenance ? "\npointer-events: none;\n" : ""
                }),
                xs = Xn.default.div(Wl || (Wl = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n  padding: 24px;\n  align-items: center;\n  height: 100%;\n  justify-content: center;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                gs = Xn.default.div(Hl || (Hl = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  min-height: 48px;\n  h1 {\n    color: #017858;\n    text-align: center;\n    font-family: ", ";\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 110%;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                vs = Xn.default.div(Yl || (Yl = (0, Gn.A)(["\n  display: flex;\n  gap: 16px;\n"]))),
                ys = Xn.default.div(Gl || (Gl = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))),
                bs = (Xn.default.div(Xl || (Xl = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n\n  span {\n    font-family: ", ";\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n  }\n\n  span.highlight {\n    text-decoration: underline;\n  }\n\n  span.left {\n    text-align: left;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(Zl || (Zl = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: 24px;\n  margin-top: 8px;\n  text-align: center;\n  p {\n    color: #535353;\n    font-weight: 400;\n    font-size: 14px;\n    opacity: 0.8;\n  }\n"])))),
                As = function(n) {
                    var e = n.onClick,
                        t = n.height,
                        i = void 0 === t ? "280.56px" : t;
                    return (0, Kn.jsx)(hs, {
                        children: (0, Kn.jsx)(Mo.A, {
                            height: i,
                            children: (0, Kn.jsxs)(xs, {
                                children: [(0, Kn.jsx)(gs, {
                                    children: (0, Kn.jsx)("h1", {
                                        children: "M\xfaltiplas Consultas"
                                    })
                                }), (0, Kn.jsx)(bs, {
                                    children: (0, Kn.jsx)("p", {
                                        children: "Realize v\xe1rias consultas no mesmo documento de uma vez s\xf3"
                                    })
                                }), (0, Kn.jsx)(vs, {
                                    children: (0, Kn.jsx)(qn.A, {
                                        borderRadius: "5px",
                                        padding: "10px 40px",
                                        variant: "contained",
                                        onClick: e,
                                        children: (0, Kn.jsx)(ys, {
                                            children: "Come\xe7ar"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                };

            function _s(n) {
                return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            }

            function js(n) {
                return _s(n).split(/[\s,.;:!?/()'"-]+/).filter(Boolean)
            }

            function Cs(n, e) {
                if (0 === e.length) return 0;
                var t = new Set([].concat((0, tt.A)(js(n.name)), (0, tt.A)(n.tags.flatMap(js)), (0, tt.A)(n.contexts.flatMap(js)), (0, tt.A)(n.documents ? n.documents.map(_s) : [])));
                return e.reduce(function(n, e) {
                    var i = _s(e);
                    return t.has(i) ? n + 1 : n
                }, 0)
            }

            function ws(n, e) {
                var t = (0, Nn.useState)(""),
                    i = (0, Ln.A)(t, 2),
                    a = i[0],
                    o = i[1],
                    r = (0, Nn.useState)(""),
                    l = (0, Ln.A)(r, 2),
                    s = l[0],
                    c = l[1],
                    d = (0, Nn.useState)(n),
                    u = (0, Ln.A)(d, 2),
                    p = u[0],
                    f = u[1],
                    m = (0, be.lc)().HandleEvent;
                return (0, Nn.useEffect)(function() {
                    var n = setTimeout(function() {
                        return c(a)
                    }, 1e3);
                    return function() {
                        return clearTimeout(n)
                    }
                }, [a]), (0, Nn.useEffect)(function() {
                    var t = js(s),
                        i = new Set(e.map(function(n) {
                            return n.name
                        }));
                    if (0 !== t.length || 0 !== i.size) {
                        var a = n.map(function(n) {
                            return (0, Re.A)((0, Re.A)({}, n), {}, {
                                score: Cs(n, t)
                            })
                        }).filter(function(n) {
                            var e, a, o = 0 === t.length || (null !== (e = n.score) && void 0 !== e ? e : 0) > 0,
                                r = 0 === i.size || (null === (a = n.documents) || void 0 === a ? void 0 : a.some(function(n) {
                                    return i.has(n)
                                }));
                            return o && r
                        }).sort(function(n, e) {
                            var t, i;
                            return (null !== (t = e.score) && void 0 !== t ? t : 0) - (null !== (i = n.score) && void 0 !== i ? i : 0)
                        });
                        f(a), a.length > 0 && m("Smart search match found", {
                            searchTerm: s || "(none)",
                            resultsCount: a.length,
                            matchedQueries: a.map(function(n) {
                                return n.name
                            }),
                            usedDocuments: Array.from(i)
                        })
                    } else f(n)
                }, [n, s, e]), {
                    search: a,
                    setSearch: o,
                    results: p
                }
            }
            var ks = t(51784),
                Ss = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n() {
                        var e;
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.p = n.n) {
                                case 0:
                                    return n.p = 0, n.n = 1, rt.A.get("".concat(ks.$.jusfyBackend.apiUrl, "/products"));
                                case 1:
                                    return n.a(2, n.v);
                                case 2:
                                    return n.p = 2, e = n.v, ti.oR.error("Erro ao carregar produtos"), n.a(2, e)
                            }
                        }, n, null, [
                            [0, 2]
                        ])
                    }));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }(),
                Ps = t(61611),
                Es = t(94818),
                Rs = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        var t;
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.p = n.n) {
                                case 0:
                                    return n.p = 0, n.n = 1, rt.A.post("".concat(ks.$.jusfyBackend.apiUrl, "/favorite-queries"), {
                                        feature_name: e
                                    });
                                case 1:
                                    return n.a(2, n.v);
                                case 2:
                                    return n.p = 2, t = n.v, ti.oR.error("Erro ao adicionar query aos favoritos"), n.a(2, t)
                            }
                        }, n, null, [
                            [0, 2]
                        ])
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                Ms = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        var t;
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.p = n.n) {
                                case 0:
                                    return n.p = 0, n.n = 1, rt.A.delete("".concat(ks.$.jusfyBackend.apiUrl, "/favorite-queries/").concat(e));
                                case 1:
                                    return n.a(2, n.v);
                                case 2:
                                    return n.p = 2, t = n.v, ti.oR.error("Erro ao remover query dos favoritos"), n.a(2, t)
                            }
                        }, n, null, [
                            [0, 2]
                        ])
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                Os = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        var t;
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.p = n.n) {
                                case 0:
                                    return n.p = 0, n.n = 1, rt.A.put("".concat(ks.$.jusfyBackend.apiUrl, "/favorite-queries/reorder"), e);
                                case 1:
                                    return n.a(2, n.v);
                                case 2:
                                    return n.p = 2, t = n.v, ti.oR.error("Erro ao reordenar queries"), n.a(2, t)
                            }
                        }, n, null, [
                            [0, 2]
                        ])
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                Ts = t(92901),
                Ns = t(23029),
                Ds = (0, Ts.A)(function n() {
                    (0, Ns.A)(this, n)
                });
            Ds.CONTINUE = 100, Ds.OK = 200, Ds.CREATED = 201, Ds.ACCEPTED = 202, Ds.NO_CONTENT = 204, Ds.MOVED_PERMANENTLY = 301, Ds.FOUND = 302, Ds.NOT_MODIFIED = 304, Ds.BAD_REQUEST = 400, Ds.UNAUTHORIZED = 401, Ds.FORBIDDEN = 403, Ds.NOT_FOUND = 404, Ds.CONFLICT = 409, Ds.INTERNAL_SERVER_ERROR = 500, Ds.NOT_IMPLEMENTED = 501, Ds.BAD_GATEWAY = 502, Ds.SERVICE_UNAVAILABLE = 503;
            var zs, qs, Ls, Is, Fs, Us, Qs, Vs, Bs, $s, Js, Ks, Ws, Hs, Ys, Gs, Xs, Zs, nc, ec, tc, ic, ac, oc, rc, lc, sc, cc, dc, uc, pc, fc, mc, hc, xc, gc, vc, yc, bc, Ac, _c, jc, Cc, wc, kc, Sc, Pc, Ec, Rc, Mc, Oc, Tc, Nc, Dc, zc, qc, Lc, Ic, Fc, Uc = function(n) {
                    var e = n.dataQueries,
                        t = n.refetchQueries,
                        i = (0, be.lc)().HandleEvent,
                        a = (0, Nn.useState)([]),
                        o = (0, Ln.A)(a, 2),
                        r = o[0],
                        l = o[1],
                        s = (0, Nn.useMemo)(function() {
                            return new Set(r.map(function(n) {
                                return n.identification
                            }))
                        }, [r]),
                        c = (0, Nn.useCallback)(function(n) {
                            return s.has(n)
                        }, [s]),
                        d = (0, Nn.useCallback)(function(n) {
                            l(n.filter(function(n) {
                                return n.is_favorite
                            }).sort(function(n, e) {
                                return n.favorite_order - e.favorite_order
                            }))
                        }, []),
                        u = (0, Nn.useCallback)(function(n) {
                            return (0, Ba.A)((0, Va.A)().m(function a() {
                                var o;
                                return (0, Va.A)().w(function(a) {
                                    for (;;) switch (a.n) {
                                        case 0:
                                            if (!c(n)) {
                                                a.n = 2;
                                                break
                                            }
                                            return l(function(e) {
                                                return e.filter(function(e) {
                                                    return e.identification !== n
                                                })
                                            }), a.n = 1, Ms(n);
                                        case 1:
                                            a.v.status === Ds.OK ? (ti.oR.success("Consulta removida dos favoritos"), i("Removed Favorite Query: ".concat(n))) : ti.oR.error("Falha ao remover consultas dos favoritos"), a.n = 5;
                                            break;
                                        case 2:
                                            if (o = e.find(function(e) {
                                                    return e.identification === n
                                                })) {
                                                a.n = 3;
                                                break
                                            }
                                            return a.a(2);
                                        case 3:
                                            return l(function(n) {
                                                return [].concat((0, tt.A)(n), [o])
                                            }), a.n = 4, Rs(n);
                                        case 4:
                                            a.v.status === Ds.CREATED ? (ti.oR.success("Consulta adicionada aos favoritos"), i("Added Favorite Query: ".concat(n))) : ti.oR.error("Falha ao adicionar consultas dos favoritos");
                                        case 5:
                                            return a.n = 6, t();
                                        case 6:
                                            return a.a(2)
                                    }
                                }, a)
                            }))
                        }, [e, c, t]),
                        p = (0, Ps.FR)((0, Ps.MS)(Ps.AN), (0, Ps.MS)(Ps.uN, {
                            coordinateGetter: Es.JR
                        })),
                        f = (0, Nn.useCallback)(function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                var t, i, a, o, s;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            if (t = e.active, (i = e.over) && t.id !== i.id) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            if (a = r.findIndex(function(n) {
                                                    return "".concat(n.id) === t.id
                                                }), o = r.findIndex(function(n) {
                                                    return "".concat(n.id) === i.id
                                                }), !(a < 0 || o < 0)) {
                                                n.n = 2;
                                                break
                                            }
                                            return n.a(2);
                                        case 2:
                                            return s = (0, Es.be)(r, a, o), l(s), n.n = 3, Os({
                                                products: s.map(function(n, e) {
                                                    return {
                                                        feature_name: n.identification,
                                                        order: e
                                                    }
                                                })
                                            });
                                        case 3:
                                            return n.a(2)
                                    }
                                }, n)
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(), [r]);
                    return {
                        favoriteCards: r,
                        setFavoriteCards: l,
                        initFavoritesFromQueries: d,
                        isCardFavorited: c,
                        handleFavoriteClick: u,
                        sensors: p,
                        handleDragEnd: f
                    }
                },
                Qc = t(45839),
                Vc = t(70373),
                Bc = Xn.default.div(zs || (zs = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 118px;\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid var(--gray-300, #E7E8EC);\n  background: var(--gray-0, #FFF);\n  padding: 16px;\n  @media (min-width: 900px) {\n   width: 200px;\n  }\n"]))),
                $c = Xn.default.div(qs || (qs = (0, Gn.A)(["\n  color: var(--gray-900, #131313);\n  font-family: var(--font-family-font-family-title, 'Noto Sans');\n  font-size: var(--font-size-font-size-14, 14px);\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n"]))),
                Jc = Xn.default.div(Ls || (Ls = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n"]))),
                Kc = Xn.default.div(Is || (Is = (0, Gn.A)(["\n  display: flex;\n  width: 50px;\n  height: 34px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  border-radius: 4px;\n  background: #e6f7f2;\n\n  color: #383839;\n  text-align: center;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Wc = (0, Xn.default)(Dn.A)(Fs || (Fs = (0, Gn.A)(["\n  width: ", ";\n  height: ", ";\n"])), function(n) {
                    return n.size
                }, function(n) {
                    return n.size
                }),
                Hc = Xn.default.button(Us || (Us = (0, Gn.A)(["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  border: 1px solid var(--brand-primary-primary-main, #01ab7d);\n  background: var(--neutral-background-background-lighter, #fff);\n"]))),
                Yc = Xn.default.div(Qs || (Qs = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: ", ";\n"])), function(n) {
                    return n.hasCredits ? "end" : "center"
                }),
                Gc = t(33618),
                Xc = t(90531),
                Zc = function(n) {
                    var e = n.query;
                    return !n.unavailable && e.is_unlimited ? (0, Kn.jsx)(Yo.A, {
                        text: "Ilimitados",
                        height: "21px"
                    }) : e.credit ? (0, Kn.jsx)(Yo.A, {
                        text: "".concat((0, Xc.td)("cr\xe9dito", e.credit, "cr\xe9ditos")),
                        height: "21px"
                    }) : (0, Kn.jsx)(Yo.A, {
                        color: "#D71D1D",
                        backgroundColor: "rgba(255, 229, 229, 0.8)",
                        text: "Sem cr\xe9ditos",
                        height: "21px"
                    })
                },
                nd = function(n) {
                    var e = n.query;
                    return (0, Kn.jsxs)(Kc, {
                        children: [(0, Kn.jsx)(Wc, {
                            src: (0, zn.oK)("/media/jusfinderuniversal/credit-dolar.svg")
                        }), e.universal_price]
                    })
                },
                ed = function(n) {
                    var e = n.id,
                        t = n.query,
                        i = n.onClick,
                        a = n.onClickFavorite,
                        o = n.unavailable,
                        r = (0, Es.gl)({
                            id: e
                        }),
                        l = r.attributes,
                        s = r.listeners,
                        c = r.setNodeRef,
                        d = r.transform,
                        u = r.transition,
                        p = void 0 !== t.credit,
                        f = {
                            transform: Gc.Ks.Transform.toString(d),
                            transition: u
                        };
                    return (0, Kn.jsxs)(Bc, (0, Re.A)((0, Re.A)((0, Re.A)({
                        ref: c,
                        style: f
                    }, l), s), {}, {
                        children: [(0, Kn.jsxs)(Jc, {
                            children: [(0, Kn.jsx)($c, {
                                children: t.name
                            }), (0, Kn.jsx)(zo, {
                                onPointerDown: function(n) {
                                    return n.stopPropagation()
                                },
                                onClick: a,
                                favorited: !0
                            })]
                        }), (0, Kn.jsxs)(Yc, {
                            hasCredits: p,
                            children: [p ? (0, Kn.jsx)(Zc, {
                                query: t,
                                unavailable: o
                            }) : (0, Kn.jsx)(nd, {
                                query: t
                            }), (0, Kn.jsx)(Hc, {
                                onPointerDown: function(n) {
                                    return n.stopPropagation()
                                },
                                onClick: function(n) {
                                    return i(n, t)
                                },
                                children: (0, Kn.jsx)(Wc, {
                                    src: (0, zn.oK)("/media/jusfinderuniversal/arrow.svg"),
                                    size: "20px"
                                })
                            })]
                        })]
                    }))
                },
                td = Xn.default.p(Vs || (Vs = (0, Gn.A)(["\n  color: var(--gray-900, #131313);\n  font-family: var(--font-family-font-family-title, 'Noto Sans');\n  font-size: var(--font-size-font-size-20, 20px);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"]))),
                id = function(n) {
                    var e = n.favoriteCards,
                        t = n.sensors,
                        i = n.loading,
                        a = n.handleDragEnd,
                        o = n.onClickCard,
                        r = n.handleFavoriteClick;
                    return 0 === e.length ? null : (0, Kn.jsxs)(Kn.Fragment, {
                        children: [(0, Kn.jsx)(td, {
                            children: "Favoritos"
                        }), !i && (0, Kn.jsx)(Ps.Mp, {
                            sensors: t,
                            collisionDetection: Ps.fp,
                            onDragEnd: a,
                            children: (0, Kn.jsx)(Es.gB, {
                                items: e.map(function(n) {
                                    return "".concat(n.id)
                                }),
                                strategy: Es.m$,
                                children: (0, Kn.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        gap: "16px",
                                        width: "100%",
                                        paddingBottom: "16px"
                                    },
                                    children: e.map(function(n) {
                                        return (0, Kn.jsx)(ed, {
                                            id: "".concat(n.id),
                                            query: n,
                                            onClickFavorite: r(n.identification),
                                            onClick: o
                                        }, "".concat(n.id))
                                    })
                                })
                            })
                        })]
                    })
                },
                ad = function() {
                    var n = function() {
                            var n = (0, Nn.useState)(null),
                                e = (0, Ln.A)(n, 2),
                                t = e[0],
                                i = e[1],
                                a = (0, Nn.useState)(!1),
                                o = (0, Ln.A)(a, 2),
                                r = o[0],
                                l = o[1],
                                s = (0, Nn.useState)([]),
                                c = (0, Ln.A)(s, 2),
                                d = c[0],
                                u = c[1],
                                p = ws(mt.Ds, d),
                                f = p.search,
                                m = p.setSearch,
                                h = p.results,
                                x = (0, Nn.useMemo)(function() {
                                    return new Set(h.map(function(n) {
                                        return n.id
                                    }))
                                }, [h]),
                                g = (0, Nn.useContext)(Wn),
                                v = g.shouldReload,
                                y = g.setShouldReload,
                                b = g.openModal,
                                A = g.fillQueries,
                                _ = g.modalCheckout,
                                j = g.setModalCheckout,
                                C = g.loadingModalCheckout,
                                w = g.setLoadingModalCheckout,
                                k = g.modal,
                                S = g.modalSuggestion,
                                P = g.setModalSuggestion,
                                E = g.setPage,
                                R = g.data,
                                M = g.setData,
                                O = (0, be.lc)().HandleEvent,
                                T = (0, Qc.I)({
                                    queryFn: function() {
                                        var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                            var e;
                                            return (0, Va.A)().w(function(n) {
                                                for (;;) switch (n.n) {
                                                    case 0:
                                                        return n.n = 1, Ss();
                                                    case 1:
                                                        return e = n.v, n.a(2, {
                                                            data: (0, dt.vt)(e.data.data),
                                                            availableCredits: e.data.availableCredits
                                                        })
                                                }
                                            }, n)
                                        }));
                                        return function() {
                                            return n.apply(this, arguments)
                                        }
                                    }(),
                                    onSuccess: function(n) {
                                        M(n.data), F(n.data)
                                    },
                                    queryKey: ["queries"],
                                    refetchOnMount: !0
                                }),
                                N = T.isLoading,
                                D = T.refetch,
                                z = Uc({
                                    dataQueries: R,
                                    refetchQueries: D
                                }),
                                q = z.favoriteCards,
                                L = z.handleDragEnd,
                                I = z.handleFavoriteClick,
                                F = z.initFavoritesFromQueries,
                                U = z.isCardFavorited,
                                Q = z.sensors,
                                V = (0, Nn.useMemo)(function() {
                                    return new Set(q.map(function(n) {
                                        return n.identification
                                    }))
                                }, [q]),
                                B = (0, Nn.useMemo)(function() {
                                    var n = f.trim().length > 0 || d.length > 0 ? null === R || void 0 === R ? void 0 : R.filter(function(n) {
                                        return x.has(n.identification)
                                    }) : R;
                                    return null === n || void 0 === n ? void 0 : n.filter(function(n) {
                                        return !V.has(n.identification)
                                    })
                                }, [f, d, R, x, V]),
                                $ = (0, Nn.useMemo)(function() {
                                    return f.trim().length > 0 || d.length > 0 ? null === q || void 0 === q ? void 0 : q.filter(function(n) {
                                        return x.has(n.identification)
                                    }) : q
                                }, [f, d, q, x]),
                                J = (0, Nn.useMemo)(function() {
                                    return !N && (null === R || void 0 === R ? void 0 : R.length) > 0 && 0 === (null === B || void 0 === B ? void 0 : B.length)
                                }, [N, R, B]);
                            return (0, Nn.useEffect)(function() {
                                v && (y(!1), D())
                            }, [v, y, D]), {
                                loading: N,
                                data: R,
                                isSubscriptionModalOpen: r,
                                setIsSubscriptionModalOpen: l,
                                onClick: function(n, e) {
                                    n && n.stopPropagation(), A(), i(null === e || void 0 === e ? void 0 : e.identification), O("Query Type Selected", {
                                        query_type: e.identification
                                    }), (0, dt.WA)(e, b)
                                },
                                setShouldReload: y,
                                modalCheckout: _,
                                setModalCheckout: j,
                                loadingModalCheckout: C,
                                setLoadingModalCheckout: w,
                                modal: k,
                                querieSelected: t,
                                setQuerySelected: i,
                                openModal: b,
                                openSchedule: function() {
                                    O("Jusfinder - CTA M\xfaltiplas Consultas", {
                                        action: "open_schedule"
                                    });
                                    var n = window.open(mt.Ui, "_blank", "noopener,noreferrer");
                                    n && (n.opener = null)
                                },
                                modalSuggestion: S,
                                setModalSuggestion: P,
                                ChangePageQuery: function() {
                                    E("MultipleQueriesPage"), Vc.j.track({
                                        event: "Card MultipleQueries Clicked",
                                        properties: {
                                            category: "core_usage",
                                            owner: "Jusfinder",
                                            relevant_user_activity: !0,
                                            event_meaning: "Usu\xe1rio clicou no card de M\xfaltiplas Consultas para ir para a p\xe1gina de M\xfaltiplas Consultas",
                                            isUniversal: !1
                                        },
                                        context: {
                                            groupId: "jusfinder-group",
                                            library: {
                                                name: "jusfinder-library",
                                                componente: "card-multiple-queries"
                                            }
                                        }
                                    })
                                },
                                favoriteCards: q,
                                handleDragEnd: L,
                                handleFavoriteClick: I,
                                initFavoritesFromQueries: F,
                                isCardFavorited: U,
                                sensors: Q,
                                filteredFavoritesData: $,
                                filteredData: B,
                                isEmpty: J,
                                search: f,
                                setSearch: m,
                                documents: d,
                                setDocuments: u
                            }
                        }(),
                        e = n.loading,
                        t = n.filteredData,
                        i = n.onClick,
                        a = n.modalCheckout,
                        o = n.setModalCheckout,
                        r = n.loadingModalCheckout,
                        l = n.setLoadingModalCheckout,
                        s = n.querieSelected,
                        c = n.openModal,
                        d = n.modalSuggestion,
                        u = n.setModalSuggestion,
                        p = n.ChangePageQuery,
                        f = n.filteredFavoritesData,
                        m = n.sensors,
                        h = n.handleDragEnd,
                        x = n.handleFavoriteClick,
                        g = n.isCardFavorited,
                        v = n.isEmpty,
                        y = n.search,
                        b = n.setSearch,
                        A = n.documents,
                        _ = n.setDocuments;
                    return (0, Kn.jsxs)(cl, {
                        children: [(0, Kn.jsx)(as, {
                            search: y,
                            setSearch: b,
                            documents: A,
                            setDocuments: _,
                            loading: e,
                            isUniversalJusfinder: !1
                        }), e && ll.map(function(n, e) {
                            return (0, Kn.jsx)(Eo.A, {
                                variant: "rounded",
                                width: 350,
                                height: 261,
                                animation: "wave",
                                style: {
                                    flexGrow: 1
                                }
                            }, e)
                        }), v && (0, Kn.jsx)(ms, {}), (0, Kn.jsx)(id, {
                            favoriteCards: f,
                            sensors: m,
                            handleDragEnd: h,
                            onClickCard: i,
                            handleFavoriteClick: x,
                            loading: e
                        }), f.length > 0 && !v && (0, Kn.jsx)(dl, {
                            children: "Consultas"
                        }), (0, Kn.jsxs)(Ro.A, {
                            sx: {
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(auto-fill, minmax(250px, 1fr))",
                                    md: "repeat(auto-fill, minmax(280px, 1fr))",
                                    lg: "repeat(auto-fill, minmax(300px, 1fr))"
                                },
                                gap: 3,
                                width: "100%",
                                margin: "0 auto",
                                justifyContent: "center"
                            },
                            children: [!e && (0, Kn.jsxs)(Kn.Fragment, {
                                children: [(null === t || void 0 === t ? void 0 : t.length) > 0 && (0, Kn.jsx)(As, {
                                    onClick: p
                                }), t && (null === t || void 0 === t ? void 0 : t.map(function(n) {
                                    return (0, Kn.jsx)(ar, {
                                        queryOption: n,
                                        onClick: function(e) {
                                            return i(e, n)
                                        },
                                        openModal: c,
                                        onFavoriteClick: x(n.identification),
                                        isCardFavorited: g
                                    }, n.id)
                                }))]
                            }), !e && Array.from({
                                length: Math.max(0, ft.vd - t.length - 1)
                            }).map(function(n, e) {
                                return (0, Kn.jsx)(Ro.A, {
                                    sx: {
                                        width: "100%",
                                        height: 0,
                                        paddingBottom: "100px",
                                        visibility: "hidden"
                                    }
                                }, "placeholder-".concat(e))
                            })]
                        }), (0, Kn.jsx)(Ir, {
                            visible: a,
                            setModalCheckout: o,
                            loadingCheckout: r,
                            setLoadingCheckout: l,
                            identification: s
                        }), (0, Kn.jsx)(vl, {
                            openModal: d,
                            setOpenModal: u,
                            url: ft.sK
                        })]
                    })
                },
                od = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.n) {
                                case 0:
                                    return n.n = 1, rt.A.delete("".concat("https://backend.jusfy.com.br/api", "/queries/").concat(e));
                                case 1:
                                    return n.a(2, n.v)
                            }
                        }, n)
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                rd = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.n) {
                                case 0:
                                    return n.n = 1, rt.A.get(e);
                                case 1:
                                    return n.a(2, n.v)
                            }
                        }, n)
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                ld = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.n) {
                                case 0:
                                    return n.n = 1, rt.A.put("".concat("https://backend.jusfy.com.br/api", "/queries/").concat(e));
                                case 1:
                                    return n.a(2, n.v)
                            }
                        }, n)
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                sd = Xn.default.div(Bs || (Bs = (0, Gn.A)(["\n  position: relative;\n"]))),
                cd = Xn.default.button($s || ($s = (0, Gn.A)(['\n  display: flex;\n  width: 32px;\n  height: 32px;\n  padding: 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 4px;\n  position: relative;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 8px;\n    background-image: url("/media/jusfinder/icon-button.svg");\n    left: 8px;\n    background-size: cover;\n    width: 16px;\n    height: 16px;\n    background-color: transparent;\n  }\n']))),
                dd = Xn.default.div(Js || (Js = (0, Gn.A)(["\n  display: ", ";\n  flex-direction: column;\n  align-items: flex-start;\n  position: absolute;\n  background-color: #fff;\n  width: 144px;\n  top: 30px;\n  left: -110px;\n  border-radius: 4px;\n  padding: 8px 0 8px 0;\n  z-index: 99;\n  box-shadow: 0px 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);\n\n  div {\n    padding: 6px 16px;\n    width: 100%;\n\n    span {\n      margin-right: 0px !important;\n      color: #383839;\n      font-family: ", ";\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 150%;\n      letter-spacing: 0.15px;\n    }\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.04);\n      cursor: pointer;\n    }\n  }\n"])), function(n) {
                    return n.open ? "flex" : "none"
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                ud = Xn.default.div(Ks || (Ks = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: not-allowed;\n"]))),
                pd = function(n) {
                    var e = n.onClick,
                        t = n.menuOpen,
                        i = void 0 !== t && t,
                        a = n.itemsMenu,
                        o = void 0 === a ? [] : a,
                        r = n.status,
                        l = n.reprocessLoading;
                    return (0, Kn.jsxs)(sd, {
                        children: [(0, Kn.jsx)(cd, {
                            status: r,
                            onClick: e,
                            type: "button",
                            "aria-haspopup": "menu",
                            "aria-expanded": i,
                            "aria-label": "Abrir menu de a\xe7\xf5es"
                        }), (0, Kn.jsx)(dd, {
                            open: i,
                            status: r,
                            children: o && (null === o || void 0 === o ? void 0 : o.map(function(n, e) {
                                return (0, Kn.jsx)("div", {
                                    onClick: l && "Refazer consulta" === n.text ? null : n.action,
                                    children: l && "Refazer consulta" === n.text ? (0, Kn.jsx)(ud, {
                                        children: (0, Kn.jsx)(Dn.A, {
                                            src: (0, zn.oK)("/media/jusfinder/loading-process-jusfinder.svg"),
                                            width: "16px",
                                            height: "16px",
                                            "aria-label": "Carregando"
                                        })
                                    }) : (0, Kn.jsx)("span", {
                                        children: n.text
                                    })
                                }, "".concat(n.text, "-").concat(e))
                            }))
                        })]
                    })
                },
                fd = (new Map([
                    ["professional_data", "Dados Profissionais"],
                    ["personal_data", "Localiza\xe7\xe3o"],
                    ["list_vehicles", "Ve\xedculos"],
                    ["credit_restriction", "Restri\xe7\xe3o de cr\xe9dito"],
                    ["company_information", "Empresa completo"],
                    ["company_partnership", "Sociedades"],
                    ["vehicle_data", "Dados de ve\xedculo"],
                    ["trademarks", "Marcas e patentes"],
                    ["cpf_registration_status", "Situa\xe7\xe3o cadastral de CPF"],
                    ["economic_group", "Grupo econ\xf4mico"],
                    ["relationship_tree", "Relacionamentos"],
                    ["legal_representative", "Empresas com o mesmo representante legal"],
                    ["owners", "Empresas com o mesmo quadro societ\xe1rio"],
                    ["rfcontact", "Empresas com o mesmo contato na Receita Federal"],
                    ["household", "Empresas com qualquer atividade no mesmo endere\xe7o"],
                    ["household_activity", "Empresas com atividade semelhante no endere\xe7o"]
                ]), new Map([
                    ["CPF", {
                        title: "CPF consultado",
                        maskedDocument: function(n) {
                            return (0, at.Oy)(n)
                        }
                    }],
                    ["CNPJ", {
                        title: "CNPJ consultado",
                        maskedDocument: function(n) {
                            return (0, at.kE)(n)
                        }
                    }]
                ]), "#E6F7F2"),
                md = "#FBEAEC",
                hd = (new Map([
                    ["household_activity", "Empresas com atividade semelhante no endere\xe7o"],
                    ["household", "Empresas com qualquer atividade no mesmo endere\xe7o"],
                    ["rfcontact", "Empresas com o mesmo contato na Receita Federal"],
                    ["owners", "Empresas com o mesmo quadro societ\xe1rio"],
                    ["legal_representative", "Empresas com o mesmo representante legal"]
                ]), new Map([
                    ["ATIVA", fd],
                    ["INATIVA", md]
                ]), Xn.default.div(Ws || (Ws = (0, Gn.A)(["\n  width: ", ';\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  &::after {\n    content: "Estamos finalizando a sua consulta. O retorno pode acontecer em at\xe9 24h.";\n    position: absolute;\n    bottom: 125%;\n    left: 50%;\n    transform: translateX(-50%);\n    color: #fff;\n    font-family: "Noto Sans";\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 100%;\n    border-radius: 5px;\n    background: #535353;\n    white-space: nowrap;\n    padding: 8px 16px;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;\n    pointer-events: none;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    bottom: 115%;\n    left: 50%;\n    top: -8px;\n    transform: translateX(-50%);\n    border-width: 6px;\n    border-style: solid;\n    border-color: #535353 transparent transparent;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;\n    pointer-events: none;\n  }\n\n  &:hover::after,\n  &:hover::before {\n    opacity: 1;\n    visibility: ', ";\n  }\n"])), function(n) {
                    return n.width || "fit-content"
                }, function(n) {
                    return n.isTooltip ? "visible" : "hidden"
                })),
                xd = Xn.default.div(Hs || (Hs = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: ", ";\n  border-radius: 3px;\n  padding: 8px 12px;\n  gap: 8px;\n  width: ", ";\n"])), function(n) {
                    var e = n.background;
                    return e || "#F4F5F9"
                }, function(n) {
                    return n.width || "fit-content"
                }),
                gd = Xn.default.span(Ys || (Ys = (0, Gn.A)(["\n  color: #131313;\n  font-family: ", ";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n  margin: 0 !important;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                vd = (0, Xn.default)(Dn.A)(Gs || (Gs = (0, Gn.A)([""]))),
                yd = function(n) {
                    var e = n.text,
                        t = (n.isMobile, n.icon),
                        i = void 0 === t ? "" : t,
                        a = n.background,
                        o = void 0 === a ? "" : a,
                        r = n.width,
                        l = void 0 === r ? "" : r;
                    return (0, Kn.jsx)(hd, {
                        width: l,
                        isTooltip: "Processando..." === e,
                        children: (0, Kn.jsxs)(xd, {
                            background: o,
                            width: l,
                            children: [(0, Kn.jsx)(vd, {
                                src: i
                            }), (0, Kn.jsx)(gd, {
                                children: e
                            })]
                        })
                    })
                },
                bd = t(33761),
                Ad = new Map([
                    ["household_activity", "Grupo econ\xf4mico - Atividade semelhante no endere\xe7o"],
                    ["household", "Grupo econ\xf4mico - Qualquer atividade no endere\xe7o"],
                    ["rfcontact", "Grupo econ\xf4mico - Mesmo contato na Receita Federal"],
                    ["owners", "Grupo econ\xf4mico - Mesmo quadro societ\xe1rio"],
                    ["legal_representative", "Grupo econ\xf4mico - Mesmo representante legal"]
                ]),
                _d = [{
                    title: "Documento",
                    icon: (0, zn.oK)("/media/jusfinder/document-jusfinder.svg")
                }, {
                    title: "Cliente",
                    icon: (0, zn.oK)("/media/jusfinder/icon_type.svg")
                }, {
                    title: "Data",
                    icon: (0, zn.oK)("/media/jusfinder/calendar-jusfinder.svg")
                }, {
                    title: "Status",
                    icon: (0, zn.oK)("/media/jusfinder/tag-status.svg")
                }, {
                    title: "A\xe7\xf5es",
                    icon: (0, zn.oK)("/media/jusfinder/icon-action.svg")
                }],
                jd = {
                    success: (0, Kn.jsx)(yd, {
                        text: "Realizada",
                        icon: (0, zn.oK)("/media/jusfinder/notification-active.svg"),
                        background: fd,
                        width: "104px"
                    }),
                    pending: (0, Kn.jsx)(yd, {
                        text: "Processando...",
                        background: "#FFF9E6",
                        icon: (0, zn.oK)("/media/jusfinder/loading-process-jusfinder.svg")
                    }),
                    error: (0, Kn.jsxs)(bd.bQ, {
                        children: [(0, Kn.jsx)(yd, {
                            text: "Erro",
                            background: md,
                            width: "fit-content",
                            icon: (0, zn.oK)("/media/jusfinder/notification-error.svg")
                        }), (0, Kn.jsx)(bd.FS, {
                            title: "Consultas com erro s\xe3o exclu\xeddas automaticamente ap\xf3s 7 dias.",
                            placement: "top",
                            arrow: !0,
                            children: (0, Kn.jsx)(bd.K0, {
                                children: "i"
                            })
                        })]
                    }),
                    error_global: (0, Kn.jsx)(yd, {
                        text: "Erro na consulta",
                        background: md,
                        width: "fit-content",
                        icon: (0, zn.oK)("/media/jusfinder/notification-error.svg")
                    })
                },
                Cd = t(88596),
                wd = t(151),
                kd = t(12104),
                Sd = t(85206),
                Pd = {
                    relationship_tree: function(n) {
                        return "/relation_query/".concat(n.document_type, "/").concat(n.id)
                    },
                    professional_data: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    lawsuit: function(n) {
                        return "/processual_query/".concat(n.document_type, "/").concat(n.id)
                    },
                    personal_data: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    list_vehicles: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    credit_restriction: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    company_information: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    company_partnership: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    vehicle_data: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    trademarks: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    cpf_registration_status: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    economic_group: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    vehicle_tracking: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    }
                },
                Ed = function(n) {
                    var e = Pd[n.feature_type_name];
                    return e ? e(n) : null
                },
                Rd = function(n, e) {
                    return "Grupo Econ\xf4mico de CNPJ" === n ? Ad.get(e) : n
                },
                Md = function(n) {
                    var e, t = "pending" === (null === n || void 0 === n ? void 0 : n.status),
                        i = null !== (e = null === n || void 0 === n ? void 0 : n.date) && void 0 !== e ? e : "";
                    return t ? i.split(" ")[0] : i
                },
                Od = Xn.default.div(Xs || (Xs = (0, Gn.A)(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  padding: ", ";\n  gap: ", ";\n  border-radius: 7px;\n  border: 1px solid #ebedf3;\n  background: #ffffff;\n"])), function(n) {
                    var e = n.sWidth;
                    return e || "100%"
                }, function(n) {
                    var e = n.sHeight;
                    return null !== e && void 0 !== e ? e : "fit-content"
                }, function(n) {
                    var e = n.sPadding;
                    return null !== e && void 0 !== e ? e : "24px"
                }, function(n) {
                    var e = n.gap;
                    return null !== e && void 0 !== e ? e : "16px"
                }),
                Td = function(n) {
                    var e = n.children,
                        t = n.sWidth,
                        i = n.sHeight,
                        a = n.gap,
                        o = n.sPadding;
                    return (0, Kn.jsx)(Od, {
                        sWidth: t,
                        sHeight: i,
                        gap: a,
                        sPadding: o,
                        children: e
                    })
                },
                Nd = Xn.default.div(Zs || (Zs = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  justify-content: center;\n  margin-top: 32px;\n\n  @media (max-width: 578px) {\n    margin-bottom: 16px;\n  }\n"]))),
                Dd = (Xn.default.span(nc || (nc = (0, Gn.A)(["\n  color: #111219;\n  font-size: 14px;\n  font-family: ", ";\n  font-weight: 400;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(ec || (ec = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n"])))),
                zd = (0, Xn.default)(Dd)(tc || (tc = (0, Gn.A)(["\n  margin-top: 0;\n  gap: 16px;\n"]))),
                qd = Xn.default.h1(ic || (ic = (0, Gn.A)(["\n  color: ", ";\n  font-size: 20px;\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.colors.black.primary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                Ld = (0, Xn.default)(qd)(ac || (ac = (0, Gn.A)(["\n  color: #5e5e60;\n  text-align: center;\n  font-family: 'Noto Sans';\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n"]))),
                Id = Xn.default.span(oc || (oc = (0, Gn.A)(["\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Fd = (0, Xn.default)(Id)(rc || (rc = (0, Gn.A)(["\n  color: #5e5e60;\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n"]))),
                Ud = Xn.default.span(lc || (lc = (0, Gn.A)(["\n  color: ", ";\n  font-weight: bold;\n  cursor: pointer;\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.colors.green.primary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                Qd = (0, Xn.default)(Dn.A)(sc || (sc = (0, Gn.A)(["\n  width: ", "px;\n  height: ", "px;\n  cursor: pointer;\n"])), function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                }),
                Vd = (Xn.default.div(cc || (cc = (0, Gn.A)(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  font-family: ", ";\n\n  span {\n    font-weight: 400;\n    position: relative;\n    top: -1px;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(dc || (dc = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n"])))),
                Bd = (0, Xn.default)(Dn.A)(uc || (uc = (0, Gn.A)([""]))),
                $d = Xn.default.div(pc || (pc = (0, Gn.A)(["\n  display: flex;\n  height: 32px;\n  padding: 10px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 5px;\n  background: #f4f5f9;\n  cursor: pointer;\n  color: #5e5e60;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Jd = Xn.default.div(fc || (fc = (0, Gn.A)(["\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  gap: 24px;\n  flex-direction: column;\n  border-radius: 3px;\n  border: 1px solid #e7e8ec;\n  background: #fff;\n  cursor: pointer;\n\n  &:hover {\n    border-radius: 3px;\n    border: 1px solid #ceced2;\n    background: #f4f5f9;\n\n    > div .text-item-info.first {\n      text-decoration: underline;\n    }\n  }\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    width: 100%;\n  }\n"]))),
                Kd = Xn.default.div(mc || (mc = (0, Gn.A)(["\n  display: grid;\n  width: 100%;\n  gap: 24px;\n  align-items: center;\n\n  grid-column: 5;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    gap: 8px;\n  }\n"]))),
                Wd = Xn.default.span(hc || (hc = (0, Gn.A)(["\n  color: #131313;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  gap: 4px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  span {\n    color: #5e5e60;\n    font-family: 'Noto Sans';\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Hd = Xn.default.div(xc || (xc = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-grow: 1;\n"]))),
                Yd = Xn.default.div(gc || (gc = (0, Gn.A)(["\n  display: grid;\n  align-items: center;\n  gap: 24px;\n  justify-content: flex-end;\n  position: relative;\n  grid-template-columns: 1fr 1fr 1fr 1fr auto;\n\n  & > :nth-child(2) {\n    margin-right: 10px !important;\n  }\n\n  @media (max-width: 578px) {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n"]))),
                Gd = Xn.default.span(vc || (vc = (0, Gn.A)(["\n  color: #383839;\n  font-family: ", ";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n\n  display: ", ";\n  width: ", ";\n  gap: ", ";\n\n  @media (min-width: 1600px) {\n    width: ", ";\n  }\n\n  @media (max-width: 578px) {\n    position: ", ";\n    top: ", ";\n    right: ", ";\n    width: ", ";\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return 2 === n.index ? "flex" : ""
                }, function(n) {
                    return 1 === n.index ? "80px" : ""
                }, function(n) {
                    return 2 === n.index ? "4px" : ""
                }, function(n) {
                    return 1 === n.index ? "100%" : ""
                }, function(n) {
                    return 3 === n.index ? "absolute" : ""
                }, function(n) {
                    return 3 === n.index ? "0px" : ""
                }, function(n) {
                    return 3 === n.index ? "-170px" : ""
                }, function(n) {
                    return 1 === n.index ? "100%" : "208px"
                }),
                Xd = Xn.default.div(yc || (yc = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n"]))),
                Zd = Xn.default.div(bc || (bc = (0, Gn.A)(["\n  width: fit-content;\n\n  @media (max-width: 578px) {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n"]))),
                nu = Xn.default.div(Ac || (Ac = (0, Gn.A)(["\n  display: flex;\n  width: 32px;\n  height: 32px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  border-radius: 5px;\n  background: #f4f5f9;\n"]))),
                eu = Xn.default.div(_c || (_c = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n"]))),
                tu = Xn.default.h5(jc || (jc = (0, Gn.A)(["\n  font: normal 600 20px ", ";\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  line-height: 20px;\n  text-align: left;\n  color: ", ";\n  margin: 0;\n\n  @media (max-width: 578px) {\n    align-items: flex-start;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.colors.black.primary
                }),
                iu = Xn.default.span(Cc || (Cc = (0, Gn.A)(["\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #808080;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                au = Xn.default.h6(wc || (wc = (0, Gn.A)(["\n  margin: 0;\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #3f4254;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                ou = function(n) {
                    var e = n.title,
                        t = void 0 === e ? "Adicione o seu ti\u0301tulo" : e,
                        i = n.optionalText,
                        a = void 0 === i ? "" : i,
                        o = n.hasOptional,
                        r = void 0 !== o && o,
                        l = n.subTitle,
                        s = void 0 === l ? "" : l;
                    return (0, Kn.jsxs)(eu, {
                        children: [(0, Kn.jsxs)(tu, {
                            hasOptional: r,
                            children: [t, " ", a && (0, Kn.jsx)(iu, {
                                children: a
                            })]
                        }), (0, Kn.jsx)(au, {
                            children: s
                        })]
                    })
                },
                ru = (Xn.default.div(kc || (kc = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))), Xn.default.div(Sc || (Sc = (0, Gn.A)(["\n  display: grid;\n  align-items: center;\n  gap: 24px;\n  position: relative;\n  grid-template-columns: 1fr 1fr 1fr 1fr auto;\n\n  > :first-child {\n    margin-left: 16px !important;\n  }\n\n  > :nth-child(2) {\n    margin-left: 18px !important;\n  }\n\n  > :nth-child(3) {\n    margin-left: 18px !important;\n  }\n\n  > :nth-child(4) {\n    margin-left: 20px !important;\n  }\n  > :last-child {\n    margin-right: 16px !important;\n  }\n"])))),
                lu = Xn.default.div(Pc || (Pc = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  @media (max-width: 578px) {\n    display: none;\n  }\n"]))),
                su = Xn.default.span(Ec || (Ec = (0, Gn.A)(["\n  color: #838486;\n  font-family: ", ";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                cu = function(n) {
                    var e = n.items_header;
                    n.larges;
                    return (0, Kn.jsx)(ru, {
                        children: null === e || void 0 === e ? void 0 : e.map(function(n, e) {
                            return (0, Kn.jsxs)(lu, {
                                tabIndex: e,
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: n.icon,
                                    alt: "Icone"
                                }), (0, Kn.jsx)(su, {
                                    children: n.title
                                })]
                            }, n.title)
                        })
                    })
                },
                du = t(46666),
                uu = function() {
                    return (0, Kn.jsx)(Kn.Fragment, {
                        children: Array.from(Array(10).keys()).map(function(n, e) {
                            return (0, Kn.jsx)(Eo.A, {
                                variant: "rounded",
                                width: "100%",
                                height: 72,
                                animation: "pulse"
                            }, e)
                        })
                    })
                },
                pu = t(92336),
                fu = (0, Nn.createContext)(),
                mu = function() {
                    var n = (0, Nn.useContext)(fu);
                    if (!n) throw new Error("useFilters deve ser usado dentro de FiltersProvider");
                    return n
                },
                hu = function(n) {
                    var e = n.children,
                        t = (0, Nn.useState)([]),
                        i = (0, Ln.A)(t, 2),
                        a = i[0],
                        o = i[1],
                        r = (0, Nn.useState)([]),
                        l = (0, Ln.A)(r, 2),
                        s = l[0],
                        c = l[1],
                        d = (0, Nn.useState)(""),
                        u = (0, Ln.A)(d, 2),
                        p = u[0],
                        f = u[1],
                        m = (0, Nn.useState)(""),
                        h = (0, Ln.A)(m, 2),
                        x = h[0],
                        g = h[1],
                        v = (0, Nn.useState)(""),
                        y = (0, Ln.A)(v, 2),
                        b = y[0],
                        A = y[1],
                        _ = (0, Nn.useState)(""),
                        j = (0, Ln.A)(_, 2),
                        C = j[0],
                        w = j[1],
                        k = (0, Nn.useState)(!1),
                        S = (0, Ln.A)(k, 2),
                        P = S[0],
                        E = S[1],
                        R = (0, Nn.useState)(null),
                        M = (0, Ln.A)(R, 2),
                        O = M[0],
                        T = M[1],
                        N = (0, Nn.useState)(null),
                        D = (0, Ln.A)(N, 2),
                        z = D[0],
                        q = D[1],
                        L = (0, Nn.useState)([]),
                        I = (0, Ln.A)(L, 2),
                        F = I[0],
                        U = I[1],
                        Q = (0, On.d4)(function(n) {
                            return n.app.customers
                        }),
                        V = (0, On.wA)(),
                        B = function(n) {
                            var e = n.split("-"),
                                t = (0, Ln.A)(e, 3),
                                i = t[0],
                                a = t[1],
                                o = t[2];
                            return new Date(Number(i), Number(a) - 1, Number(o))
                        },
                        $ = function() {
                            if (P) {
                                var n = a.map(function(n) {
                                        return n.label || n
                                    }).join("; "),
                                    e = s.map(function(n) {
                                        return n.name || n
                                    }).join("; "),
                                    t = F.map(function(n) {
                                        return n.name || n
                                    }).join("; "),
                                    i = "";
                                p && x ? i = "".concat((0, pu.A)(B(p), "dd/MM/yyyy"), " a ").concat((0, pu.A)(B(x), "dd/MM/yyyy")) : p ? i = "In\xedcio ".concat((0, pu.A)(B(p), "dd/MM/yyyy")) : x && (i = "Fim ".concat((0, pu.A)(B(x), "dd/MM/yyyy"))), T({
                                    statuses: n,
                                    features: e,
                                    date: i,
                                    client: t
                                })
                            }
                        };
                    (0, Nn.useEffect)(function() {
                        $(),
                            function() {
                                var n = {};
                                if (null !== a && void 0 !== a && a.length && (n.status = a.map(function(n) {
                                        return n.status
                                    }).join(",")), null !== s && void 0 !== s && s.length && (n.types = s.map(function(n) {
                                        return n.feature
                                    }).join(",")), p && (n.start_date = p), x && (n.end_date = x), F.length) {
                                    var e = F.map(function(n) {
                                        return n.id
                                    }).join(",");
                                    n.client_customer_id = e
                                }
                                if (null !== C && void 0 !== C && C.trim()) {
                                    var t = C.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "");
                                    t && (n.search = t)
                                }
                                q(n)
                            }(), E(!1)
                    }, [P, C]), (0, Nn.useEffect)(function() {
                        V({
                            type: "LOAD_CUSTOMERS"
                        })
                    }, []);
                    return (0, Kn.jsx)(fu.Provider, {
                        value: {
                            statuses: a,
                            setStatuses: o,
                            features: s,
                            setFeatures: c,
                            startDate: p,
                            setStartDate: f,
                            endDate: x,
                            setEndDate: g,
                            search: b,
                            setSearch: A,
                            debouncedSearch: C,
                            setDebouncedSearch: w,
                            applyFilters: P,
                            setApplyFilters: E,
                            filtersApplied: O,
                            params: z,
                            handleClearFilters: function() {
                                c([]), f(""), g(""), o([]), $(), T({
                                    statuses: "",
                                    features: "",
                                    date: ""
                                }), q({}), U([])
                            },
                            client: F,
                            customers: Q,
                            setClient: U
                        },
                        children: e
                    })
                },
                xu = function(n) {
                    var e = n.subTitle,
                        t = void 0 === e ? "Ajuste os filtros aplicados e tente novamente." : e;
                    return (0, Kn.jsx)(Td, {
                        sPadding: "64px 24px",
                        children: (0, Kn.jsxs)(zd, {
                            children: [(0, Kn.jsx)(Qd, {
                                src: (0, zn.oK)("/media/jusfinder/icon-filters-empty.svg"),
                                width: "266"
                            }), (0, Kn.jsxs)("div", {
                                children: [(0, Kn.jsx)(Ld, {
                                    children: "Nenhuma consulta encontrada"
                                }), (0, Kn.jsxs)(Fd, {
                                    children: [" ", t]
                                })]
                            })]
                        })
                    })
                },
                gu = t(23439),
                vu = function(n) {
                    var e, t = n.data,
                        i = n.loading,
                        a = n.featureTypesUrl,
                        o = n.itemCard,
                        r = n.changePage,
                        l = n.currPage,
                        s = n.reloadPage,
                        c = n.hasQueryPending,
                        d = n.setQueryParams,
                        u = n.hasParams,
                        p = n.expandedIndex,
                        f = n.toggleExpand,
                        m = n.setOpenIndexMenu,
                        h = mu().params,
                        x = (0, it.A)(function() {
                            return m(null)
                        });
                    return (0, Nn.useEffect)(function() {
                        d(h)
                    }, [h]), u && 0 === (null === t || void 0 === t || null === (e = t.data) || void 0 === e ? void 0 : e.length) ? (0, Kn.jsx)(xu, {}) : (0, Kn.jsx)(Kn.Fragment, {
                        children: (0, Kn.jsxs)(Td, {
                            gap: "24px",
                            children: [(0, Kn.jsxs)(Vd, {
                                children: [(0, Kn.jsx)(ou, {
                                    title: "Consultas",
                                    optionalText: i ? (0, Kn.jsx)(Mt(), {
                                        type: "bubbles",
                                        color: "#34BC97",
                                        size: "medium",
                                        width: "40px",
                                        height: "38px"
                                    }) : (null === t || void 0 === t ? void 0 : t.total_items) + " consultas"
                                }), c && (0, Kn.jsx)(Zd, {
                                    children: (0, Kn.jsxs)($d, {
                                        onClick: s,
                                        children: [(0, Kn.jsx)(Bd, {
                                            src: (0, zn.oK)("/media/jusfinder/icon-updated.svg")
                                        }), "Atualizar status"]
                                    })
                                })]
                            }), (0, Kn.jsxs)(Xd, {
                                children: [(0, Kn.jsx)(cu, {
                                    items_header: _d
                                }), i && (0, Kn.jsx)(uu, {}), !i && (null === o || void 0 === o ? void 0 : o.map(function(n, e) {
                                    var t, i, o;
                                    return "group" === n.type ? (0, Kn.jsxs)("div", {
                                        children: [(0, Kn.jsx)(Jd, {
                                            onClick: function() {
                                                return f(e)
                                            },
                                            children: (0, Kn.jsx)(Kd, {
                                                children: (0, Kn.jsxs)(Yd, {
                                                    children: [(0, Kn.jsx)(Hd, {
                                                        className: "",
                                                        children: (0, Kn.jsxs)(Wd, {
                                                            children: [null === (t = dt.c2.get(null === (i = n.items[0]) || void 0 === i ? void 0 : i.document_type)) || void 0 === t ? void 0 : t.maskedDocument(n.document), (0, Kn.jsx)("span", {
                                                                children: " M\xfaltiplas consultas"
                                                            })]
                                                        })
                                                    }), (0, Kn.jsx)(Gd, {
                                                        index: mt.uH,
                                                        children: n.client
                                                    }), (0, Kn.jsx)(Gd, {
                                                        index: mt.qX,
                                                        children: n.date
                                                    }), (0, Kn.jsxs)(Gd, {
                                                        index: mt.zQ,
                                                        children: [n.successCount > 0 && (0, Kn.jsx)(yd, {
                                                            background: "#e6f7f2",
                                                            icon: (0, zn.oK)("/media/jusfinder/check-success.svg"),
                                                            text: n.successCount
                                                        }), n.pendingCount > 0 && (0, Kn.jsx)(yd, {
                                                            background: "#fff9e6",
                                                            icon: (0, zn.oK)("/media/jusfinder/circle-clock.svg"),
                                                            text: n.pendingCount
                                                        }), n.errorCount > 0 && (0, Kn.jsx)(yd, {
                                                            background: "#fbeaec",
                                                            icon: (0, zn.oK)("/media/jusfinder/error-count.svg"),
                                                            text: n.errorCount
                                                        })]
                                                    }), (0, Kn.jsx)(Gd, {
                                                        index: mt.cu,
                                                        children: (0, Kn.jsx)(nu, {
                                                            onClick: function() {
                                                                return f(e)
                                                            },
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: p === e ? (0, Kn.jsx)(gu.Ucs, {}) : (0, Kn.jsx)(gu.Vr3, {})
                                                        })
                                                    })]
                                                })
                                            })
                                        }, "item-".concat(n.id)), p === e && n.items.map(function(n) {
                                            return (0, Kn.jsx)(Jd, {
                                                onClick: function(e) {
                                                    return a(n, "card")
                                                },
                                                children: (0, Kn.jsx)(Kd, {
                                                    children: (0, Kn.jsxs)(Yd, {
                                                        children: [(0, Kn.jsx)(Hd, {
                                                            className: "",
                                                            children: (0, Kn.jsx)(Gd, {
                                                                children: "economic_group" === n.feature_type_name ? mt.TC.get(n.query_subtype) : n.typeQuery
                                                            })
                                                        }), (0, Kn.jsx)(Gd, {
                                                            index: mt.uH,
                                                            children: n.client
                                                        }), (0, Kn.jsx)(Gd, {
                                                            index: mt.qX,
                                                            children: n.date
                                                        }), (0, Kn.jsx)(Gd, {
                                                            index: mt.zQ,
                                                            children: n.statusComponent
                                                        }), (0, Kn.jsx)(Gd, {
                                                            index: mt.cu,
                                                            children: n.actions
                                                        })]
                                                    })
                                                })
                                            }, "item-".concat(n.id))
                                        })]
                                    }, "group-".concat(e)) : (0, Kn.jsx)(Jd, {
                                        onClick: function(e) {
                                            return a(n, "card")
                                        },
                                        children: (0, Kn.jsx)(Kd, {
                                            ref: x,
                                            children: (0, Kn.jsxs)(Yd, {
                                                children: [(0, Kn.jsx)(Hd, {
                                                    className: "text-item-info first",
                                                    children: (0, Kn.jsxs)(Wd, {
                                                        children: [null === (o = dt.c2.get(n.document_type)) || void 0 === o ? void 0 : o.maskedDocument(n.document), (0, Kn.jsx)("span", {
                                                            children: n.typeQuery
                                                        })]
                                                    })
                                                }), (0, Kn.jsx)(Gd, {
                                                    index: mt.uH,
                                                    children: n.client
                                                }), (0, Kn.jsx)(Gd, {
                                                    index: mt.qX,
                                                    children: n.date
                                                }), (0, Kn.jsx)(Gd, {
                                                    index: mt.zQ,
                                                    children: n.statusComponent
                                                }), (0, Kn.jsx)(Gd, {
                                                    index: mt.cu,
                                                    children: n.actions
                                                })]
                                            })
                                        })
                                    }, "single-".concat(n.id))
                                }))]
                            }), (0, Kn.jsx)(du.d, {
                                changePage: r,
                                currPage: l,
                                totalPages: null === t || void 0 === t ? void 0 : t.total_pages
                            })]
                        })
                    })
                },
                yu = function(n) {
                    var e = n.setQueryParams,
                        t = n.setPage,
                        i = mu().params;
                    return (0, Nn.useEffect)(function() {
                        e(i)
                    }, [i]), (0, Kn.jsxs)(Dd, {
                        children: [(0, Kn.jsx)(Qd, {
                            src: (0, zn.oK)("/media/jusfinder/empty.svg"),
                            width: "266",
                            height: "342"
                        }), (0, Kn.jsx)(qd, {
                            children: "Voc\xea ainda n\xe3o tem nenhuma consulta realizada"
                        }), (0, Kn.jsxs)("div", {
                            children: [(0, Kn.jsxs)(Id, {
                                children: ["Para realizar sua primeira consulta, clique em", " "]
                            }), (0, Kn.jsx)(Ud, {
                                onClick: function() {
                                    return t("query")
                                },
                                children: "Nova Consulta"
                            }), (0, Kn.jsx)(Id, {
                                children: " e n\xf3s te ajudaremos com o resto.."
                            })]
                        })]
                    })
                },
                bu = t(20720),
                Au = t(81658),
                _u = Xn.default.div(Rc || (Rc = (0, Gn.A)(["\n  display: flex;\n  height: 40px;\n  padding: 10px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  border: 1px solid #ceced2;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  width: 100%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                ju = Xn.default.div(Mc || (Mc = (0, Gn.A)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 16px 0;\n  display: flex;\n  justify-content: space-evenly;\n"]))),
                Cu = Xn.default.div(Oc || (Oc = (0, Gn.A)(["\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 10px 16px;\n  border-radius: 4px;\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  transition: background-color 0.2s;\n"]))),
                wu = (0, Xn.default)(Cu)(Tc || (Tc = (0, Gn.A)(["\n  border: 1px solid #ceced2;\n  background-color: transparent;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]))),
                ku = (0, Xn.default)(Cu)(Nc || (Nc = (0, Gn.A)(["\n  background-color: #01ab7d;\n  color: #fff;\n  opacity: ", ";\n  pointer-events: ", ";\n"])), function(n) {
                    return n.disabled ? .5 : 1
                }, function(n) {
                    return n.disabled ? "none" : "auto"
                }),
                Su = (0, Xn.default)(jl.A)(Dc || (Dc = (0, Gn.A)(["\n  .MuiOutlinedInput-root.Mui-focused fieldset {\n    border-color: #01ab7d;\n  }\n"]))),
                Pu = (0, Xn.default)(Ne.A)(zc || (zc = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: #838486 !important;\n  }\n\n  &.Mui-checked .MuiSvgIcon-root {\n    color: #01ab7d !important;\n  }\n"]))),
                Eu = [{
                    name: "Situa\xe7\xe3o cadastral de CPF",
                    feature: "cpf_registration_status"
                }, {
                    name: "Restri\xe7\xe3o de cr\xe9dito",
                    feature: "credit_restriction"
                }, {
                    name: "Grupo econ\xf4mico de CNPJ",
                    feature: "economic_group"
                }, {
                    name: "Dados Profissionais",
                    feature: "professional_data"
                }, {
                    name: "Marcas e Patentes",
                    feature: "trademarks"
                }, {
                    name: "Buscador processual",
                    feature: "lawsuit"
                }, {
                    name: "Localiza\xe7\xe3o",
                    feature: "personal_data"
                }, {
                    name: "Relacionamentos",
                    feature: "relationship_tree"
                }, {
                    name: "Ve\xedculos",
                    feature: "list_vehicles"
                }, {
                    name: "Dados do ve\xedculo",
                    feature: "vehicle_data"
                }, {
                    name: "Sociedades",
                    feature: "company_partnership"
                }, {
                    name: "Empresa Completo",
                    feature: "company_information"
                }],
                Ru = [{
                    label: "Processando",
                    status: 4
                }, {
                    label: "Realizada",
                    status: 2
                }],
                Mu = (0, Xn.default)(Ml.A)(qc || (qc = (0, Gn.A)(["\n  width: 100%;\n\n  .MuiInputLabel-root.Mui-focused {\n    color: ", ";\n  }\n"])), function(n) {
                    return n.theme.colors.brand.primary.main
                }),
                Ou = (0, Xn.default)(Ol.A)(Lc || (Lc = (0, Gn.A)(["\n  background-color: ", " !important;\n  color: ", " !important;\n  font-weight: 500;\n  width: fit-content;\n\n  & .MuiChip-deleteIcon {\n    font-size: ", " !important;\n    color: ", " !important;\n  }\n"])), function(n) {
                    return n.theme.colors.gray[200]
                }, function(n) {
                    return n.theme.colors.gray[700]
                }, function(n) {
                    return n.theme.fontSizes.sm[700]
                }, function(n) {
                    return n.theme.colors.gray[700]
                });

            function Tu(n) {
                var e = n.features,
                    t = n.setFeatures;
                return (0, Kn.jsxs)(Mu, {
                    fullWidth: !0,
                    children: [(0, Kn.jsx)(Pl.A, {
                        id: "status-label",
                        children: "Tipo"
                    }), (0, Kn.jsx)(El.A, {
                        labelId: "status-label",
                        multiple: !0,
                        value: e,
                        onChange: function(n) {
                            t(n.target.value)
                        },
                        renderValue: function(n) {
                            return (0, Kn.jsx)(Ro.A, {
                                sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: .5
                                },
                                children: n.map(function(n) {
                                    return (0, Kn.jsx)(Ou, {
                                        label: n.name,
                                        onDelete: function(e) {
                                            var i;
                                            e.stopPropagation(), i = n, t(function(n) {
                                                return n.filter(function(n) {
                                                    return n.feature !== i.feature
                                                })
                                            })
                                        },
                                        onMouseDown: function(n) {
                                            return n.stopPropagation()
                                        },
                                        deleteIcon: (0, Kn.jsx)("span", {
                                            children: "\xd7"
                                        })
                                    }, "chip-".concat(n.feature))
                                })
                            })
                        },
                        sx: {
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#01ab7d"
                            },
                            "& + .MuiInputLabel-root.Mui-focused": {
                                color: "#01ab7d"
                            }
                        },
                        children: Eu.map(function(n) {
                            return (0, Kn.jsx)(Rl.A, {
                                value: n,
                                selected: null === e || void 0 === e ? void 0 : e.some(function(e) {
                                    return e.feature === n.feature
                                }),
                                children: n.name
                            }, "select-item-".concat(n.feature))
                        })
                    })]
                })
            }
            var Nu, Du = (0, Xn.default)(Ml.A)(Ic || (Ic = (0, Gn.A)(["\n  width: 100%;\n\n  .MuiInputLabel-root.Mui-focused {\n    color: ", ";\n  }\n"])), function(n) {
                    return n.theme.colors.brand.primary.main
                }),
                zu = (0, Xn.default)(Ol.A)(Fc || (Fc = (0, Gn.A)(["\n  background-color: ", " !important;\n  color: ", " !important;\n  font-weight: 500;\n  width: fit-content;\n\n  & .MuiChip-deleteIcon {\n    font-size: ", " !important;\n    color: ", " !important;\n  }\n"])), function(n) {
                    return n.theme.colors.gray[200]
                }, function(n) {
                    return n.theme.colors.gray[700]
                }, function(n) {
                    return n.theme.fontSizes.sm[700]
                }, function(n) {
                    return n.theme.colors.gray[700]
                });

            function qu(n) {
                var e = n.options,
                    t = n.client,
                    i = n.setOptions;
                return (0, Kn.jsxs)(Du, {
                    fullWidth: !0,
                    children: [(0, Kn.jsx)(Pl.A, {
                        id: "status-label",
                        children: "Cliente"
                    }), (0, Kn.jsx)(El.A, {
                        labelId: "status-label",
                        multiple: !0,
                        value: t,
                        onChange: function(n) {
                            i(n.target.value)
                        },
                        renderValue: function(n) {
                            return (0, Kn.jsx)(Ro.A, {
                                sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: .5
                                },
                                children: n.map(function(n) {
                                    return (0, Kn.jsx)(zu, {
                                        label: n.name,
                                        onDelete: function(e) {
                                            var t;
                                            e.stopPropagation(), t = n, i(function(n) {
                                                return n.filter(function(n) {
                                                    return n.feature !== t.feature
                                                })
                                            })
                                        },
                                        onMouseDown: function(n) {
                                            return n.stopPropagation()
                                        },
                                        deleteIcon: (0, Kn.jsx)("span", {
                                            children: "\xd7"
                                        })
                                    }, "chip-".concat(n.feature))
                                })
                            })
                        },
                        sx: {
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#01ab7d"
                            },
                            "& + .MuiInputLabel-root.Mui-focused": {
                                color: "#01ab7d"
                            }
                        },
                        children: null === e || void 0 === e ? void 0 : e.map(function(n) {
                            return (0, Kn.jsx)(Rl.A, {
                                value: n,
                                selected: null === e || void 0 === e ? void 0 : e.some(function(e) {
                                    return e.feature === (null === n || void 0 === n ? void 0 : n.feature)
                                }),
                                children: n.name
                            }, "select-item-".concat(null === n || void 0 === n ? void 0 : n.feature))
                        })
                    })]
                })
            }

            function Lu() {
                var n = mu(),
                    e = n.features,
                    t = n.setFeatures,
                    i = n.startDate,
                    a = n.setStartDate,
                    o = n.endDate,
                    r = n.setEndDate,
                    l = n.statuses,
                    s = n.setStatuses,
                    c = n.setApplyFilters,
                    d = n.client,
                    u = n.customers,
                    p = n.setClient,
                    f = (0, be.lc)().HandleEvent,
                    m = (0, Nn.useState)(!1),
                    h = (0, Ln.A)(m, 2),
                    x = h[0],
                    g = h[1],
                    v = (0, Nn.useState)(!1),
                    y = (0, Ln.A)(v, 2),
                    b = y[0],
                    A = y[1],
                    _ = (0, Nn.useState)(e),
                    j = (0, Ln.A)(_, 2),
                    C = j[0],
                    w = j[1],
                    k = (0, Nn.useState)(i),
                    S = (0, Ln.A)(k, 2),
                    P = S[0],
                    E = S[1],
                    R = (0, Nn.useState)(o),
                    M = (0, Ln.A)(R, 2),
                    O = M[0],
                    T = M[1],
                    N = (0, Nn.useState)(l),
                    D = (0, Ln.A)(N, 2),
                    z = D[0],
                    q = D[1];
                (0, Nn.useEffect)(function() {
                    A(!(!P || !O) && new Date(P) > new Date(O))
                }, [P, O]);
                var L = function(n) {
                        var e = n.target,
                            t = e.name,
                            i = e.checked,
                            a = Ru.find(function(n) {
                                return n.label === t
                            });
                        a && q(i ? function(n) {
                            return [].concat((0, tt.A)(n), [a])
                        } : function(n) {
                            return n.filter(function(n) {
                                return n.status !== a.status
                            })
                        })
                    },
                    I = function() {
                        return !P || !O || new Date(P) <= new Date(O)
                    },
                    F = function(n) {
                        return function() {
                            if (n) w(e), E(i), T(o), q(l);
                            else {
                                if (!I()) return void A(!0);
                                A(!1)
                            }
                            g(n)
                        }
                    },
                    U = (0, Kn.jsxs)(Ro.A, {
                        sx: {
                            width: 380,
                            p: 3
                        },
                        role: "presentation",
                        children: [(0, Kn.jsx)(_l.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Filtros"
                        }), (0, Kn.jsx)(_l.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Tipo"
                        }), (0, Kn.jsx)(Tu, {
                            features: C,
                            setFeatures: w
                        }), (0, Kn.jsxs)(Ro.A, {
                            mt: 3,
                            children: [(0, Kn.jsx)(_l.A, {
                                variant: "h6",
                                gutterBottom: !0,
                                children: "Cliente"
                            }), (0, Kn.jsx)(qu, {
                                options: u,
                                client: d,
                                setOptions: p
                            })]
                        }), (0, Kn.jsxs)(Ro.A, {
                            mt: 3,
                            mb: 3,
                            children: [(0, Kn.jsx)(_l.A, {
                                variant: "h6",
                                gutterBottom: !0,
                                children: "Data da consulta"
                            }), (0, Kn.jsxs)(Ro.A, {
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mt: 1,
                                children: [(0, Kn.jsx)(Su, {
                                    type: "date",
                                    value: P,
                                    onChange: function(n) {
                                        return E(n.target.value)
                                    },
                                    size: "small",
                                    fullWidth: !0,
                                    error: b,
                                    helperText: b ? "Data inicial deve ser menor ou igual \xe0 final" : ""
                                }), (0, Kn.jsx)(_l.A, {
                                    variant: "body1",
                                    sx: {
                                        fontSize: "1.1rem",
                                        mb: b ? 4 : 0
                                    },
                                    children: "a"
                                }), (0, Kn.jsx)(Su, {
                                    type: "date",
                                    value: O,
                                    onChange: function(n) {
                                        return T(n.target.value)
                                    },
                                    size: "small",
                                    fullWidth: !0,
                                    error: b,
                                    helperText: b ? "Data final deve ser maior ou igual \xe0 inicial" : ""
                                })]
                            })]
                        }), (0, Kn.jsx)(_l.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Status"
                        }), (0, Kn.jsx)(Ro.A, {
                            display: "flex",
                            flexDirection: "column",
                            children: Ru.map(function(n) {
                                return (0, Kn.jsx)(bu.A, {
                                    control: (0, Kn.jsx)(Pu, {
                                        name: n.label,
                                        checked: z.some(function(e) {
                                            return e.status === n.status
                                        }),
                                        onChange: L
                                    }),
                                    label: n.label,
                                    sx: {
                                        "& .MuiFormControlLabel-label": {
                                            fontSize: "1.1rem"
                                        }
                                    }
                                }, n.label)
                            })
                        }), (0, Kn.jsx)(Ro.A, {
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 2,
                            children: (0, Kn.jsxs)(ju, {
                                children: [(0, Kn.jsx)(wu, {
                                    onClick: function() {
                                        w([]), E(""), T(""), q([]), A(!1), p([])
                                    },
                                    children: "Limpar"
                                }), (0, Kn.jsx)(ku, {
                                    onClick: function() {
                                        I() && (f("query_filter_drawer_apply", {
                                            features: null !== C && void 0 !== C ? C : [],
                                            startDate: null !== P && void 0 !== P ? P : "",
                                            endDate: null !== O && void 0 !== O ? O : "",
                                            statuses: null !== z && void 0 !== z ? z : []
                                        }), t(C), a(P), r(O), s(z), c(!0), g(!1))
                                    },
                                    disabled: !I(),
                                    children: "Aplicar"
                                })]
                            })
                        })]
                    });
                return (0, Kn.jsxs)("div", {
                    children: [(0, Kn.jsxs)(_u, {
                        onClick: F(!0),
                        children: [(0, Kn.jsx)(Qd, {
                            src: (0, zn.oK)("/media/jusfinder/filter-2--funnel-filter-angle-oil.svg"),
                            width: "10",
                            height: "10"
                        }), "Filtros"]
                    }), (0, Kn.jsx)(Au.Ay, {
                        anchor: "right",
                        open: x,
                        onClose: F(!1),
                        children: U
                    })]
                })
            }
            var Iu, Fu, Uu = Xn.default.div(Nu || (Nu = (0, Gn.A)(['\n  display: flex;\n  align-items: center;\n  padding: 0px 0px 0px 16px;\n  width: 300px;\n  border-radius: 6px;\n  border: 1px solid #e7e8ec;\n  input {\n    width: 100%;\n    padding: 8px 16px;\n    border: none;\n    opacity: 0.8;\n    background: transparent;\n    outline: none;\n    font-weight: 400;\n    font-size: 14px;\n    font-style: initial;\n    font-family: "Noto Sans";\n    color: ', ";\n  }\n  svg {\n    min-width: 14px;\n  }\n"])), function(n) {
                return n.theme.colors.black.primary
            });

            function Qu(n) {
                var e = n.loading,
                    t = mu(),
                    i = t.search,
                    a = t.setSearch,
                    o = t.setDebouncedSearch,
                    r = (0, be.lc)().HandleEvent;
                return (0, Nn.useEffect)(function() {
                    var n = setTimeout(function() {
                        r("query_filter__document_search", {
                            searchParam: i
                        }), o(i)
                    }, 1e3);
                    return function() {
                        return clearTimeout(n)
                    }
                }, [i, o]), (0, Kn.jsxs)(Uu, {
                    style: {
                        flex: "0 0 90%"
                    },
                    children: [(0, Kn.jsx)(Dn.A, {
                        src: (0, zn.oK)("/media/casesManagement/search.svg"),
                        minWidth: "14px",
                        minHeight: "14px"
                    }), (0, Kn.jsx)("input", {
                        placeholder: "Pesquise pelo documento",
                        value: i,
                        onChange: function(n) {
                            return a(n.target.value)
                        },
                        disabled: e
                    })]
                })
            }
            var Vu, Bu, $u = Xn.default.div(Iu || (Iu = (0, Gn.A)(["\n  flex-grow: 1;\n"]))),
                Ju = Xn.default.div(Fu || (Fu = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))),
                Ku = (0, Xn.default)(Ol.A)(Vu || (Vu = (0, Gn.A)(["\n  &.MuiChip-root {\n    background-color: ", ";\n    color: ", ";\n    font-weight: 400;\n    width: fit-content;\n  }\n\n  .MuiChip-label {\n    font-size: ", ";\n    font-family: ", ";\n  }\n"])), function(n) {
                    return n.theme.colors.gray[200]
                }, function(n) {
                    return n.theme.colors.gray[700]
                }, function(n) {
                    return n.theme.fontSizes.xs
                }, function(n) {
                    return n.theme.typography.quaternary
                }),
                Wu = (0, Xn.default)(ns.A)(Bu || (Bu = (0, Gn.A)(["\n  && {\n    color: ", ";\n    font-weight: 600;\n    font-size: ", ";\n    font-family: ", ";\n    text-transform: none;\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"])), function(n) {
                    return n.theme.colors.brand.primary.main
                }, function(n) {
                    return n.theme.fontSizes.xs
                }, function(n) {
                    return n.theme.typography.quaternary
                }, function(n) {
                    return n.theme.colors.brand.primary.quaternary
                }),
                Hu = function(n) {
                    var e = n.filtersApplied,
                        t = n.onClear,
                        i = [];
                    return e ? (e.features && i.push((0, Kn.jsx)(Ku, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Tipos:"
                            }), " ", e.features]
                        })
                    }, "chip-features")), e.date && i.push((0, Kn.jsx)(Ku, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Data:"
                            }), " ", e.date]
                        })
                    }, "chip-date")), e.statuses && i.push((0, Kn.jsx)(Ku, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Status:"
                            }), " ", e.statuses]
                        })
                    }, "chip-statuses")), e.client && i.push((0, Kn.jsx)(Ku, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Cliente:"
                            }), " ", e.client]
                        })
                    }, "chip-client")), (0, Kn.jsxs)(Ro.A, {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: 2,
                        children: [i, i.length > 0 && (0, Kn.jsx)(Wu, {
                            variant: "text",
                            onClick: t,
                            children: "Limpar"
                        })]
                    })) : (0, Kn.jsx)(Kn.Fragment, {})
                };

            function Yu(n) {
                var e = n.loading,
                    t = mu(),
                    i = t.filtersApplied,
                    a = t.handleClearFilters;
                return (0, Kn.jsxs)(Td, {
                    children: [(0, Kn.jsx)($u, {
                        children: (0, Kn.jsxs)(Ju, {
                            children: [(0, Kn.jsx)(Qu, {
                                loading: e
                            }), (0, Kn.jsx)(Lu, {})]
                        })
                    }), (0, Kn.jsx)(Hu, {
                        filtersApplied: i,
                        onClear: a
                    })]
                })
            }
            var Gu, Xu, Zu, np, ep, tp, ip, ap, op, rp, lp, sp, cp, dp, up, pp, fp, mp, hp, xp, gp, vp, yp, bp, Ap, _p, jp, Cp, wp, kp, Sp, Pp, Ep, Rp, Mp, Op, Tp, Np, Dp, zp, qp, Lp, Ip, Fp, Up, Qp, Vp, Bp, $p, Jp, Kp, Wp, Hp, Yp, Gp, Xp, Zp, nf, ef, tf, af, of , rf, lf, sf, cf, df, uf, pf, ff, mf, hf, xf, gf, vf, yf, bf, Af, _f, jf, Cf, wf, kf, Sf, Pf, Ef, Rf, Mf, Of, Tf, Nf, Df, zf, qf, Lf, If, Ff, Uf, Qf, Vf, Bf, $f, Jf, Kf, Wf, Hf, Yf, Gf, Xf, Zf, nm, em, tm, im, am, om, rm, lm, sm, cm, dm, um, pm, fm, mm, hm, xm, gm, vm, ym, bm, Am, _m, jm, Cm, wm, km, Sm, Pm, Em = t(80576),
                Rm = (Xn.default.div(Gu || (Gu = (0, Gn.A)(["\n  background: #ffe0d1;\n  color: #e94f0e;\n  font-size: 10px;\n  font-weight: bold;\n  display: block;\n  padding: 2px 5px;\n  border-radius: 4px;\n\n  position: absolute;\n  right: 13px;\n  bottom: 20px;\n"]))), Xn.default.div(Xu || (Xu = (0, Gn.A)(["\n  position: absolute;\n  right: 30px;\n  top: 15px;\n  display: flex;\n  gap: 10px;\n  z-index: 9;\n"]))), (0, Xn.default)(Dn.A)(Zu || (Zu = (0, Gn.A)(["\n  cursor: pointer;\n"])))),
                Mm = (Xn.default.button(np || (np = (0, Gn.A)(["\n\tposition: relative;\n\twidth: ", ";\n\theight: ", ";\n\tpadding: ", ";\n\tgap: 10px;\n\tborder-radius: 5px;\n\tborder:", ";\n\tbackground: transparent;\n\tmargin-top: ", ';\n\n\t&:hover::after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tbottom: ', ';\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tborder: solid transparent;\n\t\tborder-top-color: #535353;\n\t\tborder-width: 8px;\n\t\tmargin-left: 0px;\n\t}\n\n\t&:hover::before {\n\t\tcontent: "', '";\n\t\twidth: max-content;\n\t\tposition: absolute;\n\t\tbottom: calc(100% + 10px);\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tbackground-color: #535353;\n\t\tcolor: #ffffff;\n\t\tpadding: 5px;\n\t\tborder-radius: 5px;\n\t\topacity: 1;\n\t\tpadding: 8px 16px 8px 16px;\n\t}\n'])), function(n) {
                    var e = n.width;
                    return null !== e && void 0 !== e ? e : "42px"
                }, function(n) {
                    var e = n.height;
                    return null !== e && void 0 !== e ? e : "40px"
                }, function(n) {
                    var e = n.padding;
                    return null !== e && void 0 !== e ? e : "0px 12px"
                }, function(n) {
                    var e = n.border;
                    return null !== e && void 0 !== e ? e : "1px solid #ff3a4f"
                }, function(n) {
                    var e = n.mt;
                    return null !== e && void 0 !== e ? e : "24px"
                }, function(n) {
                    var e = n.bottomHover;
                    return null !== e && void 0 !== e ? e : "34px"
                }, function(n) {
                    var e = n.textHover;
                    return null !== e && void 0 !== e ? e : "Excluir"
                }), (0, Xn.default)(Em.A)(ep || (ep = (0, Gn.A)(["\n  position: absolute;\n  .MuiPaper-root {\n    border-radius: 7px;\n    overflow: ", ";\n    min-width: ", ";\n\n    @media (max-width: 578px) {\n      width: 360px !important;\n    }\n    @media (max-width: 370px) {\n      width: 350px !important;\n    }\n  }\n\n  .MuiBackdrop-root {\n    opacity: 0.3 !important;\n    background: #000 !important;\n  }\n\n  .MuiDialog-paper {\n    max-width: 100% !important;\n  }\n"])), function(n) {
                    return n.overflow
                }, function(n) {
                    return n.minWidth
                })),
                Om = Xn.default.h6(tp || (tp = (0, Gn.A)(["\n  margin: 0;\n  color: #131313;\n  font-family: ", ";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Tm = Xn.default.div(ip || (ip = (0, Gn.A)(["\n  display: flex;\n  width: 500px;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 24px;\n"]))),
                Nm = Xn.default.div(ap || (ap = (0, Gn.A)(["\n  width: 100%;\n  display: flex;\n  gap: 24px;\n"]))),
                Dm = Xn.default.button(op || (op = (0, Gn.A)(["\n  width: 100%;\n  font-weight: 600;\n  display: flex;\n  height: 40px;\n  padding: 0px 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex: 1 0 0;\n  border-radius: 5px;\n  border: ", ";\n  background: ", ";\n  color: ", ";\n"])), function(n) {
                    return n.border
                }, function(n) {
                    return n.background
                }, function(n) {
                    return n.color
                }),
                zm = Xn.default.button(rp || (rp = (0, Gn.A)(["\n  position: absolute;\n  right: 4px;\n  top: 7px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"]))),
                qm = (Xn.default.div(lp || (lp = (0, Gn.A)(["\n  position: relative;\n"]))), Xn.default.div(sp || (sp = (0, Gn.A)(["\n  position: relative;\n  height: 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))), Xn.default.div(cp || (cp = (0, Gn.A)(["\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  border: 2px solid #e6eaef;\n  position: relative;\n"]))), function(n) {
                    var e = n.open,
                        t = n.closeModal,
                        i = n.modalConfirmed;
                    return (0, Kn.jsx)(Mm, {
                        open: e,
                        children: (0, Kn.jsxs)(Tm, {
                            children: [(0, Kn.jsx)(zm, {
                                onClick: t,
                                children: (0, Kn.jsx)(Rm, {
                                    src: (0, zn.oK)("/media/close-modal.svg")
                                })
                            }), (0, Kn.jsx)(Om, {
                                children: "Tem certeza que deseja excluir esta consulta?"
                            }), (0, Kn.jsxs)(Nm, {
                                children: [(0, Kn.jsx)(Dm, {
                                    border: "1px solid #CECED2",
                                    color: "#131313",
                                    background: "transparent",
                                    onClick: t,
                                    children: "N\xe3o, voltar"
                                }), (0, Kn.jsx)(Dm, {
                                    border: "none",
                                    background: "#D83143",
                                    color: "#fff",
                                    onClick: i,
                                    children: "Sim, excluir"
                                })]
                            })]
                        })
                    })
                }),
                Lm = t(61673),
                Im = function(n) {
                    var e = n.data,
                        t = n.loading,
                        i = n.setShouldReload,
                        a = n.featureTypesUrl,
                        o = n.itemCard,
                        r = n.changePage,
                        l = n.currPage,
                        s = n.reloadPage,
                        c = n.modalCheckout,
                        d = n.setModalCheckout,
                        u = n.loadingModalCheckout,
                        p = n.setLoadingModalCheckout,
                        f = n.querieSelected,
                        m = n.hasQueryPending,
                        h = n.setQueryParams,
                        x = n.modalConfirmed,
                        g = n.closeModal,
                        v = n.deleteQuery,
                        y = n.queriesToDelete,
                        b = n.modalSuggestion,
                        A = n.setModalSuggestion,
                        _ = n.hasParams,
                        j = n.setPage,
                        C = n.expandedIndex,
                        w = n.toggleExpand,
                        k = n.state,
                        S = n.closeModalCusTomer,
                        P = n.onChangeCustomer,
                        E = n.linkUser,
                        R = n.updateCustomer,
                        M = n.customers,
                        O = n.changeInputType,
                        T = n.unlinkUser,
                        N = n.setOpenIndexMenu;
                    return (0, Kn.jsxs)(Nd, {
                        children: [function() {
                            var n, c = t && (!(null !== e && void 0 !== e && e.data) || (null === e || void 0 === e ? void 0 : e.data));
                            return (0, Kn.jsx)(hu, {
                                children: c ? (0, Kn.jsx)(Td, {
                                    children: (0, Kn.jsx)(uu, {})
                                }) : (null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.length) > 0 || _ ? (0, Kn.jsxs)(Kn.Fragment, {
                                    children: [(0, Kn.jsx)(Yu, {
                                        loading: t
                                    }), (0, Kn.jsx)(vu, {
                                        data: e,
                                        changePage: r,
                                        currPage: l,
                                        featureTypesUrl: a,
                                        itemCard: o,
                                        loading: t,
                                        setShouldReload: i,
                                        reloadPage: s,
                                        hasQueryPending: m,
                                        setQueryParams: h,
                                        hasParams: _,
                                        expandedIndex: C,
                                        toggleExpand: w,
                                        setOpenIndexMenu: N
                                    })]
                                }) : (0, Kn.jsx)(yu, {
                                    setQueryParams: h,
                                    setPage: j
                                })
                            })
                        }(), (0, Kn.jsx)(Ir, {
                            visible: c,
                            setModalCheckout: d,
                            loadingCheckout: u,
                            setLoadingCheckout: p,
                            identification: f
                        }), (0, Kn.jsx)(qm, {
                            open: x,
                            closeModal: g,
                            modalConfirmed: function() {
                                return v(y)
                            }
                        }), (0, Kn.jsx)(vl, {
                            openModal: b,
                            setOpenModal: A,
                            url: ft.sK
                        }), (0, Kn.jsx)(Lm.o, {
                            open: k.modalCustomer,
                            closeModal: S,
                            value: k.customer,
                            onChange: P,
                            submit: "text" === k.inputType ? E : R,
                            inputType: k.inputType,
                            error: k.error,
                            customers: M,
                            setInputType: O,
                            unlinkUser: T
                        })]
                    })
                },
                Fm = function() {
                    var n = function() {
                        var n = (0, Nn.useState)(0),
                            e = (0, Ln.A)(n, 2),
                            t = e[0],
                            i = e[1],
                            a = (0, Nn.useState)({}),
                            o = (0, Ln.A)(a, 2),
                            r = o[0],
                            l = o[1],
                            s = (0, Nn.useState)(!1),
                            c = (0, Ln.A)(s, 2),
                            d = c[0],
                            u = c[1],
                            p = (0, Nn.useState)(null),
                            f = (0, Ln.A)(p, 2),
                            m = f[0],
                            h = f[1],
                            x = (0, Nn.useState)(!1),
                            g = (0, Ln.A)(x, 2),
                            v = g[0],
                            y = g[1],
                            b = (0, Nn.useState)({}),
                            A = (0, Ln.A)(b, 2),
                            _ = A[0],
                            j = A[1],
                            C = (0, Nn.useState)(null),
                            w = (0, Ln.A)(C, 2),
                            k = w[0],
                            S = w[1],
                            P = (0, Nn.useReducer)(Cd.I, Cd.u),
                            E = (0, Ln.A)(P, 2),
                            R = E[0],
                            M = E[1],
                            O = (0, Sd.t)().customers,
                            T = (0, Nn.useContext)(Wn),
                            N = T.setPage,
                            D = T.shouldReload,
                            z = T.setShouldReload,
                            q = T.setIsLoading,
                            L = T.isLoading,
                            I = T.openModal,
                            F = T.modalCheckout,
                            U = T.setModalCheckout,
                            Q = T.loadingModalCheckout,
                            V = T.setLoadingModalCheckout,
                            B = T.querieSelected,
                            $ = T.modalSuggestion,
                            J = T.setModalSuggestion,
                            K = T.data,
                            W = T.setData,
                            H = (0, be.lc)().HandleEvent,
                            Y = !!r && Object.values(r).some(function(n) {
                                return null !== n && void 0 !== n && "" !== n
                            }),
                            G = function() {
                                y(!1)
                            },
                            X = (0, Nn.useCallback)(function() {
                                M({
                                    type: "CLOSE_MODAL_CUSTOMER"
                                })
                            }, []),
                            Z = function(n) {
                                M({
                                    type: "SET_CUSTOMER",
                                    payload: {
                                        customer: n
                                    }
                                })
                            },
                            nn = function() {
                                y(!0)
                            },
                            en = (0, Nn.useMemo)(function() {
                                return "".concat("https://backend.jusfy.com.br/api", "/queries/list_queries")
                            }, []),
                            tn = (0, Nn.useMemo)(function() {
                                return {
                                    items_per_page: 10
                                }
                            }, []),
                            an = (0, Nn.useMemo)(function() {
                                return !(null === K || void 0 === K || !K.data) && (Array.isArray(K.data[0]) ? K.data.some(function(n) {
                                    return n.some(function(n) {
                                        return "pending" === n.status
                                    })
                                }) : K.data.some(function(n) {
                                    return "pending" === n.status
                                }))
                            }, [null === K || void 0 === K ? void 0 : K.data]),
                            on = (0, Nn.useCallback)(function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                    var t, i, a;
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                return u(null === e || void 0 === e ? void 0 : e.id), n.p = 1, n.n = 2, ld(null === e || void 0 === e ? void 0 : e.id);
                                            case 2:
                                                H("Repeat Query Clicked", {
                                                    query_type: null === e || void 0 === e ? void 0 : e.feature_type_name
                                                }), z(!0), h(null), n.n = 4;
                                                break;
                                            case 3:
                                                n.p = 3, 403 === (null === (a = n.v) || void 0 === a || null === (t = a.response) || void 0 === t ? void 0 : t.status) && (ti.oR.error("Voc\xea n\xe3o tem cr\xe9ditos suficientes para refazer esta consulta."), h(null), i = {
                                                    identification: null === e || void 0 === e ? void 0 : e.feature_type_name,
                                                    name: null === e || void 0 === e ? void 0 : e.type,
                                                    price: null === e || void 0 === e ? void 0 : e.price
                                                }, I("BUY_CREDITS_MODAL", {
                                                    queryOption: i
                                                }));
                                            case 4:
                                                return n.p = 4, u(null), n.f(4);
                                            case 5:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [1, 3, 4, 5]
                                    ])
                                }));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }(), [H, z, I]),
                            rn = (0, Nn.useCallback)(function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                return n.p = 0, n.n = 1, od(null === e || void 0 === e ? void 0 : e.id);
                                            case 1:
                                                H("Query Performed Deleted", {
                                                    query_type: null === e || void 0 === e ? void 0 : e.feature_type_name,
                                                    status: null === e || void 0 === e ? void 0 : e.status
                                                }), z(!0), h(null), j({}), G(), n.n = 3;
                                                break;
                                            case 2:
                                                n.p = 2, n.v, ti.oR.error("Erro ao deletar consulta. Por favor, tente novamente mais tarde.");
                                            case 3:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [0, 2]
                                    ])
                                }));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }(), [H, z]),
                            ln = (0, Nn.useCallback)(function(n) {
                                H("Query Report Downloaded", {
                                    query_type: null === n || void 0 === n ? void 0 : n.feature_type_name,
                                    where: "history"
                                }), window.open(null === n || void 0 === n ? void 0 : n.pdf, "_blank")
                            }, [H]),
                            sn = (0, Nn.useCallback)(function(n) {
                                return "text" !== R.inputType || n && "" !== (null === n || void 0 === n ? void 0 : n.trim()) ? !("select" !== R.inputType || null !== n && void 0 !== n && n.name) && (M({
                                    type: "SET_ERROR",
                                    payload: {
                                        error: "Selecione um cliente"
                                    }
                                }), !0) : (M({
                                    type: "SET_ERROR",
                                    payload: {
                                        error: "Preencha o nome do cliente"
                                    }
                                }), !0)
                            }, [M, R.inputType]),
                            cn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                var e;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            if (!sn(R.customer)) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            return n.p = 1, n.n = 2, (0, wd.ff)(R.customer);
                                        case 2:
                                            e = n.v, ti.oR.success("Cliente criado com sucesso!"), Z(e.data), pn("select"), H("Create User LinkUser", {
                                                is_universal: !1,
                                                feature_type_name: R.feature_type_name,
                                                context: "history"
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao criar cliente. Tente novamente.");
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3]
                                ])
                            })), [R.customer, sn, R.feature_type_name, H]),
                            dn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            if (!sn(R.customer)) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            return n.p = 1, n.n = 2, (0, wd.hG)(R.id);
                                        case 2:
                                            ti.oR.success("Cliente desvinculado com sucesso!"), X(), z(!0), H("Unlik User", {
                                                is_universal: !1,
                                                feature_type_name: R.feature_type_name,
                                                context: "history"
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao desvincular cliente. Tente novamente.");
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3]
                                ])
                            })), [R.customer, sn, X, R.id, R.feature_type_name, H]),
                            un = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            if (!sn(R.customer)) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            return n.p = 1, n.n = 2, (0, kd.X)(R);
                                        case 2:
                                            ti.oR.success("Cliente atualizado com sucesso!"), z(!0), X(), H("Update Link User", {
                                                is_universal: !1,
                                                feature_type_name: R.feature_type_name,
                                                context: "history"
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao atualizar cliente. Tente novamente.");
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3]
                                ])
                            })), [z, R, sn, X, H]),
                            pn = function(n) {
                                M({
                                    type: "SET_INPUT_TYPE",
                                    payload: {
                                        inputType: n
                                    }
                                })
                            };
                        (0, Nn.useEffect)(function() {
                            M({
                                type: "SET_ERROR",
                                payload: {
                                    error: ""
                                }
                            })
                        }, [R.customer, R.inputType]);
                        var fn = (0, Nn.useCallback)(function(n) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                if ("pending" !== n.status && "error" !== n.status && n.status) {
                                    H("Query Performed Opened", {
                                        where: e,
                                        query_type: null === n || void 0 === n ? void 0 : n.feature_type_name
                                    });
                                    var t = Ed(n);
                                    t && window.open(t, "_blank")
                                }
                            }, [H]),
                            mn = (0, Nn.useCallback)(function(n) {
                                var e, t = "lawsuit" !== (null === n || void 0 === n ? void 0 : n.feature_type_name),
                                    i = !(null === n || void 0 === n || null === (e = n.client_customer) || void 0 === e || !e.name),
                                    a = {
                                        success: [{
                                            text: "Abrir",
                                            action: function(e) {
                                                e.stopPropagation(), fn(n, "button")
                                            }
                                        }, {
                                            text: i ? "Editar cliente" : "Vincular cliente",
                                            action: function(e) {
                                                e.stopPropagation(), H(i ? "Edit Link User" : "Click Link User", {
                                                    query_type: null === n || void 0 === n ? void 0 : n.feature_type_name,
                                                    is_universal: !1,
                                                    context: "history"
                                                }), M({
                                                    type: "OPEN_MODAL_CUSTOMER",
                                                    payload: {
                                                        id: n.id,
                                                        customer: null === n || void 0 === n ? void 0 : n.client_customer,
                                                        edit: i,
                                                        inputType: i ? "update" : "select",
                                                        feature_type_name: null === n || void 0 === n ? void 0 : n.feature_type_name
                                                    }
                                                })
                                            }
                                        }, t && {
                                            text: "Baixar relat\xf3rio",
                                            action: function(e) {
                                                e.stopPropagation(), ln(n)
                                            }
                                        }, {
                                            text: "Excluir",
                                            action: function(e) {
                                                e.stopPropagation(), j(n), nn()
                                            }
                                        }],
                                        error: [{
                                            text: "Refazer consulta",
                                            action: function(e) {
                                                e.stopPropagation(), on(n)
                                            }
                                        }, {
                                            text: "Excluir",
                                            action: function(e) {
                                                e.stopPropagation(), rn(n)
                                            }
                                        }],
                                        pending: [{
                                            text: i ? "Editar cliente" : "Vincular cliente",
                                            action: function(e) {
                                                e.stopPropagation(), H(i ? "Edit Link User" : "Click Link User", {
                                                    query_type: null === n || void 0 === n ? void 0 : n.feature_type_name,
                                                    is_universal: !1,
                                                    context: "history"
                                                }), M({
                                                    type: "OPEN_MODAL_CUSTOMER",
                                                    payload: {
                                                        id: n.id,
                                                        customer: null === n || void 0 === n ? void 0 : n.client_customer,
                                                        edit: i,
                                                        inputType: i ? "update" : "select",
                                                        feature_type_name: null === n || void 0 === n ? void 0 : n.feature_type_name
                                                    }
                                                })
                                            }
                                        }],
                                        error_global: [{
                                            text: "Excluir",
                                            action: function(e) {
                                                e.stopPropagation(), rn(n)
                                            }
                                        }]
                                    };
                                return a[n.status] || a.error_global
                            }, [fn, ln, rn, on, nn]),
                            hn = (0, Nn.useCallback)(function(n, e, t) {
                                n.stopPropagation(), m !== e && H("Query Performed Opened", {
                                    where: "button",
                                    query_type: null === t || void 0 === t ? void 0 : t.feature_type_name
                                }), h(function(n) {
                                    return n === e ? null : e
                                }), j({})
                            }, [m, H]),
                            xn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                var e, i;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            return e = new URLSearchParams((0, Re.A)((0, Re.A)({}, tn), {}, {
                                                page: t + 1
                                            }, r)).toString(), q(!0), n.p = 1, n.n = 2, rd("".concat(en, "?").concat(e));
                                        case 2:
                                            i = n.v, W(i.data), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao carregar consultas. Tente novamente.");
                                        case 4:
                                            return n.p = 4, q(!1), n.f(4);
                                        case 5:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3, 4, 5]
                                ])
                            })), [en, tn, t, r, q]),
                            gn = (0, Nn.useMemo)(function() {
                                var n, e = [];
                                return null === K || void 0 === K || null === (n = K.data) || void 0 === n || n.forEach(function(n, t) {
                                    if (n.length > 1) {
                                        var i = n[0],
                                            a = n.filter(function(n) {
                                                return "success" === n.status
                                            }).length,
                                            o = n.filter(function(n) {
                                                return "pending" === n.status
                                            }).length,
                                            r = n.filter(function(n) {
                                                return "error" === n.status
                                            }).length;
                                        e.push({
                                            type: "group",
                                            document: i.document,
                                            document_type: i.document_type,
                                            client: " ",
                                            date: i.date,
                                            successCount: a,
                                            pendingCount: o,
                                            errorCount: r,
                                            items: n.map(function(n, e) {
                                                var i, a = Rd(null === n || void 0 === n ? void 0 : n.type, null === n || void 0 === n ? void 0 : n.query_subtype);
                                                return {
                                                    typeQuery: a,
                                                    date: Md(n),
                                                    status: n.status,
                                                    id: n.id,
                                                    client: (null === n || void 0 === n || null === (i = n.client_customer) || void 0 === i ? void 0 : i.name) || " ",
                                                    document_type: n.document_type,
                                                    feature_type_name: n.feature_type_name,
                                                    query_subtype: n.query_subtype,
                                                    statusComponent: jd[null === n || void 0 === n ? void 0 : n.status] || jd.error_global,
                                                    actions: (0, Kn.jsx)(pd, {
                                                        onClick: function(i) {
                                                            return hn(i, "".concat(t, "-").concat(e), n)
                                                        },
                                                        type: a,
                                                        query_subtype: null === n || void 0 === n ? void 0 : n.query_subtype,
                                                        menuOpen: m === "".concat(t, "-").concat(e),
                                                        itemsMenu: mn(n),
                                                        status: null === n || void 0 === n ? void 0 : n.status,
                                                        reprocessLoading: d === (null === n || void 0 === n ? void 0 : n.id)
                                                    }, "action-".concat(t, "-").concat(e))
                                                }
                                            })
                                        })
                                    } else {
                                        var l, s = n[0],
                                            c = Rd(null === s || void 0 === s ? void 0 : s.type, null === s || void 0 === s ? void 0 : s.query_subtype);
                                        e.push({
                                            type: "single",
                                            document: s.document,
                                            client: (null === s || void 0 === s || null === (l = s.client_customer) || void 0 === l ? void 0 : l.name) || " ",
                                            document_type: s.document_type,
                                            feature_type_name: s.feature_type_name,
                                            typeQuery: c,
                                            date: Md(s),
                                            status: s.status,
                                            id: null === s || void 0 === s ? void 0 : s.id,
                                            statusComponent: jd[null === s || void 0 === s ? void 0 : s.status] || jd.error_global,
                                            actions: (0, Kn.jsx)(pd, {
                                                onClick: function(n) {
                                                    return hn(n, t, s)
                                                },
                                                type: c,
                                                query_subtype: null === s || void 0 === s ? void 0 : s.query_subtype,
                                                menuOpen: m === t,
                                                itemsMenu: mn(s),
                                                status: null === s || void 0 === s ? void 0 : s.status,
                                                reprocessLoading: d === (null === s || void 0 === s ? void 0 : s.id)
                                            }, "action-".concat(t))
                                        })
                                    }
                                }), e
                            }, [null === K || void 0 === K ? void 0 : K.data, m, hn, mn, d]),
                            vn = (0, Nn.useMemo)(function() {
                                return t + 1
                            }, [t]),
                            yn = (0, Nn.useCallback)(function(n) {
                                n < 1 || n > (null === K || void 0 === K ? void 0 : K.totalPages) || n === vn || (i(n - 1), h(null))
                            }, [null === K || void 0 === K ? void 0 : K.totalPages, vn]),
                            bn = (0, Nn.useCallback)(function() {
                                z(!0), H("Query Refresh Button Clicked")
                            }, [z, H]);
                        return (0, Nn.useEffect)(function() {
                            i(0)
                        }, [r]), (0, Nn.useEffect)(function() {
                            D && (xn(), z(!1), d && i(0))
                        }, [D, xn, z, d]), (0, Nn.useEffect)(function() {
                            xn()
                        }, [xn]), {
                            data: K,
                            loading: L,
                            pagination: t,
                            setData: W,
                            setLoading: q,
                            setPagination: i,
                            setPage: N,
                            shouldReload: D,
                            setShouldReload: z,
                            featureTypesUrl: fn,
                            openInNewTab: ln,
                            getUrlsRedirects: Ed,
                            itemCard: gn,
                            changePage: yn,
                            currPage: vn,
                            reloadPage: bn,
                            modalCheckout: F,
                            setModalCheckout: U,
                            loadingModalCheckout: Q,
                            setLoadingModalCheckout: V,
                            querieSelected: B,
                            hasQueryPending: an,
                            setQueryParams: l,
                            queryParams: r,
                            modalConfirmed: v,
                            closeModal: G,
                            deleteQuery: rn,
                            queriesToDelete: _,
                            hasParams: Y,
                            modalSuggestion: $,
                            setModalSuggestion: J,
                            expandedIndex: k,
                            toggleExpand: function(n) {
                                S(k === n ? null : n)
                            },
                            state: R,
                            closeModalCusTomer: X,
                            onChangeCustomer: Z,
                            linkUser: cn,
                            updateCustomer: un,
                            customers: O,
                            changeInputType: pn,
                            unlinkUser: dn,
                            setOpenIndexMenu: h
                        }
                    }();
                    return (0, Kn.jsx)(Im, (0, Re.A)({}, n))
                },
                Um = Xn.default.div(dp || (dp = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  justify-content: center;\n  margin-top: 32px;\n\n  ul {\n    align-self: center;\n  }\n\n  .page-link {\n    font-family: "Noto Sans" !important;\n  }\n']))),
                Qm = Xn.default.span(up || (up = (0, Gn.A)(['\n  color: #111219;\n  font-size: 13px;\n  font-family: "Noto Sans";\n  font-weight: 400;\n']))),
                Vm = Xn.default.span(pp || (pp = (0, Gn.A)(['\n  color: #111219;\n  font-size: 14px;\n  font-family: "Noto Sans";\n  font-weight: 600;\n']))),
                Bm = Xn.default.div(fp || (fp = (0, Gn.A)(["\n  display: flex;\n  gap: 10px;\n  padding-right: 30px;\n"]))),
                $m = (Xn.default.div(mp || (mp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n"]))), Xn.default.h1(hp || (hp = (0, Gn.A)(["\n  color: ", ';\n  font-size: 20px;\n  font-family: "Noto Sans";\n'])), function(n) {
                    return n.theme.colors.black.primary
                }), Xn.default.span(xp || (xp = (0, Gn.A)(['\n  font-family: "Noto Sans";\n']))), Xn.default.span(gp || (gp = (0, Gn.A)(["\n  color: ", ';\n  font-weight: bold;\n  cursor: pointer;\n  font-family: "Noto Sans";\n'])), function(n) {
                    return n.theme.colors.green.primary
                }), (0, Xn.default)(Dn.A)(vp || (vp = (0, Gn.A)(["\n  width: ", "px;\n  height: ", "px;\n  cursor: pointer;\n"])), function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                })),
                Jm = Xn.default.div(yp || (yp = (0, Gn.A)(['\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  font-family: "Noto Sans";\n\n  span {\n    font-weight: 400;\n    position: relative;\n    top: -1px;\n  }\n']))),
                Km = Xn.default.div(bp || (bp = (0, Gn.A)(["\n  width: 130.75;\n"]))),
                Wm = Xn.default.div(Ap || (Ap = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: center;\n\n  h2 {\n    color: #5e5e60;\n    text-align: center;\n\n    font-family: ", ";\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 140%;\n  }\n\n  p {\n    color: #5e5e60;\n    text-align: center;\n    font-family: ", ";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n\n  div {\n    text-align: center;\n  }\n\n  button {\n    border: 0;\n    border-radius: 5px;\n    height: 40px;\n    cursor: pointer;\n    font-size: 14px;\n    font-family: ", ";\n    font-weight: 600;\n    padding: 0px 24px;\n    color: #fff;\n    background-color: #01ab7d;\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                Hm = Xn.default.div(_p || (_p = (0, Gn.A)(["\n  display: flex;\n  padding: 24px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  align-self: stretch;\n  border-radius: 7px;\n  border: 1px solid #e7e8ec;\n  background: #fff;\n"]))),
                Ym = new Map([
                    ["household_activity", "Grupo econ\xf4mico - Atividade semelhante no endere\xe7o"],
                    ["household", "Grupo econ\xf4mico - Qualquer atividade no endere\xe7o"],
                    ["rfcontact", "Grupo econ\xf4mico - Mesmo contato na Receita Federal"],
                    ["owners", "Grupo econ\xf4mico - Mesmo quadro societ\xe1rio"],
                    ["legal_representative", "Grupo econ\xf4mico - Mesmo representante legal"]
                ]),
                Gm = {
                    success_with_result: (0, Kn.jsx)(Xo.A, {
                        placement: "top",
                        overlay: (0, Kn.jsx)(Uo.A, {
                            className: "tooltip",
                            children: (0, Kn.jsx)("span", {
                                children: "Consulta realizada com sucesso, mas sem resultados."
                            })
                        }),
                        children: (0, Kn.jsx)("div", {
                            children: (0, Kn.jsx)(Yo.A, {
                                text: "Consulta realizada",
                                color: "#017556",
                                backgroundColor: "#e4f6ef"
                            })
                        })
                    }),
                    success: (0, Kn.jsx)(Yo.A, {
                        text: "Consulta realizada",
                        color: "#017556",
                        backgroundColor: "#e4f6ef"
                    }),
                    pending: (0, Kn.jsx)(Xo.A, {
                        placement: "top",
                        overlay: (0, Kn.jsx)(Uo.A, {
                            className: "tooltip",
                            children: (0, Kn.jsx)("span", {
                                children: "Aguarde, a consulta pode demorar alguns minutos para ser conclu\xedda."
                            })
                        }),
                        children: (0, Kn.jsx)("div", {
                            children: (0, Kn.jsx)(Yo.A, {
                                text: "Em processamento",
                                color: "#2E3F54",
                                backgroundColor: "#FFF3CD",
                                children: (0, Kn.jsx)(Mt(), {
                                    type: "spin",
                                    color: "#9154DE",
                                    width: "12px",
                                    height: "21px"
                                })
                            })
                        })
                    }),
                    error: (0, Kn.jsx)(Yo.A, {
                        text: "Erro ao consultar",
                        color: "#D71D1D",
                        backgroundColor: "#ffe5e5"
                    }),
                    error_file: (0, Kn.jsx)(Yo.A, {
                        text: "Erro no arquivo",
                        color: "#D71D1D",
                        backgroundColor: "#ffe5e5"
                    })
                },
                Xm = {
                    CPF: "CPF",
                    CNPJ: "CNPJ",
                    PLATE: "Placa"
                },
                Zm = [{
                    name: "Consultado em",
                    selector: function(n) {
                        return (0, Kn.jsx)(Qm, {
                            children: n.date
                        })
                    },
                    grow: .6,
                    minWidth: "165px"
                }, {
                    name: "Consulta",
                    selector: function(n) {
                        return (0, Kn.jsx)(Qm, {
                            title: n.type,
                            children: "Grupo Econ\xf4mico de CNPJ" === n.type ? Ym.get(n.query_subtype) : n.type
                        })
                    },
                    grow: .6,
                    minWidth: "125px",
                    wrap: !0
                }, {
                    name: "Documento",
                    selector: function(n) {
                        return (0, Kn.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [(0, Kn.jsxs)(Vm, {
                                children: [" ", "Diversos Documentos (", "".concat(Xm[n.documentType]), ")", " "]
                            }), (0, Kn.jsx)(Qm, {
                                children: n.originalFileName
                            })]
                        })
                    },
                    grow: .6,
                    minWidth: "170px"
                }, {
                    name: "Status",
                    selector: function(n) {
                        return function(n) {
                            var e = [{
                                test: function() {
                                    return null === n.downloadLink && "error" === n.status
                                },
                                result: Gm.error_file
                            }].find(function(n) {
                                return n.test()
                            });
                            return e ? e.result : Gm[n.status]
                        }(n)
                    },
                    grow: .6,
                    minWidth: "190px"
                }],
                nh = ["relationship_tree", "lawsuit", "professional_data", "personal_data", "list_vehicles", "credit_restriction", "company_information", "company_partnership", "vehicle_data", "trademarks", "cpf_registration_status", "economic_group", "legal_representative", "owners", "rfcontact", "household", "household_activity"],
                eh = {
                    relationship_tree: "Relationship Tree Open Page Result",
                    professional_data: "Professional Data Open Page Result",
                    personal_data: "Personal Data Open Page Result",
                    list_vehicles: "List Vehicles Open Page Result",
                    credit_restriction: "Credit Restriction Open Page Result",
                    company_information: "Company Information Open Page Result",
                    lawsuit: "Lawsuit Open Page Result",
                    company_partnership: "Company Partnership Open Page Result",
                    vehicle_data: "Vehicle Data Open Page Result",
                    trademarks: "Trademarks Open Page Result",
                    cpf_registration_status: "CPF Registration Status Open Page Result",
                    economic_group: "Economic Group Open Page Result"
                },
                th = Xn.default.button(jp || (jp = (0, Gn.A)(["\n  height: 36px;\n  padding: 0 16px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  border-radius: 5px;\n  border: 1px solid #cac9cf;\n  background-color: #fdfdff;\n\n  ", '\n\n  span {\n    color: #111219;\n    font-size: 14px;\n    font-family: "Noto Sans";\n    font-weight: 600;\n  }\n'])), function(n) {
                    return n.disabled ? "opacity: 0.2;" : ""
                }),
                ih = function(n) {
                    var e = n.children,
                        t = n.iconPath,
                        i = n.disabled,
                        a = n.onClick;
                    return (0, Kn.jsxs)(th, {
                        disabled: i,
                        onClick: a,
                        children: [(0, Kn.jsx)(Dn.A, {
                            src: (0, zn.oK)(t)
                        }), (0, Kn.jsx)("span", {
                            children: e
                        })]
                    })
                },
                ah = t(68500),
                oh = (0, Xn.default)(ah.Ay)(Cp || (Cp = (0, Gn.A)(["\n  font-family: ", ";\n  background-color: ", ';\n  padding: 2px;\n  font-family: "Noto Sans";\n  border-radius: 7px;\n  height: fit-content;\n\n  ::-webkit-scrollbar {\n    width: 12px;\n    height: 3px;\n    border-radius: 20px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #41c78f;\n    padding-left: 16px;\n  }\n'])), function(n) {
                    return n.theme.typography.primary
                }, function(n) {
                    return n.theme.colors.white.tertiary
                }),
                rh = {
                    headRow: {
                        style: {
                            backgroundColor: "#FAFAFA",
                            color: "#A0A0A0",
                            height: 64
                        }
                    },
                    headCells: {
                        style: {
                            color: "#111219",
                            fontSize: 16,
                            fontWeight: 600,
                            padding: "0 0 0 24px"
                        }
                    },
                    rows: {
                        style: {
                            backgroundColor: "#FAFAFA",
                            color: "#111219",
                            padding: "0 0 0 12px",
                            height: 60
                        }
                    }
                },
                lh = function(n) {
                    var e = n.columns,
                        t = n.data;
                    return (0, Kn.jsx)(oh, {
                        columns: e,
                        data: t,
                        customStyles: rh
                    })
                },
                sh = t(59015),
                ch = t.n(sh),
                dh = t(60385),
                uh = function() {
                    var n = (0, Nn.useContext)(Wn).setPage;
                    return (0, Kn.jsx)(Hm, {
                        children: (0, Kn.jsxs)(Wm, {
                            children: [(0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/jusfinder/figure-jusfinder.svg")
                            }), (0, Kn.jsxs)("div", {
                                children: [(0, Kn.jsx)("h2", {
                                    children: " Voc\xea ainda n\xe3o criou nenhuma consulta"
                                }), (0, Kn.jsx)("p", {
                                    children: "Fa\xe7a consultas de diversos documentos com rapidez. Comece agora, anexe uma planilha e otimize suas buscas!"
                                })]
                            }), (0, Kn.jsxs)("button", {
                                onClick: function() {
                                    return n("batchQueries")
                                },
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/flat/add-button-jusfinder.svg")
                                }), " ", "Criar minha primeira consulta"]
                            })]
                        })
                    })
                },
                ph = function(n) {
                    var e = n.data,
                        t = n.loading,
                        i = n.pagination,
                        a = n.setPagination,
                        o = n.setShouldReload,
                        r = n.featureTypesUrl,
                        l = n.openInNewTab,
                        s = n.paginatedData,
                        c = {
                            name: "",
                            center: !0,
                            maxWidth: "250px",
                            selector: function(n) {
                                return (0, Kn.jsx)(Kn.Fragment, {
                                    children: "success" === n.status ? (0, Kn.jsxs)(Bm, {
                                        children: [nh.includes(n.featureTypeName) && (0, Kn.jsx)(ih, {
                                            onClick: function() {
                                                return r(n)
                                            },
                                            iconPath: "/media/flat/external-link.svg",
                                            children: "Abrir"
                                        }), (0, Kn.jsx)(ih, {
                                            onClick: function() {
                                                window.analytics.track("Performed Queries Action Clicked", {
                                                    query_type: n.featureTypeName
                                                }), l(n.downloadLink)
                                            },
                                            iconPath: "/media/flat/download-outline.svg",
                                            children: "Baixar"
                                        })]
                                    }) : "pending" === n.status ? (0, Kn.jsx)(Bm, {
                                        children: (0, Kn.jsx)(ih, {
                                            iconPath: "/media/flat/reload.svg",
                                            onClick: function() {
                                                return o(!0)
                                            },
                                            children: "Atualizar"
                                        })
                                    }) : "error" === n.status && n.downloadLink ? (0, Kn.jsx)(Bm, {
                                        children: (0, Kn.jsx)(ih, {
                                            onClick: function() {
                                                window.analytics.track("Performed Queries Action Clicked", {
                                                    query_type: n.featureTypeName
                                                }), l(n.downloadLink)
                                            },
                                            iconPath: "/media/flat/download-outline.svg",
                                            children: "Baixar"
                                        })
                                    }) : (0, Kn.jsx)(Km, {})
                                })
                            }
                        },
                        d = (0, Kn.jsx)(Kn.Fragment, {
                            children: (0, Kn.jsx)(lh, {
                                columns: [].concat((0, tt.A)(Zm), [c]),
                                data: s
                            })
                        });
                    return (0, Kn.jsxs)(Um, {
                        children: [t ? (0, Kn.jsx)(Eo.A, {
                            variant: "rounded",
                            width: "100%",
                            height: 540,
                            animation: "wave"
                        }) : null !== e && void 0 !== e && e.length ? d : (0, Kn.jsx)(uh, {}), (0, Kn.jsx)(ch(), {
                            previousLabel: (0, Kn.jsxs)(Jm, {
                                children: [(0, Kn.jsx)($m, {
                                    src: (0, zn.oK)("/media/flat/arrow-left-sharped.svg")
                                }), (0, Kn.jsx)("span", {
                                    children: "anterior"
                                })]
                            }),
                            nextLabel: (0, Kn.jsxs)(Jm, {
                                children: [(0, Kn.jsx)("span", {
                                    children: "pr\xf3ximo"
                                }), (0, Kn.jsx)($m, {
                                    src: (0, zn.oK)("/media/flat/arrow-right-sharped.svg")
                                })]
                            }),
                            onPageChange: function(n) {
                                return a(n.selected)
                            },
                            pageRangeDisplayed: 5,
                            pageCount: Math.ceil(e.length / 10),
                            marginPagesDisplayed: 1,
                            pageClassName: "page-item",
                            pageLinkClassName: "page-link",
                            previousClassName: "page-item",
                            previousLinkClassName: "page-link",
                            nextClassName: "page-item",
                            nextLinkClassName: "page-link",
                            breakLabel: "...",
                            breakClassName: "page-item",
                            breakLinkClassName: "page-link",
                            containerClassName: "pagination",
                            activeClassName: "active",
                            selected: i,
                            onClick: function(n) {
                                return (0, dh.T)(n, "JusFinder History Pagination Clicked")
                            }
                        })]
                    })
                },
                fh = function() {
                    var n = function() {
                        var n = (0, Nn.useState)([]),
                            e = (0, Ln.A)(n, 2),
                            t = e[0],
                            i = e[1],
                            a = (0, Nn.useState)(),
                            o = (0, Ln.A)(a, 2),
                            r = o[0],
                            l = o[1],
                            s = (0, Nn.useState)(0),
                            c = (0, Ln.A)(s, 2),
                            d = c[0],
                            u = c[1],
                            p = (0, Nn.useContext)(Wn),
                            f = p.setPage,
                            m = p.shouldReload,
                            h = p.setShouldReload,
                            x = (0, Nn.useMemo)(function() {
                                var n = 10 * d,
                                    e = n + 10;
                                return t.slice(n, e)
                            }, [d, t]),
                            g = (0, be.lc)().HandleEvent,
                            v = function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                    var e;
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                return n.p = 0, l(!0), n.n = 1, rd("".concat("https://backend.jusfy.com.br/api", "/bulk-queries"));
                                            case 1:
                                                e = n.v, i(e.data.queries), n.n = 3;
                                                break;
                                            case 2:
                                                n.p = 2, n.v, ti.oR.error("Erro ao carregar dados de consulta");
                                            case 3:
                                                return n.p = 3, l(!1), n.f(3);
                                            case 4:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [0, 2, 3, 4]
                                    ])
                                }));
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }();
                        (0, Nn.useEffect)(function() {
                            v()
                        }, []), (0, Nn.useEffect)(function() {
                            v()
                        }, [d]), (0, Nn.useEffect)(function() {
                            m && (v(), h(!1))
                        }, [m]);
                        var y = function(n) {
                                return window.open(n, "_blank", "noopener,noreferrer")
                            },
                            b = (0, Nn.useMemo)(function() {
                                return function(n) {
                                    return "/resultado/".concat(n.featureTypeName, "/").concat(n.id, "/").concat(n.type)
                                }
                            }, []);
                        return {
                            data: t,
                            loading: r,
                            pagination: d,
                            setData: i,
                            setLoading: l,
                            setPagination: u,
                            setPage: f,
                            shouldReload: m,
                            setShouldReload: h,
                            featureTypesUrl: function(n) {
                                g(eh[n.featureTypeName], {
                                    context: "performed_queries_list"
                                });
                                var e = b(n);
                                y(e)
                            },
                            openInNewTab: y,
                            getUrlsRedirects: b,
                            paginatedData: x
                        }
                    }();
                    return (0, Kn.jsx)(ph, (0, Re.A)({}, n))
                },
                mh = Xn.default.div(wp || (wp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 16px;\n"]))),
                hh = Xn.default.div(kp || (kp = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n"]))),
                xh = Xn.default.div(Sp || (Sp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  gap: 16px;\n"]))),
                gh = Xn.default.div(Pp || (Pp = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n  }\n"]))),
                vh = (Xn.default.div(Ep || (Ep = (0, Gn.A)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(2, minmax(395px, 1fr));\n\n  @media (max-width: 578px) {\n    grid-template-columns: 1fr;\n  }\n"]))), Xn.default.div(Rp || (Rp = (0, Gn.A)(["\n  display: flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  width: 100%;\n  border-radius: 7px;\n  background: #fafbff;\n\n  span {\n    color: #383839;\n    font: normal 600 16px ", ";\n    line-height: 140%;\n  }\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(Mp || (Mp = (0, Gn.A)(["\n  display: flex;\n  padding: 4px 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  border-radius: 4px;\n  background: #e6f7f2;\n\n  color: #383839;\n  text-align: center;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), (0, Xn.default)(Dn.A)(Op || (Op = (0, Gn.A)([""]))), Xn.default.div(Tp || (Tp = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"])))),
                yh = (Xn.default.div(Np || (Np = (0, Gn.A)(["\n  display: ", ";\n  padding: 12px;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 3px;\n  background: #fff9e6;\n  margin-top: 8px;\n\n  span {\n    color: #383839;\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n    flex: 1;\n  }\n"])), function(n) {
                    return n.isVisible ? "flex" : "none"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }), Xn.default.div(Dp || (Dp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n"]))), Xn.default.button(zp || (zp = (0, Gn.A)(["\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: #806408;\n  font-family: ", ";\n  font-size: ", ';\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n  position: relative;\n\n  &:after {\n    content: ">";\n    position: absolute;\n\n    right: -15px;\n    top: 1px;\n\n    height: 0px;\n    background: #806400;\n  }\n'])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.md
                }), (0, Xn.default)(Dn.A)(qp || (qp = (0, Gn.A)(["\n  margin-top: 3px;\n"]))), t(25502)),
                bh = function(n) {
                    return ot.If.isValid(n)
                },
                Ah = function(n) {
                    return ot.qb.isValid(n)
                },
                _h = function(n, e) {
                    var t = {
                            CPF: bh,
                            CNPJ: Ah,
                            PLATE: yh.A
                        }[e],
                        i = !!t && t(n);
                    return {
                        isValid: i,
                        error: i ? "" : ft.Sr.get(e)
                    }
                },
                jh = "acceptedTerms",
                Ch = function() {
                    return "true" === localStorage.getItem(jh)
                },
                wh = function(n) {
                    localStorage.setItem(jh, String(n))
                },
                kh = ["household", "household_activity", "rfcontact", "owners", "legal_representative"],
                Sh = function(n) {
                    var e = n.documentType,
                        t = n.document,
                        i = n.queries;
                    return rt.A.post("".concat("https://backend.jusfy.com.br/api", "/multiple-queries"), {
                        documentType: e,
                        document: t,
                        queries: i
                    })
                },
                Ph = function(n) {
                    return n.MULTIPLE_QUERIES = "multiple_queries_page", n
                }({}),
                Eh = function() {
                    var n = (0, Nn.useContext)(Wn),
                        e = n.openModal,
                        t = n.creditAvailable,
                        i = n.data,
                        a = n.setPage,
                        o = (0, Nn.useState)(""),
                        r = (0, Ln.A)(o, 2),
                        l = r[0],
                        s = r[1],
                        c = (0, Nn.useState)(ft.d3.CPF),
                        d = (0, Ln.A)(c, 2),
                        u = d[0],
                        p = d[1],
                        f = (0, Nn.useState)(""),
                        m = (0, Ln.A)(f, 2),
                        h = m[0],
                        x = m[1],
                        g = (0, Nn.useState)(""),
                        v = (0, Ln.A)(g, 2),
                        y = v[0],
                        b = v[1],
                        A = (0, Nn.useState)(Ch()),
                        _ = (0, Ln.A)(A, 2),
                        j = _[0],
                        C = _[1],
                        w = (0, Nn.useState)([]),
                        k = (0, Ln.A)(w, 2),
                        S = k[0],
                        P = k[1],
                        E = (0, Nn.useState)((0, Xc.Bt)(ft.d3.CPF, i)),
                        R = (0, Ln.A)(E, 2),
                        M = R[0],
                        O = R[1],
                        T = (0, Nn.useState)(""),
                        N = (0, Ln.A)(T, 2),
                        D = N[0],
                        z = N[1],
                        q = (0, Nn.useState)(!1),
                        L = (0, Ln.A)(q, 2),
                        I = L[0],
                        F = L[1],
                        U = (0, be.lc)().HandleEvent,
                        Q = (0, Nn.useCallback)(function(n) {
                            var e = ft.MU.get(u),
                                t = e ? e(n) : n;
                            s(t)
                        }, [u]),
                        V = (0, Nn.useMemo)(function() {
                            return (0, Xc.zo)(S)
                        }, [S]),
                        B = (0, Nn.useMemo)(function() {
                            return V > t
                        }, [t, V]),
                        $ = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                var t, i;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            return F(!0), n.p = 1, n.n = 2, Sh({
                                                documentType: u,
                                                document: l,
                                                queries: S
                                            });
                                        case 2:
                                            e("AVAILABLE_SOON_MODAL"), U("Document Type Selected", {
                                                documentType: u,
                                                isUniversal: !1
                                            }), U("Queries Selected", {
                                                queries: S,
                                                isUniversal: !1
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, i = n.v, ti.oR.error("Erro ao consultar documentos. Tente novamente mais tarde."), t = i instanceof Error ? null === i || void 0 === i ? void 0 : i.message : JSON.stringify(i), U("Error Submit Queries", {
                                                error: t,
                                                isUniversal: !1
                                            });
                                        case 4:
                                            return n.p = 4, F(!1), n.f(4);
                                        case 5:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3, 4, 5]
                                ])
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        J = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                var e, t, i;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            if (e = _h(l, u), t = e.isValid, i = e.error, t) {
                                                n.n = 1;
                                                break
                                            }
                                            return x(i), n.a(2);
                                        case 1:
                                            if (j) {
                                                n.n = 2;
                                                break
                                            }
                                            return b(ft.Sr.get("TERMS")), n.a(2);
                                        case 2:
                                            if (0 !== S.length) {
                                                n.n = 3;
                                                break
                                            }
                                            return n.a(2, ti.oR.error("Selecione pelo menos uma consulta para continuar."));
                                        case 3:
                                            return n.n = 4, $();
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n)
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    (0, Nn.useEffect)(function() {
                        x("")
                    }, [l]), (0, Nn.useEffect)(function() {
                        j && b("")
                    }, [j]);
                    var K = (0, Nn.useRef)(function(n, e) {
                            var t;
                            return function() {
                                for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                clearTimeout(t), t = setTimeout(function() {
                                    return n.apply(void 0, a)
                                }, e)
                            }
                        }(function(n) {
                            z(n)
                        }, 100)).current,
                        W = (0, Nn.useCallback)(function(n) {
                            K(n)
                        }, [K]);
                    (0, Nn.useEffect)(function() {
                        var n = (0, Xc.Bt)(u, i);
                        if (D.trim()) {
                            var e = n.filter(function(n) {
                                return n.name_query.toLowerCase().includes(D.toLowerCase())
                            });
                            O(e)
                        } else O(n)
                    }, [D, u, i]);
                    return {
                        document: l,
                        documentType: u,
                        error: h,
                        errorTerm: y,
                        acceptedTerm: j,
                        queries: S,
                        queriesRenders: M,
                        sumCreditsQueriesSelected: V,
                        isVisibleAlert: B,
                        onChangeQueryInput: Q,
                        submitQueries: J,
                        onClickAcceptTerm: function() {
                            var n = !j;
                            C(n), wh(n)
                        },
                        chooseQueries: function(n, t, i, a) {
                            if (t <= 0) {
                                var o = {
                                    name: a,
                                    price: i,
                                    identification: kh.includes(n) ? "economic_group" : n
                                };
                                return e("BUY_CREDITS_MODAL", {
                                    queryOption: o,
                                    context: Ph.MULTIPLE_QUERIES
                                }), void U("Opened Modal Buy Credits", {
                                    isUniversal: !1,
                                    query_type: o.identification
                                })
                            }
                            P((0, Xc.ph)(S, n))
                        },
                        chooseDocumentType: function(n) {
                            p(n);
                            var e = (0, Xc.Bt)(n, i);
                            O(e), P([]), s("")
                        },
                        openModal: e,
                        creditAvailable: t,
                        search: D,
                        onChangeSearch: W,
                        backPrevPage: function() {
                            a("query")
                        },
                        loading: I
                    }
                },
                Rh = Xn.default.div(Lp || (Lp = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  h1 {\n    margin: 4px 0 0;\n    font-weight: 700;\n    color: #111219;\n    font-family: "Noto Sans";\n  }\n\n  span {\n    font-family: "Noto Sans";\n    color: #655d79;\n  }\n\n  @media (max-width: 579px) {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n']))),
                Mh = function(n) {
                    var e = n.title,
                        t = n.subtitle;
                    return (0, Kn.jsxs)(Rh, {
                        children: [(0, Kn.jsx)("span", {
                            children: t
                        }), (0, Kn.jsx)("h1", {
                            children: e
                        })]
                    })
                },
                Oh = Xn.default.div(Ip || (Ip = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px !important;\n\n  @media (max-width: 578px) {\n    gap: 14px;\n  }\n\n  @media (max-width: 420px) {\n    gap: 24px;\n  }\n\n  .MuiButtonBase-root {\n    padding: 9px 4px 9px 9px !important;\n  }\n  .MuiFormControlLabel-root {\n    margin: 0 2px 0 -11px !important;\n  }\n\n  ", "\n\n  ", "\n"])), function(n) {
                    return n.error ? "\n    .flex .MuiSvgIcon-root {\n      color: #F0431B !important;\n    }\n  " : "\n    .flex .MuiSvgIcon-root {\n      color: #01AB7D !important;\n    }\n  "
                }, function(n) {
                    var e = n.disabled;
                    n.theme;
                    return e && "\n    /* For\xe7a os Radio Buttons desativados para #808080 */\n    .flex .MuiSvgIcon-root,\n    .flex .MuiRadio-root,\n    .flex .Mui-disabled {\n      color: #808080 !important;\n    }\n\n    .flex label {\n      cursor: not-allowed !important;\n      pointer-events: none;\n    }\n  "
                }),
                Th = Xn.default.div(Fp || (Fp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: ", ";\n  gap: ", ";\n\n  @media (max-width: 578px) {\n    gap: 30px;\n  }\n  @media (max-width: 450px) {\n    gap: 40px;\n  }\n"])), function(n) {
                    return "VERTICAL" === n.orientation ? "column" : "row"
                }, function(n) {
                    return "VERTICAL" === n.orientation ? "2px" : "20px"
                }),
                Nh = Xn.default.label(Up || (Up = (0, Gn.A)(["\n  color: #3f4254;\n  font: normal 400 14px ", ";\n  line-height: 18px;\n  display: inline;\n  align-items: center;\n  cursor: pointer;\n\n  .subtitle {\n    color: gray;\n  }\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                Dh = (Xn.default.span(Qp || (Qp = (0, Gn.A)(["\n  color: #f0431b;\n  font-family: Switzer;\n  font: normal 400 12px ", ";\n  line-height: 21px;\n  letter-spacing: -0.56px;\n"])), function(n) {
                    return n.theme.typography.primary
                }), [{
                    value: "first",
                    title: "Primeira op\xe7\xe3o"
                }, {
                    value: "second",
                    title: "Segunda op\xe7\xe3o"
                }]),
                zh = "VERTICAL",
                qh = "HORIZONTAL",
                Lh = function(n) {
                    var e = n.onChange,
                        t = void 0 === e ? function(n) {
                            return n.target.value
                        } : e,
                        i = n.actived,
                        a = void 0 === i ? "first" : i,
                        o = n.orientation,
                        r = void 0 === o ? zh : o,
                        l = n.options,
                        s = void 0 === l ? Dh : l,
                        c = n.error,
                        d = void 0 !== c && c,
                        u = n.disabled,
                        p = void 0 !== u && u;
                    return (0, Kn.jsx)(Oh, {
                        error: d,
                        disabled: p,
                        children: (0, Kn.jsx)(Me.A, {
                            className: "flex",
                            value: a,
                            onChange: t,
                            children: (0, Kn.jsx)(Th, {
                                orientation: r,
                                disabled: p,
                                children: s.map(function(n, e) {
                                    var i = n.value,
                                        a = n.title;
                                    return (0, Kn.jsx)(Oe.A, {
                                        value: i,
                                        control: (0, Kn.jsx)(Te.A, {
                                            disabled: p
                                        }),
                                        label: (0, Kn.jsx)(Nh, {
                                            className: "title",
                                            onClick: p ? void 0 : function() {
                                                return t({
                                                    target: {
                                                        value: i
                                                    }
                                                })
                                            },
                                            disabled: p,
                                            children: a
                                        })
                                    }, "".concat(i, "-").concat(e))
                                })
                            })
                        })
                    })
                },
                Ih = Xn.default.div(Vp || (Vp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),
                Fh = Xn.default.label(Bp || (Bp = (0, Gn.A)(["\n  font: normal 500 14px ", ";\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 19.6px;\n  text-align: left;\n  color: ", ";\n  margin: 0;\n\n  span {\n    color: #d83143;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.colors.black.primary
                }),
                Uh = Xn.default.input($p || ($p = (0, Gn.A)(["\n  width: 100%;\n  height: 40px;\n\n  gap: 0px;\n  border-radius: 5px !important;\n  border: ", ";\n  padding: 0px 12px 0px 12px;\n  opacity: 0px;\n  outline: none !important;\n  font: normal 400 14px ", " !important;\n  background: ", ";\n\n  ::after {\n    display: none;\n  }\n  ::before {\n    display: none;\n  }\n"])), function(n) {
                    return n.error ? "1px solid #FF3A4F !important" : "1px solid #cac9cf !important"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.disabled ? "rgba(202, 201, 207, 0.20)" : "#ffffff !important"
                }),
                Qh = Xn.default.div(Jp || (Jp = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n"]))),
                Vh = (0, Xn.default)(Ne.A)(Kp || (Kp = (0, Gn.A)(["\n  margin: 0 !important;\n  padding: 0 !important;\n  width: 18px;\n  height: 18px;\n"]))),
                Bh = Xn.default.label(Wp || (Wp = (0, Gn.A)(["\n  font-family: ", "\n  font-size: 12px;\n  color: #3f4254;\n  font-weight: 400;\n\n  a {\n    color: #01ab7d;\n    text-decoration: underline;\n    cursor: pointer;\n    font-weight: 700;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                $h = Xn.default.div(Hp || (Hp = (0, Gn.A)(["\n  color: #e91229;\n  font-family: ", "\n  font-size: 12px;\n  font-weight: 400;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Jh = function(n) {
                    var e = n.label,
                        t = n.optionsDocument,
                        i = void 0 === t ? [{
                            value: "CPF",
                            title: "CPF"
                        }] : t,
                        a = n.actived,
                        o = void 0 === a ? "CPF" : a,
                        r = n.setDocumentType,
                        l = void 0 === r ? function() {} : r;
                    return (0, Kn.jsxs)(Ih, {
                        children: [(0, Kn.jsxs)(Fh, {
                            children: [e, " ", (0, Kn.jsx)("span", {
                                children: "*"
                            })]
                        }), (0, Kn.jsx)(Lh, {
                            orientation: qh,
                            options: i,
                            actived: o,
                            onChange: function(n) {
                                return l(n.target.value)
                            }
                        })]
                    })
                },
                Kh = t(40612),
                Wh = function(n) {
                    var e = n.label,
                        t = n.documentType,
                        i = n.error,
                        a = n.value,
                        o = n.onChange;
                    return (0, Kn.jsxs)(Ih, {
                        children: [(0, Kn.jsxs)(Fh, {
                            children: [e, " (", "".concat(t), ") ", (0, Kn.jsx)("span", {
                                children: "*"
                            })]
                        }), (0, Kn.jsx)(Uh, {
                            value: a,
                            onChange: function(n) {
                                return o(n.target.value)
                            },
                            role: "textbox",
                            error: !!i
                        }), i && (0, Kn.jsx)($h, {
                            children: i
                        })]
                    })
                },
                Hh = function(n) {
                    var e = n.acceptTerm,
                        t = n.setAcceptTerm,
                        i = n.error;
                    return (0, Kn.jsxs)(Kn.Fragment, {
                        children: [(0, Kn.jsxs)(Qh, {
                            children: [(0, Kn.jsx)(Vh, {
                                checked: e,
                                onClick: t
                            }), (0, Kn.jsxs)(Bh, {
                                children: ["Eu li e concordo com os", " ", (0, Kn.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "/terms",
                                    children: "termos de uso"
                                }), " ", "referentes a consulta de dados dentro do JusFinder."]
                            })]
                        }), i && (0, Kn.jsx)($h, {
                            children: i
                        })]
                    })
                },
                Yh = Xn.default.div(Yp || (Yp = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n"]))),
                Gh = Xn.default.h5(Gp || (Gp = (0, Gn.A)(["\n  font: normal 600 20px ", ";\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  line-height: 20px;\n  text-align: left;\n  color: ", ";\n  margin: 0;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.colors.black.primary
                }),
                Xh = Xn.default.span(Xp || (Xp = (0, Gn.A)(["\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #808080;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Zh = Xn.default.h6(Zp || (Zp = (0, Gn.A)(["\n  margin: 0;\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #3f4254;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                nx = function(n) {
                    var e = n.title,
                        t = void 0 === e ? "Adicione o seu ti\u0301tulo" : e,
                        i = n.optionalText,
                        a = void 0 === i ? "" : i,
                        o = n.hasOptional,
                        r = void 0 !== o && o,
                        l = n.subTitle,
                        s = void 0 === l ? "" : l;
                    return (0, Kn.jsxs)(Yh, {
                        children: [(0, Kn.jsxs)(Gh, {
                            hasOptional: r,
                            children: [t, " ", a && (0, Kn.jsx)(Xh, {
                                children: a
                            })]
                        }), (0, Kn.jsx)(Zh, {
                            children: s
                        })]
                    })
                },
                ex = Xn.default.div(nf || (nf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 16px;\n"]))),
                tx = Xn.default.div(ef || (ef = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n  }\n"]))),
                ix = Xn.default.div(tf || (tf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  gap: 16px;\n"]))),
                ax = Xn.default.div(af || (af = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n  }\n"]))),
                ox = Xn.default.div( of || ( of = (0, Gn.A)(["\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fill, minmax(395px, 1fr));\n\n  @media (max-width: 578px) {\n    grid-template-columns: 1fr;\n  }\n"]))),
                rx = Xn.default.div(rf || (rf = (0, Gn.A)(["\n  display: flex;\n  padding: 12px 24px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  width: 100%;\n  border-radius: 7px;\n  background: #fafbff;\n\n  span {\n    color: #383839;\n    font: normal 600 16px ", ";\n    line-height: 140%;\n  }\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                lx = Xn.default.div(lf || (lf = (0, Gn.A)(["\n  display: flex;\n  padding: 4px 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  border-radius: 4px;\n  background: #e6f7f2;\n\n  color: #383839;\n  text-align: center;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                sx = (0, Xn.default)(Dn.A)(sf || (sf = (0, Gn.A)([""]))),
                cx = Xn.default.div(cf || (cf = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                dx = Xn.default.div(df || (df = (0, Gn.A)(["\n  display: ", ";\n  padding: 12px;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 3px;\n  background: #fff9e6;\n  margin-top: 8px;\n\n  span {\n    color: #383839;\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n    flex: 1;\n  }\n"])), function(n) {
                    return n.isVisible ? "flex" : "none"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }),
                ux = Xn.default.div(uf || (uf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  flex: 1;\n"]))),
                px = Xn.default.button(pf || (pf = (0, Gn.A)(["\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: #806408;\n  font-family: ", ";\n  font-size: ", ';\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n  position: relative;\n\n  &:after {\n    content: ">";\n    position: absolute;\n\n    right: -15px;\n    top: 1px;\n\n    height: 0px;\n    background: #806400;\n  }\n'])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.md
                }),
                fx = (0, Xn.default)(Dn.A)(ff || (ff = (0, Gn.A)(["\n  margin-top: 3px;\n"]))),
                mx = Xn.default.div(mf || (mf = (0, Gn.A)(["\n  display: flex;\n  padding: 16px 24px 24px 12px;\n  align-items: flex-start;\n  gap: 0;\n\n  border-radius: 7px;\n  border: 1px solid #e7e8ec;\n  background: #fff;\n  cursor: pointer;\n"]))),
                hx = Xn.default.div(hf || (hf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n\n  .MuiFormControlLabel-root {\n    padding: 0 0 0 0 !important;\n    margin: 0 0 0 0 !important;\n    display: flex !important;\n    align-items: center !important;\n  }\n\n  .MuiFormControlLabel-root.Mui-disabled {\n    .MuiSvgIcon-root,\n    .MuiRadio-root,\n    .Mui-disabled {\n      color: #808080 !important;\n    }\n  }\n  .MuiSvgIcon-root {\n    color: ", " !important;\n  }\n\n  .title {\n    font: normal 400 14px ", " !important;\n\n    line-height: 19.6px !important;\n    text-align: left;\n    margin: 0 !important;\n    cursor: pointer;\n\n    span {\n      color: #808080;\n      font: normal 400 13px ", ";\n      line-height: 140%;\n    }\n  }\n"])), function(n) {
                    return n.checked ? "#01AB7D" : "#A0A0A0"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                xx = Xn.default.div(xf || (xf = (0, Gn.A)(["\n  display: flex;\n  align-items: start;\n  width: 100%;\n"]))),
                gx = Xn.default.div(gf || (gf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),
                vx = Xn.default.div(vf || (vf = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: space-between;\n  align-self: stretch;\n  width: 100%;\n  position: relative;\n\n  span {\n    color: #131313;\n\n    gap: 4px;\n    align-items: center;\n    font: normal 500 14px ", ";\n    line-height: 140%;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                yx = Xn.default.div(yf || (yf = (0, Gn.A)(["\n  display: flex;\n  padding: 4px 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  border-radius: 4px;\n  background: #e6f7f2;\n\n  color: #383839;\n  text-align: center;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                bx = (0, Xn.default)(Dn.A)(bf || (bf = (0, Gn.A)([""]))),
                Ax = Xn.default.span(Af || (Af = (0, Gn.A)(["\n  color: rgba(0, 0, 0, 0.8);\n\n  font: normal 400 14px ", ";\n  line-height: 140%;\n  margin-bottom: 16px;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                _x = t(72825),
                jx = ((0, Xn.default)(Uo.A)(_f || (_f = (0, Gn.A)(['\n  font-family: "Noto Sans" !important;\n  width: fit-content !important;\n\n  strong {\n    font-weight: 700;\n  }\n']))), (0, Xn.default)(Dn.A)(jf || (jf = (0, Gn.A)([""])))),
                Cx = Xn.default.div(Cf || (Cf = (0, Gn.A)(["\n  position: relative;\n  display: inline-block;\n  cursor: help;\n"]))),
                wx = Xn.default.div(wf || (wf = (0, Gn.A)(["\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 8px;\n\n  padding: 24px;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s, visibility 0.2s;\n  pointer-events: none;\n  display: flex;\n  width: 292px;\n  flex-direction: column;\n  align-items: flex-start;\n\n  ", ':hover & {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    border-left: 8px solid transparent;\n    border-right: 8px solid transparent;\n    border-top: 8px solid #fff;\n  }\n'])), Cx),
                kx = Xn.default.button(kf || (kf = (0, Gn.A)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    color: #374151;\n  }\n"]))),
                Sx = Xn.default.h3(Sf || (Sf = (0, Gn.A)(['\n  color: #111219;\n  font-family: "Noto Sans";\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n']))),
                Px = Xn.default.div(Pf || (Pf = (0, Gn.A)([""]))),
                Ex = Xn.default.p(Ef || (Ef = (0, Gn.A)(['\n  color: #5e5e60;\n  font-family: "Noto Sans";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  strong {\n    color: #5e5e68;\n    font-weight: 600;\n  }\n']))),
                Rx = function(n) {
                    var e = n.title,
                        t = n.description;
                    return (0, Kn.jsxs)(Cx, {
                        children: [(0, Kn.jsx)(jx, {
                            src: (0, zn.oK)("/media/pasep/info-toggle.svg")
                        }), (0, Kn.jsxs)(wx, {
                            children: [(0, Kn.jsx)(kx, {
                                children: (0, Kn.jsx)(_x.fUT, {})
                            }), (0, Kn.jsx)(Sx, {
                                children: e
                            }), (0, Kn.jsx)(Px, {
                                children: (0, Kn.jsxs)(Ex, {
                                    children: [(0, Kn.jsx)("strong", {
                                        children: " Resultados poss\xedveis da busca: "
                                    }), t]
                                })
                            })]
                        })]
                    })
                },
                Mx = function(n) {
                    var e = n.checked,
                        t = n.feature_type_name,
                        i = n.text_info_credit,
                        a = (n.credits, n.universal_price),
                        o = n.description,
                        r = n.onChange,
                        l = n.isUniversal,
                        s = n.name_query,
                        c = n.valueCredits;
                    return (0, Kn.jsx)(mx, {
                        onClick: r,
                        children: (0, Kn.jsxs)(xx, {
                            children: [(0, Kn.jsx)(hx, {
                                checked: e,
                                children: (0, Kn.jsx)(Oe.A, {
                                    className: "flex",
                                    control: (0, Kn.jsx)(xt.A, {
                                        checked: e,
                                        onChange: r
                                    }),
                                    label: ""
                                })
                            }), (0, Kn.jsxs)(gx, {
                                children: [(0, Kn.jsxs)(vx, {
                                    children: [(0, Kn.jsxs)("span", {
                                        children: [s, " ", (0, Kn.jsx)(Rx, {
                                            title: s,
                                            description: bt.KI[t] || ""
                                        })]
                                    }), l && (0, Kn.jsxs)(yx, {
                                        children: [(0, Kn.jsx)(bx, {
                                            src: (0, zn.oK)("/media/jusfinderuniversal/credit-dolar.svg")
                                        }), a]
                                    })]
                                }), (0, Kn.jsx)(Ax, {
                                    children: o
                                }), l ? null : c > 0 ? (0, Kn.jsx)(Yo.A, {
                                    text: i
                                }) : (0, Kn.jsx)(Yo.A, {
                                    text: "Voc\xea n\xe3o possui cr\xe9ditos",
                                    backgroundColor: "#FBEAEC",
                                    color: "#D83143"
                                })]
                            })]
                        })
                    })
                },
                Ox = function() {
                    var n = Eh(),
                        e = n.documentType,
                        t = n.chooseDocumentType,
                        i = n.error,
                        a = n.document,
                        o = n.onChangeQueryInput,
                        r = n.acceptedTerm,
                        l = n.onClickAcceptTerm,
                        s = n.errorTerm,
                        c = n.queriesRenders,
                        d = n.chooseQueries,
                        u = n.queries,
                        p = n.submitQueries,
                        f = n.search,
                        m = n.onChangeSearch,
                        h = n.backPrevPage,
                        x = n.loading;
                    return (0, Kn.jsxs)(mh, {
                        children: [(0, Kn.jsx)(hh, {
                            children: (0, Kn.jsx)(Mh, {
                                title: "Nova Consulta",
                                subtitle: "jusfinder"
                            })
                        }), (0, Kn.jsxs)(xh, {
                            children: [(0, Kn.jsxs)(so, {
                                children: [(0, Kn.jsx)(nx, {
                                    title: "Dados para consulta"
                                }), (0, Kn.jsxs)(gh, {
                                    children: [(0, Kn.jsx)(Jh, {
                                        optionsDocument: Kh.lw,
                                        actived: e,
                                        label: "Formato do documento",
                                        setDocumentType: t
                                    }), (0, Kn.jsx)(Wh, {
                                        label: "Dados para a consulta",
                                        documentType: (0, Xc.Q6)(e),
                                        error: i,
                                        value: a,
                                        onChange: o
                                    })]
                                }), (0, Kn.jsx)(Hh, {
                                    acceptTerm: r,
                                    setAcceptTerm: l,
                                    error: s
                                })]
                            }), (0, Kn.jsxs)(so, {
                                children: [(0, Kn.jsx)(nx, {
                                    title: "Sele\xe7\xe3o de consultas"
                                }), (0, Kn.jsx)(yl.S, {
                                    search: f,
                                    onChange: function(n) {
                                        return m(n.target.value)
                                    },
                                    placeholder: "Pesquise t\xedtulo"
                                }), f && 0 === (null === c || void 0 === c ? void 0 : c.length) && (0, Kn.jsx)(xu, {}), (0, Kn.jsx)(ox, {
                                    children: null === c || void 0 === c ? void 0 : c.map(function(n, e) {
                                        return (0, Kn.jsx)(Mx, {
                                            checked: u.includes(n.feature_type_name),
                                            description: n.description,
                                            isUniversal: !1,
                                            universal_price: n.universal_price,
                                            feature_type_name: n.feature_type_name,
                                            name_query: n.name_query,
                                            credits: n.credits,
                                            valueCredits: n.valueCredits,
                                            text_info_credit: n.text_info_credit,
                                            onChange: function() {
                                                return d(n.feature_type_name, n.valueCredits, null === n || void 0 === n ? void 0 : n.price, null === n || void 0 === n ? void 0 : n.name_query)
                                            }
                                        }, n.feature_type_name)
                                    })
                                })]
                            })]
                        }), (0, Kn.jsxs)(vh, {
                            children: [(0, Kn.jsx)(qn.A, {
                                padding: "10px 32px",
                                borderRadius: "5px",
                                backgroundColor: "rgb(253, 253, 255)",
                                color: "rgb(17, 18, 25)",
                                border: "1px solid rgb(202, 201, 207)",
                                onClick: h,
                                children: "Voltar"
                            }), (0, Kn.jsx)(qn.A, {
                                padding: "10px 32px",
                                borderRadius: "5px",
                                onClick: p,
                                children: x ? (0, Kn.jsx)(Mt(), {
                                    type: "spinningBubbles",
                                    color: "#fff",
                                    height: 20,
                                    width: 20
                                }) : "Consultar"
                            })]
                        })]
                    })
                },
                Tx = function() {
                    var n = (0, Nn.useContext)(Wn),
                        e = n.page,
                        t = n.setPage,
                        i = (0, pt.g)(),
                        a = new Map([
                            ["query", ad],
                            ["history", Fm],
                            ["batchQueries", Po],
                            ["history_batch", fh],
                            ["multipleQueriesPage", Ox]
                        ]).get(e);
                    return (0, Nn.useEffect)(function() {
                        i.page && t(i.page)
                    }, [i.page, t]), "MultipleQueriesPage" === e ? (0, Kn.jsx)(Ox, {}) : (0, Kn.jsx)(a, {})
                },
                Nx = function() {
                    var n = (0, xe.A)(ge.$.KILL_SWITCH.ENABLED_BANNER_UNIVERSAL_MIGRATION).isFeatureFlagEnable,
                        e = (0, he.HW)().preferences;
                    return (0, Kn.jsxs)(Kn.Fragment, {
                        children: [n && (0, Kn.jsx)(Ee, {}), (0, Kn.jsx)(Yn, {
                            children: (0, Kn.jsxs)(Tn.A, {
                                hasMargin: "v2" === (null === e || void 0 === e ? void 0 : e.menuVersion),
                                children: [(0, Kn.jsx)(Qa, {}), (0, Kn.jsx)(le, {}), (0, Kn.jsx)(Tx, {})]
                            })
                        })]
                    })
                },
                Dx = t(67847),
                zx = Xn.default.div(Rf || (Rf = (0, Gn.A)(["\n  display: ", ';\n  justify-content: space-between;\n  align-items: flex-end;\n\n  h1 {\n    margin: 4px 0 0;\n    font-weight: 700;\n    color: #111219;\n    font-family: "Noto Sans";\n  }\n\n  span {\n    font-family: "Noto Sans";\n    color: #655d79;\n  }\n\n  @media (max-width: 579px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 24px;\n\n    > div {\n      margin-top: ', ";\n    }\n\n    h1 {\n      font-size: 32px;\n    }\n\n    span {\n    }\n  }\n"])), function(n) {
                    return n.isMultipleQueries ? "none" : "flex"
                }, function(n) {
                    return n.isPageQueries ? "70px" : ""
                }),
                qx = Xn.default.div(Mf || (Mf = (0, Gn.A)(["\n  display: ", ";\n  gap: 16px;\n"])), function(n) {
                    return n.isVisible ? "none" : "flex"
                }),
                Lx = Xn.default.div(Of || (Of = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))),
                Ix = Xn.default.button(Tf || (Tf = (0, Gn.A)(["\n  border: 0;\n  border-radius: 5px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: ", ";\n  font-weight: 700;\n  padding: 0px 24px;\n  color: #fff;\n  background-color: #01ab7d;\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Fx = new Map([
                    ["query", {
                        title: "Nova Consulta",
                        subtitle: "Consulta",
                        buttonText: "Ver consultas realizadas",
                        pageRedirect: "history"
                    }],
                    ["history", {
                        title: "Consultas realizadas",
                        subtitle: "Consultas",
                        buttonText: "Voltar para nova consulta",
                        buttonIcon: "arrow-left",
                        pageRedirect: "query"
                    }],
                    ["batchQueries", {
                        title: "Consultas em lote",
                        subtitle: "Consultas",
                        pageRedirect: "query"
                    }],
                    ["history_batch", {
                        title: "Consultas em lote",
                        subtitle: "jusfinder",
                        pageRedirect: "batchQueries",
                        buttonText: "Criar consulta em lote",
                        buttonIcon: "add-button-jusfinder"
                    }],
                    ["MultipleQueriesPage", {
                        title: "Consultas realizadas",
                        subtitle: "Consultas",
                        buttonText: "Voltar para nova consulta",
                        buttonIcon: "arrow-left",
                        pageRedirect: "query"
                    }]
                ]),
                Ux = function() {
                    var n = function() {
                            var n = (0, Nn.useContext)(Dx.g),
                                e = n.page,
                                t = n.setPage,
                                i = n.setModalSuggestion,
                                a = Fx.get(e),
                                o = a.title,
                                r = a.subtitle,
                                l = a.buttonText,
                                s = a.buttonIcon,
                                c = a.pageRedirect,
                                d = (0, Nn.useCallback)(function() {
                                    c && t(c)
                                }, [c, t]);
                            return {
                                title: o,
                                subtitle: r,
                                buttonText: l,
                                buttonIcon: s,
                                pageRedirect: c,
                                redirect: d,
                                openModalSuggestion: function() {
                                    i(!0)
                                }
                            }
                        }(),
                        e = n.title,
                        t = n.subtitle,
                        i = n.buttonText,
                        a = n.buttonIcon,
                        o = n.redirect,
                        r = n.openModalSuggestion,
                        l = (0, Nn.useContext)(Dx.g),
                        s = l.page,
                        c = l.isLoading,
                        d = "query" === s || "history" === s,
                        u = "history" === s,
                        p = "MultipleQueriesPage" === s;
                    return (0, Kn.jsxs)(zx, {
                        isPageQueries: d,
                        isMultipleQueries: p,
                        children: [(0, Kn.jsxs)("div", {
                            children: [(0, Kn.jsx)("span", {
                                children: d ? "Consultas" : t
                            }), (0, Kn.jsx)("h1", {
                                children: u ? "Consultas realizadas" : d ? "Nova consulta" : e
                            })]
                        }), (0, Kn.jsx)(re, {
                            text: "Fazer sugest\xe3o",
                            onClick: r
                        }), (0, Kn.jsx)(qx, {
                            isVisible: d,
                            children: i && "history_batch" === s ? (0, Kn.jsxs)(Ix, {
                                onClick: o,
                                disabled: c,
                                children: [(0, Kn.jsx)(Dn.A, {
                                    width: "10px",
                                    height: "10px",
                                    fill: "#323232",
                                    src: (0, zn.oK)("/media/flat/".concat(a, ".svg"))
                                }), i]
                            }) : i && (0, Kn.jsx)(qn.A, {
                                borderRadius: "5px",
                                padding: "10px 40px",
                                variant: "contained",
                                onClick: o,
                                disabled: c,
                                children: (0, Kn.jsxs)(Lx, {
                                    children: [a ? (0, Kn.jsx)(Dn.A, {
                                        width: "16px",
                                        height: "16px",
                                        fill: "#323232",
                                        src: (0, zn.oK)("/media/flat/".concat(a, ".svg"))
                                    }) : null, i]
                                })
                            })
                        })]
                    })
                },
                Qx = t(64474),
                Vx = [{
                    value: "CPF",
                    title: "CPF"
                }, {
                    value: "CNPJ",
                    title: "CNPJ"
                }, {
                    value: "PLATE",
                    title: "Placa"
                }],
                Bx = [{
                    name: "Localiza\xe7\xe3o",
                    value: "personal_data",
                    type: ["CPF"]
                }, {
                    name: "Dados do ve\xedculo",
                    value: "vehicle_data",
                    type: ["PLATE"]
                }, {
                    name: "Sociedades",
                    value: "company_partnership",
                    type: ["CPF"]
                }, {
                    name: "Empresa completo",
                    value: "company_information",
                    type: ["CNPJ"]
                }, {
                    name: "Dados profissionais",
                    value: "professional_data",
                    type: ["CPF"]
                }, {
                    name: "Situa\xe7\xe3o cadastral de CPF",
                    value: "cpf_registration_status",
                    type: ["CPF"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com o mesmo representante legal",
                    value: "legal_representative",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com o mesmo quadro societ\xe1rio",
                    value: "owners",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com mesmo contato na Receita Federal",
                    value: "rfcontact",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas de qualquer atividade no endere\xe7o",
                    value: "household",
                    type: ["CNPJ"]
                }, {
                    name: "Grupo Econ\xf4mico - Empresas com atividade semelhante no endere\xe7o",
                    value: "household_activity",
                    type: ["CNPJ"]
                }, {
                    name: "Relacionamentos",
                    value: "relationship_tree",
                    type: ["CPF", "CNPJ"]
                }, {
                    name: "Marcas e patentes",
                    value: "trademarks",
                    type: ["CPF", "CNPJ"]
                }, {
                    name: "Restri\xe7\xe3o de cr\xe9dito",
                    value: "credit_restriction",
                    type: ["CPF", "CNPJ"]
                }, {
                    name: "Ve\xedculos",
                    value: "list_vehicles",
                    type: ["CPF", "CNPJ"]
                }],
                $x = Xn.default.div(Nf || (Nf = (0, Gn.A)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),
                Jx = Xn.default.div(Df || (Df = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n"]))),
                Kx = Xn.default.label(zf || (zf = (0, Gn.A)(["\n  color: #131313;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  margin: 0;\n\n  span {\n    color: #d83143;\n  }\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                Wx = Xn.default.div(qf || (qf = (0, Gn.A)(["\n  padding: 4px;\n  display: flex;\n  flex-direction: column;\n"]))),
                Hx = Xn.default.button(Lf || (Lf = (0, Gn.A)(["\n  display: flex;\n  height: 40px;\n  padding: 10px 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n  background: #01ab7d;\n  color: #fff;\n  text-align: center;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 140%;\n  border: none;\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                Yx = Xn.default.div(If || (If = (0, Gn.A)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 64px;\n"]))),
                Gx = Xn.default.div(Ff || (Ff = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: ", ' !important;\n  }\n\n  label {\n    .MuiTypography-body1 {\n      font-family: "Noto Sans" !important;\n      font-size: 14px !important;\n      color: #383839 !important;\n      font-weight: 400 !important;\n      margin-bottom: 4px !important;\n    }\n  }\n'])), function(n) {
                    var e = n.error,
                        t = n.checked;
                    return e ? "#D83143" : t ? "#01AB7D" : "#A0A0A0"
                }),
                Xx = Xn.default.div(Uf || (Uf = (0, Gn.A)(["\n  width: 100%;\n  margin-top: 4px;\n  display: flex;\n\n  gap: 16px;\n\n  @media (max-width: 578px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),
                Zx = Xn.default.div(Qf || (Qf = (0, Gn.A)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media (max-width: 578px) {\n    grid-template-columns: 1fr;\n  }\n"]))),
                ng = Xn.default.div(Vf || (Vf = (0, Gn.A)(["\n  display: flex;\n  width: 100%;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 5px;\n  background: ", ";\n\n  span {\n    color: #5e5e60;\n    font-family: ", ";\n    font-size: ", ";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n"])), function(n) {
                    return n.theme.colors.white.senary
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }),
                eg = Xn.default.button(Bf || (Bf = (0, Gn.A)(["\n  color: ", ";\n  text-align: center;\n  background: transparent;\n  border: none;\n  position: relative;\n  font-family: ", ";\n  font-size: ", ';\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  padding: 0;\n\n  &::before {\n    content: ">";\n    position: absolute;\n    top: 5%;\n    left: 80px;\n    right: 0;\n\n    height: 0;\n    background-color: ', ";\n  }\n"])), function(n) {
                    return n.theme.colors.green.quinary
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.fontSizes.sm
                }, function(n) {
                    return n.theme.colors.green.quinary
                }),
                tg = Xn.default.div($f || ($f = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n"]))),
                ig = (0, Xn.default)(Dn.A)(Jf || (Jf = (0, Gn.A)([""]))),
                ag = Xn.default.div(Kf || (Kf = (0, Gn.A)(["\n  width: 100%;\n  height: 152px;\n"]))),
                og = t(98222),
                rg = Xn.default.div(Wf || (Wf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px !important;\n\n  .MuiButtonBase-root {\n    padding: 9px 4px 9px 9px !important;\n  }\n\n  .MuiIconButton-root.Mui-disabled {\n    color: #808080 !important;\n\n    .MuiSvgIcon-root,\n    .MuiRadio-root,\n    .Mui-disabled {\n      color: #808080 !important;\n    }\n  }\n\n  .MuiFormControlLabel-root {\n    margin: 0 2px 0 -11px !important;\n  }\n\n  .flex {\n    label {\n      margin-bottom: 0 !important;\n      height: 30px;\n    }\n\n    label {\n      color: #3f4254;\n      font: normal 400 14px ", ";\n      line-height: 19.6px;\n    }\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                lg = Xn.default.div(Hf || (Hf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: ", ";\n  gap: ", ";\n\n  label {\n    color: #3f4254;\n    font: normal 400 14px ", ";\n    line-height: 18px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n"])), function(n) {
                    return "VERTICAL" === n.orientation ? "column" : "row"
                }, function(n) {
                    return "VERTICAL" === n.orientation ? "2px" : "20px"
                }, function(n) {
                    return n.theme.typography.secondary
                }),
                sg = (Xn.default.span(Yf || (Yf = (0, Gn.A)(["\n  color: #f0431b;\n  font-family: Switzer;\n  font: normal 400 12px ", ";\n  line-height: 21px;\n  letter-spacing: -0.56px;\n"])), function(n) {
                    return n.theme.typography.primary
                }), Xn.default.div(Gf || (Gf = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: ", " !important;\n  }\n"])), function(n) {
                    return n.value ? "#01AB7D" : "#CECED2"
                })),
                cg = [{
                    value: "first",
                    title: "Primeira op\xe7\xe3o"
                }, {
                    value: "second",
                    title: "Segunda op\xe7\xe3o"
                }],
                dg = "VERTICAL",
                ug = "HORIZONTAL",
                pg = function(n) {
                    var e = n.onChange,
                        t = void 0 === e ? function(n) {
                            return n.target.value
                        } : e,
                        i = n.actived,
                        a = void 0 === i ? "first" : i,
                        o = n.orientation,
                        r = void 0 === o ? dg : o,
                        l = n.options,
                        s = void 0 === l ? cg : l,
                        c = n.error,
                        d = void 0 !== c && c,
                        u = n.disabled,
                        p = void 0 !== u && u;
                    return (0, Kn.jsx)(rg, {
                        error: d,
                        disabled: p,
                        children: (0, Kn.jsx)(Me.A, {
                            className: "flex",
                            value: a,
                            onChange: t,
                            children: (0, Kn.jsx)(lg, {
                                orientation: r,
                                children: s.map(function(n, e) {
                                    var i = n.value,
                                        o = n.title;
                                    return (0, Kn.jsx)(sg, {
                                        value: i === a,
                                        children: (0, Kn.jsx)(Oe.A, {
                                            value: i,
                                            control: (0, Kn.jsx)(Te.A, {}),
                                            label: (0, Kn.jsx)("label", {
                                                className: "title",
                                                onClick: p ? void 0 : function() {
                                                    return t({
                                                        target: {
                                                            value: i
                                                        }
                                                    })
                                                },
                                                children: o
                                            }),
                                            disabled: p
                                        }, e)
                                    }, e)
                                })
                            })
                        })
                    })
                },
                fg = t(38634),
                mg = Xn.default.div(Xf || (Xf = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  border: 2px dashed ", ";\n  padding: ", ";\n  margin-bottom: 5px;\n  align-items: center;\n  border-radius: 10px;\n  background: ", ";\n\n  input {\n    display: none;\n  }\n\n  @media (max-width: 578px) {\n    width: 100%;\n    padding: 24px;\n  }\n"])), function(n) {
                    var e = n.hasFiles,
                        t = n.theme;
                    return n.hasError ? t.colors.red.quaternary : e ? t.colors.gray.undenary : t.colors.green.primary
                }, function(n) {
                    return n.hasFiles ? "24px 40px" : "40px"
                }, function(n) {
                    var e = n.hasFiles;
                    n.theme;
                    return e ? "rgba(160, 162, 169, 0.1)" : "rgba(65, 199, 143, 0.10)"
                }),
                hg = Xn.default.h3(Zf || (Zf = (0, Gn.A)(["\n  margin-top: 8px;\n  font-size: 16px;\n  font-weight: 500px;\n  line-height: 21.7px;\n  text-align: center;\n\n  color: ", ";\n  font-family: ", ";\n  @media (max-width: 578px) {\n    font-size: 14px;\n  }\n"])), function(n) {
                    return n.theme.colors.black.primary
                }, function(n) {
                    return n.theme.typography.secondary
                }),
                xg = Xn.default.span(nm || (nm = (0, Gn.A)(["\n  text-align: center;\n  display: block;\n  margin-top: -2px;\n  color: #4e4f5a;\n  font-family: ", ";\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 18px;\n"])), function(n) {
                    return n.theme.typography.secondary
                }),
                gg = Xn.default.p(em || (em = (0, Gn.A)(["\n  color: ", ";\n  font: normal 400 12px ", ";\n  margin: 0;\n\n  a {\n    color: ", ";\n    text-decoration: underline;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])), function(n) {
                    return n.theme.colors.red.quaternary
                }, function(n) {
                    return n.theme.typography.primary
                }, function(n) {
                    return n.theme.colors.red.quaternary
                }),
                vg = function(n) {
                    var e = n.multiple,
                        t = void 0 !== e && e,
                        i = n.accept,
                        a = void 0 === i ? [".pdf"] : i,
                        o = n.sizeLimitMB,
                        r = void 0 === o ? 0 : o,
                        l = n.hasFile,
                        s = void 0 !== l && l,
                        c = n.alreadyTitle,
                        d = void 0 === c ? void 0 : c,
                        u = n.description,
                        p = void 0 === u ? void 0 : u,
                        f = n.onChange,
                        m = n.message,
                        h = void 0 === m ? "" : m,
                        x = n.onError,
                        g = void 0 === x ? function(n) {} : x,
                        v = (0, Nn.useState)([]),
                        y = (0, Ln.A)(v, 2),
                        b = y[0],
                        A = y[1],
                        _ = (0, Nn.useState)([]),
                        j = (0, Ln.A)(_, 2),
                        C = (j[0], j[1]),
                        w = (0, Nn.useState)(null),
                        k = (0, Ln.A)(w, 2),
                        S = k[0],
                        P = k[1],
                        E = (0, Nn.useState)(!1),
                        R = (0, Ln.A)(E, 2),
                        M = (R[0], R[1]),
                        O = 1024 * r * 1024,
                        T = (0, be.lc)().HandleEvent,
                        N = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                var t, i;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            if (t = e.map(function(n) {
                                                    return n.name.toLowerCase()
                                                }), t.some(function(n) {
                                                    return n.endsWith("xlsx") || n.endsWith("csv")
                                                })) {
                                                n.n = 1;
                                                break
                                            }
                                            return g("invalid_format"), T("Invalid File Format Uploaded Queries", {
                                                format: t[0] || ""
                                            }), n.a(2, D({
                                                error: "O arquivo deve ser no formato XLSX ou CSV (planilha)"
                                            }));
                                        case 1:
                                            if (!(r > 0)) {
                                                n.n = 2;
                                                break
                                            }
                                            if (e.every(function(n) {
                                                    return n.size <= O
                                                })) {
                                                n.n = 2;
                                                break
                                            }
                                            return g("size_too_large"), T("Upload Invalid File Size"), n.a(2, D({
                                                error: "O arquivo deve ter o tamanho de at\xe9 ".concat(r, "mb")
                                            }));
                                        case 2:
                                            return A(e), n.n = 3, f(e);
                                        case 3:
                                            if (!(i = n.v) || !(0, Ao.has)(i, "error")) {
                                                n.n = 4;
                                                break
                                            }
                                            return n.a(2, D(i));
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n)
                            }));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }(),
                        D = function(n) {
                            if (A([]), console.error(n), Array.isArray(n)) {
                                var e = n.every(function(n) {
                                    return n.errors.find(function(n) {
                                        return "file-too-large" === n.code
                                    })
                                });
                                return e ? (g("size_too_large"), D({
                                    error: "O arquivo deve ter o tamanho de at\xe9 ".concat(r, "mb")
                                })) : D({
                                    error: "Erro ao processar o arquivo"
                                })
                            }
                            P(n)
                        },
                        z = (0, _o.VB)({
                            onDropAccepted: function(n) {
                                return P(null), (0, Ao.isEmpty)(b) && !s || !d ? N(n) : (C(n), M(!0))
                            },
                            onDropRejected: D,
                            accept: a,
                            multiple: t,
                            maxSize: r > 0 ? O : void 0
                        }),
                        q = z.getRootProps,
                        L = z.getInputProps,
                        I = z.isDragActive;
                    return (0, Kn.jsxs)(Kn.Fragment, {
                        children: [(0, Kn.jsxs)(mg, (0, Re.A)((0, Re.A)({}, q()), {}, {
                            hasFiles: !(0, Ao.isEmpty)(b),
                            hasError: !!S || !!h,
                            children: [(0, Ao.isEmpty)(b) && (0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/svg/icons/Files/export.svg")
                            }), I ? (0, Kn.jsx)(hg, {
                                children: "Solte o arquivo aqui para anexar"
                            }) : (0, Kn.jsx)(hg, {
                                children: (0, Ao.isEmpty)(b) ? "Clique aqui para escolher ou Arraste o arquivo" : "Clique para escolher outro arquivo"
                            }), (0, Ao.isEmpty)(b) ? (0, Kn.jsxs)(Kn.Fragment, {
                                children: [!p && (0, Kn.jsxs)(xg, {
                                    children: ["arquivo em ", a.toUpperCase().replace(".", ""), " ", r > 0 ? "de at\xe9 ".concat(r, "mb") : ""]
                                }), p && (0, Kn.jsx)(xg, {
                                    children: p
                                })]
                            }) : b.map(function(n, e) {
                                return (0, Kn.jsx)(xg, {
                                    children: n.name
                                }, e)
                            }), (0, Kn.jsx)("input", (0, Re.A)((0, Re.A)({}, L()), {}, {
                                accept: a
                            }))]
                        })), S ? (0, Kn.jsx)(gg, {
                            children: (null === S || void 0 === S ? void 0 : S.error) || S
                        }) : h && (0, Kn.jsx)(gg, {
                            children: h
                        })]
                    })
                },
                yg = function() {
                    var n = (0, xe.A)(ge.$.PERMISSION.REPROCESS_BULK_QUERY).isFeatureFlagEnable,
                        e = (0, Nn.useState)(""),
                        t = (0, Ln.A)(e, 2),
                        i = t[0],
                        a = t[1],
                        o = (0, Nn.useState)(!1),
                        r = (0, Ln.A)(o, 2),
                        l = r[0],
                        s = r[1];
                    if (!n) return null;
                    var c = function() {
                        var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                            var t, a, o;
                            return (0, Va.A)().w(function(n) {
                                for (;;) switch (n.p = n.n) {
                                    case 0:
                                        if (null === e || void 0 === e || null === (t = e.preventDefault) || void 0 === t || t.call(e), i) {
                                            n.n = 1;
                                            break
                                        }
                                        return alert("Informe um ID de Bulk Query v\xe1lido."), n.a(2);
                                    case 1:
                                        return s(!0), n.p = 2, a = i.trim(), n.n = 3, rt.A.post("".concat("https://backend.jusfy.com.br/api", "/bulk-queries/").concat(encodeURIComponent(a), "/force-generate-result"), {}, {
                                            headers: {
                                                "x-trace-id": "reprocess-bulk-".concat(Date.now())
                                            }
                                        });
                                    case 3:
                                        n.v, n.n = 5;
                                        break;
                                    case 4:
                                        n.p = 4, o = n.v, console.error("Falha ao enfileirar export:", o);
                                    case 5:
                                        return n.p = 5, s(!1), n.f(5);
                                    case 6:
                                        return n.a(2)
                                }
                            }, n, null, [
                                [2, 4, 5, 6]
                            ])
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }();
                    return (0, Kn.jsxs)("form", {
                        onSubmit: c,
                        style: {
                            display: "grid",
                            gap: 8,
                            maxWidth: 480
                        },
                        children: [(0, Kn.jsx)(Co.A, {
                            label: "Bulk Query ID",
                            placeholder: "ex.: bq_123456",
                            variant: "outlined",
                            size: "small",
                            margin: "dense",
                            fullWidth: !0,
                            value: i,
                            onChange: function(n) {
                                return a(n.target.value)
                            }
                        }), (0, Kn.jsx)(wo.A, {
                            type: "submit",
                            disabled: l,
                            children: l ? "Publicando..." : "Reprocessar consulta"
                        })]
                    })
                },
                bg = function(n) {
                    var e = n.document,
                        t = n.onChangeDocumentValue,
                        i = n.queries,
                        a = n.onChangeQueries,
                        o = n.submitQueries,
                        r = n.error,
                        l = n.onChooseFile,
                        s = n.emptyFileError,
                        c = n.isLoadingBatch,
                        d = n.leftColumn,
                        u = n.rightColumn,
                        p = n.openManual;
                    return (0, Kn.jsx)(Ci.Y, {
                        blocking: c,
                        children: (0, Kn.jsxs)($x, {
                            children: [(0, Kn.jsxs)(og.Z, {
                                children: [(0, Kn.jsxs)(Jx, {
                                    children: [(0, Kn.jsxs)(Kx, {
                                        children: ["Formato dos documentos", (0, Kn.jsx)("span", {
                                            children: "*"
                                        })]
                                    }), (0, Kn.jsx)(pg, {
                                        options: Vx,
                                        orientation: ug,
                                        actived: e,
                                        onChange: function(n) {
                                            return t(n.target.value)
                                        }
                                    })]
                                }), (0, Kn.jsxs)(Jx, {
                                    children: [(0, Kn.jsxs)(Kx, {
                                        children: ["Consultas a serem realizadas ", (0, Kn.jsx)("span", {
                                            children: "*"
                                        })]
                                    }), (0, Kn.jsxs)(Zx, {
                                        children: [(0, Kn.jsx)(Wx, {
                                            children: null === d || void 0 === d ? void 0 : d.map(function(n, e) {
                                                return (0, Kn.jsx)(Gx, {
                                                    error: r,
                                                    checked: i.includes(n.value),
                                                    "data-testid": "queries",
                                                    children: (0, Kn.jsx)(Oe.A, {
                                                        control: (0, Kn.jsx)(xt.A, {
                                                            checked: i.includes(n.value),
                                                            name: n.value,
                                                            color: "primary",
                                                            onChange: function(e) {
                                                                return a(e, n.value)
                                                            }
                                                        }),
                                                        label: n.name
                                                    })
                                                }, e)
                                            })
                                        }), (0, Kn.jsx)(Wx, {
                                            children: u.map(function(n, e) {
                                                return (0, Kn.jsx)(Gx, {
                                                    error: r,
                                                    checked: i.includes(n.value),
                                                    "data-testid": "queries",
                                                    children: (0, Kn.jsx)(Oe.A, {
                                                        control: (0, Kn.jsx)(xt.A, {
                                                            checked: i.includes(n.value),
                                                            name: n.value,
                                                            color: "primary",
                                                            onChange: function(e) {
                                                                return a(e, n.value)
                                                            }
                                                        }),
                                                        label: n.name
                                                    })
                                                }, e)
                                            })
                                        })]
                                    }), r && (0, Kn.jsx)(fg.$D, {
                                        children: r
                                    })]
                                }), (0, Kn.jsxs)(Jx, {
                                    children: [(0, Kn.jsxs)(Kx, {
                                        children: ["Anexar arquivo ", (0, Kn.jsx)("span", {
                                            children: "*"
                                        })]
                                    }), (0, Kn.jsxs)(Xx, {
                                        children: [(0, Kn.jsx)(ag, {
                                            children: (0, Kn.jsx)(vg, {
                                                accept: [".csv", ".xlsx"],
                                                sizeLimitMB: 50,
                                                description: "Escolha um arquivo .xlsx ou .csv",
                                                onChange: l,
                                                multiple: !0,
                                                "data-testid": "upload-file",
                                                message: s
                                            })
                                        }), (0, Kn.jsxs)(ng, {
                                            children: [(0, Kn.jsxs)(tg, {
                                                children: [(0, Kn.jsx)(ig, {
                                                    src: (0, zn.oK)("/media/jusfinder/information-icon.svg")
                                                }), (0, Kn.jsx)(Kx, {
                                                    children: "Como deve estar seu arquivo"
                                                })]
                                            }), (0, Kn.jsx)("span", {
                                                children: "Os documentos a serem consultados devem estar em uma mesma coluna indicada com o t\xedtulo \u201cCPF\u201d, \u201cCNPJ\u201d ou \u201cPlaca\u201d."
                                            }), (0, Kn.jsx)("span", {
                                                children: "Planilhas mais antigas geralmente s\xe3o .xls e devem ser transformadas em .xlsx ou .csv."
                                            }), (0, Kn.jsx)(eg, {
                                                onClick: p,
                                                children: "Saber mais"
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, Kn.jsx)(Yx, {
                                children: (0, Kn.jsx)(Hx, {
                                    onClick: o,
                                    children: "Consultar"
                                })
                            }), (0, Kn.jsx)(yg, {})]
                        })
                    })
                },
                Ag = function() {
                    var n = function() {
                        var n = (0, Nn.useContext)(Dx.g),
                            e = n.openModal,
                            t = (n.closeModal, (0, Nn.useState)("CPF")),
                            i = (0, Ln.A)(t, 2),
                            a = i[0],
                            o = i[1],
                            r = (0, Nn.useState)([]),
                            l = (0, Ln.A)(r, 2),
                            s = l[0],
                            c = l[1],
                            d = (0, Nn.useState)(""),
                            u = (0, Ln.A)(d, 2),
                            p = u[0],
                            f = u[1],
                            m = (0, Nn.useState)(""),
                            h = (0, Ln.A)(m, 2),
                            x = h[0],
                            g = h[1],
                            v = (0, Nn.useState)(null),
                            y = (0, Ln.A)(v, 2),
                            b = y[0],
                            A = y[1],
                            _ = (0, Nn.useState)(!1),
                            j = (0, Ln.A)(_, 2),
                            C = j[0],
                            w = j[1],
                            k = (0, be.lc)().HandleEvent,
                            S = (0, Nn.useCallback)(function() {
                                return Bx.filter(function(n) {
                                    return n.type.includes(a)
                                }).sort(function(n, e) {
                                    return n.name.localeCompare(e.name)
                                })
                            }, [a]),
                            P = S(),
                            E = Math.ceil(P.length / 2),
                            R = P.slice(0, E),
                            M = P.slice(E),
                            O = function() {
                                return 0 === s.length
                            },
                            T = function() {
                                return null === b
                            },
                            N = function() {
                                var n = new FormData;
                                return n.append("documentType", a), n.append("queries", JSON.stringify(s)), n.append("file", b), n
                            },
                            D = function() {
                                var n = O(),
                                    e = T();
                                return n && f("Selecione uma consulta."), e && g("Selecione um arquivo."), n || e
                            },
                            z = function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                    var t;
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                if (!D()) {
                                                    n.n = 1;
                                                    break
                                                }
                                                return n.a(2);
                                            case 1:
                                                return t = N(), n.p = 2, n.n = 3, rt.A.post("".concat("https://backend.jusfy.com.br/api", "/bulk-queries"), t);
                                            case 3:
                                                k("Submitted Queries", {
                                                    document_type: a,
                                                    queries: s
                                                }), e("AVAILABLE_SOON_MODAL", {
                                                    context: "BatchQueriesPage"
                                                }), n.n = 5;
                                                break;
                                            case 4:
                                                n.p = 4, n.v, ti.oR.error("Erro ao consultar documentos");
                                            case 5:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [2, 4]
                                    ])
                                }));
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }();
                        (0, Nn.useEffect)(function() {
                            f("")
                        }, [s]), (0, Nn.useEffect)(function() {
                            g("")
                        }, [b]);
                        var q = S().some(function(n) {
                            return s.includes(n.value)
                        });
                        return {
                            document: a,
                            setDocument: o,
                            onChangeDocumentValue: function(n) {
                                o(n), c("PLATE" !== n ? [] : ["vehicle_data"])
                            },
                            queriesFiltered: S,
                            queries: s,
                            setQueries: c,
                            onChangeQueries: function(n, e) {
                                c(function(n) {
                                    return n.includes(e) ? n.filter(function(n) {
                                        return n !== e
                                    }) : [].concat((0, tt.A)(n), [e])
                                })
                            },
                            submitQueries: z,
                            error: p,
                            hasChekedQueries: q,
                            onChooseFile: function(n) {
                                var e = (0, Ln.A)(n, 1)[0];
                                A(e), k("Upload File Queries Success")
                            },
                            emptyFileError: x,
                            isLoadingBatch: C,
                            setIsLoadingBatch: w,
                            leftColumn: R,
                            rightColumn: M,
                            validationQueries: O,
                            validationFile: T,
                            openManual: function() {
                                window.open("https://help.jusfy.com.br/manual-da-consulta-em-lote-jusfinder", "_blank"), k("Open Manual Button Clicked Queries")
                            }
                        }
                    }();
                    return (0, Kn.jsx)(bg, (0, Re.A)({}, n))
                },
                _g = Xn.default.div(tm || (tm = (0, Gn.A)(["\n  position: relative;\n  display: ", ";\n  width: 100%;\n  ", "\n"])), function(n) {
                    return n.visible ? "none" : "block"
                }, function(n) {
                    return n.isMaintenance ? "\npointer-events: none;\n" : ""
                }),
                jg = (Xn.default.button(im || (im = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  width: 26px;\n  height: 26px;\n  padding: 4px;\n  border: none;\n"]))), Xn.default.div(am || (am = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n"])))),
                Cg = Xn.default.div(om || (om = (0, Gn.A)(["\n  background: #fff9e6;\n  padding: 16px;\n  border-radius: 4px;\n\n  h3 {\n    color: #383839;\n    font-weight: 500;\n    font-family: 'Noto Sans' !important;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    gap: 4.5px;\n  }\n\n  p {\n    font-weight: 300;\n    font-family: 'Noto Sans' !important;\n    font-size: 14px;\n    color: #535353;\n    margin: 0px;\n    height: auto !important;\n  }\n"]))),
                wg = Xn.default.div(rm || (rm = (0, Gn.A)(["\n  font-family: 'Noto Sans' !important;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  h1 {\n    color: #131313;\n\n    font-family: 'Noto Sans';\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 140%;\n    margin: 0;\n  }\n\n  p {\n    color: #535353;\n    height: 64px;\n    font-weight: 400;\n    font-size: 14px;\n    opacity: 0.8;\n  }\n\n  ", "\n"])), function(n) {
                    return n.isMaintenance ? "\n  opacity: 0.3;\n  " : ""
                }),
                kg = Xn.default.div(lm || (lm = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))),
                Sg = Xn.default.div(sm || (sm = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  gap: ", ";\n  margin-top: 8px;\n\n  p.short {\n    color: #535353;\n    height: 18px;\n    font-weight: 400;\n    font-size: 14px;\n    opacity: 0.8;\n  }\n"])), function(n) {
                    var e = n.isShort,
                        t = n.unavailable;
                    return e ? "21px" : t ? "0px" : "24px"
                }),
                Pg = (Xn.default.div(cm || (cm = (0, Gn.A)(["\n  background-color: rgba(228, 246, 239, 0.8);\n  border-radius: 50%;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))), Xn.default.div(dm || (dm = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])))),
                Eg = (0, Xn.default)(Uo.A)(um || (um = (0, Gn.A)(["\n  font-family: 'Noto Sans' !important;\n\n  strong {\n    font-weight: 700;\n  }\n"]))),
                Rg = (Xn.default.div(pm || (pm = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n\n  span {\n    font-family: 'Noto Sans';\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n  }\n\n  span.highlight {\n    text-decoration: underline;\n  }\n\n  span.left {\n    text-align: left;\n  }\n"]))), Xn.default.div(fm || (fm = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  p {\n    margin: 0px;\n    color: rgba(0, 0, 0, 0.8);\n\n    font-family: ", ";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                })),
                Mg = Xn.default.div(mm || (mm = (0, Gn.A)(["\n  display: flex;\n  width: fit-content;\n  height: 27px;\n  padding: 4px 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  border-radius: 4px;\n  background: #e6f3f7;\n\n  color: #383839;\n  text-align: center;\n  font-family: 'Noto Sans';\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n"]))),
                Og = Xn.default.div(hm || (hm = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"]))),
                Tg = Xn.default.div(xm || (xm = (0, Gn.A)(["\n  display: flex;\n  padding: 8px 12px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n\n  border-radius: 4px;\n  background: #e6f7f2;\n\n  color: #383839;\n  text-align: center;\n\n  font-family: ", ";\n\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Ng = (0, Xn.default)(Dn.A)(gm || (gm = (0, Gn.A)([""]))),
                Dg = Xn.default.div(vm || (vm = (0, Gn.A)(["\n  display: flex;\n  gap: 8px;\n\n  align-items: center;\n"]))),
                zg = Xn.default.div(ym || (ym = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),
                qg = function(n) {
                    var e = (0, be.lc)().HandleEvent;
                    return {
                        openExamplePdf: function() {
                            e("Universal Open Example PDF Clicked");
                            var t = ft.Tw.get(n.identification);
                            t && window.open(t, "_blank", "noopener,noreferrer")
                        }
                    }
                },
                Lg = function(n) {
                    var e = n.unavailable,
                        t = n.onClick,
                        i = n.queryOption,
                        a = qg(i).openExamplePdf;
                    return (0, Kn.jsxs)(Sg, {
                        unavailable: e,
                        children: [e && (0, Kn.jsxs)(Cg, {
                            children: [(0, Kn.jsxs)("h3", {
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/warning.svg")
                                }), "Momentaneamente indispon\xedvel"]
                            }), (0, Kn.jsx)("p", {
                                children: "Nosso fornecedor est\xe1 fora do ar, estamos trabalhando para normaliza\xe7\xe3o."
                            })]
                        }), !e && (0, Kn.jsxs)(Og, {
                            children: [(0, Kn.jsxs)(Tg, {
                                children: [(0, Kn.jsx)(Ng, {
                                    src: (0, zn.oK)("/media/jusfinderuniversal/credit-dolar.svg")
                                }), i.universal_price]
                            }), (0, Kn.jsxs)(zg, {
                                children: [i.identification !== bt.Db.LAWSUIT && (0, Kn.jsx)(yt.h, {
                                    title: "Ver exemplo",
                                    background: "transparent",
                                    padding: "4px 8px",
                                    border: "none",
                                    fontWeight: 700,
                                    onClick: a
                                }), (0, Kn.jsx)(qn.A, {
                                    color: "#01AB7D",
                                    backgroundColor: "transparent",
                                    height: "40px",
                                    padding: "0px 24px",
                                    border: "1px solid #01AB7D",
                                    borderRadius: "5px",
                                    onClick: t,
                                    children: (0, Kn.jsx)("span", {
                                        children: "Consultar"
                                    })
                                })]
                            })]
                        })]
                    })
                },
                Ig = (new Map([
                    ["personal_data", "person"],
                    ["list_vehicles", "car"],
                    ["company_information", "company"],
                    ["company_partnership", "company"],
                    ["vehicle_data", "car"],
                    ["relationship_tree", "people"],
                    ["credit_restriction", "dolar"],
                    ["lawsuit", "people"],
                    ["trademarks", "trademark"],
                    ["professional_data", "professional_data"],
                    ["cpf_registration_status", "cpf_status"],
                    ["economic_group", "economic-group"]
                ]), ["vehicle_tracking"]),
                Fg = [],
                Ug = [],
                Qg = new Map([
                    ["personal_data", ["CPF"]],
                    ["list_vehicles", ["CPF", "CNPJ"]],
                    ["company_information", ["CNPJ"]],
                    ["company_partnership", ["CPF"]],
                    ["vehicle_data", ["Placa de ve\xedculo"]],
                    ["relationship_tree", ["CPF", "CNPJ"]],
                    ["credit_restriction", ["CPF", "CNPJ"]],
                    ["lawsuit", ["CPF", "CNPJ"]],
                    ["trademarks", ["CPF", "CNPJ"]],
                    ["professional_data", ["CPF"]],
                    ["cpf_registration_status", ["CPF"]],
                    ["economic_group", ["CNPJ"]],
                    ["vehicle_tracking", ["Placa de ve\xedculo"]]
                ]),
                Vg = function() {
                    return (0, Kn.jsx)(Pg, {
                        children: (0, Kn.jsx)(Xo.A, {
                            placement: "top",
                            overlay: (0, Kn.jsxs)(Eg, {
                                id: "tooltip-top",
                                children: [(0, Kn.jsx)("strong", {
                                    children: "A pesquisa fornece dados apenas para at\xe9 10 ve\xedculos,"
                                }), " ", "independentemente do total vinculado ao CPF ou CNPJ, que pode ser superior a esse limite."]
                            }),
                            children: (0, Kn.jsx)("span", {
                                children: (0, Kn.jsx)(Dn.A, {
                                    width: "18px",
                                    height: "18px",
                                    title: "",
                                    fill: "#000000",
                                    src: (0, zn.oK)("/media/casesManagement/info.svg")
                                })
                            })
                        })
                    })
                },
                Bg = function(n) {
                    var e, t = n.queryOption,
                        i = n.onClick,
                        a = n.openModal,
                        o = n.creditAvailable,
                        r = n.onFavoriteClick,
                        l = n.isCardFavorited,
                        s = function(n, e, t, i) {
                            var a = (0, xe.A)("unavailable_lawsuit").isFeatureFlagEnable,
                                o = (0, xe.A)("unavailable_list_vehicles").isFeatureFlagEnable,
                                r = (0, Nn.useState)([]),
                                l = (0, Ln.A)(r, 2),
                                s = l[0],
                                c = l[1],
                                d = n.name,
                                u = n.identification,
                                p = n.credit,
                                f = (0, pt.g)(),
                                m = (0, On.d4)(function(n) {
                                    return n.auth.user.lawsuit_unlimited
                                }),
                                h = Ug.includes(u) || s.includes(u),
                                x = "lawsuit" === u && p > 1e4;
                            return (0, Nn.useEffect)(function() {
                                var n = s;
                                a && !s.includes("lawsuit") && (n = [].concat((0, tt.A)(s), ["lawsuit"])), !a && s.includes("lawsuit") && (n = s.filter(function(n) {
                                    return "lawsuit" !== n
                                })), o && !s.includes("list_vehicles") && (n = [].concat((0, tt.A)(s), ["list_vehicles"])), !o && s.includes("list_vehicles") && (n = s.filter(function(n) {
                                    return "list_vehicles" !== n
                                })), c(n)
                            }, [a, o]), (0, Nn.useEffect)(function() {
                                if (f.query === u) {
                                    if (f.query = "", !i || i <= 0) return t("BUY_CREDITS_MODAL", {
                                        queryOption: n
                                    }), void ti.oR.error("Voc\xea n\xe3o possui cr\xe9ditos para consulta de ".concat(d));
                                    e()
                                }
                            }, []), {
                                unavailableLawsuit: a,
                                unavailableListVehicles: o,
                                UNAVAILABLE_FEATURES: s,
                                setUnavailableFeatures: c,
                                isLawsuitUnlimited: m,
                                hasUnlimitedCredits: x,
                                identification: u,
                                credit: p,
                                name: d,
                                getCardBadge: function() {
                                    var n, e = null === (n = [{
                                        type: "maintenance",
                                        condition: Ug.includes(u)
                                    }, {
                                        type: "plan",
                                        condition: !p && Fg.includes(u)
                                    }, {
                                        type: "new",
                                        condition: Ig.includes(u)
                                    }].find(function(n) {
                                        return n.condition
                                    })) || void 0 === n ? void 0 : n.type;
                                    return e ? (0, Kn.jsx)(tr, {
                                        type: e
                                    }) : null
                                },
                                isMaintenance: h
                            }
                        }(t, i, a, o),
                        c = s.UNAVAILABLE_FEATURES,
                        d = s.hasUnlimitedCredits,
                        u = s.identification,
                        p = s.getCardBadge,
                        f = s.name,
                        m = s.isMaintenance,
                        h = !!l && l(t.identification);
                    return (0, Kn.jsxs)(_g, {
                        isMaintenance: m,
                        children: [p(), (0, Kn.jsx)(Mo.A, {
                            children: (0, Kn.jsxs)(wg, {
                                isMaintenance: m,
                                children: [(0, Kn.jsxs)(Rg, {
                                    children: [(0, Kn.jsxs)(jg, {
                                        children: [(0, Kn.jsxs)(kg, {
                                            children: [(0, Kn.jsx)("h1", {
                                                children: f
                                            }), " ", "list_vehicles" === u && (0, Kn.jsx)(Vg, {})]
                                        }), (0, Kn.jsx)(zo, {
                                            favorited: h,
                                            onClick: r
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        children: t.description
                                    }), (0, Kn.jsx)(Dg, {
                                        children: null === (e = Qg.get(u)) || void 0 === e ? void 0 : e.map(function(n) {
                                            return (0, Kn.jsx)(Mg, {
                                                children: n
                                            })
                                        })
                                    })]
                                }), (0, Kn.jsx)(Lg, {
                                    queryOption: t,
                                    unavailable: c.includes(u),
                                    hasUnlimitedCredits: d,
                                    onClick: i
                                })]
                            })
                        })]
                    })
                },
                $g = [{
                    description: "5 C\xe1lculos Revisionais",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Atualiza\xe7\xe3o de Valores",
                    enabled: !0
                }, {
                    description: "1 C\xe1lculo Trabalhista",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Corre\xe7\xe3o do FGTS",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Pens\xe3o Aliment\xedcia",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Aluguel",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Superendividamento",
                    enabled: !0
                }, {
                    description: "3 C\xe1lculos PASEP",
                    enabled: !0
                }, {
                    description: "3 C\xe1lculos de Dosimetria da Pena",
                    enabled: !0
                }, {
                    description: "3 C\xe1lculos de Progress\xe3o de Regime",
                    enabled: !0
                }, {
                    description: "1 C\xe1lculo de RMC",
                    enabled: !0
                }, {
                    description: "5 Assinaturas digitais",
                    enabled: !0
                }, {
                    description: "5 Oportunidades de novos clientes",
                    enabled: !0
                }, {
                    description: "5 Cr\xe9ditos universais JusFinder",
                    enabled: !0
                }],
                Jg = [{
                    description: "C\xe1lculos Revisionais - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Atualiza\xe7\xe3o de Valores - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos Trabalhistas",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Corre\xe7\xe3o do FGTS - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Pens\xe3o Aliment\xedcia - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Aluguel - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Superendividamento - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos PASEP - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Dosimetria da Pena",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de Progress\xe3o de Regime",
                    enabled: !0
                }, {
                    description: "5 C\xe1lculos de RMC",
                    enabled: !0
                }, {
                    description: "10 Assinaturas digitais",
                    enabled: !0
                }, {
                    description: "10 Oportunidades de novos clientes",
                    enabled: !0
                }, {
                    description: "15 Cr\xe9ditos universais JusFinder",
                    enabled: !0
                }],
                Kg = [{
                    description: "C\xe1lculos Revisionais - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Atualiza\xe7\xe3o de Valores - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos Trabalhistas - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Corre\xe7\xe3o do FGTS - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Pens\xe3o Aliment\xedcia - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Aluguel - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Superendividamento - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos PASEP - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Dosimetria da Pena - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de Progress\xe3o de Regime - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "C\xe1lculos de RMC - ILIMITADOS",
                    enabled: !0
                }, {
                    description: "20 Assinaturas digitais",
                    enabled: !0
                }, {
                    description: "20 Oportunidades de novos clientes",
                    enabled: !0
                }, {
                    description: "30 Cr\xe9ditos universais JusFinder",
                    enabled: !0
                }],
                Wg = (0, Xn.default)(Dn.A)(bm || (bm = (0, Gn.A)(["\n  margin-left: 10px;\n  margin-top: 9px;\n"]))),
                Hg = (Xn.default.div(Am || (Am = (0, Gn.A)(["\n  background: #41c78f;\n  display: inline-block;\n  padding: 10px 17px;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  color: #fff;\n  font-weight: bold;\n  border-radius: 50px;\n\n  :hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n"]))), (0, Xn.default)(or.A)(_m || (_m = (0, Gn.A)(["\n  .modal-body {\n    padding: 40px !important;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n\n  .modal-content {\n    border-radius: 10px !important;\n    max-height: 90vh;\n  }\n\n  .modal-dialog {\n    max-width: 700px !important;\n  }\n\n  @media screen and (max-width: 767px) {\n    .modal-content {\n      width: 90% !important;\n      margin: 0 auto !important;\n    }\n  }\n"]))), Xn.default.div(jm || (jm = (0, Gn.A)(["\n  width: 100%;\n  position: relative;\n\n  h3 {\n    text-align: center;\n    font-weight: bold;\n    color: #2e3f75;\n  }\n\n  > p:nth-child(2) {\n    text-align: center;\n  }\n"])))),
                Yg = Xn.default.div(Cm || (Cm = (0, Gn.A)(["\n  cursor: pointer;\n  border: 2px solid #f1f1f1;\n  padding: 20px;\n  border-radius: 5px;\n  height: 100%;\n\n  :hover {\n    border: 2px solid #41c78f;\n    background: #fafafa;\n  }\n\n  span {\n    color: #2e3f75;\n    font-weight: bold;\n    font-size: 12px;\n    margin-bottom: 5px;\n  }\n\n  p.preco {\n    font-size: 15px;\n    margin-bottom: 10px;\n    font-weight: bold;\n    opacity: 0.7;\n    color: #2e3f75;\n  }\n\n  p.subtitulo {\n    margin-top: 5px !important;\n    height: 40px;\n    font-size: 12px;\n    line-height: 18px;\n    margin: 0;\n    color: #5f677d;\n    opacity: 0.6;\n    margin-bottom: 20px;\n  }\n\n  a {\n    color: #2e3f75;\n    font-weight: bold;\n    position: absolute;\n    bottom: 23px;\n    text-decoration: none;\n    font-size: 12px;\n    display: block;\n  }\n\n  a img {\n    display: inline-block;\n    width: 18px;\n    margin-left: 10px;\n    opacity: 0.5;\n    margin-bottom: 0px;\n  }\n\n  ul {\n    padding: 0 0 0 4px;\n    margin-bottom: 40px;\n  }\n\n  ul li {\n    list-style: none;\n  }\n\n  ul li i {\n    color: #41c78f;\n  }\n\n  ul li i.disabled {\n    color: #576574;\n  }\n\n  ul li span {\n    opacity: 0.4;\n    font-size: 11px;\n    color: #1c2e66;\n    margin-left: 5px;\n    line-height: 26px;\n  }\n\n  @media only screen and (max-width: 899px) {\n    width: 100%;\n    margin-bottom: 10px;\n    padding: 13px;\n    span {\n      color: #41c78f;\n    }\n\n    p {\n      display: none;\n    }\n\n    a {\n      position: relative;\n      margin-top: 15px;\n      bottom: 0px;\n    }\n  }\n"]))),
                Gg = Xn.default.div(wm || (wm = (0, Gn.A)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-radius: 10px;\n  border: 2px solid #ebedf3;\n  background: #fff;\n  padding: 24px;\n"]))),
                Xg = Xn.default.div(km || (km = (0, Gn.A)(["\n  input:focus {\n    border: 1px solid #41c78f !important;\n  }\n\n  span {\n    color: #2e3f75;\n    font-weight: bold;\n    font-size: 30px;\n  }\n\n  h3 {\n    color: #2e3f75;\n    font-size: 22px;\n    display: inline-block;\n  }\n\n  p {\n    width: 70%;\n    text-align: left;\n    color: #2e3f75;\n    opacity: 0.6;\n    margin-top: 5px;\n    margin-bottom: 15px;\n  }\n\n  span.price {\n    font-size: 30px;\n    text-align: right;\n    display: inline-block;\n    float: right;\n    margin-top: -68px;\n  }\n\n  span.desc-payment {\n    font-weight: normal;\n    font-size: 12px;\n    width: 61%;\n    display: inline-block;\n    margin-top: 20px;\n  }\n\n  hr {\n    opacity: 0.1;\n    margin: 10px 0px 20px 0px;\n  }\n\n  label:not(.invalid-feedback) {\n    margin: 0;\n    padding: 0;\n    font-size: 13px;\n    opacity: 0.6;\n    color: #091d5c;\n    margin: 10px 0px;\n  }\n\n  input.form-control {\n    margin: 0;\n    padding: 9px;\n    outline: none;\n    box-shadow: none;\n    border: 1px solid #ccc;\n  }\n\n  .btn-primary {\n    background: #41c78f;\n    border: none;\n    display: inline-block;\n    border-radius: 50px;\n    padding: 12px 40px;\n    font-size: 16px;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-top: 13px;\n    float: right;\n  }\n\n  .btn-primary:hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n\n  @media only screen and (max-width: 899px) {\n    .row {\n      margin-top: 0px;\n    }\n\n    hr {\n      margin: 10px;\n    }\n\n    label {\n      margin: 5px 0px;\n    }\n\n    span {\n      font-size: 16px;\n    }\n\n    h3 {\n      font-size: 14px;\n    }\n\n    p {\n      font-size: 12px;\n      width: 100%;\n    }\n\n    span.price {\n      float: none;\n      margin: 0 auto;\n      text-align: center;\n      letter-spacing: -0.9;\n    }\n\n    input.form-control {\n      width: 100%;\n      margin-bottom: 10px;\n      padding: 4px;\n    }\n\n    span.desc-payment {\n      width: 100%;\n      margin-top: 0;\n      opacity: 0.6;\n      font-size: 10px;\n    }\n\n    .btn-primary {\n      padding: 10px 40px;\n      font-size: 14px;\n      width: 100%;\n      margin-top: 10px;\n    }\n  }\n"]))),
                Zg = Xn.default.img(Sm || (Sm = (0, Gn.A)(["\n  filter: brightness(0) saturate(100%) invert(58%) sepia(59%) saturate(452%)\n    hue-rotate(103deg) brightness(92%) contrast(83%);\n  cursor: pointer;\n  margin: 0 5px 5px 0;\n"]))),
                nv = Xn.default.div(Pm || (Pm = (0, Gn.A)(["\n  position: relative;\n\n  img {\n    height: 23px;\n    position: absolute;\n    right: 9px;\n    top: 8px;\n  }\n"]))),
                ev = t(52049),
                tv = "monthly",
                iv = "annual",
                av = "starter",
                ov = "master",
                rv = "ultimate",
                lv = function(n) {
                    return "R$ ".concat(n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, "."))
                },
                sv = (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                    monthly: {
                        title: "PLANO STARTER",
                        price: "R$ 59,90/mensal",
                        total: ""
                    },
                    annual: {
                        title: "PLANO STARTER",
                        price: "12x R$ 47,92 /anual",
                        total: "(totalizando R$ 575,04)"
                    }
                }), ov, {
                    monthly: {
                        title: "PLANO MASTER",
                        price: "R$ 79,90/mensal",
                        total: ""
                    },
                    annual: {
                        title: "PLANO MASTER",
                        price: "12x R$ 63,92 /anual",
                        total: "(totalizando R$ 767,04)"
                    }
                }), rv, {
                    monthly: {
                        title: "PLANO ULTIMATE",
                        price: "R$ 97,00/mensal",
                        total: ""
                    },
                    annual: {
                        title: "PLANO ULTIMATE",
                        price: "12x R$ 77,60 /anual",
                        total: "(totalizando R$ 931,20)"
                    }
                }),
                cv = {
                    50: (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                        monthly: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 84,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "12x R$ 72,82 /anual",
                            total: "(totalizando R$ 873,84)"
                        }
                    }), ov, {
                        monthly: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 104,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "12x R$ 88,82 /anual",
                            total: "(totalizando R$ 1.065,84)"
                        }
                    }), rv, {
                        monthly: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "R$ 121,90 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 50 PROCESSOS",
                            price: "12x R$ 102,50 /anual",
                            total: "(totalizando R$ 1.230,00)"
                        }
                    }),
                    200: (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                        monthly: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 159,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "12x R$ 147,82 /anual",
                            total: "(totalizando R$ 1.773,84)  "
                        }
                    }), ov, {
                        monthly: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 179,80 /mensal ",
                            total: ""
                        },
                        annual: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "12x R$ 163,82 /anual",
                            total: "(totalizando R$ 1.965,84) "
                        }
                    }), rv, {
                        monthly: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 196,90 /mensal ",
                            total: ""
                        },
                        annual: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "12x R$ 177,50 /anual",
                            total: "(totalizando R$ 2.130,00)"
                        }
                    }),
                    500: (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                        monthly: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 309,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO STARTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "12x R$ 297,82 /anual",
                            total: " (totalizando R$ 3.573,84)"
                        }
                    }), ov, {
                        monthly: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 329,80 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO MASTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "12x R$ 313,82 /anual",
                            total: "(totalizando R$ 3.765,84) "
                        }
                    }), rv, {
                        monthly: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 346,90 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "PLANO ULTIMATE + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "12x R$ 327,50 /anual",
                            total: "(totalizando R$ 3.930,00)"
                        }
                    })
                },
                dv = (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                    monthly: {
                        title: "[PLANO BASE 2026] STARTER",
                        price: "".concat(lv(ev.W1), "/mensal"),
                        total: ""
                    },
                    annual: {
                        title: "[Promo\xe7\xe3o 2026] Starter Anual Parcelado 20% OFF",
                        price: "12x ".concat(lv(ev.Wp / 12), " /anual"),
                        total: "(totalizando ".concat(lv(ev.Wp), ")")
                    }
                }), ov, {
                    monthly: {
                        title: "[PLANO BASE 2026] MASTER",
                        price: "".concat(lv(ev.fz), "/mensal"),
                        total: ""
                    },
                    annual: {
                        title: "[Promo\xe7\xe3o 2026] Master Anual Parcelado 20% OFF",
                        price: "12x ".concat(lv(ev.J5 / 12), " /anual"),
                        total: "(totalizando ".concat(lv(ev.J5), ")")
                    }
                }), rv, {
                    monthly: {
                        title: "[PLANO BASE 2026] ULTIMATE",
                        price: "".concat(lv(ev.Wm), "/mensal"),
                        total: ""
                    },
                    annual: {
                        title: "[Promo\xe7\xe3o 2026] Ultimate Anual Parcelado 20% OFF",
                        price: "12x ".concat(lv(ev.wp / 12), " /anual"),
                        total: "(totalizando ".concat(lv(ev.wp), ")")
                    }
                }),
                uv = {
                    50: (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                        monthly: {
                            title: "[PLANO BASE 2026] STARTER + JusProcessos at\xe9 50 processos",
                            price: "R$ 101,90 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PROMO\xc7\xc3O 2026] STARTER ANUAL 20% + JusProcessos at\xe9 50 processos",
                            price: "12x R$ 86,50 /anual",
                            total: "(totalizando R$ 1.038,00)"
                        }
                    }), ov, {
                        monthly: {
                            title: "[PLANO BASE 2026] MASTER + JusProcessos at\xe9 50 processos",
                            price: "R$ 121,90/mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PROMO\xc7\xc3O 2026] MASTER ANUAL 20% + JusProcessos at\xe9 50 processos",
                            price: "12x R$ 102,50 /anual",
                            total: "(totalizando R$ 1.230,00)"
                        }
                    }), rv, {
                        monthly: {
                            title: "[PLANO BASE 2026] ULTIMATE + JusProcessos at\xe9 50 processos",
                            price: "R$ 141,90/mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PROMO\xc7\xc3O 2026] ULTIMATE ANUAL 20% + JusProcessos at\xe9 50 processos",
                            price: "12x R$ 118,50 /anual",
                            total: "(totalizando R$ 1.422,00)"
                        }
                    }),
                    200: (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                        monthly: {
                            title: "[PLANO BASE 2026] STARTER + JusProcessos at\xe9 200 processos",
                            price: "R$ 176,90 /mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PLANO BASE 2026] STARTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "12x R$ 161,50 /anual",
                            total: "(totalizando R$ 1.938,00)  "
                        }
                    }), ov, {
                        monthly: {
                            title: "[PLANO BASE 2026] MASTER + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 196,90 /mensal ",
                            total: ""
                        },
                        annual: {
                            title: "[PLANO BASE 2026] MASTER ANUAL 20% + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "12x R$ 177,50 /anual",
                            total: "(totalizando R$ 2.130,00) "
                        }
                    }), rv, {
                        monthly: {
                            title: "[PLANO BASE 2026] ULTIMATE  + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "R$ 216,90 /mensal ",
                            total: ""
                        },
                        annual: {
                            title: "[PLANO BASE 2026] ULTIMATE ANUAL 20% + JUSPROCESSOS AT\xc9 200 PROCESSOS",
                            price: "12x R$ 193,50 /anual",
                            total: "(totalizando R$ 2.322,00 )"
                        }
                    }),
                    500: (0, gr.A)((0, gr.A)((0, gr.A)({}, av, {
                        monthly: {
                            title: "[PLANO BASE 2026] STARTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 326,90/mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PLANO BASE 2026] STARTER ANUAL 20% + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "12x R$ 311,50 /anual",
                            total: " (totalizando R$ 3.738,00)"
                        }
                    }), ov, {
                        monthly: {
                            title: "[PLANO BASE 2026] MASTER + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 346,90/mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PLANO BASE 2026] MASTER ANUAL 20%  + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "12x R$ 327,50 /anual",
                            total: "(totalizando R$ 3.930,00) "
                        }
                    }), rv, {
                        monthly: {
                            title: "[PLANO BASE 2026] ULTIMATE + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "R$ 366,90/mensal",
                            total: ""
                        },
                        annual: {
                            title: "[PLANO BASE 2026] ULTIMATE ANUAL 20%  + JUSPROCESSOS AT\xc9 500 PROCESSOS",
                            price: "12x R$ 343,50 /anual",
                            total: "(totalizando R$ 4.122,00)"
                        }
                    })
                };
            var pv, fv, mv = t(36971);

            function hv(n) {
                var e, t, i, a, o, r, l, s, c, d, u, p, f = (0, On.d4)(function(n) {
                        return n.subscription
                    }),
                    m = (0, On.d4)(function(n) {
                        var e, t;
                        return null === (e = n.auth) || void 0 === e || null === (t = e.user) || void 0 === t ? void 0 : t.use_credits
                    }),
                    h = null !== (e = null === f || void 0 === f || null === (t = f.subscription_status) || void 0 === t || null === (i = t.info) || void 0 === i ? void 0 : i.plan) && void 0 !== e ? e : null === f || void 0 === f || null === (a = f.subscription_status) || void 0 === a || null === (o = a.plan_details) || void 0 === o ? void 0 : o.name,
                    x = (0, vr.A)(ge.$.RELEASE.UPSELL_OAB_MG, {
                        plan: null !== h && void 0 !== h ? h : void 0
                    }).isFeatureFlagEnable,
                    g = !1,
                    v = null === f || void 0 === f || null === (r = f.subscription_status) || void 0 === r ? void 0 : r.jus_processos_qtd,
                    y = null === f || void 0 === f || null === (l = f.subscription_status) || void 0 === l ? void 0 : l.isUniversalJusfinder,
                    b = function() {
                        var n, e, t, i, a, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            s = (0, xe.A)(ge.$.KILL_SWITCH.USE_PLAN_ID_FROM_CLIENT).isFeatureFlagEnable,
                            c = (0, On.d4)(function(n) {
                                return n.subscription
                            }),
                            d = null !== (n = null === c || void 0 === c || null === (e = c.subscription_status) || void 0 === e || null === (t = e.info) || void 0 === t ? void 0 : t.plan) && void 0 !== n ? n : null === c || void 0 === c || null === (i = c.subscription_status) || void 0 === i || null === (a = i.plan_details) || void 0 === a ? void 0 : a.name,
                            u = (0, vr.A)(ge.$.RELEASE.UPSELL_OAB_MG, {
                                plan: null !== d && void 0 !== d ? d : void 0
                            }).isFeatureFlagEnable,
                            p = (0, Nn.useState)(tv),
                            f = (0, Ln.A)(p, 2),
                            m = f[0],
                            h = f[1],
                            x = function() {
                                h(function(n) {
                                    return n === tv ? iv : tv
                                })
                            },
                            g = m === iv ? "annually" : "monthly",
                            v = (0, Nn.useState)({
                                starter: sv[av].monthly,
                                master: sv[ov].monthly,
                                ultimate: sv[rv].monthly
                            }),
                            y = (0, Ln.A)(v, 2),
                            b = y[0],
                            A = y[1];
                        if ((0, Nn.useEffect)(function() {
                                if (!s) {
                                    var n = l ? dv : sv,
                                        e = n;
                                    o && (e = (l ? uv[r] : cv[r]) || n);
                                    var t = m === iv ? "annual" : "monthly";
                                    A({
                                        starter: e[av][t],
                                        master: e[ov][t],
                                        ultimate: e[rv][t]
                                    })
                                }
                            }, [m, o, r, l, s]), s) {
                            var _ = "annual" === g,
                                j = u ? "caamg" : void 0,
                                C = (0, Ti.wQ)([{
                                    plan_type: "starter",
                                    billingCycle: g,
                                    hasJusProcessos: o,
                                    jusprocessos_count: r,
                                    is_offer: _,
                                    affiliation_type: j
                                }, {
                                    plan_type: "master",
                                    billingCycle: g,
                                    hasJusProcessos: o,
                                    jusprocessos_count: r,
                                    is_offer: _,
                                    affiliation_type: j
                                }, {
                                    plan_type: "ultimate",
                                    billingCycle: g,
                                    hasJusProcessos: o,
                                    jusprocessos_count: r,
                                    is_offer: _,
                                    affiliation_type: j
                                }]),
                                w = C.find(function(n) {
                                    return "starter" === n.plan_type
                                }),
                                k = C.find(function(n) {
                                    return "master" === n.plan_type
                                }),
                                S = C.find(function(n) {
                                    return "ultimate" === n.plan_type
                                }),
                                P = l ? dv : sv,
                                E = P;
                            o && (E = (l ? uv[r] : cv[r]) || P);
                            var R = {
                                starter: (0, Ti.a9)(w) || E[av][g],
                                master: (0, Ti.a9)(k) || E[ov][g],
                                ultimate: (0, Ti.a9)(S) || E[rv][g]
                            };
                            return {
                                billingCycle: m,
                                toggleBillingCycle: x,
                                planPrices: R
                            }
                        }
                        return {
                            billingCycle: m,
                            toggleBillingCycle: x,
                            planPrices: b
                        }
                    }(g, v, y),
                    A = b.billingCycle,
                    _ = b.toggleBillingCycle,
                    j = b.planPrices,
                    C = (0, be.lc)().HandleEvent,
                    w = function(e) {
                        var t = {
                                plan_type: e,
                                billingCycle: "annual" === A ? "annually" : "monthly",
                                hasJusProcessos: g,
                                jusprocessos_count: v,
                                is_offer: !1,
                                affiliation_type: x ? "caamg" : void 0
                            },
                            i = (0, Ti.wQ)(t),
                            a = !i,
                            o = i && ((0, Ao.isNil)(i.id) || (0, Ao.isNil)(i.gateway_id)),
                            r = i && "number" !== typeof i.id;
                        if (a || o || r) return ti.oR.error("Plano n\xe3o encontrado. Por favor, tente novamente ou contate o suporte."), void n.formik.setFieldValue("product_selected", null);
                        var l = {
                            id: i.id,
                            name: i.name,
                            description: i.description,
                            periodicity: i.billingCycle,
                            price: i.amount,
                            gateway_id: null != i.gateway_id ? String(i.gateway_id) : null
                        };
                        n.formik.setFieldValue("product_selected", l), C("Universal Plan Selected", (0, Re.A)((0, Re.A)({}, l), {}, {
                            isUniversal: !0
                        })), n.isPagarmeV5 ? n.setModalV5(!0) : n.setModalCheckout(!0)
                    };
                return (0, Kn.jsx)(Gg, {
                    children: (0, Kn.jsxs)(Hg, {
                        children: [(0, Kn.jsx)("h3", {
                            children: "Upgrade Plano"
                        }), (0, Kn.jsx)("p", {
                            children: "Basta escolher um plano para realizar o upgrade agora mesmo"
                        }), (0, Kn.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row"
                            },
                            children: [(0, Kn.jsx)("span", {
                                style: {
                                    fontSize: "12px",
                                    lineHeight: "36px",
                                    marginRight: "10px"
                                },
                                children: "Mensal"
                            }), (0, Kn.jsx)(Oe.A, {
                                style: {
                                    marginRight: "0px",
                                    paddingRight: "0px"
                                },
                                control: (0, Kn.jsx)(rr.A, {
                                    style: {
                                        marginRight: "0px",
                                        paddingRight: "0px"
                                    },
                                    color: "primary",
                                    checked: "annual" === A,
                                    onChange: _
                                })
                            }), (0, Kn.jsx)("span", {
                                style: {
                                    fontSize: "12px",
                                    lineHeight: "36px",
                                    marginLeft: ""
                                },
                                children: "Anual"
                            }), (0, Kn.jsx)(Wg, {
                                src: (0, zn.oK)("/media/svg/tag-discount-20.svg")
                            })]
                        }), (0, Kn.jsxs)("div", {
                            className: "row",
                            children: [(0, Kn.jsx)("div", {
                                className: "col-lg-4 col-12 mb-5",
                                children: (0, Kn.jsxs)(Yg, {
                                    onClick: function() {
                                        return w("starter")
                                    },
                                    children: [(0, Kn.jsx)("span", {
                                        children: null === j || void 0 === j ? void 0 : j.starter.title
                                    }), (0, Kn.jsxs)("p", {
                                        className: "preco",
                                        children: [null === j || void 0 === j ? void 0 : j.starter.price, " ", (0, Kn.jsx)("span", {
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: null === j || void 0 === j || null === (s = j.starter) || void 0 === s ? void 0 : s.total
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        className: "subtitulo",
                                        children: "Plano Inicial b\xe1sico para advogados iniciando a carreira."
                                    }), (0, Kn.jsx)("ul", {
                                        children: null === (c = (0, mv.V)($g, "starter", m)) || void 0 === c ? void 0 : c.map(function(n, e) {
                                            return (0, Kn.jsxs)("li", {
                                                children: [(0, Kn.jsx)("i", {
                                                    className: n.enabled ? "icon-lg fas fa-check" : "icon-lg fas fa-times disabled"
                                                }), " ", (0, Kn.jsx)("span", {
                                                    children: n.description
                                                })]
                                            }, e)
                                        })
                                    }), (0, Kn.jsxs)("a", {
                                        href: "#",
                                        children: ["Assinar agora", " ", (0, Kn.jsx)("img", {
                                            src: (0, zn.oK)("/media/icon-arrow.svg")
                                        })]
                                    })]
                                })
                            }), (0, Kn.jsx)("div", {
                                className: "col-lg-4 col-12 mb-5",
                                children: (0, Kn.jsxs)(Yg, {
                                    onClick: function() {
                                        return w("master")
                                    },
                                    children: [(0, Kn.jsx)("span", {
                                        children: null === j || void 0 === j ? void 0 : j.master.title
                                    }), (0, Kn.jsxs)("p", {
                                        className: "preco",
                                        children: [null === j || void 0 === j ? void 0 : j.master.price, " ", (0, Kn.jsx)("span", {
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: null === j || void 0 === j || null === (d = j.master) || void 0 === d ? void 0 : d.total
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        className: "subtitulo",
                                        children: "Plano completo para voc\xea. Tenha acesso a todas ferramentas necess\xe1rias para o seu escrit\xf3rio."
                                    }), (0, Kn.jsx)("ul", {
                                        children: null === (u = (0, mv.V)(Jg, "master", m)) || void 0 === u ? void 0 : u.map(function(n, e) {
                                            return (0, Kn.jsxs)("li", {
                                                children: [(0, Kn.jsx)("i", {
                                                    className: n.enabled ? "icon-lg fas fa-check" : "icon-lg fas fa-times disabled"
                                                }), " ", (0, Kn.jsx)("span", {
                                                    children: n.description
                                                })]
                                            }, e)
                                        })
                                    }), (0, Kn.jsxs)("a", {
                                        href: "#",
                                        children: ["Assinar agora", " ", (0, Kn.jsx)("img", {
                                            src: (0, zn.oK)("/media/icon-arrow.svg")
                                        })]
                                    })]
                                })
                            }), (0, Kn.jsx)("div", {
                                className: "col-lg-4 col-12 mb-5",
                                children: (0, Kn.jsxs)(Yg, {
                                    onClick: function() {
                                        return w("ultimate")
                                    },
                                    children: [(0, Kn.jsx)("span", {
                                        children: null === j || void 0 === j ? void 0 : j.ultimate.title
                                    }), (0, Kn.jsxs)("p", {
                                        className: "preco",
                                        children: [null === j || void 0 === j ? void 0 : j.ultimate.price, " ", (0, Kn.jsx)("span", {
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: null === j || void 0 === j || null === (p = j.ultimate) || void 0 === p ? void 0 : p.total
                                        })]
                                    }), (0, Kn.jsx)("p", {
                                        className: "subtitulo",
                                        children: "Plano Ultimate. Tenha acesso a todas ferramentas com mais benef\xedcios ainda."
                                    }), (0, Kn.jsx)("ul", {
                                        children: (0, mv.V)(Kg, "ultimate", m).map(function(n, e) {
                                            return (0, Kn.jsxs)("li", {
                                                children: [(0, Kn.jsx)("i", {
                                                    className: n.enabled ? "icon-lg fas fa-check" : "icon-lg fas fa-times disabled"
                                                }), " ", (0, Kn.jsx)("span", {
                                                    children: n.description
                                                })]
                                            }, e)
                                        })
                                    }), (0, Kn.jsxs)("a", {
                                        href: "#",
                                        children: ["Assinar agora", " ", (0, Kn.jsx)("img", {
                                            src: (0, zn.oK)("/media/icon-arrow.svg")
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }

            function xv(n) {
                var e = (0, On.d4)(function(n) {
                        return n.app.cards
                    }),
                    t = ((0, On.d4)(function(n) {
                        return n.auth.user
                    }), (0, On.wA)()),
                    i = (0, Nn.useRef)(),
                    a = (0, ai.q$)(i),
                    o = (0, Ln.A)(a, 2),
                    r = o[0],
                    l = o[1];
                (0, ai.xM)(i), (0, Nn.useEffect)(function() {
                    n.formik.setFieldValue("recaptchaToken", l.v3Token)
                }, [l.v3Token]), (0, Nn.useEffect)(function() {
                    t({
                        type: "LOAD_CARDS"
                    })
                }, [t]);
                var s = (0, ki.A)({
                    cardNumber: n.formik.values.card_number
                }).svg;
                return (0, Kn.jsx)(Ci.Y, {
                    blocking: n.formik.isSubmitting,
                    children: null != n.formik.values.product_selected && (0, Kn.jsxs)(Xg, {
                        children: [(0, Kn.jsx)(Zg, {
                            onClick: function() {
                                return n.back()
                            },
                            src: (0, zn.oK)("/media/svg/icons/Navigation/Arrow-left.svg")
                        }), (0, Kn.jsx)("span", {
                            children: "Checkout"
                        }), (0, Kn.jsx)("hr", {}), (0, Kn.jsx)("h3", {
                            children: n.formik.values.product_selected.name
                        }), (0, Kn.jsx)("p", {
                            children: n.formik.values.product_selected.description
                        }), (0, Kn.jsxs)("span", {
                            className: "price",
                            children: ["R$ ", (0, zn.Zt)(n.formik.values.product_selected.price)]
                        }), (0, Kn.jsx)("div", {
                            className: "hr"
                        }), (0, Kn.jsxs)("div", {
                            className: "mb-3",
                            children: [e && e.map(function(e) {
                                return (0, Kn.jsx)(Sr.A.Check, {
                                    custom: !0,
                                    type: "checkbox",
                                    label: "Desejo utilizar meu cart\xe3o com final ".concat(e.last_digits),
                                    checked: n.formik.values.card_selected && n.formik.values.card_selected.hash === e.hash,
                                    onChange: function() {
                                        return n.formik.setFieldValue("card_selected", e)
                                    },
                                    id: "card-".concat(e.hash)
                                }, e.hash)
                            }), (0, Kn.jsx)(Sr.A.Check, {
                                custom: !0,
                                type: "checkbox",
                                label: "Desejo informar os dados do cart\xe3o manualmente",
                                checked: null === n.formik.values.card_selected,
                                onChange: function() {
                                    return n.formik.setFieldValue("card_selected", null)
                                },
                                id: "card-none"
                            })]
                        }, n.formik.values.card_selected), null === n.formik.values.card_selected && (0, Kn.jsxs)("div", {
                            className: "row",
                            children: [(0, Kn.jsxs)("div", {
                                className: "col-12",
                                children: [(0, Kn.jsx)("label", {
                                    children: "Nome impresso no cart\xe3o"
                                }), (0, Kn.jsx)("input", {
                                    name: "cardholder_name",
                                    type: "text",
                                    className: "form-control " + (n.formik.errors.cardholder_name && n.formik.touched.cardholder_name ? "is-invalid" : ""),
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.cardholder_name
                                }), n.formik.errors.cardholder_name && n.formik.touched.cardholder_name && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.cardholder_name
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "N\xfamero do cart\xe3o"
                                }), (0, Kn.jsxs)(nv, {
                                    children: [(0, Kn.jsx)(_i(), {
                                        name: "card_number",
                                        placeholder: "0000 0000 0000 0000",
                                        mask: "9999 9999 9999 9999",
                                        maskChar: null,
                                        className: "form-control " + (n.formik.errors.card_number && n.formik.touched.card_number ? "is-invalid" : ""),
                                        type: "tel",
                                        onChange: n.formik.handleChange,
                                        value: n.formik.values.card_number
                                    }), (0, Kn.jsx)("img", {
                                        src: s ? (0, zn.oK)(s) : wi.dH,
                                        alt: "Bandeira do cart\xe3o"
                                    }), n.formik.errors.card_number && n.formik.touched.card_number && (0, Kn.jsx)("label", {
                                        className: "invalid-feedback",
                                        children: n.formik.errors.card_number
                                    })]
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-3 col-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "Vencimento"
                                }), (0, Kn.jsx)(_i(), {
                                    name: "card_expiration",
                                    placeholder: "MM / AAAA",
                                    mask: "99 / 9999",
                                    maskChar: null,
                                    className: "form-control " + (n.formik.errors.card_expiration && n.formik.touched.card_expiration ? "is-invalid" : ""),
                                    type: "tel",
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.card_expiration
                                }), n.formik.errors.card_expiration && n.formik.touched.card_expiration && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.card_expiration
                                })]
                            }), (0, Kn.jsxs)("div", {
                                className: "col-lg-3 col-6",
                                children: [(0, Kn.jsx)("label", {
                                    children: "CVV"
                                }), (0, Kn.jsx)(_i(), {
                                    name: "card_cvv",
                                    placeholder: "000",
                                    mask: "9999",
                                    maskChar: null,
                                    className: "form-control " + (n.formik.errors.card_cvv && n.formik.touched.card_cvv ? "is-invalid" : ""),
                                    type: "tel",
                                    onChange: n.formik.handleChange,
                                    value: n.formik.values.card_cvv
                                }), n.formik.errors.card_cvv && n.formik.touched.card_cvv && (0, Kn.jsx)("label", {
                                    className: "invalid-feedback",
                                    children: n.formik.errors.card_cvv
                                })]
                            })]
                        }), (0, Kn.jsx)(ii.ReCaptchaProvider, {
                            siteKeyV3: "6Lc1YP8qAAAAAEPdzg4zAzJt7w4KVK3RZMFk5xhj",
                            children: (0, Kn.jsx)(ii.ReCaptchaV3, {
                                callback: r
                            })
                        }), (0, Kn.jsx)("span", {
                            className: "desc-payment",
                            children: "\xa0"
                        }), (0, Kn.jsx)("button", {
                            className: "btn btn-primary",
                            type: "button",
                            onClick: function() {
                                n.formik.handleSubmit()
                            },
                            disabled: n.formik.isSubmitting,
                            children: "Assinar agora"
                        })]
                    })
                })
            }
            var gv, vv, yv = Xn.default.div(pv || (pv = (0, Gn.A)(["\n  span {\n    font-size: 40px;\n    display: block;\n    padding: 5px;\n    text-align: center;\n    color: #a1a8c1;\n  }\n\n  hr {\n    opacity: 0.1;\n    margin: 0;\n  }\n\n  small {\n    font-size: 16px;\n    display: block;\n    text-align: center;\n    opacity: 0.6;\n    margin-top: 20px;\n  }\n\n  .success {\n    color: #41c78f !important;\n  }\n\n  .warning {\n    color: #ffc107 !important;\n  }\n\n  .error {\n    color: #ff6245 !important;\n  }\n"]))),
                bv = Xn.default.h2(fv || (fv = (0, Gn.A)(["\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 20px;\n"])));

            function Av(n) {
                var e = (0, On.wA)();
                return (0, Kn.jsxs)(yv, {
                    children: [(0, Kn.jsx)(bv, {
                        className: "success",
                        children: "Parab\xe9ns, sua assinatura foi atualizada com sucesso!"
                    }), (0, Kn.jsx)("button", {
                        type: "button",
                        className: "btn btn-primary",
                        style: {
                            width: "100%"
                        },
                        onClick: function() {
                            e({
                                type: "LOAD_SUBSCRIPTION_STATUS",
                                payload: {
                                    callback: function(n) {
                                        e(Tr.actions.updateUserProvider(n))
                                    }
                                }
                            }), e({
                                type: "CLOSE_MODAL_SUBSCRIPTION"
                            }), n.closeModal()
                        },
                        children: "CONTINUAR NAVEGANDO"
                    })]
                })
            }
            var _v, jv, Cv, wv, kv, Sv = Xn.default.div(gv || (gv = (0, Gn.A)(["\n  background: #41c78f;\n  display: inline-block;\n  padding: 10px 17px;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  color: #fff;\n  font-weight: bold;\n  border-radius: 50px;\n  z-index: 9999;\n  :hover {\n    cursor: pointer;\n    background: #3ab380;\n  }\n"]))),
                Pv = (0, Xn.default)(or.A)(vv || (vv = (0, Gn.A)(["\n  .modal-body {\n    padding: 40px !important;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n\n  .modal-content {\n    border-radius: 10px !important;\n    max-height: 90vh;\n  }\n\n  .modal-dialog {\n    max-width: 1200px !important;\n  }\n\n  @media screen and (max-width: 767px) {\n    .modal-content {\n      width: 90% !important;\n      margin: 0 auto !important;\n    }\n  }\n"])));

            function Ev(n) {
                var e, t, i, a, o, r, l, s, c, d = (0, Nn.useState)("choose_plan"),
                    u = (0, Ln.A)(d, 2),
                    p = u[0],
                    f = u[1],
                    m = (0, On.d4)(function(n) {
                        return n.app.modal_subscription
                    }),
                    h = (0, On.d4)(function(n) {
                        return n.subscription
                    }),
                    x = ((0, On.d4)(function(n) {
                        return n.auth
                    }) || {}).provider,
                    g = (0, Nn.useState)(null !== (e = h.subscription_status.info) && void 0 !== e && e.has_error ? null === (t = h.subscription_status) || void 0 === t ? void 0 : t.subscription_info : null === (i = h.subscription_status) || void 0 === i || null === (a = i.info) || void 0 === a ? void 0 : a.plan),
                    v = (0, Ln.A)(g, 2),
                    y = v[0],
                    b = (v[1], (0, Nn.useState)(!1)),
                    A = (0, Ln.A)(b, 2),
                    _ = A[0],
                    j = A[1],
                    C = window.location.pathname.split("/")[1],
                    w = (0, Nn.useState)(C),
                    k = (0, Ln.A)(w, 2),
                    S = k[0],
                    P = (k[1], (0, be.lc)().LimitReachModal),
                    E = (0, On.wA)(),
                    R = function() {
                        var n = new Date,
                            e = String(n.getDate()).padStart(2, "0"),
                            t = String(n.getMonth() + 1).padStart(2, "0"),
                            i = n.getFullYear();
                        return "".concat(e, "/").concat(t, "/").concat(i)
                    },
                    M = (0, bi.Wx)({
                        initialValues: {
                            product_selected: null,
                            cardholder_name: "",
                            card_number: "",
                            card_payment_method: null,
                            card_cvv: "",
                            card_expiration: "",
                            card_selected: null,
                            recaptchaToken: ""
                        },
                        onSubmit: function(e, t) {
                            var i = t.setSubmitting;
                            if (null === e.card_selected) {
                                var a = {};
                                a.card_holder_name = e.cardholder_name, a.card_expiration_date = e.card_expiration.substr(0, 2) + "/" + e.card_expiration.substr(e.card_expiration.length - 2), a.card_number = e.card_number, a.card_cvv = e.card_cvv;
                                var o = Oi().validate({
                                    card: a
                                });
                                if (!o.card.card_holder_name) return i(!1), ti.oR.error("Verifique o nome impresso no cart\xe3o."), !1;
                                if (!o.card.card_number) return i(!1), ti.oR.error("Verifique o n\xfamero do cart\xe3o."), !1;
                                if (!o.card.card_expiration_date) return i(!1), ti.oR.error("Verifique a data de expira\xe7\xe3o do cart\xe3o."), !1;
                                if (!o.card.card_cvv) return i(!1), ti.oR.error("Verifique o c\xf3digo de seguran\xe7a (CVV) do cart\xe3o."), !1;
                                var r = function(t) {
                                    E({
                                        type: "CREATE_SUBSCRIPTION",
                                        payload: {
                                            values: (0, Re.A)((0, Re.A)({}, e), {}, {
                                                card_hash: t
                                            }),
                                            callback: function(t) {
                                                var i, a, o, r, l, s, c, d;
                                                f("success"), P("Universal Plan Upgraded", {
                                                    current_plan: y || "STARTER",
                                                    new_plan: null === (i = e.product_selected) || void 0 === i ? void 0 : i.id,
                                                    context: S,
                                                    current_plan_id: null === h || void 0 === h || null === (a = h.subscription_status) || void 0 === a || null === (o = a.plan_details) || void 0 === o ? void 0 : o.gateway_id,
                                                    new_plan_name: null === (r = e.product_selected) || void 0 === r ? void 0 : r.name,
                                                    new_plan_id: null === (l = e.product_selected) || void 0 === l ? void 0 : l.gateway_id,
                                                    new_plan_price: null === (s = e.product_selected) || void 0 === s ? void 0 : s.price,
                                                    current_plan_price: null === h || void 0 === h || null === (c = h.subscription_status) || void 0 === c || null === (d = c.plan_details) || void 0 === d ? void 0 : d.amount,
                                                    querie: null === n || void 0 === n ? void 0 : n.identification,
                                                    dateUpgrade: R(),
                                                    isUniversal: !0
                                                })
                                            },
                                            setSubmitting: i
                                        }
                                    })
                                };
                                if ("pagarme_v5" === x) {
                                    var l = {
                                        method: "POST",
                                        headers: {
                                            accept: "application/json",
                                            "content-type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            type: "card",
                                            card: {
                                                number: a.card_number.replace(/\s/g, ""),
                                                holder_name: a.card_holder_name,
                                                exp_month: parseInt(a.card_expiration_date.substr(0, 2), 10),
                                                exp_year: parseInt(a.card_expiration_date.substr(3, 2), 10),
                                                cvv: a.card_cvv
                                            }
                                        })
                                    };
                                    fetch("https://api.pagar.me/core/v5/tokens?appId=".concat("pk_yvrBvXfyGsLblq1d"), l).then(function(n) {
                                        return n.json()
                                    }).then(function(n) {
                                        return r(n.id)
                                    }).catch(function(n) {
                                        i(!1), ti.oR.error("Erro ao processar o cart\xe3o. Tente novamente."), console.error("Erro na tokeniza\xe7\xe3o:", n)
                                    })
                                } else Oi().client.connect({
                                    encryption_key: "ek_live_1k97whurxvoxNIX2laU2BHdzhWFcAK"
                                }).then(function(n) {
                                    return n.security.encrypt(a)
                                }).then(function(n) {
                                    return r(n)
                                }).catch(function() {
                                    i(!1), ti.oR.error("Erro ao processar o cart\xe3o. Tente novamente.")
                                })
                            } else E({
                                type: "CREATE_SUBSCRIPTION",
                                payload: {
                                    values: (0, Re.A)({}, e),
                                    callback: function() {
                                        var t, i, a, o, r, l, s, c;
                                        f("success"), P("Universal Plan Upgraded", {
                                            current_plan: y || "STARTER",
                                            new_plan: null === (t = e.product_selected) || void 0 === t ? void 0 : t.id,
                                            context: S,
                                            current_plan_id: null === h || void 0 === h || null === (i = h.subscription_status) || void 0 === i || null === (a = i.plan_details) || void 0 === a ? void 0 : a.gateway_id,
                                            new_plan_id: null === (o = e.product_selected) || void 0 === o ? void 0 : o.gateway_id,
                                            new_plan_name: null === (r = e.product_selected) || void 0 === r ? void 0 : r.name,
                                            new_plan_price: null === (l = e.product_selected) || void 0 === l ? void 0 : l.price,
                                            current_plan_price: null === h || void 0 === h || null === (s = h.subscription_status) || void 0 === s || null === (c = s.plan_details) || void 0 === c ? void 0 : c.amount,
                                            querie: null === n || void 0 === n ? void 0 : n.identification,
                                            dateUpgrade: R(),
                                            isUniversal: !0
                                        })
                                    },
                                    setSubmitting: i
                                }
                            })
                        },
                        validationSchema: yi.Ik().shape({
                            cardholder_name: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O nome do titular do cart\xe3o \xe9 obrigat\xf3rio.")
                            }),
                            card_number: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O n\xfamero do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidCardNumber", "N\xfamero do cart\xe3o inv\xe1lido.", function(n) {
                                    var e = this.parent.card_payment_method;
                                    return n && 19 === n.length && null !== e
                                })
                            }),
                            card_expiration: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O m\xeas/ano de expira\xe7\xe3o do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidExpiration", "O vencimento \xe9 inv\xe1lido.", function(n) {
                                    return n && /^(0[1-9]|1[012]) [/] 20\d{2}/.test(n)
                                })
                            }),
                            card_cvv: yi.Yj().when("card_selected", {
                                is: null,
                                then: yi.Yj().required("O c\xf3digo de seguran\xe7a (CVV) do cart\xe3o \xe9 obrigat\xf3rio.").test("isValidCVV", "N\xfamero do CVV inv\xe1lido.", function(n) {
                                    return n && /^[0-9]{3,4}$/.test(n)
                                })
                            })
                        })
                    });
                (0, Nn.useEffect)(function() {
                    null !== M.values.product_selected && f("checkout")
                }, [M.values.product_selected]);
                var O = function() {
                    E({
                        type: "LOAD_SUBSCRIPTION_STATUS",
                        payload: {
                            callback: function(n) {
                                var e;
                                E(null === Tr || void 0 === Tr || null === (e = Tr.actions) || void 0 === e ? void 0 : e.updateUserProvider(n))
                            }
                        }
                    }), E({
                        type: "CLOSE_MODAL_SUBSCRIPTION"
                    }), n.setModalCheckout(!1), n.setLoadingCheckout(!0)
                };
                return (0, Kn.jsx)(Kn.Fragment, {
                    children: _ ? M.values.product_selected && (0, Kn.jsx)(Na.A, {
                        isOpen: n.visible,
                        close: O,
                        back: O,
                        productSelected: {
                            id: null === (o = M.values.product_selected) || void 0 === o ? void 0 : o.id,
                            name: null === (r = M.values.product_selected) || void 0 === r ? void 0 : r.name,
                            description: "",
                            periodicity: null === (l = M.values.product_selected) || void 0 === l ? void 0 : l.periodicity,
                            price: null === (s = M.values.product_selected) || void 0 === s ? void 0 : s.price,
                            gateway_id: null === (c = M.values.product_selected) || void 0 === c ? void 0 : c.gateway_id
                        }
                    }) : (0, Kn.jsxs)(Pv, {
                        show: n.visible,
                        onHide: O,
                        centered: !0,
                        backdrop: "static",
                        keyboard: !1,
                        children: [(0, Kn.jsx)(Sv, {
                            onClick: O,
                            children: "X"
                        }), (0, Kn.jsxs)(or.A.Body, {
                            children: ["choose_plan" === p && (0, Kn.jsx)(hv, {
                                screen: p,
                                setScreen: f,
                                visible: !0,
                                setModalCheckout: f,
                                url: S,
                                formik: M,
                                title: m.title,
                                subtitle: m.subtitle,
                                modalV5: _,
                                setModalV5: j,
                                isPagarmeV5: "pagarme_v5" === x
                            }), "checkout" === p && (0, Kn.jsx)(xv, {
                                screen: p,
                                setScreen: f,
                                formik: M,
                                back: function() {
                                    return f("choose_plan")
                                },
                                loading: n.loadingCheckout,
                                setLoading: n.setLoadingCheckout
                            }), "success" === p && (0, Kn.jsx)(Av, {
                                screen: p,
                                setScreen: f,
                                loading: n.loadingCheckout,
                                setLoading: n.setLoadingCheckout,
                                closeModal: O
                            })]
                        })]
                    })
                })
            }
            var Rv, Mv, Ov, Tv, Nv, Dv, zv, qv, Lv, Iv, Fv, Uv, Qv, Vv, Bv, $v, Jv, Kv, Wv, Hv, Yv, Gv, Xv, Zv, ny, ey, ty, iy, ay, oy, ry, ly, sy, cy, dy, uy, py, fy, my, hy, xy, gy, vy, yy, by, Ay, _y, jy, Cy, wy, ky = Xn.default.div(_v || (_v = (0, Gn.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 16px;\n\n  @media (min-width: 545px) {\n    margin-top: 16px;\n  }\n"]))),
                Sy = (Xn.default.div(jv || (jv = (0, Gn.A)(["\n  width: 275px;\n  flex-grow: 1;\n\n  @media (min-width: 1800px) {\n    width: 350px;\n  }\n"]))), Xn.default.div(Cv || (Cv = (0, Gn.A)(["\n  position: relative;\n  width: 275px;\n  flex-grow: 1;\n\n  ", "\n\n  @media (min-width: 1800px) {\n    width: 350px;\n  }\n"])), function(n) {
                    return n.isMaintenance ? "\npointer-events: none;\n" : ""
                }), Xn.default.p(wv || (wv = (0, Gn.A)(["\n  color: var(--gray-900, #131313);\n  font-family: var(--font-family-font-family-title, 'Noto Sans');\n  font-size: var(--font-size-font-size-20, 20px);\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])))),
                Py = ((0, Xn.default)(sl.A)(kv || (kv = (0, Gn.A)(["\n  box-shadow: none !important;\n  border-radius: 7px;\n  width: ", ";\n  position: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  flex-grow: ", ";\n  overflow: ", " !important;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n  height: 281px;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    h5 {\n      margin: 0px;\n      color: #017858;\n      text-align: center;\n      font-family: 'Noto Sans';\n      font-size: 20px;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 110%;\n    }\n\n    span {\n      color: #383839;\n      text-align: center;\n\n      font-family: 'Noto Sans';\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 140%;\n    }\n  }\n\n  button {\n    display: flex;\n    height: 40px;\n    padding: 10px 40px;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 5px;\n    background: #01ab7d;\n    border: none;\n\n    color: #fff;\n    text-align: center;\n    font-family: 'Noto Sans';\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 140%;\n\n    &:hover {\n      border-radius: 5px;\n      background: linear-gradient(\n          0deg,\n          rgba(0, 0, 0, 0.08) 0%,\n          rgba(0, 0, 0, 0.08) 100%\n        ),\n        #01ab7d;\n    }\n  }\n"])), function(n) {
                    var e = n.width;
                    return "full" === e ? "100%" : e
                }, function(n) {
                    return n.position
                }, function(n) {
                    var e = n.padding;
                    return e || "0"
                }, function(n) {
                    var e = n.border;
                    return e || "none"
                }, function(n) {
                    var e = n.borderRadius;
                    return e ? e + " !important" : "0"
                }, function(n) {
                    return n.grow
                }, function(n) {
                    return n.overflow
                }), t(51091)),
                Ey = function() {
                    var n = function() {
                            var n = (0, Nn.useState)(null),
                                e = (0, Ln.A)(n, 2),
                                t = e[0],
                                i = e[1],
                                a = (0, Nn.useState)(!1),
                                o = (0, Ln.A)(a, 2),
                                r = o[0],
                                l = o[1],
                                s = (0, Nn.useState)([]),
                                c = (0, Ln.A)(s, 2),
                                d = c[0],
                                u = c[1],
                                p = ws(mt.Ds, d),
                                f = p.search,
                                m = p.setSearch,
                                h = p.results,
                                x = (0, Nn.useMemo)(function() {
                                    return new Set(h.map(function(n) {
                                        return n.id
                                    }))
                                }, [h]),
                                g = (0, Nn.useContext)(Dx.g),
                                v = g.setShouldReload,
                                y = g.openModal,
                                b = g.fillQueries,
                                A = g.modalCheckout,
                                _ = g.setModalCheckout,
                                j = g.loadingModalCheckout,
                                C = g.setLoadingModalCheckout,
                                w = g.modal,
                                k = g.setIsLoading,
                                S = g.setCreditAvailable,
                                P = g.modalSuggestion,
                                E = g.setModalSuggestion,
                                R = g.setPage,
                                M = g.dataQueries,
                                O = g.setDataQueries,
                                T = (0, be.lc)().HandleEvent,
                                N = (0, Qc.I)({
                                    queryFn: function() {
                                        var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                            var e;
                                            return (0, Va.A)().w(function(n) {
                                                for (;;) switch (n.n) {
                                                    case 0:
                                                        return n.n = 1, Ss();
                                                    case 1:
                                                        return e = n.v, n.a(2, {
                                                            data: (0, Py.vt)(e.data.data),
                                                            availableCredits: e.data.availableCredits
                                                        })
                                                }
                                            }, n)
                                        }));
                                        return function() {
                                            return n.apply(this, arguments)
                                        }
                                    }(),
                                    onSuccess: function(n) {
                                        S(n.availableCredits), O(n.data), Q(n.data)
                                    },
                                    queryKey: ["queries"],
                                    refetchOnMount: !0
                                }),
                                D = N.data,
                                z = N.isLoading,
                                q = N.refetch,
                                L = Uc({
                                    dataQueries: M,
                                    refetchQueries: q
                                }),
                                I = L.favoriteCards,
                                F = L.handleDragEnd,
                                U = L.handleFavoriteClick,
                                Q = L.initFavoritesFromQueries,
                                V = L.isCardFavorited,
                                B = L.sensors,
                                $ = (0, Nn.useMemo)(function() {
                                    return new Set(I.map(function(n) {
                                        return n.identification
                                    }))
                                }, [I]),
                                J = (0, Nn.useMemo)(function() {
                                    var n = f.trim().length > 0 || d.length > 0 ? null === M || void 0 === M ? void 0 : M.filter(function(n) {
                                        return x.has(n.identification)
                                    }) : M;
                                    return null === n || void 0 === n ? void 0 : n.filter(function(n) {
                                        return !$.has(n.identification)
                                    })
                                }, [f, d, M, x, $]),
                                K = (0, Nn.useMemo)(function() {
                                    return f.trim().length > 0 || d.length > 0 ? null === I || void 0 === I ? void 0 : I.filter(function(n) {
                                        return x.has(n.identification)
                                    }) : I
                                }, [f, d, I, x]),
                                W = (0, Nn.useMemo)(function() {
                                    return !z && (null === M || void 0 === M ? void 0 : M.length) > 0 && 0 === (null === J || void 0 === J ? void 0 : J.length)
                                }, [z, M, J]);
                            return {
                                loading: z,
                                setIsLoading: k,
                                queries: M || [],
                                creditAvailable: (null === D || void 0 === D ? void 0 : D.availableCredits) || 0,
                                isSubscriptionModalOpen: r,
                                setIsSubscriptionModalOpen: l,
                                onClick: function(n, e) {
                                    n && n.stopPropagation(), b(), i(null === e || void 0 === e ? void 0 : e.identification), T("Query Type Selected (Universal)", {
                                        query_type: e.identification,
                                        isUniversal: !0
                                    }), (0, Py.WA)(e, y, D.availableCredits)
                                },
                                setShouldReload: v,
                                modalCheckout: A,
                                setModalCheckout: _,
                                loadingModalCheckout: j,
                                setLoadingModalCheckout: C,
                                modal: w,
                                querieSelected: t,
                                setQuerySelected: i,
                                openModal: y,
                                modalSuggestion: P,
                                setModalSuggestion: E,
                                ChangePageQuery: function() {
                                    R("MultipleQueriesPage"), Vc.j.track({
                                        event: "Card MultipleQueries Clicked",
                                        properties: {
                                            category: "core_usage",
                                            owner: "Jusfinder",
                                            relevant_user_activity: !0,
                                            event_meaning: "Usu\xe1rio clicou no card de M\xfaltiplas Consultas para ir para a p\xe1gina de M\xfaltiplas Consultas",
                                            isUniversal: !0
                                        },
                                        context: {
                                            groupId: "jusfinder-group",
                                            library: {
                                                name: "jusfinder-library",
                                                componente: "card-multiple-queries"
                                            }
                                        }
                                    })
                                },
                                handleDragEnd: F,
                                sensors: B,
                                handleFavoriteClick: U,
                                favoriteCards: I,
                                isCardFavorited: V,
                                filteredData: J,
                                filteredFavoritesData: K,
                                isEmpty: W,
                                search: f,
                                setSearch: m,
                                documents: d,
                                setDocuments: u
                            }
                        }(),
                        e = n.loading,
                        t = n.onClick,
                        i = n.modalCheckout,
                        a = n.setModalCheckout,
                        o = n.loadingModalCheckout,
                        r = n.setLoadingModalCheckout,
                        l = n.querieSelected,
                        s = n.openModal,
                        c = n.modalSuggestion,
                        d = n.setModalSuggestion,
                        u = n.ChangePageQuery,
                        p = n.creditAvailable,
                        f = n.handleDragEnd,
                        m = n.handleFavoriteClick,
                        h = n.filteredFavoritesData,
                        x = n.sensors,
                        g = n.isCardFavorited,
                        v = n.documents,
                        y = n.setDocuments,
                        b = n.isEmpty,
                        A = n.search,
                        _ = n.setSearch,
                        j = n.filteredData;
                    return (0, Kn.jsxs)(ky, {
                        children: [(0, Kn.jsx)(as, {
                            search: A,
                            setSearch: _,
                            documents: v,
                            setDocuments: y,
                            loading: e,
                            isUniversalJusfinder: !1
                        }), e && mt.Y3.map(function(n, e) {
                            return (0, Kn.jsx)(Eo.A, {
                                variant: "rounded",
                                width: 350,
                                height: 261,
                                animation: "wave",
                                style: {
                                    flexGrow: 1
                                }
                            }, e)
                        }), b && (0, Kn.jsx)(ms, {}), (0, Kn.jsx)(id, {
                            favoriteCards: h,
                            sensors: x,
                            handleDragEnd: f,
                            onClickCard: t,
                            handleFavoriteClick: m,
                            loading: e
                        }), h.length > 0 && !b && (0, Kn.jsx)(Sy, {
                            children: "Consultas"
                        }), (0, Kn.jsxs)(Ro.A, {
                            sx: {
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "repeat(auto-fill, minmax(250px, 1fr))",
                                    md: "repeat(auto-fill, minmax(280px, 1fr))",
                                    lg: "repeat(auto-fill, minmax(300px, 1fr))"
                                },
                                gap: 3,
                                width: "100%",
                                margin: "0 auto",
                                justifyContent: "center"
                            },
                            children: [!e && (0, Kn.jsxs)(Kn.Fragment, {
                                children: [(null === j || void 0 === j ? void 0 : j.length) > 0 && (0, Kn.jsx)(As, {
                                    onClick: u,
                                    height: "263px"
                                }), null === j || void 0 === j ? void 0 : j.map(function(n) {
                                    return (0, Kn.jsx)(Bg, {
                                        queryOption: n,
                                        onClick: function(e) {
                                            return t(e, n)
                                        },
                                        openModal: s,
                                        creditAvailable: p,
                                        onFavoriteClick: m(n.identification),
                                        isCardFavorited: g
                                    }, n.id)
                                })]
                            }), !e && Array.from({
                                length: Math.max(0, ft.vd - j.length - 1)
                            }).map(function(n, e) {
                                return (0, Kn.jsx)(Ro.A, {
                                    sx: {
                                        width: "100%",
                                        height: 0,
                                        paddingBottom: "100px",
                                        visibility: "hidden"
                                    }
                                }, "placeholder-".concat(e))
                            })]
                        }), (0, Kn.jsx)(Ev, {
                            visible: i,
                            setModalCheckout: a,
                            loadingCheckout: o,
                            setLoadingCheckout: r,
                            identification: l
                        }), (0, Kn.jsx)(vl, {
                            openModal: c,
                            setOpenModal: d,
                            url: ft.sK
                        })]
                    })
                },
                Ry = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.n) {
                                case 0:
                                    return n.n = 1, rt.A.delete("".concat("https://backend.jusfy.com.br/api", "/queries/").concat(e));
                                case 1:
                                    return n.a(2, n.v)
                            }
                        }, n)
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                My = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.n) {
                                case 0:
                                    return n.n = 1, rt.A.get(e);
                                case 1:
                                    return n.a(2, n.v)
                            }
                        }, n)
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                Oy = function() {
                    var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                        return (0, Va.A)().w(function(n) {
                            for (;;) switch (n.n) {
                                case 0:
                                    return n.n = 1, rt.A.put("".concat("https://backend.jusfy.com.br/api", "/queries/").concat(e));
                                case 1:
                                    return n.a(2, n.v)
                            }
                        }, n)
                    }));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(),
                Ty = Xn.default.div(Rv || (Rv = (0, Gn.A)(["\n  position: relative;\n"]))),
                Ny = Xn.default.button(Mv || (Mv = (0, Gn.A)(["\n  display: flex;\n  visibility: ", ';\n  width: 32px;\n  height: 32px;\n  padding: 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n  border: none;\n  border-radius: 4px;\n  position: relative;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 8px;\n    background-image: url("/media/jusfinder/icon-button.svg");\n    left: 8px;\n    background-size: cover;\n    width: 16px;\n    height: 16px;\n    background-color: transparent;\n  }\n'])), function(n) {
                    return "pending" === n.status ? "hidden" : "visible"
                }),
                Dy = Xn.default.div(Ov || (Ov = (0, Gn.A)(["\n  display: ", ";\n  flex-direction: column;\n  align-items: flex-start;\n  position: absolute;\n  background-color: #fff;\n  width: 144px;\n  top: 30px;\n  left: -110px;\n  border-radius: 4px;\n  padding: 8px 0 8px 0;\n  z-index: 99;\n  box-shadow: 0px 3px 14px 2px rgba(0, 0, 0, 0.12),\n    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 5px 5px -3px rgba(0, 0, 0, 0.2);\n\n  div {\n    padding: 6px 16px;\n    width: 100%;\n\n    span {\n      margin-right: 0px !important;\n      color: #383839;\n      font-family: ", ";\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 150%;\n      letter-spacing: 0.15px;\n    }\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.04);\n      cursor: pointer;\n    }\n  }\n"])), function(n) {
                    return n.open ? "flex" : "none"
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                zy = Xn.default.div(Tv || (Tv = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: not-allowed;\n"]))),
                qy = function(n) {
                    var e = n.onClick,
                        t = n.menuOpen,
                        i = void 0 !== t && t,
                        a = n.itemsMenu,
                        o = void 0 === a ? [] : a,
                        r = n.status,
                        l = n.reprocessLoading;
                    return (0, Kn.jsxs)(Ty, {
                        children: [(0, Kn.jsx)(Ny, {
                            status: r,
                            onClick: e,
                            type: "button",
                            "aria-haspopup": "menu",
                            "aria-expanded": i,
                            "aria-label": "Abrir menu de a\xe7\xf5es"
                        }), (0, Kn.jsx)(Dy, {
                            open: i,
                            status: r,
                            children: o && (null === o || void 0 === o ? void 0 : o.map(function(n, e) {
                                return (0, Kn.jsx)("div", {
                                    onClick: l && "Refazer consulta" === n.text ? null : n.action,
                                    children: l && "Refazer consulta" === n.text ? (0, Kn.jsx)(zy, {
                                        children: (0, Kn.jsx)(Dn.A, {
                                            src: (0, zn.oK)("/media/jusfinder/loading-process-jusfinder.svg"),
                                            width: "16px",
                                            height: "16px",
                                            "aria-label": "Carregando"
                                        })
                                    }) : (0, Kn.jsx)("span", {
                                        children: n.text
                                    })
                                }, "".concat(n.text, "-").concat(e))
                            }))
                        })]
                    })
                },
                Ly = t(18357),
                Iy = Xn.default.div(Nv || (Nv = (0, Gn.A)(["\n  width: ", ";\n  display: flex;\n\n  align-items: center;\n"])), function(n) {
                    return n.width || "fit-content"
                }),
                Fy = Xn.default.div(Dv || (Dv = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: ", ";\n  border-radius: 3px;\n  padding: 8px 12px;\n  gap: 8px;\n  width: ", ";\n"])), function(n) {
                    var e = n.background;
                    return e || Ly.LS
                }, function(n) {
                    return n.width || "fit-content"
                }),
                Uy = Xn.default.span(zv || (zv = (0, Gn.A)(["\n  color: #131313;\n  font-family: ", ";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n  margin: 0 !important;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Qy = (0, Xn.default)(Dn.A)(qv || (qv = (0, Gn.A)([""]))),
                Vy = function(n) {
                    var e = n.text,
                        t = (n.isMobile, n.icon),
                        i = void 0 === t ? "" : t,
                        a = n.background,
                        o = void 0 === a ? "" : a,
                        r = n.width,
                        l = void 0 === r ? "" : r;
                    return (0, Kn.jsx)(Iy, {
                        width: l,
                        children: (0, Kn.jsxs)(Fy, {
                            background: o,
                            width: l,
                            children: [(0, Kn.jsx)(Qy, {
                                src: i
                            }), (0, Kn.jsx)(Uy, {
                                children: e
                            })]
                        })
                    })
                },
                By = new Map([
                    ["household_activity", "Grupo econ\xf4mico - Atividade semelhante no endere\xe7o"],
                    ["household", "Grupo econ\xf4mico - Qualquer atividade no endere\xe7o"],
                    ["rfcontact", "Grupo econ\xf4mico - Mesmo contato na Receita Federal"],
                    ["owners", "Grupo econ\xf4mico - Mesmo quadro societ\xe1rio"],
                    ["legal_representative", "Grupo econ\xf4mico - Mesmo representante legal"]
                ]),
                $y = [{
                    title: "Documento",
                    icon: (0, zn.oK)("/media/jusfinder/document-jusfinder.svg")
                }, {
                    title: "Cliente",
                    icon: (0, zn.oK)("/media/jusfinder/icon_type.svg")
                }, {
                    title: "Data",
                    icon: (0, zn.oK)("/media/jusfinder/calendar-jusfinder.svg")
                }, {
                    title: "Status",
                    icon: (0, zn.oK)("/media/jusfinder/tag-status.svg")
                }, {
                    title: "A\xe7\xf5es",
                    icon: (0, zn.oK)("/media/jusfinder/icon-action.svg")
                }],
                Jy = {
                    success: (0, Kn.jsx)(Vy, {
                        text: "Realizada",
                        icon: (0, zn.oK)("/media/jusfinder/notification-active.svg"),
                        background: Ly.sp,
                        width: "104px"
                    }),
                    pending: (0, Kn.jsx)(Vy, {
                        text: "Processando...",
                        background: Ly.bs,
                        icon: (0, zn.oK)("/media/jusfinder/loading-process-jusfinder.svg")
                    }),
                    error: (0, Kn.jsxs)(bd.bQ, {
                        children: [(0, Kn.jsx)(Vy, {
                            text: "Erro",
                            background: Ly.n8,
                            width: "fit-content",
                            icon: (0, zn.oK)("/media/jusfinder/notification-error.svg")
                        }), (0, Kn.jsx)(bd.FS, {
                            title: "Consultas com erro s\xe3o exclu\xeddas automaticamente ap\xf3s 7 dias.",
                            placement: "top",
                            arrow: !0,
                            children: (0, Kn.jsx)(bd.K0, {
                                children: "i"
                            })
                        })]
                    }),
                    error_global: (0, Kn.jsx)(Vy, {
                        text: "Erro na consulta",
                        background: Ly.n8,
                        width: "fit-content",
                        icon: (0, zn.oK)("/media/jusfinder/notification-error.svg")
                    })
                },
                Ky = {
                    relationship_tree: function(n) {
                        return "/relation_query/".concat(n.document_type, "/").concat(n.id)
                    },
                    professional_data: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    lawsuit: function(n) {
                        return "/processual_query/".concat(n.document_type, "/").concat(n.id)
                    },
                    personal_data: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    list_vehicles: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    credit_restriction: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    company_information: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    company_partnership: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    vehicle_data: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    trademarks: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    cpf_registration_status: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    economic_group: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    },
                    vehicle_tracking: function(n) {
                        return "/resultado/".concat(n.feature_type_name, "/").concat(n.id)
                    }
                },
                Wy = function(n) {
                    var e = Ky[n.feature_type_name];
                    return e ? e(n) : null
                },
                Hy = function(n, e) {
                    return "Grupo Econ\xf4mico de CNPJ" === n ? By.get(e) : n
                },
                Yy = function(n) {
                    var e, t = (null === n || void 0 === n ? void 0 : n.status) === ft.NG.PEnDING,
                        i = null !== (e = null === n || void 0 === n ? void 0 : n.date) && void 0 !== e ? e : "";
                    return t ? i.split(" ")[0] : i
                },
                Gy = Xn.default.div(Lv || (Lv = (0, Gn.A)(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  padding: ", ";\n  gap: ", ";\n  border-radius: 7px;\n  border: 1px solid #ebedf3;\n  background: #ffffff;\n"])), function(n) {
                    var e = n.sWidth;
                    return e || "100%"
                }, function(n) {
                    var e = n.sHeight;
                    return null !== e && void 0 !== e ? e : "fit-content"
                }, function(n) {
                    var e = n.sPadding;
                    return null !== e && void 0 !== e ? e : "24px"
                }, function(n) {
                    var e = n.gap;
                    return null !== e && void 0 !== e ? e : "16px"
                }),
                Xy = function(n) {
                    var e = n.children,
                        t = n.sWidth,
                        i = n.sHeight,
                        a = n.gap,
                        o = n.sPadding;
                    return (0, Kn.jsx)(Gy, {
                        sWidth: t,
                        sHeight: i,
                        gap: a,
                        sPadding: o,
                        children: e
                    })
                },
                Zy = Xn.default.div(Iv || (Iv = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  justify-content: center;\n  margin-top: 16px;\n  position: relative;\n\n  @media (max-width: 578px) {\n    margin-bottom: 16px;\n  }\n"]))),
                nb = (Xn.default.span(Fv || (Fv = (0, Gn.A)(["\n  color: #111219;\n  font-size: 14px;\n  font-family: ", ";\n  font-weight: 400;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(Uv || (Uv = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n"])))),
                eb = (0, Xn.default)(nb)(Qv || (Qv = (0, Gn.A)(["\n  margin-top: 0;\n  gap: 16px;\n"]))),
                tb = Xn.default.h1(Vv || (Vv = (0, Gn.A)(["\n  color: ", ";\n  font-size: 20px;\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.colors.black.primary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                ib = (0, Xn.default)(tb)(Bv || (Bv = (0, Gn.A)(["\n  color: #5e5e60;\n  text-align: center;\n  font-family: 'Noto Sans';\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n"]))),
                ab = Xn.default.span($v || ($v = (0, Gn.A)(["\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                ob = (0, Xn.default)(ab)(Jv || (Jv = (0, Gn.A)(["\n  color: #5e5e60;\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n"]))),
                rb = Xn.default.span(Kv || (Kv = (0, Gn.A)(["\n  color: ", ";\n  font-weight: bold;\n  cursor: pointer;\n  font-family: ", ";\n"])), function(n) {
                    return n.theme.colors.green.primary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                lb = (0, Xn.default)(Dn.A)(Wv || (Wv = (0, Gn.A)(["\n  width: ", "px;\n  height: ", "px;\n  cursor: pointer;\n"])), function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                }),
                sb = (Xn.default.div(Hv || (Hv = (0, Gn.A)(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  font-family: ", ";\n\n  span {\n    font-weight: 400;\n    position: relative;\n    top: -1px;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }), Xn.default.div(Yv || (Yv = (0, Gn.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n"])))),
                cb = (0, Xn.default)(Dn.A)(Gv || (Gv = (0, Gn.A)([""]))),
                db = Xn.default.div(Xv || (Xv = (0, Gn.A)(["\n  display: flex;\n  height: 32px;\n  padding: 10px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 5px;\n  background: #f4f5f9;\n  cursor: pointer;\n  color: #5e5e60;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 140%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                ub = Xn.default.div(Zv || (Zv = (0, Gn.A)(["\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  gap: 24px;\n  flex-direction: column;\n  border-radius: 3px;\n  border: 1px solid #e7e8ec;\n  background: #fff;\n  cursor: pointer;\n\n  &:hover {\n    border-radius: 3px;\n    border: 1px solid #ceced2;\n    background: #f4f5f9;\n\n    > div .text-item-info.first {\n      text-decoration: underline;\n    }\n  }\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    width: 100%;\n  }\n"]))),
                pb = Xn.default.div(ny || (ny = (0, Gn.A)(["\n  display: grid;\n  width: 100%;\n  gap: 24px;\n  align-items: center;\n\n  grid-column: 5;\n\n  position: relative;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    gap: 8px;\n  }\n"]))),
                fb = Xn.default.span(ey || (ey = (0, Gn.A)(["\n  color: #131313;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 140%;\n  gap: 4px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n\n  span {\n    color: #5e5e60;\n    font-family: 'Noto Sans';\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                mb = Xn.default.div(ty || (ty = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-grow: 1;\n"]))),
                hb = Xn.default.div(iy || (iy = (0, Gn.A)(["\n  display: grid;\n  align-items: center;\n  gap: 24px;\n  justify-content: flex-end;\n  position: relative;\n  grid-template-columns: 1fr 1fr 1fr 1fr auto;\n\n  & > :nth-child(2) {\n    margin-right: 10px !important;\n  }\n\n  @media (max-width: 578px) {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n"]))),
                xb = Xn.default.span(ay || (ay = (0, Gn.A)(["\n  color: #383839;\n  font-family: ", ";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  display: ", ";\n  width: ", ";\n  gap: ", ";\n\n  @media (min-width: 1600px) {\n    width: ", ";\n  }\n\n  @media (max-width: 578px) {\n    position: ", ";\n    top: ", ";\n    right: ", ";\n    width: ", ";\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return 2 === n.index ? "flex" : ""
                }, function(n) {
                    return 1 === n.index ? "80px" : ""
                }, function(n) {
                    return 2 === n.index ? "4px" : ""
                }, function(n) {
                    return 1 === n.index ? "100%" : ""
                }, function(n) {
                    return 3 === n.index ? "absolute" : ""
                }, function(n) {
                    return 3 === n.index ? "0px" : ""
                }, function(n) {
                    return 3 === n.index ? "-170px" : ""
                }, function(n) {
                    return 1 === n.index ? "100%" : "208px"
                }),
                gb = Xn.default.div(oy || (oy = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n"]))),
                vb = Xn.default.div(ry || (ry = (0, Gn.A)(["\n  width: fit-content;\n\n  @media (max-width: 578px) {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  }\n"]))),
                yb = Xn.default.div(ly || (ly = (0, Gn.A)(["\n  display: flex;\n  width: 32px;\n  height: 32px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  border-radius: 5px;\n  background: #f4f5f9;\n"]))),
                bb = Xn.default.div(sy || (sy = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n"]))),
                Ab = Xn.default.h5(cy || (cy = (0, Gn.A)(["\n  font: normal 600 20px ", ";\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  line-height: 20px;\n  text-align: left;\n  color: ", ";\n  margin: 0;\n\n  @media (max-width: 578px) {\n    align-items: flex-start;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.colors.black.primary
                }),
                _b = Xn.default.span(dy || (dy = (0, Gn.A)(["\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #808080;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                jb = Xn.default.h6(uy || (uy = (0, Gn.A)(["\n  margin: 0;\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #3f4254;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Cb = function(n) {
                    var e = n.title,
                        t = void 0 === e ? "Adicione o seu ti\u0301tulo" : e,
                        i = n.optionalText,
                        a = void 0 === i ? "" : i,
                        o = n.hasOptional,
                        r = void 0 !== o && o,
                        l = n.subTitle,
                        s = void 0 === l ? "" : l;
                    return (0, Kn.jsxs)(bb, {
                        children: [(0, Kn.jsxs)(Ab, {
                            hasOptional: r,
                            children: [t, " ", a && (0, Kn.jsx)(_b, {
                                children: a
                            })]
                        }), (0, Kn.jsx)(jb, {
                            children: s
                        })]
                    })
                },
                wb = (Xn.default.div(py || (py = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))), Xn.default.div(fy || (fy = (0, Gn.A)(["\n  display: grid;\n  align-items: center;\n  gap: 24px;\n  position: relative;\n  grid-template-columns: 1fr 1fr 1fr 1fr auto;\n\n  > :first-child {\n    margin-left: 16px !important;\n  }\n\n  > :nth-child(2) {\n    margin-left: 18px !important;\n  }\n\n  > :nth-child(3) {\n    margin-left: 18px !important;\n  }\n\n  > :nth-child(4) {\n    margin-left: 20px !important;\n  }\n  > :last-child {\n    margin-right: 16px !important;\n  }\n"])))),
                kb = Xn.default.div(my || (my = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  @media (max-width: 578px) {\n    display: none;\n  }\n"]))),
                Sb = Xn.default.span(hy || (hy = (0, Gn.A)(["\n  color: #838486;\n  font-family: ", ";\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                Pb = function(n) {
                    var e = n.items_header;
                    n.larges;
                    return (0, Kn.jsx)(wb, {
                        children: null === e || void 0 === e ? void 0 : e.map(function(n) {
                            return (0, Kn.jsxs)(kb, {
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: n.icon,
                                    alt: "Icone"
                                }), (0, Kn.jsx)(Sb, {
                                    children: n.title
                                })]
                            }, n.title)
                        })
                    })
                },
                Eb = function() {
                    return (0, Kn.jsx)(Kn.Fragment, {
                        children: Array.from(Array(10).keys()).map(function(n, e) {
                            return (0, Kn.jsx)(Eo.A, {
                                variant: "rounded",
                                width: "100%",
                                height: 72,
                                animation: "pulse"
                            }, e)
                        })
                    })
                },
                Rb = (0, Nn.createContext)(),
                Mb = function() {
                    var n = (0, Nn.useContext)(Rb);
                    if (!n) throw new Error("useFilters deve ser usado dentro de FiltersProvider");
                    return n
                },
                Ob = function(n) {
                    var e = n.children,
                        t = (0, Nn.useState)([]),
                        i = (0, Ln.A)(t, 2),
                        a = i[0],
                        o = i[1],
                        r = (0, Nn.useState)([]),
                        l = (0, Ln.A)(r, 2),
                        s = l[0],
                        c = l[1],
                        d = (0, Nn.useState)(""),
                        u = (0, Ln.A)(d, 2),
                        p = u[0],
                        f = u[1],
                        m = (0, Nn.useState)(""),
                        h = (0, Ln.A)(m, 2),
                        x = h[0],
                        g = h[1],
                        v = (0, Nn.useState)(""),
                        y = (0, Ln.A)(v, 2),
                        b = y[0],
                        A = y[1],
                        _ = (0, Nn.useState)(""),
                        j = (0, Ln.A)(_, 2),
                        C = j[0],
                        w = j[1],
                        k = (0, Nn.useState)(!1),
                        S = (0, Ln.A)(k, 2),
                        P = S[0],
                        E = S[1],
                        R = (0, Nn.useState)(null),
                        M = (0, Ln.A)(R, 2),
                        O = M[0],
                        T = M[1],
                        N = (0, Nn.useState)(null),
                        D = (0, Ln.A)(N, 2),
                        z = D[0],
                        q = D[1],
                        L = (0, Nn.useState)([]),
                        I = (0, Ln.A)(L, 2),
                        F = I[0],
                        U = I[1],
                        Q = (0, On.d4)(function(n) {
                            return n.app.customers
                        }),
                        V = (0, On.wA)(),
                        B = function(n) {
                            var e = n.split("-"),
                                t = (0, Ln.A)(e, 3),
                                i = t[0],
                                a = t[1],
                                o = t[2];
                            return new Date(Number(i), Number(a) - 1, Number(o))
                        },
                        $ = function() {
                            if (P) {
                                var n = a.map(function(n) {
                                        return n.label || n
                                    }).join("; "),
                                    e = s.map(function(n) {
                                        return n.name || n
                                    }).join("; "),
                                    t = F.map(function(n) {
                                        return n.name || n
                                    }).join("; "),
                                    i = "";
                                p && x ? i = "".concat((0, pu.A)(B(p), "dd/MM/yyyy"), " a ").concat((0, pu.A)(B(x), "dd/MM/yyyy")) : p ? i = "In\xedcio ".concat((0, pu.A)(B(p), "dd/MM/yyyy")) : x && (i = "Fim ".concat((0, pu.A)(B(x), "dd/MM/yyyy"))), T({
                                    statuses: n,
                                    features: e,
                                    date: i,
                                    client: t
                                })
                            }
                        };
                    (0, Nn.useEffect)(function() {
                        $(),
                            function() {
                                var n = {};
                                if (null !== a && void 0 !== a && a.length && (n.status = a.map(function(n) {
                                        return n.status
                                    }).join(",")), null !== s && void 0 !== s && s.length && (n.types = s.map(function(n) {
                                        return n.feature
                                    }).join(",")), p && (n.start_date = p), x && (n.end_date = x), F.length) {
                                    var e = F.map(function(n) {
                                        return n.id
                                    }).join(",");
                                    n.client_customer_id = e
                                }
                                if (null !== C && void 0 !== C && C.trim()) {
                                    var t = C.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "");
                                    t && (n.search = t)
                                }
                                q(n)
                            }(), E(!1)
                    }, [P, C]), (0, Nn.useEffect)(function() {
                        V({
                            type: "LOAD_CUSTOMERS"
                        })
                    }, []);
                    return (0, Kn.jsx)(Rb.Provider, {
                        value: {
                            statuses: a,
                            setStatuses: o,
                            features: s,
                            setFeatures: c,
                            startDate: p,
                            setStartDate: f,
                            endDate: x,
                            setEndDate: g,
                            search: b,
                            setSearch: A,
                            debouncedSearch: C,
                            setDebouncedSearch: w,
                            applyFilters: P,
                            setApplyFilters: E,
                            filtersApplied: O,
                            params: z,
                            handleClearFilters: function() {
                                c([]), f(""), g(""), o([]), $(), T({
                                    statuses: "",
                                    features: "",
                                    date: ""
                                }), q({}), U([])
                            },
                            client: F,
                            customers: Q,
                            setClient: U
                        },
                        children: e
                    })
                },
                Tb = function(n) {
                    var e = n.subTitle,
                        t = void 0 === e ? "Ajuste os filtros aplicados e tente novamente." : e;
                    return (0, Kn.jsx)(Xy, {
                        sPadding: "64px 24px",
                        children: (0, Kn.jsxs)(eb, {
                            children: [(0, Kn.jsx)(lb, {
                                src: (0, zn.oK)("/media/jusfinder/icon-filters-empty.svg"),
                                width: "266"
                            }), (0, Kn.jsxs)("div", {
                                children: [(0, Kn.jsx)(ib, {
                                    children: "Nenhuma consulta encontrada"
                                }), (0, Kn.jsxs)(ob, {
                                    children: [" ", t]
                                })]
                            })]
                        })
                    })
                },
                Nb = function(n) {
                    var e, t = n.data,
                        i = n.loading,
                        a = n.featureTypesUrl,
                        o = n.itemCard,
                        r = n.changePage,
                        l = n.currPage,
                        s = n.reloadPage,
                        c = n.hasQueryPending,
                        d = n.setQueryParams,
                        u = n.hasParams,
                        p = n.expandedIndex,
                        f = n.toggleExpand,
                        m = n.setOpenIndexMenu,
                        h = Mb().params,
                        x = (0, it.A)(function() {
                            return m(null)
                        });
                    return (0, Nn.useEffect)(function() {
                        d(h)
                    }, [h]), u && 0 === (null === t || void 0 === t || null === (e = t.data) || void 0 === e ? void 0 : e.length) ? (0, Kn.jsx)(Tb, {}) : (0, Kn.jsx)(Kn.Fragment, {
                        children: (0, Kn.jsxs)(Xy, {
                            gap: "24px",
                            children: [(0, Kn.jsxs)(sb, {
                                children: [(0, Kn.jsx)(Cb, {
                                    title: "Consultas",
                                    optionalText: i ? (0, Kn.jsx)(Mt(), {
                                        type: "bubbles",
                                        color: "#34BC97",
                                        size: "medium",
                                        width: "40px",
                                        height: "38px"
                                    }) : (null === t || void 0 === t ? void 0 : t.total_items) + " consultas"
                                }), c && (0, Kn.jsx)(vb, {
                                    children: (0, Kn.jsxs)(db, {
                                        onClick: s,
                                        children: [(0, Kn.jsx)(cb, {
                                            src: (0, zn.oK)("/media/jusfinder/icon-updated.svg")
                                        }), "Atualizar status"]
                                    })
                                })]
                            }), (0, Kn.jsxs)(gb, {
                                children: [(0, Kn.jsx)(Pb, {
                                    items_header: $y
                                }), i && (0, Kn.jsx)(Eb, {}), !i && (null === o || void 0 === o ? void 0 : o.map(function(n, e) {
                                    var t, i, o;
                                    return "group" === n.type ? (0, Kn.jsxs)("div", {
                                        children: [(0, Kn.jsx)(ub, {
                                            onClick: function() {
                                                return f(e)
                                            },
                                            children: (0, Kn.jsx)(pb, {
                                                children: (0, Kn.jsxs)(hb, {
                                                    children: [(0, Kn.jsx)(mb, {
                                                        className: "",
                                                        children: (0, Kn.jsxs)(fb, {
                                                            children: [null === (t = Py.c2.get(null === (i = n.items[0]) || void 0 === i ? void 0 : i.document_type)) || void 0 === t ? void 0 : t.maskedDocument(n.document), (0, Kn.jsx)("span", {
                                                                children: "M\xfaltiplas consultas"
                                                            })]
                                                        })
                                                    }), (0, Kn.jsx)(xb, {
                                                        index: mt.uH,
                                                        children: n.client
                                                    }), (0, Kn.jsx)(xb, {
                                                        index: mt.qX,
                                                        children: n.date
                                                    }), (0, Kn.jsxs)(xb, {
                                                        index: mt.zQ,
                                                        children: [n.successCount > 0 && (0, Kn.jsx)(Vy, {
                                                            background: "#e6f7f2",
                                                            icon: (0, zn.oK)("/media/jusfinder/check-success.svg"),
                                                            text: n.successCount
                                                        }), n.pendingCount > 0 && (0, Kn.jsx)(Vy, {
                                                            background: "#fff9e6",
                                                            icon: (0, zn.oK)("/media/jusfinder/circle-clock.svg"),
                                                            text: n.pendingCount
                                                        }), n.errorCount > 0 && (0, Kn.jsx)(Vy, {
                                                            background: "#fbeaec",
                                                            icon: (0, zn.oK)("/media/jusfinder/error-count.svg"),
                                                            text: n.errorCount
                                                        })]
                                                    }), (0, Kn.jsx)(xb, {
                                                        index: mt.cu,
                                                        children: (0, Kn.jsx)(yb, {
                                                            onClick: function() {
                                                                return f(e)
                                                            },
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: p === e ? (0, Kn.jsx)(gu.Ucs, {}) : (0, Kn.jsx)(gu.Vr3, {})
                                                        })
                                                    })]
                                                })
                                            })
                                        }, "item-".concat(n.id)), p === e && n.items.map(function(n) {
                                            return (0, Kn.jsx)(ub, {
                                                onClick: function(e) {
                                                    return a(n, "card")
                                                },
                                                children: (0, Kn.jsx)(pb, {
                                                    ref: x,
                                                    children: (0, Kn.jsxs)(hb, {
                                                        children: [(0, Kn.jsx)(mb, {
                                                            className: "",
                                                            children: (0, Kn.jsx)(xb, {
                                                                children: "economic_group" === n.feature_type_name ? mt.TC.get(n.query_subtype) : n.typeQuery
                                                            })
                                                        }), (0, Kn.jsx)(xb, {
                                                            index: mt.uH,
                                                            children: n.client
                                                        }), (0, Kn.jsx)(xb, {
                                                            index: mt.qX,
                                                            children: n.date
                                                        }), (0, Kn.jsx)(xb, {
                                                            index: mt.zQ,
                                                            children: n.statusComponent
                                                        }), (0, Kn.jsx)(xb, {
                                                            index: mt.cu,
                                                            children: n.actions
                                                        })]
                                                    })
                                                })
                                            }, "item-".concat(n.id))
                                        })]
                                    }, "group-".concat(e)) : (0, Kn.jsx)(ub, {
                                        onClick: function(e) {
                                            return a(n, "card")
                                        },
                                        children: (0, Kn.jsx)(pb, {
                                            ref: x,
                                            children: (0, Kn.jsxs)(hb, {
                                                children: [(0, Kn.jsx)(mb, {
                                                    className: "text-item-info first",
                                                    children: (0, Kn.jsxs)(fb, {
                                                        children: [null === (o = Py.c2.get(n.document_type)) || void 0 === o ? void 0 : o.maskedDocument(n.document), (0, Kn.jsx)("span", {
                                                            children: n.typeQuery
                                                        })]
                                                    })
                                                }), (0, Kn.jsx)(xb, {
                                                    index: mt.uH,
                                                    children: n.client
                                                }), (0, Kn.jsx)(xb, {
                                                    index: mt.qX,
                                                    children: n.date
                                                }), (0, Kn.jsx)(xb, {
                                                    index: mt.zQ,
                                                    children: n.statusComponent
                                                }), (0, Kn.jsx)(xb, {
                                                    index: mt.cu,
                                                    children: n.actions
                                                })]
                                            })
                                        })
                                    }, "single-".concat(n.id))
                                }))]
                            }), (0, Kn.jsx)(du.d, {
                                changePage: r,
                                currPage: l,
                                totalPages: null === t || void 0 === t ? void 0 : t.total_pages
                            })]
                        })
                    })
                },
                Db = function(n) {
                    var e = n.setQueryParams,
                        t = n.setPage,
                        i = Mb().params;
                    return (0, Nn.useEffect)(function() {
                        e(i)
                    }, [i]), (0, Kn.jsxs)(nb, {
                        children: [(0, Kn.jsx)(lb, {
                            src: (0, zn.oK)("/media/jusfinder/empty.svg"),
                            width: "266",
                            height: "342"
                        }), (0, Kn.jsx)(tb, {
                            children: "Voc\xea ainda n\xe3o tem nenhuma consulta realizada"
                        }), (0, Kn.jsxs)("div", {
                            children: [(0, Kn.jsxs)(ab, {
                                children: ["Para realizar sua primeira consulta, clique em", " "]
                            }), (0, Kn.jsx)(rb, {
                                onClick: function() {
                                    return t("query")
                                },
                                children: "Nova Consulta"
                            }), (0, Kn.jsx)(ab, {
                                children: " e n\xf3s te ajudaremos com o resto.."
                            })]
                        })]
                    })
                },
                zb = Xn.default.div(xy || (xy = (0, Gn.A)(["\n  display: flex;\n  height: 40px;\n  padding: 10px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  border: 1px solid #ceced2;\n  cursor: pointer;\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  width: 100%;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                qb = Xn.default.div(gy || (gy = (0, Gn.A)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 16px 0;\n  display: flex;\n  justify-content: space-evenly;\n"]))),
                Lb = Xn.default.div(vy || (vy = (0, Gn.A)(["\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 14px;\n  padding: 10px 16px;\n  border-radius: 4px;\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  transition: background-color 0.2s;\n"]))),
                Ib = (0, Xn.default)(Lb)(yy || (yy = (0, Gn.A)(["\n  border: 1px solid #ceced2;\n  background-color: transparent;\n\n  &:hover {\n    background-color: #f5f5f5;\n  }\n"]))),
                Fb = (0, Xn.default)(Lb)(by || (by = (0, Gn.A)(["\n  background-color: #01ab7d;\n  color: #fff;\n  opacity: ", ";\n  pointer-events: ", ";\n"])), function(n) {
                    return n.disabled ? .5 : 1
                }, function(n) {
                    return n.disabled ? "none" : "auto"
                }),
                Ub = (0, Xn.default)(jl.A)(Ay || (Ay = (0, Gn.A)(["\n  .MuiOutlinedInput-root.Mui-focused fieldset {\n    border-color: #01ab7d;\n  }\n"]))),
                Qb = (0, Xn.default)(Ne.A)(_y || (_y = (0, Gn.A)(["\n  .MuiSvgIcon-root {\n    color: #838486 !important;\n  }\n\n  &.Mui-checked .MuiSvgIcon-root {\n    color: #01ab7d !important;\n  }\n"]))),
                Vb = [{
                    name: "Situa\xe7\xe3o cadastral",
                    feature: "cpf_registration_status"
                }, {
                    name: "Restri\xe7\xe3o de cr\xe9dito",
                    feature: "credit_restriction"
                }, {
                    name: "Grupo econ\xf4mico",
                    feature: "economic_group"
                }, {
                    name: "Dados profissionais",
                    feature: "professional_data"
                }, {
                    name: "Marcas e Patentes",
                    feature: "trademarks"
                }, {
                    name: "Processos",
                    feature: "lawsuit"
                }, {
                    name: "Localiza\xe7\xe3o de pessoa",
                    feature: "personal_data"
                }, {
                    name: "Relacionamentos",
                    feature: "relationship_tree"
                }, {
                    name: "Propriedade veicular",
                    feature: "list_vehicles"
                }, {
                    name: "Dados do ve\xedculo",
                    feature: "vehicle_data"
                }, {
                    name: "Participa\xe7\xf5es societ\xe1rias",
                    feature: "company_partnership"
                }, {
                    name: "Dados da empresa",
                    feature: "company_information"
                }, {
                    name: "Rastreamento de ve\xedculos",
                    feature: "vehicle_tracking"
                }],
                Bb = [{
                    label: "Processando",
                    status: 4
                }, {
                    label: "Realizada",
                    status: 2
                }],
                $b = (0, Xn.default)(Ml.A)(jy || (jy = (0, Gn.A)(["\n  width: 100%;\n\n  .MuiInputLabel-root.Mui-focused {\n    color: ", ";\n  }\n"])), function(n) {
                    return n.theme.colors.brand.primary.main
                }),
                Jb = (0, Xn.default)(Ol.A)(Cy || (Cy = (0, Gn.A)(["\n  background-color: ", " !important;\n  color: ", " !important;\n  font-weight: 500;\n  width: fit-content;\n\n  & .MuiChip-deleteIcon {\n    font-size: ", " !important;\n    color: ", " !important;\n  }\n"])), function(n) {
                    return n.theme.colors.gray[200]
                }, function(n) {
                    return n.theme.colors.gray[700]
                }, function(n) {
                    return n.theme.fontSizes.sm[700]
                }, function(n) {
                    return n.theme.colors.gray[700]
                });

            function Kb(n) {
                var e = n.features,
                    t = n.setFeatures;
                return (0, Kn.jsxs)($b, {
                    fullWidth: !0,
                    children: [(0, Kn.jsx)(Pl.A, {
                        id: "status-label",
                        children: "Tipo"
                    }), (0, Kn.jsx)(El.A, {
                        labelId: "status-label",
                        multiple: !0,
                        value: e,
                        onChange: function(n) {
                            t(n.target.value)
                        },
                        renderValue: function(n) {
                            return (0, Kn.jsx)(Ro.A, {
                                sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: .5
                                },
                                children: n.map(function(n) {
                                    return (0, Kn.jsx)(Jb, {
                                        label: n.name,
                                        onDelete: function(e) {
                                            var i;
                                            e.stopPropagation(), i = n, t(function(n) {
                                                return n.filter(function(n) {
                                                    return n.feature !== i.feature
                                                })
                                            })
                                        },
                                        onMouseDown: function(n) {
                                            return n.stopPropagation()
                                        },
                                        deleteIcon: (0, Kn.jsx)("span", {
                                            children: "\xd7"
                                        })
                                    }, "chip-".concat(n.feature))
                                })
                            })
                        },
                        sx: {
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#01ab7d"
                            },
                            "& + .MuiInputLabel-root.Mui-focused": {
                                color: "#01ab7d"
                            }
                        },
                        children: Vb.map(function(n) {
                            return (0, Kn.jsx)(Rl.A, {
                                value: n,
                                selected: null === e || void 0 === e ? void 0 : e.some(function(e) {
                                    return e.feature === n.feature
                                }),
                                children: n.name
                            }, "select-item-".concat(n.feature))
                        })
                    })]
                })
            }

            function Wb() {
                var n = Mb(),
                    e = n.features,
                    t = n.setFeatures,
                    i = n.startDate,
                    a = n.setStartDate,
                    o = n.endDate,
                    r = n.setEndDate,
                    l = n.statuses,
                    s = n.setStatuses,
                    c = n.setApplyFilters,
                    d = n.client,
                    u = n.customers,
                    p = n.setClient,
                    f = (0, be.lc)().HandleEvent,
                    m = (0, Nn.useState)(!1),
                    h = (0, Ln.A)(m, 2),
                    x = h[0],
                    g = h[1],
                    v = (0, Nn.useState)(!1),
                    y = (0, Ln.A)(v, 2),
                    b = y[0],
                    A = y[1],
                    _ = (0, Nn.useState)(e),
                    j = (0, Ln.A)(_, 2),
                    C = j[0],
                    w = j[1],
                    k = (0, Nn.useState)(i),
                    S = (0, Ln.A)(k, 2),
                    P = S[0],
                    E = S[1],
                    R = (0, Nn.useState)(o),
                    M = (0, Ln.A)(R, 2),
                    O = M[0],
                    T = M[1],
                    N = (0, Nn.useState)(l),
                    D = (0, Ln.A)(N, 2),
                    z = D[0],
                    q = D[1],
                    L = (0, Nn.useState)(d),
                    I = (0, Ln.A)(L, 2),
                    F = I[0],
                    U = I[1];
                (0, Nn.useEffect)(function() {
                    A(!(!P || !O) && new Date(P) > new Date(O))
                }, [P, O]);
                var Q = function(n) {
                        var e = n.target,
                            t = e.name,
                            i = e.checked,
                            a = Bb.find(function(n) {
                                return n.label === t
                            });
                        a && q(i ? function(n) {
                            return [].concat((0, tt.A)(n), [a])
                        } : function(n) {
                            return n.filter(function(n) {
                                return n.status !== a.status
                            })
                        })
                    },
                    V = function() {
                        return !P || !O || new Date(P) <= new Date(O)
                    },
                    B = function(n) {
                        return function() {
                            if (n) w(e), E(i), T(o), q(l), U(d);
                            else {
                                if (!V()) return void A(!0);
                                A(!1)
                            }
                            g(n)
                        }
                    },
                    $ = (0, Kn.jsxs)(Ro.A, {
                        sx: {
                            width: 380,
                            p: 3
                        },
                        role: "presentation",
                        children: [(0, Kn.jsx)(_l.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Filtros"
                        }), (0, Kn.jsx)(_l.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Tipo"
                        }), (0, Kn.jsx)(Kb, {
                            features: C,
                            setFeatures: w
                        }), (0, Kn.jsxs)(Ro.A, {
                            mt: 3,
                            children: [(0, Kn.jsx)(_l.A, {
                                variant: "h6",
                                gutterBottom: !0,
                                children: "Cliente"
                            }), (0, Kn.jsx)(qu, {
                                options: u,
                                client: F,
                                setOptions: U
                            })]
                        }), (0, Kn.jsxs)(Ro.A, {
                            mt: 3,
                            mb: 3,
                            children: [(0, Kn.jsx)(_l.A, {
                                variant: "h6",
                                gutterBottom: !0,
                                children: "Data da consulta"
                            }), (0, Kn.jsxs)(Ro.A, {
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mt: 1,
                                children: [(0, Kn.jsx)(Ub, {
                                    type: "date",
                                    value: P,
                                    onChange: function(n) {
                                        return E(n.target.value)
                                    },
                                    size: "small",
                                    fullWidth: !0,
                                    error: b,
                                    helperText: b ? "Data inicial deve ser menor ou igual \xe0 final" : ""
                                }), (0, Kn.jsx)(_l.A, {
                                    variant: "body1",
                                    sx: {
                                        fontSize: "1.1rem",
                                        mb: b ? 4 : 0
                                    },
                                    children: "a"
                                }), (0, Kn.jsx)(Ub, {
                                    type: "date",
                                    value: O,
                                    onChange: function(n) {
                                        return T(n.target.value)
                                    },
                                    size: "small",
                                    fullWidth: !0,
                                    error: b,
                                    helperText: b ? "Data final deve ser maior ou igual \xe0 inicial" : ""
                                })]
                            })]
                        }), (0, Kn.jsx)(_l.A, {
                            variant: "h6",
                            gutterBottom: !0,
                            children: "Status"
                        }), (0, Kn.jsx)(Ro.A, {
                            display: "flex",
                            flexDirection: "column",
                            children: Bb.map(function(n) {
                                return (0, Kn.jsx)(bu.A, {
                                    control: (0, Kn.jsx)(Qb, {
                                        name: n.label,
                                        checked: z.some(function(e) {
                                            return e.status === n.status
                                        }),
                                        onChange: Q
                                    }),
                                    label: n.label,
                                    sx: {
                                        "& .MuiFormControlLabel-label": {
                                            fontSize: "1.1rem"
                                        }
                                    }
                                }, n.label)
                            })
                        }), (0, Kn.jsx)(Ro.A, {
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 2,
                            children: (0, Kn.jsxs)(qb, {
                                children: [(0, Kn.jsx)(Ib, {
                                    onClick: function() {
                                        w([]), E(""), T(""), q([]), A(!1), U([])
                                    },
                                    children: "Limpar"
                                }), (0, Kn.jsx)(Fb, {
                                    onClick: function() {
                                        V() && (f("query_filter_drawer_apply", {
                                            features: null !== C && void 0 !== C ? C : [],
                                            startDate: null !== P && void 0 !== P ? P : "",
                                            endDate: null !== O && void 0 !== O ? O : "",
                                            statuses: null !== z && void 0 !== z ? z : []
                                        }), t(C), a(P), r(O), s(z), c(!0), g(!1), p(F))
                                    },
                                    disabled: !V(),
                                    children: "Aplicar"
                                })]
                            })
                        })]
                    });
                return (0, Kn.jsxs)("div", {
                    children: [(0, Kn.jsxs)(zb, {
                        onClick: B(!0),
                        children: [(0, Kn.jsx)(lb, {
                            src: (0, zn.oK)("/media/jusfinder/filter-2--funnel-filter-angle-oil.svg"),
                            width: "10",
                            height: "10"
                        }), "Filtros"]
                    }), (0, Kn.jsx)(Au.Ay, {
                        anchor: "right",
                        open: x,
                        onClose: B(!1),
                        children: $
                    })]
                })
            }
            var Hb, Yb, Gb = Xn.default.div(wy || (wy = (0, Gn.A)(['\n  display: flex;\n  align-items: center;\n  padding: 0px 0px 0px 16px;\n  width: 300px;\n  border-radius: 6px;\n  border: 1px solid #e7e8ec;\n  input {\n    width: 100%;\n    padding: 8px 16px;\n    border: none;\n    opacity: 0.8;\n    background: transparent;\n    outline: none;\n    font-weight: 400;\n    font-size: 14px;\n    font-style: initial;\n    font-family: "Noto Sans";\n    color: ', ";\n  }\n  svg {\n    min-width: 14px;\n  }\n"])), function(n) {
                return n.theme.colors.black.primary
            });

            function Xb(n) {
                var e = n.loading,
                    t = Mb(),
                    i = t.search,
                    a = t.setSearch,
                    o = t.setDebouncedSearch,
                    r = (0, be.lc)().HandleEvent;
                return (0, Nn.useEffect)(function() {
                    var n = setTimeout(function() {
                        r("query_filter__document_search", {
                            searchParam: i
                        }), o(i)
                    }, 1e3);
                    return function() {
                        return clearTimeout(n)
                    }
                }, [i, o]), (0, Kn.jsxs)(Gb, {
                    style: {
                        flex: "0 0 90%"
                    },
                    children: [(0, Kn.jsx)(Dn.A, {
                        src: (0, zn.oK)("/media/casesManagement/search.svg"),
                        minWidth: "14px",
                        minHeight: "14px"
                    }), (0, Kn.jsx)("input", {
                        placeholder: "Pesquise pelo documento",
                        value: i,
                        onChange: function(n) {
                            return a(n.target.value)
                        },
                        disabled: e
                    })]
                })
            }
            var Zb, nA, eA, tA, iA, aA, oA, rA, lA, sA, cA, dA, uA, pA, fA, mA = Xn.default.div(Hb || (Hb = (0, Gn.A)(["\n  flex-grow: 1;\n"]))),
                hA = Xn.default.div(Yb || (Yb = (0, Gn.A)(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))),
                xA = (0, Xn.default)(Ol.A)(Zb || (Zb = (0, Gn.A)(["\n  &.MuiChip-root {\n    background-color: ", ";\n    color: ", ";\n    font-weight: 400;\n    width: fit-content;\n  }\n\n  .MuiChip-label {\n    font-size: ", ";\n    font-family: ", ";\n  }\n"])), function(n) {
                    return n.theme.colors.gray[200]
                }, function(n) {
                    return n.theme.colors.gray[700]
                }, function(n) {
                    return n.theme.fontSizes.xs
                }, function(n) {
                    return n.theme.typography.quaternary
                }),
                gA = (0, Xn.default)(ns.A)(nA || (nA = (0, Gn.A)(["\n  && {\n    color: ", ";\n    font-weight: 600;\n    font-size: ", ";\n    font-family: ", ";\n    text-transform: none;\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n"])), function(n) {
                    return n.theme.colors.brand.primary.main
                }, function(n) {
                    return n.theme.fontSizes.xs
                }, function(n) {
                    return n.theme.typography.quaternary
                }, function(n) {
                    return n.theme.colors.brand.primary.quaternary
                }),
                vA = function(n) {
                    var e = n.filtersApplied,
                        t = n.onClear,
                        i = [];
                    return e ? (e.features && i.push((0, Kn.jsx)(xA, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Tipos:"
                            }), " ", e.features]
                        })
                    }, "chip-features")), e.date && i.push((0, Kn.jsx)(xA, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Data:"
                            }), " ", e.date]
                        })
                    }, "chip-date")), e.statuses && i.push((0, Kn.jsx)(xA, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Status:"
                            }), " ", e.statuses]
                        })
                    }, "chip-statuses")), e.client && i.push((0, Kn.jsx)(xA, {
                        label: (0, Kn.jsxs)(Kn.Fragment, {
                            children: [(0, Kn.jsx)("strong", {
                                children: "Cliente:"
                            }), " ", e.client]
                        })
                    }, "chip-client")), (0, Kn.jsxs)(Ro.A, {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: 2,
                        children: [i, i.length > 0 && (0, Kn.jsx)(gA, {
                            variant: "text",
                            onClick: t,
                            children: "Limpar"
                        })]
                    })) : (0, Kn.jsx)(Kn.Fragment, {})
                };

            function yA(n) {
                var e = n.loading,
                    t = Mb(),
                    i = t.filtersApplied,
                    a = t.handleClearFilters;
                return (0, Kn.jsxs)(Xy, {
                    children: [(0, Kn.jsx)(mA, {
                        children: (0, Kn.jsxs)(hA, {
                            children: [(0, Kn.jsx)(Xb, {
                                loading: e
                            }), (0, Kn.jsx)(Wb, {})]
                        })
                    }), (0, Kn.jsx)(vA, {
                        filtersApplied: i,
                        onClear: a
                    })]
                })
            }
            Xn.default.div(eA || (eA = (0, Gn.A)(["\n  background: #ffe0d1;\n  color: #e94f0e;\n  font-size: 10px;\n  font-weight: bold;\n  display: block;\n  padding: 2px 5px;\n  border-radius: 4px;\n\n  position: absolute;\n  right: 13px;\n  bottom: 20px;\n"]))), Xn.default.div(tA || (tA = (0, Gn.A)(["\n  position: absolute;\n  right: 30px;\n  top: 15px;\n  display: flex;\n  gap: 10px;\n  z-index: 9;\n"])));
            var bA, AA, _A, jA, CA, wA, kA, SA, PA, EA, RA, MA, OA, TA, NA, DA, zA, qA, LA, IA, FA, UA = (0, Xn.default)(Dn.A)(iA || (iA = (0, Gn.A)(["\n  cursor: pointer;\n"]))),
                QA = (Xn.default.button(aA || (aA = (0, Gn.A)(["\n\tposition: relative;\n\twidth: ", ";\n\theight: ", ";\n\tpadding: ", ";\n\tgap: 10px;\n\tborder-radius: 5px;\n\tborder:", ";\n\tbackground: transparent;\n\tmargin-top: ", ';\n\n\t&:hover::after {\n\t\tcontent: "";\n\t\tposition: absolute;\n\t\tbottom: ', ';\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tborder: solid transparent;\n\t\tborder-top-color: #535353;\n\t\tborder-width: 8px;\n\t\tmargin-left: 0px;\n\t}\n\n\t&:hover::before {\n\t\tcontent: "', '";\n\t\twidth: max-content;\n\t\tposition: absolute;\n\t\tbottom: calc(100% + 10px);\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tbackground-color: #535353;\n\t\tcolor: #ffffff;\n\t\tpadding: 5px;\n\t\tborder-radius: 5px;\n\t\topacity: 1;\n\t\tpadding: 8px 16px 8px 16px;\n\t}\n'])), function(n) {
                    var e = n.width;
                    return null !== e && void 0 !== e ? e : "42px"
                }, function(n) {
                    var e = n.height;
                    return null !== e && void 0 !== e ? e : "40px"
                }, function(n) {
                    var e = n.padding;
                    return null !== e && void 0 !== e ? e : "0px 12px"
                }, function(n) {
                    var e = n.border;
                    return null !== e && void 0 !== e ? e : "1px solid #ff3a4f"
                }, function(n) {
                    var e = n.mt;
                    return null !== e && void 0 !== e ? e : "24px"
                }, function(n) {
                    var e = n.bottomHover;
                    return null !== e && void 0 !== e ? e : "34px"
                }, function(n) {
                    var e = n.textHover;
                    return null !== e && void 0 !== e ? e : "Excluir"
                }), (0, Xn.default)(Em.A)(oA || (oA = (0, Gn.A)(["\n  position: absolute;\n  .MuiPaper-root {\n    border-radius: 7px;\n    overflow: ", ";\n    min-width: ", ";\n\n    @media (max-width: 578px) {\n      width: 360px !important;\n    }\n    @media (max-width: 370px) {\n      width: 350px !important;\n    }\n  }\n\n  .MuiBackdrop-root {\n    opacity: 0.3 !important;\n    background: #000 !important;\n  }\n\n  .MuiDialog-paper {\n    max-width: 100% !important;\n  }\n"])), function(n) {
                    return n.overflow
                }, function(n) {
                    return n.minWidth
                })),
                VA = Xn.default.h6(rA || (rA = (0, Gn.A)(["\n  margin: 0;\n  color: #131313;\n  font-family: ", ";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                BA = Xn.default.div(lA || (lA = (0, Gn.A)(["\n  display: flex;\n  width: 500px;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 24px;\n"]))),
                $A = Xn.default.div(sA || (sA = (0, Gn.A)(["\n  width: 100%;\n  display: flex;\n  gap: 24px;\n"]))),
                JA = Xn.default.button(cA || (cA = (0, Gn.A)(["\n  width: 100%;\n  font-weight: 600;\n  display: flex;\n  height: 40px;\n  padding: 0px 40px;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  flex: 1 0 0;\n  border-radius: 5px;\n  border: ", ";\n  background: ", ";\n  color: ", ";\n"])), function(n) {
                    return n.border
                }, function(n) {
                    return n.background
                }, function(n) {
                    return n.color
                }),
                KA = Xn.default.button(dA || (dA = (0, Gn.A)(["\n  position: absolute;\n  right: 4px;\n  top: 7px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"]))),
                WA = (Xn.default.div(uA || (uA = (0, Gn.A)(["\n  position: relative;\n"]))), Xn.default.div(pA || (pA = (0, Gn.A)(["\n  position: relative;\n  height: 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))), Xn.default.div(fA || (fA = (0, Gn.A)(["\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  border: 2px solid #e6eaef;\n  position: relative;\n"]))), function(n) {
                    var e = n.open,
                        t = n.closeModal,
                        i = n.modalConfirmed;
                    return (0, Kn.jsx)(QA, {
                        open: e,
                        children: (0, Kn.jsxs)(BA, {
                            children: [(0, Kn.jsx)(KA, {
                                onClick: t,
                                children: (0, Kn.jsx)(UA, {
                                    src: (0, zn.oK)("/media/close-modal.svg")
                                })
                            }), (0, Kn.jsx)(VA, {
                                children: "Tem certeza que deseja excluir esta consulta?"
                            }), (0, Kn.jsxs)($A, {
                                children: [(0, Kn.jsx)(JA, {
                                    border: "1px solid #CECED2",
                                    color: "#131313",
                                    background: "transparent",
                                    onClick: t,
                                    children: "N\xe3o, voltar"
                                }), (0, Kn.jsx)(JA, {
                                    border: "none",
                                    background: "#D83143",
                                    color: "#fff",
                                    onClick: i,
                                    children: "Sim, excluir"
                                })]
                            })]
                        })
                    })
                }),
                HA = function(n) {
                    var e = n.data,
                        t = n.loading,
                        i = n.setShouldReload,
                        a = n.featureTypesUrl,
                        o = n.itemCard,
                        r = n.changePage,
                        l = n.currPage,
                        s = n.reloadPage,
                        c = n.modalCheckout,
                        d = n.setModalCheckout,
                        u = n.loadingModalCheckout,
                        p = n.setLoadingModalCheckout,
                        f = n.querieSelected,
                        m = n.hasQueryPending,
                        h = n.setQueryParams,
                        x = n.modalConfirmed,
                        g = n.closeModal,
                        v = n.deleteQuery,
                        y = n.queriesToDelete,
                        b = n.hasParams,
                        A = n.setpage,
                        _ = n.modalSuggestion,
                        j = n.setModalSuggestion,
                        C = n.expandedIndex,
                        w = n.toggleExpand,
                        k = n.state,
                        S = n.closeModalCusTomer,
                        P = n.onChangeCustomer,
                        E = n.linkUser,
                        R = n.updateCustomer,
                        M = n.customers,
                        O = n.changeInputType,
                        T = n.unlinkUser,
                        N = n.setOpenIndexMenu;
                    return (0, Kn.jsxs)(Zy, {
                        children: [function() {
                            var n, c = t && (!(null !== e && void 0 !== e && e.data) || (null === e || void 0 === e ? void 0 : e.data));
                            return (0, Kn.jsx)(Ob, {
                                children: c ? (0, Kn.jsx)(Xy, {
                                    children: (0, Kn.jsx)(Eb, {})
                                }) : (null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.length) > 0 || b ? (0, Kn.jsxs)(Kn.Fragment, {
                                    children: [(0, Kn.jsx)(yA, {
                                        loading: t
                                    }), (0, Kn.jsx)(Nb, {
                                        data: e,
                                        changePage: r,
                                        currPage: l,
                                        featureTypesUrl: a,
                                        itemCard: o,
                                        loading: t,
                                        setShouldReload: i,
                                        reloadPage: s,
                                        hasQueryPending: m,
                                        setQueryParams: h,
                                        hasParams: b,
                                        expandedIndex: C,
                                        toggleExpand: w,
                                        setOpenIndexMenu: N
                                    })]
                                }) : (0, Kn.jsx)(Db, {
                                    setQueryParams: h,
                                    setPage: A
                                })
                            })
                        }(), (0, Kn.jsx)(Ev, {
                            visible: c,
                            setModalCheckout: d,
                            loadingCheckout: u,
                            setLoadingCheckout: p,
                            identification: f
                        }), (0, Kn.jsx)(WA, {
                            open: x,
                            closeModal: g,
                            modalConfirmed: function() {
                                return v(y)
                            }
                        }), (0, Kn.jsx)(vl, {
                            openModal: _,
                            setOpenModal: j,
                            url: ft.sK
                        }), (0, Kn.jsx)(Lm.o, {
                            open: k.modalCustomer,
                            closeModal: S,
                            value: k.customer,
                            onChange: P,
                            submit: "text" === k.inputType ? E : R,
                            inputType: k.inputType,
                            error: k.error,
                            customers: M,
                            setInputType: O,
                            unlinkUser: T
                        })]
                    })
                },
                YA = function() {
                    var n = function() {
                        var n, e = (0, Nn.useState)({}),
                            t = (0, Ln.A)(e, 2),
                            i = t[0],
                            a = t[1],
                            o = (0, Nn.useState)(0),
                            r = (0, Ln.A)(o, 2),
                            l = r[0],
                            s = r[1],
                            c = (0, Nn.useState)({}),
                            d = (0, Ln.A)(c, 2),
                            u = d[0],
                            p = d[1],
                            f = (0, Nn.useState)(!1),
                            m = (0, Ln.A)(f, 2),
                            h = m[0],
                            x = m[1],
                            g = (0, Nn.useState)(null),
                            v = (0, Ln.A)(g, 2),
                            y = v[0],
                            b = v[1],
                            A = (0, Nn.useState)(!1),
                            _ = (0, Ln.A)(A, 2),
                            j = _[0],
                            C = _[1],
                            w = (0, Nn.useState)({}),
                            k = (0, Ln.A)(w, 2),
                            S = k[0],
                            P = k[1],
                            E = (0, Nn.useState)(null),
                            R = (0, Ln.A)(E, 2),
                            M = R[0],
                            O = R[1],
                            T = (0, Nn.useReducer)(Cd.I, Cd.u),
                            N = (0, Ln.A)(T, 2),
                            D = N[0],
                            z = N[1],
                            q = (0, Sd.t)().customers,
                            L = (0, Nn.useContext)(Dx.g),
                            I = L.setPage,
                            F = L.shouldReload,
                            U = L.setShouldReload,
                            Q = L.setIsLoading,
                            V = L.isLoading,
                            B = L.openModal,
                            $ = L.modalCheckout,
                            J = L.setModalCheckout,
                            K = L.loadingModalCheckout,
                            W = L.setLoadingModalCheckout,
                            H = L.querieSelected,
                            Y = L.modalSuggestion,
                            G = L.setModalSuggestion,
                            X = (0, be.lc)().HandleEvent,
                            Z = function() {
                                C(!1)
                            },
                            nn = function() {
                                C(!0)
                            },
                            en = (0, Nn.useCallback)(function() {
                                z({
                                    type: "CLOSE_MODAL_CUSTOMER"
                                })
                            }, []),
                            tn = function(n) {
                                z({
                                    type: "SET_CUSTOMER",
                                    payload: {
                                        customer: n
                                    }
                                })
                            },
                            an = !!u && Object.values(u).some(function(n) {
                                return null !== n && void 0 !== n && "" !== n
                            }),
                            on = (0, Nn.useMemo)(function() {
                                return "".concat("https://backend.jusfy.com.br/api", "/queries/list_queries")
                            }, []),
                            rn = (0, Nn.useMemo)(function() {
                                return {
                                    items_per_page: 10
                                }
                            }, []),
                            ln = (0, Nn.useMemo)(function() {
                                return !(null === i || void 0 === i || !i.data) && (Array.isArray(i.data[0]) ? i.data.some(function(n) {
                                    return n.some(function(n) {
                                        return "pending" === n.status
                                    })
                                }) : i.data.some(function(n) {
                                    return "pending" === n.status
                                }))
                            }, [null === i || void 0 === i ? void 0 : i.data]),
                            sn = (0, Nn.useCallback)(function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                    var t, i, a;
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                return x(null === e || void 0 === e ? void 0 : e.id), n.p = 1, n.n = 2, Oy(null === e || void 0 === e ? void 0 : e.id);
                                            case 2:
                                                X("Universal Repeat Query Clicked", {
                                                    query_type: null === e || void 0 === e ? void 0 : e.feature_type_name
                                                }), U(!0), b(null), n.n = 4;
                                                break;
                                            case 3:
                                                n.p = 3, 403 === (null === (a = n.v) || void 0 === a || null === (t = a.response) || void 0 === t ? void 0 : t.status) && (ti.oR.error("Voc\xea n\xe3o tem cr\xe9ditos suficientes para refazer esta consulta."), b(null), i = {
                                                    identification: null === e || void 0 === e ? void 0 : e.feature_type_name,
                                                    name: null === e || void 0 === e ? void 0 : e.type,
                                                    price: null === e || void 0 === e ? void 0 : e.universal_price
                                                }, B("BUY_CREDITS_MODAL", {
                                                    queryOption: i
                                                }));
                                            case 4:
                                                return n.p = 4, x(null), n.f(4);
                                            case 5:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [1, 3, 4, 5]
                                    ])
                                }));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }(), [X, U, B]),
                            cn = (0, Nn.useCallback)(function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n(e) {
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                return n.p = 0, n.n = 1, Ry(null === e || void 0 === e ? void 0 : e.id);
                                            case 1:
                                                X("Universal Query Performed Deleted", {
                                                    query_type: null === e || void 0 === e ? void 0 : e.feature_type_name,
                                                    status: null === e || void 0 === e ? void 0 : e.status
                                                }), U(!0), b(null), P({}), Z(), n.n = 3;
                                                break;
                                            case 2:
                                                n.p = 2, n.v, ti.oR.error("Erro ao deletar consulta. Por favor, tente novamente mais tarde.");
                                            case 3:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [0, 2]
                                    ])
                                }));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }(), [X, U]),
                            dn = (0, Nn.useCallback)(function(n) {
                                X("Universal Query Report Downloaded", {
                                    query_type: null === n || void 0 === n ? void 0 : n.feature_type_name,
                                    where: "history"
                                }), window.open(null === n || void 0 === n ? void 0 : n.pdf, "_blank")
                            }, [X]),
                            un = (0, Nn.useCallback)(function(n) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                if (null !== n && void 0 !== n && n.status && !Kh.XQ.includes(null === n || void 0 === n ? void 0 : n.status)) {
                                    X("Universal Query Performed Opened", {
                                        where: e,
                                        query_type: null === n || void 0 === n ? void 0 : n.feature_type_name
                                    });
                                    var t = Wy(n);
                                    t && window.open(t, "_blank")
                                }
                            }, [X]),
                            pn = (0, Nn.useCallback)(function(n) {
                                return "text" !== D.inputType || n && "" !== (null === n || void 0 === n ? void 0 : n.trim()) ? !("select" !== D.inputType || null !== n && void 0 !== n && n.name) && (z({
                                    type: "SET_ERROR",
                                    payload: {
                                        error: "Selecione um cliente"
                                    }
                                }), !0) : (z({
                                    type: "SET_ERROR",
                                    payload: {
                                        error: "Preencha o nome do cliente"
                                    }
                                }), !0)
                            }, [z, D.inputType]),
                            fn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                var e;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            if (!pn(D.customer)) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            return n.p = 1, n.n = 2, (0, wd.ff)(D.customer);
                                        case 2:
                                            e = n.v, ti.oR.success("Cliente criado com sucesso!"), tn(e.data), xn("select"), X("Create User LinkUser", {
                                                is_universal: !0,
                                                feature_type_name: D.feature_type_name,
                                                context: "history"
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao criar cliente. Tente novamente.");
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3]
                                ])
                            })), [D.customer, pn, D.feature_type_name, X]),
                            mn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            if (!pn(D.customer)) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            return n.p = 1, n.n = 2, (0, wd.hG)(D.id);
                                        case 2:
                                            ti.oR.success("Cliente desvinculado com sucesso!"), en(), U(!0), X("Unlik User", {
                                                is_universal: !0,
                                                feature_type_name: D.feature_type_name,
                                                context: "history"
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao desvincular cliente. Tente novamente.");
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3]
                                ])
                            })), [D.customer, pn, en, D.id, D.feature_type_name, X]),
                            hn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            if (!pn(D.customer)) {
                                                n.n = 1;
                                                break
                                            }
                                            return n.a(2);
                                        case 1:
                                            return n.p = 1, n.n = 2, (0, kd.X)(D);
                                        case 2:
                                            ti.oR.success("Cliente atualizado com sucesso!"), U(!0), en(), X("Update Link User", {
                                                is_universal: !0,
                                                feature_type_name: D.feature_type_name,
                                                context: "history"
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao atualizar cliente. Tente novamente.");
                                        case 4:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3]
                                ])
                            })), [U, D, pn, en, X]),
                            xn = function(n) {
                                z({
                                    type: "SET_INPUT_TYPE",
                                    payload: {
                                        inputType: n
                                    }
                                })
                            };
                        (0, Nn.useEffect)(function() {
                            z({
                                type: "SET_ERROR",
                                payload: {
                                    error: ""
                                }
                            })
                        }, [D.customer, D.inputType]);
                        var gn = (0, Nn.useCallback)(function(n) {
                                var e, t = "lawsuit" !== (null === n || void 0 === n ? void 0 : n.feature_type_name),
                                    i = !(null === n || void 0 === n || null === (e = n.client_customer) || void 0 === e || !e.name),
                                    a = {
                                        success: [{
                                            text: "Abrir",
                                            action: function(e) {
                                                e.stopPropagation(), un(n, "button")
                                            }
                                        }, {
                                            text: i ? "Editar cliente" : "Vincular cliente",
                                            action: function(e) {
                                                e.stopPropagation(), X(i ? "Edit Link User" : "Click Link User", {
                                                    query_type: null === n || void 0 === n ? void 0 : n.feature_type_name,
                                                    is_universal: !0,
                                                    context: "history"
                                                }), z({
                                                    type: "OPEN_MODAL_CUSTOMER",
                                                    payload: {
                                                        id: n.id,
                                                        customer: null === n || void 0 === n ? void 0 : n.client_customer,
                                                        edit: i,
                                                        inputType: i ? "update" : "select",
                                                        feature_type_name: null === n || void 0 === n ? void 0 : n.feature_type_name
                                                    }
                                                })
                                            }
                                        }, t && {
                                            text: "Baixar relat\xf3rio",
                                            action: function(e) {
                                                e.stopPropagation(), dn(n)
                                            }
                                        }, {
                                            text: "Excluir",
                                            action: function(e) {
                                                e.stopPropagation(), P(n), nn()
                                            }
                                        }],
                                        error: [{
                                            text: "Refazer consulta",
                                            action: function(e) {
                                                e.stopPropagation(), sn(n)
                                            }
                                        }, {
                                            text: "Excluir",
                                            action: function(e) {
                                                e.stopPropagation(), cn(n)
                                            }
                                        }],
                                        pending: [{
                                            text: i ? "Editar cliente" : "Vincular cliente",
                                            action: function(e) {
                                                e.stopPropagation(), X(i ? "Edit Link User" : "Click Link User", {
                                                    query_type: null === n || void 0 === n ? void 0 : n.feature_type_name,
                                                    is_universal: !0,
                                                    context: "history"
                                                }), z({
                                                    type: "OPEN_MODAL_CUSTOMER",
                                                    payload: {
                                                        id: n.id,
                                                        customer: null === n || void 0 === n ? void 0 : n.client_customer,
                                                        edit: i,
                                                        inputType: i ? "update" : "select",
                                                        feature_type_name: null === n || void 0 === n ? void 0 : n.feature_type_name
                                                    }
                                                })
                                            }
                                        }],
                                        error_global: [{
                                            text: "Excluir",
                                            action: function(e) {
                                                e.stopPropagation(), cn(n)
                                            }
                                        }]
                                    };
                                return a[n.status] || a.error_global
                            }, [un, dn, cn, sn, nn]),
                            vn = (0, Nn.useCallback)(function(n, e, t) {
                                n.stopPropagation(), y !== e && X("Universal Query Performed Opened", {
                                    where: "button",
                                    query_type: null === t || void 0 === t ? void 0 : t.feature_type_name
                                }), b(function(n) {
                                    return n === e ? null : e
                                }), P({})
                            }, [y, X]),
                            yn = (0, Nn.useCallback)((0, Ba.A)((0, Va.A)().m(function n() {
                                var e, t;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            return e = new URLSearchParams((0, Re.A)((0, Re.A)({}, rn), {}, {
                                                page: l + 1
                                            }, u)).toString(), Q(!0), n.p = 1, n.n = 2, My("".concat(on, "?").concat(e));
                                        case 2:
                                            t = n.v, a(t.data), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, n.v, ti.oR.error("Erro ao carregar consultas. Tente novamente.");
                                        case 4:
                                            return n.p = 4, Q(!1), n.f(4);
                                        case 5:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3, 4, 5]
                                ])
                            })), [on, rn, l, u, Q]),
                            bn = (0, Nn.useMemo)(function() {
                                var n, e = [];
                                return null === i || void 0 === i || null === (n = i.data) || void 0 === n || n.forEach(function(n, t) {
                                    if (n.length > 1) {
                                        var i, a = n[0],
                                            o = n.filter(function(n) {
                                                return "success" === n.status
                                            }).length,
                                            r = n.filter(function(n) {
                                                return "pending" === n.status
                                            }).length,
                                            l = n.filter(function(n) {
                                                return "error" === n.status
                                            }).length;
                                        e.push({
                                            type: "group",
                                            document: a.document,
                                            client: (null === a || void 0 === a || null === (i = a.client_customer) || void 0 === i ? void 0 : i.name) || "",
                                            document_type: a.document_type,
                                            date: a.date,
                                            successCount: o,
                                            pendingCount: r,
                                            errorCount: l,
                                            items: n.map(function(n, e) {
                                                var i, a = Hy(null === n || void 0 === n ? void 0 : n.type, null === n || void 0 === n ? void 0 : n.query_subtype);
                                                return {
                                                    id: null === n || void 0 === n ? void 0 : n.id,
                                                    typeQuery: a,
                                                    date: Yy(n),
                                                    status: n.status,
                                                    client: (null === n || void 0 === n || null === (i = n.client_customer) || void 0 === i ? void 0 : i.name) || "",
                                                    document_type: n.document_type,
                                                    feature_type_name: n.feature_type_name,
                                                    query_subtype: n.query_subtype,
                                                    statusComponent: Jy[null === n || void 0 === n ? void 0 : n.status] || Jy.error_global,
                                                    actions: (0, Kn.jsx)(qy, {
                                                        onClick: function(i) {
                                                            return vn(i, "".concat(t, "-").concat(e), n)
                                                        },
                                                        type: a,
                                                        query_subtype: null === n || void 0 === n ? void 0 : n.query_subtype,
                                                        menuOpen: y === "".concat(t, "-").concat(e),
                                                        itemsMenu: gn(n),
                                                        status: null === n || void 0 === n ? void 0 : n.status,
                                                        reprocessLoading: h === (null === n || void 0 === n ? void 0 : n.id)
                                                    }, "action-".concat(n.id, "-").concat(t, "-").concat(e))
                                                }
                                            })
                                        })
                                    } else {
                                        var s, c = n[0],
                                            d = Hy(null === c || void 0 === c ? void 0 : c.type, null === c || void 0 === c ? void 0 : c.query_subtype);
                                        e.push({
                                            type: "single",
                                            id: c.id,
                                            document: c.document,
                                            document_type: c.document_type,
                                            client: (null === c || void 0 === c || null === (s = c.client_customer) || void 0 === s ? void 0 : s.name) || "",
                                            feature_type_name: c.feature_type_name,
                                            typeQuery: d,
                                            date: Yy(c),
                                            status: c.status,
                                            statusComponent: Jy[null === c || void 0 === c ? void 0 : c.status] || Jy.error_global,
                                            actions: (0, Kn.jsx)(qy, {
                                                onClick: function(n) {
                                                    return vn(n, t, c)
                                                },
                                                type: d,
                                                query_subtype: null === c || void 0 === c ? void 0 : c.query_subtype,
                                                menuOpen: y === t,
                                                itemsMenu: gn(c),
                                                status: null === c || void 0 === c ? void 0 : c.status,
                                                reprocessLoading: h === (null === c || void 0 === c ? void 0 : c.id)
                                            }, "action-".concat(c.id, "-").concat(t))
                                        })
                                    }
                                }), e
                            }, [null === i || void 0 === i ? void 0 : i.data, y, vn, gn, h, null === i || void 0 === i || null === (n = i.client_customer) || void 0 === n ? void 0 : n.name]),
                            An = (0, Nn.useMemo)(function() {
                                return l + 1
                            }, [l]),
                            _n = (0, Nn.useCallback)(function(n) {
                                n < 1 || n > (null === i || void 0 === i ? void 0 : i.totalPages) || n === An || (s(n - 1), b(null))
                            }, [null === i || void 0 === i ? void 0 : i.totalPages, An]),
                            jn = (0, Nn.useCallback)(function() {
                                U(!0), X("Universal Query Refresh Button Clicked")
                            }, [U, X]);
                        return (0, Nn.useEffect)(function() {
                            s(0)
                        }, [u]), (0, Nn.useEffect)(function() {
                            F && (yn(), U(!1), h && s(0))
                        }, [F, yn, U, h]), (0, Nn.useEffect)(function() {
                            yn()
                        }, [yn]), {
                            data: i,
                            loading: V,
                            pagination: l,
                            setData: a,
                            setLoading: Q,
                            setPagination: s,
                            setPage: I,
                            shouldReload: F,
                            setShouldReload: U,
                            featureTypesUrl: un,
                            openInNewTab: dn,
                            getUrlsRedirects: Wy,
                            itemCard: bn,
                            changePage: _n,
                            currPage: An,
                            reloadPage: jn,
                            modalCheckout: $,
                            setModalCheckout: J,
                            loadingModalCheckout: K,
                            setLoadingModalCheckout: W,
                            querieSelected: H,
                            hasQueryPending: ln,
                            setQueryParams: p,
                            queryParams: u,
                            modalConfirmed: j,
                            closeModal: Z,
                            deleteQuery: cn,
                            queriesToDelete: S,
                            hasParams: an,
                            modalSuggestion: Y,
                            setModalSuggestion: G,
                            expandedIndex: M,
                            toggleExpand: function(n) {
                                O(M === n ? null : n)
                            },
                            state: D,
                            dispatch: z,
                            closeModalCusTomer: en,
                            onChangeCustomer: tn,
                            linkUser: fn,
                            updateCustomer: hn,
                            customers: q,
                            changeInputType: xn,
                            unlinkUser: mn,
                            setOpenIndexMenu: b
                        }
                    }();
                    return (0, Kn.jsx)(HA, (0, Re.A)({}, n))
                },
                GA = Xn.default.div(bA || (bA = (0, Gn.A)(['\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  justify-content: center;\n  margin-top: 32px;\n\n  ul {\n    align-self: center;\n  }\n\n  .page-link {\n    font-family: "Noto Sans" !important;\n  }\n']))),
                XA = Xn.default.span(AA || (AA = (0, Gn.A)(['\n  color: #111219;\n  font-size: 13px;\n  font-family: "Noto Sans";\n  font-weight: 400;\n']))),
                ZA = Xn.default.span(_A || (_A = (0, Gn.A)(['\n  color: #111219;\n  font-size: 14px;\n  font-family: "Noto Sans";\n  font-weight: 600;\n']))),
                n_ = Xn.default.div(jA || (jA = (0, Gn.A)(["\n  display: flex;\n  gap: 10px;\n  padding-right: 30px;\n"]))),
                e_ = (Xn.default.div(CA || (CA = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n"]))), Xn.default.h1(wA || (wA = (0, Gn.A)(["\n  color: ", ';\n  font-size: 20px;\n  font-family: "Noto Sans";\n'])), function(n) {
                    return n.theme.colors.black.primary
                }), Xn.default.span(kA || (kA = (0, Gn.A)(['\n  font-family: "Noto Sans";\n']))), Xn.default.span(SA || (SA = (0, Gn.A)(["\n  color: ", ';\n  font-weight: bold;\n  cursor: pointer;\n  font-family: "Noto Sans";\n'])), function(n) {
                    return n.theme.colors.green.primary
                }), (0, Xn.default)(Dn.A)(PA || (PA = (0, Gn.A)(["\n  width: ", "px;\n  height: ", "px;\n  cursor: pointer;\n"])), function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                })),
                t_ = Xn.default.div(EA || (EA = (0, Gn.A)(['\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  font-family: "Noto Sans";\n\n  span {\n    font-weight: 400;\n    position: relative;\n    top: -1px;\n  }\n']))),
                i_ = Xn.default.div(RA || (RA = (0, Gn.A)(["\n  width: 130.75;\n"]))),
                a_ = Xn.default.div(MA || (MA = (0, Gn.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: center;\n\n  h2 {\n    color: #5e5e60;\n    text-align: center;\n\n    font-family: ", ";\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 140%;\n  }\n\n  p {\n    color: #5e5e60;\n    text-align: center;\n    font-family: ", ";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 140%;\n  }\n\n  div {\n    text-align: center;\n  }\n\n  button {\n    border: 0;\n    border-radius: 5px;\n    height: 40px;\n    cursor: pointer;\n    font-size: 14px;\n    font-family: ", ";\n    font-weight: 600;\n    padding: 0px 24px;\n    color: #fff;\n    background-color: #01ab7d;\n    display: flex;\n    gap: 8px;\n    justify-content: center;\n    align-items: center;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                o_ = Xn.default.div(OA || (OA = (0, Gn.A)(["\n  display: flex;\n  padding: 24px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  align-self: stretch;\n  border-radius: 7px;\n  border: 1px solid #e7e8ec;\n  background: #fff;\n"]))),
                r_ = new Map([
                    ["household_activity", "Grupo econ\xf4mico - Atividade semelhante no endere\xe7o"],
                    ["household", "Grupo econ\xf4mico - Qualquer atividade no endere\xe7o"],
                    ["rfcontact", "Grupo econ\xf4mico - Mesmo contato na Receita Federal"],
                    ["owners", "Grupo econ\xf4mico - Mesmo quadro societ\xe1rio"],
                    ["legal_representative", "Grupo econ\xf4mico - Mesmo representante legal"]
                ]),
                l_ = {
                    success_with_result: (0, Kn.jsx)(Xo.A, {
                        placement: "top",
                        overlay: (0, Kn.jsx)(Uo.A, {
                            className: "tooltip",
                            children: (0, Kn.jsx)("span", {
                                children: "Consulta realizada com sucesso, mas sem resultados."
                            })
                        }),
                        children: (0, Kn.jsx)("div", {
                            children: (0, Kn.jsx)(Yo.A, {
                                text: "Consulta realizada",
                                color: "#017556",
                                backgroundColor: "#e4f6ef"
                            })
                        })
                    }),
                    success: (0, Kn.jsx)(Yo.A, {
                        text: "Consulta realizada",
                        color: "#017556",
                        backgroundColor: "#e4f6ef"
                    }),
                    pending: (0, Kn.jsx)(Xo.A, {
                        placement: "top",
                        overlay: (0, Kn.jsx)(Uo.A, {
                            className: "tooltip",
                            children: (0, Kn.jsx)("span", {
                                children: "Aguarde, a consulta pode demorar alguns minutos para ser conclu\xedda."
                            })
                        }),
                        children: (0, Kn.jsx)("div", {
                            children: (0, Kn.jsx)(Yo.A, {
                                text: "Em processamento",
                                color: "#2E3F54",
                                backgroundColor: "#FFF3CD",
                                children: (0, Kn.jsx)(Mt(), {
                                    type: "spin",
                                    color: "#9154DE",
                                    width: "12px",
                                    height: "21px"
                                })
                            })
                        })
                    }),
                    error: (0, Kn.jsx)(Yo.A, {
                        text: "Erro ao consultar",
                        color: "#D71D1D",
                        backgroundColor: "#ffe5e5"
                    }),
                    error_file: (0, Kn.jsx)(Yo.A, {
                        text: "Erro no arquivo",
                        color: "#D71D1D",
                        backgroundColor: "#ffe5e5"
                    })
                },
                s_ = {
                    CPF: "CPF",
                    CNPJ: "CNPJ",
                    PLATE: "Placa"
                },
                c_ = [{
                    name: "Consultado em",
                    selector: function(n) {
                        return (0, Kn.jsx)(XA, {
                            children: n.date
                        })
                    },
                    grow: .6,
                    minWidth: "165px"
                }, {
                    name: "Consulta",
                    selector: function(n) {
                        return (0, Kn.jsx)(XA, {
                            title: n.type,
                            children: "Grupo Econ\xf4mico de CNPJ" === n.type ? r_.get(n.query_subtype) : n.type
                        })
                    },
                    grow: .6,
                    minWidth: "125px",
                    wrap: !0
                }, {
                    name: "Documento",
                    selector: function(n) {
                        return (0, Kn.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [(0, Kn.jsxs)(ZA, {
                                children: [" ", "Diversos Documentos (", "".concat(s_[n.documentType]), ")", " "]
                            }), (0, Kn.jsx)(XA, {
                                children: n.originalFileName
                            })]
                        })
                    },
                    grow: .6,
                    minWidth: "170px"
                }, {
                    name: "Status",
                    selector: function(n) {
                        return function(n) {
                            var e = [{
                                test: function() {
                                    return null === n.downloadLink && "error" === n.status
                                },
                                result: l_.error_file
                            }].find(function(n) {
                                return n.test()
                            });
                            return e ? e.result : l_[n.status]
                        }(n)
                    },
                    grow: .6,
                    minWidth: "190px"
                }],
                d_ = ["relationship_tree", "lawsuit", "professional_data", "personal_data", "list_vehicles", "credit_restriction", "company_information", "company_partnership", "vehicle_data", "trademarks", "cpf_registration_status", "economic_group", "legal_representative", "owners", "rfcontact", "household", "household_activity"],
                u_ = {
                    relationship_tree: "Relationship Tree Open Page Result",
                    professional_data: "Professional Data Open Page Result",
                    personal_data: "Personal Data Open Page Result",
                    list_vehicles: "List Vehicles Open Page Result",
                    credit_restriction: "Credit Restriction Open Page Result",
                    company_information: "Company Information Open Page Result",
                    lawsuit: "Lawsuit Open Page Result",
                    company_partnership: "Company Partnership Open Page Result",
                    vehicle_data: "Vehicle Data Open Page Result",
                    trademarks: "Trademarks Open Page Result",
                    cpf_registration_status: "CPF Registration Status Open Page Result",
                    economic_group: "Economic Group Open Page Result"
                },
                p_ = function() {
                    var n = (0, Nn.useContext)(Dx.g).setPage;
                    return (0, Kn.jsx)(o_, {
                        children: (0, Kn.jsxs)(a_, {
                            children: [(0, Kn.jsx)(Dn.A, {
                                src: (0, zn.oK)("/media/jusfinder/figure-jusfinder.svg")
                            }), (0, Kn.jsxs)("div", {
                                children: [(0, Kn.jsx)("h2", {
                                    children: " Voc\xea ainda n\xe3o criou nenhuma consulta"
                                }), (0, Kn.jsx)("p", {
                                    children: "Fa\xe7a consultas de diversos documentos com rapidez. Comece agora, anexe uma planilha e otimize suas buscas!"
                                })]
                            }), (0, Kn.jsxs)("button", {
                                onClick: function() {
                                    return n("batchQueries")
                                },
                                children: [(0, Kn.jsx)(Dn.A, {
                                    src: (0, zn.oK)("/media/flat/add-button-jusfinder.svg")
                                }), " ", "Criar minha primeira consulta"]
                            })]
                        })
                    })
                },
                f_ = function(n) {
                    var e = n.data,
                        t = n.loading,
                        i = n.pagination,
                        a = n.setPagination,
                        o = n.setShouldReload,
                        r = n.featureTypesUrl,
                        l = n.openInNewTab,
                        s = n.paginatedData,
                        c = {
                            name: "",
                            center: !0,
                            maxWidth: "250px",
                            selector: function(n) {
                                return (0, Kn.jsx)(Kn.Fragment, {
                                    children: "success" === n.status ? (0, Kn.jsxs)(n_, {
                                        children: [d_.includes(n.featureTypeName) && (0, Kn.jsx)(ih, {
                                            onClick: function() {
                                                return r(n)
                                            },
                                            iconPath: "/media/flat/external-link.svg",
                                            children: "Abrir"
                                        }), (0, Kn.jsx)(ih, {
                                            onClick: function() {
                                                window.analytics.track("Performed Queries Action Clicked", {
                                                    query_type: n.featureTypeName
                                                }), l(n.downloadLink)
                                            },
                                            iconPath: "/media/flat/download-outline.svg",
                                            children: "Baixar"
                                        })]
                                    }) : "pending" === n.status ? (0, Kn.jsx)(n_, {
                                        children: (0, Kn.jsx)(ih, {
                                            iconPath: "/media/flat/reload.svg",
                                            onClick: function() {
                                                return o(!0)
                                            },
                                            children: "Atualizar"
                                        })
                                    }) : "error" === n.status && n.downloadLink ? (0, Kn.jsx)(n_, {
                                        children: (0, Kn.jsx)(ih, {
                                            onClick: function() {
                                                window.analytics.track("Performed Queries Action Clicked", {
                                                    query_type: n.featureTypeName
                                                }), l(n.downloadLink)
                                            },
                                            iconPath: "/media/flat/download-outline.svg",
                                            children: "Baixar"
                                        })
                                    }) : (0, Kn.jsx)(i_, {})
                                })
                            }
                        },
                        d = (0, Kn.jsx)(Kn.Fragment, {
                            children: (0, Kn.jsx)(lh, {
                                columns: [].concat((0, tt.A)(c_), [c]),
                                data: s
                            })
                        });
                    return (0, Kn.jsxs)(GA, {
                        children: [t ? (0, Kn.jsx)(Eo.A, {
                            variant: "rounded",
                            width: "100%",
                            height: 540,
                            animation: "wave"
                        }) : null !== e && void 0 !== e && e.length ? d : (0, Kn.jsx)(p_, {}), (0, Kn.jsx)(ch(), {
                            previousLabel: (0, Kn.jsxs)(t_, {
                                children: [(0, Kn.jsx)(e_, {
                                    src: (0, zn.oK)("/media/flat/arrow-left-sharped.svg")
                                }), (0, Kn.jsx)("span", {
                                    children: "anterior"
                                })]
                            }),
                            nextLabel: (0, Kn.jsxs)(t_, {
                                children: [(0, Kn.jsx)("span", {
                                    children: "pr\xf3ximo"
                                }), (0, Kn.jsx)(e_, {
                                    src: (0, zn.oK)("/media/flat/arrow-right-sharped.svg")
                                })]
                            }),
                            onPageChange: function(n) {
                                return a(n.selected)
                            },
                            pageRangeDisplayed: 5,
                            pageCount: Math.ceil(e.length / 10),
                            marginPagesDisplayed: 1,
                            pageClassName: "page-item",
                            pageLinkClassName: "page-link",
                            previousClassName: "page-item",
                            previousLinkClassName: "page-link",
                            nextClassName: "page-item",
                            nextLinkClassName: "page-link",
                            breakLabel: "...",
                            breakClassName: "page-item",
                            breakLinkClassName: "page-link",
                            containerClassName: "pagination",
                            activeClassName: "active",
                            selected: i,
                            onClick: function(n) {
                                return (0, dh.T)(n, "JusFinder History Pagination Clicked")
                            }
                        })]
                    })
                },
                m_ = function() {
                    var n = function() {
                        var n = (0, Nn.useState)([]),
                            e = (0, Ln.A)(n, 2),
                            t = e[0],
                            i = e[1],
                            a = (0, Nn.useState)(),
                            o = (0, Ln.A)(a, 2),
                            r = o[0],
                            l = o[1],
                            s = (0, Nn.useState)(0),
                            c = (0, Ln.A)(s, 2),
                            d = c[0],
                            u = c[1],
                            p = (0, Nn.useContext)(Dx.g),
                            f = p.setPage,
                            m = p.shouldReload,
                            h = p.setShouldReload,
                            x = (0, Nn.useMemo)(function() {
                                var n = 10 * d,
                                    e = n + 10;
                                return t.slice(n, e)
                            }, [d, t]),
                            g = (0, be.lc)().HandleEvent,
                            v = function() {
                                var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                    var e;
                                    return (0, Va.A)().w(function(n) {
                                        for (;;) switch (n.p = n.n) {
                                            case 0:
                                                return n.p = 0, l(!0), n.n = 1, My("".concat("https://backend.jusfy.com.br/api", "/bulk-queries"));
                                            case 1:
                                                e = n.v, i(e.data.queries), n.n = 3;
                                                break;
                                            case 2:
                                                n.p = 2, n.v, ti.oR.error("Erro ao carregar dados de consulta");
                                            case 3:
                                                return n.p = 3, l(!1), n.f(3);
                                            case 4:
                                                return n.a(2)
                                        }
                                    }, n, null, [
                                        [0, 2, 3, 4]
                                    ])
                                }));
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }();
                        (0, Nn.useEffect)(function() {
                            v()
                        }, []), (0, Nn.useEffect)(function() {
                            v()
                        }, [d]), (0, Nn.useEffect)(function() {
                            m && (v(), h(!1))
                        }, [m]);
                        var y = function(n) {
                                return window.open(n, "_blank", "noopener,noreferrer")
                            },
                            b = (0, Nn.useMemo)(function() {
                                return function(n) {
                                    return "/resultado/".concat(n.featureTypeName, "/").concat(n.id, "/").concat(n.type)
                                }
                            }, []);
                        return {
                            data: t,
                            loading: r,
                            pagination: d,
                            setData: i,
                            setLoading: l,
                            setPagination: u,
                            setPage: f,
                            shouldReload: m,
                            setShouldReload: h,
                            featureTypesUrl: function(n) {
                                g(u_[n.featureTypeName], {
                                    context: "performed_queries_list"
                                });
                                var e = b(n);
                                y(e)
                            },
                            openInNewTab: y,
                            getUrlsRedirects: b,
                            paginatedData: x
                        }
                    }();
                    return (0, Kn.jsx)(f_, (0, Re.A)({}, n))
                },
                h_ = Xn.default.div(TA || (TA = (0, Gn.A)(["\n  display: flex;\n  padding: 4px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  width: fit-content;\n  border-radius: 7px;\n  background: #fff;\n\n  @media (max-width: 578px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),
                x_ = Xn.default.div(NA || (NA = (0, Gn.A)(["\n  display: flex;\n  height: 32px;\n  padding: 8px 12px;\n  margin-left: 1px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border-radius: 3px;\n  background: ", ";\n\n  span {\n    color: #383839;\n    font-family: ", ";\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 100%;\n\n    strong {\n      font-weight: 700;\n    }\n  }\n  @media (max-width: 578px) {\n    width: 100%;\n  }\n"])), function(n) {
                    return n.hasCredit ? "#E6F7F2" : "#FBEAEC"
                }, function(n) {
                    return n.theme.typography.quartenary
                }),
                g_ = (0, Xn.default)(Dn.A)(DA || (DA = (0, Gn.A)([""]))),
                v_ = Xn.default.div(zA || (zA = (0, Gn.A)(["\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 8px;\n\n  button {\n    border: none;\n    background: transparent;\n\n    color: #01ab7d;\n    text-align: center;\n\n    font-family: ", ";\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 140%;\n    padding: 0px;\n  }\n  @media (max-width: 578px) {\n    width: 100%;\n  }\n"])), function(n) {
                    return n.theme.typography.quartenary
                }),
                y_ = t(39309),
                b_ = function(n) {
                    var e = n.creditsMultipleQueries,
                        t = (0, Nn.useContext)(Dx.g),
                        i = t.openModal,
                        a = t.creditAvailable,
                        o = t.setCreditAvailable,
                        r = 1 === a,
                        l = (0, y_.jE)(),
                        s = r ? "cr\xe9dito dispon\xedvel" : "cr\xe9ditos dispon\xedveis";
                    return (0, Nn.useEffect)(function() {
                        var n = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                var e, t;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            return n.p = 0, n.n = 1, l.fetchQuery({
                                                queryKey: ["queries"],
                                                queryFn: Ss
                                            });
                                        case 1:
                                            t = n.v, o(null === t || void 0 === t || null === (e = t.data) || void 0 === e ? void 0 : e.availableCredits), n.n = 3;
                                            break;
                                        case 2:
                                            n.p = 2, n.v, ti.oR.error("Erro ao carregar dados de consulta");
                                        case 3:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [0, 2]
                                ])
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                        e && n()
                    }, [e]), (0, Kn.jsxs)(h_, {
                        children: [(0, Kn.jsxs)(x_, {
                            hasCredit: a > 0,
                            children: [(0, Kn.jsx)(g_, {
                                src: (0, zn.oK)("/media/jusfinderuniversal/credit-dolar.svg")
                            }), (0, Kn.jsxs)("span", {
                                children: [" ", (0, Kn.jsx)("strong", {
                                    children: a
                                }), " ", s]
                            })]
                        }), (0, Kn.jsxs)(v_, {
                            children: [(0, Kn.jsx)("button", {
                                onClick: function() {
                                    return i("BUY_CREDITS_MODAL")
                                },
                                children: "Comprar cr\xe9ditos"
                            }), (0, Kn.jsx)(g_, {
                                src: (0, zn.oK)("/media/jusfinderuniversal/arrow.svg")
                            })]
                        })]
                    })
                },
                A_ = t(5171),
                __ = function(n) {
                    var e = n.credit;
                    return (0, Kn.jsxs)(lx, {
                        children: [(0, Kn.jsx)(sx, {
                            src: (0, zn.oK)("/media/jusfinderuniversal/credit-dolar.svg")
                        }), e]
                    })
                },
                j_ = function(n) {
                    var e = n.isVisible,
                        t = n.qtdCredits,
                        i = n.credits,
                        a = n.openModal;
                    return (0, Kn.jsxs)(dx, {
                        isVisible: e,
                        children: [(0, Kn.jsx)(fx, {
                            src: (0, zn.oK)("/media/jusfinder/info-circle-down.svg")
                        }), (0, Kn.jsxs)(ux, {
                            children: [" ", (0, Kn.jsxs)("span", {
                                children: ["Voc\xea possui apenas ", i, " dos ", t, " cr\xe9ditos necess\xe1rios para a consulta, compre mais para conseguir realiz\xe1-la ou contrate um plano com mais cr\xe9ditos"]
                            }), (0, Kn.jsx)(px, {
                                onClick: function() {
                                    return a("BUY_CREDITS_MODAL")
                                },
                                children: "Comprar cr\xe9ditos"
                            })]
                        })]
                    })
                },
                C_ = function() {
                    var n = (0, Nn.useState)(""),
                        e = (0, Ln.A)(n, 2),
                        t = e[0],
                        i = e[1],
                        a = (0, Nn.useState)(ft.d3.CPF),
                        o = (0, Ln.A)(a, 2),
                        r = o[0],
                        l = o[1],
                        s = (0, Nn.useContext)(Dx.g),
                        c = s.openModal,
                        d = s.creditAvailable,
                        u = s.setPage,
                        p = s.modal,
                        f = (0, Nn.useState)(""),
                        m = (0, Ln.A)(f, 2),
                        h = m[0],
                        x = m[1],
                        g = (0, Nn.useState)(""),
                        v = (0, Ln.A)(g, 2),
                        y = v[0],
                        b = v[1],
                        A = (0, Nn.useState)(Ch()),
                        _ = (0, Ln.A)(A, 2),
                        j = _[0],
                        C = _[1],
                        w = (0, Nn.useState)([]),
                        k = (0, Ln.A)(w, 2),
                        S = k[0],
                        P = k[1],
                        E = (0, Nn.useState)((0, Xc.T5)(ft.d3.CPF)),
                        R = (0, Ln.A)(E, 2),
                        M = R[0],
                        O = R[1],
                        T = (0, Nn.useState)(null !== d && void 0 !== d ? d : 0),
                        N = (0, Ln.A)(T, 2),
                        D = N[0],
                        z = N[1],
                        q = (0, Nn.useState)(""),
                        L = (0, Ln.A)(q, 2),
                        I = L[0],
                        F = L[1],
                        U = (0, Nn.useState)(!1),
                        Q = (0, Ln.A)(U, 2),
                        V = Q[0],
                        B = Q[1],
                        $ = (0, be.lc)().HandleEvent,
                        J = (0, Nn.useCallback)(function(n) {
                            var e = ft.MU.get(r),
                                t = e ? e(n) : n;
                            i(t)
                        }, [r]),
                        K = (0, Nn.useMemo)(function() {
                            return (0, Xc.zo)(S)
                        }, [S]),
                        W = (0, Nn.useMemo)(function() {
                            return K > D
                        }, [D, K]),
                        H = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                var e, i;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.p = n.n) {
                                        case 0:
                                            return B(!0), n.p = 1, n.n = 2, Sh({
                                                documentType: r,
                                                document: t,
                                                queries: S
                                            });
                                        case 2:
                                            c("AVAILABLE_SOON_MODAL"), $("Document Type Selected", {
                                                documentType: r,
                                                isUniversal: !0
                                            }), $("Queries Selected", {
                                                queries: S,
                                                isUniversal: !0
                                            }), n.n = 4;
                                            break;
                                        case 3:
                                            n.p = 3, i = n.v, ti.oR.error("Erro ao consultar documentos. Tente novamente mais tarde."), e = i instanceof Error ? null === i || void 0 === i ? void 0 : i.message : JSON.stringify(i), $("Error Submit Queries", {
                                                error: e,
                                                isUniversal: !0
                                            });
                                        case 4:
                                            return n.p = 4, B(!1), n.f(4);
                                        case 5:
                                            return n.a(2)
                                    }
                                }, n, null, [
                                    [1, 3, 4, 5]
                                ])
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        Y = function() {
                            c("BUY_CREDITS_MODAL", {
                                context: Ph.MULTIPLE_QUERIES,
                                creditQuantity: K - D
                            }), $(" Buy Credits Modal Opened", {
                                isUniversal: !0
                            })
                        },
                        G = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                var e, i, a;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            if (e = _h(t, r), i = e.isValid, a = e.error, i) {
                                                n.n = 1;
                                                break
                                            }
                                            return x(a), n.a(2);
                                        case 1:
                                            if (j) {
                                                n.n = 2;
                                                break
                                            }
                                            return b(ft.Sr.get("TERMS")), n.a(2);
                                        case 2:
                                            if (!(K > D)) {
                                                n.n = 3;
                                                break
                                            }
                                            return Y(), n.a(2);
                                        case 3:
                                            if (0 !== S.length) {
                                                n.n = 4;
                                                break
                                            }
                                            return n.a(2, ti.oR.error("Selecione pelo menos uma consulta para continuar."));
                                        case 4:
                                            return n.n = 5, H();
                                        case 5:
                                            return n.a(2)
                                    }
                                }, n)
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    (0, Nn.useEffect)(function() {
                        x("")
                    }, [t]), (0, Nn.useEffect)(function() {
                        j && b("")
                    }, [j]);
                    var X = (0, Nn.useMemo)(function() {
                            return K > 0 ? "Consultar por ".concat((0, Py.td)("cr\xe9dito", K, "cr\xe9ditos")) : "Consultar"
                        }, [K]),
                        Z = (0, Nn.useRef)(function(n, e) {
                            var t;
                            return function() {
                                for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                                clearTimeout(t), t = setTimeout(function() {
                                    return n.apply(void 0, a)
                                }, e)
                            }
                        }(function(n) {
                            F(n)
                        }, 100)).current,
                        nn = (0, Nn.useCallback)(function(n) {
                            Z(n)
                        }, [Z]);
                    (0, Nn.useEffect)(function() {
                        var n = (0, Xc.T5)(r);
                        if (I.trim()) {
                            var e = n.filter(function(n) {
                                return n.name_query.toLowerCase().includes(I.toLowerCase())
                            });
                            O(e)
                        } else O(n)
                    }, [I, r]), (0, Nn.useEffect)(function() {
                        var n = function() {
                            var n = (0, Ba.A)((0, Va.A)().m(function n() {
                                var e;
                                return (0, Va.A)().w(function(n) {
                                    for (;;) switch (n.n) {
                                        case 0:
                                            return n.n = 1, Ss();
                                        case 1:
                                            e = n.v, z(e.data.availableCredits);
                                        case 2:
                                            return n.a(2)
                                    }
                                }, n)
                            }));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                        n()
                    }, [p.open, V]);
                    return {
                        document: t,
                        documentType: r,
                        error: h,
                        errorTerm: y,
                        acceptedTerm: j,
                        queries: S,
                        queriesRenders: M,
                        sumCreditsQueriesSelected: K,
                        isVisibleAlert: W,
                        onChangeQueryInput: J,
                        submitQueries: G,
                        onClickAcceptTerm: function() {
                            var n = !j;
                            C(n), wh(n)
                        },
                        chooseQueries: function(n) {
                            P((0, Xc.ph)(S, n))
                        },
                        chooseDocumentType: function(n) {
                            l(n), O((0, Xc.T5)(n)), P([]), i("")
                        },
                        openModalBuyCredits: Y,
                        creditsMultipleQueries: D,
                        labelButton: X,
                        onChangeSearch: nn,
                        search: I,
                        loading: V,
                        backPrevPage: function() {
                            u("query")
                        }
                    }
                },
                w_ = function() {
                    var n = C_(),
                        e = n.document,
                        t = n.submitQueries,
                        i = n.documentType,
                        a = n.chooseDocumentType,
                        o = n.onChangeQueryInput,
                        r = n.error,
                        l = n.acceptedTerm,
                        s = n.onClickAcceptTerm,
                        c = n.errorTerm,
                        d = n.chooseQueries,
                        u = n.queries,
                        p = n.sumCreditsQueriesSelected,
                        f = n.creditsMultipleQueries,
                        m = n.isVisibleAlert,
                        h = n.openModalBuyCredits,
                        x = n.queriesRenders,
                        g = n.labelButton,
                        v = n.onChangeSearch,
                        y = n.search,
                        b = n.loading,
                        A = n.backPrevPage;
                    return (0, Kn.jsxs)(ex, {
                        children: [(0, Kn.jsxs)(tx, {
                            children: [(0, Kn.jsx)(Mh, {
                                title: "Nova Consulta",
                                subtitle: "jusfinder"
                            }), (0, Kn.jsx)(b_, {
                                creditsMultipleQueries: f
                            })]
                        }), (0, Kn.jsxs)(ix, {
                            children: [(0, Kn.jsxs)(og.Z, {
                                children: [(0, Kn.jsx)(A_.j, {
                                    title: "Dados para consulta"
                                }), (0, Kn.jsxs)(ax, {
                                    children: [(0, Kn.jsx)(Jh, {
                                        optionsDocument: Kh.lw,
                                        actived: i,
                                        label: "Formato do documento",
                                        setDocumentType: a
                                    }), (0, Kn.jsx)(Wh, {
                                        label: "Dados para a consulta",
                                        documentType: (0, Xc.Q6)(i),
                                        error: r,
                                        value: e,
                                        onChange: o
                                    })]
                                }), (0, Kn.jsx)(Hh, {
                                    acceptTerm: l,
                                    setAcceptTerm: s,
                                    error: c
                                })]
                            }), (0, Kn.jsxs)(og.Z, {
                                children: [(0, Kn.jsx)(A_.j, {
                                    title: "Sele\xe7\xe3o de consultas"
                                }), (0, Kn.jsx)(yl.S, {
                                    search: y,
                                    onChange: function(n) {
                                        return v(n.target.value)
                                    },
                                    placeholder: "Pesquise t\xedtulo"
                                }), y && 0 === (null === x || void 0 === x ? void 0 : x.length) && (0, Kn.jsx)(Tb, {}), (0, Kn.jsx)(ox, {
                                    children: null === x || void 0 === x ? void 0 : x.map(function(n, e) {
                                        return (0, Kn.jsx)(Mx, {
                                            checked: u.includes(n.feature_type_name),
                                            description: n.description,
                                            isUniversal: !0,
                                            universal_price: n.universal_price,
                                            feature_type_name: n.feature_type_name,
                                            name_query: n.name_query,
                                            onChange: function() {
                                                return d(n.feature_type_name)
                                            }
                                        }, n.feature_type_name)
                                    })
                                }), (0, Kn.jsxs)(rx, {
                                    children: [(0, Kn.jsx)("span", {
                                        children: "Total de cr\xe9ditos das consultas selecionadas:"
                                    }), (0, Kn.jsx)(__, {
                                        credit: p
                                    })]
                                }), (0, Kn.jsx)(j_, {
                                    isVisible: m,
                                    credits: f,
                                    qtdCredits: p,
                                    openModal: h
                                })]
                            })]
                        }), (0, Kn.jsxs)(cx, {
                            children: [(0, Kn.jsx)(qn.A, {
                                padding: "10px 32px",
                                borderRadius: "5px",
                                backgroundColor: "rgb(253, 253, 255)",
                                color: "rgb(17, 18, 25)",
                                border: "1px solid rgb(202, 201, 207)",
                                onClick: A,
                                children: "Voltar"
                            }), (0, Kn.jsx)(qn.A, {
                                padding: "10px 32px",
                                borderRadius: "5px",
                                onClick: t,
                                children: b ? (0, Kn.jsx)(Mt(), {
                                    type: "spinningBubbles",
                                    color: "#fff",
                                    height: 20,
                                    width: 20
                                }) : g
                            })]
                        })]
                    })
                },
                k_ = function() {
                    var n = (0, Nn.useContext)(Dx.g),
                        e = n.page,
                        t = n.setPage,
                        i = (0, pt.g)(),
                        a = new Map([
                            ["query", Ey],
                            ["history", YA],
                            ["batchQueries", Ag],
                            ["history_batch", m_]
                        ]).get(e);
                    return (0, Nn.useEffect)(function() {
                        i.page && t(i.page)
                    }, [i.page, t]), "MultipleQueriesPage" === e ? (0, Kn.jsx)(w_, {}) : (0, Kn.jsx)(a, {})
                },
                S_ = [{
                    title: "Consultas",
                    icon: (0, zn.oK)("/media/jusfinderuniversal/queries.svg"),
                    page_queries: "query"
                }, {
                    title: "Hist\xf3rico",
                    icon: (0, zn.oK)("/media/jusfinderuniversal/history-icon.svg"),
                    page_queries: "history"
                }],
                P_ = Xn.default.div(qA || (qA = (0, Gn.A)(["\n  display: flex;\n  height: 40px;\n  padding: 4px;\n\n  justify-content: center;\n  align-items: flex-start;\n  gap: 8px;\n  width: fit-content;\n  border-radius: 7px;\n  background: #fff;\n\n  @media (max-width: 578px) {\n    width: calc(100% - 1px);\n    justify-content: flex-start;\n    position: fixed;\n    top: 60px;\n    left: 2px;\n    overflow: hidden;\n    padding: 16px;\n    height: auto;\n  }\n"]))),
                E_ = Xn.default.button(LA || (LA = (0, Gn.A)(["\n  display: flex;\n  padding: 4px 24px;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  border: none;\n  border-radius: 3px 0 0 3px;\n  background: ", ";\n  transition: all ease-out;\n\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: ", ";\n  line-height: 140%;\n\n  svg path {\n    stroke: ", ";\n  }\n\n  @media (max-width: 578px) {\n    height: 40px;\n  }\n"])), function(n) {
                    return n.isActive ? "#f4f5f9" : "#fff"
                }, function(n) {
                    return n.isActive ? "#131313" : "#5E5E60"
                }, function(n) {
                    return n.theme.typography.quartenary
                }, function(n) {
                    return n.isActive ? "600" : "400"
                }, function(n) {
                    return n.isActive ? "#131313" : "#5E5E60"
                }),
                R_ = (0, Xn.default)(Dn.A)(IA || (IA = (0, Gn.A)([""]))),
                M_ = function() {
                    var n = function() {
                            var n = (0, Nn.useContext)(Dx.g),
                                e = n.setPage,
                                t = n.page,
                                i = n.setDataQueries;
                            return {
                                changePage: function() {
                                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                    n && (i([]), e(n))
                                },
                                page: t
                            }
                        }(),
                        e = n.changePage,
                        t = n.page;
                    return (0, Kn.jsx)(P_, {
                        children: S_.map(function(n, i) {
                            return (0, Kn.jsxs)(E_, {
                                isActive: t === n.page_queries,
                                onClick: function() {
                                    return e(n.page_queries)
                                },
                                children: [(0, Kn.jsx)(R_, {
                                    src: n.icon
                                }), n.title]
                            }, "".concat(i, "-").concat(n.page_queries))
                        })
                    })
                },
                O_ = Xn.default.div(FA || (FA = (0, Gn.A)(["\n  width: 100%;\n  display: ", ";\n  gap: 16px;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 32px;\n  position: relative;\n\n  @media (max-width: 579px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n"])), function(n) {
                    return n.isVisible ? "flex" : "none"
                }),
                T_ = function(n) {
                    var e = n.availableCredits,
                        t = (0, Nn.useContext)(Dx.g).page;
                    return (0, Kn.jsxs)(O_, {
                        isVisible: "query" === t || "history" === t,
                        children: [(0, Kn.jsx)(M_, {}), (0, Kn.jsx)(b_, {
                            availableCredits: e
                        })]
                    })
                },
                N_ = function() {
                    var n = (0, he.HW)().preferences;
                    return (0, Kn.jsx)(Dx.A, {
                        children: (0, Kn.jsxs)(Tn.A, {
                            hasMargin: "v2" === (null === n || void 0 === n ? void 0 : n.menuVersion),
                            children: [(0, Kn.jsx)(Qx.A, {}), (0, Kn.jsx)(Ux, {}), (0, Kn.jsx)(T_, {}), (0, Kn.jsx)(k_, {})]
                        })
                    })
                },
                D_ = function() {
                    return (0, On.d4)(function(n) {
                        var e, t;
                        return null === (e = n.subscription) || void 0 === e || null === (t = e.subscription_status) || void 0 === t ? void 0 : t.isUniversalJusfinder
                    }) ? (0, Kn.jsx)(N_, {}) : (0, Kn.jsx)(Nx, {})
                }
        },
        60385: function(n, e, t) {
            t.d(e, {
                T: function() {
                    return i
                }
            });
            var i = function(n, e) {
                var t = n.isNext,
                    i = n.isPrevious;
                t ? window.analytics.track(e, {
                    navigation_type: "next_page"
                }) : i ? window.analytics.track(e, {
                    navigation_type: "previous_page"
                }) : window.analytics.track(e, {
                    navigation_type: "page_number"
                })
            }
        },
        67256: function(n, e, t) {
            t.d(e, {
                A: function() {
                    return c
                }
            });
            var i, a = t(57528),
                o = t(42506),
                r = t(8171),
                l = (0, o.default)(r.A)(i || (i = (0, a.A)(["\n  box-shadow: none !important;\n  border-radius: 7px;\n  height: ", ";\n  width: ", ";\n  position: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  flex-grow: ", ";\n  overflow: ", " !important;\n"])), function(n) {
                    var e = n.height;
                    return "full" === e ? "100%" : e
                }, function(n) {
                    var e = n.width;
                    return "full" === e ? "100%" : e
                }, function(n) {
                    return n.position
                }, function(n) {
                    var e = n.padding;
                    return e || "0"
                }, function(n) {
                    var e = n.border;
                    return e || "none"
                }, function(n) {
                    var e = n.borderRadius;
                    return e ? e + " !important" : "0"
                }, function(n) {
                    return n.grow
                }, function(n) {
                    return n.overflow
                }),
                s = t(27929),
                c = function(n) {
                    var e = n.width,
                        t = void 0 === e ? "full" : e,
                        i = n.height,
                        a = void 0 === i ? "height" : i,
                        o = n.padding,
                        r = void 0 === o ? "0" : o,
                        c = n.border,
                        d = n.position,
                        u = void 0 === d ? "relative" : d,
                        p = n.overflow,
                        f = void 0 === p ? "hidden" : p,
                        m = n.borderRadius,
                        h = n.grow,
                        x = void 0 === h ? "0" : h,
                        g = n.children;
                    return (0, s.jsx)(l, {
                        width: t,
                        height: a,
                        padding: r,
                        border: c,
                        borderRadius: m,
                        grow: x,
                        overflow: f,
                        position: u,
                        children: g
                    })
                }
        },
        94916: function(n, e, t) {
            t.d(e, {
                A: function() {
                    return l
                }
            });
            var i, a = t(57528),
                o = t(42506).default.div(i || (i = (0, a.A)(["\n  padding: ", ";\n  margin: ", ";\n  text-align: center;\n  width: ", ";\n  height: ", ';\n  font-family: "Noto Sans";\n  font-size: ', ";\n  color: ", ";\n  background-color: ", ";\n  font-weight: ", ";\n  border-radius: ", ";\n  border: ", ";\n  border-image: ", ";\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"])), function(n) {
                    return n.padding
                }, function(n) {
                    return n.margin
                }, function(n) {
                    return n.width
                }, function(n) {
                    return n.height
                }, function(n) {
                    return n.fontSize
                }, function(n) {
                    return n.color
                }, function(n) {
                    return n.backgroundColor
                }, function(n) {
                    return n.fontWeight
                }, function(n) {
                    return n.borderRadius
                }, function(n) {
                    return n.border
                }, function(n) {
                    return n.borderImage
                }),
                r = t(27929),
                l = function(n) {
                    var e = n.text,
                        t = n.color,
                        i = void 0 === t ? "#535353" : t,
                        a = n.backgroundColor,
                        l = void 0 === a ? "rgba(232, 235, 235, 0.8)" : a,
                        s = n.padding,
                        c = void 0 === s ? "4px 12px" : s,
                        d = n.width,
                        u = void 0 === d ? "fit-content" : d,
                        p = n.height,
                        f = void 0 === p ? "auto" : p,
                        m = n.fontSize,
                        h = void 0 === m ? "13px" : m,
                        x = n.fontWeight,
                        g = void 0 === x ? "400" : x,
                        v = n.borderRadius,
                        y = void 0 === v ? "4px" : v,
                        b = n.border,
                        A = void 0 === b ? "none" : b,
                        _ = n.borderImage,
                        j = void 0 === _ ? "none" : _,
                        C = n.margin,
                        w = void 0 === C ? "0" : C,
                        k = n.children;
                    return (0, r.jsxs)(o, {
                        color: i,
                        backgroundColor: l,
                        padding: c,
                        fontSize: h,
                        fontWeight: g,
                        borderRadius: y,
                        border: A,
                        borderImage: j,
                        width: u,
                        height: f,
                        margin: w,
                        children: [k, e]
                    })
                }
        }
    }
]);
//# sourceMappingURL=3976.d3d3e371.chunk.js.map