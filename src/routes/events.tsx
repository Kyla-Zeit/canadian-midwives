import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    date: "May 14, 2026",
    time: "12:00 PM ET",
    title: "Webinar — Cultural Safety in Practice",
    location: "Online",
    body: "A live conversation on embedding cultural safety into everyday clinical practice.",
  },
  {
    date: "June 03, 2026",
    time: "9:00 AM PT",
    title: "Canadian Emergency Skills Workshop",
    location: "Vancouver, BC",
    body: "Hands-on, in-person emergency skills training for registered midwives.",
  },
  {
    date: "October 22, 2026",
    time: "All day",
    title: "CAM Annual Conference 2026",
    location: "Halifax, NS",
    body: "Three days of learning, connection, and celebration of Canadian midwifery.",
  },
];

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gather, learn, connect."
        description="Webinars, workshops, and the CAM Annual Conference — opportunities to deepen practice and meet colleagues."
      />

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <RevealStagger className="space-y-6" stagger={0.1}>
          {events.map((e) => (
            <RevealItem key={e.title}>
              <article className="group grid gap-6 rounded-3xl border border-border bg-card p-7 hover-lift hover:border-primary/40 hover:shadow-warm sm:grid-cols-[180px_1fr]">
                <div className="rounded-2xl bg-secondary/50 p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {e.date.split(",")[0]}
                  </p>
                  <p className="mt-1 font-serif text-3xl text-foreground">
                    {e.date.split(" ")[1]?.replace(",", "")}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{e.time}</p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-foreground transition group-hover:text-primary">
                    {e.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {e.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {e.location}
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{e.body}</p>
                  <button className="mt-5 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-clay">
                    Register
                  </button>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
