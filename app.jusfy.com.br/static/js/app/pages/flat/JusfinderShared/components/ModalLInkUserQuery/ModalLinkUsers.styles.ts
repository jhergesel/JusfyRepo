import styled from "styled-components";
import SVG from "react-inlinesvg";
import Dialog from "@mui/material/Dialog";
import Select from "react-select";

export const Icon = styled(SVG)`
  cursor: pointer;
`;

export const ModalWrapper = styled(Dialog)`
  position: fixed;

  .MuiPaper-root {
    border-radius: 7px;
    overflow: hidden;
    z-index: 99999999;
    @media (max-width: 578px) {
      width: 360px !important;
    }
    @media (max-width: 370px) {
      width: 350px !important;
    }
  }

  .MuiBackdrop-root {
    opacity: 0.3 !important;
    background: #000 !important;
  }

  .MuiDialog-paper {
    max-width: 100% !important;
  }
`;

export const TitleModal = styled.h6`
  margin: 0;
  color: #131313;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const ContentModal = styled.div`
  display: flex;
  width: 500px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  position: relative;
`;
export const ContentButtonsAction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const ButtonModal = styled.button`
  width: 100%;
  font-weight: 600;
  display: flex;
  height: 40px;
  padding: 0px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 5px;
  border: ${({ border }) => border};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 4px;
  top: 7px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
`;

export const Wrapper = styled.div`
  position: relative;
`;
export const WrapperLoading = styled.div`
  position: relative;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #e6eaef;
  position: relative;
`;

export const SubTitle = styled.p`
  color: #383839;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-family: "Noto Sans" !important;
  padding: 0px 6px;
  border-radius: 5px;
  border: ${({ error }) =>
    error ? "1px solid #d83143" : "1px solid  #ceced2"};
  outline: none;
  padding: ${({ padding }) => (padding ? padding : null)};
`;
export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  label {
    color: #131313;
    font-family: "Noto Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    span {
      color: #d83143;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #d83143;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
export const SelectClient = styled(Select)`
  height: 40px !important;

  width: 100%;
  gap: 0px;
  border-radius: 5px !important;
  border: ${({ error }) => {
    return error ? "1px solid #FF3A4F !important" : "";
  }};
  font-family: "Noto Sans";

  .css-1s2u09g-control {
    height: 40px !important;
    width: 100% !important;
    border-radius: 5px !important;
    border: 1px solid #cac9cf !important;
    font-family: "Noto Sans";
  }
  .css-1pahdxg-control {
    height: 40px !important;
    width: 100% !important;
    border-radius: 5px !important;
    border: 1px solid #cac9cf !important;
    box-shadow: 0 0 0 1px #41c78f !important;
    font-family: "Noto Sans";
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  .css-26l3qy-menu {
    border-radius: 5px !important;
    position: absolute !important;
  }
  .css-4ljt47-MenuList {
    padding: 0 !important;
  }
  .css-12jo7m5-option {
    padding: 10px !important;
  }
`;
