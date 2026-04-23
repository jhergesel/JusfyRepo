import styled from "styled-components";

export const QuickChatWrapper = styled.div `
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: fit-content;
  max-height: calc(100vh - 300px);

  @media (max-width: 768px) {
    max-height: calc(100vh - 250px);
    margin-top: 8px;
  }
`;

export const ContainerQuickChat = styled.div `
  display: grid;
  grid-template-columns: ${({ isMobile, count }) =>
    isMobile ? 'repeat(2, 1fr)' : `
repeat($ {
    count || 4
}, 1 fr)
`};
  gap: 12px;
  height: fit-content;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 8px;
    gap: 10px;
  }
`;

export const CardQuickChat = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ large }) => large ? '14px' : '12px'};
  padding: ${({ large }) => large ? '16px' : '12px'};
  border: 1px solid #E7E8EC;
  border-radius: 8px;
  cursor: pointer;
  background: #f4f5f9;
  transition: background 0.2s ease;

  &:hover {
    background: #e1e3eb;
  }
`;

export const CardTopRow = styled.div `
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

export const CardBottomRow = styled.div `
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const InfoIconWrapper = styled.span `
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  color: #8F95A0;
  transition: color 0.2s ease;

  &:hover {
    color: #3F4254;
  }
`;

export const CardShortDesc = styled.p `
  font-size: 11px;
  color: #7E8299;
  margin: 0;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardQuickChatTitle = styled.h3 `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 13px;
  color: #3F4254;
  margin: 0;
  line-height: 1.3;
  flex: 1;
  flex-wrap: nowrap;
`;

export const ArrowButton = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardQuickChatDesc = styled.p `
  color: #838486;
  font-size: 12px;
  line-height: 1.5;
`;

export const StartButton = styled.span `
  color: #01AB7D;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 13px;
  transition: color 0.2s ease;

  &:hover {
    color: #019968;
  }

  .MuiSvgIcon-root {
    font-size: 18px;
    transition: transform 0.2s ease;
  }

  &:hover .MuiSvgIcon-root {
    transform: translateX(2px);
  }
`;

export const IconCard = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  width: 40px;
  height: 40px;

  &:hover {
    background: #f4f5f9;
  }
`;

export const ContainerPromo = styled.div `
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const HighlightedQuickChat = styled.div `
  padding: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid #EEE4FE;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #EEE4FE !important;
  background: linear-gradient(180deg, #FFF 12.73%, #EEE4FE 136.17%);
  color: #fff;
  border: none;
  width: 100%;
  max-width: 400px;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid #EEE4FE !important;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  }
`

export const HighlightedButton = styled(StartButton)
`
  background: #4F05BE;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  transition: color 0.2s ease;
  padding: 8px 12px;

  &:hover {
    background: #4F05BE;
    color: #fff;
  }
`

export const Separator = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #E1E3EA 20%, #E1E3EA 80%, transparent);
  }

  span {
    background: #FFFFFF;
    padding: 0 20px;
    color: #7E8299;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
`;

export const CardLargeTitleRow = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ComingSoonBadge = styled.span `
  background: #F0F0F0;
  color: #7E8299;
  font-size: 10px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
`;

export const BusinessCardWrapper = styled.div `
  position: relative;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  height: 100%;

  > * {
    flex: 1;
  }
`;

export const BusinessBadge = styled.div `
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: none;
  border-radius: 20px;
  padding: 2px 10px;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 1;
`;