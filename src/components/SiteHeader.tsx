import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import camLogo from "@/assets/cam-logo.png";

const NAV = [
  { to: "/about", label: "About CAM" },
  { to: "/midwifery-care", label: "Midwifery Care" },
  { to: "/become-a-midwife", label: "Become a Midwife" },
  { to: "/programs", label: "Programs" },
  { to: "/resources", label: "Resources" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/jobs", label: "Jobs" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,backdrop-filter,border-color,padding] duration-700 ease-out ${
        scrolled
          ? "border-b border-border/60 bg-background/72 backdrop-blur-2xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-xl"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 transition-all duration-500 lg:px-8 ${scrolled ? "py-3" : "py-4"}`}
      >
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="CAM home"
          onClick={() => setOpen(false)}
        >
          <img
            src={camLogo}
            alt="Canadian Association of Midwives"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-10 sm:h-11 lg:h-12" : "h-12 sm:h-14 lg:h-[4.15rem]"}`}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `link-underline rounded-full px-3 py-2 text-[0.84rem] font-medium tracking-tight transition-colors duration-300 ${
                  isActive ? "text-foreground" : "text-foreground/72 hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            to="/contact"
            className="rounded-full border border-transparent px-4 py-2 text-[0.84rem] font-medium text-foreground/72 transition hover:border-border/60 hover:bg-background/60 hover:text-foreground"
          >
            Contact
          </Link>
          <Link
            to="/member-login"
            className="group relative overflow-hidden rounded-full bg-foreground px-5 py-2.5 text-[0.84rem] font-medium text-background transition-all duration-500 hover:-translate-y-0.5 hover:shadow-warm"
          >
            <span className="relative z-10">Member Login</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary to-foreground opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/70 backdrop-blur xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-2xl xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? "bg-muted text-foreground" : "text-foreground/82 hover:bg-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/82 transition hover:bg-muted"
            >
              Contact
            </Link>
            <Link
              to="/member-login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            >
              Member Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
