import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow = "APA Jalamithra", title, description }: Props) {
  return (
    <section className="page-hero">
      <div className="relative z-[1] mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="animate-rise mb-4 text-sm font-semibold tracking-[0.18em] text-sky-100/90 uppercase">
          {eyebrow}
        </p>
        <h1 className="animate-rise-delay-1 max-w-3xl font-[family-name:var(--font-outfit)] text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-sky-50/95 sm:text-lg">
          {description}
        </p>
        <div className="animate-rise-delay-2 mt-8">
          <Link href="/contact" className="btn-ghost text-sm">
            Talk to us
          </Link>
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
  );
}
