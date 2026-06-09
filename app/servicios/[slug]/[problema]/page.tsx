import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getProblematica } from "../../../lib/servicios";
import ProblemaClient from "./ProblemaClient";
import SchemaJsonLd from "../../../components/SchemaJsonLd";
import schemaFaqs from "../../../lib/schemas/faqs.json";

export function generateStaticParams() {
  const params: { slug: string; problema: string }[] = [];
  areas.forEach((a) => {
    a.problematicas.forEach((p) => {
      params.push({ slug: a.slug, problema: p.id });
    });
  });
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; problema: string }>;
}): Promise<Metadata> {
  const { slug, problema } = await params;
  const found = getProblematica(slug, problema);
  if (!found) return { title: "No encontrado · Delva & Asociados" };
  const pc = found.problema.i18n.es!;
  return {
    title: `${pc.title} — Delva & Asociados`,
    description: pc.hook,
    alternates: { canonical: `/servicios/${slug}/${problema}` },
    // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
    // así que hay que declararlo completo o se pierde og:image al compartir.
    openGraph: {
      title: pc.title,
      description: pc.hook,
      url: `/servicios/${slug}/${problema}`,
      type: "website",
      locale: "es_MX",
      siteName: "Delva & Asociados",
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: pc.title,
      description: pc.hook
    }
  };
}

export default async function ProblemaPage({
  params
}: {
  params: Promise<{ slug: string; problema: string }>;
}) {
  const { slug, problema } = await params;
  const found = getProblematica(slug, problema);
  if (!found) notFound();

  const { area, problema: prob } = found;
  const index = area.problematicas.findIndex((p) => p.id === prob.id);
  const next = area.problematicas[(index + 1) % area.problematicas.length];
  const faqSchema = (schemaFaqs as Record<string, unknown>)[area.slug];

  return (
    <>
      {faqSchema ? <SchemaJsonLd data={faqSchema} id={`schema-faq-${area.slug}`} /> : null}
      <ProblemaClient area={area} problema={prob} next={next} />
    </>
  );
}
