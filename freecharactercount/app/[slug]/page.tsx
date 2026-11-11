import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CharacterCounter } from "@/components/CharacterCounter";
import { JsonLd } from "@/components/JsonLd";
import { ToolSeoContent } from "@/components/ToolSeoContent";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getToolPage, TOOL_PAGES } from "@/lib/toolPages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TOOL_PAGES.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolPage(slug);
  if (!tool) return {};

  const url = `${SITE_URL}/${tool.slug}`;

  return {
    title: {
      absolute: tool.title,
    },
    description: tool.metaDescription,
    alternates: {
      canonical: `/${tool.slug}`,
    },
    openGraph: {
      title: tool.title,
      description: tool.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: tool.title,
      description: tool.metaDescription,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolPage(slug);
  if (!tool) notFound();

  const url = `${SITE_URL}/${tool.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.h1,
      url,
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
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tool.h1,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tool.faq.map((item) => ({
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
        title={tool.h1}
        lead={tool.lead}
        showBrandLink
        focusLimitId={tool.focusLimitId}
        focusMode={tool.focusMode}
      />
      <ToolSeoContent tool={tool} />
    </main>
  );
}
