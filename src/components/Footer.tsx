import Image from "next/image";
import Link from "next/link";
import { company, solutionLinks } from "@/lib/site";

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/quality-certification", label: "Quality and Certification" },
  { href: "/media", label: "Media and News" },
  { href: "/managing-director", label: "Managing Director" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer mt-auto border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="APA Jalamithra"
            width={150}
            height={58}
            className="mb-4 h-11 w-auto object-contain"
          />
          <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
            Water purification, rainwater filtration and natural filtration for homes, businesses
            and institutions across Kerala.
          </p>
          <p className="mt-4 inline-flex rounded-full border border-line bg-soft px-3 py-1 text-xs font-semibold text-brand-deep">
            ISO 9001:2015 Certified
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase">
            Solutions
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            {solutionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase">
            Company
          </p>
          <ul className="space-y-2.5 text-sm text-foreground/70">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-deep">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase">
            Visit
          </p>
          <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/70">
            <li>{company.addressLines[0]}</li>
            <li>{company.addressLines[1]}</li>
            <li>
              <a href={`mailto:${company.email}`} className="break-all hover:text-brand-deep">
                {company.email}
              </a>
            </li>
            <li>
              <a href={company.phoneHref} className="font-semibold text-brand hover:text-brand-deep">
                {company.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {company.legalName}
      </div>
    </footer>
  );
}
