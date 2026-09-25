import Image from "next/image";
import Link from "next/link";
import { lifestyle } from "@/lib/products";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow = "APA Jalamithra", title, description }: Props) {
  return (
    <section className="page-hero">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={lifestyle.river}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02101c] via-[#02101c]/88 to-[#0a4d87]/55" />
      </div>
      <div className="relative z-[1] mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-sky-200/90 uppercase">
          {eyebrow}
        </p>
        <h1 className="display max-w-3xl text-4xl text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-50/90 sm:text-lg">
          {description}
        </p>
        <Link href="/contact" className="btn-ghost mt-8 inline-flex">
          Talk to us
        </Link>
      </div>
    </section>
  );
}
