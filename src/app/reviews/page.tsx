import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Customer Review" };

const reviews = [
  {
    name: "Fathima R.",
    place: "Kalikavu",
    quote:
      "Our well water looked cloudy for years. After the Jalamithra filter, the clarity changed — and the flow feels the same.",
  },
  {
    name: "Hotel Green Pearl",
    place: "Malappuram",
    quote:
      "We needed a solution that does not depend on electricity. Installation was smooth and upkeep is almost none.",
  },
  {
    name: "School Admin",
    place: "Nilambur belt",
    quote: "Parents asked about drinking water. The natural filter setup gave us a practical answer.",
  },
  {
    name: "Abdul K.",
    place: "River-side home",
    quote: "We use river water. After fitting, taste and look improved. The team explained everything clearly.",
  },
  {
    name: "Community Hall",
    place: "Enadhi",
    quote: "Good for high usage days. No drop in speed, and visitors notice cleaner water.",
  },
  {
    name: "Sneha M.",
    place: "Residential",
    quote: "Natural and no daily fuss. Sample reviews can be replaced with real quotes anytime.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Customer reviews"
        description="Families and institutions across Malappuram trust Jalamithra for clearer everyday water."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name}>
              <blockquote className="text-[1rem] leading-relaxed text-foreground/90">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-semibold text-brand-deep">{review.name}</p>
                <p className="text-sm text-muted">{review.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
