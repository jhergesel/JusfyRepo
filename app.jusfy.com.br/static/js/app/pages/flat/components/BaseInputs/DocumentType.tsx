import { ORIENTATIONS, RadioOptions } from "../RadioOptions";

import { IBaseInputsProps } from "./types.BaseInputs";
import { WrapperInputs, LabelInput } from "./BaseInputs.styles";

export const DocumentType = ({
  label,
  optionsDocument = [{ value: "CPF", title: "CPF" }],
  actived = "CPF",
  setDocumentType = () => {},
}: IBaseInputsProps) => {
  return (
    <WrapperInputs>
      <LabelInput>
        {label} <span>*</span>
      </LabelInput>
      <RadioOptions
        orientation={ORIENTATIONS.HORIZONTAL}
        options={optionsDocument}
        actived={actived}
        onChange={e => setDocumentType(e.target.value)}
      />
    </WrapperInputs>
  );
};
