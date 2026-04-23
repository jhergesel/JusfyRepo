import {
  WrapperInputs,
  LabelInput,
  Input,
  Error as ErrorText,
} from "./BaseInputs.styles";
import { IDocumentProps } from "./types.BaseInputs";

export const Document = ({
  label,
  documentType,
  error,
  value,
  onChange,
}: IDocumentProps) => {
  return (
    <WrapperInputs>
      <LabelInput>
        {label} ({`${documentType}`}) <span>*</span>
      </LabelInput>
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        role="textbox"
        error={!!error}
      />

      {error && <ErrorText>{error}</ErrorText>}
    </WrapperInputs>
  );
};
