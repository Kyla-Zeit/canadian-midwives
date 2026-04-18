import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Whether you're a member, a family looking for care, a partner, or a journalist — we'd love to hear from you."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-5 lg:px-8">
        <Reveal className="lg:col-span-2">
          <h2 className="font-serif text-3xl text-foreground">Get in touch</h2>
          <p className="mt-4 text-muted-foreground">
            Our team responds to all enquiries within two business days.
          </p>
          <ul className="mt-8 space-y-5 text-foreground/85">
            <li className="flex gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Office</p>
                <p className="text-sm text-muted-foreground">
                  301 - 2330 Notre-Dame St W<br />
                  Montréal, QC H3J 1N4
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:info@canadianmidwives.org"
                  className="text-sm text-primary hover:underline"
                >
                  info@canadianmidwives.org
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (514) 807-3668</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            {sent ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">Thank you.</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Your message has been received. We'll be in touch within two business days.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" id="name" required />
                  <Field label="Email" id="email" type="email" required />
                </div>
                <Field label="Subject" id="subject" required />
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:bg-clay"
                >
                  Send message
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
