import React from 'react';

interface PeopleOutlineIconProps {
  size?: number;
  color?: string;
}

const PeopleOutlineIcon: React.FC<PeopleOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.34638 9.33608C9.17829 9.33608 10.6633 7.85102 10.6633 6.01911C10.6633 4.18721 9.17829 2.70215 7.34638 2.70215C5.51448 2.70215 4.02942 4.18721 4.02942 6.01911C4.02942 7.85102 5.51448 9.33608 7.34638 9.33608Z" stroke={color} strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.37592 18.6237H13.317V17.9045C13.3064 16.8932 13.0397 15.901 12.5418 15.0208C12.0438 14.1405 11.3309 13.4008 10.4696 12.8708C9.60829 12.3407 8.62668 12.0377 7.61648 11.9898C7.52642 11.9856 7.43638 11.9833 7.34645 11.9832C7.25652 11.9833 7.16649 11.9856 7.07642 11.9898C6.06622 12.0377 5.08461 12.3407 4.22329 12.8708C3.36198 13.4008 2.64906 14.1405 2.15112 15.0208C1.65318 15.901 1.38648 16.8932 1.37592 17.9045V18.6237Z" stroke={color} strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.6535 9.33608C14.4854 9.33608 15.9705 7.85102 15.9705 6.01911C15.9705 4.18721 14.4854 2.70215 12.6535 2.70215" stroke={color} strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.9706 18.6233H18.6242V17.9039C18.6136 16.8926 18.3469 15.9005 17.8489 15.0203C17.351 14.14 16.6381 13.4003 15.7768 12.8703C15.2201 12.5276 14.6129 12.2798 13.9804 12.1345" stroke={color} strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default PeopleOutlineIcon;
