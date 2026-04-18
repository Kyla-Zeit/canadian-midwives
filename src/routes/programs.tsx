import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import globalImg from "@/assets/global-care.jpg";
import indigenousImg from "@/assets/indigenous-midwifery.jpg";
import learnImg from "@/assets/learning.jpg";

const programs = [
  {
    img: globalImg,
    eyebrow: "International",
    title: "CAM Global",
    body: "Working alongside partners in Africa, Asia, and the Americas to strengthen midwifery, sexual and reproductive health and rights, and access to quality care.",
    bullets: ["Partnerships in 12+ countries", "TRUST project — Canada–Malawi", "Global Affairs Canada funded"],
  },
  {
    img: indigenousImg,
    eyebrow: "Indigenous-led",
    title: "National Council of Indigenous Midwives",
    body: "NCIM promotes excellence in reproductive health for Inuit, First Nations, and Métis communities — centring traditional knowledge and birth sovereignty.",
    bullets: ["Truth & Reconciliation Calls to Action", "Body sovereignty programming", "Indigenous-governed"],
  },
  {
    img: learnImg,
    eyebrow: "Education",
    title: "CAM Learns",
    body: "An online learning platform offering interactive continuing education on topics from cultural safety to vaccine confidence — by, with, and for midwives.",
    bullets: ["Self-paced modules", "CME credits", "Bilingual EN / FR"],
  },
];

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs that strengthen midwifery — locally and globally."
        description="From international partnerships to Indigenous-led initiatives and continuing education, our programs equip midwives with what they need to lead change."
      />

      <div className="mx-auto max-w-7xl space-y-24 px-5 py-20 lg:px-8">
        {programs.map((p, i) => (
          <Reveal key={p.title}>
            <article
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative group">
                <div className="aspect-[5/4] overflow-hidden rounded-3xl shadow-warm">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {p.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-foreground">{p.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-7 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-foreground/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <CTABand
        title="Partner with us."
        description="Funders, agencies, and community organisations are invited to explore opportunities to collaborate."
        primary={{ to: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
