import React from 'react';

interface FolderOutlineIconProps {
  size?: number;
  color?: string;
}

const FolderOutlineIcon: React.FC<FolderOutlineIconProps> = ({
  size = 20,
  color = 'currentColor',
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.714294 17.4999V2.49998C0.714294 2.1211 0.864804 1.75774 1.13271 1.48983C1.40062 1.22192 1.76398 1.07141 2.14287 1.07141H7.41429C7.74062 1.0619 8.06038 1.16445 8.32031 1.362C8.58022 1.55954 8.76465 1.84016 8.84287 2.15713L9.28572 3.92856H17.8572C18.236 3.92856 18.5994 4.07906 18.8673 4.34697C19.1352 4.61488 19.2857 4.97824 19.2857 5.35713V17.4999C19.2857 17.8789 19.1352 18.2422 18.8673 18.5101C18.5994 18.7781 18.236 18.9285 17.8572 18.9285H2.14287C1.76398 18.9285 1.40062 18.7781 1.13271 18.5101C0.864804 18.2422 0.714294 17.8789 0.714294 17.4999Z" stroke={color} strokeWidth="1.425" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default FolderOutlineIcon;
