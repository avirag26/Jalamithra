import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Vision and Mission" };

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Vision and mission"
        description="Jalamithra means friend of water — healthier communities through natural, dependable filtration."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="bg-[#041c33] p-8 text-white sm:p-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-sky-200 uppercase">Vision</p>
            <h2 className="display mt-4 text-3xl text-white">Clear water without compromise.</h2>
            <p className="mt-4 text-sky-100/85">
              Communities where wells, rivers and line water are trusted again — filtered naturally,
              without electricity dependency.
            </p>
          </article>
          <article className="border border-line bg-white p-8 sm:p-10">
            <p className="eyebrow mb-3">Mission</p>
            <h2 className="section-title text-3xl">Filtration that just works.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              {[
                "Natural media that improves clarity and addresses common salinity concerns.",
                "Simple installation that preserves normal water flow.",
                "Honest guidance for homes, hotels, schools and places of worship.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
