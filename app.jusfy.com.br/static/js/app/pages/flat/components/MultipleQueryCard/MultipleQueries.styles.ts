import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  flex-grow: 1;
  cursor: pointer;

  ${({ isMaintenance }) =>
    isMaintenance
      ? `
pointer-events: none;
`
      : ""}

  @media (max-width: 578px) {
    width: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.quartenary};
  padding: 24px;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 48px;
  h1 {
    color: #017858;
    text-align: center;
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const ButtonContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const ActionButtonWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  span {
    font-family: ${({ theme }) => theme.typography.quartenary};
    font-size: 14px;
    font-weight: 600;
    width: 100%;
  }

  span.highlight {
    text-decoration: underline;
  }

  span.left {
    text-align: left;
  }
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 24px;
  margin-top: 8px;
  text-align: center;
  p {
    color: #535353;
    font-weight: 400;
    font-size: 14px;
    opacity: 0.8;
  }
`;
