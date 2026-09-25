"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="APA Jalamithra"
            width={150}
            height={58}
            className="h-10 w-auto object-contain sm:h-11"
            priority
            sizes="140px"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-[0.82rem] font-medium tracking-wide transition xl:px-3 xl:text-[0.84rem] ${
                  active ? "text-brand-deep" : "text-muted hover:text-brand-deep"
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
            className={`hamburger-btn lg:hidden ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`menu-overlay lg:hidden ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside className={`menu-drawer lg:hidden ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-brand uppercase">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            className="hamburger-btn is-open"
            onClick={() => setOpen(false)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav key={open ? "open" : "closed"} className="flex flex-col gap-2.5 px-4 py-5">
          {links.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`menu-step menu-box text-center ${active ? "is-active" : ""}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="menu-step menu-cta mt-3"
            style={{ animationDelay: `${links.length * 0.07}s` }}
          >
            <span className="menu-cta-icon" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3c-2.8 3.4-6 6.9-6 10.2A6 6 0 0 0 12 19a6 6 0 0 0 6-5.8C18 9.9 14.8 6.4 12 3z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Get Clean Water
          </Link>
        </nav>
      </aside>
    </header>
  );
}
