import styled from "styled-components";

export const Container = styled.div `
  height: 9px;
`;

export const Fill = styled.div `
  background: rgb(198, 252, 217);
  background: linear-gradient(
    90deg,
    rgba(198, 252, 217, 1) 0%,
    rgba(75, 245, 174, 1) 100%
  );
  height: 100%;
  width: ${({ progress }) => `
$ {
    progress
} % `};
`;