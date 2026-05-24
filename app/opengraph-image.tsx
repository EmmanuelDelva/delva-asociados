import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Delva & Asociados — Despacho jurídico para la economía digital";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#171f1c",
          color: "#f5f2eb",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -60,
            fontSize: 720,
            fontStyle: "italic",
            opacity: 0.18,
            lineHeight: 1
          }}
        >
          &
        </div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.7,
            display: "flex"
          }}
        >
          § 00 / Delva &amp; Asociados — MMXXV
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 24
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: -2,
              fontWeight: 400,
              maxWidth: 980,
              display: "flex"
            }}
          >
            Asesoramos lo que el derecho aún no nombra.
          </div>
          <div
            style={{
              fontSize: 22,
              opacity: 0.7,
              maxWidth: 760,
              display: "flex"
            }}
          >
            Despacho boutique para Web3, IA, FinTech, gaming y economía de
            creadores. Guadalajara · Internacional.
          </div>
        </div>
      </div>
    ),
    size
  );
}
