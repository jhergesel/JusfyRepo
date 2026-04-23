import {
    toAbsoluteUrl
} from "../../../../../../../../../_metronic/_helpers";
import {
    ButtonAction,
    ContainerLoading,
    Content,
    Menu
} from "./styles";
import SVG from "react-inlinesvg";

export const ActionButtons = ({
    onClick,
    menuOpen = false,
    itemsMenu = [],
    status,
    reprocessLoading,
}) => {
    return ( <
        Content >
        <
        ButtonAction status = {
            status
        }
        onClick = {
            onClick
        }
        type = "button"
        aria - haspopup = "menu"
        aria - expanded = {
            menuOpen
        }
        aria - label = "Abrir menu de ações" >
        < /ButtonAction> <
        Menu open = {
            menuOpen
        }
        status = {
            status
        } > {
            itemsMenu &&
            itemsMenu ? .map((item, idx) => ( <
                div key = {
                    `${item.text}-${idx}`
                }
                onClick = {
                    reprocessLoading && item.text === "Refazer consulta" ?
                    null :
                        item.action
                } >
                {
                    reprocessLoading && item.text === "Refazer consulta" ? ( <
                        ContainerLoading >
                        <
                        SVG src = {
                            toAbsoluteUrl(
                                "/media/jusfinder/loading-process-jusfinder.svg"
                            )
                        }
                        width = "16px"
                        height = "16px"
                        aria - label = "Carregando" /
                        >
                        <
                        /ContainerLoading>
                    ) : ( <
                        span > {
                            item.text
                        } < /span>
                    )
                } <
                /div>
            ))
        } <
        /Menu> <
        /Content>
    );
};