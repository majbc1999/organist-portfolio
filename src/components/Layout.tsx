import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-serif text-2xl">Anna Novak</Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground underline underline-offset-8" }}
              activeOptions={{ exact: true }}>{l.label}</Link>
          ))}
        </nav>
        <button className="text-sm md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-5 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-serif text-xl">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Anna Novak · Organist & Music Educator</span>
        <a href="mailto:anna.novak@example.com" className="hover:text-foreground">anna.novak@example.com</a>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-5xl md:text-6xl">{title}</h1>
      {children && <p className="mt-6 text-lg text-muted-foreground">{children}</p>}
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
