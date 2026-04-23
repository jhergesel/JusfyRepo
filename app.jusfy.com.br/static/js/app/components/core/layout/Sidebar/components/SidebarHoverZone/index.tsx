import React from 'react';
import * as S from './styles';

type SidebarHoverZoneProps = {
  width: number;
  onMouseEnter?: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
};

const SidebarHoverZone: React.FC<SidebarHoverZoneProps> = ({
  width,
  onMouseEnter,
  onMouseLeave,
  children,
}) => (
  <S.SidebarHoverWrapper
    $width={width}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </S.SidebarHoverWrapper>
);

export default SidebarHoverZone;
