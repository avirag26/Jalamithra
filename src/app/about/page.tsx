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
        description="We are a Kerala-based water solutions company building natural filtration systems that bring clarity and confidence to everyday water."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-brand uppercase">Our Story</p>
            <h2 className="section-title text-3xl sm:text-4xl">Friend of water since day one</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
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
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="soft-panel rounded-2xl p-5">
                <dt className="text-sm text-muted">Based in</dt>
                <dd className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-semibold text-brand-deep">
                  Kalikavu, Malappuram
                </dd>
              </div>
              <div className="soft-panel rounded-2xl p-5">
                <dt className="text-sm text-muted">Focus</dt>
                <dd className="mt-1 font-[family-name:var(--font-outfit)] text-lg font-semibold text-brand-deep">
                  Natural water filtration
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.8rem] bg-brand/10 blur-md" />
            <Image
              src="/images/products.png"
              alt="Jalamithra filtration equipment"
              width={900}
              height={700}
              className="relative w-full rounded-[1.5rem] border border-line bg-white object-contain p-4 shadow-lg shadow-brand/10"
            />
          </div>
        </div>
      </section>
    </>
  );
}
