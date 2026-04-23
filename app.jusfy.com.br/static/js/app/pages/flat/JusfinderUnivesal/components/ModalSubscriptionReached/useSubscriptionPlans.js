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
import {
    PRICE_BASE_UNIVERSAL_STARTER_MONTHLY,
    PRICE_BASE_UNIVERSAL_STARTER_ANNUAL,
    PRICE_BASE_UNIVERSAL_MASTER_MONTHLY,
    PRICE_BASE_UNIVERSAL_MASTER_ANNUAL,
    PRICE_BASE_UNIVERSAL_ULTIMATE_MONTHLY,
    PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL,
} from "../../../../../components/ModalSubscriptionReached/constants";

const BILLING_CYCLES = {
    MONTHLY: "monthly",
    ANNUAL: "annual",
};

const PLAN_TYPES = {
    STARTER: "starter",
    MASTER: "master",
    ULTIMATE: "ultimate",
};

const formatPrice = (value) => {
    return `R$ ${value
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const BASE_PRICING = {
    [PLAN_TYPES.STARTER]: {
        monthly: {
            title: "PLANO STARTER",
            price: "R$ 59,90/mensal",
            total: "",
        },
        annual: {
            title: "PLANO STARTER",
            price: "12x R$ 47,92 /anual",
            total: "(totalizando R$ 575,04)",
        },
    },
    [PLAN_TYPES.MASTER]: {
        monthly: {
            title: "PLANO MASTER",
            price: "R$ 79,90/mensal",
            total: "",
        },
        annual: {
            title: "PLANO MASTER",
            price: "12x R$ 63,92 /anual",
            total: "(totalizando R$ 767,04)",
        },
    },
    [PLAN_TYPES.ULTIMATE]: {
        monthly: {
            title: "PLANO ULTIMATE",
            price: "R$ 97,00/mensal",
            total: "",
        },
        annual: {
            title: "PLANO ULTIMATE",
            price: "12x R$ 77,60 /anual",
            total: "(totalizando R$ 931,20)",
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
                price: "12x R$ 72,82 /anual",
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
                price: "12x R$ 88,82 /anual",
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
                price: "12x R$ 102,50 /anual",
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
                price: "12x R$ 147,82 /anual",
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
                price: "12x R$ 163,82 /anual",
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
                price: "12x R$ 177,50 /anual",
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
                price: "12x R$ 297,82 /anual",
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
                price: "12x R$ 313,82 /anual",
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
                price: "12x R$ 327,50 /anual",
                total: "(totalizando R$ 3.930,00)",
            },
        },
    },
};

const BASE_PRICING_UNIVERSAL = {
    [PLAN_TYPES.STARTER]: {
        monthly: {
            title: "[PLANO BASE 2026] STARTER",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_STARTER_MONTHLY)}/mensal`,
            total: "",
        },
        annual: {
            title: "[Promoção 2026] Starter Anual Parcelado 20% OFF",
            price: `12x ${formatPrice(PRICE_BASE_UNIVERSAL_STARTER_ANNUAL / 12)} /anual`,
            total: `(totalizando ${formatPrice(PRICE_BASE_UNIVERSAL_STARTER_ANNUAL)})`,
        },
    },
    [PLAN_TYPES.MASTER]: {
        monthly: {
            title: "[PLANO BASE 2026] MASTER",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_MASTER_MONTHLY)}/mensal`,
            total: "",
        },
        annual: {
            title: "[Promoção 2026] Master Anual Parcelado 20% OFF",
            price: `12x ${formatPrice(PRICE_BASE_UNIVERSAL_MASTER_ANNUAL / 12)} /anual`,
            total: `(totalizando ${formatPrice(PRICE_BASE_UNIVERSAL_MASTER_ANNUAL)})`,
        },
    },
    [PLAN_TYPES.ULTIMATE]: {
        monthly: {
            title: "[PLANO BASE 2026] ULTIMATE",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_ULTIMATE_MONTHLY)}/mensal`,
            total: "",
        },
        annual: {
            title: "[Promoção 2026] Ultimate Anual Parcelado 20% OFF",
            price: `12x ${formatPrice(PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL / 12)} /anual`,
            total: `(totalizando ${formatPrice(PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL)})`,
        },
    },
};
const JUSPROCESSOS_PRICING_UNIVERSAL = {
    50: {
        [PLAN_TYPES.STARTER]: {
            monthly: {
                title: `[PLANO BASE 2026] STARTER + JusProcessos até 50 processos`,
                price: "R$ 101,90 /mensal",
                total: "",
            },
            annual: {
                title: `[PROMOÇÃO 2026] STARTER ANUAL 20% + JusProcessos até 50 processos`,
                price: "12x R$ 86,50 /anual",
                total: "(totalizando R$ 1.038,00)",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `[PLANO BASE 2026] MASTER + JusProcessos até 50 processos`,
                price: "R$ 121,90/mensal",
                total: "",
            },
            annual: {
                title: `[PROMOÇÃO 2026] MASTER ANUAL 20% + JusProcessos até 50 processos`,
                price: "12x R$ 102,50 /anual",
                total: "(totalizando R$ 1.230,00)",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {
                title: `[PLANO BASE 2026] ULTIMATE + JusProcessos até 50 processos`,
                price: "R$ 141,90/mensal",
                total: "",
            },
            annual: {
                title: `[PROMOÇÃO 2026] ULTIMATE ANUAL 20% + JusProcessos até 50 processos`,
                price: "12x R$ 118,50 /anual",
                total: "(totalizando R$ 1.422,00)",
            },
        },
    },

    200: {
        [PLAN_TYPES.STARTER]: {
            monthly: {
                title: `[PLANO BASE 2026] STARTER + JusProcessos até 200 processos`,
                price: "R$ 176,90 /mensal",
                total: "",
            },
            annual: {
                title: `[PLANO BASE 2026] STARTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "12x R$ 161,50 /anual",
                total: "(totalizando R$ 1.938,00)  ",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `[PLANO BASE 2026] MASTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 196,90 /mensal ",
                total: "",
            },
            annual: {
                title: `[PLANO BASE 2026] MASTER ANUAL 20% + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "12x R$ 177,50 /anual",
                total: "(totalizando R$ 2.130,00) ",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {
                title: `[PLANO BASE 2026] ULTIMATE  + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 216,90 /mensal ",
                total: "",
            },
            annual: {
                title: `[PLANO BASE 2026] ULTIMATE ANUAL 20% + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "12x R$ 193,50 /anual",
                total: "(totalizando R$ 2.322,00 )",
            },
        },
    },
    500: {
        [PLAN_TYPES.STARTER]: {
            monthly: {
                title: `[PLANO BASE 2026] STARTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 326,90/mensal",
                total: "",
            },
            annual: {
                title: `[PLANO BASE 2026] STARTER ANUAL 20% + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "12x R$ 311,50 /anual",
                total: " (totalizando R$ 3.738,00)",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `[PLANO BASE 2026] MASTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 346,90/mensal",
                total: "",
            },
            annual: {
                title: `[PLANO BASE 2026] MASTER ANUAL 20%  + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "12x R$ 327,50 /anual",
                total: "(totalizando R$ 3.930,00) ",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {
                title: `[PLANO BASE 2026] ULTIMATE + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 366,90/mensal",
                total: "",
            },
            annual: {
                title: `[PLANO BASE 2026] ULTIMATE ANUAL 20%  + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "12x R$ 343,50 /anual",
                total: "(totalizando R$ 4.122,00)",
            },
        },
    },
};
/**
 * @deprecated This hook uses hardcoded plan values and will be replaced by centralized subscription plans.
 * Use the new getSubscriptionPlans function from hooks/useSubscriptionPlans when the feature flag is enabled.
 */
function useSubscriptionPlans(
    hasJusProcessos = false,
    processCount = 200,
    isUniversal = false
) {
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

    const toggleBillingCycle = () => {
        setBillingCycle(prevCycle =>
            prevCycle === BILLING_CYCLES.MONTHLY ?
            BILLING_CYCLES.ANNUAL :
            BILLING_CYCLES.MONTHLY
        );
    };

    const cycle = billingCycle === BILLING_CYCLES.ANNUAL ? "annually" : "monthly";

    const [planPrices, setPlanPrices] = useState({
        starter: BASE_PRICING[PLAN_TYPES.STARTER].monthly,
        master: BASE_PRICING[PLAN_TYPES.MASTER].monthly,
        ultimate: BASE_PRICING[PLAN_TYPES.ULTIMATE].monthly,
    });

    useEffect(() => {
        if (isFeatureFlagEnable) return;

        const basePricingConfig = isUniversal ? BASE_PRICING_UNIVERSAL : BASE_PRICING;
        let pricingConfig = basePricingConfig;

        if (hasJusProcessos) {
            const jusProcessosPricing = isUniversal ?
                JUSPROCESSOS_PRICING_UNIVERSAL[processCount] :
                JUSPROCESSOS_PRICING[processCount];
            pricingConfig = jusProcessosPricing || basePricingConfig;
        }

        const currentCycle =
            billingCycle === BILLING_CYCLES.ANNUAL ? "annual" : "monthly";

        setPlanPrices({
            starter: pricingConfig[PLAN_TYPES.STARTER][currentCycle],
            master: pricingConfig[PLAN_TYPES.MASTER][currentCycle],
            ultimate: pricingConfig[PLAN_TYPES.ULTIMATE][currentCycle],
        });
    }, [billingCycle, hasJusProcessos, processCount, isUniversal, isFeatureFlagEnable]);

    if (isFeatureFlagEnable) {
        const offerFlag = cycle === "annual";
        const affiliationType = isOabMgUpsellEnabled ? "caamg" : undefined;

        const plans = getSubscriptionPlans([{
                plan_type: 'starter',
                billingCycle: cycle,
                hasJusProcessos,
                jusprocessos_count: processCount,
                is_offer: offerFlag,
                affiliation_type: affiliationType,
            },
            {
                plan_type: 'master',
                billingCycle: cycle,
                hasJusProcessos,
                jusprocessos_count: processCount,
                is_offer: offerFlag,
                affiliation_type: affiliationType,
            },
            {
                plan_type: 'ultimate',
                billingCycle: cycle,
                hasJusProcessos,
                jusprocessos_count: processCount,
                is_offer: offerFlag,
                affiliation_type: affiliationType,
            },
        ]);

        const starterPlan = plans.find(p => p.plan_type === 'starter');
        const masterPlan = plans.find(p => p.plan_type === 'master');
        const ultimatePlan = plans.find(p => p.plan_type === 'ultimate');

        const basePricingConfig = isUniversal ? BASE_PRICING_UNIVERSAL : BASE_PRICING;
        let pricingConfig = basePricingConfig;

        if (hasJusProcessos) {
            const jusProcessosPricing = isUniversal ?
                JUSPROCESSOS_PRICING_UNIVERSAL[processCount] :
                JUSPROCESSOS_PRICING[processCount];
            pricingConfig = jusProcessosPricing || basePricingConfig;
        }

        const newPlanPrices = {
            starter: modalSubscriptionReachedAdapter(starterPlan) || pricingConfig[PLAN_TYPES.STARTER][cycle],
            master: modalSubscriptionReachedAdapter(masterPlan) || pricingConfig[PLAN_TYPES.MASTER][cycle],
            ultimate: modalSubscriptionReachedAdapter(ultimatePlan) || pricingConfig[PLAN_TYPES.ULTIMATE][cycle],
        };

        return {
            billingCycle,
            toggleBillingCycle,
            planPrices: newPlanPrices,
        };
    }

    return {
        billingCycle,
        toggleBillingCycle,
        planPrices,
    };
}

export {
    useSubscriptionPlans
};