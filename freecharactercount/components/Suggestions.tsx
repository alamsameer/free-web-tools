import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import type { Suggestion } from "@/lib/suggestions";

type SuggestionsProps = {
  items: Suggestion[];
  hasText: boolean;
};

export function Suggestions({ items, hasText }: SuggestionsProps) {
  return (
    <section className="section suggestions">
      <h2 className="section__title">Writing suggestions</h2>
      <p className="section__subtitle">Light checks for common writing issues</p>

      {!hasText ? (
        <p className="section__empty">Start writing to get suggestions.</p>
      ) : items.length === 0 ? (
        <p className="suggestions__ok">
          <CheckCircle2 size={16} />
          No issues found
        </p>
      ) : (
        <ul className="suggestions__list">
          {items.map((item) => (
            <li key={item.id} className="suggestions__item">
              {item.severity === "warn" ? (
                <AlertCircle
                  size={16}
                  className="suggestions__icon suggestions__icon--warn"
                />
              ) : (
                <Info
                  size={16}
                  className="suggestions__icon suggestions__icon--info"
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
