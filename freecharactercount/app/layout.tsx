import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

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
  title: "Free Character Count — online character & word counter",
  description:
    "Free online character and word counter with live stats, word density, readability, writing suggestions, and social/SEO character limits.",
  openGraph: {
    title: "Free Character Count",
    description:
      "Count characters, words, sentences, and more — instantly in your browser.",
    type: "website",
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
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
