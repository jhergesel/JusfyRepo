import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getRoutePrefixes } from '../../MenuConfig';
import * as S from './styles';
import MenuBadge from '../MenuBadge/index';
import type { SidebarBadgeConfig } from '../../MenuConfig';

interface MenuDrawerItemBaseProps {
  icon: React.ReactNode;
  isCollapsed: boolean;
  label: string;
  disabled?: boolean;
  disabledTooltip?: string;
  onClick: () => void;
  route?: string;
  activePrefixes?: string[];
  toggle?: React.ReactNode;
  togglePosition?: 'left' | 'right';
  iconPosition?: 'left' | 'right';
  badge?: SidebarBadgeConfig;
  highlight?: boolean;
}

type MenuDrawerItemProps = MenuDrawerItemBaseProps;

const MenuDrawerItem: React.FC<MenuDrawerItemProps> = ({
  icon,
  label,
  disabled = false,
  disabledTooltip,
  onClick,
  route,
  isCollapsed,
  activePrefixes,
  toggle,
  togglePosition = 'right',
  iconPosition = 'left',
  badge,
  highlight = false,
}) => {
  const location = useLocation();
  const prefixes = getRoutePrefixes(route, activePrefixes);
  const itemWrapperRef = useRef<HTMLDivElement | null>(null);

  const isActive = prefixes.some((prefix) => {
    if (prefix.includes('#')) {
      const [pathPart, hashPart] = prefix.split('#');
      const normalizedPrefix = pathPart.replace(/\/$/, '');
      const normalizedPathname = location.pathname.replace(/\/$/, '');
      return normalizedPathname === normalizedPrefix && location.hash === `#${hashPart}`;
    }
    if (location.hash) {
      return false;
    }
    return location.pathname === prefix || location.pathname.startsWith(prefix + '/');
  });
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;
    if (event.key === 'Enter' || event.key === ' ') {
      if (event.key === ' ') {
        event.preventDefault();
      }
      onClick();
    }
  };

  const handleClick = toggle ? undefined : disabled ? undefined : onClick;
  const effectiveTooltip =
    disabled && disabledTooltip
      ? disabledTooltip
      : isCollapsed
      ? label
      : undefined;

  const shouldRenderIcon = !toggle;
  const iconNode = (
    <S.IconWrapper>
      <S.Icon>{icon}</S.Icon>
    </S.IconWrapper>
  );

  return (
    <S.ItemWrapper
      ref={itemWrapperRef}
      active={isActive}
      isCollapsed={isCollapsed}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={toggle ? undefined : 'button'}
      tabIndex={toggle || disabled ? -1 : 0}
      aria-label={label}
      aria-disabled={disabled}
      hasToggle={!!toggle}
      togglePosition={togglePosition}
      iconPosition={iconPosition}
      data-tooltip-id={
        isCollapsed || (disabled && disabledTooltip)
          ? 'menu-drawer-item-tooltip'
          : undefined
      }
      data-tooltip-content={effectiveTooltip}
      data-tooltip-place="right"
    >
      {shouldRenderIcon && iconPosition === 'left' && iconNode}
      {!isCollapsed && <S.ItemLabel highlight={highlight}>{label}</S.ItemLabel>}
      {shouldRenderIcon && iconPosition === 'right' && iconNode}
      {toggle && <S.ToggleWrapper>{toggle}</S.ToggleWrapper>}
      <MenuBadge
        anchorRef={itemWrapperRef}
        isCollapsed={isCollapsed}
        label={label}
        hasToggle={!!toggle}
        badge={badge}
      />
    </S.ItemWrapper>
  );
};

export default MenuDrawerItem;
