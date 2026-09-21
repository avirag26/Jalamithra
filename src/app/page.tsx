import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "100% Natural Media",
    text: "Filters crafted with nelli slate and natural stones — no chemicals, no electricity.",
  },
  {
    title: "Same Flow Speed",
    text: "Water keeps flowing at your usual pressure after installation — use as much as you need.",
  },
  {
    title: "Zero Daily Upkeep",
    text: "Fit it once for homes, hotels, schools, and places of worship — then drink with confidence.",
  },
];

const services = [
  { title: "Domestic Filtration", href: "/services", text: "Clear, healthy water for every tap at home." },
  { title: "Institutional Systems", href: "/services", text: "Reliable supply for schools, hotels & community spaces." },
  { title: "Source Treatment", href: "/services", text: "Well, river, pond, canal and line-water solutions." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0">
          <span className="ripple-ring absolute top-1/3 left-[12%] h-40 w-40 rounded-full border border-white/25" />
          <span
            className="ripple-ring absolute top-1/2 right-[18%] h-28 w-28 rounded-full border border-white/20"
            style={{ animationDelay: "1.1s" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-14 pb-8 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-24">
          <div>
            <Image
              src="/images/logo.png"
              alt="APA Jalamithra"
              width={280}
              height={112}
              priority
              className="animate-rise mb-6 hidden h-20 w-auto rounded-xl bg-white object-contain p-2 shadow-lg shadow-brand-deep/25 sm:block sm:h-24"
            />
            <h1 className="animate-rise-delay-1 font-[family-name:var(--font-outfit)] text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pure water,
              <span className="block text-sky-100">naturally filtered.</span>
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-sky-50/95 sm:text-lg">
              APA Jalamithra brings electricity-free natural water filters to Kerala families and
              institutions — clearer, healthier water from the sources you already use.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep shadow-lg shadow-white/20 transition hover:-translate-y-0.5"
              >
                Request a Visit
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/25 bg-white/10 p-4 shadow-2xl shadow-brand-deep/40 backdrop-blur-sm">
              <Image
                src="/images/products.png"
                alt="APA Jalamithra water filtration systems"
                width={900}
                height={700}
                className="h-auto w-full rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="wave-divider text-background">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden>
            <path
              fill="currentColor"
              d="M0,32 C240,64 480,0 720,24 C960,48 1200,64 1440,24 L1440,64 L0,64 Z"
            />
          </svg>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-brand uppercase">Why Jalamithra</p>
          <h2 className="section-title text-3xl sm:text-4xl">Friend of water, built for everyday life</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="soft-panel rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-brand to-brand-light" />
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-brand uppercase">Services</p>
              <h2 className="section-title text-3xl sm:text-4xl">Solutions that fit your source</h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-brand hover:text-brand-deep">
              View all services →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-line bg-gradient-to-br from-white to-[#eaf4fc] p-6 transition hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
              >
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-brand-deep via-brand to-brand-light px-6 py-12 text-white sm:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for clearer, healthier water?
              </h2>
              <p className="mt-3 max-w-xl text-sky-50/95">
                Tell us about your well, river, or line supply — we will help you choose the right
                Jalamithra filter for your home or institution.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-sky-50"
              >
                Contact Us
              </Link>
            </div>
            <ul className="space-y-3 text-sm text-sky-50">
              <li className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">Kalikavu, Malappuram</li>
              <li className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">Mon–Sat · 8:00 AM – 6:00 PM</li>
              <li className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">+91 90370 37373</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
