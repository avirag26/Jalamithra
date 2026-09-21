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
    text: "Download our sample certificate document shared for this website demo. Replace with official ISO / lab reports as they are issued.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        title="Certificates & Credentials"
        description="Trust starts with transparency. Review our company credentials and download the certificate document provided with this sample site."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {certs.map((item) => (
            <article key={item.title} className="soft-panel rounded-2xl p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 3l2.2 4.5L19 8.3l-3.5 3.4.8 4.8L12 14.8 7.7 16.5l.8-4.8L5 8.3l4.8-.8L12 3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-line bg-white p-8 text-center shadow-sm">
          <h2 className="section-title text-2xl sm:text-3xl">Certificate document</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            Open or download the PDF placed in the project&apos;s image assets for this sample website.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/images/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View certificate PDF
            </a>
            <Link href="/contact" className="inline-flex rounded-full border border-brand px-5 py-3 text-sm font-semibold text-brand hover:bg-brand/5">
              Request official copies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
