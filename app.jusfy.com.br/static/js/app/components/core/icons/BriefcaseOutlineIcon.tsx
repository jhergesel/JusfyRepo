import React from 'react';

interface BriefcaseOutlineIconProps {
  size?: number;
  color?: string;
}

const BriefcaseOutlineIcon: React.FC<BriefcaseOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2973 5.3562H2.70264C1.96988 5.3562 1.37585 5.95023 1.37585 6.68299V17.2973C1.37585 18.0301 1.96988 18.6241 2.70264 18.6241H17.2973C18.0301 18.6241 18.6241 18.0301 18.6241 17.2973V6.68299C18.6241 5.95023 18.0301 5.3562 17.2973 5.3562Z"
        stroke={color}
        strokeWidth="1.425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9802 5.35585V2.70227C13.9802 2.35038 13.8405 2.01292 13.5916 1.76409C13.3428 1.51527 13.0054 1.37549 12.6535 1.37549H7.34632C6.99443 1.37549 6.65696 1.51527 6.40813 1.76409C6.15932 2.01292 6.01953 2.35038 6.01953 2.70227V5.35585"
        stroke={color}
        strokeWidth="1.425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6936 10.2202C11.6353 10.0554 11.5454 9.90557 11.4312 9.77796C11.1883 9.50652 10.8352 9.33569 10.4423 9.33569H9.41529C8.76119 9.33569 8.23096 9.86594 8.23096 10.52C8.23096 11.0766 8.61848 11.5581 9.1622 11.677L10.7258 12.0191C11.3349 12.1523 11.7691 12.6921 11.7691 13.3156C11.7691 14.0483 11.175 14.6428 10.4423 14.6428H9.55774C8.98005 14.6428 8.48859 14.2736 8.30645 13.7583"
        stroke={color}
        strokeWidth="1.425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.33681V8.01001"
        stroke={color}
        strokeWidth="1.425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15.9701V14.6433"
        stroke={color}
        strokeWidth="1.425"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BriefcaseOutlineIcon;
