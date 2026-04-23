import styled from 'styled-components';

export const Wrapper = styled.section<{ isNewSidebarEnabled?: boolean }>`
  display: flex;
  width: 100%;
  background-color: #fff;
  margin-top: ${(props) => (props.isNewSidebarEnabled ? '0' : '85px')};
  margin-bottom: -85px;
  border-top: 1px solid var(--neutral-stroke-stroke-light, #e7e8ec);
  border-bottom: 1px solid var(--neutral-stroke-stroke-light, #e7e8ec);
  background: linear-gradient(93deg, #fff 44.91%, #fae4db 107.79%);
`;

export const TextContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 24px 40px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 24px 24px;
`;

export const Title = styled.h2`
  color: var(--neutral-text-text-darker, #131313);
  font-family: var(--font-family-font-family, 'Noto Sans');
  font-size: var(--font-size-font-size-3, 18px);
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

export const Description = styled.p`
  color: var(--neutral-text-text-darker, #131313);
  font-family: var(--font-family-font-family-text, 'Noto Sans');
  font-size: var(--font-size-font-size-14, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  border-radius: var(--large, 7px);
  border: 1px solid var(--brand-secondary-secondary-main, #e94f0e);
  background: var(--neutral-background-background-lighter, #fff);
  display: flex;
  height: 40px;
  width: 120px;
  justify-content: center;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  align-items: end;
  padding-right: 35px;
  padding-top: 24px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 24px 24px;
  img {
    height: 215px;
  }
`;
