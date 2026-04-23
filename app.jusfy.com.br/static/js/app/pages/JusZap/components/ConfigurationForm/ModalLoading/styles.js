import styled, {
    keyframes
} from "styled-components";

const fadeSlide = keyframes `
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div `
  position: relative;
  display: flex;
  padding: 32px;
  gap: 28px;
  flex-direction: column;
  align-items: center;
  width: 439px;

  @media screen and (max-width: 545px) {
    width: 100%;
  }
`;

export const CloseIcon = styled.div `
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const IconWrapper = styled.div `
  background-color: ${({ error }) => (error ? '#FDECEA' : '#E6F7F2')};
  border-radius: 10px;
  padding: 8px;
  animation: ${fadeSlide} 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2 `
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  animation: ${fadeSlide} 0.6s ease;
`;

export const Subtitle = styled.p `
  font-size: 14px;
  font-weight: 400;
  color: #655d79;
  animation: ${fadeSlide} 0.6s ease;
  text-align: center;
`;

export const ProgressContainer = styled.div `
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(8px);
  animation: fadeInUp 0.2s ease-out 0.2s forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProgressBar = styled.div `
  width: 100%;
  height: 6px;
  background-color: #E7E8EC;
  border-radius: 3px;
  overflow: hidden;
`;

export const ProgressFill = styled.div `
  height: 100%;
  background: linear-gradient(90deg, #01AB7D 0%, #00D4AA 100%);
  border-radius: 3px;
  transition: width 0.4s ease;
  width: ${props => `${Math.min(props.progress, 100)}%`};
`;