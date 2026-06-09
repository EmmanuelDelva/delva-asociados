import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getArea } from "../../lib/servicios";
import AreaClient from "./AreaClient";
import SchemaJsonLd from "../../components/SchemaJsonLd";
import schemaServicios from "../../lib/schemas/servicios.json";

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
    alternates: { canonical: `/servicios/${a.slug}` },
    // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
    // así que hay que declararlo completo o se pierde og:image al compartir.
    openGraph: {
      title: a.i18n.es!.title,
      description: a.i18n.es!.short,
      url: `/servicios/${a.slug}`,
      type: "website",
      locale: "es_MX",
      siteName: "Delva & Asociados",
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
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
  const servicioSchema = (schemaServicios as Record<string, unknown>)[area.slug];
  return (
    <>
      {servicioSchema ? <SchemaJsonLd data={servicioSchema} id={`schema-servicio-${area.slug}`} /> : null}
      <AreaClient area={area} next={next} />
    </>
  );
}
