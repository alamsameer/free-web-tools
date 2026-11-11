import type { Metadata } from "next";
import { CharacterCounter } from "@/components/CharacterCounter";
import { HomeSeoContent, homeFaqs } from "@/components/HomeSeoContent";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Character Counter - Free Online Character & Word Count",
  },
  description:
    "Free character counter: count characters, words, sentences and spaces instantly. Check X, Instagram, SMS and SEO limits. No signup, nothing uploaded.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Character Counter - Free Online Character & Word Count",
    description:
      "Free character counter: count characters, words, sentences and spaces instantly. Check social and SEO limits in your browser.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Character Counter - Free Online Character & Word Count",
    description:
      "Free character counter: count characters, words, sentences and spaces instantly. No signup, nothing uploaded.",
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Free Character Counter",
      url: SITE_URL,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="page">
      <JsonLd data={jsonLd} />
      <CharacterCounter
        title="Free Character Counter"
        subhead="Count characters, words, and more — instantly"
        lead="Paste or type below. Live stats, density, writing tips, and social limits update as you go."
      />
      <HomeSeoContent />
    </main>
  );
}
