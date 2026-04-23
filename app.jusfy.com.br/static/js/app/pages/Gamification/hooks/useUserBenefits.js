import {
    useQuery
} from '@tanstack/react-query';
import {
    useSelector
} from 'react-redux';
import {
    getUserBenefits,
    getAllBenefits
} from '../api';

// Query keys include client_id to scope cached data per user, preventing
// cross-user data reuse when switching accounts or on shared devices.
const BENEFITS_KEYS = {
    userBenefits: (clientId) => ['gamification', 'userBenefits', clientId],
    allBenefits: (clientId) => ['gamification', 'allBenefits', clientId],
};

const TEN_MINUTES = 1000 * 60 * 10;
const THIRTY_MINUTES = 1000 * 60 * 30;

/**
 * Hook para buscar e cachear os benefícios do usuário.
 * Usa TanStack Query para cache e deduplicação.
 */
export const useUserBenefits = (options = {}) => {
    const {
        authToken,
        user
    } = useSelector((state) => state.auth);

    const {
        data: benefitsData,
        isLoading: benefitsLoading,
        refetch: refetchBenefits,
    } = useQuery({
        queryKey: BENEFITS_KEYS.userBenefits(user ? .client_id),
        queryFn: async () => {
            const response = await getUserBenefits(authToken);
            const data = response ? .data || response;

            return {
                level: data.level,
                levelName: data.level_name,
                benefitsBaseDate: data.benefits_base_date || null,
                validUntil: data.valid_until || null,
                benefits: (data.benefits || []).map(b => ({
                    id: b.id,
                    category: b.benefit_category,
                    value: b.benefit_value,
                    label: b.benefit_label,
                    description: b.benefit_description,
                    featureId: b.feature_id,
                })),
                grantsThisCycle: (data.grants_this_cycle || []).map(g => ({
                    id: g.id,
                    type: g.benefit_type,
                    featureId: g.feature_id,
                    quantityGranted: g.quantity_granted,
                    grantReason: g.grant_reason,
                    grantedAt: g.granted_at,
                })),
            };
        },
        enabled: !!authToken,
        staleTime: TEN_MINUTES,
        cacheTime: THIRTY_MINUTES,
        // Persist to local storage so benefits survive page reloads
        meta: {
            persist: true
        },
        ...options,
    });

    return {
        benefitsData: benefitsData || null,
        benefitsLoading,
        refetchBenefits,
    };
};

/**
 * Calcula o label de renovação a partir de valid_until.
 * @param {string|null} validUntil - Data ISO de expiração dos benefícios
 * @returns {string|null} - "Renova amanhã", "Renova em X dias", "Renova hoje", ou null
 */
/**
 * Hook para buscar todos os benefícios agrupados por nível.
 * Usado para exibir tooltips nos ícones de nível.
 */
export const useAllBenefits = (options = {}) => {
    const {
        authToken,
        user
    } = useSelector((state) => state.auth);

    const {
        data: allBenefitsData,
        isLoading: allBenefitsLoading,
    } = useQuery({
        queryKey: BENEFITS_KEYS.allBenefits(user ? .client_id),
        queryFn: async () => {
            const response = await getAllBenefits(authToken);
            const data = response ? .data || response;

            // Mapeia para um objeto { [levelNumber]: ["label1", "label2", ...] }
            const byLevel = {};
            // Dados estruturados para o carousel de benefícios por nível
            const byLevelRaw = {};

            if (data && typeof data === 'object' && !Array.isArray(data)) {
                // Formato: { "1": [{ benefit_category, benefit_value, benefit_label, benefit_description, feature_id }], "2": [...] }
                Object.entries(data).forEach(([lvl, benefits]) => {
                    if (!Array.isArray(benefits)) return;
                    byLevelRaw[lvl] = benefits.map(b => ({
                        id: b.id,
                        category: b.benefit_category,
                        value: b.benefit_value,
                        label: b.benefit_label,
                        description: b.benefit_description,
                        featureId: b.feature_id,
                    }));
                    byLevel[lvl] = benefits.filter(b => b.benefit_value > 0).map(b => {
                        if (b.benefit_category === 'monthly_credits') {
                            return `+${b.benefit_value} ${b.benefit_label}`;
                        }
                        return b.benefit_label;
                    });
                });
            } else if (Array.isArray(data)) {
                // Formato legado: array flat com level_number em cada item
                data.forEach(b => {
                    const lvl = b.level_number || b.levelNumber;
                    if (!byLevel[lvl]) byLevel[lvl] = [];
                    if (!byLevelRaw[lvl]) byLevelRaw[lvl] = [];
                    byLevelRaw[lvl].push({
                        id: b.id,
                        category: b.benefit_category,
                        value: b.benefit_value,
                        label: b.benefit_label,
                        description: b.benefit_description,
                        featureId: b.feature_id,
                    });
                    const label = b.benefit_category === 'monthly_credits' ?
                        `+${b.benefit_value} ${b.benefit_label}` :
                        b.benefit_label;
                    byLevel[lvl].push(label);
                });
            }

            return {
                labels: byLevel,
                raw: byLevelRaw
            };
        },
        enabled: !!authToken,
        staleTime: THIRTY_MINUTES,
        cacheTime: THIRTY_MINUTES * 2,
        // Persist to local storage so all-benefits survive page reloads
        meta: {
            persist: true
        },
        ...options,
    });

    return {
        allBenefitsData: allBenefitsData ? .labels || {},
        allBenefitsRaw: allBenefitsData ? .raw || {},
        allBenefitsLoading,
    };
};

export const getRenewalLabel = (validUntil) => {
    if (!validUntil) return null;

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const expiry = new Date(validUntil);
    expiry.setHours(0, 0, 0, 0);

    const diffMs = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Expirado';
    if (diffDays === 0) return 'Renova hoje';
    if (diffDays === 1) return 'Renova amanhã';
    return `Renova em ${diffDays} dias`;
};