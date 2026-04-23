import BaseTrackingService from './BaseTrackingService';

class CheckoutTrackingService extends BaseTrackingService {
    static EVENT_CHECKOUT_STARTED = 'checkout_started';
    static EVENT_CHECKOUT_STEP_2_ADVANCED = 'checkout_step_2_advanced';
    static EVENT_CHECKOUT_STEP_2_ADVANCED_FAILED = 'checkout_step_2_advanced_failed';
    static EVENT_CHECKOUT_SIGN_UP_ATTEMPT = 'checkout_sign_up_attempt';
    static EVENT_CHECKOUT_CARD_TOKENIZATION_SUCCESS = 'checkout_card_tokenization_success';
    static EVENT_CHECKOUT_CARD_TOKENIZATION_ERROR = 'checkout_card_tokenization_error';
    static EVENT_CHECKOUT_PAYMENT_FAILED = 'checkout_payment_failed';

    static EVENT_CHECKOUT_PIX_PAYMENT_CLICKED = 'checkout_pix_payment_clicked';
    static EVENT_CHECKOUT_PIX_PAYMENT_PAID = 'checkout_pix_payment_paid';
    static EVENT_CHECKOUT_PIX_PAYMENT_FAILED = 'checkout_pix_payment_failed';
    static EVENT_CHECKOUT_TRY_AGAIN_CLICKED = 'checkout_try_again_clicked';
    static EVENT_CHECKOUT_ACCESS_PLATFORM_CLICKED = 'checkout_access_platform_clicked';

    constructor() {
        super('CheckoutTrackingService');
    }

