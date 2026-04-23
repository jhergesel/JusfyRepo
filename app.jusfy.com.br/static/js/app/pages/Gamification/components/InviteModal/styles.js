import styled from 'styled-components';

export const ModalContent = styled.div `
  position: relative;
  background: white;
  padding: 0;
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 16px 24px;
  background: #FFF9E6;
  border-radius: 6px;
  border: 1px solid #E7E8EC;
  border-left: none;
  padding: 8px 8px 8px 60px;
  overflow: hidden;

  @media (max-width: 480px) {
    margin: 12px 16px;
    gap: 6px;
    padding: 8px 8px 8px 48px;
  }
`;

export const HeaderIcon = styled.img `
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
    left: 6px;
  }
`;

export const ChallengeTitle = styled.h3 `
  font-size: 14px;
  font-weight: 600;
  color: #017858;
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  flex: 1;
  text-decoration: underline;
`;

export const XPBadge = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #FFEA9F;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #383839;
  font-family: 'Noto Sans', sans-serif;
  flex-shrink: 0;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 151, 57, 0.12);

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const XPIcon = styled.img `
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: auto;
  object-fit: contain;
  transform: translateX(-50%) translateY(25%);
`;

export const ImageContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: white;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const InviteImage = styled.img `
  max-width: 260px;
  width: 100%;
  height: auto;

  @media (max-width: 480px) {
    max-width: 180px;
  }
`;

export const Content = styled.div `
  padding: 0 24px 24px;

  @media (max-width: 480px) {
    padding: 0 16px 16px;
  }
`;

export const MainTitle = styled.h2 `
  font-size: 18px;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 8px 0;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Description = styled.p `
  font-size: 14px;
  color: #7E8299;
  margin: 0 0 20px 0;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.5;
`;

export const HighlightText = styled.span `
  color: #017858;
  font-weight: 600;
`;

export const ShareSection = styled.div `
  background: #F8F9FA;
  border-radius: 12px;
  padding: 16px;
`;

export const ShareLabel = styled.p `
  font-size: 13px;
  font-weight: 600;
  color: #181C32;
  margin: 0 0 8px 0;
  font-family: 'Noto Sans', sans-serif;
`;

export const LinkContainer = styled.div `
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
  }
`;

export const LinkInput = styled.input `
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #E4E6EF;
  border-radius: 8px;
  font-size: 13px;
  color: #7E8299;
  background: white;
  font-family: 'Noto Sans', sans-serif;
  outline: none;
`;

export const CopyButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  background: white;
  border: 1px solid #E4E6EF;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #3F4254;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;

  &:hover {
    background: #F3F6F9;
  }
`;

export const SocialButtons = styled.div `
  display: flex;
  gap: 8px;
`;

export const SocialButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${props => props.type === 'whatsapp' ? '#25D366' : '#01AB7D'};
  background: white;
  color: ${props => props.type === 'whatsapp' ? '#25D366' : '#01AB7D'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.type === 'whatsapp' ? '#E8FBF0' : '#E6F7F2'};
  }
`;