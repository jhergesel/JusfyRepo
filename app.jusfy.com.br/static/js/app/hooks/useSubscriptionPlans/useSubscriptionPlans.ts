import { SUBSCRIPTION_PLANS } from './subscriptionPlansData';
import type { SubscriptionPlan, FindPlanOptions } from './types';
import { isNil, isEmpty } from 'lodash';

export const findPlan = (options: FindPlanOptions): SubscriptionPlan | null => {
  if ('reactivationOfferType' in options && options.reactivationOfferType != null && options.reactivationOfferType !== '') {
    const matches = SUBSCRIPTION_PLANS.filter(
      plan => plan.reactivationOfferType === options.reactivationOfferType
    );
    return matches.length === 1 ? matches[0] : null;
  }

  if (!('plan_type' in options) || !('billingCycle' in options)) return null;
  const {
    plan_type,
    billingCycle,
    hasJusProcessos = false,
    jusprocessos_count,
    is_offer = false,
    affiliation_type,
  } = options;

  const isAffiliationRequested = !isNil(affiliation_type) && !isEmpty(affiliation_type);

  const matchingPlans = SUBSCRIPTION_PLANS.filter(plan => {
    if (plan.reactivationOfferType != null) return false;
    const planHasJusProcessos = Boolean(plan.jusprocessos);

    const matches: Record<string, boolean> = {
      plan_type: plan.plan_type === plan_type,
      billingCycle: plan.billingCycle === billingCycle,
      is_offer: plan.is_offer === is_offer,
      jusprocessos: !hasJusProcessos && !planHasJusProcessos || hasJusProcessos && planHasJusProcessos,
      jusprocessos_count: !hasJusProcessos
        ? !plan.jusprocessos_count
        : plan.jusprocessos_count === jusprocessos_count,
      affiliation_type: isAffiliationRequested ? plan.affiliation_type === affiliation_type : isNil(plan.affiliation_type),
    };

    return Object.values(matches).every(m => m);
  });

  if (matchingPlans.length < 1) {
    return null;
  }

  if (matchingPlans.length > 1) {
    return null;
  }

  const foundPlan = matchingPlans[0];

  return foundPlan;
};

/**
 * Searches for subscription plans based on the provided filter options.
 * 
 * @param options - Filter options (single object or array of objects)
 * @returns When array: always returns an array, filtering out null results (may be empty).
 *          When single object: returns the matching plan or null if not found.
 * 
 * @example
 * // Single object - returns SubscriptionPlan | null
 * const plan = getSubscriptionPlans({ plan_type: 'master', billingCycle: 'monthly' });
 * 
 * @example
 * // Array - always returns SubscriptionPlan[] (filters nulls)
 * const plans = getSubscriptionPlans([
 *   { plan_type: 'starter', billingCycle: 'monthly' },
 *   { plan_type: 'master', billingCycle: 'annually' }
 * ]);
 */
export function getSubscriptionPlans(
  options: FindPlanOptions
): SubscriptionPlan | null;
export function getSubscriptionPlans(
  options: FindPlanOptions[]
): SubscriptionPlan[];
export function getSubscriptionPlans(
  options: FindPlanOptions | FindPlanOptions[]
): SubscriptionPlan | SubscriptionPlan[] | null {
  if (Array.isArray(options)) {
    return options
      .map(filter => findPlan(filter))
      .filter((plan): plan is SubscriptionPlan => plan !== null && plan !== undefined);
  }
  return findPlan(options);
}

