/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import crypto from "crypto-js";
import React, {
    useEffect
} from "react";
import {
    shallowEqual,
    useDispatch,
    useSelector
} from "react-redux";
import {
    Redirect,
    Route,
    Switch,
    useLocation
} from "react-router-dom";
import {
    checkPathnameIncludes
} from "../_metronic/_helpers/Pages";
import {
    ContentRoute,
    Layout,
    LayoutSplashScreen
} from "../_metronic/layout";
import BasePage from "./BasePage";
import SupportAlert from "./components/SupportAlert";
import {
    Logout
} from "./modules/Auth";
import * as auth from "./modules/Auth/_redux/authRedux";
import AuthCommunity from "./modules/Auth/pages/AuthCommunity/index";
import {
    AuthPage
} from "./modules/Auth/pages/AuthPage";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";
import PasswordReset from "./modules/PasswordReset";
import {
    PaymentLink
} from "./modules/PaymentLink";
import RequestPasswordReset from "./modules/RequestPasswordReset";
import Simulation from "./modules/Simulation";
import Validation from "./modules/Validation";
import Register from "./pages/Cadastro";

import CompleteProfile from "./pages/CompleteProfile";
import {
    JusfyPdf
} from "./pages/JusfyPdf";
import JusMailRedirect from "./pages/JusMailRedirect";
import ProfileSurvey from "./pages/ProfileSurvey";
import JusZapPage from "./pages/JusZapPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RelationQuery from "./pages/RelationQuery";
import {
    SocketProvider
} from "./modules/SocketProvider";
import {
    RealtimeNotificationsProvider
} from "./modules/RealtimeNotificationsProvider";
import {
    useUserPreferences
} from "./services/userPreferences";

function getPeriodicityDescription(periodicity) {
    switch (true) {
        case periodicity <= 30:
            return "Mensal";
        case periodicity <= 90:
            return "Trimestral";
        case periodicity <= 180:
            return "Semestral";
        case periodicity <= 365:
            return "Anual";
        case periodicity <= 730:
            return "Bianual";
        case periodicity <= 1095:
            return "Trianual";
        default:
            return "Período não definido";
    }
}

function usePageViews() {
    const location = useLocation();
    const {
        preferences
    } = useUserPreferences();
    const user = useSelector(state => state.auth.user);
    const subscriptionStatus = useSelector(
        state => state ? .subscription ? .subscription_status
    );
    const group = useSelector(state => state ? .app ? .group ? .name ? ? "Sem grupo");

    useEffect(() => {
        const isLogout = window.location.pathname === "/logout";

        if (isLogout) {
            return;
        }

        if (
            user &&
            user.id !== undefined &&
            user.email !== undefined &&
            user.client_id !== undefined &&
            user.name !== undefined &&
            subscriptionStatus.plan_details !== undefined
        ) {
            let extra_info = {
                name: user.name,
                email: user.email,
                client_id: user.client_id,
                plan_name: subscriptionStatus.plan_details.name,
            };

            if (user.created_at !== undefined) {
                extra_info.created_at = user.created_at;
            }
            window.analytics.identify(user.id, extra_info);

            const appCuesUserData = {
                nome: user.name ? ? "sem nome",
                email: user.email ? ? "sem email",
                codigo_usuario: user.client_id ? ? 0,
                plano: subscriptionStatus.plan_details ? .name ? ? "sem plano",
                grupo: group ? ? "",
                periodicidade: getPeriodicityDescription(
                    subscriptionStatus.plan_details ? .periodicity ? ? 0
                ),
                trial_days: subscriptionStatus.plan_details ? .trial_days ? ? 0,
                erro_pagamento: subscriptionStatus.info ? .has_error ? "sim" : "nao",
                fim_periodo: subscriptionStatus.info ? .current_period_end ? ? null,
                inicio_periodo: subscriptionStatus.info ? .current_period_start ? ? null,
                situacao: user.subscription_status ? ? null,
                meio_de_pagamento: subscriptionStatus.info ? .payment_method ? ? null,
                ultima_atualizacao: subscriptionStatus.info ? .latest_update ? ? null,
                data_de_criacao: user.created_at ? ? null,
                sub_usuario: user.role === "client" ? "nao" : "sim",
                menu_version: preferences.menuVersion,
                dashboard_version: preferences.dashboardVersion,
            };
            window.Appcues ? .identify ? .(user.id, appCuesUserData);
        }
        /*
        window.analytics.page(location.pathname, {
          name: location.pathname,
        });
        */
    }, [location, user]);
}

