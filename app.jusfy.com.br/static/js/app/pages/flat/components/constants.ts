import { cnpjMask, cpfMask } from '../../../../_metronic/_helpers/MasksHelper';
import { maskLicensePlate } from './utils/licensePlateUtils';
import { DOCUMENTS_ENUM } from './DOCUMENTS_ENUM';

export const URL_LINK_FORM =
  'https://docs.google.com/forms/u/1/d/e/1FAIpQLSez6w7IdP7956J-_h_ygOHoMrvQDh8bndePUegei5Vywq-r8g/viewform?usp=send_form';

export const LINKS_EXAMPLES_QUERIES = new Map([
  [
    'relationship_tree',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/ab91a2f2-642b-4d00-a6f4-15a000d83672.pdf',
  ],
  [
    'professional_data',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/9c64c655-bddb-45a8-811e-db30e34c6a39.pdf',
  ],
  ['lawsuit', 'https://jusfinder.com.br/processos/12345678901'],
  [
    'personal_data',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/2d29b82d-757e-4875-9adf-06c2d35dad23.pdf',
  ],
  [
    'list_vehicles',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/fd892ff5-51b1-450f-83a1-9a92aaa9db16.pdf',
  ],
  [
    'credit_restriction',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/c90f0ab4-fa03-4afb-a437-11473342dc7b.pdf',
  ],
  [
    'company_information',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/6a6564cf-0aae-45b1-89fb-c70dd388586a.pdf',
  ],
  [
    'company_partnership',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/cf66e220-ee13-480f-ab63-71a719d19645.pdf',
  ],
  [
    'vehicle_data',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/f38db798-59f0-4c46-ab65-579961990a85.pdf',
  ],
  [
    'trademarks',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/3eabbdd4-c250-4ffd-acc7-b73938caecac.pdf',
  ],
  [
    'cpf_registration_status',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/6e2b2e14-bac4-4b86-bf53-fe1ba2bb95e0.pdf',
  ],
  [
    'economic_group',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/eaa0c046-b09e-4b9b-bf1f-51aa783aa5ed.pdf',
  ],
  [
    'vehicle_tracking',
    'https://jusfy-reports.s3.us-east-2.amazonaws.com/bdaa383e-6c6f-40eb-b32a-33a3d1786193.pdf',
  ],
]);

export const MASKS = new Map([
  [DOCUMENTS_ENUM.CPF, cpfMask],

  [DOCUMENTS_ENUM.CNPJ, cnpjMask],

  [DOCUMENTS_ENUM.PLATE, maskLicensePlate],
]);

export const ERRORS = new Map([
  [DOCUMENTS_ENUM.CPF, 'Digite um CPF válido'],
  [DOCUMENTS_ENUM.CNPJ, 'Digite um CNPJ válido'],
  [DOCUMENTS_ENUM.PLATE, 'Digite uma placa válida (ABC-1234 ou ABC1D23)'],
  [
    'TERMS',
    '*Você precisa selecionar o campo de termos de uso para dar continuidade a consulta.',
  ],
]);

export const QUERIES_EVENTS_KEYS = [
  'household_activity',
  'household',
  'rfcontact',
  'owners',
  'legal_representative',
];

export const ARRAY_LENGTH_SIZE = 13;

export { DOCUMENTS_ENUM };

export const STATUS_ENUM = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
  PENDING: 'pending',
};
