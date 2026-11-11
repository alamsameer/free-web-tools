import { RelatedTools } from "@/components/RelatedTools";
import { PLATFORM_LIMITS } from "@/lib/limits";
import { LIMITS_VERIFIED_ON } from "@/lib/site";
import { LIMIT_PAGE_BY_PLATFORM_ID, type ToolPage } from "@/lib/toolPages";

type ToolSeoContentProps = {
  tool: ToolPage;
};

export function ToolSeoContent({ tool }: ToolSeoContentProps) {
  return (
    <div className="seo-content">
      <section className="seo-block">
        <h2 className="seo-block__title">About this {tool.primaryKeyword}</h2>
        <p className="seo-block__text">{tool.intro}</p>
        {tool.limitValue ? (
          <p className="seo-block__meta">
            {tool.limitLabel}: {tool.limitValue.toLocaleString()} characters. Limit
            verified on {LIMITS_VERIFIED_ON}.
          </p>
        ) : (
          <p className="seo-block__meta">
            Counts update live in your browser. Guidance verified on {LIMITS_VERIFIED_ON}.
          </p>
        )}
      </section>

      {tool.showLimitsTable ? (
        <section className="seo-block">
          <h2 className="seo-block__title">Current limits cheat sheet</h2>
          <p className="seo-block__text">
            Verified on {LIMITS_VERIFIED_ON}. Open a checker to draft against that
            cap with a live progress bar.
          </p>
          <div className="limits-table-wrap">
            <table className="limits-table">
              <thead>
                <tr>
                  <th scope="col">Platform</th>
                  <th scope="col">Limit</th>
                  <th scope="col">Checker</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORM_LIMITS.map((row) => {
                  const slug = LIMIT_PAGE_BY_PLATFORM_ID[row.id];
                  return (
                    <tr key={row.id}>
                      <td>{row.label}</td>
                      <td>{row.limit.toLocaleString()}</td>
                      <td>
                        {slug ? (
                          <a href={`/${slug}`}>Open checker</a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="seo-block">
        <h2 className="seo-block__title">Practical tips</h2>
        <ul className="seo-list">
          {tool.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="seo-block">
        <h2 className="seo-block__title">Examples</h2>
        <ul className="seo-list">
          {tool.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </section>

      <section className="seo-block">
        <h2 className="seo-block__title">FAQ</h2>
        <dl className="seo-faq">
          {tool.faq.map((item) => (
            <div key={item.question} className="seo-faq__item">
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <RelatedTools slugs={tool.relatedSlugs} title="Related tools" />
    </div>
  );
}
