import {
    useState,
    useEffect
} from "react";
import useUnleashFeatureFlagAdapter from "../../adapter/UnleashFeatureFlagAdapter";
import {
    FEATURE_FLAGS,
    FEATURE_FLAG_TYPES
} from "../../constants/FeatureFlag";

const flattenFlags = flagsGroup =>
    Object.values(flagsGroup).flatMap(group => Object.values(group));

const ALL_FLAGS = flattenFlags(FEATURE_FLAGS);

const resolveFlagType = flagName => {
    if (!ALL_FLAGS.includes(flagName)) {
        console.warn(
            `[useFeatureFlag] Feature flag "${flagName}" does not exist`
        );
        return null;
    }

    if (Object.values(FEATURE_FLAGS.PERMISSION).includes(flagName)) {
        return FEATURE_FLAG_TYPES.PERMISSION;
    }

    if (Object.values(FEATURE_FLAGS.RELEASE).includes(flagName)) {
        return FEATURE_FLAG_TYPES.RELEASE;
    }

    return FEATURE_FLAG_TYPES.KILL_SWITCH;

};

const useFeatureFlag = (flagName) => {
    const {
        isEnabled,
        isUserEnabled,
        flagsReady
    } =
    useUnleashFeatureFlagAdapter();

    const [isFeatureFlagEnable, setIsFeatureFlagEnable] = useState(false);

    useEffect(() => {
        let mounted = true;

        const checkKillSwitch = async () => {
            return isEnabled(flagName);
        };

        const checkPermission = async () => {
            return isUserEnabled(flagName);
        };

        const checkFlag = async () => {
            try {
                const type = resolveFlagType(flagName);

                if (type === FEATURE_FLAG_TYPES.PERMISSION) {
                    const enabled = await checkPermission();
                    if (mounted) setIsFeatureFlagEnable(enabled);
                    return;
                }

                const enabled = await checkKillSwitch();
                if (mounted) setIsFeatureFlagEnable(enabled);
            } catch (error) {
                console.error(error);
                if (mounted) setIsFeatureFlagEnable(false);
            }
        };

        if (flagName) {
            checkFlag();
        }

        return () => {
            mounted = false;
        };
    }, [flagName, flagsReady, isEnabled, isUserEnabled]);

    return {
        isFeatureFlagEnable,
        flagsReady
    };
};

export default useFeatureFlag;