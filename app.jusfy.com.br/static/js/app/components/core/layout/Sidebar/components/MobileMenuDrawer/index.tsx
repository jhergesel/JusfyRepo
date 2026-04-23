import {
  MessageOutlineIcon,
  ReturnOutlineIcon,
  SettingsGridOutlineIcon,
} from 'app/components/core/icons';
import Toggle from 'app/components/flat/ui/Toggle';
import ModalConfirmation from 'app/components/flat/ui/Modals/ModalConfirmation';
import ModalLoading from 'app/components/flat/ui/Modals/ModalLoading';
import { toAbsoluteUrl } from '../../../../../../../_metronic/_helpers/AssetsHelpers';
import { PERFIL_TEXTS } from 'app/pages/Perfil/texts';
import React, { useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useGamificationQuery } from 'app/pages/Gamification/hooks/useGamificationQuery';
import { getGamificationLevelPresentation } from 'app/helpers/gamification/getGamificationLevelPresentation';
import GamificationMobileMenuIcon from '../GamificationMenuIcon/GamificationMobileMenuIcon';
import MenuDrawerItem from '../MenuDrawerItem';
import {
  getFlattenedMenuItems,
  type FlattenedMenuEntry,
} from './getFlattenedMenuItems';
import { useResolvedMenu, useMenuVersionToggle } from '../../hooks';
import { trackMenuItemSelected, trackMenuVersionToggled } from '../../trackMenuEvents';
import { NavGroupTitle } from './styles';
import * as S from './styles';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';

const ICON_SIZE = 38;
const ICON_COLOR = '#1CB59F';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onNewMenuVersionChange?: () => void;
}

function MobileMenuDrawer({
  isOpen,
  onClose,
  onNavigate,
  onNewMenuVersionChange,
}: MobileMenuDrawerProps) {
  const {
    mainItems,
    settingsItems,
    drawerConfig,
    gamificationMenuItem,
    isNewSidebarBannerEnabled,
  } = useResolvedMenu();
  const { userStats, levels, loading: gamificationLoading } =
    useGamificationQuery();
  const gamificationPresentation = useMemo(
    () => getGamificationLevelPresentation(userStats, levels),
    [userStats, levels],
  );
  const gamificationMobileLabel = useMemo(() => {
    if (gamificationLoading) {
      return '';
    }
    return `Nível ${gamificationPresentation.currentLevelIndex + 1}: ${gamificationPresentation.currentLevelConfig.name}`;
  }, [gamificationLoading, gamificationPresentation]);
  const gamificationMobileIcon = useMemo(
    () => (
      <GamificationMobileMenuIcon
        imageSrc={gamificationPresentation.imageSrc}
        imageAlt={gamificationPresentation.imageAlt}
        loading={gamificationLoading}
      />
    ),
    [
      gamificationPresentation.imageSrc,
      gamificationPresentation.imageAlt,
      gamificationLoading,
    ],
  );
  const items = useMemo(
    () =>
      getFlattenedMenuItems({
        mainItems,
        settingsItems,
        drawerConfig,
        gamificationMenuItem,
        gamificationMobileLabel,
        gamificationMobileIcon,
        showNewMenuVersionToggle: isNewSidebarBannerEnabled,
      }),
    [
      mainItems,
      settingsItems,
      drawerConfig,
      gamificationMenuItem,
      gamificationMobileLabel,
      gamificationMobileIcon,
      isNewSidebarBannerEnabled,
    ],
  );
  const {
    isNewMenuVersionEnabled,
    showDisableNewMenuModal,
    showLoadingModal,
    apiComplete,
    apiError,
    handleToggleChange,
    handleDisableNewMenuModalClose,
    handleDisableNewMenuConfirm,
    handleLoadingComplete,
  } = useMenuVersionToggle({ onNewMenuVersionChange });

  useEffect(() => {
    if (!apiError) return;

    toast('Não foi possível atualizar sua preferência de menu. Tente novamente.');
  }, [apiError]);

  const handleItemClick = (entry: Extract<FlattenedMenuEntry, { type: 'item' }>) => {
    trackMenuItemSelected({
      groupId: entry.groupId,
      itemName: entry.label,
      categoryParent: entry.categoryParent ?? null,
      menuVersion: MENU_VERSION_VALUES.v2,
    });
    if (entry.externalLink) {
      window.open(entry.path, '_blank', 'noopener,noreferrer');
    } else {
      onNavigate(entry.path);
    }
    onClose();
  };

  const renderEntry = (entry: FlattenedMenuEntry) => {
    if (entry.type === 'sectionTitle') {
      return <NavGroupTitle key={entry.id}>{entry.label}</NavGroupTitle>;
    }
    if (entry.type === 'divider') {
      return <S.Divider key={entry.id} />;
    }
    if (entry.type === 'toggle') {
      return (
        <MenuDrawerItem
          key={entry.id}
          icon={React.createElement('div')}
          label={entry.label}
          isCollapsed={false}
          onClick={() => {}}
          togglePosition="left"
          toggle={
            <Toggle
              checked={isNewMenuVersionEnabled}
              onChange={(value) => {
                if (value) {
                  trackMenuVersionToggled(MENU_VERSION_VALUES.v1);
                }
                handleToggleChange(value);
              }}
              variant="menu"
            />
          }
        />
      );
    }
    const icon =
      entry.iconSize !== undefined && React.isValidElement(entry.icon)
        ? React.cloneElement(
            entry.icon as React.ReactElement<{ size?: number; color?: string }>,
            {
              size: entry.iconSize,
              ...(entry.iconColor && { color: entry.iconColor }),
            },
          )
        : entry.icon;
    return (
      <MenuDrawerItem
        key={entry.id}
        icon={icon}
        label={entry.label}
        isCollapsed={false}
        route={entry.externalLink ? undefined : entry.path}
        onClick={() => handleItemClick(entry)}
        iconPosition={entry.iconPosition}
        badge={entry.badge}
      />
    );
  };

  if (!isOpen) return null;

  return (
    <>
      <S.Overlay onClick={onClose} aria-hidden />
      <S.Panel $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
          <S.Logo
            src={toAbsoluteUrl('/media/logos/logo.svg')}
            alt="Jusfy"
          />
        <S.ContentWrapper>
          {items.map(renderEntry)}
        </S.ContentWrapper>
      </S.Panel>
      <ModalConfirmation
        isOpen={showDisableNewMenuModal}
        onClose={handleDisableNewMenuModalClose}
        onConfirm={() => {
          trackMenuVersionToggled(MENU_VERSION_VALUES.v1);
          handleDisableNewMenuConfirm();
        }}
        title={PERFIL_TEXTS.modalConfirmationError.title}
        description={PERFIL_TEXTS.modalConfirmationError.description}
        primaryButtonLabel={PERFIL_TEXTS.modalConfirmationError.primaryButtonLabel}
      />
      <ModalLoading
        isOpen={showLoadingModal}
        duration={5000}
        title={PERFIL_TEXTS.newMenuModalLoading.title}
        subtitle={PERFIL_TEXTS.newMenuModalLoading.subtitle}
        icons={[
          <ReturnOutlineIcon key="return" size={ICON_SIZE} color={ICON_COLOR} />,
          <SettingsGridOutlineIcon key="settings" size={ICON_SIZE} color={ICON_COLOR} />,
          <MessageOutlineIcon key="message" size={ICON_SIZE} color={ICON_COLOR} />,
        ]}
        externalComplete={apiComplete}
        onComplete={handleLoadingComplete}
      />
    </>
  );
}

export default MobileMenuDrawer;
