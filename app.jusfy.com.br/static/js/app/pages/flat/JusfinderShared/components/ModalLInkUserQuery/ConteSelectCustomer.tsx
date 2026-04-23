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

export const ContentSelectCustomer = ({
  error,
  customers,
  onChange,
  value,
  inputType,
  setInputType,
  submit,
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
        <ButtonModal
          border="none"
          background=" #01AB7D"
          color="#fff"
          onClick={submit}
        >
          Vincular cliente
        </ButtonModal>
      </ContentButtonsAction>
    </>
  );
};
