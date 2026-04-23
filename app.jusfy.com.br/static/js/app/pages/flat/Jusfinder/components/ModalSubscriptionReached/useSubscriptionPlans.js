import {
    useEffect,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import useFeatureFlag from "../../../../../hooks/useFeatureFlag";
import useFeatureFlagWithContext from "../../../../../hooks/useFeatureFlagWithContext";
import {
    FEATURE_FLAGS
} from "../../../../../constants/FeatureFlag";
import {
    getSubscriptionPlans,
    modalSubscriptionReachedAdapter,
} from "../../../../../hooks/useSubscriptionPlans";

const BILLING_CYCLES = {
    MONTHLY: "monthly",
    ANNUAL: "annual",
};

const PLAN_TYPES = {
    STARTER: "starter",
    MASTER: "master",
    ULTIMATE: "ultimate",
};

const BASE_PRICING = {
    [PLAN_TYPES.STARTER]: {
        monthly: {
            title: "PLANO STARTER",
            price: "R$ 77,00/mensal",
            total: "",
        },
        annual: {
            title: "PLANO STARTER",
            price: "R$ 739,20 /anual",
            total: "(totalizando R$ 739,20)",
        },
    },
    [PLAN_TYPES.MASTER]: {
        monthly: {
            title: "PLANO MASTER",
            price: "R$ 97,00/mensal",
            total: "",
        },
        annual: {
            title: "PLANO MASTER",
            price: "R$ 931,20 /anual",
            total: "(totalizando R$ 931,20)",
        },
    },
    [PLAN_TYPES.ULTIMATE]: {
        monthly: {
            title: "PLANO ULTIMATE",
            price: "R$ 117,00/mensal",
            total: "",
        },
        annual: {
            title: "PLANO ULTIMATE",
            price: "R$ 1.123,20 /anual",
            total: "(totalizando R$ 1.123,20)",
        },
    },
};

const JUSPROCESSOS_PRICING = {
    50: {
        [PLAN_TYPES.STARTER]: {
            monthly: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 84,80 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 873,84 /anual",
                total: "(totalizando R$ 873,84)",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 104,80 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 1.065,84 /anual",
                total: "(totalizando R$ 1.065,84)",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 121,90 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 1.230,00 /anual",
                total: "(totalizando R$ 1.230,00)",
            },
        },
    },

    200: {
        [PLAN_TYPES.STARTER]: {
            monthly: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 159,80 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 1.773,84 /anual",
                total: "(totalizando R$ 1.773,84)  ",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 179,80 /mensal ",
                total: "",
            },
            annual: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 1.965,84 /anual",
                total: "(totalizando R$ 1.965,84) ",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 196,90 /mensal ",
                total: "",
            },
            annual: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 2.130,00 /anual",
                total: "(totalizando R$ 2.130,00)",
            },
        },
    },
    500: {
        [PLAN_TYPES.STARTER]: {
            monthly: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 309,80 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 3.573,84 /anual",
                total: " (totalizando R$ 3.573,84)",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 329,80 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 3.765,84 /anual",
                total: "(totalizando R$ 3.765,84) ",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 346,90 /mensal",
                total: "",
            },
            annual: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 3.930,00 /anual",
                total: "(totalizando R$ 3.930,00)",
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
    const subscription = useSelector(state => state.subscription);
    const planNameForFlag = subscription ? .subscription_status ? .info ? .plan ? ?
        subscription ? .subscription_status ? .plan_details ? .name;
    const {
        isFeatureFlagEnable: isOabMgUpsellEnabled
    } =
    useFeatureFlagWithContext(FEATURE_FLAGS.RELEASE.UPSELL_OAB_MG, {
        plan: planNameForFlag ? ? undefined,
    });
    const [billingCycle, setBillingCycle] = useState(BILLING_CYCLES.MONTHLY);
    const [planPrices, setPlanPrices] = useState({
        starter: BASE_PRICING[PLAN_TYPES.STARTER].monthly,
        master: BASE_PRICING[PLAN_TYPES.MASTER].monthly,
        ultimate: BASE_PRICING[PLAN_TYPES.ULTIMATE].monthly,
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
            if (pricingConfig) {
                const cycle =
                    billingCycle === BILLING_CYCLES.ANNUAL ? "annual" : "monthly";

                setPlanPrices({
                    starter: pricingConfig[PLAN_TYPES.STARTER][cycle],
                    master: pricingConfig[PLAN_TYPES.MASTER][cycle],
                    ultimate: pricingConfig[PLAN_TYPES.ULTIMATE][cycle],
                });
            }
        }
    }, [billingCycle, hasJusProcessos, processCount, isFeatureFlagEnable]);

    // Calculate planPrices based on feature flag
    const cycle = billingCycle === BILLING_CYCLES.ANNUAL ? "annually" : "monthly";
    const affiliationType = isOabMgUpsellEnabled ? "caamg" : undefined;

    const plans = getSubscriptionPlans([{
            plan_type: 'starter',
            billingCycle: cycle,
            hasJusProcessos,
            jusprocessos_count: processCount,
            is_offer: false,
            affiliation_type: affiliationType,
        },
        {
            plan_type: 'master',
            billingCycle: cycle,
            hasJusProcessos,
            jusprocessos_count: processCount,
            is_offer: false,
            affiliation_type: affiliationType,
        },
        {
            plan_type: 'ultimate',
            billingCycle: cycle,
            hasJusProcessos,
            jusprocessos_count: processCount,
            is_offer: false,
            affiliation_type: affiliationType,
        },
    ]);

    const finalPlanPrices = isFeatureFlagEnable ?
        (() => {
            const starterPlan = plans.find(p => p.plan_type === 'starter');
            const masterPlan = plans.find(p => p.plan_type === 'master');
            const ultimatePlan = plans.find(p => p.plan_type === 'ultimate');

            const fallbackCycle = billingCycle === BILLING_CYCLES.ANNUAL ? "annual" : "monthly";

            return {
                starter: modalSubscriptionReachedAdapter(starterPlan) || BASE_PRICING[PLAN_TYPES.STARTER][fallbackCycle],
                master: modalSubscriptionReachedAdapter(masterPlan) || BASE_PRICING[PLAN_TYPES.MASTER][fallbackCycle],
                ultimate: modalSubscriptionReachedAdapter(ultimatePlan) || BASE_PRICING[PLAN_TYPES.ULTIMATE][fallbackCycle],
            };
        })() :
        planPrices;

    return {
        billingCycle,
        toggleBillingCycle,
        planPrices: finalPlanPrices,
    };
}

export {
    useSubscriptionPlans
};