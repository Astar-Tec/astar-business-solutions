import { motion } from "framer-motion";
import { BarChart3, Bot, CalendarCheck, Globe } from "lucide-react";
import { Section, SectionHeader } from "../Section";

const services = [
  {
    icon: Globe,
    title: "Business Websites That Convert",
    problem: "You're invisible online or losing customers to competitors.",
    solution: "Fast, beautiful, conversion-focused websites built for results.",
    outcome: "Turn visitors into paying customers.",
  },
  {
    icon: CalendarCheck,
    title: "Booking & Management Systems",
    problem: "Manual bookings, double-bookings, lost time and revenue.",
    solution: "Custom booking platforms with payments, calendars, and notifications.",
    outcome: "Automate operations and free up your team.",
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    problem: "Repetitive tasks eating into your team's productivity.",
    solution: "Intelligent automation and AI assistants tailored to your workflow.",
    outcome: "Reduce manual work and increase efficiency.",
  },
  {
    icon: BarChart3,
    title: "Data & Insights Dashboards",
    problem: "Decisions made on guesswork instead of real numbers.",
    solution: "Real-time dashboards that surface what matters most.",
    outcome: "Make smarter decisions, faster.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What we do"
        title={<>Productized solutions for <span className="text-gradient-gold">real business problems</span></>}
        description="We don't sell technology. We sell outcomes — backed by systems built to grow with your business."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 transition-all hover:border-gold/40"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>

              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Problem</span>
                  <p className="mt-1 text-foreground/80">{s.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</span>
                  <p className="mt-1 text-foreground/80">{s.solution}</p>
                </div>
                <div className="rounded-lg border border-gold/20 bg-gold/5 p-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Outcome</span>
                  <p className="mt-1 font-medium text-foreground">{s.outcome}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
