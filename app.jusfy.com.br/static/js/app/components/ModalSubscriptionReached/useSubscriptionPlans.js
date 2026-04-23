import {
    useState,
    useEffect
} from "react";
import {
    useSelector
} from "react-redux";
import useFeatureFlag from "../../hooks/useFeatureFlag";
import useFeatureFlagWithContext from "../../hooks/useFeatureFlagWithContext";
import {
    FEATURE_FLAGS
} from "../../constants/FeatureFlag";
import {
    getSubscriptionPlans,
    modalSubscriptionReachedAdapter,
} from "../../hooks/useSubscriptionPlans";
import {
    PRICE_BASE_UNIVERSAL_STARTER_MONTHLY,
    PRICE_BASE_UNIVERSAL_STARTER_ANNUAL,
    PRICE_BASE_UNIVERSAL_MASTER_MONTHLY,
    PRICE_BASE_UNIVERSAL_MASTER_ANNUAL,
    PRICE_BASE_UNIVERSAL_ULTIMATE_MONTHLY,
    PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL,
} from "./constants";

const BILLING_CYCLES = {
    MONTHLY: "monthly",
    ANNUAL: "annual",
};

const PLAN_TYPES = {
    STARTER: "starter",
    MASTER: "master",
    ULTIMATE: "ultimate",
};

const normalizeCycleForBasePricing = (cycle) => {
    if (cycle === "annually") {
        return "annual";
    }
    return cycle;
};

