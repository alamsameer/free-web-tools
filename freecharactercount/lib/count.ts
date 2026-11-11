export type TextCounts = {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  spaces: number;
};

function getWords(text: string): string[] {
  const matches = text.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu);
  return matches ?? [];
}

function getSentences(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const parts = trimmed
    .split(/(?<=[.!?…])\s+|(?<=[.!?…])(?=["”')\]]*\s*[A-ZÀ-ÖØ-Þ])/u)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length > 0 ? parts : [trimmed];
}

export function analyzeText(text: string): TextCounts {
  const characters = text.length;
  const spaces = (text.match(/\s/g) ?? []).length;
  const charactersNoSpaces = characters - spaces;
  const words = getWords(text).length;
  const sentences = text.trim() ? getSentences(text).length : 0;
  const paragraphs = text.trim()
    ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length
    : 0;

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    spaces,
  };
}

export function extractWords(text: string): string[] {
  return getWords(text);
}

export function extractSentences(text: string): string[] {
  if (!text.trim()) return [];
  return getSentences(text);
}
