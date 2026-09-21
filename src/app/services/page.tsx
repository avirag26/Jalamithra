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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Image
            src="/images/products.png"
            alt="Water treatment systems"
            width={800}
            height={600}
            className="w-full rounded-[1.5rem] border border-line bg-white object-contain p-5 shadow-[0_16px_40px_rgba(8,53,110,0.06)]"
          />
          <div>
            <p className="eyebrow mb-3">What we deliver</p>
            <h2 className="section-title text-3xl sm:text-4xl">Filtration matched to your water</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every installation is chosen for source type, salt content, and daily demand — so you get
              clarity without sacrificing flow.
            </p>
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <article key={item.title} className="border-t border-line pt-6">
              <span className="font-[family-name:var(--font-outfit)] text-sm font-bold tracking-wider text-brand-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-primary">
            Book a service consultation
          </Link>
        </div>
      </section>
    </>
  );
}
