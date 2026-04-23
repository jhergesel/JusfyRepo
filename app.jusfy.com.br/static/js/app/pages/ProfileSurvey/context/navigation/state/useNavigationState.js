import {
    useEffect,
    useState
} from "react";
import {
    ADDITIONAL_STEPS
} from "./constants";

let currentStep = 1;

const INITIAL_STEP = [1, "workContext"];

const useNavigationState = () => {
    const [steps, setSteps] = useState(new Map([INITIAL_STEP]));

    const getStep = () => {
        return steps ? .get(currentStep);
    };

    const [navigation, setNavigation] = useState(getStep());

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [navigationSize, setNavigationSize] = useState(steps.size);

    const setNavigationStep = () => setNavigation(getStep());

    const setAdditionalSteps = STEPS_NAME => {
        const stepsToSet = new Map([
            INITIAL_STEP,
            ...ADDITIONAL_STEPS.get(STEPS_NAME),
        ]);

        setSteps(stepsToSet);
        setNavigationSize(stepsToSet.size);
    };

    const isFirstStep = currentStep === 1;

    const isLastStep = currentStep === steps.size;

    const getCurrentStep = () => currentStep;

    const goToNextStep = () => {
        currentStep += 1;
        setNavigation(getStep());
    };

    const goToPrevStep = () => {
        currentStep -= 1;
        setNavigationStep(getStep());
    };

    const nextStep = () => {
        if (isLastStep) return;

        goToNextStep();
    };

    const prevStep = () => {
        if (isFirstStep) return;

        goToPrevStep();
    };

    useEffect(() => {
        setNavigationStep(getStep());
    }, [steps.size]);

    return {
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
    };
};

export default useNavigationState;