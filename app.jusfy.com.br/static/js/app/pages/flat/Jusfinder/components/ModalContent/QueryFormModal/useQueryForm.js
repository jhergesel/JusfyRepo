import {
    useContext,
    useEffect,
    useState
} from 'react';
import {
    jusfinderContext
} from '../../../context';
import useClickOutside from '../../../../../../hooks/useClickOutside';
import {
    ACCEPTED_DOCUMENT_TYPES,
    INPUT_CONTENT,
    QUERIES_NEWTAB,
} from './constants';
import {
    cnpjMask,
    cpfMask,
} from '../../../../../../../_metronic/_helpers/MasksHelper';
import {
    cnpj,
    cpf
} from 'cpf-cnpj-validator';
import {
    queryCheckout
} from '../../../api';
import useLocalStorage from '../../../../../../hooks/useLocalStorage';
import {
    useHistory,
    useParams
} from 'react-router-dom';
import {
    eventType,
    pluralize
} from '../../../utils/utils.jusfinder';
import {
    toAbsoluteUrl
} from '../../../../../../../_metronic/_helpers';
import {
    EventsSegment
} from '../../../../../../helpers/EventsSegmentsCalculators';
import {
    LINKS_EXAMPLES_QUERIES
} from '../../../../components/constants';
import {
    PDF_LINK_CAMERAS_BY_STATE
} from '../../../../JusfinderShared/constants/listingCards';

