import styled from 'styled-components';

export const Icon = styled.div<{ $active?: boolean }>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  transition: background 0.3s ease;
  ${({ $active }) => $active && 'background: #E7E8EC;'}

  &:hover {
    background: ${({ $active }) => ($active ? '#E7E8EC' : 'rgba(0, 0, 0, 0.04)')};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &:hover ${Icon} {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const MenuHeader = styled.div`
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: #131313;
`;

export const MenuDivider = styled.div`
  height: 1px;
  background: #e7e8ec;
  margin: 6px 12px;
`;

export const MenuItemIcon = styled.span<{ $green?: boolean }>`
  display: inline-flex;
  color: ${({ $green }) => ($green ? '#00C389' : '#383839')};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MenuPanel = styled.div<{ $left?: number; $bottom?: number }>`
  position: fixed;
  left: ${({ $left = 0 }) => $left}px;
  bottom: ${({ $bottom = 0 }) => $bottom}px;
  min-width: 220px;
  padding: 8px 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  z-index: 1300;
`;

export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;
  border: none;
  background: none;
  font-size: 14px;
  line-height: 1.4;
  color: #131313;
  cursor: pointer;
  text-align: left;
  font-family: inherit;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;
