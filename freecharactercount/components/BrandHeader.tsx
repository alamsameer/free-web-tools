export function BrandHeader() {
  return (
    <header className="mx-auto w-full max-w-[760px] text-center">
      <p className="font-display text-4xl tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
        Free Character Count
      </p>
      <h1 className="mt-4 text-lg font-medium text-[var(--ink-soft)] sm:text-xl">
        Count characters, words, and more — instantly
      </h1>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">
        Paste or type below. Live stats, density, writing tips, and social limits
        update as you go.
      </p>
    </header>
  );
}
