import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getUserStats, getLevels, getChallenges } from '../api';
import { getGamificationLevelImageKey } from 'app/helpers/gamification/getGamificationLevelImageKey';
import type { RootState } from 'redux/types';

export type GamificationUserStats = {
  name: string;
  avatar: string | null;
  level: string;
  levelId: number | null;
  currentXP: number;
  nextLevelXP: number;
  pointsToNextLevel: number;
  totalXP: number;
  city: string | null;
  state: string | null;
  ranking: number | null;
  nextLevel: unknown | null;
  baseDate: string | null;
  benefitsBaseDate: string | null;
  benefitsValidUntil: string | null;
};

export type GamificationLevel = {
  id: number;
  name: string;
  img: string;
  startPoints: number;
  endPoints: number;
};

type UseGamificationQueryOptions = {
  userStatsOptions?: Omit<
    UseQueryOptions<GamificationUserStats>,
    'queryKey' | 'queryFn'
  >;
  levelsOptions?: Omit<UseQueryOptions<GamificationLevel[]>, 'queryKey' | 'queryFn'>;
};

// Query keys centralizadas
export const GAMIFICATION_KEYS = {
  userStats: ['gamification', 'userStats'],
  levels: ['gamification', 'levels'],
  challenges: ['gamification', 'challenges'],
} as const;

const FIVE_MINUTES = 1000 * 60 * 5;
const THIRTY_MINUTES = 1000 * 60 * 30;

const FALLBACK_USER_STATS: GamificationUserStats = {
  name: 'Você',
  avatar: null,
  level: 'Iniciante',
  levelId: null,
  currentXP: 0,
  nextLevelXP: 100,
  pointsToNextLevel: 0,
  totalXP: 0,
  city: null,
  state: null,
  ranking: null,
  nextLevel: null,
  baseDate: null,
  benefitsBaseDate: null,
  benefitsValidUntil: null,
};

export const useGamificationQuery = (options: UseGamificationQueryOptions = {}) => {
  const { user, authToken } = useSelector((state: RootState) => state.auth);

  const {
    data: userStats,
    isLoading: userStatsLoading,
    refetch: refetchUserStats,
  } = useQuery<GamificationUserStats>({
    queryKey: GAMIFICATION_KEYS.userStats,
    queryFn: async () => {
      const response = await getUserStats(authToken);
      const data = response?.data || response;

      return {
        name: data.name || user?.name || 'Você',
        avatar: data.picture || null,
        level: data.level?.name || 'Iniciante',
        levelId: data.level?.id || null,
        currentXP: data.currentPoints || 0,
        nextLevelXP: data.level?.endPoints || data.nextLevel?.startPoints || 100,
        pointsToNextLevel: data.nextLevel?.pointsToNextLevel || 0,
        totalXP: data.currentPoints || 0,
        city: data.city ?? null,
        state: data.state ?? null,
        ranking: data.ranking || null,
        nextLevel: data.nextLevel || null,
        baseDate: data.base_date || data.baseDate || null,
        benefitsBaseDate: data.benefitsBaseDate || data.benefits_base_date || null,
        benefitsValidUntil:
          data.benefitsValidUntil || data.benefits_valid_until || null,
      } as GamificationUserStats;
    },
    enabled: !!authToken,
    staleTime: FIVE_MINUTES,
    cacheTime: THIRTY_MINUTES,
    meta: { persist: true },
    ...options.userStatsOptions,
  });

  const { data: levels, isLoading: levelsLoading } = useQuery<GamificationLevel[]>({
    queryKey: GAMIFICATION_KEYS.levels,
    queryFn: async () => {
      const response = await getLevels(authToken);
      const data = response?.data || response;

      if (data && Array.isArray(data)) {
        return data.map(
          (level: {
            id: number;
            name: string;
            start_points: number;
            end_points: number;
          }) => ({
            id: level.id,
            name: level.name,
            img: getGamificationLevelImageKey(level.name),
            startPoints: level.start_points,
            endPoints: level.end_points,
          }),
        ) as GamificationLevel[];
      }
      return [] as GamificationLevel[];
    },
    enabled: !!authToken,
    staleTime: THIRTY_MINUTES,
    cacheTime: THIRTY_MINUTES * 2,
    meta: { persist: true },
    ...options.levelsOptions,
  });

  return {
    userStats:
      userStats ||
      ({
        ...FALLBACK_USER_STATS,
        name: user?.name || FALLBACK_USER_STATS.name,
      } as GamificationUserStats),
    levels: (levels || []) as GamificationLevel[],
    loading: Boolean(userStatsLoading || levelsLoading),
    refetchUserStats,
  };
};

export const useGamificationChallengesQuery = (
  options: Omit<UseQueryOptions<unknown[]>, 'queryKey' | 'queryFn'> = {},
) => {
  const { authToken } = useSelector((state: RootState) => state.auth);

  return useQuery<unknown[]>({
    queryKey: GAMIFICATION_KEYS.challenges,
    queryFn: async () => {
      const data = await getChallenges(authToken);
      return Array.isArray(data) ? data : [];
    },
    enabled: !!authToken,
    staleTime: FIVE_MINUTES,
    cacheTime: THIRTY_MINUTES,
    meta: { persist: true },
    ...options,
  });
};
