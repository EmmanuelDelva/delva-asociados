import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"]
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "oklch(0.158 0.018 155)"
};

export const metadata: Metadata = {
  title: "Delva & Asociados — Despacho jurídico para la economía digital",
  description:
    "Boutique jurídica para fundadores Web3, creadores digitales, FinTech y todo proyecto cuyo riesgo legal se mide en líneas de código. Guadalajara, internacional.",
  keywords: [
    "despacho jurídico",
    "abogado web3",
    "derecho blockchain",
    "abogado cripto México",
    "derecho digital",
    "FinTech legal",
    "IA derecho",
    "creadores digitales legal",
    "Delva Asociados"
  ],
  authors: [{ name: "Juan Emmanuel Delva Benavides" }],
  creator: "Delva & Asociados",
  metadataBase: new URL("https://delvayasociados.com"),
  openGraph: {
    title: "Delva & Asociados — Derecho para todo lo que aún no se nombra",
    description:
      "Despacho boutique para Web3, IA, FinTech, gaming, metaverso y economía de creadores.",
    type: "website",
    locale: "es_MX",
    siteName: "Delva & Asociados"
  },
  twitter: {
    card: "summary_large_image",
    title: "Delva & Asociados",
    description: "Derecho diseñado para la próxima década."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-MX"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased no-cursor">
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
