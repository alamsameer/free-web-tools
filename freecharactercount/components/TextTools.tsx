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
    <section className="section tools">
      <h2 className="section__title">Text tools</h2>
      <p className="section__subtitle">Transform, copy, or clear your draft</p>

      <div className="tools__actions">
        {caseActions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.run}
            disabled={!text}
            className="tools__btn"
          >
            {action.label}
          </button>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          disabled={!text}
          className="tools__btn"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={!text}
          className="tools__btn tools__btn--danger"
        >
          <Eraser size={15} />
          Clear
        </button>
      </div>
    </section>
  );
}
