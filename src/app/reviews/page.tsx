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
        description="Families and institutions across Malappuram trust Jalamithra for clearer everyday water."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col border-t border-line pt-6"
            >
              <div className="mb-4 flex gap-1 text-brand" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-foreground/90">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-[family-name:var(--font-outfit)] font-semibold text-brand-deep">
                  {review.name}
                </p>
                <p className="mt-0.5 text-sm text-muted">{review.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
