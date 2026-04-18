import { PageHero } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    title: "Registered Midwife",
    org: "Riverbend Midwifery Practice",
    location: "Whitehorse, YT",
    type: "Full-time",
    posted: "Posted 2 days ago",
  },
  {
    title: "Midwifery Faculty (Tenure-Track)",
    org: "University of British Columbia",
    location: "Vancouver, BC",
    type: "Faculty",
    posted: "Posted 5 days ago",
  },
  {
    title: "Locum Midwife",
    org: "South Shore Midwives",
    location: "Lunenburg, NS",
    type: "Contract",
    posted: "Posted 1 week ago",
  },
  {
    title: "Indigenous Midwife — Birth Worker",
    org: "Six Nations Birthing Centre",
    location: "Ohsweken, ON",
    type: "Full-time",
    posted: "Posted 1 week ago",
  },
  {
    title: "Bilingual Clinical Educator",
    org: "Maison de naissance Côte-des-Neiges",
    location: "Montréal, QC",
    type: "Part-time",
    posted: "Posted 2 weeks ago",
  },
];

export default function Jobs() {
  return (
    <>
      <PageHero
        eyebrow="Jobs"
        title="Midwifery careers, coast to coast to coast."
        description="Canada's only national job board for the profession. Whether you're hiring or looking for your next role, you'll find opportunities here."
      />

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{jobs.length} open positions</p>
          <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-clay">
            Post a job
          </button>
        </Reveal>

        <RevealStagger className="space-y-3" stagger={0.06}>
          {jobs.map((j) => (
            <RevealItem key={j.title + j.org}>
              <div className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-soft hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-serif text-xl text-foreground transition group-hover:text-primary">
                    {j.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{j.org}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {j.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {j.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {j.posted}
                    </span>
                  </div>
                </div>
                <button className="rounded-full border border-foreground/15 px-5 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
                  View role
                </button>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
