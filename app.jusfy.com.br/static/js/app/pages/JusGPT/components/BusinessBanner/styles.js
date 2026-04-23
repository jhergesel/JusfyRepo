import styled from "styled-components";

export const BannerContainer = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 20px 28px;
  border-radius: 8px;
  border: 1px solid #D1B4FD;
  background: #FCFAFF;
  margin-bottom: 16px;
  overflow: hidden;
  position: relative;
  min-height: 100px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  height: 145px;

  &:hover {
    box-shadow: 0 4px 16px rgba(79, 5, 190, 0.15);
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
    text-align: center;
    height: auto;
    min-height: auto;
  }
`;

export const BannerIllustration = styled.img `
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  transform: translateY(-40px);
  flex-shrink: 0;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BannerContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 450px;
  margin-left: 40%;
  z-index: 5;

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const BannerText = styled.p `
  font-size: 18px;
  font-weight: 600;
  color: #1A1A2E;
  margin: 0;
  line-height: 1.4;
  text-align: center;

  span.highlight-green {
    color: #4F05BE;
    font-weight: 700;
  }

  span.highlight-bold {
    color: #4F05BE;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BannerButton = styled.button `
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  background: #4F05BE;
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #2D2D44;
  }
`;