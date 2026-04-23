export const formatCurrency = cents => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format((cents || 0) / 100);
};

export const formatPercentage = fraction =>
    `${Math.round((fraction || 0) * 100)}%`;

export const formatPrice = priceInCents => formatCurrency(priceInCents);

export const formatInstallmentPrice = (priceInCents, installments) => {
    if (priceInCents && installments && installments > 0) {
        return formatPrice(priceInCents / installments);
    }

    return formatPrice(priceInCents);
};

/**
 * Transform string into currency numbers
 * @param {string} value
 * @returns
 */
export function parseCurrency(value) {
    if (!value) return NaN;

    let cleaned = value.replace(/[^\d.,]/g, '');

    if ((cleaned.match(/,/g) || []).length > 1) {
        const lastCommaIndex = cleaned.lastIndexOf(',');
        cleaned =
            cleaned.slice(0, lastCommaIndex).replace(/,/g, '') +
            cleaned.slice(lastCommaIndex);
    }

    if (cleaned.includes(',')) {
        cleaned = cleaned.replace(/\./g, '');
    }

    cleaned = cleaned.replace(',', '.');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? NaN : parsed;
}