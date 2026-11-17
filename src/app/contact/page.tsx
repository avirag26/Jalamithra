import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Jalamithra | Water Solutions in Malappuram, Kerala" },
  description:
    "Contact APA Jalamithra in Kalikavu, Malappuram. Call +91 7592 994 949 or send a water enquiry online.",
  keywords: [
    "water filtration company Malappuram",
    "water purification Malappuram",
    "Jalamithra contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Jalamithra"
        description="Whether you have a question about your water, a rainwater project in mind or a site that needs a considered solution, we are glad to hear from you. Share a few details and we will take it from there."
        cta={{ href: company.phoneHref, label: `Call ${company.phoneDisplay}` }}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <p className="eyebrow mb-3">Talk to Jalamithra</p>
              <p className="text-base leading-relaxed text-foreground/75">
                Call us on{" "}
                <a href={company.phoneHref} className="font-semibold text-brand hover:text-brand-deep">
                  {company.phoneDisplay}
                </a>{" "}
                or visit us at {company.addressShort}. We are happy to discuss your water situation
                over the phone or in person.
              </p>
            </Reveal>
            <Reveal delay={1} className="border-t border-line pt-5">
              <p className="eyebrow mb-2">Office</p>
              <p className="font-semibold text-brand-deep">{company.legalName}</p>
              <p className="mt-1 text-foreground/75">
                {company.addressLines[0]}
                <br />
                {company.addressLines[1]}
              </p>
            </Reveal>
            <Reveal delay={2} className="border-t border-line pt-5">
              <p className="eyebrow mb-2">Reach</p>
              <p className="text-foreground/75">
                Phone:{" "}
                <a className="font-semibold text-brand hover:text-brand-deep" href={company.phoneHref}>
                  {company.phoneDisplay}
                </a>
                <br />
                Email:{" "}
                <a
                  className="font-semibold break-all text-brand hover:text-brand-deep"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
              </p>
            </Reveal>
            <Reveal delay={3} className="rounded-2xl bg-soft p-6">
              <p className="display text-xl text-brand-deep">Request a Water Solution</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                Tell us where your water comes from and what you need it for. We will respond with
                an honest view of what suits your situation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={2} className="rounded-2xl border border-line bg-white p-6 sm:p-9">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
