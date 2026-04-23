import React, {
    useEffect,
    useState
} from "react";
import {
    Redirect
} from "react-router-dom";
import useUnleashFeatureFlagAdapter from "../../adapter/UnleashFeatureFlagAdapter";

function WithFeatureFlag(WrappedComponent, flagName) {
    const IsEnabled = FallbackComponent => {
        return function FeatureWrapper(props) {
            const adapter = useUnleashFeatureFlagAdapter();

            const {
                isEnabled
            } = adapter || {};
            const [enabled, setEnabled] = useState(null);

            useEffect(() => {
                if (!isEnabled) {
                    setEnabled(false);
                    return;
                }

                let mounted = true;

                (async () => {
                    try {
                        const result = await isEnabled(flagName);
                        if (mounted) setEnabled(result);
                    } catch (err) {
                        console.error("Erro ao verificar feature flag:", flagName, err);
                        if (mounted) setEnabled(false);
                    }
                })();

                return () => {
                    mounted = false;
                };
            }, [flagName, isEnabled]);

            if (enabled === null) return null;

            if (!enabled && !FallbackComponent) return null;

            return enabled ? ( <
                WrappedComponent { ...props
                }
                />
            ) : ( <
                FallbackComponent { ...props
                }
                />
            );
        };
    };

    const RedirectTo = (path = "/dashboard") => {
        return function FeatureRedirect(props) {
            const adapter = useUnleashFeatureFlagAdapter();

            const {
                isEnabled,
                flagsReady
            } = adapter || {};
            const [enabled, setEnabled] = useState(null);

            useEffect(() => {
                if (!isEnabled) {
                    setEnabled(false);
                    return;
                }

                let mounted = true;

                (async () => {
                    try {
                        const result = await isEnabled(flagName);
                        if (mounted) setEnabled(result);
                    } catch (err) {
                        console.error("Erro ao verificar feature flag:", flagName, err);
                        if (mounted) setEnabled(false);
                    }
                })();

                return () => {
                    mounted = false;
                };
            }, [flagName, isEnabled]);

            if (enabled === null) return null;

            return enabled ? ( <
                WrappedComponent { ...props
                }
                />
            ) : flagsReady ? ( <
                Redirect to = {
                    path
                }
                />
            ) : null;
        };
    };

    return {
        IsEnabled,
        RedirectTo,
    };
}

export default WithFeatureFlag;