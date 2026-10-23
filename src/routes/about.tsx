import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { meta, PageIntro } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => meta("About — Anna Novak, Organist", "Biography, musical background and education of organist Anna Novak."),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="A life in music" />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[2fr_3fr]">
        <img src={portrait} alt="Anna Novak" className="aspect-[4/5] w-full rounded-lg object-cover" />
        <div className="space-y-5 text-lg">
          <p>Anna Novak is an organist and music educator whose playing is known for its clarity, warmth and sensitivity to the occasion. She first sat at the organ at the age of twelve in her local parish church, and has been devoted to the instrument ever since.</p>
          <p>She studied organ performance at the Academy of Music, followed by a master's degree in church music, with additional masterclasses in historical performance practice in Germany and the Netherlands.</p>
          <p>Her repertoire spans from Baroque masters such as Bach and Buxtehude to the French Romantic tradition and contemporary works. Alongside performing, she finds great joy in teaching and in sharing the instrument with new generations of players.</p>
          <p>Outside of music, Anna enjoys visiting historic churches and their organs, reading, and long walks in the countryside.</p>
          <div className="border-t pt-6">
            <h2 className="text-2xl">Education</h2>
            <ul className="mt-3 space-y-1 text-base text-muted-foreground">
              <li>M.Mus. Church Music — Academy of Music, 2016</li>
              <li>B.Mus. Organ Performance — Academy of Music, 2014</li>
              <li>Masterclasses in Haarlem and Leipzig, 2015–2019</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
