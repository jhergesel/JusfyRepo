import { config } from '../../../../config/env';

export const resolveGatewayId = ({
  prodId,
  qaId,
}: {
  prodId: number;
  qaId: number | null;
}): number => {
  const isQaOrDev =
    config.nodeEnv === 'development' || config.nodeEnv === 'qa';
  return isQaOrDev && qaId !== null ? qaId : prodId;
};

