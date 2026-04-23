import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { toAbsoluteUrl } from '../../../../../_helpers';
import { useUserPreferences, USER_PREFERENCES_QUERY_KEY } from '../../../../../../app/services/userPreferences';
import ModalLoading from '../../../../../../app/components/flat/ui/Modals/ModalLoading';
import {
  MessageOutlineIcon,
  ReturnOutlineIcon,
  SettingsGridOutlineIcon,
} from 'app/components/core/icons';
import { PERFIL_TEXTS } from '../../../../../../app/pages/Perfil/texts';
import { trackMenuVersionToggled } from '../../../../../../app/components/core/layout/Sidebar/trackMenuEvents';
import {
  Wrapper,
  ImageWrapper,
  TextContent,
  Title,
  Description,
  CTA,
} from './styles';
import { MENU_VERSION_VALUES } from 'app/services/userPreferences/types';
import { ROUTES_PATH } from 'app/constants/Routes';

export function NewMenuBanner() {
  const history = useHistory();
  const { isUpdating, updateUserPreferencesAsync } = useUserPreferences();
  const queryClient = useQueryClient();
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [apiComplete, setApiComplete] = useState(false);

  const handleCtaClick = () => {
    trackMenuVersionToggled(MENU_VERSION_VALUES.v2);
    setApiComplete(false);
    setShowLoadingModal(true);
    updateUserPreferencesAsync({ menuVersion: MENU_VERSION_VALUES.v2 })
      .then(async () => {
        setApiComplete(true);
        await queryClient.invalidateQueries({ queryKey: USER_PREFERENCES_QUERY_KEY });
        history.push(ROUTES_PATH.MAIN.DASHBOARD);
      })
      .catch((err) => {
        setApiComplete(false);
        setShowLoadingModal(false);
        console.error('patchUserPreferencesApi failed', err);
        toast.error('Erro ao atualizar preferências. Tente novamente.');
      });
  };

  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <img
            src={toAbsoluteUrl('/media/flat/banners/NewMenuBanner/remote-meeting-pana.svg')}
            alt=""
          />
        </ImageWrapper>
        <TextContent>
          <Title>Ganhe mais agilidade com a nova organização!</Title>
          <Description>
            Experimente ainda mais facilidade de encontrar as ferramentas
            disponíveis
          </Description>
        </TextContent>
        <CTA onClick={handleCtaClick} disabled={isUpdating || showLoadingModal}>
          Ir para nova versão
        </CTA>
      </Wrapper>
      <ModalLoading
        isOpen={showLoadingModal}
        duration={3000}
        title={PERFIL_TEXTS.newMenuModalLoadingV2.title}
        subtitle={PERFIL_TEXTS.newMenuModalLoadingV2.subtitle}
        icons={[
          <ReturnOutlineIcon key="return" size={38} color="#1CB59F" />,
          <SettingsGridOutlineIcon key="settings" size={38} color="#1CB59F" />,
          <MessageOutlineIcon key="message" size={38} color="#1CB59F" />
        ]}
        externalComplete={apiComplete}
        onComplete={() => {
          setShowLoadingModal(false);
        }}
      />
    </>
  );
}
