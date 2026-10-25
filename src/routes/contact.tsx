import { createFileRoute, Link } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => meta("Kontakt — Karin Zuza", "Kontaktni podatki za vprašanja o pouku, korepeticijah in nastopih Karin Zuza."),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <>
      <PageIntro eyebrow={c.eyebrow} title={c.title}>{c.lead}</PageIntro>
      <section className="mx-auto max-w-xl px-6 text-center">
        <div className="rounded-lg border bg-card p-10">
          <p className="eyebrow">{c.email}</p>
          <a href="mailto:karin.zuza1@gmail.com" className="mt-3 block break-all font-serif text-3xl hover:text-primary">
            karin.zuza1@gmail.com
          </a>
          <p className="eyebrow mt-10">{c.elsewhere}</p>
          <Link to="/experience" className="mt-3 inline-block underline underline-offset-4 hover:text-primary">
            {t.exp.videosTitle}
          </Link>
        </div>
      </section>
    </>
  );
}
