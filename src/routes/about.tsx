import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import careImg from "@/assets/care-pregnant.jpg";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About CAM"
        title="A national voice, rooted in care."
        description="Founded in 1990, the Canadian Association of Midwives represents registered midwives in every province and territory — advocating for the profession and the people it serves."
        image={careImg}
        imageAlt="A pregnant person standing peacefully by a sunlit window."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <Reveal className="prose prose-lg max-w-none">
          <p className="font-serif text-2xl leading-relaxed text-foreground">
            CAM is the national professional association representing midwives across Canada. We
            advocate for midwifery as a regulated health profession, support member professional
            development, and work to advance equitable access to midwifery care for all people in
            Canada — including Indigenous, rural, and remote communities.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-10 md:grid-cols-2" stagger={0.1}>
          {[
            {
              t: "Our mission",
              b: "To provide leadership and advocacy for midwifery as a regulated, autonomous, and publicly funded part of the health care system.",
            },
            {
              t: "Our vision",
              b: "Midwives are recognized as essential providers of primary sexual and reproductive health care for every person in Canada.",
            },
            {
              t: "Our values",
              b: "Equity, sovereignty, partnership, evidence, and care that is profoundly human at every step of the journey.",
            },
            {
              t: "Our reach",
              b: "Funded by Health Canada, Global Affairs Canada, UN agencies and donors, working in 13 jurisdictions and across 4 continents.",
            },
          ].map((c) => (
            <RevealItem key={c.t}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft hover-lift hover:shadow-warm hover:border-primary/40">
                <h2 className="font-serif text-2xl text-foreground">{c.t}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CTABand
        title="Join the national community."
        description="Become a CAM member and stand with thousands of midwives across the country."
        primary={{ to: "/member-login", label: "Member Login" }}
        secondary={{ to: "/contact", label: "Contact us" }}
      />
    </>
  );
}
