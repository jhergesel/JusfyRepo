import React from 'react';

interface UserOutlineIconProps {
  size?: number;
  color?: string;
}

const UserOutlineIcon: React.FC<UserOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0002 11.3265C11.8316 11.3265 13.3162 9.84182 13.3162 8.01041C13.3162 6.17899 11.8316 4.69434 10.0002 4.69434C8.16874 4.69434 6.68408 6.17899 6.68408 8.01041C6.68408 9.84182 8.16874 11.3265 10.0002 11.3265Z" stroke={color} strokeWidth="1.43" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.33643 16.499C4.92833 15.5274 5.76023 14.7244 6.75213 14.1673C7.74403 13.61 8.86258 13.3174 10.0003 13.3174C11.138 13.3174 12.2565 13.61 13.2484 14.1673C14.2404 14.7244 15.0722 15.5274 15.6642 16.499" stroke={color} strokeWidth="1.43" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.0003 18.6215C14.7621 18.6215 18.6221 14.7615 18.6221 9.99971C18.6221 5.23804 14.7621 1.37793 10.0003 1.37793C5.23865 1.37793 1.37854 5.23804 1.37854 9.99971C1.37854 14.7615 5.23865 18.6215 10.0003 18.6215Z" stroke={color} strokeWidth="1.43" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default UserOutlineIcon;
