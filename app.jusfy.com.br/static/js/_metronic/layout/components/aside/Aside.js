import React, {
    useMemo,
    useEffect
} from "react";
import {
    Link,
    useLocation
} from "react-router-dom";
import {
    useDispatch,
    useSelector
} from "react-redux";
import objectPath from "object-path";
import {
    Brand
} from "../brand/Brand";
import {
    AsideMenu
} from "./aside-menu/AsideMenu";
import {
    useHtmlClassService
} from "../../_core/MetronicLayout";
import {
    checkPathnameIncludes
} from "../../../_helpers/Pages";
import {
    layoutActions
} from "../../../../app/redux/layout/layoutSlice";
import KTLayoutAside from "../../../_assets/js/layout/base/aside";
import KTLayoutAsideMenu from "../../../_assets/js/layout/base/aside-menu";

import * as S from "./Aside.styles";

export function Aside() {
    const uiService = useHtmlClassService();
    const location = useLocation();
    const dispatch = useDispatch();
    const isMinimized = useSelector((state) => state.layout.isAsideMinimized);

    const layoutProps = useMemo(() => {
        return {
            layoutConfig: uiService.config,
            disableScroll: objectPath.get(uiService.config, "aside.menu.dropdown") === "true" ||
                false,
            asideClassesFromConfig: uiService.getClasses("aside", true),
            disableAsideSelfDisplay: objectPath.get(uiService.config, "aside.self.display") === false,
            headerLogo: uiService.getLogo(),
        };
    }, [uiService]);

    // Páginas que devem ter a sidebar minimizada por padrão
    const PAGE_WITH_ASIDE_DEFAULT_MINIMIZED = ["/processual_query", "/page", "/gpt", "/jusprocessos/meus-processos"];

    // Monitora mudanças de rota e define o estado inicial da sidebar APENAS ao entrar na página
    useEffect(() => {
        const shouldMinimize = checkPathnameIncludes(PAGE_WITH_ASIDE_DEFAULT_MINIMIZED);
        const defaultMinimized = layoutProps.layoutConfig.aside.self.minimize.default;

        if (shouldMinimize) {
            dispatch(layoutActions.setAsideMinimized(true));
        } else {
            dispatch(layoutActions.setAsideMinimized(defaultMinimized));
        }
    }, [location.pathname, layoutProps.layoutConfig.aside.self.minimize.default, dispatch]);

    // Função para lidar com toggle manual (sem interferência automática)
    const handleMinimizeToggle = (newState) => {
        const finalState = typeof newState === 'function' ? newState(isMinimized) : newState;
        dispatch(layoutActions.setAsideMinimized(finalState));
    };

    useEffect(() => {
        KTLayoutAside.init("kt_aside");
        KTLayoutAsideMenu.init("kt_aside_menu");
        const timeoutId = setTimeout(() => {
            const menu = KTLayoutAsideMenu.getMenu ? .();
            if (menu ? .scrollUpdate) {
                menu.scrollUpdate();
            }
        }, 150);
        return () => clearTimeout(timeoutId);
    }, []);

    return ( <
        >
        <
        S.Sidebar id = "kt_aside"
        className = {
            `aside aside-left aside-enable ${layoutProps.asideClassesFromConfig} d-flex flex-column flex-row-auto`
        } >
        <
        Brand onMinimize = {
            handleMinimizeToggle
        }
        />

        <
        div id = "kt_aside_menu_wrapper"
        className = "aside-menu-wrapper flex-column-fluid" >
        {
            layoutProps.disableAsideSelfDisplay && ( <
                div className = "header-logo" >
                <
                Link to = "" > < /Link> <
                /div>
            )
        } <
        AsideMenu isMinimized = {
            isMinimized
        }
        onMinimize = {
            handleMinimizeToggle
        }
        disableScroll = {
            layoutProps.disableScroll
        }
        /> <
        /div> <
        /S.Sidebar> <
        />
    );
}