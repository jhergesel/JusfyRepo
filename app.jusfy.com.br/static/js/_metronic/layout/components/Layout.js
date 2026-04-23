import objectPath from "object-path";
import {
    useEffect,
    useMemo,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    useLocation
} from "react-router-dom";
import Sidebar from "../../../app/components/core/layout/Sidebar/Sidebar";
import {
    SIDEBAR_MOBILE_BREAKPOINT,
    SIDEBAR_WIDTH
} from "../../../app/components/core/layout/Sidebar/styles";
import ImpersonateBanner from "../../../app/components/ImpersonateBanner";
import {
    ModalErrorPayment
} from "../../../app/components/ModalErrorPayment";
import ModalOffer from "../../../app/components/ModalOffer";
import ModalRequestAddress from "../../../app/components/ModalRequestAddress";
import ModalSubscriptionReached from "../../../app/components/ModalSubscriptionReached";
import {
    FEATURE_FLAGS
} from "../../../app/constants/FeatureFlag";
import {
    ROUTES_PATH
} from "../../../app/constants/Routes";
import {
    SUBSCRIPTION_STATUS
} from "../../../app/constants/subscriptionStatus";
import useFeatureFlag from "../../../app/hooks/useFeatureFlag";
import * as auth from "../../../app/modules/Auth/_redux/authRedux";
import {
    checkPathnameIncludes
} from "../../_helpers/Pages";
import {
    useHtmlClassService
} from "../_core/MetronicLayout";
import {
    Aside
} from "./aside/Aside";
import ConfettiShower from "./ConfettiShower";
import {
    Footer
} from "./footer/Footer";
import {
    HeaderMobile
} from "./header-mobile/HeaderMobile";
import {
    Header
} from './header/Header';
import {
    LayoutInit
} from './LayoutInit';
import GamificationListener from "../../../app/components/GamificationListener";
import TaskCompletionListener from '../../../app/components/TaskCompletionListener';
import {
    useUserPreferences
} from '../../../app/services/userPreferences';
import {
    MENU_VERSION_VALUES
} from "../../../app/services/userPreferences/types";
import {
    useSidebarMobile
} from "../../../app/components/core/layout/Sidebar/hooks";
import {
    SidebarContentOffsetProvider
} from "../../../app/contexts/SidebarContentOffsetContext";
import {
    AnimateLoading
} from "../../_partials/controls";

