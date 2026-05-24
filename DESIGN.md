# DESIGN.md — Delva & Asociados

## Color strategy

**Committed**, organizada en cuatro **actos cromáticos** secuenciados por scroll. El cambio de acto es la narrativa visual.

### Tokens (OKLCH)

| Token | Valor | Uso |
|---|---|---|
| `ink` | `oklch(0.18 0.012 95)` | Texto principal sobre bone |
| `ink-soft` | `oklch(0.28 0.012 95)` | Texto secundario |
| `ink-mute` | `oklch(0.48 0.010 95)` | Metadata, captions |
| `bone` | `oklch(0.962 0.008 85)` | Superficie clara |
| `bone-soft` | `oklch(0.935 0.012 85)` | Variación |
| `bone-deep` | `oklch(0.885 0.014 82)` | Bordes, divisiones |
| `forest` | `oklch(0.158 0.018 155)` | Superficie oscura (drenched) |
| `forest-soft` | `oklch(0.225 0.022 152)` | Capas sobre forest |
| `forest-glow` | `oklch(0.345 0.040 150)` | Detalles sobre forest |
| `ember` | `oklch(0.715 0.155 55)` | Acento dramático (≤8% superficie) |
| `gold` | `oklch(0.74 0.115 82)` | Detalles editoriales |

Ningún `#000` ni `#fff`. Todos los neutros tintados.

### Actos

1. **Hero — Drenched forest** (sobre forest, texto bone, marca instalada gigante)
2. **Manifiesto — Editorial bone** (bone fondo, ink texto, prosa centrada)
3. **Práctica — Editorial bone con detalles gold** (lista tipográfica numerada, no cards)
4. **Capacidades — Drenched forest mecánico** (datos, jurisdicciones, marquee)
5. **Despacho — Bone editorial portrait** (sobre Emmanuel, prosa biográfica)
6. **Diálogo — Forest cinemático** (contacto editorial, ember acentos)
7. **Footer — Bone minimalista**

## Tipografía

| Familia | Uso | Pesos |
|---|---|---|
| **Fraunces** (variable, serif) | Display, manifiesto, prosa editorial | 300, 400, 500, 600 con `font-optical-sizing: auto` |
| **Geist Sans** (variable) | UI, navegación, párrafos cortos | 400, 500, 600 |
| **Geist Mono** | Metadata, secciones (§), números, badges | 400, 500 |

### Escala

- `display-xl` — clamp(9rem, 22vw, 22rem) — solo hero
- `display-lg` — clamp(7rem, 18vw, 16rem) — section headers grandes
- `display-md` — clamp(5rem, 12vw, 10rem) — section headers normales
- `display-sm` — clamp(3.5rem, 8vw, 6rem) — sub-display
- `display-xs` — clamp(2.5rem, 6vw, 4rem) — feature titles
- Body: 1.05rem / 1.65 sobre bone, 0.98rem / 1.7 sobre forest
- Line length: max 62ch en body, 38ch en pull quotes

## Layout

- Grid de 12 columnas con gutters generosos (24px → 40px).
- Padding lateral: 24px mobile, 6vw desktop, hasta 9vw en hero.
- Espacio vertical entre secciones: clamp(8rem, 14vh, 16rem). Ritmo, no monotonía.
- Sin cards genéricas. Las listas son **listas tipográficas**, no rejillas de tarjetas.
- Sin contenedor único centrado: cada sección elige su anchura.

## Motion

- Curva única: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo).
- Reveals al entrar viewport: `fade-up` 24px / 1.2s.
- Marquee de jurisdicciones a 42s lineal.
- Smooth scroll vía Lenis (lerp 0.08).
- Cursor custom: dot 6px, mix-blend-difference, sigue con lerp.
- Hero: parallax sutil del título grande (translateY al scroll, 0.2 ratio).
- Nada de bounce, nada de elastic. Sin animaciones a propiedades de layout.

## Símbolo de marca

Monograma del **ampersand** (`&`) como sello escultural en SVG. Trazo grueso, geometría custom, presente en:

- Favicon
- Marca en nav (acompañando wordmark)
- Sello en hero
- Marca de agua en footer

Wordmark: `DELVA & ASOCIADOS` en Fraunces SemiBold, optical size grande, tracking expandido `0.08em`.

## Microcopy

Los headers de sección usan formato `§01 / Práctica` en mono uppercase, separado del title. Recuerda al numerado de un artículo de ley o un manifiesto editorial.

## Prohibiciones específicas

- Sin gradientes en texto.
- Sin glass cards.
- Sin balanza, sin martillo, sin columnas griegas.
- Sin emoji.
- Sin border-left de 4px coloreado.
- Sin hero metric template ("500+ casos, 20 años...").
- Sin "Confianza · Excelencia · Innovación".
