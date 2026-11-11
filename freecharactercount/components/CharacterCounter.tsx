"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { BrandHeader } from "@/components/BrandHeader";
import { LimitMeters } from "@/components/LimitMeters";
import { StatsBar } from "@/components/StatsBar";
import { Suggestions } from "@/components/Suggestions";
import { TextEditor } from "@/components/TextEditor";
import { TextTools } from "@/components/TextTools";
import { WordDensity } from "@/components/WordDensity";
import { analyzeText } from "@/lib/count";
import { getWordDensity } from "@/lib/density";
import { getLimitStatuses } from "@/lib/limits";
import { getReadability } from "@/lib/readability";
import { getWritingSuggestions } from "@/lib/suggestions";

export function CharacterCounter() {
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

  return (
    <div className="counter">
      <BrandHeader />
      <TextEditor value={text} onChange={setText} />
      <StatsBar counts={counts} readability={readability} />
      <TextTools text={text} onChange={setText} />
      <LimitMeters statuses={limits} />
      <WordDensity items={density} />
      <Suggestions items={suggestions} hasText={deferredText.trim().length > 0} />

      <section className="howto">
        <h2 className="howto__title">How it works</h2>
        <p className="howto__text">
          Everything runs in your browser. Type or paste into the box above and
          Free Character Count updates characters, words, density, readability,
          and platform limits instantly — no signup, no upload.
        </p>
      </section>
    </div>
  );
}
