import React from 'react';

interface ScanOutlineIconProps {
  size?: number;
  color?: string;
}

const ScanOutlineIcon: React.FC<ScanOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8991 11.715V13.8379C14.8991 14.1194 14.7873 14.3894 14.5882 14.5884C14.3892 14.7874 14.1192 14.8993 13.8377 14.8993H11.7148" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7148 1.10072H13.8377C14.1192 1.10072 14.3892 1.21254 14.5882 1.4116C14.7873 1.61066 14.8991 1.88063 14.8991 2.16214V4.285" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.10059 4.285V2.16214C1.10059 1.88063 1.21241 1.61066 1.41147 1.4116C1.61053 1.21254 1.8805 1.10072 2.16201 1.10072H4.28487" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.28487 14.8993H2.16201C1.8805 14.8993 1.61053 14.7874 1.41147 14.5884C1.21241 14.3894 1.10059 14.1194 1.10059 13.8379V11.715" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.9998 7.46926C9.17221 7.46926 10.1226 6.51883 10.1226 5.34642C10.1226 4.17401 9.17221 3.22357 7.9998 3.22357C6.82738 3.22357 5.87695 4.17401 5.87695 5.34642C5.87695 6.51883 6.82738 7.46926 7.9998 7.46926Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0372 12.2458C11.763 11.3906 11.2243 10.6447 10.4988 10.1155C9.77334 9.5863 8.89853 9.30113 8.00053 9.30113C7.10253 9.30113 6.22773 9.5863 5.50225 10.1155C4.77676 10.6447 4.23809 11.3906 3.96387 12.2458H12.0372Z" stroke={color} strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default ScanOutlineIcon;
