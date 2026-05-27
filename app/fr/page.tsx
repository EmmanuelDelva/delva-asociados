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
  }
};

export default Home;
