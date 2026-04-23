import axios from 'axios';
import traceId from '../../../redux/traceId';

export const getPixTransaction = async (clientId: string) => {
  if (!clientId) {
    throw new Error('client_id é obrigatório');
  }

  const jusbillUrl = process.env.REACT_APP_JUSBILL_URL;

  if (!jusbillUrl) {
    throw new Error('REACT_APP_JUSBILL_URL não configurado');
  }

  try {
    const response = await axios.get(
      `${jusbillUrl}/charges/pix/transaction/${encodeURIComponent(clientId)}`,
      {
        headers: {
          'x-trace-id': traceId,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error(
      `Erro ao buscar transação Pix: ${error?.response?.status ||
        error.message}`,
    );
  }
};

export const createPixTransaction = async (
  clientId: string,
  planId: string,
) => {
  if (!clientId) {
    throw new Error('client_id é obrigatório');
  }

  if (!planId) {
    throw new Error('plan_id é obrigatório');
  }

  const jusbillUrl = process.env.REACT_APP_JUSBILL_URL;

  if (!jusbillUrl) {
    throw new Error('REACT_APP_JUSBILL_URL não configurado');
  }

  try {
    const response = await axios.post(
      `${jusbillUrl}/charges/pix/${encodeURIComponent(clientId)}`,
      {
        plan_id: planId,
      },
      {
        headers: {
          'x-trace-id': traceId,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error(
      `Erro ao criar transação Pix: ${error?.response?.status ||
        error.message}`,
    );
  }
};
