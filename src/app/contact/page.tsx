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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="soft-panel rounded-2xl p-6">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                Office
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Enadhi, Alipetta House
                <br />
                Kalikavu, Malappuram — 676525
                <br />
                Kerala, India
              </p>
            </div>
            <div className="soft-panel rounded-2xl p-6">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                Call / Email
              </h2>
              <p className="mt-2 text-sm text-muted">
                <a className="font-medium text-brand hover:underline" href="tel:+919037037373">
                  +91 90370 37373
                </a>
                <br />
                <a
                  className="font-medium text-brand hover:underline"
                  href="mailto:jalamithrapallipuram@gmail.com"
                >
                  jalamithrapallipuram@gmail.com
                </a>
              </p>
            </div>
            <div className="soft-panel rounded-2xl p-6">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-semibold text-brand-deep">
                Hours
              </h2>
              <p className="mt-2 text-sm text-muted">Monday – Saturday · 8:00 AM to 6:00 PM</p>
              <p className="text-sm text-muted">Sunday · Holiday</p>
            </div>
          </div>

          <form className="soft-panel rounded-[1.5rem] p-6 sm:p-8" action="#" method="post">
            <h2 className="section-title text-2xl sm:text-3xl">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Sample contact form for this demo — wire it to your email or CRM when you go live.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-brand-deep">
                Name
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-brand/30 focus:ring-2"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-brand-deep">
                Phone
                <input
                  required
                  name="phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-brand/30 focus:ring-2"
                  placeholder="+91 ..."
                />
              </label>
              <label className="block text-sm font-medium text-brand-deep sm:col-span-2">
                Email
                <input
                  name="email"
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-brand/30 focus:ring-2"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-sm font-medium text-brand-deep sm:col-span-2">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1.5 w-full resize-y rounded-xl border border-line bg-white px-3 py-2.5 outline-none ring-brand/30 focus:ring-2"
                  placeholder="Tell us about your water source and need..."
                />
              </label>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Submit enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
