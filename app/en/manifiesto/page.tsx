import type { Metadata } from "next";
import ManifiestoPage from "../../manifiesto/page";

export const metadata: Metadata = {
  title: "Manifesto — Delva & Asociados",
  description:
    "Law arrives late to almost everything new. When it arrives, it does so poorly. That's why we built this firm.",
  alternates: {
    canonical: "/en/manifiesto",
    languages: {
      es: "/manifiesto",
      en: "/en/manifiesto",
      fr: "/fr/manifiesto",
      "x-default": "/manifiesto"
    }
  }
};

export default ManifiestoPage;
