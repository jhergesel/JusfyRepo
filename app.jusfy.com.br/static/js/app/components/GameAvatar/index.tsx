import React from 'react';
import * as S from './styles';

const OUTER_RING_PHOTO_GAP = 2;

export enum GameAvatarVariant {
  DEFAULT = 'default',
  SIDEBAR = 'sidebar',
}

type GameAvatarProps = {
  imageSrc: string;
  imageAlt: string;
  progress: number;
  variant?: GameAvatarVariant;
  showProgress?: boolean;
  size?: number;
  strokeWidth?: number;
  progressColor?: string;
  trackColor?: string;
};

const GameAvatar: React.FC<GameAvatarProps> = ({
  imageSrc,
  imageAlt,
  progress,
  variant = GameAvatarVariant.DEFAULT,
  showProgress = true,
  size: sizeProp,
  strokeWidth: strokeWidthProp,
  progressColor = '#01AB7D',
  trackColor = 'transparent',
}) => {
  const size = sizeProp ?? (variant === GameAvatarVariant.SIDEBAR ? 40 : 84);
  const strokeWidth =
    strokeWidthProp ?? (variant === GameAvatarVariant.SIDEBAR ? 2.5 : 5);

  const safeProgress = Number.isFinite(progress) ? progress : 0;
  const normalizedProgress = Math.min(Math.max(safeProgress, 0), 100);

  if (variant === GameAvatarVariant.SIDEBAR) {
    const illustrationOnlyInnerSize = Math.max(
      4,
      size - 4 * OUTER_RING_PHOTO_GAP,
    );

    if (!showProgress) {
      return (
        <S.MintSurface $size={size} data-sidebar-gamification-surface>
          <S.SidebarInner $size={size}>
            <S.SidebarAvatarImage
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              $innerSize={illustrationOnlyInnerSize}
            />
          </S.SidebarInner>
        </S.MintSurface>
      );
    }

    const ringRadius = size / 2 - strokeWidth / 2;
    const innerImageSize = Math.max(
      4,
      size - 2 * strokeWidth - 2 * OUTER_RING_PHOTO_GAP,
    );
    const circumference = 2 * Math.PI * ringRadius;
    const dashOffset =
      circumference - (normalizedProgress / 100) * circumference;

    return (
      <S.MintSurface $size={size} data-sidebar-gamification-surface>
        <S.SidebarInner $size={size}>
          <S.SidebarAvatarImage
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            $innerSize={innerImageSize}
          />
          <S.SidebarRingSvg viewBox={`0 0 ${size} ${size}`}>
            <S.SidebarTrackCircle
              cx={size / 2}
              cy={size / 2}
              r={ringRadius}
              $trackColor={trackColor}
              $strokeWidth={strokeWidth}
            />
            <S.SidebarProgressCircle
              cx={size / 2}
              cy={size / 2}
              r={ringRadius}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              $progressColor={progressColor}
              $strokeWidth={strokeWidth}
            />
          </S.SidebarRingSvg>
        </S.SidebarInner>
      </S.MintSurface>
    );
  }

  const shouldShowDefaultRing =
    showProgress || variant !== GameAvatarVariant.DEFAULT;

  let defaultRing: React.ReactNode = null;
  if (shouldShowDefaultRing) {
    const radius = (size - strokeWidth - 5) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset =
      circumference - (normalizedProgress / 100) * circumference;

    defaultRing = (
      <S.RingSvg viewBox={`0 0 ${size} ${size}`}>
        <S.TrackCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          $trackColor={trackColor}
          $strokeWidth={strokeWidth}
        />
        <S.ProgressCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          $progressColor={progressColor}
          $strokeWidth={strokeWidth}
        />
      </S.RingSvg>
    );
  }

  return (
    <S.Wrapper $size={size}>
      {defaultRing}
      <S.AvatarImage src={imageSrc} alt={imageAlt} loading="lazy" />
    </S.Wrapper>
  );
};

export default GameAvatar;
export { MintSurface } from './styles';
