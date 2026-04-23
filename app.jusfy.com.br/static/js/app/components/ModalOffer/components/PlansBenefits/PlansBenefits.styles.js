import styled, {
    keyframes
} from "styled-components";

export const ToggleBenefits = styled.label `
    padding: 10px;
    width: 100%;
    margin-bottom: 5px;
    color: #F56700;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
    position: absolute;
    z-index: 999;
    pointer-events: visible;
    cursor: pointer;
    border-radius: 6px;
    transition: .6s;
    opacity: 0.6;

    &:hover {
        opacity: 1;
        background: #FEF3F3;
    }
 `

const slideIn = keyframes `
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px; /* Valor suficiente para acomodar o conteúdo */
    opacity: 1;
  }
`;

const slideOut = keyframes `
  from {
    max-height: 1000px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const ContainerBenefits = styled.div `
    position: relative;
    height: auto;

    .list-benefit-slider {
        overflow: hidden;
        max-height: ${({ toggled }) => (toggled ? '1000px' : '0')};
        animation: ${({ toggled }) => (toggled ? slideIn : slideOut)} 0.8s forwards;
    }
    .list-benefit-slider li {
        width: 100%;
        transition: width 0.8s;
      }
    
    .list-benefit-slider li {
        transition: width 0.8s;
        width: ${({ toggled }) => (toggled ? '100%' : '100%')};
    }
`