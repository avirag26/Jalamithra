import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { lifestyle, scenes } from "@/lib/products";

export default function ProductShowcase() {
  return (
    <section className="story-section relative overflow-hidden">
      <div className="story-atmosphere" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal as="p" className="eyebrow mb-3">
              Pure by nature
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl lg:text-[2.85rem]">
              Water that looks and feels right
            </Reveal>
          </div>
          <Reveal delay={2} as="p" className="max-w-sm text-muted lg:pb-1">
            Electricity-free natural filters for Kerala homes and institutions — clarity without
            changing how water flows.
          </Reveal>
        </div>

        <div className="story-mosaic">
          <Reveal className="story-panel story-panel--hero">
            <div className="story-media">
              <Image
                src={lifestyle.nature}
                alt="Clear natural water"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="story-caption">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-200 uppercase">
                Natural media
              </p>
              <h3 className="display mt-2 text-2xl text-white sm:text-3xl">
                Stones, not chemicals
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-sky-100/85">
                Nelli slate and natural stones do the work — quiet, reliable, power-free.
              </p>
            </div>
          </Reveal>

          {scenes.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              className={`story-panel story-panel--${index + 1}`}
            >
              <div className="story-media">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="story-caption story-caption--light">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                  {item.tag}
                </p>
                <h3 className="display mt-1.5 text-xl text-brand-deep sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3} className="mt-14 flex justify-center">
          <Link href="/contact" className="btn-primary">
            Request a visit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
