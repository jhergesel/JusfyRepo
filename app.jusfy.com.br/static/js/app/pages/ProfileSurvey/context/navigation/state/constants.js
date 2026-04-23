const AUTONOMOUS_STEPS = [
    [2, "activeProcess"],
    [3, "lawAreas"],
    [4, "reasonSign"],
];

const ADVOCATE_OFFICE_STEPS = [
    [2, "activeProcess"],
    [3, "lawAreas"],
    [4, "reasonSign"],
];

const CONTABILITY_OFFICE_STEPS = [
    [2, "reasonSign"]
];

const LEGAL_SECTOR_STEPS = [
    [2, "activeProcess"],
    [3, "reasonSign"],
];

const PUBLIC_SECTOR_STEPS = [
    [2, "activeProcess"],
    [3, "reasonSign"],
];

const OTHER_STEPS = [
    [2, "reasonSign"]
];

export const ADDITIONAL_STEPS = new Map([
    ["Autonomous", AUTONOMOUS_STEPS],
    ["AdvogateOffice", ADVOCATE_OFFICE_STEPS],
    ["ContabilityOffice", CONTABILITY_OFFICE_STEPS],
    ["LegalSector", LEGAL_SECTOR_STEPS],
    ["PublicSector", PUBLIC_SECTOR_STEPS],
    ["Other", OTHER_STEPS],
]);

export const FILTER_NAMES = [
    "Bancário",
    "Civil",
    "Contratos",
    "Consumidor",
    "Empresarial",
    "Família",
    "Imobiliário",
    "Penal",
    "Previdenciário",
    "Público",
    "Saúde",
    "Trabalhista",
    "Tributário",
];

export const WORK_CONTEXT_MAP = {
    "Advogado autônomo": "Autonomous",
    "Escritório de advocacia": "AdvogateOffice",
    "Escritório de contabilidade": "ContabilityOffice",
    "Setor jurídico de empresa privada": "LegalSector",
    "Serviço público": "PublicSector",
    Outro: "Other",
};

export const FIELDS_NOT_REQUIRED = [
    "workContextDetails",
    "workForceSize",
    "lawAreas",
    "activeProcessess",
];