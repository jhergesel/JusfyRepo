export const DOCUMENTS = [{
        value: "CPF",
        title: "CPF",
    },
    {
        value: "CNPJ",
        title: "CNPJ",
    },
    {
        value: "PLATE",
        title: "Placa",
    },
];
export const LINK_MANUAL =
    "https://help.jusfy.com.br/manual-da-consulta-em-lote-jusfinder";
export const QUERIES_BATCH = [
    // {
    //   name: "Buscador processual",
    //   value: "lawsuit",
    //   type: ["CPF", "CNPJ"],
    // },
    {
        name: "Localização",
        value: "personal_data",
        type: ["CPF"],
    },
    {
        name: "Dados do veículo",
        value: "vehicle_data",
        type: ["PLATE"],
    },
    {
        name: "Sociedades",
        value: "company_partnership",
        type: ["CPF"],
    },
    {
        name: "Empresa completo",
        value: "company_information",
        type: ["CNPJ"],
    },
    {
        name: "Dados profissionais",
        value: "professional_data",
        type: ["CPF"],
    },
    {
        name: "Situação cadastral de CPF",
        value: "cpf_registration_status",
        type: ["CPF"],
    },
    {
        name: "Grupo Econômico - Empresas com o mesmo representante legal",
        value: "legal_representative",
        type: ["CNPJ"],
    },
    {
        name: "Grupo Econômico - Empresas com o mesmo quadro societário",
        value: "owners",
        type: ["CNPJ"],
    },
    {
        name: "Grupo Econômico - Empresas com mesmo contato na Receita Federal",
        value: "rfcontact",
        type: ["CNPJ"],
    },
    {
        name: "Grupo Econômico - Empresas de qualquer atividade no endereço",
        value: "household",
        type: ["CNPJ"],
    },
    {
        name: "Grupo Econômico - Empresas com atividade semelhante no endereço",
        value: "household_activity",
        type: ["CNPJ"],
    },

    {
        name: "Relacionamentos",
        value: "relationship_tree",
        type: ["CPF", "CNPJ"],
    },
    {
        name: "Marcas e patentes",
        value: "trademarks",
        type: ["CPF", "CNPJ"],
    },
    {
        name: "Restrição de crédito",
        value: "credit_restriction",
        type: ["CPF", "CNPJ"],
    },
    {
        name: "Veículos",
        value: "list_vehicles",
        type: ["CPF", "CNPJ"],
    },
];