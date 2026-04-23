import styled from "styled-components";

export const Container = styled.div `
  width: 317px;
  background-color: ${({ theme }) => theme.colors.white.quinary};
  border-radius: 12px;
  position: relative;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.colors.white.quinary};
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? `
background - color: #fff5f5;
border: 3 px dotted# ffaeae;

`
      : null}
`;

export const IconContainer = styled.div `
  background-color: ${({ color }) => color};
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  border: 4px solid ${({ theme }) => theme.colors.white.primary};
`;

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 36px 0 25px;
`;

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black.primary};
  margin: 0;
  text-transform: capitalize;
  padding: 0 15px;
`;

export const TagWrapper = styled.div `
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const Tag = styled.div `
  background-color: ${({ isCompany }) => (isCompany ? "#FFDEDE" : "#EDFFDE")};
  font-family: ${({ theme }) => theme.typography.primary};
  color: #11734b;
  font-size: 12px;
  font-weight: 300;
  padding: 3px 6px;
  border-radius: 7px;
  display: flex;
  gap: 4px;
  margin-top: 6px;

  span:last-child {
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const Info = styled.div `
  font-family: ${({ theme }) => theme.typography.primary};
  color: #999999;
  font-size: 14px;
  font-weight: 700;
  margin-top: 5px;

  span:first-child {
    font-weight: 300;
  }
`;

export const InfoWrapper = styled.div `
  margin-top: -5px;
`;

export const QueryButton = styled.button `
  border: none;
  outline: none;
  background: rgba(5, 189, 250, 0.1);
  color: ${({ theme }) => theme.colors.blue.quinary};
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1.5px solid #05bdfa;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 5px;

  span {
    span {
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;

export const SearchButton = styled.button `
  border: none;
  outline: none;
  background: transparent;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
  margin: 12px 0 0 2px;

  ${({ isSelected }) =>
    isSelected
      ? `
color: #11734b;

  span {
    font-weight: 700;
  }
  `
      : null}
`;