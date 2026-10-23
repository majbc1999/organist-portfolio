import { createFileRoute } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";

export const Route = createFileRoute("/experience")({
  head: () => meta("Experience — Anna Novak, Organist", "Professional positions, notable concerts and education of organist Anna Novak."),
  component: Experience,
});

const positions = [
  ["2019 – present", "Principal Organist", "St. Mary's Parish Church", "Weekly services, feast days, choir accompaniment and planning of liturgical music."],
  ["2017 – present", "Organ & Piano Teacher", "Municipal Music School", "Teaching students aged 10 to adult, preparing pupils for exams and competitions."],
  ["2014 – 2019", "Assistant Organist", "Cathedral of St. Nicholas", "Services, weddings and accompaniment of the cathedral choir."],
];

const concerts = [
  ["June 2025", "Summer Organ Evening", "Cathedral of St. Nicholas", "Works by Bach, Franck and Widor."],
  ["December 2024", "Advent Concert with Chamber Choir", "St. Mary's Parish Church", "Accompaniment and solo chorale preludes."],
  ["September 2023", "International Organ Festival", "Basilica of the Assumption", "Recital of French Romantic repertoire."],
  ["April 2022", "Easter Music Meditation", "Franciscan Church", "Programme of Baroque and contemporary works."],
];

function Block({ title, items }: { title: string; items: string[][] }) {
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
  return (
    <>
      <PageIntro eyebrow="Experience" title="Positions & performances">
        Over a decade of playing for services, ceremonies and concerts, and teaching the next generation.
      </PageIntro>
      <Block title="Professional experience" items={positions} />
      <Block title="Selected concerts" items={concerts} />
      <Block title="Education" items={[
        ["2014 – 2016", "Master of Music, Church Music", "Academy of Music", "Organ, improvisation and choral conducting."],
        ["2010 – 2014", "Bachelor of Music, Organ Performance", "Academy of Music", "Graduated with distinction."],
      ]} />
    </>
  );
}
