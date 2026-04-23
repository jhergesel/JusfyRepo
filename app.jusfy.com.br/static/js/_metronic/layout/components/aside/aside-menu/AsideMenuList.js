/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import {
    useEffect,
    useState,
    useRef
} from "react";
import {
    useHistory
} from "react-router-dom";
import {
    useSelector,
    shallowEqual
} from "react-redux";
import {
    useLocation
} from "react-router";
import {
    NavLink
} from "react-router-dom";
import {
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";
import useFeatureFlag from "../../../../../app/hooks/useFeatureFlag";
import useFeatureFlagWithContext from "../../../../../app/hooks/useFeatureFlagWithContext";
import useUserFeatureFlag from "../../../../../app/hooks/useUserFeatureFlag/index.js";
import {
    checkIsActive,
    toAbsoluteUrl
} from "../../../../_helpers";
import ModalCalculo from "./ModalCalculo";
import ModalPayment from "../../../../../app/pages/JusZap/components/ConfigurationForm/ModalPayment";
import ModalLoading from "../../../../../app/pages/JusZap/components/ConfigurationForm/ModalLoading";
import {
    FEATURE_FLAGS
} from "../../../../../app/constants/FeatureFlag";
import {
    ROUTES_PATH
} from "../../../../../app/constants/Routes";
import {
    NAVIGATION_TABS
} from "../../../../../app/pages/flat/Deadlines/constants.js";
import {
    getConfigEmail
} from "../../../../../app/pages/JusSpace/api";
import {
    checkJusZapCheckoutStatus,
    juszapCheckout
} from "../../../../../app/pages/JusZap/api/juszapConfiguration";
import {
    toast
} from "react-toastify";
import * as S from "./AsideMenuList.styles";
import {
    useUserPreferences
} from "../../../../../app/services/userPreferences";
import {
    trackMenuItemSelected
} from "../../../../../app/components/core/layout/Sidebar/trackMenuEvents";
import {
    GroupIdEnum
} from "../../../../../app/modules/Segment/types";
import {
    NewMenuBanner
} from "./NewMenuBanner";
import {
    MENU_VERSION_VALUES
} from "../../../../../app/services/userPreferences/types";
import {
    SettingsGridOutlineIcon,
    IdOutlineIcon
} from "../../../../../app/components/core/icons";
import useSubscriptionOrCredits from "../../../../../app/hooks/useSubscriptionOrCredits";

export function AsideMenuList({
    layoutProps,
    isMinimized,
    onMinimize
}) {
    const location = useLocation();
    const authToken = useSelector(state => state.auth.authToken);
    const user = useSelector(state => state.auth.user, shallowEqual);
    const subscription = useSelector(state => state.subscription);
    const history = useHistory();
    const juszapConfiguration = useSelector(
        state => state.app.juszap_configuration
    );
    const [domain, setDomain] = useState(null);
    const [isNovoCalculoOpen, setIsNovoCalculoOpen] = useState(false);

    // Estados para modal de pagamento do JusZap
    const modalLoadingRef = useRef(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [isJuszapExpired, setIsJuszapExpired] = useState(false);

    const {
        isRestricted,
        isLoading,
        hasJusProcessos
    } = useSubscriptionOrCredits();

    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url) ?
            ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted` :
            "";
    };

    const mayUseJusdecision = useSelector(
        state => state.auth.user.may_use_jusdecision
    );

    const mayUseJusAgenda = useSelector(
        state => state.auth.user.may_use_jusagenda
    );

    const {
        isFeatureFlagEnable
    } = useFeatureFlag(
        FEATURE_FLAGS.PERMISSION.LAWSUIT_MONITORING
    );

    const {
        isFeatureFlagEnable: DeadlineNewMenuFeatureFlag
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.DEADLINES_NEW_MENU
    );
    const {
        isFeatureFlagEnable: isNewSidebarBannerEnabled
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.NEW_SIDEBAR_BANNER
    );
    const {
        isFeatureFlagEnable: enabledBatchQueries
    } = useUserFeatureFlag(
        FEATURE_FLAGS.PERMISSION.ENABLED_BATCHQUERIES
    );
    const {
        isFeatureFlagEnable: enableSubuserCreation
    } =
    useFeatureFlagWithContext(
        FEATURE_FLAGS.PERMISSION.ENABLE_SUBUSER_CREATION, {
            plan: subscription ? .subscription_status ? .info ? .plan
        }
    );

    const rolloutContext =
        user ? .user_created_at && user ? .email ?
        {
            registeredAt: new Date(user.user_created_at).getTime(),
            email: user.email,
        } :
        {};
    const {
        isFeatureFlagEnable: isInNewSidebarRollout
    } =
    useFeatureFlagWithContext(
        FEATURE_FLAGS.RELEASE.NEW_SIDEBAR_ROLLOUT,
        rolloutContext
    );

    const {
        preferences: {
            menuVersion
        },
        isLoading: isPreferencesLoading
    } = useUserPreferences();

    const {
        BASE,
        BASE_V2,
        LAWSUITS,
        DEADLINES,
        SUBSCRIPTION,
    } = ROUTES_PATH.LAWSUIT_MONITOR;

    const isLawsuitsActive = getMenuItemActive(`${BASE}${LAWSUITS}`, false) || getMenuItemActive(`${BASE_V2}${LAWSUITS}`, false);
    const isSubscriptionActive = getMenuItemActive(
        `${BASE}${SUBSCRIPTION}`,
        false
    );

    const handleClickJusMail = () => {
        trackMenuItemSelected({
            groupId: GroupIdEnum.JUSMAIL_GROUP,
            itemName: "JusMail",
            categoryParent: "Ferramentas",
            menuVersion: "v1",
        });
        if (domain) {
            window.analytics.track("JusSpace Email Access Clicked", {
                context: "main-menu",
            });
            history.push("/jusmail-redirect");
            return;
        }
        window.analytics.track("JusMail Button Clicked", {
            context: "main-menu",
        });
        history.push("/space/domain");
    };

    const handleClickJusZap = () => {
        trackMenuItemSelected({
            groupId: GroupIdEnum.JUSZAP_GROUP,
            itemName: "JusZap",
            categoryParent: "Ferramentas",
            menuVersion: "v1",
        });
        window.analytics.track("JusZap Button Clicked", {
            context: "main-menu",
        });

        // Se expirado, abre modal de pagamento
        if (isJuszapExpired) {
            window.analytics.track("JusZap Expired - Payment Modal Opened", {
                context: "main-menu",
            });
            setShowPaymentModal(true);
            return;
        }

        if (juszapConfiguration ? .hasConfiguration) {
            history.push("/space/whatsapp");
            return;
        }
        history.push("/assistente-whatsapp");
    };



    // Handler para submeter pagamento do JusZap
    const handleJuszapPaymentSubmit = async (card_id) => {
        const businessName = juszapConfiguration ? .configuration ? .name || '';

        setShowPaymentModal(false);
        setShowLoadingModal(true);

        if (modalLoadingRef.current) {
            modalLoadingRef.current.setType("configuration");
        }

        try {
            await juszapCheckout(authToken, {
                name: businessName.trim(),
                email: user.email,
                card_id,
                payment_method: 'CREDIT_CARD'
            });

            window.analytics.track("JusZap Renewal Created", {
                business_name: businessName.trim(),
                context: 'main-menu'
            });

            if (modalLoadingRef.current) {
                modalLoadingRef.current.setType('complete');
            }

            // Atualizar estado de expirado
            setIsJuszapExpired(false);

            setTimeout(() => {
                history.push('/space/whatsapp');
            }, 2000);
        } catch (error) {
            console.error('Erro ao renovar:', error);

            window.analytics.track("JusZap Renewal Error", {
                error_message: error ? .message || 'Unknown error',
                context: 'main-menu'
            });

            if (modalLoadingRef.current) {
                modalLoadingRef.current.setError();
            }

            toast.error('Erro ao processar pagamento. Tente novamente.');

            setTimeout(() => {
                setShowLoadingModal(false);
            }, 3000);
        }
    };

    const handleCloseLoadingModal = () => {
        setShowLoadingModal(false);
    };

    const handleLoadingModalComplete = () => {
        history.push('/space/whatsapp');
    };

    // Verificar se JusZap está expirado
    useEffect(() => {
        const checkJuszapExpired = async () => {
            if (authToken && juszapConfiguration ? .hasConfiguration) {
                try {
                    const {
                        data: checkoutStatus
                    } = await checkJusZapCheckoutStatus(authToken);
                    const status = juszapConfiguration ? .configuration ? .status;
                    if (checkoutStatus ? .expired === true && status !== 'CANCELLED') {
                        setIsJuszapExpired(true);
                    } else {
                        setIsJuszapExpired(false);
                    }
                } catch (error) {
                    console.error('Erro ao verificar status do checkout:', error);
                }
            }
        };
        checkJuszapExpired();
    }, [authToken, juszapConfiguration ? .hasConfiguration, juszapConfiguration ? .configuration ? .status]);

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const {
                    data
                } = await getConfigEmail(authToken);
                setDomain(data);
            } catch (err) {
                console.error("Error fetching statistics:", err);
            }
        };

        fetchStatistics();
    }, [authToken]);

    const isMenuItemDisabled = () => {
        return isRestricted && !isLoading;
    };

    const renderMenuItem = config => {
        const {
            to,
            children,
            onClick = null,
            disabled = false,
            className = "menu-link",
            tooltipText = null,
            trackMenuClick = null,
        } = config;

        const isMenuDisabled = isMenuItemDisabled();
        const isDisabled = disabled || isMenuDisabled;

        if (isDisabled) {
            if (tooltipText && disabled && !isMenuDisabled) {
                return ( <
                    OverlayTrigger placement = "right"
                    overlay = { < Tooltip > {
                            tooltipText
                        } < /Tooltip>} >
                        <
                        a
                        href = "#"
                        className = {
                            `${className} disabled`
                        }
                        style = {
                            {
                                opacity: 0.5,
                                cursor: "not-allowed",
                            }
                        }
                        onClick = {
                            event => event.preventDefault()
                        } >
                        {
                            children
                        } <
                        /a> <
                        /OverlayTrigger>
                    );
                }

                return ( <
                    a href = "#"
                    className = {
                        `${className} disabled`
                    }
                    style = {
                        {
                            opacity: 0.5,
                            cursor: "not-allowed",
                        }
                    }
                    onClick = {
                        event => event.preventDefault()
                    } >
                    {
                        children
                    } <
                    /a>
                );
            }

            if (onClick) {
                return ( <
                    a className = {
                        className
                    }
                    href = "#"
                    onClick = {
                        event => {
                            event.preventDefault();
                            if (trackMenuClick) {
                                trackMenuItemSelected({
                                    groupId: trackMenuClick.groupId,
                                    itemName: trackMenuClick.itemName,
                                    categoryParent: trackMenuClick.categoryParent,
                                    menuVersion: "v1",
                                });
                            }
                            onClick();
                        }
                    } >
                    {
                        children
                    } <
                    /a>
                );
            }

            if (trackMenuClick) {
                return ( <
                    NavLink className = {
                        className
                    }
                    to = {
                        to
                    }
                    onClick = {
                        () =>
                        trackMenuItemSelected({
                            groupId: trackMenuClick.groupId,
                            itemName: trackMenuClick.itemName,
                            categoryParent: trackMenuClick.categoryParent,
                            menuVersion: "v1",
                        })
                    } >
                    {
                        children
                    } <
                    /NavLink>
                );
            }

            return ( <
                NavLink className = {
                    className
                }
                to = {
                    to
                } > {
                    children
                } <
                /NavLink>
            );
        };

        const monitoringMenuItem = ( <
            >
            <
            li className = "divider mt-5" > JUSPROCESSOS < /li>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive(
          `${BASE}${DEADLINES}`,
          false
        )}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: `${BASE}${DEADLINES}/${NAVIGATION_TABS.LIST}`,
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/flat/alarm.svg")
                        }
                        alt = "Meus prazos"
                        width = "24px"
                        height = "24px" /
                        >
                        <
                        S.Content isNew = {
                            DeadlineNewMenuFeatureFlag
                        } >
                        <
                        span > Meus prazos < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Prazos",
                        categoryParent: "JUSPROCESSOS",
                        groupId: GroupIdEnum.DEADLINES_GROUP
                    },
                })
            } <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${isLawsuitsActive} ${isSubscriptionActive}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: `${BASE}${
            hasJusProcessos || isFeatureFlagEnable ? LAWSUITS : SUBSCRIPTION
          }`,
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/flat/file-box.svg")
                        }
                        alt = "Meus processos"
                        width = "24px"
                        height = "24px" /
                        >
                        <
                        S.Content >
                        <
                        span > Meus processos < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Processos",
                        categoryParent: "JUSPROCESSOS",
                        groupId: GroupIdEnum.JUSPROCESSOS_GROUP
                    },
                })
            } <
            /S.Tools> <
            />
        );
        const jusfinder = ( <
            >
            <
            li className = "divider mt-5" > JUSFINDER < /li>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive(`/jusfinder/query`, false)}`
            }
            aria - haspopup = "true" >
            <
            NavLink className = "menu-link"
            to = {
                `/jusfinder/query`
            }
            onClick = {
                () =>
                trackMenuItemSelected({
                    groupId: GroupIdEnum.JUSFINDER_GROUP,
                    itemName: "Consultas jurídicas",
                    categoryParent: "JUSFINDER",
                    menuVersion: "v1",
                })
            } >
            <
            S.Icon src = {
                toAbsoluteUrl("/media/sidebar/Jusfinder.svg")
            }
            alt = "Consultas"
            width = "24px"
            height = "24px" /
            >
            <
            S.Content isNew = {
                DeadlineNewMenuFeatureFlag
            } >
            <
            span > Consultas < /span> <
            /S.Content> <
            /NavLink> <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive(
          "/jusfinder/history_batch",
          false
        )}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/jusfinder/history_batch",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/consulta-lote.svg")
                        }
                        alt = "Meus processos"
                        width = "24px"
                        height = "24px" /
                        >
                        <
                        S.Content >
                        <
                        span > Consultas em lote < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Consultas em lote",
                        categoryParent: "JUSFINDER",
                        groupId: GroupIdEnum.JUSFINDER_GROUP
                    },
                })
            } <
            /S.Tools> <
            />
        );

        return ( <
            >
            <
            ModalCalculo isOpen = {
                isNovoCalculoOpen
            }
            close = {
                () => setIsNovoCalculoOpen(false)
            }
            />

            { /* Modal Payment JusZap */ } <
            ModalPayment isOpen = {
                showPaymentModal
            }
            closeModal = {
                () => setShowPaymentModal(false)
            }
            onSubmit = {
                handleJuszapPaymentSubmit
            }
            />

            { /* Modal Loading JusZap */ } <
            ModalLoading ref = {
                modalLoadingRef
            }
            isOpen = {
                showLoadingModal
            }
            onComplete = {
                handleLoadingModalComplete
            }
            closeModal = {
                handleCloseLoadingModal
            }
            />

            <
            S.BtnCalculator className = "tour-novo-calculo btn btn-primary novo-calculo"
            id = "btn-novo-calculo"
            to = "/calculadoras"
            type = "button"
            isMinimized = {
                isMinimized
            }
            style = {
                isMenuItemDisabled() ? {
                    opacity: 0.5,
                    pointerEvents: "none"
                } : {}
            } >
            NOVO CÁLCULO <
            /S.BtnCalculator>

            { /* begin::Menu Nav */ } <
            S.MenuList className = {
                `menu-nav ${layoutProps.ulClasses}`
            } >
            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/dashboard", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/dashboard",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/inicio.svg")
                        }
                        alt = "Início" /
                        >
                        <
                        span className = "uppercase" > Início < /span> <
                        />
                    ),
                    className: "menu-link uppercase",
                    trackMenuClick: {
                        itemName: "Início",
                        categoryParent: null,
                        groupId: GroupIdEnum.GENERAL_GROUP
                    },
                })
            } <
            /S.Tools>

            <
            S.MenuListCollapse className = "menu-item menu-item-submenu" >
            <
            a href = "#"
            className = "menu-link menu-toggle my-office" >
            <
            span > Meu Escritório < /span> <
            i className = "menu-arrow" > < /i> <
            /a> <
            div className = "menu-submenu" >
            <
            i className = "menu-arrow" > < /i> <
            ul className = "menu-subnav" >
            <
            li className = {
                `menu-item ${getMenuItemActive("/clientes", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/clientes",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/clientes.svg")
                        }
                        alt = "Clientes" /
                        >
                        <
                        span > Clientes < /span> <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Clientes",
                        categoryParent: "Meu Escritório",
                        groupId: GroupIdEnum.CLIENTS_GROUP
                    },
                })
            } <
            /li>

            <
            li className = {
                `menu-item ${getMenuItemActive("/calculos", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/calculos",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/calculos.svg")
                        }
                        alt = "Calculos" /
                        >
                        <
                        span > Cálculos < /span> <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Calculadoras",
                        categoryParent: "Meu Escritório",
                        groupId: GroupIdEnum.CALCULATORS_GROUP
                    },
                })
            } <
            /li>

            <
            li className = {
                `menu-item ${getMenuItemActive("/usuarios", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/usuarios",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/subusuarios.svg")
                        }
                        alt = "Sub-usuários" /
                        >
                        <
                        span > Subusuários < /span> <
                        />
                    ),
                    className: "menu-link",
                    disabled: !enableSubuserCreation,
                    tooltipText: !enableSubuserCreation ?
                        "Esta funcionalidade não está disponível em seu plano" :
                        null,
                    trackMenuClick: {
                        itemName: "Usuários",
                        categoryParent: "Meu Escritório",
                        groupId: GroupIdEnum.SUBUSERS_GROUP
                    },
                })
            } <
            /li> <
            /ul> <
            /div> <
            /S.MenuListCollapse>

            {
                monitoringMenuItem
            }

            {
                enabledBatchQueries && jusfinder
            }

            <
            li className = "divisor__collapsed" > < /li>

            <
            li className = "divider mt-5 new-feature" >
            JUSFY PAY <
            /li>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/jusfypay/dashboard", false)}`
            }
            aria - haspopup = "true" > {
                renderMenuItem({
                    to: "/jusfypay/dashboard",
                    children: ( <
                        >
                        <
                        SettingsGridOutlineIcon size = {
                            25
                        }
                        color = "#898989" / >
                        <
                        S.Content > < span > Dashboard financeiro < /span></S.Content >
                        <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Dashboard financeiro",
                        categoryParent: "Jusfy Pay",
                        groupId: GroupIdEnum.JUSFYPAY_GROUP
                    },
                })
            } <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/jusfypay/payment-links", false)}`
            }
            aria - haspopup = "true" > {
                renderMenuItem({
                    to: "/jusfypay/payment-links",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/flat/link-chain.svg")
                        }
                        alt = "Link de cobrança"
                        width = {
                            25
                        }
                        /> <
                        S.Content > < span > Links de cobrança < /span></S.Content >
                        <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Links de cobrança",
                        categoryParent: "Jusfy Pay",
                        groupId: GroupIdEnum.JUSFYPAY_GROUP
                    },
                })
            } <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/jusfypay/payments", false)}`
            }
            aria - haspopup = "true" > {
                renderMenuItem({
                    to: "/jusfypay/payments",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/svg/dollar-coin.svg")
                        }
                        alt = "Pagamentos"
                        width = {
                            25
                        }
                        /> <
                        S.Content > < span > Pagamentos < /span></S.Content >
                        <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Pagamentos",
                        categoryParent: "Jusfy Pay",
                        groupId: GroupIdEnum.JUSFYPAY_GROUP
                    },
                })
            } <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/jusfypay/wallet", false)}`
            }
            aria - haspopup = "true" > {
                renderMenuItem({
                    to: "/jusfypay/wallet",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/flat/money-wallet-open.svg")
                        }
                        alt = "Minha carteira"
                        width = {
                            25
                        }
                        /> <
                        S.Content > < span > Minha carteira < /span></S.Content >
                        <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Minha carteira",
                        categoryParent: "Jusfy Pay",
                        groupId: GroupIdEnum.JUSFYPAY_GROUP
                    },
                })
            } <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/jusfypay/profile", false)}`
            }
            aria - haspopup = "true" > {
                renderMenuItem({
                    to: "/jusfypay/profile",
                    children: ( <
                        >
                        <
                        IdOutlineIcon size = {
                            25
                        }
                        color = "#898989" / >
                        <
                        S.Content > < span > Minha conta Jusfy Pay < /span></S.Content >
                        <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "Minha conta Jusfy Pay",
                        categoryParent: "Jusfy Pay",
                        groupId: GroupIdEnum.JUSFYPAY_GROUP
                    },
                })
            } <
            /S.Tools>

            { /*end::1 Level*/ } <
            li className = "divider mt-5" > Ferramentas < /li>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/gpt", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/gpt",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/jusgpt.svg")
                        }
                        alt = "JusGPT" /
                        >
                        <
                        S.Content >
                        <
                        span > JusGPT < /span> <
                        span > Inteligência Artificial < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link",
                    trackMenuClick: {
                        itemName: "IA da Jusfy",
                        categoryParent: "Ferramentas",
                        groupId: GroupIdEnum.JUSGPT_GROUP
                    },
                })
            } <
            /S.Tools>



            { /*begin::1 Level*/ } <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/assistente-whatsapp", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "#",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/assistente-whatsapp.svg")
                        }
                        alt = "IA WhatsApp" /
                        >
                        <
                        S.Content messagesCount = {
                            juszapConfiguration ? .conversationMeta ? .all_count
                        } >
                        <
                        span > IA WhatsApp < /span> <
                        span > Assistente Virtual < /span> <
                        /S.Content> <
                        />
                    ),
                    onClick: handleClickJusZap,
                    className: "menu-link",
                })
            } <
            /S.Tools>

            <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/space/domain", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "#",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/jusmail.svg")
                        }
                        alt = "JusMail" /
                        >
                        <
                        S.Content >
                        <
                        span > JusMail < /span> <
                        span > E - mail profissional < /span> <
                        /S.Content> <
                        />
                    ),
                    onClick: handleClickJusMail,
                    className: "menu-link tour-mail",
                })
            } <
            /S.Tools>

            { /*begin::1 Level - JusCont*/ } <
            S.Tools className = {
                `menu-item menu-new ${getMenuItemActive("/contabilidade", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/contabilidade",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/contabilidade.svg")
                        }
                        alt = "Contabilidade" /
                        >
                        <
                        S.Content isNew >
                        <
                        span > Contabilidade < /span> <
                        span > Seu CNPJ < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link",
                })
            } <
            /S.Tools> { /*end::1 Level - JusCont*/ }

            { /*begin::1 Level*/ } <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/oportunidades", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/oportunidades",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/Jusmatch.svg")
                        }
                        alt = "JusMatch" /
                        >
                        <
                        S.Content >
                        <
                        span > JusMatch < /span> <
                        span > Oportunidades < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link tour-oportunidades",
                    trackMenuClick: {
                        itemName: "Prospecção de clientes",
                        categoryParent: "Ferramentas",
                        groupId: GroupIdEnum.JUSMATCH_GROUP
                    },
                })
            } <
            /S.Tools> { /*end::1 Level*/ }

            {
                !enabledBatchQueries && ( <
                    S.Tools className = {
                        `menu-item  ${getMenuItemActive(
              "/jusfinder/query",
              false
            )}`
                    }
                    aria - haspopup = "true" >
                    <
                    NavLink className = "menu-link tour-jusfinder"
                    to = "/jusfinder/query"
                    onClick = {
                        () =>
                        trackMenuItemSelected({
                            groupId: GroupIdEnum.JUSFINDER_GROUP,
                            itemName: "Consultas jurídicas",
                            categoryParent: "Ferramentas",
                            menuVersion: "v1",
                        })
                    }
                    style = {
                        isMenuItemDisabled() ?
                        {
                            opacity: 0.5,
                            pointerEvents: "none"
                        } :
                        {}
                    } >
                    <
                    S.Icon src = {
                        toAbsoluteUrl("/media/sidebar/Jusfinder.svg")
                    }
                    alt = "JusFinder" /
                    >
                    <
                    S.Content >
                    <
                    span > JusFinder < /span> <
                    span > Consultas < /span> <
                    /S.Content> <
                    /NavLink> <
                    /S.Tools>
                )
            }

            { /*begin::1 Level*/ } {
                mayUseJusdecision ? ( <
                    S.Tools className = {
                        `menu-item ${getMenuItemActive(
              "/jurisprudencia",
              false
            )}`
                    }
                    aria - haspopup = "true" >
                    {
                        renderMenuItem({
                            to: "/jurisprudencia",
                            children: ( <
                                >
                                <
                                S.Icon src = {
                                    toAbsoluteUrl("/media/sidebar/Jusdecision.svg")
                                }
                                alt = "JusDecision" /
                                >
                                <
                                S.Content >
                                <
                                span > JusDecision < /span> <
                                span > Jurisprudências < /span> <
                                /S.Content> <
                                />
                            ),
                            className: "menu-link tour-jurisprudencias",
                            trackMenuClick: {
                                itemName: "JusDecision",
                                categoryParent: "Ferramentas",
                                groupId: GroupIdEnum.JUSDECISION_GROUP
                            },
                        })
                    } <
                    /S.Tools>
                ) : null
            } { /*end::1 Level*/ }

            { /*begin::1 Level*/ } <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/assinaturas", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/assinaturas/form",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/Jussign.svg")
                        }
                        alt = "JusSign" /
                        >
                        <
                        S.Content >
                        <
                        span > JusSign < /span> <
                        span > Assinaturas < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link tour-peticoes",
                    trackMenuClick: {
                        itemName: "Assinatura digital",
                        categoryParent: "Ferramentas",
                        groupId: GroupIdEnum.PETITIONS_GROUP
                    },
                })
            } <
            /S.Tools> { /*end::1 Level*/ }

            { /*begin::1 Level*/ } <
            S.Tools className = {
                `menu-item ${getMenuItemActive("/peticoes", false)}`
            }
            aria - haspopup = "true" >
            {
                renderMenuItem({
                    to: "/peticoes",
                    children: ( <
                        >
                        <
                        S.Icon src = {
                            toAbsoluteUrl("/media/sidebar/Jusfile.svg")
                        }
                        alt = "JusFile" /
                        >
                        <
                        S.Content >
                        <
                        span > JusFile < /span> <
                        span > Petições < /span> <
                        /S.Content> <
                        />
                    ),
                    className: "menu-link tour-peticoes",
                    trackMenuClick: {
                        itemName: "Modelos de petição",
                        categoryParent: "Ferramentas",
                        groupId: GroupIdEnum.PETITIONS_GROUP
                    },
                })
            } <
            /S.Tools>

            {
                mayUseJusAgenda ? ( <
                    S.Tools className = {
                        `menu-item ${getMenuItemActive("/agenda", false)}`
                    }
                    aria - haspopup = "true" >
                    {
                        renderMenuItem({
                            to: "/agenda",
                            children: ( <
                                >
                                <
                                S.Icon src = {
                                    toAbsoluteUrl("/media/sidebar/Jusagenda.svg")
                                }
                                alt = "JusAgenda" /
                                >
                                <
                                S.Content >
                                <
                                span > JusAgenda < /span> <
                                span > Agenda < /span> <
                                /S.Content> <
                                />
                            ),
                            className: "menu-link tour-agenda",
                            trackMenuClick: {
                                itemName: "Agenda",
                                categoryParent: "Ferramentas",
                                groupId: GroupIdEnum.DEADLINES_GROUP
                            },
                        })
                    } <
                    /S.Tools>
                ) : null
            }

            {
                menuVersion === MENU_VERSION_VALUES.v1 && isNewSidebarBannerEnabled && isInNewSidebarRollout && !isMinimized && !isPreferencesLoading && ( <
                    S.BannerListItem >
                    <
                    NewMenuBanner / >
                    <
                    /S.BannerListItem>
                )
            } <
            /S.MenuList> <
            />
        );
    }