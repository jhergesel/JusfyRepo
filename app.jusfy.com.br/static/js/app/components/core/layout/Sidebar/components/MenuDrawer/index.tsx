import {
  CollapseOutlineIcon,
  ExpandOutlineIcon,
  MessageOutlineIcon,
  ReturnOutlineIcon,
  SettingsGridOutlineIcon,
} from 'app/components/core/icons';
import Toggle from 'app/components/flat/ui/Toggle';
import ModalConfirmation from 'app/components/flat/ui/Modals/ModalConfirmation';
import ModalLoading from 'app/components/flat/ui/Modals/ModalLoading';
import { PERFIL_TEXTS } from 'app/pages/Perfil/texts';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import MenuDrawerItem from '../MenuDrawerItem';
import { SidebarTooltipStyle } from '../SidebarIcon/styles';
import {
  getDrawerTitle,
  DrawerType,
  type ResolvedMenuDrawerConfig,
  type ResolvedDrawerItem,
} from '../../MenuConfig';
import { trackMenuItemSelected, trackMenuVersionToggled } from '../../trackMenuEvents';
import { GroupIdEnum } from 'app/modules/Segment/types';
import * as S from './styles';
import { USER_PREFERENCES_QUERY_KEY, useUserPreferences } from 'app/services/userPreferences';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';

