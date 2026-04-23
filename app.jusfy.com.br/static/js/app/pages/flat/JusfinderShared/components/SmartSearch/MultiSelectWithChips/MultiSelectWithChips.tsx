import React from "react";
import { InputLabel, Select, MenuItem, Box } from "@mui/material";
import * as S from "./styles";

const OPTIONS = [
  { name: "cpf", label: "CPF" },
  { name: "cnpj", label: "CNPJ" },
  { name: "vehicle", label: "Placa de veículo" },
];
interface MultiSelectWithChipsProps {
  values: Array<{ name: string; label: string }>;
  setValues: React.Dispatch<
    React.SetStateAction<Array<{ name: string; label: string }>>
  >;
}
export default function MultiSelectWithChips({
  values,
  setValues,
}: MultiSelectWithChipsProps) {
  const handleChange = event => {
    const selectedNames = event.target.value;
    const selectedObjects = OPTIONS.filter(opt =>
      selectedNames.includes(opt.name)
    );
    setValues(selectedObjects);
  };

  const handleDelete = valueToDelete => {
    setValues(prev => prev.filter(v => v.name !== valueToDelete.name));
  };

  const selectedNames = values.map(v => v.name);

  return (
    <S.StyledFormControl fullWidth>
      <InputLabel id="status-label"></InputLabel>
      <Select
        labelId="status-label"
        multiple
        value={selectedNames}
        onChange={handleChange}
        renderValue={selected => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map(name => {
              const option = OPTIONS.find(o => o.name === name);
              return (
                <S.StyledChip
                  key={`chip-${name}`}
                  label={option?.label || name}
                  onDelete={e => {
                    e.stopPropagation();
                    handleDelete(option);
                  }}
                  onMouseDown={e => e.stopPropagation()}
                  deleteIcon={<span>×</span>}
                />
              );
            })}
          </Box>
        )}
      >
        {OPTIONS.map(option => (
          <MenuItem
            key={`select-item-${option.name}`}
            value={option.name}
            selected={selectedNames.includes(option.name)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </S.StyledFormControl>
  );
}
