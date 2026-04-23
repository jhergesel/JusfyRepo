import styled, {
    keyframes
} from 'styled-components';
import {
    Track,
    Header as CarouselHeader
} from '../../../../components/Carousel/styles';

const pulse = keyframes `
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const shimmer = keyframes `
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Container = styled.div `
`;

export const ProfileContent = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #E4E6EF;

  @media (max-width: 480px) {
    padding: 8px 6px;
    gap: 6px;
  }
`;

export const ProfileHeader = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const AvatarWrapper = styled.div `
  position: relative;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const CameraButton = styled.button `
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #01AB7D;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    background: #019267;
    transform: scale(1.1);
  }

  &:disabled {
    background: #B5B5C3;
    cursor: not-allowed;
  }
`;

export const AvatarRing = styled.div `
  width: 72px;
  height: 72px;
  border-radius: 50%;
  padding: 3px;
  background: ${props => {
    const progress = props.progress || 0;
    const progressDegrees = (progress / 100) * 360;
    return `conic-gradient(from -90deg, #01AB7D 0deg, #01AB7D ${progressDegrees}deg, #E4E6EF ${progressDegrees}deg, #E4E6EF 360deg)`;
  }};

  @media (max-width: 480px) {
    width: 52px;
    height: 52px;
  }
`;

export const Avatar = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
`;

export const AvatarPlaceholder = styled.div `
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #01AB7D;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: white;
  border: 3px solid white;
`;

export const UserInfo = styled.div `
  flex: 1;
  min-width: 0;
`;

export const UserNameRow = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const UserBadgeIcon = styled.span `
  img {
    width: 28px;
    height: 28px;
  }
`;

export const UserName = styled.h3 `
  font-size: 18px;
  font-weight: 700;
  color: #181C32;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const XPContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  background: #E6F7F2;
  border-radius: 6px;
  padding: 8px 12px;
  width: fit-content;
  flex-wrap: nowrap;

  @media (max-width: 480px) {
    padding: 4px 8px;
    gap: 4px;
    margin-bottom: 4px;
  }
`;

export const XPIcon = styled.span `
  font-size: 16px;
  color: #1BC5BD;
`;

export const XPText = styled.span `
  font-size: 15px;
  font-weight: 700;
  color: #131313;
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const XPDivider = styled.span `
  font-size: 12px;
  color: #131313;
  font-family: 'Noto Sans', sans-serif;
`;

export const XPTotal = styled.span `
  font-size: 13px;
  font-weight: 500;
  color: #131313;
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ProgressBar = styled.div `
  width: 100%;
  height: 8px;
  background: #F3F6F9;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div `
  height: 100%;
  width: ${props => props.width || 0}%;
  background: linear-gradient(90deg, #1BC5BD 0%, #01AB7D 100%);
  border-radius: 4px;
  transition: width 0.5s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
    animation: ${shimmer} 2s linear infinite;
  }
`;

export const LevelTrack = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 8px;
  position: relative;
  padding-top: 8px;
  overflow-y: hidden;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 4px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 4px;

    &::-webkit-scrollbar {
      height: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: #E4E6EF;
      border-radius: 3px;
    }
  }

  @media (max-width: 480px) {
    gap: 2px;
    justify-content: flex-start;
  }
`;

export const LevelItem = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  z-index: 1;
  cursor: pointer;
  padding: 6px 4px;
  border-radius: 8px;
  transition: background 0.2s;
  background: ${props => props.$active ? '#f0faf6' : 'transparent'};
  min-width: 0;

  &:hover {
    background: #f0faf6;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    min-width: 60px;
    padding: 4px 6px;
  }

  @media (max-width: 480px) {
    min-width: 50px;
    padding: 4px 2px;
  }
`;

export const LevelIcon = styled.img `
  width: 50px;
  height: 50px;
  object-fit: contain;
  ${props => props.$blocked && 'filter: grayscale(100%);'}
  ${props => props.$scale && `
    width: 75px;
    height: 75px;
  `}

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    ${props => props.$scale && `
      width: 40px;
      height: 40px;
    `}
    ${props => props.$blocked && 'filter: grayscale(100%);'}
  }
