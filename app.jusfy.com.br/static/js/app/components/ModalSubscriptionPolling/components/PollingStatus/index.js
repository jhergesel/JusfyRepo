import React from "react";
import styled from "styled-components";
import {
    Spinner
} from "react-bootstrap";

const PollingContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`;

const StatusMessage = styled.div `
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const StatusDetails = styled.div `
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

const SpinnerContainer = styled.div `
  margin: 20px 0;
`;

const Title = styled.h3 `
  font-size: 20px;
  font-weight: 600;
  color: #2e3f75;
  margin-bottom: 20px;
`;

const PollingStatus = ({
    status = "processing"
}) => {
    const getStatusMessage = () => {
        switch (status) {
            case "processing":
                return "Processando sua assinatura...";
            case "pending":
                return "Assinatura pendente";
            case "trialing":
                return "Assinatura em período de teste";
            case "paid":
                return "Assinatura paga com sucesso!";
            case "active":
                return "Assinatura ativada com sucesso!";
            case "failed":
                return "Falha ao processar a assinatura";
            case "timeout":
                return "Tempo limite excedido";
            case "pending_payment":
                return 'Processando pagamento';
            default:
                return `Status atual: ${status}`;
        }
    };

    return ( <
        PollingContainer >
        <
        Title > Verificando status da assinatura < /Title>

        {
            status !== "active" && status !== "failed" && status !== "timeout" && ( <
                SpinnerContainer >
                <
                Spinner animation = "border"
                variant = "primary" / >
                <
                /SpinnerContainer>
            )
        }

        <
        StatusMessage > {
            getStatusMessage()
        } < /StatusMessage>

        {
            status !== "active" && status !== "failed" && status !== "timeout" && ( <
                StatusDetails >
                <
                div style = {
                    {
                        marginTop: "15px"
                    }
                } >
                Por favor, aguarde enquanto processamos sua assinatura.Não feche esta janela. <
                /div> <
                /StatusDetails>
            )
        } <
        /PollingContainer>
    );
};

export default PollingStatus;