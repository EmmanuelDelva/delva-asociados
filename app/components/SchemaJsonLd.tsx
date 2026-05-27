// Renderiza un bloque JSON-LD estructurado para SEO + rich snippets de Google.
// Usa dangerouslySetInnerHTML porque Next.js no permite contenido JSON-LD por otra vía
// y el contenido es generado por nosotros (no por usuarios) — no hay XSS risk.

type Props = {
  data: unknown;
  id?: string;
};

export default function SchemaJsonLd({ data, id }: Props) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
