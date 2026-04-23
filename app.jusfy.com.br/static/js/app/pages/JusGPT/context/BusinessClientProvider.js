import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";
import {
    useSelector
} from "react-redux";
import {
    getUserBusinessConfig,
    getCompanyTemplate,
    getB2BTools
} from "../api";
// BUSINESS_CLIENTS estático mantido como referência, mas o match agora usa os dados direto da API
// import { findBusinessClientByUserId } from "../config/businessClients";


const initialContextValue = {
    businessClient: null,
    businessClientApiData: null,
    businessLogo: null,
    businessLogoSmall: null,
    isBusiness: false,
    isAsaas: false,
    loadingBusinessClient: false,
    loadingTemplate: false,
    loadingB2BTools: false,
    businessClientError: null,
    configCompleted: false,
    documentCompleted: false,
    b2bTools: [],
    refetchTemplate: () => {},
};

export const jusGPTBusinessContext = createContext(initialContextValue);

const JusGPTBusinessProvider = ({
    children
}) => {
    const {
        user,
        authToken
    } = useSelector((state) => state.auth);
    const [businessClientApiData, setBusinessClientApiData] = useState(null);
    const [loadingBusinessClient, setLoadingBusinessClient] = useState(Boolean(authToken && user ? .id));
    const [businessClientError, setBusinessClientError] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);
    const [templateApiData, setTemplateApiData] = useState(null);
    const [loadingTemplate, setLoadingTemplate] = useState(false);
    const [refreshTemplateKey, setRefreshTemplateKey] = useState(0);
    const [b2bTools, setB2BTools] = useState([]);
    const [loadingB2BTools, setLoadingB2BTools] = useState(false);

    const refetchBusiness = useCallback(() => setRefreshKey(k => k + 1), []);
    const refetchTemplate = useCallback(() => setRefreshTemplateKey(k => k + 1), []);

    useEffect(() => {
        let isCancelled = false;

        if (!authToken || !user ? .id) {
            setBusinessClientApiData(null);
            setBusinessClientError(null);
            setLoadingBusinessClient(false);
            return undefined;
        }

        setLoadingBusinessClient(true);
        setBusinessClientError(null);

        getUserBusinessConfig(authToken)
            .then((data) => {
                if (!isCancelled) {
                    setBusinessClientApiData(data || null);
                }
            })
            .catch((error) => {
                if (!isCancelled) {
                    setBusinessClientError(error);
                    setBusinessClientApiData(null);
                }
            })
            .finally(() => {
                if (!isCancelled) {
                    setLoadingBusinessClient(false);
                }
            });

        return () => {
            isCancelled = true;
        };
    }, [authToken, user ? .id, refreshKey]);

    /**
     * businessClient agora é o objeto `company` vindo diretamente da API.
     * O mapa estático BUSINESS_CLIENTS é mantido no arquivo de config como referência/fallback.
     */
    const businessClient = useMemo(
        () => businessClientApiData ? .company || null, [businessClientApiData]
    );

    useEffect(() => {
        let isCancelled = false;

        if (!businessClient ? .id || !authToken) {
            setTemplateApiData(null);
            setLoadingTemplate(false);
            return undefined;
        }

        setLoadingTemplate(true);
        getCompanyTemplate(businessClient.id, authToken)
            .then((data) => {
                if (!isCancelled) setTemplateApiData(data || null);
            })
            .catch(() => {
                if (!isCancelled) setTemplateApiData(null);
            })
            .finally(() => {
                if (!isCancelled) setLoadingTemplate(false);
            });

        return () => {
            isCancelled = true;
        };
    }, [businessClient ? .id, authToken, refreshTemplateKey]);

    useEffect(() => {
        let isCancelled = false;

        if (!businessClient ? .id || !authToken) {
            setB2BTools([]);
            setLoadingB2BTools(false);
            return undefined;
        }

        setLoadingB2BTools(true);
        getB2BTools(authToken)
            .then((data) => {
                if (!isCancelled) setB2BTools(Array.isArray(data) ? data : []);
            })
            .catch(() => {
                if (!isCancelled) setB2BTools([]);
            })
            .finally(() => {
                if (!isCancelled) setLoadingB2BTools(false);
            });

        return () => {
            isCancelled = true;
        };
    }, [businessClient ? .id, authToken]);

    const value = useMemo(() => {
        const resolvedLogo = businessClient ? .logo;
        const resolvedLogoSmall = businessClient ? .logo_small;
        return {
            businessClient,
            businessClientApiData,
            businessLogo: resolvedLogo || null,
            businessLogoSmall: resolvedLogoSmall || null,
            isBusiness: Boolean(businessClient),
            isAsaas: businessClient ? .sigla ? .toLowerCase() === 'asaas',
            loadingBusinessClient,
            loadingTemplate,
            loadingB2BTools,
            b2bTools,
            businessClientError,
            configCompleted: Boolean(businessClient),
            documentCompleted: Boolean(templateApiData ? .use_template),
            refetchBusiness,
            refetchTemplate,
        };
    }, [businessClient, businessClientApiData, loadingBusinessClient, loadingTemplate, loadingB2BTools, b2bTools, businessClientError, templateApiData, refetchBusiness, refetchTemplate]);

    return ( <
        jusGPTBusinessContext.Provider value = {
            value
        } > {
            children
        } <
        /jusGPTBusinessContext.Provider>
    );
};

export const useJusGPTBusiness = () => useContext(jusGPTBusinessContext);

export default JusGPTBusinessProvider;