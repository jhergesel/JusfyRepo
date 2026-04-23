import styled from 'styled-components';

// Trigger styles (botão na topbar)
export const TriggerContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #F3F6F9;
    border-radius: 8px;
  }
`;

export const TriggerLevelIcon = styled.div `
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TriggerLevelName = styled.span `
  font-size: 13px;
  font-weight: 600;
  color: #181C32;
`;

export const TriggerXP = styled.span `
  font-size: 13px;
  font-weight: 700;
  color: #181C32;
`;

export const TriggerCTA = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background: #F3F6F9;
  border-radius: 6px;
  font-size: 12px;
  color: #7E8299;
  margin-left: 8px;

  span {
    font-weight: 600;
    color: #181C32;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

// Dropdown content styles
export const DropdownContent = styled.div `
  background: white;
  border-radius: 8px;
  overflow: hidden;
  padding: 24px;
`;

export const ProfileHeader = styled.div `
`;

export const ProfileAvatarContainer = styled.div `
  flex-shrink: 0;
`;

export const ProfileAvatar = styled.img `
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #01AB7D;
`;

export const ProfileAvatarPlaceholder = styled.div `
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #01AB7D 0%, #019267 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
  border: 3px solid #01AB7D;
`;

export const ProfileInfo = styled.div `
  flex: 1;
  min-width: 0;
`;

export const ProfileName = styled.span `
  font-size: 18px;
  font-weight: 600;
  color: #181C32;
  display: block;
  margin-bottom: 6px;
`;

export const ProfileXPBadge = styled.div `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #01AB7D;
  border-radius: 20px;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

export const XPIconSmall = styled.img `
  width: 16px;
  height: 16px;
`;

export const CoffeeImage = styled.img `
  width: 80px;
  height: auto;
  flex-shrink: 0;
`;

// Challenges section
export const ChallengesSection = styled.div `
  padding: 0;
`;

export const ChallengesHeader = styled.div `
  padding-bottom: 12px;
`;

export const ChallengesTitle = styled.h4 `
  font-size: 16px;
  font-weight: 700;
  color: #181C32;
  margin: 0 0 4px 0;
  text-align: center;
`;

export const ChallengesSubtitle = styled.p `
  font-size: 13px;
  color: #7E8299;
  margin: 0;
  text-align: center;
`;

export const ChallengesListContainer = styled.div `
  max-height: 340px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #F3F6F9;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D3E0;
    border-radius: 2px;
  }
`;

// Footer
export const Footer = styled.div `
  padding-top: 12px;
  border-top: 1px solid #F3F6F9;
  text-align: center;
`;

export const ViewAllLink = styled.span `
  font-size: 14px;
  font-weight: 600;
  color: #01AB7D;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #019267;
    text-decoration: underline;
  }
`;

// Challenge items
export const ChallengeItem = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 10px;
  background: ${props => props.highlight ? '#FFF5EE' : '#FFFFFF'};
  border: 1px solid ${props => props.highlight ? '#FFE4D9' : '#F3F6F9'};
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateX(2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
`;

export const ChallengeIcon = styled.img `
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`;

export const ChallengeInfo = styled.div `
  flex: 1;
  min-width: 0;
`;

export const ChallengeTitle = styled.span `
  font-size: 13px;
  font-weight: 500;
  color: #181C32;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  text-decoration: ${props => props.isLink ? 'underline' : 'none'};
`;

export const ChallengeXP = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  background: ${props => props.highlight ? '#FFF0E8' : '#E6F7F2'};
  border-radius: 6px;
  flex-shrink: 0;
`;

export const XPIcon = styled.img `
  width: 16px;
  height: 16px;
`;

export const XPValue = styled.span `
  font-size: 12px;
  font-weight: 700;
  color: ${props => props.highlight ? '#E94F0E' : '#01AB7D'};
  white-space: nowrap;
`;

export const ButtonGo = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;