import axios from "axios";

const baseAPI = process.env.REACT_APP_JUSGPT_API;

export const uploadFile = async (files, accessToken) => {
    const formData = new FormData();

    // Se for um único arquivo, converte para array
    const fileArray = Array.isArray(files) ? files : [files];

    // Adiciona cada arquivo individualmente ao FormData
    fileArray.forEach(file => {
        formData.append('files', file);
    });

    const response = await axios.post(`${baseAPI}/api/upload-file`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': accessToken
        }
    });

    return response.data;
};

export const getChats = async (accessToken, {
    limit = 10,
    offset = 0,
    ...rest
} = {}) => {
    const response = await axios.get(`${baseAPI}/api/chats`, {
        headers: {
            'Authorization': accessToken
        },
        params: {
            limit,
            offset,
            ...rest
        }
    });

    return response.data;
}

export const getChatMessages = async (accessToken, chatId) => {
    const response = await axios.get(`${baseAPI}/api/chats/${chatId}/messages`, {
        headers: {
            'Authorization': accessToken
        }
    });

    return response.data;
}

export const searchChats = async (accessToken, query) => {
    const response = await axios.get(`${baseAPI}/api/chats/search`, {
        headers: {
            'Authorization': accessToken
        },
        params: {
            q: query
        }
    });

    return response.data;
}

export const getTags = async (accessToken) => {
    const response = await axios.get(`${baseAPI}/api/tags`, {
        headers: {
            'Authorization': accessToken
        }
    });

    return response.data;
}

export const getUserBusinessConfig = async (token, companyId = undefined) => {
    const response = await axios.get(`${baseAPI}/api/b2b/companies/details/${companyId ?? ''}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const getBusinessBannerVisibility = async (token) => {
    const response = await axios.get(`${baseAPI}/api/b2b/banner/visibility`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const getCompanyTemplate = async (companyId, accessToken) => {
    const response = await axios.get(`${baseAPI}/api/b2b/templates/company/${companyId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
};

export const updateCompany = async (companyId, formData, accessToken) => {
    const response = await axios.put(`${baseAPI}/api/b2b/companies/${companyId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
};

export const updateCompanyTemplate = async (companyId, formData, accessToken) => {
    const response = await axios.put(`${baseAPI}/api/b2b/templates/company/${companyId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data;
};

export const registerBusinessInterest = async (authToken) => {
    const response = await axios.post(`${baseAPI}/api/b2b/interest`, {}, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return response.data;
};

export const getBusinessInterest = async (authToken) => {
    const response = await axios.get(`${baseAPI}/api/b2b/interest`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return response.data;
};

export const getB2BTools = async (token) => {
    const response = await axios.get(`${baseAPI}/api/b2b/tools`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const getB2BReports = async (token) => {
    const response = await axios.get(`${baseAPI}/api/b2b/companies/stats`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};