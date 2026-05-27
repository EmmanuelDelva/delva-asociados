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
  }
};

export default Home;
