import {
    useState
} from "react";
import {
    useEffect
} from "react";
import useFeatureFlag from "../../../../../../hooks/useFeatureFlag";
import {
    FEATURE_FLAGS
} from "../../../../../../constants/FeatureFlag";
import {
    getSubscriptionPlans,
    choosePlanModalAdapter,
} from "../../../../../../hooks/useSubscriptionPlans";

export const PLAN_PERIODICITY_CONTENT = new Map([
    [
        "annually",
        {
            priceDisplay: "R$93,60",
            price: 93.6,
            totalPrice: 1123.2,
            label: "Assinatura anual",
            description: "Anual",
        },
    ],
    [
        "monthly",
        {
            priceDisplay: "R$117,00",
            price: 117,
            totalPrice: 117,
            label: "Assinatura Mensal",
            description: "Mensal",
        },
    ],
]);

export const INITIAL_PRODUCT = {
    description: "Mensal",
    id: "ultimate",
    name: "Plano Ultimate",
    periodicity: "monthly",
    price: 97,
};
const BILLING_CYCLES = {
    MONTHLY: "monthly",
    ANNUAL: "annually",
};

const BASE_PRICING = {
    ultimate: {
        monthly: {
            priceDisplay: "R$117,00",
            price: 117,
            totalPrice: 117,
            label: "Assinatura Mensal",
            description: "Mensal",
            title: "Assine o Plano Ultimate!",
            gateway_id: "2.103.612",
            name: "ULTIMATE",
        },
        annually: {
            priceDisplay: "R$93,60",
            price: 1123.2,
            totalPrice: 1123.2,
            label: "Assinatura anual",
            description: "Anual",
            title: "Assine agora!",
            gateway_id: "4.405.859",
            name: "ULTIMATE",
        },
    },
};

const JUSPROCESSOS_PRICING = {
    50: {
        ultimate: {
            monthly: {
                priceDisplay: "R$121,90",
                price: 121.9,
                totalPrice: 121.9,
                label: "Assinatura mensal + JusProcessos até 50 processos",
                description: "Mensal",
                title: "Assine o Plano Ultimate!",
                gateway_id: "5.766.992",
                name: "ULTIMATE + JusProcessos até 50 processos",
            },
            annually: {
                priceDisplay: "R$102,50",
                price: 1230.0,
                totalPrice: 1230.0,
                label: "Assinatura anual + JusProcessos até 50 processos",
                description: "Anual",
                title: "Assine agora!",
                gateway_id: "5.766.996",
                name: "ULTIMATE + JusProcessos até 50 processos",
            },
        },
    },

    200: {
        ultimate: {
            monthly: {
                priceDisplay: "R$196,90",
                price: 196.9,
                totalPrice: 196.9,
                label: "Assinatura mensal + JusProcessos até 200 processos",
                description: "Mensal",
                title: "Assine o Plano Ultimate!",
                gateway_id: "5.767.012",
                name: "ULTIMATE + JusProcessos até 200 processos",
            },
            annually: {
                priceDisplay: "R$177,50",
                price: 2130.0,
                totalPrice: 2130.0,
                label: "Assinatura anual + JusProcessos até 200 processo",
                description: "Anual",
                title: "Assine agora!",
                gateway_id: "5.767.015",
                name: "ULTIMATE + JusProcessos até 200 processos",
            },
        },
    },
    500: {
        ultimate: {
            monthly: {
                priceDisplay: "R$346,90",
                price: 346.9,
                totalPrice: 346.9,
                label: "Assinatura mensal + JusProcessos até 500 processos",
                description: "Mensal",
                title: "Assine o Plano Ultimate!",
                gateway_id: "5.767.046",
                name: "ULTIMATE + JusProcessos até 500 processos",
            },
            annually: {
                priceDisplay: "R$327,50",
                price: 3930.0,
                totalPrice: 3930.0,
                label: "Assinatura anual + JusProcessos até 500 processos",
                description: "Anual",
                title: "Assine agora!",
                gateway_id: "5.767.050",
                name: "ULTIMATE + JusProcessos até 500 processos",
            },
        },
    },
};

/**
 * @deprecated This hook uses hardcoded plan values and will be replaced by centralized subscription plans.
 * Use the new getSubscriptionPlans function from hooks/useSubscriptionPlans when the feature flag is enabled.
 */
function useSubscriptionPlans(hasJusProcessos = false, processCount = 200) {
    const {
        isFeatureFlagEnable
    } = useFeatureFlag(
        FEATURE_FLAGS.KILL_SWITCH.USE_PLAN_ID_FROM_CLIENT
    );
    const [billingCycle, setBillingCycle] = useState(BILLING_CYCLES.MONTHLY);
    const [planPrices, setPlanPrices] = useState({
        ultimate: BASE_PRICING["ultimate"]["monthly"],
    });

    const toggleBillingCycle = () => {
        setBillingCycle(prevCycle =>
            prevCycle === BILLING_CYCLES.MONTHLY ?
            BILLING_CYCLES.ANNUAL :
            BILLING_CYCLES.MONTHLY
        );
    };

    useEffect(() => {
        if (!isFeatureFlagEnable) {
            let pricingConfig = BASE_PRICING;

            if (hasJusProcessos) {
                pricingConfig = JUSPROCESSOS_PRICING[processCount];
            }

            const cycle =
                billingCycle === BILLING_CYCLES.ANNUAL ? "annually" : "monthly";

            setPlanPrices({
                ultimate: pricingConfig["ultimate"][cycle],
            });
        }
    }, [billingCycle, hasJusProcessos, processCount, isFeatureFlagEnable]);

    // Calculate planPrices based on feature flag
    const cycle = billingCycle === BILLING_CYCLES.ANNUAL ? "annually" : "monthly";

    const ultimatePlan = getSubscriptionPlans({
        plan_type: 'ultimate',
        billingCycle: cycle,
        hasJusProcessos,
        jusprocessos_count: processCount,
        is_offer: false,
    });

    const finalPlanPrices = isFeatureFlagEnable ?
        (() => {
            const cycleKey = billingCycle === BILLING_CYCLES.ANNUAL ? "annually" : "monthly";
            return {
                ultimate: choosePlanModalAdapter(ultimatePlan) || BASE_PRICING["ultimate"][cycleKey],
            };
        })() :
        planPrices;

    const finalBillingCycle = isFeatureFlagEnable ?
        (billingCycle === BILLING_CYCLES.ANNUAL ? "annually" : "monthly") :
        billingCycle;

    return {
        billingCycle: finalBillingCycle,
        toggleBillingCycle,
        planPrices: finalPlanPrices,
    };
}

export {
    useSubscriptionPlans
};