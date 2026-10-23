import { createFileRoute, Link } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => meta("Services — Anna Novak, Organist", "Organist for weddings, funerals, church services, concerts and accompaniment, plus organ lessons."),
  component: Services,
});

function Services() {
  const { t } = useLang();
  const s = t.services;
  return (
    <>
      <PageIntro eyebrow={s.eyebrow} title={s.title}>{s.lead}</PageIntro>
      <section className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
        {s.list.map(([title, d], i) => (
          <div key={i} className="bg-background p-8">
            <h2 className="text-3xl">{title}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-2xl px-6 pt-16 text-center">
        <p className="text-lg">{s.outro}</p>
        <Link to="/contact" className="btn-primary mt-6">{s.cta}</Link>
      </section>
    </>
  );
}
