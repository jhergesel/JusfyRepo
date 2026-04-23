import React from 'react';

interface CalculatorOutlineIconProps {
  size?: number;
  color?: string;
}

const CalculatorOutlineIcon: React.FC<CalculatorOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7765 1.10071H3.2236C2.63739 1.10071 2.16217 1.57593 2.16217 2.16214V13.8379C2.16217 14.4241 2.63739 14.8993 3.2236 14.8993H12.7765C13.3627 14.8993 13.8379 14.4241 13.8379 13.8379V2.16214C13.8379 1.57593 13.3627 1.10071 12.7765 1.10071Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.16217 6.40784H13.8379" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.08109 9.59215C4.93454 9.59215 4.81573 9.47334 4.81573 9.32679C4.81573 9.18024 4.93454 9.06143 5.08109 9.06143" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.08112 9.59215C5.22767 9.59215 5.34647 9.47334 5.34647 9.32679C5.34647 9.18024 5.22767 9.06143 5.08112 9.06143" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00004 9.59215C7.85349 9.59215 7.73468 9.47334 7.73468 9.32679C7.73468 9.18024 7.85349 9.06143 8.00004 9.06143" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00006 9.59215C8.14661 9.59215 8.26542 9.47334 8.26542 9.32679C8.26542 9.18024 8.14661 9.06143 8.00006 9.06143" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.919 9.59215C10.7724 9.59215 10.6536 9.47334 10.6536 9.32679C10.6536 9.18024 10.7724 9.06143 10.919 9.06143" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.919 9.59215C11.0656 9.59215 11.1844 9.47334 11.1844 9.32679C11.1844 9.18024 11.0656 9.06143 10.919 9.06143" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.08109 12.2457C4.93454 12.2457 4.81573 12.1269 4.81573 11.9804C4.81573 11.8338 4.93454 11.715 5.08109 11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.08112 12.2457C5.22767 12.2457 5.34647 12.1269 5.34647 11.9804C5.34647 11.8338 5.22767 11.715 5.08112 11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00004 12.2457C7.85349 12.2457 7.73468 12.1269 7.73468 11.9804C7.73468 11.8338 7.85349 11.715 8.00004 11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00006 12.2457C8.14661 12.2457 8.26542 12.1269 8.26542 11.9804C8.26542 11.8338 8.14661 11.715 8.00006 11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.919 12.2457C10.7724 12.2457 10.6536 12.1269 10.6536 11.9804C10.6536 11.8338 10.7724 11.715 10.919 11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.919 12.2457C11.0656 12.2457 11.1844 12.1269 11.1844 11.9804C11.1844 11.8338 11.0656 11.715 10.919 11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.1843 3.75427H10.1229" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CalculatorOutlineIcon;
