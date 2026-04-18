import { Link } from "react-router-dom";
import { ArrowRight, Heart, Globe2, GraduationCap, BookOpen, Briefcase, Baby } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-hands.jpg";
import careImg from "@/assets/care-pregnant.jpg";
import becomeImg from "@/assets/become-midwife.jpg";
import globalImg from "@/assets/global-care.jpg";
import indigenousImg from "@/assets/indigenous-midwifery.jpg";
import learnImg from "@/assets/learning.jpg";
import { CTABand } from "@/components/PageHero";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";

const programs = [
  {
    title: "Midwifery Care",
    body: "Care that follows you through pregnancy, birth, and the early days as a family.",
    image: careImg,
    to: "/midwifery-care",
    icon: Heart,
  },
  {
    title: "Become a Midwife",
    body: "Pathways into one of the most meaningful professions in healthcare.",
    image: becomeImg,
    to: "/become-a-midwife",
    icon: GraduationCap,
  },
  {
    title: "CAM Global",
    body: "Strengthening midwifery and reproductive rights around the world.",
    image: globalImg,
    to: "/programs",
    icon: Globe2,
  },
  {
    title: "Indigenous Midwifery",
    body: "Honouring and supporting Indigenous-led midwifery and birth sovereignty.",
    image: indigenousImg,
    to: "/programs",
    icon: Heart,
  },
  {
    title: "CAM Learns",
    body: "Online continuing education by, with, and for midwives.",
    image: learnImg,
    to: "/resources",
    icon: BookOpen,
  },
  {
    title: "Find or Post a Job",
    body: "Canada's only national midwifery jobs board — coast to coast to coast.",
    image: careImg,
    to: "/jobs",
    icon: Briefcase,
  },
];

