import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getArea } from "../../lib/servicios";
import AreaClient from "./AreaClient";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return { title: "No encontrado · Delva & Asociados" };
  return {
    title: `${a.i18n.es!.title} — Delva & Asociados`,
    description: a.i18n.es!.short,
    openGraph: {
      title: a.i18n.es!.title,
      description: a.i18n.es!.short
    }
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const index = areas.findIndex((a) => a.slug === slug);
  const next = areas[(index + 1) % areas.length];
  return <AreaClient area={area} next={next} />;
}
