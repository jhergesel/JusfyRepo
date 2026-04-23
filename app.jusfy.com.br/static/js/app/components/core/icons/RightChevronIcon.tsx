import React from 'react';

interface RightChevronIconProps {
  size?: number;
  color?: string;
}

const RightChevronIcon: React.FC<RightChevronIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.839996 1.41L5.42 6L0.839996 10.59L2.25 12L8.25 6L2.25 0L0.839996 1.41Z" fill={color}/>
    </svg>
  );
};

export default RightChevronIcon;
