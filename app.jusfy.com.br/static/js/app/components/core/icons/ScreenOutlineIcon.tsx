import React from 'react';

interface ScreenOutlineIconProps {
  size?: number;
  color?: string;
}

const ScreenOutlineIcon: React.FC<ScreenOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.3686 2.69286H1.63142C1.33832 2.69286 1.10071 2.93047 1.10071 3.22357V11.715C1.10071 12.0081 1.33832 12.2457 1.63142 12.2457H14.3686C14.6616 12.2457 14.8993 12.0081 14.8993 11.715V3.22357C14.8993 2.93047 14.6616 2.69286 14.3686 2.69286Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.93856 12.2457L5.87714 14.8993" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.06142 12.2457L10.1228 14.8993" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.8157 14.8993H11.1843" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5307 2.69286V12.2457" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75427 5.87714H5.87713" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75427 9.06143H4.8157" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5307 8.00012L9.81503 6.93869C10.1957 6.62372 10.6743 6.4514 11.1684 6.4514C11.6624 6.4514 12.141 6.62372 12.5217 6.93869L14.8993 9.06155" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ScreenOutlineIcon;
