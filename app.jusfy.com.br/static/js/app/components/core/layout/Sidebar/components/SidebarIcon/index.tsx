import React, { useRef } from 'react';
import * as S from './styles';
import type { SidebarBadgeConfig } from '../../MenuConfig';
import MenuBadge from '../MenuBadge/index';

interface SidebarIconProps {
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  disabled?: boolean;
  disabledTooltip?: string;
  onClick: () => void;
  tooltip?: string;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: () => void;
  badge?: SidebarBadgeConfig;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
  icon,
  label,
  active,
  disabled = false,
  disabledTooltip,
  onClick,
  tooltip,
  onMouseEnter,
  onMouseLeave,
  badge,
}) => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  const handleClick = () => {
    if (!disabled) onClick();
  };

  const effectiveTooltip = disabled ? disabledTooltip : tooltip;

  return (
    <S.IconWrapper
      disabled={disabled}
      data-tooltip-id="sidebar-icon-tooltip"
      data-tooltip-content={effectiveTooltip}
      onMouseEnter={disabled ? undefined : onMouseEnter}
      onMouseLeave={disabled ? undefined : onMouseLeave}
    >
     <S.Icon
      ref={iconRef}
      active={active}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      data-disabled={disabled || undefined}
    >
      {icon}
    </S.Icon>
      {label && <S.IconLabel>{label}</S.IconLabel>}
      <MenuBadge
        anchorRef={iconRef}
        isCollapsed
        label={label ?? tooltip ?? ''}
        hasToggle={false}
        badge={badge}
      />
    </S.IconWrapper>
  );
};

export default SidebarIcon;
