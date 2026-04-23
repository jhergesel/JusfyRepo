import styled from "styled-components";
export const Background = styled.div `
  background-color: rgb(17, 18, 25);
  padding: 40px;
  color: rgb(255, 255, 255);
  height: 100%;

  p.font-size-h6 {
    opacity: 0.55;
    span {
      font-weight: bold;
    }
  }
  @media (min-width: 1200px) {
    min-height: 805px;
  }
`;