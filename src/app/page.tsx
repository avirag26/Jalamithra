import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import VideoCard from "@/components/VideoCard";
import { gallery, videos } from "@/lib/gallery";
import { lifestyle } from "@/lib/products";
import { certificate } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Water Purification and Rainwater Filtration in Kerala | Jalamithra" },
  description:
    "Jalamithra offers water purification, rainwater filtration and natural filtration solutions from Malappuram, Kerala. ISO 9001:2015 certified.",
  keywords: [
    "water purification company Kerala",
    "water filtration company Kerala",
    "Jalamithra",
    "APA Jalamithra",
    "water filtration solutions Kerala",
  ],
};

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

const solutions: {
  title: string;
  href: string;
  description: string;
  problem: string;
  why: string;
  cta: string;
  icon: ReactNode;
}[] = [
  {
    title: "Water Purification",
    href: "/water-purification",
    description:
      "Purification systems designed around the water source and the way the water will be used, whether for drinking, cooking or general domestic and commercial use.",
    problem:
      "Uncertainty about whether the water coming from a source is suitable for its intended use.",
    why: "Clear, well-chosen purification gives people confidence in what they drink and use every day.",
    cta: "Learn About Water Purification",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3c-2.8 3.4-6 6.9-6 10.2A6 6 0 0 0 12 19a6 6 0 0 0 6-5.8C18 9.9 14.8 6.4 12 3z" />
        <path d="m9.5 13 2 2 3-3.5" />
      </svg>
    ),
  },
  {
    title: "Rainwater Filtration",
    href: "/rainwater-filtration",
    description:
      "Filtration approaches that help collected rainwater become cleaner and more usable, with system design that fits the building and the household or facility.",
    problem:
      "Rainwater collected from roofs and tanks often carries debris and sediment that needs to be managed before use.",
    why: "Rainwater is a resource that many places can use better, and proper filtration is what turns collection into usable water.",
    cta: "Explore Rainwater Filtration",
    icon: (
      <svg {...iconProps}>
        <path d="M17.5 14a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3 2.5A3.8 3.8 0 0 0 6.5 15" />
        <path d="M8 17v2M12 15v4M16 17v2" />
      </svg>
    ),
  },
  {
    title: "Natural Filtration",
    href: "/natural-filtration",
    description:
      "An approach that uses natural filtration media, including materials such as amla and iron-removing stones, within a carefully planned system.",
    problem:
      "The need for simple, understandable filtration methods that work alongside modern quality standards.",
    why: "Natural approaches can complement other treatment methods when they are designed and maintained properly.",
    cta: "Discover Natural Filtration",
    icon: (
      <svg {...iconProps}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
        <path d="M2 21c0-3 1.9-5.4 5.1-6" />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Solutions Shaped by the Source",
    text: "No two water problems are the same. A tank fed by rain, a well in a coastal area and a commercial kitchen all require different thinking. We begin by asking where the water comes from and what it will be used for. That question shapes everything we recommend, from the filter type to the way the system is installed. The result is a solution that matches the water rather than a catalogue item forced onto a site that does not need it.",
  },
  {
    title: "A Quality System, Not Just Good Intentions",
    text: "Good intentions are not enough when people depend on the water you supply. Our ISO 9001:2015 certification means our work is governed by a documented quality management system for the scope of purifying various types of water. This gives our processes structure, repeatability and accountability, so that the standard of a project does not depend on who happens to be handling it on a given day.",
  },
  {
    title: "Honest Advice Over Quick Sales",
    text: "Some customers come to us after being sold a system that did not fit their needs. We would rather tell you clearly what your water requires and what it does not. Sometimes the right answer is a simple filter. Sometimes it is a more involved rainwater system. Sometimes the best recommendation is to make a small change to how an existing setup is used. We would rather earn trust through honest guidance than through a fast order.",
  },
  {
    title: "Rainwater Filtration as a Serious Practice",
    text: "Rainwater harvesting is an idea many people support, but collecting rainwater is only the first step. What happens after collection decides whether the water is useful. We treat rainwater filtration as a practice in its own right, with proper attention to the stages between the roof and the tap. This is an area where planning and design make a real difference.",
  },
  {
    title: "Natural Materials With Practical Discipline",
    text: "Natural filtration appeals to people who want simpler, more traditional methods. We take that interest seriously, but we pair it with practical discipline. Natural media need correct system design, sensible sizing and regular maintenance to perform as intended. We are clear about what a natural approach can and cannot do, and we design around those limits.",
  },
  {
    title: "Local Roots and a Wider Purpose",
    text: "Jalamithra is rooted in Malappuram and works across Kerala. We understand the climate, the buildings and the daily habits of the people here, and that local understanding shapes how we work. Our Managing Director's background in social and charitable work reflects a broader belief that water solutions should serve people, not only customers.",
  },
];

