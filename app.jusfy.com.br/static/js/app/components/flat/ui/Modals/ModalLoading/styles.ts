import styled, { keyframes } from 'styled-components';

const fadeSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 40px;
  gap: 0;
  flex-direction: column;
  align-items: center;
  width: 500px;

  @media screen and (max-width: 545px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: #e7f7f5;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  
  & > * {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #212121;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 0;
  animation: ${fadeSlide} 0.6s ease;
`;

export const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #616161;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
  animation: ${fadeSlide} 0.6s ease;
`;

export const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 0;
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

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #e7f7f5;
  border-radius: 4px;
  overflow: visible;
`;

export const ProgressFill = styled.div`
  height: 8px;
  background-color: #1cb59f;
  border-radius: 4px;
  width: ${(props) => `${Math.min(props.progress, 100)}%`};
`;

export const ProgressIndicator = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #1cb59f;
  border-radius: 50%;
  left: ${(props) => {
    const progress = Math.min(Math.max(props.progress, 0), 100);
    if (progress === 0) return '0px';
    if (progress === 100) return 'calc(100% - 8px)';
    return `calc(${progress}% - 8px)`;
  }};
`;
