import React from 'react';
import { useTheme } from 'styled-components';
interface FloatingArrowIconProps {
  size?: number;
  color?: string;
}

const FloatingArrowIcon: React.FC<FloatingArrowIconProps> = ({
  size = 20,
  color,
}) => {
  const theme = useTheme();
  const fill =
    color ?? theme?.colors?.sidebar?.background ?? '#fafffe';
  const aspectRatio = 9 / 16;
  const width = size * aspectRatio;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.12978e-07 7.79423L9 0L9 15.5885L6.12978e-07 7.79423Z"
        fill={fill}
      />
    </svg>
  );
};

export default FloatingArrowIcon;
