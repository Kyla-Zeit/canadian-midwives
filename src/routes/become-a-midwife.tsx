import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import becomeImg from "@/assets/become-midwife.jpg";

const paths = [
  {
    t: "Accredited Programs",
    b: "Four-year baccalaureate programs at accredited Canadian universities prepare graduates for registration in their province or territory.",
  },
  {
    t: "Internationally Educated",
    b: "Bridging programs help midwives trained abroad meet Canadian regulatory and clinical standards.",
  },
  {
    t: "Indigenous Pathways",
    b: "Community-based and Indigenous-led pathways recognise the continuity of traditional and contemporary midwifery knowledge.",
  },
];

export default function Become() {
  return (
    <>
      <PageHero
        eyebrow="Become a Midwife"
        title="Choose a profession that changes lives."
        description="Midwifery is a regulated, autonomous, primary care profession — one of the most meaningful and growing careers in Canadian healthcare."
        image={becomeImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl text-foreground">Three pathways into the profession</h2>
        </Reveal>
        <RevealStagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.12}>
          {paths.map((p, i) => (
            <RevealItem key={p.t}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft hover-lift hover:shadow-warm hover:border-primary/40">
                <p className="font-serif text-5xl text-primary/80">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-2xl text-foreground">{p.t}</h3>
                <p className="mt-3 text-muted-foreground">{p.b}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl text-foreground">A typical day</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Midwives work in clinics, in hospitals, in homes, and in their communities. Days move
              from prenatal visits to postpartum check-ins, from on-call births to charting and
              consultation. The work is rigorous and deeply human — built on relationships that often
              span years.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ready to start?"
        description="Connect with the regulator in your province or territory, or speak with a CAM advisor."
        primary={{ to: "/contact", label: "Talk to an advisor" }}
        secondary={{ to: "/resources", label: "Education resources" }}
      />
    </>
  );
}
