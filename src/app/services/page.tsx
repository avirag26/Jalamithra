import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Service",
};

const services = [
  {
    title: "Domestic Water Filters",
    text: "Natural filtration for household taps and tanks — healthier drinking and cooking water without electricity.",
  },
  {
    title: "Institutional Installations",
    text: "Scaled setups for hotels, schools, campuses, and places of worship that need continuous, reliable supply.",
  },
  {
    title: "Well & River Source Treatment",
    text: "Purpose-built media for well, river, pond, stream, canal, and municipal line water with salinity concerns.",
  },
  {
    title: "FRP System Solutions",
    text: "Professional FRP vessel-based filtration systems for higher volume residential and light commercial needs.",
  },
  {
    title: "Site Survey & Fitting",
    text: "On-site assessment, correct sizing, and careful installation so flow rate stays comfortable after fitting.",
  },
  {
    title: "After-Sales Guidance",
    text: "Clear usage guidance and support so your system stays effective with minimal day-to-day attention.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="From a single home connection to institutional water lines — Jalamithra designs natural filtration around your source and usage."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Image
            src="/images/products.png"
            alt="Water treatment systems"
            width={800}
            height={600}
            className="w-full rounded-2xl border border-line bg-white object-contain p-4"
          />
          <div>
            <h2 className="section-title text-3xl">What we deliver</h2>
            <p className="mt-3 text-muted">
              Every installation is chosen for source type, salt content, and daily demand — so you get
              clarity without sacrificing flow.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title} className="soft-panel rounded-2xl p-6">
              <span className="font-[family-name:var(--font-outfit)] text-sm font-bold text-brand-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Book a service consultation
          </Link>
        </div>
      </section>
    </>
  );
}
