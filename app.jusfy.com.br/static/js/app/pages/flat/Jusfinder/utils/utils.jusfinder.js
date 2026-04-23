import {
    format,
    parseISO
} from 'date-fns';
import {
    cepMask,
    cnpjMask,
    cpfMask,
} from '../../../../../_metronic/_helpers/MasksHelper';
import {
    DOCUMENT_TYPE
} from '../Pages/Veiculos/constants';

export const sortList = (arr) => {
    return arr.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });
};

export const hasLawsuitLimitedCredts = (queryOption) => {
    return queryOption.identification === 'lawsuit';
};

export const handleModal = (queryOption, openModal) => {
    queryOption.credit ?
        openModal('QUERY_FORM_MODAL', {
            queryOption
        }) :
        openModal('BUY_CREDITS_MODAL', {
            queryOption
        });
};

export const productSelected = (querySelected) => {
    return {
        product_id: querySelected.identification,
        description: querySelected.description,
        name: querySelected.name,
        online: querySelected.online,
        price: querySelected.price,
    };
};

export const isIdentificationQuery = (querySelected) => {
    return (
        querySelected.identification === 'trademarks' ||
        querySelected.identification === 'economic_group'
    );
};

export const prepareProductSelected = (querySelected) => {
    const isIdentification = isIdentificationQuery(querySelected);

    if (isIdentification) {
        return;
    }

    return productSelected(querySelected);
};
export const eventType = (
    queryOption,
    queries,
    documentType,
    analyticsQueryTreats,
    context_queries,
) => {
    if (queryOption.identification === 'economic_group') {
        queries.forEach((query) => {
            window.analytics.track('Query Performed', {
                query_type: query,
                document_type: 'CNPJ',
                context_queries: context_queries ? context_queries : 'jusfinder',
            });
        });

        return;
    }
    window.analytics.track('Query Performed', {
        ...analyticsQueryTreats,
        context_queries: context_queries ? context_queries : 'jusfinder',
    });
};

export const parsedDate = (date) => {
    return format(parseISO(date), 'dd/MM/yyyy');
};

export const nameWorking = (item) => {
    switch (item.level) {
        case 'Empregado':
            return true;
        case 'Empreendedor | Dono de Negócio':
            return true;
        case 'Autônomo':
            return true;
        case 'Dono':
            return true;
        default:
            return false;
    }
};

export const capitalizeWords = (name = '') => {
    if (!name) return '';

    return name
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const capitalizeFirstWord = (name = '') => {
    if (!name) return '';

    const lower = name.toLowerCase().trim();

    return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export const documentIdentification = (valor) => {
    if (!valor) return 'Não informado';

    const apenasNumeros = String(valor).replaceAll(/\D/g, '');

    if (/^\d{11}$/.test(apenasNumeros)) {
        return 'CPF';
    }

    if (/^\d{14}$/.test(apenasNumeros)) {
        return 'CNPJ';
    }

    return 'Inválido';
};

export const formatAddress = (address) => {
    if (!address || typeof address !== 'object') return 'Endereço não informado';

    const parts = [
        address.ENDERECO || 'Endereço não informado',
        `${address.CIDADE || 'Cidade não informada'}/${address.UF || 'UF'}`,
        address.BAIRRO || 'Bairro não informado',
        address.CEP ? cepMask(String(address.CEP)) : 'CEP não informado',
    ];

    return parts.join(', ');
};

export const formatCurrency = (valor) => {
    const normalizedValor = String(valor ? ? '')
        .trim()
        .replace(',', '.');

    const value = Number.parseFloat(normalizedValor);

    if (Number.isNaN(value)) {
        return 'R$ 0,00';
    }

    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
};

export const formatDate = (date = '') => {
    if (!date) return 'Não Informado';

    if (date.includes('0001')) return '-';
    return parsedDate(date);
};

export const formatDocument = (type = '', document = '') => {
    if (type === '' || document === '') return 'Não Informado';

    return DOCUMENT_TYPE.get(type) ? .maskedDocument(document);
};

export const formatAddressCompanyInformation = (address) => {
    if (!address || typeof address !== 'object') return 'Endereço não informado';

    const addressDescription = [address.Typology, capitalizeFirstWord(address.AddressMain)]
        .filter(Boolean)
        .join(' ') || 'Endereço não informado';

    const addressNumber = address ? .Number || 'Número não informado';

    const neighborhood =
        capitalizeWords(address ? .Neighborhood) || 'Bairro não informado';

    const city = address ? .City || 'Cidade não informada';

    const state = address ? .State || 'Estado não informado';

    const cityState = `${city}/${state}`;

    const cep = 'CEP ' + (cepMask(address ? .ZipCode) || '');

    return `${addressDescription}, ${addressNumber}, ${neighborhood}, ${cityState}, ${cep}`;
};

export const maskCNAES = (valor) => {
    if (typeof valor !== 'string') return '';

    const numeros = valor.replace(/\D/g, '');

    if (numeros.length < 7) return valor;

    const parte1 = numeros.substring(0, 4);
    const parte2 = numeros.substring(4, 5);
    const parte3 = numeros.substring(5, 7);

    return `${parte1}-${parte2}/${parte3}`;
};

export const sortByParticipationPercentageDesc = (data) => {
    if (!data || !Array.isArray(data)) {
        return [];
    }
    return [...data] ? .sort(
        (a, b) =>
        parseFloat(b.ParticipationPercentage) -
        parseFloat(a.ParticipationPercentage),
    );
};

export const formatTypeStringCompose = (words) => {
    return words
        .split('/')
        .map((word) => {
            const trimmed = word.trim().toLowerCase();
            return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        })
        .join('/');
};

export const extractValuesMaxAndMin = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        return {
            maxValue: null,
            minValue: null,
        };
    }
    const values = data.map((item) => item.valor);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);

    return {
        maxValue,
        minValue,
    };
};

