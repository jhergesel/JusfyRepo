import {
  ButtonModal,
  ContentButtonsAction,
  ContentInput,
  ErrorMessage,
  SelectClient,
  TitleModal,
  WrapperTitle,
} from "./ModalLinkUsers.styles";

import {
  customComponents,
  customSelectStyleItem,
} from "../../../../../../_metronic/_partials/dropdowns/ReactSelectCustomStyle.js";
import { CustomMenu } from "./CustomMenu";
import { ButtonExample } from "app/pages/flat/components/Button/Button";

export const ContentUpdateUser = ({
  error,
  customers,
  onChange,
  value,
  inputType,
  setInputType,
  submit,
  unlinkUser,
}) => {
  return (
    <>
      <WrapperTitle>
        <TitleModal>Vincular cliente à consulta</TitleModal>
      </WrapperTitle>

      <ContentInput>
        <label>
          Cliente<span>*</span>
        </label>

        <SelectClient
          classNamePrefix="custom-react-select"
          id="select-client"
          type="text"
          name="customer"
          value={value}
          options={customers}
          placeholder="Selecione..."
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          components={{ ...customComponents, Menu: CustomMenu }}
          error={!!error}
          theme={customSelectStyleItem}
          noOptionsMessage={() => <span>Sem resultados.</span>}
          onChange={value => onChange(value)}
          setInputType={setInputType}
          inputType={inputType}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          styles={{
            menuPortal: base => ({
              ...base,
              zIndex: 999999,
            }),
          }}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ContentInput>

      <ContentButtonsAction>
        <ButtonExample
          background="transparent"
          title="Desvincular cliente"
          onClick={unlinkUser}
          border="none"
          height="fit-content"
          padding="0px"
          color="#d33143"
          justifyContent="flex-start"
          width="50%"
        />
        <ButtonModal
          border="none"
          background=" #01AB7D"
          color="#fff"
          onClick={submit}
        >
          Atualizar cliente
        </ButtonModal>
      </ContentButtonsAction>
    </>
  );
};
