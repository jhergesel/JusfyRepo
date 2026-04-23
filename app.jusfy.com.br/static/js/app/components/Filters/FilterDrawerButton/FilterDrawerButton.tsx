import React from "react";
import { FilterDrawerButtonWrapper, Icon } from "./styles";

interface FilterDrawerButtonProps {
  text?: string;
  onClick?: () => void;
  icon?: string;
  widthIcon?: number | string;
  heightIcon?: number | string;
  width?: number | string;
  loading?: boolean;
}

export const FilterDrawerButton: React.FC<FilterDrawerButtonProps> = ({
  text = "Filtros",
  onClick = () => console.log("Defina a função"),
  icon = "",
  widthIcon = 10,
  heightIcon = 10,
  width = "100%",
  loading = false,
}) => {
  const isDisabled = loading;

  return (
    <FilterDrawerButtonWrapper
      onClick={!isDisabled ? onClick : undefined}
      data-testid="button"
      width={width}
      disabled={isDisabled}
    >
      {icon && <Icon src={icon} width={widthIcon} height={heightIcon} />}
      {text}
    </FilterDrawerButtonWrapper>
  );
};
