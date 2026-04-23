import React from 'react';
import {
  AgendaOutlineIcon,
  BatchQueriesOutlineIcon,
  BriefcaseOutlineIcon,
  CalculatorOutlineIcon,
  CardOutlineIcon,
  ChatOutlineIcon,
  CogOutlineIcon,
  FolderOutlineIcon,
  HomeOutlineIcon,
  LogoutOutlineIcon,
  MailOutlineIcon,
  OpenInNewOutlineIcon,
  PaperOutlineIcon,
  PencilOutlineIcon,
  PeopleOutlineIcon,
  PetitionOutlineIcon,
  ResearchOutlineIcon,
  ScanOutlineIcon,
  ScreenOutlineIcon,
  SignatureOutlineIcon,
  TimerOutlineIcon,
  UserOutlineIcon,
  WalletIcon,
  SettingsGridOutlineIcon,
  LinkIcon,
  CurrencyIcon,
  IdOutlineIcon,
  ContabilidadeIcon,
  AnnouncementIcon,
  HelpIcon,
  InviteOutlineIcon,
  PlusIcon,
} from '../../icons';
import {
  CALCULADORAS_PATHS,
  JUSZAP_PATHS,
  ROUTES_PATH,
} from 'app/constants/Routes';
import { GroupIdEnum } from 'app/modules/Segment/types';
import {
  DrawerType,
  MenuItemId,
  DrawerItemId,
  MenuItemType,
  type MenuItem,
  type NewTagConfig,
  type DrawerSection,
  type MenuDrawerConfig,
  type MobileMenuFooterItem,
} from './types';
import SidebarGamificationMenuIcon from './components/GamificationMenuIcon';
export * from './types';

export const NEW_TAGS: NewTagConfig[] = [
  {
    routeOrPathKey: ROUTES_PATH.JUSFYPAY.BASE,
    noveltyDate: new Date(2026, 2, 25),
  },
  {
    routeOrPathKey: ROUTES_PATH.CONTABILIDADE.LANDING_PAGE,
    noveltyDate: new Date(2026, 3, 15),
  }
];

export const ICON_PROPS = {
  color: '#383839',
  size: 20,
} as const;

export const DRAWER_ICON_PROPS = {
  color: '#383839',
  size: 16,
} as const;

export const MAIN_MENU_ITEMS: MenuItem[] = [
  {
    id: MenuItemId.DASHBOARD,
    label: 'Início',
    icon: React.createElement(HomeOutlineIcon, ICON_PROPS),
    route: ROUTES_PATH.MAIN.DASHBOARD,
    type: MenuItemType.MAIN,
    trackEvent: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      categoryParent: null,
    },
  },
  {
    id: MenuItemId.PROCESSOS,
    label: 'Processos',
    icon: React.createElement(FolderOutlineIcon, ICON_PROPS),
    route: ROUTES_PATH.MAIN.JUSFINDER_QUERY,
    drawerType: DrawerType.PROCESSOS,
    type: MenuItemType.MAIN,
    activePrefixes: [
      ROUTES_PATH.PROCESSOS.JUSFINDER_QUERY,
      ROUTES_PATH.PROCESSOS.HISTORY_BATCH,
      ROUTES_PATH.PROCESSOS.CALCULADORAS,
      ROUTES_PATH.PROCESSOS.PETICOES,
      ROUTES_PATH.PROCESSOS.MEUS_PROCESSOS,
      ROUTES_PATH.PROCESSOS.PRAZOS,
      ROUTES_PATH.PROCESSOS.AGENDA,
    ],
    trackEvent: {
      groupId: GroupIdEnum.JUSPROCESSOS_GROUP,
      categoryParent: null,
    },
  },
  {
    id: MenuItemId.CLIENTES,
    label: 'Clientes',
    icon: React.createElement(PeopleOutlineIcon, ICON_PROPS),
    route: ROUTES_PATH.MAIN.ASSINATURAS,
    drawerType: DrawerType.CLIENTES,
    type: MenuItemType.MAIN,
    trackEvent: {
      groupId: GroupIdEnum.CLIENTS_GROUP,
      categoryParent: null,
    },
  },
  {
    id: MenuItemId.JUSFYPAY,
    label: 'Jusfy Pay',
    icon: React.createElement(BriefcaseOutlineIcon, ICON_PROPS),
    route: ROUTES_PATH.JUSFYPAY.DASHBOARD,
    drawerType: DrawerType.JUSFYPAY,
    type: MenuItemType.MAIN,
    trackEvent: {
      groupId: GroupIdEnum.JUSFYPAY_GROUP,
      categoryParent: null,
    },
  },
  {
    id: MenuItemId.IA_JUSFY,
    label: 'IA da Jusfy',
    icon: React.createElement(PencilOutlineIcon, ICON_PROPS),
    route: ROUTES_PATH.MAIN.GPT,
    type: MenuItemType.MAIN,
    trackEvent: {
      groupId: GroupIdEnum.JUSGPT_GROUP,
      categoryParent: null,
    },
  },
];

