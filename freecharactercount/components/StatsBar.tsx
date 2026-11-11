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
      <div className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--bg-glass)] backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-[760px] items-center justify-center gap-4 px-4 py-2.5 text-sm">
          <span className="font-medium text-[var(--ink)]">
            Chars{" "}
            <span className="tabular-nums text-[var(--accent)] transition-all duration-200">
              {counts.characters}
            </span>
          </span>
          <span className="text-[var(--line-strong)]">|</span>
          <span className="font-medium text-[var(--ink)]">
            Words{" "}
            <span className="tabular-nums text-[var(--accent)] transition-all duration-200">
              {counts.words}
            </span>
          </span>
        </div>
      </div>

      <section className="mx-auto w-full max-w-[760px]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {primary.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="stat-value text-2xl font-semibold tabular-nums tracking-tight text-[var(--ink)] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-3 md:grid-cols-6">
          {secondary.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-sm font-semibold tabular-nums text-[var(--ink-soft)] sm:text-base">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
