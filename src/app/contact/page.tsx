import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Reach APA Jalamithra for a site visit, product guidance, or institutional quotation. We respond during business hours."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-2">Office</p>
              <p className="text-base leading-relaxed text-muted">
                Enadhi, Alipetta House
                <br />
                Kalikavu, Malappuram — 676525
                <br />
                Kerala, India
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Call / Email</p>
              <p className="text-base leading-relaxed text-muted">
                <a className="font-semibold text-brand transition hover:text-brand-deep" href="tel:+919037037373">
                  +91 90370 37373
                </a>
                <br />
                <a
                  className="font-semibold text-brand transition hover:text-brand-deep"
                  href="mailto:jalamithrapallipuram@gmail.com"
                >
                  jalamithrapallipuram@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2">Hours</p>
              <p className="text-base leading-relaxed text-muted">
                Monday – Saturday · 8:00 AM to 6:00 PM
                <br />
                Sunday · Holiday
              </p>
            </div>
          </div>

          <form
            className="rounded-[1.75rem] bg-white p-6 shadow-[0_16px_40px_rgba(8,53,110,0.06)] ring-1 ring-line sm:p-9"
            action="#"
            method="post"
          >
            <h2 className="section-title text-2xl sm:text-3xl">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Share your water source and need — we will get back to you.
            </p>

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
                  placeholder="Tell us about your water source and need..."
                />
              </label>
            </div>

            <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
