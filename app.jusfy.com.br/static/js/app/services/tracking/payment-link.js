import BaseTrackingService from './BaseTrackingService';
import {
    handleAxiosErrorMessage
} from './customErrors/apiErrors';

class PaymentLinkTrackingService extends BaseTrackingService {
    static EVENT_PAYMENT_LINK_VALIDATED = 'payment_link_validated';
    static EVENT_PAYMENT_LINK_EXPIRED = 'payment_link_expired';
    static EVENT_PAYMENT_LINK_ALREADY_PAID = 'payment_link_already_paid';
    static EVENT_PAYMENT_LINK_STARTED = 'payment_link_started';
    static EVENT_PAYMENT_LINK_CARD_TOKENIZATION_SUCCESS =
        'payment_link_card_tokenization_success';
    static EVENT_PAYMENT_LINK_CARD_TOKENIZATION_ERROR =
        'payment_link_card_tokenization_error';
    static EVENT_PAYMENT_LINK_SUBMITTED = 'payment_link_submitted_button_clicked';
    static EVENT_PAYMENT_LINK_POLLING_STARTED = 'payment_link_polling_started';
    static EVENT_PAYMENT_LINK_POLLING_SUCCESS = 'payment_link_payment_success';
    static EVENT_PAYMENT_LINK_POLLING_FAILED = 'payment_link_payment_failed';
    static EVENT_PAYMENT_LINK_POLLING_TIMEOUT = 'payment_link_polling_timeout';
    static EVENT_PAYMENT_LINK_SUBMISSION_FAILED =
        'payment_link_submission_failed';

    constructor() {
        super('PaymentLinkTrackingService');
    }

    /**
     * Rastreia quando um link de pagamento é validado com sucesso
     */
    trackPaymentLinkValidated(linkData, planData) {
        const trackingData = {
            link_id: linkData.link,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            plan_days: planData ? .days,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_VALIDATED,
            status: 'success',
            loaded_at: new Date().toISOString(),
            original_timestamp: new Date().toISOString(),
            provider: 'pagarme_v5',
            provider_id: linkData.plan.provider_id,
            trial_days: linkData.plan.trial_days,
            // type: '',
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_VALIDATED,
            trackingData
        );
    }

    /**
     * Rastreia quando um link de pagamento está expirado
     */
    trackPaymentLinkExpired(linkData) {
        const trackingData = {
            link_id: linkData.link,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_EXPIRED,
            status: 'expired',
        };

        this._trackEvent(this.constructor.EVENT_PAYMENT_LINK_EXPIRED, trackingData);
    }

    /**
     * Rastreia quando um link de pagamento já foi pago
     */
    trackPaymentLinkAlreadyPaid(linkData) {
        const trackingData = {
            link_id: linkData.link,
            paid_at: linkData.paid_at,
            submitted_at: linkData.submitted_at,
            plan_name: linkData.plan.name,
            provider_id: linkData.plan.provider_id,
            plan_days: linkData.plan ? .days,
            provider: 'pagarme_v5',
            amount: linkData.plan.amount,
            trial_days: linkData.plan.trial_days,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_ALREADY_PAID,
            status: 'already_paid',
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_ALREADY_PAID,
            trackingData
        );
    }

    /**
     * Rastreia quando o usuário inicia o processo de pagamento via link
     */
    trackPaymentLinkStarted(linkData, planData, paymentMethod) {
        const trackingData = {
            link_id: linkData.link,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            plan_days: planData ? .days,
            payment_method: paymentMethod,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_STARTED,
            status: 'started',
            provider: 'pagarme_v5',
            provider_id: linkData.plan.provider_id,
            trial_days: linkData.plan.trial_days,
        };

        this._trackEvent(this.constructor.EVENT_PAYMENT_LINK_STARTED, trackingData);
    }

    /**
     * Rastreia sucesso na tokenização do cartão para link de pagamento
     */
    trackCardTokenizationSuccess(linkData, planData, tokenData, cardData) {
        const trackingData = {
            link_id: linkData.link,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            token_id: tokenData.id,
            card_brand: tokenData.card.brand || 'unknown',
            card_number_masked: tokenData.card.last_four_digits || '****',
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_CARD_TOKENIZATION_SUCCESS,
            status: 'success',
            loaded_at: new Date().toISOString(),
            original_timestamp: new Date().toISOString(),
            provider: linkData ? .plan ? .provider_id,
            trial_days: linkData ? .plan ? .trial_days,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            // type: '',
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_CARD_TOKENIZATION_SUCCESS,
            trackingData
        );
    }

    /**
     * Rastreia erro na tokenização do cartão para link de pagamento
     */
    trackCardTokenizationError(linkData, planData, error, cardData) {
        const trackingData = {
            link_id: linkData.link,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            error_type: handleAxiosErrorMessage(error).error_type || 'polling_failed',
            error_message: handleAxiosErrorMessage(error).message ||
                'Falha no polling da assinatura',
            error_code: handleAxiosErrorMessage(error).status || 'unknown',
            error_data: handleAxiosErrorMessage(error).data,
            card_brand: cardData.card_brand || 'unknown',
            card_number_masked: cardData.card_number_masked || '****',
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_CARD_TOKENIZATION_ERROR,
            status: 'error',
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_CARD_TOKENIZATION_ERROR,
            trackingData
        );
    }

