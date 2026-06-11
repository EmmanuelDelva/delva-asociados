import type { Metadata } from "next";
import PrivacidadPage from "../../privacidad/page";

export const metadata: Metadata = {
  title: "Privacy Notice — Delva & Asociados",
  description:
    "Integral Privacy Notice under the new Mexican LFPDPPP (DOF 20-Mar-2025) and GDPR. Digital legal firm Delva & Asociados.",
  alternates: {
    canonical: "/en/privacidad",
    languages: {
      es: "/privacidad",
      en: "/en/privacidad",
      fr: "/fr/privacidad",
      "x-default": "/privacidad"
    }
  },
  // openGraph parcial REEMPLAZA el del root (merge superficial de Next),
  // así que hay que declararlo completo o se hereda og:locale es_MX.
  openGraph: {
    title: "Privacy Notice — Delva & Asociados",
    description:
      "Integral Privacy Notice under the new Mexican LFPDPPP (DOF 20-Mar-2025) and GDPR. Digital legal firm Delva & Asociados.",
    url: "/en/privacidad",
    type: "website",
    locale: "en_US",
    siteName: "Delva & Asociados",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Notice — Delva & Asociados",
    description:
      "Integral Privacy Notice under the new Mexican LFPDPPP (DOF 20-Mar-2025) and GDPR. Digital legal firm Delva & Asociados."
  }
};

export default PrivacidadPage;
