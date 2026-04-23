export const hydrateNumber = (value, defaultValue, min = 0) => {
    return Number.isNaN(Number(value)) ? defaultValue : Math.max(min, Number(value || defaultValue));
}