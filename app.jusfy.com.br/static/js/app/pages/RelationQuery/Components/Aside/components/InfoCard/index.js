import DetailsCard from "../DetailsCard";

const InfoCard = ({
    info,
    type
}) => {
    const FIELDS_BY_TYPE = {
        CPF: new Map([
            ["Documento", info.document],
            ["Nome da Mãe", info.motherName],
            ["Data de Nascimento", info.birthdate],
            ["Sexo", info.gender],
        ]),
        CNPJ: new Map([
            ["Nome Fantasia", info.trade_name],
            ["Dt. Sit. Cadastral", info.status_date],
            ["Natureza Jurídica", info.legal_nature_activity],
            ["Capital Social", info.capital_social],
            ["Situação Cadastral", info.status],
            ["Dt. Início Atividade", info.founded_date],
        ]),
    };

    const fields = FIELDS_BY_TYPE[type];

    return ( <
        DetailsCard name = {
            type === "CNPJ" ? "Dados da empresa" : "Informações básicas"
        } >
        <
        div > {
            [...fields].map(([label, value]) => ( <
                span key = {
                    label
                } > {
                    label
                }: < span bold > {
                    value
                } < /span> <
                /span>
            ))
        } <
        /div> <
        /DetailsCard>
    );
};

export default InfoCard;