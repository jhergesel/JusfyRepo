import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/types';
import { createPortal } from 'react-dom';
import useClickOutside from 'app/hooks/useClickOutside';
import { LogoutOutlineIcon, OpenInNewOutlineIcon } from '../../../../icons';
import * as S from './styles';
import { ROUTES_PATH } from 'app/constants/Routes';

type SidebarProfileDropdownProps = {
  icon: React.ReactNode;
  tooltip?: string;
  onNavigate: (path: string) => void;
};

const LOGOUT_PATH = '/logout';

const SidebarProfileDropdown: React.FC<SidebarProfileDropdownProps> = ({
  icon,
  tooltip,
  onNavigate,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ left: 0, bottom: 0 });

  const handleClose = useCallback(() => setOpen(false), []);
  const containerRef = useClickOutside(handleClose, ['sidebar-profile-menu-portal']);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleSelect = (path: string) => {
    if (path.startsWith('http')) {
      const win = window.open(path, '_blank', 'noopener,noreferrer');
      if (win) win.opener = null;
    } else {
      onNavigate(path);
    }
    handleClose();
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

  const userName = user?.name ?? '';
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
    <S.MenuPanel role="menu" $left={menuPosition.left} $bottom={menuPosition.bottom}>
      <S.MenuHeader>{userName}</S.MenuHeader>
      <S.MenuDivider />
      <S.MenuItemButton type="button" onClick={() => handleSelect(ROUTES_PATH.EXTERNAL.MANUALS)} role="menuitem">
        <span>Manuais de uso</span>
        <S.MenuItemIcon $green>
          <OpenInNewOutlineIcon size={14} color="currentColor" />
        </S.MenuItemIcon>
      </S.MenuItemButton>
      <S.MenuDivider />
      <S.MenuItemButton type="button" onClick={() => handleSelect(LOGOUT_PATH)} role="menuitem">
        <span>Sair</span>
        <S.MenuItemIcon>
          <LogoutOutlineIcon size={14} color="#383839" />
        </S.MenuItemIcon>
      </S.MenuItemButton>
    </S.MenuPanel>
  ) : null;

  return (
    <S.Wrapper ref={containerRef}>
      <S.IconWrapper
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        data-tooltip-id="sidebar-icon-tooltip"
        data-tooltip-content={tooltip}
      >
        <S.Icon $active={open}>{icon}</S.Icon>
      </S.IconWrapper>
      {open && createPortal(<div id="sidebar-profile-menu-portal">{menuPanel}</div>, document.body)}
    </S.Wrapper>
  );
};

export default SidebarProfileDropdown;
