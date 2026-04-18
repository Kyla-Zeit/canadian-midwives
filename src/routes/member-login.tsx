import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Lock } from "lucide-react";

export default function Login() {
  return (
    <section className="bg-gradient-earth">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Member Portal
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            Welcome back.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Sign in to access your CAM membership — exclusive resources, the searchable knowledge
            base, CAM Learns, and the member directory.
          </p>
          <ul className="mt-10 space-y-3 text-sm text-foreground/80">
            {[
              "Searchable clinical knowledge base",
              "CAM Learns continuing education",
              "Member-only events & webinars",
              "Practice resources & templates",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-border bg-background p-8 shadow-warm sm:p-10">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Lock className="h-5 w-5" />
            </div>
            <h2 className="mt-5 font-serif text-3xl text-foreground">Sign in</h2>
            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <a href="#" className="text-xs text-primary hover:underline">
                    Forgot?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:bg-clay"
              >
                Sign in
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Not yet a member?{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Join CAM
                </Link>
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
