import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1 `
  margin: 0;
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: 24px;
  font-weight: 400;

  span {
    font-weight: 700;
  }

  svg {
    position: relative;
    top: -17px;
    left: -7px;
  }
`;

export const ButtonWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SurveyButton = styled.a `
  border: none;
  outline: none;
  background-color: #a480f8;
  padding: 8px 16px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white.primary};
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 9px;

  &:hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.white.primary};
  }
`;

export const Button = styled.button `
  border: ${props =>
    props.secondary ? "0" : `1px solid ${props.theme.colors.green.primary}`};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${props => (props.secondary ? "12px" : "14px")};
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: bold;
  padding: ${props => (props.secondary ? "0" : "10px 34px")};
  color: ${({ theme }) => theme.colors.green.primary};
  background-color: transparent;
  font-family: ${({ theme }) => theme.typography.primary};
  display: flex;
  align-items: center;
  gap: 6px;

  @media (min-width: 675px) {
    padding: 10px 34px;

    padding: 10px 0px;
    padding-right: 47px;
  }
`;

export const HistoryButton = styled(Button)
`
  width: fit-content;
  padding: 10px 0px;
  font-size: 15px;
  font-weight: 700;
`;

export const Breadcrumb = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.secondary};

  span:first-child {
    color: ${({ theme }) => theme.colors.green.primary};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
`;