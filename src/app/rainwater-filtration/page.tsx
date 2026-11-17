import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProseSections from "@/components/ProseSections";
import Reveal from "@/components/Reveal";
import { lifestyle } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "Rainwater Filtration in Kerala | Planned Systems by Jalamithra" },
  description:
    "Plan rainwater filtration for your rooftop or tank with Jalamithra. Site assessment, system design and clear guidance from Malappuram.",
  keywords: [
    "rainwater filtration Kerala",
    "rainwater filtration systems Kerala",
    "rainwater filtration Malappuram",
  ],
};

const systemParts = [
  "Catchment surface",
  "Gutters and downpipes",
  "First-flush arrangement",
  "Filtration stage",
  "Storage tank",
  "Distribution to point of use",
];

export default function RainwaterFiltrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Rainwater Filtration"
        title="Rainwater filtration, planned from roof to tap"
        description="Rain is one of the most accessible water sources a building can use. A roof collects it, a pipe carries it and a tank holds it. The part that often gets less attention is the stage in between, where the water is cleaned and prepared for use. That stage is where rainwater filtration does its work, and it is where Jalamithra spends much of its planning effort."
        image={lifestyle.nature}
        cta={{ href: "/contact", label: "Book a Rainwater Site Assessment" }}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "Why Rainwater Deserves Better Use",
                paragraphs: [
                  "Rainwater falls freely, but it does not arrive clean. As it runs off a roof, it picks up leaves, dust, grit and whatever else sits on the surface. Storage tanks can add sediment over time. Treating rainwater as a resource means accepting that it needs managing. Used well, it can reduce pressure on other sources and give households and properties a supply they control.",
                ],
              },
              {
                heading: "Why Filtration Matters",
                paragraphs: [
                  "Filtration removes or reduces particles and debris so that the water is more pleasant to use and easier to treat further if needed. It also protects storage systems and pumps from clogging. Filtration does not turn every rainwater supply into drinking water, and any use for drinking should be guided by appropriate treatment and testing.",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* System journey */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal as="p" className="eyebrow mb-3">
              From Rainwater Collection to Usable Water
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Every part of the system affects the others
            </Reveal>
            <Reveal as="p" delay={2} className="mt-5 text-base leading-relaxed text-foreground/75">
              A practical rainwater system has several parts: the catchment surface, the gutters
              and downpipes, the first-flush arrangement where it is used, the filtration stage,
              the storage tank and the distribution to the point of use. Each part affects the
              others. A good filter placed in the wrong position will not perform well, and a clean
              tank will not stay clean if the filtration upstream is neglected.
            </Reveal>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {systemParts.map((part, index) => (
              <Reveal
                as="li"
                key={part}
                delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
                className={`relative list-none rounded-2xl border p-5 ${
                  part === "Filtration stage"
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white"
                }`}
              >
                <span
                  className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                    part === "Filtration stage" ? "text-sky-100" : "text-brand"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  className={`display mt-2 text-lg ${
                    part === "Filtration stage" ? "text-white" : "text-brand-deep"
                  }`}
                >
                  {part}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "The Role of Proper Filtration",
                paragraphs: [
                  "Proper filtration is about matching the filter to the water and the system. It involves sizing, placement, access for cleaning and a clear maintenance routine. Our planning focuses on making these elements work together.",
                ],
              },
              {
                heading: "Jalamithra's Rainwater Filtration Approach",
                paragraphs: [
                  "We begin with a site assessment: the roof area, the gutters, the tank size, the local rainfall pattern and the intended use. From there we recommend a filtration arrangement and explain how it should be installed and maintained. We keep the system understandable, so that the people who live or work with it know what to check and when.",
                ],
              },
              {
                heading: "Natural Filtration Concept",
                paragraphs: [
                  "The promotional material associated with our rainwater work refers to natural filtration involving amla (Indian gooseberry, known as nellikka in Malayalam), iron-removing stones and a natural filtration process. These materials are part of a traditional approach that we consider alongside other methods. We do not present them as a guarantee that all contaminants are removed, and filtered rainwater should not be assumed safe to drink without appropriate treatment. We explain the concept in terms of what it supports within a designed system.",
                ],
              },
              {
                heading: "Where Rainwater Filtration Can Be Considered",
                paragraphs: [
                  "Rainwater filtration can be relevant for residential rooftops, storage tanks, farms, workshops and other premises where rain is collected. We assess each case individually, since roof material, surroundings and usage all influence the right design.",
                ],
              },
            ]}
          />
        </div>
      </section>

      <div className="bg-white">
        <CtaBand
          headline="Turn your rooftop into a planned water resource."
          cta={{ href: "/contact", label: "Book a Rainwater Site Assessment" }}
        />
      </div>
    </>
  );
}
