import { RelatedTools } from "@/components/RelatedTools";
import { PLATFORM_LIMITS } from "@/lib/limits";
import { LIMITS_VERIFIED_ON } from "@/lib/site";
import { LIMIT_PAGE_BY_PLATFORM_ID } from "@/lib/toolPages";

const faqs = [
  {
    question: "Do spaces count as characters?",
    answer:
      "Yes. The total character count includes spaces. Use the “No spaces” stat when you need a count without whitespace.",
  },
  {
    question: "How many characters is a tweet on X?",
    answer:
      "Most X posts allow up to 280 characters. Check the Twitter character counter page for a dedicated limit meter.",
  },
  {
    question: "Does this character counter count emojis?",
    answer:
      "Emojis are included in the character total based on JavaScript string length. Complex emoji sequences can vary by platform.",
  },
  {
    question: "What is the difference between characters and bytes?",
    answer:
      "This tool counts characters in the text field, not UTF-8 bytes. Some SMS encodings care about bytes or Unicode segments instead.",
  },
  {
    question: "Is my text uploaded or stored?",
    answer:
      "No. Free Character Count runs entirely in your browser. Nothing you type is sent to a server.",
  },
  {
    question: "Can I check Instagram and SEO limits here?",
    answer:
      "Yes. The homepage shows common social and SEO caps, and dedicated pages go deeper on each limit.",
  },
];

export function HomeSeoContent() {
  const limitRows = PLATFORM_LIMITS.filter((item) =>
    ["x", "ig-bio", "ig-caption", "linkedin", "sms", "seo-title", "meta-desc"].includes(
      item.id,
    ),
  );

  return (
    <div className="seo-content">
      <section className="seo-block">
        <h2 className="seo-block__title">What this free character count tool counts</h2>
        <p className="seo-block__text">
          This online character counter tracks characters, characters without spaces,
          words, sentences, paragraphs, spaces, reading time, and speaking time as you
          type. Word density, readability hints, and writing suggestions update live so
          you can tighten a draft without leaving the page.
        </p>
      </section>

      <section className="seo-block">
        <h2 className="seo-block__title">Common character limits</h2>
        <p className="seo-block__text">
          Quick reference for social, messaging, and SEO caps. Limit verified on{" "}
          {LIMITS_VERIFIED_ON}.
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
              {limitRows.map((row) => {
                const slug = LIMIT_PAGE_BY_PLATFORM_ID[row.id];
                return (
                  <tr key={row.id}>
                    <td>{row.label}</td>
                    <td>{row.limit.toLocaleString()}</td>
                    <td>{slug ? <a href={`/${slug}`}>Open</a> : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="seo-block__meta">
          Full cheat sheet: <a href="/character-limits">social media character limits</a>.
        </p>
      </section>

      <section className="seo-block">
        <h2 className="seo-block__title">How to use this character counter</h2>
        <ol className="seo-steps">
          <li>Paste or type your text in the box above.</li>
          <li>Read live character and word counts, plus platform limit meters.</li>
          <li>Trim until you are under the cap you care about—no signup required.</li>
        </ol>
      </section>

      <section className="seo-block">
        <h2 className="seo-block__title">Why it stays private</h2>
        <p className="seo-block__text">
          Counting happens on your device. Free Character Count does not upload your
          draft, create an account wall, or store what you paste. Close the tab and the
          text is gone from this tool.
        </p>
      </section>

      <section className="seo-block">
        <h2 className="seo-block__title">Character counter FAQ</h2>
        <dl className="seo-faq">
          {faqs.map((item) => (
            <div key={item.question} className="seo-faq__item">
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <RelatedTools title="More character and limit tools" />
    </div>
  );
}

export const homeFaqs = faqs;
