import axios from "axios";
import {
    useMemo
} from "react";
import {
    useSelector
} from "react-redux";
import {
    config
} from '../../config/env';
import traceId from "../../redux/traceId";

const useUnleashFeatureFlagAdapter = () => {
    const userId = useSelector(state => state.auth.user ? .id);
    const apiKey = config.featureFlag.featureFlagApiKey;
    const baseUrl = config.featureFlag.featureFlagApiUrl;

    const fetchFlagEnabled = async flagName => {
        try {
            const {
                data
            } = await axios.get(
                `${baseUrl}/unleash/is-enabled/${flagName}`, {
                    headers: {
                        "x-api-key": apiKey,
                        "x-trace-id": traceId
                    },
                }
            );
            return data;
        } catch (error) {
            console.log("error ao buscar flags", error);
            return false;
        }
    };

    const fetchUserFlagEnabled = async flagName => {
        try {
            if (!userId) {
                console.warn(
                    `useFeatureFlag: userId is required for permission flag "${flagName}"`
                );
                return false;
            }
            const {
                data
            } = await axios.get(
                `${baseUrl}/unleash/has-permission-by-user-id/${flagName}/${userId}`, {
                    headers: {
                        "x-api-key": apiKey,
                        "x-trace-id": traceId
                    },
                }
            );
            return data;
        } catch (error) {
            console.log("error ao buscar flags", error);
            return false;
        }
    };

    const rolloutReleaseByContextDirectly = async (flagName, context) => {
        try {
            if (!context) {
                console.warn(
                    `useFeatureFlag: context is required for permission flag "${flagName}"`
                );
                return false;
            }
            const {
                data
            } = await axios.post(
                `${baseUrl}/unleash/direct/rollout-release-by-context/${flagName}`, {
                    context
                }, {
                    headers: {
                        "x-api-key": apiKey,
                        "x-trace-id": traceId
                    },
                }
            );
            return data;
        } catch (error) {
            console.log("error ao buscar flags", error);
            return false;
        }
    };

    return useMemo(
        () => ({
            isEnabled: fetchFlagEnabled,
            isUserEnabled: fetchUserFlagEnabled,
            rolloutReleaseByContextDirectly,
            flagsReady: true,
        }), [userId]
    );
};

export default useUnleashFeatureFlagAdapter;