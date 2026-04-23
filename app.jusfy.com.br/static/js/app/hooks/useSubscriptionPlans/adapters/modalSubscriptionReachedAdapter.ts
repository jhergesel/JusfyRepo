import type { SubscriptionPlan } from '../types';
import { formatPrice } from '../utils/formatPrice';

export const modalSubscriptionReachedAdapter = (
  plan: SubscriptionPlan | null
): { title: string; price: string; total: string } | null => {
  if (!plan) return null;

  const price = formatPrice(plan.amount);
  const total =
    plan.billingCycle === 'monthly' ? '' : `(totalizando ${price})`;

  return {
    title: plan.name,
    price: plan.billingCycle === 'monthly' ? `${price}/mensal` : `${price}/anual`,
    total,
  };
};

