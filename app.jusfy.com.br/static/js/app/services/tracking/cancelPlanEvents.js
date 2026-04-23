import cleanObject from "../../utils/clean-objects";
import BaseTrackingService from "./BaseTrackingService";
import {
    handleAxiosErrorMessage
} from "./customErrors/apiErrors";

class CancelPlanTrackingService extends BaseTrackingService {
    static EVENT_PLATFORM_PLAN_CANCEL = "platform_plan_cancel";
    static EVENT_PLATFORM_PLAN_CANCEL_GIVE_UP_CANCEL_CLICK =
        "platform_plan_cancel_dismissed";
    static EVENT_PLAN_CANCEL_CONFIRM = "platform_plan_cancel_confirmed";
    static EVENT_PLATFORM_PLAN_CANCEL_SUCCESS = "platform_plan_cancel_success";
    static EVENT_PLATFORM_PLAN_CANCEL_ERROR = "platform_plan_cancel_error";

    constructor() {
        super("CancelPlanTrackingService");
    }

    _buildBasicData(userData, currentPlan) {
        return {
            // Informações do cliente
            user_id: userData.id,
            user_email: userData.email,
            user_name: userData.name,
            client_id: userData.client_id,

            // Plano atual
            current_plan_id: currentPlan ? .plan_details ? .id,
            current_plan_name: currentPlan ? .plan_details ? .name,
            current_plan_amount: currentPlan ? .plan_details ? .amount,
            current_plan_type: currentPlan ? .plan_details ? .plan_type,
        };
    }

    /**
     * Método interno para rastrear início do cancelamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     */
    cancelPlanClick(userData, currentPlan, step) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            // Metadados da operação
            provider: currentPlan ? .info ? .provider || "unknown",
            context: "cancel",
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PLATFORM_PLAN_CANCEL,
            conversion_value: 0,
            cancel_step: step || "initiated",
        };

        this._trackEvent(this.constructor.EVENT_PLATFORM_PLAN_CANCEL, trackingData);
    }

    /**
     * Método interno para rastrear início do cancelamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     */
    cancelPlanConfirmClick(userData, currentPlan, step, values = {}) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            // Metadados da operação
            provider: currentPlan ? .info ? .provider || "unknown",
            context: "cancel",
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PLAN_CANCEL_CONFIRM,
            conversion_value: 0,
            cancel_step: step || "initiated",
            ...values
        };

        this._trackEvent(this.constructor.EVENT_PLAN_CANCEL_CONFIRM, trackingData);
    }

    /**
     * Método interno para rastrear confirmação de cancelamento
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     */
    planCancelGiveUp(userData, currentPlan, reason) {
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            provider: currentPlan ? .info ? .provider || "unknown",
            /**
             * question
             * reason_description
             * suggestion
             * tools
             */
            ...reason,
            context: "cancel",
            timestamp: new Date().toISOString(),
            event_type: this.constructor
                .EVENT_PLATFORM_PLAN_CANCEL_GIVE_UP_CANCEL_CLICK,
            conversion_value: 0,
            cancel_step: "cancel_dismissed",
        };

        this._trackEvent(
            this.constructor.EVENT_PLATFORM_PLAN_CANCEL_GIVE_UP_CANCEL_CLICK,
            trackingData
        );
    }

    /**
     * Método interno para rastrear sucesso no cancelamento do plano
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     */
    platformPlanCancelSuccess(userData, currentPlan, reasons) {
        const reasonCleanData = cleanObject(reasons) || {};
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            ...reasonCleanData,
            provider: currentPlan ? .info ? .provider || "unknown",
            context: "cancel",
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PLATFORM_PLAN_CANCEL_SUCCESS,
            conversion_value: 0,
            cancel_step: "success",
        };

        this._trackEvent(
            this.constructor.EVENT_PLATFORM_PLAN_CANCEL_SUCCESS,
            trackingData
        );
    }

    /**
     * Método interno para rastrear erro no cancelamento do plano
     * @param {Object} userData - Dados do usuário
     * @param {Object} currentPlan - Plano atual
     * @param {String} error - Mensagem de erro
     */
    platformPlanCancelError(userData, currentPlan, error, reasons) {
        const reasonCleanData = cleanObject(reasons) || {};
        const {
            message = null,
                status = null,
                data = null,
        } = handleAxiosErrorMessage(error) || {};
        const trackingData = {
            ...this._buildBasicData(userData, currentPlan),
            ...reasonCleanData,
            provider: currentPlan ? .info ? .provider || "unknown",
            context: "cancel",
            timestamp: new Date().toISOString(),
            event_type: this.constructor.EVENT_PLATFORM_PLAN_CANCEL_ERROR,
            conversion_value: 0,
            cancel_step: "error",
            error_message: message,
            error_data: data,
            error_status: status
        };

        this._trackEvent(
            this.constructor.EVENT_PLATFORM_PLAN_CANCEL_ERROR,
            trackingData
        );
    }
}

export default new CancelPlanTrackingService(); //