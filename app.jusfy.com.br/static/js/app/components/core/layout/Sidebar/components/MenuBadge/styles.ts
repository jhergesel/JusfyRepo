import { SIDEBAR_Z_INDEX } from 'app/constants/ZIndex';
import styled from 'styled-components';

export const NewTag = styled.div<{ $variant: 'inline' | 'overlay' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) =>
    props.$variant === 'inline' ? 'var(--spacing-4, 4px)' : '0'};
  padding: var(--spacing-4, 4px);
  border-radius: ${(props) =>
    props.$variant === 'overlay'
      ? 'var(--radius-full, 999px)'
      : 'var(--radius-medium, 4px)'};
  background: var(--brand-secondary-secondary-lighter, #fdede7);

  color: var(--brand-secondary-secondary-main, #e94f0e);
  line-height: 1;

  ${(props) =>
    props.$variant === 'inline'
      ? `
    margin-left: auto;
  `
      : `
    z-index: ${SIDEBAR_Z_INDEX};
    width: 18px;
    height: 18px;
    pointer-events: none;
  `}

  svg {
    display: block;
    transform: none;
  }

  ${(props) =>
    props.$variant === 'inline'
      ? `
  span {
    font-family: var(--font-family-font-family-text, 'Noto Sans');
    font-size: var(--font-size-font-size-13, 13px);
    font-weight: 600;
    line-height: 1;
    color: var(--brand-secondary-secondary-main, #e94f0e);
    white-space: nowrap;
  }
  `
      : ''}
`;

export const NotificationTag = styled.div<{
  $variant: 'inline' | 'overlay';
  $isOverflowNotificationCount: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.$variant === 'overlay'
      ? 'var(--radius-full, 999px)'
      : 'var(--radius-medium, 4px)'};
  background: var(--brand-primary-primary-light, #b3e6d8);
  color: var(--brand-primary-primary-darker, #01563f);
  line-height: 1;
  white-space: nowrap;

  ${(props) =>
    props.$variant === 'overlay'
      ? `
    z-index: ${SIDEBAR_Z_INDEX};
    width: ${props.$isOverflowNotificationCount ? '18px' : 'auto'};
    min-width: 18px;
    height: 18px;
    padding: ${props.$isOverflowNotificationCount ? '0' : '0 6px'};
    pointer-events: none;
    overflow: hidden;
  `
      : `
    margin-left: auto;
    width: ${props.$isOverflowNotificationCount ? '18px' : 'auto'};
    min-width: 18px;
    height: 18px;
    padding: ${props.$isOverflowNotificationCount ? '0' : 'var(--spacing-4, 4px)'};
  `}

  span {
    font-family: var(--font-family-font-family-text, 'Noto Sans');
    font-size: 10px;
    font-weight: 600;
    line-height: ${(props) => (props.$variant === 'overlay' ? '18px' : '1')};
    color: var(--brand-primary-primary-darker, #01563f);
    white-space: nowrap;
  }
`;
