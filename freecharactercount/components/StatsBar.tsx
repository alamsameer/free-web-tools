"use client";

import type { TextCounts } from "@/lib/count";
import type { ReadabilityStats } from "@/lib/readability";
import { formatDuration } from "@/lib/readability";

type StatsBarProps = {
  counts: TextCounts;
  readability: ReadabilityStats;
};

type Stat = {
  label: string;
  value: string | number;
};

export function StatsBar({ counts, readability }: StatsBarProps) {
  const primary: Stat[] = [
    { label: "Characters", value: counts.characters },
    { label: "No spaces", value: counts.charactersNoSpaces },
    { label: "Words", value: counts.words },
    { label: "Sentences", value: counts.sentences },
    { label: "Paragraphs", value: counts.paragraphs },
    { label: "Spaces", value: counts.spaces },
  ];

  const secondary: Stat[] = [
    { label: "Reading", value: formatDuration(readability.readingSeconds) },
    { label: "Speaking", value: formatDuration(readability.speakingSeconds) },
    { label: "Unique words", value: readability.uniqueWords },
    {
      label: "Avg. sentence",
      value: readability.avgSentenceWords || "—",
    },
    {
      label: "Longest sentence",
      value: readability.longestSentenceWords || "—",
    },
    {
      label: "Reading level",
      value: readability.gradeLabel ?? "—",
    },
  ];

  return (
    <>
      <div className="mobile-stats">
        <div className="mobile-stats__inner">
          <span className="mobile-stats__label">
            Chars{" "}
            <span className="mobile-stats__value">{counts.characters}</span>
          </span>
          <span className="mobile-stats__divider">|</span>
          <span className="mobile-stats__label">
            Words <span className="mobile-stats__value">{counts.words}</span>
          </span>
        </div>
      </div>

      <section className="stats">
        <div className="stats__grid">
          {primary.map((stat) => (
            <div key={stat.label} className="stats__item">
              <p className="stats__value">{stat.value}</p>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="stats__grid stats__grid--secondary">
          {secondary.map((stat) => (
            <div key={stat.label} className="stats__item">
              <p className="stats__value stats__value--soft">{stat.value}</p>
              <p className="stats__label stats__label--tiny">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
