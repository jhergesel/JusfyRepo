import React from 'react';

interface LinkIconProps {
  size?: number;
  color?: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({
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
    <g clipPath="url(#clip0_68_538)">
      <path
        d="M6.93878 3.7551L8.4928 2.20097C9.95804 0.735725 12.3336 0.735725 13.799 2.20097C15.2642 3.66622 15.2642 6.04185 13.799 7.5071L12.2449 9.06122"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.06124 12.2449L7.50723 13.7991C6.04198 15.2643 3.66635 15.2643 2.20111 13.7991C0.73586 12.3338 0.735861 9.95814 2.20111 8.49289L3.75511 6.93877"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1225 5.87755L5.87756 10.1224"
        stroke={color}
        strokeWidth="1.14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_538">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LinkIcon;