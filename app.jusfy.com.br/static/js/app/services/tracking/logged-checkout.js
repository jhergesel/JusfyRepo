import BaseTrackingService from './BaseTrackingService';

class LoggedCheckoutTrackingService extends BaseTrackingService {
    static EVENT_LOGGED_CHECKOUT_CARD_TOKENIZATION_SUCCESS = 'logged_checkout_card_tokenization_success';
    static EVENT_LOGGED_CHECKOUT_CARD_TOKENIZATION_ERROR = 'logged_checkout_card_tokenization_error';
    static EVENT_LOGGED_CHECKOUT_PAYMENT_FAILED = 'logged_checkout_payment_failed';
    static EVENT_LOGGED_CHECKOUT_PAYMENT_SUCCESS = 'logged_checkout_payment_success';

    static EVENT_LOGGED_CHECKOUT_PIX_PAYMENT_PAID = 'logged_checkout_pix_payment_paid';
    static EVENT_LOGGED_CHECKOUT_TALK_TO_SUPPORT_CLICKED = 'logged_checkout_talk_to_support_clicked';
    static EVENT_LOGGED_CHECKOUT_PAYMENT_METHOD_CHANGED = 'logged_checkout_payment_method_changed';
    static EVENT_LOGGED_CHECKOUT_PAYMENT_BOLETO_CLICKED = 'logged_checkout_payment_boleto_clicked';
    static EVENT_LOGGED_CHECKOUT_PAY_INVOICE_BUTTON_CLICKED = 'logged_checkout_pay_invoice_button_clicked';

    constructor() {
        super('CheckoutTrackingService');
    }

