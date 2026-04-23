import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import useSubscriptionOrCredits from 'app/hooks/useSubscriptionOrCredits';
import useUserFeatureFlag from 'app/hooks/useUserFeatureFlag';
import useFeatureFlag from 'app/hooks/useFeatureFlag';
import useFeatureFlagWithContext from 'app/hooks/useFeatureFlagWithContext';
import { FEATURE_FLAGS } from 'app/constants/FeatureFlag';
import {
  MAIN_MENU_ITEMS,
  SETTINGS_MENU_ITEMS,
  MENU_DRAWER_CONFIG,
  NEW_TAGS,
  DrawerType,
  MenuItemId,
  DrawerItemId,
  type SidebarBadgeConfig,
  type ResolvedMenuItem,
  type ResolvedMenuDrawerConfig,
  type ResolvedDrawerItem,
  type ResolvedDrawerSection,
  type DrawerItemInput,
  type MenuDrawerConfig,
  SidebarBadgeType,
} from '../MenuConfig';
import { config } from 'config/env';
import type { RootState } from 'redux/types';
import { getConfigEmail } from 'app/pages/JusSpace/api';
import { ROUTES_PATH } from 'app/constants/Routes';

const SUBUSER_DISABLED_TOOLTIP =
  'Esta funcionalidade não está disponível em seu plano';

const resolveNewTagBadge = (
  noveltyDate?: Date,
): SidebarBadgeConfig | undefined => {
  if (!noveltyDate) return undefined;
  const now = new Date();
  const endMs =
    noveltyDate.getTime() +
    config.sidebar.newTagDurationDays * 24 * 60 * 60 * 1000;
  if (now < noveltyDate || now.getTime() >= endMs) return undefined;

  return { kind: SidebarBadgeType.NEW_TAG } as const;
};

const resolveSidebarBadge = (key?: string): SidebarBadgeConfig | undefined => {
  const found = NEW_TAGS.find((t) => t.routeOrPathKey === key);
  const noveltyDate = found?.noveltyDate;
  return resolveNewTagBadge(noveltyDate);
};

const resolveDrawerBadge = (
  drawerType?: DrawerType | null,
  context?: {
    isRestricted: boolean;
    isLoading: boolean;
    enableSubuserCreation: boolean;
    isNewSidebarBannerEnabled: boolean;
    canUseJusagenda: boolean;
    enabledBatchQueries: boolean;
    hasDomain: boolean;
  },
): SidebarBadgeConfig | undefined => {
  if (!drawerType || !context) return undefined;
  const sections = (MENU_DRAWER_CONFIG as MenuDrawerConfig)[drawerType] ?? [];

  let notificationCount = 0;
  let hasNewTag = false;

  for (const section of sections) {
    for (const item of section.items) {
      const resolvedItem = resolveDrawerItem(item, context);
      if (!resolvedItem.show || !resolvedItem.badge) continue;

      if (resolvedItem.badge.kind === SidebarBadgeType.NOTIFICATION_TAG) {
        notificationCount += Math.max(0, resolvedItem.badge.count);
      }

      if (resolvedItem.badge.kind === SidebarBadgeType.NEW_TAG) {
        hasNewTag = true;
      }
    }
  }

  if (notificationCount > 0) {
    return {
      kind: SidebarBadgeType.NOTIFICATION_TAG,
      count: notificationCount,
    };
  }

  if (hasNewTag) {
    return { kind: SidebarBadgeType.NEW_TAG };
  }

  return undefined;
};

function resolveMenuItem(
  item: ResolvedMenuItem,
  context: {
    isRestricted: boolean;
    isLoading: boolean;
    badge?: SidebarBadgeConfig;
  },
): ResolvedMenuItem {
  const globalDisabled = context.isRestricted && !context.isLoading;
  const alwaysEnabledForRegularization =
    item.id === MenuItemId.CONFIGURACOES ||
    item.id === MenuItemId.PERFIL ||
    item.id === MenuItemId.GAMIFICACAO;

  return {
    ...item,
    show: true,
    disabled: alwaysEnabledForRegularization ? false : globalDisabled,
    disabledTooltip: undefined,
    badge: context.badge,
  };
}

function resolveDrawerItem(
  item: DrawerItemInput,
  context: {
    isRestricted: boolean;
    isLoading: boolean;
    enableSubuserCreation: boolean;
    isNewSidebarBannerEnabled: boolean;
    canUseJusagenda: boolean;
    enabledBatchQueries: boolean;
    hasDomain: boolean;
  },
): ResolvedDrawerItem {
  const globalDisabled = context.isRestricted && !context.isLoading;
  const alwaysEnabledForRegularization =
    item.id === DrawerItemId.PLANO_PAGAMENTO;
  let disabled = alwaysEnabledForRegularization ? false : globalDisabled;
  let disabledTooltip: string | undefined;
  let show =
    item.toggleKey === 'newMenuVersion'
      ? context.isNewSidebarBannerEnabled
      : true;

  if (item.id === DrawerItemId.AGENDA && !context.canUseJusagenda) {
    show = false;
  }

  if (item.id === DrawerItemId.CONSULTAS_LOTE) {
    show = !!context.enabledBatchQueries;
  }

  if (item.id === DrawerItemId.USUARIOS && !context.enableSubuserCreation) {
    disabled = true;
    disabledTooltip = SUBUSER_DISABLED_TOOLTIP;
  }

  let resolvedPath = item.path;

  if (item.id === DrawerItemId.JUSMAIL && context.hasDomain) {
    resolvedPath = ROUTES_PATH.CLIENTES.JUSMAIL_REDIRECT;
  }

  const badge = item.hideBadge
    ? undefined
    : item.badge ?? resolveSidebarBadge(resolvedPath);

  return {
    ...item,
    path: resolvedPath,
    show,
    disabled,
    disabledTooltip,
    badge,
  };
}

