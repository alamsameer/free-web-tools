import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for Free Character Count, a free browser-based character and word counting tool.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page">
      <ProsePage title="Terms of Use">
        <p>
          Free Character Count is provided free of charge, as-is, for personal and
          professional drafting help. By using the site you agree to use it lawfully
          and not to attempt to disrupt the service.
        </p>
        <h2>No warranty</h2>
        <p>
          Platform character limits change. We mark verification dates on limit pages,
          but you should confirm critical caps in the destination product before
          publishing. The tool may contain errors; double-check important counts.
        </p>
        <h2>Your content</h2>
        <p>
          You remain responsible for text you paste into the tool. Do not submit
          content you are not allowed to process on your own device.
        </p>
        <h2>Changes</h2>
        <p>
          These terms may be updated as the site grows. Continued use after changes
          means you accept the revised terms.
        </p>
      </ProsePage>
    </main>
  );
}
