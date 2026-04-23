import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const BannerWrapper = styled.div `
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  color: #721c24;
  background-color: #f8d7da;
  padding: 8px 12px;
  text-align: center;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  border: 1px solid #721c24;
  border-radius: 8px 8px 0 0;
`;

export default function ImpersonateBanner({
    adminEmail,
    formattedExpiration,
    onEndSession
}) {
    return ( <
        BannerWrapper >
        <
        span >
        Sessão sendo acessada pelo administrador: < strong > {
            adminEmail
        } < /strong>. Expira em: <strong>{formattedExpiration}</strong >
        <
        /span> <
        Button variant = "outlined"
        onClick = {
            onEndSession
        }
        sx = {
            {
                marginLeft: '20px',
                borderColor: '#721c24',
                color: '#721c24',
                '&:hover': {
                    borderColor: '#721c24',
                    backgroundColor: 'rgba(114, 28, 36, 0.15)',
                    color: '#5a161d',
                },
            }
        } >
        Encerrar Sessão <
        /Button> <
        /BannerWrapper>
    );
}