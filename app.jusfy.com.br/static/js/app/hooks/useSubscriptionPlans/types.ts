export const AFFILIATION_TYPES = {
  CAAMG: 'caamg',
} as const;

/**
 * @description Tipo de afiliação do usuário.
 * @example 'caamg' - Usuário afiliado à OABMG
 * @example null - Usuário não afiliado (planos base)
 * @example undefined - Usuário não afiliado (planos base)
 */
export type AffiliationType = 'caamg' | null | undefined;

export interface SubscriptionPlan {
  id: number;
  gateway_id: number;
  name: string;
  description: string;
  amount: number;
  billingCycle: 'monthly' | 'annually';
  periodicity: number;
  installments: number;
  plan_type: 'starter' | 'master' | 'ultimate';
  is_offer: boolean;
  jusprocessos?: boolean;
  jusprocessos_count?: 50 | 200 | 500;
  affiliation_type?: AffiliationType;
  reactivationOfferType?: string;
}

interface FindPlanOptionsBase {
  hasJusProcessos?: boolean;
  jusprocessos_count?: 50 | 200 | 500;
  is_offer?: boolean;
  affiliation_type?: AffiliationType;
}

export type FindPlanOptions =
  | (FindPlanOptionsBase & {
      plan_type: 'starter' | 'master' | 'ultimate';
      billingCycle: 'monthly' | 'annually';
    })
  | (FindPlanOptionsBase & {
      reactivationOfferType: string;
    });

