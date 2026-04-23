import styled from "styled-components";
import {
    Modal
} from "react-bootstrap";

import SVG from "react-inlinesvg";

export const Icon = styled(SVG)
`
  margin-left: 10px;
  margin-top: 9px;
`;
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
  position: relative;

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
    margin-bottom: 5px;
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

export const ContainerWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px;
  border: 2px solid #ebedf3;
  background: #fff;
  padding: 24px;
`;

export const ContentPlan = styled.div `
  input:focus {
    border: 1px solid #41c78f !important;
  }

  span {
    color: #2e3f75;
    font-weight: bold;
    font-size: 30px;
  }

  h3 {
    color: #2e3f75;
    font-size: 22px;
    display: inline-block;
  }

  p {
    width: 70%;
    text-align: left;
    color: #2e3f75;
    opacity: 0.6;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  span.price {
    font-size: 30px;
    text-align: right;
    display: inline-block;
    float: right;
    margin-top: -68px;
  }

  span.desc-payment {
    font-weight: normal;
    font-size: 12px;
    width: 61%;
    display: inline-block;
    margin-top: 20px;
  }

  hr {
    opacity: 0.1;
    margin: 10px 0px 20px 0px;
  }

  label:not(.invalid-feedback) {
    margin: 0;
    padding: 0;
    font-size: 13px;
    opacity: 0.6;
    color: #091d5c;
    margin: 10px 0px;
  }

  input.form-control {
    margin: 0;
    padding: 9px;
    outline: none;
    box-shadow: none;
    border: 1px solid #ccc;
  }

  .btn-primary {
    background: #41c78f;
    border: none;
    display: inline-block;
    border-radius: 50px;
    padding: 12px 40px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 13px;
    float: right;
  }

  .btn-primary:hover {
    cursor: pointer;
    background: #3ab380;
  }

  @media only screen and (max-width: 899px) {
    .row {
      margin-top: 0px;
    }

    hr {
      margin: 10px;
    }

    label {
      margin: 5px 0px;
    }

    span {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      width: 100%;
    }

    span.price {
      float: none;
      margin: 0 auto;
      text-align: center;
      letter-spacing: -0.9;
    }

    input.form-control {
      width: 100%;
      margin-bottom: 10px;
      padding: 4px;
    }

    span.desc-payment {
      width: 100%;
      margin-top: 0;
      opacity: 0.6;
      font-size: 10px;
    }

    .btn-primary {
      padding: 10px 40px;
      font-size: 14px;
      width: 100%;
      margin-top: 10px;
    }
  }
`;

export const ButtonBack = styled.img `
  filter: brightness(0) saturate(100%) invert(58%) sepia(59%) saturate(452%)
    hue-rotate(103deg) brightness(92%) contrast(83%);
  cursor: pointer;
  margin: 0 5px 5px 0;
`;

export const CreditCardContainer = styled.div `
  position: relative;

  img {
    height: 23px;
    position: absolute;
    right: 9px;
    top: 8px;
  }
`;