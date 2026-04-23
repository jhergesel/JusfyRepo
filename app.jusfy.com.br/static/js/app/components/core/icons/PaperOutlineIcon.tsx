import React from 'react';

interface PaperOutlineIconProps {
  size?: number;
  color?: string;
}

const PaperOutlineIcon: React.FC<PaperOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.1229 3.22357H3.7543C3.16809 3.22357 2.69287 3.69879 2.69287 4.285V13.8379C2.69287 14.4241 3.16809 14.8993 3.7543 14.8993H10.1229C10.7091 14.8993 11.1843 14.4241 11.1843 13.8379V4.285C11.1843 3.69879 10.7091 3.22357 10.1229 3.22357Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.81573 5.87714H9.06145" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.81573 8.5307H9.06145" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.81573 11.1843H6.93859" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.34644 1.10071H12.2457C12.5272 1.10071 12.7972 1.21254 12.9963 1.41159C13.1953 1.61065 13.3071 1.88062 13.3071 2.16214V12.2457" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PaperOutlineIcon;
