export const ICON_NAMES = new Map([
    ["personal_data", "person"],
    ["list_vehicles", "car"],
    ["company_information", "company"],
    ["company_partnership", "company"],
    ["vehicle_data", "car"],
    ["relationship_tree", "people"],
    ["credit_restriction", "dolar"],
    ["lawsuit", "people"],
    ["trademarks", "trademark"],
    ["professional_data", "professional_data"],
    ["cpf_registration_status", "cpf_status"],
    ["economic_group", "economic-group"],
]);

export const NEW_FEATURES = ["vehicle_tracking"];
export const PLAN_FEATURES = [];
export const MAINTENANCE_FEATURES = [];

export const DOCUMENTS_MAPPED = new Map([
    ["personal_data", ["CPF"]],
    ["list_vehicles", ["CPF", "CNPJ"]],
    ["company_information", ["CNPJ"]],
    ["company_partnership", ["CPF"]],
    ["vehicle_data", ["Placa de veículo"]],
    ["relationship_tree", ["CPF", "CNPJ"]],
    ["credit_restriction", ["CPF", "CNPJ"]],
    ["lawsuit", ["CPF", "CNPJ"]],
    ["trademarks", ["CPF", "CNPJ"]],
    ["professional_data", ["CPF"]],
    ["cpf_registration_status", ["CPF"]],
    ["economic_group", ["CNPJ"]],
    ["vehicle_tracking", ["Placa de veículo"]],
]);