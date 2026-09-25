"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { lifestyle } from "@/lib/products";

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <section className="bottom-finale relative overflow-hidden text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={lifestyle.pour}
          alt=""
          fill
          sizes="100vw"
          className="object-cover scale-105 bottom-finale-bg"
          quality={85}
        />
        <div className="bottom-finale-veil" />
        <div className="bottom-finale-sheen" />
        <div className="bottom-finale-orbs" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">
              Voices from Kerala
            </p>
            <h2 className="display text-3xl sm:text-4xl lg:text-[2.65rem]">
              Trusted in homes & institutions
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <button type="button" aria-label="Previous review" onClick={prev} className="carousel-nav-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button type="button" aria-label="Next review" onClick={next} className="carousel-nav-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div className="ml-2 flex gap-2" role="tablist" aria-label="Review slides">
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
            </div>

            <article key={animKey} className="carousel-slide mt-10">
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-sky-300 uppercase">
                {slide.tag}
              </p>
              <blockquote className="display relative text-[1.55rem] leading-snug text-white sm:text-3xl lg:text-[2.05rem]">
                <span className="quote-mark" aria-hidden>
                  “
                </span>
                {slide.quote}
              </blockquote>
              <footer className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-sm font-bold tracking-wide text-white">
                  {slide.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <p className="font-semibold text-white">{slide.name}</p>
                  <p className="text-sm text-sky-200/85">{slide.place}</p>
                </div>
              </footer>
            </article>
          </div>

          <div className="bottom-cta-panel cta-rise">
            <div className="bottom-cta-glow" aria-hidden />
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-200 uppercase">Next step</p>
            <h3 className="display mt-3 text-2xl sm:text-3xl">Ready for clearer water?</h3>
            <p className="mt-4 text-sm leading-relaxed text-sky-100/90 sm:text-base">
              Share your well, river or line supply details — we will help you choose the right
              Jalamithra filter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-brand-deep transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Contact us
              </Link>
              <Link href="/reviews" className="btn-ghost inline-flex justify-center">
                Read more reviews
              </Link>
            </div>
            <div className="mt-8 space-y-1.5 border-t border-white/20 pt-6 text-sm text-sky-100/90">
              <p>Kalikavu, Malappuram</p>
              <p>Mon–Sat · 8:00 AM – 6:00 PM</p>
              <a href="tel:+919037037373" className="inline-block font-semibold text-white hover:text-sky-200">
                +91 90370 37373
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
