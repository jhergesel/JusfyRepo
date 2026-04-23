export const PERIODICITIES = {
    MENSAL: "/mensal",
    ANUAL: "/anual",
    BIMESTRAL: "/bimestral",
    TRIMESTRAL: "/trimestral",
    SEMESTRAL: "/semestral",
    "ANUAL-6MESES": "/anual",
    "ANUAL-3MESES": "/anual",
};

export const COUPON_INPUT_MESSAGES = new Map([
    ["NOT_FOUND", "*Esse cupom não existe. Por favor, insira um cupom válido."],
    ["EXPIRED", "*Esse cupom expirou."],
    ["REACHED_LIMIT", "*Esse cupom  já atingiu o seu limite máximo de uso."],
    [
        "SUCCESS",
        "*Cupom aplicado com sucesso. Os valores dos planos foram atualizados.",
    ],
    ["EMPTY", "*Você ainda não aplicou o seu cupom."],
]);

export const INPUT_COLORS = new Map([
    ["ERROR", "#F64E60"],
    ["WARNING", "#FFCC00"],
    ["SUCCESS", "#1ACD57"],
]);

export const STATES = [{
        id: 1,
        name: "Acre",
        state: "AC",
    },
    {
        id: 2,
        name: "Alagoas",
        state: "AL",
    },
    {
        id: 3,
        name: "Amapá",
        state: "AP",
    },
    {
        id: 4,
        name: "Amazonas",
        state: "AM",
    },
    {
        id: 5,
        name: "Bahia",
        state: "BA",
    },
    {
        id: 6,
        name: "Ceará",
        state: "CE",
    },
    {
        id: 7,
        name: "Distrito Federal",
        state: "DF",
    },
    {
        id: 8,
        name: "Espírito Santo",
        state: "ES",
    },
    {
        id: 9,
        name: "Goiás",
        state: "GO",
    },
    {
        id: 10,
        name: "Maranhão",
        state: "MA",
    },
    {
        id: 11,
        name: "Mato Grosso",
        state: "MT",
    },
    {
        id: 12,
        name: "Mato Grosso do Sul",
        state: "MS",
    },
    {
        id: 13,
        name: "Minas Gerais",
        state: "MG",
    },
    {
        id: 14,
        name: "Pará",
        state: "PA",
    },
    {
        id: 15,
        name: "Paraíba",
        state: "PB",
    },
    {
        id: 16,
        name: "Paraná",
        state: "PR",
    },
    {
        id: 17,
        name: "Pernambuco",
        state: "PE",
    },
    {
        id: 18,
        name: "Piauí",
        state: "PI",
    },
    {
        id: 19,
        name: "Rio de Janeiro",
        state: "RJ",
    },
    {
        id: 20,
        name: "Rio Grande do Norte",
        state: "RN",
    },
    {
        id: 21,
        name: "Rio Grande do Sul",
        state: "RS",
    },
    {
        id: 22,
        name: "Rondônia",
        state: "RO",
    },
    {
        id: 23,
        name: "Roraima",
        state: "RR",
    },
    {
        id: 24,
        name: "Santa Catarina",
        state: "SC",
    },
    {
        id: 25,
        name: "São Paulo",
        state: "SP",
    },
    {
        id: 26,
        name: "Sergipe",
        state: "SE",
    },
    {
        id: 27,
        name: "Tocantins",
        state: "TO",
    },
];