import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { useLang, type Lang } from "@/lib/i18n";

const paths = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/experience", key: "experience" },
  { to: "/services", key: "services" },
  { to: "/contact", key: "contact" },
] as const;

function LangSwitch() {
  const { lang, setLang } = useLang();
  const opts: Lang[] = ["sl", "en"];
  return (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label="Language">
      {opts.map((code) => (
        <button key={code} onClick={() => setLang(code)} aria-label={code === "en" ? "English" : "Slovenščina"} aria-pressed={lang === code}
          className={`rounded-full border px-3 py-0.5 tracking-widest uppercase ${lang === code ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:text-foreground"}`}>
          {code}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="font-serif text-2xl">Anna Novak</Link>
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex gap-8 text-sm">
            {paths.map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground underline underline-offset-8" }}
                activeOptions={{ exact: true }}>{t.nav[l.key]}</Link>
            ))}
          </nav>
          <LangSwitch />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch />
          <button className="text-sm" onClick={() => setOpen(!open)}>{open ? t.close : t.menu}</button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t px-6 py-5 md:hidden">
          {paths.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-serif text-xl">{t.nav[l.key]}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Anna Novak · {t.role}</span>
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
