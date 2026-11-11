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
    <div className="editor">
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
        className="editor__input"
      />
    </div>
  );
}
