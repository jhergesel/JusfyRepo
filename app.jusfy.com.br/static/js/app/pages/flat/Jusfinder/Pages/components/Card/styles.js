import styled from "styled-components";

export const Card = styled.div `
  width: ${({ sWidth }) => (sWidth ? sWidth : "100%")};
  display: flex;
  flex-direction: column;
  height: ${({ sHeight }) => sHeight ?? "fit-content"};
  padding: 24px;
  gap: ${({ gap }) => gap ?? "16px"};
  border-radius: 7px;
  border: 1px solid #ebedf3;
  background: #ffffff;
`;