import React from 'react';

interface PlusIconProps {
  size?: number;
  color?: string;
  highlight?: boolean;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  size = 16,
  color = 'currentColor',
  highlight = false,
}) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1390_4464)">
        {highlight && (
          <rect
            width="16"
            height="16"
            rx="4"
            fill={color}
          />
        )}

        <path
          d="M7.42676 12.5V3.5C7.42676 3.22386 7.65062 3 7.92676 3H8.07324C8.34938 3 8.57324 3.22386 8.57324 3.5V12.5C8.57324 12.7761 8.34938 13 8.07324 13H7.92676C7.65062 13 7.42676 12.7761 7.42676 12.5Z"
          fill={highlight ? '#FFFFFF' : color}
        />

        <path
          d="M12.5 7.42676H3.5C3.22386 7.42676 3 7.65062 3 7.92676V8.07324C3 8.34938 3.22386 8.57324 3.5 8.57324H12.5C12.7761 8.57324 13 8.34938 13 8.07324V7.92676C13 7.65062 12.7761 7.42676 12.5 7.42676Z"
          fill={highlight ? '#FFFFFF' : color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1390_4464">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

export default PlusIcon;