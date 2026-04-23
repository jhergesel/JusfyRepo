import * as S from "./ModalForm.styles";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { IModalForm } from "./types.ModalForm";

const ModalForm = ({ openModal, setOpenModal, url }: IModalForm) => {
  return (
    <S.Container open={openModal}>
      <S.Content>
        <S.ContentTitle>
          <S.Title>Sugerir uma nova consulta</S.Title>
          <S.ButtonClose
            src={toAbsoluteUrl("/media/calculadoras/close-modal.svg")}
            onClick={() => setOpenModal(!openModal)}
          />
          <S.LineDivision></S.LineDivision>
        </S.ContentTitle>

        <S.Form src={url} frameBorder="0"></S.Form>
      </S.Content>
    </S.Container>
  );
};

export { ModalForm };
