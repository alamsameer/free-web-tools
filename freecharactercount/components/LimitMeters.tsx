import type { LimitStatus } from "@/lib/limits";

type LimitMetersProps = {
  statuses: LimitStatus[];
};

export function LimitMeters({ statuses }: LimitMetersProps) {
  return (
    <section className="section limits">
      <h2 className="section__title">Social &amp; SEO limits</h2>
      <p className="section__subtitle">
        See how your character count fits common platform caps
      </p>

      <ul className="limits__list">
        {statuses.map((status) => {
          const over = status.over;
          return (
            <li key={status.id} className="limits__card">
              <div className="limits__row">
                <span className="limits__name">{status.label}</span>
                <span
                  className={`limits__count${over ? " limits__count--over" : ""}`}
                >
                  {status.used.toLocaleString()} / {status.limit.toLocaleString()}
                </span>
              </div>
              <div className="limits__track">
                <div
                  className={`limits__fill${over ? " limits__fill--over" : ""}`}
                  style={{ width: `${Math.min(100, status.percent)}%` }}
                />
              </div>
              <p className="limits__hint">
                {over
                  ? `${Math.abs(status.remaining).toLocaleString()} over limit`
                  : `${status.remaining.toLocaleString()} remaining`}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
