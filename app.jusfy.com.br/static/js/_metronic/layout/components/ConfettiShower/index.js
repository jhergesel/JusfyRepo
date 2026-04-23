import {
    useEffect,
    useState
} from "react";
import Confetti from "react-confetti";

const ConfettiShower = () => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000);
    }, []);
    return <Confetti recycle = {
        showConfetti
    }
    numberOfPieces = {
        250
    }
    />;
};

export default ConfettiShower;