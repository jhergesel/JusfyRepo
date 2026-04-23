import React from 'react';

interface ContabilidadeIconProps {
  size?: number;
  color?: string;
}

const ContabilidadeIcon: React.FC<ContabilidadeIconProps> = ({
  size = 17,
  color = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M6.5 10.6247C6.5 11.246 7.17133 11.75 8 11.75C8.82867 11.75 9.5 11.246 9.5 10.6247C9.5 10.0033 8.82867 9.5 8 9.5C7.17133 9.5 6.5 8.996 6.5 8.37467C6.5 7.75333 7.17133 7.25 8 7.25C8.82867 7.25 9.5 7.75333 9.5 8.37467" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
   <path d="M8 6.5V7.25" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
   <path d="M8 11.75V12.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
   <path d="M2 4.5H14C14 4.5 15 4.5 15 5.5V13.5C15 13.5 15 14.5 14 14.5H2C2 14.5 1 14.5 1 13.5V5.5C1 5.5 1 4.5 2 4.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
   <path d="M10.228 2.18333C10.1615 1.98431 10.0342 1.81122 9.86393 1.68859C9.69367 1.56595 9.48913 1.49997 9.27933 1.5H6.72067C6.51084 1.49997 6.30632 1.56595 6.13607 1.68859C5.96581 1.81122 5.83845 1.98431 5.772 2.18333L5 4.5H11L10.228 2.18333Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
 </svg>
);

export default ContabilidadeIcon;
