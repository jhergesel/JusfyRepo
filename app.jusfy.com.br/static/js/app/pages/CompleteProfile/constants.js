export const PERIODICITIES = {
    MENSAL: "/mensal",
    ANUAL: "/anual",
    BIMESTRAL: "/bimestral",
    TRIMESTRAL: "/trimestral",
    SEMESTRAL: "/semestral",
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