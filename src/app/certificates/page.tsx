import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Certificates" };

const certs = [
  {
    title: "Quality commitment",
    text: "Natural media filters assembled and fitted so every install meets clarity and flow expectations.",
  },
  {
    title: "Company registration",
    text: "APA Jalamithra Water Solution Private Limited — active company registered with ROC Ernakulam.",
  },
  {
    title: "Documentation",
    text: "Download the sample certificate PDF. Replace with official reports when available.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        title="Certificates & credentials"
        description="Trust starts with transparency. Review credentials and open the certificate document."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-3">
          {certs.map((item, i) => (
            <Reveal key={item.title} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
              <p className="text-xs font-semibold tracking-[0.16em] text-brand/70 uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-3 text-xl text-brand-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={2} className="cert-banner mt-14 px-6 py-12 text-center sm:px-10">
          <h2 className="section-title text-2xl sm:text-3xl">Certificate document</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Open the PDF included with this sample website.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/images/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View PDF
            </a>
            <Link href="/contact" className="btn-secondary">
              Request copies
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
