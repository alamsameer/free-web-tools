import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Free Character Count — a private, browser-based character and word counter with social and SEO limit checks.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="page">
      <ProsePage title="About Free Character Count">
        <p>
          Free Character Count is a free online character counter for writers,
          marketers, and anyone who needs a quick word and character check. Paste
          text, watch live stats, and compare common social and SEO limits without
          creating an account.
        </p>
        <p>
          The tool is built to feel instant: counting, density, and readability
          hints run in your browser. We focus on clear English limit pages first—
          Twitter/X, Instagram, LinkedIn, SMS, and SEO title or meta description
          length—so you can open the page that matches the job.
        </p>
        <p>
          Privacy is part of the product. Your draft is not uploaded to our servers
          for counting. Use the counter, copy what you need, and move on.
        </p>
      </ProsePage>
    </main>
  );
}
