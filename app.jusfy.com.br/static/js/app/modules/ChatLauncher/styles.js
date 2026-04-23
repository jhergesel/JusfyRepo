import styled from 'styled-components'

export const ChatLauncherContainer = styled.div `
  position: ${props => props.variant === 'fab' ? 'fixed' : 'relative'};
  display: inline-block;
  bottom: ${props => props.variant === 'fab' ? (props.fabOffset?.bottom ?? '14px') : 'auto'};
  right: ${props => props.variant === 'fab' ? (props.fabOffset?.right ?? '22px') : 'auto'};
  left: ${props => props.variant === 'fab' ? props.fabOffset?.left : 'auto'};
  z-index: ${props => props.variant === 'fab' ? '1050' : 'auto'};

  /* Desktop: HideButton aparece apenas no hover */
  @media (min-width: 768px) {
    &:hover ${() => HideButton} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`

export const HideButton = styled.div `
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1000;
  transform: translate(50%, -50%);
  border-radius: var(--radius-full, 999px);
  border: 1px solid var(--brand-primary-primary-light, #B3E6D8);
  background: var(--brand-primary-primary-lighter, #E6F7F2);
  transition: opacity 0.2s ease;

  /* Desktop: escondido por padrão, aparece no hover do container */
  @media (min-width: 768px) {
    opacity: 0;
    pointer-events: none;
  }

  /* Mobile: sempre visível */
  @media (max-width: 767px) {
    opacity: 1;
    pointer-events: auto;
  }
`

export const NotificationBadge = styled.div `
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  color: white;
  font-size: 14px;
  text-align: center;
  background-color: #E94F0E;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 9999;
  pointer-events: none;
`