`;

export const LevelName = styled.span `
  font-size: 11px;
  text-align: center;
  font-family: 'Noto Sans', sans-serif;
  margin-top: 4px;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 9px;
    margin-top: 2px;
  }
`;

export const LevelLocked = styled.span `
  font-size: 9px;
  color: #B5B5C3;
  font-family: 'Noto Sans', sans-serif;
`;

export const SeasonLogo = styled.img `
  width: 80px;
  height: 80px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`;

export const HistoryLink = styled.a `
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #01AB7D;
  font-family: 'Noto Sans', sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
    color: #01AB7D;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HistoryLabelFull = styled.span `
  @media (max-width: 480px) {
    display: none;
  }
`;

export const HistoryLabelShort = styled.span `
  display: none;

  @media (max-width: 480px) {
    display: inline;
  }
`;

export const RenewalBadge = styled.span `
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #838486;
  font-family: 'Noto Sans', sans-serif;
  margin-left: auto;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const RenewalChip = styled.div `
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 5px 14px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid #017858;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;
  z-index: 3;
  width: fit-content;
  color: #017858;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 4px 12px;
    gap: 4px;
  }
`;

export const RenewalChipIcon = styled.img `
  width: 18px;
  height: 18px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const BenefitsExpansion = styled.div `
  margin-top: 4px;
  border-radius: 3px;
  border: 1px solid #e7e8ec;
  background: #fff;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
`;

export const BenefitsExpansionHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  user-select: none;
  width: 100%;
  gap: 8px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const BenefitsExpansionTitle = styled.span `
  display: flex;
  align-items: center;
  gap: 8px;
  color: #131313;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  flex: 1;
  min-width: 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    font-size: 13px;
    gap: 6px;
  }
`;

export const BenefitsExpansionArrow = styled.button `
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #f4f5f9;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    transition: transform 0.25s;
    transform: ${props => props.$open ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const BenefitsExpansionBody = styled.div `
  width: 100%;
  max-height: ${props => props.$open ? '500px' : '0'};
  opacity: ${props => props.$open ? 1 : 0};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;

export const BenefitsSection = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const BenefitsColumn = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BenefitsTitle = styled.h4 `
  font-size: 16px;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 4px 0;
  font-family: 'Noto Sans', sans-serif;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BenefitItem = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid #f0f0f2;
  font-size: 13px;
  color: #5e5e60;
  font-family: 'Noto Sans', sans-serif;
  line-height: 140%;

  &:first-child {
    border-top: none;
  }
`;

export const BenefitIcon = styled.span `
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export const BenefitsCarouselWrapper = styled.div `
  margin-top: 16px;
  width: 100%;
  border: 1px solid #e7e8ec;
  border-radius: 12px;
  padding: 24px 16px 8px;
  background: #fff;
  position: relative;
  overflow: hidden;

  .jusfy-carousel-item {
    padding-bottom: 2px;
  }

  ${Track} {
    align-items: flex-start;
  }

  ${CarouselHeader} {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 20px 12px 6px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 16px 10px 6px;
    border-radius: 8px;
  }
`;

export const BenefitsSubtitle = styled.p `
  color: #5e5e60;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  margin: 4px 0 0 0;
`;

export const BenefitCard = styled.div `
  border: 1px solid #e7e8ec;
  border-radius: 8px;
  background: #FAFBFF;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
`;

export const BenefitCardBadge = styled.span `
  color: #838486;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  flex-shrink: 0;
`;

export const BenefitCardDescription = styled.div `
  color: #5e5e60;
  font-family: 'Noto Sans', sans-serif;
  font-size: 13px;
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

export const BenefitCardAction = styled.a `
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #01AB7D;
  font-family: 'Noto Sans', sans-serif;
  cursor: pointer;
  text-decoration: none;
  margin-top: 4px;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
    color: #01AB7D;
  }
`;