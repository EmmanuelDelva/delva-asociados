import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import CookieBanner from "./components/CookieBanner";
import CloudflareAnalytics from "./components/CloudflareAnalytics";
import { I18nProvider } from "./i18n/I18nProvider";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "oklch(0.14 0.018 155)"
};

export const metadata: Metadata = {
  title: "Delva & Asociados — Derecho para todo lo que pasa después de la app.",
  description:
    "Despacho jurídico boutique para usuarios y empresas en lo digital, lo cripto, la inteligencia artificial y los mundos virtuales. Guadalajara, internacional.",
  keywords: [
    "despacho jurídico",
    "abogado web3",
    "derecho blockchain",
    "derecho digital México",
    "FinTech legal",
    "IA derecho",
    "creadores digitales legal",
    "Delva Asociados"
  ],
  authors: [{ name: "Juan Emmanuel Delva Benavides" }],
  creator: "Delva & Asociados",
  metadataBase: new URL("https://delvayasociados.com"),
  openGraph: {
    title: "Delva & Asociados",
    description: "Derecho para todo lo que pasa después de la app.",
    type: "website",
    locale: "es_MX",
    siteName: "Delva & Asociados"
  },
  twitter: {
    card: "summary_large_image",
    title: "Delva & Asociados",
    description: "Derecho para todo lo que pasa después de la app."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased no-cursor">
        <I18nProvider>
          <SmoothScroll />
          <Cursor />
          {children}
          <CloudflareAnalytics />
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
