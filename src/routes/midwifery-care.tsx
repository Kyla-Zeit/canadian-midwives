import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { Check } from "lucide-react";
import careImg from "@/assets/care-pregnant.jpg";

const phases = [
  {
    t: "Before",
    b: "Comprehensive prenatal care, education, screening, and shared decision-making.",
  },
  {
    t: "During",
    b: "Continuous support throughout labour and birth — at home, in a birth centre, or in hospital.",
  },
  {
    t: "After",
    b: "Up to six weeks of postpartum care for parent and baby, including feeding and recovery support.",
  },
];

export default function Care() {
  return (
    <>
      <PageHero
        eyebrow="Midwifery Care"
        title="Care along the whole journey."
        description="Midwives are primary care providers for healthy pregnancies and births. They offer continuous, personalised care before, during, and after birth."
        image={careImg}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <RevealStagger className="grid gap-6 md:grid-cols-3" stagger={0.12}>
          {phases.map((p) => (
            <RevealItem key={p.t}>
              <div className="h-full rounded-3xl bg-secondary/40 p-8 hover-lift hover:shadow-warm">
                <p className="font-serif text-5xl text-primary">{p.t}</p>
                <p className="mt-4 text-foreground/80">{p.b}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl text-foreground">What midwives provide</h2>
        </Reveal>
        <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.06}>
          {[
            "Primary care for low-risk pregnancies",
            "Choice of birth setting — home, birth centre, or hospital",
            "Continuous one-to-one care during labour",
            "Newborn assessments and well-baby care",
            "Lactation and feeding support",
            "Cultural safety and informed choice",
          ].map((item) => (
            <RevealItem key={item}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-soft">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/85">{item}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CTABand
        title="Looking for a midwife?"
        description="Midwifery care is publicly funded in most Canadian provinces and territories. We can help you find services in your region."
        primary={{ to: "/contact", label: "Find care near you" }}
        secondary={{ to: "/resources", label: "Browse resources" }}
      />
    </>
  );
}
