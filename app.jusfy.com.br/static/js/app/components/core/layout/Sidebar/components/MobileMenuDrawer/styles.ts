import styled from 'styled-components';
import { SIDEBAR_Z_INDEX } from '../../../../../../constants/ZIndex';
import { ItemWrapper } from '../MenuDrawerItem/styles';
import { NavGroupTitle as BaseNavGroupTitle } from '../MenuDrawer/styles';

export const NavGroupTitle = styled(BaseNavGroupTitle)`
  padding-top: 24px;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e7e8ec;
  margin: 12px 0;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: ${SIDEBAR_Z_INDEX + 2};
`;

const MOBILE_DRAWER_WIDTH = 270;

export const Logo = styled.img`
  width: 53px;
  height: auto;
  display: block;
  margin: 7.5px 16px;
`;

export const ContentWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  ${ItemWrapper} {
    height: 40px;
    min-height: 40px;
    width: 100%;
  }
`;

export const Panel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${MOBILE_DRAWER_WIDTH}px;
  height: 100vh;
  background: #fafffe;
  border-right: 1px solid var(--neutral-stroke-stroke-dark, #ceced2);
  z-index: ${SIDEBAR_Z_INDEX + 3};
  transform: translateX(${(p) => (p.$isOpen ? 0 : '-100%')});
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`;
