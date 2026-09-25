import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { lifestyle, scenes } from "@/lib/products";

export const metadata: Metadata = { title: "Service" };

const services = [
  {
    title: "Domestic water filters",
    text: "Natural filtration for household taps and tanks — healthier water without electricity.",
  },
  {
    title: "Institutional installations",
    text: "Scaled setups for hotels, schools, campuses and places of worship.",
  },
  {
    title: "Well & river treatment",
    text: "Media suited for well, river, pond, stream, canal and line water.",
  },
  {
    title: "FRP system solutions",
    text: "FRP vessel systems for higher volume residential and light commercial needs.",
  },
  {
    title: "Site survey & fitting",
    text: "On-site assessment and careful installation so flow stays comfortable.",
  },
  {
    title: "After-sales guidance",
    text: "Clear usage support so your system stays effective with little fuss.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our services"
        description="From a single home connection to institutional lines — filtration designed around your source."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow mb-3">What we deliver</p>
            <h2 className="section-title text-3xl sm:text-4xl">Matched to your water</h2>
          </div>
          <p className="max-w-md text-muted lg:justify-self-end">
            Every install is chosen for source type, salinity and daily demand — clarity without
            losing flow.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {scenes.map((item) => (
            <article key={item.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-soft">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  quality={90}
                />
              </div>
              <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-brand uppercase">
                {item.tag}
              </p>
              <h3 className="display mt-2 text-2xl text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div className="relative aspect-[21/9] min-h-[12rem]">
            <Image
              src={lifestyle.home}
              alt="Clean water at home"
              fill
              sizes="100vw"
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031525]/80 via-[#031525]/35 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-sm display text-2xl text-white sm:bottom-8 sm:left-8 sm:text-3xl">
              Built for everyday Kerala living
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title}>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand/70 uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-3 text-xl text-brand-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <Link href="/contact" className="btn-primary">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
