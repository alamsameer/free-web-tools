import { extractWords } from "./count";

const ENGLISH_STOPWORDS = new Set([
  "a",
  "about",
  "above",
  "after",
  "again",
  "against",
  "all",
  "am",
  "an",
  "and",
  "any",
  "are",
  "as",
  "at",
  "be",
  "because",
  "been",
  "before",
  "being",
  "below",
  "between",
  "both",
  "but",
  "by",
  "can",
  "did",
  "do",
  "does",
  "doing",
  "down",
  "during",
  "each",
  "few",
  "for",
  "from",
  "further",
  "had",
  "has",
  "have",
  "having",
  "he",
  "her",
  "here",
  "hers",
  "herself",
  "him",
  "himself",
  "his",
  "how",
  "i",
  "if",
  "in",
  "into",
  "is",
  "it",
  "its",
  "itself",
  "just",
  "me",
  "more",
  "most",
  "my",
  "myself",
  "no",
  "nor",
  "not",
  "now",
  "of",
  "off",
  "on",
  "once",
  "only",
  "or",
  "other",
  "our",
  "ours",
  "ourselves",
  "out",
  "over",
  "own",
  "same",
  "she",
  "should",
  "so",
  "some",
  "such",
  "than",
  "that",
  "the",
  "their",
  "theirs",
  "them",
  "themselves",
  "then",
  "there",
  "these",
  "they",
  "this",
  "those",
  "through",
  "to",
  "too",
  "under",
  "until",
  "up",
  "very",
  "was",
  "we",
  "were",
  "what",
  "when",
  "where",
  "which",
  "while",
  "who",
  "whom",
  "why",
  "will",
  "with",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
]);

export type DensityItem = {
  word: string;
  count: number;
  percent: number;
};

export function getWordDensity(
  text: string,
  options: { topN?: number; filterStopwords?: boolean } = {},
): DensityItem[] {
  const { topN = 20, filterStopwords = true } = options;
  const words = extractWords(text).map((w) => w.toLowerCase());
  const filtered = filterStopwords
    ? words.filter((w) => !ENGLISH_STOPWORDS.has(w) && w.length > 1)
    : words;

  if (filtered.length === 0) return [];

  const freq = new Map<string, number>();
  for (const word of filtered) {
    freq.set(word, (freq.get(word) ?? 0) + 1);
  }

  const total = filtered.length;
  return [...freq.entries()]
    .map(([word, count]) => ({
      word,
      count,
      percent: (count / total) * 100,
    }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word))
    .slice(0, topN);
}
