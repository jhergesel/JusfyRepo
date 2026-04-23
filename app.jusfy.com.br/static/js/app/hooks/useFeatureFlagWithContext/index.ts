import { ReactNode, useEffect, useState } from "react";
import useUnleashFeatureFlagAdapter from "../../adapter/UnleashFeatureFlagAdapter";

const useFeatureFlagWithContext = (
  featureFlag: string,
  context: Record<string, string | number>
) => {
  const { rolloutReleaseByContextDirectly, flagsReady } =
    useUnleashFeatureFlagAdapter();
  const [isFeatureFlagEnable, setIsFeatureFlagEnable] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const checkFlag = async () => {
      try {
        const enabled = await rolloutReleaseByContextDirectly(
          featureFlag,
          context
        );
        if (mounted) setIsFeatureFlagEnable(enabled);
      } catch (error) {
        console.error(
          `[useFeatureFlagWithContext] Failed to check flag: ${featureFlag}`,
          error
        );
        if (mounted) setIsFeatureFlagEnable(false);
      }
    };

    if (featureFlag && context) {
      const hasUndefinedValues = Object.values(context).some(
        value => value === undefined
      );

      if (hasUndefinedValues) {
        setIsFeatureFlagEnable(false);
        return;
      }

      checkFlag();
    } else {
      setIsFeatureFlagEnable(false);
    }

    return () => {
      mounted = false;
    };
  }, [featureFlag, JSON.stringify(context), rolloutReleaseByContextDirectly]);

  const handleRenderByFeatureFlag = (
    component: ReactNode,
    defaultComponent: ReactNode
  ): ReactNode => {
    return isFeatureFlagEnable ? component : defaultComponent;
  };

  return { handleRenderByFeatureFlag, isFeatureFlagEnable, flagsReady };
};

export default useFeatureFlagWithContext;
