/**
 * Removes null, undefined and empty objects/arrays recursively from an object
 * @param {Object} obj - Object to clean
 * @returns {Object} Cleaned object
 */
export default function cleanObject(obj) {
    try {
        if (!obj || typeof obj !== 'object') return obj;

        if (Array.isArray(obj)) {
            const cleaned = obj
                .map((item) => cleanObject(item))
                .filter((item) => item !== null && item !== undefined);
            return cleaned.length ? cleaned : undefined;
        }

        const cleaned = Object.entries(obj)
            .map(([key, value]) => [key, cleanObject(value)])
            .filter(([_, value]) => value !== null && value !== undefined);

        return cleaned.length ? Object.fromEntries(cleaned) : undefined;
    } catch (error) {
        return {};
    }
}