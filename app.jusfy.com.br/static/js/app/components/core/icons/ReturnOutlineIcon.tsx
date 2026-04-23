import React from 'react';

interface ReturnOutlineIconProps {
  size?: number;
  color?: string;
}

const ReturnOutlineIcon: React.FC<ReturnOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.35742 25.7852H25.786C28.6656 25.7852 31.4271 24.6413 33.4631 22.6052C35.4993 20.5691 36.6431 17.8076 36.6431 14.9281C36.6431 12.0486 35.4993 9.28702 33.4631 7.2509C31.4271 5.2148 28.6656 4.07092 25.786 4.07092H17.6431" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.50028 17.6434L1.35742 25.7863L9.50028 33.9291" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ReturnOutlineIcon;
