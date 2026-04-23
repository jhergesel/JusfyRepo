export const INPUT_CONTENT = new Map([
    ["personal_data", {
        documentType: "CPF"
    }],
    ["company_information", {
        documentType: "CNPJ"
    }],
    ["company_partnership", {
        documentType: "CPF"
    }],
    ["vehicle_data", {
        documentType: "Placa de Veículo"
    }],
    ["economic_group", {
        documentType: "CNPJ"
    }],
    ["vehicle_tracking", {
        documentType: "Placa de Veículo"
    }],
]);

export const QUERY_ERRORS = new Map([
    ["EMPTY_ERROR", "*Por favor, preencha o campo para realizar sua consulta."],
    [
        "DOCUMENT_ERROR",
        "*Por favor, se certifique de que esse é um documento válido.",
    ],
    [
        "TERMS_ACCEPTED_ERROR",
        "*Você precisa selecionar o campo de termos de uso para dar continuidade a sua consulta.",
    ],
    ["EMPTY_QUERY", "Selecione pelo menos uma consulta"],
]);

export const DOCUMENT_TYPES = {
    CPF: "CPF",
    CNPJ: "CNPJ",
};
export const ACCEPTED_DOCUMENT_TYPES = new Map([
    ["personal_data", ["CPF"]],
    ["list_vehicles", ["CPF", "CNPJ"]],
    ["company_information", ["CNPJ"]],
    ["company_partnership", ["CPF"]],
    ["vehicle_data", ["LICENSE_PLATE"]],
    ["relationship_tree", ["CPF", "CNPJ"]],
    ["credit_restriction", ["CPF", "CNPJ"]],
    ["lawsuit", ["CPF", "CNPJ"]],
    ["trademarks", ["CPF", "CNPJ"]],
    ["professional_data", ["CPF"]],
    ["cpf_registration_status", ["CPF"]],
    ["economic_group", ["CNPJ"]],
    ["vehicle_tracking", ["LICENSE_PLATE"]],
]);

export const QUERIES = [{
        value: "household_activity",
        text: "Empresas com atividade semelhante no endereço",
    },
    {
        value: "household",
        text: "Empresas de qualquer atividade no endereço",
    },
    {
        value: "rfcontact",
        text: "Empresas com mesmo contato na Receita Federal",
    },
    {
        value: "owners",
        text: "Empresas com o mesmo quadro societário",
    },
    {
        value: "legal_representative",
        text: "Empresas com o mesmo representante legal",
    },
];

export const QUERIES_EVENTS = new Map([
    ["household_activity", "Economic_Group_Activities_Same_Address"],
    ["household", " Economic_Group_Same_Address"],
    ["rfcontact", "Economic_Group_Same Contact_FR"],
    ["owners", " Economic_Group_Same_Ownership_Partners"],
    ["legal_representative", " Economic_Group_Same_Legal_Representatives"],
]);
export const QUANTITY_QUERIES_CREDITS = 5;

export const QUERIES_NEWTAB = [
    "relationship_tree",
    "professional_data",
    "personal_data",
    "company_information",
    "company_partnership",
    "vehicle_data",
    "trademarks",
];

export const QUERIES_ENUM = {
    PERSONAL_DATA: "personal_data",
    LIST_VEHICLES: "list_vehicles",
    COMPANY_INFORMATION: "company_information",
    COMPANY_PARTNERSHIP: "company_partnership",
    VEHICLE_DATA: "vehicle_data",
    RELATIONSHIP_TREE: "relationship_tree",
    CREDIT_RESTRICTION: "credit_restriction",
    LAWSUIT: "lawsuit",
    TRADEMARKS: "trademarks",
    PROFESSIONAL_DATA: "professional_data",
    CPF_REGISTRATION_STATUS: "cpf_registration_status",
    ECONOMIC_GROUP: "economic_group",
    VEHICLE_TRACKING: "vehicle_tracking",
};