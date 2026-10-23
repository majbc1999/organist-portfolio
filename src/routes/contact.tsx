import { createFileRoute } from "@tanstack/react-router";
import { meta, PageIntro } from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — Anna Novak, Organist", "Get in touch with Anna Novak to book an organist or arrange organ lessons."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's talk">
        For weddings, services, concerts or lessons, I'd be glad to hear from you. I usually reply within two days.
      </PageIntro>
      <section className="mx-auto max-w-xl px-6 text-center">
        <div className="rounded-lg border bg-card p-10">
          <p className="eyebrow">Email</p>
          <a href="mailto:anna.novak@example.com" className="mt-3 block break-all font-serif text-3xl hover:text-primary">
            anna.novak@example.com
          </a>
          <p className="eyebrow mt-10">Elsewhere</p>
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
