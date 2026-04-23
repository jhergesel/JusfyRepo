import { useEffect, useRef, useState } from 'react';
import { findDrawerByRoute, DrawerType } from '../MenuConfig';
import { SIDEBAR_WIDTH } from '../styles';

const MENU_DRAWER_EXTENDED_WIDTH = 270;
const MENU_DRAWER_COLLAPSED_WIDTH = 64;

type DrawerContext = DrawerType | null;

export function useSidebarDrawerState(
  pathname: string,
  onWidthChange: (width: number) => void,
) {
  const [activeDrawer, setActiveDrawer] = useState<DrawerContext>(null);
  const [isMenuDrawerCollapsed, setIsMenuDrawerCollapsed] = useState(false);
  const [isDrawerPinned, setIsDrawerPinned] = useState(false);
  const previousWidthRef = useRef<number | null>(null);

  useEffect(() => {
    const drawer = findDrawerByRoute(pathname);
    setActiveDrawer(drawer);
    setIsDrawerPinned(drawer !== null);
  }, [pathname]);

  useEffect(() => {
    let width = SIDEBAR_WIDTH;
    if (activeDrawer && isDrawerPinned) {
      width += isMenuDrawerCollapsed
        ? MENU_DRAWER_COLLAPSED_WIDTH
        : MENU_DRAWER_EXTENDED_WIDTH;
    }
    if (previousWidthRef.current !== width) {
      onWidthChange(width);
      previousWidthRef.current = width;
    }
  }, [activeDrawer, isMenuDrawerCollapsed, isDrawerPinned, onWidthChange]);

  const toggleMenuCollapsed = () =>
    setIsMenuDrawerCollapsed((prev) => !prev);

  return {
    activeDrawer,
    setActiveDrawer,
    isMenuDrawerCollapsed,
    setIsMenuDrawerCollapsed,
    isDrawerPinned,
    setIsDrawerPinned,
    toggleMenuCollapsed,
    menuDrawerExtendedWidth: MENU_DRAWER_EXTENDED_WIDTH,
    menuDrawerCollapsedWidth: MENU_DRAWER_COLLAPSED_WIDTH,
  };
}
