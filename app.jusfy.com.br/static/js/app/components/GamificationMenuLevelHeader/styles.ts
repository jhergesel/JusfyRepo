import styled from 'styled-components';

export const HeaderBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  background: #fafbff;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  min-width: 0;
`;

export const LevelTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  color: #131313;
`;

export const XpRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const XpText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
  color: #383839;

  strong {
    font-weight: 600;
  }
`;

export const RankingBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 8px 12px;
  border-radius: 4px;
  background: #e6f7f2;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  color: #01563f;
`;

export const RankingTrophySlot = styled.span`
  display: inline-flex;
  line-height: 0;
  color: #01563f;

  & .MuiSvgIcon-root {
    color: #01563f !important;
    fill: currentColor !important;
  }
`;
