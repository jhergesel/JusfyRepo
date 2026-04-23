import styled from "styled-components";
import SVG from "react-inlinesvg";

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const EmpttyStateFilterWrapper = styled(EmptyStateWrapper)`
  margin-top: 0;
  gap: 16px;
`;

export const EmptyStateTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.typography.quartenary};
`;

export const EmptyStateTitleFilters = styled(EmptyStateTitle)`
  color: #5e5e60;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const EmptyStateText = styled.span`
  font-family: ${({ theme }) => theme.typography.quartenary};
`;

export const EmptyStateTextFilters = styled(EmptyStateText)`
  color: #5e5e60;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const Icon = styled(SVG)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
`;
