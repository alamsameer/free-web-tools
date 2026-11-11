"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { BrandHeader } from "@/components/BrandHeader";
import { FocusLimitBanner } from "@/components/FocusLimitBanner";
import { LimitMeters } from "@/components/LimitMeters";
import { StatsBar } from "@/components/StatsBar";
import { Suggestions } from "@/components/Suggestions";
import { TextEditor } from "@/components/TextEditor";
import { TextTools } from "@/components/TextTools";
import { WordDensity } from "@/components/WordDensity";
import { analyzeText } from "@/lib/count";
import { getWordDensity } from "@/lib/density";
import { getLimitStatuses, PLATFORM_LIMITS } from "@/lib/limits";
import { formatDuration, getReadability } from "@/lib/readability";
import { getWritingSuggestions } from "@/lib/suggestions";
import type { ToolPage } from "@/lib/toolPages";

type CharacterCounterProps = {
  title: string;
  subhead?: string;
  lead?: string;
  showBrandLink?: boolean;
  focusLimitId?: string;
  focusMode?: ToolPage["focusMode"];
};

export function CharacterCounter({
  title,
  subhead,
  lead,
  showBrandLink = false,
  focusLimitId,
  focusMode,
}: CharacterCounterProps) {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const counts = useMemo(() => analyzeText(deferredText), [deferredText]);
  const readability = useMemo(
    () => getReadability(deferredText),
    [deferredText],
  );
  const density = useMemo(() => getWordDensity(deferredText), [deferredText]);
  const suggestions = useMemo(
    () => getWritingSuggestions(deferredText),
    [deferredText],
  );
  const limits = useMemo(
    () => getLimitStatuses(counts.characters),
    [counts.characters],
  );

  const focusPlatform = focusLimitId
    ? PLATFORM_LIMITS.find((platform) => platform.id === focusLimitId)
    : undefined;

  const orderedLimits = useMemo(() => {
    if (!focusLimitId) return limits;
    const focused = limits.filter((item) => item.id === focusLimitId);
    const rest = limits.filter((item) => item.id !== focusLimitId);
    return [...focused, ...rest];
  }, [limits, focusLimitId]);

  const emphasizeCase = focusMode === "case";

  return (
    <div className="counter">
      <BrandHeader
        title={title}
        subhead={subhead}
        lead={lead}
        showBrandLink={showBrandLink}
      />
      <TextEditor value={text} onChange={setText} />
      {focusPlatform ? (
        <FocusLimitBanner
          label={focusPlatform.label}
          limit={focusPlatform.limit}
          used={counts.characters}
        />
      ) : null}
      {focusMode === "no-spaces" ? (
        <section className="focus-limit" aria-live="polite">
          <div className="focus-limit__row">
            <p className="focus-limit__label">With spaces</p>
            <p className="focus-limit__count">
              {counts.characters.toLocaleString()}
            </p>
          </div>
          <div className="focus-limit__row">
            <p className="focus-limit__label">Without spaces</p>
            <p className="focus-limit__count focus-limit__count--accent">
              {counts.charactersNoSpaces.toLocaleString()}
            </p>
          </div>
        </section>
      ) : null}
      {focusMode === "words" ? (
        <section className="focus-limit" aria-live="polite">
          <div className="focus-limit__row">
            <p className="focus-limit__label">Words</p>
            <p className="focus-limit__count focus-limit__count--accent">
              {counts.words.toLocaleString()}
            </p>
          </div>
          <div className="focus-limit__row">
            <p className="focus-limit__label">Characters</p>
            <p className="focus-limit__count">
              {counts.characters.toLocaleString()}
            </p>
          </div>
        </section>
      ) : null}
      {focusMode === "sentences" ? (
        <section className="focus-limit" aria-live="polite">
          <div className="focus-limit__row">
            <p className="focus-limit__label">Sentences</p>
            <p className="focus-limit__count focus-limit__count--accent">
              {counts.sentences.toLocaleString()}
            </p>
          </div>
          <div className="focus-limit__row">
            <p className="focus-limit__label">Avg. words / sentence</p>
            <p className="focus-limit__count">
              {readability.avgSentenceWords || "—"}
            </p>
          </div>
        </section>
      ) : null}
      {focusMode === "paragraphs" ? (
        <section className="focus-limit" aria-live="polite">
          <div className="focus-limit__row">
            <p className="focus-limit__label">Paragraphs</p>
            <p className="focus-limit__count focus-limit__count--accent">
              {counts.paragraphs.toLocaleString()}
            </p>
          </div>
          <div className="focus-limit__row">
            <p className="focus-limit__label">Words</p>
            <p className="focus-limit__count">
              {counts.words.toLocaleString()}
            </p>
          </div>
        </section>
      ) : null}
      {focusMode === "reading-time" ? (
        <section className="focus-limit" aria-live="polite">
          <div className="focus-limit__row">
            <p className="focus-limit__label">Reading time</p>
            <p className="focus-limit__count focus-limit__count--accent">
              {formatDuration(readability.readingSeconds)}
            </p>
          </div>
          <div className="focus-limit__row">
            <p className="focus-limit__label">Speaking time</p>
            <p className="focus-limit__count">
              {formatDuration(readability.speakingSeconds)}
            </p>
          </div>
          <div className="focus-limit__row">
            <p className="focus-limit__label">Words</p>
            <p className="focus-limit__count">
              {counts.words.toLocaleString()}
            </p>
          </div>
        </section>
      ) : null}
      {focusMode === "limits-hub" ? (
        <section className="focus-limit" aria-live="polite">
          <div className="focus-limit__row">
            <p className="focus-limit__label">Characters in your draft</p>
            <p className="focus-limit__count focus-limit__count--accent">
              {counts.characters.toLocaleString()}
            </p>
          </div>
          <p className="focus-limit__hint">
            Compare against the cheat sheet meters below, then open a dedicated
            checker for the platform you need.
          </p>
        </section>
      ) : null}
      {emphasizeCase ? (
        <TextTools text={text} onChange={setText} emphasize />
      ) : null}
      <StatsBar counts={counts} readability={readability} />
      {!emphasizeCase ? <TextTools text={text} onChange={setText} /> : null}
      <LimitMeters statuses={orderedLimits} />
      <WordDensity items={density} />
      <Suggestions items={suggestions} hasText={deferredText.trim().length > 0} />
    </div>
  );
}
