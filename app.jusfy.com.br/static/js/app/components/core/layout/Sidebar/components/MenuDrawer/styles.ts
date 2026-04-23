import styled from 'styled-components';
import { SIDEBAR_Z_INDEX } from '../../../../../../constants/ZIndex';

interface MenuDrawerWrapperProps {
  isOpen: boolean;
  currentAsideWidth: number;
  currentWidth: number;
  isFloating?: boolean;
  isCollapsed?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const NavGroupTitle = styled.p`
  color: var(--neutral-text-text-light, #5e5e60);
  margin-bottom: 4px;
  font-family: var(--font-family-font-family-text, 'Noto Sans');
  font-size: var(--font-size-font-size-13, 13px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const MenuDrawerWrapper = styled.div<MenuDrawerWrapperProps>`
  width: ${(props) => props.currentWidth}px;
  height: 100vh;
  border-right: 1px solid var(--neutral-stroke-stroke-dark, #ceced2);
  background: ${(props) =>
    props.theme?.colors?.sidebar?.background ?? '#fafffe'};
  color: white;
  position: fixed;
  top: 0;
  left: ${(props) => props.currentAsideWidth}px;
  z-index: ${(props) => (props.isFloating ? SIDEBAR_Z_INDEX + 1 : 10)};

  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  transform: translateX(${(props) => (props.isOpen ? '0' : '-100%')});
  overflow-x: hidden;

  display: flex;
  padding: 20px 12px 12px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  color: #383839;
  gap: ${(props) => (props.isCollapsed ? '12px' : '25px')};

  ${(props) =>
    props.isFloating &&
    `
    overflow: visible;
    top: 12px;
    margin-bottom: 12px;
    height: calc(100vh - 24px);
    padding: 20px 12px 12px;
    gap: 36px;
    border-radius: var(--radius-large, 8px);
    border-right: 1px solid var(--neutral-stroke-stroke-dark, #ceced2);
    background: ${(props) =>
      props.theme?.colors?.sidebar?.background ?? '#fafffe'};
    box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

    & ${NavGroupTitle} {
      margin-bottom: 4px;
    }
  `}
`;

export const MenuDrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const MenuDrawerTitle = styled.h4`
  color: var(--neutral-text-text-dark, #383839);
  font-family: var(--font-family-font-family-title, 'Noto Sans');
  font-size: var(--font-size-font-size-14, 14px);
  margin: 0;
  font-style: normal;
  font-weight: 500;
`;

interface DrawerNavWrapperProps {
  isCollapsed?: boolean;
}

export const DrawerNavWrapper = styled.div<DrawerNavWrapperProps>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${(props) => (props.isCollapsed ? '0' : '34px')};
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

interface NavGroupProps {
  isCollapsed?: boolean;
}

export const NavGroup = styled.div<NavGroupProps>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.isCollapsed ? 'column' : 'row')};
  flex-wrap: ${(props) => (props.isCollapsed ? 'nowrap' : 'wrap')};
  gap: 0;
`;

export const ToggleButton = styled.button.attrs({ type: 'button' })`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: background 0.3s ease;
  cursor: pointer;
  border-radius: 4px;
  background: white;
  z-index: 1000;

  border: none;
  appearance: none;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  svg {
    width: 18px;
    height: 18px;
    color: #5e5e60;
  }
`;
