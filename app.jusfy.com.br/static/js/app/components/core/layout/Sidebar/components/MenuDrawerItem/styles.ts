import styled from 'styled-components';

export const Icon = styled.div``;

export const IconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

interface ItemWrapperProps {
  active?: boolean;
  isCollapsed?: boolean;
  hasToggle?: boolean;
  togglePosition?: 'left' | 'right';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  display: flex;
  position: relative;
  flex-direction: ${(props) =>
    props.hasToggle && props.togglePosition === 'left' ? 'row-reverse' : 'row'};
  height: 40px;
  padding: 0 ${(props) =>
    props.isCollapsed ? '0' : 'var(--spacing-12, 12px)'};
  gap: ${(props) => (props.isCollapsed ? '0' : '8px')};
  width: 100%;
  border-radius: var(--radius-medium, 4px);
  cursor: ${({ hasToggle, disabled }) =>
    hasToggle ? 'default' : disabled ? 'not-allowed' : 'pointer'};
  justify-content: ${(props) => {
    if (props.isCollapsed) return 'center';
    if (props.hasToggle && props.togglePosition === 'left') return 'flex-end';
    if (props.hasToggle) return 'space-between';
    if (props.iconPosition === 'right') return 'space-between';
    return 'flex-start';
  }};
  align-items: center;
  transition: background 0.3s ease;

  ${({ hasToggle, disabled }) =>
    !hasToggle &&
    !disabled &&
    `
    &:hover {
      background: rgba(0, 0, 0, 0.04);
    }
  `}

  ${({ active }) =>
    active &&
    `
    background: #E7E8EC;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  `}
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemLabel = styled.span<{ highlight?: boolean }>`
  min-width: 0;
    color: ${(props) => props.highlight ? 'var(--brand-primary-primary-main, #01AB7D)' : 'var(--neutral-text-text-dark, #383839)'};
  font-family: var(--font-family-font-family-text, 'Noto Sans');
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: ${(props) => props.highlight ? 600 : 500};
  line-height: 140%;
`;
