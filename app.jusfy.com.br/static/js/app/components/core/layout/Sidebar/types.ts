import type { ReactNode } from 'react';
import type { GroupIdEnum } from 'app/modules/Segment/types';

export enum DrawerType {
  PROCESSOS = 'processos',
  CLIENTES = 'clientes',
  CONFIGURACOES = 'configuracoes',
  JUSFYPAY = 'jusfypay',
}

export enum MenuItemId {
  DASHBOARD = 'dashboard',
  PROCESSOS = 'processos',
  CLIENTES = 'clientes',
  JUSFYPAY = 'jusfypay',
  IA_JUSFY = 'ia-jusfy',
  GAMIFICACAO = 'gamificacao',
  CONFIGURACOES = 'configuracoes',
  PERFIL = 'perfil',
}

export enum DrawerItemId {
  USUARIOS = 'usuarios',
  CONSULTAS_LOTE = 'consultas-lote',
  PLANO_PAGAMENTO = 'plano-pagamento',
  AGENDA = 'agenda',
  JUSMAIL = 'jusmail',
}

export enum MenuItemType {
  MAIN = 'main',
  SETTINGS = 'settings',
  DRAWER = 'drawer',
}

export enum SidebarIconVariant {
  DEFAULT = 'default',
  REWARD_BADGE = 'reward-badge',
}

export enum SidebarBadgeType {
  NEW_TAG = 'newTag',
  NOTIFICATION_TAG = 'notificationTag',
}

export interface MenuItem {
  id: MenuItemId;
  label: string;
  icon: ReactNode;
  route: string;
  drawerType?: DrawerType | null;
  type?: MenuItemType;
  activePrefixes?: string[];
  variant?: SidebarIconVariant;
  tooltip?: string | boolean;
  hideLabel?: boolean;
  trackEvent?: {
    groupId: GroupIdEnum;
    categoryParent?: string | null;
  };
}

export type SidebarBadgeConfig =
  | { kind: SidebarBadgeType.NEW_TAG }
  | { kind: SidebarBadgeType.NOTIFICATION_TAG; count: number };

export interface ResolvedMenuItem extends MenuItem {
  show: boolean;
  disabled: boolean;
  disabledTooltip?: string;
  badge?: SidebarBadgeConfig;
}

export interface DrawerItemInput {
  icon: ReactNode;
  label: string;
  path: string;
  parentDrawer: DrawerType;
  id?: DrawerItemId;
  externalLink?: boolean;
  onClick?: () => void;
  toggle?: ReactNode;
  toggleKey?: string;
  activePrefixes?: string[];
  trackEvent?: {
    groupId: GroupIdEnum;
    categoryParent?: string | null;
  };
  hideBadge?: boolean;
  highlight?: boolean;
  badge?: SidebarBadgeConfig;
}

export type NewTagConfig = {
  routeOrPathKey: string;
  noveltyDate: Date;
};

export interface ResolvedDrawerItem extends DrawerItemInput {
  show: boolean;
  disabled: boolean;
  disabledTooltip?: string;
  badge?: SidebarBadgeConfig;
}

export interface DrawerSection {
  title: string | null;
  items: DrawerItemInput[];
}

export interface ResolvedDrawerSection {
  title: string;
  items: ResolvedDrawerItem[];
}

export interface MenuDrawerConfig {
  processos: DrawerSection[];
  clientes: DrawerSection[];
  configuracoes: DrawerSection[];
  jusfypay: DrawerSection[];
}

export interface ResolvedMenuDrawerConfig {
  processos: ResolvedDrawerSection[];
  clientes: ResolvedDrawerSection[];
  configuracoes: ResolvedDrawerSection[];
}

export type MobileMenuFooterItem =
  | { type: 'toggle'; toggleKey: 'newMenuVersion'; label: string }
  | {
      type: 'item';
      id: string;
      label: string;
      path: string;
      icon: ReactNode;
      externalLink?: boolean;
    };

