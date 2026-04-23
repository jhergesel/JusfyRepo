import React from 'react';

interface CollapseOutlineIconProps {
  size?: number;
  color?: string;
}

const CollapseOutlineIcon: React.FC<CollapseOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.43257 1.23814L15.5678 1.23814C16.2273 1.23814 16.7619 1.77274 16.7619 2.43225V15.5674C16.7619 16.2269 16.2273 16.7615 15.5678 16.7615H2.43257C1.77308 16.7615 1.23846 16.2269 1.23846 15.5674L1.23846 2.43225C1.23846 1.77274 1.77308 1.23814 2.43257 1.23814Z" stroke={color} strokeWidth="1.2825" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.20889 16.7615L7.20889 1.23814" stroke={color} strokeWidth="1.2825" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.8728 11.5L10.3728 9L12.8728 6.5" stroke={color} strokeWidth="1.28" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CollapseOutlineIcon;
