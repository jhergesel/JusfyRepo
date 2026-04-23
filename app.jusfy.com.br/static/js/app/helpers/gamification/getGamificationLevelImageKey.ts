const DIACRITICS_REGEX = /[\u0300-\u036f]/g;
const DEFAULT_GAMIFICATION_LEVEL_IMAGE_KEY = 'iniciante';

export function getGamificationLevelImageKey(levelName?: string | null): string {
  if (typeof levelName !== 'string') {
    return DEFAULT_GAMIFICATION_LEVEL_IMAGE_KEY;
  }

  const normalized = levelName
    .toLowerCase()
    .normalize('NFD')
    .replace(DIACRITICS_REGEX, '')
    .trim();

  return normalized || DEFAULT_GAMIFICATION_LEVEL_IMAGE_KEY;
}
