import { GamificationChallengeEvent } from './challengeDomain';

export type ChallengeActionInput = {
  event?: string;
  user_status?: string;
  userStatus?: string;
};

type InternalDestination = {
  type: 'internal';
  path: string;
};

type ExternalDestination = {
  type: 'external';
  url: string;
};

type NoDestination = {
  type: 'none';
};

export type ChallengeStartDestination =
  | InternalDestination
  | ExternalDestination
  | NoDestination;

const CHALLENGE_EVENT_ROUTE_MAP: Record<string, string> = {
  jussign_doc_created: '/assinaturas/form',
  plan_renewed: '/perfil',
  subuser_created: '/usuarios',
  juscalc_calculation: '/calculadoras',
  jusgpt_chat_started: '/gpt',
  jusmatch_unlock: '/oportunidades',
  jusfinder_search: '/jusfinder/query',
  juspage_access: '/page',
  payment_link_created: '/jusfypay',
  payment_successful: '/jusfypay',
};

export const isChallengeBlockedForAction = (
  challenge: ChallengeActionInput,
): boolean => {
  const userStatus = challenge.user_status ?? challenge.userStatus;
  // Concluídos só continuam acionáveis no caso infinito de referral.
  return (
    userStatus === 'finished' &&
    challenge.event !== GamificationChallengeEvent.MEMBER_GET_MEMBER
  );
};

export const shouldOpenInviteModal = (
  challenge: ChallengeActionInput,
): boolean => challenge.event === GamificationChallengeEvent.MEMBER_GET_MEMBER;

export const resolveChallengeStartDestination = (
  event?: string,
): ChallengeStartDestination => {
  if (!event) return { type: 'none' };

  // Alguns desafios levam para recursos externos, sem navegação interna.
  if (['jusfy_training_session', 'jusfy_training_satisfaction'].includes(event)) {
    return {
      type: 'external',
      url: 'https://help.jusfy.com.br/aprenda-a-usar-jusfy-e-acelere-sua-advocacia-jusfy',
    };
  }

  if (event === 'google_review') {
    return {
      type: 'external',
      url: 'https://47445192.hs-sites.com/conclus%C3%A3o-de-desafio',
    };
  }

  const internalPath = CHALLENGE_EVENT_ROUTE_MAP[event];

  if (internalPath) {
    return {
      type: 'internal',
      path: internalPath,
    };
  }

  return { type: 'none' };
};
