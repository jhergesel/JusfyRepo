import { Box } from "@mui/material";
import * as S from "./styles";
import { pluralizeWord } from "../../../../Jusfinder/utils/utils.jusfinder";
import { DocumentFilter } from "../types";

interface AppliedFiltersProps {
  filtersApplied: DocumentFilter[];
  onClear: () => void;
}

export const AppliedFilters = ({
  filtersApplied,
  onClear,
}: AppliedFiltersProps) => {
  if (!filtersApplied || filtersApplied.length === 0) return null;
  const joined = filtersApplied.map(f => f.label).join(", ");

  return (
    <Box display="flex" alignItems="center" flexWrap="wrap" gap={1} mt={2}>
      <S.StyledChip
        key="chip-features"
        label={
          <>
            {pluralizeWord("Documento", filtersApplied.length)}
            {": "} {joined}
          </>
        }
      />
      <S.ClearButton variant="text" onClick={onClear}>
        Limpar
      </S.ClearButton>
    </Box>
  );
};