export const useQueryForm = (queryOption) => {
    const {
        getToken,
        setToken
    } = useLocalStorage('jusfinder-terms-accepted');
    const {
        getToken: getContextQueries,
        setToken: setTokenContextQueries,
    } = useLocalStorage('context_queries');

    const params = useParams();

    const history = useHistory();

    const [documentType, setDocumentType] = useState(params.type || 'CPF');
    const [error, setError] = useState('');
    const [queryDocument, setQuerydocument] = useState(params.document || '');
    const [hasAcceptedTerms, setHasAcceptedterms] = useState(getToken());
    const [isLoading, setIsLoading] = useState(false);

    const error_credit = error === 'ERROR_CREDIT';

    const {
        openModal,
        closeModal,
        setShouldReload,
        setQueries,
        queries,
    } = useContext(jusfinderContext);

    const {
        HandleEvent
    } = EventsSegment();

    const onChangeQueries = (_, query) => {
        setQueries((prev) => {
            const isChecked = prev.includes(query);
            return isChecked ?
                prev.filter((item) => item !== query) :
                [...prev, query];
        });
    };

    const modalRef = useClickOutside(closeModal);

    const getDocumentType = () => {
        const inputContentDocumentType =
            INPUT_CONTENT.get(queryOption.identification) || null;

        return inputContentDocumentType ? .documentType || documentType;
    };

    const documentTypeLabel = getDocumentType();

    const documentTypeLabelPrefix =
        queryOption.identification === 'vehicle_data' ? 'uma' : 'o';

    const maskLicensePlate = (value) => {
        const regularPlatePartialRegex = /^([a-zA-Z]{3})([0-9][0-9]+)$/;
        const returnString = value
            .toUpperCase()
            .replace(/[^a-zA-Z0-9-]/g, '')
            .replace(regularPlatePartialRegex, '$1-$2');
        const cutoff = returnString.includes('-') ? 8 : 7;

        return returnString.substring(0, cutoff);
    };

    const getCpfOrCnpjMask = () => {
        const DOCUMENT_MAKS = {
            CPF: cpfMask,
            CNPJ: cnpjMask,
        };

        return DOCUMENT_MAKS[documentType];
    };

    const MASKS = new Map([
        ['personal_data', cpfMask],
        ['list_vehicles', getCpfOrCnpjMask()],
        ['company_information', cnpjMask],
        ['company_partnership', cpfMask],
        ['vehicle_data', maskLicensePlate],
        ['relationship_tree', getCpfOrCnpjMask()],
        ['credit_restriction', getCpfOrCnpjMask()],
        ['lawsuit', getCpfOrCnpjMask()],
        ['trademarks', getCpfOrCnpjMask()],
        ['professional_data', cpfMask],
        ['cpf_registration_status', cpfMask],
        ['economic_group', cnpjMask],
        ['vehicle_tracking', maskLicensePlate],
    ]);

    const shouldAcceptAutofill = () => {
        const acceptAutofill =
            params.type === documentType &&
            ACCEPTED_DOCUMENT_TYPES.get(queryOption.identification).includes(
                params.type,
            );
        return acceptAutofill;
    };

    const onChangeQueryInput = (evt) => {
        const queryInputValue = evt.target.value;

        setQuerydocument(MASKS.get(queryOption.identification)(queryInputValue));
    };

    const validadeCpfOrCnpj = () => {
        const VALIDATIONS = {
            CPF: validateCpf,
            CNPJ: validateCNPJ,
        };

        return VALIDATIONS[documentType];
    };

    const validateLicensePlate = () => {
        const normalizedPlate = queryDocument.replace('-', '');
        const validateRegularPlate = (plate) => /^[A-Z]{3}[0-9]{4}$/.test(plate);
        const validateMercosurPlate = (plate) =>
            /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/.test(plate);

        const plateIsValid =
            validateRegularPlate(normalizedPlate) ||
            validateMercosurPlate(normalizedPlate);

        if (!plateIsValid) {
            setError('DOCUMENT_ERROR');
            return false;
        }

        setError('');
        return true;
    };

    const validateCpf = () => {
        if (!cpf.isValid(queryDocument)) {
            setError('DOCUMENT_ERROR');
            return false;
        }

        setError('');
        return true;
    };

    const validateCNPJ = () => {
        if (!cnpj.isValid(queryDocument)) {
            setError('DOCUMENT_ERROR');
            return false;
        }
        setError('');
        return true;
    };

    const validateDocument = () => {
        if (queryDocument === '') {
            setError('EMPTY_ERROR');
            return false;
        }

        const VALIDATION = new Map([
            ['personal_data', validateCpf],
            ['list_vehicles', validadeCpfOrCnpj()],
            ['company_information', validateCNPJ],
            ['company_partnership', validateCpf],
            ['vehicle_data', validateLicensePlate],
            ['relationship_tree', validadeCpfOrCnpj()],
            ['credit_restriction', validadeCpfOrCnpj()],
            ['lawsuit', validadeCpfOrCnpj()],
            ['trademarks', validadeCpfOrCnpj()],
            ['professional_data', validateCpf],
            ['cpf_registration_status', validateCpf],
            ['economic_group', validateCNPJ],
            ['vehicle_tracking', validateLicensePlate],
        ]);

        return VALIDATION.get(queryOption.identification)();
    };

    const validateTermsAccepted = () => {
        if (!hasAcceptedTerms) {
            setError('TERMS_ACCEPTED_ERROR');
        }
    };

    const validateQueries = () => {
        const hasQueries = queries.length === 0;
        const qtdQueries = queries.length;

        if (hasQueries) {
            setError('EMPTY_QUERY');

            return false;
        }

        if (queryOption.credit < qtdQueries) {
            setError('ERROR_CREDIT');

            return false;
        }

        return true;
    };

    useEffect(() => {
        setQuerydocument((state) => MASKS.get(queryOption.identification)(state));

        if (!shouldAcceptAutofill()) {
            setQuerydocument('');
        }
    }, [documentType]);

    useEffect(() => {
        setToken(hasAcceptedTerms);
    }, [hasAcceptedTerms]);

    useEffect(() => {
        setError('');
    }, [queries, queryDocument]);

    const queryType =
        queryOption.identification === 'trademarks' ?
        'trademarks_and_patents' :
        queryOption.identification;

    const getAnalyticsQueryTreats = () => {
        const treats = {
            query_type: queryType,
        };

        const hasDocumentTypeTreats = [
            'list_vehicles',
            'relationship_tree',
            'credit_restriction',
            'lawsuit',
            'trademarks',
            'professional_data',
            'cpf_registration_status',
            'economic_group',
        ].includes(queryOption.identification);

        if (hasDocumentTypeTreats) {
            treats.document_type = documentType;
        }

        return treats;
    };

    const onQueryDocument = () => {
        const isDocumentValid = validateDocument();

        validateTermsAccepted();

        if (queryOption.identification === 'economic_group' && !validateQueries()) {
            return;
        }

        if (!isDocumentValid || !hasAcceptedTerms) {
            return;
        }

        setError('');
        setIsLoading(true);

        const acceptedDocumentType = ACCEPTED_DOCUMENT_TYPES.get(
            queryOption.identification,
        );

        const formattingRules = {
            CPF: (document) => document.replace(/\D/g, ''),
            CNPJ: (document) => document.replace(/\D/g, ''),
            LICENSE_PLATE: (document) => document.replace('-', ''),
        };

        const documentType = acceptedDocumentType.find(
            (type) => formattingRules[type],
        );

        const format = formattingRules[documentType] || ((document) => document);
        const documentFormatted = format(queryDocument);

        queryCheckout(documentFormatted, queryOption, queries)
            .then(handleQueryResponse)
            .catch(handleQueryError)
            .finally(() => {
                setShouldReload(true);
                setIsLoading(false);
            });
    };

    const analyticsQueryTreats = getAnalyticsQueryTreats();

    const handleQueryResponse = (response) => {
        const responseData = response.data;
        const {
            payment_info,
            query_info
        } = responseData;
        const contextQueries = getContextQueries();

        if (payment_info.status === 'on_hold') {
            eventType(
                queryOption,
                queries,
                documentType,
                analyticsQueryTreats,
                contextQueries,
            );
            openModal('AVAILABLE_SOON_MODAL');
            return;
        }

        const handleSuccessfulQuery = () => {
            eventType(
                queryOption,
                queries,
                documentType,
                analyticsQueryTreats,
                contextQueries,
            );
            const urls = {
                relationship_tree: `/relation_query/${documentType}/${query_info.id}`,
                professional_data: `/resultado/${query_info.feature_type_name}/${query_info.id}`,
                personal_data: `/resultado/${query_info.feature_type_name}/${query_info.id}`,
                company_information: `/resultado/${query_info.feature_type_name}/${query_info.id}`,
                company_partnership: `/resultado/${query_info.feature_type_name}/${query_info.id}`,
                vehicle_data: `/resultado/${query_info.feature_type_name}/${query_info.id}`,
                trademarks: `/resultado/${query_info.feature_type_name}/${query_info.id}`,
            };
            setTokenContextQueries('');
            if (QUERIES_NEWTAB.includes(query_info.feature_type_name)) {
                openModal('SUCCESS_QUERY_MODAL', {
                    type: 'query',
                    action: () => {
                        history.push(urls[query_info.feature_type_name]);
                    },
                });
            } else {
                const pdfUrl = query_info.pdf;

                openModal('SUCCESS_QUERY_MODAL', {
                    type: 'file',
                    action: () => {
                        window.open(pdfUrl, '_BLANK');
                    },
                });
            }
        };

        const handleFailedQuery = () => {
            if (
                payment_info.status === 'no_credits' &&
                query_info.status === 'query failed'
            ) {
                setShouldReload(true);
                openModal('ERROR_QUERY_MODAL', {
                    type: 'BAD_REQUEST',
                    action: closeModal,
                });
                return;
            }

            const FAILED_QUERY_CONDITION_TO_MODAL_CONFIG_MAPPING = {
                query_failed: {
                    condition: () =>
                        payment_info.status === 'approved' &&
                        query_info.status === 'query failed',
                    modalConfig: {
                        type: 'ERROR_PROCESS',
                        action: closeModal
                    },
                },
                limit_reached: {
                    condition: () => payment_info.status === 'limit_reached',
                    modalConfig: {
                        type: 'LIMIT_REACHED',
                        action: closeModal
                    },
                },
                error_lgpd: {
                    condition: () =>
                        payment_info.status === 'ERROR_LGPD' &&
                        query_info.status === 'query failed',
                    modalConfig: {
                        type: 'ERROR_LGPD',
                        action: closeModal
                    },
                },
            };

            for (const key in FAILED_QUERY_CONDITION_TO_MODAL_CONFIG_MAPPING) {
                if (FAILED_QUERY_CONDITION_TO_MODAL_CONFIG_MAPPING[key].condition()) {
                    openModal(
                        'ERROR_QUERY_MODAL',
                        FAILED_QUERY_CONDITION_TO_MODAL_CONFIG_MAPPING[key].modalConfig,
                    );
                    break;
                }
            }
        };

        if (payment_info.status === 'approved' && query_info.status === 'success') {
            handleSuccessfulQuery();
        } else {
            handleFailedQuery();
        }
    };

    const handleQueryError = (err) => {
        openModal('ERROR_QUERY_MODAL', {
            type: 'BAD_REQUEST',
            action: closeModal
        });
    };

    const hasInputError = [
        'EMPTY_ERROR',
        'DOCUMENT_ERROR',
        'EMPTY_QUERY',
        'ERROR_CREDIT',
    ].includes(error);

    useEffect(() => {
        if (isLoading) {
            openModal('LOADING_QUERY_MODAL', {
                name: queryOption.name
            });
        }
    }, [isLoading]);

    const getDescriptionInfo = () => {
        const qtdQueries = queries ? .length ? ? 0;
        const credit = queryOption ? .credit ? ? 0;
        const needsCredit = credit < qtdQueries;

        const queriesText = pluralize('opção', qtdQueries, 'opções');
        const creditsText = pluralize('crédito', credit, 'créditos');
        const consumptionText = pluralize('crédito', qtdQueries, 'créditos');

        const message = needsCredit ?
            `Você possui apenas ${creditsText}. Compre mais para conseguir consultar as ${queriesText} marcadas.` :
            qtdQueries > 0 ?
            `Ao fazer estas consultas, você utilizará ${consumptionText} dos seus ${creditsText}.` :
            `Selecione ao menos 1 opção para visualizar o consumo de créditos.`;

        const iconUrl = toAbsoluteUrl(
            needsCredit ?
            '/media/jusfinder/info-circle-down.svg' :
            '/media/jusfinder/info-circle-up-credits.svg',
        );

        return {
            message,
            hasCredit: needsCredit,
            icon: iconUrl,
        };
    };

    const openModalFromBox = () => {
        HandleEvent('Button Info Buy Credits Clicked');
        openModal('BUY_CREDITS_MODAL', {
            queryOption,
            context: 'box_info_buy_credits',
        });
    };

    const extractUrl = () => {
        const url = LINKS_EXAMPLES_QUERIES.get(queryOption.identification);

        return url;
    };

    const openExamplePdf = () => {
        HandleEvent('Open Example PDF Clicked');

        const urlOpened = extractUrl();

        if (!urlOpened) return;

        window.open(urlOpened, '_blank', 'noopener,noreferrer');
    };

    const clickOnTheCameraQuantityButton = () => {
        HandleEvent('Button Camera Quantity Clicked', {
            query_type: queryType,
            isUniversal: false,
        });

        window.open(PDF_LINK_CAMERAS_BY_STATE, '_blank', 'noopener,noreferrer');
    };

    return {
        closeModal,
        modalRef,
        documentTypeLabel,
        documentTypeLabelPrefix,
        maskLicensePlate,
        getCpfOrCnpjMask,
        MASKS,
        shouldAcceptAutofill,
        onChangeQueryInput,
        validadeCpfOrCnpj,
        validateLicensePlate,
        validateCpf,
        validateCNPJ,
        validateDocument,
        validateTermsAccepted,
        getAnalyticsQueryTreats,
        onQueryDocument,
        analyticsQueryTreats,
        handleQueryResponse,
        handleQueryError,
        hasInputError,
        isLoading,
        setDocumentType,
        setHasAcceptedterms,
        documentType,
        error,
        queryDocument,
        hasAcceptedTerms,
        queries,
        onChangeQueries,
        error_credit,
        setQueries,
        getDescriptionInfo,
        openModalFromBox,
        openExamplePdf,
        clickOnTheCameraQuantityButton,
    };
};