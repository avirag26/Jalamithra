import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Jalamithra in the Media | Newspaper Coverage" },
  description:
    "Read newspaper coverage of Jalamithra's water work and its Managing Director's social and entrepreneurial efforts.",
  keywords: ["Jalamithra media", "APA Jalamithra news", "Jalamithra Kerala"],
};

/**
 * Newspaper clippings. Add each scanned clipping to /public/images/media/ and list it here.
 * Caption: describe only what is visible on the page.
 * Title / publication / date: leave undefined until confirmed from the original page.
 */
type Clipping = {
  src: string;
  width: number;
  height: number;
  caption: string;
  title?: string;
  publication?: string;
  date?: string;
};

const clippings: Clipping[] = [];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media and News"
        title="Jalamithra in the Media"
        description="Jalamithra's work and its leadership have been covered in newspapers in Kerala. These features give readers a view of our projects and our Managing Director's social and entrepreneurial efforts, as reported in print."
        cta={{ href: "/contact", label: "Contact Our Media Team" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 max-w-2xl">
          <Reveal as="p" className="eyebrow mb-3">
            Featured Coverage
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
            Newspaper features
          </Reveal>
          <Reveal as="p" delay={2} className="mt-4 text-base leading-relaxed text-foreground/75">
            Each feature is shown with its original image, so that the coverage appears exactly as
            published.
          </Reveal>
        </div>

        {clippings.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clippings.map((clip, index) => (
              <Reveal
                key={clip.src}
                delay={((index % 4) + 1) as 1 | 2 | 3 | 4}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <figure>
                  <a href={clip.src} target="_blank" rel="noopener noreferrer" className="block bg-soft">
                    <Image
                      src={clip.src}
                      alt={clip.caption}
                      width={clip.width}
                      height={clip.height}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full"
                      quality={90}
                    />
                  </a>
                  <figcaption className="p-5">
                    {clip.title ? (
                      <p className="display text-lg text-brand-deep">{clip.title}</p>
                    ) : null}
                    {clip.publication || clip.date ? (
                      <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-brand uppercase">
                        {[clip.publication, clip.date].filter(Boolean).join(" · ")}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">{clip.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="rounded-2xl border border-dashed border-line bg-white px-6 py-14 text-center">
            <p className="display text-xl text-brand-deep">Media gallery</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Newspaper clippings featuring Jalamithra will appear here.
            </p>
          </Reveal>
        )}
      </section>

      <CtaBand
        headline="Writing about water? We are happy to talk."
        cta={{ href: "/contact", label: "Contact Our Media Team" }}
      />
    </>
  );
}
