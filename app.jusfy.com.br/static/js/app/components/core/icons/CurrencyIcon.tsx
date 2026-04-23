import React from 'react';

interface CurrencyIconProps {
  size?: number;
  color?: string;
}

const CurrencyIcon: React.FC<CurrencyIconProps> = ({
  size = 16,
  color = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_68_546)">
      <path
        d="M8.00001 14.898C11.8097 14.898 14.898 11.8097 14.898 7.99999C14.898 4.19036 11.8097 1.10204 8.00001 1.10204C4.19037 1.10204 1.10205 4.19036 1.10205 7.99999C1.10205 11.8097 4.19037 14.898 8.00001 14.898Z"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.80606 6.11354C9.74395 5.9378 9.6481 5.77798 9.52629 5.64189C9.2672 5.35241 8.89068 5.17024 8.47162 5.17024H7.37639C6.67883 5.17024 6.11334 5.73573 6.11334 6.43328C6.11334 7.02683 6.52664 7.54031 7.10648 7.66715L8.77399 8.03192C9.42358 8.17402 9.88658 8.74967 9.88658 9.41462C9.88658 10.1961 9.25308 10.8301 8.47162 10.8301H7.5283C6.91222 10.8301 6.3881 10.4364 6.19386 9.88679"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.17006V3.7551"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.2447V10.8297"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_546">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CurrencyIcon;