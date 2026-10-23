import { createFileRoute } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => meta("Kontakt — Karin Zuza, organistka", "Pišite Karin Zuza za dogovor o igranju na poroki, bogoslužju, koncertu ali urah orgel."),
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
          <div className="mt-3 flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">Facebook</a>
          </div>
        </div>
      </section>
    </>
  );
}
