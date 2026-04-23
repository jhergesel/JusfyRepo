import { useState, useCallback } from 'react';
import { useUserPreferences } from 'app/services/userPreferences';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';

interface UseMenuVersionToggleParams {
  onNewMenuVersionChange?: () => void;
}

export function useMenuVersionToggle({
  onNewMenuVersionChange,
}: UseMenuVersionToggleParams) {
  const {
    preferences: { menuVersion },
    updateUserPreferences,
    updateUserPreferencesAsync,
  } = useUserPreferences();

  const [showDisableNewMenuModal, setShowDisableNewMenuModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [apiComplete, setApiComplete] = useState(false);
  const [apiError, setApiError] = useState<unknown | null>(null);

  const handleToggleChange = useCallback(
    (value: boolean) => {
      if (value) {
        updateUserPreferences({ menuVersion: MENU_VERSION_VALUES.v1 });
        onNewMenuVersionChange?.();
      } else {
        setShowDisableNewMenuModal(true);
      }
    },
    [onNewMenuVersionChange, updateUserPreferences],
  );

  const handleDisableNewMenuModalClose = useCallback(() => {
    setShowDisableNewMenuModal(false);
  }, []);

  const handleDisableNewMenuConfirm = useCallback(() => {
    setShowDisableNewMenuModal(false);
    setApiComplete(false);
    setApiError(null);
    setShowLoadingModal(true);
    updateUserPreferencesAsync({ menuVersion: MENU_VERSION_VALUES.v1 })
      .then(() => setApiComplete(true))
      .catch((err) => {
        setApiComplete(true);
        setShowLoadingModal(false);
        setApiError(err);
      });
  }, [updateUserPreferencesAsync]);

  const handleLoadingComplete = useCallback(() => {
    setShowLoadingModal(false);
    onNewMenuVersionChange?.();
  }, [onNewMenuVersionChange]);

  return {
    menuVersion,
    isNewMenuVersionEnabled: menuVersion === MENU_VERSION_VALUES.v2,
    showDisableNewMenuModal,
    showLoadingModal,
    apiComplete,
    apiError,
    handleToggleChange,
    handleDisableNewMenuModalClose,
    handleDisableNewMenuConfirm,
    handleLoadingComplete,
  };
}
