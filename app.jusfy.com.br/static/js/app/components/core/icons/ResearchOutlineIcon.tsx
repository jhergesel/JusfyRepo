import React from 'react';

interface ResearchOutlineIconProps {
  size?: number;
  color?: string;
}

const ResearchOutlineIcon: React.FC<ResearchOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.1843 13.8381C12.6498 13.8381 13.8378 12.6501 13.8378 11.1845C13.8378 9.71902 12.6498 8.53098 11.1843 8.53098C9.71875 8.53098 8.5307 9.71902 8.5307 11.1845C8.5307 12.6501 9.71875 13.8381 11.1843 13.8381Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8988 14.8991L13.0625 13.0628" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.99999 2.69309C7.99999 1.81378 7.28717 1.10095 6.40785 1.10095H1.10071V11.7152H6.40785" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 2.69312V7.46954" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 2.69285C8 1.81353 8.71282 1.10071 9.59214 1.10071H14.8993V8.53096" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ResearchOutlineIcon;
