import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { findDrawerByRoute, getDrawerTitle, getRoutePrefixes, DrawerType, type ResolvedMenuItem } from './MenuConfig';
import FloatingArrowIcon from 'app/components/core/icons/FloatingArrowIcon';
import MenuDrawer from './components/MenuDrawer';
import MobileMenuDrawer from './components/MobileMenuDrawer';
import MobileSidebarHeader from './components/MobileSidebarHeader';
import SidebarContent from './components/SidebarContent';
import SidebarHoverZone from './components/SidebarHoverZone';
import { FloatingDrawerArrow } from './components/SidebarHoverZone/styles';
import { SidebarTooltipStyle } from './components/SidebarIcon/styles';
import { useFloatingDrawerHover, useResolvedMenu, useSidebarDrawerState, useSidebarMobile } from './hooks';
import { trackMenuCategoryExpanded, trackMenuItemSelected } from './trackMenuEvents';
import { SIDEBAR_MOBILE_BREAKPOINT, SIDEBAR_WIDTH } from './styles';
import * as S from './styles';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';
import { ROUTES_PATH } from 'app/constants/Routes';
import { GroupIdEnum } from 'app/modules/Segment/types';
import { Tooltip as ReactTooltip } from 'react-tooltip';

type SidebarProps = {
  onWidthChange: (width: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onWidthChange }) => {
  const location = useLocation();
  const history = useHistory();
  const {
    mainItems,
    settingsItems,
    drawerConfig,
    profileMenuItem,
    gamificationMenuItem,
  } = useResolvedMenu();
  const isMobile = useSidebarMobile(SIDEBAR_MOBILE_BREAKPOINT);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const {
    activeDrawer,
    setActiveDrawer,
    isMenuDrawerCollapsed,
    setIsMenuDrawerCollapsed,
    isDrawerPinned,
    setIsDrawerPinned,
    toggleMenuCollapsed,
    menuDrawerExtendedWidth,
    menuDrawerCollapsedWidth,
  } = useSidebarDrawerState(location.pathname, onWidthChange);

  const [isMenuVersionModalOpen, setIsMenuVersionModalOpen] = useState(false);
  const [pendingFloatingDrawerLeave, setPendingFloatingDrawerLeave] =
    useState(false);

  const hover = useFloatingDrawerHover();
  const {
    hoveredDrawer,
    hoveredIconCenterY,
    setHoveredDrawer,
    handleSidebarHoverEnter,
    handleSidebarHoverLeave,
    handleDrawerIconMouseEnter,
    handleDrawerIconMouseLeave,
    handleFloatingDrawerMouseEnter,
    handleFloatingDrawerMouseLeave: baseHandleFloatingDrawerMouseLeave,
  } = hover;

  const handleFloatingDrawerMouseLeave = () => {
    if (isMenuVersionModalOpen) {
      setPendingFloatingDrawerLeave(true);
      return;
    }

    baseHandleFloatingDrawerMouseLeave();
  };

  const handleMenuVersionModalStateChange = (isOpen: boolean) => {
    setIsMenuVersionModalOpen(isOpen);

    if (!isOpen && pendingFloatingDrawerLeave) {
      baseHandleFloatingDrawerMouseLeave();
      setPendingFloatingDrawerLeave(false);
    }
  };

  const getActive = (item: ResolvedMenuItem, drawerType?: DrawerType | null) => {
    if (drawerType) {
      return findDrawerByRoute(location.pathname) === drawerType;
    }

    const prefixes = getRoutePrefixes(item.route, item.activePrefixes);
    return prefixes.some((prefix) =>
      location.pathname === prefix || location.pathname.startsWith(prefix + '/')
    );
  };

  const floatingState = useMemo(() => {
    const drawerForCurrentRoute = findDrawerByRoute(location.pathname);
    const isOnLevel2Route = drawerForCurrentRoute !== null;
    const isHoveringDifferentGroup =
      hoveredDrawer !== null && hoveredDrawer !== drawerForCurrentRoute;
    const showFloatingDrawer =
      hoveredDrawer !== null &&
      (isHoveringDifferentGroup || (!isDrawerPinned && !isOnLevel2Route));
    return { showFloatingDrawer };
  }, [location.pathname, hoveredDrawer, isDrawerPinned]);

  const handleIconClick = (targetDrawer: DrawerType | null, route: string) => {
    setIsDrawerPinned(true);
    if (targetDrawer === activeDrawer) {
      const wasCollapsed = isMenuDrawerCollapsed;
      setIsMenuDrawerCollapsed((prev) => !prev);
      if (wasCollapsed && targetDrawer) {
        trackMenuCategoryExpanded(getDrawerTitle(targetDrawer));
      }
    } else {
      if (targetDrawer) {
        trackMenuCategoryExpanded(getDrawerTitle(targetDrawer));
      }
      setActiveDrawer(targetDrawer);
      setIsMenuDrawerCollapsed(false);
    }
    history.push(route);
  };

  const handleNavLinkClick = (route: string) => {
    setActiveDrawer(null);
    setIsDrawerPinned(false);
    history.push(route);
  };

  const handleFloatingDrawerItemClick = (route: string) => {
    if (hoveredDrawer) {
      setActiveDrawer(hoveredDrawer);
      setIsDrawerPinned(true);
      setHoveredDrawer(null);
    }
    history.push(route);
  };

  const handleItemClick = (item: ResolvedMenuItem) => {
    if (item.disabled) return;
    if (item.drawerType) {
      handleIconClick(item.drawerType, item.route);
    } else {
      trackMenuItemSelected({
        groupId: item.trackEvent?.groupId ?? GroupIdEnum.GENERAL_GROUP,
        itemName: item.label,
        categoryParent: null,
        menuVersion: MENU_VERSION_VALUES.v2,
      });
      handleNavLinkClick(item.route);
    }
  };

  const handleDrawerItemClick = (path: string) => {
    const drawerType = findDrawerByRoute(path);
    if (drawerType !== null) {
      setActiveDrawer(drawerType);
      if (drawerType !== activeDrawer) {
        setIsMenuDrawerCollapsed(false);
      }
      history.push(path);
    } else {
      handleNavLinkClick(path);
    }
  };

  const handleNewMenuVersionChange = () => {
    history.push(ROUTES_PATH.MAIN.DASHBOARD);
  };

  const handleLogoClick = () => {
    handleNavLinkClick(ROUTES_PATH.MAIN.DASHBOARD);
  };

  const sidebarContentProps = {
    mainItems,
    settingsItems,
    profileMenuItem,
    gamificationMenuItem,
    getActive,
    onItemClick: handleItemClick,
    onNavigate: handleNavLinkClick,
    onDrawerIconMouseEnter: handleDrawerIconMouseEnter,
    onDrawerIconMouseLeave: handleDrawerIconMouseLeave,
    onLogoClick: handleLogoClick,
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('drawer-open-no-scroll');
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <MobileSidebarHeader
          onMenuToggle={() => setIsMobileDrawerOpen((prev) => !prev)}
          isMenuOpen={isMobileDrawerOpen}
        />
        <MobileMenuDrawer
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          onNavigate={(path) => history.push(path)}
          onNewMenuVersionChange={handleNewMenuVersionChange}
        />
      </>
    );
  }

  return (
    <>
      <SidebarTooltipStyle />
      <ReactTooltip
        id="sidebar-icon-tooltip"
        place="right"
        className="sidebar-custom-tooltip"
      />
      <SidebarHoverZone
        width={SIDEBAR_WIDTH}
        onMouseEnter={handleSidebarHoverEnter}
        onMouseLeave={handleSidebarHoverLeave}
      >
        <S.SidebarWrapper>
          <SidebarContent {...sidebarContentProps} />
        </S.SidebarWrapper>
      </SidebarHoverZone>
      {floatingState.showFloatingDrawer && hoveredDrawer && (
        <>
          <S.FloatingDrawerBridge
            $left={SIDEBAR_WIDTH}
            $width={menuDrawerExtendedWidth}
            onMouseEnter={handleFloatingDrawerMouseEnter}
            onMouseLeave={handleFloatingDrawerMouseLeave}
            aria-hidden
          />
          <MenuDrawer
            isOpen={true}
            isCollapsed={false}
            toggleMenuCollapsed={toggleMenuCollapsed}
            currentAsideWidth={SIDEBAR_WIDTH}
            menuDrawerExtendedWidth={menuDrawerExtendedWidth}
            menuDrawerCollapsedWidth={menuDrawerCollapsedWidth}
            isFloating={true}
            activeDrawerType={hoveredDrawer}
            drawerConfig={drawerConfig}
            onNavigate={handleFloatingDrawerItemClick}
            onMouseEnter={handleFloatingDrawerMouseEnter}
            onMouseLeave={handleFloatingDrawerMouseLeave}
            onNewMenuVersionChange={handleNewMenuVersionChange}
            onMenuVersionModalStateChange={handleMenuVersionModalStateChange}
          />
          {hoveredIconCenterY != null && (
            <FloatingDrawerArrow
              $sidebarWidth={SIDEBAR_WIDTH}
              $top={hoveredIconCenterY}
              aria-hidden
            >
              <FloatingArrowIcon />
            </FloatingDrawerArrow>
          )}
        </>
      )}

      {activeDrawer && isDrawerPinned && (
        <MenuDrawer
          isOpen={true}
          isCollapsed={isMenuDrawerCollapsed}
          toggleMenuCollapsed={toggleMenuCollapsed}
          currentAsideWidth={SIDEBAR_WIDTH}
          menuDrawerExtendedWidth={menuDrawerExtendedWidth}
          menuDrawerCollapsedWidth={menuDrawerCollapsedWidth}
          activeDrawerType={activeDrawer}
          drawerConfig={drawerConfig}
          onNavigate={handleDrawerItemClick}
          onNewMenuVersionChange={handleNewMenuVersionChange}
        />
      )}
    </>
  );
};

export default Sidebar;
