import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  height: calc(100% - 156px);
  margin-top: 56px;

  span {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 400;
    font-size: 16px;
  }
`;

export const Options = styled.div `
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 16px;

  @media (min-width: 1020px) {
    padding: 0;
  }
`;

export const Button = styled.button `
  background-color: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.colors.green.primary};
  border-radius: 4px;
  padding: 12px 32px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black.primary : theme.colors.white.primary};
  font-weight: 500;
  font-size: 16px;
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.gray.quindecimal : "transparent"};
  cursor: pointer;
  width: 134px;

  ${({ disable }) => (disable ? "pointer-events: none; opacity: 0;" : "")}
`;

export const ButtonDisabled = styled.button `
  background-color: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.colors.green.primary};
  border-radius: 4px;
  padding: 12px 32px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black.primary : theme.colors.white.primary};
  font-weight: 500;
  font-size: 16px;
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.gray.quindecimal : "transparent"};
  cursor: pointer;
  width: 134px;

  ${({ disable }) =>
    disable
      ? `
pointer - events: none;
opacity: 0.3;
background: rgba(65, 199, 143, 0.30);
color: #F7F7F7;
`
      : ""}
`;

export const Form = styled.div `
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div `
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 16px;
  position: absolute;
  bottom: 5px;
  width: 855px;

  @media (min-height: 500px) {
    position: ${({ position }) => position};
  }

  @media (min-height: 800px) {
    position: absolute;
  }

  @media (min-height: 900px) {
    position: relative;
  }
`;

export const Rights = styled.div `
  p {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 400;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray.primary};
    opacity: 0.8;
  }
`;