    /**
     * Rastreia tentativa de tokenização de cartão (sucesso)
     * @param {Object} formikValues - Valores do formik
     * @param {Object} tokenData - Dados do token gerado
     * @param {Object} coupon - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackCardTokenizationSuccess(formikValues, tokenData, coupon = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupon, defaultTrialDays);

        this._cardTokenizationSuccess(cardData, userData, tokenData, checkoutData);
    }

    /**
     * Método interno para rastrear tokenização de cartão (sucesso)
     * @param {Object} cardData - Dados do cartão
     * @param {Object} userData - Dados do usuário
     * @param {Object} tokenData - Dados do token gerado
     * @param {Object} checkoutData - Dados do checkout (plano, cupom, etc.)
     */
    _cardTokenizationSuccess(cardData, userData, tokenData, checkoutData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do cartão
            card_hash: tokenData.id || tokenData.card_hash,
            card_number_masked: this._maskCardNumber(cardData.card_number),
            card_brand: this._getCardBrand(cardData.card_number),

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            provider: 'pagarme',
            status: 'success',

            // Informações adicionais para Metabase
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_CARD_TOKENIZATION_SUCCESS,
            conversion_value: 1,
            is_first_card: true, // No checkout sempre é o primeiro cartão
            checkout_step: 'step2',
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_CARD_TOKENIZATION_SUCCESS, trackingData);
    }

    /**
     * Rastreia falha na tokenização de cartão no checkout
     * @param {Object} formikValues - Valores do formik
     * @param {Object} error - Erro ocorrido
     * @param {Object} coupon - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackCardTokenizationError(formikValues, error, coupon = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupon, defaultTrialDays);

        this._cardTokenizationError(cardData, userData, error, checkoutData);
    }

    /**
     * Método interno para rastrear falha na tokenização de cartão
     * @param {Object} cardData - Dados do cartão
     * @param {Object} userData - Dados do usuário
     * @param {Object} error - Erro ocorrido
     * @param {Object} checkoutData - Dados do checkout
     */
    _cardTokenizationError(cardData, userData, error, checkoutData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do cartão (mascaradas por segurança)
            card_number_masked: this._maskCardNumber(cardData.card_number),
            card_brand: this._getCardBrand(cardData.card_number),

            // Informações do erro
            error_message: error ? .error_message || 'Unknown error',
            error_code: error ? .error_code || 'UNKNOWN_ERROR',
            error_type: error ? .error_type || 'tokenization_error',
            cors_details: error ? .cors_details || null,
            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            provider: 'pagarme',
            status: 'error',

            // Informações adicionais para Metabase
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_CARD_TOKENIZATION_ERROR,
            conversion_value: 0,
            is_first_card: true,
            checkout_step: 'step2',
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_CARD_TOKENIZATION_ERROR, trackingData);
    }

    /**
     * Rastreia erro de pagamento com failedReason
     * @param {Object} formikValues - Valores do formik
     * @param {Object} failedReason - Dados do erro de pagamento
     * @param {Object} coupon - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     * @param {Object} subscriptionData - Dados da assinatura (opcional, para extrair transaction_id)
     * @param {Object} pixPaymentData - Dados do pagamento Pix (opcional, para extrair transaction_id)
     */
    trackPaymentFailed(formikValues, failedReason, coupon = {}, defaultTrialDays = 7, subscriptionData = {}, pixPaymentData = {}) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupon, defaultTrialDays);

        this._paymentFailed(userData, checkoutData, failedReason, cardData, subscriptionData, pixPaymentData);
    }

    /**
     * Método interno para rastrear erro de pagamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {Object} failedReason - Dados do erro de pagamento
     * @param {Object} cardData - Dados do cartão (opcional)
     * @param {Object} subscriptionData - Dados da assinatura (opcional, para extrair transaction_id)
     * @param {Object} pixPaymentData - Dados do pagamento Pix (opcional, para extrair transaction_id)
     */
    _paymentFailed(userData, checkoutData, failedReason, cardData = {}, subscriptionData = {}, pixPaymentData = {}) {
        // Extrai transaction_id do pixPaymentData quando disponível
        const gatewayData = pixPaymentData ? .gatewayData || {};
        const lastTransaction = gatewayData ? .last_transaction || {};

        const pixTransactionId =
            lastTransaction ? .id ||
            pixPaymentData ? .transactionId ||
            pixPaymentData ? .id ||
            '';

        const pixTransactionStatus =
            lastTransaction ? .status ||
            gatewayData ? .status ||
            pixPaymentData ? .status ||
            '';

        // Extrai transaction_id de múltiplas fontes possíveis (prioriza pixPaymentData)
        const transaction_id =
            pixTransactionId ||
            failedReason ? .transaction_id ||
            failedReason ? .id ||
            subscriptionData ? .id ||
            subscriptionData ? .transaction_id ||
            '';

        // Extrai transaction_status de múltiplas fontes possíveis (prioriza pixPaymentData)
        const transaction_status =
            pixTransactionStatus ||
            subscriptionData ? .status ||
            failedReason ? .status ||
            'failed';

        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do cartão (se disponível)
            card_number_masked: this._maskCardNumber(cardData.card_number),
            card_brand: this._getCardBrand(cardData.card_number),

            // Informações do erro de pagamento
            error_message: failedReason.message || failedReason ? .error_message || 'Unknown payment error',
            error_details: failedReason.details || failedReason ? .error_code || 'No details available',
            error_code: failedReason ? .error_code || 'unknown',
            error_type: failedReason ? .error_type || 'payment_failed',

            // Informações da transação
            transaction_id: transaction_id,
            transaction_status: transaction_status,

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            provider: 'pagarme',
            status: 'payment_failed',

            // Informações adicionais para Metabase
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_FAILED,
            conversion_value: 0,
            is_first_card: true,
            checkout_step: 'step2',
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_FAILED, trackingData);
    }

    /**
     * Rastreia sucesso no pagamento
     * @param {Object} subscriptionData - Dados da assinatura criada
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {Object} cardData - Dados do cartão (opcional)
     */
    trackPaymentSuccess(subscriptionData, userData, checkoutData = {}, cardData = {}) {
        this._identifyUser(userData);
        this._paymentSuccess(subscriptionData, userData, checkoutData, cardData);
    }

    /**
     * Método interno para rastrear sucesso no pagamento
     * @param {Object} subscriptionData - Dados da assinatura criada
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {Object} cardData - Dados do cartão (opcional)
     */
    _paymentSuccess(subscriptionData, userData, checkoutData = {}, cardData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document_number || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: subscriptionData ? .id || subscriptionData ? .transaction_id || '',
            transaction_status: subscriptionData ? .status || 'active',

            // Informações do cartão (se disponível)
            card_number_masked: this._maskCardNumber(cardData.card_number),
            card_brand: this._getCardBrand(cardData.card_number),

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            timestamp: new Date().toISOString(),
            provider: 'pagarme_v5',
            status: 'success',

            // Informações adicionais para Metabase
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_SUCCESS,
            conversion_value: 1,
            action: 'payment_success',
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_SUCCESS, trackingData);
    }

    /**
     * Rastreia pagamento Pix confirmado
     * @param {Object} transactionData - Dados da transação Pix
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} origin - Origem do evento (ex: 'logged-area', 'checkout')
     */
    trackPixPaymentPaid(transactionData, userData, checkoutData = {}, origin = 'checkout') {
        this._identifyUser(userData);
        this._pixPaymentPaid(transactionData, userData, checkoutData, origin);
    }

    /**
     * Método interno para rastrear pagamento Pix confirmado
     * @param {Object} transactionData - Dados da transação Pix
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} origin - Origem do evento
     */
    _pixPaymentPaid(transactionData, userData, checkoutData = {}, origin = 'checkout') {
        // Prioriza a estrutura do exemplo fornecido
        const gatewayData = transactionData ? .gatewayData || {};
        const lastTransaction = gatewayData ? .last_transaction || {};
        const customer = gatewayData ? .customer || {};

        // Informações da transação - prioriza gatewayData.last_transaction
        const transaction_id =
            lastTransaction ? .id ||
            transactionData ? .transactionId ||
            transactionData ? .id ||
            '';

        const transaction_status =
            lastTransaction ? .status ||
            gatewayData ? .status ||
            transactionData ? .status ||
            'paid';

        const created_at =
            lastTransaction ? .created_at ||
            gatewayData ? .created_at ||
            transactionData ? .createdAt ||
            new Date().toISOString();

        const updated_at =
            lastTransaction ? .updated_at ||
            gatewayData ? .updated_at ||
            transactionData ? .updatedAt ||
            new Date().toISOString();

        // Valor do pagamento - prioriza gatewayData
        const amount =
            gatewayData ? .amount ||
            lastTransaction ? .amount ||
            gatewayData ? .paid_amount ||
            checkoutData ? .plan_amount ||
            transactionData ? .basePrice ||
            0;

        // Informações do cliente - prioriza gatewayData.customer
        const customer_document_number =
            customer ? .document ||
            userData ? .document_number ||
            '';

        const customer_name =
            customer ? .name ||
            userData ? .name ||
            '';

        const customer_email =
            customer ? .email ||
            userData ? .email ||
            '';

        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email || customer_email,
            user_name: userData.name || customer_name,
            client_id: userData.client_id,
            customer_document_number: customer_document_number,
            customer_name: customer_name,
            customer_email: customer_email,

            // Informações da transação
            transaction_id: transaction_id,
            transaction_status: transaction_status,
            created_at: created_at,
            updated_at: updated_at,
            payment_method: 'pix',
            amount: amount,

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            provider: 'pagarme_v5',
            status: 'paid',
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PIX_PAYMENT_PAID,
            conversion_value: 1,
            checkout_step: origin === 'logged-area' ? undefined : 'step2',
            action: 'pix_payment_paid',
            origin: origin,
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PIX_PAYMENT_PAID, trackingData);
    }

    /**
     * Rastreia clique no botão "Falar com o suporte"
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} origin - Origem do clique ('pix' ou 'credit-card')
     * @param {Object} pixPaymentData - Dados do pagamento Pix (opcional, para extrair transaction_id)
     */
    trackTalkToSupportClicked(userData, checkoutData = {}, origin = '', pixPaymentData = {}) {
        this._identifyUser(userData);
        this._talkToSupportClicked(userData, checkoutData, origin, pixPaymentData);
    }

    /**
     * Método interno para rastrear clique em "Falar com o suporte"
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} origin - Origem do clique ('pix' ou 'credit-card')
     * @param {Object} pixPaymentData - Dados do pagamento Pix (opcional, para extrair transaction_id)
     */
    _talkToSupportClicked(userData, checkoutData = {}, origin = '', pixPaymentData = {}) {
        // Extrai transaction_id e transaction_status do pixPaymentData quando disponível
        const gatewayData = pixPaymentData ? .gatewayData || {};
        const lastTransaction = gatewayData ? .last_transaction || {};

        const transaction_id =
            lastTransaction ? .id ||
            pixPaymentData ? .transactionId ||
            pixPaymentData ? .id ||
            '';

        const transaction_status =
            lastTransaction ? .status ||
            gatewayData ? .status ||
            pixPaymentData ? .status ||
            '';

        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document_number || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: transaction_id,
            transaction_status: transaction_status,

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            timestamp: new Date().toISOString(),
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_TALK_TO_SUPPORT_CLICKED,
            conversion_value: 0,
            action: 'talk_to_support_clicked',
            origin: origin,
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_TALK_TO_SUPPORT_CLICKED, trackingData);
    }

    /**
     * Rastreia troca de forma de pagamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} fromMethod - Forma de pagamento de origem ('pix' ou 'credit-card')
     * @param {string} toMethod - Forma de pagamento de destino ('pix' ou 'credit-card')
     */
    trackPaymentMethodChanged(userData, checkoutData = {}, fromMethod = '', toMethod = '', pixPaymentData = {}) {
        this._identifyUser(userData);
        this._paymentMethodChanged(userData, checkoutData, fromMethod, toMethod, pixPaymentData);
    }

    /**
     * Método interno para rastrear troca de forma de pagamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} fromMethod - Forma de pagamento de origem ('pix' ou 'credit-card')
     * @param {string} toMethod - Forma de pagamento de destino ('pix' ou 'credit-card')
     * @param {Object} pixPaymentData - Dados do pagamento Pix (opcional, para extrair transaction_id)
     */
    _paymentMethodChanged(userData, checkoutData = {}, fromMethod = '', toMethod = '', pixPaymentData = {}) {
        // Extrai transaction_id e transaction_status do pixPaymentData quando disponível
        const gatewayData = pixPaymentData ? .gatewayData || {};
        const lastTransaction = gatewayData ? .last_transaction || {};

        const transaction_id =
            lastTransaction ? .id ||
            pixPaymentData ? .transactionId ||
            pixPaymentData ? .id ||
            '';

        const transaction_status =
            lastTransaction ? .status ||
            gatewayData ? .status ||
            pixPaymentData ? .status ||
            '';

        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document_number || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: transaction_id,
            transaction_status: transaction_status,

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            timestamp: new Date().toISOString(),
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_METHOD_CHANGED,
            conversion_value: 0,
            action: 'payment_method_changed',
            from_method: fromMethod,
            to_method: toMethod,
        };

        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_METHOD_CHANGED, trackingData);
    }

    _subscriptionReduxDataParser(subscriptionData) {
        const subscriptionParsed = {};
        const planParsed = {};

        planParsed.plan_id = subscriptionData ? .plan_details ? .id || '';
        planParsed.plan_name = subscriptionData ? .plan_details ? .name || '';
        planParsed.plan_amount = subscriptionData ? .plan_details ? .amount || 0;
        planParsed.plan_type = subscriptionData ? .plan_details ? .plan_type || '';
        planParsed.coupon_code = subscriptionData ? .info ? .coupon || '';
        planParsed.coupon_valid = subscriptionData ? .info ? .coupon ? true : false;
        // trial_days
        planParsed.trial_days = subscriptionData ? .plan_details ? .trial_days || 0;
        // has_compra_garantida
        planParsed.has_compra_garantida = subscriptionData ? .has_compra_garantida || false;

        subscriptionParsed.subscription_id = subscriptionData ? .info ? .subscription_id || '';
        subscriptionParsed.subscription_status = subscriptionData ? .info ? .status || '';

        return {
            subscription: subscriptionParsed,
            plan: planParsed,
        }
    }

    trackAccessBoletoUrl(userData, checkoutData) {
        const {
            subscription,
            plan
        } = this._subscriptionReduxDataParser(checkoutData);
        const boletoDataUrl = checkoutData ? .tickets ? .[0] ? .pdf || {};

        const trackingData = {
            // Informações do cliente
            user_id: userData ? .id || 'anonymous',
            user_email: userData ? .email,
            user_name: userData ? .name,
            client_id: userData ? .client_id,
            customer_document_number: userData.document_number || '',
            customer_name: userData ? .name || '',
            customer_email: userData ? .email || '',

            // Informações do checkout
            plan_id: plan ? .plan_id,
            plan_name: plan ? .plan_name,
            plan_amount: plan ? .plan_amount,
            plan_type: plan ? .plan_type,
            coupon_code: plan ? .coupon_code,
            coupon_valid: plan ? .coupon_valid,
            trial_days: plan ? .trial_days,
            has_compra_garantida: plan ? .has_compra_garantida,

            subscription_id: subscription ? .subscription_id,
            subscription_status: subscription ? .subscription_status,

            boletoDataUrl,

            // Metadados da operação
            timestamp: new Date().toISOString(),
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_BOLETO_CLICKED,
            conversion_value: 0,
            action: 'access_boleto_url_clicked',
        };

        this._identifyUser(userData);
        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAYMENT_BOLETO_CLICKED, trackingData);
    }

    trackPayInvoiceButtonClicked(userData, checkoutData, origin) {
        const {
            subscription,
            plan
        } = this._subscriptionReduxDataParser(checkoutData);
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do checkout
            plan_id: plan.plan_id,
            plan_name: plan.plan_name,
            plan_amount: plan.plan_amount,
            plan_type: plan.plan_type,
            coupon_code: plan.coupon_code,
            coupon_valid: plan.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            subscription_id: subscription.subscription_id,
            subscription_status: subscription.subscription_status,

            // Metadados da operação
            timestamp: new Date().toISOString(),
            event_type: LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAY_INVOICE_BUTTON_CLICKED,
            conversion_value: 0,
            action: 'pay_invoice_button_clicked',
            origin,
        };

        this._identifyUser(userData);
        this._trackEvent(LoggedCheckoutTrackingService.EVENT_LOGGED_CHECKOUT_PAY_INVOICE_BUTTON_CLICKED, trackingData);
    }

}

// Exportar instância singleton
// eslint-disable-next-line import/no-anonymous-default-export
export default new LoggedCheckoutTrackingService();