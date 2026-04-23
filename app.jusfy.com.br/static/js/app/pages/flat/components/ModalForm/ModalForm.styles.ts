import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 99;
`;

export const Content = styled.div`
  width: 566px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f3f7;
  padding: 24px 24px 77px 24px;

  @media (min-width: 1500px) {
    width: 700px;
  }
`;

export const ContentTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LineDivision = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  top: 40px;
  background: #d9d9d9;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.black.primary};
  font-family: ${({ theme }) => theme.typography.primary};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 31.2px; /* 156% */
  margin: 0;
  padding: 0;
`;
export const ButtonClose = styled(SVG)`
  cursor: pointer;
`;

export const Form = styled.iframe`
  width: 100%;
  height: 641px;
  margin-top: 26px;
  border-radius: 3px;
`;
