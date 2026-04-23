import styled from "styled-components";

export const Container = styled.div `
  background-color: ${({ theme }) => theme.colors.white.primary};
`;

export const Wrapper = styled.div `
  padding: 18px 28px 0px 21px;
  min-height: calc(100vh - 50px);

  @media (min-width: 1024px) {
    max-width: 855px;
    margin-left: 8vw;
    margin-top: 0px;
  }
`;

export const Options = styled.div `
  text-align: right;
  padding: 18px 28px 0 21px;

  button {
    padding: 0;
  }

  @media (min-width: 1024px) {
    padding: 21px 64px 0 0;
  }
`;

export const Button = styled.button `
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 400;
  font-size: 12px;
`;

export const Congratulations = styled.div `
  margin-top: 101px;
  padding: 0 33px;
  min-height: 100vh;

  p {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 400;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.black.primary};
    margin: 56px 0 45px;
    max-width: 290px;

    @media (min-width: 1024px) {
      font-size: 30px;
      margin: 34px 0 65px;
      max-width: 715px;
    }

    span {
      font-weight: 700;
      font-size: 28px;

      @media (min-width: 1024px) {
        font-size: 30px;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 0;
  }
`;

export const Loading = styled.div `
display: flex:
align-items: center;
gap: 4px;

  span {
    font-family: ${({ theme }) => theme.typography.primary};
    font-weight: 400;
    font-size: 11px;
  }
`;