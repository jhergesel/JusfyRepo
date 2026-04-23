import styled, {
    keyframes
} from "styled-components";

const shine = keyframes `
  0% { left: -100%; }
  100% { left: 100%; }
`;

const logoPulse = keyframes `
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.9; }
`;

export const InputWrapper = styled.div `
  position: relative;
  width: 100%;
`;

export const FilePreview = styled.div `
  margin-bottom: 8px;
  padding: 8px;
  background: ${({ uploadingFile }) => uploadingFile ? '#FFF8E1' : '#F4F6F9'};
  border: ${({ uploadingFile }) => uploadingFile ? '1px solid #FFC107' : '1px solid #E1E3EA'};
  border-radius: 6px;
  font-size: 14px;
  color: #5E6278;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FileInfo = styled.span `
  flex: 1;
  word-break: break-word;
`;

export const UploadStatus = styled.div `
  font-size: 12px;
  color: #F57C00;
  margin-top: 2px;
`;

export const InputContainer = styled.div `
  border: 1px solid #E1E3EA;
  border-radius: 12px;
  background: #FFFFFF;
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #01AB7D;
    box-shadow: 0 0 0 3px rgba(1, 171, 125, 0.1);
  }
`;

export const TextareaGPT = styled.textarea `
  width: 100%;
  min-height: ${({ $expandedInput }) => $expandedInput ? '120px' : '60px'};
  max-height: 200px;
  padding: 16px;
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background: transparent;

  &::placeholder {
    color: #7E8299;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #E1E3EA;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #C1C1C1;
  }
`;

export const InputBottomSection = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px;
  border-top: 1px solid #F1F3F6;
  background: #FAFBFC;
  flex-wrap: wrap;
  gap: 4px;
`;

export const LeftSection = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ActiveToolBadge = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${({ $primaryColor }) => $primaryColor ? `
$ {
    $primaryColor
}
15 ` : '#F4F6F9'};
  border: 1px solid ${({ $primaryColor }) => $primaryColor || '#E1E3EA'};
  color: ${({ $primaryColor }) => $primaryColor || '#5E6278'};
  font-size: 11px;
  padding: 3px 6px;
  border-radius: 6px;
  font-weight: 500;
`;

export const RemoveBadgeButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1px;
  border-radius: 50%;
  transition: all 0.2s ease;
  margin-left: 2px;
  color: inherit;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const WhatsAppButton = styled.button `
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: #5E6278;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(37, 211, 102, 0.1);
    color: #1DA851;
  }

  span {
    font-weight: 500;
  }
`;

export const ContainerButtonsGPT = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;

  .MuiIconButton-root {
    padding: 8px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(126, 130, 153, 0.1);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const GenerationBanner = styled.div `
  margin-bottom: 8px;
  padding: 12px;
  border: 1px solid ${({ $primaryColor }) => $primaryColor || '#0030B9'};
  border-radius: 6px;
  font-size: 14px;
  color: ${({ $primaryColor }) => $primaryColor || '#0030B9'};
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(135deg, ${({ $primaryColor }) => $primaryColor || '#0030B9'}22 0%, ${({ $primaryColor }) => $primaryColor || '#0030B9'}11 100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px ${({ $primaryColor }) => $primaryColor || '#0030B9'}22;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${shine} 3s infinite;
    pointer-events: none;
  }
`;

export const GenerationText = styled.div `
  flex: 1;
  word-break: break-word;
  font-weight: 500;
`;

export const LogoPulsing = styled.img `
  animation: ${logoPulse} 2s ease-in-out infinite;
  width: auto;
  height: 20px;
`;