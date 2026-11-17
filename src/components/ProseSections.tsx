import Reveal from "@/components/Reveal";

export type ProseSection = { heading: string; paragraphs: string[] };

/** Two-column list of headed text sections, used on the long-form solution pages. */
export default function ProseSections({ sections }: { sections: ProseSection[] }) {
  return (
    <div className="divide-y divide-line">
      {sections.map((section) => (
        <Reveal
          key={section.heading}
          className="grid gap-4 py-10 first:pt-0 last:pb-0 md:grid-cols-[0.8fr_1.4fr] md:gap-12"
        >
          <h2 className="section-title text-2xl sm:text-[1.7rem]">{section.heading}</h2>
          <div className="space-y-4">
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-relaxed text-foreground/75">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
