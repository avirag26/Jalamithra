import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Customer Review",
};

const reviews = [
  {
    name: "Fathima R.",
    place: "Kalikavu",
    quote:
      "Our well water looked cloudy for years. After the Jalamithra filter, the clarity changed within days — and the flow feels the same.",
  },
  {
    name: "Hotel Green Pearl",
    place: "Malappuram",
    quote:
      "We needed a solution that does not depend on electricity for guest floors. Installation was smooth and maintenance is almost none.",
  },
  {
    name: "School Admin",
    place: "Nilambur belt",
    quote:
      "Parents asked about drinking water quality. The natural filter setup gave us a practical answer without complicated machines.",
  },
  {
    name: "Abdul K.",
    place: "River-side home",
    quote:
      "We use river water at home. After fitting, the taste and look improved. The team explained everything clearly.",
  },
  {
    name: "Community Hall Committee",
    place: "Enadhi",
    quote:
      "Good for high usage days. No drop in speed, and visitors notice the cleaner water at the taps.",
  },
  {
    name: "Sneha M.",
    place: "Residential customer",
    quote:
      "I liked that it is natural and needs no daily fuss. Sample reviews here can be replaced with real customer quotes anytime.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        description="Families and institutions across Malappuram trust Jalamithra for clearer everyday water. Sample voices for this demo site."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="soft-panel flex h-full flex-col rounded-2xl p-6">
              <div className="mb-4 flex gap-1 text-brand" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-[family-name:var(--font-outfit)] font-semibold text-brand-deep">
                  {review.name}
                </p>
                <p className="text-xs text-muted">{review.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
