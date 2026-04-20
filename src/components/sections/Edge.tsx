import { motion } from "framer-motion";
import { Languages, MapPin, WifiOff, Wrench } from "lucide-react";
import { Section, SectionHeader } from "../Section";

const points = [
  {
    icon: MapPin,
    title: "Built for the African market",
    body: "We design for the realities on the ground — connectivity, devices, payment habits, and customer behavior across SA and Lesotho.",
  },
  {
    icon: Languages,
    title: "Sesotho AI capability",
    body: "Native-language AI experiences that meet customers and users where they are — not just in English.",
  },
  {
    icon: WifiOff,
    title: "Offline-first systems",
    body: "Solutions engineered to work where networks are unreliable, syncing seamlessly when connectivity returns.",
  },
  {
    icon: Wrench,
    title: "Real deployment experience",
    body: "From client websites in production to AWS IoT analytics platforms — we ship systems that survive the real world.",
  },
];

export function Edge() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Our edge"
        title={<>What makes us <span className="text-gradient-gold">different</span></>}
        description="We're not a generic agency. We build for African businesses with the depth, language, and resilience the local market demands."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-gold/30"
          >
            <p.icon className="h-6 w-6 text-gold" />
            <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
