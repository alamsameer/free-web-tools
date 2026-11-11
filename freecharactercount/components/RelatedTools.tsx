import { getRelatedTools, TOOL_PAGES, type ToolPage } from "@/lib/toolPages";

type RelatedToolsProps = {
  slugs?: string[];
  excludeSlug?: string;
  title?: string;
};

export function RelatedTools({
  slugs,
  excludeSlug,
  title = "Related tools",
}: RelatedToolsProps) {
  const tools: ToolPage[] = slugs
    ? getRelatedTools(slugs)
    : TOOL_PAGES.filter((tool) => tool.slug !== excludeSlug);

  if (tools.length === 0) return null;

  return (
    <section className="seo-block">
      <h2 className="seo-block__title">{title}</h2>
      <ul className="related-tools">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <a href={`/${tool.slug}`}>{tool.navLabel}</a>
            <span className="related-tools__keyword">{tool.primaryKeyword}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
