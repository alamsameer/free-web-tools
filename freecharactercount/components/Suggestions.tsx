import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import type { Suggestion } from "@/lib/suggestions";

type SuggestionsProps = {
  items: Suggestion[];
  hasText: boolean;
};

export function Suggestions({ items, hasText }: SuggestionsProps) {
  return (
    <section className="mx-auto w-full max-w-[760px]">
      <h2 className="text-center font-display text-2xl text-[var(--ink)]">
        Writing suggestions
      </h2>
      <p className="mt-1 text-center text-sm text-[var(--muted)]">
        Light checks for common writing issues
      </p>

      {!hasText ? (
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Start writing to get suggestions.
        </p>
      ) : items.length === 0 ? (
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--success)]">
          <CheckCircle2 size={16} />
          No issues found
        </p>
      ) : (
        <ul className="mt-6 space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-2.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--ink-soft)]"
            >
              {item.severity === "warn" ? (
                <AlertCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--warn)]"
                />
              ) : (
                <Info
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
              )}
              <span>{item.message}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
