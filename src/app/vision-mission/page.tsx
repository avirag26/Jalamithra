import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Vision and Mission",
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision and Mission"
        description="Jalamithra means friend of water — our north star is healthier communities powered by natural, dependable filtration."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-deep to-brand p-8 text-white sm:p-11">
            <div className="pointer-events-none absolute -right-10 -bottom-12 h-44 w-44 rounded-full bg-white/10" />
            <p className="text-sm font-semibold tracking-[0.18em] text-sky-100 uppercase">Vision</p>
            <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight">
              Every Kerala home deserves clear water without compromise.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sky-50/95">
              We envision communities where wells, rivers, and line water are trusted sources again —
              filtered naturally, without electricity dependency, and accessible to families and
              institutions alike.
            </p>
          </article>

          <article className="rounded-[1.75rem] bg-white p-8 shadow-[0_16px_40px_rgba(8,53,110,0.05)] ring-1 ring-line sm:p-11">
            <p className="eyebrow mb-3">Mission</p>
            <h2 className="section-title text-3xl">Deliver natural filtration that just works.</h2>
            <ul className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-muted">
              {[
                "Design filters with natural media that improve clarity and address common salinity concerns.",
                "Keep installation simple and preserve normal water flow after fitting.",
                "Serve homes, hotels, schools, and places of worship with honest guidance and lasting support.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 text-center">
          <p className="eyebrow mx-auto mb-4 justify-center">Our values</p>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {["Natural first", "Flow preserved", "Trust & clarity"].map((value) => (
              <p
                key={value}
                className="border-b border-line pb-4 font-[family-name:var(--font-outfit)] text-lg font-semibold text-brand-deep"
              >
                {value}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