export const SETTINGS_MENU_ITEMS: MenuItem[] = [
  {
    id: MenuItemId.GAMIFICACAO,
    label: 'Gamificação',
    icon: React.createElement(SidebarGamificationMenuIcon),
    tooltip: false,
    route: '#',
    activePrefixes: [ROUTES_PATH.GAMIFICATION.BASE],
    type: MenuItemType.SETTINGS,
    hideLabel: true,
    trackEvent: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      categoryParent: null,
    },
  },
  {
    id: MenuItemId.CONFIGURACOES,
    label: 'Configurações',
    icon: React.createElement(CogOutlineIcon, ICON_PROPS),
    route: ROUTES_PATH.SETTINGS.PERFIL,
    drawerType: DrawerType.CONFIGURACOES,
    type: MenuItemType.SETTINGS,
    hideLabel: true,
    trackEvent: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      categoryParent: null,
    },
  },
  {
    id: MenuItemId.PERFIL,
    label: 'Perfil',
    icon: React.createElement(UserOutlineIcon, ICON_PROPS),
    route: '#',
    type: MenuItemType.SETTINGS,
    trackEvent: {
      groupId: GroupIdEnum.GENERAL_GROUP,
      categoryParent: null,
    },
  },
];

export const SETTINGS_NAV_ITEMS = SETTINGS_MENU_ITEMS.filter(
  (item) => item.id !== MenuItemId.PERFIL && item.id !== MenuItemId.GAMIFICACAO,
);

export const PROFILE_MENU_ITEM = SETTINGS_MENU_ITEMS.find(
  (item) => item.id === MenuItemId.PERFIL,
);

export const GAMIFICATION_MENU_ITEM = SETTINGS_MENU_ITEMS.find(
  (item) => item.id === MenuItemId.GAMIFICACAO,
);

export const MOBILE_MENU_MAIN_ORDER: MenuItem['id'][] = [
  ...MAIN_MENU_ITEMS.filter((item) => !item.drawerType).map((item) => item.id),
  ...MAIN_MENU_ITEMS.filter((item) => item.drawerType).map((item) => item.id),
];

export const MOBILE_MENU_FOOTER: MobileMenuFooterItem[] = [
  {
    type: 'toggle',
    toggleKey: 'newMenuVersion',
    label: 'Nova versão do menu',
  },
  {
    type: 'item',
    id: 'manuais',
    label: 'Manuais de uso',
    path: ROUTES_PATH.EXTERNAL.MANUALS,
    icon: React.createElement(OpenInNewOutlineIcon, ICON_PROPS),
    externalLink: true,
  },
  {
    type: 'item',
    id: 'sair',
    label: 'Sair',
    path: '/logout',
    icon: React.createElement(LogoutOutlineIcon, ICON_PROPS),
  },
];

