import React from 'react';
import { Skeleton } from '@mui/material';
import styled from 'styled-components';

const ILLUSTRATION_SIZE_PX = 16;

const Illustration = styled.img`
  width: ${ILLUSTRATION_SIZE_PX}px;
  height: ${ILLUSTRATION_SIZE_PX}px;
  object-fit: contain;
  display: block;
  flex-shrink: 0;
`;

type GamificationMobileMenuIconProps = {
  imageSrc: string;
  imageAlt: string;
  loading: boolean;
};

const GamificationMobileMenuIcon: React.FC<GamificationMobileMenuIconProps> = ({
  imageSrc,
  imageAlt,
  loading,
}) => {
  if (loading) {
    return (
      <Skeleton
        variant="circular"
        width={ILLUSTRATION_SIZE_PX}
        height={ILLUSTRATION_SIZE_PX}
        sx={{ flexShrink: 0 }}
      />
    );
  }

  return <Illustration src={imageSrc} alt={imageAlt} loading="lazy" />;
};

export default GamificationMobileMenuIcon;