export const formatAndCapitalizeName = (name) => {
    if (!name) return '';

    const parts = name.trim().split(' ');

    if (parts.length < 2) return capitalizeWords(name);

    const firstName = capitalizeWords(parts[0]);

    const secondPart = parts[1].replace('.', '/').replace('.', '');

    return `${firstName} ${secondPart}`;
};

export function pluralize(word, count, pluralForm = '') {
    const plural = pluralForm || `${word}s`;

    return `${count} ${count === 1 ? word : plural}`;
}

export function pluralizeWord(word, count, pluralForm = '') {
    const plural = pluralForm || `${word}s`;
    return `${count === 1 ? word : plural}`;
}

export const DOCUMENT_TYPE_HISTORY = new Map([
    [
        'CPF',
        {
            title: 'CPF consultado',
            maskedDocument: (document) => cpfMask(document),
        },
    ],
    [
        'CNPJ',
        {
            title: 'CNPJ consultado',
            maskedDocument: (document) => cnpjMask(document),
        },
    ],

    [
        'License Plate',
        {
            title: 'Placa consultada',
            maskedDocument: (document) => maskLicensePlate(document),
        },
    ],
]);

export const formatCurrencyNumber = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    }).format(value);
};

export const formatNameHolderCompany = (
    text,
    placeHolder = 'Não informado',
) => {
    if (!text) return placeHolder;

    return text
        .toLowerCase()
        .split(' ')
        .map((word) => {
            if (['s/a', 'ltda', 'me', 'epp'].includes(word)) {
                return word.toUpperCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
};

export const extractedInfosCompanys = (providerResponse) => {
    const group = providerResponse ? .group || {};

    const createSimpleInfo = (label, value) => ({
        label,
        value
    });

    const createRangeInfo = (label = '', min = '', max = '', suffix = '') => ({
        label,
        value: `de ${min} até ${max}${suffix}`,
    });

    const companyStatus = [
        createSimpleInfo('Empresas ativas: ', group.total_active_companies),
        createSimpleInfo('Empresas inativas: ', group.total_inactive_companies),
    ];

    const companyType = [
        createSimpleInfo('Sedes: ', group.total_headquarter),
        createSimpleInfo('Filiais: ', group.total_branches),
    ];

    const taxRegime1 = [
        createSimpleInfo(
            'Sociedade anônima aberta: ',
            group.total_sociedade_anonima_aberta,
        ),
        createSimpleInfo(
            'Sociedade anônima fechada: ',
            group.total_sociedade_anonima_fechada,
        ),
    ];

    const taxRegime2 = [
        createSimpleInfo(
            'Sociedade empresária limitada: ',
            group.total_sociedade_empresaria_limitada,
        ),
        createSimpleInfo('Associação privada: ', group.total_associacao_privada),
    ];

    const operationalInfo1 = [
        createRangeInfo(
            'Idade das empresas: ',
            group.min_company_age,
            group.max_company_age,
            ' anos',
        ),
        createRangeInfo(
            'Sócios: ',
            group.min_number_of_owners,
            group.max_number_of_owners,
            ' sócios',
        ),
        createRangeInfo(
            'Funcionários: ',
            group.min_employees_range,
            group.max_employees_range,
        ),
        createRangeInfo(
            'Sites registrados: ',
            group.min_sites,
            group.max_sites,
            ' sites',
        ),
        createRangeInfo(
            'Lojas MarketPlace: ',
            group.min_marketplace_stores,
            group.max_marketplace_stores,
            ' lojas',
        ),
    ];

    const operationalInfo2 = [
        createRangeInfo(
            'Faixa da receita: ',
            group.min_income_range,
            group.max_income_range,
        ),
        {
            label: 'Faixa de valores declarados: ',
            value: `de ${formatCurrencyNumber(
        group.min_declared_value,
      )} até ${formatCurrencyNumber(group.max_declared_value)}`,
        },
        createSimpleInfo(
            'Total de valores declarados: ',
            formatCurrencyNumber(group.total_declared_value),
        ),
    ];

    const locations = group.state_distribution;

    return {
        companyStatus,
        companyType,
        taxRegime1,
        taxRegime2,
        operationalInfo1,
        operationalInfo2,
        locations,
    };
};

export const maskLicensePlate = (value = '') => {
    const regularPlatePartialRegex = /^([a-zA-Z]{3})([0-9][0-9]+)$/;
    const returnString = value
        .toUpperCase()
        .replace(/[^a-zA-Z0-9-]/g, '')
        .replace(regularPlatePartialRegex, '$1-$2');
    const cutoff = returnString.includes('-') ? 8 : 7;

    return returnString.substring(0, cutoff);
};