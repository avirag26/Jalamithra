"use client";

import { useCallback, useEffect, useState } from "react";

const highlights = [
  {
    title: "Natural media",
    text: "Crafted with nelli slate and natural stones — no chemicals, no electricity.",
  },
  {
    title: "Unchanged flow",
    text: "Water continues at the same comfortable speed after the filter is fitted.",
  },
  {
    title: "Quiet reliability",
    text: "Built for homes, hotels, schools and places of worship with little day-to-day care.",
  },
];

export default function WhyCarousel() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + highlights.length) % highlights.length);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % highlights.length);
      setAnimKey((k) => k + 1);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused]);

  const item = highlights[index];

  return (
    <section className="why-section relative overflow-hidden border-y border-line">
      <div className="why-drift" aria-hidden />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="eyebrow mb-3 justify-center">Why Jalamithra</p>
        <h2 className="section-title text-3xl sm:text-4xl lg:text-[2.75rem]">
          Clarity without complication
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          A quieter kind of filtration — natural media, familiar flow, and water you feel better
          about using every day.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button type="button" aria-label="Previous feature" onClick={prev} className="why-nav-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" aria-label="Next feature" onClick={next} className="why-nav-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div
          className="mt-8 w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <article key={animKey} className="why-slide mx-auto max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="display text-3xl text-brand-deep sm:text-4xl">{item.title}</h3>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-foreground/70 sm:text-lg">
              {item.text}
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Why features">
          {highlights.map((h, i) => (
            <button
              key={h.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${h.title}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-brand" : "w-3 bg-brand/25 hover:bg-brand/45"
              }`}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((h, i) => (
            <button
              key={h.title}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                i === index
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-brand-deep hover:border-brand/40"
              }`}
            >
              {h.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
