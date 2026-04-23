import { useState, useEffect } from "react";
import { Query, DocumentFilter } from "./types";
import { tokenize, calculateScore } from "./utils";
import { EventsSegment } from "../../../../../helpers/EventsSegmentsCalculators";

export function useSmartSearch(queries: Query[], documents: DocumentFilter[]) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState<(Query & { score?: number })[]>(
    queries
  );
  const { HandleEvent } = EventsSegment();

  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(search), 1000);
    return () => clearTimeout(id);
  }, [search]);

  useEffect(() => {
    const terms = tokenize(debouncedSearch);
    const selectedDocs = new Set(documents.map(d => d.name));

    if (terms.length === 0 && selectedDocs.size === 0) {
      setResults(queries);
      return;
    }

    const filtered = queries
      .map(q => ({
        ...q,
        score: calculateScore(q, terms),
      }))
      .filter(q => {
        const textMatch = terms.length === 0 || (q.score ?? 0) > 0;
        const docMatch =
          selectedDocs.size === 0 ||
          q.documents?.some(doc => selectedDocs.has(doc));
        return textMatch && docMatch;
      })
      .sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    setResults(filtered);

    if (filtered.length > 0) {
      HandleEvent("Smart search match found", {
        searchTerm: debouncedSearch || "(none)",
        resultsCount: filtered.length,
        matchedQueries: filtered.map(q => q.name),
        usedDocuments: Array.from(selectedDocs),
      });
    }
  }, [queries, debouncedSearch, documents]);

  return {
    search,
    setSearch,
    results,
  };
}
