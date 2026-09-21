import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

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

const services = [
  {
    title: "Domestic filtration",
    text: "Clearer water for every household tap and tank.",
  },
  {
    title: "Institutional systems",
    text: "Steady supply for schools, hotels and community spaces.",
  },
  {
    title: "Source treatment",
    text: "Well, river, pond, canal and line-water solutions.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-premium">
        <div className="hero-bg" aria-hidden>
          <Image
            src="/images/products.png"
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
          />
        </div>
        <div className="hero-bg-overlay" aria-hidden />

        <div className="relative z-[2] mx-auto flex min-h-[min(92vh,760px)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <Reveal as="p" className="mb-5 text-xs font-semibold tracking-[0.22em] text-sky-200/90 uppercase">
              APA Jalamithra
            </Reveal>

            <h1 className="display text-[2.85rem] text-white sm:text-5xl lg:text-[4rem]">
              <Reveal as="span" line className="display">
                Pure water,
              </Reveal>
              <Reveal as="span" line delay={1} className="display mt-1 text-sky-100">
                naturally filtered.
              </Reveal>
            </h1>

            <Reveal as="p" delay={2} className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-sky-50/90">
              Electricity-free natural water filters for Kerala families and institutions — clearer
              water from the sources you already trust.
            </Reveal>

            <Reveal delay={3} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-brand-deep transition hover:bg-sky-50"
              >
                Request a visit
              </Link>
              <Link href="/services" className="btn-ghost">
                View services
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-14 max-w-xl">
          <Reveal as="p" className="eyebrow mb-3">
            Why Jalamithra
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
            Clarity without complication
          </Reveal>
          <Reveal as="p" delay={2} className="mt-4 text-muted">
            A quieter kind of filtration — natural media, familiar flow, and water you feel better
            about using every day.
          </Reveal>
        </div>

        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-3 md:gap-10">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand/70 uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-3 text-2xl text-brand-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Reveal as="p" className="eyebrow mb-3">
                Services
              </Reveal>
              <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
                Designed around your source
              </Reveal>
            </div>
            <Reveal delay={2}>
              <Link href="/services" className="text-sm font-semibold text-brand hover:text-brand-deep">
                All services →
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {services.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <Link
                  href="/services"
                  className={`group block py-8 md:px-6 md:py-2 ${
                    index > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""
                  }`}
                >
                  <h3 className="display text-2xl text-brand-deep transition group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{item.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="grid items-center gap-10 rounded-2xl bg-[#041c33] px-7 py-12 text-white sm:px-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <h2 className="display text-3xl sm:text-4xl">Ready for clearer water?</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-sky-100/85 sm:text-base">
              Share your well, river or line supply details — we will help you choose the right
              Jalamithra filter.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-brand-deep transition hover:bg-sky-50"
            >
              Contact us
            </Link>
          </div>
          <div className="space-y-3 border-t border-white/15 pt-6 text-sm text-sky-100/80 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p>Kalikavu, Malappuram</p>
            <p>Mon–Sat · 8:00 AM – 6:00 PM</p>
            <a href="tel:+919037037373" className="block font-medium text-white hover:text-sky-200">
              +91 90370 37373
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
