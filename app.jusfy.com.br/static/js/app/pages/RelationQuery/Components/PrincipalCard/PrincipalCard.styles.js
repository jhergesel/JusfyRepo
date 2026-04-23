import styled from "styled-components";

export const Container = styled.div `
  width: 368px;
  background-color: ${({ theme }) => theme.colors.white.quinary};
  border-radius: 12px;
  position: relative;
`;

export const IconContainer = styled.div `
  background-color: ${({ isCompanySearch }) =>
    isCompanySearch ? "#FFF2DE" : "#edffa6"};
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
  gap: 6px;
  padding: 36px 0 18px;
`;

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.black.primary};
  margin: 0;
  text-transform: capitalize;
  min-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 5px;
`;

export const Button = styled.button `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 14px;
  outline: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.blue.quinary};
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const Colapse = styled.button `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 600;
  font-size: 12px;
  outline: none;
  background: transparent;
  border: none;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.green.primary};
  display: flex;
  align-items: center;
  gap: 1px;

  &:after {
    content: "";
    margin-top: 2px;
    display: block;
    width: 11px;
    height: 5px;
    background-image: url(/media/relationQuery/colapse-arrow.svg);
    background-size: cover;
    transform: ${({ close }) => (close ? "rotate(180deg)" : "")};
    transition: all 0.3s;
  }
`;

export const ActionWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;