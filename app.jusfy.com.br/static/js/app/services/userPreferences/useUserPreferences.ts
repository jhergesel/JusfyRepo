import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  AuthStateForUserPreferences,
  DASHBOARD_VERSION_VALUES,
  MENU_VERSION_VALUES,
  UserPreferences,
} from './types';
import { useSelector } from 'react-redux';
import { getUserPreferences, updateUserPreferences } from './api';

export const USER_PREFERENCES_QUERY_KEY = ['userPreferences'] as const;

const DEFAULT_PREFERENCES: UserPreferences = {
  menuVersion: MENU_VERSION_VALUES.v1,
  dashboardVersion: DASHBOARD_VERSION_VALUES.v1,
  favoriteToolIds: [],
};

const TEN_MINUTES = 1000 * 60 * 10;

export function useUserPreferences() {
  const queryClient = useQueryClient();
  const authToken = useSelector(
    (state: AuthStateForUserPreferences) => state.auth?.authToken,
  );
  const userId = useSelector(
    (state: AuthStateForUserPreferences) => state.auth?.user?.id,
  );

  const queryKey = [...USER_PREFERENCES_QUERY_KEY, userId] as const;

  const { data: preferences, isLoading, isError, error } = useQuery({
    queryKey,
    queryFn: () => getUserPreferences(),
    enabled: Boolean(authToken) && userId != null,
    staleTime: TEN_MINUTES,
    meta: { persist: true },
    retry: 3,
  });

  const mutation = useMutation({
    mutationFn: updateUserPreferences,
    onMutate: () => {
      const previous = queryClient.getQueryData<UserPreferences>(queryKey);
      return { previous };
    },
    onSuccess: async (_, patch) => {
      queryClient.setQueryData<UserPreferences>(queryKey, (prev) => ({
        ...DEFAULT_PREFERENCES,
        ...prev,
        ...patch,
      }));
      if (patch.favoriteToolIds !== undefined) {
        await queryClient.invalidateQueries({
          queryKey: ['dashboard-favorite-tools'],
          refetchType: 'all',
        });
      }
    },
    onError: (error, _variables, context) => {
      if (context?.previous !== undefined) {
        queryClient.setQueryData<UserPreferences>(queryKey, context.previous);
      }
    },
  });

  const addFavoriteToolIdAsync = async (toolId: number) => {
    const current =
      queryClient.getQueryData<UserPreferences>(queryKey) ||
      preferences ||
      DEFAULT_PREFERENCES;
    const favoriteToolIds = current.favoriteToolIds || [];

    if (favoriteToolIds.includes(toolId)) return;

    const nextFavoriteToolIds = [...favoriteToolIds, toolId];
    await mutation.mutateAsync({ favoriteToolIds: nextFavoriteToolIds });
  };

  return {
    preferences: preferences || DEFAULT_PREFERENCES,
    isLoading,
    isError,
    error,
    updateUserPreferences: mutation.mutate,
    updateUserPreferencesAsync: mutation.mutateAsync,
    addFavoriteToolIdAsync,
    isUpdating: mutation.isPending,
  };
}
