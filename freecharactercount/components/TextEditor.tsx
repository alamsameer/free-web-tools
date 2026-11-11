"use client";

import { useEffect, useRef } from "react";

type TextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function TextEditor({ value, onChange }: TextEditorProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div className="mx-auto w-full max-w-[760px]">
      <label htmlFor="character-input" className="sr-only">
        Text to count
      </label>
      <textarea
        id="character-input"
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing or paste to begin…"
        spellCheck
        className="min-h-[280px] w-full resize-y rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4 text-base leading-relaxed text-[var(--ink)] shadow-[var(--shadow)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-focus)] sm:min-h-[340px] sm:px-6 sm:py-5 sm:text-lg"
      />
    </div>
  );
}
