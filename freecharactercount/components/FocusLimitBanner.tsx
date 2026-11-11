"use client";

type FocusLimitBannerProps = {
  label: string;
  limit: number;
  used: number;
};

export function FocusLimitBanner({ label, limit, used }: FocusLimitBannerProps) {
  const remaining = limit - used;
  const over = remaining < 0;
  const percent = Math.min(100, (used / limit) * 100);

  return (
    <section className="focus-limit" aria-live="polite">
      <div className="focus-limit__row">
        <p className="focus-limit__label">{label}</p>
        <p className={`focus-limit__count${over ? " focus-limit__count--over" : ""}`}>
          {used.toLocaleString()} / {limit.toLocaleString()}
        </p>
      </div>
      <div className="focus-limit__track">
        <div
          className={`focus-limit__fill${over ? " focus-limit__fill--over" : ""}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="focus-limit__hint">
        {over
          ? `${Math.abs(remaining).toLocaleString()} over limit`
          : `${remaining.toLocaleString()} remaining`}
      </p>
    </section>
  );
}
