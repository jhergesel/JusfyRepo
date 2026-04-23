import React from 'react';

interface BoltIconProps {
  size?: number;
  color?: string;
}

const BoltIcon: React.FC<BoltIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_47_721)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.27237 0C4.07161 0 3.89032 0.120076 3.81199 0.304925L1.56199 5.61493L1.55988 5.61999C1.49764 5.77149 1.47356 5.93596 1.48977 6.09894C1.50597 6.26192 1.56196 6.41843 1.65281 6.55471C1.74366 6.69098 1.8666 6.80286 2.01081 6.8805C2.15502 6.95815 2.3161 6.99918 2.47988 6.99999L4.60951 7L2.79161 13.3626C2.7297 13.5793 2.82038 13.8106 3.01304 13.9275C3.20569 14.0444 3.45273 14.0179 3.61629 13.8629L12.2063 5.72293L12.2093 5.72005C12.352 5.58254 12.4506 5.40572 12.4927 5.21205C12.5347 5.01838 12.5182 4.81659 12.4454 4.63229C12.3725 4.448 12.2465 4.2895 12.0834 4.17693C11.9203 4.06436 11.7274 4.0028 11.5293 4.00005L8.58139 4L10.2196 0.723607C10.2971 0.568613 10.2888 0.384543 10.1977 0.237134C10.1066 0.0897262 9.94566 0 9.77237 0H4.27237Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_47_721">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BoltIcon;
