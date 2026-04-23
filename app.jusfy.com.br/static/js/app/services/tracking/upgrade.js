import BaseTrackingService from "./BaseTrackingService";
import {
    handleAxiosErrorMessage
} from "./customErrors/apiErrors";

/**
 * @typedef {Object} PaymentData
 * @property {string} id - ID do pagamento
 * @property {string} transaction_id - ID da transação
 * @property {number} amount - Valor do pagamento
 * @property {string} status - Status do pagamento
 */
/**
 * @typedef {Object} PaymentMethod
 * @property {string} [type] - Tipo do método de pagamento
 * @property {string} [provider] - Provedor do pagamento
 * @property {string} [card_number] - Número primeiros números do cartão
 * @property {string} [card_brand] - Bandeira do cartão
 * @property {Object} [info] - Informações adicionais
 */

class UpgradeTrackingService extends BaseTrackingService {
    static EVENT_UPGRADE_STARTED = "limit_reach_upgrade_button_clicked";
    static EVENT_UPGRADE_PAYMENT_UPGRADED = "plan_upgraded";
    static EVENT_UPGRADE_PAYMENT_SUCCESS = "upgrade_payment_success";
    static EVENT_UPGRADE_PAYMENT_FAILED = "upgrade_payment_failed";
    static EVENT_UPGRADE_CARD_TOKENIZATION_SUCCESS =
        "upgrade_card_tokenization_success";
    static EVENT_UPGRADE_CARD_TOKENIZATION_ERROR =
        "upgrade_card_tokenization_error";

    constructor() {
        super("UpgradeTrackingService");
    }

    /**
     * Rastreia sucesso no upgrade de plano
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {PaymentData} paymentData - Dados do pagamento
     * @param {PaymentMethod} paymentMethod - Método de pagamento
     */
    trackUpgradePaymentSuccess(
        userData,
        currentPlan,
        newPlan,
        paymentData,
        paymentMethod = {},
        context
    ) {
        this._identifyUser(userData);
        this._upgradePaymentSuccess(
            userData,
            currentPlan,
            newPlan,
            paymentData,
            paymentMethod,
            context
        );
    }

    /**
     * Método interno para rastrear sucesso no upgrade
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {PaymentData} paymentData - Dados do pagamento
     * @param {PaymentMethod} paymentMethod - Método de pagamento
     */
    _upgradePaymentSuccess(
        userData,
        currentPlan,
        newPlan,
        paymentData,
        paymentMethod = {},
        context
    ) {
        const currentPlanAmount = currentPlan ? .plan_details ? .amount || currentPlan ? .price || 0;
        const newPlanAmount = newPlan ? .amount || newPlan ? .price || 0;
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || "anonymous",
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name,
            current_plan_amount: currentPlanAmount,
            current_plan_price: currentPlanAmount,
            current_plan_type: currentPlan ? .plan_details ? .type,

            // Novo plano
            new_plan_id: newPlan.id,
            new_plan_name: newPlan.name,
            new_plan_amount: newPlanAmount,
            new_plan_price: newPlanAmount,
            new_plan_type: newPlan.type,

            // Diferença de valor
            upgrade_amount:
                (newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0),
            upgrade_percentage: currentPlanAmount > 0 ?
                (((newPlanAmount ? ? 0) -
                        (currentPlanAmount ? ? 0)) /
                    (currentPlanAmount ? ? 0)) *
                100 :
                null,

            // Dados do pagamento
            payment_id: paymentData.id || paymentData.transaction_id,
            payment_amount: paymentData.amount ||
                newPlanAmount - currentPlanAmount,
            payment_status: paymentData.status || "success",
            provider: paymentMethod ? .provider ||
                paymentMethod ? .info ? .provider ||
                newPlan ? .provider ||
                newPlan ? .subscription_status ? .info ? .provider ||
                currentPlan ? .info ? .provider ||
                "unknown",

            // Método de pagamento
            payment_method: paymentMethod.type || "card",
            card_number_masked: this._maskCardNumber(paymentMethod.card_number),
            card_brand: this._getCardBrand(paymentMethod.card_number),

            // Metadados da operação
            context: context || "upgrade",
            timestamp: new Date().toISOString(),
            event_type: UpgradeTrackingService.EVENT_UPGRADE_PAYMENT_SUCCESS,
            conversion_value: 1,
            upgrade_step: "completed",
            status: "success",
        };

