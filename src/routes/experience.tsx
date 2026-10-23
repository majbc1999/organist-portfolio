import { createFileRoute } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/experience")({
  head: () => meta("Izkušnje — Anna Novak, organistka", "Poklicne zaposlitve, izbrani koncerti in izobrazba organistke Anne Novak."),
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

function Experience() {
  const { t } = useLang();
  const e = t.exp;
  return (
    <>
      <PageIntro eyebrow={e.eyebrow} title={e.title}>{e.lead}</PageIntro>
      <Block title={e.positionsTitle} items={e.positions} />
      <Block title={e.concertsTitle} items={e.concerts} />
      <Block title={e.eduTitle} items={e.edu} />
    </>
  );
}