export function Routes() {
    usePageViews();
    const dispatch = useDispatch();
    const location = useLocation();
    const pathname = location.pathname;
    const search = location.search;

    const isImpersonate = pathname === "/auth/impersonate";

    const {
        isAuthorized,
        authToken,
        warnings
    } = useSelector(
        ({
            auth
        }) => ({
            isAuthorized: auth.user != null,
            authToken: auth.authToken,
            warnings: auth.user ? .warnings,
        }),
        shallowEqual
    );

    useEffect(() => {
        if (isAuthorized && warnings ? .length > 0) {
            dispatch({
                type: auth.actionTypes.UserRequested
            });
        }
    }, []);

    const isCommunity = search.includes("sso") && search.includes("sig");

    useEffect(() => {
        if (isCommunity) {
            dispatch({
                type: auth.actionTypes.SetOrigin,
                payload: "community",
            });
        }
    }, [dispatch, isCommunity]);

    const subscriptionStatus = useSelector(state => state.auth ? .user);
    const haveClient = subscriptionStatus ? .role === "external_user";

    useEffect(() => {
        const ROUTES_WITH_BUILD_VALIDATION = [
            "/dashboard",
            "/jusfinder",
            "/peticoes",
            "/oportunidades",
            "/agenda",
            "/assinaturas/form",
        ];

        const validateBuildHash = async () => {
            try {
                const manifestResponse = await fetch("/asset-manifest.json", {
                    cache: "no-store",
                });
                if (!manifestResponse.ok) {
                    return;
                }
                const manifest = await manifestResponse.text();

                const hashHex = crypto.SHA256(manifest).toString(crypto.enc.Hex);

                const cachedHash = localStorage.getItem("buildHash");

                if (cachedHash !== hashHex) {
                    dispatch({
                        type: auth.actionTypes.UserRequested,
                        payload: {
                            callback: () => {
                                localStorage.setItem("buildHash", hashHex);
                            },
                        },
                    });
                }
            } catch (error) {
                console.error("Falha ao validar o hash do build:", error);
            }
        };

        if (isAuthorized && checkPathnameIncludes(ROUTES_WITH_BUILD_VALIDATION)) {
            validateBuildHash();
        }
    }, [dispatch, isAuthorized, pathname]);

    return ( <
        Switch >
        <
        Route path = "/request_password_reset"
        component = {
            RequestPasswordReset
        }
        /> <
        Route path = "/password_reset/:token"
        component = {
            PasswordReset
        }
        /> <
        Route path = "/validation/:token"
        component = {
            Validation
        }
        /> <
        Route path = "/simulation"
        component = {
            Simulation
        }
        /> <
        Route path = "/privacidade-ia-whatsapp"
        component = {
            PrivacyPolicy
        }
        /> <
        Route path = "/ia-assistente-whatsapp"
        component = {
            JusZapPage
        }
        />

        <
        Route path = "/register/:redirect?"
        render = {
            props => < Register { ...props
            }
            />} /
            >
            <
            Route
            path = "/register-cep/:redirect?"
            render = {
                props => ( <
                    Redirect to = {
                        props.match ? .params ? .redirect ?
                        `/register/${props.match.params.redirect}${props.location.search}` :
                        `/register${props.location.search}`
                    }
                    />
                )
            }
            />



            <
            Route path = "/complete_profile"
            component = {
                SupportAlert
            }
            /> <
            Route path = "/chore/complete_profile"
            component = {
                CompleteProfile
            }
            /> <
            Route path = "/pdf"
            component = {
                JusfyPdf
            }
            /> <
            Route
            path = "/relation_query/:document_type/:id"
            component = {
                RelationQuery
            }
            />

            <
            Route path = "/profile/survey"
            component = {
                ProfileSurvey
            }
            />

            {
                isCommunity ? ( <
                    Route path = "/community"
                    component = {
                        AuthCommunity
                    }
                    />
                ) : null
            }

            <
            Route path = "/jusmail-redirect"
            component = {
                JusMailRedirect
            }
            />

            <
            ContentRoute path = "/payment-link/:link"
            component = {
                PaymentLink
            }
            />

            <
            Route path = "/auth/impersonate"
            component = {
                AuthPage
            }
            />

            <
            Route
            path = "/auth"
            render = {
                () => {
                    if (isImpersonate || !isAuthorized) {
                        return <AuthPage / > ;
                    }

                    return <Redirect to = "/" / > ;
                }
            }
            />

            <
            Route path = "/error"
            component = {
                ErrorsPage
            }
            /> <
            Route path = "/logout"
            component = {
                Logout
            }
            /> {
                haveClient ? ( <
                    Redirect to = "/chore/complete_profile?compra_garantida=true" / >
                ) : null
            } {
                isAuthorized ? ( <
                    SocketProvider >
                    <
                    RealtimeNotificationsProvider >
                    <
                    Layout >
                    <
                    BasePage / >
                    <
                    /Layout> <
                    /RealtimeNotificationsProvider> <
                    /SocketProvider>
                ) : authToken ? ( <
                    LayoutSplashScreen / >
                ) : ( <
                    Redirect to = "/auth/login" / >
                )
            } <
            /Switch>
        );
    }