const news = [
  {
    tag: "Advocacy",
    date: "April 15, 2026",
    title: "Open Letter on Changes to Interim Federal Health Program",
    excerpt:
      "CAM raises concerns about new co-payments under the IFHP and their impact on equitable access to care.",
  },
  {
    tag: "Education",
    date: "March 25, 2026",
    title: "Partners in Care: Understanding Neonatal Skin Health",
    excerpt:
      "Join an online learning session connecting clinical evidence with real-world newborn skin care.",
  },
  {
    tag: "Indigenous",
    date: "March 03, 2026",
    title: "NCIM National Virtual Forum — Reclaiming Birth, Reclaiming Power",
    excerpt:
      "A two-day gathering centring Indigenous knowledge, body sovereignty, and ancestral midwifery.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — cinematic */}
      <section className="relative overflow-hidden bg-background grain-overlay">
        <div className="absolute inset-0 bg-gradient-earth" />
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-[oklch(0.55_0.1_60_/_0.18)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-28 pt-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pb-36 lg:pt-28">
          <div className="lg:col-span-6 animate-fade-up">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/65 px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-primary shadow-soft backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              Est. 1990 — Montréal
            </p>
            <h1 className="text-balance font-serif text-[3.2rem] leading-[0.94] text-foreground sm:text-6xl lg:text-[5.6rem] xl:text-[6rem]">
              Care that begins with{" "}
              <em className="font-serif italic font-light text-primary">trust</em>.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-[1.05rem] leading-8 text-muted-foreground">
              The Canadian Association of Midwives is the national voice of midwives — advocating for
              equitable, culturally safe care from coast to coast to coast, and around the world.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/midwifery-care"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:shadow-warm"
              >
                <span className="relative z-10">Discover midwifery</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary to-foreground transition-transform duration-700 ease-out group-hover:translate-x-0" />
              </Link>
              <Link
                to="/become-a-midwife"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:bg-background"
              >
                Become a midwife
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-4 rounded-[1.75rem] border border-border/60 bg-background/55 p-5 shadow-soft backdrop-blur-md">
              {[
                { v: "13", l: "Provinces & territories" },
                { v: "9,000+", l: "Midwives represented" },
                { v: "30+", l: "Years of advocacy" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl px-1 py-2">
                  <dt className="font-serif text-3xl font-light text-primary lg:text-4xl">{s.v}</dt>
                  <dd className="mt-1.5 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            className="relative lg:col-span-6 lg:pl-4"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <div className="surface-glass frame-highlight relative aspect-[4/5] overflow-hidden rounded-[2.4rem] p-1.5 shadow-cinema">
              <div className="vignette relative h-full overflow-hidden rounded-[1.9rem]">
                <img
                  src={heroImg}
                  alt="A midwife and parent gently holding a newborn baby's feet."
                  className="h-full w-full object-cover animate-ken-burns"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>

            {/* Floating quote — refined glass */}
            <motion.figure
              className="surface-glass frame-highlight absolute -bottom-8 left-6 hidden max-w-xs rounded-[1.6rem] p-6 shadow-cinema sm:block"
              initial={{ opacity: 0, x: -24, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-serif text-[1.4rem] leading-[1.25] text-foreground">
                "Midwifery is care{" "}
                <em className="italic text-primary">with</em>, not <em className="italic">over</em>."
              </blockquote>
              <figcaption className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                — CAM Statement of Values
              </figcaption>
            </motion.figure>

            {/* Floating award chip — top right */}
            <motion.div
              className="surface-glass frame-highlight absolute -top-5 right-2 hidden items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-foreground/80 shadow-warm sm:flex"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              National voice since 1990
            </motion.div>
          </motion.div>
        </div>


      </section>

      {/* MISSION STRIP */}
      <section className="border-y border-border/80 bg-background">
  <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
    <RevealStagger className="grid gap-8 lg:grid-cols-3" stagger={0.22}>
      {[
        { icon: Heart, t: "Equity-driven", b: "Care that meets every community where it is." },
        { icon: Baby, t: "Person-centred", b: "Pregnancy, birth, and postpartum on your terms." },
        { icon: Globe2, t: "Globally engaged", b: "Partnerships advancing midwifery worldwide." },
      ].map(({ icon: Icon, t, b }) => (
        <RevealItem key={t} className="section-shell group rounded-[1.6rem] px-5 py-5" variant="softScale" duration={1.2}>
          <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-foreground text-background shadow-soft transition-transform duration-500 group-hover:scale-110">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-serif text-[1.35rem] text-foreground">{t}</p>
            <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{b}</p>
          </div>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  </div>
</section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
  <Reveal
    className="flex flex-col items-end justify-between gap-6 sm:flex-row"
    variant="fade"
    duration={1.35}
  >
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        What we do
      </p>
      <h2 className="text-balance font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Programs and resources for midwives, families, and communities.
      </h2>
    </div>
    <Link
      to="/programs"
      className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-clay"
    >
      See all programs
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  </Reveal>

  <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.16}>
    {programs.map((p) => (
      <RevealItem key={p.title} variant="fadeUp" duration={1.15} y={34}>
        <Link
          to={p.to}
          className="group section-shell relative flex h-full flex-col overflow-hidden rounded-[1.9rem] shadow-soft hover-lift hover:shadow-warm"
        >
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src={p.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:scale-105">
                <p.icon className="h-4 w-4" />
              </span>
              <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Learn more
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </RevealItem>
    ))}
  </RevealStagger>
</section>
      {/* NEWS */}
      <section className="bg-background">
  <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
    <Reveal
      className="flex flex-col items-end justify-between gap-6 sm:flex-row"
      variant="fade"
      duration={1.35}
    >
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Latest news
        </p>
        <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
          Voices from the profession.
        </h2>
      </div>
      <Link
        to="/news"
        className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-clay"
      >
        All news
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </Reveal>

    <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.18}>
      {news.map((n) => (
        <RevealItem key={n.title} variant="softScale" duration={1.1}>
          <article className="group section-shell flex h-full flex-col rounded-[1.9rem] p-8 hover-lift hover:shadow-warm">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full border border-border bg-background px-3 py-1 font-medium uppercase tracking-wider text-foreground/76">
                {n.tag}
              </span>
              <span className="text-muted-foreground">{n.date}</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl leading-snug text-foreground transition group-hover:text-primary">
              {n.title}
            </h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {n.excerpt}
            </p>
            <Link
              to="/news"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              Read more
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </article>
        </RevealItem>
      ))}
    </RevealStagger>
  </div>
</section>
      {/* CTA */}
      <CTABand
        title="Become a CAM member."
        description="Join thousands of midwives across Canada. Access continuing education, professional advocacy, and a national community committed to equitable care."
        primary={{ to: "/member-login", label: "Member Login" }}
        secondary={{ to: "/contact", label: "Talk to us" }}
      />
    </>
  );
}
