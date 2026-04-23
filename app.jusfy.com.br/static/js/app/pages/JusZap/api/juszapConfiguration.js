import axios from "axios";

const baseAPI = process.env.REACT_APP_JUSZAP_API_URL;

/**
 * Serviço para gerenciar JusZapConfiguration
 */

/**
 * Busca informações do JusZapConfiguration atual
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com os dados do JusZapConfiguration ou null se não existir
 */
export const getJusZapConfiguration = async (authToken) => {
    try {
        const response = await axios.get(`${baseAPI}/juszap-configuration`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // Se retornar 404, significa que o usuário não tem JusZapConfiguration ainda
        if (error.response ? .status === 404) {
            return null;
        }
        throw error;
    }
};

/**
 * Verifica a disponibilidade do JusZap
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com o status de disponibilidade
 */
export const checkJusZapAvailability = async (authToken) => {
    try {
        const response = await axios.get(`${baseAPI}/juszap-configuration/availability`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao verificar disponibilidade do JusZap:', error);
        throw error;
    }
};

/**
 * Realiza o checkout do JusZap
 * @param {string} authToken} - Token de autenticação do usuário
 * @param {Object} checkoutData - Dados do checkout
 * @returns {Promise} Response com os dados do checkout
 */
export const juszapCheckout = async (authToken, checkoutData) => {
    const response = await axios.post(`${baseAPI}/juszap-checkout`, checkoutData, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Verifica o status do checkout do usuário (validade da assinatura)
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise<Object>} Response com status do checkout
 * @returns {boolean} data.valid - Se o checkout está válido
 * @returns {boolean} data.expired - Se o checkout expirou
 * @returns {boolean} data.cancelled - Se foi cancelado
 * @returns {string} data.expires_at - Data de expiração
 */
export const checkJusZapCheckoutStatus = async (authToken) => {
    try {
        const response = await axios.get(`${baseAPI}/juszap-checkout/status`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // Se retornar 404, significa que o usuário não tem checkout
        if (error.response ? .status === 404) {
            return {
                valid: false,
                expired: false,
                cancelled: false,
                has_checkout: false
            };
        }
        throw error;
    }
};

/**
 * Cria um novo JusZapConfiguration
 * @param {string} authToken - Token de autenticação do usuário
 * @param {Object} userData - Dados do usuário
 * @param {string} userData.status - Status inicial (WAITING_FOR_SETTINGS, COMPLETED, etc.)
 * @param {Object} userData.settings - Configurações do usuário
 * @returns {Promise} Response com os dados do JusZapConfiguration criado
 */
export const createJusZapConfiguration = async (authToken, userData) => {
    const response = await axios.post(`${baseAPI}/juszap-configuration`, userData, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Atualiza um JusZapConfiguration existente
 * @param {string} authToken - Token de autenticação do usuário
 * @param {Object} updateData - Dados para atualizar
 * @param {string} updateData.status - Novo status (WAITING_FOR_SETTINGS, COMPLETED, etc.)
 * @param {Object} updateData.settings - Novas configurações
 * @returns {Promise} Response com os dados do JusZapConfiguration atualizado
 */
export const updateJusZapConfiguration = async (authToken, updateData) => {
    const response = await axios.put(`${baseAPI}/juszap-configuration`, updateData, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Deleta um JusZapConfiguration
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response da operação
 */
export const deleteJusZapConfiguration = async (authToken) => {
    const response = await axios.delete(`${baseAPI}/juszap-configuration`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Verifica o status do JusZapConfiguration e retorna as informações básicas
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise<Object|null>} Objeto com informações do usuário ou null se não existe
 */
export const checkJusZapConfigurationFlow = async (authToken) => {
    try {
        const {
            data: jusZapConfiguration
        } = await getJusZapConfiguration(authToken);

        if (!jusZapConfiguration) {
            return null; // Usuário não tem JusZapConfiguration, deve ir para configuração
        }

        // Retorna apenas os dados do usuário, sem flags de fluxo
        // A lógica de fluxo fica no useJusZapFlow
        return jusZapConfiguration;
    } catch (error) {
        console.error('Erro ao verificar fluxo do JusZapConfiguration:', error);
        throw error;
    }
};

// ==================== CONEXÃO WHATSAPP ====================

/**
 * Inicia o processo de conexão do WhatsApp e retorna QR code
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com QR code e dados de conexão
 */
export const connectWhatsApp = async (authToken) => {
    const response = await axios.post(`${baseAPI}/juszap-configuration/whatsapp/connect`, {}, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Verifica o status da conexão do WhatsApp
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com status da conexão
 */
export const getWhatsAppStatus = async (authToken) => {
    const response = await axios.get(`${baseAPI}/juszap-configuration/whatsapp/status`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Desconecta o WhatsApp
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response da operação
 */
export const disconnectWhatsApp = async (authToken) => {
    const response = await axios.post(`${baseAPI}/juszap-configuration/disconnect-whatsapp`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Status possíveis da conexão WhatsApp
 */
export const WHATSAPP_CONNECTION_STATUS = {
    DISCONNECTED: 'DISCONNECTED', // Desconectado
    CONNECTING: 'CONNECTING', // Conectando (QR code gerado)
    CONNECTED: 'CONNECTED', // Conectado com sucesso
    FAILED: 'FAILED', // Falha na conexão
    EXPIRED: 'EXPIRED' // QR code expirado
};

/**
 * Status possíveis do JusZapConfiguration
 */
export const JUSZAP_USER_STATUS = {
    WAITING_FOR_SETTINGS: 'WAITING_FOR_SETTINGS', // Aguardando configurações (vai para QR code)
    COMPLETED: 'COMPLETED', // Configuração completa (vai direto para chat)
    PENDING_MEETING: 'PENDING_MEETING', // Aguardando reunião
    MEETING_SCHEDULED: 'MEETING_SCHEDULED', // Reunião agendada
    MEETING_COMPLETED: 'MEETING_COMPLETED', // Reunião completada
    UPDATE_REQUIRED: 'UPDATE_REQUIRED' // Nova versão disponível - precisa atualizar instância
};

// ==================== CONFIGURAÇÕES DO ROBÔ ====================

/**
 * Busca as configurações do robô (horários, respostas automáticas, etc)
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com as configurações do robô
 */
export const getRobotSettings = async (authToken) => {
    try {
        const response = await axios.get(`${baseAPI}/juszap-configuration/robot-settings`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        // Se retornar 404, significa que não tem configurações ainda (usar defaults)
        if (error.response ? .status === 404) {
            return null;
        }
        throw error;
    }
};

/**
 * Atualiza as configurações do robô
 * @param {string} authToken - Token de autenticação do usuário
 * @param {Object} settings - Configurações do robô
 * @param {boolean} settings.robot_enabled - Se o robô está habilitado
 * @param {Object} settings.schedule - Horários de atendimento por dia da semana
 * @param {Object} settings.contact_responses - Configurações de resposta de contatos
 * @returns {Promise} Response com as configurações atualizadas
 */
export const updateRobotSettings = async (authToken, settings) => {
    const response = await axios.put(`${baseAPI}/juszap-configuration/robot-settings`, settings, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

// ==================== CUSTOM PROMPT E NOME ====================

/**
 * Atualiza o nome do escritório/robô
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string} name - Novo nome do escritório
 * @returns {Promise} Response com os dados atualizados
 */
export const updateName = async (authToken, name) => {
    const response = await axios.put(`${baseAPI}/juszap-configuration/name`, {
        name: name
    }, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

// ==================== UPGRADE DE INSTÂNCIA ====================

/**
 * Atualiza a versão da instância Evolution API (recria a instância com nova versão)
 * Este processo pode demorar até 10 segundos
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com os dados da instância atualizada
 */
export const upgradeEvolutionInstance = async (authToken) => {
    const response = await axios.post(`${baseAPI}/juszap-configuration/upgrade-instance`, {}, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Recria a instância Evolution API (quando has_active_configuration é false)
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com os dados da instância recriada
 */
export const recreateEvolutionInstance = async (authToken) => {
    const response = await axios.post(`${baseAPI}/juszap-configuration/recreate-evolution-instance`, {}, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};