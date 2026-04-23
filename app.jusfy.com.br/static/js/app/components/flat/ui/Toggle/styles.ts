import styled from 'styled-components';

export const ToggleContainer = styled.button<{
  checked: boolean;
  disabled: boolean;
  variant?: 'default' | 'menu';
}>`
  position: relative;
  width: 31px;
  height: 15px;
  border-radius: 12px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 3px 4px;
  background: ${({ checked, disabled }) => {
    if (disabled) return '#CECED2';
    return checked ? '#01AB7D' : '#CECED2';
  }};
  transition: background 0.2s ease-in-out;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 2px solid #01ab7d;
    outline-offset: 2px;
  }

  ${({ variant, checked, disabled }) =>
    variant !== 'menu' &&
    `
      &:hover {
        background: ${disabled ? '#CECED2' : checked ? '#01906a' : '#B9B9B9'};
      }
    `}
`;

export const ToggleThumb = styled.span<{ checked: boolean; disabled: boolean }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ disabled }) => (disabled ? '#F9F9F9' : '#FFFFFF')};
  transition: transform 0.2s ease-in-out;
  transform: translateX(${({ checked }) => (checked ? '7px' : '-7px')});
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  aspect-ratio: 1/1;
`;
