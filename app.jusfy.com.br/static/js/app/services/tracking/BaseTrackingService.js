class BaseTrackingService {
    constructor(serviceName) {
        this.serviceName = serviceName;
        this.isInitialized = false;
        this._initializeService();
    }

    _initializeService() {
        if (typeof window !== "undefined" && window.analytics) {
            this.isInitialized = true;
            console.log(`${this.serviceName} initialized`);
        } else {
            console.warn(
                `Segment analytics not available for ${this.serviceName}`
            );
        }
    }

    /**
     * Rastreia evento de identificação do usuário para Segment
     * @param {Object} userData - Dados do usuário
     */
    _identifyUser(userData) {
        if (!this.isInitialized) {
            console.warn(`${this.serviceName} not initialized`);
            return;
        }

        try {
            if (userData.email) {
                window.analytics.identify(userData.id, {
                    email: userData.email,
                    name: userData.name,
                    user_id: userData.id,
                    client_id: userData.client_id,
                    created_at: userData.created_at,
                    subscription_status: userData.subscription_status,
                    current_plan: userData.current_plan,
                    provider: userData.provider || 'unknown',
                    source: this.serviceName.toLowerCase().replace('trackingservice', '')
                });
            }
        } catch (error) {
            console.error(`Error identifying user in ${this.serviceName}:`, error);
        }
    }

    /**
     * Método auxiliar para fazer tracking de eventos
     * @param {string} event - Nome do evento
     * @param {Object} trackingData - Dados do evento
     */
    _trackEvent(event, trackingData) {
        if (!this.isInitialized) {
            console.warn(`${this.serviceName} not initialized`);
            return;
        }

        try {
            window.analytics.track(event, trackingData);
            console.log(`${event} tracked`);
        } catch (error) {
            console.error(`Error tracking ${event}:`, error);
        }
    }

    /**
     * Método auxiliar para construir dados básicos do usuário
     * @param {Object} formikValues - Valores do formik
     * @returns {Object} Dados do usuário formatados
     */
    _buildUserData(formikValues) {
        return {
            id: formikValues.createdCustomerId || 'anonymous',
            email: formikValues.email,
            name: formikValues.name,
            document: formikValues.document_number,
            client_id: formikValues.createdCustomerId,
            created_at: new Date().toISOString(),
            subscription_status: 'pending',
            current_plan: formikValues.plan ? .name || null,
            provider: 'jusfy'
        };
    }

    /**
     * Método auxiliar para construir dados de checkout
     * @param {Object} formikValues - Valores do formik
     * @param {Object} coupom - Dados do cupom
     * @param {number} defaultTrialDays - Dias de trial padrão
     * @returns {Object} Dados de checkout formatados
     */
    _buildCheckoutData(formikValues, coupom = {}, defaultTrialDays = 7) {
        return {
            plan_id: formikValues.plan ? .id,
            plan_name: formikValues.plan ? .name,
            plan_amount: formikValues.plan ? .amount,
            plan_type: formikValues.plan ? .type,
            coupon_code: coupom ? .code || formikValues.coupom,
            has_compra_garantida: formikValues.has_compra_garantida || false,
            trial_days: defaultTrialDays
        };
    }

    /**
     * Método auxiliar para construir dados do cartão
     * @param {Object} formikValues - Valores do formik
     * @returns {Object} Dados do cartão formatados
     */
    _buildCardData(formikValues) {
        return {
            id: formikValues.id,
            card_hash: formikValues.hash ? ? formikValues.card_hash,
            cardholder_name: formikValues.cardholder_name,
            card_number: formikValues.card_number,
            card_number_length: formikValues.card_number ? .length || 0,
            card_expiration: formikValues.card_expiration,
            card_cvv_length: formikValues.card_cvv ? .length || 0,
            card_payment_method: formikValues.card_payment_method
        };
    }

    /**
     * Mascara o número do cartão para segurança
     * @param {string} cardNumber - Número do cartão
     * @returns {string} - Número mascarado
     */
    _maskCardNumber(cardNumber) {
        if (!cardNumber) return 'unknown';
        const cleaned = cardNumber.replace(/\D/g, '');
        if (cleaned.length < 10) return '****';

        const firstSix = cleaned.slice(0, 6);
        const lastFour = cleaned.slice(-4);
        const middleMasked = '*'.repeat(cleaned.length - 10);

        return `${firstSix}${middleMasked}${lastFour}`;
    }

    /**
     * Identifica a bandeira do cartão
     * @param {string} cardNumber - Número do cartão
     * @returns {string} - Bandeira do cartão
     */
    _getCardBrand(cardNumber) {
        if (!cardNumber) return 'unknown';
        const cleaned = cardNumber.replace(/\D/g, '');
        // Detecção básica de bandeiras
        if (cleaned.startsWith('4')) return 'visa';
        if (cleaned.startsWith('5') || cleaned.startsWith('2')) return 'mastercard';
        if (cleaned.startsWith('3')) return 'amex';
        if (cleaned.startsWith('6')) return 'discover';

        return 'unknown';
    }
}

export default BaseTrackingService;