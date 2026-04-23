import React from 'react';

interface TimerOutlineIconProps {
  size?: number;
  color?: string;
}

const TimerOutlineIcon: React.FC<TimerOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00001 15.4286C11.4716 15.4286 14.2857 12.6144 14.2857 9.14285C14.2857 5.67134 11.4716 2.85714 8.00001 2.85714C4.5285 2.85714 1.71429 5.67134 1.71429 9.14285C1.71429 12.6144 4.5285 15.4286 8.00001 15.4286Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.571411 2.85714C1.37402 1.92485 2.34283 1.1498 3.42855 0.571426" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.4286 2.85714C14.6259 1.92485 13.6571 1.1498 12.5714 0.571426" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 5.71429V9.14286H10.8571" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default TimerOutlineIcon;
