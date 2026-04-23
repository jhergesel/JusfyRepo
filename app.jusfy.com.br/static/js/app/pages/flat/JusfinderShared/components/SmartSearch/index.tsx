import React, { useState } from "react";
import { FilterSearchComponent } from "../../../../../components/Filters/FilterSearch/FilterSearch";
import { DrawerComponent } from "../../../../../components/Filters/Drawer/Drawer";
import { FilterDrawerButton } from "../../../../../components/Filters/FilterDrawerButton/FilterDrawerButton";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";
import { Box, Typography } from "@mui/material";
import * as InternalStyles from "./styles";
import MultiSelectWithChips from "./MultiSelectWithChips/MultiSelectWithChips";
import { AppliedFilters } from "./AppliedFilters/AppliedFilters";
import { DocumentFilter } from "./types";
import { EventsSegment } from "../../../../../helpers/EventsSegmentsCalculators";

interface ISmartSearch {
  search: string;
  setSearch: (value: string) => void;
  documents: DocumentFilter[];
  setDocuments: React.Dispatch<React.SetStateAction<DocumentFilter[]>>;
  loading: boolean;
  isUniversalJusfinder: boolean;
}

export const SmartSearch: React.FC<ISmartSearch> = ({
  search,
  setSearch,
  documents,
  setDocuments,
  loading,
  isUniversalJusfinder,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerDocuments, setDrawerDocuments] = useState<DocumentFilter[]>([]);
  const { HandleEvent } = EventsSegment();

  const openDrawer = () => {
    setDrawerDocuments([...documents]);
    setDrawerOpen(true);
    HandleEvent("Smart filter button clicked", {
      isUniversalJusfinder,
    });
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleApplyFilters = () => {
    setDocuments([...drawerDocuments]);
    if (drawerDocuments.length > 0) {
      HandleEvent("Smart filter documents selected", {
        isUniversalJusfinder,
        documents: drawerDocuments.map(d => d.label),
      });
    }
    closeDrawer();
  };

  const cleanDrawer = () => {
    HandleEvent("Smart filter clean drawer clicked", {
      isUniversalJusfinder,
    });
    setDrawerDocuments([]);
  };

  return (
    <>
      <DrawerComponent open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 380, p: 3 }} role="presentation">
          <Typography variant="h6" gutterBottom>
            Tipo de documento
          </Typography>

          <MultiSelectWithChips
            values={drawerDocuments}
            setValues={setDrawerDocuments}
          />

          <Box display="flex" justifyContent="space-between" gap={2}>
            <InternalStyles.DrawerFooter>
              <InternalStyles.ClearButton onClick={cleanDrawer}>
                Limpar
              </InternalStyles.ClearButton>
              <InternalStyles.ApplyButton onClick={handleApplyFilters}>
                Aplicar
              </InternalStyles.ApplyButton>
            </InternalStyles.DrawerFooter>
          </Box>
        </Box>
      </DrawerComponent>

      <div
        className="d-flex flex-column w-100"
        style={{
          gap: 12,
          opacity: 1,
          padding: 24,
          borderRadius: "var(--bs-border-radius-lg)",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#E5E7EB",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          className="d-flex w-100"
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <FilterSearchComponent
            loading={loading}
            search={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Pesquisa pelo título, descrição ou resultados obtidos na consulta"
            flex="1"
            width="100%"
          />
          <FilterDrawerButton
            width="10%"
            icon={toAbsoluteUrl(
              "/media/jusfinder/filter-2--funnel-filter-angle-oil.svg"
            )}
            onClick={openDrawer}
            loading={loading}
          />
        </div>

        <AppliedFilters
          filtersApplied={documents}
          onClear={() => setDocuments([])}
        />
      </div>
    </>
  );
};
