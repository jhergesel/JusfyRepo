import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";

import {
  ButtonClose,
  ContentModal,
  Icon,
  ModalWrapper,
} from "./ModalLinkUsers.styles";
import { ModalLinkUsersProps } from "./types";

import { ContentSelectCustomer } from "./ConteSelectCustomer";
import { ContentCreateCustomer } from "./ContentCreateUser";
import { ContentUpdateUser } from "./ContentUpdateuser";
import useClickOutside from "../../../../../hooks/useClickOutside";

const ModalLink = ({
  open,
  closeModal,
  value = "",
  onChange,
  submit,
  error = "",
  customers = [],
  inputType,
  setInputType,
  unlinkUser,
}: ModalLinkUsersProps) => {
  const refModal = useClickOutside(closeModal, [
    "without-click",
    "select-client",
  ]);
  const modal = {
    select: (
      <ContentSelectCustomer
        customers={customers}
        onChange={onChange}
        error={error}
        submit={submit}
        value={value}
        inputType={inputType}
        setInputType={setInputType}
      />
    ),
    text: (
      <ContentCreateCustomer
        error={error}
        onChange={onChange}
        submit={submit}
        value={value}
        setInputType={setInputType}
      />
    ),
    update: (
      <ContentUpdateUser
        customers={customers}
        onChange={onChange}
        error={error}
        value={value}
        inputType={inputType}
        setInputType={setInputType}
        unlinkUser={unlinkUser}
        submit={submit}
      />
    ),
  }[inputType];

  return (
    <ModalWrapper open={open} disableEnforceFocus disableScrollLock>
      <div ref={refModal}>
        <ContentModal>
          <ButtonClose onClick={closeModal}>
            <Icon src={toAbsoluteUrl("/media/close-modal.svg")} />
          </ButtonClose>

          {modal}
        </ContentModal>
      </div>
    </ModalWrapper>
  );
};

export { ModalLink };
