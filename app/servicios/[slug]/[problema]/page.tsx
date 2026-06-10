import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas, getProblematica } from "../../../lib/servicios";
import ProblemaClient from "./ProblemaClient";
import SchemaJsonLd from "../../../components/SchemaJsonLd";
import { problemaDescription, withBrandSuffix } from "../../../lib/seo";

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
  const description = problemaDescription(pc);
  return {
    // Sin sufijo de marca cuando el title base ya es largo (>55 chars):
    // con sufijo, 57/65 de estas páginas excedían los ~60 chars visibles.
    title: withBrandSuffix(pc.title),
    description,
    alternates: { canonical: `/servicios/${slug}/${problema}` },
    // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
    // así que hay que declararlo completo o se pierde og:image al compartir.
    openGraph: {
      title: pc.title,
      description,
      url: `/servicios/${slug}/${problema}`,
      type: "website",
      locale: "es_MX",
      siteName: "Delva & Asociados",
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: pc.title,
      description
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
  // El FAQPage del área se emite en /servicios/[slug] (donde sus preguntas
  // son visibles); aquí solo va el breadcrumb propio de esta URL.
  const baseUrl = "https://delvayasociados.com";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: area.i18n.es!.title,
        item: `${baseUrl}/servicios/${area.slug}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: prob.i18n.es!.title,
        item: `${baseUrl}/servicios/${area.slug}/${prob.id}`
      }
    ]
  };

  return (
    <>
      <SchemaJsonLd data={breadcrumbSchema} id={`schema-breadcrumb-${prob.id}`} />
      <ProblemaClient area={area} problema={prob} next={next} />
    </>
  );
}
