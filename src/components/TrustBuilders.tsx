"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 0, suffix: "", label: "Electricity needed", display: "Zero", hint: "Gravity-led" },
  { value: 100, suffix: "%", label: "Natural media", display: null, hint: "Stone & slate" },
  { value: 1, suffix: "", label: "Flow you keep", display: "Same", hint: "No pressure drop feel" },
];

const pillars = [
  {
    title: "No power required",
    text: "Filters work with gravity and natural media — quieter bills, simpler homes.",
    mark: "01",
  },
  {
    title: "Built in Kerala",
    text: "Based in Kalikavu, Malappuram — serving families and institutions across the region.",
    mark: "02",
  },
  {
    title: "Certified care",
    text: "Quality standards you can review — see our certificates anytime.",
    href: "/certificates",
    mark: "03",
  },
  {
    title: "After-sales guidance",
    text: "Clear usage support so your system stays effective with little fuss.",
    mark: "04",
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
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="trust-section relative overflow-hidden">
      <div className="trust-mesh" aria-hidden />
      <div className="trust-bubbles" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto mb-12 max-w-2xl">
          <p className="trust-kicker mb-3">Why families trust us</p>
          <h2 className="trust-heading display text-3xl sm:text-4xl lg:text-[2.9rem]">
            Clarity you can count on
          </h2>
          <p className="trust-lead mx-auto mt-4 max-w-lg text-base leading-relaxed">
            Simple promises, kept every day — natural filtration without electricity, without
            complicated upkeep.
          </p>
        </div>

        <div className="trust-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="trust-stat">
              <p className="trust-stat-value display text-4xl sm:text-5xl">
                {stat.display ? (
                  stat.display
                ) : (
                  <CountUp value={stat.value} suffix={stat.suffix} run={run} />
                )}
              </p>
              <p className="trust-stat-label mt-2 text-sm font-semibold">{stat.label}</p>
              <p className="mt-1 text-xs text-white/55">{stat.hint}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <Reveal key={item.title} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
              {item.href ? (
                <Link href={item.href} className="trust-pillar group block h-full">
                  <span className="trust-icon mx-auto" aria-hidden>
                    {item.mark}
                  </span>
                  <h3 className="display mt-4 text-xl text-white transition group-hover:text-[#b8f0e8]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#7ee0d2]">
                    View certificates →
                  </span>
                </Link>
              ) : (
                <div className="trust-pillar h-full">
                  <span className="trust-icon mx-auto" aria-hidden>
                    {item.mark}
                  </span>
                  <h3 className="display mt-4 text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
