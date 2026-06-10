import type { AreaContent, ProblematicaContent } from "./servicios";

// Google muestra ~155-160 caracteres de description en SERP; el objetivo
// 130-158 aprovecha el espacio sin que el snippet termine cortado.
const DESC_TARGET = 130;
const DESC_MAX = 158;

function sentences(text: string): string[] {
  return text.trim().split(/(?<=[.!?…])\s+/);
}

// Une frases completas de los extras al texto base hasta caer en el rango
// objetivo. Nunca corta a media palabra ni salta frases dentro de un mismo
// extra (evita pegar una frase cuyo antecedente quedó fuera).
export function composeDescription(base: string, extras: Array<string | undefined>): string {
  let desc = base.trim().replace(/\s+/g, " ");
  for (const extra of extras) {
    if (desc.length >= DESC_TARGET) break;
    if (!extra) continue;
    let candidate = desc;
    for (const s of sentences(extra)) {
      const joined = candidate ? `${candidate} ${s}` : s;
      if (joined.length > DESC_MAX) break;
      candidate = joined;
      if (candidate.length >= DESC_TARGET) break;
    }
    desc = candidate;
  }
  return desc;
}

export function areaDescription(c: AreaContent): string {
  const desc = composeDescription(c.short, [c.intro]);
  if (desc.length >= 110) return desc;
  // Si tras el short no cupo ninguna frase del intro (frases largas),
  // componer desde el intro solo rinde mejor que un short de ~60 chars.
  const fromIntro = composeDescription("", [c.intro]);
  return fromIntro.length > desc.length ? fromIntro : desc;
}

export function problemaDescription(pc: ProblematicaContent): string {
  return composeDescription(pc.hook, [pc.consequence, ...pc.solution]);
}

// Sufijo de marca solo cuando el title completo sigue legible en SERP
// (~60 chars visibles); con bases largas el sufijo solo provoca el "…".
export function withBrandSuffix(base: string): string {
  const full = `${base} — Delva & Asociados`;
  return full.length > 60 ? base : full;
}
