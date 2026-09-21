import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "100% Natural Media",
    text: "Filters crafted with nelli slate and natural stones — no chemicals, no electricity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3c-2.8 3.4-6 6.9-6 10.2A6 6 0 0 0 12 19a6 6 0 0 0 6-5.8C18 9.9 14.8 6.4 12 3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Same Flow Speed",
    text: "Water keeps flowing at your usual pressure after installation — use as much as you need.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 12h12M12 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Zero Daily Upkeep",
    text: "Fit it once for homes, hotels, schools, and places of worship — then drink with confidence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7 12.5l3 3 7-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Domestic Filtration",
    href: "/services",
    text: "Clear, healthy water for every tap at home.",
  },
  {
    title: "Institutional Systems",
    href: "/services",
    text: "Reliable supply for schools, hotels & community spaces.",
  },
  {
    title: "Source Treatment",
    href: "/services",
    text: "Well, river, pond, canal and line-water solutions.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-stage">
        <div className="hero-aurora" aria-hidden />
        <div className="hero-orb hero-orb-1" aria-hidden />
        <div className="hero-orb hero-orb-2" aria-hidden />
        <div className="hero-orb hero-orb-3" aria-hidden />
        <div className="hero-bubbles" aria-hidden>
          {[
            { left: "8%", size: 10, delay: "0s", duration: "11s" },
            { left: "18%", size: 6, delay: "1.4s", duration: "9s" },
            { left: "32%", size: 14, delay: "0.6s", duration: "13s" },
            { left: "48%", size: 8, delay: "2.2s", duration: "10s" },
            { left: "62%", size: 12, delay: "0.9s", duration: "12s" },
            { left: "74%", size: 7, delay: "1.8s", duration: "8.5s" },
            { left: "86%", size: 11, delay: "0.3s", duration: "14s" },
            { left: "94%", size: 5, delay: "2.8s", duration: "9.5s" },
          ].map((bubble) => (
            <span
              key={`${bubble.left}-${bubble.duration}`}
              className="hero-bubble"
              style={{
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                animationDelay: bubble.delay,
                animationDuration: bubble.duration,
              }}
            />
          ))}
        </div>
        <div className="hero-waves" aria-hidden>
          <svg className="wave-a" viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path
              fill="rgba(255,255,255,0.08)"
              d="M0,70 C180,120 360,20 540,70 C720,120 900,40 1080,80 C1260,120 1350,60 1440,80 L1440,140 L0,140 Z"
            />
            <path
              fill="rgba(255,255,255,0.08)"
              transform="translate(1440,0)"
              d="M0,70 C180,120 360,20 540,70 C720,120 900,40 1080,80 C1260,120 1350,60 1440,80 L1440,140 L0,140 Z"
            />
          </svg>
          <svg className="wave-b" viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path
              fill="rgba(180,220,255,0.12)"
              d="M0,90 C200,40 400,120 600,80 C800,40 1000,110 1200,70 C1320,45 1380,70 1440,60 L1440,140 L0,140 Z"
            />
            <path
              fill="rgba(180,220,255,0.12)"
              transform="translate(1440,0)"
              d="M0,90 C200,40 400,120 600,80 C800,40 1000,110 1200,70 C1320,45 1380,70 1440,60 L1440,140 L0,140 Z"
            />
          </svg>
        </div>

        <div className="relative z-[1] mx-auto grid max-w-7xl items-center gap-10 px-4 pt-12 pb-10 sm:px-6 sm:pt-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-16 lg:pb-6">
          <div className="max-w-xl">
            <p className="animate-rise mb-3 text-sm font-semibold tracking-[0.2em] text-sky-100/90 uppercase">
              APA Jalamithra
            </p>
            <Image
              src="/images/logo.png"
              alt="APA Jalamithra"
              width={280}
              height={112}
              priority
              className="animate-rise mb-5 hidden h-[4.25rem] w-auto rounded-2xl bg-white object-contain p-2.5 shadow-[0_18px_40px_rgba(3,39,79,0.28)] sm:block"
            />
            <h1 className="animate-rise-delay-1 font-[family-name:var(--font-outfit)] text-[2.55rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Pure water,
              <span className="mt-1 block text-sky-100">naturally filtered.</span>
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-lg text-[1.05rem] leading-relaxed text-sky-50/95">
              Electricity-free natural water filters for Kerala families and institutions — clearer,
              healthier water from the sources you already use.
            </p>
            <div className="animate-rise-delay-2 mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-deep shadow-[0_14px_30px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Request a Visit
              </Link>
              <Link href="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[420px] xl:max-w-[460px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-white/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/25 bg-white/10 p-4 shadow-[0_30px_80px_rgba(3,39,79,0.35)] backdrop-blur-md">
              <Image
                src="/images/products.png"
                alt="APA Jalamithra water filtration systems"
                width={900}
                height={700}
                className="h-auto w-full rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="wave-divider text-background">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
            <path
              fill="currentColor"
              d="M0,40 C180,70 360,10 540,35 C720,60 900,75 1080,45 C1260,15 1350,25 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Why Jalamithra</p>
          <h2 className="section-title text-3xl sm:text-4xl">Friend of water, built for everyday life</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Simple installation. Natural filtration. Water that looks and feels better — without
            changing how you use it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-transparent bg-transparent p-1 transition hover:border-line"
            >
              <div className="h-full rounded-[1.35rem] px-1 py-2 transition group-hover:bg-white/70 group-hover:px-5 group-hover:py-6">
                <div className="feature-icon mb-5">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Services</p>
              <h2 className="section-title text-3xl sm:text-4xl">Solutions that fit your source</h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-brand transition hover:text-brand-deep"
            >
              View all services →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group border-t border-line pt-6 transition hover:border-brand"
              >
                <span className="font-[family-name:var(--font-outfit)] text-sm font-bold tracking-wider text-brand-light">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-outfit)] text-2xl font-semibold text-brand-deep transition group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-deep via-brand to-brand-light px-7 py-12 text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-sky-200/20 blur-2xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for clearer, healthier water?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-sky-50/95">
                Tell us about your well, river, or line supply — we will help you choose the right
                Jalamithra filter for your home or institution.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-deep transition hover:bg-sky-50"
              >
                Contact Us
              </Link>
            </div>

            <div className="space-y-3 text-sm text-sky-50">
              <p className="border-b border-white/15 pb-3">Kalikavu, Malappuram</p>
              <p className="border-b border-white/15 pb-3">Mon–Sat · 8:00 AM – 6:00 PM</p>
              <p>
                <a href="tel:+919037037373" className="transition hover:text-white">
                  +91 90370 37373
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
