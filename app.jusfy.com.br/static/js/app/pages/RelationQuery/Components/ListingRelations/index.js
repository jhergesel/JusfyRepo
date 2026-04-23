import {
    useContext
} from "react";
import RelationCard from "../../Components/RelationCard";
import RelationWrapper from "../../Components/RelationWrapper";
import {
    SearchRelationsContext
} from "../../context/searchRelations/Provider";
import * as S from "./ListingRelations.styles";

const RelationCategory = ({
        name,
        items,
        type,
        includedItems = [],
        isOpenSearch,
        onOpenSearch,
    }) =>
    items ? .length ? ( <
        RelationWrapper name = {
            name
        }
        type = {
            type
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
                isOpenSearch = {
                    isOpenSearch
                }
                onOpenSearch = {
                    onOpenSearch
                }
                />
            ))
        } <
        /RelationWrapper>
    ) : null;

const ListingRelations = ({
    relatives = [],
    business_partners = [],
    companies = [],
    isColapsed,
    relationships = {},
    isOpenSearch,
    onOpenSearch,
    isMinor = false,
    isPersonalDataError = false,
}) => {
    const {
        isCompanySearch
    } = useContext(SearchRelationsContext);

    const hasRelations =
        relatives.length ||
        business_partners.length ||
        companies.length ||
        relationships.first_level_partners ? .length ||
        relationships.first_level_companies ? .length;

    return hasRelations ? ( <
        S.Container isColapsed = {
            isColapsed
        } >
        <
        RelationCategory name = "Familiares"
        items = {
            relatives
        }
        type = "relative"
        includedItems = {
            business_partners
        }
        /> <
        RelationCategory name = "Sócios"
        items = {
            business_partners
        }
        type = "business_partners" /
        >
        <
        RelationCategory name = "Empresas"
        items = {
            companies
        }
        type = "corporate" / > {
            isCompanySearch && ( <
                RelationCategory name = "Quadro societário"
                items = {
                    [
                        ...relationships.first_level_partners,
                        ...relationships.first_level_companies,
                    ]
                }
                type = "company_partner"
                isOpenSearch = {
                    isOpenSearch
                }
                onOpenSearch = {
                    onOpenSearch
                }
                />
            )
        } <
        /S.Container>
    ) : ( <
        S.EmptyState > {
            isMinor ? ( <
                >
                <
                h1 > Alerta de faixa etária < /h1> <
                span >
                De acordo com a data de nascimento, a pessoa vinculada ao CPF consultado caracteriza - se < strong > menor de idade < /strong>. <br / >
                Dessa forma, não é possível fornecer os dados consultados, conforme determinado pelo Parágrafo 1 ª do Art.14 da LGPD. <
                    /span> <
                    />
            ) : ( <
                >
                <
                h1 > Ops...Nenhuma informação de relacionamento foi encontrada. < /h1> {
                    !isPersonalDataError && ( <
                        span > O CPF informado não possui relacionamentos. < /span>
                    )
                } <
                />
            )
        } <
        /S.EmptyState>
    );
};

export default ListingRelations;