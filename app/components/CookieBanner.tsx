"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  functionality: boolean;
};

type ConsentRecord = {
  version: "1.0";
  timestamp: string;
  preferences: ConsentPreferences;
};

const STORAGE_KEY = "delva_cookie_consent";
const CONSENT_VERSION = "1.0";
const CONSENT_TTL_DAYS = 365;

function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    const ageDays =
      (Date.now() - new Date(parsed.timestamp).getTime()) /
      (1000 * 60 * 60 * 24);
    if (ageDays > CONSENT_TTL_DAYS || parsed.version !== CONSENT_VERSION) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(preferences: ConsentPreferences): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    preferences,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent("delva:consent-updated", { detail: record })
  );
  return record;
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    functionality: false,
  });

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setOpen(true);
    } else {
      setPrefs(existing.preferences);
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-cookie-manager]")) {
        e.preventDefault();
        const existing = readConsent();
        if (existing) setPrefs(existing.preferences);
        setShowCustom(true);
        setOpen(true);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const acceptAll = useCallback(() => {
    const all: ConsentPreferences = {
      necessary: true,
      analytics: true,
      functionality: true,
    };
    writeConsent(all);
    setPrefs(all);
    setOpen(false);
    setShowCustom(false);
  }, []);

  const rejectAll = useCallback(() => {
    const minimal: ConsentPreferences = {
      necessary: true,
      analytics: false,
      functionality: false,
    };
    writeConsent(minimal);
    setPrefs(minimal);
    setOpen(false);
    setShowCustom(false);
  }, []);

  const saveCustom = useCallback(() => {
    writeConsent(prefs);
    setOpen(false);
    setShowCustom(false);
  }, [prefs]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="cookie-banner-root"
    >
      <style>{`
        .cookie-banner-root {
          position: fixed;
          inset: auto 0 0 0;
          z-index: 9999;
          padding: 1.25rem;
          background: #0E1B2C;
          color: #FAEFE5;
          border-top: 2px solid #B8651D;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
            Roboto, sans-serif;
          box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.35);
        }
        .cookie-banner-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 900px) {
          .cookie-banner-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .cookie-banner-title {
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B8651D;
          margin: 0 0 0.5rem 0;
        }
        .cookie-banner-desc {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.5;
          max-width: 60ch;
        }
        .cookie-banner-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .cookie-banner-btn {
          padding: 0.6rem 1.1rem;
          border-radius: 2px;
          border: 1px solid #B8651D;
          background: transparent;
          color: #FAEFE5;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .cookie-banner-btn:hover {
          background: #B8651D;
          color: #0E1B2C;
        }
        .cookie-banner-btn.primary {
          background: #B8651D;
          color: #0E1B2C;
        }
        .cookie-banner-btn.primary:hover {
          background: #FAEFE5;
        }
        .cookie-banner-link {
          color: #B8651D;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .cookie-banner-custom {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(250, 239, 229, 0.18);
          display: grid;
          gap: 0.75rem;
        }
        .cookie-banner-option {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.75rem;
          align-items: start;
          font-size: 0.88rem;
          line-height: 1.4;
        }
        .cookie-banner-option input {
          margin-top: 0.25rem;
          accent-color: #B8651D;
          width: 1.05rem;
          height: 1.05rem;
        }
        .cookie-banner-option-title {
          display: block;
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-bottom: 0.15rem;
        }
        .cookie-banner-option-desc {
          color: rgba(250, 239, 229, 0.78);
        }
      `}</style>

      <div className="cookie-banner-inner">
        <div>
          <p id="cookie-banner-title" className="cookie-banner-title">
            Delva & Asociados · Cookies
          </p>
          <p id="cookie-banner-desc" className="cookie-banner-desc">
            Este sitio utiliza cookies estrictamente necesarias para funcionar
            y, con tu consentimiento, cookies analíticas y de funcionalidad
            para mejorar la experiencia. Puedes leer el detalle en la{" "}
            <Link href="/cookies" className="cookie-banner-link">
              Política de Cookies
            </Link>{" "}
            y en el{" "}
            <Link href="/privacidad" className="cookie-banner-link">
              Aviso de Privacidad
            </Link>
            .
          </p>

          {showCustom && (
            <div className="cookie-banner-custom" aria-live="polite">
              <label className="cookie-banner-option">
                <input type="checkbox" checked disabled aria-disabled="true" readOnly />
                <span>
                  <span className="cookie-banner-option-title">
                    Estrictamente necesarias
                  </span>
                  <span className="cookie-banner-option-desc">
                    Imprescindibles para que el sitio funcione. Siempre activas.
                  </span>
                </span>
              </label>

              <label className="cookie-banner-option">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, analytics: e.target.checked }))
                  }
                />
                <span>
                  <span className="cookie-banner-option-title">Analíticas</span>
                  <span className="cookie-banner-option-desc">
                    Medición agregada de tráfico para mejorar el sitio. No se
                    activa ninguna analítica hasta que las aceptes.
                  </span>
                </span>
              </label>

              <label className="cookie-banner-option">
                <input
                  type="checkbox"
                  checked={prefs.functionality}
                  onChange={(e) =>
                    setPrefs((p) => ({
                      ...p,
                      functionality: e.target.checked,
                    }))
                  }
                />
                <span>
                  <span className="cookie-banner-option-title">
                    Funcionalidad
                  </span>
                  <span className="cookie-banner-option-desc">
                    Recordar idioma elegido (ES/EN/FR) y preferencias menores
                    de visualización.
                  </span>
                </span>
              </label>
            </div>
          )}
        </div>

        <div className="cookie-banner-actions">
          {!showCustom ? (
            <>
              <button
                type="button"
                className="cookie-banner-btn"
                onClick={() => setShowCustom(true)}
              >
                Personalizar
              </button>
              <button
                type="button"
                className="cookie-banner-btn"
                onClick={rejectAll}
              >
                Rechazar todas
              </button>
              <button
                type="button"
                className="cookie-banner-btn primary"
                onClick={acceptAll}
              >
                Aceptar todas
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="cookie-banner-btn"
                onClick={rejectAll}
              >
                Solo necesarias
              </button>
              <button
                type="button"
                className="cookie-banner-btn primary"
                onClick={saveCustom}
              >
                Guardar selección
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function getStoredConsent(): ConsentRecord | null {
  return readConsent();
}
