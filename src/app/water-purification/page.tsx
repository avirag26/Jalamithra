import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProseSections from "@/components/ProseSections";
import { lifestyle } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: "Water Purification Company in Kerala | Jalamithra" },
  description:
    "Practical water purification solutions from Jalamithra in Malappuram, Kerala, matched to your water source and intended use.",
  keywords: [
    "water purification company in Kerala",
    "water purification Malappuram",
    "water purification solutions Kerala",
  ],
};

export default function WaterPurificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Water Purification"
        title="Water purification matched to your source"
        description="Water purification is the process of improving water so that it is suitable for a particular use. There is no single answer that suits every source."
        image={lifestyle.glass}
        cta={{ href: "/contact", label: "Request a Purification Assessment" }}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "What Water Purification Means",
                paragraphs: [
                  "Water purification is the process of improving water so that it is suitable for a particular use. The right method depends on where the water comes from, what it contains and what it will be used for. There is no single answer that suits every source.",
                ],
              },
              {
                heading: "Why Purification Matters",
                paragraphs: [
                  "Water affects health, cooking, cleaning and daily comfort. When the quality of water is uncertain, people are left guessing. Purification gives them a clearer basis for decisions and a more reliable routine.",
                ],
              },
              {
                heading: "Understanding Different Water Needs",
                paragraphs: [
                  "Drinking water, kitchen water and general domestic water are not always the same. A household may need one system for drinking and another for washing. A business may have different requirements again. Understanding these differences is the first step toward a sensible setup.",
                ],
              },
              {
                heading: "Choosing the Right Approach",
                paragraphs: [
                  "We look at the source, the volume of water used, the storage arrangements and the maintenance the user can realistically provide. A well-chosen system is one that fits these factors and can be kept in good working order. We would rather recommend a modest system that is properly maintained than an elaborate one that is neglected.",
                ],
              },
              {
                heading: "Jalamithra's Role",
                paragraphs: [
                  "Jalamithra assesses, recommends, plans and supports purification solutions. We explain what each option does, what it cannot do and what it requires in terms of care, so that customers can use their water with informed confidence.",
                ],
              },
              {
                heading: "Quality and Responsibility",
                paragraphs: [
                  "Our work is guided by an ISO 9001:2015 quality management system for the scope of purifying various types of water. This means our processes are documented and reviewed. We do not claim that any system removes every contaminant, and we do not present purification as a replacement for testing where testing is needed.",
                ],
              },
            ]}
          />
        </div>
      </section>

      <div className="bg-white">
        <CtaBand
          headline="Not sure what your water needs? Start with a conversation."
          cta={{ href: "/contact", label: "Request a Purification Assessment" }}
        />
      </div>
    </>
  );
}
