import Tag from "../../../../../components/flat/ui/Tag";
import ReactLoading from "react-loading";
import {
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";
import * as S from "./QueryHistory.styles";

export const QUERIES_HISTORY = new Map([
    ["household_activity", "Grupo econômico - Atividade semelhante no endereço"],
    ["household", "Grupo econômico - Qualquer atividade no endereço"],
    ["rfcontact", "Grupo econômico - Mesmo contato na Receita Federal"],
    ["owners", "Grupo econômico - Mesmo quadro societário"],
    ["legal_representative", "Grupo econômico - Mesmo representante legal"],
]);

const QUERYSTATUS = {
    success_with_result: ( <
        OverlayTrigger placement = "top"
        overlay = { <
            Tooltip className = "tooltip" >
            <
            span > Consulta realizada com sucesso,
            mas sem resultados. < /span> <
            /Tooltip>
        } >
        <
        div >
        <
        Tag text = "Consulta realizada"
        color = "#017556"
        backgroundColor = "#e4f6ef" /
        >
        <
        /div> <
        /OverlayTrigger>
    ),
    success: ( <
        Tag text = "Consulta realizada"
        color = "#017556"
        backgroundColor = "#e4f6ef" / >
    ),
    pending: ( <
        OverlayTrigger placement = "top"
        overlay = { <
            Tooltip className = "tooltip" >
            <
            span >
            Aguarde,
            a consulta pode demorar alguns minutos para ser concluída. <
            /span> <
            /Tooltip>
        } >
        <
        div >
        <
        Tag text = "Em processamento"
        color = "#2E3F54"
        backgroundColor = "#FFF3CD" >
        <
        ReactLoading type = "spin"
        color = "#9154DE"
        width = "12px"
        height = "21px" /
        >
        <
        /Tag> <
        /div> <
        /OverlayTrigger>
    ),
    error: ( <
        Tag text = "Erro ao consultar"
        color = "#D71D1D"
        backgroundColor = "#ffe5e5" / >
    ),
    error_file: ( <
        Tag text = "Erro no arquivo"
        color = "#D71D1D"
        backgroundColor = "#ffe5e5" / >
    ),
};

const getQueryStatus = row => {
    const conditions = [{
        test: () => row.downloadLink === null && row.status === "error",
        result: QUERYSTATUS.error_file,
    }, ];

    const match = conditions.find(condition => condition.test());
    return match ? match.result : QUERYSTATUS[row.status];
};

const DOCUMENT_TYPE = {
    CPF: "CPF",
    CNPJ: "CNPJ",
    PLATE: "Placa",
};

export const TABLE_COLUMNS = [{
        name: "Consultado em",
        selector: row => < S.RowText > {
            row.date
        } < /S.RowText>,
        grow: 0.6,
        minWidth: "165px",
    },
    {
        name: "Consulta",
        selector: row => ( <
            S.RowText title = {
                row.type
            } > {
                row.type === "Grupo Econômico de CNPJ" ?
                QUERIES_HISTORY.get(row.query_subtype) :
                    row.type
            } <
            /S.RowText>
        ),
        grow: 0.6,
        minWidth: "125px",
        wrap: true,
    },
    {
        name: "Documento",
        selector: row => ( <
            div style = {
                {
                    display: "flex",
                    flexDirection: "column"
                }
            } >
            <
            S.RowTextHeader > {
                " "
            }
            Diversos Documentos({
                `${DOCUMENT_TYPE[row.documentType]}`
            }) {
                " "
            } <
            /S.RowTextHeader> <
            S.RowText > {
                row.originalFileName
            } < /S.RowText> <
            /div>
        ),
        grow: 0.6,
        minWidth: "170px",
    },
    {
        name: "Status",
        selector: row => getQueryStatus(row),
        grow: 0.6,
        minWidth: "190px",
    },
];

export const featureTypeNames = [
    "relationship_tree",
    "lawsuit",
    "professional_data",
    "personal_data",
    "list_vehicles",
    "credit_restriction",
    "company_information",
    "company_partnership",
    "vehicle_data",
    "trademarks",
    "cpf_registration_status",
    "economic_group",
    "legal_representative",
    "owners",
    "rfcontact",
    "household",
    "household_activity",
];

export const NAME_EVENTS = {
    relationship_tree: "Relationship Tree Open Page Result",
    professional_data: "Professional Data Open Page Result",
    personal_data: "Personal Data Open Page Result",
    list_vehicles: "List Vehicles Open Page Result",
    credit_restriction: "Credit Restriction Open Page Result",
    company_information: "Company Information Open Page Result",
    lawsuit: "Lawsuit Open Page Result",
    company_partnership: "Company Partnership Open Page Result",
    vehicle_data: "Vehicle Data Open Page Result",
    trademarks: "Trademarks Open Page Result",
    cpf_registration_status: "CPF Registration Status Open Page Result",
    economic_group: "Economic Group Open Page Result",
};
export const ITEMS_PER_PAGE = 10;