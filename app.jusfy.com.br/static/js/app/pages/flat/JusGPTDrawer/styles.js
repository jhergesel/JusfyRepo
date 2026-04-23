import styled from "styled-components";
import {
    Drawer
} from "@mui/material";

export const FilterDrawer = styled(Drawer)
`
  .MuiPaper-root {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 0;
    width: 420px;

    @media (max-width: 768px) {
      width: 100%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 8px;
    }

    @media (max-width: 480px) {
      width: 100vw;
    }
  }

  /* Previne que o drawer remova o scroll da página */
  .MuiModal-root {
    overflow: visible !important;
  }
`;

export const Dot = styled.span `
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color || "#CBD5E1"};
  flex: 0 0 8px;
`;

export const ContextPill = styled.span `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 12px;
  color: #fff;
  background: #7C3AED;
  border: none;
  border-radius: 999px;
  white-space: nowrap;
  font-weight: 500;
`;

export const HeaderSection = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
`;

export const HeaderTitle = styled.h1 `
  font-size: 16px;
  font-weight: 600;
  color: #1F2937;
  margin: 0;
  flex: 1;
`;

export const AccordionContainer = styled.div `
  background: linear-gradient(135deg, #E8F5F1 0%, #D1EDE5 100%);
  border-radius: 12px;
  margin: 0 12px 12px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const AccordionHeader = styled.button `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

export const AccordionHeaderTitle = styled.span `
  font-size: 14px;
  font-weight: 500;
  color: #1F2937;
`;

export const AccordionToggleIcon = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};

  svg {
    font-size: 20px;
    color: #6B7280;
  }
`;

export const AccordionContent = styled.div `
  max-height: ${({ $isOpen }) => $isOpen ? '500px' : '0'};
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  padding: ${({ $isOpen }) => $isOpen ? '0 16px 16px' : '0 16px'};
`;

export const BannerSection = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BannerImage = styled.img `
  width: 100px;
  height: auto;
  flex-shrink: 0;
`;

export const BannerTextContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BannerTitle = styled.span `
  font-size: 18px;
  font-weight: 600;
  color: #01AB7D;
  line-height: 1.3;
`;

export const BannerSubtitle = styled.span `
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
  line-height: 1.3;
`;

export const ToggleWrapper = styled.div `
  padding: 0 12px 12px;
`;

export const TabContentContainer = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HistoryListContainer = styled.div `
  flex: 1;
  overflow-y: auto;
  padding: 0 12px 12px;
`;

export const HistoryList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HistoryItem = styled.button `
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  background: #B3E6D8;
  border: 1px solid ${({ $isActive }) => $isActive ? '#01AB7D' : '#E5E7EB'};
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    border-color: #01AB7D;
    background: #F8FDFB;
  }
`;

export const HistoryItemIcon = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #E8F5F1 0%, #D1EDE5 100%);
  border-radius: 6px;
  flex-shrink: 0;

  svg {
    font-size: 16px;
    color: #01AB7D;
  }
`;

export const HistoryItemContent = styled.div `
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const HistoryItemTitle = styled.span `
  font-size: 13px;
  font-weight: 500;
  color: #383839;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HistoryItemDate = styled.span `
  font-size: 11px;
  color: #6B7280;
`;

export const EmptyHistoryMessage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: #6B7280;
  gap: 8px;

  svg {
    font-size: 40px;
    color: #D1D5DB;
    margin-bottom: 8px;
  }
`;

export const EmptyHistoryText = styled.span `
  font-size: 14px;
  color: #6B7280;
`;

export const EmptyHistorySubtext = styled.span `
  font-size: 13px;
  color: #9CA3AF;
`;

export const HumanSupportLink = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  color: #6B7280;
  font-size: 13px;
  cursor: pointer;
  padding: 0;
  margin-top: 12px;
  transition: color 0.2s;
  width: 100%;

  &:hover {
    color: #01AB7D;
    text-decoration: underline;
  }

  svg {
    font-size: 18px;
  }
`;

// Card principal com histórico expansível
export const MainCard = styled.div `
  display: flex;
  flex-direction: column;
  background: linear-gradient(182deg, #E6F7F2 6.05%, #FFF 120.27%);
  border: 1px solid #B3E6D8;
  border-radius: 12px;
  margin: 0 12px;
  overflow: hidden;
`;

export const HistorySelectContainer = styled.div `
  margin: 12px 12px 0;
`;

// Mantidos para compatibilidade, mas não mais usados
export const HistoryToggleSection = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  background: #E6F7F2;
  border: 1px solid #B3E6D8;
  border-radius: 8px;
  margin: 12px 12px 0;
`;

export const HistoryHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HistoryToggleLabel = styled.span `
  font-size: 14px;
  font-weight: 500;
  color: #1F2937;
`;

export const HistoryToggleButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  svg {
    font-size: 20px;
    color: #6B7280;
  }
`;

// Lista de histórico dentro do card
export const HistoryInlineList = styled.div `
  max-height: ${({ $isOpen }) => $isOpen ? '180px' : '0'};
  margin: 0;
  padding: 8px 0;
  overflow-y: auto;
  transition: max-height 0.3s ease, padding 0.3s ease;
  width: 100%;

  /* Estilização suave da scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #B3E6D8 transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #B3E6D8;
    border-radius: 2px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #8DD4C0;
  }
`;

// Ilustração de boas-vindas
export const WelcomeSection = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 12px;
  text-align: left;
`;

export const WelcomeIllustration = styled.img `
  width: 220px;
  height: auto;
  margin-bottom: 16px;
`;

export const WelcomeTitle = styled.h2 `
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
  margin: 0 0 4px 0;
  line-height: 1.4;

  span {
    color: #01AB7D;
  }
`;

export const WelcomeText = styled.p `
  font-size: 13px;
  color: #4B5563;
  line-height: 1.5;
  margin: 12px 0 0 0;
`;

// Seção de Principais dúvidas
export const QuickActionsTitle = styled.h3 `
  font-size: 13px;
  font-weight: 600;
  color: #1F2937;
  margin: 0 0 10px 0;
  text-align: left;
  width: 100%;
`;

export const QuickActionsContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 8px;
`;

export const QuickActionChip = styled.button `
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 12px;
  color: #383839;
  background: #B3E6D8;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: #6FC3AC;
  }
`;

export const AttendantButton = styled.button `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 500;
  color: #01AB7D;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #01AB7D;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 4px 16px 12px;
  width: fit-content;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: #fff;
  }
`;

// Container do ChatInput dentro do card
export const CardInputContainer = styled.div `
  margin: auto 12px 12px;
  margin-top: 18px;
  border-radius: 12px;
  border: 1px solid #01AB7D;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  min-height: 120px;
`;

// Área de conteúdo principal com scroll
export const MainContentArea = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ScrollableContent = styled.div `
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

// Chips na tela de conversa
export const ConversationChipsContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 12px;
`;