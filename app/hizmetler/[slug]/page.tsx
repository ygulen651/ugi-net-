import type { Metadata } from "next";
import { notFound } from "next/navigation";
import UgiHome from "../../ugi-home";
import { serviceCatalog } from "../../service-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCatalog.find(item => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title[0]} | Ugi Ajans`,
    description: service.intro[0],
    openGraph: { title: `${service.title[0]} | Ugi Ajans`, description: service.intro[0] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!serviceCatalog.some(item => item.slug === slug)) notFound();
  return <UgiHome key={slug} serviceSlug={slug} />;
}
