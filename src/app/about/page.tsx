import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About APA Jalamithra"
        description="A Kerala-based water solutions company building natural filtration systems that bring clarity and confidence to everyday water."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="section-title text-3xl sm:text-4xl">Friend of water since day one</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              APA Jalamithra Water Solution Private Limited manufactures and supplies natural water
              filters designed for Indian households and institutions. Our systems use natural nelli
              slate and other stones — no power connection required — so water keeps flowing at the
              same speed as before, with better clarity and quality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From homes and hotels to schools and places of worship, Jalamithra filters are built to
              serve well, river, pond, stream, canal, and line water sources with minimal ongoing
              maintenance after installation.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-brand pl-4">
                <p className="text-sm text-muted">Based in</p>
                <p className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-semibold text-brand-deep">
                  Kalikavu, Malappuram
                </p>
              </div>
              <div className="border-l-2 border-brand-light pl-4">
                <p className="text-sm text-muted">Focus</p>
                <p className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-semibold text-brand-deep">
                  Natural water filtration
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand/8 blur-xl" />
            <Image
              src="/images/products.png"
              alt="Jalamithra filtration equipment"
              width={900}
              height={700}
              className="relative w-full rounded-[1.6rem] border border-line bg-white object-contain p-6 shadow-[0_20px_50px_rgba(8,53,110,0.08)]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
