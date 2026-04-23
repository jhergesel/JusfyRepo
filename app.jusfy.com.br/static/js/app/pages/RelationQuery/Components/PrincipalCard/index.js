import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

import * as S from "./PrincipalCard.styles";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";
import {
    useContext
} from "react";

const PrincipalCard = ({
    isColapsed,
    onColpase,
    onViewInfo,
    pdf,
    name
}) => {
    const {
        isCompanySearch
    } = useContext(SearchRelationsContext);

    const onClick = () => {
        window.analytics.track("Relationship Tree Drawer Opened", {
            card_hierarchy: "primary",
        });
        onViewInfo();
    };

    const openPDF = () => {
        window.open(pdf);
        window.analytics.track("Relationship Tree PDF Downloaded", {
            context: "card",
        });
    };

    const hasPDF = pdf !== "PDF_NOT_IMPLEMENTED";

    const iconName = isCompanySearch ? "company" : "person";

    return ( <
        S.Container >
        <
        S.IconContainer isCompanySearch = {
            isCompanySearch
        } >
        <
        SVG src = {
            toAbsoluteUrl(`/media/relationQuery/${iconName}.svg`)
        }
        /> <
        /S.IconContainer> <
        S.Wrapper >
        <
        S.Title > {
            name ? .toLowerCase()
        } < /S.Title> <
        S.ActionWrapper > {
            hasPDF ? ( <
                S.Button onClick = {
                    openPDF
                } >
                <
                SVG src = {
                    toAbsoluteUrl("/media/relationQuery/download-s.svg")
                }
                /> <
                span > Baixar PDF completo < /span> <
                /S.Button>
            ) : null
        } <
        S.Button onClick = {
            onClick
        } > Visualizar informações < /S.Button> <
        /S.ActionWrapper> <
        S.Colapse close = {
            isColapsed
        }
        onClick = {
            onColpase
        } >
        Expandir <
        /S.Colapse> <
        /S.Wrapper> <
        /S.Container>
    );
};

export default PrincipalCard;