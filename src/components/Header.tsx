"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Service" },
  { href: "/certificates", label: "Certificates" },
  { href: "/vision-mission", label: "Vision & Mission" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 shadow-[0_8px_30px_rgba(8,53,110,0.04)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-10 flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="APA Jalamithra logo"
            width={160}
            height={64}
            className="h-11 w-auto max-w-[140px] object-contain sm:h-12 sm:max-w-none"
            priority
            sizes="140px"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active}
                className={`nav-link rounded-lg px-3 py-2 text-[0.9rem] font-medium ${
                  active ? "text-brand-deep" : "text-muted hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-primary hidden px-4 py-2.5 text-sm lg:inline-flex">
            Get Clean Water
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-deep transition hover:border-brand/30 hover:bg-soft xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-base font-medium transition ${
                    active
                      ? "bg-brand text-white shadow-md shadow-brand/20"
                      : "text-foreground hover:bg-soft"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 justify-center"
            >
              Get Clean Water
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
