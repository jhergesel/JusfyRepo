import {
    useContext
} from "react";
import {
    NavigationContext
} from "../../context/navigation/Provider";

import * as S from "./ProgressBar.styles";

const ProgressBar = () => {
    const {
        navigationSize,
        getCurrentStep
    } = useContext(NavigationContext);

    const completedSteps = getCurrentStep() - 1;

    const currentProgress = (100 / navigationSize) * completedSteps;

    return ( <
        S.Container >
        <
        S.Fill progress = {
            currentProgress
        }
        /> <
        /S.Container>
    );
};

export default ProgressBar;