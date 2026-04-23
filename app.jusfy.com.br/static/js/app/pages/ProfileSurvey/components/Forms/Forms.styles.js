import styled from "styled-components";

export const Container = styled.div `
  min-height: 0px;

  @media (min-width: 801px) and (min-height: 900px) {
    min-height: 475px;
  }
`;

export const Wrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 12px;
  margin-bottom: 28px;

  @media (min-width: 720px) and (max-height: 899px) {
    margin-bottom: 2%;
  }

  @media (min-height: 801px) {
    margin-bottom: 35px;
    row-gap: 30px;
  }

  @media (min-height: 1201px) {
    row-gap: 30px;
  }
`;
export const SelectWrapper = styled.div `
  max-width: 400px;
  margin-bottom: 73px;
`;

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: 700;
  font-size: 24px;
  color: #091d5c;
  margin: 9px 0 28px;

  ${({ required }) =>
    required
      ? ` &
    ::after {
        content: "(obrigatória)";
        font - size: 13 px;
        font - weight: 400;
    }
`
      : null}

  @media (min-width: 720px) and (max-height: 899px) {
    margin: 9px 0 2%;
  }

  @media (min-width: 801px) and (min-height: 900px) {
    font-size: 27px;
  }
`;

export const Subtitle = styled(Title)
`
  font-weight: 500;
  font-size: 18px;
  margin: 18px 0 28px;

  @media (min-width: 720px) and (max-height: 899px) {
    margin-bottom: 2%;
  }

  @media (min-width: 801px) and (min-height: 900px) {
    font-size: 21px;
  }
`;
export const Label = styled(Title)
`
  font-weight: 500;
  font-family: Poppins;
  font-size: 14px;
  margin-bottom: 14px;
`;

export const TextArea = styled.textarea `
  width: 100%;
  height: 77px;
  border: 1px solid #ccc;
  resize: none;
  outline: none;
  padding: 16px;
  margin-bottom: 39px;
  border-radius: 6px;

  &::placeholder {
    color: #ccc;
    font-style: italic;
  }

  @media (min-width: 800px) {
    width: 475px;
  }
`;