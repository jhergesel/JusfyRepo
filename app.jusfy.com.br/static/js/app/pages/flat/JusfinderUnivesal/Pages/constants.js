import {
    cnpjMask,
    cpfMask,
} from '../../../../../_metronic/_helpers/MasksHelper';

export const TITLE_PAGES = new Map([
    ['professional_data', 'Dados Profissionais'],
    ['personal_data', 'Localização'],
    ['list_vehicles', 'Veículos'],
    ['vehicle_tracking', 'Rastreamento de veículos'],
    ['credit_restriction', 'Restrição de crédito'],
    ['company_information', 'Empresa completo'],
    ['company_partnership', 'Sociedades'],
    ['vehicle_data', 'Dados de veículo'],
    ['trademarks', 'Marcas e patentes'],
    ['cpf_registration_status', 'Situação cadastral de CPF'],
    ['economic_group', 'Grupo econômico'],
    ['relationship_tree', 'Relacionamentos'],
    ['legal_representative', 'Empresas com o mesmo representante legal'],
    ['owners', 'Empresas com o mesmo quadro societário'],
    ['rfcontact', 'Empresas com o mesmo contato na Receita Federal'],
    ['household', 'Empresas com qualquer atividade no mesmo endereço'],
    ['household_activity', 'Empresas com atividade semelhante no endereço'],
]);

export const SEXOS = {
    M: 'Masculino',
    F: 'Feminino',
};

export const DOCUMENT_TYPE = new Map([
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
]);

export const MAX_LENGTH_HEIGHT = 5;

export const BACKGROUND_COLOR_ACTIVE = '#E6F7F2';

export const BACKGROUND_COLOR_INACTIVE = '#FBEAEC';

export const BACKGROUND_COLOR_DEFAULT = '#F4F5F9';

export const BACKGROUND_COLOR_PROCESS = '#FFF9E6';

export const QUERIES_TEXT_MAP = new Map([
    ['household_activity', 'Empresas com atividade semelhante no endereço'],
    ['household', 'Empresas com qualquer atividade no mesmo endereço'],
    ['rfcontact', 'Empresas com o mesmo contato na Receita Federal'],
    ['owners', 'Empresas com o mesmo quadro societário'],
    ['legal_representative', 'Empresas com o mesmo representante legal'],
]);

export const MAX_LENGTH_RENDER = 21;

export const ProviderStatus = {
    ATIVA: 'ATIVA',
    INATIVA: 'INATIVA',
};

export const MAPPED_NATURE = {
    'SOCIEDADE ANONIMA ABERTA': 'Sociedade anônima aberta',
    'SOCIEDADE ANONIMA LIMITADA': 'Sociedade anônima limitada',
    'EMPRESARIO (INDIVIDUAL)': 'Empresário individual',
    'SOCIEDADE EMPRESARIA LIMITADA': 'Sociedade empresária limitada',
};

export const STATUS_BACKGROUND_MAP = new Map([
    [ProviderStatus.ATIVA, BACKGROUND_COLOR_ACTIVE],
    [ProviderStatus.INATIVA, BACKGROUND_COLOR_INACTIVE],
]);