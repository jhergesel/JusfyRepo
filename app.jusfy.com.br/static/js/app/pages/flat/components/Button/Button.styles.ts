import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width ?? "fit-content"};
  height: ${({ height }) => height ?? "fit-content"};
  display: ${({ display }) => display ?? "flex"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  padding: ${({ padding }) => padding ?? "16px 0px"};
  gap: ${({ gap }) => gap ?? "8px"};
  border-radius: ${({ borderRadius }) => borderRadius ?? "5px"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  border: ${({ border }) => border ?? "1px solid #01ab7d"};
  background: ${({ background }) => background ?? "#fff"};
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-weight: ${({ fontWeight }) => fontWeight ?? "500"};
  font-size: ${({ fontSize }) => fontSize ?? "13px"};
  line-height: 18.2px;
  text-align: ${({ textAlign }) => textAlign ?? "center"};
  color: ${({ color }) => color ?? "#01ab7d"};
`;
