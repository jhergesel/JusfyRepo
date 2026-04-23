import { toAbsoluteUrl } from '../../../_metronic/_helpers';

export type GamificationLevelRow = {
  id: number;
  name: string;
  img: string;
};

const DEFAULT_LEVELS: GamificationLevelRow[] = [
  { id: 1, name: 'Iniciante', img: 'iniciante' },
  { id: 2, name: 'Aprendiz', img: 'aprendiz' },
  { id: 3, name: 'Praticante', img: 'praticante' },
  { id: 4, name: 'Avancado', img: 'avancado' },
  { id: 5, name: 'Especialista', img: 'especialista' },
  { id: 6, name: 'Mestre', img: 'mestre' },
];

type UserStatsInput = {
  level?: string | number;
  levelId?: number | null;
  currentXP?: number;
  nextLevelXP?: number;
  pointsToNextLevel?: number | null;
};

export function getGamificationLevelPresentation(
  userStats: UserStatsInput,
  levels: GamificationLevelRow[],
) {
  const {
    level = 'Iniciante',
    levelId,
    currentXP = 0,
    nextLevelXP = 100,
    pointsToNextLevel = 0,
  } = userStats;

  const displayLevels =
    Array.isArray(levels) && levels.length > 0 ? levels : DEFAULT_LEVELS;

  const numericLevel = typeof level === 'number' ? level : undefined;
  const levelIdentifier = numericLevel || levelId;

  const currentLevelConfig =
    displayLevels.find((item) => item.name === level) ||
    (levelIdentifier
      ? displayLevels.find((item) => item.id === levelIdentifier)
      : undefined) ||
    displayLevels[0] ||
    DEFAULT_LEVELS[0];

  const currentLevelIndex = Math.max(
    displayLevels.findIndex((item) => item.id === currentLevelConfig.id),
    0,
  );

  const safeCurrentXP = Number(currentXP) || 0;
  const safeNextLevelXP = Number(nextLevelXP) || 100;
  const normalizedPointsToNextLevel = pointsToNextLevel ?? 0;
  const isMaxLevel =
    currentLevelIndex >= displayLevels.length - 1 &&
    normalizedPointsToNextLevel === 0;
  const progressPercentage = isMaxLevel
    ? 100
    : Math.max(0, Math.min((safeCurrentXP / safeNextLevelXP) * 100, 100));

  const imageSrc = toAbsoluteUrl(
    `/media/gamification/${currentLevelConfig.img}-avatar.svg`,
  );
  const imageAlt = `Nível ${currentLevelIndex + 1} ${currentLevelConfig.name}`;

  return {
    displayLevels,
    currentLevelConfig,
    currentLevelIndex,
    progressPercentage,
    imageSrc,
    imageAlt,
    isMaxLevel,
  };
}
