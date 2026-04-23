import {
    PRICE_BASE_UNIVERSAL_STARTER_MONTHLY,
    PRICE_BASE_UNIVERSAL_STARTER_ANNUAL,
    PRICE_BASE_UNIVERSAL_MASTER_MONTHLY,
    PRICE_BASE_UNIVERSAL_MASTER_ANNUAL,
    PRICE_BASE_UNIVERSAL_ULTIMATE_MONTHLY,
    PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL,
    PRICE_JP_50_UNIVERSAL_STARTER_MONTHLY,
    PRICE_JP_50_UNIVERSAL_STARTER_ANNUAL,
    PRICE_JP_50_UNIVERSAL_MASTER_MONTHLY,
    PRICE_JP_50_UNIVERSAL_MASTER_ANNUAL,
    PRICE_JP_50_UNIVERSAL_ULTIMATE_MONTHLY,
    PRICE_JP_50_UNIVERSAL_ULTIMATE_ANNUAL,
    PRICE_JP_200_UNIVERSAL_STARTER_MONTHLY,
    PRICE_JP_200_UNIVERSAL_STARTER_ANNUAL,
    PRICE_JP_200_UNIVERSAL_MASTER_MONTHLY,
    PRICE_JP_200_UNIVERSAL_MASTER_ANNUAL,
    PRICE_JP_200_UNIVERSAL_ULTIMATE_MONTHLY,
    PRICE_JP_200_UNIVERSAL_ULTIMATE_ANNUAL,
    PRICE_JP_500_UNIVERSAL_STARTER_MONTHLY,
    PRICE_JP_500_UNIVERSAL_STARTER_ANNUAL,
    PRICE_JP_500_UNIVERSAL_MASTER_MONTHLY,
    PRICE_JP_500_UNIVERSAL_MASTER_ANNUAL,
    PRICE_JP_500_UNIVERSAL_ULTIMATE_MONTHLY,
    PRICE_JP_500_UNIVERSAL_ULTIMATE_ANNUAL,
} from "./constants";

