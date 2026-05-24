"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FirmaCTA from "../../components/FirmaCTA";
import ProblemaScene from "../../components/ProblemaScene";
import { useI18n } from "../../i18n/I18nProvider";
import type { Area } from "../../lib/servicios";
import { getAreaContent, getProblematicaContent } from "../../lib/servicios";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const avatarPath: Record<NonNullable<Area["avatar"]>, string> = {
  biblioteca: "/avatar/biblioteca.jpg",
  portrait: "/avatar/portrait.jpg",
  mxoffice: "/avatar/mxoffice.jpg",
  crypto: "/avatar/crypto.jpg",
  tmec: "/avatar/tmec.jpg"
};

export default function AreaClient({ area, next }: { area: Area; next: Area }) {
  const { t, locale } = useI18n();
  const content = getAreaContent(area, locale);
  const heroRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-anim]", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12
      });
      if (sceneRef.current) {
        gsap.to(sceneRef.current.querySelectorAll("[data-orb]"), {
          y: "+=60",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6
          }
        });
        gsap.to(sceneRef.current.querySelectorAll("[data-parallax-bg]"), {
          y: "+=80",
          scale: 1.1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, [content.title]);

  const accentGlow =
    area.accent === "ember"
      ? "oklch(0.72 0.155 50)"
      : area.accent === "gold"
      ? "oklch(0.76 0.115 82)"
      : "oklch(0.34 0.080 150)";
  const accentText =
    area.accent === "ember" ? "text-ember" : area.accent === "gold" ? "text-gold" : "text-forest-glow";

  return (
    <main className="relative overflow-x-hidden w-full max-w-full">
      <Nav />

      <section ref={heroRef} data-surface="dark" className="relative bg-forest text-bone overflow-hidden grain min-h-[90svh]">
        <div ref={sceneRef} className="absolute inset-0 pointer-events-none">
          {area.image && (
            <div data-parallax-bg className="absolute inset-0 will-change-transform">
              <Image
                src={area.image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/55 to-forest/95" />
            </div>
          )}
          <div data-orb className="absolute top-[18%] right-[-12%] w-[55vmin] h-[55vmin] rounded-full opacity-25 blur-[140px]" style={{ background: accentGlow }} />
          <div data-orb className="absolute bottom-[-15%] left-[-10%] w-[45vmin] h-[45vmin] rounded-full opacity-20 blur-[160px]" style={{ background: "oklch(0.34 0.080 150)" }} />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 md:pt-44 pb-16 md:pb-24">
          <Link
            href="/#areas"
            className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-bone/55 hover:text-bone transition-colors duration-500 mb-10"
            data-hero-anim
          >
            <span aria-hidden>←</span>
            {t.areaPage.backHome}
          </Link>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-2" data-hero-anim>
              <span className={`block font-mono text-[clamp(3.5rem,12vw,5.5rem)] md:text-[6.5rem] leading-[0.85] text-bone/30`} style={{ fontWeight: 400 }}>
                {area.num}
              </span>
            </div>
            <div className="col-span-12 md:col-span-10" data-hero-anim>
              <h1 className="font-serif text-d-2 md:text-d-3 lg:text-d-4 text-balance leading-[0.92]" style={{ fontWeight: 400 }}>
                {content.title}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16 items-end">
            <div className="col-span-12 md:col-span-7" data-hero-anim>
              <p className="font-serif italic text-[1.25rem] md:text-[1.6rem] leading-[1.4] text-bone/85" style={{ fontWeight: 400 }}>
                {content.intro}
              </p>
            </div>
            {area.avatar && (
              <div className="col-span-12 md:col-span-4 md:col-start-9" data-hero-anim>
                <div className="relative aspect-[3/4] w-full max-w-[280px] ml-auto rounded-2xl overflow-hidden border border-bone/15 bg-forest-soft">
                  <Image
                    src={avatarPath[area.avatar]}
                    alt="Juan Emmanuel Delva"
                    fill
                    sizes="(max-width: 768px) 60vw, 280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-bone/85">
                    <span>JEDB</span>
                    <span>{area.num}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section data-surface="light" className="relative bg-bone text-ink py-20 md:py-32 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
            <div className="col-span-12 md:col-span-8 reveal-init">
              <p className={`font-mono text-[10.5px] uppercase tracking-[0.28em] ${accentText} mb-4`}>
                {t.areaPage.problemasTitle}
              </p>
              <h2 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.98]" style={{ fontWeight: 400 }}>
                {content.short}
              </h2>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-soft">{t.areaPage.problemasSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {area.problematicas.map((p, i) => {
              const pc = getProblematicaContent(p, locale);
              return (
                <Link
                  key={p.id}
                  href={`/servicios/${area.slug}/${p.id}`}
                  className="group relative aspect-[5/4] sm:aspect-[3/2] md:aspect-[4/3] rounded-2xl overflow-hidden border border-ink/12 bg-bone-soft hover:border-ink/40 transition-all duration-700 reveal-init"
                  style={{ transitionDelay: `${Math.min(i * 50, 360)}ms` }}
                  data-magnetic
                >
                  <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-700">
                    <ProblemaScene scene={p.scene} accent={area.accent} />
                  </div>
                  <div className="relative h-full flex flex-col p-5 md:p-7">
                    <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-ink-mute">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className={accentText}>{t.areaPage.enter} →</span>
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-serif text-[1.35rem] md:text-[1.7rem] leading-[1.08] tracking-tight text-balance" style={{ fontWeight: 400 }}>
                        {pc.title}
                      </h3>
                      <p className="mt-2 font-serif italic text-[0.95rem] md:text-base text-ink-soft leading-snug max-w-[34ch]" style={{ fontWeight: 400 }}>
                        {pc.hook}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FirmaCTA />

      <section data-surface="light" className="relative bg-bone text-ink py-16 md:py-24 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20">
          <Link href={`/servicios/${next.slug}`} className="group block border-t border-ink/15 pt-10 md:pt-14">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute mb-4 flex items-center gap-2">
                  {locale === "es" ? "Siguiente área" : locale === "en" ? "Next area" : "Domaine suivant"} <span aria-hidden className="opacity-50">— {next.num}</span>
                </p>
                <h3 className="font-serif text-d-1 md:text-d-2 text-balance leading-[0.96]" style={{ fontWeight: 400 }}>
                  {getAreaContent(next, locale).title}
                </h3>
                <p className="mt-3 font-sans text-base md:text-lg text-ink-soft max-w-[48ch]">
                  {getAreaContent(next, locale).short}
                </p>
              </div>
              <div className="shrink-0 mt-2">
                <span aria-hidden className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-ink/35 group-hover:bg-ink group-hover:text-bone transition-all duration-500 text-xl font-serif italic">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
