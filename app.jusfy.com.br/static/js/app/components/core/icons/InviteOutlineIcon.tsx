import React from 'react';

interface InviteOutlineIconProps {
  size?: number;
  color?: string;
}

const InviteOutlineIcon: React.FC<InviteOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.91032 6.44102C7.37584 6.44102 8.56389 5.25298 8.56389 3.78745C8.56389 2.32193 7.37584 1.13388 5.91032 1.13388C4.44479 1.13388 3.25674 2.32193 3.25674 3.78745C3.25674 5.25298 4.44479 6.44102 5.91032 6.44102Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5872 8.03316C10.2941 8.03316 10.0565 8.27078 10.0565 8.56388V10.0565H8.56389C8.27078 10.0565 8.03317 10.2941 8.03317 10.5873V12.312C8.03317 12.6052 8.27078 12.8428 8.56389 12.8428H10.0565V14.3355C10.0565 14.6285 10.2941 14.8662 10.5872 14.8662H12.3121C12.6051 14.8662 12.8428 14.6285 12.8428 14.3355V12.8428H14.3355C14.6285 12.8428 14.8662 12.6052 14.8662 12.312V10.5873C14.8662 10.2941 14.6285 10.0565 14.3355 10.0565H12.8428V8.56388C12.8428 8.27078 12.6051 8.03316 12.3121 8.03316H10.5872Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.43795 13.8712H1.13388V13.2958C1.14233 12.4868 1.35569 11.693 1.75404 10.9888C2.1524 10.2846 2.72273 9.69285 3.41178 9.26882C4.10084 8.84479 4.88613 8.60232 5.69429 8.56405C5.98584 8.55026 6.27694 8.56319 6.56405 8.60214" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default InviteOutlineIcon;
