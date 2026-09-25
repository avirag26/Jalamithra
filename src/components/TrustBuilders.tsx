"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 0, suffix: "", label: "Electricity needed", display: "Zero" },
  { value: 100, suffix: "%", label: "Natural media focus", display: null },
  { value: 1, suffix: "", label: "Flow you keep", display: "Same" },
];

const pillars = [
  {
    title: "No power required",
    text: "Filters work with gravity and natural media — quieter bills, simpler homes.",
  },
  {
    title: "Built in Kerala",
    text: "Based in Kalikavu, Malappuram — serving families and institutions across the region.",
  },
  {
    title: "Certified care",
    text: "Quality standards you can review — see our certificates anytime.",
    href: "/certificates",
  },
  {
    title: "After-sales guidance",
    text: "Clear usage support so your system stays effective with little fuss.",
  },
];

function CountUp({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

export default function TrustBuilders() {
  const ref = useRef<HTMLElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="trust-section relative overflow-hidden">
      <div className="trust-wave" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-14 text-center">
          <Reveal as="p" className="eyebrow mb-3 justify-center">
            Why families trust us
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
            Clarity you can count on
          </Reveal>
        </div>

        <div className="trust-stats">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
              className="trust-stat"
            >
              <p className="display text-4xl text-white sm:text-5xl">
                {stat.display ? (
                  stat.display
                ) : (
                  <CountUp value={stat.value} suffix={stat.suffix} run={run} />
                )}
              </p>
              <p className="mt-2 text-sm font-medium text-sky-200/90">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
              {item.href ? (
                <Link href={item.href} className="trust-pillar group block">
                  <h3 className="display text-xl text-white transition group-hover:text-sky-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sky-100/80">{item.text}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-sky-300">
                    View certificates →
                  </span>
                </Link>
              ) : (
                <div className="trust-pillar">
                  <h3 className="display text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sky-100/80">{item.text}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
