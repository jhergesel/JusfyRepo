import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Header = styled.div `
  display: grid;
  align-items: center;
  gap: 24px;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;

  > :first-child {
    margin-left: 16px !important;
  }

  > :nth-child(2) {
    margin-left: 18px !important;
  }

  > :nth-child(3) {
    margin-left: 18px !important;
  }

  > :nth-child(4) {
    margin-left: 20px !important;
  }
  > :last-child {
    margin-right: 16px !important;
  }
`;

export const TitleHeaderContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 578px) {
    display: none;
  }
`;
export const Title = styled.span `
  color: #838486;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;