import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import * as S from "./styles";

const defaultOptions = [
  { value: "first", title: "Primeira opção" },
  { value: "second", title: "Segunda opção" },
];

export const ORIENTATIONS = {
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL",
};

export const RadioOptions = ({
  onChange = e => e.target.value,
  actived = "first",
  orientation = ORIENTATIONS.VERTICAL,
  options = defaultOptions,
  error = false,
  disabled = false,
}) => {
  return (
    <S.ContentOptions error={error} disabled={disabled}>
      <RadioGroup className="flex" value={actived} onChange={onChange}>
        <S.RadioList orientation={orientation} disabled={disabled}>
          {options.map(({ value, title }, index) => (
            <FormControlLabel
              key={`${value}-${index}`}
              value={value}
              control={<Radio disabled={disabled} />}
              label={
                <S.Title
                  className="title"
                  onClick={
                    !disabled
                      ? () => onChange({ target: { value } })
                      : undefined
                  }
                  disabled={disabled}
                >
                  {title}
                </S.Title>
              }
            />
          ))}
        </S.RadioList>
      </RadioGroup>
    </S.ContentOptions>
  );
};
