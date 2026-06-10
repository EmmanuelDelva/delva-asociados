import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Delva & Asociados — Law for everything that happens after the app.",
  description:
    "Boutique law firm for individuals and companies in digital, crypto, AI and virtual worlds. Guadalajara, international.",
  alternates: {
    canonical: "/en",
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
    title: "Delva & Asociados — Law for everything that happens after the app.",
    description:
      "Boutique law firm for individuals and companies in digital, crypto, AI and virtual worlds. Guadalajara, international.",
    url: "/en",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Delva & Asociados — Law for everything that happens after the app.",
    description:
      "Boutique law firm for individuals and companies in digital, crypto, AI and virtual worlds. Guadalajara, international."
  }
};

export default Home;
