import {
    Tooltip
} from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

export const Container = styled.div `
  position: relative;
  display: ${({ visible }) => (visible ? 'none' : 'block')};
  width: 100%;
  ${({ isMaintenance }) =>
    isMaintenance
      ? `
pointer - events: none;
`
      : ''}
`;

export const FavoriteButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 26px;
  height: 26px;
  padding: 4px;
  border: none;
`;

export const HeaderContainer = styled.div `
  display: flex;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    color: #131313;

    font-family: 'Noto Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
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

export const ActionButtonWrapper = styled.div `
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
export const ContentCard = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    margin: 0px;
    color: rgba(0, 0, 0, 0.8);

    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const TagDocument = styled.div `
  display: flex;
  width: fit-content;
  height: 27px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #e6f3f7;

  color: #383839;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;

export const WrapperCardAction = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CreditQunatityCard = styled.div `
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: #e6f7f2;

  color: #383839;
  text-align: center;

  font-family: ${({ theme }) => theme.typography.quartenary};

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
export const Icon = styled(SVG)
``;

export const WrapperTagDocuments = styled.div `
  display: flex;
  gap: 8px;

  align-items: center;
`;

export const WrapperButtons = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
`;