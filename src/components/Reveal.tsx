"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span";
  line?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay,
  as: Tag = "div",
  line = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduce || mobile) {
      el.classList.add("is-in");
      return;
    }

    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const frame = requestAnimationFrame(() => {
      if (cancelled) return;
      el.classList.add("is-ready");
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add("is-in");
        observer.disconnect();
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const delayClass = delay ? `reveal-d${delay}` : "";
  const base = line ? "line-reveal" : "reveal";

  if (line) {
    return (
      <Tag
        ref={ref as never}
        className={`${base} ${delayClass} ${className}`.trim()}
      >
        <span>{children}</span>
      </Tag>
    );
  }

  return (
    <Tag ref={ref as never} className={`${base} ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
