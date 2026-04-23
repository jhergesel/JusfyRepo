import styled from "styled-components";
import { Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
export const CustomTooltip = styled(Tooltip)`
  font-family: "Noto Sans" !important;
  width: fit-content !important;

  strong {
    font-weight: 700;
  }
`;

export const IconInfo = styled(SVG)``;
export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
`;

export const TooltipContent = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  background: #fff;
  border-radius: 8px;

  padding: 24px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s;
  pointer-events: none;
  display: flex;
  width: 292px;
  flex-direction: column;
  align-items: flex-start;

  ${TooltipWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #374151;
  }
`;

export const TooltipTitle = styled.h3`
  color: #111219;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const TooltipDescription = styled.div``;

export const DescriptionText = styled.p`
  color: #5e5e60;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  strong {
    color: #5e5e68;
    font-weight: 600;
  }
`;
