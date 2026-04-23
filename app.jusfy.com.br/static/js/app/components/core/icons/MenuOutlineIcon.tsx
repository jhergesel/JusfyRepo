import React from 'react';

interface MenuOutlineIconProps {
  size?: number;
  color?: string;
}

function MenuOutlineIcon({
  size = 24,
  color = 'currentColor',
}: MenuOutlineIconProps) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('path', {
      d: 'M4 6H20',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
    }),
    React.createElement('path', {
      d: 'M4 12H20',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
    }),
    React.createElement('path', {
      d: 'M4 18H20',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
    }),
  );
}

export default MenuOutlineIcon;
