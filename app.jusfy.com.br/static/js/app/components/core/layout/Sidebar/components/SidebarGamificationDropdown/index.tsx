import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import useClickOutside from 'app/hooks/useClickOutside';
import ChallengesList from 'app/pages/Gamification/components/ChallengesList';
import GamificationMenuLevelHeader from 'app/components/GamificationMenuLevelHeader';
import ChallengeModal from 'app/pages/Gamification/components/ChallengeModal';
import InviteModal from 'app/pages/Gamification/components/InviteModal';
import { useGamificationChallengesQuery } from 'app/pages/Gamification/hooks/useGamificationQuery';
import {
  isChallengeBlockedForAction,
  resolveChallengeStartDestination,
  shouldOpenInviteModal,
} from 'app/helpers/gamification/challengeActions';
import { ROUTES_PATH } from 'app/constants/Routes';
import { trackMenuGamificationDetailsClicked } from '../../trackMenuEvents';
import * as S from './styles';

type SidebarGamificationDropdownProps = {
  icon: React.ReactNode;
  ariaLabel: string;
  tooltip?: string;
  routeActive?: boolean;
  onNavigate: (path: string) => void;
  onOpen?: () => void;
};

type SidebarChallenge = {
  id: string | number;
  name: string;
  description?: string;
  points?: number;
  event?: string;
  user_status?: string;
};

const isSidebarChallenge = (challenge: unknown): challenge is SidebarChallenge => {
  if (!challenge || typeof challenge !== 'object') return false;
  const candidate = challenge as Record<string, unknown>;

  const hasValidId =
    typeof candidate.id === 'string' || typeof candidate.id === 'number';
  const hasValidName = typeof candidate.name === 'string';

  return hasValidId && hasValidName;
};

const SidebarGamificationDropdown: React.FC<
  SidebarGamificationDropdownProps
> = ({
  icon,
  ariaLabel,
  tooltip,
  routeActive = false,
  onNavigate,
  onOpen,
}) => {
  const [open, setOpen] = useState(false);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] =
    useState<SidebarChallenge | null>(null);
  const [menuPosition, setMenuPosition] = useState({ left: 0, bottom: 0 });
  const hasOpenModal = isChallengeModalOpen || isInviteModalOpen;
  const {
    data: rawChallenges = [],
    isLoading: isLoadingChallenges,
  } = useGamificationChallengesQuery({
    enabled: open,
  });

  const challenges = useMemo(
    () => (rawChallenges as unknown[]).filter(isSidebarChallenge),
    [rawChallenges],
  );

  const forceCloseDropdown = useCallback(() => setOpen(false), []);
  const handleClose = useCallback(() => {
    if (hasOpenModal) {
      return;
    }
    forceCloseDropdown();
  }, [hasOpenModal, forceCloseDropdown]);
  const containerRef = useClickOutside(handleClose, [
    'sidebar-gamification-menu-portal',
  ]);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen((prev) => {
      const nextOpen = !prev;
      if (nextOpen) {
        onOpen?.();
      }
      return nextOpen;
    });
  };

  const handleViewAllChallenges = () => {
    trackMenuGamificationDetailsClicked();
    onNavigate(ROUTES_PATH.GAMIFICATION.BASE);
    forceCloseDropdown();
  };

  const handleCloseModals = () => {
    setSelectedChallenge(null);
    setIsChallengeModalOpen(false);
    setIsInviteModalOpen(false);
  };

  const handleChallengeClick = (challenge: SidebarChallenge) => {
    if (isChallengeBlockedForAction(challenge)) {
      return;
    }

    setSelectedChallenge(challenge);

    if (shouldOpenInviteModal(challenge)) {
      setIsInviteModalOpen(true);
      return;
    }

    setIsChallengeModalOpen(true);
  };

  const handleStartChallenge = () => {
    const destination = resolveChallengeStartDestination(selectedChallenge?.event);

    handleCloseModals();

    if (destination.type === 'external') {
      forceCloseDropdown();
      const newWin = window.open(destination.url, '_blank', 'noopener,noreferrer');
      if (newWin) newWin.opener = null;
      return;
    }

    if (destination.type === 'internal') {
      forceCloseDropdown();
      onNavigate(destination.path);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  const handlePanelKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useLayoutEffect(() => {
    if (!open || !containerRef.current) {
      return;
    }

    const sidebarColumn = containerRef.current.closest('[data-sidebar-column]');
    const leftPx = sidebarColumn
      ? sidebarColumn.getBoundingClientRect().right
      : containerRef.current.getBoundingClientRect().right;

    setMenuPosition({
      left: leftPx,
      bottom: 24,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleResize = () => handleClose();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open, handleClose]);

  const menuPanel = open ? (
    <S.MenuPanel
      role="dialog"
      aria-modal="false"
      aria-label="Gamificação"
      $left={menuPosition.left}
      $bottom={menuPosition.bottom}
      onKeyDown={handlePanelKeyDown}
    >
      <S.Content>
        <GamificationMenuLevelHeader />
        <S.ChallengesSection>
          <S.SectionTitle>Turbine seus pontos</S.SectionTitle>
          <ChallengesList
            challenges={challenges}
            loading={isLoadingChallenges}
            compact
            disableInternalFlow
            onChallengeSelect={handleChallengeClick}
            hideLeadingIcon
          />
          <S.Cta type="button" onClick={handleViewAllChallenges}>
            Ver mais desafios
          </S.Cta>
        </S.ChallengesSection>
      </S.Content>
    </S.MenuPanel>
  ) : null;

  const tooltipAttributes = tooltip
    ? {
        'data-tooltip-id': 'sidebar-icon-tooltip',
        'data-tooltip-content': tooltip,
      }
    : {};

  return (
    <S.Wrapper ref={containerRef}>
      <S.IconWrapper
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={open}
        {...tooltipAttributes}
      >
        <S.Icon $active={open} $routeActive={routeActive}>
          {icon}
        </S.Icon>
      </S.IconWrapper>
      {open &&
        createPortal(
          <div id="sidebar-gamification-menu-portal">
            {menuPanel}
            <ChallengeModal
              isOpen={isChallengeModalOpen}
              challenge={
                selectedChallenge
                  ? {
                      name: selectedChallenge.name,
                      points: selectedChallenge.points,
                      description: selectedChallenge.description,
                      event: selectedChallenge.event,
                    }
                  : null
              }
              onClose={handleCloseModals}
              onStart={handleStartChallenge}
            />
            <InviteModal
              isOpen={isInviteModalOpen}
              challenge={
                selectedChallenge
                  ? {
                      name: selectedChallenge.name,
                      points: selectedChallenge.points,
                    }
                  : null
              }
              onClose={handleCloseModals}
            />
          </div>,
          document.body,
        )}
    </S.Wrapper>
  );
};

export default SidebarGamificationDropdown;
