import styled from "styled-components";

export const ContainerMessages = styled.div `
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Estilização da scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #e1e3ea transparent;

  /* Webkit scrollbar (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e1e3ea;
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c4c7d0;
  }
`;

export const Message = styled.div `
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) =>
    type === 'user' ? 'flex-end' : 'flex-start'
  };
  gap: 8px;
  max-width: 100%;
`;

export const MessageContent = styled.div `
  display: flex;
  align-items: flex-start;
  gap: 12px;
  max-width: 85%;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export const MessageText = styled.div `
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ type, isSlowWarning, isTimeoutError }) => {
    if (isSlowWarning || isTimeoutError) {
      return '#F5F5F5'; // Fundo cinza claro para avisos
    }
    switch (type) {
      case 'user':
        return '#01AB7D';
      case 'model':
      case 'assistant':
        return '#F8F9FA';
      case 'error':
        return '#FBEAEC';
      case 'system':
        return '#E6F3F7';
      default:
        return '#F8F9FA';
    }
  }};
  border: ${({ isSlowWarning, isTimeoutError }) => {
    if (isSlowWarning || isTimeoutError) {
      return '1px solid #E0E0E0';
    }
    return 'none';
  }};
  color: ${({ type }) =>
    type === 'user' ? '#FFFFFF' : '#333333'
  };
  word-wrap: break-word;
  overflow-wrap: anywhere;
  word-break: break-word;
  line-height: 1.5;
  font-size: 14px;
  position: relative;

  /* Markdown styling */
  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  a {
    color: ${({ type }) => type === 'user' ? '#B3E5D6' : '#01AB7D'};
    text-decoration: underline;
  }

  br {
    line-height: 1.8;
  }
`;

export const MessageButtons = styled.div `
  display: flex;
  gap: 4px;
  margin-top: 4px;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }

  .MuiIconButton-root {
    padding: 6px;
    color: #7E8299;

    &:hover {
      background-color: rgba(126, 130, 153, 0.1);
      color: #01AB7D;
    }
  }
`;

// Container para botões de ação (suporte e manual)
export const ActionButtonsContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  align-items: flex-start;
`;