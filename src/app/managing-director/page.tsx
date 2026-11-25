import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProseSections from "@/components/ProseSections";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: { absolute: "Ashraf Dosth, Managing Director | Jalamithra" },
  description:
    "Meet Ashraf Dosth, entrepreneur, social worker and Managing Director of Jalamithra Pvt. Ltd.",
  keywords: ["Ashraf Dosth Jalamithra", "Jalamithra Managing Director"],
};

/**
 * The content brief marks this message as "suggested copy requiring MD approval, not a verified
 * quotation". Set to true only once Ashraf Dosth has approved the wording.
 */
const MD_MESSAGE_APPROVED = false;

export default function ManagingDirectorPage() {
  return (
    <>
      <PageHero
        eyebrow="Managing Director"
        title="Ashraf Dosth"
        description="Entrepreneur, International Social and Charity Worker and Managing Director, Jalamithra Pvt. Ltd."
        cta={{ href: "/about-us", label: "Meet Our Leadership Team" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-14">
          <Reveal className="mx-auto w-full max-w-sm">
            <figure className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src={gallery.mdPortrait.src}
                alt="Portrait of Ashraf Dosth, Managing Director of Jalamithra Pvt. Ltd."
                width={gallery.mdPortrait.width}
                height={gallery.mdPortrait.height}
                priority
                sizes="(max-width: 1024px) 384px, 40vw"
                className="h-auto w-full"
                quality={90}
              />
              <figcaption className="bg-brand-deep px-5 py-4 text-center text-white">
                <p className="display text-xl">Ashraf Dosth</p>
                <p className="mt-1 text-xs leading-relaxed text-sky-100/85">
                  Entrepreneur, International Social and Charity Worker &amp; MD, Jalamithra Pvt.
                  Ltd.
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal as="p" className="eyebrow mb-3">
              Leadership Introduction
            </Reveal>
            <Reveal as="h2" delay={1} className="section-title text-3xl sm:text-4xl">
              Leadership rooted in enterprise and service.
            </Reveal>
            <Reveal as="p" delay={2} className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
              Ashraf Dosth leads Jalamithra as its Managing Director. His work brings together
              entrepreneurship and social commitment, and that combination gives the company its
              character: practical in its business, and rooted in service to people.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProseSections
            sections={[
              {
                heading: "Entrepreneurial Perspective",
                paragraphs: [
                  "An entrepreneurial approach to water means taking a basic need seriously and building a business that can deliver real solutions for it. Under his leadership, Jalamithra focuses on purification, rainwater filtration and natural filtration as practical answers to everyday water questions.",
                ],
              },
              {
                heading: "Social Commitment",
                paragraphs: [
                  "As an international social and charity worker, Ashraf Dosth brings a belief that enterprise should serve more than its own growth. This shapes Jalamithra's view that water solutions are a matter of responsibility as well as business.",
                ],
              },
              {
                heading: "Vision for Jalamithra",
                paragraphs: [
                  "The vision is a company that makes water solutions clearer, more reliable and more accessible to the people who need them, grounded in a quality management system and honest guidance.",
                ],
              },
              {
                heading: "Leadership Philosophy",
                paragraphs: [
                  "The leadership approach emphasises honest work, careful planning and respect for the people who depend on the company's services.",
                ],
              },
            ]}
          />
        </div>
      </section>

      {MD_MESSAGE_APPROVED ? (
        <section className="py-16 lg:py-24">
          <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="eyebrow mb-6 justify-center">Message from the Managing Director</p>
            <blockquote className="display text-2xl leading-snug text-brand-deep sm:text-3xl">
              &ldquo;Water is something we all share, and we rarely think about it until something
              goes wrong. At Jalamithra, we try to think about it every day, on behalf of the
              families, businesses and communities we serve. I started this work because I believe
              that good water solutions should be practical, honest and built with care. Our task is
              to help people use the water they have as well as it can be used, and to do it in a
              way they can trust.&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-brand-deep">Ashraf Dosth</p>
            <p className="text-sm text-muted">Managing Director, Jalamithra Pvt. Ltd.</p>
          </Reveal>
        </section>
      ) : null}

      <div className={MD_MESSAGE_APPROVED ? "" : "pt-16 lg:pt-24"}>
        <CtaBand
          headline="Tell us about your water. We will start from there."
          cta={{ href: "/contact", label: "Start Your Water Enquiry" }}
          secondary={{ href: "/about-us", label: "Meet Our Leadership Team" }}
        />
      </div>
    </>
  );
}
