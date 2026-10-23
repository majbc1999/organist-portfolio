import { createFileRoute, Link } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";

export const Route = createFileRoute("/services")({
  head: () => meta("Services — Anna Novak, Organist", "Organist for weddings, funerals, church services, concerts and accompaniment, plus organ lessons."),
  component: Services,
});

const services = [
  ["Weddings", "From the processional to the recessional, music chosen together with you to reflect your style and the spirit of the day."],
  ["Ceremonies & Funerals", "Dignified, sensitive music for memorials, baptisms, anniversaries and other ceremonies."],
  ["Church Services", "Regular or substitute organist for Sunday services, feast days and special liturgies."],
  ["Concerts & Recitals", "Solo organ recitals and participation in concert programmes and festivals."],
  ["Accompaniment", "Accompaniment of choirs, soloists and instrumentalists for rehearsals and performances."],
  ["Organ Lessons", "Individual lessons for beginners and advanced students — technique, repertoire, and liturgical playing."],
];

function Services() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Music for every occasion">
        Available as an organist for a wide range of occasions, and as a teacher for students of all ages.
      </PageIntro>
      <section className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-lg border bg-border px-0 sm:grid-cols-2">
        {services.map(([t, d]) => (
          <div key={t} className="bg-background p-8">
            <h2 className="text-3xl">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-2xl px-6 pt-16 text-center">
        <p className="text-lg">Every occasion is different. Please get in touch to discuss your plans, dates and repertoire.</p>
        <Link to="/contact" className="btn-primary mt-6">Contact me</Link>
      </section>
    </>
  );
}
