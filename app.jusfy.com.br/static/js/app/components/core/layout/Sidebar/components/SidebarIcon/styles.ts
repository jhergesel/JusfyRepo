import styled, { createGlobalStyle } from 'styled-components';

export const Icon = styled.div<{ active?: boolean; disabled?: boolean }>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:has([data-sidebar-gamification-surface]) {
    padding: 0;
  }
  ${({ active }) =>
    active &&
    `
    &:not(:has([data-sidebar-gamification-surface])) {
      background: #E7E8EC;
    }
  `}
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const IconWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover ${Icon}:not([data-disabled]):not(:has([data-sidebar-gamification-surface])) {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const IconLabel = styled.span`
  color: ${({ theme }) => theme.colors.black.textDark};
  font-family: var(--font-family-font-family-text, 'Noto Sans');
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const SidebarTooltipStyle = createGlobalStyle`
  .sidebar-custom-tooltip {
    border-radius: var(--sm, 4px);
    background: #131313;
    color: var(--text-neutral-onInverse, #FFF) !important;
    font-family: var(--font-family-body, "Noto Sans") !important;
    font-size: var(--font-size-xs, 12px) !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 140% !important;
    z-index: 999999 !important;
  }

  .sidebar-custom-tooltip[data-tooltip-arrow] {
    width: 10px;
    height: 10px;
    background-color: #131313 !important;
    z-index: 999999 !important;
  }

  .sidebar-custom-tooltip[data-tooltip-place='right'][data-tooltip-arrow]::before {
    border-right-color: var(--background-neutral-stronger, #131313) !important;
  }
  .sidebar-custom-tooltip[data-tooltip-place='left'][data-tooltip-arrow]::before {
    border-left-color: var(--background-neutral-stronger, #131313) !important;
  }
  .sidebar-custom-tooltip[data-tooltip-place='top'][data-tooltip-arrow]::before {
    border-top-color: var(--background-neutral-stronger, #131313) !important;
  }
  .sidebar-custom-tooltip[data-tooltip-place='bottom'][data-tooltip-arrow]::before {
    border-bottom-color: var(--background-neutral-stronger, #131313) !important;
  }
`;
