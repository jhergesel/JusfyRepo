import styled, {
    keyframes
} from 'styled-components';
import {
    Track,
    Header as CarouselHeader
} from '../../../../components/Carousel/styles';

const fadeIn = keyframes `
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes `
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulse = keyframes `
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
`;

export const ModalContainer = styled.div `
  position: relative;
  width: 100%;
  max-width: 880px;
  background: white;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
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

export const ConfettiCanvas = styled.canvas `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const ModalContent = styled.div `
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  min-height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const LeftPanel = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

export const LevelUpImagePlaceholder = styled.div `
  max-width: 280px;
  width: 100%;
  height: 220px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 12px;
  animation: ${pulse} 1.5s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 220px;
    height: 180px;
  }

  @media (max-width: 480px) {
    max-width: 160px;
    height: 140px;
    margin-bottom: 12px;
  }
`;

export const LevelUpImage = styled.img `
  max-width: 280px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  animation: ${slideUp} 0.6s ease-out;

  @media (max-width: 768px) {
    max-width: 220px;
  }

  @media (max-width: 480px) {
    max-width: 160px;
    margin-bottom: 12px;
  }
`;

export const EmojiLabel = styled.div `
  display: inline-flex;
  align-items: center;
  background: #E6F7F2;
  border-radius: 20px;
  padding: 6px 16px;
  margin-bottom: 16px;
  position: relative;
  z-index: 3;
  font-size: 14px;
  color: #181C32;
  font-family: 'Noto Sans', sans-serif;
`;

export const Title = styled.h2 `
  font-size: 22px;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 8px 0;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.3;
  position: relative;
  z-index: 3;

  span {
    color: #01AB7D;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p `
  font-size: 14px;
  color: #7E8299;
  margin: 0 0 24px 0;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  position: relative;
  z-index: 3;
  max-width: 340px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 0 0 16px 0;
  }
`;

export const ContinueButton = styled.button `
  width: 100%;
  max-width: 320px;
  padding: 14px 24px;
  background: #01AB7D;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  font-family: 'Noto Sans', sans-serif;
  position: relative;
  z-index: 3;

  &:hover {
    background: #019267;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 12px 20px;
  }
`;

export const RightPanel = styled.div `
  width: 400px;
  background: #F8F9FC;
  margin: 20px;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  border: 1px solid #E4E6EF;
  flex-direction: column;
  overflow-y: auto;
  max-height: 520px;

  @media (max-width: 768px) {
    width: auto;
    margin: 0 16px 16px;
    max-height: none;
  }

  @media (max-width: 480px) {
    margin: 0 12px 12px;
    padding: 14px;
  }
`;

export const LevelTrack = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E4E6EF;
`;

export const LevelItem = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
  padding: 6px 2px;
  border-radius: 8px;
  transition: background 0.2s;
  background: ${props => props.$active ? '#f0faf6' : 'transparent'};

  &:hover {
    background: #f0faf6;
  }
`;

export const LevelIcon = styled.img `
  width: 44px;
  height: 44px;
  object-fit: contain;
  ${props => props.$blocked && 'filter: grayscale(100%);'}
  ${props => props.$scale && `
    width: 58px;
    height: 58px;
  `}

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    ${props => props.$scale && `
      width: 40px;
      height: 40px;
    `}
  }
`;

export const LevelName = styled.span `
  font-size: 10px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  margin-top: 4px;
  line-height: 1.2;
  color: ${props => props.$active ? '#01AB7D' : '#181C32'};
  font-weight: ${props => props.$active ? 600 : 400};
`;

export const BenefitsCarouselWrapper = styled.div `
  width: 100%;
  border: 1px solid #e7e8ec;
  border-radius: 12px;
  padding: 20px 12px 8px;
  background: #fff;
  position: relative;

  .jusfy-carousel-item {
    padding-bottom: 2px;
  }

  ${Track} {
    align-items: flex-start;
  }

  ${CarouselHeader} {
    align-items: flex-start;
  }
`;

export const BenefitsSubtitle = styled.p `
  color: #5e5e60;
  font-family: 'Noto Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 140%;
  margin: 4px 0 0 0;
`;

export const BenefitCard = styled.div `
  border: 1px solid #e7e8ec;
  border-radius: 8px;
  background: #FAFBFF;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  box-sizing: border-box;
`;

export const BenefitCardHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const BenefitCardTitleRow = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BenefitCardTitle = styled.span `
  color: #131313;
  font-family: 'Noto Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  line-height: 140%;
`;

export const BenefitCardDescription = styled.div `
  color: #5e5e60;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 160%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const BenefitLevelSlide = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;