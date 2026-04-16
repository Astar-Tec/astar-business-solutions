import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "../Section";

const cases = [
  {
    name: "Green Acorn Guest House",
    tagline: "Live client project",
    badge: "Live Client Project",
    url: "http://www.greenacorn.co.za",
    urlLabel: "www.greenacorn.co.za",
    problem:
      "Zero digital presence, bookings handled manually, customers couldn't find them online.",
    solution:
      "Modern website, integrated booking system, and a digital marketing foundation — fully owned by the client.",
    metrics: [
      { value: "↑", label: "Online bookings" },
      { value: "24/7", label: "Availability" },
      { value: "Live", label: "In production" },
    ],
    accent: "from-amber-500/20 to-amber-500/0",
  },
  {
    name: "AgroSense Platform",
    tagline: "AI-powered agricultural intelligence",
    badge: "Production System",
    url: "https://agrosense-client-kappa.vercel.app/",
    urlLabel: "agrosense-client-kappa.vercel.app",
    problem:
      "Smallholder farmers lacked data-driven tools to optimize yields in their own language.",
    solution:
      "Production-ready AI system delivering crop guidance in local languages, including Sesotho — built offline-first for real users.",
    metrics: [
      { value: "100+", label: "Farmers reached" },
      { value: "94%", label: "Adoption rate" },
      { value: "UNDP", label: "Finalist" },
    ],
    accent: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    name: "Telecom & IoT Analytics Platform",
    tagline: "Enterprise-grade data analytics",
    badge: "Enterprise System",
    url: "https://telecom-insight-analytics.vercel.app/",
    urlLabel: "telecom-insight-analytics.vercel.app",
    problem:
      "Manual monitoring and disconnected systems across remote telecom sites with no real-time visibility.",
    solution:
      "Enterprise-style analytics platform with real-time dashboards, telemetry, and alerts — built on AWS IoT Core.",
    metrics: [
      { value: "Real-time", label: "Dashboards" },
      { value: "AWS", label: "IoT Core" },
      { value: "Remote", label: "Deployment" },
    ],
    accent: "from-blue-500/20 to-blue-500/0",
  },
];

export function CaseStudies() {
  return (
    <Section id="work" className="bg-surface/30">
      <SectionHeader
        eyebrow="Proof, not promises"
        title={<>Real businesses. <span className="text-gradient-gold">Real outcomes.</span></>}
        description="Live, deployed systems — not slides. Click through to see them running in production."
      />

      <div className="mt-16 space-y-6">
        {cases.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 md:p-12"
          >
            <div className={`pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br ${c.accent} blur-3xl`} />

            <div className="relative grid gap-10 md:grid-cols-5">
              <div className="md:col-span-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-8 items-center rounded-full border border-gold/30 bg-gold/5 px-3 text-xs font-medium uppercase tracking-wider text-gold">
                    {c.badge}
                  </span>
                  <span className="text-xs text-muted-foreground">{c.tagline}</span>
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {c.name}
                </h3>

                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-gold hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {c.urlLabel}
                </a>

                <div className="mt-6 space-y-4 text-sm md:text-base">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The Challenge</span>
                    <p className="mt-1.5 text-foreground/85 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What We Built</span>
                    <p className="mt-1.5 text-foreground/85 leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-gold/40 hover:text-gold"
                >
                  Visit live site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="md:col-span-2">
                <div className="rounded-2xl border border-border bg-background/40 p-6 backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                    <TrendingUp className="h-4 w-4" />
                    Impact
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-semibold text-gradient-gold">{m.value}</div>
                        <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ArrowUpRight className="absolute right-8 top-8 hidden h-5 w-5 text-muted-foreground transition-all group-hover:text-gold md:block" />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
