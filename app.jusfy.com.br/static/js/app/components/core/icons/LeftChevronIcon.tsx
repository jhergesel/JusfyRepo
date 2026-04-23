import React from 'react';

interface LeftChevronIconProps {
  size?: number;
  color?: string;
}

const LeftChevronIcon: React.FC<LeftChevronIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.16 1.41L3.58 6L8.16 10.59L6.75 12L0.750004 6L6.75 0L8.16 1.41Z" fill={color}/>
    </svg>
  );
};

export default LeftChevronIcon;
