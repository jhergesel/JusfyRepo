import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: center;
  gap: 40px;
  height: 100%;
  padding: 20px 0;

  transition: all 0.5s;

  ${({ isColapsed }) =>
    isColapsed
      ? `

height: 0;
opacity: 0;
padding: 0;
overflow: hidden;
`
      : ""};
`;

export const EmptyState = styled.div `
  font-family: ${({ theme }) => theme.typography.primary};
  text-align: center;
  max-width: 385px;

  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #111219;
  }

  span {
    font-weight: 400;
    font-size: 19px;
    color: #878995;
  }
`;

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  gap: 40px;
`;