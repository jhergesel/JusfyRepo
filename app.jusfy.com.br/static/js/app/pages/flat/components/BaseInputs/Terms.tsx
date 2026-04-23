import {
  Error,
  TermsOptionCheckBox,
  TermsOptionContainer,
  TermsOptionLabel,
} from "./BaseInputs.styles";
import { ITermProps } from "./types.BaseInputs";

export const Terms = ({ acceptTerm, setAcceptTerm, error }: ITermProps) => {
  return (
    <>
      <TermsOptionContainer>
        <TermsOptionCheckBox checked={acceptTerm} onClick={setAcceptTerm} />
        <TermsOptionLabel>
          Eu li e concordo com os{" "}
          <a target="_blank" rel="noopener noreferrer" href="/terms">
            termos de uso
          </a>{" "}
          referentes a consulta de dados dentro do JusFinder.
        </TermsOptionLabel>
      </TermsOptionContainer>
      {error && <Error>{error}</Error>}
    </>
  );
};
