import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import {
    LAST_ITEM
} from './constants';
import {
    Tooltip
} from '@material-ui/core';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  margin-top: 16px;
  position: relative;

  @media (max-width: 578px) {
    margin-bottom: 16px;
  }
`;

export const RowText = styled.span `
  color: #111219;
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-weight: 400;
`;

export const EmptyStateWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;
export const EmptyStateFilterWrapper = styled(EmptyStateWrapper)
`
  margin-top: 0;
  gap: 16px;
`;
export const EmptyStateTitle = styled.h1 `
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.typography.quartenary};
`;
export const EmptyStateTitleFilters = styled(EmptyStateTitle)
`
  color: #5e5e60;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
export const EmptyStateText = styled.span `
  font-family: ${({ theme }) => theme.typography.quartenary};
`;
export const EmptyStateTextFilters = styled(EmptyStateText)
`
  color: #5e5e60;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
export const Highlight = styled.span `
  color: ${({ theme }) => theme.colors.green.primary};
  font-weight: bold;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.quartenary};
`;

export const Icon = styled(SVG)
`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  cursor: pointer;
`;

export const PaginationLabel = styled.div `
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.quartenary};

  span {
    font-weight: 400;
    position: relative;
    top: -1px;
  }
`;

export const ContentHeaderCard = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 578px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const IconUpdateStatus = styled(SVG)
``;

export const ButtonUpdateStatus = styled.div `
  display: flex;
  height: 32px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background: #f4f5f9;
  cursor: pointer;
  color: #5e5e60;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const CardItem = styled.div `
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 24px;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid #e7e8ec;
  background: #fff;
  cursor: pointer;

  &:hover {
    border-radius: 3px;
    border: 1px solid #ceced2;
    background: #f4f5f9;

    > div .text-item-info.first {
      text-decoration: underline;
    }
  }

  @media (max-width: 578px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
  }
`;

export const Content = styled.div `
  display: grid;
  width: 100%;
  gap: 24px;
  align-items: center;

  grid-column: 5;

  position: relative;

  @media (max-width: 578px) {
    flex-direction: column;
    gap: 8px;
  }
`;
export const CardItemTitle = styled.span `
  color: #131313;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  gap: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  span {
    color: #5e5e60;
    font-family: 'Noto Sans';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const WrapperTitle = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`;

export const WrapperInfoItems = styled.div `
  display: grid;
  align-items: center;
  gap: 24px;
  justify-content: flex-end;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;

  & > :nth-child(2) {
    margin-right: 10px !important;
  }

  @media (max-width: 578px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const TextItemInfo = styled.span `
  color: #383839;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  display: ${({ index }) => (index === 2 ? 'flex' : '')};
  width: ${({ index }) => (index === 1 ? '80px' : '')};
  gap: ${({ index }) => (index === 2 ? '4px' : '')};

  @media (min-width: 1600px) {
    width: ${({ index }) => (index === 1 ? '100%' : '')};
  }

  @media (max-width: 578px) {
    position: ${({ index }) => (index === LAST_ITEM ? 'absolute' : '')};
    top: ${({ index }) => (index === LAST_ITEM ? '0px' : '')};
    right: ${({ index }) => (index === LAST_ITEM ? '-170px' : '')};
    width: ${({ index }) => (index === 1 ? '100%' : '208px')};
  }
`;

export const WrapperContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const WrapperButtonUpdatedStatus = styled.div `
  width: fit-content;

  @media (max-width: 578px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonAngleDropDown = styled.div `
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f4f5f9;
`;