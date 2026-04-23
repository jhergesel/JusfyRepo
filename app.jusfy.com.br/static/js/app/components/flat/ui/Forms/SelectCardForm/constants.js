export const CREDIT_CARD_FLAGS = new Map([
    ["default", "/media/svg/credit-card/flat/default.svg"],
    ["master", "/media/svg/credit-card/flat/mastercard.svg"],
    ["visa", "/media/svg/credit-card/flat/visa.svg"],
    ["amex", "/media/svg/credit-card/flat/amex.svg"],
    ["hipercard", "/media/svg/credit-card/flat/hipercard.svg"],
    ["elo", "/media/svg/credit-card/flat/elo.svg"],

    // adicionadas para compatibilidade com `card-validator`
    ["mastercard", "/media/svg/credit-card/flat/mastercard.svg"],
    ["american-express", "/media/svg/credit-card/flat/amex.svg"],

    // bandeiras que o card-validator pode retornar — sem SVG específico → fallback no default
    ["diners-club", "/media/svg/credit-card/flat/default.svg"],
    ["discover", "/media/svg/credit-card/flat/default.svg"],
    ["jcb", "/media/svg/credit-card/flat/default.svg"],
    ["unionpay", "/media/svg/credit-card/flat/default.svg"],
    ["maestro", "/media/svg/credit-card/flat/default.svg"],
    ["mir", "/media/svg/credit-card/flat/default.svg"],
    ["hiper", "/media/svg/credit-card/flat/default.svg"],
    ["verve", "/media/svg/credit-card/flat/default.svg"],
]);