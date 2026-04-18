import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-earth grain-overlay">
      {/* Cinematic ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:gap-20 lg:px-8 lg:py-32">
        <div className="lg:col-span-7 animate-fade-up">
          {eyebrow && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-primary shadow-soft backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance font-serif text-[2.6rem] leading-[0.96] text-foreground sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-7 max-w-2xl text-pretty text-[1.05rem] leading-8 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {image && (
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="surface-glass frame-highlight relative aspect-[4/5] overflow-hidden rounded-[2rem] p-1.5 shadow-cinema">
              <div className="vignette relative h-full overflow-hidden rounded-[1.6rem]">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  className="h-full w-full object-cover animate-ken-burns"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function CTABand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-warm px-8 py-16 text-primary-foreground shadow-cinema sm:px-16 sm:py-20 grain-overlay">
        {/* Slow rotating aurora behind copy */}
        <div className="pointer-events-none absolute -inset-1/3 opacity-25 mix-blend-screen blur-3xl">
          <div className="h-full w-full bg-gradient-aurora animate-aurora" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(1_0_0/0.18),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative max-w-3xl">
          <h2 className="text-balance font-serif text-[2.2rem] leading-[1.0] sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-primary-foreground/82 sm:text-[1.05rem]">
              {description}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={primary.to}
              className="group relative overflow-hidden rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:shadow-warm"
            >
              <span className="relative z-10">{primary.label}</span>
            </Link>
            {secondary && (
              <Link
                to={secondary.to}
                className="rounded-full border border-white/25 bg-white/0 px-7 py-3.5 text-sm font-medium transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
