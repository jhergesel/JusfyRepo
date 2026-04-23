import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TooltipWrapper = styled.div `
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 5px;
`;

export const Time = styled.div `
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: 11px;

  span {
    color: #6b4300;
  }
`;

export const TooltipContent = styled.div `
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  text-align: left;

  h2 {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 600;
    font-size: 16px;
    margin: 0;
  }

  p {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 0.5rem;
  }
`;