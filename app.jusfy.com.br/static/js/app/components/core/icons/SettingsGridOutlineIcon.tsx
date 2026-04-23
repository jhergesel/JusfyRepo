import React from 'react';

interface SettingsGridOutlineIconProps {
  size?: number;
  color?: string;
}

const SettingsGridOutlineIcon: React.FC<SettingsGridOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5717 1.35632H4.07171C2.57265 1.35632 1.35742 2.57155 1.35742 4.07061V13.5706C1.35742 15.0697 2.57265 16.2849 4.07171 16.2849H13.5717C15.0708 16.2849 16.286 15.0697 16.286 13.5706V4.07061C16.286 2.57155 15.0708 1.35632 13.5717 1.35632Z" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33.9291 21.7132H24.4291C22.9301 21.7132 21.7148 22.9284 21.7148 24.4275V33.9275C21.7148 35.4266 22.9301 36.6418 24.4291 36.6418H33.9291C35.4282 36.6418 36.6434 35.4266 36.6434 33.9275V24.4275C36.6434 22.9284 35.4282 21.7132 33.9291 21.7132Z" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5717 21.7132H4.07171C2.57265 21.7132 1.35742 22.9284 1.35742 24.4275V33.9275C1.35742 35.4266 2.57265 36.6418 4.07171 36.6418H13.5717C15.0708 36.6418 16.286 35.4266 16.286 33.9275V24.4275C16.286 22.9284 15.0708 21.7132 13.5717 21.7132Z" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.1787 16.2849V1.35632" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.7148 8.82007H36.6434" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SettingsGridOutlineIcon;
