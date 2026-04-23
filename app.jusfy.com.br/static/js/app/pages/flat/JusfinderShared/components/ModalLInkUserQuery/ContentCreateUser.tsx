import {
  ButtonModal,
  ContentButtonsAction,
  ContentInput,
  ErrorMessage,
  Input,
  SubTitle,
  TitleModal,
  WrapperTitle,
} from "./ModalLinkUsers.styles";
import { ButtonExample } from "app/pages/flat/components/Button/Button";

export const ContentCreateCustomer = ({
  error,
  onChange,
  value,
  submit,
  setInputType,
}) => {
  return (
    <>
      <WrapperTitle>
        <TitleModal>Vincular novo cliente à consulta</TitleModal>
        <SubTitle>
          Depois de adicionar o novo cliente, acesse “Meus clientes” para
          incluir mais informações
        </SubTitle>
      </WrapperTitle>

      <ContentInput>
        <label>
          Cliente<span>*</span>
        </label>

        <Input
          value={value}
          onChange={e => onChange(e.target.value)}
          error={!!error}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ButtonExample
          background="transparent"
          title="Selecione cliente existente"
          onClick={() => setInputType("select")}
          border="none"
          height="fit-content"
          padding="0px"
        />
      </ContentInput>

      <ContentButtonsAction>
        <ButtonModal
          border="none"
          background=" #01AB7D"
          color="#fff"
          onClick={submit}
        >
          Adicionar cliente
        </ButtonModal>
      </ContentButtonsAction>
    </>
  );
};
