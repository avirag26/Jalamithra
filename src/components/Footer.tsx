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
    <footer className="mt-auto border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.1fr] lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="APA Jalamithra"
            width={150}
            height={58}
            className="mb-4 h-11 w-auto object-contain"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Natural, electricity-free water filtration for homes and institutions across Kerala.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-deep">
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
          <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
            <li>Enadhi, Alipetta House</li>
            <li>Kalikavu, Malappuram — 676525</li>
            <li>
              <a href="mailto:jalamithrapallipuram@gmail.com" className="hover:text-brand-deep">
                jalamithrapallipuram@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919037037373" className="hover:text-brand-deep">
                +91 90370 37373
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} APA Jalamithra Water Solution
      </div>
    </footer>
  );
}
