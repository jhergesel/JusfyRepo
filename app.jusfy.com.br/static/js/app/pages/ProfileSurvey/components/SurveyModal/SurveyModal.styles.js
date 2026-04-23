import styled from "styled-components";

export const ModalContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const ModalContent = styled.div `
  width: 100%;
  padding: 33px 0;
  background-color: #fffef6;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 511px;
    bottom: 50vh;
    left: 50vw;
    transform: translate(-50%, 50%);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const Container = styled.div `
  text-align: center;
  width: 290px;

  @media (min-width: 1024px) {
    width: fit-content;
  }
`;

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 600;
  font-size: 23px;
  color: ${({ theme }) => theme.colors.blue.senary};
  margin: 18px 0 0;

  @media (min-width: 1024px) {
    margin-top: 47px;
  }
`;

export const Text = styled.p `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin: 10px 0 40px;
  max-width: 294px;

  @media (min-width: 1024px) {
    margin-bottom: 20px;
    max-width: 409px;
  }
`;

export const Button = styled.button `
  background-color: ${({ theme }) => theme.colors.green.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white.primary};
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  width: 272px;
  border: none;
  padding: 12px 0;
`;

export const Time = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 34px;

  span {
    color: #6b4300;
  }
`;

export const Figure = styled.img ``;