import { useEffect, useState } from "react";
import ModalDialog from "../../../../../components/flat/ui/ModalDialog";
import { BannerUniversalMigration } from "../BannerUniversalMigration";
import { EventsSegment } from "../../../../../helpers/EventsSegmentsCalculators";
import {
  ChangesTitle,
  CheckIcon,
  CheckLabel,
  CloseIconButton,
  Container,
  Description,
  Title,
  WrapperModalContent,
} from "./styles";
import {
  eventModalOpen,
  eventModalPreview,
  modalChangesTitle,
  modalDescription,
  modalTitle,
} from "./constants";

export const ModalUniversalMigration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { HandleEvent } = EventsSegment();

  const handleOpenModal = () => {
    HandleEvent(eventModalOpen);
    setIsModalOpen(true);
  };

  useEffect(() => {
    HandleEvent(eventModalPreview);
  }, [HandleEvent]);

  return (
    <>
      <BannerUniversalMigration onButtonClick={handleOpenModal} />
      <ModalDialog open={isModalOpen}>
        <WrapperModalContent>
          <CloseIconButton onClick={() => setIsModalOpen(false)}>
            <img src={"/media/flat/close.svg"} alt="icon" />
          </CloseIconButton>
          <Container>
            <img
              src={"/media/jusfinder/modal-universal-migration.svg"}
              alt="icon"
            />
            <Title>{modalTitle}</Title>
            <Description>{modalDescription}</Description>
            <ChangesTitle>{modalChangesTitle}</ChangesTitle>
            <CheckLabel>
              <CheckIcon
                src={"/media/jusfinder/check-success.svg"}
                alt="icon"
              />
              Um <strong>saldo único</strong> para todas as consultas da
              JusFinder.
            </CheckLabel>
            <CheckLabel>
              <CheckIcon
                src={"/media/jusfinder/check-success.svg"}
                alt="icon"
              />
              Cada consulta <strong>consome um peso em créditos</strong> (você
              vê antes de confirmar).
            </CheckLabel>
            <CheckLabel>
              <CheckIcon
                src={"/media/jusfinder/check-success.svg"}
                alt="icon"
              />
              Acompanhe tudo em tempo real:{" "}
              <strong>saldo, peso por consulta e histórico de uso.</strong>
            </CheckLabel>
          </Container>
        </WrapperModalContent>
      </ModalDialog>
    </>
  );
};
