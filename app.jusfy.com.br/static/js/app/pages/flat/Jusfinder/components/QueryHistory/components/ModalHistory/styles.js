import styled from "styled-components";
import SVG from "react-inlinesvg";
import Dialog from "@mui/material/Dialog";

export const Draft = styled.div `
  background: #ffe0d1;
  color: #e94f0e;
  font-size: 10px;
  font-weight: bold;
  display: block;
  padding: 2px 5px;
  border-radius: 4px;

  position: absolute;
  right: 13px;
  bottom: 20px;
`;
export const ContentButtons = styled.div `
  position: absolute;
  right: 30px;
  top: 15px;
  display: flex;
  gap: 10px;
  z-index: 9;
`;

export const Icon = styled(SVG)
`
  cursor: pointer;
`;
export const ButtonActionCalculator = styled.button `
	position: relative;
	width: ${({ width }) => width ?? "42px"};
	height: ${({ height }) => height ?? "40px"};
	padding: ${({ padding }) => padding ?? "0px 12px"};
	gap: 10px;
	border-radius: 5px;
	border:${({ border }) => border ?? "1px solid #ff3a4f"};
	background: transparent;
	margin-top: ${({ mt }) => mt ?? "24px"};

	&:hover::after {
		content: "";
		position: absolute;
		bottom: ${({ bottomHover }) => bottomHover ?? "34px"};
		left: 50%;
		transform: translateX(-50%);
		border: solid transparent;
		border-top-color: #535353;
		border-width: 8px;
		margin-left: 0px;
	}

	&:hover::before {
		content: "${({ textHover }) => textHover ?? "Excluir"}";
		width: max-content;
		position: absolute;
		bottom: calc(100% + 10px);
		left: 50%;
		transform: translateX(-50%);
		background-color: #535353;
		color: #ffffff;
		padding: 5px;
		border-radius: 5px;
		opacity: 1;
		padding: 8px 16px 8px 16px;
	}
`;

export const ModalWrapper = styled(Dialog)
`
  position: absolute;
  .MuiPaper-root {
    border-radius: 7px;
    overflow: ${({ overflow }) => overflow};
    min-width: ${({ minWidth }) => minWidth};

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

export const TitleModal = styled.h6 `
  margin: 0;
  color: #131313;
  font-family: ${({ theme }) => theme.typography.quartenary};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const ContentModal = styled.div `
  display: flex;
  width: 500px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
export const ContentButtonsAction = styled.div `
  width: 100%;
  display: flex;
  gap: 24px;
`;

export const ButtonModal = styled.button `
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

export const ButtonClose = styled.button `
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

export const Wrapper = styled.div `
  position: relative;
`;
export const WrapperLoading = styled.div `
  position: relative;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentCard = styled.div `
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #e6eaef;
  position: relative;
`;