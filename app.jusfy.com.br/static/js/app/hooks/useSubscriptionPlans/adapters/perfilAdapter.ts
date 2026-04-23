import type { SubscriptionPlan } from '../types';
import { formatPrice } from '../utils/formatPrice';

export const perfilAdapter = (
  plan: SubscriptionPlan | null
): {
  title: string;
  price: string;
  total: string;
  totalValue: number;
  priceValue: number;
} | null => {
  if (!plan) return null;

  const price = formatPrice(plan.amount);
  const total =
    plan.billingCycle === 'monthly'
      ? formatPrice(plan.amount)
      : `(totalizando ${price})`;

  return {
    title: plan.name,
    price,
    total,
    totalValue: plan.amount,
    priceValue: plan.amount,
  };
};

