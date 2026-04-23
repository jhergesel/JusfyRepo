const TERMS_STORAGE_KEY = "acceptedTerms";

export const getAcceptedTerms = (): boolean => {
  return localStorage.getItem(TERMS_STORAGE_KEY) === "true";
};

export const setAcceptedTermsStorage = (value: boolean): void => {
  localStorage.setItem(TERMS_STORAGE_KEY, String(value));
};
