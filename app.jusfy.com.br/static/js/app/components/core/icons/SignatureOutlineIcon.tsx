import React from 'react';

interface SignatureOutlineIconProps {
  size?: number;
  color?: string;
}

const SignatureOutlineIcon: React.FC<SignatureOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.56655 5.61567L1.21453 14.1785C1.15833 14.5344 1.46559 14.8417 1.82152 14.7855L10.3843 13.4335C10.8567 13.3588 11.2209 12.9776 11.2738 12.5023L11.715 8.53072L7.46929 4.285L3.49777 4.72628C3.02244 4.7791 2.64113 5.14327 2.56655 5.61567Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.46928 4.28499L9.59214 1.10071" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.715 8.53069L14.8993 6.40784" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.63142 14.3686L5.87714 10.1229" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.81572 9.06143L6.93858 11.1843" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default SignatureOutlineIcon;
