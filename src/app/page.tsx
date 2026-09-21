import Image from "next/image";
import Link from "next/link";
import BottomShowcase from "@/components/BottomShowcase";
import HeroTypewriter from "@/components/HeroTypewriter";
import Reveal from "@/components/Reveal";
import WhyCarousel from "@/components/WhyCarousel";

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

            <HeroTypewriter />

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

      <WhyCarousel />

      <section className="border-y border-line bg-white py-20 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-12">
            <Reveal as="p" className="eyebrow mb-3 justify-center">
              Services
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Designed around your source
            </Reveal>
            <Reveal delay={2} className="mt-4">
              <Link href="/services" className="text-sm font-semibold text-brand hover:text-brand-deep">
                All services →
              </Link>
            </Reveal>
          </div>

          <div className="grid w-full gap-8 md:grid-cols-3 md:gap-6">
            {services.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <Link
                  href="/services"
                  className={`group block border-t border-line pt-8 md:border-t-0 md:pt-2 ${
                    index > 0 ? "md:border-l md:pl-6" : ""
                  }`}
                >
                  <h3 className="display text-2xl text-brand-deep transition group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BottomShowcase />
    </>
  );
}
