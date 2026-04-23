import React from 'react';
import { MenuOutlineIcon } from 'app/components/core/icons';
import { toAbsoluteUrl } from '../../../../../../../_metronic/_helpers/AssetsHelpers';
import * as S from './styles';

interface MobileSidebarHeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const MobileSidebarHeader: React.FC<MobileSidebarHeaderProps> = ({
  onMenuToggle,
  isMenuOpen,
}) => (
  <S.Header>
    <S.Logo
      src={toAbsoluteUrl('/media/logos/logo.svg')}
      alt="Jusfy"
    />
    <S.MenuButton
      onClick={onMenuToggle}
      aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isMenuOpen}
    >
      <MenuOutlineIcon size={24} color="#383839" />
    </S.MenuButton>
  </S.Header>
);

export default MobileSidebarHeader;
