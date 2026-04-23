import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  margin-top: 32px;

  ul {
    align-self: center;
  }

  .page-link {
    font-family: "Noto Sans" !important;
  }
`;

export const RowText = styled.span `
  color: #111219;
  font-size: 13px;
  font-family: "Noto Sans";
  font-weight: 400;
`;
export const RowTextHeader = styled.span `
  color: #111219;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 600;
`;

export const ActionWrapper = styled.div `
  display: flex;
  gap: 10px;
  padding-right: 30px;
`;

export const EmptyStateWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const EmptyStateTitle = styled.h1 `
  color: ${({ theme }) => theme.colors.black.primary};
  font-size: 20px;
  font-family: "Noto Sans";
`;

export const EmptyStateText = styled.span `
  font-family: "Noto Sans";
`;

export const Highlight = styled.span `
  color: ${({ theme }) => theme.colors.green.primary};
  font-weight: bold;
  cursor: pointer;
  font-family: "Noto Sans";
`;

export const Icon = styled(SVG)
`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
`;

export const PaginationLabel = styled.div `
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: "Noto Sans";

  span {
    font-weight: 400;
    position: relative;
    top: -1px;
  }
`;

export const EmptyButton = styled.div `
  width: 130.75;
`;
export const EmptyState = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  h2 {
    color: #5e5e60;
    text-align: center;

    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  p {
    color: #5e5e60;
    text-align: center;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  div {
    text-align: center;
  }

  button {
    border: 0;
    border-radius: 5px;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-weight: 600;
    padding: 0px 24px;
    color: #fff;
    background-color: #01ab7d;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }
`;
export const CardEmpyState = styled.div `
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 7px;
  border: 1px solid #e7e8ec;
  background: #fff;
`;