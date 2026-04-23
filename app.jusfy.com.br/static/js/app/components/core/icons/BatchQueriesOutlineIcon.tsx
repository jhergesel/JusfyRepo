import React from 'react';

interface BatchQueriesOutlineIconProps {
  size?: number;
  color?: string;
}

const BatchQueriesOutlineIcon: React.FC<BatchQueriesOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1843 13.8381C12.6498 13.8381 13.8379 12.6501 13.8379 11.1845C13.8379 9.71902 12.6498 8.53098 11.1843 8.53098C9.71881 8.53098 8.53076 9.71902 8.53076 11.1845C8.53076 12.6501 9.71881 13.8381 11.1843 13.8381Z"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8988 14.8991L13.0625 13.0628"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99987 2.69309C7.99987 1.81378 7.28705 1.10095 6.40773 1.10095H1.10059V11.7152H6.40773"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2.69312V7.46954"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 2.69285C8 1.81353 8.71282 1.10071 9.59214 1.10071H14.8993V8.53096"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.06152 3.48965H6.03906"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.085 3.48938H13.0625"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.06152 6.142H6.03906"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.085 6.14172H13.0625"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.06152 8.5304H5.04932"
      stroke={color}
      strokeWidth="1.14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BatchQueriesOutlineIcon;
