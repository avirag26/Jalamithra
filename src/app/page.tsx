import Image from "next/image";
import Link from "next/link";
import BottomShowcase from "@/components/BottomShowcase";
import HeroTypewriter from "@/components/HeroTypewriter";
import ProductShowcase from "@/components/ProductShowcase";
import Reveal from "@/components/Reveal";
import WhyCarousel from "@/components/WhyCarousel";
import { lifestyle } from "@/lib/products";

const services = [
  {
    title: "Domestic filtration",
    text: "Clearer water for every household tap and tank.",
    image: lifestyle.glass,
  },
  {
    title: "Institutional systems",
    text: "Steady supply for schools, hotels and community spaces.",
    image: lifestyle.home,
  },
  {
    title: "Source treatment",
    text: "Well, river, pond, canal and line-water solutions.",
    image: lifestyle.river,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-premium">
        <div className="hero-bg" aria-hidden>
          <Image
            src={lifestyle.hero}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="hero-photo"
          />
        </div>
        <div className="hero-bg-overlay" aria-hidden />
        <div className="hero-water-sheen" aria-hidden />
        <div className="hero-ripple" aria-hidden />

        <div className="relative z-[2] mx-auto flex min-h-[min(96vh,880px)] max-w-6xl items-end px-4 pb-20 pt-32 sm:items-center sm:px-6 sm:pb-24 lg:px-8">
          <div className="max-w-2xl">
            <Reveal
              as="p"
              className="mb-5 display text-[1.65rem] tracking-tight text-white sm:text-3xl lg:text-[2.35rem]"
            >
              APA Jalamithra
            </Reveal>

            <HeroTypewriter />

            <Reveal as="p" delay={2} className="mt-6 max-w-lg text-base leading-relaxed text-sky-50/90 sm:text-[1.08rem]">
              Natural, electricity-free water filters for Kerala — clearer water from the wells,
              rivers and lines you already trust.
            </Reveal>

            <Reveal delay={3} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep shadow-[0_12px_40px_rgba(3,21,37,0.25)] transition hover:-translate-y-0.5 hover:bg-sky-50"
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

      <ProductShowcase />

      <WhyCarousel />

      <section className="border-y border-line bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
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

          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {services.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}>
                <Link href="/services" className="group block">
                  <div className="relative mb-5 aspect-[5/4] overflow-hidden bg-soft">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      quality={85}
                    />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-2 text-2xl text-brand-deep transition group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.text}</p>
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
