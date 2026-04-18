import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const items = [
  {
    tag: "Advocacy",
    date: "April 15, 2026",
    title: "Open Letter on Changes to the Interim Federal Health Program",
    excerpt:
      "Beginning May 1, 2026, eligible IFHP beneficiaries will face co-payments for prescription medication and supplemental services. CAM is concerned about the impact on equitable access.",
  },
  {
    tag: "Education",
    date: "March 25, 2026",
    title: "Partners in Care: Understanding Neonatal Skin Health",
    excerpt:
      "An online learning session connecting clinical evidence with real-world newborn skin care, featuring Dr. Andrew Carr.",
  },
  {
    tag: "Indigenous",
    date: "March 03, 2026",
    title: "NCIM National Virtual Forum — Body Sovereignty",
    excerpt:
      "A two-day forum centring Indigenous knowledge, body sovereignty, and ancestral midwifery.",
  },
  {
    tag: "Global",
    date: "February 18, 2026",
    title: "TRUST in Midwives: Canada–Malawi Partnership",
    excerpt:
      "Malawi may need 16,400 midwives within five years. Find out how the TRUST project is supporting the response.",
  },
  {
    tag: "Statement",
    date: "January 30, 2026",
    title: "Combatting Anti-Indigenous Racism in Healthcare",
    excerpt:
      "CAM formally adopts the Truth & Reconciliation Commission's Calls to Action and reaffirms its commitments.",
  },
];

export default function News() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="What we're saying. What we're doing."
        description="Read the latest statements, advocacy updates, and stories from across the profession."
      />

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <RevealStagger className="space-y-8" stagger={0.08}>
          {items.map((n) => (
            <RevealItem key={n.title}>
              <article className="group flex flex-col gap-2 border-b border-border pb-8 transition last:border-0">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-medium uppercase tracking-wider text-primary">
                    {n.tag}
                  </span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h2 className="mt-2 font-serif text-2xl leading-snug text-foreground transition group-hover:text-primary sm:text-3xl">
                  {n.title}
                </h2>
                <p className="text-pretty text-muted-foreground">{n.excerpt}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
