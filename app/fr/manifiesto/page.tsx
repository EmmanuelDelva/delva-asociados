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
  }
};

export default ManifiestoPage;
