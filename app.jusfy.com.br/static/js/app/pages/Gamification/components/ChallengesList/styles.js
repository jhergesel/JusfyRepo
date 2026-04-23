import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 700px;
  padding-right: 8px;
  margin-right: -8px;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    max-height: 500px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    max-height: none;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #E4E6EF;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #B5B5C3;
  }
`;

export const ChallengeItem = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 8px 8px
    ${(props) =>
      (props.highlight || props.juspaySpecial) && !props.hideLeadingIcon
        ? '60px'
        : '8px'};
  border-radius: ${props => props.juspaySpecial ? '4px' : '6px'};
  background: ${props => {
    if (props.juspaySpecial) return '#E6F3F7';
    if (props.highlight) return '#FFF9E6';
    return '#FFF';
  }};
  transition: all 0.3s ease;
  cursor: ${props => props.done ? 'default' : 'pointer'};
  border: 1px solid #E7E8EC;
  border-left: ${props => {
    if ((props.highlight || props.juspaySpecial) && !props.hideLeadingIcon) return 'none';
    return '1px solid #E7E8EC';
  }};
  opacity: ${props => props.done ? 0.7 : 1};

  /* Duas listras verticais: verde e amarela na borda esquerda */
  ${props => (props.showLines) && `
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      width: 6px;
    }
    &::before {
      left: 18px;
      background: #009739;
    }
    &::after {
      left: 24px;
      background: #FFD700;
    }
  `}

  &:hover {
    ${props => !props.done && `
      transform: translateX(4px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    `}
  }

  @media (max-width: 480px) {
    padding: 10px 8px 10px
      ${(props) =>
        (props.highlight || props.juspaySpecial) && !props.hideLeadingIcon
          ? '48px'
          : '12px'};
    gap: 6px;
  }
`;

export const ChallengeIcon = styled.img `
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%) ${props => props.float ? 'translateX(2px)' : ''};
  width: 52px;
  height: 52px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
    left: 6px;
  }
`;

export const ChallengeInfo = styled.div `
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const ChallengeTitle = styled.p `
  font-size: 14px;
  color: ${props => props.isMemberGetMember ? '#017858' : '#3F4254'};
  margin: 0;
  font-weight: 600;
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.4;
  text-decoration: ${props => props.done ? 'line-through' : props.isMemberGetMember ? 'underline' : 'none'};
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ChallengeXP = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${props => {
    if (props.juspaySpecial) return '#B3DAE6';
    if (props.highlight) return '#FFEA9F';
    return '#B3E6D8';
  }};
  border-radius: 6px;
  border: none;
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;

  ${props => props.highlight && !props.juspaySpecial && `
    box-shadow: 0 2px 8px rgba(0, 151, 57, 0.12);
  `}

  @media (max-width: 480px) {
    padding: 6px 10px;
    gap: 4px;
  }
`;

export const ChallengeDone = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: ${props => props.doneHighlight ? '#FFF' : '#FFF'};
  border-radius: 6px;
  border: 1px solid ${props => props.doneHighlight ? '#0182AB' : '#B3E6D8'};
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 6px 10px;
    gap: 4px;
  }
`;

export const XPValueDone = styled.span `
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.doneHighlight ? '#0182AB' : '#017858'};
  font-family: 'Noto Sans', sans-serif;

  @media (max-width: 480px) {
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

export const XPValue = styled.span `
  font-size: 14px;
  font-weight: 600;
  color: ${props => {
    if (props.juspaySpecial) return '#383839';
    if (props.highlight) return '#383839';
    return '#017858';
  }};
  font-family: 'Noto Sans', sans-serif;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonGo = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: ${props => props.highlight ? '#FFEA9F' : '#E6F7F2'};
  border-radius: 6px;
  border: 1px solid ${props => props.highlight ? '#C8E6C9' : '#B3E6D8'};
  transition: all 0.2s ease;
  width: 40px;
`;

export const ChallengeXPContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const IconDone = styled.img `
  width: 24px;
  height: auto;
  object-fit: contain;
`;

export const ProgressBadge = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: ${props => props.highlight ? '#FFEA9F' : '#E6F7F2'};
  border-radius: 6px;
  border: 1px solid ${props => props.highlight ? '#C8E6C9' : '#B3E6D8'};
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.highlight ? '#009739' : '#017858'};
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;
  flex-shrink: 0;
  width: 40px;

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const RenewalBadge = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #FFF;
  border-radius: 4px;
  border: 1px solid ${props => props.doneHighlight ? '#0182AB' : '#B3E6D8'};
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.doneHighlight ? '#0182AB' : '#017858'};
  font-family: 'Noto Sans', sans-serif;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`;