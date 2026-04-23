import React from 'react';
import {
  MOBILE_MENU_FOOTER,
  MOBILE_MENU_MAIN_ORDER,
  getDrawerTitle,
  DrawerType,
  type ResolvedMenuItem,
  type ResolvedMenuDrawerConfig,
  type ResolvedDrawerItem,
  type SidebarBadgeConfig,
} from '../../MenuConfig';
import { GroupIdEnum } from 'app/modules/Segment/types';
import { ROUTES_PATH } from 'app/constants/Routes';

export interface FlattenedMenuEntryItem {
  type: 'item';
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
  externalLink?: boolean;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  iconColor?: string;
  badge?: SidebarBadgeConfig;
  categoryParent?: string | null;
  groupId: GroupIdEnum;
}

export interface FlattenedMenuEntrySectionTitle {
  type: 'sectionTitle';
  id: string;
  label: string;
}

export interface FlattenedMenuEntryToggle {
  type: 'toggle';
  id: string;
  label: string;
  toggleKey: 'newMenuVersion';
}

export interface FlattenedMenuEntryDivider {
  type: 'divider';
  id: string;
}

export type FlattenedMenuEntry =
  | FlattenedMenuEntryItem
  | FlattenedMenuEntrySectionTitle
  | FlattenedMenuEntryToggle
  | FlattenedMenuEntryDivider;

const DRAWER_AS_SECTION_TITLE: DrawerType[] = [
  DrawerType.PROCESSOS,
  DrawerType.CLIENTES,
  DrawerType.CONFIGURACOES,
  DrawerType.JUSFYPAY
];

function isNewMenuToggle(
  item: { toggleKey?: string },
  drawerType: DrawerType,
): boolean {
  return (
    item.toggleKey === 'newMenuVersion' &&
    drawerType === DrawerType.CONFIGURACOES
  );
}

export function getFlattenedMenuItems(params: {
  mainItems: ResolvedMenuItem[];
  settingsItems: ResolvedMenuItem[];
  drawerConfig: ResolvedMenuDrawerConfig;
  gamificationMenuItem: ResolvedMenuItem | null;
  gamificationMobileLabel: string;
  gamificationMobileIcon: React.ReactNode;
  showNewMenuVersionToggle?: boolean;
}): FlattenedMenuEntry[] {
  const {
    mainItems,
    settingsItems,
    drawerConfig,
    gamificationMenuItem,
    gamificationMobileLabel,
    gamificationMobileIcon,
    showNewMenuVersionToggle = true,
  } = params;
  const result: FlattenedMenuEntry[] = [];
  let index = 0;

  const pushItem = (p: {
    icon: React.ReactNode;
    label: string;
    path: string;
    groupId: GroupIdEnum;
    externalLink?: boolean;
    iconPosition?: 'left' | 'right';
    iconSize?: number;
    iconColor?: string;
    badge?: SidebarBadgeConfig;
    categoryParent?: string | null;
  }) => {
    const {
      icon,
      label,
      path,
      groupId,
      externalLink,
      iconPosition,
      iconSize,
      iconColor,
      badge,
      categoryParent,
    } = p;
    result.push({
      type: 'item',
      id: `mobile-${index++}`,
      icon,
      label,
      path,
      groupId,
      externalLink,
      ...(iconPosition && { iconPosition }),
      ...(iconSize !== undefined && { iconSize }),
      ...(iconColor && { iconColor }),
      ...(badge && { badge }),
      ...(categoryParent !== undefined && { categoryParent }),
    });
  };

  const pushSectionTitle = (label: string) => {
    result.push({
      type: 'sectionTitle',
      id: `mobile-section-${index++}`,
      label,
    });
  };

  const pushToggle = (label: string) => {
    result.push({
      type: 'toggle',
      id: `mobile-toggle-${index++}`,
      label,
      toggleKey: 'newMenuVersion',
    });
  };

  const pushDivider = () => {
    result.push({
      type: 'divider',
      id: `mobile-divider-${index++}`,
    });
  };

  const processItems = (
    items: ResolvedMenuItem[],
    drawerConfig: ResolvedMenuDrawerConfig,
  ) => {
    for (const item of items) {
      if (item.show === false) continue;

      const asSectionTitle =
        item.drawerType &&
        DRAWER_AS_SECTION_TITLE.includes(item.drawerType);

      if (asSectionTitle) {
        pushSectionTitle(item.label);
      } else {
        const groupId = item.trackEvent?.groupId ?? GroupIdEnum.GENERAL_GROUP;
        pushItem({
          icon: item.icon,
          label: item.label,
          path: item.route,
          groupId,
          iconSize: 16,
          badge: !item.drawerType ? item.badge : undefined,
        });
      }

      if (item.drawerType) {
        const sections = drawerConfig[item.drawerType] ?? [];
        const drawerTitle = getDrawerTitle(item.drawerType);
        for (const section of sections) {
          for (const sub of section.items) {
            if ((sub as ResolvedDrawerItem).show === false) continue;
            if (isNewMenuToggle(sub, item.drawerType!)) {
              continue;
            }
            const path = typeof sub.path === 'string' ? sub.path : '#';
            const external =
              sub.externalLink ||
              path.startsWith('http://') ||
              path.startsWith('https://');
            const resolvedSub = sub as ResolvedDrawerItem;
            const groupId =
              resolvedSub.trackEvent?.groupId ?? GroupIdEnum.GENERAL_GROUP;
            pushItem({
              icon: resolvedSub.icon,
              label: resolvedSub.label,
              path,
              groupId,
              externalLink: external,
              badge: resolvedSub.badge,
              categoryParent: drawerTitle,
            });
          }
        }
      }
    }
  };

  const orderedMainItems = MOBILE_MENU_MAIN_ORDER.map((id) =>
    mainItems.find((i) => i.id === id),
  ).filter((item): item is ResolvedMenuItem => item != null);

  processItems(orderedMainItems, drawerConfig);
  processItems(settingsItems, drawerConfig);
  if (gamificationMenuItem && gamificationMenuItem.show !== false) {
    const groupId =
      gamificationMenuItem.trackEvent?.groupId ?? GroupIdEnum.GENERAL_GROUP;
    pushDivider();
    pushItem({
      icon: gamificationMobileIcon,
      label: gamificationMobileLabel,
      path: ROUTES_PATH.GAMIFICATION.BASE,
      groupId,
      badge: gamificationMenuItem.badge,
    });
  }
  pushDivider();
  for (const entry of MOBILE_MENU_FOOTER) {
    if (entry.type === 'toggle') {
      if (showNewMenuVersionToggle) {
        pushToggle(entry.label);
      }
    } else {
      const isManuais = entry.id === 'manuais';
      pushItem({
        icon: entry.icon,
        label: entry.label,
        path: entry.path,
        groupId: GroupIdEnum.GENERAL_GROUP,
        externalLink: entry.externalLink,
        iconPosition: 'right',
        iconSize: 16,
        iconColor: isManuais ? '#1CB59F' : undefined,
        categoryParent: null,
      });
    }
  }

  return result;
}
