import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

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
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/products.png"
            alt="Water treatment systems"
            width={700}
            height={540}
            className="w-full bg-white object-contain p-4"
          />
          <div>
            <p className="eyebrow mb-3">What we deliver</p>
            <h2 className="section-title text-3xl sm:text-4xl">Matched to your water</h2>
            <p className="mt-4 text-muted">
              Every install is chosen for source type, salinity and daily demand — clarity without
              losing flow.
            </p>
          </div>
        </div>
        <div className="grid gap-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
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
