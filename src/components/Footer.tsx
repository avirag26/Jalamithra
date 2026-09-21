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
    <footer className="mt-auto border-t border-line bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="APA Jalamithra"
            width={180}
            height={72}
            className="mb-4 h-14 w-auto rounded-lg bg-white/95 object-contain p-1.5"
          />
          <p className="max-w-sm text-sm leading-relaxed text-sky-100/90">
            APA Jalamithra delivers natural, electricity-free water filtration for homes,
            institutions, and communities across Kerala — pure water, made simple.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-[family-name:var(--font-outfit)] text-lg font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm text-sky-100/90">
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
          <h3 className="mb-3 font-[family-name:var(--font-outfit)] text-lg font-semibold">Visit Us</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-sky-100/90">
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

      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-sky-100/70 sm:px-6">
        © {new Date().getFullYear()} APA Jalamithra Water Solution. All rights reserved.
      </div>
    </footer>
  );
}
