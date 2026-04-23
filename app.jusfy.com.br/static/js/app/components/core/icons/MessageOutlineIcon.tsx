import React from 'react';

interface MessageOutlineIconProps {
  size?: number;
  color?: string;
}

const MessageOutlineIcon: React.FC<MessageOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.286 5.42908H2.71456C1.96504 5.42908 1.35742 6.0367 1.35742 6.78622V28.5005C1.35742 29.2499 1.96504 29.8576 2.71456 29.8576H35.286C36.0354 29.8576 36.6431 29.2499 36.6431 28.5005V6.78622C36.6431 6.0367 36.0354 5.42908 35.286 5.42908Z" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.2866 29.8566L13.5723 36.6423" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.7148 29.8566L24.4291 36.6423" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8574 36.6428H27.1431" stroke={color} strokeWidth="2.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default MessageOutlineIcon;
