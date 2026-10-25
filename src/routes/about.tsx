import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { meta, PageIntro } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => meta("O meni — Karin Zuza, organistka", "Življenjepis, glasbena pot in izobrazba organistke Karin Zuza."),
  component: About,
});

function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageIntro eyebrow={a.eyebrow} title={a.title} />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[2fr_3fr]">
        <img src={portrait} alt="Karin Zuza" className="aspect-[4/5] w-full rounded-lg object-cover" />
        <div className="space-y-8">
          <div className="space-y-5 text-lg">
            {a.paras.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="border-t pt-6">
            <h2 className="text-2xl">{a.education}</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {a.eduList.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-2xl">{a.strengthsTitle}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
              {a.strengths.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-2xl">{a.additionalTitle}</h2>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {a.additional.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
