import styled from 'styled-components';
import { MOBILE_HEADER_HEIGHT } from '../../styles';
import { SIDEBAR_Z_INDEX } from '../../../../../../constants/ZIndex';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${MOBILE_HEADER_HEIGHT}px;
  background: #fff;
  border-bottom: 1px solid var(--neutral-stroke-stroke-dark, #ceced2);
  z-index: ${SIDEBAR_Z_INDEX + 2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Logo = styled.img`
  width: 53px;
  height: auto;
  display: block;
  margin: 7.5px 0;
`;

export const MenuButton = styled.button.attrs({ type: 'button' })`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-medium, 4px);
  color: var(--neutral-text-text-dark, #383839);

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`;
