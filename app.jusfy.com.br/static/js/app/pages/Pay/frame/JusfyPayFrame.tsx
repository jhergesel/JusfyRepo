import { useUserPreferences } from 'app/services/userPreferences';
import { DASHBOARD_VERSION_VALUES } from 'app/services/userPreferences/types';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { config } from '../../../../config/env';

const getJusfyPayToken = (): string => {
  try {
    const persisted = localStorage.getItem('persist:v713-demo1-auth');
    if (persisted) {
      const parsed = JSON.parse(persisted);
      return (parsed.authToken || '').replace(/"/g, '');
    }
  } catch (_) {}
  return '';
};

const buildEmbeddedUrl = (path: string, newPaymentLink?: boolean): string => {
  const baseUrl = config.jusfyPay.url;
  const token = getJusfyPayToken();
  const params = new URLSearchParams({ embedded: 'true' });
  if (token) params.set('token', token);
  if (newPaymentLink) params.set('newPaymentLink', 'true');
  return `${baseUrl}${path}?${params.toString()}`;
};

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 1;
`;

interface JusfyPayFrameProps {
  path?: string;
  newPaymentLink?: boolean;
}

const JusfyPayFrame: React.FC<JusfyPayFrameProps> = ({
  path = '/dashboard',
  newPaymentLink = false,
}) => {
  const {
    preferences: { menuVersion },
  } = useUserPreferences();
  const isNewMenu = menuVersion === DASHBOARD_VERSION_VALUES.v2;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const src = buildEmbeddedUrl(path, newPaymentLink);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <IframeWrapper>
      {isLoading && (
        <LoadingOverlay>
          <div className="spinner spinner-primary spinner-lg" />
        </LoadingOverlay>
      )}
      <StyledIframe
        ref={iframeRef}
        src={src}
        title="Jusfy Pay"
        allow="clipboard-write"
        onLoad={handleLoad}
        style={{ marginTop: isNewMenu ? '0' : '65px' }}
      />
    </IframeWrapper>
  );
};

export default JusfyPayFrame;
