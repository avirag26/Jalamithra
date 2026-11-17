export const company = {
  legalName: "APA Jalamithra Water Solution Private Limited",
  brand: "Jalamithra",
  addressLines: ["Alipetta House, Enadhi, Kalikavu", "Malappuram, 676 525, Kerala, India"],
  addressShort: "Alipetta House, Enadhi, Kalikavu",
  phoneDisplay: "+91 7592 994 949",
  phoneHref: "tel:+917592994949",
  email: "jalamithrapallipuram@gmail.com",
} as const;

export type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

export const solutionLinks = [
  { href: "/water-purification", label: "Water Purification" },
  { href: "/rainwater-filtration", label: "Rainwater Filtration" },
  { href: "/natural-filtration", label: "Natural Filtration" },
];

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/solutions", label: "Solutions", children: solutionLinks },
  { href: "/quality-certification", label: "Quality" },
  { href: "/media", label: "Media" },
  { href: "/managing-director", label: "Managing Director" },
  { href: "/contact", label: "Contact" },
];

export const certificate = {
  number: "23DQKS11",
  standard: "ISO 9001:2015",
  initialRegistration: "20/01/2024",
  issuanceDate: "20/01/2024",
  expiry: "20/01/2027",
  scope: "Purifying Various Type of Water",
  company: "APA Jalamithra Water Solution Private Limited",
  /** Replace with the scanned original certificate when available. */
  file: "/images/certificate.pdf",
} as const;