    /**
     * Rastreia tentativa de tokenização de cartão (sucesso)
     * @param {Object} formikValues - Valores do formik
     * @param {Object} tokenData - Dados do token gerado
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackCardTokenizationSuccess(formikValues, tokenData, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_CARD_TOKENIZATION_SUCCESS,
            conversion_value: 1,
            is_first_card: true, // No checkout sempre é o primeiro cartão
            checkout_step: 'step2',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_CARD_TOKENIZATION_SUCCESS, trackingData);
    }

    /**
     * Rastreia falha na tokenização de cartão no checkout
     * @param {Object} formikValues - Valores do formik
     * @param {Object} error - Erro ocorrido
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackCardTokenizationError(formikValues, error, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_CARD_TOKENIZATION_ERROR,
            conversion_value: 0,
            is_first_card: true,
            checkout_step: 'step2',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_CARD_TOKENIZATION_ERROR, trackingData);
    }

    /**
     * Rastreia início do processo de checkout
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     */
    trackCheckoutStarted(formikValues, coupom = {}) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom);

        this._identifyUser(userData);
        this._trackCheckoutStartedInternal(userData, checkoutData);
    }

    /**
     * Método interno para rastrear início do checkout
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     */
    _trackCheckoutStartedInternal(userData, checkoutData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_STARTED,
            conversion_value: 0,
            checkout_step: 'step1',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_STARTED, trackingData);
    }

    /**
     * Rastreia avanço para o step 2 do checkout
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     */
    trackCheckoutStep2Advanced(formikValues, coupom = {}) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom);

        this._identifyUser(userData);
        this._checkoutStep2Advanced(userData, checkoutData);
    }

    /**
     * Método interno para rastrear avanço para step 2
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     */
    _checkoutStep2Advanced(userData, checkoutData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_STEP_2_ADVANCED,
            conversion_value: 0,
            checkout_step: 'step1',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_STEP_2_ADVANCED, trackingData);
    }

    /**
     * Rastreia avanço para o step 2 do checkout com falha
     * Falhas genéricas (hubspot, dentre outros)
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     */
    trackCheckoutStep2AdvancedFailed(formikValues, coupom = null, error) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = coupom ? this._buildCheckoutData(formikValues, coupom) : null;

        this._identifyUser(userData);
        this._checkoutStep2AdvancedFailed(userData, checkoutData, error);
    }

    /**
     * Método interno para rastrear avanço para step 2 com falha
     * Falhas genéricas (hubspot, dentre outros)
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     */
    _checkoutStep2AdvancedFailed(userData, checkoutData = null, error) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            ...(checkoutData && {
                plan_id: checkoutData.plan_id,
                plan_name: checkoutData.plan_name,
                plan_amount: checkoutData.plan_amount,
                plan_type: checkoutData.plan_type,
                coupon_code: checkoutData.coupon_code,
                has_compra_garantida: checkoutData.has_compra_garantida,
            }),

            // Informações do erro
            error_message: error ? .message || 'Unknown error',
            error_code: error ? .code || 'UNKNOWN_ERROR',
            error_type: error ? .type || 'tokenization_error',

            ...(error ? .type === 'validation_error' && {
                validation_errors: error ? .validation_errors,
                failed_field: error ? .failed_field,
                validation_failed: true,
            }),

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_STEP_2_ADVANCED_FAILED,
            conversion_value: 0,
            checkout_step: 'step1',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_STEP_2_ADVANCED_FAILED, trackingData);
    }

    /**
     * Rastreia tentativa de cadastro com cartão
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackCheckoutSignUpAttempt(formikValues, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

        this._identifyUser(userData);
        this._checkoutSignUpAttempt(userData, checkoutData, cardData);
    }

    /**
     * Método interno para rastrear tentativa de cadastro
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {Object} cardData - Dados do cartão
     */
    _checkoutSignUpAttempt(userData, checkoutData = {}, cardData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Informações do cartão
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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_SIGN_UP_ATTEMPT,
            conversion_value: 0,
            checkout_step: 'step2',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_SIGN_UP_ATTEMPT, trackingData);
    }

    /**
     * Rastreia erro de pagamento com failedReason
     * @param {Object} formikValues - Valores do formik
     * @param {Object} failedReason - Dados do erro de pagamento
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackPaymentFailed(formikValues, failedReason, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const cardData = this._buildCardData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

        this._paymentFailed(userData, checkoutData, failedReason, cardData);
    }

    /**
     * Método interno para rastrear erro de pagamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {Object} failedReason - Dados do erro de pagamento
     * @param {Object} cardData - Dados do cartão (opcional)
     */
    _paymentFailed(userData, checkoutData, failedReason, cardData = {}) {
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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_PAYMENT_FAILED,
            conversion_value: 0,
            is_first_card: true,
            checkout_step: 'step2',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_PAYMENT_FAILED, trackingData);
    }

    /**
     * Rastreia clique no botão "Pagar com Pix"
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackPixPaymentClicked(formikValues, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

        this._identifyUser(userData);
        this._pixPaymentClicked(userData, checkoutData);
    }

    /**
     * Método interno para rastrear clique em "Pagar com Pix"
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     */
    _pixPaymentClicked(userData, checkoutData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: '',
            transaction_status: '',

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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_PIX_PAYMENT_CLICKED,
            conversion_value: 0,
            checkout_step: 'step2',
            action: 'pix_payment_clicked',
            payment_method: 'pix',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_PIX_PAYMENT_CLICKED, trackingData);
    }

    /**
     * Rastreia falha na geração do pagamento Pix
     * @param {Object} formikValues - Valores do formik
     * @param {Object} error - Erro ocorrido
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackPixPaymentFailed(formikValues, error, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

        this._identifyUser(userData);
        this._pixPaymentFailed(userData, checkoutData, error);
    }

    /**
     * Método interno para rastrear falha na geração do Pix
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {Object} error - Erro ocorrido
     */
    _pixPaymentFailed(userData, checkoutData = {}, error = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: error ? .transaction_id || error ? .response ? .data ? .transaction_id || '',
            transaction_status: error ? .transaction_status || error ? .response ? .data ? .status || 'failed',

            // Informações do checkout
            plan_id: checkoutData.plan_id,
            plan_name: checkoutData.plan_name,
            plan_amount: checkoutData.plan_amount,
            plan_type: checkoutData.plan_type,
            coupon_code: checkoutData.coupon_code,
            coupon_valid: checkoutData.coupon_valid,
            trial_days: checkoutData.trial_days,
            has_compra_garantida: checkoutData.has_compra_garantida,

            // Informações do erro
            error_message: error ? .error_message || error ? .message || 'Unknown error',
            error_code: error ? .error_code || error ? .response ? .status || 'UNKNOWN_ERROR',
            error_type: error ? .error_type || 'pix_payment_failed',
            error_details: error ? .error_details || error ? .response ? .data ? .message || null,

            // Metadados da operação
            context: 'checkout',
            timestamp: new Date().toISOString(),
            provider: 'pagarme_v5',
            status: 'error',
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_PIX_PAYMENT_FAILED,
            conversion_value: 0,
            checkout_step: 'step2',
            action: 'pix_payment_failed',
            payment_method: 'pix',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_PIX_PAYMENT_FAILED, trackingData);
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
            userData ? .document ||
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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_PIX_PAYMENT_PAID,
            conversion_value: 1,
            checkout_step: origin === 'logged-area' ? undefined : 'step2',
            action: 'pix_payment_paid',
            origin: origin,
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_PIX_PAYMENT_PAID, trackingData);
    }

    /**
     * Rastreia clique no botão "Tentar novamente"
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackTryAgainClicked(formikValues, coupom = {}, defaultTrialDays = 7) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

        this._identifyUser(userData);
        this._tryAgainClicked(userData, checkoutData);
    }

    /**
     * Método interno para rastrear clique em "Tentar novamente"
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     */
    _tryAgainClicked(userData, checkoutData = {}) {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: '',
            transaction_status: '',

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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_TRY_AGAIN_CLICKED,
            conversion_value: 0,
            checkout_step: 'step2',
            action: 'try_again_clicked',
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_TRY_AGAIN_CLICKED, trackingData);
    }

    /**
     * Rastreia clique no botão "Acessar a plataforma"
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     * @param {Object} defaultTrialDays - Dias de trial padrão
     */
    trackAccessPlatformClicked(formikValues, coupom = {}, defaultTrialDays = 7, origin) {
        const userData = this._buildUserData(formikValues);
        const checkoutData = this._buildCheckoutData(formikValues, coupom, defaultTrialDays);

        this._identifyUser(userData);
        this._accessPlatformClicked(userData, checkoutData, origin);
    }

    /**
     * Método interno para rastrear clique em "Acessar a plataforma"
     * @param {Object} userData - Dados do usuário
     * @param {Object} checkoutData - Dados do checkout
     * @param {string} origin - Origem do clique
     */
    _accessPlatformClicked(userData, checkoutData = {}, origin = 'failed-modal-checkout') {
        const trackingData = {
            // Informações do cliente
            user_id: userData.id || 'anonymous',
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,
            customer_document_number: userData.document || '',
            customer_name: userData.name || '',
            customer_email: userData.email || '',

            // Informações da transação
            transaction_id: '',
            transaction_status: '',

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
            event_type: CheckoutTrackingService.EVENT_CHECKOUT_ACCESS_PLATFORM_CLICKED,
            conversion_value: 1,
            checkout_step: 'step2',
            action: 'access_platform_clicked',
            status: 'success',
            origin: origin,
        };

        this._trackEvent(CheckoutTrackingService.EVENT_CHECKOUT_ACCESS_PLATFORM_CLICKED, trackingData);
    }

}

// Exportar instância singleton
export default new CheckoutTrackingService();