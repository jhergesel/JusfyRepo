export const sanitizeOnBlur = (value, type = "text") => {
    if (!value) return value;

    const sanitized = value.trim().replace(/\s{2,}/g, " ");

    if (type === "email") {
        return sanitized.toLowerCase();
    }

    return sanitized;
};