import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Section, SectionHeader } from "../components/Section";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";

const WHATSAPP_NUMBER = "27000000000";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Astar Technologies" },
      {
        name: "description",
        content:
          "Get a free consultation. WhatsApp, phone, email, or fill out our quick form — we respond within one business day.",
      },
      { property: "og:title", content: "Contact Astar Technologies" },
      {
        property: "og:description",
        content: "Free consultation for African businesses ready to grow digitally.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a bit more (at least 10 characters)").max(1500),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Compose WhatsApp message as primary delivery channel
    const text = encodeURIComponent(
      `New project inquiry%0A%0AName: ${result.data.name}%0AEmail: ${result.data.email}%0ACompany: ${result.data.company ?? "-"}%0A%0A${result.data.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
      toast.success("Opening WhatsApp to send your message…");
      form.reset();
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <Section className="pt-12 md:pt-16">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Let's talk about <span className="text-gradient-gold">your business</span></>}
          description="Free 30-minute consultation. We respond within one business day."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-5">
          {/* Contact methods */}
          <div className="lg:col-span-2 space-y-4">
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              detail="Fastest response"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              accent
            />
            <ContactCard
              icon={Mail}
              title="Email"
              detail="hello@astartech.co.za"
              href="mailto:hello@astartech.co.za"
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              detail="+27 (0) 00 000 0000"
              href="tel:+27000000000"
            />
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <p className="text-sm font-semibold text-foreground">Where we work</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Serving clients across South Africa and Lesotho.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                CIPC Registration: 2026/306686/07
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-2xl border border-border bg-gradient-card p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-foreground">Get a quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us about your project. We'll reply within one business day.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field>
                <Label htmlFor="name">Your name *</Label>
                <Input id="name" name="name" required maxLength={100} placeholder="Jane Doe" />
              </Field>
              <Field>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@company.com" />
              </Field>
              <Field className="md:col-span-2">
                <Label htmlFor="company">Company / Business</Label>
                <Input id="company" name="company" maxLength={120} placeholder="Your business name" />
              </Field>
              <Field className="md:col-span-2">
                <Label htmlFor="message">How can we help? *</Label>
                <Textarea id="message" name="message" required maxLength={1500} rows={5} placeholder="Briefly describe your project, goals, or the problem you'd like to solve…" />
              </Field>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="mt-6 w-full bg-gradient-gold text-gold-foreground hover:opacity-90"
            >
              {submitting ? "Sending…" : <>Send via WhatsApp <Send className="ml-1 h-4 w-4" /></>}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              By submitting, your message will open in WhatsApp for direct delivery.
            </p>
          </motion.form>
        </div>
      </Section>
    </>
  );
}

function Field({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`space-y-1.5 ${className}`}>{children}</div>;
}

function ContactCard({
  icon: Icon,
  title,
  detail,
  href,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`flex items-center gap-4 rounded-2xl border p-5 transition-all hover:border-gold/40 ${
        accent
          ? "border-gold/30 bg-gold/5"
          : "border-border bg-surface/60"
      }`}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${accent ? "bg-gold/15 text-gold" : "bg-accent text-foreground"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{detail}</p>
      </div>
    </a>
  );
}
