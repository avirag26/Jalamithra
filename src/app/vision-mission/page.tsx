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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-brand-deep to-brand p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-white/10" />
            <p className="text-sm font-semibold tracking-[0.18em] text-sky-100 uppercase">Vision</p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight">
              Every Kerala home deserves clear water without compromise.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-sky-50/95">
              We envision communities where wells, rivers, and line water are trusted sources again —
              filtered naturally, without electricity dependency, and accessible to families and
              institutions alike.
            </p>
          </article>

          <article className="soft-panel rounded-[1.6rem] p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">Mission</p>
            <h2 className="mt-3 section-title text-3xl">
              Deliver natural filtration that just works.
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                Design filters with natural media that improve clarity and address common salinity concerns.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                Keep installation simple and preserve normal water flow after fitting.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                Serve homes, hotels, schools, and places of worship with honest guidance and lasting support.
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-dashed border-brand/30 bg-brand/5 px-6 py-8 text-center">
          <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold text-brand-deep">
            Values that guide every fitting
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["Natural first", "Flow preserved", "Trust & clarity"].map((value) => (
              <p
                key={value}
                className="rounded-xl bg-white px-4 py-4 text-sm font-semibold text-brand-deep shadow-sm"
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