export function Layout({
    children
}) {
    const {
        isFeatureFlagEnable: enableRequestAddress
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.ENABLE_REQUEST_ADDRESS,
    );
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const subscription_error = useSelector(
        (state) => state.subscription.subscription_error,
    );
    const [modalRequest, setModalRequest] = useState(false);
    const subscription = useSelector(
        (state) => state.subscription.subscription_status.info,
    );

    const {
        isFeatureFlagEnable: isNewSidebarFlagEnabled
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.NEW_SIDEBAR
    );
    const {
        preferences: {
            menuVersion
        },
    } = useUserPreferences();
    const isNewSidebarEnabled = menuVersion === MENU_VERSION_VALUES.v2 && isNewSidebarFlagEnabled;

    const isAsideMinimized = useSelector((state) => state.layout.isAsideMinimized);
    const [asideWidth, setAsideWidth] = useState(isAsideMinimized ? 0 : SIDEBAR_WIDTH);

    const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
    const isAsideHiddenByBreakpoint = useSidebarMobile(SIDEBAR_MOBILE_BREAKPOINT);

    const steps = useSelector((state) => state ? .app ? .first_steps);

    const impersonateExpiresAt = useSelector(
        (state) => state.auth.impersonateExpiresAt,
    );
    const impersonateAdminEmail = useSelector(
        (state) => state.auth.impersonateAdminEmail,
    );

    const handleEndImpersonateSession = () => {
        dispatch(auth.actions.logout());
    };

    useEffect(() => {
        if (user ? .should_fill_data && enableRequestAddress) {
            const closedAt = localStorage.getItem('modal_request_address_closed_at');
            if (closedAt) {
                const now = new Date().getTime();
                const twentyFourHours = 24 * 60 * 60 * 1000;
                const timeDiff = now - parseInt(closedAt, 10);

                if (timeDiff < twentyFourHours) {
                    setModalRequest(false);
                    return;
                }
            }

            setModalRequest(true);
        } else {
            setModalRequest(false);
        }
    }, [user ? .should_fill_data, enableRequestAddress]);

    useEffect(() => {
        if (user.use_credits) {
            dispatch({
                type: "LOAD_CREDITS_RESUME",
                payload: {
                    clientId: user.id
                },
            });
        }

        dispatch({
            type: 'LOAD_SUBSCRIPTION_STATUS',
            payload: {
                callback: (provider) => {
                    dispatch(auth.actions.updateUserProvider(provider));
                },
            },
        });
    }, []);

    useEffect(() => {
        if (subscription_error) {
            setIsModalErrorOpen(true);
        } else {
            setIsModalErrorOpen(false);
        }
    }, [subscription_error]);

    useEffect(() => {
        if (
            [
                SUBSCRIPTION_STATUS.UNPAID,
                SUBSCRIPTION_STATUS.WAITING_PAYMENT,
                SUBSCRIPTION_STATUS.PENDING_PAYMENT,
            ].includes(subscription ? .status)
        ) {
            dispatch({
                type: 'FORCE_LOAD_SUBSCRIPTION_STATUS',
                payload: {
                    values: {
                        subscription_id: subscription ? .subscription_id,
                    },
                },
            });
        }
    }, [subscription ? .status]);

    const closeErrorModal = () => {
        setIsModalErrorOpen(false);
        dispatch({
            type: 'CLEAR_SUBSCRIPTION_ERROR'
        });
    };

    const location = useLocation();

    const hasProfileSurveyOrigin = location ? .state ? .origin === '/profile/survey';

    const uiService = useHtmlClassService();

    const layoutProps = useMemo(() => {
        const asideBaseWidth = objectPath.get(
            uiService.config,
            'aside.self.base.width',
        );
        const asideMinimizeWidth = objectPath.get(
            uiService.config,
            'aside.self.minimize.width',
        );

        let contentContainerClasses = uiService.getClasses(
            'content_container',
            true,
        );

        if (isNewSidebarEnabled) {
            contentContainerClasses = contentContainerClasses
                .split(' ')
                .filter((cls) => cls !== 'mt-50')
                .join(' ');
        }

        return {
            layoutConfig: uiService.config,
            selfLayout: objectPath.get(uiService.config, 'self.layout'),
            asideDisplay: objectPath.get(uiService.config, 'aside.self.display'),
            subheaderDisplay: objectPath.get(uiService.config, 'subheader.display'),
            desktopHeaderDisplay: objectPath.get(
                uiService.config,
                'header.self.fixed.desktop',
            ),
            contentCssClasses: uiService.getClasses('content', true),
            contentContainerClasses: contentContainerClasses,
            contentExtended: objectPath.get(uiService.config, 'content.extended'),
            asideBaseWidth: asideBaseWidth || 275,
            asideMinimizeWidth: asideMinimizeWidth || 70,
        };
    }, [uiService, isNewSidebarEnabled]);

    const PAGES_WIHTOUT_LAYOUT_INITIALIZATION = [
        '/dashboard',
        '/jusfinder',
        '/processual_query',
        '/jusfypay',
        '/gpt/business',
        ROUTES_PATH.LAWSUIT_MONITOR.BASE,
        ROUTES_PATH.LAWSUIT_MONITOR.BASE_V2,
    ];

    useEffect(() => {
        if (isNewSidebarEnabled) {
            document.body.classList.add('new-sidebar-enabled');
            ['data-offcanvas-aside', 'data-offcanvas-aside-offcanvas-default'].forEach((attr) => {
                document.body.removeAttribute(attr);
            });
        } else {
            document.body.classList.remove('new-sidebar-enabled');
            document.body.setAttribute('data-offcanvas-aside', 'true');
            document.body.setAttribute('data-offcanvas-aside-offcanvas-default', 'true');
        }
        return () => document.body.classList.remove('new-sidebar-enabled');
    }, [isNewSidebarEnabled]);

    useEffect(() => {
        if (!isNewSidebarEnabled) {
            if (!layoutProps.asideDisplay || isAsideHiddenByBreakpoint) {
                setAsideWidth(0);
                document.body.classList.remove('aside-minimize');
                return;
            }

            setAsideWidth(isAsideMinimized ? layoutProps.asideMinimizeWidth : layoutProps.asideBaseWidth);

            if (isAsideMinimized) {
                document.body.classList.add('aside-minimize');
            } else {
                document.body.classList.remove('aside-minimize');
            }
        } else {
            setAsideWidth(SIDEBAR_WIDTH);
            document.body.classList.remove('aside-minimize');
        }
        return () => {
            // Keep new-sidebar-enabled class lifecycle in its dedicated effect.
            // Removing it here on resize causes mobile wrapper offsets to break.
            document.body.classList.remove('aside-minimize');
        };
    }, [isNewSidebarEnabled, isAsideMinimized, layoutProps.asideDisplay, layoutProps.asideBaseWidth, layoutProps.asideMinimizeWidth, isAsideHiddenByBreakpoint]);

    const isNewSidebarMobile = isNewSidebarEnabled && isAsideHiddenByBreakpoint;
    const wrapperClassName = [
        'd-flex flex-column flex-row-fluid wrapper',
        isNewSidebarEnabled && 'new-sidebar',
        isNewSidebarMobile && 'kt_wrapper--mobile',
    ].filter(Boolean).join(' ');
    const wrapperStyle = {
        marginLeft: isNewSidebarMobile ? undefined : `${asideWidth}px`,
        paddingLeft: 0,
    };

    return layoutProps.selfLayout !== 'blank' ? ( <
        > {
            hasProfileSurveyOrigin && steps ? .USER_PROFILE ? ( <
                ConfettiShower / >
            ) : null
        }

        <
        ModalOffer / >
        <
        ModalSubscriptionReached / >
        <
        GamificationListener / >
        <
        TaskCompletionListener / >
        <
        ModalErrorPayment isOpen = {
            isModalErrorOpen
        }
        onClose = {
            closeErrorModal
        }
        onSupportClick = {
            () =>
            window.open('https://wa.me/5511933304069', '_blank')
        }
        /> <
        ModalRequestAddress isOpen = {
            modalRequest
        }
        onClose = {
            () => setModalRequest(false)
        }
        /> {
            !isNewSidebarEnabled && < HeaderMobile / >
        } <
        div className = "d-flex flex-column flex-root" >
        <
        div className = "d-flex flex-row flex-column-fluid page" > {
            isNewSidebarEnabled ? ( <
                Sidebar onWidthChange = {
                    setAsideWidth
                }
                />
            ) : (
                layoutProps.asideDisplay && < Aside / >
            )
        }

        <
        div className = {
            wrapperClassName
        }
        id = "kt_wrapper"
        style = {
            wrapperStyle
        } >
        <
        SidebarContentOffsetProvider value = {
            isNewSidebarEnabled ? asideWidth : undefined
        } >
        <
        AnimateLoading / > {!isNewSidebarEnabled && < Header / >
        }

        {
            !checkPathnameIncludes(PAGES_WIHTOUT_LAYOUT_INITIALIZATION) ? ( <
                div id = "kt_content"
                className = {
                    `content ${layoutProps.contentCssClasses} d-flex flex-column flex-column-fluid`
                } >
                {!layoutProps.contentExtended && ( <
                        div className = "d-flex flex-column-fluid" >
                        <
                        div className = {
                            layoutProps.contentContainerClasses
                        } > {
                            children
                        } <
                        /div> <
                        /div>
                    )
                }

                {
                    layoutProps.contentExtended && children
                } <
                /div>
            ) : ( <
                > {
                    children
                } < />
            )
        }

        <
        Footer / >
        <
        /SidebarContentOffsetProvider> <
        /div> <
        /div> <
        /div>

        <
        LayoutInit / >

        {
            impersonateExpiresAt && ( <
                ImpersonateBanner adminEmail = {
                    impersonateAdminEmail
                }
                formattedExpiration = {
                    new Date(impersonateExpiresAt).toLocaleString(
                        'pt-BR',
                    )
                }
                onEndSession = {
                    handleEndImpersonateSession
                }
                />
            )
        } <
        />
    ) : (
        // BLANK LAYOUT
        <
        div className = "d-flex flex-column flex-root" > {
            children
        } < /div>
    );
}