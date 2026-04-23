export const checkPathnameIncludes = pages =>
    pages.some(page => window.location.pathname.includes(page));