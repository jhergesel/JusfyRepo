import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const TitleCard = styled.h5 `
  font: normal 600 20px ${({ theme }) => theme.typography.quartenary};
  display: flex;
  gap: 8px;
  align-items: center;
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black.primary};
  margin: 0;

  @media (max-width: 578px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleOptional = styled.span `
  font: normal 400 13px ${({ theme }) => theme.typography.quartenary};
  line-height: 18.2px;
  text-align: left;
  color: #808080;
`;
export const SubTitleCard = styled.h6 `
  margin: 0;
  font: normal 400 13px ${({ theme }) => theme.typography.quartenary};
  line-height: 18.2px;
  text-align: left;
  color: #3f4254;
`;