import { GamificationChallengeEvent } from './challengeDomain';

const DAY_IN_MS = 1000 * 60 * 60 * 24;

type ChallengeLike = {
  event?: string;
  points?: number | string | null;
  xpReward?: number | string | null;
  user_status?: string;
  userStatus?: string;
  user_progress?: {
    next_available_at?: string | null;
    nextAvailableAt?: string | null;
  } | null;
  userProgress?: {
    next_available_at?: string | null;
    nextAvailableAt?: string | null;
  } | null;
};

export const JUSPAY_SPECIAL_EVENTS = [
  'payment_link_created',
  'payment_successful',
] as const;

export const getChallengePoints = (challenge: Partial<ChallengeLike> = {}) => {
  const rawPoints = challenge.points ?? challenge.xpReward;

  if (typeof rawPoints === 'number') {
    return Number.isFinite(rawPoints) ? rawPoints : 0;
  }

  if (typeof rawPoints === 'string') {
    return Number(rawPoints) || 0;
  }

  return 0;
};

export const isJuspaySpecialEvent = (event?: string) =>
  typeof event === 'string' && JUSPAY_SPECIAL_EVENTS.includes(event as any);

export const formatChallengeRenewalText = (nextAvailableAt?: string | null) => {
  if (!nextAvailableAt) return '';

  const nextDate = new Date(nextAvailableAt);
  const now = new Date();
  const nextUtcMidnight = Date.UTC(
    nextDate.getUTCFullYear(),
    nextDate.getUTCMonth(),
    nextDate.getUTCDate(),
  );
  const todayUtcMidnight = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  const diffInDays = Math.round((nextUtcMidnight - todayUtcMidnight) / DAY_IN_MS);

  if (diffInDays === 1) return 'Amanhã';
  if (diffInDays > 1) return `em ${diffInDays} dias`;
  return '';
};

const getChallengeRank = (challenge: Partial<ChallengeLike> = {}) => {
  // Desafios especiais de JusfyPay têm prioridade máxima na vitrine.
  if (isJuspaySpecialEvent(challenge.event)) return -1;
  // Referral fica logo após os especiais para manter destaque comercial.
  if (challenge.event === GamificationChallengeEvent.MEMBER_GET_MEMBER) return 0;

  const status = challenge.user_status ?? challenge.userStatus;
  const isFinished = status === 'finished';
  // Pendentes vêm antes de concluídos para incentivar ação imediata.
  if (!isFinished) return 1;

  const progress = challenge.user_progress ?? challenge.userProgress;
  const renewalText = formatChallengeRenewalText(
    progress?.next_available_at ?? progress?.nextAvailableAt,
  );
  // Concluídos que renovam em breve aparecem antes dos concluídos sem renovação.
  if (renewalText) return 2;

  return 3;
};

export const sortGamificationChallenges = <T extends ChallengeLike>(
  challenges: T[] = [],
) =>
  [...challenges].sort((challengeA, challengeB) => {
    const rankDiff = getChallengeRank(challengeA) - getChallengeRank(challengeB);
    if (rankDiff !== 0) return rankDiff;

    return getChallengePoints(challengeB) - getChallengePoints(challengeA);
  });
