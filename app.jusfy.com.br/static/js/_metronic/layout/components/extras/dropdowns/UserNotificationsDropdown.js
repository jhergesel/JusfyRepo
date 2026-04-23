/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import {
    Badge,
    Icon
} from "@material-ui/core";
import objectPath from "object-path";
import React, {
    useEffect,
    useMemo,
    useState
} from "react";
import {
    Dropdown,
    Nav,
    OverlayTrigger,
    Tab,
    Tooltip
} from "react-bootstrap";
import SVG from "react-inlinesvg";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    toAbsoluteUrl
} from "../../../../_helpers";
import {
    DropdownTopbarItemToggler
} from "../../../../_partials/dropdowns";
import {
    useHtmlClassService
} from "../../../_core/MetronicLayout";

import ModalNotification from "../../../../../app/components/ModalNotification";
import {
    EventsSegment
} from "../../../../../app/helpers/EventsSegmentsCalculators";

import * as S from "./UserNotificationsDropdown.styles";

const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false,
};

export function UserNotificationsDropdown() {
    const dispatch = useDispatch();

    const notifications = useSelector(state => state.app.notifications);

    const [isModalNotificationOpen, setIsModalNotificationOpen] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const newNotifications = notifications.filter(
        ({
            status
        }) => status === "sent"
    );

    const hasNewNotifications = Boolean(newNotifications.length);

    const [showPulse, setShowPulse] = useState(false);

    const [key, setKey] = useState("Notifications");
    const {
        HandleEvent
    } = EventsSegment();

    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            offcanvas: objectPath.get(uiService.config, "extras.notifications.layout") ===
                "offcanvas",
        };
    }, [uiService]);

    useEffect(() => {
        dispatch({
            type: "LOAD_NOTIFICATIONS",
        });
    }, []);

    const onNotificationRead = id => {
        dispatch({
            type: "SET_NOTIFICATIONS_READ",
            payload: {
                id,
            },
        });

        setTimeout(() => {
            dispatch({
                type: "LOAD_NOTIFICATIONS",
                payload: {},
            });
        }, 2000);
    };

    const openNotification = notification => {
        setSelectedNotification(notification);
        setIsModalNotificationOpen(true);

        onNotificationRead(notification.id);
    };

    useEffect(() => {
        if (hasNewNotifications) {
            setShowPulse(true);
            return;
        }

        setShowPulse(false);
    }, [hasNewNotifications, setShowPulse]);

    return ( <
        >
        <
        ModalNotification notification = {
            selectedNotification
        }
        isOpen = {
            isModalNotificationOpen
        }
        close = {
            () => setIsModalNotificationOpen(false)
        }
        /> <
        a href = "https://help.jusfy.com.br/pt-BR"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "topbar-item"
        onClick = {
            () =>
            HandleEvent("Help Center URL Clicked", {
                context: "header",
            })
        } >
        <
        OverlayTrigger placement = "bottom"
        overlay = { <
            Tooltip id = "user-notification-tooltip" > Central de ajuda < /Tooltip>
        } >
        <
        div className = "btn btn-icon btn-clean btn-lg mr-1 pulse pulse-primary"
        id = "kt_quick_notifications_toggle" >
        <
        span className = "svg-icon svg-icon-primary " >
        <
        SVG src = {
            toAbsoluteUrl("/media/faq.svg")
        }
        /> <
        /span> <
        /div> <
        /OverlayTrigger> <
        /a>

        {
            layoutProps.offcanvas && ( <
                div className = "topbar-item" >
                <
                div className = "btn btn-icon btn-clean btn-lg mr-1 pulse pulse-primary"
                id = "kt_quick_notifications_toggle" >
                <
                span className = "svg-icon svg-icon-xl svg-icon-primary" >
                <
                SVG src = {
                    toAbsoluteUrl("/media/svg/icons/Code/Compiling.svg")
                }
                /> <
                /span> <
                span className = "pulse-ring" > < /span> <
                /div> <
                /div>
            )
        } {
            !layoutProps.offcanvas && ( <
                Dropdown drop = "down"
                align = "end" >
                <
                Dropdown.Toggle as = {
                    DropdownTopbarItemToggler
                }
                id = "kt_quick_notifications_toggle" >
                <
                OverlayTrigger placement = "bottom"
                overlay = { <
                    Tooltip id = "user-notification-tooltip" > Notificações < /Tooltip>
                } >
                <
                div className = "btn btn-icon btn-clean btn-lg mr-1 pulse pulse-primary"
                id = "kt_quick_notifications_toggle" >
                <
                Badge badgeContent = {
                    newNotifications.length
                }
                color = "secondary"
                overlap = "rectangular" >
                <
                Icon className = {
                    "fa fa-bell"
                }
                color = "primary"
                onClick = {
                    () =>
                    window.analytics.track("Notification List Opened")
                }
                /> <
                /Badge> {
                    showPulse && ( <
                        >
                        <
                        span className = "pulse-ring" > < /span> <
                        span className = "pulse-ring" / >
                        <
                        />
                    )
                } <
                /div> <
                /OverlayTrigger> <
                /Dropdown.Toggle>

                <
                Dropdown.Menu className = "dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg" >
                <
                form > { /** Head */ } <
                S.BoxNotifications className = "d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top" >
                <
                h4 className = "d-flex flex-center rounded-top" >
                <
                span className = "text-white" > Notificações < /span> <
                span className = "btn btn-text btn-sm font-weight-bold btn-font-md ml-2" > {
                    newNotifications.length
                }
                nova(s) <
                /span> <
                /h4>

                <
                Tab.Container defaultActiveKey = {
                    key
                } >
                <
                Nav as = "ul"
                className = "nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8"
                onSelect = {
                    _key => setKey(_key)
                } >
                <
                Nav.Item className = "nav-item"
                as = "li" >
                <
                Nav.Link eventKey = "Notifications"
                className = {
                    `nav-link show ${
                          key === "Notifications" ? "active" : ""
                        }`
                } >
                Notificações <
                /Nav.Link> <
                /Nav.Item> <
                /Nav>

                <
                Tab.Content className = "tab-content" >
                <
                Tab.Pane eventKey = "Notifications"
                id = "topbar_notifications_events" >
                <
                PerfectScrollbar options = {
                    perfectScrollbarOptions
                }
                className = "navi navi-hover scroll my-4"
                style = {
                    {
                        maxHeight: "300px",
                        position: "relative"
                    }
                } >
                {
                    notifications.map((notification, index) => {
                        return ( <
                            a href = "#"
                            onClick = {
                                ev => {
                                    ev.preventDefault();
                                    openNotification(notification);
                                    window.analytics.track(
                                        "Notification Item Clicked", {
                                            notification_id: notification.template_id,
                                        }
                                    );
                                }
                            }
                            className = "navi-item"
                            key = {
                                index
                            } >
                            <
                            div className = {
                                "navi-link" +
                                (notification.status !== "read" ?
                                    " active" :
                                    "")
                            } >
                            {
                                1 == 2 && ( <
                                    div className = "navi-icon mr-2" >
                                    <
                                    i className = "flaticon2-line-chart text-success" > < /i> <
                                    /div>
                                )
                            } <
                            div className = "navi-text" >
                            <
                            S.NotificationsTitle > {
                                notification.title
                            } <
                            /S.NotificationsTitle>{" "} <
                            br / >
                            <
                            S.NotificationsDate className = "text-muted" > {
                                notification.summary
                            } <
                            /S.NotificationsDate> <
                            /div> <
                            /div> <
                            /a>
                        );
                    })
                } <
                /PerfectScrollbar> <
                /Tab.Pane> <
                Tab.Pane eventKey = "Logs"
                id = "topbar_notifications_logs" >
                <
                div className = "d-flex flex-center text-center text-muted min-h-200px" >
                All caught up!
                <
                br / >
                No new notifications. <
                /div> <
                /Tab.Pane> <
                /Tab.Content> <
                /Tab.Container> <
                /S.BoxNotifications> <
                /form> <
                /Dropdown.Menu> <
                /Dropdown>
            )
        } <
        />
    );
}