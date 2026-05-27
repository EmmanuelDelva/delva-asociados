"use client";

import Script from "next/script";

const TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export default function CloudflareAnalytics() {
  if (!TOKEN) return null;
  return (
    <Script
      strategy="afterInteractive"
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={`{"token": "${TOKEN}"}`}
    />
  );
}
