import styled, {
    keyframes
} from 'styled-components'

const fadeIn = keyframes `
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const PopupContainer = styled.div `
  position: fixed;
  bottom: 80px;
  right: 22px;
  z-index: 1060;
  animation: ${fadeIn} 0.2s ease-out;

  @media (max-width: 768px) {
    bottom: 70px;
    right: 20px;
    left: 20px;
  }
`

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 320px;
  max-width: calc(100vw - 40px);
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Header = styled.div `
  background: linear-gradient(90deg, #34D399 -122.17%, #01AB7D 100%);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Title = styled.h2 `
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  font-family: 'Inter', sans-serif;
`

export const CloseButton = styled.button `
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const Content = styled.div `
  padding: 16px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Option = styled.button `
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: 100%;

  &:hover {
    border-color: #34D399;
    box-shadow: 0 2px 8px rgba(1, 171, 125, 0.3);
  }

  /* Estilo especial para a primeira opção (assistente) */
  &:first-child {
    background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
    border: 2px solid #6EE7B7;
    color: #047857;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(1, 171, 125, 0.08);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shine 3s infinite;
    }

    &:hover {
      background: linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%);
      border-color: #34D399;
      box-shadow: 0 4px 12px rgba(1, 171, 125, 0.12);
      transform: translateY(-1px);
    }

    /* Texto verde para a opção do assistente */
    ${OptionText} {
      color: #047857 !important;
      font-weight: 600;
    }
  }

  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`

export const OptionIcon = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: #D1FAE5;
`

export const OptionContent = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`

export const OptionText = styled.span `
  color: #333;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
`

export const RecommendedBadge = styled.span `
  background: rgba(1, 171, 125, 0.15);
  color: #047857;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  border: 1px solid rgba(1, 171, 125, 0.2);
  line-height: 1;
  flex-shrink: 0;
`

export const PromoNotificationBadge = styled.div `
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  background-color: #E94F0E;
  border-radius: 50%;
  z-index: 10;
  pointer-events: none;
`