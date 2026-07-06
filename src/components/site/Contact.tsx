import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SectionBadge } from "./SectionBadge";

const ease = [0.22, 1, 0.36, 1] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject is too short").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "ssrinivasaraghavan29@gmail.com",
    href: "mailto:ssrinivasaraghavan29@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 7200251453", href: "tel:+917200251453" },
  { icon: Github, label: "GitHub", value: "@LovelyFire29", href: "https://github.com/LovelyFire29" },
  { icon: Linkedin, label: "LinkedIn", value: "in/srinivasaraghavan29", href: "https://www.linkedin.com/in/srinivasaraghavan29/" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the errors below.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Simulate send — wire to a server fn / email service when ready.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    toast.success("Message sent — I'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="relative py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <SectionBadge>Contact</SectionBadge>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
            Let's build something —
            <br />
            <span className="text-gradient">say hello.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Open to internships, collaborations, and new opportunities. Feel free to reach
            out — I’d be happy to connect.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels + meta */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-3"
          >
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl glass-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-white/[0.06]"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate text-sm font-medium">{c.value}</div>
                </div>
                <span
                  aria-hidden
                  className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                >
                  →
                </span>
              </a>
            ))}

            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Chennai, India · Open to remote
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            onSubmit={onSubmit}
            noValidate
            className="relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" error={errors.name} maxLength={100} />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" error={errors.email} maxLength={255} />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="What's this about?" error={errors.subject} maxLength={150} />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Tell me a bit about the project, role, or idea…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                Your information will only be used to respond to your message.
              </p>
              <button
                type="submit"
                disabled={submitting || sent}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    {submitting ? "Sending…" : "Send message"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
