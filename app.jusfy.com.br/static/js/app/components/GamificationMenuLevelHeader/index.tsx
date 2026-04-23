import React, { useMemo } from 'react';
import { Skeleton } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import MedalOutlineIcon from 'app/components/core/icons/MedalOutlineIcon';
import { useGamificationQuery } from 'app/pages/Gamification/hooks/useGamificationQuery';
import { getGamificationLevelPresentation } from 'app/helpers/gamification/getGamificationLevelPresentation';
import * as S from './styles';

function formatRankingLabel(ranking: unknown): string | null {
  if (ranking == null) return null;
  if (typeof ranking === 'number') return `${ranking}º lugar`;
  if (typeof ranking === 'string') return ranking;
  if (typeof ranking === 'object' && ranking !== null && 'position' in ranking) {
    const p = (ranking as { position?: number }).position;
    if (typeof p === 'number') return `${p}º lugar`;
  }
  return null;
}

const GamificationMenuLevelHeader: React.FC = () => {
  const { userStats, levels, loading } = useGamificationQuery();
  const presentation = useMemo(
    () => getGamificationLevelPresentation(userStats, levels),
    [userStats, levels],
  );

  const rankingLabel = formatRankingLabel(userStats.ranking);

  if (loading) {
    return (
      <S.HeaderBlock>
        <S.Left>
          <Skeleton variant="text" width={120} height={24} />
          <Skeleton variant="text" width={180} height={20} />
        </S.Left>
        <Skeleton variant="rounded" width={100} height={36} />
      </S.HeaderBlock>
    );
  }

  const { currentLevelConfig } = presentation;
  const safeCurrentXP = Number(userStats.currentXP) || 0;
  const safeNextLevelXP = Number(userStats.nextLevelXP) || 100;

  return (
    <S.HeaderBlock>
      <S.Left>
        <S.LevelTitle>{currentLevelConfig?.name || '—'}</S.LevelTitle>
        <S.XpRow>
          <MedalOutlineIcon size={14} color="#017858" />
          <S.XpText>
            <strong>{safeCurrentXP} XP</strong>
            {` de ${safeNextLevelXP}`}
          </S.XpText>
        </S.XpRow>
      </S.Left>
      {rankingLabel ? (
        <S.RankingBadge>
          <S.RankingTrophySlot>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 16 }} />
          </S.RankingTrophySlot>
          {rankingLabel}
        </S.RankingBadge>
      ) : null}
    </S.HeaderBlock>
  );
};

export default GamificationMenuLevelHeader;
