import styled from 'styled-components';
import { SIDEBAR_Z_INDEX } from '../../../../../../constants/ZIndex';
import {
  FLOATING_DRAWER_ARROW_HEIGHT,
  FLOATING_DRAWER_ARROW_OVERLAP_DRAWER,
  FLOATING_DRAWER_ARROW_WIDTH,
} from '../../../../../../constants/FloatingDrawerArrow';

export const SidebarHoverWrapper = styled.div<{ $width: number }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${(props) => props.$width}px;
  height: 100vh;
  z-index: ${SIDEBAR_Z_INDEX};
  pointer-events: auto;
  overflow-x: hidden;
`;

export const FloatingDrawerArrow = styled.span<{
  $sidebarWidth: number;
  $top: number;
}>`
  position: fixed;
  left: ${(p) =>
    p.$sidebarWidth -
    FLOATING_DRAWER_ARROW_WIDTH +
    FLOATING_DRAWER_ARROW_OVERLAP_DRAWER}px;
  top: ${(p) => p.$top}px;
  transform: translateY(-50%);
  width: ${FLOATING_DRAWER_ARROW_WIDTH}px;
  height: ${FLOATING_DRAWER_ARROW_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: ${SIDEBAR_Z_INDEX + 2};
`;
