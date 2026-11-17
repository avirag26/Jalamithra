import Link from "next/link";
import Reveal from "@/components/Reveal";

type Props = {
  headline: string;
  copy?: string;
  cta: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function CtaBand({ headline, copy, cta, secondary }: Props) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#02101c] via-[#063a6b] to-[#0a5ea8] px-6 py-14 text-center text-white sm:px-12 lg:py-16">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl"
          aria-hidden
        />
        <h2 className="display relative mx-auto max-w-3xl text-3xl sm:text-4xl">{headline}</h2>
        {copy ? (
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
            {copy}
          </p>
        ) : null}
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link href={cta.href} className="btn-primary bg-white !text-brand-deep hover:!bg-sky-50">
            {cta.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn-ghost">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
