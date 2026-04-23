import React from 'react';

interface PetitionOutlineIconProps {
  size?: number;
  color?: string;
}

const PetitionOutlineIcon: React.FC<PetitionOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7765 1.10071H3.2236C2.63739 1.10071 2.16217 1.57593 2.16217 2.16214V13.8379C2.16217 14.4241 2.63739 14.8993 3.2236 14.8993H12.7765C13.3627 14.8993 13.8379 14.4241 13.8379 13.8379V2.16214C13.8379 1.57593 13.3627 1.10071 12.7765 1.10071Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.16217 11.715H13.8379" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.34644 3.75427H10.6536" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.34644 6.40785H10.6536" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.34644 9.06142H8.53072" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PetitionOutlineIcon;
