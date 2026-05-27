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
  }
};

export default PrivacidadPage;
