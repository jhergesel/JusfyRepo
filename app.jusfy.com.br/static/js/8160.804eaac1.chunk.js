"use strict";
(self.webpackChunkdemo1 = self.webpackChunkdemo1 || []).push([
    [8160], {
        151: function(e, n, t) {
            t.d(n, {
                ff: function() {
                    return o
                },
                hG: function() {
                    return r
                }
            });
            var a = t(8719),
                o = function(e) {
                    return a.A.post("https://backend.jusfy.com.br/api/client_customers", {
                        document_type: null,
                        document_number: "",
                        name: e,
                        rg: "",
                        profession: "",
                        marital_status: "",
                        email: "",
                        address: "",
                        phone_1: "",
                        postal_code: "",
                        phone_2: "",
                        state: null,
                        city: null,
                        birthday: "",
                        observations: ""
                    })
                },
                r = function(e) {
                    return a.A.delete("https://backend.jusfy.com.br/api" + "/queries/".concat(e, "/customer"))
                }
        },
        5171: function(e, n, t) {
            t.d(n, {
                j: function() {
                    return f
                }
            });
            var a, o, r, i, s = t(57528),
                c = t(42506),
                u = c.default.div(a || (a = (0, s.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n"]))),
                d = c.default.h5(o || (o = (0, s.A)(["\n  font: normal 600 20px ", ";\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  line-height: 20px;\n  text-align: left;\n  color: ", ";\n  margin: 0;\n\n  @media (max-width: 578px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"])), function(e) {
                    return e.theme.typography.quartenary
                }, function(e) {
                    return e.theme.colors.black.primary
                }),
                l = c.default.span(r || (r = (0, s.A)(["\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #808080;\n"])), function(e) {
                    return e.theme.typography.quartenary
                }),
                p = c.default.h6(i || (i = (0, s.A)(["\n  margin: 0;\n  font: normal 400 13px ", ";\n  line-height: 18.2px;\n  text-align: left;\n  color: #3f4254;\n"])), function(e) {
                    return e.theme.typography.quartenary
                }),
                m = t(27929),
                f = function(e) {
                    var n = e.title,
                        t = void 0 === n ? "Adicione o seu ti\u0301tulo" : n,
                        a = e.optionalText,
                        o = void 0 === a ? "" : a,
                        r = e.hasOptional,
                        i = void 0 !== r && r,
                        s = e.subTitle,
                        c = void 0 === s ? "" : s;
                    return (0, m.jsxs)(u, {
                        children: [(0, m.jsxs)(d, {
                            hasOptional: i,
                            children: [t, " ", o && (0, m.jsx)(l, {
                                children: o
                            })]
                        }), (0, m.jsx)(p, {
                            children: c
                        })]
                    })
                }
        },
        12104: function(e, n, t) {
            t.d(n, {
                X: function() {
                    return o
                }
            });
            var a = t(8719),
                o = function(e) {
                    var n = e.id,
                        t = e.customer;
                    return a.A.put("https://backend.jusfy.com.br/api" + "/queries/".concat(n, "/customer"), {
                        client_customer_id: null === t || void 0 === t ? void 0 : t.id
                    })
                }
        },
        18357: function(e, n, t) {
            t.d(n, {
                $n: function() {
                    return r
                },
                LS: function() {
                    return d
                },
                Or: function() {
                    return p
                },
                Pn: function() {
                    return _
                },
                Sy: function() {
                    return f
                },
                XN: function() {
                    return i
                },
                Ym: function() {
                    return o
                },
                bs: function() {
                    return l
                },
                f8: function() {
                    return m
                },
                n8: function() {
                    return u
                },
                s3: function() {
                    return s
                },
                sp: function() {
                    return c
                }
            });
            var a = t(95383),
                o = new Map([
                    ["professional_data", "Dados Profissionais"],
                    ["personal_data", "Localiza\xe7\xe3o"],
                    ["list_vehicles", "Ve\xedculos"],
                    ["vehicle_tracking", "Rastreamento de ve\xedculos"],
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
                ]),
                r = {
                    M: "Masculino",
                    F: "Feminino"
                },
                i = new Map([
                    ["CPF", {
                        title: "CPF consultado",
                        maskedDocument: function(e) {
                            return (0, a.Oy)(e)
                        }
                    }],
                    ["CNPJ", {
                        title: "CNPJ consultado",
                        maskedDocument: function(e) {
                            return (0, a.kE)(e)
                        }
                    }]
                ]),
                s = 5,
                c = "#E6F7F2",
                u = "#FBEAEC",
                d = "#F4F5F9",
                l = "#FFF9E6",
                p = new Map([
                    ["household_activity", "Empresas com atividade semelhante no endere\xe7o"],
                    ["household", "Empresas com qualquer atividade no mesmo endere\xe7o"],
                    ["rfcontact", "Empresas com o mesmo contato na Receita Federal"],
                    ["owners", "Empresas com o mesmo quadro societ\xe1rio"],
                    ["legal_representative", "Empresas com o mesmo representante legal"]
                ]),
                m = 21,
                f = {
                    "SOCIEDADE ANONIMA ABERTA": "Sociedade an\xf4nima aberta",
                    "SOCIEDADE ANONIMA LIMITADA": "Sociedade an\xf4nima limitada",
                    "EMPRESARIO (INDIVIDUAL)": "Empres\xe1rio individual",
                    "SOCIEDADE EMPRESARIA LIMITADA": "Sociedade empres\xe1ria limitada"
                },
                _ = new Map([
                    ["ATIVA", c],
                    ["INATIVA", u]
                ])
        },
        25502: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return o
                },
                a: function() {
                    return a
                }
            });
            var a = function(e) {
                    var n = e.toUpperCase().replace(/[^a-zA-Z0-9-]/g, "").replace(/^([a-zA-Z]{3})([0-9][0-9]+)$/, "$1-$2"),
                        t = n.includes("-") ? 8 : 7;
                    return n.substring(0, t)
                },
                o = function(e) {
                    var n = e.replace(/-/g, "");
                    return /^[A-Z]{3}[0-9]{4}$/.test(n) || function(e) {
                        return /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/.test(e)
                    }(n)
                }
        },
        40094: function(e, n, t) {
            t.d(n, {
                Db: function() {
                    return u
                },
                Ds: function() {
                    return i
                },
                KI: function() {
                    return d
                },
                M6: function() {
                    return s
                },
                Me: function() {
                    return l
                },
                R8: function() {
                    return c
                },
                Xx: function() {
                    return a
                },
                sW: function() {
                    return r
                },
                x7: function() {
                    return o
                }
            });
            var a = new Map([
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
                o = new Map([
                    ["EMPTY_ERROR", "*Por favor, preencha o campo para realizar sua consulta."],
                    ["DOCUMENT_ERROR", "*Por favor, se certifique de que esse \xe9 um documento v\xe1lido."],
                    ["TERMS_ACCEPTED_ERROR", "*Voc\xea precisa selecionar o campo de termos de uso para dar continuidade a sua consulta."],
                    ["EMPTY_QUERY", "Selecione pelo menos uma consulta"]
                ]),
                r = new Map([
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
                i = [{
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
                s = (new Map([
                    ["household_activity", "Economic_Group_Activities_Same_Address"],
                    ["household", " Economic_Group_Same_Address"],
                    ["rfcontact", "Economic_Group_Same Contact_FR"],
                    ["owners", " Economic_Group_Same_Ownership_Partners"],
                    ["legal_representative", " Economic_Group_Same_Legal_Representatives"]
                ]), 5),
                c = ["relationship_tree", "professional_data", "personal_data", "company_information", "company_partnership", "vehicle_data", "trademarks"],
                u = {
                    PERSONAL_DATA: "personal_data",
                    LIST_VEHICLES: "list_vehicles",
                    COMPANY_INFORMATION: "company_information",
                    COMPANY_PARTNERSHIP: "company_partnership",
                    VEHICLE_DATA: "vehicle_data",
                    RELATIONSHIP_TREE: "relationship_tree",
                    CREDIT_RESTRICTION: "credit_restriction",
                    LAWSUIT: "lawsuit",
                    TRADEMARKS: "trademarks",
                    PROFESSIONAL_DATA: "professional_data",
                    CPF_REGISTRATION_STATUS: "cpf_registration_status",
                    ECONOMIC_GROUP: "economic_group",
                    VEHICLE_TRACKING: "vehicle_tracking"
                },
                d = {
                    economic_group: "Informa\xe7\xf5es b\xe1sicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informa\xe7\xf5es operacionais e financeiras e CNAE(s)",
                    cpf_registration_status: "Nome, situa\xe7\xe3o cadastral, data de nascimento e da inscri\xe7\xe3o do CPF e verifica\xe7\xe3o de \xf3bito",
                    trademarks: "Lista de marcas e patentes com status e datas de dep\xf3sito, publica\xe7\xe3o, validade, concess\xe3o e efeito",
                    professional_data: "Situa\xe7\xe3o atual, faixa salarial hist\xf3rica, ocupa\xe7\xf5es ativas, hist\xf3rico de ocupa\xe7\xf5es e tempo de experi\xeancia",
                    personal_data: "Nome, nome da m\xe3e, g\xeanero, data de nascimento, endere\xe7o(s), telefone(s) e e-mail(s)",
                    lawsuit: "Processos vinculados ao documento e informa\xe7\xf5es das partes envolvidas",
                    relationship_tree: "Nome, nome da m\xe3e, telefone(s), e-mail(s), endere\xe7o(s) e nome e documento de familiares, s\xf3cio(s) e empresa(s)",
                    list_vehicles: "Lista de ve\xedculos encontrados com suas especifica\xe7\xf5es de placa, marca, modelo, ano, cor e localidade",
                    vehicle_data: "Valor da PIFE, marca, modelo, ano, Renavam, combust\xedvel, localiza\xe7\xe3o e dados do propriet\xe1rio",
                    company_partnership: "Valor da PIFE, marca, modelo, ano, Renavam, combust\xedvel, localiza\xe7\xe3o e dados do propriet\xe1rio",
                    company_information: "Raz\xe3o social, nome fantasia, natureza jur\xeddica, situa\xe7\xe3o cadastral, capital social, endere\xe7o(s), CNAE(s), quadro societ\xe1rio e data de in\xedcio da atividade",
                    credit_restriction: "Ocorr\xeancias, pend\xeancias financeiras, cheques sem fundo, CADIN e protestos totais",
                    household_activity: "Informa\xe7\xf5es b\xe1sicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informa\xe7\xf5es operacionais e financeiras e CNAE(s)",
                    household: "Informa\xe7\xf5es b\xe1sicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informa\xe7\xf5es operacionais e financeiras e CNAE(s)",
                    rfcontact: "Informa\xe7\xf5es b\xe1sicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informa\xe7\xf5es operacionais e financeiras e CNAE(s)",
                    owners: "Informa\xe7\xf5es b\xe1sicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informa\xe7\xf5es operacionais e financeiras e CNAE(s)",
                    legal_representative: "Informa\xe7\xf5es b\xe1sicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informa\xe7\xf5es operacionais e financeiras e CNAE(s)",
                    vehicle_tracking: "Lista de capturas do ve\xedculo com fotos, local, data e hora "
                },
                l = {
                    cpf_registration_status: "Consultar agora por 1 cr\xe9dito",
                    trademarks: "Consultar agora por 1 cr\xe9dito",
                    professional_data: "Consultar agora por 1 cr\xe9dito",
                    personal_data: "Consultar agora por 1 cr\xe9dito",
                    lawsuit: "Consultar agora por 1 cr\xe9dito",
                    relationship_tree: "Consultar agora por 3 cr\xe9ditos",
                    list_vehicles: "Consultar agora por 5 cr\xe9ditos",
                    vehicle_data: "Consultar agora por 3 cr\xe9ditos",
                    company_partnership: "Consultar agora por 1 cr\xe9dito",
                    company_information: "Consultar agora por 3 cr\xe9ditos",
                    credit_restriction: "Consultar agora por 3 cr\xe9ditos",
                    vehicle_tracking: "Consultar agora por 5 cr\xe9ditos"
                }
        },
        40612: function(e, n, t) {
            t.d(n, {
                XQ: function() {
                    return i
                },
                ez: function() {
                    return r
                },
                lw: function() {
                    return o
                }
            });
            var a = t(69670),
                o = [{
                    value: "CPF",
                    title: "CPF"
                }, {
                    value: "CNPJ",
                    title: "CNPJ"
                }, {
                    value: "PLATE",
                    title: "Placa"
                }],
                r = [{
                    checked: !1,
                    feature_type_name: "household",
                    universal_price: 1,
                    credits: "1",
                    isUniversal: !1,
                    description: "Rela\xe7\xe3o entre empresas com atividades semelhantes em um mesmo endere\xe7o",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Grupo econ\xf4mico (atividade semelhante no endere\xe7o)",
                    documents: [a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "household_activity",
                    universal_price: 1,
                    credits: "1",
                    isUniversal: !1,
                    description: "Rela\xe7\xe3o entre empresas com qualquer atividade em um mesmo endere\xe7o",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Grupo econ\xf4mico (qualquer atividade no endere\xe7o)",
                    documents: [a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "rfcontact",
                    universal_price: 1,
                    credits: "1",
                    description: "Rela\xe7\xe3o entre empresas com o mesmo contato na Receita Federal",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Grupo econ\xf4mico (mesmo contato na Receita Federal)",
                    isUniversal: !1,
                    documents: [a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "owners",
                    universal_price: 1,
                    credits: "1",
                    description: "Rela\xe7\xe3o entre empresas com o mesmo quadro societ\xe1rio",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Grupo econ\xf4mico (mesmo quadro societ\xe1rio)",
                    isUniversal: !1,
                    documents: [a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "legal_representative",
                    universal_price: 1,
                    credits: "1",
                    description: "Rela\xe7\xe3o entre empresas com o mesmo representante legal",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Grupo econ\xf4mico (mesmo representante legal)",
                    isUniversal: !1,
                    documents: [a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "trademarks",
                    universal_price: 1,
                    credits: "1",
                    description: "Informa\xe7\xf5es e hist\xf3rico de marcas e patentes relacionadas \xe0 pessoa f\xedsica ou jur\xeddica",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Marcas e patentes",
                    isUniversal: !1,
                    documents: [a.d.CPF, a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "lawsuit",
                    universal_price: 1,
                    credits: "1",
                    description: "Informa\xe7\xf5es de processos envolvendo a pessoa f\xedsica ou jur\xeddica",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Processos",
                    isUniversal: !1,
                    documents: [a.d.CPF, a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "relationship_tree",
                    universal_price: 3,
                    credits: "3",
                    description: "Informa\xe7\xf5es de rela\xe7\xf5es familiares e societ\xe1rias da pessoa f\xedsica ou jur\xeddica",
                    text_info_credit: "3 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Relacionamentos",
                    isUniversal: !1,
                    documents: [a.d.CPF, a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "company_information",
                    universal_price: 3,
                    credits: "3",
                    description: "Informa\xe7\xf5es da pessoa jur\xeddica, incluindo CNAEs e quadro societ\xe1rio",
                    text_info_credit: "3 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Dados da empresa",
                    isUniversal: !1,
                    documents: [a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "cpf_registration_status",
                    universal_price: 1,
                    credits: "1",
                    description: "Situa\xe7\xe3o cadastral da pessoa, incluindo \xf3bito, nos registros da Receita Federal",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Situa\xe7\xe3o cadastral",
                    isUniversal: !1,
                    documents: [a.d.CPF]
                }, {
                    checked: !1,
                    feature_type_name: "professional_data",
                    universal_price: 1,
                    credits: "1",
                    description: "Hist\xf3rico atualizado de empregos da pessoa f\xedsica nos registros da Receita Federal e RAIS",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Dados profissionais",
                    isUniversal: !1,
                    documents: [a.d.CPF]
                }, {
                    checked: !1,
                    feature_type_name: "personal_data",
                    universal_price: 1,
                    credits: "1",
                    description: "Informa\xe7\xf5es para localizar a pessoa, como nome completo, endere\xe7o e meios de contato",
                    text_info_credit: "1 cr\xe9dito",
                    onChange: function() {},
                    name_query: "Localiza\xe7\xe3o",
                    isUniversal: !1,
                    documents: [a.d.CPF]
                }, {
                    checked: !1,
                    feature_type_name: "company_partnership",
                    universal_price: 1,
                    credits: "1",
                    description: "Informa\xe7\xf5es de participa\xe7\xf5es societ\xe1rias da pessoa f\xedsica",
                    text_info_credit: "3 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Sociedades",
                    isUniversal: !1,
                    documents: [a.d.CPF]
                }, {
                    checked: !1,
                    feature_type_name: "credit_restriction",
                    universal_price: 3,
                    credits: "3",
                    description: "Informa\xe7\xf5es de cr\xe9dito de pessoas f\xedsicas ou jur\xeddicas em tempo real do Serasa e Boa Vista",
                    text_info_credit: "3 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Restri\xe7\xe3o de cr\xe9dito",
                    isUniversal: !1,
                    documents: [a.d.CPF, a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "list_vehicles",
                    universal_price: 5,
                    credits: "5",
                    description: "Ve\xedculos na base nacional do DETRAN em nome da pessoa f\xedsica ou jur\xeddica",
                    text_info_credit: "5 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Lista de ve\xedculos",
                    isUniversal: !1,
                    documents: [a.d.CPF, a.d.CNPJ]
                }, {
                    checked: !1,
                    feature_type_name: "vehicle_data",
                    universal_price: 3,
                    credits: "3",
                    description: "Valor da PIFE, marca, modelo, ano, Renavam, combust\xedvel, localiza\xe7\xe3o e dados do propriet\xe1rio",
                    text_info_credit: "3 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Dados do ve\xedculo",
                    isUniversal: !1,
                    documents: [a.d.PLATE]
                }, {
                    checked: !1,
                    feature_type_name: "vehicle_tracking",
                    universal_price: 5,
                    credits: "5",
                    description: "Lista de capturas do ve\xedculo com fotos, local, data e hora",
                    text_info_credit: "5 cr\xe9ditos",
                    onChange: function() {},
                    name_query: "Rastreamento de ve\xedculos",
                    isUniversal: !1,
                    documents: [a.d.PLATE]
                }],
                i = ["pending", "error"]
        },
        51091: function(e, n, t) {
            t.d(n, {
                $h: function() {
                    return N
                },
                $q: function() {
                    return p
                },
                AY: function() {
                    return h
                },
                Cq: function() {
                    return I
                },
                Eb: function() {
                    return m
                },
                M0: function() {
                    return C
                },
                OL: function() {
                    return l
                },
                S7: function() {
                    return x
                },
                TI: function() {
                    return P
                },
                TN: function() {
                    return f
                },
                Tq: function() {
                    return A
                },
                Vo: function() {
                    return E
                },
                WA: function() {
                    return d
                },
                Yh: function() {
                    return b
                },
                Yq: function() {
                    return g
                },
                c2: function() {
                    return S
                },
                kR: function() {
                    return _
                },
                nw: function() {
                    return v
                },
                pi: function() {
                    return R
                },
                td: function() {
                    return T
                },
                vt: function() {
                    return u
                },
                vv: function() {
                    return y
                }
            });
            var a = t(60436),
                o = t(89379),
                r = t(92336),
                i = t(91647),
                s = t(95383),
                c = t(58758),
                u = function(e) {
                    return e.sort(function(e, n) {
                        return new Date(n.created_at) - new Date(e.created_at)
                    })
                },
                d = function(e, n, t) {
                    n("QUERY_FORM_MODAL", {
                        queryOption: e,
                        creditAvailable: t
                    })
                },
                l = function(e) {
                    var n = function(e) {
                        return "trademarks" === e.identification || "economic_group" === e.identification
                    }(e);
                    if (!n) return function(e) {
                        return {
                            product_id: e.identification,
                            description: e.description,
                            name: e.name,
                            online: e.online,
                            price: e.price
                        }
                    }(e)
                },
                p = function(e, n, t, a, r) {
                    "economic_group" !== e.identification ? window.analytics.track("Query Performed", (0, o.A)((0, o.A)({}, a), {}, {
                        context_queries: r || "jusfinder"
                    })) : n.forEach(function(e) {
                        window.analytics.track("Query Performed", {
                            query_type: e,
                            document_type: "CNPJ",
                            context_queries: r || "jusfinder"
                        })
                    })
                },
                m = function(e) {
                    return (0, r.A)((0, i.A)(e), "dd/MM/yyyy")
                },
                f = function(e) {
                    switch (e.level) {
                        case "Empregado":
                        case "Empreendedor | Dono de Neg\xf3cio":
                        case "Auto\u0302nomo":
                        case "Dono":
                            return !0;
                        default:
                            return !1
                    }
                },
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e ? e.toLowerCase().split(" ").map(function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }).join(" ") : ""
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (!e) return "";
                    var n = e.toLowerCase().trim();
                    return n.charAt(0).toUpperCase() + n.slice(1)
                },
                h = function(e) {
                    if (!e) return "N\xe3o informado";
                    var n = String(e).replaceAll(/\D/g, "");
                    return /^\d{11}$/.test(n) ? "CPF" : /^\d{14}$/.test(n) ? "CNPJ" : "Inv\xe1lido"
                },
                C = function(e) {
                    return e && "object" === typeof e ? [e.ENDERECO || "Endere\xe7o n\xe3o informado", "".concat(e.CIDADE || "Cidade n\xe3o informada", "/").concat(e.UF || "UF"), e.BAIRRO || "Bairro n\xe3o informado", e.CEP ? (0, s.BX)(String(e.CEP)) : "CEP n\xe3o informado"].join(", ") : "Endere\xe7o n\xe3o informado"
                },
                y = function(e) {
                    var n = String(null !== e && void 0 !== e ? e : "").trim().replace(",", "."),
                        t = Number.parseFloat(n);
                    return Number.isNaN(t) ? "R$ 0,00" : t.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e ? e.includes("0001") ? "-" : m(e) : "N\xe3o informado"
                },
                A = function() {
                    var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return "" === n || "" === t ? "N\xe3o informado" : null === (e = c.XN.get(n)) || void 0 === e ? void 0 : e.maskedDocument(t)
                },
                E = function(e) {
                    if (!e || "object" !== typeof e) return "Endere\xe7o n\xe3o informado";
                    var n = [e.Typology, v(e.AddressMain)].filter(Boolean).join(" ") || "Endere\xe7o n\xe3o informado",
                        t = (null === e || void 0 === e ? void 0 : e.Number) || "N\xfamero n\xe3o informado",
                        a = _(null === e || void 0 === e ? void 0 : e.Neighborhood) || "Bairro n\xe3o informado",
                        o = (null === e || void 0 === e ? void 0 : e.City) || "Cidade n\xe3o informada",
                        r = (null === e || void 0 === e ? void 0 : e.State) || "Estado n\xe3o informado",
                        i = "".concat(o, "/").concat(r),
                        c = "CEP " + ((0, s.BX)(null === e || void 0 === e ? void 0 : e.ZipCode) || "");
                    return "".concat(n, ", ").concat(t, ", ").concat(a, ", ").concat(i, ", ").concat(c)
                },
                P = function(e) {
                    if ("string" !== typeof e) return "";
                    var n = e.replace(/\D/g, "");
                    if (n.length < 7) return e;
                    var t = n.substring(0, 4),
                        a = n.substring(4, 5),
                        o = n.substring(5, 7);
                    return "".concat(t, "-").concat(a, "/").concat(o)
                },
                b = function(e) {
                    var n;
                    return e && Array.isArray(e) ? null === (n = (0, a.A)(e)) || void 0 === n ? void 0 : n.sort(function(e, n) {
                        return parseFloat(n.ParticipationPercentage) - parseFloat(e.ParticipationPercentage)
                    }) : []
                },
                R = function(e) {
                    return e.split("/").map(function(e) {
                        var n = e.trim().toLowerCase();
                        return n.charAt(0).toUpperCase() + n.slice(1)
                    }).join("/")
                },
                N = function(e) {
                    if (!Array.isArray(e) || 0 === e.length) return {
                        maxValue: null,
                        minValue: null
                    };
                    var n = e.map(function(e) {
                        return e.valor
                    });
                    return {
                        maxValue: Math.max.apply(Math, (0, a.A)(n)),
                        minValue: Math.min.apply(Math, (0, a.A)(n))
                    }
                };

            function T(e, n) {
                var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") || "".concat(e, "s");
                return "".concat(n, " ").concat(1 === n ? e : t)
            }
            var S = new Map([
                    ["CPF", {
                        title: "CPF consultado",
                        maskedDocument: function(e) {
                            return (0, s.Oy)(e)
                        }
                    }],
                    ["CNPJ", {
                        title: "CNPJ consultado",
                        maskedDocument: function(e) {
                            return (0, s.kE)(e)
                        }
                    }],
                    ["License Plate", {
                        title: "Placa consultada",
                        maskedDocument: function(e) {
                            return w(e)
                        }
                    }]
                ]),
                k = function(e) {
                    return new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        minimumFractionDigits: 2
                    }).format(e)
                },
                x = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "N\xe3o informado";
                    return e ? e.toLowerCase().split(" ").map(function(e) {
                        return ["s/a", "ltda", "me", "epp"].includes(e) ? e.toUpperCase() : e.charAt(0).toUpperCase() + e.slice(1)
                    }).join(" ") : n
                },
                I = function(e) {
                    var n = (null === e || void 0 === e ? void 0 : e.group) || {},
                        t = function(e, n) {
                            return {
                                label: e,
                                value: n
                            }
                        },
                        a = function() {
                            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                            return {
                                label: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                value: "de ".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", " at\xe9 ").concat(e).concat(n)
                            }
                        };
                    return {
                        companyStatus: [t("Empresas ativas: ", n.total_active_companies), t("Empresas inativas: ", n.total_inactive_companies)],
                        companyType: [t("Sedes: ", n.total_headquarter), t("Filiais: ", n.total_branches)],
                        taxRegime1: [t("Sociedade an\xf4nima aberta: ", n.total_sociedade_anonima_aberta), t("Sociedade an\xf4nima fechada: ", n.total_sociedade_anonima_fechada)],
                        taxRegime2: [t("Sociedade empres\xe1ria limitada: ", n.total_sociedade_empresaria_limitada), t("Associa\xe7\xe3o privada: ", n.total_associacao_privada)],
                        operationalInfo1: [a("Idade das empresas: ", n.min_company_age, n.max_company_age, " anos"), a("S\xf3cios: ", n.min_number_of_owners, n.max_number_of_owners, " s\xf3cios"), a("Funcion\xe1rios: ", n.min_employees_range, n.max_employees_range), a("Sites registrados: ", n.min_sites, n.max_sites, " sites"), a("Lojas MarketPlace: ", n.min_marketplace_stores, n.max_marketplace_stores, " lojas")],
                        operationalInfo2: [a("Faixa da receita: ", n.min_income_range, n.max_income_range), {
                            label: "Faixa de valores declarados: ",
                            value: "de ".concat(k(n.min_declared_value), " at\xe9 ").concat(k(n.max_declared_value))
                        }, t("Total de valores declarados: ", k(n.total_declared_value))],
                        locations: n.state_distribution
                    }
                },
                w = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toUpperCase().replace(/[^a-zA-Z0-9-]/g, "").replace(/^([a-zA-Z]{3})([0-9][0-9]+)$/, "$1-$2"),
                        n = e.includes("-") ? 8 : 7;
                    return e.substring(0, n)
                }
        },
        58758: function(e, n, t) {
            t.d(n, {
                Ab: function() {
                    return c
                },
                HL: function() {
                    return s
                },
                XN: function() {
                    return r
                },
                d6: function() {
                    return u
                },
                zX: function() {
                    return i
                }
            });
            var a = t(95383),
                o = t(84688),
                r = new Map([
                    ["CPF", {
                        title: "CPF consultado",
                        maskedDocument: function(e) {
                            return (0, a.Oy)(e)
                        }
                    }],
                    ["CNPJ", {
                        title: "CNPJ consultado",
                        maskedDocument: function(e) {
                            return (0, a.kE)(e)
                        }
                    }]
                ]),
                i = [{
                    title: "Placa",
                    icon: (0, o.oK)("/media/jusfinder/car-plate.svg")
                }, {
                    title: "Ano/Modelo",
                    icon: (0, o.oK)("/media/jusfinder/model.svg")
                }, {
                    title: "Cidade/UF",
                    icon: (0, o.oK)("/media/jusfinder/city.svg")
                }],
                s = {
                    0: "80px",
                    1: "100px",
                    2: "140px"
                },
                c = "EM_CIRCULACAO",
                u = 578
        },
        67847: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return C
                },
                g: function() {
                    return v
                }
            });
            var a = t(5544),
                o = t(27565),
                r = t(40094),
                i = t(91212),
                s = t(10467),
                c = t(89390),
                u = t(151),
                d = t(12104),
                l = t(88596),
                p = t(97450),
                m = t(85206),
                f = t(38668),
                _ = t(27929),
                v = (0, o.createContext)({}),
                h = {
                    open: !1,
                    type: null,
                    config: {}
                },
                C = function(e) {
                    var n = e.children,
                        t = (0, o.useState)(h),
                        C = (0, a.A)(t, 2),
                        y = C[0],
                        g = C[1],
                        A = (0, o.useState)("query"),
                        E = (0, a.A)(A, 2),
                        P = E[0],
                        b = E[1],
                        R = (0, o.useState)(!1),
                        N = (0, a.A)(R, 2),
                        T = N[0],
                        S = N[1],
                        k = (0, o.useState)([]),
                        x = (0, a.A)(k, 2),
                        I = x[0],
                        w = x[1],
                        F = (0, o.useState)(!1),
                        M = (0, a.A)(F, 2),
                        O = M[0],
                        D = M[1],
                        U = (0, o.useState)(!1),
                        L = (0, a.A)(U, 2),
                        q = L[0],
                        j = L[1],
                        J = (0, o.useState)(!1),
                        z = (0, a.A)(J, 2),
                        V = z[0],
                        G = z[1],
                        B = (0, o.useState)(0),
                        $ = (0, a.A)(B, 2),
                        H = $[0],
                        Q = $[1],
                        Y = (0, o.useState)(!1),
                        X = (0, a.A)(Y, 2),
                        Z = X[0],
                        W = X[1],
                        K = (0, o.useState)([]),
                        ee = (0, a.A)(K, 2),
                        ne = ee[0],
                        te = ee[1],
                        ae = function(e) {
                            var n = (0, c.g)().feature_type_name,
                                t = (0, o.useReducer)(l.I, l.u),
                                r = (0, a.A)(t, 2),
                                _ = r[0],
                                v = r[1],
                                h = (0, m.t)().customers,
                                C = (0, c.W6)(),
                                y = (0, f.lc)().HandleEvent,
                                g = (0, o.useCallback)(function() {
                                    v({
                                        type: "CLOSE_MODAL_CUSTOMER"
                                    }), e(!0)
                                }, [e]),
                                A = (0, o.useCallback)(function(n) {
                                    v({
                                        type: "SET_CUSTOMER",
                                        payload: {
                                            customer: n
                                        }
                                    }), e(!0)
                                }, [v, e]),
                                E = (0, o.useCallback)(function(e) {
                                    return "text" !== _.inputType || e && "" !== (null === e || void 0 === e ? void 0 : e.trim()) ? !("select" !== _.inputType || null !== e && void 0 !== e && e.name) && (v({
                                        type: "SET_ERROR",
                                        payload: {
                                            error: "Selecione um cliente"
                                        }
                                    }), !0) : (v({
                                        type: "SET_ERROR",
                                        payload: {
                                            error: "Preencha o nome do cliente"
                                        }
                                    }), !0)
                                }, [v, _.inputType]),
                                P = (0, o.useCallback)((0, s.A)((0, i.A)().m(function e() {
                                    var t;
                                    return (0, i.A)().w(function(e) {
                                        for (;;) switch (e.p = e.n) {
                                            case 0:
                                                if (!E(_.customer)) {
                                                    e.n = 1;
                                                    break
                                                }
                                                return e.a(2);
                                            case 1:
                                                return e.p = 1, e.n = 2, (0, u.ff)(_.customer);
                                            case 2:
                                                t = e.v, p.oR.success("Cliente criado com sucesso!"), A(t.data), N("select"), y("Create User LinkUser", {
                                                    feature_type_name: n,
                                                    context: "page-result"
                                                }), e.n = 4;
                                                break;
                                            case 3:
                                                e.p = 3, e.v, p.oR.error("Erro ao criar cliente. Tente novamente.");
                                            case 4:
                                                return e.a(2)
                                        }
                                    }, e, null, [
                                        [1, 3]
                                    ])
                                })), [_.customer, E, _.feature_type_name, y]),
                                b = (0, o.useCallback)((0, s.A)((0, i.A)().m(function e() {
                                    return (0, i.A)().w(function(e) {
                                        for (;;) switch (e.p = e.n) {
                                            case 0:
                                                if (!E(_.customer)) {
                                                    e.n = 1;
                                                    break
                                                }
                                                return e.a(2);
                                            case 1:
                                                return e.p = 1, e.n = 2, (0, u.hG)(_.id);
                                            case 2:
                                                p.oR.success("Cliente desvinculado com sucesso!"), g(), y("Unlik User", {
                                                    feature_type_name: n,
                                                    context: "page-result"
                                                }), e.n = 4;
                                                break;
                                            case 3:
                                                e.p = 3, e.v, p.oR.error("Erro ao desvincular cliente. Tente novamente.");
                                            case 4:
                                                return e.a(2)
                                        }
                                    }, e, null, [
                                        [1, 3]
                                    ])
                                })), [_.customer, E, g, _.id, _.feature_type_name, y]),
                                R = (0, o.useCallback)((0, s.A)((0, i.A)().m(function t() {
                                    return (0, i.A)().w(function(t) {
                                        for (;;) switch (t.p = t.n) {
                                            case 0:
                                                if (!E(_.customer)) {
                                                    t.n = 1;
                                                    break
                                                }
                                                return t.a(2);
                                            case 1:
                                                return t.p = 1, t.n = 2, (0, d.X)(_);
                                            case 2:
                                                p.oR.success("Cliente atualizado com sucesso!"), e(!0), g(), y("Update Link User", {
                                                    feature_type_name: n,
                                                    context: "page-result"
                                                }), t.n = 4;
                                                break;
                                            case 3:
                                                t.p = 3, t.v, p.oR.error("Erro ao atualizar cliente. Tente novamente.");
                                            case 4:
                                                return t.a(2)
                                        }
                                    }, t, null, [
                                        [1, 3]
                                    ])
                                })), [e, _, E, g, y]),
                                N = function(e) {
                                    v({
                                        type: "SET_INPUT_TYPE",
                                        payload: {
                                            inputType: e
                                        }
                                    })
                                };
                            return (0, o.useEffect)(function() {
                                v({
                                    type: "SET_ERROR",
                                    payload: {
                                        error: ""
                                    }
                                })
                            }, [_.customer, _.inputType]), {
                                state: _,
                                dispatch: v,
                                closeModalCusTomer: g,
                                onChangeCustomer: A,
                                linkUser: P,
                                updateCustomer: R,
                                customers: h,
                                changeInputType: N,
                                unlinkUser: b,
                                openModalCustomer: function(e, t, a) {
                                    y("Link User", {
                                        query_type: n,
                                        context: "page-result"
                                    }), v({
                                        type: "OPEN_MODAL_CUSTOMER",
                                        payload: {
                                            id: a,
                                            customer: t,
                                            edit: !0,
                                            inputType: e,
                                            feature_type_name: n
                                        }
                                    })
                                },
                                viewClient: function(e) {
                                    y("View Client", {
                                        query_type: n,
                                        context: "page-result"
                                    }), C.push("/clientes/form/".concat(e))
                                }
                            }
                        }(S),
                        oe = ae.openModalCustomer,
                        re = ae.state,
                        ie = ae.closeModalCusTomer,
                        se = ae.onChangeCustomer,
                        ce = ae.linkUser,
                        ue = ae.updateCustomer,
                        de = ae.customers,
                        le = ae.changeInputType,
                        pe = ae.unlinkUser,
                        me = ae.viewClient;
                    return (0, _.jsx)(v.Provider, {
                        value: {
                            modal: y,
                            page: P,
                            setPage: b,
                            openModal: function(e, n) {
                                g({
                                    open: !0,
                                    type: e,
                                    config: n
                                })
                            },
                            closeModal: function() {
                                g(h)
                            },
                            shouldReload: T,
                            setShouldReload: S,
                            fillQueries: function() {
                                w(r.Ds.map(function(e) {
                                    return e.value
                                }))
                            },
                            queries: I,
                            setQueries: w,
                            isLoading: V,
                            setIsLoading: G,
                            modalCheckout: O,
                            setModalCheckout: D,
                            loadingModalCheckout: q,
                            setLoadingModalCheckout: j,
                            creditAvailable: H,
                            setCreditAvailable: Q,
                            modalSuggestion: Z,
                            setModalSuggestion: W,
                            dataQueries: ne,
                            setDataQueries: te,
                            openModalCustomer: oe,
                            state: re,
                            closeModalCusTomer: ie,
                            onChangeCustomer: se,
                            linkUser: ce,
                            updateCustomer: ue,
                            customers: de,
                            changeInputType: le,
                            unlinkUser: pe,
                            viewClient: me
                        },
                        children: n
                    })
                }
        },
        69670: function(e, n, t) {
            t.d(n, {
                d: function() {
                    return a
                }
            });
            var a = {
                CPF: "CPF",
                CNPJ: "CNPJ",
                PLATE: "PLATE"
            }
        },
        85206: function(e, n, t) {
            t.d(n, {
                t: function() {
                    return r
                }
            });
            var a = t(27565),
                o = t(73933),
                r = function() {
                    var e = (0, o.d4)(function(e) {
                            var n;
                            return null === e || void 0 === e || null === (n = e.app) || void 0 === n ? void 0 : n.customers
                        }),
                        n = (0, o.wA)();
                    return (0, a.useEffect)(function() {
                        n({
                            type: "LOAD_CUSTOMERS"
                        })
                    }, []), {
                        customers: e
                    }
                }
        },
        88596: function(e, n, t) {
            t.d(n, {
                I: function() {
                    return r
                },
                u: function() {
                    return o
                }
            });
            var a = t(89379),
                o = {
                    modalCustomer: !1,
                    customer: null,
                    id: null,
                    edit: !1,
                    error: null,
                    inputType: "select",
                    feature_type_name: ""
                },
                r = function(e, n) {
                    var t, r, i, s;
                    switch (n.type) {
                        case "OPEN_MODAL_CUSTOMER":
                            return (0, a.A)((0, a.A)({}, e), {}, {
                                modalCustomer: !0,
                                id: n.payload.id,
                                edit: n.payload.edit || !1,
                                customer: n.payload.customer || null,
                                inputType: n.payload.inputType || "select",
                                feature_type_name: n.payload.feature_type_name || ""
                            });
                        case "CLOSE_MODAL_CUSTOMER":
                            return (0, a.A)({}, o);
                        case "SET_CUSTOMER":
                            return (0, a.A)((0, a.A)({}, e), {}, {
                                customer: null === (t = n.payload) || void 0 === t ? void 0 : t.customer
                            });
                        case "SET_ERROR":
                            return (0, a.A)((0, a.A)({}, e), {}, {
                                error: null === (r = n.payload) || void 0 === r ? void 0 : r.error
                            });
                        case "SET_INPUT_TYPE":
                            return (0, a.A)((0, a.A)({}, e), {}, {
                                inputType: (null === (i = n.payload) || void 0 === i ? void 0 : i.inputType) || "select",
                                customer: "text" === (null === (s = n.payload) || void 0 === s ? void 0 : s.inputType) ? "" : e.customer
                            });
                        default:
                            return e
                    }
                }
        },
        90531: function(e, n, t) {
            t.d(n, {
                Bt: function() {
                    return l
                },
                Q6: function() {
                    return p
                },
                T5: function() {
                    return c
                },
                ph: function() {
                    return u
                },
                td: function() {
                    return d
                },
                zo: function() {
                    return s
                }
            });
            var a = t(89379),
                o = t(60436),
                r = t(40612),
                i = t(96907),
                s = function(e) {
                    return r.ez.filter(function(n) {
                        return e.includes(n.feature_type_name)
                    }).reduce(function(e, n) {
                        var t;
                        return e + (null !== (t = n.universal_price) && void 0 !== t ? t : 0)
                    }, 0)
                },
                c = function(e) {
                    return r.ez.filter(function(n) {
                        return (Array.isArray(n.documents) ? n.documents : [n.documents]).includes(e)
                    })
                },
                u = function(e, n) {
                    return e.includes(n) ? e.filter(function(e) {
                        return e !== n
                    }) : [].concat((0, o.A)(e), [n])
                };

            function d(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "".concat(e, "s");
                return "".concat(n, " ").concat(1 === n ? e : t)
            }
            var l = function(e, n) {
                    return c(e).map(function(e) {
                        var t = null === n || void 0 === n ? void 0 : n.find(function(n) {
                                return n.identification === e.feature_type_name
                            }),
                            o = i.aD.includes(e.feature_type_name),
                            r = null === n || void 0 === n ? void 0 : n.find(function(e) {
                                return "economic_group" === e.identification
                            }),
                            s = o ? null === r || void 0 === r ? void 0 : r.credit : null === t || void 0 === t ? void 0 : t.credit,
                            c = o ? null === r || void 0 === r ? void 0 : r.price : null === t || void 0 === t ? void 0 : t.price;
                        return (0, a.A)((0, a.A)({}, e), {}, {
                            valueCredits: s,
                            price: c,
                            text_info_credit: "".concat(d("cr\xe9dito", s, "cr\xe9ditos"), " dispon\xedveis")
                        })
                    })
                },
                p = function(e) {
                    return e === i.d3.PLATE ? "Placa" : e
                }
        },
        96907: function(e, n, t) {
            t.d(n, {
                MU: function() {
                    return c
                },
                NG: function() {
                    return p
                },
                Sr: function() {
                    return u
                },
                Tw: function() {
                    return s
                },
                aD: function() {
                    return d
                },
                d3: function() {
                    return r.d
                },
                sK: function() {
                    return i
                },
                vd: function() {
                    return l
                }
            });
            var a = t(95383),
                o = t(25502),
                r = t(69670),
                i = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSez6w7IdP7956J-_h_ygOHoMrvQDh8bndePUegei5Vywq-r8g/viewform?usp=send_form",
                s = new Map([
                    ["relationship_tree", "https://jusfy-reports.s3.us-east-2.amazonaws.com/ab91a2f2-642b-4d00-a6f4-15a000d83672.pdf"],
                    ["professional_data", "https://jusfy-reports.s3.us-east-2.amazonaws.com/9c64c655-bddb-45a8-811e-db30e34c6a39.pdf"],
                    ["lawsuit", "https://jusfinder.com.br/processos/12345678901"],
                    ["personal_data", "https://jusfy-reports.s3.us-east-2.amazonaws.com/2d29b82d-757e-4875-9adf-06c2d35dad23.pdf"],
                    ["list_vehicles", "https://jusfy-reports.s3.us-east-2.amazonaws.com/fd892ff5-51b1-450f-83a1-9a92aaa9db16.pdf"],
                    ["credit_restriction", "https://jusfy-reports.s3.us-east-2.amazonaws.com/c90f0ab4-fa03-4afb-a437-11473342dc7b.pdf"],
                    ["company_information", "https://jusfy-reports.s3.us-east-2.amazonaws.com/6a6564cf-0aae-45b1-89fb-c70dd388586a.pdf"],
                    ["company_partnership", "https://jusfy-reports.s3.us-east-2.amazonaws.com/cf66e220-ee13-480f-ab63-71a719d19645.pdf"],
                    ["vehicle_data", "https://jusfy-reports.s3.us-east-2.amazonaws.com/f38db798-59f0-4c46-ab65-579961990a85.pdf"],
                    ["trademarks", "https://jusfy-reports.s3.us-east-2.amazonaws.com/3eabbdd4-c250-4ffd-acc7-b73938caecac.pdf"],
                    ["cpf_registration_status", "https://jusfy-reports.s3.us-east-2.amazonaws.com/6e2b2e14-bac4-4b86-bf53-fe1ba2bb95e0.pdf"],
                    ["economic_group", "https://jusfy-reports.s3.us-east-2.amazonaws.com/eaa0c046-b09e-4b9b-bf1f-51aa783aa5ed.pdf"],
                    ["vehicle_tracking", "https://jusfy-reports.s3.us-east-2.amazonaws.com/bdaa383e-6c6f-40eb-b32a-33a3d1786193.pdf"]
                ]),
                c = new Map([
                    [r.d.CPF, a.Oy],
                    [r.d.CNPJ, a.kE],
                    [r.d.PLATE, o.a]
                ]),
                u = new Map([
                    [r.d.CPF, "Digite um CPF v\xe1lido"],
                    [r.d.CNPJ, "Digite um CNPJ v\xe1lido"],
                    [r.d.PLATE, "Digite uma placa v\xe1lida (ABC-1234 ou ABC1D23)"],
                    ["TERMS", "*Voc\xea precisa selecionar o campo de termos de uso para dar continuidade a consulta."]
                ]),
                d = ["household_activity", "household", "rfcontact", "owners", "legal_representative"],
                l = 13,
                p = {
                    SUCCESS: "success",
                    ERROR: "error",
                    INFO: "info",
                    WARNING: "warning",
                    PENDING: "pending"
                }
        },
        98222: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var a, o = t(57528),
                r = t(42506).default.div(a || (a = (0, o.A)(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  padding: 24px;\n  gap: ", ";\n  border-radius: 7px;\n  border: 1px solid #ebedf3;\n  background: #ffffff;\n"])), function(e) {
                    var n = e.sWidth;
                    return n || "100%"
                }, function(e) {
                    var n = e.sHeight;
                    return null !== n && void 0 !== n ? n : "fit-content"
                }, function(e) {
                    var n = e.gap;
                    return null !== n && void 0 !== n ? n : "16px"
                }),
                i = t(27929),
                s = function(e) {
                    var n = e.children,
                        t = e.sWidth,
                        a = e.sHeight,
                        o = e.gap;
                    return (0, i.jsx)(r, {
                        sWidth: t,
                        sHeight: a,
                        gap: o,
                        children: n
                    })
                }
        }
    }
]);
//# sourceMappingURL=8160.804eaac1.chunk.js.map