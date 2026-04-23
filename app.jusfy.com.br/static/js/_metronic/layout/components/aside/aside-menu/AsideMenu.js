import React, {
    useMemo
} from "react";
import {
    AsideMenuList
} from "./AsideMenuList";
import {
    useHtmlClassService
} from "../../../_core/MetronicLayout";

export function AsideMenu({
    isMinimized,
    onMinimize
}) {
    const uiService = useHtmlClassService();
    const layoutProps = {
        layoutConfig: uiService.config,
        asideMenuAttr: uiService.getAttributes("aside_menu"),
        ulClasses: uiService.getClasses("aside_menu_nav", true),
        asideClassesFromConfig: uiService.getClasses("aside_menu", true),
    };

    return ( <
        > { /* begin::Menu Container */ } <
        div id = "kt_aside_menu"
        data - menu - vertical = "1"
        className = {
            `aside-menu my-4 ${layoutProps.asideClassesFromConfig}`
        } { ...layoutProps.asideMenuAttr
        } >
        <
        AsideMenuList layoutProps = {
            layoutProps
        }
        isMinimized = {
            isMinimized
        }
        onMinimize = {
            onMinimize
        }
        /> <
        /div> { /* end::Menu Container */ } <
        />
    );
}