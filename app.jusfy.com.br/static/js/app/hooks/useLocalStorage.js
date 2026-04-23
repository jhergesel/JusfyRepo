import {
    useState
} from "react";

const useLocalStorage = key => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        try {
            return storedValue && storedValue !== "undefined" ?
                JSON.parse(storedValue) :
                null;
        } catch {
            return null;
        }
    });

    const setLocalStorageValue = newValue => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    const getToken = () => {
        return value;
    };

    const setToken = token => {
        setLocalStorageValue(token);
    };

    const clear = () => {
        localStorage.removeItem(key);
        setValue(null);
    };

    const hasToken = !!value;

    return {
        getToken,
        setToken,
        clear,
        hasToken
    };
};

export default useLocalStorage;