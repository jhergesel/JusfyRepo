import styled, {
    keyframes
} from "styled-components";
import SVG from "react-inlinesvg";
import {
    Modal
} from "react-bootstrap";

export const ButtonClose = styled.div `
  background: #41c78f;
  display: inline-block;
  padding: 10px 17px;
  position: absolute;
  top: -15px;
  right: -15px;
  color: #fff;
  font-weight: bold;
  border-radius: 50px;

  :hover {
    cursor: pointer;
    background: #3ab380;
  }
`;

export const ResponsiveModal = styled(Modal)
`
  .modal-body {
    padding: 40px !important;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .modal-content {
    border-radius: 10px !important;
    max-height: 90vh;
  }

  .modal-dialog {
    max-width: 700px !important;
  }

  @media screen and (max-width: 767px) {
    .modal-content {
      width: 90% !important;
      margin: 0 auto !important;
    }
  }
`;

export const Content = styled.div `
  width: 100%;
  h3 {
    text-align: center;
    font-weight: bold;
    color: #2e3f75;
  }

  > p:nth-child(2) {
    text-align: center;
  }
`;

export const Produto = styled.div `
  cursor: pointer;
  border: 2px solid #f1f1f1;
  padding: 20px;
  border-radius: 5px;
  height: 100%;

  :hover {
    border: 2px solid #41c78f;
    background: #fafafa;
  }
  span {
    color: #2e3f75;
    font-weight: bold;
    font-size: 12px;
  }
  p.preco {
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: bold;
    opacity: 0.7;
    color: #2e3f75;
  }
  p.subtitulo {
    margin-top: 5px !important;
    height: 40px;
    font-size: 12px;
    line-height: 18px;
    margin: 0;
    color: #5f677d;
    opacity: 0.6;
    margin-bottom: 20px;
  }
  a {
    color: #2e3f75;
    font-weight: bold;
    position: absolute;
    bottom: 23px;
    text-decoration: none;
    font-size: 12px;
    display: block;
  }
  a img {
    display: inline-block;
    width: 18px;
    margin-left: 10px;
    opacity: 0.5;
    margin-bottom: 0px;
  }
  ul {
    padding: 0 0 0 4px;
    margin-bottom: 40px;
  }
  ul li {
    list-style: none;
  }
  ul li i {
    color: #41c78f;
  }
  ul li i.disabled {
    color: #576574;
  }

  ul li span {
    opacity: 0.4;
    font-size: 11px;
    color: #1c2e66;
    margin-left: 5px;
    line-height: 26px;
  }

  @media only screen and (max-width: 899px) {
    width: 100%;
    margin-bottom: 10px;
    padding: 13px;
    span {
      color: #41c78f;
    }
    p {
      display: none;
    }
    a {
      position: relative;
      margin-top: 15px;
      bottom: 0px;
    }
  }
`;

export const Icon = styled(SVG)
`
  margin-left: 10px;
  margin-top: 9px;
`;
export const OfferIcon = styled(SVG)
``;

export const ContentPrice = styled.div `
  display: flex;
  flex-direction: column;
`;
export const ContentSwitch = styled.div `
  display: flex;
  flex-direction: column;

  .MuiFormControlLabel-root {
    margin: 0 !important;

    .MuiSwitch-root {
      .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
        color: #01ab7d !important;
      }
      .css-1uf4bbi.Mui-checked {
        color: #01ab7d !important;
      }

      .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
        + .MuiSwitch-track {
        background-color: #01ab7d !important;
      }

      .css-1uf4bbi.Mui-checked + .MuiSwitch-track {
        background-color: #01ab7d !important;
      }
    }
    .MuiTypography-root {
      color: #3f4254;
      font-family: "Noto Sans" !important;
      font-size: 14px !important;
      font-style: normal !important;
      font-weight: 400 !important;
      line-height: 140%;
      margin-left: 4px !important;
    }
  }
`;

export const FormerPrice = styled.span `
  color: rgba(46, 63, 117, 0.4) !important;
  font-family: Poppins, sans-serif;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.28px;
  text-decoration: line-through;
`;
export const Row = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;
const slideIn = keyframes `
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px;
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

export const ToggleBenefits = styled.span `
  display: flex;
  width: 191px;
  height: 36px;
  justify-content: left;
  align-items: center;
  gap: 10px;
  color: #41c78f !important;
  font-family: Poppins !important;
  font-size: 13px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: 19.5px; /* 150% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
  transition: opacity 0.3s ease;
  z-index: 2;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContainerBenefits = styled.div `
   position: relative;
   display: flex;
   flex-direction:column;
  .list-benefit-slider {
    overflow: hidden;
    max-height: ${({ toggled }) => (toggled ? "1000px" : "0")};
    animation: ${({ toggled }) => (toggled ? slideIn : slideOut)} 0.8s forwards;
  }
  .list-benefit-slider li {
    width: 100%;
    transition: width 0.8s;
  }

  .list-benefit-slider li {
    transition: width 0.8s;
    width: ${({ toggled }) => (toggled ? "100%" : "100%")};
  
`;

export const SignButton = styled.a `
  display: flex;
  padding: 9px 24px;
  align-items: center;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #41c78f;
  span {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 14px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 150% */
  }
  .arrow-icon {
    stroke-width: 2px;
    stroke: #fff;
    width: 26px;
  }
  @media (max-width: 578px) {
    width: 167px;
    padding: 8px 25px 11px 28px;

    span {
      font-size: 12px;
    }
  }
  &:hover {
    background: #46be8c;
  }
`;

export const PlanContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: var(--large-24-px, 24px);
  width: 100%;

  &.col-lg-4 {
    @media (min-width: 992px) {
      width: 33.3333%;
    }
  }

  &.col-12 {
    width: 100%;
  }

  margin-bottom: 24px;
`;

export const PlanTitleContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
`;