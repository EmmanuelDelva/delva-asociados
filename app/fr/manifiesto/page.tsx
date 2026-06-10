import type { Metadata } from "next";
import ManifiestoPage from "../../manifiesto/page";

export const metadata: Metadata = {
  title: "Manifeste — Delva & Asociados",
  description:
    "Le droit arrive en retard sur presque tout ce qui est nouveau. C'est pourquoi nous avons bâti ce cabinet.",
  alternates: {
    canonical: "/fr/manifiesto",
    languages: {
      es: "/manifiesto",
      en: "/en/manifiesto",
      fr: "/fr/manifiesto",
      "x-default": "/manifiesto"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Manifeste — Delva & Asociados",
    description:
      "Le droit arrive en retard sur presque tout ce qui est nouveau. C'est pourquoi nous avons bâti ce cabinet.",
    url: "/fr/manifiesto",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifeste — Delva & Asociados",
    description:
      "Le droit arrive en retard sur presque tout ce qui est nouveau. C'est pourquoi nous avons bâti ce cabinet."
  }
};

export default ManifiestoPage;
