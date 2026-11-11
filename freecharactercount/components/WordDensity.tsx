import type { DensityItem } from "@/lib/density";

type WordDensityProps = {
  items: DensityItem[];
};

export function WordDensity({ items }: WordDensityProps) {
  return (
    <section className="mx-auto w-full max-w-[760px]">
      <h2 className="text-center font-display text-2xl text-[var(--ink)]">
        Word density
      </h2>
      <p className="mt-1 text-center text-sm text-[var(--muted)]">
        Most frequent words, excluding common English stopwords
      </p>

      {items.length === 0 ? (
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Type a few words to see density insights.
        </p>
      ) : (
        <ul className="mt-6 space-y-2.5">
          {items.map((item) => (
            <li key={item.word} className="flex items-center gap-3">
              <span className="w-28 shrink-0 truncate text-right text-sm font-medium text-[var(--ink)]">
                {item.word}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--track)]">
                <div
                  className="density-bar h-full rounded-full bg-[var(--accent)]"
                  style={{ width: `${Math.max(6, item.percent * 2)}%` }}
                />
              </div>
              <span className="w-16 shrink-0 text-right text-xs tabular-nums text-[var(--muted)]">
                {item.count} · {item.percent.toFixed(1)}%
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
