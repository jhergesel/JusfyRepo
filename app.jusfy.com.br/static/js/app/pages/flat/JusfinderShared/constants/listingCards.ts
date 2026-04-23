import { Query } from 'app/pages/flat/JusfinderShared/components/SmartSearch/types';

export const SKELETONS_AMOUNT = [...Array.from({ length: 12 })];

export const URL_SCHEDULE =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1OG3iXMXFKRRHlVPH7d9W6R0364fUC3Qf5rcpF8kI36weFhU2tlp9NUSBeWnMDF6T3ygBD1e3d';

export const QUERIES: Query[] = [
  {
    id: 'economic_group',
    name: 'Grupo Econômico de CNPJ',
    tags: [
      'grupo econômico',
      'cnpj',
      'patrimônio oculto',
      'responsabilidade solidária',
      'sucessão empresarial',
      'due diligence',
    ],
    contexts: [
      'Identificação de bens e patrimônio oculto',
      'Desconsideração da personalidade jurídica',
      'Ampliação do polo passivo',
      'Responsabilidade solidária ou subsidiária',
      'Sucessão empresarial',
      'Due Diligence Empresarial',
      'Ações de abstenção de uso',
      'Ligação entre réus',
    ],
    documents: ['cnpj'],
  },
  {
    id: 'cpf_registration_status',
    name: 'Situação Cadastral de CPF',
    tags: [
      'cpf',
      'situação cadastral',
      'fraude',
      'óbito',
      'regularidade',
      'validação de devedor',
    ],
    contexts: [
      'Validação prévia do devedor',
      'Prevenção de diligências improdutivas',
      'Verificação de óbito',
      'Prevenção à fraude',
      'Detecção de irregularidade em cadastros internos',
    ],
    documents: ['cpf'],
  },
  {
    id: 'professional_data',
    name: 'Dados Profissionais',
    tags: [
      'emprego',
      'renda',
      'vínculo empregatício',
      'pensão alimentícia',
      'capacidade financeira',
    ],
    contexts: [
      'Identificação de renda para penhora',
      'Indicação do empregador',
      'Análise de capacidade financeira',
      'Ações de pensão alimentícia',
      'Revisão de alimentos',
      'Comprovação de vínculo',
      'Análise de risco de crédito',
    ],
    documents: ['cpf'],
  },
  {
    id: 'trademarks',
    name: 'Marcas e Patentes',
    tags: [
      'marca registrada',
      'patente',
      'propriedade intelectual',
      'uso indevido',
      'licenciamento',
    ],
    contexts: [
      'Comprovação de titularidade',
      'Ação contra uso indevido',
      'Monitoramento de validade',
      'Avaliação de ativos intangíveis',
      'Identificação de riscos jurídicos',
      'Licenciamento de marcas e patentes',
    ],
    documents: ['cpf', 'cnpj'],
  },
  {
    id: 'personal_data',
    name: 'Localização',
    tags: ['endereço', 'telefone', 'email', 'localização', 'rastreamento'],
    contexts: [
      'Busca de endereços atualizados para citação',
      'Redução de custos e tempo processual',
      'Contato direto com devedor',
      'Rastreamento de movimentação',
      'Prevenção de fraude com confirmação de dados',
    ],
    documents: ['cpf'],
  },
  {
    id: 'relationship_tree',
    name: 'Relacionamentos',
    tags: ['vínculos', 'parentesco', 'sócios', 'herdeiros', 'laranjas'],
    contexts: [
      'Rastreamento de vínculos societários',
      'Busca indireta de bens',
      'Atingir codevedores ou garantidores',
      'Identificação de herdeiros',
      'Prevenção de fraudes',
      'Construção de linha investigativa',
    ],
    documents: ['cpf', 'cnpj'],
  },
  {
    id: 'list_vehicles',
    name: 'Lista de Veículos',
    tags: ['veículos', 'penhora', 'patrimônio móvel', 'rastreamento de bens'],
    contexts: [
      'Penhora de veículos',
      'Localização de patrimônio oculto',
      'Análise de transferência',
      'Garantias de pagamentos',
      'Prevenção de fraude',
    ],
    documents: ['cpf', 'cnpj'],
  },
  {
    id: 'vehicle_data',
    name: 'Dados do Veículo',
    tags: ['proprietário', 'renavam', 'placa', 'vínculo patrimonial'],
    contexts: [
      'Identificação do proprietário',
      'Confirmação de propriedade',
      'Garantia em execução',
      'Análise de bens antes de negócio',
      'Investigação em crimes',
    ],
    documents: ['vehicle'],
  },
  {
    id: 'company_partnership',
    name: 'Sociedades',
    tags: [
      'sócios',
      'quotas',
      'empresas ligadas',
      'grupo econômico',
      'compliance',
    ],
    contexts: [
      'Mapeamento de empresas ligadas',
      'Patrimônio indireto',
      'Penhora de quotas',
      'Redirecionamento em execuções',
      'PLD/FT',
      'Avaliação de idoneidade',
    ],
    documents: ['cpf'],
  },
  {
    id: 'company_information',
    name: 'Dados da Empresa',
    tags: ['cnpj', 'quadro societário', 'capital social', 'cnae', 'compliance'],
    contexts: [
      'Avaliação pré-contratual',
      'Compliance e PLD/FT',
      'Litígios societários',
      'Planejamento societário',
    ],
    documents: ['cnpj'],
  },
  {
    id: 'credit_restriction',
    name: 'Restrição de Crédito',
    tags: ['serasa', 'inadimplência', 'negativação', 'risco de crédito'],
    contexts: [
      'Verificação de inadimplência',
      'Priorização de cobranças',
      'Produção de provas',
      'Análise de comportamento financeiro',
      'Proteção do consumidor',
    ],
    documents: ['cpf', 'cnpj'],
  },
  {
    id: 'lawsuit',
    name: 'Buscador Processual',
    tags: [
      'processos',
      'ações judiciais',
      'histórico processual',
      'due diligence',
      'passivo judicial',
    ],
    contexts: [
      'Busca centralizada de processos por CPF/CNPJ',
      'Identificação de potenciais clientes ou teses jurídicas',
      'Análise de histórico processual',
      'Due Diligence Jurídica',
      'Classificação de passivos',
      'Estudo de tendências processuais',
    ],
    documents: ['cpf', 'cnpj'],
  },
  {
    id: 'vehicle_tracking',
    name: 'Rastreamento de Veículos',
    tags: [
      'veículos',
      'fotos',
      'histórico de localização',
      'leilões',
      'penhora',
      'patrimônio móvel',
      'rastreamento de bens',
    ],
    contexts: [
      'Rastreamento em tempo real',
      'Histórico de localização',
      'Verificação de penhora',
      'Análise de leilões',
      'Garantia em execuções',
    ],
    documents: ['vehicle'],
  },
];

export const FIRST_ITEM_INDEX = 0;
export const SECOND_ITEM_INDEX = 1;
export const THIRD_ITEM_INDEX = 2;
export const FOURTH_ITEM_INDEX = 3;
export const FIFTH_ITEM_INDEX = 4;

export const PDF_LINK_CAMERAS_BY_STATE =
  'https://jusfy-reports.s3.us-east-2.amazonaws.com/75dac683-797f-4158-a156-8acf5c667a03.pdf';

export const QUERY_TYPES_ECONOMIC_GROUP = new Map([
  ['legal_representative', 'Empresas com o mesmo representante legal'],
  ['owners', 'Empresas com o mesmo quadro societário'],
  ['rfcontact', 'Empresas com o mesmo contato na Receita Federal'],
  ['household', 'Empresas com qualquer atividade no mesmo endereço'],
  ['household_activity', 'Empresas com atividade semelhante no endereço'],
]);
