import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About APA Jalamithra"
        description="A Kerala water solutions company focused on natural filtration that feels simple and works every day."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Our story</p>
            <h2 className="section-title text-3xl sm:text-4xl">Friend of water</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              APA Jalamithra Water Solution manufactures natural water filters for Indian households
              and institutions. Our systems use nelli slate and other stones — no power required —
              so water keeps flowing at the same speed, with better clarity.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From homes and hotels to schools and places of worship, we serve well, river, pond,
              stream, canal and line water with minimal upkeep after installation.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-line pt-4">
                <p className="text-sm text-muted">Based in</p>
                <p className="display mt-1 text-xl text-brand-deep">Kalikavu, Malappuram</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-sm text-muted">Focus</p>
                <p className="display mt-1 text-xl text-brand-deep">Natural filtration</p>
              </div>
            </div>
          </div>
          <Image
            src="/images/products.png"
            alt="Jalamithra filtration equipment"
            width={800}
            height={620}
            className="w-full bg-white object-contain p-4"
          />
        </div>
      </section>
    </>
  );
}
