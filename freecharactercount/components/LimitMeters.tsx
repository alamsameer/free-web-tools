import type { LimitStatus } from "@/lib/limits";

type LimitMetersProps = {
  statuses: LimitStatus[];
};

export function LimitMeters({ statuses }: LimitMetersProps) {
  return (
    <section className="mx-auto w-full max-w-[760px]">
      <h2 className="text-center font-display text-2xl text-[var(--ink)]">
        Social &amp; SEO limits
      </h2>
      <p className="mt-1 text-center text-sm text-[var(--muted)]">
        See how your character count fits common platform caps
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {statuses.map((status) => {
          const over = status.over;
          return (
            <li
              key={status.id}
              className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-[var(--ink)]">
                  {status.label}
                </span>
                <span
                  className={`text-xs tabular-nums ${
                    over ? "text-[var(--danger)]" : "text-[var(--muted)]"
                  }`}
                >
                  {status.used.toLocaleString()} / {status.limit.toLocaleString()}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--track)]">
                <div
                  className={`limit-bar h-full rounded-full transition-[width] duration-300 ease-out ${
                    over ? "bg-[var(--danger)]" : "bg-[var(--accent)]"
                  }`}
                  style={{ width: `${Math.min(100, status.percent)}%` }}
                />
              </div>
              <p className="mt-1.5 text-[11px] text-[var(--muted)]">
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
