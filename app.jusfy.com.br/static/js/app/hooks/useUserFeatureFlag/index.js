import {
    useState,
    useEffect
} from "react";
import useUnleashFeatureFlagAdapter from "../../adapter/UnleashFeatureFlagAdapter";

const useUserFeatureFlag = featureFlag => {
    const {
        isUserEnabled,
        flagsReady
    } = useUnleashFeatureFlagAdapter();
    const [isFeatureFlagEnable, setIsFeatureFlagEnable] = useState(false);

    useEffect(() => {
        let mounted = true;

        const checkFlag = async () => {
            try {
                const enabled = await isUserEnabled(featureFlag);
                if (mounted) setIsFeatureFlagEnable(enabled);
            } catch (error) {
                console.error("Failed to check user feature flag:", featureFlag, error);
                if (mounted) setIsFeatureFlagEnable(false);
            }
        };

        if (featureFlag) {
            checkFlag();
        }

        return () => {
            mounted = false;
        };
    }, [featureFlag, isUserEnabled]);

    const handleRenderByFeatureFlag = (component, defaultComponent) => {
        return isFeatureFlagEnable ? component : defaultComponent;
    };

    return {
        handleRenderByFeatureFlag,
        isFeatureFlagEnable,
        flagsReady
    };
};

export default useUserFeatureFlag;