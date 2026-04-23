import BaseTrackingService from "./BaseTrackingService";

class UserProfileTrackingService extends BaseTrackingService {
    static EVENT_USER_INFO_UPDATE_MODAL_VIEWED = 'user_info_update_modal_viewed';
    static EVENT_USER_INFO_UPDATE_STARTED = 'user_info_update_started';
    static EVENT_USER_INFO_UPDATE_SUBMITTED = 'user_info_update_submitted';
    static EVENT_USER_INFO_UPDATE_SUCCEEDED = 'user_info_update_succeeded';
    static EVENT_USER_INFO_UPDATE_FAILED = 'user_info_update_failed';

    constructor() {
        super('UserProfileTrackingService');
    }

    /**
     * Rastreia quando o modal de atualização de informações é visualizado
     * @param {Object} userData - Dados do usuário
     * @param {Array} missingFields - Campos que estão faltando
     */
    trackModalViewed(userData = {}, missingFields = []) {
        this._identifyUser(userData);
        this._modalViewed(userData, missingFields);
    }

    /**
     * Método interno para rastrear visualização do modal
     * @param {Object} userData - Dados do usuário
     * @param {Array} missingFields - Campos que estão faltando
     */
    _modalViewed(userData, missingFields = []) {
        const trackingData = {
            client_id: userData ? .client_id || 'anonymous',
            missing_fields: missingFields,
            step: 'modal_initial',
            timestamp: new Date().toISOString(),
            event_type: UserProfileTrackingService.EVENT_USER_INFO_UPDATE_MODAL_VIEWED,
            context: 'user_profile_modal',
        };

        this._trackEvent(UserProfileTrackingService.EVENT_USER_INFO_UPDATE_MODAL_VIEWED, trackingData);
    }

    /**
     * Rastreia quando o formulário de atualização é iniciado
     * @param {Object} userData - Dados do usuário
     * @param {Array} formFieldsRequired - Campos obrigatórios do formulário
     */
    trackUpdateStarted(userData = {}, formFieldsRequired = []) {
        this._identifyUser(userData);
        this._updateStarted(userData, formFieldsRequired);
    }

    /**
     * Método interno para rastrear início da atualização
     * @param {Object} userData - Dados do usuário
     * @param {Array} formFieldsRequired - Campos obrigatórios do formulário
     */
    _updateStarted(userData, formFieldsRequired = []) {
        const trackingData = {
            client_id: userData ? .client_id || 'anonymous',
            form_fields_required: formFieldsRequired,
            step: 'form_opened',
            timestamp: new Date().toISOString(),
            event_type: UserProfileTrackingService.EVENT_USER_INFO_UPDATE_STARTED,
            context: 'user_profile_form',
        };

        this._trackEvent(UserProfileTrackingService.EVENT_USER_INFO_UPDATE_STARTED, trackingData);
    }

    /**
     * Rastreia quando o formulário é submetido
     * @param {Object} userData - Dados do usuário
     * @param {Array} formFieldsFilled - Campos preenchidos no formulário
     * @param {Array} formFieldsMissing - Campos que ainda estão faltando
     */
    trackUpdateSubmitted(userData = {}, formFieldsFilled = [], formFieldsMissing = []) {
        this._identifyUser(userData);
        this._updateSubmitted(userData, formFieldsFilled, formFieldsMissing);
    }

    /**
     * Método interno para rastrear submissão do formulário
     * @param {Object} userData - Dados do usuário
     * @param {Array} formFieldsFilled - Campos preenchidos no formulário
     * @param {Array} formFieldsMissing - Campos que ainda estão faltando
     */
    _updateSubmitted(userData, formFieldsFilled = [], formFieldsMissing = []) {
        const trackingData = {
            client_id: userData ? .client_id || 'anonymous',
            form_fields_filled: formFieldsFilled,
            form_fields_missing: formFieldsMissing,
            step: 'form_submission',
            timestamp: new Date().toISOString(),
            event_type: UserProfileTrackingService.EVENT_USER_INFO_UPDATE_SUBMITTED,
            context: 'user_profile_form',
        };

        this._trackEvent(UserProfileTrackingService.EVENT_USER_INFO_UPDATE_SUBMITTED, trackingData);
    }

    /**
     * Rastreia sucesso na atualização das informações
     * @param {Object} userData - Dados do usuário
     * @param {Array} updateFields - Campos que foram atualizados
     */
    trackUpdateSucceeded(userData = {}, updateFields = []) {
        this._identifyUser(userData);
        this._updateSucceeded(userData, updateFields);
    }

    /**
     * Método interno para rastrear sucesso na atualização
     * @param {Object} userData - Dados do usuário
     * @param {Array} updateFields - Campos que foram atualizados
     */
    _updateSucceeded(userData, updateFields = []) {
        const trackingData = {
            client_id: userData ? .client_id || 'anonymous',
            update_fields: updateFields,
            step: 'update_success',
            timestamp: new Date().toISOString(),
            event_type: UserProfileTrackingService.EVENT_USER_INFO_UPDATE_SUCCEEDED,
            context: 'user_profile_update',
            status: 'success',
        };

        this._trackEvent(UserProfileTrackingService.EVENT_USER_INFO_UPDATE_SUCCEEDED, trackingData);
    }

    /**
     * Rastreia falha na atualização das informações
     * @param {Object} userData - Dados do usuário
     * @param {string} errorType - Tipo do erro
     * @param {string} message - Mensagem do erro
     */
    trackUpdateFailed(userData = {}, errorType, message) {
        this._updateFailed(userData, errorType, message);
    }

    /**
     * Método interno para rastrear falha na atualização
     * @param {Object} userData - Dados do usuário
     * @param {string} errorType - Tipo do erro
     * @param {string} message - Mensagem do erro
     */
    _updateFailed(userData, errorType, message) {
        if (!this.isInitialized) {
            console.warn('UserProfileTrackingService not initialized');
            return;
        }

        try {
            const trackingData = {
                client_id: userData ? .client_id || 'anonymous',
                error_type: errorType,
                message: message,
                step: 'update_error',
                timestamp: new Date().toISOString(),
                event_type: UserProfileTrackingService.EVENT_USER_INFO_UPDATE_FAILED,
                context: 'user_profile_update',
                status: 'error',
            };

            window.analytics.track(UserProfileTrackingService.EVENT_USER_INFO_UPDATE_FAILED, trackingData);
            console.log(`${UserProfileTrackingService.EVENT_USER_INFO_UPDATE_FAILED} tracked`);
        } catch (trackingError) {
            console.error(`Error tracking ${UserProfileTrackingService.EVENT_USER_INFO_UPDATE_FAILED}:`, trackingError);
        }
    }

    /**
     * Rastreia evento de identificação do usuário para Segment
     * @param {Object} userData - Dados do usuário
     */
    _identifyUser(userData) {
        if (!this.isInitialized) {
            console.warn('UserProfileTrackingService not initialized');
            return;
        }

        try {
            const identifyData = {
                client_id: userData ? .client_id,
                traits: {
                    email: userData ? .email,
                    name: userData ? .name,
                    client_id: userData ? .client_id,
                },
            };

            window.analytics.identify(identifyData.client_id, identifyData.traits);
        } catch (error) {
            console.error('Error identifying user in UserProfileTrackingService:', error);
        }
    }
}

const userProfileTrackingService = new UserProfileTrackingService();
export default userProfileTrackingService;