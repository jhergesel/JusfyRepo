import {
    useMemo
} from "react";
import {
    useSelector
} from "react-redux";

export const RESTRICTION_REASONS = {
    NO_SUBSCRIPTION_DATA: "no_subscription_data",
    SERVER_ERROR: "server_error",
    PLAN_EXPIRED: "plan_expired",
    PLAN_CANCELED: "plan_canceled",
    TRIAL_EXPIRED: "trial_expired",
    UNPAID: "unpaid",
    PAYMENT_FAILED: "payment_failed",
    WAITING_PAYMENT: "waiting_payment",
    PENDING_PAYMENT: "pending_payment",
    UNKNOWN_STATUS: "unknown_status",
};

export const RESTRICTION_REASONS_DESCRIPTIONS = {
    [RESTRICTION_REASONS.NO_SUBSCRIPTION_DATA]: "Nenhum dado de assinatura encontrado",
    [RESTRICTION_REASONS.SERVER_ERROR]: "Erro no servidor ao verificar assinatura",
    [RESTRICTION_REASONS.PLAN_EXPIRED]: "Plano expirado",
    [RESTRICTION_REASONS.PLAN_CANCELED]: "Plano cancelado",
    [RESTRICTION_REASONS.TRIAL_EXPIRED]: "Período de teste expirado",
    [RESTRICTION_REASONS.PAYMENT_FAILED]: "Falha no pagamento",
    [RESTRICTION_REASONS.UNPAID]: "Pagamento não realizado",
    [RESTRICTION_REASONS.WAITING_PAYMENT]: "Aguardando pagamento",
    [RESTRICTION_REASONS.PENDING_PAYMENT]: "Aguardando pagamento",
    [RESTRICTION_REASONS.UNKNOWN_STATUS]: "Status de assinatura desconhecido",
};

const EMPTY_SUBSCRIPTION_STATE = {
    status: null,
    hasError: false,
    errorCode: null,
    expirationDate: null,
    startDate: null,
    planAmount: null,
    plan: null,
    provider: null,
    paymentMethod: null,
    cardBrand: null,
    cardLastDigits: null,
    coupon: null,
    hasJusProcessos: false,
    jusProcessosQtd: 0,
    tickets: [],
    isEmpty: true,

    isExpired: false,

    isCanceled: false,
    isTrialExpired: false,
    isUnpaid: false,
    isWaitingPayment: false,
    isPendingPayment: false,
    isFailed: false,
    isPaid: false,
    isTrialing: false,
    isOk: false,

    accessLevel: "restricted_access",
    isLoading: false,
    isRestricted: true,
    isFullAccess: false,
    restrictionReason: RESTRICTION_REASONS.UNKNOWN_STATUS,
    isActive: false,
    isInactive: false,
};

const parseSubscriptionData = subscription => ({
    plan: subscription ? .info ? .plan || null,
    planAmount: subscription ? .info ? .plan_amount || null,
    startDate: subscription ? .info ? .current_period_start,
    expirationDate: subscription ? .info ? .current_period_end,
    status: subscription ? .info ? .status || subscription ? .subscription_info,
    cardBrand: subscription ? .info ? .card_brand || null,
    cardLastDigits: subscription ? .info ? .card_last_digits || null,
    paymentMethod: subscription ? .info ? .payment_method || null,
    hasError: subscription ? .info ? .has_error || false,
    coupon: subscription ? .info ? .coupon || null,
    provider: subscription ? .info ? .provider || null,
    errorCode: subscription ? .error_code || null,
    hasJusProcessos: subscription ? .has_jusprocessos || false,
    jusProcessosQtd: subscription ? .jus_processos_qtd || 0,
    tickets: subscription ? .info ? .tickets || [],
    isEmpty: false,

    isExpired: subscription ? .isExpired || false,

    isCanceled: subscription ? .isCanceled || false,
    isTrialExpired: subscription ? .isTrialExpired || false,
    isUnpaid: subscription ? .isUnpaid || false,
    isWaitingPayment: subscription ? .isWaitingPayment || false,
    isPendingPayment: subscription ? .isPendingPayment || false,
    isFailed: subscription ? .isFailed || false,
    isPaid: subscription ? .isPaid || false,
    isTrialing: subscription ? .isTrialing || false,
    isOk: subscription ? .isOk || false,
    isActive: subscription ? .isActive || false,

    accessLevel: subscription ? .accessLevel,

    isLoading: false,

    isRestricted: subscription ? .isRestricted || false,
    isFullAccess: subscription ? .isFullAccess || false,
    restrictionReason: subscription ? .restrictionReason || false,

    isInactive: subscription ? .isInactive || false,
    isUniversalJusfinder: subscription ? .isUniversalJusfinder || false,
});

const useSubscriptionStatus = () => {
    const {
        subscription,
        isLoading
    } = useSelector(state => ({
        subscription: state.subscription.subscription_status,
        isLoading: state.subscription.is_subscription_status_loading,
    }));

    const subscriptionStatus = useMemo(() => {
        if (isLoading) {
            return {
                ...EMPTY_SUBSCRIPTION_STATE,
                accessLevel: "loading",
                isLoading: true,
                isRestricted: false,
                restrictionReason: null,
                isEmpty: false,
            };
        }

        if (!subscription || Object.keys(subscription).length === 0) {
            return {
                ...EMPTY_SUBSCRIPTION_STATE,
                isLoading: false,
                restrictionReason: RESTRICTION_REASONS.NO_SUBSCRIPTION_DATA,
            };
        }

        if (subscription.info.has_error) {
            return {
                ...EMPTY_SUBSCRIPTION_STATE,
                isLoading: false,
                isRestricted: true,
                restrictionReason: RESTRICTION_REASONS.NO_SUBSCRIPTION_DATA,
            };
        }

        const parsedData = parseSubscriptionData(subscription);

        return {
            ...parsedData,
            isLoading: false,
        };
    }, [subscription, isLoading]);

    return subscriptionStatus;
};

export default useSubscriptionStatus;