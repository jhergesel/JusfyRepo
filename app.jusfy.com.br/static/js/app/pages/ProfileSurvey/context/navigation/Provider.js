import React, {
    createContext
} from "react";

import useNavigationState from "./state/useNavigationState";

export const NavigationContext = createContext({});

const NavigationProvider = ({
    children
}) => {
    const {
        steps,
        setAdditionalSteps,
        nextStep,
        prevStep,
        getStep,
        getCurrentStep,
        navigationSize,
        isFirstStep,
        isLastStep,
        buttonDisabled,
        setButtonDisabled,
    } = useNavigationState();

    return ( <
        NavigationContext.Provider value = {
            {
                steps,
                setAdditionalSteps,
                nextStep,
                prevStep,
                getStep,
                getCurrentStep,
                navigationSize,
                isFirstStep,
                isLastStep,
                buttonDisabled,
                setButtonDisabled,
            }
        } >
        {
            children
        } <
        /NavigationContext.Provider>
    );
};

export default NavigationProvider;