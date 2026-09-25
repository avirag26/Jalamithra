"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Pure water, naturally filtered.",
  "Clean water without electricity.",
  "Healthy water for every home.",
];

export default function HeroTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!reduced) return;
    setDisplay(phrases[0]);
    setPhraseIndex(0);
    const id = window.setInterval(() => {
      setPhraseIndex((i) => {
        const next = (i + 1) % phrases.length;
        setDisplay(phrases[next]);
        return next;
      });
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    const current = phrases[phraseIndex];
    const typingSpeed = deleting ? 26 : 52;
    const pauseFull = 1700;
    const pauseEmpty = 320;

    if (!deleting && display === current) {
      const t = window.setTimeout(() => setDeleting(true), pauseFull);
      return () => window.clearTimeout(t);
    }

    if (deleting && display.length === 0) {
      const t = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, pauseEmpty);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setDisplay((prev) =>
        deleting ? current.slice(0, Math.max(0, prev.length - 1)) : current.slice(0, prev.length + 1),
      );
    }, typingSpeed);

    return () => window.clearTimeout(t);
  }, [display, deleting, phraseIndex, reduced]);

  return (
    <h1
      className="display min-h-[3.2em] text-[2.35rem] leading-[1.12] text-white sm:min-h-[2.4em] sm:text-[2.85rem] lg:text-[3.35rem]"
      aria-live="polite"
    >
      <span className="sr-only">{phrases[phraseIndex]}</span>
      <span aria-hidden="true">
        {display}
        <span className="hero-caret" />
      </span>
    </h1>
  );
}
