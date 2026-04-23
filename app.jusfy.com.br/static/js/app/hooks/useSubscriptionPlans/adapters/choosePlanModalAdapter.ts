import type { SubscriptionPlan } from '../types';
import { formatPrice } from '../utils/formatPrice';

export const choosePlanModalAdapter = (
  plan: SubscriptionPlan | null
): {
  priceDisplay: string;
  price: number;
  totalPrice: number;
  label: string;
  description: string;
  title: string;
  gateway_id: string;
  name: string;
} | null => {
  if (!plan) return null;

  const priceDisplay = formatPrice(plan.amount);
  const label =
    plan.billingCycle === 'monthly'
      ? 'Assinatura Mensal'
      : 'Assinatura anual';
  const description =
    plan.billingCycle === 'monthly' ? 'Mensal' : 'Anual';
  const title =
    plan.billingCycle === 'monthly' ? 'Assine o Plano Ultimate!' : 'Assine agora!';

  return {
    priceDisplay,
    price: plan.amount,
    totalPrice: plan.amount,
    label,
    description,
    title,
    gateway_id: plan.gateway_id.toString(),
    name: plan.name,
  };
};

