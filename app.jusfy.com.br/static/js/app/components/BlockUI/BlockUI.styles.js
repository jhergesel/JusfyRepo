import styled, {
    css,
    keyframes
} from "styled-components";

const fadeInRTL1 = keyframes `
  0% { opacity: 0; transform: translateX(20px); }
  30% { opacity: 1; transform: translateX(0px); }
  60% { opacity: 1; }
  80% { opacity: 0; }
`;

const fadeInRTL2 = keyframes `
  0% { opacity: 0; }
  10% { opacity: 0; transform: translateX(20px); }
  40% { opacity: 1; transform: translateX(0px); }
  60% { opacity: 1; }
  80% { opacity: 0; }
`;

const fadeInRTL3 = keyframes `
  0% { opacity: 0; }
  20% { opacity: 0; transform: translateX(20px); }
  50% { opacity: 1; transform: translateX(0px); }
  60% { opacity: 1; }
  80% { opacity: 0; }
`;

const Wrapper = styled.div `
  ${props =>
    props.styles &&
    css`
      ${props.styles}
    `}
  ${props => props.blocking && "cursor: wait;"}
  position: relative;
  min-height: 3em;
`;

const Overlay = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  opacity: 0.5;
`;

const MessageContainer = styled.div `
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  transform: translateY(-50%);
`;

const LoadingIndicator = styled.div `
  text-align: center;
`;

const LoadingBullet = styled.span `
  display: inline-block;
  opacity: 0;
  font-size: 2em;
  color: #02a17c;

  &:nth-child(1) {
    animation: ${fadeInRTL1} 3s ease 0.5s infinite;
  }
  &:nth-child(2) {
    animation: ${fadeInRTL2} 3s ease 0.5s infinite;
  }
  &:nth-child(3) {
    animation: ${fadeInRTL3} 3s ease 0.5s infinite;
  }
`;

export {
    LoadingBullet,
    LoadingIndicator,
    MessageContainer,
    Overlay,
    Wrapper
};