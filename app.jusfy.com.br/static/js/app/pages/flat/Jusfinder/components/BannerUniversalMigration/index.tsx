
import React from 'react';
import { bannerButton, bannerDescription, bannerTitle } from './constants';
import {
  Button,
  Description,
  ImageWrapper,
  TextContent,
  Title,
  Wrapper,
} from './styles';
import { useUserPreferences } from 'app/services/userPreferences';
import useFeatureFlag from 'app/hooks/useFeatureFlag';
import { FEATURE_FLAGS } from 'app/constants/FeatureFlag';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';

interface BannerUniversalMigrationProps {
  onButtonClick: () => void;
}

export const BannerUniversalMigration: React.FC<BannerUniversalMigrationProps> = ({
  onButtonClick,
}) => {

  const { isFeatureFlagEnable: isNewSidebarFlagEnabled } = useFeatureFlag(
    FEATURE_FLAGS.KILL_SWITCH.NEW_SIDEBAR
  );
  const {
    preferences: { menuVersion },
  } = useUserPreferences();
  const isNewSidebarEnabled = menuVersion === MENU_VERSION_VALUES.v2 && isNewSidebarFlagEnabled;

  return (
    <Wrapper isNewSidebarEnabled={isNewSidebarEnabled}>
      <TextContent>
        <Title>{bannerTitle}</Title>
        <Description>{bannerDescription}</Description>
        <Button onClick={onButtonClick}>{bannerButton}</Button>
      </TextContent>

      <ImageWrapper>
        <img src="/media/jusfinder/banner-universal.svg" alt="Banner" />
      </ImageWrapper>
    </Wrapper>
  );
};
