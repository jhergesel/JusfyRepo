import {
    useSelector
} from "react-redux";
import useSubscriptionStatus from "./useSubscriptionStatus";

const getCreditsStatus = ({
    isLoadingCredits,
    hasSubscription,
    hasBonus,
}) => {
    if (isLoadingCredits) {
        return {
            isRestricted: false,
            isLoading: true,
        };
    }

    const hasAccess = hasSubscription || hasBonus;

    return {
        hasJusProcessos: true,
        isRestricted: !hasAccess,
        isLoading: false,
    };
};

const getSubscriptionStatusResult = ({
    isLoadingSubscription,
    isRestrictedSubscription,
    hasJusProcessosSubscription
}) => {
    if (isLoadingSubscription) {
        return {
            isRestricted: false,
            hasJusProcessos: false,
            isLoading: true,
        };
    }

    return {
        isRestricted: isRestrictedSubscription,
        hasJusProcessos: hasJusProcessosSubscription,
        isLoading: false,
    };
};

const useSubscriptionOrCredits = () => {
    const user = useSelector((state) => state.auth.user);
    const creditsState = useSelector((state) => state.credits);

    const hasSubscription = creditsState ? .credits ? .hasSubscription ? ? false;
    const hasBonus = creditsState ? .credits ? .hasBonus ? ? false;
    const isLoadingCredits = creditsState ? .isLoading ? ? false;
    const hasJusProcessosCredits = creditsState ? .credits ? .hasSubscription || creditsState ? .credits ? .hasBonus;

    const {
        isRestricted: isRestrictedSubscription,
        isLoading: isLoadingSubscription,
        hasJusProcessos: hasJusProcessosSubscription,
    } = useSubscriptionStatus();

    const isUsingCredits = user ? .use_credits;

    if (isUsingCredits) {
        return getCreditsStatus({
            isLoadingCredits,
            hasSubscription,
            hasBonus,
            hasJusProcessosCredits,
        });
    }

    return getSubscriptionStatusResult({
        isLoadingSubscription,
        isRestrictedSubscription,
        hasJusProcessosSubscription
    });
};

export default useSubscriptionOrCredits;