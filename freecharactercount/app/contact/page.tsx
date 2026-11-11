import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Free Character Count for feedback, corrections to platform limits, or privacy questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="page">
      <ProsePage title="Contact">
        <p>
          Feedback on the character counter, limit accuracy, or privacy wording is
          welcome. For the fastest path, email{" "}
          <a href="mailto:hello@freecharactercount.online">
            hello@freecharactercount.online
          </a>
          .
        </p>
        <p>
          If a platform changes its character limit, include the page URL and a
          source when you write in—we re-verify limits on a regular cadence.
        </p>
      </ProsePage>
    </main>
  );
}
