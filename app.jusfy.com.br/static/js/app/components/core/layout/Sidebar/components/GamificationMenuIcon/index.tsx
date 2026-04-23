import { useMemo } from 'react';
import { Skeleton } from '@mui/material';
import GameAvatar, {
  GameAvatarVariant,
  MintSurface,
} from 'app/components/GameAvatar';
import { useGamificationQuery } from 'app/pages/Gamification/hooks/useGamificationQuery';
import { getGamificationLevelPresentation } from 'app/helpers/gamification/getGamificationLevelPresentation';

const SIDEBAR_AVATAR_SIZE = 40;

const SidebarGamificationMenuIcon = () => {
  const { userStats, levels, loading } = useGamificationQuery();

  const { imageSrc, imageAlt, progressPercentage } = useMemo(
    () => getGamificationLevelPresentation(userStats, levels),
    [userStats, levels],
  );

  if (loading) {
    return (
      <MintSurface
        $size={SIDEBAR_AVATAR_SIZE}
        data-sidebar-gamification-surface
      >
        <Skeleton
          variant="circular"
          width={SIDEBAR_AVATAR_SIZE}
          height={SIDEBAR_AVATAR_SIZE}
          sx={{ flexShrink: 0 }}
        />
      </MintSurface>
    );
  }

  return (
    <GameAvatar
      variant={GameAvatarVariant.SIDEBAR}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      progress={progressPercentage}
    />
  );
};

export default SidebarGamificationMenuIcon;
