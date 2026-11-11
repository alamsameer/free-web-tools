import { extractSentences, extractWords } from "./count";

export type ReadabilityStats = {
  readingSeconds: number;
  speakingSeconds: number;
  uniqueWords: number;
  avgSentenceWords: number;
  longestSentenceWords: number;
  fleschKincaidGrade: number | null;
  gradeLabel: string | null;
};

const READING_WPM = 275;
const SPEAKING_WPM = 180;

function countSyllables(word: string): number {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!cleaned) return 0;
  if (cleaned.length <= 3) return 1;

  const groups = cleaned
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
    .replace(/^y/, "")
    .match(/[aeiouy]{1,2}/g);

  return groups?.length ?? 1;
}

function formatGradeLabel(grade: number): string {
  if (grade >= 16) return "Post-college";
  if (grade >= 13) return "College";
  const rounded = Math.max(1, Math.round(grade));
  return `Grade ${rounded}`;
}

export function getReadability(text: string): ReadabilityStats {
  const words = extractWords(text);
  const sentences = extractSentences(text);
  const wordCount = words.length;

  const readingSeconds =
    wordCount === 0 ? 0 : Math.max(1, Math.round((wordCount / READING_WPM) * 60));
  const speakingSeconds =
    wordCount === 0 ? 0 : Math.max(1, Math.round((wordCount / SPEAKING_WPM) * 60));

  const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;

  const sentenceLengths = sentences.map(
    (s) => extractWords(s).length || 0,
  );
  const avgSentenceWords =
    sentenceLengths.length === 0
      ? 0
      : sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
  const longestSentenceWords =
    sentenceLengths.length === 0 ? 0 : Math.max(...sentenceLengths);

  let fleschKincaidGrade: number | null = null;
  let gradeLabel: string | null = null;

  if (wordCount >= 10 && sentences.length > 0) {
    const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
    const grade =
      0.39 * (wordCount / sentences.length) +
      11.8 * (syllables / wordCount) -
      15.59;
    fleschKincaidGrade = Math.max(0, Math.round(grade * 10) / 10);
    gradeLabel = formatGradeLabel(fleschKincaidGrade);
  }

  return {
    readingSeconds,
    speakingSeconds,
    uniqueWords,
    avgSentenceWords: Math.round(avgSentenceWords * 10) / 10,
    longestSentenceWords,
    fleschKincaidGrade,
    gradeLabel,
  };
}

export function formatDuration(totalSeconds: number): string {
  if (totalSeconds <= 0) return "0 sec";
  if (totalSeconds < 60) return `${totalSeconds} sec`;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes < 60) {
    return seconds === 0 ? `${minutes} min` : `${minutes} min ${seconds} sec`;
  }
  const hours = Math.floor(minutes / 60);
  const remMin = minutes % 60;
  return remMin === 0 ? `${hours} hr` : `${hours} hr ${remMin} min`;
}
