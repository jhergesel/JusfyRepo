import styled, {
    keyframes
} from "styled-components";

const slideProgress = keyframes `
  0% {
    left: -20px;
  }
  50% {
    left: calc(50% - 10px);
  }
  100% {
    left: calc(100% + 20px);
  }
`;

export const Overlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  backdrop-filter: blur(4px);
`;

export const DropZone = styled.div `
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 3px dashed #01AB7D;
  max-width: 400px;
  text-align: center;
`;

export const IconContainer = styled.div `
  width: 80px;
  height: 80px;
  background-color: rgba(65, 199, 143, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #01AB7D;
`;

export const TextContainer = styled.div ``;

export const MainText = styled.h2 `
  margin: 0 0 8px 0;
  color: #01AB7D;
  font-size: 24px;
  font-weight: bold;
`;

export const SubText = styled.p `
  margin: 0;
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;

export const SizeLimit = styled.span `
  font-size: 14px;
  color: #999;
`;

export const ProgressIndicator = styled.div `
  width: 60px;
  height: 4px;
  background-color: #e1e3ea;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export const ProgressBar = styled.div `
  width: 20px;
  height: 100%;
  background-color: #01AB7D;
  border-radius: 2px;
  animation: ${slideProgress} 1.5s ease-in-out infinite;
  position: absolute;
`;