    /**
     * Rastreia quando o pagamento via link é submetido
     */
    trackPaymentLinkSubmitted(linkData, planData, tokenData) {
        const trackingData = {
            allowed_payment_methods: linkData.allowedPaymentMethods,
            link_id: linkData.link,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            token_id: tokenData.id,
            card_brand: tokenData.card.brand || 'unknown',
            card_number_masked: tokenData.card.last_four_digits || '****',
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_SUBMITTED,
            status: 'submitted',
            provider: 'pagarme_v5',
            provider_id: linkData.plan.provider_id,
            trial_days: linkData.plan.trial_days,
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_SUBMITTED,
            trackingData
        );
    }

    /**
     * Rastreia quando o polling da assinatura é iniciado
     */
    trackPaymentLinkPollingStarted(
        linkData,
        planData,
        subscriptionId,
        tokenData
    ) {
        const trackingData = {
            link_id: linkData.link,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            subscription_id: subscriptionId,
            ...(tokenData ? {
                token_id: tokenData.id,
                card_brand: tokenData ? .card ? .brand || 'unknown',
                card_number_masked: tokenData ? .card ? .last_four_digits || '****',
            } : {}),
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_POLLING_STARTED,
            status: 'polling_started',
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_POLLING_STARTED,
            trackingData
        );
    }

    /**
     * Rastreia sucesso no polling da assinatura
     */
    trackPaymentLinkPollingSuccess(
        linkData,
        planData,
        subscriptionData,
        tokenData
    ) {
        const trackingData = {
            link_id: linkData.link,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            subscription_id: subscriptionData.subscriptionId,
            subscription_status: subscriptionData.status,
            ...(tokenData ? {
                token_id: tokenData.id,
                card_brand: tokenData ? .card ? .brand || 'unknown',
                card_number_masked: tokenData ? .card ? .last_four_digits || '****',
            } : {}),
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_POLLING_SUCCESS,
            status: 'success',
            provider: 'pagarme_v5',
            provider_id: linkData ? .plan ? .provider_id,
            trial_days: linkData ? .plan ? .trial_days,
        };

        this._trackEvent(this.constructor.EVENT_PAYMENT_LINK_POLLING_SUCCESS, trackingData);
    }

    /**
     * Rastreia falha no polling da assinatura
     */
    trackPaymentLinkPollingFailed(linkData, planData, subscriptionData, error) {
        const trackingData = {
            link_id: linkData.link,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            trial_days: planData ? .trial_days,
            plan_amount: planData ? .amount,
            subscription_id: subscriptionData.subscriptionId,
            subscription_status: subscriptionData.status,
            error_type: handleAxiosErrorMessage(error).error_type || 'polling_failed',
            error_message: handleAxiosErrorMessage(error).message ||
                'Falha no polling da assinatura',
            error_code: handleAxiosErrorMessage(error).status || 'unknown',
            error_data: handleAxiosErrorMessage(error).data,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_POLLING_FAILED,
            status: 'failed',
            provider: 'pagarme_v5',
        };

        this._trackEvent(
            this.constructor.EVENT_PAYMENT_LINK_POLLING_FAILED,
            trackingData
        );
    }

    /**
     * Ratreia falhas antes do gateway
     */
    trackPaymentSubmissionFailed(linkData, planData, subscriptionData, error) {
        const trackingData = {
            link_id: linkData.link,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            trial_days: planData ? .trial_days,
            plan_amount: planData ? .amount,
            subscription_id: subscriptionData.subscriptionId,
            subscription_status: subscriptionData.status,
            error_type: handleAxiosErrorMessage(error).error_type || 'polling_failed',
            error_message: handleAxiosErrorMessage(error).message ||
                'Falha no polling da assinatura',
            error_code: handleAxiosErrorMessage(error).status || 'unknown',
            error_data: handleAxiosErrorMessage(error).data,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_SUBMISSION_FAILED,
            status: 'failed',
            provider: 'pagarme_v5',
        };

        this._trackEvent(this.constructor.EVENT_PAYMENT_LINK_SUBMISSION_FAILED, trackingData);
    }

    /**
     * Rastreia timeout no polling da assinatura
     */
    trackPaymentLinkPollingTimeout(
        linkData,
        planData,
        subscriptionId,
        elapsedTime
    ) {
        const trackingData = {
            link_id: linkData.link,
            allowed_payment_methods: linkData.allowedPaymentMethods,
            plan_id: planData ? .id,
            plan_name: planData ? .name,
            plan_amount: planData ? .amount,
            subscription_id: subscriptionId,
            elapsed_time_seconds: elapsedTime,
            context: 'payment_link',
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PAYMENT_LINK_POLLING_TIMEOUT,
            status: 'timeout'
        };

        this._trackEvent(this.constructor.EVENT_PAYMENT_LINK_POLLING_TIMEOUT, trackingData);
    }
}

export default new PaymentLinkTrackingService();