const MONITORING_BENEFITS = {
    starter: {
        description: '2 Monitoramentos processuais',
        enabled: true
    },
    master: {
        description: '5 Monitoramentos processuais',
        enabled: true
    },
    ultimate: {
        description: '10 Monitoramentos processuais',
        enabled: true
    },
};

export const getBenefitsWithMonitoring = (benefits, planKey, useCredits) => {
    if (!useCredits || !MONITORING_BENEFITS[planKey]) return benefits;
    return [...benefits, MONITORING_BENEFITS[planKey]];
};