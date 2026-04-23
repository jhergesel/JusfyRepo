import React from 'react';
import { toAbsoluteUrl } from '../../../../../_metronic/_helpers';
import { BsXLg } from 'react-icons/bs';
import {
  CloseButton,
  DescriptionText,
  IconInfo,
  TooltipContent,
  TooltipDescription,
  TooltipTitle,
  TooltipWrapper,
} from './Tooltip.styles';

interface ITooltip {
  title: string;
  description: string;
}
export const Tooltip = ({ title, description }: ITooltip) => {
  return (
    <TooltipWrapper>
      <IconInfo src={toAbsoluteUrl('/media/pasep/info-toggle.svg')} />
      <TooltipContent>
        <CloseButton>
          <BsXLg />
        </CloseButton>

        <TooltipTitle>{title}</TooltipTitle>

        <TooltipDescription>
          <DescriptionText>
            <strong> Resultados possíveis da busca: </strong>
            {description}
          </DescriptionText>
        </TooltipDescription>
      </TooltipContent>
    </TooltipWrapper>
  );
};
