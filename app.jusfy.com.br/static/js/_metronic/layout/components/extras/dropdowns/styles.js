import styled from "styled-components";
import {
    Link
} from "react-router-dom";

export const Anchor = styled(Link)
`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    color: #01ab7d;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.5px;
    text-decoration-line: underline;
  }
`;