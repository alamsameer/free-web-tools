"use client";

import { Check, Copy, Eraser } from "lucide-react";
import { useState } from "react";
import {
  toLowerCase,
  toSentenceCase,
  toTitleCase,
  toUpperCase,
} from "@/lib/caseTools";

type TextToolsProps = {
  text: string;
  onChange: (value: string) => void;
};

export function TextTools({ text, onChange }: TextToolsProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore clipboard failures
    }
  }

  function handleClear() {
    if (!text) return;
    if (window.confirm("Delete all text? This cannot be undone.")) {
      onChange("");
    }
  }

  const caseActions = [
    { label: "UPPERCASE", run: () => onChange(toUpperCase(text)) },
    { label: "lowercase", run: () => onChange(toLowerCase(text)) },
    { label: "Title Case", run: () => onChange(toTitleCase(text)) },
    { label: "Sentence case", run: () => onChange(toSentenceCase(text)) },
  ];

  return (
    <section className="mx-auto w-full max-w-[760px]">
      <h2 className="text-center font-display text-2xl text-[var(--ink)]">
        Text tools
      </h2>
      <p className="mt-1 text-center text-sm text-[var(--muted)]">
        Transform, copy, or clear your draft
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {caseActions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.run}
            disabled={!text}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {action.label}
          </button>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          disabled={!text}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={!text}
          className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--danger)] hover:text-[var(--danger)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Eraser size={15} />
          Clear
        </button>
      </div>
    </section>
  );
}
