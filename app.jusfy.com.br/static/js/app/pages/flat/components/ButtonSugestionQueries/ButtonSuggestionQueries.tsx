import { ButtonSuggestion, IconChat } from "./ButtonSuggestion.styles";

import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { IButtonSuggestionQueriesProps } from "./types.buttonSuggestionQueries";

export const ButtonSuggestionQueries = ({
  onClick,
  text = "Sugestão",
}: IButtonSuggestionQueriesProps) => {
  return (
    <ButtonSuggestion onClick={onClick}>
      <IconChat src={toAbsoluteUrl("/media/jusfinder/chat-sugestion.svg")} />
      {text}
    </ButtonSuggestion>
  );
};
