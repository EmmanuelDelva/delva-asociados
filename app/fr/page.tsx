import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Delva & Asociados — Du droit pour tout ce qui arrive après l'app.",
  description:
    "Cabinet juridique boutique pour particuliers et entreprises dans le numérique, la crypto, l'IA et les mondes virtuels. Guadalajara, international.",
  alternates: {
    canonical: "/fr",
    languages: {
      es: "/",
      en: "/en",
      fr: "/fr",
      "x-default": "/"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Delva & Asociados — Du droit pour tout ce qui arrive après l'app.",
    description:
      "Cabinet juridique boutique pour particuliers et entreprises dans le numérique, la crypto, l'IA et les mondes virtuels. Guadalajara, international.",
    url: "/fr",
    type: "website",
    locale: "fr_FR",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Delva & Asociados — Du droit pour tout ce qui arrive après l'app.",
    description:
      "Cabinet juridique boutique pour particuliers et entreprises dans le numérique, la crypto, l'IA et les mondes virtuels. Guadalajara, international."
  }
};

export default Home;
