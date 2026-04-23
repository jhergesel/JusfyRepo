import React from 'react';

interface AgendaOutlineIconProps {
  size?: number;
  color?: string;
}

const AgendaOutlineIcon: React.FC<AgendaOutlineIconProps> = ({
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
    <g clipPath="url(#agenda-clip)">
      <path
        d="M1.71415 2.28488C1.41104 2.28488 1.12035 2.40529 0.906024 2.61961C0.691697 2.83394 0.571289 3.12463 0.571289 3.42773V14.2849C0.571289 14.588 0.691697 14.8787 0.906024 15.093C1.12035 15.3073 1.41104 15.4277 1.71415 15.4277H14.2856C14.5887 15.4277 14.8794 15.3073 15.0937 15.093C15.308 14.8787 15.4284 14.588 15.4284 14.2849V3.42773C15.4284 3.12463 15.308 2.83394 15.0937 2.61961C14.8794 2.40529 14.5887 2.28488 14.2856 2.28488H11.9999"
        stroke={color}
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.571289 6.28488H15.4284"
        stroke={color}
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 0.570595V3.99917"
        stroke={color}
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 0.570595V3.99917"
        stroke={color}
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 2.28488H9.71429"
        stroke={color}
        strokeWidth="1.14286"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="agenda-clip">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default AgendaOutlineIcon;
