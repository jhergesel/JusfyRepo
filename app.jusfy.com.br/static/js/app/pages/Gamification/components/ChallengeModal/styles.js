import styled from 'styled-components';

export const ModalContent = styled.div `
  position: relative;
  background: white;
  padding: 24px !important;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    padding: 16px !important;
    gap: 10px;
  }
`;

export const CloseIcon = styled.div `
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 10;

  &:hover {
    background-color: #F8F9FA;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Header = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 8px;
  background: white;
  border: 1px solid #E4E6EF;
  border-radius: 10px;
`;

export const ChallengeTitle = styled.h3 `
  font-size: 14px;
  font-weight: 500;
  color: #3F4254;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  flex: 1;
`;

export const XPBadge = styled.div `
  background: #F0FDF9;
  border: 1px solid #01AB7D;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #01AB7D;
  font-family: 'Noto Sans', sans-serif;
`;

export const SocialProofRow = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: white;
`;

export const AvatarsGroup = styled.div `
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img `
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  margin-left: -8px;

  &:first-child {
    margin-left: 0;
  }
`;

export const InitialAvatar = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  font-family: 'Noto Sans', sans-serif;
  background: ${props => props.bgColor};
  color: ${props => props.textColor};

  &:first-child {
    margin-left: 0;
  }
`;

export const SocialProofText = styled.span `
  font-size: 13px;
  font-weight: 500;
  font-family: 'Noto Sans', sans-serif;
`;

export const ContentSection = styled.div `
  position: relative;
  padding: 32px 24px 0 24px;
  background: linear-gradient(3deg, #B3E6D8 -77.14%, #FFF 112.44%);
  text-align: center;
  overflow: hidden;
  border: 1px solid var(--brand-primary-primary-light, #B3E6D8);
  border-radius: 10px;

  @media (max-width: 480px) {
    padding: 20px 14px 0 14px;
  }
`;

export const StackedCardsWrapper = styled.div `
  position: relative;
  width: 100%;
  padding-top: 30px;
`;

export const DecorativeCardBack = styled.div `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;

  &.card-back-1 {
    background: #F8CAB7;
    width: calc(100% - 20%);
    height: 60px;
    top: 0;
    z-index: 1;
  }

  &.card-back-2 {
    background: #B3E6D8;
    width: calc(100% - 10%);
    height: 60px;
    top: 15px;
    z-index: 2;
  }
`;

export const MainTitle = styled.h2 `
  font-size: 24px;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 12px 0;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 18px;
    margin: 0 0 8px 0;
  }
`;

export const Subtitle = styled.p `
  font-size: 15px;
  color: #5E6278;
  margin: 0 0 28px 0;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0 0 18px 0;
  }
`;

export const BenefitsCard = styled.div `
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  text-align: left;

  @media (max-width: 480px) {
    padding: 14px;
    gap: 12px;
  }
`;

export const BenefitsIconWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #F0FDF9;
  border-radius: 100%;
  flex-shrink: 0;
`;

export const BenefitsIcon = styled.img `
  width: 28px;
  height: 28px;
`;

export const BenefitsContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const BenefitsTitle = styled.h4 `
  font-size: 15px;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 6px 0;
  font-family: 'Noto Sans', sans-serif;
`;

export const BenefitsDescription = styled.p `
  font-size: 13px;
  color: #7E8299;
  margin: 0 0 6px 0;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.5;
`;

export const StartButton = styled.button `
  width: 100%;
  padding: 10px 12px;
  background: #017858;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    background: #019973;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;