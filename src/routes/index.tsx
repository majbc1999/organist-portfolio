import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import organ from "@/assets/organ.jpg";
import { meta } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => meta("Anna Novak — Organist & Music Educator", "Organist for weddings, ceremonies, church services and concerts, and organ teacher."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Organist & Music Educator</p>
          <h1 className="mt-4 text-5xl md:text-7xl">Anna Novak</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Bringing warmth and dignity to life's important moments through the music of the organ — in church, in concert, and in the classroom.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Get in touch</Link>
            <Link to="/about" className="btn-outline">Learn more</Link>
          </div>
        </div>
        <img src={portrait} alt="Portrait of Anna Novak at the organ" width={1024} height={1280}
          className="order-1 aspect-[4/5] w-full rounded-lg object-cover md:order-2" />
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          {[
            ["Weddings & Ceremonies", "Thoughtfully chosen music for your most meaningful day."],
            ["Church Services", "Reliable liturgical playing and congregational accompaniment."],
            ["Organ Lessons", "Patient, structured teaching for all ages and levels."],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <img src={organ} alt="Organ console" loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
        <blockquote>
          <p className="font-serif text-3xl italic leading-snug md:text-4xl">
            "The organ is, in my eyes and ears, the king of instruments."
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">— W. A. Mozart</footer>
          <Link to="/services" className="btn-outline mt-8">View services</Link>
        </blockquote>
      </section>
    </>
  );
}
