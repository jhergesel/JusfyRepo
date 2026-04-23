import { Query } from "./types";

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function tokenize(text: string): string[] {
  return normalize(text)
    .split(/[\s,.;:!?/()'"-]+/)
    .filter(Boolean);
}

export function calculateScore(query: Query, terms: string[]): number {
  if (terms.length === 0) return 0;

  const words = new Set([
    ...tokenize(query.name),
    ...query.tags.flatMap(tokenize),
    ...query.contexts.flatMap(tokenize),
    ...(query.documents ? query.documents.map(normalize) : []),
  ]);

  return terms.reduce((score, term) => {
    const normalizedTerm = normalize(term);
    return words.has(normalizedTerm) ? score + 1 : score;
  }, 0);
}
