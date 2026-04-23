import React from 'react';
import type { DrawerType, ResolvedMenuItem } from '../../MenuConfig';
import SidebarIconList from '../SidebarIconList';
import SidebarProfileDropdown from '../SidebarProfileDropdown';
import SidebarGamificationDropdown from '../SidebarGamificationDropdown';
import { toAbsoluteUrl } from '../../../../../../../_metronic/_helpers/AssetsHelpers';
import { trackMenuGamificationDetailsViewed } from '../../trackMenuEvents';
import * as S from './styles';

type SidebarContentProps = {
  mainItems: ResolvedMenuItem[];
  settingsItems: ResolvedMenuItem[];
  profileMenuItem: ResolvedMenuItem | null;
  gamificationMenuItem: ResolvedMenuItem | null;
  getActive: (
    item: ResolvedMenuItem,
    drawerType?: DrawerType | null,
  ) => boolean;
  onItemClick: (item: ResolvedMenuItem) => void;
  onNavigate?: (path: string) => void;
  onDrawerIconMouseEnter?: (
    drawerType: DrawerType,
    e: React.MouseEvent,
  ) => void;
  onDrawerIconMouseLeave?: () => void;
  onLogoClick?: () => void;
};

const SidebarContent: React.FC<SidebarContentProps> = ({
  mainItems,
  settingsItems,
  profileMenuItem,
  gamificationMenuItem,
  getActive,
  onItemClick,
  onNavigate,
  onDrawerIconMouseEnter,
  onDrawerIconMouseLeave,
  onLogoClick,
}) => (
  <>
    <S.LogoWrapper onClick={onLogoClick}>
      <img
        src={toAbsoluteUrl('/media/logos/logo.svg')}
        alt="Jusfy Logo"
        style={{ width: '53px' }}
      />
    </S.LogoWrapper>
    <S.IconsWrapper>
      <SidebarIconList
        items={mainItems}
        getActive={getActive}
        onItemClick={onItemClick}
        onDrawerIconMouseEnter={onDrawerIconMouseEnter}
        onDrawerIconMouseLeave={onDrawerIconMouseLeave}
      />
    </S.IconsWrapper>
    <S.SettingsWrapper>
      {gamificationMenuItem &&
        gamificationMenuItem.show !== false &&
        onNavigate && (
          <SidebarGamificationDropdown
            icon={gamificationMenuItem.icon}
            ariaLabel={gamificationMenuItem.label}
            routeActive={getActive(gamificationMenuItem)}
            tooltip={
              gamificationMenuItem.tooltip === false
                ? undefined
                : gamificationMenuItem.label
            }
            onOpen={() => {
              trackMenuGamificationDetailsViewed();
            }}
            onNavigate={onNavigate}
          />
        )}
      <SidebarIconList
        items={settingsItems}
        getActive={getActive}
        onItemClick={onItemClick}
        onDrawerIconMouseEnter={onDrawerIconMouseEnter}
        onDrawerIconMouseLeave={onDrawerIconMouseLeave}
      />
      {profileMenuItem && profileMenuItem.show !== false && onNavigate && (
        <SidebarProfileDropdown
          icon={profileMenuItem.icon}
          onNavigate={onNavigate}
        />
      )}
    </S.SettingsWrapper>
  </>
);

export default SidebarContent;