const choosePricePlan = (
    billingCycle,
    hasJusProcessos = false,
    processCount = 50,
    plan,
    isOffer,
    isUniversal
) => {
    const basePlans = {
        starter: {
            name: "Plano Starter",
            description: billingCycle === "monthly" ? "Mensal" : "Anual com 20% de desconto",
            price: billingCycle === "monthly" ? 77.0 : 739.2,
            gateway_id: billingCycle === "monthly" ? "1.310.662" : "3.700.725",
        },
        master: {
            name: "Plano Master",
            description: billingCycle === "monthly" ? "Mensal" : "Anual com 20% de desconto",
            price: billingCycle === "monthly" ? 97.0 : 931.2,
            gateway_id: billingCycle === "monthly" ? "2.144.529" : "3.119.492",
        },
        ultimate: {
            name: "Plano Ultimate",
            description: billingCycle === "monthly" ? "Mensal" : "Anual com 20% de desconto",
            price: billingCycle === "monthly" ? 117.0 : 1123.2,
            gateway_id: billingCycle === "monthly" ? "2.103.612" : "4.405.859",
        },
    };

    const offerBasePlans = {
        starter: {
            name: "Plano Starter",
            description: "Anual com 20% de desconto",
            price: 739.2,
            gateway_id: "3.700.725",
        },
        master: {
            name: billingCycle === "monthly" ?
                "[PROMOÇÃO] - VOLTEI50 - MASTER 50% OFF TRIMESTRAL 3X 39,95" :
                "Plano Master",
            description: billingCycle === "monthly" ?
                "Trimestral com 50% de desconto" :
                "Anual com 20% de desconto",
            price: billingCycle === "monthly" ? 119.85 : 931.2,
            gateway_id: billingCycle === "monthly" ? "4.925.266" : "3.119.492",
        },
        ultimate: {
            name: "Plano Ultimate",
            description: "Anual com 20% de desconto",
            price: 1123.2,
            gateway_id: "4.405.859",
        },
    };
    const offerJusProcessosPlans = {
        50: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 50 processos",
                description: "R$ 873,84",
                price: 873.84,
                gateway_id: "5.766.993",
            },
            master: {
                name: billingCycle === "monthly" ?
                    "[PROMOÇÃO] - VOLTEI50 - MASTER 50% OFF TRIMESTRAL 3x 39,95 + JusProcessos até 50 processos" :
                    "[PLANO BASE] - MASTER + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ?
                    "Trimestral com 50% de desconto" :
                    "R$ 1.065,84",
                price: billingCycle === "monthly" ? 194.55 : 1065.84,
                gateway_id: billingCycle === "monthly" ? "5.737.790" : "5.766.995",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 50 processos",
                description: "R$ 1.230,00",
                price: 1230.0,
                gateway_id: "5.766.996",
            },
        },

        200: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 200 processos",
                description: "Valor Anual com desconto aplicado",
                price: 1773.84,
                gateway_id: "5.767.013",
            },
            master: {
                name: billingCycle === "monthly" ?
                    "[PROMOÇÃO] - VOLTEI50 - MASTER 50% OFF TRIMESTRAL 3x 39,95 + JusProcessos até 200 processos" :
                    "[PLANO BASE] - MASTER + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Trimestral com 50% de desconto" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 419.55 : 1965.84,
                gateway_id: billingCycle === "monthly" ? "5.749.757" : "5.767.014",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 200 processos",
                description: "Valor Anual com desconto aplicado",
                price: 2130.0,
                gateway_id: "5.767.015",
            },
        },

        500: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 500 processos",
                description: "Valor Anual com desconto aplicado",
                price: 3573.84,
                gateway_id: "5.767.047",
            },
            master: {
                name: billingCycle === "monthly" ?
                    "[PROMOÇÃO] - VOLTEI50 - MASTER 50% OFF TRIMESTRAL 3x 39,95 + JusProcessos até 500 processos" :
                    "[PLANO BASE] - MASTER + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Trimestral com 50% de desconto" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 869.55 : 3765.84,
                gateway_id: billingCycle === "monthly" ? "5.749.736" : "5.767.049",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 500 processos",
                description: "Valor Anual com desconto aplicado",
                price: 3930.0,
                gateway_id: "5.767.050",
            },
        },
    };
    const jusProcessosPlans = {
        50: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ? "Mensal" : "R$ 873,84",
                price: billingCycle === "monthly" ? 84.8 : 873.84,
                gateway_id: billingCycle === "monthly" ? "5.766.990" : "5.766.993",
            },
            master: {
                name: "[PLANO BASE] - MASTER + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ? "Mensal" : "R$ 1.065,84",
                price: billingCycle === "monthly" ? 104.8 : 1065.84,
                gateway_id: billingCycle === "monthly" ? "5.766.991" : "5.766.995",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ? "Mensal" : "R$ 1.230,00",
                price: billingCycle === "monthly" ? 121.9 : 1230.0,
                gateway_id: billingCycle === "monthly" ? "5.766.992" : "5.766.996",
            },
        },

        200: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 159.8 : 1773.84,
                gateway_id: billingCycle === "monthly" ? "5.767.010" : "5.767.013",
            },
            master: {
                name: "[PLANO BASE] - MASTER + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 179.8 : 1965.84,
                gateway_id: billingCycle === "monthly" ? "5.767.011" : "5.767.014",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 196.9 : 2130.0,
                gateway_id: billingCycle === "monthly" ? "5.767.012" : "5.767.015",
            },
        },

        500: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 309.8 : 3573.84,
                gateway_id: billingCycle === "monthly" ? "5.767.029" : "5.767.047",
            },
            master: {
                name: "[PLANO BASE] - MASTER + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 329.8 : 3765.84,
                gateway_id: billingCycle === "monthly" ? "5.767.042" : "5.767.049",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ? 346.9 : 3930.0,
                gateway_id: billingCycle === "monthly" ? "5.767.046" : "5.767.050",
            },
        },
    };

    const basePlansUniversal = {
        starter: {
            name: "Plano Starter",
            description: billingCycle === "monthly" ? "Mensal" : "Anual com 20% de desconto",
            price: billingCycle === "monthly" ?
                PRICE_BASE_UNIVERSAL_STARTER_MONTHLY :
                PRICE_BASE_UNIVERSAL_STARTER_ANNUAL,
            gateway_id: billingCycle === "monthly" ? "6.645.742" : "6.645.753",
        },
        master: {
            name: "Plano Master",
            description: billingCycle === "monthly" ? "Mensal" : "Anual com 20% de desconto",
            price: billingCycle === "monthly" ?
                PRICE_BASE_UNIVERSAL_MASTER_MONTHLY :
                PRICE_BASE_UNIVERSAL_MASTER_ANNUAL,
            gateway_id: billingCycle === "monthly" ? "6.645.743" : "6.645.754",
        },
        ultimate: {
            name: "Plano Ultimate",
            description: billingCycle === "monthly" ? "Mensal" : "Anual com 20% de desconto",
            price: billingCycle === "monthly" ?
                PRICE_BASE_UNIVERSAL_ULTIMATE_MONTHLY :
                PRICE_BASE_UNIVERSAL_ULTIMATE_ANNUAL,
            gateway_id: billingCycle === "monthly" ? "6.645.744" : "6.645.755",
        },
    };

    //com o usuário sendo universal e com jusprocessos
    const jusProcessosPlansUniversal = {
        50: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "1.038,00 (739,20 + 12x 24,90)",
                price: billingCycle === "monthly" ?
                    PRICE_JP_50_UNIVERSAL_STARTER_MONTHLY :
                    PRICE_JP_50_UNIVERSAL_STARTER_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.745" : "6.645.845",
            },
            master: {
                name: "[PLANO BASE] - MASTER + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "1.230,00 (931,20 + 12x 24,90)",
                price: billingCycle === "monthly" ?
                    PRICE_JP_50_UNIVERSAL_MASTER_MONTHLY :
                    PRICE_JP_50_UNIVERSAL_MASTER_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.777" : "6.645.846",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 50 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "1.422,00 (1.123,20 + 12x 24,90)",
                price: billingCycle === "monthly" ?
                    PRICE_JP_50_UNIVERSAL_ULTIMATE_MONTHLY :
                    PRICE_JP_50_UNIVERSAL_ULTIMATE_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.778" : "6.645.847",
            },
        },

        200: {
            starter: {
                name: "[PLANO BASE 2026] STARTER + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ?
                    PRICE_JP_200_UNIVERSAL_STARTER_MONTHLY :
                    PRICE_JP_200_UNIVERSAL_STARTER_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.769" : "6.645.848",
            },
            master: {
                name: "[PLANO BASE] - MASTER + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ?
                    PRICE_JP_200_UNIVERSAL_MASTER_MONTHLY :
                    PRICE_JP_200_UNIVERSAL_MASTER_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.746" : "6.645.849",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 200 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ?
                    PRICE_JP_200_UNIVERSAL_ULTIMATE_MONTHLY :
                    PRICE_JP_200_UNIVERSAL_ULTIMATE_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.773" : "6.645.850",
            },
        },

        500: {
            starter: {
                name: "[PLANO BASE] - STARTER + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ?
                    PRICE_JP_500_UNIVERSAL_STARTER_MONTHLY :
                    PRICE_JP_500_UNIVERSAL_STARTER_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.779" : "6.645.851",
            },
            master: {
                name: "[PLANO BASE] - MASTER + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ?
                    PRICE_JP_500_UNIVERSAL_MASTER_MONTHLY :
                    PRICE_JP_500_UNIVERSAL_MASTER_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.780" : "6.645.852",
            },
            ultimate: {
                name: "[PLANO BASE] - ULTIMATE + JusProcessos até 500 processos",
                description: billingCycle === "monthly" ?
                    "Mensal" :
                    "Valor Anual com desconto aplicado",
                price: billingCycle === "monthly" ?
                    PRICE_JP_500_UNIVERSAL_ULTIMATE_MONTHLY :
                    PRICE_JP_500_UNIVERSAL_ULTIMATE_ANNUAL,
                gateway_id: billingCycle === "monthly" ? "6.645.747" : "6.645.853",
            },
        },
    };

    let selectedPlan = {};
    if (
        isUniversal &&
        hasJusProcessos &&
        jusProcessosPlansUniversal[processCount] ? .[plan]
    ) {
        selectedPlan = jusProcessosPlansUniversal[processCount][plan];
        return selectedPlan;
    }

    if (isUniversal) {
        selectedPlan = basePlansUniversal[plan];

        return selectedPlan;
    }
    selectedPlan = isOffer ?
        hasJusProcessos ?
        offerJusProcessosPlans[processCount] ? .[plan] :
        offerBasePlans ? .[plan] :
        hasJusProcessos ?
        jusProcessosPlans[processCount] ? .[plan] :
        basePlans ? .[plan];

    return selectedPlan;
};

const useSelectedPlan = () => {
    const selectedChoosePlan = (
        billingCycle,
        hasJusProcessos = false,
        processCount = 50,
        plan,
        isOffer,
        isUniversal
    ) => {
        const selectedPlan = choosePricePlan(
            billingCycle,
            hasJusProcessos,
            processCount,
            plan,
            isOffer,
            isUniversal
        );

        return selectedPlan;
    };

    return {
        selectedChoosePlan,
    };
};

export {
    useSelectedPlan
};