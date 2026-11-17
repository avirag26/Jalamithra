"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/site";

const requirements = [
  "Water Purification",
  "Rainwater Filtration",
  "Natural Filtration",
  "Not sure yet",
];

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Location: ${get("location")}`,
      `Water requirement: ${get("requirement")}`,
      "",
      get("message"),
    ].join("\n");

    const subject = `Water enquiry: ${get("requirement")} (${get("name")})`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="section-title text-2xl sm:text-3xl">Request a Water Solution</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Use the form below to start a conversation. The more we know about your water, the better
        we can help.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-brand-deep">
          Name
          <input required name="name" autoComplete="name" className="input-field" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-brand-deep">
          Phone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input-field"
            placeholder="+91 ..."
          />
        </label>
        <label className="block text-sm font-medium text-brand-deep">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="input-field"
            placeholder="you@example.com"
          />
        </label>
        <label className="block text-sm font-medium text-brand-deep">
          Location
          <input
            required
            name="location"
            autoComplete="address-level2"
            className="input-field"
            placeholder="Town / district"
          />
        </label>
        <label className="block text-sm font-medium text-brand-deep sm:col-span-2">
          Water requirement
          <select required name="requirement" className="input-field" defaultValue="">
            <option value="" disabled>
              Choose what you need
            </option>
            {requirements.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-brand-deep sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="input-field resize-y"
            placeholder="Where does your water come from, and what do you need it for?"
          />
        </label>
      </div>
      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
        Send Your Water Enquiry
      </button>
      {sent ? (
        <p className="mt-4 text-sm text-muted" role="status">
          Your email app should open with the enquiry filled in. If it does not, call us on{" "}
          <a href={company.phoneHref} className="font-semibold text-brand">
            {company.phoneDisplay}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
