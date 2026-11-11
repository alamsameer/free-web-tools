import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Free Character Count. Text you type stays in your browser and is not uploaded for counting.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <ProsePage title="Privacy Policy">
        <p>
          Free Character Count is designed so your text never needs to leave your
          browser for the core counting features. When you type or paste into the
          editor, analysis runs locally on your device.
        </p>
        <h2>What we do not collect from the editor</h2>
        <p>
          We do not upload, store, or sell the content you enter into the character
          counter. Closing or refreshing the page clears that draft from the tool.
        </p>
        <h2>Analytics</h2>
        <p>
          The site may use privacy-oriented hosting analytics (such as Vercel
          Analytics) to understand aggregate traffic. Those systems are not used to
          read the text inside the counter.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent via the{" "}
          <a href="/contact">contact page</a>.
        </p>
      </ProsePage>
    </main>
  );
}
