import React from 'react';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';

type TooltipProps = React.ComponentProps<typeof Tooltip>;

export const StyledTooltip = styled(
  ({ className, ...props }: TooltipProps & { className?: string }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ),
)`
  .MuiTooltip-tooltip {
    background: #ffffff;
    color: #5e5e60;
    border: 1px solid #e7e8ec;
    border-radius: 8px;
    box-shadow: 0 6px 18px rgba(17, 18, 25, 0.12);

    padding: 12px 14px;
    font-size: 13px;
    line-height: 140%;
    font-weight: 400;
    font-family: ${({ theme }) => theme.typography.quartenary};

    max-width: 320px;
    white-space: normal;
  }

  .MuiTooltip-arrow {
    color: #ffffff;
  }
`;

export const IconButton = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  background: rgba(244, 245, 249, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const TagWithInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`;
