export const GamificationChallengeEvent = {
  MEMBER_GET_MEMBER: 'member_get_member',
} as const;

export type GamificationChallengeEventType =
  (typeof GamificationChallengeEvent)[keyof typeof GamificationChallengeEvent];

export const GamificationChallengeVariant = {
  STANDARD: 'standard',
  REFERRAL: 'referral',
} as const;

export type GamificationChallengeVariantType =
  (typeof GamificationChallengeVariant)[keyof typeof GamificationChallengeVariant];

export const isReferralEvent = (event?: string): boolean =>
  event === GamificationChallengeEvent.MEMBER_GET_MEMBER;
