import {
    useEffect,
    useState
} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import axios from "axios";

export const useServeyModal = () => {
    const [score, setScore] = useState(0);
    const [feedback_text, setFeedback_text] = useState("");
    const [errorScore, setErrorScore] = useState(false);

    const dispatch = useDispatch();

    const {
        feature_name,
        pretty_name
    } = useSelector(
        state => state.app.csat_modal_configuration
    );

    const {
        is_csat_modal_open
    } = useSelector(state => state ? .app);

    const closeModal = () => {
        dispatch({
            type: "CLOSE_CSAT_MODAL",
        });

        resetStatesModal();

        closedModalRequest();
    };

    const closedModalRequest = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/csat`, {
                feature_name,
                score: 0,
                feedback_text: "",
                is_answered: false,
            });
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmit = ({
        feature_name,
        score,
        feedback_text
    }) => {
        if (score === 0) {
            setErrorScore(true);
            return;
        }

        dispatch({
            type: "SUBMIT_CSAT_SURVEY",
            payload: {
                feature_name,
                score,
                feedback_text,
            },
        });

        resetStatesModal();
    };
    const resetStatesModal = () => {
        setScore(0);

        setFeedback_text("");

        setErrorScore(false);
    };

    useEffect(() => {
        setErrorScore(false);
    }, [score]);

    return {
        is_csat_modal_open,
        closeModal,
        onSubmit,
        score,
        setScore,
        feedback_text,
        setFeedback_text,
        errorScore,
        setErrorScore,
        feature_name,
        pretty_name,
    };
};