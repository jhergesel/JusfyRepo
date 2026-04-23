import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div `
  background-color: ${({ theme }) => theme.colors.white.primary};
  width: 453px;
  position: fixed;
  top: 5vh;
  right: -50%;
  padding: 30px 19px;
  opacity: 0;
  transition: all 0.6s;
  z-index: 2;

  ${({ open }) =>
    open
      ? `
opacity: 1;
right: 25 px;
`
      : ""};
`;

export const CloseIcon = styled(SVG)
`
  position: absolute;
  left: 0;
  transform: translate(-50%, -50%);
  top: 5px;
  cursor: pointer;
`;

export const IconContainer = styled.div `
  background-color: #edffa6;
  border-radius: 50%;
  padding: 10px;
`;

export const InfoWrapper = styled.div `
  font-family: ${({ theme }) => theme.typography.primary};
  display: flex;
  align-items: center;
  gap: 16px;

  h1 {
    font-weight: 600;
    font-size: 18px;
    margin: 0;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    margin: 3px 0 0;

    span {
      font-weight: 300;
    }
  }
`;

export const Wrapper = styled.div `
  background-color: #faf9f9;
  padding: 40px 15px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  margin-top: 28px;
`;

export const DownloadButton = styled.a `
  outline: none;
  background: transparent;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.colors.blue.quinary};
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 600;
  font-size: 16px;
  display: flex;
  gap 6px;
  align-items: center;
  border: 0;

  &:hover {
    opacity: 0.8;
  color: ${({ theme }) => theme.colors.blue.quinary};
  }
`;

export const CardsWrapper = styled.div `
  display: flex;
  row-gap: 14px;
  flex-direction: column;
`;

export const QueryCard = styled.div `
  border: 1px solid #41c78f;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 13px 0;
  flex-direction: column;
  margin-top: 28px;
  cursor: pointer;

  background: linear-gradient(
      180deg,
      rgba(255, 198, 145, 0.1) 0%,
      rgba(65, 199, 143, 0.1) 100%
    ),
    linear-gradient(
      180deg,
      rgba(248, 255, 237, 0.1) 0%,
      rgba(248, 255, 237, 0.1) 100%
    );

  h1 {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 500;
    font-size: 17px;
  }
`;

export const QueryButton = styled.button `
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.blue.quinary};
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    span {
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;

export const ScrollView = styled.div `
  max-height: 85vh;
  overflow: auto;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`;