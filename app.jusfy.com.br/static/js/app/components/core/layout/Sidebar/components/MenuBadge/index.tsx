import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StarIcon } from 'app/components/core/icons';
import { createPortal } from 'react-dom';
import * as S from './styles';
import { SidebarBadgeType, type SidebarBadgeConfig } from '../../MenuConfig';
import {
  trackMenuNewTagClicked,
  trackMenuNewTagViewed,
  trackNotificationTagClicked,
  trackNotificationTagViewed,
} from '../../trackMenuEvents';

interface MenuNewTagProps {
  isCollapsed: boolean;
  label: string;
  hasToggle: boolean;
  badge?: SidebarBadgeConfig;
  anchorRef: React.RefObject<HTMLDivElement | null>;
}

const MAX_LABEL_LENGTH_FOR_EXPLICIT_BADGE = 21;
type BadgeVariant = 'overlay' | 'inline';
type BadgeMode = 'explicit' | 'minimal';

const BADGE_VARIANT_INLINE: BadgeVariant = 'inline';
const BADGE_VARIANT_OVERLAY: BadgeVariant = 'overlay';
const BADGE_MODE_EXPLICIT: BadgeMode = 'explicit';
const BADGE_MODE_MINIMAL: BadgeMode = 'minimal';
const NEW_BADGE_TEXT = 'Novo' as const;
const MAX_NOTIFICATION_BADGE_COUNT = 99;

const ANCHOR_TOP_OFFSET = -4;
const ANCHOR_RIGHT_SPACING = 4.5;
const BADGE_WIDTH_OFFSET_NEW_TAG = 18;
const BADGE_WIDTH_OFFSET_NOTIFICATION_TAG = 18;

type ResolvedMenuBadge = {
  badgeKind: SidebarBadgeType | null;
  notificationText: string;
  isOverflowNotificationCount: boolean;
};

const resolveMenuBadge = (
  badge?: SidebarBadgeConfig,
): ResolvedMenuBadge => {
  if (!badge) {
    return {
      badgeKind: null,
      notificationText: '',
      isOverflowNotificationCount: false,
    };
  }

  if (badge.kind === SidebarBadgeType.NEW_TAG) {
    return {
      badgeKind: SidebarBadgeType.NEW_TAG,
      notificationText: '',
      isOverflowNotificationCount: false,
    };
  }

  const notificationCount = badge.count;
  const isOverflowNotificationCount =
    notificationCount > MAX_NOTIFICATION_BADGE_COUNT;
  const notificationText = isOverflowNotificationCount
    ? `+${MAX_NOTIFICATION_BADGE_COUNT}`
    : notificationCount.toString();

  return {
    badgeKind: SidebarBadgeType.NOTIFICATION_TAG,
    notificationText,
    isOverflowNotificationCount,
  };
};

const hasVisibleLoadingOverlay = (): boolean => {
  if (typeof document === 'undefined') return false;

  const splashScreen = document.getElementById('splash-screen');
  const isSplashVisible = !!splashScreen && !splashScreen.classList.contains('hidden');
  if (isSplashVisible) return true;

  return !!document.querySelector('.dialog.dialog-loader.dialog-top-center.dialog-shown');
};