export const MENU_DRAWER_CONFIG: MenuDrawerConfig = {
  [DrawerType.PROCESSOS]: [
    {
      title: 'Ferramentas',
      items: [
        {
          icon: React.createElement(ResearchOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Consultas jurídicas',
          path: ROUTES_PATH.PROCESSOS.JUSFINDER_QUERY,
          parentDrawer: DrawerType.PROCESSOS,
          trackEvent: {
            groupId: GroupIdEnum.JUSFINDER_GROUP,
          },
        },
        {
          icon: React.createElement(BatchQueriesOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Consultas em lote',
          path: ROUTES_PATH.PROCESSOS.HISTORY_BATCH,
          parentDrawer: DrawerType.PROCESSOS,
          id: DrawerItemId.CONSULTAS_LOTE,
          trackEvent: {
            groupId: GroupIdEnum.JUSFINDER_GROUP,
          },
        },
        {
          icon: React.createElement(CalculatorOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Calculadoras',
          path: ROUTES_PATH.PROCESSOS.CALCULADORAS,
          parentDrawer: DrawerType.PROCESSOS,
          activePrefixes: CALCULADORAS_PATHS,
          trackEvent: {
            groupId: GroupIdEnum.CALCULATORS_GROUP,
          },
        },
        {
          icon: React.createElement(PetitionOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Modelos de petição',
          path: ROUTES_PATH.PROCESSOS.PETICOES,
          parentDrawer: DrawerType.PROCESSOS,
          trackEvent: {
            groupId: GroupIdEnum.PETITIONS_GROUP,
          },
        },
      ],
    },
    {
      title: 'Gestão de processos',
      items: [
        {
          icon: React.createElement(PaperOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Processos',
          path: ROUTES_PATH.PROCESSOS.MEUS_PROCESSOS,
          parentDrawer: DrawerType.PROCESSOS,
          trackEvent: {
            groupId: GroupIdEnum.JUSPROCESSOS_GROUP,
          },
        },
        {
          icon: React.createElement(TimerOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Prazos',
          path: ROUTES_PATH.PROCESSOS.PRAZOS,
          parentDrawer: DrawerType.PROCESSOS,
          trackEvent: {
            groupId: GroupIdEnum.DEADLINES_GROUP,
          },
        },
        {
          icon: React.createElement(AgendaOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Agenda',
          path: ROUTES_PATH.PROCESSOS.AGENDA,
          parentDrawer: DrawerType.PROCESSOS,
          id: DrawerItemId.AGENDA,
          trackEvent: {
            groupId: GroupIdEnum.DEADLINES_GROUP,
          },
        },
      ],
    },
  ],
  [DrawerType.CLIENTES]: [
    {
      title: 'Gestão de clientes',
      items: [
        {
          icon: React.createElement(SignatureOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Assinatura digital',
          path: ROUTES_PATH.CLIENTES.ASSINATURAS,
          parentDrawer: DrawerType.CLIENTES,
          trackEvent: {
            groupId: GroupIdEnum.PETITIONS_GROUP,
          },
        },
        {
          icon: React.createElement(ScanOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Clientes',
          path: ROUTES_PATH.CLIENTES.CLIENTES,
          parentDrawer: DrawerType.CLIENTES,
          trackEvent: {
            groupId: GroupIdEnum.CLIENTS_GROUP,
          },
        },
      ],
    },
    {
      title: 'Comunicação',
      items: [
        {
          icon: React.createElement(ChatOutlineIcon, DRAWER_ICON_PROPS),
          label: 'IA Whatsapp Assistente',
          path: ROUTES_PATH.JUSZAP.LANDING_PAGE,
          parentDrawer: DrawerType.CLIENTES,
          activePrefixes: JUSZAP_PATHS,
          trackEvent: {
            groupId: GroupIdEnum.JUSZAP_GROUP,
          },
        },
        {
          id: DrawerItemId.JUSMAIL,
          icon: React.createElement(MailOutlineIcon, DRAWER_ICON_PROPS),
          label: 'E-mail profissional',
          path: ROUTES_PATH.CLIENTES.SPACE_DOMAIN,
          parentDrawer: DrawerType.CLIENTES,
          trackEvent: {
            groupId: GroupIdEnum.JUSMAIL_GROUP,
          },
        },
      ],
    },
    {
      title: 'Novos clientes',
      items: [
        {
          icon: React.createElement(InviteOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Prospecção de clientes',
          path: ROUTES_PATH.CLIENTES.OPORTUNIDADES,
          parentDrawer: DrawerType.CLIENTES,
          trackEvent: {
            groupId: GroupIdEnum.JUSMATCH_GROUP,
          },
        },
      ],
    },
    {
      title: 'Marketing e conexões',
      items: [
        {
          icon: React.createElement(ScreenOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Site do escritório',
          path: ROUTES_PATH.CLIENTES.PAGE,
          parentDrawer: DrawerType.CLIENTES,
          trackEvent: {
            groupId: GroupIdEnum.JUSPAGE_GROUP,
          },
        },
        {
          icon: React.createElement(PeopleOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Comunidade',
          path: ROUTES_PATH.EXTERNAL.COMUNIDADE,
          parentDrawer: DrawerType.CLIENTES,
          externalLink: true,
          trackEvent: {
            groupId: GroupIdEnum.GENERAL_GROUP,
          },
        },
      ],
    },
  ],
  [DrawerType.CONFIGURACOES]: [
    {
      title: 'Gestão da conta',
      items: [
        {
          icon: React.createElement(CardOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Plano e pagamento',
          path: ROUTES_PATH.CONFIGURACOES.PERFIL,
          parentDrawer: DrawerType.CONFIGURACOES,
          id: DrawerItemId.PLANO_PAGAMENTO,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
        {
          icon: React.createElement(PeopleOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Usuários',
          path: ROUTES_PATH.CONFIGURACOES.USUARIOS,
          parentDrawer: DrawerType.CONFIGURACOES,
          id: DrawerItemId.USUARIOS,
          trackEvent: {
            groupId: GroupIdEnum.SUBUSERS_GROUP,
          },
        },
      ],
    },
    {
      title: 'Alterações visuais',
      items: [
        {
          icon: React.createElement('div'),
          label: 'Nova versão do menu',
          path: '',
          parentDrawer: DrawerType.CONFIGURACOES,
          toggleKey: 'newMenuVersion',
        },
      ],
    },
  ],
  [DrawerType.JUSFYPAY]: [
    {
      title: null,
      items: [
        {
          icon: React.createElement(PlusIcon, {
            ...DRAWER_ICON_PROPS,
            highlight: true,
            color: '#01AB7D',
          }),
          label: 'Nova cobrança',
          path: ROUTES_PATH.JUSFYPAY.NEW_CHARGE,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
          highlight: true,
        },
      ],
    },
    {
      title: 'Gestão financeira',
      items: [
        {
          icon: React.createElement(SettingsGridOutlineIcon, DRAWER_ICON_PROPS),
          label: 'Dashboard financeiro',
          path: ROUTES_PATH.JUSFYPAY.DASHBOARD,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
        {
          icon: React.createElement(LinkIcon, DRAWER_ICON_PROPS),
          label: 'Links de cobrança',
          path: ROUTES_PATH.JUSFYPAY.PAYMENT_LINKS,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
        {
          icon: React.createElement(CurrencyIcon, {
            ...DRAWER_ICON_PROPS,
            size: 17,
          }),
          label: 'Pagamentos',
          path: ROUTES_PATH.JUSFYPAY.PAYMENTS,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
        {
          icon: React.createElement(WalletIcon, {
            ...DRAWER_ICON_PROPS,
            size: 17,
          }),
          label: 'Minha carteira',
          path: ROUTES_PATH.JUSFYPAY.WALLET,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
        {
          icon: React.createElement(IdOutlineIcon, {
            ...DRAWER_ICON_PROPS,
            size: 18,
          }),
          label: 'Minha conta Jusfy Pay',
          path: ROUTES_PATH.JUSFYPAY.PROFILE,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
      ],
    },
    {
      title: 'Seu CNPJ',
      items: [
        {
          icon: React.createElement(ContabilidadeIcon, {
            ...DRAWER_ICON_PROPS,
            size: 18,
          }),
          label: 'Contabilidade',
          path: ROUTES_PATH.CONTABILIDADE.LANDING_PAGE,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
      ],
    },
    {
      title: 'Saiba mais',
      items: [
        {
          icon: React.createElement(AnnouncementIcon, {
            ...DRAWER_ICON_PROPS,
            size: 18,
          }),
          label: 'Conheça a Jusfy Pay',
          path: ROUTES_PATH.JUSFYPAY.BASE,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
        {
          icon: React.createElement(HelpIcon, {
            ...DRAWER_ICON_PROPS,
            size: 18,
          }),
          label: 'Dúvidas frequentes',
          path: ROUTES_PATH.JUSFYPAY.FAQ,
          parentDrawer: DrawerType.JUSFYPAY,
          trackEvent: {
            groupId: GroupIdEnum.JUSFYPAY_GROUP,
          },
        },
      ],
    },
  ],
};

const ROUTE_PREFIX_TO_DRAWER: [string, DrawerType][] = [
  ['/perfil', DrawerType.CONFIGURACOES],
  ['/configuracoes', DrawerType.CONFIGURACOES],
  ['/jusfinder', DrawerType.PROCESSOS],
  ['/assinaturas', DrawerType.CLIENTES],
  ['/jusfypay', DrawerType.JUSFYPAY],
];

const getAllMenuItems = (): MenuItem[] => [
  ...MAIN_MENU_ITEMS,
  ...SETTINGS_MENU_ITEMS,
];

const isExternalLink = (path: string): boolean =>
  path.startsWith('http://') || path.startsWith('https://');

export const getDrawerConfig = (drawerType: DrawerType): DrawerSection[] =>
  MENU_DRAWER_CONFIG[drawerType] || [];

export const getDrawerTitle = (drawerType: DrawerType): string => {
  const item = getAllMenuItems().find((i) => i.drawerType === drawerType);
  return item?.label ?? drawerType;
};

export const getRoutePrefixes = (
  pathOrRoute: string | undefined,
  activePrefixes?: string[] | null,
): string[] =>
  [pathOrRoute, ...(activePrefixes ?? [])].filter((p): p is string => !!p);

export const findDrawerByRoute = (route: string): DrawerType | null => {
  for (const [drawerType, sections] of Object.entries(MENU_DRAWER_CONFIG)) {
    for (const section of sections) {
      for (const item of section.items) {
        if (!item.path || item.externalLink || isExternalLink(item.path))
          continue;
        const prefixes = getRoutePrefixes(item.path, item.activePrefixes);
        const matchesPrefix = prefixes.some(
          (prefix) => route === prefix || route.startsWith(prefix + '/'),
        );
        if (matchesPrefix) return drawerType as DrawerType;
      }
    }
  }
  for (const [prefix, drawer] of ROUTE_PREFIX_TO_DRAWER) {
    if (route === prefix || route.startsWith(prefix + '/')) {
      return drawer;
    }
  }
  return null;
};
