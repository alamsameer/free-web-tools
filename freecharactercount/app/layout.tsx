import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "@/styles/globals.scss";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Character Counter - Free Online Character & Word Count",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free character counter: count characters, words, sentences and spaces instantly. Check X, Instagram, SMS and SEO limits. No signup, nothing uploaded.",
  openGraph: {
    title: "Free Character Count",
    description:
      "Count characters, words, sentences, and more — instantly in your browser.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary",
    title: "Free Character Count",
    description:
      "Count characters, words, sentences, and more — instantly in your browser.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable}`}
    >
      <body>
        <div className="app-shell">
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
