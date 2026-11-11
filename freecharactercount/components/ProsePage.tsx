import type { ReactNode } from "react";

type ProsePageProps = {
  title: string;
  children: ReactNode;
};

export function ProsePage({ title, children }: ProsePageProps) {
  return (
    <article className="prose-page">
      <p className="prose-page__brand">
        <a href="/">Free Character Count</a>
      </p>
      <h1 className="prose-page__title">{title}</h1>
      <div className="prose-page__body">{children}</div>
    </article>
  );
}
