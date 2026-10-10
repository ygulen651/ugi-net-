import type { Metadata } from "next";
import { notFound } from "next/navigation";
import UgiHome from "../../ugi-home";
import { journalEntries } from "../../agency-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalEntries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = journalEntries.find(entry => entry.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title[0]} | Ugi Journal`,
    description: article.paragraphs[0][0],
    openGraph: { title: article.title[0], description: article.paragraphs[0][0], type: "article" },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  if (!journalEntries.some(entry => entry.slug === slug)) notFound();
  return <UgiHome key={slug} page="blog" articleSlug={slug} />;
}
