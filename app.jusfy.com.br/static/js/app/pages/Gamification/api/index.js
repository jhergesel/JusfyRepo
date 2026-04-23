import axios from "axios";

const baseAPI = process.env.REACT_APP_GAMIFICATION_API_URL;

/**
 * Busca informações do usuário autenticado (XP, nível, avatar)
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com os dados do usuário
 */
export const getUserStats = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/user/me`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca todos os desafios disponíveis
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string} status - Filtro opcional por status do usuário: 'in_progress', 'finished', 'not_started'
 * @returns {Promise} Response com a lista de desafios
 */
export const getChallenges = async (authToken, status = null) => {
    const params = new URLSearchParams();

    if (status) {
        params.append('status', status);
    }

    const queryString = params.toString();
    const url = `${baseAPI}/api/challenges${queryString ? `?${queryString}` : ''}`;

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    // A API retorna { message, count, data }
    return response.data ? .data || response.data;
};

/**
 * Busca um desafio específico por ID
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string} id - ID do desafio
 * @returns {Promise} Response com os dados do desafio
 */
export const getChallengeById = async (authToken, id) => {
    const response = await axios.get(`${baseAPI}/api/challenges/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca todos os níveis ordenados por pontos
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com a lista de níveis
 */
export const getLevels = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/levels`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca um nível específico por ID
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string} id - ID do nível
 * @returns {Promise} Response com os dados do nível
 */
export const getLevelById = async (authToken, id) => {
    const response = await axios.get(`${baseAPI}/api/levels/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca o ranking dos top N usuários
 * @param {string} authToken - Token de autenticação do usuário
 * @param {number} limit - Número de usuários a retornar (1-100)
 * @param {object} filters - Filtros opcionais { city, state }
 * @returns {Promise} Response com o ranking
 */
export const getTopRanking = async (authToken, limit = 10, filters = {}) => {
    const params = new URLSearchParams();

    if (filters.city) {
        params.append('city', filters.city);
    }
    if (filters.state) {
        params.append('state', filters.state);
    }

    const queryString = params.toString();
    const url = `${baseAPI}/api/ranking/top/${limit}${queryString ? `?${queryString}` : ''}`;

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca o ranking parcial de um usuário específico (posições próximas)
 * Exemplo: se o usuário está na posição 14, retorna posições 12, 13, 14, 15, 16
 * Retorna: totalUsers, state, city, picture, level (id, name, start_points, end_points), partialRanking (position, picture, name, points)
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string|number} clientId - ID do cliente
 * @param {object} filters - Filtros opcionais { city, state }
 * @returns {Promise} Response com o ranking parcial do usuário
 */
export const getUserPartialRanking = async (authToken, clientId, filters = {}) => {
    const params = new URLSearchParams();

    if (filters.city) {
        params.append('city', filters.city);
    }
    if (filters.state) {
        params.append('state', filters.state);
    }

    const queryString = params.toString();
    const url = `${baseAPI}/api/ranking/${clientId}${queryString ? `?${queryString}` : ''}`;

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca a season/campaign ativa
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com dados da season ativa
 */
export const getActiveSeason = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/ranking/season/active`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca o ranking top N da season/temporada
 * @param {string} authToken - Token de autenticação do usuário
 * @param {number} limit - Número de usuários a retornar
 * @param {object} filters - Filtros opcionais { city, state, campaign_id }
 * @returns {Promise} Response com o ranking da season
 */
export const getSeasonTopRanking = async (authToken, limit = 10, filters = {}) => {
    const params = new URLSearchParams();

    if (filters.city) params.append('city', filters.city);
    if (filters.state) params.append('state', filters.state);
    if (filters.campaign_id) params.append('campaign_id', filters.campaign_id);

    const queryString = params.toString();
    const url = `${baseAPI}/api/ranking/season/top/${limit}${queryString ? `?${queryString}` : ''}`;

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca o ranking do usuário na season/temporada
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string|number} clientId - ID do cliente
 * @param {object} filters - Filtros opcionais { city, state, campaign_id }
 * @returns {Promise} Response com o ranking do usuário na season
 */
export const getSeasonUserRanking = async (authToken, clientId, filters = {}) => {
    const params = new URLSearchParams();

    if (filters.city) params.append('city', filters.city);
    if (filters.state) params.append('state', filters.state);
    if (filters.campaign_id) params.append('campaign_id', filters.campaign_id);

    const queryString = params.toString();
    const url = `${baseAPI}/api/ranking/season/${clientId}${queryString ? `?${queryString}` : ''}`;

    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca os benefícios ativos do usuário autenticado
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com benefícios, valid_until, grants_this_cycle
 */
export const getUserBenefits = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/user/benefits`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca todos os benefícios agrupados por nível (1 a 6)
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com benefícios por nível
 */
export const getAllBenefits = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/benefits`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca o histórico de pontos do usuário (atividades agrupadas por temporada)
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Response com as temporadas e atividades
 */
export const getPointsHistory = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/user/points-history`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca a lista de temporadas (sem atividades) para exibição leve
 * @param {string} authToken - Token de autenticação do usuário
 * @returns {Promise} Lista de temporadas com id, name, dates, total_points
 */
export const getSeasons = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/user/points-history/seasons`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};

/**
 * Busca as atividades de uma temporada específica
 * @param {string} authToken - Token de autenticação do usuário
 * @param {string} seasonId - ID da temporada
 * @returns {Promise} Atividades da temporada
 */
export const getSeasonActivities = async (authToken, seasonId) => {
    const response = await axios.get(`${baseAPI}/api/user/points-history/seasons/${seasonId}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
};