import SVG from "react-inlinesvg";
import styled from "styled-components";

export const CardQuery = styled.div`
  display: flex;
  padding: 16px 24px 24px 12px;
  align-items: flex-start;
  gap: 0;

  border-radius: 7px;
  border: 1px solid #e7e8ec;
  background: #fff;
  cursor: pointer;
`;

export const ContentCheckbox = styled.div`
  display: flex;
  flex-direction: column;

  .MuiFormControlLabel-root {
    padding: 0 0 0 0 !important;
    margin: 0 0 0 0 !important;
    display: flex !important;
    align-items: center !important;
  }

  .MuiFormControlLabel-root.Mui-disabled {
    .MuiSvgIcon-root,
    .MuiRadio-root,
    .Mui-disabled {
      color: #808080 !important;
    }
  }
  .MuiSvgIcon-root {
    color: ${({ checked }) => (checked ? "#01AB7D" : "#A0A0A0")} !important;
  }

  .title {
    font: normal 400 14px ${({ theme }) => theme.typography.quartenary} !important;

    line-height: 19.6px !important;
    text-align: left;
    margin: 0 !important;
    cursor: pointer;

    span {
      color: #808080;
      font: normal 400 13px ${({ theme }) => theme.typography.quartenary};
      line-height: 140%;
    }
  }
`;

export const ContentCard = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

export const ContentCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;
  position: relative;

  span {
    color: #131313;

    gap: 4px;
    align-items: center;
    font: normal 500 14px ${({ theme }) => theme.typography.quartenary};
    line-height: 140%;
  }
`;

export const CreditQuantityCard = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: #e6f7f2;

  color: #383839;
  text-align: center;

  font-family: ${({ theme }) => theme.typography.quartenary};

  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
export const Icon = styled(SVG)``;

export const Description = styled.span`
  color: rgba(0, 0, 0, 0.8);

  font: normal 400 14px ${({ theme }) => theme.typography.quartenary};
  line-height: 140%;
  margin-bottom: 16px;
`;
