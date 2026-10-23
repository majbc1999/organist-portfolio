import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import organ from "@/assets/organ.jpg";
import { meta } from "@/components/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => meta("Anna Novak — Organistka & glasbena pedagoginja", "Organistka za poroke, slovesnosti, bogoslužja in koncerte ter učiteljica orgel."),
  component: Index,
});

function Index() {
  const { t } = useLang();
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <p className="eyebrow">{t.role}</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Anna Novak</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">{t.home.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">{t.home.cta}</Link>
            <Link to="/about" className="btn-outline">{t.home.more}</Link>
          </div>
        </div>
        <img src={portrait} alt="Anna Novak" width={1024} height={1280}
          className="order-1 aspect-[4/5] w-full rounded-lg object-cover md:order-2" />
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {t.home.cards.map(([title, d], i) => (
            <div key={i}>
              <h3 className="text-2xl">{title}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <img src={organ} alt="" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-lg object-cover" />
        <blockquote>
          <p className="font-serif text-3xl italic leading-snug md:text-4xl">{t.home.quote}</p>
          <footer className="mt-4 text-sm text-muted-foreground">— W. A. Mozart</footer>
          <Link to="/services" className="btn-outline mt-8">{t.home.viewServices}</Link>
        </blockquote>
      </section>
    </>
  );
}
