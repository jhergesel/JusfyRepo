import React, {
    useContext
} from "react";
import SVG from "react-inlinesvg";
import {
    toAbsoluteUrl
} from "../../../../../_metronic/_helpers";
import {
    RELATION_COLORS,
    RELATION_ICONS
} from "./constants";
import {
    cnpjMask,
    cpfMask,
} from "../../../../../_metronic/_helpers/MasksHelper";

import * as S from "./RelationCard.styles";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";

const RelationCard = ({
    relation,
    type,
    includedItems,
    isOpenSearch,
    onOpenSearch,
}) => {
    const {
        searchedRelation,
        setSearchedRelation,
        isCompanySearch
    } = useContext(
        SearchRelationsContext
    );

    const isSelected =
        relation.name === searchedRelation ? .name &&
        relation.document === searchedRelation ? .document;

    const isIncluded = includedItems.some(item => item.name === relation.name);

    const firstName = relation.name.split(" ")[0].toLowerCase();

    const relationshipName =
        relation.relationship_name || relation.relationship_type;

    const isUnformattedCNPJ = documentValue => /^\d{14}$/.test(documentValue);

    const navigateToJusfinder = () => {
        const urlDocumentType = isUnformattedCNPJ(relation.document) ?
            "CNPJ" :
            "CPF";

        window.analytics.track("Relationship Tree Additional Data Unlocked");
        window.open(
            `/jusfinder/query/default/${urlDocumentType}/${relation.document}`
        );
    };

    const tagsElement = ( <
        S.TagWrapper > {
            relationshipName && ( <
                S.Tag isCompany = {
                    type === "companies" || isCompanySearch
                } >
                <
                span > {
                    relationshipName.toLowerCase()
                } < /span> <
                /S.Tag>
            )
        }

        {
            (isIncluded || type === "business_partners") && ( <
                S.Tag isCompany >
                <
                span > Sócio < /span> <
                /S.Tag>
            )
        } <
        /S.TagWrapper>
    );

    const getIconType = () => {
        if (type === "company_partner" && relation.document_type === "CNPJ") {
            return "corporate";
        }
        return type;
    };

    const iconType = getIconType();

    return ( <
        S.Container isSelected = {
            isSelected && isCompanySearch && isOpenSearch
        } >
        <
        S.IconContainer color = {
            RELATION_COLORS.get(iconType)
        } >
        <
        SVG width = "20"
        height = "20"
        src = {
            toAbsoluteUrl(
                `/media/relationQuery/${RELATION_ICONS.get(iconType)}.svg`
            )
        }
        /> <
        /S.IconContainer> <
        S.Wrapper > {
            tagsElement
        } <
        S.Title > {
            relation.name.toLowerCase()
        } < /S.Title> <
        S.InfoWrapper > {
            relation.document && ( <
                S.Info >
                <
                span > {
                    type === "corporate" || relation.document_type === "CNPJ" ?
                    "CNPJ: " :
                        "CPF: "
                } <
                /span> <
                span > {
                    type === "corporate" || relation.document_type === "CNPJ" ?
                    cnpjMask(relation.document) :
                        cpfMask(relation.document)
                } <
                /span> <
                /S.Info>
            )
        } {
            relation.relationship_start_date && !isCompanySearch ? ( <
                S.Info >
                <
                span > {
                    relation.relationship_start_date
                } <
                b > - < /b> {
                    relation.relationship_end_date ?
                        relation.relationship_end_date :
                        "Atual"
                } <
                /span> <
                /S.Info>
            ) : null
        } <
        /S.InfoWrapper> {
            relation.document && ( <
                S.QueryButton onClick = {
                    navigateToJusfinder
                } >
                <
                SVG src = {
                    toAbsoluteUrl("/media/relationQuery/key.svg")
                }
                /> <
                span >
                Consultar dados de < span > {
                    firstName
                } < /span>! <
                /span> <
                /S.QueryButton>
            )
        } {
            type === "company_partner" && ( <
                S.SearchButton isSelected = {
                    isSelected && isCompanySearch && isOpenSearch
                }
                onClick = {
                    () => {
                        if (!isSelected) {
                            setSearchedRelation(relation);
                            window.analytics.track(
                                "Relationship Tree Secondary Level Opened"
                            );
                        }
                        onOpenSearch();
                    }
                } >
                <
                SVG src = {
                    toAbsoluteUrl("/media/relationQuery/search.svg")
                }
                />
                Explorar relações < span > Societárias < /span> <
                /S.SearchButton>
            )
        } <
        /S.Wrapper> <
        /S.Container>
    );
};

export default RelationCard;