const formatPrice = (value) => {
    return `R$ ${value
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const OFFER_PRICING = {
    [PLAN_TYPES.STARTER]: {
        monthly: {},
        annual: {
            title: "PLANO STARTER",
            price: "R$ 739,20 /anual",
            total: "(totalizando R$ 739,20)",
        },
    },
    [PLAN_TYPES.MASTER]: {
        monthly: {
            title: "PLANO MASTER TRIMESTRAL",
            former_price: "R$ 239,70",
            price: "por 3x R$ 35,95",
            total: "",
        },
        annual: {
            title: "PLANO MASTER",
            price: "R$ 931,20 /anual",
            total: "(totalizando R$ 931,20)",
        },
    },
    [PLAN_TYPES.ULTIMATE]: {
        monthly: {},
        annual: {
            title: "PLANO ULTIMATE",
            price: "R$ 1.123,20 /anual",
            total: "(totalizando R$ 1.123,20)",
        },
    },
};
const OFFER_PRICING_JUSPROCESSOS = {
    50: {
        [PLAN_TYPES.STARTER]: {
            monthly: {},
            annual: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 873,84 /anual",
                total: "(totalizando R$ 873,84)",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO MASTER TRIMESTRAL + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                former_price: "R$ 314,40",
                price: "por 3x R$ 64,85",
                total: "",
            },
            annual: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 1.065,84 /anual",
                total: "(totalizando R$ 1.065,84)",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {},
            annual: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 50 PROCESSOS`,
                price: "R$ 1.230,00 /anual",
                total: "(totalizando R$ 1.230,00)",
            },
        },
    },

    200: {
        [PLAN_TYPES.STARTER]: {
            monthly: {},
            annual: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 1.773,84 /anual",
                total: "(totalizando R$ 1.773,84)  ",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO MASTER TRIMESTRAL + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                former_price: "R$ 539,40",
                price: "por 3x R$ 139,85",
                total: "",
            },
            annual: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "R$ 1.965,84 /anual",
                total: "(totalizando R$ 1.965,84) ",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {},
            annual: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "2.130,00 /anual",
                total: "(totalizando R$ 2.130,00)",
            },
        },
    },
    500: {
        [PLAN_TYPES.STARTER]: {
            monthly: {},
            annual: {
                title: `PLANO STARTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "R$ 3.573,84 /anual",
                total: " (totalizando R$ 3.573,84)",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO MASTER TRIMESTRAL + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                former_price: "R$ 989,40",
                price: "por 3x R$ 289,85",
                total: "",
            },
            annual: {
                title: `PLANO MASTER + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "3.765,84 /anual",
                total: "(totalizando R$ 3.765,84) ",
            },
        },
        [PLAN_TYPES.ULTIMATE]: {
            monthly: {},
            annual: {
                title: `PLANO ULTIMATE + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "3.930,00 /anual",
                total: "(totalizando R$ 3.930,00)",
            },
        },
    },
};

const BASE_PRICING = {
    [PLAN_TYPES.STARTER]: {
        monthly: {
            title: "PLANO STARTER",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_STARTER_MONTHLY)}/mensal`,
            total: "",
        },
        annual: {
            title: "PLANO STARTER",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_STARTER_ANNUAL)} /anual`,
            total: `(totalizando ${formatPrice(PRICE_BASE_UNIVERSAL_STARTER_ANNUAL)})`,
        },
    },
    [PLAN_TYPES.MASTER]: {
        monthly: {
            title: "PLANO MASTER",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_MASTER_MONTHLY)}/mensal`,
            total: "",
        },
        annual: {
            title: "PLANO MASTER",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_MASTER_ANNUAL)} /anual`,
            total: `(totalizando ${formatPrice(PRICE_BASE_UNIVERSAL_MASTER_ANNUAL)})`,
        },
    },
    [PLAN_TYPES.ULTIMATE]: {
        monthly: {
            title: "PLANO ULTIMATE",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_ULTIMATE_MONTHLY)}/mensal`,
            total: "",
        },
        annual: {
            title: "PLANO ULTIMATE",
            price: `${formatPrice(PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL)} /anual`,
            total: `(totalizando ${formatPrice(PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL)})`,
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

const BASE_PRICING_UNIVERSAL = {
    [PLAN_TYPES.STARTER]: {
        monthly: {
            title: "[PLANO BASE 2026] STARTER",
            price: "R$ 77,00/mensal",
            total: "",
        },
        annual: {
            title: "[Promoção 2026] Starter Anual Parcelado 20% OFF",
            price: "12x R$ 61,60 /anual",
            total: "(totalizando R$ 739,20)",
        },
    },
    [PLAN_TYPES.MASTER]: {
        monthly: {
            title: "[PLANO BASE 2026] MASTER ",
            price: "R$ 97,00/mensal",
            total: "",
        },
        annual: {
            title: "[Promoção 2026] Master Anual Parcelado 20% OFF",
            price: "12x R$ 77,58 anual",
            total: "(totalizando R$ 931,20)",
        },
    },
    [PLAN_TYPES.ULTIMATE]: {
        monthly: {
            title: "[PLANO BASE 2026] ULTIMATE",
            price: "R$ 117,00/mensal",
            total: "",
        },
        annual: {
            title: "[Promoção 2026] Ultimate Anual Parcelado 20% OFF",
            price: "12x R$ 93,60 /anual",
            total: "(totalizando R$ 1.123,20)",
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
                title: `[PLANO BASE 2026] STARTER ANUAL 20% + JUSPROCESSOS ATÉ 200 PROCESSOS`,
                price: "12x R$ 161,50 /anual",
                total: "(totalizando R$ 1.938,00)  ",
            },
        },
        [PLAN_TYPES.MASTER]: {
            monthly: {
                title: `PLANO BASE 2026] MASTER + JUSPROCESSOS ATÉ 200 PROCESSOS`,
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
                price: "12x R$ 297,82 /anual",
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
                title: `[PLANO BASE 2026] MASTER ANUAL 20% + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "12x R$ 313,82 /anual",
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
                title: `[PLANO BASE 2026] ULTIMATE ANUAL 20% + JUSPROCESSOS ATÉ 500 PROCESSOS`,
                price: "12x R$ 327,50 /anual",
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
    isOffer = false,
    isUniversal
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

        let pricingConfig = isUniversal ?
            BASE_PRICING_UNIVERSAL :
            isOffer ?
            OFFER_PRICING :
            BASE_PRICING;

        if (hasJusProcessos) {
            pricingConfig = JUSPROCESSOS_PRICING[processCount];
        }

        if (hasJusProcessos) {
            pricingConfig = isOffer ?
                OFFER_PRICING_JUSPROCESSOS[processCount] :
                JUSPROCESSOS_PRICING[processCount];
        }

        if (isUniversal && hasJusProcessos) {
            pricingConfig = JUSPROCESSOS_PRICING_UNIVERSAL[processCount];
        }

        const currentCycle = billingCycle === BILLING_CYCLES.ANNUAL ? "annual" : "monthly";

        setPlanPrices({
            starter: pricingConfig[PLAN_TYPES.STARTER][currentCycle],
            master: pricingConfig[PLAN_TYPES.MASTER][currentCycle],
            ultimate: pricingConfig[PLAN_TYPES.ULTIMATE][currentCycle],
        });
    }, [billingCycle, hasJusProcessos, processCount, isOffer, isUniversal, isFeatureFlagEnable]);

    if (isFeatureFlagEnable) {
        const affiliationType = isOabMgUpsellEnabled ? "caamg" : undefined;

        const plans = getSubscriptionPlans([{
                plan_type: 'starter',
                billingCycle: cycle,
                hasJusProcessos,
                jusprocessos_count: processCount,
                is_offer: isOffer,
                affiliation_type: affiliationType,
            },
            {
                plan_type: 'master',
                billingCycle: cycle,
                hasJusProcessos,
                jusprocessos_count: processCount,
                is_offer: isOffer,
                affiliation_type: affiliationType,
            },
            {
                plan_type: 'ultimate',
                billingCycle: cycle,
                hasJusProcessos,
                jusprocessos_count: processCount,
                is_offer: isOffer,
                affiliation_type: affiliationType,
            },
        ]);

        const starterPlan = plans.find(p => p.plan_type === 'starter');
        const masterPlan = plans.find(p => p.plan_type === 'master');
        const ultimatePlan = plans.find(p => p.plan_type === 'ultimate');

        const normalizedCycle = normalizeCycleForBasePricing(cycle);

        // Compute fallback pricing config based on isUniversal, hasJusProcessos and isOffer
        // Mirroring the legacy selection logic at lines 517-534
        let fallbackPricingConfig;

        if (isUniversal && hasJusProcessos) {
            fallbackPricingConfig = JUSPROCESSOS_PRICING_UNIVERSAL[processCount];
        } else if (hasJusProcessos && isOffer) {
            fallbackPricingConfig = OFFER_PRICING_JUSPROCESSOS[processCount];
        } else if (hasJusProcessos) {
            fallbackPricingConfig = JUSPROCESSOS_PRICING[processCount];
        } else if (isUniversal) {
            fallbackPricingConfig = BASE_PRICING_UNIVERSAL;
        } else if (isOffer) {
            fallbackPricingConfig = OFFER_PRICING;
        } else {
            fallbackPricingConfig = BASE_PRICING;
        }

        const newPlanPrices = {
            starter: modalSubscriptionReachedAdapter(starterPlan) || fallbackPricingConfig[PLAN_TYPES.STARTER][normalizedCycle],
            master: modalSubscriptionReachedAdapter(masterPlan) || fallbackPricingConfig[PLAN_TYPES.MASTER][normalizedCycle],
            ultimate: modalSubscriptionReachedAdapter(ultimatePlan) || fallbackPricingConfig[PLAN_TYPES.ULTIMATE][normalizedCycle],
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