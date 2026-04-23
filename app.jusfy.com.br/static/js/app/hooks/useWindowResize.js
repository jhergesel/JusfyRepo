import {
    useEffect
} from "react";
import {
    useState
} from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleDimension = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener("resize", handleDimension);

        return () => {
            window.removeEventListener("resize", handleDimension);
        };
    }, []);

    return windowSize;
}
export function useWindowSizeHeight() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleDimension = () => {
            setScreenHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleDimension);

        return () => {
            window.removeEventListener("resize", handleDimension);
        };
    }, []);

    return screenHeight;
}