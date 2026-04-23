import ModalDialog from "../../ModalDialog";
import Button from "../../Button";
import * as S from "./styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  primaryButtonLabel: string;
}

const ModalConfirmation = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  primaryButtonLabel,
}: Props) => {
  return (
    <ModalDialog open={isOpen} onClose={onClose}>
      <S.Container>
        <S.Title component="h2">{title}</S.Title>
        <S.Description component="p">{description}</S.Description>
        <S.ButtonsContainer>
          <Button
            border="1px solid #CAC9CF"
            borderRadius="5px"
            color="#5e5e60"
            backgroundColor="white"
            hoverBackgroundColor="#f5f5f5"
            hoverColor="#3d3d3d"
            padding="10px 24px"
            onClick={onClose}
          >
            Voltar
          </Button>
          <Button
            backgroundColor="#E04353"
            color="white"
            hoverBackgroundColor="#c93a48"
            padding="10px 24px"
            borderRadius="5px"
            onClick={onConfirm}
          >
            {primaryButtonLabel}
          </Button>
        </S.ButtonsContainer>
      </S.Container>
    </ModalDialog>
  );
};

export default ModalConfirmation;