        this._trackEvent(
            UpgradeTrackingService.EVENT_UPGRADE_PAYMENT_SUCCESS,
            trackingData
        );
    }

    /**
     * Rastreia início do processo de upgrade de plano
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} paymentMethod - Método de pagamento
     */
    trackUpgradeStarted(userData, currentPlan, newPlan, paymentMethod = {}, context) {
        this._identifyUser(userData);
        this._upgradeStarted(userData, currentPlan, newPlan, paymentMethod, context);
    }

    /**
     * Método interno para rastrear início do upgrade
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} paymentMethod - Método de pagamento
     */
    _upgradeStarted(userData, currentPlan, newPlan, paymentMethod = {}, context) {
        const currentPlanAmount = currentPlan ? .plan_details ? .amount || currentPlan ? .price || 0;
        const newPlanAmount = newPlan ? .amount || newPlan ? .price || 0;
        const trackingData = {
            // Informações do cliente
            user_id: userData ? .id || "anonymous",
            user_email: userData ? .email,
            user_name: userData ? .name,
            client_id: userData ? .client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name,
            current_plan_amount: currentPlanAmount,
            current_plan_price: currentPlanAmount,
            current_plan_type: currentPlan ? .plan_details ? .type,

            // Novo plano
            new_plan_id: newPlan.id,
            new_plan_name: newPlan.name,
            new_plan_amount: newPlanAmount,
            new_plan_price: newPlanAmount,
            new_plan_type: newPlan.type,

            // Diferença de valor
            upgrade_amount:
                (newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0),
            upgrade_percentage: currentPlanAmount > 0 ?
                (((newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0)) /
                    currentPlanAmount) *
                100 :
                null,

            // Método de pagamento
            payment_method: paymentMethod ? .type || "unknown",
            payment_provider: paymentMethod ? .provider || "unknown",
            card_number_masked: this._maskCardNumber(paymentMethod ? .card_number),
            card_brand: this._getCardBrand(paymentMethod ? .card_number),
            // provider: paymentMethod?.provider || 'unknown',
            provider: paymentMethod ? .provider ||
                paymentMethod ? .info ? .provider ||
                newPlan ? .provider ||
                currentPlan ? .info ? .provider ||
                "unknown",

            // Metadados da operação
            context: context || "upgrade",
            timestamp: new Date().toISOString(),
            event_type: UpgradeTrackingService.EVENT_UPGRADE_STARTED,
            conversion_value: 0,
            upgrade_step: "initiated",
        };

        // TODO trackingData is empty ?

        this._trackEvent(
            UpgradeTrackingService.EVENT_UPGRADE_STARTED,
            trackingData
        );
    }

    /**
     * Rastreia início do processo de upgrade de plano
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {PaymentMethod} paymentMethod - Método de pagamento
     */
    trackUpgradeUpgraded(userData, currentPlan, newPlan, paymentMethod = {}, context) {
        this._identifyUser(userData);
        this._upgradeConfirmed(userData, currentPlan, newPlan, paymentMethod, context);
    }

    /**
     * Método interno para rastrear início do upgrade
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {PaymentMethod} paymentMethod - Método de pagamento
     */
    _upgradeConfirmed(userData, currentPlan, newPlan, paymentMethod = {}, context) {
        const currentPlanAmount = currentPlan ? .plan_details ? .amount || currentPlan ? .price || 0;
        const newPlanAmount = newPlan ? .amount || newPlan ? .price || 0;
        const trackingData = {
            // Informações do cliente
            user_id: userData ? .id || "anonymous",
            user_email: userData ? .email,
            user_name: userData ? .name,
            client_id: userData ? .client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name,
            current_plan_amount: currentPlanAmount,
            current_plan_price: currentPlanAmount,
            current_plan_type: currentPlan ? .plan_details ? .type,

            // Novo plano
            new_plan_id: newPlan.id,
            new_plan_name: newPlan.name,
            new_plan_amount: newPlanAmount,
            new_plan_price: newPlanAmount,
            new_plan_type: newPlan.type,

            // Diferença de valor
            upgrade_amount:
                (newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0),
            upgrade_percentage: currentPlanAmount > 0 ?
                (((newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0)) /
                    currentPlanAmount) *
                100 :
                null,

            // Método de pagamento
            payment_method: paymentMethod ? .type || "unknown",
            payment_provider: paymentMethod ? .provider || "unknown",
            card_number_masked: this._maskCardNumber(paymentMethod ? .card_number),
            card_brand: this._getCardBrand(paymentMethod ? .card_number),
            // provider: paymentMethod?.provider || 'unknown',
            provider: paymentMethod ? .provider ||
                paymentMethod ? .info ? .provider ||
                newPlan ? .provider ||
                currentPlan ? .info ? .provider ||
                "unknown",

            // Metadados da operação
            context: context || "upgrade",
            timestamp: new Date().toISOString(),
            event_type: UpgradeTrackingService.EVENT_UPGRADE_PAYMENT_UPGRADED,
            conversion_value: 0,
            upgrade_step: "confirmed",
        };

        // TODO trackingData is empty ?

        this._trackEvent(
            UpgradeTrackingService.EVENT_UPGRADE_PAYMENT_UPGRADED,
            trackingData
        );
    }

    /**
     * Rastreia falha no upgrade de plano
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} error - Dados do erro
     * @param {PaymentMethod} paymentMethod - Método de pagamento
     */
    trackUpgradePaymentFailed(
        userData,
        currentPlan,
        newPlan,
        error,
        paymentMethod = {},
        context
    ) {
        this._upgradePaymentFailed(
            userData,
            currentPlan,
            newPlan,
            error,
            paymentMethod,
            context
        );
    }

    /**
     * Método interno para rastrear falha no upgrade
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} error - Dados do erro
     * @param {PaymentMethod} paymentMethod - Método de pagamento
     */
    _upgradePaymentFailed(
        userData,
        currentPlan,
        newPlan,
        error,
        paymentMethod = {},
        context
    ) {
        const {
            message = null,
                data = null,
                status = null,
        } = handleAxiosErrorMessage(error);
        const currentPlanAmount = currentPlan ? .plan_details ? .amount || currentPlan ? .price || 0;
        const newPlanAmount = newPlan ? .amount || newPlan ? .price || 0;
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || "anonymous",
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name,
            current_plan_amount: currentPlanAmount,
            current_plan_price: currentPlanAmount,
            current_plan_type: currentPlan ? .plan_details ? .type,

            // Novo plano
            new_plan_id: newPlan.id,
            new_plan_name: newPlan.name,
            new_plan_amount: newPlanAmount,
            new_plan_price: newPlanAmount,
            new_plan_type: newPlan.type,

            // Diferença de valor
            upgrade_amount:
                (newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0),
            upgrade_percentage: currentPlanAmount > 0 ?
                (((newPlanAmount ? ? 0) -
                        (currentPlanAmount ? ? 0)) /
                    currentPlanAmount) *
                100 :
                null,

            // Dados do erro
            error_message: message || error ? .message || "Unknown upgrade error",
            error_code: status || error ? .code || "UNKNOWN_ERROR",
            error_type: error ? .type || "upgrade_payment_failed",
            error_details: data || error ? .details || "No details available",
            failure_reason: error ? .failure_reason || "payment_failed",
            error_provider: error ? .provider,

            // Método de pagamento
            payment_method: paymentMethod.type || "card",
            card_number_masked: this._maskCardNumber(paymentMethod.card_number),
            card_brand: this._getCardBrand(paymentMethod.card_number),
            provider: paymentMethod ? .info ? .provider ||
                newPlan ? .provider ||
                currentPlan ? .info ? .provider ||
                "unknown",

            // Metadados da operação
            context: context || "upgrade",
            timestamp: new Date().toISOString(),
            event_type: UpgradeTrackingService.EVENT_UPGRADE_PAYMENT_FAILED,
            conversion_value: 0,
            upgrade_step: "failed",
            status: "error",
        };

        this._trackEvent(
            UpgradeTrackingService.EVENT_UPGRADE_PAYMENT_FAILED,
            trackingData
        );
    }

    /**
     * Rastreia sucesso na tokenização de cartão para upgrade
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} tokenData - Dados do token gerado
     * @param {Object} cardData - Dados do cartão
     */
    trackCardTokenizationSuccess(
        userData,
        currentPlan,
        newPlan,
        tokenData,
        cardData,
        context
    ) {
        this._identifyUser(userData);
        this._cardTokenizationSuccess(
            userData,
            currentPlan,
            newPlan,
            tokenData,
            cardData,
            context
        );
    }

    /**
     * Método interno para rastrear tokenização de cartão (sucesso)
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} tokenData - Dados do token gerado
     * @param {Object} cardData - Dados do cartão
     */
    _cardTokenizationSuccess(
        userData,
        currentPlan,
        newPlan,
        tokenData,
        cardData,
        context
    ) {
        const newPlanAmount = newPlan ? .amount || newPlan ? .price || 0;
        const currentPlanAmount = currentPlan ? .plan_details ? .amount || currentPlan ? .price || 0;

        const trackingData = {
            // Novo plano
            new_plan_id: newPlan.id,
            new_plan_name: newPlan.name,
            new_plan_amount: newPlanAmount,
            new_plan_price: newPlanAmount,
            new_plan_type: newPlan.type,

            // Diferença de valor
            upgrade_amount:
                (newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0),
            upgrade_percentage: currentPlanAmount > 0 ?
                (((newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0)) /
                    currentPlanAmount) *
                100 :
                null,

            // Informações do cartão
            card_hash: tokenData.id || tokenData.card_hash,
            card_number_masked: this._maskCardNumber(cardData.card_number),
            card_brand: this._getCardBrand(cardData.card_number),
            // provider: userData?.provider || 'unknown',
            provider: tokenData ? .info ? .provider ||
                newPlan ? .provider ||
                currentPlan ? .info ? .provider ||
                "unknown",

            // Metadados da operação
            context: context || "upgrade",
            timestamp: new Date().toISOString(),
            status: "success",
            event_type: UpgradeTrackingService.EVENT_UPGRADE_CARD_TOKENIZATION_SUCCESS,
            conversion_value: 1,
            upgrade_step: "card_tokenized",
        };

        this._trackEvent(
            UpgradeTrackingService.EVENT_UPGRADE_CARD_TOKENIZATION_SUCCESS,
            trackingData
        );
    }

    /**
     * Rastreia falha na tokenização de cartão para upgrade
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} error - Erro ocorrido
     * @param {Object} cardData - Dados do cartão
     */
    trackCardTokenizationError(userData, currentPlan, newPlan, error, cardData, context) {
        this._cardTokenizationError(
            userData,
            currentPlan,
            newPlan,
            error,
            cardData,
            context
        );
    }

    /**
     * Método interno para rastrear falha na tokenização de cartão
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {Object} newPlan - Novo plano
     * @param {Object} error - Erro ocorrido
     * @param {Object} cardData - Dados do cartão
     */
    _cardTokenizationError(userData, currentPlan, newPlan, error, cardData, context) {
        const newPlanAmount = newPlan ? .amount || newPlan ? .price || 0;
        const currentPlanAmount = currentPlan ? .plan_details ? .amount || currentPlan ? .price || 0;

        const trackingData = {
            // Informações do cliente
            user_id: userData.id || "anonymous",
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name,
            current_plan_amount: currentPlanAmount,
            current_plan_price: currentPlanAmount,
            current_plan_type: currentPlan ? .plan_details ? .type,

            // Novo plano
            new_plan_id: newPlan.id,
            new_plan_name: newPlan.name,
            new_plan_amount: newPlanAmount,
            new_plan_price: newPlanAmount,
            new_plan_type: newPlan.type,

            // Diferença de valor
            upgrade_amount:
                (newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0),
            upgrade_percentage: currentPlanAmount > 0 ?
                (((newPlanAmount ? ? 0) - (currentPlanAmount ? ? 0)) /
                    currentPlanAmount) *
                100 :
                null,

            // Informações do cartão (mascaradas por segurança)
            card_number_masked: this._maskCardNumber(cardData.card_number),
            card_brand: this._getCardBrand(cardData.card_number),

            // Informações do erro
            error_message: error ? .message || "Unknown error",
            error_code: error ? .code || "UNKNOWN_ERROR",
            error_type: error ? .type || "tokenization_error",
            provider: currentPlan ? .info ? .provider || "unknown",

            // Metadados da operação
            context: context || "upgrade",
            timestamp: new Date().toISOString(),
            status: "error",
            event_type: UpgradeTrackingService.EVENT_UPGRADE_CARD_TOKENIZATION_ERROR,
            conversion_value: 0,
            upgrade_step: "card_tokenization_failed",
        };

        this._trackEvent(
            UpgradeTrackingService.EVENT_UPGRADE_CARD_TOKENIZATION_ERROR,
            trackingData
        );
    }
}

export default new UpgradeTrackingService();