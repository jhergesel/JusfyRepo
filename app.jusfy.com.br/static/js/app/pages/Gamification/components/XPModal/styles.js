import styled, {
    keyframes
} from 'styled-components';

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

export const ModalContainer = styled.div `
  position: relative;
  width: 100%;
  max-width: 850px;
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

  @media (max-width: 480px) {
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

const pulse = keyframes `
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.3;
  }
`;

export const RocketPlaceholder = styled.div `
  max-width: 250px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 12px;
  animation: ${pulse} 1.5s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
    height: 150px;
    margin-bottom: 12px;
  }
`;

export const RocketImage = styled.img `
  max-width: 250px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  animation: ${slideUp} 0.6s ease-out;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
    margin-bottom: 12px;
  }
`;

export const XPBadgeInline = styled.div `
  display: inline-flex;
  align-items: center;
  background: #E6F7F2;
  border-radius: 20px;
  padding: 6px 16px;
  margin-bottom: 16px;
  position: relative;
  z-index: 3;
`;

export const XPLabel = styled.span `
  font-size: 14px;
  color: #181C32;
  font-family: 'Noto Sans', sans-serif;
`;

export const XPValueInline = styled.span `
  font-size: 14px;
  font-weight: 700;
  color: #01AB7D;
  margin-left: 4px;
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

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 0 0 16px 0;
  }
`;

export const ContinueButton = styled.button `
  width: 100%;
  max-width: 280px;
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
  width: 380px;
  background: #F8F9FC;
  margin: 20px;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  border: 1px solid #E4E6EF;
  flex-direction: column;

  @media (max-width: 768px) {
    width: auto;
    margin: 0 16px 16px;
  }

  @media (max-width: 480px) {
    margin: 0 12px 12px;
    padding: 14px;
  }
`;

export const RankingHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const RankingTitle = styled.h3 `
  font-size: 18px;
  font-weight: 600;
  color: #181C32;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const RankingList = styled.div `
  animation: ${fadeIn} 0.4s ease-in;
`;

const fadeInSlide = keyframes `
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RankingItem = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: ${props => props.$isCurrentUser ? '#E6F7F2' : 'transparent'};
  border-bottom: 1px solid #F3F6F9;
  border-radius: ${props => props.$isCurrentUser ? '6px' : '0'};
  transition: all 0.2s ease;
  animation: ${props => props.$isCurrentUser ? fadeInSlide : 'none'} 0.4s ease-out;

  &:hover {
    background: ${props => props.$isCurrentUser ? '#E6F7F2' : '#F8F9FC'};
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 10px 12px;
  }
`;

export const Position = styled.span `
  font-size: 14px;
  font-weight: 700;
  color: #181C32;
  min-width: 28px;
  font-family: 'Noto Sans', sans-serif;
`;

export const UserAvatar = styled.div `
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid #E4E6EF;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AvatarPlaceholder = styled.div `
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #01AB7D;
`;

export const UserInfo = styled.div `
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const UserName = styled.p `
  font-size: 14px;
  font-weight: 600;
  color: #181C32;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const UserBadge = styled.span `
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const UserState = styled.p `
  font-size: 12px;
  color: #7E8299;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
`;

const bounce = keyframes `
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
`;

export const UpArrow = styled.span `
  font-size: 16px;
  color: #01AB7D;
  font-weight: bold;
  margin-left: 4px;
  animation: ${bounce} 0.6s ease-in-out infinite;
  display: inline-block;
`;

export const UserXP = styled.span `
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.$isHidden ? '#B5B5C3' : '#01AB7D'};
  font-family: 'Noto Sans', sans-serif;
`;