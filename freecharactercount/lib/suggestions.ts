import { extractSentences, extractWords } from "./count";

export type Suggestion = {
  id: string;
  message: string;
  severity: "info" | "warn";
};

const SCAN_LIMIT = 300_000;

export function getWritingSuggestions(rawText: string): Suggestion[] {
  const text = rawText.slice(0, SCAN_LIMIT);
  if (!text.trim()) return [];

  const suggestions: Suggestion[] = [];

  const words = extractWords(text);
  for (let i = 1; i < words.length; i++) {
    if (words[i].toLowerCase() === words[i - 1].toLowerCase()) {
      suggestions.push({
        id: `repeat-${i}`,
        message: `Repeated word: “${words[i]}”`,
        severity: "warn",
      });
      if (suggestions.length >= 12) break;
    }
  }

  if (/\s{2,}/.test(text)) {
    suggestions.push({
      id: "double-spaces",
      message: "Double spaces found in the text",
      severity: "info",
    });
  }

  if (/\s+[.,!?;:]/.test(text)) {
    suggestions.push({
      id: "space-before-punct",
      message: "Space before punctuation detected",
      severity: "warn",
    });
  }

  const sentences = extractSentences(text);
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();
    const firstLetter = sentence.match(/\p{L}/u)?.[0];
    if (firstLetter && firstLetter === firstLetter.toLowerCase()) {
      suggestions.push({
        id: `lower-start-${i}`,
        message: `Sentence starts with lowercase: “${sentence.slice(0, 40)}${sentence.length > 40 ? "…" : ""}”`,
        severity: "warn",
      });
    }
    if (suggestions.filter((s) => s.id.startsWith("lower-start")).length >= 5) {
      break;
    }
  }

  for (let i = 0; i < sentences.length; i++) {
    const len = extractWords(sentences[i]).length;
    if (len > 30) {
      suggestions.push({
        id: `long-sentence-${i}`,
        message: `Long sentence (${len} words) — consider splitting`,
        severity: "info",
      });
    }
    if (suggestions.filter((s) => s.id.startsWith("long-sentence")).length >= 5) {
      break;
    }
  }

  return suggestions.slice(0, 20);
}
