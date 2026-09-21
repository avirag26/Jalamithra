import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow = "APA Jalamithra", title, description }: Props) {
  return (
    <section className="hero-wash relative overflow-hidden text-white">
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-sky-300/20 blur-xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="animate-rise mb-3 text-sm font-semibold tracking-[0.18em] text-sky-100 uppercase">
          {eyebrow}
        </p>
        <h1 className="animate-rise-delay-1 section-title max-w-3xl text-4xl text-white sm:text-5xl">
          {title}
        </h1>
        <p className="animate-rise-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-sky-50/95 sm:text-lg">
          {description}
        </p>
        <div className="animate-rise-delay-2 mt-6">
          <Link href="/contact" className="btn-ghost text-sm">
            Talk to us
          </Link>
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
  );
}
