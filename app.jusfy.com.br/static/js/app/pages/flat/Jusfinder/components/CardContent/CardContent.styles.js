import {
    Tooltip
} from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled.div `
  position: relative;
  width: 100%;

  cursor: pointer;

  display: ${({ visible }) => (visible ? 'none' : 'block')};

  ${({ isMaintenance }) =>
    isMaintenance
      ? `
pointer - events: none;
`
      : ''}
`;

export const CardUnavailable = styled.div `
  background: #fff9e6;
  padding: 16px;
  border-radius: 4px;

  h3 {
    color: #383839;
    font-weight: 500;
    font-family: 'Noto Sans' !important;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4.5px;
  }

  p {
    font-weight: 300;
    font-family: 'Noto Sans' !important;
    font-size: 14px;
    color: #535353;
    margin: 0px;
    height: auto !important;
  }
`;

export const CardWrapper = styled.div `
  font-family: 'Noto Sans' !important;
  padding: 24px;

  h1 {
    color: #111219;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }

  p {
    color: #535353;
    height: 64px;
    font-weight: 400;
    font-size: 14px;
    opacity: 0.8;
  }

  ${({ isMaintenance }) =>
    isMaintenance
      ? `
opacity: 0.3;
`
      : ''}
`;

export const TitleWrapper = styled.div `
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 48px;
`;

export const InfoWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: ${({ isShort, unavailable }) =>
    isShort ? '21px' : unavailable ? '0px' : '24px'};
  margin-top: 8px;

  p.short {
    color: #535353;
    height: 18px;
    font-weight: 400;
    font-size: 14px;
    opacity: 0.8;
  }
`;

export const IconContainer = styled.div `
  background-color: rgba(228, 246, 239, 0.8);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TooltipWrapper = styled.div `
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CustomTooltip = styled(Tooltip)
`
  font-family: 'Noto Sans' !important;

  strong {
    font-weight: 700;
  }
`;

export const ActionButtonWapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  span {
    font-family: 'Noto Sans';
    font-size: 14px;
    font-weight: 600;
    width: 100%;
  }

  span.highlight {
    text-decoration: underline;
  }

  span.left {
    text-align: left;
  }
`;