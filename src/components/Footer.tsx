import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Service" },
  { href: "/certificates", label: "Certificates" },
  { href: "/vision-mission", label: "Vision & Mission" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1.1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="APA Jalamithra"
            width={180}
            height={72}
            className="mb-5 h-14 w-auto rounded-xl bg-white object-contain p-2"
          />
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-sky-100/85">
            Natural, electricity-free water filtration for homes, institutions, and communities
            across Kerala.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-outfit)] text-lg font-semibold">Explore</h3>
          <ul className="space-y-2.5 text-sm text-sky-100/85">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-outfit)] text-lg font-semibold">Visit Us</h3>
          <ul className="space-y-2.5 text-sm leading-relaxed text-sky-100/85">
            <li>Enadhi, Alipetta House</li>
            <li>Kalikavu, Malappuram — 676525</li>
            <li>
              <a href="mailto:jalamithrapallipuram@gmail.com" className="hover:text-white">
                jalamithrapallipuram@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919037037373" className="hover:text-white">
                +91 90370 37373
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs tracking-wide text-sky-100/60 sm:px-6">
        © {new Date().getFullYear()} APA Jalamithra Water Solution. All rights reserved.
      </div>
    </footer>
  );
}
