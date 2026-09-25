import Image from "next/image";
import Reveal from "@/components/Reveal";
import { lifestyle } from "@/lib/products";

const chapters = [
  {
    num: "01",
    title: "It begins at your source",
    text: "Well, river, pond, canal or line water — Kerala families already know their water. We start there, not with a one-size filter.",
    image: lifestyle.river,
    align: "left" as const,
  },
  {
    num: "02",
    title: "Nature does the filtering",
    text: "Nelli slate and natural stones sit in quiet layers. No electricity. No chemical dosing. Water keeps its familiar flow.",
    image: lifestyle.nature,
    align: "right" as const,
  },
  {
    num: "03",
    title: "Clarity reaches every tap",
    text: "What you notice first is the look and taste. What stays is trust — for homes, hotels, schools and places of worship.",
    image: lifestyle.glass,
    align: "left" as const,
  },
];

export default function StorySection() {
  return (
    <section className="storytell relative overflow-hidden">
      <div className="storytell-glow" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal as="p" className="eyebrow mb-3 justify-center">
            Our story
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl lg:text-[2.85rem]">
            From source to glass
          </Reveal>
          <Reveal delay={2} as="p" className="mt-4 text-muted">
            APA Jalamithra is a friend of water — a simple path from what you already use to water
            you feel better about.
          </Reveal>
        </div>

        <div className="storytell-path">
          <div className="storytell-line" aria-hidden />

          {chapters.map((chapter, index) => (
            <Reveal
              key={chapter.num}
              delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              className={`storytell-chapter storytell-chapter--${chapter.align}`}
            >
              <div className="storytell-media">
                <Image
                  src={chapter.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                  quality={90}
                />
                <div className="storytell-media-shine" aria-hidden />
              </div>
              <div className="storytell-copy">
                <span className="storytell-num">{chapter.num}</span>
                <h3 className="display mt-3 text-2xl text-brand-deep sm:text-3xl lg:text-[2.15rem]">
                  {chapter.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-foreground/75">{chapter.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
