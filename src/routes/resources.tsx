import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { FileText, Headphones, BookOpen, Stethoscope } from "lucide-react";

const resources = [
  {
    icon: Headphones,
    title: "Strength in Practice",
    type: "Podcast",
    body: "A new podcast for midwives — exploring the cultural and scientific intersections of sexual and reproductive health and rights.",
  },
  {
    icon: Stethoscope,
    title: "Canadian Emergency Skills Workshop",
    type: "Training",
    body: "Hands-on emergency skills training, recognised across the profession.",
  },
  {
    icon: FileText,
    title: "Position Statements",
    type: "Advocacy",
    body: "CAM's published positions on policy, equity, anti-Indigenous racism, and reproductive rights.",
  },
  {
    icon: BookOpen,
    title: "Clinical Guidelines",
    type: "Practice",
    body: "Evidence-based clinical guidelines and practice resources curated for Canadian midwives.",
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="A library of practice, advocacy, and learning."
        description="Curated resources to support midwives in their daily work — from clinical guidelines to position statements to podcasts."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <RevealStagger className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {resources.map((r) => (
            <RevealItem key={r.title}>
              <article className="group flex h-full gap-5 rounded-3xl border border-border bg-card p-8 hover-lift hover:border-primary/40 hover:shadow-warm">
                <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <r.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {r.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-foreground">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-16">
          <div className="rounded-3xl bg-secondary/40 p-10 text-center">
            <h2 className="font-serif text-3xl text-foreground">Members get more</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              CAM members can access the full searchable knowledge base, exclusive webinars, and
              member-only practice resources.
            </p>
            <Link
              to="/member-login"
              className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:bg-clay"
            >
              Member Login
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
