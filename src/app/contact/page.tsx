import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { lifestyle } from "@/lib/products";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Reach us for a site visit, product guidance or institutional quotation."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal className="relative mb-10 aspect-[16/11] overflow-hidden bg-soft">
              <Image
                src={lifestyle.river}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                quality={85}
              />
            </Reveal>
            <div className="space-y-8">
              <Reveal delay={1} className="border-t border-line pt-4">
                <p className="eyebrow mb-2">Office</p>
                <p className="text-foreground/75">
                  Enadhi, Alipetta House
                  <br />
                  Kalikavu, Malappuram — 676525
                </p>
              </Reveal>
              <Reveal delay={2} className="border-t border-line pt-4">
                <p className="eyebrow mb-2">Reach</p>
                <p className="text-foreground/75">
                  <a className="font-semibold text-brand hover:text-brand-deep" href="tel:+919037037373">
                    +91 90370 37373
                  </a>
                  <br />
                  <a
                    className="font-semibold text-brand hover:text-brand-deep"
                    href="mailto:jalamithrapallipuram@gmail.com"
                  >
                    jalamithrapallipuram@gmail.com
                  </a>
                </p>
              </Reveal>
              <Reveal delay={3} className="border-t border-line pt-4">
                <p className="eyebrow mb-2">Hours</p>
                <p className="text-foreground/75">
                  Mon–Sat · 8:00 AM – 6:00 PM
                  <br />
                  Sunday · Holiday
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={2} className="border border-line bg-white p-6 sm:p-9">
            <form action="#" method="post">
              <h2 className="section-title text-2xl sm:text-3xl">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted">Share your water source and need.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-brand-deep">
                  Name
                  <input required name="name" className="input-field" placeholder="Your name" />
                </label>
                <label className="block text-sm font-medium text-brand-deep">
                  Phone
                  <input required name="phone" type="tel" className="input-field" placeholder="+91 ..." />
                </label>
                <label className="block text-sm font-medium text-brand-deep sm:col-span-2">
                  Email
                  <input name="email" type="email" className="input-field" placeholder="you@example.com" />
                </label>
                <label className="block text-sm font-medium text-brand-deep sm:col-span-2">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="input-field resize-y"
                    placeholder="Tell us about your water source..."
                  />
                </label>
              </div>
              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                Submit enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
