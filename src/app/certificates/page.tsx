import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Certificates",
};

const certs = [
  {
    title: "Quality Commitment",
    text: "Our natural media filters are assembled and fitted with process discipline so every installation meets clarity and flow expectations.",
  },
  {
    title: "Company Registration",
    text: "APA Jalamithra Water Solution Private Limited is an active private limited company registered with ROC Ernakulam, Kerala.",
  },
  {
    title: "Documentation Pack",
    text: "Download the certificate document included with this sample site. Replace with official ISO or lab reports as they are issued.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        title="Certificates & Credentials"
        description="Trust starts with transparency. Review our company credentials and download the certificate document provided with this sample site."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {certs.map((item, index) => (
            <article key={item.title} className="border-t-2 border-brand/20 pt-6">
              <span className="font-[family-name:var(--font-outfit)] text-sm font-bold text-brand-light">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[1.75rem] bg-white px-6 py-12 text-center shadow-[0_16px_40px_rgba(8,53,110,0.06)] ring-1 ring-line sm:px-10">
          <p className="eyebrow mx-auto mb-3 justify-center">Documents</p>
          <h2 className="section-title text-2xl sm:text-3xl">Certificate document</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Open or download the PDF placed in the project assets for this sample website.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/images/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View certificate PDF
            </a>
            <Link href="/contact" className="btn-secondary">
              Request official copies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
