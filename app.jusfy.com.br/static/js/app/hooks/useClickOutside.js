import {
    useEffect,
    useRef
} from "react";

function useClickOutside(callback, ignoredElementIds = []) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedElement = event.target;

            const isInIgnoredElement = ignoredElementIds.some((idFragment) => {
                const exactElement = document.getElementById(idFragment);
                if (exactElement && exactElement.contains(clickedElement)) {
                    return true;
                }

                const elementsContainingId = document.querySelectorAll(
                    `[id*="${idFragment}"]`
                );

                return Array.from(elementsContainingId).some((element) =>
                    element.contains(clickedElement)
                );
            });

            if (isInIgnoredElement) return;

            if (ref.current && !ref.current.contains(clickedElement)) {
                callback();
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [callback, ignoredElementIds]);

    return ref;
}

export default useClickOutside;