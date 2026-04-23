import styled from 'styled-components';
import { SIDEBAR_Z_INDEX } from '../../../../constants/ZIndex';

export const SIDEBAR_WIDTH = 75;

export const SIDEBAR_MOBILE_BREAKPOINT = 992;
export const MOBILE_HEADER_HEIGHT = 56;

export const SidebarWrapper = styled.div.attrs({
  'data-sidebar-column': '',
})`
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  border-right: 1px solid var(--neutral-stroke-stroke-dark, #ceced2);
  background: var(--sidebar-background-color);
  color: white;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${SIDEBAR_Z_INDEX};
  overflow-x: hidden;
`;

export const FloatingDrawerBridge = styled.div<{
  $left: number;
  $width: number;
}>`
  position: fixed;
  left: ${(p) => p.$left}px;
  top: 0;
  width: ${(p) => p.$width}px;
  height: 100vh;
  z-index: ${SIDEBAR_Z_INDEX};
  pointer-events: auto;
`;
