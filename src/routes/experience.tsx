import { createFileRoute } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/experience")({
  head: () => meta("Izkušnje — Karin Zuza", "Delovne izkušnje, tekmovalni dosežki, koncertna dejavnost in posnetki Karin Zuza."),
  component: Experience,
});

function Block({ title, items }: { title: string; items: [string, string, string, string][] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="border-b pb-3 text-3xl">{title}</h2>
      <ul>
        {items.map(([date, t, place, desc], i) => (
          <li key={i} className="grid gap-1 border-b py-6 md:grid-cols-[10rem_1fr] md:gap-6">
            <span className="text-sm text-accent">{date}</span>
            <div>
              <h3 className="text-2xl">{t}</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">{place}</p>
              <p className="mt-2">{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ConcertActivity({ title, items }: { title: string; items: [string, string, string][] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="border-b pb-3 text-3xl">{title}</h2>
      <div>
        {items.map(([category, name, description]) => (
          <article key={category} className="border-b py-6">
            <p className="eyebrow">{category}</p>
            <h3 className="mt-2 text-2xl">{name}</h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const { lang, t } = useLang();
  const e = t.exp;
  return (
    <>
      <PageIntro eyebrow={e.eyebrow} title={e.title}>{e.lead}</PageIntro>
      <Block title={e.positionsTitle} items={e.positions} />
      <Block title={e.concertsTitle} items={e.concerts} />
      <ConcertActivity title={e.eduTitle} items={e.edu} />
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h2 className="border-b pb-3 text-3xl">{e.videosTitle}</h2>
        {([[e.pianoTitle, lang === "en" ? "Piano" : "Klavir"], [e.organTitle, lang === "en" ? "Organ" : "Orgle"]] as const).map(([title, category]) => (
          <div key={category} className="border-b py-6">
            <h3 className="text-2xl">{title}</h3>
            <ul className="mt-3 space-y-3">
              {e.videos.filter(([kind]) => kind === category).map(([, name, url]) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-4 hover:text-primary">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
