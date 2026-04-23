import {
    parseCurrency
} from "../../utils/currency";
import BaseTrackingService from "./BaseTrackingService";
import {
    handleAxiosErrorMessage
} from "./customErrors/apiErrors";

/**
 * Class de track de eventos de upgrade de plano em jusProcessos
 * jus_processos_product_lp_checkout_opened
 * jus_processos_product_lp_checkout_payment_step_opened
 * jus_processos_subscription_made
 * jus_processos_subscription_error
 * save_card_api_failed
 */
class JusProcessosSubscriptionTrackingService extends BaseTrackingService {
    static EVENT_CHECKOUT_OPENED = 'jus_processos_product_lp_checkout_opened';
    static EVENT_PAYMENT_STEP_OPENED = 'jus_processos_product_lp_checkout_payment_step_opened';
    static EVENT_SUBSCRIPTION_MADE = 'jus_processos_subscription_made';
    static EVENT_SUBSCRIPTION_CLICKED = 'jus_processos_subscription_sign_now_button_clicked';
    static EVENT_SUBSCRIPTION_ERROR = 'jus_processos_subscription_error';
    static EVENT_SAVE_CARD_ERROR = 'save_card_api_failed';

    constructor() {
        super("JusProcessosSubscriptionsTrackingService");
    }

    _buildBasicData(userData, currentPlan) {
        return {
            // Informações do cliente
            user_id: userData.id,
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id ?
                ? currentPlan ? .subscription_status ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name ?
                ? currentPlan ? .subscription_status ? .plan_details ? .name,
            current_plan_amount: currentPlan ? .plan_details ? .amount ?
                ? currentPlan ? .subscription_status ? .plan_details ? .amount,
            current_plan_type: currentPlan ? .plan_details ? .plan_type ?
                ? currentPlan ? .subscription_status ? .plan_details ? .plan_type,
        };
    }

    /**
     * Método para rastrear abertura do checkout
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} selectedPlan - Plano selecionado
     */
    trackCheckoutOpened(userData, currentPlan) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: currentPlan ? .info ? .provider || "unknown",
            // selected_plan_id: selectedPlan?.id,
            // selected_plan_name: selectedPlan?.name,
            // selected_plan_amount: selectedPlan?.amount,
            // selected_plan_type: selectedPlan?.plan_type,
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_CHECKOUT_OPENED,
            step: 'checkout_opened',
            context: 'jusprocessos'
        };

        this._trackEvent(this.constructor.EVENT_CHECKOUT_OPENED, trackingData);
    }

    /**
     * Método para rastrear abertura do passo de pagamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} selectedPlan - Plano selecionado
     */
    trackPaymentStepOpened(userData, currentPlan, selectedPlan) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: currentPlan ? .info ? .provider || "unknown",
            selected_plan_id: selectedPlan ? .id,
            selected_plan_name: selectedPlan ? .name,
            selected_plan_amount: parseCurrency(selectedPlan ? .fullPrice),
            selected_plan_type: selectedPlan ? .plan_type,
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_STEP_OPENED,
            step: 'payment_opened',
            context: 'jusprocessos'
        };

        this._trackEvent(this.constructor.EVENT_PAYMENT_STEP_OPENED, trackingData);
    }

    /**
     * Método para rastrear sucesso na assinatura
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} selectedPlan - Plano selecionado
     * @param {Object} subscriptionData - Dados da assinatura
     */
    trackSubscriptionMade(userData, currentPlan, selectedPlan, subscriptionData) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: subscriptionData ? .provider ||
                subscriptionData ? .subscription_status ? .info ? .provider ||
                currentPlan ? .subscription_status ? .info ? .provider ||
                "unknown",
            selected_plan_id: selectedPlan ? .id,
            selected_plan_name: selectedPlan ? .name,
            selected_plan_amount: parseCurrency(selectedPlan ? .fullPrice),
            selected_plan_type: selectedPlan ? .plan_type,
            subscription_id: subscriptionData ? .subscription_id,
            payment_method: subscriptionData ? .payment_method,
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_SUBSCRIPTION_MADE,
            step: 'subscription_completed',
            context: 'jusprocessos'
        };

        this._trackEvent(this.constructor.EVENT_SUBSCRIPTION_MADE, trackingData);
    }

    /**
     * Método para rastrear click no update da assinatura
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} selectedPlan - Plano selecionado
     * @param {Object} subscriptionData - Dados da assinatura
     */
    trackSubscriptionClick(userData, currentPlan, selectedPlan, card) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: currentPlan ? .subscription_status ? .info ? .provider ||
                "unknown",
            selected_plan_id: selectedPlan ? .id,
            selected_plan_name: selectedPlan ? .name,
            selected_plan_amount: parseCurrency(selectedPlan ? .fullPrice),
            selected_plan_type: selectedPlan ? .plan_type,
            payment_method: card,
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_SUBSCRIPTION_CLICKED,
            step: 'subscription_clicked',
            context: 'jusprocessos'
        };

        this._trackEvent(this.constructor.EVENT_SUBSCRIPTION_CLICKED, trackingData);
    }

    /**
     * Método para rastrear erro na assinatura
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} selectedPlan - Plano selecionado
     * @param {String} errorMessage - Mensagem de erro
     */
    trackSubscriptionError(userData, currentPlan, selectedPlan, errorMessage) {
        const {
            message = null, data = null, status = null
        } = handleAxiosErrorMessage(errorMessage);
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: currentPlan ? .subscription_status ? .info ? .provider || currentPlan ? .info ? .provider || "unknown",
            selected_plan_id: selectedPlan ? .id,
            selected_plan_name: selectedPlan ? .name,
            selected_plan_amount: parseCurrency(selectedPlan ? .fullPrice),
            selected_plan_type: selectedPlan ? .plan_type,
            error_message: message,
            error_data: data,
            error_status: status,
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_SUBSCRIPTION_ERROR,
            step: 'subscription_error',
            context: 'jusprocessos'
        };

        this._trackEvent(this.constructor.EVENT_SUBSCRIPTION_ERROR, trackingData);
    }

    /**
     * Método para rastrear erro ao salvar cartão
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {String} errorMessage - Mensagem de erro
     */
    trackSaveCardError(userData, currentPlan, errorMessage) {
        const {
            message,
            status = null,
            data = null
        } = handleAxiosErrorMessage(errorMessage);
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: currentPlan ? .info ? .provider || "unknown",
            error_message: message,
            error_data: data,
            error_status: status,
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_SAVE_CARD_ERROR,
            step: 'save_card_error',
            context: 'jusprocessos'
        };

        this._trackEvent(this.constructor.EVENT_SAVE_CARD_ERROR, trackingData);
    }
}

export default new JusProcessosSubscriptionTrackingService(); // FIX export object instances