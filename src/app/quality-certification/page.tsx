import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProseSections from "@/components/ProseSections";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/gallery";
import { certificate } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "ISO 9001:2015 Certified Water Company | Jalamithra Kerala" },
  description:
    "Jalamithra holds ISO 9001:2015 certification for purifying various types of water. View certificate details and our quality approach.",
  keywords: [
    "ISO 9001:2015 water purification Kerala",
    "Jalamithra ISO certificate",
    "water filtration company Kerala",
  ],
};

const details: [string, string][] = [
  ["Certificate No.", certificate.number],
  ["Initial Registration", certificate.initialRegistration],
  ["Issuance Date", certificate.issuanceDate],
  ["Expiry", certificate.expiry],
  ["Scope", certificate.scope],
  ["Certified company", certificate.company],
];

export default function QualityCertificationPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality and Certification"
        title="ISO 9001:2015 certified for purifying various types of water"
        description="A documented quality management system that shapes how we plan, deliver and review our work."
        cta={{ href: "#certificate", label: "View Certificate Details" }}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "ISO 9001:2015",
                paragraphs: [
                  "ISO 9001:2015 is an international standard for quality management systems. It sets out requirements for how an organisation plans, controls and improves its processes in order to meet customer expectations consistently.",
                ],
              },
              {
                heading: "What the Certification Represents",
                paragraphs: [
                  "The certification shows that Jalamithra operates a documented quality management system for its scope, which is purifying various types of water. It indicates that our processes are structured, monitored and subject to review. It is not a guarantee that a specific system will perform in every condition.",
                ],
              },
              {
                heading: "Why Quality Management Matters",
                paragraphs: [
                  "Water solutions depend on consistency. A system designed well but installed poorly, or serviced irregularly, will not perform as expected. A quality management system helps reduce these gaps by keeping processes defined and accountable.",
                ],
              },
              {
                heading: "Jalamithra's Quality Approach",
                paragraphs: [
                  "We apply our quality system to assessment, recommendation, installation and follow-up. We aim to document what we do, review how we do it and improve where we can.",
                ],
              },
            ]}
          />
        </div>
      </section>

      <section id="certificate" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <Reveal className="mx-auto w-full max-w-md lg:sticky lg:top-28">
            <a
              href={gallery.isoCertificate.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-sm"
            >
              <Image
                src={gallery.isoCertificate.src}
                alt="ISO 9001:2015 Certificate of Registration issued by ROHS Certification to APA Jalamithra Water Solution Private Limited, certificate number 23DQKS11"
                width={gallery.isoCertificate.width}
                height={gallery.isoCertificate.height}
                sizes="(max-width: 1024px) 448px, 40vw"
                className="h-auto w-full rounded-lg"
                quality={90}
              />
            </a>
            <p className="mt-3 text-center text-xs text-muted">Click the certificate to view it full size.</p>
          </Reveal>
          <Reveal delay={1} className="cert-banner overflow-hidden rounded-3xl border border-line bg-white">
            <div className="border-b border-line bg-soft px-6 py-8 text-center sm:px-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                Certificate Details
              </p>
              <h2 className="section-title mt-2 text-3xl sm:text-4xl">{certificate.standard}</h2>
              <p className="mt-2 text-sm text-muted">Quality Management System</p>
            </div>
            <dl className="grid gap-px bg-line sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className={`bg-white px-6 py-5 sm:px-8 ${
                    label === "Certified company" || label === "Scope" ? "sm:col-span-2" : ""
                  }`}
                >
                  <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                    {label}
                  </dt>
                  <dd className="display mt-1.5 text-lg text-brand-deep">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap justify-center gap-3 border-t border-line px-6 py-8">
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Our Certificate
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Read about our quality approach, then tell us about your water."
        cta={{ href: "/contact", label: "Start Your Water Enquiry" }}
      />
    </>
  );
}
