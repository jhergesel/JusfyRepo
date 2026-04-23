import SVG from "react-inlinesvg";
import {
    Header,
    Title,
    TitleHeaderContainer
} from "./styles";

export const HeaderIcons = ({
    items_header,
    larges
}) => {
    return ( <
        Header > {
            items_header ? .map((item, index) => ( <
                TitleHeaderContainer key = {
                    item.title
                }
                tabIndex = {
                    index
                } >
                <
                SVG src = {
                    item.icon
                }
                alt = "Icone" / >
                <
                Title > {
                    item.title
                } < /Title> <
                /TitleHeaderContainer>
            ))
        } <
        /Header>
    );
};