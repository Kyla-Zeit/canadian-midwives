import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-clay text-clay-foreground grain-overlay">
      {/* Cinematic top hairline + ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground text-clay font-serif text-lg">
                C
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg">Canadian Association of Midwives</p>
                <p className="text-xs uppercase tracking-[0.18em] text-clay-foreground/70">
                  Association canadienne des sages-femmes
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-clay-foreground/80">
              The national voice of midwives in Canada — advancing equitable, culturally safe
              midwifery care for every person, in every community.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-clay-foreground/85">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 opacity-70" />
                Montréal, Québec, Canada
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 opacity-70" />
                <a href="mailto:info@canadianmidwives.org" className="hover:underline">
                  info@canadianmidwives.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 opacity-70" />
                +1 (514) 807-3668
              </li>
            </ul>
          </div>

          <FooterCol
            title="Explore"
            links={[
              { to: "/about", label: "About CAM" },
              { to: "/midwifery-care", label: "Midwifery Care" },
              { to: "/become-a-midwife", label: "Become a Midwife" },
              { to: "/programs", label: "Programs" },
            ]}
          />
          <FooterCol
            title="Engage"
            links={[
              { to: "/news", label: "News" },
              { to: "/events", label: "Events" },
              { to: "/resources", label: "Resources" },
              { to: "/jobs", label: "Job Board" },
            ]}
          />
          <FooterCol
            title="Members"
            links={[
              { to: "/member-login", label: "Member Login" },
              { to: "/contact", label: "Contact" },
              { to: "/about", label: "Membership" },
              { to: "/programs", label: "CAM Learns" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-clay-foreground/15 pt-6 text-xs text-clay-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Canadian Association of Midwives. All rights reserved.</p>
          <p className="font-serif italic text-clay-foreground/80">
            Caring for those who care.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div className="lg:col-span-2">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-foreground/60">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="text-clay-foreground/85 transition hover:text-clay-foreground hover:underline underline-offset-4"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
