"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    quote:
      "Our well water looked cloudy for years. After fitting Jalamithra, the clarity changed — and the flow feels the same.",
    name: "Fathima R.",
    place: "Kalikavu",
    tag: "Home installation",
  },
  {
    quote:
      "We needed filtration that does not depend on electricity for guest floors. Installation was smooth and upkeep is almost none.",
    name: "Hotel Green Pearl",
    place: "Malappuram",
    tag: "Institutional",
  },
  {
    quote:
      "Parents asked about drinking water quality. The natural filter setup gave us a practical, reliable answer.",
    name: "School Admin",
    place: "Nilambur belt",
    tag: "Campus supply",
  },
  {
    quote:
      "We use river water at home. After fitting, taste and look improved. The team explained everything clearly.",
    name: "Abdul K.",
    place: "River-side home",
    tag: "Source treatment",
  },
];

export default function BottomShowcase() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-[#041c33] text-white">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">
            Voices from Kerala
          </p>
          <h2 className="display text-3xl sm:text-4xl">Trusted in homes & institutions</h2>
        </div>

        <div className="mb-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="carousel-nav-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="carousel-nav-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div
          className="carousel-stage w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <article key={animKey} className="carousel-slide mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sky-300 uppercase">
              {slide.tag}
            </p>
            <blockquote className="display text-2xl leading-snug text-white sm:text-3xl lg:text-[2.15rem]">
              “{slide.quote}”
            </blockquote>
            <footer className="mt-8 w-full border-t border-white/15 pt-6">
              <p className="font-semibold text-white">{slide.name}</p>
              <p className="text-sm text-sky-200/80">{slide.place}</p>
            </footer>
          </article>
        </div>

        <div
          className="mt-8 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Review slides"
        >
          {slides.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show review ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/30 hover:bg-white/55"
              }`}
            />
          ))}
        </div>

        <div className="mt-14 w-full max-w-2xl border-t border-white/15 pt-12">
          <div className="cta-rise flex flex-col items-center text-center">
            <h3 className="display text-2xl sm:text-3xl">Ready for clearer water?</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-sky-100/85 sm:text-base">
              Share your well, river or line supply details — we will help you choose the right
              Jalamithra filter.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-brand-deep transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Contact us
              </Link>
              <Link href="/reviews" className="btn-ghost">
                Read more reviews
              </Link>
            </div>
            <div
              className="cta-rise mt-8 space-y-2 text-sm text-sky-100/85"
              style={{ animationDelay: "0.12s" }}
            >
              <p>Kalikavu, Malappuram</p>
              <p>Mon–Sat · 8:00 AM – 6:00 PM</p>
              <a href="tel:+919037037373" className="font-semibold text-white hover:text-sky-200">
                +91 90370 37373
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
