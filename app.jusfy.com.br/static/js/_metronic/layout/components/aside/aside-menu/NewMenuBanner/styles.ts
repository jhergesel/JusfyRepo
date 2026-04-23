import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #e6f7f2;
  border: 2px solid #b3e6d8;
  border-radius: 4px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 140px;
  height: 90px;
  flex-shrink: 0;

  img {
    width: 140px;
    height: 90px;
    object-fit: contain;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 180px;
  min-width: 0;
`;

export const Title = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  color: #383839;
  text-align: center;
  display: block;
  width: 100%;
  min-width: 0;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const Description = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #5e5e60;
  text-align: center;
  display: block;
  width: 100%;
  min-width: 0;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const CTA = styled.button`
  width: 100%;
  height: 32px;
  padding: 4px 12px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  background: #01ab7d;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
