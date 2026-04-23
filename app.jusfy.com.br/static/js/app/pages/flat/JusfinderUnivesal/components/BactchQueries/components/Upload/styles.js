import styled from "styled-components";

const setBorder = ({
    hasFiles,
    theme,
    hasError
}) => {
    if (hasError) return theme.colors.red.quaternary;
    if (!hasFiles) return theme.colors.green.primary;

    return theme.colors.gray.undenary;
};

export const Dragzone = styled.div `
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 2px dashed ${setBorder};
  padding: ${({ hasFiles }) => (hasFiles ? "24px 40px" : "40px")};
  margin-bottom: 5px;
  align-items: center;
  border-radius: 10px;
  background: ${({ hasFiles, theme }) =>
    !hasFiles ? "rgba(65, 199, 143, 0.10)" : "rgba(160, 162, 169, 0.1)"};

  input {
    display: none;
  }

  @media (max-width: 578px) {
    width: 100%;
    padding: 24px;
  }
`;

export const Title = styled.h3 `
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500px;
  line-height: 21.7px;
  text-align: center;

  color: ${({ theme }) => theme.colors.black.primary};
  font-family: ${({ theme }) => theme.typography.secondary};
  @media (max-width: 578px) {
    font-size: 14px;
  }
`;

export const Description = styled.span `
  text-align: center;
  display: block;
  margin-top: -2px;
  color: #4e4f5a;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
`;

export const ErrorMessage = styled.p `
  color: ${({ theme }) => theme.colors.red.quaternary};
  font: normal 400 12px ${({ theme }) => theme.typography.primary};
  margin: 0;

  a {
    color: ${({ theme }) => theme.colors.red.quaternary};
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }
`;