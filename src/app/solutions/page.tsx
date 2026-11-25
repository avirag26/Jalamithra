import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/gallery";
import { lifestyle } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "Water Solutions in Kerala | Purification, Rainwater and Natural Filtration" },
  description:
    "Explore Jalamithra's water purification, rainwater filtration and natural filtration solutions, designed around your source and needs.",
  keywords: [
    "water filtration solutions Kerala",
    "water purification solutions Kerala",
    "water solutions Kerala",
  ],
};

const solutions = [
  {
    title: "Water Purification",
    image: lifestyle.glass,
    need: "Water that looks clear can still be unsuitable for drinking or cooking. Households and businesses often need a dependable way to improve the water they use every day.",
    approach:
      "We assess the water source and its intended use, then recommend a purification method suited to those conditions. We explain what the system is designed to do and how it should be maintained.",
    benefits:
      "Clearer decisions about water quality, systems matched to the actual source, and guidance on upkeep.",
    suitable: "Homes, offices, shops, schools and small commercial kitchens.",
    cta: { href: "/water-purification", label: "Discuss Your Purification Needs" },
  },
  {
    title: "Rainwater Filtration",
    image: lifestyle.nature,
    need: "Rain collected from roofs and tanks carries debris and sediment. Without proper filtration, the water is difficult to use with confidence.",
    approach:
      "We plan the filtration stage as part of the whole rainwater system, considering the catchment area, the storage and the point of use.",
    benefits:
      "Better use of collected rainwater, a system designed around the building, and clearer expectations for the filtration stage.",
    suitable:
      "Residential rooftops, storage tanks, farms, and commercial premises that collect rainwater.",
    cta: { href: "/rainwater-filtration", label: "Plan a Rainwater System" },
  },
  {
    title: "Natural Filtration",
    image: lifestyle.river,
    need: "Many people want simpler, more traditional filtration methods that can sit comfortably alongside modern treatment.",
    approach:
      "We use natural filtration media, including amla (Indian gooseberry) and iron-removing stones, within carefully designed systems. We explain their role honestly and design around their limits.",
    benefits:
      "A traditional material base, straightforward system design, and a clear explanation of what the approach does.",
    suitable:
      "Customers who prefer natural approaches and sites where the system can be designed and serviced properly.",
    cta: { href: "/natural-filtration", label: "Explore Natural Filtration" },
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Our solutions"
        description="Jalamithra's solutions begin with the water itself. Each approach we offer addresses a different stage of the water journey, from the source to the point of use. Browse the areas below to see how we work and where each solution fits."
        cta={{ href: "/contact", label: "Request a Water Solution" }}
      />

      <section className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6 lg:space-y-24 lg:px-8 lg:py-24">
        {solutions.map((item, index) => (
          <article
            key={item.title}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <Reveal
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-soft ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={75}
              />
            </Reveal>
            <Reveal delay={1}>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="section-title mt-2 text-3xl sm:text-4xl">{item.title}</h2>
              <dl className="mt-6 space-y-5 text-[0.98rem] leading-relaxed">
                {(
                  [
                    ["The need", item.need],
                    ["Our approach", item.approach],
                    ["Key benefits", item.benefits],
                    ["Suitable for", item.suitable],
                  ] as const
                ).map(([label, text]) => (
                  <div key={label} className="border-l-2 border-brand-light/60 pl-4">
                    <dt className="font-semibold text-brand-deep">{label}</dt>
                    <dd className="mt-1 text-foreground/75">{text}</dd>
                  </div>
                ))}
              </dl>
              <Link href={item.cta.href} className="btn-primary mt-8">
                {item.cta.label}
              </Link>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <Reveal as="p" className="eyebrow mb-3 justify-center">
              Filter Vessels
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              The Jalamithra filter range
            </Reveal>
            <Reveal as="p" delay={2} className="mt-4 text-base leading-relaxed text-foreground/75">
              Natural filter vessels in sizes from 10x35 to 14x65. We recommend the size after
              looking at your source, your storage and how much water you use each day.
            </Reveal>
          </div>
          <Reveal delay={2} className="overflow-hidden rounded-2xl border border-line bg-soft">
            <a href={gallery.filterRange.src} target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src={gallery.filterRange.src}
                alt="Jalamithra natural water filter vessels in sizes 10x35, 8x44, 10x54, 12x48, 13x54 and 14x65"
                width={gallery.filterRange.width}
                height={gallery.filterRange.height}
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="h-auto w-full"
                quality={90}
              />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Tell us about your water. We will start from there."
        cta={{ href: "/contact", label: "Start Your Water Enquiry" }}
      />
    </>
  );
}
