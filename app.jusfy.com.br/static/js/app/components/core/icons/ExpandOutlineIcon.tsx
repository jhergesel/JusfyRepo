import React from 'react';

interface ExpandOutlineIconProps {
  size?: number;
  color?: string;
}

const ExpandOutlineIcon: React.FC<ExpandOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.43239 1.23814L15.5676 1.23814C16.2271 1.23814 16.7617 1.77274 16.7617 2.43225V15.5674C16.7617 16.2269 16.2271 16.7615 15.5676 16.7615H2.43239C1.7729 16.7615 1.23828 16.2269 1.23828 15.5674L1.23828 2.43225C1.23828 1.77274 1.7729 1.23814 2.43239 1.23814Z" stroke={color} strokeWidth="1.2825" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.20874 16.7615L7.20874 1.23814" stroke={color} strokeWidth="1.2825" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.9514 11.5L13.4514 9L10.9514 6.5" stroke={color} strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ExpandOutlineIcon;
