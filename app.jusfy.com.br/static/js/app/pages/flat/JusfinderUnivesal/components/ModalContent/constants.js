import QueryFormModal from './QueryFormModal';
import SuccessQueryModal from './SuccessQueryModal';
import LoadingQueryModal from './LoadingQueryModal';
import ErrorQueryModal from './ErrorQueryModal';
import BuyCreditsModal from './BuyCreditsModal';
import ChoosePlanModal from './ChoosePlanModal';
import AvailableSoonModal from './AvailabelSoonModal';

export const MODAL_TYPES = new Map([
    ['QUERY_FORM_MODAL', QueryFormModal],
    ['SUCCESS_QUERY_MODAL', SuccessQueryModal],
    ['LOADING_QUERY_MODAL', LoadingQueryModal],
    ['ERROR_QUERY_MODAL', ErrorQueryModal],
    ['BUY_CREDITS_MODAL', BuyCreditsModal],
    ['CHOOSE_PLAN_MODAL', ChoosePlanModal],
    ['AVAILABLE_SOON_MODAL', AvailableSoonModal],
]);

export const PLAN_OPTIONS = {
    plan: [{
            name: 'Plano Starter',
            price: 'R$ 77,00',
            mainDescription: '5 créditos para consultas',
        },
        {
            name: 'Plano Master',
            price: 'R$ 97,00',
            mainDescription: '15 créditos para consultas',
        },
        {
            name: 'Plano Ultimate',
            price: 'R$ 117,00',
            mainDescription: '30 créditos para consultas',
        },
    ],
};