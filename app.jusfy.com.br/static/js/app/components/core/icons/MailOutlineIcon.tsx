import React from 'react';

interface MailOutlineIconProps {
  size?: number;
  color?: string;
}

const MailOutlineIcon: React.FC<MailOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8379 2.42751H2.16214C1.57593 2.42751 1.10071 2.90273 1.10071 3.48893V12.5111C1.10071 13.0973 1.57593 13.5725 2.16214 13.5725H13.8379C14.4241 13.5725 14.8993 13.0973 14.8993 12.5111V3.48893C14.8993 2.90273 14.4241 2.42751 13.8379 2.42751Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.10071 3.75429L7.32068 7.49502C7.51141 7.60699 7.75178 7.66831 7.99999 7.66831C8.24821 7.66831 8.48858 7.60699 8.67931 7.49502L14.8993 3.75429" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default MailOutlineIcon;
