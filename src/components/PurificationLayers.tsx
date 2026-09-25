"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Reveal from "@/components/Reveal";

const layers = [
  {
    step: "01",
    title: "Sediment catch",
    text: "Larger particles and cloudiness settle out first — water begins to look clearer.",
    tone: "from-[#7eb8e8] to-[#4ea3e0]",
  },
  {
    step: "02",
    title: "Natural stone bed",
    text: "Nelli slate and mineral media refine taste and clarity — no chemicals, no power.",
    tone: "from-[#4ea3e0] to-[#0a5ea8]",
  },
  {
    step: "03",
    title: "Fine polish",
    text: "Final stage softens remaining impurities so flow stays comfortable at every tap.",
    tone: "from-[#0a5ea8] to-[#063a6b]",
  },
  {
    step: "04",
    title: "Clear at the tap",
    text: "What reaches your glass is water you feel better about using every day.",
    tone: "from-[#063a6b] to-[#02101c]",
  },
];

export default function PurificationLayers() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % layers.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <section ref={sectionRef} className="purify-section relative overflow-hidden">
      <div className="purify-flow" aria-hidden />
      <div className={`purify-drops ${inView ? "is-on" : ""}`} aria-hidden>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <Reveal as="p" className="eyebrow mb-3">
            Layers of purification
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl lg:text-[2.85rem]">
            Water rises through nature’s stages
          </Reveal>
          <Reveal delay={2} as="p" className="mt-4 max-w-xl text-muted">
            Each layer does one quiet job. Together they turn familiar Kerala sources into clearer
            water — without electricity.
          </Reveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={`purify-stack ${inView ? "is-on" : ""}`} aria-hidden>
            {layers.map((layer, i) => (
              <button
                key={layer.step}
                type="button"
                className={`purify-layer bg-gradient-to-r ${layer.tone} ${
                  active === i ? "is-active" : ""
                }`}
                style={{ "--i": i } as CSSProperties}
                onClick={() => setActive(i)}
                aria-label={`Show ${layer.title}`}
              >
                <span className="purify-layer-label">{layer.step}</span>
                <span className="purify-layer-title">{layer.title}</span>
              </button>
            ))}
            <div className="purify-stream" />
          </div>

          <div>
            {layers.map((layer, i) => (
              <article
                key={layer.step}
                className={`purify-detail ${active === i ? "is-active" : ""}`}
                aria-hidden={active !== i}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                  Stage {layer.step}
                </p>
                <h3 className="display mt-3 text-3xl text-brand-deep sm:text-4xl">{layer.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/75">
                  {layer.text}
                </p>
              </article>
            ))}

            <div className="mt-8 flex gap-2" role="tablist" aria-label="Purification stages">
              {layers.map((layer, i) => (
                <button
                  key={layer.step}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={layer.title}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-brand" : "w-3 bg-brand/25 hover:bg-brand/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
