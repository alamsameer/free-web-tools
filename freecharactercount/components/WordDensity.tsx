import type { DensityItem } from "@/lib/density";

type WordDensityProps = {
  items: DensityItem[];
};

export function WordDensity({ items }: WordDensityProps) {
  return (
    <section className="section density">
      <h2 className="section__title">Word density</h2>
      <p className="section__subtitle">
        Most frequent words, excluding common English stopwords
      </p>

      {items.length === 0 ? (
        <p className="section__empty">Type a few words to see density insights.</p>
      ) : (
        <ul className="density__list">
          {items.map((item) => (
            <li key={item.word} className="density__row">
              <span className="density__word">{item.word}</span>
              <div className="density__track">
                <div
                  className="density__fill"
                  style={{ width: `${Math.max(6, item.percent * 2)}%` }}
                />
              </div>
              <span className="density__meta">
                {item.count} · {item.percent.toFixed(1)}%
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
