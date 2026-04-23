import React, {
    useContext
} from "react";
import RelationCard from "../../Components/RelationCard";
import RelationWrapper from "../../Components/RelationWrapper";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";
import * as S from "./ListingSearch.styles";

const RelationCategory = ({
        name,
        items,
        type,
        includedItems = []
    }) =>
    items ? .length ? ( <
        RelationWrapper type = {
            type
        }
        name = {
            name
        } > {
            items.map(item => ( <
                RelationCard key = {
                    item.id
                }
                relation = {
                    item
                }
                type = {
                    type
                }
                includedItems = {
                    includedItems
                }
                />
            ))
        } <
        /RelationWrapper>
    ) : null;

const ListingSearch = () => {
    const {
        searchedRelation
    } = useContext(SearchRelationsContext);

    const name = searchedRelation.name ? .split(" ")[0].toLowerCase();
    const nameFormated = name ? .charAt(0).toUpperCase() + name ? .slice(1);

    const hasRelations =
        searchedRelation.second_level_partners ? .length ||
        searchedRelation.second_level_companies ? .length;

    return hasRelations ? ( <
        S.Wrapper >
        <
        RelationCategory name = {
            `Sócios de ${nameFormated}`
        }
        items = {
            [...searchedRelation.second_level_partners]
        }
        type = "search_partners" /
        >
        <
        RelationCategory name = {
            `Empresas vinculadas a ${nameFormated}`
        }
        items = {
            [...searchedRelation.second_level_companies]
        }
        type = "search_companies" /
        >
        <
        /S.Wrapper>
    ) : ( <
        S.EmptyState >
        <
        h1 > Ops...Nenhuma informação encontrada. < /h1> <
        span >
        Não localizamos relações societárias referente a pessoa ou empresa selecionada. <
        /span> <
        /S.EmptyState>
    );
};

export default ListingSearch;