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

export const INFO_QUERIES_MODAL = {
    economic_group: "Informações básicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informações operacionais e financeiras e CNAE(s)",
    cpf_registration_status: "Nome, situação cadastral, data de nascimento e da inscrição do CPF e verificação de óbito",
    trademarks: "Lista de marcas e patentes com status e datas de depósito, publicação, validade, concessão e efeito",
    professional_data: "Situação atual, faixa salarial histórica, ocupações ativas, histórico de ocupações e tempo de experiência",
    personal_data: "Nome, nome da mãe, gênero, data de nascimento, endereço(s), telefone(s) e e-mail(s)",
    lawsuit: "Processos vinculados ao documento e informações das partes envolvidas",
    relationship_tree: "Nome, nome da mãe, telefone(s), e-mail(s), endereço(s) e nome e documento de familiares, sócio(s) e empresa(s)",
    list_vehicles: "Lista de veículos encontrados com suas especificações de placa, marca, modelo, ano, cor e localidade",
    vehicle_data: "Valor da PIFE, marca, modelo, ano, Renavam, combustível, localização e dados do proprietário",
    company_partnership: "Valor da PIFE, marca, modelo, ano, Renavam, combustível, localização e dados do proprietário",
    company_information: "Razão social, nome fantasia, natureza jurídica, situação cadastral, capital social, endereço(s), CNAE(s), quadro societário e data de início da atividade",
    credit_restriction: "Ocorrências, pendências financeiras, cheques sem fundo, CADIN e protestos totais",
    household_activity: "Informações básicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informações operacionais e financeiras e CNAE(s)",
    household: "Informações básicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informações operacionais e financeiras e CNAE(s)",
    rfcontact: "Informações básicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informações operacionais e financeiras e CNAE(s)",
    owners: "Informações básicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informações operacionais e financeiras e CNAE(s)",
    legal_representative: "Informações básicas, CNPJ(s) identificado(s), empresa(s), regime fiscal, informações operacionais e financeiras e CNAE(s)",
    vehicle_tracking: "Lista de capturas do veículo com fotos, local, data e hora ",
};

export const INFO_QUANTITY_CREDITS = {
    cpf_registration_status: "Consultar agora por 1 crédito",
    trademarks: "Consultar agora por 1 crédito",
    professional_data: "Consultar agora por 1 crédito",
    personal_data: "Consultar agora por 1 crédito",
    lawsuit: "Consultar agora por 1 crédito",
    relationship_tree: "Consultar agora por 3 créditos",
    list_vehicles: "Consultar agora por 5 créditos",
    vehicle_data: "Consultar agora por 3 créditos",
    company_partnership: "Consultar agora por 1 crédito",
    company_information: "Consultar agora por 3 créditos",
    credit_restriction: "Consultar agora por 3 créditos",
    vehicle_tracking: "Consultar agora por 5 créditos",
};