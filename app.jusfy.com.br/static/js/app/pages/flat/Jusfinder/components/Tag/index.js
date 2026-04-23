import {
    CardItemInfoTag,
    CardItemInfoTagText,
    ContainerTag,
    Icon,
} from "./styles";

export const Tag = ({
    text,
    isMobile = false,
    icon = "",
    background = "",
    width = "",
}) => {
    return ( <
        ContainerTag width = {
            width
        }
        isTooltip = {
            text === "Processando..."
        } >
        <
        CardItemInfoTag background = {
            background
        }
        width = {
            width
        } >
        <
        Icon src = {
            icon
        }
        /> <
        CardItemInfoTagText > {
            text
        } < /CardItemInfoTagText> <
        /CardItemInfoTag> <
        /ContainerTag>
    );
};