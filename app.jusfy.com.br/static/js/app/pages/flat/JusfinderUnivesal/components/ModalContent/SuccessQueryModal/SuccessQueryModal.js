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
  }

  a {
    text-align: center;
    color: #555555;
    font-size: 14px;
    font-family: "Noto Sans";
    font-weight: 400;
    text-decoration: underline;
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

export const ButtonWrapper = styled.div `
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ButtonText = styled.span `
  color: white;
  font-size: 14px;
  font-family: "Noto Sans";
  font-weight: 600;
  text-wrap: nowrap;

  ${({ secondary }) => (secondary ? `
color: #111219;` : null)}
  ${({ tertiary }) = > (tertiary ? `color: #01AB7D;` : null)
}
`;

export const CloseIcon = styled.div`
position: absolute;
right: 16 px;
top: 16 px;
cursor: pointer;
`;