const delayFor = (index: number) => ((index % 4) + 1) as 1 | 2 | 3 | 4;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <Reveal as="p" className="eyebrow mb-4">
              APA Jalamithra Water Solution
            </Reveal>
            <Reveal as="h1" className="section-title text-4xl sm:text-5xl lg:text-[3.4rem]">
              Water, handled with care and a clear purpose.
            </Reveal>
            <Reveal as="p" delay={1} className="mt-6 text-base leading-relaxed text-foreground/75 sm:text-lg">
              Jalamithra works on purifying and filtering water for homes, businesses and
              institutions across Kerala. From rainwater filtration to practical purification
              systems, we focus on the water people actually use every day and on finding the right
              approach for each situation. Our work is built on quality management, careful
              planning and a belief that good water is a shared responsibility.
            </Reveal>
            <Reveal delay={2} className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a Water Solution
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore Our Solutions
              </Link>
            </Reveal>
          </div>

          <Reveal delay={2} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-soft">
            <Image
              src={lifestyle.home}
              alt="Clean water being used at home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={75}
            />
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-line bg-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:px-6 md:grid-cols-[auto_1fr_auto] md:gap-10 lg:px-8">
          <Reveal className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-line bg-white text-center">
            <span className="display text-lg text-brand-deep">ISO</span>
            <span className="text-[0.65rem] font-semibold tracking-wide text-brand">9001:2015</span>
          </Reveal>
          <Reveal as="p" delay={1} className="text-[0.98rem] leading-relaxed text-foreground/75">
            Jalamithra operates under an ISO 9001:2015 quality management system certification for
            the scope of purifying various types of water. The certificate is issued to APA
            Jalamithra Water Solution Private Limited, Alipetta House, Enadhi, Kalikavu,
            Malappuram. Our work has also been covered in local newspapers, and our Managing
            Director has been featured in the press for his entrepreneurial and social work.
          </Reveal>
          <Reveal delay={2}>
            <Link href="/quality-certification" className="btn-primary whitespace-nowrap">
              View Our Certification
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-soft lg:sticky lg:top-28 lg:self-start">
            <Image
              src={lifestyle.river}
              alt="Water flowing through a natural landscape in Kerala"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              quality={75}
            />
          </Reveal>
          <div>
            <Reveal as="p" className="eyebrow mb-3">
              About Jalamithra
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Staying close to water and the people who depend on it
            </Reveal>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
              <Reveal as="p" delay={1}>
                Jalamithra is a water solutions company based in Malappuram, Kerala. The name
                points to what we set out to do: stay close to water, its quality and the people
                who depend on it. We look at water as something that moves through homes, farms,
                rooftops and communities, and we design our solutions around that reality rather
                than around a single product.
              </Reveal>
              <Reveal as="p" delay={2}>
                Our approach begins with understanding the source and the purpose. Rainwater that
                falls on a roof carries different concerns from a borewell, and a family&apos;s
                drinking needs differ from a workplace&apos;s requirements. We work through those
                differences carefully, then recommend filtration and purification methods that
                suit the conditions in front of us.
              </Reveal>
              <Reveal as="p" delay={2}>
                We also consider natural filtration where it fits. Some of our work draws on
                traditional materials and simple system design, combined with modern quality
                management, so that solutions remain understandable and maintainable.
              </Reveal>
              <Reveal as="p" delay={3}>
                What we want to contribute is straightforward: dependable water solutions, honest
                advice and a standard of work that the people we serve can rely on. Water is too
                basic to treat casually, and we aim to bring the same seriousness to a small
                household filter as to a larger rainwater project.
              </Reveal>
            </div>
            <Reveal delay={3} className="mt-8">
              <Link href="/about-us" className="btn-secondary">
                More About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-soft py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Reveal as="p" className="eyebrow mb-3 justify-center">
              Our Solutions
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Approaches matched to the water you have
            </Reveal>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <Reveal
                key={item.title}
                delay={delayFor(index)}
                className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-8"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-brand">
                  {item.icon}
                </span>
                <h3 className="display text-2xl text-brand-deep">{item.title}</h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-foreground/75">
                  {item.description}
                </p>
                <dl className="mt-5 space-y-4 border-t border-line pt-5 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-brand-deep">Problem it addresses</dt>
                    <dd className="mt-1 text-foreground/70">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-deep">Why it matters</dt>
                    <dd className="mt-1 text-foreground/70">{item.why}</dd>
                  </div>
                </dl>
                <Link
                  href={item.href}
                  className="mt-auto inline-flex pt-6 text-sm font-semibold text-brand hover:text-brand-deep"
                >
                  {item.cta} →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Reveal as="p" className="eyebrow mb-3 justify-center">
              Our Filter Range
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Natural water filters in sizes for every home
            </Reveal>
            <Reveal as="p" delay={2} className="mt-4 text-base leading-relaxed text-foreground/75">
              Jalamithra filter vessels come in a range of sizes, from compact 10x35 units to
              14x65 vessels, so the system can be matched to the source and the daily demand.
            </Reveal>
          </div>
          <Reveal delay={2} className="overflow-hidden rounded-2xl border border-line bg-soft">
            <a
              href={gallery.filterRange.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={gallery.filterRange.src}
                alt="Jalamithra natural water filter vessels in blue and green, in sizes from 10x35 to 14x65, with Managing Director Ashraf Dosth"
                width={gallery.filterRange.width}
                height={gallery.filterRange.height}
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="h-auto w-full"
                quality={90}
              />
            </a>
          </Reveal>
          <Reveal delay={3} className="mt-8 flex justify-center">
            <Link href="/solutions" className="btn-secondary">
              Explore Our Solutions
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why Jalamithra */}
      <section className="bg-soft py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Reveal as="p" className="eyebrow mb-3 justify-center">
              Why Jalamithra
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Six reasons people trust how we work
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, index) => (
              <Reveal
                key={item.title}
                delay={delayFor(index)}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-2 text-xl text-brand-deep">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/75">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rainwater feature */}
      <section className="relative overflow-hidden bg-[#02101c] text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={lifestyle.nature}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02101c] via-[#02101c]/85 to-[#0a4d87]/40" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:px-8 lg:py-28">
          <div>
            <Reveal as="p" className="mb-3 text-xs font-semibold tracking-[0.18em] text-sky-200/90 uppercase">
              Rainwater Filtration
            </Reveal>
            <Reveal as="h2" delay={1} className="display text-3xl sm:text-4xl lg:text-5xl">
              Your rooftop already collects a resource. Filtration makes it usable.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-6 max-w-2xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
              Rain falling on a roof is one of the most accessible water sources a household or
              facility has. The challenge lies in what happens next. Debris, sediment and
              everything the water picks up on its way down need to be dealt with before the water
              can be used with confidence. Jalamithra designs rainwater filtration with that full
              journey in mind, from collection to the point of use.
            </Reveal>
          </div>
          <Reveal delay={3} className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm">
            <p className="display text-2xl leading-snug">
              Collecting rainwater is the beginning. Filtering it properly is what makes it worth
              using.
            </p>
            <Link href="/rainwater-filtration" className="btn-ghost mt-6 inline-flex">
              Plan Your Rainwater Filtration
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Videos */}
      <section className="bg-soft py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Reveal as="p" className="eyebrow mb-3">
                See Our Work
              </Reveal>
              <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
                From the exhibition floor to the well side.
              </Reveal>
              <Reveal as="p" delay={2} className="mt-5 text-base leading-relaxed text-foreground/75">
                Watch our team explain the Jalamithra filter range to visitors, and see a working
                installation with the customer who relies on it every day.
              </Reveal>
              <Reveal delay={3} className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Request a Site Visit
                </Link>
                <Link href="/media" className="btn-secondary">
                  More in the Media
                </Link>
              </Reveal>
            </div>
            <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2">
              {videos.map((video, index) => (
                <Reveal key={video.src} delay={delayFor(index + 1)}>
                  <VideoCard video={video} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ISO quality */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
          <div>
            <Reveal as="p" className="eyebrow mb-3">
              Quality
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              A certified commitment to how we work.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-6 text-base leading-relaxed text-foreground/75">
              Jalamithra holds ISO 9001:2015 certification for the scope of purifying various
              types of water. ISO 9001 is a quality management standard. It describes how an
              organisation plans its processes, controls its work, responds to customer needs and
              improves over time. Certification means the way we operate is documented, reviewed
              and open to audit. It is a framework for consistency, not a promise that any single
              product will perform in every condition, and we are honest about that distinction.
            </Reveal>
            <Reveal delay={3} className="mt-8">
              <Link href="/quality-certification" className="btn-primary">
                View Our Certification
              </Link>
            </Reveal>
          </div>
          <Reveal
            delay={2}
            className="grid items-center gap-6 rounded-2xl border border-line bg-soft p-6 sm:grid-cols-[0.8fr_1fr] sm:p-8"
          >
            <Link
              href="/quality-certification#certificate"
              className="mx-auto block w-full max-w-[260px] overflow-hidden rounded-xl border border-line bg-white shadow-sm"
            >
              <Image
                src={gallery.isoCertificate.src}
                alt="ISO 9001:2015 Certificate of Registration issued to APA Jalamithra Water Solution Private Limited"
                width={gallery.isoCertificate.width}
                height={gallery.isoCertificate.height}
                sizes="260px"
                className="h-auto w-full"
                quality={90}
              />
            </Link>
            <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">
              {certificate.standard}
            </p>
            <p className="display mt-2 text-2xl text-brand-deep">Quality Management System</p>
            <dl className="mt-6 grid grid-cols-2 gap-5 text-sm">
              <div>
                <dt className="text-muted">Certificate No.</dt>
                <dd className="mt-1 font-semibold text-brand-deep">{certificate.number}</dd>
              </div>
              <div>
                <dt className="text-muted">Valid until</dt>
                <dd className="mt-1 font-semibold text-brand-deep">{certificate.expiry}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-muted">Scope</dt>
                <dd className="mt-1 font-semibold text-brand-deep">{certificate.scope}</dd>
              </div>
            </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Media + Managing Director */}
      <section className="bg-soft py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-9">
            <Link
              href="/media"
              className="relative mb-6 block aspect-[16/10] overflow-hidden rounded-xl border border-line bg-soft"
            >
              <Image
                src={gallery.kaumudiAward.src}
                alt="Kerala Kaumudi clipping: Jalamithra receives the Kerala Kaumudi award for excellence in clean water conservation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                quality={75}
              />
            </Link>
            <p className="eyebrow mb-3">In the Media</p>
            <h2 className="section-title text-2xl sm:text-3xl">
              Seen in the press, and shaped by real work.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-foreground/75">
              Jalamithra&apos;s work and its leadership have appeared in newspaper coverage in
              Kerala. These features reflect the attention that our projects and our Managing
              Director&apos;s social and entrepreneurial efforts have drawn. We share them here so
              that readers can see the work in print.
            </p>
            <div className="mt-auto pt-7">
              <Link href="/media" className="btn-secondary">
                Read Our Media Coverage
              </Link>
            </div>
          </Reveal>
          <Reveal delay={2} className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-9">
            <Link
              href="/managing-director"
              className="relative mb-6 block aspect-[16/10] overflow-hidden rounded-xl border border-line bg-soft"
            >
              <Image
                src={gallery.mdPortrait.src}
                alt="Ashraf Dosth, Managing Director of Jalamithra Pvt. Ltd."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_20%]"
                quality={75}
              />
            </Link>
            <p className="eyebrow mb-3">Managing Director</p>
            <h2 className="section-title text-2xl sm:text-3xl">
              Leadership rooted in enterprise and service.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-foreground/75">
              Ashraf Dosth is the Managing Director of Jalamithra Pvt. Ltd. He is an entrepreneur
              and an international social and charity worker. His work connects business with a
              commitment to the community, and that combination shapes the way Jalamithra
              approaches water: as a practical service with a human purpose.
            </p>
            <div className="mt-auto pt-7">
              <Link href="/managing-director" className="btn-secondary">
                Meet Our Managing Director
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-soft pt-2">
        <CtaBand
          headline="Tell us about your water. We will start from there."
          copy="Whether your water comes from the sky, a well or a municipal connection, the right solution begins with a conversation about where it comes from and what you need it for. Reach out to Jalamithra and we will look at your situation honestly."
          cta={{ href: "/contact", label: "Start Your Water Enquiry" }}
        />
      </div>
    </>
  );
}
