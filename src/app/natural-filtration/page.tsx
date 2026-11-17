import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProseSections from "@/components/ProseSections";
import Reveal from "@/components/Reveal";
import { lifestyle } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "Natural Water Filtration in Kerala | Jalamithra" },
  description:
    "Learn how Jalamithra uses amla and iron-removing stones within designed natural filtration systems, with honest guidance on what they do.",
  keywords: [
    "natural water filtration Kerala",
    "water filtration solutions Kerala",
    "natural filtration Malappuram",
  ],
};

const media = [
  {
    name: "Amla (Indian gooseberry, nellikka)",
    text: "A traditional material that features in our natural filtration concept.",
  },
  {
    name: "Iron-removing stones",
    text: "Materials referred to in our promotional literature as part of the natural filtration approach.",
  },
  {
    name: "Natural filtration process",
    text: "The overall concept in which these materials are arranged within a system.",
  },
];

export default function NaturalFiltrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Natural Filtration"
        title="Natural filtration, designed and explained honestly"
        description="Natural filtration refers to approaches that use naturally derived materials to help filter water. These methods are often simple in concept and can be easy to understand, though they still require sound design and regular upkeep."
        image={lifestyle.river}
        cta={{ href: "/contact", label: "Ask About Natural Filtration" }}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "What Natural Filtration Means",
                paragraphs: [
                  "Natural filtration refers to approaches that use naturally derived materials to help filter water. These methods are often simple in concept and can be easy to understand, though they still require sound design and regular upkeep.",
                ],
              },
              {
                heading: "Why Natural Materials Are Being Considered",
                paragraphs: [
                  "Natural materials interest people who prefer traditional approaches or who want filtration that does not depend entirely on complex equipment. They can also be part of a layered system alongside other methods.",
                ],
              },
              {
                heading: "Jalamithra's Approach",
                paragraphs: [
                  "We use natural media within designed systems and explain their role clearly. We match the approach to the source and the purpose, and we are open about what the system can and cannot achieve.",
                ],
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal as="p" className="eyebrow mb-3">
            Filtration Media
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
            The materials in our natural filtration concept
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {media.map((item, index) => (
              <Reveal
                key={item.name}
                delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-brand uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-2 text-xl text-brand-deep">{item.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/75">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "The Role of Proper System Design",
                paragraphs: [
                  "Natural media perform best when the system around them is sound. This includes correct sizing, flow management, access for cleaning and a maintenance schedule. Design is what turns a natural material into a dependable part of a water solution.",
                ],
              },
              {
                heading: "Where the Approach Can Be Relevant",
                paragraphs: [
                  "Natural filtration may suit customers who prefer traditional approaches, sites where systems can be serviced easily, and projects where natural media form one stage of a broader treatment plan.",
                ],
              },
              {
                heading: "Responsible Water Treatment",
                paragraphs: [
                  "We believe natural filtration should be presented honestly. It is one tool among several, and its suitability depends on the water and the setting. We encourage customers to consider testing and appropriate treatment where the intended use requires it.",
                ],
              },
            ]}
          />
        </div>
      </section>

      <div className="bg-white">
        <CtaBand
          headline="Curious whether natural filtration fits your site?"
          cta={{ href: "/contact", label: "Ask About Natural Filtration" }}
        />
      </div>
    </>
  );
}
