import React from 'react';

interface IdOutlineIconProps {
  size?: number;
  color?: string;
}

const IdOutlineIcon: React.FC<IdOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.01141 2.97519H13.9886C13.9886 2.97519 14.8993 2.97519 14.8993 3.8859V12.1141C14.8993 12.1141 14.8993 13.0248 13.9886 13.0248H2.01141C2.01141 13.0248 1.10071 13.0248 1.10071 12.1141V3.8859C1.10071 3.8859 1.10071 2.97519 2.01141 2.97519Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5043 6.81055H12.6132" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5043 8.90063H12.6132" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.29266 7.15901C4.29266 8.12087 5.0724 8.9006 6.03426 8.9006C6.27742 8.9006 6.50894 8.85077 6.71916 8.76076C7.34051 8.49471 7.77584 7.8777 7.77584 7.15901C7.77584 6.19716 6.99611 5.41742 6.03426 5.41742C5.0724 5.41742 4.29266 6.19716 4.29266 7.15901Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.38684 10.6252C3.66358 10.0989 4.05252 9.66383 4.51626 9.36197C4.98001 9.0601 5.50298 8.90155 6.03488 8.90155C6.5668 8.90155 7.08976 9.0601 7.55351 9.36197C8.01726 9.66383 8.4062 10.0989 8.68293 10.6252" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default IdOutlineIcon;
