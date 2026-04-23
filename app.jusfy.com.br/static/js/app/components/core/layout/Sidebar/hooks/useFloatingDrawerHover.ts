import { useRef, useState } from 'react';
import { DrawerType } from '../MenuConfig';

const SIDEBAR_HOVER_LEAVE_DELAY_MS = 120;
const ICON_LEAVE_CLOSE_DELAY_MS = 220;

export function useFloatingDrawerHover() {
  const hoverLeaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [hoveredDrawer, setHoveredDrawer] = useState<DrawerType | null>(null);
  const [hoveredIconCenterY, setHoveredIconCenterY] = useState<number | null>(
    null,
  );

  const clearCloseTimeout = () => {
    if (hoverLeaveTimeoutRef.current) {
      clearTimeout(hoverLeaveTimeoutRef.current);
      hoverLeaveTimeoutRef.current = null;
    }
  };

  const closeHover = () => {
    setHoveredDrawer(null);
    setHoveredIconCenterY(null);
  };

  const scheduleClose = (delayMs: number) => {
    clearCloseTimeout();
    hoverLeaveTimeoutRef.current = setTimeout(() => {
      hoverLeaveTimeoutRef.current = null;
      closeHover();
    }, delayMs);
  };

  const handleSidebarHoverEnter = () => clearCloseTimeout();

  const handleSidebarHoverLeave = () => {
    scheduleClose(SIDEBAR_HOVER_LEAVE_DELAY_MS);
  };

  const handleDrawerIconMouseLeave = () => {
    scheduleClose(ICON_LEAVE_CLOSE_DELAY_MS);
  };

  const handleFloatingDrawerMouseEnter = () => clearCloseTimeout();

  const handleFloatingDrawerMouseLeave = () => {
    scheduleClose(SIDEBAR_HOVER_LEAVE_DELAY_MS);
  };

  const handleDrawerIconMouseEnter = (
    drawerType: DrawerType,
    event: React.MouseEvent,
  ) => {
    clearCloseTimeout();
    setHoveredDrawer(drawerType);
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredIconCenterY(rect.top + rect.height / 2);
  };

  return {
    hoveredDrawer,
    hoveredIconCenterY,
    setHoveredDrawer,
    handleSidebarHoverEnter,
    handleSidebarHoverLeave,
    handleDrawerIconMouseEnter,
    handleDrawerIconMouseLeave: handleDrawerIconMouseLeave,
    handleFloatingDrawerMouseEnter,
    handleFloatingDrawerMouseLeave,
  };
}