export function useResolvedMenu() {
  const { isRestricted, isLoading } = useSubscriptionOrCredits();
  const subscription = useSelector(
    (state: {
      subscription: { subscription_status?: { info?: { plan?: string } } };
    }) => state.subscription?.subscription_status,
  );
  const plan = subscription?.info?.plan ?? '';
  const mayUseJusagenda = useSelector(
    (state: RootState) => state.auth.user?.may_use_jusagenda ?? false,
  );
  const clientId = useSelector(
    (state: RootState) => state.auth.user?.client_id,
  );

  const { isFeatureFlagEnable: enabledBatchQueries } = useUserFeatureFlag(
    FEATURE_FLAGS.PERMISSION.ENABLED_BATCHQUERIES,
  );
  const { isFeatureFlagEnable: enableSubuserCreation } =
    useFeatureFlagWithContext(
      FEATURE_FLAGS.PERMISSION.ENABLE_SUBUSER_CREATION,
      { plan },
    );
  const { isFeatureFlagEnable: isNewSidebarBannerEnabled } = useFeatureFlag(
    FEATURE_FLAGS.KILL_SWITCH.NEW_SIDEBAR_BANNER,
  );
  const { isFeatureFlagEnable: isGamificationEnabled } =
    useFeatureFlagWithContext(FEATURE_FLAGS.RELEASE.GAMIFICATION, {
      clientId: clientId ?? '',
    });

  const [hasDomain, setHasDomain] = useState(false);

  useEffect(() => {
    getConfigEmail()
      .then((response) => {
        setHasDomain(!!response?.data);
      })
      .catch(() => {
        setHasDomain(false);
      });
  }, []);

  const context = useMemo(
    () => ({
      isRestricted,
      isLoading,
      enableSubuserCreation,
      enabledBatchQueries,
      isNewSidebarBannerEnabled,
      canUseJusagenda: mayUseJusagenda,
      hasDomain,
    }),
    [
      isRestricted,
      isLoading,
      enableSubuserCreation,
      enabledBatchQueries,
      isNewSidebarBannerEnabled,
      mayUseJusagenda,
      hasDomain,
    ],
  );

  const menuItemContext = useMemo(
    () => ({
      isRestricted: context.isRestricted,
      isLoading: context.isLoading,
    }),
    [context.isRestricted, context.isLoading],
  );

  const mainItems: ResolvedMenuItem[] = useMemo(
    () =>
      MAIN_MENU_ITEMS.map((item) =>
        resolveMenuItem(
          { ...item, show: true, disabled: false },
          {
            ...menuItemContext,
            badge:
              resolveSidebarBadge(item.route) ??
              resolveDrawerBadge(item.drawerType, context),
          },
        ),
      ),
    [menuItemContext, context],
  );

  const settingsItems: ResolvedMenuItem[] = useMemo(
    () =>
      SETTINGS_MENU_ITEMS.filter(
        (item) =>
          item.id !== MenuItemId.PERFIL &&
          item.id !== MenuItemId.GAMIFICACAO,
      ).map((item) =>
        resolveMenuItem(
          { ...item, show: true, disabled: false },
          {
            ...menuItemContext,
            badge: undefined,
          },
        ),
      ),
    [menuItemContext],
  );

  const drawerConfig: ResolvedMenuDrawerConfig = useMemo(() => {
    const resolveSections = (
      sections: { title: string | null; items: DrawerItemInput[] }[],
    ): ResolvedDrawerSection[] =>
      sections.map((section) => ({
        title: section.title || "",
        items: section.items
          .map((item) =>
            resolveDrawerItem(item, {
              isRestricted: context.isRestricted,
              isLoading: context.isLoading,
              enableSubuserCreation: context.enableSubuserCreation,
              isNewSidebarBannerEnabled: context.isNewSidebarBannerEnabled,
              canUseJusagenda: context.canUseJusagenda,
              enabledBatchQueries: context.enabledBatchQueries,
              hasDomain: context.hasDomain,
            }),
          )
          .filter((item) => item.show),
      }));

    return {
      [DrawerType.PROCESSOS]: resolveSections(MENU_DRAWER_CONFIG.processos),
      [DrawerType.CLIENTES]: resolveSections(MENU_DRAWER_CONFIG.clientes),
      [DrawerType.CONFIGURACOES]: resolveSections(
        MENU_DRAWER_CONFIG.configuracoes,
      ),
      [DrawerType.JUSFYPAY]: resolveSections(MENU_DRAWER_CONFIG.jusfypay),  
    };
  }, [
    context.isRestricted,
    context.isLoading,
    context.enableSubuserCreation,
    context.isNewSidebarBannerEnabled,
    context.canUseJusagenda,
    context.enabledBatchQueries,
    context.hasDomain,
  ]);

  const profileMenuItem = useMemo(() => {
    const foundProfile = SETTINGS_MENU_ITEMS.find(
      (item) => item.id === MenuItemId.PERFIL,
    );
    return foundProfile
      ? {
          ...foundProfile,
          show: true,
          disabled: false,
          disabledTooltip: undefined,
        }
      : null;
  }, []);

  const gamificationMenuItem = useMemo(() => {
    const found = SETTINGS_MENU_ITEMS.find(
      (item) => item.id === MenuItemId.GAMIFICACAO,
    );
    return found
      ? {
          ...found,
          show: isGamificationEnabled,
          disabled: false,
          disabledTooltip: undefined,
        }
      : null;
  }, [isGamificationEnabled]);

  return {
    mainItems,
    settingsItems,
    drawerConfig,
    profileMenuItem,
    gamificationMenuItem,
    isNewSidebarBannerEnabled,
  };
}
