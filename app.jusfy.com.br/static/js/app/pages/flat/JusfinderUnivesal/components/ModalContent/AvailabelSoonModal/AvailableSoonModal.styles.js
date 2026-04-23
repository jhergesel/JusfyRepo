import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  width: 430px;

  h1 {
    color: #111219;
    font-size: 22px;
    font-family: "Noto Sans";
    font-weight: 600;
    margin: 0;
  }

  p {
    margin: 0;
    color: #535353;
    font-size: 15px;
    font-family: "Noto Sans";
    font-weight: 400;
    margin-bottom: 4px;
  }

  @media screen and (max-width: 545px) {
    width: 100%;
  }
`;

export const Header = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ButtonText = styled.span `
  color: #111219;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 600;
`;

export const ButtonModal = styled.button `
  background: ${({ backgroundColor }) => backgroundColor || "#FDFDFF"};
  border: ${({ border }) => border || "1px solid #CECED2"};
  padding: ${({ padding }) => padding || "10px 40px"};
  width: ${({ width }) => width || "fit-content"};
  color: ${({ color }) => color || "#131313"};
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  padding: ${({ padding }) => padding || "10px 40px"};
  border-radius: ${({ borderRadius }) => borderRadius || "5px"};
  height: 40px;
`;

export const ContentButtons = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;