import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { lifestyle } from "@/lib/products";

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const pillars: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Our Vision",
    text: "Our dream is to see Jalamithra grow from Kerala into a company serving all of India within the next five years. We want organic water purification to be at the heart of everything we do, and to grow with that commitment.",
    icon: (
      <svg {...iconProps}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Our Mission",
    text: "Our mission is to help people get safe, purified water for their everyday needs, whether at home or at work. Clean water should never feel like a luxury.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Our Methodology",
    text: "We build our filters around natural and organic filtration methods. Our focus is on simple, dependable systems that work well in daily use and need little effort from the user.",
    icon: (
      <svg {...iconProps}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
        <path d="M2 21c0-3 1.9-5.4 5.1-6" />
      </svg>
    ),
  },
  {
    title: "Our Promise / Quality Policy",
    text: "Our confidence comes from our customers. Some Jalamithra purifiers were installed 14 years ago and have run without any complaints or service needs. That record is why we stand behind every product we sell. If anyone has doubts, we are happy to let our track record speak for itself.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Proven for 14 Years and Counting",
    text: "Some of our purifiers were installed 14 years ago, and those customers have had no complaints and needed no service. That is the kind of reliability we build into every filter.",
  },
  {
    title: "Natural and Organic Filtration",
    text: "We believe water can be purified the natural way. Our filtration methods are built around organic principles, because clean water should feel clean at its source too.",
  },
  {
    title: "Safe Water for Everyday Life",
    text: "Drinking, cooking, or running a business, our filters are made to give you pure water for the things you do every day.",
  },
  {
    title: "For Homes and Businesses",
    text: "From a small family kitchen to shops, offices, and commercial spaces, we have the right water filter for your needs.",
  },
  {
    title: "A Promise We Stand Behind",
    text: "We are confident in our products, and we say it openly: if you have doubts about Jalamithra, look at our track record. It tells the story.",
  },
  {
    title: "Kerala’s Own, Growing Across India",
    text: "Jalamithra started in Kerala and knows its people and its water. Our dream is to bring the same trust to families across India in the next five years.",
  },
];

const delayFor = (index: number) => ((index % 4) + 1) as 1 | 2 | 3 | 4;

export default function HomePage() {
  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <Reveal as="h1" className="section-title text-3xl sm:text-4xl lg:text-5xl">
              APA Jalamithra Water Filter Pvt. Ltd.
            </Reveal>
            <Reveal as="p" delay={1} className="mt-6 text-base leading-relaxed text-foreground/75 sm:text-lg">
              Jalamithra is a water purification brand from Kerala, built on one simple belief:
              natural and organic filtration is the best way to take care of the water we drink.
              Every purifier we make is designed to bring clean, safe water into your home or
              business.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
              We are a growing team that cares about the people we serve. From the day of
              installation to the years that follow, we want to be a partner you can rely on for
              your everyday water needs.
            </Reveal>
            <Reveal delay={3} className="mt-8">
              <Link href="/about" className="btn-primary inline-flex uppercase tracking-wide">
                About Us
              </Link>
            </Reveal>
          </div>

          <Reveal delay={2} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-soft">
            <Image
              src={lifestyle.home}
              alt="Clean water from a Jalamithra purifier at home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-soft py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {pillars.map((item, index) => (
            <Reveal
              key={item.title}
              delay={delayFor(index)}
              className="rounded-2xl border border-line bg-white p-7 sm:p-8"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-brand">
                {item.icon}
              </span>
              <h2 className="display text-2xl text-brand-deep">{item.title}</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground/75">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Reveal as="p" className="eyebrow mb-3 justify-center">
              Why Choose Jalamithra
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Trusted Water Purifier in Kerala
            </Reveal>
            <Reveal as="p" delay={2} className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
              Looking for the best water purifier in Kerala? Choose one that has already proven
              itself in homes for over a decade.
            </Reveal>
            <Reveal delay={3} className="mt-8">
              <Link href="/services" className="btn-primary inline-flex uppercase tracking-wide">
                Explore Water Filters
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, index) => (
              <Reveal
                key={item.title}
                delay={delayFor(index)}
                className="rounded-2xl border border-line bg-background p-7"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-2 text-xl text-brand-deep">{item.title}</h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-foreground/75">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