interface MenuDrawerProps {
  isOpen: boolean;
  isCollapsed: boolean;
  toggleMenuCollapsed: () => void;
  currentAsideWidth: number;
  menuDrawerExtendedWidth: number;
  menuDrawerCollapsedWidth: number;
  isFloating?: boolean;
  activeDrawerType?: DrawerType;
  drawerConfig: ResolvedMenuDrawerConfig;
  onNavigate: (path: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onNewMenuVersionChange?: (value: boolean) => void;
  onMenuVersionModalStateChange?: (isOpen: boolean) => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  isCollapsed,
  toggleMenuCollapsed,
  currentAsideWidth,
  menuDrawerExtendedWidth,
  menuDrawerCollapsedWidth,
  isFloating = false,
  activeDrawerType = DrawerType.PROCESSOS,
  drawerConfig: resolvedDrawerConfig,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
  onNewMenuVersionChange,
  onMenuVersionModalStateChange,
}) => {
  const currentWidth = isCollapsed
    ? menuDrawerCollapsedWidth
    : menuDrawerExtendedWidth;
  const sections = resolvedDrawerConfig[activeDrawerType] ?? [];
  const [showDisableNewMenuModal, setShowDisableNewMenuModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [apiComplete, setApiComplete] = useState(false);
  const queryClient = useQueryClient();
  const {
    updateUserPreferences,
    updateUserPreferencesAsync,
  } = useUserPreferences();

  useEffect(() => {
    const anyModalOpen = showDisableNewMenuModal || showLoadingModal;
    onMenuVersionModalStateChange?.(anyModalOpen);
  }, [showDisableNewMenuModal, showLoadingModal, onMenuVersionModalStateChange]);

  return (
    <>
      <SidebarTooltipStyle />
      <S.MenuDrawerWrapper
        isOpen={isOpen}
        currentAsideWidth={currentAsideWidth}
        currentWidth={currentWidth}
        isCollapsed={isCollapsed}
        isFloating={isFloating}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <S.MenuDrawerHeader>
          {!isCollapsed && (
            <S.MenuDrawerTitle>
              {getDrawerTitle(activeDrawerType)}
            </S.MenuDrawerTitle>
          )}

          {!isFloating && (
            <S.ToggleButton
              onClick={toggleMenuCollapsed}
              aria-label={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
              aria-expanded={!isCollapsed}
              data-tooltip-id="menu-drawer-tooltip"
              data-tooltip-content={isCollapsed ? 'Expandir' : 'Recolher'}
              data-tooltip-place="right"
            >
              {isCollapsed ? (
                <ExpandOutlineIcon size={18} />
              ) : (
                <CollapseOutlineIcon size={18} />
              )}
            </S.ToggleButton>
          )}
        </S.MenuDrawerHeader>

        <S.DrawerNavWrapper isCollapsed={isCollapsed}>
          {sections.map((section) => (
            <S.NavGroup key={section.title} isCollapsed={isCollapsed}>
              {!isCollapsed && <S.NavGroupTitle>{section.title}</S.NavGroupTitle>}
              {section.items
                .filter((item: ResolvedDrawerItem) => item.show !== false)
                .map((item: ResolvedDrawerItem) => {
                  const isNewMenuToggle =
                    item.toggleKey === 'newMenuVersion' &&
                    isCollapsed &&
                    activeDrawerType === DrawerType.CONFIGURACOES;
                  if (isNewMenuToggle) return null;

                  const isExternal =
                    item.externalLink ||
                    item.path.startsWith('http://') ||
                    item.path.startsWith('https://');

                  const toggleElement =
                    item.toggleKey === 'newMenuVersion' ? (
                      <Toggle
                        checked={true}
                        onChange={(value) => {
                          if (value) {
                          trackMenuVersionToggled(MENU_VERSION_VALUES.v1);
                          updateUserPreferences({
                              menuVersion: MENU_VERSION_VALUES.v1,
                            });
                            onNewMenuVersionChange?.(false);
                          } else {
                            setShowDisableNewMenuModal(true);
                          }
                        }}
                        variant="menu"
                      />
                    ) : (
                      item.toggle
                    );

                const handleItemClick = () => {
                  if (isExternal) {
                    window.open(item.path, '_blank', 'noopener,noreferrer');
                  } else {
                    onNavigate(item.path);
                  }
                };

                const handleClick = () => {
                  if (item.disabled) return;
                  trackMenuItemSelected({
                    groupId: item.trackEvent?.groupId ?? GroupIdEnum.GENERAL_GROUP,
                    itemName: item.label,
                    categoryParent:
                      item.trackEvent?.categoryParent ??
                      getDrawerTitle(activeDrawerType),
                    menuVersion: MENU_VERSION_VALUES.v2,
                  });
                  if (item.onClick) {
                    item.onClick();
                  } else {
                    handleItemClick();
                  }
                };

                return (
                  <MenuDrawerItem
                    key={item.label}
                    icon={item.icon}
                    onClick={handleClick}
                    isCollapsed={isCollapsed}
                    label={item.label}
                    route={isExternal ? undefined : item.path}
                    activePrefixes={item.activePrefixes}
                    toggle={toggleElement}
                    disabled={item.disabled}
                    disabledTooltip={item.disabledTooltip}
                    badge={item.badge}
                    highlight={item.highlight}
                  />
                );
              })}
            </S.NavGroup>
          ))}
        </S.DrawerNavWrapper>
      </S.MenuDrawerWrapper>
      <ReactTooltip
        id="menu-drawer-tooltip"
        place="right"
        className="sidebar-custom-tooltip"
      />
      <ReactTooltip
        id="menu-drawer-item-tooltip"
        place="right"
        className="sidebar-custom-tooltip"
      />
      <ModalConfirmation
        isOpen={showDisableNewMenuModal}
        onClose={() => setShowDisableNewMenuModal(false)}
        onConfirm={() => {
          trackMenuVersionToggled(MENU_VERSION_VALUES.v1);
          setShowDisableNewMenuModal(false);
          setApiComplete(false);
          setShowLoadingModal(true);
          onMenuVersionModalStateChange?.(true);
          updateUserPreferencesAsync({ menuVersion: MENU_VERSION_VALUES.v1 })
            .then(() => {
              setApiComplete(true);
              onNewMenuVersionChange?.(false);
              queryClient.invalidateQueries({ queryKey: USER_PREFERENCES_QUERY_KEY });
            })
            .catch((error) => {
              setShowLoadingModal(false);
              setApiComplete(false);
              toast.error('Erro ao atualizar preferências. Tente novamente.');
            });
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
          <ReturnOutlineIcon key="return" size={38} color="#1CB59F" />,
          <SettingsGridOutlineIcon key="settings" size={38} color="#1CB59F" />,
          <MessageOutlineIcon key="message" size={38} color="#1CB59F" />
        ]}
        externalComplete={apiComplete}
        onComplete={() => {
          setShowLoadingModal(false);
        }}
      />
    </>
  );
};

export default MenuDrawer;
