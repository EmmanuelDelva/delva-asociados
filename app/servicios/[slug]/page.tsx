import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicios, getServicio } from "../../lib/servicios";
import ServicioClient from "./ServicioClient";

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) return { title: "No encontrado · Delva & Asociados" };
  return {
    title: `${s.i18n.es.title} — Delva & Asociados`,
    description: s.i18n.es.oneliner,
    openGraph: {
      title: s.i18n.es.title,
      description: s.i18n.es.oneliner
    }
  };
}

export default async function ServicioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();

  const index = servicios.findIndex((s) => s.slug === slug);
  const next = servicios[(index + 1) % servicios.length];

  return <ServicioClient servicio={servicio} next={next} />;
}