const MenuBadge: React.FC<MenuNewTagProps> = ({
  isCollapsed,
  label,
  hasToggle,
  badge,
  anchorRef,
}) => {
  const badgeVariant = isCollapsed ? BADGE_VARIANT_OVERLAY : BADGE_VARIANT_INLINE;
  const { badgeKind, notificationText, isOverflowNotificationCount } = useMemo(
    () => resolveMenuBadge(badge),
    [badge],
  );
  const isNewTagVisible = badgeKind === SidebarBadgeType.NEW_TAG;

  const [overlayPosition, setOverlayPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const [isLoadingOverlayVisible, setIsLoadingOverlayVisible] = useState(false);
  const portalTarget = typeof document !== 'undefined' ? document.body : null;
  const lastTrackedBadgeKindRef = useRef<SidebarBadgeType | null>(null);
  const isBadgeDisplayedRef = useRef(false);
  const isOverlayBadgeVisible = overlayPosition !== null && !isLoadingOverlayVisible;
  const isBadgeVisible =
    badgeVariant === BADGE_VARIANT_INLINE || isOverlayBadgeVisible;

  const effectiveBadgeMode = useMemo<BadgeMode>(() => {
    if (!isNewTagVisible) return BADGE_MODE_MINIMAL;
    if (isCollapsed) return BADGE_MODE_MINIMAL;
    if (hasToggle) return BADGE_MODE_MINIMAL;
    return label.length <= MAX_LABEL_LENGTH_FOR_EXPLICIT_BADGE ? BADGE_MODE_EXPLICIT : BADGE_MODE_MINIMAL;
  }, [hasToggle, isCollapsed, isNewTagVisible, label.length]);

  useEffect(() => {
    if (!badgeKind) {
      lastTrackedBadgeKindRef.current = null;
      isBadgeDisplayedRef.current = false;
      return;
    }

    isBadgeDisplayedRef.current = isBadgeVisible;
  }, [
    badgeKind,
    isBadgeVisible,
  ]);

  useEffect(() => {
    if (!badgeKind) return;
    if (!isBadgeVisible) return;
    if (lastTrackedBadgeKindRef.current === badgeKind) return;

    if (badgeKind === SidebarBadgeType.NEW_TAG) trackMenuNewTagViewed(label);
    if (badgeKind === SidebarBadgeType.NOTIFICATION_TAG)
      trackNotificationTagViewed(label);
    lastTrackedBadgeKindRef.current = badgeKind;
  }, [badgeKind, label, isBadgeVisible]);

  useEffect(() => {
    if (!badgeKind || badgeVariant !== BADGE_VARIANT_OVERLAY) {
      setOverlayPosition(null);
      return;
    }

    const anchorEl = anchorRef.current;
    if (!anchorEl) {
      return;
    }

    const lastCoordsRef = { left: null as number | null, top: null as number | null };
    let rafId = 0;
    let isActive = true;

    const update = () => {
      const loadingVisible = hasVisibleLoadingOverlay();
      setIsLoadingOverlayVisible((prev) => (prev === loadingVisible ? prev : loadingVisible));
      if (loadingVisible) return;

      const anchorRect = anchorEl.getBoundingClientRect();
      const top = anchorRect.top + ANCHOR_TOP_OFFSET;
      const badgeWidthOffset =
        badgeKind === SidebarBadgeType.NOTIFICATION_TAG
          ? BADGE_WIDTH_OFFSET_NOTIFICATION_TAG
          : BADGE_WIDTH_OFFSET_NEW_TAG;
      const left = anchorRect.right + ANCHOR_RIGHT_SPACING - badgeWidthOffset;

      const shouldUpdate =
        lastCoordsRef.left === null ||
        lastCoordsRef.top === null ||
        Math.abs(left - lastCoordsRef.left) > 0.5 ||
        Math.abs(top - lastCoordsRef.top) > 0.5;

      if (shouldUpdate) {
        lastCoordsRef.left = left;
        lastCoordsRef.top = top;
        setOverlayPosition({ left, top });
      }
    };

    update();

    const onResize = () => update();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onResize, true);

    const tick = () => {
      if (!isActive) return;
      update();
      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    return () => {
      isActive = false;
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onResize, true);
    };
  }, [badgeKind, badgeVariant, anchorRef]);

  useEffect(() => {
    if (!badgeKind) return;

    const anchorEl = anchorRef.current;
    if (!anchorEl) return;

    const onClick = () => {
      if (!isBadgeDisplayedRef.current) return;
      const ariaDisabled = anchorEl.getAttribute('aria-disabled');
      if (ariaDisabled === 'true') return;

      if (badgeKind === SidebarBadgeType.NEW_TAG) trackMenuNewTagClicked(label);
      if (badgeKind === SidebarBadgeType.NOTIFICATION_TAG)
        trackNotificationTagClicked(label);
    };

    anchorEl.addEventListener('click', onClick);
    return () => {
      anchorEl.removeEventListener('click', onClick);
    };
  }, [anchorRef, badgeKind, label]);

  if (!badgeKind) {
    return null;
  }

  return (
    <>
      {badgeVariant === BADGE_VARIANT_INLINE ? (
        badgeKind === SidebarBadgeType.NEW_TAG ? (
          <S.NewTag $variant={badgeVariant}>
            <StarIcon size={8} />
            {effectiveBadgeMode === BADGE_MODE_EXPLICIT && <span>{NEW_BADGE_TEXT}</span>}
          </S.NewTag>
        ) : (
          <S.NotificationTag
            $variant={badgeVariant}
            $isOverflowNotificationCount={isOverflowNotificationCount}
          >
            <span>{notificationText}</span>
          </S.NotificationTag>
        )
      ) : overlayPosition && portalTarget && !isLoadingOverlayVisible ? (
        createPortal(
          badgeKind === SidebarBadgeType.NEW_TAG ? (
            <S.NewTag
              $variant={badgeVariant}
              style={{
                position: 'fixed',
                left: overlayPosition.left,
                top: overlayPosition.top,
              }}
            >
              <StarIcon size={8} />
            </S.NewTag>
          ) : (
            <S.NotificationTag
              $variant={badgeVariant}
              $isOverflowNotificationCount={isOverflowNotificationCount}
              style={{
                position: 'fixed',
                left: overlayPosition.left,
                top: overlayPosition.top,
              }}
            >
              <span>{notificationText}</span>
            </S.NotificationTag>
          ),
          portalTarget,
        )
      ) : null}
    </>
  );
};

export default MenuBadge;

